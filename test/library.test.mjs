import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile, readdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { apply } from '../plugin/index.js'
const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const MANIFEST = JSON.parse(await readFile(join(ROOT, 'manifest.json'), 'utf8'))
test('100 unique skills, each with frontmatter and a body', async () => {
  assert.equal(MANIFEST.length, 100)
  assert.equal(new Set(MANIFEST.map((x) => x.name)).size, 100)
  for (const entry of MANIFEST) {
    const text = await readFile(join(ROOT, 'skills', entry.dir, 'SKILL.md'), 'utf8')
    assert.match(text, new RegExp(`^name: ${entry.name}$`, 'm'))
    assert.ok(text.length > 300, entry.name)
  }
  const dirs = (await readdir(join(ROOT, 'skills'), { withFileTypes: true })).filter((x) => x.isDirectory())
  assert.equal(dirs.length, 100)
})
test('provider lists and resolves all 100 skills', async () => {
  let factory; apply({ skills: { registerProvider: (fn) => { factory = fn } } })
  const list = await factory().list()
  assert.equal(list.length, 100)
  assert.ok(list.every((x) => x.source === 'bundled'))
  const one = await factory().get({ name: 'typescript-types' })
  assert.ok(one.content.trimStart().startsWith('# TypeScript type design'))
  assert.equal(await factory().get({ name: 'missing' }), undefined)
})

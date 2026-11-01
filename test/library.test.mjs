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
  let factory; apply({ tools: { register: () => {} }, skills: { registerProvider: (fn) => { factory = fn } } })
  const list = await factory().list()
  assert.equal(list.length, 100)
  assert.ok(list.every((x) => x.source === 'bundled'))
  const one = await factory().get({ name: 'typescript-types' })
  assert.ok(one.content.trimStart().startsWith('# TypeScript type design'))
  assert.equal(await factory().get({ name: 'missing' }), undefined)
})

test('every skill has method, verification, boundaries, and no placeholder', async () => {
  for (const entry of MANIFEST) {
    const text = await readFile(join(ROOT, 'skills', entry.dir, 'SKILL.md'), 'utf8')
    for (const heading of ['## Use', '## Method', '## Verification', '## Boundaries']) assert.ok(text.includes(heading), `${entry.name}: ${heading}`)
    assert.ok(!/\bTODO\b|\bTBD\b|placeholder/i.test(text), entry.name)
  }
  assert.equal(new Set(MANIFEST.map((x) => x.description)).size, 100)
})

test('router sends common tasks to relevant skills', async () => {
  const { route } = await import('../src/router.mjs')
  const cases = [
    ['TypeScript discriminated union', 'typescript-types'],
    ['write a unit test for a parser', 'unit-testing'],
    ['threat model an upload endpoint', 'threat-modeling'],
    ['write a SQL query', 'sql-queries'],
    ['prepare for a job interview', 'interview-prep'],
    ['write an SEO landing page', 'seo'],
    ['set up a Docker image', 'docker'],
    ['guard against prompt injection', 'injection-defense'],
    ['review an authentication bypass', 'secure-code-review'],
    ['plan a project with risks', 'project-planning'],
  ]
  for (const [task, expected] of cases) {
    const r = route(task, MANIFEST, 5)
    assert.ok(r.matches.some((m) => m.name === expected), `${task} -> ${r.matches.map((m) => m.name).join(',')}`)
  }
})

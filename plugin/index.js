// DSH bundle: one provider exposing a 100-skill library.
import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
const PLUGIN_DIR = dirname(fileURLToPath(import.meta.url))
const SKILLS_DIR = join(PLUGIN_DIR, '..', 'skills')
const MANIFEST_PATH = join(PLUGIN_DIR, '..', 'manifest.json')
const PROVIDER = 'dsh-skill-library'
let manifestPromise
function loadManifest() { manifestPromise ??= readFile(MANIFEST_PATH, 'utf8').then(JSON.parse); return manifestPromise }
function stripFrontmatter(text) { if (!text.startsWith('---\n')) return text; const end = text.indexOf('\n---\n', 4); return end === -1 ? text : text.slice(end + 5) }
function summary(entry) {
  return { name: entry.name, description: entry.description, ...(entry.whenToUse ? { whenToUse: entry.whenToUse } : {}), invocation: { modelInvocable: true, userInvocable: true }, source: 'bundled', provider: PROVIDER, resourceBase: { kind: 'directory', path: join(SKILLS_DIR, entry.dir) }, rank: 500, locator: entry.name, metadata: { domain: entry.domain, version: '0.1.0' } }
}
export const name = 'skill-library'
export const inject = ['skills']
export function apply(ctx) {
  ctx.skills.registerProvider(() => ({
    name: PROVIDER,
    async list() { return (await loadManifest()).map(summary) },
    async get(candidate) { const entry = (await loadManifest()).find((x) => x.name === candidate.name); if (!entry) return undefined; const content = await readFile(join(SKILLS_DIR, entry.dir, 'SKILL.md'), 'utf8'); return { ...summary(entry), content: stripFrontmatter(content) } },
  }))
}

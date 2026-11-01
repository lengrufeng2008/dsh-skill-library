const STOP = new Set(['the','and','for','with','this','that','from','into','your','you','are','how','what','when','where','which','should','would','could','can','need','want','use','using','a','an','to','of','in','on','at','by','or','is','it','be','as','we','our','i','me','my','do','does','not','no','if','then','than','so','up','out','about','after','before','over','under','more','most','some','any','all','new','best'])
function terms(text) { return [...new Set(String(text).toLowerCase().split(/[^a-z0-9+.#-]+/).filter((t) => t.length >= 3 && !STOP.has(t)))] }
export function route(task, manifest, limit = 5) {
  const q = terms(task)
  const scored = manifest.map((entry) => {
    const hay = `${entry.name} ${entry.description} ${entry.domain}`.toLowerCase()
    let score = 0
    for (const t of q) {
      if (entry.name.toLowerCase().split(/[^a-z0-9]+/).includes(t)) score += 5
      if (hay.includes(t)) score += 2
    }
    return { name: entry.name, domain: entry.domain, description: entry.description, score }
  }).filter((x) => x.score > 0)
  scored.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
  return { task, query: q, matches: scored.slice(0, limit) }
}
export function renderRoute(result) {
  if (!result.matches.length) return 'No matching skill. Ask for a domain or use the full index.'
  return `Top skills for “${result.task}”:\n` + result.matches.map((m, i) => `${i + 1}. **${m.name}** (${m.domain}, score ${m.score}) — ${m.description}`).join('\n')
}

/* global document */

export const buildAndRetainDom = (
  data,
  passes,
  { resetEachPass = false } = {},
) => {
  const statuses = Array.isArray(data.statuses) ? data.statuses : []

  // A little text work per status so a CPU profile has real JS frames
  // (`scoreStatus`/`tokenize`) and not just DOM-internal native frames.
  const tokenize = text => text.split(/\s+/u).filter(Boolean)
  const scoreStatus = status => {
    const tokens = tokenize(status.text ?? ``)
    let score = 0
    for (const token of tokens) {
      score += token.length
    }
    return score
  }

  const byId = new Map()
  const hashtags = []
  const detached = []
  let score = 0

  for (let pass = 0; pass < passes; pass++) {
    if (resetEachPass) {
      document.body.replaceChildren()
      byId.clear()
      hashtags.length = 0
      detached.length = 0
    }
    for (const [index, status] of statuses.entries()) {
      score += scoreStatus(status)

      const article = document.createElement(`article`)
      article.className = `status`

      const author = document.createElement(`h2`)
      author.textContent = status.user?.name ?? ``
      const body = document.createElement(`p`)
      body.textContent = status.text ?? ``
      article.append(author, body)

      for (const tag of status.entities?.hashtags ?? []) {
        const span = document.createElement(`span`)
        span.className = `hashtag`
        span.textContent = `#${tag.text}`
        article.append(span)
        hashtags.push(tag.text)
      }

      document.body.append(article)
      byId.set(`${status.id_str}#${pass}`, { status, article })

      // Detach a third of the subtrees: remove from the document but keep the
      // JS reference so they survive as Detached nodes in the heap snapshot.
      if (index % 3 === 0) {
        article.remove()
        detached.push(article)
      }
    }
  }

  // Retain everything on the page's `window` so it's live at capture time.
  globalThis.__retained = { data, byId, hashtags, detached, score }

  return { statuses: statuses.length, passes, detached: detached.length }
}

export const runInPage = (page, data, passes, options = {}) =>
  page.evaluate(
    `(${buildAndRetainDom.toString()})(${JSON.stringify(data)}, ${passes}, ${JSON.stringify(options)})\n//# sourceURL=chrome-workload.mjs`,
  )

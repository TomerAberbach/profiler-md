/**
 * The in-page workload, shared by every Chrome capture (and Track D's served
 * page). It runs in the *browser* context — only DOM/`window` globals are
 * available, no Node APIs — so it's passed to `page.evaluate(buildAndRetainDom,
 * data, passes)`.
 *
 * It builds a real DOM subtree per status, retains JS structures on `window`,
 * and detaches a subset (removed from the document but still referenced from
 * JS). That detached-but-retained set is the whole point of a browser-flavored
 * fixture: it exercises detached `HTML*Element`/`Window` heap nodes and web
 * `location`s that a Node heap snapshot never contains.
 *
 * `resetEachPass` clears the document and retained refs at the start of every
 * pass so repeated passes keep the live DOM bounded — used by the CPU capture,
 * which loops many times for samples and would otherwise grow a huge document
 * whose native layout cost swamps the JS frames. The heap captures leave it off
 * so allocations and detached nodes accumulate into the snapshot.
 */
export const buildAndRetainDom = (data, passes, { resetEachPass = false } = {}) => {
  const statuses = Array.isArray(data.statuses) ? data.statuses : []

  // A little text work per status so a CPU profile has real JS frames
  // (`scoreStatus`/`tokenize`) and not just DOM-internal native frames.
  const tokenize = text => text.split(/\s+/).filter(Boolean)
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
    for (let index = 0; index < statuses.length; index++) {
      const status = statuses[index]
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
  window.__retained = { data, byId, hashtags, detached, score }

  return { statuses: statuses.length, passes, detached: detached.length }
}

/**
 * Run {@link buildAndRetainDom} in the page with a stable `sourceURL` so sampled
 * frames render as `chrome-workload.mjs` instead of puppeteer's synthetic
 * `pptr:evaluate;…` URL (which embeds the capture script's absolute path). This
 * makes the captured profiles reproducible regardless of where the asset lives.
 */
export const runInPage = (page, data, passes, options = {}) =>
  page.evaluate(
    `(${buildAndRetainDom.toString()})(${JSON.stringify(data)}, ${passes}, ${JSON.stringify(options)})\n//# sourceURL=chrome-workload.mjs`,
  )

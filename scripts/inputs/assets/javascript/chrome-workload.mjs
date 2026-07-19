/* global document */

import { createServer } from 'node:http'
import puppeteer from 'puppeteer'

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

// Fixed rather than ephemeral so the script URL in profiled frames is stable
// across capture runs, letting base and current profiles diff-match.
const WORKLOAD_PORT = 52_789

/**
 * Serves the workload as a real web page (a bare HTML document loading this
 * module's workload function over `http:`) and launches a headless Chrome
 * with a page open on it, so profiled frames carry the web-page script URLs a
 * genuine browser profile has instead of injected-script placeholders.
 *
 * Returns `{ browser, page }`; the caller owns closing the browser.
 */
export const launchWorkloadPage = async () => {
  const script = `globalThis.buildAndRetainDom = ${buildAndRetainDom.toString()}\n`
  const html = `<!doctype html><html><head><script type="module" src="/workload.mjs"></script></head><body></body></html>`
  const server = createServer((request, response) => {
    if (request.url === `/workload.mjs`) {
      response.setHeader(`Content-Type`, `text/javascript`)
      response.end(script)
    } else {
      response.setHeader(`Content-Type`, `text/html`)
      response.end(html)
    }
  })
  await new Promise(resolve => {
    server.listen(WORKLOAD_PORT, `127.0.0.1`, resolve)
  })
  // Serve only until the capture process exits; never hold it open.
  server.unref()

  // A fresh headless Chrome's networking intermittently stops responding,
  // hanging every navigation past puppeteer's timeout for the browser's whole
  // lifetime, so each retry relaunches the browser. `domcontentloaded` rather
  // than the full `load` lifecycle, since the wait below is the real
  // readiness check.
  for (let attempt = 1; ; attempt++) {
    const browser = await puppeteer.launch({
      headless: true,
      args: [`--no-sandbox`, `--no-proxy-server`],
    })
    try {
      const page = await browser.newPage()
      await page.goto(`http://127.0.0.1:${WORKLOAD_PORT}/`, {
        waitUntil: `domcontentloaded`,
      })
      await page.waitForFunction(
        () => typeof globalThis.buildAndRetainDom === `function`,
      )
      return { browser, page }
    } catch (error) {
      await browser.close().catch(() => {})
      if (attempt === 3) {
        throw error
      }
    }
  }
}

// A string with an explicit sourceURL rather than a function: puppeteer names
// an evaluated function's script after its node-side callsite (a
// `pptr:evaluate;… (file:///tmp/…)` URL), which differs per capture
// environment and would keep the wrapper frame from diff-matching across
// base and current profiles.
export const runInPage = (page, data, passes, options = {}) =>
  page.evaluate(
    `globalThis.buildAndRetainDom(${JSON.stringify(data)}, ${passes}, ${JSON.stringify(options)})\n//# sourceURL=http://127.0.0.1:${WORKLOAD_PORT}/run.mjs`,
  )

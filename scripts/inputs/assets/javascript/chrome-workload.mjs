/* global document */

import { readFileSync } from 'node:fs'
import { createServer } from 'node:http'
import puppeteer from 'puppeteer'

/**
 * Charts the statuses with d3, the page's `globalThis.d3`: a scatter plot of
 * each status's word count against its author's followers, with axes and a
 * list of hashtag counts. Every third pass's chart is removed from the
 * document but kept referenced, so it survives as Detached nodes in a heap
 * snapshot.
 */
export const buildAndRetainDom = (
  data,
  passes,
  { resetEachPass = false } = {},
) => {
  const { d3 } = globalThis
  const statuses = Array.isArray(data.statuses) ? data.statuses : []

  const parseTime = d3.timeParse(`%a %b %d %H:%M:%S %Z %Y`)
  const formatCount = d3.format(`,`)
  const rows = statuses.map(status => ({
    status,
    created: parseTime(status.created_at ?? ``),
    words: (status.text ?? ``).split(/\s+/u).filter(Boolean).length,
    followers: status.user?.followers_count ?? 0,
    hashtags: (status.entities?.hashtags ?? []).map(tag => tag.text),
  }))
  const hashtagCounts = d3.rollup(
    rows.flatMap(row => row.hashtags),
    tags => tags.length,
    tag => tag,
  )
  const hashtags = [...hashtagCounts].sort(([, left], [, right]) =>
    d3.descending(left, right),
  )

  const x = d3
    .scaleLinear()
    .domain(d3.extent(rows, row => row.words))
    .range([40, 620])
  const y = d3
    .scaleLog()
    .domain([1, d3.max(rows, row => row.followers + 1) ?? 1])
    .range([420, 20])
  const color = d3.scaleOrdinal(d3.schemeTableau10)

  // A histogram of word counts, a pie of languages, and a time series of
  // statuses per hour.
  const chartBreakdowns = (d3, svg, rows, hashtags, color) => {
    const bins = d3
      .bin()
      .value(row => row.words)
      .thresholds(10)(rows)
    const binX = d3
      .scaleBand()
      .domain(bins.map((_bin, index) => index))
      .range([0, 300])
      .padding(0.1)
    const binY = d3
      .scaleLinear()
      .domain([0, d3.max(bins, bin => bin.length) ?? 1])
      .nice()
      .range([100, 0])
    svg
      .append(`g`)
      .selectAll(`rect`)
      .data(bins)
      .join(`rect`)
      .attr(`x`, (_bin, index) => binX(index))
      .attr(`y`, bin => binY(bin.length))
      .attr(`width`, binX.bandwidth())
      .attr(`height`, bin => 100 - binY(bin.length))

    const languages = d3.rollups(
      rows,
      group => group.length,
      row => row.status.user?.lang ?? ``,
    )
    const arc = d3.arc().innerRadius(20).outerRadius(60)
    svg
      .append(`g`)
      .attr(`transform`, `translate(400,100)`)
      .selectAll(`path`)
      .data(d3.pie().value(([, count]) => count)(languages))
      .join(`path`)
      .attr(`d`, arc)
      .attr(`fill`, slice => color(slice.data[0]))

    const perHour = d3.rollups(
      rows.filter(row => row.created),
      group => group.length,
      row => d3.timeHour.floor(row.created),
    )
    perHour.sort(([left], [right]) => d3.ascending(left, right))
    const time = d3
      .scaleTime()
      .domain(d3.extent(perHour, ([hour]) => hour))
      .range([0, 300])
    const count = d3
      .scaleLinear()
      .domain([0, d3.max(perHour, ([, total]) => total) ?? 1])
      .range([100, 0])
    const line = d3
      .line()
      .x(([hour]) => time(hour))
      .y(([, total]) => count(total))
      .curve(d3.curveMonotoneX)
    const area = d3
      .area()
      .x(([hour]) => time(hour))
      .y0(100)
      .y1(([, total]) => count(total))
    svg.append(`path`).attr(`d`, area(perHour))
    svg.append(`path`).attr(`d`, line(perHour))
    svg.append(`g`).call(d3.axisBottom(time).ticks(d3.timeHour.every(1)))
    svg
      .append(`g`)
      .selectAll(`text`)
      .data(hashtags.slice(0, 5))
      .join(`text`)
      .text(([tag]) => d3.interpolateString(`#`, `#${tag}`)(0.5))
  }

  // A treemap of followers by language, a force layout of the statuses, a
  // Voronoi diagram of the scatter plot, and its density contours.
  const chartLayouts = (d3, svg, rows, x, y) => {
    const root = d3
      .hierarchy({
        children: d3
          .groups(rows, row => row.status.user?.lang ?? ``)
          .map(([lang, group]) => ({ lang, children: group })),
      })
      .sum(node => node.followers ?? 0)
      .sort((left, right) => d3.descending(left.value, right.value))
    d3.treemap().size([300, 200]).padding(1)(root)
    svg
      .append(`g`)
      .selectAll(`rect`)
      .data(root.leaves())
      .join(`rect`)
      .attr(`x`, leaf => leaf.x0)
      .attr(`y`, leaf => leaf.y0)
      .attr(`width`, leaf => leaf.x1 - leaf.x0)
      .attr(`height`, leaf => leaf.y1 - leaf.y0)

    const nodes = rows.map(row => ({ row }))
    const links = d3
      .pairs(nodes)
      .map(([source, target]) => ({ source, target }))
    const simulation = d3
      .forceSimulation(nodes)
      .force(`link`, d3.forceLink(links).distance(20))
      .force(`charge`, d3.forceManyBody().strength(-10))
      .force(`center`, d3.forceCenter(320, 220))
      .force(`collide`, d3.forceCollide(4))
      .stop()
    simulation.tick(30)
    svg
      .append(`g`)
      .selectAll(`circle`)
      .data(nodes)
      .join(`circle`)
      .attr(`cx`, node => node.x)
      .attr(`cy`, node => node.y)
      .attr(`r`, 2)

    const points = rows.map(row => [x(row.words), y(row.followers + 1)])
    const delaunay = d3.Delaunay.from(points)
    svg.append(`path`).attr(`d`, delaunay.voronoi([0, 0, 640, 440]).render())
    svg
      .append(`g`)
      .selectAll(`path`)
      .data(d3.contourDensity().size([640, 440]).bandwidth(20)(points))
      .join(`path`)
      .attr(`d`, d3.geoPath())
  }

  const detached = []
  let score = 0
  for (let pass = 0; pass < passes; pass++) {
    if (resetEachPass) {
      d3.select(document.body).selectAll(`*`).remove()
      detached.length = 0
    }

    const svg = d3
      .select(document.body)
      .append(`svg`)
      .attr(`width`, 640)
      .attr(`height`, 440)
    svg
      .append(`g`)
      .selectAll(`g`)
      .data(rows, row => row.status.id_str)
      .join(enter => {
        const point = enter.append(`g`)
        point.append(`circle`)
        point.append(`title`)
        return point
      })
      .attr(
        `transform`,
        row => `translate(${x(row.words)},${y(row.followers + 1)})`,
      )
      .call(point =>
        point
          .select(`circle`)
          .attr(`r`, row => 2 + row.hashtags.length)
          .attr(`fill`, row => color(row.status.user?.lang ?? ``)),
      )
      .call(point =>
        point
          .select(`title`)
          .text(
            row =>
              `${row.status.user?.name ?? ``}: ${formatCount(row.followers)} followers, ${d3.timeFormat(`%Y-%m-%d`)(row.created ?? new Date(0))}`,
          ),
      )
    svg.append(`g`).attr(`transform`, `translate(0,420)`).call(d3.axisBottom(x))
    svg
      .append(`g`)
      .attr(`transform`, `translate(40,0)`)
      .call(d3.axisLeft(y).ticks(5, formatCount))
    svg
      .append(`g`)
      .selectAll(`text`)
      .data(hashtags)
      .join(`text`)
      .attr(`x`, 500)
      .attr(`y`, (_hashtag, index) => 30 + index * 12)
      .text(([tag, count]) => `#${tag} ${formatCount(count)}`)
    chartBreakdowns(d3, svg, rows, hashtags, color)
    chartLayouts(d3, svg, rows, x, y)
    score += d3.sum(rows, row => row.words)

    if (pass % 3 === 0) {
      svg.remove()
      detached.push(svg.node())
    }
  }

  // Retain everything on the page's `window` so it's live at capture time.
  globalThis.__retained = { data, rows, hashtagCounts, detached, score }

  return { statuses: statuses.length, passes, detached: detached.length }
}

// Fixed rather than ephemeral so the script URL in profiled frames is stable
// across capture runs, letting base and current profiles diff-match.
const WORKLOAD_PORT = 52_789

/**
 * The minified d3 bundle the page loads, at the path a development server
 * serves a dependency from, so its frames are categorized as third-party.
 */
const D3_PATH = `/node_modules/d3/dist/d3.min.js`

/**
 * Serves the workload as a real web page (a bare HTML document loading d3's
 * minified bundle and this module's workload function over `http:`) and
 * launches a headless Chrome with a page open on it, so profiled frames carry
 * the web-page script URLs a genuine browser profile has instead of
 * injected-script placeholders. The caller closes the returned browser.
 */
export const launchWorkloadPage = async () => {
  const script = `globalThis.buildAndRetainDom = ${buildAndRetainDom.toString()}\n`
  const d3 = readFileSync(new URL(D3_PATH.slice(1), import.meta.url), `utf8`)
  const html = `<!doctype html><html><head><script src="${D3_PATH}"></script><script type="module" src="/workload.mjs"></script></head><body></body></html>`
  const server = createServer((request, response) => {
    if (request.url === D3_PATH) {
      response.setHeader(`Content-Type`, `text/javascript`)
      response.end(d3)
    } else if (request.url === `/workload.mjs`) {
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
  server.unref()

  // A fresh headless Chrome's networking intermittently stops responding,
  // hanging every navigation past puppeteer's timeout for the browser's whole
  // lifetime, so each retry relaunches the browser. `domcontentloaded` rather
  // than the full `load` lifecycle, since `waitForFunction` is the readiness
  // check.
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

<!--
Draft bug report to file upstream at https://github.com/oven-sh/bun/issues
Kept in-repo because it documents why there is no Bun-sourced
`webkit-timeline-recording` fixture (Track C in the headless-capture plan).
Delete once filed.
-->

# `ScriptProfiler.trackingComplete` samples have `timestamp: 0` for most samples

## Version

- Bun **1.3.13**
- Platform: macOS (darwin) arm64

## Summary

When driving Bun over the WebKit Inspector protocol's `ScriptProfiler` domain
with `includeSamples: true`, the `ScriptProfiler.trackingComplete` event reports
a `samples.stackTraces` array in which **most samples carry `timestamp: 0`**.
Only a short tail of samples carries real, monotonically increasing timestamps
(spaced ~1.5 ms apart, consistent with the sampler interval).

Because the per-sample `timestamp` is how a consumer derives sample durations
(this is what Safari's Web Inspector does to build a Timelines recording), the
broken timestamps make it impossible to attribute time per sample: naively
taking consecutive deltas dumps ~85% of the total recording time onto the single
sample at the 0 → first-real-timestamp jump.

## Reproduction

`workload.mjs` (CPU work, then stay alive so the driver can stop tracking):

```js
globalThis.__sink = 0
for (let pass = 0; pass < 200; pass++) {
  for (let i = 0; i < 2_000_000; i++) {
    globalThis.__sink += Math.sqrt(i)
  }
}
console.error(`WORKLOAD_DONE`)
setInterval(() => {}, 1000)
```

`driver.mjs` (run with `node driver.mjs`; spawns Bun and drives the inspector):

```js
import { spawn } from 'node:child_process'

const port = 9555
const child = spawn(
  `bun`,
  [`--inspect-wait=127.0.0.1:${port}/x`, `workload.mjs`],
  { stdio: [`ignore`, `inherit`, `pipe`] },
)
let done
const donePromise = new Promise(resolve => {
  done = resolve
})
child.stderr.on(`data`, d => {
  if (d.toString().includes(`WORKLOAD_DONE`)) {
    done()
  }
})
await new Promise(r => {
  setTimeout(r, 700)
})

const ws = new WebSocket(`ws://127.0.0.1:${port}/x`)
let id = 0
const pending = new Map()
let complete
const send = (method, params = {}) =>
  new Promise((res, rej) => {
    pending.set(++id, { res, rej })
    ws.send(JSON.stringify({ id, method, params }))
  })
ws.addEventListener(`message`, ev => {
  const m = JSON.parse(ev.data)
  if (m.id && pending.has(m.id)) {
    const p = pending.get(m.id)
    pending.delete(m.id)
    if (m.error) {
      p.rej(new Error(JSON.stringify(m.error)))
    } else {
      p.res(m.result)
    }
  } else if (m.method === `ScriptProfiler.trackingComplete`) {
    complete = m.params
  }
})
await new Promise(r => {
  ws.addEventListener(`open`, r)
})

await send(`Inspector.enable`)
await send(`ScriptProfiler.startTracking`, { includeSamples: true })
await send(`Inspector.initialized`) // Resumes the --inspect-wait runtime
await donePromise
await send(`ScriptProfiler.stopTracking`)
await new Promise(r => {
  setTimeout(r, 300)
})

const ts = complete.samples.stackTraces.map(t => t.timestamp)
const zeros = ts.filter(t => t === 0).length
console.log(`samples: ${ts.length}, timestamp===0: ${zeros}`)
console.log(`first 5:`, ts.slice(0, 5))
console.log(`last 5:`, ts.slice(-5))
ws.close()
child.kill()
```

## Observed

```
samples: 320, timestamp===0: 271
first 5: [ 0, 0, 0, 0, 0 ]
last 5: [ 0.9669688750291243, 0.9684274584287778, 0.969594250083901, ... ]
```

271 of 320 samples are stamped `0`; only the final ~49 carry real timestamps.

## Expected

Every sample in `samples.stackTraces` should carry a real, monotonically
increasing `timestamp` (in seconds), as WebKit/JavaScriptCore does — so that
consumers can compute per-sample durations. Safari's Web Inspector relies on
this to build the per-sample durations in an exported Timelines recording.

## Impact

This prevents using a headless Bun process as a stand-in for Safari when
generating WebKit Timelines recordings: the call stacks are correct, but the
timing is unusable.

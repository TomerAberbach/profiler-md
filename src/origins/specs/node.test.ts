import { describe, expect, test } from 'vitest'
import { absoluteEntry, determineOrigin, relativeEntry } from '../testing.ts'
import { nodeOriginSpec } from './node.ts'

describe(`detection`, () => {
  test(`detects Node's native profiler by node: specifiers`, () => {
    expect(
      determineOrigin({
        format: `v8-cpu-profile`,
        entries: [absoluteEntry(`x`, `node:fs`)],
      }),
    ).toBe(`node`)
  })

  test(`detects Node by a node_modules dependency`, () => {
    expect(
      determineOrigin({
        format: `v8-cpu-profile`,
        entries: [absoluteEntry(`f`, `file:///app/node_modules/x/index.js`)],
      }),
    ).toBe(`node`)
  })

  test(`does not detect Node by a page script a development server serves from node_modules`, () => {
    expect(
      determineOrigin({
        format: `v8-cpu-profile`,
        entries: [
          absoluteEntry(
            `f`,
            `http://localhost:5173/node_modules/.vite/deps/d3.js`,
          ),
        ],
      }),
    ).toBe(`chrome`)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = nodeOriginSpec

  test.each([`node:fs`, `node:internal/streams/readable`])(
    `the %s builtin is stdlib`,
    url => {
      expect(categorizeEntry(absoluteEntry(`f`, url))).toBe(`stdlib`)
    },
  )

  test(`bun: specifiers are not treated as Node stdlib`, () => {
    // Reachable: a Bun profile with `node:` entries but no location-less JSC
    // builtin frames resolves to node, whose categorization then sees `bun:`.
    expect(categorizeEntry(absoluteEntry(`f`, `bun:sqlite`))).toBe(`ours`)
  })

  test(`node_modules/ is third-party`, () => {
    expect(
      categorizeEntry(
        absoluteEntry(`f`, `file:///app/node_modules/x/index.js`),
      ),
    ).toBe(`third-party`)
  })

  test(`V8 regexp frames are regexp`, () => {
    expect(categorizeEntry(relativeEntry(`RegExp: /a/`))).toBe(`regexp`)
  })
})

describe(`detection of a trace`, () => {
  test(`detects Node by the process name origin hint`, () => {
    expect(
      determineOrigin({ format: `trace-event`, entries: [], hint: `node` }),
    ).toBe(`node`)
  })
})

describe(`categorizeTraceEvent`, () => {
  const { categorizeTraceEvent } = nodeOriginSpec

  test(`a file system event is I/O`, () => {
    expect(
      categorizeTraceEvent({
        name: `fs.sync.read`,
        declaredCategories: [`node`, `node.fs`, `node.fs.sync`],
      }),
    ).toBe(`io`)
  })

  test(`an async resource's callback is script`, () => {
    expect(
      categorizeTraceEvent({
        name: `PROMISE_CALLBACK`,
        declaredCategories: [`node`, `node.async_hooks`],
      }),
    ).toBe(`script`)
  })

  test(`an async resource's lifetime has no category`, () => {
    expect(
      categorizeTraceEvent({
        name: `PROMISE`,
        declaredCategories: [`node`, `node.async_hooks`],
      }),
    ).toBeUndefined()
  })

  test(`an event named like a callback outside async_hooks has no category`, () => {
    expect(
      categorizeTraceEvent({
        name: `MY_CALLBACK`,
        declaredCategories: [`node`, `node.environment`],
      }),
    ).toBeUndefined()
  })

  test(`an event V8 writes takes V8's category`, () => {
    expect(
      categorizeTraceEvent({
        name: `RunMicrotasks`,
        declaredCategories: [`v8.execute`],
      }),
    ).toBe(`script`)
  })
})

describe(`normalizeTraceEvent`, () => {
  test(`a V8 collection becomes a collection's events`, () => {
    expect(
      nodeOriginSpec.normalizeTraceEvent({
        type: `span`,
        name: `MinorGC`,
        start: 0,
        duration: 10,
        arguments: { usedHeapSizeBefore: 8, usedHeapSizeAfter: 2 },
      }),
    ).toMatchObject({
      event: { name: `MinorGC`, category: `garbage-collection-pause` },
      readings: [{ value: 8 }, { value: 2 }],
    })
  })
})

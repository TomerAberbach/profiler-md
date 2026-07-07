import { readdirSync, readFileSync } from 'node:fs'
import { describe, expect, test, vi } from 'vitest'
import { parseExampleFilename } from '../cli/examples.ts'
import { fileReferenceId } from '../location.ts'
import { inputPath, readInput } from '../testing/inputs.ts'
import {
  categoryTables,
  improvementsTables,
  profileTitles,
  regressionsTables,
} from '../testing/markdown.ts'
import {
  diffProfiles,
  diffProfilesAsync,
  formatConverters,
  profileToMd,
  profileToMdAsync,
} from './index.ts'
import {
  makeV8CallFrame,
  makeV8CpuProfileRoot,
} from './v8/cpu-profile/testing.ts'
import {
  EDGE_TYPE_HIDDEN,
  makeV8Edge,
  makeV8Node,
  makeV8Snapshot,
  NODE_TYPE_OBJECT,
  NODE_TYPE_SYNTHETIC,
} from './v8/heap-snapshot/testing.ts'

vi.setConfig({ testTimeout: 125_000 })

const inputSets = {
  json: new Set<string>(),
  binary: new Set<string>(),
  profile: new Set<string>(),
  snapshot: new Set<string>(),
}
// Every committed input is exercised through the registry. Only the `base`
// variant of each is taken since `current` is a near-identical re-run, keeping
// the matrix of auto-detect/diff cases manageable.
for (const filename of readdirSync(inputPath())) {
  const { variant, format } = parseExampleFilename(filename)
  if (variant !== `base`) {
    continue
  }
  const { type, shape } = formatConverters[format]
  inputSets[type].add(filename)
  inputSets[shape].add(filename)
}

const jsonInputs = [...inputSets.json]
const binaryInputs = [...inputSets.binary]
const allInputs = [...jsonInputs, ...binaryInputs]
const snapshotInputs = [...inputSets.snapshot]

// Some real captures legitimately have no samples (e.g. a lock profile that saw
// no contention), so the pipeline yields the no-data message instead of a
// heading. Either outcome means the format was detected and conversion ran end
// to end, which is what these per-input smoke checks assert.
const expectConverted = (md: string): void => {
  expect(md).toMatch(/^(?:# |No profiling data found\.)/u)
}
const expectDiffConverted = (md: string): void => {
  expect(md).toMatch(/^(?:# .*diff|No profiling data found\.)/iu)
}

// A valid Speedscope file that carries no profiles, so it aggregates to nothing.
const emptyProfile = JSON.stringify({
  $schema: `https://www.speedscope.app/file-format-schema.json`,
  shared: { frames: [] },
  profiles: [],
})

describe(`profileToMd`, () => {
  describe.each(jsonInputs)(`auto-detects %s`, filename => {
    const content = readInput(filename)

    test(`from string`, () => {
      const md = profileToMd(content.toString(`utf8`), { baseURL: null })

      expectConverted(md)
    })

    test(`from Uint8Array`, () => {
      const md = profileToMd(content, { baseURL: null })

      expectConverted(md)
    })
  })

  describe.each(binaryInputs)(`auto-detects %s`, filename => {
    const content = readInput(filename)

    test(`from Uint8Array`, () => {
      const md = profileToMd(content, { baseURL: null })

      expectConverted(md)
    })

    test(`from one-shot Iterable<Uint8Array>`, () => {
      const bytes = new Uint8Array(content)
      const iterable = (function* () {
        yield bytes
      })()

      const md = profileToMd(iterable, { baseURL: null })

      expectConverted(md)
    })
  })

  test(`forced format produces same output as auto-detect`, () => {
    const content = readFileSync(inputPath(`javascript.node.base.cpuprofile`))

    const auto = profileToMd(content.toString(`utf8`), { baseURL: null })
    const forced = profileToMd(
      { data: content.toString(`utf8`), format: `v8-cpu-profile` },
      { baseURL: null },
    )

    expect(forced).toBe(auto)
  })

  test(`reports when there is no profiling data`, () => {
    const md = profileToMd(emptyProfile, { baseURL: null })

    expect(md).toBe(`No profiling data found.\n`)
  })

  test(`throws on unknown data`, () => {
    expect(() => profileToMd(`{}`)).toThrow(/could not detect/iu)
  })

  test(`throws unified error on non-JSON string`, () => {
    expect(() => profileToMd(`this is not a profile`)).toThrow(
      /could not detect/iu,
    )
  })

  test(`detection moves on when a JSON format's parse rejects prefiltered input`, () => {
    // Passes Speedscope's cheap `matches` prefilter but fails its `parse`
    // (`shared.frames` is missing), so detection moves on and reports an
    // unknown format instead of leaking the parse error.
    const almostSpeedscope = JSON.stringify({
      $schema: `https://www.speedscope.app/file-format-schema.json`,
      shared: {},
      profiles: [],
    })

    expect(() => profileToMd(almostSpeedscope)).toThrow(/could not detect/iu)
  })

  test.each([
    `javascript.node.base.cpuprofile`,
    `python.py-spy.cpu.base.collapsed`,
  ])(
    `auto-detection of %s propagates a throwing categorizeEntries`,
    filename => {
      // Errors raised after a format is detected (here from a user callback
      // during aggregation) are real errors, not detection misses, so they must
      // surface instead of being swallowed into an unknown-format error.
      const content = readFileSync(inputPath(filename))

      expect(() =>
        profileToMd(content, {
          baseURL: null,
          categorizeEntries: () => {
            throw new Error(`categorize failed`)
          },
        }),
      ).toThrow(`categorize failed`)
    },
  )

  test(`throws when categorizeEntries returns a misaligned array`, () => {
    expect(() =>
      profileToMd(
        { data: baseCpuProfile, format: `v8-cpu-profile` },
        {
          baseURL: null,
          // One fewer category than entries, so the result no longer aligns
          // with the entries by index.
          categorizeEntries: entries => entries.slice(1).map(() => `ours`),
        },
      ),
    ).toThrow(/one category per entry/u)
  })
})

describe(`profileToMdAsync`, () => {
  describe.each(allInputs)(`auto-detects %s`, filename => {
    const content = readInput(filename)

    test(`from Blob`, async () => {
      const blob = new Blob([content])

      const md = await profileToMdAsync(blob, { baseURL: null })

      expectConverted(md)
    })

    test(`from ReadableStream`, async () => {
      const stream = new ReadableStream<Uint8Array>({
        start(controller) {
          controller.enqueue(content)
          controller.close()
        },
      })

      const md = await profileToMdAsync(stream, { baseURL: null })

      expectConverted(md)
    })
  })

  test(`forced format works`, async () => {
    const content = readFileSync(inputPath(`javascript.node.base.cpuprofile`))
    const blob = new Blob([content])

    const md = await profileToMdAsync(
      { data: blob, format: `v8-cpu-profile` },
      { baseURL: null },
    )

    expect(md).toMatch(/^# /u)
  })

  test(`forced binary format streams a ReadableStream through parseAsync`, async () => {
    // Forcing the format routes into the streaming `parseAsync` path, which must
    // produce the same output as the sync conversion of the same bytes.
    const content = readFileSync(inputPath(`python.py-spy.cpu.base.collapsed`))
    const stream = new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(content)
        controller.close()
      },
    })

    const md = await profileToMdAsync(
      { data: stream, format: `collapsed` },
      { baseURL: null },
    )

    expect(md).toBe(
      profileToMd({ data: content, format: `collapsed` }, { baseURL: null }),
    )
  })

  test(`throws on unknown data`, async () => {
    const blob = new Blob([`{}`])

    await expect(profileToMdAsync(blob)).rejects.toThrow(/could not detect/iu)
  })
})

// Root -> funcA (5 samples), funcB (3 samples), each sample 20µs.
const baseCpuProfile = JSON.stringify({
  nodes: [
    makeV8CpuProfileRoot([2, 3]),
    {
      id: 2,
      hitCount: 5,
      callFrame: makeV8CallFrame(`funcA`, `file:///project/src/a.ts`),
    },
    {
      id: 3,
      hitCount: 3,
      callFrame: makeV8CallFrame(`funcB`, `file:///project/src/b.ts`),
    },
  ],
  samples: [2, 2, 2, 2, 2, 3, 3, 3],
  timeDeltas: Array.from({ length: 8 }, () => 20),
})

// Root -> funcA (now 10 samples), funcC (new, 2 samples), each sample 20µs.
const currentCpuProfile = JSON.stringify({
  nodes: [
    makeV8CpuProfileRoot([2, 3]),
    {
      id: 2,
      hitCount: 10,
      callFrame: makeV8CallFrame(`funcA`, `file:///project/src/a.ts`),
    },
    {
      id: 3,
      hitCount: 2,
      callFrame: makeV8CallFrame(`funcC`, `file:///project/src/c.ts`),
    },
  ],
  samples: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3],
  timeDeltas: Array.from({ length: 12 }, () => 20),
})

// Root -> Grew (1 instance, 100 B), Removed (1 instance, 50 B).
const baseHeapSnapshot = JSON.stringify(
  makeV8Snapshot({
    nodeCount: 3,
    edgeCount: 2,
    nodes: [
      ...makeV8Node({
        type: NODE_TYPE_SYNTHETIC,
        name: 0,
        id: 1,
        selfSize: 0,
        edgeCount: 2,
      }), // Root
      ...makeV8Node({
        type: NODE_TYPE_OBJECT,
        name: 1,
        id: 3,
        selfSize: 100,
        edgeCount: 0,
      }), // `Grew`
      ...makeV8Node({
        type: NODE_TYPE_OBJECT,
        name: 2,
        id: 5,
        selfSize: 50,
        edgeCount: 0,
      }), // `Removed`
    ],
    edges: [
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 6 }), // Root -> `Grew` (flat 6)
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 12 }), // Root -> `Removed` (flat 12)
    ],
    strings: [``, `Grew`, `Removed`],
  }),
)

// Root -> Grew (now 2 instances, 300 B total), Added (new, 1 instance, 30 B).
const currentHeapSnapshot = JSON.stringify(
  makeV8Snapshot({
    nodeCount: 4,
    edgeCount: 3,
    nodes: [
      ...makeV8Node({
        type: NODE_TYPE_SYNTHETIC,
        name: 0,
        id: 1,
        selfSize: 0,
        edgeCount: 3,
      }), // Root
      ...makeV8Node({
        type: NODE_TYPE_OBJECT,
        name: 1,
        id: 3,
        selfSize: 120,
        edgeCount: 0,
      }), // `Grew`
      ...makeV8Node({
        type: NODE_TYPE_OBJECT,
        name: 1,
        id: 5,
        selfSize: 180,
        edgeCount: 0,
      }), // `Grew`
      ...makeV8Node({
        type: NODE_TYPE_OBJECT,
        name: 2,
        id: 7,
        selfSize: 30,
        edgeCount: 0,
      }), // `Added`
    ],
    edges: [
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 6 }), // Root -> `Grew` (flat 6)
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 12 }), // Root -> `Grew` (flat 12)
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 18 }), // Root -> `Added` (flat 18)
    ],
    strings: [``, `Grew`, `Added`],
  }),
)

describe(`diffProfiles`, () => {
  test.each(allInputs)(
    `auto-detects %s and produces zero deltas against itself`,
    filename => {
      const content = readInput(filename)

      const md = diffProfiles(content, content, { baseURL: null })

      expectDiffConverted(md)
      // No regressions or progressions when diffing an input against itself.
      expect(md).not.toMatch(/Regressions|Improvements/u)
    },
  )

  test(`accepts an explicit { data, format }`, () => {
    const nodeCpuProfile = readFileSync(
      inputPath(`javascript.node.base.cpuprofile`),
      `utf8`,
    )
    const denoCpuProfile = readFileSync(
      inputPath(`javascript.deno.base.cpuprofile`),
      `utf8`,
    )

    const md = diffProfiles(
      { data: nodeCpuProfile, format: `v8-cpu-profile` },
      { data: denoCpuProfile, format: `v8-cpu-profile` },
      { baseURL: null },
    )

    expect(md).toMatch(/^# .*diff/iu)
  })

  test(`diffs two CPU profiles end-to-end`, () => {
    const md = diffProfiles(
      { data: baseCpuProfile, format: `v8-cpu-profile` },
      { data: currentCpuProfile, format: `v8-cpu-profile` },
      { baseURL: `/project` },
    )

    expect(profileTitles(md)).toEqual([`CPU profile diff`])
    expect(categoryTables(md)).toEqual([
      [
        {
          Category: `ours`,
          Change: `+50.0%`,
          Delta: `+0.08ms`,
          '%': `100.0%`,
          Time: `0.2ms`,
          Samples: `8 → 12`,
        },
      ],
    ])
    // FuncA grew, funcC is new, funcB was removed. The synthetic `(root)`
    // common ancestor is hidden by the default `showEntry`.
    const funcA = {
      Change: `+100.0%`,
      Delta: `+0.10ms`,
      '%': `62.5% → 83.3%`,
      Time: `0.1ms → 0.2ms`,
      Samples: `5 → 10`,
      Function: `funcA`,
      Location: `src/a.ts:1:1`,
    }
    const funcC = {
      Change: `new`,
      Delta: `+0.04ms`,
      '%': `0.0% → 16.7%`,
      Time: `0ms → 40.0µs`,
      Samples: `0 → 2`,
      Function: `funcC`,
      Location: `src/c.ts:1:1`,
    }
    const funcB = {
      Change: `removed`,
      Delta: `-0.06ms`,
      '%': `37.5% → 0.0%`,
      Time: `0.1ms → 0ms`,
      Samples: `3 → 0`,
      Function: `funcB`,
      Location: `src/b.ts:1:1`,
    }
    expect(regressionsTables(md, `Self time`)).toEqual([[funcA, funcC]])
    expect(improvementsTables(md, `Self time`)).toEqual([[funcB]])
    expect(regressionsTables(md, `Total time`)).toEqual([[funcA, funcC]])
    expect(improvementsTables(md, `Total time`)).toEqual([[funcB]])
  })

  test(`diffs two heap snapshots end-to-end`, () => {
    const md = diffProfiles(
      { data: baseHeapSnapshot, format: `v8-heap-snapshot` },
      { data: currentHeapSnapshot, format: `v8-heap-snapshot` },
      { baseURL: null },
    )

    expect(profileTitles(md)).toEqual([`Heap snapshot diff`])
    expect(categoryTables(md)).toEqual([
      [
        {
          Category: `object`,
          Change: `+120.0%`,
          Delta: `+180 B`,
          '%': `100.0%`,
          Size: `150 B → 330 B`,
          Nodes: `2 → 3`,
        },
        {
          Category: `synthetic`,
          Change: `—`,
          Delta: `0 B`,
          '%': `0.0%`,
          Size: `0 B`,
          Nodes: `1`,
        },
      ],
    ])
    // `Grew` gained an instance, `Added` is new, `Removed` was removed.
    const grew = {
      Change: `+200.0%`,
      Delta: `+200 B`,
      '%': `66.7% → 90.9%`,
      Size: `100 B → 300 B`,
      Instances: `1 → 2`,
      Constructor: `Grew`,
    }
    const added = {
      Change: `new`,
      Delta: `+30 B`,
      '%': `0.0% → 9.1%`,
      Size: `0 B → 30 B`,
      Instances: `0 → 1`,
      Constructor: `Added`,
    }
    const removed = {
      Change: `removed`,
      Delta: `-50 B`,
      '%': `33.3% → 0.0%`,
      Size: `50 B → 0 B`,
      Instances: `1 → 0`,
      Constructor: `Removed`,
    }
    expect(regressionsTables(md, `Self size`)).toEqual([[grew, added]])
    expect(improvementsTables(md, `Self size`)).toEqual([[removed]])
    expect(regressionsTables(md, `Retained size`)).toEqual([[grew, added]])
    expect(improvementsTables(md, `Retained size`)).toEqual([[removed]])
  })

  // The default `matchEntry`'s build-hash stripping (so functions match across
  // builds despite per-build Cargo/rustc hashes in their paths) is covered at a
  // lower level by `src/profile/diff.test.ts` and `src/snapshot/diff.test.ts`,
  // since no committed input pair exhibits a differing build hash.

  test(`matchEntry matches functions whose locations differ across profiles`, () => {
    // `funcA`'s file carries a per-build suffix, so by default the two sides
    // don't match. The `matchEntry` hook equates the locations; the matched
    // row displays the current profile's real path.
    const base = JSON.stringify({
      nodes: [
        makeV8CpuProfileRoot([2]),
        {
          id: 2,
          hitCount: 5,
          callFrame: makeV8CallFrame(`funcA`, `file:///project/src/a-111.ts`),
        },
      ],
      samples: [2, 2, 2, 2, 2],
      timeDeltas: Array.from({ length: 5 }, () => 20),
    })
    const current = JSON.stringify({
      nodes: [
        makeV8CpuProfileRoot([2]),
        {
          id: 2,
          hitCount: 10,
          callFrame: makeV8CallFrame(`funcA`, `file:///project/src/a-222.ts`),
        },
      ],
      samples: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      timeDeltas: Array.from({ length: 10 }, () => 20),
    })

    const md = diffProfiles(
      { data: base, format: `v8-cpu-profile` },
      { data: current, format: `v8-cpu-profile` },
      {
        baseURL: `/project`,
        matchEntry: entry =>
          entry.location
            ? {
                location: fileReferenceId(entry.location).replace(
                  /a-\d+\.ts$/u,
                  `a.ts`,
                ),
              }
            : undefined,
      },
    )

    expect(regressionsTables(md, `Self time`)).toEqual([
      [
        {
          Change: `+100.0%`,
          Delta: `+0.10ms`,
          '%': `100.0%`,
          Time: `0.1ms → 0.2ms`,
          Samples: `5 → 10`,
          Function: `funcA`,
          Location: `src/a-222.ts:1:1`,
        },
      ],
    ])
    expect(improvementsTables(md, `Self time`)).toEqual([])
  })

  test(`reports when there is no profiling data`, () => {
    const md = diffProfiles(emptyProfile, emptyProfile, { baseURL: null })

    expect(md).toBe(`No profiling data found.\n`)
  })

  test.each(snapshotInputs)(
    `throws on diffing javascript.node.base.cpuprofile against %s`,
    snapshotFilename => {
      const profileContent = readFileSync(
        inputPath(`javascript.node.base.cpuprofile`),
      )
      const snapshotContent = readInput(snapshotFilename)

      expect(() =>
        diffProfiles(profileContent, snapshotContent, { baseURL: null }),
      ).toThrow(/cannot diff a profile against a snapshot/u)
      expect(() =>
        diffProfiles(snapshotContent, profileContent, { baseURL: null }),
      ).toThrow(/cannot diff a snapshot against a profile/u)
    },
  )
})

describe(`diffProfilesAsync`, () => {
  test.each(allInputs)(`diffs %s Blob inputs`, async filename => {
    const content = readInput(filename)

    const md = await diffProfilesAsync(
      new Blob([content]),
      new Blob([content]),
      { baseURL: null },
    )

    expectDiffConverted(md)
  })
})

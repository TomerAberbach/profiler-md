import { readFileSync } from 'node:fs'
import { describe, expect, test } from 'vitest'
import { languages } from '../cli/languages.ts'
import { fixturePath } from '../testing/fixtures.ts'
import {
  categoryTables,
  profileTitles,
  progressionsTables,
  regressionsTables,
} from '../testing/markdown.ts'
import {
  diffProfiles,
  diffProfilesAsync,
  formatConverters,
  profileToMd,
  profileToMdAsync,
} from './index.ts'
import type { Format } from './index.ts'

const fixtureSets = {
  json: new Set<string>(),
  binary: new Set<string>(),
  profile: new Set<string>(),
  snapshot: new Set<string>(),
}
for (const { examples } of languages.values()) {
  for (const [format, formatExamples] of Object.entries(examples ?? {})) {
    const { kind, shape } = formatConverters[format as Format]
    for (const { filename } of formatExamples) {
      fixtureSets[kind].add(filename)
      fixtureSets[shape].add(filename)
    }
  }
}

const jsonFixtures = [...fixtureSets.json]
const binaryFixtures = [...fixtureSets.binary]
const allFixtures = [...jsonFixtures, ...binaryFixtures]
const profileFixtures = [...fixtureSets.profile]
const snapshotFixtures = [...fixtureSets.snapshot]

describe(`profileToMd`, () => {
  describe.each(jsonFixtures)(`auto-detects %s`, filename => {
    const content = readFileSync(fixturePath(filename))

    test(`from string`, () => {
      const md = profileToMd(content.toString(`utf8`), { baseURL: null })

      expect(md).toMatch(/^# /u)
    })

    test(`from Uint8Array`, () => {
      const md = profileToMd(new Uint8Array(content), { baseURL: null })

      expect(md).toMatch(/^# /u)
    })
  })

  describe.each(binaryFixtures)(`auto-detects %s`, filename => {
    const content = readFileSync(fixturePath(filename))

    test(`from Uint8Array`, () => {
      const md = profileToMd(new Uint8Array(content), { baseURL: null })

      expect(md).toMatch(/^# /u)
    })

    test(`from one-shot Iterable<Uint8Array>`, () => {
      const bytes = new Uint8Array(content)
      const iterable = (function* () {
        yield bytes
      })()

      const md = profileToMd(iterable, { baseURL: null })

      expect(md).toMatch(/^# /u)
    })
  })

  test(`forced format produces same output as auto-detect`, () => {
    const content = readFileSync(fixturePath(`node.cpuprofile`))

    const auto = profileToMd(content.toString(`utf8`), { baseURL: null })
    const forced = profileToMd(
      { data: content.toString(`utf8`), format: `v8-cpu-profile` },
      { baseURL: null },
    )

    expect(forced).toBe(auto)
  })

  test(`throws on unknown data`, () => {
    expect(() => profileToMd(`{}`)).toThrow(/could not detect/iu)
  })

  test(`throws unified error on non-JSON string`, () => {
    expect(() => profileToMd(`this is not a profile`)).toThrow(
      /could not detect/iu,
    )
  })
})

describe(`profileToMdAsync`, () => {
  describe.each(allFixtures)(`auto-detects %s`, filename => {
    const content = readFileSync(fixturePath(filename))

    test(`from Blob`, async () => {
      const blob = new Blob([content])

      const md = await profileToMdAsync(blob, { baseURL: null })

      expect(md).toMatch(/^# /u)
    })

    test(`from ReadableStream`, async () => {
      const stream = new ReadableStream<Uint8Array>({
        start(controller) {
          controller.enqueue(new Uint8Array(content))
          controller.close()
        },
      })

      const md = await profileToMdAsync(stream, { baseURL: null })

      expect(md).toMatch(/^# /u)
    })
  })

  test(`forced format works`, async () => {
    const content = readFileSync(fixturePath(`node.cpuprofile`))
    const blob = new Blob([content])

    const md = await profileToMdAsync(
      { data: blob, format: `v8-cpu-profile` },
      { baseURL: null },
    )

    expect(md).toMatch(/^# /u)
  })

  test(`throws on unknown data`, async () => {
    const blob = new Blob([`{}`])

    await expect(profileToMdAsync(blob)).rejects.toThrow(/could not detect/iu)
  })
})

const callFrame = (functionName: string, url: string) => ({
  functionName,
  scriptId: url ? 1 : 0,
  url,
  lineNumber: url ? 0 : -1,
  columnNumber: url ? 0 : -1,
})

// Root -> funcA (5 samples), funcB (3 samples), each sample 20µs.
const baseCpuProfile = JSON.stringify({
  nodes: [
    {
      id: 1,
      hitCount: 0,
      callFrame: callFrame(`(root)`, ``),
      children: [2, 3],
    },
    {
      id: 2,
      hitCount: 5,
      callFrame: callFrame(`funcA`, `file:///project/src/a.ts`),
    },
    {
      id: 3,
      hitCount: 3,
      callFrame: callFrame(`funcB`, `file:///project/src/b.ts`),
    },
  ],
  samples: [2, 2, 2, 2, 2, 3, 3, 3],
  timeDeltas: Array.from({ length: 8 }, () => 20),
})

// Root -> funcA (now 10 samples), funcC (new, 2 samples), each sample 20µs.
const currentCpuProfile = JSON.stringify({
  nodes: [
    {
      id: 1,
      hitCount: 0,
      callFrame: callFrame(`(root)`, ``),
      children: [2, 3],
    },
    {
      id: 2,
      hitCount: 10,
      callFrame: callFrame(`funcA`, `file:///project/src/a.ts`),
    },
    {
      id: 3,
      hitCount: 2,
      callFrame: callFrame(`funcC`, `file:///project/src/c.ts`),
    },
  ],
  samples: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3],
  timeDeltas: Array.from({ length: 12 }, () => 20),
})

describe(`diffProfiles`, () => {
  test.each(profileFixtures)(
    `auto-detects %s and produces zero deltas against itself`,
    filename => {
      const content = new Uint8Array(readFileSync(fixturePath(filename)))

      const md = diffProfiles(content, content, { baseURL: null })

      expect(md).toMatch(/^# .*diff/iu)
      // No regressions or progressions when diffing a profile against itself.
      expect(md).not.toMatch(/Regressions|Progressions/u)
    },
  )

  test(`accepts an explicit { data, format }`, () => {
    const nodeCpuProfile = readFileSync(fixturePath(`node.cpuprofile`), `utf8`)
    const denoCpuProfile = readFileSync(fixturePath(`deno.cpuprofile`), `utf8`)

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
          Delta: `+0.1ms`,
          Base: `0.2ms`,
          Current: `0.2ms`,
        },
      ],
    ])
    // FuncA grew, funcC is new, funcB was removed. The synthetic `(root)`
    // common ancestor is hidden by the default `showEntry`.
    const funcA = {
      Change: `+100.0%`,
      Delta: `+0.1ms`,
      Base: `0.1ms`,
      Current: `0.2ms`,
      Function: `funcA`,
      Location: `src/a.ts:1:1`,
    }
    const funcC = {
      Change: `new`,
      Delta: `+0ms`,
      Base: `0ms`,
      Current: `0ms`,
      Function: `funcC`,
      Location: `src/c.ts:1:1`,
    }
    const funcB = {
      Change: `removed`,
      Delta: `-0.1ms`,
      Base: `0.1ms`,
      Current: `0ms`,
      Function: `funcB`,
      Location: `src/b.ts:1:1`,
    }
    expect(regressionsTables(md, `Self time`)).toEqual([[funcA, funcC]])
    expect(progressionsTables(md, `Self time`)).toEqual([[funcB]])
    expect(regressionsTables(md, `Total time`)).toEqual([[funcA, funcC]])
    expect(progressionsTables(md, `Total time`)).toEqual([[funcB]])
  })

  test.each(snapshotFixtures)(`throws on snapshot input %s`, filename => {
    const content = readFileSync(fixturePath(filename), `utf8`)

    expect(() => diffProfiles(content, content, { baseURL: null })).toThrow(
      /not supported/u,
    )
  })
})

describe(`diffProfilesAsync`, () => {
  test.each(profileFixtures)(`diffs %s Blob inputs`, async filename => {
    const content = readFileSync(fixturePath(filename))

    const md = await diffProfilesAsync(
      new Blob([content]),
      new Blob([content]),
      { baseURL: null },
    )

    expect(md).toMatch(/^# .*diff/iu)
  })

  test.each(snapshotFixtures)(`throws on snapshot input %s`, async filename => {
    const content = readFileSync(fixturePath(filename))

    await expect(
      diffProfilesAsync(new Blob([content]), new Blob([content]), {
        baseURL: null,
      }),
    ).rejects.toThrow(/not supported/u)
  })
})

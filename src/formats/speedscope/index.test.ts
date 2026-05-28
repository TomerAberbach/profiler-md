import { describe, expect, test } from 'vitest'
import { defaultShowEntry, normalizeProfileToMdOptions } from '../../options.ts'
import {
  callersTables,
  categoryTables,
  profileTitles,
  selfSizeTables,
  selfTimeTables,
  summaryLines,
  totalTimeTables,
} from '../../testing/markdown.ts'
import { convertToMd } from '../testing/convert.ts'
import { speedscopeConverter } from './index.ts'
import type {
  SpeedscopeEvent,
  SpeedscopeEventedProfile,
  SpeedscopeFrame,
  SpeedscopeProfile,
  SpeedscopeSampledProfile,
  SpeedscopeValueUnit,
} from './parse.ts'

const makeSpeedscopeProfile = ({
  profiles,
  frames,
}: {
  profiles: (SpeedscopeSampledProfile | SpeedscopeEventedProfile)[]
  frames: SpeedscopeFrame[]
}): SpeedscopeProfile => ({
  $schema: `https://www.speedscope.app/file-format-schema.json`,
  profiles,
  shared: { frames },
})

const makeSampledProfile = ({
  name = `Profile`,
  unit = `milliseconds`,
  samples,
  weights,
}: {
  name?: string
  unit?: SpeedscopeValueUnit
  samples: number[][]
  weights: number[]
}): SpeedscopeSampledProfile => ({
  type: `sampled`,
  name,
  unit,
  samples,
  weights,
})

const makeEventedProfile = ({
  events,
  name = `Profile`,
  unit = `milliseconds`,
}: {
  events: SpeedscopeEvent[]
  name?: string
  unit?: SpeedscopeValueUnit
}): SpeedscopeEventedProfile => ({ type: `evented`, name, unit, events })

describe(`matches`, () => {
  test(`accepts valid speedscope file`, () => {
    expect(
      speedscopeConverter.matches(
        makeSpeedscopeProfile({
          profiles: [makeSampledProfile({ samples: [[0]], weights: [1] })],
          frames: [{ name: `main` }],
        }),
      ),
    ).toBe(true)
  })

  test(`rejects null`, () => {
    expect(speedscopeConverter.matches(null)).toBe(false)
  })

  test(`rejects non-objects`, () => {
    expect(speedscopeConverter.matches(42)).toBe(false)
  })

  test(`rejects wrong $schema`, () => {
    expect(
      speedscopeConverter.matches({
        $schema: `https://other.app/schema.json`,
        profiles: [],
        shared: { frames: [] },
      }),
    ).toBe(false)
  })

  test(`rejects missing profiles`, () => {
    expect(speedscopeConverter.matches({ nodes: [], timeDeltas: [] })).toBe(
      false,
    )
  })

  test(`rejects null shared`, () => {
    expect(
      speedscopeConverter.matches({
        $schema: `https://www.speedscope.app/file-format-schema.json`,
        profiles: [],
        shared: null,
      }),
    ).toBe(false)
  })
})

describe(`convert`, () => {
  test(`sampled profile: basic two-function call stack`, () => {
    const profile = makeSpeedscopeProfile({
      profiles: [
        makeSampledProfile({
          samples: [[0, 1], [0, 1], [0]],
          weights: [10, 20, 5],
        }),
      ],
      frames: [
        { name: `main`, file: `/project/src/index.ts`, line: 1 },
        { name: `work`, file: `/project/src/index.ts`, line: 10 },
      ],
    })

    const md = convertToMd(
      speedscopeConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
      }),
    )

    // Work has 2 samples (30ms self), main has 1 sample (5ms self)
    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `85.7%`,
          Time: `30.0ms`,
          Samples: `2`,
          Function: `work`,
          Location: `src/index.ts:10`,
        },
        {
          '%': `14.3%`,
          Time: `5.0ms`,
          Samples: `1`,
          Function: `main`,
          Location: `src/index.ts:1`,
        },
      ],
    ])
    // Main total = 3 samples (35ms)
    expect(totalTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `35.0ms`,
          Samples: `3`,
          Function: `main`,
          Location: `src/index.ts:1`,
        },
        {
          '%': `85.7%`,
          Time: `30.0ms`,
          Samples: `2`,
          Function: `work`,
          Location: `src/index.ts:10`,
        },
      ],
    ])
  })

  test(`evented profile: durations computed from open/close events`, () => {
    // Main (0-15): calls work (5-10), then continues (10-15)
    const profile = makeSpeedscopeProfile({
      profiles: [
        makeEventedProfile({
          events: [
            { type: `O`, at: 0, frame: 0 },
            { type: `O`, at: 5, frame: 1 },
            { type: `C`, at: 10, frame: 1 },
            { type: `C`, at: 15, frame: 0 },
          ],
        }),
      ],
      frames: [
        { name: `main`, file: `/project/src/index.ts`, line: 1 },
        { name: `work`, file: `/project/src/index.ts`, line: 10 },
      ],
    })

    const md = convertToMd(
      speedscopeConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
      }),
    )

    // Main: self=10ms, total=15ms; work: self=5ms, total=5ms
    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `66.7%`,
          Time: `10.0ms`,
          Samples: `2`,
          Function: `main`,
          Location: `src/index.ts:1`,
        },
        {
          '%': `33.3%`,
          Time: `5.0ms`,
          Samples: `1`,
          Function: `work`,
          Location: `src/index.ts:10`,
        },
      ],
    ])
  })

  test(`multi-profile file concatenates output`, () => {
    const profile = makeSpeedscopeProfile({
      profiles: [
        makeSampledProfile({ samples: [[0]], weights: [100] }),
        makeSampledProfile({ samples: [[1]], weights: [200] }),
      ],
      frames: [
        { name: `funcA`, file: `/project/src/a.ts`, line: 1 },
        { name: `funcB`, file: `/project/src/b.ts`, line: 1 },
      ],
    })

    const md = convertToMd(
      speedscopeConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
      }),
    )

    // Both profiles should appear in the output.
    expect(
      selfTimeTables(md).map(table => table.map(row => row.Function)),
    ).toEqual([[`funcA`], [`funcB`]])
    // Two separate profile sections.
    expect(profileTitles(md)).toEqual([`CPU profile`, `CPU profile`])
  })

  test(`zero-weight samples are skipped`, () => {
    const profile = makeSpeedscopeProfile({
      profiles: [
        makeSampledProfile({
          samples: [[0], [0], [0]],
          weights: [10, 0, 20],
        }),
      ],
      frames: [{ name: `main`, file: `/project/src/index.ts`, line: 1 }],
    })

    const md = convertToMd(
      speedscopeConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
      }),
    )

    // Total should be 30ms from 2 non-zero samples
    expect(summaryLines(md)).toEqual([
      expect.stringContaining(`30.0ms over 2 samples`),
    ])
  })

  test(`evented profile: recursive function deduplicates total time`, () => {
    // Factorial calls itself: factorial(0-15) -> factorial(5-10)
    const profile = makeSpeedscopeProfile({
      profiles: [
        makeEventedProfile({
          events: [
            { type: `O`, at: 0, frame: 0 },
            { type: `O`, at: 5, frame: 0 },
            { type: `C`, at: 10, frame: 0 },
            { type: `C`, at: 15, frame: 0 },
          ],
        }),
      ],
      frames: [{ name: `factorial`, file: `/project/src/index.ts`, line: 1 }],
    })

    const md = convertToMd(
      speedscopeConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
      }),
    )

    // Recursive: total should be deduplicated (1 sample, not 2)
    expect(totalTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `15.0ms`,
          Samples: `3`,
          Function: `factorial`,
          Location: `src/index.ts:1`,
        },
      ],
    ])
  })

  test(`microseconds unit formatted as time`, () => {
    const profile = makeSpeedscopeProfile({
      profiles: [
        makeSampledProfile({
          unit: `microseconds`,
          samples: [[0]],
          weights: [1000],
        }),
      ],
      frames: [{ name: `main`, file: `/project/src/index.ts`, line: 1 }],
    })

    const md = convertToMd(
      speedscopeConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
      }),
    )

    expect(selfTimeTables(md).map(table => table.map(row => row.Time))).toEqual(
      [[`1.0ms`]],
    )
  })

  test(`empty-stack samples are skipped`, () => {
    const profile = makeSpeedscopeProfile({
      profiles: [
        makeSampledProfile({
          samples: [[], [0], []],
          weights: [100, 50, 100],
        }),
      ],
      frames: [{ name: `main`, file: `/project/src/index.ts`, line: 1 }],
    })

    const md = convertToMd(
      speedscopeConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
      }),
    )

    // Only the non-empty sample (50ms) is counted, not the empty-stack ones
    // (100ms + 100ms).
    expect(summaryLines(md)).toEqual([
      expect.stringContaining(`50.0ms over 1 sample`),
    ])
  })

  test(`frame without file location renders as unknown`, () => {
    const profile = makeSpeedscopeProfile({
      profiles: [makeSampledProfile({ samples: [[0]], weights: [10] })],
      frames: [{ name: `unknownFunc` }],
    })

    const md = convertToMd(
      speedscopeConverter,
      profile,
      normalizeProfileToMdOptions({
        showEntry: () => true,
      }),
    )

    expect(
      selfTimeTables(md).map(table => table.map(row => row.Location)),
    ).toEqual([[`<unknown>`]])
  })

  test(`bytes unit produces heap profile`, () => {
    const profile = makeSpeedscopeProfile({
      profiles: [
        makeSampledProfile({
          unit: `bytes`,
          samples: [[0, 1], [0]],
          weights: [1024, 512],
        }),
      ],
      frames: [
        { name: `allocMain`, file: `/project/src/index.ts`, line: 1 },
        { name: `allocWork`, file: `/project/src/index.ts`, line: 10 },
      ],
    })

    const md = convertToMd(
      speedscopeConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
      }),
    )

    expect(profileTitles(md)).toEqual([`Heap profile`])
    expect(summaryLines(md)).toEqual([expect.stringContaining(`Allocated`)])
    expect(selfSizeTables(md).map(table => table.map(row => row.Size))).toEqual(
      [[`1.02 kB`, `512 B`]],
    )
  })

  test(`none unit falls back to custom metric`, () => {
    const profile = makeSpeedscopeProfile({
      profiles: [
        makeSampledProfile({ unit: `none`, samples: [[0]], weights: [42] }),
      ],
      frames: [{ name: `main`, file: `/project/src/index.ts`, line: 1 }],
    })

    const md = convertToMd(
      speedscopeConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
      }),
    )

    expect(profileTitles(md)).toEqual([`Count profile`])
    expect(summaryLines(md)).toEqual([expect.stringContaining(`Recorded`)])
    expect(summaryLines(md)).toEqual([expect.stringContaining(`42 counts`)])
  })
})

describe(`options`, () => {
  const baseProfile = makeSpeedscopeProfile({
    profiles: [
      makeSampledProfile({
        samples: [[0, 1], [0, 1], [0]],
        weights: [10, 20, 5],
      }),
    ],
    frames: [
      { name: `main`, file: `/project/src/index.ts`, line: 1 },
      { name: `work`, file: `/project/src/index.ts`, line: 10 },
    ],
  })

  test(`showEntry hides entries while preserving metrics`, () => {
    // `work` is excluded; `main`'s total still includes `work`'s time
    const md = convertToMd(
      speedscopeConverter,
      structuredClone(baseProfile),
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
        showEntry: row => defaultShowEntry(row) && row.name !== `work`,
      }),
    )

    expect(
      selfTimeTables(md).map(table => table.map(row => row.Function)),
    ).toEqual([expect.not.arrayContaining([`work`])])
    expect(callersTables(md, `work`)).toHaveLength(0)
  })

  test(`topN limits functions shown`, () => {
    const md = convertToMd(
      speedscopeConverter,
      structuredClone(baseProfile),
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
        topN: 1,
      }),
    )

    expect(selfTimeTables(md).map(table => table.length)).toEqual([1])
    expect(totalTimeTables(md).map(table => table.length)).toEqual([1])
  })

  test(`baseURL: null shows absolute paths`, () => {
    const md = convertToMd(
      speedscopeConverter,
      structuredClone(baseProfile),
      normalizeProfileToMdOptions({
        baseURL: null,
      }),
    )

    expect(
      selfTimeTables(md).map(table => table.map(row => row.Location)),
    ).toEqual([[expect.stringMatching(/^\//u), expect.stringMatching(/^\//u)]])
  })

  test(`categorizeEntry groups entries by custom category`, () => {
    const md = convertToMd(
      speedscopeConverter,
      structuredClone(baseProfile),
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
        categorizeEntry: entry => (entry.name === `main` ? `core` : `workers`),
      }),
    )

    expect(categoryTables(md)).toEqual([
      [
        { Category: `workers`, '%': `85.7%`, Time: `30.0ms`, Samples: `2` },
        { Category: `core`, '%': `14.3%`, Time: `5.0ms`, Samples: `1` },
      ],
    ])
  })
})

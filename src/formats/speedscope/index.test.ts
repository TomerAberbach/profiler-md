import { describe, expect, test } from 'vitest'
import {
  callersTables,
  linesTables,
  selfTimeTables,
  totalTimeTables,
} from '../../modalities/profile/testing.ts'
import { selfSizeTables } from '../../modalities/snapshot/testing.ts'
import { defaultShowEntry, normalizeProfileToMdOptions } from '../../options.ts'
import { categoryTables, profileTitles, summaryLines } from '../../testing.ts'
import { convertJsonToMd } from '../testing.ts'
import { speedscopeConverter } from './index.ts'
import {
  makeEventedProfile,
  makeSampledProfile,
  makeSpeedscopeProfile,
} from './testing.ts'

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

    const md = convertJsonToMd(
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

    const md = convertJsonToMd(
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

    const md = convertJsonToMd(
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
    expect(profileTitles(md)).toEqual([`Sampling profile`, `Sampling profile`])
  })

  test(`per-sampled-line frames merge into one function with a line breakdown under a py-spy origin`, () => {
    // Py-spy emits one frame per *sampled* line; once its origin is detected
    // (here by the CPython stdlib location), the line must feed the function's
    // line breakdown rather than fragment its identity into a row per line.
    const profile = makeSpeedscopeProfile({
      profiles: [
        makeSampledProfile({
          samples: [[0], [1], [2]],
          weights: [10, 20, 10],
        }),
      ],
      frames: [
        { name: `_addtoken`, file: `/project/src/parse.py`, line: 297 },
        { name: `_addtoken`, file: `/project/src/parse.py`, line: 314 },
        { name: `loads`, file: `/usr/lib/python3.11/json/decoder.py`, line: 5 },
      ],
    })

    const md = convertJsonToMd(
      speedscopeConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
      }),
    )

    // The stdlib marker frame is hidden by the default entry filter (stdlib
    // never called by `ours` code), but still counts toward the totals.
    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `75.0%`,
          Time: `30.0ms`,
          Samples: `2`,
          Function: `_addtoken`,
          Location: `src/parse.py`,
        },
      ],
    ])
    expect(linesTables(md, `_addtoken`)).toEqual([
      [
        {
          '%': `66.7%`,
          Time: `20.0ms`,
          Samples: `1`,
          Location: `src/parse.py:314`,
        },
        {
          '%': `33.3%`,
          Time: `10.0ms`,
          Samples: `1`,
          Location: `src/parse.py:297`,
        },
      ],
    ])
  })

  test(`per-line frames stay distinct functions under an unknown origin`, () => {
    // Without an origin marker the file is read faithfully: the frame line is
    // the function's definition line and part of its identity, matching
    // speedscope's own importer.
    const profile = makeSpeedscopeProfile({
      profiles: [
        makeSampledProfile({
          samples: [[0], [1]],
          weights: [10, 20],
        }),
      ],
      frames: [
        { name: `_addtoken`, file: `/project/src/parse.py`, line: 297 },
        { name: `_addtoken`, file: `/project/src/parse.py`, line: 314 },
      ],
    })

    const md = convertJsonToMd(
      speedscopeConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
      }),
    )

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `66.7%`,
          Time: `20.0ms`,
          Samples: `1`,
          Function: `_addtoken`,
          Location: `src/parse.py:314`,
        },
        {
          '%': `33.3%`,
          Time: `10.0ms`,
          Samples: `1`,
          Function: `_addtoken`,
          Location: `src/parse.py:297`,
        },
      ],
    ])
    expect(linesTables(md, `_addtoken`)).toEqual([])
  })

  test(`zero-weight samples still count as samples`, () => {
    const profile = makeSpeedscopeProfile({
      profiles: [
        makeSampledProfile({
          samples: [[0], [0], [0]],
          weights: [10, 0, 20],
        }),
      ],
      frames: [{ name: `main`, file: `/project/src/index.ts`, line: 1 }],
    })

    const md = convertJsonToMd(
      speedscopeConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
      }),
    )

    // All 3 samples count, including the zero-weight one, so the count agrees
    // with other renderings of the same recording; the total stays 30ms.
    expect(summaryLines(md)).toEqual([
      expect.stringContaining(`30.0ms over 3 samples`),
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

    const md = convertJsonToMd(
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

    const md = convertJsonToMd(
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

  test(`empty-stack samples keep their weight`, () => {
    const profile = makeSpeedscopeProfile({
      profiles: [
        makeSampledProfile({
          samples: [[], [0], []],
          weights: [100, 50, 100],
        }),
      ],
      frames: [{ name: `main`, file: `/project/src/index.ts`, line: 1 }],
    })

    const md = convertJsonToMd(
      speedscopeConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
      }),
    )

    // Empty-stack samples keep their time (100ms + 100ms), attributed to the
    // shared anonymous function, so the total matches the recording.
    expect(summaryLines(md)).toEqual([
      expect.stringContaining(`250.0ms over 3 samples`),
    ])
  })

  test(`frame without file location is formatted as unknown`, () => {
    const profile = makeSpeedscopeProfile({
      profiles: [makeSampledProfile({ samples: [[0]], weights: [10] })],
      frames: [{ name: `unknownFunc` }],
    })

    const md = convertJsonToMd(
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

  test(`null line and column are dropped from a located frame`, () => {
    // Some origins (rbspy) write `null` instead of omitting an unknown line
    // or column.
    const profile = makeSpeedscopeProfile({
      profiles: [makeSampledProfile({ samples: [[0]], weights: [10] })],
      frames: [
        { name: `main`, file: `/app/lib/foo.rb`, line: null, col: null },
      ],
    })

    const md = convertJsonToMd(
      speedscopeConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: null,
        showEntry: () => true,
      }),
    )

    expect(
      selfTimeTables(md).map(table => table.map(row => row.Location)),
    ).toEqual([[`/app/lib/foo.rb`]])
  })

  test(`dotnet-trace pseudo-frames are dropped; self time lands on the sampled methods`, () => {
    // A dotnet-trace export wraps every stack in pseudo-frames and ends it
    // with a CPU_TIME bucket; none of those are functions, so only the managed
    // methods (and the unmanaged-time bucket) should surface.
    const profile = makeSpeedscopeProfile({
      profiles: [
        makeSampledProfile({
          samples: [
            [0, 1, 2, 3, 4, 5, 6],
            [0, 1, 2, 3, 4, 6],
            [0, 1, 2, 3, 4, 5, 7],
          ],
          weights: [30, 10, 20],
        }),
      ],
      frames: [
        { name: `Process64 Process(123) (123) Args: ` },
        { name: `(Non-Activities)` },
        { name: `Threads` },
        { name: `Thread (456)` },
        { name: `Profile!Profile.Program.Main()` },
        { name: `Profile!Profile.Program.Work()` },
        { name: `CPU_TIME` },
        { name: `UNMANAGED_CODE_TIME` },
      ],
    })

    const md = convertJsonToMd(
      speedscopeConverter,
      profile,
      normalizeProfileToMdOptions(),
    )

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `50.0%`,
          Time: `30.0ms`,
          Samples: `1`,
          Function: `Work()`,
          Location: `Profile.Program`,
        },
        {
          '%': `33.3%`,
          Time: `20.0ms`,
          Samples: `1`,
          Function: `UNMANAGED_CODE_TIME`,
          Location: `<unknown>`,
        },
        {
          '%': `16.7%`,
          Time: `10.0ms`,
          Samples: `1`,
          Function: `Main()`,
          Location: `Profile.Program`,
        },
      ],
    ])
    expect(totalTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `60.0ms`,
          Samples: `3`,
          Function: `Main()`,
          Location: `Profile.Program`,
        },
        {
          '%': `83.3%`,
          Time: `50.0ms`,
          Samples: `2`,
          Function: `Work()`,
          Location: `Profile.Program`,
        },
        {
          '%': `33.3%`,
          Time: `20.0ms`,
          Samples: `1`,
          Function: `UNMANAGED_CODE_TIME`,
          Location: `<unknown>`,
        },
      ],
    ])
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

    const md = convertJsonToMd(
      speedscopeConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
      }),
    )

    expect(profileTitles(md)).toEqual([`Heap profile`])
    expect(summaryLines(md)).toEqual([expect.stringContaining(`Allocated`)])
    expect(selfSizeTables(md).map(table => table.map(row => row.Size))).toEqual(
      [[`1 KiB`, `512 B`]],
    )
  })

  test(`none unit falls back to custom metric`, () => {
    const profile = makeSpeedscopeProfile({
      profiles: [
        makeSampledProfile({ unit: `none`, samples: [[0]], weights: [42] }),
      ],
      frames: [{ name: `main`, file: `/project/src/index.ts`, line: 1 }],
    })

    const md = convertJsonToMd(
      speedscopeConverter,
      profile,
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
      }),
    )

    expect(profileTitles(md)).toEqual([`Count profile`])
    expect(summaryLines(md)).toEqual([
      `Recorded 42 times over 1 sample (42 times per sample).`,
    ])
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
    const md = convertJsonToMd(
      speedscopeConverter,
      structuredClone(baseProfile),
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
        showEntry: row => defaultShowEntry(row) && row.name !== `work`,
        coverageTarget: 0,
      }),
    )

    expect(
      selfTimeTables(md).map(table => table.map(row => row.Function)),
    ).toEqual([expect.not.arrayContaining([`work`])])
    expect(callersTables(md, `work`)).toHaveLength(0)
  })

  test(`topN limits functions shown`, () => {
    const md = convertJsonToMd(
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
    const md = convertJsonToMd(
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

  test(`categorizeEntries groups entries by custom category`, () => {
    const md = convertJsonToMd(
      speedscopeConverter,
      structuredClone(baseProfile),
      normalizeProfileToMdOptions({
        baseURL: `/project/`,
        categorizeEntries: entries =>
          entries.map(entry => (entry.name === `main` ? `core` : `workers`)),
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

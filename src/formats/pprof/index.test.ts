import { describe, expect, test } from 'vitest'
import { streamOf } from '../../helpers/testing.ts'
import {
  callersTables,
  linesTables,
  selfTimeTables,
  totalTimeTables,
} from '../../modalities/profile/testing.ts'
import { defaultShowEntry, normalizeProfileToMdOptions } from '../../options.ts'
import { summaryLines } from '../../testing.ts'
import { convertBytesToMd, convertToMdAsync } from '../testing.ts'
import { pprofConverter } from './index.ts'
import { makePprof } from './testing.ts'

describe(`parse and matches`, () => {
  test(`accepts a valid pprof`, () => {
    const data = makePprof({
      functions: [
        { id: 1, name: `funcA`, filename: `/project/src/a.ts`, startLine: 1 },
      ],
      locations: [{ id: 1, lines: [{ functionId: 1, line: 5 }] }],
      samples: [{ locationIds: [1], values: [100_000] }],
    })

    expect(pprofConverter.matches(data)).toBe(true)
  })

  test.each([
    // `time_nanos` (field 9, varint) set to 1.
    { field: `time_nanos`, fieldBytes: [0x48, 0x01] },
    // Empty `period_type` (field 11, length-delimited).
    { field: `period_type`, fieldBytes: [0x5a, 0x00] },
  ])(
    `accepts a pprof leading with $field instead of sample_type`,
    ({ fieldBytes }) => {
      // Encoders may emit fields in any order. Go's runtime/pprof leads with
      // `time_nanos` or `period_type` rather than `sample_type`.
      const data = makePprof({
        functions: [
          { id: 1, name: `funcA`, filename: `/project/src/a.ts`, startLine: 1 },
        ],
        locations: [{ id: 1, lines: [{ functionId: 1, line: 5 }] }],
        samples: [{ locationIds: [1], values: [100_000] }],
      })
      const reordered = new Uint8Array([...fieldBytes, ...data])

      expect(pprofConverter.matches(reordered)).toBe(true)
    },
  )

  test(`rejects empty data`, () => {
    expect(pprofConverter.matches(new Uint8Array())).toBe(false)
  })

  test(`rejects data not leading with a Profile field tag`, () => {
    expect(pprofConverter.matches(new Uint8Array([0xff, 0xfe, 0xfd]))).toBe(
      false,
    )
  })

  test(`rejects invalid binary data`, () => {
    expect(() =>
      pprofConverter.parse(new Uint8Array([0xff, 0xfe, 0xfd])),
    ).toThrow()
  })

  test(`rejects non-pprof binary`, () => {
    const bytes = new TextEncoder().encode(
      JSON.stringify({ nodes: [], timeDeltas: [] }),
    )

    expect(() => pprofConverter.parse(bytes)).toThrow()
  })
})

describe(`convert`, () => {
  test(`basic two-function call stack`, () => {
    // `funcA` calls `funcB`. Both samples hit `funcB`'s body.
    const data = makePprof({
      functions: [
        { id: 1, name: `funcA`, filename: `/project/src/a.ts`, startLine: 1 },
        { id: 2, name: `funcB`, filename: `/project/src/b.ts`, startLine: 1 },
      ],
      locations: [
        { id: 1, lines: [{ functionId: 1, line: 5 }] },
        { id: 2, lines: [{ functionId: 2, line: 10 }] },
      ],
      samples: [
        { locationIds: [2, 1], values: [100_000] },
        { locationIds: [2, 1], values: [100_000] },
      ],
    })

    const md = convertBytesToMd(
      pprofConverter,
      data,
      normalizeProfileToMdOptions({ baseURL: `/project` }),
    )

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.2ms`,
          Samples: `2`,
          Function: `funcB`,
          Location: `src/b.ts:1`,
        },
      ],
    ])
    expect(linesTables(md, `funcB`)).toEqual([
      [{ '%': `100.0%`, Time: `0.2ms`, Samples: `2`, Location: `src/b.ts:10` }],
    ])
    expect(callersTables(md, `funcB`)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.2ms`,
          Samples: `2`,
          Caller: `funcA`,
          Location: `src/a.ts:1`,
        },
      ],
    ])
  })

  test(`buffer-then-parse parseAsync matches sync conversion`, async () => {
    const data = makePprof({
      functions: [
        { id: 1, name: `funcA`, filename: `/project/src/a.ts`, startLine: 1 },
        { id: 2, name: `funcB`, filename: `/project/src/b.ts`, startLine: 1 },
      ],
      locations: [
        { id: 1, lines: [{ functionId: 1, line: 5 }] },
        { id: 2, lines: [{ functionId: 2, line: 10 }] },
      ],
      samples: [
        { locationIds: [2, 1], values: [100_000] },
        { locationIds: [2, 1], values: [100_000] },
      ],
    })
    const options = normalizeProfileToMdOptions({ baseURL: `/project` })

    const md = await convertToMdAsync(pprofConverter, streamOf(data), options)

    expect(md).toBe(convertBytesToMd(pprofConverter, data, options))
  })

  test(`uses systemName when function name is empty`, () => {
    // A function with an empty name should fall back to its systemName.
    const data = makePprof({
      functions: [
        {
          id: 1,
          name: ``,
          systemName: `_ZN7myClass6methodEv`,
          filename: `/project/src/a.ts`,
          startLine: 1,
        },
      ],
      locations: [{ id: 1, lines: [{ functionId: 1, line: 5 }] }],
      samples: [{ locationIds: [1], values: [100_000] }],
    })

    const md = convertBytesToMd(
      pprofConverter,
      data,
      normalizeProfileToMdOptions({ baseURL: `/project` }),
    )

    expect(
      selfTimeTables(md).map(table => table.map(row => row.Function)),
    ).toEqual([[`_ZN7myClass6methodEv`]])
  })

  test(`skips samples with no locations`, () => {
    // Samples with empty `locationIds` contribute no nodes and must be ignored.
    const data = makePprof({
      functions: [
        { id: 1, name: `funcA`, filename: `/project/src/a.ts`, startLine: 1 },
      ],
      locations: [{ id: 1, lines: [{ functionId: 1, line: 5 }] }],
      samples: [
        { locationIds: [1], values: [100_000] },
        { locationIds: [], values: [50_000] },
      ],
    })

    const md = convertBytesToMd(
      pprofConverter,
      data,
      normalizeProfileToMdOptions({ baseURL: `/project` }),
    )

    // Only the 100µs sample should be counted.
    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.1ms`,
          Samples: `1`,
          Function: `funcA`,
          Location: `src/a.ts:1`,
        },
      ],
    ])
  })

  test(`omits line number when startLine is 0`, () => {
    // Functions with `startLine = 0` have no known definition line. The output
    // should show the file path without a line number.
    const data = makePprof({
      functions: [
        { id: 1, name: `funcA`, filename: `/project/src/a.ts`, startLine: 0 },
      ],
      locations: [{ id: 1, lines: [{ functionId: 1, line: 5 }] }],
      samples: [{ locationIds: [1], values: [100_000] }],
    })

    const md = convertBytesToMd(
      pprofConverter,
      data,
      normalizeProfileToMdOptions({ baseURL: `/project` }),
    )

    // Function definition location has no line, but execution lines from
    // samples still do.
    expect(
      selfTimeTables(md).map(table => table.map(row => row.Location)),
    ).toEqual([[`src/a.ts`]])
    expect(
      linesTables(md, `funcA`).map(table => table.map(row => row.Location)),
    ).toEqual([[`src/a.ts:5`]])
  })

  test(`handles inlined calls`, () => {
    // A location with two lines means `funcB` is inlined into `funcA`'s frame.
    // The first line (`funcB` at line 12) is the callee. `funcA` is its caller.
    const data = makePprof({
      functions: [
        { id: 1, name: `funcA`, filename: `/project/src/a.ts`, startLine: 5 },
        { id: 2, name: `funcB`, filename: `/project/src/b.ts`, startLine: 10 },
      ],
      locations: [
        {
          id: 1,
          lines: [
            { functionId: 2, line: 12 }, // `funcB` (callee, inlined)
            { functionId: 1, line: 7 }, // `funcA` (caller)
          ],
        },
      ],
      samples: [{ locationIds: [1], values: [100_000] }],
    })

    const md = convertBytesToMd(
      pprofConverter,
      data,
      normalizeProfileToMdOptions({ baseURL: `/project` }),
    )

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.1ms`,
          Samples: `1`,
          Function: `funcB`,
          Location: `src/b.ts:10`,
        },
      ],
    ])
    expect(callersTables(md, `funcB`)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.1ms`,
          Samples: `1`,
          Caller: `funcA`,
          Location: `src/a.ts:5`,
        },
      ],
    ])
  })

  test(`excludes count unit value types`, () => {
    // Profiles often pair a time metric with a `count` metric (e.g.
    // `wall_time/nanoseconds` alongside `samples/count`). The count metric
    // should be excluded from the output.
    const data = makePprof({
      valueTypes: [
        { type: `wall`, unit: `nanoseconds` },
        { type: `samples`, unit: `count` },
      ],
      functions: [
        { id: 1, name: `funcA`, filename: `/project/src/a.ts`, startLine: 1 },
      ],
      locations: [{ id: 1, lines: [{ functionId: 1, line: 5 }] }],
      samples: [{ locationIds: [1], values: [100_000, 1] }],
    })

    const md = convertBytesToMd(
      pprofConverter,
      data,
      normalizeProfileToMdOptions({ baseURL: `/project` }),
    )

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.1ms`,
          Samples: `1`,
          Function: `funcA`,
          Location: `src/a.ts:1`,
        },
      ],
    ])
  })

  test(`uses the count value type as the sample count`, () => {
    // Pprof merges identical stacks into one record whose count value says how
    // many sampled occurrences it aggregates; the Samples column must reflect
    // that count, not the number of records.
    const data = makePprof({
      valueTypes: [
        { type: `samples`, unit: `count` },
        { type: `cpu`, unit: `nanoseconds` },
      ],
      functions: [
        { id: 1, name: `funcA`, filename: `/project/src/a.ts`, startLine: 1 },
      ],
      locations: [{ id: 1, lines: [{ functionId: 1, line: 5 }] }],
      samples: [{ locationIds: [1], values: [5, 50_000_000] }],
    })

    const md = convertBytesToMd(
      pprofConverter,
      data,
      normalizeProfileToMdOptions({ baseURL: `/project` }),
    )

    expect(summaryLines(md)).toEqual([
      `Took 50.0ms over 5 samples (10.0ms per sample).`,
    ])
    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `50.0ms`,
          Samples: `5`,
          Function: `funcA`,
          Location: `src/a.ts:1`,
        },
      ],
    ])
  })

  test(`resolves uint64 IDs that collide when narrowed to a Number`, () => {
    // Pprof IDs are arbitrary uint64s. These two function and location IDs
    // differ only in the lowest bit and both narrow to the same `Number`, so
    // resolving them numerically would collapse the two functions into one.
    const data = makePprof({
      functions: [
        {
          id: 2n ** 53n,
          name: `funcA`,
          filename: `/project/src/a.ts`,
          startLine: 1,
        },
        {
          id: 2n ** 53n + 1n,
          name: `funcB`,
          filename: `/project/src/b.ts`,
          startLine: 1,
        },
      ],
      locations: [
        { id: 2n ** 53n, lines: [{ functionId: 2n ** 53n, line: 5 }] },
        {
          id: 2n ** 53n + 1n,
          lines: [{ functionId: 2n ** 53n + 1n, line: 10 }],
        },
      ],
      samples: [
        { locationIds: [2n ** 53n], values: [100_000] },
        { locationIds: [2n ** 53n + 1n], values: [100_000] },
      ],
    })

    const md = convertBytesToMd(
      pprofConverter,
      data,
      normalizeProfileToMdOptions({ baseURL: `/project` }),
    )

    // Both functions remain distinct rather than collapsing into one.
    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `50.0%`,
          Time: `0.1ms`,
          Samples: `1`,
          Function: `funcA`,
          Location: `src/a.ts:1`,
        },
        {
          '%': `50.0%`,
          Time: `0.1ms`,
          Samples: `1`,
          Function: `funcB`,
          Location: `src/b.ts:1`,
        },
      ],
    ])
  })

  test(`drops location lines referencing absent functions`, () => {
    // The first inlined line references a function missing from the table
    // (e.g. an unsymbolized frame). That frame is dropped; the resolvable
    // caller frame survives.
    const data = makePprof({
      functions: [
        { id: 1, name: `funcA`, filename: `/project/src/a.ts`, startLine: 5 },
      ],
      locations: [
        {
          id: 1,
          lines: [
            { functionId: 99, line: 12 }, // Absent function (dropped)
            { functionId: 1, line: 7 }, // FuncA (kept)
          ],
        },
      ],
      samples: [{ locationIds: [1], values: [100_000] }],
    })

    const md = convertBytesToMd(
      pprofConverter,
      data,
      normalizeProfileToMdOptions({ baseURL: `/project` }),
    )

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.1ms`,
          Samples: `1`,
          Function: `funcA`,
          Location: `src/a.ts:5`,
        },
      ],
    ])
  })

  test(`drops sample references to absent locations`, () => {
    // The sample references a location missing from the table alongside a
    // valid one. The dangling reference is dropped; the valid frame is kept.
    const data = makePprof({
      functions: [
        { id: 1, name: `funcA`, filename: `/project/src/a.ts`, startLine: 1 },
      ],
      locations: [{ id: 1, lines: [{ functionId: 1, line: 5 }] }],
      samples: [{ locationIds: [99, 1], values: [100_000] }],
    })

    const md = convertBytesToMd(
      pprofConverter,
      data,
      normalizeProfileToMdOptions({ baseURL: `/project` }),
    )

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.1ms`,
          Samples: `1`,
          Function: `funcA`,
          Location: `src/a.ts:1`,
        },
      ],
    ])
  })
})

describe(`options`, () => {
  const basePprof = makePprof({
    functions: [
      { id: 1, name: `funcA`, filename: `/project/src/a.ts`, startLine: 1 },
      { id: 2, name: `funcB`, filename: `/project/src/b.ts`, startLine: 1 },
    ],
    locations: [
      { id: 1, lines: [{ functionId: 1, line: 5 }] },
      { id: 2, lines: [{ functionId: 2, line: 10 }] },
    ],
    samples: [
      { locationIds: [2, 1], values: [100_000] },
      { locationIds: [2, 1], values: [100_000] },
    ],
  })

  test(`topN limits functions shown`, () => {
    const md = convertBytesToMd(
      pprofConverter,
      basePprof,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
        topN: 1,
      }),
    )

    expect(totalTimeTables(md).map(table => table.length)).toEqual([1])
  })

  test(`showEntry hides entries while preserving metrics`, () => {
    // `funcA` is excluded; `funcB`'s total still shows
    const md = convertBytesToMd(
      pprofConverter,
      basePprof,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
        showEntry: row => defaultShowEntry(row) && row.name !== `funcA`,
      }),
    )

    expect(
      selfTimeTables(md).map(table => table.map(row => row.Function)),
    ).toEqual([expect.not.arrayContaining([`funcA`])])
    // `funcB`'s shown callers cover none of its self time, so the hidden
    // `funcA` is admitted into its callers table.
    expect(callersTables(md, `funcB`)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.2ms`,
          Samples: `2`,
          Caller: `funcA`,
          Location: `src/a.ts:1`,
        },
      ],
    ])
  })

  test(`baseURL: null shows absolute paths`, () => {
    const md = convertBytesToMd(
      pprofConverter,
      basePprof,
      normalizeProfileToMdOptions({ baseURL: null }),
    )

    expect(
      selfTimeTables(md).map(table => table.map(row => row.Location)),
    ).toEqual([[expect.stringMatching(/^\//u)]])
  })
})

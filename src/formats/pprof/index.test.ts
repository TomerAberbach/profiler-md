import {
  Function,
  Location,
  Profile,
  Sample,
  StringTable,
  ValueType,
} from 'pprof-format'
import { describe, expect, test } from 'vitest'
import { defaultShowEntry } from '../../options.ts'
import {
  callersTables,
  linesTables,
  selfTimeTables,
  totalTimeTables,
} from '../../testing/markdown.ts'
import { detectPprof, pprofToMd } from './index.ts'

const makePprof = ({
  valueTypes = [{ type: `cpu`, unit: `nanoseconds` }],
  functions,
  locations,
  samples,
}: {
  valueTypes?: { type: string; unit: string }[]
  functions: {
    id: number
    name: string
    systemName?: string
    filename?: string
    startLine?: number
  }[]
  locations: { id: number; lines: { functionId: number; line: number }[] }[]
  samples: { locationIds: number[]; values: number[] }[]
}): Uint8Array => {
  const stringTable = new StringTable()
  const stringIndex = (string: string) => BigInt(stringTable.dedup(string))

  const profile = new Profile({
    stringTable,
    sampleType: valueTypes.map(
      ({ type, unit }) =>
        new ValueType({ type: stringIndex(type), unit: stringIndex(unit) }),
    ),
    function: functions.map(
      ({ id, name, systemName = ``, filename = ``, startLine = 0 }) =>
        new Function({
          id: BigInt(id),
          name: stringIndex(name),
          systemName: stringIndex(systemName),
          filename: stringIndex(filename),
          startLine: BigInt(startLine),
        }),
    ),
    location: locations.map(
      ({ id, lines }) =>
        new Location({
          id: BigInt(id),
          line: lines.map(({ functionId, line }) => ({
            functionId: BigInt(functionId),
            line: BigInt(line),
          })),
        }),
    ),
    sample: samples.map(
      ({ locationIds, values }) =>
        new Sample({
          locationId: locationIds.map(BigInt),
          value: values.map(BigInt),
        }),
    ),
  })

  return profile.encode()
}

describe(`detect`, () => {
  test(`accepts a valid pprof blob`, async () => {
    const blob = new Blob([
      makePprof({
        functions: [
          { id: 1, name: `funcA`, filename: `/project/src/a.ts`, startLine: 1 },
        ],
        locations: [{ id: 1, lines: [{ functionId: 1, line: 5 }] }],
        samples: [{ locationIds: [1], values: [100_000] }],
      }),
    ])

    expect(await detectPprof(blob)).toBeDefined()
  })

  test(`rejects empty data`, async () => {
    expect(await detectPprof(new Blob([]))).toBeUndefined()
  })

  test(`rejects invalid binary data`, async () => {
    expect(
      await detectPprof(new Blob([new Uint8Array([0xff, 0xfe, 0xfd])])),
    ).toBeUndefined()
  })

  test(`rejects non-pprof binary`, async () => {
    expect(
      await detectPprof(
        new Blob([JSON.stringify({ nodes: [], timeDeltas: [] })]),
      ),
    ).toBeUndefined()
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

    const md = pprofToMd(data, { cwd: `/project` })

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

    const md = pprofToMd(data, { cwd: `/project` })

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

    const md = pprofToMd(data, { cwd: `/project` })

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

    const md = pprofToMd(data, { cwd: `/project` })

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

    const md = pprofToMd(data, { cwd: `/project` })

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

    const md = pprofToMd(data, { cwd: `/project` })

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
    const md = pprofToMd(basePprof, { cwd: `/project`, topN: 1 })

    expect(totalTimeTables(md).map(table => table.length)).toEqual([1])
  })

  test(`showEntry hides entries while preserving metrics`, () => {
    // `funcA` is excluded; `funcB`'s total still shows
    const md = pprofToMd(basePprof, {
      cwd: `/project`,
      showEntry: row => defaultShowEntry(row) && row.name !== `funcA`,
    })

    expect(
      selfTimeTables(md).map(table => table.map(row => row.Function)),
    ).toEqual([expect.not.arrayContaining([`funcA`])])
    expect(callersTables(md, `funcB`)).toHaveLength(0)
  })

  test(`cwd: null shows absolute paths`, () => {
    const md = pprofToMd(basePprof, { cwd: null })

    expect(
      selfTimeTables(md).map(table => table.map(row => row.Location)),
    ).toEqual([[expect.stringMatching(/^\//u)]])
  })
})

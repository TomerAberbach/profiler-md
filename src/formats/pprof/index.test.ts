import {
  Function,
  Location,
  Profile,
  Sample,
  StringTable,
  ValueType,
} from 'pprof-format'
import { expect, test } from 'vitest'
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

test(`pprofToMd basic two-function call stack`, () => {
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

  const markdown = pprofToMd(data, { cwd: `/project` })

  expect(markdown).toMatchInlineSnapshot(`
    "# CPU profile

    Took 0.2ms over 2 samples (100.0µs per sample).

    | Category |      % |  Time | Samples |
    | -------- | -----: | ----: | ------: |
    | ours     | 100.0% | 0.2ms |       2 |

    ## Hottest functions

    ### Self time

    Functions ranked by time spent directly in the function body, excluding callees.

    |      % |  Time | Samples | Function | Location   |
    | -----: | ----: | ------: | -------- | ---------- |
    | 100.0% | 0.2ms |       2 | \`funcB\`  | src/b.ts:1 |

    #### Lines

    Lines ranked by contribution to each function's self time.

    ##### \`funcB\` (src/b.ts:1)

    |      % |  Time | Samples | Location    |
    | -----: | ----: | ------: | ----------- |
    | 100.0% | 0.2ms |       2 | src/b.ts:10 |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

    ##### \`funcB\` (src/b.ts:1)

    |      % |  Time | Samples | Caller  | Location   |
    | -----: | ----: | ------: | ------- | ---------- |
    | 100.0% | 0.2ms |       2 | \`funcA\` | src/a.ts:1 |

    ### Total time

    Functions ranked by total time spent in the function and all its callees.

    |      % |  Time | Samples | Function | Location   |
    | -----: | ----: | ------: | -------- | ---------- |
    | 100.0% | 0.2ms |       2 | \`funcB\`  | src/b.ts:1 |
    | 100.0% | 0.2ms |       2 | \`funcA\`  | src/a.ts:1 |

    #### Callees

    Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

    ##### \`funcA\` (src/a.ts:1)

    |      % |  Time | Samples | Callee  | Location   |
    | -----: | ----: | ------: | ------- | ---------- |
    | 100.0% | 0.2ms |       2 | \`funcB\` | src/b.ts:1 |

    ## Hottest call stacks

    Call stacks ranked by time spent in their top frame.

    |      % |  Time | Samples | Call stack                                  |
    | -----: | ----: | ------: | ------------------------------------------- |
    | 100.0% | 0.2ms |       2 | \`funcB\` (src/b.ts:1) ← \`funcA\` (src/a.ts:1) |
    "
  `)
})

test(`pprofToMd uses systemName when function name is empty`, () => {
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

  const markdown = pprofToMd(data, { cwd: `/project` })

  expect(markdown).toContain(`\`_ZN7myClass6methodEv\``)
})

test(`pprofToMd skips samples with no locations`, () => {
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

  const markdown = pprofToMd(data, { cwd: `/project` })

  // Only the 100µs sample should be counted.
  expect(markdown).toContain(`1 sample`)
  expect(markdown).toContain(`0.1ms`)
})

test(`pprofToMd omits line number when startLine is 0`, () => {
  // Functions with `startLine = 0` have no known definition line. The output
  // should show the file path without a line number.
  const data = makePprof({
    functions: [
      { id: 1, name: `funcA`, filename: `/project/src/a.ts`, startLine: 0 },
    ],
    locations: [{ id: 1, lines: [{ functionId: 1, line: 5 }] }],
    samples: [{ locationIds: [1], values: [100_000] }],
  })

  const markdown = pprofToMd(data, { cwd: `/project` })

  // Function definition location has no line, but execution lines from samples
  // still do.
  expect(markdown).toContain(`\`funcA\`  | src/a.ts |`)
  expect(markdown).toContain(`src/a.ts:5`)
})

test(`pprofToMd handles inlined calls, multiple lines in a location`, () => {
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

  expect(pprofToMd(data, { cwd: `/project` })).toMatchInlineSnapshot(`
    "# CPU profile

    Took 0.1ms over 1 sample (100.0µs per sample).

    | Category |      % |  Time | Samples |
    | -------- | -----: | ----: | ------: |
    | ours     | 100.0% | 0.1ms |       1 |

    ## Hottest functions

    ### Self time

    Functions ranked by time spent directly in the function body, excluding callees.

    |      % |  Time | Samples | Function | Location    |
    | -----: | ----: | ------: | -------- | ----------- |
    | 100.0% | 0.1ms |       1 | \`funcB\`  | src/b.ts:10 |

    #### Lines

    Lines ranked by contribution to each function's self time.

    ##### \`funcB\` (src/b.ts:10)

    |      % |  Time | Samples | Location    |
    | -----: | ----: | ------: | ----------- |
    | 100.0% | 0.1ms |       1 | src/b.ts:12 |

    #### Callers

    Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

    ##### \`funcB\` (src/b.ts:10)

    |      % |  Time | Samples | Caller  | Location   |
    | -----: | ----: | ------: | ------- | ---------- |
    | 100.0% | 0.1ms |       1 | \`funcA\` | src/a.ts:5 |

    ### Total time

    Functions ranked by total time spent in the function and all its callees.

    |      % |  Time | Samples | Function | Location    |
    | -----: | ----: | ------: | -------- | ----------- |
    | 100.0% | 0.1ms |       1 | \`funcB\`  | src/b.ts:10 |
    | 100.0% | 0.1ms |       1 | \`funcA\`  | src/a.ts:5  |

    #### Callees

    Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

    ##### \`funcA\` (src/a.ts:5)

    |      % |  Time | Samples | Callee  | Location    |
    | -----: | ----: | ------: | ------- | ----------- |
    | 100.0% | 0.1ms |       1 | \`funcB\` | src/b.ts:10 |

    ## Hottest call stacks

    Call stacks ranked by time spent in their top frame.

    |      % |  Time | Samples | Call stack                                   |
    | -----: | ----: | ------: | -------------------------------------------- |
    | 100.0% | 0.1ms |       1 | \`funcB\` (src/b.ts:10) ← \`funcA\` (src/a.ts:5) |
    "
  `)
})

test(`pprofToMd excludes count unit value types`, () => {
  // Profiles often pair a time metric with a `count` metric (e.g.
  // `wall_time/nanoseconds` alongside `samples/count`). The count metric should
  // be excluded from the output.
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

  const markdown = pprofToMd(data, { cwd: `/project` })

  expect(markdown).toContain(`0.1ms`)
  expect(markdown).not.toContain(`samples`)
  expect(markdown).not.toContain(`count`)
})

test(`detectPprof accepts a valid pprof`, () => {
  const data = makePprof({
    functions: [
      { id: 1, name: `funcA`, filename: `/project/src/a.ts`, startLine: 1 },
    ],
    locations: [{ id: 1, lines: [{ functionId: 1, line: 5 }] }],
    samples: [{ locationIds: [1], values: [100_000] }],
  })

  const pprof = detectPprof(data)

  expect(pprof).toBeDefined()
})

test(`detectPprof rejects empty data`, () => {
  const pprof = detectPprof(new Uint8Array(0))

  expect(pprof).toBeUndefined()
})

test(`detectPprof rejects invalid binary data`, () => {
  const pprof = detectPprof(new Uint8Array([0xff, 0xfe, 0xfd]))

  expect(pprof).toBeUndefined()
})

test(`detectPprof rejects non-pprof binary (e.g. JSON)`, () => {
  const json = new TextEncoder().encode(
    JSON.stringify({ nodes: [], timeDeltas: [] }),
  )

  const pprof = detectPprof(json)

  expect(pprof).toBeUndefined()
})

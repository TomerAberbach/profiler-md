import { describe, expect, test } from 'vitest'
import {
  allTablesAfterHeading,
  chunk,
  parseMd,
  streamOf,
} from '../../helpers/testing.ts'
import { diffProfiles } from '../../index.ts'
import {
  selfValuesTables,
  totalValuesTables,
} from '../../modalities/call-graph/testing.ts'
import { normalizeProfileToMdOptions } from '../../options.ts'
import {
  calleesTables,
  callersTables,
  categoryRankingTables,
  categorySectionTables,
  categoryTables,
  diffRankingTable,
  improvementsTables,
  linesTables,
  profileTitles,
  rankingTable,
  regressionsTables,
  summaryLines,
} from '../../testing.ts'
import { convertBytesToMd, convertToMdAsync } from '../testing.ts'
import { callgrindConverter } from './index.ts'
import { parseCallgrind } from './parse.ts'
import { makeCallgrind } from './testing.ts'

const options = normalizeProfileToMdOptions({
  baseURL: `/`,
  showEntry: () => true,
})

describe(`matches`, () => {
  test(`accepts a file with the format marker as its first line`, () => {
    expect(
      callgrindConverter.matches(makeCallgrind([`# callgrind format`])),
    ).toBe(true)
  })

  test(`accepts a marker-less file with events and position specs`, () => {
    expect(
      callgrindConverter.matches(
        makeCallgrind([`events: Ir`, `fn=main`, `1 10`]),
      ),
    ).toBe(true)
  })

  test(`rejects an events header with no position spec`, () => {
    expect(callgrindConverter.matches(makeCallgrind([`events: Ir`]))).toBe(
      false,
    )
  })

  test(`rejects collapsed stack text`, () => {
    expect(callgrindConverter.matches(makeCallgrind([`main;work 1`]))).toBe(
      false,
    )
  })

  test(`rejects empty input`, () => {
    expect(callgrindConverter.matches(new Uint8Array(0))).toBe(false)
  })

  test(`rejects callgrind-shaped text containing a NUL byte`, () => {
    expect(
      callgrindConverter.matches(
        makeCallgrind([`events: Ir`, `fn=ma\0in`, `1 10`]),
      ),
    ).toBe(false)
  })

  test(`rejects non-UTF-8 bytes`, () => {
    expect(callgrindConverter.matches(new Uint8Array([0xff, 0xfe, 0x01]))).toBe(
      false,
    )
  })
})

describe(`parse`, () => {
  test(`rejects prose`, () => {
    expect(() =>
      parseCallgrind(makeCallgrind([`hello world, not a profile`])),
    ).toThrow(`unrecognized line, got: "hello world, not a profile"`)
  })

  test(`rejects a file without an events header`, () => {
    expect(() =>
      parseCallgrind(makeCallgrind([`fl=/app/a.c`, `fn=main`])),
    ).toThrow(`missing events header`)
  })

  test(`rejects a cost line before the events header`, () => {
    expect(() => parseCallgrind(makeCallgrind([`fn=main`, `1 10`]))).toThrow(
      `cost line before events header`,
    )
  })

  test(`rejects a cost line before any fn=`, () => {
    expect(() => parseCallgrind(makeCallgrind([`events: Ir`, `1 10`]))).toThrow(
      `cost line before fn=`,
    )
  })

  test(`rejects a compressed name referenced before definition`, () => {
    expect(() =>
      parseCallgrind(makeCallgrind([`events: Ir`, `fn=(3)`, `1 10`])),
    ).toThrow(`name (3) referenced before definition`)
  })

  test(`rejects calls= without a preceding cfn=`, () => {
    expect(() =>
      parseCallgrind(
        makeCallgrind([`events: Ir`, `fn=main`, `calls=1 5`, `1 10`]),
      ),
    ).toThrow(`calls= without a preceding cfn=`)
  })

  test(`rejects a cost line with more values than events`, () => {
    expect(() =>
      parseCallgrind(makeCallgrind([`events: Ir`, `fn=main`, `1 10 20`])),
    ).toThrow(`cost line with more values than events`)
  })

  test(`rejects a relative subposition with no offset after its sign`, () => {
    expect(() =>
      parseCallgrind(makeCallgrind([`events: Ir`, `fn=main`, `1 10`, `+ 20`])),
    ).toThrow(`invalid number, got: ""`)
  })

  test(`defines a compressed name written with extra spaces after its ID`, () => {
    const [graph] = parseCallgrind(
      makeCallgrind([
        `events: Ir`,
        `fl=/app/a.c`,
        `fn=(1)  main`,
        `1 10`,
        `fn=(1)`,
        `2 20`,
      ]),
    )

    expect(graph!.frames).toEqual([
      { name: `main`, location: { type: `file`, urlOrPath: `/app/a.c` } },
    ])
  })

  test(`reads a cost line whose last value is followed by a space`, () => {
    const [graph] = parseCallgrind(
      makeCallgrind([`events: Ir`, `fl=/app/a.c`, `fn=main`, `1 10 `, `2 20 `]),
    )

    expect(graph!.functions).toEqual([
      {
        selfValues: [30],
        lineToValues: new Map([
          [1, [10]],
          [2, [20]],
        ]),
        calls: [],
      },
    ])
  })

  test(`defines a compressed name written with spaces before its ID`, () => {
    const [graph] = parseCallgrind(
      makeCallgrind([
        `events: Ir`,
        `fl= (1) /app/a.c`,
        `fn= (1) main`,
        `1 10`,
        `fl=(1)`,
        `fn=(1)`,
        `2 20`,
      ]),
    )

    expect(graph!.frames).toEqual([
      { name: `main`, location: { type: `file`, urlOrPath: `/app/a.c` } },
    ])
  })

  test(`calls the last callee named for a calls= written without a cfn=`, () => {
    // A position spec holds until it is written again, so the second `calls=`
    // targets `work` too rather than needing its own `cfn=`.
    const [graph] = parseCallgrind(
      makeCallgrind([
        `events: Ir`,
        `fl=/app/a.c`,
        `fn=main`,
        `1 10`,
        `cfn=work`,
        `calls=1 20`,
        `1 300`,
        `calls=2 20`,
        `2 400`,
      ]),
    )

    expect(graph!.frames).toEqual([
      { name: `main`, location: { type: `file`, urlOrPath: `/app/a.c` } },
      { name: `work`, location: { type: `file`, urlOrPath: `/app/a.c` } },
    ])
    expect(graph!.functions).toEqual([
      {
        selfValues: [10],
        lineToValues: new Map([[1, [10]]]),
        calls: [{ callee: 1, callCount: 3, totalValues: [700] }],
      },
      { selfValues: [], lineToValues: new Map(), calls: [] },
    ])
  })

  test(`drops a pending call whose cost line never arrives before the next fn=`, () => {
    // A file truncated between `calls=` and the cost line carrying that call's
    // inclusive cost. `work`'s first cost line is its own self cost, not an
    // arc to the stale `missing` callee.
    const [graph] = parseCallgrind(
      makeCallgrind([
        `events: Ir`,
        `fl=/app/a.c`,
        `fn=main`,
        `1 10`,
        `cfn=missing`,
        `calls=1 5`,
        `fn=work`,
        `2 20`,
      ]),
    )

    expect(graph!.functions).toEqual([
      { selfValues: [10], lineToValues: new Map([[1, [10]]]), calls: [] },
      { selfValues: [20], lineToValues: new Map([[2, [20]]]), calls: [] },
    ])
  })
})

/**
 * A realistic single-object profile: `main` with per-line self costs calling
 * `compress` (in another file, via name compression), which calls libc's
 * `memcpy` (another object, no source info). Exercises headers, comments, name
 * compression, relative subpositions, and cross-file/object calls.
 */
const BASIC = [
  `# callgrind format`,
  `version: 1`,
  `creator: callgrind-3.22.0`,
  `pid: 1234`,
  `cmd: ./zstd -3 input`,
  `part: 1`,
  ``,
  `positions: line`,
  `events: Ir`,
  `summary: 850`,
  ``,
  `ob=(1) /usr/bin/zstd`,
  `fl=(1) /src/main.c`,
  `fn=(1) main`,
  `10 100`,
  `+1 50`,
  `cfl=(2) /src/compress.c`,
  `cfn=(2) compress`,
  `calls=2 20`,
  `12 700`,
  ``,
  `fl=(2)`,
  `fn=(2)`,
  `20 300`,
  `+2 250`,
  `cob=(2) /usr/lib/libc.so.6`,
  `cfi=(3) ???`,
  `cfn=(3) memcpy`,
  `calls=10 0`,
  `25 150`,
  ``,
  `ob=(2)`,
  `fl=(3)`,
  `fn=(3)`,
  `0 150`,
  ``,
  `totals: 850`,
]

describe(`convert`, () => {
  test(`converts a call graph with exact self, total, line, and arc values`, () => {
    const md = convertBytesToMd(
      callgrindConverter,
      makeCallgrind(BASIC),
      options,
    )

    expect(profileTitles(md)).toEqual([`Instruction profile`])
    expect(summaryLines(md)).toEqual([`Recorded 850 instructions.`])

    // `memcpy` has no source file (`???`), so its location falls back to its
    // ELF object, a shared library, which categorizes it as native. Its self
    // cost line's line 0 means "no line information".
    expect(categoryTables(md)).toEqual([
      [
        {
          Category: `Ours`,
          '%': `82.4%`,
          Instructions: `700`,
        },
        {
          Category: `Native`,
          '%': `17.6%`,
          Instructions: `150`,
        },
      ],
    ])

    expect(selfValuesTables(md, `instructions`)).toEqual([
      [
        {
          '%': `64.7%`,
          Instructions: `550`,
          Function: `compress`,
          Location: `src/compress.c`,
        },
        {
          '%': `17.6%`,
          Instructions: `150`,
          Function: `main`,
          Location: `src/main.c`,
        },
        {
          '%': `17.6%`,
          Instructions: `150`,
          Function: `memcpy`,
          Location: `usr/lib/libc.so.6`,
        },
      ],
    ])

    expect(totalValuesTables(md, `instructions`)).toEqual([
      [
        {
          '%': `100.0%`,
          Instructions: `850`,
          Function: `main`,
          Location: `src/main.c`,
        },
        {
          '%': `82.4%`,
          Instructions: `700`,
          Function: `compress`,
          Location: `src/compress.c`,
        },
        {
          '%': `17.6%`,
          Instructions: `150`,
          Function: `memcpy`,
          Location: `usr/lib/libc.so.6`,
        },
      ],
    ])

    // The relative subpositions resolve against the previous cost line:
    // `+1` → line 11, `+2` → line 22.
    expect(linesTables(md, `main`)).toEqual([
      [
        {
          '%': `66.7%`,
          Instructions: `100`,
          Location: `src/main.c:10`,
        },
        {
          '%': `33.3%`,
          Instructions: `50`,
          Location: `src/main.c:11`,
        },
      ],
    ])
    expect(linesTables(md, `compress`)).toEqual([
      [
        {
          '%': `54.5%`,
          Instructions: `300`,
          Location: `src/compress.c:20`,
        },
        {
          '%': `45.5%`,
          Instructions: `250`,
          Location: `src/compress.c:22`,
        },
      ],
    ])

    // The arcs are the file's exact call counts and inclusive costs.
    // Percentages are of the function's total.
    expect(callersTables(md, `compress`)).toEqual([
      [
        {
          '%': `100.0%`,
          Instructions: `700`,
          Calls: `2`,
          Caller: `main`,
          Location: `src/main.c`,
        },
      ],
    ])
    expect(calleesTables(md, `main`)).toEqual([
      [
        {
          '%': `82.4%`,
          Instructions: `700`,
          Calls: `2`,
          Callee: `compress`,
          Location: `src/compress.c`,
        },
      ],
    ])
    expect(calleesTables(md, `compress`)).toEqual([
      [
        {
          '%': `21.4%`,
          Instructions: `150`,
          Calls: `10`,
          Callee: `memcpy`,
          Location: `usr/lib/libc.so.6`,
        },
      ],
    ])

    // A call graph records no stacks, so none are fabricated.
    expect(allTablesAfterHeading(parseMd(md), `Hottest call stacks`)).toEqual(
      [],
    )
  })

  test(`streaming parse across chunk boundaries matches buffered parse`, async () => {
    const bytes = makeCallgrind(BASIC)

    const buffered = convertBytesToMd(callgrindConverter, bytes, options)
    const streamed = await convertToMdAsync(
      callgrindConverter,
      streamOf(...chunk(bytes, 7)),
      options,
    )

    expect(streamed).toEqual(buffered)
  })

  test(`reports a shared callee's exact caller arcs`, () => {
    const md = convertBytesToMd(
      callgrindConverter,
      makeCallgrind([
        `events: Ir`,
        `fl=(1) /app/a.c`,
        `fn=(1) rootA`,
        `1 10`,
        `cfn=(2) shared`,
        `calls=1 5`,
        `1 30`,
        `fl=(2) /app/b.c`,
        `fn=(3) rootB`,
        `2 20`,
        `cfi=(1)`,
        `cfn=(2)`,
        `calls=2 5`,
        `2 60`,
        `fl=(1)`,
        `fn=(2)`,
        `5 90`,
      ]),
      options,
    )

    expect(summaryLines(md)).toEqual([`Recorded 120 instructions.`])
    expect(totalValuesTables(md, `instructions`)).toEqual([
      [
        {
          '%': `75.0%`,
          Instructions: `90`,
          Function: `shared`,
          Location: `app/a.c`,
        },
        {
          '%': `66.7%`,
          Instructions: `80`,
          Function: `rootB`,
          Location: `app/b.c`,
        },
        {
          '%': `33.3%`,
          Instructions: `40`,
          Function: `rootA`,
          Location: `app/a.c`,
        },
      ],
    ])
    expect(callersTables(md, `shared`)).toEqual([
      [
        {
          '%': `66.7%`,
          Instructions: `60`,
          Calls: `2`,
          Caller: `rootB`,
          Location: `app/b.c`,
        },
        {
          '%': `33.3%`,
          Instructions: `30`,
          Calls: `1`,
          Caller: `rootA`,
          Location: `app/a.c`,
        },
      ],
    ])
  })

  test(`folds a direct recursive call instead of double counting it`, () => {
    // Callgrind already folds direct recursion into `recur`'s costs, so the
    // self-call arc adds nothing.
    const md = convertBytesToMd(
      callgrindConverter,
      makeCallgrind([
        `events: Ir`,
        `fl=/app/a.c`,
        `fn=recur`,
        `1 100`,
        `cfn=recur`,
        `calls=3 1`,
        `1 80`,
      ]),
      options,
    )

    expect(summaryLines(md)).toEqual([`Recorded 100 instructions.`])
    expect(selfValuesTables(md, `instructions`)).toEqual([
      [
        {
          '%': `100.0%`,
          Instructions: `100`,
          Function: `recur`,
          Location: `app/a.c`,
        },
      ],
    ])
    expect(totalValuesTables(md, `instructions`)).toEqual([
      [
        {
          '%': `100.0%`,
          Instructions: `100`,
          Function: `recur`,
          Location: `app/a.c`,
        },
      ],
    ])
  })

  test(`excludes recursion-cycle arcs from totals but shows them as arcs`, () => {
    // `ping` and `pong` call each other, so their arcs' inclusive costs
    // re-count the same work (the back arc counts 25 that's already inside
    // ping's 90). Totals skip the intra-cycle arcs; the Callers tables still
    // show them, with percentages of the function's total that can exceed
    // 100%.
    const md = convertBytesToMd(
      callgrindConverter,
      makeCallgrind([
        `events: Ir`,
        `fl=/app/a.c`,
        `fn=main`,
        `1 10`,
        `cfn=ping`,
        `calls=1 5`,
        `1 90`,
        `fn=ping`,
        `5 30`,
        `cfn=pong`,
        `calls=3 8`,
        `5 60`,
        `fn=pong`,
        `8 60`,
        `cfn=ping`,
        `calls=2 5`,
        `8 25`,
      ]),
      options,
    )

    expect(summaryLines(md)).toEqual([`Recorded 100 instructions.`])
    expect(totalValuesTables(md, `instructions`)).toEqual([
      [
        {
          '%': `100.0%`,
          Instructions: `100`,
          Function: `main`,
          Location: `app/a.c`,
        },
        {
          '%': `60.0%`,
          Instructions: `60`,
          Function: `pong`,
          Location: `app/a.c`,
        },
        {
          '%': `30.0%`,
          Instructions: `30`,
          Function: `ping`,
          Location: `app/a.c`,
        },
      ],
    ])
    expect(callersTables(md, `ping`)).toEqual([
      [
        {
          '%': `300.0%`,
          Instructions: `90`,
          Calls: `1`,
          Caller: `main`,
          Location: `app/a.c`,
        },
        {
          '%': `83.3%`,
          Instructions: `25`,
          Calls: `2`,
          Caller: `pong`,
          Location: `app/a.c`,
        },
      ],
    ])
  })

  test(`attributes a cycle's outside subtree to the member that calls it`, () => {
    // `parse` and `parseExpr` call each other and `parseExpr` also calls
    // `lex`, which is outside the cycle. `lex`'s 50 counts toward `parseExpr`
    // alone, so `parse`, the function the cycle is entered through, reports
    // its own 20 rather than the 90 the cycle costs.
    const md = convertBytesToMd(
      callgrindConverter,
      makeCallgrind([
        `events: Ir`,
        `fl=/app/a.c`,
        `fn=main`,
        `1 10`,
        `cfn=parse`,
        `calls=1 5`,
        `1 90`,
        `fn=parse`,
        `5 20`,
        `cfn=parseExpr`,
        `calls=1 8`,
        `5 70`,
        `fn=parseExpr`,
        `8 20`,
        `cfn=lex`,
        `calls=1 9`,
        `8 50`,
        `cfn=parse`,
        `calls=1 5`,
        `8 15`,
        `fn=lex`,
        `9 50`,
      ]),
      options,
    )

    expect(summaryLines(md)).toEqual([`Recorded 100 instructions.`])
    expect(totalValuesTables(md, `instructions`)).toEqual([
      [
        {
          '%': `100.0%`,
          Instructions: `100`,
          Function: `main`,
          Location: `app/a.c`,
        },
        {
          '%': `70.0%`,
          Instructions: `70`,
          Function: `parseExpr`,
          Location: `app/a.c`,
        },
        {
          '%': `50.0%`,
          Instructions: `50`,
          Function: `lex`,
          Location: `app/a.c`,
        },
        {
          '%': `20.0%`,
          Instructions: `20`,
          Function: `parse`,
          Location: `app/a.c`,
        },
      ],
    ])
  })

  test(`keeps the lazy-binding trampoline out of the cycle analysis alone`, () => {
    // The dynamic linker resolves each callee on its first call, so the
    // trampoline is between `main` and `work` and again between `work` and
    // `helper`. Walking its outgoing arcs would join it and `work` into one
    // cycle, cutting `work` to its self 200. Skipping them for the cycle
    // analysis alone leaves `work` its real 290, and the arcs still count
    // toward the trampoline's total and fill its callee table.
    const md = convertBytesToMd(
      callgrindConverter,
      makeCallgrind([
        `events: Ir`,
        `creator: callgrind-3.22.0`,
        `fl=/app/a.c`,
        `fn=main`,
        `1 100`,
        `cfn=_dl_runtime_resolve_xsavec`,
        `calls=1 1`,
        `1 300`,
        `fn=_dl_runtime_resolve_xsavec`,
        `1 20`,
        `cfn=work`,
        `calls=1 5`,
        `1 290`,
        `cfn=helper`,
        `calls=1 9`,
        `1 80`,
        `fn=work`,
        `5 200`,
        `cfn=_dl_runtime_resolve_xsavec`,
        `calls=1 1`,
        `5 90`,
        `fn=helper`,
        `9 80`,
      ]),
      options,
    )

    expect(summaryLines(md)).toEqual([`Recorded 400 instructions.`])
    expect(totalValuesTables(md, `instructions`)).toEqual([
      [
        {
          '%': `100.0%`,
          Instructions: `400`,
          Function: `main`,
          Location: `app/a.c`,
        },
        {
          '%': `97.5%`,
          Instructions: `390`,
          Function: `_dl_runtime_resolve_xsavec`,
          Location: `app/a.c`,
        },
        {
          '%': `72.5%`,
          Instructions: `290`,
          Function: `work`,
          Location: `app/a.c`,
        },
        {
          '%': `20.0%`,
          Instructions: `80`,
          Function: `helper`,
          Location: `app/a.c`,
        },
      ],
    ])

    expect(calleesTables(md, `_dl_runtime_resolve_xsavec`)).toEqual([
      [
        {
          '%': `74.4%`,
          Instructions: `290`,
          Calls: `1`,
          Callee: `work`,
          Location: `app/a.c`,
        },
        {
          '%': `20.5%`,
          Instructions: `80`,
          Calls: `1`,
          Callee: `helper`,
          Location: `app/a.c`,
        },
      ],
    ])
    expect(callersTables(md, `helper`)).toEqual([
      [
        {
          '%': `100.0%`,
          Instructions: `80`,
          Calls: `1`,
          Caller: `_dl_runtime_resolve_xsavec`,
          Location: `app/a.c`,
        },
      ],
    ])
  })

  test(`reads --collect-systime durations as times, not counts`, () => {
    // `sysCpuTime` is recorded only under `--collect-systime=nsec`, which puts
    // `sysTime` in nanoseconds too.
    const md = convertBytesToMd(
      callgrindConverter,
      makeCallgrind([
        `events: Ir sysCount sysTime sysCpuTime`,
        `fl=/app/a.c`,
        `fn=main`,
        `1 10 2 3000000 1500000`,
      ]),
      options,
    )

    expect(summaryLines(md)).toEqual([
      `Recorded 10 instructions, recorded 2 system calls, spent 3.0ms, and ` +
        `spent 1.5ms.`,
    ])
  })

  test(`merges recursion-separated instances without double counting totals`, () => {
    // Valgrind separates recursion levels as fn'2; the levels merge into one
    // function whose self sums but whose total is the outermost level's
    // (deeper levels' costs are already inside its arcs).
    const md = convertBytesToMd(
      callgrindConverter,
      makeCallgrind([
        `events: Ir`,
        `fl=/app/a.c`,
        `fn=main`,
        `1 10`,
        `cfn=work`,
        `calls=1 5`,
        `1 90`,
        `fn=work`,
        `5 40`,
        `cfn=work'2`,
        `calls=1 5`,
        `5 50`,
        `fn=work'2`,
        `5 50`,
      ]),
      options,
    )

    expect(summaryLines(md)).toEqual([`Recorded 100 instructions.`])
    expect(selfValuesTables(md, `instructions`)).toEqual([
      [
        {
          '%': `90.0%`,
          Instructions: `90`,
          Function: `work`,
          Location: `app/a.c`,
        },
        {
          '%': `10.0%`,
          Instructions: `10`,
          Function: `main`,
          Location: `app/a.c`,
        },
      ],
    ])
    expect(totalValuesTables(md, `instructions`)).toEqual([
      [
        {
          '%': `100.0%`,
          Instructions: `100`,
          Function: `main`,
          Location: `app/a.c`,
        },
        {
          '%': `90.0%`,
          Instructions: `90`,
          Function: `work`,
          Location: `app/a.c`,
        },
      ],
    ])
  })

  test(`converts multiple events into one section per metric`, () => {
    const md = convertBytesToMd(
      callgrindConverter,
      makeCallgrind([
        `events: Ir Dr`,
        `fl=/app/a.c`,
        `fn=main`,
        `1 100 40`,
        // A cost line may omit trailing values, which default to zero.
        `2 50`,
      ]),
      options,
    )

    expect(profileTitles(md)).toEqual([`Instruction and data read profile`])
    expect(summaryLines(md)).toEqual([
      `Recorded 150 instructions and recorded 40 data reads.`,
    ])
    expect(selfValuesTables(md, `instructions`)).toEqual([
      [
        {
          '%': `100.0%`,
          Instructions: `150`,
          Function: `main`,
          Location: `app/a.c`,
        },
      ],
    ])
    expect(selfValuesTables(md, `data reads`)).toEqual([
      [
        {
          '%': `100.0%`,
          'Data reads': `40`,
          Function: `main`,
          Location: `app/a.c`,
        },
      ],
    ])
  })

  test(`parses instr subpositions and hex numbers under positions: instr line`, () => {
    const md = convertBytesToMd(
      callgrindConverter,
      makeCallgrind([
        `positions: instr line`,
        `events: Ir`,
        `fl=/app/a.c`,
        `fn=main`,
        `0x1000 7 100`,
        // `+8` advances the instruction address; `*` repeats line 7.
        `+8 * 50`,
        `+8 +1 25`,
      ]),
      options,
    )

    expect(linesTables(md, `main`)).toEqual([
      [
        {
          '%': `85.7%`,
          Instructions: `150`,
          Location: `app/a.c:7`,
        },
        {
          '%': `14.3%`,
          Instructions: `25`,
          Location: `app/a.c:8`,
        },
      ],
    ])
  })

  test(`names an unknown event by its event: long name`, () => {
    const md = convertBytesToMd(
      callgrindConverter,
      makeCallgrind([
        `event: Xy : exotic happenings`,
        `events: Xy`,
        `fl=/app/a.c`,
        `fn=main`,
        `1 10`,
      ]),
      options,
    )

    expect(profileTitles(md)).toEqual([`Exotic happenings profile`])
  })

  test(`renders a lone samples event as a count-ranked profile`, () => {
    // Sampling profilers exporting callgrind (e.g. rbspy) count samples.
    const md = convertBytesToMd(
      callgrindConverter,
      makeCallgrind([`events: Samples`, `fl=/app/foo.rb`, `fn=work`, `3 12`]),
      options,
    )

    expect(profileTitles(md)).toEqual([`Sampling profile`])
    expect(summaryLines(md)).toEqual([`Collected 12 samples.`])
    expect(selfValuesTables(md, `samples`)).toEqual([
      [
        {
          '%': `100.0%`,
          Samples: `12`,
          Function: `work`,
          Location: `app/foo.rb`,
        },
      ],
    ])
  })

  test(`omits the Calls column when no arc records a call count`, () => {
    const md = convertBytesToMd(
      callgrindConverter,
      makeCallgrind([
        `events: Ir`,
        `fl=/app/a.c`,
        `fn=main`,
        `1 10`,
        `cfn=helper`,
        `calls=0 5`,
        `1 30`,
        `fn=helper`,
        `5 30`,
      ]),
      options,
    )

    expect(calleesTables(md, `main`)).toEqual([
      [
        {
          '%': `75.0%`,
          Instructions: `30`,
          Callee: `helper`,
          Location: `app/a.c`,
        },
      ],
    ])
  })

  test(`keeps fi= inlined costs in the function but out of its line breakdown`, () => {
    // The inlined cost line's line number belongs to inline.h, not a.c, so it
    // counts toward `main`'s self cost but not its per-line table.
    const md = convertBytesToMd(
      callgrindConverter,
      makeCallgrind([
        `events: Ir`,
        `fl=/app/a.c`,
        `fn=main`,
        `1 100`,
        `fi=/app/inline.h`,
        `900 50`,
        `fe=/app/a.c`,
        `2 25`,
      ]),
      options,
    )

    expect(selfValuesTables(md, `instructions`)).toEqual([
      [
        {
          '%': `100.0%`,
          Instructions: `175`,
          Function: `main`,
          Location: `app/a.c`,
        },
      ],
    ])
    expect(linesTables(md, `main`)).toEqual([
      [
        {
          '%': `57.1%`,
          Instructions: `100`,
          Location: `app/a.c:1`,
        },
        {
          '%': `14.3%`,
          Instructions: `25`,
          Location: `app/a.c:2`,
        },
      ],
    ])
  })

  test(`diffs base and current call graphs into regressions and improvements`, () => {
    const graph = (mainSelf: number, compressSelf: number) => [
      `events: Ir`,
      `fl=(1) /src/main.c`,
      `fn=(1) main`,
      `10 ${mainSelf}`,
      `cfl=(2) /src/compress.c`,
      `cfn=(2) compress`,
      `calls=1 20`,
      `12 ${compressSelf}`,
      `fl=(2)`,
      `fn=(2)`,
      `20 ${compressSelf}`,
    ]

    const md = diffProfiles(
      { data: makeCallgrind(graph(100, 200)), format: `callgrind` },
      { data: makeCallgrind(graph(80, 300)), format: `callgrind` },
      { baseURL: `/`, showEntry: () => true },
    )

    expect(profileTitles(md)).toEqual([`Instruction profile diff`])
    expect(summaryLines(md)).toEqual([
      `Recorded 300 instructions → 380 instructions (+80 instructions, +26.7%).`,
    ])
    expect(regressionsTables(md, `Self instructions`)).toEqual([
      [
        {
          Change: `+50.0%`,
          Delta: `+100`,
          '%': `66.7% → 78.9%`,
          Instructions: `200 → 300`,
          Function: `compress`,
          Location: `src/compress.c`,
        },
      ],
    ])
    expect(improvementsTables(md, `Self instructions`)).toEqual([
      [
        {
          Change: `-20.0%`,
          Delta: `-20`,
          '%': `33.3% → 21.1%`,
          Instructions: `100 → 80`,
          Function: `main`,
          Location: `src/main.c`,
        },
      ],
    ])
  })
})

describe(`category subsections`, () => {
  // Aggregated as the generic origin, which categorizes an installed system
  // library path as `stdlib` and the rest as `ours`.
  const categoryOptions = normalizeProfileToMdOptions({
    baseURL: `/app`,
    showEntry: () => true,
  })

  const md = convertBytesToMd(
    callgrindConverter,
    makeCallgrind([
      `events: Ir`,
      `fl=/app/a.c`,
      `fn=main`,
      `1 600`,
      `fl=/usr/lib/libc.so`,
      `fn=malloc`,
      `1 390`,
      `fl=/usr/include/c++/12/vector`,
      `fn=reserve`,
      `1 10`,
    ]),
    categoryOptions,
  )

  const OURS_ROWS = [
    {
      '%': `60.0%`,
      Instructions: `600`,
      Function: `main`,
      Location: `a.c`,
    },
  ]
  const NATIVE_ROWS = [
    {
      '%': `39.0%`,
      Instructions: `390`,
      Function: `malloc`,
      Location: `../usr/lib/libc.so`,
    },
  ]
  const STDLIB_ROWS = [
    {
      '%': `1.0%`,
      Instructions: `10`,
      Function: `reserve`,
      Location: `../usr/include/c++/12/vector`,
    },
  ]

  test(`splits the self ranking into a subsection per covered category`, () => {
    expect(rankingTable(md, `Self instructions`)).toEqual([
      ...OURS_ROWS,
      ...NATIVE_ROWS,
      ...STDLIB_ROWS,
    ])
    expect(categorySectionTables(md, `Self instructions`)).toEqual({
      Ours: OURS_ROWS,
      Native: NATIVE_ROWS,
      'Standard library': STDLIB_ROWS,
    })
  })

  test(`splits the total ranking into the same categories`, () => {
    expect(rankingTable(md, `Total instructions`)).toEqual([
      ...OURS_ROWS,
      ...NATIVE_ROWS,
      ...STDLIB_ROWS,
    ])
    expect(categorySectionTables(md, `Total instructions`)).toEqual({
      Ours: OURS_ROWS,
      Native: NATIVE_ROWS,
      'Standard library': STDLIB_ROWS,
    })
  })

  test(`splits a ranking whose functions all fall in one category`, () => {
    const singleCategoryMd = convertBytesToMd(
      callgrindConverter,
      makeCallgrind([`events: Ir`, `fl=/app/a.c`, `fn=main`, `1 600`]),
      categoryOptions,
    )

    expect(rankingTable(singleCategoryMd, `Self instructions`)).toBeUndefined()
    expect(
      categorySectionTables(singleCategoryMd, `Self instructions`),
    ).toEqual({
      Ours: [
        {
          '%': `100.0%`,
          Instructions: `600`,
          Function: `main`,
          Location: `a.c`,
        },
      ],
    })
  })

  describe(`in a diff`, () => {
    const graph = (mainSelf: number, mallocSelf: number) =>
      makeCallgrind([
        `events: Ir`,
        `fl=/app/a.c`,
        `fn=main`,
        `1 ${mainSelf}`,
        `fl=/usr/lib/libc.so`,
        `fn=malloc`,
        `1 ${mallocSelf}`,
        `fl=/usr/include/c++/12/vector`,
        `fn=reserve`,
        `1 10`,
      ])

    const diffMd = diffProfiles(
      { data: graph(600, 390), format: `callgrind` },
      { data: graph(300, 700), format: `callgrind` },
      { baseURL: `/app`, showEntry: () => true },
    )

    test(`splits each ranking into a subsection per covered category`, () => {
      expect(
        categoryRankingTables(diffMd, `Self instructions`, `Regressions`),
      ).toEqual({
        Native: [
          {
            Change: `+79.5%`,
            Delta: `+310`,
            '%': `39.0% → 69.3%`,
            Instructions: `390 → 700`,
            Function: `malloc`,
            Location: `../usr/lib/libc.so`,
          },
        ],
      })
      expect(
        categoryRankingTables(diffMd, `Self instructions`, `Improvements`),
      ).toEqual({
        Ours: [
          {
            Change: `-50.0%`,
            Delta: `-300`,
            '%': `60.0% → 29.7%`,
            Instructions: `600 → 300`,
            Function: `main`,
            Location: `a.c`,
          },
        ],
      })
    })

    test(`splits a ranking whose functions all fall in one category`, () => {
      const singleCategoryMd = diffProfiles(
        {
          data: makeCallgrind([
            `events: Ir`,
            `fl=/app/a.c`,
            `fn=main`,
            `1 600`,
          ]),
          format: `callgrind`,
        },
        {
          data: makeCallgrind([
            `events: Ir`,
            `fl=/app/a.c`,
            `fn=main`,
            `1 300`,
          ]),
          format: `callgrind`,
        },
        { baseURL: `/app`, showEntry: () => true },
      )

      expect(
        diffRankingTable(singleCategoryMd, `Self instructions`, `Improvements`),
      ).toBeUndefined()
      expect(
        categoryRankingTables(
          singleCategoryMd,
          `Self instructions`,
          `Improvements`,
        ),
      ).toEqual({
        Ours: [
          {
            Change: `-50.0%`,
            Delta: `-300`,
            '%': `100.0%`,
            Instructions: `600 → 300`,
            Function: `main`,
            Location: `a.c`,
          },
        ],
      })
    })
  })
})

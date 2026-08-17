import { describe, expect, test } from 'vitest'
import { chunk, streamOf } from '../../../helpers/testing.ts'
import {
  selfSamplesTables,
  selfTimeTables,
} from '../../../modalities/call-stack-profile/testing.ts'
import { normalizeProfileToMdOptions } from '../../../options.ts'
import { categoryTables, summaryLines } from '../../../testing.ts'
import { convertBytesToMd, convertToMdAsync } from '../../testing.ts'
import { ghcEventlogConverter } from './index.ts'
import { parseGhcEventlog } from './parse.ts'
import { makeGhcEventlog, undeclaredEvent } from './testing.ts'

const options = () => normalizeProfileToMdOptions({ baseURL: `/project` })

const COST_CENTRES = [
  { id: 1, label: `main`, module: `Main`, srcLoc: `app/Main.hs:12:1-4` },
  {
    id: 2,
    label: `parse`,
    module: `Parse`,
    srcLoc: `src/Parse.hs:(20,1)-(28,17)`,
  },
  { id: 3, label: `GC`, module: `GC`, srcLoc: `<built-in>` },
]

const eventlog = () =>
  makeGhcEventlog({
    costCentres: COST_CENTRES,
    tickInterval: 1_000_000,
    samples: [[2, 1], [2, 1], [2, 1], [1], [3]],
  })

describe(`matches`, () => {
  test(`accepts a log by its header marker`, () => {
    expect(ghcEventlogConverter.matches(eventlog())).toBe(true)
  })

  test(`rejects bytes that don't begin a log`, () => {
    expect(
      ghcEventlogConverter.matches(Uint8Array.of(0x68, 0x64, 0x72, 0x65)),
    ).toBe(false)
  })

  test(`rejects bytes too short to hold the marker`, () => {
    expect(ghcEventlogConverter.matches(Uint8Array.of(0x68, 0x64))).toBe(false)
  })
})

describe(`parse`, () => {
  test(`rejects a log without the header`, () => {
    expect(() => parseGhcEventlog(Uint8Array.of(1, 2, 3, 4, 5, 6))).toThrow(
      `expected a header marker`,
    )
  })

  test(`rejects a log whose header ends mid-declaration`, () => {
    // A partial copy of a log begins with the marker auto-detection accepts.
    expect(() => parseGhcEventlog(eventlog().subarray(0, 40))).toThrow(
      `truncated header`,
    )
  })

  test(`rejects a sample referencing a cost centre the log never defined`, () => {
    expect(() =>
      parseGhcEventlog(
        makeGhcEventlog({ costCentres: COST_CENTRES, samples: [[1, 9]] }),
      ),
    ).toThrow(`cost-centre stack references undefined cost centre 9`)
  })

  test(`rejects a log with no cost-centre samples`, () => {
    // A log written without `+RTS -p` records the program's other events, but
    // no cost-centre samples.
    expect(() => parseGhcEventlog(makeGhcEventlog())).toThrow(
      `no cost-centre samples`,
    )
  })

  test(`rejects an event the header never declared, whose size is unknown`, () => {
    const bytes = makeGhcEventlog({
      costCentres: COST_CENTRES,
      samples: [[1]],
    })
    expect(() =>
      parseGhcEventlog(
        Uint8Array.from([...bytes.subarray(0, -2), ...undeclaredEvent()]),
      ),
    ).toThrow(`undeclared event type, got: 999`)
  })

  test(`rejects a declared event size that is neither a byte count nor the variable-size marker`, () => {
    expect(() =>
      parseGhcEventlog(
        makeGhcEventlog({
          costCentres: COST_CENTRES,
          samples: [[1]],
          sampleEventSize: -2,
        }),
      ),
    ).toThrow(`invalid event type size, got: -2`)
  })

  test(`keeps the samples before an event a dead program left truncated`, () => {
    const bytes = eventlog()
    const md = convertBytesToMd(
      ghcEventlogConverter,
      bytes.subarray(0, -3),
      options(),
    )

    expect(summaryLines(md)).toEqual([
      `Took 4.0ms over 4 samples (1.0ms per sample).`,
    ])
  })
})

describe(`convert`, () => {
  test(`attributes each tick to the cost-centre stack it sampled`, () => {
    const md = convertBytesToMd(ghcEventlogConverter, eventlog(), options())

    expect(summaryLines(md)).toEqual([
      `Took 5.0ms over 5 samples (1.0ms per sample).`,
    ])
    // The module qualifies the label, and the origin splits GHC's source span
    // into the binding's location.
    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `60.0%`,
          Time: `3.0ms`,
          Samples: `3`,
          Function: `Parse.parse`,
          Location: `src/Parse.hs:20:1`,
        },
        {
          '%': `20.0%`,
          Time: `1.0ms`,
          Samples: `1`,
          Function: `Main.main`,
          Location: `app/Main.hs:12:1`,
        },
        {
          '%': `20.0%`,
          Time: `1.0ms`,
          Samples: `1`,
          Function: `GC.GC`,
          // The origin drops the `<built-in>` placeholder GHC locates the
          // runtime's own cost centres by.
          Location: `<unknown>`,
        },
      ],
    ])
  })

  test(`categorizes the collector's ticks apart from the program's`, () => {
    const md = convertBytesToMd(ghcEventlogConverter, eventlog(), options())

    expect(categoryTables(md)).toEqual([
      [
        {
          Category: `Ours`,
          '%': `80.0%`,
          Time: `4.0ms`,
          Samples: `4`,
        },
        {
          Category: `Garbage collector`,
          '%': `20.0%`,
          Time: `1.0ms`,
          Samples: `1`,
        },
      ],
    ])
  })

  test(`counts the samples of a log recorded without a tick interval`, () => {
    const md = convertBytesToMd(
      ghcEventlogConverter,
      makeGhcEventlog({ costCentres: COST_CENTRES, samples: [[2, 1], [1]] }),
      options(),
    )

    expect(summaryLines(md)).toEqual([`Collected 2 samples.`])
    expect(selfSamplesTables(md)).toEqual([
      [
        {
          '%': `50.0%`,
          Samples: `1`,
          Function: `Parse.parse`,
          Location: `src/Parse.hs:20:1`,
        },
        {
          '%': `50.0%`,
          Samples: `1`,
          Function: `Main.main`,
          Location: `app/Main.hs:12:1`,
        },
      ],
    ])
  })

  test(`streaming a log yields what parsing its bytes does`, async () => {
    const bytes = eventlog()
    const buffered = convertBytesToMd(ghcEventlogConverter, bytes, options())
    const streamed = await convertToMdAsync(
      ghcEventlogConverter,
      streamOf(...chunk(bytes, 7)),
      options(),
    )

    expect(streamed).toEqual(buffered)
  })
})

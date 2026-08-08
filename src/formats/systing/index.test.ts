import { describe, expect, test } from 'vitest'
import { chunk, streamOf } from '../../helpers/testing.ts'
import {
  selfSleepsTables,
  selfTimeTables,
  totalSleepsTables,
  totalTimeTables,
} from '../../modalities/sampling-profile/testing.ts'
import { normalizeProfileToMdOptions } from '../../options.ts'
import {
  calleesTables,
  categoryTables,
  linesTables,
  profileTitles,
  summaryLines,
} from '../../testing.ts'
import { convertBytesToMd, convertToMdAsync } from '../testing.ts'
import { systingConverter } from './index.ts'
import { parseSysting } from './parse.ts'
import { makeSysting, systingHeader } from './testing.ts'

describe(`matches`, () => {
  test(`accepts a valid export, including a header-only one`, () => {
    expect(systingConverter.matches(makeSysting([[`f`, 0, `main`]]))).toBe(true)
    expect(systingConverter.matches(makeSysting([]))).toBe(true)
  })

  test(`rejects JSON lines lacking the version key`, () => {
    expect(
      systingConverter.matches(makeSysting([], { some: `jsonl`, file: 1 })),
    ).toBe(false)
  })

  test(`rejects a header that is not a JSON object`, () => {
    expect(systingConverter.matches(new TextEncoder().encode(`[1, 2]\n`))).toBe(
      false,
    )
    expect(systingConverter.matches(new TextEncoder().encode(`not json`))).toBe(
      false,
    )
    expect(systingConverter.matches(new Uint8Array(0))).toBe(false)
  })

  test(`accepts an unsupported version, leaving parse to reject it`, () => {
    expect(
      systingConverter.matches(
        makeSysting([], { ...systingHeader, systing_profile_export: 2 }),
      ),
    ).toBe(true)
    expect(
      systingConverter.matches(
        makeSysting([], { ...systingHeader, systing_profile_export: 0 }),
      ),
    ).toBe(true)
  })

  test(`parse reports the unsupported version`, () => {
    expect(() =>
      parseSysting(
        makeSysting([], { ...systingHeader, systing_profile_export: 2 }),
      ),
    ).toThrow(`version 2`)
    expect(() =>
      parseSysting(
        makeSysting([], { ...systingHeader, systing_profile_export: 0 }),
      ),
    ).toThrow(`version 0`)
  })

  test(`accepts an unsupported stack order, leaving parse to reject it`, () => {
    expect(
      systingConverter.matches(
        makeSysting([], { ...systingHeader, stack_order: `root_first` }),
      ),
    ).toBe(true)
  })

  test(`parse reports the unsupported stack order`, () => {
    expect(() =>
      parseSysting(
        makeSysting([], { ...systingHeader, stack_order: `root_first` }),
      ),
    ).toThrow(`root_first`)
  })

  test(`parse rejects records that aren't arrays`, () => {
    expect(() => parseSysting(makeSysting([{ frame: 0 }]))).toThrow(
      `not an array`,
    )
  })

  test(`parse rejects a stack referencing an undefined frame`, () => {
    expect(() => parseSysting(makeSysting([[`s`, 0, [7]]]))).toThrow(
      `undefined frame 7`,
    )
  })

  test(`parse rejects a sample referencing an undefined stack`, () => {
    expect(() => parseSysting(makeSysting([[`x`, 1, 9, 1, 1]]))).toThrow(
      `undefined stack 9`,
    )
  })

  test(`parse skips unknown record tags per the format's versioning rules`, () => {
    expect(() =>
      parseSysting(
        makeSysting([
          [`z`, `future record`],
          [`f`, 0, `main`],
        ]),
      ),
    ).not.toThrow()
  })
})

describe(`convert`, () => {
  const options = () =>
    normalizeProfileToMdOptions({ baseURL: `/`, showEntry: () => true })

  test(`cpu-clock samples weight by the sample period`, () => {
    // Stacks are leaf-first: work is the leaf sampled in both stacks, main
    // its caller. 3 + 1 tallies at 1ms per sample = 4ms total, 3ms self in
    // work at its packed executing line.
    const md = convertBytesToMd(
      systingConverter,
      makeSysting([
        [`f`, 0, `work (app [work.c:42]) <0x1000>`],
        [`f`, 1, `main (app [main.c:7]) <0x2000>`],
        [`s`, 0, [0, 1]],
        [`s`, 1, [1]],
        [`x`, 1, 0, 1, 3],
        [`x`, 1, 1, 1, 1],
      ]),
      options(),
    )

    expect(profileTitles(md)).toEqual([`CPU profile`])
    expect(summaryLines(md)).toEqual([
      `Took 4.0ms over 4 samples (1.0ms per sample).`,
    ])
    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `75.0%`,
          Time: `3.0ms`,
          Samples: `3`,
          Function: `work`,
          Location: `work.c`,
        },
        {
          '%': `25.0%`,
          Time: `1.0ms`,
          Samples: `1`,
          Function: `main`,
          Location: `main.c`,
        },
      ],
    ])
    expect(totalTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `4.0ms`,
          Samples: `4`,
          Function: `main`,
          Location: `main.c`,
        },
        {
          '%': `75.0%`,
          Time: `3.0ms`,
          Samples: `3`,
          Function: `work`,
          Location: `work.c`,
        },
      ],
    ])
    // The packed [file:line] is the executing line, feeding the per-line
    // breakdown rather than the function's identity.
    expect(linesTables(md, `work`)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `3.0ms`,
          Samples: `3`,
          Location: `work.c:42`,
        },
      ],
    ])
  })

  test(`frame vocabulary categorizes: kernel, sandbox, jit, native, ours`, () => {
    const md = convertBytesToMd(
      systingConverter,
      makeSysting([
        [`f`, 0, `finish_task_switch ([kernel]) <0xffff1>`],
        [`f`, 1, `unknown ([gvisor:runtime]) <0x7f1>`],
        [`f`, 2, `unknown ([jit:node]) <0x7f2>`],
        [`f`, 3, `memcpy (libc.so.6) <0x7f3>`],
        [`f`, 4, `handle (app [handle.c:3]) <0x400>`],
        [`s`, 0, [0]],
        [`s`, 1, [1]],
        [`s`, 2, [2]],
        [`s`, 3, [3]],
        [`s`, 4, [4]],
        [`x`, 1, 0, 1, 1],
        [`x`, 1, 1, 1, 1],
        [`x`, 1, 2, 1, 1],
        [`x`, 1, 3, 1, 1],
        [`x`, 1, 4, 1, 1],
      ]),
      options(),
    )

    // Equal shares keep first-sample order.
    expect(categoryTables(md)).toEqual([
      [
        {
          Category: `kernel`,
          '%': `20.0%`,
          Time: `1.0ms`,
          Samples: `1`,
        },
        {
          Category: `sandbox`,
          '%': `20.0%`,
          Time: `1.0ms`,
          Samples: `1`,
        },
        {
          Category: `jit`,
          '%': `20.0%`,
          Time: `1.0ms`,
          Samples: `1`,
        },
        {
          Category: `native`,
          '%': `20.0%`,
          Time: `1.0ms`,
          Samples: `1`,
        },
        {
          Category: `ours`,
          '%': `20.0%`,
          Time: `1.0ms`,
          Samples: `1`,
        },
      ],
    ])
  })

  test(`python frames split their location like native ones`, () => {
    const md = convertBytesToMd(
      systingConverter,
      makeSysting([
        [`f`, 0, `handle_request (python) [server.py:88]`],
        [`f`, 1, `serve (python) [server.py:20]`],
        [`s`, 0, [0, 1]],
        [`x`, 1, 0, 1, 2],
      ]),
      options(),
    )

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `2.0ms`,
          Samples: `2`,
          Function: `handle_request`,
          Location: `server.py`,
        },
      ],
    ])
    expect(calleesTables(md, `serve`)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `2.0ms`,
          Samples: `2`,
          Callee: `handle_request`,
          Location: `server.py`,
        },
      ],
    ])
  })

  test(`sleep events become their own occurrence-counted profiles`, () => {
    const md = convertBytesToMd(
      systingConverter,
      makeSysting([
        [`f`, 0, `spin (app [spin.c:5]) <0x1>`],
        [`f`, 1, `do_nanosleep ([kernel]) <0xffff2>`],
        [`s`, 0, [0]],
        [`s`, 1, [1]],
        [`x`, 1, 0, 1, 6],
        [`x`, 1, 1, 0, 2],
        [`x`, 1, 1, 2, 5],
      ]),
      options(),
    )

    // CPU first, then uninterruptible (D-state), then interruptible.
    expect(profileTitles(md)).toEqual([
      `CPU profile`,
      `Uninterruptible sleep profile`,
      `Interruptible sleep profile`,
    ])
    expect(summaryLines(md)).toEqual([
      `Took 6.0ms over 6 samples (1.0ms per sample).`,
      `Slept 2 times over 2 samples (1 time per sample).`,
      `Slept 5 times over 5 samples (1 time per sample).`,
    ])
    expect(selfSleepsTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Sleeps: `2`,
          Samples: `2`,
          Function: `do_nanosleep ([kernel])`,
          Location: `<unknown>`,
        },
      ],
      [
        {
          '%': `100.0%`,
          Sleeps: `5`,
          Samples: `5`,
          Function: `do_nanosleep ([kernel])`,
          Location: `<unknown>`,
        },
      ],
    ])
    expect(totalSleepsTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Sleeps: `2`,
          Samples: `2`,
          Function: `do_nanosleep ([kernel])`,
          Location: `<unknown>`,
        },
      ],
      [
        {
          '%': `100.0%`,
          Sleeps: `5`,
          Samples: `5`,
          Function: `do_nanosleep ([kernel])`,
          Location: `<unknown>`,
        },
      ],
    ])
  })

  test(`cpu-cycles samples weight by cycles instead of time`, () => {
    const md = convertBytesToMd(
      systingConverter,
      makeSysting(
        [
          [`f`, 0, `work (app [work.c:42]) <0x1000>`],
          [`s`, 0, [0]],
          [`x`, 1, 0, 1, 2],
        ],
        {
          ...systingHeader,
          sample_event: `cpu-cycles`,
          sample_period: 1_000_000,
        },
      ),
      options(),
    )

    expect(profileTitles(md)).toEqual([`CPU cycles profile`])
    expect(summaryLines(md)).toEqual([
      `Recorded 2,000,000 cycles over 2 samples (1,000,000 cycles per sample).`,
    ])
  })

  test(`event type ids resolve through the header's legend`, () => {
    const md = convertBytesToMd(
      systingConverter,
      makeSysting(
        [
          [`f`, 0, `work (app) <0x1000>`],
          [`s`, 0, [0]],
          [`x`, 1, 0, 7, 2],
          [`x`, 1, 0, 5, 3],
        ],
        {
          ...systingHeader,
          event_types: { '5': `uninterruptible_sleep`, '7': `cpu` },
        },
      ),
      options(),
    )

    expect(profileTitles(md)).toEqual([
      `CPU profile`,
      `Uninterruptible sleep profile`,
    ])
    expect(summaryLines(md)).toEqual([
      `Took 2.0ms over 2 samples (1.0ms per sample).`,
      `Slept 3 times over 3 samples (1 time per sample).`,
    ])
  })

  test(`samples of unrecognized event types are skipped`, () => {
    // A future event type in the legend follows the format's versioning
    // rules for unknown record tags: skipped, without failing the parse.
    const md = convertBytesToMd(
      systingConverter,
      makeSysting(
        [
          [`f`, 0, `work (app) <0x1000>`],
          [`s`, 0, [0]],
          [`x`, 1, 0, 1, 2],
          [`x`, 1, 0, 9, 5],
        ],
        {
          ...systingHeader,
          event_types: { ...systingHeader.event_types, '9': `preempted` },
        },
      ),
      options(),
    )

    expect(profileTitles(md)).toEqual([`CPU profile`])
    expect(summaryLines(md)).toEqual([
      `Took 2.0ms over 2 samples (1.0ms per sample).`,
    ])
  })

  test(`a header without a legend uses systing's own event type ids`, () => {
    const md = convertBytesToMd(
      systingConverter,
      makeSysting(
        [
          [`f`, 0, `spin (app) <0x1>`],
          [`s`, 0, [0]],
          [`x`, 1, 0, 2, 4],
        ],
        { ...systingHeader, event_types: undefined },
      ),
      options(),
    )

    expect(profileTitles(md)).toEqual([`Interruptible sleep profile`])
    expect(summaryLines(md)).toEqual([
      `Slept 4 times over 4 samples (1 time per sample).`,
    ])
  })

  test(`a recording without sampling provenance ranks by sample count alone`, () => {
    const md = convertBytesToMd(
      systingConverter,
      makeSysting(
        [
          [`f`, 0, `work (app) <0x1000>`],
          [`s`, 0, [0]],
          [`x`, 1, 0, 1, 3],
        ],
        {
          ...systingHeader,
          sample_event: null,
          sample_period: null,
        },
      ),
      options(),
    )

    expect(profileTitles(md)).toEqual([`Sampling profile`])
    expect(summaryLines(md)).toEqual([`Collected 3 samples.`])
  })

  test(`duplicate sample tallies for one triple sum`, () => {
    const md = convertBytesToMd(
      systingConverter,
      makeSysting([
        [`f`, 0, `work (app) <0x1000>`],
        [`s`, 0, [0]],
        [`x`, 1, 0, 1, 2],
        [`x`, 1, 0, 1, 3],
      ]),
      options(),
    )

    expect(summaryLines(md)).toEqual([
      `Took 5.0ms over 5 samples (1.0ms per sample).`,
    ])
  })

  test(`streaming conversion matches buffered conversion`, async () => {
    const bytes = makeSysting([
      [`f`, 0, `work (app [work.c:42]) <0x1000>`],
      [`f`, 1, `main (app [main.c:7]) <0x2000>`],
      [`f`, 2, `do_nanosleep ([kernel]) <0xffff2>`],
      [`s`, 0, [0, 1]],
      [`s`, 1, [2, 1]],
      [`x`, 1, 0, 1, 3],
      [`x`, 1, 1, 2, 2],
    ])

    const buffered = convertBytesToMd(systingConverter, bytes, options())
    const streamed = await convertToMdAsync(
      systingConverter,
      streamOf(...chunk(bytes, 7)),
      options(),
    )

    expect(streamed).toEqual(buffered)
  })
})

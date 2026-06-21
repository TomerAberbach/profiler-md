import { describe, expect, test } from 'vitest'
import { normalizeProfileToMdOptions } from '../../options.ts'
import {
  callersTables,
  linesTables,
  profileTitles,
  selfSamplesTables,
  selfSizeTables,
  selfTimeTables,
  totalSizeTables,
} from '../../testing/markdown.ts'
import { convertToMd } from '../testing/convert.ts'
import { jfrConverter } from './index.ts'
import { makeJfr } from './testing.ts'

const options = normalizeProfileToMdOptions({ baseURL: `/project` })

describe(`parse and matches`, () => {
  test(`accepts a synthetic recording with events`, () => {
    const bytes = makeJfr({
      methods: [{ name: `funcA`, className: `com.example.A` }],
      stackTraces: [{ frames: [{ method: 0, line: 5 }] }],
      events: [{ type: `cpu`, stack: 0 }],
    })

    expect(jfrConverter.matches(jfrConverter.parse(bytes))).toBe(true)
  })

  test(`rejects a recording with no supported events`, () => {
    const bytes = makeJfr({ methods: [], stackTraces: [], events: [] })

    expect(jfrConverter.matches(jfrConverter.parse(bytes))).toBe(false)
  })

  test(`rejects empty data`, () => {
    expect(() => jfrConverter.parse(new Uint8Array())).toThrow()
  })

  test(`rejects non-JFR binary data`, () => {
    expect(() =>
      jfrConverter.parse(new Uint8Array([0xff, 0xfe, 0xfd])),
    ).toThrow()
  })
})

describe(`convert`, () => {
  test(`CPU samples are ranked purely by sample count`, () => {
    // `funcA` calls `funcB`. Both samples hit `funcB`'s body. CPU samples carry
    // no value, so the profile has no metric column.
    const bytes = makeJfr({
      methods: [
        { name: `funcB`, className: `com.example.B` },
        { name: `funcA`, className: `com.example.A` },
      ],
      stackTraces: [
        {
          frames: [
            { method: 0, line: 10 },
            { method: 1, line: 5 },
          ],
        },
      ],
      events: [
        { type: `cpu`, stack: 0 },
        { type: `cpu`, stack: 0 },
      ],
    })

    const md = convertToMd(jfrConverter, bytes, options)

    expect(profileTitles(md)).toEqual([`Sampling profile`])
    expect(selfSamplesTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Samples: `2`,
          Function: `funcB`,
          Location: `com.example.B`,
        },
      ],
    ])
    expect(linesTables(md, `funcB`)).toEqual([
      [{ '%': `100.0%`, Samples: `2`, Location: `com.example.B:10` }],
    ])
    expect(callersTables(md, `funcB`)).toEqual([
      [
        {
          '%': `100.0%`,
          Samples: `2`,
          Caller: `funcA`,
          Location: `com.example.A`,
        },
      ],
    ])
  })

  test(`allocation samples are measured by allocated bytes`, () => {
    const bytes = makeJfr({
      methods: [
        { name: `allocate`, className: `com.example.A` },
        { name: `run`, className: `com.example.A` },
      ],
      stackTraces: [
        {
          frames: [
            { method: 0, line: 7 },
            { method: 1, line: 3 },
          ],
        },
      ],
      events: [
        { type: `alloc`, stack: 0, weight: 2048 },
        { type: `alloc`, stack: 0, weight: 1024 },
      ],
    })

    const md = convertToMd(jfrConverter, bytes, options)

    expect(profileTitles(md)).toEqual([`Allocated heap profile`])
    expect(selfSizeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `3.07 kB`,
          Samples: `2`,
          Function: `allocate`,
          Location: `com.example.A`,
        },
      ],
    ])
    expect(totalSizeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `3.07 kB`,
          Samples: `2`,
          Function: `allocate`,
          Location: `com.example.A`,
        },
        {
          '%': `100.0%`,
          Size: `3.07 kB`,
          Samples: `2`,
          Function: `run`,
          Location: `com.example.A`,
        },
      ],
    ])
  })

  test(`native memory samples are measured by allocated bytes`, () => {
    // `async-profiler`'s `profiler.Malloc` records off-heap allocations
    // weighted by their `size`, surfacing as a distinct native memory profile.
    const bytes = makeJfr({
      methods: [
        { name: `malloc`, className: `libc.so` },
        { name: `run`, className: `com.example.N` },
      ],
      stackTraces: [
        {
          frames: [{ method: 0 }, { method: 1, line: 4 }],
        },
      ],
      events: [
        { type: `nativemem`, stack: 0, weight: 4096 },
        { type: `nativemem`, stack: 0, weight: 2048 },
      ],
    })

    const md = convertToMd(jfrConverter, bytes, options)

    expect(profileTitles(md)).toEqual([`Allocated native memory profile`])
    expect(selfSizeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `6.14 kB`,
          Samples: `2`,
          Function: `malloc`,
          Location: `libc.so`,
        },
      ],
    ])
    expect(totalSizeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `6.14 kB`,
          Samples: `2`,
          Function: `malloc`,
          Location: `libc.so`,
        },
        {
          '%': `100.0%`,
          Size: `6.14 kB`,
          Samples: `2`,
          Function: `run`,
          Location: `com.example.N`,
        },
      ],
    ])
  })

  test(`lock samples are measured by blocked time`, () => {
    const bytes = makeJfr({
      methods: [
        { name: `lock`, className: `com.example.L` },
        { name: `run`, className: `com.example.L` },
      ],
      stackTraces: [{ frames: [{ method: 0, line: 9 }, { method: 1 }] }],
      // 3,000,000 nanoseconds == 3 milliseconds.
      events: [{ type: `lock`, stack: 0, weight: 3_000_000 }],
    })

    const md = convertToMd(jfrConverter, bytes, options)

    expect(profileTitles(md)).toEqual([`Lock contention profile`])
    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `3.0ms`,
          Samples: `1`,
          Function: `lock`,
          Location: `com.example.L`,
        },
      ],
    ])
  })

  test(`emits one profile per distinct event kind`, () => {
    const bytes = makeJfr({
      methods: [{ name: `m`, className: `C` }],
      stackTraces: [{ frames: [{ method: 0, line: 1 }] }],
      events: [
        { type: `cpu`, stack: 0 },
        { type: `alloc`, stack: 0, weight: 64 },
        { type: `nativemem`, stack: 0, weight: 128 },
        { type: `lock`, stack: 0, weight: 1000 },
      ],
    })

    expect(profileTitles(convertToMd(jfrConverter, bytes, options))).toEqual([
      `Sampling profile`,
      `Allocated heap profile`,
      `Allocated native memory profile`,
      `Lock contention profile`,
    ])
  })

  test(`counts events with an empty call stack as an anonymous frame`, () => {
    const bytes = makeJfr({
      methods: [{ name: `a`, className: `C` }],
      stackTraces: [{ frames: [{ method: 0, line: 1 }] }, { frames: [] }],
      events: [
        { type: `cpu`, stack: 0 },
        { type: `cpu`, stack: 0 },
        { type: `cpu`, stack: 1 },
      ],
    })

    // `showEntry` is forced on to surface the anonymous frame, which the default
    // filter hides.
    const md = convertToMd(
      jfrConverter,
      bytes,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
        showEntry: () => true,
      }),
    )

    // The stackless sample still counts, surfaced as an anonymous frame rather
    // than being dropped.
    expect(selfSamplesTables(md)).toEqual([
      [
        { '%': `66.7%`, Samples: `2`, Function: `a`, Location: `C` },
        {
          '%': `33.3%`,
          Samples: `1`,
          Function: `(anonymous)`,
          Location: `<unknown>`,
        },
      ],
    ])
  })

  test(`counts events whose stack reference is null`, () => {
    // An event referencing a missing or null stack (key 0) keeps its weight,
    // attributed to an anonymous frame rather than being dropped.
    const bytes = makeJfr({
      methods: [{ name: `allocate`, className: `com.example.A` }],
      stackTraces: [{ frames: [{ method: 0, line: 7 }] }],
      events: [
        { type: `alloc`, stack: 0, weight: 1024 },
        { type: `alloc`, stack: -1, weight: 2048 },
      ],
    })

    const md = convertToMd(
      jfrConverter,
      bytes,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
        showEntry: () => true,
      }),
    )

    expect(selfSizeTables(md)).toEqual([
      [
        {
          '%': `66.7%`,
          Size: `2.05 kB`,
          Samples: `1`,
          Function: `(anonymous)`,
          Location: `<unknown>`,
        },
        {
          '%': `33.3%`,
          Size: `1.02 kB`,
          Samples: `1`,
          Function: `allocate`,
          Location: `com.example.A`,
        },
      ],
    ])
  })

  test(`async-profiler wall-clock samples honor the coalesced count`, () => {
    // `profiler.WallClockSample` batches multiple samples into one event via its
    // `samples` field; the sample count must reflect the batch, not the events.
    // Wall-clock samples are ranked by count rather than their `timeSpan` field,
    // which is zero for almost all uncoalesced samples.
    const bytes = makeJfr({
      methods: [{ name: `work`, className: `com.example.W` }],
      stackTraces: [{ frames: [{ method: 0, line: 4 }] }],
      events: [
        { type: `wallclock`, stack: 0, samples: 3 },
        { type: `wallclock`, stack: 0, samples: 1 },
      ],
    })

    const md = convertToMd(jfrConverter, bytes, options)

    expect(profileTitles(md)).toEqual([`Sampling profile`])
    expect(selfSamplesTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Samples: `4`,
          Function: `work`,
          Location: `com.example.W`,
        },
      ],
    ])
  })

  test(`async-profiler native lock samples are measured by blocked time`, () => {
    const bytes = makeJfr({
      methods: [{ name: `park`, className: `com.example.L` }],
      stackTraces: [{ frames: [{ method: 0, line: 8 }] }],
      // 5,000,000 nanoseconds == 5 milliseconds.
      events: [{ type: `nativelock`, stack: 0, weight: 5_000_000 }],
    })

    const md = convertToMd(jfrConverter, bytes, options)

    expect(profileTitles(md)).toEqual([`Lock contention profile`])
    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `5.0ms`,
          Samples: `1`,
          Function: `park`,
          Location: `com.example.L`,
        },
      ],
    ])
  })

  test(`overloads stay separate and show formatted parameter lists`, () => {
    // Two `add` overloads on the same class differ only by descriptor. They must
    // remain distinct functions, each named with its readable parameter types.
    const bytes = makeJfr({
      methods: [
        {
          name: `add`,
          className: `java.util.ArrayList`,
          descriptor: `(Ljava/lang/Object;)Z`,
        },
        {
          name: `add`,
          className: `java.util.ArrayList`,
          descriptor: `(Ljava/lang/Object;[Ljava/lang/Object;I)V`,
        },
      ],
      stackTraces: [
        { frames: [{ method: 0, line: 1 }] },
        { frames: [{ method: 1, line: 2 }] },
      ],
      events: [
        { type: `cpu`, stack: 0 },
        { type: `cpu`, stack: 0 },
        { type: `cpu`, stack: 1 },
      ],
    })

    const md = convertToMd(jfrConverter, bytes, options)

    expect(selfSamplesTables(md)).toEqual([
      [
        {
          '%': `66.7%`,
          Samples: `2`,
          Function: `add(Object)`,
          Location: `java.util.ArrayList`,
        },
        {
          '%': `33.3%`,
          Samples: `1`,
          Function: `add(Object, Object[], int)`,
          Location: `java.util.ArrayList`,
        },
      ],
    ])
  })

  test(`a leaf frame without a line does not borrow a caller's line`, () => {
    // `funcA` (line 5) calls `funcB`, whose leaf frame has no line (as native
    // frames don't). The sample's self line must stay empty rather than
    // borrowing funcA's line 5.
    const bytes = makeJfr({
      methods: [
        { name: `funcB`, className: `com.example.B` },
        { name: `funcA`, className: `com.example.A` },
      ],
      stackTraces: [{ frames: [{ method: 0 }, { method: 1, line: 5 }] }],
      events: [{ type: `cpu`, stack: 0 }],
    })

    const md = convertToMd(jfrConverter, bytes, options)

    expect(linesTables(md, `funcB`)).toEqual([])
  })

  test(`a truncated recording is parsed without throwing`, () => {
    const bytes = makeJfr({
      methods: [{ name: `a`, className: `C` }],
      stackTraces: [{ frames: [{ method: 0, line: 1 }] }],
      events: [{ type: `cpu`, stack: 0 }],
    })

    // A recording cut mid-chunk (a killed JVM or interrupted dump) must not
    // throw; complete chunks are kept and the partial one is dropped.
    expect(() => jfrConverter.parse(bytes.subarray(0, -5))).not.toThrow()
  })
})

describe(`allocation event families`, () => {
  test(`the sampled allocation event supersedes the TLAB events`, () => {
    // With both the modern sampled event and the legacy TLAB event present, the
    // two must not be summed; only the sampled bytes are counted.
    const bytes = makeJfr({
      methods: [{ name: `allocate`, className: `com.example.A` }],
      stackTraces: [{ frames: [{ method: 0, line: 7 }] }],
      events: [
        { type: `alloc`, stack: 0, weight: 1024 },
        { type: `alloc-tlab`, stack: 0, weight: 9999 },
      ],
    })

    const md = convertToMd(jfrConverter, bytes, options)

    expect(selfSizeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `1.02 kB`,
          Samples: `1`,
          Function: `allocate`,
          Location: `com.example.A`,
        },
      ],
    ])
  })

  test(`TLAB events are used when no sampled event is present`, () => {
    const bytes = makeJfr({
      methods: [{ name: `allocate`, className: `com.example.A` }],
      stackTraces: [{ frames: [{ method: 0, line: 7 }] }],
      events: [{ type: `alloc-tlab`, stack: 0, weight: 2048 }],
    })

    const md = convertToMd(jfrConverter, bytes, options)

    expect(selfSizeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `2.05 kB`,
          Samples: `1`,
          Function: `allocate`,
          Location: `com.example.A`,
        },
      ],
    ])
  })
})

describe(`malformed recordings`, () => {
  test(`reads constant pools that follow an empty unknown pool`, () => {
    // An undeclared but empty pool occupies no bytes, so the known method and
    // stack pools after it are still read and the function resolves by name.
    const bytes = makeJfr({
      methods: [{ name: `funcA`, className: `com.example.A` }],
      stackTraces: [{ frames: [{ method: 0, line: 5 }] }],
      events: [{ type: `cpu`, stack: 0 }],
      malformations: { emptyUnknownPools: [900] },
    })

    const md = convertToMd(jfrConverter, bytes, options)

    expect(selfSamplesTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Samples: `1`,
          Function: `funcA`,
          Location: `com.example.A`,
        },
      ],
    ])
  })

  test(`abandons an event with an unreadable field without dropping others`, () => {
    // A lock event with a field the parser can't size is skipped, but the cpu
    // events surrounding it still parse rather than desyncing.
    const bytes = makeJfr({
      methods: [{ name: `a`, className: `C` }],
      stackTraces: [{ frames: [{ method: 0, line: 1 }] }],
      events: [
        { type: `cpu`, stack: 0 },
        { type: `lock`, stack: 0, weight: 1000 },
        { type: `cpu`, stack: 0 },
      ],
      malformations: { unreadableEventTypes: [`jdk.JavaMonitorEnter`] },
    })

    const md = convertToMd(jfrConverter, bytes, options)

    // The malformed lock event produces no lock-contention profile, and both
    // cpu samples are still counted.
    expect(profileTitles(md)).toEqual([`Sampling profile`])
    expect(selfSamplesTables(md)).toEqual([
      [{ '%': `100.0%`, Samples: `2`, Function: `a`, Location: `C` }],
    ])
  })
})

describe(`options`, () => {
  test(`topN limits functions shown`, () => {
    const bytes = makeJfr({
      methods: [
        { name: `allocate`, className: `com.example.A` },
        { name: `run`, className: `com.example.A` },
      ],
      stackTraces: [
        {
          frames: [
            { method: 0, line: 7 },
            { method: 1, line: 3 },
          ],
        },
      ],
      events: [{ type: `alloc`, stack: 0, weight: 2048 }],
    })

    const md = convertToMd(
      jfrConverter,
      bytes,
      normalizeProfileToMdOptions({ baseURL: `/project`, topN: 1 }),
    )

    expect(totalSizeTables(md).map(table => table.length)).toEqual([1])
  })
})

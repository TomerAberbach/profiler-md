import { describe, expect, test } from 'vitest'
import { concatUint8Arrays } from '../../helpers/bytes.ts'
import { normalizeProfileToMdOptions } from '../../options.ts'
import { chunk, streamOf } from '../../testing/bytes.ts'
import {
  callersTables,
  linesTables,
  profileTitles,
  selfSamplesTables,
  selfSizeTables,
  selfTimeTables,
  totalSizeTables,
} from '../../testing/markdown.ts'
import { convertBytesToMd, convertToMdAsync } from '../testing/convert.ts'
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

    expect(jfrConverter.matches(bytes)).toBe(true)
  })

  test(`accepts a recording with the magic but no supported events`, () => {
    // A valid recording can carry only metadata events; the magic identifies it
    // as JFR regardless, so it's still matched (and converts to nothing).
    const bytes = makeJfr({ methods: [], stackTraces: [], events: [] })

    expect(jfrConverter.matches(bytes)).toBe(true)
  })

  test(`rejects empty data without throwing`, () => {
    expect(jfrConverter.matches(new Uint8Array())).toBe(false)
  })

  test(`rejects non-JFR binary data without throwing`, () => {
    expect(jfrConverter.matches(new Uint8Array([0xff, 0xfe, 0xfd]))).toBe(false)
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

    const md = convertBytesToMd(jfrConverter, bytes, options)

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

    const md = convertBytesToMd(jfrConverter, bytes, options)

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

    const md = convertBytesToMd(jfrConverter, bytes, options)

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

    const md = convertBytesToMd(jfrConverter, bytes, options)

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

  test(`live-object samples are measured by retained bytes`, () => {
    // The JDK's `jdk.OldObjectSample` and async-profiler's
    // `profiler.LiveObject` both record objects still live when the recording
    // was captured, weighted by object size.
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
        { type: `live`, stack: 0, weight: 2048 },
        { type: `liveobject`, stack: 0, weight: 1024 },
      ],
    })

    const md = convertBytesToMd(jfrConverter, bytes, options)

    expect(profileTitles(md)).toEqual([`Retained heap profile`])
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
  })

  test(`emits one profile per distinct event kind`, () => {
    const bytes = makeJfr({
      methods: [{ name: `m`, className: `C` }],
      stackTraces: [{ frames: [{ method: 0, line: 1 }] }],
      events: [
        { type: `cpu`, stack: 0 },
        { type: `alloc`, stack: 0, weight: 64 },
        { type: `live`, stack: 0, weight: 32 },
        { type: `nativemem`, stack: 0, weight: 128 },
        { type: `lock`, stack: 0, weight: 1000 },
      ],
    })

    expect(
      profileTitles(convertBytesToMd(jfrConverter, bytes, options)),
    ).toEqual([
      `Sampling profile`,
      `Allocated heap profile`,
      `Retained heap profile`,
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
    const md = convertBytesToMd(
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

    const md = convertBytesToMd(
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

    const md = convertBytesToMd(jfrConverter, bytes, options)

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

    const md = convertBytesToMd(jfrConverter, bytes, options)

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
          className: `com.example.MyList`,
          descriptor: `(Ljava/lang/Object;)Z`,
        },
        {
          name: `add`,
          className: `com.example.MyList`,
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

    const md = convertBytesToMd(jfrConverter, bytes, options)

    expect(selfSamplesTables(md)).toEqual([
      [
        {
          '%': `66.7%`,
          Samples: `2`,
          Function: `add(Object)`,
          Location: `com.example.MyList`,
        },
        {
          '%': `33.3%`,
          Samples: `1`,
          Function: `add(Object, Object[], int)`,
          Location: `com.example.MyList`,
        },
      ],
    ])
  })

  test(`async-profiler's dummy descriptor for non-Java frames does not append a parameter list`, () => {
    // Async-profiler writes the sentinel descriptor `()L;` for runtime stubs
    // and native functions. Their names (e.g. HotSpot's adapter blob names)
    // aren't method names, so no `()` must be appended.
    const bytes = makeJfr({
      methods: [
        { name: `I2C/C2I adapters(0xbb)`, className: ``, descriptor: `()L;` },
        { name: `main`, className: `com.example.Main` },
      ],
      stackTraces: [{ frames: [{ method: 0 }, { method: 1, line: 3 }] }],
      events: [{ type: `cpu`, stack: 0 }],
    })

    const md = convertBytesToMd(jfrConverter, bytes, options)

    expect(selfSamplesTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Samples: `1`,
          Function: `I2C/C2I adapters(0xbb)`,
          Location: `<unknown>`,
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

    const md = convertBytesToMd(jfrConverter, bytes, options)

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

    const md = convertBytesToMd(jfrConverter, bytes, options)

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

    const md = convertBytesToMd(jfrConverter, bytes, options)

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

    const md = convertBytesToMd(jfrConverter, bytes, options)

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

  test(`a chunk whose declared size is smaller than its header is dropped`, async () => {
    const bytes = makeJfr({
      methods: [{ name: `a`, className: `C` }],
      stackTraces: [{ frames: [{ method: 0, line: 1 }] }],
      events: [{ type: `cpu`, stack: 0 }],
    })
    // Corrupt the chunk header's size field (a big-endian int64 at offset 8) to
    // declare a size smaller than the 68-byte header itself; reading the
    // header's fields from a chunk that short would run past its bounds.
    new DataView(bytes.buffer, bytes.byteOffset).setBigInt64(8, 20n)

    const md = convertBytesToMd(jfrConverter, bytes, options)

    expect(md).toBe(`No profiling data found.`)
    expect(await convertToMdAsync(jfrConverter, streamOf(bytes), options)).toBe(
      md,
    )
  })

  test(`abandons an event with an unreadable field without dropping others`, () => {
    // A lock event with a field the parser can't size is skipped, but the cpu
    // events surrounding it still parse rather than desyncing.
    const bytes = makeJfr({
      methods: [{ name: `a`, className: `com.example.C` }],
      stackTraces: [{ frames: [{ method: 0, line: 1 }] }],
      events: [
        { type: `cpu`, stack: 0 },
        { type: `lock`, stack: 0, weight: 1000 },
        { type: `cpu`, stack: 0 },
      ],
      malformations: { unreadableEventTypes: [`jdk.JavaMonitorEnter`] },
    })

    const md = convertBytesToMd(jfrConverter, bytes, options)

    // The malformed lock event produces no lock-contention profile, and both
    // cpu samples are still counted.
    expect(profileTitles(md)).toEqual([`Sampling profile`])
    expect(selfSamplesTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Samples: `2`,
          Function: `a`,
          Location: `com.example.C`,
        },
      ],
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

    const md = convertBytesToMd(
      jfrConverter,
      bytes,
      normalizeProfileToMdOptions({ baseURL: `/project`, topN: 1 }),
    )

    expect(totalSizeTables(md).map(table => table.length)).toEqual([1])
  })
})

describe(`streaming parse`, () => {
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
      { frames: [{ method: 1, line: 5 }] },
    ],
    events: [
      { type: `cpu`, stack: 0 },
      { type: `cpu`, stack: 1 },
      { type: `alloc`, stack: 0, weight: 4096 },
    ],
  })
  const expected = convertBytesToMd(jfrConverter, bytes, options)

  test(`matches sync conversion`, async () => {
    expect(await convertToMdAsync(jfrConverter, streamOf(bytes), options)).toBe(
      expected,
    )
  })

  test(`matches sync conversion across mid-chunk stream boundaries`, async () => {
    // Tiny stream reads split the chunk header and body across boundaries,
    // exercising the queue's header peeks and chunk assembly.
    expect(
      await convertToMdAsync(
        jfrConverter,
        streamOf(...chunk(bytes, 13)),
        options,
      ),
    ).toBe(expected)
  })

  test(`merges methods and stacks across chunks`, async () => {
    // A recording is a sequence of self-contained chunks, so concatenating two
    // single-chunk recordings feeds the parser two chunks from the stream.
    const recording = concatUint8Arrays([bytes, bytes])

    expect(
      await convertToMdAsync(
        jfrConverter,
        streamOf(...chunk(recording, 13)),
        options,
      ),
    ).toBe(convertBytesToMd(jfrConverter, recording, options))
  })
})

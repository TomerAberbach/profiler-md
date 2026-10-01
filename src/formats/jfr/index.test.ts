import { describe, expect, test } from 'vitest'
import { concatUint8Arrays } from '../../helpers/bytes.ts'
import { chunk, streamOf } from '../../helpers/testing.ts'
import {
  selfObjectsTables,
  selfSamplesTables,
  selfTimeTables,
} from '../../modalities/call-stack-profile/testing.ts'
import {
  selfSizeTables,
  totalSizeTables,
} from '../../modalities/heap-snapshot/testing.ts'
import { normalizeProfileToMdOptions } from '../../options.ts'
import {
  callersTables,
  expectLogs,
  linesTables,
  profileTitles,
  summaryLines,
} from '../../testing.ts'
import { convertBytesToMd, convertToMdAsync } from '../testing.ts'
import { jfrFormatSpec } from './index.ts'
import { makeJfr } from './testing.ts'
import type { JfrTestInput } from './testing.ts'

const options = normalizeProfileToMdOptions({ baseURL: `/project` })

/** The lines a recording from {@link makeJfr} logs, which name async-profiler. */
const ORIGIN_LOGS = [
  `debug: origin candidates, in priority order: async-profiler, jdk`,
  `info: detected origin: async-profiler`,
  `debug: async-profiler is named by the format's metadata`,
]

describe(`parse and matches`, () => {
  test(`accepts a synthetic recording with events`, () => {
    const bytes = makeJfr({
      methods: [{ name: `funcA`, className: `com.example.A` }],
      stackTraces: [{ frames: [{ method: 0, line: 5 }] }],
      events: [{ type: `cpu`, stack: 0 }],
    })

    expect(jfrFormatSpec.matches(bytes)).toBe(true)
  })

  test(`accepts a recording with the magic but no supported events`, () => {
    const bytes = makeJfr({ methods: [], stackTraces: [], events: [] })

    expect(jfrFormatSpec.matches(bytes)).toBe(true)
  })

  test(`rejects empty data without throwing`, () => {
    expect(jfrFormatSpec.matches(new Uint8Array())).toBe(false)
  })

  test(`rejects non-JFR binary data without throwing`, () => {
    expect(jfrFormatSpec.matches(new Uint8Array([0xff, 0xfe, 0xfd]))).toBe(
      false,
    )
  })
})

describe(`convert`, () => {
  test(`CPU samples are ranked purely by sample count`, () => {
    // CPU samples carry no value, so the profile has no metric column.
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

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

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

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

    expect(profileTitles(md)).toEqual([`Allocated heap profile`])
    expect(selfSizeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `3 KiB`,
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
          Size: `3 KiB`,
          Samples: `2`,
          Function: `allocate`,
          Location: `com.example.A`,
        },
        {
          '%': `100.0%`,
          Size: `3 KiB`,
          Samples: `2`,
          Function: `run`,
          Location: `com.example.A`,
        },
      ],
    ])
  })

  test(`native memory samples are measured by allocated bytes`, () => {
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

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

    expect(profileTitles(md)).toEqual([`Allocated native memory profile`])
    expect(selfSizeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `6 KiB`,
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
          Size: `6 KiB`,
          Samples: `2`,
          Function: `malloc`,
          Location: `libc.so`,
        },
        {
          '%': `100.0%`,
          Size: `6 KiB`,
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

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

    expect(profileTitles(md)).toEqual([`Lock contention profile`])
    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `3.0ms`,
          Contentions: `1`,
          Function: `lock`,
          Location: `com.example.L`,
        },
      ],
    ])
  })

  test(`names what each kind counts`, () => {
    const bytes = makeJfr({
      methods: [{ name: `run`, className: `com.example.A` }],
      stackTraces: [{ frames: [{ method: 0, line: 3 }] }],
      events: [
        { type: `cpu`, stack: 0 },
        { type: `alloc-tlab`, stack: 0, weight: 1024 },
        { type: `liveobject`, stack: 0, weight: 512 },
        { type: `nativemem`, stack: 0, weight: 256 },
        { type: `lock`, stack: 0, weight: 3_000_000 },
      ],
    })

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

    expect(summaryLines(md)).toEqual([
      `Collected 1 sample.`,
      `Allocated 1\u00A0KiB over 1 sample (1\u00A0KiB per sample).`,
      `Retained 512\u00A0B over 1 object (512\u00A0B per object).`,
      `Allocated 256\u00A0B over 1 sample (256\u00A0B per sample).`,
      `Blocked 3.0ms over 1 contention (3.0ms per contention).`,
    ])
  })

  test(`live-object samples are measured by retained bytes`, () => {
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

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

    expect(profileTitles(md)).toEqual([`Retained heap profile`])
    expect(selfSizeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `3 KiB`,
          Objects: `2`,
          Function: `allocate`,
          Location: `com.example.A`,
        },
      ],
    ])
  })

  test(`live-object samples without a size rank by object count`, () => {
    // `jdk.OldObjectSample` gained `objectSize` in JDK 21. An older recording
    // records which objects were live but not their sizes, so its profile has
    // no size column instead of a byte per object.
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
        { frames: [{ method: 1, line: 3 }] },
      ],
      events: [
        { type: `live`, stack: 0 },
        { type: `live`, stack: 0 },
        { type: `live`, stack: 1 },
      ],
      eventTypesWithoutWeightField: [`live`],
    })

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

    expect(profileTitles(md)).toEqual([`Object profile`])
    expect(summaryLines(md)).toEqual([`Recorded 3 objects.`])
    expect(selfObjectsTables(md)).toEqual([
      [
        {
          '%': `66.7%`,
          Objects: `2`,
          Function: `allocate`,
          Location: `com.example.A`,
        },
        {
          '%': `33.3%`,
          Objects: `1`,
          Function: `run`,
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
      profileTitles(convertBytesToMd(jfrFormatSpec, bytes, options)),
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
      jfrFormatSpec,
      bytes,
      normalizeProfileToMdOptions({
        baseURL: `/project`,
        showEntry: () => true,
      }),
    )

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
    // Stack `-1` writes the null stack reference, key 0.
    const bytes = makeJfr({
      methods: [{ name: `allocate`, className: `com.example.A` }],
      stackTraces: [{ frames: [{ method: 0, line: 7 }] }],
      events: [
        { type: `alloc`, stack: 0, weight: 1024 },
        { type: `alloc`, stack: -1, weight: 2048 },
      ],
    })

    const md = convertBytesToMd(
      jfrFormatSpec,
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
          Size: `2 KiB`,
          Samples: `1`,
          Function: `(anonymous)`,
          Location: `<unknown>`,
        },
        {
          '%': `33.3%`,
          Size: `1 KiB`,
          Samples: `1`,
          Function: `allocate`,
          Location: `com.example.A`,
        },
      ],
    ])
  })

  test(`async-profiler wall-clock samples honor the coalesced count`, () => {
    // `profiler.WallClockSample` batches samples into one event via its
    // `samples` field.
    const bytes = makeJfr({
      methods: [{ name: `work`, className: `com.example.W` }],
      stackTraces: [{ frames: [{ method: 0, line: 4 }] }],
      events: [
        { type: `wallclock`, stack: 0, samples: 3 },
        { type: `wallclock`, stack: 0, samples: 1 },
      ],
    })

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

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

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

    expect(profileTitles(md)).toEqual([`Lock contention profile`])
    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `5.0ms`,
          Contentions: `1`,
          Function: `park`,
          Location: `com.example.L`,
        },
      ],
    ])
  })

  test(`overloads stay separate and show formatted parameter lists`, () => {
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

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

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

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

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
    // `funcB` has no line, like a native frame.
    const bytes = makeJfr({
      methods: [
        { name: `funcB`, className: `com.example.B` },
        { name: `funcA`, className: `com.example.A` },
      ],
      stackTraces: [{ frames: [{ method: 0 }, { method: 1, line: 5 }] }],
      events: [{ type: `cpu`, stack: 0 }],
    })

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

    expect(linesTables(md, `funcB`)).toEqual([])
  })

  test(`keeps the chunks before one a killed JVM left cut off, with a warning`, async () => {
    const recording = makeJfr({
      methods: [{ name: `a`, className: `C` }],
      stackTraces: [{ frames: [{ method: 0, line: 1 }] }],
      events: [{ type: `cpu`, stack: 0 }],
    })
    const bytes = concatUint8Arrays([recording, recording.subarray(0, -5)])

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

    expect(summaryLines(md)).toEqual([`Collected 1 sample.`])
    expect(
      await convertToMdAsync(jfrFormatSpec, streamOf(bytes), options),
    ).toBe(md)
    const conversionLogs = [
      `debug: origin candidates, in priority order: async-profiler, jdk`,
      `info: detected origin: async-profiler`,
      `debug: async-profiler is named by the format's metadata`,
      `warn: skipped 1 chunk cut off by the end of the input`,
    ]
    expectLogs([...conversionLogs, ...conversionLogs])
  })

  test(`rejects a recording whose only chunk is cut off`, async () => {
    const bytes = makeJfr({
      methods: [{ name: `a`, className: `C` }],
      stackTraces: [{ frames: [{ method: 0, line: 1 }] }],
      events: [{ type: `cpu`, stack: 0 }],
    }).subarray(0, -5)

    const message = `no usable records because the parser skipped 1 chunk cut off by the end of the input`
    expect(() => convertBytesToMd(jfrFormatSpec, bytes, options)).toThrow(
      message,
    )
    await expect(
      convertToMdAsync(jfrFormatSpec, streamOf(bytes), options),
    ).rejects.toThrow(message)
  })
})

describe(`allocation event families`, () => {
  test(`the sampled allocation event supersedes the TLAB events`, () => {
    const bytes = makeJfr({
      methods: [{ name: `allocate`, className: `com.example.A` }],
      stackTraces: [{ frames: [{ method: 0, line: 7 }] }],
      events: [
        { type: `alloc`, stack: 0, weight: 1024 },
        { type: `alloc-tlab`, stack: 0, weight: 9999 },
      ],
    })

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

    expect(selfSizeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `1 KiB`,
          Samples: `1`,
          Function: `allocate`,
          Location: `com.example.A`,
        },
      ],
    ])
  })

  test(`TLAB events are weighted by the refill they stand for`, () => {
    // Sites allocating small objects rank alongside sites allocating large
    // ones at the same refill rate.
    const bytes = makeJfr({
      methods: [
        { name: `allocateSmall`, className: `com.example.A` },
        { name: `allocateLarge`, className: `com.example.A` },
      ],
      stackTraces: [
        { frames: [{ method: 0, line: 7 }] },
        { frames: [{ method: 1, line: 9 }] },
      ],
      events: [
        { type: `alloc-tlab`, stack: 0, weight: 524_288, objectSize: 32 },
        { type: `alloc-tlab`, stack: 1, weight: 524_288, objectSize: 4096 },
      ],
    })

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

    expect(selfSizeTables(md)).toEqual([
      [
        {
          '%': `50.0%`,
          Size: `512 KiB`,
          Samples: `1`,
          Function: `allocateSmall`,
          Location: `com.example.A`,
        },
        {
          '%': `50.0%`,
          Size: `512 KiB`,
          Samples: `1`,
          Function: `allocateLarge`,
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

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

    expect(selfSizeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `2 KiB`,
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
    const bytes = makeJfr({
      methods: [{ name: `funcA`, className: `com.example.A` }],
      stackTraces: [{ frames: [{ method: 0, line: 5 }] }],
      events: [{ type: `cpu`, stack: 0 }],
      malformations: { emptyUnknownPools: [900] },
    })

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

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

  test(`rejects a recording whose only chunk declares a size smaller than its header`, async () => {
    const bytes = makeJfr({
      methods: [{ name: `a`, className: `C` }],
      stackTraces: [{ frames: [{ method: 0, line: 1 }] }],
      events: [{ type: `cpu`, stack: 0 }],
    })
    // Corrupt the chunk header's size field (a big-endian int64 at offset 8) to
    // declare a size smaller than the 68-byte header itself; reading the
    // header's fields from a chunk that short would run past its bounds.
    new DataView(bytes.buffer, bytes.byteOffset).setBigInt64(8, 20n)

    const message = `no usable records because the parser skipped ${bytes.length.toLocaleString(`en-US`)} bytes not forming a chunk`
    expect(() => convertBytesToMd(jfrFormatSpec, bytes, options)).toThrow(
      message,
    )
    await expect(
      convertToMdAsync(jfrFormatSpec, streamOf(bytes), options),
    ).rejects.toThrow(message)
  })

  test(`reads an unrecognized frame layout like the flat one`, () => {
    const input: JfrTestInput = {
      methods: [
        { name: `leaf`, className: `com.example.L` },
        { name: `root`, className: `com.example.R` },
      ],
      stackTraces: [
        {
          frames: [
            { method: 0, line: 7 },
            { method: 1, line: 3 },
          ],
        },
        { frames: [{ method: 1, line: 3 }] },
      ],
      events: [
        { type: `cpu`, stack: 0 },
        { type: `cpu`, stack: 0 },
        { type: `cpu`, stack: 1 },
      ],
    }

    const md = convertBytesToMd(
      jfrFormatSpec,
      makeJfr({ ...input, unrecognizedFrameLayout: true }),
      options,
    )

    expect(md).toBe(convertBytesToMd(jfrFormatSpec, makeJfr(input), options))
    expect(selfSamplesTables(md)).toEqual([
      [
        {
          '%': `66.7%`,
          Samples: `2`,
          Function: `leaf`,
          Location: `com.example.L`,
        },
        {
          '%': `33.3%`,
          Samples: `1`,
          Function: `root`,
          Location: `com.example.R`,
        },
      ],
    ])
    expect(linesTables(md, `leaf`)).toEqual([
      [{ '%': `100.0%`, Samples: `2`, Location: `com.example.L:7` }],
    ])
    expect(linesTables(md, `root`)).toEqual([
      [{ '%': `100.0%`, Samples: `1`, Location: `com.example.R:3` }],
    ])
  })

  test(`abandons an event with an unreadable field without dropping others, with a warning`, () => {
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

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

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
    expectLogs([
      ...ORIGIN_LOGS,
      `warn: skipped 1 event with a field of an unreadable type`,
    ])
  })

  test(`skips an event referencing a missing stack trace, with a warning`, () => {
    const bytes = makeJfr({
      methods: [{ name: `a`, className: `com.example.C` }],
      stackTraces: [{ frames: [{ method: 0, line: 1 }] }],
      events: [
        { type: `cpu`, stack: 0 },
        { type: `cpu`, stack: 9 },
      ],
    })

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

    expect(summaryLines(md)).toEqual([`Collected 1 sample.`])
    expectLogs([
      ...ORIGIN_LOGS,
      `warn: skipped 1 event referencing a missing stack trace`,
    ])
  })

  test(`drops a frame referencing a missing method, with a warning`, () => {
    const bytes = makeJfr({
      methods: [{ name: `a`, className: `com.example.C` }],
      stackTraces: [
        {
          frames: [
            { method: 9, line: 5 },
            { method: 0, line: 1 },
          ],
        },
      ],
      events: [{ type: `cpu`, stack: 0 }],
    })

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

    expect(selfSamplesTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Samples: `1`,
          Function: `a`,
          Location: `com.example.C`,
        },
      ],
    ])
    expectLogs([
      ...ORIGIN_LOGS,
      `warn: skipped 1 frame referencing a missing method`,
    ])
  })

  test(`rejects a recording whose only chunk's metadata offset is outside it`, () => {
    const bytes = makeJfr({
      methods: [{ name: `a`, className: `C` }],
      stackTraces: [{ frames: [{ method: 0, line: 1 }] }],
      events: [{ type: `cpu`, stack: 0 }],
    })
    // The metadata offset is a big-endian int64 at offset 24.
    new DataView(bytes.buffer, bytes.byteOffset).setBigInt64(24, 1n << 40n)

    expect(() => convertBytesToMd(jfrFormatSpec, bytes, options)).toThrow(
      `no usable records because the parser skipped 1 chunk without metadata at its metadata offset`,
    )
  })

  test(`rejects a recording whose only chunk's metadata has a length past its end`, () => {
    const bytes = makeJfr({
      methods: [{ name: `a`, className: `C` }],
      stackTraces: [{ frames: [{ method: 0, line: 1 }] }],
      events: [{ type: `cpu`, stack: 0 }],
    })
    // The metadata's string count follows the five varints of its event header
    // after the 68-byte chunk header. Overwrite it with 2^35 - 1, which fits
    // neither the metadata event nor the chunk.
    let position = 68
    for (let varint = 0; varint < 5; varint++) {
      while (bytes[position++]! & 0x80) {
        // Skip the varint's continuation bytes.
      }
    }
    bytes.set([0xff, 0xff, 0xff, 0xff, 0x7f], position)

    expect(() => convertBytesToMd(jfrFormatSpec, bytes, options)).toThrow(
      `no usable records because the parser skipped 1 chunk whose metadata has a length past its end`,
    )
  })

  test(`skips a stack trace whose frame count runs past its event, with a warning`, () => {
    const bytes = makeJfr({
      methods: [{ name: `a`, className: `com.example.C` }],
      stackTraces: [
        { frames: [{ method: 0, line: 1 }] },
        { frames: [{ method: 0, line: 2 }] },
      ],
      // The events after the constant pool event hold more bytes than the
      // extra frame claims.
      events: [
        { type: `cpu`, stack: 0 },
        { type: `cpu`, stack: 0 },
        { type: `cpu`, stack: 1 },
      ],
      malformations: { overlongStackTraces: [1] },
    })

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

    expect(summaryLines(md)).toEqual([`Collected 2 samples.`])
    expectLogs([
      ...ORIGIN_LOGS,
      `warn: skipped 1 constant pool entry with a length past its end`,
      `warn: skipped 1 event referencing a missing stack trace`,
    ])
  })

  test(`skips a constant pool entry with a string of an unknown encoding`, () => {
    const bytes = makeJfr({
      methods: [{ name: `a`, className: `C` }],
      stackTraces: [{ frames: [{ method: 0, line: 1 }] }],
      events: [{ type: `cpu`, stack: 0 }],
      malformations: { unknownStringEncoding: true },
    })

    // The entry is the last symbol, so the constant pool event's later pools
    // are abandoned with it.
    expect(() => convertBytesToMd(jfrFormatSpec, bytes, options)).toThrow(
      `no usable records because the parser skipped 1 constant pool entry with a string of an unknown encoding and 1 event referencing a missing stack trace`,
    )
  })

  test(`skips an event size cut off at the end of its chunk, with a warning`, () => {
    const bytes = makeJfr({
      methods: [{ name: `a`, className: `C` }],
      stackTraces: [{ frames: [{ method: 0, line: 1 }] }],
      events: [{ type: `cpu`, stack: 0 }],
      // A varint's first byte, with its continuation bit set.
      malformations: { trailingBytes: [0x80] },
    })

    const md = convertBytesToMd(jfrFormatSpec, bytes, options)

    expect(summaryLines(md)).toEqual([`Collected 1 sample.`])
    expectLogs([
      ...ORIGIN_LOGS,
      `warn: skipped 1 byte from an event with an invalid size to the end of its chunk`,
    ])
  })

  test(`rejects a recording whose event after the metadata has a size of 0`, () => {
    const bytes = makeJfr({
      methods: [{ name: `a`, className: `C` }],
      stackTraces: [{ frames: [{ method: 0, line: 1 }] }],
      events: [{ type: `cpu`, stack: 0 }],
    })
    // The metadata event follows the 68-byte chunk header, and its size is a
    // two-byte varint.
    const eventStart = 68 + ((bytes[68]! & 0x7f) | (bytes[69]! << 7))
    bytes[eventStart] = 0

    expect(() => convertBytesToMd(jfrFormatSpec, bytes, options)).toThrow(
      `no usable records because the parser skipped ${(bytes.length - eventStart).toLocaleString(`en-US`)} bytes from an event with an invalid size to the end of its chunk`,
    )
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
      jfrFormatSpec,
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
  const expected = convertBytesToMd(jfrFormatSpec, bytes, options)

  test(`matches sync conversion`, async () => {
    expect(
      await convertToMdAsync(jfrFormatSpec, streamOf(bytes), options),
    ).toBe(expected)
  })

  test(`matches sync conversion across mid-chunk stream boundaries`, async () => {
    // Tiny stream reads split the chunk header and body across boundaries,
    // exercising the queue's header peeks and chunk assembly.
    expect(
      await convertToMdAsync(
        jfrFormatSpec,
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
        jfrFormatSpec,
        streamOf(...chunk(recording, 13)),
        options,
      ),
    ).toBe(convertBytesToMd(jfrFormatSpec, recording, options))
  })
})

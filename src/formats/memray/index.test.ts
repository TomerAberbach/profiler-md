import { describe, expect, test } from 'vitest'
import { chunk, streamOf } from '../../helpers/testing.ts'
import { diffProfiles } from '../../index.ts'
import {
  selfSizeTables,
  totalSizeTables,
} from '../../modalities/call-stack-profile/testing.ts'
import { normalizeProfileToMdOptions } from '../../options.ts'
import {
  categoryTables,
  ignoreLogs,
  linesTables,
  profileTitles,
  rankingTables,
  summaryLines,
} from '../../testing.ts'
import { convertBytesToMd, convertToMdAsync } from '../testing.ts'
import { memrayConverter } from './index.ts'
import { parseMemray } from './parse.ts'
import {
  asLz4Frame,
  MAIN_THREAD_ID,
  makeAggregatedMemray,
  makeMemray,
  MEMRAY_CALLOC,
  MEMRAY_FREE,
  MEMRAY_MALLOC,
  MEMRAY_MMAP,
  MEMRAY_MUNMAP,
} from './testing.ts'

const CODE_OBJECTS = [
  { id: 1, functionName: `hot`, filename: `/app/hot.py`, firstLineNumber: 10 },
  {
    id: 2,
    functionName: `cold`,
    filename: `/app/cold.py`,
    firstLineNumber: 20,
  },
]

/**
 * Allocates 1 KiB in `hot` and 3 KiB in `cold`, frees the 3 KiB, then allocates
 * another 512 B in `cold`. Memory peaks at 4 KiB with both allocations live,
 * and ends with 1.5 KiB live, so the two measures differ on both totals and on
 * which function is the larger.
 */
const risesThenFalls = makeMemray({
  codeObjects: CODE_OBJECTS,
  records: [
    { type: `thread`, threadId: MAIN_THREAD_ID },
    { type: `push`, codeObjectId: 1 },
    { type: `alloc`, allocator: MEMRAY_MALLOC, address: 0x1000, size: 1024 },
    { type: `pop` },
    { type: `push`, codeObjectId: 2 },
    { type: `alloc`, allocator: MEMRAY_MALLOC, address: 0x2000, size: 3072 },
    { type: `alloc`, allocator: MEMRAY_FREE, address: 0x2000 },
    { type: `alloc`, allocator: MEMRAY_CALLOC, address: 0x3000, size: 512 },
    { type: `pop` },
  ],
})

const options = () =>
  normalizeProfileToMdOptions({ baseURL: `/app`, showEntry: () => true })

/** The titles of the profiles a capture converts to, one per measure. */
const PEAK = `Peak memory profile`
const LEAKED = `Leaked memory profile`

describe(`matches`, () => {
  test(`accepts a capture, compressed or not`, () => {
    expect(memrayConverter.matches(risesThenFalls)).toBe(true)
    expect(memrayConverter.matches(asLz4Frame(risesThenFalls))).toBe(true)
  })

  test(`rejects bytes that aren't a capture`, () => {
    expect(memrayConverter.matches(new Uint8Array(0))).toBe(false)
    expect(memrayConverter.matches(new TextEncoder().encode(`memray!`))).toBe(
      false,
    )
    expect(
      memrayConverter.matches(new TextEncoder().encode(`{"json": true}`)),
    ).toBe(false)
  })

  test(`rejects an LZ4 file that isn't a capture`, () => {
    expect(
      memrayConverter.matches(asLz4Frame(new TextEncoder().encode(`hello`))),
    ).toBe(false)
  })

  test(`parse rejects bytes that aren't a capture`, () => {
    expect(() =>
      parseMemray(new TextEncoder().encode(`not a capture`)),
    ).toThrow(`missing magic`)
  })

  test(`parse reports a capture that ends mid-record`, () => {
    expect(() => parseMemray(risesThenFalls.subarray(0, 10))).toThrow(
      `truncated capture`,
    )
  })

  test(`parse reports a capture version it can't read`, () => {
    expect(() => parseMemray(makeMemray({ version: 14, records: [] }))).toThrow(
      `unsupported version 14`,
    )
  })

  test(`parse reports an allocation naming an uncached address`, () => {
    // A 1 KiB malloc naming cache index 0, which no earlier record filled.
    expect(() =>
      parseMemray(
        makeMemray({ records: [{ type: `raw`, bytes: [0x86, 0x80, 0x08] }] }),
      ),
    ).toThrow(
      `record names an address no earlier record wrote, got cache index: 0`,
    )
  })

  test(`parse reports an aggregated allocation on an undefined stack`, () => {
    expect(() =>
      parseMemray(
        makeAggregatedMemray({
          codeObjects: CODE_OBJECTS,
          frames: [{ codeObjectId: 1 }],
          stacks: [{ frame: 0, parent: 0 }],
          allocations: [
            {
              stack: 3,
              peakBytes: 1024,
              peakCount: 1,
              leakedBytes: 0,
              leakedCount: 0,
            },
          ],
        }),
      ),
    ).toThrow(`allocation is on a stack no record defines, got: 3`)
  })

  test(`parse reports a stack in an undefined frame`, () => {
    expect(() =>
      parseMemray(
        makeAggregatedMemray({
          codeObjects: CODE_OBJECTS,
          frames: [{ codeObjectId: 1 }],
          stacks: [{ frame: 2, parent: 0 }],
          allocations: [
            {
              stack: 1,
              peakBytes: 1024,
              peakCount: 1,
              leakedBytes: 0,
              leakedCount: 0,
            },
          ],
        }),
      ),
    ).toThrow(`stack 1 is in a frame no record defines, got: 2`)
  })

  test(`parse reports a stack under one that follows it`, () => {
    // Walking such a stack's parents would never reach the empty stack.
    expect(() =>
      parseMemray(
        makeAggregatedMemray({
          codeObjects: CODE_OBJECTS,
          frames: [{ codeObjectId: 1 }],
          stacks: [{ frame: 0, parent: 5 }],
          allocations: [],
        }),
      ),
    ).toThrow(`stack 1 is under a stack that follows it, got parent: 5`)
  })
})

describe(`convert`, () => {
  test(`reads both capture versions the same way`, () => {
    // In version 13 the header ends with the traced process's module search
    // paths, and the records are encoded as in version 12.
    const records = [
      { type: `thread`, threadId: MAIN_THREAD_ID },
      { type: `push`, codeObjectId: 1 },
      { type: `alloc`, allocator: MEMRAY_MALLOC, address: 0x1000, size: 1024 },
    ] as const
    const version12 = makeMemray({
      version: 12,
      codeObjects: CODE_OBJECTS,
      records: [...records],
    })
    const version13 = makeMemray({
      version: 13,
      codeObjects: CODE_OBJECTS,
      records: [...records],
    })

    expect(convertBytesToMd(memrayConverter, version13, options())).toEqual(
      convertBytesToMd(memrayConverter, version12, options()),
    )
  })

  test(`measures the memory live at the peak and at the end`, () => {
    const md = convertBytesToMd(memrayConverter, risesThenFalls, options())

    // The measures count different allocations, so each is its own profile.
    expect(profileTitles(md)).toEqual([
      `Peak memory profile`,
      `Leaked memory profile`,
    ])
    expect(summaryLines(md)).toEqual([
      `Held 4\u00A0KiB over 2 allocations (2\u00A0KiB per allocation).`,
      `Leaked 1.5\u00A0KiB over 2 allocations (768\u00A0B per allocation).`,
    ])
    expect(categoryTables(md)).toEqual([
      [{ Category: `Ours`, '%': `100.0%`, Size: `4 KiB`, Allocations: `2` }],
      [{ Category: `Ours`, '%': `100.0%`, Size: `1.5 KiB`, Allocations: `2` }],
    ])

    // At the peak both allocations are live and `cold` holds the larger one.
    expect(selfSizeTables(md, PEAK)).toEqual([
      [
        {
          '%': `75.0%`,
          Size: `3 KiB`,
          Allocations: `1`,
          Function: `cold`,
          Location: `cold.py:20`,
        },
        {
          '%': `25.0%`,
          Size: `1 KiB`,
          Allocations: `1`,
          Function: `hot`,
          Location: `hot.py:10`,
        },
      ],
    ])

    // By the end `cold` has freed its 3 KiB and leaked only the later 512 B.
    expect(selfSizeTables(md, LEAKED)).toEqual([
      [
        {
          '%': `66.7%`,
          Size: `1 KiB`,
          Allocations: `1`,
          Function: `hot`,
          Location: `hot.py:10`,
        },
        {
          '%': `33.3%`,
          Size: `512 B`,
          Allocations: `1`,
          Function: `cold`,
          Location: `cold.py:20`,
        },
      ],
    ])
  })

  test(`counts an allocation of no size`, () => {
    const md = convertBytesToMd(
      memrayConverter,
      makeMemray({
        codeObjects: CODE_OBJECTS,
        records: [
          { type: `thread`, threadId: MAIN_THREAD_ID },
          { type: `push`, codeObjectId: 1 },
          {
            type: `alloc`,
            allocator: MEMRAY_MALLOC,
            address: 0x1000,
            size: 2048,
          },
          { type: `pop` },
          { type: `push`, codeObjectId: 2 },
          { type: `alloc`, allocator: MEMRAY_MALLOC, address: 0x2000, size: 0 },
          { type: `pop` },
        ],
      }),
      options(),
    )

    // `cold` holds no bytes, so the sizes the table ranks by leave it out, but
    // the profile still counts its allocation.
    expect(summaryLines(md)).toEqual([
      `Held 2\u00A0KiB over 2 allocations (1\u00A0KiB per allocation).`,
      `Leaked 2\u00A0KiB over 2 allocations (1\u00A0KiB per allocation).`,
    ])
    expect(selfSizeTables(md, PEAK)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `2 KiB`,
          Allocations: `1`,
          Function: `hot`,
          Location: `hot.py:10`,
        },
      ],
    ])
  })

  test(`attributes an allocation to the stack its thread is in`, () => {
    const md = convertBytesToMd(
      memrayConverter,
      makeMemray({
        codeObjects: CODE_OBJECTS,
        records: [
          { type: `thread`, threadId: MAIN_THREAD_ID },
          { type: `push`, codeObjectId: 2 },
          { type: `push`, codeObjectId: 1 },
          {
            type: `alloc`,
            allocator: MEMRAY_MALLOC,
            address: 0x1000,
            size: 2048,
          },
        ],
      }),
      options(),
    )

    // `hot` allocated it, so only it has the size to itself, while `cold`
    // holds it as its callee's.
    expect(selfSizeTables(md, PEAK)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `2 KiB`,
          Allocations: `1`,
          Function: `hot`,
          Location: `hot.py:10`,
        },
      ],
    ])
    expect(totalSizeTables(md, PEAK)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `2 KiB`,
          Allocations: `1`,
          Function: `hot`,
          Location: `hot.py:10`,
        },
        {
          '%': `100.0%`,
          Size: `2 KiB`,
          Allocations: `1`,
          Function: `cold`,
          Location: `cold.py:20`,
        },
      ],
    ])
  })

  test(`frees an address the allocation records name by cache index`, () => {
    // The same address allocated and freed repeatedly is written once and then
    // named by its place in the writer's cache, so a reader that doesn't track
    // the cache identically frees the wrong allocation.
    const md = convertBytesToMd(
      memrayConverter,
      makeMemray({
        codeObjects: CODE_OBJECTS,
        records: [
          { type: `thread`, threadId: MAIN_THREAD_ID },
          { type: `push`, codeObjectId: 1 },
          {
            type: `alloc`,
            allocator: MEMRAY_MALLOC,
            address: 0x1000,
            size: 4096,
          },
          { type: `alloc`, allocator: MEMRAY_FREE, address: 0x1000 },
          {
            type: `alloc`,
            allocator: MEMRAY_MALLOC,
            address: 0x1000,
            size: 1024,
          },
        ],
      }),
      options(),
    )

    // The 4 KiB allocation is the peak, and the 1 KiB one that reused its
    // address is what leaked.
    expect(summaryLines(md)).toEqual([
      `Held 4\u00A0KiB over 1 allocation (4\u00A0KiB per allocation).`,
      `Leaked 1\u00A0KiB over 1 allocation (1\u00A0KiB per allocation).`,
    ])
  })

  test(`an allocation replacing a live one at its address frees it`, () => {
    // A deallocation memray didn't trace leaves the earlier allocation live at
    // the address the later one takes.
    const md = convertBytesToMd(
      memrayConverter,
      makeMemray({
        codeObjects: CODE_OBJECTS,
        records: [
          { type: `thread`, threadId: MAIN_THREAD_ID },
          { type: `push`, codeObjectId: 1 },
          {
            type: `alloc`,
            allocator: MEMRAY_MALLOC,
            address: 0x1000,
            size: 1024,
          },
          {
            type: `alloc`,
            allocator: MEMRAY_MALLOC,
            address: 0x1000,
            size: 8,
          },
        ],
      }),
      options(),
    )

    // The peak is the 1 KiB allocation alone, since the 8 B one displaced it.
    expect(summaryLines(md)).toEqual([
      `Held 1\u00A0KiB over 1 allocation (1\u00A0KiB per allocation).`,
      `Leaked 8\u00A0B over 1 allocation (8\u00A0B per allocation).`,
    ])
  })

  test(`a mapping over a live one frees the range it covers`, () => {
    const md = convertBytesToMd(
      memrayConverter,
      makeMemray({
        codeObjects: CODE_OBJECTS,
        records: [
          { type: `thread`, threadId: MAIN_THREAD_ID },
          { type: `push`, codeObjectId: 1 },
          {
            type: `alloc`,
            allocator: MEMRAY_MMAP,
            address: 0x1_00_00,
            size: 4096,
          },
          // Maps over the first 2 KiB of the mapping above.
          {
            type: `alloc`,
            allocator: MEMRAY_MMAP,
            address: 0x1_00_00,
            size: 2048,
          },
        ],
      }),
      options(),
    )

    // The two mappings cover 4 KiB together, not the 6 KiB they total.
    expect(summaryLines(md)).toEqual([
      `Held 4\u00A0KiB over 2 allocations (2\u00A0KiB per allocation).`,
      `Leaked 4\u00A0KiB over 2 allocations (2\u00A0KiB per allocation).`,
    ])
  })

  test(`a partial munmap frees only the part of the mapping it covers`, () => {
    const md = convertBytesToMd(
      memrayConverter,
      makeMemray({
        codeObjects: CODE_OBJECTS,
        records: [
          { type: `thread`, threadId: MAIN_THREAD_ID },
          { type: `push`, codeObjectId: 1 },
          {
            type: `alloc`,
            allocator: MEMRAY_MMAP,
            address: 0x1_00_00,
            size: 4096,
          },
          // Unmaps the middle 1 KiB, splitting the mapping in two.
          {
            type: `alloc`,
            allocator: MEMRAY_MUNMAP,
            address: 0x1_04_00,
            size: 1024,
          },
        ],
      }),
      options(),
    )

    // The two halves the unmapping left are two mappings by the end, so the
    // leaked memory counts one allocation each.
    expect(summaryLines(md)).toEqual([
      `Held 4\u00A0KiB over 1 allocation (4\u00A0KiB per allocation).`,
      `Leaked 3\u00A0KiB over 2 allocations (1.5\u00A0KiB per allocation).`,
    ])
  })

  test(`drops the frames the main thread was in before tracking started`, () => {
    const records = [
      { type: `thread`, threadId: MAIN_THREAD_ID },
      { type: `push`, codeObjectId: 2 },
      { type: `push`, codeObjectId: 1 },
      { type: `alloc`, allocator: MEMRAY_MALLOC, address: 0x1000, size: 1024 },
    ] as const

    const md = convertBytesToMd(
      memrayConverter,
      makeMemray({
        codeObjects: CODE_OBJECTS,
        skippedFramesOnMainThread: 1,
        records: [...records],
      }),
      options(),
    )

    // `cold` is the launcher's frame, so only `hot` remains, with the size to
    // itself and nothing above it.
    expect(totalSizeTables(md, PEAK)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `1 KiB`,
          Allocations: `1`,
          Function: `hot`,
          Location: `hot.py:10`,
        },
      ],
    ])
  })

  test(`reads a frame's executing line from its code object's line table`, () => {
    const md = convertBytesToMd(
      memrayConverter,
      makeMemray({
        codeObjects: [
          {
            id: 1,
            functionName: `hot`,
            filename: `/app/hot.py`,
            firstLineNumber: 10,
            // Two entries of one code unit each, moving the line to 15 and
            // then to 25.
            lineTable: [0xe8, 0x0a, 0xe8, 0x14],
          },
        ],
        records: [
          { type: `thread`, threadId: MAIN_THREAD_ID },
          { type: `push`, codeObjectId: 1, instructionOffset: 0 },
          {
            type: `alloc`,
            allocator: MEMRAY_MALLOC,
            address: 0x1000,
            size: 1024,
          },
          { type: `pop` },
          { type: `push`, codeObjectId: 1, instructionOffset: 2 },
          {
            type: `alloc`,
            allocator: MEMRAY_MALLOC,
            address: 0x2000,
            size: 3072,
          },
        ],
      }),
      options(),
    )

    // Both frames are the same function, defined on line 10, and the line
    // table splits its size across the two lines it was executing.
    expect(linesTables(md, `hot`)).toEqual([
      [
        {
          '%': `75.0%`,
          Size: `3 KiB`,
          Allocations: `1`,
          Location: `hot.py:25`,
        },
        {
          '%': `25.0%`,
          Size: `1 KiB`,
          Allocations: `1`,
          Location: `hot.py:15`,
        },
      ],
    ])
  })

  test(`reads the totals a --aggregate capture states per stack`, () => {
    const md = convertBytesToMd(
      memrayConverter,
      makeAggregatedMemray({
        codeObjects: CODE_OBJECTS,
        frames: [{ codeObjectId: 1 }, { codeObjectId: 2 }],
        // Stack 1 is `hot` alone and stack 2 is `cold` alone.
        stacks: [
          { frame: 0, parent: 0 },
          { frame: 1, parent: 0 },
        ],
        allocations: [
          {
            stack: 1,
            peakBytes: 1024,
            peakCount: 1,
            leakedBytes: 1024,
            leakedCount: 1,
          },
          {
            stack: 2,
            peakBytes: 3072,
            peakCount: 1,
            leakedBytes: 512,
            leakedCount: 1,
          },
        ],
      }),
      options(),
    )

    // The same totals a capture of every allocation replays to.
    expect(summaryLines(md)).toEqual([
      `Held 4\u00A0KiB over 2 allocations (2\u00A0KiB per allocation).`,
      `Leaked 1.5\u00A0KiB over 2 allocations (768\u00A0B per allocation).`,
    ])
    expect(selfSizeTables(md, PEAK)).toEqual([
      [
        {
          '%': `75.0%`,
          Size: `3 KiB`,
          Allocations: `1`,
          Function: `cold`,
          Location: `cold.py:20`,
        },
        {
          '%': `25.0%`,
          Size: `1 KiB`,
          Allocations: `1`,
          Function: `hot`,
          Location: `hot.py:10`,
        },
      ],
    ])
  })

  test(`counts each measure's own allocations`, () => {
    const md = convertBytesToMd(
      memrayConverter,
      makeAggregatedMemray({
        codeObjects: CODE_OBJECTS,
        frames: [{ codeObjectId: 1 }, { codeObjectId: 2 }],
        stacks: [
          { frame: 0, parent: 0 },
          { frame: 1, parent: 0 },
        ],
        allocations: [
          // `hot` held four allocations at the peak and leaked one of them.
          {
            stack: 1,
            peakBytes: 1024,
            peakCount: 4,
            leakedBytes: 512,
            leakedCount: 1,
          },
          // `cold` allocated only after the peak, so it leaked two
          // allocations it was never counted for at the peak.
          {
            stack: 2,
            peakBytes: 0,
            peakCount: 0,
            leakedBytes: 256,
            leakedCount: 2,
          },
        ],
      }),
      options(),
    )

    expect(summaryLines(md)).toEqual([
      `Held 1\u00A0KiB over 4 allocations (256\u00A0B per allocation).`,
      `Leaked 768\u00A0B over 3 allocations (256\u00A0B per allocation).`,
    ])
    expect(selfSizeTables(md, PEAK)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `1 KiB`,
          Allocations: `4`,
          Function: `hot`,
          Location: `hot.py:10`,
        },
      ],
    ])
    expect(selfSizeTables(md, LEAKED)).toEqual([
      [
        {
          '%': `66.7%`,
          Size: `512 B`,
          Allocations: `1`,
          Function: `hot`,
          Location: `hot.py:10`,
        },
        {
          '%': `33.3%`,
          Size: `256 B`,
          Allocations: `2`,
          Function: `cold`,
          Location: `cold.py:20`,
        },
      ],
    ])
  })

  test(`attributes the frames pushed before the first context switch`, () => {
    // Tracking starts on the main thread the header names, which memray states
    // there rather than in a context switch record.
    const md = convertBytesToMd(
      memrayConverter,
      makeMemray({
        codeObjects: CODE_OBJECTS,
        records: [
          { type: `push`, codeObjectId: 1 },
          {
            type: `alloc`,
            allocator: MEMRAY_MALLOC,
            address: 0x1000,
            size: 1024,
          },
        ],
      }),
      options(),
    )

    expect(selfSizeTables(md, PEAK)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `1 KiB`,
          Allocations: `1`,
          Function: `hot`,
          Location: `hot.py:10`,
        },
      ],
    ])
  })

  test(`converts a capture recorded with --native`, () => {
    // Every record type carries an extra native frame ID under `--native`, so
    // reading one wrong desynchronizes the rest of the byte stream.
    const md = convertBytesToMd(
      memrayConverter,
      makeMemray({
        nativeTraces: true,
        codeObjects: CODE_OBJECTS,
        records: [
          { type: `threadName`, name: `MainThread` },
          { type: `thread`, threadId: MAIN_THREAD_ID },
          { type: `push`, codeObjectId: 1 },
          { type: `nativeFrame`, instructionPointer: 0x40_00_00, index: 1 },
          {
            type: `alloc`,
            allocator: MEMRAY_MALLOC,
            address: 0x1000,
            size: 1024,
          },
          { type: `object`, address: 0x1000, created: true },
          {
            type: `alloc`,
            allocator: MEMRAY_MMAP,
            address: 0x1_00_00,
            size: 4096,
          },
          // Unmaps the middle 1 KiB, splitting the mapping in two.
          {
            type: `alloc`,
            allocator: MEMRAY_MUNMAP,
            address: 0x1_04_00,
            size: 1024,
          },
          { type: `object`, address: 0x1000, created: false },
          { type: `alloc`, allocator: MEMRAY_FREE, address: 0x1000 },
        ],
      }),
      options(),
    )

    // The malloc and the mapping are live together at the peak, and the two
    // halves of the mapping are what leaked.
    expect(summaryLines(md)).toEqual([
      `Held 5\u00A0KiB over 2 allocations (2.5\u00A0KiB per allocation).`,
      `Leaked 3\u00A0KiB over 2 allocations (1.5\u00A0KiB per allocation).`,
    ])
    expect(selfSizeTables(md, LEAKED)).toEqual([
      [
        {
          '%': `100.0%`,
          Size: `3 KiB`,
          Allocations: `2`,
          Function: `hot`,
          Location: `hot.py:10`,
        },
      ],
    ])
  })

  test(`diffs sides holding the same bytes over different allocation counts`, () => {
    ignoreLogs()
    // A stack's bytes are reported as measured rather than divided across its
    // allocations, which would multiply back to a total off by an ulp and read
    // as a change here.
    const holds = (sizes: number[]) =>
      makeMemray({
        codeObjects: CODE_OBJECTS,
        records: [
          { type: `thread`, threadId: MAIN_THREAD_ID },
          { type: `push`, codeObjectId: 1 },
          ...sizes.map((size, index) => ({
            type: `alloc` as const,
            allocator: MEMRAY_MALLOC,
            address: 0x1000 * (index + 1),
            size,
          })),
        ],
      })

    const md = diffProfiles(
      { data: holds([29]), format: `memray` },
      { data: holds([5, 4, 4, 4, 4, 4, 4]), format: `memray` },
      { baseURL: `/app`, showEntry: () => true },
    )

    expect(profileTitles(md)).toEqual([
      `Peak memory profile diff`,
      `Leaked memory profile diff`,
    ])
    expect(summaryLines(md)).toEqual([
      `Held 29\u00A0B over 1 allocation → 7 allocations (29\u00A0B → 4.14\u00A0B per allocation).`,
      `Leaked 29\u00A0B over 1 allocation → 7 allocations (29\u00A0B → 4.14\u00A0B per allocation).`,
    ])
    expect(rankingTables(md, `Self size`, `Regressions`)).toEqual([])
    expect(rankingTables(md, `Self size`, `Improvements`)).toEqual([])
  })

  test(`converts a compressed capture from a stream`, async () => {
    const compressed = asLz4Frame(risesThenFalls)
    const md = await convertToMdAsync(
      memrayConverter,
      streamOf(...chunk(compressed, 7)),
      options(),
    )

    expect(summaryLines(md)).toEqual([
      `Held 4\u00A0KiB over 2 allocations (2\u00A0KiB per allocation).`,
      `Leaked 1.5\u00A0KiB over 2 allocations (768\u00A0B per allocation).`,
    ])
  })
})

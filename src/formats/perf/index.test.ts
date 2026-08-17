import { describe, expect, test } from 'vitest'
import { chunk, streamOf } from '../../helpers/testing.ts'
import {
  selfTimeTables,
  totalTimeTables,
} from '../../modalities/call-stack-profile/testing.ts'
import { normalizeProfileToMdOptions } from '../../options.ts'
import { categoryTables, profileTitles, summaryLines } from '../../testing.ts'
import { convertBytesToMd, convertToMdAsync } from '../testing.ts'
import { perfConverter } from './index.ts'
import { parsePerf } from './parse/index.ts'
import {
  commRecord,
  CONTEXT_KERNEL,
  CONTEXT_USER,
  eventDescFeature,
  forkRecord,
  KERNEL_MISC,
  makePerf,
  mmapRecord,
  MULTI_EVENT_CPU_SAMPLE_TYPE,
  MULTI_EVENT_SAMPLE_TYPE,
  sampleRecord,
  STACK_USER_SAMPLE_TYPE,
  truncatedRecord,
} from './testing.ts'

/** A mapping of a workload binary, and one of the C library beside it. */
const workloadMapping = mmapRecord({
  start: 0x40_00_00,
  length: 0x1_00_00,
  path: `/src/workload`,
})
const libcMapping = mmapRecord({
  start: 0x7f_00_00,
  length: 0x1_00_00,
  path: `/usr/lib/libc.so.6`,
})

describe(`matches`, () => {
  test(`accepts a file beginning with the magic`, () => {
    expect(perfConverter.matches(makePerf())).toBe(true)
  })

  test(`rejects anything else`, () => {
    expect(perfConverter.matches(new TextEncoder().encode(`PERFILE`))).toBe(
      false,
    )
    expect(perfConverter.matches(new TextEncoder().encode(`{"json": 1}`))).toBe(
      false,
    )
    expect(perfConverter.matches(new Uint8Array(0))).toBe(false)
  })

  test(`accepts the versions and byte orders parse rejects, so it states why`, () => {
    const swapped = makePerf({ magic: `2ELIFREP` })
    const version1 = makePerf({ magic: `PERFFILE` })

    expect(perfConverter.matches(swapped)).toBe(true)
    expect(perfConverter.matches(version1)).toBe(true)
    expect(() => parsePerf(swapped)).toThrow(`opposite byte order`)
    expect(() => parsePerf(version1)).toThrow(`PERFFILE`)
  })
})

describe(`parse`, () => {
  test(`rejects a file without the magic`, () => {
    expect(() => parsePerf(new TextEncoder().encode(`not perf.data`))).toThrow(
      `missing the PERFILE2 magic`,
    )
  })

  test(`rejects a recording streamed to a pipe`, () => {
    expect(() => parsePerf(makePerf({ headerSize: 16 }))).toThrow(`pipe`)
  })

  test(`rejects a header of an unknown length`, () => {
    expect(() => parsePerf(makePerf({ headerSize: 96 }))).toThrow(`got: 96`)
  })

  test(`rejects a compressed recording`, () => {
    expect(() =>
      parsePerf(
        makePerf({ features: [{ bit: 27, payload: new Uint8Array(8) }] }),
      ),
    ).toThrow(`perf record -z`)
  })

  test(`rejects a recording whose user stacks need unwinding from a stack copy`, () => {
    for (const features of [[], [{ bit: 129, payload: new Uint8Array(8) }]]) {
      expect(() =>
        parsePerf(
          makePerf({
            events: [{ sampleType: 0x127 + STACK_USER_SAMPLE_TYPE }],
            features,
            records: [
              workloadMapping,
              sampleRecord({
                callchain: [0x40_12_34],
                stackCopy: new Uint8Array(16),
              }),
            ],
          }),
        ),
      ).toThrow(`--call-graph dwarf`)
    }
  })

  test(`reads a recording whose stack copies were unwound before writing`, () => {
    const md = convertBytesToMd(
      perfConverter,
      makePerf({
        events: [{ sampleType: 0x127 + STACK_USER_SAMPLE_TYPE }],
        features: [{ bit: 129, payload: new Uint8Array(8) }],
        records: [
          workloadMapping,
          sampleRecord({
            callchain: [0x40_12_34, 0x40_10_00],
            stackCopy: new Uint8Array(0),
          }),
        ],
      }),
      normalizeProfileToMdOptions({ baseURL: `/`, showEntry: () => true }),
    )

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `1.0ms`,
          Samples: `1`,
          Function: `0x1234`,
          Location: `src/workload`,
        },
      ],
    ])
  })

  test(`rejects a sample record shorter than the fields its event records`, () => {
    const sample = sampleRecord({ callchain: [0x40_12_34] })

    expect(() =>
      parsePerf(makePerf({ records: [truncatedRecord(sample, 24)] })),
    ).toThrow(
      `sample record ends before the fields its event records, got: 16 bytes`,
    )
    expect(() =>
      parsePerf(makePerf({ records: [truncatedRecord(sample, 40)] })),
    ).toThrow(`sample record ends before its call chain, got: 0 bytes`)
    expect(() =>
      parsePerf(makePerf({ records: [truncatedRecord(sample, 48)] })),
    ).toThrow(`sample call chain runs past its record, got: 1 entries`)
  })

  test(`rejects a command record shorter than the process it names`, () => {
    expect(() =>
      parsePerf(
        makePerf({
          records: [truncatedRecord(commRecord({ exec: true }), 8)],
        }),
      ),
    ).toThrow(`truncated command record`)
  })

  test(`rejects a file cut short of the data section it declares`, () => {
    const bytes = makePerf({
      records: [sampleRecord({ callchain: [0x40_10_00] })],
    })

    expect(() => parsePerf(bytes.subarray(0, -8))).toThrow(
      `data section runs past the end of the file`,
    )
  })
})

describe(`origin hint`, () => {
  test(`a feature section from simpleperf's own range identifies the writer`, () => {
    const withSimpleperfFeature = makePerf({
      features: [{ bit: 129, payload: new Uint8Array(8) }],
      records: [sampleRecord({ callchain: [0x40_12_34] })],
    })

    expect(parsePerf(withSimpleperfFeature)[0]?.originHint).toBe(`simpleperf`)
  })

  test(`a file with only the sections perf writes hints at nothing`, () => {
    const fromPerf = makePerf({
      features: [eventDescFeature([{ name: `cpu-clock`, ids: [] }])],
      records: [sampleRecord({ callchain: [0x40_12_34] })],
    })

    expect(parsePerf(fromPerf)[0]?.originHint).toBeUndefined()
  })
})

describe(`convert`, () => {
  const options = () =>
    normalizeProfileToMdOptions({ baseURL: `/`, showEntry: () => true })

  test(`an address is named by its offset into the file mapped over it`, () => {
    // Leaf first: the sampled address in the workload, called from another
    // address in it. Two samples at 1ms each.
    const md = convertBytesToMd(
      perfConverter,
      makePerf({
        records: [
          workloadMapping,
          sampleRecord({
            callchain: [CONTEXT_USER, 0x40_12_34, 0x40_56_78],
            period: 1_000_000,
          }),
          sampleRecord({
            callchain: [CONTEXT_USER, 0x40_12_34, 0x40_56_78],
            period: 1_000_000,
          }),
        ],
      }),
      options(),
    )

    expect(profileTitles(md)).toEqual([`CPU profile`])
    expect(summaryLines(md)).toEqual([
      `Took 2.0ms over 2 samples (1.0ms per sample).`,
    ])
    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `2.0ms`,
          Samples: `2`,
          Function: `0x1234`,
          Location: `src/workload`,
        },
      ],
    ])
    expect(totalTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `2.0ms`,
          Samples: `2`,
          Function: `0x1234`,
          Location: `src/workload`,
        },
        {
          '%': `100.0%`,
          Time: `2.0ms`,
          Samples: `2`,
          Function: `0x5678`,
          Location: `src/workload`,
        },
      ],
    ])
  })

  test(`a mapping recorded after the samples it explains still resolves them`, () => {
    // The kernel fills a buffer per CPU and perf writes them one after
    // another, so a mapping can trail the samples that fall in it.
    const md = convertBytesToMd(
      perfConverter,
      makePerf({
        records: [
          sampleRecord({ callchain: [CONTEXT_USER, 0x40_12_34] }),
          workloadMapping,
        ],
      }),
      options(),
    )

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `1.0ms`,
          Samples: `1`,
          Function: `0x1234`,
          Location: `src/workload`,
        },
      ],
    ])
  })

  test(`mappings from before an execve don't resolve the new program's addresses`, () => {
    const md = convertBytesToMd(
      perfConverter,
      makePerf({
        records: [
          mmapRecord({
            start: 0x40_00_00,
            length: 0x1_00_00,
            path: `/bin/before-exec`,
            time: 1,
          }),
          commRecord({ exec: true, time: 2 }),
          sampleRecord({ callchain: [CONTEXT_USER, 0x40_12_34], time: 3 }),
        ],
      }),
      options(),
    )

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `1.0ms`,
          Samples: `1`,
          Function: `0x401234`,
          Location: `<unknown>`,
        },
      ],
    ])
  })

  test(`the kernel, a system library, and an unmapped address categorize`, () => {
    const md = convertBytesToMd(
      perfConverter,
      makePerf({
        records: [
          workloadMapping,
          libcMapping,
          mmapRecord({
            start: 0x10_00_00_00,
            length: 0x1_00_00_00,
            pageOffset: 0x10_00_00_00,
            path: `[kernel.kallsyms]_stext`,
            misc: KERNEL_MISC,
          }),
          sampleRecord({ callchain: [CONTEXT_USER, 0x40_12_34] }),
          sampleRecord({ callchain: [CONTEXT_USER, 0x7f_20_00] }),
          sampleRecord({
            misc: KERNEL_MISC,
            callchain: [
              CONTEXT_KERNEL,
              0x10_00_10_00,
              CONTEXT_USER,
              0x40_12_34,
            ],
          }),
          sampleRecord({ callchain: [CONTEXT_USER, 0xde_ad_00_00] }),
        ],
      }),
      options(),
    )

    expect(categoryTables(md)).toEqual([
      [
        { Category: `Ours`, '%': `25.0%`, Time: `1.0ms`, Samples: `1` },
        { Category: `Native`, '%': `25.0%`, Time: `1.0ms`, Samples: `1` },
        { Category: `Kernel`, '%': `25.0%`, Time: `1.0ms`, Samples: `1` },
        { Category: `Unknown`, '%': `25.0%`, Time: `1.0ms`, Samples: `1` },
      ],
    ])
  })

  test(`each recorded event becomes its own profile, measured in its own units`, () => {
    // The clock event's period counts nanoseconds; the fault event's counts
    // faults.
    const cpuClock = {
      config: 0,
      ids: [1],
      sampleType: MULTI_EVENT_SAMPLE_TYPE,
    }
    const pageFaults = {
      config: 2,
      ids: [2],
      sampleType: MULTI_EVENT_SAMPLE_TYPE,
    }

    const md = convertBytesToMd(
      perfConverter,
      makePerf({
        events: [cpuClock, pageFaults],
        features: [
          eventDescFeature([
            { name: `cpu-clock`, ids: [1] },
            { name: `page-faults`, ids: [2] },
          ]),
        ],
        records: [
          mmapRecord({
            start: 0x40_00_00,
            length: 0x1_00_00,
            path: `/src/workload`,
            id: 1,
          }),
          sampleRecord({ id: 1, period: 2_000_000, callchain: [0x40_12_34] }),
          sampleRecord({ id: 2, period: 7, callchain: [0x40_12_34] }),
        ],
      }),
      options(),
    )

    expect(profileTitles(md)).toEqual([`CPU profile`, `Page fault profile`])
    expect(summaryLines(md)).toEqual([
      `Took 2.0ms over 1 sample (2.0ms per sample).`,
      `Recorded 7 page faults over 1 sample (7 page faults per sample).`,
    ])
  })

  test(`a mapping made later covers what an earlier one had of its range`, () => {
    // A region is unmapped and a larger library mapped over where it was. The
    // kernel reports no unmapping, so only the later mapping's time states
    // which one an address in the overlap belongs to.
    const md = convertBytesToMd(
      perfConverter,
      makePerf({
        records: [
          mmapRecord({
            start: 0x40_00_00,
            length: 0x1_00_00,
            path: `/src/gone`,
            time: 1,
          }),
          mmapRecord({
            start: 0x3f_f0_00,
            length: 0x3_00_00,
            path: `/usr/lib/libnew.so`,
            time: 2,
          }),
          sampleRecord({ callchain: [CONTEXT_USER, 0x40_10_00], time: 3 }),
        ],
      }),
      options(),
    )

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `1.0ms`,
          Samples: `1`,
          Function: `0x2000`,
          Location: `usr/lib/libnew.so`,
        },
      ],
    ])
  })

  test(`a sample resolves against the mappings its process had when it was taken`, () => {
    // The process maps one program, execs another over the same addresses,
    // and is sampled once under each. The later exec is written first, as a
    // record from another CPU's buffer would be.
    const md = convertBytesToMd(
      perfConverter,
      makePerf({
        records: [
          commRecord({ exec: true, time: 4 }),
          mmapRecord({
            start: 0x40_00_00,
            length: 0x1_00_00,
            path: `/bin/first`,
            time: 1,
          }),
          commRecord({ exec: true, time: 2 }),
          mmapRecord({
            start: 0x40_00_00,
            length: 0x1_00_00,
            path: `/bin/second`,
            time: 3,
          }),
          mmapRecord({
            start: 0x40_00_00,
            length: 0x1_00_00,
            path: `/bin/third`,
            time: 5,
          }),
          sampleRecord({ callchain: [CONTEXT_USER, 0x40_12_34], time: 1 }),
          sampleRecord({ callchain: [CONTEXT_USER, 0x40_12_34], time: 3 }),
          sampleRecord({ callchain: [CONTEXT_USER, 0x40_12_34], time: 6 }),
        ],
      }),
      options(),
    )

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `33.3%`,
          Time: `1.0ms`,
          Samples: `1`,
          Function: `0x1234`,
          Location: `bin/first`,
        },
        {
          '%': `33.3%`,
          Time: `1.0ms`,
          Samples: `1`,
          Function: `0x1234`,
          Location: `bin/second`,
        },
        {
          '%': `33.3%`,
          Time: `1.0ms`,
          Samples: `1`,
          Function: `0x1234`,
          Location: `bin/third`,
        },
      ],
    ])
  })

  test(`a forked process inherits the mappings its parent had when it forked`, () => {
    // The kernel reports the parent's mappings and the fork, and nothing about
    // the child's copy of the address space. A grandchild inherits through its
    // parent, and a fork perf synthesized for an already-running process
    // inherits nothing, since that process's own mappings follow it.
    const md = convertBytesToMd(
      perfConverter,
      makePerf({
        records: [
          workloadMapping,
          mmapRecord({
            pid: 1,
            start: 0x50_00_00,
            length: 0x1_00_00,
            path: `/src/after-fork`,
            time: 5,
          }),
          forkRecord({ pid: 2, parentPid: 1, time: 2 }),
          forkRecord({ pid: 3, parentPid: 2, time: 3 }),
          forkRecord({ pid: 4, parentPid: 1, time: 0, synthesized: true }),
          sampleRecord({
            pid: 2,
            callchain: [CONTEXT_USER, 0x40_12_34],
            time: 6,
          }),
          sampleRecord({
            pid: 2,
            callchain: [CONTEXT_USER, 0x50_12_34],
            time: 6,
          }),
          sampleRecord({
            pid: 3,
            callchain: [CONTEXT_USER, 0x40_12_34],
            time: 6,
          }),
          sampleRecord({
            pid: 4,
            callchain: [CONTEXT_USER, 0x40_12_34],
            time: 6,
          }),
        ],
      }),
      options(),
    )

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `50.0%`,
          Time: `2.0ms`,
          Samples: `2`,
          Function: `0x1234`,
          Location: `src/workload`,
        },
        {
          '%': `25.0%`,
          Time: `1.0ms`,
          Samples: `1`,
          Function: `0x501234`,
          Location: `<unknown>`,
        },
        {
          '%': `25.0%`,
          Time: `1.0ms`,
          Samples: `1`,
          Function: `0x401234`,
          Location: `<unknown>`,
        },
      ],
    ])
  })

  test(`a kernel address is named by its offset from the start of the kernel`, () => {
    // Perf maps the kernel at the address it booted to and states that same
    // address as the file offset, so the offset from the mapping's start is
    // what stays the same across boots.
    const md = convertBytesToMd(
      perfConverter,
      makePerf({
        records: [
          mmapRecord({
            start: 0x10_00_00_00,
            length: 0x1_00_00_00,
            pageOffset: 0x10_00_00_00,
            path: `[kernel.kallsyms]_text`,
            misc: KERNEL_MISC,
          }),
          sampleRecord({
            misc: KERNEL_MISC,
            callchain: [CONTEXT_KERNEL, 0x10_00_10_00],
          }),
        ],
      }),
      options(),
    )

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `1.0ms`,
          Samples: `1`,
          Function: `0x1000`,
          Location: `[kernel.kallsyms]`,
        },
      ],
    ])
  })

  test(`an address at the end of a kernel mapping resolves to it`, () => {
    // Above 2^53 a number holds every 2048th address, so an address in a
    // mapping's last kilobyte rounds up to its end when compared as one.
    const md = convertBytesToMd(
      perfConverter,
      makePerf({
        records: [
          mmapRecord({
            start: [0xff_ff_80_00, 0x7a_3c_00_00],
            length: 0x1_d0_00,
            path: `[fakeowner]`,
            misc: KERNEL_MISC,
          }),
          sampleRecord({
            misc: KERNEL_MISC,
            callchain: [CONTEXT_KERNEL, [0xff_ff_80_00, 0x7a_3d_cf_f8]],
          }),
        ],
      }),
      options(),
    )

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `1.0ms`,
          Samples: `1`,
          Function: `0x1cff8`,
          Location: `[fakeowner]`,
        },
      ],
    ])
  })

  test(`a sample whose call chain resolved to no frame keeps its executing address`, () => {
    const md = convertBytesToMd(
      perfConverter,
      makePerf({
        records: [
          workloadMapping,
          sampleRecord({ ip: 0x40_12_34, callchain: [] }),
          sampleRecord({ ip: 0x40_12_34, callchain: [CONTEXT_USER] }),
        ],
      }),
      options(),
    )

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `2.0ms`,
          Samples: `2`,
          Function: `0x1234`,
          Location: `src/workload`,
        },
      ],
    ])
  })

  test(`a kernel module is kernel code, whether or not its file was found`, () => {
    const md = convertBytesToMd(
      perfConverter,
      makePerf({
        records: [
          mmapRecord({
            start: 0x10_00_00_00,
            length: 0x1_00_00,
            path: `/lib/modules/6.8.0/kernel/fs/ext4/ext4.ko.zst`,
            misc: KERNEL_MISC,
          }),
          mmapRecord({
            start: 0x10_01_00_00,
            length: 0x1_00_00,
            path: `[shiftfs]`,
            misc: KERNEL_MISC,
          }),
          sampleRecord({
            misc: KERNEL_MISC,
            callchain: [CONTEXT_KERNEL, 0x10_00_10_00],
          }),
          sampleRecord({
            misc: KERNEL_MISC,
            callchain: [CONTEXT_KERNEL, 0x10_01_10_00],
          }),
        ],
      }),
      options(),
    )

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `50.0%`,
          Time: `1.0ms`,
          Samples: `1`,
          Function: `0x1000`,
          Location: `lib/modules/6.8.0/kernel/fs/ext4/ext4.ko.zst`,
        },
        {
          '%': `50.0%`,
          Time: `1.0ms`,
          Samples: `1`,
          Function: `0x1000`,
          Location: `[shiftfs]`,
        },
      ],
    ])
    expect(categoryTables(md)).toEqual([
      [{ Category: `Kernel`, '%': `100.0%`, Time: `2.0ms`, Samples: `2` }],
    ])
  })

  test(`a hardware event on a hybrid CPU is named by its low bits`, () => {
    const md = convertBytesToMd(
      perfConverter,
      makePerf({
        events: [
          {
            type: 0,
            config: 0x4_00_00_00_00,
            freq: false,
            samplePeriod: 1000,
          },
        ],
        records: [
          workloadMapping,
          sampleRecord({ period: 1000, callchain: [0x40_12_34] }),
        ],
      }),
      options(),
    )

    expect(profileTitles(md)).toEqual([`CPU cycles profile`])
    expect(summaryLines(md)).toEqual([
      `Recorded 1,000 cycles over 1 sample (1,000 cycles per sample).`,
    ])
  })

  test(`an address in anonymous memory is jit code`, () => {
    const md = convertBytesToMd(
      perfConverter,
      makePerf({
        records: [
          mmapRecord({ start: 0x7f_00_00, length: 0x1_00_00, path: `//anon` }),
          sampleRecord({ callchain: [CONTEXT_USER, 0x7f_10_00] }),
        ],
      }),
      options(),
    )

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `1.0ms`,
          Samples: `1`,
          Function: `0x1000`,
          Location: `//anon`,
        },
      ],
    ])
    expect(categoryTables(md)).toEqual([
      [{ Category: `JIT`, '%': `100.0%`, Time: `1.0ms`, Samples: `1` }],
    ])
  })

  test(`events laying their samples out differently each read with their own layout`, () => {
    // The fault event's samples carry the CPU that took them; the clock
    // event's don't. Their ids sit at the same position, as perf requires of
    // events recorded together.
    const md = convertBytesToMd(
      perfConverter,
      makePerf({
        events: [
          { config: 0, ids: [1], sampleType: MULTI_EVENT_SAMPLE_TYPE },
          { config: 2, ids: [2], sampleType: MULTI_EVENT_CPU_SAMPLE_TYPE },
        ],
        features: [
          eventDescFeature([
            { name: `cpu-clock`, ids: [1] },
            { name: `page-faults`, ids: [2] },
          ]),
        ],
        records: [
          mmapRecord({
            start: 0x40_00_00,
            length: 0x1_00_00,
            path: `/src/workload`,
            id: 1,
          }),
          sampleRecord({ id: 1, period: 2_000_000, callchain: [0x40_12_34] }),
          sampleRecord({ id: 2, cpu: 3, period: 7, callchain: [0x40_12_34] }),
        ],
      }),
      options(),
    )

    expect(summaryLines(md)).toEqual([
      `Took 2.0ms over 1 sample (2.0ms per sample).`,
      `Recorded 7 page faults over 1 sample (7 page faults per sample).`,
    ])
  })

  test(`an event's PMU and modifiers don't change what it measures`, () => {
    const md = convertBytesToMd(
      perfConverter,
      makePerf({
        events: [{ type: 0, config: 0, freq: false, samplePeriod: 1000 }],
        features: [eventDescFeature([{ name: `cpu_core/cycles/P`, ids: [] }])],
        records: [
          workloadMapping,
          sampleRecord({ period: 1000, callchain: [0x40_12_34] }),
        ],
      }),
      options(),
    )

    expect(profileTitles(md)).toEqual([`CPU cycles profile`])
    expect(summaryLines(md)).toEqual([
      `Recorded 1,000 cycles over 1 sample (1,000 cycles per sample).`,
    ])
  })

  test(`a tracepoint keeps the event name after its subsystem's colon`, () => {
    const md = convertBytesToMd(
      perfConverter,
      makePerf({
        events: [{ type: 2, config: 1234, freq: false, samplePeriod: 1 }],
        features: [eventDescFeature([{ name: `kmem:kmalloc`, ids: [] }])],
        records: [
          workloadMapping,
          sampleRecord({ period: 1, callchain: [0x40_12_34] }),
        ],
      }),
      options(),
    )

    expect(profileTitles(md)).toEqual([`Kmem:kmalloc profile`])
  })

  test(`the streaming parse reads what the whole-file parse does`, async () => {
    const bytes = makePerf({
      records: [workloadMapping, sampleRecord({ callchain: [0x40_12_34] })],
    })

    expect(
      await convertToMdAsync(
        perfConverter,
        streamOf(...chunk(bytes, 7)),
        options(),
      ),
    ).toBe(convertBytesToMd(perfConverter, bytes, options()))
  })
})

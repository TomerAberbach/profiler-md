import { readdirSync, readFileSync } from 'node:fs'
import { brotliCompressSync, gzipSync } from 'node:zlib'
import { describe, expect, test, vi } from 'vitest'
import { projects } from '../../vitest.config.ts'
import { ProfilerMdError } from '../error.ts'
import { asLz4Frame } from '../helpers/testing.ts'
import { sourceReferenceId } from '../location.ts'
import type { CallStackProfile } from '../modalities/call-stack-profile/index.ts'
import {
  selfSamplesTables,
  selfTimeTables,
} from '../modalities/call-stack-profile/testing.ts'
import { SAMPLES } from '../modalities/metrics.ts'
import { normalizeProfileToMdOptions } from '../options.ts'
import type { ProfileToMdOptions } from '../options.ts'
import {
  categoryTables,
  expectLogs,
  profileTitles,
  rankingTables,
} from '../testing.ts'
import { FormatDetectError, mayBeParserBug } from './error.ts'
import {
  diffProfiles,
  formats,
  profileToMd,
  profileToMdAsync,
} from './index.ts'
import type { JsonFormatSpec } from './spec.ts'
import { convertJsonToMd, inputPath, readInput } from './testing.ts'
import {
  crashingV8CpuProfile,
  lazilyCrashingV8CpuProfile,
  makeV8CallFrame,
  makeV8CpuProfileRoot,
} from './v8/cpu-profile/testing.ts'
import {
  EDGE_TYPE_HIDDEN,
  makeV8Edge,
  makeV8Node,
  makeV8Snapshot,
  NODE_TYPE_OBJECT,
  NODE_TYPE_SYNTHETIC,
} from './v8/heap-snapshot/testing.ts'

vi.setConfig({ testTimeout: 125_000 })

// A valid Speedscope file that carries no profiles, so it aggregates to nothing.
const emptyProfile = JSON.stringify({
  $schema: `https://www.speedscope.app/file-format-schema.json`,
  shared: { frames: [] },
  profiles: [],
})

// A duplicate ID would overwrite the earlier format spec in the registry's map
// without a type error, and detection runs the format specs in list order.
test(`registered format specs have distinct IDs in sorted order`, () => {
  expect(formats).toStrictEqual([...new Set(formats)].sort())
})

describe(`input projects`, () => {
  // Partitioning a format's inputs across projects could otherwise drop one
  // silently, since no project can tell what the others hold.
  test(`cover every committed input exactly once`, () => {
    const projectInputs = projects.flatMap(project =>
      `provide` in project.test ? project.test.provide.inputs : [],
    )

    expect(projectInputs.sort()).toStrictEqual(readdirSync(inputPath()).sort())
  })
})

// The pipeline strips an input's compression before detection, so these run
// on a profile of no particular format: a speedscope file with no profiles,
// which converts to the no-data message.
describe(`compressed inputs`, () => {
  const bytes = new TextEncoder().encode(emptyProfile)
  const gzipped = new Uint8Array(gzipSync(bytes))
  const brotlied = new Uint8Array(brotliCompressSync(bytes))
  const lz4ed = asLz4Frame(bytes)
  const NO_DATA = `No profiles were recorded.\n`
  const CODECS: [string, Uint8Array][] = [
    [`gzip`, gzipped],
    [`brotli`, brotlied],
    [`LZ4`, lz4ed],
  ]
  /** A decoding attempt identifies brotli, and it consumes a stream. */
  const MAGIC_CODECS = CODECS.filter(([name]) => name !== `brotli`)

  test.each(CODECS)(`profileToMd detects a %s input`, (_, compressed) => {
    expect(profileToMd(compressed)).toBe(NO_DATA)
    expect(
      profileToMd([compressed.subarray(0, 9), compressed.subarray(9)]),
    ).toBe(NO_DATA)
  })

  test.each(CODECS)(
    `profileToMd converts a %s input of a specified format`,
    (_, compressed) => {
      expect(profileToMd({ data: compressed, format: `speedscope` })).toBe(
        NO_DATA,
      )
    },
  )

  test.each(CODECS)(
    `profileToMdAsync detects a %s input`,
    async (_, compressed) => {
      await expect(profileToMdAsync(new Blob([compressed]))).resolves.toBe(
        NO_DATA,
      )
      await expect(
        profileToMdAsync(new Blob([compressed]).stream()),
      ).resolves.toBe(NO_DATA)
    },
  )

  test.each(MAGIC_CODECS)(
    `profileToMdAsync converts a %s input of a specified format`,
    async (_, compressed) => {
      await expect(
        profileToMdAsync({
          data: new Blob([compressed]),
          format: `speedscope`,
        }),
      ).resolves.toBe(NO_DATA)
      await expect(
        profileToMdAsync({
          data: new Blob([compressed]).stream(),
          format: `speedscope`,
        }),
      ).resolves.toBe(NO_DATA)
    },
  )

  // Brotli has no magic bytes, so the pipeline tries it only once the bytes
  // fail as they are. That first attempt consumes a stream.
  test(`profileToMdAsync tries brotli on a blob of a specified format, not a stream`, async () => {
    await expect(
      profileToMdAsync({
        data: new Blob([brotlied]),
        format: `speedscope`,
      }),
    ).resolves.toBe(NO_DATA)
    await expect(
      profileToMdAsync({
        data: new Blob([brotlied]).stream(),
        format: `speedscope`,
      }),
    ).rejects.toThrow(`speedscope: invalid JSON`)
  })

  test(`reports the original failure when brotli is not the answer either`, () => {
    expect(() => profileToMd(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]))).toThrow(
      FormatDetectError,
    )
  })

  test(`reports a corrupt compressed input as the caller's`, () => {
    expect(() => profileToMd(gzipped.subarray(0, 20))).toThrow(
      `cannot decompress the gzip input`,
    )
    expect(() => profileToMd(lz4ed.subarray(0, 12))).toThrow(
      `cannot decompress the LZ4 input`,
    )
  })
})

describe(`named inputs`, () => {
  const unusable = `{"nodes": [`

  test(`report their name with a failure they cause`, () => {
    expect(() =>
      profileToMd({ data: unusable, name: `example.cpuprofile` }),
    ).toThrow(/^example\.cpuprofile: /u)
  })

  test.each([
    [`base`, 0],
    [`current`, 1],
  ])(`name the %s side of a diff`, (name, index) => {
    const sides = [emptyProfile, emptyProfile]
    sides[index] = unusable

    expect(() =>
      diffProfiles(
        { data: sides[0]!, name: `base.cpuprofile` },
        { data: sides[1]!, name: `current.cpuprofile` },
      ),
    ).toThrow(new RegExp(String.raw`^${name}\.cpuprofile: `, `u`))
  })

  test(`leave an unnamed input's failure alone`, () => {
    expect(() => profileToMd(unusable)).toThrow(
      /^could not detect the profile format, /u,
    )
  })
})

const SPEEDSCOPE_REJECTION_LOG = `debug: speedscope recognized the input but rejected it: Cannot read properties of undefined (reading 'map')`
const V8_CPU_PROFILE_REJECTION_LOG = `debug: v8-cpu-profile recognized the input but rejected it: Cannot destructure property 'functionName' of 'callFrame' as it is null.`
const V8_CPU_PROFILE_CANDIDATES_LOG = `debug: origin candidates, in priority order: deno, bun, node, chrome`
const NODE_ORIGIN_LOGS = [
  `info: detected origin: node`,
  `debug: node is marked by the entry post in node:inspector`,
]
const CHROME_ORIGIN_LOGS = [
  `info: fallback origin: chrome`,
  `debug: no entry marked another origin`,
]
const V8_CPU_PROFILE_DIFF_LOGS = [
  `info: specified format: v8-cpu-profile`,
  V8_CPU_PROFILE_CANDIDATES_LOG,
  ...NODE_ORIGIN_LOGS,
  `info: specified format: v8-cpu-profile`,
  V8_CPU_PROFILE_CANDIDATES_LOG,
  `info: detected origin: deno`,
  `debug: deno is marked by the entry __drainNextTickAndMacrotasks in ext:core/01_core.js`,
]

// Some real captures have no samples (e.g. a lock profile that saw no
// contention), so the pipeline yields the no-data message instead of a heading.

describe(`profileToMd`, () => {
  test(`forced format produces same output as auto-detect`, () => {
    const content = readFileSync(inputPath(`javascript.node.base.cpuprofile`))

    const auto = profileToMd(content.toString(`utf8`), { baseURL: null })
    const forced = profileToMd(
      { data: content.toString(`utf8`), format: `v8-cpu-profile` },
      { baseURL: null },
    )

    expect(forced).toBe(auto)
    expectLogs([
      `info: detected format: v8-cpu-profile`,
      V8_CPU_PROFILE_CANDIDATES_LOG,
      ...NODE_ORIGIN_LOGS,
      `info: specified format: v8-cpu-profile`,
      V8_CPU_PROFILE_CANDIDATES_LOG,
      ...NODE_ORIGIN_LOGS,
    ])
  })

  test(`baseURL: 'auto' infers the common ancestor of ours locations`, () => {
    // `funcA` and `funcB` span the project; the dependency and builtin frames
    // are not `ours`, so they don't move the inferred base up towards the
    // root.
    const cpuProfile = JSON.stringify({
      nodes: [
        makeV8CpuProfileRoot([2, 3]),
        {
          id: 2,
          hitCount: 5,
          callFrame: makeV8CallFrame(
            `funcA`,
            `file:///home/user/project/src/a.ts`,
          ),
          children: [4, 5],
        },
        {
          id: 3,
          hitCount: 3,
          callFrame: makeV8CallFrame(
            `funcB`,
            `file:///home/user/project/lib/b.ts`,
          ),
        },
        {
          id: 4,
          hitCount: 2,
          callFrame: makeV8CallFrame(
            `depFn`,
            `file:///opt/homebrew/lib/node_modules/dep/index.js`,
          ),
        },
        {
          id: 5,
          hitCount: 1,
          callFrame: makeV8CallFrame(`readFileSync`, `node:fs`),
        },
      ],
      samples: [2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5],
      timeDeltas: Array.from({ length: 11 }, () => 20),
    })

    const md = profileToMd(
      { data: cpuProfile, format: `v8-cpu-profile` },
      { baseURL: `auto` },
    )

    // `ours` paths are relative to the inferred `/home/user/project/`; the
    // dependency path goes up more than two levels from it, so it stays
    // absolute, and the builtin location is unchanged.
    expect(selfTimeTables(md)).toStrictEqual([
      [
        {
          '%': `45.5%`,
          Time: `0.1ms`,
          Samples: `5`,
          Function: `funcA`,
          Location: `./src/a.ts:1:1`,
        },
        {
          '%': `27.3%`,
          Time: `0.1ms`,
          Samples: `3`,
          Function: `funcB`,
          Location: `./lib/b.ts:1:1`,
        },
        {
          '%': `18.2%`,
          Time: `40.0µs`,
          Samples: `2`,
          Function: `depFn`,
          Location: `/opt/homebrew/lib/node_modules/dep/index.js:1:1`,
        },
        {
          '%': `9.1%`,
          Time: `20.0µs`,
          Samples: `1`,
          Function: `readFileSync`,
          Location: `node:fs:1:1`,
        },
      ],
    ])
  })

  test(`baseURL: 'auto' falls back to absolute paths when no location qualifies`, () => {
    // The only `ours` location is a relative path and the builtin's `node:`
    // URL has no hierarchical path, so nothing qualifies for inference.
    const cpuProfile = JSON.stringify({
      nodes: [
        makeV8CpuProfileRoot([2]),
        {
          id: 2,
          hitCount: 3,
          callFrame: makeV8CallFrame(`handler`, `src/app.js`),
          children: [3],
        },
        {
          id: 3,
          hitCount: 1,
          callFrame: makeV8CallFrame(`readFileSync`, `node:fs`),
        },
      ],
      samples: [2, 2, 2, 3],
      timeDeltas: Array.from({ length: 4 }, () => 20),
    })

    const md = profileToMd(
      { data: cpuProfile, format: `v8-cpu-profile` },
      { baseURL: `auto` },
    )

    expect(selfTimeTables(md)).toStrictEqual([
      [
        {
          '%': `75.0%`,
          Time: `0.1ms`,
          Samples: `3`,
          Function: `handler`,
          Location: `src/app.js:1:1`,
        },
        {
          '%': `25.0%`,
          Time: `20.0µs`,
          Samples: `1`,
          Function: `readFileSync`,
          Location: `node:fs:1:1`,
        },
      ],
    ])
    expectLogs([
      `info: specified format: v8-cpu-profile`,
      V8_CPU_PROFILE_CANDIDATES_LOG,
      `info: detected origin: node`,
      `debug: node is marked by the entry readFileSync in node:fs`,
      `warn: baseURL "auto" inferred no directory because no location is an absolute path or a URL in a directory`,
    ])
  })

  test(`baseURL: 'auto' infers the common ancestor of HTTP locations`, () => {
    // Both scripts live on one HTTPS origin and differ only by query string,
    // so the inferred base relativizes them while keeping the queries.
    const cpuProfile = JSON.stringify({
      nodes: [
        makeV8CpuProfileRoot([2, 3]),
        {
          id: 2,
          hitCount: 3,
          callFrame: makeV8CallFrame(
            `startup`,
            `https://en.wikipedia.org/w/load.php?modules=startup`,
          ),
        },
        {
          id: 3,
          hitCount: 1,
          callFrame: makeV8CallFrame(
            `cookie`,
            `https://en.wikipedia.org/w/load.php?modules=mediawiki.cookie`,
          ),
        },
      ],
      samples: [2, 2, 2, 3],
      timeDeltas: Array.from({ length: 4 }, () => 20),
    })

    const md = profileToMd(
      { data: cpuProfile, format: `v8-cpu-profile` },
      { baseURL: `auto` },
    )

    expect(selfTimeTables(md)).toStrictEqual([
      [
        {
          '%': `75.0%`,
          Time: `0.1ms`,
          Samples: `3`,
          Function: `startup`,
          Location: `./load.php?modules=startup:1:1`,
        },
        {
          '%': `25.0%`,
          Time: `20.0µs`,
          Samples: `1`,
          Function: `cookie`,
          Location: `./load.php?modules=mediawiki.cookie:1:1`,
        },
      ],
    ])
  })

  test(`baseURL: 'auto' infers the dominant file: base despite a lone HTTP location`, () => {
    // Two of the three absolute locations are file: URLs, so the file: group
    // dominates and the lone HTTP location stays absolute.
    const cpuProfile = JSON.stringify({
      nodes: [
        makeV8CpuProfileRoot([2, 3, 4]),
        {
          id: 2,
          hitCount: 5,
          callFrame: makeV8CallFrame(
            `funcA`,
            `file:///home/user/project/src/a.ts`,
          ),
        },
        {
          id: 3,
          hitCount: 3,
          callFrame: makeV8CallFrame(
            `funcB`,
            `file:///home/user/project/lib/b.ts`,
          ),
        },
        {
          id: 4,
          hitCount: 2,
          callFrame: makeV8CallFrame(
            `remoteFn`,
            `https://cdn.example.com/lib.js`,
          ),
        },
      ],
      samples: [2, 2, 2, 2, 2, 3, 3, 3, 4, 4],
      timeDeltas: Array.from({ length: 10 }, () => 20),
    })

    const md = profileToMd(
      { data: cpuProfile, format: `v8-cpu-profile` },
      { baseURL: `auto` },
    )

    expect(selfTimeTables(md)).toStrictEqual([
      [
        {
          '%': `50.0%`,
          Time: `0.1ms`,
          Samples: `5`,
          Function: `funcA`,
          Location: `./src/a.ts:1:1`,
        },
        {
          '%': `30.0%`,
          Time: `0.1ms`,
          Samples: `3`,
          Function: `funcB`,
          Location: `./lib/b.ts:1:1`,
        },
        {
          '%': `20.0%`,
          Time: `40.0µs`,
          Samples: `2`,
          Function: `remoteFn`,
          Location: `https://cdn.example.com/lib.js:1:1`,
        },
      ],
    ])
  })

  test(`baseURL: 'auto' infers the common ancestor from source-mapped locations`, () => {
    // The only `ours` location is a generated bundle whose source map points
    // into src/. Inference must follow the map like formatting does: a base
    // inferred from the raw dist/ path would show the mapped source as
    // `../src/foo.ts`.
    const cpuProfile = JSON.stringify({
      nodes: [
        makeV8CpuProfileRoot([2]),
        {
          id: 2,
          hitCount: 5,
          callFrame: makeV8CallFrame(
            `funcA`,
            `file:///home/user/project/dist/bundle.js`,
          ),
        },
      ],
      samples: [2, 2, 2, 2, 2],
      timeDeltas: Array.from({ length: 5 }, () => 20),
    })
    const sourceMaps = {
      'file:///home/user/project/dist/bundle.js': {
        version: `3`,
        sources: [`/home/user/project/src/foo.ts`],
        names: [],
        // Maps generated line 1 col 0 -> sources[0] line 1 col 0 (0-based).
        mappings: `AAAA`,
      },
    }

    const md = profileToMd(
      { data: cpuProfile, format: `v8-cpu-profile` },
      { baseURL: `auto`, sourceMaps },
    )

    expect(selfTimeTables(md)).toStrictEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.1ms`,
          Samples: `5`,
          Function: `funcA`,
          Location: `./foo.ts:1:1`,
        },
      ],
    ])
  })

  test(`states the base URL`, () => {
    const md = profileToMd(baseCpuProfile, { baseURL: `/project` })

    expect(md).toContain(
      `Paths starting with \`./\` or \`../\` are relative to \`/project/\`.`,
    )
  })

  test(`omits the base URL when there is none`, () => {
    const md = profileToMd(baseCpuProfile, { baseURL: null })

    expect(md).not.toContain(`are relative to`)
  })

  test(`reports when there is no profiling data`, () => {
    const md = profileToMd(emptyProfile, { baseURL: null })

    expect(md).toBe(`No profiles were recorded.\n`)
  })

  test(`throws on unknown data`, () => {
    expect(() => profileToMd(`{}`)).toThrow(/could not detect/iu)
  })

  test(`throws unified error on non-JSON string`, () => {
    expect(() => profileToMd(`this is not a profile`)).toThrow(
      /could not detect/iu,
    )
  })

  test(`detection reports the rejection when one format recognized the input`, () => {
    // Passes Speedscope's cheap `matches` prefilter but fails its `parse`
    // (`shared.frames` is missing), so no other format recognizes it and the
    // rejection is the reported reason.
    const almostSpeedscope = JSON.stringify({
      $schema: `https://www.speedscope.app/file-format-schema.json`,
      shared: {},
      profiles: [],
    })

    expect(() => profileToMd(almostSpeedscope)).toThrow(/^speedscope: /u)
    expectLogs([SPEEDSCOPE_REJECTION_LOG])
  })

  test(`a specified format reports its rejection as that format's`, () => {
    expect(() =>
      profileToMd({ data: `funcA;funcB`, format: `collapsed` }),
    ).toThrow(`collapsed: missing sample count`)
  })

  test(`a specified format reports its rejection as that format's when async`, async () => {
    await expect(
      profileToMdAsync({
        data: new Blob([`funcA;funcB`]),
        format: `collapsed`,
      }),
    ).rejects.toThrow(`collapsed: missing sample count`)
  })

  test(`detection names every format that rejected the input`, () => {
    // Passes Speedscope's and the V8 CPU profile's `matches` prefilters, and
    // fails their parses.
    const almostBoth = JSON.stringify({
      $schema: `https://www.speedscope.app/file-format-schema.json`,
      shared: {},
      profiles: [],
      nodes: [{ id: 1, callFrame: null }],
      samples: [],
      timeDeltas: [1],
    })

    expect(() => profileToMd(almostBoth)).toThrow(
      `could not detect the profile format, rejected by speedscope and v8-cpu-profile`,
    )
    expectLogs([SPEEDSCOPE_REJECTION_LOG, V8_CPU_PROFILE_REJECTION_LOG])
  })

  test(`detection reports a malformed JSON document as invalid JSON`, () => {
    expect(() => profileToMd(`{"nodes": [`)).toThrow(
      `could not detect the profile format, the input reads as JSON but is invalid JSON`,
    )
  })

  test(`a specified JSON format reports invalid JSON as its rejection`, () => {
    expect(() =>
      profileToMd({ data: `garbage\n`, format: `v8-cpu-profile` }),
    ).toThrow(`v8-cpu-profile: invalid JSON`)
  })

  test(`a specified JSON format reports invalid JSON as its rejection when async`, async () => {
    await expect(
      profileToMdAsync({
        data: new Blob([`garbage\n`]),
        format: `v8-cpu-profile`,
      }),
    ).rejects.toThrow(`v8-cpu-profile: invalid JSON`)
  })

  test(`a specified binary format reports its decoder's failure as its rejection`, () => {
    expect(() => profileToMd({ data: `garbage\n`, format: `pprof` })).toThrow(
      `pprof: invalid protobuf encoding`,
    )
  })

  const unclassifiedInputs = [
    {
      scenario: `before parse returns`,
      data: crashingV8CpuProfile,
      // Detection logs the rejection and moves on, so no format is detected.
      detectedLogs: [V8_CPU_PROFILE_REJECTION_LOG],
      specifiedLogs: [`info: specified format: v8-cpu-profile`],
    },
    {
      scenario: `while aggregation consumes the parse's lazy iterable`,
      data: lazilyCrashingV8CpuProfile,
      detectedLogs: [
        `info: detected format: v8-cpu-profile`,
        V8_CPU_PROFILE_CANDIDATES_LOG,
        ...CHROME_ORIGIN_LOGS,
      ],
      specifiedLogs: [
        `info: specified format: v8-cpu-profile`,
        V8_CPU_PROFILE_CANDIDATES_LOG,
        ...CHROME_ORIGIN_LOGS,
      ],
    },
  ]

  test.each(unclassifiedInputs)(
    `a specified format reports an error its parser did not classify as a failure to parse, thrown $scenario`,
    ({ data }) => {
      let thrown
      try {
        profileToMd({ data, format: `v8-cpu-profile` })
      } catch (error: unknown) {
        thrown = error
      }

      expect(thrown).toBeInstanceOf(ProfilerMdError)
      expect((thrown as Error).message).toMatch(
        `v8-cpu-profile: failed to parse the input`,
      )
      expect(mayBeParserBug(thrown)).toBe(true)
    },
  )

  test.each(unclassifiedInputs)(
    `a specified format reports an error its parser did not classify as a failure to parse when async, thrown $scenario`,
    async ({ data }) => {
      let thrown
      try {
        await profileToMdAsync({
          data: new Blob([data]),
          format: `v8-cpu-profile`,
        })
      } catch (error: unknown) {
        thrown = error
      }

      expect(thrown).toBeInstanceOf(ProfilerMdError)
      expect((thrown as Error).message).toMatch(
        `v8-cpu-profile: failed to parse the input`,
      )
      expect(mayBeParserBug(thrown)).toBe(true)
    },
  )

  test.each(unclassifiedInputs)(
    `detection reports an error a parser did not classify the same way a specified format does, thrown $scenario`,
    ({ data, detectedLogs, specifiedLogs }) => {
      let detected
      try {
        profileToMd(data)
      } catch (error: unknown) {
        detected = error
      }
      expectLogs(detectedLogs)
      let specified
      try {
        profileToMd({ data, format: `v8-cpu-profile` })
      } catch (error: unknown) {
        specified = error
      }
      expectLogs(specifiedLogs)

      expect((detected as Error).message).toBe((specified as Error).message)
      expect(mayBeParserBug(detected)).toBe(true)
    },
  )

  test(`a rejection the parser classified is not a possible bug`, () => {
    let thrown
    try {
      profileToMd({ data: `funcA;funcB`, format: `collapsed` })
    } catch (error: unknown) {
      thrown = error
    }

    expect(mayBeParserBug(thrown)).toBe(false)
  })

  test.each([
    { scenario: `under auto-detection`, format: undefined },
    { scenario: `under a specified format`, format: `hprof` as const },
  ])(
    `a rejection's message collapses the whitespace of the value it reports, $scenario`,
    ({ format }) => {
      const data = new TextEncoder().encode(
        `JAVA PROFILE \nfoo\n  1.0\tbar\0${`\0`.repeat(20)}`,
      )

      expect(() => profileToMd(format ? { data, format } : data)).toThrow(
        `hprof: unsupported format name, got: JAVA PROFILE foo 1.0 bar`,
      )
    },
  )

  test(`a specified format's rejection wraps the parser's error as its cause`, () => {
    let thrown
    try {
      profileToMd({ data: crashingV8CpuProfile, format: `v8-cpu-profile` })
    } catch (error: unknown) {
      thrown = error
    }

    expect((thrown as Error).cause).toBeInstanceOf(TypeError)
  })

  describe(`a failure to read the data escapes unwrapped`, () => {
    const readError = new Error(`EIO`)
    function* failingIterable(): Iterable<Uint8Array> {
      yield new TextEncoder().encode(`{`)
      throw readError
    }
    const failingStream = (): ReadableStream<Uint8Array> =>
      new ReadableStream({
        pull: () => {
          throw readError
        },
      })

    const scenarios = [
      { scenario: `under a specified JSON format`, format: `v8-cpu-profile` },
      { scenario: `under a specified binary format`, format: `pprof` },
      { scenario: `under auto-detection`, format: undefined },
    ] as const

    test.each(scenarios)(`from an iterable $scenario`, ({ format }) => {
      let thrown
      try {
        profileToMd({ data: failingIterable(), format })
      } catch (error: unknown) {
        thrown = error
      }

      expect(thrown).toBe(readError)
    })

    test.each(scenarios)(`from a stream $scenario`, async ({ format }) => {
      let thrown
      try {
        await profileToMdAsync({ data: failingStream(), format })
      } catch (error: unknown) {
        thrown = error
      }

      expect(thrown).toBe(readError)
    })
  })

  test(`a detection error contains the error from each format that rejected the input`, () => {
    const almostSpeedscope = JSON.stringify({
      $schema: `https://www.speedscope.app/file-format-schema.json`,
      shared: {},
      profiles: [],
    })

    let thrown
    try {
      profileToMd(almostSpeedscope)
    } catch (error: unknown) {
      thrown = error
    }

    expect(thrown).toBeInstanceOf(FormatDetectError)
    expect((thrown as FormatDetectError).rejections).toHaveLength(1)
    expectLogs([SPEEDSCOPE_REJECTION_LOG])
  })

  test.each([
    `javascript.node.base.cpuprofile`,
    `python.py-spy.cpu.base.collapsed`,
  ])(
    `auto-detection of %s propagates a throwing categorizeFunctions`,
    filename => {
      // An error after a format is detected is no detection miss, so it
      // surfaces instead of becoming an unknown-format error.
      const content = readFileSync(inputPath(filename))

      expect(() =>
        profileToMd(content, {
          baseURL: null,
          categorizeFunctions: () => {
            throw new Error(`categorize failed`)
          },
        }),
      ).toThrow(`categorize failed`)
    },
  )

  test(`throws when categorizeFunctions returns a misaligned array`, () => {
    expect(() =>
      profileToMd(
        { data: baseCpuProfile, format: `v8-cpu-profile` },
        {
          baseURL: null,
          // One fewer category than entries, so the result no longer aligns
          // with the entries by index.
          categorizeFunctions: entries => entries.slice(1).map(() => `ours`),
        },
      ),
    ).toThrow(/one category per entry/u)
  })
})

describe(`profileToMdAsync`, () => {
  test(`forced format works`, async () => {
    const content = readFileSync(inputPath(`javascript.node.base.cpuprofile`))
    const blob = new Blob([content])

    const md = await profileToMdAsync(
      { data: blob, format: `v8-cpu-profile` },
      { baseURL: null },
    )

    expect(md).toMatch(/^# /u)
    expectLogs([
      `info: specified format: v8-cpu-profile`,
      V8_CPU_PROFILE_CANDIDATES_LOG,
      ...NODE_ORIGIN_LOGS,
    ])
  })

  test(`forced binary format streams a ReadableStream through parseAsync`, async () => {
    // The streaming `parseAsync` path must produce the same output as the
    // sync conversion of the same bytes.
    const content = readFileSync(inputPath(`python.py-spy.cpu.base.collapsed`))
    const stream = new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(content)
        controller.close()
      },
    })

    const md = await profileToMdAsync(
      { data: stream, format: `collapsed` },
      { baseURL: null },
    )

    expect(md).toBe(
      profileToMd({ data: content, format: `collapsed` }, { baseURL: null }),
    )
    const logs = [
      `info: specified format: collapsed`,
      `debug: origin candidates, in priority order: py-spy, tachyon, async-profiler, eflambe, nix, rbspy, excimer`,
      `info: detected origin: py-spy`,
      `debug: py-spy is marked by the entry _run_module_as_main (<frozen runpy>:198)`,
    ]
    expectLogs([...logs, ...logs])
  })

  test(`throws on unknown data`, async () => {
    const blob = new Blob([`{}`])

    await expect(profileToMdAsync(blob)).rejects.toThrow(/could not detect/iu)
  })
})

// Root -> funcA (5 samples), funcB (3 samples), each sample 20µs.
const baseCpuProfile = JSON.stringify({
  nodes: [
    makeV8CpuProfileRoot([2, 3]),
    {
      id: 2,
      hitCount: 5,
      callFrame: makeV8CallFrame(`funcA`, `file:///project/src/a.ts`),
    },
    {
      id: 3,
      hitCount: 3,
      callFrame: makeV8CallFrame(`funcB`, `file:///project/src/b.ts`),
    },
  ],
  samples: [2, 2, 2, 2, 2, 3, 3, 3],
  timeDeltas: Array.from({ length: 8 }, () => 20),
})

// Root -> funcA (now 10 samples), funcC (new, 2 samples), each sample 20µs.
const currentCpuProfile = JSON.stringify({
  nodes: [
    makeV8CpuProfileRoot([2, 3]),
    {
      id: 2,
      hitCount: 10,
      callFrame: makeV8CallFrame(`funcA`, `file:///project/src/a.ts`),
    },
    {
      id: 3,
      hitCount: 2,
      callFrame: makeV8CallFrame(`funcC`, `file:///project/src/c.ts`),
    },
  ],
  samples: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3],
  timeDeltas: Array.from({ length: 12 }, () => 20),
})

// Root -> Grew (1 instance, 100 B), Removed (1 instance, 50 B).
const baseHeapSnapshot = JSON.stringify(
  makeV8Snapshot({
    nodeCount: 3,
    edgeCount: 2,
    nodes: [
      ...makeV8Node({
        type: NODE_TYPE_SYNTHETIC,
        name: 0,
        id: 1,
        selfSize: 0,
        edgeCount: 2,
      }), // Root
      ...makeV8Node({
        type: NODE_TYPE_OBJECT,
        name: 1,
        id: 3,
        selfSize: 100,
        edgeCount: 0,
      }), // `Grew`
      ...makeV8Node({
        type: NODE_TYPE_OBJECT,
        name: 2,
        id: 5,
        selfSize: 50,
        edgeCount: 0,
      }), // `Removed`
    ],
    edges: [
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 6 }), // Root -> `Grew` (flat 6)
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 12 }), // Root -> `Removed` (flat 12)
    ],
    strings: [``, `Grew`, `Removed`],
  }),
)

// Root -> Grew (now 2 instances, 300 B total), Added (new, 1 instance, 30 B).
const currentHeapSnapshot = JSON.stringify(
  makeV8Snapshot({
    nodeCount: 4,
    edgeCount: 3,
    nodes: [
      ...makeV8Node({
        type: NODE_TYPE_SYNTHETIC,
        name: 0,
        id: 1,
        selfSize: 0,
        edgeCount: 3,
      }), // Root
      ...makeV8Node({
        type: NODE_TYPE_OBJECT,
        name: 1,
        id: 3,
        selfSize: 120,
        edgeCount: 0,
      }), // `Grew`
      ...makeV8Node({
        type: NODE_TYPE_OBJECT,
        name: 1,
        id: 5,
        selfSize: 180,
        edgeCount: 0,
      }), // `Grew`
      ...makeV8Node({
        type: NODE_TYPE_OBJECT,
        name: 2,
        id: 7,
        selfSize: 30,
        edgeCount: 0,
      }), // `Added`
    ],
    edges: [
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 6 }), // Root -> `Grew` (flat 6)
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 12 }), // Root -> `Grew` (flat 12)
      ...makeV8Edge({ type: EDGE_TYPE_HIDDEN, nameOrIndex: 0, toNode: 18 }), // Root -> `Added` (flat 18)
    ],
    strings: [``, `Grew`, `Added`],
  }),
)

describe(`origin detection`, () => {
  test(`resolves one origin for all parsed inputs from any parsed input's marker entry`, () => {
    // Only the first parsed input contains an async-profiler marker entry, a
    // slash-form `java/*` stdlib frame. The second parsed input's frames are in
    // a separate array with no marker entries, but its collapsed name still
    // splits into method and declaring class under the origin detected from the
    // first.
    const markerProfile: CallStackProfile = {
      type: `call-stack-profile`,
      frames: [
        { name: `java/util/HashMap.put` },
        { name: `com/example/Main.main` },
      ],
      metrics: [],
      countMetric: SAMPLES,
      observations: [{ values: [], frameIndices: [0, 1] }],
    }
    const markerlessProfile: CallStackProfile = {
      type: `call-stack-profile`,
      frames: [{ name: `com/example/Widget.render` }],
      metrics: [],
      countMetric: SAMPLES,
      observations: [{ values: [], frameIndices: [0] }],
    }
    const formatSpec: JsonFormatSpec = {
      id: `multi`,
      title: `Multi-profile test format`,
      extension: `multi.json`,
      languages: [],
      fallbackOrigin: `unknown`,
      type: `json`,
      matches: () => true,
      parse: () => [markerProfile, markerlessProfile],
    }
    const options = normalizeProfileToMdOptions({ baseURL: null })

    const md = convertJsonToMd(formatSpec, {}, options, `collapsed`)

    expectLogs([
      `debug: origin candidates, in priority order: py-spy, tachyon, async-profiler, eflambe, nix, rbspy, excimer`,
      `info: detected origin: async-profiler`,
      `debug: async-profiler is marked by the entry java/util/HashMap.put`,
    ])
    expect(selfSamplesTables(md)).toStrictEqual([
      [
        {
          '%': `100.0%`,
          Samples: `1`,
          Function: `put`,
          Location: `java.util.HashMap`,
        },
      ],
      [
        {
          '%': `100.0%`,
          Samples: `1`,
          Function: `render`,
          Location: `com.example.Widget`,
        },
      ],
    ])
  })
})

describe(`logging`, () => {
  test(`logs the detected format and the fallback origin`, () => {
    profileToMd(baseCpuProfile, { baseURL: null })

    expectLogs([
      `info: detected format: v8-cpu-profile`,
      V8_CPU_PROFILE_CANDIDATES_LOG,
      ...CHROME_ORIGIN_LOGS,
    ])
  })

  test.each([
    {
      name: `profileToMd`,
      convert: (options: ProfileToMdOptions) =>
        profileToMd(
          { data: baseCpuProfile, format: `v8-cpu-profile`, origin: `chrome` },
          options,
        ),
    },
    {
      name: `profileToMdAsync`,
      convert: (options: ProfileToMdOptions) =>
        profileToMdAsync(
          {
            data: new Blob([baseCpuProfile]),
            format: `v8-cpu-profile`,
            origin: `chrome`,
          },
          options,
        ),
    },
  ])(`$name warns that matchEntry is ignored`, async ({ convert }) => {
    const matchEntry = vi.fn()

    await convert({ baseURL: null, matchEntry })

    expectLogs([
      `info: specified format: v8-cpu-profile`,
      `info: specified origin: chrome`,
      `warn: matchEntry ignored because it pairs entries only across a diff\n  hint: call diffProfiles to compare two profiles`,
    ])
    expect(matchEntry).not.toHaveBeenCalled()
  })

  test(`logs the specified format and origin`, () => {
    profileToMd(
      { data: baseCpuProfile, format: `v8-cpu-profile`, origin: `deno` },
      { baseURL: null },
    )

    expectLogs([
      `info: specified format: v8-cpu-profile`,
      `info: specified origin: deno`,
    ])
  })

  test(`logs the entry an origin was detected from`, () => {
    const cpuProfile = JSON.stringify({
      nodes: [
        makeV8CpuProfileRoot([2]),
        {
          id: 2,
          hitCount: 1,
          callFrame: makeV8CallFrame(`post`, `node:inspector`),
        },
      ],
      samples: [2],
      timeDeltas: [20],
    })

    profileToMd(cpuProfile, { baseURL: null })

    expectLogs([
      `info: detected format: v8-cpu-profile`,
      V8_CPU_PROFILE_CANDIDATES_LOG,
      ...NODE_ORIGIN_LOGS,
    ])
  })

  test(`logs each format that recognized the input but rejected it`, () => {
    expect(() => profileToMd(`a;b 1\nc;d x\n`)).toThrow(/invalid sample count/u)
    expectLogs([
      `debug: collapsed recognized the input but rejected it: invalid sample count`,
    ])
  })

  test(`the logger receives nothing at the default level`, () => {
    const received: string[] = []

    profileToMd(baseCpuProfile, {
      baseURL: null,
      logger: { info: message => received.push(message) },
    })

    expect(received).toStrictEqual([])
    expectLogs([
      `info: detected format: v8-cpu-profile`,
      V8_CPU_PROFILE_CANDIDATES_LOG,
      ...CHROME_ORIGIN_LOGS,
    ])
  })

  test(`logs the inferred base URL`, () => {
    profileToMd(baseCpuProfile, { baseURL: `auto` })

    expectLogs([
      `info: detected format: v8-cpu-profile`,
      V8_CPU_PROFILE_CANDIDATES_LOG,
      ...CHROME_ORIGIN_LOGS,
      `info: inferred base URL: file:///project/src/`,
      `debug: the base URL is the common directory of 2 of the 2 absolute locations categorized as ours, the most that share a top-level directory`,
    ])
  })

  test(`warns when no function categorized as ours has an absolute location`, () => {
    const cpuProfile = JSON.stringify({
      nodes: [
        makeV8CpuProfileRoot([2]),
        {
          id: 2,
          hitCount: 1,
          callFrame: makeV8CallFrame(
            `depFn`,
            `file:///project/node_modules/dep/index.js`,
          ),
        },
      ],
      samples: [2],
      timeDeltas: [20],
    })

    profileToMd(cpuProfile, { baseURL: `auto` })

    expectLogs([
      `info: detected format: v8-cpu-profile`,
      V8_CPU_PROFILE_CANDIDATES_LOG,
      `info: detected origin: node`,
      `debug: node is marked by the entry depFn in file:///project/node_modules/dep/index.js`,
      `warn: baseURL "auto" inferred no directory because no function categorized as ours has an absolute location, so paths stay absolute`,
    ])
  })

  test(`warns when no location is an absolute path or a URL in a directory`, () => {
    profileToMd(emptyProfile, { baseURL: `auto` })

    expectLogs([
      `info: detected format: speedscope`,
      `warn: baseURL "auto" inferred no directory because no location is an absolute path or a URL in a directory`,
    ])
  })

  test(`the logger receives the lines its level enables`, () => {
    const received: string[] = []

    profileToMd(baseCpuProfile, {
      baseURL: null,
      logger: { info: message => received.push(message) },
      logLevel: `info`,
    })

    expect(received).toStrictEqual([
      `detected format: v8-cpu-profile`,
      `fallback origin: chrome`,
    ])
    expectLogs([
      `info: detected format: v8-cpu-profile`,
      V8_CPU_PROFILE_CANDIDATES_LOG,
      ...CHROME_ORIGIN_LOGS,
    ])
  })

  test(`throws on an unknown log level`, () => {
    expect(() =>
      profileToMd(baseCpuProfile, {
        logLevel: `loud` as `debug`,
      }),
    ).toThrow(
      `logLevel must be one of none, error, warn, info, debug, got: loud`,
    )
  })

  test(`expectLogs fails on lines the expectation omits`, () => {
    profileToMd(baseCpuProfile, { baseURL: null })

    expect(() => expectLogs([])).toThrow(`to strictly equal []`)
  })
})

describe(`diffProfiles`, () => {
  test(`accepts an explicit { data, format }`, () => {
    const nodeCpuProfile = readFileSync(
      inputPath(`javascript.node.base.cpuprofile`),
      `utf8`,
    )
    const denoCpuProfile = readFileSync(
      inputPath(`javascript.deno.base.cpuprofile`),
      `utf8`,
    )

    const md = diffProfiles(
      { data: nodeCpuProfile, format: `v8-cpu-profile` },
      { data: denoCpuProfile, format: `v8-cpu-profile` },
      { baseURL: null },
    )

    expect(md).toMatch(/^# .*diff/iu)
    expectLogs(V8_CPU_PROFILE_DIFF_LOGS)
  })

  test(`states the base URL once per diffed profile`, () => {
    const md = diffProfiles(
      { data: baseCpuProfile, format: `v8-cpu-profile` },
      { data: currentCpuProfile, format: `v8-cpu-profile` },
      { baseURL: `/project` },
    )

    expect(md.match(/are relative to/gu)).toStrictEqual([`are relative to`])
    expect(md).toContain(
      `Paths starting with \`./\` or \`../\` are relative to \`/project/\`.`,
    )
  })

  test(`diffs two CPU profiles end-to-end`, () => {
    const md = diffProfiles(
      { data: baseCpuProfile, format: `v8-cpu-profile` },
      { data: currentCpuProfile, format: `v8-cpu-profile` },
      { baseURL: `/project` },
    )

    expect(profileTitles(md)).toStrictEqual([`CPU profile diff`])
    expect(categoryTables(md)).toStrictEqual([
      [
        {
          Category: `Ours`,
          Change: `+50.0%`,
          Delta: `+0.08ms`,
          '%': `100.0%`,
          Time: `0.2ms`,
          Samples: `8 → 12`,
        },
      ],
    ])
    // FuncA grew, funcC is new, funcB was removed. The synthetic `(root)`
    // common ancestor is hidden by the default `showEntry`.
    const funcA = {
      Change: `+100.0%`,
      Delta: `+0.10ms`,
      '%': `62.5% → 83.3%`,
      Time: `0.1ms → 0.2ms`,
      Samples: `5 → 10`,
      Function: `funcA`,
      Location: `./src/a.ts:1:1`,
    }
    const funcC = {
      Change: `new`,
      Delta: `+0.04ms`,
      '%': `0.0% → 16.7%`,
      Time: `0ms → 40.0µs`,
      Samples: `0 → 2`,
      Function: `funcC`,
      Location: `./src/c.ts:1:1`,
    }
    const funcB = {
      Change: `removed`,
      Delta: `-0.06ms`,
      '%': `37.5% → 0.0%`,
      Time: `0.1ms → 0ms`,
      Samples: `3 → 0`,
      Function: `funcB`,
      Location: `./src/b.ts:1:1`,
    }
    expect(rankingTables(md, `Self time`, `Regressions`)).toStrictEqual([
      [funcA, funcC],
    ])
    expect(rankingTables(md, `Self time`, `Improvements`)).toStrictEqual([
      [funcB],
    ])
    expect(rankingTables(md, `Total time`, `Regressions`)).toStrictEqual([
      [funcA, funcC],
    ])
    expect(rankingTables(md, `Total time`, `Improvements`)).toStrictEqual([
      [funcB],
    ])
  })

  test.each<{
    name: string
    firstSuffix: string
    secondSuffix: string
    matchEntry?: ProfileToMdOptions[`matchEntry`]
    location: string
  }>([
    {
      name: `two with an address`,
      firstSuffix: `.0x0000000801183d68`,
      secondSuffix: `.0x0000000801186d88`,
      location: `org.app.Main$$Lambda`,
    },
    {
      name: `one without an address`,
      firstSuffix: ``,
      secondSuffix: `.0x0000000801186d88`,
      location: `org.app.Main$$Lambda`,
    },
    {
      name: `with no location when the entry match pairs by name alone`,
      firstSuffix: `.0x0000000801183d68`,
      secondSuffix: `.0x0000000801186d88`,
      matchEntry: () => ({ location: `` }),
      location: `<unknown>`,
    },
  ])(
    `merges the functions with no line that share a match key and the other side lacks, $name`,
    ({ firstSuffix, secondSuffix, matchEntry, location }) => {
      const lambda = (suffix: string, count: number) =>
        `java/lang/Thread.run;org/app/Main$$Lambda${suffix}.call ${count}`
      const base = [lambda(firstSuffix, 3), lambda(secondSuffix, 5)].join(`\n`)
      const current = lambda(`.0x000000a8011a7490`, 6)

      const md = diffProfiles(
        { data: base, format: `collapsed`, origin: `async-profiler` },
        { data: current, format: `collapsed`, origin: `async-profiler` },
        { baseURL: null, matchEntry },
      )

      expect(rankingTables(md, `Self samples`, `Improvements`)).toStrictEqual([
        [
          {
            Change: `-25.0%`,
            Delta: `-2`,
            '%': `100.0%`,
            Samples: `8 → 6`,
            Function: `call`,
            Location: location,
          },
        ],
      ])
    },
  )

  test(`pairs functions with no line that share a match key and both sides have with themselves`, () => {
    const base = [`main;free__anon_1 3`, `main;free__anon_2 5`].join(`\n`)
    const current = [`main;free__anon_1 4`, `main;free__anon_2 5`].join(`\n`)

    const md = diffProfiles(
      { data: base, format: `collapsed` },
      { data: current, format: `collapsed` },
      {
        baseURL: null,
        matchEntry: entry => ({ name: entry.name?.replace(/_\d+$/u, ``) }),
      },
    )

    expect(rankingTables(md, `Self samples`, `Regressions`)).toStrictEqual([
      [
        {
          Change: `+33.3%`,
          Delta: `+1`,
          '%': `37.5% → 44.4%`,
          Samples: `3 → 4`,
          Function: `free__anon_1`,
          Location: `<unknown>`,
        },
      ],
    ])
  })

  test(`applies the entry match once to merged functions with no line`, () => {
    const base = [`main;v1_v2_call 3`, `main;v3_v2_call 5`].join(`\n`)
    const current = `main;v4_v2_call 6`

    const md = diffProfiles(
      { data: base, format: `collapsed` },
      { data: current, format: `collapsed` },
      {
        baseURL: null,
        matchEntry: entry => ({ name: entry.name?.replace(/^v\d+_/u, ``) }),
      },
    )

    expect(rankingTables(md, `Self samples`, `Improvements`)).toStrictEqual([
      [
        {
          Change: `-25.0%`,
          Delta: `-2`,
          '%': `100.0%`,
          Samples: `8 → 6`,
          Function: `v2_call`,
          Location: `<unknown>`,
        },
      ],
    ])
  })

  test(`locates merged functions at an entry match's absolute file path`, () => {
    const speedscope = (files: string[], weights: number[]): string =>
      JSON.stringify({
        $schema: `https://www.speedscope.app/file-format-schema.json`,
        shared: { frames: files.map(file => ({ name: `call`, file })) },
        profiles: [
          {
            type: `sampled`,
            name: `profile`,
            unit: `none`,
            startValue: 0,
            endValue: 1,
            samples: files.map((_, index) => [index]),
            weights,
          },
        ],
      })
    const base = speedscope([`/app/chunk.0x1.js`, `/app/chunk.0x2.js`], [3, 5])
    const current = speedscope([`/app/chunk.0x3.js`], [6])

    const md = diffProfiles(
      { data: base, format: `speedscope` },
      { data: current, format: `speedscope` },
      { baseURL: null, matchEntry: () => ({ location: `/app/chunk.js` }) },
    )

    expect(rankingTables(md, `Self occurrences`, `Decreases`)).toStrictEqual([
      [
        {
          Change: `-25.0%`,
          Delta: `-2`,
          '%': `100.0%`,
          Occurrences: `8 → 6`,
          Samples: `2 → 1`,
          Function: `call`,
          Location: `/app/chunk.js`,
        },
      ],
    ])
  })

  test(`baseURL: 'auto' infers one common ancestor across both diff sides`, () => {
    // The function moved from src/ to lib/ between the two profiles. A
    // per-side base would format both as a bare `a.ts`; the shared base keeps
    // the two locations distinguishable.
    const makeSide = (url: string) =>
      JSON.stringify({
        nodes: [
          makeV8CpuProfileRoot([2]),
          { id: 2, hitCount: 5, callFrame: makeV8CallFrame(`funcA`, url) },
        ],
        samples: [2, 2, 2, 2, 2],
        timeDeltas: Array.from({ length: 5 }, () => 20),
      })

    const md = diffProfiles(
      {
        data: makeSide(`file:///home/user/project/src/a.ts`),
        format: `v8-cpu-profile`,
      },
      {
        data: makeSide(`file:///home/user/project/lib/a.ts`),
        format: `v8-cpu-profile`,
      },
      { baseURL: `auto` },
    )

    expect(rankingTables(md, `Self time`, `Regressions`)).toStrictEqual([
      [
        {
          Change: `new`,
          Delta: `+0.10ms`,
          '%': `0.0% → 100.0%`,
          Time: `0ms → 0.1ms`,
          Samples: `0 → 5`,
          Function: `funcA`,
          Location: `./lib/a.ts:1:1`,
        },
      ],
    ])
    expect(rankingTables(md, `Self time`, `Improvements`)).toStrictEqual([
      [
        {
          Change: `removed`,
          Delta: `-0.10ms`,
          '%': `100.0% → 0.0%`,
          Time: `0.1ms → 0ms`,
          Samples: `5 → 0`,
          Function: `funcA`,
          Location: `./src/a.ts:1:1`,
        },
      ],
    ])
  })

  test(`baseURL: 'auto' infers a base URL per side when they differ only by what matching removes`, () => {
    const makeSide = (url: string, hitCount: number) =>
      JSON.stringify({
        nodes: [
          makeV8CpuProfileRoot([2]),
          { id: 2, hitCount, callFrame: makeV8CallFrame(`funcA`, url) },
        ],
        samples: Array.from({ length: hitCount }, () => 2),
        timeDeltas: Array.from({ length: hitCount }, () => 20),
      })

    const md = diffProfiles(
      {
        data: makeSide(`file:///build/run-111/src/a.ts`, 5),
        format: `v8-cpu-profile`,
      },
      {
        data: makeSide(`file:///build/run-222/src/a.ts`, 10),
        format: `v8-cpu-profile`,
      },
      {
        baseURL: `auto`,
        matchEntry: entry =>
          entry.location
            ? {
                location: sourceReferenceId(entry.location).replace(
                  /run-\d+/u,
                  `run`,
                ),
              }
            : undefined,
      },
    )

    expect(md).toContain(
      `Paths starting with \`./\` or \`../\` are relative to \`/build/run-111/src/\` on the base side and to \`/build/run-222/src/\` on the current side.`,
    )
    expect(rankingTables(md, `Self time`, `Regressions`)).toStrictEqual([
      [
        {
          Change: `+100.0%`,
          Delta: `+0.10ms`,
          '%': `100.0%`,
          Time: `0.1ms → 0.2ms`,
          Samples: `5 → 10`,
          Function: `funcA`,
          Location: `./a.ts:1:1`,
        },
      ],
    ])
  })

  test(`diffs two heap snapshots end-to-end`, () => {
    const md = diffProfiles(
      { data: baseHeapSnapshot, format: `v8-heap-snapshot` },
      { data: currentHeapSnapshot, format: `v8-heap-snapshot` },
      { baseURL: null },
    )

    expect(profileTitles(md)).toStrictEqual([`Heap snapshot diff`])
    expect(categoryTables(md)).toStrictEqual([
      [
        {
          Category: `Object`,
          Change: `+120.0%`,
          Delta: `+180 B`,
          '%': `100.0%`,
          Size: `150 B → 330 B`,
          Nodes: `2 → 3`,
        },
        {
          Category: `Synthetic`,
          Change: `—`,
          Delta: `0 B`,
          '%': `0.0%`,
          Size: `0 B`,
          Nodes: `1`,
        },
      ],
    ])
    // `Grew` gained an instance, `Added` is new, `Removed` was removed.
    const grew = {
      Change: `+200.0%`,
      Delta: `+200 B`,
      '%': `66.7% → 90.9%`,
      Size: `100 B → 300 B`,
      Instances: `1 → 2`,
      Constructor: `Grew`,
    }
    const added = {
      Change: `new`,
      Delta: `+30 B`,
      '%': `0.0% → 9.1%`,
      Size: `0 B → 30 B`,
      Instances: `0 → 1`,
      Constructor: `Added`,
    }
    const removed = {
      Change: `removed`,
      Delta: `-50 B`,
      '%': `33.3% → 0.0%`,
      Size: `50 B → 0 B`,
      Instances: `1 → 0`,
      Constructor: `Removed`,
    }
    expect(rankingTables(md, `Self size`, `Regressions`)).toStrictEqual([
      [grew, added],
    ])
    expect(rankingTables(md, `Self size`, `Improvements`)).toStrictEqual([
      [removed],
    ])
    expect(rankingTables(md, `Retained size`, `Regressions`)).toStrictEqual([
      [grew, added],
    ])
    expect(rankingTables(md, `Retained size`, `Improvements`)).toStrictEqual([
      [removed],
    ])
  })

  // The default `matchEntry` strips an origin's run-varying identifiers so
  // functions match across builds. `src/origins/inputs.test.ts` and
  // `src/modalities/call-stack-profile/diff.test.ts` cover it at a lower
  // level, since no committed input pair exhibits a differing build hash.

  test(`states a source once when the origin's matchEntry makes the sides one source`, () => {
    const makeSide = (storeHash: string, count: number) => ({
      data: `/nix/store/${storeHash}-source/lib/a.nix:10:5:f ${count}\n`,
      format: `collapsed` as const,
      origin: `nix` as const,
    })

    const md = diffProfiles(
      makeSide(`a`.repeat(32), 5),
      makeSide(`b`.repeat(32), 10),
      { baseURL: null },
    )

    expect(rankingTables(md, `Self samples`, `Regressions`)).toStrictEqual([
      [
        {
          Change: `+100.0%`,
          Delta: `+5`,
          '%': `100.0%`,
          Samples: `5 → 10`,
          Function: `f`,
          Location: `/nix/store/${`b`.repeat(32)}-source/lib/a.nix:10:5`,
        },
      ],
    ])
  })

  test(`matchEntry matches functions whose locations differ across profiles`, () => {
    // `funcA`'s file carries a per-build suffix, so by default the two sides
    // don't match. The `matchEntry` hook equates the locations; the matched
    // row displays both profiles' real paths.
    const base = JSON.stringify({
      nodes: [
        makeV8CpuProfileRoot([2]),
        {
          id: 2,
          hitCount: 5,
          callFrame: makeV8CallFrame(`funcA`, `file:///project/src/a-111.ts`),
        },
      ],
      samples: [2, 2, 2, 2, 2],
      timeDeltas: Array.from({ length: 5 }, () => 20),
    })
    const current = JSON.stringify({
      nodes: [
        makeV8CpuProfileRoot([2]),
        {
          id: 2,
          hitCount: 10,
          callFrame: makeV8CallFrame(`funcA`, `file:///project/src/a-222.ts`),
        },
      ],
      samples: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      timeDeltas: Array.from({ length: 10 }, () => 20),
    })

    const md = diffProfiles(
      { data: base, format: `v8-cpu-profile` },
      { data: current, format: `v8-cpu-profile` },
      {
        baseURL: `/project`,
        matchEntry: entry =>
          entry.location
            ? {
                location: sourceReferenceId(entry.location).replace(
                  /a-\d+\.ts$/u,
                  `a.ts`,
                ),
              }
            : undefined,
      },
    )

    expect(rankingTables(md, `Self time`, `Regressions`)).toStrictEqual([
      [
        {
          Change: `+100.0%`,
          Delta: `+0.10ms`,
          '%': `100.0%`,
          Time: `0.1ms → 0.2ms`,
          Samples: `5 → 10`,
          Function: `funcA`,
          Location: `./src/a-111.ts:1:1 → ./src/a-222.ts:1:1`,
        },
      ],
    ])
    expect(rankingTables(md, `Self time`, `Improvements`)).toStrictEqual([])
  })

  test(`reports when there is no profiling data`, () => {
    const md = diffProfiles(emptyProfile, emptyProfile, { baseURL: null })

    expect(md).toBe(`No profiles were recorded.\n`)
  })

  test(`throws on diffing a call stack profile against a heap snapshot`, () => {
    const profileContent = readFileSync(
      inputPath(`javascript.node.base.cpuprofile`),
    )
    const snapshotContent = readInput(`javascript.node.base.heapsnapshot`)

    expect(() =>
      diffProfiles(profileContent, snapshotContent, { baseURL: null }),
    ).toThrow(/cannot diff a call stack profile against a heap snapshot/u)
    expect(() =>
      diffProfiles(snapshotContent, profileContent, { baseURL: null }),
    ).toThrow(/cannot diff a heap snapshot against a call stack profile/u)
  })
})

import { readFileSync } from 'node:fs'
import { describe, expect, test } from 'vitest'
import { aggregateInput } from '../formats/index.ts'
import { normalizeProfileToMdOptions } from '../options.ts'
import type { NormalizedProfileToMdOptions, ProfileEntry } from '../options.ts'
import { fixturePath } from '../testing/fixtures.ts'
import type { Origin } from './index.ts'
import { determineOrigin } from './index.ts'

const relativeEntry = (name: string, path?: string): ProfileEntry => ({
  id: 1,
  name,
  ...(path ? { location: { type: `relative`, path } } : {}),
})

const absoluteEntry = (name: string, url: string): ProfileEntry => ({
  id: 1,
  name,
  location: { type: `absolute`, url: new URL(url) },
})

/**
 * Echoes each input's resolved origin (explicit, else detected from its
 * entries) as the category of every function, so a profile's origin is
 * observable through its function categories, which is otherwise the only trace
 * of it the profile retains.
 */
const echoOriginOptions = (): NormalizedProfileToMdOptions =>
  normalizeProfileToMdOptions({
    categorizeEntries: (entries, { format, origin }) => {
      const resolved = origin ?? determineOrigin({ format, entries })
      return entries.map(() => resolved)
    },
  })

describe(`determineOrigin`, () => {
  test(`resolves single-runtime formats to their runtime origin`, () => {
    // No entries to match against, yet the runtime that exclusively emits the
    // format is returned via the fallback.
    expect(determineOrigin({ format: `v8-heap-snapshot`, entries: [] })).toBe(
      `node`,
    )
    expect(determineOrigin({ format: `v8-heap-profile`, entries: [] })).toBe(
      `node`,
    )
    expect(determineOrigin({ format: `jsc-heap-snapshot`, entries: [] })).toBe(
      `safari`,
    )
    expect(
      determineOrigin({ format: `webkit-timeline-recording`, entries: [] }),
    ).toBe(`safari`)
  })

  test(`falls back to the unknown origin when nothing matches`, () => {
    expect(
      determineOrigin({
        format: `pprof`,
        entries: [relativeEntry(`compute`, `compute.c`)],
      }),
    ).toBe(`unknown`)
    expect(
      determineOrigin({
        format: `collapsed`,
        entries: [relativeEntry(`frame`)],
      }),
    ).toBe(`unknown`)
    expect(
      determineOrigin({
        format: `speedscope`,
        entries: [relativeEntry(`frame`)],
      }),
    ).toBe(`unknown`)
    expect(
      determineOrigin({
        format: `v8-cpu-profile`,
        entries: [relativeEntry(`frame`)],
      }),
    ).toBe(`unknown`)
  })

  test(`prefers Deno over Node when both signals are present`, () => {
    // Deno polyfills `node:` specifiers, so a `node:` entry alone shouldn't beat
    // Deno's `ext:` signal.
    expect(
      determineOrigin({
        format: `v8-cpu-profile`,
        entries: [
          absoluteEntry(`x`, `node:process`),
          absoluteEntry(`y`, `ext:core/01_core.js`),
        ],
      }),
    ).toBe(`deno`)
  })

  test(`detects Bun by its JavaScriptCore module-loader builtins`, () => {
    expect(
      determineOrigin({
        format: `v8-cpu-profile`,
        entries: [relativeEntry(`linkAndEvaluateModule`)],
      }),
    ).toBe(`bun`)
  })

  test(`a user function sharing a JSC builtin name doesn't trigger Bun`, () => {
    // The native builtins have no location; a user function named `loadModule`
    // carries one, so a Node profile isn't misdetected as Bun.
    expect(
      determineOrigin({
        format: `v8-cpu-profile`,
        entries: [
          absoluteEntry(`loadModule`, `file:///app/src/loader.ts`),
          absoluteEntry(`x`, `node:fs`),
        ],
      }),
    ).toBe(`node`)
  })

  test(`detects Node's native profiler by node: specifiers`, () => {
    expect(
      determineOrigin({
        format: `v8-cpu-profile`,
        entries: [absoluteEntry(`x`, `node:fs`)],
      }),
    ).toBe(`node`)
  })

  test(`detects node-pprof by its labels or Node's runtime signals`, () => {
    expect(
      determineOrigin({ format: `pprof`, entries: [relativeEntry(`Node.js`)] }),
    ).toBe(`node-pprof`)
    expect(
      determineOrigin({
        format: `pprof`,
        entries: [relativeEntry(`Garbage Collection`)],
      }),
    ).toBe(`node-pprof`)
    expect(
      determineOrigin({
        format: `pprof`,
        entries: [absoluteEntry(`f`, `file:///app/node_modules/x.js`)],
      }),
    ).toBe(`node-pprof`)
  })

  test(`detects pprof-rs by Rust toolchain paths and mangled names`, () => {
    expect(
      determineOrigin({
        format: `pprof`,
        entries: [
          absoluteEntry(
            `f`,
            `file:///rustc/${`a`.repeat(40)}/library/std/src/rt.rs`,
          ),
        ],
      }),
    ).toBe(`pprof-rs`)
    expect(
      determineOrigin({
        format: `pprof`,
        entries: [relativeEntry(`compiler::run::{{closure}}`)],
      }),
    ).toBe(`pprof-rs`)
  })

  test(`detects py-spy by its thread, frozen-module, and located frames`, () => {
    expect(
      determineOrigin({
        format: `collapsed`,
        entries: [relativeEntry(`tid:42`)],
      }),
    ).toBe(`py-spy`)
    expect(
      determineOrigin({
        format: `collapsed`,
        entries: [relativeEntry(`<module> (<frozen runpy>:5)`)],
      }),
    ).toBe(`py-spy`)
    expect(
      determineOrigin({
        format: `collapsed`,
        entries: [relativeEntry(`parse (black/parsing.py:42)`)],
      }),
    ).toBe(`py-spy`)
  })

  test(`detects rbspy by its " - file:line" and "[c function]" frames`, () => {
    expect(
      determineOrigin({
        format: `collapsed`,
        entries: [relativeEntry(`parse - /app/lib/foo.rb:12`)],
      }),
    ).toBe(`rbspy`)
    expect(
      determineOrigin({
        format: `collapsed`,
        entries: [relativeEntry(`(unknown) [c function] - (unknown)`)],
      }),
    ).toBe(`rbspy`)
  })

  test(`detects BEAM by its Elixir, Erlang, and process-id frames`, () => {
    expect(
      determineOrigin({
        format: `collapsed`,
        entries: [relativeEntry(`Elixir.Enum:reduce/3`)],
      }),
    ).toBe(`beam`)
    expect(
      determineOrigin({
        format: `collapsed`,
        entries: [relativeEntry(`lists:reverse/1`)],
      }),
    ).toBe(`beam`)
    expect(
      determineOrigin({
        format: `collapsed`,
        entries: [relativeEntry(`<0.94.0>`)],
      }),
    ).toBe(`beam`)
  })

  test(`detects the jvm origin from async-profiler's collapsed class frames`, () => {
    expect(
      determineOrigin({
        format: `collapsed`,
        entries: [relativeEntry(`java/util/HashMap.put`)],
      }),
    ).toBe(`jvm`)
  })

  test(`resolves JFR to the jvm origin`, () => {
    expect(determineOrigin({ format: `jfr`, entries: [] })).toBe(`jvm`)
  })

  test(`unrecognized pprof and collapsed fall back to unknown`, () => {
    expect(
      determineOrigin({
        format: `pprof`,
        entries: [relativeEntry(`compute`, `compute.go`)],
      }),
    ).toBe(`unknown`)
    expect(
      determineOrigin({
        format: `collapsed`,
        entries: [relativeEntry(`frame`, `app.rb`)],
      }),
    ).toBe(`unknown`)
  })
})

// Each profile fixture's expected detected origin, observed through its function
// categories. Snapshots don't categorize by origin, so they're excluded;
// `determineOrigin` is unit-tested directly above instead.
const FIXTURE_ORIGINS: [filename: string, origin: Origin][] = [
  [`bun.cpuprofile`, `bun`],
  [`deno.cpuprofile`, `deno`],
  [`node.base.cpuprofile`, `node`],
  [`node.current.cpuprofile`, `node`],
  [`node.heapprofile`, `node`],
  [`node.pprof`, `node-pprof`],
  [`webkit-timeline-recording.json`, `safari`],
  [`python.base.collapsed`, `py-spy`],
  [`python.current.collapsed`, `py-spy`],
  [`rust.base.pprof`, `pprof-rs`],
  [`rust.current.pprof`, `pprof-rs`],
  [`java.jdk.jfr`, `jvm`],
  [`java.cpu.jfr`, `jvm`],
]

describe(`detected fixture origins`, () => {
  test.each(FIXTURE_ORIGINS)(`%s is detected as %s`, (filename, origin) => {
    const inputs = aggregateInput(
      readFileSync(fixturePath(filename)),
      echoOriginOptions(),
    )

    for (const input of inputs) {
      if (input.type !== `profile`) {
        throw new Error(`expected only profile fixtures`)
      }
      expect(new Set(input.functions.map(func => func.category))).toEqual(
        new Set([origin]),
      )
    }
  })
})

describe(`origin threading`, () => {
  const nodeFixture = (): Uint8Array =>
    readFileSync(fixturePath(`node.base.cpuprofile`))

  test(`an explicit origin overrides detection and reaches categorizeEntries`, () => {
    const options = echoOriginOptions()

    const [detected] = aggregateInput(nodeFixture(), options)
    const [forced] = aggregateInput(
      { data: nodeFixture(), origin: `deno` },
      options,
    )
    if (detected?.type !== `profile` || forced?.type !== `profile`) {
      throw new Error(`expected both inputs to be profiles`)
    }

    expect(new Set(detected.functions.map(func => func.category))).toEqual(
      new Set([`node`]),
    )

    // Forcing the origin changes only this profile's categories, not the
    // independently detected one above.
    expect(new Set(forced.functions.map(func => func.category))).toEqual(
      new Set([`deno`]),
    )
  })
})

import { readdirSync } from 'node:fs'
import { describe, expect, test, vi } from 'vitest'
import { parseExampleFilename } from '../cli/examples.ts'
import type { Format } from '../formats/index.ts'
import { aggregateInput } from '../formats/index.ts'
import { normalizeProfileToMdOptions } from '../options.ts'
import type { NormalizedProfileToMdOptions, ProfileEntry } from '../options.ts'
import { injectedFormat, inputPath, readInput } from '../testing/inputs.ts'
import type { Origin } from './index.ts'
import { normalizeEntryMatchForOrigin, OriginDetector } from './index.ts'
import { systingOriginSpec } from './systing.ts'

vi.setConfig({ testTimeout: 125_000 })

/** Detects the origin of the given entries through an {@link OriginDetector}. */
const determineOrigin = ({
  format,
  entries,
}: {
  format: Format
  entries: readonly ProfileEntry[]
}): Origin => {
  const detector = new OriginDetector({ format, origin: null })
  detector.addEntries(entries)
  return detector.resolve()
}

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
 * Echoes each input's resolved origin as the category of every function, so a
 * profile's origin is observable through its function categories, which is
 * otherwise the only trace of it the profile retains.
 */
const echoOriginOptions = (): NormalizedProfileToMdOptions =>
  normalizeProfileToMdOptions({
    categorizeEntries: (entries, { origin }) => entries.map(() => origin),
  })

const format = injectedFormat()

if (format === undefined) {
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
      expect(
        determineOrigin({ format: `jsc-heap-snapshot`, entries: [] }),
      ).toBe(`safari`)
      expect(
        determineOrigin({ format: `webkit-timeline-recording`, entries: [] }),
      ).toBe(`safari`)
      expect(determineOrigin({ format: `systing`, entries: [] })).toBe(
        `systing`,
      )
    })

    test(`systing's marker is its address-suffixed frame packing`, () => {
      // Native frames: `name (module [file:line]) <0xaddr>` with the location
      // optional and the module possibly a bracketed label.
      for (const name of [
        `gamma_spin (nested [nested.c:9]) <0x56475007017d>`,
        `__libc_start_main (libc.so.6) <0x7f89613aa28b>`,
        `do_syscall_64 ([kernel]) <0xffffffff9fca7238>`,
        `unknown ([gvisor:runtime]) <0x7f0000001000>`,
      ]) {
        expect(systingOriginSpec.matchesEntry(relativeEntry(name))).toBe(true)
      }

      // Signals any profiler could produce, or lookalike packings missing the
      // address suffix, aren't systing evidence.
      for (const name of [
        `compute`,
        `work (app)`,
        `handle_request (python) [server.py:88]`,
        `0x7f95bfdb6e12`,
        `(garbage collector)`,
      ]) {
        expect(systingOriginSpec.matchesEntry(relativeEntry(name))).toBe(false)
      }
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
        determineOrigin({
          format: `pprof`,
          entries: [relativeEntry(`Node.js`)],
        }),
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

    test(`detects pprof-jl by Base frames in the Julia install layout`, () => {
      expect(
        determineOrigin({
          format: `pprof`,
          entries: [
            relativeEntry(
              `+`,
              `/nix/store/x-julia-bin-1.12.6/share/julia/base/int.jl`,
            ),
          ],
        }),
      ).toBe(`pprof-jl`)
    })

    test(`detects go by runtime frames located in a GOROOT source tree`, () => {
      expect(
        determineOrigin({
          format: `pprof`,
          entries: [
            relativeEntry(
              `runtime.usleep`,
              `../../nix/store/abc-go-1.26.3/share/go/src/runtime/sys_darwin.go`,
            ),
          ],
        }),
      ).toBe(`go`)
      // A runtime-prefixed name outside a GOROOT tree is not a Go marker.
      expect(
        determineOrigin({
          format: `pprof`,
          entries: [relativeEntry(`runtime.foo`, `src/runtime.ts`)],
        }),
      ).toBe(`unknown`)
    })

    test(`detects py-spy by its "func (file:line)" frames`, () => {
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

    test(`detects py-spy by a CPython install-layout location in speedscope`, () => {
      expect(
        determineOrigin({
          format: `speedscope`,
          entries: [relativeEntry(`parse`, `/usr/lib/python3.11/ast.py`)],
        }),
      ).toBe(`py-spy`)
      expect(
        determineOrigin({
          format: `speedscope`,
          entries: [relativeEntry(`_run_code`, `<frozen runpy>`)],
        }),
      ).toBe(`py-spy`)
      // A plain Python source file is not a CPython marker.
      expect(
        determineOrigin({
          format: `speedscope`,
          entries: [relativeEntry(`work`, `app.py`)],
        }),
      ).toBe(`unknown`)
    })

    test(`detects tachyon by its thread and frozen-bootstrap frames`, () => {
      expect(
        determineOrigin({
          format: `collapsed`,
          entries: [relativeEntry(`tid:15522692`)],
        }),
      ).toBe(`tachyon`)
      expect(
        determineOrigin({
          format: `collapsed`,
          entries: [relativeEntry(`<frozen runpy>:_run_module_as_main:201`)],
        }),
      ).toBe(`tachyon`)
    })

    test(`a marker-free folded "file:func:line" stack stays unknown`, () => {
      expect(
        determineOrigin({
          format: `collapsed`,
          entries: [relativeEntry(`app.py:work:20`)],
        }),
      ).toBe(`unknown`)
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

    test(`detects rbspy by its bare marker frames in pprof and speedscope`, () => {
      expect(
        determineOrigin({
          format: `pprof`,
          entries: [relativeEntry(`(unknown) [c function]`)],
        }),
      ).toBe(`rbspy`)
      expect(
        determineOrigin({
          format: `speedscope`,
          entries: [relativeEntry(`<top (required)>`)],
        }),
      ).toBe(`rbspy`)
      expect(
        determineOrigin({
          format: `pprof`,
          entries: [relativeEntry(`<main>`)],
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

    test(`detects dotnet-trace by its assembly-bang frames and time buckets`, () => {
      expect(
        determineOrigin({
          format: `speedscope`,
          entries: [
            relativeEntry(
              `System.Private.CoreLib!System.AppContext.Setup(wchar**,wchar**,int32)`,
            ),
          ],
        }),
      ).toBe(`dotnet-trace`)
      expect(
        determineOrigin({
          format: `speedscope`,
          entries: [relativeEntry(`UNMANAGED_CODE_TIME`)],
        }),
      ).toBe(`dotnet-trace`)
    })

    test(`a bang-less speedscope frame doesn't trigger dotnet-trace`, () => {
      expect(
        determineOrigin({
          format: `speedscope`,
          entries: [relativeEntry(`main()`)],
        }),
      ).toBe(`unknown`)
    })

    test(`detects the jvm origin from async-profiler's collapsed class frames`, () => {
      expect(
        determineOrigin({
          format: `collapsed`,
          entries: [relativeEntry(`java/util/HashMap.put`)],
        }),
      ).toBe(`jvm`)
      // Detection matches raw slash-form names against the same package roots
      // categorization matches dot-form classes against, including `com/sun`.
      expect(
        determineOrigin({
          format: `collapsed`,
          entries: [relativeEntry(`com/sun/crypto/provider/AESCrypt.encrypt`)],
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
}

// The expected detected origin of each committed profile input, keyed by the
// input's `<lang>.<emitter>`, with `<lang>.<emitter>.<config?>` and
// `<lang>.<emitter>.<config?>.<format>` overrides.
const EMITTER_ORIGINS = new Map<string, Origin>([
  [`c.gperftools`, `unknown`],
  [`c.systing`, `systing`],
  [`cpp.gperftools`, `unknown`],
  [`csharp.dotnet-trace`, `dotnet-trace`],
  [`elixir.eflambe`, `beam`],
  [`erlang.eflambe`, `beam`],
  [`fsharp.dotnet-trace`, `dotnet-trace`],
  [`go.pprof`, `go`],
  // A threadcreate capture's stacks are thread-spawn sites with no
  // GOROOT-located runtime frames, Go's only in-frame marker.
  [`go.pprof.threadcreate`, `unknown`],
  [`java.async-profiler`, `jvm`],
  [`java.jdk`, `jvm`],
  [`javascript.bun`, `bun`],
  // JSC heap snapshots carry no in-frame runtime markers and safari is the
  // format's only candidate origin, so every capture resolves to it, even
  // Bun's.
  [`javascript.bun.jsc-heap-snapshot`, `safari`],
  // Like heap profiles below, heap snapshots resolve to the format's fallback
  // origin: node, its primary emitter.
  [`javascript.bun.v8-heap-snapshot`, `node`],
  [`javascript.chrome`, `unknown`],
  // Heap profiles carry no in-frame runtime markers, so the format resolves
  // every capture to its fallback origin: node, its primary emitter.
  [`javascript.chrome.v8-heap-profile`, `node`],
  [`javascript.chrome.v8-heap-snapshot`, `node`],
  [`javascript.deno`, `deno`],
  [`javascript.node`, `node`],
  [`javascript.pprof`, `node-pprof`],
  [`javascript.safari`, `safari`],
  [`julia.pprof-jl`, `pprof-jl`],
  // Julia's `Profile` stdlib writes V8-format heap snapshots directly. No
  // registered origin matches their Julia-runtime entities, so like the heap
  // snapshots above they resolve to the format's fallback origin: node, its
  // primary emitter.
  [`julia.profile`, `node`],
  [`kotlin.async-profiler`, `jvm`],
  [`kotlin.jdk`, `jvm`],
  [`php.excimer`, `unknown`],
  [`python.py-spy`, `py-spy`],
  [`ruby.rbspy`, `rbspy`],
  [`rust.pprof-rs`, `pprof-rs`],
])

const expectedInputOrigin = (filename: string): Origin => {
  const { language, emitter, config, format } = parseExampleFilename(filename)
  const emitterKey = [language, emitter, config].filter(Boolean).join(`.`)
  const origin =
    EMITTER_ORIGINS.get(`${emitterKey}.${format}`) ??
    EMITTER_ORIGINS.get(emitterKey) ??
    EMITTER_ORIGINS.get(`${language}.${emitter}`)
  if (!origin) {
    throw new Error(
      `Add ${JSON.stringify(emitterKey)} and its expected origin to \`EMITTER_ORIGINS\``,
    )
  }
  return origin
}

const inputFilenames =
  format === undefined
    ? []
    : readdirSync(inputPath()).filter(
        filename => parseExampleFilename(filename).format === format,
      )

// Registered conditionally because this suite would be empty in the `unit`
// project, which receives no inputs.
if (inputFilenames.length > 0) {
  describe(`detected input origins`, () => {
    test.each(inputFilenames)(
      `%s resolves to its profiler's origin`,
      filename => {
        const inputs = aggregateInput(readInput(filename), echoOriginOptions())

        // A modality is a property of each aggregated input, not of the format,
        // so the test covers every committed input, asserting on each
        // profile's functions and each snapshot's entities.
        const origin = expectedInputOrigin(filename)
        const unexpectedOrigins = inputs.flatMap(input => {
          const entities =
            input.type === `profile`
              ? input.functions
              : [...input.constructors, ...input.closures]
          return entities
            .map(entity => entity.category)
            .filter(category => category !== origin)
        })
        expect(new Set(unexpectedOrigins)).toEqual(new Set())
      },
    )
  })
}

if (format === undefined) {
  describe(`origin threading`, () => {
    const nodeInput = (): Uint8Array =>
      readInput(`javascript.node.base.cpuprofile`)

    test(`an explicit origin overrides detection and reaches categorizeEntries`, () => {
      const options = echoOriginOptions()

      const [detected] = aggregateInput(nodeInput(), options)
      const [forced] = aggregateInput(
        { data: nodeInput(), origin: `deno` },
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
}

if (format === undefined) {
  describe(`normalizeEntryMatchForOrigin`, () => {
    const lambdaEntry = () =>
      relativeEntry(
        `apply(Object, Object)`,
        `JavaKMeans$$Lambda.0x000000b801205218`,
      )
    const adapterEntry = () => relativeEntry(`I2C/C2I adapters(0xba)`)
    const cargoEntry = () =>
      absoluteEntry(
        `parse`,
        `file:///app/target/release/build/web-compiler-${`a`.repeat(16)}/out/parser.rs`,
      )
    const rustcEntry = () =>
      absoluteEntry(
        `rt`,
        `file:///rustc/${`a`.repeat(40)}/library/std/src/rt.rs`,
      )

    test.each([
      {
        description: `jvm strips a lambda runtime address from the location`,
        entry: lambdaEntry(),
        origin: `jvm` as const,
        expected: { location: `JavaKMeans$$Lambda` },
      },
      {
        description: `jvm strips an adapter runtime address from the name`,
        entry: adapterEntry(),
        origin: `jvm` as const,
        expected: { name: `I2C/C2I adapters` },
      },
      {
        description: `pprof-rs strips a Cargo build-script hash`,
        entry: cargoEntry(),
        origin: `pprof-rs` as const,
        expected: {
          location: `file:///app/target/release/build/web-compiler/out/parser.rs`,
        },
      },
      {
        description: `pprof-rs strips a rustc commit hash`,
        entry: rustcEntry(),
        origin: `pprof-rs` as const,
        expected: { location: `file:///rustc/library/std/src/rt.rs` },
      },
      {
        description: `an unrelated origin leaves a Cargo build-script hash alone`,
        entry: cargoEntry(),
        origin: `node` as const,
        expected: undefined,
      },
      {
        description: `an unrelated origin leaves a JVM runtime address alone`,
        entry: lambdaEntry(),
        origin: `pprof-rs` as const,
        expected: undefined,
      },
      {
        // The unknown origin carries no profiler's rules (see
        // `unknownOriginSpec`), so even a JVM-shaped marker survives.
        description: `unknown strips nothing from a JVM runtime address`,
        entry: lambdaEntry(),
        origin: `unknown` as const,
        expected: undefined,
      },
      {
        description: `unknown strips nothing from a rustc commit hash`,
        entry: rustcEntry(),
        origin: `unknown` as const,
        expected: undefined,
      },
      {
        description: `an unmarked entry normalizes to undefined`,
        entry: absoluteEntry(`main`, `file:///project/src/main.rs`),
        origin: `unknown` as const,
        expected: undefined,
      },
    ])(`$description`, ({ entry, origin, expected }) => {
      expect(normalizeEntryMatchForOrigin(entry, origin)).toEqual(expected)
    })
  })
}

import { readdirSync } from 'node:fs'
import { describe, expect, test, vi } from 'vitest'
import { parseExampleFilename } from '../cli/examples.ts'
import { aggregateInput } from '../formats/index.ts'
import { normalizeProfileToMdOptions } from '../options.ts'
import type { NormalizedProfileToMdOptions } from '../options.ts'
import { injectedFormat, inputPath, readInput } from '../testing/inputs.ts'
import type { Origin } from './index.ts'

vi.setConfig({ testTimeout: 125_000 })

/**
 * Echoes each input's resolved origin as the category of every entry, so a
 * profile's origin is observable through its entry categories.
 */
const echoOriginOptions = (): NormalizedProfileToMdOptions =>
  normalizeProfileToMdOptions({
    categorizeEntries: (entries, { origin }) => entries.map(() => origin),
  })

const format = injectedFormat()

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
      `Add ${emitterKey} and its expected origin to \`EMITTER_ORIGINS\``,
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

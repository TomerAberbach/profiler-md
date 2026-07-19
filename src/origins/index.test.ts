import { readdirSync } from 'node:fs'
import { describe, expect, test, vi } from 'vitest'
import { parseExampleFilename } from '../cli/examples.ts'
import { aggregateInput } from '../formats/index.ts'
import { injectedFormat, inputPath, readInput } from '../formats/testing.ts'
import { normalizeProfileToMdOptions } from '../options.ts'
import type { NormalizedProfileToMdOptions } from '../options.ts'
import { OriginDetector } from './index.ts'

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
    // Every committed input must resolve to the origin in its filename: a
    // capture that doesn't detect needs a marker entry, a parser origin hint,
    // or a more realistic workload before it's committed.
    test.each(inputFilenames)(
      `%s resolves to its profiler's origin`,
      filename => {
        const inputs = aggregateInput(readInput(filename), echoOriginOptions())

        // A modality is a property of each aggregated input, not of the format,
        // so the test covers every committed input, asserting on each
        // profile's functions and each snapshot's entities.
        const { origin } = parseExampleFilename(filename)
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

  describe(`origin hints`, () => {
    test(`a hint resolves an origin no entry marks`, () => {
      const detector = new OriginDetector({ format: `pprof`, origin: null })
      detector.hint(`gperftools`)
      expect(detector.resolve()).toBe(`gperftools`)
    })

    test(`a forced origin ignores the hint`, () => {
      const detector = new OriginDetector({ format: `pprof`, origin: `go` })
      detector.hint(`gperftools`)
      expect(detector.resolve()).toBe(`go`)
    })

    test(`a higher-priority origin's marker entry overrides the hint`, () => {
      const detector = new OriginDetector({ format: `pprof`, origin: null })
      detector.hint(`gperftools`)
      detector.add({
        id: 1,
        name: `runtime.main`,
        location: { type: `relative`, path: `/usr/lib/go/src/runtime/proc.go` },
      })
      expect(detector.resolve()).toBe(`go`)
    })

    test(`an origin that can't emit the format is ignored`, () => {
      const detector = new OriginDetector({ format: `pprof`, origin: null })
      detector.hint(`excimer`)
      expect(detector.resolve()).toBe(`unknown`)
    })
  })
}

import { describe, expect, test, vi } from 'vitest'
import { parseExampleFilename } from '../cli/examples.ts'
import { aggregateInput } from '../formats/index.ts'
import {
  injectedFormat,
  injectedInputs,
  readInput,
} from '../formats/testing.ts'
import { normalizeProfileToMdOptions } from '../options.ts'
import type { NormalizedProfileToMdOptions } from '../options.ts'
import {
  categorizeHeapSnapshotConstructorForOrigin,
  OriginDetector,
} from './index.ts'
import type { Origin } from './index.ts'

vi.setConfig({ testTimeout: 125_000 })

/**
 * Echoes a profile's resolved origin as the category of every entry, so the
 * origin `categorizeEntries` received is observable in the categories.
 */
const echoOriginOptions = (): NormalizedProfileToMdOptions =>
  normalizeProfileToMdOptions({
    categorizeEntries: (entries, { origin }) => entries.map(() => origin),
  })

const format = injectedFormat()
const inputFilenames = injectedInputs()

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
        const inputs = aggregateInput(
          readInput(filename),
          normalizeProfileToMdOptions(),
        )

        // A multi-profile input aggregates each profile under its own
        // context, so each must resolve to the filename's origin. An input
        // holding no profiling data aggregates to nothing and has no origin
        // to check.
        const { origin } = parseExampleFilename(filename)
        const unexpectedOrigins = inputs
          .map(input => input.context.origin)
          .filter(resolved => resolved !== origin)
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
      if (
        detected?.type !== `sampling-profile` ||
        forced?.type !== `sampling-profile`
      ) {
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

  describe(`heap snapshot constructor categorization`, () => {
    test.each<Origin>([`node`, `chrome`, `bun`, `safari`])(
      `%s categorizes JavaScript's own classes`,
      origin => {
        expect(
          categorizeHeapSnapshotConstructorForOrigin(`Promise`, origin),
        ).toBe(`built-in`)
      },
    )

    test(`an origin observing another language leaves the format's category`, () => {
      // Julia writes V8-format snapshots, whose class names are Julia's.
      expect(
        categorizeHeapSnapshotConstructorForOrigin(`Promise`, `profile-jl`),
      ).toBeUndefined()
    })

    test.each<Origin>([`safari`, `bun`])(
      `%s categorizes JavaScriptCore's own classes`,
      origin => {
        expect(
          categorizeHeapSnapshotConstructorForOrigin(`ModuleLoader`, origin),
        ).toBe(`native`)
      },
    )

    test(`an origin observing another engine leaves the format's category`, () => {
      // Node's ESM loader defines a JavaScript class by the same name as
      // JavaScriptCore's native one, which is the program's own code.
      expect(
        categorizeHeapSnapshotConstructorForOrigin(`ModuleLoader`, `node`),
      ).toBeUndefined()
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

import { describe, expect, test, vi } from 'vitest'
import { parseExampleFilename } from '../cli/examples.ts'
import { aggregateInput } from '../formats/index.ts'
import {
  injectedFormat,
  injectedInputs,
  readInput,
} from '../formats/testing.ts'
import { FUNCTION_CATEGORIES, normalizeProfileToMdOptions } from '../options.ts'
import type { NormalizedProfileToMdOptions } from '../options.ts'
import {
  categorizeHeapSnapshotConstructorForOrigin,
  OriginDetector,
} from './index.ts'
import type { Origin } from './index.ts'

vi.setConfig({ testTimeout: 125_000 })

/**
 * Records the origin `categorizeFunctions` receives into {@link origins}, one
 * entry per profile it is called for.
 */
const recordOriginOptions = (origins: Origin[]): NormalizedProfileToMdOptions =>
  normalizeProfileToMdOptions({
    categorizeFunctions: (entries, { origin }) => {
      origins.push(origin)
      return entries.map(() => `ours`)
    },
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

  describe(`assigned categories`, () => {
    // `FunctionCategory` is closed so that formatting can partition by category,
    // but the origins reach it through casts that types alone don't cover
    // (`syntheticFrameCategory` promotes a frame's `(label)` to a category).
    test.each(inputFilenames)(
      `%s categorizes every function canonically`,
      filename => {
        const inputs = aggregateInput(
          readInput(filename),
          normalizeProfileToMdOptions(),
        )

        const categories = new Set(
          inputs.flatMap(input =>
            input.type === `sampling-profile` || input.type === `call-graph`
              ? input.functions.map(func => func.category)
              : [],
          ),
        )
        expect(
          [...categories].filter(category => !CATEGORIES.has(category)),
        ).toEqual([])
      },
    )
  })
}

const CATEGORIES: ReadonlySet<string> = new Set(FUNCTION_CATEGORIES)

if (format === undefined) {
  describe(`origin threading`, () => {
    const nodeInput = (): Uint8Array =>
      readInput(`javascript.node.base.cpuprofile`)

    test(`an explicit origin overrides detection and reaches categorizeFunctions`, () => {
      const detectedOrigins: Origin[] = []
      aggregateInput(nodeInput(), recordOriginOptions(detectedOrigins))
      expect(detectedOrigins).toEqual([`node`])

      // Forcing the origin affects only the profile it was forced for, not the
      // independently detected one above.
      const forcedOrigins: Origin[] = []
      aggregateInput(
        { data: nodeInput(), origin: `deno` },
        recordOriginOptions(forcedOrigins),
      )
      expect(forcedOrigins).toEqual([`deno`])
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

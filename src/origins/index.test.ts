import { describe, expect, test, vi } from 'vitest'
import { parseExampleFilename } from '../cli/examples.ts'
import { aggregateInput } from '../formats/index.ts'
import {
  injectedFormat,
  injectedInputs,
  readInput,
} from '../formats/testing.ts'
import { modalitySpecOf } from '../modalities/registry.ts'
import type { AggregatedInput } from '../modalities/registry.ts'
import { normalizeProfileToMdOptions } from '../options.ts'
import type { NormalizedProfileToMdOptions } from '../options.ts'
import {
  categorizeHeapSnapshotConstructorForOrigin,
  OriginDetector,
} from './index.ts'
import type { Origin } from './index.ts'
import { pprofJlOriginSpec } from './specs/pprof-jl.ts'

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
  // Aggregating an input is the most expensive step of the suite, so one test
  // per example aggregates each of its inputs once for every assertion.
  describe(`aggregated examples`, () => {
    test.each(groupByExample(inputFilenames))(
      `$example resolves to its profiler's origin, categorizes canonically, and pairs every entry whose match key differs only by an address`,
      ({ base, current }) => {
        const matchKeysOf = (filename: string): Set<string> => {
          const inputs = aggregateInput(
            readInput(filename),
            normalizeProfileToMdOptions(),
          )
          expectCanonicalAggregation(filename, inputs)
          return matchKeys(inputs)
        }

        // An example over a project's input budget splits its variants across
        // projects, so the base's project aggregates the current input too.
        if (base === undefined) {
          matchKeysOf(current!)
          return
        }
        const baseKeys = matchKeysOf(base)
        const currentKeys =
          current === undefined
            ? matchKeys(
                aggregateInput(
                  readInput(base.replace(`.base.`, `.current.`)),
                  normalizeProfileToMdOptions(),
                ),
              )
            : matchKeysOf(current)

        expect(unpairedAddressVariants(baseKeys, currentKeys)).toEqual([])
      },
    )
  })
}

/**
 * The inputs of one example a project received. An example has at least one of
 * them.
 */
type ExampleInputs = { example: string; base?: string; current?: string }

/** Groups inputs by example, the filename with its variant removed. */
const groupByExample = (filenames: string[]): ExampleInputs[] => {
  const examples = new Map<string, ExampleInputs>()
  for (const filename of filenames) {
    const { variant } = parseExampleFilename(filename)
    const example = filename.replace(`.${variant}.`, `.`)
    const group = examples.get(example) ?? { example }
    if (variant === `base` || variant === `current`) {
      group[variant] = filename
    }
    examples.set(example, group)
  }
  return [...examples.values()]
}

/**
 * Asserts that an input resolves to the origin in its filename, files its
 * positions in the right slots, and uses only the closed category sets.
 */
const expectCanonicalAggregation = (
  filename: string,
  inputs: AggregatedInput[],
): void => {
  // Every committed input must resolve to the origin in its filename: one
  // that doesn't needs a marker entry, a parser origin hint, or a more
  // realistic workload before it's committed. A multi-profile input
  // aggregates each profile under its own context, so each must resolve
  // to the filename's origin. An input with no profiling data aggregates
  // to nothing and has no origin to check.
  const { origin } = parseExampleFilename(filename)
  const unexpectedOrigins = inputs
    .map(input => input.context.origin)
    .filter(resolved => resolved !== origin)
  expect(new Set(unexpectedOrigins)).toEqual(new Set())

  // The category sets are closed so that formatting can partition by
  // category, but the origins reach them through casts that types alone
  // don't check. `syntheticFrameCategory` promotes a frame's `(label)` to a
  // function category. Julia writes Julia's types into V8's
  // `meta.node_types`, and a format declaring its own node type names reaches
  // the node categories through its origin, which types can't check against
  // the names an input contains.
  const unexpectedCategories = inputs.flatMap(input => {
    const modalitySpec = modalitySpecOf(input)
    const categories: ReadonlySet<string> = new Set(
      modalitySpec.categorySet.categories,
    )
    return [...modalitySpec.categories(input)].filter(
      category => !categories.has(category),
    )
  })
  expect(new Set(unexpectedCategories)).toEqual(new Set())

  // A function executes at or after its definition, so an executing
  // line before the definition line is a position in the wrong
  // `StackFrame` slot. A parser or normalizer misread what the emitter
  // records there (see the normalizing principles in `CLAUDE.md`).
  // V8 attributes an inlined or deoptimized tick to the enclosing
  // function at the sampled script position, so real profiles contain
  // a few correct lines before the definition line. The assertion
  // therefore bounds the rate instead of forbidding every case. A slot
  // misfiled wholesale pushes the rate toward 100%, and V8's
  // attributions are under 6% of the node inputs' executing lines.
  //
  // PProf.jl is exempt, because Julia attributes macro-expanded code to
  // the macro's own lines. For example, JSON3's `@writechar` body is
  // attributed under every `write` method that splices it. PProf.jl
  // profiles also contain few functions with both positions, and the
  // two together exceed any rate a misfiled slot stays under.
  if (origin !== pprofJlOriginSpec.id) {
    const { executingLineCount, misfiledPositions } =
      executingLinesBeforeDefinition(inputs)
    if (misfiledPositions.length > executingLineCount * 0.2) {
      expect(misfiledPositions).toEqual([])
    }
  }
}

/**
 * The match key of every entry a diff pairs by key, except an unsymbolized
 * frame named by its address alone. Such an address has no stable form without
 * the library's load address, so the diff leaves it unpaired.
 */
const matchKeys = (inputs: AggregatedInput[]): Set<string> => {
  const options = normalizeProfileToMdOptions()
  const keys = new Set<string>()
  for (const input of inputs) {
    for (const entry of modalitySpecOf(input).entries(input)) {
      const { name, nameAndLocation } = options.entryMatchKeys(
        entry,
        input.context,
      )
      if (!UNSYMBOLIZED_ADDRESS.test(name)) {
        keys.add(nameAndLocation)
      }
    }
  }
  return keys
}

/**
 * Describes each base key that an unpaired current key equals once their
 * addresses are masked. Such a pair is one entity whose match key contains an
 * address that differs per run, which the origin's `matchEntry` must strip.
 */
const unpairedAddressVariants = (
  baseKeys: ReadonlySet<string>,
  currentKeys: ReadonlySet<string>,
): string[] => {
  const maskedToBaseKey = new Map<string, string>()
  for (const key of baseKeys) {
    if (!currentKeys.has(key)) {
      maskedToBaseKey.set(maskAddresses(key), key)
    }
  }

  const variants: string[] = []
  for (const key of currentKeys) {
    const baseKey = baseKeys.has(key)
      ? undefined
      : maskedToBaseKey.get(maskAddresses(key))
    if (baseKey !== undefined) {
      variants.push(`${baseKey} ↔ ${key}`.replaceAll(`\0`, ` `))
    }
  }
  return variants
}

/**
 * Replaces each `0x` address, and each run of eight or more hex digits
 * containing a decimal digit (a random ID or hash), with `#`. A decimal number
 * alone stays, because a compiler numbers distinct functions the same way
 * (`func1`, `dgm$598`).
 */
const maskAddresses = (key: string): string => key.replaceAll(ADDRESS, `#`)

const ADDRESS = /0x[0-9a-fA-F]+|\b(?=[0-9a-f]*\d)[0-9a-f]{8,}\b/gu
const UNSYMBOLIZED_ADDRESS = /^0x[0-9a-fA-F]+$/u

/**
 * Counts the executing lines of every call stack profile function with a
 * definition line, and describes each executing line before it.
 */
const executingLinesBeforeDefinition = (
  inputs: AggregatedInput[],
): { executingLineCount: number; misfiledPositions: string[] } => {
  let executingLineCount = 0
  const misfiledPositions: string[] = []
  for (const input of inputs) {
    if (input.type !== `call-stack-profile`) {
      continue
    }
    for (const func of input.functions) {
      const definitionLine = func.location?.line
      if (definitionLine === undefined) {
        continue
      }
      for (const line of func.lineToMetrics.keys()) {
        executingLineCount++
        if (line < definitionLine) {
          misfiledPositions.push(
            `${func.name} defined at ${definitionLine}, executing at ${line}`,
          )
        }
      }
    }
  }
  return { executingLineCount, misfiledPositions }
}

if (format === undefined) {
  describe(`origin threading`, () => {
    const nodeInput = (): Uint8Array =>
      readInput(`javascript.node.base.cpuprofile`)

    test(`an explicit origin overrides detection and reaches categorizeFunctions`, () => {
      const detectedOrigins: Origin[] = []
      aggregateInput(nodeInput(), recordOriginOptions(detectedOrigins))
      expect(detectedOrigins).toEqual([`node`])

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
          categorizeHeapSnapshotConstructorForOrigin(`Array`, origin),
        ).toBe(`array`)
      },
    )

    test(`an origin observing another language leaves the format's category`, () => {
      // Julia writes V8-format snapshots, whose class names are Julia's.
      expect(
        categorizeHeapSnapshotConstructorForOrigin(`Array`, `profile-jl`),
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

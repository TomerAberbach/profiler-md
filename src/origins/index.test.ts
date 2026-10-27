import { describe, expect, test, vi } from 'vitest'
import { aggregateInput } from '../formats/index.ts'
import { readInput } from '../formats/testing.ts'
import { normalizeProfileToMdOptions } from '../options.ts'
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

describe(`origin threading`, () => {
  const nodeInput = (): Uint8Array =>
    readInput(`javascript.node.base.cpuprofile`)

  test(`an explicit origin overrides detection and reaches categorizeFunctions`, () => {
    const detectedOrigins: Origin[] = []
    aggregateInput(nodeInput(), recordOriginOptions(detectedOrigins))
    expect(detectedOrigins).toStrictEqual([`node`])

    const specifiedOrigins: Origin[] = []
    aggregateInput(
      { data: nodeInput(), origin: `deno` },
      recordOriginOptions(specifiedOrigins),
    )
    expect(specifiedOrigins).toStrictEqual([`deno`])
  })
})

describe(`heap snapshot constructor categorization`, () => {
  test.each<Origin>([`node`, `chrome`, `bun`, `safari`])(
    `%s categorizes JavaScript's own classes`,
    origin => {
      expect(categorizeHeapSnapshotConstructorForOrigin(`Array`, origin)).toBe(
        `array`,
      )
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

  test(`a specified origin ignores the hint`, () => {
    const detector = new OriginDetector({ format: `pprof`, origin: `go` })
    detector.hint(`gperftools`)
    expect(detector.resolve()).toBe(`go`)
  })

  test(`a higher-priority origin's marker entry overrides the hint`, () => {
    const detector = new OriginDetector({ format: `pprof`, origin: null })
    detector.hint(`gperftools`)
    detector.add({
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

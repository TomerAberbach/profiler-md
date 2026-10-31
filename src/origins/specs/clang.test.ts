import { describe, expect, test } from 'vitest'
import type { TraceSpan } from '../../modalities/trace/type.ts'
import { determineOrigin } from '../testing.ts'
import { clangOriginSpec } from './clang.ts'

describe(`detection`, () => {
  test.each([
    `clang`,
    `clang-19`,
    `clang++`,
    `clang.exe`,
    `clang++.exe`,
    `clang-cl.exe`,
  ])(`detects Clang by the process name origin hint %s`, hint => {
    expect(determineOrigin({ format: `trace-event`, entries: [], hint })).toBe(
      `clang`,
    )
  })

  test.each([`clangd`, `clang-tidy`, `clang-format`, `clang-19.1`, `clang-`])(
    `falls back past Clang for the hint %s`,
    hint => {
      expect(
        determineOrigin({ format: `trace-event`, entries: [], hint }),
      ).toBe(`chrome`)
    },
  )

  test(`markerless: an unhinted trace falls back past Clang`, () => {
    expect(determineOrigin({ format: `trace-event`, entries: [] })).toBe(
      `chrome`,
    )
  })
})

describe(`categorizeTraceEvent`, () => {
  const { categorizeTraceEvent } = clangOriginSpec

  test.each([
    `Source`,
    `ParseClass`,
    `ParseFunctionDefinition`,
    `ParseDeclarationOrFunctionDefinition`,
  ])(`%s is parsing`, name => {
    expect(categorizeTraceEvent({ name })).toBe(`parsing`)
  })

  test.each([
    `Frontend`,
    `InstantiateFunction`,
    `PerformPendingInstantiations`,
    `OptFunction`,
    `RunPass`,
    `CodeGen Function`,
    `ExecuteCompiler`,
    // Only an event named `Source` is a file's parsing.
    `SourceManager`,
  ])(`%s is compilation`, name => {
    expect(categorizeTraceEvent({ name })).toBe(`compilation`)
  })
})

describe(`normalizeTraceEvent`, () => {
  const { normalizeTraceEvent } = clangOriginSpec

  const span = (name: string, args?: Record<string, unknown>): TraceSpan => ({
    type: `span`,
    name,
    start: 0,
    duration: 1000,
    arguments: args,
  })

  test(`drops the event restating a name's summed duration`, () => {
    expect(
      normalizeTraceEvent(span(`Total Source`, { count: 390, 'avg ms': 6 })),
    ).toBeNull()
  })

  test(`keeps an event named Total that states no count and average`, () => {
    const named = span(`Total Recall`, { detail: `x` })
    const counted = span(`Total Recall`, { count: 1 })
    const bare = span(`Total Recall`)

    expect(normalizeTraceEvent(named)).toBe(named)
    expect(normalizeTraceEvent(counted)).toBe(counted)
    expect(normalizeTraceEvent(bare)).toBe(bare)
  })

  test(`keeps an event stating a count and average under another name`, () => {
    const event = span(`Source`, { count: 1, 'avg ms': 1 })

    expect(normalizeTraceEvent(event)).toBe(event)
  })
})

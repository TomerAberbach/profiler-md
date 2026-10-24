import { describe, expect, test } from 'vitest'
import { determineOrigin } from '../testing.ts'
import { tscOriginSpec } from './tsc.ts'

describe(`detection`, () => {
  test(`detects the TypeScript compiler by the process name origin hint`, () => {
    expect(
      determineOrigin({ format: `trace-event`, entries: [], hint: `tsc` }),
    ).toBe(`tsc`)
  })

  test(`markerless: an unhinted trace falls back past the TypeScript compiler`, () => {
    expect(determineOrigin({ format: `trace-event`, entries: [] })).toBe(
      `chrome`,
    )
  })
})

describe(`categorizeTraceEvent`, () => {
  const { categorizeTraceEvent } = tscOriginSpec

  test(`an event of the parse phase is parsing`, () => {
    expect(
      categorizeTraceEvent({
        name: `createSourceFile`,
        declaredCategories: [`parse`],
      }),
    ).toBe(`parsing`)
  })

  test.each([`program`, `bind`, `check`, `checkTypes`, `emit`])(
    `an event of the %s phase is compilation`,
    phase => {
      expect(
        categorizeTraceEvent({ name: `event`, declaredCategories: [phase] }),
      ).toBe(`compilation`)
    },
  )

  test(`an event stating no phase is compilation`, () => {
    expect(categorizeTraceEvent({ name: `parse` })).toBe(`compilation`)
  })
})

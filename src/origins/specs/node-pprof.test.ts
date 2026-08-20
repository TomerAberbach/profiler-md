import { describe, expect, test } from 'vitest'
import type { StackFrame } from '../../modalities/stack-frame.ts'
import type { ProfileEntry } from '../../options.ts'
import { absoluteEntry, determineOrigin, relativeEntry } from '../testing.ts'
import { nodePprofOriginSpec } from './node-pprof.ts'

describe(`detection`, () => {
  test.each<[string, ProfileEntry]>([
    [`its Node.js label`, relativeEntry(`Node.js`)],
    [`its Garbage Collection label`, relativeEntry(`Garbage Collection`)],
    [
      `a node_modules/ path`,
      absoluteEntry(`f`, `file:///app/node_modules/x.js`),
    ],
  ])(`detects node-pprof by %s`, (_description, entry) => {
    expect(determineOrigin({ format: `pprof`, entries: [entry] })).toBe(
      `node-pprof`,
    )
  })
})

describe(`normalizeStackFrame`, () => {
  const { normalizeStackFrame } = nodePprofOriginSpec

  test(`moves a dd-trace packed anonymous frame's position into the location`, () => {
    expect(
      normalizeStackFrame({
        name: `(anonymous:L#122135:C#9)`,
        location: { type: `file`, urlOrPath: `file:///app/src/index.js` },
      }),
    ).toEqual({
      name: `(anonymous)`,
      location: {
        type: `file`,
        urlOrPath: `file:///app/src/index.js`,
        line: 122_135,
        column: 9,
      },
    })
  })

  test(`leaves an unpacked frame unchanged`, () => {
    const input: StackFrame = {
      name: `parse`,
      location: { type: `file`, urlOrPath: `file:///app/src/index.js` },
    }

    expect(normalizeStackFrame(input)).toBe(input)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = nodePprofOriginSpec

  test(`the package's Garbage Collection frame is the garbage collector`, () => {
    expect(categorizeEntry(relativeEntry(`Garbage Collection`))).toBe(
      `garbage-collector`,
    )
  })

  test(`node: builtins are stdlib`, () => {
    expect(categorizeEntry(absoluteEntry(`f`, `node:fs`))).toBe(`stdlib`)
  })

  test(`node_modules/ is third-party`, () => {
    expect(
      categorizeEntry(
        absoluteEntry(`f`, `file:///app/node_modules/x/index.js`),
      ),
    ).toBe(`third-party`)
  })
})

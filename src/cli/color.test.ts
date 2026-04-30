import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { makeAnsis } from './color.ts'

const stdout = process.stdout as Omit<
  NodeJS.WriteStream,
  `isTTY` | `getColorDepth`
> & { isTTY?: boolean; getColorDepth?: () => number }

afterEach(() => {
  vi.unstubAllEnvs()
  stdout.isTTY = undefined
  stdout.getColorDepth = undefined
})

test(`produces no color for file output even with stdout TTY`, () => {
  stdout.isTTY = true

  const ansis = makeAnsis({
    outputPath: `output.md`,
    color: undefined,
  })

  expect(ansis.level).toBe(0)
})

test(`produces no color for stdout without a TTY`, () => {
  const ansis = makeAnsis({
    outputPath: `-`,
    color: undefined,
  })

  expect(ansis.level).toBe(0)
})

describe(`TTY color depth`, () => {
  beforeEach(() => {
    stdout.isTTY = true
  })

  test.each([
    { depth: 1, expectedLevel: 1 },
    { depth: 4, expectedLevel: 1 },
    { depth: 8, expectedLevel: 2 },
    { depth: 16, expectedLevel: 2 },
    { depth: 24, expectedLevel: 3 },
    { depth: 32, expectedLevel: 3 },
  ])(
    `depth $depth maps to level $expectedLevel`,
    ({ depth, expectedLevel }) => {
      stdout.getColorDepth = () => depth

      const ansis = makeAnsis({
        outputPath: `-`,
        color: undefined,
      })

      expect(ansis.level).toBe(expectedLevel)
    },
  )
})

test(`NO_COLOR forces level 0 even with stdout TTY`, () => {
  stdout.isTTY = true
  vi.stubEnv(`NO_COLOR`, `1`)

  const ansis = makeAnsis({
    outputPath: `-`,
    color: undefined,
  })

  expect(ansis.level).toBe(0)
})

test(`color: false forces level 0 even with stdout TTY`, () => {
  stdout.isTTY = true

  const ansis = makeAnsis({
    outputPath: `-`,
    color: false,
  })

  expect(ansis.level).toBe(0)
})

test(`color: true bumps level to at least 1 on non-TTY output`, () => {
  const ansis = makeAnsis({
    outputPath: `output.md`,
    color: true,
  })

  expect(ansis.level).toBe(1)
})

test(`color: true overrides NO_COLOR`, () => {
  vi.stubEnv(`NO_COLOR`, `1`)

  const ansis = makeAnsis({
    outputPath: `output.md`,
    color: true,
  })

  expect(ansis.level).toBe(1)
})

test.each([
  { forceColor: `0`, expectedLevel: 0 },
  { forceColor: `false`, expectedLevel: 0 },
  { forceColor: `1`, expectedLevel: 1 },
  { forceColor: `true`, expectedLevel: 1 },
  { forceColor: `2`, expectedLevel: 2 },
  { forceColor: `3`, expectedLevel: 3 },
])(
  `FORCE_COLOR=$forceColor sets level to $expectedLevel`,
  ({ forceColor, expectedLevel }) => {
    vi.stubEnv(`FORCE_COLOR`, forceColor)

    const ansis = makeAnsis({
      outputPath: `output.md`,
      color: undefined,
    })

    expect(ansis.level).toBe(expectedLevel)
  },
)

test(`FORCE_COLOR overrides color: false`, () => {
  vi.stubEnv(`FORCE_COLOR`, `2`)

  const ansis = makeAnsis({
    outputPath: `output.md`,
    color: false,
  })

  expect(ansis.level).toBe(2)
})

test(`FORCE_COLOR overrides color: true and NO_COLOR`, () => {
  vi.stubEnv(`FORCE_COLOR`, `0`)
  vi.stubEnv(`NO_COLOR`, `1`)

  const ansis = makeAnsis({
    outputPath: `output.md`,
    color: true,
  })

  expect(ansis.level).toBe(0)
})

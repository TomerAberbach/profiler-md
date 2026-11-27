import { expect, test } from 'vitest'
import { uncoveredLines } from './coverage.ts'
import type { CoverageRange } from './coverage.ts'

const source = [
  `if (isRare) {`,
  `  // A comment`,
  `  rare()`,
  `}`,
  `always()`,
].join(`\n`)

const wholeSource = { startOffset: 0, endOffset: source.length }

const rareBlock = {
  startOffset: source.indexOf(`{`),
  endOffset: source.indexOf(`}`) + 1,
}

const executedThread: CoverageRange[] = [{ ...wholeSource, count: 1 }]
const skippedThread: CoverageRange[] = [
  { ...rareBlock, count: 0 },
  { ...wholeSource, count: 1 },
]

test.each([
  {
    scenario: `a block no thread executed`,
    threads: [skippedThread, skippedThread],
    expected: [3],
  },
  {
    scenario: `a block one thread executed`,
    threads: [skippedThread, executedThread],
    expected: [],
  },
])(`uncoveredLines of $scenario`, ({ threads, expected }) => {
  const lines = uncoveredLines(source, threads)

  expect([...lines]).toStrictEqual(expected)
})

test(`uncoveredLines of a file no thread loaded are its lines of code`, () => {
  const unloaded = [
    `type Frame = { name: string }`,
    `/* A comment */`,
    `export const nameOf = (frame: Frame) => frame.name`,
  ].join(`\n`)

  const lines = uncoveredLines(unloaded, [])

  expect([...lines]).toStrictEqual([3])
})

test(`uncoveredLines include a generator method and code after a comment`, () => {
  const unloaded = [
    `class Frames {`,
    `  *names() {`,
    `    /* All */ yield 1`,
    `  }`,
    `}`,
  ].join(`\n`)

  const lines = uncoveredLines(unloaded, [])

  expect([...lines]).toStrictEqual([1, 2, 3])
})

import { expect, test } from 'vitest'
import { outputFilenames, readOutput } from './outputs.ts'
import { repeatedSentences } from './repetition.ts'

test(`a sentence restated in a nested section is repeated`, () => {
  const markdown = [
    `# Profile`,
    `Took 2s. Paths are relative.`,
    `## Functions`,
    `### Self`,
    `Largest first. Paths are relative.`,
  ].join(`\n\n`)

  const repeated = repeatedSentences(markdown)

  expect(repeated).toStrictEqual([`Paths are relative.`])
})

test(`a sentence restated in its own section is repeated`, () => {
  const markdown = [`# Profile`, `Took 2s.`, `Took 2s.`].join(`\n\n`)

  const repeated = repeatedSentences(markdown)

  expect(repeated).toStrictEqual([`Took 2s.`])
})

test(`a sentence that opens sibling sections is not repeated`, () => {
  const markdown = [
    `# Profile`,
    `## Self`,
    `Largest first.`,
    `## Total`,
    `Largest first.`,
  ].join(`\n\n`)

  const repeated = repeatedSentences(markdown)

  expect(repeated).toStrictEqual([])
})

test.each(outputFilenames)(`%s repeats no sentence`, filename => {
  const markdown = readOutput(filename)

  const repeated = repeatedSentences(markdown)

  expect(repeated).toStrictEqual([])
})

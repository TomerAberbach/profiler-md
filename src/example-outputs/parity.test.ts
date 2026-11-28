import { expect, test } from 'vitest'
import { exampleDiffPairs } from '../formats/examples.ts'
import type { ExampleDiffPair } from '../formats/examples.ts'
import { outputFilenames, readOutput } from './outputs.ts'
import { shownOnOneForm } from './parity.ts'

/**
 * The differences that may remain. Accept one only where the two forms should
 * differ, and otherwise make it a `todo`. In a comment above the entry, explain
 * why they should differ, or link the issue that removes the difference.
 */
const EXCEPTIONS: ReadonlyMap<string, `accepted` | `todo`> = new Map([
  // Only an instance's attributes can identify it in another run, and the
  // diff's attribute breakdowns compare those.
  [
    `only single: Trace › Longest thread spans › Total time › Longest instances`,
    `accepted`,
  ],
  // Only an instance's attributes can identify it in another run, and the
  // diff's attribute breakdowns compare those.
  [
    `only single: Trace › Longest async spans › Elapsed time › Longest instances`,
    `accepted`,
  ],
  // A diff shows `Path to function` instead, because past the function the path
  // depends on which instance retains the node and on how the function is
  // retained.
  [
    `only single: Heap snapshot › Largest functions › Retained nodes › Path`,
    `accepted`,
  ],
  // A diff's path ends at the function, because the rest depends on which
  // instance retains the node and on how the function is retained.
  [
    `only diff: Heap snapshot › Largest functions › Retained nodes › Path to function`,
    `accepted`,
  ],
  // In cpp.gperftools.heap, only the standard library is large enough for a
  // subsection, and none of its functions differs.
  [
    `only single: Allocated heap profile › Hottest functions › Total size › category subsections`,
    `accepted`,
  ],
  // A diff merges the strings whose values are unknown into one row, which the
  // column labels.
  [`only diff: Heap snapshot › Largest strings › Value`, `accepted`],
])

const table = (...columns: string[]): string =>
  [columns, columns.map(() => `---`), columns.map(() => `1`)]
    .map(cells => `| ${cells.join(` | `)} |`)
    .join(`\n`)

test(`a diff with the sections and columns of its single outputs has no difference`, () => {
  const single = [`# Profile`, `## Functions`, table(`%`, `Time`)].join(`\n\n`)
  const diff = [
    `# Profile diff`,
    `## Functions`,
    `### Regressions`,
    table(`Change`, `Delta`, `%`, `Time`),
  ].join(`\n\n`)

  const differences = shownOnOneForm({ singles: [single], diff })

  expect(differences).toStrictEqual({ onlySingle: [], onlyDiff: [] })
})

test(`a column and a section only the single output shows are differences`, () => {
  const single = [
    `# Profile`,
    `## Functions`,
    table(`%`, `Samples`),
    `### Lines`,
    table(`Line`),
  ].join(`\n\n`)
  const diff = [`# Profile diff`, `## Functions`, table(`%`)].join(`\n\n`)

  const differences = shownOnOneForm({ singles: [single], diff })

  expect(differences).toStrictEqual({
    onlySingle: [
      `Profile › Functions › Samples`,
      `Profile › Functions › Lines`,
    ],
    onlyDiff: [],
  })
})

test(`category subsections only the single output shows are a difference`, () => {
  const single = [
    `# Profile`,
    `## Functions`,
    table(`%`),
    `### Categories`,
    `#### Ours`,
    table(`%`),
  ].join(`\n\n`)
  const diff = [`# Profile diff`, `## Functions`, table(`%`)].join(`\n\n`)

  const differences = shownOnOneForm({ singles: [single], diff })

  expect(differences).toStrictEqual({
    onlySingle: [`Profile › Functions › category subsections`],
    onlyDiff: [],
  })
})

test(`a column only the diff shows is a difference`, () => {
  const single = [`# Profile`, `## Functions`, table(`%`)].join(`\n\n`)
  const diff = [
    `# Profile diff`,
    `## Functions`,
    table(`Change`, `%`, `Count`),
  ].join(`\n\n`)

  const differences = shownOnOneForm({ singles: [single], diff })

  expect(differences).toStrictEqual({
    onlySingle: [],
    onlyDiff: [`Profile › Functions › Count`],
  })
})

test(`a section whose ranking did not differ has no difference`, () => {
  const single = [
    `# Profile`,
    `## Functions`,
    table(`%`),
    `### Lines`,
    table(`Line`),
  ].join(`\n\n`)
  const diff = [`# Profile diff`, `## Functions`, `No function differed.`].join(
    `\n\n`,
  )

  const differences = shownOnOneForm({ singles: [single], diff })

  expect(differences).toStrictEqual({ onlySingle: [], onlyDiff: [] })
})

// Each pair's test and the test of the exceptions share a pair's differences,
// because computing every pair's in one test takes longer than its timeout on a
// slow machine.
const pairToDifferences = new Map<ExampleDiffPair, string[]>()

const differencesOf = (pair: ExampleDiffPair): string[] => {
  let differences = pairToDifferences.get(pair)
  if (!differences) {
    differences = computeDifferences(pair)
    pairToDifferences.set(pair, differences)
  }
  return differences
}

const computeDifferences = ({
  name,
  ext,
  base,
  current,
}: ExampleDiffPair): string[] => {
  const { onlySingle, onlyDiff } = shownOnOneForm({
    singles: [readOutput(base), readOutput(current)],
    diff: readOutput(`${name}.diff.${ext}`),
  })
  return [
    ...onlySingle.map(path => `only single: ${path}`),
    ...onlyDiff.map(path => `only diff: ${path}`),
  ]
}

const pairs = exampleDiffPairs(outputFilenames)

test.each(pairs)(
  `the $name diff of $ext shows the sections and columns of its single outputs`,
  pair => {
    const differences = differencesOf(pair)

    expect(differences.filter(path => !EXCEPTIONS.has(path))).toStrictEqual([])
  },
)

test(`every exception is in an example`, () => {
  const differences = new Set(pairs.flatMap(differencesOf))

  expect(
    [...EXCEPTIONS.keys()].filter(path => !differences.has(path)),
  ).toStrictEqual([])
})

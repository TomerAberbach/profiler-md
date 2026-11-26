import { expect, test } from 'vitest'
import { diffMarkdown } from './changes.ts'
import { labelOf } from './kinds.ts'

const rankingWith = (columns: string[], ...rows: string[]): string =>
  [
    `# Profile`,
    ``,
    `## Hottest functions`,
    ``,
    `| ${columns.join(` | `)} |`,
    `| --: |${` --- |`.repeat(columns.length - 1)}`,
    ...rows,
  ].join(`\n`)

const ranking = (...rows: string[]): string =>
  rankingWith([`Time`, `Function`], ...rows)

test(`identical outputs have no changes`, () => {
  const markdown = ranking(`| 2s | \`a\` |`)

  const changes = diffMarkdown(markdown, markdown)

  expect(changes).toStrictEqual([])
})

test(`a changed cell records its row on both sides`, () => {
  const before = ranking(`| 9s | \`a\` |`)
  const after = ranking(`| 8s | \`a\` |`)

  const changes = diffMarkdown(before, after)

  expect(
    changes.map(({ excerpt, ...change }) => ({
      ...change,
      excerpt: excerpt(),
    })),
  ).toStrictEqual([
    {
      group: `contents`,
      kinds: [{ noun: `cells`, name: `"Time"`, verb: `changed` }],
      path: [`Profile`, `Hottest functions`],
      excerpt: {
        type: `table`,
        columns: [
          { before: `Time`, after: `Time`, numeric: true },
          { before: `Function`, after: `Function`, numeric: false },
        ],
        rows: [
          {
            action: `changed`,
            cells: [
              { before: `9s`, after: `8s` },
              { before: `\`a\``, after: `\`a\`` },
            ],
          },
        ],
      },
    },
  ])
})

test.each([
  {
    scenario: `a removed column`,
    before: rankingWith(
      [`Time`, `Function`],
      `| 9s | \`a\` |`,
      `| 1s | \`b\` |`,
    ),
    after: rankingWith([`Time`], `| 9s |`, `| 1s |`),
    expected: [`column "Function" removed`],
  },
  {
    scenario: `a renamed column`,
    before: rankingWith([`Time`, `Function`], `| 9s | \`a\` |`),
    after: rankingWith([`Elapsed`, `Function`], `| 9s | \`a\` |`),
    expected: [`column "Time" renamed to "Elapsed"`],
  },
  {
    scenario: `a row whose name changes`,
    before: ranking(`| 9s | \`a\` |`),
    after: ranking(`| 9s | \`b\` |`),
    expected: [`cells "Function" changed`],
  },
  {
    scenario: `a row whose only common values are its numbers`,
    before: rankingWith([`Time`, `Function`, `Location`], `| 9s | a | a.ts |`),
    after: rankingWith([`Time`, `Function`, `Location`], `| 9s | b | b.ts |`),
    expected: [`rows removed`, `rows added`],
  },
  {
    scenario: `several rows with the same numbers whose names change`,
    before: ranking(`| 9s | \`a\` |`, `| 9s | \`b\` |`),
    after: ranking(`| 9s | \`c\` |`, `| 9s | \`d\` |`),
    expected: [`cells "Function" changed`, `cells "Function" changed`],
  },
  {
    scenario: `rows with neither names nor numbers in common`,
    before: ranking(`| 9s | \`a\` |`),
    after: ranking(`| 8s | \`b\` |`),
    expected: [`rows removed`, `rows added`],
  },
  {
    scenario: `reordered rows`,
    before: ranking(`| 1s | \`a\` |`, `| 1s | \`b\` |`),
    after: ranking(`| 1s | \`b\` |`, `| 1s | \`a\` |`),
    expected: [`rows reordered`],
  },
  {
    scenario: `a cell with an escaped pipe`,
    before: ranking(String.raw`| 9s | a\|b |`),
    after: ranking(String.raw`| 9s | a\|c |`),
    expected: [`cells "Function" changed`],
  },
  {
    scenario: `an added section with nested content`,
    before: `# Profile`,
    after: `# Profile\n\n## Categories\n\nText.\n\n### Ours\n\nText.`,
    expected: [`section "Categories" added`],
  },
  {
    scenario: `a section renamed around the same body`,
    before: `# Profile\n\n## Old\n\nText.`,
    after: `# Profile\n\n## New\n\nText.`,
    expected: [`section "Old" renamed to "New"`],
  },
  {
    scenario: `added sections of two entities`,
    before: `# Profile\n\n## Callers`,
    after: `# Profile\n\n## Callers\n\n### \`a\` (\`a.ts\`)\n\n### \`b\` (\`b.ts\`)`,
    expected: [`section … added`, `section … added`],
  },
  {
    scenario: `reordered sections`,
    before: `# Profile\n\n## A\n\n## B`,
    after: `# Profile\n\n## B\n\n## A`,
    expected: [`sections reordered`],
  },
  {
    scenario: `a paragraph and a code block containing a heading's marker`,
    before: `# Profile\n\nTook 1s.\n\n\`\`\`\n# a\n\`\`\``,
    after: `# Profile\n\nTook 2s.\n\n\`\`\`\n# b\n\`\`\``,
    expected: [`values in a paragraph changed`, `code block changed`],
  },
  {
    scenario: `a reworded paragraph`,
    before: `# Profile\n\nTook 1s.`,
    after: `# Profile\n\nLasted 1s.`,
    expected: [`paragraph changed`],
  },
  {
    scenario: `a paragraph and a code block that swap places`,
    before: `# Profile\n\nText.\n\n\`\`\`\na\n\`\`\``,
    after: `# Profile\n\n\`\`\`\na\n\`\`\`\n\nText.`,
    expected: [`blocks reordered`],
  },
  {
    scenario: `a paragraph that moves past a table whose cell changes`,
    before: `# Profile\n\nText.\n\n| Time |\n| --: |\n| 1s |`,
    after: `# Profile\n\n| Time |\n| --: |\n| 2s |\n\nText.`,
    expected: [`cells "Time" changed`, `blocks reordered`],
  },
  {
    scenario: `code blocks that swap places`,
    before: `# Profile\n\n\`\`\`\na\n\`\`\`\n\n\`\`\`\nb\n\`\`\``,
    after: `# Profile\n\n\`\`\`\nb\n\`\`\`\n\n\`\`\`\na\n\`\`\``,
    expected: [`code blocks reordered`],
  },
  {
    scenario: `whitespace alone`,
    before: `# Profile\n\nText.`,
    after: `# Profile\n\n\nText.`,
    expected: [`layout changed`],
  },
])(`$scenario is labeled as $expected`, ({ before, after, expected }) => {
  const changes = diffMarkdown(before, after)

  expect(changes.flatMap(({ kinds }) => kinds.map(labelOf))).toStrictEqual(
    expected,
  )
})

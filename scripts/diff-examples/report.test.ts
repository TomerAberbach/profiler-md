import dedent from 'dedent'
import { expect, test } from 'vitest'
import { formatReports } from './report.ts'
import { summarizeChanges } from './summary.ts'
import type { OutputVersions } from './summary.ts'

const reportOf = (
  outputs: OutputVersions[],
  { regenerated = [] as string[], pullRequestURL = `` } = {},
): string =>
  formatReports(
    [
      {
        id: `0123456789abcdef`,
        subject: `fix: change the examples`,
        summary: summarizeChanges(outputs),
        regenerated,
      },
    ],
    pullRequestURL ? { pullRequestURL } : {},
  )

const profile = (summary: string, ...table: string[]): string =>
  [`# Profile`, summary, `## Functions`, `### Self`, table.join(`\n`)].join(
    `\n\n`,
  )

test(`a commit that changes no example says so`, () => {
  const report = reportOf([])

  expect(report).toBe(`No example output changed.`)
})

test(`a regenerated example is counted and not shown`, () => {
  const report = reportOf([], { regenerated: [`a.md`] })

  expect(report).toBe(dedent`
    ### fix: change the examples

    0 outputs changed at 0123456789ab. 1 output regenerated from a changed input, not shown.
  `)
})

test(`a report outlines the changes, then shows each group's excerpts`, () => {
  const before = [
    `| Time | Calls | Function |`,
    `| --: | --: | --- |`,
    `| 2s | 1 | \`a\` |`,
    `| 1s | 1 | \`b\` |`,
  ]
  const after = [
    `| Time | Function |`,
    `| --: | --- |`,
    `| 2s | \`a\` |`,
    `| 3s | \`b\` |`,
  ]

  const report = reportOf([
    {
      filename: `x.base.md`,
      before: profile(`Took 1s.`, ...before),
      after: profile(`Lasted 1s.`, ...after),
    },
  ])

  expect(report).toBe(
    [
      `### fix: change the examples`,
      ``,
      `1 output changed at 0123456789ab.`,
      ``,
      `\`\`\`diff`,
      `  Profile`,
      `!   paragraph changed (1 output)`,
      `    Functions › Self`,
      `-     column "Calls" removed (1 output)`,
      `!     contents: cells changed in "Time" (1 output)`,
      `\`\`\``,
      ``,
      `#### Structure`,
      ``,
      `<details open>`,
      `<summary><b>column "Calls" removed</b> in Functions › Self, ×1 in 1 output</summary>`,
      ``,
      `In \`x.base.md\`:`,
      ``,
      `|  | Time | <del>Calls</del> | Function |`,
      `| --- | --: | --: | --- |`,
      `|  | 2s | <del>1</del> | \`a\` |`,
      `| → | <del>1s</del> <b>3s</b> | <del>1</del> | \`b\` |`,
      ``,
      `</details>`,
      ``,
      `#### Wording`,
      ``,
      `<details open>`,
      `<summary><b>paragraph changed</b>, ×1 in 1 output</summary>`,
      ``,
      `In \`x.base.md\`:`,
      ``,
      `\`\`\`\`\`diff`,
      `- Took 1s.`,
      `+ Lasted 1s.`,
      `\`\`\`\`\``,
      ``,
      `</details>`,
      ``,
      `#### Contents`,
      ``,
      `<details>`,
      `<summary><b>Functions › Self</b>: cells changed in "Time", ×1 in 1 output</summary>`,
      ``,
      `In \`x.base.md\`:`,
      ``,
      `|  | Time | <del>Calls</del> | Function |`,
      `| --- | --: | --: | --- |`,
      `|  | 2s | <del>1</del> | \`a\` |`,
      `| → | <del>1s</del> <b>3s</b> | <del>1</del> | \`b\` |`,
      ``,
      `</details>`,
    ].join(`\n`),
  )
})

test(`profiles that changed alike share an outline line`, () => {
  const outputs = [`Profile`, `Profile diff`].map(title => ({
    filename: `${title}.md`,
    before: `# ${title}\n\n## Old\n\nText.`,
    after: `# ${title}`,
  }))

  const report = reportOf(outputs)

  expect(report).toContain(
    [
      `\`\`\`diff`,
      `  Profile · Profile diff`,
      `-   section "Old" removed (2 outputs)`,
      `\`\`\``,
    ].join(`\n`),
  )
})

test(`a pull request's report links each excerpt to its file's diff`, () => {
  const filename = `ruby.rbspy.cpu.base.callgrind.md`

  const report = reportOf(
    [{ filename, before: `# Profile`, after: `# Other` }],
    { pullRequestURL: `https://github.com/o/r/pull/1` },
  )

  expect(report).toContain(
    `(https://github.com/o/r/pull/1/files#diff-98edf04671e79733d6b70a6d3752acf22f3693081c4eb3a06fdea8a1f0cbb493)`,
  )
})

test(`the first entry is open when only contents changed`, () => {
  const report = reportOf([
    {
      filename: `a.md`,
      before: `# Profile\n\n## A\n\nTook 1s.\n\n## B\n\nTook 1s.`,
      after: `# Profile\n\n## A\n\nTook 2s.\n\n## B\n\nTook 2s.`,
    },
  ])

  expect(report.match(/<details.*>/gu)).toStrictEqual([
    `<details open>`,
    `<details>`,
  ])
})

const codeBlock = (...lines: string[]): string =>
  [`# Profile`, ``, `\`\`\``, ...lines, `\`\`\``].join(`\n`)

test.each([
  {
    scenario: `an added line`,
    before: codeBlock(`a`, `b`),
    after: codeBlock(`a`, `b`, `c`),
    expected: [`+ c`],
  },
  {
    scenario: `a removed line`,
    before: codeBlock(`a`, `b`),
    after: codeBlock(`a`),
    expected: [`- b`],
  },
  {
    scenario: `a repeated line`,
    before: codeBlock(`a`, `b`),
    after: codeBlock(`a`, `b`, `a`),
    expected: [`+ a`],
  },
  {
    scenario: `long lines that differ at the end`,
    before: codeBlock(`${`x`.repeat(300)}1`),
    after: codeBlock(`${`x`.repeat(300)}2`),
    expected: [`- …${`x`.repeat(30)}1`, `+ …${`x`.repeat(30)}2`],
  },
])(`$scenario shows as $expected`, ({ before, after, expected }) => {
  const report = reportOf([{ filename: `a.md`, before, after }])

  expect(report).toContain(
    [`\`\`\`\`\`diff`, ...expected, `\`\`\`\`\``].join(`\n`),
  )
})

test(`a long cell shows the part that differs`, () => {
  const tableWith = (value: string): string =>
    `# Profile\n\n| Time | Path |\n| --: | --- |\n| 1s | \`${value}\` |`
  const path = `directory/`.repeat(20)

  const report = reportOf([
    {
      filename: `a.md`,
      before: tableWith(`${path}a.ts:1 ← ${path}`),
      after: tableWith(`${path}a.ts:2 ← ${path}`),
    },
  ])

  expect(report).toContain(`a.ts:1 ←`)
  expect(report).toContain(`a.ts:2 ←`)
})

test(`only a row that moved is marked as moved`, () => {
  const tableOf = (...names: string[]): string =>
    [
      `# Profile`,
      ``,
      `| Time | Name |`,
      `| --: | --- |`,
      ...names.map(name => `| 1s | ${name} |`),
    ].join(`\n`)

  const report = reportOf([
    {
      filename: `a.md`,
      before: tableOf(`a`, `b`, `c`, `d`, `e`),
      after: tableOf(`b`, `c`, `d`, `e`, `a`),
    },
  ])

  expect(report.match(/\| ↕.*/gu)).toStrictEqual([`| ↕ | 1s | a |`])
})

test(`an outline keeps a label's groups apart`, () => {
  const report = reportOf([
    {
      filename: `a.md`,
      before: `# P\n\n## \`a\`\n\n## \`b\``,
      after: `# P\n\n## \`b\`\n\n## \`a\``,
    },
    {
      filename: `b.md`,
      before: `# P\n\n## A\n\n## B`,
      after: `# P\n\n## B\n\n## A`,
    },
  ])

  expect(report).toContain(
    [
      `  P`,
      `!   sections reordered (1 output)`,
      `!   contents: sections reordered (1 output)`,
    ].join(`\n`),
  )
})

const manySections = (count: number): OutputVersions[] =>
  Array.from({ length: count }, (_, index) => ({
    filename: `${index}.md`,
    before: `# Profile`,
    after: `# Profile\n\n## ${`Section ${index} `.repeat(20)}`,
  }))

test(`a comment omits the entries that do not fit, and names their commit`, () => {
  const report = reportOf(manySections(400), {
    pullRequestURL: `https://github.com/o/r/pull/1`,
  })

  expect(report.length).toBeLessThan(65_536)
  expect(report).toContain(
    `Run \`pnpm diff-examples 0123456789ab\` for the changes not shown here:`,
  )
})

test(`a comment omits the commits that do not fit`, () => {
  const reports = Array.from({ length: 400 }, (_, index) => ({
    id: String(index).padStart(40, `0`),
    subject: `fix: change the examples `.repeat(20),
    summary: summarizeChanges(manySections(3)),
    regenerated: [],
  }))

  const report = formatReports(reports, {
    pullRequestURL: `https://github.com/o/r/pull/1`,
  })

  expect(report.length).toBeLessThan(65_536)
  expect(report).toContain(`Commits not shown: `)
})

test(`a report outside a pull request omits no entry`, () => {
  const report = reportOf(manySections(400))

  expect(report.match(/<details/gu)).toHaveLength(400)
  expect(report).not.toContain(`not shown`)
})

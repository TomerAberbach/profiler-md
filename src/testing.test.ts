import dedent from 'dedent'
import { describe, expect, test } from 'vitest'
import {
  categoryTables,
  profileTitles,
  rankingTables,
  summaryLines,
} from './testing.ts'

describe(`profileTitles`, () => {
  test(`returns [] for empty string`, () => {
    const titles = profileTitles(``)

    expect(titles).toStrictEqual([])
  })

  test(`returns H1 text values`, () => {
    const titles = profileTitles(dedent`
      # CallStackProfile One

      # CallStackProfile Two
    `)

    expect(titles).toStrictEqual([
      `CallStackProfile One`,
      `CallStackProfile Two`,
    ])
  })

  test(`ignores H2 and H3 headings`, () => {
    const titles = profileTitles(dedent`
      # Top

      ## Section

      ### Sub
    `)

    expect(titles).toStrictEqual([`Top`])
  })
})

describe(`summaryLines`, () => {
  test(`returns [] for empty string`, () => {
    const lines = summaryLines(``)

    expect(lines).toStrictEqual([])
  })

  test(`returns first paragraph after each H1`, () => {
    const lines = summaryLines(dedent`
      # CallStackProfile One

      Summary one.

      # CallStackProfile Two

      Summary two.
    `)

    expect(lines).toStrictEqual([`Summary one.`, `Summary two.`])
  })

  test(`skips H1 immediately followed by a heading`, () => {
    const lines = summaryLines(dedent`
      # CallStackProfile One

      ## Subheading

      Some text.
    `)

    expect(lines).toStrictEqual([])
  })
})

describe(`categoryTables`, () => {
  test(`returns [] when no H1`, () => {
    const tables = categoryTables(dedent`
      ## Section

      | A | B |
      | --- | --- |
      | 1 | 2 |
    `)

    expect(tables).toStrictEqual([])
  })

  test(`returns [] when H1 has no table`, () => {
    const tables = categoryTables(dedent`
      # CallStackProfile

      Just text.
    `)

    expect(tables).toStrictEqual([])
  })

  test(`returns parsed rows from the table immediately after each H1`, () => {
    const tables = categoryTables(dedent`
      # CallStackProfile

      | Category | Count |
      | --- | --- |
      | JavaScript | 3 |
    `)

    expect(tables).toStrictEqual([[{ Category: `JavaScript`, Count: `3` }]])
  })

  test(`does not pick up a table under a sub-heading`, () => {
    const tables = categoryTables(dedent`
      # CallStackProfile

      ## Section

      | Category | Count |
      | --- | --- |
      | JavaScript | 3 |
    `)

    expect(tables).toStrictEqual([])
  })

  test(`multiple H1s each contribute one table`, () => {
    const tables = categoryTables(dedent`
      # CallStackProfile A

      | Category | Count |
      | --- | --- |
      | A | 1 |

      # CallStackProfile B

      | Category | Count |
      | --- | --- |
      | B | 2 |
    `)

    expect(tables).toStrictEqual([
      [{ Category: `A`, Count: `1` }],
      [{ Category: `B`, Count: `2` }],
    ])
  })
})

describe(`rankingTables`, () => {
  test(`returns [] when the section heading is absent`, () => {
    const tables = rankingTables(
      dedent`
        ### Regressions

        | Function | Delta |
        | --- | --- |
        | foo | +1ms |
      `,
      `Self time`,
      `Regressions`,
    )

    expect(tables).toStrictEqual([])
  })

  test(`returns [] when the section has no Regressions sub-heading`, () => {
    const tables = rankingTables(
      dedent`
        ### Self time

        #### Improvements

        | Function | Delta |
        | --- | --- |
        | foo | -1ms |
      `,
      `Self time`,
      `Regressions`,
    )

    expect(tables).toStrictEqual([])
  })

  test(`returns parsed rows from the Regressions table within the section`, () => {
    const tables = rankingTables(
      dedent`
        ### Self time

        #### Regressions

        Some description.

        | Function | Delta |
        | --- | --- |
        | foo | +1ms |
      `,
      `Self time`,
      `Regressions`,
    )

    expect(tables).toStrictEqual([[{ Function: `foo`, Delta: `+1ms` }]])
  })

  test(`does not cross into the next section`, () => {
    const tables = rankingTables(
      dedent`
        ### Self time

        #### Regressions

        | Function | Delta |
        | --- | --- |
        | foo | +1ms |

        ### Total time

        #### Regressions

        | Function | Delta |
        | --- | --- |
        | bar | +2ms |
      `,
      `Self time`,
      `Regressions`,
    )

    expect(tables).toStrictEqual([[{ Function: `foo`, Delta: `+1ms` }]])
  })

  test(`returns [] when the section has no Improvements sub-heading`, () => {
    const tables = rankingTables(
      dedent`
        ### Self time

        #### Regressions

        | Function | Delta |
        | --- | --- |
        | foo | +1ms |
      `,
      `Self time`,
      `Improvements`,
    )

    expect(tables).toStrictEqual([])
  })

  test(`returns parsed rows from the Improvements table within the section`, () => {
    const tables = rankingTables(
      dedent`
        ### Total time

        #### Improvements

        Some description.

        | Function | Delta |
        | --- | --- |
        | foo | -1ms |
      `,
      `Total time`,
      `Improvements`,
    )

    expect(tables).toStrictEqual([[{ Function: `foo`, Delta: `-1ms` }]])
  })
})

import dedent from 'dedent'
import { describe, expect, test } from 'vitest'
import {
  categoryTables,
  improvementsTables,
  profileTitles,
  regressionsTables,
  summaryLines,
} from './testing.ts'

describe(`profileTitles`, () => {
  test(`returns [] for empty string`, () => {
    const titles = profileTitles(``)

    expect(titles).toStrictEqual([])
  })

  test(`returns H1 text values`, () => {
    const titles = profileTitles(dedent`
      # SamplingProfile One

      # SamplingProfile Two
    `)

    expect(titles).toStrictEqual([`SamplingProfile One`, `SamplingProfile Two`])
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
      # SamplingProfile One

      Summary one.

      # SamplingProfile Two

      Summary two.
    `)

    expect(lines).toStrictEqual([`Summary one.`, `Summary two.`])
  })

  test(`skips H1 immediately followed by a heading`, () => {
    const lines = summaryLines(dedent`
      # SamplingProfile One

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
      # SamplingProfile

      Just text.
    `)

    expect(tables).toStrictEqual([])
  })

  test(`returns parsed rows from the table immediately after each H1`, () => {
    const tables = categoryTables(dedent`
      # SamplingProfile

      | Category | Count |
      | --- | --- |
      | JavaScript | 3 |
    `)

    expect(tables).toStrictEqual([[{ Category: `JavaScript`, Count: `3` }]])
  })

  test(`does not pick up a table under a sub-heading`, () => {
    const tables = categoryTables(dedent`
      # SamplingProfile

      ## Section

      | Category | Count |
      | --- | --- |
      | JavaScript | 3 |
    `)

    expect(tables).toStrictEqual([])
  })

  test(`multiple H1s each contribute one table`, () => {
    const tables = categoryTables(dedent`
      # SamplingProfile A

      | Category | Count |
      | --- | --- |
      | A | 1 |

      # SamplingProfile B

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

describe(`regressionsTables`, () => {
  test(`returns [] when the section heading is absent`, () => {
    const tables = regressionsTables(
      dedent`
        ### Regressions

        | Function | Delta |
        | --- | --- |
        | foo | +1ms |
      `,
      `Self time`,
    )

    expect(tables).toStrictEqual([])
  })

  test(`returns [] when the section has no Regressions sub-heading`, () => {
    const tables = regressionsTables(
      dedent`
        ### Self time

        #### Improvements

        | Function | Delta |
        | --- | --- |
        | foo | -1ms |
      `,
      `Self time`,
    )

    expect(tables).toStrictEqual([])
  })

  test(`returns parsed rows from the Regressions table within the section`, () => {
    const tables = regressionsTables(
      dedent`
        ### Self time

        #### Regressions

        Some description.

        | Function | Delta |
        | --- | --- |
        | foo | +1ms |
      `,
      `Self time`,
    )

    expect(tables).toStrictEqual([[{ Function: `foo`, Delta: `+1ms` }]])
  })

  test(`does not cross into the next section`, () => {
    const tables = regressionsTables(
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
    )

    expect(tables).toStrictEqual([[{ Function: `foo`, Delta: `+1ms` }]])
  })
})

describe(`improvementsTables`, () => {
  test(`returns [] when the section has no Improvements sub-heading`, () => {
    const tables = improvementsTables(
      dedent`
        ### Self time

        #### Regressions

        | Function | Delta |
        | --- | --- |
        | foo | +1ms |
      `,
      `Self time`,
    )

    expect(tables).toStrictEqual([])
  })

  test(`returns parsed rows from the Improvements table within the section`, () => {
    const tables = improvementsTables(
      dedent`
        ### Total time

        #### Improvements

        Some description.

        | Function | Delta |
        | --- | --- |
        | foo | -1ms |
      `,
      `Total time`,
    )

    expect(tables).toStrictEqual([[{ Function: `foo`, Delta: `-1ms` }]])
  })
})

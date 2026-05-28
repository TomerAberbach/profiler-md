import dedent from 'dedent'
import { describe, expect, test } from 'vitest'
import {
  calleesTables,
  callersTables,
  callStackTables,
  categoryTables,
  closureTables,
  largestStringsTables,
  linesTables,
  profileTitles,
  progressionsTables,
  regressionsTables,
  retainedSizeInstancesTables,
  retainedSizeTables,
  selfSizeInstancesTables,
  selfSizeTables,
  selfTimeTables,
  summaryLines,
  totalSizeTables,
  totalTimeTables,
} from './markdown.ts'

describe(`profileTitles`, () => {
  test(`returns [] for empty string`, () => {
    const titles = profileTitles(``)

    expect(titles).toStrictEqual([])
  })

  test(`returns H1 text values`, () => {
    const titles = profileTitles(dedent`
      # Profile One

      # Profile Two
    `)

    expect(titles).toStrictEqual([`Profile One`, `Profile Two`])
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
      # Profile One

      Summary one.

      # Profile Two

      Summary two.
    `)

    expect(lines).toStrictEqual([`Summary one.`, `Summary two.`])
  })

  test(`skips H1 immediately followed by a heading`, () => {
    const lines = summaryLines(dedent`
      # Profile One

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
      # Profile

      Just text.
    `)

    expect(tables).toStrictEqual([])
  })

  test(`returns parsed rows from the table immediately after each H1`, () => {
    const tables = categoryTables(dedent`
      # Profile

      | Category | Count |
      | --- | --- |
      | JavaScript | 3 |
    `)

    expect(tables).toStrictEqual([[{ Category: `JavaScript`, Count: `3` }]])
  })

  test(`does not pick up a table under a sub-heading`, () => {
    const tables = categoryTables(dedent`
      # Profile

      ## Section

      | Category | Count |
      | --- | --- |
      | JavaScript | 3 |
    `)

    expect(tables).toStrictEqual([])
  })

  test(`multiple H1s each contribute one table`, () => {
    const tables = categoryTables(dedent`
      # Profile A

      | Category | Count |
      | --- | --- |
      | A | 1 |

      # Profile B

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

describe(`selfTimeTables`, () => {
  test(`returns [] when heading is absent`, () => {
    const tables = selfTimeTables(dedent`
      # Profile

      No table.
    `)

    expect(tables).toStrictEqual([])
  })

  test(`returns parsed rows when heading is present`, () => {
    const tables = selfTimeTables(dedent`
      ## Self time

      | Function | Value |
      | --- | --- |
      | foo | 100ms |
    `)

    expect(tables).toStrictEqual([[{ Function: `foo`, Value: `100ms` }]])
  })

  test(`returns one table per matching heading`, () => {
    const tables = selfTimeTables(dedent`
      # Profile 1

      ## Self time

      | Function | Value |
      | --- | --- |
      | foo | 100ms |

      # Profile 2

      ## Self time

      | Function | Value |
      | --- | --- |
      | bar | 200ms |
    `)

    expect(tables).toStrictEqual([
      [{ Function: `foo`, Value: `100ms` }],
      [{ Function: `bar`, Value: `200ms` }],
    ])
  })
})

describe(`totalTimeTables`, () => {
  test(`returns [] when heading is absent`, () => {
    const tables = totalTimeTables(`# Profile\n`)

    expect(tables).toStrictEqual([])
  })

  test(`returns parsed rows when heading is present`, () => {
    const tables = totalTimeTables(dedent`
      ## Total time

      | Function | Value |
      | --- | --- |
      | foo | 50ms |
    `)

    expect(tables).toStrictEqual([[{ Function: `foo`, Value: `50ms` }]])
  })

  test(`returns one table per matching heading`, () => {
    const tables = totalTimeTables(dedent`
      # Profile 1

      ## Total time

      | Function | Value |
      | --- | --- |
      | foo | 50ms |

      # Profile 2

      ## Total time

      | Function | Value |
      | --- | --- |
      | bar | 100ms |
    `)

    expect(tables).toStrictEqual([
      [{ Function: `foo`, Value: `50ms` }],
      [{ Function: `bar`, Value: `100ms` }],
    ])
  })
})

describe(`callStackTables`, () => {
  test(`returns [] when heading is absent`, () => {
    const tables = callStackTables(`# Profile\n`)

    expect(tables).toStrictEqual([])
  })

  test(`returns parsed rows when heading is present`, () => {
    const tables = callStackTables(dedent`
      ## Hottest call stacks

      | Stack | Value |
      | --- | --- |
      | a > b | 10ms |
    `)

    expect(tables).toStrictEqual([[{ Stack: `a > b`, Value: `10ms` }]])
  })

  test(`returns one table per matching heading`, () => {
    const tables = callStackTables(dedent`
      # Profile 1

      ## Hottest call stacks

      | Stack | Value |
      | --- | --- |
      | a > b | 10ms |

      # Profile 2

      ## Hottest call stacks

      | Stack | Value |
      | --- | --- |
      | c > d | 20ms |
    `)

    expect(tables).toStrictEqual([
      [{ Stack: `a > b`, Value: `10ms` }],
      [{ Stack: `c > d`, Value: `20ms` }],
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

        #### Progressions

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

describe(`progressionsTables`, () => {
  test(`returns [] when the section has no Progressions sub-heading`, () => {
    const tables = progressionsTables(
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

  test(`returns parsed rows from the Progressions table within the section`, () => {
    const tables = progressionsTables(
      dedent`
        ### Total time

        #### Progressions

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

describe(`selfSizeTables`, () => {
  test(`returns [] when heading is absent`, () => {
    const tables = selfSizeTables(`# Snapshot\n`)

    expect(tables).toStrictEqual([])
  })

  test(`returns parsed rows when heading is present`, () => {
    const tables = selfSizeTables(dedent`
      ## Self size

      | Type | Bytes |
      | --- | --- |
      | Object | 64 |
    `)

    expect(tables).toStrictEqual([[{ Type: `Object`, Bytes: `64` }]])
  })

  test(`returns one table per matching heading`, () => {
    const tables = selfSizeTables(dedent`
      # Snapshot 1

      ## Self size

      | Type | Bytes |
      | --- | --- |
      | Object | 64 |

      # Snapshot 2

      ## Self size

      | Type | Bytes |
      | --- | --- |
      | Array | 128 |
    `)

    expect(tables).toStrictEqual([
      [{ Type: `Object`, Bytes: `64` }],
      [{ Type: `Array`, Bytes: `128` }],
    ])
  })
})

describe(`totalSizeTables`, () => {
  test(`returns [] when heading is absent`, () => {
    const tables = totalSizeTables(`# Snapshot\n`)

    expect(tables).toStrictEqual([])
  })

  test(`returns parsed rows when heading is present`, () => {
    const tables = totalSizeTables(dedent`
      ## Total size

      | Type | Bytes |
      | --- | --- |
      | Array | 128 |
    `)

    expect(tables).toStrictEqual([[{ Type: `Array`, Bytes: `128` }]])
  })

  test(`returns one table per matching heading`, () => {
    const tables = totalSizeTables(dedent`
      # Snapshot 1

      ## Total size

      | Type | Bytes |
      | --- | --- |
      | Array | 128 |

      # Snapshot 2

      ## Total size

      | Type | Bytes |
      | --- | --- |
      | Map | 256 |
    `)

    expect(tables).toStrictEqual([
      [{ Type: `Array`, Bytes: `128` }],
      [{ Type: `Map`, Bytes: `256` }],
    ])
  })
})

describe(`retainedSizeTables`, () => {
  test(`returns [] when heading is absent`, () => {
    const tables = retainedSizeTables(`# Snapshot\n`)

    expect(tables).toStrictEqual([])
  })

  test(`returns parsed rows when heading is present`, () => {
    const tables = retainedSizeTables(dedent`
      ## Retained size

      | Type | Bytes |
      | --- | --- |
      | Map | 256 |
    `)

    expect(tables).toStrictEqual([[{ Type: `Map`, Bytes: `256` }]])
  })

  test(`returns one table per matching heading`, () => {
    const tables = retainedSizeTables(dedent`
      # Snapshot 1

      ## Retained size

      | Type | Bytes |
      | --- | --- |
      | Map | 256 |

      # Snapshot 2

      ## Retained size

      | Type | Bytes |
      | --- | --- |
      | Set | 512 |
    `)

    expect(tables).toStrictEqual([
      [{ Type: `Map`, Bytes: `256` }],
      [{ Type: `Set`, Bytes: `512` }],
    ])
  })
})

describe(`closureTables`, () => {
  test(`returns [] when heading is absent`, () => {
    const tables = closureTables(`# Snapshot\n`)

    expect(tables).toStrictEqual([])
  })

  test(`returns parsed rows when heading is present`, () => {
    const tables = closureTables(dedent`
      ## Largest closures

      | Name | Size |
      | --- | --- |
      | onEvent | 512 |
    `)

    expect(tables).toStrictEqual([[{ Name: `onEvent`, Size: `512` }]])
  })

  test(`returns one table per matching heading`, () => {
    const tables = closureTables(dedent`
      # Snapshot 1

      ## Largest closures

      | Name | Size |
      | --- | --- |
      | onEvent | 512 |

      # Snapshot 2

      ## Largest closures

      | Name | Size |
      | --- | --- |
      | onClick | 256 |
    `)

    expect(tables).toStrictEqual([
      [{ Name: `onEvent`, Size: `512` }],
      [{ Name: `onClick`, Size: `256` }],
    ])
  })
})

describe(`largestStringsTables`, () => {
  test(`returns [] when heading is absent`, () => {
    const tables = largestStringsTables(`# Snapshot\n`)

    expect(tables).toStrictEqual([])
  })

  test(`returns parsed rows when heading is present`, () => {
    const tables = largestStringsTables(dedent`
      ## Largest strings

      | Value | Size |
      | --- | --- |
      | hello | 5 |
    `)

    expect(tables).toStrictEqual([[{ Value: `hello`, Size: `5` }]])
  })

  test(`returns one table per matching heading`, () => {
    const tables = largestStringsTables(dedent`
      # Snapshot 1

      ## Largest strings

      | Value | Size |
      | --- | --- |
      | hello | 5 |

      # Snapshot 2

      ## Largest strings

      | Value | Size |
      | --- | --- |
      | world | 5 |
    `)

    expect(tables).toStrictEqual([
      [{ Value: `hello`, Size: `5` }],
      [{ Value: `world`, Size: `5` }],
    ])
  })
})

describe(`callersTables`, () => {
  test(`returns [] when Callers heading is absent`, () => {
    const tables = callersTables(
      dedent`
        ## Callees

        ### foo

        | Callee | Time |
        | --- | --- |
        | bar | 1ms |
      `,
      `foo`,
    )

    expect(tables).toStrictEqual([])
  })

  test(`returns [] when no sub-heading contains the function name`, () => {
    const tables = callersTables(
      dedent`
        ## Callers

        ### bar

        | Caller | Time |
        | --- | --- |
        | baz | 1ms |
      `,
      `foo`,
    )

    expect(tables).toStrictEqual([])
  })

  test(`returns parsed rows when sub-heading contains the function name`, () => {
    const tables = callersTables(
      dedent`
        ## Callers

        ### foo (file.ts:1)

        | Caller | Time |
        | --- | --- |
        | bar | 10ms |
      `,
      `foo`,
    )

    expect(tables).toStrictEqual([[{ Caller: `bar`, Time: `10ms` }]])
  })

  test(`does not return tables from the Callees section`, () => {
    const tables = callersTables(
      dedent`
        ## Callers

        ### foo

        | Caller | Time |
        | --- | --- |
        | a | 1ms |

        ## Callees

        ### foo

        | Callee | Time |
        | --- | --- |
        | b | 2ms |
      `,
      `foo`,
    )

    expect(tables).toStrictEqual([[{ Caller: `a`, Time: `1ms` }]])
  })
})

describe(`calleesTables`, () => {
  test(`returns [] when Callees heading is absent`, () => {
    const tables = calleesTables(
      dedent`
        ## Callers

        ### foo

        | Caller | Time |
        | --- | --- |
        | bar | 1ms |
      `,
      `foo`,
    )

    expect(tables).toStrictEqual([])
  })

  test(`returns [] when no sub-heading contains the function name`, () => {
    const tables = calleesTables(
      dedent`
        ## Callees

        ### bar

        | Callee | Time |
        | --- | --- |
        | baz | 1ms |
      `,
      `foo`,
    )

    expect(tables).toStrictEqual([])
  })

  test(`returns parsed rows when sub-heading contains the function name`, () => {
    const tables = calleesTables(
      dedent`
        ## Callees

        ### foo (file.ts:5)

        | Callee | Time |
        | --- | --- |
        | baz | 5ms |
      `,
      `foo`,
    )

    expect(tables).toStrictEqual([[{ Callee: `baz`, Time: `5ms` }]])
  })

  test(`does not return tables from the Callers section`, () => {
    const tables = calleesTables(
      dedent`
        ## Callers

        ### foo

        | Caller | Time |
        | --- | --- |
        | a | 1ms |

        ## Callees

        ### foo

        | Callee | Time |
        | --- | --- |
        | b | 2ms |
      `,
      `foo`,
    )

    expect(tables).toStrictEqual([[{ Callee: `b`, Time: `2ms` }]])
  })
})

describe(`linesTables`, () => {
  test(`returns [] when Lines heading is absent`, () => {
    const tables = linesTables(
      dedent`
        ## Callers

        ### foo

        | Caller | Time |
        | --- | --- |
        | bar | 1ms |
      `,
      `foo`,
    )

    expect(tables).toStrictEqual([])
  })

  test(`returns [] when no sub-heading contains the function name`, () => {
    const tables = linesTables(
      dedent`
        ## Lines

        ### bar

        | Line | Time |
        | --- | --- |
        | 1 | 1ms |
      `,
      `foo`,
    )

    expect(tables).toStrictEqual([])
  })

  test(`returns parsed rows when sub-heading contains the function name`, () => {
    const tables = linesTables(
      dedent`
        ## Lines

        ### foo (file.ts:1)

        | Line | Time |
        | --- | --- |
        | 10 | 3ms |
      `,
      `foo`,
    )

    expect(tables).toStrictEqual([[{ Line: `10`, Time: `3ms` }]])
  })
})

describe(`selfSizeInstancesTables`, () => {
  test(`returns [] when no match at any level`, () => {
    const tables = selfSizeInstancesTables(`# Snapshot\n`, `MyClass`)

    expect(tables).toStrictEqual([])
  })

  test(`returns [] when Self size exists but Instances is absent`, () => {
    const tables = selfSizeInstancesTables(
      dedent`
        ## Self size

        ### MyClass

        | Prop | Size |
        | --- | --- |
        | x | 8 |
      `,
      `MyClass`,
    )

    expect(tables).toStrictEqual([])
  })

  test(`returns [] when Instances exists but name sub-heading is absent`, () => {
    const tables = selfSizeInstancesTables(
      dedent`
        ## Self size

        ### Instances

        #### OtherClass

        | Prop | Size |
        | --- | --- |
        | x | 8 |
      `,
      `MyClass`,
    )

    expect(tables).toStrictEqual([])
  })

  test(`returns parsed rows when all levels match`, () => {
    const tables = selfSizeInstancesTables(
      dedent`
        ## Self size

        ### Instances

        #### MyClass

        | Property | Value |
        | --- | --- |
        | count | 42 |
      `,
      `MyClass`,
    )

    expect(tables).toStrictEqual([[{ Property: `count`, Value: `42` }]])
  })
})

describe(`retainedSizeInstancesTables`, () => {
  test(`returns [] when no match at any level`, () => {
    const tables = retainedSizeInstancesTables(`# Snapshot\n`, `MyClass`)

    expect(tables).toStrictEqual([])
  })

  test(`returns [] when Retained size exists but Instances is absent`, () => {
    const tables = retainedSizeInstancesTables(
      dedent`
        ## Retained size

        ### MyClass

        | Prop | Size |
        | --- | --- |
        | x | 8 |
      `,
      `MyClass`,
    )

    expect(tables).toStrictEqual([])
  })

  test(`returns parsed rows when all levels match`, () => {
    const tables = retainedSizeInstancesTables(
      dedent`
        ## Retained size

        ### Instances

        #### MyClass

        | Property | Value |
        | --- | --- |
        | size | 100 |
      `,
      `MyClass`,
    )

    expect(tables).toStrictEqual([[{ Property: `size`, Value: `100` }]])
  })
})

describe(`row parsing`, () => {
  test(`header row becomes keys and data rows become values`, () => {
    const tables = selfTimeTables(dedent`
      ## Self time

      | Fn | Time | Pct |
      | --- | --- | --- |
      | foo | 10ms | 50% |
    `)

    expect(tables).toStrictEqual([[{ Fn: `foo`, Time: `10ms`, Pct: `50%` }]])
  })

  test(`non-breaking spaces are replaced with regular spaces`, () => {
    const tables = selfTimeTables(dedent`
      ## Self time

      | Function | Value |
      | --- | --- |
      | foo\u00A0bar | 100ms |
    `)

    expect(tables).toStrictEqual([[{ Function: `foo bar`, Value: `100ms` }]])
  })

  test(`values are trimmed of whitespace`, () => {
    const tables = selfTimeTables(dedent`
      ## Self time

      | Function | Value |
      | --- | --- |
      |  foo  |  100ms  |
    `)

    expect(tables).toStrictEqual([[{ Function: `foo`, Value: `100ms` }]])
  })
})

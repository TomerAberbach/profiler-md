import dedent from 'dedent'
import { describe, expect, test } from 'vitest'
import { calleesTables, callersTables, linesTables } from '../../testing.ts'
import { callStackTables, selfTimeTables, totalTimeTables } from './testing.ts'

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

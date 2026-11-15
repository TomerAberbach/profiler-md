import dedent from 'dedent'
import { describe, expect, test } from 'vitest'
import { selfSizeRetainerPathTables, selfSizeTables } from './testing.ts'

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

describe(`selfSizeRetainerPathTables`, () => {
  test(`returns [] when no match at any level`, () => {
    const tables = selfSizeRetainerPathTables(`# Snapshot\n`, `MyClass`)

    expect(tables).toStrictEqual([])
  })

  test(`returns [] when Self size exists but Retainer paths is absent`, () => {
    const tables = selfSizeRetainerPathTables(
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

  test(`returns [] when Retainer paths exists but name sub-heading is absent`, () => {
    const tables = selfSizeRetainerPathTables(
      dedent`
        ## Self size

        ### Retainer paths

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
    const tables = selfSizeRetainerPathTables(
      dedent`
        ## Self size

        ### Retainer paths

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

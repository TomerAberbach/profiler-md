import dedent from 'dedent'
import { describe, expect, test } from 'vitest'
import {
  functionTables,
  largestStringsTables,
  retainedSizeRetainerPathTables,
  retainedSizeTables,
  selfSizeRetainerPathTables,
  selfSizeTables,
  totalSizeTables,
} from './testing.ts'

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

describe(`functionTables`, () => {
  test(`returns [] when heading is absent`, () => {
    const tables = functionTables(`# Snapshot\n`)

    expect(tables).toStrictEqual([])
  })

  test(`returns parsed rows when heading is present`, () => {
    const tables = functionTables(dedent`
      ## Largest functions

      | Name | Size |
      | --- | --- |
      | onEvent | 512 |
    `)

    expect(tables).toStrictEqual([[{ Name: `onEvent`, Size: `512` }]])
  })

  test(`returns one table per matching heading`, () => {
    const tables = functionTables(dedent`
      # Snapshot 1

      ## Largest functions

      | Name | Size |
      | --- | --- |
      | onEvent | 512 |

      # Snapshot 2

      ## Largest functions

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

describe(`retainedSizeRetainerPathTables`, () => {
  test(`returns [] when no match at any level`, () => {
    const tables = retainedSizeRetainerPathTables(`# Snapshot\n`, `MyClass`)

    expect(tables).toStrictEqual([])
  })

  test(`returns [] when Retained size exists but Retainer paths is absent`, () => {
    const tables = retainedSizeRetainerPathTables(
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
    const tables = retainedSizeRetainerPathTables(
      dedent`
        ## Retained size

        ### Retainer paths

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

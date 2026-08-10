import { describe, expect, test } from 'vitest'
import { makeAggregatedCallStackProfile } from './modalities/call-stack-profile/testing.ts'
import { makeAggregatedHeapSnapshotConstructor } from './modalities/heap-snapshot/testing.ts'
import {
  defaultShowEntry,
  isExternalImplementationDetailEntry,
  isSyntheticEntry,
  normalizeProfileInput,
  normalizeProfileToMdOptions,
} from './options.ts'
import type { ProfileInput } from './options.ts'

describe(`normalizeProfileInput`, () => {
  test(`bare data has no explicit format or origin`, () => {
    expect(normalizeProfileInput(`profile-data`)).toStrictEqual({
      data: `profile-data`,
      format: undefined,
      origin: undefined,
    })
  })

  test(`bare binary data has no explicit format or origin`, () => {
    const data = new Uint8Array([1, 2, 3])

    expect(normalizeProfileInput(data)).toStrictEqual({
      data,
      format: undefined,
      origin: undefined,
    })
  })

  test(`wrapped data carries its explicit format and origin`, () => {
    const input: ProfileInput<string> = {
      data: `profile-data`,
      format: `v8-cpu-profile`,
      origin: `node`,
    }

    expect(normalizeProfileInput(input)).toStrictEqual(input)
  })

  test(`wrapped data without a format or origin leaves them undefined`, () => {
    expect(normalizeProfileInput({ data: `profile-data` })).toStrictEqual({
      data: `profile-data`,
      format: undefined,
      origin: undefined,
    })
  })
})

describe(`normalizeProfileToMdOptions`, () => {
  test(`defaults topN to 20`, () => {
    expect(normalizeProfileToMdOptions().topN).toBe(20)
  })

  test(`keeps an explicit topN`, () => {
    expect(normalizeProfileToMdOptions({ topN: 5 }).topN).toBe(5)
  })

  describe(`baseURL`, () => {
    test.each<[string, string | URL, URL]>([
      [`an absolute path`, `/project/src`, new URL(`file:///project/src/`)],
      [
        `an absolute path with a trailing slash`,
        `/project/src/`,
        new URL(`file:///project/src/`),
      ],
      [
        `a file URL string`,
        `file:///project/src`,
        new URL(`file:///project/src/`),
      ],
      [
        `an HTTP URL string`,
        `https://example.com/app`,
        new URL(`https://example.com/app/`),
      ],
      [
        `a URL`,
        new URL(`file:///project/src`),
        new URL(`file:///project/src/`),
      ],
      [
        `a URL with a trailing slash`,
        new URL(`file:///project/src/`),
        new URL(`file:///project/src/`),
      ],
    ])(`normalizes %s to a directory URL`, (_label, baseURL, expected) => {
      expect(normalizeProfileToMdOptions({ baseURL }).baseURL).toStrictEqual(
        expected,
      )
    })

    test(`passes 'auto' through for later inference`, () => {
      expect(normalizeProfileToMdOptions({ baseURL: `auto` }).baseURL).toBe(
        `auto`,
      )
    })

    test(`null leaves URLs absolute`, () => {
      expect(
        normalizeProfileToMdOptions({ baseURL: null }).baseURL,
      ).toBeUndefined()
    })

    test(`defaults to the current working directory`, () => {
      expect(normalizeProfileToMdOptions().baseURL).toStrictEqual(
        new URL(`file://${process.cwd()}/`),
      )
    })

    test(`throws for a relative path`, () => {
      expect(() =>
        normalizeProfileToMdOptions({ baseURL: `src/file.ts` }),
      ).toThrow(`baseURL must be an absolute path or URL, got: src/file.ts`)
    })
  })
})

const makeSnapshotNode = (name: string) =>
  makeAggregatedHeapSnapshotConstructor({
    name,
    selfSize: 0,
    retainedSize: 0,
    instanceCount: 0,
  })

describe(`isSyntheticEntry`, () => {
  test.each([`(root)`, `<root>`, `(module)`])(
    `returns true for a profiler-invented %s entry`,
    name => {
      expect(isSyntheticEntry(makeSnapshotNode(name))).toBe(true)
    },
  )

  test.each([`main`, `(garbage collector)`, `root`])(
    `returns false for %s`,
    name => {
      expect(isSyntheticEntry(makeSnapshotNode(name))).toBe(false)
    },
  )
})

/**
 * Aggregate as the `node` origin so locations under `node_modules` categorize
 * as `third-party`; project file locations categorize as `ours` and
 * locationless functions as `stdlib`.
 */
const nodeContext = { format: `v8-cpu-profile`, origin: `node` } as const

describe(`isExternalImplementationDetailEntry`, () => {
  test(`returns false for an 'ours' function`, () => {
    const [ourFunc] = makeAggregatedCallStackProfile(
      [],
      [
        {
          name: `ourFunc`,
          url: `/project/main.ts`,
          selfValues: [],
          selfCount: 1,
        },
      ],
      nodeContext,
    ).functions

    expect(isExternalImplementationDetailEntry(ourFunc!)).toBe(false)
  })

  test(`returns false for an external function called by 'ours' code`, () => {
    const [, libFunc] = makeAggregatedCallStackProfile(
      [],
      [
        {
          name: `ourFunc`,
          url: `/project/main.ts`,
          selfValues: [],
          selfCount: 1,
        },
        {
          name: `libFunc`,
          url: `/project/node_modules/lib/index.js`,
          selfValues: [],
          selfCount: 1,
          stack: [1, 0],
        },
      ],
      nodeContext,
    ).functions

    expect(isExternalImplementationDetailEntry(libFunc!)).toBe(false)
  })

  test(`returns true for an external function called only by external code`, () => {
    const libHelper = makeAggregatedCallStackProfile(
      [],
      [
        {
          name: `ourFunc`,
          url: `/project/main.ts`,
          selfValues: [],
          selfCount: 1,
        },
        {
          name: `libFunc`,
          url: `/project/node_modules/lib/index.js`,
          selfValues: [],
          selfCount: 1,
          stack: [1, 0],
        },
        {
          name: `libHelper`,
          url: `/project/node_modules/lib/helper.js`,
          selfValues: [],
          selfCount: 1,
          stack: [2, 1, 0],
        },
      ],
      nodeContext,
    ).functions[2]

    expect(isExternalImplementationDetailEntry(libHelper!)).toBe(true)
  })

  test(`returns true for an external function with no callers`, () => {
    const [libFunc] = makeAggregatedCallStackProfile(
      [],
      [
        {
          name: `libFunc`,
          url: `/project/node_modules/lib/index.js`,
          selfValues: [],
          selfCount: 1,
        },
      ],
      nodeContext,
    ).functions

    expect(isExternalImplementationDetailEntry(libFunc!)).toBe(true)
  })

  test(`returns false for a locationless function called by 'ours' code`, () => {
    const [, nativeCall] = makeAggregatedCallStackProfile(
      [],
      [
        {
          name: `ourFunc`,
          url: `/project/main.ts`,
          selfValues: [],
          selfCount: 1,
        },
        {
          name: `nativeCall`,
          selfValues: [],
          selfCount: 1,
          stack: [1, 0],
        },
      ],
      nodeContext,
    ).functions

    expect(isExternalImplementationDetailEntry(nativeCall!)).toBe(false)
  })

  test(`returns false for a snapshot node`, () => {
    expect(
      isExternalImplementationDetailEntry(makeSnapshotNode(`Buffer`)),
    ).toBe(false)
  })
})

describe(`defaultShowEntry`, () => {
  test(`hides synthetic entries`, () => {
    expect(defaultShowEntry(makeSnapshotNode(`(root)`))).toBe(false)
  })

  test(`hides external implementation detail entries`, () => {
    const [libFunc] = makeAggregatedCallStackProfile(
      [],
      [
        {
          name: `libFunc`,
          url: `/project/node_modules/lib/index.js`,
          selfValues: [],
          selfCount: 1,
        },
      ],
      nodeContext,
    ).functions

    expect(defaultShowEntry(libFunc!)).toBe(false)
  })

  test(`shows 'ours' entries`, () => {
    const [ourFunc] = makeAggregatedCallStackProfile(
      [],
      [
        {
          name: `ourFunc`,
          url: `/project/main.ts`,
          selfValues: [],
          selfCount: 1,
        },
      ],
      nodeContext,
    ).functions

    expect(defaultShowEntry(ourFunc!)).toBe(true)
  })
})

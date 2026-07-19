import { describe, expect, test } from 'vitest'
import { makeAggregatedProfile } from './modalities/profile/testing.ts'
import { makeAggregatedConstructor } from './modalities/snapshot/testing.ts'
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

  describe(`coverageTarget`, () => {
    test(`defaults to 0.5`, () => {
      expect(normalizeProfileToMdOptions().coverageTarget).toBe(0.5)
    })

    test(`keeps an explicit coverageTarget`, () => {
      expect(
        normalizeProfileToMdOptions({ coverageTarget: 0.5 }).coverageTarget,
      ).toBe(0.5)
    })

    test.each([-0.1, 1.1, Number.NaN])(`throws for %s`, coverageTarget => {
      expect(() => normalizeProfileToMdOptions({ coverageTarget })).toThrow(
        `coverageTarget must be between 0 and 1, got: ${coverageTarget}`,
      )
    })
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

const makeSnapshotNode = (name: string, category = `ours`) =>
  makeAggregatedConstructor({
    name,
    category,
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
    const [ourFunc] = makeAggregatedProfile(
      [],
      [
        {
          name: `ourFunc`,
          url: `/project/main.ts`,
          selfValues: [],
          selfSampleCount: 1,
        },
      ],
      nodeContext,
    ).functions

    expect(isExternalImplementationDetailEntry(ourFunc!)).toBe(false)
  })

  test(`returns false for an external function called by 'ours' code`, () => {
    const [, libFunc] = makeAggregatedProfile(
      [],
      [
        {
          name: `ourFunc`,
          url: `/project/main.ts`,
          selfValues: [],
          selfSampleCount: 1,
        },
        {
          name: `libFunc`,
          url: `/project/node_modules/lib/index.js`,
          selfValues: [],
          selfSampleCount: 1,
          stack: [1, 0],
        },
      ],
      nodeContext,
    ).functions

    expect(isExternalImplementationDetailEntry(libFunc!)).toBe(false)
  })

  test(`returns true for an external function called only by external code`, () => {
    const libHelper = makeAggregatedProfile(
      [],
      [
        {
          name: `ourFunc`,
          url: `/project/main.ts`,
          selfValues: [],
          selfSampleCount: 1,
        },
        {
          name: `libFunc`,
          url: `/project/node_modules/lib/index.js`,
          selfValues: [],
          selfSampleCount: 1,
          stack: [1, 0],
        },
        {
          name: `libHelper`,
          url: `/project/node_modules/lib/helper.js`,
          selfValues: [],
          selfSampleCount: 1,
          stack: [2, 1, 0],
        },
      ],
      nodeContext,
    ).functions[2]

    expect(isExternalImplementationDetailEntry(libHelper!)).toBe(true)
  })

  test(`returns true for an external function with no callers`, () => {
    const [libFunc] = makeAggregatedProfile(
      [],
      [
        {
          name: `libFunc`,
          url: `/project/node_modules/lib/index.js`,
          selfValues: [],
          selfSampleCount: 1,
        },
      ],
      nodeContext,
    ).functions

    expect(isExternalImplementationDetailEntry(libFunc!)).toBe(true)
  })

  test(`returns false for a locationless function called by 'ours' code`, () => {
    const [, nativeCall] = makeAggregatedProfile(
      [],
      [
        {
          name: `ourFunc`,
          url: `/project/main.ts`,
          selfValues: [],
          selfSampleCount: 1,
        },
        {
          name: `nativeCall`,
          selfValues: [],
          selfSampleCount: 1,
          stack: [1, 0],
        },
      ],
      nodeContext,
    ).functions

    expect(isExternalImplementationDetailEntry(nativeCall!)).toBe(false)
  })

  test(`returns false for a snapshot node regardless of category`, () => {
    expect(
      isExternalImplementationDetailEntry(
        makeSnapshotNode(`Buffer`, `third-party`),
      ),
    ).toBe(false)
  })
})

describe(`defaultShowEntry`, () => {
  test(`hides synthetic entries`, () => {
    expect(defaultShowEntry(makeSnapshotNode(`(root)`))).toBe(false)
  })

  test(`hides external implementation detail entries`, () => {
    const [libFunc] = makeAggregatedProfile(
      [],
      [
        {
          name: `libFunc`,
          url: `/project/node_modules/lib/index.js`,
          selfValues: [],
          selfSampleCount: 1,
        },
      ],
      nodeContext,
    ).functions

    expect(defaultShowEntry(libFunc!)).toBe(false)
  })

  test(`shows 'ours' entries`, () => {
    const [ourFunc] = makeAggregatedProfile(
      [],
      [
        {
          name: `ourFunc`,
          url: `/project/main.ts`,
          selfValues: [],
          selfSampleCount: 1,
        },
      ],
      nodeContext,
    ).functions

    expect(defaultShowEntry(ourFunc!)).toBe(true)
  })
})

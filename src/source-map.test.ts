import { expect, test } from 'vitest'
import type {
  FormattingProfileToMdOptions,
  ProfileToMdOptions,
} from './options.ts'
import { normalizeSourceMaps, sourceMapSourceLocation } from './source-map.ts'
import type { SourceMap } from './source-map.ts'
import { resolveProfileToMdOptions } from './testing.ts'

// Maps generated line 1 col 0 -> sources[0] line 1 col 0 (0-based).
const L1_C0_TO_SOURCE_0_L1_C0 = `AAAA`

const makeSourceMap = (sourceMap: Partial<SourceMap> = {}): SourceMap => ({
  version: `3`,
  sources: [],
  names: [],
  mappings: ``,
  ...sourceMap,
})

const makeNormalizedOptions = ({
  baseURL = `/`,
  sourceMaps,
}: Pick<
  ProfileToMdOptions,
  `sourceMaps` | `baseURL`
>): FormattingProfileToMdOptions =>
  resolveProfileToMdOptions({ baseURL, sourceMaps })

test(`normalizeSourceMaps drops entries with no file field`, () => {
  const sourceMaps = normalizeSourceMaps([makeSourceMap()])

  expect(sourceMaps).toHaveLength(0)
})

test(`normalizeSourceMaps drops entries with the placeholder unknown file field`, () => {
  const sourceMaps = normalizeSourceMaps([makeSourceMap({ file: `unknown` })])

  expect(sourceMaps).toHaveLength(0)
})

test(`normalizeSourceMaps throws for an invalid source map`, () => {
  expect(() =>
    normalizeSourceMaps([makeSourceMap({ file: `/app.js`, version: `2` })]),
  ).toThrow(
    `sourceMaps entry for /app.js is an invalid source map: Unsupported version: 2`,
  )
})

test(`normalizeSourceMaps infers absolute location from absolute file path`, () => {
  const sourceMaps = normalizeSourceMaps([
    makeSourceMap({
      file: `/project/dist/app.js`,
    }),
  ])

  expect(sourceMaps).toMatchObject([
    {
      fileReference: {
        type: `absolute`,
        url: new URL(`file:///project/dist/app.js`),
      },
    },
  ])
})

test(`normalizeSourceMaps infers absolute location from file URL`, () => {
  const sourceMaps = normalizeSourceMaps([
    makeSourceMap({ file: `file:///project/dist/app.js` }),
  ])

  expect(sourceMaps).toMatchObject([
    {
      fileReference: {
        type: `absolute`,
        url: new URL(`file:///project/dist/app.js`),
      },
    },
  ])
})

test(`normalizeSourceMaps infers relative location from relative file`, () => {
  const sourceMaps = normalizeSourceMaps([
    makeSourceMap({ file: `dist/app.js` }),
  ])

  expect(sourceMaps).toMatchObject([
    {
      fileReference: {
        type: `relative`,
        path: `dist/app.js`,
      },
    },
  ])
})

test(`normalizeSourceMaps does not use sourceRoot to resolve the file field`, () => {
  // `sourceRoot` applies to `sources` (original), not to `file` (generated).
  const sourceMaps = normalizeSourceMaps([
    makeSourceMap({
      file: `app.js`,
      sourceRoot: `file:///project/src/`,
    }),
  ])

  expect(sourceMaps).toMatchObject([
    {
      fileReference: {
        type: `relative`,
        path: `app.js`,
      },
    },
  ])
})

test(`normalizeSourceMaps converts absolute path key to absolute location`, () => {
  const sourceMaps = normalizeSourceMaps({
    '/project/dist/app.js': makeSourceMap(),
  })

  expect(sourceMaps).toMatchObject([
    {
      fileReference: {
        type: `absolute`,
        url: new URL(`file:///project/dist/app.js`),
      },
    },
  ])
})

test(`normalizeSourceMaps converts URL key to absolute location`, () => {
  const sourceMaps = normalizeSourceMaps({
    'file:///project/dist/app.js': makeSourceMap(),
  })

  expect(sourceMaps).toMatchObject([
    {
      fileReference: {
        type: `absolute`,
        url: new URL(`file:///project/dist/app.js`),
      },
    },
  ])
})

test(`normalizeSourceMaps converts relative path key to relative location`, () => {
  const sourceMaps = normalizeSourceMaps({ 'dist/app.js': makeSourceMap() })

  expect(sourceMaps).toMatchObject([
    {
      fileReference: {
        type: `relative`,
        path: `dist/app.js`,
      },
    },
  ])
})

test(`sourceMapSourceLocation matches by absolute location`, () => {
  const url = `file:///project/dist/app.js`
  const sourceMaps = {
    [url]: makeSourceMap({
      sources: [`/project/src/original.ts`],
      mappings: L1_C0_TO_SOURCE_0_L1_C0,
    }),
  }

  const mappedLocation = sourceMapSourceLocation(
    {
      type: `absolute`,
      url: new URL(url),
      line: 1,
      column: 1,
    },
    makeNormalizedOptions({ sourceMaps }),
  )

  expect(mappedLocation).toStrictEqual({
    type: `absolute`,
    url: new URL(`file:///project/src/original.ts`),
    line: 1,
    column: 1,
  })
})

test(`sourceMapSourceLocation matches by relative location`, () => {
  const sourceMaps = [
    makeSourceMap({
      sources: [`/project/src/original.ts`],
      mappings: L1_C0_TO_SOURCE_0_L1_C0,
      file: `dist/app.js`,
    }),
  ]

  const mappedLocation = sourceMapSourceLocation(
    {
      type: `absolute`,
      url: new URL(`file:///project/dist/app.js`),
      line: 1,
      column: 1,
    },
    makeNormalizedOptions({ sourceMaps }),
  )

  expect(mappedLocation).toStrictEqual({
    type: `absolute`,
    url: new URL(`file:///project/src/original.ts`),
    line: 1,
    column: 1,
  })
})

test(`sourceMapSourceLocation returns input when mapped source is the placeholder unknown`, () => {
  const url = `file:///project/dist/app.js`
  const location = {
    type: `absolute` as const,
    url: new URL(url),
    line: 1,
    column: 1,
  }
  const sourceMaps = {
    [url]: makeSourceMap({
      sources: [`unknown`],
      mappings: L1_C0_TO_SOURCE_0_L1_C0,
    }),
  }

  const mappedLocation = sourceMapSourceLocation(
    location,
    makeNormalizedOptions({ sourceMaps }),
  )

  expect(mappedLocation).toStrictEqual(location)
})

test(`sourceMapSourceLocation returns original location when no entry matches`, () => {
  const location = {
    type: `absolute` as const,
    url: new URL(`file:///project/dist/app.js`),
    line: 1,
    column: 1,
  }
  const sourceMaps = {
    'file:///project/dist/other.js': makeSourceMap(),
  }

  const mappedLocation = sourceMapSourceLocation(
    location,
    makeNormalizedOptions({ sourceMaps }),
  )

  expect(mappedLocation).toStrictEqual(location)
})

test(`sourceMapSourceLocation returns input when location has no mapping`, () => {
  const url = `file:///project/dist/app.js`
  const location = {
    type: `absolute` as const,
    url: new URL(url),
    // `MAPPING` only covers line 1. Line 99 does not match.
    line: 99,
    column: 1,
  }
  const sourceMaps = { [url]: makeSourceMap() }

  const mappedLocation = sourceMapSourceLocation(
    location,
    makeNormalizedOptions({ sourceMaps }),
  )

  expect(mappedLocation).toStrictEqual(location)
})

test(`sourceMapSourceLocation uses absolute path source directly`, () => {
  const url = `file:///project/dist/app.js`
  const sourceMaps = {
    [url]: makeSourceMap({
      sources: [`/project/src/original.ts`],
      mappings: L1_C0_TO_SOURCE_0_L1_C0,
    }),
  }

  const mappedLocation = sourceMapSourceLocation(
    {
      type: `absolute`,
      url: new URL(url),
      line: 1,
      column: 1,
    },
    makeNormalizedOptions({ sourceMaps }),
  )

  expect(mappedLocation).toStrictEqual({
    type: `absolute`,
    url: new URL(`file:///project/src/original.ts`),
    line: 1,
    column: 1,
  })
})

test(`sourceMapSourceLocation uses absolute URL source directly`, () => {
  const url = `file:///project/dist/app.js`
  const sourceMaps = {
    [url]: makeSourceMap({
      sources: [`file:///project/src/original.ts`],
      mappings: L1_C0_TO_SOURCE_0_L1_C0,
    }),
  }

  const mappedLocation = sourceMapSourceLocation(
    {
      type: `absolute`,
      url: new URL(url),
      line: 1,
      column: 1,
    },
    makeNormalizedOptions({ sourceMaps }),
  )

  expect(mappedLocation).toStrictEqual({
    type: `absolute`,
    url: new URL(`file:///project/src/original.ts`),
    line: 1,
    column: 1,
  })
})

test(`sourceMapSourceLocation resolves relative source against baseURL`, () => {
  const url = `file:///project/dist/app.js`
  const sourceMaps = {
    [url]: makeSourceMap({
      sources: [`src/original.ts`],
      mappings: L1_C0_TO_SOURCE_0_L1_C0,
    }),
  }

  const mappedLocation = sourceMapSourceLocation(
    {
      type: `absolute`,
      url: new URL(url),
      line: 1,
      column: 1,
    },
    makeNormalizedOptions({ sourceMaps, baseURL: `/project` }),
  )

  expect(mappedLocation).toStrictEqual({
    type: `absolute`,
    url: new URL(`file:///project/src/original.ts`),
    line: 1,
    column: 1,
  })
})

test(`sourceMapSourceLocation returns input when source is relative and baseURL is absent`, () => {
  const url = `file:///project/dist/app.js`
  const location = {
    type: `absolute` as const,
    url: new URL(url),
    line: 1,
    column: 1,
  }
  const sourceMaps = { [url]: makeSourceMap() }

  const mappedLocation = sourceMapSourceLocation(
    location,
    makeNormalizedOptions({ sourceMaps, baseURL: null }),
  )

  expect(mappedLocation).toStrictEqual(location)
})

test(`sourceMapSourceLocation resolves relative source via absolute sourceRoot`, () => {
  const url = `file:///project/dist/app.js`
  const sourceMaps = {
    [url]: makeSourceMap({
      sources: [`original.ts`],
      mappings: L1_C0_TO_SOURCE_0_L1_C0,
      sourceRoot: `file:///project/src/`,
    }),
  }

  const mappedLocation = sourceMapSourceLocation(
    {
      type: `absolute`,
      url: new URL(url),
      line: 1,
      column: 1,
    },
    makeNormalizedOptions({ sourceMaps }),
  )

  expect(mappedLocation).toStrictEqual({
    type: `absolute`,
    url: new URL(`file:///project/src/original.ts`),
    line: 1,
    column: 1,
  })
})

test(`sourceMapSourceLocation converts result column from 0-based to 1-based`, () => {
  const url = `file:///project/dist/app.js`
  const sourceMaps = {
    [url]: makeSourceMap({
      sources: [`/project/src/original.ts`],
      mappings: Array.from({ length: 10 }, () => L1_C0_TO_SOURCE_0_L1_C0).join(
        `;`,
      ),
    }),
  }

  const mappedLocation = sourceMapSourceLocation(
    {
      type: `absolute`,
      url: new URL(url),
      line: 3,
      column: 1,
    },
    makeNormalizedOptions({ sourceMaps }),
  )

  // AAAA maps to source col 0 (0-based) -> should appear as col 1 (1-based).
  expect(mappedLocation).toStrictEqual({
    type: `absolute`,
    url: new URL(`file:///project/src/original.ts`),
    line: 1,
    column: 1,
  })
})

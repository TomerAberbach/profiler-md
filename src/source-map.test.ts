import { expect, test } from 'vitest'
import { normalizeProfileToMdOptions } from './options.ts'
import type {
  NormalizedProfileToMdOptions,
  ProfileToMdOptions,
} from './options.ts'
import { normalizeSourceMaps, sourceMapProfileLocation } from './source-map.ts'
import type { SourceMap } from './source-map.ts'

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
  cwd = `/`,
  sourceMaps,
}: Pick<
  ProfileToMdOptions,
  `sourceMaps` | `cwd`
>): NormalizedProfileToMdOptions =>
  normalizeProfileToMdOptions({ cwd, sourceMaps })

test(`normalizeSourceMaps drops entries with no file field`, () => {
  const sourceMaps = normalizeSourceMaps([makeSourceMap()])

  expect(sourceMaps).toHaveLength(0)
})

test(`normalizeSourceMaps infers absolute location from absolute file path`, () => {
  const sourceMaps = normalizeSourceMaps([
    makeSourceMap({
      file: `/project/dist/app.js`,
    }),
  ])

  expect(sourceMaps).toMatchObject([
    {
      location: {
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
      location: {
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
      location: {
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
      location: {
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
      location: {
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
      location: {
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
      location: {
        type: `relative`,
        path: `dist/app.js`,
      },
    },
  ])
})

test(`sourceMapProfileLocation matches by absolute location`, () => {
  const url = `file:///project/dist/app.js`
  const sourceMaps = {
    [url]: makeSourceMap({
      sources: [`/project/src/original.ts`],
      mappings: L1_C0_TO_SOURCE_0_L1_C0,
    }),
  }

  const mappedLocation = sourceMapProfileLocation(
    {
      url: new URL(url),
      line: 1,
      column: 1,
    },
    makeNormalizedOptions({ sourceMaps }),
  )

  expect(mappedLocation).toStrictEqual({
    url: new URL(`file:///project/src/original.ts`),
    line: 1,
    column: 1,
  })
})

test(`sourceMapProfileLocation matches by relative location`, () => {
  const sourceMaps = [
    makeSourceMap({
      sources: [`/project/src/original.ts`],
      mappings: L1_C0_TO_SOURCE_0_L1_C0,
      file: `dist/app.js`,
    }),
  ]

  const mappedLocation = sourceMapProfileLocation(
    {
      url: new URL(`file:///project/dist/app.js`),
      line: 1,
      column: 1,
    },
    makeNormalizedOptions({ sourceMaps }),
  )

  expect(mappedLocation).toStrictEqual({
    url: new URL(`file:///project/src/original.ts`),
    line: 1,
    column: 1,
  })
})

test(`sourceMapProfileLocation returns original location when no entry matches`, () => {
  const location = {
    url: new URL(`file:///project/dist/app.js`),
    line: 1,
    column: 1,
  }
  const sourceMaps = {
    'file:///project/dist/other.js': makeSourceMap(),
  }

  const mappedLocation = sourceMapProfileLocation(
    location,
    makeNormalizedOptions({ sourceMaps }),
  )

  expect(mappedLocation).toStrictEqual(location)
})

test(`sourceMapProfileLocation returns input when position has no mapping`, () => {
  const url = `file:///project/dist/app.js`
  const location = {
    url: new URL(url),
    // `MAPPING` only covers line 1. Line 99 does not match.
    line: 99,
    column: 1,
  }
  const sourceMaps = { [url]: makeSourceMap() }

  const mappedLocation = sourceMapProfileLocation(
    location,
    makeNormalizedOptions({ sourceMaps }),
  )

  expect(mappedLocation).toStrictEqual(location)
})

test(`sourceMapProfileLocation uses absolute path source directly`, () => {
  const url = `file:///project/dist/app.js`
  const sourceMaps = {
    [url]: makeSourceMap({
      sources: [`/project/src/original.ts`],
      mappings: L1_C0_TO_SOURCE_0_L1_C0,
    }),
  }

  const mappedLocation = sourceMapProfileLocation(
    {
      url: new URL(url),
      line: 1,
      column: 1,
    },
    makeNormalizedOptions({ sourceMaps }),
  )

  expect(mappedLocation).toStrictEqual({
    url: new URL(`file:///project/src/original.ts`),
    line: 1,
    column: 1,
  })
})

test(`sourceMapProfileLocation uses absolute URL source directly`, () => {
  const url = `file:///project/dist/app.js`
  const sourceMaps = {
    [url]: makeSourceMap({
      sources: [`file:///project/src/original.ts`],
      mappings: L1_C0_TO_SOURCE_0_L1_C0,
    }),
  }

  const mappedLocation = sourceMapProfileLocation(
    {
      url: new URL(url),
      line: 1,
      column: 1,
    },
    makeNormalizedOptions({ sourceMaps }),
  )

  expect(mappedLocation).toStrictEqual({
    url: new URL(`file:///project/src/original.ts`),
    line: 1,
    column: 1,
  })
})

test(`sourceMapProfileLocation resolves relative source against cwd`, () => {
  const url = `file:///project/dist/app.js`
  const sourceMaps = {
    [url]: makeSourceMap({
      sources: [`src/original.ts`],
      mappings: L1_C0_TO_SOURCE_0_L1_C0,
    }),
  }

  const mappedLocation = sourceMapProfileLocation(
    {
      url: new URL(url),
      line: 1,
      column: 1,
    },
    makeNormalizedOptions({ sourceMaps, cwd: `/project` }),
  )

  expect(mappedLocation).toStrictEqual({
    url: new URL(`file:///project/src/original.ts`),
    line: 1,
    column: 1,
  })
})

test(`sourceMapProfileLocation returns input when source is relative and cwd is absent`, () => {
  const url = `file:///project/dist/app.js`
  const location = {
    url: new URL(url),
    line: 1,
    column: 1,
  }
  const sourceMaps = { [url]: makeSourceMap() }

  const mappedLocation = sourceMapProfileLocation(
    location,
    makeNormalizedOptions({ sourceMaps, cwd: null }),
  )

  expect(mappedLocation).toStrictEqual(location)
})

test(`sourceMapProfileLocation resolves relative source via absolute sourceRoot`, () => {
  const url = `file:///project/dist/app.js`
  const sourceMaps = {
    [url]: makeSourceMap({
      sources: [`original.ts`],
      mappings: L1_C0_TO_SOURCE_0_L1_C0,
      sourceRoot: `file:///project/src/`,
    }),
  }

  const mappedLocation = sourceMapProfileLocation(
    {
      url: new URL(url),
      line: 1,
      column: 1,
    },
    makeNormalizedOptions({ sourceMaps }),
  )

  expect(mappedLocation).toStrictEqual({
    url: new URL(`file:///project/src/original.ts`),
    line: 1,
    column: 1,
  })
})

test(`sourceMapProfileLocation converts result column from 0-based to 1-based`, () => {
  const url = `file:///project/dist/app.js`
  const sourceMaps = {
    [url]: makeSourceMap({
      sources: [`/project/src/original.ts`],
      mappings: Array.from({ length: 10 }, () => L1_C0_TO_SOURCE_0_L1_C0).join(
        `;`,
      ),
    }),
  }

  const mappedLocation = sourceMapProfileLocation(
    {
      url: new URL(url),
      line: 3,
      column: 1,
    },
    makeNormalizedOptions({ sourceMaps }),
  )

  // AAAA maps to source col 0 (0-based) -> should appear as col 1 (1-based).
  expect(mappedLocation).toStrictEqual({
    url: new URL(`file:///project/src/original.ts`),
    line: 1,
    column: 1,
  })
})

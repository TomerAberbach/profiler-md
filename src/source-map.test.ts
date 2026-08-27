import { expect, test } from 'vitest'
import {
  makeV8CallFrame,
  makeV8CpuProfileRoot,
} from './formats/v8/cpu-profile/testing.ts'
import { profileToMd } from './index.ts'
import type {
  FormattingProfileToMdOptions,
  ProfileToMdOptions,
} from './options.ts'
import { sourceMapSourceLocation } from './source-map.ts'
import type { SourceMap } from './source-map.ts'
import { expectLogs, resolveProfileToMdOptions } from './testing.ts'

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

const LOCATION = {
  type: `absolute`,
  url: new URL(`file:///project/dist/app.js`),
  line: 1,
  column: 1,
} as const

const MAPPED_LOCATION = {
  type: `absolute`,
  url: new URL(`file:///project/src/original.ts`),
  line: 1,
  column: 1,
} as const

const mapping = (sourceMap: Partial<SourceMap> = {}): SourceMap =>
  makeSourceMap({
    sources: [`/project/src/original.ts`],
    mappings: L1_C0_TO_SOURCE_0_L1_C0,
    ...sourceMap,
  })

test(`sourceMaps drops and warns about a list entry with no file field`, () => {
  const mappedLocation = sourceMapSourceLocation(
    LOCATION,
    resolveProfileToMdOptions({ sourceMaps: [mapping()] }),
  )

  expect(mappedLocation).toStrictEqual(LOCATION)
  expectLogs([
    `warn: source map ignored: the entry at index 0 has no "file" field naming the generated file it maps`,
  ])
})

test(`sourceMaps drops and warns about a record entry with the placeholder unknown key`, () => {
  const mappedLocation = sourceMapSourceLocation(
    LOCATION,
    resolveProfileToMdOptions({ sourceMaps: { unknown: mapping() } }),
  )

  expect(mappedLocation).toStrictEqual(LOCATION)
  expectLogs([
    `warn: source map ignored: its key is the placeholder a compiler writes when given no file name, got: unknown`,
  ])
})

test(`sourceMaps drops and warns about a list entry with the placeholder unknown file field`, () => {
  const mappedLocation = sourceMapSourceLocation(
    LOCATION,
    resolveProfileToMdOptions({ sourceMaps: [mapping({ file: `unknown` })] }),
  )

  expect(mappedLocation).toStrictEqual(LOCATION)
  expectLogs([
    `warn: source map ignored: the "file" field of the entry at index 0 is the placeholder a compiler writes when given no file name, got: unknown`,
  ])
})

test(`sourceMaps drops and warns about a list entry whose file field names the same generated file as an earlier entry`, () => {
  const mappedLocation = sourceMapSourceLocation(
    LOCATION,
    makeNormalizedOptions({
      sourceMaps: [
        mapping({ file: `/project/dist/app.js` }),
        mapping({
          file: `file:///project/dist/app.js`,
          sources: [`/project/src/other.ts`],
        }),
      ],
    }),
  )

  expect(mappedLocation).toStrictEqual(MAPPED_LOCATION)
  expectLogs([
    `warn: source map ignored: the "file" field of the entry at index 1 names the same generated file as an earlier entry, got: file:///project/dist/app.js`,
  ])
})

test(`sourceMaps drops and warns about a record entry whose key names the same generated file as an earlier entry`, () => {
  const mappedLocation = sourceMapSourceLocation(
    LOCATION,
    makeNormalizedOptions({
      sourceMaps: {
        '/project/dist/app.js': mapping(),
        'file:///project/dist/app.js': mapping({
          sources: [`/project/src/other.ts`],
        }),
      },
    }),
  )

  expect(mappedLocation).toStrictEqual(MAPPED_LOCATION)
  expectLogs([
    `warn: source map ignored: its key names the same generated file as an earlier entry, got: file:///project/dist/app.js`,
  ])
})

test(`sourceMaps throws for an invalid source map`, () => {
  expect(() =>
    resolveProfileToMdOptions({
      sourceMaps: [mapping({ file: `/app.js`, version: `2` })],
    }),
  ).toThrow(
    `sourceMaps entry for /app.js is an invalid source map: Unsupported version: 2`,
  )
})

test.each([
  [`absolute file path`, `/project/dist/app.js`],
  [`file URL`, `file:///project/dist/app.js`],
  [`relative file`, `dist/app.js`],
])(`sourceMaps matches a list entry's %s file field`, (_, file) => {
  const mappedLocation = sourceMapSourceLocation(
    LOCATION,
    makeNormalizedOptions({ sourceMaps: [mapping({ file })] }),
  )

  expect(mappedLocation).toStrictEqual(MAPPED_LOCATION)
})

test(`sourceMaps ignores sourceRoot when resolving the file field`, () => {
  // `sourceRoot` applies to `sources` (original), not to `file` (generated).
  const mappedLocation = sourceMapSourceLocation(
    LOCATION,
    makeNormalizedOptions({
      sourceMaps: [
        mapping({
          file: `app.js`,
          sourceRoot: `file:///project/src/`,
          sources: [`original.ts`],
        }),
      ],
    }),
  )

  expect(mappedLocation).toStrictEqual(MAPPED_LOCATION)
})

test.each([
  [`absolute path`, `/project/dist/app.js`],
  [`URL`, `file:///project/dist/app.js`],
  [`relative path`, `dist/app.js`],
])(`sourceMaps matches a record entry's %s key`, (_, key) => {
  const mappedLocation = sourceMapSourceLocation(
    LOCATION,
    makeNormalizedOptions({ sourceMaps: { [key]: mapping() } }),
  )

  expect(mappedLocation).toStrictEqual(MAPPED_LOCATION)
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

const cpuProfile = JSON.stringify({
  nodes: [
    makeV8CpuProfileRoot([2, 3]),
    {
      id: 2,
      hitCount: 5,
      callFrame: makeV8CallFrame(`funcA`, `file:///project/dist/a.js`),
    },
    {
      id: 3,
      hitCount: 3,
      callFrame: makeV8CallFrame(`funcB`, `file:///project/dist/b.js`),
    },
  ],
  samples: [2, 2, 2, 2, 2, 3, 3, 3],
  timeDeltas: Array.from({ length: 8 }, () => 20),
})

const DETECTION_LOGS = [
  `info: format: v8-cpu-profile (detected)`,
  `debug: origin candidates, in priority order: deno, bun, node, chrome`,
  `info: origin: chrome (the fallback: no entry marked another origin)`,
]

test(`sourceMaps reports each generated file and warns about a map matching none`, () => {
  profileToMd(cpuProfile, {
    baseURL: null,
    sourceMaps: {
      'file:///project/dist/a.js': mapping(),
      'file:///project/dist/c.js': mapping(),
    },
  })

  expectLogs([
    ...DETECTION_LOGS,
    `info: source maps: 1 of 2 generated files have a source map`,
    `warn: source map for file:///project/dist/c.js matched no generated file in the profile, whose generated files are: file:///project/dist/a.js, file:///project/dist/b.js`,
    `debug: file:///project/dist/a.js: mapped by the source map for file:///project/dist/a.js`,
    `debug: file:///project/dist/b.js: no source map`,
  ])
})

test(`sourceMaps warns about relative sources with no base URL`, () => {
  profileToMd(cpuProfile, {
    baseURL: null,
    sourceMaps: {
      'file:///project/dist/a.js': mapping({ sources: [`../src/a.ts`] }),
    },
  })

  expectLogs([
    ...DETECTION_LOGS,
    `info: source maps: 1 of 2 generated files have a source map`,
    `warn: source map sources are relative paths, so their locations stay unmapped until baseURL is set`,
    `debug: file:///project/dist/a.js: mapped by the source map for file:///project/dist/a.js, whose sources are relative paths and stay unmapped without a base URL`,
    `debug: file:///project/dist/b.js: no source map`,
  ])
})

test(`sourceMaps resolves relative sources against an inferred base URL without warning`, () => {
  const markdown = profileToMd(cpuProfile, {
    baseURL: `auto`,
    sourceMaps: {
      'file:///project/dist/a.js': mapping({ sources: [`../src/a.ts`] }),
    },
  })

  expect(markdown).toContain(`../src/a.ts:1:1`)
  expectLogs([
    ...DETECTION_LOGS,
    `info: base URL: inferred file:///project/dist/ from 2 locations`,
    `info: source maps: 1 of 2 generated files have a source map`,
    `debug: file:///project/dist/a.js: mapped by the source map for file:///project/dist/a.js`,
    `debug: file:///project/dist/b.js: no source map`,
  ])
})

test(`sourceMaps counts and matches generated files formatting does not show`, () => {
  profileToMd(cpuProfile, {
    baseURL: null,
    // Shows only the hotter function, in `a.js`.
    topN: 1,
    sourceMaps: { 'file:///project/dist/b.js': mapping() },
  })

  expectLogs([
    ...DETECTION_LOGS,
    `info: source maps: 1 of 2 generated files have a source map`,
    `debug: file:///project/dist/a.js: no source map`,
    `debug: file:///project/dist/b.js: mapped by the source map for file:///project/dist/b.js`,
  ])
})

test(`sourceMaps reports each conversion's generated files when options are shared`, () => {
  const options: ProfileToMdOptions = {
    baseURL: null,
    sourceMaps: { 'file:///project/dist/a.js': mapping() },
  }
  const otherCpuProfile = JSON.stringify({
    nodes: [
      makeV8CpuProfileRoot([2]),
      {
        id: 2,
        hitCount: 1,
        callFrame: makeV8CallFrame(`funcC`, `file:///project/dist/c.js`),
      },
    ],
    samples: [2],
    timeDeltas: [20],
  })

  profileToMd(cpuProfile, options)
  profileToMd(otherCpuProfile, options)

  expectLogs([
    ...DETECTION_LOGS,
    `info: source maps: 1 of 2 generated files have a source map`,
    `debug: file:///project/dist/a.js: mapped by the source map for file:///project/dist/a.js`,
    `debug: file:///project/dist/b.js: no source map`,
    ...DETECTION_LOGS,
    `info: source maps: 0 of 1 generated files have a source map`,
    `warn: source map for file:///project/dist/a.js matched no generated file in the profile, whose generated files are: file:///project/dist/c.js`,
    `debug: file:///project/dist/c.js: no source map`,
  ])
})

test(`sourceMaps reports the positions a source map has no mapping for`, () => {
  profileToMd(cpuProfile, {
    baseURL: null,
    // Maps only generated line 2, so line 1 has no mapping.
    sourceMaps: { 'file:///project/dist/a.js': mapping({ mappings: `;AAAA` }) },
  })

  expectLogs([
    ...DETECTION_LOGS,
    `info: source maps: 1 of 2 generated files have a source map`,
    `debug: file:///project/dist/a.js: mapped by the source map for file:///project/dist/a.js, which has no mapping for 1 position (e.g. 1:1)`,
    `debug: file:///project/dist/b.js: no source map`,
  ])
})

test(`sourceMaps logs nothing without source maps`, () => {
  profileToMd(cpuProfile, { baseURL: null })

  expectLogs(DETECTION_LOGS)
})

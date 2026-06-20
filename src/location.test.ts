import { describe, expect, test } from 'vitest'
import {
  fileReferenceToSourceLocation,
  formatSourceLocation,
  makeFileReference,
  makeSourceLocation,
} from './location.ts'
import { normalizeProfileToMdOptions } from './options.ts'

const format = ({
  url,
  line,
  column,
  baseURL,
}: {
  url: string
  line?: number
  column?: number
  baseURL?: string | null
}) =>
  formatSourceLocation(
    { type: `absolute`, url: new URL(url), line, column },
    normalizeProfileToMdOptions({ baseURL }),
  )

test(`file URL relative to baseURL in same directory`, () => {
  expect(format({ url: `file:///project/file.ts`, baseURL: `/project` })).toBe(
    `file.ts`,
  )
})

test(`file URL relative to baseURL in subdirectory`, () => {
  expect(
    format({ url: `file:///project/src/file.ts`, baseURL: `/project` }),
  ).toBe(`src/file.ts`)
})

test(`file URL relative to baseURL in parent directory`, () => {
  expect(
    format({ url: `file:///project/file.ts`, baseURL: `/project/src` }),
  ).toBe(`../file.ts`)
})

test(`file URL relative to baseURL in sibling directory`, () => {
  expect(
    format({ url: `file:///project/dist/file.ts`, baseURL: `/project/src` }),
  ).toBe(`../dist/file.ts`)
})

test(`file URL multiple levels up from baseURL`, () => {
  expect(format({ url: `file:///a/x/y.ts`, baseURL: `/a/b/c` })).toBe(
    `../../x/y.ts`,
  )
})

test(`file URL with no common prefix beyond root`, () => {
  expect(format({ url: `file:///other/file.ts`, baseURL: `/project` })).toBe(
    `../other/file.ts`,
  )
})

test(`file URL deeply nested baseURL to root-level file`, () => {
  expect(format({ url: `file:///a/file.ts`, baseURL: `/a/b/c/d` })).toBe(
    `../../../file.ts`,
  )
})

test(`appends line and column`, () => {
  expect(
    format({
      url: `file:///project/file.ts`,
      line: 10,
      column: 5,
      baseURL: `/project`,
    }),
  ).toBe(`file.ts:10:5`)
})

test(`appends line without column`, () => {
  expect(
    format({ url: `file:///project/file.ts`, line: 10, baseURL: `/project` }),
  ).toBe(`file.ts:10`)
})

test(`baseURL: null shows absolute pathname for file URLs`, () => {
  expect(format({ url: `file:///project/src/file.ts`, baseURL: null })).toBe(
    `/project/src/file.ts`,
  )
})

test(`baseURL: null shows full href for HTTP URLs`, () => {
  expect(
    format({ url: `https://example.com/src/file.ts`, baseURL: null }),
  ).toBe(`https://example.com/src/file.ts`)
})

test(`HTTP URL relative to same-origin HTTP baseURL`, () => {
  expect(
    format({
      url: `https://example.com/src/file.ts`,
      baseURL: `https://example.com/project`,
    }),
  ).toBe(`../src/file.ts`)
})

test(`HTTP URL shows full href when origin differs from baseURL`, () => {
  expect(
    format({
      url: `https://other.com/src/file.ts`,
      baseURL: `https://example.com/project`,
    }),
  ).toBe(`https://other.com/src/file.ts`)
})

test(`node: URL shows full href when baseURL is file`, () => {
  expect(format({ url: `node:fs/promises`, baseURL: `/project` })).toBe(
    `node:fs/promises`,
  )
})

test(`wasm: URL shows full href when baseURL is file`, () => {
  expect(
    format({
      url: `wasm://wasm/009f676a`,
      line: 1,
      column: 42,
      baseURL: `/project`,
    }),
  ).toBe(`wasm://wasm/009f676a:1:42`)
})

test(`undefined location returns <unknown>`, () => {
  expect(
    formatSourceLocation(
      undefined,
      normalizeProfileToMdOptions({ baseURL: `/project` }),
    ),
  ).toBe(`\`<unknown>\``)
})

test(`formatSourceLocation with relative reference displays the path`, () => {
  expect(
    formatSourceLocation(
      { type: `relative`, path: `src/index.js` },
      normalizeProfileToMdOptions({ baseURL: `/project` }),
    ),
  ).toBe(`src/index.js`)
})

test(`formatSourceLocation with relative reference appends line and column`, () => {
  expect(
    formatSourceLocation(
      { type: `relative`, path: `src/index.js`, line: 10, column: 5 },
      normalizeProfileToMdOptions({ baseURL: `/project` }),
    ),
  ).toBe(`src/index.js:10:5`)
})

describe(`makeFileReference`, () => {
  test(`absolute path becomes an absolute file URL reference`, () => {
    expect(makeFileReference(`/project/file.ts`)).toStrictEqual({
      type: `absolute`,
      url: new URL(`file:///project/file.ts`),
    })
  })

  test(`file URL becomes an absolute reference`, () => {
    expect(makeFileReference(`file:///project/file.ts`)).toStrictEqual({
      type: `absolute`,
      url: new URL(`file:///project/file.ts`),
    })
  })

  test(`bare path becomes a relative reference`, () => {
    expect(makeFileReference(`src/file.ts`)).toStrictEqual({
      type: `relative`,
      path: `src/file.ts`,
    })
  })

  test.each([
    [`empty string`, ``],
    [`unknown`, `unknown`],
    [`uppercase UNKNOWN`, `UNKNOWN`],
    [`mixed-case Unknown`, `Unknown`],
    [`nothing`, `nothing`],
    [`single question mark`, `?`],
    [`multiple question marks`, `???`],
  ])(`returns undefined for %s`, (_label, urlOrPath) => {
    expect(makeFileReference(urlOrPath)).toBeUndefined()
  })

  test.each([[`unknown.ts`], [`/src/nothing.ts`], [`a?b`]])(
    `does not treat %s as unknown`,
    urlOrPath => {
      expect(makeFileReference(urlOrPath)).toBeDefined()
    },
  )
})

describe(`makeSourceLocation`, () => {
  test(`builds a source location from a reference with line and column`, () => {
    expect(
      makeSourceLocation({
        urlOrPath: `/project/file.ts`,
        line: 10,
        column: 5,
      }),
    ).toStrictEqual({
      type: `absolute`,
      url: new URL(`file:///project/file.ts`),
      line: 10,
      column: 5,
    })
  })

  test(`returns undefined for undefined input`, () => {
    expect(makeSourceLocation(undefined)).toBeUndefined()
  })

  test(`returns undefined when the path is unknown`, () => {
    expect(makeSourceLocation({ urlOrPath: `unknown` })).toBeUndefined()
  })
})

describe(`source location line and column normalization`, () => {
  test.each([
    [`zero line`, { line: 0, column: 5 }, { line: undefined, column: 5 }],
    [`negative line`, { line: -1, column: 5 }, { line: undefined, column: 5 }],
    [`zero column`, { line: 10, column: 0 }, { line: 10, column: undefined }],
    [
      `negative column`,
      { line: 10, column: -3 },
      { line: 10, column: undefined },
    ],
    [
      `zero line and column`,
      { line: 0, column: 0 },
      { line: undefined, column: undefined },
    ],
  ])(`drops %s`, (_label, { line, column }, expected) => {
    expect(
      makeSourceLocation({ urlOrPath: `/project/file.ts`, line, column }),
    ).toStrictEqual({
      type: `absolute`,
      url: new URL(`file:///project/file.ts`),
      ...expected,
    })
  })

  test(`fileReferenceToSourceLocation preserves positive line and column`, () => {
    expect(
      fileReferenceToSourceLocation(
        { type: `relative`, path: `src/file.ts` },
        { line: 3, column: 7 },
      ),
    ).toStrictEqual({
      type: `relative`,
      path: `src/file.ts`,
      line: 3,
      column: 7,
    })
  })
})

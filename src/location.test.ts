import { describe, expect, test } from 'vitest'
import {
  commonAncestorDirectoryURL,
  formatSourceLocation,
  makeFileReference,
  makeSourceLocation,
} from './location.ts'
import { resolveProfileToMdOptions } from './testing.ts'

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
    resolveProfileToMdOptions({ baseURL }),
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

test(`file URL going up at most two levels stays relative`, () => {
  expect(format({ url: `file:///a/b/file.ts`, baseURL: `/a/b/c/d` })).toBe(
    `../../file.ts`,
  )
})

test(`file URL going up more than two levels renders absolute`, () => {
  // A long `../` prefix says how deep the base URL is rather than where the
  // file is, so a system/toolchain path renders absolute instead.
  expect(format({ url: `file:///a/file.ts`, baseURL: `/a/b/c/d` })).toBe(
    `/a/file.ts`,
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

test(`decodes the percent-escapes of an absolute file path`, () => {
  expect(
    format({ url: `file:///project/<compiler-generated>`, baseURL: null }),
  ).toBe(`/project/<compiler-generated>`)
})

test(`decodes the percent-escapes of a path relative to baseURL`, () => {
  expect(
    format({ url: `file:///project/my src/a b.ts`, baseURL: `/project` }),
  ).toBe(`my src/a b.ts`)
})

test(`leaves a path with an invalid percent-escape alone`, () => {
  expect(format({ url: `file:///project/a%zz.ts`, baseURL: null })).toBe(
    `/project/a%zz.ts`,
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

test(`HTTP URL relative to same-origin HTTP baseURL keeps the query string`, () => {
  expect(
    format({
      url: `https://example.com/w/load.php?modules=startup`,
      baseURL: `https://example.com/w/`,
    }),
  ).toBe(`load.php?modules=startup`)
})

test(`HTTP URL shows full href when origin differs from baseURL`, () => {
  expect(
    format({
      url: `https://other.com/src/file.ts`,
      baseURL: `https://example.com/project`,
    }),
  ).toBe(`https://other.com/src/file.ts`)
})

test(`webpack URL relative to same-bundle webpack baseURL`, () => {
  expect(
    format({
      url: `webpack://my-app/src/file.ts`,
      baseURL: `webpack://my-app/src/`,
    }),
  ).toBe(`file.ts`)
})

test(`webpack URL shows full href when bundle differs from baseURL`, () => {
  expect(
    format({
      url: `webpack://other-app/src/file.ts`,
      baseURL: `webpack://my-app/src/`,
    }),
  ).toBe(`webpack://other-app/src/file.ts`)
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
      resolveProfileToMdOptions({ baseURL: `/project` }),
    ),
  ).toBe(`<unknown>`)
})

test(`formatSourceLocation with relative reference displays the path`, () => {
  expect(
    formatSourceLocation(
      { type: `relative`, path: `src/index.js` },
      resolveProfileToMdOptions({ baseURL: `/project` }),
    ),
  ).toBe(`src/index.js`)
})

test(`formatSourceLocation with relative reference appends line and column`, () => {
  expect(
    formatSourceLocation(
      { type: `relative`, path: `src/index.js`, line: 10, column: 5 },
      resolveProfileToMdOptions({ baseURL: `/project` }),
    ),
  ).toBe(`src/index.js:10:5`)
})

test(`formatSourceLocation with logical reference displays the name verbatim regardless of baseURL`, () => {
  expect(
    formatSourceLocation(
      { type: `logical`, name: `java.util.HashMap` },
      resolveProfileToMdOptions({ baseURL: `/project` }),
    ),
  ).toBe(`java.util.HashMap`)
  expect(
    formatSourceLocation(
      { type: `logical`, name: `java.util.HashMap` },
      resolveProfileToMdOptions({ baseURL: null }),
    ),
  ).toBe(`java.util.HashMap`)
})

test(`formatSourceLocation with logical reference appends line and column`, () => {
  expect(
    formatSourceLocation(
      { type: `logical`, name: `Enum`, line: 10, column: 5 },
      resolveProfileToMdOptions({ baseURL: `/project` }),
    ),
  ).toBe(`Enum:10:5`)
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
    [`/project/src/./file.ts`, `file:///project/src/file.ts`],
    [`/project/src/../file.ts`, `file:///project/file.ts`],
    // Node.js 22's URL parser keeps a dot segment that follows a segment
    // starting with a dot, so this case passes only because
    // `makeFileReference` resolves dot segments itself.
    [`/project/.cache/./file.ts`, `file:///project/.cache/file.ts`],
    [`/../file.ts`, `file:///file.ts`],
    [`/project/src/.`, `file:///project/src/`],
    [`https://example.com/a/./file.ts`, `https://example.com/a/file.ts`],
  ])(`resolves the dot segments of %s`, (urlOrPath, expected) => {
    expect(makeFileReference(urlOrPath)).toStrictEqual({
      type: `absolute`,
      url: new URL(expected),
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
        type: `file`,
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

  test(`builds a logical source location from a logical name`, () => {
    expect(
      makeSourceLocation({
        type: `logical`,
        name: `java.util.HashMap`,
        line: 3,
      }),
    ).toStrictEqual({
      type: `logical`,
      name: `java.util.HashMap`,
      line: 3,
      column: undefined,
    })
  })

  test(`returns undefined for undefined input`, () => {
    expect(makeSourceLocation(undefined)).toBeUndefined()
  })

  test(`returns undefined when the path is unknown`, () => {
    expect(
      makeSourceLocation({ type: `file`, urlOrPath: `unknown` }),
    ).toBeUndefined()
  })

  test.each([[``], [`?`], [`???`]])(
    `returns undefined when the logical name is %j`,
    logicalName => {
      expect(
        makeSourceLocation({ type: `logical`, name: logicalName }),
      ).toBeUndefined()
    },
  )

  test.each([[`unknown`], [`Unknown`], [`nothing`]])(
    `keeps the file-path unknown sentinel %j as a logical name`,
    logicalName => {
      // A class or module can have these names (a default-package class, an
      // Erlang module), unlike a file path.
      expect(
        makeSourceLocation({ type: `logical`, name: logicalName }),
      ).toStrictEqual({
        type: `logical`,
        name: logicalName,
        line: undefined,
        column: undefined,
      })
    },
  )
})

describe(`commonAncestorDirectoryURL`, () => {
  test(`returns undefined for no URLs`, () => {
    expect(commonAncestorDirectoryURL([])).toBeUndefined()
  })

  test.each([
    [
      `a single URL's containing directory`,
      [`file:///project/src/file.ts`],
      `file:///project/src/`,
    ],
    [
      `identical URLs' containing directory`,
      [`file:///project/src/file.ts`, `file:///project/src/file.ts`],
      `file:///project/src/`,
    ],
    [
      `the deepest shared directory of divergent URLs`,
      [`file:///a/b/x.ts`, `file:///a/c/y.ts`],
      `file:///a/`,
    ],
    [
      `the parent directory when one path is a directory prefix of another`,
      [`file:///a/b/c.js`, `file:///a/b.js`],
      `file:///a/`,
    ],
    [
      `the root directory when URLs diverge at the root`,
      [`file:///a/x.ts`, `file:///b/y.ts`],
      `file:///`,
    ],
    [
      `encoded segments intact`,
      [`file:///my%20project/src/a.ts`, `file:///my%20project/lib/b.ts`],
      `file:///my%20project/`,
    ],
    [
      `same-origin HTTP URLs' deepest shared directory`,
      [`https://example.com/app/src/a.js`, `https://example.com/app/lib/b.js`],
      `https://example.com/app/`,
    ],
    [
      `the first-seen origin's directory when differing protocols tie`,
      [`file:///project/a.ts`, `https://example.com/project/b.ts`],
      `file:///project/`,
    ],
    [
      `the first-seen origin's directory when differing hosts tie`,
      [`https://example.com/a.js`, `https://other.com/b.js`],
      `https://example.com/`,
    ],
    [
      `the dominant host's directory across mixed hosts`,
      [
        `https://cdn.example.net/lib/vendor.js`,
        `https://example.com/app/src/a.js`,
        `https://example.com/app/lib/b.js`,
      ],
      `https://example.com/app/`,
    ],
    [
      `the dominant file: directory despite a lone HTTP URL`,
      [
        `file:///project/src/a.ts`,
        `https://example.com/app.js`,
        `file:///project/lib/b.ts`,
      ],
      `file:///project/`,
    ],
  ])(`returns %s`, (_label, urls, expected) => {
    expect(
      commonAncestorDirectoryURL(urls.map(url => new URL(url))),
    ).toStrictEqual(new URL(expected))
  })
})

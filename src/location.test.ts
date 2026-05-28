import { expect, test } from 'vitest'
import { formatProfileLocation } from './location.ts'
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
  formatProfileLocation(
    { url: new URL(url), line, column },
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

test(`undefined location returns <native>`, () => {
  expect(
    formatProfileLocation(
      undefined,
      normalizeProfileToMdOptions({ baseURL: `/project` }),
    ),
  ).toBe(`\`<native>\``)
})

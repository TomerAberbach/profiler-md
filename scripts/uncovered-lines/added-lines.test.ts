import { expect, test } from 'vitest'
import { parseAddedLines } from './added-lines.ts'

test(`parseAddedLines numbers the added lines of each hunk and file`, () => {
  const diff = [
    `diff --git a/src/a.ts b/src/a.ts`,
    `--- a/src/a.ts`,
    `+++ b/src/a.ts`,
    `@@ -3 +3,2 @@ context`,
    `-old`,
    `+first`,
    `+second`,
    `@@ -9,2 +10,0 @@`,
    `-gone`,
    `-gone`,
    `diff --git a/src/b.ts b/src/b.ts`,
    `--- /dev/null`,
    `+++ b/src/b.ts`,
    `@@ -0,0 +1 @@`,
    `+++ b/looks-like-a-header`,
  ].join(`\n`)

  const added = parseAddedLines(diff)

  expect(added).toStrictEqual([
    { path: `src/a.ts`, line: 3, text: `first` },
    { path: `src/a.ts`, line: 4, text: `second` },
    { path: `src/b.ts`, line: 1, text: `++ b/looks-like-a-header` },
  ])
})

test(`parseAddedLines reads a line added after one without a final newline`, () => {
  const diff = [
    `+++ b/src/a.ts`,
    `@@ -1 +1 @@`,
    `-old`,
    String.raw`\ No newline at end of file`,
    `+new`,
  ].join(`\n`)

  const added = parseAddedLines(diff)

  expect(added).toStrictEqual([{ path: `src/a.ts`, line: 1, text: `new` }])
})

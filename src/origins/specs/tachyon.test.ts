import { describe, expect, test } from 'vitest'
import type { FunctionCategory, ProfileEntry } from '../../options.ts'
import { absoluteEntry, determineOrigin, relativeEntry } from '../testing.ts'
import { tachyonOriginSpec } from './tachyon.ts'

describe(`detection`, () => {
  // A synthetic per-thread frame and a frozen-bootstrap frame in tachyon's
  // `file:func:line` shape.
  test.each([`tid:15522692`, `<frozen runpy>:_run_module_as_main:201`])(
    `detects tachyon by its %s frame`,
    name => {
      expect(
        determineOrigin({
          format: `collapsed`,
          entries: [relativeEntry(name)],
        }),
      ).toBe(`tachyon`)
    },
  )

  test(`a marker-free folded "file:func:line" stack stays unknown`, () => {
    expect(
      determineOrigin({
        format: `collapsed`,
        entries: [relativeEntry(`app.py:work:20`)],
      }),
    ).toBe(`unknown`)
  })
})

describe(`normalizeStackFrame`, () => {
  const { normalizeStackFrame } = tachyonOriginSpec

  test(`splits a file:func:line frame, keeping the line as the executing line`, () => {
    // The line stays out of the location so a function sampled at several
    // lines aggregates as one, with the lines feeding the per-line breakdown.
    expect(normalizeStackFrame({ name: `script.py:fib:4` })).toEqual({
      name: `fib`,
      location: { type: `file`, urlOrPath: `script.py` },
      line: 4,
    })
  })

  test.each([`C:\\proj\\app.py`, `D:/proj/app.py`])(
    `keeps the Windows drive-letter path %s whole instead of splitting on the drive colon`,
    path => {
      expect(normalizeStackFrame({ name: `${path}:run:10` })).toEqual({
        name: `run`,
        location: { type: `file`, urlOrPath: path },
        line: 10,
      })
    },
  )

  test(`keeps a C++ namespaced function name intact`, () => {
    expect(normalizeStackFrame({ name: `file.cpp:Foo::bar:42` })).toEqual({
      name: `Foo::bar`,
      location: { type: `file`, urlOrPath: `file.cpp` },
      line: 42,
    })
  })

  test(`drops the thread frame every stack is rooted at`, () => {
    expect(normalizeStackFrame({ name: `tid:15522692` })).toBeNull()
  })

  test(`renames the bare <GC> leaf to the garbage collector label`, () => {
    expect(normalizeStackFrame({ name: `<GC>` })).toEqual({
      name: `(garbage collector)`,
    })
  })

  test(`renames the bare <native> frame to the native label`, () => {
    expect(normalizeStackFrame({ name: `<native>` })).toEqual({
      name: `(native)`,
    })
  })

  test(`drops the -1 line of a frame whose line tachyon could not resolve`, () => {
    expect(normalizeStackFrame({ name: `__init__:__init__:-1` })).toEqual({
      name: `__init__`,
      location: { type: `file`, urlOrPath: `__init__` },
    })
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = tachyonOriginSpec

  // Shares py-spy's CPython categorization.
  test.each<{
    description: string
    entry: ProfileEntry
    expected: FunctionCategory
  }>([
    {
      description: `frozen bootstrap modules are stdlib`,
      entry: relativeEntry(`f`, `<frozen runpy>`),
      expected: `stdlib`,
    },
    {
      description: `interpreter stdlib modules are stdlib`,
      entry: absoluteEntry(
        `f`,
        `file:///usr/lib/python3.12/asyncio/base_events.py`,
      ),
      expected: `stdlib`,
    },
    {
      description: `installed packages are third-party`,
      entry: absoluteEntry(
        `f`,
        `file:///app/.venv/lib/python3.12/site-packages/flask/app.py`,
      ),
      expected: `third-party`,
    },
    {
      description: `project files are ours`,
      entry: relativeEntry(`f`, `script.py`),
      expected: `ours`,
    },
    {
      description: `the renamed garbage collector frame is garbage-collector`,
      entry: relativeEntry(`(garbage collector)`),
      expected: `garbage-collector`,
    },
    {
      description: `the renamed native frame is native`,
      entry: relativeEntry(`(native)`),
      expected: `native`,
    },
  ])(`$description`, ({ entry, expected }) => {
    expect(categorizeEntry(entry)).toBe(expected)
  })
})

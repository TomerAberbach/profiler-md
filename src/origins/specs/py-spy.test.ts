import { describe, expect, test } from 'vitest'
import { absoluteEntry, determineOrigin, relativeEntry } from '../testing.ts'
import { pySpyOriginSpec } from './py-spy.ts'

describe(`detection`, () => {
  test.each([`<module> (<frozen runpy>:5)`, `parse (black/parsing.py:42)`])(
    `detects py-spy by its "func (file:line)" frame %s`,
    name => {
      expect(
        determineOrigin({
          format: `collapsed`,
          entries: [relativeEntry(name)],
        }),
      ).toBe(`py-spy`)
    },
  )

  test.each([
    [`/usr/lib/python3.11/ast.py`, `parse`],
    [`<frozen runpy>`, `_run_code`],
  ])(
    `detects py-spy by the CPython install-layout location %s in speedscope`,
    (path, name) => {
      expect(
        determineOrigin({
          format: `speedscope`,
          entries: [relativeEntry(name, path)],
        }),
      ).toBe(`py-spy`)
    },
  )

  test(`a plain Python source file is not a CPython marker`, () => {
    expect(
      determineOrigin({
        format: `speedscope`,
        entries: [relativeEntry(`work`, `app.py`)],
      }),
    ).toBe(`unknown`)
  })
})

describe(`normalizeStackFrame`, () => {
  const { normalizeStackFrame } = pySpyOriginSpec

  test(`splits the trailing (file:line) into a location and sampled line`, () => {
    expect(
      normalizeStackFrame({ name: `parse (black/parsing.py:42)` }, `collapsed`),
    ).toEqual({
      name: `parse`,
      location: { urlOrPath: `black/parsing.py` },
      line: 42,
    })
  })

  test(`keeps a frozen-module location intact`, () => {
    expect(
      normalizeStackFrame(
        { name: `<module> (<frozen importlib._bootstrap>:1080)` },
        `collapsed`,
      ),
    ).toEqual({
      name: `<module>`,
      location: { urlOrPath: `<frozen importlib._bootstrap>` },
      line: 1080,
    })
  })

  test(`leaves a thread frame unchanged`, () => {
    expect(normalizeStackFrame({ name: `tid:7` }, `collapsed`)).toEqual({
      name: `tid:7`,
    })
  })

  test(`reinterprets a located speedscope frame's line as the executing line`, () => {
    // Py-spy's speedscope export emits one frame per sampled line; the line
    // must feed the line breakdown rather than the function's identity.
    expect(
      normalizeStackFrame(
        {
          name: `parse`,
          location: { urlOrPath: `black/parsing.py`, line: 42 },
        },
        `speedscope`,
      ),
    ).toEqual({
      name: `parse`,
      location: { urlOrPath: `black/parsing.py` },
      line: 42,
    })
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = pySpyOriginSpec

  test(`frozen bootstrap modules are stdlib`, () => {
    expect(categorizeEntry(relativeEntry(`f`, `<frozen runpy>`))).toBe(`stdlib`)
  })

  test(`interpreter stdlib modules are stdlib`, () => {
    expect(
      categorizeEntry(
        absoluteEntry(`f`, `file:///usr/lib/python3.12/asyncio/base_events.py`),
      ),
    ).toBe(`stdlib`)
  })

  test(`installed packages are third-party`, () => {
    expect(
      categorizeEntry(
        absoluteEntry(
          `f`,
          `file:///app/.venv/lib/python3.12/site-packages/flask/app.py`,
        ),
      ),
    ).toBe(`third-party`)
  })

  test(`project files are ours`, () => {
    expect(categorizeEntry(relativeEntry(`f`, `script.py`))).toBe(`ours`)
  })
})

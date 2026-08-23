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

  test(`splits the trailing (file:line) into a location and executing line`, () => {
    expect(
      normalizeStackFrame({ name: `parse (black/parsing.py:42)` }, `collapsed`),
    ).toEqual({
      name: `parse`,
      location: { type: `file`, urlOrPath: `black/parsing.py` },
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
      location: { type: `file`, urlOrPath: `<frozen importlib._bootstrap>` },
      line: 1080,
    })
  })

  test(`drops the placeholder path of a native frame it could not symbolicate`, () => {
    expect(
      normalizeStackFrame({ name: `0x7f3a1b2c (?)` }, `collapsed`),
    ).toEqual({ name: `0x7f3a1b2c` })
  })

  test(`keeps the module path of a native frame without a line`, () => {
    expect(
      normalizeStackFrame(
        { name: `PyObject_Call (/usr/lib/libpython3.12.so.1.0)` },
        `collapsed`,
      ),
    ).toEqual({
      name: `PyObject_Call`,
      location: { type: `file`, urlOrPath: `/usr/lib/libpython3.12.so.1.0` },
    })
  })

  test(`drops the placeholder path and line of a speedscope native frame`, () => {
    expect(
      normalizeStackFrame(
        {
          name: `0x7f3a1b2c`,
          location: { type: `file`, urlOrPath: `?`, line: 0 },
        },
        `speedscope`,
      ),
    ).toEqual({ name: `0x7f3a1b2c` })
  })

  test(`drops the placeholder line 0 of a speedscope native frame`, () => {
    expect(
      normalizeStackFrame(
        {
          name: `PyObject_Call`,
          location: {
            type: `file`,
            urlOrPath: `/usr/lib/libpython3.12.so.1.0`,
            line: 0,
          },
        },
        `speedscope`,
      ),
    ).toEqual({
      name: `PyObject_Call`,
      location: { type: `file`, urlOrPath: `/usr/lib/libpython3.12.so.1.0` },
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
          location: { type: `file`, urlOrPath: `black/parsing.py`, line: 42 },
        },
        `speedscope`,
      ),
    ).toEqual({
      name: `parse`,
      location: { type: `file`, urlOrPath: `black/parsing.py` },
      line: 42,
    })
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = pySpyOriginSpec

  test(`a native frame without a location is native`, () => {
    expect(categorizeEntry(relativeEntry(`0x7f3a1b2c`))).toBe(`native`)
  })

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

  test.each([
    [`libc.so.6`],
    [`/usr/lib/x86_64-linux-gnu/libc.so.6`],
    [`/usr/local/lib/libpython3.12.so.1.0`],
  ])(`a native frame in the shared library %s is native`, path => {
    expect(categorizeEntry(relativeEntry(`PyObject_Call`, path))).toBe(`native`)
  })

  test(`a compiled extension module of an installed package is third-party`, () => {
    expect(
      categorizeEntry(
        absoluteEntry(
          `CPyDef_black___main`,
          `file:///venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`,
        ),
      ),
    ).toBe(`third-party`)
  })

  test(`project files are ours`, () => {
    expect(categorizeEntry(relativeEntry(`f`, `script.py`))).toBe(`ours`)
  })
})

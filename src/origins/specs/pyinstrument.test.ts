import { describe, expect, test } from 'vitest'
import { determineOrigin, relativeEntry } from '../testing.ts'
import { pyinstrumentOriginSpec } from './pyinstrument.ts'

describe(`detection`, () => {
  test(`detects pyinstrument by its <built-in> C function frame`, () => {
    expect(
      determineOrigin({
        format: `speedscope`,
        entries: [relativeEntry(`compile`, `<built-in>`)],
      }),
    ).toBe(`pyinstrument`)
  })

  test(`detects pyinstrument by its [self] frame`, () => {
    expect(
      determineOrigin({
        format: `speedscope`,
        entries: [relativeEntry(`[self]`)],
      }),
    ).toBe(`pyinstrument`)
  })

  test(`detects pyinstrument by the exporter origin hint`, () => {
    expect(
      determineOrigin({
        format: `speedscope`,
        hint: `pyinstrument`,
        entries: [
          relativeEntry(`format_str`, `/src/black/src/black/__init__.py`),
        ],
      }),
    ).toBe(`pyinstrument`)
  })

  // Py-spy's marker accepts any CPython install-layout location, which
  // pyinstrument's frames also have, so the hint has to outrank it.
  test(`the exporter origin hint outranks py-spy's CPython location marker`, () => {
    expect(
      determineOrigin({
        format: `speedscope`,
        hint: `pyinstrument`,
        entries: [relativeEntry(`_run_code`, `<frozen runpy>`)],
      }),
    ).toBe(`pyinstrument`)
  })

  test(`a plain Python source file is not a pyinstrument marker`, () => {
    expect(
      determineOrigin({
        format: `speedscope`,
        entries: [relativeEntry(`work`, `app.py`)],
      }),
    ).toBe(`unknown`)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = pyinstrumentOriginSpec

  test(`a C function is native`, () => {
    expect(categorizeEntry(relativeEntry(`compile`, `<built-in>`))).toBe(
      `native`,
    )
  })

  test(`an application source file is ours`, () => {
    expect(
      categorizeEntry(
        relativeEntry(`format_str`, `/src/black/src/black/__init__.py`),
      ),
    ).toBe(`ours`)
  })

  test(`an installed package is third-party`, () => {
    expect(
      categorizeEntry(
        relativeEntry(
          `invoke`,
          `/venv/lib/python3.11/site-packages/click/core.py`,
        ),
      ),
    ).toBe(`third-party`)
  })

  test.each([`/usr/lib/python3.11/ast.py`, `<frozen runpy>`])(
    `the CPython install-layout location %s is stdlib`,
    path => {
      expect(categorizeEntry(relativeEntry(`parse`, path))).toBe(`stdlib`)
    },
  )
})

describe(`normalizeStackFrame`, () => {
  const { normalizeStackFrame } = pyinstrumentOriginSpec

  test(`drops the [self] frame so its time returns to the frame it was split from`, () => {
    expect(normalizeStackFrame({ name: `[self]` })).toBeNull()
  })

  test(`keeps a located frame named [self]`, () => {
    const input = {
      name: `[self]`,
      location: { type: `file`, urlOrPath: `app.py` },
    } as const
    expect(normalizeStackFrame(input)).toBe(input)
  })

  test(`drops the placeholder line 0 of a C function frame`, () => {
    expect(
      normalizeStackFrame({
        name: `compile`,
        location: { type: `file`, urlOrPath: `<built-in>`, line: 0 },
      }),
    ).toEqual({
      name: `compile`,
      location: { type: `file`, urlOrPath: `<built-in>` },
    })
  })

  test(`keeps a Python frame's definition line`, () => {
    const input = {
      name: `format_str`,
      location: {
        type: `file`,
        urlOrPath: `/src/black/src/black/__init__.py`,
        line: 1189,
      },
    } as const
    expect(normalizeStackFrame(input)).toBe(input)
  })
})

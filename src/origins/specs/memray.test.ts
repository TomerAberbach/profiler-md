import { describe, expect, test } from 'vitest'
import { determineOrigin, relativeEntry } from '../testing.ts'
import { memrayOriginSpec } from './memray.ts'

describe(`detection`, () => {
  test(`markerless: a capture's own frames resolve it as the format's fallback`, () => {
    expect(
      determineOrigin({
        format: `memray`,
        entries: [relativeEntry(`main`, `/src/app/main.py`)],
      }),
    ).toBe(`memray`)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = memrayOriginSpec

  test(`an application frame is ours`, () => {
    expect(categorizeEntry(relativeEntry(`main`, `/src/app/main.py`))).toBe(
      `ours`,
    )
  })

  test(`an installed package's frame is third-party`, () => {
    expect(
      categorizeEntry(
        relativeEntry(
          `format_str`,
          `/venv/lib/python3.11/site-packages/black/__init__.py`,
        ),
      ),
    ).toBe(`third-party`)
  })

  test(`an interpreter frame is stdlib`, () => {
    expect(
      categorizeEntry(relativeEntry(`parse`, `/usr/lib/python3.11/ast.py`)),
    ).toBe(`stdlib`)
    expect(
      categorizeEntry(relativeEntry(`_load`, `<frozen importlib._bootstrap>`)),
    ).toBe(`stdlib`)
  })
})

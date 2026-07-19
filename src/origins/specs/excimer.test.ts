import { describe, expect, test } from 'vitest'
import { determineOrigin, relativeEntry } from '../testing.ts'
import { excimerOriginSpec } from './excimer.ts'

describe(`detection`, () => {
  test(`markerless: an undetected speedscope input falls back past excimer`, () => {
    expect(
      determineOrigin({
        format: `speedscope`,
        entries: [relativeEntry(`run`, `/var/www/index.php`)],
      }),
    ).toBe(`unknown`)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = excimerOriginSpec

  test(`a located application frame is ours`, () => {
    expect(categorizeEntry(relativeEntry(`run`, `/var/www/index.php`))).toBe(
      `ours`,
    )
  })

  test(`a locationless frame is stdlib`, () => {
    expect(categorizeEntry(relativeEntry(`array_map`))).toBe(`stdlib`)
  })
})

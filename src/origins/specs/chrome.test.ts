import { describe, expect, test } from 'vitest'
import { absoluteEntry, determineOrigin, relativeEntry } from '../testing.ts'
import { chromeOriginSpec } from './chrome.ts'

describe(`detection`, () => {
  test.each([
    `https://example.com/assets/app.js`,
    `http://localhost:8080/index.js`,
    `chrome-extension://abcdefgh/content.js`,
    `chrome://settings/settings.js`,
    `chrome-untrusted://new-tab-page/one-google-bar.js`,
    `devtools://devtools/bundled/panels/timeline/timeline.js`,
  ])(`detects chrome by the %s script`, url => {
    expect(
      determineOrigin({
        format: `v8-cpu-profile`,
        entries: [absoluteEntry(`f`, url)],
      }),
    ).toBe(`chrome`)
  })

  test(`detects chrome by a location-less native DOM function`, () => {
    expect(
      determineOrigin({
        format: `v8-cpu-profile`,
        entries: [relativeEntry(`createElement`)],
      }),
    ).toBe(`chrome`)
  })

  test(`a located function sharing a DOM function name doesn't trigger chrome`, () => {
    // A DOM implemented in JavaScript (e.g. jsdom) defines the standard
    // functions in located sources.
    expect(
      determineOrigin({
        format: `v8-cpu-profile`,
        entries: [
          absoluteEntry(
            `createElement`,
            `file:///app/node_modules/jsdom/lib/jsdom/living/nodes/Document-impl.js`,
          ),
          absoluteEntry(`x`, `node:fs`),
        ],
      }),
    ).toBe(`node`)
  })

  test(`detects chrome in a heap snapshot by Blink-internal classes`, () => {
    expect(
      determineOrigin({
        format: `v8-heap-snapshot`,
        entries: [relativeEntry(`Object`), relativeEntry(`StyleEngine`)],
      }),
    ).toBe(`chrome`)
  })

  test(`a located class sharing a Blink-internal name doesn't trigger chrome`, () => {
    expect(
      determineOrigin({
        format: `v8-heap-snapshot`,
        entries: [
          absoluteEntry(`StyleEngine`, `file:///app/src/style-engine.ts`),
        ],
      }),
    ).toBe(`node`)
  })

  test(`a runtime marker outranks web-page evidence`, () => {
    expect(
      determineOrigin({
        format: `v8-cpu-profile`,
        entries: [
          absoluteEntry(`fetch`, `https://example.com/polyfill.js`),
          absoluteEntry(`readFile`, `node:fs`),
        ],
      }),
    ).toBe(`node`)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = chromeOriginSpec

  test(`a web-page script is ours`, () => {
    expect(
      categorizeEntry(absoluteEntry(`f`, `https://example.com/app.js`)),
    ).toBe(`ours`)
  })

  test(`an extension script is third-party`, () => {
    expect(
      categorizeEntry(
        absoluteEntry(`f`, `chrome-extension://abcdefgh/content.js`),
      ),
    ).toBe(`third-party`)
  })

  test(`a bundled node_modules source is third-party`, () => {
    expect(
      categorizeEntry(relativeEntry(`f`, `node_modules/lodash/lodash.js`)),
    ).toBe(`third-party`)
  })

  test(`a locationless engine frame is stdlib`, () => {
    expect(categorizeEntry(relativeEntry(`get`))).toBe(`stdlib`)
  })
})

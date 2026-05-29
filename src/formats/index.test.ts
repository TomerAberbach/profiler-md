import { readFileSync } from 'node:fs'
import { describe, expect, test } from 'vitest'
import { languages } from '../cli/languages.ts'
import { fixturePath } from '../testing/fixtures.ts'
import { formatConverters, profileToMd, profileToMdAsync } from './index.ts'
import type { Format } from './index.ts'

const fixturesByKind = { json: new Set<string>(), binary: new Set<string>() }
for (const { examples } of languages.values()) {
  for (const [format, formatExamples] of Object.entries(examples ?? {})) {
    const { kind } = formatConverters[format as Format]
    for (const { filename } of formatExamples) {
      fixturesByKind[kind].add(filename)
    }
  }
}

const jsonFixtures = [...fixturesByKind.json]
const binaryFixtures = [...fixturesByKind.binary]
const allFixtures = [...jsonFixtures, ...binaryFixtures]

describe(`profileToMd`, () => {
  describe.each(jsonFixtures)(`auto-detects %s`, filename => {
    const content = readFileSync(fixturePath(filename))

    test(`from string`, () => {
      const md = profileToMd(content.toString(`utf8`), { baseURL: null })

      expect(md).toMatch(/^# /u)
    })

    test(`from Uint8Array`, () => {
      const md = profileToMd(new Uint8Array(content), { baseURL: null })

      expect(md).toMatch(/^# /u)
    })
  })

  describe.each(binaryFixtures)(`auto-detects %s`, filename => {
    const content = readFileSync(fixturePath(filename))

    test(`from Uint8Array`, () => {
      const md = profileToMd(new Uint8Array(content), { baseURL: null })

      expect(md).toMatch(/^# /u)
    })

    test(`from one-shot Iterable<Uint8Array>`, () => {
      const bytes = new Uint8Array(content)
      const iterable = (function* () {
        yield bytes
      })()

      const md = profileToMd(iterable, { baseURL: null })

      expect(md).toMatch(/^# /u)
    })
  })

  test(`forced format produces same output as auto-detect`, () => {
    const content = readFileSync(fixturePath(`node.cpuprofile`))

    const auto = profileToMd(content.toString(`utf8`), { baseURL: null })
    const forced = profileToMd(content.toString(`utf8`), {
      baseURL: null,
      format: `v8-cpu-profile`,
    })

    expect(forced).toBe(auto)
  })

  test(`throws on unknown data`, () => {
    expect(() => profileToMd(`{}`)).toThrow(/could not detect/iu)
  })

  test(`throws unified error on non-JSON string`, () => {
    expect(() => profileToMd(`this is not a profile`)).toThrow(
      /could not detect/iu,
    )
  })
})

describe(`profileToMdAsync`, () => {
  describe.each(allFixtures)(`auto-detects %s`, filename => {
    const content = readFileSync(fixturePath(filename))

    test(`from Blob`, async () => {
      const blob = new Blob([content])

      const md = await profileToMdAsync(blob, { baseURL: null })

      expect(md).toMatch(/^# /u)
    })

    test(`from ReadableStream`, async () => {
      const stream = new ReadableStream<Uint8Array>({
        start(controller) {
          controller.enqueue(new Uint8Array(content))
          controller.close()
        },
      })

      const md = await profileToMdAsync(stream, { baseURL: null })

      expect(md).toMatch(/^# /u)
    })
  })

  test(`forced format works`, async () => {
    const content = readFileSync(fixturePath(`node.cpuprofile`))
    const blob = new Blob([content])

    const md = await profileToMdAsync(blob, {
      baseURL: null,
      format: `v8-cpu-profile`,
    })

    expect(md).toMatch(/^# /u)
  })

  test(`throws on unknown data`, async () => {
    const blob = new Blob([`{}`])

    await expect(profileToMdAsync(blob)).rejects.toThrow(/could not detect/iu)
  })
})

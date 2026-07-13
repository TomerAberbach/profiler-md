import { expect, test } from 'vitest'
import { maybeJson, maybeJsonAsync } from './json.ts'

test.each([
  [`{"a":1}`, true],
  [`[1,2]`, true],
  [`"text"`, true],
  [`-42`, true],
  [`true`, true],
  [`false`, true],
  [`null`, true],
  [`0`, true],
  [`9`, true],
  [` \t\r\n{"a":1}`, true],
  [`<svg>`, false],
  [`hello`, false],
  [`+1`, false],
  [`.5`, false],
  [`\u001F\u008B`, false],
])(`maybeJson reports %j as maybe-JSON: %s`, (input, expected) => {
  expect(maybeJson(input)).toBe(expected)
  expect(maybeJson(new TextEncoder().encode(input))).toBe(expected)
})

test.each([[``], [` \t\r\n `]])(
  `maybeJson conservatively reports the all-whitespace input %j as maybe-JSON`,
  input => {
    expect(maybeJson(input)).toBe(true)
    expect(maybeJson(new TextEncoder().encode(input))).toBe(true)
  },
)

test(`maybeJson conservatively reports maybe-JSON when only whitespace fits in the scanned prefix`, () => {
  const input = `${` `.repeat(5000)}not json`

  expect(maybeJson(input)).toBe(true)
  expect(maybeJson(new TextEncoder().encode(input))).toBe(true)
})

test.each([
  [`{"a":1}`, true],
  [`hello`, false],
])(
  `maybeJson skips a UTF-8 byte order mark before %j and reports maybe-JSON: %s`,
  (input, expected) => {
    const bytes = new Uint8Array([
      0xef,
      0xbb,
      0xbf,
      ...new TextEncoder().encode(input),
    ])

    expect(maybeJson(bytes)).toBe(expected)
  },
)

test.each([
  [`{"a":1}`, true],
  [` \n[1]`, true],
  [`hello`, false],
  [`${` `.repeat(5000)}not json`, true],
])(
  `maybeJsonAsync reports the blob %j as maybe-JSON: %s`,
  async (input, expected) => {
    await expect(maybeJsonAsync(new Blob([input]))).resolves.toBe(expected)
  },
)

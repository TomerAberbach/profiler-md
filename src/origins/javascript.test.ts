import { describe, expect, test } from 'vitest'
import { javaScriptConstructorCategory } from './javascript.ts'

describe(`javaScriptConstructorCategory`, () => {
  test.each([
    [`Array`, `array`],
    [`Uint8Array`, `array`],
    [`Array Iterator`, `array`],
    [`Function`, `function`],
    [`AsyncGeneratorFunction`, `function`],
    [`Object`, `object`],
    [`Map Iterator`, `object`],
    [`RegExp`, `regexp`],
  ])(`categorizes the language's %s class as %s`, (name, category) => {
    expect(javaScriptConstructorCategory(name)).toBe(category)
  })

  // A wrapper is an object holding a primitive, and a format types the
  // primitives themselves directly.
  test.each([`Number`, `String`, `Boolean`, `Symbol`, `BigInt`])(
    `leaves the %s wrapper class to the format`,
    name => {
      expect(javaScriptConstructorCategory(name)).toBeUndefined()
    },
  )

  // Only the format states that the host allocated a node. A program may
  // define a class named `Cache` or `Range` as readily as the web platform.
  test.each([`Window`, `HTMLDivElement`, `AbortController`, `Cache`, `Range`])(
    `leaves the web platform's %s to the format`,
    name => {
      expect(javaScriptConstructorCategory(name)).toBeUndefined()
    },
  )

  test.each([
    [`a global the language defines`, `Promise`],
    [`a namespace object`, `Math`],
    [`a user-defined class`, `MyClass`],
    [`a JavaScriptCore class`, `FunctionExecutable`],
    [`a V8 class`, `system / Context`],
  ])(`leaves %s to the format`, (_description, name) => {
    expect(javaScriptConstructorCategory(name)).toBeUndefined()
  })
})

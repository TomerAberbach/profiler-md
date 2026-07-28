import { describe, expect, test } from 'vitest'
import { javaScriptConstructorCategory } from './javascript.ts'

describe(`javaScriptConstructorCategory`, () => {
  test.each([
    [`Array`, `array`],
    [`Uint8Array`, `array`],
    [`Array Iterator`, `array`],
    [`Function`, `closure`],
    [`AsyncGeneratorFunction`, `closure`],
    [`Object`, `object`],
    [`Map Iterator`, `object`],
    [`RegExp`, `regexp`],
    [`Number`, `number`],
    [`Symbol`, `symbol`],
    [`BigInt`, `bigint`],
  ])(`categorizes the language's %s class as %s`, (name, category) => {
    expect(javaScriptConstructorCategory(name)).toBe(category)
  })

  test.each([`Promise`, `Map`, `WeakRef`, `Intl.DateTimeFormat`])(
    `categorizes the built-in %s as built-in`,
    name => {
      expect(javaScriptConstructorCategory(name)).toBe(`built-in`)
    },
  )

  test.each([`Window`, `HTMLDivElement`, `AbortController`])(
    `categorizes the web platform's %s as native`,
    name => {
      expect(javaScriptConstructorCategory(name)).toBe(`native`)
    },
  )

  test.each([
    [`a user-defined class`, `MyClass`],
    [`a JavaScriptCore class`, `FunctionExecutable`],
    [`a V8 class`, `system / Context`],
  ])(`leaves %s to the format`, (_description, name) => {
    expect(javaScriptConstructorCategory(name)).toBeUndefined()
  })
})

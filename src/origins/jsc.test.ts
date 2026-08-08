import { describe, expect, test } from 'vitest'
import { jscConstructorCategory } from './jsc.ts'

describe(`jscConstructorCategory`, () => {
  test.each([
    [`FunctionExecutable`, `code`],
    [`UnlinkedFunctionCodeBlock`, `code`],
    [`JSLexicalEnvironment`, `internal`],
    [`<root>`, `internal`],
    [`SparseArrayValueMap`, `array`],
    [`Int8ArrayPrototype`, `object`],
    [`InternalPromise`, `object`],
    [`TextEncoderStreamEncoder`, `native`],
    [`symbol`, `symbol`],
  ])(`categorizes the engine's %s class as %s`, (name, category) => {
    expect(jscConstructorCategory(name)).toBe(category)
  })

  test.each([
    [`a class the language defines`, `Promise`],
    [`a user-defined class`, `MyClass`],
  ])(`leaves %s uncategorized`, (_description, name) => {
    expect(jscConstructorCategory(name)).toBeUndefined()
  })
})

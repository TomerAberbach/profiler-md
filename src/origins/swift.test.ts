import { describe, expect, test } from 'vitest'
import { swiftStdlibCategory } from './swift.ts'
import { relativeEntry } from './testing.ts'

describe(`swiftStdlibCategory`, () => {
  test.each([
    [`the Swift module`, `$ss17_NativeDictionaryV12ensureUniqueyyF`],
    [`a standard library type`, `$sSw8allocate9byteCount9alignmentSwSi_SitFZ`],
    [`a standard library protocol`, `$sSlsE3mapySayqd__Gqd__7ElementQzKXEKlF`],
    [
      `a generic specialization for another module's type`,
      `$sSa6appendyyxnF11SwiftSyntax07RawExprC0V_Tg5`,
    ],
  ])(`categorizes %s as stdlib`, (_description, name) => {
    expect(swiftStdlibCategory(relativeEntry(name))).toBe(`stdlib`)
  })

  test.each([
    [`a package's own function`, `$s11SwiftParser5LexerO6CursorV7advanceyyF`],
    [`a core library's function`, `$s10Foundation12NSEnumeratorC4nextypSgyF`],
    [`a declaration imported from C`, `$sSo8NSObjectC4hashSivg`],
    [`a C function`, `malloc`],
    [`a compiler-emitted runtime helper`, `__swift_getTypeByMangledName`],
  ])(`leaves %s to the origin`, (_description, name) => {
    expect(swiftStdlibCategory(relativeEntry(name))).toBeUndefined()
  })

  test(`categorizes a standard library frame with a source location`, () => {
    expect(
      swiftStdlibCategory(
        relativeEntry(
          `$sSa6appendyyxnFSS_Tg5`,
          `src/Sources/profile/main.swift`,
        ),
      ),
    ).toBe(`stdlib`)
  })
})

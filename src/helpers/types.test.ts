import { expectTypeOf, test } from 'vitest'
import type { DeepReadonly } from './types.ts'

test(`DeepReadonly`, () => {
  // Primitives pass through unchanged
  expectTypeOf<DeepReadonly<number>>().toEqualTypeOf<number>()
  expectTypeOf<DeepReadonly<string>>().toEqualTypeOf<string>()
  expectTypeOf<DeepReadonly<boolean>>().toEqualTypeOf<boolean>()
  expectTypeOf<DeepReadonly<null>>().toEqualTypeOf<null>()
  expectTypeOf<DeepReadonly<undefined>>().toEqualTypeOf<undefined>()

  // Objects get readonly properties, recursively
  expectTypeOf<DeepReadonly<{ a: number; b: { c: string } }>>().toEqualTypeOf<{
    readonly a: number
    readonly b: { readonly c: string }
  }>()

  // Arrays become ReadonlyArray, recursively
  expectTypeOf<DeepReadonly<number[]>>().toEqualTypeOf<readonly number[]>()
  expectTypeOf<DeepReadonly<{ x: number }[]>>().toEqualTypeOf<
    readonly { readonly x: number }[]
  >()

  // Maps become ReadonlyMap with a deeply readonly value
  expectTypeOf<DeepReadonly<Map<string, number>>>().toEqualTypeOf<
    ReadonlyMap<string, number>
  >()
  expectTypeOf<DeepReadonly<Map<string, { x: number }>>>().toEqualTypeOf<
    ReadonlyMap<string, { readonly x: number }>
  >()

  // Sets become ReadonlySet with a deeply readonly element
  expectTypeOf<DeepReadonly<Set<string>>>().toEqualTypeOf<ReadonlySet<string>>()
  expectTypeOf<DeepReadonly<Set<{ x: number }>>>().toEqualTypeOf<
    ReadonlySet<{ readonly x: number }>
  >()

  // Typed arrays become Readonly<T>
  expectTypeOf<DeepReadonly<Float64Array>>().toEqualTypeOf<
    Readonly<Float64Array>
  >()
  expectTypeOf<DeepReadonly<Int32Array>>().toEqualTypeOf<Readonly<Int32Array>>()
  expectTypeOf<DeepReadonly<Uint8Array>>().toEqualTypeOf<Readonly<Uint8Array>>()
})

import type { HeapSnapshotNodeCategory } from '../../modalities/heap-snapshot/type.ts'
import { categorizeGenericEntry } from '../categorize.ts'
import type { OriginSpec } from '../origin.ts'

/**
 * Julia's built-in `Profile` standard-library module, which writes V8-format
 * heap snapshots.
 *
 * Detection relies on the synthetic `<generic memory ...>` node names Julia's
 * snapshot writer invents for `Memory{T}` objects. Julia's runtime is the
 * format's sole writer for Julia, so its writer's own labels are origin-level
 * evidence; `.jl` file extensions would be language-level, so detection
 * ignores them.
 */
export const profileJlOriginSpec = {
  id: `profile-jl`,
  title: `Profile`,
  formats: [`v8-heap-snapshot`],
  isMarkerEntry: ({ name, location }) =>
    location === undefined &&
    name !== undefined &&
    JULIA_GENERIC_MEMORY_NODES.has(name),
  categorizeEntry: categorizeGenericEntry,
  categorizeHeapSnapshotDeclaredType: juliaTypeCategory,
} as const satisfies OriginSpec

/**
 * The category of a node whose declared Julia type is {@link declaredType}.
 *
 * Julia writes the concrete type of every object into V8's `meta.node_types`,
 * so the table holds thousands of names built from the program's own types
 * rather than the fifteen V8 defines. The rules match the type constructors
 * Julia's runtime and standard library define. A name none of them matches is a
 * struct, which the format categorizes as an object.
 */
function juliaTypeCategory(
  declaredType: string,
): HeapSnapshotNodeCategory | undefined {
  // The runtime's own C structs, named for the C type rather than the Julia
  // one, are the only names that can't be a program's type.
  if (declaredType.startsWith(`jl_`)) {
    return JULIA_C_STRUCT_CATEGORIES.get(declaredType) ?? `internal`
  }

  const category = JULIA_TYPE_CATEGORIES.get(declaredType)
  if (category !== undefined) {
    return category
  }

  // A parameterized type is written `Name{...}`, so its type constructor is
  // the name before the first brace.
  const braceIndex = declaredType.indexOf(`{`)
  if (braceIndex > 0) {
    return JULIA_TYPE_CONSTRUCTOR_CATEGORIES.get(
      declaredType.slice(0, braceIndex),
    )
  }

  // A function's type is written `typeof(f)`, and a closure's generated name
  // contains Julia's `var"#...#"` escape for a non-identifier binding.
  return declaredType.startsWith(`typeof(`) || declaredType.includes(`var"#`)
    ? `function`
    : undefined
}

/** The categories of the runtime's C struct type names. */
const JULIA_C_STRUCT_CATEGORIES = new Map<string, HeapSnapshotNodeCategory>([
  [`jl_array_t`, `array`],
  [`jl_genericmemory_t`, `array`],
  [`jl_svec_t`, `array`],
  [`jl_string_t`, `string`],
  [`jl_sym_t`, `symbol`],
  [`jl_code_instance_t`, `code`],
  [`jl_method_t`, `code`],
  [`jl_method_instance_t`, `code`],
])

/** The categories of the unparameterized type names Julia's runtime defines. */
const JULIA_TYPE_CATEGORIES = new Map<string, HeapSnapshotNodeCategory>([
  [`String`, `string`],
  [`Symbol`, `symbol`],
  [`Regex`, `regexp`],
  [`Base.Regex`, `regexp`],
  [`BigInt`, `big-number`],
  [`BigFloat`, `big-number`],
  [`Base.BitSet`, `array`],
  [`Core.SimpleVector`, `array`],

  // Numbers, whose bit widths Julia spells out in the type name.
  ...([`Bool`, `Char`] as const).map(name => [name, `number`] as const),
  ...([8, 16, 32, 64, 128] as const).flatMap(
    bits =>
      [
        [`Int${bits}`, `number`],
        [`UInt${bits}`, `number`],
      ] as const,
  ),
  ...([16, 32, 64] as const).map(bits => [`Float${bits}`, `number`] as const),

  // Compiled code and the syntax it came from.
  ...(
    [
      `Method`,
      `Expr`,
      `QuoteNode`,
      `LineNumberNode`,
      `GlobalRef`,
      `Core.CodeInfo`,
      `Core.CodeInstance`,
      `Core.DebugInfo`,
      `Core.MethodInstance`,
      `Core.PhiNode`,
      `Core.PhiCNode`,
      `Core.PiNode`,
      `Core.UpsilonNode`,
      `Core.GotoNode`,
      `Core.GotoIfNot`,
      `Core.ReturnNode`,
      `Core.SlotNumber`,
      `Core.SSAValue`,
      `Core.NewvarNode`,
      `Core.Binding`,
    ] as const
  ).map(name => [name, `code`] as const),

  // Types and the dispatch tables keyed on them: the runtime's bookkeeping,
  // which points at the program's code rather than holding its data.
  ...(
    [
      `DataType`,
      `Union`,
      `UnionAll`,
      `TypeVar`,
      `Core.Const`,
      `Core.MethodTable`,
      `Core.PartialStruct`,
      `Core.TypeMapEntry`,
      `Core.TypeMapLevel`,
      `Core.TypeName`,
      `Core.TypeofVararg`,
      `Module`,
      `Task`,
    ] as const
  ).map(name => [name, `internal`] as const),
])

/**
 * The categories of the type constructors Julia's runtime defines, matched
 * against the name before a parameterized type's `{`.
 */
const JULIA_TYPE_CONSTRUCTOR_CATEGORIES = new Map<
  string,
  HeapSnapshotNodeCategory
>([
  [`Array`, `array`],
  [`Memory`, `array`],
  [`MemoryRef`, `array`],
  [`GenericMemory`, `array`],
  [`GenericMemoryRef`, `array`],
  [`Tuple`, `array`],
  [`NTuple`, `array`],
  [`Vector`, `array`],
  [`Matrix`, `array`],
  [`Base.BitArray`, `array`],
  [`SubString`, `string`],
  [`Base.AnnotatedString`, `string`],
  [`Base.SubstitutionString`, `string`],
  [`Ptr`, `native`],
  [`Core.LLVMPtr`, `native`],
  [`Core.AddrSpace`, `internal`],
  [`Base.ComposedFunction`, `function`],
])

/**
 * The synthetic class names Julia's snapshot writer gives `Memory{T}` buffer
 * nodes. V8's own writers label synthetic nodes with parenthesized or
 * `system /`-prefixed names, never angle brackets.
 */
const JULIA_GENERIC_MEMORY_NODES = new Set([
  `<generic memory - inline alloc>`,
  `<generic memory - malloc>`,
])

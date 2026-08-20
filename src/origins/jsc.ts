import type { HeapSnapshotNodeCategory } from '../modalities/heap-snapshot/type.ts'

/**
 * The heap snapshot category of a constructor named {@link name} when
 * JavaScriptCore allocated it: an executable or code block the engine compiled
 * to, a scope it allocated on the heap, or one of the objects it implements
 * natively.
 *
 * Returns `undefined` for a name JavaScriptCore doesn't define, which is the
 * language's (see `javaScriptConstructorCategory`) or the program's own.
 */
export const jscConstructorCategory = (
  name: string,
): HeapSnapshotNodeCategory | undefined => CLASS_NAME_TO_CATEGORY.get(name)

const CLASS_NAME_TO_CATEGORY = new Map<string, HeapSnapshotNodeCategory>(
  Object.entries({
    Structure: `object-shape`,
    'Immutable Butterfly': `array`,
    SparseArrayValueMap: `array`,
    Callee: `function`,
    CallbackObject: `function`,
    FunctionExecutable: `code`,
    UnlinkedFunctionExecutable: `code`,
    NativeExecutable: `code`,
    ProgramExecutable: `code`,
    ModuleProgramExecutable: `code`,
    ModuleProgramCodeBlock: `code`,
    UnlinkedModuleProgramCodeBlock: `code`,
    FunctionCodeBlock: `code`,
    UnlinkedFunctionCodeBlock: `code`,
    ModuleRecord: `code`,
    JSSourceCode: `code`,
    symbol: `symbol`,
    PropertyTable: `internal`,
    StructureRareData: `internal`,
    StructureChain: `internal`,
    JSLexicalEnvironment: `internal`,
    JSModuleEnvironment: `internal`,
    JSGlobalLexicalEnvironment: `internal`,
    JSWindowProxy: `internal`,
    InjectedScriptHost: `internal`,
    CommandLineAPIHost: `internal`,
    '<root>': `internal`,
    Prototype: `object`,
    Int8ArrayPrototype: `object`,
    Uint8ArrayPrototype: `object`,
    Uint8ClampedArrayPrototype: `object`,
    Int16ArrayPrototype: `object`,
    Uint16ArrayPrototype: `object`,
    Int32ArrayPrototype: `object`,
    Uint32ArrayPrototype: `object`,
    Float32ArrayPrototype: `object`,
    Float64ArrayPrototype: `object`,
    Float16ArrayPrototype: `object`,
    BigInt64ArrayPrototype: `object`,
    BigUint64ArrayPrototype: `object`,
    InternalPromise: `object`,
    InternalPromisePrototype: `object`,
    ModuleNamespaceObject: `object`,
    WindowProperties: `native`,
    TextEncoderStreamEncoder: `native`,
    ModuleLoader: `native`,
  }),
)

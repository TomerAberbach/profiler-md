# Lock contention profile diff

Blocked 2.36s → 1.23s (-1.136s, -48.1%) over 697 → 1,035 contentions (3.4ms → 1.2ms per contention).

| Category         |  Change |   Delta |              % |          Time | Contentions |
| ---------------- | ------: | ------: | -------------: | ------------: | ----------: |
| Ours             |  -48.1% | -1.138s | 100.0% → 99.8% | 2.36s → 1.23s | 689 → 1,016 |
| Standard library | +181.2% | +1.23ms |   <0.1% → 0.2% | 0.7ms → 1.9ms |      8 → 19 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
└── … 2.36s → 1.22s (100.0% → 99.7%, self 0.5% → 0.8%) generateFile(JvmBackendContext, IrFile, List, boolean) at org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory
    ├── 2.25s → 1.16s (95.2% → 94.4%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
    │   ├── 2.20s → 1.14s (93.2% → 93.1%) generateMethod(IrFunction, SourceMapper)
    │   │   ├── 1.99s → 1.08s (84.3% → 87.8%, self 70.0% → 75.7%) generateMethodNode(IrFunction)
    │   │   │   └── … 338.2ms → 148.0ms (14.3% → 12.1%, self 3.0% → 3.4%) doGenerate(ReifiedTypeParametersUsages) at org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen
    │   │   │       ├── … 162.1ms → 62.3ms (6.9% → 5.1%) visitStatementContainer(IrStatementContainer, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   ├── … 134.4ms → 57.3ms (5.7% → 4.7%) visitReturn(IrReturn, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   │   ├── … 67.2ms → 35.7ms (2.8% → 2.9%) visitWhen(IrWhen, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   │   │   └── … 47.5ms → 30.3ms (2.0% → 2.5%) visitCall(IrCall, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   │   │       ├── … 29.7ms → 8.5ms (1.3% → 0.7%) inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen
    │   │   │       │   │   │       │   └── … 12.4ms → 1.9ms (0.5% → 0.2%, self 0.5% → 0.2%) doInline(MethodNode) at org.jetbrains.kotlin.codegen.inline.MethodInliner
    │   │   │       │   │   │       └── 10.0ms → 17.7ms (0.4% → 1.4%) 3 more callees, led by (0.3% → 0.7%) getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)
    │   │   │       │   │   └── 67.1ms → 21.6ms (2.8% → 1.8%) 3 more callees, led by (2.3% → 1.6%) accept(IrVisitor, Object) at org.jetbrains.kotlin.ir.expressions.IrCall
    │   │   │       │   ├── … 8.7ms → 0.1ms (0.4% → <0.1%) makeDefinitelyNotNull(UnwrappedType, boolean, boolean) at org.jetbrains.kotlin.types.DefinitelyNotNullType$Companion
    │   │   │       │   └── … 4.5ms → 0.9ms (0.2% → 0.1%) visitWhileLoop(IrWhileLoop, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       ├── 15.2ms → 9.1ms (0.6% → 0.7%) createFrameMapWithReceivers(IrFunction)
    │   │   │       │   └── 4.4ms → 8.1ms (0.2% → 0.7%) <init>() at org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap …
    │   │   │       ├── 17.5ms → 2.0ms (0.7% → 0.2%) generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)
    │   │   │       └── 60.9ms → 30.4ms (2.6% → 2.5%) 12 more callees, led by (1.1% → 0.4%) calculateMethodFlags(IrFunction)
    │   │   ├── 72.4ms → 24.0ms (3.1% → 2.0%) accept(MethodVisitor) at org.jetbrains.org.objectweb.asm.tree.MethodNode
    │   │   │   └── 72.4ms → 24.0ms (3.1% → 2.0%) 4 more callees, led by (2.9% → 1.9%) visitEnd() at org.jetbrains.org.objectweb.asm.MethodVisitor
    │   │   ├── … 81.7ms → 18.3ms (3.5% → 1.5%, self 1.4% → 0.6%) makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set) at org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt
    │   │   │   ├── 35.6ms → 7.8ms (1.5% → 0.6%, self 0.8% → 0.4%) makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)
    │   │   │   │   └── 10.9ms → 2.4ms (0.5% → 0.2%) createTopLevel$default(FirElementSerializer$Companion, FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean, int, Object) at org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion
    │   │   │   │       └── 10.9ms → 2.4ms (0.5% → 0.2%) createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)
    │   │   │   └── 12.8ms → 3.0ms (0.5% → 0.2%) 2 more callees, led by (0.5% → 0.2%) <init>(FirSession, JvmSerializationBindings, GenerationState, List, AbstractTypeApproximator, Fir2IrComponents, FirElementAwareStringTable) at org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension
    │   │   ├── 37.2ms → 15.1ms (1.6% → 1.2%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.DelegatingClassBuilder
    │   │   │   └── 27.2ms → 11.6ms (1.2% → 0.9%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder
    │   │   │       └── 18.9ms → 10.9ms (0.8% → 0.9%, self 0.8% → 0.6%) <init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor
    │   │   └── … 11.3ms → 1.6ms (0.5% → 0.1%) <init>(SourceMapper, SMAP, SourcePosition) at org.jetbrains.kotlin.codegen.inline.SourceMapCopier
    │   └── … 46.6ms → 15.0ms (2.0% → 1.2%) serialize(MetadataSource, MetadataSource$File) at org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer
    │       ├── … 27.5ms → 9.6ms (1.2% → 0.8%) functionProto(FirFunction) at org.jetbrains.kotlin.fir.serialization.FirElementSerializer
    │       │   ├── 4.9ms → 5.3ms (0.2% → 0.4%) serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer) at org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension
    │       │   └── … 9.1ms → 0.8ms (0.4% → 0.1%) newBuilder() at org.jetbrains.kotlin.metadata.ProtoBuf$Type
    │       └── … 6.8ms → 0.1ms (0.3% → <0.1%) constructors(FirClass) at org.jetbrains.kotlin.fir.serialization.FirElementSerializer
    └── … 102.3ms → 55.3ms (4.3% → 4.5%, self 0.7% → 1.2%) <init>(IrClass, JvmBackendContext, IrFunction, List) at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
        ├── … 39.3ms → 21.1ms (1.7%, self 1.2% → 1.1%) newClassBuilder(JvmDeclarationOrigin) at org.jetbrains.kotlin.codegen.ClassBuilderFactories$1
        │   └── … 11.5ms → 7.6ms (0.5% → 0.6%, self 0.5%) <init>(ClassReader, int) at org.jetbrains.org.objectweb.asm.ClassWriter
        ├── 12.0ms → 0ms (0.5% → 0.0%, self 0.5% → 0.0%) getDescriptorOrigin(IrDeclaration) at org.jetbrains.kotlin.backend.jvm.extensions.JvmIrDeclarationOriginKt
        └── 31.9ms → 16.6ms (1.3% → 1.4%) 5 more callees, led by (0.7% → 0.5%) mapClassSignature(IrTypeMapper, IrClass, Type, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|    Change |   Delta |            % |           Time | Contentions | Function                                                                                                          | Location                                                                                           |
| --------: | ------: | -----------: | -------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|       new | +8.06ms |  0.0% → 0.7% |    0ms → 8.1ms |      0 → 17 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)`                              | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                                         |
|       new | +3.98ms |  0.0% → 0.3% |    0ms → 4.0ms |       0 → 2 | `addParameter(ParameterInfo, boolean)`                                                                            | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder`                                            |
|    +84.3% | +3.71ms |  0.2% → 0.7% |  4.4ms → 8.1ms |      2 → 11 | `<init>()`                                                                                                        | `org.jetbrains.kotlin.codegen.FrameMapBase`                                                        |
|   +783.7% | +3.51ms | <0.1% → 0.3% |  0.4ms → 4.0ms |       1 → 5 | `getValue(Object, KProperty)`                                                                                     | `org.jetbrains.kotlin.fir.backend.MappedLazyVar`                                                   |
|   +125.4% | +2.78ms |  0.1% → 0.4% |  2.2ms → 5.0ms |       5 → 6 | `getThrownExceptions(IrFunction)`                                                                                 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                         |
|       new | +2.57ms |  0.0% → 0.2% |    0ms → 2.6ms |       0 → 1 | `<clinit>()`                                                                                                      | `org.jetbrains.kotlin.resolve.calls.checkers.CoroutineCallCheckerKt`                               |
|  +1025.4% | +2.19ms | <0.1% → 0.2% |  0.2ms → 2.4ms |       1 → 7 | `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`                                   |
|   +197.3% | +2.13ms | <0.1% → 0.3% |  1.1ms → 3.2ms |           1 | `<init>()`                                                                                                        | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
| +74370.1% | +1.77ms | <0.1% → 0.1% |  2.4µs → 1.8ms |       1 → 9 | `getUnitValue(ExpressionCodegen)`                                                                                 | `org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt`                                         |
|   +511.4% | +1.74ms | <0.1% → 0.2% |  0.3ms → 2.1ms |      3 → 17 | `unitStats_delegate$lambda$0(PerformanceManager)`                                                                 | `org.jetbrains.kotlin.util.PerformanceManager`                                                     |
|       new | +1.57ms |  0.0% → 0.1% |    0ms → 1.6ms |       0 → 3 | `preprocessSuspendMarkers(MethodNode, boolean, boolean)`                                                          | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`                                         |
|  +7202.0% | +1.54ms | <0.1% → 0.1% | 21.4µs → 1.6ms |       2 → 9 | `getPlatformEnumValue(TargetPlatform)`                                                                            | `org.jetbrains.kotlin.util.PerformanceManager`                                                     |
|       new | +1.44ms |  0.0% → 0.1% |    0ms → 1.4ms |       0 → 3 | `addNextParameter(Type, boolean, Type)`                                                                           | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder`                                            |
|       new | +1.44ms |  0.0% → 0.1% |    0ms → 1.4ms |      0 → 11 | `<init>(ClassWriter)`                                                                                             | `org.jetbrains.org.objectweb.asm.SymbolTable`                                                      |
|       new | +1.40ms |  0.0% → 0.1% |    0ms → 1.4ms |       0 → 4 | `<init>(int, int, String, MethodVisitor)`                                                                         | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`                         |
|   +443.0% | +1.37ms | <0.1% → 0.1% |  0.3ms → 1.7ms |       2 → 3 | `desiredAssertionStatus()`                                                                                        | `java.lang.Class`                                                                                  |
|       new | +1.32ms |  0.0% → 0.1% |    0ms → 1.3ms |       0 → 3 | `invocationKindProtobufEnum(EventOccurrencesRange)`                                                               | `org.jetbrains.kotlin.fir.serialization.FirContractSerializer$ContractSerializerWorker`            |
|       new | +1.29ms |  0.0% → 0.1% |    0ms → 1.3ms |       0 → 2 | `mapToCallableMethod(IrCall, IrFunction)`                                                                         | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                                   |
|       new | +1.26ms |  0.0% → 0.1% |    0ms → 1.3ms |       0 → 5 | `wrapWithMaxLocalCalc(MethodNode)`                                                                                | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`                                         |
|       new | +1.11ms |  0.0% → 0.1% |    0ms → 1.1ms |       0 → 2 | `prepareNode(MethodNode, int)`                                                                                    | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                                |

##### Ours

|    Change |   Delta |            % |           Time | Contentions | Function                                                                                                          | Location                                                                                           |
| --------: | ------: | -----------: | -------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|       new | +8.06ms |  0.0% → 0.7% |    0ms → 8.1ms |      0 → 17 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)`                              | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                                         |
|       new | +3.98ms |  0.0% → 0.3% |    0ms → 4.0ms |       0 → 2 | `addParameter(ParameterInfo, boolean)`                                                                            | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder`                                            |
|    +84.3% | +3.71ms |  0.2% → 0.7% |  4.4ms → 8.1ms |      2 → 11 | `<init>()`                                                                                                        | `org.jetbrains.kotlin.codegen.FrameMapBase`                                                        |
|   +783.7% | +3.51ms | <0.1% → 0.3% |  0.4ms → 4.0ms |       1 → 5 | `getValue(Object, KProperty)`                                                                                     | `org.jetbrains.kotlin.fir.backend.MappedLazyVar`                                                   |
|   +125.4% | +2.78ms |  0.1% → 0.4% |  2.2ms → 5.0ms |       5 → 6 | `getThrownExceptions(IrFunction)`                                                                                 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                         |
|       new | +2.57ms |  0.0% → 0.2% |    0ms → 2.6ms |       0 → 1 | `<clinit>()`                                                                                                      | `org.jetbrains.kotlin.resolve.calls.checkers.CoroutineCallCheckerKt`                               |
|  +1025.4% | +2.19ms | <0.1% → 0.2% |  0.2ms → 2.4ms |       1 → 7 | `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`                                   |
|   +197.3% | +2.13ms | <0.1% → 0.3% |  1.1ms → 3.2ms |           1 | `<init>()`                                                                                                        | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
| +74370.1% | +1.77ms | <0.1% → 0.1% |  2.4µs → 1.8ms |       1 → 9 | `getUnitValue(ExpressionCodegen)`                                                                                 | `org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt`                                         |
|   +511.4% | +1.74ms | <0.1% → 0.2% |  0.3ms → 2.1ms |      3 → 17 | `unitStats_delegate$lambda$0(PerformanceManager)`                                                                 | `org.jetbrains.kotlin.util.PerformanceManager`                                                     |
|       new | +1.57ms |  0.0% → 0.1% |    0ms → 1.6ms |       0 → 3 | `preprocessSuspendMarkers(MethodNode, boolean, boolean)`                                                          | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`                                         |
|  +7202.0% | +1.54ms | <0.1% → 0.1% | 21.4µs → 1.6ms |       2 → 9 | `getPlatformEnumValue(TargetPlatform)`                                                                            | `org.jetbrains.kotlin.util.PerformanceManager`                                                     |
|       new | +1.44ms |  0.0% → 0.1% |    0ms → 1.4ms |       0 → 3 | `addNextParameter(Type, boolean, Type)`                                                                           | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder`                                            |
|       new | +1.44ms |  0.0% → 0.1% |    0ms → 1.4ms |      0 → 11 | `<init>(ClassWriter)`                                                                                             | `org.jetbrains.org.objectweb.asm.SymbolTable`                                                      |
|       new | +1.40ms |  0.0% → 0.1% |    0ms → 1.4ms |       0 → 4 | `<init>(int, int, String, MethodVisitor)`                                                                         | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`                         |
|       new | +1.32ms |  0.0% → 0.1% |    0ms → 1.3ms |       0 → 3 | `invocationKindProtobufEnum(EventOccurrencesRange)`                                                               | `org.jetbrains.kotlin.fir.serialization.FirContractSerializer$ContractSerializerWorker`            |
|       new | +1.29ms |  0.0% → 0.1% |    0ms → 1.3ms |       0 → 2 | `mapToCallableMethod(IrCall, IrFunction)`                                                                         | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                                   |
|       new | +1.26ms |  0.0% → 0.1% |    0ms → 1.3ms |       0 → 5 | `wrapWithMaxLocalCalc(MethodNode)`                                                                                | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`                                         |
|       new | +1.11ms |  0.0% → 0.1% |    0ms → 1.1ms |       0 → 2 | `prepareNode(MethodNode, int)`                                                                                    | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                                |
|       new | +0.96ms |  0.0% → 0.1% |    0ms → 1.0ms |       0 → 6 | `newClassBuilder(JvmDeclarationOrigin)`                                                                           | `org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`                              |

#### Improvements

Functions with the largest decrease in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

|  Change |     Delta |             % |            Time | Contentions | Function                                                                                                                                                                                                                                    | Location                                                                |
| ------: | --------: | ------------: | --------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
|  -43.9% | -726.01ms | 70.0% → 75.7% | 1.66s → 929.6ms |     76 → 92 | `generateMethodNode(IrFunction)`                                                                                                                                                                                                            | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                 |
|  -40.5% |  -28.70ms |   3.0% → 3.4% | 70.8ms → 42.2ms |     23 → 52 | `doGenerate(ReifiedTypeParametersUsages)`                                                                                                                                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`              |
|  -77.5% |  -25.78ms |   1.4% → 0.6% |  33.3ms → 7.5ms |     18 → 16 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)`                                                                                          | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`          |
|  -88.6% |  -15.50ms |   0.7% → 0.2% |  17.5ms → 2.0ms |      8 → 11 | `generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)`                                                                                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`              |
|  -77.1% |  -14.67ms |   0.8% → 0.4% |  19.0ms → 4.4ms |           4 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)`                                                                         | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`          |
|  -51.3% |  -14.25ms |   1.2% → 1.1% | 27.8ms → 13.5ms |     10 → 17 | `newClassBuilder(JvmDeclarationOrigin)`                                                                                                                                                                                                     | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`                  |
| removed |  -11.95ms |   0.5% → 0.0% |    12.0ms → 0ms |       8 → 0 | `getDescriptorOrigin(IrDeclaration)`                                                                                                                                                                                                        | `org.jetbrains.kotlin.backend.jvm.extensions.JvmIrDeclarationOriginKt`  |
|  -78.4% |  -11.36ms |   0.6% → 0.3% |  14.5ms → 3.1ms |       8 → 7 | `createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)`                                                                                                              | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion` |
|  -57.5% |  -10.27ms |   0.8% → 0.6% |  17.9ms → 7.6ms |     12 → 10 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])`                                                                                                                                                    | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`   |
|  -67.1% |  -10.06ms |   0.6% → 0.4% |  15.0ms → 4.9ms |     12 → 16 | `doInline(MethodNode)`                                                                                                                                                                                                                      | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                     |
|  -91.1% |   -9.85ms |   0.5% → 0.1% |  10.8ms → 1.0ms |       2 → 8 | `createFrameMapWithReceivers(IrFunction)`                                                                                                                                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`              |
|  -85.8% |   -9.73ms |   0.5% → 0.1% |  11.3ms → 1.6ms |      11 → 3 | `<init>(SourceMapper, SMAP, SourcePosition)`                                                                                                                                                                                                | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier`                   |
|  -91.8% |   -8.77ms |   0.4% → 0.1% |   9.6ms → 0.8ms |       3 → 2 | `newBuilder()`                                                                                                                                                                                                                              | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                           |
|  -99.3% |   -8.61ms |  0.4% → <0.1% |   8.7ms → 0.1ms |           1 | `makeDefinitelyNotNull(UnwrappedType, boolean, boolean)`                                                                                                                                                                                    | `org.jetbrains.kotlin.types.DefinitelyNotNullType$Companion`            |
|  -80.2% |   -7.99ms |   0.4% → 0.2% |  10.0ms → 2.0ms |     12 → 10 | `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)`                                                                                                                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`              |
|  -82.8% |   -7.91ms |   0.4% → 0.1% |   9.6ms → 1.6ms |       3 → 5 | `visitWhen(IrWhen, BlockInfo)`                                                                                                                                                                                                              | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`            |
|  -84.7% |   -7.39ms |   0.4% → 0.1% |   8.7ms → 1.3ms |       1 → 3 | `<init>(FirSession, JvmSerializationBindings, List, ScopeSession, JvmSerializationBindings, boolean, String, ClassBuilderMode, boolean, boolean, BinaryVersion, JvmDefaultMode, FirElementAwareStringTable, FirAdditionalMetadataProvider)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`        |
|  -99.1% |   -7.25ms |  0.3% → <0.1% |   7.3ms → 0.1ms |           1 | `<clinit>()`                                                                                                                                                                                                                                | `org.jetbrains.kotlin.codegen.inline.coroutines.CoroutineTransformer`   |
|  -71.9% |   -7.19ms |   0.4% → 0.2% |  10.0ms → 2.8ms |       4 → 3 | `visitMethod(int, String, String, String, String[])`                                                                                                                                                                                        | `org.jetbrains.org.objectweb.asm.ClassWriter`                           |
|  -94.0% |   -7.07ms |  0.3% → <0.1% |   7.5ms → 0.4ms |       4 → 2 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])`                                                                                                                                                                    | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`    |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

| Change |   Delta |            % |        Time | Contentions | Location                                                       |
| -----: | ------: | -----------: | ----------: | ----------: | -------------------------------------------------------------- |
|    new | +2.96ms | 0.0% → 36.8% | 0ms → 3.0ms |       0 → 4 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:192` |
|    new | +2.58ms | 0.0% → 32.0% | 0ms → 2.6ms |       0 → 7 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:178` |
|    new | +2.07ms | 0.0% → 25.7% | 0ms → 2.1ms |       0 → 1 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:118` |
|    new | +0.26ms |  0.0% → 3.2% | 0ms → 0.3ms |       0 → 3 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:149` |
|    new | +0.19ms |  0.0% → 2.3% | 0ms → 0.2ms |       0 → 2 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:152` |

##### `addParameter(ParameterInfo, boolean)` (`org.jetbrains.kotlin.codegen.inline.ParametersBuilder`)

| Change |   Delta |             % |        Time | Contentions | Location                                                   |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------- |
|    new | +3.98ms | 0.0% → 100.0% | 0ms → 4.0ms |       0 → 2 | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder:71` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`)

| Change |   Delta |      % |          Time | Contentions | Location                                       |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------------- |
| +84.3% | +3.71ms | 100.0% | 4.4ms → 8.1ms |      2 → 11 | `org.jetbrains.kotlin.codegen.FrameMapBase:26` |

##### `getValue(Object, KProperty)` (`org.jetbrains.kotlin.fir.backend.MappedLazyVar`)

|  Change |   Delta |      % |          Time | Contentions | Location                                            |
| ------: | ------: | -----: | ------------: | ----------: | --------------------------------------------------- |
| +783.7% | +3.51ms | 100.0% | 0.4ms → 4.0ms |       1 → 5 | `org.jetbrains.kotlin.fir.backend.MappedLazyVar:67` |

##### `getThrownExceptions(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|  Change |   Delta |      % |          Time | Contentions | Location                                                       |
| ------: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------------- |
| +125.4% | +2.78ms | 100.0% | 2.2ms → 5.0ms |       5 → 6 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:272` |

##### `<clinit>()` (`org.jetbrains.kotlin.resolve.calls.checkers.CoroutineCallCheckerKt`)

| Change |   Delta |             % |        Time | Contentions | Location                                                                |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------------------------------- |
|    new | +2.57ms | 0.0% → 100.0% | 0ms → 2.6ms |       0 → 1 | `org.jetbrains.kotlin.resolve.calls.checkers.CoroutineCallCheckerKt:47` |

##### `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`)

| Change |   Delta |              % |          Time | Contentions | Location                                                             |
| -----: | ------: | -------------: | ------------: | ----------: | -------------------------------------------------------------------- |
|    new | +1.65ms |   0.0% → 68.7% |   0ms → 1.6ms |       0 → 5 | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension:255` |
|    new | +0.50ms |   0.0% → 20.6% |   0ms → 0.5ms |       0 → 1 | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension:259` |
| +20.2% | +0.04ms | 100.0% → 10.7% | 0.2ms → 0.3ms |           1 | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension:258` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|  Change |   Delta |      % |          Time | Contentions | Location                                                                                              |
| ------: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------------------------------- |
| +197.3% | +2.13ms | 100.0% | 1.1ms → 3.2ms |           1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:23` |

##### `getUnitValue(ExpressionCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt`)

|    Change |   Delta |      % |          Time | Contentions | Location                                                       |
| --------: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------------- |
| +74370.1% | +1.77ms | 100.0% | 2.4µs → 1.8ms |       1 → 9 | `org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt:186` |

##### `unitStats_delegate$lambda$0(PerformanceManager)` (`org.jetbrains.kotlin.util.PerformanceManager`)

|   Change |   Delta |             % |           Time | Contentions | Location                                           |
| -------: | ------: | ------------: | -------------: | ----------: | -------------------------------------------------- |
|  +384.9% | +1.12ms | 85.6% → 67.9% |  0.3ms → 1.4ms |       2 → 9 | `org.jetbrains.kotlin.util.PerformanceManager:123` |
| +1265.4% | +0.62ms | 14.4% → 32.1% | 48.9µs → 0.7ms |       1 → 8 | `org.jetbrains.kotlin.util.PerformanceManager:101` |

##### `preprocessSuspendMarkers(MethodNode, boolean, boolean)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`)

| Change |   Delta |             % |        Time | Contentions | Location                                                       |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------------------------------------------------- |
|    new | +1.57ms | 0.0% → 100.0% | 0ms → 1.6ms |       0 → 3 | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt:668` |

##### `getPlatformEnumValue(TargetPlatform)` (`org.jetbrains.kotlin.util.PerformanceManager`)

|   Change |   Delta |      % |           Time | Contentions | Location                                           |
| -------: | ------: | -----: | -------------: | ----------: | -------------------------------------------------- |
| +7202.0% | +1.54ms | 100.0% | 21.4µs → 1.6ms |       2 → 9 | `org.jetbrains.kotlin.util.PerformanceManager:204` |

##### `addNextParameter(Type, boolean, Type)` (`org.jetbrains.kotlin.codegen.inline.ParametersBuilder`)

| Change |   Delta |             % |        Time | Contentions | Location                                                   |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------- |
|    new | +1.44ms | 0.0% → 100.0% | 0ms → 1.4ms |       0 → 3 | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder:25` |

##### `<init>(ClassWriter)` (`org.jetbrains.org.objectweb.asm.SymbolTable`)

| Change |   Delta |             % |        Time | Contentions | Location                                          |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------- |
|    new | +1.44ms | 0.0% → 100.0% | 0ms → 1.4ms |      0 → 11 | `org.jetbrains.org.objectweb.asm.SymbolTable:150` |

##### `<init>(int, int, String, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`)

| Change |   Delta |            % |        Time | Contentions | Location                                                                      |
| -----: | ------: | -----------: | ----------: | ----------: | ----------------------------------------------------------------------------- |
|    new | +1.31ms | 0.0% → 93.6% | 0ms → 1.3ms |       0 → 3 | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator:64` |
|    new | +0.09ms |  0.0% → 6.4% | 0ms → 0.1ms |       0 → 1 | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator:68` |

##### `desiredAssertionStatus()` (`java.lang.Class`)

|  Change |   Delta |      % |          Time | Contentions | Location               |
| ------: | ------: | -----: | ------------: | ----------: | ---------------------- |
| +443.0% | +1.37ms | 100.0% | 0.3ms → 1.7ms |       2 → 3 | `java.lang.Class:3906` |

##### `invocationKindProtobufEnum(EventOccurrencesRange)` (`org.jetbrains.kotlin.fir.serialization.FirContractSerializer$ContractSerializerWorker`)

| Change |   Delta |             % |        Time | Contentions | Location                                                                                    |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------------------------------------- |
|    new | +1.32ms | 0.0% → 100.0% | 0ms → 1.3ms |       0 → 3 | `org.jetbrains.kotlin.fir.serialization.FirContractSerializer$ContractSerializerWorker:229` |

##### `mapToCallableMethod(IrCall, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

| Change |   Delta |             % |        Time | Contentions | Location                                                             |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------------------------------------------------------- |
|    new | +1.29ms | 0.0% → 100.0% | 0ms → 1.3ms |       0 → 2 | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper:406` |

##### `wrapWithMaxLocalCalc(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`)

| Change |   Delta |             % |        Time | Contentions | Location                                                       |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------------------------------------------------- |
|    new | +1.26ms | 0.0% → 100.0% | 0ms → 1.3ms |       0 → 5 | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt:179` |

##### `prepareNode(MethodNode, int)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

| Change |   Delta |             % |        Time | Contentions | Location                                                |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------- |
|    new | +1.11ms | 0.0% → 100.0% | 0ms → 1.1ms |       0 → 2 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:501` |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`)

| Change |   Delta |             % |        Time | Contentions | Location                                                                 |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------------------ |
|    new | +0.96ms | 0.0% → 100.0% | 0ms → 1.0ms |       0 → 6 | `org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory:29` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |     Delta |             % |            Time | Contentions | Location                                                    |
| ------: | --------: | ------------: | --------------: | ----------: | ----------------------------------------------------------- |
|  -44.0% | -727.31ms | 99.8% → 99.4% | 1.65s → 924.3ms |     71 → 75 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:427` |
| +411.7% |   +1.91ms |  <0.1% → 0.3% |   0.5ms → 2.4ms |       1 → 9 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:422` |
|  -75.8% |   -0.73ms |  0.1% → <0.1% |   1.0ms → 0.2ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:428` |
|   +4.7% |   +0.12ms |   0.2% → 0.3% |   2.6ms → 2.7ms |       3 → 7 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:416` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|   Change |    Delta |             % |            Time | Contentions | Location                                                       |
| -------: | -------: | ------------: | --------------: | ----------: | -------------------------------------------------------------- |
|   -51.6% | -23.00ms | 62.9% → 51.2% | 44.6ms → 21.6ms |     10 → 11 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:68`  |
|   -94.3% | -12.08ms |  18.1% → 1.7% |  12.8ms → 0.7ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:140` |
| +5537.1% |  +9.36ms |  0.2% → 22.6% |   0.2ms → 9.5ms |      1 → 11 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:134` |
|   -99.6% |  -3.94ms |  5.6% → <0.1% |  4.0ms → 14.3µs |       2 → 1 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:143` |
|   -44.0% |  -2.43ms |   7.8% → 7.4% |   5.5ms → 3.1ms |       3 → 5 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:76`  |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

| Change |   Delta |             % |           Time | Contentions | Location                                                          |
| -----: | ------: | ------------: | -------------: | ----------: | ----------------------------------------------------------------- |
| -92.9% | -8.76ms |  28.3% → 9.0% |  9.4ms → 0.7ms |       3 → 2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:63` |
| -69.7% | -8.30ms | 35.8% → 48.0% | 11.9ms → 3.6ms |       6 → 3 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:50` |
| -74.4% | -5.28ms | 21.3% → 24.1% |  7.1ms → 1.8ms |       3 → 4 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:54` |
| -70.9% | -3.45ms | 14.6% → 18.9% |  4.9ms → 1.4ms |       6 → 7 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:61` |

##### `generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |    Delta |             % |           Time | Contentions | Location                                                       |
| -----: | -------: | ------------: | -------------: | ----------: | -------------------------------------------------------------- |
| -98.6% | -14.72ms | 85.4% → 10.6% | 14.9ms → 0.2ms |       3 → 2 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:356` |
| -72.2% |  -0.82ms |  6.5% → 15.8% |  1.1ms → 0.3ms |       2 → 4 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:338` |
|  +2.6% |  +0.04ms |  8.2% → 73.6% |  1.4ms → 1.5ms |       3 → 5 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:340` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

| Change |    Delta |              % |           Time | Contentions | Location                                                           |
| -----: | -------: | -------------: | -------------: | ----------: | ------------------------------------------------------------------ |
| -88.6% | -16.85ms | 100.0% → 50.0% | 19.0ms → 2.2ms |       4 → 2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:198` |
|    new |  +2.17ms |   0.0% → 50.0% |    0ms → 2.2ms |       0 → 2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:190` |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

| Change |    Delta |      % |            Time | Contentions | Location                                                  |
| -----: | -------: | -----: | --------------: | ----------: | --------------------------------------------------------- |
| -51.3% | -14.25ms | 100.0% | 27.8ms → 13.5ms |     10 → 17 | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1:70` |

##### `getDescriptorOrigin(IrDeclaration)` (`org.jetbrains.kotlin.backend.jvm.extensions.JvmIrDeclarationOriginKt`)

|  Change |   Delta |            % |        Time | Contentions | Location                                                                  |
| ------: | ------: | -----------: | ----------: | ----------: | ------------------------------------------------------------------------- |
| removed | -9.10ms | 76.1% → 0.0% | 9.1ms → 0ms |       7 → 0 | `org.jetbrains.kotlin.backend.jvm.extensions.JvmIrDeclarationOriginKt:39` |
| removed | -2.86ms | 23.9% → 0.0% | 2.9ms → 0ms |       1 → 0 | `org.jetbrains.kotlin.backend.jvm.extensions.JvmIrDeclarationOriginKt:44` |

##### `createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion`)

| Change |    Delta |      % |           Time | Contentions | Location                                                                     |
| -----: | -------: | -----: | -------------: | ----------: | ---------------------------------------------------------------------------- |
| -78.4% | -11.36ms | 100.0% | 14.5ms → 3.1ms |       8 → 7 | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion:1394` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|  Change |    Delta |            % |          Time | Contentions | Location                                                                      |
| ------: | -------: | -----------: | ------------: | ----------: | ----------------------------------------------------------------------------- |
| removed | -13.58ms | 76.0% → 0.0% |  13.6ms → 0ms |       4 → 0 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:63`      |
|     new |  +3.00ms | 0.0% → 39.4% |   0ms → 3.0ms |       0 → 1 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:59`      |
| +325.3% |  +1.53ms | 2.6% → 26.4% | 0.5ms → 2.0ms |       3 → 2 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:62 → 49` |
| removed |  -0.96ms |  5.4% → 0.0% |   1.0ms → 0ms |       1 → 0 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:64`      |
|     new |  +0.87ms | 0.0% → 11.5% |   0ms → 0.9ms |       0 → 2 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:58`      |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|  Change |   Delta |             % |          Time | Contentions | Location                                                |
| ------: | ------: | ------------: | ------------: | ----------: | ------------------------------------------------------- |
|  -77.8% | -4.94ms | 42.3% → 28.5% | 6.3ms → 1.4ms |           5 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:154` |
| -100.0% | -4.08ms | 27.2% → <0.1% | 4.1ms → 0.2µs |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:433` |
|  -40.5% | -0.84ms | 13.8% → 25.0% | 2.1ms → 1.2ms |       2 → 4 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:159` |
|  -61.6% | -0.80ms |  8.7% → 10.1% | 1.3ms → 0.5ms |       1 → 3 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:153` |
|  +51.1% | +0.61ms |  7.9% → 36.4% | 1.2ms → 1.8ms |           3 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:156` |

##### `createFrameMapWithReceivers(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |   Delta |      % |           Time | Contentions | Location                                                       |
| -----: | ------: | -----: | -------------: | ----------: | -------------------------------------------------------------- |
| -91.1% | -9.85ms | 100.0% | 10.8ms → 1.0ms |       2 → 8 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:300` |

##### `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`)

| Change |   Delta |      % |           Time | Contentions | Location                                                 |
| -----: | ------: | -----: | -------------: | ----------: | -------------------------------------------------------- |
| -85.8% | -9.73ms | 100.0% | 11.3ms → 1.6ms |      11 → 3 | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier:65` |

##### `newBuilder()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`)

| Change |   Delta |      % |          Time | Contentions | Location                                           |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------------------- |
| -91.8% | -8.77ms | 100.0% | 9.6ms → 0.8ms |       3 → 2 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type:6336` |

##### `makeDefinitelyNotNull(UnwrappedType, boolean, boolean)` (`org.jetbrains.kotlin.types.DefinitelyNotNullType$Companion`)

| Change |   Delta |      % |          Time | Contentions | Location                                                         |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------------------------------- |
| -99.3% | -8.61ms | 100.0% | 8.7ms → 0.1ms |           1 | `org.jetbrains.kotlin.types.DefinitelyNotNullType$Companion:115` |

##### `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

| Change |   Delta |             % |          Time | Contentions | Location                                                       |
| -----: | ------: | ------------: | ------------: | ----------: | -------------------------------------------------------------- |
| -94.3% | -4.00ms | 42.5% → 12.3% | 4.2ms → 0.2ms |       3 → 1 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:319` |
| -89.6% | -3.40ms | 38.1% → 20.0% | 3.8ms → 0.4ms |       3 → 2 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:330` |
| -89.3% | -1.17ms |  13.1% → 7.1% | 1.3ms → 0.1ms |       3 → 2 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:341` |
| +74.3% | +0.46ms |  6.2% → 54.8% | 0.6ms → 1.1ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:331` |
|    new | +0.11ms |   0.0% → 5.8% |   0ms → 0.1ms |       0 → 2 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:376` |

##### `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |   Delta |      % |          Time | Contentions | Location                                                          |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------------- |
| -82.8% | -7.91ms | 100.0% | 9.6ms → 1.6ms |       3 → 5 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1014` |

##### `<init>(FirSession, JvmSerializationBindings, List, ScopeSession, JvmSerializationBindings, boolean, String, ClassBuilderMode, boolean, boolean, BinaryVersion, JvmDefaultMode, FirElementAwareStringTable, FirAdditionalMetadataProvider)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`)

| Change |   Delta |      % |          Time | Contentions | Location                                                            |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------------- |
| -84.7% | -7.39ms | 100.0% | 8.7ms → 1.3ms |       1 → 3 | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension:63` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

| Change |   Delta |      % |           Time | Contentions | Location                                          |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------------------- |
| -71.9% | -7.19ms | 100.0% | 10.0ms → 2.8ms |       4 → 3 | `org.jetbrains.org.objectweb.asm.ClassWriter:469` |

##### `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`)

| Change |   Delta |      % |          Time | Contentions | Location                                                                |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------- |
| -94.0% | -7.07ms | 100.0% | 7.5ms → 0.4ms |       4 → 2 | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder:38` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

| Change |   Delta |             % |        Time | Contentions | Caller                                                                                                           | Location                                                     |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
|    new | +8.06ms | 0.0% → 100.0% | 0ms → 8.1ms |      0 → 17 | `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `addParameter(ParameterInfo, boolean)` (`org.jetbrains.kotlin.codegen.inline.ParametersBuilder`)

| Change |   Delta |             % |        Time | Contentions | Caller                                  | Location                                                |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------------------------- | ------------------------------------------------------- |
|    new | +3.98ms | 0.0% → 100.0% | 0ms → 4.0ms |       0 → 2 | `addNextParameter(Type, boolean, Type)` | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`)

| Change |   Delta |      % |          Time | Contentions | Caller     | Location                                              |
| -----: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------------------------- |
| +84.3% | +3.71ms | 100.0% | 4.4ms → 8.1ms |      2 → 11 | `<init>()` | `org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap` |

##### `getValue(Object, KProperty)` (`org.jetbrains.kotlin.fir.backend.MappedLazyVar`)

|  Change |   Delta |              % |          Time | Contentions | Caller                   | Location                                                   |
| ------: | ------: | -------------: | ------------: | ----------: | ------------------------ | ---------------------------------------------------------- |
| +644.3% | +2.88ms | 100.0% → 84.2% | 0.4ms → 3.3ms |       1 → 4 | `getOverriddenSymbols()` | `org.jetbrains.kotlin.fir.lazy.Fir2IrLazySimpleFunction`   |
|     new | +0.62ms |   0.0% → 15.8% |   0ms → 0.6ms |       0 → 1 | `getOverriddenSymbols()` | `org.jetbrains.kotlin.fir.lazy.Fir2IrLazyPropertyAccessor` |

##### `getThrownExceptions(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                    | Location                                                   |
| ------: | ------: | -----: | ------------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| +125.4% | +2.78ms | 100.0% | 2.2ms → 5.0ms |       5 → 6 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `<clinit>()` (`org.jetbrains.kotlin.resolve.calls.checkers.CoroutineCallCheckerKt`)

| Change |   Delta |             % |        Time | Contentions | Caller                                             | Location                                                 |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------------------------------------- | -------------------------------------------------------- |
|    new | +2.57ms | 0.0% → 100.0% | 0ms → 2.6ms |       0 → 1 | `generateInlineIntrinsicForIr(FunctionDescriptor)` | `org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt` |

##### `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`)

|   Change |   Delta |      % |          Time | Contentions | Caller                       | Location                                                      |
| -------: | ------: | -----: | ------------: | ----------: | ---------------------------- | ------------------------------------------------------------- |
| +1025.4% | +2.19ms | 100.0% | 0.2ms → 2.4ms |       1 → 7 | `functionProto(FirFunction)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                                                                   | Location                                                              |
| ------: | ------: | -----: | ------------: | ----------: | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| +197.3% | +2.13ms | 100.0% | 1.1ms → 3.2ms |           1 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor` |

##### `getUnitValue(ExpressionCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt`)

|    Change |   Delta |      % |          Time | Contentions | Caller                                                     | Location                                                     |
| --------: | ------: | -----: | ------------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| +74370.1% | +1.77ms | 100.0% | 2.4µs → 1.8ms |       1 → 9 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `unitStats_delegate$lambda$0(PerformanceManager)` (`org.jetbrains.kotlin.util.PerformanceManager`)

|  Change |   Delta |      % |          Time | Contentions | Caller     | Location                                                                  |
| ------: | ------: | -----: | ------------: | ----------: | ---------- | ------------------------------------------------------------------------- |
| +511.4% | +1.74ms | 100.0% | 0.3ms → 2.1ms |      3 → 17 | `invoke()` | `org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000700114f238` |

##### `preprocessSuspendMarkers(MethodNode, boolean, boolean)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`)

| Change |   Delta |             % |        Time | Contentions | Caller                                     | Location                                                |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------ | ------------------------------------------------------- |
|    new | +1.57ms | 0.0% → 100.0% | 0ms → 1.6ms |       0 → 3 | `generateMethod(IrFunction, SourceMapper)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `getPlatformEnumValue(TargetPlatform)` (`org.jetbrains.kotlin.util.PerformanceManager`)

|   Change |   Delta |      % |           Time | Contentions | Caller                                            | Location                                       |
| -------: | ------: | -----: | -------------: | ----------: | ------------------------------------------------- | ---------------------------------------------- |
| +7202.0% | +1.54ms | 100.0% | 21.4µs → 1.6ms |       2 → 9 | `unitStats_delegate$lambda$0(PerformanceManager)` | `org.jetbrains.kotlin.util.PerformanceManager` |

##### `addNextParameter(Type, boolean, Type)` (`org.jetbrains.kotlin.codegen.inline.ParametersBuilder`)

| Change |   Delta |             % |        Time | Contentions | Caller                                                                          | Location                                                |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------------------------- | ------------------------------------------------------- |
|    new | +1.44ms | 0.0% → 100.0% | 0ms → 1.4ms |       0 → 3 | `addNextParameter$default(ParametersBuilder, Type, boolean, Type, int, Object)` | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder` |

##### `<init>(ClassWriter)` (`org.jetbrains.org.objectweb.asm.SymbolTable`)

| Change |   Delta |             % |        Time | Contentions | Caller                     | Location                                      |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------------- | --------------------------------------------- |
|    new | +1.44ms | 0.0% → 100.0% | 0ms → 1.4ms |      0 → 11 | `<init>(ClassReader, int)` | `org.jetbrains.org.objectweb.asm.ClassWriter` |

##### `<init>(int, int, String, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`)

| Change |   Delta |             % |        Time | Contentions | Caller                             | Location                                                   |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------------- | ---------------------------------------------------------- |
|    new | +1.40ms | 0.0% → 100.0% | 0ms → 1.4ms |       0 → 4 | `wrapWithMaxLocalCalc(MethodNode)` | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt` |

##### `desiredAssertionStatus()` (`java.lang.Class`)

|   Change |   Delta |             % |          Time | Contentions | Caller       | Location                                                          |
| -------: | ------: | ------------: | ------------: | ----------: | ------------ | ----------------------------------------------------------------- |
| +1605.4% | +1.18ms | 23.7% → 74.5% | 0.1ms → 1.3ms |           1 | `<clinit>()` | `org.jetbrains.kotlin.codegen.inline.RemapVisitor`                |
|   +77.7% | +0.18ms | 76.3% → 25.0% | 0.2ms → 0.4ms |           1 | `<clinit>()` | `org.jetbrains.kotlin.codegen.inline.InternalFinallyBlockInliner` |
|      new | +0.01ms |   0.0% → 0.5% |   0ms → 8.5µs |       0 → 1 | `<clinit>()` | `org.jetbrains.kotlin.types.TypeUtils`                            |

##### `invocationKindProtobufEnum(EventOccurrencesRange)` (`org.jetbrains.kotlin.fir.serialization.FirContractSerializer$ContractSerializerWorker`)

| Change |   Delta |             % |        Time | Contentions | Caller                                                                                  | Location                                                                                |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|    new | +1.32ms | 0.0% → 100.0% | 0ms → 1.3ms |       0 → 3 | `fillEffectProto(ProtoBuf$Effect$Builder, KtEffectDeclaration, FirContractDescription)` | `org.jetbrains.kotlin.fir.serialization.FirContractSerializer$ContractSerializerWorker` |

##### `mapToCallableMethod(IrCall, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

| Change |   Delta |             % |        Time | Contentions | Caller                         | Location                                                     |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
|    new | +1.29ms | 0.0% → 100.0% | 0ms → 1.3ms |       0 → 2 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `wrapWithMaxLocalCalc(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`)

| Change |   Delta |             % |        Time | Contentions | Caller                                    | Location                                                   |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
|    new | +1.26ms | 0.0% → 100.0% | 0ms → 1.3ms |       0 → 5 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `prepareNode(MethodNode, int)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

| Change |   Delta |             % |        Time | Contentions | Caller                                                        | Location                                            |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------- | --------------------------------------------------- |
|    new | +1.11ms | 0.0% → 100.0% | 0ms → 1.1ms |       0 → 2 | `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`)

| Change |   Delta |             % |        Time | Contentions | Caller                                  | Location                                                              |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------------------------- | --------------------------------------------------------------------- |
|    new | +0.96ms | 0.0% → 100.0% | 0ms → 1.0ms |       0 → 6 | `newClassBuilder(JvmDeclarationOrigin)` | `org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |     Delta |             % |             Time | Contentions | Caller                                      | Location                                                             |
| -----: | --------: | ------------: | ---------------: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| -40.0% | -590.77ms | 89.1% → 95.2% |  1.48s → 884.9ms |     74 → 90 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
| -75.2% | -135.24ms |  10.9% → 4.8% | 180.0ms → 44.7ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |    Delta |      % |            Time | Contentions | Caller                                  | Location                                                   |
| -----: | -------: | -----: | --------------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| -40.5% | -28.70ms | 100.0% | 70.8ms → 42.2ms |     23 → 52 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

| Change |    Delta |      % |           Time | Contentions | Caller                                                                                             | Location                                                      |
| -----: | -------: | -----: | -------------: | ----------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| -77.5% | -25.78ms | 100.0% | 33.3ms → 7.5ms |     18 → 16 | `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension` |

##### `generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |    Delta |      % |           Time | Contentions | Caller                                    | Location                                                   |
| -----: | -------: | -----: | -------------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| -88.6% | -15.50ms | 100.0% | 17.5ms → 2.0ms |      8 → 11 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

| Change |    Delta |      % |           Time | Contentions | Caller                                                                                                                                             | Location                                                       |
| -----: | -------: | -----: | -------------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| -77.1% | -14.67ms | 100.0% | 19.0ms → 4.4ms |           4 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt` |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

| Change |    Delta |      % |            Time | Contentions | Caller                                  | Location                                                                    |
| -----: | -------: | -----: | --------------: | ----------: | --------------------------------------- | --------------------------------------------------------------------------- |
| -51.3% | -14.25ms | 100.0% | 27.8ms → 13.5ms |     10 → 17 | `newClassBuilder(JvmDeclarationOrigin)` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory` |

##### `getDescriptorOrigin(IrDeclaration)` (`org.jetbrains.kotlin.backend.jvm.extensions.JvmIrDeclarationOriginKt`)

|  Change |    Delta |             % |         Time | Contentions | Caller                                                 | Location                                                |
| ------: | -------: | ------------: | -----------: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
| removed | -11.95ms | 100.0% → 0.0% | 12.0ms → 0ms |       8 → 0 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion`)

| Change |   Delta |             % |           Time | Contentions | Caller                                                                                                                                                                              | Location                                                                |
| -----: | ------: | ------------: | -------------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| -81.3% | -8.88ms | 75.4% → 65.3% | 10.9ms → 2.0ms |       6 → 5 | `createTopLevel$default(FirElementSerializer$Companion, FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean, int, Object)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion` |
| -69.5% | -2.48ms | 24.6% → 34.7% |  3.6ms → 1.1ms |           2 | `create(FirSession, ScopeSession, FirClass, FirSerializerExtension, FirElementSerializer, AbstractTypeApproximator, LanguageVersionSettings, boolean)`                              | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

| Change |    Delta |      % |           Time | Contentions | Caller                                                                   | Location                                                             |
| -----: | -------: | -----: | -------------: | ----------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| -57.5% | -10.27ms | 100.0% | 17.9ms → 7.6ms |     12 → 10 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder` |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

| Change |    Delta |      % |           Time | Contentions | Caller                                                         | Location                                            |
| -----: | -------: | -----: | -------------: | ----------: | -------------------------------------------------------------- | --------------------------------------------------- |
| -67.1% | -10.06ms | 100.0% | 15.0ms → 4.9ms |     12 → 16 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `createFrameMapWithReceivers(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |   Delta |      % |           Time | Contentions | Caller                                    | Location                                                   |
| -----: | ------: | -----: | -------------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| -91.1% | -9.85ms | 100.0% | 10.8ms → 1.0ms |       2 → 8 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`)

| Change |   Delta |      % |           Time | Contentions | Caller                                                                      | Location                                              |
| -----: | ------: | -----: | -------------: | ----------: | --------------------------------------------------------------------------- | ----------------------------------------------------- |
| -85.8% | -9.73ms | 100.0% | 11.3ms → 1.6ms |      11 → 3 | `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier` |

##### `newBuilder()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                                                 | Location                                                      |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| -91.8% | -8.77ms | 100.0% | 9.6ms → 0.8ms |       3 → 2 | `typeOrTypealiasProto(ConeKotlinType, boolean, FirTypeRef, boolean, boolean, boolean)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `makeDefinitelyNotNull(UnwrappedType, boolean, boolean)` (`org.jetbrains.kotlin.types.DefinitelyNotNullType$Companion`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                                                                         | Location                                                     |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| -99.3% | -8.61ms | 100.0% | 8.7ms → 0.1ms |           1 | `makeDefinitelyNotNull$default(DefinitelyNotNullType$Companion, UnwrappedType, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.types.DefinitelyNotNullType$Companion` |

##### `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

| Change |   Delta |      % |           Time | Contentions | Caller                                                                                    | Location                                                   |
| -----: | ------: | -----: | -------------: | ----------: | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| -80.2% | -7.99ms | 100.0% | 10.0ms → 2.0ms |     12 → 10 | `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen` |

##### `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |   Delta |      % |          Time | Contentions | Caller                      | Location                                                     |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| -82.8% | -7.91ms | 100.0% | 9.6ms → 1.6ms |       3 → 5 | `visitWhen(IrWhen, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `<init>(FirSession, JvmSerializationBindings, List, ScopeSession, JvmSerializationBindings, boolean, String, ClassBuilderMode, boolean, boolean, BinaryVersion, JvmDefaultMode, FirElementAwareStringTable, FirAdditionalMetadataProvider)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                                                                                                        | Location                                                         |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| -84.7% | -7.39ms | 100.0% | 8.7ms → 1.3ms |       1 → 3 | `<init>(FirSession, JvmSerializationBindings, GenerationState, List, AbstractTypeApproximator, Fir2IrComponents, FirElementAwareStringTable)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension` |

##### `<clinit>()` (`org.jetbrains.kotlin.codegen.inline.coroutines.CoroutineTransformer`)

| Change |   Delta |      % |          Time | Contentions | Caller                 | Location                                            |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------- | --------------------------------------------------- |
| -99.1% | -7.25ms | 100.0% | 7.3ms → 0.1ms |           1 | `doInline(MethodNode)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

| Change |   Delta |      % |           Time | Contentions | Caller                                                                   | Location                                            |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------------------------------------------ | --------------------------------------------------- |
| -71.9% | -7.19ms | 100.0% | 10.0ms → 2.8ms |       4 → 3 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.AbstractClassBuilder` |

##### `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                                   | Location                                              |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------------------ | ----------------------------------------------------- |
| -94.0% | -7.07ms | 100.0% | 7.5ms → 0.4ms |       4 → 2 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.DelegatingClassBuilder` |

### Total time

#### Regressions

Functions with the largest increase in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

|   Change |    Delta |            % |           Time | Contentions | Function                                                                             | Location                                                                   |
| -------: | -------: | -----------: | -------------: | ----------: | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| +5258.5% | +13.33ms | <0.1% → 1.1% | 0.3ms → 13.6ms |      1 → 23 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                 |
|      new |  +5.43ms |  0.0% → 0.4% |    0ms → 5.4ms |       0 → 5 | `addNextParameter(Type, boolean, Type)`                                              | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder`                    |
|      new |  +5.43ms |  0.0% → 0.4% |    0ms → 5.4ms |       0 → 5 | `addNextParameter$default(ParametersBuilder, Type, boolean, Type, int, Object)`      | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder`                    |
|      new |  +3.98ms |  0.0% → 0.3% |    0ms → 4.0ms |       0 → 2 | `addParameter(ParameterInfo, boolean)`                                               | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder`                    |
|   +84.3% |  +3.71ms |  0.2% → 0.7% |  4.4ms → 8.1ms |      2 → 11 | `<init>()`                                                                           | `org.jetbrains.kotlin.codegen.FrameMapBase`                                |
|   +84.3% |  +3.71ms |  0.2% → 0.7% |  4.4ms → 8.1ms |      2 → 11 | `<init>()`                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap`                      |
|  +783.7% |  +3.51ms | <0.1% → 0.3% |  0.4ms → 4.0ms |       1 → 5 | `getValue(Object, KProperty)`                                                        | `org.jetbrains.kotlin.fir.backend.MappedLazyVar`                           |
|  +889.3% |  +3.28ms | <0.1% → 0.3% |  0.4ms → 3.6ms |      6 → 26 | `unitStats_delegate$lambda$0(PerformanceManager)`                                    | `org.jetbrains.kotlin.util.PerformanceManager`                             |
|  +889.3% |  +3.28ms | <0.1% → 0.3% |  0.4ms → 3.6ms |      6 → 26 | `invoke()`                                                                           | `org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000700114f238`  |
|  +889.3% |  +3.28ms | <0.1% → 0.3% |  0.4ms → 3.6ms |      6 → 26 | `getUnitStats()`                                                                     | `org.jetbrains.kotlin.util.PerformanceManager`                             |
| +1256.1% |  +3.23ms | <0.1% → 0.3% |  0.3ms → 3.5ms |       1 → 6 | `mapToCallableMethod(IrCall, IrFunction)`                                            | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`           |
|      new |  +3.01ms |  0.0% → 0.2% |    0ms → 3.0ms |       0 → 3 | `trackFakeOverrideMethod(IrFunction)`                                                | `org.jetbrains.kotlin.backend.jvm.codegen.JvmMethodSignatureClashDetector` |
|  +644.3% |  +2.88ms | <0.1% → 0.3% |  0.4ms → 3.3ms |       1 → 4 | `getOverriddenSymbols()`                                                             | `org.jetbrains.kotlin.fir.lazy.Fir2IrLazySimpleFunction`                   |
|  +125.4% |  +2.78ms |  0.1% → 0.4% |  2.2ms → 5.0ms |       5 → 6 | `getThrownExceptions(IrFunction)`                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                 |
|      new |  +2.66ms |  0.0% → 0.2% |    0ms → 2.7ms |       0 → 9 | `wrapWithMaxLocalCalc(MethodNode)`                                                   | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`                 |
|      new |  +2.57ms |  0.0% → 0.2% |    0ms → 2.6ms |       0 → 1 | `<clinit>()`                                                                         | `org.jetbrains.kotlin.resolve.calls.checkers.CoroutineCallCheckerKt`       |
|      new |  +2.37ms |  0.0% → 0.2% |    0ms → 2.4ms |       0 → 5 | `preprocessSuspendMarkers(MethodNode, boolean, boolean)`                             | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`                 |
|      new |  +2.36ms |  0.0% → 0.2% |    0ms → 2.4ms |       0 → 3 | `allOverridden$default(IrOverridableDeclaration, boolean, int, Object)`              | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                   |
|      new |  +2.31ms |  0.0% → 0.2% |    0ms → 2.3ms |       0 → 2 | `forceFoxedReturnTypeOnOverride(IrFunction)`                                         | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`           |
|      new |  +2.31ms |  0.0% → 0.2% |    0ms → 2.3ms |       0 → 2 | `forceBoxedReturnType(IrFunction)`                                                   | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`           |

#### Improvements

Functions with the largest decrease in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |              % |              Time | Contentions | Function                                                                                                          | Location                                                                          |
| -----: | --------: | -------------: | ----------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| -48.2% |   -1.140s | 100.0% → 99.7% |     2.36s → 1.22s |   690 → 999 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| -48.1% |   -1.136s |         100.0% |     2.36s → 1.23s | 696 → 1,026 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| -48.1% |   -1.136s |         100.0% |     2.36s → 1.23s | 696 → 1,026 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8` |
| -48.1% |   -1.136s |         100.0% |     2.36s → 1.23s | 696 → 1,026 | `run()`                                                                                                           | `java.util.concurrent.CompletableFuture$AsyncRun`                                 |
| -48.1% |   -1.136s |         100.0% |     2.36s → 1.23s | 696 → 1,026 | `runWorker(ThreadPoolExecutor$Worker)`                                                                            | `java.util.concurrent.ThreadPoolExecutor`                                         |
| -48.1% |   -1.136s |         100.0% |     2.36s → 1.23s | 696 → 1,026 | `run()`                                                                                                           | `java.util.concurrent.ThreadPoolExecutor$Worker`                                  |
| -48.1% |   -1.136s |         100.0% |     2.36s → 1.23s | 696 → 1,027 | `runWith(Object, Runnable)`                                                                                       | `java.lang.Thread`                                                                |
| -48.1% |   -1.136s |         100.0% |     2.36s → 1.23s | 696 → 1,027 | `run()`                                                                                                           | `java.lang.Thread`                                                                |
| -48.5% |   -1.091s |  95.2% → 94.4% |     2.25s → 1.16s |   508 → 758 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -48.1% |   -1.060s |  93.2% → 93.1% |     2.20s → 1.14s |   479 → 691 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -46.0% | -916.22ms |  84.3% → 87.8% |     1.99s → 1.08s |   319 → 529 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -62.8% | -325.39ms |  21.9% → 15.7% | 518.1ms → 192.8ms |   244 → 439 | `doGenerate(ReifiedTypeParametersUsages)`                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| -62.8% | -325.39ms |  21.9% → 15.7% | 518.1ms → 192.8ms |   244 → 439 | `generate(ReifiedTypeParametersUsages)`                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| -62.8% | -325.39ms |  21.9% → 15.7% | 518.1ms → 192.8ms |   244 → 439 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                     | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| -69.1% | -244.52ms |   15.0% → 8.9% | 353.7ms → 109.2ms |   137 → 229 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -68.7% | -235.05ms |   14.5% → 8.7% | 342.0ms → 107.0ms |   120 → 202 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -68.7% | -235.05ms |   14.5% → 8.7% | 342.0ms → 107.0ms |   120 → 202 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -68.7% | -235.05ms |   14.5% → 8.7% | 342.0ms → 107.0ms |   120 → 202 | `visitBlockBody(IrBlockBody, Object)`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -68.7% | -235.05ms |   14.5% → 8.7% | 342.0ms → 107.0ms |   120 → 202 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                 |
| -68.6% | -225.33ms |   13.9% → 8.4% | 328.3ms → 103.0ms |   115 → 185 | `visitReturn(IrReturn, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |

##### Ours

| Change |     Delta |              % |              Time | Contentions | Function                                                                                                          | Location                                                                          |
| -----: | --------: | -------------: | ----------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| -48.2% |   -1.140s | 100.0% → 99.7% |     2.36s → 1.22s |   690 → 999 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| -48.1% |   -1.136s |         100.0% |     2.36s → 1.23s | 696 → 1,026 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| -48.1% |   -1.136s |         100.0% |     2.36s → 1.23s | 696 → 1,026 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8` |
| -48.5% |   -1.091s |  95.2% → 94.4% |     2.25s → 1.16s |   508 → 758 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -48.1% |   -1.060s |  93.2% → 93.1% |     2.20s → 1.14s |   479 → 691 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -46.0% | -916.22ms |  84.3% → 87.8% |     1.99s → 1.08s |   319 → 529 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -62.8% | -325.39ms |  21.9% → 15.7% | 518.1ms → 192.8ms |   244 → 439 | `doGenerate(ReifiedTypeParametersUsages)`                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| -62.8% | -325.39ms |  21.9% → 15.7% | 518.1ms → 192.8ms |   244 → 439 | `generate(ReifiedTypeParametersUsages)`                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| -62.8% | -325.39ms |  21.9% → 15.7% | 518.1ms → 192.8ms |   244 → 439 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                     | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| -69.1% | -244.52ms |   15.0% → 8.9% | 353.7ms → 109.2ms |   137 → 229 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -68.7% | -235.05ms |   14.5% → 8.7% | 342.0ms → 107.0ms |   120 → 202 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -68.7% | -235.05ms |   14.5% → 8.7% | 342.0ms → 107.0ms |   120 → 202 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -68.7% | -235.05ms |   14.5% → 8.7% | 342.0ms → 107.0ms |   120 → 202 | `visitBlockBody(IrBlockBody, Object)`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -68.7% | -235.05ms |   14.5% → 8.7% | 342.0ms → 107.0ms |   120 → 202 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                 |
| -68.6% | -225.33ms |   13.9% → 8.4% | 328.3ms → 103.0ms |   115 → 185 | `visitReturn(IrReturn, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -68.6% | -225.33ms |   13.9% → 8.4% | 328.3ms → 103.0ms |   115 → 185 | `visitReturn(IrReturn, Object)`                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -68.6% | -225.33ms |   13.9% → 8.4% | 328.3ms → 103.0ms |   115 → 185 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrReturn`                                    |
| -66.8% | -197.50ms |   12.5% → 8.0% |  295.6ms → 98.1ms |    97 → 162 | `visitCall(IrCall, BlockInfo)`                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -66.8% | -197.50ms |   12.5% → 8.0% |  295.6ms → 98.1ms |    97 → 162 | `visitCall(IrCall, Object)`                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -66.8% | -197.50ms |   12.5% → 8.0% |  295.6ms → 98.1ms |    97 → 162 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrCall`                                      |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

|   Change |    Delta |      % |           Time | Contentions | Caller                                                                                                           | Location                                                     |
| -------: | -------: | -----: | -------------: | ----------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| +5258.5% | +13.33ms | 100.0% | 0.3ms → 13.6ms |      1 → 23 | `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `addNextParameter(Type, boolean, Type)` (`org.jetbrains.kotlin.codegen.inline.ParametersBuilder`)

| Change |   Delta |             % |        Time | Contentions | Caller                                                                          | Location                                                |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------------------------- | ------------------------------------------------------- |
|    new | +5.43ms | 0.0% → 100.0% | 0ms → 5.4ms |       0 → 5 | `addNextParameter$default(ParametersBuilder, Type, boolean, Type, int, Object)` | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder` |

##### `addNextParameter$default(ParametersBuilder, Type, boolean, Type, int, Object)` (`org.jetbrains.kotlin.codegen.inline.ParametersBuilder`)

| Change |   Delta |             % |        Time | Contentions | Caller                                                                               | Location                                                   |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
|    new | +5.43ms | 0.0% → 100.0% | 0ms → 5.4ms |       0 → 5 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen` |

##### `addParameter(ParameterInfo, boolean)` (`org.jetbrains.kotlin.codegen.inline.ParametersBuilder`)

| Change |   Delta |             % |        Time | Contentions | Caller                                  | Location                                                |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------------------------- | ------------------------------------------------------- |
|    new | +3.98ms | 0.0% → 100.0% | 0ms → 4.0ms |       0 → 2 | `addNextParameter(Type, boolean, Type)` | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`)

| Change |   Delta |      % |          Time | Contentions | Caller     | Location                                              |
| -----: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------------------------- |
| +84.3% | +3.71ms | 100.0% | 4.4ms → 8.1ms |      2 → 11 | `<init>()` | `org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap` |

##### `<init>()` (`org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap`)

| Change |   Delta |      % |          Time | Contentions | Caller                                    | Location                                                   |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| +84.3% | +3.71ms | 100.0% | 4.4ms → 8.1ms |      2 → 11 | `createFrameMapWithReceivers(IrFunction)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `getValue(Object, KProperty)` (`org.jetbrains.kotlin.fir.backend.MappedLazyVar`)

|  Change |   Delta |              % |          Time | Contentions | Caller                   | Location                                                   |
| ------: | ------: | -------------: | ------------: | ----------: | ------------------------ | ---------------------------------------------------------- |
| +644.3% | +2.88ms | 100.0% → 84.2% | 0.4ms → 3.3ms |       1 → 4 | `getOverriddenSymbols()` | `org.jetbrains.kotlin.fir.lazy.Fir2IrLazySimpleFunction`   |
|     new | +0.62ms |   0.0% → 15.8% |   0ms → 0.6ms |       0 → 1 | `getOverriddenSymbols()` | `org.jetbrains.kotlin.fir.lazy.Fir2IrLazyPropertyAccessor` |

##### `unitStats_delegate$lambda$0(PerformanceManager)` (`org.jetbrains.kotlin.util.PerformanceManager`)

|  Change |   Delta |      % |          Time | Contentions | Caller     | Location                                                                  |
| ------: | ------: | -----: | ------------: | ----------: | ---------- | ------------------------------------------------------------------------- |
| +889.3% | +3.28ms | 100.0% | 0.4ms → 3.6ms |      6 → 26 | `invoke()` | `org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000700114f238` |

##### `invoke()` (`org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000700114f238`)

|  Change |   Delta |      % |          Time | Contentions | Caller       | Location                      |
| ------: | ------: | -----: | ------------: | ----------: | ------------ | ----------------------------- |
| +889.3% | +3.28ms | 100.0% | 0.4ms → 3.6ms |      6 → 26 | `getValue()` | `kotlin.SynchronizedLazyImpl` |

##### `getUnitStats()` (`org.jetbrains.kotlin.util.PerformanceManager`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                                                                                            | Location                                               |
| ------: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| +889.3% | +3.28ms | 100.0% | 0.4ms → 3.6ms |      6 → 26 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `mapToCallableMethod(IrCall, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

|   Change |   Delta |      % |          Time | Contentions | Caller                         | Location                                                     |
| -------: | ------: | -----: | ------------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| +1256.1% | +3.23ms | 100.0% | 0.3ms → 3.5ms |       1 → 6 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `trackFakeOverrideMethod(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.JvmMethodSignatureClashDetector`)

| Change |   Delta |             % |        Time | Contentions | Caller                                     | Location                                                |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------ | ------------------------------------------------------- |
|    new | +3.01ms | 0.0% → 100.0% | 0ms → 3.0ms |       0 → 3 | `generateMethod(IrFunction, SourceMapper)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `getOverriddenSymbols()` (`org.jetbrains.kotlin.fir.lazy.Fir2IrLazySimpleFunction`)

|  Change |   Delta |              % |          Time | Contentions | Caller                                             | Location                                                                   |
| ------: | ------: | -------------: | ------------: | ----------: | -------------------------------------------------- | -------------------------------------------------------------------------- |
| +426.7% | +1.91ms | 100.0% → 70.8% | 0.4ms → 2.4ms |       1 → 3 | `allOverridden(IrOverridableDeclaration, boolean)` | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                   |
|     new | +0.97ms |   0.0% → 29.2% |   0ms → 1.0ms |       0 → 1 | `collectOverridesOf(IrSimpleFunction, Set)`        | `org.jetbrains.kotlin.backend.jvm.codegen.JvmMethodSignatureClashDetector` |

##### `getThrownExceptions(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                    | Location                                                   |
| ------: | ------: | -----: | ------------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| +125.4% | +2.78ms | 100.0% | 2.2ms → 5.0ms |       5 → 6 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `wrapWithMaxLocalCalc(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`)

| Change |   Delta |             % |        Time | Contentions | Caller                                    | Location                                                   |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
|    new | +2.66ms | 0.0% → 100.0% | 0ms → 2.7ms |       0 → 9 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `<clinit>()` (`org.jetbrains.kotlin.resolve.calls.checkers.CoroutineCallCheckerKt`)

| Change |   Delta |             % |        Time | Contentions | Caller                                             | Location                                                 |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------------------------------------- | -------------------------------------------------------- |
|    new | +2.57ms | 0.0% → 100.0% | 0ms → 2.6ms |       0 → 1 | `generateInlineIntrinsicForIr(FunctionDescriptor)` | `org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt` |

##### `preprocessSuspendMarkers(MethodNode, boolean, boolean)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`)

| Change |   Delta |             % |        Time | Contentions | Caller                                     | Location                                                |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------ | ------------------------------------------------------- |
|    new | +2.37ms | 0.0% → 100.0% | 0ms → 2.4ms |       0 → 5 | `generateMethod(IrFunction, SourceMapper)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `allOverridden$default(IrOverridableDeclaration, boolean, int, Object)` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`)

| Change |   Delta |            % |         Time | Contentions | Caller                                                | Location                                                                   |
| -----: | ------: | -----------: | -----------: | ----------: | ----------------------------------------------------- | -------------------------------------------------------------------------- |
|    new | +2.31ms | 0.0% → 98.1% |  0ms → 2.3ms |       0 → 2 | `forceFoxedReturnTypeOnOverride(IrFunction)`          | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`           |
|    new | +0.05ms |  0.0% → 1.9% | 0ms → 45.1µs |       0 → 1 | `isMethodWithDeclarationSiteWildcards(IrDeclaration)` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper$Companion` |

##### `forceFoxedReturnTypeOnOverride(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

| Change |   Delta |             % |        Time | Contentions | Caller                             | Location                                                         |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------------- | ---------------------------------------------------------------- |
|    new | +2.31ms | 0.0% → 100.0% | 0ms → 2.3ms |       0 → 2 | `forceBoxedReturnType(IrFunction)` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `forceBoxedReturnType(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

| Change |   Delta |             % |        Time | Contentions | Caller                                                      | Location                                                         |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------------------- | ---------------------------------------------------------------- |
|    new | +2.31ms | 0.0% → 100.0% | 0ms → 2.3ms |       0 → 2 | `mapReturnType(IrDeclaration, JvmSignatureWriter, boolean)` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| -48.2% | -1.140s | 100.0% | 2.36s → 1.22s |   690 → 999 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |   Delta |      % |          Time | Contentions | Caller  | Location                                                                          |
| -----: | ------: | -----: | ------------: | ----------: | ------- | --------------------------------------------------------------------------------- |
| -48.1% | -1.136s | 100.0% | 2.36s → 1.23s | 696 → 1,026 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8` |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`)

| Change |   Delta |      % |          Time | Contentions | Caller  | Location                                          |
| -----: | ------: | -----: | ------------: | ----------: | ------- | ------------------------------------------------- |
| -48.1% | -1.136s | 100.0% | 2.36s → 1.23s | 696 → 1,026 | `run()` | `java.util.concurrent.CompletableFuture$AsyncRun` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

| Change |   Delta |      % |          Time | Contentions | Caller                                 | Location                                  |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------- | ----------------------------------------- |
| -48.1% | -1.136s | 100.0% | 2.36s → 1.23s | 696 → 1,026 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

| Change |   Delta |      % |          Time | Contentions | Caller  | Location                                         |
| -----: | ------: | -----: | ------------: | ----------: | ------- | ------------------------------------------------ |
| -48.1% | -1.136s | 100.0% | 2.36s → 1.23s | 696 → 1,026 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

| Change |   Delta |      % |          Time | Contentions | Caller                      | Location           |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------- | ------------------ |
| -48.1% | -1.136s | 100.0% | 2.36s → 1.23s | 696 → 1,026 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |   Delta |      % |          Time | Contentions | Caller  | Location           |
| -----: | ------: | -----: | ------------: | ----------: | ------- | ------------------ |
| -48.1% | -1.136s | 100.0% | 2.36s → 1.23s | 696 → 1,027 | `run()` | `java.lang.Thread` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                   | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
| -48.5% | -1.091s | 100.0% | 2.25s → 1.16s |   508 → 758 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |   Delta |      % |          Time | Contentions | Caller       | Location                                                |
| -----: | ------: | -----: | ------------: | ----------: | ------------ | ------------------------------------------------------- |
| -48.1% | -1.060s | 100.0% | 2.20s → 1.14s |   479 → 691 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |     Delta |           % |             Time | Contentions | Caller                                      | Location                                                             |
| -----: | --------: | ----------: | ---------------: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| -46.0% | -916.22ms |      100.0% |    1.99s → 1.08s |   319 → 529 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
| -75.2% | -135.24ms | 9.0% → 4.1% | 180.0ms → 44.7ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |     Delta |      % |              Time | Contentions | Caller                                  | Location                                                   |
| -----: | --------: | -----: | ----------------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| -62.8% | -325.39ms | 100.0% | 518.1ms → 192.8ms |   244 → 439 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |     Delta |      % |              Time | Contentions | Caller                                                                        | Location                                                   |
| -----: | --------: | -----: | ----------------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| -62.8% | -325.39ms | 100.0% | 518.1ms → 192.8ms |   244 → 439 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |     Delta |      % |              Time | Contentions | Caller                           | Location                                                |
| -----: | --------: | -----: | ----------------: | ----------: | -------------------------------- | ------------------------------------------------------- |
| -62.8% | -325.39ms | 100.0% | 518.1ms → 192.8ms |   244 → 439 | `generateMethodNode(IrFunction)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |     Delta |      % |              Time | Contentions | Caller                                    | Location                                                   |
| -----: | --------: | -----: | ----------------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| -69.1% | -244.52ms | 100.0% | 353.7ms → 109.2ms |   137 → 229 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |     Delta |           % |              Time | Contentions | Caller                                                       | Location                                                     |
| -----: | --------: | ----------: | ----------------: | ----------: | ------------------------------------------------------------ | ------------------------------------------------------------ |
| -68.7% | -235.05ms |      100.0% | 342.0ms → 107.0ms |   120 → 202 | `visitBlockBody(IrBlockBody, BlockInfo)`                     | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| -87.2% |  -16.40ms | 5.5% → 2.2% |    18.8ms → 2.4ms |       9 → 8 | `visitContainerExpression(IrContainerExpression, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |     Delta |      % |              Time | Contentions | Caller                                | Location                                                     |
| -----: | --------: | -----: | ----------------: | ----------: | ------------------------------------- | ------------------------------------------------------------ |
| -68.7% | -235.05ms | 100.0% | 342.0ms → 107.0ms |   120 → 202 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |     Delta |      % |              Time | Contentions | Caller                      | Location                                          |
| -----: | --------: | -----: | ----------------: | ----------: | --------------------------- | ------------------------------------------------- |
| -68.7% | -235.05ms | 100.0% | 342.0ms → 107.0ms |   120 → 202 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlockBody` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

| Change |     Delta |      % |              Time | Contentions | Caller       | Location                                                     |
| -----: | --------: | -----: | ----------------: | ----------: | ------------ | ------------------------------------------------------------ |
| -68.7% | -235.05ms | 100.0% | 342.0ms → 107.0ms |   120 → 202 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |     Delta |      % |              Time | Contentions | Caller                          | Location                                                     |
| -----: | --------: | -----: | ----------------: | ----------: | ------------------------------- | ------------------------------------------------------------ |
| -68.6% | -225.33ms | 100.0% | 328.3ms → 103.0ms |   115 → 185 | `visitReturn(IrReturn, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |     Delta |      % |              Time | Contentions | Caller                      | Location                                       |
| -----: | --------: | -----: | ----------------: | ----------: | --------------------------- | ---------------------------------------------- |
| -68.6% | -225.33ms | 100.0% | 328.3ms → 103.0ms |   115 → 185 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrReturn` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`)

| Change |     Delta |      % |              Time | Contentions | Caller                                                     | Location                                                     |
| -----: | --------: | -----: | ----------------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| -68.6% | -225.33ms | 100.0% | 328.3ms → 103.0ms |   115 → 185 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |     Delta |      % |             Time | Contentions | Caller                      | Location                                                     |
| -----: | --------: | -----: | ---------------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| -66.8% | -197.50ms | 100.0% | 295.6ms → 98.1ms |    97 → 162 | `visitCall(IrCall, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |     Delta |      % |             Time | Contentions | Caller                      | Location                                     |
| -----: | --------: | -----: | ---------------: | ----------: | --------------------------- | -------------------------------------------- |
| -66.8% | -197.50ms | 100.0% | 295.6ms → 98.1ms |    97 → 162 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrCall` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`)

| Change |     Delta |             % |             Time | Contentions | Caller                                                     | Location                                                     |
| -----: | --------: | ------------: | ---------------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| -68.3% | -161.63ms | 80.1% → 76.6% | 236.8ms → 75.2ms |     49 → 94 | `visitWhen(IrWhen, BlockInfo)`                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| -64.1% |  -37.56ms | 19.8% → 21.4% |  58.6ms → 21.0ms |     47 → 65 | `visitReturn(IrReturn, BlockInfo)`                         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|    new |   +0.90ms |   0.0% → 0.9% |      0ms → 0.9ms |       0 → 1 | `visitWhileLoop(IrWhileLoop, BlockInfo)`                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|    new |   +0.54ms |   0.0% → 0.5% |      0ms → 0.5ms |       0 → 1 | `visitTypeOperator(IrTypeOperatorCall, BlockInfo)`         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| +96.3% |   +0.25ms |   0.1% → 0.5% |    0.3ms → 0.5ms |           1 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

| Change |   Delta |             % |          Time | Contentions | Callee                                                                          | Location                                                |
| -----: | ------: | ------------: | ------------: | ----------: | ------------------------------------------------------------------------------- | ------------------------------------------------------- |
|    new | +5.43ms |  0.0% → 39.9% |   0ms → 5.4ms |       0 → 5 | `addNextParameter$default(ParametersBuilder, Type, boolean, Type, int, Object)` | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder` |
| -59.9% | -0.15ms | 100.0% → 0.7% | 0.3ms → 0.1ms |           1 | `<clinit>()`                                                                    | `org.jetbrains.kotlin.codegen.inline.LambdaInfo`        |

##### `addNextParameter(Type, boolean, Type)` (`org.jetbrains.kotlin.codegen.inline.ParametersBuilder`)

| Change |   Delta |            % |        Time | Contentions | Callee                                 | Location                                                |
| -----: | ------: | -----------: | ----------: | ----------: | -------------------------------------- | ------------------------------------------------------- |
|    new | +3.98ms | 0.0% → 73.4% | 0ms → 4.0ms |       0 → 2 | `addParameter(ParameterInfo, boolean)` | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder` |

##### `addNextParameter$default(ParametersBuilder, Type, boolean, Type, int, Object)` (`org.jetbrains.kotlin.codegen.inline.ParametersBuilder`)

| Change |   Delta |             % |        Time | Contentions | Callee                                  | Location                                                |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------------------------- | ------------------------------------------------------- |
|    new | +5.43ms | 0.0% → 100.0% | 0ms → 5.4ms |       0 → 5 | `addNextParameter(Type, boolean, Type)` | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder` |

##### `<init>()` (`org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap`)

| Change |   Delta |      % |          Time | Contentions | Callee     | Location                                    |
| -----: | ------: | -----: | ------------: | ----------: | ---------- | ------------------------------------------- |
| +84.3% | +3.71ms | 100.0% | 4.4ms → 8.1ms |      2 → 11 | `<init>()` | `org.jetbrains.kotlin.codegen.FrameMapBase` |

##### `unitStats_delegate$lambda$0(PerformanceManager)` (`org.jetbrains.kotlin.util.PerformanceManager`)

|   Change |   Delta |            % |           Time | Contentions | Callee                                 | Location                                                    |
| -------: | ------: | -----------: | -------------: | ----------: | -------------------------------------- | ----------------------------------------------------------- |
| +7202.0% | +1.54ms | 5.8% → 42.9% | 21.4µs → 1.6ms |       2 → 9 | `getPlatformEnumValue(TargetPlatform)` | `org.jetbrains.kotlin.util.PerformanceManager`              |
|  removed | -0.01ms |  1.8% → 0.0% |    6.7µs → 0ms |       1 → 0 | `<clinit>()`                           | `org.jetbrains.kotlin.util.PerformanceManager$WhenMappings` |

##### `invoke()` (`org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000700114f238`)

|  Change |   Delta |      % |          Time | Contentions | Callee                                            | Location                                       |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------------------------------- | ---------------------------------------------- |
| +889.3% | +3.28ms | 100.0% | 0.4ms → 3.6ms |      6 → 26 | `unitStats_delegate$lambda$0(PerformanceManager)` | `org.jetbrains.kotlin.util.PerformanceManager` |

##### `getUnitStats()` (`org.jetbrains.kotlin.util.PerformanceManager`)

|  Change |   Delta |      % |          Time | Contentions | Callee       | Location                      |
| ------: | ------: | -----: | ------------: | ----------: | ------------ | ----------------------------- |
| +889.3% | +3.28ms | 100.0% | 0.4ms → 3.6ms |      6 → 26 | `getValue()` | `kotlin.SynchronizedLazyImpl` |

##### `mapToCallableMethod(IrCall, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

|  Change |   Delta |              % |          Time | Contentions | Callee                                                     | Location                                                         |
| ------: | ------: | -------------: | ------------: | ----------: | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| +404.9% | +1.04ms | 100.0% → 37.2% | 0.3ms → 1.3ms |       1 → 3 | `mapOverriddenSpecialBuiltinIfNeeded(IrFunction, boolean)` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|     new | +0.90ms |   0.0% → 25.7% |   0ms → 0.9ms |       0 → 1 | `mapSignatureSkipGeneric(IrFunction)`                      | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `trackFakeOverrideMethod(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.JvmMethodSignatureClashDetector`)

| Change |   Delta |            % |        Time | Contentions | Callee                                     | Location                                                                   |
| -----: | ------: | -----------: | ----------: | ----------: | ------------------------------------------ | -------------------------------------------------------------------------- |
|    new | +1.60ms | 0.0% → 53.0% | 0ms → 1.6ms |       0 → 2 | `getOverriddenFunctions(IrSimpleFunction)` | `org.jetbrains.kotlin.backend.jvm.codegen.JvmMethodSignatureClashDetector` |
|    new | +1.42ms | 0.0% → 47.0% | 0ms → 1.4ms |       0 → 1 | `mapRawSignature(IrFunction)`              | `org.jetbrains.kotlin.backend.jvm.codegen.JvmMethodSignatureClashDetector` |

##### `getOverriddenSymbols()` (`org.jetbrains.kotlin.fir.lazy.Fir2IrLazySimpleFunction`)

|  Change |   Delta |      % |          Time | Contentions | Callee                        | Location                                         |
| ------: | ------: | -----: | ------------: | ----------: | ----------------------------- | ------------------------------------------------ |
| +644.3% | +2.88ms | 100.0% | 0.4ms → 3.3ms |       1 → 4 | `getValue(Object, KProperty)` | `org.jetbrains.kotlin.fir.backend.MappedLazyVar` |

##### `wrapWithMaxLocalCalc(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`)

| Change |   Delta |            % |        Time | Contentions | Callee                                    | Location                                                                   |
| -----: | ------: | -----------: | ----------: | ----------: | ----------------------------------------- | -------------------------------------------------------------------------- |
|    new | +1.40ms | 0.0% → 52.7% | 0ms → 1.4ms |       0 → 4 | `<init>(int, int, String, MethodVisitor)` | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator` |

##### `preprocessSuspendMarkers(MethodNode, boolean, boolean)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`)

| Change |   Delta |            % |        Time | Contentions | Callee                 | Location                                      |
| -----: | ------: | -----------: | ----------: | ----------: | ---------------------- | --------------------------------------------- |
|    new | +0.42ms | 0.0% → 17.6% | 0ms → 0.4ms |       0 → 1 | `iterator()`           | `org.jetbrains.kotlin.codegen.InsnSequence`   |
|    new | +0.38ms | 0.0% → 16.0% | 0ms → 0.4ms |       0 → 1 | `asSequence(InsnList)` | `org.jetbrains.kotlin.codegen.InsnSequenceKt` |

##### `allOverridden$default(IrOverridableDeclaration, boolean, int, Object)` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`)

| Change |   Delta |             % |        Time | Contentions | Callee                                             | Location                                 |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------------------------------------- | ---------------------------------------- |
|    new | +2.36ms | 0.0% → 100.0% | 0ms → 2.4ms |       0 → 3 | `allOverridden(IrOverridableDeclaration, boolean)` | `org.jetbrains.kotlin.ir.util.IrUtilsKt` |

##### `forceFoxedReturnTypeOnOverride(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

| Change |   Delta |             % |        Time | Contentions | Callee                                                                  | Location                                 |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------------------------------- | ---------------------------------------- |
|    new | +2.31ms | 0.0% → 100.0% | 0ms → 2.3ms |       0 → 2 | `allOverridden$default(IrOverridableDeclaration, boolean, int, Object)` | `org.jetbrains.kotlin.ir.util.IrUtilsKt` |

##### `forceBoxedReturnType(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

| Change |   Delta |             % |        Time | Contentions | Callee                                       | Location                                                         |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------------------------------- | ---------------------------------------------------------------- |
|    new | +2.31ms | 0.0% → 100.0% | 0ms → 2.3ms |       0 → 2 | `forceFoxedReturnTypeOnOverride(IrFunction)` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |    Delta |             % |             Time | Contentions | Callee                                                                                                   | Location                                                          |
| -----: | -------: | ------------: | ---------------: | ----------: | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| -48.5% |  -1.091s | 95.2% → 94.7% |    2.25s → 1.16s |   508 → 758 | `generate()`                                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`           |
| -46.0% | -47.04ms |   4.3% → 4.5% | 102.3ms → 55.3ms |   164 → 220 | `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|  Change |   Delta |              % |          Time | Contentions | Callee                                                   | Location                                                     |
| ------: | ------: | -------------: | ------------: | ----------: | -------------------------------------------------------- | ------------------------------------------------------------ |
|  -48.2% | -1.140s | 100.0% → 99.7% | 2.36s → 1.22s |   690 → 999 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`       |
| +889.3% | +3.28ms |   <0.1% → 0.3% | 0.4ms → 3.6ms |      6 → 26 | `getUnitStats()`                                         | `org.jetbrains.kotlin.util.PerformanceManager`               |
|     new | +0.63µs |   0.0% → <0.1% |   0ms → 0.6µs |       0 → 1 | `createChildIfNeeded(PerformanceManager, boolean)`       | `org.jetbrains.kotlin.util.PerformanceManagerImpl$Companion` |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`)

| Change |   Delta |      % |          Time | Contentions | Callee                                                                                                            | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| -48.1% | -1.136s | 100.0% | 2.36s → 1.23s | 696 → 1,026 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

| Change |   Delta |      % |          Time | Contentions | Callee  | Location                                                                          |
| -----: | ------: | -----: | ------------: | ----------: | ------- | --------------------------------------------------------------------------------- |
| -48.1% | -1.136s | 100.0% | 2.36s → 1.23s | 696 → 1,026 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

| Change |   Delta |      % |          Time | Contentions | Callee  | Location                                          |
| -----: | ------: | -----: | ------------: | ----------: | ------- | ------------------------------------------------- |
| -48.1% | -1.136s | 100.0% | 2.36s → 1.23s | 696 → 1,026 | `run()` | `java.util.concurrent.CompletableFuture$AsyncRun` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

| Change |   Delta |      % |          Time | Contentions | Callee                                 | Location                                  |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------- | ----------------------------------------- |
| -48.1% | -1.136s | 100.0% | 2.36s → 1.23s | 696 → 1,026 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |   Delta |            % |          Time | Contentions | Callee  | Location                                                       |
| -----: | ------: | -----------: | ------------: | ----------: | ------- | -------------------------------------------------------------- |
| -48.1% | -1.136s |       100.0% | 2.36s → 1.23s | 696 → 1,026 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker`               |
|    new | +0.01ms | 0.0% → <0.1% |   0ms → 5.4µs |       0 → 1 | `run()` | `jdk.jfr.internal.PlatformRecorder$$Lambda.0x0000007001042ce0` |

##### `run()` (`java.lang.Thread`)

| Change |   Delta |      % |          Time | Contentions | Callee                      | Location           |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------- | ------------------ |
| -48.1% | -1.136s | 100.0% | 2.36s → 1.23s | 696 → 1,027 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |    Delta |             % |            Time | Contentions | Callee                                                  | Location                                                |
| -----: | -------: | ------------: | --------------: | ----------: | ------------------------------------------------------- | ------------------------------------------------------- |
| -48.1% |  -1.060s | 97.9% → 98.7% |   2.20s → 1.14s |   479 → 691 | `generateMethod(IrFunction, SourceMapper)`              | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| -67.6% | -31.51ms |   2.1% → 1.3% | 46.6ms → 15.1ms |     26 → 64 | `generateAnnotations()`                                 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| -94.8% |  -0.21ms |         <0.1% |  0.2ms → 11.3µs |       3 → 2 | `shouldSkipCodeGenerationAccordingToGenerationFilter()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
|    new |  +0.08ms |  0.0% → <0.1% |     0ms → 0.1ms |       0 → 1 | `generateField(IrField)`                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |     Delta |             % |            Time | Contentions | Callee                                                                   | Location                                                            |
| -----: | --------: | ------------: | --------------: | ----------: | ------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| -46.0% | -916.22ms | 90.5% → 94.2% |   1.99s → 1.08s |   319 → 529 | `generateMethodNode(IrFunction)`                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`             |
| -77.7% |  -67.92ms |   4.0% → 1.7% | 87.4ms → 19.5ms |     43 → 39 | `getMetadataSerializer()`                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`             |
| -66.9% |  -48.44ms |   3.3% → 2.1% | 72.4ms → 24.0ms |     82 → 89 | `accept(MethodVisitor)`                                                  | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                   |
| -59.4% |  -22.13ms |   1.7% → 1.3% | 37.2ms → 15.1ms |     22 → 21 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.DelegatingClassBuilder`               |
| -86.5% |  -10.35ms |   0.5% → 0.1% |  12.0ms → 1.6ms |      12 → 3 | `<init>(SourceMapper, SMAP, MethodVisitor)`                              | `org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |     Delta |             % |              Time | Contentions | Callee                                                                        | Location                                                   |
| ------: | --------: | ------------: | ----------------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  -62.8% | -325.39ms | 26.0% → 17.9% | 518.1ms → 192.8ms |   244 → 439 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |
| removed |   -0.07ms |  <0.1% → 0.0% |       0.1ms → 0ms |       1 → 0 | `<clinit>()`                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |     Delta |             % |              Time | Contentions | Callee                                                                                               | Location                                                         |
| -----: | --------: | ------------: | ----------------: | ----------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| -69.1% | -244.52ms | 68.3% → 56.6% | 353.7ms → 109.2ms |   137 → 229 | `generate()`                                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
| -80.5% |  -21.43ms |   5.1% → 2.7% |    26.6ms → 5.2ms |     24 → 28 | `calculateMethodFlags(IrFunction)`                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |
| -88.6% |  -15.50ms |   3.4% → 1.0% |    17.5ms → 2.0ms |      8 → 11 | `generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |
| -40.3% |   -6.13ms |   2.9% → 4.7% |    15.2ms → 9.1ms |      4 → 19 | `createFrameMapWithReceivers(IrFunction)`                                                            | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |
| -49.0% |   -5.37ms |   2.1% → 2.9% |    10.9ms → 5.6ms |     20 → 38 | `mapSignatureWithGeneric(IrFunction)`                                                                | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |     Delta |      % |              Time | Contentions | Callee                                    | Location                                                   |
| -----: | --------: | -----: | ----------------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| -62.8% | -325.39ms | 100.0% | 518.1ms → 192.8ms |   244 → 439 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |     Delta |      % |              Time | Contentions | Callee                                  | Location                                                   |
| -----: | --------: | -----: | ----------------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| -62.8% | -325.39ms | 100.0% | 518.1ms → 192.8ms |   244 → 439 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |     Delta |             % |              Time | Contentions | Callee                                             | Location                                                     |
| -----: | --------: | ------------: | ----------------: | ----------: | -------------------------------------------------- | ------------------------------------------------------------ |
| -68.7% | -235.05ms | 96.7% → 98.0% | 342.0ms → 107.0ms |   120 → 202 | `accept(IrVisitor, Object)`                        | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`            |
| -89.3% |   -5.91ms |   1.9% → 0.6% |     6.6ms → 0.7ms |       5 → 9 | `generateNonNullAssertions()`                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| -98.1% |   -2.68ms |  0.8% → <0.1% |     2.7ms → 0.1ms |       2 → 1 | `writeParameterInLocalVariableTable(Label, Label)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| -52.8% |   -0.43ms |   0.2% → 0.4% |     0.8ms → 0.4ms |       5 → 8 | `markNewLabel()`                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |     Delta |             % |              Time | Contentions | Callee                      | Location                                                 |
| -----: | --------: | ------------: | ----------------: | ----------: | --------------------------- | -------------------------------------------------------- |
| -68.6% | -225.33ms | 96.0% → 96.3% | 328.3ms → 103.0ms |   115 → 185 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrReturn`           |
| -93.0% |   -8.95ms |   2.8% → 0.6% |     9.6ms → 0.7ms |       3 → 4 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrWhen`             |
| -82.2% |   -3.83ms |   1.4% → 0.8% |     4.7ms → 0.8ms |       5 → 3 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall` |
| -68.9% |   -3.11ms |          1.3% |     4.5ms → 1.4ms |       1 → 2 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrWhileLoop`        |
| -68.9% |   -3.11ms |          1.3% |     4.5ms → 1.4ms |       1 → 2 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlock`            |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |     Delta |      % |              Time | Contentions | Callee                                                     | Location                                                     |
| -----: | --------: | -----: | ----------------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| -68.7% | -235.05ms | 100.0% | 342.0ms → 107.0ms |   120 → 202 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |     Delta |      % |              Time | Contentions | Callee                                   | Location                                                     |
| -----: | --------: | -----: | ----------------: | ----------: | ---------------------------------------- | ------------------------------------------------------------ |
| -68.7% | -235.05ms | 100.0% | 342.0ms → 107.0ms |   120 → 202 | `visitBlockBody(IrBlockBody, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

| Change |     Delta |      % |              Time | Contentions | Callee                                | Location                                                     |
| -----: | --------: | -----: | ----------------: | ----------: | ------------------------------------- | ------------------------------------------------------------ |
| -68.7% | -235.05ms | 100.0% | 342.0ms → 107.0ms |   120 → 202 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |     Delta |             % |             Time | Contentions | Callee                      | Location                                                 |
| -----: | --------: | ------------: | ---------------: | ----------: | --------------------------- | -------------------------------------------------------- |
| -67.5% | -166.82ms | 75.3% → 78.0% | 247.2ms → 80.4ms |    60 → 112 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrWhen`             |
| -64.1% |  -37.56ms | 17.8% → 20.4% |  58.6ms → 21.0ms |     47 → 65 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrCall`             |
| -98.2% |   -9.20ms |   2.9% → 0.2% |    9.4ms → 0.2ms |       2 → 3 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlock`            |
| -87.1% |   -6.58ms |   2.3% → 0.9% |    7.6ms → 1.0ms |           3 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall` |
| -91.7% |   -5.18ms |   1.7% → 0.5% |    5.6ms → 0.5ms |       3 → 2 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrTry`              |

##### `visitReturn(IrReturn, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |     Delta |      % |              Time | Contentions | Callee                             | Location                                                     |
| -----: | --------: | -----: | ----------------: | ----------: | ---------------------------------- | ------------------------------------------------------------ |
| -68.6% | -225.33ms | 100.0% | 328.3ms → 103.0ms |   115 → 185 | `visitReturn(IrReturn, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`)

| Change |     Delta |      % |              Time | Contentions | Callee                          | Location                                                     |
| -----: | --------: | -----: | ----------------: | ----------: | ------------------------------- | ------------------------------------------------------------ |
| -68.6% | -225.33ms | 100.0% | 328.3ms → 103.0ms |   115 → 185 | `visitReturn(IrReturn, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|   Change |     Delta |             % |             Time | Contentions | Callee                                                                                | Location                                                         |
| -------: | --------: | ------------: | ---------------: | ----------: | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|   -74.2% | -193.36ms | 88.1% → 68.5% | 260.6ms → 67.2ms |     76 → 80 | `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)`   | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator` |
|   -31.8% |   -5.52ms |  5.9% → 12.1% |  17.4ms → 11.8ms |     10 → 44 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
| +1256.1% |   +3.23ms |   0.1% → 3.6% |    0.3ms → 3.5ms |       1 → 6 | `mapToCallableMethod(IrCall, IrFunction)`                                             | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|  removed |   -3.06ms |   1.0% → 0.0% |      3.1ms → 0ms |       1 → 0 | `getSuspensionPointKind(IrFunctionAccessExpression)`                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|      new |   +0.54ms |   0.0% → 0.5% |      0ms → 0.5ms |       0 → 1 | `invoke(IrFunctionAccessExpression, ExpressionCodegen, BlockInfo)`                    | `org.jetbrains.kotlin.backend.jvm.intrinsics.UnsafeCoerce`       |

##### `visitCall(IrCall, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |     Delta |      % |             Time | Contentions | Callee                         | Location                                                     |
| -----: | --------: | -----: | ---------------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| -66.8% | -197.50ms | 100.0% | 295.6ms → 98.1ms |    97 → 162 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`)

| Change |     Delta |      % |             Time | Contentions | Callee                      | Location                                                     |
| -----: | --------: | -----: | ---------------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| -66.8% | -197.50ms | 100.0% | 295.6ms → 98.1ms |    97 → 162 | `visitCall(IrCall, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time blocked in their leaf frame.

Common call stack: `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`

|    Change |   Delta |            % |           Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------: | ------: | -----------: | -------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|       new | +4.39ms |  0.0% → 0.4% |    0ms → 4.4ms |      0 → 13 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                       |
|    +84.3% | +3.71ms |  0.2% → 0.7% |  4.4ms → 8.1ms |      2 → 11 | `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`) ← `<init>()` (`org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap`) ← `createFrameMapWithReceivers(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|       new | +3.67ms |  0.0% → 0.3% |    0ms → 3.7ms |       0 → 4 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|       new | +3.03ms |  0.0% → 0.2% |    0ms → 3.0ms |       0 → 1 | `addParameter(ParameterInfo, boolean)` (`org.jetbrains.kotlin.codegen.inline.ParametersBuilder`) ← `addNextParameter(Type, boolean, Type)` ← `addNextParameter$default(ParametersBuilder, Type, boolean, Type, int, Object)` ← `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                        |
|   +125.4% | +2.78ms |  0.1% → 0.4% |  2.2ms → 5.0ms |       5 → 6 | `getThrownExceptions(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|       new | +2.57ms |  0.0% → 0.2% |    0ms → 2.6ms |       0 → 1 | `<clinit>()` (`org.jetbrains.kotlin.resolve.calls.checkers.CoroutineCallCheckerKt`) ← `generateInlineIntrinsicForIr(FunctionDescriptor)` (`org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt`) ← `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) |
|  +1025.4% | +2.19ms | <0.1% → 0.2% |  0.2ms → 2.4ms |       1 → 7 | `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`) ← `functionProto(FirFunction)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x0000007001920460`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|   +197.3% | +2.13ms | <0.1% → 0.3% |  1.1ms → 3.2ms |           1 | `<init>()` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`) ← `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|       new | +2.10ms |  0.0% → 0.2% |    0ms → 2.1ms |       0 → 6 | `<init>(TypeSystemCommonBackendContext, Map, boolean, Function2)` (`org.jetbrains.kotlin.codegen.inline.TypeParameterMappings`) ← `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                    |
| +74370.1% | +1.77ms | <0.1% → 0.1% |  2.4µs → 1.8ms |       1 → 9 | `getUnitValue(ExpressionCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|   +511.4% | +1.74ms | <0.1% → 0.2% |  0.3ms → 2.1ms |      3 → 17 | `unitStats_delegate$lambda$0(PerformanceManager)` (`org.jetbrains.kotlin.util.PerformanceManager`) ← `invoke()` (`org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000700114f238`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getUnitStats()` (`org.jetbrains.kotlin.util.PerformanceManager`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|       new | +1.57ms |  0.0% → 0.1% |    0ms → 1.6ms |       0 → 3 | `preprocessSuspendMarkers(MethodNode, boolean, boolean)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +7202.0% | +1.54ms | <0.1% → 0.1% | 21.4µs → 1.6ms |       2 → 9 | `getPlatformEnumValue(TargetPlatform)` (`org.jetbrains.kotlin.util.PerformanceManager`) ← `unitStats_delegate$lambda$0(PerformanceManager)` ← `invoke()` (`org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000700114f238`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getUnitStats()` (`org.jetbrains.kotlin.util.PerformanceManager`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|       new | +1.44ms |  0.0% → 0.1% |    0ms → 1.4ms |       0 → 2 | `addNextParameter(Type, boolean, Type)` (`org.jetbrains.kotlin.codegen.inline.ParametersBuilder`) ← `addNextParameter$default(ParametersBuilder, Type, boolean, Type, int, Object)` ← `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                 |
|       new | +1.44ms |  0.0% → 0.1% |    0ms → 1.4ms |      0 → 11 | `<init>(ClassWriter)` (`org.jetbrains.org.objectweb.asm.SymbolTable`) ← `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`) ← `<init>(int)` ← `<init>()` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$BinaryClassWriter`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|       new | +1.42ms |  0.0% → 0.1% |    0ms → 1.4ms |       0 → 1 | `getValue(Object, KProperty)` (`org.jetbrains.kotlin.fir.backend.MappedLazyVar`) ← `getOverriddenSymbols()` (`org.jetbrains.kotlin.fir.lazy.Fir2IrLazySimpleFunction`) ← `allOverridden(IrOverridableDeclaration, boolean)` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`) ← `allOverridden$default(IrOverridableDeclaration, boolean, int, Object)` ← `forceFoxedReturnTypeOnOverride(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`) ← `forceBoxedReturnType(IrFunction)` ← `mapReturnType(IrDeclaration, JvmSignatureWriter, boolean)` ← `mapSignature(IrFunction, boolean, boolean, boolean)` ← `mapSignature$default(MethodSignatureMapper, IrFunction, boolean, boolean, boolean, int, Object)` ← `mapFakeOverrideSignatureSkipGeneric(IrFunction)` ← `mapRawSignature(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.JvmMethodSignatureClashDetector`) ← `trackFakeOverrideMethod(IrFunction)` ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|       new | +1.40ms |  0.0% → 0.1% |    0ms → 1.4ms |       0 → 4 | `<init>(int, int, String, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`) ← `wrapWithMaxLocalCalc(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|       new | +1.32ms |  0.0% → 0.1% |    0ms → 1.3ms |       0 → 3 | `invocationKindProtobufEnum(EventOccurrencesRange)` (`org.jetbrains.kotlin.fir.serialization.FirContractSerializer$ContractSerializerWorker`) ← `fillEffectProto(ProtoBuf$Effect$Builder, KtEffectDeclaration, FirContractDescription)` ← `effectProto(KtEffectDeclaration, FirContractDescription)` ← `contractProto(FirContractDescription)` ← `serializeContractOfFunctionIfAny(FirFunction, ProtoBuf$Function$Builder, FirElementSerializer)` (`org.jetbrains.kotlin.fir.serialization.FirContractSerializer`) ← `functionProto(FirFunction)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x0000007001920460`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|       new | +1.29ms |  0.0% → 0.1% |    0ms → 1.3ms |       0 → 2 | `mapToCallableMethod(IrCall, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|       new | +1.26ms |  0.0% → 0.1% |    0ms → 1.3ms |       0 → 5 | `wrapWithMaxLocalCalc(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### Improvements

Call stacks with the largest decrease in time blocked in their leaf frame.

Common call stack: `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`

|  Change |     Delta |             % |             Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------: | --------: | ------------: | ---------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -40.0% | -590.77ms | 62.4% → 72.1% |  1.48s → 884.9ms |     74 → 90 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -75.2% | -135.24ms |   7.6% → 3.6% | 180.0ms → 44.7ms |           2 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -40.5% |  -28.70ms |   3.0% → 3.4% |  70.8ms → 42.2ms |     23 → 52 | `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -77.5% |  -25.78ms |   1.4% → 0.6% |   33.3ms → 7.5ms |     18 → 16 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000070018afd88`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -88.6% |  -15.50ms |   0.7% → 0.2% |   17.5ms → 2.0ms |      8 → 11 | `generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -77.1% |  -14.67ms |   0.8% → 0.4% |   19.0ms → 4.4ms |           4 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000070018afd88`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -51.3% |  -14.25ms |   1.2% → 1.1% |  27.8ms → 13.5ms |     10 → 17 | `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed |  -11.95ms |   0.5% → 0.0% |     12.0ms → 0ms |       8 → 0 | `getDescriptorOrigin(IrDeclaration)` (`org.jetbrains.kotlin.backend.jvm.extensions.JvmIrDeclarationOriginKt`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -57.5% |  -10.27ms |   0.8% → 0.6% |   17.9ms → 7.6ms |     12 → 10 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -84.6% |  -10.18ms |   0.5% → 0.2% |   12.0ms → 1.9ms |       8 → 7 | `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -91.1% |   -9.85ms |   0.5% → 0.1% |   10.8ms → 1.0ms |       2 → 8 | `createFrameMapWithReceivers(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -85.8% |   -9.73ms |   0.5% → 0.1% |   11.3ms → 1.6ms |      11 → 3 | `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`) ← `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` ← `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -81.3% |   -8.88ms |   0.5% → 0.2% |   10.9ms → 2.0ms |       6 → 5 | `createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion`) ← `createTopLevel$default(FirElementSerializer$Companion, FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean, int, Object)` ← `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000070018afd88`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -99.3% |   -8.61ms |  0.4% → <0.1% |    8.7ms → 0.1ms |           1 | `makeDefinitelyNotNull(UnwrappedType, boolean, boolean)` (`org.jetbrains.kotlin.types.DefinitelyNotNullType$Companion`) ← `makeDefinitelyNotNull$default(DefinitelyNotNullType$Companion, UnwrappedType, boolean, boolean, int, Object)` ← `toIrBasedKotlinType(IrType, KotlinBuiltIns)` (`org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt`) ← `toIrBasedKotlinType$default(IrType, KotlinBuiltIns, int, Object)` ← `visitTypeOperator(IrTypeOperatorCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitTypeOperator(IrTypeOperatorCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall`) ← `gen(IrExpression, Type, IrType, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCallGenerator`) ← `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitContainerExpression(IrContainerExpression, BlockInfo)` ← `visitContainerExpression(IrContainerExpression, Object)` ← `visitBlock(IrBlock, Object)` (`org.jetbrains.kotlin.ir.visitors.IrVisitor`) ← `visitBlock(IrBlock, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlock(IrBlock, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlock`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` |
|  -91.4% |   -8.35ms |   0.4% → 0.1% |    9.1ms → 0.8ms |           2 | `newBuilder()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`) ← `typeOrTypealiasProto(ConeKotlinType, boolean, FirTypeRef, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `typeOrTypealiasProto$default(FirElementSerializer, ConeKotlinType, boolean, FirTypeRef, boolean, boolean, boolean, int, Object)` ← `typeProto(ConeKotlinType, boolean, FirTypeRef, boolean, boolean)` ← `typeProto$default(FirElementSerializer, ConeKotlinType, boolean, FirTypeRef, boolean, boolean, int, Object)` ← `typeProto(FirTypeRef, boolean)` ← `functionProto(FirFunction)` ← `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x0000007001920460`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -82.8% |   -7.91ms |   0.4% → 0.1% |    9.6ms → 1.6ms |       3 → 5 | `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -84.7% |   -7.39ms |   0.4% → 0.1% |    8.7ms → 1.3ms |       1 → 3 | `<init>(FirSession, JvmSerializationBindings, List, ScopeSession, JvmSerializationBindings, boolean, String, ClassBuilderMode, boolean, boolean, BinaryVersion, JvmDefaultMode, FirElementAwareStringTable, FirAdditionalMetadataProvider)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`) ← `<init>(FirSession, JvmSerializationBindings, GenerationState, List, AbstractTypeApproximator, Fir2IrComponents, FirElementAwareStringTable)` ← `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000070018afd88`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -99.1% |   -7.25ms |  0.3% → <0.1% |    7.3ms → 0.1ms |           1 | `<clinit>()` (`org.jetbrains.kotlin.codegen.inline.coroutines.CoroutineTransformer`) ← `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -71.9% |   -7.19ms |   0.4% → 0.2% |   10.0ms → 2.8ms |       4 → 3 | `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.AbstractClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -94.0% |   -7.07ms |  0.3% → <0.1% |    7.5ms → 0.4ms |       4 → 2 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

# Thread park profile diff

Parked 3.18s → 1.94s (-1.237s, -38.9%) over 45 → 40 parks (70.6ms → 48.5ms per park).

| Category         | Change |   Delta |      % |          Time |   Parks |
| ---------------- | -----: | ------: | -----: | ------------: | ------: |
| Standard library | -38.9% | -1.237s | 100.0% | 3.18s → 1.94s | 45 → 40 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 1.75s → 1.14s (55.0% → 58.7%) run() at java.lang.Thread
│   └── 1.75s → 1.14s (55.0% → 58.7%) runWith(Object, Runnable)
│       └── 1.75s → 1.14s (55.0% → 58.7%) run() at java.util.concurrent.ThreadPoolExecutor$Worker
│           └── 1.75s → 1.14s (55.0% → 58.7%) runWorker(ThreadPoolExecutor$Worker) at java.util.concurrent.ThreadPoolExecutor
│               └── 1.75s → 1.14s (55.0% → 58.7%) getTask()
│                   └── 1.75s → 1.14s (55.0% → 58.7%) take() at java.util.concurrent.LinkedBlockingQueue
│                       └── 1.75s → 1.14s (55.0% → 58.7%) await() at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject
│                           └── 1.75s → 1.14s (54.9% → 58.7%) managedBlock(ForkJoinPool$ManagedBlocker) at java.util.concurrent.ForkJoinPool
│                               └── 1.75s → 1.14s (54.9% → 58.7%) unmanagedBlock(ForkJoinPool$ManagedBlocker)
│                                   └── 1.75s → 1.14s (54.9% → 58.7%) block() at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode
│                                       └── 1.75s → 1.14s (54.9% → 58.7%) park() at java.util.concurrent.locks.LockSupport
│                                           └── 1.75s → 1.14s (54.9% → 58.7%, self 100.0% globally) park(boolean, long) at jdk.internal.misc.Unsafe
├── 911.9ms → 496.2ms (28.7% → 25.6%) run() at jdk.internal.misc.InnocuousThread
│   └── 911.9ms → 496.2ms (28.7% → 25.6%) run() at java.lang.Thread
│       └── 911.9ms → 496.2ms (28.7% → 25.6%) runWith(Object, Runnable)
│           └── 911.9ms → 496.2ms (28.7% → 25.6%) run() at jdk.internal.ref.CleanerImpl
│               └── 911.9ms → 496.2ms (28.7% → 25.6%) remove(long) at java.lang.ref.ReferenceQueue
│                   └── 911.9ms → 496.2ms (28.7% → 25.6%) remove0(long)
│                       └── 911.9ms → 496.2ms (28.7% → 25.6%) await(long)
│                           └── 911.9ms → 496.2ms (28.7% → 25.6%) await(long, TimeUnit) at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject
│                               └── 911.9ms → 496.2ms (28.7% → 25.6%) parkNanos(Object, long) at java.util.concurrent.locks.LockSupport
│                                   └── 911.9ms → 496.2ms (28.7% → 25.6%) park(boolean, long) at jdk.internal.misc.Unsafe
└── … 518.9ms → 305.2ms (16.3% → 15.7%) executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable) at org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline
    └── 518.9ms → 305.2ms (16.3% → 15.7%) runPhasedPipeline(ArgumentsPipelineArtifact)
        └── 518.9ms → 305.2ms (16.3% → 15.7%) invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.CompilerPhaseKt
            └── 518.9ms → 305.2ms (16.3% → 15.7%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.backend.common.phaser.CompositePhase
                └── 518.9ms → 305.2ms (16.3% → 15.7%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.NamedCompilerPhase
                    └── 518.9ms → 305.2ms (16.3% → 15.7%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
                        └── 518.9ms → 305.2ms (16.3% → 15.7%) phaseBody(PipelineContext, PipelineArtifact)
                            └── 518.9ms → 305.2ms (16.3% → 15.7%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase
                                └── 518.9ms → 305.2ms (16.3% → 15.7%) executePhase(JvmFir2IrPipelineArtifact)
                                    └── 518.9ms → 305.2ms (16.3% → 15.7%) runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean) at org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler
                                        └── 518.9ms → 305.2ms (16.3% → 15.7%) invokeCodegen(JvmIrCodegenFactory$CodegenInput) at org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory
                                            └── 518.3ms → 304.8ms (16.3% → 15.7%) get() at java.util.concurrent.CompletableFuture
                                                └── 518.3ms → 304.8ms (16.3% → 15.7%) waitingGet(boolean)
                                                    └── 518.3ms → 304.8ms (16.3% → 15.7%) managedBlock(ForkJoinPool$ManagedBlocker) at java.util.concurrent.ForkJoinPool
                                                        └── 518.3ms → 304.8ms (16.3% → 15.7%) unmanagedBlock(ForkJoinPool$ManagedBlocker)
                                                            └── 518.3ms → 304.8ms (16.3% → 15.7%) block() at java.util.concurrent.CompletableFuture$Signaller
                                                                └── 518.3ms → 304.8ms (16.3% → 15.7%) park(Object) at java.util.concurrent.locks.LockSupport
                                                                    └── 518.3ms → 304.8ms (16.3% → 15.7%) park(boolean, long) at jdk.internal.misc.Unsafe
```

## Hottest functions

### Self time

#### Improvements

Functions with the largest decrease in time parked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

| Change |   Delta |      % |          Time |   Parks | Function              | Location                   |
| -----: | ------: | -----: | ------------: | ------: | --------------------- | -------------------------- |
| -38.9% | -1.237s | 100.0% | 3.18s → 1.94s | 45 → 40 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |     Delta |             % |              Time |   Parks | Caller                    | Location                                 |
| -----: | --------: | ------------: | ----------------: | ------: | ------------------------- | ---------------------------------------- |
| -34.8% | -606.87ms | 54.9% → 58.7% |     1.75s → 1.14s | 26 → 21 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
| -45.6% | -415.97ms | 28.7% → 25.6% | 912.6ms → 496.6ms |   4 → 3 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |
| -41.2% | -213.96ms | 16.4% → 15.7% | 519.7ms → 305.8ms | 15 → 16 | `park(Object)`            | `java.util.concurrent.locks.LockSupport` |

### Total time

#### Regressions

Functions with the largest increase in time parked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

| Change |   Delta |            % |         Time | Parks | Function                                                | Location                                                |
| -----: | ------: | -----------: | -----------: | ----: | ------------------------------------------------------- | ------------------------------------------------------- |
|    new | +0.12ms | 0.0% → <0.1% |  0ms → 0.1ms | 0 → 2 | `acquireInterruptibly(int)`                             | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |
|    new | +0.12ms | 0.0% → <0.1% |  0ms → 0.1ms | 0 → 2 | `lockInterruptibly()`                                   | `java.util.concurrent.locks.ReentrantLock$Sync`         |
|    new | +0.12ms | 0.0% → <0.1% |  0ms → 0.1ms | 0 → 2 | `lockInterruptibly()`                                   | `java.util.concurrent.locks.ReentrantLock`              |
|    new | +0.02ms | 0.0% → <0.1% | 0ms → 16.8µs | 0 → 3 | `acquire(int)`                                          | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |
|    new | +0.02ms | 0.0% → <0.1% | 0ms → 16.8µs | 0 → 3 | `lock()`                                                | `java.util.concurrent.locks.ReentrantLock$Sync`         |
|    new | +0.02ms | 0.0% → <0.1% | 0ms → 16.8µs | 0 → 3 | `lock()`                                                | `java.util.concurrent.locks.ReentrantLock`              |
|    new | +0.02ms | 0.0% → <0.1% | 0ms → 16.8µs | 0 → 3 | `processWorkerExit(ThreadPoolExecutor$Worker, boolean)` | `java.util.concurrent.ThreadPoolExecutor`               |

#### Improvements

Functions with the largest decrease in time parked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

| Change |     Delta |             % |              Time |   Parks | Function                                      | Location                                                                |
| -----: | --------: | ------------: | ----------------: | ------: | --------------------------------------------- | ----------------------------------------------------------------------- |
| -38.9% |   -1.237s |        100.0% |     3.18s → 1.94s | 45 → 40 | `park(boolean, long)`                         | `jdk.internal.misc.Unsafe`                                              |
| -38.5% |   -1.023s | 83.7% → 84.3% |     2.66s → 1.64s | 42 → 37 | `runWith(Object, Runnable)`                   | `java.lang.Thread`                                                      |
| -38.5% |   -1.023s | 83.7% → 84.3% |     2.66s → 1.64s | 42 → 37 | `run()`                                       | `java.lang.Thread`                                                      |
| -36.2% | -820.34ms | 71.2% → 74.4% |     2.26s → 1.44s | 28 → 23 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool`                                     |
| -36.2% | -820.34ms | 71.2% → 74.4% |     2.26s → 1.44s | 28 → 23 | `managedBlock(ForkJoinPool$ManagedBlocker)`   | `java.util.concurrent.ForkJoinPool`                                     |
| -34.8% | -607.50ms | 55.0% → 58.7% |     1.75s → 1.14s | 39 → 30 | `await()`                                     | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| -34.8% | -607.38ms | 55.0% → 58.7% |     1.75s → 1.14s | 39 → 32 | `take()`                                      | `java.util.concurrent.LinkedBlockingQueue`                              |
| -34.8% | -607.38ms | 55.0% → 58.7% |     1.75s → 1.14s | 39 → 32 | `getTask()`                                   | `java.util.concurrent.ThreadPoolExecutor`                               |
| -34.8% | -607.36ms | 55.0% → 58.7% |     1.75s → 1.14s | 39 → 35 | `runWorker(ThreadPoolExecutor$Worker)`        | `java.util.concurrent.ThreadPoolExecutor`                               |
| -34.8% | -607.36ms | 55.0% → 58.7% |     1.75s → 1.14s | 39 → 35 | `run()`                                       | `java.util.concurrent.ThreadPoolExecutor$Worker`                        |
| -34.8% | -606.87ms | 54.9% → 58.7% |     1.75s → 1.14s | 26 → 21 | `park()`                                      | `java.util.concurrent.locks.LockSupport`                                |
| -34.8% | -606.87ms | 54.9% → 58.7% |     1.75s → 1.14s | 26 → 21 | `block()`                                     | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`   |
| -45.6% | -415.97ms | 28.7% → 25.6% | 912.6ms → 496.6ms |   4 → 3 | `parkNanos(Object, long)`                     | `java.util.concurrent.locks.LockSupport`                                |
| -45.6% | -415.67ms | 28.7% → 25.6% | 911.9ms → 496.2ms |   3 → 2 | `await(long, TimeUnit)`                       | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| -45.6% | -415.67ms | 28.7% → 25.6% | 911.9ms → 496.2ms |   3 → 2 | `await(long)`                                 | `java.lang.ref.ReferenceQueue`                                          |
| -45.6% | -415.67ms | 28.7% → 25.6% | 911.9ms → 496.2ms |   3 → 2 | `remove0(long)`                               | `java.lang.ref.ReferenceQueue`                                          |
| -45.6% | -415.67ms | 28.7% → 25.6% | 911.9ms → 496.2ms |   3 → 2 | `remove(long)`                                | `java.lang.ref.ReferenceQueue`                                          |
| -45.6% | -415.67ms | 28.7% → 25.6% | 911.9ms → 496.2ms |   3 → 2 | `run()`                                       | `jdk.internal.ref.CleanerImpl`                                          |
| -45.6% | -415.67ms | 28.7% → 25.6% | 911.9ms → 496.2ms |   3 → 2 | `run()`                                       | `jdk.internal.misc.InnocuousThread`                                     |
| -41.2% | -213.96ms | 16.4% → 15.7% | 519.7ms → 305.8ms | 15 → 16 | `park(Object)`                                | `java.util.concurrent.locks.LockSupport`                                |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `acquireInterruptibly(int)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer`)

| Change |   Delta |             % |        Time | Parks | Caller                | Location                                        |
| -----: | ------: | ------------: | ----------: | ----: | --------------------- | ----------------------------------------------- |
|    new | +0.12ms | 0.0% → 100.0% | 0ms → 0.1ms | 0 → 2 | `lockInterruptibly()` | `java.util.concurrent.locks.ReentrantLock$Sync` |

##### `lockInterruptibly()` (`java.util.concurrent.locks.ReentrantLock$Sync`)

| Change |   Delta |             % |        Time | Parks | Caller                | Location                                   |
| -----: | ------: | ------------: | ----------: | ----: | --------------------- | ------------------------------------------ |
|    new | +0.12ms | 0.0% → 100.0% | 0ms → 0.1ms | 0 → 2 | `lockInterruptibly()` | `java.util.concurrent.locks.ReentrantLock` |

##### `lockInterruptibly()` (`java.util.concurrent.locks.ReentrantLock`)

| Change |   Delta |             % |        Time | Parks | Caller   | Location                                   |
| -----: | ------: | ------------: | ----------: | ----: | -------- | ------------------------------------------ |
|    new | +0.12ms | 0.0% → 100.0% | 0ms → 0.1ms | 0 → 2 | `take()` | `java.util.concurrent.LinkedBlockingQueue` |

##### `acquire(int)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer`)

| Change |   Delta |             % |         Time | Parks | Caller   | Location                                        |
| -----: | ------: | ------------: | -----------: | ----: | -------- | ----------------------------------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 16.8µs | 0 → 3 | `lock()` | `java.util.concurrent.locks.ReentrantLock$Sync` |

##### `lock()` (`java.util.concurrent.locks.ReentrantLock$Sync`)

| Change |   Delta |             % |         Time | Parks | Caller   | Location                                   |
| -----: | ------: | ------------: | -----------: | ----: | -------- | ------------------------------------------ |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 16.8µs | 0 → 3 | `lock()` | `java.util.concurrent.locks.ReentrantLock` |

##### `lock()` (`java.util.concurrent.locks.ReentrantLock`)

| Change |   Delta |             % |         Time | Parks | Caller                                                  | Location                                  |
| -----: | ------: | ------------: | -----------: | ----: | ------------------------------------------------------- | ----------------------------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 16.8µs | 0 → 3 | `processWorkerExit(ThreadPoolExecutor$Worker, boolean)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `processWorkerExit(ThreadPoolExecutor$Worker, boolean)` (`java.util.concurrent.ThreadPoolExecutor`)

| Change |   Delta |             % |         Time | Parks | Caller                                 | Location                                  |
| -----: | ------: | ------------: | -----------: | ----: | -------------------------------------- | ----------------------------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 16.8µs | 0 → 3 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |     Delta |             % |              Time |   Parks | Caller                    | Location                                 |
| -----: | --------: | ------------: | ----------------: | ------: | ------------------------- | ---------------------------------------- |
| -34.8% | -606.87ms | 54.9% → 58.7% |     1.75s → 1.14s | 26 → 21 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
| -45.6% | -415.97ms | 28.7% → 25.6% | 912.6ms → 496.6ms |   4 → 3 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |
| -41.2% | -213.96ms | 16.4% → 15.7% | 519.7ms → 305.8ms | 15 → 16 | `park(Object)`            | `java.util.concurrent.locks.LockSupport` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |   Delta |      % |          Time |   Parks | Caller  | Location           |
| -----: | ------: | -----: | ------------: | ------: | ------- | ------------------ |
| -38.5% | -1.023s | 100.0% | 2.66s → 1.64s | 42 → 37 | `run()` | `java.lang.Thread` |

##### `run()` (`java.lang.Thread`)

| Change |     Delta |             % |              Time | Parks | Caller  | Location                            |
| -----: | --------: | ------------: | ----------------: | ----: | ------- | ----------------------------------- |
| -45.6% | -415.67ms | 34.3% → 30.3% | 911.9ms → 496.2ms | 3 → 2 | `run()` | `jdk.internal.misc.InnocuousThread` |

##### `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |      % |          Time |   Parks | Caller                                      | Location                            |
| -----: | --------: | -----: | ------------: | ------: | ------------------------------------------- | ----------------------------------- |
| -36.2% | -820.34ms | 100.0% | 2.26s → 1.44s | 28 → 23 | `managedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool` |

##### `managedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |             % |              Time |   Parks | Caller                | Location                                                                |
| -----: | --------: | ------------: | ----------------: | ------: | --------------------- | ----------------------------------------------------------------------- |
| -34.8% | -606.87ms | 77.1% → 78.9% |     1.75s → 1.14s | 26 → 21 | `await()`             | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| -41.2% | -213.47ms | 22.9% → 21.1% | 518.3ms → 304.8ms |       2 | `waitingGet(boolean)` | `java.util.concurrent.CompletableFuture`                                |

##### `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

| Change |     Delta |      % |          Time |   Parks | Caller   | Location                                   |
| -----: | --------: | -----: | ------------: | ------: | -------- | ------------------------------------------ |
| -34.8% | -607.50ms | 100.0% | 1.75s → 1.14s | 39 → 30 | `take()` | `java.util.concurrent.LinkedBlockingQueue` |

##### `take()` (`java.util.concurrent.LinkedBlockingQueue`)

| Change |     Delta |      % |          Time |   Parks | Caller      | Location                                  |
| -----: | --------: | -----: | ------------: | ------: | ----------- | ----------------------------------------- |
| -34.8% | -607.38ms | 100.0% | 1.75s → 1.14s | 39 → 32 | `getTask()` | `java.util.concurrent.ThreadPoolExecutor` |

##### `getTask()` (`java.util.concurrent.ThreadPoolExecutor`)

| Change |     Delta |      % |          Time |   Parks | Caller                                 | Location                                  |
| -----: | --------: | -----: | ------------: | ------: | -------------------------------------- | ----------------------------------------- |
| -34.8% | -607.38ms | 100.0% | 1.75s → 1.14s | 39 → 32 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

| Change |     Delta |      % |          Time |   Parks | Caller  | Location                                         |
| -----: | --------: | -----: | ------------: | ------: | ------- | ------------------------------------------------ |
| -34.8% | -607.36ms | 100.0% | 1.75s → 1.14s | 39 → 35 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

| Change |     Delta |      % |          Time |   Parks | Caller                      | Location           |
| -----: | --------: | -----: | ------------: | ------: | --------------------------- | ------------------ |
| -34.8% | -607.36ms | 100.0% | 1.75s → 1.14s | 39 → 35 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |      % |          Time |   Parks | Caller    | Location                                                              |
| -----: | --------: | -----: | ------------: | ------: | --------- | --------------------------------------------------------------------- |
| -34.8% | -606.87ms | 100.0% | 1.75s → 1.14s | 26 → 21 | `block()` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode` |

##### `block()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`)

| Change |     Delta |      % |          Time |   Parks | Caller                                        | Location                            |
| -----: | --------: | -----: | ------------: | ------: | --------------------------------------------- | ----------------------------------- |
| -34.8% | -606.87ms | 100.0% | 1.75s → 1.14s | 26 → 21 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |     % |              Time | Parks | Caller                  | Location                                                                |
| -----: | --------: | ----: | ----------------: | ----: | ----------------------- | ----------------------------------------------------------------------- |
| -45.6% | -415.67ms | 99.9% | 911.9ms → 496.2ms | 3 → 2 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| -47.9% |   -0.31ms |  0.1% |     0.6ms → 0.3ms |     1 | `awaitNanos(long)`      | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

| Change |     Delta |      % |              Time | Parks | Caller        | Location                       |
| -----: | --------: | -----: | ----------------: | ----: | ------------- | ------------------------------ |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms | 3 → 2 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

| Change |     Delta |      % |              Time | Parks | Caller          | Location                       |
| -----: | --------: | -----: | ----------------: | ----: | --------------- | ------------------------------ |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms | 3 → 2 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

| Change |     Delta |      % |              Time | Parks | Caller         | Location                       |
| -----: | --------: | -----: | ----------------: | ----: | -------------- | ------------------------------ |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms | 3 → 2 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

| Change |     Delta |      % |              Time | Parks | Caller  | Location                       |
| -----: | --------: | -----: | ----------------: | ----: | ------- | ------------------------------ |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms | 3 → 2 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

| Change |     Delta |      % |              Time | Parks | Caller                      | Location           |
| -----: | --------: | -----: | ----------------: | ----: | --------------------------- | ------------------ |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms | 3 → 2 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `park(Object)` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |     % |              Time |   Parks | Caller                                                                           | Location                                                |
| -----: | --------: | ----: | ----------------: | ------: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -41.2% | -213.47ms | 99.7% | 518.3ms → 304.8ms |       2 | `block()`                                                                        | `java.util.concurrent.CompletableFuture$Signaller`      |
| -33.9% |   -0.49ms |  0.3% |     1.4ms → 1.0ms | 13 → 14 | `acquire(AbstractQueuedSynchronizer$Node, int, boolean, boolean, boolean, long)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `acquireInterruptibly(int)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer`)

| Change |   Delta |             % |        Time | Parks | Callee                                                                           | Location                                                |
| -----: | ------: | ------------: | ----------: | ----: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
|    new | +0.12ms | 0.0% → 100.0% | 0ms → 0.1ms | 0 → 2 | `acquire(AbstractQueuedSynchronizer$Node, int, boolean, boolean, boolean, long)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |

##### `lockInterruptibly()` (`java.util.concurrent.locks.ReentrantLock$Sync`)

| Change |   Delta |             % |        Time | Parks | Callee                      | Location                                                |
| -----: | ------: | ------------: | ----------: | ----: | --------------------------- | ------------------------------------------------------- |
|    new | +0.12ms | 0.0% → 100.0% | 0ms → 0.1ms | 0 → 2 | `acquireInterruptibly(int)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |

##### `lockInterruptibly()` (`java.util.concurrent.locks.ReentrantLock`)

| Change |   Delta |             % |        Time | Parks | Callee                | Location                                        |
| -----: | ------: | ------------: | ----------: | ----: | --------------------- | ----------------------------------------------- |
|    new | +0.12ms | 0.0% → 100.0% | 0ms → 0.1ms | 0 → 2 | `lockInterruptibly()` | `java.util.concurrent.locks.ReentrantLock$Sync` |

##### `acquire(int)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer`)

| Change |   Delta |             % |         Time | Parks | Callee                                                                           | Location                                                |
| -----: | ------: | ------------: | -----------: | ----: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 16.8µs | 0 → 3 | `acquire(AbstractQueuedSynchronizer$Node, int, boolean, boolean, boolean, long)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |

##### `lock()` (`java.util.concurrent.locks.ReentrantLock$Sync`)

| Change |   Delta |             % |         Time | Parks | Callee         | Location                                                |
| -----: | ------: | ------------: | -----------: | ----: | -------------- | ------------------------------------------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 16.8µs | 0 → 3 | `acquire(int)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |

##### `lock()` (`java.util.concurrent.locks.ReentrantLock`)

| Change |   Delta |             % |         Time | Parks | Callee   | Location                                        |
| -----: | ------: | ------------: | -----------: | ----: | -------- | ----------------------------------------------- |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 16.8µs | 0 → 3 | `lock()` | `java.util.concurrent.locks.ReentrantLock$Sync` |

##### `processWorkerExit(ThreadPoolExecutor$Worker, boolean)` (`java.util.concurrent.ThreadPoolExecutor`)

| Change |   Delta |             % |         Time | Parks | Callee   | Location                                   |
| -----: | ------: | ------------: | -----------: | ----: | -------- | ------------------------------------------ |
|    new | +0.02ms | 0.0% → 100.0% | 0ms → 16.8µs | 0 → 3 | `lock()` | `java.util.concurrent.locks.ReentrantLock` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |     Delta |             % |              Time |   Parks | Callee  | Location                                         |
| -----: | --------: | ------------: | ----------------: | ------: | ------- | ------------------------------------------------ |
| -34.8% | -607.36ms | 65.7% → 69.7% |     1.75s → 1.14s | 39 → 35 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |
| -45.6% | -415.67ms | 34.3% → 30.3% | 911.9ms → 496.2ms |   3 → 2 | `run()` | `jdk.internal.ref.CleanerImpl`                   |

##### `run()` (`java.lang.Thread`)

| Change |   Delta |      % |          Time |   Parks | Callee                      | Location           |
| -----: | ------: | -----: | ------------: | ------: | --------------------------- | ------------------ |
| -38.5% | -1.023s | 100.0% | 2.66s → 1.64s | 42 → 37 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |             % |              Time |   Parks | Callee    | Location                                                              |
| -----: | --------: | ------------: | ----------------: | ------: | --------- | --------------------------------------------------------------------- |
| -34.8% | -606.87ms | 77.1% → 78.9% |     1.75s → 1.14s | 26 → 21 | `block()` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode` |
| -41.2% | -213.47ms | 22.9% → 21.1% | 518.3ms → 304.8ms |       2 | `block()` | `java.util.concurrent.CompletableFuture$Signaller`                    |

##### `managedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |      % |          Time |   Parks | Callee                                        | Location                            |
| -----: | --------: | -----: | ------------: | ------: | --------------------------------------------- | ----------------------------------- |
| -36.2% | -820.34ms | 100.0% | 2.26s → 1.44s | 28 → 23 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool` |

##### `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

| Change |     Delta |     % |          Time |   Parks | Callee                                            | Location                                                |
| -----: | --------: | ----: | ------------: | ------: | ------------------------------------------------- | ------------------------------------------------------- |
| -34.8% | -606.87ms | 99.9% | 1.75s → 1.14s | 26 → 21 | `managedBlock(ForkJoinPool$ManagedBlocker)`       | `java.util.concurrent.ForkJoinPool`                     |
| -43.6% |   -0.63ms |  0.1% | 1.4ms → 0.8ms |  13 → 9 | `reacquire(AbstractQueuedSynchronizer$Node, int)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |

##### `take()` (`java.util.concurrent.LinkedBlockingQueue`)

| Change |     Delta |            % |          Time |   Parks | Callee                | Location                                                                |
| -----: | --------: | -----------: | ------------: | ------: | --------------------- | ----------------------------------------------------------------------- |
| -34.8% | -607.50ms |       100.0% | 1.75s → 1.14s | 39 → 30 | `await()`             | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
|    new |   +0.12ms | 0.0% → <0.1% |   0ms → 0.1ms |   0 → 2 | `lockInterruptibly()` | `java.util.concurrent.locks.ReentrantLock`                              |

##### `getTask()` (`java.util.concurrent.ThreadPoolExecutor`)

| Change |     Delta |      % |          Time |   Parks | Callee   | Location                                   |
| -----: | --------: | -----: | ------------: | ------: | -------- | ------------------------------------------ |
| -34.8% | -607.38ms | 100.0% | 1.75s → 1.14s | 39 → 32 | `take()` | `java.util.concurrent.LinkedBlockingQueue` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

| Change |     Delta |            % |          Time |   Parks | Callee                                                  | Location                                  |
| -----: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------- | ----------------------------------------- |
| -34.8% | -607.38ms |       100.0% | 1.75s → 1.14s | 39 → 32 | `getTask()`                                             | `java.util.concurrent.ThreadPoolExecutor` |
|    new |   +0.02ms | 0.0% → <0.1% |  0ms → 16.8µs |   0 → 3 | `processWorkerExit(ThreadPoolExecutor$Worker, boolean)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

| Change |     Delta |      % |          Time |   Parks | Callee                                 | Location                                  |
| -----: | --------: | -----: | ------------: | ------: | -------------------------------------- | ----------------------------------------- |
| -34.8% | -607.36ms | 100.0% | 1.75s → 1.14s | 39 → 35 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |      % |          Time |   Parks | Callee                | Location                   |
| -----: | --------: | -----: | ------------: | ------: | --------------------- | -------------------------- |
| -34.8% | -606.87ms | 100.0% | 1.75s → 1.14s | 26 → 21 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `block()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`)

| Change |     Delta |      % |          Time |   Parks | Callee   | Location                                 |
| -----: | --------: | -----: | ------------: | ------: | -------- | ---------------------------------------- |
| -34.8% | -606.87ms | 100.0% | 1.75s → 1.14s | 26 → 21 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |      % |              Time | Parks | Callee                | Location                   |
| -----: | --------: | -----: | ----------------: | ----: | --------------------- | -------------------------- |
| -45.6% | -415.97ms | 100.0% | 912.6ms → 496.6ms | 4 → 3 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

| Change |     Delta |      % |              Time | Parks | Callee                    | Location                                 |
| -----: | --------: | -----: | ----------------: | ----: | ------------------------- | ---------------------------------------- |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms | 3 → 2 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

| Change |     Delta |      % |              Time | Parks | Callee                  | Location                                                                |
| -----: | --------: | -----: | ----------------: | ----: | ----------------------- | ----------------------------------------------------------------------- |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms | 3 → 2 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

| Change |     Delta |      % |              Time | Parks | Callee        | Location                       |
| -----: | --------: | -----: | ----------------: | ----: | ------------- | ------------------------------ |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms | 3 → 2 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

| Change |     Delta |      % |              Time | Parks | Callee          | Location                       |
| -----: | --------: | -----: | ----------------: | ----: | --------------- | ------------------------------ |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms | 3 → 2 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

| Change |     Delta |      % |              Time | Parks | Callee         | Location                       |
| -----: | --------: | -----: | ----------------: | ----: | -------------- | ------------------------------ |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms | 3 → 2 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

| Change |     Delta |      % |              Time | Parks | Callee  | Location           |
| -----: | --------: | -----: | ----------------: | ----: | ------- | ------------------ |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms | 3 → 2 | `run()` | `java.lang.Thread` |

##### `park(Object)` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |      % |              Time |   Parks | Callee                | Location                   |
| -----: | --------: | -----: | ----------------: | ------: | --------------------- | -------------------------- |
| -41.2% | -213.96ms | 100.0% | 519.7ms → 305.8ms | 15 → 16 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time parked in their leaf frame.

Common call stack: `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`

| Change |   Delta |            % |         Time | Parks | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -----: | ------: | -----------: | -----------: | ----: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +0.12ms | 0.0% → <0.1% |  0ms → 0.1ms | 0 → 2 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park(Object)` (`java.util.concurrent.locks.LockSupport`) ← `acquire(AbstractQueuedSynchronizer$Node, int, boolean, boolean, boolean, long)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer`) ← `acquireInterruptibly(int)` ← `lockInterruptibly()` (`java.util.concurrent.locks.ReentrantLock$Sync`) ← `lockInterruptibly()` (`java.util.concurrent.locks.ReentrantLock`) ← `take()` (`java.util.concurrent.LinkedBlockingQueue`) ← `getTask()` (`java.util.concurrent.ThreadPoolExecutor`) |
|    new | +0.02ms | 0.0% → <0.1% | 0ms → 16.8µs | 0 → 3 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park(Object)` (`java.util.concurrent.locks.LockSupport`) ← `acquire(AbstractQueuedSynchronizer$Node, int, boolean, boolean, boolean, long)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer`) ← `acquire(int)` ← `lock()` (`java.util.concurrent.locks.ReentrantLock$Sync`) ← `lock()` (`java.util.concurrent.locks.ReentrantLock`) ← `processWorkerExit(ThreadPoolExecutor$Worker, boolean)` (`java.util.concurrent.ThreadPoolExecutor`)                                                    |

### Improvements

Call stacks with the largest decrease in time parked in their leaf frame.

| Change |     Delta |             % |              Time |   Parks | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -----: | --------: | ------------: | ----------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -34.8% | -606.87ms | 54.9% → 58.7% |     1.75s → 1.14s | 26 → 21 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `block()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`) ← `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`) ← `managedBlock(ForkJoinPool$ManagedBlocker)` ← `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `take()` (`java.util.concurrent.LinkedBlockingQueue`) ← `getTask()` (`java.util.concurrent.ThreadPoolExecutor`) ← `runWorker(ThreadPoolExecutor$Worker)` ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -45.6% | -415.67ms | 28.7% → 25.6% | 911.9ms → 496.2ms |   3 → 2 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -41.2% | -213.47ms | 16.3% → 15.7% | 518.3ms → 304.8ms |       2 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park(Object)` (`java.util.concurrent.locks.LockSupport`) ← `block()` (`java.util.concurrent.CompletableFuture$Signaller`) ← `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`) ← `managedBlock(ForkJoinPool$ManagedBlocker)` ← `waitingGet(boolean)` (`java.util.concurrent.CompletableFuture`) ← `get()` ← `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`) ← `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700100e000`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
| -43.6% |   -0.63ms |         <0.1% |     1.4ms → 0.8ms |  13 → 9 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park(Object)` (`java.util.concurrent.locks.LockSupport`) ← `acquire(AbstractQueuedSynchronizer$Node, int, boolean, boolean, boolean, long)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer`) ← `reacquire(AbstractQueuedSynchronizer$Node, int)` ← `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `take()` (`java.util.concurrent.LinkedBlockingQueue`) ← `getTask()` (`java.util.concurrent.ThreadPoolExecutor`) ← `runWorker(ThreadPoolExecutor$Worker)` ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -47.9% |   -0.31ms |         <0.1% |     0.6ms → 0.3ms |       1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitNanos(long)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `awaitTermination(long, TimeUnit)` (`java.util.concurrent.ThreadPoolExecutor`) ← `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`) ← `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700100e000`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                        |

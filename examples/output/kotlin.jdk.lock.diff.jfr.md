# Lock contention profile diff

Blocked 5.54s → 3.17s (-2.373s, -42.8%) over 742 → 1,075 contentions (7.5ms → 2.9ms per contention).

| Category         | Change |   Delta |             % |          Time | Contentions |
| ---------------- | -----: | ------: | ------------: | ------------: | ----------: |
| Standard library | -38.9% | -1.236s | 57.4% → 61.3% | 3.18s → 1.94s |     53 → 59 |
| Ours             | -48.1% | -1.138s | 42.6% → 38.7% | 2.36s → 1.23s | 689 → 1,016 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── … 4.11s → 2.37s (74.2% → 74.7%) runWorker(ThreadPoolExecutor$Worker) at java.util.concurrent.ThreadPoolExecutor
│   ├── … 2.36s → 1.22s (42.6% → 38.6%) generateFile(JvmBackendContext, IrFile, List, boolean) at org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory
│   │   ├── 2.25s → 1.16s (40.6% → 36.6%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
│   │   │   ├── 2.20s → 1.14s (39.7% → 36.1%) generateMethod(IrFunction, SourceMapper)
│   │   │   │   ├── 1.99s → 1.08s (36.0% → 34.0%, self 29.9% → 29.3%) generateMethodNode(IrFunction)
│   │   │   │   │   └── … 338.2ms → 148.0ms (6.1% → 4.7%, self 1.3%) doGenerate(ReifiedTypeParametersUsages) at org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen
│   │   │   │   │       ├── … 162.1ms → 62.3ms (2.9% → 2.0%) visitStatementContainer(IrStatementContainer, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
│   │   │   │   │       │   ├── … 134.4ms → 57.3ms (2.4% → 1.8%) visitReturn(IrReturn, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
│   │   │   │   │       │   │   ├── … 67.2ms → 35.7ms (1.2% → 1.1%) visitWhen(IrWhen, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
│   │   │   │   │       │   │   │   └── … 47.5ms → 30.3ms (0.9% → 1.0%) visitCall(IrCall, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
│   │   │   │   │       │   │   │       ├── … 12.4ms → 1.9ms (0.2% → 0.1%) doInline(MethodNode) at org.jetbrains.kotlin.codegen.inline.MethodInliner
│   │   │   │   │       │   │   │       └── 0ms → 8.9ms (0.0% → 0.3%) visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)
│   │   │   │   │       │   │   │           └── 0ms → 8.9ms (0.0% → 0.3%) genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen
│   │   │   │   │       │   │   └── … 36.0ms → 9.0ms (0.6% → 0.3%) inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen
│   │   │   │   │       │   │       └── … 7.3ms → 0.1ms (0.1% → <0.1%) <clinit>() at org.jetbrains.kotlin.codegen.inline.coroutines.CoroutineTransformer
│   │   │   │   │       │   └── … 8.7ms → 0.1ms (0.2% → <0.1%) makeDefinitelyNotNull(UnwrappedType, boolean, boolean) at org.jetbrains.kotlin.types.DefinitelyNotNullType$Companion
│   │   │   │   │       ├── 15.2ms → 9.1ms (0.3%) createFrameMapWithReceivers(IrFunction)
│   │   │   │   │       ├── 17.5ms → 2.0ms (0.3% → 0.1%) generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)
│   │   │   │   │       └── 60.9ms → 30.4ms (1.1% → 1.0%) 12 more callees, led by (0.5% → 0.2%) calculateMethodFlags(IrFunction)
│   │   │   │   ├── … 81.7ms → 18.3ms (1.5% → 0.6%, self 0.6% → 0.2%) makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set) at org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt
│   │   │   │   │   ├── 35.6ms → 7.8ms (0.6% → 0.2%) makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)
│   │   │   │   │   │   └── 10.9ms → 2.4ms (0.2% → 0.1%) createTopLevel$default(FirElementSerializer$Companion, FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean, int, Object) at org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion
│   │   │   │   │   │       └── 10.9ms → 2.4ms (0.2% → 0.1%) createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)
│   │   │   │   │   └── 12.7ms → 2.9ms (0.2% → 0.1%) <init>(FirSession, JvmSerializationBindings, GenerationState, List, AbstractTypeApproximator, Fir2IrComponents, FirElementAwareStringTable) at org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension
│   │   │   │   │       └── 8.7ms → 2.1ms (0.2% → 0.1%) <init>(FirSession, JvmSerializationBindings, List, ScopeSession, JvmSerializationBindings, boolean, String, ClassBuilderMode, boolean, boolean, BinaryVersion, JvmDefaultMode, FirElementAwareStringTable, FirAdditionalMetadataProvider)
│   │   │   │   ├── 37.2ms → 15.1ms (0.7% → 0.5%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.DelegatingClassBuilder
│   │   │   │   │   └── 27.2ms → 11.6ms (0.5% → 0.4%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder
│   │   │   │   │       └── 18.9ms → 10.9ms (0.3%) <init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor
│   │   │   │   ├── … 11.3ms → 1.6ms (0.2% → 0.1%) <init>(SourceMapper, SMAP, SourcePosition) at org.jetbrains.kotlin.codegen.inline.SourceMapCopier
│   │   │   │   └── 72.5ms → 29.6ms (1.3% → 0.9%) 5 more callees, led by (1.3% → 0.8%) accept(MethodVisitor) at org.jetbrains.org.objectweb.asm.tree.MethodNode
│   │   │   └── … 27.5ms → 9.6ms (0.5% → 0.3%) functionProto(FirFunction) at org.jetbrains.kotlin.fir.serialization.FirElementSerializer
│   │   │       └── … 9.1ms → 0.8ms (0.2% → <0.1%) newBuilder() at org.jetbrains.kotlin.metadata.ProtoBuf$Type
│   │   └── … 102.3ms → 55.3ms (1.8% → 1.7%) <init>(IrClass, JvmBackendContext, IrFunction, List) at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
│   │       ├── … 39.3ms → 21.1ms (0.7%, self 0.5% → 0.4%) newClassBuilder(JvmDeclarationOrigin) at org.jetbrains.kotlin.codegen.ClassBuilderFactories$1
│   │       ├── 17.6ms → 6.6ms (0.3% → 0.2%) mapClassSignature(IrTypeMapper, IrClass, Type, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
│   │       │   └── 9.2ms → 2.3ms (0.2% → 0.1%) <init>(BothSignatureWriter$Mode) at org.jetbrains.kotlin.codegen.signature.BothSignatureWriter
│   │       └── 12.0ms → 0ms (0.2% → 0.0%) getDescriptorOrigin(IrDeclaration) at org.jetbrains.kotlin.backend.jvm.extensions.JvmIrDeclarationOriginKt
│   └── … 1.75s → 1.14s (31.5% → 35.9%, self 57.3% → 61.3% globally) park(boolean, long) at jdk.internal.misc.Unsafe
├── … 911.9ms → 496.2ms (16.5% → 15.7%) park(boolean, long) at jdk.internal.misc.Unsafe
└── … 518.3ms → 304.8ms (9.4% → 9.6%) park(boolean, long) at jdk.internal.misc.Unsafe
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|    Change |   Delta |            % |           Time | Contentions | Function                                                                                                          | Location                                                                                           |
| --------: | ------: | -----------: | -------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|       new | +8.06ms |  0.0% → 0.3% |    0ms → 8.1ms |      0 → 17 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)`                              | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                                         |
|       new | +3.98ms |  0.0% → 0.1% |    0ms → 4.0ms |       0 → 2 | `addParameter(ParameterInfo, boolean)`                                                                            | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder`                                            |
|    +84.3% | +3.71ms |  0.1% → 0.3% |  4.4ms → 8.1ms |      2 → 11 | `<init>()`                                                                                                        | `org.jetbrains.kotlin.codegen.FrameMapBase`                                                        |
|   +783.7% | +3.51ms | <0.1% → 0.1% |  0.4ms → 4.0ms |       1 → 5 | `getValue(Object, KProperty)`                                                                                     | `org.jetbrains.kotlin.fir.backend.MappedLazyVar`                                                   |
|   +125.4% | +2.78ms | <0.1% → 0.2% |  2.2ms → 5.0ms |       5 → 6 | `getThrownExceptions(IrFunction)`                                                                                 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                         |
|       new | +2.57ms |  0.0% → 0.1% |    0ms → 2.6ms |       0 → 1 | `<clinit>()`                                                                                                      | `org.jetbrains.kotlin.resolve.calls.checkers.CoroutineCallCheckerKt`                               |
|  +1025.4% | +2.19ms | <0.1% → 0.1% |  0.2ms → 2.4ms |       1 → 7 | `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`                                   |
|   +197.3% | +2.13ms | <0.1% → 0.1% |  1.1ms → 3.2ms |           1 | `<init>()`                                                                                                        | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
| +74370.1% | +1.77ms | <0.1% → 0.1% |  2.4µs → 1.8ms |       1 → 9 | `getUnitValue(ExpressionCodegen)`                                                                                 | `org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt`                                         |
|   +511.4% | +1.74ms | <0.1% → 0.1% |  0.3ms → 2.1ms |      3 → 17 | `unitStats_delegate$lambda$0(PerformanceManager)`                                                                 | `org.jetbrains.kotlin.util.PerformanceManager`                                                     |
|       new | +1.57ms | 0.0% → <0.1% |    0ms → 1.6ms |       0 → 3 | `preprocessSuspendMarkers(MethodNode, boolean, boolean)`                                                          | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`                                         |
|  +7202.0% | +1.54ms |        <0.1% | 21.4µs → 1.6ms |       2 → 9 | `getPlatformEnumValue(TargetPlatform)`                                                                            | `org.jetbrains.kotlin.util.PerformanceManager`                                                     |
|       new | +1.44ms | 0.0% → <0.1% |    0ms → 1.4ms |       0 → 3 | `addNextParameter(Type, boolean, Type)`                                                                           | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder`                                            |
|       new | +1.44ms | 0.0% → <0.1% |    0ms → 1.4ms |      0 → 11 | `<init>(ClassWriter)`                                                                                             | `org.jetbrains.org.objectweb.asm.SymbolTable`                                                      |
|       new | +1.40ms | 0.0% → <0.1% |    0ms → 1.4ms |       0 → 4 | `<init>(int, int, String, MethodVisitor)`                                                                         | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`                         |
|   +443.0% | +1.37ms | <0.1% → 0.1% |  0.3ms → 1.7ms |       2 → 3 | `desiredAssertionStatus()`                                                                                        | `java.lang.Class`                                                                                  |
|       new | +1.32ms | 0.0% → <0.1% |    0ms → 1.3ms |       0 → 3 | `invocationKindProtobufEnum(EventOccurrencesRange)`                                                               | `org.jetbrains.kotlin.fir.serialization.FirContractSerializer$ContractSerializerWorker`            |
|       new | +1.29ms | 0.0% → <0.1% |    0ms → 1.3ms |       0 → 2 | `mapToCallableMethod(IrCall, IrFunction)`                                                                         | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                                   |
|       new | +1.26ms | 0.0% → <0.1% |    0ms → 1.3ms |       0 → 5 | `wrapWithMaxLocalCalc(MethodNode)`                                                                                | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`                                         |
|       new | +1.11ms | 0.0% → <0.1% |    0ms → 1.1ms |       0 → 2 | `prepareNode(MethodNode, int)`                                                                                    | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                                |

##### Standard library

|  Change |   Delta |            % |          Time | Contentions | Function                               | Location                                                  |
| ------: | ------: | -----------: | ------------: | ----------: | -------------------------------------- | --------------------------------------------------------- |
| +443.0% | +1.37ms | <0.1% → 0.1% | 0.3ms → 1.7ms |       2 → 3 | `desiredAssertionStatus()`             | `java.lang.Class`                                         |
|     new | +0.10ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 4 | `poll()`                               | `java.lang.ref.NativeReferenceQueue`                      |
|     new | +0.07ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 3 | `enqueue(Reference)`                   | `java.lang.ref.NativeReferenceQueue`                      |
|     new | +0.03ms | 0.0% → <0.1% |  0ms → 30.4µs |       0 → 2 | `put(Object, Object)`                  | `java.util.Collections$SynchronizedMap`                   |
|     new | +0.01ms | 0.0% → <0.1% |   0ms → 5.4µs |       0 → 1 | `periodicTask()`                       | `jdk.jfr.internal.PlatformRecorder`                       |
|     new | +1.04µs | 0.0% → <0.1% |   0ms → 1.0µs |       0 → 2 | `setCachedLambdaForm(int, LambdaForm)` | `java.lang.invoke.MethodTypeForm`                         |
|     new | +0.63µs | 0.0% → <0.1% |   0ms → 0.6µs |       0 → 1 | `nameToMBeanMap()`                     | `com.sun.management.internal.PlatformMBeanProviderImpl$2` |

##### Ours

|    Change |   Delta |            % |           Time | Contentions | Function                                                                                                          | Location                                                                                           |
| --------: | ------: | -----------: | -------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|       new | +8.06ms |  0.0% → 0.3% |    0ms → 8.1ms |      0 → 17 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)`                              | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                                         |
|       new | +3.98ms |  0.0% → 0.1% |    0ms → 4.0ms |       0 → 2 | `addParameter(ParameterInfo, boolean)`                                                                            | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder`                                            |
|    +84.3% | +3.71ms |  0.1% → 0.3% |  4.4ms → 8.1ms |      2 → 11 | `<init>()`                                                                                                        | `org.jetbrains.kotlin.codegen.FrameMapBase`                                                        |
|   +783.7% | +3.51ms | <0.1% → 0.1% |  0.4ms → 4.0ms |       1 → 5 | `getValue(Object, KProperty)`                                                                                     | `org.jetbrains.kotlin.fir.backend.MappedLazyVar`                                                   |
|   +125.4% | +2.78ms | <0.1% → 0.2% |  2.2ms → 5.0ms |       5 → 6 | `getThrownExceptions(IrFunction)`                                                                                 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                         |
|       new | +2.57ms |  0.0% → 0.1% |    0ms → 2.6ms |       0 → 1 | `<clinit>()`                                                                                                      | `org.jetbrains.kotlin.resolve.calls.checkers.CoroutineCallCheckerKt`                               |
|  +1025.4% | +2.19ms | <0.1% → 0.1% |  0.2ms → 2.4ms |       1 → 7 | `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`                                   |
|   +197.3% | +2.13ms | <0.1% → 0.1% |  1.1ms → 3.2ms |           1 | `<init>()`                                                                                                        | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
| +74370.1% | +1.77ms | <0.1% → 0.1% |  2.4µs → 1.8ms |       1 → 9 | `getUnitValue(ExpressionCodegen)`                                                                                 | `org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt`                                         |
|   +511.4% | +1.74ms | <0.1% → 0.1% |  0.3ms → 2.1ms |      3 → 17 | `unitStats_delegate$lambda$0(PerformanceManager)`                                                                 | `org.jetbrains.kotlin.util.PerformanceManager`                                                     |
|       new | +1.57ms | 0.0% → <0.1% |    0ms → 1.6ms |       0 → 3 | `preprocessSuspendMarkers(MethodNode, boolean, boolean)`                                                          | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`                                         |
|  +7202.0% | +1.54ms |        <0.1% | 21.4µs → 1.6ms |       2 → 9 | `getPlatformEnumValue(TargetPlatform)`                                                                            | `org.jetbrains.kotlin.util.PerformanceManager`                                                     |
|       new | +1.44ms | 0.0% → <0.1% |    0ms → 1.4ms |       0 → 3 | `addNextParameter(Type, boolean, Type)`                                                                           | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder`                                            |
|       new | +1.44ms | 0.0% → <0.1% |    0ms → 1.4ms |      0 → 11 | `<init>(ClassWriter)`                                                                                             | `org.jetbrains.org.objectweb.asm.SymbolTable`                                                      |
|       new | +1.40ms | 0.0% → <0.1% |    0ms → 1.4ms |       0 → 4 | `<init>(int, int, String, MethodVisitor)`                                                                         | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`                         |
|       new | +1.32ms | 0.0% → <0.1% |    0ms → 1.3ms |       0 → 3 | `invocationKindProtobufEnum(EventOccurrencesRange)`                                                               | `org.jetbrains.kotlin.fir.serialization.FirContractSerializer$ContractSerializerWorker`            |
|       new | +1.29ms | 0.0% → <0.1% |    0ms → 1.3ms |       0 → 2 | `mapToCallableMethod(IrCall, IrFunction)`                                                                         | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                                   |
|       new | +1.26ms | 0.0% → <0.1% |    0ms → 1.3ms |       0 → 5 | `wrapWithMaxLocalCalc(MethodNode)`                                                                                | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`                                         |
|       new | +1.11ms | 0.0% → <0.1% |    0ms → 1.1ms |       0 → 2 | `prepareNode(MethodNode, int)`                                                                                    | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                                |
|       new | +0.96ms | 0.0% → <0.1% |    0ms → 1.0ms |       0 → 6 | `newClassBuilder(JvmDeclarationOrigin)`                                                                           | `org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`                              |

#### Improvements

Functions with the largest decrease in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |            Time | Contentions | Function                                                                                                                                                                                                                                    | Location                                                                |
| ------: | --------: | ------------: | --------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
|  -38.9% |   -1.237s | 57.3% → 61.3% |   3.18s → 1.94s |     45 → 40 | `park(boolean, long)`                                                                                                                                                                                                                       | `jdk.internal.misc.Unsafe`                                              |
|  -43.9% | -726.01ms | 29.9% → 29.3% | 1.66s → 929.6ms |     76 → 92 | `generateMethodNode(IrFunction)`                                                                                                                                                                                                            | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                 |
|  -40.5% |  -28.70ms |          1.3% | 70.8ms → 42.2ms |     23 → 52 | `doGenerate(ReifiedTypeParametersUsages)`                                                                                                                                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`              |
|  -77.5% |  -25.78ms |   0.6% → 0.2% |  33.3ms → 7.5ms |     18 → 16 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)`                                                                                          | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`          |
|  -88.6% |  -15.50ms |   0.3% → 0.1% |  17.5ms → 2.0ms |      8 → 11 | `generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)`                                                                                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`              |
|  -77.1% |  -14.67ms |   0.3% → 0.1% |  19.0ms → 4.4ms |           4 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)`                                                                         | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`          |
|  -51.3% |  -14.25ms |   0.5% → 0.4% | 27.8ms → 13.5ms |     10 → 17 | `newClassBuilder(JvmDeclarationOrigin)`                                                                                                                                                                                                     | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`                  |
| removed |  -11.95ms |   0.2% → 0.0% |    12.0ms → 0ms |       8 → 0 | `getDescriptorOrigin(IrDeclaration)`                                                                                                                                                                                                        | `org.jetbrains.kotlin.backend.jvm.extensions.JvmIrDeclarationOriginKt`  |
|  -78.4% |  -11.36ms |   0.3% → 0.1% |  14.5ms → 3.1ms |       8 → 7 | `createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)`                                                                                                              | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion` |
|  -57.5% |  -10.27ms |   0.3% → 0.2% |  17.9ms → 7.6ms |     12 → 10 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])`                                                                                                                                                    | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`   |
|  -67.1% |  -10.06ms |   0.3% → 0.2% |  15.0ms → 4.9ms |     12 → 16 | `doInline(MethodNode)`                                                                                                                                                                                                                      | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                     |
|  -91.1% |   -9.85ms |  0.2% → <0.1% |  10.8ms → 1.0ms |       2 → 8 | `createFrameMapWithReceivers(IrFunction)`                                                                                                                                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`              |
|  -85.8% |   -9.73ms |   0.2% → 0.1% |  11.3ms → 1.6ms |      11 → 3 | `<init>(SourceMapper, SMAP, SourcePosition)`                                                                                                                                                                                                | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier`                   |
|  -91.8% |   -8.77ms |  0.2% → <0.1% |   9.6ms → 0.8ms |       3 → 2 | `newBuilder()`                                                                                                                                                                                                                              | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                           |
|  -99.3% |   -8.61ms |  0.2% → <0.1% |   8.7ms → 0.1ms |           1 | `makeDefinitelyNotNull(UnwrappedType, boolean, boolean)`                                                                                                                                                                                    | `org.jetbrains.kotlin.types.DefinitelyNotNullType$Companion`            |
|  -80.2% |   -7.99ms |   0.2% → 0.1% |  10.0ms → 2.0ms |     12 → 10 | `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)`                                                                                                                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`              |
|  -82.8% |   -7.91ms |   0.2% → 0.1% |   9.6ms → 1.6ms |       3 → 5 | `visitWhen(IrWhen, BlockInfo)`                                                                                                                                                                                                              | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`            |
|  -84.7% |   -7.39ms |  0.2% → <0.1% |   8.7ms → 1.3ms |       1 → 3 | `<init>(FirSession, JvmSerializationBindings, List, ScopeSession, JvmSerializationBindings, boolean, String, ClassBuilderMode, boolean, boolean, BinaryVersion, JvmDefaultMode, FirElementAwareStringTable, FirAdditionalMetadataProvider)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`        |
|  -99.1% |   -7.25ms |  0.1% → <0.1% |   7.3ms → 0.1ms |           1 | `<clinit>()`                                                                                                                                                                                                                                | `org.jetbrains.kotlin.codegen.inline.coroutines.CoroutineTransformer`   |
|  -71.9% |   -7.19ms |   0.2% → 0.1% |  10.0ms → 2.8ms |       4 → 3 | `visitMethod(int, String, String, String, String[])`                                                                                                                                                                                        | `org.jetbrains.org.objectweb.asm.ClassWriter`                           |

##### Standard library

|  Change |   Delta |             % |           Time | Contentions | Function                                    | Location                             |
| ------: | ------: | ------------: | -------------: | ----------: | ------------------------------------------- | ------------------------------------ |
|  -38.9% | -1.237s | 57.3% → 61.3% |  3.18s → 1.94s |     45 → 40 | `park(boolean, long)`                       | `jdk.internal.misc.Unsafe`           |
| removed | -0.16ms |  <0.1% → 0.0% |    0.2ms → 0ms |       1 → 0 | `finishEntry(ClassValue, ClassValue$Entry)` | `java.lang.ClassValue$ClassValueMap` |
|  -95.1% | -0.14ms |         <0.1% |  0.2ms → 7.3µs |           1 | `getId()`                                   | `jdk.jfr.internal.PlatformRecording` |
|  -80.3% | -0.05ms |         <0.1% | 0.1ms → 11.3µs |       1 → 2 | `startEntry(ClassValue)`                    | `java.lang.ClassValue$ClassValueMap` |
| removed | -1.17µs |  <0.1% → 0.0% |    1.2µs → 0ms |       2 → 0 | `getValue()`                                | `kotlin.SynchronizedLazyImpl`        |
| removed | -0.50µs |  <0.1% → 0.0% |    0.5µs → 0ms |       1 → 0 | `initializeMap(Class)`                      | `java.lang.ClassValue`               |

##### Ours

|  Change |     Delta |             % |            Time | Contentions | Function                                                                                                                                                                                                                                    | Location                                                                |
| ------: | --------: | ------------: | --------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
|  -43.9% | -726.01ms | 29.9% → 29.3% | 1.66s → 929.6ms |     76 → 92 | `generateMethodNode(IrFunction)`                                                                                                                                                                                                            | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                 |
|  -40.5% |  -28.70ms |          1.3% | 70.8ms → 42.2ms |     23 → 52 | `doGenerate(ReifiedTypeParametersUsages)`                                                                                                                                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`              |
|  -77.5% |  -25.78ms |   0.6% → 0.2% |  33.3ms → 7.5ms |     18 → 16 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)`                                                                                          | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`          |
|  -88.6% |  -15.50ms |   0.3% → 0.1% |  17.5ms → 2.0ms |      8 → 11 | `generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)`                                                                                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`              |
|  -77.1% |  -14.67ms |   0.3% → 0.1% |  19.0ms → 4.4ms |           4 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)`                                                                         | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`          |
|  -51.3% |  -14.25ms |   0.5% → 0.4% | 27.8ms → 13.5ms |     10 → 17 | `newClassBuilder(JvmDeclarationOrigin)`                                                                                                                                                                                                     | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`                  |
| removed |  -11.95ms |   0.2% → 0.0% |    12.0ms → 0ms |       8 → 0 | `getDescriptorOrigin(IrDeclaration)`                                                                                                                                                                                                        | `org.jetbrains.kotlin.backend.jvm.extensions.JvmIrDeclarationOriginKt`  |
|  -78.4% |  -11.36ms |   0.3% → 0.1% |  14.5ms → 3.1ms |       8 → 7 | `createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)`                                                                                                              | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion` |
|  -57.5% |  -10.27ms |   0.3% → 0.2% |  17.9ms → 7.6ms |     12 → 10 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])`                                                                                                                                                    | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`   |
|  -67.1% |  -10.06ms |   0.3% → 0.2% |  15.0ms → 4.9ms |     12 → 16 | `doInline(MethodNode)`                                                                                                                                                                                                                      | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                     |
|  -91.1% |   -9.85ms |  0.2% → <0.1% |  10.8ms → 1.0ms |       2 → 8 | `createFrameMapWithReceivers(IrFunction)`                                                                                                                                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`              |
|  -85.8% |   -9.73ms |   0.2% → 0.1% |  11.3ms → 1.6ms |      11 → 3 | `<init>(SourceMapper, SMAP, SourcePosition)`                                                                                                                                                                                                | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier`                   |
|  -91.8% |   -8.77ms |  0.2% → <0.1% |   9.6ms → 0.8ms |       3 → 2 | `newBuilder()`                                                                                                                                                                                                                              | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                           |
|  -99.3% |   -8.61ms |  0.2% → <0.1% |   8.7ms → 0.1ms |           1 | `makeDefinitelyNotNull(UnwrappedType, boolean, boolean)`                                                                                                                                                                                    | `org.jetbrains.kotlin.types.DefinitelyNotNullType$Companion`            |
|  -80.2% |   -7.99ms |   0.2% → 0.1% |  10.0ms → 2.0ms |     12 → 10 | `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)`                                                                                                                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`              |
|  -82.8% |   -7.91ms |   0.2% → 0.1% |   9.6ms → 1.6ms |       3 → 5 | `visitWhen(IrWhen, BlockInfo)`                                                                                                                                                                                                              | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`            |
|  -84.7% |   -7.39ms |  0.2% → <0.1% |   8.7ms → 1.3ms |       1 → 3 | `<init>(FirSession, JvmSerializationBindings, List, ScopeSession, JvmSerializationBindings, boolean, String, ClassBuilderMode, boolean, boolean, BinaryVersion, JvmDefaultMode, FirElementAwareStringTable, FirAdditionalMetadataProvider)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`        |
|  -99.1% |   -7.25ms |  0.1% → <0.1% |   7.3ms → 0.1ms |           1 | `<clinit>()`                                                                                                                                                                                                                                | `org.jetbrains.kotlin.codegen.inline.coroutines.CoroutineTransformer`   |
|  -71.9% |   -7.19ms |   0.2% → 0.1% |  10.0ms → 2.8ms |       4 → 3 | `visitMethod(int, String, String, String, String[])`                                                                                                                                                                                        | `org.jetbrains.org.objectweb.asm.ClassWriter`                           |
|  -94.0% |   -7.07ms |  0.1% → <0.1% |   7.5ms → 0.4ms |       4 → 2 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])`                                                                                                                                                                    | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`    |

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

##### `poll()` (`java.lang.ref.NativeReferenceQueue`)

| Change |   Delta |             % |        Time | Contentions | Location                                |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------------------------- |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `java.lang.ref.NativeReferenceQueue:68` |

##### `enqueue(Reference)` (`java.lang.ref.NativeReferenceQueue`)

| Change |   Delta |            % |         Time | Contentions | Location                                |
| -----: | ------: | -----------: | -----------: | ----------: | --------------------------------------- |
|    new | +0.06ms | 0.0% → 85.0% |  0ms → 0.1ms |       0 → 1 | `java.lang.ref.NativeReferenceQueue:59` |
|    new | +0.01ms | 0.0% → 15.0% | 0ms → 11.0µs |       0 → 2 | `java.lang.ref.NativeReferenceQueue:58` |

##### `put(Object, Object)` (`java.util.Collections$SynchronizedMap`)

| Change |   Delta |             % |         Time | Contentions | Location                                     |
| -----: | ------: | ------------: | -----------: | ----------: | -------------------------------------------- |
|    new | +0.03ms | 0.0% → 100.0% | 0ms → 30.4µs |       0 → 2 | `java.util.Collections$SynchronizedMap:2897` |

##### `periodicTask()` (`jdk.jfr.internal.PlatformRecorder`)

| Change |   Delta |             % |        Time | Contentions | Location                                |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 5.4µs |       0 → 1 | `jdk.jfr.internal.PlatformRecorder:526` |

##### `setCachedLambdaForm(int, LambdaForm)` (`java.lang.invoke.MethodTypeForm`)

| Change |   Delta |             % |        Time | Contentions | Location                              |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------- |
|    new | +1.04µs | 0.0% → 100.0% | 0ms → 1.0µs |       0 → 2 | `java.lang.invoke.MethodTypeForm:137` |

##### `nameToMBeanMap()` (`com.sun.management.internal.PlatformMBeanProviderImpl$2`)

| Change |   Delta |             % |        Time | Contentions | Location                                                      |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------- |
|    new | +0.63µs | 0.0% → 100.0% | 0ms → 0.6µs |       0 → 1 | `com.sun.management.internal.PlatformMBeanProviderImpl$2:157` |

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

##### `finishEntry(ClassValue, ClassValue$Entry)` (`java.lang.ClassValue$ClassValueMap`)

|  Change |   Delta |             % |        Time | Contentions | Location                                 |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------------------- |
| removed | -0.16ms | 100.0% → 0.0% | 0.2ms → 0ms |       1 → 0 | `java.lang.ClassValue$ClassValueMap:476` |

##### `getId()` (`jdk.jfr.internal.PlatformRecording`)

| Change |   Delta |      % |          Time | Contentions | Location                                 |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------- |
| -95.1% | -0.14ms | 100.0% | 0.2ms → 7.3µs |           1 | `jdk.jfr.internal.PlatformRecording:433` |

##### `startEntry(ClassValue)` (`java.lang.ClassValue$ClassValueMap`)

| Change |   Delta |      % |           Time | Contentions | Location                                 |
| -----: | ------: | -----: | -------------: | ----------: | ---------------------------------------- |
| -80.3% | -0.05ms | 100.0% | 0.1ms → 11.3µs |       1 → 2 | `java.lang.ClassValue$ClassValueMap:440` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|  Change |   Delta |             % |        Time | Contentions | Location                         |
| ------: | ------: | ------------: | ----------: | ----------: | -------------------------------- |
| removed | -1.17µs | 100.0% → 0.0% | 1.2µs → 0ms |       2 → 0 | `kotlin.SynchronizedLazyImpl:81` |

##### `initializeMap(Class)` (`java.lang.ClassValue`)

|  Change |   Delta |             % |        Time | Contentions | Location                   |
| ------: | ------: | ------------: | ----------: | ----------: | -------------------------- |
| removed | -0.50µs | 100.0% → 0.0% | 0.5µs → 0ms |       1 → 0 | `java.lang.ClassValue:380` |

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

##### `poll()` (`java.lang.ref.NativeReferenceQueue`)

| Change |   Delta |             % |        Time | Contentions | Caller                    | Location                             |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------- | ------------------------------------ |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `removeStaleReferences()` | `jdk.internal.util.ReferencedKeyMap` |

##### `enqueue(Reference)` (`java.lang.ref.NativeReferenceQueue`)

| Change |   Delta |             % |        Time | Contentions | Caller                 | Location                  |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------- | ------------------------- |
|    new | +0.07ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 3 | `enqueueFromPending()` | `java.lang.ref.Reference` |

##### `put(Object, Object)` (`java.util.Collections$SynchronizedMap`)

| Change |   Delta |             % |         Time | Contentions | Caller                                         | Location                                        |
| -----: | ------: | ------------: | -----------: | ----------: | ---------------------------------------------- | ----------------------------------------------- |
|    new | +0.03ms | 0.0% → 100.0% | 0ms → 30.4µs |       0 → 2 | `newVisitor(JvmDeclarationOrigin, Type, List)` | `org.jetbrains.kotlin.codegen.ClassFileFactory` |

##### `periodicTask()` (`jdk.jfr.internal.PlatformRecorder`)

| Change |   Delta |             % |        Time | Contentions | Caller                        | Location                            |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------- | ----------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 5.4µs |       0 → 1 | `lambda$startDiskMonitor$1()` | `jdk.jfr.internal.PlatformRecorder` |

##### `setCachedLambdaForm(int, LambdaForm)` (`java.lang.invoke.MethodTypeForm`)

| Change |   Delta |             % |        Time | Contentions | Caller                                | Location                              |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------- | ------------------------------------- |
|    new | +1.04µs | 0.0% → 100.0% | 0ms → 1.0µs |       0 → 2 | `preparedLambdaForm(MethodType, int)` | `java.lang.invoke.DirectMethodHandle` |

##### `nameToMBeanMap()` (`com.sun.management.internal.PlatformMBeanProviderImpl$2`)

| Change |   Delta |             % |        Time | Contentions | Caller             | Location                                                     |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------ | ------------------------------------------------------------ |
|    new | +0.63µs | 0.0% → 100.0% | 0ms → 0.6µs |       0 → 1 | `getMBeans(Class)` | `sun.management.spi.PlatformMBeanProvider$PlatformComponent` |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`)

| Change |   Delta |             % |        Time | Contentions | Caller                                  | Location                                                              |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------------------------- | --------------------------------------------------------------------- |
|    new | +0.96ms | 0.0% → 100.0% | 0ms → 1.0ms |       0 → 6 | `newClassBuilder(JvmDeclarationOrigin)` | `org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |     Delta |             % |              Time | Contentions | Caller                    | Location                                 |
| -----: | --------: | ------------: | ----------------: | ----------: | ------------------------- | ---------------------------------------- |
| -34.8% | -606.87ms | 54.9% → 58.7% |     1.75s → 1.14s |     26 → 21 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
| -45.6% | -415.97ms | 28.7% → 25.6% | 912.6ms → 496.6ms |       4 → 3 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |
| -41.2% | -213.96ms | 16.4% → 15.7% | 519.7ms → 305.8ms |     15 → 16 | `park(Object)`            | `java.util.concurrent.locks.LockSupport` |

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

##### `finishEntry(ClassValue, ClassValue$Entry)` (`java.lang.ClassValue$ClassValueMap`)

|  Change |   Delta |             % |        Time | Contentions | Caller                  | Location               |
| ------: | ------: | ------------: | ----------: | ----------: | ----------------------- | ---------------------- |
| removed | -0.16ms | 100.0% → 0.0% | 0.2ms → 0ms |       1 → 0 | `getFromHashMap(Class)` | `java.lang.ClassValue` |

##### `getId()` (`jdk.jfr.internal.PlatformRecording`)

| Change |   Delta |      % |          Time | Contentions | Caller    | Location            |
| -----: | ------: | -----: | ------------: | ----------: | --------- | ------------------- |
| -95.1% | -0.14ms | 100.0% | 0.2ms → 7.3µs |           1 | `getId()` | `jdk.jfr.Recording` |

##### `startEntry(ClassValue)` (`java.lang.ClassValue$ClassValueMap`)

| Change |   Delta |      % |           Time | Contentions | Caller                  | Location               |
| -----: | ------: | -----: | -------------: | ----------: | ----------------------- | ---------------------- |
| -80.3% | -0.05ms | 100.0% | 0.1ms → 11.3µs |       1 → 2 | `getFromHashMap(Class)` | `java.lang.ClassValue` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|  Change |   Delta |            % |        Time | Contentions | Caller                          | Location                                                       |
| ------: | ------: | -----------: | ----------: | ----------: | ------------------------------- | -------------------------------------------------------------- |
| removed | -0.58µs | 50.0% → 0.0% | 0.6µs → 0ms |       1 → 0 | `getCLASS_STATIC_INITIALIZER()` | `org.jetbrains.kotlin.backend.jvm.JvmLoweredDeclarationOrigin` |
| removed | -0.58µs | 50.0% → 0.0% | 0.6µs → 0ms |       1 → 0 | `getCONTINUATION_CLASS()`       | `org.jetbrains.kotlin.backend.jvm.JvmLoweredDeclarationOrigin` |

##### `initializeMap(Class)` (`java.lang.ClassValue`)

|  Change |   Delta |             % |        Time | Contentions | Caller          | Location               |
| ------: | ------: | ------------: | ----------: | ----------: | --------------- | ---------------------- |
| removed | -0.50µs | 100.0% → 0.0% | 0.5µs → 0ms |       1 → 0 | `getMap(Class)` | `java.lang.ClassValue` |

##### `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                                   | Location                                              |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------------------ | ----------------------------------------------------- |
| -94.0% | -7.07ms | 100.0% | 7.5ms → 0.4ms |       4 → 2 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.DelegatingClassBuilder` |

### Total time

#### Regressions

Functions with the largest increase in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

|  Change |   Delta |            % |          Time | Contentions | Function                                                                                      | Location                                                |
| ------: | ------: | -----------: | ------------: | ----------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +443.0% | +1.37ms | <0.1% → 0.1% | 0.3ms → 1.7ms |       2 → 3 | `desiredAssertionStatus()`                                                                    | `java.lang.Class`                                       |
|     new | +0.12ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 2 | `acquireInterruptibly(int)`                                                                   | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |
|     new | +0.12ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 2 | `lockInterruptibly()`                                                                         | `java.util.concurrent.locks.ReentrantLock$Sync`         |
|     new | +0.12ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 2 | `lockInterruptibly()`                                                                         | `java.util.concurrent.locks.ReentrantLock`              |
|     new | +0.11ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 1 | `removeIf(Predicate, int, int)`                                                               | `java.util.ArrayList`                                   |
|     new | +0.11ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 1 | `removeIf(Predicate)`                                                                         | `java.util.ArrayList`                                   |
|     new | +0.10ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 4 | `poll()`                                                                                      | `java.lang.ref.NativeReferenceQueue`                    |
|     new | +0.10ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 4 | `removeStaleReferences()`                                                                     | `jdk.internal.util.ReferencedKeyMap`                    |
|     new | +0.10ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 4 | `get(Object)`                                                                                 | `jdk.internal.util.ReferencedKeyMap`                    |
|     new | +0.10ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 4 | `get(Object)`                                                                                 | `jdk.internal.util.ReferencedKeySet`                    |
|     new | +0.10ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 4 | `makeImpl(Class, Class[], boolean)`                                                           | `java.lang.invoke.MethodType`                           |
|     new | +0.10ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 4 | `methodType(Class, Class[], boolean)`                                                         | `java.lang.invoke.MethodType`                           |
|     new | +0.10ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 4 | `changeReturnType(Class)`                                                                     | `java.lang.invoke.MethodType`                           |
|     new | +0.10ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 4 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory`                    |
|     new | +0.10ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 4 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)`                        | `java.lang.invoke.LambdaForm$DMH.0x0000007001220800`    |
|     new | +0.10ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 4 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                      |
|     new | +0.10ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 4 | `invoke(Class, MethodHandle, String, Object, Object, Class)`                                  | `java.lang.invoke.BootstrapMethodInvoker`               |
|     new | +0.10ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 4 | `makeSite(MethodHandle, String, MethodType, Object, Class)`                                   | `java.lang.invoke.CallSite`                             |
|     new | +0.10ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 4 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])`                 | `java.lang.invoke.MethodHandleNatives`                  |
|     new | +0.10ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 4 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`                              | `java.lang.invoke.MethodHandleNatives`                  |

##### Ours

|   Change |    Delta |            % |           Time | Contentions | Function                                                                             | Location                                                                   |
| -------: | -------: | -----------: | -------------: | ----------: | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| +5258.5% | +13.33ms | <0.1% → 0.4% | 0.3ms → 13.6ms |      1 → 23 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                 |
|      new |  +5.43ms |  0.0% → 0.2% |    0ms → 5.4ms |       0 → 5 | `addNextParameter(Type, boolean, Type)`                                              | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder`                    |
|      new |  +5.43ms |  0.0% → 0.2% |    0ms → 5.4ms |       0 → 5 | `addNextParameter$default(ParametersBuilder, Type, boolean, Type, int, Object)`      | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder`                    |
|      new |  +3.98ms |  0.0% → 0.1% |    0ms → 4.0ms |       0 → 2 | `addParameter(ParameterInfo, boolean)`                                               | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder`                    |
|   +84.3% |  +3.71ms |  0.1% → 0.3% |  4.4ms → 8.1ms |      2 → 11 | `<init>()`                                                                           | `org.jetbrains.kotlin.codegen.FrameMapBase`                                |
|   +84.3% |  +3.71ms |  0.1% → 0.3% |  4.4ms → 8.1ms |      2 → 11 | `<init>()`                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap`                      |
|  +783.7% |  +3.51ms | <0.1% → 0.1% |  0.4ms → 4.0ms |       1 → 5 | `getValue(Object, KProperty)`                                                        | `org.jetbrains.kotlin.fir.backend.MappedLazyVar`                           |
|  +889.3% |  +3.28ms | <0.1% → 0.1% |  0.4ms → 3.6ms |      6 → 26 | `unitStats_delegate$lambda$0(PerformanceManager)`                                    | `org.jetbrains.kotlin.util.PerformanceManager`                             |
|  +889.3% |  +3.28ms | <0.1% → 0.1% |  0.4ms → 3.6ms |      6 → 26 | `invoke()`                                                                           | `org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000700114f238`  |
|  +889.3% |  +3.28ms | <0.1% → 0.1% |  0.4ms → 3.6ms |      6 → 26 | `getUnitStats()`                                                                     | `org.jetbrains.kotlin.util.PerformanceManager`                             |
| +1256.1% |  +3.23ms | <0.1% → 0.1% |  0.3ms → 3.5ms |       1 → 6 | `mapToCallableMethod(IrCall, IrFunction)`                                            | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`           |
|      new |  +3.01ms |  0.0% → 0.1% |    0ms → 3.0ms |       0 → 3 | `trackFakeOverrideMethod(IrFunction)`                                                | `org.jetbrains.kotlin.backend.jvm.codegen.JvmMethodSignatureClashDetector` |
|  +644.3% |  +2.88ms | <0.1% → 0.1% |  0.4ms → 3.3ms |       1 → 4 | `getOverriddenSymbols()`                                                             | `org.jetbrains.kotlin.fir.lazy.Fir2IrLazySimpleFunction`                   |
|  +125.4% |  +2.78ms | <0.1% → 0.2% |  2.2ms → 5.0ms |       5 → 6 | `getThrownExceptions(IrFunction)`                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                 |
|      new |  +2.66ms |  0.0% → 0.1% |    0ms → 2.7ms |       0 → 9 | `wrapWithMaxLocalCalc(MethodNode)`                                                   | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`                 |
|      new |  +2.57ms |  0.0% → 0.1% |    0ms → 2.6ms |       0 → 1 | `<clinit>()`                                                                         | `org.jetbrains.kotlin.resolve.calls.checkers.CoroutineCallCheckerKt`       |
|      new |  +2.37ms |  0.0% → 0.1% |    0ms → 2.4ms |       0 → 5 | `preprocessSuspendMarkers(MethodNode, boolean, boolean)`                             | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`                 |
|      new |  +2.36ms |  0.0% → 0.1% |    0ms → 2.4ms |       0 → 3 | `allOverridden$default(IrOverridableDeclaration, boolean, int, Object)`              | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                   |
|      new |  +2.31ms |  0.0% → 0.1% |    0ms → 2.3ms |       0 → 2 | `forceFoxedReturnTypeOnOverride(IrFunction)`                                         | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`           |
|      new |  +2.31ms |  0.0% → 0.1% |    0ms → 2.3ms |       0 → 2 | `forceBoxedReturnType(IrFunction)`                                                   | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`           |

#### Improvements

Functions with the largest decrease in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |             % |              Time | Contentions | Function                                                                                                          | Location                                                                          |
| -----: | --------: | ------------: | ----------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| -43.0% |   -2.159s | 90.6% → 90.4% |     5.02s → 2.86s | 738 → 1,064 | `runWith(Object, Runnable)`                                                                                       | `java.lang.Thread`                                                                |
| -43.0% |   -2.159s | 90.6% → 90.4% |     5.02s → 2.86s | 738 → 1,064 | `run()`                                                                                                           | `java.lang.Thread`                                                                |
| -42.4% |   -1.744s | 74.2% → 74.7% |     4.11s → 2.37s | 735 → 1,061 | `runWorker(ThreadPoolExecutor$Worker)`                                                                            | `java.util.concurrent.ThreadPoolExecutor`                                         |
| -42.4% |   -1.744s | 74.2% → 74.7% |     4.11s → 2.37s | 735 → 1,061 | `run()`                                                                                                           | `java.util.concurrent.ThreadPoolExecutor$Worker`                                  |
| -38.9% |   -1.237s | 57.3% → 61.3% |     3.18s → 1.94s |     45 → 40 | `park(boolean, long)`                                                                                             | `jdk.internal.misc.Unsafe`                                                        |
| -48.2% |   -1.140s | 42.6% → 38.6% |     2.36s → 1.22s |   690 → 999 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| -48.1% |   -1.136s | 42.7% → 38.7% |     2.36s → 1.23s | 696 → 1,026 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| -48.1% |   -1.136s | 42.7% → 38.7% |     2.36s → 1.23s | 696 → 1,026 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8` |
| -48.1% |   -1.136s | 42.7% → 38.7% |     2.36s → 1.23s | 696 → 1,026 | `run()`                                                                                                           | `java.util.concurrent.CompletableFuture$AsyncRun`                                 |
| -48.5% |   -1.091s | 40.6% → 36.6% |     2.25s → 1.16s |   508 → 758 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -48.1% |   -1.060s | 39.7% → 36.1% |     2.20s → 1.14s |   479 → 691 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -46.0% | -916.22ms | 36.0% → 34.0% |     1.99s → 1.08s |   319 → 529 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -36.2% | -820.34ms | 40.9% → 45.6% |     2.26s → 1.44s |     28 → 23 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)`                                                                     | `java.util.concurrent.ForkJoinPool`                                               |
| -36.2% | -820.34ms | 40.9% → 45.6% |     2.26s → 1.44s |     28 → 23 | `managedBlock(ForkJoinPool$ManagedBlocker)`                                                                       | `java.util.concurrent.ForkJoinPool`                                               |
| -34.8% | -607.50ms | 31.5% → 36.0% |     1.75s → 1.14s |     39 → 30 | `await()`                                                                                                         | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`           |
| -34.8% | -607.38ms | 31.5% → 36.0% |     1.75s → 1.14s |     39 → 32 | `take()`                                                                                                          | `java.util.concurrent.LinkedBlockingQueue`                                        |
| -34.8% | -607.38ms | 31.5% → 36.0% |     1.75s → 1.14s |     39 → 32 | `getTask()`                                                                                                       | `java.util.concurrent.ThreadPoolExecutor`                                         |
| -34.8% | -606.87ms | 31.5% → 35.9% |     1.75s → 1.14s |     26 → 21 | `park()`                                                                                                          | `java.util.concurrent.locks.LockSupport`                                          |
| -34.8% | -606.87ms | 31.5% → 35.9% |     1.75s → 1.14s |     26 → 21 | `block()`                                                                                                         | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`             |
| -45.6% | -415.97ms | 16.5% → 15.7% | 912.6ms → 496.6ms |       4 → 3 | `parkNanos(Object, long)`                                                                                         | `java.util.concurrent.locks.LockSupport`                                          |

##### Standard library

| Change |     Delta |             % |              Time | Contentions | Function                                      | Location                                                                |
| -----: | --------: | ------------: | ----------------: | ----------: | --------------------------------------------- | ----------------------------------------------------------------------- |
| -43.0% |   -2.159s | 90.6% → 90.4% |     5.02s → 2.86s | 738 → 1,064 | `runWith(Object, Runnable)`                   | `java.lang.Thread`                                                      |
| -43.0% |   -2.159s | 90.6% → 90.4% |     5.02s → 2.86s | 738 → 1,064 | `run()`                                       | `java.lang.Thread`                                                      |
| -42.4% |   -1.744s | 74.2% → 74.7% |     4.11s → 2.37s | 735 → 1,061 | `runWorker(ThreadPoolExecutor$Worker)`        | `java.util.concurrent.ThreadPoolExecutor`                               |
| -42.4% |   -1.744s | 74.2% → 74.7% |     4.11s → 2.37s | 735 → 1,061 | `run()`                                       | `java.util.concurrent.ThreadPoolExecutor$Worker`                        |
| -38.9% |   -1.237s | 57.3% → 61.3% |     3.18s → 1.94s |     45 → 40 | `park(boolean, long)`                         | `jdk.internal.misc.Unsafe`                                              |
| -48.1% |   -1.136s | 42.7% → 38.7% |     2.36s → 1.23s | 696 → 1,026 | `run()`                                       | `java.util.concurrent.CompletableFuture$AsyncRun`                       |
| -36.2% | -820.34ms | 40.9% → 45.6% |     2.26s → 1.44s |     28 → 23 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool`                                     |
| -36.2% | -820.34ms | 40.9% → 45.6% |     2.26s → 1.44s |     28 → 23 | `managedBlock(ForkJoinPool$ManagedBlocker)`   | `java.util.concurrent.ForkJoinPool`                                     |
| -34.8% | -607.50ms | 31.5% → 36.0% |     1.75s → 1.14s |     39 → 30 | `await()`                                     | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| -34.8% | -607.38ms | 31.5% → 36.0% |     1.75s → 1.14s |     39 → 32 | `take()`                                      | `java.util.concurrent.LinkedBlockingQueue`                              |
| -34.8% | -607.38ms | 31.5% → 36.0% |     1.75s → 1.14s |     39 → 32 | `getTask()`                                   | `java.util.concurrent.ThreadPoolExecutor`                               |
| -34.8% | -606.87ms | 31.5% → 35.9% |     1.75s → 1.14s |     26 → 21 | `park()`                                      | `java.util.concurrent.locks.LockSupport`                                |
| -34.8% | -606.87ms | 31.5% → 35.9% |     1.75s → 1.14s |     26 → 21 | `block()`                                     | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`   |
| -45.6% | -415.97ms | 16.5% → 15.7% | 912.6ms → 496.6ms |       4 → 3 | `parkNanos(Object, long)`                     | `java.util.concurrent.locks.LockSupport`                                |
| -45.6% | -415.67ms | 16.5% → 15.7% | 911.9ms → 496.2ms |       3 → 2 | `await(long, TimeUnit)`                       | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| -45.6% | -415.67ms | 16.5% → 15.7% | 911.9ms → 496.2ms |       3 → 2 | `await(long)`                                 | `java.lang.ref.ReferenceQueue`                                          |
| -45.6% | -415.67ms | 16.5% → 15.7% | 911.9ms → 496.2ms |       3 → 2 | `remove0(long)`                               | `java.lang.ref.ReferenceQueue`                                          |
| -45.6% | -415.67ms | 16.5% → 15.7% | 911.9ms → 496.2ms |       3 → 2 | `remove(long)`                                | `java.lang.ref.ReferenceQueue`                                          |
| -45.6% | -415.67ms | 16.5% → 15.7% | 911.9ms → 496.2ms |       3 → 2 | `run()`                                       | `jdk.internal.ref.CleanerImpl`                                          |
| -45.6% | -415.67ms | 16.5% → 15.7% | 911.9ms → 496.2ms |       3 → 2 | `run()`                                       | `jdk.internal.misc.InnocuousThread`                                     |

##### Ours

| Change |     Delta |             % |              Time | Contentions | Function                                                                                                                                                                    | Location                                                                          |
| -----: | --------: | ------------: | ----------------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| -48.2% |   -1.140s | 42.6% → 38.6% |     2.36s → 1.22s |   690 → 999 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| -48.1% |   -1.136s | 42.7% → 38.7% |     2.36s → 1.23s | 696 → 1,026 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)`                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| -48.1% |   -1.136s | 42.7% → 38.7% |     2.36s → 1.23s | 696 → 1,026 | `run()`                                                                                                                                                                     | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8` |
| -48.5% |   -1.091s | 40.6% → 36.6% |     2.25s → 1.16s |   508 → 758 | `generate()`                                                                                                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -48.1% |   -1.060s | 39.7% → 36.1% |     2.20s → 1.14s |   479 → 691 | `generateMethod(IrFunction, SourceMapper)`                                                                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -46.0% | -916.22ms | 36.0% → 34.0% |     1.99s → 1.08s |   319 → 529 | `generateMethodNode(IrFunction)`                                                                                                                                            | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -62.8% | -325.39ms |   9.3% → 6.1% | 518.1ms → 192.8ms |   244 → 439 | `doGenerate(ReifiedTypeParametersUsages)`                                                                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| -62.8% | -325.39ms |   9.3% → 6.1% | 518.1ms → 192.8ms |   244 → 439 | `generate(ReifiedTypeParametersUsages)`                                                                                                                                     | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| -62.8% | -325.39ms |   9.3% → 6.1% | 518.1ms → 192.8ms |   244 → 439 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                                                                               | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| -69.1% | -244.52ms |   6.4% → 3.4% | 353.7ms → 109.2ms |   137 → 229 | `generate()`                                                                                                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -68.7% | -235.05ms |   6.2% → 3.4% | 342.0ms → 107.0ms |   120 → 202 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -68.7% | -235.05ms |   6.2% → 3.4% | 342.0ms → 107.0ms |   120 → 202 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -68.7% | -235.05ms |   6.2% → 3.4% | 342.0ms → 107.0ms |   120 → 202 | `visitBlockBody(IrBlockBody, Object)`                                                                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -68.7% | -235.05ms |   6.2% → 3.4% | 342.0ms → 107.0ms |   120 → 202 | `accept(IrVisitor, Object)`                                                                                                                                                 | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                 |
| -68.6% | -225.33ms |   5.9% → 3.3% | 328.3ms → 103.0ms |   115 → 185 | `visitReturn(IrReturn, BlockInfo)`                                                                                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -68.6% | -225.33ms |   5.9% → 3.3% | 328.3ms → 103.0ms |   115 → 185 | `visitReturn(IrReturn, Object)`                                                                                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -68.6% | -225.33ms |   5.9% → 3.3% | 328.3ms → 103.0ms |   115 → 185 | `accept(IrVisitor, Object)`                                                                                                                                                 | `org.jetbrains.kotlin.ir.expressions.IrReturn`                                    |
| -41.2% | -213.78ms |   9.4% → 9.6% | 518.9ms → 305.2ms |           3 | `invokeCodegen(JvmIrCodegenFactory$CodegenInput)`                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| -41.2% | -213.78ms |   9.4% → 9.6% | 518.9ms → 305.2ms |           3 | `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`               |
| -41.2% | -213.78ms |   9.4% → 9.6% | 518.9ms → 305.2ms |           3 | `executePhase(JvmFir2IrPipelineArtifact)`                                                                                                                                   | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`                   |

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

##### `desiredAssertionStatus()` (`java.lang.Class`)

|   Change |   Delta |             % |          Time | Contentions | Caller       | Location                                                          |
| -------: | ------: | ------------: | ------------: | ----------: | ------------ | ----------------------------------------------------------------- |
| +1605.4% | +1.18ms | 23.7% → 74.5% | 0.1ms → 1.3ms |           1 | `<clinit>()` | `org.jetbrains.kotlin.codegen.inline.RemapVisitor`                |
|   +77.7% | +0.18ms | 76.3% → 25.0% | 0.2ms → 0.4ms |           1 | `<clinit>()` | `org.jetbrains.kotlin.codegen.inline.InternalFinallyBlockInliner` |
|      new | +0.01ms |   0.0% → 0.5% |   0ms → 8.5µs |       0 → 1 | `<clinit>()` | `org.jetbrains.kotlin.types.TypeUtils`                            |

##### `acquireInterruptibly(int)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer`)

| Change |   Delta |             % |        Time | Contentions | Caller                | Location                                        |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------- | ----------------------------------------------- |
|    new | +0.12ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 2 | `lockInterruptibly()` | `java.util.concurrent.locks.ReentrantLock$Sync` |

##### `lockInterruptibly()` (`java.util.concurrent.locks.ReentrantLock$Sync`)

| Change |   Delta |             % |        Time | Contentions | Caller                | Location                                   |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------- | ------------------------------------------ |
|    new | +0.12ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 2 | `lockInterruptibly()` | `java.util.concurrent.locks.ReentrantLock` |

##### `lockInterruptibly()` (`java.util.concurrent.locks.ReentrantLock`)

| Change |   Delta |             % |        Time | Contentions | Caller   | Location                                   |
| -----: | ------: | ------------: | ----------: | ----------: | -------- | ------------------------------------------ |
|    new | +0.12ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 2 | `take()` | `java.util.concurrent.LinkedBlockingQueue` |

##### `removeIf(Predicate, int, int)` (`java.util.ArrayList`)

| Change |   Delta |             % |        Time | Contentions | Caller                | Location              |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------- | --------------------- |
|    new | +0.11ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 1 | `removeIf(Predicate)` | `java.util.ArrayList` |

##### `removeIf(Predicate)` (`java.util.ArrayList`)

| Change |   Delta |             % |        Time | Contentions | Caller                                                        | Location                                            |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------- | --------------------------------------------------- |
|    new | +0.11ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 1 | `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `poll()` (`java.lang.ref.NativeReferenceQueue`)

| Change |   Delta |             % |        Time | Contentions | Caller                    | Location                             |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------- | ------------------------------------ |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `removeStaleReferences()` | `jdk.internal.util.ReferencedKeyMap` |

##### `removeStaleReferences()` (`jdk.internal.util.ReferencedKeyMap`)

| Change |   Delta |             % |        Time | Contentions | Caller        | Location                             |
| -----: | ------: | ------------: | ----------: | ----------: | ------------- | ------------------------------------ |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `get(Object)` | `jdk.internal.util.ReferencedKeyMap` |

##### `get(Object)` (`jdk.internal.util.ReferencedKeyMap`)

| Change |   Delta |             % |        Time | Contentions | Caller        | Location                             |
| -----: | ------: | ------------: | ----------: | ----------: | ------------- | ------------------------------------ |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `get(Object)` | `jdk.internal.util.ReferencedKeySet` |

##### `get(Object)` (`jdk.internal.util.ReferencedKeySet`)

| Change |   Delta |             % |        Time | Contentions | Caller                              | Location                      |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------------- | ----------------------------- |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `makeImpl(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change |   Delta |             % |        Time | Contentions | Caller                                | Location                      |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------- | ----------------------------- |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `methodType(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |

##### `methodType(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change |   Delta |             % |        Time | Contentions | Caller                    | Location                      |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------- | ----------------------------- |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `changeReturnType(Class)` | `java.lang.invoke.MethodType` |

##### `changeReturnType(Class)` (`java.lang.invoke.MethodType`)

| Change |   Delta |            % |        Time | Contentions | Caller                                                                                                                   | Location                                       |
| -----: | ------: | -----------: | ----------: | ----------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
|    new | +0.10ms | 0.0% → 98.8% | 0ms → 0.1ms |       0 → 3 | `makeAllocator(MemberName)`                                                                                              | `java.lang.invoke.DirectMethodHandle`          |
|    new | +1.17µs |  0.0% → 1.2% | 0ms → 1.2µs |       0 → 1 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

| Change |   Delta |             % |        Time | Contentions | Caller                                                                 | Location                                             |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001220800` |

##### `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001220800`)

| Change |   Delta |             % |        Time | Contentions | Caller                                                                           | Location                           |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------------------------------------------------------------------- | ---------------------------------- |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |   Delta |             % |        Time | Contentions | Caller                                                       | Location                                  |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------ | ----------------------------------------- |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `invoke(Class, MethodHandle, String, Object, Object, Class)` | `java.lang.invoke.BootstrapMethodInvoker` |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

| Change |   Delta |             % |        Time | Contentions | Caller                                                      | Location                    |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------------------- | --------------------------- |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |

##### `makeSite(MethodHandle, String, MethodType, Object, Class)` (`java.lang.invoke.CallSite`)

| Change |   Delta |             % |        Time | Contentions | Caller                                                                        | Location                               |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------------------------------------- | -------------------------------------- |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

| Change |   Delta |             % |        Time | Contentions | Caller                                                           | Location                               |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------------- | -------------------------------------- |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

| Change |   Delta |             % |        Time | Contentions | Caller                                                                              | Location                                                |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------- |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `createKotlinScopeProviderForSourceSession(FirModuleData, LanguageVersionSettings)` | `org.jetbrains.kotlin.fir.session.FirJvmSessionFactory` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |   Delta |      % |          Time | Contentions | Caller  | Location           |
| -----: | ------: | -----: | ------------: | ----------: | ------- | ------------------ |
| -43.0% | -2.159s | 100.0% | 5.02s → 2.86s | 738 → 1,064 | `run()` | `java.lang.Thread` |

##### `run()` (`java.lang.Thread`)

| Change |     Delta |             % |              Time | Contentions | Caller  | Location                            |
| -----: | --------: | ------------: | ----------------: | ----------: | ------- | ----------------------------------- |
| -45.6% | -415.67ms | 18.2% → 17.3% | 911.9ms → 496.2ms |       3 → 2 | `run()` | `jdk.internal.misc.InnocuousThread` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

| Change |   Delta |      % |          Time | Contentions | Caller  | Location                                         |
| -----: | ------: | -----: | ------------: | ----------: | ------- | ------------------------------------------------ |
| -42.4% | -1.744s | 100.0% | 4.11s → 2.37s | 735 → 1,061 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

| Change |   Delta |      % |          Time | Contentions | Caller                      | Location           |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------- | ------------------ |
| -42.4% | -1.744s | 100.0% | 4.11s → 2.37s | 735 → 1,061 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |     Delta |             % |              Time | Contentions | Caller                    | Location                                 |
| -----: | --------: | ------------: | ----------------: | ----------: | ------------------------- | ---------------------------------------- |
| -34.8% | -606.87ms | 54.9% → 58.7% |     1.75s → 1.14s |     26 → 21 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
| -45.6% | -415.97ms | 28.7% → 25.6% | 912.6ms → 496.6ms |       4 → 3 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |
| -41.2% | -213.96ms | 16.4% → 15.7% | 519.7ms → 305.8ms |     15 → 16 | `park(Object)`            | `java.util.concurrent.locks.LockSupport` |

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

##### `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |      % |          Time | Contentions | Caller                                      | Location                            |
| -----: | --------: | -----: | ------------: | ----------: | ------------------------------------------- | ----------------------------------- |
| -36.2% | -820.34ms | 100.0% | 2.26s → 1.44s |     28 → 23 | `managedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool` |

##### `managedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |             % |              Time | Contentions | Caller                | Location                                                                |
| -----: | --------: | ------------: | ----------------: | ----------: | --------------------- | ----------------------------------------------------------------------- |
| -34.8% | -606.87ms | 77.1% → 78.9% |     1.75s → 1.14s |     26 → 21 | `await()`             | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| -41.2% | -213.47ms | 22.9% → 21.1% | 518.3ms → 304.8ms |           2 | `waitingGet(boolean)` | `java.util.concurrent.CompletableFuture`                                |

##### `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

| Change |     Delta |      % |          Time | Contentions | Caller   | Location                                   |
| -----: | --------: | -----: | ------------: | ----------: | -------- | ------------------------------------------ |
| -34.8% | -607.50ms | 100.0% | 1.75s → 1.14s |     39 → 30 | `take()` | `java.util.concurrent.LinkedBlockingQueue` |

##### `take()` (`java.util.concurrent.LinkedBlockingQueue`)

| Change |     Delta |      % |          Time | Contentions | Caller      | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | ----------- | ----------------------------------------- |
| -34.8% | -607.38ms | 100.0% | 1.75s → 1.14s |     39 → 32 | `getTask()` | `java.util.concurrent.ThreadPoolExecutor` |

##### `getTask()` (`java.util.concurrent.ThreadPoolExecutor`)

| Change |     Delta |      % |          Time | Contentions | Caller                                 | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | -------------------------------------- | ----------------------------------------- |
| -34.8% | -607.38ms | 100.0% | 1.75s → 1.14s |     39 → 32 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |      % |          Time | Contentions | Caller    | Location                                                              |
| -----: | --------: | -----: | ------------: | ----------: | --------- | --------------------------------------------------------------------- |
| -34.8% | -606.87ms | 100.0% | 1.75s → 1.14s |     26 → 21 | `block()` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode` |

##### `block()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`)

| Change |     Delta |      % |          Time | Contentions | Caller                                        | Location                            |
| -----: | --------: | -----: | ------------: | ----------: | --------------------------------------------- | ----------------------------------- |
| -34.8% | -606.87ms | 100.0% | 1.75s → 1.14s |     26 → 21 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |     % |              Time | Contentions | Caller                  | Location                                                                |
| -----: | --------: | ----: | ----------------: | ----------: | ----------------------- | ----------------------------------------------------------------------- |
| -45.6% | -415.67ms | 99.9% | 911.9ms → 496.2ms |       3 → 2 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| -47.9% |   -0.31ms |  0.1% |     0.6ms → 0.3ms |           1 | `awaitNanos(long)`      | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

| Change |     Delta |      % |              Time | Contentions | Caller        | Location                       |
| -----: | --------: | -----: | ----------------: | ----------: | ------------- | ------------------------------ |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms |       3 → 2 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

| Change |     Delta |      % |              Time | Contentions | Caller          | Location                       |
| -----: | --------: | -----: | ----------------: | ----------: | --------------- | ------------------------------ |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms |       3 → 2 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

| Change |     Delta |      % |              Time | Contentions | Caller         | Location                       |
| -----: | --------: | -----: | ----------------: | ----------: | -------------- | ------------------------------ |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms |       3 → 2 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

| Change |     Delta |      % |              Time | Contentions | Caller  | Location                       |
| -----: | --------: | -----: | ----------------: | ----------: | ------- | ------------------------------ |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms |       3 → 2 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

| Change |     Delta |      % |              Time | Contentions | Caller                      | Location           |
| -----: | --------: | -----: | ----------------: | ----------: | --------------------------- | ------------------ |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms |       3 → 2 | `runWith(Object, Runnable)` | `java.lang.Thread` |

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

##### `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |     Delta |      % |              Time | Contentions | Caller                                                                                                                                                                      | Location                                                            |
| -----: | --------: | -----: | ----------------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| -41.2% | -213.78ms | 100.0% | 518.9ms → 305.2ms |           3 | `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler` |

##### `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`)

| Change |     Delta |      % |              Time | Contentions | Caller                                    | Location                                                        |
| -----: | --------: | -----: | ----------------: | ----------: | ----------------------------------------- | --------------------------------------------------------------- |
| -41.2% | -213.78ms | 100.0% | 518.9ms → 305.2ms |           3 | `executePhase(JvmFir2IrPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |

##### `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

| Change |     Delta |      % |              Time | Contentions | Caller                           | Location                                                        |
| -----: | --------: | -----: | ----------------: | ----------: | -------------------------------- | --------------------------------------------------------------- |
| -41.2% | -213.78ms | 100.0% | 518.9ms → 305.2ms |           3 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |

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

##### `acquireInterruptibly(int)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer`)

| Change |   Delta |             % |        Time | Contentions | Callee                                                                           | Location                                                |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
|    new | +0.12ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 2 | `acquire(AbstractQueuedSynchronizer$Node, int, boolean, boolean, boolean, long)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |

##### `lockInterruptibly()` (`java.util.concurrent.locks.ReentrantLock$Sync`)

| Change |   Delta |             % |        Time | Contentions | Callee                      | Location                                                |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------------- | ------------------------------------------------------- |
|    new | +0.12ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 2 | `acquireInterruptibly(int)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |

##### `lockInterruptibly()` (`java.util.concurrent.locks.ReentrantLock`)

| Change |   Delta |             % |        Time | Contentions | Callee                | Location                                        |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------- | ----------------------------------------------- |
|    new | +0.12ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 2 | `lockInterruptibly()` | `java.util.concurrent.locks.ReentrantLock$Sync` |

##### `removeIf(Predicate, int, int)` (`java.util.ArrayList`)

| Change |   Delta |             % |        Time | Contentions | Callee         | Location                                                                       |
| -----: | ------: | ------------: | ----------: | ----------: | -------------- | ------------------------------------------------------------------------------ |
|    new | +0.11ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 1 | `test(Object)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner$$Lambda.0x00000070019022f0` |

##### `removeIf(Predicate)` (`java.util.ArrayList`)

| Change |   Delta |             % |        Time | Contentions | Callee                          | Location              |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------- | --------------------- |
|    new | +0.11ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 1 | `removeIf(Predicate, int, int)` | `java.util.ArrayList` |

##### `removeStaleReferences()` (`jdk.internal.util.ReferencedKeyMap`)

| Change |   Delta |             % |        Time | Contentions | Callee   | Location                             |
| -----: | ------: | ------------: | ----------: | ----------: | -------- | ------------------------------------ |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `poll()` | `java.lang.ref.NativeReferenceQueue` |

##### `get(Object)` (`jdk.internal.util.ReferencedKeyMap`)

| Change |   Delta |             % |        Time | Contentions | Callee                    | Location                             |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------- | ------------------------------------ |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `removeStaleReferences()` | `jdk.internal.util.ReferencedKeyMap` |

##### `get(Object)` (`jdk.internal.util.ReferencedKeySet`)

| Change |   Delta |             % |        Time | Contentions | Callee        | Location                             |
| -----: | ------: | ------------: | ----------: | ----------: | ------------- | ------------------------------------ |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `get(Object)` | `jdk.internal.util.ReferencedKeyMap` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change |   Delta |             % |        Time | Contentions | Callee        | Location                             |
| -----: | ------: | ------------: | ----------: | ----------: | ------------- | ------------------------------------ |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `get(Object)` | `jdk.internal.util.ReferencedKeySet` |

##### `methodType(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change |   Delta |             % |        Time | Contentions | Callee                              | Location                      |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------------- | ----------------------------- |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `makeImpl(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |

##### `changeReturnType(Class)` (`java.lang.invoke.MethodType`)

| Change |   Delta |             % |        Time | Contentions | Callee                                | Location                      |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------- | ----------------------------- |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `methodType(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

| Change |   Delta |            % |        Time | Contentions | Callee                                                                                                                   | Location                                       |
| -----: | ------: | -----------: | ----------: | ----------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
|    new | +0.10ms | 0.0% → 98.8% | 0ms → 0.1ms |       0 → 3 | `buildCallSite()`                                                                                                        | `java.lang.invoke.InnerClassLambdaMetafactory` |
|    new | +1.17µs |  0.0% → 1.2% | 0ms → 1.2µs |       0 → 1 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001220800`)

| Change |   Delta |             % |        Time | Contentions | Callee                                                                                        | Location                             |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------------------------------------------------------------------------------- | ------------------------------------ |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory` |

##### `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |   Delta |             % |        Time | Contentions | Callee                                                                 | Location                                             |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007001220800` |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

| Change |   Delta |             % |        Time | Contentions | Callee                                                                           | Location                           |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------------------------------------------------------------------- | ---------------------------------- |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `makeSite(MethodHandle, String, MethodType, Object, Class)` (`java.lang.invoke.CallSite`)

| Change |   Delta |             % |        Time | Contentions | Callee                                                       | Location                                  |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------ | ----------------------------------------- |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `invoke(Class, MethodHandle, String, Object, Object, Class)` | `java.lang.invoke.BootstrapMethodInvoker` |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

| Change |   Delta |             % |        Time | Contentions | Callee                                                      | Location                    |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------------------- | --------------------------- |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |

##### `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

| Change |   Delta |             % |        Time | Contentions | Callee                                                                        | Location                               |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------------------------------------- | -------------------------------------- |
|    new | +0.10ms | 0.0% → 100.0% | 0ms → 0.1ms |       0 → 4 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |     Delta |             % |              Time | Contentions | Callee  | Location                                                       |
| -----: | --------: | ------------: | ----------------: | ----------: | ------- | -------------------------------------------------------------- |
| -42.4% |   -1.744s | 81.8% → 82.7% |     4.11s → 2.37s | 735 → 1,061 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker`               |
| -45.6% | -415.67ms | 18.2% → 17.3% | 911.9ms → 496.2ms |       3 → 2 | `run()` | `jdk.internal.ref.CleanerImpl`                                 |
|    new |   +0.01ms |  0.0% → <0.1% |       0ms → 5.4µs |       0 → 1 | `run()` | `jdk.jfr.internal.PlatformRecorder$$Lambda.0x0000007001042ce0` |

##### `run()` (`java.lang.Thread`)

| Change |   Delta |      % |          Time | Contentions | Callee                      | Location           |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------- | ------------------ |
| -43.0% | -2.159s | 100.0% | 5.02s → 2.86s | 738 → 1,064 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

| Change |     Delta |             % |          Time | Contentions | Callee                                                  | Location                                          |
| -----: | --------: | ------------: | ------------: | ----------: | ------------------------------------------------------- | ------------------------------------------------- |
| -48.1% |   -1.136s | 57.5% → 51.8% | 2.36s → 1.23s | 696 → 1,026 | `run()`                                                 | `java.util.concurrent.CompletableFuture$AsyncRun` |
| -34.8% | -607.38ms | 42.5% → 48.2% | 1.75s → 1.14s |     39 → 32 | `getTask()`                                             | `java.util.concurrent.ThreadPoolExecutor`         |
|    new |   +0.02ms |  0.0% → <0.1% |  0ms → 16.8µs |       0 → 3 | `processWorkerExit(ThreadPoolExecutor$Worker, boolean)` | `java.util.concurrent.ThreadPoolExecutor`         |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

| Change |   Delta |      % |          Time | Contentions | Callee                                 | Location                                  |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------- | ----------------------------------------- |
| -42.4% | -1.744s | 100.0% | 4.11s → 2.37s | 735 → 1,061 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

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

##### `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |             % |              Time | Contentions | Callee    | Location                                                              |
| -----: | --------: | ------------: | ----------------: | ----------: | --------- | --------------------------------------------------------------------- |
| -34.8% | -606.87ms | 77.1% → 78.9% |     1.75s → 1.14s |     26 → 21 | `block()` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode` |
| -41.2% | -213.47ms | 22.9% → 21.1% | 518.3ms → 304.8ms |           2 | `block()` | `java.util.concurrent.CompletableFuture$Signaller`                    |

##### `managedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

| Change |     Delta |      % |          Time | Contentions | Callee                                        | Location                            |
| -----: | --------: | -----: | ------------: | ----------: | --------------------------------------------- | ----------------------------------- |
| -36.2% | -820.34ms | 100.0% | 2.26s → 1.44s |     28 → 23 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool` |

##### `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

| Change |     Delta |     % |          Time | Contentions | Callee                                            | Location                                                |
| -----: | --------: | ----: | ------------: | ----------: | ------------------------------------------------- | ------------------------------------------------------- |
| -34.8% | -606.87ms | 99.9% | 1.75s → 1.14s |     26 → 21 | `managedBlock(ForkJoinPool$ManagedBlocker)`       | `java.util.concurrent.ForkJoinPool`                     |
| -43.6% |   -0.63ms |  0.1% | 1.4ms → 0.8ms |      13 → 9 | `reacquire(AbstractQueuedSynchronizer$Node, int)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |

##### `take()` (`java.util.concurrent.LinkedBlockingQueue`)

| Change |     Delta |            % |          Time | Contentions | Callee                | Location                                                                |
| -----: | --------: | -----------: | ------------: | ----------: | --------------------- | ----------------------------------------------------------------------- |
| -34.8% | -607.50ms |       100.0% | 1.75s → 1.14s |     39 → 30 | `await()`             | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
|    new |   +0.12ms | 0.0% → <0.1% |   0ms → 0.1ms |       0 → 2 | `lockInterruptibly()` | `java.util.concurrent.locks.ReentrantLock`                              |

##### `getTask()` (`java.util.concurrent.ThreadPoolExecutor`)

| Change |     Delta |      % |          Time | Contentions | Callee   | Location                                   |
| -----: | --------: | -----: | ------------: | ----------: | -------- | ------------------------------------------ |
| -34.8% | -607.38ms | 100.0% | 1.75s → 1.14s |     39 → 32 | `take()` | `java.util.concurrent.LinkedBlockingQueue` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |      % |          Time | Contentions | Callee                | Location                   |
| -----: | --------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
| -34.8% | -606.87ms | 100.0% | 1.75s → 1.14s |     26 → 21 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `block()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`)

| Change |     Delta |      % |          Time | Contentions | Callee   | Location                                 |
| -----: | --------: | -----: | ------------: | ----------: | -------- | ---------------------------------------- |
| -34.8% | -606.87ms | 100.0% | 1.75s → 1.14s |     26 → 21 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |      % |              Time | Contentions | Callee                | Location                   |
| -----: | --------: | -----: | ----------------: | ----------: | --------------------- | -------------------------- |
| -45.6% | -415.97ms | 100.0% | 912.6ms → 496.6ms |       4 → 3 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

| Change |     Delta |      % |              Time | Contentions | Callee                    | Location                                 |
| -----: | --------: | -----: | ----------------: | ----------: | ------------------------- | ---------------------------------------- |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms |       3 → 2 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

| Change |     Delta |      % |              Time | Contentions | Callee                  | Location                                                                |
| -----: | --------: | -----: | ----------------: | ----------: | ----------------------- | ----------------------------------------------------------------------- |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms |       3 → 2 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

| Change |     Delta |      % |              Time | Contentions | Callee        | Location                       |
| -----: | --------: | -----: | ----------------: | ----------: | ------------- | ------------------------------ |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms |       3 → 2 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

| Change |     Delta |      % |              Time | Contentions | Callee          | Location                       |
| -----: | --------: | -----: | ----------------: | ----------: | --------------- | ------------------------------ |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms |       3 → 2 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

| Change |     Delta |      % |              Time | Contentions | Callee         | Location                       |
| -----: | --------: | -----: | ----------------: | ----------: | -------------- | ------------------------------ |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms |       3 → 2 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

| Change |     Delta |      % |              Time | Contentions | Callee  | Location           |
| -----: | --------: | -----: | ----------------: | ----------: | ------- | ------------------ |
| -45.6% | -415.67ms | 100.0% | 911.9ms → 496.2ms |       3 → 2 | `run()` | `java.lang.Thread` |

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

##### `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |     Delta |     % |              Time | Contentions | Callee                             | Location                                  |
| -----: | --------: | ----: | ----------------: | ----------: | ---------------------------------- | ----------------------------------------- |
| -41.2% | -213.47ms | 99.9% | 518.3ms → 304.8ms |           2 | `get()`                            | `java.util.concurrent.CompletableFuture`  |
| -47.9% |   -0.31ms |  0.1% |     0.6ms → 0.3ms |           1 | `awaitTermination(long, TimeUnit)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`)

| Change |     Delta |      % |              Time | Contentions | Callee                                            | Location                                               |
| -----: | --------: | -----: | ----------------: | ----------: | ------------------------------------------------- | ------------------------------------------------------ |
| -41.2% | -213.78ms | 100.0% | 518.9ms → 305.2ms |           3 | `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

| Change |     Delta |      % |              Time | Contentions | Callee                                                                                                                                                                      | Location                                                            |
| -----: | --------: | -----: | ----------------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| -41.2% | -213.78ms | 100.0% | 518.9ms → 305.2ms |           3 | `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time blocked in their leaf frame.

Common call stack: `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`

|    Change |   Delta |            % |           Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------: | ------: | -----------: | -------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|       new | +4.39ms |  0.0% → 0.1% |    0ms → 4.4ms |      0 → 13 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                       |
|    +84.3% | +3.71ms |  0.1% → 0.3% |  4.4ms → 8.1ms |      2 → 11 | `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`) ← `<init>()` (`org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap`) ← `createFrameMapWithReceivers(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|       new | +3.67ms |  0.0% → 0.1% |    0ms → 3.7ms |       0 → 4 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|       new | +3.03ms |  0.0% → 0.1% |    0ms → 3.0ms |       0 → 1 | `addParameter(ParameterInfo, boolean)` (`org.jetbrains.kotlin.codegen.inline.ParametersBuilder`) ← `addNextParameter(Type, boolean, Type)` ← `addNextParameter$default(ParametersBuilder, Type, boolean, Type, int, Object)` ← `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                        |
|   +125.4% | +2.78ms | <0.1% → 0.2% |  2.2ms → 5.0ms |       5 → 6 | `getThrownExceptions(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|       new | +2.57ms |  0.0% → 0.1% |    0ms → 2.6ms |       0 → 1 | `<clinit>()` (`org.jetbrains.kotlin.resolve.calls.checkers.CoroutineCallCheckerKt`) ← `generateInlineIntrinsicForIr(FunctionDescriptor)` (`org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt`) ← `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) |
|  +1025.4% | +2.19ms | <0.1% → 0.1% |  0.2ms → 2.4ms |       1 → 7 | `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`) ← `functionProto(FirFunction)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x0000007001920460`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|   +197.3% | +2.13ms | <0.1% → 0.1% |  1.1ms → 3.2ms |           1 | `<init>()` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`) ← `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|       new | +2.10ms |  0.0% → 0.1% |    0ms → 2.1ms |       0 → 6 | `<init>(TypeSystemCommonBackendContext, Map, boolean, Function2)` (`org.jetbrains.kotlin.codegen.inline.TypeParameterMappings`) ← `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                    |
| +74370.1% | +1.77ms | <0.1% → 0.1% |  2.4µs → 1.8ms |       1 → 9 | `getUnitValue(ExpressionCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|   +511.4% | +1.74ms | <0.1% → 0.1% |  0.3ms → 2.1ms |      3 → 17 | `unitStats_delegate$lambda$0(PerformanceManager)` (`org.jetbrains.kotlin.util.PerformanceManager`) ← `invoke()` (`org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000700114f238`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getUnitStats()` (`org.jetbrains.kotlin.util.PerformanceManager`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|       new | +1.57ms | 0.0% → <0.1% |    0ms → 1.6ms |       0 → 3 | `preprocessSuspendMarkers(MethodNode, boolean, boolean)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +7202.0% | +1.54ms |        <0.1% | 21.4µs → 1.6ms |       2 → 9 | `getPlatformEnumValue(TargetPlatform)` (`org.jetbrains.kotlin.util.PerformanceManager`) ← `unitStats_delegate$lambda$0(PerformanceManager)` ← `invoke()` (`org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000700114f238`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getUnitStats()` (`org.jetbrains.kotlin.util.PerformanceManager`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|       new | +1.44ms | 0.0% → <0.1% |    0ms → 1.4ms |       0 → 2 | `addNextParameter(Type, boolean, Type)` (`org.jetbrains.kotlin.codegen.inline.ParametersBuilder`) ← `addNextParameter$default(ParametersBuilder, Type, boolean, Type, int, Object)` ← `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                 |
|       new | +1.44ms | 0.0% → <0.1% |    0ms → 1.4ms |      0 → 11 | `<init>(ClassWriter)` (`org.jetbrains.org.objectweb.asm.SymbolTable`) ← `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`) ← `<init>(int)` ← `<init>()` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$BinaryClassWriter`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|       new | +1.42ms | 0.0% → <0.1% |    0ms → 1.4ms |       0 → 1 | `getValue(Object, KProperty)` (`org.jetbrains.kotlin.fir.backend.MappedLazyVar`) ← `getOverriddenSymbols()` (`org.jetbrains.kotlin.fir.lazy.Fir2IrLazySimpleFunction`) ← `allOverridden(IrOverridableDeclaration, boolean)` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`) ← `allOverridden$default(IrOverridableDeclaration, boolean, int, Object)` ← `forceFoxedReturnTypeOnOverride(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`) ← `forceBoxedReturnType(IrFunction)` ← `mapReturnType(IrDeclaration, JvmSignatureWriter, boolean)` ← `mapSignature(IrFunction, boolean, boolean, boolean)` ← `mapSignature$default(MethodSignatureMapper, IrFunction, boolean, boolean, boolean, int, Object)` ← `mapFakeOverrideSignatureSkipGeneric(IrFunction)` ← `mapRawSignature(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.JvmMethodSignatureClashDetector`) ← `trackFakeOverrideMethod(IrFunction)` ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|       new | +1.40ms | 0.0% → <0.1% |    0ms → 1.4ms |       0 → 4 | `<init>(int, int, String, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`) ← `wrapWithMaxLocalCalc(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|       new | +1.32ms | 0.0% → <0.1% |    0ms → 1.3ms |       0 → 3 | `invocationKindProtobufEnum(EventOccurrencesRange)` (`org.jetbrains.kotlin.fir.serialization.FirContractSerializer$ContractSerializerWorker`) ← `fillEffectProto(ProtoBuf$Effect$Builder, KtEffectDeclaration, FirContractDescription)` ← `effectProto(KtEffectDeclaration, FirContractDescription)` ← `contractProto(FirContractDescription)` ← `serializeContractOfFunctionIfAny(FirFunction, ProtoBuf$Function$Builder, FirElementSerializer)` (`org.jetbrains.kotlin.fir.serialization.FirContractSerializer`) ← `functionProto(FirFunction)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x0000007001920460`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|       new | +1.29ms | 0.0% → <0.1% |    0ms → 1.3ms |       0 → 2 | `mapToCallableMethod(IrCall, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|       new | +1.26ms | 0.0% → <0.1% |    0ms → 1.3ms |       0 → 5 | `wrapWithMaxLocalCalc(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### Improvements

Call stacks with the largest decrease in time blocked in their leaf frame.

|  Change |     Delta |             % |              Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------: | --------: | ------------: | ----------------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -34.8% | -606.87ms | 31.5% → 35.9% |     1.75s → 1.14s |     26 → 21 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `block()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`) ← `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`) ← `managedBlock(ForkJoinPool$ManagedBlocker)` ← `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `take()` (`java.util.concurrent.LinkedBlockingQueue`) ← `getTask()` (`java.util.concurrent.ThreadPoolExecutor`) ← `runWorker(ThreadPoolExecutor$Worker)` ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -40.0% | -590.77ms | 26.6% → 27.9% |   1.48s → 884.9ms |     74 → 90 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -45.6% | -415.67ms | 16.5% → 15.7% | 911.9ms → 496.2ms |       3 → 2 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -41.2% | -213.47ms |   9.4% → 9.6% | 518.3ms → 304.8ms |           2 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park(Object)` (`java.util.concurrent.locks.LockSupport`) ← `block()` (`java.util.concurrent.CompletableFuture$Signaller`) ← `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`) ← `managedBlock(ForkJoinPool$ManagedBlocker)` ← `waitingGet(boolean)` (`java.util.concurrent.CompletableFuture`) ← `get()` ← `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`) ← `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700100e000`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                   |
|  -75.2% | -135.24ms |   3.2% → 1.4% |  180.0ms → 44.7ms |           2 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -40.5% |  -28.70ms |          1.3% |   70.8ms → 42.2ms |     23 → 52 | `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -77.5% |  -25.78ms |   0.6% → 0.2% |    33.3ms → 7.5ms |     18 → 16 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000070018afd88`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -88.6% |  -15.50ms |   0.3% → 0.1% |    17.5ms → 2.0ms |      8 → 11 | `generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -77.1% |  -14.67ms |   0.3% → 0.1% |    19.0ms → 4.4ms |           4 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000070018afd88`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -51.3% |  -14.25ms |   0.5% → 0.4% |   27.8ms → 13.5ms |     10 → 17 | `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| removed |  -11.95ms |   0.2% → 0.0% |      12.0ms → 0ms |       8 → 0 | `getDescriptorOrigin(IrDeclaration)` (`org.jetbrains.kotlin.backend.jvm.extensions.JvmIrDeclarationOriginKt`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad798`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -57.5% |  -10.27ms |   0.3% → 0.2% |    17.9ms → 7.6ms |     12 → 10 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -84.6% |  -10.18ms |   0.2% → 0.1% |    12.0ms → 1.9ms |       8 → 7 | `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -91.1% |   -9.85ms |  0.2% → <0.1% |    10.8ms → 1.0ms |       2 → 8 | `createFrameMapWithReceivers(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -85.8% |   -9.73ms |   0.2% → 0.1% |    11.3ms → 1.6ms |      11 → 3 | `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`) ← `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` ← `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -81.3% |   -8.88ms |   0.2% → 0.1% |    10.9ms → 2.0ms |       6 → 5 | `createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion`) ← `createTopLevel$default(FirElementSerializer$Companion, FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean, int, Object)` ← `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000070018afd88`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -99.3% |   -8.61ms |  0.2% → <0.1% |     8.7ms → 0.1ms |           1 | `makeDefinitelyNotNull(UnwrappedType, boolean, boolean)` (`org.jetbrains.kotlin.types.DefinitelyNotNullType$Companion`) ← `makeDefinitelyNotNull$default(DefinitelyNotNullType$Companion, UnwrappedType, boolean, boolean, int, Object)` ← `toIrBasedKotlinType(IrType, KotlinBuiltIns)` (`org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt`) ← `toIrBasedKotlinType$default(IrType, KotlinBuiltIns, int, Object)` ← `visitTypeOperator(IrTypeOperatorCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitTypeOperator(IrTypeOperatorCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall`) ← `gen(IrExpression, Type, IrType, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCallGenerator`) ← `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitContainerExpression(IrContainerExpression, BlockInfo)` ← `visitContainerExpression(IrContainerExpression, Object)` ← `visitBlock(IrBlock, Object)` (`org.jetbrains.kotlin.ir.visitors.IrVisitor`) ← `visitBlock(IrBlock, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlock(IrBlock, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlock`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` |
|  -91.4% |   -8.35ms |  0.2% → <0.1% |     9.1ms → 0.8ms |           2 | `newBuilder()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`) ← `typeOrTypealiasProto(ConeKotlinType, boolean, FirTypeRef, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `typeOrTypealiasProto$default(FirElementSerializer, ConeKotlinType, boolean, FirTypeRef, boolean, boolean, boolean, int, Object)` ← `typeProto(ConeKotlinType, boolean, FirTypeRef, boolean, boolean)` ← `typeProto$default(FirElementSerializer, ConeKotlinType, boolean, FirTypeRef, boolean, boolean, int, Object)` ← `typeProto(FirTypeRef, boolean)` ← `functionProto(FirFunction)` ← `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x0000007001920460`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -82.8% |   -7.91ms |   0.2% → 0.1% |     9.6ms → 1.6ms |       3 → 5 | `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -84.7% |   -7.39ms |  0.2% → <0.1% |     8.7ms → 1.3ms |       1 → 3 | `<init>(FirSession, JvmSerializationBindings, List, ScopeSession, JvmSerializationBindings, boolean, String, ClassBuilderMode, boolean, boolean, BinaryVersion, JvmDefaultMode, FirElementAwareStringTable, FirAdditionalMetadataProvider)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`) ← `<init>(FirSession, JvmSerializationBindings, GenerationState, List, AbstractTypeApproximator, Fir2IrComponents, FirElementAwareStringTable)` ← `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000070018afd88`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

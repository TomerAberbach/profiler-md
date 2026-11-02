# Lock contention profile diff

Blocked 3.74s → 3.42s (-317.71ms, -8.5%) over 1,172 → 1,240 contentions (3.2ms → 2.8ms per contention).

| Category         | Change |     Delta |             % |          Time |   Contentions |
| ---------------- | -----: | --------: | ------------: | ------------: | ------------: |
| Standard library |  -4.1% |  -90.71ms | 59.1% → 61.9% | 2.21s → 2.11s |       54 → 43 |
| Ours             | -14.8% | -227.01ms | 40.9% → 38.1% | 1.53s → 1.30s | 1,118 → 1,197 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── … 2.88s → 2.61s (77.0% → 76.4%) runWorker(ThreadPoolExecutor$Worker) at java.util.concurrent.ThreadPoolExecutor
│   ├── … 1.53s → 1.30s (41.0% → 38.1%) generateFile(JvmBackendContext, IrFile, List, boolean) at org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory
│   │   ├── 1.45s → 1.23s (39.0% → 35.9%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
│   │   │   ├── 1.44s → 1.22s (38.5% → 35.7%) generateMethod(IrFunction, SourceMapper)
│   │   │   │   ├── 1.36s → 1.15s (36.5% → 33.7%, self 32.0% → 29.6%) generateMethodNode(IrFunction)
│   │   │   │   │   └── … 167.6ms → 139.5ms (4.5% → 4.1%, self 1.3% → 1.2%) doGenerate(ReifiedTypeParametersUsages) at org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen
│   │   │   │   │       ├── 80.7ms → 60.0ms (2.2% → 1.8%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
│   │   │   │   │       │   ├── … 76.8ms → 58.4ms (2.1% → 1.7%) visitStatementContainer(IrStatementContainer, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
│   │   │   │   │       │   │   ├── … 67.7ms → 54.2ms (1.8% → 1.6%) visitReturn(IrReturn, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
│   │   │   │   │       │   │   │   ├── … 44.6ms → 33.3ms (1.2% → 1.0%) visitWhen(IrWhen, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
│   │   │   │   │       │   │   │   │   ├── … 38.7ms → 29.3ms (1.0% → 0.9%) visitCall(IrCall, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
│   │   │   │   │       │   │   │   │   │   ├── … 19.4ms → 12.3ms (0.5% → 0.4%) inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen
│   │   │   │   │       │   │   │   │   │   │   ├── 2.4ms → 4.0ms (0.1%) <clinit>() at org.jetbrains.kotlin.codegen.inline.MethodInliner
│   │   │   │   │       │   │   │   │   │   │   └── 4.6ms → 50.0µs (0.1% → <0.1%) getInlineCallSiteInfo() at org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline
│   │   │   │   │       │   │   │   │   │   └── 11.7ms → 8.5ms (0.3% → 0.2%) getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)
│   │   │   │   │       │   │   │   │   └── 4.5ms → 1.6ms (0.1% → <0.1%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator
│   │   │   │   │       │   │   │   └── … 1.7ms → 3.9ms (<0.1% → 0.1%) doInline(MethodNode) at org.jetbrains.kotlin.codegen.inline.MethodInliner
│   │   │   │   │       │   │   └── … 6.1ms → 1.1ms (0.2% → <0.1%) toIrBasedKotlinType(IrType, KotlinBuiltIns) at org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt
│   │   │   │   │       │   └── … 2.3ms → 0.3ms (0.1% → <0.1%) visitLocalVariable(String, String, String, Label, Label, int) at org.jetbrains.org.objectweb.asm.tree.MethodNode
│   │   │   │   │       ├── 10.4ms → 4.1ms (0.3% → 0.1%) createFrameMapWithReceivers(IrFunction)
│   │   │   │   │       ├── 2.5ms → 6.3ms (0.1% → 0.2%) <init>(int, int, String, String, String, String[]) at org.jetbrains.org.objectweb.asm.tree.MethodNode
│   │   │   │   │       ├── 2.8ms → 5.4ms (0.1% → 0.2%) wrapWithMaxLocalCalc(MethodNode) at org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt
│   │   │   │   │       │   └── 1.4ms → 4.0ms (<0.1% → 0.1%) <init>(int, int, String, MethodVisitor) at org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator
│   │   │   │   │       └── … 3.5ms (0.1%) getTypeMappingModeForParameter(IrTypeSystemContext, IrDeclaration, IrType) at org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper$Companion
│   │   │   │   ├── … 24.9ms → 11.6ms (0.7% → 0.3%) <init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor
│   │   │   │   │   └── 10.0ms → 0.6ms (0.3% → <0.1%) <init>() at org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer
│   │   │   │   ├── … 6.4ms → 8.5ms (0.2%) <init>(SourceMapper, SMAP, SourcePosition) at org.jetbrains.kotlin.codegen.inline.SourceMapCopier
│   │   │   │   ├── … 6.3ms → 8.4ms (0.2%) makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings) at org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt
│   │   │   │   └── … 0.7ms → 1.7ms (<0.1% → 0.1%) <init>(MethodNode) at org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackContext
│   │   │   └── … 12.6ms → 3.0ms (0.3% → 0.1%) packagePartProto(FirFile, Set) at org.jetbrains.kotlin.fir.serialization.FirElementSerializer
│   │   │       ├── … 7.5ms → 1.7ms (0.2% → <0.1%) serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer) at org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension
│   │   │       │   ├── … 3.6ms → 0.1ms (0.1% → <0.1%) newBuilder() at org.jetbrains.kotlin.metadata.ProtoBuf$VersionRequirement
│   │   │       │   └── … 2.3ms → 0.1ms (0.1% → <0.1%) <clinit>() at org.jetbrains.kotlin.fir.serialization.LocalClassIdOracle
│   │   │       └── … 3.0ms → 0.2ms (0.1% → <0.1%) getAllInternedObjects() at org.jetbrains.kotlin.metadata.serialization.Interner
│   │   └── … 66.1ms → 65.2ms (1.8% → 1.9%) <init>(IrClass, JvmBackendContext, IrFunction, List) at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
│   │       ├── 7.4ms → 11.1ms (0.2% → 0.3%) mapClassSignature(IrTypeMapper, IrClass, Type, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
│   │       └── 43.9ms → 42.4ms (1.2%) 6 more callees, led by (0.9%) newVisitor(JvmDeclarationOrigin, Type, List) at org.jetbrains.kotlin.codegen.ClassFileFactory
│   └── … 1.34s → 1.30s (36.0% → 38.2%, self 59.0% → 61.8% globally) park(boolean, long) at jdk.internal.misc.Unsafe
├── … 495.4ms → 471.8ms (13.2% → 13.8%) park(boolean, long) at jdk.internal.misc.Unsafe
└── … 365.4ms → 335.3ms (9.8%) park(boolean, long) at jdk.internal.misc.Unsafe
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |            % |          Time | Contentions | Function                                                                                                                                                            | Location                                                                             |
| ------: | ------: | -----------: | ------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| +154.0% | +3.83ms |  0.1% → 0.2% | 2.5ms → 6.3ms |          20 | `<init>(int, int, String, String, String, String[])`                                                                                                                | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                    |
|  +68.6% | +2.93ms |  0.1% → 0.2% | 4.3ms → 7.2ms |     31 → 35 | `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                          |
| +212.7% | +2.70ms | <0.1% → 0.1% | 1.3ms → 4.0ms |     13 → 10 | `<init>(int, int, String, MethodVisitor)`                                                                                                                           | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`           |
|  +32.2% | +2.06ms |         0.2% | 6.4ms → 8.5ms |       5 → 4 | `<init>(SourceMapper, SMAP, SourcePosition)`                                                                                                                        | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier`                                |
|  +74.2% | +2.05ms |         0.1% | 2.8ms → 4.8ms |       3 → 5 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`                       |
| +578.7% | +1.74ms | <0.1% → 0.1% | 0.3ms → 2.0ms |       2 → 5 | `getOptimalModeForSignaturePart(TypeSystemCommonBackendContext, KotlinTypeMarker, boolean)`                                                                         | `org.jetbrains.kotlin.load.kotlin.TypeMappingModeExtensionsKt`                       |
|  +53.4% | +1.67ms |         0.1% | 3.1ms → 4.8ms |     12 → 15 | `doInline(MethodNode)`                                                                                                                                              | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                  |
|  +65.8% | +1.61ms |         0.1% | 2.4ms → 4.0ms |           1 | `<clinit>()`                                                                                                                                                        | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                  |
| +459.7% | +1.55ms | <0.1% → 0.1% | 0.3ms → 1.9ms |       2 → 4 | `desiredAssertionStatus()`                                                                                                                                          | `java.lang.Class`                                                                    |
| +284.8% | +1.33ms | <0.1% → 0.1% | 0.5ms → 1.8ms |      1 → 12 | `unitStats_delegate$lambda$0(PerformanceManager)`                                                                                                                   | `org.jetbrains.kotlin.util.PerformanceManager`                                       |
| +212.6% | +1.20ms | <0.1% → 0.1% | 0.6ms → 1.8ms |       4 → 2 | `mapSignature(IrFunction, boolean, boolean, boolean)`                                                                                                               | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                     |
| +473.6% | +1.19ms |        <0.1% | 0.3ms → 1.4ms |       2 → 6 | `mapToCallableMethod(IrCall, IrFunction)`                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                     |
| +549.3% | +1.18ms |        <0.1% | 0.2ms → 1.4ms |           1 | `<clinit>()`                                                                                                                                                        | `org.jetbrains.kotlin.resolve.deprecation.DeprecatedByAnnotation`                    |
| +159.9% | +1.12ms | <0.1% → 0.1% | 0.7ms → 1.8ms |      7 → 16 | `<init>(MethodNode)`                                                                                                                                                | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackContext`                 |
|  +14.2% | +1.11ms |  0.2% → 0.3% | 7.8ms → 8.9ms |     20 → 19 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                                            | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                               |
|  +98.9% | +0.98ms | <0.1% → 0.1% | 1.0ms → 2.0ms |       4 → 5 | `preprocessNodeBeforeInline(MethodNode, Map)`                                                                                                                       | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                  |
|  +76.0% | +0.93ms | <0.1% → 0.1% | 1.2ms → 2.1ms |           5 | `transform(String, MethodNode)`                                                                                                                                     | `org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer` |
|  +59.4% | +0.92ms | <0.1% → 0.1% | 1.5ms → 2.5ms |     10 → 15 | `generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)`                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                           |
|  +94.6% | +0.84ms | <0.1% → 0.1% | 0.9ms → 1.7ms |       3 → 6 | `visitWhen(IrWhen, BlockInfo)`                                                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                         |
|  +90.5% | +0.82ms | <0.1% → 0.1% | 0.9ms → 1.7ms |       2 → 4 | `getValue(Object, KProperty)`                                                                                                                                       | `org.jetbrains.kotlin.fir.backend.MappedLazyVar`                                     |

##### Standard library

|  Change |   Delta |            % |          Time | Contentions | Function                   | Location                            |
| ------: | ------: | -----------: | ------------: | ----------: | -------------------------- | ----------------------------------- |
| +459.7% | +1.55ms | <0.1% → 0.1% | 0.3ms → 1.9ms |       2 → 4 | `desiredAssertionStatus()` | `java.lang.Class`                   |
|     new | +0.01ms | 0.0% → <0.1% |   0ms → 7.2µs |       0 → 1 | `periodicTask()`           | `jdk.jfr.internal.PlatformRecorder` |
|   +7.3% | +4.04µs |        <0.1% |         0.1ms |       2 → 3 | `getValue()`               | `kotlin.SynchronizedLazyImpl`       |

##### Ours

|  Change |   Delta |            % |          Time | Contentions | Function                                                                                                                                                            | Location                                                                             |
| ------: | ------: | -----------: | ------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| +154.0% | +3.83ms |  0.1% → 0.2% | 2.5ms → 6.3ms |          20 | `<init>(int, int, String, String, String, String[])`                                                                                                                | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                    |
|  +68.6% | +2.93ms |  0.1% → 0.2% | 4.3ms → 7.2ms |     31 → 35 | `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                          |
| +212.7% | +2.70ms | <0.1% → 0.1% | 1.3ms → 4.0ms |     13 → 10 | `<init>(int, int, String, MethodVisitor)`                                                                                                                           | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`           |
|  +32.2% | +2.06ms |         0.2% | 6.4ms → 8.5ms |       5 → 4 | `<init>(SourceMapper, SMAP, SourcePosition)`                                                                                                                        | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier`                                |
|  +74.2% | +2.05ms |         0.1% | 2.8ms → 4.8ms |       3 → 5 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`                       |
| +578.7% | +1.74ms | <0.1% → 0.1% | 0.3ms → 2.0ms |       2 → 5 | `getOptimalModeForSignaturePart(TypeSystemCommonBackendContext, KotlinTypeMarker, boolean)`                                                                         | `org.jetbrains.kotlin.load.kotlin.TypeMappingModeExtensionsKt`                       |
|  +53.4% | +1.67ms |         0.1% | 3.1ms → 4.8ms |     12 → 15 | `doInline(MethodNode)`                                                                                                                                              | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                  |
|  +65.8% | +1.61ms |         0.1% | 2.4ms → 4.0ms |           1 | `<clinit>()`                                                                                                                                                        | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                  |
| +284.8% | +1.33ms | <0.1% → 0.1% | 0.5ms → 1.8ms |      1 → 12 | `unitStats_delegate$lambda$0(PerformanceManager)`                                                                                                                   | `org.jetbrains.kotlin.util.PerformanceManager`                                       |
| +212.6% | +1.20ms | <0.1% → 0.1% | 0.6ms → 1.8ms |       4 → 2 | `mapSignature(IrFunction, boolean, boolean, boolean)`                                                                                                               | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                     |
| +473.6% | +1.19ms |        <0.1% | 0.3ms → 1.4ms |       2 → 6 | `mapToCallableMethod(IrCall, IrFunction)`                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                     |
| +549.3% | +1.18ms |        <0.1% | 0.2ms → 1.4ms |           1 | `<clinit>()`                                                                                                                                                        | `org.jetbrains.kotlin.resolve.deprecation.DeprecatedByAnnotation`                    |
| +159.9% | +1.12ms | <0.1% → 0.1% | 0.7ms → 1.8ms |      7 → 16 | `<init>(MethodNode)`                                                                                                                                                | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackContext`                 |
|  +14.2% | +1.11ms |  0.2% → 0.3% | 7.8ms → 8.9ms |     20 → 19 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                                            | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                               |
|  +98.9% | +0.98ms | <0.1% → 0.1% | 1.0ms → 2.0ms |       4 → 5 | `preprocessNodeBeforeInline(MethodNode, Map)`                                                                                                                       | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                  |
|  +76.0% | +0.93ms | <0.1% → 0.1% | 1.2ms → 2.1ms |           5 | `transform(String, MethodNode)`                                                                                                                                     | `org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer` |
|  +59.4% | +0.92ms | <0.1% → 0.1% | 1.5ms → 2.5ms |     10 → 15 | `generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)`                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                           |
|  +94.6% | +0.84ms | <0.1% → 0.1% | 0.9ms → 1.7ms |       3 → 6 | `visitWhen(IrWhen, BlockInfo)`                                                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                         |
|  +90.5% | +0.82ms | <0.1% → 0.1% | 0.9ms → 1.7ms |       2 → 4 | `getValue(Object, KProperty)`                                                                                                                                       | `org.jetbrains.kotlin.fir.backend.MappedLazyVar`                                     |
|     new | +0.80ms | 0.0% → <0.1% |   0ms → 0.8ms |       0 → 6 | `getPlatformEnumValue(TargetPlatform)`                                                                                                                              | `org.jetbrains.kotlin.util.PerformanceManager`                                       |

#### Improvements

Functions with the largest decrease in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |             % |            Time | Contentions | Function                                                                                 | Location                                                                                           |
| -----: | --------: | ------------: | --------------: | ----------: | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| -15.3% | -182.83ms | 32.0% → 29.6% |   1.19s → 1.01s |     85 → 94 | `generateMethodNode(IrFunction)`                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                            |
|  -4.2% |  -91.84ms | 59.0% → 61.8% |   2.20s → 2.11s |     39 → 33 | `park(boolean, long)`                                                                    | `jdk.internal.misc.Unsafe`                                                                         |
| -21.0% |  -10.59ms |   1.3% → 1.2% | 50.5ms → 39.9ms |     65 → 62 | `doGenerate(ReifiedTypeParametersUsages)`                                                | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                         |
| -93.7% |   -9.33ms |  0.3% → <0.1% |  10.0ms → 0.6ms |       4 → 2 | `<init>()`                                                                               | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
| -99.5% |   -4.95ms |  0.1% → <0.1% |  5.0ms → 23.4µs |       7 → 1 | `createFrameMapWithReceivers(IrFunction)`                                                | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                         |
| -98.9% |   -4.57ms |  0.1% → <0.1% |  4.6ms → 50.0µs |           1 | `getInlineCallSiteInfo()`                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`                               |
| -35.7% |   -4.43ms |   0.3% → 0.2% |  12.4ms → 8.0ms |     22 → 25 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`    | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                       |
| -27.7% |   -3.81ms |   0.4% → 0.3% | 13.8ms → 10.0ms |     46 → 51 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`                              |
| -97.6% |   -3.47ms |  0.1% → <0.1% |   3.6ms → 0.1ms |       3 → 1 | `newBuilder()`                                                                           | `org.jetbrains.kotlin.metadata.ProtoBuf$VersionRequirement`                                        |
| -21.4% |   -3.19ms |   0.4% → 0.3% | 14.9ms → 11.7ms |     48 → 91 | `<init>(IrClass, JvmBackendContext, IrFunction, List)`                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                            |
| -65.6% |   -2.97ms |  0.1% → <0.1% |   4.5ms → 1.6ms |     11 → 10 | `generate()`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`                                         |
| -93.7% |   -2.77ms |  0.1% → <0.1% |   3.0ms → 0.2ms |           1 | `getAllInternedObjects()`                                                                | `org.jetbrains.kotlin.metadata.serialization.Interner`                                             |
| -90.4% |   -2.43ms |  0.1% → <0.1% |   2.7ms → 0.3ms |           1 | `toIrBasedKotlinType(IrType, KotlinBuiltIns)`                                            | `org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt`                                         |
| -96.3% |   -2.26ms |  0.1% → <0.1% |   2.3ms → 0.1ms |       2 → 1 | `<clinit>()`                                                                             | `org.jetbrains.kotlin.fir.serialization.LocalClassIdOracle`                                        |
| -96.2% |   -2.17ms |  0.1% → <0.1% |   2.3ms → 0.1ms |       3 → 1 | `doRemap(int)`                                                                           | `org.jetbrains.kotlin.codegen.inline.LocalVarRemapper`                                             |
| -87.3% |   -2.03ms |  0.1% → <0.1% |   2.3ms → 0.3ms |       2 → 1 | `visitLocalVariable(String, String, String, Label, Label, int)`                          | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                                  |
| -72.7% |   -1.83ms |  0.1% → <0.1% |   2.5ms → 0.7ms |      14 → 4 | `getTypeMappingModeForParameter(IrTypeSystemContext, IrDeclaration, IrType)`             | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper$Companion`                         |
| -67.6% |   -1.51ms |  0.1% → <0.1% |   2.2ms → 0.7ms |       2 → 1 | `makeDefinitelyNotNull(UnwrappedType, boolean, boolean)`                                 | `org.jetbrains.kotlin.types.DefinitelyNotNullType$Companion`                                       |
| -24.6% |   -1.34ms |          0.1% |   5.4ms → 4.1ms |     21 → 10 | `<init>()`                                                                               | `org.jetbrains.kotlin.codegen.FrameMapBase`                                                        |
| -26.5% |   -1.30ms |          0.1% |   4.9ms → 3.6ms |     13 → 37 | `getSourceMapper(JvmBackendContext, IrClass)`                                            | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                                        |

##### Standard library

|  Change |    Delta |             % |           Time | Contentions | Function                                    | Location                                |
| ------: | -------: | ------------: | -------------: | ----------: | ------------------------------------------- | --------------------------------------- |
|   -4.2% | -91.84ms | 59.0% → 61.8% |  2.20s → 2.11s |     39 → 33 | `park(boolean, long)`                       | `jdk.internal.misc.Unsafe`              |
|  -67.9% |  -0.21ms |         <0.1% |  0.3ms → 0.1ms |       4 → 1 | `finishEntry(ClassValue, ClassValue$Entry)` | `java.lang.ClassValue$ClassValueMap`    |
| removed |  -0.18ms |  <0.1% → 0.0% |    0.2ms → 0ms |       5 → 0 | `startEntry(ClassValue)`                    | `java.lang.ClassValue$ClassValueMap`    |
|  -82.1% |  -0.03ms |         <0.1% | 38.9µs → 7.0µs |           1 | `getId()`                                   | `jdk.jfr.internal.PlatformRecording`    |
| removed |  -0.01ms |  <0.1% → 0.0% |   10.5µs → 0ms |       1 → 0 | `put(Object, Object)`                       | `java.util.Collections$SynchronizedMap` |

##### Ours

|  Change |     Delta |             % |            Time | Contentions | Function                                                                                 | Location                                                                                                                 |
| ------: | --------: | ------------: | --------------: | ----------: | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
|  -15.3% | -182.83ms | 32.0% → 29.6% |   1.19s → 1.01s |     85 → 94 | `generateMethodNode(IrFunction)`                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                                                  |
|  -21.0% |  -10.59ms |   1.3% → 1.2% | 50.5ms → 39.9ms |     65 → 62 | `doGenerate(ReifiedTypeParametersUsages)`                                                | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                                               |
|  -93.7% |   -9.33ms |  0.3% → <0.1% |  10.0ms → 0.6ms |       4 → 2 | `<init>()`                                                                               | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`                       |
|  -99.5% |   -4.95ms |  0.1% → <0.1% |  5.0ms → 23.4µs |       7 → 1 | `createFrameMapWithReceivers(IrFunction)`                                                | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                                               |
|  -98.9% |   -4.57ms |  0.1% → <0.1% |  4.6ms → 50.0µs |           1 | `getInlineCallSiteInfo()`                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`                                                     |
|  -35.7% |   -4.43ms |   0.3% → 0.2% |  12.4ms → 8.0ms |     22 → 25 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`    | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                                             |
|  -27.7% |   -3.81ms |   0.4% → 0.3% | 13.8ms → 10.0ms |     46 → 51 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`                                                    |
|  -97.6% |   -3.47ms |  0.1% → <0.1% |   3.6ms → 0.1ms |       3 → 1 | `newBuilder()`                                                                           | `org.jetbrains.kotlin.metadata.ProtoBuf$VersionRequirement`                                                              |
|  -21.4% |   -3.19ms |   0.4% → 0.3% | 14.9ms → 11.7ms |     48 → 91 | `<init>(IrClass, JvmBackendContext, IrFunction, List)`                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                                                  |
|  -65.6% |   -2.97ms |  0.1% → <0.1% |   4.5ms → 1.6ms |     11 → 10 | `generate()`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`                                                               |
|  -93.7% |   -2.77ms |  0.1% → <0.1% |   3.0ms → 0.2ms |           1 | `getAllInternedObjects()`                                                                | `org.jetbrains.kotlin.metadata.serialization.Interner`                                                                   |
|  -90.4% |   -2.43ms |  0.1% → <0.1% |   2.7ms → 0.3ms |           1 | `toIrBasedKotlinType(IrType, KotlinBuiltIns)`                                            | `org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt`                                                               |
|  -96.3% |   -2.26ms |  0.1% → <0.1% |   2.3ms → 0.1ms |       2 → 1 | `<clinit>()`                                                                             | `org.jetbrains.kotlin.fir.serialization.LocalClassIdOracle`                                                              |
|  -96.2% |   -2.17ms |  0.1% → <0.1% |   2.3ms → 0.1ms |       3 → 1 | `doRemap(int)`                                                                           | `org.jetbrains.kotlin.codegen.inline.LocalVarRemapper`                                                                   |
|  -87.3% |   -2.03ms |  0.1% → <0.1% |   2.3ms → 0.3ms |       2 → 1 | `visitLocalVariable(String, String, String, Label, Label, int)`                          | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                                                        |
|  -72.7% |   -1.83ms |  0.1% → <0.1% |   2.5ms → 0.7ms |      14 → 4 | `getTypeMappingModeForParameter(IrTypeSystemContext, IrDeclaration, IrType)`             | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper$Companion`                                               |
|  -67.6% |   -1.51ms |  0.1% → <0.1% |   2.2ms → 0.7ms |       2 → 1 | `makeDefinitelyNotNull(UnwrappedType, boolean, boolean)`                                 | `org.jetbrains.kotlin.types.DefinitelyNotNullType$Companion`                                                             |
|  -24.6% |   -1.34ms |          0.1% |   5.4ms → 4.1ms |     21 → 10 | `<init>()`                                                                               | `org.jetbrains.kotlin.codegen.FrameMapBase`                                                                              |
|  -26.5% |   -1.30ms |          0.1% |   4.9ms → 3.6ms |     13 → 37 | `getSourceMapper(JvmBackendContext, IrClass)`                                            | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                                                              |
| removed |   -1.23ms |  <0.1% → 0.0% |     1.2ms → 0ms |       3 → 0 | `newOperation(AbstractInsnNode)`                                                         | `org.jetbrains.kotlin.codegen.optimization.ConstantConditionEliminationMethodTransformer$ConstantPropagationInterpreter` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `<init>(int, int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change |   Delta |             % |          Time | Contentions | Location                                              |
| ------: | ------: | ------------: | ------------: | ----------: | ----------------------------------------------------- |
| +414.4% | +4.40ms | 42.7% → 86.5% | 1.1ms → 5.5ms |     10 → 11 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:225` |
|  -40.1% | -0.57ms | 57.3% → 13.5% | 1.4ms → 0.9ms |      10 → 9 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:230` |

##### `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

| Change |   Delta |             % |          Time | Contentions | Location                                                        |
| -----: | ------: | ------------: | ------------: | ----------: | --------------------------------------------------------------- |
| +72.9% | +2.02ms | 64.8% → 66.5% | 2.8ms → 4.8ms |     23 → 28 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:225` |
| +60.7% | +0.91ms | 35.2% → 33.5% | 1.5ms → 2.4ms |       8 → 7 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:267` |

##### `<init>(int, int, String, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`)

|  Change |   Delta |             % |          Time | Contentions | Location                                                                      |
| ------: | ------: | ------------: | ------------: | ----------: | ----------------------------------------------------------------------------- |
| +285.0% | +2.37ms | 65.6% → 80.7% | 0.8ms → 3.2ms |       5 → 4 | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator:68` |
|  +75.2% | +0.33ms | 34.4% → 19.3% | 0.4ms → 0.8ms |       8 → 6 | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator:64` |

##### `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`)

| Change |   Delta |      % |          Time | Contentions | Location                                                 |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------- |
| +32.2% | +2.06ms | 100.0% | 6.4ms → 8.5ms |       5 → 4 | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier:65` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

| Change |   Delta |              % |          Time | Contentions | Location                                                           |
| -----: | ------: | -------------: | ------------: | ----------: | ------------------------------------------------------------------ |
|    new | +2.38ms |   0.0% → 49.6% |   0ms → 2.4ms |       0 → 2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:190` |
| -12.2% | -0.34ms | 100.0% → 50.4% | 2.8ms → 2.4ms |           3 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:198` |

##### `getOptimalModeForSignaturePart(TypeSystemCommonBackendContext, KotlinTypeMarker, boolean)` (`org.jetbrains.kotlin.load.kotlin.TypeMappingModeExtensionsKt`)

|   Change |   Delta |             % |          Time | Contentions | Location                                                          |
| -------: | ------: | ------------: | ------------: | ----------: | ----------------------------------------------------------------- |
| +1505.7% | +1.47ms | 32.6% → 77.2% | 0.1ms → 1.6ms |       1 → 3 | `org.jetbrains.kotlin.load.kotlin.TypeMappingModeExtensionsKt:35` |
|  +130.1% | +0.26ms | 67.4% → 22.8% | 0.2ms → 0.5ms |       1 → 2 | `org.jetbrains.kotlin.load.kotlin.TypeMappingModeExtensionsKt:34` |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|  Change |   Delta |             % |          Time | Contentions | Location                                                |
| ------: | ------: | ------------: | ------------: | ----------: | ------------------------------------------------------- |
| +235.2% | +1.86ms | 25.2% → 55.2% | 0.8ms → 2.6ms |       5 → 6 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:154` |
|  -80.9% | -0.27ms |  10.7% → 1.3% | 0.3ms → 0.1ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:433` |
|   +7.6% | +0.08ms | 32.4% → 22.8% | 1.0ms → 1.1ms |       1 → 4 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:159` |
|   +7.4% | +0.05ms | 20.6% → 14.5% | 0.6ms → 0.7ms |       3 → 2 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:153` |
|  -12.5% | -0.04ms |  11.0% → 6.3% |         0.3ms |           2 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:156` |

##### `desiredAssertionStatus()` (`java.lang.Class`)

|  Change |   Delta |      % |          Time | Contentions | Location               |
| ------: | ------: | -----: | ------------: | ----------: | ---------------------- |
| +459.7% | +1.55ms | 100.0% | 0.3ms → 1.9ms |       2 → 4 | `java.lang.Class:3906` |

##### `unitStats_delegate$lambda$0(PerformanceManager)` (`org.jetbrains.kotlin.util.PerformanceManager`)

| Change |   Delta |             % |          Time | Contentions | Location                                           |
| -----: | ------: | ------------: | ------------: | ----------: | -------------------------------------------------- |
|    new | +1.63ms |  0.0% → 90.8% |   0ms → 1.6ms |       0 → 9 | `org.jetbrains.kotlin.util.PerformanceManager:123` |
| -64.5% | -0.30ms | 100.0% → 9.2% | 0.5ms → 0.2ms |       1 → 3 | `org.jetbrains.kotlin.util.PerformanceManager:101` |

##### `mapSignature(IrFunction, boolean, boolean, boolean)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

|  Change |   Delta |      % |          Time | Contentions | Location                                                             |
| ------: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------------------- |
| +212.6% | +1.20ms | 100.0% | 0.6ms → 1.8ms |       4 → 2 | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper:280` |

##### `mapToCallableMethod(IrCall, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

|  Change |   Delta |      % |          Time | Contentions | Location                                                             |
| ------: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------------------- |
| +473.6% | +1.19ms | 100.0% | 0.3ms → 1.4ms |       2 → 6 | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper:406` |

##### `<init>(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackContext`)

|    Change |   Delta |             % |          Time | Contentions | Location                                                                |
| --------: | ------: | ------------: | ------------: | ----------: | ----------------------------------------------------------------------- |
| +10432.4% | +0.93ms |  1.3% → 51.1% | 8.9µs → 0.9ms |       1 → 4 | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackContext:37` |
|    +55.4% | +0.20ms | 51.9% → 31.0% | 0.4ms → 0.6ms |       1 → 5 | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackContext:52` |
|     -1.1% | -3.54µs | 46.8% → 17.8% |         0.3ms |       5 → 7 | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackContext:54` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |   Delta |             % |          Time | Contentions | Location                                                   |
| -----: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------------- |
| +16.4% | +1.24ms | 97.1% → 98.9% | 7.6ms → 8.8ms |          18 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory:465` |
| -58.3% | -0.13ms |   2.9% → 1.1% | 0.2ms → 0.1ms |       2 → 1 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory:459` |

##### `preprocessNodeBeforeInline(MethodNode, Map)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|  Change |   Delta |             % |           Time | Contentions | Location                                                |
| ------: | ------: | ------------: | -------------: | ----------: | ------------------------------------------------------- |
|  +86.0% | +0.61ms | 71.8% → 67.2% |  0.7ms → 1.3ms |       2 → 3 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:798` |
| +663.8% | +0.25ms |  3.8% → 14.4% | 37.3µs → 0.3ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:801` |
|  +49.7% | +0.12ms | 24.5% → 18.4% |  0.2ms → 0.4ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:793` |

##### `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer`)

|  Change |   Delta |             % |          Time | Contentions | Location                                                                                |
| ------: | ------: | ------------: | ------------: | ----------: | --------------------------------------------------------------------------------------- |
| +242.8% | +0.55ms | 18.7% → 36.4% | 0.2ms → 0.8ms |           2 | `org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer:40` |
|  +37.7% | +0.37ms | 81.3% → 63.6% | 1.0ms → 1.4ms |           3 | `org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer:41` |

##### `generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|   Change |   Delta |             % |          Time | Contentions | Location                                                       |
| -------: | ------: | ------------: | ------------: | ----------: | -------------------------------------------------------------- |
| +2112.2% | +1.39ms |  4.3% → 59.2% | 0.1ms → 1.5ms |       2 → 5 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:356` |
|   -78.7% | -0.93ms | 76.4% → 10.2% | 1.2ms → 0.3ms |       5 → 4 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:340` |
|  +152.4% | +0.46ms | 19.4% → 30.6% | 0.3ms → 0.8ms |       3 → 6 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:338` |

##### `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |   Delta |      % |          Time | Contentions | Location                                                          |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------------- |
| +94.6% | +0.84ms | 100.0% | 0.9ms → 1.7ms |       3 → 6 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1014` |

##### `getValue(Object, KProperty)` (`org.jetbrains.kotlin.fir.backend.MappedLazyVar`)

| Change |   Delta |      % |          Time | Contentions | Location                                            |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------------------------------- |
| +90.5% | +0.82ms | 100.0% | 0.9ms → 1.7ms |       2 → 4 | `org.jetbrains.kotlin.fir.backend.MappedLazyVar:67` |

##### `periodicTask()` (`jdk.jfr.internal.PlatformRecorder`)

| Change |   Delta |             % |        Time | Contentions | Location                                |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 7.2µs |       0 → 1 | `jdk.jfr.internal.PlatformRecorder:526` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

| Change |   Delta |      % |  Time | Contentions | Location                         |
| -----: | ------: | -----: | ----: | ----------: | -------------------------------- |
|  +7.3% | +4.04µs | 100.0% | 0.1ms |       2 → 3 | `kotlin.SynchronizedLazyImpl:81` |

##### `getPlatformEnumValue(TargetPlatform)` (`org.jetbrains.kotlin.util.PerformanceManager`)

| Change |   Delta |             % |        Time | Contentions | Location                                           |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------------------------------------- |
|    new | +0.80ms | 0.0% → 100.0% | 0ms → 0.8ms |       0 → 6 | `org.jetbrains.kotlin.util.PerformanceManager:204` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |     Delta |             % |          Time | Contentions | Location                                                    |
| -----: | --------: | ------------: | ------------: | ----------: | ----------------------------------------------------------- |
| -15.4% | -182.96ms | 99.6% → 99.5% |    1.19s → 1s |     64 → 74 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:427` |
|  +9.7% |   +0.31ms |          0.3% | 3.2ms → 3.5ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:422` |
| -10.3% |   -0.18ms |   0.1% → 0.2% | 1.7ms → 1.6ms |       9 → 8 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:416` |
|  -0.6% |   -1.58µs |         <0.1% |         0.3ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:428` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|  Change |    Delta |             % |            Time | Contentions | Location                                                       |
| ------: | -------: | ------------: | --------------: | ----------: | -------------------------------------------------------------- |
|  -39.2% | -11.04ms | 55.8% → 43.0% | 28.2ms → 17.1ms |     15 → 10 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:68`  |
|  -37.7% |  -1.56ms |   8.2% → 6.5% |   4.2ms → 2.6ms |      11 → 9 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:133` |
|  -88.6% |  -1.42ms |   3.2% → 0.5% |   1.6ms → 0.2ms |       3 → 2 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:143` |
| +489.2% |  +1.20ms |   0.5% → 3.6% |   0.2ms → 1.4ms |       1 → 2 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:140` |
| +191.8% |  +0.75ms |   0.8% → 2.9% |   0.4ms → 1.1ms |       2 → 5 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:103` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

| Change |   Delta |      % |           Time | Contentions | Location                                                                                              |
| -----: | ------: | -----: | -------------: | ----------: | ----------------------------------------------------------------------------------------------------- |
| -93.7% | -9.33ms | 100.0% | 10.0ms → 0.6ms |       4 → 2 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:23` |

##### `createFrameMapWithReceivers(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |   Delta |      % |           Time | Contentions | Location                                                       |
| -----: | ------: | -----: | -------------: | ----------: | -------------------------------------------------------------- |
| -99.5% | -4.95ms | 100.0% | 5.0ms → 23.4µs |       7 → 1 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:300` |

##### `getInlineCallSiteInfo()` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`)

| Change |   Delta |      % |           Time | Contentions | Location                                                                |
| -----: | ------: | -----: | -------------: | ----------: | ----------------------------------------------------------------------- |
| -98.9% | -4.57ms | 100.0% | 4.6ms → 50.0µs |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline:47` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |   Delta |             % |          Time | Contentions | Location                                                          |
| -----: | ------: | ------------: | ------------: | ----------: | ----------------------------------------------------------------- |
| -59.3% | -1.85ms | 25.2% → 15.9% | 3.1ms → 1.3ms |           5 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1570` |
| -65.2% | -1.33ms |  16.4% → 8.9% | 2.0ms → 0.7ms |       3 → 2 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1548` |
|    new | +0.95ms |  0.0% → 11.9% |   0ms → 1.0ms |       0 → 1 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1569` |
| -17.1% | -0.79ms | 37.5% → 48.4% | 4.7ms → 3.9ms |       8 → 9 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1581` |
| -39.8% | -0.74ms | 15.0% → 14.0% | 1.9ms → 1.1ms |       3 → 7 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1572` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|  Change |   Delta |             % |          Time | Contentions | Location                                                                 |
| ------: | ------: | ------------: | ------------: | ----------: | ------------------------------------------------------------------------ |
|  -77.5% | -1.66ms |  15.6% → 4.8% | 2.1ms → 0.5ms |           4 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:65` |
| +320.1% | +1.18ms |  2.7% → 15.6% | 0.4ms → 1.6ms |       2 → 4 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:57` |
|  -86.6% | -0.93ms |   7.8% → 1.4% | 1.1ms → 0.1ms |           2 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:61` |
|  -41.0% | -0.80ms | 14.2% → 11.6% | 2.0ms → 1.2ms |       5 → 4 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:47` |
| +291.0% | +0.71ms |   1.8% → 9.6% | 0.2ms → 1.0ms |           2 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:53` |

##### `newBuilder()` (`org.jetbrains.kotlin.metadata.ProtoBuf$VersionRequirement`)

| Change |   Delta |      % |          Time | Contentions | Location                                                          |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------------- |
| -97.6% | -3.47ms | 100.0% | 3.6ms → 0.1ms |       3 → 1 | `org.jetbrains.kotlin.metadata.ProtoBuf$VersionRequirement:28060` |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |   Delta |            % |          Time | Contentions | Location                                                    |
| -----: | ------: | -----------: | ------------: | ----------: | ----------------------------------------------------------- |
| -77.7% | -2.21ms | 19.1% → 5.4% | 2.8ms → 0.6ms |      5 → 12 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:89`  |
| -59.4% | -1.38ms | 15.6% → 8.0% | 2.3ms → 0.9ms |       9 → 6 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:78`  |
| -62.6% | -1.36ms | 14.6% → 6.9% | 2.2ms → 0.8ms |      7 → 10 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:112` |
| +59.7% | +0.74ms | 8.4% → 17.0% | 1.2ms → 2.0ms |      4 → 11 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:107` |
| +47.0% | +0.62ms | 8.8% → 16.5% | 1.3ms → 1.9ms |      7 → 22 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:109` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`)

|  Change |   Delta |             % |          Time | Contentions | Location                                                       |
| ------: | ------: | ------------: | ------------: | ----------: | -------------------------------------------------------------- |
|  -76.7% | -1.47ms | 42.3% → 28.6% | 1.9ms → 0.4ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:38`  |
|  -66.8% | -1.10ms | 36.3% → 35.0% | 1.6ms → 0.5ms |       3 → 5 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:35`  |
| removed | -0.57ms |  12.6% → 0.0% |   0.6ms → 0ms |       5 → 0 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:37`  |
|  +41.7% | +0.17ms |  8.8% → 36.3% | 0.4ms → 0.6ms |       1 → 3 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:490` |

##### `getAllInternedObjects()` (`org.jetbrains.kotlin.metadata.serialization.Interner`)

| Change |   Delta |      % |          Time | Contentions | Location                                                  |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------------------------------------- |
| -93.7% | -2.77ms | 100.0% | 3.0ms → 0.2ms |           1 | `org.jetbrains.kotlin.metadata.serialization.Interner:32` |

##### `toIrBasedKotlinType(IrType, KotlinBuiltIns)` (`org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt`)

| Change |   Delta |      % |          Time | Contentions | Location                                                        |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------------------------------------------- |
| -90.4% | -2.43ms | 100.0% | 2.7ms → 0.3ms |           1 | `org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt:1169` |

##### `<clinit>()` (`org.jetbrains.kotlin.fir.serialization.LocalClassIdOracle`)

|  Change |   Delta |            % |        Time | Contentions | Location                                                       |
| ------: | ------: | -----------: | ----------: | ----------: | -------------------------------------------------------------- |
| removed | -0.40ms | 17.2% → 0.0% | 0.4ms → 0ms |       1 → 0 | `org.jetbrains.kotlin.fir.serialization.LocalClassIdOracle:23` |

##### `doRemap(int)` (`org.jetbrains.kotlin.codegen.inline.LocalVarRemapper`)

| Change |   Delta |      % |          Time | Contentions | Location                                                  |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------------------------------------- |
| -96.2% | -2.17ms | 100.0% | 2.3ms → 0.1ms |       3 → 1 | `org.jetbrains.kotlin.codegen.inline.LocalVarRemapper:70` |

##### `visitLocalVariable(String, String, String, Label, Label, int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

| Change |   Delta |      % |          Time | Contentions | Location                                              |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------- |
| -87.3% | -2.03ms | 100.0% | 2.3ms → 0.3ms |       2 → 1 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:480` |

##### `getTypeMappingModeForParameter(IrTypeSystemContext, IrDeclaration, IrType)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper$Companion`)

| Change |   Delta |             % |          Time | Contentions | Location                                                                       |
| -----: | ------: | ------------: | ------------: | ----------: | ------------------------------------------------------------------------------ |
| -89.4% | -1.33ms | 59.0% → 23.0% | 1.5ms → 0.2ms |       5 → 2 | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper$Companion:316` |
| -48.7% | -0.50ms | 41.0% → 77.0% | 1.0ms → 0.5ms |       9 → 2 | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper$Companion:310` |

##### `makeDefinitelyNotNull(UnwrappedType, boolean, boolean)` (`org.jetbrains.kotlin.types.DefinitelyNotNullType$Companion`)

|  Change |   Delta |              % |          Time | Contentions | Location                                                         |
| ------: | ------: | -------------: | ------------: | ----------: | ---------------------------------------------------------------- |
|  -56.2% | -0.93ms | 73.9% → 100.0% | 1.6ms → 0.7ms |           1 | `org.jetbrains.kotlin.types.DefinitelyNotNullType$Companion:115` |
| removed | -0.58ms |   26.1% → 0.0% |   0.6ms → 0ms |       1 → 0 | `org.jetbrains.kotlin.types.DefinitelyNotNullType$Companion:122` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`)

| Change |   Delta |      % |          Time | Contentions | Location                                       |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------------- |
| -24.6% | -1.34ms | 100.0% | 5.4ms → 4.1ms |     21 → 10 | `org.jetbrains.kotlin.codegen.FrameMapBase:26` |

##### `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

| Change |   Delta |             % |          Time | Contentions | Location                                                       |
| -----: | ------: | ------------: | ------------: | ----------: | -------------------------------------------------------------- |
| -47.7% | -1.24ms | 53.1% → 37.8% | 2.6ms → 1.4ms |      7 → 13 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:76` |
| -30.9% | -0.48ms | 31.7% → 29.8% | 1.6ms → 1.1ms |      3 → 11 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:90` |
| +56.3% | +0.42ms | 15.2% → 32.4% | 0.7ms → 1.2ms |      3 → 13 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:89` |

##### `finishEntry(ClassValue, ClassValue$Entry)` (`java.lang.ClassValue$ClassValueMap`)

| Change |   Delta |      % |          Time | Contentions | Location                                 |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------- |
| -67.9% | -0.21ms | 100.0% | 0.3ms → 0.1ms |       4 → 1 | `java.lang.ClassValue$ClassValueMap:476` |

##### `startEntry(ClassValue)` (`java.lang.ClassValue$ClassValueMap`)

|  Change |   Delta |             % |        Time | Contentions | Location                                 |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------------------- |
| removed | -0.18ms | 100.0% → 0.0% | 0.2ms → 0ms |       5 → 0 | `java.lang.ClassValue$ClassValueMap:440` |

##### `getId()` (`jdk.jfr.internal.PlatformRecording`)

| Change |   Delta |      % |           Time | Contentions | Location                                 |
| -----: | ------: | -----: | -------------: | ----------: | ---------------------------------------- |
| -82.1% | -0.03ms | 100.0% | 38.9µs → 7.0µs |           1 | `jdk.jfr.internal.PlatformRecording:433` |

##### `put(Object, Object)` (`java.util.Collections$SynchronizedMap`)

|  Change |   Delta |             % |         Time | Contentions | Location                                     |
| ------: | ------: | ------------: | -----------: | ----------: | -------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 10.5µs → 0ms |       1 → 0 | `java.util.Collections$SynchronizedMap:2897` |

##### `newOperation(AbstractInsnNode)` (`org.jetbrains.kotlin.codegen.optimization.ConstantConditionEliminationMethodTransformer$ConstantPropagationInterpreter`)

|  Change |   Delta |             % |        Time | Contentions | Location                                                                                                                     |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------- |
| removed | -1.23ms | 100.0% → 0.0% | 1.2ms → 0ms |       3 → 0 | `org.jetbrains.kotlin.codegen.optimization.ConstantConditionEliminationMethodTransformer$ConstantPropagationInterpreter:197` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `<init>(int, int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                    | Location                                                   |
| ------: | ------: | -----: | ------------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| +154.0% | +3.83ms | 100.0% | 2.5ms → 6.3ms |          20 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                 | Location                                                |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
| +68.6% | +2.93ms | 100.0% | 4.3ms → 7.2ms |     31 → 35 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `<init>(int, int, String, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`)

|  Change |   Delta |      % |          Time | Contentions | Caller                             | Location                                                   |
| ------: | ------: | -----: | ------------: | ----------: | ---------------------------------- | ---------------------------------------------------------- |
| +212.7% | +2.70ms | 100.0% | 1.3ms → 4.0ms |     13 → 10 | `wrapWithMaxLocalCalc(MethodNode)` | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt` |

##### `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                                      | Location                                              |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------------------------------------------------------- | ----------------------------------------------------- |
| +32.2% | +2.06ms | 100.0% | 6.4ms → 8.5ms |       5 → 4 | `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                                                                                                             | Location                                                       |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| +74.2% | +2.05ms | 100.0% | 2.8ms → 4.8ms |       3 → 5 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt` |

##### `getOptimalModeForSignaturePart(TypeSystemCommonBackendContext, KotlinTypeMarker, boolean)` (`org.jetbrains.kotlin.load.kotlin.TypeMappingModeExtensionsKt`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                                                              | Location                                                       |
| ------: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| +578.7% | +1.74ms | 100.0% | 0.3ms → 2.0ms |       2 → 5 | `getOptimalModeForValueParameter(TypeSystemCommonBackendContext, KotlinTypeMarker)` | `org.jetbrains.kotlin.load.kotlin.TypeMappingModeExtensionsKt` |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                         | Location                                            |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------------- | --------------------------------------------------- |
| +53.4% | +1.67ms | 100.0% | 3.1ms → 4.8ms |     12 → 15 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `<clinit>()` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                               | Location                                                   |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------------------- | ---------------------------------------------------------- |
| +65.8% | +1.61ms | 100.0% | 2.4ms → 4.0ms |           1 | `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen` |

##### `desiredAssertionStatus()` (`java.lang.Class`)

|  Change |   Delta |             % |           Time | Contentions | Caller       | Location                                                          |
| ------: | ------: | ------------: | -------------: | ----------: | ------------ | ----------------------------------------------------------------- |
| +369.7% | +1.12ms | 89.8% → 75.4% |  0.3ms → 1.4ms |           1 | `<clinit>()` | `org.jetbrains.kotlin.codegen.inline.RemapVisitor`                |
| +640.7% | +0.22ms | 10.2% → 13.5% | 34.3µs → 0.3ms |           1 | `<clinit>()` | `org.jetbrains.kotlin.codegen.inline.InternalFinallyBlockInliner` |
|     new | +0.20ms |  0.0% → 10.4% |    0ms → 0.2ms |       0 → 1 | `<clinit>()` | `org.jetbrains.kotlin.codegen.StackValue`                         |
|     new | +0.01ms |   0.0% → 0.8% |   0ms → 14.9µs |       0 → 1 | `<clinit>()` | `org.jetbrains.kotlin.codegen.inline.NameGenerator`               |

##### `unitStats_delegate$lambda$0(PerformanceManager)` (`org.jetbrains.kotlin.util.PerformanceManager`)

|  Change |   Delta |      % |          Time | Contentions | Caller     | Location                                                                  |
| ------: | ------: | -----: | ------------: | ----------: | ---------- | ------------------------------------------------------------------------- |
| +284.8% | +1.33ms | 100.0% | 0.5ms → 1.8ms |      1 → 12 | `invoke()` | `org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000d00114f238` |

##### `mapSignature(IrFunction, boolean, boolean, boolean)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                                                                            | Location                                                         |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| +212.6% | +1.20ms | 100.0% | 0.6ms → 1.8ms |       4 → 2 | `mapSignature$default(MethodSignatureMapper, IrFunction, boolean, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `mapToCallableMethod(IrCall, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

|  Change |   Delta |      % |          Time | Contentions | Caller                         | Location                                                     |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| +473.6% | +1.19ms | 100.0% | 0.3ms → 1.4ms |       2 → 6 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `<clinit>()` (`org.jetbrains.kotlin.resolve.deprecation.DeprecatedByAnnotation`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                                 | Location                                                       |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------ | -------------------------------------------------------------- |
| +549.3% | +1.18ms | 100.0% | 0.2ms → 1.4ms |           1 | `addDeprecationIfPresent(DeclarationDescriptor, List)` | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver` |

##### `<init>(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackContext`)

|  Change |   Delta |      % |          Time | Contentions | Caller                          | Location                                                                       |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------------- | ------------------------------------------------------------------------------ |
| +159.9% | +1.12ms | 100.0% | 0.7ms → 1.8ms |      7 → 16 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackMethodTransformer` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| +14.2% | +1.11ms | 100.0% | 7.8ms → 8.9ms |     20 → 19 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `preprocessNodeBeforeInline(MethodNode, Map)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                        | Location                                            |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------- | --------------------------------------------------- |
| +98.9% | +0.98ms | 100.0% | 1.0ms → 2.0ms |       4 → 5 | `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer`)

| Change |   Delta |      % |          Time | Contentions | Caller                          | Location                                                                           |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------- | ---------------------------------------------------------------------------------- |
| +76.0% | +0.93ms | 100.0% | 1.2ms → 2.1ms |           5 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer` |

##### `generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |   Delta |      % |          Time | Contentions | Caller                                    | Location                                                   |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| +59.4% | +0.92ms | 100.0% | 1.5ms → 2.5ms |     10 → 15 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |   Delta |      % |          Time | Contentions | Caller                      | Location                                                     |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| +94.6% | +0.84ms | 100.0% | 0.9ms → 1.7ms |       3 → 6 | `visitWhen(IrWhen, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `getValue(Object, KProperty)` (`org.jetbrains.kotlin.fir.backend.MappedLazyVar`)

| Change |   Delta |      % |          Time | Contentions | Caller                   | Location                                                 |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------ | -------------------------------------------------------- |
| +90.5% | +0.82ms | 100.0% | 0.9ms → 1.7ms |       2 → 4 | `getOverriddenSymbols()` | `org.jetbrains.kotlin.fir.lazy.Fir2IrLazySimpleFunction` |

##### `periodicTask()` (`jdk.jfr.internal.PlatformRecorder`)

| Change |   Delta |             % |        Time | Contentions | Caller                        | Location                            |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------- | ----------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 7.2µs |       0 → 1 | `lambda$startDiskMonitor$1()` | `jdk.jfr.internal.PlatformRecorder` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|    Change |   Delta |            % |           Time | Contentions | Caller                                       | Location                                                             |
| --------: | ------: | -----------: | -------------: | ----------: | -------------------------------------------- | -------------------------------------------------------------------- |
|   removed | -0.06ms | 99.3% → 0.0% |    0.1ms → 0ms |       1 → 0 | `getFIELD_FOR_ENUM_ENTRY()`                  | `org.jetbrains.kotlin.ir.declarations.IrDeclarationOrigin$Companion` |
| +12855.7% | +0.05ms | 0.7% → 81.3% | 0.4µs → 48.6µs |           1 | `getGENERATED_SAM_IMPLEMENTATION()`          | `org.jetbrains.kotlin.ir.declarations.IrDeclarationOrigin$Companion` |
|       new | +0.01ms | 0.0% → 18.0% |   0ms → 10.8µs |       0 → 1 | `getCONTINUATION_CLASS()`                    | `org.jetbrains.kotlin.backend.jvm.JvmLoweredDeclarationOrigin`       |
|       new | +0.42µs |  0.0% → 0.7% |    0ms → 0.4µs |       0 → 1 | `getADAPTER_FOR_FUN_INTERFACE_CONSTRUCTOR()` | `org.jetbrains.kotlin.ir.declarations.IrDeclarationOrigin$Companion` |

##### `getPlatformEnumValue(TargetPlatform)` (`org.jetbrains.kotlin.util.PerformanceManager`)

| Change |   Delta |             % |        Time | Contentions | Caller                                            | Location                                       |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------- | ---------------------------------------------- |
|    new | +0.80ms | 0.0% → 100.0% | 0ms → 0.8ms |       0 → 6 | `unitStats_delegate$lambda$0(PerformanceManager)` | `org.jetbrains.kotlin.util.PerformanceManager` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |     Delta |             % |            Time | Contentions | Caller                                      | Location                                                             |
| -----: | --------: | ------------: | --------------: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| -15.3% | -173.65ms | 94.7% → 94.6% | 1.13s → 959.4ms |     83 → 92 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
| -14.4% |   -9.19ms |   5.3% → 5.4% | 63.8ms → 54.6ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |    Delta |             % |              Time | Contentions | Caller                    | Location                                 |
| -----: | -------: | ------------: | ----------------: | ----------: | ------------------------- | ---------------------------------------- |
|  -2.8% | -38.08ms | 61.0% → 61.8% |     1.34s → 1.30s |     26 → 20 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
|  -8.2% | -30.14ms | 16.6% → 15.9% | 366.5ms → 336.3ms |          10 | `park(Object)`            | `java.util.concurrent.locks.LockSupport` |
|  -4.8% | -23.63ms | 22.4% → 22.3% | 495.8ms → 472.2ms |           3 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |    Delta |      % |            Time | Contentions | Caller                                  | Location                                                   |
| -----: | -------: | -----: | --------------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| -21.0% | -10.59ms | 100.0% | 50.5ms → 39.9ms |     65 → 62 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

| Change |   Delta |      % |           Time | Contentions | Caller                                                                                   | Location                                                              |
| -----: | ------: | -----: | -------------: | ----------: | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| -93.7% | -9.33ms | 100.0% | 10.0ms → 0.6ms |       4 → 2 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor` |

##### `createFrameMapWithReceivers(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |   Delta |      % |           Time | Contentions | Caller                                    | Location                                                   |
| -----: | ------: | -----: | -------------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| -99.5% | -4.95ms | 100.0% | 5.0ms → 23.4µs |       7 → 1 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `getInlineCallSiteInfo()` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`)

| Change |   Delta |      % |           Time | Contentions | Caller                                                               | Location                                                   |
| -----: | ------: | -----: | -------------: | ----------: | -------------------------------------------------------------------- | ---------------------------------------------------------- |
| -98.9% | -4.57ms | 100.0% | 4.6ms → 50.0µs |           1 | `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |   Delta |      % |           Time | Contentions | Caller                         | Location                                                     |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| -35.7% | -4.43ms | 100.0% | 12.4ms → 8.0ms |     22 → 25 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

| Change |   Delta |      % |            Time | Contentions | Caller                                                                   | Location                                                             |
| -----: | ------: | -----: | --------------: | ----------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| -27.7% | -3.81ms | 100.0% | 13.8ms → 10.0ms |     46 → 51 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder` |

##### `newBuilder()` (`org.jetbrains.kotlin.metadata.ProtoBuf$VersionRequirement`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                                                                            | Location                                                            |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| -97.6% | -3.47ms | 100.0% | 3.6ms → 0.1ms |       3 → 1 | `writeVersionRequirement(int, int, int, ProtoBuf$VersionRequirement$VersionKind, MutableVersionRequirementTable)` | `org.jetbrains.kotlin.serialization.DescriptorSerializer$Companion` |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |   Delta |      % |            Time | Contentions | Caller                                                                           | Location                                                |
| -----: | ------: | -----: | --------------: | ----------: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -21.4% | -3.19ms | 100.0% | 14.9ms → 11.7ms |     48 → 91 | `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`)

| Change |   Delta |      % |          Time | Contentions | Caller                         | Location                                                     |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| -65.6% | -2.97ms | 100.0% | 4.5ms → 1.6ms |     11 → 10 | `visitWhen(IrWhen, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `getAllInternedObjects()` (`org.jetbrains.kotlin.metadata.serialization.Interner`)

| Change |   Delta |      % |          Time | Contentions | Caller        | Location                                                   |
| -----: | ------: | -----: | ------------: | ----------: | ------------- | ---------------------------------------------------------- |
| -93.7% | -2.77ms | 100.0% | 3.0ms → 0.2ms |           1 | `serialize()` | `org.jetbrains.kotlin.metadata.serialization.MutableTable` |

##### `toIrBasedKotlinType(IrType, KotlinBuiltIns)` (`org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                             | Location                                                   |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------------ | ---------------------------------------------------------- |
| -90.4% | -2.43ms | 100.0% | 2.7ms → 0.3ms |           1 | `toIrBasedKotlinType$default(IrType, KotlinBuiltIns, int, Object)` | `org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt` |

##### `<clinit>()` (`org.jetbrains.kotlin.fir.serialization.LocalClassIdOracle`)

| Change |   Delta |      % |          Time | Contentions | Caller                    | Location                                                         |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------- | ---------------------------------------------------------------- |
| -96.3% | -2.26ms | 100.0% | 2.3ms → 0.1ms |       2 → 1 | `getLocalClassIdOracle()` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension` |

##### `doRemap(int)` (`org.jetbrains.kotlin.codegen.inline.LocalVarRemapper`)

| Change |   Delta |      % |          Time | Contentions | Caller       | Location                                               |
| -----: | ------: | -----: | ------------: | ----------: | ------------ | ------------------------------------------------------ |
| -96.2% | -2.17ms | 100.0% | 2.3ms → 0.1ms |       3 → 1 | `remap(int)` | `org.jetbrains.kotlin.codegen.inline.LocalVarRemapper` |

##### `visitLocalVariable(String, String, String, Label, Label, int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                          | Location                                        |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------------------------------------------- | ----------------------------------------------- |
| -87.3% | -2.03ms | 100.0% | 2.3ms → 0.3ms |       2 → 1 | `visitLocalVariable(String, String, String, Label, Label, int)` | `org.jetbrains.org.objectweb.asm.MethodVisitor` |

##### `getTypeMappingModeForParameter(IrTypeSystemContext, IrDeclaration, IrType)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper$Companion`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                                   | Location                                                         |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| -72.7% | -1.83ms | 100.0% | 2.5ms → 0.7ms |      14 → 4 | `writeParameterType(JvmSignatureWriter, IrType, IrDeclaration, boolean)` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `makeDefinitelyNotNull(UnwrappedType, boolean, boolean)` (`org.jetbrains.kotlin.types.DefinitelyNotNullType$Companion`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                                                                         | Location                                                     |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| -67.6% | -1.51ms | 100.0% | 2.2ms → 0.7ms |       2 → 1 | `makeDefinitelyNotNull$default(DefinitelyNotNullType$Companion, UnwrappedType, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.types.DefinitelyNotNullType$Companion` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`)

| Change |   Delta |      % |          Time | Contentions | Caller     | Location                                              |
| -----: | ------: | -----: | ------------: | ----------: | ---------- | ----------------------------------------------------- |
| -24.6% | -1.34ms | 100.0% | 5.4ms → 4.1ms |     21 → 10 | `<init>()` | `org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap` |

##### `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                 | Location                                                |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
| -26.5% | -1.30ms | 100.0% | 4.9ms → 3.6ms |     13 → 37 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `finishEntry(ClassValue, ClassValue$Entry)` (`java.lang.ClassValue$ClassValueMap`)

| Change |   Delta |      % |          Time | Contentions | Caller                  | Location               |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------- | ---------------------- |
| -67.9% | -0.21ms | 100.0% | 0.3ms → 0.1ms |       4 → 1 | `getFromHashMap(Class)` | `java.lang.ClassValue` |

##### `startEntry(ClassValue)` (`java.lang.ClassValue$ClassValueMap`)

|  Change |   Delta |             % |        Time | Contentions | Caller                  | Location               |
| ------: | ------: | ------------: | ----------: | ----------: | ----------------------- | ---------------------- |
| removed | -0.18ms | 100.0% → 0.0% | 0.2ms → 0ms |       5 → 0 | `getFromHashMap(Class)` | `java.lang.ClassValue` |

##### `getId()` (`jdk.jfr.internal.PlatformRecording`)

| Change |   Delta |      % |           Time | Contentions | Caller    | Location            |
| -----: | ------: | -----: | -------------: | ----------: | --------- | ------------------- |
| -82.1% | -0.03ms | 100.0% | 38.9µs → 7.0µs |           1 | `getId()` | `jdk.jfr.Recording` |

##### `put(Object, Object)` (`java.util.Collections$SynchronizedMap`)

|  Change |   Delta |             % |         Time | Contentions | Caller                                         | Location                                        |
| ------: | ------: | ------------: | -----------: | ----------: | ---------------------------------------------- | ----------------------------------------------- |
| removed | -0.01ms | 100.0% → 0.0% | 10.5µs → 0ms |       1 → 0 | `newVisitor(JvmDeclarationOrigin, Type, List)` | `org.jetbrains.kotlin.codegen.ClassFileFactory` |

##### `newOperation(AbstractInsnNode)` (`org.jetbrains.kotlin.codegen.optimization.ConstantConditionEliminationMethodTransformer$ConstantPropagationInterpreter`)

|  Change |   Delta |             % |        Time | Contentions | Caller                           | Location                                                                                                                 |
| ------: | ------: | ------------: | ----------: | ----------: | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| removed | -1.23ms | 100.0% → 0.0% | 1.2ms → 0ms |       3 → 0 | `newOperation(AbstractInsnNode)` | `org.jetbrains.kotlin.codegen.optimization.ConstantConditionEliminationMethodTransformer$ConstantPropagationInterpreter` |

### Total time

#### Regressions

Functions with the largest increase in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |            % |            Time | Contentions | Function                                                                                                                                                            | Location                                                                                  |
| ------: | ------: | -----------: | --------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
|  +23.0% | +4.73ms |  0.5% → 0.7% | 20.6ms → 25.3ms |     66 → 81 | `getValue()`                                                                                                                                                        | `kotlin.SynchronizedLazyImpl`                                                             |
| +154.0% | +3.83ms |  0.1% → 0.2% |   2.5ms → 6.3ms |          20 | `<init>(int, int, String, String, String, String[])`                                                                                                                | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                         |
|  +50.4% | +3.71ms |  0.2% → 0.3% |  7.4ms → 11.1ms |          56 | `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                               |
| +131.5% | +3.24ms |  0.1% → 0.2% |   2.5ms → 5.7ms |     21 → 19 | `isDeprecatedHidden(IrFunction)`                                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                |
| +189.4% | +2.60ms | <0.1% → 0.1% |   1.4ms → 4.0ms |     14 → 10 | `<init>(int, int, String, MethodVisitor)`                                                                                                                           | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`                |
|  +89.9% | +2.56ms |  0.1% → 0.2% |   2.8ms → 5.4ms |     23 → 21 | `wrapWithMaxLocalCalc(MethodNode)`                                                                                                                                  | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`                                |
| +100.2% | +2.22ms |         0.1% |   2.2ms → 4.4ms |     20 → 17 | `isDeprecatedHidden(DeclarationDescriptor)`                                                                                                                         | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`                            |
| +468.4% | +2.18ms | <0.1% → 0.1% |   0.5ms → 2.6ms |      1 → 19 | `unitStats_delegate$lambda$0(PerformanceManager)`                                                                                                                   | `org.jetbrains.kotlin.util.PerformanceManager`                                            |
| +468.4% | +2.18ms | <0.1% → 0.1% |   0.5ms → 2.6ms |      1 → 19 | `invoke()`                                                                                                                                                          | `org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000d00114f238`                 |
| +468.4% | +2.18ms | <0.1% → 0.1% |   0.5ms → 2.6ms |      1 → 19 | `getUnitStats()`                                                                                                                                                    | `org.jetbrains.kotlin.util.PerformanceManager`                                            |
|  +33.4% | +2.11ms |         0.2% |   6.3ms → 8.4ms |     16 → 14 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`                            |
|  +50.1% | +2.10ms |  0.1% → 0.2% |   4.2ms → 6.3ms |     27 → 22 | `calculateMethodFlags(IrFunction)`                                                                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                |
| +106.3% | +2.08ms |         0.1% |   2.0ms → 4.0ms |     15 → 21 | `transform(String, MethodNode)`                                                                                                                                     | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackMethodTransformer`            |
|  +93.8% | +2.08ms |         0.1% |   2.2ms → 4.3ms |     20 → 16 | `computeDeprecation(DeclarationDescriptor)`                                                                                                                         | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`                            |
|  +93.8% | +2.08ms |         0.1% |   2.2ms → 4.3ms |     20 → 16 | `deprecations$lambda$0(DeprecationResolver, DeclarationDescriptor)`                                                                                                 | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`                            |
|  +93.8% | +2.08ms |         0.1% |   2.2ms → 4.3ms |     20 → 16 | `invoke(Object)`                                                                                                                                                    | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver$$Lambda.0x000000d001817050` |
|  +93.8% | +2.08ms |         0.1% |   2.2ms → 4.3ms |     20 → 16 | `invoke(Object)`                                                                                                                                                    | `org.jetbrains.kotlin.storage.LockBasedStorageManager$MapBasedMemoizedFunction`           |
|  +93.8% | +2.08ms |         0.1% |   2.2ms → 4.3ms |     20 → 16 | `invoke(Object)`                                                                                                                                                    | `org.jetbrains.kotlin.storage.LockBasedStorageManager$MapBasedMemoizedFunctionToNotNull`  |
|  +93.8% | +2.08ms |         0.1% |   2.2ms → 4.3ms |     20 → 16 | `getDeprecations(DeclarationDescriptor)`                                                                                                                            | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`                            |
|  +95.6% | +2.07ms |         0.1% |   2.2ms → 4.2ms |     19 → 15 | `addDeprecationIfPresent(DeclarationDescriptor, List)`                                                                                                              | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`                            |

##### Standard library

|  Change |   Delta |            % |            Time | Contentions | Function                      | Location                                                       |
| ------: | ------: | -----------: | --------------: | ----------: | ----------------------------- | -------------------------------------------------------------- |
|  +23.0% | +4.73ms |  0.5% → 0.7% | 20.6ms → 25.3ms |     66 → 81 | `getValue()`                  | `kotlin.SynchronizedLazyImpl`                                  |
| +459.7% | +1.55ms | <0.1% → 0.1% |   0.3ms → 1.9ms |       2 → 4 | `desiredAssertionStatus()`    | `java.lang.Class`                                              |
| +169.8% | +0.15ms |        <0.1% |   0.1ms → 0.2ms |       1 → 3 | `acquireInterruptibly(int)`   | `java.util.concurrent.locks.AbstractQueuedSynchronizer`        |
| +169.8% | +0.15ms |        <0.1% |   0.1ms → 0.2ms |       1 → 3 | `lockInterruptibly()`         | `java.util.concurrent.locks.ReentrantLock$Sync`                |
| +169.8% | +0.15ms |        <0.1% |   0.1ms → 0.2ms |       1 → 3 | `lockInterruptibly()`         | `java.util.concurrent.locks.ReentrantLock`                     |
|     new | +0.01ms | 0.0% → <0.1% |     0ms → 7.2µs |       0 → 1 | `periodicTask()`              | `jdk.jfr.internal.PlatformRecorder`                            |
|     new | +0.01ms | 0.0% → <0.1% |     0ms → 7.2µs |       0 → 1 | `lambda$startDiskMonitor$1()` | `jdk.jfr.internal.PlatformRecorder`                            |
|     new | +0.01ms | 0.0% → <0.1% |     0ms → 7.2µs |       0 → 1 | `run()`                       | `jdk.jfr.internal.PlatformRecorder$$Lambda.0x000000d001042ce0` |

##### Ours

|  Change |   Delta |            % |           Time | Contentions | Function                                                                                                                                                            | Location                                                                                  |
| ------: | ------: | -----------: | -------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| +154.0% | +3.83ms |  0.1% → 0.2% |  2.5ms → 6.3ms |          20 | `<init>(int, int, String, String, String, String[])`                                                                                                                | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                         |
|  +50.4% | +3.71ms |  0.2% → 0.3% | 7.4ms → 11.1ms |          56 | `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                               |
| +131.5% | +3.24ms |  0.1% → 0.2% |  2.5ms → 5.7ms |     21 → 19 | `isDeprecatedHidden(IrFunction)`                                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                |
| +189.4% | +2.60ms | <0.1% → 0.1% |  1.4ms → 4.0ms |     14 → 10 | `<init>(int, int, String, MethodVisitor)`                                                                                                                           | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`                |
|  +89.9% | +2.56ms |  0.1% → 0.2% |  2.8ms → 5.4ms |     23 → 21 | `wrapWithMaxLocalCalc(MethodNode)`                                                                                                                                  | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`                                |
| +100.2% | +2.22ms |         0.1% |  2.2ms → 4.4ms |     20 → 17 | `isDeprecatedHidden(DeclarationDescriptor)`                                                                                                                         | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`                            |
| +468.4% | +2.18ms | <0.1% → 0.1% |  0.5ms → 2.6ms |      1 → 19 | `unitStats_delegate$lambda$0(PerformanceManager)`                                                                                                                   | `org.jetbrains.kotlin.util.PerformanceManager`                                            |
| +468.4% | +2.18ms | <0.1% → 0.1% |  0.5ms → 2.6ms |      1 → 19 | `invoke()`                                                                                                                                                          | `org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000d00114f238`                 |
| +468.4% | +2.18ms | <0.1% → 0.1% |  0.5ms → 2.6ms |      1 → 19 | `getUnitStats()`                                                                                                                                                    | `org.jetbrains.kotlin.util.PerformanceManager`                                            |
|  +33.4% | +2.11ms |         0.2% |  6.3ms → 8.4ms |     16 → 14 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`                            |
|  +50.1% | +2.10ms |  0.1% → 0.2% |  4.2ms → 6.3ms |     27 → 22 | `calculateMethodFlags(IrFunction)`                                                                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                |
| +106.3% | +2.08ms |         0.1% |  2.0ms → 4.0ms |     15 → 21 | `transform(String, MethodNode)`                                                                                                                                     | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackMethodTransformer`            |
|  +93.8% | +2.08ms |         0.1% |  2.2ms → 4.3ms |     20 → 16 | `computeDeprecation(DeclarationDescriptor)`                                                                                                                         | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`                            |
|  +93.8% | +2.08ms |         0.1% |  2.2ms → 4.3ms |     20 → 16 | `deprecations$lambda$0(DeprecationResolver, DeclarationDescriptor)`                                                                                                 | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`                            |
|  +93.8% | +2.08ms |         0.1% |  2.2ms → 4.3ms |     20 → 16 | `invoke(Object)`                                                                                                                                                    | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver$$Lambda.0x000000d001817050` |
|  +93.8% | +2.08ms |         0.1% |  2.2ms → 4.3ms |     20 → 16 | `invoke(Object)`                                                                                                                                                    | `org.jetbrains.kotlin.storage.LockBasedStorageManager$MapBasedMemoizedFunction`           |
|  +93.8% | +2.08ms |         0.1% |  2.2ms → 4.3ms |     20 → 16 | `invoke(Object)`                                                                                                                                                    | `org.jetbrains.kotlin.storage.LockBasedStorageManager$MapBasedMemoizedFunctionToNotNull`  |
|  +93.8% | +2.08ms |         0.1% |  2.2ms → 4.3ms |     20 → 16 | `getDeprecations(DeclarationDescriptor)`                                                                                                                            | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`                            |
|  +95.6% | +2.07ms |         0.1% |  2.2ms → 4.2ms |     19 → 15 | `addDeprecationIfPresent(DeclarationDescriptor, List)`                                                                                                              | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`                            |
|  +95.6% | +2.07ms |         0.1% |  2.2ms → 4.2ms |     19 → 15 | `getOwnDeprecations(DeclarationDescriptor)`                                                                                                                         | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`                            |

#### Improvements

Functions with the largest decrease in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |             % |              Time |   Contentions | Function                                                                                                          | Location                                                                          |
| -----: | --------: | ------------: | ----------------: | ------------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
|  -8.5% | -287.54ms |         90.2% |     3.37s → 3.08s | 1,169 → 1,236 | `runWith(Object, Runnable)`                                                                                       | `java.lang.Thread`                                                                |
|  -8.5% | -287.54ms |         90.2% |     3.37s → 3.08s | 1,169 → 1,236 | `run()`                                                                                                           | `java.lang.Thread`                                                                |
|  -9.2% | -263.95ms | 77.0% → 76.4% |     2.88s → 2.61s | 1,167 → 1,233 | `runWorker(ThreadPoolExecutor$Worker)`                                                                            | `java.util.concurrent.ThreadPoolExecutor`                                         |
|  -9.2% | -263.95ms | 77.0% → 76.4% |     2.88s → 2.61s | 1,167 → 1,233 | `run()`                                                                                                           | `java.util.concurrent.ThreadPoolExecutor$Worker`                                  |
| -15.6% | -228.18ms | 39.0% → 35.9% |     1.45s → 1.23s |     862 → 821 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -14.9% | -228.02ms | 41.0% → 38.1% |     1.53s → 1.30s | 1,131 → 1,186 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| -14.7% | -225.85ms | 41.0% → 38.2% |     1.53s → 1.30s | 1,132 → 1,205 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| -14.7% | -225.85ms | 41.0% → 38.2% |     1.53s → 1.30s | 1,132 → 1,205 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8` |
| -14.7% | -225.85ms | 41.0% → 38.2% |     1.53s → 1.30s | 1,132 → 1,205 | `run()`                                                                                                           | `java.util.concurrent.CompletableFuture$AsyncRun`                                 |
| -15.3% | -219.82ms | 38.5% → 35.7% |     1.44s → 1.22s |     827 → 789 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -15.5% | -210.92ms | 36.5% → 33.7% |     1.36s → 1.15s |     578 → 561 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  -4.2% |  -91.84ms | 59.0% → 61.8% |     2.20s → 2.11s |       39 → 33 | `park(boolean, long)`                                                                                             | `jdk.internal.misc.Unsafe`                                                        |
|  -4.0% |  -68.19ms | 45.8% → 48.0% |     1.71s → 1.64s |       27 → 22 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)`                                                                     | `java.util.concurrent.ForkJoinPool`                                               |
|  -4.0% |  -68.19ms | 45.8% → 48.0% |     1.71s → 1.64s |       27 → 22 | `managedBlock(ForkJoinPool$ManagedBlocker)`                                                                       | `java.util.concurrent.ForkJoinPool`                                               |
|  -2.8% |  -38.22ms | 36.0% → 38.2% |     1.34s → 1.30s |       33 → 25 | `await()`                                                                                                         | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`           |
|  -2.8% |  -38.08ms | 36.0% → 38.2% |     1.34s → 1.30s |       26 → 20 | `park()`                                                                                                          | `java.util.concurrent.locks.LockSupport`                                          |
|  -2.8% |  -38.08ms | 36.0% → 38.2% |     1.34s → 1.30s |       26 → 20 | `block()`                                                                                                         | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`             |
|  -2.8% |  -38.07ms | 36.0% → 38.2% |     1.34s → 1.31s |       34 → 28 | `take()`                                                                                                          | `java.util.concurrent.LinkedBlockingQueue`                                        |
|  -2.8% |  -38.07ms | 36.0% → 38.2% |     1.34s → 1.31s |       34 → 28 | `getTask()`                                                                                                       | `java.util.concurrent.ThreadPoolExecutor`                                         |
| -16.1% |  -37.28ms |   6.2% → 5.7% | 231.4ms → 194.2ms |     495 → 469 | `doGenerate(ReifiedTypeParametersUsages)`                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |

##### Standard library

| Change |     Delta |             % |              Time |   Contentions | Function                                         | Location                                                                |
| -----: | --------: | ------------: | ----------------: | ------------: | ------------------------------------------------ | ----------------------------------------------------------------------- |
|  -8.5% | -287.54ms |         90.2% |     3.37s → 3.08s | 1,169 → 1,236 | `runWith(Object, Runnable)`                      | `java.lang.Thread`                                                      |
|  -8.5% | -287.54ms |         90.2% |     3.37s → 3.08s | 1,169 → 1,236 | `run()`                                          | `java.lang.Thread`                                                      |
|  -9.2% | -263.95ms | 77.0% → 76.4% |     2.88s → 2.61s | 1,167 → 1,233 | `runWorker(ThreadPoolExecutor$Worker)`           | `java.util.concurrent.ThreadPoolExecutor`                               |
|  -9.2% | -263.95ms | 77.0% → 76.4% |     2.88s → 2.61s | 1,167 → 1,233 | `run()`                                          | `java.util.concurrent.ThreadPoolExecutor$Worker`                        |
| -14.7% | -225.85ms | 41.0% → 38.2% |     1.53s → 1.30s | 1,132 → 1,205 | `run()`                                          | `java.util.concurrent.CompletableFuture$AsyncRun`                       |
|  -4.2% |  -91.84ms | 59.0% → 61.8% |     2.20s → 2.11s |       39 → 33 | `park(boolean, long)`                            | `jdk.internal.misc.Unsafe`                                              |
|  -4.0% |  -68.19ms | 45.8% → 48.0% |     1.71s → 1.64s |       27 → 22 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)`    | `java.util.concurrent.ForkJoinPool`                                     |
|  -4.0% |  -68.19ms | 45.8% → 48.0% |     1.71s → 1.64s |       27 → 22 | `managedBlock(ForkJoinPool$ManagedBlocker)`      | `java.util.concurrent.ForkJoinPool`                                     |
|  -2.8% |  -38.22ms | 36.0% → 38.2% |     1.34s → 1.30s |       33 → 25 | `await()`                                        | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
|  -2.8% |  -38.08ms | 36.0% → 38.2% |     1.34s → 1.30s |       26 → 20 | `park()`                                         | `java.util.concurrent.locks.LockSupport`                                |
|  -2.8% |  -38.08ms | 36.0% → 38.2% |     1.34s → 1.30s |       26 → 20 | `block()`                                        | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`   |
|  -2.8% |  -38.07ms | 36.0% → 38.2% |     1.34s → 1.31s |       34 → 28 | `take()`                                         | `java.util.concurrent.LinkedBlockingQueue`                              |
|  -2.8% |  -38.07ms | 36.0% → 38.2% |     1.34s → 1.31s |       34 → 28 | `getTask()`                                      | `java.util.concurrent.ThreadPoolExecutor`                               |
|  -8.2% |  -30.14ms |          9.8% | 365.9ms → 335.8ms |         2 → 3 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x000000d001001800`                    |
|  -8.2% |  -30.14ms |          9.8% | 365.9ms → 335.8ms |         2 → 3 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000d00100e000`                     |
|  -8.2% |  -30.14ms |          9.8% | 365.9ms → 335.8ms |         2 → 3 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                                      |
|  -8.2% |  -30.14ms |          9.8% | 365.9ms → 335.8ms |         2 → 3 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`                       |
|  -8.2% |  -30.14ms |          9.8% | 365.9ms → 335.8ms |         2 → 3 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`                       |
|  -8.2% |  -30.14ms |          9.8% | 365.9ms → 335.8ms |         2 → 3 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                                              |
|  -8.2% |  -30.14ms |          9.8% | 366.5ms → 336.3ms |            10 | `park(Object)`                                   | `java.util.concurrent.locks.LockSupport`                                |

##### Ours

| Change |     Delta |             % |              Time |   Contentions | Function                                                                                                                                                                    | Location                                                                          |
| -----: | --------: | ------------: | ----------------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| -15.6% | -228.18ms | 39.0% → 35.9% |     1.45s → 1.23s |     862 → 821 | `generate()`                                                                                                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -14.9% | -228.02ms | 41.0% → 38.1% |     1.53s → 1.30s | 1,131 → 1,186 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| -14.7% | -225.85ms | 41.0% → 38.2% |     1.53s → 1.30s | 1,132 → 1,205 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)`                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| -14.7% | -225.85ms | 41.0% → 38.2% |     1.53s → 1.30s | 1,132 → 1,205 | `run()`                                                                                                                                                                     | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8` |
| -15.3% | -219.82ms | 38.5% → 35.7% |     1.44s → 1.22s |     827 → 789 | `generateMethod(IrFunction, SourceMapper)`                                                                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -15.5% | -210.92ms | 36.5% → 33.7% |     1.36s → 1.15s |     578 → 561 | `generateMethodNode(IrFunction)`                                                                                                                                            | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -16.1% |  -37.28ms |   6.2% → 5.7% | 231.4ms → 194.2ms |     495 → 469 | `doGenerate(ReifiedTypeParametersUsages)`                                                                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| -16.1% |  -37.28ms |   6.2% → 5.7% | 231.4ms → 194.2ms |     495 → 469 | `generate(ReifiedTypeParametersUsages)`                                                                                                                                     | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| -16.1% |  -37.28ms |   6.2% → 5.7% | 231.4ms → 194.2ms |     495 → 469 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                                                                               | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  -8.2% |  -30.14ms |          9.8% | 365.9ms → 335.8ms |         2 → 3 | `invokeCodegen(JvmIrCodegenFactory$CodegenInput)`                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
|  -8.2% |  -30.14ms |          9.8% | 365.9ms → 335.8ms |         2 → 3 | `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`               |
|  -8.2% |  -30.14ms |          9.8% | 365.9ms → 335.8ms |         2 → 3 | `executePhase(JvmFir2IrPipelineArtifact)`                                                                                                                                   | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`                   |
|  -8.2% |  -30.14ms |          9.8% | 365.9ms → 335.8ms |         2 → 3 | `executePhase(PipelineArtifact)`                                                                                                                                            | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`                   |
|  -8.2% |  -30.14ms |          9.8% | 365.9ms → 335.8ms |         2 → 3 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                                              | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                                 |
|  -8.2% |  -30.14ms |          9.8% | 365.9ms → 335.8ms |         2 → 3 | `phaseBody(LoggingContext, Object)`                                                                                                                                         | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                                 |
|  -8.2% |  -30.14ms |          9.8% | 365.9ms → 335.8ms |         2 → 3 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                                                  | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`                           |
|  -8.2% |  -30.14ms |          9.8% | 365.9ms → 335.8ms |         2 → 3 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                                                  | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`                       |
|  -8.2% |  -30.14ms |          9.8% | 365.9ms → 335.8ms |         2 → 3 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                                                                                        | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                              |
|  -8.2% |  -30.14ms |          9.8% | 365.9ms → 335.8ms |         2 → 3 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                                              | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                           |
|  -8.2% |  -30.14ms |          9.8% | 365.9ms → 335.8ms |         2 → 3 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                                                         | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                           |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|  Change |   Delta |             % |            Time | Contentions | Caller                      | Location                                                             |
| ------: | ------: | ------------: | --------------: | ----------: | --------------------------- | -------------------------------------------------------------------- |
| +468.4% | +2.18ms |  2.3% → 10.5% |   0.5ms → 2.6ms |      1 → 19 | `getUnitStats()`            | `org.jetbrains.kotlin.util.PerformanceManager`                       |
|  +11.6% | +1.97ms | 82.4% → 74.8% | 17.0ms → 18.9ms |     49 → 43 | `getMetadataSerializer()`   | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
|  -81.7% | -1.92ms |  11.4% → 1.7% |   2.3ms → 0.4ms |           2 | `getAnnotationSerializer()` | `org.jetbrains.kotlin.fir.serialization.FirSerializerExtension`      |
| +208.4% | +1.58ms |   3.7% → 9.2% |   0.8ms → 2.3ms |          12 | `getAnnotations()`          | `org.jetbrains.kotlin.ir.descriptors.IrBasedDeclarationDescriptor`   |
|     new | +0.92ms |   0.0% → 3.6% |     0ms → 0.9ms |       0 → 2 | `get_defaultType()`         | `org.jetbrains.kotlin.ir.descriptors.IrBasedTypeParameterDescriptor` |

##### `<init>(int, int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                    | Location                                                   |
| ------: | ------: | -----: | ------------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| +154.0% | +3.83ms | 100.0% | 2.5ms → 6.3ms |          20 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

| Change |   Delta |      % |           Time | Contentions | Caller                                                 | Location                                                |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
| +50.4% | +3.71ms | 100.0% | 7.4ms → 11.1ms |          56 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `isDeprecatedHidden(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|  Change |   Delta |      % |          Time | Contentions | Caller                             | Location                                                   |
| ------: | ------: | -----: | ------------: | ----------: | ---------------------------------- | ---------------------------------------------------------- |
| +131.5% | +3.24ms | 100.0% | 2.5ms → 5.7ms |     21 → 19 | `calculateMethodFlags(IrFunction)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `<init>(int, int, String, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`)

|  Change |   Delta |      % |          Time | Contentions | Caller                             | Location                                                   |
| ------: | ------: | -----: | ------------: | ----------: | ---------------------------------- | ---------------------------------------------------------- |
| +189.4% | +2.60ms | 100.0% | 1.4ms → 4.0ms |     14 → 10 | `wrapWithMaxLocalCalc(MethodNode)` | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt` |

##### `wrapWithMaxLocalCalc(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`)

| Change |   Delta |      % |          Time | Contentions | Caller                                    | Location                                                   |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| +89.9% | +2.56ms | 100.0% | 2.8ms → 5.4ms |     23 → 21 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `isDeprecatedHidden(DeclarationDescriptor)` (`org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`)

|  Change |   Delta |      % |          Time | Contentions | Caller                           | Location                                                   |
| ------: | ------: | -----: | ------------: | ----------: | -------------------------------- | ---------------------------------------------------------- |
| +100.2% | +2.22ms | 100.0% | 2.2ms → 4.4ms |     20 → 17 | `isDeprecatedHidden(IrFunction)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `unitStats_delegate$lambda$0(PerformanceManager)` (`org.jetbrains.kotlin.util.PerformanceManager`)

|  Change |   Delta |      % |          Time | Contentions | Caller     | Location                                                                  |
| ------: | ------: | -----: | ------------: | ----------: | ---------- | ------------------------------------------------------------------------- |
| +468.4% | +2.18ms | 100.0% | 0.5ms → 2.6ms |      1 → 19 | `invoke()` | `org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000d00114f238` |

##### `invoke()` (`org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000d00114f238`)

|  Change |   Delta |      % |          Time | Contentions | Caller       | Location                      |
| ------: | ------: | -----: | ------------: | ----------: | ------------ | ----------------------------- |
| +468.4% | +2.18ms | 100.0% | 0.5ms → 2.6ms |      1 → 19 | `getValue()` | `kotlin.SynchronizedLazyImpl` |

##### `getUnitStats()` (`org.jetbrains.kotlin.util.PerformanceManager`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                                                                                            | Location                                               |
| ------: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| +468.4% | +2.18ms | 100.0% | 0.5ms → 2.6ms |      1 → 19 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                                                                                                             | Location                                                       |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| +33.4% | +2.11ms | 100.0% | 6.3ms → 8.4ms |     16 → 14 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt` |

##### `calculateMethodFlags(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |   Delta |      % |          Time | Contentions | Caller                                    | Location                                                   |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| +50.1% | +2.10ms | 100.0% | 4.2ms → 6.3ms |     27 → 22 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackMethodTransformer`)

|  Change |   Delta |      % |          Time | Contentions | Caller                          | Location                                                                           |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------------- | ---------------------------------------------------------------------------------- |
| +106.3% | +2.08ms | 100.0% | 2.0ms → 4.0ms |     15 → 21 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer` |

##### `computeDeprecation(DeclarationDescriptor)` (`org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                              | Location                                                       |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------------- | -------------------------------------------------------------- |
| +93.8% | +2.08ms | 100.0% | 2.2ms → 4.3ms |     20 → 16 | `deprecations$lambda$0(DeprecationResolver, DeclarationDescriptor)` | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver` |

##### `deprecations$lambda$0(DeprecationResolver, DeclarationDescriptor)` (`org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`)

| Change |   Delta |      % |          Time | Contentions | Caller           | Location                                                                                  |
| -----: | ------: | -----: | ------------: | ----------: | ---------------- | ----------------------------------------------------------------------------------------- |
| +93.8% | +2.08ms | 100.0% | 2.2ms → 4.3ms |     20 → 16 | `invoke(Object)` | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver$$Lambda.0x000000d001817050` |

##### `invoke(Object)` (`org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver$$Lambda.0x000000d001817050`)

| Change |   Delta |      % |          Time | Contentions | Caller           | Location                                                                        |
| -----: | ------: | -----: | ------------: | ----------: | ---------------- | ------------------------------------------------------------------------------- |
| +93.8% | +2.08ms | 100.0% | 2.2ms → 4.3ms |     20 → 16 | `invoke(Object)` | `org.jetbrains.kotlin.storage.LockBasedStorageManager$MapBasedMemoizedFunction` |

##### `invoke(Object)` (`org.jetbrains.kotlin.storage.LockBasedStorageManager$MapBasedMemoizedFunction`)

| Change |   Delta |      % |          Time | Contentions | Caller           | Location                                                                                 |
| -----: | ------: | -----: | ------------: | ----------: | ---------------- | ---------------------------------------------------------------------------------------- |
| +93.8% | +2.08ms | 100.0% | 2.2ms → 4.3ms |     20 → 16 | `invoke(Object)` | `org.jetbrains.kotlin.storage.LockBasedStorageManager$MapBasedMemoizedFunctionToNotNull` |

##### `invoke(Object)` (`org.jetbrains.kotlin.storage.LockBasedStorageManager$MapBasedMemoizedFunctionToNotNull`)

| Change |   Delta |      % |          Time | Contentions | Caller                                   | Location                                                       |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------- | -------------------------------------------------------------- |
| +93.8% | +2.08ms | 100.0% | 2.2ms → 4.3ms |     20 → 16 | `getDeprecations(DeclarationDescriptor)` | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver` |

##### `getDeprecations(DeclarationDescriptor)` (`org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`)

| Change |   Delta |      % |          Time | Contentions | Caller                                      | Location                                                       |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------- | -------------------------------------------------------------- |
| +93.8% | +2.08ms | 100.0% | 2.2ms → 4.3ms |     20 → 16 | `isDeprecatedHidden(DeclarationDescriptor)` | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver` |

##### `addDeprecationIfPresent(DeclarationDescriptor, List)` (`org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`)

| Change |   Delta |      % |          Time | Contentions | Caller                                      | Location                                                       |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------- | -------------------------------------------------------------- |
| +95.6% | +2.07ms | 100.0% | 2.2ms → 4.2ms |     19 → 15 | `getOwnDeprecations(DeclarationDescriptor)` | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver` |

##### `desiredAssertionStatus()` (`java.lang.Class`)

|  Change |   Delta |             % |           Time | Contentions | Caller       | Location                                                          |
| ------: | ------: | ------------: | -------------: | ----------: | ------------ | ----------------------------------------------------------------- |
| +369.7% | +1.12ms | 89.8% → 75.4% |  0.3ms → 1.4ms |           1 | `<clinit>()` | `org.jetbrains.kotlin.codegen.inline.RemapVisitor`                |
| +640.7% | +0.22ms | 10.2% → 13.5% | 34.3µs → 0.3ms |           1 | `<clinit>()` | `org.jetbrains.kotlin.codegen.inline.InternalFinallyBlockInliner` |
|     new | +0.20ms |  0.0% → 10.4% |    0ms → 0.2ms |       0 → 1 | `<clinit>()` | `org.jetbrains.kotlin.codegen.StackValue`                         |
|     new | +0.01ms |   0.0% → 0.8% |   0ms → 14.9µs |       0 → 1 | `<clinit>()` | `org.jetbrains.kotlin.codegen.inline.NameGenerator`               |

##### `acquireInterruptibly(int)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer`)

|  Change |   Delta |      % |          Time | Contentions | Caller                | Location                                        |
| ------: | ------: | -----: | ------------: | ----------: | --------------------- | ----------------------------------------------- |
| +169.8% | +0.15ms | 100.0% | 0.1ms → 0.2ms |       1 → 3 | `lockInterruptibly()` | `java.util.concurrent.locks.ReentrantLock$Sync` |

##### `lockInterruptibly()` (`java.util.concurrent.locks.ReentrantLock$Sync`)

|  Change |   Delta |      % |          Time | Contentions | Caller                | Location                                   |
| ------: | ------: | -----: | ------------: | ----------: | --------------------- | ------------------------------------------ |
| +169.8% | +0.15ms | 100.0% | 0.1ms → 0.2ms |       1 → 3 | `lockInterruptibly()` | `java.util.concurrent.locks.ReentrantLock` |

##### `lockInterruptibly()` (`java.util.concurrent.locks.ReentrantLock`)

|  Change |   Delta |      % |          Time | Contentions | Caller   | Location                                   |
| ------: | ------: | -----: | ------------: | ----------: | -------- | ------------------------------------------ |
| +169.8% | +0.15ms | 100.0% | 0.1ms → 0.2ms |       1 → 3 | `take()` | `java.util.concurrent.LinkedBlockingQueue` |

##### `periodicTask()` (`jdk.jfr.internal.PlatformRecorder`)

| Change |   Delta |             % |        Time | Contentions | Caller                        | Location                            |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------- | ----------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 7.2µs |       0 → 1 | `lambda$startDiskMonitor$1()` | `jdk.jfr.internal.PlatformRecorder` |

##### `lambda$startDiskMonitor$1()` (`jdk.jfr.internal.PlatformRecorder`)

| Change |   Delta |             % |        Time | Contentions | Caller  | Location                                                       |
| -----: | ------: | ------------: | ----------: | ----------: | ------- | -------------------------------------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 7.2µs |       0 → 1 | `run()` | `jdk.jfr.internal.PlatformRecorder$$Lambda.0x000000d001042ce0` |

##### `run()` (`jdk.jfr.internal.PlatformRecorder$$Lambda.0x000000d001042ce0`)

| Change |   Delta |             % |        Time | Contentions | Caller                      | Location           |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------------- | ------------------ |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 7.2µs |       0 → 1 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `getOwnDeprecations(DeclarationDescriptor)` (`org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`)

| Change |   Delta |      % |          Time | Contentions | Caller                                      | Location                                                       |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------- | -------------------------------------------------------------- |
| +95.6% | +2.07ms | 100.0% | 2.2ms → 4.2ms |     19 → 15 | `computeDeprecation(DeclarationDescriptor)` | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |     Delta |      % |          Time |   Contentions | Caller  | Location           |
| -----: | --------: | -----: | ------------: | ------------: | ------- | ------------------ |
|  -8.5% | -287.54ms | 100.0% | 3.37s → 3.08s | 1,169 → 1,236 | `run()` | `java.lang.Thread` |

##### `run()` (`java.lang.Thread`)

| Change |    Delta |             % |              Time | Contentions | Caller  | Location                            |
| -----: | -------: | ------------: | ----------------: | ----------: | ------- | ----------------------------------- |
|  -4.8% | -23.60ms | 14.7% → 15.3% | 495.4ms → 471.8ms |           2 | `run()` | `jdk.internal.misc.InnocuousThread` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

| Change |     Delta |      % |          Time |   Contentions | Caller  | Location                                         |
| -----: | --------: | -----: | ------------: | ------------: | ------- | ------------------------------------------------ |
|  -9.2% | -263.95ms | 100.0% | 2.88s → 2.61s | 1,167 → 1,233 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

| Change |     Delta |      % |          Time |   Contentions | Caller                      | Location           |
| -----: | --------: | -----: | ------------: | ------------: | --------------------------- | ------------------ |
|  -9.2% | -263.95ms | 100.0% | 2.88s → 2.61s | 1,167 → 1,233 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |     Delta |      % |          Time | Contentions | Caller                                                   | Location                                               |
| -----: | --------: | -----: | ------------: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
| -15.6% | -228.18ms | 100.0% | 1.45s → 1.23s |   862 → 821 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |     Delta |      % |          Time |   Contentions | Caller                                                                                                            | Location                                               |
| -----: | --------: | -----: | ------------: | ------------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| -14.9% | -228.02ms | 100.0% | 1.53s → 1.30s | 1,131 → 1,186 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |     Delta |      % |          Time |   Contentions | Caller  | Location                                                                          |
| -----: | --------: | -----: | ------------: | ------------: | ------- | --------------------------------------------------------------------------------- |
| -14.7% | -225.85ms | 100.0% | 1.53s → 1.30s | 1,132 → 1,205 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8` |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`)

| Change |     Delta |      % |          Time |   Contentions | Caller  | Location                                          |
| -----: | --------: | -----: | ------------: | ------------: | ------- | ------------------------------------------------- |
| -14.7% | -225.85ms | 100.0% | 1.53s → 1.30s | 1,132 → 1,205 | `run()` | `java.util.concurrent.CompletableFuture$AsyncRun` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

| Change |     Delta |      % |          Time |   Contentions | Caller                                 | Location                                  |
| -----: | --------: | -----: | ------------: | ------------: | -------------------------------------- | ----------------------------------------- |
| -14.7% | -225.85ms | 100.0% | 1.53s → 1.30s | 1,132 → 1,205 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |     Delta |      % |          Time | Contentions | Caller       | Location                                                |
| -----: | --------: | -----: | ------------: | ----------: | ------------ | ------------------------------------------------------- |
| -15.3% | -219.82ms | 100.0% | 1.44s → 1.22s |   827 → 789 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |     Delta |      % |            Time | Contentions | Caller                                      | Location                                                             |
| -----: | --------: | -----: | --------------: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| -15.5% | -210.92ms | 100.0% |   1.36s → 1.15s |   578 → 561 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
| -14.4% |   -9.19ms |   4.7% | 63.8ms → 54.6ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |    Delta |             % |              Time | Contentions | Caller                    | Location                                 |
| -----: | -------: | ------------: | ----------------: | ----------: | ------------------------- | ---------------------------------------- |
|  -2.8% | -38.08ms | 61.0% → 61.8% |     1.34s → 1.30s |     26 → 20 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
|  -8.2% | -30.14ms | 16.6% → 15.9% | 366.5ms → 336.3ms |          10 | `park(Object)`            | `java.util.concurrent.locks.LockSupport` |
|  -4.8% | -23.63ms | 22.4% → 22.3% | 495.8ms → 472.2ms |           3 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

| Change |    Delta |      % |          Time | Contentions | Caller                                      | Location                            |
| -----: | -------: | -----: | ------------: | ----------: | ------------------------------------------- | ----------------------------------- |
|  -4.0% | -68.19ms | 100.0% | 1.71s → 1.64s |     27 → 22 | `managedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool` |

##### `managedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

| Change |    Delta |             % |              Time | Contentions | Caller                | Location                                                                |
| -----: | -------: | ------------: | ----------------: | ----------: | --------------------- | ----------------------------------------------------------------------- |
|  -2.8% | -38.08ms | 78.7% → 79.6% |     1.34s → 1.30s |     26 → 20 | `await()`             | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
|  -8.2% | -30.11ms | 21.3% → 20.4% | 365.4ms → 335.3ms |       1 → 2 | `waitingGet(boolean)` | `java.util.concurrent.CompletableFuture`                                |

##### `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

| Change |    Delta |      % |          Time | Contentions | Caller   | Location                                   |
| -----: | -------: | -----: | ------------: | ----------: | -------- | ------------------------------------------ |
|  -2.8% | -38.22ms | 100.0% | 1.34s → 1.30s |     33 → 25 | `take()` | `java.util.concurrent.LinkedBlockingQueue` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change |    Delta |      % |          Time | Contentions | Caller    | Location                                                              |
| -----: | -------: | -----: | ------------: | ----------: | --------- | --------------------------------------------------------------------- |
|  -2.8% | -38.08ms | 100.0% | 1.34s → 1.30s |     26 → 20 | `block()` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode` |

##### `block()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`)

| Change |    Delta |      % |          Time | Contentions | Caller                                        | Location                            |
| -----: | -------: | -----: | ------------: | ----------: | --------------------------------------------- | ----------------------------------- |
|  -2.8% | -38.08ms | 100.0% | 1.34s → 1.30s |     26 → 20 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool` |

##### `take()` (`java.util.concurrent.LinkedBlockingQueue`)

| Change |    Delta |      % |          Time | Contentions | Caller      | Location                                  |
| -----: | -------: | -----: | ------------: | ----------: | ----------- | ----------------------------------------- |
|  -2.8% | -38.07ms | 100.0% | 1.34s → 1.31s |     34 → 28 | `getTask()` | `java.util.concurrent.ThreadPoolExecutor` |

##### `getTask()` (`java.util.concurrent.ThreadPoolExecutor`)

| Change |    Delta |      % |          Time | Contentions | Caller                                 | Location                                  |
| -----: | -------: | -----: | ------------: | ----------: | -------------------------------------- | ----------------------------------------- |
|  -2.8% | -38.07ms | 100.0% | 1.34s → 1.31s |     34 → 28 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                                  | Location                                                   |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| -16.1% | -37.28ms | 100.0% | 231.4ms → 194.2ms |   495 → 469 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000d001001800`)

| Change |    Delta |      % |              Time | Contentions | Caller                           | Location                                            |
| -----: | -------: | -----: | ----------------: | ----------: | -------------------------------- | --------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000d00100e000` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000d00100e000`)

| Change |    Delta |      % |              Time | Contentions | Caller                                           | Location                           |
| -----: | -------: | -----: | ----------------: | ----------: | ------------------------------------------------ | ---------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |    Delta |      % |              Time | Contentions | Caller                         | Location                                          |
| -----: | -------: | -----: | ----------------: | ----------: | ------------------------------ | ------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |    Delta |      % |              Time | Contentions | Caller                     | Location                                          |
| -----: | -------: | -----: | ----------------: | ----------: | -------------------------- | ------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |    Delta |      % |              Time | Contentions | Caller                     | Location                   |
| -----: | -------: | -----: | ----------------: | ----------: | -------------------------- | -------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `invoke(Object, Object[])` | `java.lang.reflect.Method` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |    Delta |      % |              Time | Contentions | Caller          | Location                                    |
| -----: | -------: | -----: | ----------------: | ----------: | --------------- | ------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `park(Object)` (`java.util.concurrent.locks.LockSupport`)

| Change |    Delta |     % |              Time | Contentions | Caller                                                                           | Location                                                |
| -----: | -------: | ----: | ----------------: | ----------: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  -8.2% | -30.11ms | 99.7% | 365.4ms → 335.3ms |       1 → 2 | `block()`                                                                        | `java.util.concurrent.CompletableFuture$Signaller`      |
|  -2.6% |  -0.03ms |  0.3% |             1.0ms |       9 → 8 | `acquire(AbstractQueuedSynchronizer$Node, int, boolean, boolean, boolean, long)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                                                                        | Location                                                   |
| -----: | -------: | -----: | ----------------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| -16.1% | -37.28ms | 100.0% | 231.4ms → 194.2ms |   495 → 469 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                           | Location                                                |
| -----: | -------: | -----: | ----------------: | ----------: | -------------------------------- | ------------------------------------------------------- |
| -16.1% | -37.28ms | 100.0% | 231.4ms → 194.2ms |   495 → 469 | `generateMethodNode(IrFunction)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |    Delta |      % |              Time | Contentions | Caller                                                                                                                                                                      | Location                                                            |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler` |

##### `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`)

| Change |    Delta |      % |              Time | Contentions | Caller                                    | Location                                                        |
| -----: | -------: | -----: | ----------------: | ----------: | ----------------------------------------- | --------------------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `executePhase(JvmFir2IrPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |

##### `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

| Change |    Delta |      % |              Time | Contentions | Caller                           | Location                                                        |
| -----: | -------: | -----: | ----------------: | ----------: | -------------------------------- | --------------------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |

##### `executePhase(PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

| Change |    Delta |      % |              Time | Contentions | Caller                                         | Location                                          |
| -----: | -------: | -----: | ----------------: | ----------: | ---------------------------------------------- | ------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change |    Delta |      % |              Time | Contentions | Caller                              | Location                                          |
| -----: | -------: | -----: | ----------------: | ----------: | ----------------------------------- | ------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change |    Delta |      % |              Time | Contentions | Caller                                                     | Location                                                |
| -----: | -------: | -----: | ----------------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

| Change |    Delta |      % |              Time | Contentions | Caller                                                     | Location                                                    |
| -----: | -------: | -----: | ----------------: | ----------: | ---------------------------------------------------------- | ----------------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

| Change |    Delta |      % |              Time | Contentions | Caller                                                               | Location                                             |
| -----: | -------: | -----: | ----------------: | ----------: | -------------------------------------------------------------------- | ---------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

| Change |    Delta |      % |              Time | Contentions | Caller                                         | Location                                                |
| -----: | -------: | -----: | ----------------: | ----------: | ---------------------------------------------- | ------------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change |    Delta |      % |              Time | Contentions | Caller                                                                                              | Location                                                |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change |    Delta |      % |              Time | Contentions | Caller                                                                                                                                        | Location                                                |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|  Change |   Delta |             % |            Time | Contentions | Callee     | Location                                                                                   |
| ------: | ------: | ------------: | --------------: | ----------: | ---------- | ------------------------------------------------------------------------------------------ |
| +468.4% | +2.18ms |  2.3% → 10.5% |   0.5ms → 2.6ms |      1 → 19 | `invoke()` | `org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000d00114f238`                  |
|  +11.6% | +1.97ms | 82.4% → 74.8% | 17.0ms → 18.9ms |     49 → 43 | `invoke()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000d0018b6300`         |
|  -81.7% | -1.92ms |  11.4% → 1.7% |   2.3ms → 0.4ms |           2 | `invoke()` | `org.jetbrains.kotlin.fir.serialization.FirSerializerExtension$$Lambda.0x000000d0019052d8` |
| +208.4% | +1.58ms |   3.7% → 9.2% |   0.8ms → 2.3ms |          12 | `invoke()` | `org.jetbrains.kotlin.ir.descriptors.IrBasedDeclarationDescriptor$annotations$2`           |
|     new | +0.92ms |   0.0% → 3.6% |     0ms → 0.9ms |       0 → 2 | `invoke()` | `org.jetbrains.kotlin.ir.descriptors.IrBasedTypeParameterDescriptor$$Lambda`               |

##### `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

| Change |   Delta |             % |          Time | Contentions | Callee                             | Location                                                     |
| -----: | ------: | ------------: | ------------: | ----------: | ---------------------------------- | ------------------------------------------------------------ |
| +25.3% | +0.78ms | 42.0% → 35.0% | 3.1ms → 3.9ms |     25 → 21 | `<init>(BothSignatureWriter$Mode)` | `org.jetbrains.kotlin.codegen.signature.BothSignatureWriter` |

##### `isDeprecatedHidden(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|  Change |   Delta |             % |           Time | Contentions | Callee                                             | Location                                                       |
| ------: | ------: | ------------: | -------------: | ----------: | -------------------------------------------------- | -------------------------------------------------------------- |
| +100.2% | +2.22ms | 89.9% → 77.7% |  2.2ms → 4.4ms |     20 → 17 | `isDeprecatedHidden(DeclarationDescriptor)`        | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver` |
|     new | +1.22ms |  0.0% → 21.4% |    0ms → 1.2ms |       0 → 1 | `allOverridden(IrOverridableDeclaration, boolean)` | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                       |
|  -80.9% | -0.20ms |  10.1% → 0.8% | 0.2ms → 47.5µs |           1 | `toIrBasedDescriptor(IrFunction)`                  | `org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt`     |

##### `<init>(int, int, String, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`)

|  Change |   Delta |           % |        Time | Contentions | Callee       | Location                                        |
| ------: | ------: | ----------: | ----------: | ----------: | ------------ | ----------------------------------------------- |
| removed | -0.10ms | 7.5% → 0.0% | 0.1ms → 0ms |       1 → 0 | `<clinit>()` | `org.jetbrains.kotlin.utils.SmartIdentityTable` |

##### `wrapWithMaxLocalCalc(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`)

|  Change |   Delta |             % |          Time | Contentions | Callee                                    | Location                                                                   |
| ------: | ------: | ------------: | ------------: | ----------: | ----------------------------------------- | -------------------------------------------------------------------------- |
| +189.4% | +2.60ms | 48.2% → 73.5% | 1.4ms → 4.0ms |     14 → 10 | `<init>(int, int, String, MethodVisitor)` | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator` |
| +130.4% | +0.13ms |   3.4% → 4.1% | 0.1ms → 0.2ms |           1 | `<clinit>()`                              | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator` |

##### `isDeprecatedHidden(DeclarationDescriptor)` (`org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`)

| Change |   Delta |              % |          Time | Contentions | Callee                                   | Location                                                                             |
| -----: | ------: | -------------: | ------------: | ----------: | ---------------------------------------- | ------------------------------------------------------------------------------------ |
| +93.8% | +2.08ms | 100.0% → 96.8% | 2.2ms → 4.3ms |     20 → 16 | `getDeprecations(DeclarationDescriptor)` | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`                       |
|    new | +0.14ms |    0.0% → 3.2% |   0ms → 0.1ms |       0 → 1 | `getDeprecationLevel()`                  | `org.jetbrains.kotlin.resolve.deprecation.DeprecatedByAnnotation$StandardDeprecated` |

##### `unitStats_delegate$lambda$0(PerformanceManager)` (`org.jetbrains.kotlin.util.PerformanceManager`)

| Change |   Delta |            % |         Time | Contentions | Callee                                 | Location                                                    |
| -----: | ------: | -----------: | -----------: | ----------: | -------------------------------------- | ----------------------------------------------------------- |
|    new | +0.80ms | 0.0% → 30.4% |  0ms → 0.8ms |       0 → 6 | `getPlatformEnumValue(TargetPlatform)` | `org.jetbrains.kotlin.util.PerformanceManager`              |
|    new | +0.05ms |  0.0% → 1.9% | 0ms → 49.7µs |       0 → 1 | `<clinit>()`                           | `org.jetbrains.kotlin.util.PerformanceManager$WhenMappings` |

##### `invoke()` (`org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000d00114f238`)

|  Change |   Delta |      % |          Time | Contentions | Callee                                            | Location                                       |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------------------------------- | ---------------------------------------------- |
| +468.4% | +2.18ms | 100.0% | 0.5ms → 2.6ms |      1 → 19 | `unitStats_delegate$lambda$0(PerformanceManager)` | `org.jetbrains.kotlin.util.PerformanceManager` |

##### `getUnitStats()` (`org.jetbrains.kotlin.util.PerformanceManager`)

|  Change |   Delta |      % |          Time | Contentions | Callee       | Location                      |
| ------: | ------: | -----: | ------------: | ----------: | ------------ | ----------------------------- |
| +468.4% | +2.18ms | 100.0% | 0.5ms → 2.6ms |      1 → 19 | `getValue()` | `kotlin.SynchronizedLazyImpl` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

| Change |   Delta |             % |          Time | Contentions | Callee                                                                                                                                                                                                      | Location                                                                |
| -----: | ------: | ------------: | ------------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| +10.5% | +0.24ms | 36.2% → 30.0% | 2.3ms → 2.5ms |       7 → 6 | `createTopLevel$default(FirElementSerializer$Companion, FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean, int, Object)`                         | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion` |
| -10.7% | -0.12ms | 18.1% → 12.1% | 1.1ms → 1.0ms |       5 → 2 | `create$default(FirElementSerializer$Companion, FirSession, ScopeSession, FirClass, FirSerializerExtension, FirElementSerializer, AbstractTypeApproximator, LanguageVersionSettings, boolean, int, Object)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion` |
| -43.7% | -0.05ms |   2.0% → 0.8% |         0.1ms |           1 | `<clinit>()`                                                                                                                                                                                                | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer`           |

##### `calculateMethodFlags(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|  Change |   Delta |             % |          Time | Contentions | Callee                           | Location                                                   |
| ------: | ------: | ------------: | ------------: | ----------: | -------------------------------- | ---------------------------------------------------------- |
| +131.5% | +3.24ms | 58.8% → 90.7% | 2.5ms → 5.7ms |     21 → 19 | `isDeprecatedHidden(IrFunction)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackMethodTransformer`)

|  Change |   Delta |             % |          Time | Contentions | Callee                                                                       | Location                                                                       |
| ------: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| +238.0% | +1.44ms | 30.9% → 50.7% | 0.6ms → 2.0ms |           3 | `analyzeAndTransformBreakContinueGotos(FixStackContext, String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackMethodTransformer` |
| +118.9% | +0.99ms | 42.6% → 45.2% | 0.8ms → 1.8ms |      8 → 16 | `<init>(MethodNode)`                                                         | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackContext`           |
|  -71.4% | -0.29ms |  21.1% → 2.9% | 0.4ms → 0.1ms |       3 → 1 | `analyzeAndTransformSaveRestoreStack(FixStackContext, String, MethodNode)`   | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackMethodTransformer` |

##### `computeDeprecation(DeclarationDescriptor)` (`org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`)

| Change |   Delta |             % |          Time | Contentions | Callee                                      | Location                                                                       |
| -----: | ------: | ------------: | ------------: | ----------: | ------------------------------------------- | ------------------------------------------------------------------------------ |
| +95.6% | +2.07ms | 97.7% → 98.6% | 2.2ms → 4.2ms |     19 → 15 | `getOwnDeprecations(DeclarationDescriptor)` | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`                 |
| +16.8% | +0.01ms |   2.3% → 1.4% |         0.1ms |           1 | `<clinit>()`                                | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver$DeprecationInfo` |

##### `deprecations$lambda$0(DeprecationResolver, DeclarationDescriptor)` (`org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`)

| Change |   Delta |      % |          Time | Contentions | Callee                                      | Location                                                       |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------- | -------------------------------------------------------------- |
| +93.8% | +2.08ms | 100.0% | 2.2ms → 4.3ms |     20 → 16 | `computeDeprecation(DeclarationDescriptor)` | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver` |

##### `invoke(Object)` (`org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver$$Lambda.0x000000d001817050`)

| Change |   Delta |      % |          Time | Contentions | Callee                                                              | Location                                                       |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------------- | -------------------------------------------------------------- |
| +93.8% | +2.08ms | 100.0% | 2.2ms → 4.3ms |     20 → 16 | `deprecations$lambda$0(DeprecationResolver, DeclarationDescriptor)` | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver` |

##### `invoke(Object)` (`org.jetbrains.kotlin.storage.LockBasedStorageManager$MapBasedMemoizedFunction`)

| Change |   Delta |      % |          Time | Contentions | Callee           | Location                                                                                  |
| -----: | ------: | -----: | ------------: | ----------: | ---------------- | ----------------------------------------------------------------------------------------- |
| +93.8% | +2.08ms | 100.0% | 2.2ms → 4.3ms |     20 → 16 | `invoke(Object)` | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver$$Lambda.0x000000d001817050` |

##### `invoke(Object)` (`org.jetbrains.kotlin.storage.LockBasedStorageManager$MapBasedMemoizedFunctionToNotNull`)

| Change |   Delta |      % |          Time | Contentions | Callee           | Location                                                                        |
| -----: | ------: | -----: | ------------: | ----------: | ---------------- | ------------------------------------------------------------------------------- |
| +93.8% | +2.08ms | 100.0% | 2.2ms → 4.3ms |     20 → 16 | `invoke(Object)` | `org.jetbrains.kotlin.storage.LockBasedStorageManager$MapBasedMemoizedFunction` |

##### `getDeprecations(DeclarationDescriptor)` (`org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`)

| Change |   Delta |      % |          Time | Contentions | Callee           | Location                                                                                 |
| -----: | ------: | -----: | ------------: | ----------: | ---------------- | ---------------------------------------------------------------------------------------- |
| +93.8% | +2.08ms | 100.0% | 2.2ms → 4.3ms |     20 → 16 | `invoke(Object)` | `org.jetbrains.kotlin.storage.LockBasedStorageManager$MapBasedMemoizedFunctionToNotNull` |

##### `addDeprecationIfPresent(DeclarationDescriptor, List)` (`org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`)

|  Change |   Delta |             % |          Time | Contentions | Callee                                                                                           | Location                                                                    |
| ------: | ------: | ------------: | ------------: | ----------: | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| +208.4% | +1.58ms | 35.0% → 55.2% | 0.8ms → 2.3ms |          12 | `getAnnotations()`                                                                               | `org.jetbrains.kotlin.ir.descriptors.IrBasedDeclarationDescriptor`          |
| +549.3% | +1.18ms |  9.9% → 32.9% | 0.2ms → 1.4ms |           1 | `<clinit>()`                                                                                     | `org.jetbrains.kotlin.resolve.deprecation.DeprecatedByAnnotation`           |
|  -89.1% | -0.50ms |  26.2% → 1.5% | 0.6ms → 0.1ms |           1 | `getDeprecationFromUserData(DeclarationDescriptor)`                                              | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`              |
| +259.7% | +0.32ms |  5.7% → 10.5% | 0.1ms → 0.4ms |       2 → 1 | `findAnnotation(FqName)`                                                                         | `org.jetbrains.kotlin.descriptors.annotations.AnnotationsImpl`              |
| removed | -0.21µs |  <0.1% → 0.0% |   0.2µs → 0ms |       1 → 0 | `create(AnnotationDescriptor, AnnotationDescriptor, DeclarationDescriptor, boolean, ApiVersion)` | `org.jetbrains.kotlin.resolve.deprecation.DeprecatedByAnnotation$Companion` |

##### `acquireInterruptibly(int)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer`)

|  Change |   Delta |      % |          Time | Contentions | Callee                                                                           | Location                                                |
| ------: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +169.8% | +0.15ms | 100.0% | 0.1ms → 0.2ms |       1 → 3 | `acquire(AbstractQueuedSynchronizer$Node, int, boolean, boolean, boolean, long)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |

##### `lockInterruptibly()` (`java.util.concurrent.locks.ReentrantLock$Sync`)

|  Change |   Delta |      % |          Time | Contentions | Callee                      | Location                                                |
| ------: | ------: | -----: | ------------: | ----------: | --------------------------- | ------------------------------------------------------- |
| +169.8% | +0.15ms | 100.0% | 0.1ms → 0.2ms |       1 → 3 | `acquireInterruptibly(int)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |

##### `lockInterruptibly()` (`java.util.concurrent.locks.ReentrantLock`)

|  Change |   Delta |      % |          Time | Contentions | Callee                | Location                                        |
| ------: | ------: | -----: | ------------: | ----------: | --------------------- | ----------------------------------------------- |
| +169.8% | +0.15ms | 100.0% | 0.1ms → 0.2ms |       1 → 3 | `lockInterruptibly()` | `java.util.concurrent.locks.ReentrantLock$Sync` |

##### `lambda$startDiskMonitor$1()` (`jdk.jfr.internal.PlatformRecorder`)

| Change |   Delta |             % |        Time | Contentions | Callee           | Location                            |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------- | ----------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 7.2µs |       0 → 1 | `periodicTask()` | `jdk.jfr.internal.PlatformRecorder` |

##### `run()` (`jdk.jfr.internal.PlatformRecorder$$Lambda.0x000000d001042ce0`)

| Change |   Delta |             % |        Time | Contentions | Callee                        | Location                            |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------- | ----------------------------------- |
|    new | +0.01ms | 0.0% → 100.0% | 0ms → 7.2µs |       0 → 1 | `lambda$startDiskMonitor$1()` | `jdk.jfr.internal.PlatformRecorder` |

##### `getOwnDeprecations(DeclarationDescriptor)` (`org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`)

| Change |   Delta |      % |          Time | Contentions | Callee                                                 | Location                                                       |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------ | -------------------------------------------------------------- |
| +95.6% | +2.07ms | 100.0% | 2.2ms → 4.2ms |     19 → 15 | `addDeprecationIfPresent(DeclarationDescriptor, List)` | `org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |     Delta |             % |              Time |   Contentions | Callee  | Location                                                       |
| -----: | --------: | ------------: | ----------------: | ------------: | ------- | -------------------------------------------------------------- |
|  -9.2% | -263.95ms | 85.3% → 84.7% |     2.88s → 2.61s | 1,167 → 1,233 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker`               |
|  -4.8% |  -23.60ms | 14.7% → 15.3% | 495.4ms → 471.8ms |             2 | `run()` | `jdk.internal.ref.CleanerImpl`                                 |
|    new |   +0.01ms |  0.0% → <0.1% |       0ms → 7.2µs |         0 → 1 | `run()` | `jdk.jfr.internal.PlatformRecorder$$Lambda.0x000000d001042ce0` |

##### `run()` (`java.lang.Thread`)

| Change |     Delta |      % |          Time |   Contentions | Callee                      | Location           |
| -----: | --------: | -----: | ------------: | ------------: | --------------------------- | ------------------ |
|  -8.5% | -287.54ms | 100.0% | 3.37s → 3.08s | 1,169 → 1,236 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|  Change |     Delta |             % |          Time |   Contentions | Callee                                                  | Location                                          |
| ------: | --------: | ------------: | ------------: | ------------: | ------------------------------------------------------- | ------------------------------------------------- |
|  -14.7% | -225.85ms | 53.2% → 50.0% | 1.53s → 1.30s | 1,132 → 1,205 | `run()`                                                 | `java.util.concurrent.CompletableFuture$AsyncRun` |
|   -2.8% |  -38.07ms | 46.8% → 50.0% | 1.34s → 1.31s |       34 → 28 | `getTask()`                                             | `java.util.concurrent.ThreadPoolExecutor`         |
| removed |   -0.03ms |  <0.1% → 0.0% |  26.6µs → 0ms |         1 → 0 | `processWorkerExit(ThreadPoolExecutor$Worker, boolean)` | `java.util.concurrent.ThreadPoolExecutor`         |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

| Change |     Delta |      % |          Time |   Contentions | Callee                                 | Location                                  |
| -----: | --------: | -----: | ------------: | ------------: | -------------------------------------- | ----------------------------------------- |
|  -9.2% | -263.95ms | 100.0% | 2.88s → 2.61s | 1,167 → 1,233 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |     Delta |             % |           Time | Contentions | Callee                                                  | Location                                                |
| -----: | --------: | ------------: | -------------: | ----------: | ------------------------------------------------------- | ------------------------------------------------------- |
| -15.3% | -219.82ms | 98.8% → 99.2% |  1.44s → 1.22s |   827 → 789 | `generateMethod(IrFunction, SourceMapper)`              | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| -54.9% |   -9.28ms |   1.2% → 0.6% | 16.9ms → 7.6ms |          25 | `generateAnnotations()`                                 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
|    new |   +1.29ms |   0.0% → 0.1% |    0ms → 1.3ms |       0 → 3 | `generateField(IrField)`                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| -79.6% |   -0.38ms |         <0.1% |  0.5ms → 0.1ms |       9 → 1 | `shouldSkipCodeGenerationAccordingToGenerationFilter()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
|    new |   +0.07ms |  0.0% → <0.1% |    0ms → 0.1ms |       0 → 1 | `generateInnerAndOuterClasses()`                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |     Delta |             % |            Time | Contentions | Callee                                                                                                   | Location                                                          |
| -----: | --------: | ------------: | --------------: | ----------: | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| -15.6% | -228.18ms | 95.2% → 94.3% |   1.45s → 1.23s |   862 → 821 | `generate()`                                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`           |
|  -1.4% |   -0.95ms |   4.3% → 5.0% | 66.1ms → 65.2ms |   249 → 346 | `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|  Change |     Delta |              % |          Time |   Contentions | Callee                                                   | Location                                               |
| ------: | --------: | -------------: | ------------: | ------------: | -------------------------------------------------------- | ------------------------------------------------------ |
|  -14.9% | -228.02ms | 100.0% → 99.8% | 1.53s → 1.30s | 1,131 → 1,186 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |
| +468.4% |   +2.18ms |   <0.1% → 0.2% | 0.5ms → 2.6ms |        1 → 19 | `getUnitStats()`                                         | `org.jetbrains.kotlin.util.PerformanceManager`         |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`)

| Change |     Delta |      % |          Time |   Contentions | Callee                                                                                                            | Location                                               |
| -----: | --------: | -----: | ------------: | ------------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| -14.7% | -225.85ms | 100.0% | 1.53s → 1.30s | 1,132 → 1,205 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

| Change |     Delta |      % |          Time |   Contentions | Callee  | Location                                                                          |
| -----: | --------: | -----: | ------------: | ------------: | ------- | --------------------------------------------------------------------------------- |
| -14.7% | -225.85ms | 100.0% | 1.53s → 1.30s | 1,132 → 1,205 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |     Delta |             % |            Time | Contentions | Callee                                                                   | Location                                                            |
| -----: | --------: | ------------: | --------------: | ----------: | ------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| -15.5% | -210.92ms | 94.7% → 94.5% |   1.36s → 1.15s |   578 → 561 | `generateMethodNode(IrFunction)`                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`             |
| -41.4% |  -12.57ms |   2.1% → 1.5% | 30.3ms → 17.8ms |     68 → 67 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.DelegatingClassBuilder`               |
| +11.6% |   +1.97ms |   1.2% → 1.5% | 17.0ms → 18.9ms |     49 → 43 | `getMetadataSerializer()`                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`             |
| +11.7% |   +1.11ms |   0.7% → 0.9% |  9.5ms → 10.7ms |      10 → 8 | `<init>(SourceMapper, SMAP, MethodVisitor)`                              | `org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor` |
| +59.6% |   +0.34ms |  <0.1% → 0.1% |   0.6ms → 0.9ms |       7 → 6 | `bindMethodMetadata(MetadataSource$Function, Method)`                    | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`        |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |    Delta |             % |              Time | Contentions | Callee                                                                        | Location                                                   |
| -----: | -------: | ------------: | ----------------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| -16.1% | -37.28ms | 17.0% → 16.8% | 231.4ms → 194.2ms |   495 → 469 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

| Change |    Delta |             % |              Time | Contentions | Callee    | Location                                                              |
| -----: | -------: | ------------: | ----------------: | ----------: | --------- | --------------------------------------------------------------------- |
|  -2.8% | -38.08ms | 78.7% → 79.6% |     1.34s → 1.30s |     26 → 20 | `block()` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode` |
|  -8.2% | -30.11ms | 21.3% → 20.4% | 365.4ms → 335.3ms |       1 → 2 | `block()` | `java.util.concurrent.CompletableFuture$Signaller`                    |

##### `managedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

| Change |    Delta |      % |          Time | Contentions | Callee                                        | Location                            |
| -----: | -------: | -----: | ------------: | ----------: | --------------------------------------------- | ----------------------------------- |
|  -4.0% | -68.19ms | 100.0% | 1.71s → 1.64s |     27 → 22 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool` |

##### `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

| Change |    Delta |     % |          Time | Contentions | Callee                                            | Location                                                |
| -----: | -------: | ----: | ------------: | ----------: | ------------------------------------------------- | ------------------------------------------------------- |
|  -2.8% | -38.08ms | 99.9% | 1.34s → 1.30s |     26 → 20 | `managedBlock(ForkJoinPool$ManagedBlocker)`       | `java.util.concurrent.ForkJoinPool`                     |
| -16.1% |  -0.15ms |  0.1% | 0.9ms → 0.8ms |       7 → 5 | `reacquire(AbstractQueuedSynchronizer$Node, int)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

| Change |    Delta |      % |          Time | Contentions | Callee                | Location                   |
| -----: | -------: | -----: | ------------: | ----------: | --------------------- | -------------------------- |
|  -2.8% | -38.08ms | 100.0% | 1.34s → 1.30s |     26 → 20 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `block()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`)

| Change |    Delta |      % |          Time | Contentions | Callee   | Location                                 |
| -----: | -------: | -----: | ------------: | ----------: | -------- | ---------------------------------------- |
|  -2.8% | -38.08ms | 100.0% | 1.34s → 1.30s |     26 → 20 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `take()` (`java.util.concurrent.LinkedBlockingQueue`)

|  Change |    Delta |      % |          Time | Contentions | Callee                | Location                                                                |
| ------: | -------: | -----: | ------------: | ----------: | --------------------- | ----------------------------------------------------------------------- |
|   -2.8% | -38.22ms | 100.0% | 1.34s → 1.30s |     33 → 25 | `await()`             | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| +169.8% |  +0.15ms |  <0.1% | 0.1ms → 0.2ms |       1 → 3 | `lockInterruptibly()` | `java.util.concurrent.locks.ReentrantLock`                              |

##### `getTask()` (`java.util.concurrent.ThreadPoolExecutor`)

| Change |    Delta |      % |          Time | Contentions | Callee   | Location                                   |
| -----: | -------: | -----: | ------------: | ----------: | -------- | ------------------------------------------ |
|  -2.8% | -38.07ms | 100.0% | 1.34s → 1.31s |     34 → 28 | `take()` | `java.util.concurrent.LinkedBlockingQueue` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|  Change |    Delta |             % |              Time | Contentions | Callee                                               | Location                                                     |
| ------: | -------: | ------------: | ----------------: | ----------: | ---------------------------------------------------- | ------------------------------------------------------------ |
|  -20.7% | -29.89ms | 62.4% → 59.0% | 144.5ms → 114.6ms |   242 → 257 | `generate()`                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  -60.4% |  -6.29ms |   4.5% → 2.1% |    10.4ms → 4.1ms |     28 → 11 | `createFrameMapWithReceivers(IrFunction)`            | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`   |
| +154.0% |  +3.83ms |   1.1% → 3.3% |     2.5ms → 6.3ms |          20 | `<init>(int, int, String, String, String, String[])` | `org.jetbrains.org.objectweb.asm.tree.MethodNode`            |
|  +89.9% |  +2.56ms |   1.2% → 2.8% |     2.8ms → 5.4ms |     23 → 21 | `wrapWithMaxLocalCalc(MethodNode)`                   | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`   |
|  +50.1% |  +2.10ms |   1.8% → 3.2% |     4.2ms → 6.3ms |     27 → 22 | `calculateMethodFlags(IrFunction)`                   | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`   |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000d001001800`)

| Change |    Delta |      % |              Time | Contentions | Callee           | Location                                     |
| -----: | -------: | -----: | ----------------: | ----------: | ---------------- | -------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000d00100e000`)

| Change |    Delta |      % |              Time | Contentions | Callee                         | Location                                             |
| -----: | -------: | -----: | ----------------: | ----------: | ------------------------------ | ---------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000d001001800` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |    Delta |      % |              Time | Contentions | Callee                           | Location                                            |
| -----: | -------: | -----: | ----------------: | ----------: | -------------------------------- | --------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000d00100e000` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |    Delta |      % |              Time | Contentions | Callee                                           | Location                           |
| -----: | -------: | -----: | ----------------: | ----------: | ------------------------------------------------ | ---------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |    Delta |      % |              Time | Contentions | Callee                         | Location                                          |
| -----: | -------: | -----: | ----------------: | ----------: | ------------------------------ | ------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |    Delta |      % |              Time | Contentions | Callee                     | Location                                          |
| -----: | -------: | -----: | ----------------: | ----------: | -------------------------- | ------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `park(Object)` (`java.util.concurrent.locks.LockSupport`)

| Change |    Delta |      % |              Time | Contentions | Callee                | Location                   |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------- | -------------------------- |
|  -8.2% | -30.14ms | 100.0% | 366.5ms → 336.3ms |          10 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Callee                                    | Location                                                   |
| -----: | -------: | -----: | ----------------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| -16.1% | -37.28ms | 100.0% | 231.4ms → 194.2ms |   495 → 469 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Callee                                  | Location                                                   |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| -16.1% | -37.28ms | 100.0% | 231.4ms → 194.2ms |   495 → 469 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |    Delta |     % |              Time | Contentions | Callee                             | Location                                  |
| -----: | -------: | ----: | ----------------: | ----------: | ---------------------------------- | ----------------------------------------- |
|  -8.2% | -30.11ms | 99.9% | 365.4ms → 335.3ms |       1 → 2 | `get()`                            | `java.util.concurrent.CompletableFuture`  |
|  -5.4% |  -0.03ms |  0.1% |             0.5ms |           1 | `awaitTermination(long, TimeUnit)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`)

| Change |    Delta |      % |              Time | Contentions | Callee                                            | Location                                               |
| -----: | -------: | -----: | ----------------: | ----------: | ------------------------------------------------- | ------------------------------------------------------ |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

| Change |    Delta |      % |              Time | Contentions | Callee                                                                                                                                                                      | Location                                                            |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler` |

##### `executePhase(PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

| Change |    Delta |      % |              Time | Contentions | Callee                                    | Location                                                        |
| -----: | -------: | -----: | ----------------: | ----------: | ----------------------------------------- | --------------------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `executePhase(JvmFir2IrPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change |    Delta |      % |              Time | Contentions | Callee                           | Location                                                        |
| -----: | -------: | -----: | ----------------: | ----------: | -------------------------------- | --------------------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change |    Delta |      % |              Time | Contentions | Callee                                         | Location                                          |
| -----: | -------: | -----: | ----------------: | ----------: | ---------------------------------------------- | ------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

| Change |    Delta |      % |              Time | Contentions | Callee                              | Location                                          |
| -----: | -------: | -----: | ----------------: | ----------: | ----------------------------------- | ------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

| Change |    Delta |      % |              Time | Contentions | Callee                                                     | Location                                                |
| -----: | -------: | -----: | ----------------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

| Change |    Delta |      % |              Time | Contentions | Callee                                                     | Location                                                    |
| -----: | -------: | -----: | ----------------: | ----------: | ---------------------------------------------------------- | ----------------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change |    Delta |      % |              Time | Contentions | Callee                                                               | Location                                             |
| -----: | -------: | -----: | ----------------: | ----------: | -------------------------------------------------------------------- | ---------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change |    Delta |      % |              Time | Contentions | Callee                                         | Location                                                |
| -----: | -------: | -----: | ----------------: | ----------: | ---------------------------------------------- | ------------------------------------------------------- |
|  -8.2% | -30.14ms | 100.0% | 365.9ms → 335.8ms |       2 → 3 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time blocked in their leaf frame.

Common call stack: `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`

|  Change |   Delta |            % |          Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------: | ------: | -----------: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +154.0% | +3.83ms |  0.1% → 0.2% | 2.5ms → 6.3ms |          20 | `<init>(int, int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  +68.6% | +2.93ms |  0.1% → 0.2% | 4.3ms → 7.2ms |     31 → 35 | `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| +212.7% | +2.70ms | <0.1% → 0.1% | 1.3ms → 4.0ms |     13 → 10 | `<init>(int, int, String, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`) ← `wrapWithMaxLocalCalc(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| +190.4% | +2.28ms | <0.1% → 0.1% | 1.2ms → 3.5ms |      3 → 10 | `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                        |
|  +32.2% | +2.06ms |         0.2% | 6.4ms → 8.5ms |       5 → 4 | `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`) ← `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` ← `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +74.2% | +2.05ms |         0.1% | 2.8ms → 4.8ms |       3 → 5 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000d0018b6300`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +578.7% | +1.74ms | <0.1% → 0.1% | 0.3ms → 2.0ms |       2 → 5 | `getOptimalModeForSignaturePart(TypeSystemCommonBackendContext, KotlinTypeMarker, boolean)` (`org.jetbrains.kotlin.load.kotlin.TypeMappingModeExtensionsKt`) ← `getOptimalModeForValueParameter(TypeSystemCommonBackendContext, KotlinTypeMarker)` ← `getTypeMappingModeForParameter(IrTypeSystemContext, IrDeclaration, IrType)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper$Companion`) ← `writeParameterType(JvmSignatureWriter, IrType, IrDeclaration, boolean)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`) ← `writeParameter(JvmSignatureWriter, WritingParameterToGenericSignatureMode, IrType, IrFunction, boolean)` ← `mapSignature(IrFunction, boolean, boolean, boolean)` ← `mapSignature$default(MethodSignatureMapper, IrFunction, boolean, boolean, boolean, int, Object)` ← `mapSignatureWithGeneric(IrFunction)` ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +65.8% | +1.61ms |         0.1% | 2.4ms → 4.0ms |           1 | `<clinit>()` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                    |
| +284.8% | +1.33ms | <0.1% → 0.1% | 0.5ms → 1.8ms |      1 → 12 | `unitStats_delegate$lambda$0(PerformanceManager)` (`org.jetbrains.kotlin.util.PerformanceManager`) ← `invoke()` (`org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000d00114f238`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getUnitStats()` (`org.jetbrains.kotlin.util.PerformanceManager`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|     new | +1.22ms | 0.0% → <0.1% |   0ms → 1.2ms |       0 → 1 | `getValue(Object, KProperty)` (`org.jetbrains.kotlin.fir.backend.MappedLazyVar`) ← `getOverriddenSymbols()` (`org.jetbrains.kotlin.fir.lazy.Fir2IrLazySimpleFunction`) ← `allOverridden(IrOverridableDeclaration, boolean)` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`) ← `isDeprecatedHidden(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `calculateMethodFlags(IrFunction)` ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| +224.9% | +1.21ms | <0.1% → 0.1% | 0.5ms → 1.7ms |      5 → 15 | `<init>(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackContext`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackMethodTransformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `transform(String, MethodNode)` ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| +212.6% | +1.20ms | <0.1% → 0.1% | 0.6ms → 1.8ms |       4 → 2 | `mapSignature(IrFunction, boolean, boolean, boolean)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`) ← `mapSignature$default(MethodSignatureMapper, IrFunction, boolean, boolean, boolean, int, Object)` ← `mapSignatureWithGeneric(IrFunction)` ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +549.3% | +1.18ms |        <0.1% | 0.2ms → 1.4ms |           1 | `<clinit>()` (`org.jetbrains.kotlin.resolve.deprecation.DeprecatedByAnnotation`) ← `addDeprecationIfPresent(DeclarationDescriptor, List)` (`org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`) ← `getOwnDeprecations(DeclarationDescriptor)` ← `computeDeprecation(DeclarationDescriptor)` ← `deprecations$lambda$0(DeprecationResolver, DeclarationDescriptor)` ← `invoke(Object)` (`org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver$$Lambda.0x000000d001817050`) ← `invoke(Object)` (`org.jetbrains.kotlin.storage.LockBasedStorageManager$MapBasedMemoizedFunction`) ← `invoke(Object)` (`org.jetbrains.kotlin.storage.LockBasedStorageManager$MapBasedMemoizedFunctionToNotNull`) ← `getDeprecations(DeclarationDescriptor)` (`org.jetbrains.kotlin.resolve.deprecation.DeprecationResolver`) ← `isDeprecatedHidden(DeclarationDescriptor)` ← `isDeprecatedHidden(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `calculateMethodFlags(IrFunction)` ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +369.7% | +1.12ms |        <0.1% | 0.3ms → 1.4ms |           1 | `desiredAssertionStatus()` (`java.lang.Class`) ← `<clinit>()` (`org.jetbrains.kotlin.codegen.inline.RemapVisitor`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) |
|  +14.2% | +1.11ms |  0.2% → 0.3% | 7.8ms → 8.9ms |     20 → 19 | `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new | +1.05ms | 0.0% → <0.1% |   0ms → 1.0ms |       0 → 4 | `mapToCallableMethod(IrCall, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +98.9% | +0.98ms | <0.1% → 0.1% | 1.0ms → 2.0ms |       4 → 5 | `preprocessNodeBeforeInline(MethodNode, Map)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)      |
|  +76.0% | +0.93ms | <0.1% → 0.1% | 1.2ms → 2.1ms |           5 | `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  +59.4% | +0.92ms | <0.1% → 0.1% | 1.5ms → 2.5ms |     10 → 15 | `generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +94.6% | +0.84ms | <0.1% → 0.1% | 0.9ms → 1.7ms |       3 → 6 | `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

### Improvements

Call stacks with the largest decrease in time blocked in their leaf frame.

| Change |     Delta |             % |              Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -----: | --------: | ------------: | ----------------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -15.3% | -173.65ms | 30.3% → 28.0% |   1.13s → 959.4ms |     83 → 92 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -2.8% |  -38.08ms | 36.0% → 38.2% |     1.34s → 1.30s |     26 → 20 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `block()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`) ← `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`) ← `managedBlock(ForkJoinPool$ManagedBlocker)` ← `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `take()` (`java.util.concurrent.LinkedBlockingQueue`) ← `getTask()` (`java.util.concurrent.ThreadPoolExecutor`) ← `runWorker(ThreadPoolExecutor$Worker)` ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -8.2% |  -30.11ms |          9.8% | 365.4ms → 335.3ms |       1 → 2 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park(Object)` (`java.util.concurrent.locks.LockSupport`) ← `block()` (`java.util.concurrent.CompletableFuture$Signaller`) ← `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`) ← `managedBlock(ForkJoinPool$ManagedBlocker)` ← `waitingGet(boolean)` (`java.util.concurrent.CompletableFuture`) ← `get()` ← `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`) ← `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000d001001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000d00100e000`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                                                                                                                                                                                                                                                                                   |
|  -4.8% |  -23.60ms | 13.2% → 13.8% | 495.4ms → 471.8ms |           2 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -21.0% |  -10.59ms |   1.3% → 1.2% |   50.5ms → 39.9ms |     65 → 62 | `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -93.7% |   -9.33ms |  0.3% → <0.1% |    10.0ms → 0.6ms |       4 → 2 | `<init>()` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`) ← `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -14.4% |   -9.19ms |   1.7% → 1.6% |   63.8ms → 54.6ms |           2 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -99.5% |   -4.95ms |  0.1% → <0.1% |    5.0ms → 23.4µs |       7 → 1 | `createFrameMapWithReceivers(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -98.9% |   -4.57ms |  0.1% → <0.1% |    4.6ms → 50.0µs |           1 | `getInlineCallSiteInfo()` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -27.7% |   -3.81ms |   0.4% → 0.3% |   13.8ms → 10.0ms |     46 → 51 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -97.6% |   -3.47ms |  0.1% → <0.1% |     3.6ms → 0.1ms |       3 → 1 | `newBuilder()` (`org.jetbrains.kotlin.metadata.ProtoBuf$VersionRequirement`) ← `writeVersionRequirement(int, int, int, ProtoBuf$VersionRequirement$VersionKind, MutableVersionRequirementTable)` (`org.jetbrains.kotlin.serialization.DescriptorSerializer$Companion`) ← `writeInlineParameterNullCheckRequirement(MutableVersionRequirementTable, Function1)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`) ← `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` ← `functionProto(FirFunction)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000d00191e000`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -37.8% |   -3.28ms |          0.2% |     8.7ms → 5.4ms |     14 → 18 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -21.4% |   -3.19ms |   0.4% → 0.3% |   14.9ms → 11.7ms |     48 → 91 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -65.6% |   -2.97ms |  0.1% → <0.1% |     4.5ms → 1.6ms |     11 → 10 | `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -93.7% |   -2.77ms |  0.1% → <0.1% |     3.0ms → 0.2ms |           1 | `getAllInternedObjects()` (`org.jetbrains.kotlin.metadata.serialization.Interner`) ← `serialize()` (`org.jetbrains.kotlin.metadata.serialization.MutableTable`) ← `finalizePackagePartProto(FqName, ProtoBuf$Package$Builder, Set)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000d00191e000`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -90.4% |   -2.43ms |  0.1% → <0.1% |     2.7ms → 0.3ms |           1 | `toIrBasedKotlinType(IrType, KotlinBuiltIns)` (`org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt`) ← `toIrBasedKotlinType$default(IrType, KotlinBuiltIns, int, Object)` ← `visitTypeOperator(IrTypeOperatorCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitTypeOperator(IrTypeOperatorCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall`) ← `gen(IrExpression, Type, IrType, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCallGenerator`) ← `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitContainerExpression(IrContainerExpression, BlockInfo)` ← `visitContainerExpression(IrContainerExpression, Object)` ← `visitBlock(IrBlock, Object)` (`org.jetbrains.kotlin.ir.visitors.IrVisitor`) ← `visitBlock(IrBlock, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlock(IrBlock, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlock`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                            |
| -96.3% |   -2.26ms |  0.1% → <0.1% |     2.3ms → 0.1ms |       2 → 1 | `<clinit>()` (`org.jetbrains.kotlin.fir.serialization.LocalClassIdOracle`) ← `getLocalClassIdOracle()` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`) ← `annotationSerializer_delegate$lambda$0(FirSerializerExtension)` (`org.jetbrains.kotlin.fir.serialization.FirSerializerExtension`) ← `invoke()` (`org.jetbrains.kotlin.fir.serialization.FirSerializerExtension$$Lambda.0x000000d0019052d8`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getAnnotationSerializer()` (`org.jetbrains.kotlin.fir.serialization.FirSerializerExtension`) ← `serializeAnnotations(FirAnnotationContainer, Function1, Function1)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`) ← `serializeAnnotations$default(FirJvmSerializerExtension, FirAnnotationContainer, Function1, Function1, int, Object)` ← `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` ← `functionProto(FirFunction)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000d00191e000`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -87.3% |   -2.03ms |  0.1% → <0.1% |     2.3ms → 0.3ms |       2 → 1 | `visitLocalVariable(String, String, String, Label, Label, int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `visitLocalVariable(String, String, String, Label, Label, int)` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `visitLocalVariable(String, String, String, Label, Label, int)` (`org.jetbrains.kotlin.codegen.inline.MaxLocalsCalculator`) ← `visitLocalVariable(String, String, String, Label, Label, int)` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `writeValueParameterInLocalVariableTable(IrValueParameter, Label, Label, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `writeParameterInLocalVariableTable$writeToLVT(ExpressionCodegen, IrValueParameter, Label, Label, boolean)` ← `writeParameterInLocalVariableTable(Label, Label)` ← `generate()` ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -72.7% |   -1.83ms |  0.1% → <0.1% |     2.5ms → 0.7ms |      14 → 4 | `getTypeMappingModeForParameter(IrTypeSystemContext, IrDeclaration, IrType)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper$Companion`) ← `writeParameterType(JvmSignatureWriter, IrType, IrDeclaration, boolean)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`) ← `writeParameter(JvmSignatureWriter, WritingParameterToGenericSignatureMode, IrType, IrFunction, boolean)` ← `mapSignature(IrFunction, boolean, boolean, boolean)` ← `mapSignature$default(MethodSignatureMapper, IrFunction, boolean, boolean, boolean, int, Object)` ← `mapSignatureWithGeneric(IrFunction)` ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -67.6% |   -1.51ms |  0.1% → <0.1% |     2.2ms → 0.7ms |       2 → 1 | `makeDefinitelyNotNull(UnwrappedType, boolean, boolean)` (`org.jetbrains.kotlin.types.DefinitelyNotNullType$Companion`) ← `makeDefinitelyNotNull$default(DefinitelyNotNullType$Companion, UnwrappedType, boolean, boolean, int, Object)` ← `toIrBasedKotlinType(IrType, KotlinBuiltIns)` (`org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt`) ← `toIrBasedKotlinType$default(IrType, KotlinBuiltIns, int, Object)` ← `visitTypeOperator(IrTypeOperatorCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitTypeOperator(IrTypeOperatorCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall`) ← `gen(IrExpression, Type, IrType, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCallGenerator`) ← `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitContainerExpression(IrContainerExpression, BlockInfo)` ← `visitContainerExpression(IrContainerExpression, Object)` ← `visitBlock(IrBlock, Object)` (`org.jetbrains.kotlin.ir.visitors.IrVisitor`) ← `visitBlock(IrBlock, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlock(IrBlock, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlock`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` |

# Lock contention profile diff

Blocked 1.73s → 1.64s (-85.80ms, -4.9%) over 1,084 → 1,075 contentions (1.6ms → 1.5ms per contention).

| Category         |  Change |    Delta |             % |          Time |   Contentions |
| ---------------- | ------: | -------: | ------------: | ------------: | ------------: |
| Ours             |   -5.0% | -87.47ms | 99.9% → 99.8% | 1.73s → 1.64s | 1,071 → 1,062 |
| Standard library | +126.1% |  +1.67ms |   0.1% → 0.2% | 1.3ms → 3.0ms |            13 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
└── … 1.73s → 1.64s (99.7%, self 0.6%) generateFile(JvmBackendContext, IrFile, List, boolean) at org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory
    ├── 1.65s → 1.57s (95.6%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
    │   ├── 1.65s → 1.53s (95.3% → 93.0%) generateMethod(IrFunction, SourceMapper)
    │   │   ├── 1.56s → 1.38s (90.2% → 84.1%, self 77.5% → 72.2%) generateMethodNode(IrFunction)
    │   │   │   └── … 221.2ms → 196.4ms (12.7% → 11.9%, self 3.3% → 2.7%) doGenerate(ReifiedTypeParametersUsages) at org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen
    │   │   │       ├── … 120.5ms → 97.1ms (6.9% → 5.9%) visitStatementContainer(IrStatementContainer, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   ├── … 110.8ms → 85.2ms (6.4% → 5.2%) visitReturn(IrReturn, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   │   ├── … 80.6ms → 49.0ms (4.6% → 3.0%) visitWhen(IrWhen, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   │   │   └── … 73.2ms → 40.5ms (4.2% → 2.5%) visitCall(IrCall, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   │   │       ├── 48.1ms → 22.6ms (2.8% → 1.4%) genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator
    │   │   │       │   │   │       │   └── 47.1ms → 21.6ms (2.7% → 1.3%) genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen
    │   │   │       │   │   │       │       ├── 38.2ms → 15.9ms (2.2% → 1.0%) inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)
    │   │   │       │   │   │       │       │   └── 27.8ms → 9.9ms (1.6% → 0.6%) doInline(MethodVisitor, LocalVarRemapper, boolean, Map) at org.jetbrains.kotlin.codegen.inline.MethodInliner
    │   │   │       │   │   │       │       │       └── 27.8ms → 9.9ms (1.6% → 0.6%) doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)
    │   │   │       │   │   │       │       │           └── 19.9ms → 8.9ms (1.1% → 0.5%) 7 more callees, led by (0.5% → 0.2%) markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)
    │   │   │       │   │   │       │       └── … 6.5ms → 1.3ms (0.4% → 0.1%) isBuiltInSuspendCoroutineUninterceptedOrReturn(FunctionDescriptor) at org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt
    │   │   │       │   │   │       └── 25.1ms → 17.9ms (1.4% → 1.1%) 5 more callees, led by (0.8% → 0.7%) getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)
    │   │   │       │   │   └── … 29.4ms → 33.6ms (1.7% → 2.0%) visitCall(IrCall, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   │       ├── 3.9ms → 6.9ms (0.2% → 0.4%, self 0.7% → 1.0% globally) getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)
    │   │   │       │   │       └── 25.5ms → 26.7ms (1.5% → 1.6%) 5 more callees, led by (0.9% → 1.1%) genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator
    │   │   │       │   └── … 0ms → 3.5ms (0.0% → 0.2%) visitWhileLoop(IrWhileLoop, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       ├── 3.7ms → 9.2ms (0.2% → 0.6%) <init>(int, int, String, String, String, String[]) at org.jetbrains.org.objectweb.asm.tree.MethodNode
    │   │   │       └── 34.9ms → 42.9ms (2.0% → 2.6%) 15 more callees, led by (0.5% → 0.7%) calculateMethodFlags(IrFunction)
    │   │   ├── … 25.3ms → 51.7ms (1.5% → 3.1%) transform(String, MethodNode) at org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer
    │   │   │   ├── … 2.4ms → 8.4ms (0.1% → 0.5%) transform(String, MethodNode) at org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackMethodTransformer
    │   │   │   │   └── 1.4ms → 5.6ms (0.1% → 0.3%) <init>(MethodNode) at org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackContext
    │   │   │   ├── … 0.1ms → 4.5ms (<0.1% → 0.3%) isOptimizable(AbstractInsnNode) at org.jetbrains.kotlin.codegen.optimization.nullCheck.RedundantNullCheckMethodTransformer$TransformerPass
    │   │   │   └── 19.8ms → 34.1ms (1.1% → 2.1%) 11 more callees, led by (0.3%) transform(String, MethodNode) at org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer
    │   │   ├── … 21.7ms → 37.6ms (1.3% → 2.3%, self 0.5% → 1.3%) makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set) at org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt
    │   │   │   └── … 2.2ms → 4.1ms (0.1% → 0.2%) createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean) at org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion
    │   │   ├── … 11.4ms → 28.0ms (0.7% → 1.7%, self 0.5% → 1.7%) <init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor
    │   │   ├── 8.3ms → 2.9ms (0.5% → 0.2%) <init>(SourceMapper, SMAP, MethodVisitor) at org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor
    │   │   └── … 1.4ms → 8.3ms (0.1% → 0.5%) put(WritableSlice, Object, Object) at org.jetbrains.kotlin.util.slicedMap.SlicedMapImpl
    │   └── … 1.9ms → 38.1ms (0.1% → 2.3%) serialize(MetadataSource, MetadataSource$File) at org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer
    │       ├── … 0.4ms → 25.4ms (<0.1% → 1.5%) functionProto(FirFunction) at org.jetbrains.kotlin.fir.serialization.FirElementSerializer
    │       │   ├── 0.3ms → 8.7ms (<0.1% → 0.5%) serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer) at org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension
    │       │   └── 0.1ms → 16.8ms (<0.1% → 1.0%) 5 more callees, led by (0.0% → 0.3%) valueParameterProto(FirValueParameter, int, FirFunction)
    │       └── … 0ms → 3.7ms (0.0% → 0.2%) serializeProperty(FirProperty, ProtoBuf$Property$Builder, MutableVersionRequirementTable, FirElementSerializer) at org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension
    └── … 61.1ms → 58.8ms (3.5% → 3.6%, self 0.8%) <init>(IrClass, JvmBackendContext, IrFunction, List) at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
        └── 46.6ms → 45.9ms (2.7% → 2.8%) 9 more callees, led by (1.5% → 1.6%) newVisitor(JvmDeclarationOrigin, Type, List) at org.jetbrains.kotlin.codegen.ClassFileFactory
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

|   Change |    Delta |            % |            Time | Contentions | Function                                                                                                                                           | Location                                                                                                                 |
| -------: | -------: | -----------: | --------------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
|  +199.7% | +18.20ms |  0.5% → 1.7% |  9.1ms → 27.3ms |     37 → 43 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])`                                                           | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`                                                    |
|  +126.3% | +11.76ms |  0.5% → 1.3% |  9.3ms → 21.1ms |     15 → 26 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`                                                           |
|  +148.5% |  +5.52ms |  0.2% → 0.6% |   3.7ms → 9.2ms |     21 → 22 | `<init>(int, int, String, String, String, String[])`                                                                                               | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                                                        |
| +2786.8% |  +5.35ms | <0.1% → 0.3% |   0.2ms → 5.5ms |       1 → 7 | `<init>(MethodNode)`                                                                                                                               | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackContext`                                                     |
|      new |  +5.01ms |  0.0% → 0.3% |     0ms → 5.0ms |       0 → 4 | `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)`                                  | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`                                                         |
|   +39.0% |  +4.77ms |  0.7% → 1.0% | 12.2ms → 17.0ms |          26 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                                                              | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                                             |
|  +747.6% |  +4.61ms | <0.1% → 0.3% |   0.6ms → 5.2ms |           2 | `put(WritableSlice, Object, Object)`                                                                                                               | `org.jetbrains.kotlin.util.slicedMap.SlicedMapImpl`                                                                      |
| +3810.0% |  +4.38ms | <0.1% → 0.3% |   0.1ms → 4.5ms |       1 → 5 | `isOptimizable(AbstractInsnNode)`                                                                                                                  | `org.jetbrains.kotlin.codegen.optimization.nullCheck.RedundantNullCheckMethodTransformer$TransformerPass`                |
|  +211.4% |  +4.01ms |  0.1% → 0.4% |   1.9ms → 5.9ms |       5 → 4 | `createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)`                     | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion`                                                  |
|      new |  +3.62ms |  0.0% → 0.2% |     0ms → 3.6ms |       0 → 1 | `<clinit>()`                                                                                                                                       | `org.jetbrains.kotlin.fir.types.CompilerConeAttributes`                                                                  |
|      new |  +3.52ms |  0.0% → 0.2% |     0ms → 3.5ms |       0 → 2 | `serializeProperty(FirProperty, ProtoBuf$Property$Builder, MutableVersionRequirementTable, FirElementSerializer)`                                  | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`                                                         |
|      new |  +3.47ms |  0.0% → 0.2% |     0ms → 3.5ms |       0 → 1 | `visitWhileLoop(IrWhileLoop, BlockInfo)`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                                             |
|  +212.7% |  +3.17ms |  0.1% → 0.3% |   1.5ms → 4.7ms |       8 → 6 | `getRegeneratedObjectNameGenerator(IrFunction)`                                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                                                  |
|  +913.7% |  +3.01ms | <0.1% → 0.2% |   0.3ms → 3.3ms |       1 → 2 | `<clinit>()`                                                                                                                                       | `org.jetbrains.kotlin.resolve.calls.checkers.CoroutineCallCheckerKt`                                                     |
| +1639.0% |  +2.94ms | <0.1% → 0.2% |   0.2ms → 3.1ms |       1 → 5 | `transform(String, MethodNode)`                                                                                                                    | `org.jetbrains.kotlin.codegen.optimization.CapturedVarsOptimizationMethodTransformer`                                    |
|      new |  +2.69ms |  0.0% → 0.2% |     0ms → 2.7ms |       0 → 3 | `collectRewriteActions()`                                                                                                                          | `org.jetbrains.kotlin.codegen.optimization.ConstantConditionEliminationMethodTransformer$ConstantConditionsOptimization` |
|  +198.1% |  +2.49ms |  0.1% → 0.2% |   1.3ms → 3.7ms |       1 → 7 | `getValue(Object, KProperty)`                                                                                                                      | `org.jetbrains.kotlin.fir.backend.MappedLazyVar`                                                                         |
|  +358.4% |  +2.34ms | <0.1% → 0.2% |   0.7ms → 3.0ms |       3 → 1 | `<init>()`                                                                                                                                         | `org.jetbrains.kotlin.util.slicedMap.OpenAddressLinearProbingHashTable`                                                  |
|      new |  +2.27ms |  0.0% → 0.1% |     0ms → 2.3ms |       0 → 2 | `newBuilder()`                                                                                                                                     | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`                                                                   |
|  +108.7% |  +2.23ms |  0.1% → 0.3% |   2.1ms → 4.3ms |       6 → 8 | `generate()`                                                                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`                                                               |

#### Improvements

Functions with the largest decrease in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

|  Change |     Delta |             % |            Time | Contentions | Function                                                                                                                                                                                                    | Location                                                                                                      |
| ------: | --------: | ------------: | --------------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
|  -11.4% | -153.00ms | 77.5% → 72.2% |   1.34s → 1.19s |     94 → 90 | `generateMethodNode(IrFunction)`                                                                                                                                                                            | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                                       |
|  -23.8% |  -13.78ms |   3.3% → 2.7% | 58.0ms → 44.2ms |     55 → 61 | `doGenerate(ReifiedTypeParametersUsages)`                                                                                                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                                    |
|  -89.4% |   -8.46ms |   0.5% → 0.1% |   9.5ms → 1.0ms |      14 → 4 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)`                                                                                                                                              | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                                           |
|  -79.9% |   -5.19ms |   0.4% → 0.1% |   6.5ms → 1.3ms |           2 | `isBuiltInSuspendCoroutineUninterceptedOrReturn(FunctionDescriptor)`                                                                                                                                        | `org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt`                                                      |
|  -78.1% |   -4.34ms |   0.3% → 0.1% |   5.6ms → 1.2ms |       2 → 1 | `rewriteLabelInstructions()`                                                                                                                                                                                | `org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod`          |
|  -93.1% |   -3.36ms |  0.2% → <0.1% |   3.6ms → 0.3ms |       4 → 2 | `visitLocalVariable(String, String, String, Label, Label, int)`                                                                                                                                             | `org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`                                           |
| removed |   -3.34ms |   0.2% → 0.0% |     3.3ms → 0ms |       1 → 0 | `firstOverridden(CallableMemberDescriptor, boolean, Function1)`                                                                                                                                             | `org.jetbrains.kotlin.resolve.descriptorUtil.DescriptorUtilsKt`                                               |
| removed |   -3.25ms |   0.2% → 0.0% |     3.2ms → 0ms |       4 → 0 | `doRemap(int)`                                                                                                                                                                                              | `org.jetbrains.kotlin.codegen.inline.LocalVarRemapper`                                                        |
|  -70.7% |   -3.24ms |   0.3% → 0.1% |   4.6ms → 1.3ms |      12 → 5 | `preprocessNodeBeforeInline(MethodNode, Map)`                                                                                                                                                               | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                                           |
| removed |   -3.13ms |   0.2% → 0.0% |     3.1ms → 0ms |       2 → 0 | `<init>(SourceMapper, SMAP, MethodVisitor)`                                                                                                                                                                 | `org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`                                           |
|  -96.8% |   -2.86ms |  0.2% → <0.1% |   3.0ms → 0.1ms |           1 | `copyOperation(AbstractInsnNode, BasicValue)`                                                                                                                                                               | `org.jetbrains.kotlin.codegen.coroutines.UninitializedStoresProcessor$UninitializedNewValueMarkerInterpreter` |
| removed |   -2.86ms |   0.2% → 0.0% |     2.9ms → 0ms |       1 → 0 | `invoke(IrFunctionAccessExpression, ExpressionCodegen, BlockInfo)`                                                                                                                                          | `org.jetbrains.kotlin.backend.jvm.intrinsics.Equals`                                                          |
|  -35.4% |   -2.81ms |   0.5% → 0.3% |   7.9ms → 5.1ms |     17 → 14 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)`                                                                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                                                    |
| removed |   -2.51ms |   0.1% → 0.0% |     2.5ms → 0ms |       1 → 0 | `generateKotlinMetadataAnnotation()`                                                                                                                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                                       |
| removed |   -2.34ms |   0.1% → 0.0% |     2.3ms → 0ms |       2 → 0 | `removeClosureAssertions(MethodNode)`                                                                                                                                                                       | `org.jetbrains.kotlin.codegen.inline.MethodInliner$Companion`                                                 |
|  -43.5% |   -2.25ms |   0.3% → 0.2% |   5.2ms → 2.9ms |       4 → 3 | `<init>(SourceMapper, SMAP, SourcePosition)`                                                                                                                                                                | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier`                                                         |
|  -46.4% |   -2.20ms |   0.3% → 0.2% |   4.7ms → 2.5ms |           7 | `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)`                                                                                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                                                    |
|  -83.2% |   -2.00ms |  0.1% → <0.1% |   2.4ms → 0.4ms |           1 | `<clinit>()`                                                                                                                                                                                                | `org.jetbrains.kotlin.codegen.inline.FieldRemapper`                                                           |
|  -30.3% |   -1.97ms |   0.4% → 0.3% |   6.5ms → 4.5ms |       3 → 5 | `visitMethod(int, String, String, String, String[])`                                                                                                                                                        | `org.jetbrains.org.objectweb.asm.ClassWriter`                                                                 |
| removed |   -1.95ms |   0.1% → 0.0% |     1.9ms → 0ms |       4 → 0 | `<init>(FirSession, ScopeSession, FirDeclaration, Interner, FirSerializerExtension, MutableTypeTable, MutableVersionRequirementTable, boolean, AbstractTypeApproximator, LanguageVersionSettings, boolean)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer`                                                 |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|  Change |   Delta |             % |          Time | Contentions | Location                                                                 |
| ------: | ------: | ------------: | ------------: | ----------: | ------------------------------------------------------------------------ |
| +436.9% | +2.69ms |  6.7% → 12.1% | 0.6ms → 3.3ms |       7 → 6 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:46` |
| +196.0% | +2.57ms | 14.4% → 14.2% | 1.3ms → 3.9ms |           2 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:62` |
| +236.1% | +2.16ms | 10.1% → 11.3% | 0.9ms → 3.1ms |           1 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:64` |
| +409.2% | +1.99ms |   5.3% → 9.1% | 0.5ms → 2.5ms |           3 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:58` |
| +583.8% | +1.82ms |   3.4% → 7.8% | 0.3ms → 2.1ms |       2 → 3 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:60` |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|  Change |   Delta |             % |           Time | Contentions | Location                                                          |
| ------: | ------: | ------------: | -------------: | ----------: | ----------------------------------------------------------------- |
|  +80.8% | +4.46ms | 59.3% → 47.4% | 5.5ms → 10.0ms |       4 → 6 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:50` |
| +629.2% | +4.41ms |  7.5% → 24.3% |  0.7ms → 5.1ms |           3 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:63` |
| +115.7% | +1.48ms | 13.7% → 13.1% |  1.3ms → 2.8ms |      2 → 11 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:61` |
|  +77.7% | +1.40ms | 19.4% → 15.2% |  1.8ms → 3.2ms |           6 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:54` |

##### `<init>(int, int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change |   Delta |             % |          Time | Contentions | Location                                              |
| ------: | ------: | ------------: | ------------: | ----------: | ----------------------------------------------------- |
| +792.4% | +6.40ms | 21.7% → 78.0% | 0.8ms → 7.2ms |     10 → 11 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:225` |
|  -30.1% | -0.88ms | 78.3% → 22.0% | 2.9ms → 2.0ms |          11 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:230` |

##### `<init>(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackContext`)

|  Change |   Delta |              % |          Time | Contentions | Location                                                                |
| ------: | ------: | -------------: | ------------: | ----------: | ----------------------------------------------------------------------- |
|     new | +3.40ms |   0.0% → 61.4% |   0ms → 3.4ms |       0 → 3 | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackContext:52` |
| +646.7% | +1.24ms | 100.0% → 25.9% | 0.2ms → 1.4ms |       1 → 3 | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackContext:37` |
|     new | +0.71ms |   0.0% → 12.8% |   0ms → 0.7ms |       0 → 1 | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackContext:54` |

##### `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`)

| Change |   Delta |            % |        Time | Contentions | Location                                                             |
| -----: | ------: | -----------: | ----------: | ----------: | -------------------------------------------------------------------- |
|    new | +3.32ms | 0.0% → 66.3% | 0ms → 3.3ms |       0 → 2 | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension:255` |
|    new | +1.04ms | 0.0% → 20.8% | 0ms → 1.0ms |       0 → 1 | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension:258` |
|    new | +0.65ms | 0.0% → 13.0% | 0ms → 0.6ms |       0 → 1 | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension:259` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|  Change |   Delta |             % |          Time | Contentions | Location                                                          |
| ------: | ------: | ------------: | ------------: | ----------: | ----------------------------------------------------------------- |
| +117.7% | +2.67ms | 18.5% → 29.0% | 2.3ms → 4.9ms |       5 → 4 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1568` |
|  +79.3% | +1.43ms | 14.7% → 19.0% | 1.8ms → 3.2ms |       6 → 3 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1572` |
|  -47.6% | -1.38ms |  23.7% → 8.9% | 2.9ms → 1.5ms |       4 → 5 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1569` |
| +155.0% | +1.10ms |  5.8% → 10.7% | 0.7ms → 1.8ms |       1 → 7 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1570` |
| +740.2% | +1.01ms |   1.1% → 6.7% | 0.1ms → 1.1ms |       1 → 3 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1548` |

##### `put(WritableSlice, Object, Object)` (`org.jetbrains.kotlin.util.slicedMap.SlicedMapImpl`)

|  Change |   Delta |      % |          Time | Contentions | Location                                               |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------ |
| +747.6% | +4.61ms | 100.0% | 0.6ms → 5.2ms |           2 | `org.jetbrains.kotlin.util.slicedMap.SlicedMapImpl:50` |

##### `isOptimizable(AbstractInsnNode)` (`org.jetbrains.kotlin.codegen.optimization.nullCheck.RedundantNullCheckMethodTransformer$TransformerPass`)

|   Change |   Delta |      % |          Time | Contentions | Location                                                                                                     |
| -------: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------------------------------------------------------ |
| +3810.0% | +4.38ms | 100.0% | 0.1ms → 4.5ms |       1 → 5 | `org.jetbrains.kotlin.codegen.optimization.nullCheck.RedundantNullCheckMethodTransformer$TransformerPass:91` |

##### `createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion`)

|  Change |   Delta |      % |          Time | Contentions | Location                                                                     |
| ------: | ------: | -----: | ------------: | ----------: | ---------------------------------------------------------------------------- |
| +211.4% | +4.01ms | 100.0% | 1.9ms → 5.9ms |       5 → 4 | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion:1394` |

##### `<clinit>()` (`org.jetbrains.kotlin.fir.types.CompilerConeAttributes`)

| Change |   Delta |             % |        Time | Contentions | Location                                                    |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------------------- |
|    new | +3.62ms | 0.0% → 100.0% | 0ms → 3.6ms |       0 → 1 | `org.jetbrains.kotlin.fir.types.CompilerConeAttributes:129` |

##### `serializeProperty(FirProperty, ProtoBuf$Property$Builder, MutableVersionRequirementTable, FirElementSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`)

| Change |   Delta |            % |        Time | Contentions | Location                                                             |
| -----: | ------: | -----------: | ----------: | ----------: | -------------------------------------------------------------------- |
|    new | +3.23ms | 0.0% → 91.7% | 0ms → 3.2ms |       0 → 1 | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension:321` |
|    new | +0.29ms |  0.0% → 8.3% | 0ms → 0.3ms |       0 → 1 | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension:316` |

##### `visitWhileLoop(IrWhileLoop, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |   Delta |             % |        Time | Contentions | Location                                                          |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------------------------- |
|    new | +3.47ms | 0.0% → 100.0% | 0ms → 3.5ms |       0 → 1 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1137` |

##### `getRegeneratedObjectNameGenerator(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |   Delta |      % |          Time | Contentions | Location                                                    |
| ------: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------- |
| +212.7% | +3.17ms | 100.0% | 1.5ms → 4.7ms |       8 → 6 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:135` |

##### `<clinit>()` (`org.jetbrains.kotlin.resolve.calls.checkers.CoroutineCallCheckerKt`)

|  Change |   Delta |              % |          Time | Contentions | Location                                                                |
| ------: | ------: | -------------: | ------------: | ----------: | ----------------------------------------------------------------------- |
| +900.5% | +2.97ms | 100.0% → 98.7% | 0.3ms → 3.3ms |           1 | `org.jetbrains.kotlin.resolve.calls.checkers.CoroutineCallCheckerKt:47` |
|     new | +0.04ms |    0.0% → 1.3% |  0ms → 43.3µs |       0 → 1 | `org.jetbrains.kotlin.resolve.calls.checkers.CoroutineCallCheckerKt:36` |

##### `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.CapturedVarsOptimizationMethodTransformer`)

|   Change |   Delta |      % |          Time | Contentions | Location                                                                                 |
| -------: | ------: | -----: | ------------: | ----------: | ---------------------------------------------------------------------------------------- |
| +1639.0% | +2.94ms | 100.0% | 0.2ms → 3.1ms |       1 → 5 | `org.jetbrains.kotlin.codegen.optimization.CapturedVarsOptimizationMethodTransformer:25` |

##### `collectRewriteActions()` (`org.jetbrains.kotlin.codegen.optimization.ConstantConditionEliminationMethodTransformer$ConstantConditionsOptimization`)

| Change |   Delta |             % |        Time | Contentions | Location                                                                                                                    |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------------------------------------------------------------------------------------------------------------- |
|    new | +2.69ms | 0.0% → 100.0% | 0ms → 2.7ms |       0 → 3 | `org.jetbrains.kotlin.codegen.optimization.ConstantConditionEliminationMethodTransformer$ConstantConditionsOptimization:65` |

##### `getValue(Object, KProperty)` (`org.jetbrains.kotlin.fir.backend.MappedLazyVar`)

|  Change |   Delta |      % |          Time | Contentions | Location                                            |
| ------: | ------: | -----: | ------------: | ----------: | --------------------------------------------------- |
| +198.1% | +2.49ms | 100.0% | 1.3ms → 3.7ms |       1 → 7 | `org.jetbrains.kotlin.fir.backend.MappedLazyVar:67` |

##### `<init>()` (`org.jetbrains.kotlin.util.slicedMap.OpenAddressLinearProbingHashTable`)

|  Change |   Delta |      % |          Time | Contentions | Location                                                                   |
| ------: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------------------------- |
| +358.4% | +2.34ms | 100.0% | 0.7ms → 3.0ms |       3 → 1 | `org.jetbrains.kotlin.util.slicedMap.OpenAddressLinearProbingHashTable:51` |

##### `newBuilder()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`)

| Change |   Delta |             % |        Time | Contentions | Location                                                    |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------------------- |
|    new | +2.27ms | 0.0% → 100.0% | 0ms → 2.3ms |       0 → 2 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument:5487` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`)

|  Change |   Delta |             % |          Time | Contentions | Location                                                       |
| ------: | ------: | ------------: | ------------: | ----------: | -------------------------------------------------------------- |
| +830.0% | +1.33ms |  7.8% → 34.7% | 0.2ms → 1.5ms |       1 → 2 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:37`  |
| +115.5% | +0.90ms | 38.1% → 39.3% | 0.8ms → 1.7ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:35`  |
|  -52.3% | -0.17ms |  16.2% → 3.7% | 0.3ms → 0.2ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:490` |
|  +22.3% | +0.17ms | 37.9% → 22.2% | 0.8ms → 1.0ms |       1 → 2 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:38`  |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |     Delta |           % |          Time | Contentions | Location                                                    |
| -----: | --------: | ----------: | ------------: | ----------: | ----------------------------------------------------------- |
| -11.4% | -152.42ms |       99.6% | 1.33s → 1.18s |     72 → 71 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:427` |
| -33.7% |   -1.33ms | 0.3% → 0.2% | 4.0ms → 2.6ms |     12 → 10 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:422` |
| +67.4% |   +0.78ms | 0.1% → 0.2% | 1.2ms → 1.9ms |       9 → 8 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:416` |
| -12.6% |   -0.03ms |       <0.1% | 0.3ms → 0.2ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:428` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|  Change |    Delta |             % |            Time | Contentions | Location                                                       |
| ------: | -------: | ------------: | --------------: | ----------: | -------------------------------------------------------------- |
|  -51.6% | -16.71ms | 55.8% → 35.4% | 32.4ms → 15.7ms |          12 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:68`  |
| +203.9% |  +2.71ms |   2.3% → 9.1% |   1.3ms → 4.0ms |      2 → 13 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:84`  |
|  +81.0% |  +2.33ms |  5.0% → 11.8% |   2.9ms → 5.2ms |     10 → 11 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:133` |
|  +20.1% |  +2.07ms | 17.8% → 28.0% | 10.3ms → 12.4ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:134` |
|  -56.6% |  -1.47ms |   4.5% → 2.5% |   2.6ms → 1.1ms |       3 → 1 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:140` |

##### `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|  Change |   Delta |             % |           Time | Contentions | Location                                                |
| ------: | ------: | ------------: | -------------: | ----------: | ------------------------------------------------------- |
|  -82.2% | -4.50ms | 57.9% → 97.3% |  5.5ms → 1.0ms |       6 → 3 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:127` |
| removed | -2.75ms |  29.1% → 0.0% |    2.8ms → 0ms |       4 → 0 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:110` |
|  -97.8% | -1.17ms |  12.7% → 2.7% | 1.2ms → 26.5µs |       3 → 1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:97`  |
| removed | -0.03ms |   0.3% → 0.0% |   28.1µs → 0ms |       1 → 0 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:117` |

##### `isBuiltInSuspendCoroutineUninterceptedOrReturn(FunctionDescriptor)` (`org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt`)

| Change |   Delta |      % |          Time | Contentions | Location                                                    |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------- |
| -79.9% | -5.19ms | 100.0% | 6.5ms → 1.3ms |           2 | `org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt:19` |

##### `rewriteLabelInstructions()` (`org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod`)

| Change |   Delta |      % |          Time | Contentions | Location                                                                                                |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------------------------------------------------- |
| -78.1% | -4.34ms | 100.0% | 5.6ms → 1.2ms |       2 → 1 | `org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod:53` |

##### `visitLocalVariable(String, String, String, Label, Label, int)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`)

| Change |   Delta |      % |          Time | Contentions | Location                                                               |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------------------------------------- |
| -93.1% | -3.36ms | 100.0% | 3.6ms → 0.3ms |       4 → 2 | `org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor:91` |

##### `firstOverridden(CallableMemberDescriptor, boolean, Function1)` (`org.jetbrains.kotlin.resolve.descriptorUtil.DescriptorUtilsKt`)

|  Change |   Delta |             % |        Time | Contentions | Location                                                            |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------------- |
| removed | -3.34ms | 100.0% → 0.0% | 3.3ms → 0ms |       1 → 0 | `org.jetbrains.kotlin.resolve.descriptorUtil.DescriptorUtilsKt:262` |

##### `doRemap(int)` (`org.jetbrains.kotlin.codegen.inline.LocalVarRemapper`)

|  Change |   Delta |             % |        Time | Contentions | Location                                                  |
| ------: | ------: | ------------: | ----------: | ----------: | --------------------------------------------------------- |
| removed | -3.25ms | 100.0% → 0.0% | 3.2ms → 0ms |       4 → 0 | `org.jetbrains.kotlin.codegen.inline.LocalVarRemapper:70` |

##### `preprocessNodeBeforeInline(MethodNode, Map)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

| Change |   Delta |             % |          Time | Contentions | Location                                                |
| -----: | ------: | ------------: | ------------: | ----------: | ------------------------------------------------------- |
| -77.9% | -3.16ms | 88.4% → 66.8% | 4.1ms → 0.9ms |      11 → 4 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:798` |
| -16.1% | -0.09ms | 11.6% → 33.2% | 0.5ms → 0.4ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:801` |

##### `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`)

|  Change |   Delta |             % |        Time | Contentions | Location                                                               |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------------------- |
| removed | -3.13ms | 100.0% → 0.0% | 3.1ms → 0ms |       2 → 0 | `org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor:84` |

##### `copyOperation(AbstractInsnNode, BasicValue)` (`org.jetbrains.kotlin.codegen.coroutines.UninitializedStoresProcessor$UninitializedNewValueMarkerInterpreter`)

| Change |   Delta |      % |          Time | Contentions | Location                                                                                                          |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- |
| -96.8% | -2.86ms | 100.0% | 3.0ms → 0.1ms |           1 | `org.jetbrains.kotlin.codegen.coroutines.UninitializedStoresProcessor$UninitializedNewValueMarkerInterpreter:191` |

##### `invoke(IrFunctionAccessExpression, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.intrinsics.Equals`)

|  Change |   Delta |             % |        Time | Contentions | Location                                                |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------- |
| removed | -2.86ms | 100.0% → 0.0% | 2.9ms → 0ms |       1 → 0 | `org.jetbrains.kotlin.backend.jvm.intrinsics.Equals:80` |

##### `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

| Change |   Delta |             % |          Time | Contentions | Location                                                       |
| -----: | ------: | ------------: | ------------: | ----------: | -------------------------------------------------------------- |
| -82.6% | -2.84ms | 43.3% → 11.6% | 3.4ms → 0.6ms |       8 → 6 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:178` |
| +52.1% | +0.83ms | 20.1% → 47.3% | 1.6ms → 2.4ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:149` |
| -65.3% | -0.60ms |  11.5% → 6.2% | 0.9ms → 0.3ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:152` |
| -15.1% | -0.17ms | 14.6% → 19.2% | 1.2ms → 1.0ms |       4 → 3 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:192` |
|  -3.5% | -0.03ms | 10.5% → 15.7% |         0.8ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:118` |

##### `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |   Delta |             % |        Time | Contentions | Location                                                    |
| ------: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------------------- |
| removed | -2.51ms | 100.0% → 0.0% | 2.5ms → 0ms |       1 → 0 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:317` |

##### `removeClosureAssertions(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner$Companion`)

|  Change |   Delta |             % |        Time | Contentions | Location                                                           |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------------ |
| removed | -2.34ms | 100.0% → 0.0% | 2.3ms → 0ms |       2 → 0 | `org.jetbrains.kotlin.codegen.inline.MethodInliner$Companion:1247` |

##### `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`)

| Change |   Delta |      % |          Time | Contentions | Location                                                 |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------- |
| -43.5% | -2.25ms | 100.0% | 5.2ms → 2.9ms |       4 → 3 | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier:65` |

##### `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

|  Change |   Delta |             % |          Time | Contentions | Location                                                       |
| ------: | ------: | ------------: | ------------: | ----------: | -------------------------------------------------------------- |
|  -61.6% | -1.89ms | 64.6% → 46.4% | 3.1ms → 1.2ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:331` |
| removed | -0.66ms |  13.9% → 0.0% |   0.7ms → 0ms |       3 → 0 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:376` |
|     new | +0.23ms |   0.0% → 9.2% |   0ms → 0.2ms |       0 → 1 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:319` |
|  +11.1% | +0.11ms | 21.4% → 44.4% | 1.0ms → 1.1ms |       1 → 3 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:330` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

| Change |   Delta |      % |          Time | Contentions | Location                                          |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------- |
| -30.3% | -1.97ms | 100.0% | 6.5ms → 4.5ms |       3 → 5 | `org.jetbrains.org.objectweb.asm.ClassWriter:469` |

##### `<init>(FirSession, ScopeSession, FirDeclaration, Interner, FirSerializerExtension, MutableTypeTable, MutableVersionRequirementTable, boolean, AbstractTypeApproximator, LanguageVersionSettings, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`)

|  Change |   Delta |            % |         Time | Contentions | Location                                                         |
| ------: | ------: | -----------: | -----------: | ----------: | ---------------------------------------------------------------- |
| removed | -1.91ms | 97.9% → 0.0% |  1.9ms → 0ms |       2 → 0 | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer:88` |
| removed | -0.04ms |  2.1% → 0.0% | 40.6µs → 0ms |       2 → 0 | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer:87` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|  Change |    Delta |      % |           Time | Contentions | Caller                                                                   | Location                                                             |
| ------: | -------: | -----: | -------------: | ----------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| +199.7% | +18.20ms | 100.0% | 9.1ms → 27.3ms |     37 → 43 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder` |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|  Change |    Delta |      % |           Time | Contentions | Caller                                                                                             | Location                                                      |
| ------: | -------: | -----: | -------------: | ----------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| +126.3% | +11.76ms | 100.0% | 9.3ms → 21.1ms |     15 → 26 | `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension` |

##### `<init>(int, int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                    | Location                                                   |
| ------: | ------: | -----: | ------------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| +148.5% | +5.52ms | 100.0% | 3.7ms → 9.2ms |     21 → 22 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `<init>(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackContext`)

|   Change |   Delta |      % |          Time | Contentions | Caller                          | Location                                                                       |
| -------: | ------: | -----: | ------------: | ----------: | ------------------------------- | ------------------------------------------------------------------------------ |
| +2786.8% | +5.35ms | 100.0% | 0.2ms → 5.5ms |       1 → 7 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackMethodTransformer` |

##### `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`)

| Change |   Delta |             % |        Time | Contentions | Caller                       | Location                                                      |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------- | ------------------------------------------------------------- |
|    new | +5.01ms | 0.0% → 100.0% | 0ms → 5.0ms |       0 → 4 | `functionProto(FirFunction)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |   Delta |      % |            Time | Contentions | Caller                         | Location                                                     |
| -----: | ------: | -----: | --------------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| +39.0% | +4.77ms | 100.0% | 12.2ms → 17.0ms |          26 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `put(WritableSlice, Object, Object)` (`org.jetbrains.kotlin.util.slicedMap.SlicedMapImpl`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                                                    | Location                                                              |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| +747.6% | +4.61ms | 100.0% | 0.6ms → 5.2ms |           2 | `put(JvmSerializationBindings$SerializationMappingSlice, Object, Object)` | `org.jetbrains.kotlin.codegen.serialization.JvmSerializationBindings` |

##### `isOptimizable(AbstractInsnNode)` (`org.jetbrains.kotlin.codegen.optimization.nullCheck.RedundantNullCheckMethodTransformer$TransformerPass`)

|   Change |   Delta |      % |          Time | Contentions | Caller  | Location                                                                                                  |
| -------: | ------: | -----: | ------------: | ----------: | ------- | --------------------------------------------------------------------------------------------------------- |
| +3810.0% | +4.38ms | 100.0% | 0.1ms → 4.5ms |       1 → 5 | `run()` | `org.jetbrains.kotlin.codegen.optimization.nullCheck.RedundantNullCheckMethodTransformer$TransformerPass` |

##### `createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion`)

|  Change |   Delta |             % |          Time | Contentions | Caller                                                                                                                                                                              | Location                                                                |
| ------: | ------: | ------------: | ------------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| +230.1% | +2.87ms | 65.6% → 69.5% | 1.2ms → 4.1ms |           3 | `createTopLevel$default(FirElementSerializer$Companion, FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean, int, Object)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion` |
| +175.7% | +1.15ms | 34.4% → 30.5% | 0.7ms → 1.8ms |       2 → 1 | `create(FirSession, ScopeSession, FirClass, FirSerializerExtension, FirElementSerializer, AbstractTypeApproximator, LanguageVersionSettings, boolean)`                              | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion` |

##### `<clinit>()` (`org.jetbrains.kotlin.fir.types.CompilerConeAttributes`)

| Change |   Delta |             % |        Time | Contentions | Caller                                                                                 | Location                                                      |
| -----: | ------: | ------------: | ----------: | ----------: | -------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|    new | +3.62ms | 0.0% → 100.0% | 0ms → 3.6ms |       0 → 1 | `typeOrTypealiasProto(ConeKotlinType, boolean, FirTypeRef, boolean, boolean, boolean)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `serializeProperty(FirProperty, ProtoBuf$Property$Builder, MutableVersionRequirementTable, FirElementSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`)

| Change |   Delta |             % |        Time | Contentions | Caller                       | Location                                                      |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------- | ------------------------------------------------------------- |
|    new | +3.52ms | 0.0% → 100.0% | 0ms → 3.5ms |       0 → 2 | `propertyProto(FirProperty)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `visitWhileLoop(IrWhileLoop, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |   Delta |             % |        Time | Contentions | Caller                                | Location                                                     |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------- | ------------------------------------------------------------ |
|    new | +3.47ms | 0.0% → 100.0% | 0ms → 3.5ms |       0 → 1 | `visitWhileLoop(IrWhileLoop, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `getRegeneratedObjectNameGenerator(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                                                                                                            | Location                                                     |
| ------: | ------: | -----: | ------------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| +212.7% | +3.17ms | 100.0% | 1.5ms → 4.7ms |       8 → 6 | `<init>(IrFunction, JvmMethodSignature, IrFrameMap, InstructionAdapter, ClassCodegen, SourceMapper, ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `<clinit>()` (`org.jetbrains.kotlin.resolve.calls.checkers.CoroutineCallCheckerKt`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                             | Location                                                 |
| ------: | ------: | -----: | ------------: | ----------: | -------------------------------------------------- | -------------------------------------------------------- |
| +913.7% | +3.01ms | 100.0% | 0.3ms → 3.3ms |       1 → 2 | `generateInlineIntrinsicForIr(FunctionDescriptor)` | `org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt` |

##### `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.CapturedVarsOptimizationMethodTransformer`)

|   Change |   Delta |      % |          Time | Contentions | Caller                          | Location                                                                           |
| -------: | ------: | -----: | ------------: | ----------: | ------------------------------- | ---------------------------------------------------------------------------------- |
| +1639.0% | +2.94ms | 100.0% | 0.2ms → 3.1ms |       1 → 5 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer` |

##### `collectRewriteActions()` (`org.jetbrains.kotlin.codegen.optimization.ConstantConditionEliminationMethodTransformer$ConstantConditionsOptimization`)

| Change |   Delta |             % |        Time | Contentions | Caller  | Location                                                                                                                 |
| -----: | ------: | ------------: | ----------: | ----------: | ------- | ------------------------------------------------------------------------------------------------------------------------ |
|    new | +2.69ms | 0.0% → 100.0% | 0ms → 2.7ms |       0 → 3 | `run()` | `org.jetbrains.kotlin.codegen.optimization.ConstantConditionEliminationMethodTransformer$ConstantConditionsOptimization` |

##### `getValue(Object, KProperty)` (`org.jetbrains.kotlin.fir.backend.MappedLazyVar`)

|  Change |   Delta |      % |          Time | Contentions | Caller                   | Location                                                 |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------ | -------------------------------------------------------- |
| +198.1% | +2.49ms | 100.0% | 1.3ms → 3.7ms |       1 → 7 | `getOverriddenSymbols()` | `org.jetbrains.kotlin.fir.lazy.Fir2IrLazySimpleFunction` |

##### `<init>()` (`org.jetbrains.kotlin.util.slicedMap.OpenAddressLinearProbingHashTable`)

|  Change |   Delta |      % |          Time | Contentions | Caller                               | Location                                            |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------------------ | --------------------------------------------------- |
| +358.4% | +2.34ms | 100.0% | 0.7ms → 3.0ms |       3 → 1 | `put(WritableSlice, Object, Object)` | `org.jetbrains.kotlin.util.slicedMap.SlicedMapImpl` |

##### `newBuilder()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`)

| Change |   Delta |             % |        Time | Contentions | Caller                                      | Location                                                      |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------- | ------------------------------------------------------------- |
|    new | +2.27ms | 0.0% → 100.0% | 0ms → 2.3ms |       0 → 2 | `typeArgument(ConeTypeProjection, boolean)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`)

|  Change |   Delta |      % |          Time | Contentions | Caller                         | Location                                                     |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| +108.7% | +2.23ms | 100.0% | 2.1ms → 4.3ms |       6 → 8 | `visitWhen(IrWhen, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |     Delta |             % |             Time | Contentions | Caller                                      | Location                                                             |
| ------: | --------: | ------------: | ---------------: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
|  -17.7% | -230.71ms | 97.0% → 90.1% |    1.30s → 1.07s |     93 → 88 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
| +192.0% |  +77.71ms |   3.0% → 9.9% | 40.5ms → 118.2ms |       1 → 2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |    Delta |      % |            Time | Contentions | Caller                                  | Location                                                   |
| -----: | -------: | -----: | --------------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| -23.8% | -13.78ms | 100.0% | 58.0ms → 44.2ms |     55 → 61 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                    | Location                                            |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------------------------------------- | --------------------------------------------------- |
| -89.4% | -8.46ms | 100.0% | 9.5ms → 1.0ms |      14 → 4 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `isBuiltInSuspendCoroutineUninterceptedOrReturn(FunctionDescriptor)` (`org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt`)

| Change |   Delta |      % |          Time | Contentions | Caller                                             | Location                                                 |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------------------- | -------------------------------------------------------- |
| -79.9% | -5.19ms | 100.0% | 6.5ms → 1.3ms |           2 | `generateInlineIntrinsicForIr(FunctionDescriptor)` | `org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt` |

##### `rewriteLabelInstructions()` (`org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod`)

| Change |   Delta |      % |          Time | Contentions | Caller        | Location                                                                                             |
| -----: | ------: | -----: | ------------: | ----------: | ------------- | ---------------------------------------------------------------------------------------------------- |
| -78.1% | -4.34ms | 100.0% | 5.6ms → 1.2ms |       2 → 1 | `transform()` | `org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod` |

##### `visitLocalVariable(String, String, String, Label, Label, int)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`)

| Change |   Delta |      % |          Time | Contentions | Caller                  | Location                                                 |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------- | -------------------------------------------------------- |
| -93.1% | -3.36ms | 100.0% | 3.6ms → 0.3ms |       4 → 2 | `accept(MethodVisitor)` | `org.jetbrains.org.objectweb.asm.tree.LocalVariableNode` |

##### `firstOverridden(CallableMemberDescriptor, boolean, Function1)` (`org.jetbrains.kotlin.resolve.descriptorUtil.DescriptorUtilsKt`)

|  Change |   Delta |             % |        Time | Contentions | Caller                                                                               | Location                                                        |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| removed | -3.34ms | 100.0% → 0.0% | 3.3ms → 0ms |       1 → 0 | `firstOverridden$default(CallableMemberDescriptor, boolean, Function1, int, Object)` | `org.jetbrains.kotlin.resolve.descriptorUtil.DescriptorUtilsKt` |

##### `doRemap(int)` (`org.jetbrains.kotlin.codegen.inline.LocalVarRemapper`)

|  Change |   Delta |             % |        Time | Contentions | Caller       | Location                                               |
| ------: | ------: | ------------: | ----------: | ----------: | ------------ | ------------------------------------------------------ |
| removed | -3.25ms | 100.0% → 0.0% | 3.2ms → 0ms |       4 → 0 | `remap(int)` | `org.jetbrains.kotlin.codegen.inline.LocalVarRemapper` |

##### `preprocessNodeBeforeInline(MethodNode, Map)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                        | Location                                            |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------- | --------------------------------------------------- |
| -70.7% | -3.24ms | 100.0% | 4.6ms → 1.3ms |      12 → 5 | `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`)

|  Change |   Delta |             % |        Time | Contentions | Caller                                     | Location                                                |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------------------ | ------------------------------------------------------- |
| removed | -3.13ms | 100.0% → 0.0% | 3.1ms → 0ms |       2 → 0 | `generateMethod(IrFunction, SourceMapper)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `copyOperation(AbstractInsnNode, BasicValue)` (`org.jetbrains.kotlin.codegen.coroutines.UninitializedStoresProcessor$UninitializedNewValueMarkerInterpreter`)

| Change |   Delta |      % |          Time | Contentions | Caller                                   | Location                                                                                                      |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| -96.8% | -2.86ms | 100.0% | 3.0ms → 0.1ms |           1 | `copyOperation(AbstractInsnNode, Value)` | `org.jetbrains.kotlin.codegen.coroutines.UninitializedStoresProcessor$UninitializedNewValueMarkerInterpreter` |

##### `invoke(IrFunctionAccessExpression, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.intrinsics.Equals`)

|  Change |   Delta |             % |        Time | Contentions | Caller                         | Location                                                     |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| removed | -2.86ms | 100.0% → 0.0% | 2.9ms → 0ms |       1 → 0 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                                                                           | Location                                                     |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| -35.4% | -2.81ms | 100.0% | 7.9ms → 5.1ms |     17 → 14 | `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |   Delta |             % |        Time | Contentions | Caller                  | Location                                                |
| ------: | ------: | ------------: | ----------: | ----------: | ----------------------- | ------------------------------------------------------- |
| removed | -2.51ms | 100.0% → 0.0% | 2.5ms → 0ms |       1 → 0 | `generateAnnotations()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `removeClosureAssertions(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner$Companion`)

|  Change |   Delta |             % |        Time | Contentions | Caller                                                                | Location                                                      |
| ------: | ------: | ------------: | ----------: | ----------: | --------------------------------------------------------------------- | ------------------------------------------------------------- |
| removed | -2.34ms | 100.0% → 0.0% | 2.3ms → 0ms |       2 → 0 | `access$removeClosureAssertions(MethodInliner$Companion, MethodNode)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner$Companion` |

##### `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                                      | Location                                              |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------------------------------------------------------- | ----------------------------------------------------- |
| -43.5% | -2.25ms | 100.0% | 5.2ms → 2.9ms |       4 → 3 | `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier` |

##### `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                                                    | Location                                                   |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| -46.4% | -2.20ms | 100.0% | 4.7ms → 2.5ms |           7 | `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen` |

##### `<clinit>()` (`org.jetbrains.kotlin.codegen.inline.FieldRemapper`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                               | Location                                                   |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------------------- | ---------------------------------------------------------- |
| -83.2% | -2.00ms | 100.0% | 2.4ms → 0.4ms |           1 | `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                                   | Location                                            |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------------------ | --------------------------------------------------- |
| -30.3% | -1.97ms | 100.0% | 6.5ms → 4.5ms |       3 → 5 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.AbstractClassBuilder` |

##### `<init>(FirSession, ScopeSession, FirDeclaration, Interner, FirSerializerExtension, MutableTypeTable, MutableVersionRequirementTable, boolean, AbstractTypeApproximator, LanguageVersionSettings, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`)

|  Change |   Delta |             % |        Time | Contentions | Caller                                                                                                                                                                                                                                | Location                                                      |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| removed | -1.95ms | 100.0% → 0.0% | 1.9ms → 0ms |       4 → 0 | `<init>(FirSession, ScopeSession, FirDeclaration, Interner, FirSerializerExtension, MutableTypeTable, MutableVersionRequirementTable, boolean, AbstractTypeApproximator, LanguageVersionSettings, boolean, DefaultConstructorMarker)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

### Total time

#### Regressions

Functions with the largest increase in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

|  Change |    Delta |             % |              Time | Contentions | Function                                                                                  | Location                                                             |
| ------: | -------: | ------------: | ----------------: | ----------: | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| +143.4% | +74.73ms |   3.0% → 7.7% |  52.1ms → 126.8ms |     14 → 19 | `compileInlineFunction(JvmMethodSignature)`                                               | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |
|  +52.4% | +54.34ms |   6.0% → 9.6% | 103.6ms → 158.0ms |    126 → 86 | `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`           |
|  +51.9% | +54.32ms |   6.0% → 9.6% | 104.6ms → 158.9ms |    129 → 88 | `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)`       | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`     |
|  +33.7% | +54.30ms |  9.3% → 13.1% | 161.0ms → 215.3ms |   241 → 195 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`         |
|  +33.7% | +54.30ms |  9.3% → 13.1% | 161.0ms → 215.3ms |   241 → 195 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`         |
|  +33.7% | +54.30ms |  9.3% → 13.1% | 161.0ms → 215.3ms |   241 → 195 | `visitBlockBody(IrBlockBody, Object)`                                                     | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`         |
|  +33.7% | +54.30ms |  9.3% → 13.1% | 161.0ms → 215.3ms |   241 → 195 | `accept(IrVisitor, Object)`                                                               | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                    |
|  +32.3% | +53.29ms |  9.5% → 13.2% | 165.0ms → 218.3ms |   271 → 205 | `generate()`                                                                              | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`         |
|  +20.3% | +53.00ms | 15.1% → 19.1% | 261.6ms → 314.6ms |   499 → 402 | `doGenerate(ReifiedTypeParametersUsages)`                                                 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`           |
|  +20.3% | +53.00ms | 15.1% → 19.1% | 261.6ms → 314.6ms |   499 → 402 | `generate(ReifiedTypeParametersUsages)`                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`           |
|  +20.3% | +53.00ms | 15.1% → 19.1% | 261.6ms → 314.6ms |   499 → 402 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`             | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`           |
|  +32.9% | +50.68ms |  8.9% → 12.4% | 154.1ms → 204.8ms |   226 → 181 | `visitReturn(IrReturn, BlockInfo)`                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`         |
|  +32.9% | +50.68ms |  8.9% → 12.4% | 154.1ms → 204.8ms |   226 → 181 | `visitReturn(IrReturn, Object)`                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`         |
|  +32.9% | +50.68ms |  8.9% → 12.4% | 154.1ms → 204.8ms |   226 → 181 | `accept(IrVisitor, Object)`                                                               | `org.jetbrains.kotlin.ir.expressions.IrReturn`                       |
|  +30.3% | +45.50ms |  8.7% → 11.9% | 150.3ms → 195.8ms |   211 → 162 | `visitCall(IrCall, BlockInfo)`                                                            | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`         |
|  +30.3% | +45.50ms |  8.7% → 11.9% | 150.3ms → 195.8ms |   211 → 162 | `visitCall(IrCall, Object)`                                                               | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`         |
|  +30.3% | +45.50ms |  8.7% → 11.9% | 150.3ms → 195.8ms |   211 → 162 | `accept(IrVisitor, Object)`                                                               | `org.jetbrains.kotlin.ir.expressions.IrCall`                         |
|  +35.1% | +44.55ms |  7.3% → 10.4% | 126.8ms → 171.4ms |   163 → 114 | `visitWhen(IrWhen, BlockInfo)`                                                            | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`         |
|  +35.1% | +44.55ms |  7.3% → 10.4% | 126.8ms → 171.4ms |   163 → 114 | `visitWhen(IrWhen, Object)`                                                               | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`         |
|  +35.1% | +44.55ms |  7.3% → 10.4% | 126.8ms → 171.4ms |   163 → 114 | `accept(IrVisitor, Object)`                                                               | `org.jetbrains.kotlin.ir.expressions.IrWhen`                         |

#### Improvements

Functions with the largest decrease in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |              % |            Time |   Contentions | Function                                                                                                          | Location                                                                          |
| ------: | --------: | -------------: | --------------: | ------------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
|  -11.4% | -177.72ms |  90.2% → 84.1% |   1.56s → 1.38s |     592 → 490 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|   -7.2% | -118.59ms |  95.3% → 93.0% |   1.65s → 1.53s |     784 → 730 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|   -5.0% |  -86.23ms | 100.0% → 99.9% |   1.73s → 1.64s | 1,079 → 1,072 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
|   -5.0% |  -86.23ms | 100.0% → 99.9% |   1.73s → 1.64s | 1,079 → 1,072 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000a001890220` |
|   -5.0% |  -86.23ms | 100.0% → 99.9% |   1.73s → 1.64s | 1,079 → 1,072 | `run()`                                                                                                           | `java.util.concurrent.CompletableFuture$AsyncRun`                                 |
|   -5.0% |  -85.88ms |          99.7% |   1.73s → 1.64s | 1,057 → 1,048 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
|   -4.9% |  -85.80ms |         100.0% |   1.73s → 1.64s | 1,084 → 1,075 | `runWorker(ThreadPoolExecutor$Worker)`                                                                            | `java.util.concurrent.ThreadPoolExecutor`                                         |
|   -4.9% |  -85.80ms |         100.0% |   1.73s → 1.64s | 1,084 → 1,075 | `run()`                                                                                                           | `java.util.concurrent.ThreadPoolExecutor$Worker`                                  |
|   -4.9% |  -85.80ms |         100.0% |   1.73s → 1.64s | 1,084 → 1,075 | `runWith(Object, Runnable)`                                                                                       | `java.lang.Thread`                                                                |
|   -4.9% |  -85.80ms |         100.0% |   1.73s → 1.64s | 1,084 → 1,075 | `run()`                                                                                                           | `java.lang.Thread`                                                                |
|   -5.0% |  -83.03ms |          95.6% |   1.65s → 1.57s |     798 → 799 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  -38.1% |  -19.62ms |    3.0% → 1.9% | 51.5ms → 31.9ms |      112 → 68 | `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)`                                              | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                        |
|  -42.1% |  -17.05ms |    2.3% → 1.4% | 40.5ms → 23.5ms |       97 → 53 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)`                                                    | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                               |
|  -42.1% |  -17.05ms |    2.3% → 1.4% | 40.5ms → 23.5ms |       97 → 53 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)`                                                         | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                               |
|  -83.0% |   -5.78ms |    0.4% → 0.1% |   7.0ms → 1.2ms |         7 → 2 | `mapOverriddenSpecialBuiltinIfNeeded(IrFunction, boolean)`                                                        | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                  |
|  -93.1% |   -5.71ms |   0.4% → <0.1% |   6.1ms → 0.4ms |         6 → 1 | `getOverriddenBuiltinReflectingJvmDescriptor(CallableMemberDescriptor)`                                           | `org.jetbrains.kotlin.load.java.SpecialBuiltinMembers`                            |
|  -68.6% |   -5.64ms |    0.5% → 0.2% |   8.2ms → 2.6ms |             8 | `mapToCallableMethod(IrCall, IrFunction)`                                                                         | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                  |
|  -64.8% |   -5.37ms |    0.5% → 0.2% |   8.3ms → 2.9ms |         6 → 3 | `<init>(SourceMapper, SMAP, MethodVisitor)`                                                                       | `org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`               |
|  -79.9% |   -5.19ms |    0.4% → 0.1% |   6.5ms → 1.3ms |             2 | `isBuiltInSuspendCoroutineUninterceptedOrReturn(FunctionDescriptor)`                                              | `org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt`                          |
| removed |   -5.07ms |    0.3% → 0.0% |     5.1ms → 0ms |         5 → 0 | `firstOverridden(CallableMemberDescriptor, boolean, Function1)`                                                   | `org.jetbrains.kotlin.resolve.descriptorUtil.DescriptorUtilsKt`                   |

##### Ours

|  Change |     Delta |              % |            Time |   Contentions | Function                                                                                                          | Location                                                                                             |
| ------: | --------: | -------------: | --------------: | ------------: | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
|  -11.4% | -177.72ms |  90.2% → 84.1% |   1.56s → 1.38s |     592 → 490 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                              |
|   -7.2% | -118.59ms |  95.3% → 93.0% |   1.65s → 1.53s |     784 → 730 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                              |
|   -5.0% |  -86.23ms | 100.0% → 99.9% |   1.73s → 1.64s | 1,079 → 1,072 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                                               |
|   -5.0% |  -86.23ms | 100.0% → 99.9% |   1.73s → 1.64s | 1,079 → 1,072 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000a001890220`                    |
|   -5.0% |  -85.88ms |          99.7% |   1.73s → 1.64s | 1,057 → 1,048 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                                               |
|   -5.0% |  -83.03ms |          95.6% |   1.65s → 1.57s |     798 → 799 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                              |
|  -38.1% |  -19.62ms |    3.0% → 1.9% | 51.5ms → 31.9ms |      112 → 68 | `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)`                                              | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                                           |
|  -42.1% |  -17.05ms |    2.3% → 1.4% | 40.5ms → 23.5ms |       97 → 53 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)`                                                    | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                                  |
|  -42.1% |  -17.05ms |    2.3% → 1.4% | 40.5ms → 23.5ms |       97 → 53 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)`                                                         | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                                  |
|  -83.0% |   -5.78ms |    0.4% → 0.1% |   7.0ms → 1.2ms |         7 → 2 | `mapOverriddenSpecialBuiltinIfNeeded(IrFunction, boolean)`                                                        | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                                     |
|  -93.1% |   -5.71ms |   0.4% → <0.1% |   6.1ms → 0.4ms |         6 → 1 | `getOverriddenBuiltinReflectingJvmDescriptor(CallableMemberDescriptor)`                                           | `org.jetbrains.kotlin.load.java.SpecialBuiltinMembers`                                               |
|  -68.6% |   -5.64ms |    0.5% → 0.2% |   8.2ms → 2.6ms |             8 | `mapToCallableMethod(IrCall, IrFunction)`                                                                         | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                                     |
|  -64.8% |   -5.37ms |    0.5% → 0.2% |   8.3ms → 2.9ms |         6 → 3 | `<init>(SourceMapper, SMAP, MethodVisitor)`                                                                       | `org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`                                  |
|  -79.9% |   -5.19ms |    0.4% → 0.1% |   6.5ms → 1.3ms |             2 | `isBuiltInSuspendCoroutineUninterceptedOrReturn(FunctionDescriptor)`                                              | `org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt`                                             |
| removed |   -5.07ms |    0.3% → 0.0% |     5.1ms → 0ms |         5 → 0 | `firstOverridden(CallableMemberDescriptor, boolean, Function1)`                                                   | `org.jetbrains.kotlin.resolve.descriptorUtil.DescriptorUtilsKt`                                      |
| removed |   -5.07ms |    0.3% → 0.0% |     5.1ms → 0ms |         5 → 0 | `firstOverridden$default(CallableMemberDescriptor, boolean, Function1, int, Object)`                              | `org.jetbrains.kotlin.resolve.descriptorUtil.DescriptorUtilsKt`                                      |
|  -78.1% |   -4.34ms |    0.3% → 0.1% |   5.6ms → 1.2ms |         2 → 1 | `rewriteLabelInstructions()`                                                                                      | `org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod` |
|  -32.3% |   -4.14ms |    0.7% → 0.5% |  12.8ms → 8.7ms |       39 → 24 | `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)`                                                     | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                                  |
|  -55.3% |   -3.74ms |    0.4% → 0.2% |   6.8ms → 3.0ms |       16 → 15 | `analyzeMainLoop()`                                                                                               | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                      |
|  -55.3% |   -3.74ms |    0.4% → 0.2% |   6.8ms → 3.0ms |       16 → 15 | `analyze()`                                                                                                       | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                      |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`)

|  Change |    Delta |              % |             Time | Contentions | Caller                                                                                    | Location                                                   |
| ------: | -------: | -------------: | ---------------: | ----------: | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| +142.0% | +73.96ms | 100.0% → 99.4% | 52.1ms → 126.1ms |     14 → 18 | `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen` |
|     new |  +0.77ms |    0.0% → 0.6% |      0ms → 0.8ms |       0 → 1 | `canInlineArgumentsInPlace()`                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen` |

##### `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                                                                              | Location                                                         |
| -----: | -------: | -----: | ----------------: | ----------: | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| +52.4% | +54.34ms | 100.0% | 103.6ms → 158.0ms |    126 → 86 | `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator` |

##### `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`)

| Change |    Delta |      % |              Time | Contentions | Caller                         | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| +51.9% | +54.32ms | 100.0% | 104.6ms → 158.9ms |    129 → 88 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |           % |              Time | Contentions | Caller                                                       | Location                                                     |
| -----: | -------: | ----------: | ----------------: | ----------: | ------------------------------------------------------------ | ------------------------------------------------------------ |
| +33.7% | +54.30ms |      100.0% | 161.0ms → 215.3ms |   241 → 195 | `visitBlockBody(IrBlockBody, BlockInfo)`                     | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| -21.6% |  -1.56ms | 4.5% → 2.6% |     7.3ms → 5.7ms |           9 | `visitContainerExpression(IrContainerExpression, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                                | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | ------------------------------------- | ------------------------------------------------------------ |
| +33.7% | +54.30ms | 100.0% | 161.0ms → 215.3ms |   241 → 195 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                      | Location                                          |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------- | ------------------------------------------------- |
| +33.7% | +54.30ms | 100.0% | 161.0ms → 215.3ms |   241 → 195 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlockBody` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

| Change |    Delta |      % |              Time | Contentions | Caller       | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | ------------ | ------------------------------------------------------------ |
| +33.7% | +54.30ms | 100.0% | 161.0ms → 215.3ms |   241 → 195 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                                    | Location                                                   |
| -----: | -------: | -----: | ----------------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| +32.3% | +53.29ms | 100.0% | 165.0ms → 218.3ms |   271 → 205 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                                  | Location                                                   |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| +20.3% | +53.00ms | 100.0% | 261.6ms → 314.6ms |   499 → 402 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                                                                        | Location                                                   |
| -----: | -------: | -----: | ----------------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| +20.3% | +53.00ms | 100.0% | 261.6ms → 314.6ms |   499 → 402 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                           | Location                                                |
| -----: | -------: | -----: | ----------------: | ----------: | -------------------------------- | ------------------------------------------------------- |
| +20.3% | +53.00ms | 100.0% | 261.6ms → 314.6ms |   499 → 402 | `generateMethodNode(IrFunction)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                          | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | ------------------------------- | ------------------------------------------------------------ |
| +32.9% | +50.68ms | 100.0% | 154.1ms → 204.8ms |   226 → 181 | `visitReturn(IrReturn, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                      | Location                                       |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------- | ---------------------------------------------- |
| +32.9% | +50.68ms | 100.0% | 154.1ms → 204.8ms |   226 → 181 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrReturn` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`)

|  Change |    Delta |              % |              Time | Contentions | Caller                                                     | Location                                                     |
| ------: | -------: | -------------: | ----------------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
|  +33.5% | +51.37ms | 99.5% → 100.0% | 153.4ms → 204.8ms |   225 → 181 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| removed |  -0.70ms |    0.5% → 0.0% |       0.7ms → 0ms |       1 → 0 | `visitWhen(IrWhen, BlockInfo)`                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                      | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| +30.3% | +45.50ms | 100.0% | 150.3ms → 195.8ms |   211 → 162 | `visitCall(IrCall, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                      | Location                                     |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------- | -------------------------------------------- |
| +30.3% | +45.50ms | 100.0% | 150.3ms → 195.8ms |   211 → 162 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrCall` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`)

| Change |    Delta |             % |              Time | Contentions | Caller                                                     | Location                                                     |
| -----: | -------: | ------------: | ----------------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| +40.8% | +46.33ms | 75.6% → 81.7% | 113.6ms → 160.0ms |    140 → 95 | `visitWhen(IrWhen, BlockInfo)`                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| -84.7% |  -4.29ms |   3.4% → 0.4% |     5.1ms → 0.8ms |       5 → 1 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  +9.1% |  +2.89ms | 21.0% → 17.6% |   31.6ms → 34.5ms |     66 → 65 | `visitReturn(IrReturn, BlockInfo)`                         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|    new |  +0.57ms |   0.0% → 0.3% |       0ms → 0.6ms |       0 → 1 | `visitTypeOperator(IrTypeOperatorCall, BlockInfo)`         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                      | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| +35.1% | +44.55ms | 100.0% | 126.8ms → 171.4ms |   163 → 114 | `visitWhen(IrWhen, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitWhen(IrWhen, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                      | Location                                     |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------- | -------------------------------------------- |
| +35.1% | +44.55ms | 100.0% | 126.8ms → 171.4ms |   163 → 114 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrWhen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`)

| Change |    Delta |             % |              Time | Contentions | Caller                                                     | Location                                                     |
| -----: | -------: | ------------: | ----------------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| +38.1% | +46.07ms | 95.5% → 97.5% | 121.1ms → 167.1ms |   157 → 106 | `visitReturn(IrReturn, BlockInfo)`                         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| -26.4% |  -1.52ms |   4.5% → 2.5% |     5.8ms → 4.2ms |       6 → 8 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |     Delta |           % |             Time | Contentions | Caller                                      | Location                                                             |
| ------: | --------: | ----------: | ---------------: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
|  -11.4% | -177.72ms |      100.0% |    1.56s → 1.38s |   592 → 490 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
| +192.0% |  +77.71ms | 2.6% → 8.5% | 40.5ms → 118.2ms |       1 → 2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |     Delta |      % |          Time | Contentions | Caller       | Location                                                |
| -----: | --------: | -----: | ------------: | ----------: | ------------ | ------------------------------------------------------- |
|  -7.2% | -118.59ms | 100.0% | 1.65s → 1.53s |   784 → 730 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |    Delta |      % |          Time |   Contentions | Caller  | Location                                                                          |
| -----: | -------: | -----: | ------------: | ------------: | ------- | --------------------------------------------------------------------------------- |
|  -5.0% | -86.23ms | 100.0% | 1.73s → 1.64s | 1,079 → 1,072 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000a001890220` |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000a001890220`)

| Change |    Delta |      % |          Time |   Contentions | Caller  | Location                                          |
| -----: | -------: | -----: | ------------: | ------------: | ------- | ------------------------------------------------- |
|  -5.0% | -86.23ms | 100.0% | 1.73s → 1.64s | 1,079 → 1,072 | `run()` | `java.util.concurrent.CompletableFuture$AsyncRun` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

| Change |    Delta |      % |          Time |   Contentions | Caller                                 | Location                                  |
| -----: | -------: | -----: | ------------: | ------------: | -------------------------------------- | ----------------------------------------- |
|  -5.0% | -86.23ms | 100.0% | 1.73s → 1.64s | 1,079 → 1,072 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |    Delta |      % |          Time |   Contentions | Caller                                                                                                            | Location                                               |
| -----: | -------: | -----: | ------------: | ------------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|  -5.0% | -85.88ms | 100.0% | 1.73s → 1.64s | 1,057 → 1,048 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

| Change |    Delta |      % |          Time |   Contentions | Caller  | Location                                         |
| -----: | -------: | -----: | ------------: | ------------: | ------- | ------------------------------------------------ |
|  -4.9% | -85.80ms | 100.0% | 1.73s → 1.64s | 1,084 → 1,075 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

| Change |    Delta |      % |          Time |   Contentions | Caller                      | Location           |
| -----: | -------: | -----: | ------------: | ------------: | --------------------------- | ------------------ |
|  -4.9% | -85.80ms | 100.0% | 1.73s → 1.64s | 1,084 → 1,075 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |    Delta |      % |          Time |   Contentions | Caller  | Location           |
| -----: | -------: | -----: | ------------: | ------------: | ------- | ------------------ |
|  -4.9% | -85.80ms | 100.0% | 1.73s → 1.64s | 1,084 → 1,075 | `run()` | `java.lang.Thread` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |    Delta |      % |          Time | Contentions | Caller                                                   | Location                                               |
| -----: | -------: | -----: | ------------: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
|  -5.0% | -83.03ms | 100.0% | 1.65s → 1.57s |   798 → 799 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

| Change |    Delta |      % |            Time | Contentions | Caller                                                                                    | Location                                                   |
| -----: | -------: | -----: | --------------: | ----------: | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| -38.1% | -19.62ms | 100.0% | 51.5ms → 31.9ms |    112 → 68 | `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen` |

##### `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

| Change |    Delta |            % |            Time | Contentions | Caller                                                                               | Location                                            |
| -----: | -------: | -----------: | --------------: | ----------: | ------------------------------------------------------------------------------------ | --------------------------------------------------- |
| -42.1% | -17.05ms |       100.0% | 40.5ms → 23.5ms |     97 → 53 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)`                            | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |
| +25.1% |  +0.53ms | 5.2% → 11.3% |   2.1ms → 2.7ms |       2 → 1 | `access$doInline(MethodInliner, MethodVisitor, LocalVarRemapper, boolean, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

| Change |    Delta |      % |            Time | Contentions | Caller                                                               | Location                                                   |
| -----: | -------: | -----: | --------------: | ----------: | -------------------------------------------------------------------- | ---------------------------------------------------------- |
| -42.1% | -17.05ms | 100.0% | 40.5ms → 23.5ms |     97 → 53 | `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen` |

##### `mapOverriddenSpecialBuiltinIfNeeded(IrFunction, boolean)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

| Change |   Delta |      % |          Time | Contentions | Caller                                    | Location                                                         |
| -----: | ------: | -----: | ------------: | ----------: | ----------------------------------------- | ---------------------------------------------------------------- |
| -83.0% | -5.78ms | 100.0% | 7.0ms → 1.2ms |       7 → 2 | `mapToCallableMethod(IrCall, IrFunction)` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `getOverriddenBuiltinReflectingJvmDescriptor(CallableMemberDescriptor)` (`org.jetbrains.kotlin.load.java.SpecialBuiltinMembers`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                     | Location                                                         |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| -93.1% | -5.71ms | 100.0% | 6.1ms → 0.4ms |       6 → 1 | `mapOverriddenSpecialBuiltinIfNeeded(IrFunction, boolean)` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `mapToCallableMethod(IrCall, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

| Change |   Delta |      % |          Time | Contentions | Caller                         | Location                                                     |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| -68.6% | -5.64ms | 100.0% | 8.2ms → 2.6ms |           8 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`)

| Change |   Delta |      % |          Time | Contentions | Caller                                     | Location                                                |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------ | ------------------------------------------------------- |
| -64.8% | -5.37ms | 100.0% | 8.3ms → 2.9ms |       6 → 3 | `generateMethod(IrFunction, SourceMapper)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `isBuiltInSuspendCoroutineUninterceptedOrReturn(FunctionDescriptor)` (`org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt`)

| Change |   Delta |      % |          Time | Contentions | Caller                                             | Location                                                 |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------------------- | -------------------------------------------------------- |
| -79.9% | -5.19ms | 100.0% | 6.5ms → 1.3ms |           2 | `generateInlineIntrinsicForIr(FunctionDescriptor)` | `org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt` |

##### `firstOverridden(CallableMemberDescriptor, boolean, Function1)` (`org.jetbrains.kotlin.resolve.descriptorUtil.DescriptorUtilsKt`)

|  Change |   Delta |             % |        Time | Contentions | Caller                                                                               | Location                                                        |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| removed | -5.07ms | 100.0% → 0.0% | 5.1ms → 0ms |       5 → 0 | `firstOverridden$default(CallableMemberDescriptor, boolean, Function1, int, Object)` | `org.jetbrains.kotlin.resolve.descriptorUtil.DescriptorUtilsKt` |

##### `firstOverridden$default(CallableMemberDescriptor, boolean, Function1, int, Object)` (`org.jetbrains.kotlin.resolve.descriptorUtil.DescriptorUtilsKt`)

|  Change |   Delta |             % |        Time | Contentions | Caller                                                                  | Location                                                                   |
| ------: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| removed | -5.07ms | 100.0% → 0.0% | 5.1ms → 0ms |       5 → 0 | `getOverriddenBuiltinReflectingJvmDescriptor(CallableMemberDescriptor)` | `org.jetbrains.kotlin.load.java.SpecialBuiltinMembers`                     |
| removed | -1.72ms |  34.0% → 0.0% | 1.7ms → 0ms |       4 → 0 | `getSpecialSignatureInfo(CallableMemberDescriptor)`                     | `org.jetbrains.kotlin.load.java.BuiltinMethodsWithSpecialGenericSignature` |

##### `rewriteLabelInstructions()` (`org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod`)

| Change |   Delta |      % |          Time | Contentions | Caller        | Location                                                                                             |
| -----: | ------: | -----: | ------------: | ----------: | ------------- | ---------------------------------------------------------------------------------------------------- |
| -78.1% | -4.34ms | 100.0% | 5.6ms → 1.2ms |       2 → 1 | `transform()` | `org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod` |

##### `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

| Change |   Delta |      % |           Time | Contentions | Caller                                                         | Location                                            |
| -----: | ------: | -----: | -------------: | ----------: | -------------------------------------------------------------- | --------------------------------------------------- |
| -32.3% | -4.14ms | 100.0% | 12.8ms → 8.7ms |     39 → 24 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `analyzeMainLoop()` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

| Change |   Delta |      % |          Time | Contentions | Caller      | Location                                                        |
| -----: | ------: | -----: | ------------: | ----------: | ----------- | --------------------------------------------------------------- |
| -55.3% | -3.74ms | 100.0% | 6.8ms → 3.0ms |     16 → 15 | `analyze()` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer` |

##### `analyze()` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

|  Change |   Delta |             % |          Time | Contentions | Caller                                                           | Location                                                                                         |
| ------: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -96.5% | -2.85ms |  43.7% → 3.4% | 3.0ms → 0.1ms |       1 → 2 | `run()`                                                          | `org.jetbrains.kotlin.codegen.coroutines.UninitializedStoresProcessor`                           |
| +128.5% | +1.17ms | 13.4% → 68.7% | 0.9ms → 2.1ms |       4 → 3 | `transform()`                                                    | `org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer$Transformer` |
|  -99.2% | -0.69ms |  10.2% → 0.2% | 0.7ms → 5.2µs |       3 → 1 | `preprocessNodeBeforeInline(MethodNode, Map)`                    | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                              |
| -100.0% | -0.60ms |  8.9% → <0.1% | 0.6ms → 0.2µs |       2 → 1 | `analyze(String, MethodNode)`                                    | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryValsAnalyzer`                  |
|  -80.0% | -0.49ms |   9.0% → 4.0% | 0.6ms → 0.1ms |       2 → 1 | `analyzeMethodNodeWithInterpreter(MethodNode, BasicInterpreter)` | `org.jetbrains.kotlin.codegen.inline.MethodInlinerUtilKt`                                        |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`)

|  Change |    Delta |             % |             Time | Contentions | Callee                                                                                    | Location                                                        |
| ------: | -------: | ------------: | ---------------: | ----------: | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| +192.0% | +77.71ms | 77.7% → 93.2% | 40.5ms → 118.2ms |       1 → 2 | `generateMethodNode(IrFunction)`                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`         |
|  -37.4% |  -2.86ms |  14.7% → 3.8% |    7.7ms → 4.8ms |       4 → 7 | `generateInlineIntrinsicForIr(FunctionDescriptor)`                                        | `org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt`        |
|  +15.5% |  +0.36ms |   4.4% → 2.1% |    2.3ms → 2.7ms |       5 → 7 | `loadCompiledInlineFunction(ClassId, Method, boolean, boolean, boolean, GenerationState)` | `org.jetbrains.kotlin.codegen.inline.SourceCompilerForInlineKt` |

##### `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

|  Change |    Delta |             % |             Time | Contentions | Callee                                                               | Location                                                             |
| ------: | -------: | ------------: | ---------------: | ----------: | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| +142.0% | +73.96ms | 50.3% → 79.8% | 52.1ms → 126.1ms |     14 → 18 | `compileInlineFunction(JvmMethodSignature)`                          | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |
|  -38.1% | -19.62ms | 49.7% → 20.2% |  51.5ms → 31.9ms |    112 → 68 | `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`           |

##### `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`)

| Change |    Delta |             % |              Time | Contentions | Callee                                                                                    | Location                                                   |
| -----: | -------: | ------------: | ----------------: | ----------: | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| +52.4% | +54.34ms | 99.1% → 99.4% | 103.6ms → 158.0ms |    126 → 86 | `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|  Change |    Delta |             % |              Time | Contentions | Callee                            | Location                                                   |
| ------: | -------: | ------------: | ----------------: | ----------: | --------------------------------- | ---------------------------------------------------------- |
|  +33.5% | +51.37ms | 95.3% → 95.1% | 153.4ms → 204.8ms |   225 → 181 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrReturn`             |
|  -84.7% |  -4.29ms |   3.1% → 0.4% |     5.1ms → 0.8ms |       5 → 1 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrCall`               |
|     new |  +4.25ms |   0.0% → 2.0% |       0ms → 4.2ms |       0 → 2 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrWhileLoop`          |
|     new |  +4.25ms |   0.0% → 2.0% |       0ms → 4.2ms |       0 → 2 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrBlock`              |
| +457.0% |  +1.79ms |   0.2% → 1.0% |     0.4ms → 2.2ms |       4 → 3 | `getUnitValue(ExpressionCodegen)` | `org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt` |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Callee                                                     | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| +33.7% | +54.30ms | 100.0% | 161.0ms → 215.3ms |   241 → 195 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Callee                                   | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | ---------------------------------------- | ------------------------------------------------------------ |
| +33.7% | +54.30ms | 100.0% | 161.0ms → 215.3ms |   241 → 195 | `visitBlockBody(IrBlockBody, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

| Change |    Delta |      % |              Time | Contentions | Callee                                | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | ------------------------------------- | ------------------------------------------------------------ |
| +33.7% | +54.30ms | 100.0% | 161.0ms → 215.3ms |   241 → 195 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |             % |              Time | Contentions | Callee                                             | Location                                                     |
| -----: | -------: | ------------: | ----------------: | ----------: | -------------------------------------------------- | ------------------------------------------------------------ |
| +33.7% | +54.30ms | 97.6% → 98.6% | 161.0ms → 215.3ms |   241 → 195 | `accept(IrVisitor, Object)`                        | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`            |
| -55.3% |  -0.51ms |   0.6% → 0.2% |     0.9ms → 0.4ms |      14 → 3 | `generateNonNullAssertions()`                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| -84.6% |  -0.50ms |  0.4% → <0.1% |     0.6ms → 0.1ms |       2 → 1 | `writeParameterInLocalVariableTable(Label, Label)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| -80.8% |  -0.32ms |  0.2% → <0.1% |     0.4ms → 0.1ms |       6 → 1 | `markNewLabel()`                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|  Change |    Delta |             % |              Time | Contentions | Callee                                                                                                                            | Location                                                     |
| ------: | -------: | ------------: | ----------------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
|  +32.3% | +53.29ms | 63.1% → 69.4% | 165.0ms → 218.3ms |   271 → 205 | `generate()`                                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| +148.5% |  +5.52ms |   1.4% → 2.9% |     3.7ms → 9.2ms |     21 → 22 | `<init>(int, int, String, String, String, String[])`                                                                              | `org.jetbrains.org.objectweb.asm.tree.MethodNode`            |
|  +65.6% |  +1.85ms |   1.1% → 1.5% |     2.8ms → 4.7ms |      17 → 6 | `<init>(IrFunction, JvmMethodSignature, IrFrameMap, InstructionAdapter, ClassCodegen, SourceMapper, ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  +17.5% |  +1.63ms |   3.6% → 3.5% |    9.3ms → 10.9ms |     26 → 24 | `calculateMethodFlags(IrFunction)`                                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`   |
|  +43.9% |  +1.57ms |   1.4% → 1.6% |     3.6ms → 5.2ms |     15 → 16 | `createFrameMapWithReceivers(IrFunction)`                                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`   |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Callee                                    | Location                                                   |
| -----: | -------: | -----: | ----------------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| +20.3% | +53.00ms | 100.0% | 261.6ms → 314.6ms |   499 → 402 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Callee                                  | Location                                                   |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| +20.3% | +53.00ms | 100.0% | 261.6ms → 314.6ms |   499 → 402 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|  Change |    Delta |             % |              Time | Contentions | Callee                      | Location                                                 |
| ------: | -------: | ------------: | ----------------: | ----------: | --------------------------- | -------------------------------------------------------- |
|  +38.1% | +46.07ms | 78.5% → 81.6% | 121.1ms → 167.1ms |   157 → 106 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrWhen`             |
|   +9.1% |  +2.89ms | 20.5% → 16.9% |   31.6ms → 34.5ms |     66 → 65 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrCall`             |
|     new |  +1.15ms |   0.0% → 0.6% |       0ms → 1.1ms |       0 → 4 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrTry`              |
| +105.1% |  +0.77ms |   0.5% → 0.7% |     0.7ms → 1.5ms |       2 → 4 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall` |
| removed |  -0.70ms |   0.5% → 0.0% |       0.7ms → 0ms |       1 → 0 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrConst`            |

##### `visitReturn(IrReturn, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Callee                             | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | ---------------------------------- | ------------------------------------------------------------ |
| +32.9% | +50.68ms | 100.0% | 154.1ms → 204.8ms |   226 → 181 | `visitReturn(IrReturn, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`)

| Change |    Delta |      % |              Time | Contentions | Callee                          | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | ------------------------------- | ------------------------------------------------------------ |
| +32.9% | +50.68ms | 100.0% | 154.1ms → 204.8ms |   226 → 181 | `visitReturn(IrReturn, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|  Change |    Delta |             % |              Time | Contentions | Callee                                                                                                           | Location                                                         |
| ------: | -------: | ------------: | ----------------: | ----------: | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|  +51.9% | +54.32ms | 69.6% → 81.1% | 104.6ms → 158.9ms |    129 → 88 | `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)`                              | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator` |
|  -68.6% |  -5.64ms |   5.5% → 1.3% |     8.2ms → 2.6ms |           8 | `mapToCallableMethod(IrCall, IrFunction)`                                                                        | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|  +17.8% |  +3.15ms | 11.7% → 10.6% |   17.6ms → 20.8ms |     43 → 34 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                            | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
| removed |  -2.86ms |   1.9% → 0.0% |       2.9ms → 0ms |       1 → 0 | `invoke(IrFunctionAccessExpression, ExpressionCodegen, BlockInfo)`                                               | `org.jetbrains.kotlin.backend.jvm.intrinsics.Equals`             |
|  -15.9% |  -2.37ms |   9.9% → 6.4% |   14.9ms → 12.5ms |     28 → 27 | `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |

##### `visitCall(IrCall, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Callee                         | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| +30.3% | +45.50ms | 100.0% | 150.3ms → 195.8ms |   211 → 162 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`)

| Change |    Delta |      % |              Time | Contentions | Callee                      | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| +30.3% | +45.50ms | 100.0% | 150.3ms → 195.8ms |   211 → 162 | `visitCall(IrCall, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|  Change |    Delta |             % |              Time | Contentions | Callee                           | Location                                                   |
| ------: | -------: | ------------: | ----------------: | ----------: | -------------------------------- | ---------------------------------------------------------- |
|  +40.8% | +46.33ms | 89.6% → 93.3% | 113.6ms → 160.0ms |    140 → 95 | `accept(IrVisitor, Object)`      | `org.jetbrains.kotlin.ir.expressions.IrCall`               |
|  -84.7% |  -4.29ms |   4.0% → 0.5% |     5.1ms → 0.8ms |       5 → 1 | `accept(IrVisitor, Object)`      | `org.jetbrains.kotlin.ir.expressions.IrBlock`              |
| +107.3% |  +2.21ms |   1.6% → 2.5% |     2.1ms → 4.3ms |       7 → 8 | `generate()`                     | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator` |
|  +80.4% |  +2.05ms |   2.0% → 2.7% |     2.5ms → 4.6ms |       2 → 4 | `coerceToBoolean(PromisedValue)` | `org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt` |
| removed |  -0.70ms |   0.5% → 0.0% |       0.7ms → 0ms |       1 → 0 | `accept(IrVisitor, Object)`      | `org.jetbrains.kotlin.ir.expressions.IrReturn`             |

##### `visitWhen(IrWhen, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Callee                         | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| +35.1% | +44.55ms | 100.0% | 126.8ms → 171.4ms |   163 → 114 | `visitWhen(IrWhen, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`)

| Change |    Delta |      % |              Time | Contentions | Callee                      | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| +35.1% | +44.55ms | 100.0% | 126.8ms → 171.4ms |   163 → 114 | `visitWhen(IrWhen, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |    Delta |             % |              Time | Contentions | Callee                                                                        | Location                                                   |
| -----: | -------: | ------------: | ----------------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| +20.3% | +53.00ms | 16.7% → 22.7% | 261.6ms → 314.6ms |   499 → 402 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |     Delta |             % |            Time | Contentions | Callee                                                                   | Location                                                     |
| ------: | --------: | ------------: | --------------: | ----------: | ------------------------------------------------------------------------ | ------------------------------------------------------------ |
|  -11.4% | -177.72ms | 94.7% → 90.4% |   1.56s → 1.38s |   592 → 490 | `generateMethodNode(IrFunction)`                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`      |
|  +67.9% |  +22.81ms |   2.0% → 3.7% | 33.6ms → 56.4ms |    72 → 123 | `accept(MethodVisitor)`                                                  | `org.jetbrains.org.objectweb.asm.tree.MethodNode`            |
|  +88.8% |  +16.53ms |   1.1% → 2.3% | 18.6ms → 35.1ms |     54 → 59 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.DelegatingClassBuilder`        |
|  +68.8% |  +16.02ms |   1.4% → 2.6% | 23.3ms → 39.3ms |     47 → 46 | `getMetadataSerializer()`                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`      |
| +496.4% |   +6.88ms |   0.1% → 0.5% |   1.4ms → 8.3ms |       6 → 4 | `bindMethodMetadata(MetadataSource$Function, Method)`                    | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |    Delta |     % |          Time |   Contentions | Callee                                                   | Location                                               |
| -----: | -------: | ----: | ------------: | ------------: | -------------------------------------------------------- | ------------------------------------------------------ |
|  -5.0% | -85.88ms | 99.8% | 1.73s → 1.64s | 1,057 → 1,048 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |
|  -8.2% |  -0.35ms |  0.2% | 4.2ms → 3.9ms |       22 → 24 | `getUnitStats()`                                         | `org.jetbrains.kotlin.util.PerformanceManager`         |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000a001890220`)

| Change |    Delta |      % |          Time |   Contentions | Callee                                                                                                            | Location                                               |
| -----: | -------: | -----: | ------------: | ------------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|  -5.0% | -86.23ms | 100.0% | 1.73s → 1.64s | 1,079 → 1,072 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

| Change |    Delta |      % |          Time |   Contentions | Callee  | Location                                                                          |
| -----: | -------: | -----: | ------------: | ------------: | ------- | --------------------------------------------------------------------------------- |
|  -5.0% | -86.23ms | 100.0% | 1.73s → 1.64s | 1,079 → 1,072 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000a001890220` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |    Delta |           % |            Time | Contentions | Callee                                                                                                   | Location                                                          |
| -----: | -------: | ----------: | --------------: | ----------: | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|  -5.0% | -83.03ms |       95.9% |   1.65s → 1.57s |   798 → 799 | `generate()`                                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`           |
|  -3.7% |  -2.24ms | 3.5% → 3.6% | 61.1ms → 58.8ms |   237 → 227 | `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

| Change |    Delta |              % |          Time |   Contentions | Callee      | Location                                          |
| -----: | -------: | -------------: | ------------: | ------------: | ----------- | ------------------------------------------------- |
|  -5.0% | -86.23ms | 100.0% → 99.9% | 1.73s → 1.64s | 1,079 → 1,072 | `run()`     | `java.util.concurrent.CompletableFuture$AsyncRun` |
| +60.5% |  +0.42ms |   <0.1% → 0.1% | 0.7ms → 1.1ms |         5 → 3 | `getTask()` | `java.util.concurrent.ThreadPoolExecutor`         |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

| Change |    Delta |      % |          Time |   Contentions | Callee                                 | Location                                  |
| -----: | -------: | -----: | ------------: | ------------: | -------------------------------------- | ----------------------------------------- |
|  -4.9% | -85.80ms | 100.0% | 1.73s → 1.64s | 1,084 → 1,075 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |    Delta |      % |          Time |   Contentions | Callee  | Location                                         |
| -----: | -------: | -----: | ------------: | ------------: | ------- | ------------------------------------------------ |
|  -4.9% | -85.80ms | 100.0% | 1.73s → 1.64s | 1,084 → 1,075 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.lang.Thread`)

| Change |    Delta |      % |          Time |   Contentions | Callee                      | Location           |
| -----: | -------: | -----: | ------------: | ------------: | --------------------------- | ------------------ |
|  -4.9% | -85.80ms | 100.0% | 1.73s → 1.64s | 1,084 → 1,075 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |     Delta |             % |           Time | Contentions | Callee                                      | Location                                                |
| ------: | --------: | ------------: | -------------: | ----------: | ------------------------------------------- | ------------------------------------------------------- |
|   -7.2% | -118.59ms | 99.6% → 97.3% |  1.65s → 1.53s |   784 → 730 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| +604.1% |  +35.06ms |   0.3% → 2.6% | 5.8ms → 40.9ms |      9 → 60 | `generateAnnotations()`                     | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| +607.2% |   +0.88ms |  <0.1% → 0.1% |  0.1ms → 1.0ms |       2 → 1 | `generateField(IrField)`                    | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| removed |   -0.61ms |  <0.1% → 0.0% |    0.6ms → 0ms |       1 → 0 | `visitSMAP(SourceMapper, boolean, boolean)` | `org.jetbrains.kotlin.codegen.DelegatingClassBuilder`   |
|     new |   +0.14ms |  0.0% → <0.1% |    0ms → 0.1ms |       0 → 3 | `generateInnerAndOuterClasses()`            | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

|  Change |    Delta |             % |            Time | Contentions | Callee                                                                                                                                                | Location                                                                                         |
| ------: | -------: | ------------: | --------------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -42.1% | -17.05ms | 78.7% → 73.6% | 40.5ms → 23.5ms |     97 → 53 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)`                                                                                             | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                              |
|  -83.2% |  -2.00ms |   4.7% → 1.3% |   2.4ms → 0.4ms |           1 | `<clinit>()`                                                                                                                                          | `org.jetbrains.kotlin.codegen.inline.FieldRemapper`                                              |
| +168.0% |  +1.76ms |   2.0% → 8.8% |   1.0ms → 2.8ms |       1 → 3 | `<init>(MethodNode, Parameters, InliningContext, FieldRemapper, boolean, Function0, SourceMapCopier, InlineCallSiteInfo, boolean, boolean, int, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                              |
| removed |  -0.89ms |   1.7% → 0.0% |     0.9ms → 0ms |       1 → 0 | `check(IrFunction, IrExpression, IrFunction, MethodNode, JvmBackendContext)`                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.PrivateTypeFromNonPrivateInlineUsageChecker$Companion` |
|     new |  +0.53ms |   0.0% → 1.7% |     0ms → 0.5ms |       0 → 1 | `getInlineCallSiteInfo()`                                                                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`                             |

##### `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|  Change |   Delta |             % |            Time | Contentions | Callee                                                                | Location                                                      |
| ------: | ------: | ------------: | --------------: | ----------: | --------------------------------------------------------------------- | ------------------------------------------------------------- |
|  -32.3% | -4.14ms | 31.6% → 36.9% |  12.8ms → 8.7ms |     39 → 24 | `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)`         | `org.jetbrains.kotlin.codegen.inline.MethodInliner`           |
| removed | -3.25ms |   8.0% → 0.0% |     3.2ms → 0ms |       4 → 0 | `accept(MethodVisitor)`                                               | `org.jetbrains.org.objectweb.asm.tree.MethodNode`             |
| removed | -2.34ms |   5.8% → 0.0% |     2.3ms → 0ms |       2 → 0 | `access$removeClosureAssertions(MethodInliner$Companion, MethodNode)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner$Companion` |
| +134.4% | +1.52ms |  2.8% → 11.3% |   1.1ms → 2.7ms |           1 | `processReturns(MethodNode, Map, Label)`                              | `org.jetbrains.kotlin.codegen.inline.MethodInliner$Companion` |
|   +3.4% | +0.43ms | 31.8% → 56.7% | 12.9ms → 13.3ms |     34 → 24 | `doInline(MethodNode)`                                                | `org.jetbrains.kotlin.codegen.inline.MethodInliner`           |

##### `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

| Change |    Delta |      % |            Time | Contentions | Callee                                                         | Location                                            |
| -----: | -------: | -----: | --------------: | ----------: | -------------------------------------------------------------- | --------------------------------------------------- |
| -42.1% | -17.05ms | 100.0% | 40.5ms → 23.5ms |     97 → 53 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `mapOverriddenSpecialBuiltinIfNeeded(IrFunction, boolean)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

| Change |   Delta |             % |          Time | Contentions | Callee                                                                  | Location                                               |
| -----: | ------: | ------------: | ------------: | ----------: | ----------------------------------------------------------------------- | ------------------------------------------------------ |
| -93.1% | -5.71ms | 88.1% → 35.5% | 6.1ms → 0.4ms |       6 → 1 | `getOverriddenBuiltinReflectingJvmDescriptor(CallableMemberDescriptor)` | `org.jetbrains.kotlin.load.java.SpecialBuiltinMembers` |

##### `getOverriddenBuiltinReflectingJvmDescriptor(CallableMemberDescriptor)` (`org.jetbrains.kotlin.load.java.SpecialBuiltinMembers`)

|  Change |   Delta |            % |        Time | Contentions | Callee                                                                               | Location                                                        |
| ------: | ------: | -----------: | ----------: | ----------: | ------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| removed | -5.07ms | 82.6% → 0.0% | 5.1ms → 0ms |       5 → 0 | `firstOverridden$default(CallableMemberDescriptor, boolean, Function1, int, Object)` | `org.jetbrains.kotlin.resolve.descriptorUtil.DescriptorUtilsKt` |

##### `mapToCallableMethod(IrCall, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

| Change |   Delta |             % |          Time | Contentions | Callee                                                     | Location                                                         |
| -----: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| -83.0% | -5.78ms | 84.7% → 45.9% | 7.0ms → 1.2ms |       7 → 2 | `mapOverriddenSpecialBuiltinIfNeeded(IrFunction, boolean)` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
| -59.4% | -0.75ms | 15.3% → 19.8% | 1.3ms → 0.5ms |       1 → 2 | `mapSignatureSkipGeneric(IrFunction)`                      | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`)

| Change |   Delta |              % |          Time | Contentions | Callee                                                                      | Location                                              |
| -----: | ------: | -------------: | ------------: | ----------: | --------------------------------------------------------------------------- | ----------------------------------------------------- |
| -43.5% | -2.25ms | 62.2% → 100.0% | 5.2ms → 2.9ms |       4 → 3 | `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier` |

##### `firstOverridden(CallableMemberDescriptor, boolean, Function1)` (`org.jetbrains.kotlin.resolve.descriptorUtil.DescriptorUtilsKt`)

|  Change |   Delta |            % |        Time | Contentions | Callee                                            | Location                         |
| ------: | ------: | -----------: | ----------: | ----------: | ------------------------------------------------- | -------------------------------- |
| removed | -1.72ms | 34.0% → 0.0% | 1.7ms → 0ms |       4 → 0 | `dfs(Collection, DFS$Neighbors, DFS$NodeHandler)` | `org.jetbrains.kotlin.utils.DFS` |

##### `firstOverridden$default(CallableMemberDescriptor, boolean, Function1, int, Object)` (`org.jetbrains.kotlin.resolve.descriptorUtil.DescriptorUtilsKt`)

|  Change |   Delta |             % |        Time | Contentions | Callee                                                          | Location                                                        |
| ------: | ------: | ------------: | ----------: | ----------: | --------------------------------------------------------------- | --------------------------------------------------------------- |
| removed | -5.07ms | 100.0% → 0.0% | 5.1ms → 0ms |       5 → 0 | `firstOverridden(CallableMemberDescriptor, boolean, Function1)` | `org.jetbrains.kotlin.resolve.descriptorUtil.DescriptorUtilsKt` |

##### `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

| Change |   Delta |             % |          Time | Contentions | Callee                                                           | Location                                                  |
| -----: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------------------- | --------------------------------------------------------- |
| -37.7% | -2.98ms | 61.8% → 56.9% | 7.9ms → 4.9ms |     26 → 15 | `preprocessNodeBeforeInline(MethodNode, Map)`                    | `org.jetbrains.kotlin.codegen.inline.MethodInliner`       |
| -80.0% | -0.49ms |   4.7% → 1.4% | 0.6ms → 0.1ms |       2 → 1 | `analyzeMethodNodeWithInterpreter(MethodNode, BasicInterpreter)` | `org.jetbrains.kotlin.codegen.inline.MethodInlinerUtilKt` |
| +36.9% | +0.40ms |  8.5% → 17.2% | 1.1ms → 1.5ms |           2 | `prepareNode(MethodNode, int)`                                   | `org.jetbrains.kotlin.codegen.inline.MethodInliner`       |
|    new | +0.13ms |   0.0% → 1.5% |   0ms → 0.1ms |       0 → 1 | `markObsoleteInstruction(InsnList, Frame[])`                     | `org.jetbrains.kotlin.codegen.inline.MethodInliner`       |
|    new | +0.07ms |   0.0% → 0.8% |   0ms → 0.1ms |       0 → 1 | `removeIf(Predicate)`                                            | `java.util.ArrayList`                                     |

##### `analyzeMainLoop()` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

| Change |   Delta |             % |          Time | Contentions | Callee                                                           | Location                                                                                         |
| -----: | ------: | ------------: | ------------: | ----------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| -59.1% | -2.40ms | 60.1% → 55.0% | 4.1ms → 1.7ms |           6 | `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                  |
| -39.3% | -0.61ms | 23.1% → 31.3% | 1.6ms → 0.9ms |       6 → 4 | `initLocals(Frame)`                                              | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                  |
| -80.0% | -0.49ms |   9.0% → 4.0% | 0.6ms → 0.1ms |       2 → 1 | `invoke(Object, Object)`                                         | `org.jetbrains.kotlin.codegen.inline.MethodInlinerUtilKt$$Lambda.0x000000a0018e1738`             |
| -96.7% | -0.15ms |   2.3% → 0.2% | 0.2ms → 5.2µs |           1 | `invoke(Object, Object)`                                         | `org.jetbrains.kotlin.codegen.inline.MethodInliner$$Lambda.0x000000a0018de678`                   |
| -26.5% | -0.10ms |   5.6% → 9.2% | 0.4ms → 0.3ms |       1 → 2 | `invoke(Object, Object)`                                         | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer$$Lambda.0x000000a0018dbbd0` |

##### `analyze()` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

| Change |   Delta |      % |          Time | Contentions | Callee              | Location                                                        |
| -----: | ------: | -----: | ------------: | ----------: | ------------------- | --------------------------------------------------------------- |
| -55.3% | -3.74ms | 100.0% | 6.8ms → 3.0ms |     16 → 15 | `analyzeMainLoop()` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time blocked in their leaf frame.

Common call stack: `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000a001890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`

|   Change |    Delta |            % |             Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------: | -------: | -----------: | ---------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +192.0% | +77.71ms |  2.3% → 7.2% | 40.5ms → 118.2ms |       1 → 2 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)`                                                                                                          |
|  +199.7% | +18.20ms |  0.5% → 1.7% |   9.1ms → 27.3ms |     37 → 43 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +126.3% | +11.76ms |  0.5% → 1.3% |   9.3ms → 21.1ms |     15 → 26 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000a0018936c0`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +148.5% |  +5.52ms |  0.2% → 0.6% |    3.7ms → 9.2ms |     21 → 22 | `<init>(int, int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| +2786.8% |  +5.35ms | <0.1% → 0.3% |    0.2ms → 5.5ms |       1 → 7 | `<init>(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackContext`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackMethodTransformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `transform(String, MethodNode)` ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|      new |  +5.01ms |  0.0% → 0.3% |      0ms → 5.0ms |       0 → 4 | `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`) ← `functionProto(FirFunction)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000a0018ff1e8`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  +747.6% |  +4.61ms | <0.1% → 0.3% |    0.6ms → 5.2ms |           2 | `put(WritableSlice, Object, Object)` (`org.jetbrains.kotlin.util.slicedMap.SlicedMapImpl`) ← `put(JvmSerializationBindings$SerializationMappingSlice, Object, Object)` (`org.jetbrains.kotlin.codegen.serialization.JvmSerializationBindings`) ← `bindMethodMetadata(MetadataSource$Function, Method)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| +3810.0% |  +4.38ms | <0.1% → 0.3% |    0.1ms → 4.5ms |       1 → 5 | `isOptimizable(AbstractInsnNode)` (`org.jetbrains.kotlin.codegen.optimization.nullCheck.RedundantNullCheckMethodTransformer$TransformerPass`) ← `run()` ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.nullCheck.RedundantNullCheckMethodTransformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|      new |  +3.62ms |  0.0% → 0.2% |      0ms → 3.6ms |       0 → 1 | `<clinit>()` (`org.jetbrains.kotlin.fir.types.CompilerConeAttributes`) ← `typeOrTypealiasProto(ConeKotlinType, boolean, FirTypeRef, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `typeOrTypealiasProto$default(FirElementSerializer, ConeKotlinType, boolean, FirTypeRef, boolean, boolean, boolean, int, Object)` ← `typeProto(ConeKotlinType, boolean, FirTypeRef, boolean, boolean)` ← `typeProto$default(FirElementSerializer, ConeKotlinType, boolean, FirTypeRef, boolean, boolean, int, Object)` ← `typeProto(FirTypeRef, boolean)` ← `typeProto$default(FirElementSerializer, FirTypeRef, boolean, int, Object)` ← `valueParameterProto(FirValueParameter, boolean)` ← `valueParameterProto(FirValueParameter, int, FirFunction)` ← `functionProto(FirFunction)` ← `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000a0018ff1e8`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()`                                                                                                                                                                                                                                                                                                                                                          |
|      new |  +3.52ms |  0.0% → 0.2% |      0ms → 3.5ms |       0 → 2 | `serializeProperty(FirProperty, ProtoBuf$Property$Builder, MutableVersionRequirementTable, FirElementSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`) ← `propertyProto(FirProperty)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `classProtoImpl(FirClass)` ← `classProto(FirClass, FirFile)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000a0018ff1e8`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|      new |  +3.47ms |  0.0% → 0.2% |      0ms → 3.5ms |       0 → 1 | `visitWhileLoop(IrWhileLoop, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhileLoop(IrWhileLoop, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhileLoop`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitContainerExpression(IrContainerExpression, BlockInfo)` ← `visitContainerExpression(IrContainerExpression, Object)` ← `visitBlock(IrBlock, Object)` (`org.jetbrains.kotlin.ir.visitors.IrVisitor`) ← `visitBlock(IrBlock, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlock(IrBlock, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlock`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  +116.5% |  +3.42ms |  0.2% → 0.4% |    2.9ms → 6.4ms |       5 → 8 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  +212.7% |  +3.17ms |  0.1% → 0.3% |    1.5ms → 4.7ms |       8 → 6 | `getRegeneratedObjectNameGenerator(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrFunction, JvmMethodSignature, IrFrameMap, InstructionAdapter, ClassCodegen, SourceMapper, ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +913.7% |  +3.01ms | <0.1% → 0.2% |    0.3ms → 3.3ms |       1 → 2 | `<clinit>()` (`org.jetbrains.kotlin.resolve.calls.checkers.CoroutineCallCheckerKt`) ← `generateInlineIntrinsicForIr(FunctionDescriptor)` (`org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt`) ← `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` |
| +1639.0% |  +2.94ms | <0.1% → 0.2% |    0.2ms → 3.1ms |       1 → 5 | `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.CapturedVarsOptimizationMethodTransformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +230.1% |  +2.87ms |  0.1% → 0.2% |    1.2ms → 4.1ms |           3 | `createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion`) ← `createTopLevel$default(FirElementSerializer$Companion, FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean, int, Object)` ← `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000a0018936c0`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|      new |  +2.69ms |  0.0% → 0.2% |      0ms → 2.7ms |       0 → 3 | `collectRewriteActions()` (`org.jetbrains.kotlin.codegen.optimization.ConstantConditionEliminationMethodTransformer$ConstantConditionsOptimization`) ← `run()` ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.ConstantConditionEliminationMethodTransformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|      new |  +2.35ms |  0.0% → 0.1% |      0ms → 2.4ms |       0 → 2 | `getValue(Object, KProperty)` (`org.jetbrains.kotlin.fir.backend.MappedLazyVar`) ← `getOverriddenSymbols()` (`org.jetbrains.kotlin.fir.lazy.Fir2IrLazySimpleFunction`) ← `collectOverridesOf(IrSimpleFunction, Set)` (`org.jetbrains.kotlin.backend.jvm.codegen.JvmMethodSignatureClashDetector`) ← `collectOverridesTree(IrSimpleFunction, Set)` ← `collectOverridesOf(IrSimpleFunction, Set)` ← `getOverriddenFunctions(IrSimpleFunction)` ← `trackFakeOverrideMethod(IrFunction)` ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  +358.4% |  +2.34ms | <0.1% → 0.2% |    0.7ms → 3.0ms |       3 → 1 | `<init>()` (`org.jetbrains.kotlin.util.slicedMap.OpenAddressLinearProbingHashTable`) ← `put(WritableSlice, Object, Object)` (`org.jetbrains.kotlin.util.slicedMap.SlicedMapImpl`) ← `put(JvmSerializationBindings$SerializationMappingSlice, Object, Object)` (`org.jetbrains.kotlin.codegen.serialization.JvmSerializationBindings`) ← `bindMethodMetadata(MetadataSource$Function, Method)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|      new |  +2.27ms |  0.0% → 0.1% |      0ms → 2.3ms |       0 → 2 | `newBuilder()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`) ← `typeArgument(ConeTypeProjection, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `fillFromPossiblyInnerType(ProtoBuf$Type$Builder, FirClassLikeSymbol, ConeTypeProjection[], int, boolean)` ← `fillFromPossiblyInnerType(ProtoBuf$Type$Builder, ConeClassLikeType, boolean)` ← `typeOrTypealiasProto(ConeKotlinType, boolean, FirTypeRef, boolean, boolean, boolean)` ← `typeOrTypealiasProto$default(FirElementSerializer, ConeKotlinType, boolean, FirTypeRef, boolean, boolean, boolean, int, Object)` ← `typeProto(ConeKotlinType, boolean, FirTypeRef, boolean, boolean)` ← `typeProto$default(FirElementSerializer, ConeKotlinType, boolean, FirTypeRef, boolean, boolean, int, Object)` ← `typeProto(FirTypeRef, boolean)` ← `functionProto(FirFunction)` ← `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000a0018ff1e8`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()`                                                                                                                                                                                                                                                                                                            |

### Improvements

Call stacks with the largest decrease in time blocked in their leaf frame.

Common call stack: `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000a001890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`

|  Change |     Delta |             % |            Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------: | --------: | ------------: | --------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -17.7% | -230.71ms | 75.1% → 65.1% |   1.30s → 1.07s |     93 → 88 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -23.8% |  -13.78ms |   3.3% → 2.7% | 58.0ms → 44.2ms |     55 → 61 | `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -87.3% |   -6.88ms |   0.5% → 0.1% |   7.9ms → 1.0ms |      12 → 4 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -79.9% |   -5.19ms |   0.4% → 0.1% |   6.5ms → 1.3ms |           2 | `isBuiltInSuspendCoroutineUninterceptedOrReturn(FunctionDescriptor)` (`org.jetbrains.kotlin.codegen.inline.InlineIntrinsicsKt`) ← `generateInlineIntrinsicForIr(FunctionDescriptor)` ← `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -78.1% |   -4.34ms |   0.3% → 0.1% |   5.6ms → 1.2ms |       2 → 1 | `rewriteLabelInstructions()` (`org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod`) ← `transform()` ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `transform(String, MethodNode)` ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -93.1% |   -3.36ms |  0.2% → <0.1% |   3.6ms → 0.3ms |       4 → 2 | `visitLocalVariable(String, String, String, Label, Label, int)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.LocalVariableNode`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| removed |   -3.34ms |   0.2% → 0.0% |     3.3ms → 0ms |       1 → 0 | `firstOverridden(CallableMemberDescriptor, boolean, Function1)` (`org.jetbrains.kotlin.resolve.descriptorUtil.DescriptorUtilsKt`) ← `firstOverridden$default(CallableMemberDescriptor, boolean, Function1, int, Object)` ← `getOverriddenBuiltinReflectingJvmDescriptor(CallableMemberDescriptor)` (`org.jetbrains.kotlin.load.java.SpecialBuiltinMembers`) ← `mapOverriddenSpecialBuiltinIfNeeded(IrFunction, boolean)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`) ← `mapToCallableMethod(IrCall, IrFunction)` ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitContainerExpression(IrContainerExpression, BlockInfo)` ← `visitContainerExpression(IrContainerExpression, Object)` ← `visitBlock(IrBlock, Object)` (`org.jetbrains.kotlin.ir.visitors.IrVisitor`) ← `visitBlock(IrBlock, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlock(IrBlock, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlock`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)`                                                                                                                                                                                                                                                                      |
|  -70.7% |   -3.24ms |   0.3% → 0.1% |   4.6ms → 1.3ms |      12 → 5 | `preprocessNodeBeforeInline(MethodNode, Map)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)`                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |   -3.13ms |   0.2% → 0.0% |     3.1ms → 0ms |       2 → 0 | `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -68.7% |   -2.89ms |   0.2% → 0.1% |   4.2ms → 1.3ms |       6 → 4 | `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -96.8% |   -2.86ms |  0.2% → <0.1% |   3.0ms → 0.1ms |           1 | `copyOperation(AbstractInsnNode, BasicValue)` (`org.jetbrains.kotlin.codegen.coroutines.UninitializedStoresProcessor$UninitializedNewValueMarkerInterpreter`) ← `copyOperation(AbstractInsnNode, Value)` ← `execute(AbstractInsnNode, Interpreter)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`) ← `execute(AbstractInsnNode, Interpreter)` (`org.jetbrains.kotlin.codegen.coroutines.UninitializedStoresProcessor$UninitializedNewValueFrame`) ← `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`) ← `analyzeMainLoop()` ← `analyze()` ← `run()` (`org.jetbrains.kotlin.codegen.coroutines.UninitializedStoresProcessor`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed |   -2.86ms |   0.2% → 0.0% |     2.9ms → 0ms |       1 → 0 | `invoke(IrFunctionAccessExpression, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.intrinsics.Equals`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |   -2.51ms |   0.1% → 0.0% |     2.5ms → 0ms |       1 → 0 | `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed |   -2.40ms |   0.1% → 0.0% |     2.4ms → 0ms |       1 → 0 | `<clinit>()` (`org.jetbrains.kotlin.codegen.inline.FieldRemapper`) ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed |   -2.34ms |   0.1% → 0.0% |     2.3ms → 0ms |       2 → 0 | `removeClosureAssertions(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner$Companion`) ← `access$removeClosureAssertions(MethodInliner$Companion, MethodNode)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)`                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |   -2.26ms |   0.1% → 0.0% |     2.3ms → 0ms |       3 → 0 | `doRemap(int)` (`org.jetbrains.kotlin.codegen.inline.LocalVarRemapper`) ← `remap(int)` ← `visitVarInsn(int, int, InstructionAdapter, KotlinTypeMapperBase)` ← `visitVarInsn(int, int)` (`org.jetbrains.kotlin.codegen.inline.RemapVisitor`) ← `visitVarInsn(int, int)` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.VarInsnNode`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.InsnList`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` |
|  -43.5% |   -2.25ms |   0.3% → 0.2% |   5.2ms → 2.9ms |       4 → 3 | `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`) ← `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` ← `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -30.3% |   -1.97ms |   0.4% → 0.3% |   6.5ms → 4.5ms |       3 → 5 | `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.AbstractClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -92.4% |   -1.75ms |  0.1% → <0.1% |   1.9ms → 0.1ms |           1 | `getSuspensionPointKind(IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -76.7% |   -1.67ms |  0.1% → <0.1% |   2.2ms → 0.5ms |       5 → 2 | `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

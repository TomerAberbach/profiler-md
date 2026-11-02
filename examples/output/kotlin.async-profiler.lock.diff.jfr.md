# Lock contention profile diff

Blocked 1.94s → 1.19s (-755.53ms, -38.8%) over 960 → 982 contentions (2.0ms → 1.2ms per contention).

| Category         | Change |     Delta |             % |           Time | Contentions |
| ---------------- | -----: | --------: | ------------: | -------------: | ----------: |
| Ours             | -38.6% | -745.74ms | 99.4% → 99.9% |  1.93s → 1.19s |   933 → 973 |
| Standard library | -89.6% |   -9.79ms |   0.6% → 0.1% | 10.9ms → 1.1ms |      27 → 9 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
└── … 1.94s → 1.19s (99.5% → 99.7%, self 0.6% → 0.7%) generateFile(JvmBackendContext, IrFile, List, boolean) at org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory
    ├── 1.85s → 1.12s (95.2% → 94.3%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
    │   ├── 1.84s → 1.09s (94.4% → 91.5%) generateMethod(IrFunction, SourceMapper)
    │   │   ├── 1.76s → 1.02s (90.2% → 85.7%, self 80.8% → 73.3%) generateMethodNode(IrFunction)
    │   │   │   └── … 183.3ms → 148.0ms (9.4% → 12.4%, self 2.3% → 3.8%) doGenerate(ReifiedTypeParametersUsages) at org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen
    │   │   │       ├── … 96.7ms → 66.9ms (5.0% → 5.6%) visitStatementContainer(IrStatementContainer, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   └── … 91.3ms → 61.9ms (4.7% → 5.2%) visitReturn(IrReturn, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │       ├── … 62.9ms → 35.9ms (3.2% → 3.0%) visitWhen(IrWhen, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │       │   ├── … 47.1ms → 29.9ms (2.4% → 2.5%) visitCall(IrCall, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │       │   │   ├── 26.5ms → 18.3ms (1.4% → 1.5%) genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator
    │   │   │       │       │   │   │   └── 24.0ms → 18.1ms (1.2% → 1.5%) genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen
    │   │   │       │       │   │   │       └── … 21.5ms → 9.1ms (1.1% → 0.8%) doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int) at org.jetbrains.kotlin.codegen.inline.MethodInliner
    │   │   │       │       │   │   │           ├── 9.3ms → 4.1ms (0.5% → 0.3%) markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)
    │   │   │       │       │   │   │           │   └── 8.5ms → 3.5ms (0.4% → 0.3%) preprocessNodeBeforeInline(MethodNode, Map)
    │   │   │       │       │   │   │           ├── 4.9ms → 1.9ms (0.3% → 0.2%) doInline(MethodNode)
    │   │   │       │       │   │   │           └── 6.3ms → 0ms (0.3% → 0.0%) <clinit>() at org.jetbrains.kotlin.codegen.inline.RemapVisitor
    │   │   │       │       │   │   │               └── 6.3ms → 0ms (0.3% → 0.0%) desiredAssertionStatus() at java.lang.Class
    │   │   │       │       │   │   ├── 15.0ms → 7.7ms (0.8% → 0.6%, self 0.5% → 0.4%) getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)
    │   │   │       │       │   │   └── 4.7ms → 2.3ms (0.2%) visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)
    │   │   │       │       │   │       └── 4.7ms → 2.3ms (0.2%) genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen
    │   │   │       │       │   └── 13.9ms → 3.2ms (0.7% → 0.3%, self 0.7% → 0.3%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator
    │   │   │       │       └── 28.5ms → 26.0ms (1.5% → 2.2%) 3 more callees, led by (1.3% → 2.0%) accept(IrVisitor, Object) at org.jetbrains.kotlin.ir.expressions.IrCall
    │   │   │       └── 38.5ms → 33.5ms (2.0% → 2.8%) 15 more callees, led by (0.6% → 0.7%) calculateMethodFlags(IrFunction)
    │   │   ├── … 29.6ms → 18.3ms (1.5%) transform(String, MethodNode) at org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer
    │   │   │   ├── 6.9ms → 3.0ms (0.4% → 0.3%) transform(String, MethodNode) at org.jetbrains.kotlin.codegen.optimization.RedundantCheckCastEliminationMethodTransformer
    │   │   │   └── 22.7ms → 15.3ms (1.2% → 1.3%) 11 more callees, led by (0.4% → 0.2%) transform(String, MethodNode) at org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer
    │   │   ├── … 2.2ms → 5.7ms (0.1% → 0.5%) <init>(SourceMapper, SMAP, SourcePosition) at org.jetbrains.kotlin.codegen.inline.SourceMapCopier
    │   │   └── 45.3ms → 40.8ms (2.3% → 3.4%) 6 more callees, led by (1.0% → 1.8%) getMetadataSerializer()
    │   └── … 11.7ms → 28.0ms (0.6% → 2.4%) serialize(MetadataSource, MetadataSource$File) at org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer
    │       └── … 2.7ms → 19.1ms (0.1% → 1.6%) functionProto(FirFunction) at org.jetbrains.kotlin.fir.serialization.FirElementSerializer
    │           ├── 0.3ms → 10.1ms (<0.1% → 0.8%) serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer) at org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension
    │           │   └── … 0ms → 5.7ms (0.0% → 0.5%) get(GeneratedMessageLite$Builder) at org.jetbrains.kotlin.metadata.serialization.MutableTable
    │           └── 0.6ms → 6.3ms (<0.1% → 0.5%) serializeContractOfFunctionIfAny(FirFunction, ProtoBuf$Function$Builder, FirElementSerializer) at org.jetbrains.kotlin.fir.serialization.FirContractSerializer
    └── … 72.9ms → 55.5ms (3.8% → 4.7%, self 0.8% → 0.9%) <init>(IrClass, JvmBackendContext, IrFunction, List) at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
        ├── 35.4ms → 23.6ms (1.8% → 2.0%) newVisitor(JvmDeclarationOrigin, Type, List) at org.jetbrains.kotlin.codegen.ClassFileFactory
        │   └── … 30.4ms → 20.2ms (1.6% → 1.7%, self 1.1%) newClassBuilder(JvmDeclarationOrigin) at org.jetbrains.kotlin.codegen.ClassBuilderFactories$1
        │       └── … 9.5ms → 7.3ms (0.5% → 0.6%, self 0.4% → 0.5%) <init>(ClassReader, int) at org.jetbrains.org.objectweb.asm.ClassWriter
        ├── 11.3ms → 9.7ms (0.6% → 0.8%) getSourceMapper(JvmBackendContext, IrClass) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
        │   └── … 1.3ms → 3.9ms (0.1% → 0.3%) getLineAndColumnNumbers(int) at org.jetbrains.kotlin.ir.AbstractIrFileEntry
        └── 6.0ms → 7.7ms (0.3% → 0.6%) mapClassSignature(IrTypeMapper, IrClass, Type, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

|   Change |   Delta |            % |          Time | Contentions | Function                                                                                                                                                                      | Location                                                                                 |
| -------: | ------: | -----------: | ------------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
|      new | +5.67ms |  0.0% → 0.5% |   0ms → 5.7ms |       0 → 3 | `get(GeneratedMessageLite$Builder)`                                                                                                                                           | `org.jetbrains.kotlin.metadata.serialization.MutableTable`                               |
|      new | +3.81ms |  0.0% → 0.3% |   0ms → 3.8ms |       0 → 2 | `serializeContractOfFunctionIfAny(FirFunction, ProtoBuf$Function$Builder, FirElementSerializer)`                                                                              | `org.jetbrains.kotlin.fir.serialization.FirContractSerializer`                           |
|  +159.4% | +3.48ms |  0.1% → 0.5% | 2.2ms → 5.7ms |      10 → 8 | `<init>(SourceMapper, SMAP, SourcePosition)`                                                                                                                                  | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier`                                    |
| +2793.9% | +2.88ms | <0.1% → 0.3% | 0.1ms → 3.0ms |       1 → 4 | `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)`                                                             | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`                         |
|  +197.9% | +2.58ms |  0.1% → 0.3% | 1.3ms → 3.9ms |      10 → 5 | `getLineAndColumnNumbers(int)`                                                                                                                                                | `org.jetbrains.kotlin.ir.AbstractIrFileEntry`                                            |
|      new | +2.33ms |  0.0% → 0.2% |   0ms → 2.3ms |       0 → 2 | `fillEffectProto(ProtoBuf$Effect$Builder, KtEffectDeclaration, FirContractDescription)`                                                                                       | `org.jetbrains.kotlin.fir.serialization.FirContractSerializer$ContractSerializerWorker`  |
|  +180.1% | +2.17ms |  0.1% → 0.3% | 1.2ms → 3.4ms |       1 → 2 | `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)`                                                                                               | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer`                            |
|  +345.0% | +2.07ms | <0.1% → 0.2% | 0.6ms → 2.7ms |       4 → 6 | `createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)`                                                | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion`                  |
|  +845.7% | +1.89ms | <0.1% → 0.2% | 0.2ms → 2.1ms |       3 → 1 | `<init>(SourceMapper, SMAP, MethodVisitor)`                                                                                                                                   | `org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`                      |
| +2552.9% | +1.88ms | <0.1% → 0.2% | 0.1ms → 1.9ms |           1 | `<init>(GenerationState, NameGenerator, SourceCompilerForInline, InlineCallSiteInfo, ReifiedTypeInliner, TypeParameterMappings, InlineScopesGenerator, KotlinTypeMapperBase)` | `org.jetbrains.kotlin.codegen.inline.RootInliningContext`                                |
| +1202.3% | +1.84ms | <0.1% → 0.2% | 0.2ms → 2.0ms |           1 | `removeClosureAssertions(MethodNode)`                                                                                                                                         | `org.jetbrains.kotlin.codegen.inline.MethodInliner$Companion`                            |
| +3230.4% | +1.71ms | <0.1% → 0.1% | 0.1ms → 1.8ms |       1 → 2 | `visitMethodInsn(int, String, String, String, boolean)`                                                                                                                       | `org.jetbrains.kotlin.codegen.inline.MethodInliner$doInline$lambdaInliner$1`             |
|      new | +1.68ms |  0.0% → 0.1% |   0ms → 1.7ms |       0 → 5 | `getSuspensionPointKind(IrFunctionAccessExpression)`                                                                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                             |
|      new | +1.64ms |  0.0% → 0.1% |   0ms → 1.6ms |       0 → 1 | `toAnnotationValue(SessionAndScopeSessionHolder, FirAnnotation, Map)`                                                                                                         | `org.jetbrains.kotlin.fir.serialization.constant.FirToConstantValueTransformerKt`        |
|      new | +1.57ms |  0.0% → 0.1% |   0ms → 1.6ms |       0 → 1 | `toIrBasedDescriptor(IrField)`                                                                                                                                                | `org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt`                               |
|  +231.5% | +1.47ms | <0.1% → 0.2% | 0.6ms → 2.1ms |       1 → 2 | `getMethodNode(byte[], Type, Method)`                                                                                                                                         | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`                               |
|      new | +1.41ms |  0.0% → 0.1% |   0ms → 1.4ms |       0 → 1 | `generateKotlinMetadataAnnotation()`                                                                                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                  |
|      new | +1.34ms |  0.0% → 0.1% |   0ms → 1.3ms |       0 → 1 | `newBuilder()`                                                                                                                                                                | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`                                   |
|  +687.4% | +1.31ms | <0.1% → 0.1% | 0.2ms → 1.5ms |       1 → 3 | `compileInlineFunction(JvmMethodSignature)`                                                                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`                     |
|      new | +1.19ms |  0.0% → 0.1% |   0ms → 1.2ms |       0 → 2 | `transformOnce(MethodNode)`                                                                                                                                                   | `org.jetbrains.kotlin.codegen.optimization.boxing.StackPeepholeOptimizationsTransformer` |

#### Improvements

Functions with the largest decrease in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |            Time | Contentions | Function                                                                                 | Location                                                                                         |
| ------: | --------: | ------------: | --------------: | ----------: | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -44.5% | -700.00ms | 80.8% → 73.3% | 1.57s → 871.7ms |     78 → 89 | `generateMethodNode(IrFunction)`                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                          |
|  -76.8% |  -10.71ms |   0.7% → 0.3% |  13.9ms → 3.2ms |      8 → 10 | `generate()`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`                                       |
|  -38.1% |   -7.96ms |          1.1% | 20.9ms → 12.9ms |     22 → 24 | `newClassBuilder(JvmDeclarationOrigin)`                                                  | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`                                           |
| removed |   -6.43ms |   0.3% → 0.0% |     6.4ms → 0ms |       4 → 0 | `desiredAssertionStatus()`                                                               | `java.lang.Class`                                                                                |
|  -71.7% |   -5.78ms |   0.4% → 0.2% |   8.1ms → 2.3ms |       4 → 3 | `preprocessNodeBeforeInline(MethodNode, Map)`                                            | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                              |
|  -56.9% |   -5.29ms |   0.5% → 0.3% |   9.3ms → 4.0ms |          16 | `doInline(MethodNode)`                                                                   | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                              |
|  -63.4% |   -4.14ms |   0.3% → 0.2% |   6.5ms → 2.4ms |     10 → 13 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)`     | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                                       |
|  -34.8% |   -4.04ms |          0.6% |  11.6ms → 7.6ms |          18 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`    | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                     |
|  -24.7% |   -3.68ms |   0.8% → 0.9% | 14.9ms → 11.2ms |     50 → 43 | `<init>(IrClass, JvmBackendContext, IrFunction, List)`                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                          |
|  -68.2% |   -3.13ms |   0.2% → 0.1% |   4.6ms → 1.5ms |           3 | `transform(String, MethodNode)`                                                          | `org.jetbrains.kotlin.codegen.optimization.RedundantCheckCastEliminationMethodTransformer`       |
|  -43.7% |   -2.84ms |          0.3% |   6.5ms → 3.7ms |     21 → 13 | `getSourceMapper(JvmBackendContext, IrClass)`                                            | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                                      |
|  -70.9% |   -2.74ms |   0.2% → 0.1% |   3.9ms → 1.1ms |      9 → 10 | `newVisitor(JvmDeclarationOrigin, Type, List)`                                           | `org.jetbrains.kotlin.codegen.ClassFileFactory`                                                  |
|  -70.3% |   -2.68ms |   0.2% → 0.1% |   3.8ms → 1.1ms |      14 → 8 | `park(boolean, long)`                                                                    | `jdk.internal.misc.Unsafe`                                                                       |
|  -68.2% |   -2.49ms |   0.2% → 0.1% |   3.7ms → 1.2ms |       5 → 3 | `parseMethodOrNull(MethodNode)`                                                          | `org.jetbrains.kotlin.codegen.inline.InplaceArgumentsMethodTransformer`                          |
|  -53.8% |   -2.45ms |          0.2% |   4.5ms → 2.1ms |     17 → 16 | `unitStats_delegate$lambda$0(PerformanceManager)`                                        | `org.jetbrains.kotlin.util.PerformanceManager`                                                   |
|  -86.4% |   -2.44ms |  0.1% → <0.1% |   2.8ms → 0.4ms |           4 | `transform()`                                                                            | `org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer$Transformer` |
|  -20.8% |   -2.31ms |   0.6% → 0.7% |  11.1ms → 8.8ms |          22 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`                            |
|  -91.8% |   -2.24ms |  0.1% → <0.1% |   2.4ms → 0.2ms |           2 | `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)`      | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`                                 |
|  -26.1% |   -2.13ms |   0.4% → 0.5% |   8.2ms → 6.0ms |          19 | `<init>(ClassReader, int)`                                                               | `org.jetbrains.org.objectweb.asm.ClassWriter`                                                    |
|  -88.6% |   -2.12ms |  0.1% → <0.1% |   2.4ms → 0.3ms |           1 | `<init>(int)`                                                                            | `org.jetbrains.org.objectweb.asm.tree.analysis.SourceValue`                                      |

##### Ours

|  Change |     Delta |             % |            Time | Contentions | Function                                                                                 | Location                                                                                         |
| ------: | --------: | ------------: | --------------: | ----------: | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -44.5% | -700.00ms | 80.8% → 73.3% | 1.57s → 871.7ms |     78 → 89 | `generateMethodNode(IrFunction)`                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                          |
|  -76.8% |  -10.71ms |   0.7% → 0.3% |  13.9ms → 3.2ms |      8 → 10 | `generate()`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`                                       |
|  -38.1% |   -7.96ms |          1.1% | 20.9ms → 12.9ms |     22 → 24 | `newClassBuilder(JvmDeclarationOrigin)`                                                  | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`                                           |
|  -71.7% |   -5.78ms |   0.4% → 0.2% |   8.1ms → 2.3ms |       4 → 3 | `preprocessNodeBeforeInline(MethodNode, Map)`                                            | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                              |
|  -56.9% |   -5.29ms |   0.5% → 0.3% |   9.3ms → 4.0ms |          16 | `doInline(MethodNode)`                                                                   | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                              |
|  -63.4% |   -4.14ms |   0.3% → 0.2% |   6.5ms → 2.4ms |     10 → 13 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)`     | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                                       |
|  -34.8% |   -4.04ms |          0.6% |  11.6ms → 7.6ms |          18 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`    | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                     |
|  -24.7% |   -3.68ms |   0.8% → 0.9% | 14.9ms → 11.2ms |     50 → 43 | `<init>(IrClass, JvmBackendContext, IrFunction, List)`                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                          |
|  -68.2% |   -3.13ms |   0.2% → 0.1% |   4.6ms → 1.5ms |           3 | `transform(String, MethodNode)`                                                          | `org.jetbrains.kotlin.codegen.optimization.RedundantCheckCastEliminationMethodTransformer`       |
|  -43.7% |   -2.84ms |          0.3% |   6.5ms → 3.7ms |     21 → 13 | `getSourceMapper(JvmBackendContext, IrClass)`                                            | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                                      |
|  -70.9% |   -2.74ms |   0.2% → 0.1% |   3.9ms → 1.1ms |      9 → 10 | `newVisitor(JvmDeclarationOrigin, Type, List)`                                           | `org.jetbrains.kotlin.codegen.ClassFileFactory`                                                  |
|  -68.2% |   -2.49ms |   0.2% → 0.1% |   3.7ms → 1.2ms |       5 → 3 | `parseMethodOrNull(MethodNode)`                                                          | `org.jetbrains.kotlin.codegen.inline.InplaceArgumentsMethodTransformer`                          |
|  -53.8% |   -2.45ms |          0.2% |   4.5ms → 2.1ms |     17 → 16 | `unitStats_delegate$lambda$0(PerformanceManager)`                                        | `org.jetbrains.kotlin.util.PerformanceManager`                                                   |
|  -86.4% |   -2.44ms |  0.1% → <0.1% |   2.8ms → 0.4ms |           4 | `transform()`                                                                            | `org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer$Transformer` |
|  -20.8% |   -2.31ms |   0.6% → 0.7% |  11.1ms → 8.8ms |          22 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`                            |
|  -91.8% |   -2.24ms |  0.1% → <0.1% |   2.4ms → 0.2ms |           2 | `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)`      | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`                                 |
|  -26.1% |   -2.13ms |   0.4% → 0.5% |   8.2ms → 6.0ms |          19 | `<init>(ClassReader, int)`                                                               | `org.jetbrains.org.objectweb.asm.ClassWriter`                                                    |
|  -88.6% |   -2.12ms |  0.1% → <0.1% |   2.4ms → 0.3ms |           1 | `<init>(int)`                                                                            | `org.jetbrains.org.objectweb.asm.tree.analysis.SourceValue`                                      |
| removed |   -1.94ms |   0.1% → 0.0% |     1.9ms → 0ms |       2 → 0 | `transform(String, MethodNode)`                                                          | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackMethodTransformer`                   |
|  -17.9% |   -1.94ms |   0.6% → 0.7% |  10.8ms → 8.9ms |          20 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                                           |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `get(GeneratedMessageLite$Builder)` (`org.jetbrains.kotlin.metadata.serialization.MutableTable`)

| Change |   Delta |             % |        Time | Contentions | Location                                                      |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------- |
|    new | +5.67ms | 0.0% → 100.0% | 0ms → 5.7ms |       0 → 3 | `org.jetbrains.kotlin.metadata.serialization.MutableTable:35` |

##### `serializeContractOfFunctionIfAny(FirFunction, ProtoBuf$Function$Builder, FirElementSerializer)` (`org.jetbrains.kotlin.fir.serialization.FirContractSerializer`)

| Change |   Delta |             % |        Time | Contentions | Location                                                          |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------------------------- |
|    new | +3.81ms | 0.0% → 100.0% | 0ms → 3.8ms |       0 → 2 | `org.jetbrains.kotlin.fir.serialization.FirContractSerializer:32` |

##### `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`)

|  Change |   Delta |      % |          Time | Contentions | Location                                                 |
| ------: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------- |
| +159.4% | +3.48ms | 100.0% | 2.2ms → 5.7ms |      10 → 8 | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier:65` |

##### `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`)

|  Change |   Delta |              % |          Time | Contentions | Location                                                             |
| ------: | ------: | -------------: | ------------: | ----------: | -------------------------------------------------------------------- |
|     new | +1.94ms |   0.0% → 64.9% |   0ms → 1.9ms |       0 → 2 | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension:255` |
| +482.1% | +0.50ms | 100.0% → 20.1% | 0.1ms → 0.6ms |           1 | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension:258` |
|     new | +0.45ms |   0.0% → 15.0% |   0ms → 0.4ms |       0 → 1 | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension:259` |

##### `getLineAndColumnNumbers(int)` (`org.jetbrains.kotlin.ir.AbstractIrFileEntry`)

|  Change |   Delta |      % |          Time | Contentions | Location                                         |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------------------------------ |
| +197.9% | +2.58ms | 100.0% | 1.3ms → 3.9ms |      10 → 5 | `org.jetbrains.kotlin.ir.AbstractIrFileEntry:67` |

##### `fillEffectProto(ProtoBuf$Effect$Builder, KtEffectDeclaration, FirContractDescription)` (`org.jetbrains.kotlin.fir.serialization.FirContractSerializer$ContractSerializerWorker`)

| Change |   Delta |             % |        Time | Contentions | Location                                                                                   |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------------------------------------ |
|    new | +2.33ms | 0.0% → 100.0% | 0ms → 2.3ms |       0 → 2 | `org.jetbrains.kotlin.fir.serialization.FirContractSerializer$ContractSerializerWorker:71` |

##### `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`)

|  Change |   Delta |      % |          Time | Contentions | Location                                                          |
| ------: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------------- |
| +180.1% | +2.17ms | 100.0% | 1.2ms → 3.4ms |       1 → 2 | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer:129` |

##### `createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion`)

|  Change |   Delta |      % |          Time | Contentions | Location                                                                     |
| ------: | ------: | -----: | ------------: | ----------: | ---------------------------------------------------------------------------- |
| +345.0% | +2.07ms | 100.0% | 0.6ms → 2.7ms |       4 → 6 | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion:1394` |

##### `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`)

|  Change |   Delta |      % |          Time | Contentions | Location                                                               |
| ------: | ------: | -----: | ------------: | ----------: | ---------------------------------------------------------------------- |
| +845.7% | +1.89ms | 100.0% | 0.2ms → 2.1ms |       3 → 1 | `org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor:84` |

##### `<init>(GenerationState, NameGenerator, SourceCompilerForInline, InlineCallSiteInfo, ReifiedTypeInliner, TypeParameterMappings, InlineScopesGenerator, KotlinTypeMapperBase)` (`org.jetbrains.kotlin.codegen.inline.RootInliningContext`)

|   Change |   Delta |      % |          Time | Contentions | Location                                                     |
| -------: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------ |
| +2552.9% | +1.88ms | 100.0% | 0.1ms → 1.9ms |           1 | `org.jetbrains.kotlin.codegen.inline.RootInliningContext:22` |

##### `removeClosureAssertions(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner$Companion`)

|   Change |   Delta |      % |          Time | Contentions | Location                                                           |
| -------: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------------ |
| +1202.3% | +1.84ms | 100.0% | 0.2ms → 2.0ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner$Companion:1247` |

##### `visitMethodInsn(int, String, String, String, boolean)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner$doInline$lambdaInliner$1`)

|  Change |   Delta |             % |        Time | Contentions | Location                                                                         |
| ------: | ------: | ------------: | ----------: | ----------: | -------------------------------------------------------------------------------- |
|     new | +1.61ms |  0.0% → 91.5% | 0ms → 1.6ms |       0 → 1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner$doInline$lambdaInliner$1:301` |
| +181.8% | +0.10ms | 100.0% → 8.5% |       0.1ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner$doInline$lambdaInliner$1:279` |

##### `getSuspensionPointKind(IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |   Delta |             % |        Time | Contentions | Location                                                         |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------------- |
|    new | +1.68ms | 0.0% → 100.0% | 0ms → 1.7ms |       0 → 5 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:647` |

##### `toAnnotationValue(SessionAndScopeSessionHolder, FirAnnotation, Map)` (`org.jetbrains.kotlin.fir.serialization.constant.FirToConstantValueTransformerKt`)

| Change |   Delta |             % |        Time | Contentions | Location                                                                              |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------------------------------- |
|    new | +1.64ms | 0.0% → 100.0% | 0ms → 1.6ms |       0 → 1 | `org.jetbrains.kotlin.fir.serialization.constant.FirToConstantValueTransformerKt:144` |

##### `toIrBasedDescriptor(IrField)` (`org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt`)

| Change |   Delta |             % |        Time | Contentions | Location                                                        |
| -----: | ------: | ------------: | ----------: | ----------: | --------------------------------------------------------------- |
|    new | +1.57ms | 0.0% → 100.0% | 0ms → 1.6ms |       0 → 1 | `org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt:1142` |

##### `getMethodNode(byte[], Type, Method)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`)

| Change |   Delta |              % |          Time | Contentions | Location                                                       |
| -----: | ------: | -------------: | ------------: | ----------: | -------------------------------------------------------------- |
|    new | +1.40ms |   0.0% → 66.4% |   0ms → 1.4ms |       0 → 1 | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt:725` |
| +11.3% | +0.07ms | 100.0% → 33.6% | 0.6ms → 0.7ms |           1 | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt:729` |

##### `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |   Delta |             % |        Time | Contentions | Location                                                    |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------------------- |
|    new | +1.41ms | 0.0% → 100.0% | 0ms → 1.4ms |       0 → 1 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:317` |

##### `newBuilder()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`)

| Change |   Delta |             % |        Time | Contentions | Location                                                    |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------------------- |
|    new | +1.34ms | 0.0% → 100.0% | 0ms → 1.3ms |       0 → 1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument:5487` |

##### `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`)

|  Change |   Delta |             % |        Time | Contentions | Location                                                                |
| ------: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------------------------------- |
|     new | +1.50ms | 0.0% → 100.0% | 0ms → 1.5ms |       0 → 3 | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline:76` |
| removed | -0.19ms | 100.0% → 0.0% | 0.2ms → 0ms |       1 → 0 | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline:96` |

##### `transformOnce(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.boxing.StackPeepholeOptimizationsTransformer`)

| Change |   Delta |             % |        Time | Contentions | Location                                                                                    |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------------------------------------- |
|    new | +1.19ms | 0.0% → 100.0% | 0ms → 1.2ms |       0 → 2 | `org.jetbrains.kotlin.codegen.optimization.boxing.StackPeepholeOptimizationsTransformer:41` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |     Delta |             % |            Time | Contentions | Location                                                    |
| -----: | --------: | ------------: | --------------: | ----------: | ----------------------------------------------------------- |
| -44.7% | -699.47ms | 99.7% → 99.5% | 1.57s → 867.0ms |     63 → 72 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:427` |
| -31.6% |   -1.09ms |   0.2% → 0.3% |   3.5ms → 2.4ms |       6 → 7 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:416` |
| +45.8% |   +0.68ms |   0.1% → 0.2% |   1.5ms → 2.2ms |       8 → 9 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:422` |
| -41.4% |   -0.12ms |         <0.1% |   0.3ms → 0.2ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:428` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`)

| Change |   Delta |             % |          Time | Contentions | Location                                                       |
| -----: | ------: | ------------: | ------------: | ----------: | -------------------------------------------------------------- |
| -84.5% | -4.95ms | 42.0% → 28.1% | 5.9ms → 0.9ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:490` |
| -88.0% | -4.67ms | 38.1% → 19.7% | 5.3ms → 0.6ms |           4 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:35`  |
| -88.5% | -2.45ms |  19.9% → 9.9% | 2.8ms → 0.3ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:37`  |
|    new | +1.37ms |  0.0% → 42.4% |   0ms → 1.4ms |       0 → 2 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:38`  |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

| Change |   Delta |      % |            Time | Contentions | Location                                                  |
| -----: | ------: | -----: | --------------: | ----------: | --------------------------------------------------------- |
| -38.1% | -7.96ms | 100.0% | 20.9ms → 12.9ms |     22 → 24 | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1:70` |

##### `desiredAssertionStatus()` (`java.lang.Class`)

|  Change |   Delta |             % |        Time | Contentions | Location               |
| ------: | ------: | ------------: | ----------: | ----------: | ---------------------- |
| removed | -6.43ms | 100.0% → 0.0% | 6.4ms → 0ms |       4 → 0 | `java.lang.Class:3906` |

##### `preprocessNodeBeforeInline(MethodNode, Map)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|  Change |   Delta |             % |          Time | Contentions | Location                                                |
| ------: | ------: | ------------: | ------------: | ----------: | ------------------------------------------------------- |
| removed | -3.96ms |  49.1% → 0.0% |   4.0ms → 0ms |       1 → 0 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:801` |
|  -75.2% | -2.06ms | 34.0% → 29.7% | 2.7ms → 0.7ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:793` |
|  +17.8% | +0.24ms | 16.9% → 70.3% | 1.4ms → 1.6ms |           2 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:798` |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

| Change |   Delta |             % |           Time | Contentions | Location                                                |
| -----: | ------: | ------------: | -------------: | ----------: | ------------------------------------------------------- |
| -73.4% | -1.89ms | 27.8% → 17.1% |  2.6ms → 0.7ms |           4 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:159` |
| -85.5% | -1.86ms |  23.3% → 7.8% |  2.2ms → 0.3ms |       1 → 2 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:156` |
| -76.7% | -1.55ms | 21.8% → 11.7% |  2.0ms → 0.5ms |       1 → 3 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:153` |
|  +6.3% | +0.15ms | 25.5% → 62.8% |  2.4ms → 2.5ms |       9 → 6 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:154` |
| -86.4% | -0.13ms |   1.6% → 0.5% | 0.2ms → 20.7µs |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:433` |

##### `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

| Change |   Delta |             % |          Time | Contentions | Location                                                       |
| -----: | ------: | ------------: | ------------: | ----------: | -------------------------------------------------------------- |
| -70.4% | -2.39ms | 52.1% → 42.1% | 3.4ms → 1.0ms |       6 → 5 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:178` |
| -81.4% | -1.86ms | 35.1% → 17.9% | 2.3ms → 0.4ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:192` |
| -72.7% | -0.61ms |  12.8% → 9.6% | 0.8ms → 0.2ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:118` |
|    new | +0.39ms |  0.0% → 16.3% |   0ms → 0.4ms |       0 → 1 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:152` |
|    new | +0.34ms |  0.0% → 14.1% |   0ms → 0.3ms |       0 → 3 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:149` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|  Change |   Delta |             % |          Time | Contentions | Location                                                          |
| ------: | ------: | ------------: | ------------: | ----------: | ----------------------------------------------------------------- |
|  -90.3% | -3.11ms |  29.6% → 4.4% | 3.4ms → 0.3ms |       3 → 2 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1572` |
|  -90.3% | -2.34ms |  22.3% → 3.3% | 2.6ms → 0.3ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1568` |
| +341.6% | +1.77ms |  4.5% → 30.2% | 0.5ms → 2.3ms |           4 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1570` |
|  -45.2% | -1.22ms | 23.1% → 19.4% | 2.7ms → 1.5ms |       3 → 2 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1569` |
|  +67.7% | +0.94ms | 11.9% → 30.7% | 1.4ms → 2.3ms |       3 → 6 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1581` |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |   Delta |             % |          Time | Contentions | Location                                                    |
| ------: | ------: | ------------: | ------------: | ----------: | ----------------------------------------------------------- |
|  -83.7% | -3.44ms |  27.5% → 5.9% | 4.1ms → 0.7ms |       9 → 4 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:78`  |
|  -68.6% | -2.14ms |  20.9% → 8.7% | 3.1ms → 1.0ms |       6 → 2 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:107` |
|  +62.1% | +1.69ms | 18.3% → 39.3% | 2.7ms → 4.4ms |      5 → 18 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:84`  |
|  -90.8% | -1.39ms |  10.2% → 1.2% | 1.5ms → 0.1ms |      13 → 5 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:109` |
| +142.6% | +1.21ms |  5.7% → 18.3% | 0.8ms → 2.1ms |           4 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:89`  |

##### `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.RedundantCheckCastEliminationMethodTransformer`)

| Change |   Delta |             % |          Time | Contentions | Location                                                                                      |
| -----: | ------: | ------------: | ------------: | ----------: | --------------------------------------------------------------------------------------------- |
| -83.4% | -2.79ms | 73.0% → 38.2% | 3.3ms → 0.6ms |           1 | `org.jetbrains.kotlin.codegen.optimization.RedundantCheckCastEliminationMethodTransformer:58` |
| -27.4% | -0.34ms | 27.0% → 61.8% | 1.2ms → 0.9ms |           2 | `org.jetbrains.kotlin.codegen.optimization.RedundantCheckCastEliminationMethodTransformer:41` |

##### `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

| Change |   Delta |             % |          Time | Contentions | Location                                                       |
| -----: | ------: | ------------: | ------------: | ----------: | -------------------------------------------------------------- |
| -70.2% | -2.10ms | 45.9% → 24.3% | 3.0ms → 0.9ms |       6 → 1 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:90` |
| -61.8% | -0.97ms | 24.2% → 16.4% | 1.6ms → 0.6ms |       4 → 2 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:89` |
| +11.9% | +0.23ms | 29.8% → 59.3% | 1.9ms → 2.2ms |     11 → 10 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:76` |

##### `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`)

| Change |   Delta |      % |          Time | Contentions | Location                                           |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------------------- |
| -70.9% | -2.74ms | 100.0% | 3.9ms → 1.1ms |      9 → 10 | `org.jetbrains.kotlin.codegen.ClassFileFactory:47` |

##### `parseMethodOrNull(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InplaceArgumentsMethodTransformer`)

|  Change |   Delta |              % |          Time | Contentions | Location                                                                   |
| ------: | ------: | -------------: | ------------: | ----------: | -------------------------------------------------------------------------- |
| removed | -2.94ms |   80.4% → 0.0% |   2.9ms → 0ms |       3 → 0 | `org.jetbrains.kotlin.codegen.inline.InplaceArgumentsMethodTransformer:88` |
|  +62.6% | +0.45ms | 19.6% → 100.0% | 0.7ms → 1.2ms |       2 → 3 | `org.jetbrains.kotlin.codegen.inline.InplaceArgumentsMethodTransformer:79` |

##### `unitStats_delegate$lambda$0(PerformanceManager)` (`org.jetbrains.kotlin.util.PerformanceManager`)

| Change |   Delta |             % |          Time | Contentions | Location                                           |
| -----: | ------: | ------------: | ------------: | ----------: | -------------------------------------------------- |
| -86.0% | -1.79ms | 45.8% → 13.8% | 2.1ms → 0.3ms |       8 → 7 | `org.jetbrains.kotlin.util.PerformanceManager:101` |
| -26.5% | -0.65ms | 54.2% → 86.2% | 2.5ms → 1.8ms |           9 | `org.jetbrains.kotlin.util.PerformanceManager:123` |

##### `transform()` (`org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer$Transformer`)

| Change |   Delta |      % |          Time | Contentions | Location                                                                                            |
| -----: | ------: | -----: | ------------: | ----------: | --------------------------------------------------------------------------------------------------- |
| -86.4% | -2.44ms | 100.0% | 2.8ms → 0.4ms |           4 | `org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer$Transformer:58` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|   Change |   Delta |            % |           Time | Contentions | Location                                                                 |
| -------: | ------: | -----------: | -------------: | ----------: | ------------------------------------------------------------------------ |
| +9796.3% | +1.54ms | 0.1% → 17.7% | 15.8µs → 1.6ms |       1 → 2 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:53` |
|   -60.4% | -1.17ms | 17.4% → 8.7% |  1.9ms → 0.8ms |       2 → 3 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:46` |
|   -64.2% | -1.15ms | 16.1% → 7.3% |  1.8ms → 0.6ms |       1 → 2 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:57` |
|  removed | -1.13ms | 10.2% → 0.0% |    1.1ms → 0ms |       4 → 0 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:63` |
|      new | +0.86ms |  0.0% → 9.8% |    0ms → 0.9ms |       0 → 1 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:60` |

##### `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`)

| Change |   Delta |      % |          Time | Contentions | Location                                                            |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------------- |
| -91.8% | -2.24ms | 100.0% | 2.4ms → 0.2ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator:26` |

##### `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

| Change |   Delta |      % |          Time | Contentions | Location                                          |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------- |
| -26.1% | -2.13ms | 100.0% | 8.2ms → 6.0ms |          19 | `org.jetbrains.org.objectweb.asm.ClassWriter:266` |

##### `<init>(int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.SourceValue`)

| Change |   Delta |      % |          Time | Contentions | Location                                                       |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------------- |
| -88.6% | -2.12ms | 100.0% | 2.4ms → 0.3ms |           1 | `org.jetbrains.org.objectweb.asm.tree.analysis.SourceValue:68` |

##### `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackMethodTransformer`)

|  Change |   Delta |             % |        Time | Contentions | Location                                                                          |
| ------: | ------: | ------------: | ----------: | ----------: | --------------------------------------------------------------------------------- |
| removed | -1.94ms | 100.0% → 0.0% | 1.9ms → 0ms |       2 → 0 | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackMethodTransformer:31` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |   Delta |             % |           Time | Contentions | Location                                                   |
| -----: | ------: | ------------: | -------------: | ----------: | ---------------------------------------------------------- |
| -16.9% | -1.76ms | 96.0% → 97.1% | 10.4ms → 8.6ms |          18 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory:465` |
| -41.6% | -0.18ms |   4.0% → 2.9% |  0.4ms → 0.3ms |           2 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory:459` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `get(GeneratedMessageLite$Builder)` (`org.jetbrains.kotlin.metadata.serialization.MutableTable`)

| Change |   Delta |             % |        Time | Contentions | Caller                                                                                                            | Location                                                            |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
|    new | +5.67ms | 0.0% → 100.0% | 0ms → 5.7ms |       0 → 3 | `writeVersionRequirement(int, int, int, ProtoBuf$VersionRequirement$VersionKind, MutableVersionRequirementTable)` | `org.jetbrains.kotlin.serialization.DescriptorSerializer$Companion` |

##### `serializeContractOfFunctionIfAny(FirFunction, ProtoBuf$Function$Builder, FirElementSerializer)` (`org.jetbrains.kotlin.fir.serialization.FirContractSerializer`)

| Change |   Delta |             % |        Time | Contentions | Caller                       | Location                                                      |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------- | ------------------------------------------------------------- |
|    new | +3.81ms | 0.0% → 100.0% | 0ms → 3.8ms |       0 → 2 | `functionProto(FirFunction)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                                                      | Location                                              |
| ------: | ------: | -----: | ------------: | ----------: | --------------------------------------------------------------------------- | ----------------------------------------------------- |
| +159.4% | +3.48ms | 100.0% | 2.2ms → 5.7ms |      10 → 8 | `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier` |

##### `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`)

|   Change |   Delta |      % |          Time | Contentions | Caller                       | Location                                                      |
| -------: | ------: | -----: | ------------: | ----------: | ---------------------------- | ------------------------------------------------------------- |
| +2793.9% | +2.88ms | 100.0% | 0.1ms → 3.0ms |       1 → 4 | `functionProto(FirFunction)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `getLineAndColumnNumbers(int)` (`org.jetbrains.kotlin.ir.AbstractIrFileEntry`)

|  Change |   Delta |      % |          Time | Contentions | Caller                         | Location                                                     |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| +197.9% | +2.58ms | 100.0% | 1.3ms → 3.9ms |      10 → 5 | `getLineAndColumnNumbers(int)` | `org.jetbrains.kotlin.ir.util.NaiveSourceBasedFileEntryImpl` |

##### `fillEffectProto(ProtoBuf$Effect$Builder, KtEffectDeclaration, FirContractDescription)` (`org.jetbrains.kotlin.fir.serialization.FirContractSerializer$ContractSerializerWorker`)

| Change |   Delta |             % |        Time | Contentions | Caller                                                     | Location                                                                                |
| -----: | ------: | ------------: | ----------: | ----------: | ---------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|    new | +2.33ms | 0.0% → 100.0% | 0ms → 2.3ms |       0 → 2 | `effectProto(KtEffectDeclaration, FirContractDescription)` | `org.jetbrains.kotlin.fir.serialization.FirContractSerializer$ContractSerializerWorker` |

##### `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`)

|  Change |   Delta |      % |          Time | Contentions | Caller                           | Location                                                      |
| ------: | ------: | -----: | ------------: | ----------: | -------------------------------- | ------------------------------------------------------------- |
| +180.1% | +2.17ms | 100.0% | 1.2ms → 3.4ms |       1 → 2 | `packagePartProto(FirFile, Set)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion`)

|  Change |   Delta |             % |          Time | Contentions | Caller                                                                                                                                                                              | Location                                                                |
| ------: | ------: | ------------: | ------------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| +422.1% | +1.20ms | 47.5% → 55.7% | 0.3ms → 1.5ms |       2 → 3 | `createTopLevel$default(FirElementSerializer$Companion, FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean, int, Object)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion` |
| +275.4% | +0.87ms | 52.5% → 44.3% | 0.3ms → 1.2ms |       2 → 3 | `create(FirSession, ScopeSession, FirClass, FirSerializerExtension, FirElementSerializer, AbstractTypeApproximator, LanguageVersionSettings, boolean)`                              | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion` |

##### `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                     | Location                                                |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------------------------ | ------------------------------------------------------- |
| +845.7% | +1.89ms | 100.0% | 0.2ms → 2.1ms |       3 → 1 | `generateMethod(IrFunction, SourceMapper)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `<init>(GenerationState, NameGenerator, SourceCompilerForInline, InlineCallSiteInfo, ReifiedTypeInliner, TypeParameterMappings, InlineScopesGenerator, KotlinTypeMapperBase)` (`org.jetbrains.kotlin.codegen.inline.RootInliningContext`)

|   Change |   Delta |      % |          Time | Contentions | Caller                                                               | Location                                                   |
| -------: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------------------- | ---------------------------------------------------------- |
| +2552.9% | +1.88ms | 100.0% | 0.1ms → 1.9ms |           1 | `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen` |

##### `removeClosureAssertions(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner$Companion`)

|   Change |   Delta |      % |          Time | Contentions | Caller                                                                | Location                                                      |
| -------: | ------: | -----: | ------------: | ----------: | --------------------------------------------------------------------- | ------------------------------------------------------------- |
| +1202.3% | +1.84ms | 100.0% | 0.2ms → 2.0ms |           1 | `access$removeClosureAssertions(MethodInliner$Companion, MethodNode)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner$Companion` |

##### `visitMethodInsn(int, String, String, String, boolean)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner$doInline$lambdaInliner$1`)

|   Change |   Delta |      % |          Time | Contentions | Caller                  | Location                                              |
| -------: | ------: | -----: | ------------: | ----------: | ----------------------- | ----------------------------------------------------- |
| +3230.4% | +1.71ms | 100.0% | 0.1ms → 1.8ms |       1 → 2 | `accept(MethodVisitor)` | `org.jetbrains.org.objectweb.asm.tree.MethodInsnNode` |

##### `getSuspensionPointKind(IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |   Delta |             % |        Time | Contentions | Caller                         | Location                                                     |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
|    new | +1.68ms | 0.0% → 100.0% | 0ms → 1.7ms |       0 → 5 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `toAnnotationValue(SessionAndScopeSessionHolder, FirAnnotation, Map)` (`org.jetbrains.kotlin.fir.serialization.constant.FirToConstantValueTransformerKt`)

| Change |   Delta |             % |        Time | Contentions | Caller                                                                   | Location                                                                          |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
|    new | +1.64ms | 0.0% → 100.0% | 0ms → 1.6ms |       0 → 1 | `evaluateToAnnotationValue(SessionAndScopeSessionHolder, FirAnnotation)` | `org.jetbrains.kotlin.fir.serialization.constant.FirToConstantValueTransformerKt` |

##### `toIrBasedDescriptor(IrField)` (`org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt`)

| Change |   Delta |             % |        Time | Contentions | Caller                               | Location                                                   |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------ | ---------------------------------------------------------- |
|    new | +1.57ms | 0.0% → 100.0% | 0ms → 1.6ms |       0 → 1 | `toIrBasedDescriptor(IrDeclaration)` | `org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt` |

##### `getMethodNode(byte[], Type, Method)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                         | Location                                                        |
| ------: | ------: | -----: | ------------: | ----------: | ---------------------------------------------- | --------------------------------------------------------------- |
| +231.5% | +1.47ms | 100.0% | 0.6ms → 2.1ms |       1 → 2 | `getMethodNode(Type, byte[], Method, boolean)` | `org.jetbrains.kotlin.codegen.inline.SourceCompilerForInlineKt` |

##### `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |   Delta |             % |        Time | Contentions | Caller                  | Location                                                |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------- | ------------------------------------------------------- |
|    new | +1.41ms | 0.0% → 100.0% | 0ms → 1.4ms |       0 → 1 | `generateAnnotations()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `newBuilder()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`)

| Change |   Delta |             % |        Time | Contentions | Caller                                      | Location                                                      |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------------------- | ------------------------------------------------------------- |
|    new | +1.34ms | 0.0% → 100.0% | 0ms → 1.3ms |       0 → 1 | `typeArgument(ConeTypeProjection, boolean)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                                                                    | Location                                                   |
| ------: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| +687.4% | +1.31ms | 100.0% | 0.2ms → 1.5ms |       1 → 3 | `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen` |

##### `transformOnce(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.boxing.StackPeepholeOptimizationsTransformer`)

| Change |   Delta |             % |        Time | Contentions | Caller                          | Location                                                                                 |
| -----: | ------: | ------------: | ----------: | ----------: | ------------------------------- | ---------------------------------------------------------------------------------------- |
|    new | +1.19ms | 0.0% → 100.0% | 0ms → 1.2ms |       0 → 2 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.boxing.StackPeepholeOptimizationsTransformer` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |     Delta |             % |            Time | Contentions | Caller                                      | Location                                                             |
| -----: | --------: | ------------: | --------------: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| -45.0% | -664.47ms | 94.0% → 93.3% | 1.48s → 813.1ms |     76 → 87 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
| -37.7% |  -35.53ms |   6.0% → 6.7% | 94.1ms → 58.6ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`)

| Change |    Delta |      % |           Time | Contentions | Caller                         | Location                                                     |
| -----: | -------: | -----: | -------------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| -76.8% | -10.71ms | 100.0% | 13.9ms → 3.2ms |      8 → 10 | `visitWhen(IrWhen, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

| Change |   Delta |      % |            Time | Contentions | Caller                                  | Location                                                                    |
| -----: | ------: | -----: | --------------: | ----------: | --------------------------------------- | --------------------------------------------------------------------------- |
| -38.1% | -7.96ms | 100.0% | 20.9ms → 12.9ms |     22 → 24 | `newClassBuilder(JvmDeclarationOrigin)` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory` |

##### `desiredAssertionStatus()` (`java.lang.Class`)

|  Change |   Delta |            % |         Time | Contentions | Caller       | Location                                                          |
| ------: | ------: | -----------: | -----------: | ----------: | ------------ | ----------------------------------------------------------------- |
| removed | -6.27ms | 97.4% → 0.0% |  6.3ms → 0ms |       1 → 0 | `<clinit>()` | `org.jetbrains.kotlin.codegen.inline.RemapVisitor`                |
| removed | -0.14ms |  2.2% → 0.0% |  0.1ms → 0ms |       1 → 0 | `<clinit>()` | `org.jetbrains.kotlin.codegen.StackValue`                         |
| removed | -0.02ms |  0.3% → 0.0% | 17.5µs → 0ms |       1 → 0 | `<clinit>()` | `org.jetbrains.kotlin.types.TypeUtils`                            |
| removed | -0.01ms |  0.2% → 0.0% |  9.7µs → 0ms |       1 → 0 | `<clinit>()` | `org.jetbrains.kotlin.codegen.inline.InternalFinallyBlockInliner` |

##### `preprocessNodeBeforeInline(MethodNode, Map)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                        | Location                                            |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------- | --------------------------------------------------- |
| -71.7% | -5.78ms | 100.0% | 8.1ms → 2.3ms |       4 → 3 | `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                         | Location                                            |
| -----: | ------: | -----: | ------------: | ----------: | -------------------------------------------------------------- | --------------------------------------------------- |
| -56.9% | -5.29ms | 100.0% | 9.3ms → 4.0ms |          16 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                                                                           | Location                                                     |
| -----: | ------: | -----: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| -63.4% | -4.14ms | 100.0% | 6.5ms → 2.4ms |     10 → 13 | `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |   Delta |      % |           Time | Contentions | Caller                         | Location                                                     |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| -34.8% | -4.04ms | 100.0% | 11.6ms → 7.6ms |          18 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |   Delta |      % |            Time | Contentions | Caller                                                                           | Location                                                |
| -----: | ------: | -----: | --------------: | ----------: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -24.7% | -3.68ms | 100.0% | 14.9ms → 11.2ms |     50 → 43 | `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.RedundantCheckCastEliminationMethodTransformer`)

| Change |   Delta |      % |          Time | Contentions | Caller                          | Location                                                                           |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------- | ---------------------------------------------------------------------------------- |
| -68.2% | -3.13ms | 100.0% | 4.6ms → 1.5ms |           3 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer` |

##### `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                 | Location                                                |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
| -43.7% | -2.84ms | 100.0% | 6.5ms → 3.7ms |     21 → 13 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`)

| Change |   Delta |      % |          Time | Contentions | Caller                                                 | Location                                                |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
| -70.9% | -2.74ms | 100.0% | 3.9ms → 1.1ms |      9 → 10 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |   Delta |      % |          Time | Contentions | Caller         | Location                                 |
| -----: | ------: | -----: | ------------: | ----------: | -------------- | ---------------------------------------- |
| -70.3% | -2.68ms | 100.0% | 3.8ms → 1.1ms |      14 → 8 | `park(Object)` | `java.util.concurrent.locks.LockSupport` |

##### `parseMethodOrNull(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InplaceArgumentsMethodTransformer`)

| Change |   Delta |      % |          Time | Contentions | Caller                          | Location                                                                |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------- | ----------------------------------------------------------------------- |
| -68.2% | -2.49ms | 100.0% | 3.7ms → 1.2ms |       5 → 3 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.inline.InplaceArgumentsMethodTransformer` |

##### `unitStats_delegate$lambda$0(PerformanceManager)` (`org.jetbrains.kotlin.util.PerformanceManager`)

| Change |   Delta |      % |          Time | Contentions | Caller     | Location                                                                  |
| -----: | ------: | -----: | ------------: | ----------: | ---------- | ------------------------------------------------------------------------- |
| -53.8% | -2.45ms | 100.0% | 4.5ms → 2.1ms |     17 → 16 | `invoke()` | `org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000980112e468` |

##### `transform()` (`org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer$Transformer`)

| Change |   Delta |      % |          Time | Contentions | Caller                          | Location                                                                             |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------- | ------------------------------------------------------------------------------------ |
| -86.4% | -2.44ms | 100.0% | 2.8ms → 0.4ms |           4 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

| Change |   Delta |      % |           Time | Contentions | Caller                                                                   | Location                                                             |
| -----: | ------: | -----: | -------------: | ----------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| -20.8% | -2.31ms | 100.0% | 11.1ms → 8.8ms |          22 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder` |

##### `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`)

| Change |   Delta |      % |          Time | Contentions | Caller                         | Location                                                     |
| -----: | ------: | -----: | ------------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| -91.8% | -2.24ms | 100.0% | 2.4ms → 0.2ms |           2 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

| Change |   Delta |      % |          Time | Contentions | Caller        | Location                                      |
| -----: | ------: | -----: | ------------: | ----------: | ------------- | --------------------------------------------- |
| -26.1% | -2.13ms | 100.0% | 8.2ms → 6.0ms |          19 | `<init>(int)` | `org.jetbrains.org.objectweb.asm.ClassWriter` |

##### `<init>(int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.SourceValue`)

| Change |   Delta |      % |          Time | Contentions | Caller           | Location                                                          |
| -----: | ------: | -----: | ------------: | ----------: | ---------------- | ----------------------------------------------------------------- |
| -88.6% | -2.12ms | 100.0% | 2.4ms → 0.3ms |           1 | `newValue(Type)` | `org.jetbrains.org.objectweb.asm.tree.analysis.SourceInterpreter` |

##### `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackMethodTransformer`)

|  Change |   Delta |             % |        Time | Contentions | Caller                          | Location                                                                           |
| ------: | ------: | ------------: | ----------: | ----------: | ------------------------------- | ---------------------------------------------------------------------------------- |
| removed | -1.94ms | 100.0% → 0.0% | 1.9ms → 0ms |       2 → 0 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |   Delta |      % |           Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | ------: | -----: | -------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| -17.9% | -1.94ms | 100.0% | 10.8ms → 8.9ms |          20 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

### Total time

#### Regressions

Functions with the largest increase in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

|   Change |    Delta |            % |            Time | Contentions | Function                                                                                                                                                 | Location                                                                           |
| -------: | -------: | -----------: | --------------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|  +481.1% | +18.91ms |  0.2% → 1.9% |  3.9ms → 22.8ms |     14 → 33 | `packagePartProto(FirFile, Set)`                                                                                                                         | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer`                      |
|  +472.2% | +18.56ms |  0.2% → 1.9% |  3.9ms → 22.5ms |     14 → 31 | `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)`                                                                          | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer`                      |
|  +601.8% | +16.39ms |  0.1% → 1.6% |  2.7ms → 19.1ms |     13 → 29 | `functionProto(FirFunction)`                                                                                                                             | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer`                      |
|  +138.6% | +16.26ms |  0.6% → 2.4% | 11.7ms → 28.0ms |     35 → 42 | `serialize(MetadataSource, MetadataSource$File)`                                                                                                         | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`                       |
|  +123.4% | +16.24ms |  0.7% → 2.5% | 13.2ms → 29.4ms |     37 → 43 | `generateKotlinMetadataAnnotation()`                                                                                                                     | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                            |
|  +115.7% | +16.10ms |  0.7% → 2.5% | 13.9ms → 30.0ms |     45 → 47 | `generateAnnotations()`                                                                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                            |
|  +112.6% | +14.83ms |  0.7% → 2.4% | 13.2ms → 28.0ms |     37 → 42 | `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                            |
|  +112.6% | +14.83ms |  0.7% → 2.4% | 13.2ms → 28.0ms |     37 → 42 | `invoke(Object)`                                                                                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000098018ff410` |
|  +112.6% | +14.83ms |  0.7% → 2.4% | 13.2ms → 28.0ms |     37 → 42 | `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)`                                                   | `org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`                               |
| +2965.4% |  +9.73ms | <0.1% → 0.8% |  0.3ms → 10.1ms |      3 → 18 | `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)`                                        | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`                   |
| +3044.1% |  +6.85ms | <0.1% → 0.6% |   0.2ms → 7.1ms |      2 → 14 | `writeInlineParameterNullCheckRequirement(MutableVersionRequirementTable, Function1)`                                                                    | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`                   |
| +8746.9% |  +6.61ms | <0.1% → 0.6% |   0.1ms → 6.7ms |       1 → 9 | `writeVersionRequirement(int, int, int, ProtoBuf$VersionRequirement$VersionKind, MutableVersionRequirementTable)`                                        | `org.jetbrains.kotlin.serialization.DescriptorSerializer$Companion`                |
|  +882.4% |  +5.69ms | <0.1% → 0.5% |   0.6ms → 6.3ms |       3 → 5 | `serializeContractOfFunctionIfAny(FirFunction, ProtoBuf$Function$Builder, FirElementSerializer)`                                                         | `org.jetbrains.kotlin.fir.serialization.FirContractSerializer`                     |
|      new |  +5.67ms |  0.0% → 0.5% |     0ms → 5.7ms |       0 → 3 | `get(GeneratedMessageLite$Builder)`                                                                                                                      | `org.jetbrains.kotlin.metadata.serialization.MutableTable`                         |
|  +223.2% |  +5.37ms |  0.1% → 0.7% |   2.4ms → 7.8ms |      13 → 9 | `<init>(SourceMapper, SMAP, MethodVisitor)`                                                                                                              | `org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`                |
|  +159.4% |  +3.48ms |  0.1% → 0.5% |   2.2ms → 5.7ms |      10 → 8 | `<init>(SourceMapper, SMAP, SourcePosition)`                                                                                                             | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier`                              |
|  +159.4% |  +3.48ms |  0.1% → 0.5% |   2.2ms → 5.7ms |      10 → 8 | `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)`                                                                              | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier`                              |
|  +197.9% |  +2.58ms |  0.1% → 0.3% |   1.3ms → 3.9ms |      10 → 5 | `getLineAndColumnNumbers(int)`                                                                                                                           | `org.jetbrains.kotlin.ir.AbstractIrFileEntry`                                      |
|  +197.9% |  +2.58ms |  0.1% → 0.3% |   1.3ms → 3.9ms |      10 → 5 | `getLineAndColumnNumbers(int)`                                                                                                                           | `org.jetbrains.kotlin.ir.util.NaiveSourceBasedFileEntryImpl`                       |
|      new |  +2.36ms |  0.0% → 0.2% |     0ms → 2.4ms |       0 → 2 | `generateField(IrField)`                                                                                                                                 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                            |

#### Improvements

Functions with the largest decrease in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |             % |              Time | Contentions | Function                                                                                                          | Location                                                                          |
| -----: | --------: | ------------: | ----------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| -38.8% | -755.53ms |        100.0% |     1.94s → 1.19s |   960 → 982 | `runWorker(ThreadPoolExecutor$Worker)`                                                                            | `java.util.concurrent.ThreadPoolExecutor`                                         |
| -38.8% | -755.53ms |        100.0% |     1.94s → 1.19s |   960 → 982 | `run()`                                                                                                           | `java.util.concurrent.ThreadPoolExecutor$Worker`                                  |
| -38.8% | -755.53ms |        100.0% |     1.94s → 1.19s |   960 → 982 | `runWith(Object, Runnable)`                                                                                       | `java.lang.Thread`                                                                |
| -38.8% | -755.53ms |        100.0% |     1.94s → 1.19s |   960 → 982 | `run()`                                                                                                           | `java.lang.Thread`                                                                |
| -38.8% | -752.85ms | 99.8% → 99.9% |     1.94s → 1.19s |   946 → 974 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| -38.8% | -752.85ms | 99.8% → 99.9% |     1.94s → 1.19s |   946 → 974 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220` |
| -38.8% | -752.85ms | 99.8% → 99.9% |     1.94s → 1.19s |   946 → 974 | `run()`                                                                                                           | `java.util.concurrent.CompletableFuture$AsyncRun`                                 |
| -38.7% | -749.88ms | 99.5% → 99.7% |     1.94s → 1.19s |   915 → 942 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| -40.7% | -748.04ms | 94.4% → 91.5% |     1.84s → 1.09s |   615 → 667 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -41.9% | -735.29ms | 90.2% → 85.7% |     1.76s → 1.02s |   454 → 482 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -39.5% | -730.53ms | 95.2% → 94.3% |     1.85s → 1.12s |   667 → 716 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -25.5% |  -70.82ms | 14.3% → 17.4% | 277.4ms → 206.6ms |   378 → 395 | `doGenerate(ReifiedTypeParametersUsages)`                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| -25.5% |  -70.82ms | 14.3% → 17.4% | 277.4ms → 206.6ms |   378 → 395 | `generate(ReifiedTypeParametersUsages)`                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| -25.5% |  -70.82ms | 14.3% → 17.4% | 277.4ms → 206.6ms |   378 → 395 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                     | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| -34.2% |  -65.28ms |  9.8% → 10.6% | 190.8ms → 125.5ms |   157 → 186 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -34.2% |  -65.28ms |  9.8% → 10.6% | 190.8ms → 125.5ms |   157 → 186 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -34.2% |  -65.28ms |  9.8% → 10.6% | 190.8ms → 125.5ms |   157 → 186 | `visitBlockBody(IrBlockBody, Object)`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -34.2% |  -65.28ms |  9.8% → 10.6% | 190.8ms → 125.5ms |   157 → 186 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                 |
| -34.8% |  -65.26ms |  9.6% → 10.3% | 187.5ms → 122.3ms |   144 → 177 | `visitReturn(IrReturn, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -34.8% |  -65.26ms |  9.6% → 10.3% | 187.5ms → 122.3ms |   144 → 177 | `visitReturn(IrReturn, Object)`                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |

##### Ours

| Change |     Delta |             % |              Time | Contentions | Function                                                                                                          | Location                                                                          |
| -----: | --------: | ------------: | ----------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| -38.8% | -752.85ms | 99.8% → 99.9% |     1.94s → 1.19s |   946 → 974 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| -38.8% | -752.85ms | 99.8% → 99.9% |     1.94s → 1.19s |   946 → 974 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220` |
| -38.7% | -749.88ms | 99.5% → 99.7% |     1.94s → 1.19s |   915 → 942 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| -40.7% | -748.04ms | 94.4% → 91.5% |     1.84s → 1.09s |   615 → 667 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -41.9% | -735.29ms | 90.2% → 85.7% |     1.76s → 1.02s |   454 → 482 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -39.5% | -730.53ms | 95.2% → 94.3% |     1.85s → 1.12s |   667 → 716 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| -25.5% |  -70.82ms | 14.3% → 17.4% | 277.4ms → 206.6ms |   378 → 395 | `doGenerate(ReifiedTypeParametersUsages)`                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| -25.5% |  -70.82ms | 14.3% → 17.4% | 277.4ms → 206.6ms |   378 → 395 | `generate(ReifiedTypeParametersUsages)`                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| -25.5% |  -70.82ms | 14.3% → 17.4% | 277.4ms → 206.6ms |   378 → 395 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                     | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| -34.2% |  -65.28ms |  9.8% → 10.6% | 190.8ms → 125.5ms |   157 → 186 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -34.2% |  -65.28ms |  9.8% → 10.6% | 190.8ms → 125.5ms |   157 → 186 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -34.2% |  -65.28ms |  9.8% → 10.6% | 190.8ms → 125.5ms |   157 → 186 | `visitBlockBody(IrBlockBody, Object)`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -34.2% |  -65.28ms |  9.8% → 10.6% | 190.8ms → 125.5ms |   157 → 186 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                 |
| -34.8% |  -65.26ms |  9.6% → 10.3% | 187.5ms → 122.3ms |   144 → 177 | `visitReturn(IrReturn, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -34.8% |  -65.26ms |  9.6% → 10.3% | 187.5ms → 122.3ms |   144 → 177 | `visitReturn(IrReturn, Object)`                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -34.8% |  -65.26ms |  9.6% → 10.3% | 187.5ms → 122.3ms |   144 → 177 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrReturn`                                    |
| -33.7% |  -65.15ms |  9.9% → 10.8% | 193.4ms → 128.2ms |   174 → 210 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -38.6% |  -60.71ms |          8.1% |  157.5ms → 96.8ms |    91 → 112 | `visitWhen(IrWhen, BlockInfo)`                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -38.6% |  -60.71ms |          8.1% |  157.5ms → 96.8ms |    91 → 112 | `visitWhen(IrWhen, Object)`                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| -38.6% |  -60.71ms |          8.1% |  157.5ms → 96.8ms |    91 → 112 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrWhen`                                      |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `packagePartProto(FirFile, Set)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`)

|  Change |    Delta |      % |           Time | Contentions | Caller                                           | Location                                                     |
| ------: | -------: | -----: | -------------: | ----------: | ------------------------------------------------ | ------------------------------------------------------------ |
| +481.1% | +18.91ms | 100.0% | 3.9ms → 22.8ms |     14 → 33 | `serialize(MetadataSource, MetadataSource$File)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer` |

##### `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`)

|  Change |    Delta |      % |           Time | Contentions | Caller                           | Location                                                      |
| ------: | -------: | -----: | -------------: | ----------: | -------------------------------- | ------------------------------------------------------------- |
| +472.2% | +18.56ms | 100.0% | 3.9ms → 22.5ms |     14 → 31 | `packagePartProto(FirFile, Set)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `functionProto(FirFunction)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`)

|  Change |    Delta |      % |           Time | Contentions | Caller                                                                          | Location                                                      |
| ------: | -------: | -----: | -------------: | ----------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| +601.8% | +16.39ms | 100.0% | 2.7ms → 19.1ms |     13 → 29 | `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`)

|  Change |    Delta |      % |            Time | Contentions | Caller                                                                                                                                                   | Location                                                |
| ------: | -------: | -----: | --------------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +138.6% | +16.26ms | 100.0% | 11.7ms → 28.0ms |     35 → 42 | `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |    Delta |      % |            Time | Contentions | Caller                  | Location                                                |
| ------: | -------: | -----: | --------------: | ----------: | ----------------------- | ------------------------------------------------------- |
| +123.4% | +16.24ms | 100.0% | 13.2ms → 29.4ms |     37 → 43 | `generateAnnotations()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateAnnotations()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |    Delta |      % |            Time | Contentions | Caller       | Location                                                |
| ------: | -------: | -----: | --------------: | ----------: | ------------ | ------------------------------------------------------- |
| +115.7% | +16.10ms | 100.0% | 13.9ms → 30.0ms |     45 → 47 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |    Delta |      % |            Time | Contentions | Caller           | Location                                                                           |
| ------: | -------: | -----: | --------------: | ----------: | ---------------- | ---------------------------------------------------------------------------------- |
| +112.6% | +14.83ms | 100.0% | 13.2ms → 28.0ms |     37 → 42 | `invoke(Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000098018ff410` |

##### `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000098018ff410`)

|  Change |    Delta |      % |            Time | Contentions | Caller                                                                                                 | Location                                             |
| ------: | -------: | -----: | --------------: | ----------: | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| +112.6% | +14.83ms | 100.0% | 13.2ms → 28.0ms |     37 → 42 | `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` | `org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt` |

##### `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`)

|  Change |    Delta |      % |            Time | Contentions | Caller                               | Location                                                |
| ------: | -------: | -----: | --------------: | ----------: | ------------------------------------ | ------------------------------------------------------- |
| +112.6% | +14.83ms | 100.0% | 13.2ms → 28.0ms |     37 → 42 | `generateKotlinMetadataAnnotation()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`)

|   Change |   Delta |      % |           Time | Contentions | Caller                       | Location                                                      |
| -------: | ------: | -----: | -------------: | ----------: | ---------------------------- | ------------------------------------------------------------- |
| +2965.4% | +9.73ms | 100.0% | 0.3ms → 10.1ms |      3 → 18 | `functionProto(FirFunction)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `writeInlineParameterNullCheckRequirement(MutableVersionRequirementTable, Function1)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`)

|   Change |   Delta |      % |          Time | Contentions | Caller                                                                                                            | Location                                                         |
| -------: | ------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| +3044.1% | +6.85ms | 100.0% | 0.2ms → 7.1ms |      2 → 14 | `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension` |

##### `writeVersionRequirement(int, int, int, ProtoBuf$VersionRequirement$VersionKind, MutableVersionRequirementTable)` (`org.jetbrains.kotlin.serialization.DescriptorSerializer$Companion`)

|   Change |   Delta |      % |          Time | Contentions | Caller                                                                                | Location                                                         |
| -------: | ------: | -----: | ------------: | ----------: | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| +8746.9% | +6.61ms | 100.0% | 0.1ms → 6.7ms |       1 → 9 | `writeInlineParameterNullCheckRequirement(MutableVersionRequirementTable, Function1)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension` |

##### `serializeContractOfFunctionIfAny(FirFunction, ProtoBuf$Function$Builder, FirElementSerializer)` (`org.jetbrains.kotlin.fir.serialization.FirContractSerializer`)

|  Change |   Delta |      % |          Time | Contentions | Caller                       | Location                                                      |
| ------: | ------: | -----: | ------------: | ----------: | ---------------------------- | ------------------------------------------------------------- |
| +882.4% | +5.69ms | 100.0% | 0.6ms → 6.3ms |       3 → 5 | `functionProto(FirFunction)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `get(GeneratedMessageLite$Builder)` (`org.jetbrains.kotlin.metadata.serialization.MutableTable`)

| Change |   Delta |             % |        Time | Contentions | Caller                                                                                                            | Location                                                            |
| -----: | ------: | ------------: | ----------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
|    new | +5.67ms | 0.0% → 100.0% | 0ms → 5.7ms |       0 → 3 | `writeVersionRequirement(int, int, int, ProtoBuf$VersionRequirement$VersionKind, MutableVersionRequirementTable)` | `org.jetbrains.kotlin.serialization.DescriptorSerializer$Companion` |

##### `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                     | Location                                                |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------------------------ | ------------------------------------------------------- |
| +223.2% | +5.37ms | 100.0% | 2.4ms → 7.8ms |      13 → 9 | `generateMethod(IrFunction, SourceMapper)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                                                      | Location                                              |
| ------: | ------: | -----: | ------------: | ----------: | --------------------------------------------------------------------------- | ----------------------------------------------------- |
| +159.4% | +3.48ms | 100.0% | 2.2ms → 5.7ms |      10 → 8 | `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier` |

##### `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`)

|  Change |   Delta |      % |          Time | Contentions | Caller                                      | Location                                                            |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------------------------- | ------------------------------------------------------------------- |
| +159.4% | +3.48ms | 100.0% | 2.2ms → 5.7ms |      10 → 8 | `<init>(SourceMapper, SMAP, MethodVisitor)` | `org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor` |

##### `getLineAndColumnNumbers(int)` (`org.jetbrains.kotlin.ir.AbstractIrFileEntry`)

|  Change |   Delta |      % |          Time | Contentions | Caller                         | Location                                                     |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| +197.9% | +2.58ms | 100.0% | 1.3ms → 3.9ms |      10 → 5 | `getLineAndColumnNumbers(int)` | `org.jetbrains.kotlin.ir.util.NaiveSourceBasedFileEntryImpl` |

##### `getLineAndColumnNumbers(int)` (`org.jetbrains.kotlin.ir.util.NaiveSourceBasedFileEntryImpl`)

|  Change |   Delta |      % |          Time | Contentions | Caller                         | Location                                      |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------------ | --------------------------------------------- |
| +197.9% | +2.58ms | 100.0% | 1.3ms → 3.9ms |      10 → 5 | `getSourceRangeInfo(int, int)` | `org.jetbrains.kotlin.ir.AbstractIrFileEntry` |

##### `generateField(IrField)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |   Delta |             % |        Time | Contentions | Caller       | Location                                                |
| -----: | ------: | ------------: | ----------: | ----------: | ------------ | ------------------------------------------------------- |
|    new | +2.36ms | 0.0% → 100.0% | 0ms → 2.4ms |       0 → 2 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

| Change |     Delta |      % |          Time | Contentions | Caller  | Location                                         |
| -----: | --------: | -----: | ------------: | ----------: | ------- | ------------------------------------------------ |
| -38.8% | -755.53ms | 100.0% | 1.94s → 1.19s |   960 → 982 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

| Change |     Delta |      % |          Time | Contentions | Caller                      | Location           |
| -----: | --------: | -----: | ------------: | ----------: | --------------------------- | ------------------ |
| -38.8% | -755.53ms | 100.0% | 1.94s → 1.19s |   960 → 982 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |     Delta |      % |          Time | Contentions | Caller  | Location           |
| -----: | --------: | -----: | ------------: | ----------: | ------- | ------------------ |
| -38.8% | -755.53ms | 100.0% | 1.94s → 1.19s |   960 → 982 | `run()` | `java.lang.Thread` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |     Delta |      % |          Time | Contentions | Caller  | Location                                                                          |
| -----: | --------: | -----: | ------------: | ----------: | ------- | --------------------------------------------------------------------------------- |
| -38.8% | -752.85ms | 100.0% | 1.94s → 1.19s |   946 → 974 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220` |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`)

| Change |     Delta |      % |          Time | Contentions | Caller  | Location                                          |
| -----: | --------: | -----: | ------------: | ----------: | ------- | ------------------------------------------------- |
| -38.8% | -752.85ms | 100.0% | 1.94s → 1.19s |   946 → 974 | `run()` | `java.util.concurrent.CompletableFuture$AsyncRun` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

| Change |     Delta |      % |          Time | Contentions | Caller                                 | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | -------------------------------------- | ----------------------------------------- |
| -38.8% | -752.85ms | 100.0% | 1.94s → 1.19s |   946 → 974 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |     Delta |      % |          Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| -38.7% | -749.88ms | 100.0% | 1.94s → 1.19s |   915 → 942 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |     Delta |      % |          Time | Contentions | Caller       | Location                                                |
| -----: | --------: | -----: | ------------: | ----------: | ------------ | ------------------------------------------------------- |
| -40.7% | -748.04ms | 100.0% | 1.84s → 1.09s |   615 → 667 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |     Delta |           % |            Time | Contentions | Caller                                      | Location                                                             |
| -----: | --------: | ----------: | --------------: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| -41.9% | -735.29ms |      100.0% |   1.76s → 1.02s |   454 → 482 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
| -37.7% |  -35.53ms | 5.4% → 5.7% | 94.1ms → 58.6ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |     Delta |      % |          Time | Contentions | Caller                                                   | Location                                               |
| -----: | --------: | -----: | ------------: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
| -39.5% | -730.53ms | 100.0% | 1.85s → 1.12s |   667 → 716 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                                  | Location                                                   |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| -25.5% | -70.82ms | 100.0% | 277.4ms → 206.6ms |   378 → 395 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                                                                        | Location                                                   |
| -----: | -------: | -----: | ----------------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| -25.5% | -70.82ms | 100.0% | 277.4ms → 206.6ms |   378 → 395 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                           | Location                                                |
| -----: | -------: | -----: | ----------------: | ----------: | -------------------------------- | ------------------------------------------------------- |
| -25.5% | -70.82ms | 100.0% | 277.4ms → 206.6ms |   378 → 395 | `generateMethodNode(IrFunction)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |           % |              Time | Contentions | Caller                                                       | Location                                                     |
| -----: | -------: | ----------: | ----------------: | ----------: | ------------------------------------------------------------ | ------------------------------------------------------------ |
| -34.2% | -65.28ms |      100.0% | 190.8ms → 125.5ms |   157 → 186 | `visitBlockBody(IrBlockBody, BlockInfo)`                     | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| +87.3% |  +2.02ms | 1.2% → 3.4% |     2.3ms → 4.3ms |           9 | `visitContainerExpression(IrContainerExpression, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                                | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | ------------------------------------- | ------------------------------------------------------------ |
| -34.2% | -65.28ms | 100.0% | 190.8ms → 125.5ms |   157 → 186 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                      | Location                                          |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------- | ------------------------------------------------- |
| -34.2% | -65.28ms | 100.0% | 190.8ms → 125.5ms |   157 → 186 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlockBody` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

| Change |    Delta |      % |              Time | Contentions | Caller       | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | ------------ | ------------------------------------------------------------ |
| -34.2% | -65.28ms | 100.0% | 190.8ms → 125.5ms |   157 → 186 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                          | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | ------------------------------- | ------------------------------------------------------------ |
| -34.8% | -65.26ms | 100.0% | 187.5ms → 122.3ms |   144 → 177 | `visitReturn(IrReturn, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                      | Location                                       |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------- | ---------------------------------------------- |
| -34.8% | -65.26ms | 100.0% | 187.5ms → 122.3ms |   144 → 177 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrReturn` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`)

|  Change |    Delta |              % |              Time | Contentions | Caller                                                     | Location                                                     |
| ------: | -------: | -------------: | ----------------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
|  -34.7% | -65.11ms | 99.9% → 100.0% | 187.4ms → 122.3ms |   143 → 177 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| removed |  -0.15ms |    0.1% → 0.0% |       0.2ms → 0ms |       1 → 0 | `visitWhen(IrWhen, BlockInfo)`                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Caller                                    | Location                                                   |
| -----: | -------: | -----: | ----------------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| -33.7% | -65.15ms | 100.0% | 193.4ms → 128.2ms |   174 → 210 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |             Time | Contentions | Caller                      | Location                                                     |
| -----: | -------: | -----: | ---------------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| -38.6% | -60.71ms | 100.0% | 157.5ms → 96.8ms |    91 → 112 | `visitWhen(IrWhen, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitWhen(IrWhen, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |             Time | Contentions | Caller                      | Location                                     |
| -----: | -------: | -----: | ---------------: | ----------: | --------------------------- | -------------------------------------------- |
| -38.6% | -60.71ms | 100.0% | 157.5ms → 96.8ms |    91 → 112 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrWhen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`)

|  Change |    Delta |             % |             Time | Contentions | Caller                                                     | Location                                                     |
| ------: | -------: | ------------: | ---------------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
|  -39.8% | -62.48ms | 99.7% → 97.7% | 157.0ms → 94.5ms |    86 → 108 | `visitReturn(IrReturn, BlockInfo)`                         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| +392.1% |  +1.78ms |   0.3% → 2.3% |    0.5ms → 2.2ms |       5 → 4 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `packagePartProto(FirFile, Set)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`)

|  Change |    Delta |              % |           Time | Contentions | Callee                                                                          | Location                                                      |
| ------: | -------: | -------------: | -------------: | ----------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| +472.2% | +18.56ms | 100.0% → 98.5% | 3.9ms → 22.5ms |     14 → 31 | `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |
|     new |  +0.35ms |    0.0% → 1.5% |    0ms → 0.3ms |       0 → 2 | `newBuilder()`                                                                  | `org.jetbrains.kotlin.metadata.ProtoBuf$Package`              |

##### `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`)

|  Change |    Delta |             % |           Time | Contentions | Callee                       | Location                                                      |
| ------: | -------: | ------------: | -------------: | ----------: | ---------------------------- | ------------------------------------------------------------- |
| +601.8% | +16.39ms | 69.3% → 85.0% | 2.7ms → 19.1ms |     13 → 29 | `functionProto(FirFunction)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `functionProto(FirFunction)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`)

|   Change |   Delta |             % |           Time | Contentions | Callee                                                                                                            | Location                                                         |
| -------: | ------: | ------------: | -------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| +2965.4% | +9.73ms | 12.1% → 52.7% | 0.3ms → 10.1ms |      3 → 18 | `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension` |
|  +882.4% | +5.69ms | 23.7% → 33.2% |  0.6ms → 6.3ms |       3 → 5 | `serializeContractOfFunctionIfAny(FirFunction, ProtoBuf$Function$Builder, FirElementSerializer)`                  | `org.jetbrains.kotlin.fir.serialization.FirContractSerializer`   |
|  +385.9% | +1.18ms |  11.2% → 7.8% |  0.3ms → 1.5ms |       2 → 3 | `typeProto(FirTypeRef, boolean)`                                                                                  | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer`    |
|  removed | -0.38ms |  14.1% → 0.0% |    0.4ms → 0ms |       2 → 0 | `getSimpleNameIndex(Name)`                                                                                        | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer`    |
|   +15.5% | +0.16ms |  38.9% → 6.4% |  1.1ms → 1.2ms |           3 | `valueParameterProto(FirValueParameter, int, FirFunction)`                                                        | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer`    |

##### `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`)

|  Change |    Delta |             % |           Time | Contentions | Callee                           | Location                                                      |
| ------: | -------: | ------------: | -------------: | ----------: | -------------------------------- | ------------------------------------------------------------- |
| +481.1% | +18.91ms | 33.5% → 81.6% | 3.9ms → 22.8ms |     14 → 33 | `packagePartProto(FirFile, Set)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |
|  -34.0% |  -2.65ms | 66.5% → 18.4% |  7.8ms → 5.1ms |      21 → 9 | `classProto(FirClass, FirFile)`  | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |    Delta |              % |            Time | Contentions | Callee                                                                                                 | Location                                             |
| ------: | -------: | -------------: | --------------: | ----------: | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| +112.6% | +14.83ms | 100.0% → 95.2% | 13.2ms → 28.0ms |     37 → 42 | `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` | `org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt` |

##### `generateAnnotations()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |    Delta |             % |            Time | Contentions | Callee                                                                        | Location                                                     |
| ------: | -------: | ------------: | --------------: | ----------: | ----------------------------------------------------------------------------- | ------------------------------------------------------------ |
| +123.4% | +16.24ms | 94.7% → 98.0% | 13.2ms → 29.4ms |     37 → 43 | `generateKotlinMetadataAnnotation()`                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`      |
|  -38.6% |  -0.29ms |   5.3% → 1.5% |   0.7ms → 0.5ms |       8 → 3 | `genAnnotations$default(AnnotationCodegen, IrDeclaration, List, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.AnnotationCodegen` |

##### `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |    Delta |              % |            Time | Contentions | Callee                                           | Location                                                            |
| ------: | -------: | -------------: | --------------: | ----------: | ------------------------------------------------ | ------------------------------------------------------------------- |
| +138.6% | +16.26ms | 89.1% → 100.0% | 11.7ms → 28.0ms |     35 → 42 | `serialize(MetadataSource, MetadataSource$File)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`        |
| removed |  -1.43ms |   10.9% → 0.0% |     1.4ms → 0ms |       2 → 0 | `writeData(MessageLite, JvmStringTable)`         | `org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil` |

##### `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000098018ff410`)

|  Change |    Delta |      % |            Time | Contentions | Callee                                                                                                                                                   | Location                                                |
| ------: | -------: | -----: | --------------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +112.6% | +14.83ms | 100.0% | 13.2ms → 28.0ms |     37 → 42 | `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`)

|  Change |    Delta |      % |            Time | Contentions | Callee           | Location                                                                           |
| ------: | -------: | -----: | --------------: | ----------: | ---------------- | ---------------------------------------------------------------------------------- |
| +112.6% | +14.83ms | 100.0% | 13.2ms → 28.0ms |     37 → 42 | `invoke(Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000098018ff410` |

##### `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`)

|   Change |   Delta |             % |          Time | Contentions | Callee                                                                                | Location                                                         |
| -------: | ------: | ------------: | ------------: | ----------: | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| +3044.1% | +6.85ms | 68.6% → 70.3% | 0.2ms → 7.1ms |      2 → 14 | `writeInlineParameterNullCheckRequirement(MutableVersionRequirementTable, Function1)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension` |

##### `writeInlineParameterNullCheckRequirement(MutableVersionRequirementTable, Function1)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`)

|   Change |   Delta |             % |          Time | Contentions | Callee                                                                                                            | Location                                                            |
| -------: | ------: | ------------: | ------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| +8746.9% | +6.61ms | 33.6% → 94.6% | 0.1ms → 6.7ms |       1 → 9 | `writeVersionRequirement(int, int, int, ProtoBuf$VersionRequirement$VersionKind, MutableVersionRequirementTable)` | `org.jetbrains.kotlin.serialization.DescriptorSerializer$Companion` |
|      new | +0.03ms |   0.0% → 0.5% |  0ms → 33.4µs |       0 → 1 | `<clinit>()`                                                                                                      | `org.jetbrains.kotlin.serialization.DescriptorSerializer`           |

##### `writeVersionRequirement(int, int, int, ProtoBuf$VersionRequirement$VersionKind, MutableVersionRequirementTable)` (`org.jetbrains.kotlin.serialization.DescriptorSerializer$Companion`)

|   Change |   Delta |              % |          Time | Contentions | Callee                              | Location                                                    |
| -------: | ------: | -------------: | ------------: | ----------: | ----------------------------------- | ----------------------------------------------------------- |
|      new | +5.67ms |   0.0% → 84.8% |   0ms → 5.7ms |       0 → 3 | `get(GeneratedMessageLite$Builder)` | `org.jetbrains.kotlin.metadata.serialization.MutableTable`  |
| +1246.6% | +0.94ms | 100.0% → 15.2% | 0.1ms → 1.0ms |       1 → 6 | `newBuilder()`                      | `org.jetbrains.kotlin.metadata.ProtoBuf$VersionRequirement` |

##### `serializeContractOfFunctionIfAny(FirFunction, ProtoBuf$Function$Builder, FirElementSerializer)` (`org.jetbrains.kotlin.fir.serialization.FirContractSerializer`)

|  Change |   Delta |              % |          Time | Contentions | Callee                                  | Location                                                                                |
| ------: | ------: | -------------: | ------------: | ----------: | --------------------------------------- | --------------------------------------------------------------------------------------- |
| +292.1% | +1.89ms | 100.0% → 39.9% | 0.6ms → 2.5ms |           3 | `contractProto(FirContractDescription)` | `org.jetbrains.kotlin.fir.serialization.FirContractSerializer$ContractSerializerWorker` |

##### `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`)

|  Change |   Delta |             % |          Time | Contentions | Callee                                                                      | Location                                              |
| ------: | ------: | ------------: | ------------: | ----------: | --------------------------------------------------------------------------- | ----------------------------------------------------- |
| +159.4% | +3.48ms | 90.7% → 72.8% | 2.2ms → 5.7ms |      10 → 8 | `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier` |

##### `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`)

|  Change |   Delta |      % |          Time | Contentions | Callee                                       | Location                                              |
| ------: | ------: | -----: | ------------: | ----------: | -------------------------------------------- | ----------------------------------------------------- |
| +159.4% | +3.48ms | 100.0% | 2.2ms → 5.7ms |      10 → 8 | `<init>(SourceMapper, SMAP, SourcePosition)` | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier` |

##### `getLineAndColumnNumbers(int)` (`org.jetbrains.kotlin.ir.util.NaiveSourceBasedFileEntryImpl`)

|  Change |   Delta |      % |          Time | Contentions | Callee                         | Location                                      |
| ------: | ------: | -----: | ------------: | ----------: | ------------------------------ | --------------------------------------------- |
| +197.9% | +2.58ms | 100.0% | 1.3ms → 3.9ms |      10 → 5 | `getLineAndColumnNumbers(int)` | `org.jetbrains.kotlin.ir.AbstractIrFileEntry` |

##### `generateField(IrField)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |   Delta |            % |        Time | Contentions | Callee                               | Location                                                               |
| -----: | ------: | -----------: | ----------: | ----------: | ------------------------------------ | ---------------------------------------------------------------------- |
|    new | +1.57ms | 0.0% → 66.6% | 0ms → 1.6ms |       0 → 1 | `getDescriptorOrigin(IrDeclaration)` | `org.jetbrains.kotlin.backend.jvm.extensions.JvmIrDeclarationOriginKt` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|  Change |     Delta |             % |          Time | Contentions | Callee                                                  | Location                                          |
| ------: | --------: | ------------: | ------------: | ----------: | ------------------------------------------------------- | ------------------------------------------------- |
|  -38.8% | -752.85ms | 99.8% → 99.9% | 1.94s → 1.19s |   946 → 974 | `run()`                                                 | `java.util.concurrent.CompletableFuture$AsyncRun` |
| removed |   -3.64ms |   0.2% → 0.0% |   3.6ms → 0ms |       9 → 0 | `processWorkerExit(ThreadPoolExecutor$Worker, boolean)` | `java.util.concurrent.ThreadPoolExecutor`         |
| +545.4% |   +0.96ms |  <0.1% → 0.1% | 0.2ms → 1.1ms |       5 → 8 | `getTask()`                                             | `java.util.concurrent.ThreadPoolExecutor`         |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

| Change |     Delta |      % |          Time | Contentions | Callee                                 | Location                                  |
| -----: | --------: | -----: | ------------: | ----------: | -------------------------------------- | ----------------------------------------- |
| -38.8% | -755.53ms | 100.0% | 1.94s → 1.19s |   960 → 982 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |     Delta |      % |          Time | Contentions | Callee  | Location                                         |
| -----: | --------: | -----: | ------------: | ----------: | ------- | ------------------------------------------------ |
| -38.8% | -755.53ms | 100.0% | 1.94s → 1.19s |   960 → 982 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.lang.Thread`)

| Change |     Delta |      % |          Time | Contentions | Callee                      | Location           |
| -----: | --------: | -----: | ------------: | ----------: | --------------------------- | ------------------ |
| -38.8% | -755.53ms | 100.0% | 1.94s → 1.19s |   960 → 982 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |     Delta |             % |          Time | Contentions | Callee                                                   | Location                                               |
| -----: | --------: | ------------: | ------------: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
| -38.7% | -749.88ms | 99.7% → 99.8% | 1.94s → 1.19s |   915 → 942 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |
| -51.2% |   -2.97ms |   0.3% → 0.2% | 5.8ms → 2.8ms |     31 → 32 | `getUnitStats()`                                         | `org.jetbrains.kotlin.util.PerformanceManager`         |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`)

| Change |     Delta |      % |          Time | Contentions | Callee                                                                                                            | Location                                               |
| -----: | --------: | -----: | ------------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| -38.8% | -752.85ms | 100.0% | 1.94s → 1.19s |   946 → 974 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

| Change |     Delta |      % |          Time | Contentions | Callee  | Location                                                                          |
| -----: | --------: | -----: | ------------: | ----------: | ------- | --------------------------------------------------------------------------------- |
| -38.8% | -752.85ms | 100.0% | 1.94s → 1.19s |   946 → 974 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change |     Delta |             % |            Time | Contentions | Callee                                                                                                   | Location                                                          |
| -----: | --------: | ------------: | --------------: | ----------: | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| -39.5% | -730.53ms | 95.7% → 94.6% |   1.85s → 1.12s |   667 → 716 | `generate()`                                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`           |
| -23.9% |  -17.41ms |   3.8% → 4.7% | 72.9ms → 55.5ms |   228 → 206 | `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |     Delta |             % |            Time | Contentions | Callee                                                                   | Location                                                                   |
| ------: | --------: | ------------: | --------------: | ----------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
|  -41.9% | -735.29ms | 95.6% → 93.7% |   1.76s → 1.02s |   454 → 482 | `generateMethodNode(IrFunction)`                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                    |
|  -39.7% |  -13.32ms |   1.8% → 1.9% | 33.6ms → 20.3ms |     67 → 89 | `accept(MethodVisitor)`                                                  | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                          |
| +223.2% |   +5.37ms |   0.1% → 0.7% |   2.4ms → 7.8ms |      13 → 9 | `<init>(SourceMapper, SMAP, MethodVisitor)`                              | `org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`        |
|  -23.7% |   -4.66ms |   1.1% → 1.4% | 19.6ms → 15.0ms |     39 → 41 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.DelegatingClassBuilder`                      |
|  -87.5% |   -2.20ms |  0.1% → <0.1% |   2.5ms → 0.3ms |       6 → 1 | `trackFakeOverrideMethod(IrFunction)`                                    | `org.jetbrains.kotlin.backend.jvm.codegen.JvmMethodSignatureClashDetector` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |    Delta |             % |              Time | Contentions | Callee                                                                        | Location                                                   |
| -----: | -------: | ------------: | ----------------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| -25.5% | -70.82ms | 15.8% → 20.3% | 277.4ms → 206.6ms |   378 → 395 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |     Delta |             % |            Time | Contentions | Callee                                                  | Location                                                |
| ------: | --------: | ------------: | --------------: | ----------: | ------------------------------------------------------- | ------------------------------------------------------- |
|  -40.7% | -748.04ms | 99.2% → 97.1% |   1.84s → 1.09s |   615 → 667 | `generateMethod(IrFunction, SourceMapper)`              | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| +115.7% |  +16.10ms |   0.8% → 2.7% | 13.9ms → 30.0ms |     45 → 47 | `generateAnnotations()`                                 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
|     new |   +2.36ms |   0.0% → 0.2% |     0ms → 2.4ms |       0 → 2 | `generateField(IrField)`                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| removed |   -0.62ms |  <0.1% → 0.0% |     0.6ms → 0ms |       2 → 0 | `generateInnerAndOuterClasses()`                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| removed |   -0.33ms |  <0.1% → 0.0% |     0.3ms → 0ms |       5 → 0 | `shouldSkipCodeGenerationAccordingToGenerationFilter()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |    Delta |             % |              Time | Contentions | Callee                                    | Location                                                         |
| -----: | -------: | ------------: | ----------------: | ----------: | ----------------------------------------- | ---------------------------------------------------------------- |
| -33.7% | -65.15ms | 69.7% → 62.1% | 193.4ms → 128.2ms |   174 → 210 | `generate()`                              | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
| -21.8% |  -2.34ms |   3.9% → 4.1% |    10.7ms → 8.4ms |     41 → 32 | `calculateMethodFlags(IrFunction)`        | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |
| -20.5% |  -1.26ms |   2.2% → 2.4% |     6.1ms → 4.9ms |     14 → 10 | `createFrameMapWithReceivers(IrFunction)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |
| -16.3% |  -1.17ms |   2.6% → 2.9% |     7.2ms → 6.0ms |     33 → 25 | `mapSignatureWithGeneric(IrFunction)`     | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|    new |  +1.08ms |   0.0% → 0.5% |       0ms → 1.1ms |       0 → 1 | `<init>(List)`                            | `org.jetbrains.kotlin.codegen.inline.SMAP`                       |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Callee                                    | Location                                                   |
| -----: | -------: | -----: | ----------------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| -25.5% | -70.82ms | 100.0% | 277.4ms → 206.6ms |   378 → 395 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Callee                                  | Location                                                   |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| -25.5% | -70.82ms | 100.0% | 277.4ms → 206.6ms |   378 → 395 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|  Change |    Delta |             % |              Time | Contentions | Callee                            | Location                                                   |
| ------: | -------: | ------------: | ----------------: | ----------: | --------------------------------- | ---------------------------------------------------------- |
|  -34.7% | -65.11ms | 98.2% → 97.4% | 187.4ms → 122.3ms |   143 → 177 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrReturn`             |
| +392.1% |  +1.78ms |   0.2% → 1.8% |     0.5ms → 2.2ms |       5 → 4 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrWhen`               |
|  -88.6% |  -1.39ms |   0.8% → 0.1% |     1.6ms → 0.2ms |       6 → 4 | `getUnitValue(ExpressionCodegen)` | `org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt` |
| +633.2% |  +1.34ms |   0.1% → 1.2% |     0.2ms → 1.6ms |       3 → 2 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrCall`               |
|     new |  +0.51ms |   0.0% → 0.4% |       0ms → 0.5ms |       0 → 1 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.declarations.IrVariable`          |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Callee                                                     | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| -34.2% | -65.28ms | 100.0% | 190.8ms → 125.5ms |   157 → 186 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Callee                                   | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | ---------------------------------------- | ------------------------------------------------------------ |
| -34.2% | -65.28ms | 100.0% | 190.8ms → 125.5ms |   157 → 186 | `visitBlockBody(IrBlockBody, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

| Change |    Delta |      % |              Time | Contentions | Callee                                | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | ------------------------------------- | ------------------------------------------------------------ |
| -34.2% | -65.28ms | 100.0% | 190.8ms → 125.5ms |   157 → 186 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|  Change |    Delta |             % |             Time | Contentions | Callee                      | Location                                                 |
| ------: | -------: | ------------: | ---------------: | ----------: | --------------------------- | -------------------------------------------------------- |
|  -39.8% | -62.48ms | 83.7% → 77.3% | 157.0ms → 94.5ms |    86 → 108 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrWhen`             |
|   -9.7% |  -2.73ms | 15.0% → 20.7% |  28.1ms → 25.3ms |     53 → 62 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrCall`             |
| removed |  -0.15ms |   0.1% → 0.0% |      0.2ms → 0ms |       1 → 0 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrConst`            |
|   -6.4% |  -0.14ms |   1.2% → 1.7% |    2.2ms → 2.1ms |       3 → 4 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall` |
|     new |  +0.14ms |   0.0% → 0.1% |      0ms → 0.1ms |       0 → 2 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrTry`              |

##### `visitReturn(IrReturn, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |              Time | Contentions | Callee                             | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | ---------------------------------- | ------------------------------------------------------------ |
| -34.8% | -65.26ms | 100.0% | 187.5ms → 122.3ms |   144 → 177 | `visitReturn(IrReturn, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`)

| Change |    Delta |      % |              Time | Contentions | Callee                          | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------: | ------------------------------- | ------------------------------------------------------------ |
| -34.8% | -65.26ms | 100.0% | 187.5ms → 122.3ms |   144 → 177 | `visitReturn(IrReturn, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|  Change |    Delta |             % |              Time | Contentions | Callee                                             | Location                                                     |
| ------: | -------: | ------------: | ----------------: | ----------: | -------------------------------------------------- | ------------------------------------------------------------ |
|  -34.2% | -65.28ms | 98.7% → 97.9% | 190.8ms → 125.5ms |   157 → 186 | `accept(IrVisitor, Object)`                        | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`            |
| +202.5% |  +0.86ms |   0.2% → 1.0% |     0.4ms → 1.3ms |      1 → 11 | `generateNonNullAssertions()`                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  +53.8% |  +0.22ms |   0.2% → 0.5% |     0.4ms → 0.6ms |           5 | `markNewLabel()`                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|     new |  +0.14ms |   0.0% → 0.1% |       0ms → 0.1ms |       0 → 1 | `writeParameterInLocalVariableTable(Label, Label)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|  Change |    Delta |             % |             Time | Contentions | Callee                           | Location                                                   |
| ------: | -------: | ------------: | ---------------: | ----------: | -------------------------------- | ---------------------------------------------------------- |
|  -37.2% | -52.62ms | 89.8% → 91.7% | 141.4ms → 88.7ms |     75 → 86 | `accept(IrVisitor, Object)`      | `org.jetbrains.kotlin.ir.expressions.IrCall`               |
|  -76.8% | -10.70ms |   8.9% → 3.3% |   13.9ms → 3.2ms |      8 → 11 | `generate()`                     | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator` |
| +858.1% |  +1.82ms |   0.1% → 2.1% |    0.2ms → 2.0ms |           3 | `accept(IrVisitor, Object)`      | `org.jetbrains.kotlin.ir.expressions.IrBlock`              |
|  -77.7% |  -0.92ms |   0.7% → 0.3% |    1.2ms → 0.3ms |           1 | `accept(IrVisitor, Object)`      | `org.jetbrains.kotlin.ir.expressions.IrConst`              |
|     new |  +0.86ms |   0.0% → 0.9% |      0ms → 0.9ms |       0 → 4 | `coerceToBoolean(PromisedValue)` | `org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt` |

##### `visitWhen(IrWhen, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change |    Delta |      % |             Time | Contentions | Callee                         | Location                                                     |
| -----: | -------: | -----: | ---------------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| -38.6% | -60.71ms | 100.0% | 157.5ms → 96.8ms |    91 → 112 | `visitWhen(IrWhen, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`)

| Change |    Delta |      % |             Time | Contentions | Callee                      | Location                                                     |
| -----: | -------: | -----: | ---------------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| -38.6% | -60.71ms | 100.0% | 157.5ms → 96.8ms |    91 → 112 | `visitWhen(IrWhen, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time blocked in their leaf frame.

Common call stack: `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`

|   Change |   Delta |            % |          Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------: | ------: | -----------: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      new | +5.67ms |  0.0% → 0.5% |   0ms → 5.7ms |       0 → 3 | `get(GeneratedMessageLite$Builder)` (`org.jetbrains.kotlin.metadata.serialization.MutableTable`) ← `writeVersionRequirement(int, int, int, ProtoBuf$VersionRequirement$VersionKind, MutableVersionRequirementTable)` (`org.jetbrains.kotlin.serialization.DescriptorSerializer$Companion`) ← `writeInlineParameterNullCheckRequirement(MutableVersionRequirementTable, Function1)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`) ← `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` ← `functionProto(FirFunction)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000098018ff410`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|      new | +3.81ms |  0.0% → 0.3% |   0ms → 3.8ms |       0 → 2 | `serializeContractOfFunctionIfAny(FirFunction, ProtoBuf$Function$Builder, FirElementSerializer)` (`org.jetbrains.kotlin.fir.serialization.FirContractSerializer`) ← `functionProto(FirFunction)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000098018ff410`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +159.4% | +3.48ms |  0.1% → 0.5% | 2.2ms → 5.7ms |      10 → 8 | `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`) ← `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` ← `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +2793.9% | +2.88ms | <0.1% → 0.3% | 0.1ms → 3.0ms |       1 → 4 | `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`) ← `functionProto(FirFunction)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000098018ff410`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  +197.9% | +2.58ms |  0.1% → 0.3% | 1.3ms → 3.9ms |      10 → 5 | `getLineAndColumnNumbers(int)` (`org.jetbrains.kotlin.ir.AbstractIrFileEntry`) ← `getLineAndColumnNumbers(int)` (`org.jetbrains.kotlin.ir.util.NaiveSourceBasedFileEntryImpl`) ← `getSourceRangeInfo(int, int)` (`org.jetbrains.kotlin.ir.AbstractIrFileEntry`) ← `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|      new | +2.33ms |  0.0% → 0.2% |   0ms → 2.3ms |       0 → 2 | `fillEffectProto(ProtoBuf$Effect$Builder, KtEffectDeclaration, FirContractDescription)` (`org.jetbrains.kotlin.fir.serialization.FirContractSerializer$ContractSerializerWorker`) ← `effectProto(KtEffectDeclaration, FirContractDescription)` ← `contractProto(FirContractDescription)` ← `serializeContractOfFunctionIfAny(FirFunction, ProtoBuf$Function$Builder, FirElementSerializer)` (`org.jetbrains.kotlin.fir.serialization.FirContractSerializer`) ← `functionProto(FirFunction)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000098018ff410`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  +180.1% | +2.17ms |  0.1% → 0.3% | 1.2ms → 3.4ms |       1 → 2 | `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000098018ff410`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  +845.7% | +1.89ms | <0.1% → 0.2% | 0.2ms → 2.1ms |       3 → 1 | `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| +2552.9% | +1.88ms | <0.1% → 0.2% | 0.1ms → 1.9ms |           1 | `<init>(GenerationState, NameGenerator, SourceCompilerForInline, InlineCallSiteInfo, ReifiedTypeInliner, TypeParameterMappings, InlineScopesGenerator, KotlinTypeMapperBase)` (`org.jetbrains.kotlin.codegen.inline.RootInliningContext`) ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()`                                                                                                                                                                                                                                                                                                                                                   |
| +1202.3% | +1.84ms | <0.1% → 0.2% | 0.2ms → 2.0ms |           1 | `removeClosureAssertions(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner$Companion`) ← `access$removeClosureAssertions(MethodInliner$Companion, MethodNode)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()`                                                                                                                                                                                                                            |
| +3230.4% | +1.71ms | <0.1% → 0.1% | 0.1ms → 1.8ms |       1 → 2 | `visitMethodInsn(int, String, String, String, boolean)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner$doInline$lambdaInliner$1`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodInsnNode`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.InsnList`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()`                                                                                                                                                                                                         |
|      new | +1.64ms |  0.0% → 0.1% |   0ms → 1.6ms |       0 → 1 | `toAnnotationValue(SessionAndScopeSessionHolder, FirAnnotation, Map)` (`org.jetbrains.kotlin.fir.serialization.constant.FirToConstantValueTransformerKt`) ← `evaluateToAnnotationValue(SessionAndScopeSessionHolder, FirAnnotation)` ← `access$evaluateToAnnotationValue(SessionAndScopeSessionHolder, FirAnnotation)` ← `serializeAnnotation(FirAnnotation)` (`org.jetbrains.kotlin.fir.serialization.FirAnnotationSerializer`) ← `serializeAnnotations(FirAnnotationContainer, Function1, Function1)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`) ← `serializeAnnotations$default(FirJvmSerializerExtension, FirAnnotationContainer, Function1, Function1, int, Object)` ← `serializeProperty(FirProperty, ProtoBuf$Property$Builder, MutableVersionRequirementTable, FirElementSerializer)` ← `propertyProto(FirProperty)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `classProtoImpl(FirClass)` ← `classProto(FirClass, FirFile)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000098018ff410`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|      new | +1.57ms |  0.0% → 0.1% |   0ms → 1.6ms |       0 → 1 | `toIrBasedDescriptor(IrField)` (`org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt`) ← `toIrBasedDescriptor(IrDeclaration)` ← `<init>(JvmDeclarationOriginKind, PsiElement, IrDeclaration)` (`org.jetbrains.kotlin.backend.jvm.extensions.JvmIrDeclarationOrigin`) ← `getDescriptorOrigin(IrDeclaration)` (`org.jetbrains.kotlin.backend.jvm.extensions.JvmIrDeclarationOriginKt`) ← `generateField(IrField)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|      new | +1.50ms |  0.0% → 0.1% |   0ms → 1.5ms |       0 → 3 | `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  +100.2% | +1.50ms |  0.1% → 0.3% | 1.5ms → 3.0ms |       3 → 7 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +231.5% | +1.47ms | <0.1% → 0.2% | 0.6ms → 2.1ms |       1 → 2 | `getMethodNode(byte[], Type, Method)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`) ← `getMethodNode(Type, byte[], Method, boolean)` (`org.jetbrains.kotlin.codegen.inline.SourceCompilerForInlineKt`) ← `getMethodNode(Type, byte[], Method, boolean, boolean, boolean)` ← `loadCompiledInlineFunction$lambda$0(GenerationState, Type, Method, boolean, boolean, boolean, ClassId)` ← `invoke()` (`org.jetbrains.kotlin.codegen.inline.SourceCompilerForInlineKt$$Lambda`) ← `computeMethodBytes(MethodId, Function0)` (`org.jetbrains.kotlin.codegen.inline.InlineCache`) ← `loadCompiledInlineFunction(ClassId, Method, boolean, boolean, boolean, GenerationState)` (`org.jetbrains.kotlin.codegen.inline.SourceCompilerForInlineKt`) ← `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` |
|      new | +1.41ms |  0.0% → 0.1% |   0ms → 1.4ms |       0 → 1 | `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|      new | +1.34ms |  0.0% → 0.1% |   0ms → 1.3ms |       0 → 1 | `newBuilder()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`) ← `typeArgument(ConeTypeProjection, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `fillFromPossiblyInnerType(ProtoBuf$Type$Builder, FirClassLikeSymbol, ConeTypeProjection[], int, boolean)` ← `fillFromPossiblyInnerType(ProtoBuf$Type$Builder, ConeClassLikeType, boolean)` ← `typeOrTypealiasProto(ConeKotlinType, boolean, FirTypeRef, boolean, boolean, boolean)` ← `typeOrTypealiasProto$default(FirElementSerializer, ConeKotlinType, boolean, FirTypeRef, boolean, boolean, boolean, int, Object)` ← `typeProto(ConeKotlinType, boolean, FirTypeRef, boolean, boolean)` ← `typeProto$default(FirElementSerializer, ConeKotlinType, boolean, FirTypeRef, boolean, boolean, int, Object)` ← `typeProto(FirTypeRef, boolean)` ← `functionProto(FirFunction)` ← `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000098018ff410`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|      new | +1.21ms |  0.0% → 0.1% |   0ms → 1.2ms |       0 → 1 | `getValue(Object, KProperty)` (`org.jetbrains.kotlin.fir.backend.MappedLazyVar`) ← `getOverriddenSymbols()` (`org.jetbrains.kotlin.fir.lazy.Fir2IrLazySimpleFunction`) ← `allOverridden(IrOverridableDeclaration, boolean)` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`) ← `allOverridden$default(IrOverridableDeclaration, boolean, int, Object)` ← `visitCall$returnTypeMayBeInferred(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitContainerExpression(IrContainerExpression, BlockInfo)` ← `visitContainerExpression(IrContainerExpression, Object)` ← `visitBlock(IrBlock, Object)` (`org.jetbrains.kotlin.ir.visitors.IrVisitor`) ← `visitBlock(IrBlock, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlock(IrBlock, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlock`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()`                                                                                                                                                                                                                                                  |
|  +422.1% | +1.20ms | <0.1% → 0.1% | 0.3ms → 1.5ms |       2 → 3 | `createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion`) ← `createTopLevel$default(FirElementSerializer$Companion, FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean, int, Object)` ← `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x0000009801893018`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

### Improvements

Call stacks with the largest decrease in time blocked in their leaf frame.

Common call stack: `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`

|  Change |     Delta |             % |            Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------: | --------: | ------------: | --------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  -45.0% | -664.47ms | 76.0% → 68.4% | 1.48s → 813.1ms |     76 → 87 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -37.7% |  -35.53ms |   4.8% → 4.9% | 94.1ms → 58.6ms |           2 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                              |
|  -76.8% |  -10.71ms |   0.7% → 0.3% |  13.9ms → 3.2ms |      8 → 10 | `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -38.1% |   -7.96ms |          1.1% | 20.9ms → 12.9ms |     22 → 24 | `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |   -6.27ms |   0.3% → 0.0% |     6.3ms → 0ms |       1 → 0 | `desiredAssertionStatus()` (`java.lang.Class`) ← `<clinit>()` (`org.jetbrains.kotlin.codegen.inline.RemapVisitor`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d8018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) |
|  -71.7% |   -5.78ms |   0.4% → 0.2% |   8.1ms → 2.3ms |       4 → 3 | `preprocessNodeBeforeInline(MethodNode, Map)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)      |
|  -54.7% |   -5.54ms |   0.5% → 0.4% |  10.1ms → 4.6ms |     15 → 11 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -24.7% |   -3.68ms |   0.8% → 0.9% | 14.9ms → 11.2ms |     50 → 43 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -68.2% |   -3.13ms |   0.2% → 0.1% |   4.6ms → 1.5ms |           3 | `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.RedundantCheckCastEliminationMethodTransformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |   -2.98ms |   0.2% → 0.0% |     3.0ms → 0ms |       8 → 0 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park(Object)` (`java.util.concurrent.locks.LockSupport`) ← `acquire(AbstractQueuedSynchronizer$Node, int, boolean, boolean, boolean, long)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer`) ← `acquire(int)` ← `lock()` (`java.util.concurrent.locks.ReentrantLock$Sync`) ← `lock()` (`java.util.concurrent.locks.ReentrantLock`) ← `processWorkerExit(ThreadPoolExecutor$Worker, boolean)` (`java.util.concurrent.ThreadPoolExecutor`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -61.5% |   -2.89ms |          0.2% |   4.7ms → 1.8ms |       8 → 9 | `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                             |
|  -43.7% |   -2.84ms |          0.3% |   6.5ms → 3.7ms |     21 → 13 | `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -70.9% |   -2.74ms |   0.2% → 0.1% |   3.9ms → 1.1ms |      9 → 10 | `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -57.8% |   -2.62ms |          0.2% |   4.5ms → 1.9ms |       7 → 9 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -68.2% |   -2.49ms |   0.2% → 0.1% |   3.7ms → 1.2ms |       5 → 3 | `parseMethodOrNull(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InplaceArgumentsMethodTransformer`) ← `transform(String, MethodNode)` ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  -53.8% |   -2.45ms |          0.2% |   4.5ms → 2.1ms |     17 → 16 | `unitStats_delegate$lambda$0(PerformanceManager)` (`org.jetbrains.kotlin.util.PerformanceManager`) ← `invoke()` (`org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000980112e468`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getUnitStats()` (`org.jetbrains.kotlin.util.PerformanceManager`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -86.4% |   -2.44ms |  0.1% → <0.1% |   2.8ms → 0.4ms |           4 | `transform()` (`org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer$Transformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -52.2% |   -2.39ms |          0.2% |   4.6ms → 2.2ms |       8 → 7 | `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                        |
|  -20.8% |   -2.31ms |   0.6% → 0.7% |  11.1ms → 8.8ms |          22 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -91.8% |   -2.24ms |  0.1% → <0.1% |   2.4ms → 0.2ms |           2 | `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

# Lock contention profile

Blocked 1.94s over 960 contentions (2.0ms per contention).

| Category         |     % |   Time | Contentions |
| ---------------- | ----: | -----: | ----------: |
| Ours             | 99.4% |  1.93s |         933 |
| Standard library |  0.6% | 10.9ms |          27 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 1.94s (99.8%) invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List) at org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory
    ├── 1.93s (99.5%, self 0.6%) generateFile(JvmBackendContext, IrFile, List, boolean)
    │   ├── 1.85s (95.2%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
    │   │   ├── 1.83s (94.4%) generateMethod(IrFunction, SourceMapper)
    │   │   │   ├── 1.75s (90.2%, self 80.8%) generateMethodNode(IrFunction)
    │   │   │   │   └── … 183.3ms (9.4%, self 2.3%) doGenerate(ReifiedTypeParametersUsages) at org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen
    │   │   │   │       ├── … 91.3ms (4.7%) visitReturn(IrReturn, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │   │       │   ├── … 62.9ms (3.2%) visitWhen(IrWhen, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │   │       │   │   ├── … 47.1ms (2.4%) visitCall(IrCall, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │   │       │   │   │   ├── … 21.5ms (1.1%) doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int) at org.jetbrains.kotlin.codegen.inline.MethodInliner
    │   │   │   │       │   │   │   │   ├── 9.3ms (0.5%) markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)
    │   │   │   │       │   │   │   │   │   └── 8.5ms (0.4%) preprocessNodeBeforeInline(MethodNode, Map)
    │   │   │   │       │   │   │   │   └── 6.3ms (0.3%) <clinit>() at org.jetbrains.kotlin.codegen.inline.RemapVisitor
    │   │   │   │       │   │   │   │       └── 6.3ms (0.3%) desiredAssertionStatus() at java.lang.Class
    │   │   │   │       │   │   │   ├── 15.0ms (0.8%, self 0.5%) getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)
    │   │   │   │       │   │   │   └── 4.7ms (0.2%) visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)
    │   │   │   │       │   │   │       └── 4.7ms (0.2%) genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen
    │   │   │   │       │   │   └── 13.9ms (0.7%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator
    │   │   │   │       │   └── … 18.9ms (1.0%) genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen
    │   │   │   │       │       └── … 14.6ms (0.8%) doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int) at org.jetbrains.kotlin.codegen.inline.MethodInliner
    │   │   │   │       │           └── 5.4ms (0.3%) doInline(MethodNode)
    │   │   │   │       ├── … 4.3ms (0.2%) <init>() at org.jetbrains.kotlin.codegen.FrameMapBase
    │   │   │   │       └── 32.4ms (1.7%) 12 more callees, led by (0.6%) calculateMethodFlags(IrFunction)
    │   │   │   ├── … 29.6ms (1.5%) transform(String, MethodNode) at org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer
    │   │   │   │   ├── 6.9ms (0.4%) transform(String, MethodNode) at org.jetbrains.kotlin.codegen.optimization.RedundantCheckCastEliminationMethodTransformer
    │   │   │   │   └── 22.7ms (1.2%) 9 more callees, led by (0.4%) transform(String, MethodNode) at org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer
    │   │   │   ├── 19.6ms (1.0%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.DelegatingClassBuilder
    │   │   │   │   ├── 14.5ms (0.7%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder
    │   │   │   │   │   └── 12.7ms (0.7%, self 0.6%) <init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor
    │   │   │   │   └── … 5.1ms (0.3%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.AbstractClassBuilder
    │   │   │   │       └── 5.1ms (0.3%) visitMethod(int, String, String, String, String[]) at org.jetbrains.org.objectweb.asm.ClassWriter
    │   │   │   └── … 18.5ms (1.0%) makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set) at org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt
    │   │   │       └── 5.9ms (0.3%) makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)
    │   │   └── 14.9ms (0.8%) 3 more callees, led by (0.7%) generateAnnotations()
    │   └── … 72.9ms (3.8%, self 0.8%) <init>(IrClass, JvmBackendContext, IrFunction, List) at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
    │       ├── … 30.4ms (1.6%, self 1.1%) newClassBuilder(JvmDeclarationOrigin) at org.jetbrains.kotlin.codegen.ClassBuilderFactories$1
    │       │   └── … 9.5ms (0.5%) <init>(ClassReader, int) at org.jetbrains.org.objectweb.asm.ClassWriter
    │       ├── 11.3ms (0.6%) getSourceMapper(JvmBackendContext, IrClass) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
    │       └── 6.0ms (0.3%) mapClassSignature(IrTypeMapper, IrClass, Type, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
    └── … 5.8ms (0.3%) unitStats_delegate$lambda$0(PerformanceManager) at org.jetbrains.kotlin.util.PerformanceManager
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

|     % |   Time | Contentions | Function                                                                                                                                                            | Location                                                                                   |
| ----: | -----: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 80.8% |  1.57s |          78 | `generateMethodNode(IrFunction)`                                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                    |
|  2.3% | 45.5ms |          57 | `doGenerate(ReifiedTypeParametersUsages)`                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                 |
|  1.1% | 20.9ms |          22 | `newClassBuilder(JvmDeclarationOrigin)`                                                                                                                             | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`                                     |
|  0.8% | 14.9ms |          50 | `<init>(IrClass, JvmBackendContext, IrFunction, List)`                                                                                                              | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                    |
|  0.7% | 13.9ms |           8 | `generate()`                                                                                                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`                                 |
|  0.6% | 11.6ms |          18 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                                                                               | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                               |
|  0.6% | 11.1ms |          22 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])`                                                                            | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`                      |
|  0.6% | 10.8ms |          20 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                                            | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                                     |
|  0.5% |  9.3ms |          16 | `doInline(MethodNode)`                                                                                                                                              | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                        |
|  0.5% |  9.0ms |          11 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)`                  | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`                             |
|  0.4% |  8.2ms |          19 | `<init>(ClassReader, int)`                                                                                                                                          | `org.jetbrains.org.objectweb.asm.ClassWriter`                                              |
|  0.4% |  8.1ms |           4 | `preprocessNodeBeforeInline(MethodNode, Map)`                                                                                                                       | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                        |
|  0.3% |  6.5ms |          10 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                                 |
|  0.3% |  6.5ms |          21 | `getSourceMapper(JvmBackendContext, IrClass)`                                                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                                |
|  0.3% |  6.4ms |           4 | `desiredAssertionStatus()`                                                                                                                                          | `java.lang.Class`                                                                          |
|  0.2% |  4.8ms |           4 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`                             |
|  0.2% |  4.6ms |           3 | `transform(String, MethodNode)`                                                                                                                                     | `org.jetbrains.kotlin.codegen.optimization.RedundantCheckCastEliminationMethodTransformer` |
|  0.2% |  4.5ms |          17 | `unitStats_delegate$lambda$0(PerformanceManager)`                                                                                                                   | `org.jetbrains.kotlin.util.PerformanceManager`                                             |
|  0.2% |  4.4ms |           4 | `visitMethod(int, String, String, String, String[])`                                                                                                                | `org.jetbrains.org.objectweb.asm.ClassWriter`                                              |
|  0.2% |  4.3ms |           9 | `<init>()`                                                                                                                                                          | `org.jetbrains.kotlin.codegen.FrameMapBase`                                                |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |   Time | Contentions | Function                                                                                                                                                            | Location                                                                                   |
| ----: | -----: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 80.8% |  1.57s |          78 | `generateMethodNode(IrFunction)`                                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                    |
|  2.3% | 45.5ms |          57 | `doGenerate(ReifiedTypeParametersUsages)`                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                 |
|  1.1% | 20.9ms |          22 | `newClassBuilder(JvmDeclarationOrigin)`                                                                                                                             | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`                                     |
|  0.8% | 14.9ms |          50 | `<init>(IrClass, JvmBackendContext, IrFunction, List)`                                                                                                              | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                    |
|  0.7% | 13.9ms |           8 | `generate()`                                                                                                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`                                 |
|  0.6% | 11.6ms |          18 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                                                                               | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                               |
|  0.6% | 11.1ms |          22 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])`                                                                            | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`                      |
|  0.6% | 10.8ms |          20 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                                            | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                                     |
|  0.5% |  9.3ms |          16 | `doInline(MethodNode)`                                                                                                                                              | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                        |
|  0.5% |  9.0ms |          11 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)`                  | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`                             |
|  0.4% |  8.2ms |          19 | `<init>(ClassReader, int)`                                                                                                                                          | `org.jetbrains.org.objectweb.asm.ClassWriter`                                              |
|  0.4% |  8.1ms |           4 | `preprocessNodeBeforeInline(MethodNode, Map)`                                                                                                                       | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                        |
|  0.3% |  6.5ms |          10 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                                 |
|  0.3% |  6.5ms |          21 | `getSourceMapper(JvmBackendContext, IrClass)`                                                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                                |
|  0.2% |  4.8ms |           4 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`                             |
|  0.2% |  4.6ms |           3 | `transform(String, MethodNode)`                                                                                                                                     | `org.jetbrains.kotlin.codegen.optimization.RedundantCheckCastEliminationMethodTransformer` |
|  0.2% |  4.5ms |          17 | `unitStats_delegate$lambda$0(PerformanceManager)`                                                                                                                   | `org.jetbrains.kotlin.util.PerformanceManager`                                             |
|  0.2% |  4.4ms |           4 | `visitMethod(int, String, String, String, String[])`                                                                                                                | `org.jetbrains.org.objectweb.asm.ClassWriter`                                              |
|  0.2% |  4.3ms |           9 | `<init>()`                                                                                                                                                          | `org.jetbrains.kotlin.codegen.FrameMapBase`                                                |
|  0.2% |  3.9ms |           9 | `newVisitor(JvmDeclarationOrigin, Type, List)`                                                                                                                      | `org.jetbrains.kotlin.codegen.ClassFileFactory`                                            |

#### Lines

Lines with the largest contribution to each function's self time.

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |  Time | Contentions | Location                                                    |
| ----: | ----: | ----------: | ----------------------------------------------------------- |
| 99.7% | 1.56s |          63 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:427` |
|  0.2% | 3.5ms |           6 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:416` |
|  0.1% | 1.5ms |           8 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:422` |
| <0.1% | 0.3ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:428` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|     % |   Time | Contentions | Location                                                       |
| ----: | -----: | ----------: | -------------------------------------------------------------- |
| 50.5% | 23.0ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:68`  |
| 23.4% | 10.6ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:134` |
| 11.1% |  5.1ms |          10 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:76`  |
|  6.7% |  3.1ms |          10 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:133` |
|  6.0% |  2.7ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:84`  |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

|      % |   Time | Contentions | Location                                                  |
| -----: | -----: | ----------: | --------------------------------------------------------- |
| 100.0% | 20.9ms |          22 | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1:70` |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |  Time | Contentions | Location                                                    |
| ----: | ----: | ----------: | ----------------------------------------------------------- |
| 27.5% | 4.1ms |           9 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:78`  |
| 20.9% | 3.1ms |           6 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:107` |
| 18.3% | 2.7ms |           5 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:84`  |
| 10.2% | 1.5ms |          13 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:109` |
|  9.2% | 1.4ms |           8 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:110` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`)

|     % |  Time | Contentions | Location                                                       |
| ----: | ----: | ----------: | -------------------------------------------------------------- |
| 42.0% | 5.9ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:490` |
| 38.1% | 5.3ms |           4 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:35`  |
| 19.9% | 2.8ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:37`  |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |  Time | Contentions | Location                                                          |
| ----: | ----: | ----------: | ----------------------------------------------------------------- |
| 29.6% | 3.4ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1572` |
| 23.1% | 2.7ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1569` |
| 22.3% | 2.6ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1568` |
| 11.9% | 1.4ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1581` |
|  8.5% | 1.0ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1551` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|     % |  Time | Contentions | Location                                                                 |
| ----: | ----: | ----------: | ------------------------------------------------------------------------ |
| 18.3% | 2.0ms |           3 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:55` |
| 17.4% | 1.9ms |           2 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:46` |
| 16.1% | 1.8ms |           1 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:57` |
| 13.8% | 1.5ms |           2 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:59` |
| 10.2% | 1.1ms |           4 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:63` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |   Time | Contentions | Location                                                   |
| ----: | -----: | ----------: | ---------------------------------------------------------- |
| 96.0% | 10.4ms |          18 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory:465` |
|  4.0% |  0.4ms |           2 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory:459` |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|     % |  Time | Contentions | Location                                                |
| ----: | ----: | ----------: | ------------------------------------------------------- |
| 27.8% | 2.6ms |           4 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:159` |
| 25.5% | 2.4ms |           9 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:154` |
| 23.3% | 2.2ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:156` |
| 21.8% | 2.0ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:153` |
|  1.6% | 0.2ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:433` |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|     % |  Time | Contentions | Location                                                          |
| ----: | ----: | ----------: | ----------------------------------------------------------------- |
| 45.5% | 4.1ms |           2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:50` |
| 25.4% | 2.3ms |           3 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:61` |
| 22.7% | 2.0ms |           4 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:54` |
|  6.4% | 0.6ms |           2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:63` |

##### `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Location                                          |
| -----: | ----: | ----------: | ------------------------------------------------- |
| 100.0% | 8.2ms |          19 | `org.jetbrains.org.objectweb.asm.ClassWriter:266` |

##### `preprocessNodeBeforeInline(MethodNode, Map)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|     % |  Time | Contentions | Location                                                |
| ----: | ----: | ----------: | ------------------------------------------------------- |
| 49.1% | 4.0ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:801` |
| 34.0% | 2.7ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:793` |
| 16.9% | 1.4ms |           2 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:798` |

##### `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

|     % |  Time | Contentions | Location                                                       |
| ----: | ----: | ----------: | -------------------------------------------------------------- |
| 52.1% | 3.4ms |           6 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:178` |
| 35.1% | 2.3ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:192` |
| 12.8% | 0.8ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:118` |

##### `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|     % |  Time | Contentions | Location                                                       |
| ----: | ----: | ----------: | -------------------------------------------------------------- |
| 45.9% | 3.0ms |           6 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:90` |
| 29.8% | 1.9ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:76` |
| 24.2% | 1.6ms |           4 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:89` |

##### `desiredAssertionStatus()` (`java.lang.Class`)

|      % |  Time | Contentions | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 6.4ms |           4 | `java.lang.Class:3906` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|     % |  Time | Contentions | Location                                                           |
| ----: | ----: | ----------: | ------------------------------------------------------------------ |
| 50.1% | 2.4ms |           2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:190` |
| 49.9% | 2.4ms |           2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:198` |

##### `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.RedundantCheckCastEliminationMethodTransformer`)

|     % |  Time | Contentions | Location                                                                                      |
| ----: | ----: | ----------: | --------------------------------------------------------------------------------------------- |
| 73.0% | 3.3ms |           1 | `org.jetbrains.kotlin.codegen.optimization.RedundantCheckCastEliminationMethodTransformer:58` |
| 27.0% | 1.2ms |           2 | `org.jetbrains.kotlin.codegen.optimization.RedundantCheckCastEliminationMethodTransformer:41` |

##### `unitStats_delegate$lambda$0(PerformanceManager)` (`org.jetbrains.kotlin.util.PerformanceManager`)

|     % |  Time | Contentions | Location                                           |
| ----: | ----: | ----------: | -------------------------------------------------- |
| 54.2% | 2.5ms |           9 | `org.jetbrains.kotlin.util.PerformanceManager:123` |
| 45.8% | 2.1ms |           8 | `org.jetbrains.kotlin.util.PerformanceManager:101` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Location                                          |
| -----: | ----: | ----------: | ------------------------------------------------- |
| 100.0% | 4.4ms |           4 | `org.jetbrains.org.objectweb.asm.ClassWriter:469` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`)

|      % |  Time | Contentions | Location                                       |
| -----: | ----: | ----------: | ---------------------------------------------- |
| 100.0% | 4.3ms |           9 | `org.jetbrains.kotlin.codegen.FrameMapBase:26` |

##### `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`)

|      % |  Time | Contentions | Location                                           |
| -----: | ----: | ----------: | -------------------------------------------------- |
| 100.0% | 3.9ms |           9 | `org.jetbrains.kotlin.codegen.ClassFileFactory:47` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |   Time | Contentions | Caller                                      | Location                                                             |
| ----: | -----: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| 94.0% |  1.47s |          76 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
|  6.0% | 94.1ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |   Time | Contentions | Caller                                  | Location                                                   |
| -----: | -----: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 45.5ms |          57 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

|      % |   Time | Contentions | Caller                                  | Location                                                                    |
| -----: | -----: | ----------: | --------------------------------------- | --------------------------------------------------------------------------- |
| 100.0% | 20.9ms |          22 | `newClassBuilder(JvmDeclarationOrigin)` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory` |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |   Time | Contentions | Caller                                                                           | Location                                                |
| -----: | -----: | ----------: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 14.9ms |          50 | `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`)

|      % |   Time | Contentions | Caller                         | Location                                                     |
| -----: | -----: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% | 13.9ms |           8 | `visitWhen(IrWhen, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |   Time | Contentions | Caller                         | Location                                                     |
| -----: | -----: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% | 11.6ms |          18 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|      % |   Time | Contentions | Caller                                                                   | Location                                                             |
| -----: | -----: | ----------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| 100.0% | 11.1ms |          22 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |   Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | -----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 10.8ms |          20 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|      % |  Time | Contentions | Caller                                                         | Location                                            |
| -----: | ----: | ----------: | -------------------------------------------------------------- | --------------------------------------------------- |
| 100.0% | 9.3ms |          16 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|      % |  Time | Contentions | Caller                                                                                             | Location                                                      |
| -----: | ----: | ----------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% | 9.0ms |          11 | `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension` |

##### `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Caller        | Location                                      |
| -----: | ----: | ----------: | ------------- | --------------------------------------------- |
| 100.0% | 8.2ms |          19 | `<init>(int)` | `org.jetbrains.org.objectweb.asm.ClassWriter` |

##### `preprocessNodeBeforeInline(MethodNode, Map)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|      % |  Time | Contentions | Caller                                                        | Location                                            |
| -----: | ----: | ----------: | ------------------------------------------------------------- | --------------------------------------------------- |
| 100.0% | 8.1ms |           4 | `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

|      % |  Time | Contentions | Caller                                                                                                           | Location                                                     |
| -----: | ----: | ----------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 6.5ms |          10 | `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|      % |  Time | Contentions | Caller                                                 | Location                                                |
| -----: | ----: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 6.5ms |          21 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `desiredAssertionStatus()` (`java.lang.Class`)

|     % |   Time | Contentions | Caller       | Location                                                          |
| ----: | -----: | ----------: | ------------ | ----------------------------------------------------------------- |
| 97.4% |  6.3ms |           1 | `<clinit>()` | `org.jetbrains.kotlin.codegen.inline.RemapVisitor`                |
|  2.2% |  0.1ms |           1 | `<clinit>()` | `org.jetbrains.kotlin.codegen.StackValue`                         |
|  0.3% | 17.5µs |           1 | `<clinit>()` | `org.jetbrains.kotlin.types.TypeUtils`                            |
|  0.2% |  9.7µs |           1 | `<clinit>()` | `org.jetbrains.kotlin.codegen.inline.InternalFinallyBlockInliner` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|      % |  Time | Contentions | Caller                                                                                                                                             | Location                                                       |
| -----: | ----: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 100.0% | 4.8ms |           4 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt` |

##### `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.RedundantCheckCastEliminationMethodTransformer`)

|      % |  Time | Contentions | Caller                          | Location                                                                           |
| -----: | ----: | ----------: | ------------------------------- | ---------------------------------------------------------------------------------- |
| 100.0% | 4.6ms |           3 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer` |

##### `unitStats_delegate$lambda$0(PerformanceManager)` (`org.jetbrains.kotlin.util.PerformanceManager`)

|      % |  Time | Contentions | Caller     | Location                                                                  |
| -----: | ----: | ----------: | ---------- | ------------------------------------------------------------------------- |
| 100.0% | 4.5ms |          17 | `invoke()` | `org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000d8011308b0` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Caller                                                                   | Location                                            |
| -----: | ----: | ----------: | ------------------------------------------------------------------------ | --------------------------------------------------- |
| 100.0% | 4.4ms |           4 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.AbstractClassBuilder` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`)

|      % |  Time | Contentions | Caller     | Location                                              |
| -----: | ----: | ----------: | ---------- | ----------------------------------------------------- |
| 100.0% | 4.3ms |           9 | `<init>()` | `org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap` |

##### `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`)

|      % |  Time | Contentions | Caller                                                 | Location                                                |
| -----: | ----: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 3.9ms |           9 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

### Total time

Functions with the most time blocked within the function and its callees.

|      % |    Time | Contentions | Function                                                                                                          | Location                                                                          |
| -----: | ------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 100.0% |   1.94s |         960 | `runWorker(ThreadPoolExecutor$Worker)`                                                                            | `java.util.concurrent.ThreadPoolExecutor`                                         |
| 100.0% |   1.94s |         960 | `run()`                                                                                                           | `java.util.concurrent.ThreadPoolExecutor$Worker`                                  |
| 100.0% |   1.94s |         960 | `runWith(Object, Runnable)`                                                                                       | `java.lang.Thread`                                                                |
| 100.0% |   1.94s |         960 | `run()`                                                                                                           | `java.lang.Thread`                                                                |
|  99.8% |   1.94s |         946 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
|  99.8% |   1.94s |         946 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d8018923a0` |
|  99.8% |   1.94s |         946 | `run()`                                                                                                           | `java.util.concurrent.CompletableFuture$AsyncRun`                                 |
|  99.5% |   1.93s |         915 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
|  95.2% |   1.85s |         667 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  94.4% |   1.83s |         615 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  90.2% |   1.75s |         454 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  14.3% | 277.4ms |         378 | `doGenerate(ReifiedTypeParametersUsages)`                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  14.3% | 277.4ms |         378 | `generate(ReifiedTypeParametersUsages)`                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  14.3% | 277.4ms |         378 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                     | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|   9.9% | 193.4ms |         174 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|   9.8% | 190.8ms |         157 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|   9.8% | 190.8ms |         157 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|   9.8% | 190.8ms |         157 | `visitBlockBody(IrBlockBody, Object)`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|   9.8% | 190.8ms |         157 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                 |
|   9.6% | 187.5ms |         144 | `visitReturn(IrReturn, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Contentions | Function                                                                                                          | Location                                                                          |
| ----: | ------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 99.8% |   1.94s |         946 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 99.8% |   1.94s |         946 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d8018923a0` |
| 99.5% |   1.93s |         915 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 95.2% |   1.85s |         667 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 94.4% |   1.83s |         615 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 90.2% |   1.75s |         454 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 14.3% | 277.4ms |         378 | `doGenerate(ReifiedTypeParametersUsages)`                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| 14.3% | 277.4ms |         378 | `generate(ReifiedTypeParametersUsages)`                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| 14.3% | 277.4ms |         378 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                     | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  9.9% | 193.4ms |         174 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  9.8% | 190.8ms |         157 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  9.8% | 190.8ms |         157 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  9.8% | 190.8ms |         157 | `visitBlockBody(IrBlockBody, Object)`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  9.8% | 190.8ms |         157 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                 |
|  9.6% | 187.5ms |         144 | `visitReturn(IrReturn, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  9.6% | 187.5ms |         144 | `visitReturn(IrReturn, Object)`                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  9.6% | 187.5ms |         144 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrReturn`                                    |
|  8.8% | 171.1ms |         132 | `visitCall(IrCall, BlockInfo)`                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  8.8% | 171.1ms |         132 | `visitCall(IrCall, Object)`                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  8.8% | 171.1ms |         132 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrCall`                                      |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Contentions | Caller  | Location                                         |
| -----: | ----: | ----------: | ------- | ------------------------------------------------ |
| 100.0% | 1.94s |         960 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Contentions | Caller                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 1.94s |         960 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Caller  | Location           |
| -----: | ----: | ----------: | ------- | ------------------ |
| 100.0% | 1.94s |         960 | `run()` | `java.lang.Thread` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller  | Location                                                                          |
| -----: | ----: | ----------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.94s |         946 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d8018923a0` |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d8018923a0`)

|      % |  Time | Contentions | Caller  | Location                                          |
| -----: | ----: | ----------: | ------- | ------------------------------------------------- |
| 100.0% | 1.94s |         946 | `run()` | `java.util.concurrent.CompletableFuture$AsyncRun` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |  Time | Contentions | Caller                                 | Location                                  |
| -----: | ----: | ----------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 1.94s |         946 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.93s |         915 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |  Time | Contentions | Caller                                                   | Location                                               |
| -----: | ----: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.85s |         667 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |  Time | Contentions | Caller       | Location                                                |
| -----: | ----: | ----------: | ------------ | ------------------------------------------------------- |
| 100.0% | 1.83s |         615 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |   Time | Contentions | Caller                                      | Location                                                             |
| -----: | -----: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% |  1.75s |         454 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
|   5.4% | 94.1ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Caller                                  | Location                                                   |
| -----: | ------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 277.4ms |         378 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Caller                                                                        | Location                                                   |
| -----: | ------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 277.4ms |         378 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Caller                           | Location                                                |
| -----: | ------: | ----------: | -------------------------------- | ------------------------------------------------------- |
| 100.0% | 277.4ms |         378 | `generateMethodNode(IrFunction)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                                    | Location                                                   |
| -----: | ------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 193.4ms |         174 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                                                       | Location                                                     |
| -----: | ------: | ----------: | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 100.0% | 190.8ms |         157 | `visitBlockBody(IrBlockBody, BlockInfo)`                     | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|   1.2% |   2.3ms |           9 | `visitContainerExpression(IrContainerExpression, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                                | Location                                                     |
| -----: | ------: | ----------: | ------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 190.8ms |         157 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                          |
| -----: | ------: | ----------: | --------------------------- | ------------------------------------------------- |
| 100.0% | 190.8ms |         157 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlockBody` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|      % |    Time | Contentions | Caller       | Location                                                     |
| -----: | ------: | ----------: | ------------ | ------------------------------------------------------------ |
| 100.0% | 190.8ms |         157 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                          | Location                                                     |
| -----: | ------: | ----------: | ------------------------------- | ------------------------------------------------------------ |
| 100.0% | 187.5ms |         144 | `visitReturn(IrReturn, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                       |
| -----: | ------: | ----------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 187.5ms |         144 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrReturn` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`)

|     % |    Time | Contentions | Caller                                                     | Location                                                     |
| ----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 99.9% | 187.4ms |         143 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.1% |   0.2ms |           1 | `visitWhen(IrWhen, BlockInfo)`                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                                     |
| -----: | ------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| 100.0% | 171.1ms |         132 | `visitCall(IrCall, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                     |
| -----: | ------: | ----------: | --------------------------- | -------------------------------------------- |
| 100.0% | 171.1ms |         132 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrCall` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`)

|     % |    Time | Contentions | Caller                                                     | Location                                                     |
| ----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 82.6% | 141.4ms |          75 | `visitWhen(IrWhen, BlockInfo)`                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| 16.4% |  28.1ms |          53 | `visitReturn(IrReturn, BlockInfo)`                         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.8% |   1.4ms |           1 | `visitTypeOperator(IrTypeOperatorCall, BlockInfo)`         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.1% |   0.2ms |           3 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|     % |  Time | Contentions | Callee                                                  | Location                                          |
| ----: | ----: | ----------: | ------------------------------------------------------- | ------------------------------------------------- |
| 99.8% | 1.94s |         946 | `run()`                                                 | `java.util.concurrent.CompletableFuture$AsyncRun` |
|  0.2% | 3.6ms |           9 | `processWorkerExit(ThreadPoolExecutor$Worker, boolean)` | `java.util.concurrent.ThreadPoolExecutor`         |
| <0.1% | 0.2ms |           5 | `getTask()`                                             | `java.util.concurrent.ThreadPoolExecutor`         |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Contentions | Callee                                 | Location                                  |
| -----: | ----: | ----------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 1.94s |         960 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee  | Location                                         |
| -----: | ----: | ----------: | ------- | ------------------------------------------------ |
| 100.0% | 1.94s |         960 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 1.94s |         960 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |  Time | Contentions | Callee                                                   | Location                                               |
| ----: | ----: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
| 99.7% | 1.93s |         915 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |
|  0.3% | 5.8ms |          31 | `getUnitStats()`                                         | `org.jetbrains.kotlin.util.PerformanceManager`         |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d8018923a0`)

|      % |  Time | Contentions | Callee                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.94s |         946 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |  Time | Contentions | Callee  | Location                                                                          |
| -----: | ----: | ----------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.94s |         946 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d8018923a0` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |   Time | Contentions | Callee                                                                                                   | Location                                                          |
| ----: | -----: | ----------: | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 95.7% |  1.85s |         667 | `generate()`                                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`           |
|  3.8% | 72.9ms |         228 | `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |   Time | Contentions | Callee                                                  | Location                                                |
| ----: | -----: | ----------: | ------------------------------------------------------- | ------------------------------------------------------- |
| 99.2% |  1.83s |         615 | `generateMethod(IrFunction, SourceMapper)`              | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
|  0.8% | 13.9ms |          45 | `generateAnnotations()`                                 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| <0.1% |  0.6ms |           2 | `generateInnerAndOuterClasses()`                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| <0.1% |  0.3ms |           5 | `shouldSkipCodeGenerationAccordingToGenerationFilter()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |   Time | Contentions | Callee                                                                   | Location                                                   |
| ----: | -----: | ----------: | ------------------------------------------------------------------------ | ---------------------------------------------------------- |
| 95.6% |  1.75s |         454 | `generateMethodNode(IrFunction)`                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`    |
|  1.8% | 33.6ms |          67 | `accept(MethodVisitor)`                                                  | `org.jetbrains.org.objectweb.asm.tree.MethodNode`          |
|  1.1% | 19.6ms |          39 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.DelegatingClassBuilder`      |
|  1.0% | 19.2ms |          29 | `getMetadataSerializer()`                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`    |
|  0.2% |  2.8ms |           2 | `preprocessSuspendMarkers(MethodNode, boolean, boolean)`                 | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |    Time | Contentions | Callee                                                                        | Location                                                   |
| ----: | ------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 15.8% | 277.4ms |         378 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|     % |    Time | Contentions | Callee                                                                                               | Location                                                         |
| ----: | ------: | ----------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 69.7% | 193.4ms |         174 | `generate()`                                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  3.9% |  10.7ms |          41 | `calculateMethodFlags(IrFunction)`                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |
|  2.6% |   7.2ms |          33 | `mapSignatureWithGeneric(IrFunction)`                                                                | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|  2.2% |   6.1ms |          14 | `createFrameMapWithReceivers(IrFunction)`                                                            | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |
|  1.2% |   3.4ms |           7 | `generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Callee                                    | Location                                                   |
| -----: | ------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 277.4ms |         378 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Callee                                  | Location                                                   |
| -----: | ------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 277.4ms |         378 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                        | Location                                                     |
| ----: | ------: | ----------: | ----------------------------- | ------------------------------------------------------------ |
| 98.7% | 190.8ms |         157 | `accept(IrVisitor, Object)`   | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`            |
|  0.2% |   0.4ms |           1 | `generateNonNullAssertions()` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.2% |   0.4ms |           5 | `markNewLabel()`              | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                            | Location                                                   |
| ----: | ------: | ----------: | --------------------------------- | ---------------------------------------------------------- |
| 98.2% | 187.4ms |         143 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrReturn`             |
|  0.9% |   1.8ms |           4 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall`   |
|  0.8% |   1.6ms |           6 | `getUnitValue(ExpressionCodegen)` | `org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt` |
|  0.2% |   0.5ms |           5 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrWhen`               |
|  0.1% |   0.2ms |           3 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrCall`               |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                                                     | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 190.8ms |         157 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                                   | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 190.8ms |         157 | `visitBlockBody(IrBlockBody, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|      % |    Time | Contentions | Callee                                | Location                                                     |
| -----: | ------: | ----------: | ------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 190.8ms |         157 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                      | Location                                                 |
| ----: | ------: | ----------: | --------------------------- | -------------------------------------------------------- |
| 83.7% | 157.0ms |          86 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrWhen`             |
| 15.0% |  28.1ms |          53 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrCall`             |
|  1.2% |   2.2ms |           3 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall` |
|  0.1% |   0.2ms |           1 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrConst`            |
| <0.1% |   0.1ms |           1 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlock`            |

##### `visitReturn(IrReturn, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                             | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------- | ------------------------------------------------------------ |
| 100.0% | 187.5ms |         144 | `visitReturn(IrReturn, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`)

|      % |    Time | Contentions | Callee                          | Location                                                     |
| -----: | ------: | ----------: | ------------------------------- | ------------------------------------------------------------ |
| 100.0% | 187.5ms |         144 | `visitReturn(IrReturn, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                                                                                                           | Location                                                         |
| ----: | ------: | ----------: | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 81.6% | 139.5ms |          77 | `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)`                              | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator` |
|  9.9% |  17.0ms |          26 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                            | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  5.5% |   9.4ms |          19 | `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  1.6% |   2.8ms |           8 | `mapToCallableMethod(IrCall, IrFunction)`                                                                        | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|  0.8% |   1.4ms |           1 | `invoke(IrFunctionAccessExpression, ExpressionCodegen, BlockInfo)`                                               | `org.jetbrains.kotlin.backend.jvm.intrinsics.UnsafeCoerce`       |

##### `visitCall(IrCall, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                         | Location                                                     |
| -----: | ------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% | 171.1ms |         132 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`)

|      % |    Time | Contentions | Callee                      | Location                                                     |
| -----: | ------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| 100.0% | 171.1ms |         132 | `visitCall(IrCall, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

Common call stack: `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d8018923a0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`

|     % |   Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | -----: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 76.0% |  1.47s |          76 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  4.8% | 94.1ms |           2 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                              |
|  2.3% | 45.5ms |          57 | `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.1% | 20.9ms |          22 | `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.8% | 14.9ms |          50 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.7% | 13.9ms |           8 | `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.6% | 11.1ms |          22 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.6% | 10.8ms |          20 | `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.5% | 10.1ms |          15 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.5% |  9.0ms |          11 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000d801897840`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.4% |  8.2ms |          19 | `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`) ← `<init>(int)` ← `<init>()` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$BinaryClassWriter`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.4% |  8.1ms |           4 | `preprocessNodeBeforeInline(MethodNode, Map)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)      |
|  0.3% |  6.5ms |          21 | `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.3% |  6.3ms |           1 | `desiredAssertionStatus()` (`java.lang.Class`) ← `<clinit>()` (`org.jetbrains.kotlin.codegen.inline.RemapVisitor`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) |
|  0.2% |  4.8ms |           4 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000d801897840`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.2% |  4.7ms |           8 | `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                             |
|  0.2% |  4.6ms |           8 | `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                        |
|  0.2% |  4.6ms |           3 | `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.RedundantCheckCastEliminationMethodTransformer`) ← `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`) ← `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`) ← `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`) ← `accept(MethodVisitor)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.2% |  4.5ms |          17 | `unitStats_delegate$lambda$0(PerformanceManager)` (`org.jetbrains.kotlin.util.PerformanceManager`) ← `invoke()` (`org.jetbrains.kotlin.util.PerformanceManager$$Lambda.0x000000d8011308b0`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getUnitStats()` (`org.jetbrains.kotlin.util.PerformanceManager`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.2% |  4.5ms |           7 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                           |

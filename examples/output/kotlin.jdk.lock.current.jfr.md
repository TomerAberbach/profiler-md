# Lock contention profile

Blocked 1.23s over 1,035 contentions (1.2ms per contention).

| Category         |     % |  Time | Contentions |
| ---------------- | ----: | ----: | ----------: |
| Ours             | 99.8% | 1.23s |       1,016 |
| Standard library |  0.2% | 1.9ms |          19 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 1.22s (99.7%, self 0.8%) generateFile(JvmBackendContext, IrFile, List, boolean) at org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory
    ├── 1.16s (94.4%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
    │   ├── 1.14s (93.1%) generateMethod(IrFunction, SourceMapper)
    │   │   ├── 1.08s (87.8%, self 75.7%) generateMethodNode(IrFunction)
    │   │   │   └── … 148.0ms (12.1%, self 3.4%) doGenerate(ReifiedTypeParametersUsages) at org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen
    │   │   │       ├── … 62.3ms (5.1%) visitStatementContainer(IrStatementContainer, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   └── … 57.3ms (4.7%) visitReturn(IrReturn, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │       ├── … 35.7ms (2.9%) visitWhen(IrWhen, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │       │   ├── … 30.3ms (2.5%) visitCall(IrCall, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │       │   │   ├── 12.6ms (1.0%) genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator …
    │   │   │       │       │   │   ├── 8.9ms (0.7%, self 0.5%) getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)
    │   │   │       │       │   │   │   └── 2.1ms (0.2%) <init>(TypeSystemCommonBackendContext, Map, boolean, Function2) at org.jetbrains.kotlin.codegen.inline.TypeParameterMappings
    │   │   │       │       │   │   └── 8.9ms (0.7%) visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)
    │   │   │       │       │   │       └── 8.9ms (0.7%) genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen
    │   │   │       │       │   │           └── … 3.0ms (0.2%) addParameter(ParameterInfo, boolean) at org.jetbrains.kotlin.codegen.inline.ParametersBuilder
    │   │   │       │       │   └── 3.1ms (0.3%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator
    │   │   │       │       └── … 20.2ms (1.6%) visitCall(IrCall, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │           ├── … 7.5ms (0.6%) doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int) at org.jetbrains.kotlin.codegen.inline.MethodInliner
    │   │   │       │           │   └── 3.5ms (0.3%) doInline(MethodNode)
    │   │   │       │           └── 4.7ms (0.4%) visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)
    │   │   │       ├── … 8.1ms (0.7%) <init>() at org.jetbrains.kotlin.codegen.FrameMapBase
    │   │   │       ├── 6.3ms (0.5%) <init>(int, int, String, String, String, String[]) at org.jetbrains.org.objectweb.asm.tree.MethodNode
    │   │   │       ├── 5.0ms (0.4%) getThrownExceptions(IrFunction)
    │   │   │       └── 21.0ms (1.7%) 9 more callees, led by (0.5%) mapSignatureWithGeneric(IrFunction) at org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper
    │   │   ├── … 21.4ms (1.7%) transform(String, MethodNode) at org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer
    │   │   │   └── 21.4ms (1.7%) 13 more callees, led by (0.4%) transform(String, MethodNode) at org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackMethodTransformer
    │   │   ├── … 18.3ms (1.5%, self 0.6%) makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set) at org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt
    │   │   │   └── 7.8ms (0.6%) makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)
    │   │   │       └── 2.4ms (0.2%) createTopLevel$default(FirElementSerializer$Companion, FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean, int, Object) at org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion
    │   │   │           └── 2.4ms (0.2%) createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)
    │   │   ├── … 10.9ms (0.9%, self 0.6%) <init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor
    │   │   │   └── 3.2ms (0.3%) <init>() at org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer
    │   │   └── … 1.4ms (0.1%) getValue(Object, KProperty) at org.jetbrains.kotlin.fir.backend.MappedLazyVar
    │   └── 15.2ms (1.2%) 3 more callees, led by (1.2%) generateAnnotations()
    └── … 55.3ms (4.5%, self 1.2%) <init>(IrClass, JvmBackendContext, IrFunction, List) at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
        ├── … 21.1ms (1.7%, self 1.1%) newClassBuilder(JvmDeclarationOrigin) at org.jetbrains.kotlin.codegen.ClassBuilderFactories$1
        │   └── … 7.6ms (0.6%, self 0.5%) <init>(ClassReader, int) at org.jetbrains.org.objectweb.asm.ClassWriter
        ├── 7.8ms (0.6%) getSourceMapper(JvmBackendContext, IrClass) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
        │   └── … 2.9ms (0.2%) getLineAndColumnNumbers(int) at org.jetbrains.kotlin.ir.AbstractIrFileEntry
        └── 6.6ms (0.5%) mapClassSignature(IrTypeMapper, IrClass, Type, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Contentions | Function                                                                                                                                                            | Location                                                                                           |
| ----: | ------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 75.7% | 929.6ms |          92 | `generateMethodNode(IrFunction)`                                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                            |
|  3.4% |  42.2ms |          52 | `doGenerate(ReifiedTypeParametersUsages)`                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                         |
|  1.2% |  14.2ms |          55 | `<init>(IrClass, JvmBackendContext, IrFunction, List)`                                                                                                              | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                            |
|  1.1% |  13.5ms |          17 | `newClassBuilder(JvmDeclarationOrigin)`                                                                                                                             | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`                                             |
|  0.8% |  10.0ms |          21 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                                            | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                                             |
|  0.7% |   8.1ms |          11 | `<init>()`                                                                                                                                                          | `org.jetbrains.kotlin.codegen.FrameMapBase`                                                        |
|  0.7% |   8.1ms |          17 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                                         |
|  0.6% |   7.8ms |          27 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                                                                               | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                       |
|  0.6% |   7.6ms |          10 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])`                                                                            | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`                              |
|  0.6% |   7.5ms |          16 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)`                  | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`                                     |
|  0.5% |   6.3ms |          16 | `<init>(int, int, String, String, String, String[])`                                                                                                                | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                                  |
|  0.5% |   6.2ms |          18 | `<init>(ClassReader, int)`                                                                                                                                          | `org.jetbrains.org.objectweb.asm.ClassWriter`                                                      |
|  0.4% |   5.0ms |           6 | `getThrownExceptions(IrFunction)`                                                                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                         |
|  0.4% |   4.9ms |          16 | `doInline(MethodNode)`                                                                                                                                              | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                                |
|  0.4% |   4.4ms |           4 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`                                     |
|  0.4% |   4.3ms |          17 | `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                                        |
|  0.3% |   4.0ms |           2 | `addParameter(ParameterInfo, boolean)`                                                                                                                              | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder`                                            |
|  0.3% |   4.0ms |           5 | `getValue(Object, KProperty)`                                                                                                                                       | `org.jetbrains.kotlin.fir.backend.MappedLazyVar`                                                   |
|  0.3% |   3.2ms |           1 | `<init>()`                                                                                                                                                          | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
|  0.3% |   3.2ms |          14 | `getSourceMapper(JvmBackendContext, IrClass)`                                                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                                        |

#### Lines

Lines with the largest contribution to each function's self time.

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |    Time | Contentions | Location                                                    |
| ----: | ------: | ----------: | ----------------------------------------------------------- |
| 99.4% | 924.3ms |          75 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:427` |
|  0.3% |   2.7ms |           7 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:416` |
|  0.3% |   2.4ms |           9 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:422` |
| <0.1% |   0.2ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:428` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|     % |   Time | Contentions | Location                                                       |
| ----: | -----: | ----------: | -------------------------------------------------------------- |
| 51.2% | 21.6ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:68`  |
| 22.6% |  9.5ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:134` |
|  9.1% |  3.8ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:133` |
|  7.4% |  3.1ms |           5 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:76`  |
|  4.1% |  1.7ms |           5 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:84`  |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |  Time | Contentions | Location                                                    |
| ----: | ----: | ----------: | ----------------------------------------------------------- |
| 34.5% | 4.9ms |           9 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:110` |
| 21.6% | 3.1ms |          15 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:84`  |
| 13.8% | 2.0ms |           5 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:107` |
| 12.5% | 1.8ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:89`  |
| 12.4% | 1.8ms |           6 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:78`  |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

|      % |   Time | Contentions | Location                                                  |
| -----: | -----: | ----------: | --------------------------------------------------------- |
| 100.0% | 13.5ms |          17 | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1:70` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |  Time | Contentions | Location                                                   |
| ----: | ----: | ----------: | ---------------------------------------------------------- |
| 97.4% | 9.8ms |          18 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory:465` |
|  2.6% | 0.3ms |           3 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory:459` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`)

|      % |  Time | Contentions | Location                                       |
| -----: | ----: | ----------: | ---------------------------------------------- |
| 100.0% | 8.1ms |          11 | `org.jetbrains.kotlin.codegen.FrameMapBase:26` |

##### `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

|     % |  Time | Contentions | Location                                                       |
| ----: | ----: | ----------: | -------------------------------------------------------------- |
| 36.8% | 3.0ms |           4 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:192` |
| 32.0% | 2.6ms |           7 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:178` |
| 25.7% | 2.1ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:118` |
|  3.2% | 0.3ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:149` |
|  2.3% | 0.2ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:152` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |  Time | Contentions | Location                                                          |
| ----: | ----: | ----------: | ----------------------------------------------------------------- |
| 31.1% | 2.4ms |           6 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1581` |
| 21.2% | 1.6ms |           7 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1572` |
| 14.9% | 1.2ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1570` |
| 12.6% | 1.0ms |           6 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1569` |
| 11.2% | 0.9ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1548` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|     % |  Time | Contentions | Location                                                                 |
| ----: | ----: | ----------: | ------------------------------------------------------------------------ |
| 39.4% | 3.0ms |           1 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:59` |
| 26.4% | 2.0ms |           2 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:49` |
| 11.5% | 0.9ms |           2 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:58` |
| 11.5% | 0.9ms |           2 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:46` |
| 10.8% | 0.8ms |           2 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:48` |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|     % |  Time | Contentions | Location                                                          |
| ----: | ----: | ----------: | ----------------------------------------------------------------- |
| 48.0% | 3.6ms |           3 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:50` |
| 24.1% | 1.8ms |           4 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:54` |
| 18.9% | 1.4ms |           7 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:61` |
|  9.0% | 0.7ms |           2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:63` |

##### `<init>(int, int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|     % |  Time | Contentions | Location                                              |
| ----: | ----: | ----------: | ----------------------------------------------------- |
| 84.3% | 5.3ms |           8 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:230` |
| 15.7% | 1.0ms |           8 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:225` |

##### `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Location                                          |
| -----: | ----: | ----------: | ------------------------------------------------- |
| 100.0% | 6.2ms |          18 | `org.jetbrains.org.objectweb.asm.ClassWriter:266` |

##### `getThrownExceptions(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |  Time | Contentions | Location                                                       |
| -----: | ----: | ----------: | -------------------------------------------------------------- |
| 100.0% | 5.0ms |           6 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:272` |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|     % |  Time | Contentions | Location                                                |
| ----: | ----: | ----------: | ------------------------------------------------------- |
| 36.4% | 1.8ms |           3 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:156` |
| 28.5% | 1.4ms |           5 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:154` |
| 25.0% | 1.2ms |           4 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:159` |
| 10.1% | 0.5ms |           3 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:153` |
| <0.1% | 0.2µs |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:433` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|     % |  Time | Contentions | Location                                                           |
| ----: | ----: | ----------: | ------------------------------------------------------------------ |
| 50.0% | 2.2ms |           2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:198` |
| 50.0% | 2.2ms |           2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:190` |

##### `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|     % |  Time | Contentions | Location                                                        |
| ----: | ----: | ----------: | --------------------------------------------------------------- |
| 55.8% | 2.4ms |           9 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:225` |
| 44.2% | 1.9ms |           8 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:267` |

##### `addParameter(ParameterInfo, boolean)` (`org.jetbrains.kotlin.codegen.inline.ParametersBuilder`)

|      % |  Time | Contentions | Location                                                   |
| -----: | ----: | ----------: | ---------------------------------------------------------- |
| 100.0% | 4.0ms |           2 | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder:71` |

##### `getValue(Object, KProperty)` (`org.jetbrains.kotlin.fir.backend.MappedLazyVar`)

|      % |  Time | Contentions | Location                                            |
| -----: | ----: | ----------: | --------------------------------------------------- |
| 100.0% | 4.0ms |           5 | `org.jetbrains.kotlin.fir.backend.MappedLazyVar:67` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|      % |  Time | Contentions | Location                                                                                              |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% | 3.2ms |           1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:23` |

##### `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|     % |  Time | Contentions | Location                                                       |
| ----: | ----: | ----------: | -------------------------------------------------------------- |
| 53.0% | 1.7ms |          10 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:76` |
| 47.0% | 1.5ms |           4 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:89` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |    Time | Contentions | Caller                                      | Location                                                             |
| ----: | ------: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| 95.2% | 884.9ms |          90 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
|  4.8% |  44.7ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |   Time | Contentions | Caller                                  | Location                                                   |
| -----: | -----: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 42.2ms |          52 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |   Time | Contentions | Caller                                                                           | Location                                                |
| -----: | -----: | ----------: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 14.2ms |          55 | `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

|      % |   Time | Contentions | Caller                                                            | Location                                                                    |
| -----: | -----: | ----------: | ----------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 100.0% | 13.5ms |          17 | `newClassBuilder(JvmDeclarationOrigin): OptimizationClassBuilder` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |   Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | -----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 10.0ms |          21 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`)

|      % |  Time | Contentions | Caller     | Location                                              |
| -----: | ----: | ----------: | ---------- | ----------------------------------------------------- |
| 100.0% | 8.1ms |          11 | `<init>()` | `org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap` |

##### `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

|      % |  Time | Contentions | Caller                                                                                                           | Location                                                     |
| -----: | ----: | ----------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 8.1ms |          17 | `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |  Time | Contentions | Caller                         | Location                                                     |
| -----: | ----: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% | 7.8ms |          27 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|      % |  Time | Contentions | Caller                                                                   | Location                                                             |
| -----: | ----: | ----------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| 100.0% | 7.6ms |          10 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder` |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|      % |  Time | Contentions | Caller                                                                                             | Location                                                      |
| -----: | ----: | ----------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% | 7.5ms |          16 | `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension` |

##### `<init>(int, int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|      % |  Time | Contentions | Caller                                    | Location                                                   |
| -----: | ----: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 6.3ms |          16 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Caller        | Location                                      |
| -----: | ----: | ----------: | ------------- | --------------------------------------------- |
| 100.0% | 6.2ms |          18 | `<init>(int)` | `org.jetbrains.org.objectweb.asm.ClassWriter` |

##### `getThrownExceptions(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |  Time | Contentions | Caller                                    | Location                                                   |
| -----: | ----: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 5.0ms |           6 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|      % |  Time | Contentions | Caller                                                         | Location                                            |
| -----: | ----: | ----------: | -------------------------------------------------------------- | --------------------------------------------------- |
| 100.0% | 4.9ms |          16 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|      % |  Time | Contentions | Caller                                                                                                                                             | Location                                                       |
| -----: | ----: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 100.0% | 4.4ms |           4 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt` |

##### `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|      % |  Time | Contentions | Caller                                                 | Location                                                |
| -----: | ----: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 4.3ms |          17 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `addParameter(ParameterInfo, boolean)` (`org.jetbrains.kotlin.codegen.inline.ParametersBuilder`)

|      % |  Time | Contentions | Caller                                  | Location                                                |
| -----: | ----: | ----------: | --------------------------------------- | ------------------------------------------------------- |
| 100.0% | 4.0ms |           2 | `addNextParameter(Type, boolean, Type)` | `org.jetbrains.kotlin.codegen.inline.ParametersBuilder` |

##### `getValue(Object, KProperty)` (`org.jetbrains.kotlin.fir.backend.MappedLazyVar`)

|     % |  Time | Contentions | Caller                   | Location                                                   |
| ----: | ----: | ----------: | ------------------------ | ---------------------------------------------------------- |
| 84.2% | 3.3ms |           4 | `getOverriddenSymbols()` | `org.jetbrains.kotlin.fir.lazy.Fir2IrLazySimpleFunction`   |
| 15.8% | 0.6ms |           1 | `getOverriddenSymbols()` | `org.jetbrains.kotlin.fir.lazy.Fir2IrLazyPropertyAccessor` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|      % |  Time | Contentions | Caller                                                                                   | Location                                                              |
| -----: | ----: | ----------: | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% | 3.2ms |           1 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor` |

##### `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|      % |  Time | Contentions | Caller                                                 | Location                                                |
| -----: | ----: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 3.2ms |          14 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

### Total time

Functions with the most time blocked within the function and its callees.

|      % |    Time | Contentions | Function                                                                                                          | Location                                                                          |
| -----: | ------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 100.0% |   1.23s |       1,027 | `runWith(Object, Runnable)`                                                                                       | `java.lang.Thread`                                                                |
| 100.0% |   1.23s |       1,027 | `run()`                                                                                                           | `java.lang.Thread`                                                                |
| 100.0% |   1.23s |       1,026 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 100.0% |   1.23s |       1,026 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8` |
| 100.0% |   1.23s |       1,026 | `run()`                                                                                                           | `java.util.concurrent.CompletableFuture$AsyncRun`                                 |
| 100.0% |   1.23s |       1,026 | `runWorker(ThreadPoolExecutor$Worker)`                                                                            | `java.util.concurrent.ThreadPoolExecutor`                                         |
| 100.0% |   1.23s |       1,026 | `run()`                                                                                                           | `java.util.concurrent.ThreadPoolExecutor$Worker`                                  |
|  99.7% |   1.22s |         999 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
|  94.4% |   1.16s |         758 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  93.1% |   1.14s |         691 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  87.8% |   1.08s |         529 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  15.7% | 192.8ms |         439 | `doGenerate(ReifiedTypeParametersUsages)`                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  15.7% | 192.8ms |         439 | `generate(ReifiedTypeParametersUsages)`                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  15.7% | 192.8ms |         439 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                     | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|   8.9% | 109.2ms |         229 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|   8.7% | 107.0ms |         202 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|   8.7% | 107.0ms |         202 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|   8.7% | 107.0ms |         202 | `visitBlockBody(IrBlockBody, Object)`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|   8.7% | 107.0ms |         202 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                 |
|   8.4% | 103.0ms |         185 | `visitReturn(IrReturn, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|      % |    Time | Contentions | Function                                                                                                          | Location                                                                          |
| -----: | ------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 100.0% |   1.23s |       1,026 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 100.0% |   1.23s |       1,026 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8` |
|  99.7% |   1.22s |         999 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
|  94.4% |   1.16s |         758 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  93.1% |   1.14s |         691 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  87.8% |   1.08s |         529 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  15.7% | 192.8ms |         439 | `doGenerate(ReifiedTypeParametersUsages)`                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  15.7% | 192.8ms |         439 | `generate(ReifiedTypeParametersUsages)`                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  15.7% | 192.8ms |         439 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                     | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|   8.9% | 109.2ms |         229 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|   8.7% | 107.0ms |         202 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|   8.7% | 107.0ms |         202 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|   8.7% | 107.0ms |         202 | `visitBlockBody(IrBlockBody, Object)`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|   8.7% | 107.0ms |         202 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                 |
|   8.4% | 103.0ms |         185 | `visitReturn(IrReturn, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|   8.4% | 103.0ms |         185 | `visitReturn(IrReturn, Object)`                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|   8.4% | 103.0ms |         185 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrReturn`                                    |
|   8.0% |  98.1ms |         162 | `visitCall(IrCall, BlockInfo)`                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|   8.0% |  98.1ms |         162 | `visitCall(IrCall, Object)`                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|   8.0% |  98.1ms |         162 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrCall`                                      |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Caller  | Location           |
| -----: | ----: | ----------: | ------- | ------------------ |
| 100.0% | 1.23s |       1,027 | `run()` | `java.lang.Thread` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller  | Location                                                                          |
| -----: | ----: | ----------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.23s |       1,026 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8` |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`)

|      % |  Time | Contentions | Caller  | Location                                          |
| -----: | ----: | ----------: | ------- | ------------------------------------------------- |
| 100.0% | 1.23s |       1,026 | `run()` | `java.util.concurrent.CompletableFuture$AsyncRun` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |  Time | Contentions | Caller                                 | Location                                  |
| -----: | ----: | ----------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 1.23s |       1,026 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Contentions | Caller  | Location                                         |
| -----: | ----: | ----------: | ------- | ------------------------------------------------ |
| 100.0% | 1.23s |       1,026 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Contentions | Caller                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 1.23s |       1,026 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.22s |         999 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |  Time | Contentions | Caller                                                   | Location                                               |
| -----: | ----: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.16s |         758 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |  Time | Contentions | Caller       | Location                                                |
| -----: | ----: | ----------: | ------------ | ------------------------------------------------------- |
| 100.0% | 1.14s |         691 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |   Time | Contentions | Caller                                      | Location                                                             |
| -----: | -----: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% |  1.08s |         529 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
|   4.1% | 44.7ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Caller                                  | Location                                                   |
| -----: | ------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 192.8ms |         439 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Caller                                                                        | Location                                                   |
| -----: | ------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 192.8ms |         439 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Caller                           | Location                                                |
| -----: | ------: | ----------: | -------------------------------- | ------------------------------------------------------- |
| 100.0% | 192.8ms |         439 | `generateMethodNode(IrFunction)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                                    | Location                                                   |
| -----: | ------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 109.2ms |         229 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                                                       | Location                                                     |
| -----: | ------: | ----------: | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 100.0% | 107.0ms |         202 | `visitBlockBody(IrBlockBody, BlockInfo)`                     | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|   2.2% |   2.4ms |           8 | `visitContainerExpression(IrContainerExpression, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                                | Location                                                     |
| -----: | ------: | ----------: | ------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 107.0ms |         202 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                          |
| -----: | ------: | ----------: | --------------------------- | ------------------------------------------------- |
| 100.0% | 107.0ms |         202 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlockBody` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|      % |    Time | Contentions | Caller       | Location                                                     |
| -----: | ------: | ----------: | ------------ | ------------------------------------------------------------ |
| 100.0% | 107.0ms |         202 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                          | Location                                                     |
| -----: | ------: | ----------: | ------------------------------- | ------------------------------------------------------------ |
| 100.0% | 103.0ms |         185 | `visitReturn(IrReturn, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                       |
| -----: | ------: | ----------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 103.0ms |         185 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrReturn` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`)

|      % |    Time | Contentions | Caller                                                     | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 103.0ms |         185 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |   Time | Contentions | Caller                      | Location                                                     |
| -----: | -----: | ----------: | --------------------------- | ------------------------------------------------------------ |
| 100.0% | 98.1ms |         162 | `visitCall(IrCall, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |   Time | Contentions | Caller                      | Location                                     |
| -----: | -----: | ----------: | --------------------------- | -------------------------------------------- |
| 100.0% | 98.1ms |         162 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrCall` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`)

|     % |   Time | Contentions | Caller                                                     | Location                                                     |
| ----: | -----: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 76.6% | 75.2ms |          94 | `visitWhen(IrWhen, BlockInfo)`                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| 21.4% | 21.0ms |          65 | `visitReturn(IrReturn, BlockInfo)`                         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.9% |  0.9ms |           1 | `visitWhileLoop(IrWhileLoop, BlockInfo)`                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.5% |  0.5ms |           1 | `visitTypeOperator(IrTypeOperatorCall, BlockInfo)`         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.5% |  0.5ms |           1 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee  | Location                                                       |
| -----: | ----: | ----------: | ------- | -------------------------------------------------------------- |
| 100.0% | 1.23s |       1,026 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker`               |
|  <0.1% | 5.4µs |           1 | `run()` | `jdk.jfr.internal.PlatformRecorder$$Lambda.0x0000007001042ce0` |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 1.23s |       1,027 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |  Time | Contentions | Callee                                                   | Location                                                     |
| ----: | ----: | ----------: | -------------------------------------------------------- | ------------------------------------------------------------ |
| 99.7% | 1.22s |         999 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`       |
|  0.3% | 3.6ms |          26 | `getUnitStats()`                                         | `org.jetbrains.kotlin.util.PerformanceManager`               |
| <0.1% | 0.6µs |           1 | `createChildIfNeeded(PerformanceManager, boolean)`       | `org.jetbrains.kotlin.util.PerformanceManagerImpl$Companion` |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`)

|      % |  Time | Contentions | Callee                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.23s |       1,026 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |  Time | Contentions | Callee  | Location                                                                          |
| -----: | ----: | ----------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.23s |       1,026 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Contentions | Callee  | Location                                          |
| -----: | ----: | ----------: | ------- | ------------------------------------------------- |
| 100.0% | 1.23s |       1,026 | `run()` | `java.util.concurrent.CompletableFuture$AsyncRun` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Contentions | Callee                                 | Location                                  |
| -----: | ----: | ----------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 1.23s |       1,026 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |   Time | Contentions | Callee                                                                                                   | Location                                                          |
| ----: | -----: | ----------: | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 94.7% |  1.16s |         758 | `generate()`                                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`           |
|  4.5% | 55.3ms |         220 | `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |   Time | Contentions | Callee                                                  | Location                                                |
| ----: | -----: | ----------: | ------------------------------------------------------- | ------------------------------------------------------- |
| 98.7% |  1.14s |         691 | `generateMethod(IrFunction, SourceMapper)`              | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
|  1.3% | 15.1ms |          64 | `generateAnnotations()`                                 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| <0.1% |  0.1ms |           1 | `generateField(IrField)`                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| <0.1% | 11.3µs |           2 | `shouldSkipCodeGenerationAccordingToGenerationFilter()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |   Time | Contentions | Callee                                                                   | Location                                                                   |
| ----: | -----: | ----------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| 94.2% |  1.08s |         529 | `generateMethodNode(IrFunction)`                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                    |
|  2.1% | 24.0ms |          89 | `accept(MethodVisitor)`                                                  | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                          |
|  1.7% | 19.5ms |          39 | `getMetadataSerializer()`                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                    |
|  1.3% | 15.1ms |          21 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.DelegatingClassBuilder`                      |
|  0.3% |  3.0ms |           3 | `trackFakeOverrideMethod(IrFunction)`                                    | `org.jetbrains.kotlin.backend.jvm.codegen.JvmMethodSignatureClashDetector` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |    Time | Contentions | Callee                                                                        | Location                                                   |
| ----: | ------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 17.9% | 192.8ms |         439 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|     % |    Time | Contentions | Callee                                               | Location                                                         |
| ----: | ------: | ----------: | ---------------------------------------------------- | ---------------------------------------------------------------- |
| 56.6% | 109.2ms |         229 | `generate()`                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  4.7% |   9.1ms |          19 | `createFrameMapWithReceivers(IrFunction)`            | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |
|  3.3% |   6.3ms |          16 | `<init>(int, int, String, String, String, String[])` | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                |
|  2.9% |   5.6ms |          38 | `mapSignatureWithGeneric(IrFunction)`                | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|  2.7% |   5.2ms |          28 | `calculateMethodFlags(IrFunction)`                   | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Callee                                    | Location                                                   |
| -----: | ------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 192.8ms |         439 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Callee                                  | Location                                                   |
| -----: | ------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 192.8ms |         439 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                                             | Location                                                     |
| ----: | ------: | ----------: | -------------------------------------------------- | ------------------------------------------------------------ |
| 98.0% | 107.0ms |         202 | `accept(IrVisitor, Object)`                        | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`            |
|  0.6% |   0.7ms |           9 | `generateNonNullAssertions()`                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.4% |   0.4ms |           8 | `markNewLabel()`                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| <0.1% |   0.1ms |           1 | `writeParameterInLocalVariableTable(Label, Label)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                            | Location                                                   |
| ----: | ------: | ----------: | --------------------------------- | ---------------------------------------------------------- |
| 96.3% | 103.0ms |         185 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrReturn`             |
|  1.7% |   1.8ms |           9 | `getUnitValue(ExpressionCodegen)` | `org.jetbrains.kotlin.backend.jvm.codegen.PromisedValueKt` |
|  1.3% |   1.4ms |           2 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrWhileLoop`          |
|  1.3% |   1.4ms |           2 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrBlock`              |
|  0.8% |   0.8ms |           3 | `accept(IrVisitor, Object)`       | `org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall`   |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                                                     | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 107.0ms |         202 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                                   | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 107.0ms |         202 | `visitBlockBody(IrBlockBody, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|      % |    Time | Contentions | Callee                                | Location                                                     |
| -----: | ------: | ----------: | ------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 107.0ms |         202 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |   Time | Contentions | Callee                      | Location                                                 |
| ----: | -----: | ----------: | --------------------------- | -------------------------------------------------------- |
| 78.0% | 80.4ms |         112 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrWhen`             |
| 20.4% | 21.0ms |          65 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrCall`             |
|  0.9% |  1.0ms |           3 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall` |
|  0.5% |  0.5ms |           2 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrTry`              |
|  0.2% |  0.2ms |           3 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlock`            |

##### `visitReturn(IrReturn, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                             | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------- | ------------------------------------------------------------ |
| 100.0% | 103.0ms |         185 | `visitReturn(IrReturn, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`)

|      % |    Time | Contentions | Callee                          | Location                                                     |
| -----: | ------: | ----------: | ------------------------------- | ------------------------------------------------------------ |
| 100.0% | 103.0ms |         185 | `visitReturn(IrReturn, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |   Time | Contentions | Callee                                                                                                           | Location                                                         |
| ----: | -----: | ----------: | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 68.5% | 67.2ms |          80 | `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)`                              | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator` |
| 14.9% | 14.6ms |          29 | `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
| 12.1% | 11.8ms |          44 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                            | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  3.6% |  3.5ms |           6 | `mapToCallableMethod(IrCall, IrFunction)`                                                                        | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|  0.5% |  0.5ms |           1 | `invoke(IrFunctionAccessExpression, ExpressionCodegen, BlockInfo)`                                               | `org.jetbrains.kotlin.backend.jvm.intrinsics.UnsafeCoerce`       |

##### `visitCall(IrCall, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |   Time | Contentions | Callee                         | Location                                                     |
| -----: | -----: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% | 98.1ms |         162 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`)

|      % |   Time | Contentions | Callee                      | Location                                                     |
| -----: | -----: | ----------: | --------------------------- | ------------------------------------------------------------ |
| 100.0% | 98.1ms |         162 | `visitCall(IrCall, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

Common call stack: `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ac8e8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`

|     % |    Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 72.1% | 884.9ms |          90 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.6% |  44.7ms |           2 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) |
|  3.4% |  42.2ms |          52 | `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.2% |  14.2ms |          55 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.1% |  13.5ms |          17 | `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin): OptimizationClassBuilder` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin): ClassBuilder` ← `newClassBuilder(JvmDeclarationOrigin): DelegatingClassBuilder` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin): ClassBuilder` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.8% |  10.0ms |          21 | `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.7% |   8.1ms |          11 | `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`) ← `<init>()` (`org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap`) ← `createFrameMapWithReceivers(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.6% |   7.6ms |          10 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.6% |   7.5ms |          16 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000070018afd88`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.5% |   6.3ms |          16 | `<init>(int, int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.5% |   6.2ms |          20 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.5% |   6.2ms |          18 | `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`) ← `<init>(int)` ← `<init>()` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$BinaryClassWriter`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin): OptimizationClassBuilder` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin): ClassBuilder` ← `newClassBuilder(JvmDeclarationOrigin): DelegatingClassBuilder` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin): ClassBuilder` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.4% |   5.0ms |           6 | `getThrownExceptions(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.4% |   4.4ms |          13 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                              |
|  0.4% |   4.4ms |           4 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000070018afd88`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.4% |   4.3ms |          17 | `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.3% |   3.7ms |           4 | `genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.3% |   3.2ms |           1 | `<init>()` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`) ← `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.3% |   3.2ms |          14 | `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.3% |   3.1ms |           9 | `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

# Thread park profile

Parked 1.94s over 40 parks (48.5ms per park).

| Category         |      % |  Time | Parks |
| ---------------- | -----: | ----: | ----: |
| Standard library | 100.0% | 1.94s |    40 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 1.14s (58.7%) run() at java.lang.Thread
│   └── 1.14s (58.7%) runWith(Object, Runnable)
│       └── 1.14s (58.7%) run() at java.util.concurrent.ThreadPoolExecutor$Worker
│           └── 1.14s (58.7%) runWorker(ThreadPoolExecutor$Worker) at java.util.concurrent.ThreadPoolExecutor
│               └── 1.14s (58.7%) getTask()
│                   └── 1.14s (58.7%) take() at java.util.concurrent.LinkedBlockingQueue
│                       └── 1.14s (58.7%) await() at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject
│                           └── 1.14s (58.7%) managedBlock(ForkJoinPool$ManagedBlocker) at java.util.concurrent.ForkJoinPool
│                               └── 1.14s (58.7%) unmanagedBlock(ForkJoinPool$ManagedBlocker)
│                                   └── 1.14s (58.7%) block() at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode
│                                       └── 1.14s (58.7%) park() at java.util.concurrent.locks.LockSupport
│                                           └── 1.14s (58.7%, self 100.0% globally) park(boolean, long) at jdk.internal.misc.Unsafe
├── 496.2ms (25.6%) run() at jdk.internal.misc.InnocuousThread
│   └── 496.2ms (25.6%) run() at java.lang.Thread
│       └── 496.2ms (25.6%) runWith(Object, Runnable)
│           └── 496.2ms (25.6%) run() at jdk.internal.ref.CleanerImpl
│               └── 496.2ms (25.6%) remove(long) at java.lang.ref.ReferenceQueue
│                   └── 496.2ms (25.6%) remove0(long)
│                       └── 496.2ms (25.6%) await(long)
│                           └── 496.2ms (25.6%) await(long, TimeUnit) at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject
│                               └── 496.2ms (25.6%) parkNanos(Object, long) at java.util.concurrent.locks.LockSupport
│                                   └── 496.2ms (25.6%) park(boolean, long) at jdk.internal.misc.Unsafe
└── … 305.2ms (15.7%) executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable) at org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline
    └── 305.2ms (15.7%) runPhasedPipeline(ArgumentsPipelineArtifact)
        └── 305.2ms (15.7%) invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.CompilerPhaseKt
            └── 305.2ms (15.7%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.backend.common.phaser.CompositePhase
                └── 305.2ms (15.7%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.NamedCompilerPhase
                    └── 305.2ms (15.7%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
                        └── 305.2ms (15.7%) phaseBody(PipelineContext, PipelineArtifact)
                            └── 305.2ms (15.7%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase
                                └── 305.2ms (15.7%) executePhase(JvmFir2IrPipelineArtifact)
                                    └── 305.2ms (15.7%) runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean) at org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler
                                        └── 305.2ms (15.7%) invokeCodegen(JvmIrCodegenFactory$CodegenInput) at org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory
                                            └── 304.8ms (15.7%) get() at java.util.concurrent.CompletableFuture
                                                └── 304.8ms (15.7%) waitingGet(boolean)
                                                    └── 304.8ms (15.7%) managedBlock(ForkJoinPool$ManagedBlocker) at java.util.concurrent.ForkJoinPool
                                                        └── 304.8ms (15.7%) unmanagedBlock(ForkJoinPool$ManagedBlocker)
                                                            └── 304.8ms (15.7%) block() at java.util.concurrent.CompletableFuture$Signaller
                                                                └── 304.8ms (15.7%) park(Object) at java.util.concurrent.locks.LockSupport
                                                                    └── 304.8ms (15.7%) park(boolean, long) at jdk.internal.misc.Unsafe
```

## Hottest functions

### Self time

Functions with the most time parked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |  Time | Parks | Function              | Location                   |
| -----: | ----: | ----: | --------------------- | -------------------------- |
| 100.0% | 1.94s |    40 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |    Time | Parks | Caller                    | Location                                 |
| ----: | ------: | ----: | ------------------------- | ---------------------------------------- |
| 58.7% |   1.14s |    21 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
| 25.6% | 496.6ms |     3 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |
| 15.7% | 305.8ms |    16 | `park(Object)`            | `java.util.concurrent.locks.LockSupport` |

### Total time

Functions with the most time parked within the function and its callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |    Time | Parks | Function                                      | Location                                                                |
| -----: | ------: | ----: | --------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% |   1.94s |    40 | `park(boolean, long)`                         | `jdk.internal.misc.Unsafe`                                              |
|  84.3% |   1.64s |    37 | `runWith(Object, Runnable)`                   | `java.lang.Thread`                                                      |
|  84.3% |   1.64s |    37 | `run()`                                       | `java.lang.Thread`                                                      |
|  74.4% |   1.44s |    23 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool`                                     |
|  74.4% |   1.44s |    23 | `managedBlock(ForkJoinPool$ManagedBlocker)`   | `java.util.concurrent.ForkJoinPool`                                     |
|  58.7% |   1.14s |    35 | `runWorker(ThreadPoolExecutor$Worker)`        | `java.util.concurrent.ThreadPoolExecutor`                               |
|  58.7% |   1.14s |    35 | `run()`                                       | `java.util.concurrent.ThreadPoolExecutor$Worker`                        |
|  58.7% |   1.14s |    32 | `take()`                                      | `java.util.concurrent.LinkedBlockingQueue`                              |
|  58.7% |   1.14s |    32 | `getTask()`                                   | `java.util.concurrent.ThreadPoolExecutor`                               |
|  58.7% |   1.14s |    30 | `await()`                                     | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
|  58.7% |   1.14s |    21 | `park()`                                      | `java.util.concurrent.locks.LockSupport`                                |
|  58.7% |   1.14s |    21 | `block()`                                     | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`   |
|  25.6% | 496.6ms |     3 | `parkNanos(Object, long)`                     | `java.util.concurrent.locks.LockSupport`                                |
|  25.6% | 496.2ms |     2 | `await(long, TimeUnit)`                       | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
|  25.6% | 496.2ms |     2 | `await(long)`                                 | `java.lang.ref.ReferenceQueue`                                          |
|  25.6% | 496.2ms |     2 | `remove0(long)`                               | `java.lang.ref.ReferenceQueue`                                          |
|  25.6% | 496.2ms |     2 | `remove(long)`                                | `java.lang.ref.ReferenceQueue`                                          |
|  25.6% | 496.2ms |     2 | `run()`                                       | `jdk.internal.ref.CleanerImpl`                                          |
|  25.6% | 496.2ms |     2 | `run()`                                       | `jdk.internal.misc.InnocuousThread`                                     |
|  15.7% | 305.8ms |    16 | `park(Object)`                                | `java.util.concurrent.locks.LockSupport`                                |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |    Time | Parks | Caller                    | Location                                 |
| ----: | ------: | ----: | ------------------------- | ---------------------------------------- |
| 58.7% |   1.14s |    21 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
| 25.6% | 496.6ms |     3 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |
| 15.7% | 305.8ms |    16 | `park(Object)`            | `java.util.concurrent.locks.LockSupport` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Parks | Caller  | Location           |
| -----: | ----: | ----: | ------- | ------------------ |
| 100.0% | 1.64s |    37 | `run()` | `java.lang.Thread` |

##### `run()` (`java.lang.Thread`)

|     % |    Time | Parks | Caller  | Location                            |
| ----: | ------: | ----: | ------- | ----------------------------------- |
| 30.3% | 496.2ms |     2 | `run()` | `jdk.internal.misc.InnocuousThread` |

##### `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Parks | Caller                                      | Location                            |
| -----: | ----: | ----: | ------------------------------------------- | ----------------------------------- |
| 100.0% | 1.44s |    23 | `managedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool` |

##### `managedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

|     % |    Time | Parks | Caller                | Location                                                                |
| ----: | ------: | ----: | --------------------- | ----------------------------------------------------------------------- |
| 78.9% |   1.14s |    21 | `await()`             | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| 21.1% | 304.8ms |     2 | `waitingGet(boolean)` | `java.util.concurrent.CompletableFuture`                                |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Parks | Caller  | Location                                         |
| -----: | ----: | ----: | ------- | ------------------------------------------------ |
| 100.0% | 1.14s |    35 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Parks | Caller                      | Location           |
| -----: | ----: | ----: | --------------------------- | ------------------ |
| 100.0% | 1.14s |    35 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `take()` (`java.util.concurrent.LinkedBlockingQueue`)

|      % |  Time | Parks | Caller      | Location                                  |
| -----: | ----: | ----: | ----------- | ----------------------------------------- |
| 100.0% | 1.14s |    32 | `getTask()` | `java.util.concurrent.ThreadPoolExecutor` |

##### `getTask()` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Parks | Caller                                 | Location                                  |
| -----: | ----: | ----: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 1.14s |    32 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % |  Time | Parks | Caller   | Location                                   |
| -----: | ----: | ----: | -------- | ------------------------------------------ |
| 100.0% | 1.14s |    30 | `take()` | `java.util.concurrent.LinkedBlockingQueue` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % |  Time | Parks | Caller    | Location                                                              |
| -----: | ----: | ----: | --------- | --------------------------------------------------------------------- |
| 100.0% | 1.14s |    21 | `block()` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode` |

##### `block()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`)

|      % |  Time | Parks | Caller                                        | Location                            |
| -----: | ----: | ----: | --------------------------------------------- | ----------------------------------- |
| 100.0% | 1.14s |    21 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|     % |    Time | Parks | Caller                  | Location                                                                |
| ----: | ------: | ----: | ----------------------- | ----------------------------------------------------------------------- |
| 99.9% | 496.2ms |     2 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
|  0.1% |   0.3ms |     1 | `awaitNanos(long)`      | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % |    Time | Parks | Caller        | Location                       |
| -----: | ------: | ----: | ------------- | ------------------------------ |
| 100.0% | 496.2ms |     2 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Parks | Caller          | Location                       |
| -----: | ------: | ----: | --------------- | ------------------------------ |
| 100.0% | 496.2ms |     2 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Parks | Caller         | Location                       |
| -----: | ------: | ----: | -------------- | ------------------------------ |
| 100.0% | 496.2ms |     2 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Parks | Caller  | Location                       |
| -----: | ------: | ----: | ------- | ------------------------------ |
| 100.0% | 496.2ms |     2 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % |    Time | Parks | Caller                      | Location           |
| -----: | ------: | ----: | --------------------------- | ------------------ |
| 100.0% | 496.2ms |     2 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `park(Object)` (`java.util.concurrent.locks.LockSupport`)

|     % |    Time | Parks | Caller                                                                           | Location                                                |
| ----: | ------: | ----: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% | 304.8ms |     2 | `block()`                                                                        | `java.util.concurrent.CompletableFuture$Signaller`      |
|  0.3% |   1.0ms |    14 | `acquire(AbstractQueuedSynchronizer$Node, int, boolean, boolean, boolean, long)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|     % |    Time | Parks | Callee  | Location                                         |
| ----: | ------: | ----: | ------- | ------------------------------------------------ |
| 69.7% |   1.14s |    35 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |
| 30.3% | 496.2ms |     2 | `run()` | `jdk.internal.ref.CleanerImpl`                   |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Parks | Callee                      | Location           |
| -----: | ----: | ----: | --------------------------- | ------------------ |
| 100.0% | 1.64s |    37 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

|     % |    Time | Parks | Callee    | Location                                                              |
| ----: | ------: | ----: | --------- | --------------------------------------------------------------------- |
| 78.9% |   1.14s |    21 | `block()` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode` |
| 21.1% | 304.8ms |     2 | `block()` | `java.util.concurrent.CompletableFuture$Signaller`                    |

##### `managedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Parks | Callee                                        | Location                            |
| -----: | ----: | ----: | --------------------------------------------- | ----------------------------------- |
| 100.0% | 1.44s |    23 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |   Time | Parks | Callee                                                  | Location                                  |
| -----: | -----: | ----: | ------------------------------------------------------- | ----------------------------------------- |
| 100.0% |  1.14s |    32 | `getTask()`                                             | `java.util.concurrent.ThreadPoolExecutor` |
|  <0.1% | 16.8µs |     3 | `processWorkerExit(ThreadPoolExecutor$Worker, boolean)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Parks | Callee                                 | Location                                  |
| -----: | ----: | ----: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 1.14s |    35 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `take()` (`java.util.concurrent.LinkedBlockingQueue`)

|      % |  Time | Parks | Callee                | Location                                                                |
| -----: | ----: | ----: | --------------------- | ----------------------------------------------------------------------- |
| 100.0% | 1.14s |    30 | `await()`             | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
|  <0.1% | 0.1ms |     2 | `lockInterruptibly()` | `java.util.concurrent.locks.ReentrantLock`                              |

##### `getTask()` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Parks | Callee   | Location                                   |
| -----: | ----: | ----: | -------- | ------------------------------------------ |
| 100.0% | 1.14s |    32 | `take()` | `java.util.concurrent.LinkedBlockingQueue` |

##### `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|     % |  Time | Parks | Callee                                            | Location                                                |
| ----: | ----: | ----: | ------------------------------------------------- | ------------------------------------------------------- |
| 99.9% | 1.14s |    21 | `managedBlock(ForkJoinPool$ManagedBlocker)`       | `java.util.concurrent.ForkJoinPool`                     |
|  0.1% | 0.8ms |     9 | `reacquire(AbstractQueuedSynchronizer$Node, int)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % |  Time | Parks | Callee                | Location                   |
| -----: | ----: | ----: | --------------------- | -------------------------- |
| 100.0% | 1.14s |    21 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `block()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`)

|      % |  Time | Parks | Callee   | Location                                 |
| -----: | ----: | ----: | -------- | ---------------------------------------- |
| 100.0% | 1.14s |    21 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|      % |    Time | Parks | Callee                | Location                   |
| -----: | ------: | ----: | --------------------- | -------------------------- |
| 100.0% | 496.6ms |     3 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % |    Time | Parks | Callee                    | Location                                 |
| -----: | ------: | ----: | ------------------------- | ---------------------------------------- |
| 100.0% | 496.2ms |     2 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Parks | Callee                  | Location                                                                |
| -----: | ------: | ----: | ----------------------- | ----------------------------------------------------------------------- |
| 100.0% | 496.2ms |     2 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Parks | Callee        | Location                       |
| -----: | ------: | ----: | ------------- | ------------------------------ |
| 100.0% | 496.2ms |     2 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Parks | Callee          | Location                       |
| -----: | ------: | ----: | --------------- | ------------------------------ |
| 100.0% | 496.2ms |     2 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % |    Time | Parks | Callee         | Location                       |
| -----: | ------: | ----: | -------------- | ------------------------------ |
| 100.0% | 496.2ms |     2 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

|      % |    Time | Parks | Callee  | Location           |
| -----: | ------: | ----: | ------- | ------------------ |
| 100.0% | 496.2ms |     2 | `run()` | `java.lang.Thread` |

##### `park(Object)` (`java.util.concurrent.locks.LockSupport`)

|      % |    Time | Parks | Callee                | Location                   |
| -----: | ------: | ----: | --------------------- | -------------------------- |
| 100.0% | 305.8ms |    16 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

## Hottest call stacks

Call stacks with the most time parked in their leaf frame.

|     % |    Time | Parks | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 58.7% |   1.14s |    21 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `block()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`) ← `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`) ← `managedBlock(ForkJoinPool$ManagedBlocker)` ← `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `take()` (`java.util.concurrent.LinkedBlockingQueue`) ← `getTask()` (`java.util.concurrent.ThreadPoolExecutor`) ← `runWorker(ThreadPoolExecutor$Worker)` ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 25.6% | 496.2ms |     2 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 15.7% | 304.8ms |     2 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park(Object)` (`java.util.concurrent.locks.LockSupport`) ← `block()` (`java.util.concurrent.CompletableFuture$Signaller`) ← `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`) ← `managedBlock(ForkJoinPool$ManagedBlocker)` ← `waitingGet(boolean)` (`java.util.concurrent.CompletableFuture`) ← `get()` ← `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`) ← `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700100e000`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
| <0.1% |   0.8ms |     9 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park(Object)` (`java.util.concurrent.locks.LockSupport`) ← `acquire(AbstractQueuedSynchronizer$Node, int, boolean, boolean, boolean, long)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer`) ← `reacquire(AbstractQueuedSynchronizer$Node, int)` ← `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `take()` (`java.util.concurrent.LinkedBlockingQueue`) ← `getTask()` (`java.util.concurrent.ThreadPoolExecutor`) ← `runWorker(ThreadPoolExecutor$Worker)` ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| <0.1% |   0.3ms |     1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitNanos(long)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `awaitTermination(long, TimeUnit)` (`java.util.concurrent.ThreadPoolExecutor`) ← `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`) ← `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700100e000`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                        |
| <0.1% |   0.1ms |     2 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park(Object)` (`java.util.concurrent.locks.LockSupport`) ← `acquire(AbstractQueuedSynchronizer$Node, int, boolean, boolean, boolean, long)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer`) ← `acquireInterruptibly(int)` ← `lockInterruptibly()` (`java.util.concurrent.locks.ReentrantLock$Sync`) ← `lockInterruptibly()` (`java.util.concurrent.locks.ReentrantLock`) ← `take()` (`java.util.concurrent.LinkedBlockingQueue`) ← `getTask()` (`java.util.concurrent.ThreadPoolExecutor`) ← `runWorker(ThreadPoolExecutor$Worker)` ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| <0.1% |  16.8µs |     3 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park(Object)` (`java.util.concurrent.locks.LockSupport`) ← `acquire(AbstractQueuedSynchronizer$Node, int, boolean, boolean, boolean, long)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer`) ← `acquire(int)` ← `lock()` (`java.util.concurrent.locks.ReentrantLock$Sync`) ← `lock()` (`java.util.concurrent.locks.ReentrantLock`) ← `processWorkerExit(ThreadPoolExecutor$Worker, boolean)` (`java.util.concurrent.ThreadPoolExecutor`) ← `runWorker(ThreadPoolExecutor$Worker)` ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

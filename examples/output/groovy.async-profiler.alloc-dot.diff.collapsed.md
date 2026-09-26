# Sampling profile diff

Collected 785 samples → 797 samples (+12 samples, +1.5%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Standard library |  +1.4% |   +11 | 99.6% → 99.5% | 782 → 793 |
| Ours             | +33.3% |    +1 |   0.4% → 0.5% |     3 → 4 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function                   | Location                                              |
| ------: | ----: | ----------: | ------: | -------------------------- | ----------------------------------------------------- |
|  +21.0% |   +13 | 7.9% → 9.4% | 62 → 75 | `transform`                | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`         |
|  +26.7% |   +12 | 5.7% → 7.2% | 45 → 57 | `valueOf`                  | `java.lang.Long`                                      |
|  +52.9% |    +9 | 2.2% → 3.3% | 17 → 26 | `fillInStackTrace`         | `java.lang.Throwable`                                 |
| +266.7% |    +8 | 0.4% → 1.4% |  3 → 11 | `linkLast`                 | `java.util.LinkedList`                                |
|  +15.9% |    +7 | 5.6% → 6.4% | 44 → 51 | `newNode`                  | `java.util.HashMap`                                   |
| +700.0% |    +7 | 0.1% → 1.0% |   1 → 8 | `copyOfRange`              | `java.util.Arrays`                                    |
|  +23.8% |    +5 | 2.7% → 3.3% | 21 → 26 | `put`                      | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`  |
| +133.3% |    +4 | 0.4% → 0.9% |   3 → 7 | `<init>`                   | `java.util.zip.InflaterInputStream`                   |
| +133.3% |    +4 | 0.4% → 0.9% |   3 → 7 | `<init>`                   | `jdk.internal.org.objectweb.asm.ByteVector`           |
| +400.0% |    +4 | 0.1% → 0.6% |   1 → 5 | `makeBlockInliningWrapper` | `java.lang.invoke.MethodHandleImpl`                   |
|     new |    +4 | 0.0% → 0.5% |   0 → 4 | `merge`                    | `java.lang.PublicMethods`                             |
|   +7.7% |    +3 | 5.0% → 5.3% | 39 → 42 | `join`                     | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |
|  +20.0% |    +3 | 1.9% → 2.3% | 15 → 18 | `copyOfRangeByte`          | `java.util.Arrays`                                    |
| +150.0% |    +3 | 0.3% → 0.6% |   2 → 5 | `newString`                | `java.lang.StringLatin1`                              |
|  +25.0% |    +3 | 1.5% → 1.9% | 12 → 15 | `listIterator`             | `java.util.LinkedList`                                |
| +300.0% |    +3 | 0.1% → 0.5% |   1 → 4 | `<init>`                   | `jdk.nio.zipfs.ZipFileSystem$IndexNode`               |
| +200.0% |    +2 | 0.1% → 0.4% |   1 → 3 | `getCachedContext`         | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |
|  +66.7% |    +2 | 0.4% → 0.6% |   3 → 5 | `<init>`                   | `java.util.regex.Matcher`                             |
|  +66.7% |    +2 | 0.4% → 0.6% |   3 → 5 | `<init>`                   | `jdk.internal.org.objectweb.asm.SymbolTable`          |
| +200.0% |    +2 | 0.1% → 0.4% |   1 → 3 | `make`                     | `java.lang.invoke.BoundMethodHandle$Species_L`        |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function                     | Location                                                   |
| ------: | ----: | ----------: | ------: | ---------------------------- | ---------------------------------------------------------- |
|  -85.7% |    -6 | 0.9% → 0.1% |   7 → 1 | `allocateInstance`           | `java.lang.invoke.DirectMethodHandle`                      |
| removed |    -6 | 0.8% → 0.0% |   6 → 0 | `<init>`                     | `java.util.regex.Pattern$BitClass`                         |
|  -12.5% |    -4 | 4.1% → 3.5% | 32 → 28 | `resize`                     | `java.util.HashMap`                                        |
|  -57.1% |    -4 | 0.9% → 0.4% |   7 → 3 | `stringFromByteBuffer`       | `jdk.internal.jimage.ImageStringsReader`                   |
|  -57.1% |    -4 | 0.9% → 0.4% |   7 → 3 | `<init>`                     | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`           |
|  -57.1% |    -4 | 0.9% → 0.4% |   7 → 3 | `getOrPutMethods`            | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`    |
|  -57.1% |    -4 | 0.9% → 0.4% |   7 → 3 | `<init>`                     | `java.lang.AbstractStringBuilder`                          |
| removed |    -3 | 0.4% → 0.0% |   3 → 0 | `closure`                    | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`     |
|  -75.0% |    -3 | 0.5% → 0.1% |   4 → 1 | `insertParameterTypes`       | `java.lang.invoke.MethodType`                              |
|  -20.0% |    -3 | 1.9% → 1.5% | 15 → 12 | `newInstance`                | `java.lang.reflect.Array`                                  |
|  -50.0% |    -3 | 0.8% → 0.4% |   6 → 3 | `addConstantUtf8`            | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|  -50.0% |    -3 | 0.8% → 0.4% |   6 → 3 | `equals`                     | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |
|  -33.3% |    -3 | 1.1% → 0.8% |   9 → 6 | `<init>`                     | `java.util.ArrayDeque`                                     |
|  -60.0% |    -3 | 0.6% → 0.3% |   5 → 2 | `allocateUninitializedArray` | `jdk.internal.misc.Unsafe`                                 |
| removed |    -3 | 0.4% → 0.0% |   3 → 0 | `visitMethod`                | `jdk.internal.org.objectweb.asm.ClassWriter`               |
|  -16.7% |    -2 | 1.5% → 1.3% | 12 → 10 | `getCachedContext`           | `groovyjarjarantlr4.v4.runtime.atn.ATN`                    |
|  -18.2% |    -2 | 1.4% → 1.1% |  11 → 9 | `compile`                    | `java.util.regex.Pattern`                                  |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `decompress`                 | `jdk.internal.jimage.ImageLocation`                        |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `make`                       | `java.lang.invoke.BoundMethodHandle$Species_LLL`           |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `intStream`                  | `java.util.stream.StreamSupport`                           |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|   Change | Delta |             % |   Samples | Function           | Location                                                                    |
| -------: | ----: | ------------: | --------: | ------------------ | --------------------------------------------------------------------------- |
|  +496.3% |  +268 |  6.9% → 40.4% |  54 → 322 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x00000070012da000`                         |
| +2600.0% |   +52 |   0.3% → 6.8% |    2 → 54 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x00000070012e7c00`                         |
| +2150.0% |   +43 |   0.3% → 5.6% |    2 → 45 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x00000070012e5800`                         |
| +1400.0% |   +42 |   0.4% → 5.6% |    3 → 45 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x00000070012e8000`                         |
|    +6.8% |   +41 | 76.6% → 80.6% | 601 → 642 | `doCall`           | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|    +6.8% |   +41 | 76.6% → 80.6% | 601 → 642 | `eachFile`         | `org.codehaus.groovy.runtime.ResourceGroovyMethods`                         |
|    +6.8% |   +41 | 76.6% → 80.6% | 601 → 642 | `doMethodInvoke`   | `org.codehaus.groovy.runtime.dgm$1076`                                      |
|    +6.8% |   +41 | 76.7% → 80.7% | 602 → 643 | `processDirectory` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|    +6.9% |   +41 | 76.1% → 80.1% | 597 → 638 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x0000007001181c00`                         |
|    +6.8% |   +41 | 76.7% → 80.7% | 602 → 643 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x00000070011ba000`                         |
|    +6.6% |   +40 | 77.6% → 81.4% | 609 → 649 | `invokeExact_MT`   | `java.lang.invoke.LambdaForm$MH.0x0000007001120c00`                         |
|    +9.4% |   +39 | 53.1% → 57.2% | 417 → 456 | `findMany`         | `org.codehaus.groovy.runtime.DefaultGroovyMethods`                          |
|    +9.4% |   +39 | 53.1% → 57.2% | 417 → 456 | `findAll`          | `org.codehaus.groovy.runtime.DefaultGroovyMethods`                          |
|    +9.4% |   +39 | 53.1% → 57.2% | 417 → 456 | `doMethodInvoke`   | `org.codehaus.groovy.runtime.dgm$251`                                       |
|    +6.2% |   +38 | 77.7% → 81.3% | 610 → 648 | `delegate`         | `java.lang.invoke.DelegatingMethodHandle$Holder`                            |
|    +9.1% |   +38 | 53.0% → 57.0% | 416 → 454 | `doCall`           | `org.codenarc.analyzer.AbstractSourceAnalyzer$_collectViolations_closure1`  |
|    +8.8% |   +37 | 53.6% → 57.5% | 421 → 458 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x00000070010dcc00`                         |
|    +6.2% |   +37 | 76.1% → 79.5% | 597 → 634 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000700120f800`                         |
|    +6.1% |   +37 | 77.3% → 80.8% | 607 → 644 | `analyze`          | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|    +6.1% |   +37 | 77.3% → 80.8% | 607 → 644 | `invokeInterface`  | `java.lang.invoke.LambdaForm$DMH.0x0000007001094c00`                        |

##### Standard library

|   Change | Delta |             % |   Samples | Function          | Location                                             |
| -------: | ----: | ------------: | --------: | ----------------- | ---------------------------------------------------- |
|  +496.3% |  +268 |  6.9% → 40.4% |  54 → 322 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070012da000`  |
| +2600.0% |   +52 |   0.3% → 6.8% |    2 → 54 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070012e7c00`  |
| +2150.0% |   +43 |   0.3% → 5.6% |    2 → 45 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070012e5800`  |
| +1400.0% |   +42 |   0.4% → 5.6% |    3 → 45 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070012e8000`  |
|    +6.8% |   +41 | 76.6% → 80.6% | 601 → 642 | `eachFile`        | `org.codehaus.groovy.runtime.ResourceGroovyMethods`  |
|    +6.8% |   +41 | 76.6% → 80.6% | 601 → 642 | `doMethodInvoke`  | `org.codehaus.groovy.runtime.dgm$1076`               |
|    +6.9% |   +41 | 76.1% → 80.1% | 597 → 638 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000007001181c00`  |
|    +6.8% |   +41 | 76.7% → 80.7% | 602 → 643 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070011ba000`  |
|    +6.6% |   +40 | 77.6% → 81.4% | 609 → 649 | `invokeExact_MT`  | `java.lang.invoke.LambdaForm$MH.0x0000007001120c00`  |
|    +9.4% |   +39 | 53.1% → 57.2% | 417 → 456 | `findMany`        | `org.codehaus.groovy.runtime.DefaultGroovyMethods`   |
|    +9.4% |   +39 | 53.1% → 57.2% | 417 → 456 | `findAll`         | `org.codehaus.groovy.runtime.DefaultGroovyMethods`   |
|    +9.4% |   +39 | 53.1% → 57.2% | 417 → 456 | `doMethodInvoke`  | `org.codehaus.groovy.runtime.dgm$251`                |
|    +6.2% |   +38 | 77.7% → 81.3% | 610 → 648 | `delegate`        | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
|    +8.8% |   +37 | 53.6% → 57.5% | 421 → 458 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070010dcc00`  |
|    +6.2% |   +37 | 76.1% → 79.5% | 597 → 634 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000700120f800`  |
|    +6.1% |   +37 | 77.3% → 80.8% | 607 → 644 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x0000007001094c00` |
|    +5.5% |   +36 | 83.9% → 87.2% | 659 → 695 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000070010d3800`  |
|    +6.2% |   +36 | 74.1% → 77.5% | 582 → 618 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000007001212800`  |
|    +6.1% |   +36 | 74.9% → 78.3% | 588 → 624 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000007001200800`  |
|    +6.2% |   +36 | 74.1% → 77.5% | 582 → 618 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000007001212400`  |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function                  | Location                                            |
| -----: | ----: | ------------: | --------: | ------------------------- | --------------------------------------------------- |
| -99.7% |  -297 |  38.0% → 0.1% |   298 → 1 | `invoke`                  | `java.lang.invoke.LambdaForm$MH.0x00000070012e3400` |
| -97.8% |   -44 |   5.7% → 0.1% |    45 → 1 | `invoke`                  | `java.lang.invoke.LambdaForm$MH.0x00000070012e7400` |
| -97.7% |   -43 |   5.6% → 0.1% |    44 → 1 | `invoke`                  | `java.lang.invoke.LambdaForm$MH.0x00000070012e4c00` |
| -13.8% |   -28 | 25.9% → 22.0% | 203 → 175 | `invoke`                  | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00` |
| -96.2% |   -25 |   3.3% → 0.1% |    26 → 1 | `invoke`                  | `java.lang.invoke.LambdaForm$MH.0x0000007001311000` |
| -11.7% |   -16 | 17.5% → 15.2% | 137 → 121 | `invoke`                  | `java.lang.invoke.LambdaForm$MH.0x00000070011b0400` |
| -27.6% |   -16 |   7.4% → 5.3% |   58 → 42 | `<clinit>`                | `org.codehaus.groovy.runtime.FormatHelper`          |
| -27.6% |   -16 |   7.4% → 5.3% |   58 → 42 | `asType`                  | `org.codehaus.groovy.runtime.DefaultGroovyMethods`  |
| -27.6% |   -16 |   7.4% → 5.3% |   58 → 42 | `doMethodInvoke`          | `org.codehaus.groovy.runtime.dgm$59`                |
| -27.3% |   -15 |   7.0% → 5.0% |   55 → 40 | `doFindClasses`           | `org.codehaus.groovy.vmplugin.v9.Java9`             |
| -71.4% |   -15 |   2.7% → 0.8% |    21 → 6 | `getTargetPropertyInfo`   | `java.beans.Introspector`                           |
| -25.5% |   -14 |   7.0% → 5.1% |   55 → 41 | `getDefaultImportClasses` | `org.codehaus.groovy.vmplugin.v9.Java9`             |
| -23.0% |   -14 |   7.8% → 5.9% |   61 → 47 | `invokeConstructor`       | `groovy.lang.MetaClassImpl`                         |
| -23.0% |   -14 |   7.8% → 5.9% |   61 → 47 | `invokeConstructorOf`     | `org.codehaus.groovy.runtime.InvokerHelper`         |
| -23.7% |   -14 |   7.5% → 5.6% |   59 → 45 | `visitClass`              | `org.codenarc.rule.AbstractAstVisitor`              |
| -17.6% |   -13 |   9.4% → 7.7% |   74 → 61 | `each`                    | `org.codehaus.groovy.runtime.DefaultGroovyMethods`  |
| -23.6% |   -13 |   7.0% → 5.3% |   55 → 42 | `<clinit>`                | `org.codehaus.groovy.control.ResolveVisitor`        |
| -27.1% |   -13 |   6.1% → 4.4% |   48 → 35 | `visitMethod`             | `org.codenarc.rule.AbstractAstVisitor`              |
| -12.4% |   -12 | 12.4% → 10.7% |   97 → 85 | `reinitialize`            | `groovy.lang.MetaClassImpl`                         |
| -12.4% |   -12 | 12.4% → 10.7% |   97 → 85 | `initialize`              | `groovy.lang.MetaClassImpl`                         |

##### Standard library

| Change | Delta |             % |   Samples | Function                  | Location                                            |
| -----: | ----: | ------------: | --------: | ------------------------- | --------------------------------------------------- |
| -99.7% |  -297 |  38.0% → 0.1% |   298 → 1 | `invoke`                  | `java.lang.invoke.LambdaForm$MH.0x00000070012e3400` |
| -97.8% |   -44 |   5.7% → 0.1% |    45 → 1 | `invoke`                  | `java.lang.invoke.LambdaForm$MH.0x00000070012e7400` |
| -97.7% |   -43 |   5.6% → 0.1% |    44 → 1 | `invoke`                  | `java.lang.invoke.LambdaForm$MH.0x00000070012e4c00` |
| -13.8% |   -28 | 25.9% → 22.0% | 203 → 175 | `invoke`                  | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00` |
| -96.2% |   -25 |   3.3% → 0.1% |    26 → 1 | `invoke`                  | `java.lang.invoke.LambdaForm$MH.0x0000007001311000` |
| -11.7% |   -16 | 17.5% → 15.2% | 137 → 121 | `invoke`                  | `java.lang.invoke.LambdaForm$MH.0x00000070011b0400` |
| -27.6% |   -16 |   7.4% → 5.3% |   58 → 42 | `<clinit>`                | `org.codehaus.groovy.runtime.FormatHelper`          |
| -27.6% |   -16 |   7.4% → 5.3% |   58 → 42 | `asType`                  | `org.codehaus.groovy.runtime.DefaultGroovyMethods`  |
| -27.6% |   -16 |   7.4% → 5.3% |   58 → 42 | `doMethodInvoke`          | `org.codehaus.groovy.runtime.dgm$59`                |
| -27.3% |   -15 |   7.0% → 5.0% |   55 → 40 | `doFindClasses`           | `org.codehaus.groovy.vmplugin.v9.Java9`             |
| -71.4% |   -15 |   2.7% → 0.8% |    21 → 6 | `getTargetPropertyInfo`   | `java.beans.Introspector`                           |
| -25.5% |   -14 |   7.0% → 5.1% |   55 → 41 | `getDefaultImportClasses` | `org.codehaus.groovy.vmplugin.v9.Java9`             |
| -23.0% |   -14 |   7.8% → 5.9% |   61 → 47 | `invokeConstructor`       | `groovy.lang.MetaClassImpl`                         |
| -23.0% |   -14 |   7.8% → 5.9% |   61 → 47 | `invokeConstructorOf`     | `org.codehaus.groovy.runtime.InvokerHelper`         |
| -17.6% |   -13 |   9.4% → 7.7% |   74 → 61 | `each`                    | `org.codehaus.groovy.runtime.DefaultGroovyMethods`  |
| -23.6% |   -13 |   7.0% → 5.3% |   55 → 42 | `<clinit>`                | `org.codehaus.groovy.control.ResolveVisitor`        |
| -12.4% |   -12 | 12.4% → 10.7% |   97 → 85 | `reinitialize`            | `groovy.lang.MetaClassImpl`                         |
| -12.4% |   -12 | 12.4% → 10.7% |   97 → 85 | `initialize`              | `groovy.lang.MetaClassImpl`                         |
| -20.0% |   -12 |   7.6% → 6.0% |   60 → 48 | `doMethodInvoke`          | `org.codehaus.groovy.runtime.dgm$207`               |
| -28.6% |   -12 |   5.4% → 3.8% |   42 → 30 | `walkFileTree`            | `java.nio.file.Files`                               |

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

|  Change | Delta |             % |   Samples | Function           | Location                                                                    |
| ------: | ----: | ------------: | --------: | ------------------ | --------------------------------------------------------------------------- |
| +141.5% |  +423 | 38.1% → 90.6% | 299 → 722 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400`                         |
| +137.9% |  +411 | 38.0% → 89.0% | 298 → 709 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00`                         |
| +279.6% |  +151 |  6.9% → 25.7% |  54 → 205 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000700109ac00`                         |
|  +24.5% |  +142 | 73.9% → 90.6% | 580 → 722 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000`                         |
| +297.7% |  +131 |  5.6% → 22.0% |  44 → 175 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00`                         |
|  +66.8% |  +127 | 24.2% → 39.8% | 190 → 317 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x00000070012e4000`                         |
| +778.6% |  +109 |  1.8% → 15.4% |  14 → 123 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x00000070010d3400`                         |
| +171.1% |   +77 |  5.7% → 15.3% |  45 → 122 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x00000070012acc00`                         |
|  +12.2% |   +72 | 74.9% → 82.8% | 588 → 660 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x00000070010d2400`                         |
|  +11.3% |   +66 | 74.1% → 81.3% | 582 → 648 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x00000070010d8800`                         |
|   +9.7% |   +56 | 73.6% → 79.5% | 578 → 634 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000700120f800`                         |
|   +6.9% |   +48 | 88.0% → 92.7% | 691 → 739 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800`                         |
|   +7.2% |   +42 | 74.1% → 78.3% | 582 → 624 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x0000007001200800`                         |
|   +6.8% |   +41 | 76.6% → 80.6% | 601 → 642 | `doCall`           | `org.codenarc.analyzer.FilesystemSourceAnalyzer$_processDirectory_closure1` |
|   +6.8% |   +41 | 76.6% → 80.6% | 601 → 642 | `eachFile`         | `org.codehaus.groovy.runtime.ResourceGroovyMethods`                         |
|   +6.8% |   +41 | 76.6% → 80.6% | 601 → 642 | `doMethodInvoke`   | `org.codehaus.groovy.runtime.dgm$1076`                                      |
|   +6.8% |   +41 | 76.7% → 80.7% | 602 → 643 | `processDirectory` | `org.codenarc.analyzer.FilesystemSourceAnalyzer`                            |
|   +6.6% |   +40 | 77.6% → 81.4% | 609 → 649 | `invokeExact_MT`   | `java.lang.invoke.LambdaForm$MH.0x0000007001120c00`                         |
|   +9.4% |   +39 | 53.1% → 57.2% | 417 → 456 | `findMany`         | `org.codehaus.groovy.runtime.DefaultGroovyMethods`                          |
|   +9.4% |   +39 | 53.1% → 57.2% | 417 → 456 | `findAll`          | `org.codehaus.groovy.runtime.DefaultGroovyMethods`                          |

##### Standard library

|  Change | Delta |             % |   Samples | Function         | Location                                            |
| ------: | ----: | ------------: | --------: | ---------------- | --------------------------------------------------- |
| +141.5% |  +423 | 38.1% → 90.6% | 299 → 722 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c6400` |
| +137.9% |  +411 | 38.0% → 89.0% | 298 → 709 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700109bc00` |
| +279.6% |  +151 |  6.9% → 25.7% |  54 → 205 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700109ac00` |
|  +24.5% |  +142 | 73.9% → 90.6% | 580 → 722 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010c7000` |
| +297.7% |  +131 |  5.6% → 22.0% |  44 → 175 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010abc00` |
|  +66.8% |  +127 | 24.2% → 39.8% | 190 → 317 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070012e4000` |
| +778.6% |  +109 |  1.8% → 15.4% |  14 → 123 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010d3400` |
| +171.1% |   +77 |  5.7% → 15.3% |  45 → 122 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070012acc00` |
|  +12.2% |   +72 | 74.9% → 82.8% | 588 → 660 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010d2400` |
|  +11.3% |   +66 | 74.1% → 81.3% | 582 → 648 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010d8800` |
|   +9.7% |   +56 | 73.6% → 79.5% | 578 → 634 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000700120f800` |
|   +6.9% |   +48 | 88.0% → 92.7% | 691 → 739 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000070010a9800` |
|   +7.2% |   +42 | 74.1% → 78.3% | 582 → 624 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000007001200800` |
|   +6.8% |   +41 | 76.6% → 80.6% | 601 → 642 | `eachFile`       | `org.codehaus.groovy.runtime.ResourceGroovyMethods` |
|   +6.8% |   +41 | 76.6% → 80.6% | 601 → 642 | `doMethodInvoke` | `org.codehaus.groovy.runtime.dgm$1076`              |
|   +6.6% |   +40 | 77.6% → 81.4% | 609 → 649 | `invokeExact_MT` | `java.lang.invoke.LambdaForm$MH.0x0000007001120c00` |
|   +9.4% |   +39 | 53.1% → 57.2% | 417 → 456 | `findMany`       | `org.codehaus.groovy.runtime.DefaultGroovyMethods`  |
|   +9.4% |   +39 | 53.1% → 57.2% | 417 → 456 | `findAll`        | `org.codehaus.groovy.runtime.DefaultGroovyMethods`  |
|   +9.4% |   +39 | 53.1% → 57.2% | 417 → 456 | `doMethodInvoke` | `org.codehaus.groovy.runtime.dgm$251`               |
|   +6.2% |   +38 | 77.7% → 81.3% | 610 → 648 | `delegate`       | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Standard library

| Change | Delta |             % |   Samples | Function        | Location                                                                |
| -----: | ----: | ------------: | --------: | --------------- | ----------------------------------------------------------------------- |
| -55.6% |  -404 | 92.5% → 40.4% | 726 → 322 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070012da000`                     |
| -49.6% |  -316 | 81.1% → 40.3% | 637 → 321 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070012da800`                     |
| -82.9% |  -248 |  38.1% → 6.4% |  299 → 51 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070010c7c00`                     |
| -96.9% |  -126 |  16.6% → 0.5% |   130 → 4 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070012e2400`                     |
| -66.2% |   -88 |  16.9% → 5.6% |  133 → 45 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070012e8000`                     |
| -60.6% |   -83 |  17.5% → 6.8% |  137 → 54 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070012e7c00`                     |
| -40.4% |   -82 | 25.9% → 15.2% | 203 → 121 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070011b0400`                     |
| -86.5% |   -45 |   6.6% → 0.9% |    52 → 7 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000007001088400`                     |
|  -5.4% |   -37 | 86.6% → 80.7% | 680 → 643 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070011ba000`                     |
| -83.8% |   -31 |   4.7% → 0.8% |    37 → 6 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070012be800`                     |
| -49.2% |   -29 |   7.5% → 3.8% |   59 → 30 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070010c7400`                     |
| -59.0% |   -23 |   5.0% → 2.0% |   39 → 16 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000007001109800`                     |
| -84.6% |   -22 |   3.3% → 0.5% |    26 → 4 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070012e9000`                     |
| -40.0% |   -20 |   6.4% → 3.8% |   50 → 30 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070012fbc00`                     |
| -81.8% |   -18 |   2.8% → 0.5% |    22 → 4 | `apply`         | `org.apache.groovy.parser.antlr4.AstBuilder$$Lambda.0x00000070012a5680` |
| -65.4% |   -17 |   3.3% → 1.1% |    26 → 9 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000007001300c00`                     |
| -84.2% |   -16 |   2.4% → 0.4% |    19 → 3 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x000000700130f000`                    |
| -61.5% |   -16 |   3.3% → 1.3% |   26 → 10 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000070010cc000`                     |
| -27.6% |   -16 |   7.4% → 5.3% |   58 → 42 | `<clinit>`      | `org.codehaus.groovy.runtime.FormatHelper`                              |
| -27.6% |   -16 |   7.4% → 5.3% |   58 → 42 | `asType`        | `org.codehaus.groovy.runtime.DefaultGroovyMethods`                      |

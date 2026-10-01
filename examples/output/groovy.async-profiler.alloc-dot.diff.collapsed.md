# Sampling profile diff

Collected 794 samples → 769 samples (-25 samples, -3.1%).

| Category         |  Change | Delta |              % |   Samples |
| ---------------- | ------: | ----: | -------------: | --------: |
| Standard library |   -3.0% |   -24 | 99.9% → 100.0% | 793 → 769 |
| Ours             | removed |    -1 |    0.1% → 0.0% |     1 → 0 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function      | Location                                                   |
| ------: | ----: | ----------: | ------: | ------------- | ---------------------------------------------------------- |
|  +32.6% |   +14 | 5.4% → 7.4% | 43 → 57 | `copyOf`      | `java.util.Arrays`                                         |
|  +23.3% |   +14 | 7.6% → 9.6% | 60 → 74 | `transform`   | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`              |
| +600.0% |    +6 | 0.1% → 0.9% |   1 → 7 | `newArray`    | `java.lang.reflect.Array`                                  |
|  +10.6% |    +5 | 5.9% → 6.8% | 47 → 52 | `newNode`     | `java.util.HashMap`                                        |
|  +20.8% |    +5 | 3.0% → 3.8% | 24 → 29 | `resize`      | `java.util.HashMap`                                        |
| +133.3% |    +4 | 0.4% → 0.9% |   3 → 7 | `grow`        | `java.util.ArrayList`                                      |
|  +80.0% |    +4 | 0.6% → 1.2% |   5 → 9 | `<init>`      | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`           |
|  +33.3% |    +3 | 1.1% → 1.6% |  9 → 12 | `fromCache`   | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
|  +60.0% |    +3 | 0.6% → 1.0% |   5 → 8 | `copyOfRange` | `java.util.Arrays`                                         |
| +300.0% |    +3 | 0.1% → 0.5% |   1 → 4 | `closure`     | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`     |
|  +27.3% |    +3 | 1.4% → 1.8% | 11 → 14 | `optimize`    | `java.util.regex.Pattern$BnM`                              |
|  +30.0% |    +3 | 1.3% → 1.7% | 10 → 13 | `getChild`    | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |
|     new |    +3 | 0.0% → 0.4% |   0 → 3 | `make`        | `java.lang.invoke.BoundMethodHandle$Species_LLLLL`         |
| +300.0% |    +3 | 0.1% → 0.5% |   1 → 4 | `matcher`     | `java.util.regex.Pattern`                                  |
|     new |    +3 | 0.0% → 0.4% |   0 → 3 | `merge`       | `java.lang.PublicMethods`                                  |
| +300.0% |    +3 | 0.1% → 0.5% |   1 → 4 | `addAnyChild` | `groovyjarjarantlr4.v4.runtime.ParserRuleContext`          |
|  +75.0% |    +3 | 0.5% → 0.9% |   4 → 7 | `create`      | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`              |
|     new |    +3 | 0.0% → 0.4% |   0 → 3 | `<init>`      | `java.io.BufferedReader`                                   |
|     new |    +3 | 0.0% → 0.4% |   0 → 3 | `spliterator` | `java.util.Spliterators`                                   |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `getFullName` | `jdk.internal.jimage.ImageLocation`                        |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function               | Location                                              |
| ------: | ----: | ----------: | ------: | ---------------------- | ----------------------------------------------------- |
|  -25.0% |   -13 | 6.5% → 5.1% | 52 → 39 | `join`                 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |
|  -61.1% |   -11 | 2.3% → 0.9% |  18 → 7 | `listIterator`         | `java.util.LinkedList`                                |
|  -18.4% |    -9 | 6.2% → 5.2% | 49 → 40 | `valueOf`              | `java.lang.Long`                                      |
|  -66.7% |    -8 | 1.5% → 0.5% |  12 → 4 | `enlarge`              | `jdk.internal.org.objectweb.asm.ByteVector`           |
|  -60.0% |    -6 | 1.3% → 0.5% |  10 → 4 | `iterator`             | `java.util.ArrayList`                                 |
|  -33.3% |    -5 | 1.9% → 1.3% | 15 → 10 | `newInstance`          | `java.lang.reflect.Array`                             |
|  -19.2% |    -5 | 3.3% → 2.7% | 26 → 21 | `fillInStackTrace`     | `java.lang.Throwable`                                 |
|  -38.5% |    -5 | 1.6% → 1.0% |  13 → 8 | `compile`              | `java.util.regex.Pattern`                             |
| removed |    -4 | 0.5% → 0.0% |   4 → 0 | `toString`             | `java.lang.StringBuilder`                             |
|  -80.0% |    -4 | 0.6% → 0.1% |   5 → 1 | `insertParameterTypes` | `java.lang.invoke.MethodType`                         |
| removed |    -4 | 0.5% → 0.0% |   4 → 0 | `<init>`               | `java.lang.AbstractStringBuilder`                     |
| removed |    -4 | 0.5% → 0.0% |   4 → 0 | `<init>`               | `java.util.ArrayList`                                 |
|  -15.8% |    -3 | 2.4% → 2.1% | 19 → 16 | `createEntryListArray` | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`  |
|  -23.1% |    -3 | 1.6% → 1.3% | 13 → 10 | `getCachedContext`     | `groovyjarjarantlr4.v4.runtime.atn.ATN`               |
|  -18.8% |    -3 | 2.0% → 1.7% | 16 → 13 | `copyOfRangeByte`      | `java.util.Arrays`                                    |
|  -60.0% |    -3 | 0.6% → 0.3% |   5 → 2 | `<init>`               | `jdk.internal.org.objectweb.asm.SymbolTable`          |
|  -25.0% |    -3 | 1.5% → 1.2% |  12 → 9 | `makeImpl`             | `java.lang.invoke.MethodType`                         |
| removed |    -3 | 0.4% → 0.0% |   3 → 0 | `make`                 | `java.lang.invoke.BoundMethodHandle$Species_L`        |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `<init>`               | `org.codehaus.groovy.reflection.CachedClass`          |
|  -22.2% |    -2 | 1.1% → 0.9% |   9 → 7 | `copy`                 | `java.lang.reflect.Method`                            |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Standard library

|   Change | Delta |             % |   Samples | Function           | Location                                                                                                                                        |
| -------: | ----: | ------------: | --------: | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
|  +103.4% |  +361 | 44.0% → 92.3% | 349 → 710 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000d0012dd800 → java.lang.invoke.LambdaForm$MH.0x00000070010a9800`                                         |
| +2745.5% |  +302 |  1.4% → 40.7% |  11 → 313 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000d001031400 → java.lang.invoke.LambdaForm$MH.0x00000070012da000`                                         |
|   +83.9% |  +292 | 43.8% → 83.2% | 348 → 640 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000d0012de000 → java.lang.invoke.LambdaForm$MH.0x00000070010c8000`                                         |
| +1275.0% |  +153 |  1.5% → 21.5% |  12 → 165 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000d0012fb000 → java.lang.invoke.LambdaForm$MH.0x00000070010abc00`                                         |
| +2625.0% |  +105 |  0.5% → 14.2% |   4 → 109 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000d001088400 → java.lang.invoke.LambdaForm$MH.0x00000070012acc00`                                         |
|  +825.0% |   +99 |  1.5% → 14.4% |  12 → 111 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000d0012fb800 → java.lang.invoke.LambdaForm$MH.0x00000070011b0400`                                         |
| +1022.2% |   +92 |  1.1% → 13.1% |   9 → 101 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000d0010cc400 → java.lang.invoke.LambdaForm$MH.0x00000070010d3400`                                         |
|    +6.1% |   +39 | 80.1% → 87.8% | 636 → 675 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000d0011ba400 → java.lang.invoke.LambdaForm$MH.0x000000700109bc00`                                         |
| +2900.0% |   +29 |   0.1% → 3.9% |    1 → 30 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000d0012fc400 → java.lang.invoke.LambdaForm$MH.0x00000070012e5800`                                         |
|  +560.0% |   +28 |   0.6% → 4.3% |    5 → 33 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000d001130400 → java.lang.invoke.LambdaForm$MH.0x0000007001130000`                                         |
|  +440.0% |   +22 |   0.6% → 3.5% |    5 → 27 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000d001205000 → java.lang.invoke.LambdaForm$MH.0x00000070010c7400`                                         |
|  +175.0% |   +21 |   1.5% → 4.3% |   12 → 33 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000d0012fbc00 → java.lang.invoke.LambdaForm$MH.0x00000070012e8000`                                         |
|  +700.0% |   +21 |   0.4% → 3.1% |    3 → 24 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000d001304000 → java.lang.invoke.LambdaForm$MH.0x0000007001216000`                                         |
| +1000.0% |   +20 |   0.3% → 2.9% |    2 → 22 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000d0012e8800 → java.lang.invoke.LambdaForm$MH.0x00000070012fb400`                                         |
|  +380.0% |   +19 |   0.6% → 3.1% |    5 → 24 | `apply`            | `org.apache.groovy.parser.antlr4.AstBuilder$$Lambda.0x000000d00129f2a8 → org.apache.groovy.parser.antlr4.AstBuilder$$Lambda.0x000000700129e830` |
|   +20.5% |   +17 | 10.5% → 13.0% |  83 → 100 | `getEpsilonTarget` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`                                                                                          |
|  +850.0% |   +17 |   0.3% → 2.5% |    2 → 19 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000d0012cbc00 → java.lang.invoke.LambdaForm$MH.0x000000700120e400`                                         |
|    +2.4% |   +15 | 77.8% → 82.3% | 618 → 633 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000d001212000 → java.lang.invoke.LambdaForm$MH.0x00000070010d2400`                                         |
|  +750.0% |   +15 |   0.3% → 2.2% |    2 → 17 | `invoke`           | `java.lang.invoke.LambdaForm$MH.0x000000d0010dc800 → java.lang.invoke.LambdaForm$MH.0x0000007001018400`                                         |
|      new |   +15 |   0.0% → 2.0% |    0 → 15 | `invokeVirtual`    | `java.lang.invoke.LambdaForm$DMH.0x0000007001105000`                                                                                            |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function            | Location                                                                                                |
| -----: | ----: | ------------: | --------: | ------------------- | ------------------------------------------------------------------------------------------------------- |
| -56.4% |  -405 | 90.4% → 40.7% | 718 → 313 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000d0010c6800 → java.lang.invoke.LambdaForm$MH.0x00000070012da800` |
| -55.9% |  -396 | 89.2% → 40.6% | 708 → 312 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000d00109a000 → java.lang.invoke.LambdaForm$MH.0x00000070012e4000` |
| -91.7% |  -176 |  24.2% → 2.1% |  192 → 16 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000d001099000 → java.lang.invoke.LambdaForm$MH.0x0000007001181400` |
| -80.7% |  -155 |  24.2% → 4.8% |  192 → 37 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000d0010ad800 → java.lang.invoke.LambdaForm$MH.0x0000007001121000` |
| -41.0% |  -141 | 43.3% → 26.4% | 344 → 203 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000d0012e3800 → java.lang.invoke.LambdaForm$MH.0x000000700109ac00` |
| -16.4% |  -118 | 90.4% → 78.0% | 718 → 600 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000d0010c7400 → java.lang.invoke.LambdaForm$MH.0x0000007001205c00` |
| -80.3% |  -110 |  17.3% → 3.5% |  137 → 27 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000d0011b0400 → java.lang.invoke.LambdaForm$MH.0x0000007001104000` |
| -72.6% |   -90 |  15.6% → 4.4% |  124 → 34 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000d0010d3800 → java.lang.invoke.LambdaForm$MH.0x000000700112d800` |
| -68.2% |   -88 |  16.2% → 5.3% |  129 → 41 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000d0012a8800 → java.lang.invoke.LambdaForm$MH.0x00000070010c7c00` |
|  -7.8% |   -58 | 93.3% → 88.8% | 741 → 683 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000d0010ab400 → java.lang.invoke.LambdaForm$MH.0x00000070010c7000` |
| -98.2% |   -56 |   7.2% → 0.1% |    57 → 1 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000d0012e7400 → java.lang.invoke.LambdaForm$MH.0x0000007001311c00` |
|  -8.3% |   -55 | 83.1% → 78.7% | 660 → 605 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000d0010d2800 → java.lang.invoke.LambdaForm$MH.0x0000007001200800` |
| -81.3% |   -52 |   8.1% → 1.6% |   64 → 12 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000d0010c8000 → java.lang.invoke.LambdaForm$MH.0x000000700112c000` |
| -98.0% |   -48 |   6.2% → 0.1% |    49 → 1 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000d0012e7800 → java.lang.invoke.LambdaForm$MH.0x0000007001312400` |
|  -7.0% |   -45 | 81.4% → 78.2% | 646 → 601 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000d0010d8c00 → java.lang.invoke.LambdaForm$MH.0x0000007001212800` |
| -97.8% |   -45 |   5.8% → 0.1% |    46 → 1 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000d0012e5000 → java.lang.invoke.LambdaForm$MH.0x0000007001313400` |
|  -7.3% |   -42 | 72.2% → 69.1% | 573 → 531 | `selectMethod`      | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                         |
|  -5.2% |   -37 | 90.2% → 88.3% | 716 → 679 | `invokeSpecial`     | `java.lang.invoke.DirectMethodHandle$Holder`                                                            |
|  -6.1% |   -37 | 76.2% → 73.9% | 605 → 568 | `collectViolations` | `org.codenarc.analyzer.AbstractSourceAnalyzer`                                                          |
|  -4.7% |   -36 | 97.5% → 96.0% | 774 → 738 | `main`              | `org.codenarc.CodeNarc`                                                                                 |

##### Standard library

| Change | Delta |             % |   Samples | Function        | Location                                                                                                |
| -----: | ----: | ------------: | --------: | --------------- | ------------------------------------------------------------------------------------------------------- |
| -56.4% |  -405 | 90.4% → 40.7% | 718 → 313 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000d0010c6800 → java.lang.invoke.LambdaForm$MH.0x00000070012da800` |
| -55.9% |  -396 | 89.2% → 40.6% | 708 → 312 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000d00109a000 → java.lang.invoke.LambdaForm$MH.0x00000070012e4000` |
| -91.7% |  -176 |  24.2% → 2.1% |  192 → 16 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000d001099000 → java.lang.invoke.LambdaForm$MH.0x0000007001181400` |
| -80.7% |  -155 |  24.2% → 4.8% |  192 → 37 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000d0010ad800 → java.lang.invoke.LambdaForm$MH.0x0000007001121000` |
| -41.0% |  -141 | 43.3% → 26.4% | 344 → 203 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000d0012e3800 → java.lang.invoke.LambdaForm$MH.0x000000700109ac00` |
| -16.4% |  -118 | 90.4% → 78.0% | 718 → 600 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000d0010c7400 → java.lang.invoke.LambdaForm$MH.0x0000007001205c00` |
| -80.3% |  -110 |  17.3% → 3.5% |  137 → 27 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000d0011b0400 → java.lang.invoke.LambdaForm$MH.0x0000007001104000` |
| -72.6% |   -90 |  15.6% → 4.4% |  124 → 34 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000d0010d3800 → java.lang.invoke.LambdaForm$MH.0x000000700112d800` |
| -68.2% |   -88 |  16.2% → 5.3% |  129 → 41 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000d0012a8800 → java.lang.invoke.LambdaForm$MH.0x00000070010c7c00` |
|  -7.8% |   -58 | 93.3% → 88.8% | 741 → 683 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000d0010ab400 → java.lang.invoke.LambdaForm$MH.0x00000070010c7000` |
| -98.2% |   -56 |   7.2% → 0.1% |    57 → 1 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000d0012e7400 → java.lang.invoke.LambdaForm$MH.0x0000007001311c00` |
|  -8.3% |   -55 | 83.1% → 78.7% | 660 → 605 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000d0010d2800 → java.lang.invoke.LambdaForm$MH.0x0000007001200800` |
| -81.3% |   -52 |   8.1% → 1.6% |   64 → 12 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000d0010c8000 → java.lang.invoke.LambdaForm$MH.0x000000700112c000` |
| -98.0% |   -48 |   6.2% → 0.1% |    49 → 1 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000d0012e7800 → java.lang.invoke.LambdaForm$MH.0x0000007001312400` |
|  -7.0% |   -45 | 81.4% → 78.2% | 646 → 601 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000d0010d8c00 → java.lang.invoke.LambdaForm$MH.0x0000007001212800` |
| -97.8% |   -45 |   5.8% → 0.1% |    46 → 1 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000d0012e5000 → java.lang.invoke.LambdaForm$MH.0x0000007001313400` |
|  -7.3% |   -42 | 72.2% → 69.1% | 573 → 531 | `selectMethod`  | `org.codehaus.groovy.vmplugin.v8.IndyInterface`                                                         |
|  -5.2% |   -37 | 90.2% → 88.3% | 716 → 679 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`                                                            |
|  -5.0% |   -35 | 87.9% → 86.2% | 698 → 663 | `invokeImpl`    | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                       |
|  -5.0% |   -35 | 87.9% → 86.2% | 698 → 663 | `invoke`        | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                       |

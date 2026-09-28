# Sampling profile diff

Collected 767 samples → 783 samples (+16 samples, +2.1%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Standard library |  +2.0% |   +15 | 99.7% → 99.6% | 765 → 780 |
| Ours             | +50.0% |    +1 |   0.3% → 0.4% |     2 → 3 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function                | Location                                                   |
| ------: | ----: | ----------: | ------: | ----------------------- | ---------------------------------------------------------- |
| +280.0% |   +14 | 0.7% → 2.4% |  5 → 19 | `linkLast`              | `java.util.LinkedList`                                     |
| +400.0% |    +8 | 0.3% → 1.3% |  2 → 10 | `stringFromByteBuffer`  | `jdk.internal.jimage.ImageStringsReader`                   |
| +100.0% |    +7 | 0.9% → 1.8% |  7 → 14 | `newInstance`           | `java.lang.reflect.Array`                                  |
|  +58.3% |    +7 | 1.6% → 2.4% | 12 → 19 | `createEntryListArray`  | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`       |
| +140.0% |    +7 | 0.7% → 1.5% |  5 → 12 | `<init>`                | `java.util.ArrayDeque`                                     |
|  +11.5% |    +6 | 6.8% → 7.4% | 52 → 58 | `copyOf`                | `java.util.Arrays`                                         |
|     new |    +5 | 0.0% → 0.6% |   0 → 5 | `getOrPutMethods`       | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`    |
|  +20.8% |    +5 | 3.1% → 3.7% | 24 → 29 | `resize`                | `java.util.HashMap`                                        |
| +400.0% |    +4 | 0.1% → 0.6% |   1 → 5 | `sharedToGenericString` | `java.lang.reflect.Executable`                             |
|  +26.7% |    +4 | 2.0% → 2.4% | 15 → 19 | `fillInStackTrace`      | `java.lang.Throwable`                                      |
| +100.0% |    +4 | 0.5% → 1.0% |   4 → 8 | `enlarge`               | `jdk.internal.org.objectweb.asm.ByteVector`                |
|  +75.0% |    +3 | 0.5% → 0.9% |   4 → 7 | `join`                  | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |
| +100.0% |    +3 | 0.4% → 0.8% |   3 → 6 | `allocateInstance`      | `java.lang.invoke.DirectMethodHandle`                      |
|  +27.3% |    +3 | 1.4% → 1.8% | 11 → 14 | `copyOfRangeByte`       | `java.util.Arrays`                                         |
| +300.0% |    +3 | 0.1% → 0.5% |   1 → 4 | `add`                   | `java.util.StringJoiner`                                   |
| +150.0% |    +3 | 0.3% → 0.6% |   2 → 5 | `create`                | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`              |
|     new |    +3 | 0.0% → 0.4% |   0 → 3 | `<init>`                | `java.io.BufferedReader`                                   |
|     new |    +3 | 0.0% → 0.4% |   0 → 3 | `<init>`                | `java.util.regex.Pattern$BitClass`                         |
|     new |    +3 | 0.0% → 0.4% |   0 → 3 | `makeParentDirs`        | `jdk.nio.zipfs.ZipFileSystem`                              |
|     new |    +3 | 0.0% → 0.4% |   0 → 3 | `newSlice`              | `java.util.regex.Pattern`                                  |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |            % | Samples | Function                     | Location                                                   |
| ------: | ----: | -----------: | ------: | ---------------------------- | ---------------------------------------------------------- |
|  -60.0% |   -15 |  3.3% → 1.3% | 25 → 10 | `listIterator`               | `java.util.LinkedList`                                     |
|  -21.8% |   -12 |  7.2% → 5.5% | 55 → 43 | `newNode`                    | `java.util.HashMap`                                        |
|  -44.4% |    -8 |  2.3% → 1.3% | 18 → 10 | `fromCache`                  | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
|  -35.3% |    -6 |  2.2% → 1.4% | 17 → 11 | `<init>`                     | `java.util.zip.InflaterInputStream`                        |
|  -11.4% |    -5 |  5.7% → 5.0% | 44 → 39 | `join`                       | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`      |
|  -50.0% |    -5 |  1.3% → 0.6% |  10 → 5 | `getChild`                   | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |
|  -83.3% |    -5 |  0.8% → 0.1% |   6 → 1 | `allocateUninitializedArray` | `jdk.internal.misc.Unsafe`                                 |
|  -62.5% |    -5 |  1.0% → 0.4% |   8 → 3 | `copyOfRange`                | `java.util.Arrays`                                         |
|  -50.0% |    -3 |  0.8% → 0.4% |   6 → 3 | `equals`                     | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |
|  -27.3% |    -3 |  1.4% → 1.0% |  11 → 8 | `getCachedContext`           | `groovyjarjarantlr4.v4.runtime.atn.ATN`                    |
|   -3.8% |    -3 | 10.3% → 9.7% | 79 → 76 | `transform`                  | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`              |
|  -13.6% |    -3 |  2.9% → 2.4% | 22 → 19 | `put`                        | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`       |
|  -75.0% |    -3 |  0.5% → 0.1% |   4 → 1 | `make`                       | `java.lang.invoke.BoundMethodHandle$Species_LLLL`          |
|  -50.0% |    -3 |  0.8% → 0.4% |   6 → 3 | `toString`                   | `java.lang.StringBuilder`                                  |
|  -60.0% |    -3 |  0.7% → 0.3% |   5 → 2 | `stream`                     | `java.util.stream.StreamSupport`                           |
| removed |    -3 |  0.4% → 0.0% |   3 → 0 | `addConstantNameAndType`     | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|  -42.9% |    -3 |  0.9% → 0.5% |   7 → 4 | `clone`                      | `java.lang.Object`                                         |
| removed |    -2 |  0.3% → 0.0% |   2 → 0 | `fallback`                   | `org.codehaus.groovy.vmplugin.v8.IndyInterface`            |
| removed |    -2 |  0.3% → 0.0% |   2 → 0 | `getAndPut`                  | `org.codehaus.groovy.vmplugin.v8.CacheableCallSite`        |
|   -4.9% |    -2 |  5.3% → 5.0% | 41 → 39 | `valueOf`                    | `java.lang.Long`                                           |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Standard library

|    Change | Delta |             % |   Samples | Function         | Location                                                      |
| --------: | ----: | ------------: | --------: | ---------------- | ------------------------------------------------------------- |
| +10685.7% |  +748 |  0.9% → 96.4% |   7 → 755 | `invokeStatic`   | `java.lang.invoke.LambdaForm$DMH.0x0000000401088800`          |
|  +6709.1% |  +738 |  1.4% → 95.7% |  11 → 749 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000004010aa000`           |
|  +6709.1% |  +738 |  1.4% → 95.7% |  11 → 749 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x00000004010aac00`           |
|  +8900.0% |  +623 |  0.9% → 80.5% |   7 → 630 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000004010d8800`           |
|  +3100.0% |  +465 |  2.0% → 61.3% |  15 → 480 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000000401105400`           |
|  +2971.4% |  +416 |  1.8% → 54.9% |  14 → 430 | `invokeVirtual`  | `java.lang.invoke.LambdaForm$DMH.0x0000000401109c00`          |
|  +2766.7% |  +415 |  2.0% → 54.9% |  15 → 430 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000000401230800`           |
|   +920.5% |  +405 |  5.7% → 57.3% |  44 → 449 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000004010dcc00`           |
|   +913.6% |  +402 |  5.7% → 57.0% |  44 → 446 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000040121a400`           |
|  +1484.2% |  +282 |  2.5% → 38.4% |  19 → 301 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000004012e3400`           |
|   +877.4% |  +272 |  4.0% → 38.7% |  31 → 303 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000004012da000`           |
|   +496.1% |  +253 |  6.6% → 38.8% |  51 → 304 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000004012d9800`           |
|    +22.8% |  +139 | 79.5% → 95.7% | 610 → 749 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x00000004010aa800`           |
|    +21.3% |  +127 | 77.6% → 92.2% | 595 → 722 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000004010a9800`           |
|    +16.4% |   +98 | 77.8% → 88.8% | 597 → 695 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x0000000401098400`           |
|    +16.4% |   +98 | 77.8% → 88.8% | 597 → 695 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x000000040109a000`           |
|     +5.6% |   +33 | 76.3% → 78.9% | 585 → 618 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000000401181c00`           |
|  +1000.0% |   +30 |   0.4% → 4.2% |    3 → 33 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000004010c7400`           |
|     +6.4% |   +28 | 56.7% → 59.1% | 435 → 463 | `invokeVirtual`  | `java.lang.invoke.LambdaForm$DMH.0x0000000401097c00`          |
|    +44.3% |   +27 |  8.0% → 11.2% |   61 → 88 | `getMetaClass`   | `org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Standard library

| Change | Delta |             % |   Samples | Function            | Location                                             |
| -----: | ----: | ------------: | --------: | ------------------- | ---------------------------------------------------- |
| -98.8% |  -727 |  96.0% → 1.1% |   736 → 9 | `invokeStatic`      | `java.lang.invoke.LambdaForm$DMH.0x000000040102a000` |
| -98.5% |  -662 |  87.6% → 1.3% |  672 → 10 | `guard`             | `java.lang.invoke.LambdaForm$MH.0x00000004010cb000`  |
| -98.2% |  -660 |  87.6% → 1.5% |  672 → 12 | `guardWithCatch`    | `java.lang.invoke.LambdaForm$MH.0x00000004012bb000`  |
| -98.3% |  -471 |  62.5% → 1.0% |   479 → 8 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x00000004010dd800`  |
| -99.4% |  -466 |  61.1% → 0.4% |   469 → 3 | `invokeVirtual`     | `java.lang.invoke.LambdaForm$DMH.0x0000000401095800` |
| -94.1% |  -431 |  59.7% → 3.4% |  458 → 27 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x0000000401104000`  |
| -97.5% |  -424 |  56.7% → 1.4% |  435 → 11 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x0000000401181400`  |
| -91.8% |  -416 |  59.1% → 4.7% |  453 → 37 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000040112d800`  |
| -91.2% |  -299 |  42.8% → 3.7% |  328 → 29 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x0000000401121000`  |
| -85.7% |  -282 |  42.9% → 6.0% |  329 → 47 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x00000004010c7c00`  |
| -95.2% |  -179 |  24.5% → 1.1% |   188 → 9 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000040112c000`  |
| -37.4% |  -123 | 42.9% → 26.3% | 329 → 206 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x000000040109ac00`  |
| -14.0% |  -102 | 95.3% → 80.3% | 731 → 629 | `guardWithCatch`    | `java.lang.invoke.LambdaForm$MH.0x00000004010d2c00`  |
| -14.0% |  -102 | 95.3% → 80.3% | 731 → 629 | `reinvoke`          | `java.lang.invoke.LambdaForm$MH.0x0000000401188c00`  |
| -14.0% |  -102 | 95.3% → 80.3% | 731 → 629 | `guard`             | `java.lang.invoke.LambdaForm$MH.0x0000000401189000`  |
| -11.1% |   -75 | 88.1% → 76.8% | 676 → 601 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x0000000401208800`  |
|  -5.9% |   -36 | 80.2% → 73.9% | 615 → 579 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x0000000401219c00`  |
| -15.4% |   -35 | 29.7% → 24.6% | 228 → 193 | `pathExpression`    | `org.apache.groovy.parser.antlr4.GroovyParser`       |
| -15.3% |   -35 | 29.9% → 24.8% | 229 → 194 | `postfixExpression` | `org.apache.groovy.parser.antlr4.GroovyParser`       |
|  -8.7% |   -30 | 45.0% → 40.2% | 345 → 315 | `statement`         | `org.apache.groovy.parser.antlr4.GroovyParser`       |

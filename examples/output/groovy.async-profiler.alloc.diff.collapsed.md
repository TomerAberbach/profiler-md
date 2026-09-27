# Sampling profile diff

Collected 743 samples → 784 samples (+41 samples, +5.5%).

| Category         | Change | Delta |              % |   Samples |
| ---------------- | -----: | ----: | -------------: | --------: |
| Standard library |  +5.4% |   +40 | 100.0% → 99.9% | 743 → 783 |
| Ours             |    new |    +1 |    0.0% → 0.1% |     0 → 1 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function                  | Location                                                   |
| ------: | ----: | ----------: | ------: | ------------------------- | ---------------------------------------------------------- |
|  +33.3% |   +14 | 5.7% → 7.1% | 42 → 56 | `copyOf`                  | `java.util.Arrays`                                         |
|  +40.9% |    +9 | 3.0% → 4.0% | 22 → 31 | `resize`                  | `java.util.HashMap`                                        |
| +116.7% |    +7 | 0.8% → 1.7% |  6 → 13 | `<init>`                  | `java.util.zip.InflaterInputStream`                        |
|  +12.0% |    +6 | 6.7% → 7.1% | 50 → 56 | `valueOf`                 | `java.lang.Long`                                           |
|   +8.8% |    +6 | 9.2% → 9.4% | 68 → 74 | `transform`               | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig`              |
|  +46.2% |    +6 | 1.7% → 2.4% | 13 → 19 | `fillInStackTrace`        | `java.lang.Throwable`                                      |
|  +66.7% |    +6 | 1.2% → 1.9% |  9 → 15 | `listIterator`            | `java.util.LinkedList`                                     |
|     new |    +6 | 0.0% → 0.8% |   0 → 6 | `make`                    | `java.lang.invoke.BoundMethodHandle$Species_L`             |
| +166.7% |    +5 | 0.4% → 1.0% |   3 → 8 | `getChild`                | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`      |
| +250.0% |    +5 | 0.3% → 0.9% |   2 → 7 | `of`                      | `java.lang.invoke.LambdaFormEditor$TransformKey`           |
| +400.0% |    +4 | 0.1% → 0.6% |   1 → 5 | `insertParameterTypes`    | `java.lang.invoke.MethodType`                              |
| +200.0% |    +4 | 0.3% → 0.8% |   2 → 6 | `equals`                  | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |
|  +13.0% |    +3 | 3.1% → 3.3% | 23 → 26 | `put`                     | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`       |
| +300.0% |    +3 | 0.1% → 0.5% |   1 → 4 | `addConstantUtf8`         | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|     new |    +3 | 0.0% → 0.4% |   0 → 3 | `make`                    | `java.lang.invoke.BoundMethodHandle$Species_LLL`           |
|     new |    +3 | 0.0% → 0.4% |   0 → 3 | `divideAndRemainderKnuth` | `java.math.BigInteger`                                     |
| +150.0% |    +3 | 0.3% → 0.6% |   2 → 5 | `getOrPutMethods`         | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`    |
| +150.0% |    +3 | 0.3% → 0.6% |   2 → 5 | `<init>`                  | `jdk.internal.org.objectweb.asm.SymbolTable`               |
|  +22.2% |    +2 | 1.2% → 1.4% |  9 → 11 | `compile`                 | `java.util.regex.Pattern`                                  |
|     new |    +2 | 0.0% → 0.3% |   0 → 2 | `computeTargetState`      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator`     |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

##### Standard library

|  Change | Delta |           % | Samples | Function               | Location                                                   |
| ------: | ----: | ----------: | ------: | ---------------------- | ---------------------------------------------------------- |
|  -25.0% |   -10 | 5.4% → 3.8% | 40 → 30 | `join`                 | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`      |
|  -18.4% |    -9 | 6.6% → 5.1% | 49 → 40 | `newNode`              | `java.util.HashMap`                                        |
|  -80.0% |    -8 | 1.3% → 0.3% |  10 → 2 | `enlarge`              | `jdk.internal.org.objectweb.asm.ByteVector`                |
|  -50.0% |    -7 | 1.9% → 0.9% |  14 → 7 | `getChild`             | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |
|  -71.4% |    -5 | 0.9% → 0.3% |   7 → 2 | `make`                 | `java.lang.invoke.BoundMethodHandle$Species_LL`            |
|  -50.0% |    -4 | 1.1% → 0.5% |   8 → 4 | `copyOfRange`          | `java.util.Arrays`                                         |
|  -80.0% |    -4 | 0.7% → 0.1% |   5 → 1 | `stringFromByteBuffer` | `jdk.internal.jimage.ImageStringsReader`                   |
| removed |    -4 | 0.5% → 0.0% |   4 → 0 | `getCachedContext`     | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext`      |
| removed |    -4 | 0.5% → 0.0% |   4 → 0 | `lambdaFormEditor`     | `java.lang.invoke.LambdaFormEditor`                        |
|  -57.1% |    -4 | 0.9% → 0.4% |   7 → 3 | `putVal`               | `java.util.concurrent.ConcurrentHashMap`                   |
|  -20.0% |    -3 | 2.0% → 1.5% | 15 → 12 | `getCachedContext`     | `groovyjarjarantlr4.v4.runtime.atn.ATN`                    |
|  -75.0% |    -3 | 0.5% → 0.1% |   4 → 1 | `set`                  | `java.beans.MethodRef`                                     |
|  -75.0% |    -3 | 0.5% → 0.1% |   4 → 1 | `divideOneWord`        | `java.math.MutableBigInteger`                              |
|  -50.0% |    -3 | 0.8% → 0.4% |   6 → 3 | `<init>`               | `jdk.internal.org.objectweb.asm.ByteVector`                |
|  -75.0% |    -3 | 0.5% → 0.1% |   4 → 1 | `allocateInstance`     | `java.lang.invoke.DirectMethodHandle`                      |
|  -50.0% |    -2 | 0.5% → 0.3% |   4 → 2 | `toString`             | `java.lang.StringBuilder`                                  |
|  -25.0% |    -2 | 1.1% → 0.8% |   8 → 6 | `clone`                | `java.lang.Object`                                         |
|  -28.6% |    -2 | 0.9% → 0.6% |   7 → 5 | `copy`                 | `java.lang.reflect.Method`                                 |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `replace`              | `java.lang.StringLatin1`                                   |
| removed |    -2 | 0.3% → 0.0% |   2 → 0 | `get`                  | `sun.util.locale.LocaleObjectCache`                        |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Standard library

|    Change | Delta |             % |   Samples | Function         | Location                                             |
| --------: | ----: | ------------: | --------: | ---------------- | ---------------------------------------------------- |
|  +9828.6% |  +688 |  0.9% → 88.6% |   7 → 695 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000080010c6400`  |
|  +8740.0% |  +437 |  0.7% → 56.4% |   5 → 442 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000008001229800`  |
|   +346.8% |  +378 | 14.7% → 62.1% | 109 → 487 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000008001105400`  |
|   +320.7% |  +356 | 14.9% → 59.6% | 111 → 467 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000080010dcc00`  |
|   +286.4% |  +338 | 15.9% → 58.2% | 118 → 456 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000800121a000`  |
|   +305.5% |  +333 | 14.7% → 56.4% | 109 → 442 | `invokeVirtual`  | `java.lang.invoke.LambdaForm$DMH.0x0000008001109c00` |
|    +58.4% |  +268 | 61.8% → 92.7% | 459 → 727 | `invokeVirtual`  | `java.lang.invoke.LambdaForm$DMH.0x0000008001094400` |
| +19100.0% |  +191 |  0.1% → 24.5% |   1 → 192 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000800109ac00`  |
|   +740.9% |  +163 |  3.0% → 23.6% |  22 → 185 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000080010abc00`  |
|    +94.7% |  +160 | 22.7% → 42.0% | 169 → 329 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000080012e3400`  |
|    +26.9% |  +154 | 77.1% → 92.7% | 573 → 727 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000080010a9800`  |
|    +22.8% |  +140 | 82.8% → 96.3% | 615 → 755 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000080010a1800`  |
|    +19.2% |  +112 | 78.5% → 88.6% | 583 → 695 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000080010c7000`  |
|  +1375.0% |  +110 |  1.1% → 15.1% |   8 → 118 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000080012acc00`  |
|  +1010.0% |  +101 |  1.3% → 14.2% |  10 → 111 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000080010d3400`  |
|   +918.2% |  +101 |  1.5% → 14.3% |  11 → 112 | `invokeVirtual`  | `java.lang.invoke.LambdaForm$DMH.0x00000080012ac000` |
|    +13.0% |   +79 | 81.7% → 87.5% | 607 → 686 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x0000008001098400`  |
|    +13.0% |   +79 | 81.7% → 87.5% | 607 → 686 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x000000800109a000`  |
|   +121.2% |   +63 |  7.0% → 14.7% |  52 → 115 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000080011b0400`  |
|   +666.7% |   +40 |   0.8% → 5.9% |    6 → 46 | `invokeSpecial`  | `java.lang.invoke.LambdaForm$DMH.0x0000008001084000` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Standard library

| Change | Delta |             % |   Samples | Function         | Location                                             |
| -----: | ----: | ------------: | --------: | ---------------- | ---------------------------------------------------- |
| -96.6% |  -455 |  63.4% → 2.0% |  471 → 16 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000008001031400`  |
| -99.1% |  -443 |  60.2% → 0.5% |   447 → 4 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000008001218800`  |
| -95.4% |  -417 |  58.8% → 2.6% |  437 → 20 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000008001130000`  |
| -96.0% |  -413 |  57.9% → 2.2% |  430 → 17 | `invokeVirtual`  | `java.lang.invoke.LambdaForm$DMH.0x0000008001105000` |
| -87.7% |  -377 |  57.9% → 6.8% |  430 → 53 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000080012e7000`  |
| -97.8% |  -311 |  42.8% → 0.9% |   318 → 7 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000800120e400`  |
| -96.9% |  -309 |  42.9% → 1.3% |  319 → 10 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000008001216000`  |
| -95.9% |  -306 |  42.9% → 1.7% |  319 → 13 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000080012fd800`  |
| -45.7% |  -278 | 81.8% → 42.1% | 608 → 330 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000080012ddc00`  |
| -40.9% |  -228 | 75.1% → 42.1% | 558 → 330 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000080012dd400`  |
| -31.7% |  -219 | 93.0% → 60.2% | 691 → 472 | `invokeVirtual`  | `java.lang.invoke.LambdaForm$DMH.0x0000008001097c00` |
| -93.3% |  -180 |  26.0% → 1.7% |  193 → 13 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000080012fe400`  |
| -11.5% |   -78 | 91.4% → 76.7% | 679 → 601 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000008001200800`  |
| -10.4% |   -70 | 90.6% → 76.9% | 673 → 603 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x0000008001201000`  |
| -10.4% |   -70 | 90.6% → 76.9% | 673 → 603 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x0000008001202000`  |
|  -7.4% |   -51 | 93.0% → 81.6% | 691 → 640 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000080010d2400`  |
|  -6.8% |   -45 | 89.4% → 79.0% | 664 → 619 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000080011ba000`  |
| -95.5% |   -42 |   5.9% → 0.3% |    44 → 2 | `invokeSpecial`  | `java.lang.invoke.LambdaForm$DMH.0x0000008001030400` |
| -82.9% |   -34 |   5.5% → 0.9% |    41 → 7 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000080012af800`  |
| -76.7% |   -33 |   5.8% → 1.3% |   43 → 10 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000080012b3400`  |

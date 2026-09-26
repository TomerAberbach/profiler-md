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

| Change | Delta |            % | Samples | Function          | Location                                             |
| -----: | ----: | -----------: | ------: | ----------------- | ---------------------------------------------------- |
|    new |  +758 | 0.0% → 96.7% | 0 → 758 | `invokeStatic`    | `java.lang.invoke.LambdaForm$DMH.0x0000008001088800` |
|    new |  +755 | 0.0% → 96.3% | 0 → 755 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000080010a1800`  |
|    new |  +754 | 0.0% → 96.2% | 0 → 754 | `guardWithCatch`  | `java.lang.invoke.LambdaForm$MH.0x00000080010aa000`  |
|    new |  +754 | 0.0% → 96.2% | 0 → 754 | `reinvoke`        | `java.lang.invoke.LambdaForm$MH.0x00000080010aa800`  |
|    new |  +754 | 0.0% → 96.2% | 0 → 754 | `guard`           | `java.lang.invoke.LambdaForm$MH.0x00000080010aac00`  |
|    new |  +727 | 0.0% → 92.7% | 0 → 727 | `invokeVirtual`   | `java.lang.invoke.LambdaForm$DMH.0x0000008001094400` |
|    new |  +727 | 0.0% → 92.7% | 0 → 727 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000080010a9800`  |
|    new |  +695 | 0.0% → 88.6% | 0 → 695 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000080010c7000`  |
|    new |  +695 | 0.0% → 88.6% | 0 → 695 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000080010c6400`  |
|    new |  +693 | 0.0% → 88.4% | 0 → 693 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000800108e000`  |
|    new |  +686 | 0.0% → 87.5% | 0 → 686 | `guardWithCatch`  | `java.lang.invoke.LambdaForm$MH.0x0000008001098400`  |
|    new |  +686 | 0.0% → 87.5% | 0 → 686 | `guard`           | `java.lang.invoke.LambdaForm$MH.0x000000800109a000`  |
|    new |  +686 | 0.0% → 87.5% | 0 → 686 | `reinvoke`        | `java.lang.invoke.LambdaForm$MH.0x0000008001099c00`  |
|    new |  +675 | 0.0% → 86.1% | 0 → 675 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000800102b000`  |
|    new |  +674 | 0.0% → 86.0% | 0 → 674 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000800109bc00`  |
|    new |  +662 | 0.0% → 84.4% | 0 → 662 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000080010d3800`  |
|    new |  +653 | 0.0% → 83.3% | 0 → 653 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000080010c8000`  |
|    new |  +649 | 0.0% → 82.8% | 0 → 649 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x0000008001095000` |
|    new |  +640 | 0.0% → 81.6% | 0 → 640 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000080010d2400`  |
|    new |  +628 | 0.0% → 80.1% | 0 → 628 | `invokeExact_MT`  | `java.lang.invoke.LambdaForm$MH.0x0000008001120c00`  |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Standard library

|  Change | Delta |            % | Samples | Function          | Location                                             |
| ------: | ----: | -----------: | ------: | ----------------- | ---------------------------------------------------- |
| removed |  -724 | 97.4% → 0.0% | 724 → 0 | `invokeStatic`    | `java.lang.invoke.LambdaForm$DMH.0x0000007801088800` |
| removed |  -723 | 97.3% → 0.0% | 723 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000078010a1800`  |
| removed |  -721 | 97.0% → 0.0% | 721 → 0 | `guardWithCatch`  | `java.lang.invoke.LambdaForm$MH.0x00000078010aa000`  |
| removed |  -721 | 97.0% → 0.0% | 721 → 0 | `reinvoke`        | `java.lang.invoke.LambdaForm$MH.0x00000078010aa800`  |
| removed |  -721 | 97.0% → 0.0% | 721 → 0 | `guard`           | `java.lang.invoke.LambdaForm$MH.0x00000078010aac00`  |
| removed |  -691 | 93.0% → 0.0% | 691 → 0 | `invokeVirtual`   | `java.lang.invoke.LambdaForm$DMH.0x0000007801094400` |
| removed |  -691 | 93.0% → 0.0% | 691 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000078010a9800`  |
| removed |  -679 | 91.4% → 0.0% | 679 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000078010c7000`  |
| removed |  -679 | 91.4% → 0.0% | 679 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000078010c6400`  |
| removed |  -677 | 91.1% → 0.0% | 677 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000780108e000`  |
| removed |  -673 | 90.6% → 0.0% | 673 → 0 | `guardWithCatch`  | `java.lang.invoke.LambdaForm$MH.0x0000007801098400`  |
| removed |  -673 | 90.6% → 0.0% | 673 → 0 | `reinvoke`        | `java.lang.invoke.LambdaForm$MH.0x0000007801099c00`  |
| removed |  -673 | 90.6% → 0.0% | 673 → 0 | `guard`           | `java.lang.invoke.LambdaForm$MH.0x000000780109a000`  |
| removed |  -667 | 89.8% → 0.0% | 667 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000780102b000`  |
| removed |  -664 | 89.4% → 0.0% | 664 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000780109bc00`  |
| removed |  -642 | 86.4% → 0.0% | 642 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000078010d3800`  |
| removed |  -633 | 85.2% → 0.0% | 633 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000078010c8000`  |
| removed |  -633 | 85.2% → 0.0% | 633 → 0 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x0000007801095000` |
| removed |  -615 | 82.8% → 0.0% | 615 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000078010d2400`  |
| removed |  -608 | 81.8% → 0.0% | 608 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000078010d8800`  |

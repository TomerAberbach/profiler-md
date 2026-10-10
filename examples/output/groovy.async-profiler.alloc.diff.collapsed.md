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

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `linkLast` (`java.util.LinkedList`)

|  Change | Delta |      % | Samples | Caller | Location               |
| ------: | ----: | -----: | ------: | ------ | ---------------------- |
| +280.0% |   +14 | 100.0% |  5 → 19 | `add`  | `java.util.LinkedList` |

##### `stringFromByteBuffer` (`jdk.internal.jimage.ImageStringsReader`)

|  Change | Delta |      % | Samples | Caller      | Location                               |
| ------: | ----: | -----: | ------: | ----------- | -------------------------------------- |
| +400.0% |    +8 | 100.0% |  2 → 10 | `getString` | `jdk.internal.jimage.BasicImageReader` |

##### `newInstance` (`java.lang.reflect.Array`)

|  Change | Delta |             % | Samples | Caller         | Location                                             |
| ------: | ----: | ------------: | ------: | -------------- | ---------------------------------------------------- |
|     new |   +13 |  0.0% → 92.9% |  0 → 13 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000040102b400` |
| removed |    -7 | 100.0% → 0.0% |   7 → 0 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000080102b400` |
|     new |    +1 |   0.0% → 7.1% |   0 → 1 | `copyOf`       | `java.util.Arrays`                                   |

##### `createEntryListArray` (`groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`)

| Change | Delta |      % | Samples | Caller   | Location                                             |
| -----: | ----: | -----: | ------: | -------- | ---------------------------------------------------- |
| +58.3% |    +7 | 100.0% | 12 → 19 | `<init>` | `groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap` |

##### `<init>` (`java.util.ArrayDeque`)

|  Change | Delta |      % | Samples | Caller   | Location                                                   |
| ------: | ----: | -----: | ------: | -------- | ---------------------------------------------------------- |
| +140.0% |    +7 | 100.0% |  5 → 12 | `equals` | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext` |

##### `copyOf` (`java.util.Arrays`)

|  Change | Delta |             % | Samples | Caller                   | Location                          |
| ------: | ----: | ------------: | ------: | ------------------------ | --------------------------------- |
|  +38.9% |    +7 | 34.6% → 43.1% | 18 → 25 | `getBytes`               | `jdk.internal.loader.Resource`    |
| removed |    -3 |   5.8% → 0.0% |   3 → 0 | `toArray`                | `java.util.ArrayList`             |
|  -11.8% |    -2 | 32.7% → 25.9% | 17 → 15 | `ensureCapacityInternal` | `java.lang.AbstractStringBuilder` |
|  +22.2% |    +2 | 17.3% → 19.0% |  9 → 11 | `grow`                   | `java.util.ArrayList`             |
|  +33.3% |    +1 |   5.8% → 6.9% |   3 → 4 | `copyOf`                 | `java.util.Arrays`                |

##### `getOrPutMethods` (`org.codehaus.groovy.runtime.metaclass.MetaMethodIndex`)

| Change | Delta |            % | Samples | Caller                  | Location                                                |
| -----: | ----: | -----------: | ------: | ----------------------- | ------------------------------------------------------- |
|    new |    +3 | 0.0% → 60.0% |   0 → 3 | `addMetaMethodToIndex`  | `groovy.lang.MetaClassImpl`                             |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `copyNonPrivateMethods` | `org.codehaus.groovy.runtime.metaclass.MetaMethodIndex` |

##### `resize` (`java.util.HashMap`)

|  Change | Delta |             % | Samples | Caller       | Location            |
| ------: | ----: | ------------: | ------: | ------------ | ------------------- |
|  +17.4% |    +4 | 95.8% → 93.1% | 23 → 27 | `putVal`     | `java.util.HashMap` |
| +100.0% |    +1 |   4.2% → 6.9% |   1 → 2 | `treeifyBin` | `java.util.HashMap` |

##### `sharedToGenericString` (`java.lang.reflect.Executable`)

|  Change | Delta |      % | Samples | Caller            | Location                   |
| ------: | ----: | -----: | ------: | ----------------- | -------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `toGenericString` | `java.lang.reflect.Method` |

##### `fillInStackTrace` (`java.lang.Throwable`)

| Change | Delta |      % | Samples | Caller             | Location              |
| -----: | ----: | -----: | ------: | ------------------ | --------------------- |
| +26.7% |    +4 | 100.0% | 15 → 19 | `fillInStackTrace` | `java.lang.Throwable` |

##### `enlarge` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change | Delta |             % | Samples | Caller    | Location                                    |
| ------: | ----: | ------------: | ------: | --------- | ------------------------------------------- |
| +133.3% |    +4 | 75.0% → 87.5% |   3 → 7 | `putUTF8` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `join` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache`)

| Change | Delta |      % | Samples | Caller | Location                                              |
| -----: | ----: | -----: | ------: | ------ | ----------------------------------------------------- |
| +75.0% |    +3 | 100.0% |   4 → 7 | `join` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |

##### `allocateInstance` (`java.lang.invoke.DirectMethodHandle`)

|  Change | Delta |      % | Samples | Caller             | Location                                     |
| ------: | ----: | -----: | ------: | ------------------ | -------------------------------------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `newInvokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `copyOfRangeByte` (`java.util.Arrays`)

| Change | Delta |      % | Samples | Caller        | Location           |
| -----: | ----: | -----: | ------: | ------------- | ------------------ |
| +27.3% |    +3 | 100.0% | 11 → 14 | `copyOfRange` | `java.util.Arrays` |

##### `add` (`java.util.StringJoiner`)

| Change | Delta |            % | Samples | Caller                  | Location                                                       |
| -----: | ----: | -----------: | ------: | ----------------------- | -------------------------------------------------------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `sharedToGenericString` | `java.lang.reflect.Executable`                                 |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `toString`              | `sun.reflect.generics.reflectiveObjects.ParameterizedTypeImpl` |

##### `create` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

|  Change | Delta |      % | Samples | Caller   | Location                                      |
| ------: | ----: | -----: | ------: | -------- | --------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `create` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |

##### `<init>` (`java.io.BufferedReader`)

| Change | Delta |             % | Samples | Caller   | Location                 |
| -----: | ----: | ------------: | ------: | -------- | ------------------------ |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `<init>` | `java.io.BufferedReader` |

##### `<init>` (`java.util.regex.Pattern$BitClass`)

| Change | Delta |             % | Samples | Caller  | Location                  |
| -----: | ----: | ------------: | ------: | ------- | ------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `clazz` | `java.util.regex.Pattern` |

##### `makeParentDirs` (`jdk.nio.zipfs.ZipFileSystem`)

| Change | Delta |             % | Samples | Caller          | Location                      |
| -----: | ----: | ------------: | ------: | --------------- | ----------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `buildNodeTree` | `jdk.nio.zipfs.ZipFileSystem` |

##### `newSlice` (`java.util.regex.Pattern`)

| Change | Delta |             % | Samples | Caller | Location                  |
| -----: | ----: | ------------: | ------: | ------ | ------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `atom` | `java.util.regex.Pattern` |

##### `listIterator` (`java.util.LinkedList`)

| Change | Delta |      % | Samples | Caller         | Location                 |
| -----: | ----: | -----: | ------: | -------------- | ------------------------ |
| -60.0% |   -15 | 100.0% | 25 → 10 | `listIterator` | `java.util.AbstractList` |

##### `newNode` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller   | Location            |
| -----: | ----: | -----: | ------: | -------- | ------------------- |
| -21.8% |   -12 | 100.0% | 55 → 43 | `putVal` | `java.util.HashMap` |

##### `fromCache` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|  Change | Delta |             % | Samples | Caller         | Location                                             |
| ------: | ----: | ------------: | ------: | -------------- | ---------------------------------------------------- |
| removed |   -18 | 100.0% → 0.0% |  18 → 0 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
|     new |   +10 | 0.0% → 100.0% |  0 → 10 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000000401088800` |

##### `<init>` (`java.util.zip.InflaterInputStream`)

| Change | Delta |      % | Samples | Caller   | Location                                           |
| -----: | ----: | -----: | ------: | -------- | -------------------------------------------------- |
| -35.3% |    -6 | 100.0% | 17 → 11 | `<init>` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `join` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContext`)

|  Change | Delta |              % | Samples | Caller | Location                                                   |
| ------: | ----: | -------------: | ------: | ------ | ---------------------------------------------------------- |
|   -7.1% |    -3 | 95.5% → 100.0% | 42 → 39 | `add`  | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet`           |
| removed |    -2 |    4.5% → 0.0% |   2 → 0 | `join` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache` |

##### `getChild` (`groovyjarjarantlr4.v4.runtime.atn.PredictionContextCache`)

| Change | Delta |      % | Samples | Caller           | Location                                               |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------------------ |
| -50.0% |    -5 | 100.0% |  10 → 5 | `ruleTransition` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `allocateUninitializedArray` (`jdk.internal.misc.Unsafe`)

| Change | Delta |      % | Samples | Caller     | Location                       |
| -----: | ----: | -----: | ------: | ---------- | ------------------------------ |
| -83.3% |    -5 | 100.0% |   6 → 1 | `newArray` | `java.lang.StringConcatHelper` |

##### `copyOfRange` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Caller                 | Location                         |
| -----: | ----: | ------------: | ------: | ---------------------- | -------------------------------- |
| -75.0% |    -3 | 50.0% → 33.3% |   4 → 1 | `<init>`               | `java.lang.String`               |
| -66.7% |    -2 | 37.5% → 33.3% |   3 → 1 | `dropArgumentsToMatch` | `java.lang.invoke.MethodHandles` |

##### `equals` (`groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`)

|  Change | Delta |              % | Samples | Caller   | Location                                                       |
| ------: | ----: | -------------: | ------: | -------- | -------------------------------------------------------------- |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `get`    | `java.util.concurrent.ConcurrentHashMap`                       |
|  -25.0% |    -1 | 66.7% → 100.0% |   4 → 3 | `equals` | `groovyjarjarantlr4.v4.runtime.atn.ArrayPredictionContext`     |
| removed |    -1 |   16.7% → 0.0% |   1 → 0 | `equals` | `groovyjarjarantlr4.v4.runtime.atn.SingletonPredictionContext` |

##### `getCachedContext` (`groovyjarjarantlr4.v4.runtime.atn.ATN`)

| Change | Delta |      % | Samples | Caller            | Location                                         |
| -----: | ----: | -----: | ------: | ----------------- | ------------------------------------------------ |
| -27.3% |    -3 | 100.0% |  11 → 8 | `optimizeConfigs` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |

##### `transform` (`groovyjarjarantlr4.v4.runtime.atn.ATNConfig`)

| Change | Delta |      % | Samples | Caller      | Location                                      |
| -----: | ----: | -----: | ------: | ----------- | --------------------------------------------- |
|  -3.8% |    -3 | 100.0% | 79 → 76 | `transform` | `groovyjarjarantlr4.v4.runtime.atn.ATNConfig` |

##### `put` (`groovyjarjarantlr4.v4.runtime.misc.FlexibleHashMap`)

| Change | Delta |      % | Samples | Caller             | Location                                              |
| -----: | ----: | -----: | ------: | ------------------ | ----------------------------------------------------- |
| -13.6% |    -3 | 100.0% | 22 → 19 | `getCachedContext` | `groovyjarjarantlr4.v4.runtime.atn.PredictionContext` |

##### `make` (`java.lang.invoke.BoundMethodHandle$Species_LLLL`)

| Change | Delta |      % | Samples | Caller         | Location                                     |
| -----: | ----: | -----: | ------: | -------------- | -------------------------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `invokeStatic` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `toString` (`java.lang.StringBuilder`)

|  Change | Delta |            % | Samples | Caller                   | Location                                    |
| ------: | ----: | -----------: | ------: | ------------------------ | ------------------------------------------- |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `lambda$doFindClasses$2` | `org.codehaus.groovy.vmplugin.v9.Java9`     |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `resolve`                | `jdk.internal.jrtfs.JrtPath`                |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `parseContextSpec`       | `sun.net.www.protocol.jar.Handler`          |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `getText`                | `groovyjarjarantlr4.v4.runtime.RuleContext` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `sharedToGenericString`  | `java.lang.reflect.Executable`              |

##### `stream` (`java.util.stream.StreamSupport`)

|  Change | Delta |             % | Samples | Caller   | Location                  |
| ------: | ----: | ------------: | ------: | -------- | ------------------------- |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `of`     | `java.util.stream.Stream` |
|  -50.0% |    -1 | 40.0% → 50.0% |   2 → 1 | `stream` | `java.util.Collection`    |
|  -50.0% |    -1 | 40.0% → 50.0% |   2 → 1 | `stream` | `java.util.Arrays`        |

##### `addConstantNameAndType` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change | Delta |             % | Samples | Caller                       | Location                                     |
| ------: | ----: | ------------: | ------: | ---------------------------- | -------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `addConstantMemberReference` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `clone` (`java.lang.Object`)

|  Change | Delta |             % | Samples | Caller              | Location                                                |
| ------: | ----: | ------------: | ------: | ------------------- | ------------------------------------------------------- |
| removed |    -2 |  28.6% → 0.0% |   2 → 0 | `clone`             | `java.lang.invoke.MemberName`                           |
|  -33.3% |    -1 | 42.9% → 50.0% |   3 → 2 | `getParameterTypes` | `java.lang.reflect.Method`                              |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `copyOfRange`       | `java.util.Arrays`                                      |
| removed |    -1 |  14.3% → 0.0% |   1 → 0 | `getTypeParameters` | `sun.reflect.generics.repository.GenericDeclRepository` |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `clone`             | `java.util.ArrayList`                                   |

##### `fallback` (`org.codehaus.groovy.vmplugin.v8.IndyInterface`)

|  Change | Delta |            % | Samples | Caller         | Location                                        |
| ------: | ----: | -----------: | ------: | -------------- | ----------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `access$000`   | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `selectMethod` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `getAndPut` (`org.codehaus.groovy.vmplugin.v8.CacheableCallSite`)

|  Change | Delta |             % | Samples | Caller               | Location                                        |
| ------: | ----: | ------------: | ------: | -------------------- | ----------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `lambda$fromCache$2` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |

##### `valueOf` (`java.lang.Long`)

| Change | Delta |      % | Samples | Caller | Location                                         |
| -----: | ----: | -----: | ------: | ------ | ------------------------------------------------ |
|  -4.9% |    -2 | 100.0% | 41 → 39 | `add`  | `groovyjarjarantlr4.v4.runtime.atn.ATNConfigSet` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

##### Standard library

|    Change | Delta |             % |   Samples | Function         | Location                                                                                                  |
| --------: | ----: | ------------: | --------: | ---------------- | --------------------------------------------------------------------------------------------------------- |
| +10685.7% |  +748 |  0.9% → 96.4% |   7 → 755 | `invokeStatic`   | `java.lang.invoke.LambdaForm$DMH.0x00000008012b8000 → java.lang.invoke.LambdaForm$DMH.0x0000000401088800` |
|  +6709.1% |  +738 |  1.4% → 95.7% |  11 → 749 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000008012ba800 → java.lang.invoke.LambdaForm$MH.0x00000004010aa000`   |
|  +6709.1% |  +738 |  1.4% → 95.7% |  11 → 749 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x00000008012bb800 → java.lang.invoke.LambdaForm$MH.0x00000004010aac00`   |
|  +8900.0% |  +623 |  0.9% → 80.5% |   7 → 630 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000008012b9400 → java.lang.invoke.LambdaForm$MH.0x00000004010d8800`   |
|  +3100.0% |  +465 |  2.0% → 61.3% |  15 → 480 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000080112c000 → java.lang.invoke.LambdaForm$MH.0x0000000401105400`   |
|  +2971.4% |  +416 |  1.8% → 54.9% |  14 → 430 | `invokeVirtual`  | `java.lang.invoke.LambdaForm$DMH.0x0000000801105000 → java.lang.invoke.LambdaForm$DMH.0x0000000401109c00` |
|  +2766.7% |  +415 |  2.0% → 54.9% |  15 → 430 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000008010dd800 → java.lang.invoke.LambdaForm$MH.0x0000000401230800`   |
|   +920.5% |  +405 |  5.7% → 57.3% |  44 → 449 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000080112d800 → java.lang.invoke.LambdaForm$MH.0x00000004010dcc00`   |
|   +913.6% |  +402 |  5.7% → 57.0% |  44 → 446 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000000801121000 → java.lang.invoke.LambdaForm$MH.0x000000040121a400`   |
|  +1484.2% |  +282 |  2.5% → 38.4% |  19 → 301 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000000801181000 → java.lang.invoke.LambdaForm$MH.0x00000004012e3400`   |
|   +877.4% |  +272 |  4.0% → 38.7% |  31 → 303 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000000801104000 → java.lang.invoke.LambdaForm$MH.0x00000004012da000`   |
|   +496.1% |  +253 |  6.6% → 38.8% |  51 → 304 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000008010c8000 → java.lang.invoke.LambdaForm$MH.0x00000004012d9800`   |
|    +22.8% |  +139 | 79.5% → 95.7% | 610 → 749 | `reinvoke`       | `java.lang.invoke.LambdaForm$MH.0x0000000801189000 → java.lang.invoke.LambdaForm$MH.0x00000004010aa800`   |
|    +21.3% |  +127 | 77.6% → 92.2% | 595 → 722 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x000000080120f000 → java.lang.invoke.LambdaForm$MH.0x00000004010a9800`   |
|    +16.4% |   +98 | 77.8% → 88.8% | 597 → 695 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x0000000801201400 → java.lang.invoke.LambdaForm$MH.0x0000000401098400`   |
|    +16.4% |   +98 | 77.8% → 88.8% | 597 → 695 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x0000000801202400 → java.lang.invoke.LambdaForm$MH.0x000000040109a000`   |
|     +5.6% |   +33 | 76.3% → 78.9% | 585 → 618 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x0000000801129800 → java.lang.invoke.LambdaForm$MH.0x0000000401181c00`   |
|  +1000.0% |   +30 |   0.4% → 4.2% |    3 → 33 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000008012e0c00 → java.lang.invoke.LambdaForm$MH.0x00000004010c7400`   |
|     +6.4% |   +28 | 56.7% → 59.1% | 435 → 463 | `invokeVirtual`  | `java.lang.invoke.LambdaForm$DMH.0x0000000801109400 → java.lang.invoke.LambdaForm$DMH.0x0000000401097c00` |
|    +44.3% |   +27 |  8.0% → 11.2% |   61 → 88 | `getMetaClass`   | `org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl`                                             |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Standard library

| Change | Delta |             % |   Samples | Function            | Location                                                                                                  |
| -----: | ----: | ------------: | --------: | ------------------- | --------------------------------------------------------------------------------------------------------- |
| -98.8% |  -727 |  96.0% → 1.1% |   736 → 9 | `invokeStatic`      | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800 → java.lang.invoke.LambdaForm$DMH.0x000000040102a000` |
| -98.5% |  -662 |  87.6% → 1.3% |  672 → 10 | `guard`             | `java.lang.invoke.LambdaForm$MH.0x0000000801098400 → java.lang.invoke.LambdaForm$MH.0x00000004010cb000`   |
| -98.2% |  -660 |  87.6% → 1.5% |  672 → 12 | `guardWithCatch`    | `java.lang.invoke.LambdaForm$MH.0x0000000801096800 → java.lang.invoke.LambdaForm$MH.0x00000004012bb000`   |
| -98.3% |  -471 |  62.5% → 1.0% |   479 → 8 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x0000000801105400 → java.lang.invoke.LambdaForm$MH.0x00000004010dd800`   |
| -99.4% |  -466 |  61.1% → 0.4% |   469 → 3 | `invokeVirtual`     | `java.lang.invoke.LambdaForm$DMH.0x0000000801096000 → java.lang.invoke.LambdaForm$DMH.0x0000000401095800` |
| -94.1% |  -431 |  59.7% → 3.4% |  458 → 27 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x00000008010dcc00 → java.lang.invoke.LambdaForm$MH.0x0000000401104000`   |
| -97.5% |  -424 |  56.7% → 1.4% |  435 → 11 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x0000000801229800 → java.lang.invoke.LambdaForm$MH.0x0000000401181400`   |
| -91.8% |  -416 |  59.1% → 4.7% |  453 → 37 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x0000000801219800 → java.lang.invoke.LambdaForm$MH.0x000000040112d800`   |
| -91.2% |  -299 |  42.8% → 3.7% |  328 → 29 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x00000008012e3800 → java.lang.invoke.LambdaForm$MH.0x0000000401121000`   |
| -85.7% |  -282 |  42.9% → 6.0% |  329 → 47 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x00000008012de000 → java.lang.invoke.LambdaForm$MH.0x00000004010c7c00`   |
| -95.2% |  -179 |  24.5% → 1.1% |   188 → 9 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x0000000801099000 → java.lang.invoke.LambdaForm$MH.0x000000040112c000`   |
| -37.4% |  -123 | 42.9% → 26.3% | 329 → 206 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x00000008012dd800 → java.lang.invoke.LambdaForm$MH.0x000000040109ac00`   |
| -14.0% |  -102 | 95.3% → 80.3% | 731 → 629 | `guardWithCatch`    | `java.lang.invoke.LambdaForm$MH.0x00000008010abc00 → java.lang.invoke.LambdaForm$MH.0x00000004010d2c00`   |
| -14.0% |  -102 | 95.3% → 80.3% | 731 → 629 | `reinvoke`          | `java.lang.invoke.LambdaForm$MH.0x00000008010ac400 → java.lang.invoke.LambdaForm$MH.0x0000000401188c00`   |
| -14.0% |  -102 | 95.3% → 80.3% | 731 → 629 | `guard`             | `java.lang.invoke.LambdaForm$MH.0x00000008010ac800 → java.lang.invoke.LambdaForm$MH.0x0000000401189000`   |
| -11.1% |   -75 | 88.1% → 76.8% | 676 → 601 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x00000008010c7400 → java.lang.invoke.LambdaForm$MH.0x0000000401208800`   |
|  -5.9% |   -36 | 80.2% → 73.9% | 615 → 579 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x00000008010d8c00 → java.lang.invoke.LambdaForm$MH.0x0000000401219c00`   |
| -15.4% |   -35 | 29.7% → 24.6% | 228 → 193 | `pathExpression`    | `org.apache.groovy.parser.antlr4.GroovyParser`                                                            |
| -15.3% |   -35 | 29.9% → 24.8% | 229 → 194 | `postfixExpression` | `org.apache.groovy.parser.antlr4.GroovyParser`                                                            |
|  -8.7% |   -30 | 45.0% → 40.2% | 345 → 315 | `statement`         | `org.apache.groovy.parser.antlr4.GroovyParser`                                                            |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x0000000401088800`)

|  Change | Delta |             % | Samples | Callee         | Location                                        |
| ------: | ----: | ------------: | ------: | -------------- | ----------------------------------------------- |
|     new |  +755 | 0.0% → 100.0% | 0 → 755 | `fromCache`    | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|     new |  +524 |  0.0% → 69.4% | 0 → 524 | `selectMethod` | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
| removed |    -7 | 100.0% → 0.0% |   7 → 0 | `isMethodCall` | `org.codenarc.util.AstUtil`                     |

##### `guardWithCatch` (`java.lang.invoke.LambdaForm$MH.0x00000004010aa000`)

| Change | Delta |            % | Samples | Callee            | Location                                             |
| -----: | ----: | -----------: | ------: | ----------------- | ---------------------------------------------------- |
|    new |  +722 | 0.0% → 96.4% | 0 → 722 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000004010a9800`  |
|    new |  +697 | 0.0% → 93.1% | 0 → 697 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000004010c6400`  |
|    new |  +625 | 0.0% → 83.4% | 0 → 625 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x0000000401094c00` |
|    new |  +446 | 0.0% → 59.5% | 0 → 446 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x000000040121a400`  |
|    new |  +430 | 0.0% → 57.4% | 0 → 430 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000000401230800`  |

##### `guard` (`java.lang.invoke.LambdaForm$MH.0x00000004010aac00`)

|  Change | Delta |             % | Samples | Callee     | Location                                            |
| ------: | ----: | ------------: | ------: | ---------- | --------------------------------------------------- |
|     new |  +749 | 0.0% → 100.0% | 0 → 749 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x00000004010aa800` |
|     new |  +619 |  0.0% → 82.6% | 0 → 619 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |   -10 |  90.9% → 0.0% |  10 → 0 | `delegate` | `java.lang.invoke.LambdaForm$MH.0x00000008012c0000` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x00000008012bb400` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000004010d8800`)

|   Change | Delta |      % | Samples | Callee         | Location                                                                                                  |
| -------: | ----: | -----: | ------: | -------------- | --------------------------------------------------------------------------------------------------------- |
| +8900.0% |  +623 | 100.0% | 7 → 630 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x00000008012b8000 → java.lang.invoke.LambdaForm$DMH.0x0000000401088800` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000000401105400`)

|  Change | Delta |             % | Samples | Callee          | Location                                             |
| ------: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------- |
|     new |  +474 |  0.0% → 98.8% | 0 → 474 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |   -15 | 100.0% → 0.0% |  15 → 0 | `invokeStatic`  | `java.lang.invoke.LambdaForm$DMH.0x000000080102a000` |
|     new |    +6 |   0.0% → 1.3% |   0 → 6 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x0000000401105000` |

##### `invokeVirtual` (`java.lang.invoke.LambdaForm$DMH.0x0000000401109c00`)

|  Change | Delta |             % | Samples | Callee                            | Location                                            |
| ------: | ----: | ------------: | ------: | --------------------------------- | --------------------------------------------------- |
|     new |  +430 | 0.0% → 100.0% | 0 → 430 | `compile`                         | `org.codehaus.groovy.control.CompilationUnit`       |
| removed |   -10 |  71.4% → 0.0% |  10 → 0 | `initializeRuleRegistry`          | `org.codenarc.ruleregistry.RuleRegistryInitializer` |
| removed |    -2 |  14.3% → 0.0% |   2 → 0 | `setDefaultsIfNecessary`          | `org.codenarc.CodeNarc`                             |
| removed |    -1 |   7.1% → 0.0% |   1 → 0 | `initializeWildcardPatterns`      | `org.codenarc.analyzer.FilesystemSourceAnalyzer`    |
| removed |    -1 |   7.1% → 0.0% |   1 → 0 | `initializeDefaultResourceBundle` | `org.codenarc.report.AbstractReportWriter`          |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000000401230800`)

|  Change | Delta |             % | Samples | Callee          | Location                                             |
| ------: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------- |
|     new |  +430 | 0.0% → 100.0% | 0 → 430 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x0000000401109c00` |
| removed |   -15 | 100.0% → 0.0% |  15 → 0 | `reinvoke`      | `java.lang.invoke.LambdaForm$MH.0x00000008010cb000`  |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000004010dcc00`)

|  Change | Delta |             % | Samples | Callee             | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------ | --------------------------------------------------- |
|     new |  +449 | 0.0% → 100.0% | 0 → 449 | `reinvoke`         | `java.lang.invoke.LambdaForm$MH.0x00000004010aa800` |
| removed |   -42 |  95.5% → 0.0% |  42 → 0 | `newInvokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| removed |   -25 |  56.8% → 0.0% |  25 → 0 | `invokeStaticInit` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| removed |    -2 |   4.5% → 0.0% |   2 → 0 | `invokeStatic`     | `java.lang.invoke.DirectMethodHandle$Holder`        |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000040121a400`)

|  Change | Delta |             % | Samples | Callee          | Location                                             |
| ------: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------- |
|     new |  +446 | 0.0% → 100.0% | 0 → 446 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x0000000401097c00` |
| removed |   -37 |  84.1% → 0.0% |  37 → 0 | `invokeSpecial` | `java.lang.invoke.LambdaForm$DMH.0x0000000801084000` |
| removed |    -7 |  15.9% → 0.0% |   7 → 0 | `invokeVirtual` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000004012e3400`)

|  Change | Delta |             % | Samples | Callee            | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------- | ---------------------------------------------------- |
|     new |  +301 | 0.0% → 100.0% | 0 → 301 | `delegate`        | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
| removed |   -19 | 100.0% → 0.0% |  19 → 0 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x0000000801093400` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000004012da000`)

|  Change | Delta |             % | Samples | Callee             | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------ | ---------------------------------------------------- |
|     new |  +303 | 0.0% → 100.0% | 0 → 303 | `invokeStatic`     | `java.lang.invoke.LambdaForm$DMH.0x0000000401088800` |
| removed |   -27 |  87.1% → 0.0% |  27 → 0 | `newInvokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -4 |  12.9% → 0.0% |   4 → 0 | `invokeStaticInit` | `java.lang.invoke.DirectMethodHandle$Holder`         |
| removed |    -1 |   3.2% → 0.0% |   1 → 0 | `invokeStatic`     | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000004012d9800`)

|  Change | Delta |             % | Samples | Callee          | Location                                            |
| ------: | ----: | ------------: | ------: | --------------- | --------------------------------------------------- |
|     new |  +304 | 0.0% → 100.0% | 0 → 304 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| removed |   -51 | 100.0% → 0.0% |  51 → 0 | `reinvoke`      | `java.lang.invoke.LambdaForm$MH.0x00000008010ac400` |

##### `reinvoke` (`java.lang.invoke.LambdaForm$MH.0x00000004010aa800`)

|  Change | Delta |             % | Samples | Callee           | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------- | --------------------------------------------------- |
|     new |  +749 | 0.0% → 100.0% | 0 → 749 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000004010aa000` |
|     new |  +749 | 0.0% → 100.0% | 0 → 749 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x00000004010aac00` |
| removed |  -610 | 100.0% → 0.0% | 610 → 0 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000008010d3000` |
| removed |  -610 | 100.0% → 0.0% | 610 → 0 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x0000000801189400` |
|     new |  +303 |  0.0% → 40.5% | 0 → 303 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000004012da000` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000004010a9800`)

|  Change | Delta |             % | Samples | Callee          | Location                                             |
| ------: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------- |
|     new |  +722 | 0.0% → 100.0% | 0 → 722 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x0000000401094400` |
| removed |  -595 | 100.0% → 0.0% | 595 → 0 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `guardWithCatch` (`java.lang.invoke.LambdaForm$MH.0x0000000401098400`)

|  Change | Delta |            % | Samples | Callee          | Location                                            |
| ------: | ----: | -----------: | ------: | --------------- | --------------------------------------------------- |
|     new |  +687 | 0.0% → 98.8% | 0 → 687 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000040102b000` |
| removed |  -588 | 98.5% → 0.0% | 588 → 0 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000000801200c00` |
|     new |  +480 | 0.0% → 69.1% | 0 → 480 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000000401105400` |
|     new |   +22 |  0.0% → 3.2% |  0 → 22 | `invokeVirtual` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|     new |   +21 |  0.0% → 3.0% |  0 → 21 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000000401018400` |

##### `guard` (`java.lang.invoke.LambdaForm$MH.0x000000040109a000`)

|  Change | Delta |             % |   Samples | Callee     | Location                                            |
| ------: | ----: | ------------: | --------: | ---------- | --------------------------------------------------- |
|     new |  +695 | 0.0% → 100.0% |   0 → 695 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x0000000401099c00` |
|  -35.1% |  -206 | 98.3% → 54.8% | 587 → 381 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
| removed |   -11 |   1.8% → 0.0% |    11 → 0 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x0000000801202000` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000000401181c00`)

|  Change | Delta |             % | Samples | Callee          | Location                                            |
| ------: | ----: | ------------: | ------: | --------------- | --------------------------------------------------- |
|     new |  +618 | 0.0% → 100.0% | 0 → 618 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x00000004010d2400` |
| removed |  -585 | 100.0% → 0.0% | 585 → 0 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`        |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000004010c7400`)

|  Change | Delta |              % | Samples | Callee            | Location                                             |
| ------: | ----: | -------------: | ------: | ----------------- | ---------------------------------------------------- |
|     new |   +26 |   0.0% → 78.8% |  0 → 26 | `invokeSpecial`   | `java.lang.invoke.LambdaForm$DMH.0x0000000401084000` |
|     new |   +13 |   0.0% → 39.4% |  0 → 13 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x0000000401124800` |
| +133.3% |    +4 | 100.0% → 21.2% |   3 → 7 | `invokeVirtual`   | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invokeVirtual` (`java.lang.invoke.LambdaForm$DMH.0x0000000401097c00`)

|  Change | Delta |             % | Samples | Callee                        | Location                                                    |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------------------------------------------------------- |
|     new |  +445 |  0.0% → 96.1% | 0 → 445 | `isRuleSuppressed`            | `org.codenarc.analyzer.SuppressionAnalyzer`                 |
| removed |  -435 | 100.0% → 0.0% | 435 → 0 | `compile`                     | `org.codehaus.groovy.control.CompilationUnit`               |
|     new |   +17 |   0.0% → 3.7% |  0 → 17 | `matches`                     | `org.codenarc.analyzer.FilesystemSourceAnalyzer`            |
|     new |   +16 |   0.0% → 3.5% |  0 → 16 | `matches`                     | `org.codenarc.util.WildcardPattern`                         |
|     new |    +1 |   0.0% → 0.2% |   0 → 1 | `isConstructorCallAViolation` | `org.codenarc.rule.basic.BigDecimalInstantiationAstVisitor` |

##### `getMetaClass` (`org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl`)

| Change | Delta |      % | Samples | Callee         | Location                                   |
| -----: | ----: | -----: | ------: | -------------- | ------------------------------------------ |
| +44.3% |   +27 | 100.0% | 61 → 88 | `getMetaClass` | `org.codehaus.groovy.reflection.ClassInfo` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x000000040102a000`)

|  Change | Delta |             % | Samples | Callee                               | Location                                        |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ----------------------------------------------- |
| removed |  -736 | 100.0% → 0.0% | 736 → 0 | `fromCache`                          | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
| removed |  -524 |  71.2% → 0.0% | 524 → 0 | `selectMethod`                       | `org.codehaus.groovy.vmplugin.v8.IndyInterface` |
|     new |    +9 | 0.0% → 100.0% |   0 → 9 | `assertClassImplementsRuleInterface` | `org.codenarc.ruleset.RuleSetUtil`              |

##### `guard` (`java.lang.invoke.LambdaForm$MH.0x00000004010cb000`)

|  Change | Delta |             % | Samples | Callee     | Location                                            |
| ------: | ----: | ------------: | ------: | ---------- | --------------------------------------------------- |
| removed |  -672 | 100.0% → 0.0% | 672 → 0 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x0000000801098000` |
| removed |  -394 |  58.6% → 0.0% | 394 → 0 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`    |
|     new |    +9 |  0.0% → 90.0% |   0 → 9 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x00000004010cac00` |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `invoke`   | `java.lang.invoke.LambdaForm$MH.0x000000040109b800` |

##### `guardWithCatch` (`java.lang.invoke.LambdaForm$MH.0x00000004012bb000`)

|  Change | Delta |            % | Samples | Callee          | Location                                            |
| ------: | ----: | -----------: | ------: | --------------- | --------------------------------------------------- |
| removed |  -667 | 99.3% → 0.0% | 667 → 0 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x000000080102b000` |
| removed |  -479 | 71.3% → 0.0% | 479 → 0 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000000801105400` |
| removed |   -33 |  4.9% → 0.0% |  33 → 0 | `invokeVirtual` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| removed |   -25 |  3.7% → 0.0% |  25 → 0 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| removed |   -16 |  2.4% → 0.0% |  16 → 0 | `invoke`        | `java.lang.invoke.LambdaForm$MH.0x0000000801018400` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000004010dd800`)

|  Change | Delta |             % | Samples | Callee          | Location                                             |
| ------: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------- |
| removed |  -476 |  99.4% → 0.0% | 476 → 0 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +8 | 0.0% → 100.0% |   0 → 8 | `reinvoke`      | `java.lang.invoke.LambdaForm$MH.0x00000004010cac00`  |
| removed |    -3 |   0.6% → 0.0% |   3 → 0 | `invokeVirtual` | `java.lang.invoke.LambdaForm$DMH.0x0000000801105000` |

##### `invokeVirtual` (`java.lang.invoke.LambdaForm$DMH.0x0000000401095800`)

|  Change | Delta |            % | Samples | Callee             | Location                                         |
| ------: | ----: | -----------: | ------: | ------------------ | ------------------------------------------------ |
| removed |  -453 | 96.6% → 0.0% | 453 → 0 | `isRuleSuppressed` | `org.codenarc.analyzer.SuppressionAnalyzer`      |
| removed |   -16 |  3.4% → 0.0% |  16 → 0 | `matches`          | `org.codenarc.analyzer.FilesystemSourceAnalyzer` |
| removed |   -10 |  2.1% → 0.0% |  10 → 0 | `matches`          | `org.codenarc.util.WildcardPattern`              |
|     new |    +2 | 0.0% → 66.7% |   0 → 2 | `normalizePath`    | `org.codenarc.source.AbstractSourceCode`         |
|     new |    +1 | 0.0% → 33.3% |   0 → 1 | `parseText`        | `groovy.xml.XmlParser`                           |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000000401104000`)

|  Change | Delta |             % | Samples | Callee             | Location                                            |
| ------: | ----: | ------------: | ------: | ------------------ | --------------------------------------------------- |
| removed |  -458 | 100.0% → 0.0% | 458 → 0 | `reinvoke`         | `java.lang.invoke.LambdaForm$MH.0x00000008010ac400` |
|     new |   +23 |  0.0% → 85.2% |  0 → 23 | `newInvokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|     new |    +4 |  0.0% → 14.8% |   0 → 4 | `invokeStaticInit` | `java.lang.invoke.DirectMethodHandle$Holder`        |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000000401181400`)

|  Change | Delta |             % | Samples | Callee            | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------- | ---------------------------------------------------- |
| removed |  -435 | 100.0% → 0.0% | 435 → 0 | `invokeVirtual`   | `java.lang.invoke.LambdaForm$DMH.0x0000000801109400` |
|     new |   +11 | 0.0% → 100.0% |  0 → 11 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x0000000401095000` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000040112d800`)

|  Change | Delta |             % | Samples | Callee             | Location                                             |
| ------: | ----: | ------------: | ------: | ------------------ | ---------------------------------------------------- |
| removed |  -453 | 100.0% → 0.0% | 453 → 0 | `invokeVirtual`    | `java.lang.invoke.LambdaForm$DMH.0x0000000801096000` |
|     new |   +28 |  0.0% → 75.7% |  0 → 28 | `newInvokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |   +16 |  0.0% → 43.2% |  0 → 16 | `invokeStaticInit` | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |    +6 |  0.0% → 16.2% |   0 → 6 | `invokeStatic`     | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000000401121000`)

|  Change | Delta |             % | Samples | Callee          | Location                                             |
| ------: | ----: | ------------: | ------: | --------------- | ---------------------------------------------------- |
| removed |  -328 | 100.0% → 0.0% | 328 → 0 | `delegate`      | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
|     new |   +26 |  0.0% → 89.7% |  0 → 26 | `invokeSpecial` | `java.lang.invoke.LambdaForm$DMH.0x0000000401084000` |
|     new |    +3 |  0.0% → 10.3% |   0 → 3 | `invokeVirtual` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x00000004010c7c00`)

|  Change | Delta |             % | Samples | Callee         | Location                                             |
| ------: | ----: | ------------: | ------: | -------------- | ---------------------------------------------------- |
| removed |  -329 | 100.0% → 0.0% | 329 → 0 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
|     new |   +47 | 0.0% → 100.0% |  0 → 47 | `reinvoke`     | `java.lang.invoke.LambdaForm$MH.0x00000004010aa800`  |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000040112c000`)

|  Change | Delta |             % | Samples | Callee         | Location                                             |
| ------: | ----: | ------------: | ------: | -------------- | ---------------------------------------------------- |
| removed |  -122 |  64.9% → 0.0% | 122 → 0 | `reinvoke`     | `java.lang.invoke.LambdaForm$MH.0x0000000801098000`  |
| removed |   -66 |  35.1% → 0.0% |  66 → 0 | `delegate`     | `java.lang.invoke.DelegatingMethodHandle$Holder`     |
|     new |    +9 | 0.0% → 100.0% |   0 → 9 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000040102a000` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x000000040109ac00`)

|  Change | Delta |             % | Samples | Callee          | Location                                            |
| ------: | ----: | ------------: | ------: | --------------- | --------------------------------------------------- |
| removed |  -329 | 100.0% → 0.0% | 329 → 0 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`        |
|     new |  +126 |  0.0% → 61.2% | 0 → 126 | `reinvoke`      | `java.lang.invoke.LambdaForm$MH.0x0000000401099c00` |
|     new |   +80 |  0.0% → 38.8% |  0 → 80 | `delegate`      | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `guardWithCatch` (`java.lang.invoke.LambdaForm$MH.0x00000004010d2c00`)

|    Change | Delta |            % | Samples | Callee            | Location                                             |
| --------: | ----: | -----------: | ------: | ----------------- | ---------------------------------------------------- |
|   removed |  -711 | 97.3% → 0.0% | 711 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000008010ab400`  |
|   removed |  -676 | 92.5% → 0.0% | 676 → 0 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x00000008010c6800`  |
|       new |  +618 | 0.0% → 98.3% | 0 → 618 | `invoke`          | `java.lang.invoke.LambdaForm$MH.0x0000000401181c00`  |
| +30800.0% |  +616 | 0.3% → 98.3% | 2 → 618 | `invokeSpecial`   | `java.lang.invoke.DirectMethodHandle$Holder`         |
|   removed |  -604 | 82.6% → 0.0% | 604 → 0 | `invokeInterface` | `java.lang.invoke.LambdaForm$DMH.0x0000000801093000` |

##### `reinvoke` (`java.lang.invoke.LambdaForm$MH.0x0000000401188c00`)

|  Change | Delta |            % |   Samples | Callee           | Location                                                                                                |
| ------: | ----: | -----------: | --------: | ---------------- | ------------------------------------------------------------------------------------------------------- |
| removed |  -329 | 45.0% → 0.0% |   329 → 0 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000008012de000`                                                     |
| removed |  -128 | 17.5% → 0.0% |   128 → 0 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000008010a9400`                                                     |
|  -14.0% |  -102 |       100.0% | 731 → 629 | `guardWithCatch` | `java.lang.invoke.LambdaForm$MH.0x00000008010abc00 → java.lang.invoke.LambdaForm$MH.0x00000004010d2c00` |
|  -14.0% |  -102 |       100.0% | 731 → 629 | `guard`          | `java.lang.invoke.LambdaForm$MH.0x00000008010ac800 → java.lang.invoke.LambdaForm$MH.0x0000000401189000` |
|     new |   +60 |  0.0% → 9.5% |    0 → 60 | `invoke`         | `java.lang.invoke.LambdaForm$MH.0x00000004012e7000`                                                     |

##### `guard` (`java.lang.invoke.LambdaForm$MH.0x0000000401189000`)

| Change | Delta |             % |   Samples | Callee     | Location                                                                                                |
| -----: | ----: | ------------: | --------: | ---------- | ------------------------------------------------------------------------------------------------------- |
| -14.0% |  -102 |        100.0% | 731 → 629 | `reinvoke` | `java.lang.invoke.LambdaForm$MH.0x00000008010ac400 → java.lang.invoke.LambdaForm$MH.0x0000000401188c00` |
|  +1.7% |   +10 | 82.5% → 97.5% | 603 → 613 | `delegate` | `java.lang.invoke.DelegatingMethodHandle$Holder`                                                        |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000000401208800`)

|  Change | Delta |             % | Samples | Callee          | Location                                            |
| ------: | ----: | ------------: | ------: | --------------- | --------------------------------------------------- |
| removed |  -676 | 100.0% → 0.0% | 676 → 0 | `reinvoke`      | `java.lang.invoke.LambdaForm$MH.0x00000008010ac400` |
|     new |  +601 | 0.0% → 100.0% | 0 → 601 | `invokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder`        |
| removed |  -582 |  86.1% → 0.0% | 582 → 0 | `delegate`      | `java.lang.invoke.DelegatingMethodHandle$Holder`    |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000000401219c00`)

|  Change | Delta |             % | Samples | Callee         | Location                                             |
| ------: | ----: | ------------: | ------: | -------------- | ---------------------------------------------------- |
| removed |  -615 | 100.0% → 0.0% | 615 → 0 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x0000000801088800` |
|     new |  +579 | 0.0% → 100.0% | 0 → 579 | `reinvoke`     | `java.lang.invoke.LambdaForm$MH.0x0000000401188c00`  |
| removed |    -1 |   0.2% → 0.0% |   1 → 0 | `collector`    | `java.lang.invoke.LambdaForm$MH.0x00000008010d2c00`  |

##### `pathExpression` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|  Change | Delta |             % |   Samples | Callee            | Location                                               |
| ------: | ----: | ------------: | --------: | ----------------- | ------------------------------------------------------ |
|  -34.5% |   -29 | 36.8% → 28.5% |   84 → 55 | `pathElement`     | `org.apache.groovy.parser.antlr4.GroovyParser`         |
|  -54.8% |   -17 |  13.6% → 7.3% |   31 → 14 | `primary`         | `org.apache.groovy.parser.antlr4.GroovyParser`         |
|   -0.7% |    -1 | 67.1% → 78.8% | 153 → 152 | `adaptivePredict` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| removed |    -1 |   0.4% → 0.0% |     1 → 0 | `enterRule`       | `groovyjarjarantlr4.v4.runtime.Parser`                 |

##### `postfixExpression` (`org.apache.groovy.parser.antlr4.GroovyParser`)

|  Change | Delta |             % |   Samples | Callee            | Location                                               |
| ------: | ----: | ------------: | --------: | ----------------- | ------------------------------------------------------ |
|  -15.4% |   -35 | 99.6% → 99.5% | 228 → 193 | `pathExpression`  | `org.apache.groovy.parser.antlr4.GroovyParser`         |
| removed |    -3 |   1.3% → 0.0% |     3 → 0 | `adaptivePredict` | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |

##### `statement` (`org.apache.groovy.parser.antlr4.GroovyParser`)

| Change | Delta |             % |   Samples | Callee                 | Location                                               |
| -----: | ----: | ------------: | --------: | ---------------------- | ------------------------------------------------------ |
| -11.1% |   -24 | 62.6% → 61.0% | 216 → 192 | `statementExpression`  | `org.apache.groovy.parser.antlr4.GroovyParser`         |
|  -7.8% |   -10 | 37.1% → 37.5% | 128 → 118 | `adaptivePredict`      | `groovyjarjarantlr4.v4.runtime.atn.ParserATNSimulator` |
| -46.7% |    -7 |   4.3% → 2.5% |    15 → 8 | `expression`           | `org.apache.groovy.parser.antlr4.GroovyParser`         |
|  -2.5% |    -4 | 46.4% → 49.5% | 160 → 156 | `conditionalStatement` | `org.apache.groovy.parser.antlr4.GroovyParser`         |
| -13.6% |    -3 |   6.4% → 6.0% |   22 → 19 | `tryCatchStatement`    | `org.apache.groovy.parser.antlr4.GroovyParser`         |

# Heap snapshot

Allocated 13.4 MiB across 700,372 nodes and 852,764 edges.

| Category           |     % |     Size |   Nodes |
| ------------------ | ----: | -------: | ------: |
| Array              | 59.4% | 7.94 MiB | 130,134 |
| Number             | 28.5% | 3.82 MiB | 501,096 |
| Object             |  9.4% | 1.26 MiB |  43,416 |
| String             |  2.3% |  314 KiB |  22,945 |
| Object shape       |  0.3% | 43.7 KiB |   2,685 |
| Big number         | <0.1% | 2.52 KiB |      92 |
| Regular expression | <0.1% |    333 B |       3 |
| Synthetic          |  0.0% |      0 B |       1 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

|     % |     Size | Instances | Constructor                                     |
| ----: | -------: | --------: | ----------------------------------------------- |
| 28.5% | 3.82 MiB |   500,051 | `java.lang.Double`                              |
| 28.5% | 3.82 MiB |   100,010 | `java.lang.Double[]`                            |
| 14.1% | 1.89 MiB |     1,915 | `java.lang.Object[]`                            |
| 11.5% | 1.54 MiB |    23,691 | `byte[]`                                        |
|  2.9% |  393 KiB |     5,825 | `java.util.LinkedHashMap`                       |
|  2.3% |  314 KiB |    22,945 | `java.lang.String`                              |
|  2.0% |  276 KiB |    10,093 | `java.util.HashMap$Node`                        |
|  1.4% |  188 KiB |     1,929 | `int[]`                                         |
|  1.3% |  175 KiB |       410 | `java.util.HashMap$Node[]`                      |
|  1.2% |  171 KiB |     6,259 | `java.util.concurrent.ConcurrentHashMap$Node`   |
|  0.9% |  117 KiB |        94 | `java.util.concurrent.ConcurrentHashMap$Node[]` |
|  0.4% | 51.3 KiB |       223 | `char[]`                                        |
|  0.4% | 51.2 KiB |     1,191 | `java.util.LinkedHashMap$Entry`                 |
|  0.3% | 45.2 KiB |     5,785 | `java.util.jar.Attributes`                      |
|  0.3% | 43.7 KiB |     2,685 | `java.lang.Class`                               |
|  0.2% |   32 KiB |         2 | `scala.math.BigInt[]`                           |
|  0.2% | 30.6 KiB |       711 | `java.lang.invoke.MemberName`                   |
|  0.2% | 29.3 KiB |       624 | `java.lang.invoke.MethodType`                   |
|  0.2% |   29 KiB |       256 | `java.lang.ref.SoftReference[]`                 |
|  0.2% |   22 KiB |       627 | `jdk.internal.util.WeakReferenceKey`            |

#### Categories

##### Array

|     % |     Size | Instances | Constructor                                     |
| ----: | -------: | --------: | ----------------------------------------------- |
| 28.5% | 3.82 MiB |   100,010 | `java.lang.Double[]`                            |
| 14.1% | 1.89 MiB |     1,915 | `java.lang.Object[]`                            |
| 11.5% | 1.54 MiB |    23,691 | `byte[]`                                        |
|  1.4% |  188 KiB |     1,929 | `int[]`                                         |
|  1.3% |  175 KiB |       410 | `java.util.HashMap$Node[]`                      |
|  0.9% |  117 KiB |        94 | `java.util.concurrent.ConcurrentHashMap$Node[]` |
|  0.4% | 51.3 KiB |       223 | `char[]`                                        |
|  0.2% |   32 KiB |         2 | `scala.math.BigInt[]`                           |
|  0.2% |   29 KiB |       256 | `java.lang.ref.SoftReference[]`                 |
|  0.1% | 19.2 KiB |       447 | `java.lang.String[]`                            |
|  0.1% | 15.6 KiB |        16 | `long[]`                                        |
|  0.1% | 11.7 KiB |        40 | `java.lang.invoke.MethodHandle[]`               |
|  0.1% | 10.9 KiB |       497 | `java.lang.Class[]`                             |
|  0.1% |    8 KiB |         1 | `java.nio.ByteBuffer[]`                         |
|  0.1% |  7.5 KiB |        15 | `java.util.concurrent.ForkJoinTask[]`           |
| <0.1% | 5.66 KiB |       116 | `java.lang.invoke.LambdaForm$Name[]`            |
| <0.1% | 2.77 KiB |         2 | `java.time.LocalDateTime[]`                     |
| <0.1% |  2.7 KiB |         1 | `byte[][]`                                      |
| <0.1% | 2.66 KiB |         1 | `jdk.internal.math.FDBigInteger[]`              |
| <0.1% | 2.42 KiB |        10 | `java.lang.invoke.MemberName[]`                 |

##### Number

|     % |     Size | Instances | Constructor         |
| ----: | -------: | --------: | ------------------- |
| 28.5% | 3.82 MiB |   500,051 | `java.lang.Double`  |
| <0.1% |    2 KiB |       256 | `java.lang.Long`    |
| <0.1% | 1.08 KiB |       276 | `java.lang.Integer` |
| <0.1% |    512 B |       256 | `java.lang.Short`   |
| <0.1% |    256 B |       256 | `java.lang.Byte`    |
| <0.1% |      4 B |         1 | `java.lang.Float`   |

##### Object

|     % |     Size | Instances | Constructor                                       |
| ----: | -------: | --------: | ------------------------------------------------- |
|  2.9% |  393 KiB |     5,825 | `java.util.LinkedHashMap`                         |
|  2.0% |  276 KiB |    10,093 | `java.util.HashMap$Node`                          |
|  1.2% |  171 KiB |     6,259 | `java.util.concurrent.ConcurrentHashMap$Node`     |
|  0.4% | 51.2 KiB |     1,191 | `java.util.LinkedHashMap$Entry`                   |
|  0.3% | 45.2 KiB |     5,785 | `java.util.jar.Attributes`                        |
|  0.2% | 30.6 KiB |       711 | `java.lang.invoke.MemberName`                     |
|  0.2% | 29.3 KiB |       624 | `java.lang.invoke.MethodType`                     |
|  0.2% |   22 KiB |       627 | `jdk.internal.util.WeakReferenceKey`              |
|  0.1% | 17.9 KiB |       381 | `java.util.HashMap`                               |
|  0.1% | 10.5 KiB |       317 | `java.lang.invoke.LambdaForm$Name`                |
|  0.1% | 10.3 KiB |       264 | `sun.security.util.KnownOIDs`                     |
|  0.1% | 9.76 KiB |       119 | `java.util.concurrent.ConcurrentHashMap`          |
|  0.1% | 9.67 KiB |       101 | `java.lang.reflect.Field`                         |
|  0.1% | 8.77 KiB |       374 | `java.lang.module.ModuleDescriptor$Exports`       |
|  0.1% | 8.38 KiB |        67 | `java.net.URI`                                    |
|  0.1% | 7.18 KiB |       171 | `java.lang.invoke.DirectMethodHandle`             |
|  0.1% | 7.09 KiB |       123 | `java.lang.invoke.DirectMethodHandle$Constructor` |
| <0.1% | 6.21 KiB |       159 | `java.lang.ref.SoftReference`                     |
| <0.1% | 5.88 KiB |        64 | `java.lang.module.ModuleDescriptor`               |
| <0.1% | 5.85 KiB |       111 | `java.lang.invoke.LambdaForm`                     |

##### String

|    % |    Size | Instances | Constructor        |
| ---: | ------: | --------: | ------------------ |
| 2.3% | 314 KiB |    22,945 | `java.lang.String` |

#### Instances

Instances ranked by contribution to each constructor's self size.

##### `java.lang.Double`

|     % | Size | Instances | Path                                         |
| ----: | ---: | --------: | -------------------------------------------- |
| <0.1% |  8 B |         1 | `.DOUBLE_ZERO class sun.invoke.util.Wrapper` |
| <0.1% |  8 B |         1 | `[4] java.lang.Double[]`                     |
| <0.1% |  8 B |         1 | `[3] java.lang.Double[]`                     |
| <0.1% |  8 B |         1 | `[2] java.lang.Double[]`                     |
| <0.1% |  8 B |         1 | `[1] java.lang.Double[]`                     |

##### `java.lang.Double[]`

|     % |     Size | Instances | Path                                                                                                                                |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------- |
| 65.1% | 2.48 MiB |    65,092 | `(GC root)`                                                                                                                         |
| <0.1% |     40 B |         1 | `[4] java.lang.Object[] ← .elementData java.util.ArrayList ← [1] java.lang.Object[] ← .a1 scala.collection.immutable.VectorBuilder` |
| <0.1% |     40 B |         1 | `[3] java.lang.Object[] ← .elementData java.util.ArrayList ← [1] java.lang.Object[] ← .a1 scala.collection.immutable.VectorBuilder` |
| <0.1% |     40 B |         1 | `[2] java.lang.Object[] ← .elementData java.util.ArrayList ← [1] java.lang.Object[] ← .a1 scala.collection.immutable.VectorBuilder` |
| <0.1% |     40 B |         1 | `[1] java.lang.Object[] ← .elementData java.util.ArrayList ← [1] java.lang.Object[] ← .a1 scala.collection.immutable.VectorBuilder` |

##### `java.lang.Object[]`

|     % |     Size | Instances | Path                                            |
| ----: | -------: | --------: | ----------------------------------------------- |
| 83.5% | 1.58 MiB |         6 | `.elementData java.util.ArrayList`              |
|  4.0% | 78.1 KiB |         2 | `(GC root)`                                     |
|  0.9% | 16.6 KiB |         1 | `.elements java.util.ImmutableCollections$SetN` |
|  0.5% | 9.35 KiB |         1 | `[1080] java.lang.Object[]`                     |
|  0.4% | 8.39 KiB |         1 | `[1082] java.lang.Object[]`                     |

##### `byte[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                    |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 45.2% |  714 KiB |         9 | `.cen java.util.zip.ZipFile$Source`                                                                                                                                                                     |
|  1.4% |   22 KiB |         4 | `.value java.lang.String`                                                                                                                                                                               |
|  0.7% | 10.5 KiB |         2 | `.value java.lang.String ← .value java.util.LinkedHashMap$Entry ← .map java.util.jar.Attributes ← .attr java.util.jar.Manifest ← .referent java.lang.ref.SoftReference ← .manRef java.util.jar.JarFile` |
|  0.5% | 7.24 KiB |         1 | `.value java.lang.String ← [0] java.lang.Object[] ← .elementData java.util.ArrayList ← .classes jdk.internal.loader.ClassLoaders$PlatformClassLoader`                                                   |
|  0.1% | 1.41 KiB |         1 | `[133] byte[][] ← .ruleArray class sun.util.calendar.ZoneInfoFile`                                                                                                                                      |

##### `java.util.LinkedHashMap`

|     % |  Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  0.1% | 276 B |         4 | `.map java.util.jar.Attributes ← .attr java.util.jar.Manifest ← .referent java.lang.ref.SoftReference ← .manRef java.util.jar.JarFile`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| <0.1% |  69 B |         1 | `.v java.util.Collections$SingletonMap ← .valueTextMap java.time.format.DateTimeTextProvider$LocaleStore ← .val$store java.time.format.DateTimeFormatterBuilder$1 ← .provider java.time.format.DateTimeFormatterBuilder$TextPrinterParser ← [5] java.time.format.DateTimeFormatterBuilder$DateTimePrinterParser[] ← .printerParsers java.time.format.DateTimeFormatterBuilder$CompositePrinterParser ← .printerParser java.time.format.DateTimeFormatter ← .RFC_1123_DATE_TIME class java.time.format.DateTimeFormatter`                                                                                                                                                            |
| <0.1% |  69 B |         1 | `.v java.util.Collections$SingletonMap ← .valueTextMap java.time.format.DateTimeTextProvider$LocaleStore ← .val$store java.time.format.DateTimeFormatterBuilder$1 ← .provider java.time.format.DateTimeFormatterBuilder$TextPrinterParser ← [0] java.time.format.DateTimeFormatterBuilder$DateTimePrinterParser[] ← .printerParsers java.time.format.DateTimeFormatterBuilder$CompositePrinterParser ← [2] java.time.format.DateTimeFormatterBuilder$DateTimePrinterParser[] ← .printerParsers java.time.format.DateTimeFormatterBuilder$CompositePrinterParser ← .printerParser java.time.format.DateTimeFormatter ← .RFC_1123_DATE_TIME class java.time.format.DateTimeFormatter` |
| <0.1% |  69 B |         1 | `.map java.util.LinkedHashSet ← .value java.util.HashMap$Node ← [30] java.util.HashMap$Node[] ← .table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader ← .value java.util.Optional ← .moduleLoader org.renaissance.core.BenchmarkSuite`                                                                                                                                                                                                                                                                                                                                                                                                             |
| <0.1% |  69 B |         1 | `.map java.util.LinkedHashSet ← .value java.util.HashMap$Node ← [24] java.util.HashMap$Node[] ← .table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader ← .value java.util.Optional ← .moduleLoader org.renaissance.core.BenchmarkSuite`                                                                                                                                                                                                                                                                                                                                                                                                             |

##### `java.lang.String`

|     % |  Size | Instances | Path                                                                                                                                                                                               |
| ----: | ----: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  0.1% | 322 B |        23 | `(GC root)`                                                                                                                                                                                        |
| <0.1% |  14 B |         1 | `.nameAndId java.net.URLClassLoader`                                                                                                                                                               |
| <0.1% |  14 B |         1 | `.key java.util.concurrent.ConcurrentHashMap$Node ← [13] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .parallelLockMap java.net.URLClassLoader` |
| <0.1% |  14 B |         1 | `.basicTypeString sun.invoke.util.Wrapper`                                                                                                                                                         |
| <0.1% |  14 B |         1 | `.name java.lang.invoke.MemberName`                                                                                                                                                                |

##### `java.util.HashMap$Node`

|     % | Size | Instances | Path                                                                                                                    |
| ----: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------- |
| <0.1% | 28 B |         1 | `[13] java.util.HashMap$Node[] ← .table java.util.HashMap ← .FIELD_MAP class java.time.format.DateTimeFormatterBuilder` |
| <0.1% | 28 B |         1 | `[12] java.util.HashMap$Node[] ← .table java.util.HashMap ← .FIELD_MAP class java.time.format.DateTimeFormatterBuilder` |
| <0.1% | 28 B |         1 | `[11] java.util.HashMap$Node[] ← .table java.util.HashMap ← .FIELD_MAP class java.time.format.DateTimeFormatterBuilder` |
| <0.1% | 28 B |         1 | `[8] java.util.HashMap$Node[] ← .table java.util.HashMap ← .FIELD_MAP class java.time.format.DateTimeFormatterBuilder`  |
| <0.1% | 28 B |         1 | `[7] java.util.HashMap$Node[] ← .table java.util.HashMap ← .FIELD_MAP class java.time.format.DateTimeFormatterBuilder`  |

##### `int[]`

|     % |     Size | Instances | Path                                            |
| ----: | -------: | --------: | ----------------------------------------------- |
| 49.6% | 93.2 KiB |         6 | `.entries java.util.zip.ZipFile$Source`         |
| 13.1% | 24.7 KiB |         3 | `(GC root)`                                     |
|  6.1% | 11.4 KiB |         2 | `.table java.util.zip.ZipFile$Source`           |
|  2.2% | 4.13 KiB |         1 | `.A class java.lang.CharacterData00`            |
|  1.3% | 2.36 KiB |         1 | `.indices class sun.util.calendar.ZoneInfoFile` |

##### `java.util.HashMap$Node[]`

|     % |   Size | Instances | Path                                                                                                                                                                                                                                                                                                                                    |
| ----: | -----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 36.6% | 64 KiB |         2 | `.table java.util.HashMap ← .entries java.util.jar.Manifest ← .referent java.lang.ref.SoftReference ← .manRef java.util.jar.JarFile`                                                                                                                                                                                                    |
|  4.6% |  8 KiB |         1 | `.table java.util.HashMap`                                                                                                                                                                                                                                                                                                              |
|  4.6% |  8 KiB |         1 | `.table java.util.HashMap ← .lookup sun.text.resources.cldr.FormatData ← .table java.util.concurrent.ConcurrentHashMap ← .cacheList class sun.util.resources.Bundles`                                                                                                                                                                   |
|  4.6% |  8 KiB |         1 | `.table java.util.HashMap ← .lookup sun.text.resources.cldr.FormatData_en ← .referent sun.util.resources.Bundles$BundleReference ← .val java.util.concurrent.ConcurrentHashMap$Node ← [17] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .cacheList class sun.util.resources.Bundles` |
|  4.6% |  8 KiB |         1 | `.table java.util.HashMap ← .map java.util.HashSet ← .c java.util.Collections$UnmodifiableSet ← .ZONE_IDS class java.time.zone.ZoneRulesProvider`                                                                                                                                                                                       |

##### `java.util.concurrent.ConcurrentHashMap$Node`

|     % | Size | Instances | Path                                                                                                                                                                                                                                                    |
| ----: | ---: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <0.1% | 28 B |         1 | `[22] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .parallelLockMap java.net.URLClassLoader`                                                                                                         |
| <0.1% | 28 B |         1 | `[14] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .parallelLockMap java.net.URLClassLoader`                                                                                                         |
| <0.1% | 28 B |         1 | `.next java.util.concurrent.ConcurrentHashMap$Node ← [14] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .parallelLockMap java.net.URLClassLoader`                                                     |
| <0.1% | 28 B |         1 | `.next java.util.concurrent.ConcurrentHashMap$Node ← .next java.util.concurrent.ConcurrentHashMap$Node ← [14] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .parallelLockMap java.net.URLClassLoader` |
| <0.1% | 28 B |         1 | `[13] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .parallelLockMap java.net.URLClassLoader`                                                                                                         |

##### `java.util.concurrent.ConcurrentHashMap$Node[]`

|     % |   Size | Instances | Path                                                                                                                                                                                 |
| ----: | -----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 13.7% | 16 KiB |         1 | `.table java.util.concurrent.ConcurrentHashMap ← .map jdk.internal.util.ReferencedKeyMap ← .map jdk.internal.util.ReferencedKeySet ← .internTable class java.lang.invoke.MethodType` |
| 13.7% | 16 KiB |         1 | `.table java.util.concurrent.ConcurrentHashMap ← .parallelLockMap jdk.internal.loader.ClassLoaders$AppClassLoader`                                                                   |
| 13.7% | 16 KiB |         1 | `.table java.util.concurrent.ConcurrentHashMap`                                                                                                                                      |
|  6.9% |  8 KiB |         1 | `.table java.util.concurrent.ConcurrentHashMap ← .parallelLockMap java.net.URLClassLoader`                                                                                           |
|  6.9% |  8 KiB |         1 | `.table java.util.concurrent.ConcurrentHashMap ← .parallelLockMap jdk.internal.loader.ClassLoaders$PlatformClassLoader`                                                              |

##### `char[]`

|     % |     Size | Instances | Path                                                                                      |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------- |
| 31.2% |   16 KiB |         1 | `.cb java.io.BufferedWriter ← .textOut java.io.PrintStream`                               |
| 31.2% |   16 KiB |         1 | `.cb java.io.BufferedWriter ← .textOut java.io.PrintStream ← .out class java.lang.System` |
| 23.0% | 11.8 KiB |         1 | `.Y class java.lang.CharacterData00`                                                      |
|  7.8% |    4 KiB |         1 | `.X class java.lang.CharacterData00`                                                      |
|  4.0% | 2.06 KiB |         1 | `.B class java.lang.CharacterData00`                                                      |

##### `java.util.LinkedHashMap$Entry`

|    % |  Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.8% | 440 B |        10 | `.v java.util.Collections$SingletonMap ← .valueTextMap java.time.format.DateTimeTextProvider$LocaleStore ← .val$store java.time.format.DateTimeFormatterBuilder$1 ← .provider java.time.format.DateTimeFormatterBuilder$TextPrinterParser ← [5] java.time.format.DateTimeFormatterBuilder$DateTimePrinterParser[] ← .printerParsers java.time.format.DateTimeFormatterBuilder$CompositePrinterParser ← .printerParser java.time.format.DateTimeFormatter ← .RFC_1123_DATE_TIME class java.time.format.DateTimeFormatter`                                                                                                                                                                                            |
| 0.1% |  44 B |         1 | `.tail java.util.LinkedHashMap ← .v java.util.Collections$SingletonMap ← .valueTextMap java.time.format.DateTimeTextProvider$LocaleStore ← .val$store java.time.format.DateTimeFormatterBuilder$1 ← .provider java.time.format.DateTimeFormatterBuilder$TextPrinterParser ← [5] java.time.format.DateTimeFormatterBuilder$DateTimePrinterParser[] ← .printerParsers java.time.format.DateTimeFormatterBuilder$CompositePrinterParser ← .printerParser java.time.format.DateTimeFormatter ← .RFC_1123_DATE_TIME class java.time.format.DateTimeFormatter`                                                                                                                                                            |
| 0.1% |  44 B |         1 | `.head java.util.LinkedHashMap ← .v java.util.Collections$SingletonMap ← .valueTextMap java.time.format.DateTimeTextProvider$LocaleStore ← .val$store java.time.format.DateTimeFormatterBuilder$1 ← .provider java.time.format.DateTimeFormatterBuilder$TextPrinterParser ← [5] java.time.format.DateTimeFormatterBuilder$DateTimePrinterParser[] ← .printerParsers java.time.format.DateTimeFormatterBuilder$CompositePrinterParser ← .printerParser java.time.format.DateTimeFormatter ← .RFC_1123_DATE_TIME class java.time.format.DateTimeFormatter`                                                                                                                                                            |
| 0.1% |  44 B |         1 | `.tail java.util.LinkedHashMap ← .v java.util.Collections$SingletonMap ← .valueTextMap java.time.format.DateTimeTextProvider$LocaleStore ← .val$store java.time.format.DateTimeFormatterBuilder$1 ← .provider java.time.format.DateTimeFormatterBuilder$TextPrinterParser ← [0] java.time.format.DateTimeFormatterBuilder$DateTimePrinterParser[] ← .printerParsers java.time.format.DateTimeFormatterBuilder$CompositePrinterParser ← [2] java.time.format.DateTimeFormatterBuilder$DateTimePrinterParser[] ← .printerParsers java.time.format.DateTimeFormatterBuilder$CompositePrinterParser ← .printerParser java.time.format.DateTimeFormatter ← .RFC_1123_DATE_TIME class java.time.format.DateTimeFormatter` |
| 0.1% |  44 B |         1 | `.v java.util.Collections$SingletonMap ← .valueTextMap java.time.format.DateTimeTextProvider$LocaleStore ← .val$store java.time.format.DateTimeFormatterBuilder$1 ← .provider java.time.format.DateTimeFormatterBuilder$TextPrinterParser ← [0] java.time.format.DateTimeFormatterBuilder$DateTimePrinterParser[] ← .printerParsers java.time.format.DateTimeFormatterBuilder$CompositePrinterParser ← [2] java.time.format.DateTimeFormatterBuilder$DateTimePrinterParser[] ← .printerParsers java.time.format.DateTimeFormatterBuilder$CompositePrinterParser ← .printerParser java.time.format.DateTimeFormatter ← .RFC_1123_DATE_TIME class java.time.format.DateTimeFormatter`                                 |

##### `java.util.jar.Attributes`

|     % | Size | Instances | Path                                                                                                                                                                                                                                |
| ----: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  0.1% | 32 B |         4 | `.attr java.util.jar.Manifest ← .referent java.lang.ref.SoftReference ← .manRef java.util.jar.JarFile`                                                                                                                              |
| <0.1% |  8 B |         1 | `.value java.util.HashMap$Node ← [44] java.util.HashMap$Node[] ← .table java.util.HashMap ← .entries java.util.jar.Manifest ← .referent java.lang.ref.SoftReference ← .manRef java.util.jar.JarFile`                                |
| <0.1% |  8 B |         1 | `.value java.util.HashMap$Node ← [43] java.util.HashMap$Node[] ← .table java.util.HashMap ← .entries java.util.jar.Manifest ← .referent java.lang.ref.SoftReference ← .manRef java.util.jar.JarFile`                                |
| <0.1% |  8 B |         1 | `.value java.util.HashMap$Node ← [42] java.util.HashMap$Node[] ← .table java.util.HashMap ← .entries java.util.jar.Manifest ← .referent java.lang.ref.SoftReference ← .manRef java.util.jar.JarFile`                                |
| <0.1% |  8 B |         1 | `.value java.util.HashMap$Node ← .next java.util.HashMap$Node ← [42] java.util.HashMap$Node[] ← .table java.util.HashMap ← .entries java.util.jar.Manifest ← .referent java.lang.ref.SoftReference ← .manRef java.util.jar.JarFile` |

##### `java.lang.Class`

|     % |     Size | Instances | Path                                                                                             |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------ |
| 21.2% | 9.25 KiB |        31 | `(GC root)`                                                                                      |
|  0.5% |    224 B |         1 | `[32] java.lang.Object[] ← .elementData java.util.ArrayList ← .classes java.net.URLClassLoader`  |
|  0.5% |    224 B |         1 | `[75] java.lang.Object[] ← .elementData java.util.ArrayList ← .classes java.net.URLClassLoader`  |
|  0.4% |    161 B |         1 | `[296] java.lang.Object[] ← .elementData java.util.ArrayList ← .classes java.net.URLClassLoader` |
|  0.3% |    152 B |         1 | `[202] java.lang.Object[] ← .elementData java.util.ArrayList ← .classes java.net.URLClassLoader` |

##### `scala.math.BigInt[]`

|     % |   Size | Instances | Path                                                                                                                               |
| ----: | -----: | --------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| 50.0% | 16 KiB |         1 | `.cache class scala.math.BigInt$ ← [191] java.lang.Object[] ← .elementData java.util.ArrayList ← .classes java.net.URLClassLoader` |
| 50.0% | 16 KiB |         1 | `.cache class scala.math.BigInt$ ← [169] java.lang.Object[] ← .elementData java.util.ArrayList ← .classes java.net.URLClassLoader` |

##### `java.lang.invoke.MemberName`

|    % | Size | Instances | Path                                                                                                                                                                           |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0.3% | 88 B |         2 | `(GC root)`                                                                                                                                                                    |
| 0.1% | 44 B |         1 | `[5] java.lang.Object[] ← .elements java.util.ImmutableCollections$ListN`                                                                                                      |
| 0.1% | 44 B |         1 | `.member java.lang.invoke.LambdaForm$NamedFunction ← .function java.lang.invoke.LambdaForm$Name ← [4] java.lang.invoke.LambdaForm$Name[] ← .names java.lang.invoke.LambdaForm` |
| 0.1% | 44 B |         1 | `.member java.lang.invoke.LambdaForm$NamedFunction ← .function java.lang.invoke.LambdaForm$Name ← [9] java.lang.invoke.LambdaForm$Name[] ← .names java.lang.invoke.LambdaForm` |
| 0.1% | 44 B |         1 | `.member java.lang.invoke.LambdaForm$NamedFunction`                                                                                                                            |

##### `java.lang.invoke.MethodType`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 90.7% | 26.5 KiB |       566 | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.2% |     48 B |         1 | `.referent jdk.internal.util.WeakReferenceKey ← .key java.util.concurrent.ConcurrentHashMap$Node ← [217] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .map jdk.internal.util.ReferencedKeyMap ← .map jdk.internal.util.ReferencedKeySet ← .internTable class java.lang.invoke.MethodType`                                                     |
|  0.2% |     48 B |         1 | `.referent jdk.internal.util.WeakReferenceKey ← .key java.util.concurrent.ConcurrentHashMap$Node ← [573] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .map jdk.internal.util.ReferencedKeyMap ← .map jdk.internal.util.ReferencedKeySet ← .internTable class java.lang.invoke.MethodType`                                                     |
|  0.2% |     48 B |         1 | `.referent jdk.internal.util.WeakReferenceKey ← .key java.util.concurrent.ConcurrentHashMap$Node ← .next java.util.concurrent.ConcurrentHashMap$Node ← [414] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .map jdk.internal.util.ReferencedKeyMap ← .map jdk.internal.util.ReferencedKeySet ← .internTable class java.lang.invoke.MethodType` |
|  0.2% |     48 B |         1 | `.referent jdk.internal.util.WeakReferenceKey ← .key java.util.concurrent.ConcurrentHashMap$Node ← [752] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .map jdk.internal.util.ReferencedKeyMap ← .map jdk.internal.util.ReferencedKeySet ← .internTable class java.lang.invoke.MethodType`                                                     |

##### `java.lang.ref.SoftReference[]`

|     % |     Size | Instances | Path                                                                                 |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------ |
| 61.6% | 17.9 KiB |        88 | `.lambdaForms java.lang.invoke.MethodTypeForm`                                       |
| 28.0% | 8.13 KiB |        40 | `.lambdaForms java.lang.invoke.MethodTypeForm ← .form java.lang.invoke.MethodType`   |
|  7.1% | 2.06 KiB |        88 | `.methodHandles java.lang.invoke.MethodTypeForm`                                     |
|  3.2% |    960 B |        40 | `.methodHandles java.lang.invoke.MethodTypeForm ← .form java.lang.invoke.MethodType` |

##### `jdk.internal.util.WeakReferenceKey`

|    % | Size | Instances | Path                                                                                                                                                                                                                                                                                                                                             |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0.2% | 36 B |         1 | `.key java.util.concurrent.ConcurrentHashMap$Node ← [39] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .map jdk.internal.util.ReferencedKeyMap ← .map jdk.internal.util.ReferencedKeySet ← .internTable class java.lang.invoke.MethodType`                                                     |
| 0.2% | 36 B |         1 | `.key java.util.concurrent.ConcurrentHashMap$Node ← [32] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .map jdk.internal.util.ReferencedKeyMap ← .map jdk.internal.util.ReferencedKeySet ← .internTable class java.lang.invoke.MethodType`                                                     |
| 0.2% | 36 B |         1 | `.key java.util.concurrent.ConcurrentHashMap$Node ← .next java.util.concurrent.ConcurrentHashMap$Node ← [32] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .map jdk.internal.util.ReferencedKeyMap ← .map jdk.internal.util.ReferencedKeySet ← .internTable class java.lang.invoke.MethodType` |
| 0.2% | 36 B |         1 | `.key java.util.concurrent.ConcurrentHashMap$Node ← [27] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .map jdk.internal.util.ReferencedKeyMap ← .map jdk.internal.util.ReferencedKeySet ← .internTable class java.lang.invoke.MethodType`                                                     |
| 0.2% | 36 B |         1 | `.key java.util.concurrent.ConcurrentHashMap$Node ← [24] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .map jdk.internal.util.ReferencedKeyMap ← .map jdk.internal.util.ReferencedKeySet ← .internTable class java.lang.invoke.MethodType`                                                     |

##### `java.lang.String[]`

|     % |     Size | Instances | Path                                                                                                                                                                                        |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.6% | 4.72 KiB |         1 | `.regions class sun.util.calendar.ZoneInfoFile`                                                                                                                                             |
| 24.6% | 4.72 KiB |         1 | `.a java.util.Arrays$ArrayList ← .regionIds java.time.zone.TzdbZoneRulesProvider`                                                                                                           |
|  3.5% |    680 B |         1 | `.value java.util.HashMap$Node ← .next java.util.HashMap$Node ← [1] java.util.HashMap$Node[] ← .table java.util.HashMap ← .parentLocalesMap class sun.util.cldr.CLDRBaseLocaleDataMetaInfo` |
|  1.8% |    352 B |         1 | `.value java.util.HashMap$Node ← [0] java.util.HashMap$Node[] ← .table java.util.HashMap ← .parentLocalesMap class sun.util.cldr.CLDRBaseLocaleDataMetaInfo`                                |
|  0.9% |    184 B |         1 | `.value java.util.HashMap$Node ← [13] java.util.HashMap$Node[] ← .table java.util.HashMap ← .parentLocalesMap class sun.util.cldr.CLDRBaseLocaleDataMetaInfo`                               |

##### `java.util.HashMap`

|    % | Size | Instances | Path                                                                                                                                                    |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.3% | 48 B |         1 | `.FIELD_MAP class java.time.format.DateTimeFormatterBuilder`                                                                                            |
| 0.3% | 48 B |         1 | `.map java.util.HashSet ← .NATIVE_ACCESS_MODULES class jdk.internal.module.ModuleBootstrap`                                                             |
| 0.3% | 48 B |         1 | `.savedProps class jdk.internal.misc.VM`                                                                                                                |
| 0.3% | 48 B |         1 | `(GC root)`                                                                                                                                             |
| 0.3% | 48 B |         1 | `.children java.util.logging.LogManager$LogNode ← .root java.util.logging.LogManager$SystemLoggerContext ← .systemContext java.util.logging.LogManager` |

##### `long[]`

|     % |     Size | Instances | Path                                                                                                |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------- |
| 61.9% | 9.64 KiB |         1 | `.g class jdk.internal.math.MathUtils`                                                              |
| 18.1% | 2.82 KiB |         1 | `(GC root)`                                                                                         |
|  8.9% | 1.38 KiB |         1 | `.savingsInstantTransitions java.time.zone.ZoneRules`                                               |
|  1.9% |    296 B |         1 | `.bitsPerDigit class java.math.BigInteger`                                                          |
|  1.6% |    256 B |         1 | `[3] java.lang.Object[] ← .backtrace java.lang.OutOfMemoryError ← [3] java.lang.OutOfMemoryError[]` |

##### `java.lang.invoke.MethodHandle[]`

|     % |     Size | Instances | Path                                                                          |
| ----: | -------: | --------: | ----------------------------------------------------------------------------- |
| 73.7% | 8.63 KiB |        17 | `.invokers java.lang.invoke.Invokers ← .invokers java.lang.invoke.MethodType` |
| 17.1% |    2 KiB |         1 | `.ARRAYS class java.lang.invoke.MethodHandleImpl`                             |
|  0.7% |     80 B |         1 | `.ZERO_MHS class java.lang.invoke.MethodHandles`                              |
|  0.7% |     80 B |         1 | `.IDENTITY_MHS class java.lang.invoke.MethodHandles`                          |
|  0.6% |     72 B |         1 | `.HANDLES class java.lang.invoke.MethodHandleImpl`                            |

##### `java.lang.Class[]`

|     % |     Size | Instances | Path                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------- |
| 78.6% | 8.57 KiB |       324 | `.ptypes java.lang.invoke.MethodType`                                            |
| 13.9% | 1.52 KiB |        66 | `(GC root)`                                                                      |
|  0.2% |     24 B |         1 | `.STATICALLY_INVOCABLE_PACKAGES class java.lang.invoke.InvokerBytecodeGenerator` |
|  0.1% |      8 B |         1 | `.parameterTypes java.lang.reflect.Method`                                       |
|  0.1% |      8 B |         1 | `.METHOD_HANDLE_ARRAY class java.lang.invoke.MethodType`                         |

##### `java.lang.invoke.LambdaForm$Name`

|    % | Size | Instances | Path                                                                          |
| ---: | ---: | --------: | ----------------------------------------------------------------------------- |
| 0.6% | 68 B |         2 | `[4] java.lang.invoke.LambdaForm$Name[] ← .names java.lang.invoke.LambdaForm` |
| 0.6% | 68 B |         2 | `(GC root)`                                                                   |
| 0.6% | 68 B |         2 | `[3] java.lang.invoke.LambdaForm$Name[] ← .names java.lang.invoke.LambdaForm` |
| 0.3% | 34 B |         1 | `[9] java.lang.invoke.LambdaForm$Name[] ← .names java.lang.invoke.LambdaForm` |
| 0.3% | 34 B |         1 | `[8] java.lang.invoke.LambdaForm$Name[] ← .names java.lang.invoke.LambdaForm` |

##### `sun.security.util.KnownOIDs`

|    % | Size | Instances | Path                                                       |
| ---: | ---: | --------: | ---------------------------------------------------------- |
| 0.4% | 40 B |         1 | `.AES_256$KWP$NoPadding class sun.security.util.KnownOIDs` |
| 0.4% | 40 B |         1 | `.SHA3_512withRSA class sun.security.util.KnownOIDs`       |
| 0.4% | 40 B |         1 | `.sect131r1 class sun.security.util.KnownOIDs`             |
| 0.4% | 40 B |         1 | `.sect131r2 class sun.security.util.KnownOIDs`             |
| 0.4% | 40 B |         1 | `.OCSPNoCheck class sun.security.util.KnownOIDs`           |

##### `java.util.concurrent.ConcurrentHashMap`

|    % | Size | Instances | Path                                                         |
| ---: | ---: | --------: | ------------------------------------------------------------ |
| 0.8% | 84 B |         1 | `.CACHE class java.time.format.DateTimeTextProvider`         |
| 0.8% | 84 B |         1 | `.CACHE class java.time.format.DecimalStyle`                 |
| 0.8% | 84 B |         1 | `.CHRONOS_BY_TYPE class java.time.chrono.AbstractChronology` |
| 0.8% | 84 B |         1 | `.parallelLockMap java.net.URLClassLoader`                   |
| 0.8% | 84 B |         1 | `.cache java.lang.invoke.BoundMethodHandle$Specializer`      |

##### `java.lang.reflect.Field`

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 9.67 KiB |       101 | `(GC root)` |

##### `java.lang.module.ModuleDescriptor$Exports`

|    % | Size | Instances | Path                                                                                                                  |
| ---: | ---: | --------: | --------------------------------------------------------------------------------------------------------------------- |
| 1.1% | 96 B |         4 | `.e0 java.util.ImmutableCollections$Set12 ← .exports java.lang.module.ModuleDescriptor`                               |
| 0.5% | 48 B |         2 | `.e1 java.util.ImmutableCollections$Set12 ← .exports java.lang.module.ModuleDescriptor`                               |
| 0.3% | 24 B |         1 | `[1] java.lang.Object[] ← .elements java.util.ImmutableCollections$SetN ← .exports java.lang.module.ModuleDescriptor` |
| 0.3% | 24 B |         1 | `[2] java.lang.Object[] ← .elements java.util.ImmutableCollections$SetN ← .exports java.lang.module.ModuleDescriptor` |
| 0.3% | 24 B |         1 | `[3] java.lang.Object[] ← .elements java.util.ImmutableCollections$SetN ← .exports java.lang.module.ModuleDescriptor` |

##### `java.net.URI`

|    % |  Size | Instances | Path                                                              |
| ---: | ----: | --------: | ----------------------------------------------------------------- |
| 3.0% | 256 B |         2 | `(GC root)`                                                       |
| 1.5% | 128 B |         1 | `.benchmarkMetadataUri class org.renaissance.core.BenchmarkSuite` |
| 1.5% | 128 B |         1 | `.moduleMetadataUri class org.renaissance.core.BenchmarkSuite`    |
| 1.5% | 128 B |         1 | `.moduleMetadataUri class org.renaissance.core.Launcher`          |
| 1.5% | 128 B |         1 | `.location jdk.internal.module.ModuleReferenceImpl`               |

##### `java.nio.ByteBuffer[]`

|      % |  Size | Instances | Path                                                                                                                                                                                                                          |
| -----: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 8 KiB |         1 | `.buffers sun.nio.ch.Util$BufferCache ← .value java.lang.ThreadLocal$ThreadLocalMap$Entry ← [12] java.lang.ThreadLocal$ThreadLocalMap$Entry[] ← .table java.lang.ThreadLocal$ThreadLocalMap ← .threadLocals java.lang.Thread` |

##### `java.util.concurrent.ForkJoinTask[]`

|      % |    Size | Instances | Path                                                 |
| -----: | ------: | --------: | ---------------------------------------------------- |
| 100.0% | 7.5 KiB |        15 | `.array java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `java.lang.invoke.DirectMethodHandle`

|    % |  Size | Instances | Path                                                                                                                                                                |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.8% | 430 B |        10 | `(GC root)`                                                                                                                                                         |
| 1.2% |  86 B |         2 | `.e0 java.util.ImmutableCollections$List12 ← .factories java.lang.invoke.BoundMethodHandle$SpeciesData`                                                             |
| 0.6% |  43 B |         1 | `[33] java.lang.Object[] ← .<resolved_references> class java.security.Security`                                                                                     |
| 0.6% |  43 B |         1 | `[49] java.lang.Object[] ← .<resolved_references> class java.time.format.DateTimeFormatterBuilder`                                                                  |
| 0.6% |  43 B |         1 | `.target java.lang.invoke.MethodHandleImpl$AsVarargsCollector ← [1] java.lang.Object[] ← .<resolved_references> class java.util.logging.LogManager$LoggerContext$1` |

##### `java.lang.invoke.DirectMethodHandle$Constructor`

|    % |  Size | Instances | Path                                                                                                       |
| ---: | ----: | --------: | ---------------------------------------------------------------------------------------------------------- |
| 4.1% | 295 B |         5 | `(GC root)`                                                                                                |
| 0.8% |  59 B |         1 | `[23] java.lang.Object[] ← .<resolved_references> class org.renaissance.jdk.concurrent.JavaKMeans`         |
| 0.8% |  59 B |         1 | `[4] java.lang.Object[] ← .<resolved_references> class java.lang.WeakPairMap`                              |
| 0.8% |  59 B |         1 | `[244] java.lang.Object[] ← .<resolved_references> class java.util.stream.Collectors`                      |
| 0.8% |  59 B |         1 | `[75] java.lang.Object[] ← .<resolved_references> class sun.util.locale.provider.JRELocaleProviderAdapter` |

##### `java.lang.ref.SoftReference`

|    % |  Size | Instances | Path                                                                                 |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------ |
| 1.9% | 120 B |         3 | `[0] java.lang.ref.SoftReference[] ← .methodHandles java.lang.invoke.MethodTypeForm` |
| 1.3% |  80 B |         2 | `[15] java.lang.ref.SoftReference[] ← .lambdaForms java.lang.invoke.MethodTypeForm`  |
| 0.6% |  40 B |         1 | `(GC root)`                                                                          |
| 0.6% |  40 B |         1 | `[2] java.lang.ref.SoftReference[] ← .lambdaForms java.lang.invoke.MethodTypeForm`   |
| 0.6% |  40 B |         1 | `[10] java.lang.ref.SoftReference[] ← .lambdaForms java.lang.invoke.MethodTypeForm`  |

##### `java.lang.module.ModuleDescriptor`

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 5.88 KiB |        64 | `(GC root)` |

##### `java.lang.invoke.LambdaForm`

|    % |  Size | Instances | Path                                                                                                                                                                                                                             |
| ---: | ----: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.4% | 324 B |         6 | `(GC root)`                                                                                                                                                                                                                      |
| 2.7% | 162 B |         3 | `.referent java.lang.ref.SoftReference ← [10] java.lang.ref.SoftReference[] ← .lambdaForms java.lang.invoke.MethodTypeForm`                                                                                                      |
| 1.8% | 108 B |         2 | `.referent java.lang.ref.SoftReference ← [15] java.lang.ref.SoftReference[] ← .lambdaForms java.lang.invoke.MethodTypeForm`                                                                                                      |
| 1.8% | 108 B |         2 | `.referent java.lang.ref.SoftReference ← [7] java.lang.ref.SoftReference[] ← .lambdaForms java.lang.invoke.MethodTypeForm`                                                                                                       |
| 0.9% |  54 B |         1 | `.referent java.lang.invoke.LambdaFormEditor$Transform ← .transformCache java.lang.invoke.LambdaForm ← .referent java.lang.ref.SoftReference ← [7] java.lang.ref.SoftReference[] ← .lambdaForms java.lang.invoke.MethodTypeForm` |

##### `java.lang.invoke.LambdaForm$Name[]`

|    % |  Size | Instances | Path                                                                                                                                                             |
| ---: | ----: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.4% | 488 B |         4 | `.names java.lang.invoke.LambdaForm`                                                                                                                             |
| 2.9% | 168 B |         2 | `.names java.lang.invoke.LambdaForm ← .referent java.lang.ref.SoftReference ← [10] java.lang.ref.SoftReference[] ← .lambdaForms java.lang.invoke.MethodTypeForm` |
| 2.1% | 120 B |         1 | `.names java.lang.invoke.LambdaForm ← .referent java.lang.ref.SoftReference ← [15] java.lang.ref.SoftReference[] ← .lambdaForms java.lang.invoke.MethodTypeForm` |
| 1.4% |  80 B |         1 | `[4] java.lang.invoke.LambdaForm$Name[][] ← .INTERNED_ARGUMENTS class java.lang.invoke.LambdaForm`                                                               |
| 1.4% |  80 B |         1 | `[3] java.lang.invoke.LambdaForm$Name[][] ← .INTERNED_ARGUMENTS class java.lang.invoke.LambdaForm`                                                               |

##### `java.time.LocalDateTime[]`

|      % |     Size | Instances | Path                                                |
| -----: | -------: | --------: | --------------------------------------------------- |
| 100.0% | 2.77 KiB |         1 | `.savingsLocalTransitions java.time.zone.ZoneRules` |
|   0.0% |      0 B |         1 | `.EMPTY_LDT_ARRAY class java.time.zone.ZoneRules`   |

##### `byte[][]`

|      % |    Size | Instances | Path                                              |
| -----: | ------: | --------: | ------------------------------------------------- |
| 100.0% | 2.7 KiB |         1 | `.ruleArray class sun.util.calendar.ZoneInfoFile` |

##### `jdk.internal.math.FDBigInteger[]`

|      % |     Size | Instances | Path                                                 |
| -----: | -------: | --------: | ---------------------------------------------------- |
| 100.0% | 2.66 KiB |         1 | `[2] java.lang.Object[] ← [2221] java.lang.Object[]` |

##### `java.lang.invoke.MemberName[]`

|     % |     Size | Instances | Path                                                                                                                  |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------- |
| 80.0% | 1.94 KiB |         8 | `.memberName_table java.lang.invoke.VarForm`                                                                          |
| 10.0% |    248 B |         1 | `.memberName_table java.lang.invoke.VarForm ← .FORM class java.lang.invoke.VarHandleBooleans$FieldInstanceReadOnly`   |
| 10.0% |    248 B |         1 | `.memberName_table java.lang.invoke.VarForm ← .FORM class java.lang.invoke.VarHandleReferences$FieldInstanceReadOnly` |

##### `java.lang.Long`

|    % | Size | Instances | Path                                                           |
| ---: | ---: | --------: | -------------------------------------------------------------- |
| 0.4% |  8 B |         1 | `[0] java.lang.Long[] ← .cache class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `[1] java.lang.Long[] ← .cache class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `[2] java.lang.Long[] ← .cache class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `[3] java.lang.Long[] ← .cache class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `[4] java.lang.Long[] ← .cache class java.lang.Long$LongCache` |

##### `java.lang.Integer`

|    % | Size | Instances | Path                                                                                                                                                                                                         |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0.4% |  4 B |         1 | `[5] java.lang.Object[] ← .elements java.util.ImmutableCollections$ListN ← .TRANSFORM_MODS java.lang.invoke.BoundMethodHandle$Specializer$Factory ← .factory java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `[4] java.lang.Object[] ← .elements java.util.ImmutableCollections$ListN ← .TRANSFORM_MODS java.lang.invoke.BoundMethodHandle$Specializer$Factory ← .factory java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `[3] java.lang.Object[] ← .elements java.util.ImmutableCollections$ListN ← .TRANSFORM_MODS java.lang.invoke.BoundMethodHandle$Specializer$Factory ← .factory java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `[2] java.lang.Object[] ← .elements java.util.ImmutableCollections$ListN ← .TRANSFORM_MODS java.lang.invoke.BoundMethodHandle$Specializer$Factory ← .factory java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `[1] java.lang.Object[] ← .elements java.util.ImmutableCollections$ListN ← .TRANSFORM_MODS java.lang.invoke.BoundMethodHandle$Specializer$Factory ← .factory java.lang.invoke.BoundMethodHandle$Specializer` |

##### `java.lang.Short`

|    % | Size | Instances | Path                                                |
| ---: | ---: | --------: | --------------------------------------------------- |
| 0.4% |  2 B |         1 | `[0] java.lang.Short[] ← [2208] java.lang.Object[]` |
| 0.4% |  2 B |         1 | `[1] java.lang.Short[] ← [2208] java.lang.Object[]` |
| 0.4% |  2 B |         1 | `[2] java.lang.Short[] ← [2208] java.lang.Object[]` |
| 0.4% |  2 B |         1 | `[3] java.lang.Short[] ← [2208] java.lang.Object[]` |
| 0.4% |  2 B |         1 | `[4] java.lang.Short[] ← [2208] java.lang.Object[]` |

##### `java.lang.Byte`

|    % | Size | Instances | Path                                               |
| ---: | ---: | --------: | -------------------------------------------------- |
| 0.4% |  1 B |         1 | `[0] java.lang.Byte[] ← [2207] java.lang.Object[]` |
| 0.4% |  1 B |         1 | `[1] java.lang.Byte[] ← [2207] java.lang.Object[]` |
| 0.4% |  1 B |         1 | `[2] java.lang.Byte[] ← [2207] java.lang.Object[]` |
| 0.4% |  1 B |         1 | `[3] java.lang.Byte[] ← [2207] java.lang.Object[]` |
| 0.4% |  1 B |         1 | `[4] java.lang.Byte[] ← [2207] java.lang.Object[]` |

##### `java.lang.Float`

|      % | Size | Instances | Path                                        |
| -----: | ---: | --------: | ------------------------------------------- |
| 100.0% |  4 B |         1 | `.FLOAT_ZERO class sun.invoke.util.Wrapper` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

|     % |     Size | Instances | Constructor                                     |
| ----: | -------: | --------: | ----------------------------------------------- |
| 57.0% | 7.63 MiB |   100,010 | `java.lang.Double[]`                            |
| 28.5% | 3.82 MiB |   500,051 | `java.lang.Double`                              |
| 15.4% | 2.06 MiB |     1,915 | `java.lang.Object[]`                            |
| 12.5% | 1.67 MiB |       111 | `java.util.ArrayList`                           |
| 11.3% | 1.51 MiB |    23,691 | `byte[]`                                        |
| 10.3% | 1.37 MiB |       381 | `java.util.HashMap`                             |
| 10.2% | 1.36 MiB |       410 | `java.util.HashMap$Node[]`                      |
|  9.2% | 1.23 MiB |    10,093 | `java.util.HashMap$Node`                        |
|  7.4% | 1015 KiB |       159 | `java.lang.ref.SoftReference`                   |
|  7.3% | 1003 KiB |        10 | `java.util.jar.JarFile`                         |
|  7.3% | 1000 KiB |         7 | `java.util.jar.Manifest`                        |
|  7.1% |  969 KiB |     2,685 | `java.lang.Class`                               |
|  6.9% |  951 KiB |    22,945 | `java.lang.String`                              |
|  6.1% |  829 KiB |        10 | `java.util.zip.ZipFile$Source`                  |
|  3.9% |  536 KiB |       119 | `java.util.concurrent.ConcurrentHashMap`        |
|  3.9% |  533 KiB |     5,825 | `java.util.LinkedHashMap`                       |
|  3.8% |  527 KiB |        94 | `java.util.concurrent.ConcurrentHashMap$Node[]` |
|  3.3% |  453 KiB |     5,785 | `java.util.jar.Attributes`                      |
|  2.4% |  334 KiB |     6,259 | `java.util.concurrent.ConcurrentHashMap$Node`   |
|  1.1% |  144 KiB |     1,929 | `int[]`                                         |

#### Categories

##### Array

|     % |     Size | Instances | Constructor                                     |
| ----: | -------: | --------: | ----------------------------------------------- |
| 57.0% | 7.63 MiB |   100,010 | `java.lang.Double[]`                            |
| 15.4% | 2.06 MiB |     1,915 | `java.lang.Object[]`                            |
| 11.3% | 1.51 MiB |    23,691 | `byte[]`                                        |
| 10.2% | 1.36 MiB |       410 | `java.util.HashMap$Node[]`                      |
|  3.8% |  527 KiB |        94 | `java.util.concurrent.ConcurrentHashMap$Node[]` |
|  1.1% |  144 KiB |     1,929 | `int[]`                                         |
|  0.7% | 89.4 KiB |         1 | `byte[][]`                                      |
|  0.4% | 51.3 KiB |       223 | `char[]`                                        |
|  0.3% | 41.1 KiB |       256 | `java.lang.ref.SoftReference[]`                 |
|  0.2% |   32 KiB |         2 | `scala.math.BigInt[]`                           |
|  0.2% | 26.5 KiB |         1 | `jdk.internal.math.FDBigInteger[]`              |
|  0.2% | 26.4 KiB |       447 | `java.lang.String[]`                            |
|  0.2% | 24.9 KiB |       116 | `java.lang.invoke.LambdaForm$Name[]`            |
|  0.1% | 15.6 KiB |        16 | `long[]`                                        |
|  0.1% | 11.8 KiB |        40 | `java.lang.invoke.MethodHandle[]`               |
|  0.1% | 10.8 KiB |       497 | `java.lang.Class[]`                             |
|  0.1% | 9.69 KiB |         2 | `java.time.LocalDateTime[]`                     |
|  0.1% | 8.47 KiB |         1 | `java.lang.ThreadLocal$ThreadLocalMap$Entry[]`  |
|  0.1% |    8 KiB |         1 | `java.nio.ByteBuffer[]`                         |
|  0.1% |  7.5 KiB |        15 | `java.util.concurrent.ForkJoinTask[]`           |

##### Number

|     % |     Size | Instances | Constructor         |
| ----: | -------: | --------: | ------------------- |
| 28.5% | 3.82 MiB |   500,051 | `java.lang.Double`  |
| <0.1% |    2 KiB |       256 | `java.lang.Long`    |
| <0.1% | 1.08 KiB |       276 | `java.lang.Integer` |
| <0.1% |    512 B |       256 | `java.lang.Short`   |
| <0.1% |    256 B |       256 | `java.lang.Byte`    |
| <0.1% |      4 B |         1 | `java.lang.Float`   |

##### Object

|     % |     Size | Instances | Constructor                                   |
| ----: | -------: | --------: | --------------------------------------------- |
| 12.5% | 1.67 MiB |       111 | `java.util.ArrayList`                         |
| 10.3% | 1.37 MiB |       381 | `java.util.HashMap`                           |
|  9.2% | 1.23 MiB |    10,093 | `java.util.HashMap$Node`                      |
|  7.4% | 1015 KiB |       159 | `java.lang.ref.SoftReference`                 |
|  7.3% | 1003 KiB |        10 | `java.util.jar.JarFile`                       |
|  7.3% | 1000 KiB |         7 | `java.util.jar.Manifest`                      |
|  6.1% |  829 KiB |        10 | `java.util.zip.ZipFile$Source`                |
|  3.9% |  536 KiB |       119 | `java.util.concurrent.ConcurrentHashMap`      |
|  3.9% |  533 KiB |     5,825 | `java.util.LinkedHashMap`                     |
|  3.3% |  453 KiB |     5,785 | `java.util.jar.Attributes`                    |
|  2.4% |  334 KiB |     6,259 | `java.util.concurrent.ConcurrentHashMap$Node` |
|  1.0% |  139 KiB |         2 | `java.net.URLClassLoader`                     |
|  0.9% |  127 KiB |         2 | `org.renaissance.core.ModuleLoader`           |
|  0.9% |  124 KiB |        38 | `java.util.LinkedHashSet`                     |
|  0.9% |  123 KiB |     1,191 | `java.util.LinkedHashMap$Entry`               |
|  0.8% |  116 KiB |         1 | `java.time.zone.TzdbZoneRulesProvider`        |
|  0.6% | 79.5 KiB |       624 | `java.lang.invoke.MethodType`                 |
|  0.6% |   79 KiB |        72 | `java.lang.Module`                            |
|  0.6% | 77.8 KiB |       154 | `java.util.ImmutableCollections$SetN`         |
|  0.6% | 77.4 KiB |       224 | `java.util.HashSet`                           |

##### String

|    % |    Size | Instances | Constructor        |
| ---: | ------: | --------: | ------------------ |
| 6.9% | 951 KiB |    22,945 | `java.lang.String` |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `java.lang.Double[]`

|     % |     Size | Instances | Path                                                                                                                                |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------- |
| 65.1% | 4.97 MiB |    65,092 | `(GC root)`                                                                                                                         |
| <0.1% |     80 B |         1 | `[4] java.lang.Object[] ← .elementData java.util.ArrayList ← [1] java.lang.Object[] ← .a1 scala.collection.immutable.VectorBuilder` |
| <0.1% |     80 B |         1 | `[3] java.lang.Object[] ← .elementData java.util.ArrayList ← [1] java.lang.Object[] ← .a1 scala.collection.immutable.VectorBuilder` |
| <0.1% |     80 B |         1 | `[2] java.lang.Object[] ← .elementData java.util.ArrayList ← [1] java.lang.Object[] ← .a1 scala.collection.immutable.VectorBuilder` |
| <0.1% |     80 B |         1 | `[1] java.lang.Object[] ← .elementData java.util.ArrayList ← [1] java.lang.Object[] ← .a1 scala.collection.immutable.VectorBuilder` |

##### `java.lang.Double`

|     % | Size | Instances | Path                                         |
| ----: | ---: | --------: | -------------------------------------------- |
| <0.1% |  8 B |         1 | `.DOUBLE_ZERO class sun.invoke.util.Wrapper` |
| <0.1% |  8 B |         1 | `[4] java.lang.Double[]`                     |
| <0.1% |  8 B |         1 | `[3] java.lang.Double[]`                     |
| <0.1% |  8 B |         1 | `[2] java.lang.Double[]`                     |
| <0.1% |  8 B |         1 | `[1] java.lang.Double[]`                     |

##### `java.lang.Object[]`

|     % |     Size | Instances | Path                                                                  |
| ----: | -------: | --------: | --------------------------------------------------------------------- |
| 76.6% | 1.58 MiB |         6 | `.elementData java.util.ArrayList`                                    |
|  6.6% |  140 KiB |         2 | `(GC root)`                                                           |
|  3.6% | 76.1 KiB |         2 | `.elementData java.util.ArrayList ← .classes java.net.URLClassLoader` |
|  1.8% | 37.4 KiB |         1 | `.elements java.util.ImmutableCollections$SetN`                       |
|  1.3% | 26.8 KiB |         1 | `[2221] java.lang.Object[]`                                           |

##### `java.util.ArrayList`

|     % |     Size | Instances | Path                                                                    |
| ----: | -------: | --------: | ----------------------------------------------------------------------- |
| 94.3% | 1.58 MiB |         6 | `(GC root)`                                                             |
|  4.4% | 76.1 KiB |         2 | `.classes java.net.URLClassLoader`                                      |
|  0.4% | 7.41 KiB |         1 | `.classes jdk.internal.loader.ClassLoaders$PlatformClassLoader`         |
|  0.3% | 4.93 KiB |         1 | `.classes jdk.internal.loader.ClassLoaders$AppClassLoader`              |
| <0.1% |    456 B |         1 | `[1] java.lang.Object[] ← .a1 scala.collection.immutable.VectorBuilder` |

##### `byte[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                    |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 46.2% |  714 KiB |         9 | `.cen java.util.zip.ZipFile$Source`                                                                                                                                                                     |
|  1.4% |   22 KiB |         4 | `.value java.lang.String`                                                                                                                                                                               |
|  0.7% | 10.5 KiB |         2 | `.value java.lang.String ← .value java.util.LinkedHashMap$Entry ← .map java.util.jar.Attributes ← .attr java.util.jar.Manifest ← .referent java.lang.ref.SoftReference ← .manRef java.util.jar.JarFile` |
|  0.5% | 7.24 KiB |         1 | `.value java.lang.String ← [0] java.lang.Object[] ← .elementData java.util.ArrayList ← .classes jdk.internal.loader.ClassLoaders$PlatformClassLoader`                                                   |
|  0.1% | 1.41 KiB |         1 | `[133] byte[][] ← .ruleArray class sun.util.calendar.ZoneInfoFile`                                                                                                                                      |

##### `java.util.HashMap`

|     % |     Size | Instances | Path                                                                                                                                          |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 69.8% |  981 KiB |         2 | `.entries java.util.jar.Manifest ← .referent java.lang.ref.SoftReference ← .manRef java.util.jar.JarFile`                                     |
|  5.6% | 78.6 KiB |         1 | `(GC root)`                                                                                                                                   |
|  4.5% | 63.3 KiB |         1 | `.jarResourcePathsByModule org.renaissance.core.ModuleLoader ← .value java.util.Optional ← .moduleLoader org.renaissance.core.BenchmarkSuite` |
|  4.5% | 63.3 KiB |         1 | `.jarResourcePathsByModule org.renaissance.core.ModuleLoader`                                                                                 |
|  2.2% | 31.1 KiB |         1 | `.lookup sun.text.resources.cldr.FormatData ← .table java.util.concurrent.ConcurrentHashMap ← .cacheList class sun.util.resources.Bundles`    |

##### `java.util.HashMap$Node[]`

|     % |     Size | Instances | Path                                                                                                                                                                     |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 70.2% |  981 KiB |         2 | `.table java.util.HashMap ← .entries java.util.jar.Manifest ← .referent java.lang.ref.SoftReference ← .manRef java.util.jar.JarFile`                                     |
|  5.6% | 78.5 KiB |         1 | `.table java.util.HashMap`                                                                                                                                               |
|  4.5% | 63.2 KiB |         1 | `.table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader ← .value java.util.Optional ← .moduleLoader org.renaissance.core.BenchmarkSuite` |
|  4.5% | 63.2 KiB |         1 | `.table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader`                                                                                 |
|  2.2% |   31 KiB |         1 | `.table java.util.HashMap ← .lookup sun.text.resources.cldr.FormatData ← .table java.util.concurrent.ConcurrentHashMap ← .cacheList class sun.util.resources.Bundles`    |

##### `java.util.HashMap$Node`

|    % |     Size | Instances | Path                                                                                                                                                                                                                                    |
| ---: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.6% |   20 KiB |         1 | `[21] java.util.HashMap$Node[] ← .table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader ← .value java.util.Optional ← .moduleLoader org.renaissance.core.BenchmarkSuite`                                |
| 1.6% |   20 KiB |         1 | `[21] java.util.HashMap$Node[] ← .table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader`                                                                                                                |
| 1.5% | 19.2 KiB |         1 | `.next java.util.HashMap$Node ← [21] java.util.HashMap$Node[] ← .table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader ← .value java.util.Optional ← .moduleLoader org.renaissance.core.BenchmarkSuite` |
| 1.5% | 19.2 KiB |         1 | `.next java.util.HashMap$Node ← [21] java.util.HashMap$Node[] ← .table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader`                                                                                 |
| 1.5% | 19.1 KiB |         1 | `[19] java.util.HashMap$Node[] ← .table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader ← .value java.util.Optional ← .moduleLoader org.renaissance.core.BenchmarkSuite`                                |

##### `java.lang.ref.SoftReference`

|     % |     Size | Instances | Path                                                                               |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------- |
| 98.5% | 1000 KiB |         7 | `.manRef java.util.jar.JarFile`                                                    |
|  0.2% |  1.7 KiB |         2 | `[7] java.lang.ref.SoftReference[] ← .lambdaForms java.lang.invoke.MethodTypeForm` |
|  0.1% |    716 B |         1 | `.resourceCache jdk.internal.loader.ClassLoaders$AppClassLoader`                   |
|  0.1% |    716 B |         1 | `.resourceCache jdk.internal.loader.ClassLoaders$PlatformClassLoader`              |
|  0.1% |    716 B |         1 | `.resourceCache jdk.internal.loader.ClassLoaders$BootClassLoader`                  |

##### `java.util.jar.JarFile`

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 1003 KiB |        10 | `(GC root)` |

##### `java.util.jar.Manifest`

|      % |     Size | Instances | Path                                                                    |
| -----: | -------: | --------: | ----------------------------------------------------------------------- |
| 100.0% | 1000 KiB |         7 | `.referent java.lang.ref.SoftReference ← .manRef java.util.jar.JarFile` |

##### `java.lang.Class`

|     % |     Size | Instances | Path                                                                                                                        |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------- |
| 75.1% |  727 KiB |        41 | `(GC root)`                                                                                                                 |
|  1.7% | 16.1 KiB |         1 | `[169] java.lang.Object[] ← .elementData java.util.ArrayList ← .classes java.net.URLClassLoader`                            |
|  1.7% | 16.1 KiB |         1 | `[191] java.lang.Object[] ← .elementData java.util.ArrayList ← .classes java.net.URLClassLoader`                            |
|  0.8% | 7.38 KiB |         1 | `[0] java.lang.Object[] ← .elementData java.util.ArrayList ← .classes jdk.internal.loader.ClassLoaders$PlatformClassLoader` |
|  0.2% | 2.02 KiB |         1 | `[5] java.lang.Object[] ← .elementData java.util.ArrayList ← .classes jdk.internal.loader.ClassLoaders$AppClassLoader`      |

##### `java.lang.String`

|     % |     Size | Instances | Path                                                                                                                                                                                                          |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  2.9% | 27.7 KiB |        12 | `(GC root)`                                                                                                                                                                                                   |
|  1.1% | 10.5 KiB |         2 | `.value java.util.LinkedHashMap$Entry ← .map java.util.jar.Attributes ← .attr java.util.jar.Manifest ← .referent java.lang.ref.SoftReference ← .manRef java.util.jar.JarFile`                                 |
|  0.8% | 7.26 KiB |         1 | `[0] java.lang.Object[] ← .elementData java.util.ArrayList ← .classes jdk.internal.loader.ClassLoaders$PlatformClassLoader`                                                                                   |
|  0.3% | 2.46 KiB |         8 | `.methodDescriptor java.lang.invoke.MethodType`                                                                                                                                                               |
| <0.1% |    262 B |         1 | `.value java.util.LinkedHashMap$Entry ← .tail java.util.LinkedHashMap ← .map java.util.jar.Attributes ← .attr java.util.jar.Manifest ← .referent java.lang.ref.SoftReference ← .manRef java.util.jar.JarFile` |

##### `java.util.zip.ZipFile$Source`

|      % |    Size | Instances | Path        |
| -----: | ------: | --------: | ----------- |
| 100.0% | 829 KiB |        10 | `(GC root)` |

##### `java.util.concurrent.ConcurrentHashMap`

|     % |     Size | Instances | Path                                                                                                                                 |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------ |
| 20.8% |  111 KiB |         1 | `.regionToRules java.time.zone.TzdbZoneRulesProvider`                                                                                |
| 10.4% | 55.5 KiB |         1 | `.map jdk.internal.util.ReferencedKeyMap ← .map jdk.internal.util.ReferencedKeySet ← .internTable class java.lang.invoke.MethodType` |
| 10.1% | 54.4 KiB |         1 | `.cacheList class sun.util.resources.Bundles`                                                                                        |
|  7.4% | 39.8 KiB |         1 | `(GC root)`                                                                                                                          |
|  6.9% | 36.9 KiB |         1 | `.parallelLockMap jdk.internal.loader.ClassLoaders$AppClassLoader`                                                                   |

##### `java.util.LinkedHashMap`

|    % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                   |
| ---: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 3.6% | 19.2 KiB |         1 | `.map java.util.LinkedHashSet ← .value java.util.HashMap$Node ← .next java.util.HashMap$Node ← [21] java.util.HashMap$Node[] ← .table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader ← .value java.util.Optional ← .moduleLoader org.renaissance.core.BenchmarkSuite` |
| 3.6% | 19.2 KiB |         1 | `.map java.util.LinkedHashSet ← .value java.util.HashMap$Node ← .next java.util.HashMap$Node ← [21] java.util.HashMap$Node[] ← .table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader`                                                                                 |
| 3.5% | 18.6 KiB |         1 | `.map java.util.LinkedHashSet ← .value java.util.HashMap$Node ← [19] java.util.HashMap$Node[] ← .table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader ← .value java.util.Optional ← .moduleLoader org.renaissance.core.BenchmarkSuite`                                |
| 3.5% | 18.6 KiB |         1 | `.map java.util.LinkedHashSet ← .value java.util.HashMap$Node ← [19] java.util.HashMap$Node[] ← .table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader`                                                                                                                |
| 1.7% |  8.8 KiB |         1 | `.map java.util.LinkedHashSet ← .value java.util.HashMap$Node ← [30] java.util.HashMap$Node[] ← .table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader ← .value java.util.Optional ← .moduleLoader org.renaissance.core.BenchmarkSuite`                                |

##### `java.util.concurrent.ConcurrentHashMap$Node[]`

|     % |     Size | Instances | Path                                                                                                                                                                                 |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 21.1% |  111 KiB |         1 | `.table java.util.concurrent.ConcurrentHashMap ← .regionToRules java.time.zone.TzdbZoneRulesProvider`                                                                                |
| 10.5% | 55.4 KiB |         1 | `.table java.util.concurrent.ConcurrentHashMap ← .map jdk.internal.util.ReferencedKeyMap ← .map jdk.internal.util.ReferencedKeySet ← .internTable class java.lang.invoke.MethodType` |
| 10.3% | 54.3 KiB |         1 | `.table java.util.concurrent.ConcurrentHashMap ← .cacheList class sun.util.resources.Bundles`                                                                                        |
|  7.5% | 39.7 KiB |         1 | `.table java.util.concurrent.ConcurrentHashMap`                                                                                                                                      |
|  7.0% | 36.8 KiB |         1 | `.table java.util.concurrent.ConcurrentHashMap ← .parallelLockMap jdk.internal.loader.ClassLoaders$AppClassLoader`                                                                   |

##### `java.util.jar.Attributes`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  4.1% | 18.4 KiB |         7 | `.attr java.util.jar.Manifest ← .referent java.lang.ref.SoftReference ← .manRef java.util.jar.JarFile`                                                                                                                              |
| <0.1% |     77 B |         1 | `.value java.util.HashMap$Node ← [44] java.util.HashMap$Node[] ← .table java.util.HashMap ← .entries java.util.jar.Manifest ← .referent java.lang.ref.SoftReference ← .manRef java.util.jar.JarFile`                                |
| <0.1% |     77 B |         1 | `.value java.util.HashMap$Node ← [43] java.util.HashMap$Node[] ← .table java.util.HashMap ← .entries java.util.jar.Manifest ← .referent java.lang.ref.SoftReference ← .manRef java.util.jar.JarFile`                                |
| <0.1% |     77 B |         1 | `.value java.util.HashMap$Node ← [42] java.util.HashMap$Node[] ← .table java.util.HashMap ← .entries java.util.jar.Manifest ← .referent java.lang.ref.SoftReference ← .manRef java.util.jar.JarFile`                                |
| <0.1% |     77 B |         1 | `.value java.util.HashMap$Node ← .next java.util.HashMap$Node ← [42] java.util.HashMap$Node[] ← .table java.util.HashMap ← .entries java.util.jar.Manifest ← .referent java.lang.ref.SoftReference ← .manRef java.util.jar.JarFile` |

##### `java.util.concurrent.ConcurrentHashMap$Node`

|    % |     Size | Instances | Path                                                                                                                                                        |
| ---: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.7% | 22.4 KiB |         1 | `[17] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .cacheList class sun.util.resources.Bundles`          |
| 0.4% | 1.33 KiB |         1 | `[860] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .regionToRules java.time.zone.TzdbZoneRulesProvider` |
| 0.4% | 1.32 KiB |         1 | `[963] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .regionToRules java.time.zone.TzdbZoneRulesProvider` |
| 0.4% | 1.32 KiB |         1 | `[405] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .regionToRules java.time.zone.TzdbZoneRulesProvider` |
| 0.4% | 1.22 KiB |         1 | `[703] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .regionToRules java.time.zone.TzdbZoneRulesProvider` |

##### `int[]`

|     % |     Size | Instances | Path                                            |
| ----: | -------: | --------: | ----------------------------------------------- |
| 64.8% | 93.2 KiB |         6 | `.entries java.util.zip.ZipFile$Source`         |
| 17.1% | 24.7 KiB |         3 | `(GC root)`                                     |
|  7.9% | 11.4 KiB |         2 | `.table java.util.zip.ZipFile$Source`           |
|  2.9% | 4.13 KiB |         1 | `.A class java.lang.CharacterData00`            |
|  1.6% | 2.36 KiB |         1 | `.indices class sun.util.calendar.ZoneInfoFile` |

##### `java.net.URLClassLoader`

|      % |    Size | Instances | Path        |
| -----: | ------: | --------: | ----------- |
| 100.0% | 139 KiB |         2 | `(GC root)` |

##### `org.renaissance.core.ModuleLoader`

|     % |     Size | Instances | Path                                                                            |
| ----: | -------: | --------: | ------------------------------------------------------------------------------- |
| 50.0% | 63.3 KiB |         1 | `.value java.util.Optional ← .moduleLoader org.renaissance.core.BenchmarkSuite` |
| 50.0% | 63.3 KiB |         1 | `(GC root)`                                                                     |

##### `java.util.LinkedHashSet`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                    |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15.4% | 19.2 KiB |         1 | `.value java.util.HashMap$Node ← .next java.util.HashMap$Node ← [21] java.util.HashMap$Node[] ← .table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader ← .value java.util.Optional ← .moduleLoader org.renaissance.core.BenchmarkSuite` |
| 15.4% | 19.2 KiB |         1 | `.value java.util.HashMap$Node ← .next java.util.HashMap$Node ← [21] java.util.HashMap$Node[] ← .table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader`                                                                                 |
| 15.0% | 18.6 KiB |         1 | `.value java.util.HashMap$Node ← [19] java.util.HashMap$Node[] ← .table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader ← .value java.util.Optional ← .moduleLoader org.renaissance.core.BenchmarkSuite`                                |
| 15.0% | 18.6 KiB |         1 | `.value java.util.HashMap$Node ← [19] java.util.HashMap$Node[] ← .table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader`                                                                                                                |
|  7.1% | 8.81 KiB |         1 | `.value java.util.HashMap$Node ← [30] java.util.HashMap$Node[] ← .table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader ← .value java.util.Optional ← .moduleLoader org.renaissance.core.BenchmarkSuite`                                |

##### `java.util.LinkedHashMap$Entry`

|    % |     Size | Instances | Path                                                                                                                                                                                                                                                                    |
| ---: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.7% | 10.6 KiB |         2 | `.map java.util.jar.Attributes ← .attr java.util.jar.Manifest ← .referent java.lang.ref.SoftReference ← .manRef java.util.jar.JarFile`                                                                                                                                  |
| 0.6% |    712 B |         5 | `.map java.util.LinkedHashSet ← .value java.util.HashMap$Node ← [30] java.util.HashMap$Node[] ← .table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader ← .value java.util.Optional ← .moduleLoader org.renaissance.core.BenchmarkSuite` |
| 0.6% |    712 B |         5 | `.map java.util.LinkedHashSet ← .value java.util.HashMap$Node ← [30] java.util.HashMap$Node[] ← .table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader`                                                                                 |
| 0.5% |    612 B |         2 | `.tail java.util.LinkedHashMap ← .map java.util.jar.Attributes ← .attr java.util.jar.Manifest ← .referent java.lang.ref.SoftReference ← .manRef java.util.jar.JarFile`                                                                                                  |
| 0.1% |    130 B |         1 | `.map java.util.LinkedHashSet ← .value java.util.HashMap$Node ← [21] java.util.HashMap$Node[] ← .table java.util.HashMap ← .jarResourcePathsByModule org.renaissance.core.ModuleLoader ← .value java.util.Optional ← .moduleLoader org.renaissance.core.BenchmarkSuite` |

##### `java.time.zone.TzdbZoneRulesProvider`

|      % |    Size | Instances | Path        |
| -----: | ------: | --------: | ----------- |
| 100.0% | 116 KiB |         1 | `(GC root)` |

##### `byte[][]`

|      % |     Size | Instances | Path                                              |
| -----: | -------: | --------: | ------------------------------------------------- |
| 100.0% | 89.4 KiB |         1 | `.ruleArray class sun.util.calendar.ZoneInfoFile` |

##### `java.lang.invoke.MethodType`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 99.0% | 78.7 KiB |       607 | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.1% |     48 B |         1 | `.referent jdk.internal.util.WeakReferenceKey ← .key java.util.concurrent.ConcurrentHashMap$Node ← [217] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .map jdk.internal.util.ReferencedKeyMap ← .map jdk.internal.util.ReferencedKeySet ← .internTable class java.lang.invoke.MethodType`                                                     |
|  0.1% |     48 B |         1 | `.referent jdk.internal.util.WeakReferenceKey ← .key java.util.concurrent.ConcurrentHashMap$Node ← [573] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .map jdk.internal.util.ReferencedKeyMap ← .map jdk.internal.util.ReferencedKeySet ← .internTable class java.lang.invoke.MethodType`                                                     |
|  0.1% |     48 B |         1 | `.referent jdk.internal.util.WeakReferenceKey ← .key java.util.concurrent.ConcurrentHashMap$Node ← .next java.util.concurrent.ConcurrentHashMap$Node ← [414] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .map jdk.internal.util.ReferencedKeyMap ← .map jdk.internal.util.ReferencedKeySet ← .internTable class java.lang.invoke.MethodType` |
|  0.1% |     48 B |         1 | `.referent jdk.internal.util.WeakReferenceKey ← .key java.util.concurrent.ConcurrentHashMap$Node ← [752] java.util.concurrent.ConcurrentHashMap$Node[] ← .table java.util.concurrent.ConcurrentHashMap ← .map jdk.internal.util.ReferencedKeyMap ← .map jdk.internal.util.ReferencedKeySet ← .internTable class java.lang.invoke.MethodType`                                                     |

##### `java.lang.Module`

|     % |     Size | Instances | Path                                                                                                                                                           |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 92.8% | 73.3 KiB |        50 | `(GC root)`                                                                                                                                                    |
|  0.7% |    593 B |         1 | `.value java.util.HashMap$Node ← .next java.util.HashMap$Node ← [9] java.util.HashMap$Node[] ← .table java.util.HashMap ← .nameToModule java.lang.ModuleLayer` |
|  0.6% |    509 B |         1 | `.value java.util.HashMap$Node ← [16] java.util.HashMap$Node[] ← .table java.util.HashMap ← .nameToModule java.lang.ModuleLayer`                               |
|  0.6% |    481 B |         1 | `.value java.util.HashMap$Node ← [41] java.util.HashMap$Node[] ← .table java.util.HashMap ← .nameToModule java.lang.ModuleLayer`                               |
|  0.6% |    481 B |         1 | `.value java.util.HashMap$Node ← [118] java.util.HashMap$Node[] ← .table java.util.HashMap ← .nameToModule java.lang.ModuleLayer`                              |

##### `java.util.ImmutableCollections$SetN`

|     % |     Size | Instances | Path                                                                                                                                              |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 48.0% | 37.4 KiB |         1 | `(GC root)`                                                                                                                                       |
| 14.1% | 10.9 KiB |         3 | `.exports java.lang.module.ModuleDescriptor`                                                                                                      |
|  8.6% | 6.69 KiB |         3 | `.packages java.lang.module.ModuleDescriptor`                                                                                                     |
|  1.3% | 1.01 KiB |         1 | `.mrefs jdk.internal.module.SystemModuleFinders$SystemModuleFinder ← .finder jdk.internal.module.ArchivedModuleGraph ← [2217] java.lang.Object[]` |
|  1.3% | 1.01 KiB |         1 | `.modules java.lang.module.Configuration`                                                                                                         |

##### `java.util.HashSet`

|     % |     Size | Instances | Path                                                                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------- |
| 31.7% | 24.6 KiB |         1 | `.c java.util.Collections$UnmodifiableSet ← .ZONE_IDS class java.time.zone.ZoneRulesProvider`                                    |
|  0.9% |    732 B |         1 | `.value java.util.HashMap$Node ← [203] java.util.HashMap$Node[] ← .table java.util.HashMap ← .exportedPackages java.lang.Module` |
|  0.7% |    520 B |         1 | `.value java.util.HashMap$Node ← [96] java.util.HashMap$Node[] ← .table java.util.HashMap ← .exportedPackages java.lang.Module`  |
|  0.7% |    520 B |         1 | `.value java.util.HashMap$Node ← [190] java.util.HashMap$Node[] ← .table java.util.HashMap ← .exportedPackages java.lang.Module` |
|  0.6% |    492 B |         1 | `.reads java.lang.Module`                                                                                                        |

##### `char[]`

|     % |     Size | Instances | Path                                                                                      |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------- |
| 31.2% |   16 KiB |         1 | `.cb java.io.BufferedWriter ← .textOut java.io.PrintStream`                               |
| 31.2% |   16 KiB |         1 | `.cb java.io.BufferedWriter ← .textOut java.io.PrintStream ← .out class java.lang.System` |
| 23.0% | 11.8 KiB |         1 | `.Y class java.lang.CharacterData00`                                                      |
|  7.8% |    4 KiB |         1 | `.X class java.lang.CharacterData00`                                                      |
|  4.0% | 2.06 KiB |         1 | `.B class java.lang.CharacterData00`                                                      |

##### `java.lang.ref.SoftReference[]`

|     % |     Size | Instances | Path                                                                                 |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------ |
| 69.9% | 28.7 KiB |        88 | `.lambdaForms java.lang.invoke.MethodTypeForm`                                       |
| 21.2% | 8.69 KiB |        40 | `.lambdaForms java.lang.invoke.MethodTypeForm ← .form java.lang.invoke.MethodType`   |
|  6.5% | 2.69 KiB |        88 | `.methodHandles java.lang.invoke.MethodTypeForm`                                     |
|  2.4% |   1000 B |        40 | `.methodHandles java.lang.invoke.MethodTypeForm ← .form java.lang.invoke.MethodType` |

##### `scala.math.BigInt[]`

|     % |   Size | Instances | Path                                                                                                                               |
| ----: | -----: | --------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| 50.0% | 16 KiB |         1 | `.cache class scala.math.BigInt$ ← [191] java.lang.Object[] ← .elementData java.util.ArrayList ← .classes java.net.URLClassLoader` |
| 50.0% | 16 KiB |         1 | `.cache class scala.math.BigInt$ ← [169] java.lang.Object[] ← .elementData java.util.ArrayList ← .classes java.net.URLClassLoader` |

##### `jdk.internal.math.FDBigInteger[]`

|      % |     Size | Instances | Path                                                 |
| -----: | -------: | --------: | ---------------------------------------------------- |
| 100.0% | 26.5 KiB |         1 | `[2] java.lang.Object[] ← [2221] java.lang.Object[]` |

##### `java.lang.String[]`

|     % |     Size | Instances | Path                                                                                                                                                                                        |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 43.9% | 11.6 KiB |         1 | `.regions class sun.util.calendar.ZoneInfoFile`                                                                                                                                             |
| 17.9% | 4.72 KiB |         1 | `.a java.util.Arrays$ArrayList ← .regionIds java.time.zone.TzdbZoneRulesProvider`                                                                                                           |
|  2.5% |    680 B |         1 | `.value java.util.HashMap$Node ← .next java.util.HashMap$Node ← [1] java.util.HashMap$Node[] ← .table java.util.HashMap ← .parentLocalesMap class sun.util.cldr.CLDRBaseLocaleDataMetaInfo` |
|  1.3% |    352 B |         1 | `.value java.util.HashMap$Node ← [0] java.util.HashMap$Node[] ← .table java.util.HashMap ← .parentLocalesMap class sun.util.cldr.CLDRBaseLocaleDataMetaInfo`                                |
|  1.0% |    269 B |         1 | `.USER_PATHS class jdk.internal.loader.NativeLibraries$LibraryPaths`                                                                                                                        |

##### `java.lang.invoke.LambdaForm$Name[]`

|    % |     Size | Instances | Path                                                                                                                                                             |
| ---: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.7% | 1.68 KiB |         3 | `.names java.lang.invoke.LambdaForm`                                                                                                                             |
| 1.7% |    426 B |         1 | `.names java.lang.invoke.LambdaForm ← .referent java.lang.ref.SoftReference ← [15] java.lang.ref.SoftReference[] ← .lambdaForms java.lang.invoke.MethodTypeForm` |
| 1.6% |    420 B |         1 | `[3] java.lang.invoke.LambdaForm$Name[][] ← .INTERNED_ARGUMENTS class java.lang.invoke.LambdaForm`                                                               |
| 1.5% |    386 B |         1 | `[4] java.lang.invoke.LambdaForm$Name[][] ← .INTERNED_ARGUMENTS class java.lang.invoke.LambdaForm`                                                               |
| 1.3% |    342 B |         1 | `.names java.lang.invoke.LambdaForm ← [54] java.lang.invoke.LambdaForm[] ← .ACCESSOR_FORMS class java.lang.invoke.DirectMethodHandle`                            |

##### `long[]`

|     % |     Size | Instances | Path                                                                                                |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------- |
| 61.9% | 9.64 KiB |         1 | `.g class jdk.internal.math.MathUtils`                                                              |
| 18.1% | 2.82 KiB |         1 | `(GC root)`                                                                                         |
|  8.9% | 1.38 KiB |         1 | `.savingsInstantTransitions java.time.zone.ZoneRules`                                               |
|  1.9% |    296 B |         1 | `.bitsPerDigit class java.math.BigInteger`                                                          |
|  1.6% |    256 B |         1 | `[3] java.lang.Object[] ← .backtrace java.lang.OutOfMemoryError ← [3] java.lang.OutOfMemoryError[]` |

##### `java.lang.invoke.MethodHandle[]`

|     % |     Size | Instances | Path                                                                          |
| ----: | -------: | --------: | ----------------------------------------------------------------------------- |
| 73.1% | 8.63 KiB |        17 | `.invokers java.lang.invoke.Invokers ← .invokers java.lang.invoke.MethodType` |
| 16.9% |    2 KiB |         1 | `.ARRAYS class java.lang.invoke.MethodHandleImpl`                             |
|  1.4% |    172 B |         1 | `.IDENTITY_MHS class java.lang.invoke.MethodHandles`                          |
|  0.7% |     80 B |         1 | `.ZERO_MHS class java.lang.invoke.MethodHandles`                              |
|  0.6% |     72 B |         1 | `.HANDLES class java.lang.invoke.MethodHandleImpl`                            |

##### `java.lang.Class[]`

|     % |     Size | Instances | Path                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------- |
| 79.1% | 8.57 KiB |       324 | `.ptypes java.lang.invoke.MethodType`                                            |
| 14.0% | 1.52 KiB |        66 | `(GC root)`                                                                      |
|  0.2% |     24 B |         1 | `.STATICALLY_INVOCABLE_PACKAGES class java.lang.invoke.InvokerBytecodeGenerator` |
|  0.1% |      8 B |         1 | `.parameterTypes java.lang.reflect.Method`                                       |
|  0.1% |      8 B |         1 | `.METHOD_HANDLE_ARRAY class java.lang.invoke.MethodType`                         |

##### `java.time.LocalDateTime[]`

|      % |     Size | Instances | Path                                                |
| -----: | -------: | --------: | --------------------------------------------------- |
| 100.0% | 9.69 KiB |         1 | `.savingsLocalTransitions java.time.zone.ZoneRules` |
|   0.0% |      0 B |         1 | `.EMPTY_LDT_ARRAY class java.time.zone.ZoneRules`   |

##### `java.lang.ThreadLocal$ThreadLocalMap$Entry[]`

|      % |     Size | Instances | Path                                                                           |
| -----: | -------: | --------: | ------------------------------------------------------------------------------ |
| 100.0% | 8.47 KiB |         1 | `.table java.lang.ThreadLocal$ThreadLocalMap ← .threadLocals java.lang.Thread` |

##### `java.nio.ByteBuffer[]`

|      % |  Size | Instances | Path                                                                                                                                                                                                                          |
| -----: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 8 KiB |         1 | `.buffers sun.nio.ch.Util$BufferCache ← .value java.lang.ThreadLocal$ThreadLocalMap$Entry ← [12] java.lang.ThreadLocal$ThreadLocalMap$Entry[] ← .table java.lang.ThreadLocal$ThreadLocalMap ← .threadLocals java.lang.Thread` |

##### `java.util.concurrent.ForkJoinTask[]`

|      % |    Size | Instances | Path                                                 |
| -----: | ------: | --------: | ---------------------------------------------------- |
| 100.0% | 7.5 KiB |        15 | `.array java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `java.lang.Long`

|    % | Size | Instances | Path                                                           |
| ---: | ---: | --------: | -------------------------------------------------------------- |
| 0.4% |  8 B |         1 | `[0] java.lang.Long[] ← .cache class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `[1] java.lang.Long[] ← .cache class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `[2] java.lang.Long[] ← .cache class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `[3] java.lang.Long[] ← .cache class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `[4] java.lang.Long[] ← .cache class java.lang.Long$LongCache` |

##### `java.lang.Integer`

|    % | Size | Instances | Path                                                                                                                                                                                                         |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0.4% |  4 B |         1 | `[5] java.lang.Object[] ← .elements java.util.ImmutableCollections$ListN ← .TRANSFORM_MODS java.lang.invoke.BoundMethodHandle$Specializer$Factory ← .factory java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `[4] java.lang.Object[] ← .elements java.util.ImmutableCollections$ListN ← .TRANSFORM_MODS java.lang.invoke.BoundMethodHandle$Specializer$Factory ← .factory java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `[3] java.lang.Object[] ← .elements java.util.ImmutableCollections$ListN ← .TRANSFORM_MODS java.lang.invoke.BoundMethodHandle$Specializer$Factory ← .factory java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `[2] java.lang.Object[] ← .elements java.util.ImmutableCollections$ListN ← .TRANSFORM_MODS java.lang.invoke.BoundMethodHandle$Specializer$Factory ← .factory java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `[1] java.lang.Object[] ← .elements java.util.ImmutableCollections$ListN ← .TRANSFORM_MODS java.lang.invoke.BoundMethodHandle$Specializer$Factory ← .factory java.lang.invoke.BoundMethodHandle$Specializer` |

##### `java.lang.Short`

|    % | Size | Instances | Path                                                |
| ---: | ---: | --------: | --------------------------------------------------- |
| 0.4% |  2 B |         1 | `[0] java.lang.Short[] ← [2208] java.lang.Object[]` |
| 0.4% |  2 B |         1 | `[1] java.lang.Short[] ← [2208] java.lang.Object[]` |
| 0.4% |  2 B |         1 | `[2] java.lang.Short[] ← [2208] java.lang.Object[]` |
| 0.4% |  2 B |         1 | `[3] java.lang.Short[] ← [2208] java.lang.Object[]` |
| 0.4% |  2 B |         1 | `[4] java.lang.Short[] ← [2208] java.lang.Object[]` |

##### `java.lang.Byte`

|    % | Size | Instances | Path                                               |
| ---: | ---: | --------: | -------------------------------------------------- |
| 0.4% |  1 B |         1 | `[0] java.lang.Byte[] ← [2207] java.lang.Object[]` |
| 0.4% |  1 B |         1 | `[1] java.lang.Byte[] ← [2207] java.lang.Object[]` |
| 0.4% |  1 B |         1 | `[2] java.lang.Byte[] ← [2207] java.lang.Object[]` |
| 0.4% |  1 B |         1 | `[3] java.lang.Byte[] ← [2207] java.lang.Object[]` |
| 0.4% |  1 B |         1 | `[4] java.lang.Byte[] ← [2207] java.lang.Object[]` |

##### `java.lang.Float`

|      % | Size | Instances | Path                                        |
| -----: | ---: | --------: | ------------------------------------------- |
| 100.0% |  4 B |         1 | `.FLOAT_ZERO class sun.invoke.util.Wrapper` |

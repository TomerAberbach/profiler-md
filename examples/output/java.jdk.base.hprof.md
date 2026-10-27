# Heap snapshot

Held 13.4 MiB over 700,233 nodes and 852,434 edges.

| Category           |     % |     Size |   Nodes |
| ------------------ | ----: | -------: | ------: |
| Array              | 59.3% | 7.93 MiB | 130,106 |
| Number             | 28.6% | 3.82 MiB | 501,076 |
| Object             |  9.4% | 1.26 MiB |  43,357 |
| String             |  2.3% |  313 KiB |  22,929 |
| Object shape       |  0.3% | 43.7 KiB |   2,669 |
| Big number         | <0.1% | 2.52 KiB |      92 |
| Regular expression | <0.1% |    333 B |       3 |
| Synthetic          |  0.0% |      0 B |       1 |

`B ←(several paths)– A` means `A` retains `B` only through other nodes, along several paths.

## Largest constructors

### Self size

Constructors with the most instance bytes, excluding referenced nodes.

|     % |     Size | Instances | Constructor                                     |
| ----: | -------: | --------: | ----------------------------------------------- |
| 28.6% | 3.81 MiB |   500,031 | `java.lang.Double`                              |
| 28.6% | 3.81 MiB |   100,006 | `java.lang.Double[]`                            |
| 14.1% | 1.89 MiB |     1,914 | `java.lang.Object[]`                            |
| 11.5% | 1.54 MiB |    23,675 | `byte[]`                                        |
|  2.9% |  393 KiB |     5,825 | `java.util.LinkedHashMap`                       |
|  2.3% |  313 KiB |    22,929 | `java.lang.String`                              |
|  2.0% |  276 KiB |    10,094 | `java.util.HashMap$Node`                        |
|  1.3% |  175 KiB |       411 | `java.util.HashMap$Node[]`                      |
|  1.3% |  171 KiB |     6,259 | `java.util.concurrent.ConcurrentHashMap$Node`   |
|  1.2% |  170 KiB |     1,932 | `int[]`                                         |
|  0.9% |  117 KiB |        94 | `java.util.concurrent.ConcurrentHashMap$Node[]` |
|  0.4% | 51.3 KiB |       223 | `char[]`                                        |
|  0.4% | 51.2 KiB |     1,191 | `java.util.LinkedHashMap$Entry`                 |
|  0.3% | 45.2 KiB |     5,785 | `java.util.jar.Attributes`                      |
|  0.3% | 43.7 KiB |     2,669 | `java.lang.Class`                               |
|  0.2% |   32 KiB |         2 | `scala.math.BigInt[]`                           |
|  0.2% | 30.6 KiB |       711 | `java.lang.invoke.MemberName`                   |
|  0.2% | 29.3 KiB |       624 | `java.lang.invoke.MethodType`                   |
|  0.2% |   29 KiB |       256 | `java.lang.ref.SoftReference[]`                 |
|  0.2% |   22 KiB |       627 | `jdk.internal.util.WeakReferenceKey`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Array

|     % |     Size | Instances | Constructor                                     |
| ----: | -------: | --------: | ----------------------------------------------- |
| 28.6% | 3.81 MiB |   100,006 | `java.lang.Double[]`                            |
| 14.1% | 1.89 MiB |     1,914 | `java.lang.Object[]`                            |
| 11.5% | 1.54 MiB |    23,675 | `byte[]`                                        |
|  1.3% |  175 KiB |       411 | `java.util.HashMap$Node[]`                      |
|  1.2% |  170 KiB |     1,932 | `int[]`                                         |
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
| 28.6% | 3.81 MiB |   500,031 | `java.lang.Double`  |
| <0.1% |    2 KiB |       256 | `java.lang.Long`    |
| <0.1% | 1.08 KiB |       276 | `java.lang.Integer` |
| <0.1% |    512 B |       256 | `java.lang.Short`   |
| <0.1% |    256 B |       256 | `java.lang.Byte`    |
| <0.1% |      4 B |         1 | `java.lang.Float`   |

##### Object

|     % |     Size | Instances | Constructor                                       |
| ----: | -------: | --------: | ------------------------------------------------- |
|  2.9% |  393 KiB |     5,825 | `java.util.LinkedHashMap`                         |
|  2.0% |  276 KiB |    10,094 | `java.util.HashMap$Node`                          |
|  1.3% |  171 KiB |     6,259 | `java.util.concurrent.ConcurrentHashMap$Node`     |
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
| 2.3% | 313 KiB |    22,929 | `java.lang.String` |

#### Retainer paths

Retainer paths with the largest contribution to each constructor's self size.

##### `java.lang.Double`

|     % |    Size | Instances | Path                                        |
| ----: | ------: | --------: | ------------------------------------------- |
| 20.0% | 781 KiB |   100,000 | `java.lang.Double ←[4]– java.lang.Double[]` |
| 20.0% | 781 KiB |   100,000 | `java.lang.Double ←[3]– java.lang.Double[]` |
| 20.0% | 781 KiB |   100,000 | `java.lang.Double ←[2]– java.lang.Double[]` |
| 20.0% | 781 KiB |   100,000 | `java.lang.Double ←[1]– java.lang.Double[]` |
| 20.0% | 781 KiB |   100,000 | `java.lang.Double ←[0]– java.lang.Double[]` |

##### `java.lang.Double[]`

|      % |     Size | Instances | Path                                                                                                                                                     |
| -----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 3.81 MiB |   100,000 | `java.lang.Double[] ← (GC root)`                                                                                                                         |
|  <0.1% |     40 B |         1 | `java.lang.Double[] ←[4]– java.lang.Object[] ←.elementData– java.util.ArrayList ←[0]– java.lang.Object[] ←.a1– scala.collection.immutable.VectorBuilder` |
|  <0.1% |     40 B |         1 | `java.lang.Double[] ←[3]– java.lang.Object[] ←.elementData– java.util.ArrayList ←[0]– java.lang.Object[] ←.a1– scala.collection.immutable.VectorBuilder` |
|  <0.1% |     40 B |         1 | `java.lang.Double[] ←[2]– java.lang.Object[] ←.elementData– java.util.ArrayList ←[0]– java.lang.Object[] ←.a1– scala.collection.immutable.VectorBuilder` |
|  <0.1% |     40 B |         1 | `java.lang.Double[] ←[1]– java.lang.Object[] ←.elementData– java.util.ArrayList ←[0]– java.lang.Object[] ←.a1– scala.collection.immutable.VectorBuilder` |

##### `java.lang.Object[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                  |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 83.5% | 1.58 MiB |         7 | `java.lang.Object[] ←.elementData– java.util.ArrayList`                                                                                                                                               |
|  4.1% | 79.6 KiB |        37 | `java.lang.Object[] ← (GC root)`                                                                                                                                                                      |
|  0.9% | 16.6 KiB |         1 | `java.lang.Object[] ←.elements– java.util.ImmutableCollections$SetN ←(several paths)– sun.util.cldr.CLDRLocaleProviderAdapter ←(several paths)– class sun.util.locale.provider.LocaleProviderAdapter` |
|  0.6% | 11.8 KiB |        39 | `java.lang.Object[] ←.elements– java.util.ImmutableCollections$SetN ←.packages– java.lang.module.ModuleDescriptor`                                                                                    |
|  0.5% | 9.35 KiB |         1 | `java.lang.Object[] ←[1080]– java.lang.Object[]`                                                                                                                                                      |

##### `byte[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                    |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 45.3% |  715 KiB |        10 | `byte[] ←.cen– java.util.zip.ZipFile$Source`                                                                                                                                                                                            |
| 13.5% |  213 KiB |     8,721 | `byte[] ←.value– java.lang.String`                                                                                                                                                                                                      |
|  2.3% | 35.9 KiB |     1,009 | `byte[] ← (GC root)`                                                                                                                                                                                                                    |
|  2.0% | 31.1 KiB |       116 | `byte[] ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider` |
|  1.1% | 16.8 KiB |       265 | `byte[] ←.value– java.lang.String ←.methodDescriptor– java.lang.invoke.MethodType`                                                                                                                                                      |

##### `java.util.LinkedHashMap`

|     % |  Size | Instances | Path                                                                                                                                                                                                                                                                                          |
| ----: | ----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  0.1% | 483 B |         7 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                              |
| <0.1% | 138 B |         2 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[44]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% | 138 B |         2 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[43]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% | 138 B |         2 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% | 138 B |         2 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile` |

##### `java.lang.String`

|     % |     Size | Instances | Path                                                                        |
| ----: | -------: | --------: | --------------------------------------------------------------------------- |
| 42.1% |  132 KiB |     9,663 | `java.lang.String ← (GC root)`                                              |
|  2.6% | 8.26 KiB |       604 | `java.lang.String ←(several paths)– class java.time.zone.ZoneRulesProvider` |
|  2.5% | 7.72 KiB |       565 | `java.lang.String ←(several paths)– class sun.security.util.KnownOIDs`      |
|  1.6% | 4.94 KiB |       361 | `java.lang.String ←(several paths)– class sun.util.calendar.ZoneInfoFile`   |
|  1.2% | 3.62 KiB |       265 | `java.lang.String ←.methodDescriptor– java.lang.invoke.MethodType`          |

##### `java.util.HashMap$Node`

|    % |     Size | Instances | Path                                                                                                                                                                                                                                                                                    |
| ---: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.6% | 1.61 KiB |        59 | `java.util.HashMap$Node ←[3]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.map– java.util.HashSet ←.reads– java.lang.Module`                                                                                                                                                   |
| 0.3% |    840 B |        30 | `java.util.HashMap$Node ←[0]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.attributes– java.security.Provider$Service ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.serviceMap– sun.security.provider.Sun` |
| 0.2% |    448 B |        16 | `java.util.HashMap$Node ←[7]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.map– java.util.HashSet ←.reads– java.lang.Module`                                                                                                                                                   |
| 0.1% |    392 B |        14 | `java.util.HashMap$Node ←[0]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.exportedPackages– java.lang.Module`                                                                                                                                                                 |
| 0.1% |    392 B |        14 | `java.util.HashMap$Node ←[6]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.map– java.util.HashSet ←.reads– java.lang.Module`                                                                                                                                                   |

##### `java.util.HashMap$Node[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                               |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 36.5% |   64 KiB |         2 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                                                                                                    |
|  5.5% | 9.63 KiB |        50 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.exportedPackages– java.lang.Module`                                                                                                                                                                                                                                                                         |
|  4.6% |    8 KiB |         1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap`                                                                                                                                                                                                                                                                                                              |
|  4.6% |    8 KiB |         1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.lookup– sun.text.resources.cldr.FormatData ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                                                                                   |
|  4.6% |    8 KiB |         1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.lookup– sun.text.resources.cldr.FormatData_en ←.referent– sun.util.resources.Bundles$BundleReference ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[17]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles` |

##### `java.util.concurrent.ConcurrentHashMap$Node`

|     % |  Size | Instances | Path                                                                                                                                                                                                                                  |
| ----: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  0.1% | 168 B |         6 | `java.util.concurrent.ConcurrentHashMap$Node ←[0]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain` |
| <0.1% |  56 B |         2 | `java.util.concurrent.ConcurrentHashMap$Node ←[14]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                         |
| <0.1% |  56 B |         2 | `java.util.concurrent.ConcurrentHashMap$Node ←[13]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                         |
| <0.1% |  56 B |         2 | `java.util.concurrent.ConcurrentHashMap$Node ←[9]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                          |
| <0.1% |  56 B |         2 | `java.util.concurrent.ConcurrentHashMap$Node ←[5]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                          |

##### `int[]`

|     % |     Size | Instances | Path                                                    |
| ----: | -------: | --------: | ------------------------------------------------------- |
| 56.9% | 96.7 KiB |        10 | `int[] ←.entries– java.util.zip.ZipFile$Source`         |
| 15.4% | 26.2 KiB |       904 | `int[] ← (GC root)`                                     |
|  9.5% | 16.1 KiB |        10 | `int[] ←.table– java.util.zip.ZipFile$Source`           |
|  2.4% | 4.13 KiB |         1 | `int[] ←.A– class java.lang.CharacterData00`            |
|  1.4% | 2.36 KiB |         1 | `int[] ←.indices– class sun.util.calendar.ZoneInfoFile` |

##### `java.util.concurrent.ConcurrentHashMap$Node[]`

|     % |   Size | Instances | Path                                                                                                                                                                                                                                 |
| ----: | -----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 13.7% | 16 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| 13.7% | 16 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– jdk.internal.loader.ClassLoaders$AppClassLoader`                                                                   |
| 13.7% | 16 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap`                                                                                                                                      |
| 10.3% | 12 KiB |         2 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                                                           |
|  6.9% |  8 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.name2enum– class sun.security.util.KnownOIDs`                                                                                       |

##### `char[]`

|     % |     Size | Instances | Path                                                                                               |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------- |
| 31.2% |   16 KiB |         1 | `char[] ←.cb– java.io.BufferedWriter ←.textOut– java.io.PrintStream`                               |
| 31.2% |   16 KiB |         1 | `char[] ←.cb– java.io.BufferedWriter ←.textOut– java.io.PrintStream ←.out– class java.lang.System` |
| 23.0% | 11.8 KiB |         1 | `char[] ←.Y– class java.lang.CharacterData00`                                                      |
|  7.8% |    4 KiB |         1 | `char[] ←.X– class java.lang.CharacterData00`                                                      |
|  4.0% | 2.06 KiB |         1 | `char[] ←.B– class java.lang.CharacterData00`                                                      |

##### `java.util.LinkedHashMap$Entry`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14.6% | 7.48 KiB |       174 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`                                |
| 14.6% | 7.48 KiB |       174 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                                                |
| 14.5% | 7.43 KiB |       173 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| 14.5% | 7.43 KiB |       173 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
|  6.0% | 3.09 KiB |        72 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[30]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`                                |

##### `java.util.jar.Attributes`

|     % | Size | Instances | Path                                                                                                                                                                                                                                                           |
| ----: | ---: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  0.1% | 56 B |         7 | `java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                              |
| <0.1% | 16 B |         2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[44]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% | 16 B |         2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[43]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% | 16 B |         2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% | 16 B |         2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile` |

##### `java.lang.Class`

|     % |     Size | Instances | Path                                                                                                                                              |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 78.2% | 34.2 KiB |     1,826 | `class org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda+0x000000d001187a50 ← (GC root)`                                               |
|  0.7% |    320 B |        37 | `class java.lang.invoke.LambdaForm$DMH+0x000000d001189c00 ←.clazz– java.lang.invoke.MemberName ←.vmentry– java.lang.invoke.LambdaForm`            |
|  0.5% |    232 B |         2 | `class scala.Tuple2$mcDZ$sp ←[75]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader`                      |
|  0.5% |    224 B |         1 | `class scala.package$ ←[32]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader`                            |
|  0.4% |    168 B |         2 | `class scala.collection.mutable.ArraySeq$ofLong ←[220]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader` |

##### `scala.math.BigInt[]`

|     % |   Size | Instances | Path                                                                                                                                                     |
| ----: | -----: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 50.0% | 16 KiB |         1 | `scala.math.BigInt[] ←.cache– class scala.math.BigInt$ ←[191]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader` |
| 50.0% | 16 KiB |         1 | `scala.math.BigInt[] ←.cache– class scala.math.BigInt$ ←[169]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader` |

##### `java.lang.invoke.MemberName`

|     % |     Size | Instances | Path                                                                                                                                                                                                         |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 11.7% | 3.57 KiB |        83 | `java.lang.invoke.MemberName ←.vmentry– java.lang.invoke.LambdaForm`                                                                                                                                         |
|  8.3% | 2.54 KiB |        59 | `java.lang.invoke.MemberName ← (GC root)`                                                                                                                                                                    |
|  2.7% |    836 B |        19 | `java.lang.invoke.MemberName ←.member– java.lang.invoke.LambdaForm$NamedFunction ←.function– java.lang.invoke.LambdaForm$Name ←[5]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
|  2.1% |    660 B |        15 | `java.lang.invoke.MemberName ←.member– java.lang.invoke.LambdaForm$NamedFunction ←.function– java.lang.invoke.LambdaForm$Name ←[4]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
|  2.0% |    616 B |        14 | `java.lang.invoke.MemberName ←.member– java.lang.invoke.LambdaForm$NamedFunction`                                                                                                                            |

##### `java.lang.invoke.MethodType`

|     % |   Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----: | -----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 99.0% | 29 KiB |       618 | `java.lang.invoke.MethodType ← (GC root)`                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.2% |   48 B |         1 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[217]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                     |
|  0.2% |   48 B |         1 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←.next– java.util.concurrent.ConcurrentHashMap$Node ←[414]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
|  0.2% |   48 B |         1 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[573]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                     |
|  0.2% |   48 B |         1 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[752]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                     |

##### `java.lang.ref.SoftReference[]`

|     % |     Size | Instances | Path                                                                                                                 |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------- |
| 61.6% | 17.9 KiB |        88 | `java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                       |
| 28.0% | 8.13 KiB |        40 | `java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType`   |
|  7.1% | 2.06 KiB |        88 | `java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm`                                     |
|  3.2% |    960 B |        40 | `java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType` |

##### `jdk.internal.util.WeakReferenceKey`

|    % |  Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                  |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.5% | 108 B |         3 | `jdk.internal.util.WeakReferenceKey ←(several paths)– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                                                                                                                                                                  |
| 0.2% |  36 B |         1 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[39]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                     |
| 0.2% |  36 B |         1 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[32]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                     |
| 0.2% |  36 B |         1 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←.next– java.util.concurrent.ConcurrentHashMap$Node ←[32]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| 0.2% |  36 B |         1 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[27]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                     |

##### `java.lang.String[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.6% | 4.72 KiB |         1 | `java.lang.String[] ←.regions– class sun.util.calendar.ZoneInfoFile`                                                                                                                                                                                                                                                                                                                                    |
| 24.6% | 4.72 KiB |         1 | `java.lang.String[] ←.a– java.util.Arrays$ArrayList ←.regionIds– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider`                                                                                                                                                                                                                                         |
|  5.8% | 1.12 KiB |        22 | `java.lang.String[] ←(several paths)– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.lookup– sun.text.resources.cldr.FormatData ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                                                                                   |
|  4.8% |    944 B |        18 | `java.lang.String[] ←(several paths)– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.lookup– sun.text.resources.cldr.FormatData_en ←.referent– sun.util.resources.Bundles$BundleReference ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[17]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles` |
|  3.5% |    680 B |         1 | `java.lang.String[] ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[1]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.parentLocalesMap– class sun.util.cldr.CLDRBaseLocaleDataMetaInfo`                                                                                                                                                                                        |

##### `java.util.HashMap`

|     % |     Size | Instances | Path                                                                                                                                                                                                                     |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 15.7% | 2.81 KiB |        60 | `java.util.HashMap ←.map– java.util.HashSet ←.reads– java.lang.Module`                                                                                                                                                   |
| 13.1% | 2.34 KiB |        50 | `java.util.HashMap ←.exportedPackages– java.lang.Module`                                                                                                                                                                 |
|  7.9% | 1.41 KiB |        30 | `java.util.HashMap ←.attributes– java.security.Provider$Service ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.serviceMap– sun.security.provider.Sun` |
|  1.8% |    336 B |         7 | `java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                            |
|  1.6% |    288 B |         6 | `java.util.HashMap ← (GC root)`                                                                                                                                                                                          |

##### `long[]`

|     % |     Size | Instances | Path                                                                                                         |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------ |
| 61.9% | 9.64 KiB |         1 | `long[] ←.g– class jdk.internal.math.MathUtils`                                                              |
| 18.1% | 2.82 KiB |         1 | `long[] ← (GC root)`                                                                                         |
|  8.9% | 1.38 KiB |         1 | `long[] ←.savingsInstantTransitions– java.time.zone.ZoneRules`                                               |
|  1.9% |    296 B |         1 | `long[] ←.bitsPerDigit– class java.math.BigInteger`                                                          |
|  1.6% |    256 B |         1 | `long[] ←[3]– java.lang.Object[] ←.backtrace– java.lang.OutOfMemoryError ←[3]– java.lang.OutOfMemoryError[]` |

##### `java.lang.invoke.MethodHandle[]`

|     % |     Size | Instances | Path                                                                                                            |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------- |
| 73.7% | 8.63 KiB |        17 | `java.lang.invoke.MethodHandle[] ←.invokers– java.lang.invoke.Invokers ←.invokers– java.lang.invoke.MethodType` |
| 17.1% |    2 KiB |         1 | `java.lang.invoke.MethodHandle[] ←.ARRAYS– class java.lang.invoke.MethodHandleImpl`                             |
|  1.2% |    144 B |         3 | `java.lang.invoke.MethodHandle[] ←.transformHelpers– java.lang.invoke.BoundMethodHandle$SpeciesData`            |
|  0.7% |     80 B |         1 | `java.lang.invoke.MethodHandle[] ←.ZERO_MHS– class java.lang.invoke.MethodHandles`                              |
|  0.7% |     80 B |         1 | `java.lang.invoke.MethodHandle[] ←.IDENTITY_MHS– class java.lang.invoke.MethodHandles`                          |

##### `java.lang.Class[]`

|     % |     Size | Instances | Path                                                                                                 |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------- |
| 83.6% | 9.11 KiB |       393 | `java.lang.Class[] ←.ptypes– java.lang.invoke.MethodType`                                            |
| 16.0% | 1.74 KiB |        97 | `java.lang.Class[] ← (GC root)`                                                                      |
|  0.2% |     24 B |         1 | `java.lang.Class[] ←.STATICALLY_INVOCABLE_PACKAGES– class java.lang.invoke.InvokerBytecodeGenerator` |
|  0.1% |      8 B |         1 | `java.lang.Class[] ←.METHOD_HANDLE_ARRAY– class java.lang.invoke.MethodType`                         |
|  0.1% |      8 B |         1 | `java.lang.Class[] ←.parameterTypes– java.lang.reflect.Method`                                       |

##### `java.lang.invoke.LambdaForm$Name`

|     % |     Size | Instances | Path                                                                                                             |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------- |
| 12.3% | 1.29 KiB |        39 | `java.lang.invoke.LambdaForm$Name ←[4]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
| 12.0% | 1.26 KiB |        38 | `java.lang.invoke.LambdaForm$Name ←[3]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
| 10.4% |  1.1 KiB |        33 | `java.lang.invoke.LambdaForm$Name ←[5]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
|  9.8% | 1.03 KiB |        31 | `java.lang.invoke.LambdaForm$Name ← (GC root)`                                                                   |
|  6.3% |    680 B |        20 | `java.lang.invoke.LambdaForm$Name ←[2]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |

##### `sun.security.util.KnownOIDs`

|    % | Size | Instances | Path                                                                                     |
| ---: | ---: | --------: | ---------------------------------------------------------------------------------------- |
| 0.4% | 40 B |         1 | `sun.security.util.KnownOIDs ←.AES_256$KWP$NoPadding– class sun.security.util.KnownOIDs` |
| 0.4% | 40 B |         1 | `sun.security.util.KnownOIDs ←.SHA3_512withRSA– class sun.security.util.KnownOIDs`       |
| 0.4% | 40 B |         1 | `sun.security.util.KnownOIDs ←.sect131r1– class sun.security.util.KnownOIDs`             |
| 0.4% | 40 B |         1 | `sun.security.util.KnownOIDs ←.sect131r2– class sun.security.util.KnownOIDs`             |
| 0.4% | 40 B |         1 | `sun.security.util.KnownOIDs ←.OCSPNoCheck– class sun.security.util.KnownOIDs`           |

##### `java.util.concurrent.ConcurrentHashMap`

|    % |  Size | Instances | Path                                                                                                                                                                                                                                                                                                                          |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.0% | 504 B |         6 | `java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain`                                                                                                                                                                                                  |
| 5.0% | 504 B |         6 | `java.util.concurrent.ConcurrentHashMap ←.perms– java.io.FilePermissionCollection ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[0]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain` |
| 2.5% | 252 B |         3 | `java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.module.ServicesCatalog`                                                                                                                                                                                                                                           |
| 1.7% | 168 B |         2 | `java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                                                                                                                                                                                                           |
| 1.7% | 168 B |         2 | `java.util.concurrent.ConcurrentHashMap ←.package2certs– java.net.URLClassLoader`                                                                                                                                                                                                                                             |

##### `java.lang.reflect.Field`

|      % |     Size | Instances | Path                                  |
| -----: | -------: | --------: | ------------------------------------- |
| 100.0% | 9.67 KiB |       101 | `java.lang.reflect.Field ← (GC root)` |

##### `java.lang.module.ModuleDescriptor$Exports`

|    % |  Size | Instances | Path                                                                                                                                                              |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.6% | 768 B |        32 | `java.lang.module.ModuleDescriptor$Exports ←.e0– java.util.ImmutableCollections$Set12 ←.exports– java.lang.module.ModuleDescriptor`                               |
| 4.8% | 432 B |        18 | `java.lang.module.ModuleDescriptor$Exports ←[3]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$SetN ←.exports– java.lang.module.ModuleDescriptor` |
| 4.0% | 360 B |        15 | `java.lang.module.ModuleDescriptor$Exports ←[5]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$SetN ←.exports– java.lang.module.ModuleDescriptor` |
| 3.5% | 312 B |        13 | `java.lang.module.ModuleDescriptor$Exports ←[1]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$SetN ←.exports– java.lang.module.ModuleDescriptor` |
| 3.2% | 288 B |        12 | `java.lang.module.ModuleDescriptor$Exports ←[2]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$SetN ←.exports– java.lang.module.ModuleDescriptor` |

##### `java.net.URI`

|     % |     Size | Instances | Path                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------- |
| 94.0% | 7.88 KiB |        63 | `java.net.URI ← (GC root)`                                                       |
|  1.5% |    128 B |         1 | `java.net.URI ←.moduleMetadataUri– class org.renaissance.core.Launcher`          |
|  1.5% |    128 B |         1 | `java.net.URI ←.benchmarkMetadataUri– class org.renaissance.core.BenchmarkSuite` |
|  1.5% |    128 B |         1 | `java.net.URI ←.moduleMetadataUri– class org.renaissance.core.BenchmarkSuite`    |
|  1.5% |    128 B |         1 | `java.net.URI ←.location– jdk.internal.module.ModuleReferenceImpl`               |

##### `java.nio.ByteBuffer[]`

|      % |  Size | Instances | Path                                                                                                                                                                                                                                                  |
| -----: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 8 KiB |         1 | `java.nio.ByteBuffer[] ←.buffers– sun.nio.ch.Util$BufferCache ←.value– java.lang.ThreadLocal$ThreadLocalMap$Entry ←[12]– java.lang.ThreadLocal$ThreadLocalMap$Entry[] ←.table– java.lang.ThreadLocal$ThreadLocalMap ←.threadLocals– java.lang.Thread` |

##### `java.util.concurrent.ForkJoinTask[]`

|      % |    Size | Instances | Path                                                                                       |
| -----: | ------: | --------: | ------------------------------------------------------------------------------------------ |
| 100.0% | 7.5 KiB |        15 | `java.util.concurrent.ForkJoinTask[] ←.array– java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `java.lang.invoke.DirectMethodHandle`

|     % |     Size | Instances | Path                                                                                                                                          |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 21.1% | 1.51 KiB |        36 | `java.lang.invoke.DirectMethodHandle ← (GC root)`                                                                                             |
|  1.2% |     86 B |         2 | `java.lang.invoke.DirectMethodHandle ←.e0– java.util.ImmutableCollections$List12 ←.factories– java.lang.invoke.BoundMethodHandle$SpeciesData` |
|  0.6% |     43 B |         1 | `java.lang.invoke.DirectMethodHandle ←[33]– java.lang.Object[] ←.<resolved_references>– class java.security.Security`                         |
|  0.6% |     43 B |         1 | `java.lang.invoke.DirectMethodHandle ←(several paths)– java.lang.invoke.BoundMethodHandle$SpeciesData`                                        |
|  0.6% |     43 B |         1 | `java.lang.invoke.DirectMethodHandle ←[49]– java.lang.Object[] ←.<resolved_references>– class java.time.format.DateTimeFormatterBuilder`      |

##### `java.lang.invoke.DirectMethodHandle$Constructor`

|     % |  Size | Instances | Path                                                                                                                                                 |
| ----: | ----: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10.6% | 767 B |        13 | `java.lang.invoke.DirectMethodHandle$Constructor ← (GC root)`                                                                                        |
|  0.8% |  59 B |         1 | `java.lang.invoke.DirectMethodHandle$Constructor ←[26]– java.lang.Object[] ←.<resolved_references>– class org.renaissance.jdk.concurrent.JavaKMeans` |
|  0.8% |  59 B |         1 | `java.lang.invoke.DirectMethodHandle$Constructor ←[4]– java.lang.Object[] ←.<resolved_references>– class java.lang.WeakPairMap`                      |
|  0.8% |  59 B |         1 | `java.lang.invoke.DirectMethodHandle$Constructor ←[244]– java.lang.Object[] ←.<resolved_references>– class java.util.stream.Collectors`              |
|  0.8% |  59 B |         1 | `java.lang.invoke.DirectMethodHandle$Constructor ←[178]– java.lang.Object[] ←.<resolved_references>– class sun.launcher.LauncherHelper`              |

##### `java.lang.ref.SoftReference`

|     % |     Size | Instances | Path                                                                                                               |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------ |
| 18.2% | 1.13 KiB |        29 | `java.lang.ref.SoftReference ←[2]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`   |
| 14.5% |    920 B |        23 | `java.lang.ref.SoftReference ← (GC root)`                                                                          |
| 11.3% |    720 B |        18 | `java.lang.ref.SoftReference ←[1]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`   |
| 10.1% |    640 B |        16 | `java.lang.ref.SoftReference ←[0]– java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm` |
|  7.5% |    480 B |        12 | `java.lang.ref.SoftReference ←[15]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`  |

##### `java.lang.module.ModuleDescriptor`

|      % |     Size | Instances | Path                                            |
| -----: | -------: | --------: | ----------------------------------------------- |
| 100.0% | 5.88 KiB |        64 | `java.lang.module.ModuleDescriptor ← (GC root)` |

##### `java.lang.invoke.LambdaForm`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                           |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 74.8% | 4.38 KiB |        83 | `java.lang.invoke.LambdaForm ← (GC root)`                                                                                                                                                                                                                      |
| 10.8% |    648 B |        12 | `java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[15]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                      |
|  5.4% |    324 B |         6 | `java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[10]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                      |
|  2.7% |    162 B |         3 | `java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                       |
|  2.7% |    162 B |         3 | `java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm` |

##### `java.lang.invoke.LambdaForm$Name[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                       |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 71.3% | 4.03 KiB |        83 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm`                                                                                                                                                                                                                                  |
|  8.7% |    504 B |        12 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[15]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                      |
|  6.6% |    384 B |         6 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[10]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                      |
|  2.1% |    120 B |         3 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm` |
|  1.5% |     88 B |         3 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                       |

##### `java.time.LocalDateTime[]`

|      % |     Size | Instances | Path                                                                            |
| -----: | -------: | --------: | ------------------------------------------------------------------------------- |
| 100.0% | 2.77 KiB |         1 | `java.time.LocalDateTime[] ←.savingsLocalTransitions– java.time.zone.ZoneRules` |
|   0.0% |      0 B |         1 | `java.time.LocalDateTime[] ←.EMPTY_LDT_ARRAY– class java.time.zone.ZoneRules`   |

##### `byte[][]`

|      % |    Size | Instances | Path                                                         |
| -----: | ------: | --------: | ------------------------------------------------------------ |
| 100.0% | 2.7 KiB |         1 | `byte[][] ←.ruleArray– class sun.util.calendar.ZoneInfoFile` |

##### `jdk.internal.math.FDBigInteger[]`

|      % |     Size | Instances | Path                                                                                    |
| -----: | -------: | --------: | --------------------------------------------------------------------------------------- |
| 100.0% | 2.66 KiB |         1 | `jdk.internal.math.FDBigInteger[] ←[2]– java.lang.Object[] ←[2221]– java.lang.Object[]` |

##### `java.lang.invoke.MemberName[]`

|     % |     Size | Instances | Path                                                                                                                                                  |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 80.0% | 1.94 KiB |         8 | `java.lang.invoke.MemberName[] ←.memberName_table– java.lang.invoke.VarForm`                                                                          |
| 10.0% |    248 B |         1 | `java.lang.invoke.MemberName[] ←.memberName_table– java.lang.invoke.VarForm ←.FORM– class java.lang.invoke.VarHandleReferences$FieldInstanceReadOnly` |
| 10.0% |    248 B |         1 | `java.lang.invoke.MemberName[] ←.memberName_table– java.lang.invoke.VarForm ←.FORM– class java.lang.invoke.VarHandleBooleans$FieldInstanceReadOnly`   |

##### `java.lang.Long`

|    % | Size | Instances | Path                                                                            |
| ---: | ---: | --------: | ------------------------------------------------------------------------------- |
| 4.7% | 96 B |        12 | `java.lang.Long ← (GC root)`                                                    |
| 0.4% |  8 B |         1 | `java.lang.Long ←[0]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `java.lang.Long ←[1]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `java.lang.Long ←[2]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `java.lang.Long ←[3]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |

##### `java.lang.Integer`

|    % | Size | Instances | Path                                                                                                                                                                                                                             |
| ---: | ---: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.3% | 36 B |         9 | `java.lang.Integer ← (GC root)`                                                                                                                                                                                                  |
| 0.4% |  4 B |         1 | `java.lang.Integer ←[5]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `java.lang.Integer ←[4]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `java.lang.Integer ←[3]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `java.lang.Integer ←[2]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer` |

##### `java.lang.Short`

|    % | Size | Instances | Path                                                                  |
| ---: | ---: | --------: | --------------------------------------------------------------------- |
| 0.4% |  2 B |         1 | `java.lang.Short ←[0]– java.lang.Short[] ←[2208]– java.lang.Object[]` |
| 0.4% |  2 B |         1 | `java.lang.Short ←[1]– java.lang.Short[] ←[2208]– java.lang.Object[]` |
| 0.4% |  2 B |         1 | `java.lang.Short ←[2]– java.lang.Short[] ←[2208]– java.lang.Object[]` |
| 0.4% |  2 B |         1 | `java.lang.Short ←[3]– java.lang.Short[] ←[2208]– java.lang.Object[]` |
| 0.4% |  2 B |         1 | `java.lang.Short ←[4]– java.lang.Short[] ←[2208]– java.lang.Object[]` |

##### `java.lang.Byte`

|    % | Size | Instances | Path                                                                |
| ---: | ---: | --------: | ------------------------------------------------------------------- |
| 0.4% |  1 B |         1 | `java.lang.Byte ←[0]– java.lang.Byte[] ←[2207]– java.lang.Object[]` |
| 0.4% |  1 B |         1 | `java.lang.Byte ←[1]– java.lang.Byte[] ←[2207]– java.lang.Object[]` |
| 0.4% |  1 B |         1 | `java.lang.Byte ←[2]– java.lang.Byte[] ←[2207]– java.lang.Object[]` |
| 0.4% |  1 B |         1 | `java.lang.Byte ←[3]– java.lang.Byte[] ←[2207]– java.lang.Object[]` |
| 0.4% |  1 B |         1 | `java.lang.Byte ←[4]– java.lang.Byte[] ←[2207]– java.lang.Object[]` |

##### `java.lang.Float`

|      % | Size | Instances | Path                                                          |
| -----: | ---: | --------: | ------------------------------------------------------------- |
| 100.0% |  4 B |         1 | `java.lang.Float ←.FLOAT_ZERO– class sun.invoke.util.Wrapper` |

### Retained size

Constructors with the most instance bytes, including nodes only the instances keep alive.

|     % |      Size | Instances | Constructor                                     |
| ----: | --------: | --------: | ----------------------------------------------- |
| 57.1% |  7.63 MiB |   100,006 | `java.lang.Double[]`                            |
| 28.6% |  3.81 MiB |   500,031 | `java.lang.Double`                              |
| 15.4% |  2.06 MiB |     1,914 | `java.lang.Object[]`                            |
| 12.5% |  1.67 MiB |       110 | `java.util.ArrayList`                           |
| 11.3% |  1.51 MiB |    23,675 | `byte[]`                                        |
| 10.3% |  1.37 MiB |       381 | `java.util.HashMap`                             |
| 10.2% |  1.37 MiB |       411 | `java.util.HashMap$Node[]`                      |
|  9.2% |  1.23 MiB |    10,094 | `java.util.HashMap$Node`                        |
|  7.4% | 1,015 KiB |       159 | `java.lang.ref.SoftReference`                   |
|  7.3% | 1,003 KiB |        10 | `java.util.jar.JarFile`                         |
|  7.3% | 1,000 KiB |         7 | `java.util.jar.Manifest`                        |
|  7.1% |   969 KiB |     2,669 | `java.lang.Class`                               |
|  7.0% |   951 KiB |    22,929 | `java.lang.String`                              |
|  6.1% |   829 KiB |        10 | `java.util.zip.ZipFile$Source`                  |
|  3.9% |   536 KiB |       119 | `java.util.concurrent.ConcurrentHashMap`        |
|  3.9% |   533 KiB |     5,825 | `java.util.LinkedHashMap`                       |
|  3.9% |   527 KiB |        94 | `java.util.concurrent.ConcurrentHashMap$Node[]` |
|  3.3% |   453 KiB |     5,785 | `java.util.jar.Attributes`                      |
|  2.4% |   334 KiB |     6,259 | `java.util.concurrent.ConcurrentHashMap$Node`   |
|  1.1% |   144 KiB |     1,932 | `int[]`                                         |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Array

|     % |     Size | Instances | Constructor                                     |
| ----: | -------: | --------: | ----------------------------------------------- |
| 57.1% | 7.63 MiB |   100,006 | `java.lang.Double[]`                            |
| 15.4% | 2.06 MiB |     1,914 | `java.lang.Object[]`                            |
| 11.3% | 1.51 MiB |    23,675 | `byte[]`                                        |
| 10.2% | 1.37 MiB |       411 | `java.util.HashMap$Node[]`                      |
|  3.9% |  527 KiB |        94 | `java.util.concurrent.ConcurrentHashMap$Node[]` |
|  1.1% |  144 KiB |     1,932 | `int[]`                                         |
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
| 28.6% | 3.81 MiB |   500,031 | `java.lang.Double`  |
| <0.1% |    2 KiB |       256 | `java.lang.Long`    |
| <0.1% | 1.08 KiB |       276 | `java.lang.Integer` |
| <0.1% |    512 B |       256 | `java.lang.Short`   |
| <0.1% |    256 B |       256 | `java.lang.Byte`    |
| <0.1% |      4 B |         1 | `java.lang.Float`   |

##### Object

|     % |      Size | Instances | Constructor                                   |
| ----: | --------: | --------: | --------------------------------------------- |
| 12.5% |  1.67 MiB |       110 | `java.util.ArrayList`                         |
| 10.3% |  1.37 MiB |       381 | `java.util.HashMap`                           |
|  9.2% |  1.23 MiB |    10,094 | `java.util.HashMap$Node`                      |
|  7.4% | 1,015 KiB |       159 | `java.lang.ref.SoftReference`                 |
|  7.3% | 1,003 KiB |        10 | `java.util.jar.JarFile`                       |
|  7.3% | 1,000 KiB |         7 | `java.util.jar.Manifest`                      |
|  6.1% |   829 KiB |        10 | `java.util.zip.ZipFile$Source`                |
|  3.9% |   536 KiB |       119 | `java.util.concurrent.ConcurrentHashMap`      |
|  3.9% |   533 KiB |     5,825 | `java.util.LinkedHashMap`                     |
|  3.3% |   453 KiB |     5,785 | `java.util.jar.Attributes`                    |
|  2.4% |   334 KiB |     6,259 | `java.util.concurrent.ConcurrentHashMap$Node` |
|  1.0% |   139 KiB |         2 | `java.net.URLClassLoader`                     |
|  0.9% |   127 KiB |         2 | `org.renaissance.core.ModuleLoader`           |
|  0.9% |   124 KiB |        38 | `java.util.LinkedHashSet`                     |
|  0.9% |   123 KiB |     1,191 | `java.util.LinkedHashMap$Entry`               |
|  0.8% |   116 KiB |         1 | `java.time.zone.TzdbZoneRulesProvider`        |
|  0.6% |  79.5 KiB |       624 | `java.lang.invoke.MethodType`                 |
|  0.6% |    79 KiB |        72 | `java.lang.Module`                            |
|  0.6% |  77.8 KiB |       154 | `java.util.ImmutableCollections$SetN`         |
|  0.6% |  77.4 KiB |       224 | `java.util.HashSet`                           |

##### String

|    % |    Size | Instances | Constructor        |
| ---: | ------: | --------: | ------------------ |
| 7.0% | 951 KiB |    22,929 | `java.lang.String` |

#### Retainer paths

Retainer paths with the largest contribution to each constructor's retained size.

##### `java.lang.Double[]`

|      % |     Size | Instances | Path                                                                                                                                                     |
| -----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 7.63 MiB |   100,000 | `java.lang.Double[] ← (GC root)`                                                                                                                         |
|  <0.1% |     80 B |         1 | `java.lang.Double[] ←[4]– java.lang.Object[] ←.elementData– java.util.ArrayList ←[0]– java.lang.Object[] ←.a1– scala.collection.immutable.VectorBuilder` |
|  <0.1% |     80 B |         1 | `java.lang.Double[] ←[3]– java.lang.Object[] ←.elementData– java.util.ArrayList ←[0]– java.lang.Object[] ←.a1– scala.collection.immutable.VectorBuilder` |
|  <0.1% |     80 B |         1 | `java.lang.Double[] ←[2]– java.lang.Object[] ←.elementData– java.util.ArrayList ←[0]– java.lang.Object[] ←.a1– scala.collection.immutable.VectorBuilder` |
|  <0.1% |     80 B |         1 | `java.lang.Double[] ←[1]– java.lang.Object[] ←.elementData– java.util.ArrayList ←[0]– java.lang.Object[] ←.a1– scala.collection.immutable.VectorBuilder` |

##### `java.lang.Double`

|     % |    Size | Instances | Path                                        |
| ----: | ------: | --------: | ------------------------------------------- |
| 20.0% | 781 KiB |   100,000 | `java.lang.Double ←[4]– java.lang.Double[]` |
| 20.0% | 781 KiB |   100,000 | `java.lang.Double ←[3]– java.lang.Double[]` |
| 20.0% | 781 KiB |   100,000 | `java.lang.Double ←[2]– java.lang.Double[]` |
| 20.0% | 781 KiB |   100,000 | `java.lang.Double ←[1]– java.lang.Double[]` |
| 20.0% | 781 KiB |   100,000 | `java.lang.Double ←[0]– java.lang.Double[]` |

##### `java.lang.Object[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                  |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 76.7% | 1.58 MiB |         7 | `java.lang.Object[] ←.elementData– java.util.ArrayList`                                                                                                                                               |
|  6.7% |  141 KiB |        37 | `java.lang.Object[] ← (GC root)`                                                                                                                                                                      |
|  3.6% | 76.1 KiB |         2 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader`                                                                                                            |
|  1.8% | 37.4 KiB |         1 | `java.lang.Object[] ←.elements– java.util.ImmutableCollections$SetN ←(several paths)– sun.util.cldr.CLDRLocaleProviderAdapter ←(several paths)– class sun.util.locale.provider.LocaleProviderAdapter` |
|  1.3% | 26.8 KiB |         1 | `java.lang.Object[] ←[2221]– java.lang.Object[]`                                                                                                                                                      |

##### `java.util.ArrayList`

|     % |     Size | Instances | Path                                                                                                                                                                                                                    |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 94.4% | 1.58 MiB |         7 | `java.util.ArrayList ← (GC root)`                                                                                                                                                                                       |
|  4.4% | 76.1 KiB |         2 | `java.util.ArrayList ←.classes– java.net.URLClassLoader`                                                                                                                                                                |
|  0.4% | 7.41 KiB |         1 | `java.util.ArrayList ←.classes– jdk.internal.loader.ClassLoaders$PlatformClassLoader`                                                                                                                                   |
|  0.3% | 4.93 KiB |         1 | `java.util.ArrayList ←.classes– jdk.internal.loader.ClassLoaders$AppClassLoader`                                                                                                                                        |
|  0.1% | 1.09 KiB |        30 | `java.util.ArrayList ←.aliases– java.security.Provider$Service ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.serviceMap– sun.security.provider.Sun` |

##### `byte[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                    |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 46.3% |  715 KiB |        10 | `byte[] ←.cen– java.util.zip.ZipFile$Source`                                                                                                                                                                                            |
| 13.8% |  213 KiB |     8,721 | `byte[] ←.value– java.lang.String`                                                                                                                                                                                                      |
|  2.3% | 35.9 KiB |     1,009 | `byte[] ← (GC root)`                                                                                                                                                                                                                    |
|  2.0% | 31.1 KiB |       116 | `byte[] ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider` |
|  1.1% | 16.8 KiB |       265 | `byte[] ←.value– java.lang.String ←.methodDescriptor– java.lang.invoke.MethodType`                                                                                                                                                      |

##### `java.util.HashMap`

|     % |     Size | Instances | Path                                                                                                                                                              |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 69.8% |  982 KiB |         7 | `java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                     |
|  5.6% | 78.8 KiB |         6 | `java.util.HashMap ← (GC root)`                                                                                                                                   |
|  4.5% | 63.3 KiB |         1 | `java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
|  4.5% | 63.3 KiB |         1 | `java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
|  3.9% | 54.8 KiB |        50 | `java.util.HashMap ←.exportedPackages– java.lang.Module`                                                                                                          |

##### `java.util.HashMap$Node[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 70.2% |  981 KiB |         2 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                     |
|  5.6% | 78.5 KiB |         1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap`                                                                                                                                               |
|  4.5% | 63.2 KiB |         1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
|  4.5% | 63.2 KiB |         1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
|  3.8% | 52.4 KiB |        50 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.exportedPackages– java.lang.Module`                                                                                                          |

##### `java.util.HashMap$Node`

|    % |     Size | Instances | Path                                                                                                                                                                                                                                                             |
| ---: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.6% |   20 KiB |         1 | `java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`                                |
| 1.6% |   20 KiB |         1 | `java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                                                |
| 1.5% | 19.2 KiB |         1 | `java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| 1.5% | 19.2 KiB |         1 | `java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
| 1.5% | 19.1 KiB |         1 | `java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`                                |

##### `java.lang.ref.SoftReference`

|     % |      Size | Instances | Path                                                                                                              |
| ----: | --------: | --------: | ----------------------------------------------------------------------------------------------------------------- |
| 98.5% | 1,000 KiB |         7 | `java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                     |
|  0.3% |  3.44 KiB |        12 | `java.lang.ref.SoftReference ←[15]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm` |
|  0.2% |  2.35 KiB |         4 | `java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`  |
|  0.2% |   2.3 KiB |         6 | `java.lang.ref.SoftReference ←[10]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm` |
|  0.1% |  1.13 KiB |        29 | `java.lang.ref.SoftReference ←[2]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`  |

##### `java.util.jar.JarFile`

|      % |      Size | Instances | Path                                |
| -----: | --------: | --------: | ----------------------------------- |
| 100.0% | 1,003 KiB |        10 | `java.util.jar.JarFile ← (GC root)` |

##### `java.util.jar.Manifest`

|      % |      Size | Instances | Path                                                                                             |
| -----: | --------: | --------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1,000 KiB |         7 | `java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile` |

##### `java.lang.Class`

|     % |     Size | Instances | Path                                                                                                                                                                                        |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 91.7% |  888 KiB |     1,826 | `class org.renaissance.jdk.concurrent.JavaKMeans$UpdateTask$$Lambda+0x000000d001187a50 ← (GC root)`                                                                                         |
|  1.7% | 16.1 KiB |         2 | `class scala.collection.immutable.Set$ ←[191]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader`                                                    |
|  1.7% | 16.1 KiB |         2 | `class scala.math.BigInt$ ←[169]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader`                                                                 |
|  0.8% | 7.38 KiB |         1 | `class sun.util.resources.cldr.provider.CLDRLocaleDataMetaInfo ←[0]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– jdk.internal.loader.ClassLoaders$PlatformClassLoader` |
|  0.2% | 2.02 KiB |         1 | `class org.renaissance.core.ModuleLoader ←[5]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– jdk.internal.loader.ClassLoaders$AppClassLoader`                            |

##### `java.lang.String`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                       |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 36.3% |  345 KiB |     9,663 | `java.lang.String ← (GC root)`                                                                                                                                                                                                             |
|  2.1% | 20.4 KiB |       265 | `java.lang.String ←.methodDescriptor– java.lang.invoke.MethodType`                                                                                                                                                                         |
|  1.8% | 16.7 KiB |       604 | `java.lang.String ←(several paths)– class java.time.zone.ZoneRulesProvider`                                                                                                                                                                |
|  1.7% | 16.2 KiB |       565 | `java.lang.String ←(several paths)– class sun.security.util.KnownOIDs`                                                                                                                                                                     |
|  1.2% | 11.8 KiB |        35 | `java.lang.String ←.value– java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile` |

##### `java.util.zip.ZipFile$Source`

|      % |    Size | Instances | Path                                       |
| -----: | ------: | --------: | ------------------------------------------ |
| 100.0% | 829 KiB |        10 | `java.util.zip.ZipFile$Source ← (GC root)` |

##### `java.util.concurrent.ConcurrentHashMap`

|     % |     Size | Instances | Path                                                                                                                                                                          |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20.8% |  111 KiB |         1 | `java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider`                       |
| 10.4% | 55.5 KiB |         1 | `java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| 10.1% | 54.4 KiB |         1 | `java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                                                                        |
|  9.2% | 49.3 KiB |         2 | `java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                                                           |
|  7.4% | 39.8 KiB |         1 | `java.util.concurrent.ConcurrentHashMap ← (GC root)`                                                                                                                          |

##### `java.util.LinkedHashMap`

|    % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                             |
| ---: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.6% | 19.2 KiB |         1 | `java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| 3.6% | 19.2 KiB |         1 | `java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
| 3.5% | 18.6 KiB |         1 | `java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`                                |
| 3.5% | 18.6 KiB |         1 | `java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                                                |
| 3.4% | 18.3 KiB |         7 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                                                                 |

##### `java.util.concurrent.ConcurrentHashMap$Node[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                 |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 21.1% |  111 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider`                       |
| 10.5% | 55.4 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| 10.3% | 54.3 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                                                                        |
|  9.3% | 49.1 KiB |         2 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                                                           |
|  7.5% | 39.7 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap`                                                                                                                                      |

##### `java.util.jar.Attributes`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                           |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  4.1% | 18.4 KiB |         7 | `java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                              |
| <0.1% |    154 B |         2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[44]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% |    154 B |         2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[43]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% |    154 B |         2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% |    154 B |         2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile` |

##### `java.util.concurrent.ConcurrentHashMap$Node`

|    % |     Size | Instances | Path                                                                                                                                                                                                                                                               |
| ---: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 6.7% | 22.4 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node ←[17]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                                                   |
| 0.7% | 2.28 KiB |         6 | `java.util.concurrent.ConcurrentHashMap$Node ←[0]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain`                              |
| 0.4% | 1.33 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node ←[860]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider` |
| 0.4% | 1.32 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node ←[963]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider` |
| 0.4% | 1.32 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node ←[405]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider` |

##### `int[]`

|     % |     Size | Instances | Path                                                    |
| ----: | -------: | --------: | ------------------------------------------------------- |
| 67.2% | 96.7 KiB |        10 | `int[] ←.entries– java.util.zip.ZipFile$Source`         |
| 18.2% | 26.2 KiB |       904 | `int[] ← (GC root)`                                     |
| 11.2% | 16.1 KiB |        10 | `int[] ←.table– java.util.zip.ZipFile$Source`           |
|  2.9% | 4.13 KiB |         1 | `int[] ←.A– class java.lang.CharacterData00`            |
|  1.6% | 2.36 KiB |         1 | `int[] ←.indices– class sun.util.calendar.ZoneInfoFile` |

##### `java.net.URLClassLoader`

|      % |    Size | Instances | Path                                  |
| -----: | ------: | --------: | ------------------------------------- |
| 100.0% | 139 KiB |         2 | `java.net.URLClassLoader ← (GC root)` |

##### `org.renaissance.core.ModuleLoader`

|     % |     Size | Instances | Path                                                                                                                |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------- |
| 50.0% | 63.3 KiB |         1 | `org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| 50.0% | 63.3 KiB |         1 | `org.renaissance.core.ModuleLoader ← (GC root)`                                                                     |

##### `java.util.LinkedHashSet`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                              |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15.4% | 19.2 KiB |         1 | `java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| 15.4% | 19.2 KiB |         1 | `java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
| 15.0% | 18.6 KiB |         1 | `java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`                                |
| 15.0% | 18.6 KiB |         1 | `java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                                                |
|  7.1% | 8.81 KiB |         1 | `java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[30]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`                                |

##### `java.util.LinkedHashMap$Entry`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 13.8% | 16.9 KiB |       173 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| 13.8% | 16.9 KiB |       173 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
| 13.4% | 16.4 KiB |       174 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`                                |
| 13.4% | 16.4 KiB |       174 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                                                |
| 12.0% | 14.8 KiB |        63 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                                                                 |

##### `java.time.zone.TzdbZoneRulesProvider`

|      % |    Size | Instances | Path                                                                                            |
| -----: | ------: | --------: | ----------------------------------------------------------------------------------------------- |
| 100.0% | 116 KiB |         1 | `java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider` |

##### `byte[][]`

|      % |     Size | Instances | Path                                                         |
| -----: | -------: | --------: | ------------------------------------------------------------ |
| 100.0% | 89.4 KiB |         1 | `byte[][] ←.ruleArray– class sun.util.calendar.ZoneInfoFile` |

##### `java.lang.invoke.MethodType`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 99.6% | 79.2 KiB |       618 | `java.lang.invoke.MethodType ← (GC root)`                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.1% |     48 B |         1 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[217]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                     |
|  0.1% |     48 B |         1 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←.next– java.util.concurrent.ConcurrentHashMap$Node ←[414]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
|  0.1% |     48 B |         1 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[573]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                     |
|  0.1% |     48 B |         1 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[752]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                     |

##### `java.lang.Module`

|     % |     Size | Instances | Path                                                                                                                                                                              |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 97.0% | 76.6 KiB |        63 | `java.lang.Module ← (GC root)`                                                                                                                                                    |
|  0.7% |    593 B |         1 | `java.lang.Module ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[9]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.nameToModule– java.lang.ModuleLayer` |
|  0.6% |    509 B |         1 | `java.lang.Module ←.value– java.util.HashMap$Node ←[16]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.nameToModule– java.lang.ModuleLayer`                               |
|  0.6% |    481 B |         1 | `java.lang.Module ←.value– java.util.HashMap$Node ←[41]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.nameToModule– java.lang.ModuleLayer`                               |
|  0.6% |    481 B |         1 | `java.lang.Module ←.value– java.util.HashMap$Node ←[118]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.nameToModule– java.lang.ModuleLayer`                              |

##### `java.util.ImmutableCollections$SetN`

|     % |     Size | Instances | Path                                                                                                                                                                   |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 48.0% | 37.4 KiB |         1 | `java.util.ImmutableCollections$SetN ←(several paths)– sun.util.cldr.CLDRLocaleProviderAdapter ←(several paths)– class sun.util.locale.provider.LocaleProviderAdapter` |
| 21.1% | 16.4 KiB |        22 | `java.util.ImmutableCollections$SetN ←.exports– java.lang.module.ModuleDescriptor`                                                                                     |
| 15.8% | 12.3 KiB |        39 | `java.util.ImmutableCollections$SetN ←.packages– java.lang.module.ModuleDescriptor`                                                                                    |
|  5.6% | 4.37 KiB |        21 | `java.util.ImmutableCollections$SetN ←.requires– java.lang.module.ModuleDescriptor`                                                                                    |
|  2.1% |  1.6 KiB |         6 | `java.util.ImmutableCollections$SetN ←.provides– java.lang.module.ModuleDescriptor`                                                                                    |

##### `java.util.HashSet`

|     % |     Size | Instances | Path                                                                                                                                               |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 31.7% | 24.6 KiB |         1 | `java.util.HashSet ←.c– java.util.Collections$UnmodifiableSet ←.ZONE_IDS– class java.time.zone.ZoneRulesProvider`                                  |
| 19.1% | 14.8 KiB |        60 | `java.util.HashSet ←.reads– java.lang.Module`                                                                                                      |
|  1.4% | 1.12 KiB |         5 | `java.util.HashSet ←.value– java.util.HashMap$Node ←[2]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.exportedPackages– java.lang.Module` |
|  1.4% | 1.09 KiB |         5 | `java.util.HashSet ←.value– java.util.HashMap$Node ←[0]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.exportedPackages– java.lang.Module` |
|  1.4% | 1.06 KiB |         5 | `java.util.HashSet ←.value– java.util.HashMap$Node ←[9]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.exportedPackages– java.lang.Module` |

##### `char[]`

|     % |     Size | Instances | Path                                                                                               |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------- |
| 31.2% |   16 KiB |         1 | `char[] ←.cb– java.io.BufferedWriter ←.textOut– java.io.PrintStream`                               |
| 31.2% |   16 KiB |         1 | `char[] ←.cb– java.io.BufferedWriter ←.textOut– java.io.PrintStream ←.out– class java.lang.System` |
| 23.0% | 11.8 KiB |         1 | `char[] ←.Y– class java.lang.CharacterData00`                                                      |
|  7.8% |    4 KiB |         1 | `char[] ←.X– class java.lang.CharacterData00`                                                      |
|  4.0% | 2.06 KiB |         1 | `char[] ←.B– class java.lang.CharacterData00`                                                      |

##### `java.lang.ref.SoftReference[]`

|     % |     Size | Instances | Path                                                                                                                 |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------- |
| 69.9% | 28.7 KiB |        88 | `java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                       |
| 21.2% | 8.69 KiB |        40 | `java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType`   |
|  6.5% | 2.69 KiB |        88 | `java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm`                                     |
|  2.4% |  1,000 B |        40 | `java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType` |

##### `scala.math.BigInt[]`

|     % |   Size | Instances | Path                                                                                                                                                     |
| ----: | -----: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 50.0% | 16 KiB |         1 | `scala.math.BigInt[] ←.cache– class scala.math.BigInt$ ←[191]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader` |
| 50.0% | 16 KiB |         1 | `scala.math.BigInt[] ←.cache– class scala.math.BigInt$ ←[169]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader` |

##### `jdk.internal.math.FDBigInteger[]`

|      % |     Size | Instances | Path                                                                                    |
| -----: | -------: | --------: | --------------------------------------------------------------------------------------- |
| 100.0% | 26.5 KiB |         1 | `jdk.internal.math.FDBigInteger[] ←[2]– java.lang.Object[] ←[2221]– java.lang.Object[]` |

##### `java.lang.String[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 43.9% | 11.6 KiB |         1 | `java.lang.String[] ←.regions– class sun.util.calendar.ZoneInfoFile`                                                                                                                                                                                                                                                                                                                                    |
| 17.9% | 4.72 KiB |         1 | `java.lang.String[] ←.a– java.util.Arrays$ArrayList ←.regionIds– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider`                                                                                                                                                                                                                                         |
|  4.2% | 1.12 KiB |        22 | `java.lang.String[] ←(several paths)– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.lookup– sun.text.resources.cldr.FormatData ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                                                                                   |
|  3.5% |    944 B |        18 | `java.lang.String[] ←(several paths)– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.lookup– sun.text.resources.cldr.FormatData_en ←.referent– sun.util.resources.Bundles$BundleReference ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[17]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles` |
|  2.5% |    680 B |         1 | `java.lang.String[] ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[1]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.parentLocalesMap– class sun.util.cldr.CLDRBaseLocaleDataMetaInfo`                                                                                                                                                                                        |

##### `java.lang.invoke.LambdaForm$Name[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                       |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 76.3% |   19 KiB |        83 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm`                                                                                                                                                                                                                                  |
|  6.8% |  1.7 KiB |        12 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[15]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                      |
|  5.8% | 1.44 KiB |         6 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[10]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                      |
|  2.1% |    538 B |         3 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm` |
|  1.6% |    420 B |         1 | `java.lang.invoke.LambdaForm$Name[] ←[3]– java.lang.invoke.LambdaForm$Name[][] ←.INTERNED_ARGUMENTS– class java.lang.invoke.LambdaForm`                                                                                                                                                                    |

##### `long[]`

|     % |     Size | Instances | Path                                                                                                         |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------ |
| 61.9% | 9.64 KiB |         1 | `long[] ←.g– class jdk.internal.math.MathUtils`                                                              |
| 18.1% | 2.82 KiB |         1 | `long[] ← (GC root)`                                                                                         |
|  8.9% | 1.38 KiB |         1 | `long[] ←.savingsInstantTransitions– java.time.zone.ZoneRules`                                               |
|  1.9% |    296 B |         1 | `long[] ←.bitsPerDigit– class java.math.BigInteger`                                                          |
|  1.6% |    256 B |         1 | `long[] ←[3]– java.lang.Object[] ←.backtrace– java.lang.OutOfMemoryError ←[3]– java.lang.OutOfMemoryError[]` |

##### `java.lang.invoke.MethodHandle[]`

|     % |     Size | Instances | Path                                                                                                            |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------- |
| 73.1% | 8.63 KiB |        17 | `java.lang.invoke.MethodHandle[] ←.invokers– java.lang.invoke.Invokers ←.invokers– java.lang.invoke.MethodType` |
| 16.9% |    2 KiB |         1 | `java.lang.invoke.MethodHandle[] ←.ARRAYS– class java.lang.invoke.MethodHandleImpl`                             |
|  1.4% |    172 B |         1 | `java.lang.invoke.MethodHandle[] ←.IDENTITY_MHS– class java.lang.invoke.MethodHandles`                          |
|  1.2% |    144 B |         3 | `java.lang.invoke.MethodHandle[] ←.transformHelpers– java.lang.invoke.BoundMethodHandle$SpeciesData`            |
|  0.7% |     80 B |         1 | `java.lang.invoke.MethodHandle[] ←.ZERO_MHS– class java.lang.invoke.MethodHandles`                              |

##### `java.lang.Class[]`

|     % |     Size | Instances | Path                                                                                                 |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------- |
| 84.1% | 9.11 KiB |       393 | `java.lang.Class[] ←.ptypes– java.lang.invoke.MethodType`                                            |
| 16.1% | 1.74 KiB |        97 | `java.lang.Class[] ← (GC root)`                                                                      |
|  0.2% |     24 B |         1 | `java.lang.Class[] ←.STATICALLY_INVOCABLE_PACKAGES– class java.lang.invoke.InvokerBytecodeGenerator` |
|  0.1% |      8 B |         1 | `java.lang.Class[] ←.METHOD_HANDLE_ARRAY– class java.lang.invoke.MethodType`                         |
|  0.1% |      8 B |         1 | `java.lang.Class[] ←.parameterTypes– java.lang.reflect.Method`                                       |

##### `java.time.LocalDateTime[]`

|      % |     Size | Instances | Path                                                                            |
| -----: | -------: | --------: | ------------------------------------------------------------------------------- |
| 100.0% | 9.69 KiB |         1 | `java.time.LocalDateTime[] ←.savingsLocalTransitions– java.time.zone.ZoneRules` |
|   0.0% |      0 B |         1 | `java.time.LocalDateTime[] ←.EMPTY_LDT_ARRAY– class java.time.zone.ZoneRules`   |

##### `java.lang.ThreadLocal$ThreadLocalMap$Entry[]`

|      % |     Size | Instances | Path                                                                                                                          |
| -----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 8.47 KiB |         1 | `java.lang.ThreadLocal$ThreadLocalMap$Entry[] ←.table– java.lang.ThreadLocal$ThreadLocalMap ←.threadLocals– java.lang.Thread` |

##### `java.nio.ByteBuffer[]`

|      % |  Size | Instances | Path                                                                                                                                                                                                                                                  |
| -----: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 8 KiB |         1 | `java.nio.ByteBuffer[] ←.buffers– sun.nio.ch.Util$BufferCache ←.value– java.lang.ThreadLocal$ThreadLocalMap$Entry ←[12]– java.lang.ThreadLocal$ThreadLocalMap$Entry[] ←.table– java.lang.ThreadLocal$ThreadLocalMap ←.threadLocals– java.lang.Thread` |

##### `java.util.concurrent.ForkJoinTask[]`

|      % |    Size | Instances | Path                                                                                       |
| -----: | ------: | --------: | ------------------------------------------------------------------------------------------ |
| 100.0% | 7.5 KiB |        15 | `java.util.concurrent.ForkJoinTask[] ←.array– java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `java.lang.Long`

|    % | Size | Instances | Path                                                                            |
| ---: | ---: | --------: | ------------------------------------------------------------------------------- |
| 4.7% | 96 B |        12 | `java.lang.Long ← (GC root)`                                                    |
| 0.4% |  8 B |         1 | `java.lang.Long ←[0]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `java.lang.Long ←[1]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `java.lang.Long ←[2]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `java.lang.Long ←[3]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |

##### `java.lang.Integer`

|    % | Size | Instances | Path                                                                                                                                                                                                                             |
| ---: | ---: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.3% | 36 B |         9 | `java.lang.Integer ← (GC root)`                                                                                                                                                                                                  |
| 0.4% |  4 B |         1 | `java.lang.Integer ←[5]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `java.lang.Integer ←[4]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `java.lang.Integer ←[3]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `java.lang.Integer ←[2]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer` |

##### `java.lang.Short`

|    % | Size | Instances | Path                                                                  |
| ---: | ---: | --------: | --------------------------------------------------------------------- |
| 0.4% |  2 B |         1 | `java.lang.Short ←[0]– java.lang.Short[] ←[2208]– java.lang.Object[]` |
| 0.4% |  2 B |         1 | `java.lang.Short ←[1]– java.lang.Short[] ←[2208]– java.lang.Object[]` |
| 0.4% |  2 B |         1 | `java.lang.Short ←[2]– java.lang.Short[] ←[2208]– java.lang.Object[]` |
| 0.4% |  2 B |         1 | `java.lang.Short ←[3]– java.lang.Short[] ←[2208]– java.lang.Object[]` |
| 0.4% |  2 B |         1 | `java.lang.Short ←[4]– java.lang.Short[] ←[2208]– java.lang.Object[]` |

##### `java.lang.Byte`

|    % | Size | Instances | Path                                                                |
| ---: | ---: | --------: | ------------------------------------------------------------------- |
| 0.4% |  1 B |         1 | `java.lang.Byte ←[0]– java.lang.Byte[] ←[2207]– java.lang.Object[]` |
| 0.4% |  1 B |         1 | `java.lang.Byte ←[1]– java.lang.Byte[] ←[2207]– java.lang.Object[]` |
| 0.4% |  1 B |         1 | `java.lang.Byte ←[2]– java.lang.Byte[] ←[2207]– java.lang.Object[]` |
| 0.4% |  1 B |         1 | `java.lang.Byte ←[3]– java.lang.Byte[] ←[2207]– java.lang.Object[]` |
| 0.4% |  1 B |         1 | `java.lang.Byte ←[4]– java.lang.Byte[] ←[2207]– java.lang.Object[]` |

##### `java.lang.Float`

|      % | Size | Instances | Path                                                          |
| -----: | ---: | --------: | ------------------------------------------------------------- |
| 100.0% |  4 B |         1 | `java.lang.Float ←.FLOAT_ZERO– class sun.invoke.util.Wrapper` |

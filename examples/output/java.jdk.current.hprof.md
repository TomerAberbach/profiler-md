# Heap snapshot

Held 13.6 MiB over 704,337 nodes and 851,769 edges.

| Category           |     % |     Size |   Nodes |
| ------------------ | ----: | -------: | ------: |
| Array              | 59.6% | 8.11 MiB | 131,265 |
| Number             | 28.1% | 3.82 MiB | 501,121 |
| Object             |  9.7% | 1.32 MiB |  45,447 |
| String             |  2.3% |  322 KiB |  23,588 |
| Object shape       |  0.3% | 45.3 KiB |   2,820 |
| Big number         | <0.1% | 2.52 KiB |      92 |
| Regular expression | <0.1% |    333 B |       3 |
| Synthetic          |  0.0% |      0 B |       1 |

`B ←(several paths)– A` means `A` retains `B` only through other nodes, along several paths.

## Largest constructors

### Self size

Constructors with the most instance bytes, excluding referenced nodes.

|     % |     Size | Instances | Constructor                                     |
| ----: | -------: | --------: | ----------------------------------------------- |
| 28.0% | 3.82 MiB |   500,076 | `java.lang.Double`                              |
| 28.0% | 3.82 MiB |   100,015 | `java.lang.Double[]`                            |
| 13.5% | 1.83 MiB |     2,187 | `java.lang.Object[]`                            |
| 11.6% | 1.57 MiB |    24,321 | `byte[]`                                        |
|  2.8% |  393 KiB |     5,826 | `java.util.LinkedHashMap`                       |
|  2.5% |  349 KiB |     1,811 | `int[]`                                         |
|  2.3% |  322 KiB |    23,588 | `java.lang.String`                              |
|  2.0% |  281 KiB |    10,263 | `java.util.HashMap$Node`                        |
|  1.3% |  181 KiB |     6,631 | `java.util.concurrent.ConcurrentHashMap$Node`   |
|  1.3% |  180 KiB |       426 | `java.util.HashMap$Node[]`                      |
|  0.9% |  122 KiB |        97 | `java.util.concurrent.ConcurrentHashMap$Node[]` |
|  0.4% | 56.8 KiB |     1,323 | `java.util.LinkedHashMap$Entry`                 |
|  0.4% | 51.3 KiB |       224 | `char[]`                                        |
|  0.3% | 45.3 KiB |     2,820 | `java.lang.Class`                               |
|  0.3% | 45.2 KiB |     5,786 | `java.util.jar.Attributes`                      |
|  0.3% |   44 KiB |       388 | `java.lang.ref.SoftReference[]`                 |
|  0.3% | 36.4 KiB |       848 | `java.lang.invoke.MemberName`                   |
|  0.3% |   36 KiB |       767 | `java.lang.invoke.MethodType`                   |
|  0.2% |   32 KiB |         2 | `scala.math.BigInt[]`                           |
|  0.2% |   28 KiB |       796 | `jdk.internal.util.WeakReferenceKey`            |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Array

|     % |     Size | Instances | Constructor                                     |
| ----: | -------: | --------: | ----------------------------------------------- |
| 28.0% | 3.82 MiB |   100,015 | `java.lang.Double[]`                            |
| 13.5% | 1.83 MiB |     2,187 | `java.lang.Object[]`                            |
| 11.6% | 1.57 MiB |    24,321 | `byte[]`                                        |
|  2.5% |  349 KiB |     1,811 | `int[]`                                         |
|  1.3% |  180 KiB |       426 | `java.util.HashMap$Node[]`                      |
|  0.9% |  122 KiB |        97 | `java.util.concurrent.ConcurrentHashMap$Node[]` |
|  0.4% | 51.3 KiB |       224 | `char[]`                                        |
|  0.3% |   44 KiB |       388 | `java.lang.ref.SoftReference[]`                 |
|  0.2% |   32 KiB |         2 | `scala.math.BigInt[]`                           |
|  0.1% | 19.2 KiB |       447 | `java.lang.String[]`                            |
|  0.1% |   17 KiB |        54 | `java.lang.invoke.MethodHandle[]`               |
|  0.1% | 15.6 KiB |        17 | `long[]`                                        |
|  0.1% | 14.3 KiB |       629 | `java.lang.Class[]`                             |
|  0.1% | 8.19 KiB |       167 | `java.lang.invoke.LambdaForm$Name[]`            |
|  0.1% |    8 KiB |         1 | `java.nio.ByteBuffer[]`                         |
|  0.1% |    7 KiB |        14 | `java.util.concurrent.ForkJoinTask[]`           |
| <0.1% | 2.77 KiB |         2 | `java.time.LocalDateTime[]`                     |
| <0.1% |  2.7 KiB |         1 | `byte[][]`                                      |
| <0.1% | 2.66 KiB |         1 | `jdk.internal.math.FDBigInteger[]`              |
| <0.1% | 2.42 KiB |        10 | `java.lang.invoke.MemberName[]`                 |

##### Number

|     % |     Size | Instances | Constructor         |
| ----: | -------: | --------: | ------------------- |
| 28.0% | 3.82 MiB |   500,076 | `java.lang.Double`  |
| <0.1% |    2 KiB |       256 | `java.lang.Long`    |
| <0.1% | 1.08 KiB |       276 | `java.lang.Integer` |
| <0.1% |    512 B |       256 | `java.lang.Short`   |
| <0.1% |    256 B |       256 | `java.lang.Byte`    |
| <0.1% |      4 B |         1 | `java.lang.Float`   |

##### Object

|    % |     Size | Instances | Constructor                                       |
| ---: | -------: | --------: | ------------------------------------------------- |
| 2.8% |  393 KiB |     5,826 | `java.util.LinkedHashMap`                         |
| 2.0% |  281 KiB |    10,263 | `java.util.HashMap$Node`                          |
| 1.3% |  181 KiB |     6,631 | `java.util.concurrent.ConcurrentHashMap$Node`     |
| 0.4% | 56.8 KiB |     1,323 | `java.util.LinkedHashMap$Entry`                   |
| 0.3% | 45.2 KiB |     5,786 | `java.util.jar.Attributes`                        |
| 0.3% | 36.4 KiB |       848 | `java.lang.invoke.MemberName`                     |
| 0.3% |   36 KiB |       767 | `java.lang.invoke.MethodType`                     |
| 0.2% |   28 KiB |       796 | `jdk.internal.util.WeakReferenceKey`              |
| 0.1% | 18.4 KiB |       392 | `java.util.HashMap`                               |
| 0.1% | 15.4 KiB |       463 | `java.lang.invoke.LambdaForm$Name`                |
| 0.1% | 10.3 KiB |       264 | `sun.security.util.KnownOIDs`                     |
| 0.1% |   10 KiB |       122 | `java.util.concurrent.ConcurrentHashMap`          |
| 0.1% | 9.67 KiB |       101 | `java.lang.reflect.Field`                         |
| 0.1% | 8.94 KiB |       213 | `java.lang.invoke.DirectMethodHandle`             |
| 0.1% | 8.77 KiB |       374 | `java.lang.module.ModuleDescriptor$Exports`       |
| 0.1% | 8.54 KiB |       162 | `java.lang.invoke.LambdaForm`                     |
| 0.1% | 8.38 KiB |        67 | `java.net.URI`                                    |
| 0.1% | 8.05 KiB |       229 | `java.lang.invoke.MethodTypeForm`                 |
| 0.1% | 7.77 KiB |       199 | `java.lang.ref.SoftReference`                     |
| 0.1% | 7.38 KiB |       128 | `java.lang.invoke.DirectMethodHandle$Constructor` |

##### String

|    % |    Size | Instances | Constructor        |
| ---: | ------: | --------: | ------------------ |
| 2.3% | 322 KiB |    23,588 | `java.lang.String` |

#### Retainer paths

Retainer paths with the largest contribution to each constructor's self size.

##### `java.lang.Double`

|     % |    Size | Instances | Path                                        |
| ----: | ------: | --------: | ------------------------------------------- |
| 18.3% | 714 KiB |    91,417 | `java.lang.Double ←[0]– java.lang.Double[]` |
| 18.3% | 714 KiB |    91,417 | `java.lang.Double ←[4]– java.lang.Double[]` |
| 18.3% | 714 KiB |    91,417 | `java.lang.Double ←[3]– java.lang.Double[]` |
| 18.3% | 714 KiB |    91,417 | `java.lang.Double ←[2]– java.lang.Double[]` |
| 18.3% | 714 KiB |    91,417 | `java.lang.Double ←[1]– java.lang.Double[]` |

##### `java.lang.Double[]`

|     % |     Size | Instances | Path                                                                                 |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------ |
| 91.4% | 3.49 MiB |    91,417 | `java.lang.Double[] ← (GC root)`                                                     |
| <0.1% |     40 B |         1 | `java.lang.Double[] ←[21736]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% |     40 B |         1 | `java.lang.Double[] ←[21735]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% |     40 B |         1 | `java.lang.Double[] ←[21734]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% |     40 B |         1 | `java.lang.Double[] ←[21733]– java.lang.Object[] ←.elementData– java.util.ArrayList` |

##### `java.lang.Object[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                 |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 44.5% |  834 KiB |         2 | `java.lang.Object[] ←.elementData– java.util.ArrayList`                                                                                                                                                              |
|  4.4% | 81.8 KiB |         5 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←[1]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  4.4% | 81.8 KiB |         5 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←[3]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  4.3% | 80.6 KiB |         4 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←[0]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  4.3% | 80.6 KiB |         4 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←[2]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `byte[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                    |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 44.6% |  719 KiB |        10 | `byte[] ←.cen– java.util.zip.ZipFile$Source`                                                                                                                                                                                            |
| 13.3% |  214 KiB |     8,765 | `byte[] ←.value– java.lang.String`                                                                                                                                                                                                      |
|  2.4% | 38.3 KiB |     1,054 | `byte[] ← (GC root)`                                                                                                                                                                                                                    |
|  1.9% | 31.1 KiB |       116 | `byte[] ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider` |
|  1.2% | 19.5 KiB |       328 | `byte[] ←.value– java.lang.String ←.methodDescriptor– java.lang.invoke.MethodType`                                                                                                                                                      |

##### `java.util.LinkedHashMap`

|     % |  Size | Instances | Path                                                                                                                                                                                                                                                                                          |
| ----: | ----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  0.1% | 552 B |         8 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                              |
| <0.1% | 138 B |         2 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[44]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% | 138 B |         2 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[43]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% | 138 B |         2 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% | 138 B |         2 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile` |

##### `int[]`

|     % |     Size | Instances | Path                                                    |
| ----: | -------: | --------: | ------------------------------------------------------- |
| 58.6% |  205 KiB |       756 | `int[] ← (GC root)`                                     |
| 27.9% | 97.3 KiB |        10 | `int[] ←.entries– java.util.zip.ZipFile$Source`         |
|  4.6% | 16.2 KiB |        10 | `int[] ←.table– java.util.zip.ZipFile$Source`           |
|  1.2% | 4.13 KiB |         1 | `int[] ←.A– class java.lang.CharacterData00`            |
|  0.7% | 2.36 KiB |         1 | `int[] ←.indices– class sun.util.calendar.ZoneInfoFile` |

##### `java.lang.String`

|     % |     Size | Instances | Path                                                                        |
| ----: | -------: | --------: | --------------------------------------------------------------------------- |
| 41.3% |  133 KiB |     9,752 | `java.lang.String ← (GC root)`                                              |
|  2.6% | 8.26 KiB |       604 | `java.lang.String ←(several paths)– class java.time.zone.ZoneRulesProvider` |
|  2.4% | 7.72 KiB |       565 | `java.lang.String ←(several paths)– class sun.security.util.KnownOIDs`      |
|  1.5% | 4.94 KiB |       361 | `java.lang.String ←(several paths)– class sun.util.calendar.ZoneInfoFile`   |
|  1.4% | 4.48 KiB |       328 | `java.lang.String ←.methodDescriptor– java.lang.invoke.MethodType`          |

##### `java.util.HashMap$Node`

|    % |     Size | Instances | Path                                                                                                                                                                                                                                                                                    |
| ---: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.6% | 1.61 KiB |        59 | `java.util.HashMap$Node ←[3]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.map– java.util.HashSet ←.reads– java.lang.Module`                                                                                                                                                   |
| 0.3% |    840 B |        30 | `java.util.HashMap$Node ←[0]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.attributes– java.security.Provider$Service ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.serviceMap– sun.security.provider.Sun` |
| 0.2% |    448 B |        16 | `java.util.HashMap$Node ←[7]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.map– java.util.HashSet ←.reads– java.lang.Module`                                                                                                                                                   |
| 0.1% |    392 B |        14 | `java.util.HashMap$Node ←[0]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.exportedPackages– java.lang.Module`                                                                                                                                                                 |
| 0.1% |    392 B |        14 | `java.util.HashMap$Node ←[6]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.map– java.util.HashSet ←.reads– java.lang.Module`                                                                                                                                                   |

##### `java.util.concurrent.ConcurrentHashMap$Node`

|     % |  Size | Instances | Path                                                                                                                                                                                                                                              |
| ----: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  0.1% | 196 B |         7 | `java.util.concurrent.ConcurrentHashMap$Node ←[0]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain`             |
| <0.1% |  56 B |         2 | `java.util.concurrent.ConcurrentHashMap$Node ←[14]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                     |
| <0.1% |  56 B |         2 | `java.util.concurrent.ConcurrentHashMap$Node ←.next– java.util.concurrent.ConcurrentHashMap$Node ←[14]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader` |
| <0.1% |  56 B |         2 | `java.util.concurrent.ConcurrentHashMap$Node ←[13]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                     |
| <0.1% |  56 B |         2 | `java.util.concurrent.ConcurrentHashMap$Node ←[9]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                      |

##### `java.util.HashMap$Node[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                               |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 35.5% |   64 KiB |         2 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                                                                                                    |
|  5.3% | 9.63 KiB |        50 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.exportedPackages– java.lang.Module`                                                                                                                                                                                                                                                                         |
|  4.9% | 8.88 KiB |        11 | `java.util.HashMap$Node[] ←.table– java.util.HashMap`                                                                                                                                                                                                                                                                                                              |
|  4.4% |    8 KiB |         1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.lookup– sun.text.resources.cldr.FormatData ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                                                                                   |
|  4.4% |    8 KiB |         1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.lookup– sun.text.resources.cldr.FormatData_en ←.referent– sun.util.resources.Bundles$BundleReference ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[17]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles` |

##### `java.util.concurrent.ConcurrentHashMap$Node[]`

|     % |   Size | Instances | Path                                                                                                                                                                                                                                 |
| ----: | -----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 13.2% | 16 KiB |         2 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                                                           |
| 13.2% | 16 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| 13.2% | 16 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– jdk.internal.loader.ClassLoaders$AppClassLoader`                                                                   |
| 13.2% | 16 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap`                                                                                                                                      |
|  6.6% |  8 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– jdk.internal.loader.ClassLoaders$PlatformClassLoader`                                                              |

##### `java.util.LinkedHashMap$Entry`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18.2% | 10.4 KiB |       241 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`                                |
| 18.2% | 10.4 KiB |       241 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                                                |
| 13.4% | 7.61 KiB |       177 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| 13.4% | 7.61 KiB |       177 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
|  5.5% | 3.14 KiB |        73 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                                                                 |

##### `char[]`

|     % |     Size | Instances | Path                                                                                               |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------- |
| 31.2% |   16 KiB |         1 | `char[] ←.cb– java.io.BufferedWriter ←.textOut– java.io.PrintStream`                               |
| 31.2% |   16 KiB |         1 | `char[] ←.cb– java.io.BufferedWriter ←.textOut– java.io.PrintStream ←.out– class java.lang.System` |
| 23.0% | 11.8 KiB |         1 | `char[] ←.Y– class java.lang.CharacterData00`                                                      |
|  7.8% |    4 KiB |         1 | `char[] ←.X– class java.lang.CharacterData00`                                                      |
|  4.0% | 2.06 KiB |         1 | `char[] ←.B– class java.lang.CharacterData00`                                                      |

##### `java.lang.Class`

|     % |     Size | Instances | Path                                                                                                                                   |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------- |
| 75.8% | 34.3 KiB |     1,856 | `class scala.runtime.java8.JFunction1$mcZI$sp ← (GC root)`                                                                             |
|  1.2% |    544 B |        57 | `class java.lang.invoke.LambdaForm$DMH+0x000000e801205c00 ←.clazz– java.lang.invoke.MemberName ←.vmentry– java.lang.invoke.LambdaForm` |
|  0.5% |    232 B |         2 | `class scala.Product2$mcDJ$sp ←[84]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader`         |
|  0.5% |    232 B |         2 | `class scala.package$ ←[35]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader`                 |
|  0.4% |    177 B |         2 | `class scala.runtime.Statics ←[296]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader`         |

##### `java.util.jar.Attributes`

|     % | Size | Instances | Path                                                                                                                                                                                                                                                           |
| ----: | ---: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  0.1% | 64 B |         8 | `java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                              |
| <0.1% | 16 B |         2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[44]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% | 16 B |         2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[43]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% | 16 B |         2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% | 16 B |         2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile` |

##### `java.lang.ref.SoftReference[]`

|     % |     Size | Instances | Path                                                                                                                 |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------- |
| 60.1% | 26.4 KiB |       130 | `java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                       |
| 29.6% |   13 KiB |        64 | `java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType`   |
|  6.9% | 3.05 KiB |       130 | `java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm`                                     |
|  3.4% |  1.5 KiB |        64 | `java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType` |

##### `java.lang.invoke.MemberName`

|     % |     Size | Instances | Path                                                                                                                                                                                                         |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 14.4% | 5.24 KiB |       122 | `java.lang.invoke.MemberName ←.vmentry– java.lang.invoke.LambdaForm`                                                                                                                                         |
|  9.8% | 3.57 KiB |        83 | `java.lang.invoke.MemberName ← (GC root)`                                                                                                                                                                    |
|  2.8% | 1.03 KiB |        24 | `java.lang.invoke.MemberName ←.member– java.lang.invoke.LambdaForm$NamedFunction ←.function– java.lang.invoke.LambdaForm$Name ←[5]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
|  2.6% |    968 B |        22 | `java.lang.invoke.MemberName ←.member– java.lang.invoke.LambdaForm$NamedFunction ←.function– java.lang.invoke.LambdaForm$Name ←[6]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
|  2.4% |    880 B |        20 | `java.lang.invoke.MemberName ←.member– java.lang.invoke.LambdaForm$NamedFunction ←.function– java.lang.invoke.LambdaForm$Name ←[4]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |

##### `java.lang.invoke.MethodType`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 99.2% | 35.7 KiB |       761 | `java.lang.invoke.MethodType ← (GC root)`                                                                                                                                                                                                                                                                                                                                  |
|  0.1% |     48 B |         1 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[752]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
|  0.1% |     48 B |         1 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[217]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
|  0.1% |     48 B |         1 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[573]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
|  0.1% |     48 B |         1 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[414]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |

##### `scala.math.BigInt[]`

|     % |   Size | Instances | Path                                                                                                                                                     |
| ----: | -----: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 50.0% | 16 KiB |         1 | `scala.math.BigInt[] ←.cache– class scala.math.BigInt$ ←[191]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader` |
| 50.0% | 16 KiB |         1 | `scala.math.BigInt[] ←.cache– class scala.math.BigInt$ ←[171]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader` |

##### `jdk.internal.util.WeakReferenceKey`

|    % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                              |
| ---: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.6% | 1.02 KiB |        29 | `jdk.internal.util.WeakReferenceKey ←(several paths)– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                                                                                                              |
| 0.1% |     36 B |         1 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[39]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| 0.1% |     36 B |         1 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[32]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| 0.1% |     36 B |         1 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[27]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| 0.1% |     36 B |         1 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[24]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |

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
| 15.3% | 2.81 KiB |        60 | `java.util.HashMap ←.map– java.util.HashSet ←.reads– java.lang.Module`                                                                                                                                                   |
| 12.8% | 2.34 KiB |        50 | `java.util.HashMap ←.exportedPackages– java.lang.Module`                                                                                                                                                                 |
|  7.7% | 1.41 KiB |        30 | `java.util.HashMap ←.attributes– java.security.Provider$Service ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.serviceMap– sun.security.provider.Sun` |
|  3.1% |    576 B |        12 | `java.util.HashMap ← (GC root)`                                                                                                                                                                                          |
|  2.0% |    384 B |         8 | `java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                            |

##### `java.lang.invoke.MethodHandle[]`

|     % |     Size | Instances | Path                                                                                                            |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------- |
| 80.7% | 13.7 KiB |        27 | `java.lang.invoke.MethodHandle[] ←.invokers– java.lang.invoke.Invokers ←.invokers– java.lang.invoke.MethodType` |
| 11.8% |    2 KiB |         1 | `java.lang.invoke.MethodHandle[] ←.ARRAYS– class java.lang.invoke.MethodHandleImpl`                             |
|  1.9% |    336 B |         7 | `java.lang.invoke.MethodHandle[] ←.transformHelpers– java.lang.invoke.BoundMethodHandle$SpeciesData`            |
|  0.5% |     80 B |         1 | `java.lang.invoke.MethodHandle[] ←.ZERO_MHS– class java.lang.invoke.MethodHandles`                              |
|  0.5% |     80 B |         1 | `java.lang.invoke.MethodHandle[] ←.IDENTITY_MHS– class java.lang.invoke.MethodHandles`                          |

##### `long[]`

|     % |     Size | Instances | Path                                                                                                         |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------ |
| 61.9% | 9.64 KiB |         1 | `long[] ←.g– class jdk.internal.math.MathUtils`                                                              |
| 18.1% | 2.82 KiB |         1 | `long[] ← (GC root)`                                                                                         |
|  8.9% | 1.38 KiB |         1 | `long[] ←.savingsInstantTransitions– java.time.zone.ZoneRules`                                               |
|  1.9% |    296 B |         1 | `long[] ←.bitsPerDigit– class java.math.BigInteger`                                                          |
|  1.6% |    256 B |         1 | `long[] ←[3]– java.lang.Object[] ←.backtrace– java.lang.OutOfMemoryError ←[0]– java.lang.OutOfMemoryError[]` |

##### `java.lang.invoke.LambdaForm$Name`

|     % |     Size | Instances | Path                                                                                                             |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------- |
| 13.0% | 1.99 KiB |        60 | `java.lang.invoke.LambdaForm$Name ←[4]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
| 12.1% | 1.86 KiB |        56 | `java.lang.invoke.LambdaForm$Name ←[5]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
| 11.4% | 1.76 KiB |        53 | `java.lang.invoke.LambdaForm$Name ←[3]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
|  8.6% | 1.33 KiB |        40 | `java.lang.invoke.LambdaForm$Name ←[6]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
|  7.1% |  1.1 KiB |        33 | `java.lang.invoke.LambdaForm$Name ← (GC root)`                                                                   |

##### `java.lang.Class[]`

|     % |     Size | Instances | Path                                                                                                 |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------- |
| 86.2% | 12.4 KiB |       516 | `java.lang.Class[] ←.ptypes– java.lang.invoke.MethodType`                                            |
| 13.5% | 1.93 KiB |       106 | `java.lang.Class[] ← (GC root)`                                                                      |
|  0.2% |     24 B |         1 | `java.lang.Class[] ←.STATICALLY_INVOCABLE_PACKAGES– class java.lang.invoke.InvokerBytecodeGenerator` |
|  0.1% |      8 B |         1 | `java.lang.Class[] ←.parameterTypes– java.lang.reflect.Method`                                       |
|  0.1% |      8 B |         1 | `java.lang.Class[] ←.METHOD_HANDLE_ARRAY– class java.lang.invoke.MethodType`                         |

##### `sun.security.util.KnownOIDs`

|    % | Size | Instances | Path                                                                                     |
| ---: | ---: | --------: | ---------------------------------------------------------------------------------------- |
| 0.4% | 40 B |         1 | `sun.security.util.KnownOIDs ←.HoldInstructionCode– class sun.security.util.KnownOIDs`   |
| 0.4% | 40 B |         1 | `sun.security.util.KnownOIDs ←.ReasonCode– class sun.security.util.KnownOIDs`            |
| 0.4% | 40 B |         1 | `sun.security.util.KnownOIDs ←.CRLNumber– class sun.security.util.KnownOIDs`             |
| 0.4% | 40 B |         1 | `sun.security.util.KnownOIDs ←.BasicConstraints– class sun.security.util.KnownOIDs`      |
| 0.4% | 40 B |         1 | `sun.security.util.KnownOIDs ←.IssuerAlternativeName– class sun.security.util.KnownOIDs` |

##### `java.util.concurrent.ConcurrentHashMap`

|    % |  Size | Instances | Path                                                                                                                                                                                                                                                                                                                          |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.7% | 588 B |         7 | `java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain`                                                                                                                                                                                                  |
| 5.7% | 588 B |         7 | `java.util.concurrent.ConcurrentHashMap ←.perms– java.io.FilePermissionCollection ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[0]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain` |
| 2.5% | 252 B |         3 | `java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.module.ServicesCatalog`                                                                                                                                                                                                                                           |
| 1.6% | 168 B |         2 | `java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                                                                                                                                                                                                           |
| 1.6% | 168 B |         2 | `java.util.concurrent.ConcurrentHashMap ←.package2certs– java.net.URLClassLoader`                                                                                                                                                                                                                                             |

##### `java.lang.reflect.Field`

|      % |     Size | Instances | Path                                  |
| -----: | -------: | --------: | ------------------------------------- |
| 100.0% | 9.67 KiB |       101 | `java.lang.reflect.Field ← (GC root)` |

##### `java.lang.invoke.DirectMethodHandle`

|     % |     Size | Instances | Path                                                                                                                                                                                              |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 25.4% | 2.27 KiB |        54 | `java.lang.invoke.DirectMethodHandle ← (GC root)`                                                                                                                                                 |
|  1.4% |    129 B |         3 | `java.lang.invoke.DirectMethodHandle ←.e0– java.util.ImmutableCollections$List12 ←.factories– java.lang.invoke.BoundMethodHandle$SpeciesData`                                                     |
|  0.9% |     86 B |         2 | `java.lang.invoke.DirectMethodHandle ←.target– java.lang.invoke.MethodHandleImpl$AsVarargsCollector ←[4]– java.lang.Object[] ←.<resolved_references>– class scala.collection.mutable.ArrayBuffer` |
|  0.9% |     86 B |         2 | `java.lang.invoke.DirectMethodHandle ←[3]– java.lang.Object[] ←.<resolved_references>– class scala.collection.mutable.ArrayBuffer`                                                                |
|  0.5% |     43 B |         1 | `java.lang.invoke.DirectMethodHandle ←(several paths)– java.lang.invoke.BoundMethodHandle$SpeciesData`                                                                                            |

##### `java.lang.module.ModuleDescriptor$Exports`

|    % |  Size | Instances | Path                                                                                                                                                              |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.6% | 768 B |        32 | `java.lang.module.ModuleDescriptor$Exports ←.e0– java.util.ImmutableCollections$Set12 ←.exports– java.lang.module.ModuleDescriptor`                               |
| 4.8% | 432 B |        18 | `java.lang.module.ModuleDescriptor$Exports ←[3]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$SetN ←.exports– java.lang.module.ModuleDescriptor` |
| 4.0% | 360 B |        15 | `java.lang.module.ModuleDescriptor$Exports ←[5]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$SetN ←.exports– java.lang.module.ModuleDescriptor` |
| 3.5% | 312 B |        13 | `java.lang.module.ModuleDescriptor$Exports ←[1]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$SetN ←.exports– java.lang.module.ModuleDescriptor` |
| 3.2% | 288 B |        12 | `java.lang.module.ModuleDescriptor$Exports ←[2]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$SetN ←.exports– java.lang.module.ModuleDescriptor` |

##### `java.lang.invoke.LambdaForm`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                           |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 75.3% | 6.43 KiB |       122 | `java.lang.invoke.LambdaForm ← (GC root)`                                                                                                                                                                                                                      |
|  8.6% |    756 B |        14 | `java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[15]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                      |
|  3.7% |    324 B |         6 | `java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[10]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                      |
|  1.9% |    162 B |         3 | `java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                       |
|  1.9% |    162 B |         3 | `java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm` |

##### `java.net.URI`

|     % |     Size | Instances | Path                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------- |
| 94.0% | 7.88 KiB |        63 | `java.net.URI ← (GC root)`                                                       |
|  1.5% |    128 B |         1 | `java.net.URI ←.moduleMetadataUri– class org.renaissance.core.Launcher`          |
|  1.5% |    128 B |         1 | `java.net.URI ←.benchmarkMetadataUri– class org.renaissance.core.BenchmarkSuite` |
|  1.5% |    128 B |         1 | `java.net.URI ←.moduleMetadataUri– class org.renaissance.core.BenchmarkSuite`    |
|  1.5% |    128 B |         1 | `java.net.URI ←.location– jdk.internal.module.ModuleReferenceImpl`               |

##### `java.lang.invoke.LambdaForm$Name[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                       |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 72.8% | 5.96 KiB |       122 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm`                                                                                                                                                                                                                                  |
|  6.9% |    576 B |        14 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[15]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                      |
|  4.6% |    384 B |         6 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[10]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                      |
|  1.4% |    120 B |         3 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm` |
|  1.0% |     88 B |         3 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                       |

##### `java.lang.invoke.MethodTypeForm`

|     % |     Size | Instances | Path                                                                  |
| ----: | -------: | --------: | --------------------------------------------------------------------- |
| 63.3% |  5.1 KiB |       145 | `java.lang.invoke.MethodTypeForm ← (GC root)`                         |
| 36.7% | 2.95 KiB |        84 | `java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType` |

##### `java.nio.ByteBuffer[]`

|      % |  Size | Instances | Path                                                                                                                                                                                                                                                  |
| -----: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 8 KiB |         1 | `java.nio.ByteBuffer[] ←.buffers– sun.nio.ch.Util$BufferCache ←.value– java.lang.ThreadLocal$ThreadLocalMap$Entry ←[12]– java.lang.ThreadLocal$ThreadLocalMap$Entry[] ←.table– java.lang.ThreadLocal$ThreadLocalMap ←.threadLocals– java.lang.Thread` |

##### `java.lang.ref.SoftReference`

|     % |     Size | Instances | Path                                                                                                               |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------ |
| 20.1% | 1.56 KiB |        40 | `java.lang.ref.SoftReference ←[2]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`   |
| 13.1% | 1.02 KiB |        26 | `java.lang.ref.SoftReference ←[1]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`   |
| 11.6% |    920 B |        23 | `java.lang.ref.SoftReference ←[0]– java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm` |
| 11.6% |    920 B |        23 | `java.lang.ref.SoftReference ← (GC root)`                                                                          |
|  7.0% |    560 B |        14 | `java.lang.ref.SoftReference ←[15]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`  |

##### `java.lang.invoke.DirectMethodHandle$Constructor`

|     % |  Size | Instances | Path                                                                                                                                            |
| ----: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 10.9% | 826 B |        14 | `java.lang.invoke.DirectMethodHandle$Constructor ← (GC root)`                                                                                   |
|  1.6% | 118 B |         2 | `java.lang.invoke.DirectMethodHandle$Constructor ←[15]– java.lang.Object[] ←.<resolved_references>– class scala.collection.mutable.ArrayBuffer` |
|  0.8% |  59 B |         1 | `java.lang.invoke.DirectMethodHandle$Constructor ←[4]– java.lang.Object[] ←.<resolved_references>– class java.lang.WeakPairMap`                 |
|  0.8% |  59 B |         1 | `java.lang.invoke.DirectMethodHandle$Constructor ←[244]– java.lang.Object[] ←.<resolved_references>– class java.util.stream.Collectors`         |
|  0.8% |  59 B |         1 | `java.lang.invoke.DirectMethodHandle$Constructor ←[106]– java.lang.Object[] ←.<resolved_references>– class java.util.regex.Pattern`             |

##### `java.util.concurrent.ForkJoinTask[]`

|      % |  Size | Instances | Path                                                                                       |
| -----: | ----: | --------: | ------------------------------------------------------------------------------------------ |
| 100.0% | 7 KiB |        14 | `java.util.concurrent.ForkJoinTask[] ←.array– java.util.concurrent.ForkJoinPool$WorkQueue` |

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

|      % |     Size | Instances | Path                                                                                   |
| -----: | -------: | --------: | -------------------------------------------------------------------------------------- |
| 100.0% | 2.66 KiB |         1 | `jdk.internal.math.FDBigInteger[] ←.POW_5_CACHE– class jdk.internal.math.FDBigInteger` |

##### `java.lang.invoke.MemberName[]`

|     % |     Size | Instances | Path                                                                                                                                                  |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 80.0% | 1.94 KiB |         8 | `java.lang.invoke.MemberName[] ←.memberName_table– java.lang.invoke.VarForm`                                                                          |
| 10.0% |    248 B |         1 | `java.lang.invoke.MemberName[] ←.memberName_table– java.lang.invoke.VarForm ←.FORM– class java.lang.invoke.VarHandleReferences$FieldInstanceReadOnly` |
| 10.0% |    248 B |         1 | `java.lang.invoke.MemberName[] ←.memberName_table– java.lang.invoke.VarForm ←.FORM– class java.lang.invoke.VarHandleBooleans$FieldInstanceReadOnly`   |

##### `java.lang.Long`

|    % |  Size | Instances | Path                                                                            |
| ---: | ----: | --------: | ------------------------------------------------------------------------------- |
| 5.1% | 104 B |        13 | `java.lang.Long ← (GC root)`                                                    |
| 0.4% |   8 B |         1 | `java.lang.Long ←[0]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |   8 B |         1 | `java.lang.Long ←[1]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |   8 B |         1 | `java.lang.Long ←[2]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |   8 B |         1 | `java.lang.Long ←[3]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |

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

|     % |      Size | Instances | Constructor                                                |
| ----: | --------: | --------: | ---------------------------------------------------------- |
| 56.1% |  7.63 MiB |   100,015 | `java.lang.Double[]`                                       |
| 28.0% |  3.82 MiB |   500,076 | `java.lang.Double`                                         |
| 19.4% |  2.63 MiB |     2,187 | `java.lang.Object[]`                                       |
| 16.7% |  2.27 MiB |       181 | `java.util.ArrayList`                                      |
| 15.5% |  2.11 MiB |       392 | `java.util.HashMap`                                        |
| 15.4% |   2.1 MiB |       426 | `java.util.HashMap$Node[]`                                 |
| 14.4% |  1.96 MiB |    10,263 | `java.util.HashMap$Node`                                   |
| 11.3% |  1.54 MiB |    24,321 | `byte[]`                                                   |
|  7.3% | 1,020 KiB |     2,820 | `java.lang.Class`                                          |
|  7.3% | 1,019 KiB |       199 | `java.lang.ref.SoftReference`                              |
|  7.2% | 1,005 KiB |        10 | `java.util.jar.JarFile`                                    |
|  7.2% | 1,001 KiB |         8 | `java.util.jar.Manifest`                                   |
|  7.1% |   983 KiB |    23,588 | `java.lang.String`                                         |
|  6.0% |   834 KiB |        10 | `java.util.zip.ZipFile$Source`                             |
|  4.0% |   562 KiB |       122 | `java.util.concurrent.ConcurrentHashMap`                   |
|  4.0% |   553 KiB |        97 | `java.util.concurrent.ConcurrentHashMap$Node[]`            |
|  3.9% |   549 KiB |     5,826 | `java.util.LinkedHashMap`                                  |
|  3.3% |   454 KiB |     5,786 | `java.util.jar.Attributes`                                 |
|  3.0% |   413 KiB |        41 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.6% |   356 KiB |     6,631 | `java.util.concurrent.ConcurrentHashMap$Node`              |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Array

|     % |     Size | Instances | Constructor                                     |
| ----: | -------: | --------: | ----------------------------------------------- |
| 56.1% | 7.63 MiB |   100,015 | `java.lang.Double[]`                            |
| 19.4% | 2.63 MiB |     2,187 | `java.lang.Object[]`                            |
| 15.4% |  2.1 MiB |       426 | `java.util.HashMap$Node[]`                      |
| 11.3% | 1.54 MiB |    24,321 | `byte[]`                                        |
|  4.0% |  553 KiB |        97 | `java.util.concurrent.ConcurrentHashMap$Node[]` |
|  1.2% |  166 KiB |     1,811 | `int[]`                                         |
|  0.6% | 89.4 KiB |         1 | `byte[][]`                                      |
|  0.4% |   58 KiB |       388 | `java.lang.ref.SoftReference[]`                 |
|  0.4% | 51.3 KiB |       224 | `char[]`                                        |
|  0.3% | 36.3 KiB |       167 | `java.lang.invoke.LambdaForm$Name[]`            |
|  0.2% |   32 KiB |         2 | `scala.math.BigInt[]`                           |
|  0.2% |   27 KiB |       447 | `java.lang.String[]`                            |
|  0.2% | 26.5 KiB |         1 | `jdk.internal.math.FDBigInteger[]`              |
|  0.1% | 17.3 KiB |        54 | `java.lang.invoke.MethodHandle[]`               |
|  0.1% | 15.6 KiB |        17 | `long[]`                                        |
|  0.1% | 14.3 KiB |       629 | `java.lang.Class[]`                             |
|  0.1% | 9.69 KiB |         2 | `java.time.LocalDateTime[]`                     |
|  0.1% | 8.47 KiB |         1 | `java.lang.ThreadLocal$ThreadLocalMap$Entry[]`  |
|  0.1% |    8 KiB |         1 | `java.nio.ByteBuffer[]`                         |
|  0.1% |    7 KiB |        14 | `java.util.concurrent.ForkJoinTask[]`           |

##### Number

|     % |     Size | Instances | Constructor         |
| ----: | -------: | --------: | ------------------- |
| 28.0% | 3.82 MiB |   500,076 | `java.lang.Double`  |
| <0.1% |    2 KiB |       256 | `java.lang.Long`    |
| <0.1% | 1.08 KiB |       276 | `java.lang.Integer` |
| <0.1% |    512 B |       256 | `java.lang.Short`   |
| <0.1% |    256 B |       256 | `java.lang.Byte`    |
| <0.1% |      4 B |         1 | `java.lang.Float`   |

##### Object

|     % |      Size | Instances | Constructor                                                |
| ----: | --------: | --------: | ---------------------------------------------------------- |
| 16.7% |  2.27 MiB |       181 | `java.util.ArrayList`                                      |
| 15.5% |  2.11 MiB |       392 | `java.util.HashMap`                                        |
| 14.4% |  1.96 MiB |    10,263 | `java.util.HashMap$Node`                                   |
|  7.3% | 1,019 KiB |       199 | `java.lang.ref.SoftReference`                              |
|  7.2% | 1,005 KiB |        10 | `java.util.jar.JarFile`                                    |
|  7.2% | 1,001 KiB |         8 | `java.util.jar.Manifest`                                   |
|  6.0% |   834 KiB |        10 | `java.util.zip.ZipFile$Source`                             |
|  4.0% |   562 KiB |       122 | `java.util.concurrent.ConcurrentHashMap`                   |
|  3.9% |   549 KiB |     5,826 | `java.util.LinkedHashMap`                                  |
|  3.3% |   454 KiB |     5,786 | `java.util.jar.Attributes`                                 |
|  3.0% |   413 KiB |        41 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.6% |   356 KiB |     6,631 | `java.util.concurrent.ConcurrentHashMap$Node`              |
|  1.1% |   158 KiB |         2 | `java.net.URLClassLoader`                                  |
|  1.0% |   141 KiB |         2 | `org.renaissance.core.ModuleLoader`                        |
|  1.0% |   139 KiB |        38 | `java.util.LinkedHashSet`                                  |
|  1.0% |   135 KiB |     1,323 | `java.util.LinkedHashMap$Entry`                            |
|  0.8% |   116 KiB |         1 | `java.time.zone.TzdbZoneRulesProvider`                     |
|  0.8% |   105 KiB |       767 | `java.lang.invoke.MethodType`                              |
|  0.6% |    79 KiB |        72 | `java.lang.Module`                                         |
|  0.6% |  77.8 KiB |       154 | `java.util.ImmutableCollections$SetN`                      |

##### String

|    % |    Size | Instances | Constructor        |
| ---: | ------: | --------: | ------------------ |
| 7.1% | 983 KiB |    23,588 | `java.lang.String` |

#### Retainer paths

Retainer paths with the largest contribution to each constructor's retained size.

##### `java.lang.Double[]`

|     % |     Size | Instances | Path                                                                                 |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------ |
| 91.4% | 6.97 MiB |    91,417 | `java.lang.Double[] ← (GC root)`                                                     |
| <0.1% |     80 B |         1 | `java.lang.Double[] ←[21736]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% |     80 B |         1 | `java.lang.Double[] ←[21735]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% |     80 B |         1 | `java.lang.Double[] ←[21734]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% |     80 B |         1 | `java.lang.Double[] ←[21733]– java.lang.Object[] ←.elementData– java.util.ArrayList` |

##### `java.lang.Double`

|     % |    Size | Instances | Path                                        |
| ----: | ------: | --------: | ------------------------------------------- |
| 18.3% | 714 KiB |    91,417 | `java.lang.Double ←[0]– java.lang.Double[]` |
| 18.3% | 714 KiB |    91,417 | `java.lang.Double ←[4]– java.lang.Double[]` |
| 18.3% | 714 KiB |    91,417 | `java.lang.Double ←[3]– java.lang.Double[]` |
| 18.3% | 714 KiB |    91,417 | `java.lang.Double ←[2]– java.lang.Double[]` |
| 18.3% | 714 KiB |    91,417 | `java.lang.Double ←[1]– java.lang.Double[]` |

##### `java.lang.Object[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                 |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 55.8% | 1.47 MiB |         2 | `java.lang.Object[] ←.elementData– java.util.ArrayList`                                                                                                                                                              |
|  4.2% |  115 KiB |        43 | `java.lang.Object[] ← (GC root)`                                                                                                                                                                                     |
|  3.0% | 81.8 KiB |         5 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←[1]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  3.0% | 81.8 KiB |         5 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←[3]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  3.0% | 81.3 KiB |         2 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader`                                                                                                                           |

##### `java.util.ArrayList`

|     % |     Size | Instances | Path                                                                                                                                                                               |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 64.8% | 1.47 MiB |         2 | `java.util.ArrayList ← (GC root)`                                                                                                                                                  |
|  3.5% | 81.9 KiB |         5 | `java.util.ArrayList ←.value– java.util.HashMap$Node ←[1]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  3.5% | 81.9 KiB |         5 | `java.util.ArrayList ←.value– java.util.HashMap$Node ←[3]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  3.5% | 81.3 KiB |         2 | `java.util.ArrayList ←.classes– java.net.URLClassLoader`                                                                                                                           |
|  3.5% | 80.6 KiB |         4 | `java.util.ArrayList ←.value– java.util.HashMap$Node ←[0]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `java.util.HashMap`

|     % |     Size | Instances | Path                                                                                                                                                              |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 45.5% |  982 KiB |         8 | `java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                     |
| 19.1% |  411 KiB |         5 | `java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                            |
| 18.7% |  403 KiB |        12 | `java.util.HashMap ← (GC root)`                                                                                                                                   |
|  3.3% | 70.7 KiB |         1 | `java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
|  3.3% | 70.7 KiB |         1 | `java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |

##### `java.util.HashMap$Node[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 45.7% |  981 KiB |         2 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                     |
| 19.1% |  411 KiB |         5 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                            |
| 18.7% |  402 KiB |        11 | `java.util.HashMap$Node[] ←.table– java.util.HashMap`                                                                                                                                               |
|  3.3% | 70.6 KiB |         1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
|  3.3% | 70.6 KiB |         1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |

##### `java.util.HashMap$Node`

|    % |     Size | Instances | Path                                                                                                                                                  |
| ---: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.1% | 82.1 KiB |         5 | `java.util.HashMap$Node ←[1]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 4.1% | 82.1 KiB |         5 | `java.util.HashMap$Node ←[3]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 4.0% | 80.7 KiB |         4 | `java.util.HashMap$Node ←[0]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 4.0% | 80.7 KiB |         4 | `java.util.HashMap$Node ←[2]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 4.0% | 80.7 KiB |         4 | `java.util.HashMap$Node ←[4]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `byte[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                    |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 45.6% |  719 KiB |        10 | `byte[] ←.cen– java.util.zip.ZipFile$Source`                                                                                                                                                                                            |
| 13.6% |  214 KiB |     8,765 | `byte[] ←.value– java.lang.String`                                                                                                                                                                                                      |
|  2.4% | 38.3 KiB |     1,054 | `byte[] ← (GC root)`                                                                                                                                                                                                                    |
|  2.0% | 31.1 KiB |       116 | `byte[] ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider` |
|  1.2% | 19.5 KiB |       328 | `byte[] ←.value– java.lang.String ←.methodDescriptor– java.lang.invoke.MethodType`                                                                                                                                                      |

##### `java.lang.Class`

|     % |     Size | Instances | Path                                                                                                                                                                                        |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 91.6% |  934 KiB |     1,856 | `class scala.runtime.java8.JFunction1$mcZI$sp ← (GC root)`                                                                                                                                  |
|  1.6% | 16.2 KiB |         2 | `class scala.math.BigInt$ ←[171]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader`                                                                 |
|  1.6% | 16.1 KiB |         2 | `class scala.util.Right$ ←[191]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader`                                                                  |
|  0.7% | 7.38 KiB |         1 | `class sun.util.resources.cldr.provider.CLDRLocaleDataMetaInfo ←[0]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– jdk.internal.loader.ClassLoaders$PlatformClassLoader` |
|  0.2% | 2.02 KiB |         1 | `class org.renaissance.core.ModuleLoader ←[5]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– jdk.internal.loader.ClassLoaders$AppClassLoader`                            |

##### `java.lang.ref.SoftReference`

|     % |      Size | Instances | Path                                                                                                              |
| ----: | --------: | --------: | ----------------------------------------------------------------------------------------------------------------- |
| 98.3% | 1,002 KiB |         8 | `java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                     |
|  0.4% |  3.99 KiB |        14 | `java.lang.ref.SoftReference ←[15]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm` |
|  0.2% |  2.42 KiB |         6 | `java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`  |
|  0.2% |   2.3 KiB |         6 | `java.lang.ref.SoftReference ←[10]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm` |
|  0.2% |  1.56 KiB |        40 | `java.lang.ref.SoftReference ←[2]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`  |

##### `java.util.jar.JarFile`

|      % |      Size | Instances | Path                                |
| -----: | --------: | --------: | ----------------------------------- |
| 100.0% | 1,005 KiB |        10 | `java.util.jar.JarFile ← (GC root)` |

##### `java.util.jar.Manifest`

|      % |      Size | Instances | Path                                                                                             |
| -----: | --------: | --------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1,001 KiB |         8 | `java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile` |

##### `java.lang.String`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                       |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 35.3% |  347 KiB |     9,752 | `java.lang.String ← (GC root)`                                                                                                                                                                                                             |
|  2.4% |   24 KiB |       328 | `java.lang.String ←.methodDescriptor– java.lang.invoke.MethodType`                                                                                                                                                                         |
|  1.7% | 16.7 KiB |       604 | `java.lang.String ←(several paths)– class java.time.zone.ZoneRulesProvider`                                                                                                                                                                |
|  1.6% | 16.2 KiB |       565 | `java.lang.String ←(several paths)– class sun.security.util.KnownOIDs`                                                                                                                                                                     |
|  1.3% | 12.5 KiB |        40 | `java.lang.String ←.value– java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile` |

##### `java.util.zip.ZipFile$Source`

|      % |    Size | Instances | Path                                       |
| -----: | ------: | --------: | ------------------------------------------ |
| 100.0% | 834 KiB |        10 | `java.util.zip.ZipFile$Source ← (GC root)` |

##### `java.util.concurrent.ConcurrentHashMap`

|     % |     Size | Instances | Path                                                                                                                                                                          |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19.8% |  111 KiB |         1 | `java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider`                       |
| 11.6% | 65.1 KiB |         1 | `java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| 11.1% | 62.3 KiB |         2 | `java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                                                           |
|  9.7% | 54.4 KiB |         1 | `java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                                                                        |
|  7.1% | 39.8 KiB |         1 | `java.util.concurrent.ConcurrentHashMap ← (GC root)`                                                                                                                          |

##### `java.util.concurrent.ConcurrentHashMap$Node[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                 |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 20.1% |  111 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider`                       |
| 11.7% |   65 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| 11.2% | 62.2 KiB |         2 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                                                           |
|  9.8% | 54.3 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                                                                        |
|  7.2% | 39.7 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap`                                                                                                                                      |

##### `java.util.LinkedHashMap`

|    % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                             |
| ---: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.9% |   27 KiB |         1 | `java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`                                |
| 4.9% |   27 KiB |         1 | `java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                                                |
| 3.6% | 19.5 KiB |         8 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                                                                 |
| 3.5% | 19.4 KiB |         1 | `java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| 3.5% | 19.4 KiB |         1 | `java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |

##### `java.util.jar.Attributes`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                           |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  4.3% | 19.6 KiB |         8 | `java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                              |
| <0.1% |    154 B |         2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[44]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% |    154 B |         2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[43]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% |    154 B |         2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% |    154 B |         2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile` |

##### `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`

|      % |    Size | Instances | Path                                                                   |
| -----: | ------: | --------: | ---------------------------------------------------------------------- |
| 100.0% | 413 KiB |        41 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask ← (GC root)` |

##### `java.util.concurrent.ConcurrentHashMap$Node`

|    % |     Size | Instances | Path                                                                                                                                                                                                                                                               |
| ---: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 6.3% | 22.4 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node ←[17]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                                                   |
| 0.7% | 2.66 KiB |         7 | `java.util.concurrent.ConcurrentHashMap$Node ←[0]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain`                              |
| 0.4% | 1.33 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node ←[860]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider` |
| 0.4% | 1.32 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node ←[963]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider` |
| 0.4% | 1.32 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node ←[405]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider` |

##### `int[]`

|      % |     Size | Instances | Path                                                    |
| -----: | -------: | --------: | ------------------------------------------------------- |
| 123.3% |  205 KiB |       756 | `int[] ← (GC root)`                                     |
|  58.6% | 97.3 KiB |        10 | `int[] ←.entries– java.util.zip.ZipFile$Source`         |
|   9.8% | 16.2 KiB |        10 | `int[] ←.table– java.util.zip.ZipFile$Source`           |
|   2.5% | 4.13 KiB |         1 | `int[] ←.A– class java.lang.CharacterData00`            |
|   1.4% | 2.36 KiB |         1 | `int[] ←.indices– class sun.util.calendar.ZoneInfoFile` |

##### `java.net.URLClassLoader`

|      % |    Size | Instances | Path                                  |
| -----: | ------: | --------: | ------------------------------------- |
| 100.0% | 158 KiB |         2 | `java.net.URLClassLoader ← (GC root)` |

##### `org.renaissance.core.ModuleLoader`

|     % |     Size | Instances | Path                                                                                                                |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------- |
| 50.0% | 70.7 KiB |         1 | `org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| 50.0% | 70.7 KiB |         1 | `org.renaissance.core.ModuleLoader ← (GC root)`                                                                     |

##### `java.util.LinkedHashSet`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                              |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19.4% |   27 KiB |         1 | `java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`                                |
| 19.4% |   27 KiB |         1 | `java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                                                |
| 14.0% | 19.4 KiB |         1 | `java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| 14.0% | 19.4 KiB |         1 | `java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
|  6.3% | 8.75 KiB |         1 | `java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[30]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`                                |

##### `java.util.LinkedHashMap$Entry`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16.9% | 22.7 KiB |       241 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`                                |
| 16.9% | 22.7 KiB |       241 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                                                |
| 12.8% | 17.2 KiB |       177 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| 12.8% | 17.2 KiB |       177 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
| 11.8% | 15.9 KiB |        73 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                                                                 |

##### `java.time.zone.TzdbZoneRulesProvider`

|      % |    Size | Instances | Path                                                                                            |
| -----: | ------: | --------: | ----------------------------------------------------------------------------------------------- |
| 100.0% | 116 KiB |         1 | `java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider` |

##### `java.lang.invoke.MethodType`

|     % |    Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | ------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 99.7% | 105 KiB |       761 | `java.lang.invoke.MethodType ← (GC root)`                                                                                                                                                                                                                                                                                                                                  |
| <0.1% |    48 B |         1 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[752]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| <0.1% |    48 B |         1 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[217]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| <0.1% |    48 B |         1 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[573]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| <0.1% |    48 B |         1 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[414]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |

##### `byte[][]`

|      % |     Size | Instances | Path                                                         |
| -----: | -------: | --------: | ------------------------------------------------------------ |
| 100.0% | 89.4 KiB |         1 | `byte[][] ←.ruleArray– class sun.util.calendar.ZoneInfoFile` |

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

##### `java.lang.ref.SoftReference[]`

|     % |     Size | Instances | Path                                                                                                                 |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------- |
| 66.7% | 38.7 KiB |       130 | `java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                       |
| 23.6% | 13.7 KiB |        64 | `java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType`   |
|  6.8% | 3.95 KiB |       130 | `java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm`                                     |
|  2.9% | 1.66 KiB |        64 | `java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType` |

##### `char[]`

|     % |     Size | Instances | Path                                                                                               |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------- |
| 31.2% |   16 KiB |         1 | `char[] ←.cb– java.io.BufferedWriter ←.textOut– java.io.PrintStream`                               |
| 31.2% |   16 KiB |         1 | `char[] ←.cb– java.io.BufferedWriter ←.textOut– java.io.PrintStream ←.out– class java.lang.System` |
| 23.0% | 11.8 KiB |         1 | `char[] ←.Y– class java.lang.CharacterData00`                                                      |
|  7.8% |    4 KiB |         1 | `char[] ←.X– class java.lang.CharacterData00`                                                      |
|  4.0% | 2.06 KiB |         1 | `char[] ←.B– class java.lang.CharacterData00`                                                      |

##### `java.lang.invoke.LambdaForm$Name[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 77.3% |   28 KiB |       122 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  5.4% | 1.94 KiB |        14 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[15]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.0% | 1.44 KiB |         6 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[10]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.4% |    538 B |         3 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                                                                                                                                                                                                                |
|  1.1% |    422 B |         1 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[1]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm` |

##### `scala.math.BigInt[]`

|     % |   Size | Instances | Path                                                                                                                                                     |
| ----: | -----: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 50.0% | 16 KiB |         1 | `scala.math.BigInt[] ←.cache– class scala.math.BigInt$ ←[191]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader` |
| 50.0% | 16 KiB |         1 | `scala.math.BigInt[] ←.cache– class scala.math.BigInt$ ←[171]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader` |

##### `java.lang.String[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 42.9% | 11.6 KiB |         1 | `java.lang.String[] ←.regions– class sun.util.calendar.ZoneInfoFile`                                                                                                                                                                                                                                                                                                                                    |
| 17.5% | 4.72 KiB |         1 | `java.lang.String[] ←.a– java.util.Arrays$ArrayList ←.regionIds– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider`                                                                                                                                                                                                                                         |
|  4.1% | 1.12 KiB |        22 | `java.lang.String[] ←(several paths)– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.lookup– sun.text.resources.cldr.FormatData ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                                                                                   |
|  3.7% |  1,013 B |         3 | `java.lang.String[] ← (GC root)`                                                                                                                                                                                                                                                                                                                                                                        |
|  3.4% |    944 B |        18 | `java.lang.String[] ←(several paths)– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.lookup– sun.text.resources.cldr.FormatData_en ←.referent– sun.util.resources.Bundles$BundleReference ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[17]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles` |

##### `jdk.internal.math.FDBigInteger[]`

|      % |     Size | Instances | Path                                                                                   |
| -----: | -------: | --------: | -------------------------------------------------------------------------------------- |
| 100.0% | 26.5 KiB |         1 | `jdk.internal.math.FDBigInteger[] ←.POW_5_CACHE– class jdk.internal.math.FDBigInteger` |

##### `java.lang.invoke.MethodHandle[]`

|     % |     Size | Instances | Path                                                                                                                                  |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| 79.3% | 13.7 KiB |        27 | `java.lang.invoke.MethodHandle[] ←.invokers– java.lang.invoke.Invokers ←.invokers– java.lang.invoke.MethodType`                       |
| 11.6% |    2 KiB |         1 | `java.lang.invoke.MethodHandle[] ←.ARRAYS– class java.lang.invoke.MethodHandleImpl`                                                   |
|  1.9% |    336 B |         7 | `java.lang.invoke.MethodHandle[] ←.transformHelpers– java.lang.invoke.BoundMethodHandle$SpeciesData`                                  |
|  1.5% |    264 B |         1 | `java.lang.invoke.MethodHandle[] ←.IDENTITY_MHS– class java.lang.invoke.MethodHandles`                                                |
|  0.6% |     98 B |         1 | `java.lang.invoke.MethodHandle[] ←[0]– java.lang.invoke.MethodHandle[][] ←.DOUBLE_MIXERS– class java.lang.invoke.StringConcatFactory` |

##### `long[]`

|     % |     Size | Instances | Path                                                                                                         |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------ |
| 61.9% | 9.64 KiB |         1 | `long[] ←.g– class jdk.internal.math.MathUtils`                                                              |
| 18.1% | 2.82 KiB |         1 | `long[] ← (GC root)`                                                                                         |
|  8.9% | 1.38 KiB |         1 | `long[] ←.savingsInstantTransitions– java.time.zone.ZoneRules`                                               |
|  1.9% |    296 B |         1 | `long[] ←.bitsPerDigit– class java.math.BigInteger`                                                          |
|  1.6% |    256 B |         1 | `long[] ←[3]– java.lang.Object[] ←.backtrace– java.lang.OutOfMemoryError ←[0]– java.lang.OutOfMemoryError[]` |

##### `java.lang.Class[]`

|     % |     Size | Instances | Path                                                                                                 |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------- |
| 86.6% | 12.4 KiB |       516 | `java.lang.Class[] ←.ptypes– java.lang.invoke.MethodType`                                            |
| 13.5% | 1.93 KiB |       106 | `java.lang.Class[] ← (GC root)`                                                                      |
|  0.2% |     24 B |         1 | `java.lang.Class[] ←.STATICALLY_INVOCABLE_PACKAGES– class java.lang.invoke.InvokerBytecodeGenerator` |
|  0.1% |      8 B |         1 | `java.lang.Class[] ←.parameterTypes– java.lang.reflect.Method`                                       |
|  0.1% |      8 B |         1 | `java.lang.Class[] ←.METHOD_HANDLE_ARRAY– class java.lang.invoke.MethodType`                         |

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

|      % |  Size | Instances | Path                                                                                       |
| -----: | ----: | --------: | ------------------------------------------------------------------------------------------ |
| 100.0% | 7 KiB |        14 | `java.util.concurrent.ForkJoinTask[] ←.array– java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `java.lang.Long`

|    % |  Size | Instances | Path                                                                            |
| ---: | ----: | --------: | ------------------------------------------------------------------------------- |
| 5.1% | 104 B |        13 | `java.lang.Long ← (GC root)`                                                    |
| 0.4% |   8 B |         1 | `java.lang.Long ←[0]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |   8 B |         1 | `java.lang.Long ←[1]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |   8 B |         1 | `java.lang.Long ←[2]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |   8 B |         1 | `java.lang.Long ←[3]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |

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

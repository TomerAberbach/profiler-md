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

|     % | Size | Instances | Path                                                                                                        |
| ----: | ---: | --------: | ----------------------------------------------------------------------------------------------------------- |
| <0.1% |  8 B |         1 | `java.lang.Double ←.DOUBLE_ZERO– class sun.invoke.util.Wrapper`                                             |
| <0.1% |  8 B |         1 | `java.lang.Double ←[4]– java.lang.Double[] ←[21736]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% |  8 B |         1 | `java.lang.Double ←[3]– java.lang.Double[] ←[21736]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% |  8 B |         1 | `java.lang.Double ←[2]– java.lang.Double[] ←[21736]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% |  8 B |         1 | `java.lang.Double ←[1]– java.lang.Double[] ←[21736]– java.lang.Object[] ←.elementData– java.util.ArrayList` |

##### `java.lang.Double[]`

|     % | Size | Instances | Path                                                                                 |
| ----: | ---: | --------: | ------------------------------------------------------------------------------------ |
| <0.1% | 40 B |         1 | `java.lang.Double[] ←[21736]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% | 40 B |         1 | `java.lang.Double[] ←[21735]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% | 40 B |         1 | `java.lang.Double[] ←[21734]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% | 40 B |         1 | `java.lang.Double[] ←[21733]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% | 40 B |         1 | `java.lang.Double[] ←[21732]– java.lang.Object[] ←.elementData– java.util.ArrayList` |

##### `java.lang.Object[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                 |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 44.5% |  834 KiB |         1 | `java.lang.Object[] ←.elementData– java.util.ArrayList`                                                                                                                                                              |
|  3.2% | 60.2 KiB |         1 | `java.lang.Object[] ← (GC root)`                                                                                                                                                                                     |
|  2.1% | 39.1 KiB |         1 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←[0]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.1% | 39.1 KiB |         1 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←[1]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  2.1% | 39.1 KiB |         1 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←[2]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `byte[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                       |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 44.6% |  718 KiB |         9 | `byte[] ←.cen– java.util.zip.ZipFile$Source`                                                                                                                                                                                                               |
|  1.4% |   22 KiB |         4 | `byte[] ←.value– java.lang.String`                                                                                                                                                                                                                         |
|  0.7% | 10.5 KiB |         2 | `byte[] ←.value– java.lang.String ←.value– java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile` |
|  0.4% | 7.24 KiB |         1 | `byte[] ←.value– java.lang.String ←(several paths)– class sun.util.resources.cldr.provider.CLDRLocaleDataMetaInfo ←[0]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– jdk.internal.loader.ClassLoaders$PlatformClassLoader`             |
|  0.1% | 1.65 KiB |         1 | `byte[] ←.hb– java.nio.HeapByteBuffer ←.bb– sun.nio.cs.StreamEncoder ←.se– java.io.OutputStreamWriter ←.charOut– java.io.PrintStream ←.out– class java.lang.System`                                                                                        |

##### `java.util.LinkedHashMap`

|     % | Size | Instances | Path                                                                                                                                                                                                                                                                                          |
| ----: | ---: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <0.1% | 69 B |         1 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                              |
| <0.1% | 69 B |         1 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[44]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% | 69 B |         1 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[43]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% | 69 B |         1 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% | 69 B |         1 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile` |

##### `int[]`

|     % |     Size | Instances | Path                                                    |
| ----: | -------: | --------: | ------------------------------------------------------- |
| 53.6% |  187 KiB |        13 | `int[] ← (GC root)`                                     |
| 26.8% | 93.7 KiB |         6 | `int[] ←.entries– java.util.zip.ZipFile$Source`         |
|  3.3% | 11.4 KiB |         2 | `int[] ←.table– java.util.zip.ZipFile$Source`           |
|  1.2% | 4.13 KiB |         1 | `int[] ←.A– class java.lang.CharacterData00`            |
|  0.7% | 2.36 KiB |         1 | `int[] ←.indices– class sun.util.calendar.ZoneInfoFile` |

##### `java.lang.String`

|     % |  Size | Instances | Path                                                                                       |
| ----: | ----: | --------: | ------------------------------------------------------------------------------------------ |
|  0.2% | 518 B |        37 | `java.lang.String ← (GC root)`                                                             |
| <0.1% |  14 B |         1 | `java.lang.String ←.nameAndId– java.net.URLClassLoader`                                    |
| <0.1% |  14 B |         1 | `java.lang.String ←.name– java.lang.Thread`                                                |
| <0.1% |  14 B |         1 | `java.lang.String ←.basicTypeString– sun.invoke.util.Wrapper`                              |
| <0.1% |  14 B |         1 | `java.lang.String ←.strClassName– class com.sun.management.internal.DiagnosticCommandImpl` |

##### `java.util.HashMap$Node`

|     % | Size | Instances | Path                                                                                                                                                                                                                                                        |
| ----: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <0.1% | 28 B |         1 | `java.util.HashMap$Node ←[44]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                               |
| <0.1% | 28 B |         1 | `java.util.HashMap$Node ←[43]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                               |
| <0.1% | 28 B |         1 | `java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                               |
| <0.1% | 28 B |         1 | `java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% | 28 B |         1 | `java.util.HashMap$Node ←.next– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile` |

##### `java.util.concurrent.ConcurrentHashMap$Node`

|     % | Size | Instances | Path                                                                                                                                                                                                                                                                                                  |
| ----: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <0.1% | 28 B |         1 | `java.util.concurrent.ConcurrentHashMap$Node ←[22]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                                                                         |
| <0.1% | 28 B |         1 | `java.util.concurrent.ConcurrentHashMap$Node ←[14]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                                                                         |
| <0.1% | 28 B |         1 | `java.util.concurrent.ConcurrentHashMap$Node ←.next– java.util.concurrent.ConcurrentHashMap$Node ←[14]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                     |
| <0.1% | 28 B |         1 | `java.util.concurrent.ConcurrentHashMap$Node ←.next– java.util.concurrent.ConcurrentHashMap$Node ←.next– java.util.concurrent.ConcurrentHashMap$Node ←[14]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader` |
| <0.1% | 28 B |         1 | `java.util.concurrent.ConcurrentHashMap$Node ←[7]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.libraries– jdk.internal.loader.NativeLibraries ←.NATIVE_LIBS– class jdk.internal.loader.BootLoader`                                                |

##### `java.util.HashMap$Node[]`

|     % |   Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                               |
| ----: | -----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 35.5% | 64 KiB |         2 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                                                                                                    |
|  4.4% |  8 KiB |         1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap`                                                                                                                                                                                                                                                                                                              |
|  4.4% |  8 KiB |         1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.lookup– sun.text.resources.cldr.FormatData ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                                                                                   |
|  4.4% |  8 KiB |         1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.lookup– sun.text.resources.cldr.FormatData_en ←.referent– sun.util.resources.Bundles$BundleReference ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[17]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles` |
|  4.4% |  8 KiB |         1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.map– java.util.HashSet ←.c– java.util.Collections$UnmodifiableSet ←.ZONE_IDS– class java.time.zone.ZoneRulesProvider`                                                                                                                                                                                       |

##### `java.util.concurrent.ConcurrentHashMap$Node[]`

|     % |   Size | Instances | Path                                                                                                                                                                                                                                 |
| ----: | -----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 13.2% | 16 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| 13.2% | 16 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– jdk.internal.loader.ClassLoaders$AppClassLoader`                                                                   |
| 13.2% | 16 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap`                                                                                                                                      |
|  6.6% |  8 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                                                           |
|  6.6% |  8 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– jdk.internal.loader.ClassLoaders$PlatformClassLoader`                                                              |

##### `java.util.LinkedHashMap$Entry`

|    % |  Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---: | ----: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.8% | 440 B |        10 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.1% |  44 B |         1 | `java.util.LinkedHashMap$Entry ←.tail– java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.1% |  44 B |         1 | `java.util.LinkedHashMap$Entry ←.head– java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.1% |  44 B |         1 | `java.util.LinkedHashMap$Entry ←.tail– java.util.LinkedHashMap ←.v– java.util.Collections$SingletonMap ←.valueTextMap– java.time.format.DateTimeTextProvider$LocaleStore ←.val$store– java.time.format.DateTimeFormatterBuilder$1 ←.provider– java.time.format.DateTimeFormatterBuilder$TextPrinterParser ←[5]– java.time.format.DateTimeFormatterBuilder$DateTimePrinterParser[] ←.printerParsers– java.time.format.DateTimeFormatterBuilder$CompositePrinterParser ←.printerParser– java.time.format.DateTimeFormatter ←.RFC_1123_DATE_TIME– class java.time.format.DateTimeFormatter`           |
| 0.1% |  44 B |         1 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.v– java.util.Collections$SingletonMap ←.valueTextMap– java.time.format.DateTimeTextProvider$LocaleStore ←.val$store– java.time.format.DateTimeFormatterBuilder$1 ←.provider– java.time.format.DateTimeFormatterBuilder$TextPrinterParser ←[5]– java.time.format.DateTimeFormatterBuilder$DateTimePrinterParser[] ←.printerParsers– java.time.format.DateTimeFormatterBuilder$CompositePrinterParser ←.printerParser– java.time.format.DateTimeFormatter ←.RFC_1123_DATE_TIME– class java.time.format.DateTimeFormatter` |

##### `char[]`

|     % |     Size | Instances | Path                                                                                               |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------- |
| 31.2% |   16 KiB |         1 | `char[] ←.cb– java.io.BufferedWriter ←.textOut– java.io.PrintStream`                               |
| 31.2% |   16 KiB |         1 | `char[] ←.cb– java.io.BufferedWriter ←.textOut– java.io.PrintStream ←.out– class java.lang.System` |
| 23.0% | 11.8 KiB |         1 | `char[] ←.Y– class java.lang.CharacterData00`                                                      |
|  7.8% |    4 KiB |         1 | `char[] ←.X– class java.lang.CharacterData00`                                                      |
|  4.0% | 2.06 KiB |         1 | `char[] ←.B– class java.lang.CharacterData00`                                                      |

##### `java.lang.Class`

|    % |     Size | Instances | Path                                                     |
| ---: | -------: | --------: | -------------------------------------------------------- |
| 4.8% | 2.17 KiB |         1 | `class sun.security.util.KnownOIDs ← (GC root)`          |
| 1.2% |    560 B |         1 | `class java.lang.invoke.LambdaForm$Kind ← (GC root)`     |
| 0.8% |    361 B |         1 | `class java.net.URI ← (GC root)`                         |
| 0.7% |    333 B |         1 | `class java.util.Calendar ← (GC root)`                   |
| 0.7% |    313 B |         1 | `class jdk.internal.vm.vector.VectorSupport ← (GC root)` |

##### `java.util.jar.Attributes`

|     % | Size | Instances | Path                                                                                                                                                                                                                                                           |
| ----: | ---: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <0.1% |  8 B |         1 | `java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                              |
| <0.1% |  8 B |         1 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[44]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% |  8 B |         1 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[43]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% |  8 B |         1 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% |  8 B |         1 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile` |

##### `java.lang.ref.SoftReference[]`

|     % |     Size | Instances | Path                                                                                                                 |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------- |
| 60.1% | 26.4 KiB |       130 | `java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                       |
| 29.6% |   13 KiB |        64 | `java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType`   |
|  6.9% | 3.05 KiB |       130 | `java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm`                                     |
|  3.4% |  1.5 KiB |        64 | `java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType` |

##### `java.lang.invoke.MemberName`

|    % | Size | Instances | Path                                                                                                                                                                                                         |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0.2% | 88 B |         2 | `java.lang.invoke.MemberName ← (GC root)`                                                                                                                                                                    |
| 0.2% | 88 B |         2 | `java.lang.invoke.MemberName ←.member– java.lang.invoke.LambdaForm$NamedFunction`                                                                                                                            |
| 0.1% | 44 B |         1 | `java.lang.invoke.MemberName ←.member– java.lang.invoke.LambdaForm$NamedFunction ←.function– java.lang.invoke.LambdaForm$Name ←[9]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |
| 0.1% | 44 B |         1 | `java.lang.invoke.MemberName ←.vmentry– java.lang.invoke.LambdaForm`                                                                                                                                         |
| 0.1% | 44 B |         1 | `java.lang.invoke.MemberName ←.member– java.lang.invoke.LambdaForm$NamedFunction ←.function– java.lang.invoke.LambdaForm$Name ←[5]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm` |

##### `java.lang.invoke.MethodType`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 68.1% | 24.5 KiB |       522 | `java.lang.invoke.MethodType ← (GC root)`                                                                                                                                                                                                                                                                                                                                  |
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

|    % | Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                  |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.1% | 36 B |         1 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[39]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                     |
| 0.1% | 36 B |         1 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[32]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                     |
| 0.1% | 36 B |         1 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[27]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                     |
| 0.1% | 36 B |         1 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[24]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                     |
| 0.1% | 36 B |         1 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←.next– java.util.concurrent.ConcurrentHashMap$Node ←[24]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |

##### `java.lang.String[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                             |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.6% | 4.72 KiB |         1 | `java.lang.String[] ←.regions– class sun.util.calendar.ZoneInfoFile`                                                                                                                                             |
| 24.6% | 4.72 KiB |         1 | `java.lang.String[] ←.a– java.util.Arrays$ArrayList ←.regionIds– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider`                                                  |
|  3.5% |    680 B |         1 | `java.lang.String[] ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[1]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.parentLocalesMap– class sun.util.cldr.CLDRBaseLocaleDataMetaInfo` |
|  1.8% |    352 B |         1 | `java.lang.String[] ←.value– java.util.HashMap$Node ←[0]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.parentLocalesMap– class sun.util.cldr.CLDRBaseLocaleDataMetaInfo`                                |
|  0.9% |    184 B |         1 | `java.lang.String[] ←.value– java.util.HashMap$Node ←[13]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.parentLocalesMap– class sun.util.cldr.CLDRBaseLocaleDataMetaInfo`                               |

##### `java.util.HashMap`

|    % | Size | Instances | Path                                                                                                                                                                          |
| ---: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.5% | 96 B |         2 | `java.util.HashMap ←.children– java.util.logging.LogManager$LogNode ←(several paths)– java.util.logging.LogManager$LoggerContext ←.userContext– java.util.logging.LogManager` |
| 0.3% | 48 B |         1 | `java.util.HashMap ←.map– java.util.HashSet ←.NATIVE_ACCESS_MODULES– class jdk.internal.module.ModuleBootstrap`                                                               |
| 0.3% | 48 B |         1 | `java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                 |
| 0.3% | 48 B |         1 | `java.util.HashMap ←.children– java.util.logging.LogManager$LogNode ←.root– java.util.logging.LogManager$SystemLoggerContext ←.systemContext– java.util.logging.LogManager`   |
| 0.3% | 48 B |         1 | `java.util.HashMap ←.children– java.util.logging.LogManager$LogNode ←.root– java.util.logging.LogManager$LoggerContext ←.userContext– java.util.logging.LogManager`           |

##### `java.lang.invoke.MethodHandle[]`

|     % |     Size | Instances | Path                                                                                                            |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------- |
| 80.7% | 13.7 KiB |        27 | `java.lang.invoke.MethodHandle[] ←.invokers– java.lang.invoke.Invokers ←.invokers– java.lang.invoke.MethodType` |
| 11.8% |    2 KiB |         1 | `java.lang.invoke.MethodHandle[] ←.ARRAYS– class java.lang.invoke.MethodHandleImpl`                             |
|  0.5% |     80 B |         1 | `java.lang.invoke.MethodHandle[] ←.ZERO_MHS– class java.lang.invoke.MethodHandles`                              |
|  0.5% |     80 B |         1 | `java.lang.invoke.MethodHandle[] ←.IDENTITY_MHS– class java.lang.invoke.MethodHandles`                          |
|  0.4% |     72 B |         1 | `java.lang.invoke.MethodHandle[] ←.HANDLES– class java.lang.invoke.MethodHandleImpl`                            |

##### `long[]`

|     % |     Size | Instances | Path                                                                                                         |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------ |
| 61.9% | 9.64 KiB |         1 | `long[] ←.g– class jdk.internal.math.MathUtils`                                                              |
| 18.1% | 2.82 KiB |         1 | `long[] ← (GC root)`                                                                                         |
|  8.9% | 1.38 KiB |         1 | `long[] ←.savingsInstantTransitions– java.time.zone.ZoneRules`                                               |
|  1.9% |    296 B |         1 | `long[] ←.bitsPerDigit– class java.math.BigInteger`                                                          |
|  1.6% |    256 B |         1 | `long[] ←[3]– java.lang.Object[] ←.backtrace– java.lang.OutOfMemoryError ←[0]– java.lang.OutOfMemoryError[]` |

##### `java.lang.invoke.LambdaForm$Name`

|    % |  Size | Instances | Path                                                                                                                                                                                                                                          |
| ---: | ----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.7% | 272 B |         8 | `java.lang.invoke.LambdaForm$Name ← (GC root)`                                                                                                                                                                                                |
| 0.2% |  34 B |         1 | `java.lang.invoke.LambdaForm$Name ←[6]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm`                                                                                                                              |
| 0.2% |  34 B |         1 | `java.lang.invoke.LambdaForm$Name ←[9]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm`                                                                                                                              |
| 0.2% |  34 B |         1 | `java.lang.invoke.LambdaForm$Name ←[8]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm`                                                                                                                              |
| 0.2% |  34 B |         1 | `java.lang.invoke.LambdaForm$Name ←[10]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[10]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm` |

##### `java.lang.Class[]`

|     % |     Size | Instances | Path                                                                                                 |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------- |
| 84.0% |   12 KiB |       475 | `java.lang.Class[] ←.ptypes– java.lang.invoke.MethodType`                                            |
| 12.9% | 1.85 KiB |        94 | `java.lang.Class[] ← (GC root)`                                                                      |
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

|    % | Size | Instances | Path                                                                                                                                          |
| ---: | ---: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.8% | 84 B |         1 | `java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                           |
| 0.8% | 84 B |         1 | `java.util.concurrent.ConcurrentHashMap ←.libraries– jdk.internal.loader.NativeLibraries ←.NATIVE_LIBS– class jdk.internal.loader.BootLoader` |
| 0.8% | 84 B |         1 | `java.util.concurrent.ConcurrentHashMap ←.cache– java.lang.invoke.BoundMethodHandle$Specializer`                                              |
| 0.8% | 84 B |         1 | `java.util.concurrent.ConcurrentHashMap ←.CLASS_LOADER_VALUE_MAP– class jdk.internal.loader.BootLoader`                                       |
| 0.8% | 84 B |         1 | `java.util.concurrent.ConcurrentHashMap ←.LOOKASIDE_TABLE– class java.lang.invoke.MethodHandles$Lookup`                                       |

##### `java.lang.reflect.Field`

|      % |     Size | Instances | Path                                  |
| -----: | -------: | --------: | ------------------------------------- |
| 100.0% | 9.67 KiB |       101 | `java.lang.reflect.Field ← (GC root)` |

##### `java.lang.invoke.DirectMethodHandle`

|    % |  Size | Instances | Path                                                                                                                                          |
| ---: | ----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.6% | 516 B |        12 | `java.lang.invoke.DirectMethodHandle ← (GC root)`                                                                                             |
| 0.9% |  86 B |         2 | `java.lang.invoke.DirectMethodHandle ←.e0– java.util.ImmutableCollections$List12 ←.factories– java.lang.invoke.BoundMethodHandle$SpeciesData` |
| 0.5% |  43 B |         1 | `java.lang.invoke.DirectMethodHandle ←(several paths)– java.lang.invoke.BoundMethodHandle$SpeciesData`                                        |
| 0.5% |  43 B |         1 | `java.lang.invoke.DirectMethodHandle ←(several paths)– java.lang.invoke.MethodType`                                                           |
| 0.5% |  43 B |         1 | `java.lang.invoke.DirectMethodHandle ←[1]– java.lang.Object[] ←.<resolved_references>– class java.lang.WeakPairMap`                           |

##### `java.lang.module.ModuleDescriptor$Exports`

|    % | Size | Instances | Path                                                                                                                                                              |
| ---: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.1% | 96 B |         4 | `java.lang.module.ModuleDescriptor$Exports ←.e0– java.util.ImmutableCollections$Set12 ←.exports– java.lang.module.ModuleDescriptor`                               |
| 0.5% | 48 B |         2 | `java.lang.module.ModuleDescriptor$Exports ←.e1– java.util.ImmutableCollections$Set12 ←.exports– java.lang.module.ModuleDescriptor`                               |
| 0.3% | 24 B |         1 | `java.lang.module.ModuleDescriptor$Exports ←[1]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$SetN ←.exports– java.lang.module.ModuleDescriptor` |
| 0.3% | 24 B |         1 | `java.lang.module.ModuleDescriptor$Exports ←[2]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$SetN ←.exports– java.lang.module.ModuleDescriptor` |
| 0.3% | 24 B |         1 | `java.lang.module.ModuleDescriptor$Exports ←[3]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$SetN ←.exports– java.lang.module.ModuleDescriptor` |

##### `java.lang.invoke.LambdaForm`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                           |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14.8% | 1.27 KiB |        24 | `java.lang.invoke.LambdaForm ← (GC root)`                                                                                                                                                                                                                      |
|  2.5% |    216 B |         4 | `java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[15]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                      |
|  1.2% |    108 B |         2 | `java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[10]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                      |
|  0.6% |     54 B |         1 | `java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                       |
|  0.6% |     54 B |         1 | `java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm` |

##### `java.net.URI`

|    % |  Size | Instances | Path                                                                             |
| ---: | ----: | --------: | -------------------------------------------------------------------------------- |
| 3.0% | 256 B |         2 | `java.net.URI ← (GC root)`                                                       |
| 1.5% | 128 B |         1 | `java.net.URI ←.moduleMetadataUri– class org.renaissance.core.Launcher`          |
| 1.5% | 128 B |         1 | `java.net.URI ←.benchmarkMetadataUri– class org.renaissance.core.BenchmarkSuite` |
| 1.5% | 128 B |         1 | `java.net.URI ←.moduleMetadataUri– class org.renaissance.core.BenchmarkSuite`    |
| 1.5% | 128 B |         1 | `java.net.URI ←.location– jdk.internal.module.ModuleReferenceImpl`               |

##### `java.lang.invoke.LambdaForm$Name[]`

|    % |  Size | Instances | Path                                                                                                                                                                                                  |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.9% | 576 B |         5 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm`                                                                                                                             |
| 2.0% | 168 B |         2 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[10]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm` |
| 1.4% | 120 B |         1 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[15]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm` |
| 1.0% |  80 B |         1 | `java.lang.invoke.LambdaForm$Name[] ←[4]– java.lang.invoke.LambdaForm$Name[][] ←.INTERNED_ARGUMENTS– class java.lang.invoke.LambdaForm`                                                               |
| 1.0% |  80 B |         1 | `java.lang.invoke.LambdaForm$Name[] ←[3]– java.lang.invoke.LambdaForm$Name[][] ←.INTERNED_ARGUMENTS– class java.lang.invoke.LambdaForm`                                                               |

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

|    % |  Size | Instances | Path                                                                                                               |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------ |
| 3.5% | 280 B |         7 | `java.lang.ref.SoftReference ←[0]– java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm` |
| 1.5% | 120 B |         3 | `java.lang.ref.SoftReference ←[2]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`   |
| 0.5% |  40 B |         1 | `java.lang.ref.SoftReference ←[10]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`  |
| 0.5% |  40 B |         1 | `java.lang.ref.SoftReference ←[15]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`  |
| 0.5% |  40 B |         1 | `java.lang.ref.SoftReference ←[3]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`   |

##### `java.lang.invoke.DirectMethodHandle$Constructor`

|    % |  Size | Instances | Path                                                                                                                                    |
| ---: | ----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------- |
| 3.9% | 295 B |         5 | `java.lang.invoke.DirectMethodHandle$Constructor ← (GC root)`                                                                           |
| 0.8% |  59 B |         1 | `java.lang.invoke.DirectMethodHandle$Constructor ←[4]– java.lang.Object[] ←.<resolved_references>– class java.lang.WeakPairMap`         |
| 0.8% |  59 B |         1 | `java.lang.invoke.DirectMethodHandle$Constructor ←[244]– java.lang.Object[] ←.<resolved_references>– class java.util.stream.Collectors` |
| 0.8% |  59 B |         1 | `java.lang.invoke.DirectMethodHandle$Constructor ←[106]– java.lang.Object[] ←.<resolved_references>– class java.util.regex.Pattern`     |
| 0.8% |  59 B |         1 | `java.lang.invoke.DirectMethodHandle$Constructor ←[97]– java.lang.Object[] ←.<resolved_references>– class java.util.regex.Pattern`      |

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

|    % | Size | Instances | Path                                                                            |
| ---: | ---: | --------: | ------------------------------------------------------------------------------- |
| 0.4% |  8 B |         1 | `java.lang.Long ←[0]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `java.lang.Long ←[1]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `java.lang.Long ←[2]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `java.lang.Long ←[3]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `java.lang.Long ←[4]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |

##### `java.lang.Integer`

|    % | Size | Instances | Path                                                                                                                                                                                                                             |
| ---: | ---: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.4% |  4 B |         1 | `java.lang.Integer ←[5]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `java.lang.Integer ←[4]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `java.lang.Integer ←[3]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `java.lang.Integer ←[2]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `java.lang.Integer ←[1]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer` |

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

|     % | Size | Instances | Path                                                                                 |
| ----: | ---: | --------: | ------------------------------------------------------------------------------------ |
| <0.1% | 80 B |         1 | `java.lang.Double[] ←[21736]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% | 80 B |         1 | `java.lang.Double[] ←[21735]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% | 80 B |         1 | `java.lang.Double[] ←[21734]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% | 80 B |         1 | `java.lang.Double[] ←[21733]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% | 80 B |         1 | `java.lang.Double[] ←[21732]– java.lang.Object[] ←.elementData– java.util.ArrayList` |

##### `java.lang.Double`

|     % | Size | Instances | Path                                                                                                        |
| ----: | ---: | --------: | ----------------------------------------------------------------------------------------------------------- |
| <0.1% |  8 B |         1 | `java.lang.Double ←.DOUBLE_ZERO– class sun.invoke.util.Wrapper`                                             |
| <0.1% |  8 B |         1 | `java.lang.Double ←[4]– java.lang.Double[] ←[21736]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% |  8 B |         1 | `java.lang.Double ←[3]– java.lang.Double[] ←[21736]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% |  8 B |         1 | `java.lang.Double ←[2]– java.lang.Double[] ←[21736]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% |  8 B |         1 | `java.lang.Double ←[1]– java.lang.Double[] ←[21736]– java.lang.Object[] ←.elementData– java.util.ArrayList` |

##### `java.lang.Object[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                 |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 55.8% | 1.47 MiB |         1 | `java.lang.Object[] ←.elementData– java.util.ArrayList`                                                                                                                                                              |
|  4.2% |  113 KiB |         2 | `java.lang.Object[] ← (GC root)`                                                                                                                                                                                     |
|  1.6% | 43.9 KiB |         1 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader`                                                                                                                           |
|  1.4% | 39.1 KiB |         1 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←[0]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.4% | 39.1 KiB |         1 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←[1]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `java.util.ArrayList`

|     % |     Size | Instances | Path                                                                                                                                                                               |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 64.8% | 1.47 MiB |         1 | `java.util.ArrayList ← (GC root)`                                                                                                                                                  |
|  1.9% | 43.9 KiB |         1 | `java.util.ArrayList ←.classes– java.net.URLClassLoader`                                                                                                                           |
|  1.7% | 39.1 KiB |         1 | `java.util.ArrayList ←.value– java.util.HashMap$Node ←[0]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.7% | 39.1 KiB |         1 | `java.util.ArrayList ←.value– java.util.HashMap$Node ←[1]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
|  1.7% | 39.1 KiB |         1 | `java.util.ArrayList ←.value– java.util.HashMap$Node ←[2]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `java.util.HashMap`

|     % |     Size | Instances | Path                                                                                                                                                              |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 45.5% |  981 KiB |         2 | `java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                     |
| 18.2% |  392 KiB |         3 | `java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                            |
| 13.4% |  289 KiB |         3 | `java.util.HashMap ← (GC root)`                                                                                                                                   |
|  3.3% | 70.7 KiB |         1 | `java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
|  3.3% | 70.7 KiB |         1 | `java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |

##### `java.util.HashMap$Node[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 45.7% |  981 KiB |         2 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                     |
| 18.2% |  391 KiB |         3 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`                                                                            |
| 13.5% |  289 KiB |         3 | `java.util.HashMap$Node[] ←.table– java.util.HashMap`                                                                                                                                               |
|  3.3% | 70.6 KiB |         1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
|  3.3% | 70.6 KiB |         1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |

##### `java.util.HashMap$Node`

|    % |     Size | Instances | Path                                                                                                                                                  |
| ---: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.0% | 39.1 KiB |         1 | `java.util.HashMap$Node ←[0]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 2.0% | 39.1 KiB |         1 | `java.util.HashMap$Node ←[1]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 2.0% | 39.1 KiB |         1 | `java.util.HashMap$Node ←[2]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 2.0% | 39.1 KiB |         1 | `java.util.HashMap$Node ←[3]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |
| 2.0% | 39.1 KiB |         1 | `java.util.HashMap$Node ←[4]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.result– org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask` |

##### `byte[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                       |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 45.6% |  718 KiB |         9 | `byte[] ←.cen– java.util.zip.ZipFile$Source`                                                                                                                                                                                                               |
|  1.4% |   22 KiB |         4 | `byte[] ←.value– java.lang.String`                                                                                                                                                                                                                         |
|  0.7% | 10.5 KiB |         2 | `byte[] ←.value– java.lang.String ←.value– java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile` |
|  0.5% | 7.24 KiB |         1 | `byte[] ←.value– java.lang.String ←(several paths)– class sun.util.resources.cldr.provider.CLDRLocaleDataMetaInfo ←[0]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– jdk.internal.loader.ClassLoaders$PlatformClassLoader`             |
|  0.1% | 1.65 KiB |         1 | `byte[] ←.hb– java.nio.HeapByteBuffer ←.bb– sun.nio.cs.StreamEncoder ←.se– java.io.OutputStreamWriter ←.charOut– java.io.PrintStream ←.out– class java.lang.System`                                                                                        |

##### `java.lang.Class`

|     % |     Size | Instances | Path                                                 |
| ----: | -------: | --------: | ---------------------------------------------------- |
| 17.9% |  182 KiB |         1 | `class java.time.zone.ZoneRulesProvider ← (GC root)` |
| 12.4% |  127 KiB |         1 | `class sun.util.calendar.ZoneInfoFile ← (GC root)`   |
|  6.6% | 67.2 KiB |         1 | `class sun.security.util.KnownOIDs ← (GC root)`      |
|  6.5% | 66.6 KiB |         1 | `class java.lang.invoke.MethodType ← (GC root)`      |
|  5.4% | 54.7 KiB |         1 | `class sun.util.resources.Bundles ← (GC root)`       |

##### `java.lang.ref.SoftReference`

|     % |      Size | Instances | Path                                                                                                             |
| ----: | --------: | --------: | ---------------------------------------------------------------------------------------------------------------- |
| 98.3% | 1,002 KiB |         8 | `java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                    |
|  0.2% |   1.7 KiB |         2 | `java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm` |
|  0.1% |     716 B |         1 | `java.lang.ref.SoftReference ←.resourceCache– jdk.internal.loader.ClassLoaders$BootClassLoader`                  |
|  0.1% |     716 B |         1 | `java.lang.ref.SoftReference ←.resourceCache– jdk.internal.loader.ClassLoaders$AppClassLoader`                   |
|  0.1% |     716 B |         1 | `java.lang.ref.SoftReference ←.resourceCache– jdk.internal.loader.ClassLoaders$PlatformClassLoader`              |

##### `java.util.jar.JarFile`

|      % |      Size | Instances | Path                                |
| -----: | --------: | --------: | ----------------------------------- |
| 100.0% | 1,005 KiB |        10 | `java.util.jar.JarFile ← (GC root)` |

##### `java.util.jar.Manifest`

|      % |      Size | Instances | Path                                                                                             |
| -----: | --------: | --------: | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1,001 KiB |         8 | `java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile` |

##### `java.lang.String`

|    % |     Size | Instances | Path                                                                                                                                                                                                                                       |
| ---: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2.7% | 26.8 KiB |         9 | `java.lang.String ← (GC root)`                                                                                                                                                                                                             |
| 1.1% | 10.5 KiB |         2 | `java.lang.String ←.value– java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile` |
| 0.7% | 7.26 KiB |         1 | `java.lang.String ←(several paths)– class sun.util.resources.cldr.provider.CLDRLocaleDataMetaInfo ←[0]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– jdk.internal.loader.ClassLoaders$PlatformClassLoader`             |
| 0.1% |    704 B |         1 | `java.lang.String ←(several paths)– class java.security.Security`                                                                                                                                                                          |
| 0.1% |    593 B |         1 | `java.lang.String ←[5]– java.lang.String[]`                                                                                                                                                                                                |

##### `java.util.zip.ZipFile$Source`

|      % |    Size | Instances | Path                                       |
| -----: | ------: | --------: | ------------------------------------------ |
| 100.0% | 834 KiB |        10 | `java.util.zip.ZipFile$Source ← (GC root)` |

##### `java.util.concurrent.ConcurrentHashMap`

|     % |     Size | Instances | Path                                                                                                                                                                          |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19.8% |  111 KiB |         1 | `java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider`                       |
| 11.6% | 65.1 KiB |         1 | `java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
|  9.7% | 54.4 KiB |         1 | `java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                                                                        |
|  7.1% | 39.8 KiB |         1 | `java.util.concurrent.ConcurrentHashMap ← (GC root)`                                                                                                                          |
|  6.7% | 37.6 KiB |         1 | `java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– jdk.internal.loader.ClassLoaders$AppClassLoader`                                                                   |

##### `java.util.concurrent.ConcurrentHashMap$Node[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                 |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 20.1% |  111 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider`                       |
| 11.7% |   65 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
|  9.8% | 54.3 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                                                                        |
|  7.2% | 39.7 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap`                                                                                                                                      |
|  6.8% | 37.6 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– jdk.internal.loader.ClassLoaders$AppClassLoader`                                                                   |

##### `java.util.LinkedHashMap`

|    % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                             |
| ---: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.9% |   27 KiB |         1 | `java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`                                |
| 4.9% |   27 KiB |         1 | `java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                                                |
| 3.5% | 19.4 KiB |         1 | `java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| 3.5% | 19.4 KiB |         1 | `java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
| 1.6% | 8.74 KiB |         1 | `java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[30]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`                                |

##### `java.util.jar.Attributes`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                           |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  4.3% | 19.6 KiB |         8 | `java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                              |
| <0.1% |     77 B |         1 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[44]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% |     77 B |         1 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[43]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% |     77 B |         1 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                |
| <0.1% |     77 B |         1 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile` |

##### `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask`

|      % |    Size | Instances | Path                                                                   |
| -----: | ------: | --------: | ---------------------------------------------------------------------- |
| 100.0% | 413 KiB |        41 | `org.renaissance.jdk.concurrent.JavaKMeans$AssignmentTask ← (GC root)` |

##### `java.util.concurrent.ConcurrentHashMap$Node`

|    % |     Size | Instances | Path                                                                                                                                                                                                                                                               |
| ---: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 6.3% | 22.4 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node ←[17]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                                                   |
| 0.4% | 1.33 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node ←[860]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider` |
| 0.4% | 1.32 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node ←[963]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider` |
| 0.4% | 1.32 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node ←[405]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider` |
| 0.3% | 1.22 KiB |         1 | `java.util.concurrent.ConcurrentHashMap$Node ←[703]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider` |

##### `int[]`

|      % |     Size | Instances | Path                                                    |
| -----: | -------: | --------: | ------------------------------------------------------- |
| 112.8% |  187 KiB |        13 | `int[] ← (GC root)`                                     |
|  56.5% | 93.7 KiB |         6 | `int[] ←.entries– java.util.zip.ZipFile$Source`         |
|   6.9% | 11.4 KiB |         2 | `int[] ←.table– java.util.zip.ZipFile$Source`           |
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

|    % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                             |
| ---: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.5% | 11.4 KiB |         4 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile`                                                                                                                                                                 |
| 0.5% |    712 B |         5 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[30]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`                                |
| 0.5% |    712 B |         5 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[30]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                                                |
| 0.1% |    138 B |         1 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| 0.1% |    138 B |         1 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |

##### `java.time.zone.TzdbZoneRulesProvider`

|      % |    Size | Instances | Path                                                                                            |
| -----: | ------: | --------: | ----------------------------------------------------------------------------------------------- |
| 100.0% | 116 KiB |         1 | `java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider` |

##### `java.lang.invoke.MethodType`

|     % |    Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | ------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 98.8% | 104 KiB |       741 | `java.lang.invoke.MethodType ← (GC root)`                                                                                                                                                                                                                                                                                                                                  |
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
| 92.8% | 73.3 KiB |        50 | `java.lang.Module ← (GC root)`                                                                                                                                                    |
|  0.7% |    593 B |         1 | `java.lang.Module ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[9]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.nameToModule– java.lang.ModuleLayer` |
|  0.6% |    509 B |         1 | `java.lang.Module ←.value– java.util.HashMap$Node ←[16]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.nameToModule– java.lang.ModuleLayer`                               |
|  0.6% |    481 B |         1 | `java.lang.Module ←.value– java.util.HashMap$Node ←[41]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.nameToModule– java.lang.ModuleLayer`                               |
|  0.6% |    481 B |         1 | `java.lang.Module ←.value– java.util.HashMap$Node ←[118]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.nameToModule– java.lang.ModuleLayer`                              |

##### `java.util.ImmutableCollections$SetN`

|     % |     Size | Instances | Path                                                                                                                                                                                    |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 48.0% | 37.4 KiB |         1 | `java.util.ImmutableCollections$SetN ←(several paths)– sun.util.cldr.CLDRLocaleProviderAdapter ←(several paths)– class sun.util.locale.provider.LocaleProviderAdapter`                  |
| 14.1% | 10.9 KiB |         3 | `java.util.ImmutableCollections$SetN ←.exports– java.lang.module.ModuleDescriptor`                                                                                                      |
|  8.6% | 6.69 KiB |         3 | `java.util.ImmutableCollections$SetN ←.packages– java.lang.module.ModuleDescriptor`                                                                                                     |
|  1.3% | 1.01 KiB |         1 | `java.util.ImmutableCollections$SetN ←.mrefs– jdk.internal.module.SystemModuleFinders$SystemModuleFinder ←.finder– jdk.internal.module.ArchivedModuleGraph ←[2217]– java.lang.Object[]` |
|  1.3% | 1.01 KiB |         1 | `java.util.ImmutableCollections$SetN ←.modules– java.lang.module.Configuration`                                                                                                         |

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

|    % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.5% | 2.74 KiB |         5 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.1% |    426 B |         1 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[15]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm`                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.1% |    422 B |         1 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[1]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm` |
| 1.1% |    420 B |         1 | `java.lang.invoke.LambdaForm$Name[] ←[3]– java.lang.invoke.LambdaForm$Name[][] ←.INTERNED_ARGUMENTS– class java.lang.invoke.LambdaForm`                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.1% |    406 B |         1 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←[0]– java.lang.invoke.LambdaFormEditor$Transform[] ←.transformCache– java.lang.invoke.LambdaForm`                                                                                                       |

##### `scala.math.BigInt[]`

|     % |   Size | Instances | Path                                                                                                                                                     |
| ----: | -----: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 50.0% | 16 KiB |         1 | `scala.math.BigInt[] ←.cache– class scala.math.BigInt$ ←[191]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader` |
| 50.0% | 16 KiB |         1 | `scala.math.BigInt[] ←.cache– class scala.math.BigInt$ ←[171]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader` |

##### `java.lang.String[]`

|     % |     Size | Instances | Path                                                                                                                                                                                                             |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 42.9% | 11.6 KiB |         1 | `java.lang.String[] ←.regions– class sun.util.calendar.ZoneInfoFile`                                                                                                                                             |
| 17.5% | 4.72 KiB |         1 | `java.lang.String[] ←.a– java.util.Arrays$ArrayList ←.regionIds– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider`                                                  |
|  2.9% |    805 B |         1 | `java.lang.String[] ← (GC root)`                                                                                                                                                                                 |
|  2.5% |    680 B |         1 | `java.lang.String[] ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[1]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.parentLocalesMap– class sun.util.cldr.CLDRBaseLocaleDataMetaInfo` |
|  1.3% |    352 B |         1 | `java.lang.String[] ←.value– java.util.HashMap$Node ←[0]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.parentLocalesMap– class sun.util.cldr.CLDRBaseLocaleDataMetaInfo`                                |

##### `jdk.internal.math.FDBigInteger[]`

|      % |     Size | Instances | Path                                                                                   |
| -----: | -------: | --------: | -------------------------------------------------------------------------------------- |
| 100.0% | 26.5 KiB |         1 | `jdk.internal.math.FDBigInteger[] ←.POW_5_CACHE– class jdk.internal.math.FDBigInteger` |

##### `java.lang.invoke.MethodHandle[]`

|     % |     Size | Instances | Path                                                                                                                                  |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| 79.3% | 13.7 KiB |        27 | `java.lang.invoke.MethodHandle[] ←.invokers– java.lang.invoke.Invokers ←.invokers– java.lang.invoke.MethodType`                       |
| 11.6% |    2 KiB |         1 | `java.lang.invoke.MethodHandle[] ←.ARRAYS– class java.lang.invoke.MethodHandleImpl`                                                   |
|  1.5% |    264 B |         1 | `java.lang.invoke.MethodHandle[] ←.IDENTITY_MHS– class java.lang.invoke.MethodHandles`                                                |
|  0.6% |     98 B |         1 | `java.lang.invoke.MethodHandle[] ←[0]– java.lang.invoke.MethodHandle[][] ←.DOUBLE_MIXERS– class java.lang.invoke.StringConcatFactory` |
|  0.5% |     90 B |         1 | `java.lang.invoke.MethodHandle[] ←.PREPENDERS– class java.lang.invoke.StringConcatFactory`                                            |

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
| 84.4% |   12 KiB |       475 | `java.lang.Class[] ←.ptypes– java.lang.invoke.MethodType`                                            |
| 13.0% | 1.85 KiB |        94 | `java.lang.Class[] ← (GC root)`                                                                      |
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

|    % | Size | Instances | Path                                                                            |
| ---: | ---: | --------: | ------------------------------------------------------------------------------- |
| 0.4% |  8 B |         1 | `java.lang.Long ←[0]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `java.lang.Long ←[1]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `java.lang.Long ←[2]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `java.lang.Long ←[3]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |  8 B |         1 | `java.lang.Long ←[4]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |

##### `java.lang.Integer`

|    % | Size | Instances | Path                                                                                                                                                                                                                             |
| ---: | ---: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.4% |  4 B |         1 | `java.lang.Integer ←[5]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `java.lang.Integer ←[4]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `java.lang.Integer ←[3]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `java.lang.Integer ←[2]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer` |
| 0.4% |  4 B |         1 | `java.lang.Integer ←[1]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer` |

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

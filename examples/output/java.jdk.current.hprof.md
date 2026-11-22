# Heap snapshot

Held 13 MiB over 704,146 nodes and 787,752 edges.

| Category           |     % |     Size |   Nodes |
| ------------------ | ----: | -------: | ------: |
| Array              | 57.8% | 7.52 MiB | 131,181 |
| Number             | 29.3% | 3.82 MiB | 501,096 |
| Object             | 10.1% | 1.32 MiB |  45,374 |
| String             |  2.4% |  322 KiB |  23,581 |
| Object shape       |  0.3% | 45.3 KiB |   2,819 |
| Big number         | <0.1% | 2.52 KiB |      92 |
| Regular expression | <0.1% |    333 B |       3 |

`B ←(several paths)– A` means `A` retains `B` only through other nodes, and `(several C paths)` means every path passes through an instance of `C`, though no single instance retains `B`.

## Largest constructors

### Self size

Constructors with the most instance bytes, excluding referenced nodes.

|     % |     Size | Instances | Constructor                                     |
| ----: | -------: | --------: | ----------------------------------------------- |
| 29.3% | 3.82 MiB |   500,051 | `java.lang.Double`                              |
| 29.3% | 3.82 MiB |   100,010 | `java.lang.Double[]`                            |
| 12.1% | 1.57 MiB |    24,314 | `byte[]`                                        |
| 10.5% | 1.36 MiB |     2,157 | `java.lang.Object[]`                            |
|  2.9% |  393 KiB |     5,826 | `java.util.LinkedHashMap`                       |
|  2.4% |  322 KiB |    23,581 | `java.lang.String`                              |
|  2.1% |  280 KiB |    10,233 | `java.util.HashMap$Node`                        |
|  1.7% |  227 KiB |     1,776 | `int[]`                                         |
|  1.4% |  181 KiB |     6,631 | `java.util.concurrent.ConcurrentHashMap$Node`   |
|  1.3% |  180 KiB |       420 | `java.util.HashMap$Node[]`                      |
|  0.9% |  122 KiB |        97 | `java.util.concurrent.ConcurrentHashMap$Node[]` |
|  0.4% | 56.8 KiB |     1,323 | `java.util.LinkedHashMap$Entry`                 |
|  0.4% | 51.3 KiB |       224 | `char[]`                                        |
|  0.3% | 45.3 KiB |     2,819 | `java.lang.Class`                               |
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
| 29.3% | 3.82 MiB |   100,010 | `java.lang.Double[]`                            |
| 12.1% | 1.57 MiB |    24,314 | `byte[]`                                        |
| 10.5% | 1.36 MiB |     2,157 | `java.lang.Object[]`                            |
|  1.7% |  227 KiB |     1,776 | `int[]`                                         |
|  1.3% |  180 KiB |       420 | `java.util.HashMap$Node[]`                      |
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
| <0.1% |  6.5 KiB |        13 | `java.util.concurrent.ForkJoinTask[]`           |
| <0.1% | 2.77 KiB |         2 | `java.time.LocalDateTime[]`                     |
| <0.1% |  2.7 KiB |         1 | `byte[][]`                                      |
| <0.1% | 2.66 KiB |         1 | `jdk.internal.math.FDBigInteger[]`              |
| <0.1% | 2.42 KiB |        10 | `java.lang.invoke.MemberName[]`                 |

##### Number

|     % |     Size | Instances | Constructor         |
| ----: | -------: | --------: | ------------------- |
| 29.3% | 3.82 MiB |   500,051 | `java.lang.Double`  |
| <0.1% |    2 KiB |       256 | `java.lang.Long`    |
| <0.1% | 1.08 KiB |       276 | `java.lang.Integer` |
| <0.1% |    512 B |       256 | `java.lang.Short`   |
| <0.1% |    256 B |       256 | `java.lang.Byte`    |
| <0.1% |      4 B |         1 | `java.lang.Float`   |

##### Object

|    % |     Size | Instances | Constructor                                       |
| ---: | -------: | --------: | ------------------------------------------------- |
| 2.9% |  393 KiB |     5,826 | `java.util.LinkedHashMap`                         |
| 2.1% |  280 KiB |    10,233 | `java.util.HashMap$Node`                          |
| 1.4% |  181 KiB |     6,631 | `java.util.concurrent.ConcurrentHashMap$Node`     |
| 0.4% | 56.8 KiB |     1,323 | `java.util.LinkedHashMap$Entry`                   |
| 0.3% | 45.2 KiB |     5,786 | `java.util.jar.Attributes`                        |
| 0.3% | 36.4 KiB |       848 | `java.lang.invoke.MemberName`                     |
| 0.3% |   36 KiB |       767 | `java.lang.invoke.MethodType`                     |
| 0.2% |   28 KiB |       796 | `jdk.internal.util.WeakReferenceKey`              |
| 0.1% | 18.1 KiB |       386 | `java.util.HashMap`                               |
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
| 2.4% | 322 KiB |    23,581 | `java.lang.String` |

#### Retainer paths

Retainer paths with the largest contribution to each constructor's self size.

##### `java.lang.Double`

|    % |    Size |  Nodes | Path                                                                    |
| ---: | ------: | -----: | ----------------------------------------------------------------------- |
| 5.6% | 219 KiB | 28,045 | `java.lang.Double ←[4]– java.lang.Double[] ←(several paths)– (GC root)` |
| 5.6% | 219 KiB | 28,045 | `java.lang.Double ←[3]– java.lang.Double[] ←(several paths)– (GC root)` |
| 5.6% | 219 KiB | 28,045 | `java.lang.Double ←[2]– java.lang.Double[] ←(several paths)– (GC root)` |
| 5.6% | 219 KiB | 28,045 | `java.lang.Double ←[1]– java.lang.Double[] ←(several paths)– (GC root)` |
| 5.6% | 219 KiB | 28,045 | `java.lang.Double ←[0]– java.lang.Double[] ←(several paths)– (GC root)` |

##### `java.lang.Double[]`

|     % |     Size |  Nodes | Path                                                                                 |
| ----: | -------: | -----: | ------------------------------------------------------------------------------------ |
| 28.0% | 1.07 MiB | 28,045 | `java.lang.Double[] ←(several paths)– (GC root)`                                     |
| <0.1% |    240 B |      6 | `java.lang.Double[] ← (GC root)`                                                     |
| <0.1% |     40 B |      1 | `java.lang.Double[] ←[39101]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% |     40 B |      1 | `java.lang.Double[] ←[39100]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% |     40 B |      1 | `java.lang.Double[] ←[39099]– java.lang.Object[] ←.elementData– java.util.ArrayList` |

##### `byte[]`

|     % |     Size | Nodes | Path                                                                                                                                                                                                                                    |
| ----: | -------: | ----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 44.7% |  719 KiB |    10 | `byte[] ←.cen– java.util.zip.ZipFile$Source ←(several paths)– (GC root)`                                                                                                                                                                |
| 13.3% |  214 KiB | 8,756 | `byte[] ←.value– java.lang.String ←(several paths)– (GC root)`                                                                                                                                                                          |
|  2.2% | 35.2 KiB |   976 | `byte[] ← (GC root)`                                                                                                                                                                                                                    |
|  1.9% | 31.1 KiB |   116 | `byte[] ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider` |
|  1.2% | 18.7 KiB |   291 | `byte[] ←.value– java.lang.String ←.methodDescriptor– java.lang.invoke.MethodType ←(several paths)– (GC root)`                                                                                                                          |

##### `java.lang.Object[]`

|     % |     Size | Nodes | Path                                                                                                                                                                             |
| ----: | -------: | ----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 60.1% |  839 KiB |     3 | `java.lang.Object[] ←.elementData– java.util.ArrayList`                                                                                                                          |
|  6.4% | 89.6 KiB |    43 | `java.lang.Object[] ← (GC root)`                                                                                                                                                 |
|  3.2% |   44 KiB |     8 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←[2]– java.util.HashMap$Node[] ←.table– java.util.HashMap`                                |
|  3.2% |   44 KiB |     8 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[2]– java.util.HashMap$Node[] ←.table– java.util.HashMap` |
|  2.6% | 36.6 KiB |     6 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←[5]– java.util.HashMap$Node[] ←.table– java.util.HashMap`                                |

##### `java.util.LinkedHashMap`

|     % |  Size | Nodes | Path                                                                                                                                                                                                                                                                                                                      |
| ----: | ----: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  0.1% | 552 B |     8 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)`                                                                                                                              |
| <0.1% | 138 B |     2 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[44]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)`                                |
| <0.1% | 138 B |     2 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[43]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)`                                |
| <0.1% | 138 B |     2 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)`                                |
| <0.1% | 138 B |     2 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)` |

##### `java.lang.String`

|     % |     Size | Nodes | Path                                                                        |
| ----: | -------: | ----: | --------------------------------------------------------------------------- |
| 37.2% |  120 KiB | 8,768 | `java.lang.String ←(several paths)– (GC root)`                              |
|  4.2% | 13.4 KiB |   983 | `java.lang.String ← (GC root)`                                              |
|  2.6% | 8.26 KiB |   604 | `java.lang.String ←(several paths)– class java.time.zone.ZoneRulesProvider` |
|  2.4% | 7.72 KiB |   565 | `java.lang.String ←(several paths)– class sun.security.util.KnownOIDs`      |
|  1.5% | 4.94 KiB |   361 | `java.lang.String ←(several paths)– class sun.util.calendar.ZoneInfoFile`   |

##### `java.util.HashMap$Node`

|    % |     Size | Nodes | Path                                                                                                                                                                                                                                                                                                                |
| ---: | -------: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.6% | 1.61 KiB |    59 | `java.util.HashMap$Node ←[3]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.map– java.util.HashSet ←.reads– java.lang.Module ←(several paths)– (GC root)`                                                                                                                                                   |
| 0.3% |    840 B |    30 | `java.util.HashMap$Node ←[0]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.attributes– java.security.Provider$Service ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.serviceMap– sun.security.provider.Sun ←(several paths)– (GC root)` |
| 0.2% |    448 B |    16 | `java.util.HashMap$Node ←[7]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.map– java.util.HashSet ←.reads– java.lang.Module ←(several paths)– (GC root)`                                                                                                                                                   |
| 0.1% |    392 B |    14 | `java.util.HashMap$Node ←[0]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.exportedPackages– java.lang.Module ←(several paths)– (GC root)`                                                                                                                                                                 |
| 0.1% |    392 B |    14 | `java.util.HashMap$Node ←[6]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.map– java.util.HashSet ←.reads– java.lang.Module ←(several paths)– (GC root)`                                                                                                                                                   |

##### `int[]`

|     % |     Size | Nodes | Path                                                                        |
| ----: | -------: | ----: | --------------------------------------------------------------------------- |
| 42.8% | 97.3 KiB |    10 | `int[] ←.entries– java.util.zip.ZipFile$Source ←(several paths)– (GC root)` |
| 36.3% | 82.6 KiB |   717 | `int[] ← (GC root)`                                                         |
|  7.1% | 16.2 KiB |    10 | `int[] ←.table– java.util.zip.ZipFile$Source ←(several paths)– (GC root)`   |
|  1.8% | 4.13 KiB |     1 | `int[] ←.A– class java.lang.CharacterData00`                                |
|  1.0% | 2.36 KiB |     1 | `int[] ←.indices– class sun.util.calendar.ZoneInfoFile`                     |

##### `java.util.concurrent.ConcurrentHashMap$Node`

|     % |  Size | Nodes | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | ----: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  0.1% | 196 B |     7 | `java.util.concurrent.ConcurrentHashMap$Node ←[0]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain ←(several paths)– (GC root)`                                                                                                                                                                                                   |
| <0.1% |  56 B |     2 | `java.util.concurrent.ConcurrentHashMap$Node ←[12]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.perms– java.io.FilePermissionCollection ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[0]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain ←(several paths)– (GC root)` |
| <0.1% |  56 B |     2 | `java.util.concurrent.ConcurrentHashMap$Node ←[6]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.module.ServicesCatalog ←(several paths)– (GC root)`                                                                                                                                                                                                                                            |
| <0.1% |  56 B |     2 | `java.util.concurrent.ConcurrentHashMap$Node ←[12]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.module.ServicesCatalog ←(several paths)– (GC root)`                                                                                                                                                                                                                                           |
| <0.1% |  56 B |     2 | `java.util.concurrent.ConcurrentHashMap$Node ←[16]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.module.ServicesCatalog ←(several paths)– (GC root)`                                                                                                                                                                                                                                           |

##### `java.util.HashMap$Node[]`

|     % |     Size | Nodes | Path                                                                                                                                                                                                                                                                                                                                                               |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 35.6% |   64 KiB |     2 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)`                                                                                                                                                                        |
|  5.4% | 9.63 KiB |    50 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.exportedPackages– java.lang.Module ←(several paths)– (GC root)`                                                                                                                                                                                                                                             |
|  4.5% |    8 KiB |     1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←(several paths)– (GC root)`                                                                                                                                                                                                                                                                                  |
|  4.5% |    8 KiB |     1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.lookup– sun.text.resources.cldr.FormatData ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                                                                                   |
|  4.5% |    8 KiB |     1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.lookup– sun.text.resources.cldr.FormatData_en ←.referent– sun.util.resources.Bundles$BundleReference ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[17]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles` |

##### `java.util.concurrent.ConcurrentHashMap$Node[]`

|     % |   Size | Nodes | Path                                                                                                                                                                                                                                 |
| ----: | -----: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 13.2% | 16 KiB |     1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| 13.2% | 16 KiB |     1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– jdk.internal.loader.ClassLoaders$AppClassLoader ←(several paths)– (GC root)`                                       |
| 13.2% | 16 KiB |     1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←(several paths)– (GC root)`                                                                                                          |
|  6.6% |  8 KiB |     1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.parallelLockMap– java.net.URLClassLoader`                                                                                           |
|  6.6% |  8 KiB |     1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.name2enum– class sun.security.util.KnownOIDs`                                                                                       |

##### `java.util.LinkedHashMap$Entry`

|     % |     Size | Nodes | Path                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | -------: | ----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18.2% | 10.4 KiB |   241 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`                                |
| 18.2% | 10.4 KiB |   241 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                                                |
| 13.4% | 7.61 KiB |   177 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| 13.4% | 7.61 KiB |   177 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
|  5.5% | 3.14 KiB |    73 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)`                                                                                                                                     |

##### `char[]`

|     % |     Size | Nodes | Path                                                                                               |
| ----: | -------: | ----: | -------------------------------------------------------------------------------------------------- |
| 31.2% |   16 KiB |     1 | `char[] ←.cb– java.io.BufferedWriter ←.textOut– java.io.PrintStream ←(several paths)– (GC root)`   |
| 31.2% |   16 KiB |     1 | `char[] ←.cb– java.io.BufferedWriter ←.textOut– java.io.PrintStream ←.out– class java.lang.System` |
| 23.0% | 11.8 KiB |     1 | `char[] ←.Y– class java.lang.CharacterData00`                                                      |
|  7.8% |    4 KiB |     1 | `char[] ←.X– class java.lang.CharacterData00`                                                      |
|  4.0% | 2.06 KiB |     1 | `char[] ←.B– class java.lang.CharacterData00`                                                      |

##### `java.lang.Class`

|     % |     Size | Nodes | Path                                                                                                                                                               |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 74.0% | 33.5 KiB | 1,782 | `class scala.collection.ArrayOps$$$Lambda+0x0000000501205800 ← (GC root)`                                                                                          |
|  1.8% |    844 B |    73 | `class scala.runtime.java8.JFunction1$mcZI$sp ←(several paths)– (GC root)`                                                                                         |
|  1.2% |    544 B |    57 | `class java.lang.invoke.LambdaForm$DMH+0x0000000501208400 ←.clazz– java.lang.invoke.MemberName ←.vmentry– java.lang.invoke.LambdaForm ←(several paths)– (GC root)` |
|  0.5% |    224 B |     1 | `class scala.package$ ←[35]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader ←(several paths)– (GC root)`                 |
|  0.5% |    224 B |     1 | `class scala.package$ ←[84]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader`                                             |

##### `java.util.jar.Attributes`

|     % | Size | Nodes | Path                                                                                                                                                                                                                                                                                       |
| ----: | ---: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  0.1% | 64 B |     8 | `java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)`                                                                                                                              |
| <0.1% | 16 B |     2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[44]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)`                                |
| <0.1% | 16 B |     2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[43]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)`                                |
| <0.1% | 16 B |     2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)`                                |
| <0.1% | 16 B |     2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)` |

##### `java.lang.ref.SoftReference[]`

|     % |     Size | Nodes | Path                                                                                                                                             |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 60.1% | 26.4 KiB |   130 | `java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)`                                       |
| 28.2% | 12.4 KiB |    61 | `java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType ←(several paths)– (GC root)`   |
|  6.9% | 3.05 KiB |   130 | `java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)`                                     |
|  3.3% | 1.43 KiB |    61 | `java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType ←(several paths)– (GC root)` |
|  1.4% |    624 B |     3 | `java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType`                               |

##### `java.lang.invoke.MemberName`

|     % |     Size | Nodes | Path                                                                                                                                                                                                                                     |
| ----: | -------: | ----: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14.4% | 5.24 KiB |   122 | `java.lang.invoke.MemberName ←.vmentry– java.lang.invoke.LambdaForm ←(several paths)– (GC root)`                                                                                                                                         |
|  7.0% | 2.54 KiB |    59 | `java.lang.invoke.MemberName ←(several paths)– (GC root)`                                                                                                                                                                                |
|  2.8% | 1.03 KiB |    24 | `java.lang.invoke.MemberName ←.member– java.lang.invoke.LambdaForm$NamedFunction ←.function– java.lang.invoke.LambdaForm$Name ←[5]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←(several paths)– (GC root)` |
|  2.8% | 1.03 KiB |    24 | `java.lang.invoke.MemberName ← (GC root)`                                                                                                                                                                                                |
|  2.6% |    968 B |    22 | `java.lang.invoke.MemberName ←.member– java.lang.invoke.LambdaForm$NamedFunction ←.function– java.lang.invoke.LambdaForm$Name ←[6]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←(several paths)– (GC root)` |

##### `java.lang.invoke.MethodType`

|     % |     Size | Nodes | Path                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | -------: | ----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 92.6% | 33.3 KiB |   710 | `java.lang.invoke.MethodType ←(several paths)– (GC root)`                                                                                                                                                                                                                                                                                                                  |
|  6.6% | 2.39 KiB |    51 | `java.lang.invoke.MethodType ← (GC root)`                                                                                                                                                                                                                                                                                                                                  |
|  0.1% |     48 B |     1 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[217]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
|  0.1% |     48 B |     1 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[414]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
|  0.1% |     48 B |     1 | `java.lang.invoke.MethodType ←.referent– jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[573]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |

##### `scala.math.BigInt[]`

|     % |   Size | Nodes | Path                                                                                                                                                                                 |
| ----: | -----: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 50.0% | 16 KiB |     1 | `scala.math.BigInt[] ←.cache– class scala.math.BigInt$ ←[191]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader`                             |
| 50.0% | 16 KiB |     1 | `scala.math.BigInt[] ←.cache– class scala.math.BigInt$ ←[171]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader ←(several paths)– (GC root)` |

##### `jdk.internal.util.WeakReferenceKey`

|    % |     Size | Nodes | Path                                                                                                                                                                                                                                                                                                                              |
| ---: | -------: | ----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.6% | 1.02 KiB |    29 | `jdk.internal.util.WeakReferenceKey ←(several paths)– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType`                                                                                                                                              |
| 0.1% |     36 B |     1 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[39]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| 0.1% |     36 B |     1 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[32]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| 0.1% |     36 B |     1 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[27]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
| 0.1% |     36 B |     1 | `jdk.internal.util.WeakReferenceKey ←.key– java.util.concurrent.ConcurrentHashMap$Node ←[24]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |

##### `java.lang.String[]`

|     % |     Size | Nodes | Path                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.6% | 4.72 KiB |     1 | `java.lang.String[] ←.regions– class sun.util.calendar.ZoneInfoFile`                                                                                                                                                                                                                                                                                                                                    |
| 24.6% | 4.72 KiB |     1 | `java.lang.String[] ←.a– java.util.Arrays$ArrayList ←.regionIds– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider`                                                                                                                                                                                                                                         |
|  5.8% | 1.12 KiB |    22 | `java.lang.String[] ←(several paths)– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.lookup– sun.text.resources.cldr.FormatData ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                                                                                   |
|  4.8% |    944 B |    18 | `java.lang.String[] ←(several paths)– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.lookup– sun.text.resources.cldr.FormatData_en ←.referent– sun.util.resources.Bundles$BundleReference ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[17]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles` |
|  3.5% |    680 B |     1 | `java.lang.String[] ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[1]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.parentLocalesMap– class sun.util.cldr.CLDRBaseLocaleDataMetaInfo`                                                                                                                                                                                        |

##### `java.util.HashMap`

|     % |     Size | Nodes | Path                                                                                                                                                                                                                                                 |
| ----: | -------: | ----: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15.5% | 2.81 KiB |    60 | `java.util.HashMap ←.map– java.util.HashSet ←.reads– java.lang.Module ←(several paths)– (GC root)`                                                                                                                                                   |
| 13.0% | 2.34 KiB |    50 | `java.util.HashMap ←.exportedPackages– java.lang.Module ←(several paths)– (GC root)`                                                                                                                                                                 |
|  7.8% | 1.41 KiB |    30 | `java.util.HashMap ←.attributes– java.security.Provider$Service ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.serviceMap– sun.security.provider.Sun ←(several paths)– (GC root)` |
|  2.6% |    480 B |    10 | `java.util.HashMap ← (GC root)`                                                                                                                                                                                                                      |
|  2.1% |    384 B |     8 | `java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)`                                                                                            |

##### `java.lang.invoke.MethodHandle[]`

|     % |     Size | Nodes | Path                                                                                                                                        |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 62.8% | 10.7 KiB |    21 | `java.lang.invoke.MethodHandle[] ←.invokers– java.lang.invoke.Invokers ←.invokers– java.lang.invoke.MethodType ←(several paths)– (GC root)` |
| 17.9% | 3.05 KiB |     6 | `java.lang.invoke.MethodHandle[] ←.invokers– java.lang.invoke.Invokers ←.invokers– java.lang.invoke.MethodType`                             |
| 11.8% |    2 KiB |     1 | `java.lang.invoke.MethodHandle[] ←.ARRAYS– class java.lang.invoke.MethodHandleImpl`                                                         |
|  1.9% |    336 B |     7 | `java.lang.invoke.MethodHandle[] ←.transformHelpers– java.lang.invoke.BoundMethodHandle$SpeciesData ←(several paths)– (GC root)`            |
|  0.5% |     80 B |     1 | `java.lang.invoke.MethodHandle[] ←.ZERO_MHS– class java.lang.invoke.MethodHandles`                                                          |

##### `long[]`

|     % |     Size | Nodes | Path                                                                                                         |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------------------ |
| 61.9% | 9.64 KiB |     1 | `long[] ←.g– class jdk.internal.math.MathUtils`                                                              |
| 18.1% | 2.82 KiB |     1 | `long[] ←(several paths)– (GC root)`                                                                         |
|  8.9% | 1.38 KiB |     1 | `long[] ←.savingsInstantTransitions– java.time.zone.ZoneRules ←(several paths)– (GC root)`                   |
|  1.9% |    296 B |     1 | `long[] ←.bitsPerDigit– class java.math.BigInteger`                                                          |
|  1.6% |    256 B |     1 | `long[] ←[3]– java.lang.Object[] ←.backtrace– java.lang.OutOfMemoryError ←[1]– java.lang.OutOfMemoryError[]` |

##### `java.lang.invoke.LambdaForm$Name`

|     % |     Size | Nodes | Path                                                                                                                                         |
| ----: | -------: | ----: | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 13.0% | 1.99 KiB |    60 | `java.lang.invoke.LambdaForm$Name ←[4]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←(several paths)– (GC root)` |
| 12.1% | 1.86 KiB |    56 | `java.lang.invoke.LambdaForm$Name ←[5]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←(several paths)– (GC root)` |
| 11.4% | 1.76 KiB |    53 | `java.lang.invoke.LambdaForm$Name ←[3]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←(several paths)– (GC root)` |
|  8.6% | 1.33 KiB |    40 | `java.lang.invoke.LambdaForm$Name ←[6]– java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←(several paths)– (GC root)` |
|  7.1% |  1.1 KiB |    33 | `java.lang.invoke.LambdaForm$Name ←(several paths)– (GC root)`                                                                               |

##### `java.lang.Class[]`

|     % |     Size | Nodes | Path                                                                                                 |
| ----: | -------: | ----: | ---------------------------------------------------------------------------------------------------- |
| 82.6% | 11.8 KiB |   478 | `java.lang.Class[] ←.ptypes– java.lang.invoke.MethodType ←(several paths)– (GC root)`                |
| 13.0% | 1.86 KiB |    96 | `java.lang.Class[] ←(several paths)– (GC root)`                                                      |
|  3.6% |    536 B |    38 | `java.lang.Class[] ←.ptypes– java.lang.invoke.MethodType`                                            |
|  0.5% |     72 B |    10 | `java.lang.Class[] ← (GC root)`                                                                      |
|  0.2% |     24 B |     1 | `java.lang.Class[] ←.STATICALLY_INVOCABLE_PACKAGES– class java.lang.invoke.InvokerBytecodeGenerator` |

##### `sun.security.util.KnownOIDs`

|    % | Size | Nodes | Path                                                                                     |
| ---: | ---: | ----: | ---------------------------------------------------------------------------------------- |
| 0.4% | 40 B |     1 | `sun.security.util.KnownOIDs ←.HoldInstructionCode– class sun.security.util.KnownOIDs`   |
| 0.4% | 40 B |     1 | `sun.security.util.KnownOIDs ←.ReasonCode– class sun.security.util.KnownOIDs`            |
| 0.4% | 40 B |     1 | `sun.security.util.KnownOIDs ←.CRLNumber– class sun.security.util.KnownOIDs`             |
| 0.4% | 40 B |     1 | `sun.security.util.KnownOIDs ←.BasicConstraints– class sun.security.util.KnownOIDs`      |
| 0.4% | 40 B |     1 | `sun.security.util.KnownOIDs ←.IssuerAlternativeName– class sun.security.util.KnownOIDs` |

##### `java.util.concurrent.ConcurrentHashMap`

|    % |  Size | Nodes | Path                                                                                                                                                                                                                                                                                                                                                      |
| ---: | ----: | ----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.7% | 588 B |     7 | `java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain ←(several paths)– (GC root)`                                                                                                                                                                                                  |
| 5.7% | 588 B |     7 | `java.util.concurrent.ConcurrentHashMap ←.perms– java.io.FilePermissionCollection ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[0]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.permsMap– java.security.Permissions ←.permissions– java.security.ProtectionDomain ←(several paths)– (GC root)` |
| 2.5% | 252 B |     3 | `java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.module.ServicesCatalog ←(several paths)– (GC root)`                                                                                                                                                                                                                                           |
| 0.8% |  84 B |     1 | `java.util.concurrent.ConcurrentHashMap ←.cache– java.lang.invoke.BoundMethodHandle$Specializer ←(several paths)– (GC root)`                                                                                                                                                                                                                              |
| 0.8% |  84 B |     1 | `java.util.concurrent.ConcurrentHashMap ←.map– java.util.Properties ←.props– class java.lang.System`                                                                                                                                                                                                                                                      |

##### `java.lang.reflect.Field`

|      % |     Size | Nodes | Path                                  |
| -----: | -------: | ----: | ------------------------------------- |
| 100.0% | 9.67 KiB |   101 | `java.lang.reflect.Field ← (GC root)` |

##### `java.lang.invoke.DirectMethodHandle`

|     % |     Size | Nodes | Path                                                                                                                                                                                                                          |
| ----: | -------: | ----: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 23.0% | 2.06 KiB |    49 | `java.lang.invoke.DirectMethodHandle ←(several paths)– (GC root)`                                                                                                                                                             |
|  2.3% |    215 B |     5 | `java.lang.invoke.DirectMethodHandle ← (GC root)`                                                                                                                                                                             |
|  1.4% |    129 B |     3 | `java.lang.invoke.DirectMethodHandle ←.e0– java.util.ImmutableCollections$List12 ←.factories– java.lang.invoke.BoundMethodHandle$SpeciesData ←(several paths)– (GC root)`                                                     |
|  0.9% |     86 B |     2 | `java.lang.invoke.DirectMethodHandle ←.target– java.lang.invoke.MethodHandleImpl$AsVarargsCollector ←[4]– java.lang.Object[] ←.<resolved_references>– class scala.collection.mutable.ArrayBuffer ←(several paths)– (GC root)` |
|  0.9% |     86 B |     2 | `java.lang.invoke.DirectMethodHandle ←[3]– java.lang.Object[] ←.<resolved_references>– class scala.collection.mutable.ArrayBuffer ←(several paths)– (GC root)`                                                                |

##### `java.lang.module.ModuleDescriptor$Exports`

|    % |  Size | Nodes | Path                                                                                                                                                                                          |
| ---: | ----: | ----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.6% | 768 B |    32 | `java.lang.module.ModuleDescriptor$Exports ←.e0– java.util.ImmutableCollections$Set12 ←.exports– java.lang.module.ModuleDescriptor ←(several paths)– (GC root)`                               |
| 4.8% | 432 B |    18 | `java.lang.module.ModuleDescriptor$Exports ←[3]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$SetN ←.exports– java.lang.module.ModuleDescriptor ←(several paths)– (GC root)` |
| 4.0% | 360 B |    15 | `java.lang.module.ModuleDescriptor$Exports ←[5]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$SetN ←.exports– java.lang.module.ModuleDescriptor ←(several paths)– (GC root)` |
| 3.5% | 312 B |    13 | `java.lang.module.ModuleDescriptor$Exports ←[1]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$SetN ←.exports– java.lang.module.ModuleDescriptor ←(several paths)– (GC root)` |
| 3.2% | 288 B |    12 | `java.lang.module.ModuleDescriptor$Exports ←[2]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$SetN ←.exports– java.lang.module.ModuleDescriptor ←(several paths)– (GC root)` |

##### `java.lang.invoke.LambdaForm`

|     % |     Size | Nodes | Path                                                                                                                                                                                                                                                                                       |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 75.3% | 6.43 KiB |   122 | `java.lang.invoke.LambdaForm ←(several paths)– (GC root)`                                                                                                                                                                                                                                  |
|  8.6% |    756 B |    14 | `java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[15]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)`                                                                                                      |
|  3.7% |    324 B |     6 | `java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[10]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)`                                                                                                      |
|  1.9% |    162 B |     3 | `java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)`                                                                                                       |
|  1.9% |    162 B |     3 | `java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)` |

##### `java.net.URI`

|     % |     Size | Nodes | Path                                                                                                         |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------------------ |
| 94.0% | 7.88 KiB |    63 | `java.net.URI ←(several paths)– (GC root)`                                                                   |
|  1.5% |    128 B |     1 | `java.net.URI ←.benchmarkMetadataUri– class org.renaissance.core.BenchmarkSuite ←(several paths)– (GC root)` |
|  1.5% |    128 B |     1 | `java.net.URI ←.moduleMetadataUri– class org.renaissance.core.BenchmarkSuite ←(several paths)– (GC root)`    |
|  1.5% |    128 B |     1 | `java.net.URI ←.moduleMetadataUri– class org.renaissance.core.Launcher`                                      |
|  1.5% |    128 B |     1 | `java.net.URI ←.location– jdk.internal.module.ModuleReferenceImpl ←(several paths)– (GC root)`               |

##### `java.lang.invoke.LambdaForm$Name[]`

|     % |     Size | Nodes | Path                                                                                                                                                                                                                                                                                                                                   |
| ----: | -------: | ----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 72.8% | 5.96 KiB |   122 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←(several paths)– (GC root)`                                                                                                                                                                                                                                  |
|  6.9% |    576 B |    14 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[15]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)`                                                                                                      |
|  4.6% |    384 B |     6 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[10]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)`                                                                                                      |
|  1.4% |    120 B |     3 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)` |
|  1.0% |     88 B |     3 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)`                                                                                                       |

##### `java.lang.invoke.MethodTypeForm`

|     % |     Size | Nodes | Path                                                                                              |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------- |
| 63.3% |  5.1 KiB |   145 | `java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)`                                     |
| 33.6% | 2.71 KiB |    77 | `java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType ←(several paths)– (GC root)` |
|  3.1% |    252 B |     7 | `java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType`                             |

##### `java.nio.ByteBuffer[]`

|      % |  Size | Nodes | Path                                                                                                                                                                                                                                                  |
| -----: | ----: | ----: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 8 KiB |     1 | `java.nio.ByteBuffer[] ←.buffers– sun.nio.ch.Util$BufferCache ←.value– java.lang.ThreadLocal$ThreadLocalMap$Entry ←[12]– java.lang.ThreadLocal$ThreadLocalMap$Entry[] ←.table– java.lang.ThreadLocal$ThreadLocalMap ←.threadLocals– java.lang.Thread` |

##### `java.lang.ref.SoftReference`

|     % |     Size | Nodes | Path                                                                                                                                           |
| ----: | -------: | ----: | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 20.1% | 1.56 KiB |    40 | `java.lang.ref.SoftReference ←[2]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)`   |
| 13.1% | 1.02 KiB |    26 | `java.lang.ref.SoftReference ←[1]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)`   |
| 11.6% |    920 B |    23 | `java.lang.ref.SoftReference ←[0]– java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)` |
| 11.6% |    920 B |    23 | `java.lang.ref.SoftReference ← (GC root)`                                                                                                      |
|  7.0% |    560 B |    14 | `java.lang.ref.SoftReference ←[15]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)`  |

##### `java.lang.invoke.DirectMethodHandle$Constructor`

|    % |  Size | Nodes | Path                                                                                                                                                                        |
| ---: | ----: | ----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.0% | 531 B |     9 | `java.lang.invoke.DirectMethodHandle$Constructor ← (GC root)`                                                                                                               |
| 3.9% | 295 B |     5 | `java.lang.invoke.DirectMethodHandle$Constructor ←(several paths)– (GC root)`                                                                                               |
| 1.6% | 118 B |     2 | `java.lang.invoke.DirectMethodHandle$Constructor ←[15]– java.lang.Object[] ←.<resolved_references>– class scala.collection.mutable.ArrayBuffer ←(several paths)– (GC root)` |
| 0.8% |  59 B |     1 | `java.lang.invoke.DirectMethodHandle$Constructor ←[4]– java.lang.Object[] ←.<resolved_references>– class java.lang.WeakPairMap`                                             |
| 0.8% |  59 B |     1 | `java.lang.invoke.DirectMethodHandle$Constructor ←[9]– java.lang.Object[] ←.<resolved_references>– class scopt.Validation$ ←(several paths)– (GC root)`                     |

##### `java.util.concurrent.ForkJoinTask[]`

|      % |    Size | Nodes | Path                                                                                       |
| -----: | ------: | ----: | ------------------------------------------------------------------------------------------ |
| 100.0% | 6.5 KiB |    13 | `java.util.concurrent.ForkJoinTask[] ←.array– java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `java.time.LocalDateTime[]`

|      % |     Size | Nodes | Path                                                                                                        |
| -----: | -------: | ----: | ----------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.77 KiB |     1 | `java.time.LocalDateTime[] ←.savingsLocalTransitions– java.time.zone.ZoneRules ←(several paths)– (GC root)` |
|   0.0% |      0 B |     1 | `java.time.LocalDateTime[] ←.EMPTY_LDT_ARRAY– class java.time.zone.ZoneRules`                               |

##### `byte[][]`

|      % |    Size | Nodes | Path                                                         |
| -----: | ------: | ----: | ------------------------------------------------------------ |
| 100.0% | 2.7 KiB |     1 | `byte[][] ←.ruleArray– class sun.util.calendar.ZoneInfoFile` |

##### `jdk.internal.math.FDBigInteger[]`

|      % |     Size | Nodes | Path                                                                                   |
| -----: | -------: | ----: | -------------------------------------------------------------------------------------- |
| 100.0% | 2.66 KiB |     1 | `jdk.internal.math.FDBigInteger[] ←.POW_5_CACHE– class jdk.internal.math.FDBigInteger` |

##### `java.lang.invoke.MemberName[]`

|     % |     Size | Nodes | Path                                                                                                                                                  |
| ----: | -------: | ----: | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 80.0% | 1.94 KiB |     8 | `java.lang.invoke.MemberName[] ←.memberName_table– java.lang.invoke.VarForm ←(several paths)– (GC root)`                                              |
| 10.0% |    248 B |     1 | `java.lang.invoke.MemberName[] ←.memberName_table– java.lang.invoke.VarForm ←.FORM– class java.lang.invoke.VarHandleReferences$FieldInstanceReadOnly` |
| 10.0% |    248 B |     1 | `java.lang.invoke.MemberName[] ←.memberName_table– java.lang.invoke.VarForm ←.FORM– class java.lang.invoke.VarHandleBooleans$FieldInstanceReadOnly`   |

##### `java.lang.Long`

|    % |  Size | Nodes | Path                                                                            |
| ---: | ----: | ----: | ------------------------------------------------------------------------------- |
| 5.1% | 104 B |    13 | `java.lang.Long ←(several paths)– (GC root)`                                    |
| 0.4% |   8 B |     1 | `java.lang.Long ←[0]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |   8 B |     1 | `java.lang.Long ←[1]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |   8 B |     1 | `java.lang.Long ←[2]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |   8 B |     1 | `java.lang.Long ←[3]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |

##### `java.lang.Integer`

|    % | Size | Nodes | Path                                                                                                                                                                                                                                                         |
| ---: | ---: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2.9% | 32 B |     8 | `java.lang.Integer ←(several paths)– (GC root)`                                                                                                                                                                                                              |
| 0.4% |  4 B |     1 | `java.lang.Integer ←[5]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer ←(several paths)– (GC root)` |
| 0.4% |  4 B |     1 | `java.lang.Integer ←[4]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer ←(several paths)– (GC root)` |
| 0.4% |  4 B |     1 | `java.lang.Integer ←[3]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer ←(several paths)– (GC root)` |
| 0.4% |  4 B |     1 | `java.lang.Integer ←[2]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer ←(several paths)– (GC root)` |

##### `java.lang.Short`

|    % | Size | Nodes | Path                                                                  |
| ---: | ---: | ----: | --------------------------------------------------------------------- |
| 0.4% |  2 B |     1 | `java.lang.Short ←[0]– java.lang.Short[] ←[2208]– java.lang.Object[]` |
| 0.4% |  2 B |     1 | `java.lang.Short ←[1]– java.lang.Short[] ←[2208]– java.lang.Object[]` |
| 0.4% |  2 B |     1 | `java.lang.Short ←[2]– java.lang.Short[] ←[2208]– java.lang.Object[]` |
| 0.4% |  2 B |     1 | `java.lang.Short ←[3]– java.lang.Short[] ←[2208]– java.lang.Object[]` |
| 0.4% |  2 B |     1 | `java.lang.Short ←[4]– java.lang.Short[] ←[2208]– java.lang.Object[]` |

##### `java.lang.Byte`

|    % | Size | Nodes | Path                                                                |
| ---: | ---: | ----: | ------------------------------------------------------------------- |
| 0.4% |  1 B |     1 | `java.lang.Byte ←[0]– java.lang.Byte[] ←[2207]– java.lang.Object[]` |
| 0.4% |  1 B |     1 | `java.lang.Byte ←[1]– java.lang.Byte[] ←[2207]– java.lang.Object[]` |
| 0.4% |  1 B |     1 | `java.lang.Byte ←[2]– java.lang.Byte[] ←[2207]– java.lang.Object[]` |
| 0.4% |  1 B |     1 | `java.lang.Byte ←[3]– java.lang.Byte[] ←[2207]– java.lang.Object[]` |
| 0.4% |  1 B |     1 | `java.lang.Byte ←[4]– java.lang.Byte[] ←[2207]– java.lang.Object[]` |

##### `java.lang.Float`

|      % | Size | Nodes | Path                                                          |
| -----: | ---: | ----: | ------------------------------------------------------------- |
| 100.0% |  4 B |     1 | `java.lang.Float ←.FLOAT_ZERO– class sun.invoke.util.Wrapper` |

### Retained size

Constructors with the most instance bytes, including nodes only the instances keep alive.

|     % |      Size | Instances | Constructor                                     |
| ----: | --------: | --------: | ----------------------------------------------- |
| 71.5% |  9.31 MiB |     2,157 | `java.lang.Object[]`                            |
| 67.0% |  8.72 MiB |       151 | `java.util.ArrayList`                           |
| 58.6% |  7.63 MiB |   100,010 | `java.lang.Double[]`                            |
| 29.3% |  3.82 MiB |   500,051 | `java.lang.Double`                              |
| 12.3% |  1.61 MiB |       420 | `java.util.HashMap$Node[]`                      |
| 12.3% |   1.6 MiB |       386 | `java.util.HashMap`                             |
| 11.8% |  1.54 MiB |    24,314 | `byte[]`                                        |
| 11.4% |  1.49 MiB |    10,233 | `java.util.HashMap$Node`                        |
|  9.5% |  1.24 MiB |     2,819 | `java.lang.Class`                               |
|  7.6% | 1,020 KiB |       199 | `java.lang.ref.SoftReference`                   |
|  7.5% | 1,005 KiB |        10 | `java.util.jar.JarFile`                         |
|  7.5% | 1,002 KiB |         8 | `java.util.jar.Manifest`                        |
|  7.4% |   983 KiB |    23,581 | `java.lang.String`                              |
|  6.3% |   834 KiB |        10 | `java.util.zip.ZipFile$Source`                  |
|  4.8% |   634 KiB |       122 | `java.util.concurrent.ConcurrentHashMap`        |
|  4.7% |   626 KiB |        97 | `java.util.concurrent.ConcurrentHashMap$Node[]` |
|  4.1% |   549 KiB |     5,826 | `java.util.LinkedHashMap`                       |
|  3.8% |   506 KiB |     6,631 | `java.util.concurrent.ConcurrentHashMap$Node`   |
|  3.4% |   454 KiB |     5,786 | `java.util.jar.Attributes`                      |
|  1.2% |   160 KiB |       767 | `java.lang.invoke.MethodType`                   |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Array

|     % |     Size | Instances | Constructor                                     |
| ----: | -------: | --------: | ----------------------------------------------- |
| 71.5% | 9.31 MiB |     2,157 | `java.lang.Object[]`                            |
| 58.6% | 7.63 MiB |   100,010 | `java.lang.Double[]`                            |
| 12.3% | 1.61 MiB |       420 | `java.util.HashMap$Node[]`                      |
| 11.8% | 1.54 MiB |    24,314 | `byte[]`                                        |
|  4.7% |  626 KiB |        97 | `java.util.concurrent.ConcurrentHashMap$Node[]` |
|  1.2% |  157 KiB |     1,776 | `int[]`                                         |
|  0.7% | 89.4 KiB |         1 | `byte[][]`                                      |
|  0.4% |   58 KiB |       388 | `java.lang.ref.SoftReference[]`                 |
|  0.4% | 51.3 KiB |       224 | `char[]`                                        |
|  0.3% | 37.9 KiB |       167 | `java.lang.invoke.LambdaForm$Name[]`            |
|  0.2% |   32 KiB |         2 | `scala.math.BigInt[]`                           |
|  0.2% |   27 KiB |       447 | `java.lang.String[]`                            |
|  0.2% | 26.5 KiB |         1 | `jdk.internal.math.FDBigInteger[]`              |
|  0.1% | 17.3 KiB |        54 | `java.lang.invoke.MethodHandle[]`               |
|  0.1% | 15.6 KiB |        17 | `long[]`                                        |
|  0.1% | 14.3 KiB |       629 | `java.lang.Class[]`                             |
|  0.1% | 9.69 KiB |         2 | `java.time.LocalDateTime[]`                     |
|  0.1% | 8.47 KiB |         1 | `java.lang.ThreadLocal$ThreadLocalMap$Entry[]`  |
|  0.1% |    8 KiB |         1 | `java.nio.ByteBuffer[]`                         |
| <0.1% |  6.5 KiB |        13 | `java.util.concurrent.ForkJoinTask[]`           |

##### Number

|     % |     Size | Instances | Constructor         |
| ----: | -------: | --------: | ------------------- |
| 29.3% | 3.82 MiB |   500,051 | `java.lang.Double`  |
| <0.1% |    2 KiB |       256 | `java.lang.Long`    |
| <0.1% | 1.08 KiB |       276 | `java.lang.Integer` |
| <0.1% |    512 B |       256 | `java.lang.Short`   |
| <0.1% |    256 B |       256 | `java.lang.Byte`    |
| <0.1% |      4 B |         1 | `java.lang.Float`   |

##### Object

|     % |      Size | Instances | Constructor                                   |
| ----: | --------: | --------: | --------------------------------------------- |
| 67.0% |  8.72 MiB |       151 | `java.util.ArrayList`                         |
| 12.3% |   1.6 MiB |       386 | `java.util.HashMap`                           |
| 11.4% |  1.49 MiB |    10,233 | `java.util.HashMap$Node`                      |
|  7.6% | 1,020 KiB |       199 | `java.lang.ref.SoftReference`                 |
|  7.5% | 1,005 KiB |        10 | `java.util.jar.JarFile`                       |
|  7.5% | 1,002 KiB |         8 | `java.util.jar.Manifest`                      |
|  6.3% |   834 KiB |        10 | `java.util.zip.ZipFile$Source`                |
|  4.8% |   634 KiB |       122 | `java.util.concurrent.ConcurrentHashMap`      |
|  4.1% |   549 KiB |     5,826 | `java.util.LinkedHashMap`                     |
|  3.8% |   506 KiB |     6,631 | `java.util.concurrent.ConcurrentHashMap$Node` |
|  3.4% |   454 KiB |     5,786 | `java.util.jar.Attributes`                    |
|  1.2% |   160 KiB |       767 | `java.lang.invoke.MethodType`                 |
|  1.2% |   159 KiB |         2 | `java.net.URLClassLoader`                     |
|  1.1% |   141 KiB |         2 | `org.renaissance.core.ModuleLoader`           |
|  1.0% |   139 KiB |        38 | `java.util.LinkedHashSet`                     |
|  1.0% |   135 KiB |     1,323 | `java.util.LinkedHashMap$Entry`               |
|  0.9% |   116 KiB |         1 | `java.time.zone.TzdbZoneRulesProvider`        |
|  0.7% |  93.7 KiB |        27 | `org.renaissance.core.BenchmarkDescriptor`    |
|  0.6% |    79 KiB |        72 | `java.lang.Module`                            |
|  0.6% |  77.8 KiB |       154 | `java.util.ImmutableCollections$SetN`         |

##### String

|    % |    Size | Instances | Constructor        |
| ---: | ------: | --------: | ------------------ |
| 7.4% | 983 KiB |    23,581 | `java.lang.String` |

#### Retainer paths

Retainer paths with the largest contribution to each constructor's retained size.

##### `java.lang.Object[]`

|     % |     Size |  Nodes | Path                                                                                                                                              |
| ----: | -------: | -----: | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 67.8% | 6.31 MiB |      3 | `java.lang.Object[] ←.elementData– java.util.ArrayList`                                                                                           |
| 23.0% | 2.14 MiB | 28,042 | `java.lang.Double[] ←(several java.lang.Object[] paths)– (GC root)`                                                                               |
|  1.8% |  174 KiB |  4,067 | `java.lang.String ←(several java.lang.Object[] paths)– (GC root)`                                                                                 |
|  1.3% |  124 KiB |     43 | `java.lang.Object[] ← (GC root)`                                                                                                                  |
|  0.5% |   44 KiB |      8 | `java.lang.Object[] ←.elementData– java.util.ArrayList ←.value– java.util.HashMap$Node ←[2]– java.util.HashMap$Node[] ←.table– java.util.HashMap` |

##### `java.util.ArrayList`

|     % |     Size |  Nodes | Path                                                                                                                                           |
| ----: | -------: | -----: | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 72.4% | 6.31 MiB |      5 | `java.util.ArrayList ← (GC root)`                                                                                                              |
| 24.0% | 2.09 MiB | 27,417 | `java.lang.Double[] ←(several java.util.ArrayList paths)– (GC root)`                                                                           |
|  0.5% | 44.2 KiB |      8 | `java.util.ArrayList ←.value– java.util.HashMap$Node ←[2]– java.util.HashMap$Node[] ←.table– java.util.HashMap`                                |
|  0.5% | 44.2 KiB |      8 | `java.util.ArrayList ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[2]– java.util.HashMap$Node[] ←.table– java.util.HashMap` |
|  0.5% | 43.9 KiB |      1 | `java.util.ArrayList ←.classes– java.net.URLClassLoader`                                                                                       |

##### `java.lang.Double[]`

|     % |     Size |  Nodes | Path                                                                                 |
| ----: | -------: | -----: | ------------------------------------------------------------------------------------ |
| 28.0% | 2.14 MiB | 28,045 | `java.lang.Double[] ←(several paths)– (GC root)`                                     |
| <0.1% |    480 B |      6 | `java.lang.Double[] ← (GC root)`                                                     |
| <0.1% |     80 B |      1 | `java.lang.Double[] ←[39101]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% |     80 B |      1 | `java.lang.Double[] ←[39100]– java.lang.Object[] ←.elementData– java.util.ArrayList` |
| <0.1% |     80 B |      1 | `java.lang.Double[] ←[39099]– java.lang.Object[] ←.elementData– java.util.ArrayList` |

##### `java.lang.Double`

|    % |    Size |  Nodes | Path                                                                    |
| ---: | ------: | -----: | ----------------------------------------------------------------------- |
| 5.6% | 219 KiB | 28,045 | `java.lang.Double ←[4]– java.lang.Double[] ←(several paths)– (GC root)` |
| 5.6% | 219 KiB | 28,045 | `java.lang.Double ←[3]– java.lang.Double[] ←(several paths)– (GC root)` |
| 5.6% | 219 KiB | 28,045 | `java.lang.Double ←[2]– java.lang.Double[] ←(several paths)– (GC root)` |
| 5.6% | 219 KiB | 28,045 | `java.lang.Double ←[1]– java.lang.Double[] ←(several paths)– (GC root)` |
| 5.6% | 219 KiB | 28,045 | `java.lang.Double ←[0]– java.lang.Double[] ←(several paths)– (GC root)` |

##### `java.util.HashMap$Node[]`

|     % |     Size | Nodes | Path                                                                                                                                                                                                |
| ----: | -------: | ----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 59.7% |  981 KiB |     2 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)`         |
| 12.0% |  198 KiB |     8 | `java.util.HashMap$Node[] ←.table– java.util.HashMap`                                                                                                                                               |
|  5.7% |   93 KiB |     1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←(several paths)– (GC root)`                                                                                                                   |
|  4.3% | 70.6 KiB |     1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
|  4.3% | 70.6 KiB |     1 | `java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |

##### `java.util.HashMap`

|     % |     Size | Nodes | Path                                                                                                                                                              |
| ----: | -------: | ----: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 60.0% |  982 KiB |     8 | `java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)`         |
| 12.1% |  199 KiB |    10 | `java.util.HashMap ← (GC root)`                                                                                                                                   |
|  5.7% | 93.1 KiB |     1 | `java.util.HashMap ←(several paths)– (GC root)`                                                                                                                   |
|  4.3% | 70.7 KiB |     1 | `java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
|  4.3% | 70.7 KiB |     1 | `java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |

##### `byte[]`

|     % |     Size | Nodes | Path                                                                                                                                                                                                                                    |
| ----: | -------: | ----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 45.7% |  719 KiB |    10 | `byte[] ←.cen– java.util.zip.ZipFile$Source ←(several paths)– (GC root)`                                                                                                                                                                |
| 13.6% |  214 KiB | 8,756 | `byte[] ←.value– java.lang.String ←(several paths)– (GC root)`                                                                                                                                                                          |
|  2.2% | 35.2 KiB |   976 | `byte[] ← (GC root)`                                                                                                                                                                                                                    |
|  2.0% | 31.1 KiB |   116 | `byte[] ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider` |
|  1.2% | 18.7 KiB |   291 | `byte[] ←.value– java.lang.String ←.methodDescriptor– java.lang.invoke.MethodType ←(several paths)– (GC root)`                                                                                                                          |

##### `java.util.HashMap$Node`

|    % |     Size | Nodes | Path                                                                                                              |
| ---: | -------: | ----: | ----------------------------------------------------------------------------------------------------------------- |
| 5.8% | 88.8 KiB |     8 | `java.util.HashMap$Node ←[2]– java.util.HashMap$Node[] ←.table– java.util.HashMap`                                |
| 4.4% | 66.5 KiB |     7 | `java.util.HashMap$Node ←[3]– java.util.HashMap$Node[] ←.table– java.util.HashMap`                                |
| 2.9% | 44.4 KiB |     8 | `java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[2]– java.util.HashMap$Node[] ←.table– java.util.HashMap` |
| 2.4% | 36.9 KiB |     6 | `java.util.HashMap$Node ←[5]– java.util.HashMap$Node[] ←.table– java.util.HashMap`                                |
| 2.1% |   32 KiB |     5 | `java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[3]– java.util.HashMap$Node[] ←.table– java.util.HashMap` |

##### `java.lang.Class`

|     % |     Size | Nodes | Path                                                                                 |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------ |
| 69.3% |  879 KiB | 1,782 | `class scala.collection.ArrayOps$$$Lambda+0x0000000501205800 ← (GC root)`            |
|  4.6% | 58.1 KiB |   497 | `java.lang.invoke.MethodType ←(several java.lang.Class paths)– (GC root)`            |
|  4.3% | 54.6 KiB |    73 | `class scala.runtime.java8.JFunction1$mcZI$sp ←(several paths)– (GC root)`           |
|  3.9% | 48.9 KiB |     1 | `sun.security.provider.Sun ←(several java.lang.Class paths)– (GC root)`              |
|  3.1% | 39.8 KiB |     1 | `java.util.concurrent.ConcurrentHashMap ←(several java.lang.Class paths)– (GC root)` |

##### `java.lang.ref.SoftReference`

|     % |      Size | Nodes | Path                                                                                                                                          |
| ----: | --------: | ----: | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 98.3% | 1,002 KiB |     8 | `java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)`                                                     |
|  0.4% |  3.99 KiB |    14 | `java.lang.ref.SoftReference ←[15]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)` |
|  0.2% |  2.42 KiB |     6 | `java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)`  |
|  0.2% |   2.3 KiB |     6 | `java.lang.ref.SoftReference ←[10]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)` |
|  0.2% |  1.56 KiB |    40 | `java.lang.ref.SoftReference ←[2]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)`  |

##### `java.util.jar.JarFile`

|      % |      Size | Nodes | Path                                                                 |
| -----: | --------: | ----: | -------------------------------------------------------------------- |
| 100.0% | 1,005 KiB |    10 | `java.util.jar.JarFile ←(several paths)– (GC root)`                  |
|  <0.1% |     411 B |    13 | `java.lang.String ←(several java.util.jar.JarFile paths)– (GC root)` |

##### `java.util.jar.Manifest`

|      % |      Size | Nodes | Path                                                                                                                         |
| -----: | --------: | ----: | ---------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1,001 KiB |     8 | `java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)` |
|  <0.1% |     411 B |    13 | `java.lang.String ←(several java.util.jar.Manifest paths)– (GC root)`                                                        |

##### `java.lang.String`

|     % |     Size | Nodes | Path                                                                                           |
| ----: | -------: | ----: | ---------------------------------------------------------------------------------------------- |
| 34.0% |  334 KiB | 8,768 | `java.lang.String ←(several paths)– (GC root)`                                                 |
|  2.3% | 22.7 KiB |   291 | `java.lang.String ←.methodDescriptor– java.lang.invoke.MethodType ←(several paths)– (GC root)` |
|  1.7% | 16.7 KiB |   604 | `java.lang.String ←(several paths)– class java.time.zone.ZoneRulesProvider`                    |
|  1.6% | 16.2 KiB |   565 | `java.lang.String ←(several paths)– class sun.security.util.KnownOIDs`                         |
|  1.4% | 13.6 KiB |   983 | `java.lang.String ← (GC root)`                                                                 |

##### `java.util.zip.ZipFile$Source`

|      % |    Size | Nodes | Path                                                       |
| -----: | ------: | ----: | ---------------------------------------------------------- |
| 100.0% | 834 KiB |    10 | `java.util.zip.ZipFile$Source ←(several paths)– (GC root)` |

##### `java.util.concurrent.ConcurrentHashMap`

|     % |     Size | Nodes | Path                                                                                                                                                                          |
| ----: | -------: | ----: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17.6% |  111 KiB |     1 | `java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider`                       |
| 10.3% | 65.1 KiB |     1 | `java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
|  8.6% | 54.4 KiB |     1 | `java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                                                                        |
|  6.3% | 39.8 KiB |     1 | `java.util.concurrent.ConcurrentHashMap ←(several paths)– (GC root)`                                                                                                          |
|  6.1% | 38.9 KiB |     1 | `sun.util.cldr.CLDRLocaleProviderAdapter ←(several java.util.concurrent.ConcurrentHashMap paths)– class sun.util.locale.provider.LocaleProviderAdapter`                       |

##### `java.util.concurrent.ConcurrentHashMap$Node[]`

|     % |     Size | Nodes | Path                                                                                                                                                                                                                                 |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 17.8% |  111 KiB |     1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider`                       |
| 10.4% |   65 KiB |     1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.map– jdk.internal.util.ReferencedKeyMap ←.map– jdk.internal.util.ReferencedKeySet ←.internTable– class java.lang.invoke.MethodType` |
|  8.7% | 54.3 KiB |     1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                                                                        |
|  6.3% | 39.7 KiB |     1 | `java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←(several paths)– (GC root)`                                                                                                          |
|  6.2% | 38.9 KiB |     1 | `sun.util.cldr.CLDRLocaleProviderAdapter ←(several java.util.concurrent.ConcurrentHashMap$Node[] paths)– class sun.util.locale.provider.LocaleProviderAdapter`                                                                       |

##### `java.util.LinkedHashMap`

|    % |     Size | Nodes | Path                                                                                                                                                                                                                                                                                                                             |
| ---: | -------: | ----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.9% |   27 KiB |     1 | `java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`                                |
| 4.9% |   27 KiB |     1 | `java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                                                |
| 3.5% | 19.5 KiB |     8 | `java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)`                                                                                                                                     |
| 3.5% | 19.4 KiB |     1 | `java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| 3.5% | 19.4 KiB |     1 | `java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |

##### `java.util.concurrent.ConcurrentHashMap$Node`

|    % |     Size | Nodes | Path                                                                                                                                                                                                                                                                                |
| ---: | -------: | ----: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.7% | 38.9 KiB |     1 | `sun.util.cldr.CLDRLocaleProviderAdapter ←(several java.util.concurrent.ConcurrentHashMap$Node paths)– class sun.util.locale.provider.LocaleProviderAdapter`                                                                                                                        |
| 6.1% | 31.1 KiB |   116 | `byte[] ←(several java.util.concurrent.ConcurrentHashMap$Node paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.regionToRules– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider` |
| 6.1% | 31.1 KiB |     1 | `sun.text.resources.cldr.FormatData ←(several java.util.concurrent.ConcurrentHashMap$Node paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                      |
| 6.0% | 30.2 KiB |   658 | `java.lang.String ←(several java.util.concurrent.ConcurrentHashMap$Node paths)– (GC root)`                                                                                                                                                                                          |
| 4.4% | 22.4 KiB |     1 | `java.util.concurrent.ConcurrentHashMap$Node ←[17]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                                                                    |

##### `java.util.jar.Attributes`

|     % |     Size | Nodes | Path                                                                                                                                                                                                                                                        |
| ----: | -------: | ----: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  4.3% | 19.6 KiB |     8 | `java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)`                                                                                               |
|  0.1% |    411 B |    13 | `java.lang.String ←(several java.util.jar.Attributes paths)– (GC root)`                                                                                                                                                                                     |
| <0.1% |    154 B |     2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[44]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)` |
| <0.1% |    154 B |     2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[43]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)` |
| <0.1% |    154 B |     2 | `java.util.jar.Attributes ←.value– java.util.HashMap$Node ←[42]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.entries– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)` |

##### `java.lang.invoke.MethodType`

|     % |     Size | Nodes | Path                                                                                      |
| ----: | -------: | ----: | ----------------------------------------------------------------------------------------- |
| 59.8% | 95.7 KiB |   710 | `java.lang.invoke.MethodType ←(several paths)– (GC root)`                                 |
| 29.8% | 47.8 KiB |   145 | `java.lang.invoke.MethodTypeForm ←(several java.lang.invoke.MethodType paths)– (GC root)` |
|  5.5% | 8.85 KiB |    51 | `java.lang.invoke.MethodType ← (GC root)`                                                 |
|  2.8% | 4.49 KiB |    12 | `java.lang.invoke.LambdaForm ←(several java.lang.invoke.MethodType paths)– (GC root)`     |
|  1.2% | 1.86 KiB |    95 | `java.lang.Class[] ←(several java.lang.invoke.MethodType paths)– (GC root)`               |

##### `java.net.URLClassLoader`

|     % |     Size | Nodes | Path                                                                                      |
| ----: | -------: | ----: | ----------------------------------------------------------------------------------------- |
| 51.0% | 81.1 KiB |     1 | `java.net.URLClassLoader ←(several paths)– (GC root)`                                     |
| 48.4% | 77.1 KiB |     1 | `java.net.URLClassLoader ← (GC root)`                                                     |
|  0.6% |    970 B |    31 | `java.lang.String ←(several java.net.URLClassLoader paths)– (GC root)`                    |
|  0.0% |      0 B |     1 | `java.lang.invoke.ResolvedMethodName ←(several java.net.URLClassLoader paths)– (GC root)` |

##### `int[]`

|     % |     Size | Nodes | Path                                                                        |
| ----: | -------: | ----: | --------------------------------------------------------------------------- |
| 62.0% | 97.3 KiB |    10 | `int[] ←.entries– java.util.zip.ZipFile$Source ←(several paths)– (GC root)` |
| 52.7% | 82.6 KiB |   717 | `int[] ← (GC root)`                                                         |
| 10.3% | 16.2 KiB |    10 | `int[] ←.table– java.util.zip.ZipFile$Source ←(several paths)– (GC root)`   |
|  2.6% | 4.13 KiB |     1 | `int[] ←.A– class java.lang.CharacterData00`                                |
|  1.5% | 2.36 KiB |     1 | `int[] ←.indices– class sun.util.calendar.ZoneInfoFile`                     |

##### `org.renaissance.core.ModuleLoader`

|     % |     Size | Nodes | Path                                                                                                                |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------------------------- |
| 50.0% | 70.7 KiB |     1 | `org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| 50.0% | 70.7 KiB |     1 | `org.renaissance.core.ModuleLoader ← (GC root)`                                                                     |

##### `java.util.LinkedHashSet`

|     % |     Size | Nodes | Path                                                                                                                                                                                                                                                                                              |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19.4% |   27 KiB |     1 | `java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`                                |
| 19.4% |   27 KiB |     1 | `java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                                                |
| 14.0% | 19.4 KiB |     1 | `java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| 14.0% | 19.4 KiB |     1 | `java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
|  6.3% | 8.75 KiB |     1 | `java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[30]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`                                |

##### `java.util.LinkedHashMap$Entry`

|     % |     Size | Nodes | Path                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | -------: | ----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16.8% | 22.7 KiB |   241 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite`                                |
| 16.8% | 22.7 KiB |   241 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←[19]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                                                |
| 12.7% | 17.2 KiB |   177 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader ←.value– java.util.Optional ←.moduleLoader– org.renaissance.core.BenchmarkSuite` |
| 12.7% | 17.2 KiB |   177 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.LinkedHashSet ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[21]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.jarResourcePathsByModule– org.renaissance.core.ModuleLoader`                                                                                 |
| 11.8% | 15.9 KiB |    73 | `java.util.LinkedHashMap$Entry ←(several paths)– java.util.LinkedHashMap ←.map– java.util.jar.Attributes ←.attr– java.util.jar.Manifest ←.referent– java.lang.ref.SoftReference ←.manRef– java.util.jar.JarFile ←(several paths)– (GC root)`                                                                                                                                     |

##### `java.time.zone.TzdbZoneRulesProvider`

|      % |    Size | Nodes | Path                                                                                            |
| -----: | ------: | ----: | ----------------------------------------------------------------------------------------------- |
| 100.0% | 116 KiB |     1 | `java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider` |

##### `org.renaissance.core.BenchmarkDescriptor`

|     % |     Size | Nodes | Path                                                                                                                                                                                              |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 99.3% | 93.1 KiB |     1 | `java.util.HashMap ←(several org.renaissance.core.BenchmarkDescriptor paths)– (GC root)`                                                                                                          |
|  0.5% |    480 B |    20 | `org.renaissance.core.BenchmarkDescriptor ←(several paths)– (GC root)`                                                                                                                            |
| <0.1% |     40 B |     1 | `scala.collection.convert.JavaCollectionWrappers$MutableMapWrapper ←(several org.renaissance.core.BenchmarkDescriptor paths)– (GC root)`                                                          |
| <0.1% |     24 B |     1 | `org.renaissance.core.BenchmarkDescriptor ← (GC root)`                                                                                                                                            |
| <0.1% |     24 B |     1 | `org.renaissance.core.BenchmarkDescriptor ←.value– java.util.HashMap$Node ←[54]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.benchmarkDescriptors– org.renaissance.core.BenchmarkSuite` |

##### `byte[][]`

|      % |     Size | Nodes | Path                                                         |
| -----: | -------: | ----: | ------------------------------------------------------------ |
| 100.0% | 89.4 KiB |     1 | `byte[][] ←.ruleArray– class sun.util.calendar.ZoneInfoFile` |

##### `java.lang.Module`

|     % |     Size | Nodes | Path                                                                                                                                                                                                          |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 97.0% | 76.6 KiB |    63 | `java.lang.Module ←(several paths)– (GC root)`                                                                                                                                                                |
|  0.7% |    593 B |     1 | `java.lang.Module ←.value– java.util.HashMap$Node ←.next– java.util.HashMap$Node ←[9]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.nameToModule– java.lang.ModuleLayer ←(several paths)– (GC root)` |
|  0.6% |    509 B |     1 | `java.lang.Module ←.value– java.util.HashMap$Node ←[16]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.nameToModule– java.lang.ModuleLayer ←(several paths)– (GC root)`                               |
|  0.6% |    481 B |     1 | `java.lang.Module ←.value– java.util.HashMap$Node ←[41]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.nameToModule– java.lang.ModuleLayer ←(several paths)– (GC root)`                               |
|  0.6% |    481 B |     1 | `java.lang.Module ←.value– java.util.HashMap$Node ←[118]– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.nameToModule– java.lang.ModuleLayer ←(several paths)– (GC root)`                              |

##### `java.util.ImmutableCollections$SetN`

|     % |     Size | Nodes | Path                                                                                                                                                                   |
| ----: | -------: | ----: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 48.0% | 37.4 KiB |     1 | `java.util.ImmutableCollections$SetN ←(several paths)– sun.util.cldr.CLDRLocaleProviderAdapter ←(several paths)– class sun.util.locale.provider.LocaleProviderAdapter` |
| 21.0% | 16.4 KiB |    22 | `java.util.ImmutableCollections$SetN ←.exports– java.lang.module.ModuleDescriptor ←(several paths)– (GC root)`                                                         |
| 15.7% | 12.3 KiB |    39 | `java.util.ImmutableCollections$SetN ←.packages– java.lang.module.ModuleDescriptor ←(several paths)– (GC root)`                                                        |
|  5.6% | 4.37 KiB |    21 | `java.util.ImmutableCollections$SetN ←.requires– java.lang.module.ModuleDescriptor ←(several paths)– (GC root)`                                                        |
|  2.1% |  1.6 KiB |     6 | `java.util.ImmutableCollections$SetN ←.provides– java.lang.module.ModuleDescriptor ←(several paths)– (GC root)`                                                        |

##### `java.lang.ref.SoftReference[]`

|     % |     Size | Nodes | Path                                                                                                                                             |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 66.7% | 38.7 KiB |   130 | `java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)`                                       |
| 21.8% | 12.7 KiB |    61 | `java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType ←(several paths)– (GC root)`   |
|  6.8% | 3.95 KiB |   130 | `java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)`                                     |
|  2.7% | 1.55 KiB |    61 | `java.lang.ref.SoftReference[] ←.methodHandles– java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType ←(several paths)– (GC root)` |
|  1.8% | 1.02 KiB |     3 | `java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←.form– java.lang.invoke.MethodType`                               |

##### `char[]`

|     % |     Size | Nodes | Path                                                                                               |
| ----: | -------: | ----: | -------------------------------------------------------------------------------------------------- |
| 31.2% |   16 KiB |     1 | `char[] ←.cb– java.io.BufferedWriter ←.textOut– java.io.PrintStream ←(several paths)– (GC root)`   |
| 31.2% |   16 KiB |     1 | `char[] ←.cb– java.io.BufferedWriter ←.textOut– java.io.PrintStream ←.out– class java.lang.System` |
| 23.0% | 11.8 KiB |     1 | `char[] ←.Y– class java.lang.CharacterData00`                                                      |
|  7.8% |    4 KiB |     1 | `char[] ←.X– class java.lang.CharacterData00`                                                      |
|  4.0% | 2.06 KiB |     1 | `char[] ←.B– class java.lang.CharacterData00`                                                      |

##### `java.lang.invoke.LambdaForm$Name[]`

|     % |     Size | Nodes | Path                                                                                                                                                                                                                                                                                                                                   |
| ----: | -------: | ----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 73.9% |   28 KiB |   122 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←(several paths)– (GC root)`                                                                                                                                                                                                                                  |
|  5.1% | 1.94 KiB |    14 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[15]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)`                                                                                                      |
|  3.8% | 1.44 KiB |     6 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[10]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)`                                                                                                      |
|  3.3% | 1.25 KiB |    33 | `java.lang.invoke.LambdaForm$Name ←(several java.lang.invoke.LambdaForm$Name[] paths)– (GC root)`                                                                                                                                                                                                                                      |
|  1.4% |    538 B |     3 | `java.lang.invoke.LambdaForm$Name[] ←.names– java.lang.invoke.LambdaForm ←.referent– java.lang.invoke.LambdaFormEditor$Transform ←.transformCache– java.lang.invoke.LambdaForm ←.referent– java.lang.ref.SoftReference ←[7]– java.lang.ref.SoftReference[] ←.lambdaForms– java.lang.invoke.MethodTypeForm ←(several paths)– (GC root)` |

##### `scala.math.BigInt[]`

|     % |   Size | Nodes | Path                                                                                                                                                                                 |
| ----: | -----: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 50.0% | 16 KiB |     1 | `scala.math.BigInt[] ←.cache– class scala.math.BigInt$ ←[191]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader`                             |
| 50.0% | 16 KiB |     1 | `scala.math.BigInt[] ←.cache– class scala.math.BigInt$ ←[171]– java.lang.Object[] ←.elementData– java.util.ArrayList ←.classes– java.net.URLClassLoader ←(several paths)– (GC root)` |

##### `java.lang.String[]`

|     % |     Size | Nodes | Path                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 42.9% | 11.6 KiB |     1 | `java.lang.String[] ←.regions– class sun.util.calendar.ZoneInfoFile`                                                                                                                                                                                                                                                                                                                                    |
| 17.5% | 4.72 KiB |     1 | `java.lang.String[] ←.a– java.util.Arrays$ArrayList ←.regionIds– java.time.zone.TzdbZoneRulesProvider ←(several paths)– class java.time.zone.ZoneRulesProvider`                                                                                                                                                                                                                                         |
|  4.1% | 1.12 KiB |    22 | `java.lang.String[] ←(several paths)– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.lookup– sun.text.resources.cldr.FormatData ←(several paths)– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles`                                                                                                   |
|  3.4% |    944 B |    18 | `java.lang.String[] ←(several paths)– java.util.HashMap$Node[] ←.table– java.util.HashMap ←.lookup– sun.text.resources.cldr.FormatData_en ←.referent– sun.util.resources.Bundles$BundleReference ←.val– java.util.concurrent.ConcurrentHashMap$Node ←[17]– java.util.concurrent.ConcurrentHashMap$Node[] ←.table– java.util.concurrent.ConcurrentHashMap ←.cacheList– class sun.util.resources.Bundles` |
|  2.9% |    805 B |     1 | `java.lang.String[] ← (GC root)`                                                                                                                                                                                                                                                                                                                                                                        |

##### `jdk.internal.math.FDBigInteger[]`

|      % |     Size | Nodes | Path                                                                                   |
| -----: | -------: | ----: | -------------------------------------------------------------------------------------- |
| 100.0% | 26.5 KiB |     1 | `jdk.internal.math.FDBigInteger[] ←.POW_5_CACHE– class jdk.internal.math.FDBigInteger` |

##### `java.lang.invoke.MethodHandle[]`

|     % |     Size | Nodes | Path                                                                                                                                        |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 61.7% | 10.7 KiB |    21 | `java.lang.invoke.MethodHandle[] ←.invokers– java.lang.invoke.Invokers ←.invokers– java.lang.invoke.MethodType ←(several paths)– (GC root)` |
| 17.6% | 3.05 KiB |     6 | `java.lang.invoke.MethodHandle[] ←.invokers– java.lang.invoke.Invokers ←.invokers– java.lang.invoke.MethodType`                             |
| 11.6% |    2 KiB |     1 | `java.lang.invoke.MethodHandle[] ←.ARRAYS– class java.lang.invoke.MethodHandleImpl`                                                         |
|  1.9% |    336 B |     7 | `java.lang.invoke.MethodHandle[] ←.transformHelpers– java.lang.invoke.BoundMethodHandle$SpeciesData ←(several paths)– (GC root)`            |
|  1.5% |    264 B |     1 | `java.lang.invoke.MethodHandle[] ←.IDENTITY_MHS– class java.lang.invoke.MethodHandles`                                                      |

##### `long[]`

|     % |     Size | Nodes | Path                                                                                                         |
| ----: | -------: | ----: | ------------------------------------------------------------------------------------------------------------ |
| 61.9% | 9.64 KiB |     1 | `long[] ←.g– class jdk.internal.math.MathUtils`                                                              |
| 18.1% | 2.82 KiB |     1 | `long[] ←(several paths)– (GC root)`                                                                         |
|  8.9% | 1.38 KiB |     1 | `long[] ←.savingsInstantTransitions– java.time.zone.ZoneRules ←(several paths)– (GC root)`                   |
|  1.9% |    296 B |     1 | `long[] ←.bitsPerDigit– class java.math.BigInteger`                                                          |
|  1.6% |    256 B |     1 | `long[] ←[3]– java.lang.Object[] ←.backtrace– java.lang.OutOfMemoryError ←[1]– java.lang.OutOfMemoryError[]` |

##### `java.lang.Class[]`

|     % |     Size | Nodes | Path                                                                                                 |
| ----: | -------: | ----: | ---------------------------------------------------------------------------------------------------- |
| 83.0% | 11.8 KiB |   478 | `java.lang.Class[] ←.ptypes– java.lang.invoke.MethodType ←(several paths)– (GC root)`                |
| 13.0% | 1.86 KiB |    96 | `java.lang.Class[] ←(several paths)– (GC root)`                                                      |
|  3.7% |    536 B |    38 | `java.lang.Class[] ←.ptypes– java.lang.invoke.MethodType`                                            |
|  0.5% |     72 B |    10 | `java.lang.Class[] ← (GC root)`                                                                      |
|  0.2% |     24 B |     1 | `java.lang.Class[] ←.STATICALLY_INVOCABLE_PACKAGES– class java.lang.invoke.InvokerBytecodeGenerator` |

##### `java.time.LocalDateTime[]`

|      % |     Size | Nodes | Path                                                                                                        |
| -----: | -------: | ----: | ----------------------------------------------------------------------------------------------------------- |
| 100.0% | 9.69 KiB |     1 | `java.time.LocalDateTime[] ←.savingsLocalTransitions– java.time.zone.ZoneRules ←(several paths)– (GC root)` |
|   0.0% |      0 B |     1 | `java.time.LocalDateTime[] ←.EMPTY_LDT_ARRAY– class java.time.zone.ZoneRules`                               |

##### `java.lang.ThreadLocal$ThreadLocalMap$Entry[]`

|      % |     Size | Nodes | Path                                                                                                                          |
| -----: | -------: | ----: | ----------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 8.47 KiB |     1 | `java.lang.ThreadLocal$ThreadLocalMap$Entry[] ←.table– java.lang.ThreadLocal$ThreadLocalMap ←.threadLocals– java.lang.Thread` |

##### `java.nio.ByteBuffer[]`

|      % |  Size | Nodes | Path                                                                                                                                                                                                                                                  |
| -----: | ----: | ----: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 8 KiB |     1 | `java.nio.ByteBuffer[] ←.buffers– sun.nio.ch.Util$BufferCache ←.value– java.lang.ThreadLocal$ThreadLocalMap$Entry ←[12]– java.lang.ThreadLocal$ThreadLocalMap$Entry[] ←.table– java.lang.ThreadLocal$ThreadLocalMap ←.threadLocals– java.lang.Thread` |

##### `java.util.concurrent.ForkJoinTask[]`

|      % |    Size | Nodes | Path                                                                                       |
| -----: | ------: | ----: | ------------------------------------------------------------------------------------------ |
| 100.0% | 6.5 KiB |    13 | `java.util.concurrent.ForkJoinTask[] ←.array– java.util.concurrent.ForkJoinPool$WorkQueue` |

##### `java.lang.Long`

|    % |  Size | Nodes | Path                                                                            |
| ---: | ----: | ----: | ------------------------------------------------------------------------------- |
| 5.1% | 104 B |    13 | `java.lang.Long ←(several paths)– (GC root)`                                    |
| 0.4% |   8 B |     1 | `java.lang.Long ←[0]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |   8 B |     1 | `java.lang.Long ←[1]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |   8 B |     1 | `java.lang.Long ←[2]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |
| 0.4% |   8 B |     1 | `java.lang.Long ←[3]– java.lang.Long[] ←.cache– class java.lang.Long$LongCache` |

##### `java.lang.Integer`

|    % | Size | Nodes | Path                                                                                                                                                                                                                                                         |
| ---: | ---: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2.9% | 32 B |     8 | `java.lang.Integer ←(several paths)– (GC root)`                                                                                                                                                                                                              |
| 0.4% |  4 B |     1 | `java.lang.Integer ←[5]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer ←(several paths)– (GC root)` |
| 0.4% |  4 B |     1 | `java.lang.Integer ←[4]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer ←(several paths)– (GC root)` |
| 0.4% |  4 B |     1 | `java.lang.Integer ←[3]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer ←(several paths)– (GC root)` |
| 0.4% |  4 B |     1 | `java.lang.Integer ←[2]– java.lang.Object[] ←.elements– java.util.ImmutableCollections$ListN ←.TRANSFORM_MODS– java.lang.invoke.BoundMethodHandle$Specializer$Factory ←.factory– java.lang.invoke.BoundMethodHandle$Specializer ←(several paths)– (GC root)` |

##### `java.lang.Short`

|    % | Size | Nodes | Path                                                                  |
| ---: | ---: | ----: | --------------------------------------------------------------------- |
| 0.4% |  2 B |     1 | `java.lang.Short ←[0]– java.lang.Short[] ←[2208]– java.lang.Object[]` |
| 0.4% |  2 B |     1 | `java.lang.Short ←[1]– java.lang.Short[] ←[2208]– java.lang.Object[]` |
| 0.4% |  2 B |     1 | `java.lang.Short ←[2]– java.lang.Short[] ←[2208]– java.lang.Object[]` |
| 0.4% |  2 B |     1 | `java.lang.Short ←[3]– java.lang.Short[] ←[2208]– java.lang.Object[]` |
| 0.4% |  2 B |     1 | `java.lang.Short ←[4]– java.lang.Short[] ←[2208]– java.lang.Object[]` |

##### `java.lang.Byte`

|    % | Size | Nodes | Path                                                                |
| ---: | ---: | ----: | ------------------------------------------------------------------- |
| 0.4% |  1 B |     1 | `java.lang.Byte ←[0]– java.lang.Byte[] ←[2207]– java.lang.Object[]` |
| 0.4% |  1 B |     1 | `java.lang.Byte ←[1]– java.lang.Byte[] ←[2207]– java.lang.Object[]` |
| 0.4% |  1 B |     1 | `java.lang.Byte ←[2]– java.lang.Byte[] ←[2207]– java.lang.Object[]` |
| 0.4% |  1 B |     1 | `java.lang.Byte ←[3]– java.lang.Byte[] ←[2207]– java.lang.Object[]` |
| 0.4% |  1 B |     1 | `java.lang.Byte ←[4]– java.lang.Byte[] ←[2207]– java.lang.Object[]` |

##### `java.lang.Float`

|      % | Size | Nodes | Path                                                          |
| -----: | ---: | ----: | ------------------------------------------------------------- |
| 100.0% |  4 B |     1 | `java.lang.Float ←.FLOAT_ZERO– class sun.invoke.util.Wrapper` |

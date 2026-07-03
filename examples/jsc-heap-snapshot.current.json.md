# Heap snapshot

Allocated 10.4 MB across 144,697 nodes and 438,955 edges.

| Category |     % |    Size |  Nodes |
| -------- | ----: | ------: | -----: |
| internal | 51.3% | 5.34 MB | 71,965 |
| code     | 23.4% | 2.43 MB | 16,071 |
| object   |  7.2% |  745 kB |  8,886 |
| closure  |  6.5% |  680 kB | 19,271 |
| string   |  4.8% |  498 kB | 14,927 |
| native   |  4.1% |  425 kB |  8,476 |
| built-in |  2.0% |  203 kB |  1,013 |
| array    |  0.6% | 65.8 kB |  3,748 |
| regexp   |  0.1% | 6.14 kB |    128 |
| unknown  | <0.1% | 4.28 kB |    122 |
| symbol   | <0.1% |  1.1 kB |     67 |
| number   | <0.1% |   383 B |     11 |
| bigint   | <0.1% |   238 B |     12 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

|     % |    Size | Instances | Constructor                  |
| ----: | ------: | --------: | ---------------------------- |
| 25.9% | 2.69 MB |    24,020 | `Structure`                  |
| 14.3% | 1.49 MB |    11,626 | `FunctionExecutable`         |
| 11.5% | 1.19 MB |    24,875 | `DOMAttributeGetterSetter`   |
|  7.8% |  806 kB |     8,397 | `StructureRareData`          |
|  6.5% |  675 kB |    19,126 | `Function`                   |
|  4.2% |  440 kB |       122 | `FunctionCodeBlock`          |
|  3.0% |  314 kB |     5,787 | `Object`                     |
|  3.0% |  308 kB |     1,375 | `E1`                         |
|  2.9% |  300 kB |     3,123 | `UnlinkedFunctionExecutable` |
|  2.1% |  222 kB |     4,615 | `PropertyTable`              |
|  1.6% |  170 kB |       761 | `Set`                        |
|  1.3% |  131 kB |       297 | `UnlinkedFunctionCodeBlock`  |
|  1.1% |  114 kB |     3,563 | `CustomGetterSetter`         |
|  0.8% | 83.2 kB |     1,697 | `HTMLDivElement`             |
|  0.8% | 80.7 kB |     1,009 | `FunctionRareData`           |
|  0.7% | 74.6 kB |     1,236 | `JSLexicalEnvironment`       |
|  0.7% |   69 kB |       863 | `NativeExecutable`           |
|  0.6% | 58.4 kB |     3,618 | `Array`                      |
|  0.5% | 55.7 kB |     1,598 | `HashMapBucket`              |
|  0.5% | 49.6 kB |     1,549 | `GetterSetter`               |

#### Instances

Instances ranked by contribution to each constructor's self size.

##### `Structure`

|     % |   Size | Instances | Path                                |
| ----: | -----: | --------: | ----------------------------------- |
|  0.2% | 4.7 kB |        42 | `(GC root)`                         |
| <0.1% |  224 B |         2 | `<root>`                            |
| <0.1% |  112 B |         1 | `MouseEvent`                        |
| <0.1% |  112 B |         1 | `Window`                            |
| <0.1% |  112 B |         1 | `PointerEvent ← Structure ← Window` |

##### `FunctionExecutable`

|     % |  Size | Instances | Path                                              |
| ----: | ----: | --------: | ------------------------------------------------- |
| <0.1% | 640 B |         5 | `(GC root)`                                       |
| <0.1% | 128 B |         1 | `<root>`                                          |
| <0.1% | 128 B |         1 | `FunctionCodeBlock ← FunctionExecutable ← <root>` |
| <0.1% | 128 B |         1 | `Function ← .catch Promise ← Window`              |
| <0.1% | 128 B |         1 | `Function ← Window`                               |

##### `DOMAttributeGetterSetter`

|     % | Size | Instances | Path                  |
| ----: | ---: | --------: | --------------------- |
| <0.1% | 48 B |         1 | `.screenX MouseEvent` |
| <0.1% | 48 B |         1 | `.screenY MouseEvent` |
| <0.1% | 48 B |         1 | `.clientX MouseEvent` |
| <0.1% | 48 B |         1 | `.clientY MouseEvent` |
| <0.1% | 48 B |         1 | `.ctrlKey MouseEvent` |

##### `StructureRareData`

|     % |  Size | Instances | Path                                                         |
| ----: | ----: | --------: | ------------------------------------------------------------ |
| <0.1% | 288 B |         3 | `(GC root)`                                                  |
| <0.1% |  96 B |         1 | `Structure ← FunctionExecutable ← Function ← .from Function` |
| <0.1% |  96 B |         1 | `Structure ← PointerEvent ← Structure ← Window`              |
| <0.1% |  96 B |         1 | `Structure ← MouseEvent`                                     |
| <0.1% |  96 B |         1 | `Structure ← ShadowRoot ← Window`                            |

##### `Function`

|     % | Size | Instances | Path                      |
| ----: | ---: | --------: | ------------------------- |
| <0.1% | 98 B |         1 | `.qt JSModuleEnvironment` |
| <0.1% | 98 B |         1 | `.Jt JSModuleEnvironment` |
| <0.1% | 97 B |         1 | `.Ue JSModuleEnvironment` |
| <0.1% | 97 B |         1 | `JSModuleEnvironment`     |
| <0.1% | 97 B |         1 | `.er JSModuleEnvironment` |

##### `FunctionCodeBlock`

|     % |    Size | Instances | Path                                                     |
| ----: | ------: | --------: | -------------------------------------------------------- |
| 16.4% | 72.2 kB |         2 | `(GC root)`                                              |
|  9.4% | 41.2 kB |         1 | `<root>`                                                 |
|  2.5% | 11.1 kB |         1 | `FunctionExecutable ← <root>`                            |
|  2.3% | 10.1 kB |         1 | `FunctionExecutable ← Function ← .from Function`         |
|  1.9% | 8.52 kB |         1 | `FunctionExecutable ← Function ← ._formattedTime Object` |

##### `Object`

|    % |    Size | Instances | Path                                                              |
| ---: | ------: | --------: | ----------------------------------------------------------------- |
| 1.2% | 3.89 kB |         9 | `.UIStrings Window`                                               |
| 0.4% | 1.11 kB |         2 | `.normal B ← JSModuleEnvironment`                                 |
| 0.3% |   906 B |         2 | `.property B ← JSModuleEnvironment`                               |
| 0.2% |   653 B |         1 | `(GC root)`                                                       |
| 0.1% |   328 B |         1 | `[1] Array ← .graph.edges Object ← .values Object ← .meta Object` |

##### `E1`

|    % |    Size | Instances | Path                                                    |
| ---: | ------: | --------: | ------------------------------------------------------- |
| 2.3% | 6.94 kB |        31 | `(GC root)`                                             |
| 0.1% |   224 B |         1 | `.sibling E1`                                           |
| 0.1% |   224 B |         1 | `.alternate E1 ← .child E1`                             |
| 0.1% |   224 B |         1 | `.sibling E1 ← .sibling E1`                             |
| 0.1% |   224 B |         1 | `.sibling E1 ← .sibling E1 ← .sibling E1 ← .sibling E1` |

##### `UnlinkedFunctionExecutable`

|     % |    Size | Instances | Path                                                                                                                 |
| ----: | ------: | --------: | -------------------------------------------------------------------------------------------------------------------- |
|  8.6% | 25.8 kB |       269 | `(GC root)`                                                                                                          |
|  0.3% |   864 B |         9 | `FunctionExecutable ← Function ← Window`                                                                             |
| <0.1% |    96 B |         1 | `UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← FunctionExecutable ← FunctionRareData ← Function ← <root>` |
| <0.1% |    96 B |         1 | `FunctionExecutable ← Function ← .all Function`                                                                      |
| <0.1% |    96 B |         1 | `FunctionExecutable ← Function ← .streamController Object`                                                           |

##### `PropertyTable`

|     % | Size | Instances | Path                                                                                                            |
| ----: | ---: | --------: | --------------------------------------------------------------------------------------------------------------- |
| <0.1% | 48 B |         1 | `(GC root)`                                                                                                     |
| <0.1% | 48 B |         1 | `Structure ← Object ← .CollectionMode Function ← <root>`                                                        |
| <0.1% | 48 B |         1 | `Structure ← Function ← <root>`                                                                                 |
| <0.1% | 48 B |         1 | `Structure ← Object ← .homeObject Function ← .CallFrameProxy Function ← <root>`                                 |
| <0.1% | 48 B |         1 | `Structure ← Object ← .methods Function ← .CommandLineAPI JSLexicalEnvironment ← JSLexicalEnvironment ← <root>` |

##### `Set`

|    % |    Size | Instances | Path                                          |
| ---: | ------: | --------: | --------------------------------------------- |
| 7.7% | 13.2 kB |         9 | `.__reactEvents$ej1ne67lklu HTMLAudioElement` |
| 2.9% | 4.98 kB |         1 | `.zi JSLexicalEnvironment`                    |
| 2.6% |  4.5 kB |         1 | `.Ry JSLexicalEnvironment`                    |
| 1.3% | 2.23 kB |         1 | `.ud JSLexicalEnvironment`                    |
| 0.8% |  1.4 kB |         1 | `JSModuleEnvironment`                         |

##### `UnlinkedFunctionCodeBlock`

|     % |    Size | Instances | Path                                                                            |
| ----: | ------: | --------: | ------------------------------------------------------------------------------- |
| 24.4% |   32 kB |        38 | `(GC root)`                                                                     |
|  1.9% | 2.52 kB |         4 | `<root>`                                                                        |
|  0.4% |   557 B |         1 | `Function`                                                                      |
|  0.4% |   551 B |         1 | `UnlinkedFunctionExecutable ← FunctionExecutable ← Function ← <root>`           |
|  0.4% |   518 B |         1 | `UnlinkedFunctionExecutable ← FunctionExecutable ← FunctionRareData ← Function` |

##### `CustomGetterSetter`

|     % | Size | Instances | Path                                                                      |
| ----: | ---: | --------: | ------------------------------------------------------------------------- |
|  0.1% | 64 B |         2 | `.constructor WebKitPlaybackTargetAvailabilityEvent ← Structure ← Window` |
| <0.1% | 32 B |         1 | `.constructor MouseEvent`                                                 |
| <0.1% | 32 B |         1 | `.constructor PointerEvent ← Structure ← Window`                          |
| <0.1% | 32 B |         1 | `.arguments Function`                                                     |
| <0.1% | 32 B |         1 | `.caller Function`                                                        |

##### `HTMLDivElement`

|     % |    Size | Instances | Path                                                                                                                              |
| ----: | ------: | --------: | --------------------------------------------------------------------------------------------------------------------------------- |
| 61.4% | 51.1 kB |     1,022 | `<root>`                                                                                                                          |
|  0.2% |   150 B |         3 | `(GC root)`                                                                                                                       |
|  0.1% |    50 B |         1 | `.stateNode E1 ← .child E1 ← .child E1 ← .child E1 ← .child E1 ← .child E1 ← .sibling E1 ← .child E1`                             |
|  0.1% |    50 B |         1 | `.stateNode E1 ← .child E1 ← .child E1 ← .child E1 ← .child E1 ← .child E1 ← .sibling E1 ← .sibling E1 ← .child E1`               |
|  0.1% |    50 B |         1 | `.stateNode E1 ← .child E1 ← .child E1 ← .child E1 ← .child E1 ← .child E1 ← .sibling E1 ← .sibling E1 ← .sibling E1 ← .child E1` |

##### `FunctionRareData`

|    % | Size | Instances | Path                                                                     |
| ---: | ---: | --------: | ------------------------------------------------------------------------ |
| 0.1% | 80 B |         1 | `Function ← .e JSLexicalEnvironment ← Function ← .z JSModuleEnvironment` |
| 0.1% | 80 B |         1 | `Function ← .z JSModuleEnvironment`                                      |
| 0.1% | 80 B |         1 | `Function`                                                               |
| 0.1% | 80 B |         1 | `Function ← .Ve JSModuleEnvironment`                                     |
| 0.1% | 80 B |         1 | `Function ← .Ue JSModuleEnvironment`                                     |

##### `JSLexicalEnvironment`

|     % |    Size | Instances | Path                                  |
| ----: | ------: | --------: | ------------------------------------- |
| 13.5% | 10.1 kB |         9 | `(GC root)`                           |
|  0.3% |   256 B |         1 | `JSLexicalEnvironment`                |
|  0.2% |   160 B |         1 | `Function ← .Oa JSLexicalEnvironment` |
|  0.2% |   160 B |         1 | `Function ← .M0 JSLexicalEnvironment` |
|  0.2% |   160 B |         1 | `JSLexicalEnvironment ← <root>`       |

##### `NativeExecutable`

|     % |    Size | Instances | Path                                                  |
| ----: | ------: | --------: | ----------------------------------------------------- |
| 22.6% | 15.6 kB |       195 | `(GC root)`                                           |
|  0.1% |    80 B |         1 | `<root>`                                              |
|  0.1% |    80 B |         1 | `Function ← .has FontFaceSet ← Structure ← Window`    |
|  0.1% |    80 B |         1 | `Function ← .add FontFaceSet ← Structure ← Window`    |
|  0.1% |    80 B |         1 | `Function ← .delete FontFaceSet ← Structure ← Window` |

##### `Array`

|     % |  Size | Instances | Path                                                                                  |
| ----: | ----: | --------: | ------------------------------------------------------------------------------------- |
|  1.1% | 660 B |        10 | `(GC root)`                                                                           |
|  0.3% | 160 B |        10 | `.deps Object`                                                                        |
|  0.1% |  66 B |         1 | `Window`                                                                              |
| <0.1% |  16 B |         1 | `.content Object ← .queue ReadableStreamDefaultController ← .streamController Object` |
| <0.1% |  16 B |         1 | `.dependencies Object ← HashMapBucket ← .registry ModuleLoader ← Window`              |

##### `HashMapBucket`

|    % | Size | Instances | Path                                                                                                     |
| ---: | ---: | --------: | -------------------------------------------------------------------------------------------------------- |
| 0.2% | 96 B |         2 | `Map ← .dependenciesMap ModuleRecord ← .module Object ← HashMapBucket ← .registry ModuleLoader ← Window` |
| 0.2% | 96 B |         2 | `.registry ModuleLoader ← Window`                                                                        |
| 0.1% | 48 B |         1 | `<root>`                                                                                                 |
| 0.1% | 48 B |         1 | `.dependenciesMap ModuleRecord ← .module Object ← HashMapBucket ← .registry ModuleLoader ← Window`       |
| 0.1% | 48 B |         1 | `Map ← .registry ModuleLoader ← Window`                                                                  |

##### `GetterSetter`

|    % |  Size | Instances | Path                      |
| ---: | ----: | --------: | ------------------------- |
| 0.6% | 288 B |         9 | `(GC root)`               |
| 0.1% |  32 B |         1 | `.__proto__ Object`       |
| 0.1% |  32 B |         1 | `.dotAll Object`          |
| 0.1% |  32 B |         1 | `.hasIndices Object`      |
| 0.1% |  32 B |         1 | `.byteLength ArrayBuffer` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

|     % |    Size | Instances | Constructor                  |
| ----: | ------: | --------: | ---------------------------- |
| 45.0% | 4.68 MB |    24,020 | `Structure`                  |
| 32.3% | 3.36 MB |    19,126 | `Function`                   |
| 24.3% | 2.53 MB |     5,787 | `Object`                     |
| 19.9% | 2.07 MB |     8,397 | `StructureRareData`          |
| 18.6% | 1.94 MB |    11,626 | `FunctionExecutable`         |
| 15.6% | 1.62 MB |        22 | `Window`                     |
| 11.5% | 1.19 MB |    24,875 | `DOMAttributeGetterSetter`   |
|  7.6% |  789 kB |       776 | `CSSStyleDeclaration`        |
|  5.9% |  613 kB |        11 | `JSGlobalLexicalEnvironment` |
|  5.2% |  545 kB |     1,375 | `E1`                         |
|  5.0% |  521 kB |     1,236 | `JSLexicalEnvironment`       |
|  5.0% |  515 kB |        11 | `InjectedScript`             |
|  4.2% |  441 kB |       122 | `FunctionCodeBlock`          |
|  4.1% |  425 kB |         9 | `JSModuleEnvironment`        |
|  3.8% |  394 kB |     3,123 | `UnlinkedFunctionExecutable` |
|  3.5% |  364 kB |     1,549 | `GetterSetter`               |
|  2.7% |  276 kB |     3,618 | `Array`                      |
|  2.4% |  254 kB |       761 | `Set`                        |
|  2.2% |  225 kB |     1,009 | `FunctionRareData`           |
|  2.1% |  219 kB |     4,615 | `PropertyTable`              |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `Structure`

|     % |    Size | Instances | Path                                                  |
| ----: | ------: | --------: | ----------------------------------------------------- |
| 14.9% |  696 kB |        10 | `(GC root)`                                           |
|  1.7% | 81.5 kB |         6 | `MuteButton ← <root>`                                 |
|  1.7% | 80.3 kB |         6 | `SkipForwardButton ← <root>`                          |
|  1.5% | 69.6 kB |         1 | `Window`                                              |
|  0.3% | 13.3 kB |         1 | `StructureRareData ← Structure ← MuteButton ← <root>` |

##### `Function`

|    % |    Size | Instances | Path                                                                   |
| ---: | ------: | --------: | ---------------------------------------------------------------------- |
| 5.6% |  188 kB |        11 | `.CommandLineAPI JSLexicalEnvironment ← JSLexicalEnvironment ← <root>` |
| 0.3% | 11.7 kB |         1 | `(GC root)`                                                            |
| 0.3% | 11.3 kB |         1 | `.from Function`                                                       |
| 0.3% | 10.9 kB |         1 | `.a JSModuleEnvironment`                                               |
| 0.3% | 8.68 kB |         1 | `._formattedTime Object`                                               |

##### `Object`

|    % |    Size | Instances | Path                            |
| ---: | ------: | --------: | ------------------------------- |
| 4.7% |  118 kB |         1 | `(GC root)`                     |
| 3.5% |   88 kB |         1 | `.json Object`                  |
| 3.4% |   85 kB |         1 | `.graph Object ← .json Object`  |
| 2.5% | 63.7 kB |         1 | `.ReaderArticleFinderJS Window` |
| 1.2% | 29.6 kB |         1 | `.meta Object`                  |

##### `StructureRareData`

|    % |    Size | Instances | Path                                                                                              |
| ---: | ------: | --------: | ------------------------------------------------------------------------------------------------- |
| 4.5% | 93.4 kB |         7 | `Structure ← MuteButton ← <root>`                                                                 |
| 3.8% | 79.2 kB |         6 | `Structure ← StructureRareData ← Structure ← MuteButton ← <root>`                                 |
| 3.8% | 79.2 kB |         6 | `Structure ← SkipForwardButton ← <root>`                                                          |
| 1.3% |   26 kB |         2 | `Structure ← <root>`                                                                              |
| 0.6% |   13 kB |         1 | `Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← MuteButton ← <root>` |

##### `FunctionExecutable`

|    % |    Size | Instances | Path                                         |
| ---: | ------: | --------: | -------------------------------------------- |
| 2.1% | 41.3 kB |         4 | `<root>`                                     |
| 0.6% | 11.9 kB |         1 | `(GC root)`                                  |
| 0.6% | 11.3 kB |         1 | `Function ← .from Function`                  |
| 0.4% | 8.65 kB |         1 | `Function ← ._formattedTime Object`          |
| 0.4% | 8.25 kB |         1 | `Function ← GetterSetter ← .children Object` |

##### `Window`

|      % |    Size | Instances | Path        |
| -----: | ------: | --------: | ----------- |
| 100.0% | 1.62 MB |        22 | `(GC root)` |

##### `DOMAttributeGetterSetter`

|     % | Size | Instances | Path                  |
| ----: | ---: | --------: | --------------------- |
| <0.1% | 48 B |         1 | `.screenX MouseEvent` |
| <0.1% | 48 B |         1 | `.screenY MouseEvent` |
| <0.1% | 48 B |         1 | `.clientX MouseEvent` |
| <0.1% | 48 B |         1 | `.clientY MouseEvent` |
| <0.1% | 48 B |         1 | `.ctrlKey MouseEvent` |

##### `CSSStyleDeclaration`

|     % |    Size | Instances | Path                       |
| ----: | ------: | --------: | -------------------------- |
| 88.1% |  695 kB |        10 | `(GC root)`                |
|  8.8% | 69.5 kB |         1 | `Structure ← Window`       |
|  3.1% | 24.4 kB |       764 | `<root>`                   |
| <0.1% |    32 B |         1 | `.l0 JSLexicalEnvironment` |

##### `JSGlobalLexicalEnvironment`

|     % |    Size | Instances | Path        |
| ----: | ------: | --------: | ----------- |
| 98.9% |  606 kB |        10 | `(GC root)` |
|  1.1% | 6.94 kB |         1 | `Window`    |

##### `E1`

|     % |    Size | Instances | Path                                                |
| ----: | ------: | --------: | --------------------------------------------------- |
| 25.5% |  139 kB |         1 | `(GC root)`                                         |
| 24.5% |  133 kB |         1 | `.sibling E1`                                       |
| 13.9% | 75.7 kB |         1 | `.child E1 ← .sibling E1`                           |
| 13.8% | 75.4 kB |         1 | `.child E1 ← .child E1 ← .sibling E1`               |
| 13.4% | 73.2 kB |         1 | `.sibling E1 ← .child E1 ← .child E1 ← .sibling E1` |

##### `JSLexicalEnvironment`

|     % |    Size | Instances | Path                                 |
| ----: | ------: | --------: | ------------------------------------ |
| 40.3% |  210 kB |        11 | `<root>`                             |
| 40.1% |  209 kB |        11 | `JSLexicalEnvironment ← <root>`      |
| 38.0% |  198 kB |         2 | `(GC root)`                          |
|  1.8% |  9.6 kB |         1 | `JSLexicalEnvironment`               |
|  1.3% | 6.64 kB |         1 | `Function ← .Qn JSModuleEnvironment` |

##### `InjectedScript`

|      % |   Size | Instances | Path     |
| -----: | -----: | --------: | -------- |
| 100.0% | 515 kB |        11 | `<root>` |

##### `FunctionCodeBlock`

|     % |    Size | Instances | Path                                                     |
| ----: | ------: | --------: | -------------------------------------------------------- |
| 16.4% | 72.2 kB |         2 | `(GC root)`                                              |
|  9.3% | 41.2 kB |         1 | `<root>`                                                 |
|  2.5% | 11.1 kB |         1 | `FunctionExecutable ← <root>`                            |
|  2.5% | 10.9 kB |         1 | `FunctionExecutable ← Function ← .from Function`         |
|  1.9% | 8.52 kB |         1 | `FunctionExecutable ← Function ← ._formattedTime Object` |

##### `JSModuleEnvironment`

|      % |   Size | Instances | Path                                                                              |
| -----: | -----: | --------: | --------------------------------------------------------------------------------- |
| 100.0% | 425 kB |         8 | `(GC root)`                                                                       |
|  <0.1% |  128 B |         1 | `ModuleRecord ← .module Object ← HashMapBucket ← .registry ModuleLoader ← Window` |

##### `UnlinkedFunctionExecutable`

|    % |    Size | Instances | Path                                                        |
| ---: | ------: | --------: | ----------------------------------------------------------- |
| 9.1% | 35.7 kB |        36 | `(GC root)`                                                 |
| 0.3% | 1.09 kB |         1 | `FunctionExecutable ← FunctionRareData ← Function ← <root>` |
| 0.2% |   667 B |         1 | `FunctionExecutable ← Function ← <root>`                    |
| 0.2% |   614 B |         1 | `FunctionExecutable ← FunctionRareData ← Function`          |
| 0.2% |   604 B |         1 | `FunctionExecutable ← Function ← JSModuleEnvironment`       |

##### `GetterSetter`

|    % |    Size | Instances | Path                                |
| ---: | ------: | --------: | ----------------------------------- |
| 2.3% | 8.31 kB |         1 | `.children Object`                  |
| 1.0% | 3.56 kB |         1 | `.faded Object`                     |
| 0.6% | 2.02 kB |         1 | `.needsLayout Object`               |
| 0.3% | 1.16 kB |         1 | `._canShowDurationTimeLabel Object` |
| 0.3% |   953 B |         1 | `.x Object`                         |

##### `Array`

|     % |    Size | Instances | Path                                                                       |
| ----: | ------: | --------: | -------------------------------------------------------------------------- |
| 16.1% | 44.4 kB |         1 | `._elementsWithCachedBoundingRects Object ← .ReaderArticleFinderJS Window` |
|  8.9% | 24.6 kB |         1 | `.vertices Object ← .graph Object ← .json Object`                          |
|  8.8% | 24.2 kB |         1 | `.edges Object ← .graph Object ← .json Object`                             |
|  8.4% | 23.1 kB |         1 | `.graph.vertices Object ← .values Object ← .meta Object`                   |
|  3.2% | 8.94 kB |         1 | `.positions Object ← .layout Object ← .graph Object ← .json Object`        |

##### `Set`

|    % |    Size | Instances | Path                                          |
| ---: | ------: | --------: | --------------------------------------------- |
| 4.1% | 10.4 kB |         1 | `.Ry JSLexicalEnvironment`                    |
| 3.1% | 7.77 kB |         1 | `.zi JSLexicalEnvironment`                    |
| 1.7% | 4.37 kB |         1 | `(GC root)`                                   |
| 1.4% |  3.6 kB |         1 | `.ud JSLexicalEnvironment`                    |
| 1.3% | 3.42 kB |         1 | `.__reactEvents$ej1ne67lklu HTMLAudioElement` |

##### `FunctionRareData`

|    % |    Size | Instances | Path                                  |
| ---: | ------: | --------: | ------------------------------------- |
| 1.1% | 2.56 kB |         5 | `Function ← JSModuleEnvironment`      |
| 1.0% | 2.32 kB |         3 | `Function ← <root>`                   |
| 0.6% | 1.33 kB |         2 | `Function`                            |
| 0.2% |   512 B |         1 | `Function ← .Xn JSLexicalEnvironment` |
| 0.2% |   512 B |         1 | `Function ← .Ct JSModuleEnvironment`  |

##### `PropertyTable`

|     % | Size | Instances | Path                                                                                                            |
| ----: | ---: | --------: | --------------------------------------------------------------------------------------------------------------- |
| <0.1% | 48 B |         1 | `(GC root)`                                                                                                     |
| <0.1% | 48 B |         1 | `Structure ← Object ← .CollectionMode Function ← <root>`                                                        |
| <0.1% | 48 B |         1 | `Structure ← Function ← <root>`                                                                                 |
| <0.1% | 48 B |         1 | `Structure ← Object ← .homeObject Function ← .CallFrameProxy Function ← <root>`                                 |
| <0.1% | 48 B |         1 | `Structure ← Object ← .methods Function ← .CommandLineAPI JSLexicalEnvironment ← JSLexicalEnvironment ← <root>` |

## Largest strings

Strings ranked by bytes allocated for them.

|     % |    Size | Path                                                                                                                                                                                                                                                                                              |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  0.7% | 75.1 kB | `(GC root)`                                                                                                                                                                                                                                                                                       |
|  0.6% | 59.6 kB | `(GC root)`                                                                                                                                                                                                                                                                                       |
| <0.1% |   902 B | `.__html Object ← .dangerouslySetInnerHTML Object`                                                                                                                                                                                                                                                |
| <0.1% |   902 B | `.__html Object ← .dangerouslySetInnerHTML Object ← .pendingProps E1`                                                                                                                                                                                                                             |
| <0.1% |   869 B | `(GC root)`                                                                                                                                                                                                                                                                                       |
| <0.1% |   760 B | `.__html Object ← .dangerouslySetInnerHTML Object ← .memoizedProps E1`                                                                                                                                                                                                                            |
| <0.1% |   760 B | `.__html Object ← .dangerouslySetInnerHTML Object`                                                                                                                                                                                                                                                |
| <0.1% |   500 B | `.key E1 ← [23] Array ← .deletions E1`                                                                                                                                                                                                                                                            |
| <0.1% |   498 B | `.key E1 ← [4] Array ← .deletions E1`                                                                                                                                                                                                                                                             |
| <0.1% |   496 B | `.key E1 ← .sibling E1 ← .sibling E1 ← .sibling E1 ← .sibling E1 ← .sibling E1 ← .sibling E1 ← .sibling E1 ← .sibling E1 ← .sibling E1 ← .sibling E1 ← .sibling E1 ← .sibling E1 ← .sibling E1 ← .sibling E1 ← .sibling E1 ← .sibling E1 ← .sibling E1 ← .sibling E1 ← .sibling E1 ← .sibling E1` |
| <0.1% |   494 B | `.key E1 ← .sibling E1 ← .sibling E1 ← .sibling E1 ← .sibling E1 ← .sibling E1`                                                                                                                                                                                                                   |
| <0.1% |   484 B | `.key E1 ← [1] Array ← .deletions E1`                                                                                                                                                                                                                                                             |
| <0.1% |   480 B | `.key E1 ← .sibling E1`                                                                                                                                                                                                                                                                           |
| <0.1% |   468 B | `.key E1 ← [2] Array ← .deletions E1`                                                                                                                                                                                                                                                             |
| <0.1% |   440 B | `.graph Object ← .json Object`                                                                                                                                                                                                                                                                    |
| <0.1% |   418 B | `.description Object ← .post Object ← .json Object`                                                                                                                                                                                                                                               |
| <0.1% |   418 B | `.description Object ← .post Object ← .json Object`                                                                                                                                                                                                                                               |
| <0.1% |   394 B | `JSModuleEnvironment`                                                                                                                                                                                                                                                                             |
| <0.1% |   372 B | `(GC root)`                                                                                                                                                                                                                                                                                       |
| <0.1% |   344 B | `.font-family Object ← <root>`                                                                                                                                                                                                                                                                    |

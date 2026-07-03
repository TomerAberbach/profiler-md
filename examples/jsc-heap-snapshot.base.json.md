# Heap snapshot

Allocated 9.77 MB across 142,769 nodes and 431,899 edges.

| Category |     % |    Size |  Nodes |
| -------- | ----: | ------: | -----: |
| internal | 54.2% | 5.29 MB | 70,867 |
| code     | 19.0% | 1.86 MB | 15,594 |
| object   |  7.6% |  745 kB |  8,886 |
| closure  |  7.0% |  679 kB | 19,236 |
| string   |  5.0% |  492 kB | 14,640 |
| native   |  4.3% |  424 kB |  8,464 |
| built-in |  2.1% |  203 kB |  1,013 |
| array    |  0.7% | 64.9 kB |  3,731 |
| regexp   |  0.1% | 6.14 kB |    128 |
| unknown  | <0.1% | 4.24 kB |    120 |
| symbol   | <0.1% |  1.1 kB |     67 |
| number   | <0.1% |   383 B |     11 |
| bigint   | <0.1% |   238 B |     12 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

|     % |    Size | Instances | Constructor                  |
| ----: | ------: | --------: | ---------------------------- |
| 27.6% |  2.7 MB |    24,070 | `Structure`                  |
| 15.2% | 1.48 MB |    11,598 | `FunctionExecutable`         |
| 12.2% | 1.19 MB |    24,843 | `DOMAttributeGetterSetter`   |
|  8.4% |  817 kB |     8,506 | `StructureRareData`          |
|  6.9% |  674 kB |    19,091 | `Function`                   |
|  3.2% |  314 kB |     5,787 | `Object`                     |
|  3.2% |  308 kB |     1,375 | `E1`                         |
|  3.0% |  297 kB |     3,093 | `UnlinkedFunctionExecutable` |
|  1.7% |  170 kB |       761 | `Set`                        |
|  1.7% |  164 kB |     3,427 | `PropertyTable`              |
|  1.2% |  114 kB |     3,559 | `CustomGetterSetter`         |
|  0.9% | 83.2 kB |     1,697 | `HTMLDivElement`             |
|  0.8% | 80.7 kB |     1,009 | `FunctionRareData`           |
|  0.8% | 74.2 kB |     1,228 | `JSLexicalEnvironment`       |
|  0.7% |   69 kB |       863 | `NativeExecutable`           |
|  0.6% | 58.4 kB |     3,618 | `Array`                      |
|  0.6% | 55.6 kB |     1,596 | `HashMapBucket`              |
|  0.5% | 49.6 kB |     1,549 | `GetterSetter`               |
|  0.4% | 40.8 kB |       775 | `CSSStyleDeclaration`        |
|  0.4% |   40 kB |        22 | `Window`                     |

#### Instances

Instances ranked by contribution to each constructor's self size.

##### `Structure`

|     % |    Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----: | ------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  0.2% | 4.59 kB |        41 | `<root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <0.1% |   112 B |         1 | `StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← Slider ← <root>` |
| <0.1% |   112 B |         1 | `StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← Slider ← <root>`                                 |
| <0.1% |   112 B |         1 | `TrackEvent ← Structure ← Window`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <0.1% |   112 B |         1 | `Window`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

##### `FunctionExecutable`

|     % |  Size | Instances | Path                          |
| ----: | ----: | --------: | ----------------------------- |
| <0.1% | 640 B |         5 | `Function`                    |
| <0.1% | 128 B |         1 | `Function ← .concat Array`    |
| <0.1% | 128 B |         1 | `Function ← .fill Array`      |
| <0.1% | 128 B |         1 | `Function ← .every Array`     |
| <0.1% | 128 B |         1 | `FunctionRareData ← Function` |

##### `DOMAttributeGetterSetter`

|     % | Size | Instances | Path                  |
| ----: | ---: | --------: | --------------------- |
| <0.1% | 48 B |         1 | `.nodeType Node`      |
| <0.1% | 48 B |         1 | `.nodeName Node`      |
| <0.1% | 48 B |         1 | `.baseURI Node`       |
| <0.1% | 48 B |         1 | `.isConnected Node`   |
| <0.1% | 48 B |         1 | `.ownerDocument Node` |

##### `StructureRareData`

|     % | Size | Instances | Path                                   |
| ----: | ---: | --------: | -------------------------------------- |
| <0.1% | 96 B |         1 | `Structure ← Array Iterator ← Window`  |
| <0.1% | 96 B |         1 | `Structure ← Array`                    |
| <0.1% | 96 B |         1 | `Structure ← Map Iterator ← Window`    |
| <0.1% | 96 B |         1 | `Structure ← Set Iterator ← Window`    |
| <0.1% | 96 B |         1 | `Structure ← String Iterator ← Window` |

##### `Function`

|     % | Size | Instances | Path                      |
| ----: | ---: | --------: | ------------------------- |
| <0.1% | 98 B |         1 | `.qt JSModuleEnvironment` |
| <0.1% | 98 B |         1 | `.Jt JSModuleEnvironment` |
| <0.1% | 97 B |         1 | `.Ue JSModuleEnvironment` |
| <0.1% | 97 B |         1 | `.Wt JSModuleEnvironment` |
| <0.1% | 97 B |         1 | `.er JSModuleEnvironment` |

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

|     % |    Size | Instances | Path                                                        |
| ----: | ------: | --------: | ----------------------------------------------------------- |
|  7.3% | 21.6 kB |       225 | `(GC root)`                                                 |
|  0.7% | 2.11 kB |        22 | `FunctionExecutable ← Function ← Window`                    |
|  0.1% |   192 B |         2 | `FunctionExecutable ← FunctionRareData ← Function ← Window` |
| <0.1% |    96 B |         1 | `FunctionExecutable ← Function ← .all Function`             |
| <0.1% |    96 B |         1 | `FunctionExecutable ← Function ← .streamController Object`  |

##### `Set`

|    % |    Size | Instances | Path                                          |
| ---: | ------: | --------: | --------------------------------------------- |
| 7.8% | 13.2 kB |         9 | `.__reactEvents$ej1ne67lklu HTMLAudioElement` |
| 2.9% | 4.98 kB |         1 | `.zi JSLexicalEnvironment`                    |
| 2.6% |  4.5 kB |         1 | `.Ry JSLexicalEnvironment`                    |
| 1.3% | 2.23 kB |         1 | `.ud JSLexicalEnvironment`                    |
| 0.8% |  1.4 kB |         1 | `.It JSModuleEnvironment`                     |

##### `PropertyTable`

|     % |  Size | Instances | Path                                           |
| ----: | ----: | --------: | ---------------------------------------------- |
|  0.1% | 240 B |         5 | `(GC root)`                                    |
| <0.1% |  48 B |         1 | `Structure ← Structure ← Structure ← Function` |
| <0.1% |  48 B |         1 | `Structure ← Function ← Window`                |
| <0.1% |  48 B |         1 | `Structure ← Object ← <root>`                  |
| <0.1% |  48 B |         1 | `Structure ← Object`                           |

##### `CustomGetterSetter`

|     % | Size | Instances | Path                     |
| ----: | ---: | --------: | ------------------------ |
| <0.1% | 32 B |         1 | `.arguments Function`    |
| <0.1% | 32 B |         1 | `.caller Function`       |
| <0.1% | 32 B |         1 | `.GPUBuffer Window`      |
| <0.1% | 32 B |         1 | `.GPUBufferUsage Window` |
| <0.1% | 32 B |         1 | `.GPUColorWrite Window`  |

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
| 13.6% | 10.1 kB |         9 | `(GC root)`                           |
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

##### `CSSStyleDeclaration`

|     % |    Size | Instances | Path                       |
| ----: | ------: | --------: | -------------------------- |
| 59.9% | 24.4 kB |       763 | `<root>`                   |
| 36.4% | 14.9 kB |        10 | `(GC root)`                |
|  3.6% | 1.49 kB |         1 | `Structure ← Window`       |
|  0.1% |    32 B |         1 | `.l0 JSLexicalEnvironment` |

##### `Window`

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 40 kB |        22 | `(GC root)` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

|     % |    Size | Instances | Constructor                  |
| ----: | ------: | --------: | ---------------------------- |
| 47.5% | 4.64 MB |    24,070 | `Structure`                  |
| 33.5% | 3.27 MB |    19,091 | `Function`                   |
| 25.5% |  2.5 MB |     5,787 | `Object`                     |
| 21.4% | 2.09 MB |     8,506 | `StructureRareData`          |
| 17.2% | 1.68 MB |    11,598 | `FunctionExecutable`         |
| 16.4% |  1.6 MB |        22 | `Window`                     |
| 12.2% | 1.19 MB |    24,843 | `DOMAttributeGetterSetter`   |
|  8.1% |  789 kB |       775 | `CSSStyleDeclaration`        |
|  6.2% |  608 kB |        11 | `JSGlobalLexicalEnvironment` |
|  5.7% |  557 kB |     1,228 | `JSLexicalEnvironment`       |
|  5.6% |  545 kB |     1,375 | `E1`                         |
|  5.2% |  507 kB |        11 | `InjectedScript`             |
|  4.3% |  421 kB |         9 | `JSModuleEnvironment`        |
|  3.6% |  350 kB |     1,549 | `GetterSetter`               |
|  3.0% |  297 kB |     3,093 | `UnlinkedFunctionExecutable` |
|  2.8% |  276 kB |     3,618 | `Array`                      |
|  2.6% |  251 kB |       761 | `Set`                        |
|  2.3% |  228 kB |     1,009 | `FunctionRareData`           |
|  1.7% |  170 kB |         9 | `MacOSInlineMediaControls`   |
|  1.7% |  162 kB |     3,427 | `PropertyTable`              |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `Structure`

|     % |    Size | Instances | Path                                                  |
| ----: | ------: | --------: | ----------------------------------------------------- |
| 15.0% |  696 kB |        10 | `(GC root)`                                           |
|  2.1% | 95.1 kB |         7 | `MuteButton ← <root>`                                 |
|  2.0% | 93.6 kB |         7 | `SkipForwardButton ← <root>`                          |
|  1.5% | 69.6 kB |         1 | `Window`                                              |
|  0.3% | 13.3 kB |         1 | `StructureRareData ← Structure ← MuteButton ← <root>` |

##### `Function`

|    % |    Size | Instances | Path                                                                   |
| ---: | ------: | --------: | ---------------------------------------------------------------------- |
| 5.7% |  187 kB |        11 | `.CommandLineAPI JSLexicalEnvironment ← JSLexicalEnvironment ← <root>` |
| 0.3% | 10.7 kB |         1 | `.a JSModuleEnvironment`                                               |
| 0.2% | 6.67 kB |         1 | `JSModuleEnvironment`                                                  |
| 0.2% | 6.27 kB |         1 | `<root>`                                                               |
| 0.2% | 5.72 kB |         1 | `.Ct JSModuleEnvironment`                                              |

##### `Object`

|    % |    Size | Instances | Path                            |
| ---: | ------: | --------: | ------------------------------- |
| 4.7% |  118 kB |         1 | `(GC root)`                     |
| 3.5% | 87.8 kB |         1 | `.json Object`                  |
| 3.4% | 84.7 kB |         1 | `.graph Object ← .json Object`  |
| 2.5% | 63.5 kB |         1 | `.ReaderArticleFinderJS Window` |
| 1.2% | 29.5 kB |         1 | `.meta Object`                  |

##### `StructureRareData`

|    % |    Size | Instances | Path                                                                                              |
| ---: | ------: | --------: | ------------------------------------------------------------------------------------------------- |
| 5.1% |  107 kB |         8 | `Structure ← MuteButton ← <root>`                                                                 |
| 4.4% | 92.4 kB |         7 | `Structure ← StructureRareData ← Structure ← MuteButton ← <root>`                                 |
| 4.4% | 92.4 kB |         7 | `Structure ← SkipForwardButton ← <root>`                                                          |
| 0.6% |   13 kB |         1 | `Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← MuteButton ← <root>` |
| 0.6% |   13 kB |         1 | `Structure ← StructureRareData ← Structure ← SkipForwardButton ← <root>`                          |

##### `FunctionExecutable`

|     % |    Size | Instances | Path                                   |
| ----: | ------: | --------: | -------------------------------------- |
|  0.3% | 4.93 kB |        22 | `Function ← Window`                    |
| <0.1% |   448 B |         2 | `FunctionRareData ← Function ← Window` |
| <0.1% |   336 B |         1 | `Function ← .streamController Object`  |
| <0.1% |   224 B |         1 | `Function ← .all Function`             |
| <0.1% |   224 B |         1 | `Function ← .create Object`            |

##### `Window`

|      % |   Size | Instances | Path        |
| -----: | -----: | --------: | ----------- |
| 100.0% | 1.6 MB |        22 | `(GC root)` |

##### `DOMAttributeGetterSetter`

|     % | Size | Instances | Path                  |
| ----: | ---: | --------: | --------------------- |
| <0.1% | 48 B |         1 | `.nodeType Node`      |
| <0.1% | 48 B |         1 | `.nodeName Node`      |
| <0.1% | 48 B |         1 | `.baseURI Node`       |
| <0.1% | 48 B |         1 | `.isConnected Node`   |
| <0.1% | 48 B |         1 | `.ownerDocument Node` |

##### `CSSStyleDeclaration`

|     % |    Size | Instances | Path                       |
| ----: | ------: | --------: | -------------------------- |
| 88.1% |  695 kB |        10 | `(GC root)`                |
|  8.8% | 69.5 kB |         1 | `Structure ← Window`       |
|  3.1% | 24.4 kB |       763 | `<root>`                   |
| <0.1% |    32 B |         1 | `.l0 JSLexicalEnvironment` |

##### `JSGlobalLexicalEnvironment`

|     % |    Size | Instances | Path        |
| ----: | ------: | --------: | ----------- |
| 98.9% |  601 kB |        10 | `(GC root)` |
|  1.1% | 6.79 kB |         1 | `Window`    |

##### `JSLexicalEnvironment`

|     % |    Size | Instances | Path                             |
| ----: | ------: | --------: | -------------------------------- |
| 43.7% |  244 kB |         2 | `(GC root)`                      |
| 37.6% |  210 kB |        11 | `<root>`                         |
| 37.4% |  208 kB |        11 | `JSLexicalEnvironment ← <root>`  |
|  1.7% | 9.55 kB |         1 | `JSLexicalEnvironment`           |
|  1.2% | 6.64 kB |         1 | `Function ← JSModuleEnvironment` |

##### `E1`

|     % |    Size | Instances | Path                                                  |
| ----: | ------: | --------: | ----------------------------------------------------- |
| 26.0% |  141 kB |         1 | `(GC root)`                                           |
| 25.9% |  141 kB |         1 | `.sibling E1`                                         |
| 25.5% |  139 kB |         1 | `.sibling E1 ← .sibling E1`                           |
| 24.5% |  133 kB |         1 | `.sibling E1 ← .sibling E1 ← .sibling E1`             |
| 13.9% | 75.7 kB |         1 | `.child E1 ← .sibling E1 ← .sibling E1 ← .sibling E1` |

##### `InjectedScript`

|      % |   Size | Instances | Path     |
| -----: | -----: | --------: | -------- |
| 100.0% | 507 kB |        11 | `<root>` |

##### `JSModuleEnvironment`

|      % |   Size | Instances | Path                                                                              |
| -----: | -----: | --------: | --------------------------------------------------------------------------------- |
| 100.0% | 421 kB |         8 | `(GC root)`                                                                       |
|  <0.1% |  128 B |         1 | `ModuleRecord ← .module Object ← HashMapBucket ← .registry ModuleLoader ← Window` |

##### `GetterSetter`

|    % |  Size | Instances | Path                                                               |
| ---: | ----: | --------: | ------------------------------------------------------------------ |
| 0.2% | 546 B |         1 | `.basename Object ← .prototype Function ← .Ct JSModuleEnvironment` |
| 0.2% | 546 B |         1 | `.dirname Object ← .prototype Function ← .Ct JSModuleEnvironment`  |
| 0.2% | 546 B |         1 | `.extname Object ← .prototype Function ← .Ct JSModuleEnvironment`  |
| 0.2% | 546 B |         1 | `.path Object ← .prototype Function ← .Ct JSModuleEnvironment`     |
| 0.2% | 546 B |         1 | `.stem Object ← .prototype Function ← .Ct JSModuleEnvironment`     |

##### `UnlinkedFunctionExecutable`

|     % |    Size | Instances | Path                                                        |
| ----: | ------: | --------: | ----------------------------------------------------------- |
|  7.3% | 21.6 kB |       225 | `(GC root)`                                                 |
|  0.7% | 2.11 kB |        22 | `FunctionExecutable ← Function ← Window`                    |
|  0.1% |   192 B |         2 | `FunctionExecutable ← FunctionRareData ← Function ← Window` |
| <0.1% |    96 B |         1 | `FunctionExecutable ← Function ← .all Function`             |
| <0.1% |    96 B |         1 | `FunctionExecutable ← Function ← .streamController Object`  |

##### `Array`

|     % |    Size | Instances | Path                                                                       |
| ----: | ------: | --------: | -------------------------------------------------------------------------- |
| 16.1% | 44.4 kB |         1 | `._elementsWithCachedBoundingRects Object ← .ReaderArticleFinderJS Window` |
|  8.9% | 24.4 kB |         1 | `.vertices Object ← .graph Object ← .json Object`                          |
|  8.8% | 24.2 kB |         1 | `.edges Object ← .graph Object ← .json Object`                             |
|  8.4% | 23.1 kB |         1 | `.graph.vertices Object ← .values Object ← .meta Object`                   |
|  3.2% | 8.94 kB |         1 | `.positions Object ← .layout Object ← .graph Object ← .json Object`        |

##### `Set`

|     % |    Size | Instances | Path                                          |
| ----: | ------: | --------: | --------------------------------------------- |
| 12.2% | 30.8 kB |         9 | `.__reactEvents$ej1ne67lklu HTMLAudioElement` |
|  4.1% | 10.4 kB |         1 | `.Ry JSLexicalEnvironment`                    |
|  3.1% | 7.77 kB |         1 | `.zi JSLexicalEnvironment`                    |
|  1.4% |  3.6 kB |         1 | `.ud JSLexicalEnvironment`                    |
|  1.2% | 2.97 kB |         1 | `.It JSModuleEnvironment`                     |

##### `FunctionRareData`

|    % |    Size | Instances | Path                                  |
| ---: | ------: | --------: | ------------------------------------- |
| 0.7% | 1.54 kB |         3 | `Function ← JSModuleEnvironment`      |
| 0.4% | 1.02 kB |         2 | `Function ← <root>`                   |
| 0.2% |   512 B |         1 | `Function ← .Xn JSLexicalEnvironment` |
| 0.2% |   512 B |         1 | `Function`                            |
| 0.2% |   512 B |         1 | `Function ← .br JSModuleEnvironment`  |

##### `MacOSInlineMediaControls`

|      % |   Size | Instances | Path     |
| -----: | -----: | --------: | -------- |
| 100.0% | 170 kB |         9 | `<root>` |

##### `PropertyTable`

|     % |  Size | Instances | Path                                           |
| ----: | ----: | --------: | ---------------------------------------------- |
|  0.1% | 240 B |         5 | `(GC root)`                                    |
| <0.1% |  48 B |         1 | `Structure ← Structure ← Structure ← Function` |
| <0.1% |  48 B |         1 | `Structure ← Function ← Window`                |
| <0.1% |  48 B |         1 | `Structure ← Object ← <root>`                  |
| <0.1% |  48 B |         1 | `Structure ← Object`                           |

## Largest strings

Strings ranked by bytes allocated for them.

|     % |    Size | Path                                                                                                                                                                                                                                                                                              |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  0.8% | 75.1 kB | `(GC root)`                                                                                                                                                                                                                                                                                       |
|  0.6% | 59.6 kB | `(GC root)`                                                                                                                                                                                                                                                                                       |
| <0.1% |   902 B | `.__html Object ← .dangerouslySetInnerHTML Object`                                                                                                                                                                                                                                                |
| <0.1% |   902 B | `.__html Object ← .dangerouslySetInnerHTML Object ← .memoizedProps E1`                                                                                                                                                                                                                            |
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
| <0.1% |   394 B | `.Yn JSModuleEnvironment`                                                                                                                                                                                                                                                                         |
| <0.1% |   372 B | `(GC root)`                                                                                                                                                                                                                                                                                       |
| <0.1% |   344 B | `.font-family Object ← <root>`                                                                                                                                                                                                                                                                    |

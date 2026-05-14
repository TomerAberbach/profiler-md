# Heap snapshot

Allocated 6.61 MB across 80,790 nodes and 298,576 edges.

| Category |     % |    Size |  Nodes |
| -------- | ----: | ------: | -----: |
| object   | 41.4% | 2.74 MB | 26,535 |
| internal | 17.4% | 1.15 MB | 22,155 |
| built-in | 13.7% |  905 kB |  1,736 |
| code     | 10.6% |  703 kB |  6,293 |
| string   |  9.4% |  620 kB |  8,747 |
| closure  |  3.3% |  216 kB |  5,815 |
| native   |  2.8% |  182 kB |  3,868 |
| array    |  1.4% | 92.6 kB |  5,510 |
| regexp   |  0.1% | 4.13 kB |     86 |
| symbol   |  0.0% |   646 B |     40 |
| bigint   |  0.0% |    76 B |      3 |
| number   |  0.0% |    68 B |      2 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

|     % |    Size | Instances | Constructor                  |
| ----: | ------: | --------: | ---------------------------- |
| 25.9% | 1.71 MB |     7,633 | `E1`                         |
| 15.5% | 1.02 MB |    18,854 | `Object`                     |
| 11.5% |  763 kB |     1,439 | `Set`                        |
|  6.2% |  410 kB |    11,973 | `HashMapBucket`              |
|  5.7% |  374 kB |     2,923 | `FunctionExecutable`         |
|  5.6% |  371 kB |     3,310 | `Structure`                  |
|  3.8% |  252 kB |     2,626 | `UnlinkedFunctionExecutable` |
|  3.2% |  213 kB |     5,724 | `Function`                   |
|  2.1% |  138 kB |       221 | `Map`                        |
|  1.9% |  128 kB |     2,658 | `DOMAttributeGetterSetter`   |
|  1.7% |  111 kB |     1,937 | `JSLexicalEnvironment`       |
|  1.3% | 86.8 kB |     5,418 | `Array`                      |
|  0.9% | 56.6 kB |       708 | `NativeExecutable`           |
|  0.8% | 51.3 kB |     1,027 | `HTMLDivElement`             |
|  0.7% | 43.1 kB |       449 | `StructureRareData`          |
|  0.4% | 29.5 kB |       921 | `Text`                       |
|  0.3% | 21.9 kB |       456 | `PropertyTable`              |
|  0.3% | 20.4 kB |       638 | `CustomGetterSetter`         |
|  0.3% | 18.6 kB |       290 | `SymbolTable`                |
|  0.2% |   16 kB |       320 | `HTMLAnchorElement`          |

#### Instances

Instances ranked by contribution to each constructor's self size.

##### `E1`

|    % |    Size | Instances | Path                                                      |
| ---: | ------: | --------: | --------------------------------------------------------- |
| 0.1% | 1.34 kB |         6 | `(GC root)`                                               |
| 0.0% |   224 B |         1 | `.constructor Object`                                     |
| 0.0% |   224 B |         1 | `.constructor E1 ← .constructor Object`                   |
| 0.0% |   224 B |         1 | `.constructor E1 ← .constructor E1 ← .constructor Object` |
| 0.0% |   224 B |         1 | `.children E1`                                            |

##### `Object`

|    % |    Size | Instances | Path                                                                          |
| ---: | ------: | --------: | ----------------------------------------------------------------------------- |
| 0.1% | 1.32 kB |         4 | `(GC root)`                                                                   |
| 0.1% |   552 B |         2 | `.constructor Object`                                                         |
| 0.0% |   249 B |         1 | `.CSSUnitValue string`                                                        |
| 0.0% |   234 B |         1 | `.constructor Object ← .e Object ← .constructor Object ← .constructor Object` |
| 0.0% |   224 B |         1 | `.constructor Object ← .constructor Object`                                   |

##### `Set`

|    % |    Size | Instances | Path                                  |
| ---: | ------: | --------: | ------------------------------------- |
| 0.7% | 4.98 kB |         1 | `.constructor Set ← .imports Set`     |
| 0.6% | 4.88 kB |         2 | `(GC root)`                           |
| 0.6% |  4.5 kB |         1 | `.constructor Set`                    |
| 0.3% | 2.65 kB |         1 | `.constructor JSLexicalEnvironment`   |
| 0.2% | 1.69 kB |         1 | `.constructor Set ← .constructor Set` |

##### `HashMapBucket`

|    % |  Size | Instances | Path                                                                                                                                                     |
| ---: | ----: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.1% | 240 B |         5 | `(GC root)`                                                                                                                                              |
| 0.0% |  48 B |         1 | `.constructor DOMTokenList ← .entries History`                                                                                                           |
| 0.0% |  48 B |         1 | `.name DOMTokenList ← .entries History`                                                                                                                  |
| 0.0% |  48 B |         1 | `.getOwnPrivatePropertySymbols TransformStreamDefaultController ← .constructor Map ← .constructor WritableStreamDefaultController ← .constructor <root>` |
| 0.0% |  48 B |         1 | `.Symbol.asyncIterator NativeExecutable ← .constructor string`                                                                                           |

##### `FunctionExecutable`

|    % |  Size | Instances | Path                                                                                                                             |
| ---: | ----: | --------: | -------------------------------------------------------------------------------------------------------------------------------- |
| 0.2% | 640 B |         5 | `(GC root)`                                                                                                                      |
| 0.1% | 512 B |         4 | `.constructor <root>`                                                                                                            |
| 0.0% | 128 B |         1 | `.constructor UnlinkedFunctionExecutable ← .homeObject PropertyTable ← .constructor <root>`                                      |
| 0.0% | 128 B |         1 | `.5.1.tags UnlinkedFunctionExecutable ← [1] UnlinkedFunctionExecutable ← .graph.vertices string ← .values string ← .meta string` |
| 0.0% | 128 B |         1 | `.constructor FunctionExecutable ← .constructor UnlinkedFunctionExecutable ← .homeObject PropertyTable ← .constructor <root>`    |

##### `Structure`

|    % |    Size | Instances | Path                                                                                  |
| ---: | ------: | --------: | ------------------------------------------------------------------------------------- |
| 2.1% | 7.62 kB |        68 | `(GC root)`                                                                           |
| 0.0% |   112 B |         1 | `.constructor JSLexicalEnvironment ← .__reactEvents$0jkzyl5db3e JSLexicalEnvironment` |
| 0.0% |   112 B |         1 | `.constructor JSLexicalEnvironment ← .create JSLexicalEnvironment`                    |
| 0.0% |   112 B |         1 | `.__reactEvents$0jkzyl5db3e Object`                                                   |
| 0.0% |   112 B |         1 | `.constructor Structure ← .__reactEvents$0jkzyl5db3e Object`                          |

##### `UnlinkedFunctionExecutable`

|    % |  Size | Instances | Path                                                                                                                                     |
| ---: | ----: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 0.2% | 480 B |         5 | `(GC root)`                                                                                                                              |
| 0.1% | 288 B |         3 | `.constructor <root>`                                                                                                                    |
| 0.0% |  96 B |         1 | `.115.1.tags string ← [1] string ← .graph.edges string ← .values string ← .meta string`                                                  |
| 0.0% |  96 B |         1 | `.115.1.hrefs string ← [1] string ← .graph.edges string ← .values string ← .meta string`                                                 |
| 0.0% |  96 B |         1 | `.constructor NativeExecutable ← .createIterableWithoutPrototypeFromArguments string ← .constructor PropertyTable ← .constructor <root>` |

##### `Function`

|    % |  Size | Instances | Path                                    |
| ---: | ----: | --------: | --------------------------------------- |
| 0.3% | 579 B |         6 | `(GC root)`                             |
| 0.0% |  97 B |         1 | `.name Function`                        |
| 0.0% |  97 B |         1 | `.constructor Date`                     |
| 0.0% |  96 B |         1 | `.constructor SymbolTable ← .Cc Object` |
| 0.0% |  96 B |         1 | `.constructor Function`                 |

##### `Map`

|     % |    Size | Instances | Path                                                                                                              |
| ----: | ------: | --------: | ----------------------------------------------------------------------------------------------------------------- |
| 11.8% | 16.2 kB |         2 | `(GC root)`                                                                                                       |
|  7.0% |  9.7 kB |         1 | `.constructor Map ← .constructor Map ← .desiredSize Map`                                                          |
|  4.7% | 6.53 kB |         1 | `.constructor Map ← .constructor Map ← .constructor Map ← .constructor Map ← .constructor Map`                    |
|  4.7% | 6.53 kB |         1 | `.constructor Map ← .constructor Map ← .constructor Map ← .constructor Map ← .constructor Map ← .constructor Map` |
|  4.7% | 6.53 kB |         1 | `.children Map`                                                                                                   |

##### `DOMAttributeGetterSetter`

|    % |  Size | Instances | Path                                                                                   |
| ---: | ----: | --------: | -------------------------------------------------------------------------------------- |
| 0.4% | 480 B |        10 | `(GC root)`                                                                            |
| 0.2% | 288 B |         6 | `.constructor <root>`                                                                  |
| 0.0% |  48 B |         1 | `.readableStreamDefaultControllerError string`                                         |
| 0.0% |  48 B |         1 | `.constructor DOMAttributeGetterSetter ← .readableStreamDefaultControllerError string` |
| 0.0% |  48 B |         1 | `.readableStreamDefaultControllerGetDesiredSize string`                                |

##### `JSLexicalEnvironment`

|    % |    Size | Instances | Path                                                                                                                                    |
| ---: | ------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------- |
| 7.2% | 8.03 kB |         1 | `.background-size Function ← .constructor Function`                                                                                     |
| 0.5% |   608 B |         1 | `.76.1.hrefToTags UnlinkedFunctionExecutable ← [1] UnlinkedFunctionExecutable ← .graph.vertices string ← .values string ← .meta string` |
| 0.4% |   432 B |         1 | `.r UnlinkedFunctionExecutable ← .constructor UnlinkedFunctionExecutable ← .registerOption Object ← .actions Object`                    |
| 0.3% |   320 B |         1 | `.line-height Function ← .constructor Function`                                                                                         |
| 0.2% |   256 B |         1 | `(GC root)`                                                                                                                             |

##### `Array`

|    % |  Size | Instances | Path                                                                                                                                    |
| ---: | ----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------- |
| 0.1% | 114 B |         4 | `(GC root)`                                                                                                                             |
| 0.1% |  66 B |         1 | `.71.1.hrefToTags UnlinkedFunctionExecutable ← [1] UnlinkedFunctionExecutable ← .graph.vertices string ← .values string ← .meta string` |
| 0.0% |  16 B |         1 | `.constructor Object`                                                                                                                   |
| 0.0% |  16 B |         1 | `.constructor Array ← .constructor Object`                                                                                              |
| 0.0% |  16 B |         1 | `.constructor Array ← .constructor Array ← .constructor Object`                                                                         |

##### `NativeExecutable`

|    % |  Size | Instances | Path                                                                                    |
| ---: | ----: | --------: | --------------------------------------------------------------------------------------- |
| 1.0% | 560 B |         7 | `(GC root)`                                                                             |
| 0.1% |  80 B |         1 | `.constructor CustomGetterSetter ← .constructor <root>`                                 |
| 0.1% |  80 B |         1 | `.75.1.tags string ← [1] string ← .graph.edges string ← .values string ← .meta string`  |
| 0.1% |  80 B |         1 | `.75.1.hrefs string ← [1] string ← .graph.edges string ← .values string ← .meta string` |
| 0.1% |  80 B |         1 | `.constructor <root>`                                                                   |

##### `HTMLDivElement`

|    % |  Size | Instances | Path                                                                                                                     |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------ |
| 0.3% | 150 B |         3 | `(GC root)`                                                                                                              |
| 0.1% |  50 B |         1 | `.constructor JSLexicalEnvironment ← .hrefToTags JSLexicalEnvironment`                                                   |
| 0.1% |  50 B |         1 | `.constructor JSLexicalEnvironment ← .constructor JSLexicalEnvironment`                                                  |
| 0.1% |  50 B |         1 | `.constructor Text ← .constructor HTMLDivElement ← .constructor JSLexicalEnvironment ← .hrefToTags JSLexicalEnvironment` |
| 0.1% |  50 B |         1 | `.tags JSLexicalEnvironment`                                                                                             |

##### `StructureRareData`

|    % |  Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---: | ----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.9% | 384 B |         4 | `.constructor <root>`                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.9% | 384 B |         4 | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.2% |  96 B |         1 | `.45.1.tags UnlinkedFunctionExecutable ← [1] UnlinkedFunctionExecutable ← .graph.vertices string ← .values string ← .meta string`                                                                                                                                                                                                                                                                         |
| 0.2% |  96 B |         1 | `.Pe Object`                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.2% |  96 B |         1 | `.constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor HTMLAnchorElement ← .constructor HTMLMetaElement ← [1] UnlinkedFunctionExecutable ← .graph.vertices string ← .values string ← .meta string` |

##### `Text`

|    % |  Size | Instances | Path                                                                                                                                                                                |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.5% | 429 B |        13 | `(GC root)`                                                                                                                                                                         |
| 0.2% |  66 B |         2 | `[0] Text ← .children Text ← .props Text`                                                                                                                                           |
| 0.1% |  33 B |         1 | `.constructor Text`                                                                                                                                                                 |
| 0.1% |  33 B |         1 | `.height Text ← .style Text`                                                                                                                                                        |
| 0.1% |  33 B |         1 | `.constructor Text ← .constructor Text ← .constructor Text ← .constructor Text ← .constructor Text ← .constructor Text ← .constructor Text ← .constructor Text ← .constructor Text` |

##### `PropertyTable`

|    % |  Size | Instances | Path                                                                                                                                                          |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.6% | 576 B |        12 | `(GC root)`                                                                                                                                                   |
| 0.2% |  48 B |         1 | `.constructor <root>`                                                                                                                                         |
| 0.2% |  48 B |         1 | `.weakMapSize TransformStreamDefaultController ← .constructor Map ← .constructor WritableStreamDefaultController ← .constructor <root>`                       |
| 0.2% |  48 B |         1 | `.name PropertyTable ← .weakMapSize TransformStreamDefaultController ← .constructor Map ← .constructor WritableStreamDefaultController ← .constructor <root>` |
| 0.2% |  48 B |         1 | `.weakMapEntries TransformStreamDefaultController ← .constructor Map ← .constructor WritableStreamDefaultController ← .constructor <root>`                    |

##### `CustomGetterSetter`

|    % |  Size | Instances | Path                                                    |
| ---: | ----: | --------: | ------------------------------------------------------- |
| 0.9% | 192 B |         6 | `(GC root)`                                             |
| 0.2% |  32 B |         1 | `.name Function`                                        |
| 0.2% |  32 B |         1 | `.constructor <root>`                                   |
| 0.2% |  32 B |         1 | `.privateInitializeReadableByteStreamController string` |
| 0.2% |  32 B |         1 | `.oe Object`                                            |

##### `SymbolTable`

|    % |  Size | Instances | Path                                                     |
| ---: | ----: | --------: | -------------------------------------------------------- |
| 1.0% | 192 B |         3 | `(GC root)`                                              |
| 0.3% |  64 B |         1 | `.constructor <root>`                                    |
| 0.3% |  64 B |         1 | `.constructor Object ← .constructor Object ← .ar Object` |
| 0.3% |  64 B |         1 | `.reduce Object`                                         |
| 0.3% |  64 B |         1 | `.constructor SymbolTable ← .reduce Object`              |

##### `HTMLAnchorElement`

|    % |  Size | Instances | Path                            |
| ---: | ----: | --------: | ------------------------------- |
| 0.9% | 150 B |         3 | `(GC root)`                     |
| 0.3% |  50 B |         1 | `.create HTMLElement`           |
| 0.3% |  50 B |         1 | `.constructor Text`             |
| 0.3% |  50 B |         1 | `.create HTMLAnchorElement`     |
| 0.3% |  50 B |         1 | `.constructor HTMLImageElement` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

|     % |    Size | Instances | Constructor                  |
| ----: | ------: | --------: | ---------------------------- |
| 29.6% | 1.96 MB |     7,633 | `E1`                         |
| 25.8% | 1.71 MB |    18,854 | `Object`                     |
| 11.6% |  767 kB |     1,439 | `Set`                        |
| 11.3% |  748 kB |    11,973 | `HashMapBucket`              |
|  8.5% |  560 kB |     2,658 | `DOMAttributeGetterSetter`   |
|  6.7% |  444 kB |     2,923 | `FunctionExecutable`         |
|  6.6% |  438 kB |     5,724 | `Function`                   |
|  5.6% |  371 kB |     3,310 | `Structure`                  |
|  5.5% |  361 kB |     2,626 | `UnlinkedFunctionExecutable` |
|  4.0% |  263 kB |     5,418 | `Array`                      |
|  3.1% |  204 kB |     1,937 | `JSLexicalEnvironment`       |
|  2.3% |  150 kB |       221 | `Map`                        |
|  1.0% | 65.9 kB |       708 | `NativeExecutable`           |
|  0.8% | 54.7 kB |     1,027 | `HTMLDivElement`             |
|  0.8% | 52.8 kB |       456 | `PropertyTable`              |
|  0.7% | 46.5 kB |       290 | `SymbolTable`                |
|  0.7% | 44.2 kB |       449 | `StructureRareData`          |
|  0.5% |   32 kB |       921 | `Text`                       |
|  0.4% | 24.2 kB |       638 | `CustomGetterSetter`         |
|  0.4% | 23.6 kB |        74 | `JSPropertyNameEnumerator`   |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `E1`

|     % |    Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 14.9% |  292 kB |        10 | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                                  |
|  5.8% |  113 kB |         2 | `.constructor <root>`                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.4% | 8.11 kB |         1 | `.next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next string ← .next Object`                       |
|  0.4% | 7.88 kB |         1 | `.next E1 ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next string ← .next Object`            |
|  0.4% | 7.66 kB |         1 | `.next E1 ← .next E1 ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next Object ← .next string ← .next Object` |

##### `Object`

|     % |    Size | Instances | Path                                                                               |
| ----: | ------: | --------: | ---------------------------------------------------------------------------------- |
| 20.1% |  343 kB |         4 | `(GC root)`                                                                        |
|  2.6% |   44 kB |         1 | `.children Object`                                                                 |
|  1.5% | 25.9 kB |         1 | `.constructor E1 ← .constructor <root>`                                            |
|  1.5% | 25.2 kB |         1 | `.CommandLineAPI Object ← .constructor E1 ← .constructor <root>`                   |
|  1.4% | 24.8 kB |         1 | `.methods Object ← .CommandLineAPI Object ← .constructor E1 ← .constructor <root>` |

##### `Set`

|    % |    Size | Instances | Path                                                    |
| ---: | ------: | --------: | ------------------------------------------------------- |
| 5.7% | 43.8 kB |         5 | `(GC root)`                                             |
| 1.2% |  9.2 kB |         1 | `.firstContext Set`                                     |
| 1.1% | 8.41 kB |         1 | `.next Set ← .firstContext Set`                         |
| 1.0% | 7.94 kB |         1 | `.next Set ← .next Set ← .firstContext Set`             |
| 1.0% | 7.43 kB |         1 | `.next Set ← .next Set ← .next Set ← .firstContext Set` |

##### `HashMapBucket`

|     % |    Size | Instances | Path                                               |
| ----: | ------: | --------: | -------------------------------------------------- |
| 68.9% |  515 kB |        37 | `(GC root)`                                        |
|  0.7% | 5.52 kB |         1 | `.constructor Object`                              |
|  0.6% |  4.4 kB |         1 | `.Ry Object`                                       |
|  0.2% |  1.5 kB |         1 | `.constructor <root>`                              |
|  0.2% | 1.47 kB |         1 | `.constructor HashMapBucket ← .constructor <root>` |

##### `DOMAttributeGetterSetter`

|     % |    Size | Instances | Path                                                                                                                      |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------- |
| 51.2% |  287 kB |         8 | `(GC root)`                                                                                                               |
| 22.8% |  128 kB |         1 | `.json string`                                                                                                            |
| 22.4% |  125 kB |         1 | `.graph DOMAttributeGetterSetter ← .json string`                                                                          |
|  1.9% | 10.9 kB |         1 | `.layout DOMAttributeGetterSetter ← .graph DOMAttributeGetterSetter ← .json string`                                       |
|  1.9% | 10.8 kB |         1 | `.positions DOMAttributeGetterSetter ← .layout DOMAttributeGetterSetter ← .graph DOMAttributeGetterSetter ← .json string` |

##### `FunctionExecutable`

|      % |    Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 159.2% |  707 kB |        53 | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   2.0% | 8.73 kB |         1 | `.n0 Object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|   1.6% | 7.17 kB |         1 | `.next PropertyTable ← .next PropertyTable ← .next PropertyTable ← .next PropertyTable ← .next PropertyTable ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string`                                                       |
|   1.6% | 7.04 kB |         1 | `.next FunctionExecutable ← .next PropertyTable ← .next PropertyTable ← .next PropertyTable ← .next PropertyTable ← .next PropertyTable ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string`                            |
|   1.6% | 6.91 kB |         1 | `.next FunctionExecutable ← .next FunctionExecutable ← .next PropertyTable ← .next PropertyTable ← .next PropertyTable ← .next PropertyTable ← .next PropertyTable ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string` |

##### `Function`

|     % |    Size | Instances | Path                          |
| ----: | ------: | --------: | ----------------------------- |
| 38.6% |  169 kB |         4 | `(GC root)`                   |
| 24.2% |  106 kB |         1 | `.constructor Function`       |
|  1.9% | 8.46 kB |         1 | `.edges JSLexicalEnvironment` |
|  1.8% | 7.76 kB |         1 | `.ud Object`                  |
|  1.6% | 6.79 kB |         1 | `.streamController Function`  |

##### `Structure`

|      % |    Size | Instances | Path                                                                                             |
| -----: | ------: | --------: | ------------------------------------------------------------------------------------------------ |
| 131.8% |  489 kB |       338 | `(GC root)`                                                                                      |
|   1.9% | 7.06 kB |         4 | `.constructor <root>`                                                                            |
|   0.3% | 1.12 kB |         1 | `.constructor Structure ← .constructor <root>`                                                   |
|   0.2% |   896 B |         1 | `.constructor Structure ← .constructor Structure ← .constructor <root>`                          |
|   0.2% |   784 B |         1 | `.constructor Structure ← .constructor Structure ← .constructor Structure ← .constructor <root>` |

##### `UnlinkedFunctionExecutable`

|     % |    Size | Instances | Path                                                                                      |
| ----: | ------: | --------: | ----------------------------------------------------------------------------------------- |
| 15.3% | 55.3 kB |         6 | `(GC root)`                                                                               |
| 12.8% | 46.3 kB |         1 | `.graph.vertices string ← .values string ← .meta string`                                  |
| 12.8% | 46.2 kB |         1 | `[1] UnlinkedFunctionExecutable ← .graph.vertices string ← .values string ← .meta string` |
|  4.6% | 16.4 kB |         1 | `.Ti Object`                                                                              |
|  1.1% | 4.06 kB |         1 | `.homeObject PropertyTable ← .constructor <root>`                                         |

##### `Array`

|     % |    Size | Instances | Path                                                                                  |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------- |
| 31.1% | 81.7 kB |         1 | `.vertices DOMAttributeGetterSetter ← .graph DOMAttributeGetterSetter ← .json string` |
| 12.5% | 32.8 kB |         1 | `.edges DOMAttributeGetterSetter ← .graph DOMAttributeGetterSetter ← .json string`    |
|  6.8% | 17.8 kB |         2 | `(GC root)`                                                                           |
|  2.5% | 6.43 kB |         1 | `.next Array`                                                                         |
|  2.4% | 6.42 kB |         1 | `.next Array ← .next Array`                                                           |

##### `JSLexicalEnvironment`

|     % |    Size | Instances | Path                                                                                                                                                             |
| ----: | ------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 13.6% | 27.7 kB |         2 | `(GC root)`                                                                                                                                                      |
|  6.0% | 12.3 kB |         1 | `[25] Array ← .vertices DOMAttributeGetterSetter ← .graph DOMAttributeGetterSetter ← .json string`                                                               |
|  6.0% | 12.2 kB |         1 | `[1] JSLexicalEnvironment ← [25] Array ← .vertices DOMAttributeGetterSetter ← .graph DOMAttributeGetterSetter ← .json string`                                    |
|  5.9% | 12.1 kB |         1 | `.hrefToTags JSLexicalEnvironment ← [1] JSLexicalEnvironment ← [25] Array ← .vertices DOMAttributeGetterSetter ← .graph DOMAttributeGetterSetter ← .json string` |
|  3.9% | 8.03 kB |         1 | `.background-size Function ← .constructor Function`                                                                                                              |

##### `Map`

|     % |    Size | Instances | Path                                                                        |
| ----: | ------: | --------: | --------------------------------------------------------------------------- |
| 30.6% | 45.9 kB |         3 | `(GC root)`                                                                 |
|  9.7% | 14.5 kB |         1 | `.constructor Map`                                                          |
|  9.4% | 14.1 kB |         1 | `.constructor Map ← .constructor Map`                                       |
|  9.3% | 13.9 kB |         1 | `.constructor Map ← .constructor Map ← .constructor Map`                    |
|  9.1% | 13.6 kB |         1 | `.constructor Map ← .constructor Map ← .constructor Map ← .constructor Map` |

##### `NativeExecutable`

|     % |    Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | ------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15.6% | 10.3 kB |         1 | `.Cy Object`                                                                                                                                                                                                                                                                                                                                                                                                    |
| 14.8% | 9.76 kB |         3 | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                                     |
|  3.8% | 2.48 kB |         1 | `.constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .methods string ← .CommandLineAPI string ← .constructor PropertyTable ← .constructor <root>`                                                                 |
|  3.6% |  2.4 kB |         1 | `.constructor NativeExecutable ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .methods string ← .CommandLineAPI string ← .constructor PropertyTable ← .constructor <root>`                                 |
|  3.5% | 2.32 kB |         1 | `.constructor NativeExecutable ← .constructor NativeExecutable ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .methods string ← .CommandLineAPI string ← .constructor PropertyTable ← .constructor <root>` |

##### `HTMLDivElement`

|    % |    Size | Instances | Path                                                                                                                    |
| ---: | ------: | --------: | ----------------------------------------------------------------------------------------------------------------------- |
| 5.8% | 3.18 kB |         1 | `(GC root)`                                                                                                             |
| 3.7% | 2.03 kB |         1 | `.constructor HTMLDivElement`                                                                                           |
| 3.5% |  1.9 kB |         1 | `.constructor HTMLDivElement ← .constructor HTMLDivElement`                                                             |
| 3.4% | 1.85 kB |         1 | `.constructor HTMLDivElement ← .constructor HTMLDivElement ← .constructor HTMLDivElement`                               |
| 3.3% |  1.8 kB |         1 | `.constructor HTMLDivElement ← .constructor HTMLDivElement ← .constructor HTMLDivElement ← .constructor HTMLDivElement` |

##### `PropertyTable`

|     % |    Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | ------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 94.9% | 50.2 kB |         3 | `.constructor <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 14.0% | 7.41 kB |         1 | `.next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string`                                                                   |
| 13.9% | 7.36 kB |         1 | `.next PropertyTable ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string`                                             |
| 13.8% | 7.31 kB |         1 | `.next PropertyTable ← .next PropertyTable ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string`                       |
| 13.7% | 7.26 kB |         1 | `.next PropertyTable ← .next PropertyTable ← .next PropertyTable ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string ← .next string` |

##### `SymbolTable`

|      % |   Size | Instances | Path                                                                    |
| -----: | -----: | --------: | ----------------------------------------------------------------------- |
| 224.1% | 104 kB |        14 | `(GC root)`                                                             |
|   1.7% |  768 B |         1 | `.Qt Object`                                                            |
|   1.4% |  640 B |         1 | `.constructor SymbolTable ← .Qt Object`                                 |
|   1.2% |  576 B |         1 | `.e SymbolTable ← .constructor SymbolTable ← .Qt Object`                |
|   1.1% |  512 B |         1 | `.constructor JSLexicalEnvironment ← .constructor JSLexicalEnvironment` |

##### `StructureRareData`

|    % |    Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 7.0% | 3.08 kB |         3 | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.2% |   960 B |         1 | `.constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor HTMLAnchorElement ← .constructor HTMLMetaElement ← [1] UnlinkedFunctionExecutable ← .graph.vertices string ← .values string ← .meta string`                                                                                                    |
| 2.0% |   864 B |         1 | `.constructor StructureRareData ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor HTMLAnchorElement ← .constructor HTMLMetaElement ← [1] UnlinkedFunctionExecutable ← .graph.vertices string ← .values string ← .meta string`                                                                   |
| 1.7% |   768 B |         1 | `.constructor StructureRareData ← .constructor StructureRareData ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor HTMLAnchorElement ← .constructor HTMLMetaElement ← [1] UnlinkedFunctionExecutable ← .graph.vertices string ← .values string ← .meta string`                                  |
| 1.5% |   672 B |         1 | `.constructor StructureRareData ← .constructor StructureRareData ← .constructor StructureRareData ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor Function ← .constructor HTMLAnchorElement ← .constructor HTMLMetaElement ← [1] UnlinkedFunctionExecutable ← .graph.vertices string ← .values string ← .meta string` |

##### `Text`

|     % |    Size | Instances | Path                                                                            |
| ----: | ------: | --------: | ------------------------------------------------------------------------------- |
| 11.8% | 3.79 kB |         1 | `(GC root)`                                                                     |
| 11.6% | 3.72 kB |         1 | `.constructor Text`                                                             |
| 11.5% | 3.69 kB |         1 | `.constructor Text ← .constructor Text`                                         |
| 11.4% | 3.66 kB |         1 | `.constructor Text ← .constructor Text ← .constructor Text`                     |
| 11.3% | 3.63 kB |         1 | `.constructor Text ← .constructor Text ← .constructor Text ← .constructor Text` |

##### `CustomGetterSetter`

|     % |    Size | Instances | Path                                           |
| ----: | ------: | --------: | ---------------------------------------------- |
| 48.0% | 11.6 kB |        12 | `(GC root)`                                    |
|  2.5% |   608 B |         1 | `.Jt Object`                                   |
|  2.2% |   544 B |         1 | `.constructor CustomGetterSetter ← .Jt Object` |
|  2.1% |   512 B |         1 | `.er Object`                                   |
|  1.9% |   448 B |         1 | `.constructor CustomGetterSetter ← .er Object` |

##### `JSPropertyNameEnumerator`

|     % |    Size | Instances | Path                                                                                                  |
| ----: | ------: | --------: | ----------------------------------------------------------------------------------------------------- |
| 94.9% | 22.4 kB |         6 | `(GC root)`                                                                                           |
|  1.4% |   336 B |         1 | `.constructor Object`                                                                                 |
|  1.2% |   288 B |         1 | `.constructor JSPropertyNameEnumerator ← .constructor Object`                                         |
|  1.0% |   240 B |         1 | `.constructor JSPropertyNameEnumerator ← .constructor JSPropertyNameEnumerator ← .constructor Object` |
|  0.8% |   192 B |         1 | `.state Object`                                                                                       |

## Largest strings

Strings ranked by bytes allocated for them.

|    % |    Size | Path                                                                                                                                                                                                                                                        |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.0% | 3.15 kB | `(GC root)`                                                                                                                                                                                                                                                 |
| 0.0% | 1.77 kB | `.className string`                                                                                                                                                                                                                                         |
| 0.0% | 1.34 kB | `.markerEnd string`                                                                                                                                                                                                                                         |
| 0.0% |   972 B | `(GC root)`                                                                                                                                                                                                                                                 |
| 0.0% |   902 B | `.constructor string`                                                                                                                                                                                                                                       |
| 0.0% |   760 B | `[1] string ← .children string ← .props string`                                                                                                                                                                                                             |
| 0.0% |   757 B | `.constructor string`                                                                                                                                                                                                                                       |
| 0.0% |   757 B | `(GC root)`                                                                                                                                                                                                                                                 |
| 0.0% |   757 B | `.constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor string ← .constructor E1 ← .constructor E1 ← .constructor E1` |
| 0.0% |   757 B | `(GC root)`                                                                                                                                                                                                                                                 |
| 0.0% |   757 B | `.constructor string`                                                                                                                                                                                                                                       |
| 0.0% |   757 B | `.constructor string`                                                                                                                                                                                                                                       |
| 0.0% |   757 B | `.constructor string`                                                                                                                                                                                                                                       |
| 0.0% |   757 B | `.constructor string`                                                                                                                                                                                                                                       |
| 0.0% |   757 B | `.tags string`                                                                                                                                                                                                                                              |
| 0.0% |   757 B | `.vertices JSLexicalEnvironment`                                                                                                                                                                                                                            |
| 0.0% |   757 B | `(GC root)`                                                                                                                                                                                                                                                 |
| 0.0% |   757 B | `.constructor string`                                                                                                                                                                                                                                       |
| 0.0% |   757 B | `.constructor string ← .constructor string`                                                                                                                                                                                                                 |
| 0.0% |   757 B | `.constructor string`                                                                                                                                                                                                                                       |

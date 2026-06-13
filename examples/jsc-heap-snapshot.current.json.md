# Heap snapshot

Allocated 10.4 MB across 144,697 nodes and 437,047 edges.

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
| unknown  |  0.0% | 4.28 kB |    122 |
| symbol   |  0.0% |  1.1 kB |     67 |
| number   |  0.0% |   383 B |     11 |
| bigint   |  0.0% |   238 B |     12 |

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

|    % |    Size | Instances | Path                                                                                                                                                                          |
| ---: | ------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.6% | 16.5 kB |       147 | `(GC root)`                                                                                                                                                                   |
| 0.0% |   112 B |         1 | `._cachedElementBoundingRect StructureRareData ← [66] StructureRareData ← ._elementsWithCachedBoundingRects FunctionExecutable ← .ReaderArticleFinderJS JSLexicalEnvironment` |
| 0.0% |   112 B |         1 | `.image StructureRareData ← .Object <root>`                                                                                                                                   |
| 0.0% |   112 B |         1 | `._dirtyProperties Structure ← .image StructureRareData ← .Object <root>`                                                                                                     |
| 0.0% |   112 B |         1 | `[65] StructureRareData ← ._elementsWithCachedBoundingRects FunctionExecutable ← .ReaderArticleFinderJS JSLexicalEnvironment`                                                 |

##### `FunctionExecutable`

|    % |    Size | Instances | Path                                                   |
| ---: | ------: | --------: | ------------------------------------------------------ |
| 0.2% |  3.2 kB |        25 | `(GC root)`                                            |
| 0.1% | 1.41 kB |        11 | `.Object <root>`                                       |
| 0.0% |   128 B |         1 | `.-apple-pay-button-style Function ← .Object Function` |
| 0.0% |   128 B |         1 | `.-apple-pay-button-type Function ← .Object Function`  |
| 0.0% |   128 B |         1 | `.-epub-caption-side Function ← .Object Function`      |

##### `DOMAttributeGetterSetter`

|    % |    Size | Instances | Path                                                         |
| ---: | ------: | --------: | ------------------------------------------------------------ |
| 0.3% | 3.26 kB |        68 | `(GC root)`                                                  |
| 0.0% |    48 B |         1 | `.name Function`                                             |
| 0.0% |    48 B |         1 | `.Object CustomGetterSetter ← .Cy Intl.DurationFormat`       |
| 0.0% |    48 B |         1 | `.Cy Intl.DurationFormat`                                    |
| 0.0% |    48 B |         1 | `.Object DOMAttributeGetterSetter ← .Cy Intl.DurationFormat` |

##### `StructureRareData`

|    % |    Size | Instances | Path                                                                |
| ---: | ------: | --------: | ------------------------------------------------------------------- |
| 0.5% | 3.65 kB |        38 | `(GC root)`                                                         |
| 0.0% |   192 B |         2 | `.Object StructureRareData ← .y string`                             |
| 0.0% |   192 B |         2 | `.Object StructureRareData ← .Object StructureRareData ← .y string` |
| 0.0% |    96 B |         1 | `.y string`                                                         |
| 0.0% |    96 B |         1 | `.x string`                                                         |

##### `Function`

|    % | Size | Instances | Path                          |
| ---: | ---: | --------: | ----------------------------- |
| 0.0% | 98 B |         1 | `.ariaOrientation Callee`     |
| 0.0% | 98 B |         1 | `.ariaPressed Callee`         |
| 0.0% | 97 B |         1 | `.ariaMultiSelectable Callee` |
| 0.0% | 97 B |         1 | `.ariaPosInSet Callee`        |
| 0.0% | 97 B |         1 | `.ariaReadOnly Callee`        |

##### `FunctionCodeBlock`

|     % |   Size | Instances | Path             |
| ----: | -----: | --------: | ---------------- |
| 67.7% | 298 kB |        66 | `(GC root)`      |
| 32.3% | 142 kB |        56 | `.Object <root>` |

##### `Object`

|    % |  Size | Instances | Path                                                                                                                                                                                                                                                                                                              |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.2% | 653 B |         1 | `.skewY Function`                                                                                                                                                                                                                                                                                                 |
| 0.2% | 639 B |         1 | `.enable B ← .prototype Object ← .WatchOSMediaControlsSupport string`                                                                                                                                                                                                                                             |
| 0.2% | 495 B |         1 | `.Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object` |
| 0.2% | 474 B |         1 | `.Object Object ← .WatchOSMediaControlsSupport string`                                                                                                                                                                                                                                                            |
| 0.1% | 432 B |         1 | `.Object Object ← .Object Object ← .Object RegExp`                                                                                                                                                                                                                                                                |

##### `E1`

|    % |  Size | Instances | Path                                                                                                                   |
| ---: | ----: | --------: | ---------------------------------------------------------------------------------------------------------------------- |
| 0.1% | 224 B |         1 | `.tags FunctionExecutable ← [1] FunctionExecutable ← [90] DOMAttributeGetterSetter ← .vertices string ← .graph string` |
| 0.1% | 224 B |         1 | `[89] DOMAttributeGetterSetter ← .vertices string ← .graph string`                                                     |
| 0.1% | 224 B |         1 | `[1] E1 ← [89] DOMAttributeGetterSetter ← .vertices string ← .graph string`                                            |
| 0.1% | 224 B |         1 | `.hrefToTags E1 ← [1] E1 ← [89] DOMAttributeGetterSetter ← .vertices string ← .graph string`                           |
| 0.1% | 224 B |         1 | `[0] E1 ← .hrefToTags E1 ← [1] E1 ← [89] DOMAttributeGetterSetter ← .vertices string ← .graph string`                  |

##### `UnlinkedFunctionExecutable`

|    % |    Size | Instances | Path                                                   |
| ---: | ------: | --------: | ------------------------------------------------------ |
| 1.3% | 3.84 kB |        40 | `(GC root)`                                            |
| 0.0% |    96 B |         1 | `.webkitColumnCount Function ← .Object Function`       |
| 0.0% |    96 B |         1 | `.webkitColumnFill Function ← .Object Function`        |
| 0.0% |    96 B |         1 | `.webkitColumnGap Function ← .Object Function`         |
| 0.0% |    96 B |         1 | `.webkitColumnProgression Function ← .Object Function` |

##### `PropertyTable`

|    % |  Size | Instances | Path                                       |
| ---: | ----: | --------: | ------------------------------------------ |
| 0.4% | 912 B |        19 | `(GC root)`                                |
| 0.0% |  48 B |         1 | `.Object string`                           |
| 0.0% |  48 B |         1 | `.addChild string`                         |
| 0.0% |  48 B |         1 | `.Object PropertyTable ← .addChild string` |
| 0.0% |  48 B |         1 | `.parentOfType string`                     |

##### `Set`

|    % |    Size | Instances | Path                                                            |
| ---: | ------: | --------: | --------------------------------------------------------------- |
| 2.9% | 4.98 kB |         1 | `[1] Set ← .23.1.hrefToTags Function ← [1] Function`            |
| 2.6% |  4.5 kB |         1 | `.prototype Set`                                                |
| 1.3% | 2.23 kB |         1 | `.constructor Set ← .Object Set`                                |
| 0.9% | 1.46 kB |         1 | `.1.1 Set ← [1] Set ← .23.1.hrefToTags Function ← [1] Function` |
| 0.9% | 1.46 kB |         1 | `.onloadingdone Set ← .Object Set`                              |

##### `UnlinkedFunctionCodeBlock`

|     % |    Size | Instances | Path                                                                                     |
| ----: | ------: | --------: | ---------------------------------------------------------------------------------------- |
| 60.8% | 79.7 kB |       163 | `.Object <root>`                                                                         |
| 25.8% | 33.9 kB |        79 | `(GC root)`                                                                              |
|  0.4% |   527 B |         1 | `._supportingObjects UnlinkedFunctionCodeBlock ← .Object <root>`                         |
|  0.3% |   390 B |         1 | `.Object UnlinkedFunctionCodeBlock ← .Object UnlinkedFunctionCodeBlock ← .Object <root>` |
|  0.3% |   338 B |         1 | `.Object UnlinkedFunctionCodeBlock ← .Object <root>`                                     |

##### `CustomGetterSetter`

|    % | Size | Instances | Path                                                                      |
| ---: | ---: | --------: | ------------------------------------------------------------------------- |
| 0.1% | 64 B |         2 | `(GC root)`                                                               |
| 0.0% | 32 B |         1 | `.Object WebKitPlaybackTargetAvailabilityEvent ← .willRemoveChild string` |
| 0.0% | 32 B |         1 | `.didChangeChildren string`                                               |
| 0.0% | 32 B |         1 | `.localName Callee`                                                       |
| 0.0% | 32 B |         1 | `.tagName Callee`                                                         |

##### `HTMLDivElement`

|    % | Size | Instances | Path                                                |
| ---: | ---: | --------: | --------------------------------------------------- |
| 0.1% | 50 B |         1 | `.matches Callee`                                   |
| 0.1% | 50 B |         1 | `(GC root)`                                         |
| 0.1% | 50 B |         1 | `.WebkitColumnSpan Function ← .Object Function`     |
| 0.1% | 50 B |         1 | `.WebkitLineBoxContain Function ← .Object Function` |
| 0.1% | 50 B |         1 | `.WebkitLogicalWidth Function ← .Object Function`   |

##### `FunctionRareData`

|    % |  Size | Instances | Path                                                                                           |
| ---: | ----: | --------: | ---------------------------------------------------------------------------------------------- |
| 0.4% | 320 B |         4 | `(GC root)`                                                                                    |
| 0.1% |  80 B |         1 | `.ariaRequired Callee`                                                                         |
| 0.1% |  80 B |         1 | `.ariaRoleDescription Callee`                                                                  |
| 0.1% |  80 B |         1 | `.16.1 FunctionExecutable ← [1] FunctionExecutable ← .25.1.hrefToTags Function ← [1] Function` |
| 0.1% |  80 B |         1 | `.supportsAirPlay Set ← .prototype Set`                                                        |

##### `JSLexicalEnvironment`

|     % |    Size | Instances | Path                                                  |
| ----: | ------: | --------: | ----------------------------------------------------- |
| 10.8% | 8.03 kB |         1 | `.graph string`                                       |
|  1.1% |   800 B |         3 | `(GC root)`                                           |
|  0.6% |   432 B |         1 | `.Object JSLexicalEnvironment`                        |
|  0.3% |   224 B |         1 | `.Object UnlinkedFunctionExecutable ← .Object Object` |
|  0.3% |   224 B |         1 | `.Object JSModuleEnvironment`                         |

##### `NativeExecutable`

|    % | Size | Instances | Path                               |
| ---: | ---: | --------: | ---------------------------------- |
| 0.1% | 80 B |         1 | `(GC root)`                        |
| 0.1% | 80 B |         1 | `.ariaDescription Callee`          |
| 0.1% | 80 B |         1 | `.ariaDetailsElements Callee`      |
| 0.1% | 80 B |         1 | `.ariaDisabled Callee`             |
| 0.1% | 80 B |         1 | `.ariaErrorMessageElements Callee` |

##### `Array`

|    % |  Size | Instances | Path                                                     |
| ---: | ----: | --------: | -------------------------------------------------------- |
| 0.2% | 132 B |         2 | `(GC root)`                                              |
| 0.1% |  66 B |         1 | `.isDisjointFrom Object`                                 |
| 0.1% |  66 B |         1 | `.children Array ← .props Array ← [0] Array`             |
| 0.1% |  66 B |         1 | `.readyState Array`                                      |
| 0.1% |  66 B |         1 | `.attribute Array ← .leftMargin Array ← .property Array` |

##### `HashMapBucket`

|    % |  Size | Instances | Path                                         |
| ---: | ----: | --------: | -------------------------------------------- |
| 0.3% | 144 B |         3 | `(GC root)`                                  |
| 0.1% |  48 B |         1 | `.attachShadow Callee`                       |
| 0.1% |  48 B |         1 | `.name HashMapBucket ← .attachShadow Callee` |
| 0.1% |  48 B |         1 | `.closest Callee`                            |
| 0.1% |  48 B |         1 | `.getElementsByTagName Callee`               |

##### `GetterSetter`

|    % | Size | Instances | Path                 |
| ---: | ---: | --------: | -------------------- |
| 0.1% | 32 B |         1 | `.part Callee`       |
| 0.1% | 32 B |         1 | `.attributes Callee` |
| 0.1% | 32 B |         1 | `.shadowRoot Callee` |
| 0.1% | 32 B |         1 | `.onfocusin Callee`  |
| 0.1% | 32 B |         1 | `.onfocusout Callee` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

|     % |    Size | Instances | Constructor                  |
| ----: | ------: | --------: | ---------------------------- |
| 26.1% | 2.72 MB |    24,020 | `Structure`                  |
| 19.2% |    2 MB |    11,626 | `FunctionExecutable`         |
| 17.2% | 1.79 MB |    24,875 | `DOMAttributeGetterSetter`   |
| 13.3% | 1.38 MB |    19,126 | `Function`                   |
|  9.7% |    1 MB |     8,397 | `StructureRareData`          |
|  7.1% |  735 kB |     4,615 | `PropertyTable`              |
|  6.1% |  634 kB |     1,236 | `JSLexicalEnvironment`       |
|  5.0% |  520 kB |     5,787 | `Object`                     |
|  4.5% |  467 kB |     3,123 | `UnlinkedFunctionExecutable` |
|  4.3% |  452 kB |     1,549 | `GetterSetter`               |
|  3.3% |  347 kB |     1,375 | `E1`                         |
|  3.1% |  320 kB |       297 | `UnlinkedFunctionCodeBlock`  |
|  2.8% |  292 kB |       122 | `FunctionCodeBlock`          |
|  2.1% |  215 kB |     3,618 | `Array`                      |
|  1.8% |  187 kB |       761 | `Set`                        |
|  1.7% |  177 kB |        11 | `Intl.DurationFormat`        |
|  1.6% |  164 kB |     3,563 | `CustomGetterSetter`         |
|  1.5% |  155 kB |       554 | `HTMLSpanElement`            |
|  1.5% |  152 kB |       128 | `RegExp`                     |
|  1.3% |  135 kB |     1,009 | `FunctionRareData`           |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `Structure`

|     % |    Size | Instances | Path                                                                                  |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------- |
| 29.6% |  804 kB |        12 | `.Object <root>`                                                                      |
| 21.7% |  590 kB |         4 | `(GC root)`                                                                           |
|  1.5% | 40.5 kB |         1 | `.Object Structure ← .Object <root>`                                                  |
|  1.4% |   37 kB |         1 | `.CommandLineAPI Structure ← .Object Structure ← .Object <root>`                      |
|  1.3% | 35.8 kB |         1 | `.methods Structure ← .CommandLineAPI Structure ← .Object Structure ← .Object <root>` |

##### `FunctionExecutable`

|     % |    Size | Instances | Path                                                                       |
| ----: | ------: | --------: | -------------------------------------------------------------------------- |
| 22.8% |  456 kB |         7 | `(GC root)`                                                                |
|  5.5% |  110 kB |         1 | `.ReaderArticleFinderJS JSLexicalEnvironment`                              |
|  2.1% | 41.6 kB |         3 | `.Object <root>`                                                           |
|  1.3% | 26.3 kB |         2 | `.Object FunctionExecutable ← .Object <root>`                              |
|  0.6% |   13 kB |         1 | `.Object FunctionExecutable ← .Object FunctionExecutable ← .Object <root>` |

##### `DOMAttributeGetterSetter`

|     % |    Size | Instances | Path                                                              |
| ----: | ------: | --------: | ----------------------------------------------------------------- |
| 30.3% |  542 kB |         8 | `(GC root)`                                                       |
|  5.1% | 91.3 kB |         1 | `.Object JSLexicalEnvironment`                                    |
|  5.1% | 91.3 kB |         1 | `.Object DOMAttributeGetterSetter ← .Object JSLexicalEnvironment` |
|  3.2% | 57.6 kB |         1 | `.vertices string ← .graph string`                                |
|  2.1% | 37.3 kB |         1 | `.child Function ← .sibling Function`                             |

##### `Function`

|     % |    Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | ------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 39.8% |  549 kB |         9 | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  9.9% |  136 kB |         2 | `.Object Function`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  8.0% |  110 kB |         1 | `.sibling Function`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  4.2% | 58.1 kB |         1 | `[1] Function`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.7% | 9.93 kB |         1 | `.Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object VolumeSupport ← .Object TracksSupport ← .Object SeekBackwardSupport ← .Object MuteSupport ← .Object FullscreenSupport ← .Object ControlsVisibilitySupport ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object Object ← .Object <root>` |

##### `StructureRareData`

|     % |    Size | Instances | Path                                                                                                                                                                                                         |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 15.2% |  153 kB |         9 | `(GC root)`                                                                                                                                                                                                  |
|  8.1% | 81.3 kB |         1 | `._elementsWithCachedBoundingRects FunctionExecutable ← .ReaderArticleFinderJS JSLexicalEnvironment`                                                                                                         |
|  5.7% | 57.6 kB |         4 | `.Object <root>`                                                                                                                                                                                             |
|  1.1% | 10.9 kB |         1 | `.child DOMAttributeGetterSetter ← .child DOMAttributeGetterSetter ← .sibling DOMAttributeGetterSetter ← .child DOMAttributeGetterSetter ← .child Function ← .sibling Function`                              |
|  1.1% | 10.8 kB |         1 | `.sibling StructureRareData ← .child DOMAttributeGetterSetter ← .child DOMAttributeGetterSetter ← .sibling DOMAttributeGetterSetter ← .child DOMAttributeGetterSetter ← .child Function ← .sibling Function` |

##### `PropertyTable`

|     % |    Size | Instances | Path                                                                                         |
| ----: | ------: | --------: | -------------------------------------------------------------------------------------------- |
| 74.2% |  545 kB |         6 | `(GC root)`                                                                                  |
|  1.4% | 10.1 kB |         1 | `.Object StructureRareData ← .Object <root>`                                                 |
|  1.4% |   10 kB |         1 | `.Object <root>`                                                                             |
|  1.4% | 9.95 kB |         1 | `.Object PropertyTable ← .Object StructureRareData ← .Object <root>`                         |
|  1.3% |  9.9 kB |         1 | `.Object PropertyTable ← .Object PropertyTable ← .Object StructureRareData ← .Object <root>` |

##### `JSLexicalEnvironment`

|     % |    Size | Instances | Path                                                                                                                                    |
| ----: | ------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------- |
| 82.9% |  526 kB |         1 | `(GC root)`                                                                                                                             |
|  2.1% |   13 kB |         1 | `.Object HTMLSpanElement ← .Object <root>`                                                                                              |
|  2.0% | 12.8 kB |         1 | `.Object JSLexicalEnvironment ← .Object HTMLSpanElement ← .Object <root>`                                                               |
|  2.0% | 12.8 kB |         1 | `.Object JSLexicalEnvironment ← .Object JSLexicalEnvironment ← .Object HTMLSpanElement ← .Object <root>`                                |
|  2.0% | 12.7 kB |         1 | `.Object JSLexicalEnvironment ← .Object JSLexicalEnvironment ← .Object JSLexicalEnvironment ← .Object HTMLSpanElement ← .Object <root>` |

##### `Object`

|     % |    Size | Instances | Path                                                                |
| ----: | ------: | --------: | ------------------------------------------------------------------- |
| 13.0% | 67.6 kB |         1 | `(GC root)`                                                         |
|  4.0% | 20.7 kB |         1 | `.Object <root>`                                                    |
|  2.3% | 12.2 kB |         1 | `.Object Object ← .Object <root>`                                   |
|  2.3% |   12 kB |         1 | `.Object Object ← .Object Object ← .Object <root>`                  |
|  2.3% | 11.9 kB |         1 | `.Object Object ← .Object Object ← .Object Object ← .Object <root>` |

##### `UnlinkedFunctionExecutable`

|     % |    Size | Instances | Path                                                                                       |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------ |
| 22.9% |  107 kB |         3 | `(GC root)`                                                                                |
|  9.7% | 45.1 kB |         1 | `.edges string ← .graph string`                                                            |
|  3.5% | 16.5 kB |         1 | `.Object <root>`                                                                           |
|  3.3% | 15.6 kB |         1 | `.Object UnlinkedFunctionExecutable ← .Object <root>`                                      |
|  3.3% | 15.3 kB |         1 | `.Object UnlinkedFunctionExecutable ← .Object UnlinkedFunctionExecutable ← .Object <root>` |

##### `GetterSetter`

|      % |    Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -----: | ------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 105.8% |  478 kB |         6 | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   2.6% | 11.8 kB |         1 | `.Object <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|   1.0% | 4.59 kB |         1 | `.Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object <root>`                                               |
|   1.0% | 4.56 kB |         1 | `.Object GetterSetter ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object <root>`                        |
|   1.0% | 4.53 kB |         1 | `.Object GetterSetter ← .Object GetterSetter ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object FunctionExecutable ← .Object <root>` |

##### `E1`

|    % |    Size | Instances | Path                                                                                                                                                      |
| ---: | ------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.5% |   12 kB |         1 | `.Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string`                                                     |
| 3.4% | 11.7 kB |         1 | `.Object E1 ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string`                                        |
| 3.3% | 11.5 kB |         1 | `.Object E1 ← .Object E1 ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string`                           |
| 3.3% | 11.3 kB |         1 | `.Object E1 ← .Object E1 ← .Object E1 ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string`              |
| 3.2% | 11.1 kB |         1 | `.Object E1 ← .Object E1 ← .Object E1 ← .Object E1 ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string` |

##### `UnlinkedFunctionCodeBlock`

|     % |    Size | Instances | Path                                                                                     |
| ----: | ------: | --------: | ---------------------------------------------------------------------------------------- |
| 73.2% |  234 kB |        45 | `(GC root)`                                                                              |
| 18.4% | 58.9 kB |        93 | `.Object <root>`                                                                         |
|  0.4% |  1.2 kB |         1 | `._supportingObjects UnlinkedFunctionCodeBlock ← .Object <root>`                         |
|  0.2% |   728 B |         1 | `.Object UnlinkedFunctionCodeBlock ← .Object <root>`                                     |
|  0.1% |   390 B |         1 | `.Object UnlinkedFunctionCodeBlock ← .Object UnlinkedFunctionCodeBlock ← .Object <root>` |

##### `FunctionCodeBlock`

|      % |   Size | Instances | Path             |
| -----: | -----: | --------: | ---------------- |
| 117.3% | 342 kB |        66 | `(GC root)`      |
|  48.7% | 142 kB |        56 | `.Object <root>` |

##### `Array`

|     % |    Size | Instances | Path                                                         |
| ----: | ------: | --------: | ------------------------------------------------------------ |
| 48.5% |  104 kB |         3 | `(GC root)`                                                  |
| 22.0% | 47.4 kB |         1 | `.Object Array`                                              |
|  7.5% | 16.1 kB |         1 | `.property Array`                                            |
|  5.6% |   12 kB |         1 | `.Object StructureRareData ← .Object <root>`                 |
|  5.5% | 11.8 kB |         1 | `.Object Array ← .Object StructureRareData ← .Object <root>` |

##### `Set`

|    % |    Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 8.8% | 16.5 kB |         1 | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 8.7% | 16.2 kB |         1 | `.Object Set`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 6.5% | 12.1 kB |         1 | `.23.1.hrefToTags Function ← [1] Function`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 6.3% | 11.8 kB |         1 | `[1] Set ← .23.1.hrefToTags Function ← [1] Function`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 5.2% | 9.75 kB |         1 | `.Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object HashMapBucket ← .Object Array ← .Object Array ← .Object Array ← .Object Array ← .Object Array ← .Object Array ← .Object Array ← .Object StructureRareData ← .Object <root>` |

##### `Intl.DurationFormat`

|     % |   Size | Instances | Path                                      |
| ----: | -----: | --------: | ----------------------------------------- |
| 99.9% | 177 kB |         3 | `(GC root)`                               |
|  0.0% |   36 B |         1 | `.Object FinalizationRegistry`            |
|  0.0% |   18 B |         1 | `.alt BigInt`                             |
|  0.0% |   18 B |         1 | `.onloadedmetadata HTMLAnchorElement`     |
|  0.0% |   18 B |         1 | `.onanimationiteration HTMLAnchorElement` |

##### `CustomGetterSetter`

|    % |    Size | Instances | Path                                                                                                    |
| ---: | ------: | --------: | ------------------------------------------------------------------------------------------------------- |
| 8.4% | 13.7 kB |         1 | `.Cy Intl.DurationFormat`                                                                               |
| 6.4% | 10.5 kB |         1 | `.Object <root>`                                                                                        |
| 4.7% | 7.64 kB |         1 | `.Object FunctionExecutable ← .Object <root>`                                                           |
| 4.6% | 7.54 kB |         1 | `.Object CustomGetterSetter ← .Object FunctionExecutable ← .Object <root>`                              |
| 4.6% | 7.51 kB |         1 | `.Object CustomGetterSetter ← .Object CustomGetterSetter ← .Object FunctionExecutable ← .Object <root>` |

##### `HTMLSpanElement`

|     % |    Size | Instances | Path                                                                                |
| ----: | ------: | --------: | ----------------------------------------------------------------------------------- |
| 68.3% |  106 kB |         1 | `(GC root)`                                                                         |
| 12.2% |   19 kB |         1 | `.Object <root>`                                                                    |
|  3.7% | 5.75 kB |         1 | `.Object Text ← .Object <root>`                                                     |
|  3.6% |  5.6 kB |         1 | `.Object HTMLSpanElement ← .Object Text ← .Object <root>`                           |
|  3.6% | 5.55 kB |         1 | `.Object HTMLSpanElement ← .Object HTMLSpanElement ← .Object Text ← .Object <root>` |

##### `RegExp`

|     % |    Size | Instances | Path                            |
| ----: | ------: | --------: | ------------------------------- |
| 96.1% |  146 kB |         3 | `(GC root)`                     |
|  0.8% | 1.26 kB |         1 | `[1] Function`                  |
|  0.8% | 1.19 kB |         1 | `.Object RegExp ← [1] Function` |
|  0.4% |   544 B |         1 | `.Object RegExp`                |
|  0.3% |   448 B |         1 | `.Object JSLexicalEnvironment`  |

##### `FunctionRareData`

|     % |    Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 91.4% |  124 kB |         2 | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  3.2% | 4.38 kB |         1 | `.Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object <root>`                                                                                  |
|  3.2% | 4.29 kB |         1 | `.Object FunctionRareData ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object <root>`                                                       |
|  3.1% | 4.21 kB |         1 | `.Object FunctionRareData ← .Object FunctionRareData ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object <root>`                            |
|  3.1% | 4.13 kB |         1 | `.Object FunctionRareData ← .Object FunctionRareData ← .Object FunctionRareData ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object HTMLDivElement ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object <root>` |

## Largest strings

Strings ranked by bytes allocated for them.

|    % |    Size | Path                                                                                                                                                                                                                                                                    |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.7% | 75.1 kB | `.includes Function`                                                                                                                                                                                                                                                    |
| 0.6% | 59.6 kB | `._updateGestureRecognizers string ← .prototype string ← .IOSInlineMediaControls Function`                                                                                                                                                                              |
| 0.0% |   902 B | `(GC root)`                                                                                                                                                                                                                                                             |
| 0.0% |   902 B | `(GC root)`                                                                                                                                                                                                                                                             |
| 0.0% |   869 B | `.Object string ← .Object string ← .Object string`                                                                                                                                                                                                                      |
| 0.0% |   760 B | `[0] string ← .hrefToTags string ← [1] string ← [69] DOMAttributeGetterSetter ← .vertices string ← .graph string`                                                                                                                                                       |
| 0.0% |   760 B | `(GC root)`                                                                                                                                                                                                                                                             |
| 0.0% |   500 B | `.gestureEnded string`                                                                                                                                                                                                                                                  |
| 0.0% |   498 B | `.touchesEnded string`                                                                                                                                                                                                                                                  |
| 0.0% |   496 B | `(GC root)`                                                                                                                                                                                                                                                             |
| 0.0% |   494 B | `.Object string ← .Object string ← .lr Object`                                                                                                                                                                                                                          |
| 0.0% |   484 B | `.Object pe`                                                                                                                                                                                                                                                            |
| 0.0% |   480 B | `.Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object string ← .Object MediaController` |
| 0.0% |   468 B | `.Object string ← .Object pe`                                                                                                                                                                                                                                           |
| 0.0% |   440 B | `[1] string ← [21] string ← .positions string ← .layout string ← .graph string`                                                                                                                                                                                         |
| 0.0% |   418 B | `.Object string ← .Object string ← .Object string ← .Object string ← .prototype string ← .TapGestureRecognizer Function`                                                                                                                                                |
| 0.0% |   418 B | `.Object string ← .Object string ← .Object SVGGElement`                                                                                                                                                                                                                 |
| 0.0% |   394 B | `.Object string ← .preferredMuteButtonStyle string`                                                                                                                                                                                                                     |
| 0.0% |   372 B | `.isPromiseRejectedWithNativeGetterTypeError Object ← .Object Object ← .Object Object ← .Object <root>`                                                                                                                                                                 |
| 0.0% |   344 B | `.attribute string`                                                                                                                                                                                                                                                     |

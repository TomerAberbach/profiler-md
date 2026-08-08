# Heap snapshot

Allocated 10.4 MiB across 109,640 nodes and 307,962 edges.

| Category     |     % |     Size |  Nodes |
| ------------ | ----: | -------: | -----: |
| string       | 32.5% | 3.39 MiB | 19,426 |
| code         | 28.9% | 3.01 MiB | 16,246 |
| object shape | 12.5% |  1.3 MiB | 12,177 |
| internal     |  9.8% | 1.03 MiB | 20,174 |
| object       |  8.6% |  920 KiB | 16,441 |
| closure      |  4.1% |  436 KiB | 13,484 |
| array        |  2.5% |  270 KiB | 11,204 |
| regexp       |  1.0% |  108 KiB |    453 |
| symbol       | <0.1% |    448 B |     28 |
| native       | <0.1% |    231 B |      7 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

|     % |     Size | Instances | Constructor                  |
| ----: | -------: | --------: | ---------------------------- |
| 12.5% |  1.3 MiB |    12,177 | `Structure`                  |
|  9.0% |  961 KiB |     1,658 | `UnlinkedFunctionCodeBlock`  |
|  8.9% |  950 KiB |     7,600 | `FunctionExecutable`         |
|  6.5% |  697 KiB |    11,833 | `Object`                     |
|  5.3% |  566 KiB |     6,041 | `UnlinkedFunctionExecutable` |
|  5.1% |  545 KiB |       165 | `FunctionCodeBlock`          |
|  4.5% |  479 KiB |    10,225 | `DOMAttributeGetterSetter`   |
|  4.1% |  434 KiB |    13,414 | `Function`                   |
|  1.4% |  154 KiB |     3,780 | `Immutable Butterfly`        |
|  1.2% |  124 KiB |     2,030 | `JSLexicalEnvironment`       |
|  1.1% |  116 KiB |     7,409 | `Array`                      |
|  1.0% |  108 KiB |       453 | `RegExp`                     |
|  1.0% |  104 KiB |     2,226 | `PropertyTable`              |
|  0.8% | 85.3 KiB |     1,364 | `SymbolTable`                |
|  0.8% | 83.7 KiB |       893 | `StructureRareData`          |
|  0.6% | 67.5 KiB |     2,159 | `CustomGetterSetter`         |
|  0.6% | 59.9 KiB |       767 | `NativeExecutable`           |
|  0.4% | 41.6 KiB |     1,330 | `DOMRect`                    |
|  0.3% | 32.4 KiB |        87 | `UnlinkedEvalCodeBlock`      |
|  0.2% | 24.9 KiB |        14 | `Window`                     |

#### Instances

Instances ranked by contribution to each constructor's self size.

##### `Structure`

|     % |  Size | Instances | Path                                                                |
| ----: | ----: | --------: | ------------------------------------------------------------------- |
| <0.1% | 336 B |         3 | `(GC root)`                                                         |
| <0.1% | 128 B |         1 | `FormMetadataClassification ← .FormMetadataClassificationJS Window` |
| <0.1% | 112 B |         1 | `Function ← .Deferred Function`                                     |
| <0.1% | 112 B |         1 | `Function ← .ULSPreferences JSLexicalEnvironment`                   |
| <0.1% | 112 B |         1 | `Function ← .sendEvent Object`                                      |

##### `UnlinkedFunctionCodeBlock`

|     % |    Size | Instances | Path                                                                                                                      |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------- |
| 96.5% | 928 KiB |     1,645 | `(GC root)`                                                                                                               |
|  3.3% |  32 KiB |        10 | `UnlinkedFunctionExecutable ← UnlinkedProgramCodeBlock ← <root>`                                                          |
|  0.1% |   911 B |         2 | `UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedProgramCodeBlock ← <root>` |
| <0.1% |   416 B |         1 | `UnlinkedFunctionExecutable ← <root>`                                                                                     |

##### `FunctionExecutable`

|     % |  Size | Instances | Path                                                                        |
| ----: | ----: | --------: | --------------------------------------------------------------------------- |
|  0.1% | 1 KiB |         8 | `Function ← Window`                                                         |
| <0.1% | 128 B |         1 | `(GC root)`                                                                 |
| <0.1% | 128 B |         1 | `Function ← Window ← <root>`                                                |
| <0.1% | 128 B |         1 | `Function ← <root>`                                                         |
| <0.1% | 128 B |         1 | `Function ← .toString JSLexicalEnvironment ← JSLexicalEnvironment ← <root>` |

##### `Object`

|    % |     Size | Instances | Path                                                 |
| ---: | -------: | --------: | ---------------------------------------------------- |
| 0.9% | 6.16 KiB |         8 | `(GC root)`                                          |
| 0.4% | 3.06 KiB |         4 | `.mediawiki.base Object`                             |
| 0.4% | 2.76 KiB |         2 | `.languages Object ← .data Object ← .uls Function`   |
| 0.2% | 1.56 KiB |         2 | `.territories Object ← .data Object ← .uls Function` |
| 0.1% |    608 B |         1 | `.RLCONF Window ← <root>`                            |

##### `UnlinkedFunctionExecutable`

|     % |     Size | Instances | Path                                                                                         |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------- |
| 62.1% |  352 KiB |     3,754 | `(GC root)`                                                                                  |
|  0.2% | 1.13 KiB |        12 | `UnlinkedProgramCodeBlock ← <root>`                                                          |
| <0.1% |    288 B |         3 | `<root>`                                                                                     |
| <0.1% |    288 B |         3 | `UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedProgramCodeBlock ← <root>` |
| <0.1% |     96 B |         1 | `FunctionExecutable ← Function ← .isCompatible Window ← <root>`                              |

##### `FunctionCodeBlock`

|     % |     Size | Instances | Path                                                                                           |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------- |
| 16.2% | 88.1 KiB |         1 | `FunctionExecutable ← FunctionRareData ← Function ← .articleTitleInformation Object`           |
| 10.2% | 55.6 KiB |         6 | `(GC root)`                                                                                    |
|  1.8% | 9.68 KiB |         1 | `FunctionExecutable ← FunctionRareData ← Function ← .findCandidateElements Object`             |
|  1.7% | 9.07 KiB |         1 | `FunctionExecutable ← FunctionRareData ← Function ← .findExtraArticleCandidateElements Object` |
|  1.4% | 7.63 KiB |         1 | `FunctionExecutable ← FunctionRareData ← Function ← .stringsMatchAnyRegularExpressions Window` |

##### `DOMAttributeGetterSetter`

|     % | Size | Instances | Path                                    |
| ----: | ---: | --------: | --------------------------------------- |
| <0.1% | 48 B |         1 | `.onwebkitmouseforcewillbegin Document` |
| <0.1% | 48 B |         1 | `.onwebkitmouseforceup Document`        |
| <0.1% | 48 B |         1 | `.onanimationstart Document`            |
| <0.1% | 48 B |         1 | `.onanimationiteration Document`        |
| <0.1% | 48 B |         1 | `.onanimationend Document`              |

##### `Function`

|     % |  Size | Instances | Path                                                                                                                     |
| ----: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------ |
|  0.1% | 266 B |         2 | `(GC root)`                                                                                                              |
| <0.1% |  97 B |         1 | `[11] Array ← .fns JSLexicalEnvironment ← .wikipage.content Object ← .hooks JSLexicalEnvironment`                        |
| <0.1% |  97 B |         1 | `.handler Object ← [0] Array ← .click Object ← .events Object ← .jQuery37102850593049792911 HTMLAnchorElement ← <root>`  |
| <0.1% |  97 B |         1 | `.handler Object ← [0] Array ← .click Object ← .events Object ← .jQuery371050900383851217591 HTMLAnchorElement ← <root>` |
| <0.1% |  96 B |         1 | `.warn Function ← .log Object`                                                                                           |

##### `Immutable Butterfly`

|    % |     Size | Instances | Path                                                                      |
| ---: | -------: | --------: | ------------------------------------------------------------------------- |
| 1.4% | 2.11 KiB |         5 | `(GC root)`                                                               |
| 0.3% |    432 B |         1 | `Array ← .allowedHtmlElements Object ← .mediawiki.jqueryMsg Object`       |
| 0.3% |    432 B |         1 | `Array ← .block Object ← .elementTypes Object ← .ve Window ← <root>`      |
| 0.3% |    432 B |         1 | `Array ← .CA Object ← .territories Object ← .data Object ← .uls Function` |
| 0.3% |    432 B |         1 | `Array ← .IN Object ← .territories Object ← .data Object ← .uls Function` |

##### `JSLexicalEnvironment`

|    % |     Size | Instances | Path                                                                                                |
| ---: | -------: | --------: | --------------------------------------------------------------------------------------------------- |
| 5.8% | 7.16 KiB |        13 | `(GC root)`                                                                                         |
| 4.0% | 4.97 KiB |        16 | `JSLexicalEnvironment`                                                                              |
| 0.4% |    448 B |         2 | `Function ← [0] Array ← .fns JSLexicalEnvironment ← .postEdit Object ← .hooks JSLexicalEnvironment` |
| 0.1% |    160 B |         1 | `JSLexicalEnvironment ← <root>`                                                                     |
| 0.1% |    160 B |         1 | `.testKitchen Object`                                                                               |

##### `Array`

|     % |  Size | Instances | Path                                                                                                                                                          |
| ----: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  0.2% | 265 B |         4 | `(GC root)`                                                                                                                                                   |
|  0.2% | 198 B |         3 | `Window`                                                                                                                                                      |
| <0.1% |  36 B |         1 | `._controlUniqueIDToControlMap Object ← .FormMetadataJS Window`                                                                                               |
| <0.1% |  19 B |         1 | `.matches Object ← [0] Array ← [0] Array ← .label  Function ← .tokenCache JSLexicalEnvironment`                                                               |
| <0.1% |  19 B |         1 | `.matches Object ← [0] Array ← [0] Array ← .figure[typeof~="mw:File/Thumb"] > :not(figcaption) .mw-file-element  Function ← .tokenCache JSLexicalEnvironment` |

##### `RegExp`

|     % |     Size | Instances | Path                                                                                         |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------- |
| 40.8% | 43.9 KiB |        24 | `(GC root)`                                                                                  |
|  7.8% | 8.38 KiB |         4 | `<root>`                                                                                     |
|  1.3% | 1.39 KiB |         1 | `UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedProgramCodeBlock ← <root>` |
|  1.2% | 1.28 KiB |         1 | `RegExp ← [0] Array ← ._forgotUserNameRegularExpressions Object ← .FormMetadataJS Window`    |
|  0.8% |    896 B |         1 | `RegExp ← [0] Array ← ._forgotEmailRegularExpressions Object ← .FormMetadataJS Window`       |

##### `PropertyTable`

|     % |  Size | Instances | Path                                                                                                                     |
| ----: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------ |
|  0.6% | 672 B |        14 | `(GC root)`                                                                                                              |
| <0.1% |  48 B |         1 | `Structure ← Function ← [11] Array ← .fns JSLexicalEnvironment ← .wikipage.content Object ← .hooks JSLexicalEnvironment` |
| <0.1% |  48 B |         1 | `Structure ← Function`                                                                                                   |
| <0.1% |  48 B |         1 | `Structure ← Structure ← InjectedScriptHost ← Structure ← InjectedScriptHost ← <root>`                                   |
| <0.1% |  48 B |         1 | `Structure ← InjectedScriptHost ← Structure ← InjectedScriptHost ← <root>`                                               |

##### `SymbolTable`

|    % |  Size | Instances | Path                                                                                                              |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------- |
| 0.7% | 576 B |         9 | `(GC root)`                                                                                                       |
| 0.2% | 192 B |         3 | `JSLexicalEnvironment ← <root>`                                                                                   |
| 0.1% | 128 B |         2 | `JSLexicalEnvironment ← JSLexicalEnvironment ← <root>`                                                            |
| 0.1% |  64 B |         1 | `JSLexicalEnvironment ← Function ← <root>`                                                                        |
| 0.1% |  64 B |         1 | `JSLexicalEnvironment ← .methods Function ← .CommandLineAPI JSLexicalEnvironment ← JSLexicalEnvironment ← <root>` |

##### `StructureRareData`

|    % | Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.1% | 96 B |         1 | `Structure ← <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.1% | 96 B |         1 | `Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← InjectedScript ← <root>` |
| 0.1% | 96 B |         1 | `Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← InjectedScript ← <root>`                                 |
| 0.1% | 96 B |         1 | `Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← InjectedScript ← <root>`                                                                 |
| 0.1% | 96 B |         1 | `Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← InjectedScript ← <root>`                                                                                                 |

##### `CustomGetterSetter`

|     % | Size | Instances | Path                            |
| ----: | ---: | --------: | ------------------------------- |
| <0.1% | 32 B |         1 | `.AudioBufferSourceNode Window` |
| <0.1% | 32 B |         1 | `.AudioContext Window`          |
| <0.1% | 32 B |         1 | `.AudioDestinationNode Window`  |
| <0.1% | 32 B |         1 | `.AudioListener Window`         |
| <0.1% | 32 B |         1 | `.AudioNode Window`             |

##### `NativeExecutable`

|     % |     Size | Instances | Path                                                                      |
| ----: | -------: | --------: | ------------------------------------------------------------------------- |
| 39.2% | 23.5 KiB |       301 | `(GC root)`                                                               |
|  0.1% |     80 B |         1 | `<root>`                                                                  |
|  0.1% |     80 B |         1 | `Function ← .next URLSearchParams Iterator ← Structure ← Window ← <root>` |
|  0.1% |     80 B |         1 | `Function ← .item DOMRectList`                                            |
|  0.1% |     80 B |         1 | `Function ← .abort AbortController`                                       |

##### `DOMRect`

|    % | Size | Instances | Path                                                              |
| ---: | ---: | --------: | ----------------------------------------------------------------- |
| 0.1% | 52 B |         1 | `Window`                                                          |
| 0.1% | 32 B |         1 | `._cachedElementBoundingRect HTMLDivElement`                      |
| 0.1% | 32 B |         1 | `._cachedElementBoundingRect HTMLTableElement ← [1] Array`        |
| 0.1% | 32 B |         1 | `._cachedElementBoundingRect HTMLTableSectionElement ← [2] Array` |
| 0.1% | 32 B |         1 | `._cachedElementBoundingRect HTMLTableElement ← [3] Array`        |

##### `UnlinkedEvalCodeBlock`

|      % |     Size | Instances | Path     |
| -----: | -------: | --------: | -------- |
| 100.0% | 32.4 KiB |        87 | `<root>` |

##### `Window`

|     % |     Size | Instances | Path                          |
| ----: | -------: | --------: | ----------------------------- |
| 71.2% | 17.7 KiB |        11 | `(GC root)`                   |
| 28.7% | 7.14 KiB |         2 | `<root>`                      |
|  0.1% |     17 B |         1 | `Structure ← Window ← <root>` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

|     % |     Size | Instances | Constructor                  |
| ----: | -------: | --------: | ---------------------------- |
| 55.2% | 5.76 MiB |    11,833 | `Object`                     |
| 28.1% | 2.93 MiB |    13,414 | `Function`                   |
| 19.3% | 2.01 MiB |     7,600 | `FunctionExecutable`         |
| 17.7% | 1.85 MiB |    12,177 | `Structure`                  |
| 15.6% | 1.62 MiB |     6,041 | `UnlinkedFunctionExecutable` |
| 11.2% | 1.17 MiB |     1,658 | `UnlinkedFunctionCodeBlock`  |
|  9.5% | 1015 KiB |        14 | `Window`                     |
|  7.8% |  837 KiB |     2,030 | `JSLexicalEnvironment`       |
|  6.1% |  649 KiB |     7,409 | `Array`                      |
|  5.1% |  547 KiB |       165 | `FunctionCodeBlock`          |
|  4.5% |  479 KiB |    10,225 | `DOMAttributeGetterSetter`   |
|  4.2% |  454 KiB |       893 | `StructureRareData`          |
|  2.5% |  272 KiB |        20 | `CSSStyleDeclaration`        |
|  2.5% |  271 KiB |         6 | `InjectedScript`             |
|  2.0% |  210 KiB |       270 | `FunctionRareData`           |
|  1.4% |  154 KiB |     3,780 | `Immutable Butterfly`        |
|  1.0% |  108 KiB |       453 | `RegExp`                     |
|  1.0% |  104 KiB |        14 | `UnlinkedProgramCodeBlock`   |
|  1.0% |  102 KiB |     2,226 | `PropertyTable`              |
|  0.8% | 85.1 KiB |     1,364 | `SymbolTable`                |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `Object`

|     % |     Size | Instances | Path                           |
| ----: | -------: | --------: | ------------------------------ |
| 61.9% | 3.56 MiB |         4 | `(GC root)`                    |
| 37.5% | 2.16 MiB |         2 | `.items Object`                |
|  4.7% |  276 KiB |         1 | `.jquery Object`               |
|  2.4% |  141 KiB |         1 | `.uls Function`                |
|  2.4% |  141 KiB |         1 | `.data Object ← .uls Function` |

##### `Function`

|     % |     Size | Instances | Path                                           |
| ----: | -------: | --------: | ---------------------------------------------- |
| 13.8% |  413 KiB |         2 | `.declarator Object ← .jquery Object`          |
| 10.3% |  308 KiB |         2 | `(GC root)`                                    |
|  3.0% | 91.1 KiB |         1 | `.articleTitleInformation Object`              |
|  2.9% | 85.8 KiB |         1 | `.declarator Object ← .jquery.uls.data Object` |
|  1.7% | 50.3 KiB |         1 | `.declarator Object`                           |

##### `FunctionExecutable`

|     % |     Size | Instances | Path                                                            |
| ----: | -------: | --------: | --------------------------------------------------------------- |
| 20.0% |  413 KiB |         2 | `Function ← .declarator Object ← .jquery Object`                |
|  4.4% |   91 KiB |         1 | `FunctionRareData ← Function ← .articleTitleInformation Object` |
|  4.2% | 85.7 KiB |         1 | `Function ← .declarator Object ← .jquery.uls.data Object`       |
|  2.4% | 50.3 KiB |         1 | `Function ← .declarator Object`                                 |
|  0.8% |   16 KiB |         1 | `(GC root)`                                                     |

##### `Structure`

|     % |     Size | Instances | Path                                                                          |
| ----: | -------: | --------: | ----------------------------------------------------------------------------- |
| 10.8% |  204 KiB |         3 | `(GC root)`                                                                   |
|  5.5% |  104 KiB |         2 | `Object ← .mediawiki.base Object`                                             |
|  4.7% | 88.6 KiB |         2 | `StructureRareData ← Structure ← Object ← .mediawiki.base Object`             |
|  3.6% |   68 KiB |         1 | `Window`                                                                      |
|  2.3% | 44.2 KiB |         1 | `Structure ← StructureRareData ← Structure ← Object ← .mediawiki.base Object` |

##### `UnlinkedFunctionExecutable`

|      % |     Size | Instances | Path                                                                                         |
| -----: | -------: | --------: | -------------------------------------------------------------------------------------------- |
| 110.5% | 1.79 MiB |     3,773 | `(GC root)`                                                                                  |
|   5.3% | 87.7 KiB |        12 | `UnlinkedProgramCodeBlock ← <root>`                                                          |
|   0.1% | 1.25 KiB |         3 | `UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedProgramCodeBlock ← <root>` |
|  <0.1% |    721 B |         3 | `<root>`                                                                                     |
|  <0.1% |     96 B |         1 | `FunctionExecutable ← Function ← .isCompatible Window ← <root>`                              |

##### `UnlinkedFunctionCodeBlock`

|      % |     Size | Instances | Path                                                                                                                      |
| -----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------- |
| 127.7% | 1.49 MiB |     1,645 | `(GC root)`                                                                                                               |
|   7.3% | 86.6 KiB |        10 | `UnlinkedFunctionExecutable ← UnlinkedProgramCodeBlock ← <root>`                                                          |
|   0.1% |    992 B |         2 | `UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedProgramCodeBlock ← <root>` |
|  <0.1% |    433 B |         1 | `UnlinkedFunctionExecutable ← <root>`                                                                                     |

##### `Window`

|     % |    Size | Instances | Path                          |
| ----: | ------: | --------: | ----------------------------- |
| 73.0% | 740 KiB |        11 | `(GC root)`                   |
| 27.0% | 274 KiB |         2 | `<root>`                      |
|  0.1% |   536 B |         1 | `Structure ← Window ← <root>` |

##### `JSLexicalEnvironment`

|     % |     Size | Instances | Path                               |
| ----: | -------: | --------: | ---------------------------------- |
| 44.4% |  371 KiB |        22 | `(GC root)`                        |
| 13.1% |  110 KiB |         6 | `<root>`                           |
| 13.0% |  109 KiB |         6 | `JSLexicalEnvironment ← <root>`    |
|  7.0% | 58.7 KiB |         5 | `JSLexicalEnvironment`             |
|  0.8% |  6.5 KiB |         1 | `.state Object ← .internal Object` |

##### `Array`

|     % |     Size | Instances | Path                                                    |
| ----: | -------: | --------: | ------------------------------------------------------- |
| 21.4% |  139 KiB |         3 | `(GC root)`                                             |
|  7.9% | 51.1 KiB |         2 | `.choiceData Object`                                    |
|  5.3% | 34.3 KiB |         1 | `.css Object ← .style Object ← .mmv.codex Object`       |
|  3.9% | 25.2 KiB |         1 | `.css Object ← .style Object ← .ext.popups.main Object` |
|  1.6% | 10.5 KiB |         1 | `.css Object ← .style Object`                           |

##### `FunctionCodeBlock`

|     % |     Size | Instances | Path                                                                                           |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------- |
| 16.6% | 90.8 KiB |         1 | `FunctionExecutable ← FunctionRareData ← Function ← .articleTitleInformation Object`           |
| 10.2% | 55.6 KiB |         6 | `(GC root)`                                                                                    |
|  1.8% | 9.68 KiB |         1 | `FunctionExecutable ← FunctionRareData ← Function ← .findCandidateElements Object`             |
|  1.7% | 9.07 KiB |         1 | `FunctionExecutable ← FunctionRareData ← Function ← .findExtraArticleCandidateElements Object` |
|  1.4% | 7.63 KiB |         1 | `FunctionExecutable ← FunctionRareData ← Function ← .stringsMatchAnyRegularExpressions Window` |

##### `DOMAttributeGetterSetter`

|     % | Size | Instances | Path                                    |
| ----: | ---: | --------: | --------------------------------------- |
| <0.1% | 48 B |         1 | `.onwebkitmouseforcewillbegin Document` |
| <0.1% | 48 B |         1 | `.onwebkitmouseforceup Document`        |
| <0.1% | 48 B |         1 | `.onanimationstart Document`            |
| <0.1% | 48 B |         1 | `.onanimationiteration Document`        |
| <0.1% | 48 B |         1 | `.onanimationend Document`              |

##### `StructureRareData`

|     % |     Size | Instances | Path                                                                                 |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------ |
| 26.9% |  122 KiB |         4 | `Structure ← Object ← .mediawiki.base Object`                                        |
|  2.6% | 11.9 KiB |         1 | `(GC root)`                                                                          |
|  1.7% | 7.77 KiB |         1 | `Structure ← Object`                                                                 |
|  1.7% | 7.56 KiB |         1 | `Structure ← StructureRareData ← Structure ← Object`                                 |
|  1.6% | 7.36 KiB |         1 | `Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← Object` |

##### `CSSStyleDeclaration`

|     % |     Size | Instances | Path                               |
| ----: | -------: | --------: | ---------------------------------- |
| 74.9% |  204 KiB |         3 | `(GC root)`                        |
| 25.0% | 67.9 KiB |         1 | `Structure ← Window`               |
|  0.1% |    352 B |        11 | `<root>`                           |
| <0.1% |     32 B |         1 | `.emptyStyle JSLexicalEnvironment` |
| <0.1% |     32 B |         1 | `._cachedContentTextStyle Object`  |

##### `InjectedScript`

|      % |    Size | Instances | Path     |
| -----: | ------: | --------: | -------- |
| 100.0% | 271 KiB |         6 | `<root>` |

##### `FunctionRareData`

|     % |     Size | Instances | Path                                                                                     |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------- |
| 43.3% |   91 KiB |         1 | `Function ← .articleTitleInformation Object`                                             |
|  5.8% | 12.2 KiB |         1 | `Function ← .stringsMatchAnyRegularExpressions Window`                                   |
|  4.7% | 9.88 KiB |         1 | `Function ← .findCandidateElements Object`                                               |
|  4.4% | 9.27 KiB |         1 | `Function ← .findExtraArticleCandidateElements Object`                                   |
|  3.5% | 7.36 KiB |         1 | `Function ← .extraArticleCandidateIfElementIsViable Function ← .CandidateElement Window` |

##### `Immutable Butterfly`

|    % |     Size | Instances | Path                                                                      |
| ---: | -------: | --------: | ------------------------------------------------------------------------- |
| 1.4% | 2.11 KiB |         5 | `(GC root)`                                                               |
| 0.3% |    432 B |         1 | `Array ← .allowedHtmlElements Object ← .mediawiki.jqueryMsg Object`       |
| 0.3% |    432 B |         1 | `Array ← .block Object ← .elementTypes Object ← .ve Window ← <root>`      |
| 0.3% |    432 B |         1 | `Array ← .CA Object ← .territories Object ← .data Object ← .uls Function` |
| 0.3% |    432 B |         1 | `Array ← .IN Object ← .territories Object ← .data Object ← .uls Function` |

##### `RegExp`

|     % |     Size | Instances | Path                                                                                         |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------- |
| 30.4% | 32.7 KiB |        14 | `(GC root)`                                                                                  |
|  5.7% | 6.13 KiB |         2 | `<root>`                                                                                     |
|  1.3% | 1.39 KiB |         1 | `UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedProgramCodeBlock ← <root>` |
|  1.2% | 1.31 KiB |         1 | `[0] Array ← ._forgotUserNameRegularExpressions Object ← .FormMetadataJS Window`             |
|  1.2% | 1.28 KiB |         1 | `RegExp ← [0] Array ← ._forgotUserNameRegularExpressions Object ← .FormMetadataJS Window`    |

##### `UnlinkedProgramCodeBlock`

|      % |    Size | Instances | Path     |
| -----: | ------: | --------: | -------- |
| 100.0% | 104 KiB |        14 | `<root>` |

##### `PropertyTable`

|     % |  Size | Instances | Path                                                                                                                     |
| ----: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------ |
|  0.6% | 672 B |        14 | `(GC root)`                                                                                                              |
| <0.1% |  48 B |         1 | `Structure ← Function ← [11] Array ← .fns JSLexicalEnvironment ← .wikipage.content Object ← .hooks JSLexicalEnvironment` |
| <0.1% |  48 B |         1 | `Structure ← Function`                                                                                                   |
| <0.1% |  48 B |         1 | `Structure ← Structure ← InjectedScriptHost ← Structure ← InjectedScriptHost ← <root>`                                   |
| <0.1% |  48 B |         1 | `Structure ← InjectedScriptHost ← Structure ← InjectedScriptHost ← <root>`                                               |

##### `SymbolTable`

|    % |  Size | Instances | Path                                                                                                              |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------- |
| 0.7% | 576 B |         9 | `(GC root)`                                                                                                       |
| 0.2% | 192 B |         3 | `JSLexicalEnvironment ← <root>`                                                                                   |
| 0.1% | 128 B |         2 | `JSLexicalEnvironment ← JSLexicalEnvironment ← <root>`                                                            |
| 0.1% |  64 B |         1 | `JSLexicalEnvironment ← Function ← <root>`                                                                        |
| 0.1% |  64 B |         1 | `JSLexicalEnvironment ← .methods Function ← .CommandLineAPI JSLexicalEnvironment ← JSLexicalEnvironment ← <root>` |

## Largest strings

Strings ranked by bytes allocated for them.

|    % |     Size | Path                                                                           |
| ---: | -------: | ------------------------------------------------------------------------------ |
| 2.6% |  275 KiB | `FunctionExecutable ← Function ← .declarator Object ← .jquery Object`          |
| 1.3% |  137 KiB | `FunctionExecutable ← Function ← .declarator Object ← .jquery Object`          |
| 0.9% |   93 KiB | `.ext.popups.main@4i3g7 Object ← .items Object`                                |
| 0.9% |   93 KiB | `.ext.popups.main@4i3g7 Object ← .items Object`                                |
| 0.8% | 86.1 KiB | `.jquery.uls.data@1150b Object ← .items Object`                                |
| 0.8% | 85.5 KiB | `FunctionExecutable ← Function ← .declarator Object ← .jquery.uls.data Object` |
| 0.8% | 84.7 KiB | `.ext.wikimediaEvents@1o9qe Object ← .items Object`                            |
| 0.8% | 84.7 KiB | `.ext.wikimediaEvents@1o9qe Object ← .items Object`                            |
| 0.7% | 70.1 KiB | `.mmv.codex@1inu8 Object ← .items Object`                                      |
| 0.7% | 70.1 KiB | `.mmv.codex@1inu8 Object ← .items Object`                                      |
| 0.6% | 61.7 KiB | `.skins.vector.js@1s6hs Object ← .items Object`                                |
| 0.6% | 61.7 KiB | `.skins.vector.js@1s6hs Object ← .items Object`                                |
| 0.5% | 50.7 KiB | `.ext.quicksurveys.lib@1to1x Object ← .items Object`                           |
| 0.5% | 50.1 KiB | `FunctionExecutable ← Function ← .declarator Object`                           |
| 0.4% | 47.5 KiB | `.ext.uls.interface@1u7jd Object ← .items Object`                              |
| 0.4% | 47.5 KiB | `.ext.uls.interface@1u7jd Object ← .items Object`                              |
| 0.4% | 43.1 KiB | `.jquery.uls.data@1150b Object ← .items Object`                                |
| 0.3% | 34.3 KiB | `(GC root)`                                                                    |
| 0.3% | 34.3 KiB | `[0] Array ← .css Object ← .style Object ← .mmv.codex Object`                  |
| 0.3% | 33.9 KiB | `<root>`                                                                       |

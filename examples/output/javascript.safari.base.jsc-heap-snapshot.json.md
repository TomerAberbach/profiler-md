# Heap snapshot

Held 10.4 MiB over 109,569 nodes and 307,833 edges.

| Category           |     % |     Size |  Nodes |
| ------------------ | ----: | -------: | -----: |
| String             | 32.6% | 3.39 MiB | 19,395 |
| Code               | 28.8% |    3 MiB | 16,245 |
| Object shape       | 12.5% |  1.3 MiB | 12,175 |
| Internal           |  9.8% | 1.02 MiB | 20,137 |
| Object             |  8.6% |  920 KiB | 16,441 |
| Function           |  4.1% |  436 KiB | 13,484 |
| Array              |  2.5% |  270 KiB | 11,204 |
| Regular expression |  1.0% |  108 KiB |    453 |
| Symbol             | <0.1% |    448 B |     28 |
| Native             | <0.1% |    231 B |      7 |

`B ←(several paths)– A` means `A` retains `B` only through other nodes, along several paths.

## Largest constructors

### Self size

Constructors with the most instance bytes, excluding referenced nodes.

|     % |     Size | Instances | Constructor                  |
| ----: | -------: | --------: | ---------------------------- |
| 12.5% |  1.3 MiB |    12,175 | `Structure`                  |
|  9.0% |  962 KiB |     1,660 | `UnlinkedFunctionCodeBlock`  |
|  8.9% |  950 KiB |     7,600 | `FunctionExecutable`         |
|  6.5% |  697 KiB |    11,833 | `Object`                     |
|  5.3% |  566 KiB |     6,041 | `UnlinkedFunctionExecutable` |
|  5.0% |  533 KiB |       162 | `FunctionCodeBlock`          |
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

#### Categories

Categories accounting for at least 1.0% of self size.

##### Code

|     % |     Size | Instances | Constructor                  |
| ----: | -------: | --------: | ---------------------------- |
|  9.0% |  962 KiB |     1,660 | `UnlinkedFunctionCodeBlock`  |
|  8.9% |  950 KiB |     7,600 | `FunctionExecutable`         |
|  5.3% |  566 KiB |     6,041 | `UnlinkedFunctionExecutable` |
|  5.0% |  533 KiB |       162 | `FunctionCodeBlock`          |
|  0.6% | 59.9 KiB |       767 | `NativeExecutable`           |
| <0.1% | 1.64 KiB |        15 | `ProgramExecutable`          |

##### Object shape

|     % |    Size | Instances | Constructor |
| ----: | ------: | --------: | ----------- |
| 12.5% | 1.3 MiB |    12,175 | `Structure` |

##### Internal

|     % |     Size | Instances | Constructor                  |
| ----: | -------: | --------: | ---------------------------- |
|  4.5% |  479 KiB |    10,225 | `DOMAttributeGetterSetter`   |
|  1.2% |  124 KiB |     2,030 | `JSLexicalEnvironment`       |
|  1.0% |  104 KiB |     2,226 | `PropertyTable`              |
|  0.8% | 85.3 KiB |     1,364 | `SymbolTable`                |
|  0.8% | 83.7 KiB |       893 | `StructureRareData`          |
|  0.6% | 67.5 KiB |     2,159 | `CustomGetterSetter`         |
|  0.3% | 32.4 KiB |        87 | `UnlinkedEvalCodeBlock`      |
|  0.2% | 18.1 KiB |       232 | `FunctionRareData`           |
|  0.2% | 17.5 KiB |       160 | `EvalExecutable`             |
|  0.1% | 15.7 KiB |        14 | `UnlinkedProgramCodeBlock`   |
|  0.1% | 9.28 KiB |       297 | `GetterSetter`               |
| <0.1% | 4.73 KiB |       101 | `JSPropertyNameEnumerator`   |
| <0.1% | 4.41 KiB |       282 | `StructureChain`             |
| <0.1% | 1.02 KiB |        29 | `HashMapBucket`              |
| <0.1% |    448 B |         7 | `JSGlobalLexicalEnvironment` |
| <0.1% |    402 B |        12 | `InjectedScriptHost`         |
| <0.1% |    336 B |        12 | `CommandLineAPIHost`         |
| <0.1% |    192 B |         6 | `JSWindowProxy`              |

##### Object

|     % |     Size | Instances | Constructor           |
| ----: | -------: | --------: | --------------------- |
|  6.5% |  697 KiB |    11,833 | `Object`              |
|  0.4% | 41.6 KiB |     1,330 | `DOMRect`             |
|  0.2% | 24.9 KiB |        14 | `Window`              |
|  0.2% | 22.2 KiB |       468 | `HTMLSpanElement`     |
|  0.2% | 19.7 KiB |       418 | `HTMLDivElement`      |
|  0.1% | 13.4 KiB |       283 | `HTMLLIElement`       |
|  0.1% | 10.5 KiB |       205 | `HTMLElement`         |
|  0.1% | 9.29 KiB |       108 | `HTMLCollection`      |
|  0.1% | 8.05 KiB |       170 | `HTMLAnchorElement`   |
|  0.1% |  6.3 KiB |        20 | `CSSStyleDeclaration` |
| <0.1% |  5.1 KiB |       160 | `Text`                |
| <0.1% | 4.45 KiB |        95 | `jQuery`              |
| <0.1% | 4.38 KiB |       140 | `DOMTokenList`        |
| <0.1% | 3.83 KiB |        77 | `HTMLInputElement`    |
| <0.1% | 3.66 KiB |        76 | `HTMLButtonElement`   |
| <0.1% | 3.61 KiB |        78 | `HTMLUListElement`    |
| <0.1% |  2.3 KiB |        51 | `HTMLLabelElement`    |
| <0.1% | 2.03 KiB |        26 | `TooltippedElement`   |
| <0.1% | 1.95 KiB |         9 | `Set`                 |
| <0.1% | 1.78 KiB |         9 | `Document`            |

##### Function

|     % |    Size | Instances | Constructor              |
| ----: | ------: | --------: | ------------------------ |
|  4.1% | 434 KiB |    13,414 | `Function`               |
| <0.1% |   490 B |        14 | `GeneratorFunction`      |
| <0.1% |   490 B |        14 | `AsyncGeneratorFunction` |
| <0.1% |   483 B |        14 | `AsyncFunction`          |
| <0.1% |   450 B |        14 | `CallbackObject`         |
| <0.1% |   448 B |        14 | `Callee`                 |

##### Array

|     % |    Size | Instances | Constructor           |
| ----: | ------: | --------: | --------------------- |
|  1.4% | 154 KiB |     3,780 | `Immutable Butterfly` |
|  1.1% | 116 KiB |     7,409 | `Array`               |
| <0.1% |   256 B |         8 | `SparseArrayValueMap` |
| <0.1% |   126 B |         7 | `Array Iterator`      |

##### Regular expression

|    % |    Size | Instances | Constructor |
| ---: | ------: | --------: | ----------- |
| 1.0% | 108 KiB |       453 | `RegExp`    |

#### Retainer paths

Retainer paths with the largest contribution to each constructor's self size.

##### `Structure`

|     % |  Size | Instances | Path                                                                                                     |
| ----: | ----: | --------: | -------------------------------------------------------------------------------------------------------- |
| <0.1% | 448 B |         4 | `Structure ←(several paths)– <root>`                                                                     |
| <0.1% | 128 B |         1 | `Structure ← FormMetadataClassification ←.FormMetadataClassificationJS– Window ←(several paths)– <root>` |
| <0.1% | 112 B |         1 | `Structure ← Function ←.Deferred– Function ←(several paths)– <root>`                                     |
| <0.1% | 112 B |         1 | `Structure ← Function ←(several paths)– <root>`                                                          |
| <0.1% | 112 B |         1 | `Structure ← Function ←.updateTooltipAccessKeys– Object ←(several paths)– <root>`                        |

##### `UnlinkedFunctionCodeBlock`

|    % |     Size | Instances | Path                                                                                                                                                                                                |
| ---: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.3% | 41.1 KiB |         4 | `UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ←(several paths)– <root>`                                                                                                                   |
| 3.9% | 37.9 KiB |         1 | `UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ←(several paths)– <root>` |
| 2.7% |   26 KiB |         1 | `UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedProgramCodeBlock ← <root>`                                                                                                        |
| 1.4% | 13.9 KiB |         1 | `UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ←(several paths)– <root>`                                                          |
| 0.5% | 5.24 KiB |         1 | `UnlinkedFunctionCodeBlock ←(several paths)– <root>`                                                                                                                                                |

##### `FunctionExecutable`

|     % |  Size | Instances | Path                                                                                                                                         |
| ----: | ----: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------- |
| <0.1% | 128 B |         1 | `FunctionExecutable ←(several paths)– <root>`                                                                                                |
| <0.1% | 128 B |         1 | `FunctionExecutable ← Function ← Window ← <root>`                                                                                            |
| <0.1% | 128 B |         1 | `FunctionExecutable ← Function ←(several paths)– InjectedScript ← <root>`                                                                    |
| <0.1% | 128 B |         1 | `FunctionExecutable ← Function ←.toString– JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– InjectedScript ← <root>`            |
| <0.1% | 128 B |         1 | `FunctionExecutable ← Function ←.toStringDescription– JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– InjectedScript ← <root>` |

##### `Object`

|    % |     Size | Instances | Path                                                                                   |
| ---: | -------: | --------: | -------------------------------------------------------------------------------------- |
| 0.5% | 3.59 KiB |         4 | `Object ←(several paths)– <root>`                                                      |
| 0.4% | 2.76 KiB |         2 | `Object ←.languages– Object ←.data– Object ←.uls– Function ←(several paths)– <root>`   |
| 0.3% | 1.86 KiB |         2 | `Object ←(several paths)– Object ←.mediawiki.base– Object ←(several paths)– <root>`    |
| 0.2% | 1.56 KiB |         2 | `Object ←.territories– Object ←.data– Object ←.uls– Function ←(several paths)– <root>` |
| 0.1% |    715 B |         1 | `Object ←(several paths)– Window ←(several paths)– <root>`                             |

##### `UnlinkedFunctionExecutable`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                      |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  7.1% | 40.3 KiB |       430 | `UnlinkedFunctionExecutable ←(several paths)– <root>`                                                                                                                                                                                                                                     |
|  1.0% | 5.91 KiB |        63 | `UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ←(several paths)– <root>`                                                                                                                                                                            |
|  0.2% |    960 B |        10 | `UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ←(several paths)– <root>`                                                                                                                   |
| <0.1% |     96 B |         1 | `UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ←(several paths)– <root>`                                                          |
| <0.1% |     96 B |         1 | `UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ←(several paths)– <root>` |

##### `FunctionCodeBlock`

|     % |     Size | Instances | Path                                                                                                                                        |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 16.5% | 88.1 KiB |         1 | `FunctionCodeBlock ← FunctionExecutable ← FunctionRareData ← Function ←.articleTitleInformation– Object ←(several paths)– <root>`           |
| 10.4% | 55.6 KiB |         6 | `FunctionCodeBlock ←(several paths)– <root>`                                                                                                |
|  1.8% | 9.68 KiB |         1 | `FunctionCodeBlock ← FunctionExecutable ← FunctionRareData ← Function ←.findCandidateElements– Object ←(several paths)– <root>`             |
|  1.7% | 9.07 KiB |         1 | `FunctionCodeBlock ← FunctionExecutable ← FunctionRareData ← Function ←.findExtraArticleCandidateElements– Object ←(several paths)– <root>` |
|  1.4% | 7.63 KiB |         1 | `FunctionCodeBlock ← FunctionExecutable ← FunctionRareData ← Function ←.stringsMatchAnyRegularExpressions– Window ←(several paths)– <root>` |

##### `DOMAttributeGetterSetter`

|     % | Size | Instances | Path                                                                     |
| ----: | ---: | --------: | ------------------------------------------------------------------------ |
| <0.1% | 48 B |         1 | `DOMAttributeGetterSetter ←(several paths)– <root>`                      |
| <0.1% | 48 B |         1 | `DOMAttributeGetterSetter ←.prefix– Element ←(several paths)– <root>`    |
| <0.1% | 48 B |         1 | `DOMAttributeGetterSetter ←.localName– Element ←(several paths)– <root>` |
| <0.1% | 48 B |         1 | `DOMAttributeGetterSetter ←.tagName– Element ←(several paths)– <root>`   |
| <0.1% | 48 B |         1 | `DOMAttributeGetterSetter ←.id– Element ←(several paths)– <root>`        |

##### `Function`

|     % |  Size | Instances | Path                                                                                                                                                           |
| ----: | ----: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  0.1% | 267 B |         2 | `Function ←(several paths)– <root>`                                                                                                                            |
| <0.1% |  97 B |         1 | `Function ←[11]– Array ←.fns– JSLexicalEnvironment ←(several paths)– Object ←.wikipage.content– Object ←.hooks– JSLexicalEnvironment ←(several paths)– <root>` |
| <0.1% |  97 B |         1 | `Function ←.handler– Object ←[0]– Array ←.click– Object ←.events– Object ←.jQuery371070616879042118561– HTMLAnchorElement ← <root>`                            |
| <0.1% |  97 B |         1 | `Function ←.handler– Object ←[0]– Array ←.click– Object ←.events– Object ←.jQuery371050900383851217591– HTMLAnchorElement ← <root>`                            |
| <0.1% |  96 B |         1 | `Function ←.warn– Function ←.log– Object ←(several paths)– <root>`                                                                                             |

##### `Immutable Butterfly`

|    % |     Size | Instances | Path                                                                                                                                        |
| ---: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.4% | 2.11 KiB |         5 | `Immutable Butterfly ←(several paths)– <root>`                                                                                              |
| 0.3% |    432 B |         1 | `Immutable Butterfly ← Array ←.allowedHtmlElements– Object ←(several paths)– Object ←.mediawiki.jqueryMsg– Object ←(several paths)– <root>` |
| 0.3% |    432 B |         1 | `Immutable Butterfly ← Array ←.block– Object ←.elementTypes– Object ←.ve– Window ← <root>`                                                  |
| 0.3% |    432 B |         1 | `Immutable Butterfly ← Array ←.CA– Object ←.territories– Object ←.data– Object ←.uls– Function ←(several paths)– <root>`                    |
| 0.3% |    432 B |         1 | `Immutable Butterfly ← Array ←.IN– Object ←.territories– Object ←.data– Object ←.uls– Function ←(several paths)– <root>`                    |

##### `JSLexicalEnvironment`

|    % |     Size | Instances | Path                                                                                                                                                                         |
| ---: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.6% |    7 KiB |        12 | `JSLexicalEnvironment ←(several paths)– <root>`                                                                                                                              |
| 3.2% | 3.94 KiB |        11 | `JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– <root>`                                                                                                       |
| 0.7% |    896 B |         4 | `JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– Object ←(several paths)– <root>`                                                                              |
| 0.4% |    448 B |         2 | `JSLexicalEnvironment ← Function ←[0]– Array ←.fns– JSLexicalEnvironment ←(several paths)– Object ←.postEdit– Object ←.hooks– JSLexicalEnvironment ←(several paths)– <root>` |
| 0.1% |    160 B |         1 | `JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– InjectedScript ← <root>`                                                                                      |

##### `Array`

|     % |  Size | Instances | Path                                                                                                                                                                                           |
| ----: | ----: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  0.2% | 265 B |         4 | `Array ←(several paths)– <root>`                                                                                                                                                               |
|  0.2% | 198 B |         3 | `Array ← Window ←(several paths)– <root>`                                                                                                                                                      |
| <0.1% |  36 B |         1 | `Array ←._controlUniqueIDToControlMap– Object ←.FormMetadataJS– Window ←(several paths)– <root>`                                                                                               |
| <0.1% |  19 B |         1 | `Array ←.matches– Object ←[0]– Array ←[0]– Array ←.label – Function ←.tokenCache– JSLexicalEnvironment ←(several paths)– <root>`                                                               |
| <0.1% |  19 B |         1 | `Array ←.matches– Object ←[0]– Array ←[0]– Array ←.figure[typeof~="mw:File/Thumb"] > :not(figcaption) .mw-file-element – Function ←.tokenCache– JSLexicalEnvironment ←(several paths)– <root>` |

##### `RegExp`

|     % |     Size | Instances | Path                                                                                                                        |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------- |
| 26.5% | 28.5 KiB |        12 | `RegExp ←(several paths)– <root>`                                                                                           |
|  5.7% | 6.13 KiB |         2 | `RegExp ← <root>`                                                                                                           |
|  3.9% |  4.2 KiB |         2 | `RegExp ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ←(several paths)– <root>`                                  |
|  1.3% | 1.39 KiB |         1 | `RegExp ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedProgramCodeBlock ← <root>`                       |
|  1.2% | 1.28 KiB |         1 | `RegExp ← RegExp ←[0]– Array ←._forgotUserNameRegularExpressions– Object ←.FormMetadataJS– Window ←(several paths)– <root>` |

##### `PropertyTable`

|     % |  Size | Instances | Path                                                                                                                                                                                       |
| ----: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  0.3% | 336 B |         7 | `PropertyTable ← Structure ←(several paths)– <root>`                                                                                                                                       |
|  0.1% |  96 B |         2 | `PropertyTable ← Structure ← Function ←(several paths)– <root>`                                                                                                                            |
| <0.1% |  48 B |         1 | `PropertyTable ← Structure ← Function ←[11]– Array ←.fns– JSLexicalEnvironment ←(several paths)– Object ←.wikipage.content– Object ←.hooks– JSLexicalEnvironment ←(several paths)– <root>` |
| <0.1% |  48 B |         1 | `PropertyTable ← Structure ← Function ←.reduce– Array ←(several paths)– <root>`                                                                                                            |
| <0.1% |  48 B |         1 | `PropertyTable ← Structure ←(several paths)– Object ←(several paths)– <root>`                                                                                                              |

##### `SymbolTable`

|    % |  Size | Instances | Path                                                                                                                                                                                      |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.7% | 576 B |         9 | `SymbolTable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ←(several paths)– <root>`                                                                                           |
| 0.2% | 192 B |         3 | `SymbolTable ← JSLexicalEnvironment ←(several paths)– InjectedScript ← <root>`                                                                                                            |
| 0.1% | 128 B |         2 | `SymbolTable ← JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– InjectedScript ← <root>`                                                                                     |
| 0.1% |  64 B |         1 | `SymbolTable ← JSLexicalEnvironment ← Function ←(several paths)– InjectedScript ← <root>`                                                                                                 |
| 0.1% |  64 B |         1 | `SymbolTable ← JSLexicalEnvironment ←(several paths)– Object ←.methods– Function ←.CommandLineAPI– JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– InjectedScript ← <root>` |

##### `StructureRareData`

|    % | Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---: | ---: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.1% | 96 B |         1 | `StructureRareData ← Structure ←(several paths)– InjectedScript ← <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.1% | 96 B |         1 | `StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← InjectedScript ← <root>` |
| 0.1% | 96 B |         1 | `StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← InjectedScript ← <root>`                                 |
| 0.1% | 96 B |         1 | `StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← InjectedScript ← <root>`                                                                 |
| 0.1% | 96 B |         1 | `StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← InjectedScript ← <root>`                                                                                                 |

##### `CustomGetterSetter`

|     % | Size | Instances | Path                                                                         |
| ----: | ---: | --------: | ---------------------------------------------------------------------------- |
| <0.1% | 32 B |         1 | `CustomGetterSetter ←.constructor– Element ←(several paths)– <root>`         |
| <0.1% | 32 B |         1 | `CustomGetterSetter ←.constructor– HTMLElement ←(several paths)– <root>`     |
| <0.1% | 32 B |         1 | `CustomGetterSetter ←.onmouseenter– HTMLElement ←(several paths)– <root>`    |
| <0.1% | 32 B |         1 | `CustomGetterSetter ←.onmouseleave– HTMLElement ←(several paths)– <root>`    |
| <0.1% | 32 B |         1 | `CustomGetterSetter ←.constructor– HTMLHtmlElement ←(several paths)– <root>` |

##### `NativeExecutable`

|     % |     Size | Instances | Path                                                                                         |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------- |
| 39.2% | 23.5 KiB |       301 | `NativeExecutable ←(several paths)– <root>`                                                  |
|  0.1% |     80 B |         1 | `NativeExecutable ← <root>`                                                                  |
|  0.1% |     80 B |         1 | `NativeExecutable ← Function ←.next– URLSearchParams Iterator ← Structure ← Window ← <root>` |
|  0.1% |     80 B |         1 | `NativeExecutable ← Function ←.item– DOMRectList ←(several paths)– <root>`                   |
|  0.1% |     80 B |         1 | `NativeExecutable ← Function ←.abort– AbortController ←(several paths)– <root>`              |

##### `DOMRect`

|    % | Size | Instances | Path                                                                                            |
| ---: | ---: | --------: | ----------------------------------------------------------------------------------------------- |
| 0.1% | 52 B |         1 | `DOMRect ← Window ←(several paths)– <root>`                                                     |
| 0.1% | 32 B |         1 | `DOMRect ←._cachedElementBoundingRect– HTMLSpanElement ←[1120]– Array ←(several paths)– <root>` |
| 0.1% | 32 B |         1 | `DOMRect ←._cachedElementBoundingRect– HTMLElement ←[1121]– Array ←(several paths)– <root>`     |
| 0.1% | 32 B |         1 | `DOMRect ←._cachedElementBoundingRect– HTMLLIElement ←[1122]– Array ←(several paths)– <root>`   |
| 0.1% | 32 B |         1 | `DOMRect ←._cachedElementBoundingRect– HTMLSpanElement ←[1123]– Array ←(several paths)– <root>` |

##### `UnlinkedEvalCodeBlock`

|      % |     Size | Instances | Path                             |
| -----: | -------: | --------: | -------------------------------- |
| 100.0% | 32.4 KiB |        87 | `UnlinkedEvalCodeBlock ← <root>` |

##### `Window`

|     % |     Size | Instances | Path                                   |
| ----: | -------: | --------: | -------------------------------------- |
| 71.2% | 17.7 KiB |        11 | `Window ←(several paths)– <root>`      |
| 28.7% | 7.14 KiB |         2 | `Window ← <root>`                      |
|  0.1% |     17 B |         1 | `Window ← Structure ← Window ← <root>` |

##### `HTMLSpanElement`

|    % | Size | Instances | Path                                                     |
| ---: | ---: | --------: | -------------------------------------------------------- |
| 0.2% | 49 B |         1 | `HTMLSpanElement ←[22]– Array ←(several paths)– <root>`  |
| 0.2% | 49 B |         1 | `HTMLSpanElement ←[863]– Array ←(several paths)– <root>` |
| 0.2% | 49 B |         1 | `HTMLSpanElement ←[865]– Array ←(several paths)– <root>` |
| 0.2% | 49 B |         1 | `HTMLSpanElement ←[32]– Array ←(several paths)– <root>`  |
| 0.2% | 49 B |         1 | `HTMLSpanElement ←[866]– Array ←(several paths)– <root>` |

##### `HTMLDivElement`

|    % |  Size | Instances | Path                                                                                                                      |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------- |
| 2.5% | 500 B |        10 | `HTMLDivElement ←(several paths)– <root>`                                                                                 |
| 0.2% |  50 B |         1 | `HTMLDivElement ←._formElement– Object ←(several paths)– Object ←.FormMetadataJS– Window ←(several paths)– <root>`        |
| 0.2% |  50 B |         1 | `HTMLDivElement ←._backingElement– Object ←(several paths)– Object ←.FormMetadataJS– Window ←(several paths)– <root>`     |
| 0.2% |  50 B |         1 | `HTMLDivElement ←._backingElement– Object ←[9]– Array ←._forms– Object ←.FormMetadataJS– Window ←(several paths)– <root>` |
| 0.2% |  50 B |         1 | `HTMLDivElement ←[672]– Array ←(several paths)– <root>`                                                                   |

##### `FunctionRareData`

|    % |  Size | Instances | Path                                                                                                                                |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------- |
| 0.9% | 160 B |         2 | `FunctionRareData ← Function ←(several paths)– <root>`                                                                              |
| 0.4% |  80 B |         1 | `FunctionRareData ← Function ←.resources/skins.vector.js/skin.js– Object ←.files– Object ←.script– Object ←(several paths)– <root>` |
| 0.4% |  80 B |         1 | `FunctionRareData ← Function ←.toggleDocClasses– Object ←(several paths)– <root>`                                                   |
| 0.4% |  80 B |         1 | `FunctionRareData ← Function ←.updatePinnableClasses– JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– <root>`         |
| 0.4% |  80 B |         1 | `FunctionRareData ← Function ←.register– Object ←(several paths)– <root>`                                                           |

##### `EvalExecutable`

|    % |  Size | Instances | Path                                                                                                                           |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------ |
| 1.9% | 336 B |         3 | `EvalExecutable ←(several paths)– <root>`                                                                                      |
| 0.6% | 112 B |         1 | `EvalExecutable ←(several paths)– Object ←.ext.quicksurveys.init– Object ←(several paths)– <root>`                             |
| 0.6% | 112 B |         1 | `EvalExecutable ← FunctionExecutable ← Function ←.declarator– Object ←.jquery.spinner.styles– Object ←(several paths)– <root>` |
| 0.6% | 112 B |         1 | `EvalExecutable ←(several paths)– Object ←.ext.checkUser.clientHints– Object ←(several paths)– <root>`                         |
| 0.6% | 112 B |         1 | `EvalExecutable ←(several paths)– Object ←.wikibase.client.vector-2022– Object ←(several paths)– <root>`                       |

##### `UnlinkedProgramCodeBlock`

|      % |     Size | Instances | Path                                |
| -----: | -------: | --------: | ----------------------------------- |
| 100.0% | 15.7 KiB |        14 | `UnlinkedProgramCodeBlock ← <root>` |

##### `HTMLLIElement`

|    % | Size | Instances | Path                                                   |
| ---: | ---: | --------: | ------------------------------------------------------ |
| 0.4% | 49 B |         1 | `HTMLLIElement ←[48]– Array ←(several paths)– <root>`  |
| 0.4% | 49 B |         1 | `HTMLLIElement ←[55]– Array ←(several paths)– <root>`  |
| 0.4% | 49 B |         1 | `HTMLLIElement ←[61]– Array ←(several paths)– <root>`  |
| 0.4% | 49 B |         1 | `HTMLLIElement ←[709]– Array ←(several paths)– <root>` |
| 0.4% | 49 B |         1 | `HTMLLIElement ←[726]– Array ←(several paths)– <root>` |

##### `HTMLElement`

|    % |  Size | Instances | Path                                                            |
| ---: | ----: | --------: | --------------------------------------------------------------- |
| 5.8% | 626 B |         4 | `HTMLElement ←(several paths)– <root>`                          |
| 4.3% | 468 B |         3 | `HTMLElement ←(several paths)– Window ←(several paths)– <root>` |
| 0.5% |  51 B |         1 | `HTMLElement ← Window ←(several paths)– <root>`                 |
| 0.5% |  51 B |         1 | `HTMLElement ← Window ← <root>`                                 |
| 0.5% |  50 B |         1 | `HTMLElement ←[442]– Array ←(several paths)– <root>`            |

##### `HTMLCollection`

|     % |     Size | Instances | Path                                                               |
| ----: | -------: | --------: | ------------------------------------------------------------------ |
| 98.8% | 9.18 KiB |       103 | `HTMLCollection ← <root>`                                          |
|  0.5% |     44 B |         2 | `HTMLCollection ← Structure ← Window ←(several paths)– <root>`     |
|  0.2% |     22 B |         1 | `HTMLCollection ← Structure ← <root>`                              |
|  0.2% |     22 B |         1 | `HTMLCollection ←(several paths)– Window ←(several paths)– <root>` |
|  0.2% |     22 B |         1 | `HTMLCollection ← Structure ←(several paths)– <root>`              |

##### `GetterSetter`

|    % | Size | Instances | Path                                                                                            |
| ---: | ---: | --------: | ----------------------------------------------------------------------------------------------- |
| 0.3% | 32 B |         1 | `GetterSetter ←.evaluate– InjectedScriptHost ← Structure ← InjectedScriptHost ← <root>`         |
| 0.3% | 32 B |         1 | `GetterSetter ←.savedResultAlias– InjectedScriptHost ← Structure ← InjectedScriptHost ← <root>` |
| 0.3% | 32 B |         1 | `GetterSetter ←.size– Set ←(several paths)– <root>`                                             |
| 0.3% | 32 B |         1 | `GetterSetter ←.altKey– Object ←(several paths)– <root>`                                        |
| 0.3% | 32 B |         1 | `GetterSetter ←.bubbles– Object ←(several paths)– <root>`                                       |

##### `HTMLAnchorElement`

|     % |     Size | Instances | Path                                                                 |
| ----: | -------: | --------: | -------------------------------------------------------------------- |
| 13.1% | 1.05 KiB |        22 | `HTMLAnchorElement ← <root>`                                         |
|  5.3% |    441 B |         9 | `HTMLAnchorElement ←.elem– JSLexicalEnvironment ← Function ← <root>` |
|  0.6% |     51 B |         1 | `HTMLAnchorElement ← Window ← <root>`                                |
|  0.6% |     49 B |         1 | `HTMLAnchorElement ←(several paths)– <root>`                         |
|  0.6% |     49 B |         1 | `HTMLAnchorElement ←[6]– Array ←(several paths)– <root>`             |

##### `CSSStyleDeclaration`

|     % |     Size | Instances | Path                                                                              |
| ----: | -------: | --------: | --------------------------------------------------------------------------------- |
| 69.1% | 4.35 KiB |         3 | `CSSStyleDeclaration ← Structure ←(several paths)– <root>`                        |
| 23.0% | 1.45 KiB |         1 | `CSSStyleDeclaration ← Structure ← Window ←(several paths)– <root>`               |
|  5.5% |    352 B |        11 | `CSSStyleDeclaration ← <root>`                                                    |
|  0.5% |     32 B |         1 | `CSSStyleDeclaration ←.emptyStyle– JSLexicalEnvironment ←(several paths)– <root>` |
|  0.5% |     32 B |         1 | `CSSStyleDeclaration ←._cachedContentTextStyle– Object ←(several paths)– <root>`  |

##### `Text`

|    % | Size | Instances | Path                                                                              |
| ---: | ---: | --------: | --------------------------------------------------------------------------------- |
| 0.6% | 33 B |         1 | `Text ←[1]– Array ←.textNodes– Object ←.article– Object ←(several paths)– <root>` |
| 0.6% | 33 B |         1 | `Text ←[2]– Array ←.textNodes– Object ←.article– Object ←(several paths)– <root>` |
| 0.6% | 33 B |         1 | `Text ←[3]– Array ←.textNodes– Object ←.article– Object ←(several paths)– <root>` |
| 0.6% | 33 B |         1 | `Text ←[4]– Array ←.textNodes– Object ←.article– Object ←(several paths)– <root>` |
| 0.6% | 33 B |         1 | `Text ←[5]– Array ←.textNodes– Object ←.article– Object ←(several paths)– <root>` |

##### `JSPropertyNameEnumerator`

|    % | Size | Instances | Path                                                                                                                                                                                                                                                                                                    |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0% | 48 B |         1 | `JSPropertyNameEnumerator ← StructureRareData ← Structure ← Structure ← Structure ← Structure ← Structure ← Structure ← Structure ← StructureRareData ← Structure ← Object ←.methods– Function ←.CommandLineAPI– JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– InjectedScript ← <root>` |
| 1.0% | 48 B |         1 | `JSPropertyNameEnumerator ← StructureRareData ← Structure ← Object ←.methods– Function ←.CommandLineAPI– JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– InjectedScript ← <root>`                                                                                                         |
| 1.0% | 48 B |         1 | `JSPropertyNameEnumerator ← StructureRareData ← Structure ← Object ←.RLCONF– Window ← <root>`                                                                                                                                                                                                           |
| 1.0% | 48 B |         1 | `JSPropertyNameEnumerator ← StructureRareData ← Structure ← Object ←.RLSTATE– Window ← <root>`                                                                                                                                                                                                          |
| 1.0% | 48 B |         1 | `JSPropertyNameEnumerator ← StructureRareData ← Structure ← Structure ← Object ←.sources– JSLexicalEnvironment ←(several paths)– <root>`                                                                                                                                                                |

##### `jQuery`

|    % | Size | Instances | Path                                                                                                                                                                                 |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.1% | 48 B |         1 | `jQuery ←(several paths)– <root>`                                                                                                                                                    |
| 1.1% | 48 B |         1 | `jQuery ←.$shortenUrlLink– JSLexicalEnvironment ← Function ←.handler– Object ←[0]– Array ←.click– Object ←.events– Object ←.jQuery371070616879042118561– HTMLAnchorElement ← <root>` |
| 1.1% | 48 B |         1 | `jQuery ←.$qrCodeLink– JSLexicalEnvironment ← Function ←.handler– Object ←[0]– Array ←.click– Object ←.events– Object ←.jQuery371070616879042118561– HTMLAnchorElement ← <root>`     |
| 1.1% | 48 B |         1 | `jQuery ←.$body– JSLexicalEnvironment ←(several paths)– <root>`                                                                                                                      |
| 1.1% | 48 B |         1 | `jQuery ←.$window– JSLexicalEnvironment ←(several paths)– <root>`                                                                                                                    |

##### `StructureChain`

|    % | Size | Instances | Path                                                                                                                                                              |
| ---: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.4% | 16 B |         1 | `StructureChain ← Structure ← Function ←(several paths)– InjectedScript ← <root>`                                                                                 |
| 0.4% | 16 B |         1 | `StructureChain ← Structure ← InjectedScript ← <root>`                                                                                                            |
| 0.4% | 16 B |         1 | `StructureChain ← Structure ← Function ←.CallFrameProxy– Function ←(several paths)– InjectedScript ← <root>`                                                      |
| 0.4% | 16 B |         1 | `StructureChain ← Structure ← Function ←.CommandLineAPI– JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– InjectedScript ← <root>`                   |
| 0.4% | 16 B |         1 | `StructureChain ← Structure ← Object ←.methods– Function ←.CommandLineAPI– JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– InjectedScript ← <root>` |

##### `DOMTokenList`

|     % |     Size | Instances | Path                                                             |
| ----: | -------: | --------: | ---------------------------------------------------------------- |
| 97.8% | 4.28 KiB |       137 | `DOMTokenList ← <root>`                                          |
|  1.5% |     66 B |         2 | `DOMTokenList ← Structure ←(several paths)– <root>`              |
|  0.7% |     33 B |         1 | `DOMTokenList ←(several paths)– Window ←(several paths)– <root>` |

##### `HTMLInputElement`

|    % |  Size | Instances | Path                                                                                                                              |
| ---: | ----: | --------: | --------------------------------------------------------------------------------------------------------------------------------- |
| 8.2% | 320 B |         6 | `HTMLInputElement ←(several paths)– Object ←.FormMetadataJS– Window ←(several paths)– <root>`                                     |
| 4.0% | 158 B |         2 | `HTMLInputElement ← Structure ←(several paths)– <root>`                                                                           |
| 2.0% |  79 B |         1 | `HTMLInputElement ←(several paths)– Window ←(several paths)– <root>`                                                              |
| 2.0% |  79 B |         1 | `HTMLInputElement ←(several paths)– <root>`                                                                                       |
| 1.3% |  52 B |         1 | `HTMLInputElement ←[1]– Array ←._controls– Object ←[0]– Array ←._forms– Object ←.FormMetadataJS– Window ←(several paths)– <root>` |

##### `HTMLButtonElement`

|     % |     Size | Instances | Path                                                                                                                               |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| 28.2% | 1.03 KiB |        20 | `HTMLButtonElement ←(several paths)– Object ←.FormMetadataJS– Window ←(several paths)– <root>`                                     |
|  1.4% |     51 B |         1 | `HTMLButtonElement ← Window ←(several paths)– <root>`                                                                              |
|  1.4% |     51 B |         1 | `HTMLButtonElement ←[2]– Array ←._controls– Object ←[0]– Array ←._forms– Object ←.FormMetadataJS– Window ←(several paths)– <root>` |
|  1.4% |     51 B |         1 | `HTMLButtonElement ←[2]– Array ←._controls– Object ←[4]– Array ←._forms– Object ←.FormMetadataJS– Window ←(several paths)– <root>` |
|  1.4% |     51 B |         1 | `HTMLButtonElement ←[1]– Array ←._controls– Object ←[9]– Array ←._forms– Object ←.FormMetadataJS– Window ←(several paths)– <root>` |

##### `HTMLUListElement`

|    % | Size | Instances | Path                                                      |
| ---: | ---: | --------: | --------------------------------------------------------- |
| 1.3% | 49 B |         1 | `HTMLUListElement ←[47]– Array ←(several paths)– <root>`  |
| 1.3% | 49 B |         1 | `HTMLUListElement ←[54]– Array ←(several paths)– <root>`  |
| 1.3% | 49 B |         1 | `HTMLUListElement ←[60]– Array ←(several paths)– <root>`  |
| 1.3% | 49 B |         1 | `HTMLUListElement ←[125]– Array ←(several paths)– <root>` |
| 1.3% | 49 B |         1 | `HTMLUListElement ←[134]– Array ←(several paths)– <root>` |

##### `HTMLLabelElement`

|    % | Size | Instances | Path                                                      |
| ---: | ---: | --------: | --------------------------------------------------------- |
| 2.2% | 51 B |         1 | `HTMLLabelElement ← Window ←(several paths)– <root>`      |
| 2.1% | 49 B |         1 | `HTMLLabelElement ←[253]– Array ←(several paths)– <root>` |
| 2.1% | 49 B |         1 | `HTMLLabelElement ←[330]– Array ←(several paths)– <root>` |
| 2.1% | 49 B |         1 | `HTMLLabelElement ←[348]– Array ←(several paths)– <root>` |
| 2.1% | 49 B |         1 | `HTMLLabelElement ←[353]– Array ←(several paths)– <root>` |

##### `TooltippedElement`

|      % |     Size | Instances | Path                                                                                                                                                                                 |
| -----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100.0% | 2.03 KiB |        26 | `TooltippedElement ←.te– JSLexicalEnvironment ←(several paths)– Object ←.events– Object ←.jQuery371070616879042118561– HTMLElement ←.elem– JSLexicalEnvironment ← Function ← <root>` |

##### `Set`

|     % |  Size | Instances | Path                                                                                                                                                                                                        |
| ----: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 41.4% | 824 B |         1 | `Set ←.SetOfCandidateTagNamesToIgnore– JSGlobalLexicalEnvironment ←(several paths)– <root>`                                                                                                                 |
| 31.3% | 624 B |         2 | `Set ←.stacks– JSLexicalEnvironment ← Function ←.isFirst– JSLexicalEnvironment ← Function ←.maybeLog– JSLexicalEnvironment ←(several paths)– GetterSetter ←.eventInSample– Object ←(several paths)– <root>` |
| 18.5% | 368 B |         2 | `Set ←.exposuresThisPage– ExposureLogTracker ←.exposureLogTracker– JSLexicalEnvironment ←(several paths)– Object ←.tk– Object ←(several paths)– <root>`                                                     |
|  2.2% |  44 B |         1 | `Set ←(several paths)– <root>`                                                                                                                                                                              |
|  2.2% |  44 B |         1 | `Set ←(several paths)– Window ←(several paths)– <root>`                                                                                                                                                     |

##### `Document`

|     % |  Size | Instances | Path                                                         |
| ----: | ----: | --------: | ------------------------------------------------------------ |
| 53.9% | 980 B |         4 | `Document ←(several paths)– Window ←(several paths)– <root>` |
| 40.4% | 735 B |         3 | `Document ←(several paths)– <root>`                          |
|  5.7% | 104 B |         2 | `Document ← Window ← <root>`                                 |

##### `ProgramExecutable`

|     % |  Size | Instances | Path                                                                                                                   |
| ----: | ----: | --------: | ---------------------------------------------------------------------------------------------------------------------- |
| 13.3% | 224 B |         2 | `ProgramExecutable ←(several paths)– <root>`                                                                           |
|  6.7% | 112 B |         1 | `ProgramExecutable ←(several paths)– Object ←.user.options– Object ←(several paths)– <root>`                           |
|  6.7% | 112 B |         1 | `ProgramExecutable ←(several paths)– Object ←.hooks– JSLexicalEnvironment ←(several paths)– <root>`                    |
|  6.7% | 112 B |         1 | `ProgramExecutable ←(several paths)– Window ←(several paths)– <root>`                                                  |
|  6.7% | 112 B |         1 | `ProgramExecutable ← FunctionExecutable ← Function ←.extractMediaServiceSubscription– Window ←(several paths)– <root>` |

##### `HashMapBucket`

|    % | Size | Instances | Path                                                                                                                                                                    |
| ---: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.2% | 96 B |         2 | `HashMapBucket ← Map ←.state– Object ←(several paths)– <root>`                                                                                                          |
| 9.2% | 96 B |         2 | `HashMapBucket ← Map ←._mapOfUniqueIDToOriginalElement– Object ←(several paths)– <root>`                                                                                |
| 9.2% | 96 B |         2 | `HashMapBucket ← Map ←.queues– JSLexicalEnvironment ←(several paths)– <root>`                                                                                           |
| 4.6% | 48 B |         1 | `HashMapBucket ← <root>`                                                                                                                                                |
| 3.1% | 32 B |         1 | `HashMapBucket ← Set ←.exposuresThisPage– ExposureLogTracker ←.exposureLogTracker– JSLexicalEnvironment ←(several paths)– Object ←.tk– Object ←(several paths)– <root>` |

##### `GeneratorFunction`

|     % |  Size | Instances | Path                                                                                   |
| ----: | ----: | --------: | -------------------------------------------------------------------------------------- |
| 52.0% | 255 B |         5 | `GeneratorFunction ←.constructor– GeneratorFunction ← Window ←(several paths)– <root>` |
| 20.8% | 102 B |         2 | `GeneratorFunction ←.constructor– GeneratorFunction ← Window ← <root>`                 |
| 19.4% |  95 B |         5 | `GeneratorFunction ← Window ←(several paths)– <root>`                                  |
|  7.8% |  38 B |         2 | `GeneratorFunction ← Window ← <root>`                                                  |

##### `AsyncGeneratorFunction`

|     % |  Size | Instances | Path                                                                                             |
| ----: | ----: | --------: | ------------------------------------------------------------------------------------------------ |
| 52.0% | 255 B |         5 | `AsyncGeneratorFunction ←.constructor– AsyncGeneratorFunction ← Window ←(several paths)– <root>` |
| 20.8% | 102 B |         2 | `AsyncGeneratorFunction ←.constructor– AsyncGeneratorFunction ← Window ← <root>`                 |
| 19.4% |  95 B |         5 | `AsyncGeneratorFunction ← Window ←(several paths)– <root>`                                       |
|  7.8% |  38 B |         2 | `AsyncGeneratorFunction ← Window ← <root>`                                                       |

##### `AsyncFunction`

|     % |  Size | Instances | Path                                                                           |
| ----: | ----: | --------: | ------------------------------------------------------------------------------ |
| 52.8% | 255 B |         5 | `AsyncFunction ←.constructor– AsyncFunction ← Window ←(several paths)– <root>` |
| 21.1% | 102 B |         2 | `AsyncFunction ←.constructor– AsyncFunction ← Window ← <root>`                 |
| 18.6% |  90 B |         5 | `AsyncFunction ← Window ←(several paths)– <root>`                              |
|  7.5% |  36 B |         2 | `AsyncFunction ← Window ← <root>`                                              |

##### `CallbackObject`

|    % | Size | Instances | Path                                                                                                                                                        |
| ---: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.3% | 33 B |         1 | `CallbackObject ← Structure ← CallbackObject ←[0]– Array ←._oneTimeCodeFieldLabelPatternMatchers– Object ←.FormMetadataJS– Window ←(several paths)– <root>` |
| 7.3% | 33 B |         1 | `CallbackObject ← Structure ← CallbackObject ←.ReaderArticleFinderJSController– Window ←(several paths)– <root>`                                            |
| 7.1% | 32 B |         1 | `CallbackObject ←.browser– Window ← <root>`                                                                                                                 |
| 7.1% | 32 B |         1 | `CallbackObject ← Structure ← CallbackObject ←.browser– Window ← <root>`                                                                                    |
| 7.1% | 32 B |         1 | `CallbackObject ←.pushNotification– Object ←.safari– Window ← <root>`                                                                                       |

##### `JSGlobalLexicalEnvironment`

|     % |  Size | Instances | Path                                                           |
| ----: | ----: | --------: | -------------------------------------------------------------- |
| 57.1% | 256 B |         4 | `JSGlobalLexicalEnvironment ←(several paths)– <root>`          |
| 42.9% | 192 B |         3 | `JSGlobalLexicalEnvironment ← Window ←(several paths)– <root>` |

##### `Callee`

|     % |  Size | Instances | Path                                       |
| ----: | ----: | --------: | ------------------------------------------ |
| 71.4% | 320 B |        10 | `Callee ← Window ←(several paths)– <root>` |
| 28.6% | 128 B |         4 | `Callee ← Window ← <root>`                 |

##### `InjectedScriptHost`

|     % |  Size | Instances | Path                                                           |
| ----: | ----: | --------: | -------------------------------------------------------------- |
| 52.2% | 210 B |         6 | `InjectedScriptHost ← Structure ← InjectedScriptHost ← <root>` |
| 47.8% | 192 B |         6 | `InjectedScriptHost ← <root>`                                  |

##### `CommandLineAPIHost`

|     % |  Size | Instances | Path                                                           |
| ----: | ----: | --------: | -------------------------------------------------------------- |
| 57.1% | 192 B |         6 | `CommandLineAPIHost ← <root>`                                  |
| 42.9% | 144 B |         6 | `CommandLineAPIHost ← Structure ← CommandLineAPIHost ← <root>` |

##### `SparseArrayValueMap`

|     % | Size | Instances | Path                                                                                                                                                       |
| ----: | ---: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 25.0% | 64 B |         2 | `SparseArrayValueMap ← Object ←(several paths)– <root>`                                                                                                    |
| 25.0% | 64 B |         2 | `SparseArrayValueMap ← Object ←.xhrSuccessStatus– JSLexicalEnvironment ←(several paths)– <root>`                                                           |
| 25.0% | 64 B |         2 | `SparseArrayValueMap ← Object ←.ENTRYPOINT_TYPE– Object ←.exports– Object ←.module– Object ←.ext.uls.rewrite.entrypoints– Object ←(several paths)– <root>` |
| 25.0% | 64 B |         2 | `SparseArrayValueMap ← Object ←.ULS_MODE– Object ←.exports– Object ←.module– Object ←.ext.uls.rewrite.entrypoints– Object ←(several paths)– <root>`        |

##### `JSWindowProxy`

|     % |  Size | Instances | Path                                     |
| ----: | ----: | --------: | ---------------------------------------- |
| 83.3% | 160 B |         5 | `JSWindowProxy ←(several paths)– <root>` |
| 16.7% |  32 B |         1 | `JSWindowProxy ← <root>`                 |

##### `Array Iterator`

|     % | Size | Instances | Path                                               |
| ----: | ---: | --------: | -------------------------------------------------- |
| 71.4% | 90 B |         5 | `Array Iterator ← Window ←(several paths)– <root>` |
| 28.6% | 36 B |         2 | `Array Iterator ← Window ← <root>`                 |

### Retained size

Constructors with the most instance bytes, including nodes only the instances keep alive.

|     % |     Size | Instances | Constructor                  |
| ----: | -------: | --------: | ---------------------------- |
| 55.3% | 5.76 MiB |    11,833 | `Object`                     |
| 27.9% | 2.91 MiB |    13,414 | `Function`                   |
| 18.9% | 1.97 MiB |     7,600 | `FunctionExecutable`         |
| 17.8% | 1.85 MiB |    12,175 | `Structure`                  |
| 15.6% | 1.62 MiB |     6,041 | `UnlinkedFunctionExecutable` |
| 11.2% | 1.17 MiB |     1,660 | `UnlinkedFunctionCodeBlock`  |
|  9.7% | 1.01 MiB |        14 | `Window`                     |
|  7.6% |  811 KiB |     2,030 | `JSLexicalEnvironment`       |
|  6.1% |  650 KiB |     7,409 | `Array`                      |
|  5.0% |  535 KiB |       162 | `FunctionCodeBlock`          |
|  4.5% |  479 KiB |    10,225 | `DOMAttributeGetterSetter`   |
|  4.3% |  454 KiB |       893 | `StructureRareData`          |
|  2.6% |  272 KiB |        20 | `CSSStyleDeclaration`        |
|  2.5% |  271 KiB |         6 | `InjectedScript`             |
|  1.8% |  197 KiB |       232 | `FunctionRareData`           |
|  1.4% |  154 KiB |     3,780 | `Immutable Butterfly`        |
|  1.0% |  108 KiB |       453 | `RegExp`                     |
|  1.0% |  104 KiB |        14 | `UnlinkedProgramCodeBlock`   |
|  1.0% |  102 KiB |     2,226 | `PropertyTable`              |
|  0.8% | 85.1 KiB |     1,364 | `SymbolTable`                |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Code

|     % |     Size | Instances | Constructor                  |
| ----: | -------: | --------: | ---------------------------- |
| 18.9% | 1.97 MiB |     7,600 | `FunctionExecutable`         |
| 15.6% | 1.62 MiB |     6,041 | `UnlinkedFunctionExecutable` |
| 11.2% | 1.17 MiB |     1,660 | `UnlinkedFunctionCodeBlock`  |
|  5.0% |  535 KiB |       162 | `FunctionCodeBlock`          |
|  0.6% | 59.9 KiB |       767 | `NativeExecutable`           |
| <0.1% | 1.64 KiB |        15 | `ProgramExecutable`          |

##### Object shape

|     % |     Size | Instances | Constructor |
| ----: | -------: | --------: | ----------- |
| 17.8% | 1.85 MiB |    12,175 | `Structure` |

##### Internal

|     % |     Size | Instances | Constructor                  |
| ----: | -------: | --------: | ---------------------------- |
|  7.6% |  811 KiB |     2,030 | `JSLexicalEnvironment`       |
|  4.5% |  479 KiB |    10,225 | `DOMAttributeGetterSetter`   |
|  4.3% |  454 KiB |       893 | `StructureRareData`          |
|  1.8% |  197 KiB |       232 | `FunctionRareData`           |
|  1.0% |  104 KiB |        14 | `UnlinkedProgramCodeBlock`   |
|  1.0% |  102 KiB |     2,226 | `PropertyTable`              |
|  0.8% | 85.1 KiB |     1,364 | `SymbolTable`                |
|  0.6% | 67.4 KiB |     2,159 | `CustomGetterSetter`         |
|  0.5% | 51.7 KiB |       297 | `GetterSetter`               |
|  0.4% | 37.9 KiB |       101 | `JSPropertyNameEnumerator`   |
|  0.3% | 32.4 KiB |        87 | `UnlinkedEvalCodeBlock`      |
|  0.2% | 17.5 KiB |       160 | `EvalExecutable`             |
|  0.1% | 9.18 KiB |        12 | `InjectedScriptHost`         |
|  0.1% | 6.73 KiB |         7 | `JSGlobalLexicalEnvironment` |
| <0.1% | 4.41 KiB |       282 | `StructureChain`             |
| <0.1% | 4.22 KiB |        12 | `CommandLineAPIHost`         |
| <0.1% | 1.45 KiB |        29 | `HashMapBucket`              |
| <0.1% | 1.22 KiB |         6 | `JSWindowProxy`              |

##### Object

|     % |     Size | Instances | Constructor                 |
| ----: | -------: | --------: | --------------------------- |
| 55.3% | 5.76 MiB |    11,833 | `Object`                    |
|  9.7% | 1.01 MiB |        14 | `Window`                    |
|  2.6% |  272 KiB |        20 | `CSSStyleDeclaration`       |
|  2.5% |  271 KiB |         6 | `InjectedScript`            |
|  0.8% | 83.3 KiB |       205 | `HTMLElement`               |
|  0.8% | 81.8 KiB |         9 | `Document`                  |
|  0.5% | 56.5 KiB |        10 | `Element`                   |
|  0.4% | 43.5 KiB |     1,330 | `DOMRect`                   |
|  0.3% | 35.8 KiB |       418 | `HTMLDivElement`            |
|  0.3% | 34.9 KiB |       468 | `HTMLSpanElement`           |
|  0.3% | 32.2 KiB |        20 | `Map`                       |
|  0.3% | 27.9 KiB |       170 | `HTMLAnchorElement`         |
|  0.2% | 23.3 KiB |         7 | `String`                    |
|  0.2% | 22.5 KiB |       283 | `HTMLLIElement`             |
|  0.2% | 17.2 KiB |        77 | `HTMLInputElement`          |
|  0.1% | 14.5 KiB |         2 | `MultimediaViewerBootstrap` |
|  0.1% | 14.2 KiB |        76 | `HTMLButtonElement`         |
|  0.1% | 13.7 KiB |        14 | `Node`                      |
|  0.1% |   13 KiB |        20 | `Promise`                   |
|  0.1% |   13 KiB |        16 | `HTMLDocument`              |

##### Function

|     % |     Size | Instances | Constructor              |
| ----: | -------: | --------: | ------------------------ |
| 27.9% | 2.91 MiB |    13,414 | `Function`               |
| <0.1% |  4.1 KiB |        14 | `AsyncFunction`          |
| <0.1% | 3.19 KiB |        14 | `AsyncGeneratorFunction` |
| <0.1% | 3.12 KiB |        14 | `GeneratorFunction`      |
| <0.1% | 2.65 KiB |        14 | `CallbackObject`         |
| <0.1% |    448 B |        14 | `Callee`                 |

##### Array

|     % |    Size | Instances | Constructor           |
| ----: | ------: | --------: | --------------------- |
|  6.1% | 650 KiB |     7,409 | `Array`               |
|  1.4% | 154 KiB |     3,780 | `Immutable Butterfly` |
|  0.1% | 7.5 KiB |         7 | `Array Iterator`      |
| <0.1% |   294 B |         8 | `SparseArrayValueMap` |

##### Regular expression

|    % |    Size | Instances | Constructor |
| ---: | ------: | --------: | ----------- |
| 1.0% | 108 KiB |       453 | `RegExp`    |

#### Retainer paths

Retainer paths with the largest contribution to each constructor's retained size.

##### `Object`

|     % |     Size | Instances | Path                                                             |
| ----: | -------: | --------: | ---------------------------------------------------------------- |
| 61.9% | 3.56 MiB |         4 | `Object ←(several paths)– <root>`                                |
| 37.5% | 2.16 MiB |         2 | `Object ←.items– Object ←(several paths)– <root>`                |
|  4.7% |  276 KiB |         1 | `Object ←.jquery– Object ←(several paths)– <root>`               |
|  2.4% |  141 KiB |         1 | `Object ←.uls– Function ←(several paths)– <root>`                |
|  2.4% |  141 KiB |         1 | `Object ←.data– Object ←.uls– Function ←(several paths)– <root>` |

##### `Function`

|     % |     Size | Instances | Path                                                                               |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------- |
| 13.9% |  413 KiB |         2 | `Function ←.declarator– Object ←.jquery– Object ←(several paths)– <root>`          |
| 10.3% |  308 KiB |         2 | `Function ←(several paths)– <root>`                                                |
|  3.1% | 91.1 KiB |         1 | `Function ←.articleTitleInformation– Object ←(several paths)– <root>`              |
|  2.9% | 85.8 KiB |         1 | `Function ←.declarator– Object ←.jquery.uls.data– Object ←(several paths)– <root>` |
|  1.7% | 50.3 KiB |         1 | `Function ←.declarator– Object ←(several paths)– <root>`                           |

##### `FunctionExecutable`

|     % |     Size | Instances | Path                                                                                                                    |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------- |
| 20.4% |  413 KiB |         2 | `FunctionExecutable ← Function ←.declarator– Object ←.jquery– Object ←(several paths)– <root>`                          |
|  4.5% |   91 KiB |         1 | `FunctionExecutable ← FunctionRareData ← Function ←.articleTitleInformation– Object ←(several paths)– <root>`           |
|  4.2% | 85.7 KiB |         1 | `FunctionExecutable ← Function ←.declarator– Object ←.jquery.uls.data– Object ←(several paths)– <root>`                 |
|  2.5% | 50.3 KiB |         1 | `FunctionExecutable ← Function ←.declarator– Object ←(several paths)– <root>`                                           |
|  0.6% | 12.1 KiB |         1 | `FunctionExecutable ← FunctionRareData ← Function ←.stringsMatchAnyRegularExpressions– Window ←(several paths)– <root>` |

##### `Structure`

|     % |     Size | Instances | Path                                                                                                                                        |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 10.8% |  204 KiB |         3 | `Structure ←(several paths)– <root>`                                                                                                        |
|  5.5% |  104 KiB |         2 | `Structure ← Object ←(several paths)– Object ←.mediawiki.base– Object ←(several paths)– <root>`                                             |
|  4.7% | 88.6 KiB |         2 | `Structure ← StructureRareData ← Structure ← Object ←(several paths)– Object ←.mediawiki.base– Object ←(several paths)– <root>`             |
|  3.6% |   68 KiB |         1 | `Structure ← Window ←(several paths)– <root>`                                                                                               |
|  2.3% | 44.2 KiB |         1 | `Structure ← Structure ← StructureRareData ← Structure ← Object ←(several paths)– Object ←.mediawiki.base– Object ←(several paths)– <root>` |

##### `UnlinkedFunctionExecutable`

|    % |     Size | Instances | Path                                                                                                                                                                                                                             |
| ---: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.9% |  131 KiB |         5 | `UnlinkedFunctionExecutable ←(several paths)– <root>`                                                                                                                                                                            |
| 5.6% | 93.8 KiB |         3 | `UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ←(several paths)– <root>`                                                                                                                   |
| 4.6% | 77.1 KiB |         1 | `UnlinkedFunctionExecutable ← UnlinkedProgramCodeBlock ← <root>`                                                                                                                                                                 |
| 3.1% | 51.3 KiB |         2 | `UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ←(several paths)– <root>`                                                          |
| 0.6% | 9.78 KiB |         1 | `UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ←(several paths)– <root>` |

##### `UnlinkedFunctionCodeBlock`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                         |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 10.9% |  131 KiB |         5 | `UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ←(several paths)– <root>`                                                                                                                                                                            |
|  7.8% | 93.6 KiB |         3 | `UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ←(several paths)– <root>`                                                                                                                   |
|  6.4% |   77 KiB |         1 | `UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedProgramCodeBlock ← <root>`                                                                                                                                                                 |
|  4.3% | 51.1 KiB |         2 | `UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ←(several paths)– <root>`                                                          |
|  0.8% | 9.69 KiB |         1 | `UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ←(several paths)– <root>` |

##### `Window`

|     % |    Size | Instances | Path                                   |
| ----: | ------: | --------: | -------------------------------------- |
| 73.5% | 762 KiB |        11 | `Window ←(several paths)– <root>`      |
| 26.5% | 275 KiB |         2 | `Window ← <root>`                      |
|  0.1% |   536 B |         1 | `Window ← Structure ← Window ← <root>` |

##### `JSLexicalEnvironment`

|     % |     Size | Instances | Path                                                                                                        |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------- |
| 42.8% |  347 KiB |        22 | `JSLexicalEnvironment ←(several paths)– <root>`                                                             |
| 13.5% |  110 KiB |         6 | `JSLexicalEnvironment ←(several paths)– InjectedScript ← <root>`                                            |
| 13.5% |  109 KiB |         6 | `JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– InjectedScript ← <root>`                     |
|  7.2% | 58.7 KiB |         5 | `JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– <root>`                                      |
|  0.8% |  6.5 KiB |         1 | `JSLexicalEnvironment ←(several paths)– Object ←.state– Object ←.internal– Object ←(several paths)– <root>` |

##### `Array`

|     % |     Size | Instances | Path                                                                                     |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------- |
| 16.7% |  108 KiB |         1 | `Array ←(several paths)– <root>`                                                         |
|  7.9% | 51.1 KiB |         2 | `Array ←.choiceData– Object ←(several paths)– <root>`                                    |
|  5.3% | 34.3 KiB |         1 | `Array ←.css– Object ←.style– Object ←.mmv.codex– Object ←(several paths)– <root>`       |
|  3.9% | 25.2 KiB |         1 | `Array ←.css– Object ←.style– Object ←.ext.popups.main– Object ←(several paths)– <root>` |
|  2.8% | 17.9 KiB |         1 | `Array ←(several paths)– Object ←(several paths)– <root>`                                |

##### `FunctionCodeBlock`

|     % |     Size | Instances | Path                                                                                                                                        |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 17.0% | 90.8 KiB |         1 | `FunctionCodeBlock ← FunctionExecutable ← FunctionRareData ← Function ←.articleTitleInformation– Object ←(several paths)– <root>`           |
| 10.4% | 55.6 KiB |         6 | `FunctionCodeBlock ←(several paths)– <root>`                                                                                                |
|  1.8% | 9.68 KiB |         1 | `FunctionCodeBlock ← FunctionExecutable ← FunctionRareData ← Function ←.findCandidateElements– Object ←(several paths)– <root>`             |
|  1.7% | 9.07 KiB |         1 | `FunctionCodeBlock ← FunctionExecutable ← FunctionRareData ← Function ←.findExtraArticleCandidateElements– Object ←(several paths)– <root>` |
|  1.4% | 7.63 KiB |         1 | `FunctionCodeBlock ← FunctionExecutable ← FunctionRareData ← Function ←.stringsMatchAnyRegularExpressions– Window ←(several paths)– <root>` |

##### `DOMAttributeGetterSetter`

|     % | Size | Instances | Path                                                                     |
| ----: | ---: | --------: | ------------------------------------------------------------------------ |
| <0.1% | 48 B |         1 | `DOMAttributeGetterSetter ←(several paths)– <root>`                      |
| <0.1% | 48 B |         1 | `DOMAttributeGetterSetter ←.prefix– Element ←(several paths)– <root>`    |
| <0.1% | 48 B |         1 | `DOMAttributeGetterSetter ←.localName– Element ←(several paths)– <root>` |
| <0.1% | 48 B |         1 | `DOMAttributeGetterSetter ←.tagName– Element ←(several paths)– <root>`   |
| <0.1% | 48 B |         1 | `DOMAttributeGetterSetter ←.id– Element ←(several paths)– <root>`        |

##### `StructureRareData`

|     % |     Size | Instances | Path                                                                                                                              |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------- |
| 26.9% |  122 KiB |         4 | `StructureRareData ← Structure ← Object ←(several paths)– Object ←.mediawiki.base– Object ←(several paths)– <root>`               |
|  2.6% | 11.9 KiB |         1 | `StructureRareData ← Structure ←(several paths)– <root>`                                                                          |
|  1.7% | 7.77 KiB |         1 | `StructureRareData ← Structure ← Object ←(several paths)– <root>`                                                                 |
|  1.7% | 7.56 KiB |         1 | `StructureRareData ← Structure ← StructureRareData ← Structure ← Object ←(several paths)– <root>`                                 |
|  1.6% | 7.36 KiB |         1 | `StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← Object ←(several paths)– <root>` |

##### `CSSStyleDeclaration`

|     % |     Size | Instances | Path                                                                              |
| ----: | -------: | --------: | --------------------------------------------------------------------------------- |
| 74.9% |  204 KiB |         3 | `CSSStyleDeclaration ← Structure ←(several paths)– <root>`                        |
| 25.0% | 67.9 KiB |         1 | `CSSStyleDeclaration ← Structure ← Window ←(several paths)– <root>`               |
|  0.1% |    352 B |        11 | `CSSStyleDeclaration ← <root>`                                                    |
| <0.1% |     32 B |         1 | `CSSStyleDeclaration ←.emptyStyle– JSLexicalEnvironment ←(several paths)– <root>` |
| <0.1% |     32 B |         1 | `CSSStyleDeclaration ←._cachedContentTextStyle– Object ←(several paths)– <root>`  |

##### `InjectedScript`

|      % |    Size | Instances | Path                      |
| -----: | ------: | --------: | ------------------------- |
| 100.0% | 271 KiB |         6 | `InjectedScript ← <root>` |

##### `FunctionRareData`

|     % |     Size | Instances | Path                                                                                                                                 |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------ |
| 46.2% |   91 KiB |         1 | `FunctionRareData ← Function ←.articleTitleInformation– Object ←(several paths)– <root>`                                             |
|  6.2% | 12.2 KiB |         1 | `FunctionRareData ← Function ←.stringsMatchAnyRegularExpressions– Window ←(several paths)– <root>`                                   |
|  5.0% | 9.88 KiB |         1 | `FunctionRareData ← Function ←.findCandidateElements– Object ←(several paths)– <root>`                                               |
|  4.7% | 9.27 KiB |         1 | `FunctionRareData ← Function ←.findExtraArticleCandidateElements– Object ←(several paths)– <root>`                                   |
|  3.7% | 7.36 KiB |         1 | `FunctionRareData ← Function ←.extraArticleCandidateIfElementIsViable– Function ←.CandidateElement– Window ←(several paths)– <root>` |

##### `Immutable Butterfly`

|    % |     Size | Instances | Path                                                                                                                                        |
| ---: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.4% | 2.11 KiB |         5 | `Immutable Butterfly ←(several paths)– <root>`                                                                                              |
| 0.3% |    432 B |         1 | `Immutable Butterfly ← Array ←.allowedHtmlElements– Object ←(several paths)– Object ←.mediawiki.jqueryMsg– Object ←(several paths)– <root>` |
| 0.3% |    432 B |         1 | `Immutable Butterfly ← Array ←.block– Object ←.elementTypes– Object ←.ve– Window ← <root>`                                                  |
| 0.3% |    432 B |         1 | `Immutable Butterfly ← Array ←.CA– Object ←.territories– Object ←.data– Object ←.uls– Function ←(several paths)– <root>`                    |
| 0.3% |    432 B |         1 | `Immutable Butterfly ← Array ←.IN– Object ←.territories– Object ←.data– Object ←.uls– Function ←(several paths)– <root>`                    |

##### `RegExp`

|     % |     Size | Instances | Path                                                                                                               |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------ |
| 26.5% | 28.5 KiB |        12 | `RegExp ←(several paths)– <root>`                                                                                  |
|  5.7% | 6.13 KiB |         2 | `RegExp ← <root>`                                                                                                  |
|  3.9% |  4.2 KiB |         2 | `RegExp ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ←(several paths)– <root>`                         |
|  1.3% | 1.39 KiB |         1 | `RegExp ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedProgramCodeBlock ← <root>`              |
|  1.2% | 1.31 KiB |         1 | `RegExp ←[0]– Array ←._forgotUserNameRegularExpressions– Object ←.FormMetadataJS– Window ←(several paths)– <root>` |

##### `UnlinkedProgramCodeBlock`

|      % |    Size | Instances | Path                                |
| -----: | ------: | --------: | ----------------------------------- |
| 100.0% | 104 KiB |        14 | `UnlinkedProgramCodeBlock ← <root>` |

##### `PropertyTable`

|     % |  Size | Instances | Path                                                                                                                                                                                       |
| ----: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  0.3% | 336 B |         7 | `PropertyTable ← Structure ←(several paths)– <root>`                                                                                                                                       |
|  0.1% |  96 B |         2 | `PropertyTable ← Structure ← Function ←(several paths)– <root>`                                                                                                                            |
| <0.1% |  48 B |         1 | `PropertyTable ← Structure ← Function ←[11]– Array ←.fns– JSLexicalEnvironment ←(several paths)– Object ←.wikipage.content– Object ←.hooks– JSLexicalEnvironment ←(several paths)– <root>` |
| <0.1% |  48 B |         1 | `PropertyTable ← Structure ← Function ←.reduce– Array ←(several paths)– <root>`                                                                                                            |
| <0.1% |  48 B |         1 | `PropertyTable ← Structure ←(several paths)– Object ←(several paths)– <root>`                                                                                                              |

##### `SymbolTable`

|    % |  Size | Instances | Path                                                                                                                                                                                      |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.7% | 576 B |         9 | `SymbolTable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ←(several paths)– <root>`                                                                                           |
| 0.2% | 192 B |         3 | `SymbolTable ← JSLexicalEnvironment ←(several paths)– InjectedScript ← <root>`                                                                                                            |
| 0.1% | 128 B |         2 | `SymbolTable ← JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– InjectedScript ← <root>`                                                                                     |
| 0.1% |  64 B |         1 | `SymbolTable ← JSLexicalEnvironment ← Function ←(several paths)– InjectedScript ← <root>`                                                                                                 |
| 0.1% |  64 B |         1 | `SymbolTable ← JSLexicalEnvironment ←(several paths)– Object ←.methods– Function ←.CommandLineAPI– JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– InjectedScript ← <root>` |

##### `HTMLElement`

|     % |     Size | Instances | Path                                                            |
| ----: | -------: | --------: | --------------------------------------------------------------- |
| 32.7% | 27.3 KiB |         4 | `HTMLElement ←(several paths)– <root>`                          |
| 25.6% | 21.3 KiB |        27 | `HTMLElement ←.elem– JSLexicalEnvironment ← Function ← <root>`  |
| 24.6% | 20.5 KiB |         3 | `HTMLElement ←(several paths)– Window ←(several paths)– <root>` |
|  0.7% |    574 B |         1 | `HTMLElement ← Window ←(several paths)– <root>`                 |
|  0.6% |    526 B |         1 | `HTMLElement ← Window ← <root>`                                 |

##### `Document`

|     % |     Size | Instances | Path                                                         |
| ----: | -------: | --------: | ------------------------------------------------------------ |
| 57.1% | 46.7 KiB |         4 | `Document ←(several paths)– Window ←(several paths)– <root>` |
| 42.2% | 34.5 KiB |         3 | `Document ←(several paths)– <root>`                          |
|  0.7% |    578 B |         2 | `Document ← Window ← <root>`                                 |

##### `CustomGetterSetter`

|     % | Size | Instances | Path                                                                         |
| ----: | ---: | --------: | ---------------------------------------------------------------------------- |
| <0.1% | 32 B |         1 | `CustomGetterSetter ←.constructor– Element ←(several paths)– <root>`         |
| <0.1% | 32 B |         1 | `CustomGetterSetter ←.constructor– HTMLElement ←(several paths)– <root>`     |
| <0.1% | 32 B |         1 | `CustomGetterSetter ←.onmouseenter– HTMLElement ←(several paths)– <root>`    |
| <0.1% | 32 B |         1 | `CustomGetterSetter ←.onmouseleave– HTMLElement ←(several paths)– <root>`    |
| <0.1% | 32 B |         1 | `CustomGetterSetter ←.constructor– HTMLHtmlElement ←(several paths)– <root>` |

##### `NativeExecutable`

|     % |     Size | Instances | Path                                                                                         |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------- |
| 39.2% | 23.5 KiB |       301 | `NativeExecutable ←(several paths)– <root>`                                                  |
|  0.1% |     80 B |         1 | `NativeExecutable ← <root>`                                                                  |
|  0.1% |     80 B |         1 | `NativeExecutable ← Function ←.next– URLSearchParams Iterator ← Structure ← Window ← <root>` |
|  0.1% |     80 B |         1 | `NativeExecutable ← Function ←.item– DOMRectList ←(several paths)– <root>`                   |
|  0.1% |     80 B |         1 | `NativeExecutable ← Function ←.abort– AbortController ←(several paths)– <root>`              |

##### `Element`

|     % |     Size | Instances | Path                                                        |
| ----: | -------: | --------: | ----------------------------------------------------------- |
| 53.9% | 30.4 KiB |         4 | `Element ←(several paths)– <root>`                          |
| 43.2% | 24.4 KiB |         3 | `Element ←(several paths)– Window ←(several paths)– <root>` |
|  2.0% | 1.11 KiB |         2 | `Element ← Window ←(several paths)– <root>`                 |
|  0.9% |    522 B |         1 | `Element ← Window ← <root>`                                 |

##### `GetterSetter`

|    % |     Size | Instances | Path                                                                            |
| ---: | -------: | --------: | ------------------------------------------------------------------------------- |
| 4.9% | 2.55 KiB |         2 | `GetterSetter ←.eventInSample– Object ←(several paths)– <root>`                 |
| 2.8% | 1.43 KiB |         2 | `GetterSetter ←.getCrossSite– Object ←.cookie– Object ←(several paths)– <root>` |
| 2.6% | 1.35 KiB |         2 | `GetterSetter ←.jqueryMsg– Object ←(several paths)– <root>`                     |
| 2.4% | 1.22 KiB |         2 | `GetterSetter ←.newInstrument– Object ←(several paths)– <root>`                 |
| 1.1% |    577 B |         1 | `GetterSetter ←.write– HTMLDocument ←(several paths)– <root>`                   |

##### `DOMRect`

|    % |  Size | Instances | Path                                                                                            |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------- |
| 1.7% | 751 B |         1 | `DOMRect ←(several paths)– Window ←(several paths)– <root>`                                     |
| 1.2% | 525 B |         1 | `DOMRect ← Structure ←(several paths)– <root>`                                                  |
| 1.0% | 429 B |         1 | `DOMRect ← Structure ← Window ← <root>`                                                         |
| 0.8% | 367 B |         1 | `DOMRect ← Window ←(several paths)– <root>`                                                     |
| 0.1% |  32 B |         1 | `DOMRect ←._cachedElementBoundingRect– HTMLSpanElement ←[1120]– Array ←(several paths)– <root>` |

##### `JSPropertyNameEnumerator`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                    |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 47.2% | 17.9 KiB |         4 | `JSPropertyNameEnumerator ← StructureRareData ← Structure ← Object ←(several paths)– Object ←.mediawiki.base– Object ←(several paths)– <root>`                                                                                                                                                          |
|  9.2% | 3.47 KiB |         6 | `JSPropertyNameEnumerator ← StructureRareData ← Structure ← Structure ← Structure ← Structure ← Structure ← Structure ← Structure ← StructureRareData ← Structure ← Object ←.methods– Function ←.CommandLineAPI– JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– InjectedScript ← <root>` |
|  5.4% | 2.04 KiB |         2 | `JSPropertyNameEnumerator ← StructureRareData ← Structure ← Object ←.RLCONF– Window ← <root>`                                                                                                                                                                                                           |
|  2.5% |    958 B |         2 | `JSPropertyNameEnumerator ← StructureRareData ← Structure ← Object ←.messages– Object ←.skins.vector.clientPreferences– Object ←(several paths)– <root>`                                                                                                                                                |
|  1.1% |    438 B |         1 | `JSPropertyNameEnumerator ← StructureRareData ← Structure ← Object ←(several paths)– <root>`                                                                                                                                                                                                            |

##### `HTMLDivElement`

|     % |     Size | Instances | Path                                                    |
| ----: | -------: | --------: | ------------------------------------------------------- |
| 21.1% | 7.55 KiB |        15 | `HTMLDivElement ←(several paths)– <root>`               |
|  6.0% | 2.16 KiB |         1 | `HTMLDivElement ← <root>`                               |
|  0.2% |     82 B |         1 | `HTMLDivElement ←[672]– Array ←(several paths)– <root>` |
|  0.2% |     82 B |         1 | `HTMLDivElement ←[666]– Array ←(several paths)– <root>` |
|  0.2% |     82 B |         1 | `HTMLDivElement ←[441]– Array ←(several paths)– <root>` |

##### `HTMLSpanElement`

|    % |  Size | Instances | Path                                                     |
| ---: | ----: | --------: | -------------------------------------------------------- |
| 2.0% | 723 B |         3 | `HTMLSpanElement ←(several paths)– <root>`               |
| 0.7% | 241 B |         1 | `HTMLSpanElement ← Structure ←(several paths)– <root>`   |
| 0.2% |  81 B |         1 | `HTMLSpanElement ←[22]– Array ←(several paths)– <root>`  |
| 0.2% |  81 B |         1 | `HTMLSpanElement ←[863]– Array ←(several paths)– <root>` |
| 0.2% |  81 B |         1 | `HTMLSpanElement ←[865]– Array ←(several paths)– <root>` |

##### `UnlinkedEvalCodeBlock`

|      % |     Size | Instances | Path                             |
| -----: | -------: | --------: | -------------------------------- |
| 100.0% | 32.4 KiB |        87 | `UnlinkedEvalCodeBlock ← <root>` |

##### `Map`

|     % |     Size | Instances | Path                                                                     |
| ----: | -------: | --------: | ------------------------------------------------------------------------ |
| 53.9% | 17.4 KiB |         7 | `Map ←(several paths)– <root>`                                           |
| 33.4% | 10.8 KiB |         2 | `Map ←.en– Object ←.data– Object ←(several paths)– <root>`               |
|  4.0% |  1.3 KiB |         2 | `Map ←.tokens– Object ←.user– Object ←(several paths)– <root>`           |
|  4.0% | 1.28 KiB |         2 | `Map ←.options– Object ←.user– Object ←(several paths)– <root>`          |
|  1.1% |    368 B |         1 | `Map ←._mapOfUniqueIDToOriginalElement– Object ←(several paths)– <root>` |

##### `HTMLAnchorElement`

|     % |     Size | Instances | Path                                                                  |
| ----: | -------: | --------: | --------------------------------------------------------------------- |
| 24.0% | 6.67 KiB |         5 | `HTMLAnchorElement ←(several paths)– <root>`                          |
|  9.9% | 2.77 KiB |         4 | `HTMLAnchorElement ← <root>`                                          |
|  6.0% | 1.67 KiB |         1 | `HTMLAnchorElement ←(several paths)– Window ←(several paths)– <root>` |
|  2.3% |    659 B |         1 | `HTMLAnchorElement ←.elem– JSLexicalEnvironment ← Function ← <root>`  |
|  1.9% |    532 B |         1 | `HTMLAnchorElement ← Window ← <root>`                                 |

##### `String`

|     % |     Size | Instances | Path                                       |
| ----: | -------: | --------: | ------------------------------------------ |
| 51.5% |   12 KiB |         4 | `String ← Window ←(several paths)– <root>` |
| 48.5% | 11.3 KiB |         3 | `String ←(several paths)– <root>`          |

##### `HTMLLIElement`

|    % |  Size | Instances | Path                                                          |
| ---: | ----: | --------: | ------------------------------------------------------------- |
| 1.5% | 337 B |         1 | `HTMLLIElement ← Structure ← <root>`                          |
| 1.5% | 337 B |         1 | `HTMLLIElement ← Structure ← Window ←(several paths)– <root>` |
| 1.5% | 337 B |         1 | `HTMLLIElement ←(several paths)– <root>`                      |
| 1.5% | 337 B |         1 | `HTMLLIElement ← Structure ←(several paths)– <root>`          |
| 0.4% |  81 B |         1 | `HTMLLIElement ←[48]– Array ←(several paths)– <root>`         |

##### `EvalExecutable`

|    % |  Size | Instances | Path                                                                                                                           |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------ |
| 1.9% | 336 B |         3 | `EvalExecutable ←(several paths)– <root>`                                                                                      |
| 0.6% | 112 B |         1 | `EvalExecutable ←(several paths)– Object ←.ext.quicksurveys.init– Object ←(several paths)– <root>`                             |
| 0.6% | 112 B |         1 | `EvalExecutable ← FunctionExecutable ← Function ←.declarator– Object ←.jquery.spinner.styles– Object ←(several paths)– <root>` |
| 0.6% | 112 B |         1 | `EvalExecutable ←(several paths)– Object ←.ext.checkUser.clientHints– Object ←(several paths)– <root>`                         |
| 0.6% | 112 B |         1 | `EvalExecutable ←(several paths)– Object ←.wikibase.client.vector-2022– Object ←(several paths)– <root>`                       |

##### `HTMLInputElement`

|     % |     Size | Instances | Path                                                                                          |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------- |
| 35.9% | 6.18 KiB |         2 | `HTMLInputElement ← Structure ←(several paths)– <root>`                                       |
| 17.9% | 3.09 KiB |         1 | `HTMLInputElement ←(several paths)– <root>`                                                   |
| 17.0% | 2.93 KiB |         1 | `HTMLInputElement ←(several paths)– Window ←(several paths)– <root>`                          |
|  3.8% |    675 B |         1 | `HTMLInputElement ← Window ←(several paths)– <root>`                                          |
|  1.8% |    325 B |         1 | `HTMLInputElement ←(several paths)– Object ←.FormMetadataJS– Window ←(several paths)– <root>` |

##### `MultimediaViewerBootstrap`

|      % |     Size | Instances | Path                                                 |
| -----: | -------: | --------: | ---------------------------------------------------- |
| 100.0% | 14.5 KiB |         2 | `MultimediaViewerBootstrap ←(several paths)– <root>` |

##### `HTMLButtonElement`

|     % |     Size | Instances | Path                                                                                           |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------- |
| 48.2% | 6.86 KiB |        11 | `HTMLButtonElement ←(several paths)– <root>`                                                   |
|  8.1% | 1.16 KiB |         1 | `HTMLButtonElement ← Structure ←(several paths)– <root>`                                       |
|  7.0% |    1 KiB |         1 | `HTMLButtonElement ←(several paths)– Window ←(several paths)– <root>`                          |
|  4.0% |    580 B |         1 | `HTMLButtonElement ← Window ←(several paths)– <root>`                                          |
|  2.5% |    363 B |         1 | `HTMLButtonElement ←(several paths)– Object ←.FormMetadataJS– Window ←(several paths)– <root>` |

##### `Node`

|     % |     Size | Instances | Path                                                     |
| ----: | -------: | --------: | -------------------------------------------------------- |
| 51.2% | 7.01 KiB |         4 | `Node ←(several paths)– <root>`                          |
| 36.8% | 5.03 KiB |         3 | `Node ←(several paths)– Window ←(several paths)– <root>` |
|  8.4% | 1.15 KiB |         5 | `Node ← Window ←(several paths)– <root>`                 |
|  3.6% |    498 B |         2 | `Node ← Window ← <root>`                                 |

##### `Promise`

|     % |     Size | Instances | Path                                                                                                                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 50.7% | 6.61 KiB |         1 | `Promise ←.promise– Object ←.preview– Object ←.u– JSLexicalEnvironment ←(several paths)– <root>`                                                                                 |
| 46.4% | 6.05 KiB |         1 | `Promise ←.i– JSLexicalEnvironment ← Function ←.abort– Promise ←.promise– Object ←.preview– Object ←.u– JSLexicalEnvironment ←(several paths)– <root>`                           |
| 22.0% | 2.88 KiB |         1 | `Promise ←.capturedPromise– JSLexicalEnvironment ← Function ←.t– JSLexicalEnvironment ← Function ← <root>`                                                                       |
|  9.7% | 1.27 KiB |         1 | `Promise ←.promise– Object ←.globalContext– Object ←.context– Object ← Promise ←.capturedPromise– JSLexicalEnvironment ← Function ←.t– JSLexicalEnvironment ← Function ← <root>` |
|  7.8% | 1.01 KiB |         1 | `Promise ←(several paths)– <root>`                                                                                                                                               |

##### `HTMLDocument`

|     % |     Size | Instances | Path                                                         |
| ----: | -------: | --------: | ------------------------------------------------------------ |
| 81.0% | 10.5 KiB |         4 | `HTMLDocument ←(several paths)– <root>`                      |
|  8.3% | 1.08 KiB |         2 | `HTMLDocument ← Window ← <root>`                             |
|  7.1% |    952 B |         4 | `HTMLDocument ← Structure ← Window ←(several paths)– <root>` |
|  1.8% |    238 B |         1 | `HTMLDocument ← Structure ←(several paths)– <root>`          |
|  0.4% |     48 B |         1 | `HTMLDocument ←.document– Window ←(several paths)– <root>`   |

##### `InjectedScriptHost`

|      % |     Size | Instances | Path                                                           |
| -----: | -------: | --------: | -------------------------------------------------------------- |
| 100.0% | 9.18 KiB |         6 | `InjectedScriptHost ← <root>`                                  |
|  90.8% | 8.34 KiB |         6 | `InjectedScriptHost ← Structure ← InjectedScriptHost ← <root>` |

##### `Array Iterator`

|     % |     Size | Instances | Path                                               |
| ----: | -------: | --------: | -------------------------------------------------- |
| 84.4% | 6.33 KiB |         5 | `Array Iterator ← Window ←(several paths)– <root>` |
| 15.6% | 1.17 KiB |         2 | `Array Iterator ← Window ← <root>`                 |

##### `JSGlobalLexicalEnvironment`

|     % |     Size | Instances | Path                                                           |
| ----: | -------: | --------: | -------------------------------------------------------------- |
| 89.5% | 6.02 KiB |         4 | `JSGlobalLexicalEnvironment ←(several paths)– <root>`          |
| 10.5% |    720 B |         3 | `JSGlobalLexicalEnvironment ← Window ←(several paths)– <root>` |

##### `StructureChain`

|    % | Size | Instances | Path                                                                                                                                                              |
| ---: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.4% | 16 B |         1 | `StructureChain ← Structure ← Function ←(several paths)– InjectedScript ← <root>`                                                                                 |
| 0.4% | 16 B |         1 | `StructureChain ← Structure ← InjectedScript ← <root>`                                                                                                            |
| 0.4% | 16 B |         1 | `StructureChain ← Structure ← Function ←.CallFrameProxy– Function ←(several paths)– InjectedScript ← <root>`                                                      |
| 0.4% | 16 B |         1 | `StructureChain ← Structure ← Function ←.CommandLineAPI– JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– InjectedScript ← <root>`                   |
| 0.4% | 16 B |         1 | `StructureChain ← Structure ← Object ←.methods– Function ←.CommandLineAPI– JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– InjectedScript ← <root>` |

##### `CommandLineAPIHost`

|      % |     Size | Instances | Path                                                           |
| -----: | -------: | --------: | -------------------------------------------------------------- |
| 100.0% | 4.22 KiB |         6 | `CommandLineAPIHost ← <root>`                                  |
|  80.0% | 3.38 KiB |         6 | `CommandLineAPIHost ← Structure ← CommandLineAPIHost ← <root>` |

##### `AsyncFunction`

|     % |     Size | Instances | Path                                                                           |
| ----: | -------: | --------: | ------------------------------------------------------------------------------ |
| 72.2% | 2.96 KiB |         5 | `AsyncFunction ← Window ←(several paths)– <root>`                              |
| 28.6% | 1.17 KiB |         5 | `AsyncFunction ←.constructor– AsyncFunction ← Window ←(several paths)– <root>` |
| 27.8% | 1.14 KiB |         2 | `AsyncFunction ← Window ← <root>`                                              |
| 11.4% |    480 B |         2 | `AsyncFunction ←.constructor– AsyncFunction ← Window ← <root>`                 |

##### `AsyncGeneratorFunction`

|     % |     Size | Instances | Path                                                                                             |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------ |
| 71.4% | 2.28 KiB |         5 | `AsyncGeneratorFunction ← Window ←(several paths)– <root>`                                       |
| 38.2% | 1.22 KiB |         5 | `AsyncGeneratorFunction ←.constructor– AsyncGeneratorFunction ← Window ←(several paths)– <root>` |
| 28.6% |    932 B |         2 | `AsyncGeneratorFunction ← Window ← <root>`                                                       |
| 15.3% |    498 B |         2 | `AsyncGeneratorFunction ←.constructor– AsyncGeneratorFunction ← Window ← <root>`                 |

##### `GeneratorFunction`

|     % |     Size | Instances | Path                                                                                   |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------- |
| 71.4% | 2.23 KiB |         5 | `GeneratorFunction ← Window ←(several paths)– <root>`                                  |
| 38.2% | 1.19 KiB |         5 | `GeneratorFunction ←.constructor– GeneratorFunction ← Window ←(several paths)– <root>` |
| 28.6% |    912 B |         2 | `GeneratorFunction ← Window ← <root>`                                                  |
| 15.3% |    488 B |         2 | `GeneratorFunction ←.constructor– GeneratorFunction ← Window ← <root>`                 |

##### `CallbackObject`

|     % |  Size | Instances | Path                                                                                                                                                        |
| ----: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 31.4% | 854 B |         1 | `CallbackObject ←.ReaderArticleFinderJSController– Window ←(several paths)– <root>`                                                                         |
| 27.3% | 742 B |         1 | `CallbackObject ←[0]– Array ←._oneTimeCodeFieldLabelPatternMatchers– Object ←.FormMetadataJS– Window ←(several paths)– <root>`                              |
| 24.4% | 662 B |         1 | `CallbackObject ← Structure ← CallbackObject ←.ReaderArticleFinderJSController– Window ←(several paths)– <root>`                                            |
| 20.3% | 550 B |         1 | `CallbackObject ← Structure ← CallbackObject ←[0]– Array ←._oneTimeCodeFieldLabelPatternMatchers– Object ←.FormMetadataJS– Window ←(several paths)– <root>` |
|  8.2% | 224 B |         1 | `CallbackObject ←.browser– Window ← <root>`                                                                                                                 |

##### `ProgramExecutable`

|     % |  Size | Instances | Path                                                                                                                   |
| ----: | ----: | --------: | ---------------------------------------------------------------------------------------------------------------------- |
| 13.3% | 224 B |         2 | `ProgramExecutable ←(several paths)– <root>`                                                                           |
|  6.7% | 112 B |         1 | `ProgramExecutable ←(several paths)– Object ←.user.options– Object ←(several paths)– <root>`                           |
|  6.7% | 112 B |         1 | `ProgramExecutable ←(several paths)– Object ←.hooks– JSLexicalEnvironment ←(several paths)– <root>`                    |
|  6.7% | 112 B |         1 | `ProgramExecutable ←(several paths)– Window ←(several paths)– <root>`                                                  |
|  6.7% | 112 B |         1 | `ProgramExecutable ← FunctionExecutable ← Function ←.extractMediaServiceSubscription– Window ←(several paths)– <root>` |

##### `HashMapBucket`

|     % |  Size | Instances | Path                                                                                                                                                                                                                                        |
| ----: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 23.0% | 342 B |         2 | `HashMapBucket ← Set ←.stacks– JSLexicalEnvironment ← Function ←.isFirst– JSLexicalEnvironment ← Function ←.maybeLog– JSLexicalEnvironment ←(several paths)– GetterSetter ←.eventInSample– Object ←(several paths)– <root>`                 |
| 15.7% | 234 B |         2 | `HashMapBucket ←(several paths)– Set ←.stacks– JSLexicalEnvironment ← Function ←.isFirst– JSLexicalEnvironment ← Function ←.maybeLog– JSLexicalEnvironment ←(several paths)– GetterSetter ←.eventInSample– Object ←(several paths)– <root>` |
|  3.2% |  48 B |         1 | `HashMapBucket ← Map ←.state– Object ←(several paths)– <root>`                                                                                                                                                                              |
|  3.2% |  48 B |         1 | `HashMapBucket ← Map ←._mapOfUniqueIDToOriginalElement– Object ←(several paths)– <root>`                                                                                                                                                    |
|  3.2% |  48 B |         1 | `HashMapBucket ← Map ←.queues– JSLexicalEnvironment ←(several paths)– <root>`                                                                                                                                                               |

##### `JSWindowProxy`

|     % |  Size | Instances | Path                                     |
| ----: | ----: | --------: | ---------------------------------------- |
| 76.9% | 960 B |         5 | `JSWindowProxy ←(several paths)– <root>` |
| 23.1% | 288 B |         1 | `JSWindowProxy ← <root>`                 |

##### `Callee`

|     % |  Size | Instances | Path                                       |
| ----: | ----: | --------: | ------------------------------------------ |
| 71.4% | 320 B |        10 | `Callee ← Window ←(several paths)– <root>` |
| 28.6% | 128 B |         4 | `Callee ← Window ← <root>`                 |

##### `SparseArrayValueMap`

|     % |  Size | Instances | Path                                                                                                                                                       |
| ----: | ----: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 34.7% | 102 B |         2 | `SparseArrayValueMap ← Object ←(several paths)– <root>`                                                                                                    |
| 21.8% |  64 B |         2 | `SparseArrayValueMap ← Object ←.xhrSuccessStatus– JSLexicalEnvironment ←(several paths)– <root>`                                                           |
| 21.8% |  64 B |         2 | `SparseArrayValueMap ← Object ←.ENTRYPOINT_TYPE– Object ←.exports– Object ←.module– Object ←.ext.uls.rewrite.entrypoints– Object ←(several paths)– <root>` |
| 21.8% |  64 B |         2 | `SparseArrayValueMap ← Object ←.ULS_MODE– Object ←.exports– Object ←.module– Object ←.ext.uls.rewrite.entrypoints– Object ←(several paths)– <root>`        |

## Largest strings

Strings with the most bytes.

### Categories

Categories accounting for at least 1.0% of self size.

#### String

|    % |     Size | Path                                                                                                             |
| ---: | -------: | ---------------------------------------------------------------------------------------------------------------- |
| 2.6% |  275 KiB | `string ← FunctionExecutable ← Function ←.declarator– Object ←.jquery– Object ←(several paths)– <root>`          |
| 1.3% |  137 KiB | `string ← FunctionExecutable ← Function ←.declarator– Object ←.jquery– Object ←(several paths)– <root>`          |
| 0.9% |   93 KiB | `string ←.ext.popups.main@4i3g7– Object ←.items– Object ←(several paths)– <root>`                                |
| 0.9% |   93 KiB | `string ←.ext.popups.main@4i3g7– Object ←.items– Object ←(several paths)– <root>`                                |
| 0.8% | 86.1 KiB | `string ←.jquery.uls.data@1150b– Object ←.items– Object ←(several paths)– <root>`                                |
| 0.8% | 85.5 KiB | `string ← FunctionExecutable ← Function ←.declarator– Object ←.jquery.uls.data– Object ←(several paths)– <root>` |
| 0.8% | 84.7 KiB | `string ←.ext.wikimediaEvents@1o9qe– Object ←.items– Object ←(several paths)– <root>`                            |
| 0.8% | 84.7 KiB | `string ←.ext.wikimediaEvents@1o9qe– Object ←.items– Object ←(several paths)– <root>`                            |
| 0.7% | 70.1 KiB | `string ←.mmv.codex@1inu8– Object ←.items– Object ←(several paths)– <root>`                                      |
| 0.7% | 70.1 KiB | `string ←.mmv.codex@1inu8– Object ←.items– Object ←(several paths)– <root>`                                      |
| 0.6% | 61.7 KiB | `string ←.skins.vector.js@1s6hs– Object ←.items– Object ←(several paths)– <root>`                                |
| 0.6% | 61.7 KiB | `string ←.skins.vector.js@1s6hs– Object ←.items– Object ←(several paths)– <root>`                                |
| 0.5% | 50.7 KiB | `string ←.ext.quicksurveys.lib@1to1x– Object ←.items– Object ←(several paths)– <root>`                           |
| 0.5% | 50.1 KiB | `string ← FunctionExecutable ← Function ←.declarator– Object ←(several paths)– <root>`                           |
| 0.4% | 47.5 KiB | `string ←.ext.uls.interface@1u7jd– Object ←.items– Object ←(several paths)– <root>`                              |
| 0.4% | 47.5 KiB | `string ←.ext.uls.interface@1u7jd– Object ←.items– Object ←(several paths)– <root>`                              |
| 0.4% | 43.1 KiB | `string ←.jquery.uls.data@1150b– Object ←.items– Object ←(several paths)– <root>`                                |
| 0.3% | 34.3 KiB | `string ←(several paths)– <root>`                                                                                |
| 0.3% | 34.3 KiB | `string ←[0]– Array ←.css– Object ←.style– Object ←.mmv.codex– Object ←(several paths)– <root>`                  |
| 0.3% | 33.9 KiB | `string ← <root>`                                                                                                |

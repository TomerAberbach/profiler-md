# Heap snapshot

Allocated 10.4 MiB across 109,569 nodes and 307,833 edges.

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

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

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

#### Instances

Instances ranked by contribution to each constructor's self size.

##### `Structure`

|     % |  Size | Instances | Path                                                                |
| ----: | ----: | --------: | ------------------------------------------------------------------- |
| <0.1% | 448 B |         4 | `(GC root)`                                                         |
| <0.1% | 128 B |         1 | `FormMetadataClassification ← .FormMetadataClassificationJS Window` |
| <0.1% | 112 B |         1 | `Function ← .Deferred Function`                                     |
| <0.1% | 112 B |         1 | `Function`                                                          |
| <0.1% | 112 B |         1 | `Function ← .updateTooltipAccessKeys Object`                        |

##### `UnlinkedFunctionCodeBlock`

|     % |    Size | Instances | Path                                                                                                                      |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------- |
| 96.5% | 929 KiB |     1,647 | `(GC root)`                                                                                                               |
|  3.3% |  32 KiB |        10 | `UnlinkedFunctionExecutable ← UnlinkedProgramCodeBlock ← <root>`                                                          |
|  0.1% |   911 B |         2 | `UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedProgramCodeBlock ← <root>` |
| <0.1% |   416 B |         1 | `UnlinkedFunctionExecutable ← <root>`                                                                                     |

##### `FunctionExecutable`

|     % |  Size | Instances | Path                                                                                   |
| ----: | ----: | --------: | -------------------------------------------------------------------------------------- |
| <0.1% | 128 B |         1 | `(GC root)`                                                                            |
| <0.1% | 128 B |         1 | `Function ← Window ← <root>`                                                           |
| <0.1% | 128 B |         1 | `Function ← <root>`                                                                    |
| <0.1% | 128 B |         1 | `Function ← .toString JSLexicalEnvironment ← JSLexicalEnvironment ← <root>`            |
| <0.1% | 128 B |         1 | `Function ← .toStringDescription JSLexicalEnvironment ← JSLexicalEnvironment ← <root>` |

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
| <0.1% |    288 B |         3 | `UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedProgramCodeBlock ← <root>` |
| <0.1% |    288 B |         3 | `<root>`                                                                                     |
| <0.1% |     96 B |         1 | `FunctionExecutable ← Function ← .isCompatible Window ← <root>`                              |

##### `FunctionCodeBlock`

|     % |     Size | Instances | Path                                                                                           |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------- |
| 16.5% | 88.1 KiB |         1 | `FunctionExecutable ← FunctionRareData ← Function ← .articleTitleInformation Object`           |
| 10.4% | 55.6 KiB |         6 | `(GC root)`                                                                                    |
|  1.8% | 9.68 KiB |         1 | `FunctionExecutable ← FunctionRareData ← Function ← .findCandidateElements Object`             |
|  1.7% | 9.07 KiB |         1 | `FunctionExecutable ← FunctionRareData ← Function ← .findExtraArticleCandidateElements Object` |
|  1.4% | 7.63 KiB |         1 | `FunctionExecutable ← FunctionRareData ← Function ← .stringsMatchAnyRegularExpressions Window` |

##### `DOMAttributeGetterSetter`

|     % | Size | Instances | Path                 |
| ----: | ---: | --------: | -------------------- |
| <0.1% | 48 B |         1 | `(GC root)`          |
| <0.1% | 48 B |         1 | `.prefix Element`    |
| <0.1% | 48 B |         1 | `.localName Element` |
| <0.1% | 48 B |         1 | `.tagName Element`   |
| <0.1% | 48 B |         1 | `.id Element`        |

##### `Function`

|     % |  Size | Instances | Path                                                                                                                     |
| ----: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------ |
|  0.1% | 267 B |         2 | `(GC root)`                                                                                                              |
| <0.1% |  97 B |         1 | `[11] Array ← .fns JSLexicalEnvironment ← .wikipage.content Object ← .hooks JSLexicalEnvironment`                        |
| <0.1% |  97 B |         1 | `.handler Object ← [0] Array ← .click Object ← .events Object ← .jQuery371070616879042118561 HTMLAnchorElement ← <root>` |
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
| 0.1% |    160 B |         1 | `.tk Object`                                                                                        |

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
|  0.5% | 576 B |        12 | `(GC root)`                                                                                                              |
|  0.1% |  96 B |         2 | `Structure ← Function`                                                                                                   |
| <0.1% |  48 B |         1 | `Structure ← Function ← [11] Array ← .fns JSLexicalEnvironment ← .wikipage.content Object ← .hooks JSLexicalEnvironment` |
| <0.1% |  48 B |         1 | `Structure ← Function ← .reduce Array`                                                                                   |
| <0.1% |  48 B |         1 | `Structure ← Structure ← InjectedScriptHost ← Structure ← InjectedScriptHost ← <root>`                                   |

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

|     % | Size | Instances | Path                           |
| ----: | ---: | --------: | ------------------------------ |
| <0.1% | 32 B |         1 | `.constructor Element`         |
| <0.1% | 32 B |         1 | `.constructor HTMLElement`     |
| <0.1% | 32 B |         1 | `.onmouseenter HTMLElement`    |
| <0.1% | 32 B |         1 | `.onmouseleave HTMLElement`    |
| <0.1% | 32 B |         1 | `.constructor HTMLHtmlElement` |

##### `NativeExecutable`

|     % |     Size | Instances | Path                                                                      |
| ----: | -------: | --------: | ------------------------------------------------------------------------- |
| 39.2% | 23.5 KiB |       301 | `(GC root)`                                                               |
|  0.1% |     80 B |         1 | `<root>`                                                                  |
|  0.1% |     80 B |         1 | `Function ← .next URLSearchParams Iterator ← Structure ← Window ← <root>` |
|  0.1% |     80 B |         1 | `Function ← .item DOMRectList`                                            |
|  0.1% |     80 B |         1 | `Function ← .abort AbortController`                                       |

##### `DOMRect`

|    % | Size | Instances | Path                                                         |
| ---: | ---: | --------: | ------------------------------------------------------------ |
| 0.1% | 52 B |         1 | `Window`                                                     |
| 0.1% | 32 B |         1 | `._cachedElementBoundingRect HTMLSpanElement ← [1120] Array` |
| 0.1% | 32 B |         1 | `._cachedElementBoundingRect HTMLElement ← [1121] Array`     |
| 0.1% | 32 B |         1 | `._cachedElementBoundingRect HTMLLIElement ← [1122] Array`   |
| 0.1% | 32 B |         1 | `._cachedElementBoundingRect HTMLSpanElement ← [1123] Array` |

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

##### `HTMLSpanElement`

|    % | Size | Instances | Path          |
| ---: | ---: | --------: | ------------- |
| 0.2% | 49 B |         1 | `[22] Array`  |
| 0.2% | 49 B |         1 | `[863] Array` |
| 0.2% | 49 B |         1 | `[865] Array` |
| 0.2% | 49 B |         1 | `[32] Array`  |
| 0.2% | 49 B |         1 | `[866] Array` |

##### `HTMLDivElement`

|    % |  Size | Instances | Path                                                                            |
| ---: | ----: | --------: | ------------------------------------------------------------------------------- |
| 2.5% | 500 B |        10 | `(GC root)`                                                                     |
| 0.2% |  50 B |         1 | `._formElement Object ← .FormMetadataJS Window`                                 |
| 0.2% |  50 B |         1 | `._backingElement Object ← .FormMetadataJS Window`                              |
| 0.2% |  50 B |         1 | `._backingElement Object ← [9] Array ← ._forms Object ← .FormMetadataJS Window` |
| 0.2% |  50 B |         1 | `[672] Array`                                                                   |

##### `FunctionRareData`

|    % |  Size | Instances | Path                                                                                    |
| ---: | ----: | --------: | --------------------------------------------------------------------------------------- |
| 0.9% | 160 B |         2 | `Function`                                                                              |
| 0.4% |  80 B |         1 | `Function ← .resources/skins.vector.js/skin.js Object ← .files Object ← .script Object` |
| 0.4% |  80 B |         1 | `Function ← .toggleDocClasses Object`                                                   |
| 0.4% |  80 B |         1 | `Function ← .updatePinnableClasses JSLexicalEnvironment ← JSLexicalEnvironment`         |
| 0.4% |  80 B |         1 | `Function ← .register Object`                                                           |

##### `EvalExecutable`

|    % |  Size | Instances | Path                                                                                 |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------ |
| 1.9% | 336 B |         3 | `(GC root)`                                                                          |
| 0.6% | 112 B |         1 | `.ext.quicksurveys.init Object`                                                      |
| 0.6% | 112 B |         1 | `FunctionExecutable ← Function ← .declarator Object ← .jquery.spinner.styles Object` |
| 0.6% | 112 B |         1 | `.ext.checkUser.clientHints Object`                                                  |
| 0.6% | 112 B |         1 | `.wikibase.client.vector-2022 Object`                                                |

##### `UnlinkedProgramCodeBlock`

|      % |     Size | Instances | Path     |
| -----: | -------: | --------: | -------- |
| 100.0% | 15.7 KiB |        14 | `<root>` |

##### `HTMLLIElement`

|    % | Size | Instances | Path          |
| ---: | ---: | --------: | ------------- |
| 0.4% | 49 B |         1 | `[48] Array`  |
| 0.4% | 49 B |         1 | `[55] Array`  |
| 0.4% | 49 B |         1 | `[61] Array`  |
| 0.4% | 49 B |         1 | `[709] Array` |
| 0.4% | 49 B |         1 | `[726] Array` |

##### `HTMLElement`

|     % |     Size | Instances | Path                                             |
| ----: | -------: | --------: | ------------------------------------------------ |
| 10.1% | 1.07 KiB |         7 | `(GC root)`                                      |
|  0.5% |     51 B |         1 | `Window`                                         |
|  0.5% |     51 B |         1 | `Window ← <root>`                                |
|  0.5% |     50 B |         1 | `[442] Array`                                    |
|  0.5% |     49 B |         1 | `.elem JSLexicalEnvironment ← Function ← <root>` |

##### `HTMLCollection`

|     % |     Size | Instances | Path                 |
| ----: | -------: | --------: | -------------------- |
| 98.8% | 9.18 KiB |       103 | `<root>`             |
|  0.5% |     44 B |         2 | `Structure ← Window` |
|  0.5% |     44 B |         2 | `(GC root)`          |
|  0.2% |     22 B |         1 | `Structure ← <root>` |

##### `GetterSetter`

|    % | Size | Instances | Path                                                                             |
| ---: | ---: | --------: | -------------------------------------------------------------------------------- |
| 0.3% | 32 B |         1 | `.evaluate InjectedScriptHost ← Structure ← InjectedScriptHost ← <root>`         |
| 0.3% | 32 B |         1 | `.savedResultAlias InjectedScriptHost ← Structure ← InjectedScriptHost ← <root>` |
| 0.3% | 32 B |         1 | `.size Set`                                                                      |
| 0.3% | 32 B |         1 | `.altKey Object`                                                                 |
| 0.3% | 32 B |         1 | `.bubbles Object`                                                                |

##### `HTMLAnchorElement`

|     % |     Size | Instances | Path                                             |
| ----: | -------: | --------: | ------------------------------------------------ |
| 13.1% | 1.05 KiB |        22 | `<root>`                                         |
|  5.3% |    441 B |         9 | `.elem JSLexicalEnvironment ← Function ← <root>` |
|  0.6% |     51 B |         1 | `Window ← <root>`                                |
|  0.6% |     49 B |         1 | `(GC root)`                                      |
|  0.6% |     49 B |         1 | `[6] Array`                                      |

##### `CSSStyleDeclaration`

|     % |     Size | Instances | Path                               |
| ----: | -------: | --------: | ---------------------------------- |
| 69.1% | 4.35 KiB |         3 | `(GC root)`                        |
| 23.0% | 1.45 KiB |         1 | `Structure ← Window`               |
|  5.5% |    352 B |        11 | `<root>`                           |
|  0.5% |     32 B |         1 | `.emptyStyle JSLexicalEnvironment` |
|  0.5% |     32 B |         1 | `._cachedContentTextStyle Object`  |

##### `Text`

|    % | Size | Instances | Path                                              |
| ---: | ---: | --------: | ------------------------------------------------- |
| 0.6% | 33 B |         1 | `[1] Array ← .textNodes Object ← .article Object` |
| 0.6% | 33 B |         1 | `[2] Array ← .textNodes Object ← .article Object` |
| 0.6% | 33 B |         1 | `[3] Array ← .textNodes Object ← .article Object` |
| 0.6% | 33 B |         1 | `[4] Array ← .textNodes Object ← .article Object` |
| 0.6% | 33 B |         1 | `[5] Array ← .textNodes Object ← .article Object` |

##### `JSPropertyNameEnumerator`

|    % | Size | Instances | Path                                                                                                                                                                                                                                        |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0% | 48 B |         1 | `StructureRareData ← Structure ← Structure ← Structure ← Structure ← Structure ← Structure ← Structure ← StructureRareData ← Structure ← Object ← .methods Function ← .CommandLineAPI JSLexicalEnvironment ← JSLexicalEnvironment ← <root>` |
| 1.0% | 48 B |         1 | `StructureRareData ← Structure ← Object ← .methods Function ← .CommandLineAPI JSLexicalEnvironment ← JSLexicalEnvironment ← <root>`                                                                                                         |
| 1.0% | 48 B |         1 | `StructureRareData ← Structure ← Object ← .RLCONF Window ← <root>`                                                                                                                                                                          |
| 1.0% | 48 B |         1 | `StructureRareData ← Structure ← Object ← .RLSTATE Window ← <root>`                                                                                                                                                                         |
| 1.0% | 48 B |         1 | `StructureRareData ← Structure ← Structure ← Object ← .sources JSLexicalEnvironment`                                                                                                                                                        |

##### `jQuery`

|    % | Size | Instances | Path                                                                                                                                                                        |
| ---: | ---: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.1% | 48 B |         1 | `(GC root)`                                                                                                                                                                 |
| 1.1% | 48 B |         1 | `.$shortenUrlLink JSLexicalEnvironment ← Function ← .handler Object ← [0] Array ← .click Object ← .events Object ← .jQuery371070616879042118561 HTMLAnchorElement ← <root>` |
| 1.1% | 48 B |         1 | `.$qrCodeLink JSLexicalEnvironment ← Function ← .handler Object ← [0] Array ← .click Object ← .events Object ← .jQuery371070616879042118561 HTMLAnchorElement ← <root>`     |
| 1.1% | 48 B |         1 | `.$body JSLexicalEnvironment`                                                                                                                                               |
| 1.1% | 48 B |         1 | `.$window JSLexicalEnvironment`                                                                                                                                             |

##### `StructureChain`

|    % | Size | Instances | Path                                                                                                            |
| ---: | ---: | --------: | --------------------------------------------------------------------------------------------------------------- |
| 0.4% | 16 B |         1 | `Structure ← Function ← <root>`                                                                                 |
| 0.4% | 16 B |         1 | `Structure ← InjectedScript ← <root>`                                                                           |
| 0.4% | 16 B |         1 | `Structure ← Function ← .CallFrameProxy Function ← <root>`                                                      |
| 0.4% | 16 B |         1 | `Structure ← Function ← .CommandLineAPI JSLexicalEnvironment ← JSLexicalEnvironment ← <root>`                   |
| 0.4% | 16 B |         1 | `Structure ← Object ← .methods Function ← .CommandLineAPI JSLexicalEnvironment ← JSLexicalEnvironment ← <root>` |

##### `DOMTokenList`

|     % |     Size | Instances | Path        |
| ----: | -------: | --------: | ----------- |
| 97.8% | 4.28 KiB |       137 | `<root>`    |
|  2.2% |     99 B |         3 | `(GC root)` |

##### `HTMLInputElement`

|    % |  Size | Instances | Path                                                                                  |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------- |
| 8.2% | 320 B |         6 | `.FormMetadataJS Window`                                                              |
| 8.1% | 316 B |         4 | `(GC root)`                                                                           |
| 1.3% |  52 B |         1 | `[1] Array ← ._controls Object ← [0] Array ← ._forms Object ← .FormMetadataJS Window` |
| 1.3% |  52 B |         1 | `[1] Array ← ._controls Object ← [1] Array ← ._forms Object ← .FormMetadataJS Window` |
| 1.3% |  52 B |         1 | `[1] Array ← ._controls Object ← [3] Array ← ._forms Object ← .FormMetadataJS Window` |

##### `HTMLButtonElement`

|     % |     Size | Instances | Path                                                                                  |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------- |
| 28.2% | 1.03 KiB |        20 | `.FormMetadataJS Window`                                                              |
|  1.4% |     51 B |         1 | `Window`                                                                              |
|  1.4% |     51 B |         1 | `[2] Array ← ._controls Object ← [0] Array ← ._forms Object ← .FormMetadataJS Window` |
|  1.4% |     51 B |         1 | `[2] Array ← ._controls Object ← [4] Array ← ._forms Object ← .FormMetadataJS Window` |
|  1.4% |     51 B |         1 | `[1] Array ← ._controls Object ← [9] Array ← ._forms Object ← .FormMetadataJS Window` |

##### `HTMLUListElement`

|    % | Size | Instances | Path          |
| ---: | ---: | --------: | ------------- |
| 1.3% | 49 B |         1 | `[47] Array`  |
| 1.3% | 49 B |         1 | `[54] Array`  |
| 1.3% | 49 B |         1 | `[60] Array`  |
| 1.3% | 49 B |         1 | `[125] Array` |
| 1.3% | 49 B |         1 | `[134] Array` |

##### `HTMLLabelElement`

|    % | Size | Instances | Path          |
| ---: | ---: | --------: | ------------- |
| 2.2% | 51 B |         1 | `Window`      |
| 2.1% | 49 B |         1 | `[253] Array` |
| 2.1% | 49 B |         1 | `[330] Array` |
| 2.1% | 49 B |         1 | `[348] Array` |
| 2.1% | 49 B |         1 | `[353] Array` |

##### `TooltippedElement`

|      % |     Size | Instances | Path                                                                                                                                    |
| -----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 2.03 KiB |        26 | `.te JSLexicalEnvironment ← .events Object ← .jQuery371070616879042118561 HTMLElement ← .elem JSLexicalEnvironment ← Function ← <root>` |

##### `Set`

|     % |  Size | Instances | Path                                                                                                                                          |
| ----: | ----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 41.4% | 824 B |         1 | `.SetOfCandidateTagNamesToIgnore JSGlobalLexicalEnvironment`                                                                                  |
| 31.3% | 624 B |         2 | `.stacks JSLexicalEnvironment ← Function ← .isFirst JSLexicalEnvironment ← Function ← .maybeLog JSLexicalEnvironment ← .eventInSample Object` |
| 18.5% | 368 B |         2 | `.exposuresThisPage ExposureLogTracker ← .exposureLogTracker JSLexicalEnvironment ← .tk Object`                                               |
|  8.8% | 176 B |         4 | `(GC root)`                                                                                                                                   |

##### `Document`

|     % |     Size | Instances | Path              |
| ----: | -------: | --------: | ----------------- |
| 94.3% | 1.67 KiB |         7 | `(GC root)`       |
|  5.7% |    104 B |         2 | `Window ← <root>` |

##### `ProgramExecutable`

|     % |     Size | Instances | Path                                                                      |
| ----: | -------: | --------: | ------------------------------------------------------------------------- |
| 66.7% | 1.09 KiB |        10 | `(GC root)`                                                               |
| 13.3% |    224 B |         2 | `.user.options Object`                                                    |
| 13.3% |    224 B |         2 | `.hooks JSLexicalEnvironment`                                             |
|  6.7% |    112 B |         1 | `FunctionExecutable ← Function ← .extractMediaServiceSubscription Window` |

##### `HashMapBucket`

|    % | Size | Instances | Path                                                                                                  |
| ---: | ---: | --------: | ----------------------------------------------------------------------------------------------------- |
| 9.2% | 96 B |         2 | `Map ← .state Object`                                                                                 |
| 9.2% | 96 B |         2 | `Map ← ._mapOfUniqueIDToOriginalElement Object`                                                       |
| 9.2% | 96 B |         2 | `Map ← .queues JSLexicalEnvironment`                                                                  |
| 4.6% | 48 B |         1 | `<root>`                                                                                              |
| 3.1% | 32 B |         1 | `Set ← .exposuresThisPage ExposureLogTracker ← .exposureLogTracker JSLexicalEnvironment ← .tk Object` |

##### `GeneratorFunction`

|     % |  Size | Instances | Path                                               |
| ----: | ----: | --------: | -------------------------------------------------- |
| 52.0% | 255 B |         5 | `.constructor GeneratorFunction ← Window`          |
| 20.8% | 102 B |         2 | `.constructor GeneratorFunction ← Window ← <root>` |
| 19.4% |  95 B |         5 | `Window`                                           |
|  7.8% |  38 B |         2 | `Window ← <root>`                                  |

##### `AsyncGeneratorFunction`

|     % |  Size | Instances | Path                                                    |
| ----: | ----: | --------: | ------------------------------------------------------- |
| 52.0% | 255 B |         5 | `.constructor AsyncGeneratorFunction ← Window`          |
| 20.8% | 102 B |         2 | `.constructor AsyncGeneratorFunction ← Window ← <root>` |
| 19.4% |  95 B |         5 | `Window`                                                |
|  7.8% |  38 B |         2 | `Window ← <root>`                                       |

##### `AsyncFunction`

|     % |  Size | Instances | Path                                           |
| ----: | ----: | --------: | ---------------------------------------------- |
| 52.8% | 255 B |         5 | `.constructor AsyncFunction ← Window`          |
| 21.1% | 102 B |         2 | `.constructor AsyncFunction ← Window ← <root>` |
| 18.6% |  90 B |         5 | `Window`                                       |
|  7.5% |  36 B |         2 | `Window ← <root>`                              |

##### `CallbackObject`

|    % | Size | Instances | Path                                                                                                              |
| ---: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------- |
| 7.3% | 33 B |         1 | `Structure ← CallbackObject ← [0] Array ← ._oneTimeCodeFieldLabelPatternMatchers Object ← .FormMetadataJS Window` |
| 7.3% | 33 B |         1 | `Structure ← CallbackObject ← .ReaderArticleFinderJSController Window`                                            |
| 7.1% | 32 B |         1 | `.browser Window ← <root>`                                                                                        |
| 7.1% | 32 B |         1 | `Structure ← CallbackObject ← .browser Window ← <root>`                                                           |
| 7.1% | 32 B |         1 | `.pushNotification Object ← .safari Window ← <root>`                                                              |

##### `JSGlobalLexicalEnvironment`

|     % |  Size | Instances | Path        |
| ----: | ----: | --------: | ----------- |
| 57.1% | 256 B |         4 | `(GC root)` |
| 42.9% | 192 B |         3 | `Window`    |

##### `Callee`

|     % |  Size | Instances | Path              |
| ----: | ----: | --------: | ----------------- |
| 71.4% | 320 B |        10 | `Window`          |
| 28.6% | 128 B |         4 | `Window ← <root>` |

##### `InjectedScriptHost`

|     % |  Size | Instances | Path                                      |
| ----: | ----: | --------: | ----------------------------------------- |
| 52.2% | 210 B |         6 | `Structure ← InjectedScriptHost ← <root>` |
| 47.8% | 192 B |         6 | `<root>`                                  |

##### `CommandLineAPIHost`

|     % |  Size | Instances | Path                                      |
| ----: | ----: | --------: | ----------------------------------------- |
| 57.1% | 192 B |         6 | `<root>`                                  |
| 42.9% | 144 B |         6 | `Structure ← CommandLineAPIHost ← <root>` |

##### `SparseArrayValueMap`

|     % | Size | Instances | Path                                                                                                        |
| ----: | ---: | --------: | ----------------------------------------------------------------------------------------------------------- |
| 25.0% | 64 B |         2 | `Object`                                                                                                    |
| 25.0% | 64 B |         2 | `Object ← .xhrSuccessStatus JSLexicalEnvironment`                                                           |
| 25.0% | 64 B |         2 | `Object ← .ENTRYPOINT_TYPE Object ← .exports Object ← .module Object ← .ext.uls.rewrite.entrypoints Object` |
| 25.0% | 64 B |         2 | `Object ← .ULS_MODE Object ← .exports Object ← .module Object ← .ext.uls.rewrite.entrypoints Object`        |

##### `JSWindowProxy`

|     % |  Size | Instances | Path        |
| ----: | ----: | --------: | ----------- |
| 83.3% | 160 B |         5 | `(GC root)` |
| 16.7% |  32 B |         1 | `<root>`    |

##### `Array Iterator`

|     % | Size | Instances | Path              |
| ----: | ---: | --------: | ----------------- |
| 71.4% | 90 B |         5 | `Window`          |
| 28.6% | 36 B |         2 | `Window ← <root>` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

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
| 13.9% |  413 KiB |         2 | `.declarator Object ← .jquery Object`          |
| 10.3% |  308 KiB |         2 | `(GC root)`                                    |
|  3.1% | 91.1 KiB |         1 | `.articleTitleInformation Object`              |
|  2.9% | 85.8 KiB |         1 | `.declarator Object ← .jquery.uls.data Object` |
|  1.7% | 50.3 KiB |         1 | `.declarator Object`                           |

##### `FunctionExecutable`

|     % |     Size | Instances | Path                                                                      |
| ----: | -------: | --------: | ------------------------------------------------------------------------- |
| 20.4% |  413 KiB |         2 | `Function ← .declarator Object ← .jquery Object`                          |
|  4.5% |   91 KiB |         1 | `FunctionRareData ← Function ← .articleTitleInformation Object`           |
|  4.2% | 85.7 KiB |         1 | `Function ← .declarator Object ← .jquery.uls.data Object`                 |
|  2.5% | 50.3 KiB |         1 | `Function ← .declarator Object`                                           |
|  0.6% | 12.1 KiB |         1 | `FunctionRareData ← Function ← .stringsMatchAnyRegularExpressions Window` |

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
| 127.7% | 1.49 MiB |     1,647 | `(GC root)`                                                                                                               |
|   7.2% | 86.6 KiB |        10 | `UnlinkedFunctionExecutable ← UnlinkedProgramCodeBlock ← <root>`                                                          |
|   0.1% |    992 B |         2 | `UnlinkedFunctionExecutable ← UnlinkedFunctionCodeBlock ← UnlinkedFunctionExecutable ← UnlinkedProgramCodeBlock ← <root>` |
|  <0.1% |    433 B |         1 | `UnlinkedFunctionExecutable ← <root>`                                                                                     |

##### `Window`

|     % |    Size | Instances | Path                          |
| ----: | ------: | --------: | ----------------------------- |
| 73.5% | 762 KiB |        11 | `(GC root)`                   |
| 26.5% | 275 KiB |         2 | `<root>`                      |
|  0.1% |   536 B |         1 | `Structure ← Window ← <root>` |

##### `JSLexicalEnvironment`

|     % |     Size | Instances | Path                               |
| ----: | -------: | --------: | ---------------------------------- |
| 42.8% |  347 KiB |        22 | `(GC root)`                        |
| 13.5% |  110 KiB |         6 | `<root>`                           |
| 13.5% |  109 KiB |         6 | `JSLexicalEnvironment ← <root>`    |
|  7.2% | 58.7 KiB |         5 | `JSLexicalEnvironment`             |
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
| 17.0% | 90.8 KiB |         1 | `FunctionExecutable ← FunctionRareData ← Function ← .articleTitleInformation Object`           |
| 10.4% | 55.6 KiB |         6 | `(GC root)`                                                                                    |
|  1.8% | 9.68 KiB |         1 | `FunctionExecutable ← FunctionRareData ← Function ← .findCandidateElements Object`             |
|  1.7% | 9.07 KiB |         1 | `FunctionExecutable ← FunctionRareData ← Function ← .findExtraArticleCandidateElements Object` |
|  1.4% | 7.63 KiB |         1 | `FunctionExecutable ← FunctionRareData ← Function ← .stringsMatchAnyRegularExpressions Window` |

##### `DOMAttributeGetterSetter`

|     % | Size | Instances | Path                 |
| ----: | ---: | --------: | -------------------- |
| <0.1% | 48 B |         1 | `(GC root)`          |
| <0.1% | 48 B |         1 | `.prefix Element`    |
| <0.1% | 48 B |         1 | `.localName Element` |
| <0.1% | 48 B |         1 | `.tagName Element`   |
| <0.1% | 48 B |         1 | `.id Element`        |

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
| 46.2% |   91 KiB |         1 | `Function ← .articleTitleInformation Object`                                             |
|  6.2% | 12.2 KiB |         1 | `Function ← .stringsMatchAnyRegularExpressions Window`                                   |
|  5.0% | 9.88 KiB |         1 | `Function ← .findCandidateElements Object`                                               |
|  4.7% | 9.27 KiB |         1 | `Function ← .findExtraArticleCandidateElements Object`                                   |
|  3.7% | 7.36 KiB |         1 | `Function ← .extraArticleCandidateIfElementIsViable Function ← .CandidateElement Window` |

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
|  0.6% | 576 B |        12 | `(GC root)`                                                                                                              |
|  0.1% |  96 B |         2 | `Structure ← Function`                                                                                                   |
| <0.1% |  48 B |         1 | `Structure ← Function ← [11] Array ← .fns JSLexicalEnvironment ← .wikipage.content Object ← .hooks JSLexicalEnvironment` |
| <0.1% |  48 B |         1 | `Structure ← Function ← .reduce Array`                                                                                   |
| <0.1% |  48 B |         1 | `Structure ← Structure ← InjectedScriptHost ← Structure ← InjectedScriptHost ← <root>`                                   |

##### `SymbolTable`

|    % |  Size | Instances | Path                                                                                                              |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------- |
| 0.7% | 576 B |         9 | `(GC root)`                                                                                                       |
| 0.2% | 192 B |         3 | `JSLexicalEnvironment ← <root>`                                                                                   |
| 0.1% | 128 B |         2 | `JSLexicalEnvironment ← JSLexicalEnvironment ← <root>`                                                            |
| 0.1% |  64 B |         1 | `JSLexicalEnvironment ← Function ← <root>`                                                                        |
| 0.1% |  64 B |         1 | `JSLexicalEnvironment ← .methods Function ← .CommandLineAPI JSLexicalEnvironment ← JSLexicalEnvironment ← <root>` |

##### `HTMLElement`

|     % |     Size | Instances | Path                                             |
| ----: | -------: | --------: | ------------------------------------------------ |
| 57.3% | 47.7 KiB |         7 | `(GC root)`                                      |
| 25.6% | 21.3 KiB |        27 | `.elem JSLexicalEnvironment ← Function ← <root>` |
|  0.7% |    574 B |         1 | `Window`                                         |
|  0.6% |    526 B |         1 | `Window ← <root>`                                |
|  0.1% |     82 B |         1 | `[442] Array`                                    |

##### `Document`

|     % |     Size | Instances | Path              |
| ----: | -------: | --------: | ----------------- |
| 99.3% | 81.2 KiB |         7 | `(GC root)`       |
|  0.7% |    578 B |         2 | `Window ← <root>` |

##### `CustomGetterSetter`

|     % | Size | Instances | Path                           |
| ----: | ---: | --------: | ------------------------------ |
| <0.1% | 32 B |         1 | `.constructor Element`         |
| <0.1% | 32 B |         1 | `.constructor HTMLElement`     |
| <0.1% | 32 B |         1 | `.onmouseenter HTMLElement`    |
| <0.1% | 32 B |         1 | `.onmouseleave HTMLElement`    |
| <0.1% | 32 B |         1 | `.constructor HTMLHtmlElement` |

##### `NativeExecutable`

|     % |     Size | Instances | Path                                                                      |
| ----: | -------: | --------: | ------------------------------------------------------------------------- |
| 39.2% | 23.5 KiB |       301 | `(GC root)`                                                               |
|  0.1% |     80 B |         1 | `<root>`                                                                  |
|  0.1% |     80 B |         1 | `Function ← .next URLSearchParams Iterator ← Structure ← Window ← <root>` |
|  0.1% |     80 B |         1 | `Function ← .item DOMRectList`                                            |
|  0.1% |     80 B |         1 | `Function ← .abort AbortController`                                       |

##### `Element`

|     % |     Size | Instances | Path              |
| ----: | -------: | --------: | ----------------- |
| 97.1% | 54.9 KiB |         7 | `(GC root)`       |
|  2.0% | 1.11 KiB |         2 | `Window`          |
|  0.9% |    522 B |         1 | `Window ← <root>` |

##### `GetterSetter`

|    % |     Size | Instances | Path                                    |
| ---: | -------: | --------: | --------------------------------------- |
| 4.9% | 2.55 KiB |         2 | `.eventInSample Object`                 |
| 2.8% | 1.43 KiB |         2 | `.getCrossSite Object ← .cookie Object` |
| 2.6% | 1.35 KiB |         2 | `.jqueryMsg Object`                     |
| 2.4% | 1.22 KiB |         2 | `.newInstrument Object`                 |
| 1.1% |    577 B |         1 | `.write HTMLDocument`                   |

##### `DOMRect`

|    % |     Size | Instances | Path                                                         |
| ---: | -------: | --------: | ------------------------------------------------------------ |
| 2.9% | 1.25 KiB |         2 | `(GC root)`                                                  |
| 1.0% |    429 B |         1 | `Structure ← Window ← <root>`                                |
| 0.8% |    367 B |         1 | `Window`                                                     |
| 0.1% |     32 B |         1 | `._cachedElementBoundingRect HTMLSpanElement ← [1120] Array` |
| 0.1% |     32 B |         1 | `._cachedElementBoundingRect HTMLElement ← [1121] Array`     |

##### `JSPropertyNameEnumerator`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                        |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 47.2% | 17.9 KiB |         4 | `StructureRareData ← Structure ← Object ← .mediawiki.base Object`                                                                                                                                                                           |
|  9.2% | 3.47 KiB |         6 | `StructureRareData ← Structure ← Structure ← Structure ← Structure ← Structure ← Structure ← Structure ← StructureRareData ← Structure ← Object ← .methods Function ← .CommandLineAPI JSLexicalEnvironment ← JSLexicalEnvironment ← <root>` |
|  5.4% | 2.04 KiB |         2 | `StructureRareData ← Structure ← Object ← .RLCONF Window ← <root>`                                                                                                                                                                          |
|  2.5% |    958 B |         2 | `StructureRareData ← Structure ← Object ← .messages Object ← .skins.vector.clientPreferences Object`                                                                                                                                        |
|  1.1% |    438 B |         1 | `StructureRareData ← Structure ← Object`                                                                                                                                                                                                    |

##### `HTMLDivElement`

|     % |     Size | Instances | Path          |
| ----: | -------: | --------: | ------------- |
| 21.1% | 7.55 KiB |        15 | `(GC root)`   |
|  6.0% | 2.16 KiB |         1 | `<root>`      |
|  0.2% |     82 B |         1 | `[672] Array` |
|  0.2% |     82 B |         1 | `[666] Array` |
|  0.2% |     82 B |         1 | `[441] Array` |

##### `HTMLSpanElement`

|    % |  Size | Instances | Path          |
| ---: | ----: | --------: | ------------- |
| 2.7% | 964 B |         4 | `(GC root)`   |
| 0.2% |  81 B |         1 | `[22] Array`  |
| 0.2% |  81 B |         1 | `[863] Array` |
| 0.2% |  81 B |         1 | `[865] Array` |
| 0.2% |  81 B |         1 | `[32] Array`  |

##### `UnlinkedEvalCodeBlock`

|      % |     Size | Instances | Path     |
| -----: | -------: | --------: | -------- |
| 100.0% | 32.4 KiB |        87 | `<root>` |

##### `Map`

|     % |     Size | Instances | Path                                      |
| ----: | -------: | --------: | ----------------------------------------- |
| 53.9% | 17.4 KiB |         7 | `(GC root)`                               |
| 33.4% | 10.8 KiB |         2 | `.en Object ← .data Object`               |
|  4.0% |  1.3 KiB |         2 | `.tokens Object ← .user Object`           |
|  4.0% | 1.28 KiB |         2 | `.options Object ← .user Object`          |
|  1.1% |    368 B |         1 | `._mapOfUniqueIDToOriginalElement Object` |

##### `HTMLAnchorElement`

|     % |     Size | Instances | Path                                             |
| ----: | -------: | --------: | ------------------------------------------------ |
| 31.1% | 8.65 KiB |        26 | `<root>`                                         |
| 30.0% | 8.35 KiB |         6 | `(GC root)`                                      |
| 10.0% | 2.78 KiB |         9 | `.elem JSLexicalEnvironment ← Function ← <root>` |
|  1.9% |    532 B |         1 | `Window ← <root>`                                |
|  0.3% |     81 B |         1 | `[6] Array`                                      |

##### `String`

|     % |     Size | Instances | Path        |
| ----: | -------: | --------: | ----------- |
| 51.5% |   12 KiB |         4 | `Window`    |
| 48.5% | 11.3 KiB |         3 | `(GC root)` |

##### `HTMLLIElement`

|    % |  Size | Instances | Path                 |
| ---: | ----: | --------: | -------------------- |
| 2.9% | 674 B |         2 | `(GC root)`          |
| 1.5% | 337 B |         1 | `Structure ← <root>` |
| 1.5% | 337 B |         1 | `Structure ← Window` |
| 0.4% |  81 B |         1 | `[48] Array`         |
| 0.4% |  81 B |         1 | `[55] Array`         |

##### `EvalExecutable`

|    % |  Size | Instances | Path                                                                                 |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------ |
| 1.9% | 336 B |         3 | `(GC root)`                                                                          |
| 0.6% | 112 B |         1 | `.ext.quicksurveys.init Object`                                                      |
| 0.6% | 112 B |         1 | `FunctionExecutable ← Function ← .declarator Object ← .jquery.spinner.styles Object` |
| 0.6% | 112 B |         1 | `.ext.checkUser.clientHints Object`                                                  |
| 0.6% | 112 B |         1 | `.wikibase.client.vector-2022 Object`                                                |

##### `HTMLInputElement`

|     % |     Size | Instances | Path                     |
| ----: | -------: | --------: | ------------------------ |
| 70.9% | 12.2 KiB |         4 | `(GC root)`              |
|  3.8% |    675 B |         1 | `Window`                 |
|  1.8% |    325 B |         1 | `.FormMetadataJS Window` |
|  0.5% |     81 B |         1 | `[252] Array`            |
|  0.5% |     81 B |         1 | `[317] Array`            |

##### `MultimediaViewerBootstrap`

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 14.5 KiB |         2 | `(GC root)` |

##### `HTMLButtonElement`

|     % |     Size | Instances | Path                     |
| ----: | -------: | --------: | ------------------------ |
| 63.4% | 9.02 KiB |        13 | `(GC root)`              |
| 10.0% | 1.42 KiB |        10 | `.FormMetadataJS Window` |
|  4.0% |    580 B |         1 | `Window`                 |
|  0.6% |     81 B |         1 | `[261] Array`            |
|  0.6% |     81 B |         1 | `[262] Array`            |

##### `Node`

|     % |     Size | Instances | Path              |
| ----: | -------: | --------: | ----------------- |
| 88.0% |   12 KiB |         7 | `(GC root)`       |
|  8.4% | 1.15 KiB |         5 | `Window`          |
|  3.6% |    498 B |         2 | `Window ← <root>` |

##### `Promise`

|     % |     Size | Instances | Path                                                                                                                                                                   |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 50.7% | 6.61 KiB |         1 | `.promise Object ← .preview Object ← .u JSLexicalEnvironment`                                                                                                          |
| 46.4% | 6.05 KiB |         1 | `.i JSLexicalEnvironment ← Function ← .abort Promise ← .promise Object ← .preview Object ← .u JSLexicalEnvironment`                                                    |
| 22.0% | 2.88 KiB |         1 | `.capturedPromise JSLexicalEnvironment ← Function ← .t JSLexicalEnvironment ← Function ← <root>`                                                                       |
|  9.7% | 1.27 KiB |         1 | `.promise Object ← .globalContext Object ← .context Object ← Promise ← .capturedPromise JSLexicalEnvironment ← Function ← .t JSLexicalEnvironment ← Function ← <root>` |
|  7.8% | 1.01 KiB |         1 | `(GC root)`                                                                                                                                                            |

##### `HTMLDocument`

|     % |     Size | Instances | Path                 |
| ----: | -------: | --------: | -------------------- |
| 83.1% | 10.8 KiB |         6 | `(GC root)`          |
|  8.3% | 1.08 KiB |         2 | `Window ← <root>`    |
|  7.1% |    952 B |         4 | `Structure ← Window` |
|  1.4% |    192 B |         4 | `.document Window`   |

##### `InjectedScriptHost`

|      % |     Size | Instances | Path                                      |
| -----: | -------: | --------: | ----------------------------------------- |
| 100.0% | 9.18 KiB |         6 | `<root>`                                  |
|  90.8% | 8.34 KiB |         6 | `Structure ← InjectedScriptHost ← <root>` |

##### `Array Iterator`

|     % |     Size | Instances | Path              |
| ----: | -------: | --------: | ----------------- |
| 84.4% | 6.33 KiB |         5 | `Window`          |
| 15.6% | 1.17 KiB |         2 | `Window ← <root>` |

##### `JSGlobalLexicalEnvironment`

|     % |     Size | Instances | Path        |
| ----: | -------: | --------: | ----------- |
| 89.5% | 6.02 KiB |         4 | `(GC root)` |
| 10.5% |    720 B |         3 | `Window`    |

##### `StructureChain`

|    % | Size | Instances | Path                                                                                                            |
| ---: | ---: | --------: | --------------------------------------------------------------------------------------------------------------- |
| 0.4% | 16 B |         1 | `Structure ← Function ← <root>`                                                                                 |
| 0.4% | 16 B |         1 | `Structure ← InjectedScript ← <root>`                                                                           |
| 0.4% | 16 B |         1 | `Structure ← Function ← .CallFrameProxy Function ← <root>`                                                      |
| 0.4% | 16 B |         1 | `Structure ← Function ← .CommandLineAPI JSLexicalEnvironment ← JSLexicalEnvironment ← <root>`                   |
| 0.4% | 16 B |         1 | `Structure ← Object ← .methods Function ← .CommandLineAPI JSLexicalEnvironment ← JSLexicalEnvironment ← <root>` |

##### `CommandLineAPIHost`

|      % |     Size | Instances | Path                                      |
| -----: | -------: | --------: | ----------------------------------------- |
| 100.0% | 4.22 KiB |         6 | `<root>`                                  |
|  80.0% | 3.38 KiB |         6 | `Structure ← CommandLineAPIHost ← <root>` |

##### `AsyncFunction`

|     % |     Size | Instances | Path                                           |
| ----: | -------: | --------: | ---------------------------------------------- |
| 72.2% | 2.96 KiB |         5 | `Window`                                       |
| 28.6% | 1.17 KiB |         5 | `.constructor AsyncFunction ← Window`          |
| 27.8% | 1.14 KiB |         2 | `Window ← <root>`                              |
| 11.4% |    480 B |         2 | `.constructor AsyncFunction ← Window ← <root>` |

##### `AsyncGeneratorFunction`

|     % |     Size | Instances | Path                                                    |
| ----: | -------: | --------: | ------------------------------------------------------- |
| 71.4% | 2.28 KiB |         5 | `Window`                                                |
| 38.2% | 1.22 KiB |         5 | `.constructor AsyncGeneratorFunction ← Window`          |
| 28.6% |    932 B |         2 | `Window ← <root>`                                       |
| 15.3% |    498 B |         2 | `.constructor AsyncGeneratorFunction ← Window ← <root>` |

##### `GeneratorFunction`

|     % |     Size | Instances | Path                                               |
| ----: | -------: | --------: | -------------------------------------------------- |
| 71.4% | 2.23 KiB |         5 | `Window`                                           |
| 38.2% | 1.19 KiB |         5 | `.constructor GeneratorFunction ← Window`          |
| 28.6% |    912 B |         2 | `Window ← <root>`                                  |
| 15.3% |    488 B |         2 | `.constructor GeneratorFunction ← Window ← <root>` |

##### `CallbackObject`

|     % |  Size | Instances | Path                                                                                                              |
| ----: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------- |
| 31.4% | 854 B |         1 | `.ReaderArticleFinderJSController Window`                                                                         |
| 27.3% | 742 B |         1 | `[0] Array ← ._oneTimeCodeFieldLabelPatternMatchers Object ← .FormMetadataJS Window`                              |
| 24.4% | 662 B |         1 | `Structure ← CallbackObject ← .ReaderArticleFinderJSController Window`                                            |
| 20.3% | 550 B |         1 | `Structure ← CallbackObject ← [0] Array ← ._oneTimeCodeFieldLabelPatternMatchers Object ← .FormMetadataJS Window` |
|  8.2% | 224 B |         1 | `.browser Window ← <root>`                                                                                        |

##### `ProgramExecutable`

|     % |     Size | Instances | Path                                                                      |
| ----: | -------: | --------: | ------------------------------------------------------------------------- |
| 66.7% | 1.09 KiB |        10 | `(GC root)`                                                               |
| 13.3% |    224 B |         2 | `.user.options Object`                                                    |
| 13.3% |    224 B |         2 | `.hooks JSLexicalEnvironment`                                             |
|  6.7% |    112 B |         1 | `FunctionExecutable ← Function ← .extractMediaServiceSubscription Window` |

##### `HashMapBucket`

|     % |  Size | Instances | Path                                                                                                                                                |
| ----: | ----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 23.0% | 342 B |         2 | `Set ← .stacks JSLexicalEnvironment ← Function ← .isFirst JSLexicalEnvironment ← Function ← .maybeLog JSLexicalEnvironment ← .eventInSample Object` |
| 15.7% | 234 B |         2 | `.stacks JSLexicalEnvironment ← Function ← .isFirst JSLexicalEnvironment ← Function ← .maybeLog JSLexicalEnvironment ← .eventInSample Object`       |
|  3.2% |  48 B |         1 | `Map ← .state Object`                                                                                                                               |
|  3.2% |  48 B |         1 | `Map ← ._mapOfUniqueIDToOriginalElement Object`                                                                                                     |
|  3.2% |  48 B |         1 | `Map ← .queues JSLexicalEnvironment`                                                                                                                |

##### `JSWindowProxy`

|     % |  Size | Instances | Path        |
| ----: | ----: | --------: | ----------- |
| 76.9% | 960 B |         5 | `(GC root)` |
| 23.1% | 288 B |         1 | `<root>`    |

##### `Callee`

|     % |  Size | Instances | Path              |
| ----: | ----: | --------: | ----------------- |
| 71.4% | 320 B |        10 | `Window`          |
| 28.6% | 128 B |         4 | `Window ← <root>` |

##### `SparseArrayValueMap`

|     % |  Size | Instances | Path                                                                                                        |
| ----: | ----: | --------: | ----------------------------------------------------------------------------------------------------------- |
| 34.7% | 102 B |         2 | `Object`                                                                                                    |
| 21.8% |  64 B |         2 | `Object ← .xhrSuccessStatus JSLexicalEnvironment`                                                           |
| 21.8% |  64 B |         2 | `Object ← .ENTRYPOINT_TYPE Object ← .exports Object ← .module Object ← .ext.uls.rewrite.entrypoints Object` |
| 21.8% |  64 B |         2 | `Object ← .ULS_MODE Object ← .exports Object ← .module Object ← .ext.uls.rewrite.entrypoints Object`        |

## Largest strings

Strings ranked by bytes allocated for them.

### Categories

#### String

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

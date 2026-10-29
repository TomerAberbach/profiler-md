# Heap snapshot

Held 1.46 MiB over 16,691 nodes and 45,310 edges.

| Category           |     % |     Size | Nodes |
| ------------------ | ----: | -------: | ----: |
| Code               | 42.8% |  640 KiB | 2,765 |
| String             | 23.8% |  356 KiB | 6,250 |
| Object shape       | 13.7% |  205 KiB | 1,875 |
| Object             |  7.7% |  115 KiB | 1,494 |
| Internal           |  6.4% | 95.2 KiB | 1,301 |
| Function           |  4.3% | 65.1 KiB | 1,811 |
| Array              |  1.2% |   18 KiB | 1,112 |
| Symbol             |  0.1% |  1.2 KiB |    77 |
| Regular expression | <0.1% |    352 B |     4 |
| Native             | <0.1% |     59 B |     2 |

`B ←(several paths)– A` means `A` retains `B` only through other nodes, along several paths.

## Largest constructors

### Self size

Constructors with the most instance bytes, excluding referenced nodes.

|     % |     Size | Instances | Constructor                  |
| ----: | -------: | --------: | ---------------------------- |
| 17.4% |  261 KiB |       122 | `FunctionCodeBlock`          |
| 13.7% |  205 KiB |     1,875 | `Structure`                  |
|  7.8% |  116 KiB |       931 | `FunctionExecutable`         |
|  6.5% |   97 KiB |     1,373 | `Object`                     |
|  6.1% | 90.9 KiB |       121 | `UnlinkedFunctionCodeBlock`  |
|  5.8% | 86.7 KiB |       925 | `UnlinkedFunctionExecutable` |
|  4.2% | 62.5 KiB |     1,732 | `Function`                   |
|  3.4% |   51 KiB |       653 | `NativeExecutable`           |
|  1.9% | 27.7 KiB |         4 | `ModuleRecord`               |
|  1.2% | 18.3 KiB |       391 | `PropertyTable`              |
|  1.1% | 17.2 KiB |        10 | `Cell Butterfly`             |
|  1.1% | 16.9 KiB |     1,077 | `Array`                      |
|  1.1% | 16.4 KiB |       210 | `FunctionRareData`           |
|  0.8% | 12.7 KiB |       170 | `JSLexicalEnvironment`       |
|  0.8% | 11.6 KiB |       185 | `SymbolTable`                |
|  0.7% | 10.3 KiB |         1 | `GlobalObject`               |
|  0.6% | 9.66 KiB |       103 | `StructureRareData`          |
|  0.3% | 4.59 KiB |       147 | `GetterSetter`               |
|  0.3% | 4.45 KiB |         1 | `ModuleProgramCodeBlock`     |
|  0.2% | 2.29 KiB |        70 | `AsyncFunction`              |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Code

|     % |     Size | Instances | Constructor                      |
| ----: | -------: | --------: | -------------------------------- |
| 17.4% |  261 KiB |       122 | `FunctionCodeBlock`              |
|  7.8% |  116 KiB |       931 | `FunctionExecutable`             |
|  6.1% | 90.9 KiB |       121 | `UnlinkedFunctionCodeBlock`      |
|  5.8% | 86.7 KiB |       925 | `UnlinkedFunctionExecutable`     |
|  3.4% |   51 KiB |       653 | `NativeExecutable`               |
|  1.9% | 27.7 KiB |         4 | `ModuleRecord`                   |
|  0.3% | 4.45 KiB |         1 | `ModuleProgramCodeBlock`         |
|  0.1% | 1.68 KiB |         2 | `UnlinkedModuleProgramCodeBlock` |
| <0.1% |    224 B |         2 | `ModuleProgramExecutable`        |
| <0.1% |    128 B |         4 | `JSSourceCode`                   |

##### Object shape

|     % |    Size | Instances | Constructor |
| ----: | ------: | --------: | ----------- |
| 13.7% | 205 KiB |     1,875 | `Structure` |

##### Object

|     % |     Size | Instances | Constructor                        |
| ----: | -------: | --------: | ---------------------------------- |
|  6.5% |   97 KiB |     1,373 | `Object`                           |
|  0.7% | 10.3 KiB |         1 | `GlobalObject`                     |
|  0.1% | 1.19 KiB |         1 | `InternalModuleRegistry`           |
|  0.1% | 1.14 KiB |         2 | `NodeJSFS`                         |
|  0.1% |    829 B |         4 | `FileSink`                         |
| <0.1% |    659 B |         2 | `FileInternalReadableStreamSource` |
| <0.1% |    512 B |        16 | `InternalPromise`                  |
| <0.1% |    363 B |         2 | `Blob`                             |
| <0.1% |    329 B |        10 | `Map`                              |
| <0.1% |    242 B |         2 | `WriteStream`                      |
| <0.1% |    213 B |         1 | `Process`                          |
| <0.1% |    210 B |         4 | `Generator`                        |
| <0.1% |    156 B |         3 | `ReadableStream`                   |
| <0.1% |    130 B |         4 | `JSAsyncGeneratorFunction`         |
| <0.1% |    108 B |         3 | `Set`                              |
| <0.1% |     89 B |         1 | `ReadStream`                       |
| <0.1% |     80 B |         2 | `Stats`                            |
| <0.1% |     76 B |         2 | `Dirent`                           |
| <0.1% |     76 B |         2 | `StringDecoder`                    |
| <0.1% |     70 B |         1 | `String`                           |

##### Internal

|     % |     Size | Instances | Constructor                  |
| ----: | -------: | --------: | ---------------------------- |
|  1.2% | 18.3 KiB |       391 | `PropertyTable`              |
|  1.1% | 17.2 KiB |        10 | `Cell Butterfly`             |
|  1.1% | 16.4 KiB |       210 | `FunctionRareData`           |
|  0.8% | 12.7 KiB |       170 | `JSLexicalEnvironment`       |
|  0.8% | 11.6 KiB |       185 | `SymbolTable`                |
|  0.6% | 9.66 KiB |       103 | `StructureRareData`          |
|  0.3% | 4.59 KiB |       147 | `GetterSetter`               |
|  0.1% | 2.17 KiB |         4 | `JSModuleEnvironment`        |
|  0.1% | 1.44 KiB |        46 | `CustomGetterSetter`         |
|  0.1% |    768 B |        16 | `DOMAttributeGetterSetter`   |
| <0.1% |    208 B |        13 | `StructureChain`             |
| <0.1% |    144 B |         3 | `JSPropertyNameEnumerator`   |
| <0.1% |     64 B |         1 | `JSGlobalLexicalEnvironment` |
| <0.1% |     48 B |         1 | `PromiseReaction`            |

##### Function

|     % |     Size | Instances | Constructor              |
| ----: | -------: | --------: | ------------------------ |
|  4.2% | 62.5 KiB |     1,732 | `Function`               |
|  0.2% | 2.29 KiB |        70 | `AsyncFunction`          |
| <0.1% |    128 B |         4 | `Callee`                 |
| <0.1% |    102 B |         3 | `GeneratorFunction`      |
| <0.1% |     70 B |         2 | `AsyncGeneratorFunction` |

##### Array

|     % |     Size | Instances | Constructor           |
| ----: | -------: | --------: | --------------------- |
|  1.1% | 16.9 KiB |     1,077 | `Array`               |
|  0.1% | 1.06 KiB |        34 | `SparseArrayValueMap` |
| <0.1% |     18 B |         1 | `Array Iterator`      |

#### Retainer paths

Retainer paths with the largest contribution to each constructor's self size.

##### `FunctionCodeBlock`

|     % |     Size | Instances | Path                                                                                                                                                               |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 63.5% |  166 KiB |        61 | `FunctionCodeBlock ← FunctionExecutable ←(several paths)– GlobalObject ← <root>`                                                                                   |
| 11.2% | 29.3 KiB |         2 | `FunctionCodeBlock ← FunctionExecutable ←(several paths)– <root>`                                                                                                  |
|  2.8% |  7.4 KiB |         1 | `FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ←(several paths)– GlobalObject ← <root>` |
|  2.4% | 6.35 KiB |         1 | `FunctionCodeBlock ← FunctionExecutable ← FunctionExecutable ← Function ←(several paths)– Object ← InternalModuleRegistry ← GlobalObject ← <root>`                 |
|  2.4% | 6.26 KiB |         7 | `FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ←(several paths)– GlobalObject ← <root>`                                          |

##### `Structure`

|     % |     Size | Instances | Path                                                                     |
| ----: | -------: | --------: | ------------------------------------------------------------------------ |
| 12.6% | 25.8 KiB |       236 | `Structure ←(several paths)– GlobalObject ← <root>`                      |
|  5.8% | 11.8 KiB |       108 | `Structure ← GlobalObject ← <root>`                                      |
|  4.1% | 8.31 KiB |        76 | `Structure ← FunctionExecutable ←(several paths)– GlobalObject ← <root>` |
|  2.4% | 4.92 KiB |        45 | `Structure ← <root>`                                                     |
|  2.0% | 4.16 KiB |        38 | `Structure ← Function ← GlobalObject ← <root>`                           |

##### `FunctionExecutable`

|     % |     Size | Instances | Path                                                                                   |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------- |
| 49.0% |   57 KiB |       456 | `FunctionExecutable ←(several paths)– GlobalObject ← <root>`                           |
| 18.8% | 21.9 KiB |       175 | `FunctionExecutable ← Function ← GlobalObject ← <root>`                                |
|  9.6% | 11.1 KiB |        89 | `FunctionExecutable ←(several paths)– <root>`                                          |
|  1.4% | 1.63 KiB |        13 | `FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ←(several paths)– <root>` |
|  1.3% |  1.5 KiB |        12 | `FunctionExecutable ← Function ←(several paths)– GlobalObject ← <root>`                |

##### `Object`

|    % |     Size | Instances | Path                                                                   |
| ---: | -------: | --------: | ---------------------------------------------------------------------- |
| 3.0% | 2.86 KiB |        26 | `Object ←(several paths)– GlobalObject ← <root>`                       |
| 1.7% | 1.64 KiB |        17 | `Object ← InternalModuleRegistry ← GlobalObject ← <root>`              |
| 0.6% |    640 B |         4 | `Object ← (GC root)`                                                   |
| 0.2% |    242 B |         4 | `Object ←.prototype– Function ←(several paths)– GlobalObject ← <root>` |
| 0.2% |    225 B |         1 | `Object ←.versions– Process ←.process– GlobalObject ← <root>`          |

##### `UnlinkedFunctionCodeBlock`

|     % |     Size | Instances | Path                                                                                                                                     |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 41.4% | 37.6 KiB |        30 | `UnlinkedFunctionCodeBlock ←(several paths)– FunctionExecutable ←(several paths)– GlobalObject ← <root>`                                 |
| 25.5% | 23.2 KiB |        40 | `UnlinkedFunctionCodeBlock ←(several paths)– GlobalObject ← <root>`                                                                      |
| 13.8% | 12.6 KiB |        28 | `UnlinkedFunctionCodeBlock ←(several paths)– <root>`                                                                                     |
| 10.6% | 9.64 KiB |        10 | `UnlinkedFunctionCodeBlock ←(several paths)– FunctionExecutable ←(several paths)– <root>`                                                |
|  1.8% | 1.62 KiB |         3 | `UnlinkedFunctionCodeBlock ←(several paths)– FunctionExecutable ← FunctionExecutable ← Function ←(several paths)– GlobalObject ← <root>` |

##### `UnlinkedFunctionExecutable`

|     % |     Size | Instances | Path                                                                                      |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------- |
| 47.6% | 41.3 KiB |       440 | `UnlinkedFunctionExecutable ←(several paths)– GlobalObject ← <root>`                      |
| 17.2% | 14.9 KiB |       159 | `UnlinkedFunctionExecutable ← FunctionExecutable ← Function ← GlobalObject ← <root>`      |
| 10.7% | 9.28 KiB |        99 | `UnlinkedFunctionExecutable ←(several paths)– <root>`                                     |
|  9.6% | 8.34 KiB |        89 | `UnlinkedFunctionExecutable ← <root>`                                                     |
|  2.5% | 2.16 KiB |        23 | `UnlinkedFunctionExecutable ← FunctionExecutable ←(several paths)– GlobalObject ← <root>` |

##### `Function`

|     % |     Size | Instances | Path                                                                                 |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------ |
| 13.7% | 8.55 KiB |       261 | `Function ←(several paths)– GlobalObject ← <root>`                                   |
| 12.8% | 8.02 KiB |       233 | `Function ← GlobalObject ← <root>`                                                   |
|  1.1% |    735 B |        19 | `Function ←(several paths)– <root>`                                                  |
|  0.8% |    510 B |        15 | `Function ← GetterSetter ← GlobalObject ← <root>`                                    |
|  0.6% |    406 B |        12 | `Function ←(several paths)– Object ← InternalModuleRegistry ← GlobalObject ← <root>` |

##### `NativeExecutable`

|     % |     Size | Instances | Path                                                                                                                    |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------- |
| 21.0% | 10.7 KiB |       137 | `NativeExecutable ← Function ←(several paths)– GlobalObject ← <root>`                                                   |
|  3.7% | 1.88 KiB |        24 | `NativeExecutable ← Function ← GlobalObject ← <root>`                                                                   |
|  1.8% |    960 B |        12 | `NativeExecutable ← Function ←(several paths)– <root>`                                                                  |
|  1.7% |    880 B |        11 | `NativeExecutable ← Function ←(several paths)– Object ← InternalModuleRegistry ← GlobalObject ← <root>`                 |
|  1.7% |    880 B |        11 | `NativeExecutable ← Function ←(several paths)– Object ←.win32– Object ← InternalModuleRegistry ← GlobalObject ← <root>` |

##### `ModuleRecord`

|      % |     Size | Instances | Path                       |
| -----: | -------: | --------: | -------------------------- |
| 100.0% | 27.7 KiB |         4 | `ModuleRecord ← (GC root)` |

##### `PropertyTable`

|     % |     Size | Instances | Path                                                                                                                      |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------- |
| 16.9% | 3.09 KiB |        66 | `PropertyTable ← Structure ←(several paths)– GlobalObject ← <root>`                                                       |
|  9.7% | 1.78 KiB |        38 | `PropertyTable ← Structure ← Function ← GlobalObject ← <root>`                                                            |
|  4.6% |    864 B |        18 | `PropertyTable ← Structure ←(several paths)– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>` |
|  3.6% |    672 B |        14 | `PropertyTable ← Structure ← Object ←(several paths)– GlobalObject ← <root>`                                              |
|  3.3% |    624 B |        13 | `PropertyTable ← Structure ←(several paths)– Object ← InternalModuleRegistry ← GlobalObject ← <root>`                     |

##### `Cell Butterfly`

|     % |   Size | Instances | Path                                                                      |
| ----: | -----: | --------: | ------------------------------------------------------------------------- |
| 93.5% | 16 KiB |         1 | `Cell Butterfly ← Map ←.byId– Object ←.__retained– GlobalObject ← <root>` |
|  3.6% |  640 B |         2 | `Cell Butterfly ← (GC root)`                                              |
|  1.8% |  320 B |         1 | `Cell Butterfly ← Map ←.registry– ModuleLoader ← GlobalObject ← <root>`   |
|  0.7% |  128 B |         4 | `Cell Butterfly ←(several paths)– <root>`                                 |
|  0.2% |   32 B |         1 | `Cell Butterfly ←(several paths)– GlobalObject ← <root>`                  |

##### `Array`

|    % | Size | Instances | Path                                                                                        |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------- |
| 0.4% | 66 B |         1 | `Array ← GlobalObject ← <root>`                                                             |
| 0.4% | 64 B |         4 | `Array ← (GC root)`                                                                         |
| 0.3% | 48 B |         3 | `Array ←.customPromisifyArgs– Function ←(several paths)– GlobalObject ← <root>`             |
| 0.2% | 32 B |         2 | `Array ←.kConstruct– Object ←._events– WriteStream ←(several paths)– GlobalObject ← <root>` |
| 0.2% | 32 B |         2 | `Array ← Process ←.process– GlobalObject ← <root>`                                          |

##### `FunctionRareData`

|     % |     Size | Instances | Path                                                                                                                                                        |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 12.4% | 2.03 KiB |        26 | `FunctionRareData ← Function ←(several paths)– GlobalObject ← <root>`                                                                                       |
|  7.6% | 1.25 KiB |        16 | `FunctionRareData ← AsyncFunction ←(several paths)– GlobalObject ← <root>`                                                                                  |
|  0.5% |     80 B |         1 | `FunctionRareData ← Function ←.Symbol.iterator– Object ←.prototype– Function ←(several paths)– GlobalObject ← <root>`                                       |
|  0.5% |     80 B |         1 | `FunctionRareData ← Function ←.Symbol.iterator– Object ←.prototype– Function ←.SafeStringIterator– Object ← InternalModuleRegistry ← GlobalObject ← <root>` |
|  0.5% |     80 B |         1 | `FunctionRareData ← Function ←.SafeStringIterator– Object ← InternalModuleRegistry ← GlobalObject ← <root>`                                                 |

##### `JSLexicalEnvironment`

|     % |     Size | Instances | Path                                                                                  |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------- |
| 38.3% | 4.84 KiB |        25 | `JSLexicalEnvironment ←(several paths)– GlobalObject ← <root>`                        |
|  5.9% |    768 B |         5 | `JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– GlobalObject ← <root>` |
|  4.3% |    560 B |         8 | `JSLexicalEnvironment ← Function ←(several paths)– GlobalObject ← <root>`             |
|  3.7% |    480 B |        10 | `JSLexicalEnvironment ← AsyncFunction ←(several paths)– GlobalObject ← <root>`        |
|  3.1% |    400 B |         7 | `JSLexicalEnvironment ← (GC root)`                                                    |

##### `SymbolTable`

|     % |     Size | Instances | Path                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------- |
| 47.0% | 5.44 KiB |        87 | `SymbolTable ←(several paths)– GlobalObject ← <root>`                            |
| 14.6% | 1.69 KiB |        27 | `SymbolTable ←(several paths)– <root>`                                           |
|  7.6% |    896 B |        14 | `SymbolTable ←(several paths)– Function ←(several paths)– GlobalObject ← <root>` |
|  7.0% |    832 B |        13 | `SymbolTable ← SymbolTable ←(several paths)– GlobalObject ← <root>`              |
|  3.8% |    448 B |         7 | `SymbolTable ← SymbolTable ←(several paths)– <root>`                             |

##### `GlobalObject`

|      % |     Size | Instances | Path                    |
| -----: | -------: | --------: | ----------------------- |
| 100.0% | 10.3 KiB |         1 | `GlobalObject ← <root>` |

##### `StructureRareData`

|     % |     Size | Instances | Path                                                                                                    |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------- |
| 27.2% | 2.63 KiB |        28 | `StructureRareData ← Structure ←(several paths)– GlobalObject ← <root>`                                 |
|  6.8% |    672 B |         7 | `StructureRareData ← Structure ← Function ← GlobalObject ← <root>`                                      |
|  3.9% |    384 B |         4 | `StructureRareData ← Structure ← StructureRareData ← Structure ←(several paths)– GlobalObject ← <root>` |
|  1.9% |    192 B |         2 | `StructureRareData ← Structure ← GlobalObject ← <root>`                                                 |
|  1.9% |    192 B |         2 | `StructureRareData ← Structure ← StructureRareData ← Structure ← Function ← GlobalObject ← <root>`      |

##### `GetterSetter`

|     % |  Size | Instances | Path                                                                       |
| ----: | ----: | --------: | -------------------------------------------------------------------------- |
| 10.2% | 480 B |        15 | `GetterSetter ← GlobalObject ← <root>`                                     |
|  3.4% | 160 B |         5 | `GetterSetter ←.destroyed– Object ←(several paths)– GlobalObject ← <root>` |
|  2.7% | 128 B |         4 | `GetterSetter ←.closed– Object ←(several paths)– GlobalObject ← <root>`    |
|  2.7% | 128 B |         4 | `GetterSetter ←.errored– Object ←(several paths)– GlobalObject ← <root>`   |
|  2.0% |  96 B |         3 | `GetterSetter ←.Symbol.species– Function ← GlobalObject ← <root>`          |

##### `ModuleProgramCodeBlock`

|      % |     Size | Instances | Path                                 |
| -----: | -------: | --------: | ------------------------------------ |
| 100.0% | 4.45 KiB |         1 | `ModuleProgramCodeBlock ← (GC root)` |

##### `AsyncFunction`

|     % |  Size | Instances | Path                                                                       |
| ----: | ----: | --------: | -------------------------------------------------------------------------- |
| 32.9% | 771 B |        23 | `AsyncFunction ←(several paths)– GlobalObject ← <root>`                    |
|  2.9% |  67 B |         2 | `AsyncFunction ←.chown– Object ←(several paths)– GlobalObject ← <root>`    |
|  2.9% |  67 B |         2 | `AsyncFunction ←.chmod– Object ←(several paths)– GlobalObject ← <root>`    |
|  2.9% |  67 B |         2 | `AsyncFunction ←.stat– Object ←(several paths)– GlobalObject ← <root>`     |
|  2.9% |  67 B |         2 | `AsyncFunction ←.truncate– Object ←(several paths)– GlobalObject ← <root>` |

##### `JSModuleEnvironment`

|      % |     Size | Instances | Path                              |
| -----: | -------: | --------: | --------------------------------- |
| 100.0% | 2.17 KiB |         4 | `JSModuleEnvironment ← (GC root)` |

##### `UnlinkedModuleProgramCodeBlock`

|      % |     Size | Instances | Path                                      |
| -----: | -------: | --------: | ----------------------------------------- |
| 100.0% | 1.68 KiB |         2 | `UnlinkedModuleProgramCodeBlock ← <root>` |

##### `CustomGetterSetter`

|    % | Size | Instances | Path                                                                        |
| ---: | ---: | --------: | --------------------------------------------------------------------------- |
| 2.2% | 32 B |         1 | `CustomGetterSetter ←.arguments– Function ←(several paths)– <root>`         |
| 2.2% | 32 B |         1 | `CustomGetterSetter ←.caller– Function ←(several paths)– <root>`            |
| 2.2% | 32 B |         1 | `CustomGetterSetter ←.constructor– Iterator ← GlobalObject ← <root>`        |
| 2.2% | 32 B |         1 | `CustomGetterSetter ←.Symbol.toStringTag– Iterator ← GlobalObject ← <root>` |
| 2.2% | 32 B |         1 | `CustomGetterSetter ←.Buffer– GlobalObject ← <root>`                        |

##### `InternalModuleRegistry`

|      % |     Size | Instances | Path                                             |
| -----: | -------: | --------: | ------------------------------------------------ |
| 100.0% | 1.19 KiB |         1 | `InternalModuleRegistry ← GlobalObject ← <root>` |

##### `NodeJSFS`

|     % |     Size | Instances | Path                                               |
| ----: | -------: | --------: | -------------------------------------------------- |
| 90.9% | 1.04 KiB |         1 | `NodeJSFS ←(several paths)– GlobalObject ← <root>` |
|  9.1% |    106 B |         1 | `NodeJSFS ← Structure ← GlobalObject ← <root>`     |

##### `SparseArrayValueMap`

|    % | Size | Instances | Path                                                                                                                               |
| ---: | ---: | --------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| 5.9% | 64 B |         2 | `SparseArrayValueMap ← Object ←.prototype– Function ←(several paths)– GlobalObject ← <root>`                                       |
| 5.9% | 64 B |         2 | `SparseArrayValueMap ← Function ←(several paths)– GlobalObject ← <root>`                                                           |
| 5.9% | 64 B |         2 | `SparseArrayValueMap ← Object ←.kEmptyObject– JSLexicalEnvironment ←(several paths)– GlobalObject ← <root>`                        |
| 2.9% | 32 B |         1 | `SparseArrayValueMap ← Object ←.prototype– Function ←.SafeStringIterator– Object ← InternalModuleRegistry ← GlobalObject ← <root>` |
| 2.9% | 32 B |         1 | `SparseArrayValueMap ← Function ←.SafeStringIterator– Object ← InternalModuleRegistry ← GlobalObject ← <root>`                     |

##### `FileSink`

|     % |  Size | Instances | Path                                                                                   |
| ----: | ----: | --------: | -------------------------------------------------------------------------------------- |
| 90.7% | 752 B |         2 | `FileSink ←.kWriteStreamFastPath– WriteStream ←(several paths)– GlobalObject ← <root>` |
|  6.0% |  50 B |         1 | `FileSink ← GlobalObject ← <root>`                                                     |
|  3.3% |  27 B |         1 | `FileSink ← Structure ← GlobalObject ← <root>`                                         |

##### `DOMAttributeGetterSetter`

|    % | Size | Instances | Path                                                                                          |
| ---: | ---: | --------: | --------------------------------------------------------------------------------------------- |
| 6.3% | 48 B |         1 | `DOMAttributeGetterSetter ←.Dirent– NodeJSFS ← Structure ← GlobalObject ← <root>`             |
| 6.3% | 48 B |         1 | `DOMAttributeGetterSetter ←.Stats– NodeJSFS ← Structure ← GlobalObject ← <root>`              |
| 6.3% | 48 B |         1 | `DOMAttributeGetterSetter ←.lastChar– StringDecoder ←(several paths)– GlobalObject ← <root>`  |
| 6.3% | 48 B |         1 | `DOMAttributeGetterSetter ←.lastNeed– StringDecoder ←(several paths)– GlobalObject ← <root>`  |
| 6.3% | 48 B |         1 | `DOMAttributeGetterSetter ←.lastTotal– StringDecoder ←(several paths)– GlobalObject ← <root>` |

##### `FileInternalReadableStreamSource`

|     % |  Size | Instances | Path                                                                    |
| ----: | ----: | --------: | ----------------------------------------------------------------------- |
| 95.9% | 632 B |         1 | `FileInternalReadableStreamSource ←(several paths)– <root>`             |
|  4.1% |  27 B |         1 | `FileInternalReadableStreamSource ← Structure ←(several paths)– <root>` |

##### `InternalPromise`

|      % |  Size | Instances | Path                          |
| -----: | ----: | --------: | ----------------------------- |
| 100.0% | 512 B |        16 | `InternalPromise ← (GC root)` |

##### `Blob`

|     % |  Size | Instances | Path                                           |
| ----: | ----: | --------: | ---------------------------------------------- |
| 90.4% | 328 B |         1 | `Blob ← GlobalObject ← <root>`                 |
|  9.6% |  35 B |         1 | `Blob ←(several paths)– GlobalObject ← <root>` |

##### `Map`

|     % |  Size | Instances | Path                                                                                                                                                  |
| ----: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 38.9% | 128 B |         4 | `Map ← (GC root)`                                                                                                                                     |
| 12.5% |  41 B |         1 | `Map ←(several paths)– GlobalObject ← <root>`                                                                                                         |
|  9.7% |  32 B |         1 | `Map ←.registry– ModuleLoader ← GlobalObject ← <root>`                                                                                                |
|  9.7% |  32 B |         1 | `Map ← GlobalObject ← <root>`                                                                                                                         |
|  9.7% |  32 B |         1 | `Map ←.dummy– JSLexicalEnvironment ←(several paths)– Object ←.prototype– Function ←.SafeMap– Object ← InternalModuleRegistry ← GlobalObject ← <root>` |

##### `WriteStream`

|      % |  Size | Instances | Path                                                  |
| -----: | ----: | --------: | ----------------------------------------------------- |
| 100.0% | 242 B |         2 | `WriteStream ←(several paths)– GlobalObject ← <root>` |

##### `ModuleProgramExecutable`

|      % |  Size | Instances | Path                                  |
| -----: | ----: | --------: | ------------------------------------- |
| 100.0% | 224 B |         2 | `ModuleProgramExecutable ← (GC root)` |

##### `Process`

|      % |  Size | Instances | Path                                       |
| -----: | ----: | --------: | ------------------------------------------ |
| 100.0% | 213 B |         1 | `Process ←.process– GlobalObject ← <root>` |

##### `Generator`

|     % |  Size | Instances | Path                                |
| ----: | ----: | --------: | ----------------------------------- |
| 91.4% | 192 B |         3 | `Generator ← (GC root)`             |
|  8.6% |  18 B |         1 | `Generator ← GlobalObject ← <root>` |

##### `StructureChain`

|     % | Size | Instances | Path                                                                                        |
| ----: | ---: | --------: | ------------------------------------------------------------------------------------------- |
| 38.5% | 80 B |         5 | `StructureChain ←(several paths)– GlobalObject ← <root>`                                    |
| 15.4% | 32 B |         2 | `StructureChain ← Structure ← Structure ←(several paths)– GlobalObject ← <root>`            |
|  7.7% | 16 B |         1 | `StructureChain ← Structure ← Object ← InternalModuleRegistry ← GlobalObject ← <root>`      |
|  7.7% | 16 B |         1 | `StructureChain ← Structure ← Structure ← Function ←(several paths)– GlobalObject ← <root>` |
|  7.7% | 16 B |         1 | `StructureChain ← Structure ←(several paths)– GlobalObject ← <root>`                        |

##### `ReadableStream`

|     % | Size | Instances | Path                                      |
| ----: | ---: | --------: | ----------------------------------------- |
| 42.9% | 67 B |         1 | `ReadableStream ← GlobalObject ← <root>`  |
| 35.9% | 56 B |         1 | `ReadableStream ← <root>`                 |
| 21.2% | 33 B |         1 | `ReadableStream ←(several paths)– <root>` |

##### `JSPropertyNameEnumerator`

|     % | Size | Instances | Path                                                                                                                                                 |
| ----: | ---: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 33.3% | 48 B |         1 | `JSPropertyNameEnumerator ← <root>`                                                                                                                  |
| 33.3% | 48 B |         1 | `JSPropertyNameEnumerator ← StructureRareData ← Structure ←(several paths)– GlobalObject ← <root>`                                                   |
| 33.3% | 48 B |         1 | `JSPropertyNameEnumerator ← StructureRareData ← Structure ← FunctionExecutable ←(several paths)– ReadStream ←(several paths)– GlobalObject ← <root>` |

##### `JSAsyncGeneratorFunction`

|     % | Size | Instances | Path                                                                                                                    |
| ----: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------- |
| 26.2% | 34 B |         1 | `JSAsyncGeneratorFunction ←.Symbol.asyncIterator– Object ←.prototype– Function ←(several paths)– GlobalObject ← <root>` |
| 24.6% | 32 B |         1 | `JSAsyncGeneratorFunction ←(several paths)– GlobalObject ← <root>`                                                      |
| 24.6% | 32 B |         1 | `JSAsyncGeneratorFunction ←.fromReadable– JSLexicalEnvironment ←(several paths)– GlobalObject ← <root>`                 |
| 24.6% | 32 B |         1 | `JSAsyncGeneratorFunction ←.createAsyncIterator– JSLexicalEnvironment ←(several paths)– GlobalObject ← <root>`          |

##### `JSSourceCode`

|      % |  Size | Instances | Path                       |
| -----: | ----: | --------: | -------------------------- |
| 100.0% | 128 B |         4 | `JSSourceCode ← (GC root)` |

##### `Callee`

|     % | Size | Instances | Path                             |
| ----: | ---: | --------: | -------------------------------- |
| 75.0% | 96 B |         3 | `Callee ← GlobalObject ← <root>` |
| 25.0% | 32 B |         1 | `Callee ← (GC root)`             |

##### `Set`

|     % | Size | Instances | Path                                                                                                                       |
| ----: | ---: | --------: | -------------------------------------------------------------------------------------------------------------------------- |
| 40.7% | 44 B |         1 | `Set ←(several paths)– GlobalObject ← <root>`                                                                              |
| 29.6% | 32 B |         1 | `Set ←.dummy– JSLexicalEnvironment ←(several paths)– Object ←.prototype– Function ←(several paths)– GlobalObject ← <root>` |
| 29.6% | 32 B |         1 | `Set ←.allowedNodeEnvironmentFlags– Process ←.process– GlobalObject ← <root>`                                              |

##### `GeneratorFunction`

|     % | Size | Instances | Path                                                                                    |
| ----: | ---: | --------: | --------------------------------------------------------------------------------------- |
| 50.0% | 51 B |         1 | `GeneratorFunction ←.constructor– GeneratorFunction ← GlobalObject ← <root>`            |
| 31.4% | 32 B |         1 | `GeneratorFunction ←.globSync– Object ← InternalModuleRegistry ← GlobalObject ← <root>` |
| 18.6% | 19 B |         1 | `GeneratorFunction ← GlobalObject ← <root>`                                             |

##### `ReadStream`

|      % | Size | Instances | Path                                                 |
| -----: | ---: | --------: | ---------------------------------------------------- |
| 100.0% | 89 B |         1 | `ReadStream ←(several paths)– GlobalObject ← <root>` |

##### `Stats`

|     % | Size | Instances | Path                                            |
| ----: | ---: | --------: | ----------------------------------------------- |
| 63.7% | 51 B |         1 | `Stats ← GlobalObject ← <root>`                 |
| 36.3% | 29 B |         1 | `Stats ←(several paths)– GlobalObject ← <root>` |

##### `Dirent`

|     % | Size | Instances | Path                                             |
| ----: | ---: | --------: | ------------------------------------------------ |
| 67.1% | 51 B |         1 | `Dirent ← GlobalObject ← <root>`                 |
| 32.9% | 25 B |         1 | `Dirent ←(several paths)– GlobalObject ← <root>` |

##### `StringDecoder`

|     % | Size | Instances | Path                                                    |
| ----: | ---: | --------: | ------------------------------------------------------- |
| 67.1% | 51 B |         1 | `StringDecoder ← GlobalObject ← <root>`                 |
| 32.9% | 25 B |         1 | `StringDecoder ←(several paths)– GlobalObject ← <root>` |

##### `String`

|      % | Size | Instances | Path                             |
| -----: | ---: | --------: | -------------------------------- |
| 100.0% | 70 B |         1 | `String ← GlobalObject ← <root>` |

##### `AsyncGeneratorFunction`

|     % | Size | Instances | Path                                                                                   |
| ----: | ---: | --------: | -------------------------------------------------------------------------------------- |
| 72.9% | 51 B |         1 | `AsyncGeneratorFunction ←.constructor– AsyncGeneratorFunction ← GlobalObject ← <root>` |
| 27.1% | 19 B |         1 | `AsyncGeneratorFunction ← GlobalObject ← <root>`                                       |

##### `JSGlobalLexicalEnvironment`

|      % | Size | Instances | Path                                                 |
| -----: | ---: | --------: | ---------------------------------------------------- |
| 100.0% | 64 B |         1 | `JSGlobalLexicalEnvironment ← GlobalObject ← <root>` |

##### `PromiseReaction`

|      % | Size | Instances | Path                          |
| -----: | ---: | --------: | ----------------------------- |
| 100.0% | 48 B |         1 | `PromiseReaction ← (GC root)` |

##### `Array Iterator`

|      % | Size | Instances | Path                                     |
| -----: | ---: | --------: | ---------------------------------------- |
| 100.0% | 18 B |         1 | `Array Iterator ← GlobalObject ← <root>` |

### Retained size

Constructors with the most instance bytes, including nodes only the instances keep alive.

|     % |     Size | Instances | Constructor                  |
| ----: | -------: | --------: | ---------------------------- |
| 89.1% |  1.3 MiB |         1 | `GlobalObject`               |
| 41.5% |  620 KiB |     1,373 | `Object`                     |
| 31.8% |  476 KiB |       931 | `FunctionExecutable`         |
| 29.8% |  446 KiB |     1,077 | `Array`                      |
| 18.9% |  283 KiB |     1,732 | `Function`                   |
| 17.9% |  267 KiB |       122 | `FunctionCodeBlock`          |
| 15.9% |  237 KiB |     1,875 | `Structure`                  |
|  6.1% | 90.9 KiB |       121 | `UnlinkedFunctionCodeBlock`  |
|  5.8% | 86.7 KiB |       925 | `UnlinkedFunctionExecutable` |
|  3.4% | 50.9 KiB |       653 | `NativeExecutable`           |
|  3.3% | 49.5 KiB |         1 | `InternalModuleRegistry`     |
|  1.8% | 26.6 KiB |       170 | `JSLexicalEnvironment`       |
|  1.5% | 22.4 KiB |         1 | `ModuleLoader`               |
|  1.4% | 20.4 KiB |       103 | `StructureRareData`          |
|  1.3% | 18.9 KiB |         1 | `Process`                    |
|  1.2% | 18.2 KiB |       391 | `PropertyTable`              |
|  1.2% | 17.5 KiB |       210 | `FunctionRareData`           |
|  1.1% | 16.8 KiB |        10 | `Map`                        |
|  1.1% | 16.5 KiB |        10 | `Cell Butterfly`             |
|  1.1% | 15.8 KiB |       147 | `GetterSetter`               |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Code

|     % |     Size | Instances | Constructor                      |
| ----: | -------: | --------: | -------------------------------- |
| 31.8% |  476 KiB |       931 | `FunctionExecutable`             |
| 17.9% |  267 KiB |       122 | `FunctionCodeBlock`              |
|  6.1% | 90.9 KiB |       121 | `UnlinkedFunctionCodeBlock`      |
|  5.8% | 86.7 KiB |       925 | `UnlinkedFunctionExecutable`     |
|  3.4% | 50.9 KiB |       653 | `NativeExecutable`               |
|  0.2% | 2.53 KiB |         2 | `UnlinkedModuleProgramCodeBlock` |
|  0.0% |      0 B |         4 | `JSSourceCode`                   |
|  0.0% |      0 B |         2 | `ModuleProgramExecutable`        |
|  0.0% |      0 B |         4 | `ModuleRecord`                   |
|  0.0% |      0 B |         1 | `ModuleProgramCodeBlock`         |

##### Object shape

|     % |    Size | Instances | Constructor |
| ----: | ------: | --------: | ----------- |
| 15.9% | 237 KiB |     1,875 | `Structure` |

##### Object

|     % |     Size | Instances | Constructor                        |
| ----: | -------: | --------: | ---------------------------------- |
| 89.1% |  1.3 MiB |         1 | `GlobalObject`                     |
| 41.5% |  620 KiB |     1,373 | `Object`                           |
|  3.3% | 49.5 KiB |         1 | `InternalModuleRegistry`           |
|  1.3% | 18.9 KiB |         1 | `Process`                          |
|  1.1% | 16.8 KiB |        10 | `Map`                              |
|  1.0% | 15.1 KiB |         1 | `ReadStream`                       |
|  0.6% | 9.16 KiB |         2 | `WriteStream`                      |
|  0.3% | 4.89 KiB |         1 | `console`                          |
|  0.3% | 4.88 KiB |         1 | `Prototype`                        |
|  0.3% | 4.86 KiB |         1 | `Math`                             |
|  0.3% | 4.83 KiB |         3 | `ReadableStream`                   |
|  0.3% | 4.45 KiB |         1 | `String`                           |
|  0.2% | 2.98 KiB |         2 | `Iterator`                         |
|  0.2% | 2.95 KiB |         2 | `NodeJSFS`                         |
|  0.2% | 2.41 KiB |         4 | `FileSink`                         |
|  0.2% | 2.38 KiB |         2 | `Blob`                             |
|  0.2% | 2.35 KiB |         2 | `ArrayBuffer`                      |
|  0.1% | 2.17 KiB |         1 | `EventEmitter`                     |
|  0.1% | 1.89 KiB |         2 | `FileInternalReadableStreamSource` |
|  0.1% | 1.46 KiB |         2 | `Stats`                            |

##### Internal

|     % |     Size | Instances | Constructor                  |
| ----: | -------: | --------: | ---------------------------- |
|  1.8% | 26.6 KiB |       170 | `JSLexicalEnvironment`       |
|  1.4% | 20.4 KiB |       103 | `StructureRareData`          |
|  1.2% | 18.2 KiB |       391 | `PropertyTable`              |
|  1.2% | 17.5 KiB |       210 | `FunctionRareData`           |
|  1.1% | 16.5 KiB |        10 | `Cell Butterfly`             |
|  1.1% | 15.8 KiB |       147 | `GetterSetter`               |
|  0.8% | 11.3 KiB |       185 | `SymbolTable`                |
|  0.1% | 1.44 KiB |        46 | `CustomGetterSetter`         |
|  0.1% |    768 B |        16 | `DOMAttributeGetterSetter`   |
| <0.1% |    240 B |         1 | `JSGlobalLexicalEnvironment` |
| <0.1% |    212 B |         3 | `JSPropertyNameEnumerator`   |
| <0.1% |    208 B |        13 | `StructureChain`             |
|  0.0% |      0 B |         1 | `PromiseReaction`            |
|  0.0% |      0 B |         4 | `JSModuleEnvironment`        |

##### Function

|     % |     Size | Instances | Constructor              |
| ----: | -------: | --------: | ------------------------ |
| 18.9% |  283 KiB |     1,732 | `Function`               |
|  0.5% | 7.67 KiB |        70 | `AsyncFunction`          |
| <0.1% |    488 B |         3 | `GeneratorFunction`      |
| <0.1% |    466 B |         2 | `AsyncGeneratorFunction` |
| <0.1% |     96 B |         4 | `Callee`                 |

##### Array

|     % |     Size | Instances | Constructor           |
| ----: | -------: | --------: | --------------------- |
| 29.8% |  446 KiB |     1,077 | `Array`               |
|  0.1% | 1.03 KiB |        34 | `SparseArrayValueMap` |
| <0.1% |    464 B |         1 | `Array Iterator`      |

#### Retainer paths

Retainer paths with the largest contribution to each constructor's retained size.

##### `GlobalObject`

|      % |    Size | Instances | Path                    |
| -----: | ------: | --------: | ----------------------- |
| 100.0% | 1.3 MiB |         1 | `GlobalObject ← <root>` |

##### `Object`

|     % |     Size | Instances | Path                                                        |
| ----: | -------: | --------: | ----------------------------------------------------------- |
| 73.9% |  458 KiB |         1 | `Object ←.__retained– GlobalObject ← <root>`                |
| 71.2% |  442 KiB |         1 | `Object ←.data– Object ←.__retained– GlobalObject ← <root>` |
| 12.0% | 74.3 KiB |        26 | `Object ←(several paths)– GlobalObject ← <root>`            |
|  7.8% | 48.2 KiB |        17 | `Object ← InternalModuleRegistry ← GlobalObject ← <root>`   |
|  2.2% | 13.8 KiB |         1 | `Object ← GlobalObject ← <root>`                            |

##### `FunctionExecutable`

|     % |     Size | Instances | Path                                                                                                      |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------- |
| 61.4% |  293 KiB |       456 | `FunctionExecutable ←(several paths)– GlobalObject ← <root>`                                              |
| 12.4% | 58.9 KiB |        89 | `FunctionExecutable ←(several paths)– <root>`                                                             |
|  8.6% | 41.1 KiB |       175 | `FunctionExecutable ← Function ← GlobalObject ← <root>`                                                   |
|  3.1% | 14.9 KiB |         9 | `FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ←(several paths)– GlobalObject ← <root>`     |
|  1.7% | 8.18 KiB |         1 | `FunctionExecutable ← Function ←(several paths)– Object ← InternalModuleRegistry ← GlobalObject ← <root>` |

##### `Array`

|     % |     Size | Instances | Path                                                                                                                          |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------- |
| 98.6% |  440 KiB |         1 | `Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>`                                                 |
|  1.1% | 4.69 KiB |         1 | `Array ← GlobalObject ← <root>`                                                                                               |
|  0.3% | 1.51 KiB |         1 | `Array ←.media– Object ←.entities– Object ←[64]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>` |
|  0.2% | 1.08 KiB |         1 | `Array ←.media– Object ←.entities– Object ←[98]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>` |
|  0.2% | 1.08 KiB |         1 | `Array ←.media– Object ←.entities– Object ←[4]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>`  |

##### `Function`

|     % |     Size | Instances | Path                                                                                 |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------ |
| 22.6% |   64 KiB |       233 | `Function ← GlobalObject ← <root>`                                                   |
| 19.7% | 55.8 KiB |       261 | `Function ←(several paths)– GlobalObject ← <root>`                                   |
|  3.4% | 9.63 KiB |        12 | `Function ←(several paths)– Object ← InternalModuleRegistry ← GlobalObject ← <root>` |
|  2.6% | 7.42 KiB |        19 | `Function ←(several paths)– <root>`                                                  |
|  1.8% | 5.12 KiB |         1 | `Function ←.SafeMap– Object ← InternalModuleRegistry ← GlobalObject ← <root>`        |

##### `FunctionCodeBlock`

|     % |     Size | Instances | Path                                                                                                                                                               |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 67.6% |  181 KiB |        61 | `FunctionCodeBlock ← FunctionExecutable ←(several paths)– GlobalObject ← <root>`                                                                                   |
| 13.4% | 35.7 KiB |         2 | `FunctionCodeBlock ← FunctionExecutable ←(several paths)– <root>`                                                                                                  |
|  5.2% | 13.8 KiB |         7 | `FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ←(several paths)– GlobalObject ← <root>`                                          |
|  2.8% |  7.4 KiB |         1 | `FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ←(several paths)– GlobalObject ← <root>` |
|  2.4% | 6.35 KiB |         1 | `FunctionCodeBlock ← FunctionExecutable ← FunctionExecutable ← Function ←(several paths)– Object ← InternalModuleRegistry ← GlobalObject ← <root>`                 |

##### `Structure`

|     % |     Size | Instances | Path                                                                                             |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------ |
| 25.0% | 59.2 KiB |       236 | `Structure ←(several paths)– GlobalObject ← <root>`                                              |
| 13.1% |   31 KiB |        14 | `Structure ← Object ←(several paths)– GlobalObject ← <root>`                                     |
| 12.1% | 28.8 KiB |         8 | `Structure ← Structure ← Object ←(several paths)– GlobalObject ← <root>`                         |
| 11.8% | 27.9 KiB |         8 | `Structure ← Structure ← Structure ← Object ←(several paths)– GlobalObject ← <root>`             |
| 11.4% |   27 KiB |         7 | `Structure ← Structure ← Structure ← Structure ← Object ←(several paths)– GlobalObject ← <root>` |

##### `UnlinkedFunctionCodeBlock`

|     % |     Size | Instances | Path                                                                                                                                     |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 41.4% | 37.6 KiB |        30 | `UnlinkedFunctionCodeBlock ←(several paths)– FunctionExecutable ←(several paths)– GlobalObject ← <root>`                                 |
| 25.5% | 23.2 KiB |        40 | `UnlinkedFunctionCodeBlock ←(several paths)– GlobalObject ← <root>`                                                                      |
| 13.8% | 12.6 KiB |        28 | `UnlinkedFunctionCodeBlock ←(several paths)– <root>`                                                                                     |
| 10.6% | 9.64 KiB |        10 | `UnlinkedFunctionCodeBlock ←(several paths)– FunctionExecutable ←(several paths)– <root>`                                                |
|  1.8% | 1.62 KiB |         3 | `UnlinkedFunctionCodeBlock ←(several paths)– FunctionExecutable ← FunctionExecutable ← Function ←(several paths)– GlobalObject ← <root>` |

##### `UnlinkedFunctionExecutable`

|     % |     Size | Instances | Path                                                                                      |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------- |
| 47.6% | 41.3 KiB |       440 | `UnlinkedFunctionExecutable ←(several paths)– GlobalObject ← <root>`                      |
| 17.2% | 14.9 KiB |       159 | `UnlinkedFunctionExecutable ← FunctionExecutable ← Function ← GlobalObject ← <root>`      |
| 10.7% | 9.28 KiB |        99 | `UnlinkedFunctionExecutable ←(several paths)– <root>`                                     |
|  9.6% | 8.34 KiB |        89 | `UnlinkedFunctionExecutable ← <root>`                                                     |
|  2.5% | 2.16 KiB |        23 | `UnlinkedFunctionExecutable ← FunctionExecutable ←(several paths)– GlobalObject ← <root>` |

##### `NativeExecutable`

|     % |     Size | Instances | Path                                                                                                                    |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------- |
| 21.0% | 10.7 KiB |       137 | `NativeExecutable ← Function ←(several paths)– GlobalObject ← <root>`                                                   |
|  3.7% | 1.88 KiB |        24 | `NativeExecutable ← Function ← GlobalObject ← <root>`                                                                   |
|  1.8% |    960 B |        12 | `NativeExecutable ← Function ←(several paths)– <root>`                                                                  |
|  1.7% |    880 B |        11 | `NativeExecutable ← Function ←(several paths)– Object ← InternalModuleRegistry ← GlobalObject ← <root>`                 |
|  1.7% |    880 B |        11 | `NativeExecutable ← Function ←(several paths)– Object ←.win32– Object ← InternalModuleRegistry ← GlobalObject ← <root>` |

##### `InternalModuleRegistry`

|      % |     Size | Instances | Path                                             |
| -----: | -------: | --------: | ------------------------------------------------ |
| 100.0% | 49.5 KiB |         1 | `InternalModuleRegistry ← GlobalObject ← <root>` |

##### `JSLexicalEnvironment`

|     % |     Size | Instances | Path                                                                                                                                         |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 51.5% | 13.7 KiB |        25 | `JSLexicalEnvironment ←(several paths)– GlobalObject ← <root>`                                                                               |
|  9.2% | 2.44 KiB |         8 | `JSLexicalEnvironment ← Function ←(several paths)– GlobalObject ← <root>`                                                                    |
|  5.8% | 1.53 KiB |         5 | `JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– GlobalObject ← <root>`                                                        |
|  2.3% |    630 B |         1 | `JSLexicalEnvironment ← Function ←.entries– Object ←.prototype– Function ←.SafeMap– Object ← InternalModuleRegistry ← GlobalObject ← <root>` |
|  2.3% |    630 B |         1 | `JSLexicalEnvironment ← Function ←.keys– Object ←.prototype– Function ←.SafeMap– Object ← InternalModuleRegistry ← GlobalObject ← <root>`    |

##### `ModuleLoader`

|      % |     Size | Instances | Path                                   |
| -----: | -------: | --------: | -------------------------------------- |
| 100.0% | 22.4 KiB |         1 | `ModuleLoader ← GlobalObject ← <root>` |

##### `StructureRareData`

|     % |     Size | Instances | Path                                                                                                                                                 |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 46.5% | 9.47 KiB |        28 | `StructureRareData ← Structure ←(several paths)– GlobalObject ← <root>`                                                                              |
| 16.9% | 3.45 KiB |         4 | `StructureRareData ← Structure ← StructureRareData ← Structure ←(several paths)– GlobalObject ← <root>`                                              |
| 16.4% | 3.34 KiB |         1 | `StructureRareData ← Structure ← ReadStream ←(several paths)– GlobalObject ← <root>`                                                                 |
| 15.4% | 3.14 KiB |         1 | `StructureRareData ← Structure ← StructureRareData ← Structure ← ReadStream ←(several paths)– GlobalObject ← <root>`                                 |
| 14.4% | 2.94 KiB |         1 | `StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← ReadStream ←(several paths)– GlobalObject ← <root>` |

##### `Process`

|      % |     Size | Instances | Path                                       |
| -----: | -------: | --------: | ------------------------------------------ |
| 100.0% | 18.9 KiB |         1 | `Process ←.process– GlobalObject ← <root>` |

##### `PropertyTable`

|     % |     Size | Instances | Path                                                                                                                      |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------- |
| 17.0% | 3.09 KiB |        66 | `PropertyTable ← Structure ←(several paths)– GlobalObject ← <root>`                                                       |
|  9.8% | 1.78 KiB |        38 | `PropertyTable ← Structure ← Function ← GlobalObject ← <root>`                                                            |
|  4.6% |    864 B |        18 | `PropertyTable ← Structure ←(several paths)– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>` |
|  3.6% |    672 B |        14 | `PropertyTable ← Structure ← Object ←(several paths)– GlobalObject ← <root>`                                              |
|  3.4% |    624 B |        13 | `PropertyTable ← Structure ←(several paths)– Object ← InternalModuleRegistry ← GlobalObject ← <root>`                     |

##### `FunctionRareData`

|     % |     Size | Instances | Path                                                                                                                                                        |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17.7% | 3.09 KiB |        26 | `FunctionRareData ← Function ←(several paths)– GlobalObject ← <root>`                                                                                       |
|  7.2% | 1.25 KiB |        16 | `FunctionRareData ← AsyncFunction ←(several paths)– GlobalObject ← <root>`                                                                                  |
|  0.4% |     80 B |         1 | `FunctionRareData ← Function ←.Symbol.iterator– Object ←.prototype– Function ←(several paths)– GlobalObject ← <root>`                                       |
|  0.4% |     80 B |         1 | `FunctionRareData ← Function ←.Symbol.iterator– Object ←.prototype– Function ←.SafeStringIterator– Object ← InternalModuleRegistry ← GlobalObject ← <root>` |
|  0.4% |     80 B |         1 | `FunctionRareData ← Function ←.SafeStringIterator– Object ← InternalModuleRegistry ← GlobalObject ← <root>`                                                 |

##### `Map`

|     % |     Size | Instances | Path                                                     |
| ----: | -------: | --------: | -------------------------------------------------------- |
| 95.5% | 16.1 KiB |         1 | `Map ←.byId– Object ←.__retained– GlobalObject ← <root>` |
|  2.0% |    352 B |         1 | `Map ←.registry– ModuleLoader ← GlobalObject ← <root>`   |
|  1.9% |    329 B |         1 | `Map ←(several paths)– GlobalObject ← <root>`            |
|  0.7% |    128 B |         4 | `Map ← (GC root)`                                        |
|  0.2% |     32 B |         1 | `Map ← GlobalObject ← <root>`                            |

##### `Cell Butterfly`

|     % |   Size | Instances | Path                                                                      |
| ----: | -----: | --------: | ------------------------------------------------------------------------- |
| 97.1% | 16 KiB |         1 | `Cell Butterfly ← Map ←.byId– Object ←.__retained– GlobalObject ← <root>` |
|  3.8% |  640 B |         2 | `Cell Butterfly ← (GC root)`                                              |
|  1.9% |  320 B |         1 | `Cell Butterfly ← Map ←.registry– ModuleLoader ← GlobalObject ← <root>`   |
|  0.8% |  128 B |         4 | `Cell Butterfly ←(several paths)– <root>`                                 |
|  0.2% |   32 B |         1 | `Cell Butterfly ←(several paths)– GlobalObject ← <root>`                  |

##### `GetterSetter`

|     % |     Size | Instances | Path                                                                                |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------- |
| 13.5% | 2.13 KiB |        15 | `GetterSetter ← GlobalObject ← <root>`                                              |
|  3.6% |    576 B |         5 | `GetterSetter ←.destroyed– Object ←(several paths)– GlobalObject ← <root>`          |
|  2.6% |    416 B |         4 | `GetterSetter ←.closed– Object ←(several paths)– GlobalObject ← <root>`             |
|  2.1% |    342 B |         2 | `GetterSetter ←.maxByteLength– ArrayBuffer ←(several paths)– GlobalObject ← <root>` |
|  2.1% |    338 B |         2 | `GetterSetter ←.byteLength– ArrayBuffer ←(several paths)– GlobalObject ← <root>`    |

##### `ReadStream`

|      % |     Size | Instances | Path                                                 |
| -----: | -------: | --------: | ---------------------------------------------------- |
| 100.0% | 15.1 KiB |         1 | `ReadStream ←(several paths)– GlobalObject ← <root>` |

##### `SymbolTable`

|     % |     Size | Instances | Path                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------- |
| 55.2% | 6.25 KiB |        87 | `SymbolTable ←(several paths)– GlobalObject ← <root>`                            |
| 18.8% | 2.13 KiB |        27 | `SymbolTable ←(several paths)– <root>`                                           |
|  8.8% |    1 KiB |        14 | `SymbolTable ←(several paths)– Function ←(several paths)– GlobalObject ← <root>` |
|  7.2% |    832 B |        13 | `SymbolTable ← SymbolTable ←(several paths)– GlobalObject ← <root>`              |
|  3.9% |    448 B |         7 | `SymbolTable ← SymbolTable ←(several paths)– <root>`                             |

##### `WriteStream`

|      % |     Size | Instances | Path                                                  |
| -----: | -------: | --------: | ----------------------------------------------------- |
| 100.0% | 9.16 KiB |         2 | `WriteStream ←(several paths)– GlobalObject ← <root>` |

##### `AsyncFunction`

|     % |     Size | Instances | Path                                                                                  |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------- |
| 32.2% | 2.47 KiB |        23 | `AsyncFunction ←(several paths)– GlobalObject ← <root>`                               |
|  7.7% |    607 B |         1 | `AsyncFunction ← GlobalObject ← <root>`                                               |
|  4.0% |    311 B |         1 | `AsyncFunction ←.Symbol.asyncDispose– Object ←(several paths)– GlobalObject ← <root>` |
|  3.1% |    240 B |         1 | `AsyncFunction ←.constructor– AsyncFunction ← GlobalObject ← <root>`                  |
|  2.5% |    195 B |         2 | `AsyncFunction ←.chown– Object ←(several paths)– GlobalObject ← <root>`               |

##### `console`

|      % |     Size | Instances | Path                                       |
| -----: | -------: | --------: | ------------------------------------------ |
| 100.0% | 4.89 KiB |         1 | `console ←.console– GlobalObject ← <root>` |

##### `Prototype`

|      % |     Size | Instances | Path                                |
| -----: | -------: | --------: | ----------------------------------- |
| 100.0% | 4.88 KiB |         1 | `Prototype ← GlobalObject ← <root>` |

##### `Math`

|      % |     Size | Instances | Path                                 |
| -----: | -------: | --------: | ------------------------------------ |
| 100.0% | 4.86 KiB |         1 | `Math ←.Math– GlobalObject ← <root>` |

##### `ReadableStream`

|     % |     Size | Instances | Path                                      |
| ----: | -------: | --------: | ----------------------------------------- |
| 60.7% | 2.93 KiB |         1 | `ReadableStream ←(several paths)– <root>` |
| 26.7% | 1.29 KiB |         1 | `ReadableStream ← <root>`                 |
| 12.6% |    625 B |         1 | `ReadableStream ← GlobalObject ← <root>`  |

##### `String`

|      % |     Size | Instances | Path                             |
| -----: | -------: | --------: | -------------------------------- |
| 100.0% | 4.45 KiB |         1 | `String ← GlobalObject ← <root>` |

##### `Iterator`

|     % |     Size | Instances | Path                                           |
| ----: | -------: | --------: | ---------------------------------------------- |
| 79.2% | 2.36 KiB |         1 | `Iterator ← GlobalObject ← <root>`             |
| 20.8% |    635 B |         1 | `Iterator ← Structure ← GlobalObject ← <root>` |

##### `NodeJSFS`

|     % |     Size | Instances | Path                                               |
| ----: | -------: | --------: | -------------------------------------------------- |
| 64.8% | 1.92 KiB |         1 | `NodeJSFS ← Structure ← GlobalObject ← <root>`     |
| 35.2% | 1.04 KiB |         1 | `NodeJSFS ←(several paths)– GlobalObject ← <root>` |

##### `UnlinkedModuleProgramCodeBlock`

|      % |     Size | Instances | Path                                      |
| -----: | -------: | --------: | ----------------------------------------- |
| 100.0% | 2.53 KiB |         2 | `UnlinkedModuleProgramCodeBlock ← <root>` |

##### `FileSink`

|     % |     Size | Instances | Path                                                                                   |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------- |
| 51.0% | 1.23 KiB |         1 | `FileSink ← Structure ← GlobalObject ← <root>`                                         |
| 30.4% |    752 B |         2 | `FileSink ←.kWriteStreamFastPath– WriteStream ←(several paths)– GlobalObject ← <root>` |
| 18.5% |    458 B |         1 | `FileSink ← GlobalObject ← <root>`                                                     |

##### `Blob`

|     % |     Size | Instances | Path                                           |
| ----: | -------: | --------: | ---------------------------------------------- |
| 86.6% | 2.06 KiB |         1 | `Blob ←(several paths)– GlobalObject ← <root>` |
| 13.4% |    328 B |         1 | `Blob ← GlobalObject ← <root>`                 |

##### `ArrayBuffer`

|      % |     Size | Instances | Path                                                  |
| -----: | -------: | --------: | ----------------------------------------------------- |
| 100.0% | 2.35 KiB |         2 | `ArrayBuffer ←(several paths)– GlobalObject ← <root>` |

##### `EventEmitter`

|      % |     Size | Instances | Path                                                   |
| -----: | -------: | --------: | ------------------------------------------------------ |
| 100.0% | 2.17 KiB |         1 | `EventEmitter ←(several paths)– GlobalObject ← <root>` |

##### `FileInternalReadableStreamSource`

|     % |     Size | Instances | Path                                                                    |
| ----: | -------: | --------: | ----------------------------------------------------------------------- |
| 67.3% | 1.27 KiB |         1 | `FileInternalReadableStreamSource ← Structure ←(several paths)– <root>` |
| 32.7% |    632 B |         1 | `FileInternalReadableStreamSource ←(several paths)– <root>`             |

##### `Stats`

|     % |     Size | Instances | Path                                            |
| ----: | -------: | --------: | ----------------------------------------------- |
| 84.5% | 1.23 KiB |         1 | `Stats ←(several paths)– GlobalObject ← <root>` |
| 15.5% |    232 B |         1 | `Stats ← GlobalObject ← <root>`                 |

##### `CustomGetterSetter`

|    % | Size | Instances | Path                                                                        |
| ---: | ---: | --------: | --------------------------------------------------------------------------- |
| 2.2% | 32 B |         1 | `CustomGetterSetter ←.arguments– Function ←(several paths)– <root>`         |
| 2.2% | 32 B |         1 | `CustomGetterSetter ←.caller– Function ←(several paths)– <root>`            |
| 2.2% | 32 B |         1 | `CustomGetterSetter ←.constructor– Iterator ← GlobalObject ← <root>`        |
| 2.2% | 32 B |         1 | `CustomGetterSetter ←.Symbol.toStringTag– Iterator ← GlobalObject ← <root>` |
| 2.2% | 32 B |         1 | `CustomGetterSetter ←.Buffer– GlobalObject ← <root>`                        |

##### `SparseArrayValueMap`

|    % | Size | Instances | Path                                                                                                                               |
| ---: | ---: | --------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| 6.1% | 64 B |         2 | `SparseArrayValueMap ← Object ←.prototype– Function ←(several paths)– GlobalObject ← <root>`                                       |
| 6.1% | 64 B |         2 | `SparseArrayValueMap ← Function ←(several paths)– GlobalObject ← <root>`                                                           |
| 6.1% | 64 B |         2 | `SparseArrayValueMap ← Object ←.kEmptyObject– JSLexicalEnvironment ←(several paths)– GlobalObject ← <root>`                        |
| 3.0% | 32 B |         1 | `SparseArrayValueMap ← Object ←.prototype– Function ←.SafeStringIterator– Object ← InternalModuleRegistry ← GlobalObject ← <root>` |
| 3.0% | 32 B |         1 | `SparseArrayValueMap ← Function ←.SafeStringIterator– Object ← InternalModuleRegistry ← GlobalObject ← <root>`                     |

##### `DOMAttributeGetterSetter`

|    % | Size | Instances | Path                                                                                          |
| ---: | ---: | --------: | --------------------------------------------------------------------------------------------- |
| 6.3% | 48 B |         1 | `DOMAttributeGetterSetter ←.Dirent– NodeJSFS ← Structure ← GlobalObject ← <root>`             |
| 6.3% | 48 B |         1 | `DOMAttributeGetterSetter ←.Stats– NodeJSFS ← Structure ← GlobalObject ← <root>`              |
| 6.3% | 48 B |         1 | `DOMAttributeGetterSetter ←.lastChar– StringDecoder ←(several paths)– GlobalObject ← <root>`  |
| 6.3% | 48 B |         1 | `DOMAttributeGetterSetter ←.lastNeed– StringDecoder ←(several paths)– GlobalObject ← <root>`  |
| 6.3% | 48 B |         1 | `DOMAttributeGetterSetter ←.lastTotal– StringDecoder ←(several paths)– GlobalObject ← <root>` |

##### `GeneratorFunction`

|     % |  Size | Instances | Path                                                                                    |
| ----: | ----: | --------: | --------------------------------------------------------------------------------------- |
| 93.4% | 456 B |         1 | `GeneratorFunction ← GlobalObject ← <root>`                                             |
| 50.0% | 244 B |         1 | `GeneratorFunction ←.constructor– GeneratorFunction ← GlobalObject ← <root>`            |
|  6.6% |  32 B |         1 | `GeneratorFunction ←.globSync– Object ← InternalModuleRegistry ← GlobalObject ← <root>` |

##### `AsyncGeneratorFunction`

|      % |  Size | Instances | Path                                                                                   |
| -----: | ----: | --------: | -------------------------------------------------------------------------------------- |
| 100.0% | 466 B |         1 | `AsyncGeneratorFunction ← GlobalObject ← <root>`                                       |
|  53.4% | 249 B |         1 | `AsyncGeneratorFunction ←.constructor– AsyncGeneratorFunction ← GlobalObject ← <root>` |

##### `Array Iterator`

|      % |  Size | Instances | Path                                     |
| -----: | ----: | --------: | ---------------------------------------- |
| 100.0% | 464 B |         1 | `Array Iterator ← GlobalObject ← <root>` |

##### `JSGlobalLexicalEnvironment`

|      % |  Size | Instances | Path                                                 |
| -----: | ----: | --------: | ---------------------------------------------------- |
| 100.0% | 240 B |         1 | `JSGlobalLexicalEnvironment ← GlobalObject ← <root>` |

##### `JSPropertyNameEnumerator`

|     % | Size | Instances | Path                                                                                                                                                 |
| ----: | ---: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 38.7% | 82 B |         1 | `JSPropertyNameEnumerator ← StructureRareData ← Structure ←(several paths)– GlobalObject ← <root>`                                                   |
| 38.7% | 82 B |         1 | `JSPropertyNameEnumerator ← StructureRareData ← Structure ← FunctionExecutable ←(several paths)– ReadStream ←(several paths)– GlobalObject ← <root>` |
| 22.6% | 48 B |         1 | `JSPropertyNameEnumerator ← <root>`                                                                                                                  |

##### `StructureChain`

|     % | Size | Instances | Path                                                                                        |
| ----: | ---: | --------: | ------------------------------------------------------------------------------------------- |
| 38.5% | 80 B |         5 | `StructureChain ←(several paths)– GlobalObject ← <root>`                                    |
| 15.4% | 32 B |         2 | `StructureChain ← Structure ← Structure ←(several paths)– GlobalObject ← <root>`            |
|  7.7% | 16 B |         1 | `StructureChain ← Structure ← Object ← InternalModuleRegistry ← GlobalObject ← <root>`      |
|  7.7% | 16 B |         1 | `StructureChain ← Structure ← Structure ← Function ←(several paths)– GlobalObject ← <root>` |
|  7.7% | 16 B |         1 | `StructureChain ← Structure ←(several paths)– GlobalObject ← <root>`                        |

##### `Callee`

|      % | Size | Instances | Path                             |
| -----: | ---: | --------: | -------------------------------- |
| 100.0% | 96 B |         3 | `Callee ← GlobalObject ← <root>` |
|  33.3% | 32 B |         1 | `Callee ← (GC root)`             |

##### `JSSourceCode`

|    % |  Size | Instances | Path                       |
| ---: | ----: | --------: | -------------------------- |
| 0.0% | 128 B |         4 | `JSSourceCode ← (GC root)` |

##### `ModuleProgramExecutable`

|    % |  Size | Instances | Path                                  |
| ---: | ----: | --------: | ------------------------------------- |
| 0.0% | 224 B |         2 | `ModuleProgramExecutable ← (GC root)` |

##### `ModuleRecord`

|    % |     Size | Instances | Path                       |
| ---: | -------: | --------: | -------------------------- |
| 0.0% | 27.7 KiB |         4 | `ModuleRecord ← (GC root)` |

##### `ModuleProgramCodeBlock`

|    % |     Size | Instances | Path                                 |
| ---: | -------: | --------: | ------------------------------------ |
| 0.0% | 4.45 KiB |         1 | `ModuleProgramCodeBlock ← (GC root)` |

##### `PromiseReaction`

|    % | Size | Instances | Path                          |
| ---: | ---: | --------: | ----------------------------- |
| 0.0% | 48 B |         1 | `PromiseReaction ← (GC root)` |

##### `JSModuleEnvironment`

|    % |     Size | Instances | Path                              |
| ---: | -------: | --------: | --------------------------------- |
| 0.0% | 2.17 KiB |         4 | `JSModuleEnvironment ← (GC root)` |

## Largest strings

Strings with the most bytes.

### Categories

Categories accounting for at least 1.0% of self size.

#### String

|     % |  Size | Path                                                                                                                                                             |
| ----: | ----: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <0.1% | 374 B | `string ←.expanded_url– Object ←[0]– Array ←.urls– Object ←.entities– Object ←[42]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>` |
| <0.1% | 336 B | `string ←.description– Object ←.user– Object ←[25]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>`                                 |
| <0.1% | 334 B | `string ←.description– Object ←.user– Object ←.retweeted_status– Object ←[12]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>`      |
| <0.1% | 334 B | `string ←.description– Object ←.user– Object ←.retweeted_status– Object ←[17]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>`      |
| <0.1% | 332 B | `string ←.description– Object ←.user– Object ←[41]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>`                                 |
| <0.1% | 326 B | `string ←.description– Object ←.user– Object ←[8]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>`                                  |
| <0.1% | 314 B | `string ←.description– Object ←.user– Object ←[99]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>`                                 |
| <0.1% | 306 B | `string ←.description– Object ←.user– Object ←[57]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>`                                 |
| <0.1% | 304 B | `string ←.text– Object ←[0]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>`                                                        |
| <0.1% | 304 B | `string ←.description– Object ←.user– Object ←[6]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>`                                  |
| <0.1% | 298 B | `string ←.text– Object ←[8]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>`                                                        |
| <0.1% | 298 B | `string ←.description– Object ←.user– Object ←[45]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>`                                 |
| <0.1% | 296 B | `string ←.description– Object ←.user– Object ←.retweeted_status– Object ←[4]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>`       |
| <0.1% | 296 B | `string ←.text– Object ←.retweeted_status– Object ←[8]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>`                             |
| <0.1% | 296 B | `string ←.text– Object ←[10]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>`                                                       |
| <0.1% | 296 B | `string ←.text– Object ←.retweeted_status– Object ←[10]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>`                            |
| <0.1% | 296 B | `string ←.text– Object ←[11]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>`                                                       |
| <0.1% | 296 B | `string ←.text– Object ←.retweeted_status– Object ←[11]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>`                            |
| <0.1% | 296 B | `string ←.text– Object ←[13]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>`                                                       |
| <0.1% | 296 B | `string ←.text– Object ←.retweeted_status– Object ←[13]– Array ←.statuses– Object ←.data– Object ←.__retained– GlobalObject ← <root>`                            |

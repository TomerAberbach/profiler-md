# Heap snapshot

Allocated 1.45 MiB across 16,635 nodes and 45,015 edges.

| Category           |     % |     Size | Nodes |
| ------------------ | ----: | -------: | ----: |
| Code               | 43.0% |  640 KiB | 2,765 |
| String             | 23.9% |  356 KiB | 6,250 |
| Object shape       | 13.3% |  199 KiB | 1,816 |
| Object             |  7.7% |  115 KiB | 1,494 |
| Internal           |  6.4% | 95.3 KiB | 1,302 |
| Function           |  4.4% | 65.1 KiB | 1,813 |
| Array              |  1.2% |   18 KiB | 1,112 |
| Symbol             |  0.1% |  1.2 KiB |    77 |
| Regular expression | <0.1% |    352 B |     4 |
| Native             | <0.1% |     59 B |     2 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

|     % |     Size | Instances | Constructor                  |
| ----: | -------: | --------: | ---------------------------- |
| 17.5% |  261 KiB |       122 | `FunctionCodeBlock`          |
| 13.3% |  199 KiB |     1,816 | `Structure`                  |
|  7.8% |  116 KiB |       931 | `FunctionExecutable`         |
|  6.5% | 96.9 KiB |     1,373 | `Object`                     |
|  6.1% | 90.9 KiB |       121 | `UnlinkedFunctionCodeBlock`  |
|  5.8% | 86.7 KiB |       925 | `UnlinkedFunctionExecutable` |
|  4.2% | 62.5 KiB |     1,734 | `Function`                   |
|  3.4% |   51 KiB |       653 | `NativeExecutable`           |
|  1.9% | 27.7 KiB |         4 | `ModuleRecord`               |
|  1.2% | 18.3 KiB |       390 | `PropertyTable`              |
|  1.2% | 17.2 KiB |        10 | `Cell Butterfly`             |
|  1.1% | 16.9 KiB |     1,077 | `Array`                      |
|  1.1% | 16.4 KiB |       210 | `FunctionRareData`           |
|  0.8% | 12.7 KiB |       170 | `JSLexicalEnvironment`       |
|  0.8% | 11.6 KiB |       185 | `SymbolTable`                |
|  0.7% | 10.3 KiB |         1 | `GlobalObject`               |
|  0.7% | 9.84 KiB |       105 | `StructureRareData`          |
|  0.3% | 4.59 KiB |       147 | `GetterSetter`               |
|  0.3% | 4.45 KiB |         1 | `ModuleProgramCodeBlock`     |
|  0.2% | 2.29 KiB |        70 | `AsyncFunction`              |

#### Categories

##### Code

|     % |     Size | Instances | Constructor                      |
| ----: | -------: | --------: | -------------------------------- |
| 17.5% |  261 KiB |       122 | `FunctionCodeBlock`              |
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
| 13.3% | 199 KiB |     1,816 | `Structure` |

##### Object

|     % |     Size | Instances | Constructor                        |
| ----: | -------: | --------: | ---------------------------------- |
|  6.5% | 96.9 KiB |     1,373 | `Object`                           |
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
| <0.1% |     91 B |         1 | `ReadStream`                       |
| <0.1% |     80 B |         2 | `Stats`                            |
| <0.1% |     76 B |         2 | `Dirent`                           |
| <0.1% |     76 B |         2 | `StringDecoder`                    |
| <0.1% |     70 B |         1 | `String`                           |

##### Internal

|     % |     Size | Instances | Constructor                  |
| ----: | -------: | --------: | ---------------------------- |
|  1.2% | 18.3 KiB |       390 | `PropertyTable`              |
|  1.2% | 17.2 KiB |        10 | `Cell Butterfly`             |
|  1.1% | 16.4 KiB |       210 | `FunctionRareData`           |
|  0.8% | 12.7 KiB |       170 | `JSLexicalEnvironment`       |
|  0.8% | 11.6 KiB |       185 | `SymbolTable`                |
|  0.7% | 9.84 KiB |       105 | `StructureRareData`          |
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
|  4.2% | 62.5 KiB |     1,734 | `Function`               |
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

#### Instances

Instances ranked by contribution to each constructor's self size.

##### `FunctionCodeBlock`

|     % |     Size | Instances | Path                                                                                                                                                                         |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 51.9% |  135 KiB |        21 | `FunctionExecutable ← <root>`                                                                                                                                                |
| 10.3% | 26.8 KiB |         1 | `(GC root)`                                                                                                                                                                  |
|  2.8% |  7.4 KiB |         1 | `FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← <root>`                                                              |
|  2.4% | 6.35 KiB |         1 | `FunctionExecutable ← FunctionExecutable ← Function ← InternalModuleRegistry ← GlobalObject ← <root>`                                                                        |
|  1.0% | 2.58 KiB |         1 | `FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← Function ← .requestInstantiate ModuleLoader ← GlobalObject ← <root>` |

##### `Structure`

|    % |     Size | Instances | Path                                                 |
| ---: | -------: | --------: | ---------------------------------------------------- |
| 2.5% | 4.92 KiB |        45 | `<root>`                                             |
| 0.6% | 1.09 KiB |        10 | `GlobalObject ← <root>`                              |
| 0.3% |    672 B |         6 | `(GC root)`                                          |
| 0.1% |    112 B |         1 | `JSGlobalLexicalEnvironment ← GlobalObject ← <root>` |
| 0.1% |    112 B |         1 | `Function ← GlobalObject ← <root>`                   |

##### `FunctionExecutable`

|    % |  Size | Instances | Path                                               |
| ---: | ----: | --------: | -------------------------------------------------- |
| 0.3% | 384 B |         3 | `Function`                                         |
| 0.1% | 128 B |         1 | `Function ← .every Array ← GlobalObject ← <root>`  |
| 0.1% | 128 B |         1 | `Function ← <root>`                                |
| 0.1% | 128 B |         1 | `Function ← .some Array ← GlobalObject ← <root>`   |
| 0.1% | 128 B |         1 | `Function ← .filter Array ← GlobalObject ← <root>` |

##### `Object`

|    % |     Size | Instances | Path                                                             |
| ---: | -------: | --------: | ---------------------------------------------------------------- |
| 1.5% | 1.48 KiB |         3 | `<root>`                                                         |
| 1.2% |  1.2 KiB |         5 | `InternalModuleRegistry ← GlobalObject ← <root>`                 |
| 0.6% |    640 B |         4 | `(GC root)`                                                      |
| 0.2% |    225 B |         1 | `.versions Process ← GlobalObject ← <root>`                      |
| 0.2% |    160 B |         1 | `.win32 Object ← InternalModuleRegistry ← GlobalObject ← <root>` |

##### `UnlinkedFunctionCodeBlock`

|     % |     Size | Instances | Path                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------- |
| 42.9% |   39 KiB |        23 | `<root>`                                                                         |
|  8.3% |  7.5 KiB |         3 | `(GC root)`                                                                      |
|  1.4% | 1.29 KiB |         1 | `FunctionExecutable ← Function ← InternalModuleRegistry ← GlobalObject ← <root>` |
|  0.9% |    818 B |         1 | `InternalModuleRegistry ← GlobalObject ← <root>`                                 |
|  0.8% |    772 B |         1 | `FunctionExecutable ← Function ← <root>`                                         |

##### `UnlinkedFunctionExecutable`

|     % |     Size | Instances | Path                                                                                    |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------- |
| 17.0% | 14.7 KiB |       157 | `FunctionExecutable ← Function ← GlobalObject ← <root>`                                 |
|  8.9% | 7.69 KiB |        82 | `<root>`                                                                                |
|  0.1% |     96 B |         1 | `FunctionExecutable ← Function ← .writableStreamAbortForBindings GlobalObject ← <root>` |
|  0.1% |     96 B |         1 | `FunctionExecutable ← Function ← .writableStreamClose GlobalObject ← <root>`            |
|  0.1% |     96 B |         1 | `FunctionExecutable ← Function ← .writableStreamCloseForBindings GlobalObject ← <root>` |

##### `Function`

|    % | Size | Instances | Path                              |
| ---: | ---: | --------: | --------------------------------- |
| 0.2% | 98 B |         1 | `.realpathSync Object ← <root>`   |
| 0.2% | 97 B |         1 | `.accessSync Object ← <root>`     |
| 0.2% | 97 B |         1 | `.appendFileSync Object ← <root>` |
| 0.2% | 97 B |         1 | `.closeSync Object ← <root>`      |
| 0.2% | 97 B |         1 | `.copyFileSync Object ← <root>`   |

##### `NativeExecutable`

|    % |  Size | Instances | Path                                      |
| ---: | ----: | --------: | ----------------------------------------- |
| 0.6% | 320 B |         4 | `Function`                                |
| 0.2% |  80 B |         1 | `<root>`                                  |
| 0.2% |  80 B |         1 | `Function ← .toString Function`           |
| 0.2% |  80 B |         1 | `Function ← .toLocaleString Object`       |
| 0.2% |  80 B |         1 | `Function ← .propertyIsEnumerable Object` |

##### `ModuleRecord`

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 27.7 KiB |         4 | `(GC root)` |

##### `PropertyTable`

|    % | Size | Instances | Path                                                                                              |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------- |
| 0.3% | 48 B |         1 | `Structure ← Function ← .DuplexSide JSLexicalEnvironment ← Function ← <root>`                     |
| 0.3% | 48 B |         1 | `Structure ← Object ← .prototype Function ← .DuplexSide JSLexicalEnvironment ← Function ← <root>` |
| 0.3% | 48 B |         1 | `(GC root)`                                                                                       |
| 0.3% | 48 B |         1 | `Structure ← Function ← GlobalObject ← <root>`                                                    |
| 0.3% | 48 B |         1 | `Structure ← Function ← <root>`                                                                   |

##### `Cell Butterfly`

|     % |   Size | Instances | Path                                                     |
| ----: | -----: | --------: | -------------------------------------------------------- |
| 93.5% | 16 KiB |         1 | `Map ← .byId Object ← .__retained GlobalObject ← <root>` |
|  4.4% |  768 B |         6 | `(GC root)`                                              |
|  1.8% |  320 B |         1 | `Map ← .registry ModuleLoader ← GlobalObject ← <root>`   |
|  0.3% |   48 B |         2 | `<root>`                                                 |

##### `Array`

|    % | Size | Instances | Path                                                     |
| ---: | ---: | --------: | -------------------------------------------------------- |
| 0.4% | 66 B |         1 | `GlobalObject ← <root>`                                  |
| 0.3% | 48 B |         3 | `(GC root)`                                              |
| 0.3% | 48 B |         3 | `.customPromisifyArgs Function ← <root>`                 |
| 0.1% | 16 B |         1 | `.customPromisifyArgs Function ← .readv Object ← <root>` |
| 0.1% | 16 B |         1 | `._preload_modules Process ← GlobalObject ← <root>`      |

##### `FunctionRareData`

|    % | Size | Instances | Path                                                                                                                                                                                                                  |
| ---: | ---: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.5% | 80 B |         1 | `Function ← .Symbol.iterator Object ← .prototype Function ← <root>`                                                                                                                                                   |
| 0.5% | 80 B |         1 | `Function ← <root>`                                                                                                                                                                                                   |
| 0.5% | 80 B |         1 | `Function ← .Symbol.iterator Object ← .prototype Function ← .SafeStringIterator Object ← InternalModuleRegistry ← GlobalObject ← <root>`                                                                              |
| 0.5% | 80 B |         1 | `Function ← .SafeStringIterator Object ← InternalModuleRegistry ← GlobalObject ← <root>`                                                                                                                              |
| 0.5% | 80 B |         1 | `Function ← .Symbol.iterator Object ← .prototype Function ← .SafeIterator JSLexicalEnvironment ← Function ← .entries Object ← .prototype Function ← .SafeMap Object ← InternalModuleRegistry ← GlobalObject ← <root>` |

##### `JSLexicalEnvironment`

|     % |     Size | Instances | Path                                                  |
| ----: | -------: | --------: | ----------------------------------------------------- |
| 35.7% | 4.52 KiB |        18 | `<root>`                                              |
|  6.2% |    800 B |         5 | `JSLexicalEnvironment ← <root>`                       |
|  1.2% |    160 B |         1 | `Function ← <root>`                                   |
|  0.6% |     80 B |         1 | `(GC root)`                                           |
|  0.6% |     80 B |         1 | `Function ← .FSWatcher JSLexicalEnvironment ← <root>` |

##### `SymbolTable`

|    % |  Size | Instances | Path                                                                                                                                                       |
| ---: | ----: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.2% | 256 B |         4 | `(GC root)`                                                                                                                                                |
| 1.1% | 128 B |         2 | `FunctionCodeBlock ← FunctionExecutable ← Function ← .loadAndEvaluateModule ModuleLoader ← GlobalObject ← <root>`                                          |
| 0.5% |  64 B |         1 | `GlobalObject ← <root>`                                                                                                                                    |
| 0.5% |  64 B |         1 | `JSGlobalLexicalEnvironment ← GlobalObject ← <root>`                                                                                                       |
| 0.5% |  64 B |         1 | `FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← Function ← .loadAndEvaluateModule ModuleLoader ← GlobalObject ← <root>` |

##### `GlobalObject`

|      % |     Size | Instances | Path     |
| -----: | -------: | --------: | -------- |
| 100.0% | 10.3 KiB |         1 | `<root>` |

##### `StructureRareData`

|    % | Size | Instances | Path                                                 |
| ---: | ---: | --------: | ---------------------------------------------------- |
| 1.0% | 96 B |         1 | `Structure ← Map ← <root>`                           |
| 1.0% | 96 B |         1 | `Structure ← Array Iterator ← GlobalObject ← <root>` |
| 1.0% | 96 B |         1 | `Structure ← Array ← GlobalObject ← <root>`          |
| 1.0% | 96 B |         1 | `Structure ← Map Iterator ← GlobalObject ← <root>`   |
| 1.0% | 96 B |         1 | `Structure ← Set Iterator ← GlobalObject ← <root>`   |

##### `GetterSetter`

|     % |  Size | Instances | Path                                               |
| ----: | ----: | --------: | -------------------------------------------------- |
| 10.2% | 480 B |        15 | `GlobalObject ← <root>`                            |
|  0.7% |  32 B |         1 | `.__proto__ Object`                                |
|  0.7% |  32 B |         1 | `.Symbol.species Function ← GlobalObject ← <root>` |
|  0.7% |  32 B |         1 | `.byteLength ArrayBuffer ← <root>`                 |
|  0.7% |  32 B |         1 | `.growable ArrayBuffer ← <root>`                   |

##### `ModuleProgramCodeBlock`

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 4.45 KiB |         1 | `(GC root)` |

##### `AsyncFunction`

|    % | Size | Instances | Path                                                 |
| ---: | ---: | --------: | ---------------------------------------------------- |
| 2.2% | 51 B |         1 | `.constructor AsyncFunction ← GlobalObject ← <root>` |
| 1.5% | 34 B |         1 | `.access Object ← <root>`                            |
| 1.5% | 34 B |         1 | `<root>`                                             |
| 1.5% | 34 B |         1 | `.copyFile Object ← <root>`                          |
| 1.5% | 34 B |         1 | `.chown Object ← <root>`                             |

##### `JSModuleEnvironment`

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 2.17 KiB |         4 | `(GC root)` |

##### `UnlinkedModuleProgramCodeBlock`

|      % |     Size | Instances | Path     |
| -----: | -------: | --------: | -------- |
| 100.0% | 1.68 KiB |         2 | `<root>` |

##### `CustomGetterSetter`

|    % | Size | Instances | Path                                                   |
| ---: | ---: | --------: | ------------------------------------------------------ |
| 2.2% | 32 B |         1 | `.arguments Function`                                  |
| 2.2% | 32 B |         1 | `.caller Function`                                     |
| 2.2% | 32 B |         1 | `.constructor Iterator ← GlobalObject ← <root>`        |
| 2.2% | 32 B |         1 | `.Symbol.toStringTag Iterator ← GlobalObject ← <root>` |
| 2.2% | 32 B |         1 | `.Buffer GlobalObject ← <root>`                        |

##### `InternalModuleRegistry`

|      % |     Size | Instances | Path                    |
| -----: | -------: | --------: | ----------------------- |
| 100.0% | 1.19 KiB |         1 | `GlobalObject ← <root>` |

##### `NodeJSFS`

|     % |     Size | Instances | Path                                |
| ----: | -------: | --------: | ----------------------------------- |
| 90.9% | 1.04 KiB |         1 | `<root>`                            |
|  9.1% |    106 B |         1 | `Structure ← GlobalObject ← <root>` |

##### `SparseArrayValueMap`

|    % | Size | Instances | Path                                                                                                                                                                                      |
| ---: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.9% | 32 B |         1 | `Object ← .prototype Function ← <root>`                                                                                                                                                   |
| 2.9% | 32 B |         1 | `Function ← <root>`                                                                                                                                                                       |
| 2.9% | 32 B |         1 | `Object ← .prototype Function ← .SafeStringIterator Object ← InternalModuleRegistry ← GlobalObject ← <root>`                                                                              |
| 2.9% | 32 B |         1 | `Function ← .SafeStringIterator Object ← InternalModuleRegistry ← GlobalObject ← <root>`                                                                                                  |
| 2.9% | 32 B |         1 | `Object ← .prototype Function ← .SafeIterator JSLexicalEnvironment ← Function ← .entries Object ← .prototype Function ← .SafeMap Object ← InternalModuleRegistry ← GlobalObject ← <root>` |

##### `FileSink`

|     % |  Size | Instances | Path                                         |
| ----: | ----: | --------: | -------------------------------------------- |
| 90.7% | 752 B |         2 | `.kWriteStreamFastPath WriteStream ← <root>` |
|  6.0% |  50 B |         1 | `GlobalObject ← <root>`                      |
|  3.3% |  27 B |         1 | `Structure ← GlobalObject ← <root>`          |

##### `DOMAttributeGetterSetter`

|    % | Size | Instances | Path                                                   |
| ---: | ---: | --------: | ------------------------------------------------------ |
| 6.3% | 48 B |         1 | `.Dirent NodeJSFS ← Structure ← GlobalObject ← <root>` |
| 6.3% | 48 B |         1 | `.Stats NodeJSFS ← Structure ← GlobalObject ← <root>`  |
| 6.3% | 48 B |         1 | `.lastChar StringDecoder ← <root>`                     |
| 6.3% | 48 B |         1 | `.lastNeed StringDecoder ← <root>`                     |
| 6.3% | 48 B |         1 | `.lastTotal StringDecoder ← <root>`                    |

##### `FileInternalReadableStreamSource`

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 659 B |         2 | `(GC root)` |

##### `InternalPromise`

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 512 B |        16 | `(GC root)` |

##### `Blob`

|     % |  Size | Instances | Path                    |
| ----: | ----: | --------: | ----------------------- |
| 90.4% | 328 B |         1 | `GlobalObject ← <root>` |
|  9.6% |  35 B |         1 | `<root>`                |

##### `Map`

|     % | Size | Instances | Path                                                                                                                   |
| ----: | ---: | --------: | ---------------------------------------------------------------------------------------------------------------------- |
| 19.5% | 64 B |         2 | `(GC root)`                                                                                                            |
| 12.5% | 41 B |         1 | `<root>`                                                                                                               |
|  9.7% | 32 B |         1 | `.registry ModuleLoader ← GlobalObject ← <root>`                                                                       |
|  9.7% | 32 B |         1 | `GlobalObject ← <root>`                                                                                                |
|  9.7% | 32 B |         1 | `.dummy JSLexicalEnvironment ← .prototype Function ← .SafeMap Object ← InternalModuleRegistry ← GlobalObject ← <root>` |

##### `WriteStream`

|      % |  Size | Instances | Path     |
| -----: | ----: | --------: | -------- |
| 100.0% | 242 B |         2 | `<root>` |

##### `ModuleProgramExecutable`

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 224 B |         2 | `(GC root)` |

##### `Process`

|      % |  Size | Instances | Path                    |
| -----: | ----: | --------: | ----------------------- |
| 100.0% | 213 B |         1 | `GlobalObject ← <root>` |

##### `Generator`

|     % |  Size | Instances | Path                    |
| ----: | ----: | --------: | ----------------------- |
| 91.4% | 192 B |         3 | `(GC root)`             |
|  8.6% |  18 B |         1 | `GlobalObject ← <root>` |

##### `StructureChain`

|     % | Size | Instances | Path                                                                  |
| ----: | ---: | --------: | --------------------------------------------------------------------- |
| 23.1% | 48 B |         3 | `Structure ← Structure ← <root>`                                      |
| 15.4% | 32 B |         2 | `Structure ← Structure ← Function ← <root>`                           |
|  7.7% | 16 B |         1 | `<root>`                                                              |
|  7.7% | 16 B |         1 | `Structure ← Object ← InternalModuleRegistry ← GlobalObject ← <root>` |
|  7.7% | 16 B |         1 | `Structure ← <root>`                                                  |

##### `ReadableStream`

|     % | Size | Instances | Path                    |
| ----: | ---: | --------: | ----------------------- |
| 42.9% | 67 B |         1 | `GlobalObject ← <root>` |
| 35.9% | 56 B |         1 | `<root>`                |
| 21.2% | 33 B |         1 | `(GC root)`             |

##### `JSPropertyNameEnumerator`

|     % | Size | Instances | Path                                                          |
| ----: | ---: | --------: | ------------------------------------------------------------- |
| 33.3% | 48 B |         1 | `<root>`                                                      |
| 33.3% | 48 B |         1 | `StructureRareData ← Structure ← <root>`                      |
| 33.3% | 48 B |         1 | `StructureRareData ← Structure ← FunctionExecutable ← <root>` |

##### `JSAsyncGeneratorFunction`

|     % | Size | Instances | Path                                                          |
| ----: | ---: | --------: | ------------------------------------------------------------- |
| 26.2% | 34 B |         1 | `.Symbol.asyncIterator Object ← .prototype Function ← <root>` |
| 24.6% | 32 B |         1 | `<root>`                                                      |
| 24.6% | 32 B |         1 | `.fromReadable JSLexicalEnvironment ← <root>`                 |
| 24.6% | 32 B |         1 | `.createAsyncIterator JSLexicalEnvironment ← <root>`          |

##### `JSSourceCode`

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 128 B |         4 | `(GC root)` |

##### `Callee`

|     % | Size | Instances | Path                    |
| ----: | ---: | --------: | ----------------------- |
| 75.0% | 96 B |         3 | `GlobalObject ← <root>` |
| 25.0% | 32 B |         1 | `(GC root)`             |

##### `Set`

|     % | Size | Instances | Path                                                           |
| ----: | ---: | --------: | -------------------------------------------------------------- |
| 40.7% | 44 B |         1 | `<root>`                                                       |
| 29.6% | 32 B |         1 | `.dummy JSLexicalEnvironment ← .prototype Function ← <root>`   |
| 29.6% | 32 B |         1 | `.allowedNodeEnvironmentFlags Process ← GlobalObject ← <root>` |

##### `GeneratorFunction`

|     % | Size | Instances | Path                                                                |
| ----: | ---: | --------: | ------------------------------------------------------------------- |
| 50.0% | 51 B |         1 | `.constructor GeneratorFunction ← GlobalObject ← <root>`            |
| 31.4% | 32 B |         1 | `.globSync Object ← InternalModuleRegistry ← GlobalObject ← <root>` |
| 18.6% | 19 B |         1 | `GlobalObject ← <root>`                                             |

##### `ReadStream`

|      % | Size | Instances | Path     |
| -----: | ---: | --------: | -------- |
| 100.0% | 91 B |         1 | `<root>` |

##### `Stats`

|     % | Size | Instances | Path                    |
| ----: | ---: | --------: | ----------------------- |
| 63.7% | 51 B |         1 | `GlobalObject ← <root>` |
| 36.3% | 29 B |         1 | `<root>`                |

##### `Dirent`

|     % | Size | Instances | Path                    |
| ----: | ---: | --------: | ----------------------- |
| 67.1% | 51 B |         1 | `GlobalObject ← <root>` |
| 32.9% | 25 B |         1 | `<root>`                |

##### `StringDecoder`

|     % | Size | Instances | Path                    |
| ----: | ---: | --------: | ----------------------- |
| 67.1% | 51 B |         1 | `GlobalObject ← <root>` |
| 32.9% | 25 B |         1 | `<root>`                |

##### `String`

|      % | Size | Instances | Path                    |
| -----: | ---: | --------: | ----------------------- |
| 100.0% | 70 B |         1 | `GlobalObject ← <root>` |

##### `AsyncGeneratorFunction`

|     % | Size | Instances | Path                                                          |
| ----: | ---: | --------: | ------------------------------------------------------------- |
| 72.9% | 51 B |         1 | `.constructor AsyncGeneratorFunction ← GlobalObject ← <root>` |
| 27.1% | 19 B |         1 | `GlobalObject ← <root>`                                       |

##### `JSGlobalLexicalEnvironment`

|      % | Size | Instances | Path                    |
| -----: | ---: | --------: | ----------------------- |
| 100.0% | 64 B |         1 | `GlobalObject ← <root>` |

##### `PromiseReaction`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% | 48 B |         1 | `(GC root)` |

##### `Array Iterator`

|      % | Size | Instances | Path                    |
| -----: | ---: | --------: | ----------------------- |
| 100.0% | 18 B |         1 | `GlobalObject ← <root>` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

|     % |     Size | Instances | Constructor                  |
| ----: | -------: | --------: | ---------------------------- |
| 89.1% |  1.3 MiB |         1 | `GlobalObject`               |
| 41.3% |  615 KiB |     1,373 | `Object`                     |
| 31.8% |  474 KiB |       931 | `FunctionExecutable`         |
| 29.9% |  446 KiB |     1,077 | `Array`                      |
| 19.0% |  284 KiB |     1,734 | `Function`                   |
| 17.9% |  267 KiB |       122 | `FunctionCodeBlock`          |
| 15.5% |  231 KiB |     1,816 | `Structure`                  |
|  6.1% | 90.9 KiB |       121 | `UnlinkedFunctionCodeBlock`  |
|  5.8% | 86.7 KiB |       925 | `UnlinkedFunctionExecutable` |
|  3.4% | 50.9 KiB |       653 | `NativeExecutable`           |
|  3.3% | 49.5 KiB |         1 | `InternalModuleRegistry`     |
|  1.8% | 26.6 KiB |       170 | `JSLexicalEnvironment`       |
|  1.5% | 22.4 KiB |         1 | `ModuleLoader`               |
|  1.4% | 21.5 KiB |       105 | `StructureRareData`          |
|  1.3% | 18.8 KiB |         1 | `Process`                    |
|  1.2% | 18.1 KiB |       390 | `PropertyTable`              |
|  1.2% | 17.5 KiB |       210 | `FunctionRareData`           |
|  1.1% | 16.8 KiB |        10 | `Map`                        |
|  1.1% | 16.5 KiB |        10 | `Cell Butterfly`             |
|  1.1% | 15.8 KiB |       147 | `GetterSetter`               |

#### Categories

##### Code

|     % |     Size | Instances | Constructor                      |
| ----: | -------: | --------: | -------------------------------- |
| 31.8% |  474 KiB |       931 | `FunctionExecutable`             |
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
| 15.5% | 231 KiB |     1,816 | `Structure` |

##### Object

|     % |     Size | Instances | Constructor                        |
| ----: | -------: | --------: | ---------------------------------- |
| 89.1% |  1.3 MiB |         1 | `GlobalObject`                     |
| 41.3% |  615 KiB |     1,373 | `Object`                           |
|  3.3% | 49.5 KiB |         1 | `InternalModuleRegistry`           |
|  1.3% | 18.8 KiB |         1 | `Process`                          |
|  1.1% | 16.8 KiB |        10 | `Map`                              |
|  1.0% | 15.6 KiB |         1 | `ReadStream`                       |
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
|  1.4% | 21.5 KiB |       105 | `StructureRareData`          |
|  1.2% | 18.1 KiB |       390 | `PropertyTable`              |
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
| 19.0% |  284 KiB |     1,734 | `Function`               |
|  0.5% | 7.67 KiB |        70 | `AsyncFunction`          |
| <0.1% |    488 B |         3 | `GeneratorFunction`      |
| <0.1% |    466 B |         2 | `AsyncGeneratorFunction` |
| <0.1% |     96 B |         4 | `Callee`                 |

##### Array

|     % |     Size | Instances | Constructor           |
| ----: | -------: | --------: | --------------------- |
| 29.9% |  446 KiB |     1,077 | `Array`               |
|  0.1% | 1.03 KiB |        34 | `SparseArrayValueMap` |
| <0.1% |    464 B |         1 | `Array Iterator`      |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `GlobalObject`

|      % |    Size | Instances | Path     |
| -----: | ------: | --------: | -------- |
| 100.0% | 1.3 MiB |         1 | `<root>` |

##### `Object`

|     % |     Size | Instances | Path                                               |
| ----: | -------: | --------: | -------------------------------------------------- |
| 74.5% |  458 KiB |         1 | `.__retained GlobalObject ← <root>`                |
| 71.8% |  442 KiB |         1 | `.data Object ← .__retained GlobalObject ← <root>` |
|  5.9% | 36.1 KiB |         2 | `<root>`                                           |
|  5.1% | 31.1 KiB |         2 | `InternalModuleRegistry ← GlobalObject ← <root>`   |
|  1.4% | 8.54 KiB |         1 | `GlobalObject ← <root>`                            |

##### `FunctionExecutable`

|     % |     Size | Instances | Path                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------- |
| 29.2% |  139 KiB |         8 | `<root>`                                                                         |
|  9.3% |   44 KiB |         1 | `(GC root)`                                                                      |
|  2.1% | 9.98 KiB |         1 | `FunctionCodeBlock ← FunctionExecutable ← <root>`                                |
|  1.7% | 8.18 KiB |         1 | `Function ← InternalModuleRegistry ← GlobalObject ← <root>`                      |
|  1.7% | 7.96 KiB |         1 | `FunctionExecutable ← Function ← InternalModuleRegistry ← GlobalObject ← <root>` |

##### `Array`

|     % |     Size | Instances | Path                                                                                                                  |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------- |
| 98.6% |  440 KiB |         1 | `.statuses Object ← .data Object ← .__retained GlobalObject ← <root>`                                                 |
|  1.1% | 4.69 KiB |         1 | `GlobalObject ← <root>`                                                                                               |
|  0.3% | 1.51 KiB |         1 | `.media Object ← .entities Object ← [64] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>` |
|  0.2% | 1.08 KiB |         1 | `.media Object ← .entities Object ← [98] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>` |
|  0.2% | 1.08 KiB |         1 | `.media Object ← .entities Object ← [4] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>`  |

##### `Function`

|    % |     Size | Instances | Path                                                               |
| ---: | -------: | --------: | ------------------------------------------------------------------ |
| 3.9% | 11.1 KiB |         2 | `<root>`                                                           |
| 3.0% |  8.4 KiB |         1 | `InternalModuleRegistry ← GlobalObject ← <root>`                   |
| 1.8% | 5.12 KiB |         1 | `.SafeMap Object ← InternalModuleRegistry ← GlobalObject ← <root>` |
| 1.6% | 4.49 KiB |         1 | `.requestInstantiate ModuleLoader ← GlobalObject ← <root>`         |
| 1.4% | 3.91 KiB |         1 | `.requestSatisfyUtil ModuleLoader ← GlobalObject ← <root>`         |

##### `FunctionCodeBlock`

|     % |     Size | Instances | Path                                                                                                            |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------- |
| 35.7% | 95.5 KiB |         7 | `FunctionExecutable ← <root>`                                                                                   |
| 12.4% | 33.1 KiB |         1 | `(GC root)`                                                                                                     |
|  3.7% | 9.85 KiB |         1 | `FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← <root>`                                          |
|  2.8% |  7.4 KiB |         1 | `FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← <root>` |
|  2.4% | 6.35 KiB |         1 | `FunctionExecutable ← FunctionExecutable ← Function ← InternalModuleRegistry ← GlobalObject ← <root>`           |

##### `Structure`

|    % |     Size | Instances | Path                                                              |
| ---: | -------: | --------: | ----------------------------------------------------------------- |
| 5.2% | 12.1 KiB |         1 | `Object ← <root>`                                                 |
| 5.2% | 11.9 KiB |         1 | `Structure ← Object ← <root>`                                     |
| 5.1% | 11.8 KiB |         1 | `Structure ← Structure ← Object ← <root>`                         |
| 5.1% | 11.7 KiB |         1 | `Structure ← Structure ← Structure ← Object ← <root>`             |
| 5.0% | 11.6 KiB |         1 | `Structure ← Structure ← Structure ← Structure ← Object ← <root>` |

##### `UnlinkedFunctionCodeBlock`

|     % |     Size | Instances | Path                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------- |
| 42.9% |   39 KiB |        23 | `<root>`                                                                         |
|  8.3% |  7.5 KiB |         3 | `(GC root)`                                                                      |
|  1.4% | 1.29 KiB |         1 | `FunctionExecutable ← Function ← InternalModuleRegistry ← GlobalObject ← <root>` |
|  0.9% |    818 B |         1 | `InternalModuleRegistry ← GlobalObject ← <root>`                                 |
|  0.8% |    772 B |         1 | `FunctionExecutable ← Function ← <root>`                                         |

##### `UnlinkedFunctionExecutable`

|     % |     Size | Instances | Path                                                                                    |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------- |
| 17.0% | 14.7 KiB |       157 | `FunctionExecutable ← Function ← GlobalObject ← <root>`                                 |
|  8.9% | 7.69 KiB |        82 | `<root>`                                                                                |
|  0.1% |     96 B |         1 | `FunctionExecutable ← Function ← .writableStreamAbortForBindings GlobalObject ← <root>` |
|  0.1% |     96 B |         1 | `FunctionExecutable ← Function ← .writableStreamClose GlobalObject ← <root>`            |
|  0.1% |     96 B |         1 | `FunctionExecutable ← Function ← .writableStreamCloseForBindings GlobalObject ← <root>` |

##### `NativeExecutable`

|    % |  Size | Instances | Path                                      |
| ---: | ----: | --------: | ----------------------------------------- |
| 0.6% | 320 B |         4 | `Function`                                |
| 0.2% |  80 B |         1 | `<root>`                                  |
| 0.2% |  80 B |         1 | `Function ← .toString Function`           |
| 0.2% |  80 B |         1 | `Function ← .toLocaleString Object`       |
| 0.2% |  80 B |         1 | `Function ← .propertyIsEnumerable Object` |

##### `InternalModuleRegistry`

|      % |     Size | Instances | Path                    |
| -----: | -------: | --------: | ----------------------- |
| 100.0% | 49.5 KiB |         1 | `GlobalObject ← <root>` |

##### `JSLexicalEnvironment`

|     % |     Size | Instances | Path                                                                                                                  |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------- |
| 36.4% |  9.7 KiB |         7 | `<root>`                                                                                                              |
|  6.4% | 1.69 KiB |         1 | `Function ← <root>`                                                                                                   |
|  2.3% |    630 B |         1 | `Function ← .entries Object ← .prototype Function ← .SafeMap Object ← InternalModuleRegistry ← GlobalObject ← <root>` |
|  2.3% |    630 B |         1 | `Function ← .keys Object ← .prototype Function ← .SafeMap Object ← InternalModuleRegistry ← GlobalObject ← <root>`    |
|  2.3% |    630 B |         1 | `Function ← .values Object ← .prototype Function ← .SafeMap Object ← InternalModuleRegistry ← GlobalObject ← <root>`  |

##### `ModuleLoader`

|      % |     Size | Instances | Path                    |
| -----: | -------: | --------: | ----------------------- |
| 100.0% | 22.4 KiB |         1 | `GlobalObject ← <root>` |

##### `StructureRareData`

|     % |     Size | Instances | Path                                                                                              |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------- |
| 17.4% | 3.75 KiB |         1 | `Structure ← ReadStream ← <root>`                                                                 |
| 16.5% | 3.55 KiB |         1 | `Structure ← StructureRareData ← Structure ← ReadStream ← <root>`                                 |
| 15.9% | 3.42 KiB |         1 | `Structure ← <root>`                                                                              |
| 15.5% | 3.34 KiB |         1 | `Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← ReadStream ← <root>` |
| 14.7% | 3.17 KiB |         1 | `Structure ← StructureRareData ← Structure ← <root>`                                              |

##### `Process`

|      % |     Size | Instances | Path                    |
| -----: | -------: | --------: | ----------------------- |
| 100.0% | 18.8 KiB |         1 | `GlobalObject ← <root>` |

##### `PropertyTable`

|    % | Size | Instances | Path                                                                                              |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------- |
| 0.3% | 48 B |         1 | `Structure ← Function ← .DuplexSide JSLexicalEnvironment ← Function ← <root>`                     |
| 0.3% | 48 B |         1 | `Structure ← Object ← .prototype Function ← .DuplexSide JSLexicalEnvironment ← Function ← <root>` |
| 0.3% | 48 B |         1 | `(GC root)`                                                                                       |
| 0.3% | 48 B |         1 | `Structure ← Function ← GlobalObject ← <root>`                                                    |
| 0.3% | 48 B |         1 | `Structure ← Function ← <root>`                                                                   |

##### `FunctionRareData`

|    % |     Size | Instances | Path                                                                                                                                                                                                                  |
| ---: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.4% | 1.29 KiB |         3 | `Function ← <root>`                                                                                                                                                                                                   |
| 0.4% |     80 B |         1 | `Function ← .Symbol.iterator Object ← .prototype Function ← <root>`                                                                                                                                                   |
| 0.4% |     80 B |         1 | `Function ← .Symbol.iterator Object ← .prototype Function ← .SafeStringIterator Object ← InternalModuleRegistry ← GlobalObject ← <root>`                                                                              |
| 0.4% |     80 B |         1 | `Function ← .SafeStringIterator Object ← InternalModuleRegistry ← GlobalObject ← <root>`                                                                                                                              |
| 0.4% |     80 B |         1 | `Function ← .Symbol.iterator Object ← .prototype Function ← .SafeIterator JSLexicalEnvironment ← Function ← .entries Object ← .prototype Function ← .SafeMap Object ← InternalModuleRegistry ← GlobalObject ← <root>` |

##### `Map`

|     % |     Size | Instances | Path                                               |
| ----: | -------: | --------: | -------------------------------------------------- |
| 95.5% | 16.1 KiB |         1 | `.byId Object ← .__retained GlobalObject ← <root>` |
|  2.0% |    352 B |         1 | `.registry ModuleLoader ← GlobalObject ← <root>`   |
|  1.9% |    329 B |         1 | `<root>`                                           |
|  0.2% |     32 B |         1 | `GlobalObject ← <root>`                            |
|  0.2% |     32 B |         1 | `(GC root)`                                        |

##### `Cell Butterfly`

|     % |   Size | Instances | Path                                                     |
| ----: | -----: | --------: | -------------------------------------------------------- |
| 97.1% | 16 KiB |         1 | `Map ← .byId Object ← .__retained GlobalObject ← <root>` |
|  4.5% |  768 B |         6 | `(GC root)`                                              |
|  1.9% |  320 B |         1 | `Map ← .registry ModuleLoader ← GlobalObject ← <root>`   |
|  0.3% |   48 B |         2 | `<root>`                                                 |

##### `GetterSetter`

|    % |  Size | Instances | Path                                                                                                                         |
| ---: | ----: | --------: | ---------------------------------------------------------------------------------------------------------------------------- |
| 1.9% | 306 B |         1 | `.__proto__ Object`                                                                                                          |
| 1.8% | 296 B |         1 | `.self GlobalObject ← <root>`                                                                                                |
| 1.8% | 288 B |         1 | `.locked ReadableStream`                                                                                                     |
| 1.1% | 176 B |         1 | `.constructor Object ← .homeObject Function ← <root>`                                                                        |
| 1.1% | 176 B |         1 | `.constructor Object ← .prototype Function ← .ExceptionWithHostPort Object ← InternalModuleRegistry ← GlobalObject ← <root>` |

##### `ReadStream`

|      % |     Size | Instances | Path     |
| -----: | -------: | --------: | -------- |
| 100.0% | 15.6 KiB |         1 | `<root>` |

##### `SymbolTable`

|     % |  Size | Instances | Path                                                 |
| ----: | ----: | --------: | ---------------------------------------------------- |
| 17.7% | 2 KiB |        16 | `<root>`                                             |
|  7.7% | 896 B |         7 | `(GC root)`                                          |
|  2.2% | 256 B |         2 | `UnlinkedModuleProgramCodeBlock ← <root>`            |
|  0.6% |  64 B |         1 | `GlobalObject ← <root>`                              |
|  0.6% |  64 B |         1 | `JSGlobalLexicalEnvironment ← GlobalObject ← <root>` |

##### `WriteStream`

|      % |     Size | Instances | Path     |
| -----: | -------: | --------: | -------- |
| 100.0% | 9.16 KiB |         2 | `<root>` |

##### `AsyncFunction`

|    % |  Size | Instances | Path                                                 |
| ---: | ----: | --------: | ---------------------------------------------------- |
| 7.7% | 607 B |         1 | `GlobalObject ← <root>`                              |
| 4.0% | 311 B |         1 | `.Symbol.asyncDispose Object ← <root>`               |
| 3.1% | 240 B |         1 | `.constructor AsyncFunction ← GlobalObject ← <root>` |
| 2.1% | 162 B |         1 | `.access Object ← <root>`                            |
| 2.1% | 162 B |         1 | `<root>`                                             |

##### `console`

|      % |     Size | Instances | Path                             |
| -----: | -------: | --------: | -------------------------------- |
| 100.0% | 4.89 KiB |         1 | `.console GlobalObject ← <root>` |

##### `Prototype`

|      % |     Size | Instances | Path                    |
| -----: | -------: | --------: | ----------------------- |
| 100.0% | 4.88 KiB |         1 | `GlobalObject ← <root>` |

##### `Math`

|      % |     Size | Instances | Path                          |
| -----: | -------: | --------: | ----------------------------- |
| 100.0% | 4.86 KiB |         1 | `.Math GlobalObject ← <root>` |

##### `ReadableStream`

|     % |     Size | Instances | Path                    |
| ----: | -------: | --------: | ----------------------- |
| 60.7% | 2.93 KiB |         1 | `(GC root)`             |
| 26.7% | 1.29 KiB |         1 | `<root>`                |
| 12.6% |    625 B |         1 | `GlobalObject ← <root>` |

##### `String`

|      % |     Size | Instances | Path                    |
| -----: | -------: | --------: | ----------------------- |
| 100.0% | 4.45 KiB |         1 | `GlobalObject ← <root>` |

##### `Iterator`

|     % |     Size | Instances | Path                                |
| ----: | -------: | --------: | ----------------------------------- |
| 79.2% | 2.36 KiB |         1 | `GlobalObject ← <root>`             |
| 20.8% |    635 B |         1 | `Structure ← GlobalObject ← <root>` |

##### `NodeJSFS`

|     % |     Size | Instances | Path                                |
| ----: | -------: | --------: | ----------------------------------- |
| 64.8% | 1.92 KiB |         1 | `Structure ← GlobalObject ← <root>` |
| 35.2% | 1.04 KiB |         1 | `<root>`                            |

##### `UnlinkedModuleProgramCodeBlock`

|      % |     Size | Instances | Path     |
| -----: | -------: | --------: | -------- |
| 100.0% | 2.53 KiB |         2 | `<root>` |

##### `FileSink`

|     % |     Size | Instances | Path                                         |
| ----: | -------: | --------: | -------------------------------------------- |
| 51.0% | 1.23 KiB |         1 | `Structure ← GlobalObject ← <root>`          |
| 30.4% |    752 B |         2 | `.kWriteStreamFastPath WriteStream ← <root>` |
| 18.5% |    458 B |         1 | `GlobalObject ← <root>`                      |

##### `Blob`

|     % |     Size | Instances | Path                    |
| ----: | -------: | --------: | ----------------------- |
| 86.6% | 2.06 KiB |         1 | `<root>`                |
| 13.4% |    328 B |         1 | `GlobalObject ← <root>` |

##### `ArrayBuffer`

|      % |     Size | Instances | Path     |
| -----: | -------: | --------: | -------- |
| 100.0% | 2.35 KiB |         2 | `<root>` |

##### `EventEmitter`

|      % |     Size | Instances | Path     |
| -----: | -------: | --------: | -------- |
| 100.0% | 2.17 KiB |         1 | `<root>` |

##### `FileInternalReadableStreamSource`

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 1.89 KiB |         2 | `(GC root)` |

##### `Stats`

|     % |     Size | Instances | Path                    |
| ----: | -------: | --------: | ----------------------- |
| 84.5% | 1.23 KiB |         1 | `<root>`                |
| 15.5% |    232 B |         1 | `GlobalObject ← <root>` |

##### `CustomGetterSetter`

|    % | Size | Instances | Path                                                   |
| ---: | ---: | --------: | ------------------------------------------------------ |
| 2.2% | 32 B |         1 | `.arguments Function`                                  |
| 2.2% | 32 B |         1 | `.caller Function`                                     |
| 2.2% | 32 B |         1 | `.constructor Iterator ← GlobalObject ← <root>`        |
| 2.2% | 32 B |         1 | `.Symbol.toStringTag Iterator ← GlobalObject ← <root>` |
| 2.2% | 32 B |         1 | `.Buffer GlobalObject ← <root>`                        |

##### `SparseArrayValueMap`

|    % | Size | Instances | Path                                                                                                                                                                                      |
| ---: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.0% | 32 B |         1 | `Object ← .prototype Function ← <root>`                                                                                                                                                   |
| 3.0% | 32 B |         1 | `Function ← <root>`                                                                                                                                                                       |
| 3.0% | 32 B |         1 | `Object ← .prototype Function ← .SafeStringIterator Object ← InternalModuleRegistry ← GlobalObject ← <root>`                                                                              |
| 3.0% | 32 B |         1 | `Function ← .SafeStringIterator Object ← InternalModuleRegistry ← GlobalObject ← <root>`                                                                                                  |
| 3.0% | 32 B |         1 | `Object ← .prototype Function ← .SafeIterator JSLexicalEnvironment ← Function ← .entries Object ← .prototype Function ← .SafeMap Object ← InternalModuleRegistry ← GlobalObject ← <root>` |

##### `DOMAttributeGetterSetter`

|    % | Size | Instances | Path                                                   |
| ---: | ---: | --------: | ------------------------------------------------------ |
| 6.3% | 48 B |         1 | `.Dirent NodeJSFS ← Structure ← GlobalObject ← <root>` |
| 6.3% | 48 B |         1 | `.Stats NodeJSFS ← Structure ← GlobalObject ← <root>`  |
| 6.3% | 48 B |         1 | `.lastChar StringDecoder ← <root>`                     |
| 6.3% | 48 B |         1 | `.lastNeed StringDecoder ← <root>`                     |
| 6.3% | 48 B |         1 | `.lastTotal StringDecoder ← <root>`                    |

##### `GeneratorFunction`

|     % |  Size | Instances | Path                                                                |
| ----: | ----: | --------: | ------------------------------------------------------------------- |
| 93.4% | 456 B |         1 | `GlobalObject ← <root>`                                             |
| 50.0% | 244 B |         1 | `.constructor GeneratorFunction ← GlobalObject ← <root>`            |
|  6.6% |  32 B |         1 | `.globSync Object ← InternalModuleRegistry ← GlobalObject ← <root>` |

##### `AsyncGeneratorFunction`

|      % |  Size | Instances | Path                                                          |
| -----: | ----: | --------: | ------------------------------------------------------------- |
| 100.0% | 466 B |         1 | `GlobalObject ← <root>`                                       |
|  53.4% | 249 B |         1 | `.constructor AsyncGeneratorFunction ← GlobalObject ← <root>` |

##### `Array Iterator`

|      % |  Size | Instances | Path                    |
| -----: | ----: | --------: | ----------------------- |
| 100.0% | 464 B |         1 | `GlobalObject ← <root>` |

##### `JSGlobalLexicalEnvironment`

|      % |  Size | Instances | Path                    |
| -----: | ----: | --------: | ----------------------- |
| 100.0% | 240 B |         1 | `GlobalObject ← <root>` |

##### `JSPropertyNameEnumerator`

|     % | Size | Instances | Path                                                          |
| ----: | ---: | --------: | ------------------------------------------------------------- |
| 38.7% | 82 B |         1 | `StructureRareData ← Structure ← <root>`                      |
| 38.7% | 82 B |         1 | `StructureRareData ← Structure ← FunctionExecutable ← <root>` |
| 22.6% | 48 B |         1 | `<root>`                                                      |

##### `StructureChain`

|     % | Size | Instances | Path                                                                  |
| ----: | ---: | --------: | --------------------------------------------------------------------- |
| 23.1% | 48 B |         3 | `Structure ← Structure ← <root>`                                      |
| 15.4% | 32 B |         2 | `Structure ← Structure ← Function ← <root>`                           |
|  7.7% | 16 B |         1 | `<root>`                                                              |
|  7.7% | 16 B |         1 | `Structure ← Object ← InternalModuleRegistry ← GlobalObject ← <root>` |
|  7.7% | 16 B |         1 | `Structure ← <root>`                                                  |

##### `Callee`

|      % | Size | Instances | Path                    |
| -----: | ---: | --------: | ----------------------- |
| 100.0% | 96 B |         3 | `GlobalObject ← <root>` |
|  33.3% | 32 B |         1 | `(GC root)`             |

##### `JSSourceCode`

|    % |  Size | Instances | Path        |
| ---: | ----: | --------: | ----------- |
| 0.0% | 128 B |         4 | `(GC root)` |

##### `ModuleProgramExecutable`

|    % |  Size | Instances | Path        |
| ---: | ----: | --------: | ----------- |
| 0.0% | 224 B |         2 | `(GC root)` |

##### `ModuleRecord`

|    % |     Size | Instances | Path        |
| ---: | -------: | --------: | ----------- |
| 0.0% | 27.7 KiB |         4 | `(GC root)` |

##### `ModuleProgramCodeBlock`

|    % |     Size | Instances | Path        |
| ---: | -------: | --------: | ----------- |
| 0.0% | 4.45 KiB |         1 | `(GC root)` |

##### `PromiseReaction`

|    % | Size | Instances | Path        |
| ---: | ---: | --------: | ----------- |
| 0.0% | 48 B |         1 | `(GC root)` |

##### `JSModuleEnvironment`

|    % |     Size | Instances | Path        |
| ---: | -------: | --------: | ----------- |
| 0.0% | 2.17 KiB |         4 | `(GC root)` |

## Largest strings

Strings ranked by bytes allocated for them.

### Categories

#### String

|     % |  Size | Path                                                                                                                                                    |
| ----: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <0.1% | 374 B | `.expanded_url Object ← [0] Array ← .urls Object ← .entities Object ← [42] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>` |
| <0.1% | 336 B | `.description Object ← .user Object ← [25] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>`                                 |
| <0.1% | 334 B | `.description Object ← .user Object ← .retweeted_status Object ← [12] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>`      |
| <0.1% | 334 B | `.description Object ← .user Object ← .retweeted_status Object ← [17] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>`      |
| <0.1% | 332 B | `.description Object ← .user Object ← [41] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>`                                 |
| <0.1% | 326 B | `.description Object ← .user Object ← [8] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>`                                  |
| <0.1% | 314 B | `.description Object ← .user Object ← [99] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>`                                 |
| <0.1% | 306 B | `.description Object ← .user Object ← [57] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>`                                 |
| <0.1% | 304 B | `.text Object ← [0] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>`                                                        |
| <0.1% | 304 B | `.description Object ← .user Object ← [6] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>`                                  |
| <0.1% | 298 B | `.text Object ← [8] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>`                                                        |
| <0.1% | 298 B | `.description Object ← .user Object ← [45] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>`                                 |
| <0.1% | 296 B | `.description Object ← .user Object ← .retweeted_status Object ← [4] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>`       |
| <0.1% | 296 B | `.text Object ← .retweeted_status Object ← [8] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>`                             |
| <0.1% | 296 B | `.text Object ← [10] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>`                                                       |
| <0.1% | 296 B | `.text Object ← .retweeted_status Object ← [10] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>`                            |
| <0.1% | 296 B | `.text Object ← [11] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>`                                                       |
| <0.1% | 296 B | `.text Object ← .retweeted_status Object ← [11] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>`                            |
| <0.1% | 296 B | `.text Object ← [13] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>`                                                       |
| <0.1% | 296 B | `.text Object ← .retweeted_status Object ← [13] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>`                            |

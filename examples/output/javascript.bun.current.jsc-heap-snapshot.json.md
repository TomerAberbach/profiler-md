# Heap snapshot

Allocated 1.53 MB across 16,649 nodes and 45,184 edges.

| Category |     % |    Size | Nodes |
| -------- | ----: | ------: | ----: |
| code     | 42.5% |  649 kB | 2,762 |
| string   | 23.9% |  364 kB | 6,250 |
| internal | 20.2% |  309 kB | 3,135 |
| object   |  6.6% |  100 kB | 1,400 |
| closure  |  4.4% | 66.7 kB | 1,813 |
| array    |  1.2% | 18.4 kB | 1,112 |
| unknown  |  1.0% | 15.3 kB |    34 |
| built-in |  0.1% | 1.48 kB |    47 |
| symbol   |  0.1% | 1.25 kB |    78 |
| native   | <0.1% |   699 B |    11 |
| regexp   | <0.1% |   352 B |     4 |
| bigint   | <0.1% |    50 B |     2 |
| number   | <0.1% |    34 B |     1 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

|     % |    Size | Instances | Constructor                  |
| ----: | ------: | --------: | ---------------------------- |
| 17.5% |  267 kB |       122 | `FunctionCodeBlock`          |
| 13.4% |  205 kB |     1,829 | `Structure`                  |
|  7.8% |  119 kB |       931 | `FunctionExecutable`         |
|  6.5% | 99.3 kB |     1,373 | `Object`                     |
|  6.1% | 93.1 kB |       121 | `UnlinkedFunctionCodeBlock`  |
|  5.8% | 88.8 kB |       925 | `UnlinkedFunctionExecutable` |
|  4.2% |   64 kB |     1,734 | `Function`                   |
|  3.4% | 52.2 kB |       653 | `NativeExecutable`           |
|  1.9% | 28.3 kB |         4 | `ModuleRecord`               |
|  1.2% | 18.8 kB |       391 | `PropertyTable`              |
|  1.2% | 17.6 kB |        10 | `Cell Butterfly`             |
|  1.1% | 17.3 kB |     1,077 | `Array`                      |
|  1.1% | 16.8 kB |       210 | `FunctionRareData`           |
|  0.8% |   13 kB |       170 | `JSLexicalEnvironment`       |
|  0.8% | 11.8 kB |       185 | `SymbolTable`                |
|  0.7% | 10.5 kB |         1 | `GlobalObject`               |
|  0.7% | 10.1 kB |       105 | `StructureRareData`          |
|  0.3% |  4.7 kB |       147 | `GetterSetter`               |
|  0.3% | 4.56 kB |         1 | `ModuleProgramCodeBlock`     |
|  0.2% | 2.34 kB |        70 | `AsyncFunction`              |

#### Instances

Instances ranked by contribution to each constructor's self size.

##### `FunctionCodeBlock`

|     % |    Size | Instances | Path                                                                                                                                                                         |
| ----: | ------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 46.6% |  125 kB |        19 | `FunctionExecutable ← <root>`                                                                                                                                                |
| 15.6% | 41.5 kB |         3 | `(GC root)`                                                                                                                                                                  |
|  2.8% | 7.58 kB |         1 | `FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← <root>`                                                              |
|  2.4% |  6.5 kB |         1 | `FunctionExecutable ← FunctionExecutable ← Function ← InternalModuleRegistry ← GlobalObject ← <root>`                                                                        |
|  1.0% | 2.64 kB |         1 | `FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← Function ← .requestInstantiate ModuleLoader ← GlobalObject ← <root>` |

##### `Structure`

|    % |    Size | Instances | Path                                                 |
| ---: | ------: | --------: | ---------------------------------------------------- |
| 2.5% | 5.04 kB |        45 | `<root>`                                             |
| 0.5% | 1.01 kB |         9 | `GlobalObject ← <root>`                              |
| 0.4% |   784 B |         7 | `(GC root)`                                          |
| 0.1% |   112 B |         1 | `JSGlobalLexicalEnvironment ← GlobalObject ← <root>` |
| 0.1% |   112 B |         1 | `Function ← GlobalObject ← <root>`                   |

##### `FunctionExecutable`

|    % |  Size | Instances | Path                        |
| ---: | ----: | --------: | --------------------------- |
| 0.4% | 512 B |         4 | `Function`                  |
| 0.1% | 128 B |         1 | `Function ← .every Array`   |
| 0.1% | 128 B |         1 | `Function ← .some Array`    |
| 0.1% | 128 B |         1 | `Function ← .filter Array`  |
| 0.1% | 128 B |         1 | `Function ← .flatMap Array` |

##### `Object`

|    % |    Size | Instances | Path                                                             |
| ---: | ------: | --------: | ---------------------------------------------------------------- |
| 1.2% | 1.23 kB |         5 | `InternalModuleRegistry ← GlobalObject ← <root>`                 |
| 1.1% | 1.08 kB |         2 | `<root>`                                                         |
| 1.1% | 1.07 kB |         5 | `(GC root)`                                                      |
| 0.2% |   225 B |         1 | `.versions Process ← GlobalObject ← <root>`                      |
| 0.2% |   160 B |         1 | `.win32 Object ← InternalModuleRegistry ← GlobalObject ← <root>` |

##### `UnlinkedFunctionCodeBlock`

|     % |    Size | Instances | Path                                                                             |
| ----: | ------: | --------: | -------------------------------------------------------------------------------- |
| 38.9% | 36.2 kB |        21 | `<root>`                                                                         |
| 12.2% | 11.4 kB |         5 | `(GC root)`                                                                      |
|  1.4% | 1.32 kB |         1 | `FunctionExecutable ← Function ← InternalModuleRegistry ← GlobalObject ← <root>` |
|  0.9% |   818 B |         1 | `InternalModuleRegistry ← GlobalObject ← <root>`                                 |
|  0.8% |   772 B |         1 | `FunctionExecutable ← Function ← <root>`                                         |

##### `UnlinkedFunctionExecutable`

|     % |    Size | Instances | Path                                                                                    |
| ----: | ------: | --------: | --------------------------------------------------------------------------------------- |
| 17.0% | 15.1 kB |       157 | `FunctionExecutable ← Function ← GlobalObject ← <root>`                                 |
|  8.9% | 7.87 kB |        82 | `<root>`                                                                                |
|  0.1% |    96 B |         1 | `FunctionExecutable ← Function ← .writableStreamAbortForBindings GlobalObject ← <root>` |
|  0.1% |    96 B |         1 | `FunctionExecutable ← Function ← .writableStreamClose GlobalObject ← <root>`            |
|  0.1% |    96 B |         1 | `FunctionExecutable ← Function ← .writableStreamCloseForBindings GlobalObject ← <root>` |

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

|      % |    Size | Instances | Path        |
| -----: | ------: | --------: | ----------- |
| 100.0% | 28.3 kB |         4 | `(GC root)` |

##### `PropertyTable`

|    % | Size | Instances | Path                                                                                              |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------- |
| 0.3% | 48 B |         1 | `Structure ← Function ← .DuplexSide JSLexicalEnvironment ← Function ← <root>`                     |
| 0.3% | 48 B |         1 | `Structure ← Object ← .prototype Function ← .DuplexSide JSLexicalEnvironment ← Function ← <root>` |
| 0.3% | 48 B |         1 | `(GC root)`                                                                                       |
| 0.3% | 48 B |         1 | `Structure ← Function ← GlobalObject ← <root>`                                                    |
| 0.3% | 48 B |         1 | `Structure ← Function ← <root>`                                                                   |

##### `Cell Butterfly`

|     % |    Size | Instances | Path                                                     |
| ----: | ------: | --------: | -------------------------------------------------------- |
| 93.5% | 16.4 kB |         1 | `Map ← .byId Object ← .__retained GlobalObject ← <root>` |
|  4.4% |   768 B |         6 | `(GC root)`                                              |
|  1.8% |   320 B |         1 | `Map ← .registry ModuleLoader ← GlobalObject ← <root>`   |
|  0.3% |    48 B |         2 | `<root>`                                                 |

##### `Array`

|    % |  Size | Instances | Path                                                                                                    |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------------------------- |
| 0.7% | 114 B |         4 | `(GC root)`                                                                                             |
| 0.3% |  48 B |         3 | `.customPromisifyArgs Function ← <root>`                                                                |
| 0.1% |  16 B |         1 | `.customPromisifyArgs Function ← .readv Object ← <root>`                                                |
| 0.1% |  16 B |         1 | `._preload_modules Process ← GlobalObject ← <root>`                                                     |
| 0.1% |  16 B |         1 | `.node_builtin_shareable_builtins Object ← .variables Object ← .config Process ← GlobalObject ← <root>` |

##### `FunctionRareData`

|    % | Size | Instances | Path                                                                                                                                                                                                                  |
| ---: | ---: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.5% | 80 B |         1 | `Function ← .Symbol.iterator Object ← .prototype Function ← <root>`                                                                                                                                                   |
| 0.5% | 80 B |         1 | `Function ← <root>`                                                                                                                                                                                                   |
| 0.5% | 80 B |         1 | `Function ← .Symbol.iterator Object ← .prototype Function ← .SafeStringIterator Object ← InternalModuleRegistry ← GlobalObject ← <root>`                                                                              |
| 0.5% | 80 B |         1 | `Function ← .SafeStringIterator Object ← InternalModuleRegistry ← GlobalObject ← <root>`                                                                                                                              |
| 0.5% | 80 B |         1 | `Function ← .Symbol.iterator Object ← .prototype Function ← .SafeIterator JSLexicalEnvironment ← Function ← .entries Object ← .prototype Function ← .SafeMap Object ← InternalModuleRegistry ← GlobalObject ← <root>` |

##### `JSLexicalEnvironment`

|     % |    Size | Instances | Path                                                  |
| ----: | ------: | --------: | ----------------------------------------------------- |
| 31.7% | 4.11 kB |        16 | `<root>`                                              |
|  6.2% |   800 B |         5 | `JSLexicalEnvironment ← <root>`                       |
|  4.6% |   592 B |         3 | `(GC root)`                                           |
|  1.2% |   160 B |         1 | `Function ← <root>`                                   |
|  0.6% |    80 B |         1 | `Function ← .FSWatcher JSLexicalEnvironment ← <root>` |

##### `SymbolTable`

|    % |  Size | Instances | Path                                                                                                                                                       |
| ---: | ----: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.2% | 256 B |         4 | `(GC root)`                                                                                                                                                |
| 1.1% | 128 B |         2 | `FunctionCodeBlock ← FunctionExecutable ← Function ← .loadAndEvaluateModule ModuleLoader ← GlobalObject ← <root>`                                          |
| 0.5% |  64 B |         1 | `GlobalObject ← <root>`                                                                                                                                    |
| 0.5% |  64 B |         1 | `JSGlobalLexicalEnvironment ← GlobalObject ← <root>`                                                                                                       |
| 0.5% |  64 B |         1 | `FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← Function ← .loadAndEvaluateModule ModuleLoader ← GlobalObject ← <root>` |

##### `GlobalObject`

|      % |    Size | Instances | Path     |
| -----: | ------: | --------: | -------- |
| 100.0% | 10.5 kB |         1 | `<root>` |

##### `StructureRareData`

|    % | Size | Instances | Path                                                 |
| ---: | ---: | --------: | ---------------------------------------------------- |
| 1.0% | 96 B |         1 | `Structure ← Map ← <root>`                           |
| 1.0% | 96 B |         1 | `Structure ← Array Iterator ← GlobalObject ← <root>` |
| 1.0% | 96 B |         1 | `Structure ← Array`                                  |
| 1.0% | 96 B |         1 | `Structure ← Map Iterator ← GlobalObject ← <root>`   |
| 1.0% | 96 B |         1 | `Structure ← Set Iterator ← GlobalObject ← <root>`   |

##### `GetterSetter`

|    % |  Size | Instances | Path                               |
| ---: | ----: | --------: | ---------------------------------- |
| 7.5% | 352 B |        11 | `(GC root)`                        |
| 2.7% | 128 B |         4 | `GlobalObject ← <root>`            |
| 0.7% |  32 B |         1 | `.__proto__ Object`                |
| 0.7% |  32 B |         1 | `.Symbol.species Function`         |
| 0.7% |  32 B |         1 | `.byteLength ArrayBuffer ← <root>` |

##### `ModuleProgramCodeBlock`

|      % |    Size | Instances | Path        |
| -----: | ------: | --------: | ----------- |
| 100.0% | 4.56 kB |         1 | `(GC root)` |

##### `AsyncFunction`

|    % | Size | Instances | Path                                                 |
| ---: | ---: | --------: | ---------------------------------------------------- |
| 2.2% | 51 B |         1 | `.constructor AsyncFunction ← GlobalObject ← <root>` |
| 1.5% | 34 B |         1 | `.access Object ← <root>`                            |
| 1.5% | 34 B |         1 | `<root>`                                             |
| 1.5% | 34 B |         1 | `.copyFile Object ← <root>`                          |
| 1.5% | 34 B |         1 | `.chown Object ← <root>`                             |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

|     % |    Size | Instances | Constructor                  |
| ----: | ------: | --------: | ---------------------------- |
| 82.9% | 1.27 MB |         1 | `GlobalObject`               |
| 40.5% |  618 kB |     1,373 | `Object`                     |
| 31.9% |  487 kB |       931 | `FunctionExecutable`         |
| 29.9% |  457 kB |     1,077 | `Array`                      |
| 19.0% |  291 kB |     1,734 | `Function`                   |
| 17.9% |  273 kB |       122 | `FunctionCodeBlock`          |
| 15.6% |  238 kB |     1,829 | `Structure`                  |
|  6.1% | 93.1 kB |       121 | `UnlinkedFunctionCodeBlock`  |
|  5.8% | 88.8 kB |       925 | `UnlinkedFunctionExecutable` |
|  3.4% | 52.2 kB |       653 | `NativeExecutable`           |
|  3.3% | 50.7 kB |         1 | `InternalModuleRegistry`     |
|  1.8% | 27.3 kB |       170 | `JSLexicalEnvironment`       |
|  1.5% | 22.9 kB |         1 | `ModuleLoader`               |
|  1.4% | 21.2 kB |       105 | `StructureRareData`          |
|  1.3% | 19.2 kB |         1 | `Process`                    |
|  1.2% | 18.6 kB |       391 | `PropertyTable`              |
|  1.2% | 17.9 kB |       210 | `FunctionRareData`           |
|  1.1% | 17.2 kB |        10 | `Map`                        |
|  1.1% | 16.9 kB |        10 | `Cell Butterfly`             |
|  1.1% | 16.2 kB |       147 | `GetterSetter`               |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `GlobalObject`

|      % |    Size | Instances | Path     |
| -----: | ------: | --------: | -------- |
| 100.0% | 1.27 MB |         1 | `<root>` |

##### `Object`

|     % |    Size | Instances | Path                                               |
| ----: | ------: | --------: | -------------------------------------------------- |
| 75.9% |  469 kB |         1 | `.__retained GlobalObject ← <root>`                |
| 73.2% |  452 kB |         1 | `.data Object ← .__retained GlobalObject ← <root>` |
|  5.2% | 31.9 kB |         2 | `InternalModuleRegistry ← GlobalObject ← <root>`   |
|  2.3% | 14.2 kB |         1 | `<root>`                                           |
|  1.8% |   11 kB |         1 | `(GC root)`                                        |

##### `FunctionExecutable`

|     % |    Size | Instances | Path                                                                             |
| ----: | ------: | --------: | -------------------------------------------------------------------------------- |
| 26.2% |  128 kB |         7 | `<root>`                                                                         |
| 12.5% | 60.9 kB |         2 | `(GC root)`                                                                      |
|  2.1% | 10.2 kB |         1 | `FunctionCodeBlock ← FunctionExecutable ← <root>`                                |
|  1.7% | 8.38 kB |         1 | `Function ← InternalModuleRegistry ← GlobalObject ← <root>`                      |
|  1.7% | 8.16 kB |         1 | `FunctionExecutable ← Function ← InternalModuleRegistry ← GlobalObject ← <root>` |

##### `Array`

|     % |    Size | Instances | Path                                                                                                                  |
| ----: | ------: | --------: | --------------------------------------------------------------------------------------------------------------------- |
| 98.5% |  450 kB |         1 | `.statuses Object ← .data Object ← .__retained GlobalObject ← <root>`                                                 |
|  1.1% | 4.81 kB |         1 | `(GC root)`                                                                                                           |
|  0.3% | 1.54 kB |         1 | `.media Object ← .entities Object ← [64] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>` |
|  0.2% | 1.11 kB |         1 | `.media Object ← .entities Object ← [98] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>` |
|  0.2% |  1.1 kB |         1 | `.media Object ← .entities Object ← [4] Array ← .statuses Object ← .data Object ← .__retained GlobalObject ← <root>`  |

##### `Function`

|    % |    Size | Instances | Path                                                               |
| ---: | ------: | --------: | ------------------------------------------------------------------ |
| 3.9% | 11.4 kB |         2 | `<root>`                                                           |
| 3.0% |  8.6 kB |         1 | `InternalModuleRegistry ← GlobalObject ← <root>`                   |
| 1.8% | 5.24 kB |         1 | `.SafeMap Object ← InternalModuleRegistry ← GlobalObject ← <root>` |
| 1.6% |  4.6 kB |         1 | `.requestInstantiate ModuleLoader ← GlobalObject ← <root>`         |
| 1.4% |    4 kB |         1 | `.requestSatisfyUtil ModuleLoader ← GlobalObject ← <root>`         |

##### `FunctionCodeBlock`

|     % |    Size | Instances | Path                                                                                                            |
| ----: | ------: | --------: | --------------------------------------------------------------------------------------------------------------- |
| 32.1% | 87.7 kB |         6 | `FunctionExecutable ← <root>`                                                                                   |
| 16.1% |   44 kB |         2 | `(GC root)`                                                                                                     |
|  3.7% | 10.1 kB |         1 | `FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← <root>`                                          |
|  2.8% | 7.58 kB |         1 | `FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← <root>` |
|  2.4% |  6.5 kB |         1 | `FunctionExecutable ← FunctionExecutable ← Function ← InternalModuleRegistry ← GlobalObject ← <root>`           |

##### `Structure`

|    % |    Size | Instances | Path                                                                             |
| ---: | ------: | --------: | -------------------------------------------------------------------------------- |
| 3.5% | 8.45 kB |         1 | `Object ← GlobalObject ← <root>`                                                 |
| 3.5% | 8.29 kB |         1 | `Structure ← Object ← GlobalObject ← <root>`                                     |
| 3.4% | 8.18 kB |         1 | `Structure ← Structure ← Object ← GlobalObject ← <root>`                         |
| 3.4% | 8.06 kB |         1 | `Structure ← Structure ← Structure ← Object ← GlobalObject ← <root>`             |
| 3.3% | 7.95 kB |         1 | `Structure ← Structure ← Structure ← Structure ← Object ← GlobalObject ← <root>` |

##### `UnlinkedFunctionCodeBlock`

|     % |    Size | Instances | Path                                                                             |
| ----: | ------: | --------: | -------------------------------------------------------------------------------- |
| 38.9% | 36.2 kB |        21 | `<root>`                                                                         |
| 12.2% | 11.4 kB |         5 | `(GC root)`                                                                      |
|  1.4% | 1.32 kB |         1 | `FunctionExecutable ← Function ← InternalModuleRegistry ← GlobalObject ← <root>` |
|  0.9% |   818 B |         1 | `InternalModuleRegistry ← GlobalObject ← <root>`                                 |
|  0.8% |   772 B |         1 | `FunctionExecutable ← Function ← <root>`                                         |

##### `UnlinkedFunctionExecutable`

|     % |    Size | Instances | Path                                                                                    |
| ----: | ------: | --------: | --------------------------------------------------------------------------------------- |
| 17.0% | 15.1 kB |       157 | `FunctionExecutable ← Function ← GlobalObject ← <root>`                                 |
|  8.9% | 7.87 kB |        82 | `<root>`                                                                                |
|  0.1% |    96 B |         1 | `FunctionExecutable ← Function ← .writableStreamAbortForBindings GlobalObject ← <root>` |
|  0.1% |    96 B |         1 | `FunctionExecutable ← Function ← .writableStreamClose GlobalObject ← <root>`            |
|  0.1% |    96 B |         1 | `FunctionExecutable ← Function ← .writableStreamCloseForBindings GlobalObject ← <root>` |

##### `NativeExecutable`

|    % |  Size | Instances | Path                                      |
| ---: | ----: | --------: | ----------------------------------------- |
| 0.6% | 320 B |         4 | `Function`                                |
| 0.2% |  80 B |         1 | `<root>`                                  |
| 0.2% |  80 B |         1 | `Function ← .toString Function`           |
| 0.2% |  80 B |         1 | `Function ← .toLocaleString Object`       |
| 0.2% |  80 B |         1 | `Function ← .propertyIsEnumerable Object` |

##### `InternalModuleRegistry`

|      % |    Size | Instances | Path                    |
| -----: | ------: | --------: | ----------------------- |
| 100.0% | 50.7 kB |         1 | `GlobalObject ← <root>` |

##### `JSLexicalEnvironment`

|     % |    Size | Instances | Path                                                                                                                  |
| ----: | ------: | --------: | --------------------------------------------------------------------------------------------------------------------- |
| 31.7% | 8.64 kB |         6 | `<root>`                                                                                                              |
|  6.4% | 1.73 kB |         1 | `Function ← <root>`                                                                                                   |
|  4.7% | 1.29 kB |         1 | `(GC root)`                                                                                                           |
|  2.3% |   630 B |         1 | `Function ← .entries Object ← .prototype Function ← .SafeMap Object ← InternalModuleRegistry ← GlobalObject ← <root>` |
|  2.3% |   630 B |         1 | `Function ← .keys Object ← .prototype Function ← .SafeMap Object ← InternalModuleRegistry ← GlobalObject ← <root>`    |

##### `ModuleLoader`

|      % |    Size | Instances | Path                    |
| -----: | ------: | --------: | ----------------------- |
| 100.0% | 22.9 kB |         1 | `GlobalObject ← <root>` |

##### `StructureRareData`

|     % |    Size | Instances | Path                                                                                                                              |
| ----: | ------: | --------: | --------------------------------------------------------------------------------------------------------------------------------- |
| 18.1% | 3.84 kB |         1 | `Structure ← ReadStream ← <root>`                                                                                                 |
| 17.2% | 3.63 kB |         1 | `Structure ← StructureRareData ← Structure ← ReadStream ← <root>`                                                                 |
| 16.2% | 3.42 kB |         1 | `Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← ReadStream ← <root>`                                 |
| 15.6% |  3.3 kB |         1 | `Structure ← <root>`                                                                                                              |
| 15.2% | 3.22 kB |         1 | `Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← ReadStream ← <root>` |

##### `Process`

|      % |    Size | Instances | Path                    |
| -----: | ------: | --------: | ----------------------- |
| 100.0% | 19.2 kB |         1 | `GlobalObject ← <root>` |

##### `PropertyTable`

|    % | Size | Instances | Path                                                                                              |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------- |
| 0.3% | 48 B |         1 | `Structure ← Function ← .DuplexSide JSLexicalEnvironment ← Function ← <root>`                     |
| 0.3% | 48 B |         1 | `Structure ← Object ← .prototype Function ← .DuplexSide JSLexicalEnvironment ← Function ← <root>` |
| 0.3% | 48 B |         1 | `(GC root)`                                                                                       |
| 0.3% | 48 B |         1 | `Structure ← Function ← GlobalObject ← <root>`                                                    |
| 0.3% | 48 B |         1 | `Structure ← Function ← <root>`                                                                   |

##### `FunctionRareData`

|    % |    Size | Instances | Path                                                                                                                                                                                                                  |
| ---: | ------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7.4% | 1.32 kB |         3 | `Function ← <root>`                                                                                                                                                                                                   |
| 0.4% |    80 B |         1 | `Function ← .Symbol.iterator Object ← .prototype Function ← <root>`                                                                                                                                                   |
| 0.4% |    80 B |         1 | `Function ← .Symbol.iterator Object ← .prototype Function ← .SafeStringIterator Object ← InternalModuleRegistry ← GlobalObject ← <root>`                                                                              |
| 0.4% |    80 B |         1 | `Function ← .SafeStringIterator Object ← InternalModuleRegistry ← GlobalObject ← <root>`                                                                                                                              |
| 0.4% |    80 B |         1 | `Function ← .Symbol.iterator Object ← .prototype Function ← .SafeIterator JSLexicalEnvironment ← Function ← .entries Object ← .prototype Function ← .SafeMap Object ← InternalModuleRegistry ← GlobalObject ← <root>` |

##### `Map`

|     % |    Size | Instances | Path                                               |
| ----: | ------: | --------: | -------------------------------------------------- |
| 95.5% | 16.5 kB |         1 | `.byId Object ← .__retained GlobalObject ← <root>` |
|  2.0% |   352 B |         1 | `.registry ModuleLoader ← GlobalObject ← <root>`   |
|  1.9% |   329 B |         1 | `<root>`                                           |
|  0.2% |    32 B |         1 | `GlobalObject ← <root>`                            |
|  0.2% |    32 B |         1 | `(GC root)`                                        |

##### `Cell Butterfly`

|     % |    Size | Instances | Path                                                     |
| ----: | ------: | --------: | -------------------------------------------------------- |
| 97.1% | 16.4 kB |         1 | `Map ← .byId Object ← .__retained GlobalObject ← <root>` |
|  4.5% |   768 B |         6 | `(GC root)`                                              |
|  1.9% |   320 B |         1 | `Map ← .registry ModuleLoader ← GlobalObject ← <root>`   |
|  0.3% |    48 B |         2 | `<root>`                                                 |

##### `GetterSetter`

|    % |  Size | Instances | Path                                                                                                                          |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------- |
| 1.9% | 306 B |         1 | `.__proto__ Object`                                                                                                           |
| 1.8% | 296 B |         1 | `.self GlobalObject ← <root>`                                                                                                 |
| 1.8% | 288 B |         1 | `.locked ReadableStream`                                                                                                      |
| 1.1% | 176 B |         1 | `.constructor Object ← .homeObject Function ← <root>`                                                                         |
| 1.1% | 176 B |         1 | `.constructor Object ← .homeObject Function ← .ExceptionWithHostPort Object ← InternalModuleRegistry ← GlobalObject ← <root>` |

## Largest strings

Strings ranked by bytes allocated for them.

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

# Heap snapshot

Allocated 1.46 MiB across 16,649 nodes and 45,184 edges.

| Category |     % |     Size | Nodes |
| -------- | ----: | -------: | ----: |
| code     | 42.5% |  634 KiB | 2,762 |
| string   | 23.9% |  356 KiB | 6,250 |
| internal | 20.2% |  302 KiB | 3,135 |
| object   |  6.6% | 97.9 KiB | 1,400 |
| closure  |  4.4% | 65.1 KiB | 1,813 |
| array    |  1.2% |   18 KiB | 1,112 |
| unknown  |  1.0% | 14.9 KiB |    34 |
| built-in |  0.1% | 1.45 KiB |    47 |
| symbol   |  0.1% | 1.22 KiB |    78 |
| native   | <0.1% |    699 B |    11 |
| regexp   | <0.1% |    352 B |     4 |
| bigint   | <0.1% |     50 B |     2 |
| number   | <0.1% |     34 B |     1 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

|     % |     Size | Instances | Constructor                  |
| ----: | -------: | --------: | ---------------------------- |
| 17.5% |  261 KiB |       122 | `FunctionCodeBlock`          |
| 13.4% |  200 KiB |     1,829 | `Structure`                  |
|  7.8% |  116 KiB |       931 | `FunctionExecutable`         |
|  6.5% | 96.9 KiB |     1,373 | `Object`                     |
|  6.1% | 90.9 KiB |       121 | `UnlinkedFunctionCodeBlock`  |
|  5.8% | 86.7 KiB |       925 | `UnlinkedFunctionExecutable` |
|  4.2% | 62.5 KiB |     1,734 | `Function`                   |
|  3.4% |   51 KiB |       653 | `NativeExecutable`           |
|  1.9% | 27.7 KiB |         4 | `ModuleRecord`               |
|  1.2% | 18.3 KiB |       391 | `PropertyTable`              |
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

#### Instances

Instances ranked by contribution to each constructor's self size.

##### `FunctionCodeBlock`

|     % |     Size | Instances | Path                                                                                                                                                                         |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 46.6% |  122 KiB |        19 | `FunctionExecutable ← <root>`                                                                                                                                                |
| 15.6% | 40.6 KiB |         3 | `(GC root)`                                                                                                                                                                  |
|  2.8% |  7.4 KiB |         1 | `FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← <root>`                                                              |
|  2.4% | 6.35 KiB |         1 | `FunctionExecutable ← FunctionExecutable ← Function ← InternalModuleRegistry ← GlobalObject ← <root>`                                                                        |
|  1.0% | 2.58 KiB |         1 | `FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← Function ← .requestInstantiate ModuleLoader ← GlobalObject ← <root>` |

##### `Structure`

|    % |     Size | Instances | Path                                                 |
| ---: | -------: | --------: | ---------------------------------------------------- |
| 2.5% | 4.92 KiB |        45 | `<root>`                                             |
| 0.5% |   1008 B |         9 | `GlobalObject ← <root>`                              |
| 0.4% |    784 B |         7 | `(GC root)`                                          |
| 0.1% |    112 B |         1 | `JSGlobalLexicalEnvironment ← GlobalObject ← <root>` |
| 0.1% |    112 B |         1 | `Function ← GlobalObject ← <root>`                   |

##### `FunctionExecutable`

|    % |  Size | Instances | Path                        |
| ---: | ----: | --------: | --------------------------- |
| 0.4% | 512 B |         4 | `Function`                  |
| 0.1% | 128 B |         1 | `Function ← .every Array`   |
| 0.1% | 128 B |         1 | `Function ← .some Array`    |
| 0.1% | 128 B |         1 | `Function ← .filter Array`  |
| 0.1% | 128 B |         1 | `Function ← .flatMap Array` |

##### `Object`

|    % |     Size | Instances | Path                                                             |
| ---: | -------: | --------: | ---------------------------------------------------------------- |
| 1.2% |  1.2 KiB |         5 | `InternalModuleRegistry ← GlobalObject ← <root>`                 |
| 1.1% | 1.06 KiB |         2 | `<root>`                                                         |
| 1.1% | 1.05 KiB |         5 | `(GC root)`                                                      |
| 0.2% |    225 B |         1 | `.versions Process ← GlobalObject ← <root>`                      |
| 0.2% |    160 B |         1 | `.win32 Object ← InternalModuleRegistry ← GlobalObject ← <root>` |

##### `UnlinkedFunctionCodeBlock`

|     % |     Size | Instances | Path                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------- |
| 38.9% | 35.4 KiB |        21 | `<root>`                                                                         |
| 12.2% | 11.1 KiB |         5 | `(GC root)`                                                                      |
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

|     % |     Size | Instances | Path                                                  |
| ----: | -------: | --------: | ----------------------------------------------------- |
| 31.7% | 4.02 KiB |        16 | `<root>`                                              |
|  6.2% |    800 B |         5 | `JSLexicalEnvironment ← <root>`                       |
|  4.6% |    592 B |         3 | `(GC root)`                                           |
|  1.2% |    160 B |         1 | `Function ← <root>`                                   |
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

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

|     % |     Size | Instances | Constructor                  |
| ----: | -------: | --------: | ---------------------------- |
| 82.9% | 1.21 MiB |         1 | `GlobalObject`               |
| 40.5% |  603 KiB |     1,373 | `Object`                     |
| 31.9% |  476 KiB |       931 | `FunctionExecutable`         |
| 29.9% |  446 KiB |     1,077 | `Array`                      |
| 19.0% |  284 KiB |     1,734 | `Function`                   |
| 17.9% |  267 KiB |       122 | `FunctionCodeBlock`          |
| 15.6% |  232 KiB |     1,829 | `Structure`                  |
|  6.1% | 90.9 KiB |       121 | `UnlinkedFunctionCodeBlock`  |
|  5.8% | 86.7 KiB |       925 | `UnlinkedFunctionExecutable` |
|  3.4% | 50.9 KiB |       653 | `NativeExecutable`           |
|  3.3% | 49.5 KiB |         1 | `InternalModuleRegistry`     |
|  1.8% | 26.6 KiB |       170 | `JSLexicalEnvironment`       |
|  1.5% | 22.4 KiB |         1 | `ModuleLoader`               |
|  1.4% | 20.7 KiB |       105 | `StructureRareData`          |
|  1.3% | 18.8 KiB |         1 | `Process`                    |
|  1.2% | 18.2 KiB |       391 | `PropertyTable`              |
|  1.2% | 17.5 KiB |       210 | `FunctionRareData`           |
|  1.1% | 16.8 KiB |        10 | `Map`                        |
|  1.1% | 16.5 KiB |        10 | `Cell Butterfly`             |
|  1.1% | 15.8 KiB |       147 | `GetterSetter`               |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `GlobalObject`

|      % |     Size | Instances | Path     |
| -----: | -------: | --------: | -------- |
| 100.0% | 1.21 MiB |         1 | `<root>` |

##### `Object`

|     % |     Size | Instances | Path                                               |
| ----: | -------: | --------: | -------------------------------------------------- |
| 75.9% |  458 KiB |         1 | `.__retained GlobalObject ← <root>`                |
| 73.2% |  442 KiB |         1 | `.data Object ← .__retained GlobalObject ← <root>` |
|  5.2% | 31.1 KiB |         2 | `InternalModuleRegistry ← GlobalObject ← <root>`   |
|  2.3% | 13.8 KiB |         1 | `<root>`                                           |
|  1.8% | 10.7 KiB |         1 | `(GC root)`                                        |

##### `FunctionExecutable`

|     % |     Size | Instances | Path                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------- |
| 26.2% |  125 KiB |         7 | `<root>`                                                                         |
| 12.5% | 59.5 KiB |         2 | `(GC root)`                                                                      |
|  2.1% | 9.98 KiB |         1 | `FunctionCodeBlock ← FunctionExecutable ← <root>`                                |
|  1.7% | 8.18 KiB |         1 | `Function ← InternalModuleRegistry ← GlobalObject ← <root>`                      |
|  1.7% | 7.96 KiB |         1 | `FunctionExecutable ← Function ← InternalModuleRegistry ← GlobalObject ← <root>` |

##### `Array`

|     % |     Size | Instances | Path                                                                                                                  |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------- |
| 98.5% |  440 KiB |         1 | `.statuses Object ← .data Object ← .__retained GlobalObject ← <root>`                                                 |
|  1.1% | 4.69 KiB |         1 | `(GC root)`                                                                                                           |
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
| 32.1% | 85.6 KiB |         6 | `FunctionExecutable ← <root>`                                                                                   |
| 16.1% |   43 KiB |         2 | `(GC root)`                                                                                                     |
|  3.7% | 9.85 KiB |         1 | `FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← <root>`                                          |
|  2.8% |  7.4 KiB |         1 | `FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← <root>` |
|  2.4% | 6.35 KiB |         1 | `FunctionExecutable ← FunctionExecutable ← Function ← InternalModuleRegistry ← GlobalObject ← <root>`           |

##### `Structure`

|    % |     Size | Instances | Path                                                                             |
| ---: | -------: | --------: | -------------------------------------------------------------------------------- |
| 3.5% | 8.25 KiB |         1 | `Object ← GlobalObject ← <root>`                                                 |
| 3.5% | 8.09 KiB |         1 | `Structure ← Object ← GlobalObject ← <root>`                                     |
| 3.4% | 7.98 KiB |         1 | `Structure ← Structure ← Object ← GlobalObject ← <root>`                         |
| 3.4% | 7.88 KiB |         1 | `Structure ← Structure ← Structure ← Object ← GlobalObject ← <root>`             |
| 3.3% | 7.77 KiB |         1 | `Structure ← Structure ← Structure ← Structure ← Object ← GlobalObject ← <root>` |

##### `UnlinkedFunctionCodeBlock`

|     % |     Size | Instances | Path                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------- |
| 38.9% | 35.4 KiB |        21 | `<root>`                                                                         |
| 12.2% | 11.1 KiB |         5 | `(GC root)`                                                                      |
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
| 31.7% | 8.44 KiB |         6 | `<root>`                                                                                                              |
|  6.4% | 1.69 KiB |         1 | `Function ← <root>`                                                                                                   |
|  4.7% | 1.26 KiB |         1 | `(GC root)`                                                                                                           |
|  2.3% |    630 B |         1 | `Function ← .entries Object ← .prototype Function ← .SafeMap Object ← InternalModuleRegistry ← GlobalObject ← <root>` |
|  2.3% |    630 B |         1 | `Function ← .keys Object ← .prototype Function ← .SafeMap Object ← InternalModuleRegistry ← GlobalObject ← <root>`    |

##### `ModuleLoader`

|      % |     Size | Instances | Path                    |
| -----: | -------: | --------: | ----------------------- |
| 100.0% | 22.4 KiB |         1 | `GlobalObject ← <root>` |

##### `StructureRareData`

|     % |     Size | Instances | Path                                                                                                                              |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------- |
| 18.1% | 3.75 KiB |         1 | `Structure ← ReadStream ← <root>`                                                                                                 |
| 17.2% | 3.55 KiB |         1 | `Structure ← StructureRareData ← Structure ← ReadStream ← <root>`                                                                 |
| 16.2% | 3.34 KiB |         1 | `Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← ReadStream ← <root>`                                 |
| 15.6% | 3.22 KiB |         1 | `Structure ← <root>`                                                                                                              |
| 15.2% | 3.14 KiB |         1 | `Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← ReadStream ← <root>` |

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

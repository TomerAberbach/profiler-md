# Heap snapshot

Allocated 1.53 MB across 16,635 nodes and 45,015 edges.

| Category |     % |    Size | Nodes |
| -------- | ----: | ------: | ----: |
| code     | 42.6% |  649 kB | 2,762 |
| string   | 23.9% |  364 kB | 6,250 |
| internal | 20.1% |  307 kB | 3,121 |
| object   |  6.6% |  100 kB | 1,400 |
| closure  |  4.4% | 66.7 kB | 1,813 |
| array    |  1.2% | 18.4 kB | 1,112 |
| unknown  |  1.0% | 15.3 kB |    34 |
| built-in |  0.1% | 1.48 kB |    47 |
| symbol   |  0.1% | 1.25 kB |    78 |
| native   |  0.0% |   699 B |    11 |
| regexp   |  0.0% |   352 B |     4 |
| bigint   |  0.0% |    50 B |     2 |
| number   |  0.0% |    34 B |     1 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

|     % |    Size | Instances | Constructor                  |
| ----: | ------: | --------: | ---------------------------- |
| 17.5% |  267 kB |       122 | `FunctionCodeBlock`          |
| 13.3% |  203 kB |     1,816 | `Structure`                  |
|  7.8% |  119 kB |       931 | `FunctionExecutable`         |
|  6.5% | 99.3 kB |     1,373 | `Object`                     |
|  6.1% | 93.1 kB |       121 | `UnlinkedFunctionCodeBlock`  |
|  5.8% | 88.8 kB |       925 | `UnlinkedFunctionExecutable` |
|  4.2% |   64 kB |     1,734 | `Function`                   |
|  3.4% | 52.2 kB |       653 | `NativeExecutable`           |
|  1.9% | 28.3 kB |         4 | `ModuleRecord`               |
|  1.2% | 18.7 kB |       390 | `PropertyTable`              |
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

|     % |    Size | Instances | Path                                                                                                                                                                                                                                                                                                        |
| ----: | ------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17.3% | 46.2 kB |         2 | `(GC root)`                                                                                                                                                                                                                                                                                                 |
|  6.0% | 15.9 kB |         1 | `.statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                                                                     |
|  5.6% | 14.9 kB |         1 | `.writableStreamStartErroring FunctionCodeBlock ← .toLocaleLowerCase Function ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                          |
|  3.8% | 10.2 kB |         1 | `.writableStreamStartErroring FunctionCodeBlock ← .writableStreamStartErroring FunctionCodeBlock ← .writableStreamStartErroring FunctionCodeBlock ← .writableStreamStartErroring FunctionCodeBlock ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |
|  3.7% | 9.95 kB |         1 | `.writableStreamStartErroring FunctionCodeBlock ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                    |

##### `Structure`

|    % |  Size | Instances | Path                                                                                                                                                                                                        |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.1% | 112 B |         1 | `.entities string ← [54] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                                                 |
| 0.1% | 112 B |         1 | `.user_mentions Structure ← .entities string ← [54] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                      |
| 0.1% | 112 B |         1 | `[0] Structure ← .user_mentions Structure ← .entities string ← [54] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                      |
| 0.1% | 112 B |         1 | `.indices Structure ← [0] Structure ← .user_mentions Structure ← .entities string ← [54] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |
| 0.1% | 112 B |         1 | `.id_str Structure ← [0] Structure ← .user_mentions Structure ← .entities string ← [54] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`  |

##### `FunctionExecutable`

|    % |  Size | Instances | Path                                                                                    |
| ---: | ----: | --------: | --------------------------------------------------------------------------------------- |
| 0.3% | 384 B |         3 | `.writableStreamStartErroring <root>`                                                   |
| 0.2% | 256 B |         2 | `.writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring <root>` |
| 0.1% | 128 B |         1 | `.writableStreamStartErroring Function ← .writableStreamStartErroring <root>`           |
| 0.1% | 128 B |         1 | `.name Function ← .writableStreamStartErroring <root>`                                  |
| 0.1% | 128 B |         1 | `.name FunctionExecutable ← .writableStreamStartErroring <root>`                        |

##### `Object`

|    % |  Size | Instances | Path                                                                                                                                                                                                               |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0.7% | 652 B |         1 | `.name Function ← .user Function ← [79] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                                         |
| 0.4% | 432 B |         1 | `.writableStreamStartErroring Object ← .writableStreamStartErroring <root>`                                                                                                                                        |
| 0.4% | 432 B |         1 | `.user_mentions JSLexicalEnvironment ← .entities UnlinkedFunctionExecutable ← [93] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`              |
| 0.4% | 432 B |         1 | `[0] Object ← .user_mentions JSLexicalEnvironment ← .entities UnlinkedFunctionExecutable ← [93] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |
| 0.3% | 256 B |         1 | `.kDefaultEncodingValue Array ← .writableStreamStartErroring <root>`                                                                                                                                               |

##### `UnlinkedFunctionCodeBlock`

|    % |    Size | Instances | Path                                                                                                                                                                                                                              |
| ---: | ------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.1% | 5.67 kB |         1 | `.writableStreamStartErroring Object ← .homeObject SymbolTable ← .StatWatcher SymbolTable ← .writableStreamStartErroring <root>`                                                                                                  |
| 4.8% |  4.5 kB |         1 | `.writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                               |
| 4.0% |  3.7 kB |         1 | `.time_zone UnlinkedFunctionCodeBlock ← .user UnlinkedFunctionCodeBlock ← .retweeted_status SymbolTable ← [98] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |
| 3.8% | 3.53 kB |         1 | `.user UnlinkedFunctionCodeBlock ← .retweeted_status SymbolTable ← [98] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                        |
| 2.8% | 2.56 kB |         1 | `.writableStreamStartErroring UnlinkedFunctionCodeBlock ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                                                                                      |

##### `UnlinkedFunctionExecutable`

|    % |  Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.6% | 576 B |         6 | `.writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.1% |  96 B |         1 | `.writableStreamStartErroring ReadableStream ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.1% |  96 B |         1 | `.writableStreamStartErroring UnlinkedFunctionExecutable ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.1% |  96 B |         1 | `.writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>` |
| 0.1% |  96 B |         1 | `.writableStreamStartErroring PropertyTable ← .assert FunctionExecutable ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

##### `Function`

|    % | Size | Instances | Path                                                                                                                                      |
| ---: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 0.2% | 98 B |         1 | `(GC root)`                                                                                                                               |
| 0.2% | 97 B |         1 | `.writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                                                       |
| 0.2% | 97 B |         1 | `.isStringObject Array ← .writableStreamStartErroring <root>`                                                                             |
| 0.2% | 97 B |         1 | `.text Function ← [92] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |
| 0.2% | 97 B |         1 | `.writableStreamStartErroring Function ← .isStringObject Array ← .writableStreamStartErroring <root>`                                     |

##### `NativeExecutable`

|    % | Size | Instances | Path                                                                                                                                                                                                         |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0.2% | 80 B |         1 | `.writableStreamStartErroring JSSourceCode ← .writableStreamStartErroring <root>`                                                                                                                            |
| 0.2% | 80 B |         1 | `.name JSGlobalLexicalEnvironment ← .cp GetterSetter ← .writableStreamStartErroring CustomGetterSetter ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                  |
| 0.2% | 80 B |         1 | `.cpSync GetterSetter ← .writableStreamStartErroring CustomGetterSetter ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                                                 |
| 0.2% | 80 B |         1 | `.writableStreamStartErroring NativeExecutable ← .cpSync GetterSetter ← .writableStreamStartErroring CustomGetterSetter ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>` |
| 0.2% | 80 B |         1 | `.name NativeExecutable ← .cpSync GetterSetter ← .writableStreamStartErroring CustomGetterSetter ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                        |

##### `ModuleRecord`

|     % |    Size | Instances | Path                                  |
| ----: | ------: | --------: | ------------------------------------- |
| 94.4% | 26.7 kB |         3 | `(GC root)`                           |
|  5.6% | 1.58 kB |         1 | `.writableStreamStartErroring <root>` |

##### `PropertyTable`

|    % |  Size | Instances | Path                                                                                  |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------- |
| 1.0% | 192 B |         4 | `.writableStreamStartErroring <root>`                                                 |
| 0.3% |  48 B |         1 | `(GC root)`                                                                           |
| 0.3% |  48 B |         1 | `.flush StructureChain ← .writableStreamStartErroring <root>`                         |
| 0.3% |  48 B |         1 | `.name PropertyTable ← .flush StructureChain ← .writableStreamStartErroring <root>`   |
| 0.3% |  48 B |         1 | `.writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring <root>` |

##### `Cell Butterfly`

|     % |    Size | Instances | Path                                                                                                                                                               |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 93.5% | 16.4 kB |         1 | `.lang string ← .retweeted_status string ← [54] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |
|  1.8% |   320 B |         1 | `.stop Object ← .homeObject SymbolTable ← .StatWatcher SymbolTable ← .writableStreamStartErroring <root>`                                                          |
|  1.8% |   320 B |         1 | `.ref Object ← .homeObject SymbolTable ← .StatWatcher SymbolTable ← .writableStreamStartErroring <root>`                                                           |
|  1.8% |   320 B |         1 | `.writableStreamStartErroring JSLexicalEnvironment ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                            |
|  0.2% |    32 B |         1 | `.name UnlinkedFunctionExecutable ← .toString UnlinkedFunctionExecutable ← .writableStreamStartErroring <root>`                                                    |

##### `Array`

|    % | Size | Instances | Path                                                                                                                                                                                                                                                                                                                                |
| ---: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.5% | 82 B |         2 | `.writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                               |
| 0.1% | 16 B |         1 | `.type UnlinkedFunctionCodeBlock ← [0] UnlinkedFunctionCodeBlock ← .media UnlinkedFunctionCodeBlock ← .entities UnlinkedFunctionCodeBlock ← .retweeted_status SymbolTable ← [98] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                 |
| 0.1% | 16 B |         1 | `.sizes UnlinkedFunctionCodeBlock ← [0] UnlinkedFunctionCodeBlock ← .media UnlinkedFunctionCodeBlock ← .entities UnlinkedFunctionCodeBlock ← .retweeted_status SymbolTable ← [98] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                |
| 0.1% | 16 B |         1 | `.small Array ← .sizes UnlinkedFunctionCodeBlock ← [0] UnlinkedFunctionCodeBlock ← .media UnlinkedFunctionCodeBlock ← .entities UnlinkedFunctionCodeBlock ← .retweeted_status SymbolTable ← [98] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                 |
| 0.1% | 16 B |         1 | `.resize Array ← .small Array ← .sizes UnlinkedFunctionCodeBlock ← [0] UnlinkedFunctionCodeBlock ← .media UnlinkedFunctionCodeBlock ← .entities UnlinkedFunctionCodeBlock ← .retweeted_status SymbolTable ← [98] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |

##### `FunctionRareData`

|    % |  Size | Instances | Path                                                                                  |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------- |
| 1.4% | 240 B |         3 | `.writableStreamStartErroring <root>`                                                 |
| 1.0% | 160 B |         2 | `.writableStreamStartErroring FunctionRareData ← .writableStreamStartErroring <root>` |
| 0.5% |  80 B |         1 | `.writableStreamStartErroring RegExp ← .writableStreamStartErroring <root>`           |
| 0.5% |  80 B |         1 | `.name RegExp ← .writableStreamStartErroring <root>`                                  |
| 0.5% |  80 B |         1 | `.name FunctionRareData ← .writableStreamStartErroring <root>`                        |

##### `JSLexicalEnvironment`

|    % |  Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---: | ----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.8% | 880 B |         1 | `.writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring <root>` |
| 4.7% | 608 B |         1 | `.writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3.3% | 432 B |         1 | `.isGeneratorFunction Array ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 3.3% | 432 B |         1 | `.name Object ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2.5% | 320 B |         1 | `.created_at FunctionExecutable ← .user FunctionExecutable ← .retweeted_status Function ← [79] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

##### `SymbolTable`

|    % | Size | Instances | Path                                                                                                                                                                                                               |
| ---: | ---: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0.5% | 64 B |         1 | `.writableStreamStartErroring <root>`                                                                                                                                                                              |
| 0.5% | 64 B |         1 | `.writableStreamStartErroring JSGlobalLexicalEnvironment ← .cp GetterSetter ← .writableStreamStartErroring CustomGetterSetter ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>` |
| 0.5% | 64 B |         1 | `.name NativeExecutable ← .exists GetterSetter ← .writableStreamStartErroring CustomGetterSetter ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                              |
| 0.5% | 64 B |         1 | `.existsSync GetterSetter ← .writableStreamStartErroring CustomGetterSetter ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                                                   |
| 0.5% | 64 B |         1 | `.writableStreamStartErroring SymbolTable ← .existsSync GetterSetter ← .writableStreamStartErroring CustomGetterSetter ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`        |

##### `GlobalObject`

|      % |    Size | Instances | Path                                                                                                                                                                                  |
| -----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 10.5 kB |         1 | `.writableStreamStartErroring Cell Butterfly ← .writableStreamStartErroring JSLexicalEnvironment ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>` |

##### `StructureRareData`

|     % |    Size | Instances | Path                                                                                                           |
| ----: | ------: | --------: | -------------------------------------------------------------------------------------------------------------- |
| 11.4% | 1.15 kB |        12 | `.writableStreamStartErroring <root>`                                                                          |
|  1.0% |    96 B |         1 | `.name UnlinkedFunctionExecutable ← .writableStreamStartErroring <root>`                                       |
|  1.0% |    96 B |         1 | `.ArrayPrototypeForEach symbol ← .writableStreamStartErroring <root>`                                          |
|  1.0% |    96 B |         1 | `.setFromBase64 symbol ← .writableStreamStartErroring <root>`                                                  |
|  1.0% |    96 B |         1 | `.writableStreamStartErroring StructureRareData ← .setFromBase64 symbol ← .writableStreamStartErroring <root>` |

##### `GetterSetter`

|    % |  Size | Instances | Path                                                                                                                                  |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| 4.8% | 224 B |         7 | `.writableStreamStartErroring <root>`                                                                                                 |
| 0.7% |  32 B |         1 | `.writableStreamStartErroring CustomGetterSetter ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>` |
| 0.7% |  32 B |         1 | `.writableStreamStartErroring GetterSetter ← .writableStreamStartErroring <root>`                                                     |
| 0.7% |  32 B |         1 | `.name GetterSetter ← .writableStreamStartErroring <root>`                                                                            |
| 0.7% |  32 B |         1 | `.keys FunctionExecutable ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                        |

##### `ModuleProgramCodeBlock`

|      % |    Size | Instances | Path                                                                                                                                                                                                                                                                          |
| -----: | ------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 4.56 kB |         1 | `.urls FunctionCodeBlock ← .description FunctionCodeBlock ← .entities FunctionCodeBlock ← .user FunctionCodeBlock ← .retweeted_status PropertyTable ← [75] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |

##### `AsyncFunction`

|    % | Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.2% | 51 B |         1 | `.writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.5% | 34 B |         1 | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.5% | 34 B |         1 | `.writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring <root>` |
| 1.5% | 34 B |         1 | `.profile_background_image_url Function ← .user Function ← [99] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.5% | 34 B |         1 | `.profile_background_image_url_https Function ← .user Function ← [99] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

|     % |    Size | Instances | Constructor                  |
| ----: | ------: | --------: | ---------------------------- |
| 88.7% | 1.35 MB |        13 | `StructureChain`             |
| 51.4% |  783 kB |     1,373 | `Object`                     |
| 46.1% |  704 kB |     1,816 | `Structure`                  |
| 18.0% |  274 kB |       122 | `FunctionCodeBlock`          |
| 11.4% |  175 kB |       931 | `FunctionExecutable`         |
|  9.9% |  151 kB |     1,734 | `Function`                   |
|  7.5% |  115 kB |       925 | `UnlinkedFunctionExecutable` |
|  6.4% | 96.9 kB |       121 | `UnlinkedFunctionCodeBlock`  |
|  4.6% |   70 kB |       653 | `NativeExecutable`           |
|  4.1% | 61.9 kB |       390 | `PropertyTable`              |
|  3.9% | 59.1 kB |       185 | `SymbolTable`                |
|  3.8% | 57.4 kB |     1,077 | `Array`                      |
|  2.7% |   41 kB |       105 | `StructureRareData`          |
|  2.1% | 31.5 kB |       170 | `JSLexicalEnvironment`       |
|  1.9% | 28.8 kB |        10 | `Cell Butterfly`             |
|  1.9% | 28.3 kB |         4 | `ModuleRecord`               |
|  1.2% | 17.8 kB |       210 | `FunctionRareData`           |
|  0.7% | 10.5 kB |         1 | `GlobalObject`               |
|  0.5% | 7.66 kB |        70 | `AsyncFunction`              |
|  0.4% | 6.18 kB |       147 | `GetterSetter`               |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `StructureChain`

|      % |    Size | Instances | Path                                                                                                                                           |
| -----: | ------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 1.35 MB |         3 | `.writableStreamStartErroring <root>`                                                                                                          |
|   0.0% |    80 B |         1 | `.Symbol.asyncIterator Function ← .console StructureChain ← .writableStreamStartErroring <root>`                                               |
|   0.0% |    64 B |         1 | `.writableStreamStartErroring StructureChain ← .Symbol.asyncIterator Function ← .console StructureChain ← .writableStreamStartErroring <root>` |
|   0.0% |    48 B |         1 | `.encode StructureChain ← .writableStreamStartErroring <root>`                                                                                 |
|   0.0% |    16 B |         1 | `.writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                                                            |

##### `Object`

|     % |    Size | Instances | Path                                                                                                                     |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------ |
| 89.8% |  703 kB |         1 | `.__retained StructureChain ← .writableStreamStartErroring <root>`                                                       |
|  2.6% | 20.8 kB |         1 | `.writableStreamStartErroring <root>`                                                                                    |
|  1.5% | 11.7 kB |         1 | `.homeObject SymbolTable ← .StatWatcher SymbolTable ← .writableStreamStartErroring <root>`                               |
|  0.7% | 5.51 kB |         1 | `[23] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |
|  0.7% | 5.41 kB |         1 | `[33] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |

##### `Structure`

|     % |    Size | Instances | Path                                                                                                                     |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------ |
| 99.8% |  702 kB |         1 | `.data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                        |
| 99.5% |  700 kB |         1 | `.statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                  |
|  2.4% | 16.7 kB |         1 | `[12] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |
|  2.2% | 15.2 kB |         1 | `[1] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`  |
|  2.0% | 13.9 kB |         1 | `[4] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`  |

##### `FunctionCodeBlock`

|     % |    Size | Instances | Path                                                                                                                                                                                                                                                       |
| ----: | ------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18.3% | 50.1 kB |         1 | `.statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                    |
| 14.0% | 38.2 kB |         1 | `.writableStreamStartErroring FunctionCodeBlock ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                                                                                   |
| 11.3% | 30.8 kB |         1 | `.writableStreamStartErroring FunctionCodeBlock ← .writableStreamStartErroring FunctionCodeBlock ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                                  |
| 10.9% | 29.8 kB |         1 | `.writableStreamStartErroring FunctionCodeBlock ← .writableStreamStartErroring FunctionCodeBlock ← .writableStreamStartErroring FunctionCodeBlock ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |
| 10.0% | 27.4 kB |         1 | `(GC root)`                                                                                                                                                                                                                                                |

##### `FunctionExecutable`

|     % |    Size | Instances | Path                                                                                                                                                |
| ----: | ------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10.2% | 17.9 kB |         1 | `.writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                                                                 |
|  7.8% | 13.6 kB |         1 | `[74] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                            |
|  5.1% | 8.86 kB |         1 | `.user FunctionExecutable ← [74] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |
|  4.4% | 7.76 kB |         1 | `[84] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                            |
|  3.4% | 5.89 kB |         1 | `[77] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                            |

##### `Function`

|     % |    Size | Instances | Path                                                                                                                                      |
| ----: | ------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 35.7% | 54.1 kB |         1 | `.writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                                                       |
|  9.5% | 14.4 kB |         1 | `.console StructureChain ← .writableStreamStartErroring <root>`                                                                           |
|  5.4% | 8.17 kB |         1 | `[79] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                  |
|  4.1% | 6.18 kB |         1 | `[92] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                  |
|  1.8% |  2.8 kB |         1 | `.user Function ← [79] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |

##### `UnlinkedFunctionExecutable`

|    % |    Size | Instances | Path                                                                                                                     |
| ---: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------ |
| 8.1% | 9.34 kB |         1 | `[93] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |
| 7.1% | 8.13 kB |         1 | `[78] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |
| 6.3% | 7.23 kB |         1 | `[85] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |
| 4.7% | 5.41 kB |         1 | `.writableStreamStartErroring <root>`                                                                                    |
| 4.5% | 5.22 kB |         1 | `.writableStreamStartErroring UnlinkedFunctionExecutable ← .writableStreamStartErroring <root>`                          |

##### `UnlinkedFunctionCodeBlock`

|     % |    Size | Instances | Path                                                                                                                                                                                           |
| ----: | ------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 30.6% | 29.6 kB |         1 | `.retweeted_status SymbolTable ← [98] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                       |
| 19.4% | 18.8 kB |         1 | `.user UnlinkedFunctionCodeBlock ← .retweeted_status SymbolTable ← [98] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`     |
| 10.6% | 10.3 kB |         1 | `.writableStreamStartErroring Object ← .homeObject SymbolTable ← .StatWatcher SymbolTable ← .writableStreamStartErroring <root>`                                                               |
|  5.8% | 5.64 kB |         1 | `.writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                                                                                                            |
|  5.6% |  5.4 kB |         1 | `.entities UnlinkedFunctionCodeBlock ← .retweeted_status SymbolTable ← [98] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |

##### `NativeExecutable`

|     % |    Size | Instances | Path                                                                                                                                                          |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10.3% | 7.23 kB |         2 | `.writableStreamStartErroring <root>`                                                                                                                         |
| 10.1% |  7.1 kB |         1 | `.Math StructureChain ← .writableStreamStartErroring <root>`                                                                                                  |
|  6.1% | 4.27 kB |         1 | `[83] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                      |
|  2.5% | 1.72 kB |         1 | `.retweeted_status NativeExecutable ← [83] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |
|  2.3% |  1.6 kB |         1 | `.user NativeExecutable ← [83] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`             |

##### `PropertyTable`

|     % |    Size | Instances | Path                                                                                                                                                                          |
| ----: | ------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 58.2% |   36 kB |         1 | `[75] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                                      |
| 16.6% | 10.3 kB |         1 | `.user PropertyTable ← [75] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                |
| 10.3% |  6.4 kB |         1 | `.writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                                                                                           |
|  9.9% | 6.11 kB |         1 | `.writableStreamStartErroring PropertyTable ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                                              |
|  9.7% | 6.02 kB |         1 | `.writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>` |

##### `SymbolTable`

|     % |    Size | Instances | Path                                                                                                                                         |
| ----: | ------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 57.7% | 34.1 kB |         1 | `[98] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                     |
| 25.3% |   15 kB |         2 | `.writableStreamStartErroring <root>`                                                                                                        |
| 20.3% |   12 kB |         1 | `.StatWatcher SymbolTable ← .writableStreamStartErroring <root>`                                                                             |
|  5.8% | 3.44 kB |         1 | `.user SymbolTable ← [98] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |
|  2.3% | 1.34 kB |         1 | `.prototype SymbolTable ← .writableStreamStartErroring <root>`                                                                               |

##### `Array`

|     % |    Size | Instances | Path                                                                                                                     |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------ |
| 37.3% | 21.4 kB |         2 | `.writableStreamStartErroring <root>`                                                                                    |
|  9.0% | 5.14 kB |         1 | `[52] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |
|  8.9% | 5.12 kB |         1 | `[18] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |
|  8.4% |  4.8 kB |         1 | `.prototype Array ← .writableStreamStartErroring <root>`                                                                 |
|  6.7% | 3.87 kB |         1 | `[94] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |

##### `StructureRareData`

|     % |    Size | Instances | Path                                                                                   |
| ----: | ------: | --------: | -------------------------------------------------------------------------------------- |
| 66.1% | 27.1 kB |         1 | `(GC root)`                                                                            |
| 12.6% | 5.15 kB |         7 | `.writableStreamStartErroring <root>`                                                  |
|  1.4% |   576 B |         1 | `.prototype FunctionExecutable ← .writableStreamStartErroring <root>`                  |
|  0.9% |   384 B |         1 | `.writableStreamStartErroring StructureRareData ← .writableStreamStartErroring <root>` |
|  0.7% |   288 B |         1 | `.setFromBase64 symbol ← .writableStreamStartErroring <root>`                          |

##### `JSLexicalEnvironment`

|     % |    Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----: | ------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 36.3% | 11.4 kB |         1 | `.writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 10.6% | 3.33 kB |         1 | `.writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  8.4% | 2.64 kB |         1 | `.writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring <root>` |
|  6.1% | 1.92 kB |         1 | `.entities UnlinkedFunctionExecutable ← [93] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.2% | 1.01 kB |         1 | `.writableStreamStartErroring FunctionCodeBlock ← .writableStreamStartErroring FunctionCodeBlock ← .writableStreamStartErroring FunctionCodeBlock ← .writableStreamStartErroring FunctionCodeBlock ← .writableStreamStartErroring FunctionCodeBlock ← .writableStreamStartErroring FunctionCodeBlock ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

##### `Cell Butterfly`

|     % |    Size | Instances | Path                                                                                                                                                               |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 57.1% | 16.4 kB |         1 | `.lang string ← .retweeted_status string ← [54] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |
| 39.2% | 11.3 kB |         1 | `.writableStreamStartErroring JSLexicalEnvironment ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                            |
|  1.1% |   320 B |         1 | `.stop Object ← .homeObject SymbolTable ← .StatWatcher SymbolTable ← .writableStreamStartErroring <root>`                                                          |
|  1.1% |   320 B |         1 | `.ref Object ← .homeObject SymbolTable ← .StatWatcher SymbolTable ← .writableStreamStartErroring <root>`                                                           |
|  1.0% |   288 B |         1 | `.isDataView Array ← .writableStreamStartErroring <root>`                                                                                                          |

##### `ModuleRecord`

|     % |    Size | Instances | Path                                  |
| ----: | ------: | --------: | ------------------------------------- |
| 94.4% | 26.7 kB |         3 | `(GC root)`                           |
|  5.6% | 1.58 kB |         1 | `.writableStreamStartErroring <root>` |

##### `FunctionRareData`

|     % |    Size | Instances | Path                                                                                                                                                                                                                                                                       |
| ----: | ------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18.0% |  3.2 kB |         1 | `.writableStreamStartErroring Array ← .writableStreamStartErroring <root>`                                                                                                                                                                                                 |
| 17.1% | 3.04 kB |         1 | `.writableStreamStartErroring FunctionRareData ← .writableStreamStartErroring Array ← .writableStreamStartErroring <root>`                                                                                                                                                 |
| 16.7% | 2.96 kB |         1 | `.writableStreamStartErroring FunctionRareData ← .writableStreamStartErroring FunctionRareData ← .writableStreamStartErroring Array ← .writableStreamStartErroring <root>`                                                                                                 |
| 16.2% | 2.88 kB |         1 | `.writableStreamStartErroring FunctionRareData ← .writableStreamStartErroring FunctionRareData ← .writableStreamStartErroring FunctionRareData ← .writableStreamStartErroring Array ← .writableStreamStartErroring <root>`                                                 |
| 15.8% |  2.8 kB |         1 | `.writableStreamStartErroring FunctionRareData ← .writableStreamStartErroring FunctionRareData ← .writableStreamStartErroring FunctionRareData ← .writableStreamStartErroring FunctionRareData ← .writableStreamStartErroring Array ← .writableStreamStartErroring <root>` |

##### `GlobalObject`

|      % |    Size | Instances | Path                                                                                                                                                                                  |
| -----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 10.5 kB |         1 | `.writableStreamStartErroring Cell Butterfly ← .writableStreamStartErroring JSLexicalEnvironment ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>` |

##### `AsyncFunction`

|     % |    Size | Instances | Path                                                                                                                                          |
| ----: | ------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 67.3% | 5.16 kB |         1 | `.writableStreamStartErroring <root>`                                                                                                         |
|  1.3% |   102 B |         1 | `.replace Function ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                                       |
|  1.3% |   102 B |         1 | `.replaceAll Function ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                                    |
|  1.3% |   102 B |         1 | `.repeat Function ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                                        |
|  1.3% |   100 B |         1 | `.metadata Function ← [99] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>` |

##### `GetterSetter`

|     % |    Size | Instances | Path                                                                                                                                  |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| 23.9% | 1.48 kB |         1 | `.writableStreamStartErroring CustomGetterSetter ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>` |
|  2.1% |   128 B |         1 | `.writableStreamStartErroring Object ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring <root>`         |
|  1.6% |    96 B |         1 | `.writableStreamStartErroring <root>`                                                                                                 |
|  1.6% |    96 B |         1 | `.keys FunctionExecutable ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                        |
|  1.6% |    96 B |         1 | `.lastIndexOf FunctionExecutable ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                 |

## Largest strings

Strings ranked by bytes allocated for them.

|    % |  Size | Path                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---: | ----: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.0% | 374 B | `.writableStreamStartErroring string ← .writableStreamStartErroring string ← .writableStreamStartErroring string ← .writableStreamStartErroring Object ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                             |
| 0.0% | 336 B | `.Symbol.species string ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                              |
| 0.0% | 334 B | `.writableStreamStartErroring string ← .createUsedReadableStream StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                    |
| 0.0% | 334 B | `.Symbol.asyncDispose string ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                       |
| 0.0% | 332 B | `.user_mentions string ← .entities string ← .retweeted_status string ← [61] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                            |
| 0.0% | 326 B | `.writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                       |
| 0.0% | 314 B | `.source string ← .retweeted_status string ← [54] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                      |
| 0.0% | 306 B | `.created_at string ← .user string ← [36] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                              |
| 0.0% | 304 B | `.urls string ← .entities string ← [87] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                |
| 0.0% | 304 B | `.entities string ← .user string ← [73] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                |
| 0.0% | 298 B | `.writableStreamStartErroring string ← .writableStreamStartErroring string ← .writableStreamStartErroring string ← .DuplexSide string ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                        |
| 0.0% | 298 B | `.writableStreamStartErroring string ← .writableStreamStartErroring string ← .writableStreamStartErroring string ← .writableStreamStartErroring string ← .writableStreamStartErroring string ← .writableStreamStartErroring string ← .writableStreamStartErroring string ← .writableStreamStartErroring string ← .writableStreamStartErroring string ← .writableStreamStartErroring StructureChain ← .writableStreamStartErroring <root>` |
| 0.0% | 296 B | `.writableStreamStartErroring string ← .lchmod string ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                              |
| 0.0% | 296 B | `.profile_image_url string ← .user string ← [73] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                       |
| 0.0% | 296 B | `.user string ← .retweeted_status string ← [73] Structure ← .statuses Structure ← .data Object ← .__retained StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                        |
| 0.0% | 296 B | `.writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.0% | 296 B | `.writableStreamStartErroring string ← .createCommonJSModule StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                        |
| 0.0% | 296 B | `.writableStreamStartErroring string ← .evaluateCommonJSModule StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                      |
| 0.0% | 296 B | `.writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.0% | 296 B | `.name string ← .createUninitializedArrayBuffer StructureChain ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                     |

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

|     % |    Size | Instances | Path                                                                                                                                                                                                                                 |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 57.0% |  152 kB |        16 | `.writableStreamStartErroring <root>`                                                                                                                                                                                                |
|  2.2% | 5.94 kB |         1 | `.iso_language_code FunctionCodeBlock ← .metadata PropertyTable ← .retweeted_status Function ← [43] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                    |
|  1.8% | 4.79 kB |         1 | `.screen_name FunctionCodeBlock ← [0] FunctionCodeBlock ← .user_mentions FunctionCodeBlock ← .entities Function ← [43] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |
|  1.2% | 3.13 kB |         1 | `.id_str FunctionCodeBlock ← .user PropertyTable ← .retweeted_status Function ← [43] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                                   |
|  1.1% | 3.04 kB |         1 | `.indices FunctionCodeBlock ← [0] FunctionCodeBlock ← .user_mentions FunctionCodeBlock ← .entities Function ← [43] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`     |

##### `Structure`

|    % |  Size | Instances | Path                                                                                                                                                                                                                                     |
| ---: | ----: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.1% | 112 B |         1 | `.profile_sidebar_border_color FunctionExecutable ← .user FunctionExecutable ← .retweeted_status FunctionExecutable ← [87] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |
| 0.1% | 112 B |         1 | `.profile_image_url_https FunctionExecutable ← .user FunctionExecutable ← .retweeted_status FunctionExecutable ← [87] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`      |
| 0.1% | 112 B |         1 | `.urls string ← .entities FunctionExecutable ← .retweeted_status FunctionExecutable ← [87] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                                 |
| 0.1% | 112 B |         1 | `.writableStreamStartErroring Cell Butterfly ← .time string ← .console string ← .writableStreamStartErroring <root>`                                                                                                                     |
| 0.1% | 112 B |         1 | `.hashtags string ← .entities string ← [15] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                                                                                |

##### `FunctionExecutable`

|    % |    Size | Instances | Path                                                                                    |
| ---: | ------: | --------: | --------------------------------------------------------------------------------------- |
| 8.9% | 10.6 kB |        83 | `.writableStreamStartErroring <root>`                                                   |
| 0.4% |   512 B |         4 | `.writableStreamStartErroring Function ← .writableStreamStartErroring <root>`           |
| 0.2% |   256 B |         2 | `(GC root)`                                                                             |
| 0.2% |   256 B |         2 | `.writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring <root>` |
| 0.1% |   128 B |         1 | `.writableStreamStartErroring PropertyTable ← .writableStreamStartErroring <root>`      |

##### `Object`

|    % |  Size | Instances | Path                                                                                                                                                                                          |
| ---: | ----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.7% | 652 B |         1 | `.writableStreamStartErroring <root>`                                                                                                                                                         |
| 0.4% | 432 B |         1 | `.writableStreamStartErroring Object ← .Symbol.asyncIterator FunctionExecutable ← .prototype Array ← .writableStreamStartErroring <root>`                                                     |
| 0.4% | 432 B |         1 | `.name Object ← .Symbol.asyncIterator FunctionExecutable ← .prototype Array ← .writableStreamStartErroring <root>`                                                                            |
| 0.4% | 432 B |         1 | `.profile_background_color FunctionExecutable ← .user FunctionExecutable ← [98] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |
| 0.3% | 256 B |         1 | `.writableStreamStartErroring JSLexicalEnvironment ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                               |

##### `UnlinkedFunctionCodeBlock`

|     % |    Size | Instances | Path                                                                                                                                                                                                                                                                        |
| ----: | ------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 32.9% | 30.6 kB |        13 | `.writableStreamStartErroring <root>`                                                                                                                                                                                                                                       |
|  4.0% |  3.7 kB |         1 | `.name UnlinkedFunctionCodeBlock ← .normalize SymbolTable ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                                                                                                      |
|  2.0% |  1.9 kB |         1 | `.writableStreamStartErroring UnlinkedFunctionCodeBlock ← .writableStreamStartErroring <root>`                                                                                                                                                                              |
|  1.8% | 1.66 kB |         1 | `.description UnlinkedFunctionCodeBlock ← .entities UnlinkedFunctionCodeBlock ← .user UnlinkedFunctionCodeBlock ← .retweeted_status FunctionExecutable ← [40] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |
|  1.2% | 1.13 kB |         1 | `.created_at UnlinkedFunctionCodeBlock ← .user UnlinkedFunctionCodeBlock ← .retweeted_status FunctionExecutable ← [40] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                                        |

##### `UnlinkedFunctionExecutable`

|    % |    Size | Instances | Path                                                                                                                   |
| ---: | ------: | --------: | ---------------------------------------------------------------------------------------------------------------------- |
| 5.2% | 4.61 kB |        48 | `.writableStreamStartErroring <root>`                                                                                  |
| 2.2% | 1.92 kB |        20 | `(GC root)`                                                                                                            |
| 0.4% |   384 B |         4 | `.writableStreamStartErroring PropertyTable ← .writableStreamStartErroring <root>`                                     |
| 0.3% |   288 B |         3 | `.writableStreamStartErroring UnlinkedFunctionExecutable ← .writableStreamStartErroring <root>`                        |
| 0.1% |    96 B |         1 | `.next_ UnlinkedFunctionExecutable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring <root>` |

##### `Function`

|    % |  Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                  |
| ---: | ----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.4% | 873 B |         9 | `.writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                           |
| 0.2% |  98 B |         1 | `.writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring <root>` |
| 0.2% |  97 B |         1 | `.writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring FunctionExecutable ← .prototype Array ← .writableStreamStartErroring <root>`                                                    |
| 0.2% |  97 B |         1 | `.writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring FunctionExecutable ← .prototype Array ← .writableStreamStartErroring <root>`            |
| 0.2% |  97 B |         1 | `.instanceFieldInitializer Array ← .writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                               |

##### `NativeExecutable`

|    % |    Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---: | ------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.9% | 2.56 kB |        32 | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.1% |   560 B |         7 | `.writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.2% |    80 B |         1 | `.writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                                                                 |
| 0.2% |    80 B |         1 | `.writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                 |
| 0.2% |    80 B |         1 | `.writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>` |

##### `ModuleRecord`

|     % |    Size | Instances | Path                                                                                           |
| ----: | ------: | --------: | ---------------------------------------------------------------------------------------------- |
| 88.0% | 24.9 kB |         2 | `.writableStreamStartErroring UnlinkedFunctionCodeBlock ← .writableStreamStartErroring <root>` |
| 12.0% |  3.4 kB |         2 | `.writableStreamStartErroring <root>`                                                          |

##### `PropertyTable`

|    % |  Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.3% | 624 B |        13 | `.writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.8% | 144 B |         3 | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 0.3% |  48 B |         1 | `.writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                                                           |
| 0.3% |  48 B |         1 | `.writableStreamStartErroring PropertyTable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                              |
| 0.3% |  48 B |         1 | `.writableStreamStartErroring PropertyTable ← .writableStreamStartErroring PropertyTable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>` |

##### `Cell Butterfly`

|     % |    Size | Instances | Path                                                                                                   |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------ |
| 93.5% | 16.4 kB |         1 | `.time string ← .console string ← .writableStreamStartErroring <root>`                                 |
|  5.5% |   960 B |         3 | `.writableStreamStartErroring <root>`                                                                  |
|  0.4% |    64 B |         2 | `.writableStreamStartErroring Cell Butterfly ← .destroyed Array ← .writableStreamStartErroring <root>` |
|  0.2% |    32 B |         1 | `.destroyed Array ← .writableStreamStartErroring <root>`                                               |
|  0.2% |    32 B |         1 | `.readableEnded Array ← .writableStreamStartErroring <root>`                                           |

##### `Array`

|    % |  Size | Instances | Path                                                                                                                                      |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 1.2% | 210 B |        10 | `.writableStreamStartErroring <root>`                                                                                                     |
| 0.1% |  16 B |         1 | `.writableStreamStartErroring UnlinkedFunctionCodeBlock ← .writableStreamStartErroring <root>`                                            |
| 0.1% |  16 B |         1 | `.trimRight SymbolTable ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                      |
| 0.1% |  16 B |         1 | `.writableStreamStartErroring Array ← .trimRight SymbolTable ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>` |
| 0.1% |  16 B |         1 | `.name Array ← .trimRight SymbolTable ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                        |

##### `FunctionRareData`

|    % |  Size | Instances | Path                                                                                                                                                                                                            |
| ---: | ----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4.3% | 720 B |         9 | `.writableStreamStartErroring <root>`                                                                                                                                                                           |
| 0.5% |  80 B |         1 | `.profile_image_url_https Function ← .user Function ← .retweeted_status FunctionExecutable ← [98] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |
| 0.5% |  80 B |         1 | `.writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                                                                                                     |
| 0.5% |  80 B |         1 | `.profile_banner_url Function ← .user Function ← .retweeted_status FunctionExecutable ← [98] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`      |
| 0.5% |  80 B |         1 | `(GC root)`                                                                                                                                                                                                     |

##### `JSLexicalEnvironment`

|    % |  Size | Instances | Path                                                                                                                                                                                                                                |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.8% | 880 B |         1 | `.profile_link_color FunctionExecutable ← .user FunctionExecutable ← [45] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                                             |
| 4.7% | 608 B |         1 | `.name Function ← .user Function ← .retweeted_status Function ← [88] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                                                  |
| 3.3% | 432 B |         1 | `.writableStreamStartErroring JSLexicalEnvironment ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>` |
| 3.3% | 432 B |         1 | `.writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                                                                                                                         |
| 2.5% | 320 B |         1 | `.screen_name FunctionExecutable ← .user FunctionExecutable ← [87] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                                                    |

##### `SymbolTable`

|    % |  Size | Instances | Path                                                                                                                                                                                                                                                                     |
| ---: | ----: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 3.8% | 448 B |         7 | `.writableStreamStartErroring <root>`                                                                                                                                                                                                                                    |
| 0.5% |  64 B |         1 | `(GC root)`                                                                                                                                                                                                                                                              |
| 0.5% |  64 B |         1 | `.writableStreamStartErroring JSModuleEnvironment ← .writableStreamStartErroring JSLexicalEnvironment ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                                                       |
| 0.5% |  64 B |         1 | `.writableStreamStartErroring SymbolTable ← .writableStreamStartErroring JSModuleEnvironment ← .writableStreamStartErroring JSLexicalEnvironment ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                            |
| 0.5% |  64 B |         1 | `.writableStreamStartErroring SymbolTable ← .writableStreamStartErroring SymbolTable ← .writableStreamStartErroring JSModuleEnvironment ← .writableStreamStartErroring JSLexicalEnvironment ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>` |

##### `GlobalObject`

|      % |    Size | Instances | Path                                  |
| -----: | ------: | --------: | ------------------------------------- |
| 100.0% | 10.5 kB |         1 | `.writableStreamStartErroring <root>` |

##### `StructureRareData`

|    % |  Size | Instances | Path                                                                                                              |
| ---: | ----: | --------: | ----------------------------------------------------------------------------------------------------------------- |
| 9.5% | 960 B |        10 | `(GC root)`                                                                                                       |
| 5.7% | 576 B |         6 | `.writableStreamStartErroring <root>`                                                                             |
| 1.0% |  96 B |         1 | `.writableStreamStartErroring symbol ← .writableStreamStartErroring symbol ← .writableStreamStartErroring <root>` |
| 1.0% |  96 B |         1 | `.instanceFieldInitializer PropertyTable ← .writableStreamStartErroring <root>`                                   |
| 1.0% |  96 B |         1 | `.writableStreamStartErroring symbol ← .writableStreamStartErroring <root>`                                       |

##### `GetterSetter`

|    % |  Size | Instances | Path                                                                               |
| ---: | ----: | --------: | ---------------------------------------------------------------------------------- |
| 4.8% | 224 B |         7 | `.writableStreamStartErroring <root>`                                              |
| 2.7% | 128 B |         4 | `(GC root)`                                                                        |
| 1.4% |  64 B |         2 | `.writableStreamStartErroring Object`                                              |
| 0.7% |  32 B |         1 | `.writableStreamStartErroring GetterSetter ← .writableStreamStartErroring Object`  |
| 0.7% |  32 B |         1 | `.writeFileAsyncIterator FunctionExecutable ← .writableStreamStartErroring <root>` |

##### `ModuleProgramCodeBlock`

|      % |    Size | Instances | Path                                                                                                                                                                      |
| -----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 4.56 kB |         1 | `.id_str FunctionCodeBlock ← .user FunctionCodeBlock ← [42] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |

##### `AsyncFunction`

|    % | Size | Instances | Path                                                                               |
| ---: | ---: | --------: | ---------------------------------------------------------------------------------- |
| 3.6% | 85 B |         2 | `(GC root)`                                                                        |
| 2.9% | 68 B |         2 | `.writableStreamStartErroring Function ← .writableStreamStartErroring <root>`      |
| 2.9% | 68 B |         2 | `.writableStreamStartErroring <root>`                                              |
| 1.5% | 34 B |         1 | `.name AsyncFunction ← .writableStreamStartErroring <root>`                        |
| 1.5% | 34 B |         1 | `.writableStreamStartErroring AsyncFunction ← .writableStreamStartErroring <root>` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

|     % |    Size | Instances | Constructor                  |
| ----: | ------: | --------: | ---------------------------- |
| 46.2% |  705 kB |     1,829 | `Structure`                  |
| 18.0% |  276 kB |       122 | `FunctionCodeBlock`          |
| 11.9% |  181 kB |       931 | `FunctionExecutable`         |
| 10.0% |  153 kB |     1,734 | `Function`                   |
|  9.5% |  146 kB |     1,373 | `Object`                     |
|  7.8% |  119 kB |       121 | `UnlinkedFunctionCodeBlock`  |
|  7.0% |  106 kB |       925 | `UnlinkedFunctionExecutable` |
|  4.9% | 74.5 kB |       653 | `NativeExecutable`           |
|  3.9% | 59.8 kB |       391 | `PropertyTable`              |
|  1.9% | 28.5 kB |     1,077 | `Array`                      |
|  1.9% | 28.3 kB |         4 | `ModuleRecord`               |
|  1.8% | 27.6 kB |       185 | `SymbolTable`                |
|  1.3% | 20.6 kB |       105 | `StructureRareData`          |
|  1.2% | 18.4 kB |        10 | `Cell Butterfly`             |
|  1.1% | 17.1 kB |       210 | `FunctionRareData`           |
|  1.0% |   15 kB |       170 | `JSLexicalEnvironment`       |
|  0.7% | 10.5 kB |         1 | `GlobalObject`               |
|  0.5% | 7.99 kB |        70 | `AsyncFunction`              |
|  0.5% | 7.51 kB |       147 | `GetterSetter`               |
|  0.3% | 5.15 kB |        77 | `symbol`                     |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `Structure`

|     % |    Size | Instances | Path                                                                                                                |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------- |
| 88.8% |  626 kB |         1 | `.__retained string ← .writableStreamStartErroring <root>`                                                          |
| 88.6% |  625 kB |         1 | `.data Structure ← .__retained string ← .writableStreamStartErroring <root>`                                        |
| 88.3% |  623 kB |         1 | `.statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                  |
|  2.4% | 16.7 kB |         1 | `[12] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |
|  2.2% | 15.2 kB |         1 | `[1] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`  |

##### `FunctionCodeBlock`

|     % |    Size | Instances | Path                                                                                                                                                                        |
| ----: | ------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28.1% | 77.4 kB |         4 | `.writableStreamStartErroring <root>`                                                                                                                                       |
|  7.1% | 19.6 kB |         1 | `.user PropertyTable ← .retweeted_status Function ← [43] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`      |
|  6.6% | 18.1 kB |         1 | `[42] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                                                         |
|  6.3% | 17.3 kB |         1 | `.entities Function ← [43] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                                    |
|  4.2% | 11.6 kB |         1 | `.user_mentions FunctionCodeBlock ← .entities Function ← [43] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |

##### `FunctionExecutable`

|     % |    Size | Instances | Path                                                                                                                |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------- |
| 14.1% | 25.6 kB |         1 | `[40] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |
|  7.4% | 13.4 kB |         1 | `(GC root)`                                                                                                         |
|  6.5% | 11.9 kB |         1 | `[45] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |
|  5.5% | 9.92 kB |         1 | `[98] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |
|  4.7% | 8.46 kB |         1 | `[87] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |

##### `Function`

|     % |    Size | Instances | Path                                                                                                                                                       |
| ----: | ------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 36.2% | 55.3 kB |         1 | `[43] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                                        |
|  4.1% | 6.18 kB |         1 | `[88] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                                        |
|  3.4% | 5.25 kB |         1 | `.writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                                                |
|  3.4% | 5.15 kB |         1 | `.retweeted_status FunctionExecutable ← [98] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |
|  3.3% | 5.06 kB |         1 | `.writableStreamStartErroring Function ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                        |

##### `Object`

|    % |    Size | Instances | Path                                                                                                                |
| ---: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------- |
| 8.7% | 12.6 kB |         1 | `.writableStreamStartErroring string ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`   |
| 5.6% | 8.13 kB |         1 | `[57] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |
| 4.0% | 5.86 kB |         1 | `[68] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |
| 3.9% | 5.68 kB |         1 | `[21] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |
| 3.7% | 5.34 kB |         1 | `[33] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |

##### `UnlinkedFunctionCodeBlock`

|     % |    Size | Instances | Path                                                                                                                                                                                         |
| ----: | ------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 30.4% | 36.4 kB |         3 | `.writableStreamStartErroring <root>`                                                                                                                                                        |
| 14.3% |   17 kB |         1 | `.retweeted_status FunctionExecutable ← [40] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                                   |
| 10.2% | 12.1 kB |         1 | `.user UnlinkedFunctionCodeBlock ← .retweeted_status FunctionExecutable ← [40] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |
|  3.9% | 4.63 kB |         1 | `.normalize SymbolTable ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                                                         |
|  3.1% |  3.7 kB |         1 | `.name UnlinkedFunctionCodeBlock ← .normalize SymbolTable ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                       |

##### `UnlinkedFunctionExecutable`

|     % |    Size | Instances | Path                                                                                                                                                               |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 21.1% | 22.4 kB |         4 | `.writableStreamStartErroring <root>`                                                                                                                              |
|  7.3% | 7.78 kB |         1 | `[93] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                                                |
|  3.8% | 4.03 kB |         1 | `.retweeted_status FunctionExecutable ← [45] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`         |
|  3.4% | 3.65 kB |         1 | `.retweeted_status UnlinkedFunctionExecutable ← [93] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |
|  2.7% | 2.88 kB |         1 | `[44] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                                                |

##### `NativeExecutable`

|     % |    Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----: | ------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 23.8% | 17.7 kB |         2 | `.writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  6.2% | 4.61 kB |         1 | `.writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                                                                                                                 |
|  6.1% | 4.53 kB |         1 | `.writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                                                                 |
|  6.0% | 4.45 kB |         1 | `.writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                 |
|  5.9% | 4.37 kB |         1 | `.writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring NativeExecutable ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>` |

##### `PropertyTable`

|     % |    Size | Instances | Path                                                                                                                                                                   |
| ----: | ------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 56.0% | 33.5 kB |         1 | `.retweeted_status Function ← [43] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                       |
| 10.5% | 6.26 kB |         2 | `.writableStreamStartErroring <root>`                                                                                                                                  |
|  3.2% | 1.94 kB |         1 | `.retweeted_status Function ← [52] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                       |
|  1.7% |   992 B |         1 | `.user PropertyTable ← .retweeted_status Function ← [52] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |
|  1.6% |   960 B |         1 | `.user Function ← [52] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                                   |

##### `Array`

|     % |    Size | Instances | Path                                                                                                                                           |
| ----: | ------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 33.3% |  9.5 kB |         3 | `.writableStreamStartErroring <root>`                                                                                                          |
|  9.6% | 2.74 kB |         1 | `(GC root)`                                                                                                                                    |
|  3.9% |  1.1 kB |         1 | `.homeObject Array ← .writableStreamStartErroring <root>`                                                                                      |
|  3.5% |   992 B |         1 | `[99] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                            |
|  3.0% |   844 B |         1 | `.retweeted_status Object ← [85] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |

##### `ModuleRecord`

|     % |    Size | Instances | Path                                                                                           |
| ----: | ------: | --------: | ---------------------------------------------------------------------------------------------- |
| 88.0% | 24.9 kB |         2 | `.writableStreamStartErroring UnlinkedFunctionCodeBlock ← .writableStreamStartErroring <root>` |
| 12.0% |  3.4 kB |         2 | `.writableStreamStartErroring <root>`                                                          |

##### `SymbolTable`

|     % |    Size | Instances | Path                                                                                                                                               |
| ----: | ------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 65.4% |   18 kB |         6 | `.writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                                        |
| 17.8% | 4.92 kB |         1 | `[39] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                                |
|  6.0% | 1.64 kB |         1 | `.user SymbolTable ← [39] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`            |
|  2.3% |   640 B |         1 | `.entities FunctionExecutable ← [40] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |
|  1.4% |   384 B |         1 | `.writableStreamStartErroring SymbolTable ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                             |

##### `StructureRareData`

|     % |    Size | Instances | Path                                                                                                                                                                          |
| ----: | ------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 62.8% | 12.9 kB |         2 | `.writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                                                                   |
|  8.5% | 1.76 kB |         3 | `(GC root)`                                                                                                                                                                   |
|  2.8% |   576 B |         1 | `.writableStreamStartErroring StructureRareData ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                  |
|  1.9% |   384 B |         1 | `.writableStreamStartErroring StructureRareData ← .writableStreamStartErroring StructureRareData ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>` |
|  1.9% |   384 B |         1 | `.buffer StructureRareData ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                                       |

##### `Cell Butterfly`

|     % |    Size | Instances | Path                                                                                                   |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------ |
| 90.7% | 16.7 kB |         1 | `.time string ← .console string ← .writableStreamStartErroring <root>`                                 |
|  8.4% | 1.54 kB |         4 | `.writableStreamStartErroring <root>`                                                                  |
|  0.5% |    96 B |         1 | `.destroyed Array ← .writableStreamStartErroring <root>`                                               |
|  0.3% |    64 B |         1 | `.readableEnded Array ← .writableStreamStartErroring <root>`                                           |
|  0.2% |    32 B |         1 | `.writableStreamStartErroring Cell Butterfly ← .destroyed Array ← .writableStreamStartErroring <root>` |

##### `FunctionRareData`

|     % |    Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----: | ------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 21.1% |  3.6 kB |         1 | `.writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring <root>`                                                                                                                                                                                                 |
| 20.6% | 3.52 kB |         1 | `.writableStreamStartErroring FunctionRareData ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring <root>`                                                                                                                                                 |
| 20.1% | 3.44 kB |         1 | `.writableStreamStartErroring FunctionRareData ← .writableStreamStartErroring FunctionRareData ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring <root>`                                                                                                 |
| 19.7% | 3.36 kB |         1 | `.writableStreamStartErroring FunctionRareData ← .writableStreamStartErroring FunctionRareData ← .writableStreamStartErroring FunctionRareData ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring <root>`                                                 |
| 19.2% | 3.28 kB |         1 | `.writableStreamStartErroring FunctionRareData ← .writableStreamStartErroring FunctionRareData ← .writableStreamStartErroring FunctionRareData ← .writableStreamStartErroring FunctionRareData ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring <root>` |

##### `JSLexicalEnvironment`

|     % |    Size | Instances | Path                                                                                                                                                                                             |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 10.8% | 1.62 kB |         1 | `.writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                                                                                      |
|  5.9% |   880 B |         1 | `.profile_link_color FunctionExecutable ← .user FunctionExecutable ← [45] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`          |
|  4.4% |   656 B |         1 | `.writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring FunctionExecutable ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                  |
|  4.1% |   608 B |         1 | `.name Function ← .user Function ← .retweeted_status Function ← [88] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`               |
|  3.3% |   490 B |         1 | `[0] NativeExecutable ← .urls NativeExecutable ← .entities NativeExecutable ← [91] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |

##### `GlobalObject`

|      % |    Size | Instances | Path                                  |
| -----: | ------: | --------: | ------------------------------------- |
| 100.0% | 10.5 kB |         1 | `.writableStreamStartErroring <root>` |

##### `AsyncFunction`

|     % |    Size | Instances | Path                                                                                                                                             |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 70.0% | 5.59 kB |         2 | `.writableStreamStartErroring <root>`                                                                                                            |
| 14.3% | 1.14 kB |         1 | `.retweeted_status Function ← [89] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>` |
|  1.6% |   131 B |         1 | `.closeEmitted UnlinkedFunctionExecutable ← .writableStreamStartErroring <root>`                                                                 |
|  1.3% |   102 B |         1 | `.writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                                      |
|  1.3% |   100 B |         1 | `.umask Structure ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                   |

##### `GetterSetter`

|     % |    Size | Instances | Path                                                                            |
| ----: | ------: | --------: | ------------------------------------------------------------------------------- |
| 27.1% | 2.04 kB |         1 | `.writableStreamStartErroring <root>`                                           |
| 23.0% | 1.73 kB |         2 | `(GC root)`                                                                     |
|  2.6% |   192 B |         1 | `.prototype PropertyTable ← .writableStreamStartErroring <root>`                |
|  2.1% |   160 B |         1 | `.Symbol.asyncDispose GetterSetter ← .writableStreamStartErroring <root>`       |
|  1.3% |    96 B |         1 | `.messaging_transfer_symbol GetterSetter ← .writableStreamStartErroring <root>` |

##### `symbol`

|     % |    Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 42.0% | 2.16 kB |         1 | `(GC root)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 37.2% | 1.91 kB |         3 | `.writableStreamStartErroring <root>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  4.7% |   240 B |         1 | `.writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring StringDecoder ← .writableStreamStartErroring NodeJSFS ← .writableStreamStartErroring BigInt64ArrayPrototype ← .writableStreamStartErroring BigUint64ArrayPrototype ← .writableStreamStartErroring Float32ArrayPrototype ← .writableStreamStartErroring GetterSetter ← .writableStreamStartErroring <root>`                                                                             |
|  4.4% |   224 B |         1 | `.writableStreamStartErroring symbol ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring StringDecoder ← .writableStreamStartErroring NodeJSFS ← .writableStreamStartErroring BigInt64ArrayPrototype ← .writableStreamStartErroring BigUint64ArrayPrototype ← .writableStreamStartErroring Float32ArrayPrototype ← .writableStreamStartErroring GetterSetter ← .writableStreamStartErroring <root>`                                       |
|  4.0% |   208 B |         1 | `.writableStreamStartErroring symbol ← .writableStreamStartErroring symbol ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring Function ← .writableStreamStartErroring StringDecoder ← .writableStreamStartErroring NodeJSFS ← .writableStreamStartErroring BigInt64ArrayPrototype ← .writableStreamStartErroring BigUint64ArrayPrototype ← .writableStreamStartErroring Float32ArrayPrototype ← .writableStreamStartErroring GetterSetter ← .writableStreamStartErroring <root>` |

## Largest strings

Strings ranked by bytes allocated for them.

|    % |  Size | Path                                                                                                                                                                                          |
| ---: | ----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.0% | 374 B | `.name string ← .user string ← [62] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                                             |
| 0.0% | 336 B | `.profile_image_url Object ← .user Object ← .retweeted_status Object ← [57] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`     |
| 0.0% | 334 B | `.metadata string ← .retweeted_status string ← [51] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                             |
| 0.0% | 334 B | `.writableStreamStartErroring string ← .writableStreamStartErroring string ← .writableStreamStartErroring string ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>` |
| 0.0% | 332 B | `.constructor string ← .homeObject string ← .ExceptionWithHostPort string ← .writableStreamStartErroring string ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`  |
| 0.0% | 326 B | `.user_mentions string ← .entities string ← .retweeted_status string ← [37] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`     |
| 0.0% | 314 B | `.countReset string ← .console string ← .writableStreamStartErroring <root>`                                                                                                                  |
| 0.0% | 306 B | `.writableStreamStartErroring <root>`                                                                                                                                                         |
| 0.0% | 304 B | `.writableStreamStartErroring string ← .ftruncateSync NativeExecutable ← .writableStreamStartErroring <root>`                                                                                 |
| 0.0% | 304 B | `.source string ← [37] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                                                          |
| 0.0% | 298 B | `.profile_banner_url string ← .user string ← .retweeted_status string ← [37] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`    |
| 0.0% | 298 B | `.created_at string ← [27] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                                                      |
| 0.0% | 296 B | `.symbols string ← .entities SymbolTable ← [39] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                                 |
| 0.0% | 296 B | `.entities PropertyTable ← .retweeted_status Function ← [52] Structure ← .statuses Structure ← .data Structure ← .__retained string ← .writableStreamStartErroring <root>`                    |
| 0.0% | 296 B | `.writableStreamStartErroring string ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                                             |
| 0.0% | 296 B | `.writableStreamStartErroring string ← .writableStreamStartErroring string ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                       |
| 0.0% | 296 B | `.writableStreamStartErroring string ← .writableStreamStartErroring string ← .writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                       |
| 0.0% | 296 B | `.writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                                                                                   |
| 0.0% | 296 B | `.addAbortAlgorithmToSignal string ← .writableStreamStartErroring <root>`                                                                                                                     |
| 0.0% | 296 B | `.writableStreamStartErroring string ← .writableStreamStartErroring <root>`                                                                                                                   |

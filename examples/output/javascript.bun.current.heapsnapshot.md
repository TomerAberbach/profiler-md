# Heap snapshot

Held 1.49 MiB over 16,748 nodes and 44,856 edges.

| Category           |     % |     Size | Nodes |
| ------------------ | ----: | -------: | ----: |
| Code               | 45.3% |  693 KiB | 3,192 |
| String             | 23.3% |  356 KiB | 6,272 |
| Object shape       | 13.5% |  206 KiB | 1,883 |
| Object             |  7.4% |  114 KiB | 1,471 |
| Internal           |  4.9% | 75.5 KiB |   962 |
| Function           |  4.3% |   65 KiB | 1,811 |
| Array              |  1.1% | 16.8 KiB | 1,073 |
| Symbol             |  0.1% |  1.2 KiB |    77 |
| Native             | <0.1% |    387 B |     3 |
| Regular expression | <0.1% |     64 B |     2 |
| Big number         | <0.1% |     32 B |     1 |
| Synthetic          |  0.0% |      0 B |     1 |

`B ←(several paths)– A` means `A` retains `B` only through other nodes, along several paths.

## Largest constructors

### Self size

Constructors with the most instance bytes, excluding referenced nodes.

|     % |     Size | Instances | Constructor                         |
| ----: | -------: | --------: | ----------------------------------- |
|  6.3% | 96.7 KiB |     1,367 | `Object`                            |
|  1.8% | 27.5 KiB |         4 | `ModuleRecord`                      |
|  0.7% | 10.3 KiB |         1 | `GlobalObject`                      |
|  0.1% | 1.19 KiB |         1 | `InternalModuleRegistry`            |
|  0.1% | 1.14 KiB |         2 | `NodeJSFS`                          |
| <0.1% |    779 B |         3 | `FileSink`                          |
| <0.1% |    659 B |         2 | `FileInternalReadableStreamSource`  |
| <0.1% |    363 B |         2 | `Blob`                              |
| <0.1% |    329 B |        10 | `Map`                               |
| <0.1% |    256 B |         8 | `Promise (fulfilled: Object)`       |
| <0.1% |    242 B |         2 | `WriteStream`                       |
| <0.1% |    213 B |         1 | `url `                              |
| <0.1% |    128 B |         4 | `Promise (fulfilled: JSSourceCode)` |
| <0.1% |    108 B |         3 | `Set`                               |
| <0.1% |     96 B |         3 | `Callee`                            |
| <0.1% |     89 B |         2 | `ReadableStream`                    |
| <0.1% |     89 B |         1 | `ReadStream`                        |
| <0.1% |     70 B |         1 | `String`                            |
| <0.1% |     65 B |         1 | `ModuleNamespaceObject`             |
| <0.1% |     64 B |         2 | `Promise (fulfilled)`               |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Object

|     % |     Size | Instances | Constructor                         |
| ----: | -------: | --------: | ----------------------------------- |
|  6.3% | 96.7 KiB |     1,367 | `Object`                            |
|  0.7% | 10.3 KiB |         1 | `GlobalObject`                      |
|  0.1% | 1.19 KiB |         1 | `InternalModuleRegistry`            |
|  0.1% | 1.14 KiB |         2 | `NodeJSFS`                          |
| <0.1% |    779 B |         3 | `FileSink`                          |
| <0.1% |    659 B |         2 | `FileInternalReadableStreamSource`  |
| <0.1% |    329 B |        10 | `Map`                               |
| <0.1% |    256 B |         8 | `Promise (fulfilled: Object)`       |
| <0.1% |    242 B |         2 | `WriteStream`                       |
| <0.1% |    213 B |         1 | `url `                              |
| <0.1% |    128 B |         4 | `Promise (fulfilled: JSSourceCode)` |
| <0.1% |    108 B |         3 | `Set`                               |
| <0.1% |     89 B |         2 | `ReadableStream`                    |
| <0.1% |     89 B |         1 | `ReadStream`                        |
| <0.1% |     70 B |         1 | `String`                            |
| <0.1% |     65 B |         1 | `ModuleNamespaceObject`             |
| <0.1% |     64 B |         2 | `Promise (fulfilled)`               |
| <0.1% |     62 B |         1 | `Math`                              |
| <0.1% |     54 B |         1 | `Prototype`                         |
| <0.1% |     50 B |         2 | `Iterator`                          |

##### Code

|    % |     Size | Instances | Constructor    |
| ---: | -------: | --------: | -------------- |
| 1.8% | 27.5 KiB |         4 | `ModuleRecord` |

#### Retainer paths

Retainer paths with the largest contribution to each constructor's self size.

##### `Object`

|    % |     Size | Instances | Path                                                                                     |
| ---: | -------: | --------: | ---------------------------------------------------------------------------------------- |
| 1.5% | 1.48 KiB |         3 | `Object ←(several paths)– GlobalObject`                                                  |
| 1.2% |  1.2 KiB |         5 | `Object ← InternalModuleRegistry ←.internalModuleRegistry– GlobalObject`                 |
| 0.2% |    225 B |         1 | `Object ←.versions– url  ←.process– GlobalObject`                                        |
| 0.2% |    181 B |         1 | `Object ← GlobalObject`                                                                  |
| 0.2% |    160 B |         1 | `Object ←.win32– Object ← InternalModuleRegistry ←.internalModuleRegistry– GlobalObject` |

##### `ModuleRecord`

|      % |     Size | Instances | Path                       |
| -----: | -------: | --------: | -------------------------- |
| 100.0% | 27.5 KiB |         4 | `ModuleRecord ← (GC root)` |

##### `GlobalObject`

|      % |     Size | Instances | Path                       |
| -----: | -------: | --------: | -------------------------- |
| 100.0% | 10.3 KiB |         1 | `GlobalObject ← (GC root)` |

##### `InternalModuleRegistry`

|      % |     Size | Instances | Path                                                            |
| -----: | -------: | --------: | --------------------------------------------------------------- |
| 100.0% | 1.19 KiB |         1 | `InternalModuleRegistry ←.internalModuleRegistry– GlobalObject` |

##### `NodeJSFS`

|     % |     Size | Instances | Path                                      |
| ----: | -------: | --------: | ----------------------------------------- |
| 90.9% | 1.04 KiB |         1 | `NodeJSFS ←(several paths)– GlobalObject` |
|  9.1% |    106 B |         1 | `NodeJSFS ← Structure ← GlobalObject`     |

##### `FileSink`

|     % |  Size | Instances | Path                                                                                  |
| ----: | ----: | --------: | ------------------------------------------------------------------------------------- |
| 48.3% | 376 B |         1 | `FileSink ←.kWriteStreamFastPath– WriteStream ←.stdout– url  ←.process– GlobalObject` |
| 48.3% | 376 B |         1 | `FileSink ←.kWriteStreamFastPath– WriteStream ←.stderr– url  ←.process– GlobalObject` |
|  3.5% |  27 B |         1 | `FileSink ← Structure ← GlobalObject`                                                 |

##### `FileInternalReadableStreamSource`

|     % |  Size | Instances | Path                                           |
| ----: | ----: | --------: | ---------------------------------------------- |
| 95.9% | 632 B |         1 | `FileInternalReadableStreamSource ← (GC root)` |
|  4.1% |  27 B |         1 | `FileInternalReadableStreamSource ← Structure` |

##### `Blob`

|     % |  Size | Instances | Path                                  |
| ----: | ----: | --------: | ------------------------------------- |
| 90.4% | 328 B |         1 | `Blob ← GlobalObject`                 |
|  9.6% |  35 B |         1 | `Blob ←(several paths)– GlobalObject` |

##### `Map`

|     % | Size | Instances | Path                                                                                                                                                                 |
| ----: | ---: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 12.5% | 41 B |         1 | `Map ←(several paths)– GlobalObject`                                                                                                                                 |
|  9.7% | 32 B |         1 | `Map ←.requireMap– GlobalObject`                                                                                                                                     |
|  9.7% | 32 B |         1 | `Map ←.statWatchers– JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– GlobalObject`                                                                     |
|  9.7% | 32 B |         1 | `Map ←.dummy– JSLexicalEnvironment ←(several paths)– Object ←.homeObject– SafeMap ←.SafeMap– Object ← InternalModuleRegistry ←.internalModuleRegistry– GlobalObject` |
|  9.7% | 32 B |         1 | `Map ←.registry– ModuleLoader ←.Loader– GlobalObject`                                                                                                                |

##### `Promise (fulfilled: Object)`

|      % |  Size | Instances | Path                                      |
| -----: | ----: | --------: | ----------------------------------------- |
| 100.0% | 256 B |         8 | `Promise (fulfilled: Object) ← (GC root)` |

##### `WriteStream`

|     % |  Size | Instances | Path                                                 |
| ----: | ----: | --------: | ---------------------------------------------------- |
| 50.0% | 121 B |         1 | `WriteStream ←.stdout– url  ←.process– GlobalObject` |
| 50.0% | 121 B |         1 | `WriteStream ←.stderr– url  ←.process– GlobalObject` |

##### `url `

|      % |  Size | Instances | Path                           |
| -----: | ----: | --------: | ------------------------------ |
| 100.0% | 213 B |         1 | `url  ←.process– GlobalObject` |

##### `Promise (fulfilled: JSSourceCode)`

|      % |  Size | Instances | Path                                            |
| -----: | ----: | --------: | ----------------------------------------------- |
| 100.0% | 128 B |         4 | `Promise (fulfilled: JSSourceCode) ← (GC root)` |

##### `Set`

|     % | Size | Instances | Path                                                                                                              |
| ----: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------- |
| 40.7% | 44 B |         1 | `Set ←(several paths)– GlobalObject`                                                                              |
| 29.6% | 32 B |         1 | `Set ←.dummy– JSLexicalEnvironment ←(several paths)– Object ←.homeObject– SafeSet ←(several paths)– GlobalObject` |
| 29.6% | 32 B |         1 | `Set ←.allowedNodeEnvironmentFlags– url  ←.process– GlobalObject`                                                 |

##### `Callee`

|      % | Size | Instances | Path                    |
| -----: | ---: | --------: | ----------------------- |
| 100.0% | 96 B |         3 | `Callee ← GlobalObject` |

##### `ReadableStream`

|      % | Size | Instances | Path                         |
| -----: | ---: | --------: | ---------------------------- |
| 100.0% | 89 B |         2 | `ReadableStream ← (GC root)` |

##### `ReadStream`

|      % | Size | Instances | Path                                               |
| -----: | ---: | --------: | -------------------------------------------------- |
| 100.0% | 89 B |         1 | `ReadStream ←.stdin– url  ←.process– GlobalObject` |

##### `String`

|      % | Size | Instances | Path                    |
| -----: | ---: | --------: | ----------------------- |
| 100.0% | 70 B |         1 | `String ← GlobalObject` |

##### `ModuleNamespaceObject`

|      % | Size | Instances | Path                                |
| -----: | ---: | --------: | ----------------------------------- |
| 100.0% | 65 B |         1 | `ModuleNamespaceObject ← (GC root)` |

##### `Promise (fulfilled)`

|      % | Size | Instances | Path                              |
| -----: | ---: | --------: | --------------------------------- |
| 100.0% | 64 B |         2 | `Promise (fulfilled) ← (GC root)` |

##### `Math`

|      % | Size | Instances | Path                        |
| -----: | ---: | --------: | --------------------------- |
| 100.0% | 62 B |         1 | `Math ←.Math– GlobalObject` |

##### `Prototype`

|      % | Size | Instances | Path                       |
| -----: | ---: | --------: | -------------------------- |
| 100.0% | 54 B |         1 | `Prototype ← GlobalObject` |

##### `Iterator`

|     % | Size | Instances | Path                                  |
| ----: | ---: | --------: | ------------------------------------- |
| 62.0% | 31 B |         1 | `Iterator ← GlobalObject`             |
| 38.0% | 19 B |         1 | `Iterator ← Structure ← GlobalObject` |

### Retained size

Constructors with the most instance bytes, including nodes only the instances keep alive.

|     % |     Size | Instances | Constructor                        |
| ----: | -------: | --------: | ---------------------------------- |
| 89.3% | 1.33 MiB |         1 | `GlobalObject`                     |
| 40.8% |  623 KiB |     1,367 | `Object`                           |
|  3.4% | 52.3 KiB |         1 | `InternalModuleRegistry`           |
|  3.4% | 52.1 KiB |         1 | `url `                             |
|  1.5% | 22.4 KiB |         1 | `ModuleLoader`                     |
|  1.1% | 16.8 KiB |        10 | `Map`                              |
|  1.0% | 14.9 KiB |         1 | `ReadStream`                       |
|  0.6% | 8.66 KiB |         2 | `WriteStream`                      |
|  0.3% |  4.9 KiB |         1 | `console`                          |
|  0.3% | 4.88 KiB |         1 | `Prototype`                        |
|  0.3% | 4.87 KiB |         1 | `Math`                             |
|  0.3% | 4.46 KiB |         1 | `String`                           |
|  0.3% | 4.22 KiB |         2 | `ReadableStream`                   |
|  0.2% | 2.98 KiB |         2 | `Iterator`                         |
|  0.2% | 2.96 KiB |         2 | `NodeJSFS`                         |
|  0.2% | 2.39 KiB |         2 | `Blob`                             |
|  0.2% | 2.35 KiB |         2 | `ArrayBuffer`                      |
|  0.1% | 2.17 KiB |         1 | `EventEmitter`                     |
|  0.1% | 1.96 KiB |         3 | `FileSink`                         |
|  0.1% | 1.89 KiB |         2 | `FileInternalReadableStreamSource` |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Object

|     % |     Size | Instances | Constructor                        |
| ----: | -------: | --------: | ---------------------------------- |
| 89.3% | 1.33 MiB |         1 | `GlobalObject`                     |
| 40.8% |  623 KiB |     1,367 | `Object`                           |
|  3.4% | 52.3 KiB |         1 | `InternalModuleRegistry`           |
|  3.4% | 52.1 KiB |         1 | `url `                             |
|  1.1% | 16.8 KiB |        10 | `Map`                              |
|  1.0% | 14.9 KiB |         1 | `ReadStream`                       |
|  0.6% | 8.66 KiB |         2 | `WriteStream`                      |
|  0.3% |  4.9 KiB |         1 | `console`                          |
|  0.3% | 4.88 KiB |         1 | `Prototype`                        |
|  0.3% | 4.87 KiB |         1 | `Math`                             |
|  0.3% | 4.46 KiB |         1 | `String`                           |
|  0.3% | 4.22 KiB |         2 | `ReadableStream`                   |
|  0.2% | 2.98 KiB |         2 | `Iterator`                         |
|  0.2% | 2.96 KiB |         2 | `NodeJSFS`                         |
|  0.2% | 2.35 KiB |         2 | `ArrayBuffer`                      |
|  0.1% | 2.17 KiB |         1 | `EventEmitter`                     |
|  0.1% | 1.96 KiB |         3 | `FileSink`                         |
|  0.1% | 1.89 KiB |         2 | `FileInternalReadableStreamSource` |
|  0.1% | 1.23 KiB |         1 | `Stats`                            |
|  0.1% | 1.16 KiB |         1 | `AsyncDisposableStack`             |

##### Code

|    % | Size | Instances | Constructor    |
| ---: | ---: | --------: | -------------- |
| 0.0% |  0 B |         4 | `ModuleRecord` |

#### Retainer paths

Retainer paths with the largest contribution to each constructor's retained size.

##### `GlobalObject`

|      % |     Size | Instances | Path                       |
| -----: | -------: | --------: | -------------------------- |
| 100.0% | 1.33 MiB |         1 | `GlobalObject ← (GC root)` |

##### `Object`

|     % |     Size | Instances | Path                                                                     |
| ----: | -------: | --------: | ------------------------------------------------------------------------ |
| 73.6% |  458 KiB |         1 | `Object ←.__retained– GlobalObject`                                      |
| 70.9% |  442 KiB |         1 | `Object ←.data– Object ←.__retained– GlobalObject`                       |
|  4.1% | 25.4 KiB |         1 | `Object ←(several paths)– GlobalObject`                                  |
|  2.8% | 17.7 KiB |         1 | `Object ← InternalModuleRegistry ←.internalModuleRegistry– GlobalObject` |
|  2.2% | 13.8 KiB |         1 | `Object ← GlobalObject`                                                  |

##### `InternalModuleRegistry`

|      % |     Size | Instances | Path                                                            |
| -----: | -------: | --------: | --------------------------------------------------------------- |
| 100.0% | 52.3 KiB |         1 | `InternalModuleRegistry ←.internalModuleRegistry– GlobalObject` |

##### `url `

|      % |     Size | Instances | Path                           |
| -----: | -------: | --------: | ------------------------------ |
| 100.0% | 52.1 KiB |         1 | `url  ←.process– GlobalObject` |

##### `ModuleLoader`

|      % |     Size | Instances | Path                                  |
| -----: | -------: | --------: | ------------------------------------- |
| 100.0% | 22.4 KiB |         1 | `ModuleLoader ←.Loader– GlobalObject` |

##### `Map`

|     % |     Size | Instances | Path                                                                                             |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------ |
| 95.5% | 16.1 KiB |         1 | `Map ←.byId– Object ←.__retained– GlobalObject`                                                  |
|  2.0% |    352 B |         1 | `Map ←.registry– ModuleLoader ←.Loader– GlobalObject`                                            |
|  1.9% |    329 B |         1 | `Map ←(several paths)– GlobalObject`                                                             |
|  0.2% |     32 B |         1 | `Map ←.requireMap– GlobalObject`                                                                 |
|  0.2% |     32 B |         1 | `Map ←.statWatchers– JSLexicalEnvironment ← JSLexicalEnvironment ←(several paths)– GlobalObject` |

##### `ReadStream`

|      % |     Size | Instances | Path                                               |
| -----: | -------: | --------: | -------------------------------------------------- |
| 100.0% | 14.9 KiB |         1 | `ReadStream ←.stdin– url  ←.process– GlobalObject` |

##### `WriteStream`

|     % |     Size | Instances | Path                                                 |
| ----: | -------: | --------: | ---------------------------------------------------- |
| 50.6% | 4.38 KiB |         1 | `WriteStream ←.stdout– url  ←.process– GlobalObject` |
| 49.4% | 4.28 KiB |         1 | `WriteStream ←.stderr– url  ←.process– GlobalObject` |

##### `console`

|      % |    Size | Instances | Path                              |
| -----: | ------: | --------: | --------------------------------- |
| 100.0% | 4.9 KiB |         1 | `console ←.console– GlobalObject` |

##### `Prototype`

|      % |     Size | Instances | Path                       |
| -----: | -------: | --------: | -------------------------- |
| 100.0% | 4.88 KiB |         1 | `Prototype ← GlobalObject` |

##### `Math`

|      % |     Size | Instances | Path                        |
| -----: | -------: | --------: | --------------------------- |
| 100.0% | 4.87 KiB |         1 | `Math ←.Math– GlobalObject` |

##### `String`

|      % |     Size | Instances | Path                    |
| -----: | -------: | --------: | ----------------------- |
| 100.0% | 4.46 KiB |         1 | `String ← GlobalObject` |

##### `ReadableStream`

|      % |     Size | Instances | Path                         |
| -----: | -------: | --------: | ---------------------------- |
| 100.0% | 4.22 KiB |         2 | `ReadableStream ← (GC root)` |

##### `Iterator`

|     % |     Size | Instances | Path                                  |
| ----: | -------: | --------: | ------------------------------------- |
| 79.2% | 2.36 KiB |         1 | `Iterator ← GlobalObject`             |
| 20.8% |    635 B |         1 | `Iterator ← Structure ← GlobalObject` |

##### `NodeJSFS`

|     % |     Size | Instances | Path                                      |
| ----: | -------: | --------: | ----------------------------------------- |
| 64.8% | 1.92 KiB |         1 | `NodeJSFS ← Structure ← GlobalObject`     |
| 35.2% | 1.04 KiB |         1 | `NodeJSFS ←(several paths)– GlobalObject` |

##### `Blob`

|     % |     Size | Instances | Path                                  |
| ----: | -------: | --------: | ------------------------------------- |
| 86.6% | 2.07 KiB |         1 | `Blob ←(several paths)– GlobalObject` |
| 13.4% |    328 B |         1 | `Blob ← GlobalObject`                 |

##### `ArrayBuffer`

|      % |     Size | Instances | Path                                         |
| -----: | -------: | --------: | -------------------------------------------- |
| 100.0% | 2.35 KiB |         2 | `ArrayBuffer ←(several paths)– GlobalObject` |

##### `EventEmitter`

|      % |     Size | Instances | Path                                          |
| -----: | -------: | --------: | --------------------------------------------- |
| 100.0% | 2.17 KiB |         1 | `EventEmitter ←(several paths)– GlobalObject` |

##### `FileSink`

|     % |     Size | Instances | Path                                                                                  |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------- |
| 62.6% | 1.23 KiB |         1 | `FileSink ← Structure ← GlobalObject`                                                 |
| 18.7% |    376 B |         1 | `FileSink ←.kWriteStreamFastPath– WriteStream ←.stdout– url  ←.process– GlobalObject` |
| 18.7% |    376 B |         1 | `FileSink ←.kWriteStreamFastPath– WriteStream ←.stderr– url  ←.process– GlobalObject` |

##### `FileInternalReadableStreamSource`

|     % |     Size | Instances | Path                                           |
| ----: | -------: | --------: | ---------------------------------------------- |
| 67.4% | 1.27 KiB |         1 | `FileInternalReadableStreamSource ← Structure` |
| 32.6% |    632 B |         1 | `FileInternalReadableStreamSource ← (GC root)` |

##### `Stats`

|      % |     Size | Instances | Path                                   |
| -----: | -------: | --------: | -------------------------------------- |
| 100.0% | 1.23 KiB |         1 | `Stats ←(several paths)– GlobalObject` |

##### `AsyncDisposableStack`

|      % |     Size | Instances | Path                                                  |
| -----: | -------: | --------: | ----------------------------------------------------- |
| 100.0% | 1.16 KiB |         1 | `AsyncDisposableStack ←(several paths)– GlobalObject` |

##### `ModuleRecord`

|    % |     Size | Instances | Path                       |
| ---: | -------: | --------: | -------------------------- |
| 0.0% | 27.5 KiB |         4 | `ModuleRecord ← (GC root)` |

## Largest functions

Functions with the most instance bytes, including nodes only the instances keep alive.

|    % | Retained | Instances | Paths | Name                 | Example path                                                                                           |
| ---: | -------: | --------: | ----: | -------------------- | ------------------------------------------------------------------------------------------------------ |
| 4.5% | 68.2 KiB |       374 |   345 | `Function`           | `Function ←.createNativeReadableStream– GlobalObject`                                                  |
| 0.6% | 8.59 KiB |         3 |     3 | `matchesGlob`        | `matchesGlob ←(several paths)– Object ← InternalModuleRegistry ←.internalModuleRegistry– GlobalObject` |
| 0.4% | 6.21 KiB |         1 |     1 | `duplexPair`         | `duplexPair ←(several paths)– GlobalObject`                                                            |
| 0.4% | 5.95 KiB |        41 |    28 | `AsyncFunction`      | `AsyncFunction ←.Symbol.asyncDispose– Object ←(several paths)– GlobalObject`                           |
| 0.4% | 5.87 KiB |        10 |    10 | `SafeIterator`       | `SafeIterator ←(several paths)– GlobalObject`                                                          |
| 0.3% | 5.12 KiB |         1 |     1 | `SafeMap`            | `SafeMap ←.SafeMap– Object ← InternalModuleRegistry ←.internalModuleRegistry– GlobalObject`            |
| 0.3% |  4.9 KiB |         1 |     1 | `SafeSet`            | `SafeSet ←(several paths)– GlobalObject`                                                               |
| 0.3% | 4.49 KiB |         1 |     1 | `requestInstantiate` | `requestInstantiate ←.requestInstantiate– ModuleLoader ←.Loader– GlobalObject`                         |
| 0.3% | 3.91 KiB |         1 |     1 | `requestSatisfyUtil` | `requestSatisfyUtil ←.requestSatisfyUtil– ModuleLoader ←.Loader– GlobalObject`                         |
| 0.2% |  3.8 KiB |         2 |     1 | `compose`            | `compose ←(several paths)– GlobalObject`                                                               |
| 0.2% | 3.72 KiB |         1 |     1 | `Object`             | `Object ← (GC root)`                                                                                   |
| 0.2% | 3.12 KiB |         1 |     1 | `PassThrough`        | `PassThrough ←(several paths)– GlobalObject`                                                           |
| 0.2% | 3.06 KiB |        25 |    24 | `anonymous`          | `anonymous ←.charCodeAt– String ← GlobalObject`                                                        |
| 0.2% | 3.04 KiB |         2 |     2 | `pipeline`           | `pipeline ←.pipeline– Object ←(several paths)– GlobalObject`                                           |
| 0.2% | 2.95 KiB |        85 |    54 | `get`                | `get ← GetterSetter ←.self– GlobalObject`                                                              |
| 0.2% | 2.49 KiB |         1 |     1 | `Stream`             | `Stream ←(several paths)– GlobalObject`                                                                |
| 0.2% | 2.39 KiB |         6 |     3 | `forEach`            | `forEach ←(several paths)– GlobalObject`                                                               |
| 0.2% | 2.36 KiB |        63 |    44 | `set`                | `set ← GetterSetter ←.self– GlobalObject`                                                              |
| 0.2% | 2.33 KiB |        20 |    20 | `call`               | `call ← (GC root)`                                                                                     |
| 0.1% | 2.29 KiB |         1 |     1 | `newRegistryEntry`   | `newRegistryEntry ← GlobalObject`                                                                      |

### Retained nodes

Retained nodes with the largest contribution to each function's retained size.

#### `Function`

|    % |  Self | Name                        | Path                                                                                                                   |
| ---: | ----: | --------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 0.7% | 484 B | `FunctionCodeBlock`         | `FunctionCodeBlock ← FunctionExecutable ← Function ←.createNativeReadableStream– GlobalObject`                         |
| 0.5% | 375 B | `UnlinkedFunctionCodeBlock` | `UnlinkedFunctionCodeBlock ←(several paths)– FunctionExecutable ← Function ←.createNativeReadableStream– GlobalObject` |
| 0.2% | 128 B | `FunctionExecutable`        | `FunctionExecutable ← Function ←.isReadableByteStreamController– GlobalObject`                                         |
| 0.2% | 128 B | `FunctionExecutable`        | `FunctionExecutable ← Function ←.isReadableStreamBYOBReader– GlobalObject`                                             |
| 0.2% | 128 B | `FunctionExecutable`        | `FunctionExecutable ← Function ←.isReadableStreamBYOBRequest– GlobalObject`                                            |

#### `matchesGlob`

|     % |     Self | Name                         | Path                                                                                                                                                                                         |
| ----: | -------: | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 73.9% | 6.35 KiB | `FunctionCodeBlock`          | `FunctionCodeBlock ← FunctionExecutable ← FunctionExecutable ← matchesGlob ←(several paths)– Object ← InternalModuleRegistry ←.internalModuleRegistry– GlobalObject`                         |
| 15.0% | 1.29 KiB | `UnlinkedFunctionCodeBlock`  | `UnlinkedFunctionCodeBlock ←(several paths)– FunctionExecutable ← FunctionExecutable ← matchesGlob ←(several paths)– Object ← InternalModuleRegistry ←.internalModuleRegistry– GlobalObject` |
|  1.5% |    128 B | `FunctionExecutable`         | `FunctionExecutable ← matchesGlob ←(several paths)– Object ← InternalModuleRegistry ←.internalModuleRegistry– GlobalObject`                                                                  |
|  1.5% |    128 B | `FunctionExecutable`         | `FunctionExecutable ← FunctionExecutable ← matchesGlob ←(several paths)– Object ← InternalModuleRegistry ←.internalModuleRegistry– GlobalObject`                                             |
|  1.1% |     96 B | `UnlinkedFunctionExecutable` | `UnlinkedFunctionExecutable ← FunctionExecutable ← matchesGlob ←(several paths)– Object ← InternalModuleRegistry ←.internalModuleRegistry– GlobalObject`                                     |

#### `duplexPair`

|     % |     Self | Name                        | Path                                                                                                                         |
| ----: | -------: | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 22.7% | 1.41 KiB | `FunctionCodeBlock`         | `FunctionCodeBlock ← FunctionExecutable ←(several paths)– duplexPair ←(several paths)– GlobalObject`                         |
| 10.7% |    678 B | `UnlinkedFunctionCodeBlock` | `UnlinkedFunctionCodeBlock ←(several paths)– FunctionExecutable ←(several paths)– duplexPair ←(several paths)– GlobalObject` |
|  2.0% |    128 B | `FunctionExecutable`        | `FunctionExecutable ←(several paths)– duplexPair ←(several paths)– GlobalObject`                                             |
|  2.0% |    128 B | `FunctionExecutable`        | `FunctionExecutable ←(several paths)– duplexPair ←(several paths)– GlobalObject`                                             |
|  2.0% |    128 B | `FunctionExecutable`        | `FunctionExecutable ←(several paths)– duplexPair ←(several paths)– GlobalObject`                                             |

#### `AsyncFunction`

|    % |  Self | Name                   | Path                                                                                     |
| ---: | ----: | ---------------------- | ---------------------------------------------------------------------------------------- |
| 1.8% | 112 B | `Structure`            | `Structure ← AsyncFunction ←.Symbol.asyncDispose– Object ←(several paths)– GlobalObject` |
| 1.8% | 112 B | `Structure`            | `Structure ← AsyncFunction ←.constructor– AsyncFunction ← GlobalObject`                  |
| 0.8% |  48 B | `JSLexicalEnvironment` | `JSLexicalEnvironment ← AsyncFunction ←.rmdir– Object ←(several paths)– GlobalObject`    |
| 0.8% |  48 B | `JSLexicalEnvironment` | `JSLexicalEnvironment ← AsyncFunction ←.rm– Object ←(several paths)– GlobalObject`       |
| 0.8% |  48 B | `JSLexicalEnvironment` | `JSLexicalEnvironment ← AsyncFunction ←.lutimes– Object ←(several paths)– GlobalObject`  |

#### `SafeIterator`

|    % | Self | Name   | Path                                                                                                                                                                         |
| ---: | ---: | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.6% | 96 B | `call` | `call ←.factory– JSLexicalEnvironment ← SafeIterator ←(several paths)– GlobalObject`                                                                                         |
| 1.6% | 96 B | `call` | `call ←.next_– JSLexicalEnvironment ← SafeIterator ←(several paths)– GlobalObject`                                                                                           |
| 1.6% | 96 B | `call` | `call ←.factory– JSLexicalEnvironment ← SafeIterator ←.SafeIterator– JSLexicalEnvironment ← Function ←.entries– Object ←.homeObject– SafeSet ←(several paths)– GlobalObject` |
| 1.6% | 96 B | `call` | `call ←.factory– JSLexicalEnvironment ← SafeIterator ←.SafeIterator– JSLexicalEnvironment ← Function ←.keys– Object ←.homeObject– SafeSet ←(several paths)– GlobalObject`    |
| 1.6% | 96 B | `call` | `call ←.factory– JSLexicalEnvironment ← SafeIterator ←.SafeIterator– JSLexicalEnvironment ← Function ←.values– Object ←.homeObject– SafeSet ←(several paths)– GlobalObject`  |

#### `SafeMap`

|    % |  Self | Name        | Path                                                                                                                                                 |
| ---: | ----: | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.1% | 112 B | `Structure` | `Structure ← Object ←.homeObject– SafeMap ←.SafeMap– Object ← InternalModuleRegistry ←.internalModuleRegistry– GlobalObject`                         |
| 2.1% | 112 B | `Structure` | `Structure ← Structure ← Object ←.homeObject– SafeMap ←.SafeMap– Object ← InternalModuleRegistry ←.internalModuleRegistry– GlobalObject`             |
| 2.1% | 112 B | `Structure` | `Structure ← Structure ← Structure ← Object ←.homeObject– SafeMap ←.SafeMap– Object ← InternalModuleRegistry ←.internalModuleRegistry– GlobalObject` |
| 2.1% | 112 B | `Structure` | `Structure ← SafeMap ←.SafeMap– Object ← InternalModuleRegistry ←.internalModuleRegistry– GlobalObject`                                              |
| 2.1% | 112 B | `Structure` | `Structure ← Structure ← SafeMap ←.SafeMap– Object ← InternalModuleRegistry ←.internalModuleRegistry– GlobalObject`                                  |

#### `SafeSet`

|    % |  Self | Name        | Path                                                                                              |
| ---: | ----: | ----------- | ------------------------------------------------------------------------------------------------- |
| 2.2% | 112 B | `Structure` | `Structure ← Object ←.homeObject– SafeSet ←(several paths)– GlobalObject`                         |
| 2.2% | 112 B | `Structure` | `Structure ← Structure ← Object ←.homeObject– SafeSet ←(several paths)– GlobalObject`             |
| 2.2% | 112 B | `Structure` | `Structure ← Structure ← Structure ← Object ←.homeObject– SafeSet ←(several paths)– GlobalObject` |
| 2.2% | 112 B | `Structure` | `Structure ← SafeSet ←(several paths)– GlobalObject`                                              |
| 2.2% | 112 B | `Structure` | `Structure ← Structure ← SafeSet ←(several paths)– GlobalObject`                                  |

#### `requestInstantiate`

|     % |     Self | Name                 | Path                                                                                                                                                                                                      |
| ----: | -------: | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 57.5% | 2.58 KiB | `FunctionCodeBlock`  | `FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← requestInstantiate ←.requestInstantiate– ModuleLoader ←.Loader– GlobalObject` |
| 15.8% |    724 B | `FunctionCodeBlock`  | `FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← requestInstantiate ←.requestInstantiate– ModuleLoader ←.Loader– GlobalObject`                                          |
| 14.9% |    684 B | `FunctionCodeBlock`  | `FunctionCodeBlock ← FunctionExecutable ← requestInstantiate ←.requestInstantiate– ModuleLoader ←.Loader– GlobalObject`                                                                                   |
|  2.8% |    128 B | `FunctionExecutable` | `FunctionExecutable ← requestInstantiate ←.requestInstantiate– ModuleLoader ←.Loader– GlobalObject`                                                                                                       |
|  2.8% |    128 B | `FunctionExecutable` | `FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← requestInstantiate ←.requestInstantiate– ModuleLoader ←.Loader– GlobalObject`                                                              |

#### `requestSatisfyUtil`

|     % |     Self | Name                 | Path                                                                                                                                                                                                      |
| ----: | -------: | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 48.5% | 1.89 KiB | `FunctionCodeBlock`  | `FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← requestSatisfyUtil ←.requestSatisfyUtil– ModuleLoader ←.Loader– GlobalObject`                                          |
| 23.1% |    924 B | `FunctionCodeBlock`  | `FunctionCodeBlock ← FunctionExecutable ← requestSatisfyUtil ←.requestSatisfyUtil– ModuleLoader ←.Loader– GlobalObject`                                                                                   |
| 14.9% |    596 B | `FunctionCodeBlock`  | `FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← requestSatisfyUtil ←.requestSatisfyUtil– ModuleLoader ←.Loader– GlobalObject` |
|  3.2% |    128 B | `FunctionExecutable` | `FunctionExecutable ← requestSatisfyUtil ←.requestSatisfyUtil– ModuleLoader ←.Loader– GlobalObject`                                                                                                       |
|  3.2% |    128 B | `FunctionExecutable` | `FunctionExecutable ← FunctionCodeBlock ← FunctionExecutable ← requestSatisfyUtil ←.requestSatisfyUtil– ModuleLoader ←.Loader– GlobalObject`                                                              |

#### `compose`

|     % |     Self | Name                        | Path                                                                                                                           |
| ----: | -------: | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 53.6% | 2.04 KiB | `FunctionCodeBlock`         | `FunctionCodeBlock ← FunctionExecutable ← FunctionExecutable ← compose ←(several paths)– GlobalObject`                         |
| 19.8% |    772 B | `UnlinkedFunctionCodeBlock` | `UnlinkedFunctionCodeBlock ←(several paths)– FunctionExecutable ← FunctionExecutable ← compose ←(several paths)– GlobalObject` |
|  4.1% |    160 B | `JSLexicalEnvironment`      | `JSLexicalEnvironment ← compose ←(several paths)– GlobalObject`                                                                |
|  3.3% |    128 B | `FunctionExecutable`        | `FunctionExecutable ← compose ←(several paths)– GlobalObject`                                                                  |
|  3.3% |    128 B | `FunctionExecutable`        | `FunctionExecutable ← FunctionExecutable ← compose ←(several paths)– GlobalObject`                                             |

#### `Object`

|    % |  Self | Name                 | Path                                                     |
| ---: | ----: | -------------------- | -------------------------------------------------------- |
| 3.4% | 128 B | `FunctionExecutable` | `FunctionExecutable ← groupBy ←.groupBy– Object`         |
| 2.9% | 112 B | `Structure`          | `Structure ← Object`                                     |
| 2.9% | 112 B | `Structure`          | `Structure ← Structure ← Object`                         |
| 2.9% | 112 B | `Structure`          | `Structure ← Structure ← Structure ← Object`             |
| 2.9% | 112 B | `Structure`          | `Structure ← Structure ← Structure ← Structure ← Object` |

#### `PassThrough`

|     % |  Self | Name                        | Path                                                                                                                          |
| ----: | ----: | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 28.2% | 900 B | `FunctionCodeBlock`         | `FunctionCodeBlock ← FunctionExecutable ←(several paths)– PassThrough ←(several paths)– GlobalObject`                         |
| 15.1% | 484 B | `UnlinkedFunctionCodeBlock` | `UnlinkedFunctionCodeBlock ←(several paths)– FunctionExecutable ←(several paths)– PassThrough ←(several paths)– GlobalObject` |
|  4.0% | 128 B | `FunctionExecutable`        | `FunctionExecutable ←(several paths)– PassThrough ←(several paths)– GlobalObject`                                             |
|  4.0% | 128 B | `FunctionExecutable`        | `FunctionExecutable ←(several paths)– PassThrough ←(several paths)– GlobalObject`                                             |
|  4.0% | 128 B | `FunctionExecutable`        | `FunctionExecutable ← PassThrough ←(several paths)– GlobalObject`                                                             |

#### `anonymous`

|    % | Self | Name               | Path                                                                             |
| ---: | ---: | ------------------ | -------------------------------------------------------------------------------- |
| 2.6% | 80 B | `NativeExecutable` | `NativeExecutable ← anonymous ←(several paths)– GlobalObject`                    |
| 2.6% | 80 B | `NativeExecutable` | `NativeExecutable ← anonymous ←.charCodeAt– String ← GlobalObject`               |
| 2.6% | 80 B | `NativeExecutable` | `NativeExecutable ← anonymous ←.substr– String ← GlobalObject`                   |
| 2.6% | 80 B | `NativeExecutable` | `NativeExecutable ← anonymous ←.endsWith– String ← GlobalObject`                 |
| 2.6% | 80 B | `NativeExecutable` | `NativeExecutable ← anonymous ←.isView– ArrayBuffer ←.ArrayBuffer– GlobalObject` |

#### `pipeline`

|     % |     Self | Name                        | Path                                                                                                                                               |
| ----: | -------: | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 44.0% | 1.34 KiB | `FunctionCodeBlock`         | `FunctionCodeBlock ← FunctionExecutable ← FunctionExecutable ← pipeline ←.pipeline– Object ←(several paths)– GlobalObject`                         |
| 19.6% |    611 B | `UnlinkedFunctionCodeBlock` | `UnlinkedFunctionCodeBlock ←(several paths)– FunctionExecutable ← FunctionExecutable ← pipeline ←.pipeline– Object ←(several paths)– GlobalObject` |
|  4.1% |    128 B | `FunctionExecutable`        | `FunctionExecutable ← pipeline ←.pipeline– Object ←(several paths)– GlobalObject`                                                                  |
|  4.1% |    128 B | `FunctionExecutable`        | `FunctionExecutable ← FunctionExecutable ← pipeline ←.pipeline– Object ←(several paths)– GlobalObject`                                             |
|  3.6% |    112 B | `Structure`                 | `Structure ← pipeline ←(several paths)– GlobalObject`                                                                                              |

#### `get`

|    % | Self | Name               | Path                                                         |
| ---: | ---: | ------------------ | ------------------------------------------------------------ |
| 2.7% | 80 B | `NativeExecutable` | `NativeExecutable ← get ←(several paths)– GlobalObject`      |
| 2.7% | 80 B | `NativeExecutable` | `NativeExecutable ← get ←(several paths)– GlobalObject`      |
| 2.7% | 80 B | `NativeExecutable` | `NativeExecutable ← get ← GetterSetter ←.self– GlobalObject` |
| 0.6% | 18 B | `get`              | `get ←.name– get ← GetterSetter ←.self– GlobalObject`        |
| 0.6% | 17 B | `get`              | `get ←.name– get ←(several paths)– GlobalObject`             |

#### `Stream`

|    % |  Self | Name        | Path                                                                                                |
| ---: | ----: | ----------- | --------------------------------------------------------------------------------------------------- |
| 4.4% | 112 B | `Structure` | `Structure ← Stream ←(several paths)– GlobalObject`                                                 |
| 4.4% | 112 B | `Structure` | `Structure ← Structure ← Stream ←(several paths)– GlobalObject`                                     |
| 4.4% | 112 B | `Structure` | `Structure ← Structure ← Structure ← Stream ←(several paths)– GlobalObject`                         |
| 4.4% | 112 B | `Structure` | `Structure ← Structure ← Structure ← Structure ← Stream ←(several paths)– GlobalObject`             |
| 4.4% | 112 B | `Structure` | `Structure ← Structure ← Structure ← Structure ← Structure ← Stream ←(several paths)– GlobalObject` |

#### `forEach`

|     % |  Self | Name                 | Path                                                                                                 |
| ----: | ----: | -------------------- | ---------------------------------------------------------------------------------------------------- |
| 33.8% | 828 B | `FunctionCodeBlock`  | `FunctionCodeBlock ← FunctionExecutable ← FunctionRareData ← forEach ←(several paths)– GlobalObject` |
| 24.7% | 604 B | `FunctionCodeBlock`  | `FunctionCodeBlock ← FunctionExecutable ← forEach ←(several paths)– GlobalObject`                    |
|  5.2% | 128 B | `FunctionExecutable` | `FunctionExecutable ← forEach ←(several paths)– GlobalObject`                                        |
|  5.2% | 128 B | `FunctionExecutable` | `FunctionExecutable ← FunctionRareData ← forEach ←(several paths)– GlobalObject`                     |
|  5.2% | 128 B | `FunctionExecutable` | `FunctionExecutable ← FunctionRareData ← forEach ←(several paths)– GlobalObject`                     |

#### `set`

|    % | Self | Name               | Path                                                         |
| ---: | ---: | ------------------ | ------------------------------------------------------------ |
| 3.3% | 80 B | `NativeExecutable` | `NativeExecutable ← set ←(several paths)– GlobalObject`      |
| 3.3% | 80 B | `NativeExecutable` | `NativeExecutable ← set ←(several paths)– GlobalObject`      |
| 3.3% | 80 B | `NativeExecutable` | `NativeExecutable ← set ←(several paths)– GlobalObject`      |
| 3.3% | 80 B | `NativeExecutable` | `NativeExecutable ← set ← GetterSetter ←.self– GlobalObject` |
| 0.7% | 18 B | `set`              | `set ←.name– set ← GetterSetter ←.self– GlobalObject`        |

#### `call`

|     % |  Self | Name                 | Path                                            |
| ----: | ----: | -------------------- | ----------------------------------------------- |
| 16.9% | 404 B | `FunctionCodeBlock`  | `FunctionCodeBlock ← FunctionExecutable ← call` |
|  5.4% | 128 B | `FunctionExecutable` | `FunctionExecutable ← call`                     |

#### `newRegistryEntry`

|     % |  Self | Name                 | Path                                                                       |
| ----: | ----: | -------------------- | -------------------------------------------------------------------------- |
| 24.8% | 580 B | `FunctionCodeBlock`  | `FunctionCodeBlock ← FunctionExecutable ← newRegistryEntry ← GlobalObject` |
|  5.5% | 128 B | `FunctionExecutable` | `FunctionExecutable ← newRegistryEntry ← GlobalObject`                     |
|  4.8% | 112 B | `Structure`          | `Structure ← FunctionExecutable ← newRegistryEntry ← GlobalObject`         |
|  4.8% | 112 B | `Structure`          | `Structure ← FunctionExecutable ← newRegistryEntry ← GlobalObject`         |
|  4.8% | 112 B | `Structure`          | `Structure ← FunctionExecutable ← newRegistryEntry ← GlobalObject`         |

## Largest strings

Strings with the most bytes.

### Categories

Categories accounting for at least 1.0% of self size.

#### String

|     % |  Size | Value                                                    | Path                                                                                                                                                                                                          |
| ----: | ----: | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <0.1% | 374 B | `http://atq.ck.valuecommerce.com/servlet/atq/refer…`     | `http://atq.ck.valuecommerce.com/servlet/atq/refer… ←.expanded_url– Object ←[0]– Array (1) ←.urls– Object ←.entities– Object ←[42]– Array (100) ←.statuses– Object ←.data– Object ←.__retained– GlobalObject` |
| <0.1% | 336 B | `ROMって楽しんでいる部分もあり無言フォロー多めですすみません…。ツイート数多め・あらぶり多めなの…`     | `ROMって楽しんでいる部分もあり無言フォロー多めですすみません…。ツイート数多め・あらぶり多めなの… ←.description– Object ←.user– Object ←[25]– Array (100) ←.statuses– Object ←.data– Object ←.__retained– GlobalObject`                                     |
| <0.1% | 334 B | `アッサム山中の趣味用アカ。当分の間、選挙啓発用としても使っていきます。このアカウントがアッサム山中…`     | `アッサム山中の趣味用アカ。当分の間、選挙啓発用としても使っていきます。このアカウントがアッサム山中… ←.description– Object ←.user– Object ←.retweeted_status– Object ←[17]– Array (100) ←.statuses– Object ←.data– Object ←.__retained– GlobalObject`          |
| <0.1% | 334 B | `ブリヂストンのスポーツタイヤ「POTENZA」のアカウントです。レースやタイヤの事などをつぶやきま…`     | `ブリヂストンのスポーツタイヤ「POTENZA」のアカウントです。レースやタイヤの事などをつぶやきま… ←.description– Object ←.user– Object ←.retweeted_status– Object ←[12]– Array (100) ←.statuses– Object ←.data– Object ←.__retained– GlobalObject`          |
| <0.1% | 332 B | `THE SECOND/劇団EXILE/EXILE/二代目JSB ☞KENCHI.AKIRA.青柳翔…`     | `THE SECOND/劇団EXILE/EXILE/二代目JSB ☞KENCHI.AKIRA.青柳翔… ←.description– Object ←.user– Object ←[41]– Array (100) ←.statuses– Object ←.data– Object ←.__retained– GlobalObject`                                     |
| <0.1% | 326 B | `ﾟ.＊97line おさらに貢いでる系女子＊.゜                         …`     | `ﾟ.＊97line おさらに貢いでる系女子＊.゜                         … ←.description– Object ←.user– Object ←[8]– Array (100) ←.statuses– Object ←.data– Object ←.__retained– GlobalObject`                                      |
| <0.1% | 314 B | `ニコ動で踊り手やってます!!応援本当に嬉しいですありがとうございます!!　ぽっちゃりだけど前向きに…`     | `ニコ動で踊り手やってます!!応援本当に嬉しいですありがとうございます!!　ぽっちゃりだけど前向きに… ←.description– Object ←.user– Object ←[99]– Array (100) ←.statuses– Object ←.data– Object ←.__retained– GlobalObject`                                     |
| <0.1% | 306 B | `【無断転載禁止･コピペ禁止・非公式RT禁止】【必読！】⇒ http://t.co/nuUvfUVD…`     | `【無断転載禁止･コピペ禁止・非公式RT禁止】【必読！】⇒ http://t.co/nuUvfUVD… ←.description– Object ←.user– Object ←[57]– Array (100) ←.statuses– Object ←.data– Object ←.__retained– GlobalObject`                                     |
| <0.1% | 304 B | `bot遊びと実況が主目的の趣味アカウント。成人済♀。時々TLお騒がせします。リフォ率低いですがＦ／…`     | `bot遊びと実況が主目的の趣味アカウント。成人済♀。時々TLお騒がせします。リフォ率低いですがＦ／… ←.description– Object ←.user– Object ←[6]– Array (100) ←.statuses– Object ←.data– Object ←.__retained– GlobalObject`                                      |
| <0.1% | 304 B | `@aym0566x \n\n名前:前田あゆみ\n第一印象:なんか怖っ！\n今の印象:とりあえずキモい。噛み…` | `@aym0566x \n\n名前:前田あゆみ\n第一印象:なんか怖っ！\n今の印象:とりあえずキモい。噛み… ←.text– Object ←[0]– Array (100) ←.statuses– Object ←.data– Object ←.__retained– GlobalObject`                                                        |
| <0.1% | 298 B | `ヤー・チャイカ。紫宝勢の末席くらいでQMAやってます。 \n9/13（土）「九州杯」今年も宜しくお願…`    | `ヤー・チャイカ。紫宝勢の末席くらいでQMAやってます。 \n9/13（土）「九州杯」今年も宜しくお願… ←.description– Object ←.user– Object ←[45]– Array (100) ←.statuses– Object ←.data– Object ←.__retained– GlobalObject`                                    |
| <0.1% | 298 B | `RT @AFmbsk: @samao21718 \n呼び方☞まおちゃん\n呼ばれ方☞あーちゃん\n第一印…`  | `RT @AFmbsk: @samao21718 \n呼び方☞まおちゃん\n呼ばれ方☞あーちゃん\n第一印… ←.text– Object ←[8]– Array (100) ←.statuses– Object ←.data– Object ←.__retained– GlobalObject`                                                         |
| <0.1% | 296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな… ←.text– Object ←[68]– Array (100) ←.statuses– Object ←.data– Object ←.__retained– GlobalObject`                                                           |
| <0.1% | 296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな… ←.text– Object ←[75]– Array (100) ←.statuses– Object ←.data– Object ←.__retained– GlobalObject`                                                           |
| <0.1% | 296 B | `一に止まると書いて、正しいという意味だなんて、この年になるまで知りませんでした。 人は生きていると…`     | `一に止まると書いて、正しいという意味だなんて、この年になるまで知りませんでした。 人は生きていると… ←.text– Object ←.retweeted_status– Object ←[68]– Array (100) ←.statuses– Object ←.data– Object ←.__retained– GlobalObject`                                |
| <0.1% | 296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな… ←.text– Object ←[51]– Array (100) ←.statuses– Object ←.data– Object ←.__retained– GlobalObject`                                                           |
| <0.1% | 296 B | `一に止まると書いて、正しいという意味だなんて、この年になるまで知りませんでした。 人は生きていると…`     | `一に止まると書いて、正しいという意味だなんて、この年になるまで知りませんでした。 人は生きていると… ←.text– Object ←.retweeted_status– Object ←[75]– Array (100) ←.statuses– Object ←.data– Object ←.__retained– GlobalObject`                                |
| <0.1% | 296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな… ←.text– Object ←[74]– Array (100) ←.statuses– Object ←.data– Object ←.__retained– GlobalObject`                                                           |
| <0.1% | 296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな… ←.text– Object ←[58]– Array (100) ←.statuses– Object ←.data– Object ←.__retained– GlobalObject`                                                           |
| <0.1% | 296 B | `一に止まると書いて、正しいという意味だなんて、この年になるまで知りませんでした。 人は生きていると…`     | `一に止まると書いて、正しいという意味だなんて、この年になるまで知りませんでした。 人は生きていると… ←.text– Object ←.retweeted_status– Object ←[74]– Array (100) ←.statuses– Object ←.data– Object ←.__retained– GlobalObject`                                |

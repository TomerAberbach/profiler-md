# Heap snapshot

Allocated 1.48 MiB across 16,629 nodes and 44,433 edges.

| Category           |     % |     Size | Nodes |
| ------------------ | ----: | -------: | ----: |
| Code               | 45.7% |  693 KiB | 3,192 |
| String             | 23.5% |  356 KiB | 6,272 |
| Object shape       | 12.7% |  193 KiB | 1,764 |
| Object             |  7.5% |  114 KiB | 1,471 |
| Internal           |  5.0% | 75.5 KiB |   962 |
| Function           |  4.3% |   65 KiB | 1,811 |
| Array              |  1.1% | 16.8 KiB | 1,073 |
| Symbol             |  0.1% |  1.2 KiB |    77 |
| Native             | <0.1% |    387 B |     3 |
| Regular expression | <0.1% |     64 B |     2 |
| Big number         | <0.1% |     32 B |     1 |
| Synthetic          |  0.0% |      0 B |     1 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

|     % |     Size | Instances | Constructor                         |
| ----: | -------: | --------: | ----------------------------------- |
|  6.4% | 96.7 KiB |     1,367 | `Object`                            |
|  1.8% | 27.5 KiB |         4 | `ModuleRecord`                      |
|  0.7% | 10.3 KiB |         1 | `GlobalObject`                      |
|  0.1% | 1.19 KiB |         1 | `InternalModuleRegistry`            |
|  0.1% | 1.14 KiB |         2 | `NodeJSFS`                          |
|  0.1% |    779 B |         3 | `FileSink`                          |
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

#### Instances

Instances ranked by contribution to each constructor's self size.

##### `Object`

|    % |     Size | Instances | Path                                                                              |
| ---: | -------: | --------: | --------------------------------------------------------------------------------- |
| 1.9% | 1.79 KiB |         5 | `(GC root)`                                                                       |
| 1.2% |  1.2 KiB |         5 | `. InternalModuleRegistry ← .internalModuleRegistry GlobalObject`                 |
| 0.2% |    232 B |         1 | `. GlobalObject`                                                                  |
| 0.2% |    225 B |         1 | `.versions url  ← .process GlobalObject`                                          |
| 0.2% |    160 B |         1 | `.win32 Object ← . InternalModuleRegistry ← .internalModuleRegistry GlobalObject` |

##### `ModuleRecord`

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 27.5 KiB |         4 | `(GC root)` |

##### `GlobalObject`

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 10.3 KiB |         1 | `(GC root)` |

##### `InternalModuleRegistry`

|      % |     Size | Instances | Path                                   |
| -----: | -------: | --------: | -------------------------------------- |
| 100.0% | 1.19 KiB |         1 | `.internalModuleRegistry GlobalObject` |

##### `NodeJSFS`

|     % |     Size | Instances | Path                           |
| ----: | -------: | --------: | ------------------------------ |
| 90.9% | 1.04 KiB |         1 | `(GC root)`                    |
|  9.1% |    106 B |         1 | `. Structure ← . GlobalObject` |

##### `FileSink`

|     % |  Size | Instances | Path                                                                       |
| ----: | ----: | --------: | -------------------------------------------------------------------------- |
| 48.3% | 376 B |         1 | `.kWriteStreamFastPath WriteStream ← .stderr url  ← .process GlobalObject` |
| 48.3% | 376 B |         1 | `.kWriteStreamFastPath WriteStream ← .stdout url  ← .process GlobalObject` |
|  3.5% |  27 B |         1 | `. Structure ← . GlobalObject`                                             |

##### `FileInternalReadableStreamSource`

|     % |  Size | Instances | Path          |
| ----: | ----: | --------: | ------------- |
| 95.9% | 632 B |         1 | `(GC root)`   |
|  4.1% |  27 B |         1 | `. Structure` |

##### `Blob`

|     % |  Size | Instances | Path             |
| ----: | ----: | --------: | ---------------- |
| 90.4% | 328 B |         1 | `. GlobalObject` |
|  9.6% |  35 B |         1 | `(GC root)`      |

##### `Map`

|     % |  Size | Instances | Path                                                                                                                                    |
| ----: | ----: | --------: | --------------------------------------------------------------------------------------------------------------------------------------- |
| 31.9% | 105 B |         3 | `(GC root)`                                                                                                                             |
|  9.7% |  32 B |         1 | `.requireMap GlobalObject`                                                                                                              |
|  9.7% |  32 B |         1 | `.registry ModuleLoader ← .Loader GlobalObject`                                                                                         |
|  9.7% |  32 B |         1 | `.dummy JSLexicalEnvironment ← .homeObject SafeMap ← .SafeMap Object ← . InternalModuleRegistry ← .internalModuleRegistry GlobalObject` |
|  9.7% |  32 B |         1 | `.byId Object ← .__retained GlobalObject`                                                                                               |

##### `Promise (fulfilled: Object)`

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 256 B |         8 | `(GC root)` |

##### `WriteStream`

|     % |  Size | Instances | Path                                   |
| ----: | ----: | --------: | -------------------------------------- |
| 50.0% | 121 B |         1 | `.stdout url  ← .process GlobalObject` |
| 50.0% | 121 B |         1 | `.stderr url  ← .process GlobalObject` |

##### `url `

|      % |  Size | Instances | Path                    |
| -----: | ----: | --------: | ----------------------- |
| 100.0% | 213 B |         1 | `.process GlobalObject` |

##### `Promise (fulfilled: JSSourceCode)`

|      % |  Size | Instances | Path        |
| -----: | ----: | --------: | ----------- |
| 100.0% | 128 B |         4 | `(GC root)` |

##### `Set`

|     % | Size | Instances | Path                                                        |
| ----: | ---: | --------: | ----------------------------------------------------------- |
| 40.7% | 44 B |         1 | `(GC root)`                                                 |
| 29.6% | 32 B |         1 | `.allowedNodeEnvironmentFlags url  ← .process GlobalObject` |
| 29.6% | 32 B |         1 | `.dummy JSLexicalEnvironment ← .homeObject SafeSet`         |

##### `Callee`

|      % | Size | Instances | Path             |
| -----: | ---: | --------: | ---------------- |
| 100.0% | 96 B |         3 | `. GlobalObject` |

##### `ReadableStream`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% | 89 B |         2 | `(GC root)` |

##### `ReadStream`

|      % | Size | Instances | Path                                  |
| -----: | ---: | --------: | ------------------------------------- |
| 100.0% | 89 B |         1 | `.stdin url  ← .process GlobalObject` |

##### `String`

|      % | Size | Instances | Path             |
| -----: | ---: | --------: | ---------------- |
| 100.0% | 70 B |         1 | `. GlobalObject` |

##### `ModuleNamespaceObject`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% | 65 B |         1 | `(GC root)` |

##### `Promise (fulfilled)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% | 64 B |         2 | `(GC root)` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

|     % |     Size | Instances | Constructor                        |
| ----: | -------: | --------: | ---------------------------------- |
| 83.7% | 1.24 MiB |         1 | `GlobalObject`                     |
| 40.2% |  609 KiB |     1,367 | `Object`                           |
|  3.5% | 52.3 KiB |         1 | `InternalModuleRegistry`           |
|  3.4% | 51.8 KiB |         1 | `url `                             |
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

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `GlobalObject`

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 1.24 MiB |         1 | `(GC root)` |

##### `Object`

|     % |     Size | Instances | Path                                                                            |
| ----: | -------: | --------: | ------------------------------------------------------------------------------- |
| 75.2% |  458 KiB |         1 | `.__retained GlobalObject`                                                      |
| 72.5% |  442 KiB |         1 | `.data Object ← .__retained GlobalObject`                                       |
|  5.9% | 36.2 KiB |         2 | `(GC root)`                                                                     |
|  5.1% | 31.1 KiB |         2 | `. InternalModuleRegistry ← .internalModuleRegistry GlobalObject`               |
|  1.4% | 8.48 KiB |         1 | `[12] Array (100) ← .statuses Object ← .data Object ← .__retained GlobalObject` |

##### `InternalModuleRegistry`

|      % |     Size | Instances | Path                                   |
| -----: | -------: | --------: | -------------------------------------- |
| 100.0% | 52.3 KiB |         1 | `.internalModuleRegistry GlobalObject` |

##### `url `

|      % |     Size | Instances | Path                    |
| -----: | -------: | --------: | ----------------------- |
| 100.0% | 51.8 KiB |         1 | `.process GlobalObject` |

##### `ModuleLoader`

|      % |     Size | Instances | Path                   |
| -----: | -------: | --------: | ---------------------- |
| 100.0% | 22.4 KiB |         1 | `.Loader GlobalObject` |

##### `Map`

|     % |     Size | Instances | Path                                                                                                                                    |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------- |
| 95.5% | 16.1 KiB |         1 | `.byId Object ← .__retained GlobalObject`                                                                                               |
|  2.3% |    393 B |         3 | `(GC root)`                                                                                                                             |
|  2.0% |    352 B |         1 | `.registry ModuleLoader ← .Loader GlobalObject`                                                                                         |
|  0.2% |     32 B |         1 | `.requireMap GlobalObject`                                                                                                              |
|  0.2% |     32 B |         1 | `.dummy JSLexicalEnvironment ← .homeObject SafeMap ← .SafeMap Object ← . InternalModuleRegistry ← .internalModuleRegistry GlobalObject` |

##### `ReadStream`

|      % |     Size | Instances | Path                                  |
| -----: | -------: | --------: | ------------------------------------- |
| 100.0% | 14.9 KiB |         1 | `.stdin url  ← .process GlobalObject` |

##### `WriteStream`

|     % |     Size | Instances | Path                                   |
| ----: | -------: | --------: | -------------------------------------- |
| 50.6% | 4.38 KiB |         1 | `.stdout url  ← .process GlobalObject` |
| 49.4% | 4.28 KiB |         1 | `.stderr url  ← .process GlobalObject` |

##### `console`

|      % |    Size | Instances | Path                    |
| -----: | ------: | --------: | ----------------------- |
| 100.0% | 4.9 KiB |         1 | `.console GlobalObject` |

##### `Prototype`

|      % |     Size | Instances | Path             |
| -----: | -------: | --------: | ---------------- |
| 100.0% | 4.88 KiB |         1 | `. GlobalObject` |

##### `Math`

|      % |     Size | Instances | Path                 |
| -----: | -------: | --------: | -------------------- |
| 100.0% | 4.87 KiB |         1 | `.Math GlobalObject` |

##### `String`

|      % |     Size | Instances | Path             |
| -----: | -------: | --------: | ---------------- |
| 100.0% | 4.46 KiB |         1 | `. GlobalObject` |

##### `ReadableStream`

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 4.22 KiB |         2 | `(GC root)` |

##### `Iterator`

|     % |     Size | Instances | Path                           |
| ----: | -------: | --------: | ------------------------------ |
| 79.2% | 2.36 KiB |         1 | `. GlobalObject`               |
| 20.8% |    635 B |         1 | `. Structure ← . GlobalObject` |

##### `NodeJSFS`

|     % |     Size | Instances | Path                           |
| ----: | -------: | --------: | ------------------------------ |
| 64.8% | 1.92 KiB |         1 | `. Structure ← . GlobalObject` |
| 35.2% | 1.04 KiB |         1 | `(GC root)`                    |

##### `Blob`

|     % |     Size | Instances | Path             |
| ----: | -------: | --------: | ---------------- |
| 86.6% | 2.07 KiB |         1 | `(GC root)`      |
| 13.4% |    328 B |         1 | `. GlobalObject` |

##### `ArrayBuffer`

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 2.35 KiB |         2 | `(GC root)` |

##### `EventEmitter`

|      % |     Size | Instances | Path        |
| -----: | -------: | --------: | ----------- |
| 100.0% | 2.17 KiB |         1 | `(GC root)` |

##### `FileSink`

|     % |     Size | Instances | Path                                                                       |
| ----: | -------: | --------: | -------------------------------------------------------------------------- |
| 62.6% | 1.23 KiB |         1 | `. Structure ← . GlobalObject`                                             |
| 18.7% |    376 B |         1 | `.kWriteStreamFastPath WriteStream ← .stderr url  ← .process GlobalObject` |
| 18.7% |    376 B |         1 | `.kWriteStreamFastPath WriteStream ← .stdout url  ← .process GlobalObject` |

##### `FileInternalReadableStreamSource`

|     % |     Size | Instances | Path          |
| ----: | -------: | --------: | ------------- |
| 67.4% | 1.27 KiB |         1 | `. Structure` |
| 32.6% |    632 B |         1 | `(GC root)`   |

## Largest functions

Functions ranked by bytes that would be freed if the function were garbage collected.

|    % | Retained | Instances | Paths | Name                 | Example path                                                                        |
| ---: | -------: | --------: | ----: | -------------------- | ----------------------------------------------------------------------------------- |
| 4.5% | 68.2 KiB |       374 |   344 | `Function`           | `.createNativeReadableStream GlobalObject`                                          |
| 0.6% | 8.59 KiB |         3 |     3 | `matchesGlob`        | `. InternalModuleRegistry ← .internalModuleRegistry GlobalObject`                   |
| 0.4% | 6.21 KiB |         1 |     1 | `duplexPair`         | `(GC root)`                                                                         |
| 0.4% | 5.95 KiB |        41 |    28 | `AsyncFunction`      | `.Symbol.asyncDispose Object`                                                       |
| 0.4% | 5.87 KiB |        10 |    10 | `SafeIterator`       | `(GC root)`                                                                         |
| 0.3% | 5.12 KiB |         1 |     1 | `SafeMap`            | `.SafeMap Object ← . InternalModuleRegistry ← .internalModuleRegistry GlobalObject` |
| 0.3% |  4.9 KiB |         1 |     1 | `SafeSet`            | `(GC root)`                                                                         |
| 0.3% | 4.49 KiB |         1 |     1 | `requestInstantiate` | `.requestInstantiate ModuleLoader ← .Loader GlobalObject`                           |
| 0.3% | 3.91 KiB |         1 |     1 | `requestSatisfyUtil` | `.requestSatisfyUtil ModuleLoader ← .Loader GlobalObject`                           |
| 0.3% |  3.8 KiB |         2 |     1 | `compose`            | `(GC root)`                                                                         |
| 0.2% | 3.72 KiB |         1 |     1 | `Object`             | `(GC root)`                                                                         |
| 0.2% | 3.12 KiB |         1 |     1 | `PassThrough`        | `(GC root)`                                                                         |
| 0.2% | 3.06 KiB |        25 |    24 | `anonymous`          | `.charCodeAt String ← . GlobalObject`                                               |
| 0.2% | 3.04 KiB |         2 |     2 | `pipeline`           | `.pipeline Object`                                                                  |
| 0.2% | 2.95 KiB |        85 |    54 | `get`                | `. GetterSetter ← .self GlobalObject`                                               |
| 0.2% | 2.49 KiB |         1 |     1 | `Stream`             | `(GC root)`                                                                         |
| 0.2% | 2.39 KiB |         6 |     3 | `forEach`            | `(GC root)`                                                                         |
| 0.2% | 2.36 KiB |        63 |    44 | `set`                | `. GetterSetter ← .self GlobalObject`                                               |
| 0.2% | 2.33 KiB |        20 |    20 | `call`               | `(GC root)`                                                                         |
| 0.2% | 2.29 KiB |         1 |     1 | `newRegistryEntry`   | `. GlobalObject`                                                                    |

### Retained

Nodes ranked by contribution to each function's retained size.

#### `Function`

|    % |  Self | Name                        | Path                                                                           |
| ---: | ----: | --------------------------- | ------------------------------------------------------------------------------ |
| 0.7% | 484 B | `FunctionCodeBlock`         | `. FunctionExecutable ← . Function ← .createNativeReadableStream GlobalObject` |
| 0.5% | 375 B | `UnlinkedFunctionCodeBlock` | `. Function ← .createNativeReadableStream GlobalObject`                        |
| 0.2% | 128 B | `FunctionExecutable`        | `. Function ← .isReadableByteStreamController GlobalObject`                    |
| 0.2% | 128 B | `FunctionExecutable`        | `. Function ← .isReadableStreamBYOBReader GlobalObject`                        |
| 0.2% | 128 B | `FunctionExecutable`        | `. Function ← .isReadableStreamBYOBRequest GlobalObject`                       |

#### `matchesGlob`

|     % |     Self | Name                         | Path                                                                                                                            |
| ----: | -------: | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 73.9% | 6.35 KiB | `FunctionCodeBlock`          | `. FunctionExecutable ← . FunctionExecutable ← . matchesGlob ← . InternalModuleRegistry ← .internalModuleRegistry GlobalObject` |
| 15.0% | 1.29 KiB | `UnlinkedFunctionCodeBlock`  | `. FunctionExecutable ← . matchesGlob ← . InternalModuleRegistry ← .internalModuleRegistry GlobalObject`                        |
|  1.5% |    128 B | `FunctionExecutable`         | `. matchesGlob ← . InternalModuleRegistry ← .internalModuleRegistry GlobalObject`                                               |
|  1.5% |    128 B | `FunctionExecutable`         | `. FunctionExecutable ← . matchesGlob ← . InternalModuleRegistry ← .internalModuleRegistry GlobalObject`                        |
|  1.1% |     96 B | `UnlinkedFunctionExecutable` | `. FunctionExecutable ← . matchesGlob ← . InternalModuleRegistry ← .internalModuleRegistry GlobalObject`                        |

#### `duplexPair`

|     % |     Self | Name                        | Path                   |
| ----: | -------: | --------------------------- | ---------------------- |
| 22.7% | 1.41 KiB | `FunctionCodeBlock`         | `. FunctionExecutable` |
| 10.7% |    678 B | `UnlinkedFunctionCodeBlock` | `(GC root)`            |
|  2.0% |    128 B | `FunctionExecutable`        | `(GC root)`            |
|  2.0% |    128 B | `FunctionExecutable`        | `(GC root)`            |
|  2.0% |    128 B | `FunctionExecutable`        | `(GC root)`            |

#### `AsyncFunction`

|    % |  Self | Name                   | Path                                                            |
| ---: | ----: | ---------------------- | --------------------------------------------------------------- |
| 1.8% | 112 B | `Structure`            | `. AsyncFunction ← .constructor AsyncFunction ← . GlobalObject` |
| 1.8% | 112 B | `Structure`            | `. AsyncFunction ← .Symbol.asyncDispose Object`                 |
| 0.8% |  48 B | `JSLexicalEnvironment` | `. AsyncFunction ← .rmdir Object`                               |
| 0.8% |  48 B | `JSLexicalEnvironment` | `. AsyncFunction ← .rm Object`                                  |
| 0.8% |  48 B | `JSLexicalEnvironment` | `. AsyncFunction ← .lutimes Object`                             |

#### `SafeIterator`

|    % | Self | Name   | Path                                                                                                                                       |
| ---: | ---: | ------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.6% | 96 B | `call` | `.factory JSLexicalEnvironment ← . SafeIterator`                                                                                           |
| 1.6% | 96 B | `call` | `.next_ JSLexicalEnvironment ← . SafeIterator`                                                                                             |
| 1.6% | 96 B | `call` | `.factory JSLexicalEnvironment ← . SafeIterator ← .SafeIterator JSLexicalEnvironment ← . Function ← .entries Object ← .homeObject SafeSet` |
| 1.6% | 96 B | `call` | `.factory JSLexicalEnvironment ← . SafeIterator ← .SafeIterator JSLexicalEnvironment ← . Function ← .keys Object ← .homeObject SafeSet`    |
| 1.6% | 96 B | `call` | `.factory JSLexicalEnvironment ← . SafeIterator ← .SafeIterator JSLexicalEnvironment ← . Function ← .values Object ← .homeObject SafeSet`  |

#### `SafeMap`

|    % |  Self | Name        | Path                                                                                                                                             |
| ---: | ----: | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2.1% | 112 B | `Structure` | `. Object ← .homeObject SafeMap ← .SafeMap Object ← . InternalModuleRegistry ← .internalModuleRegistry GlobalObject`                             |
| 2.1% | 112 B | `Structure` | `. Structure ← . Object ← .homeObject SafeMap ← .SafeMap Object ← . InternalModuleRegistry ← .internalModuleRegistry GlobalObject`               |
| 2.1% | 112 B | `Structure` | `. Structure ← . Structure ← . Object ← .homeObject SafeMap ← .SafeMap Object ← . InternalModuleRegistry ← .internalModuleRegistry GlobalObject` |
| 2.1% | 112 B | `Structure` | `. SafeMap ← .SafeMap Object ← . InternalModuleRegistry ← .internalModuleRegistry GlobalObject`                                                  |
| 2.1% | 112 B | `Structure` | `. Structure ← . SafeMap ← .SafeMap Object ← . InternalModuleRegistry ← .internalModuleRegistry GlobalObject`                                    |

#### `SafeSet`

|    % |  Self | Name        | Path                                                         |
| ---: | ----: | ----------- | ------------------------------------------------------------ |
| 2.2% | 112 B | `Structure` | `. Object ← .homeObject SafeSet`                             |
| 2.2% | 112 B | `Structure` | `. Structure ← . Object ← .homeObject SafeSet`               |
| 2.2% | 112 B | `Structure` | `. Structure ← . Structure ← . Object ← .homeObject SafeSet` |
| 2.2% | 112 B | `Structure` | `. SafeSet`                                                  |
| 2.2% | 112 B | `Structure` | `. Structure ← . SafeSet`                                    |

#### `requestInstantiate`

|     % |     Self | Name                 | Path                                                                                                                                                                                              |
| ----: | -------: | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 57.5% | 2.58 KiB | `FunctionCodeBlock`  | `. FunctionExecutable ← . FunctionCodeBlock ← . FunctionExecutable ← . FunctionCodeBlock ← . FunctionExecutable ← . requestInstantiate ← .requestInstantiate ModuleLoader ← .Loader GlobalObject` |
| 15.8% |    724 B | `FunctionCodeBlock`  | `. FunctionExecutable ← . FunctionCodeBlock ← . FunctionExecutable ← . requestInstantiate ← .requestInstantiate ModuleLoader ← .Loader GlobalObject`                                              |
| 14.9% |    684 B | `FunctionCodeBlock`  | `. FunctionExecutable ← . requestInstantiate ← .requestInstantiate ModuleLoader ← .Loader GlobalObject`                                                                                           |
|  2.8% |    128 B | `FunctionExecutable` | `. requestInstantiate ← .requestInstantiate ModuleLoader ← .Loader GlobalObject`                                                                                                                  |
|  2.8% |    128 B | `FunctionExecutable` | `. FunctionCodeBlock ← . FunctionExecutable ← . requestInstantiate ← .requestInstantiate ModuleLoader ← .Loader GlobalObject`                                                                     |

#### `requestSatisfyUtil`

|     % |     Self | Name                 | Path                                                                                                                                                                                              |
| ----: | -------: | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 48.5% | 1.89 KiB | `FunctionCodeBlock`  | `. FunctionExecutable ← . FunctionCodeBlock ← . FunctionExecutable ← . requestSatisfyUtil ← .requestSatisfyUtil ModuleLoader ← .Loader GlobalObject`                                              |
| 23.1% |    924 B | `FunctionCodeBlock`  | `. FunctionExecutable ← . requestSatisfyUtil ← .requestSatisfyUtil ModuleLoader ← .Loader GlobalObject`                                                                                           |
| 14.9% |    596 B | `FunctionCodeBlock`  | `. FunctionExecutable ← . FunctionCodeBlock ← . FunctionExecutable ← . FunctionCodeBlock ← . FunctionExecutable ← . requestSatisfyUtil ← .requestSatisfyUtil ModuleLoader ← .Loader GlobalObject` |
|  3.2% |    128 B | `FunctionExecutable` | `. requestSatisfyUtil ← .requestSatisfyUtil ModuleLoader ← .Loader GlobalObject`                                                                                                                  |
|  3.2% |    128 B | `FunctionExecutable` | `. FunctionCodeBlock ← . FunctionExecutable ← . requestSatisfyUtil ← .requestSatisfyUtil ModuleLoader ← .Loader GlobalObject`                                                                     |

#### `compose`

|     % |     Self | Name                        | Path                                                      |
| ----: | -------: | --------------------------- | --------------------------------------------------------- |
| 53.6% | 2.04 KiB | `FunctionCodeBlock`         | `. FunctionExecutable ← . FunctionExecutable ← . compose` |
| 19.8% |    772 B | `UnlinkedFunctionCodeBlock` | `. FunctionExecutable ← . compose`                        |
|  4.1% |    160 B | `JSLexicalEnvironment`      | `. compose`                                               |
|  3.3% |    128 B | `FunctionExecutable`        | `. compose`                                               |
|  3.3% |    128 B | `FunctionExecutable`        | `. FunctionExecutable ← . compose`                        |

#### `Object`

|    % |  Self | Name                 | Path                                                 |
| ---: | ----: | -------------------- | ---------------------------------------------------- |
| 3.4% | 128 B | `FunctionExecutable` | `. groupBy ← .groupBy Object`                        |
| 2.9% | 112 B | `Structure`          | `. Object`                                           |
| 2.9% | 112 B | `Structure`          | `. Structure ← . Object`                             |
| 2.9% | 112 B | `Structure`          | `. Structure ← . Structure ← . Object`               |
| 2.9% | 112 B | `Structure`          | `. Structure ← . Structure ← . Structure ← . Object` |

#### `PassThrough`

|     % |  Self | Name                        | Path                   |
| ----: | ----: | --------------------------- | ---------------------- |
| 28.2% | 900 B | `FunctionCodeBlock`         | `. FunctionExecutable` |
| 15.1% | 484 B | `UnlinkedFunctionCodeBlock` | `(GC root)`            |
|  4.0% | 128 B | `FunctionExecutable`        | `(GC root)`            |
|  4.0% | 128 B | `FunctionExecutable`        | `(GC root)`            |
|  4.0% | 128 B | `FunctionExecutable`        | `. PassThrough`        |

#### `anonymous`

|    % | Self | Name               | Path                                                         |
| ---: | ---: | ------------------ | ------------------------------------------------------------ |
| 2.6% | 80 B | `NativeExecutable` | `. anonymous ← .charCodeAt String ← . GlobalObject`          |
| 2.6% | 80 B | `NativeExecutable` | `. anonymous ← .substr String ← . GlobalObject`              |
| 2.6% | 80 B | `NativeExecutable` | `. anonymous ← .endsWith String ← . GlobalObject`            |
| 2.6% | 80 B | `NativeExecutable` | `. anonymous ← .createUninitializedArrayBuffer GlobalObject` |
| 2.6% | 80 B | `NativeExecutable` | `. anonymous ← .resolveSync GlobalObject`                    |

#### `pipeline`

|     % |     Self | Name                        | Path                                                                          |
| ----: | -------: | --------------------------- | ----------------------------------------------------------------------------- |
| 44.0% | 1.34 KiB | `FunctionCodeBlock`         | `. FunctionExecutable ← . FunctionExecutable ← . pipeline ← .pipeline Object` |
| 19.6% |    611 B | `UnlinkedFunctionCodeBlock` | `. FunctionExecutable ← . pipeline ← .pipeline Object`                        |
|  4.1% |    128 B | `FunctionExecutable`        | `. pipeline ← .pipeline Object`                                               |
|  4.1% |    128 B | `FunctionExecutable`        | `. FunctionExecutable ← . pipeline ← .pipeline Object`                        |
|  3.6% |    112 B | `Structure`                 | `. pipeline`                                                                  |

#### `get`

|    % | Self | Name               | Path                                              |
| ---: | ---: | ------------------ | ------------------------------------------------- |
| 2.7% | 80 B | `NativeExecutable` | `. get ← . GetterSetter ← .self GlobalObject`     |
| 2.7% | 80 B | `NativeExecutable` | `. get`                                           |
| 2.7% | 80 B | `NativeExecutable` | `. get`                                           |
| 0.6% | 18 B | `get`              | `.name get ← . GetterSetter ← .self GlobalObject` |
| 0.6% | 17 B | `get`              | `.name get`                                       |

#### `Stream`

|    % |  Self | Name        | Path                                                               |
| ---: | ----: | ----------- | ------------------------------------------------------------------ |
| 4.4% | 112 B | `Structure` | `. Stream`                                                         |
| 4.4% | 112 B | `Structure` | `. Structure ← . Stream`                                           |
| 4.4% | 112 B | `Structure` | `. Structure ← . Structure ← . Stream`                             |
| 4.4% | 112 B | `Structure` | `. Structure ← . Structure ← . Structure ← . Stream`               |
| 4.4% | 112 B | `Structure` | `. Structure ← . Structure ← . Structure ← . Structure ← . Stream` |

#### `forEach`

|     % |  Self | Name                 | Path                                                    |
| ----: | ----: | -------------------- | ------------------------------------------------------- |
| 33.8% | 828 B | `FunctionCodeBlock`  | `. FunctionExecutable ← . FunctionRareData ← . forEach` |
| 24.7% | 604 B | `FunctionCodeBlock`  | `. FunctionExecutable ← . forEach`                      |
|  5.2% | 128 B | `FunctionExecutable` | `. FunctionRareData ← . forEach`                        |
|  5.2% | 128 B | `FunctionExecutable` | `. FunctionRareData ← . forEach`                        |
|  5.2% | 128 B | `FunctionExecutable` | `. forEach`                                             |

#### `set`

|    % | Self | Name               | Path                                              |
| ---: | ---: | ------------------ | ------------------------------------------------- |
| 3.3% | 80 B | `NativeExecutable` | `. set ← . GetterSetter ← .self GlobalObject`     |
| 3.3% | 80 B | `NativeExecutable` | `. set`                                           |
| 3.3% | 80 B | `NativeExecutable` | `. set`                                           |
| 3.3% | 80 B | `NativeExecutable` | `. set`                                           |
| 0.7% | 18 B | `set`              | `.name set ← . GetterSetter ← .self GlobalObject` |

#### `call`

|     % |  Self | Name                 | Path                            |
| ----: | ----: | -------------------- | ------------------------------- |
| 16.9% | 404 B | `FunctionCodeBlock`  | `. FunctionExecutable ← . call` |
|  5.4% | 128 B | `FunctionExecutable` | `. call`                        |

#### `newRegistryEntry`

|     % |  Self | Name                 | Path                                                         |
| ----: | ----: | -------------------- | ------------------------------------------------------------ |
| 24.8% | 580 B | `FunctionCodeBlock`  | `. FunctionExecutable ← . newRegistryEntry ← . GlobalObject` |
|  5.5% | 128 B | `FunctionExecutable` | `. newRegistryEntry ← . GlobalObject`                        |
|  4.8% | 112 B | `Structure`          | `. FunctionExecutable ← . newRegistryEntry ← . GlobalObject` |
|  4.8% | 112 B | `Structure`          | `. FunctionExecutable ← . newRegistryEntry ← . GlobalObject` |
|  4.8% | 112 B | `Structure`          | `. FunctionExecutable ← . newRegistryEntry ← . GlobalObject` |

## Largest strings

Strings ranked by bytes allocated for them.

|     % |  Size | Value                                                    | Path                                                                                                                                                     |
| ----: | ----: | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <0.1% | 374 B | `http://atq.ck.valuecommerce.com/servlet/atq/refer…`     | `.expanded_url Object ← [0] Array (1) ← .urls Object ← .entities Object ← [42] Array (100) ← .statuses Object ← .data Object ← .__retained GlobalObject` |
| <0.1% | 336 B | `ROMって楽しんでいる部分もあり無言フォロー多めですすみません…。ツイート数多め・あらぶり多めなの…`     | `.description Object ← .user Object ← [25] Array (100) ← .statuses Object ← .data Object ← .__retained GlobalObject`                                     |
| <0.1% | 334 B | `ブリヂストンのスポーツタイヤ「POTENZA」のアカウントです。レースやタイヤの事などをつぶやきま…`     | `.description Object ← .user Object ← .retweeted_status Object ← [12] Array (100) ← .statuses Object ← .data Object ← .__retained GlobalObject`          |
| <0.1% | 334 B | `アッサム山中の趣味用アカ。当分の間、選挙啓発用としても使っていきます。このアカウントがアッサム山中…`     | `.description Object ← .user Object ← .retweeted_status Object ← [17] Array (100) ← .statuses Object ← .data Object ← .__retained GlobalObject`          |
| <0.1% | 332 B | `THE SECOND/劇団EXILE/EXILE/二代目JSB ☞KENCHI.AKIRA.青柳翔…`     | `.description Object ← .user Object ← [41] Array (100) ← .statuses Object ← .data Object ← .__retained GlobalObject`                                     |
| <0.1% | 326 B | `ﾟ.＊97line おさらに貢いでる系女子＊.゜                         …`     | `.description Object ← .user Object ← [8] Array (100) ← .statuses Object ← .data Object ← .__retained GlobalObject`                                      |
| <0.1% | 314 B | `ニコ動で踊り手やってます!!応援本当に嬉しいですありがとうございます!!　ぽっちゃりだけど前向きに…`     | `.description Object ← .user Object ← [99] Array (100) ← .statuses Object ← .data Object ← .__retained GlobalObject`                                     |
| <0.1% | 306 B | `【無断転載禁止･コピペ禁止・非公式RT禁止】【必読！】⇒ http://t.co/nuUvfUVD…`     | `.description Object ← .user Object ← [57] Array (100) ← .statuses Object ← .data Object ← .__retained GlobalObject`                                     |
| <0.1% | 304 B | `bot遊びと実況が主目的の趣味アカウント。成人済♀。時々TLお騒がせします。リフォ率低いですがＦ／…`     | `.description Object ← .user Object ← [6] Array (100) ← .statuses Object ← .data Object ← .__retained GlobalObject`                                      |
| <0.1% | 304 B | `@aym0566x \n\n名前:前田あゆみ\n第一印象:なんか怖っ！\n今の印象:とりあえずキモい。噛み…` | `.text Object ← [0] Array (100) ← .statuses Object ← .data Object ← .__retained GlobalObject`                                                            |
| <0.1% | 298 B | `ヤー・チャイカ。紫宝勢の末席くらいでQMAやってます。 \n9/13（土）「九州杯」今年も宜しくお願…`    | `.description Object ← .user Object ← [45] Array (100) ← .statuses Object ← .data Object ← .__retained GlobalObject`                                     |
| <0.1% | 298 B | `RT @AFmbsk: @samao21718 \n呼び方☞まおちゃん\n呼ばれ方☞あーちゃん\n第一印…`  | `.text Object ← [8] Array (100) ← .statuses Object ← .data Object ← .__retained GlobalObject`                                                            |
| <0.1% | 296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `.text Object ← [48] Array (100) ← .statuses Object ← .data Object ← .__retained GlobalObject`                                                           |
| <0.1% | 296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `.text Object ← [61] Array (100) ← .statuses Object ← .data Object ← .__retained GlobalObject`                                                           |
| <0.1% | 296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `.text Object ← [54] Array (100) ← .statuses Object ← .data Object ← .__retained GlobalObject`                                                           |
| <0.1% | 296 B | `一に止まると書いて、正しいという意味だなんて、この年になるまで知りませんでした。 人は生きていると…`     | `.text Object ← .retweeted_status Object ← [54] Array (100) ← .statuses Object ← .data Object ← .__retained GlobalObject`                                |
| <0.1% | 296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `.text Object ← [52] Array (100) ← .statuses Object ← .data Object ← .__retained GlobalObject`                                                           |
| <0.1% | 296 B | `一に止まると書いて、正しいという意味だなんて、この年になるまで知りませんでした。 人は生きていると…`     | `.text Object ← .retweeted_status Object ← [52] Array (100) ← .statuses Object ← .data Object ← .__retained GlobalObject`                                |
| <0.1% | 296 B | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`     | `.text Object ← [51] Array (100) ← .statuses Object ← .data Object ← .__retained GlobalObject`                                                           |
| <0.1% | 296 B | `一に止まると書いて、正しいという意味だなんて、この年になるまで知りませんでした。 人は生きていると…`     | `.text Object ← .retweeted_status Object ← [51] Array (100) ← .statuses Object ← .data Object ← .__retained GlobalObject`                                |

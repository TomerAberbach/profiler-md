# Heap profile

Allocated 927 MiB over 10,093,789 samples (96.3 B per sample).

| Category    |     % |    Size |   Samples |
| ----------- | ----: | ------: | --------: |
| third-party | 76.8% | 712 MiB | 8,842,365 |
| stdlib      | 23.2% | 215 MiB | 1,251,424 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|    % |    Size | Samples | Function        | Location                                    |
| ---: | ------: | ------: | --------------- | ------------------------------------------- |
| 0.1% | 512 KiB |   5,958 | `createProgram` | `node_modules/typescript/lib/typescript.js` |

#### Lines

Lines ranked by contribution to each function's self size.

##### `createProgram` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Samples | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 512 KiB |   5,958 | `node_modules/typescript/lib/typescript.js:120478` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `createProgram` (`node_modules/typescript/lib/typescript.js`)

|      % |    Size | Samples | Caller             | Location           |
| -----: | ------: | ------: | ------------------ | ------------------ |
| 100.0% | 512 KiB |   5,958 | `typeCheckProject` | `tsc-workload.mjs` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size |   Samples | Function                           | Location                                               |
| ----: | -------: | --------: | ---------------------------------- | ------------------------------------------------------ |
| 77.9% |  723 MiB | 7,813,936 | `typeCheckProject`                 | `tsc-workload.mjs`                                     |
| 77.5% |  718 MiB | 7,728,122 | `(anonymous)`                      | `datadog-pprof-heap.mjs:1:1`                           |
| 48.4% |  449 MiB | 4,946,952 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js`            |
| 29.1% |  270 MiB | 2,922,784 | `createProgram`                    | `node_modules/typescript/lib/typescript.js`            |
|  1.4% | 13.2 MiB |    92,999 | `require`                          | `node:internal/modules/helpers`                        |
|  0.2% | 1.46 MiB |         1 | `profile`                          | `node_modules/@datadog/pprof/out/src/heap-profiler.js` |
|  0.1% |  514 KiB |       163 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js`            |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |     Size |   Samples | Callee                             | Location                                    |
| ----: | -------: | --------: | ---------------------------------- | ------------------------------------------- |
| 61.2% |  442 MiB | 4,830,657 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js` |
| 36.9% |  267 MiB | 2,890,117 | `createProgram`                    | `node_modules/typescript/lib/typescript.js` |
|  1.8% | 13.2 MiB |    92,999 | `require`                          | `node:internal/modules/helpers`             |
|  0.1% |  514 KiB |       163 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)

|     % |     Size |   Samples | Callee             | Location                                               |
| ----: | -------: | --------: | ------------------ | ------------------------------------------------------ |
| 99.8% |  717 MiB | 7,728,121 | `typeCheckProject` | `tsc-workload.mjs`                                     |
|  0.2% | 1.46 MiB |         1 | `profile`          | `node_modules/@datadog/pprof/out/src/heap-profiler.js` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |     Size |   Samples | Call stack                                                                                                                                                                |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 47.1% |  437 MiB | 4,749,884 | `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)           |
| 28.7% |  266 MiB | 2,885,075 | `createProgram` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                    |
|  1.4% | 13.2 MiB |    92,999 | `require` (`node:internal/modules/helpers`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                                      |
|  0.5% |    5 MiB |    80,773 | `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`)                                                          |
|  0.2% | 1.46 MiB |         1 | `profile` (`node_modules/@datadog/pprof/out/src/heap-profiler.js`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                                                         |
|  0.1% |  514 KiB |       163 | `getParsedCommandLineOfConfigFile` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) |
|  0.1% |  512 KiB |     5,042 | `createProgram` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`)                                                                   |

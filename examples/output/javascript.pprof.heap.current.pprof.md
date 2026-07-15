# Heap profile

Allocated 732 MiB over 7,784,774 samples (98.6 B per sample).

| Category    |     % |    Size |   Samples |
| ----------- | ----: | ------: | --------: |
| third-party | 78.8% | 577 MiB | 6,943,710 |
| stdlib      | 21.2% | 155 MiB |   841,064 |

## Hottest functions

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size |   Samples | Function                           | Location                                               |
| ----: | -------: | --------: | ---------------------------------- | ------------------------------------------------------ |
| 77.5% |  567 MiB | 5,868,039 | `typeCheckProject`                 | `tsc-workload.mjs`                                     |
| 77.0% |  564 MiB | 5,802,917 | `(anonymous)`                      | `datadog-pprof-heap.mjs:1:1`                           |
| 47.5% |  348 MiB | 3,593,223 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js`            |
| 29.2% |  214 MiB | 2,243,751 | `createProgram`                    | `node_modules/typescript/lib/typescript.js`            |
|  2.0% | 14.9 MiB |    88,994 | `require`                          | `node:internal/modules/helpers`                        |
|  0.2% | 1.46 MiB |         1 | `profile`                          | `node_modules/@datadog/pprof/out/src/heap-profiler.js` |
|  0.1% |  512 KiB |    16,385 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js`            |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `typeCheckProject` (`tsc-workload.mjs`)

|     % |     Size |   Samples | Callee                             | Location                                    |
| ----: | -------: | --------: | ---------------------------------- | ------------------------------------------- |
| 59.8% |  339 MiB | 3,529,104 | `getSemanticDiagnostics`           | `node_modules/typescript/lib/typescript.js` |
| 37.5% |  213 MiB | 2,233,556 | `createProgram`                    | `node_modules/typescript/lib/typescript.js` |
|  2.6% | 14.9 MiB |    88,994 | `require`                          | `node:internal/modules/helpers`             |
|  0.1% |  512 KiB |    16,385 | `getParsedCommandLineOfConfigFile` | `node_modules/typescript/lib/typescript.js` |

##### `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)

|     % |     Size |   Samples | Callee             | Location                                               |
| ----: | -------: | --------: | ------------------ | ------------------------------------------------------ |
| 99.7% |  562 MiB | 5,802,916 | `typeCheckProject` | `tsc-workload.mjs`                                     |
|  0.3% | 1.46 MiB |         1 | `profile`          | `node_modules/@datadog/pprof/out/src/heap-profiler.js` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |     Size |   Samples | Call stack                                                                                                                                                                |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 45.7% |  334 MiB | 3,463,981 | `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)           |
| 29.0% |  213 MiB | 2,233,556 | `createProgram` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                    |
|  2.0% | 14.9 MiB |    88,994 | `require` (`node:internal/modules/helpers`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                                      |
|  0.7% |    5 MiB |    65,123 | `getSemanticDiagnostics` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`)                                                          |
|  0.2% | 1.46 MiB |         1 | `profile` (`node_modules/@datadog/pprof/out/src/heap-profiler.js`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`)                                                         |
|  0.1% |  512 KiB |    16,385 | `getParsedCommandLineOfConfigFile` (`node_modules/typescript/lib/typescript.js`) ← `typeCheckProject` (`tsc-workload.mjs`) ← `(anonymous)` (`datadog-pprof-heap.mjs:1:1`) |

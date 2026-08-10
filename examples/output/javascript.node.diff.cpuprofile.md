# CPU profile diff

Took 2.49s → 2.69s (+191.17ms, +7.6%) over 2,659 samples → 3,134 samples (939.9µs → 858.4µs per sample).

| Category           |  Change |     Delta |             % |              Time |       Samples |
| ------------------ | ------: | --------: | ------------: | ----------------: | ------------: |
| Third-party        |   +9.1% | +199.54ms | 87.4% → 88.6% |     2.18s → 2.38s | 2,410 → 2,890 |
| Garbage collector  |   -7.3% |  -13.91ms |   7.6% → 6.6% | 191.0ms → 177.0ms |     156 → 144 |
| Standard library   |  +14.7% |  +14.25ms |   3.9% → 4.1% |  96.8ms → 111.0ms |       70 → 82 |
| Native             |  -36.3% |   -8.25ms |   0.9% → 0.5% |   22.7ms → 14.5ms |       20 → 15 |
| Regular expression |  +32.2% |   +0.79ms |          0.1% |     2.5ms → 3.3ms |         2 → 3 |
| Ours               | removed |   -1.25ms |   0.1% → 0.0% |       1.3ms → 0ms |         1 → 0 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |   Delta |            % |          Time | Samples | Function                                    | Location                                                                                  |
| ------: | ------: | -----------: | ------------: | ------: | ------------------------------------------- | ----------------------------------------------------------------------------------------- |
| +160.0% | +2.00ms |         0.1% | 1.3ms → 3.3ms |   1 → 3 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)` | `<unknown>`                                                                               |
|     new | +1.29ms | 0.0% → <0.1% |   0ms → 1.3ms |   0 → 1 | `createProgram`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |

##### Regular expression

|  Change |   Delta |    % |          Time | Samples | Function                                    | Location    |
| ------: | ------: | ---: | ------------: | ------: | ------------------------------------------- | ----------- |
| +160.0% | +2.00ms | 0.1% | 1.3ms → 3.3ms |   1 → 3 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |              Time |   Samples | Function                                        | Location                                              |
| ------: | -------: | -----------: | ----------------: | --------: | ----------------------------------------------- | ----------------------------------------------------- |
|   -7.3% | -13.91ms |  7.6% → 6.6% | 191.0ms → 177.0ms | 156 → 144 | `(garbage collector)`                           | `<unknown>`                                           |
| removed |  -1.25ms |  0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `typeCheckProject`                              | `tsc-workload.mjs:3:33`                               |
| removed |  -1.25ms |  0.1% → 0.0% |       1.3ms → 0ms |     1 → 0 | `createProgram`                                 | `node_modules/typescript/lib/typescript.js:120478:25` |
| removed |  -1.21ms | <0.1% → 0.0% |       1.2ms → 0ms |     1 → 0 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+` | `<unknown>`                                           |
|   -3.3% |  -0.33ms |         0.4% |    10.1ms → 9.8ms |         1 | `post`                                          | `node:inspector:118:7`                                |

##### Garbage collector

| Change |    Delta |           % |              Time |   Samples | Function              | Location    |
| -----: | -------: | ----------: | ----------------: | --------: | --------------------- | ----------- |
|  -7.3% | -13.91ms | 7.6% → 6.6% | 191.0ms → 177.0ms | 156 → 144 | `(garbage collector)` | `<unknown>` |

##### Standard library

| Change |   Delta |    % |           Time | Samples | Function | Location               |
| -----: | ------: | ---: | -------------: | ------: | -------- | ---------------------- |
|  -3.3% | -0.33ms | 0.4% | 10.1ms → 9.8ms |       1 | `post`   | `node:inspector:118:7` |

##### Regular expression

|  Change |   Delta |            % |        Time | Samples | Function                                        | Location    |
| ------: | ------: | -----------: | ----------: | ------: | ----------------------------------------------- | ----------- |
| removed | -1.21ms | <0.1% → 0.0% | 1.2ms → 0ms |   1 → 0 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+` | `<unknown>` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |     Delta |             % |            Time |       Samples | Function                                    | Location                                                                                  |
| ------: | --------: | ------------: | --------------: | ------------: | ------------------------------------------- | ----------------------------------------------------------------------------------------- |
|     new |   +1.969s |  0.0% → 73.2% |     0ms → 1.96s |     0 → 2,479 | `getSemanticDiagnostics`                    | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:114663:40` |
|     new | +377.75ms |  0.0% → 14.0% |   0ms → 377.8ms |       0 → 366 | `createProgram`                             | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:113744:27` |
|   +8.6% | +195.58ms | 90.9% → 91.7% |   2.27s → 2.46s | 2,459 → 2,935 | `(anonymous)`                               | `cpuprofile-run.mjs`                                                                      |
|   +8.6% | +195.41ms | 90.5% → 91.3% |   2.26s → 2.45s | 2,458 → 2,933 | `typeCheckProject`                          | `tsc-workload.mjs:3:33`                                                                   |
|     new |  +11.25ms |   0.0% → 0.4% |    0ms → 11.3ms |         0 → 9 | `getParsedCommandLineOfConfigFile`          | `node_modules/.deno/typescript@4.5.5/node_modules/typescript/lib/typescript.js:39863:46`  |
| +160.0% |   +2.00ms |          0.1% |   1.3ms → 3.3ms |         1 → 3 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)` | `<unknown>`                                                                               |
|   +1.6% |   +0.17ms |          0.4% | 10.1ms → 10.3ms |         1 → 2 | `post`                                      | `node:inspector:118:7`                                                                    |
|   +1.6% |   +0.17ms |          0.4% | 10.1ms → 10.3ms |         1 → 2 | `(anonymous)`                               | `cpuprofile-run.mjs:16:15`                                                                |
|   +1.6% |   +0.17ms |          0.4% | 10.1ms → 10.3ms |         1 → 2 | `post`                                      | `cpuprofile-run.mjs:15:14`                                                                |

##### Standard library

| Change |   Delta |    % |            Time | Samples | Function | Location               |
| -----: | ------: | ---: | --------------: | ------: | -------- | ---------------------- |
|  +1.6% | +0.17ms | 0.4% | 10.1ms → 10.3ms |   1 → 2 | `post`   | `node:inspector:118:7` |

##### Regular expression

|  Change |   Delta |    % |          Time | Samples | Function                                    | Location    |
| ------: | ------: | ---: | ------------: | ------: | ------------------------------------------- | ----------- |
| +160.0% | +2.00ms | 0.1% | 1.3ms → 3.3ms |   1 → 3 | `RegExp: (?:\/\/)\|(?:^\|\/)\.\.?(?:$\|\/)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |     Delta |            % |              Time |   Samples | Function                                        | Location                                              |
| ------: | --------: | -----------: | ----------------: | --------: | ----------------------------------------------- | ----------------------------------------------------- |
| removed |   -1.771s | 70.9% → 0.0% |       1.77s → 0ms | 2,003 → 0 | `getSemanticDiagnostics`                        | `node_modules/typescript/lib/typescript.js:121549:36` |
| removed | -374.17ms | 15.0% → 0.0% |     374.2ms → 0ms |   362 → 0 | `createProgram`                                 | `node_modules/typescript/lib/typescript.js:120478:25` |
|   -7.3% |  -13.91ms |  7.6% → 6.6% | 191.0ms → 177.0ms | 156 → 144 | `(garbage collector)`                           | `<unknown>`                                           |
| removed |  -11.17ms |  0.4% → 0.0% |      11.2ms → 0ms |     9 → 0 | `getParsedCommandLineOfConfigFile`              | `node_modules/typescript/lib/typescript.js:36594:44`  |
|   -3.6% |   -3.75ms |  4.2% → 3.7% | 104.0ms → 100.3ms |   83 → 80 | `require`                                       | `node:internal/modules/helpers:146:19`                |
| removed |   -1.21ms | <0.1% → 0.0% |       1.2ms → 0ms |     1 → 0 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+` | `<unknown>`                                           |

##### Garbage collector

| Change |    Delta |           % |              Time |   Samples | Function              | Location    |
| -----: | -------: | ----------: | ----------------: | --------: | --------------------- | ----------- |
|  -7.3% | -13.91ms | 7.6% → 6.6% | 191.0ms → 177.0ms | 156 → 144 | `(garbage collector)` | `<unknown>` |

##### Standard library

| Change |   Delta |           % |              Time | Samples | Function  | Location                               |
| -----: | ------: | ----------: | ----------------: | ------: | --------- | -------------------------------------- |
|  -3.6% | -3.75ms | 4.2% → 3.7% | 104.0ms → 100.3ms | 83 → 80 | `require` | `node:internal/modules/helpers:146:19` |

##### Regular expression

|  Change |   Delta |            % |        Time | Samples | Function                                        | Location    |
| ------: | ------: | -----------: | ----------: | ------: | ----------------------------------------------- | ----------- |
| removed | -1.21ms | <0.1% → 0.0% | 1.2ms → 0ms |   1 → 0 | `RegExp: [^\u0130\u0131\u00DFa-z0-9\\/:\-_. ]+` | `<unknown>` |

# Heap profile

Allocated 60.1 MiB over 3,770 samples (16.3 KiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Third-party      | 94.1% | 56.6 MiB |   3,596 |
| Standard library |  2.8% | 1.68 MiB |     106 |
| Ours             |  1.5% |  945 KiB |      57 |
| Native           |  1.3% |  804 KiB |       2 |
| Compiler         |  0.2% | 96.3 KiB |       6 |
| Unknown          |  0.1% | 48.2 KiB |       3 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function      | Location                                  |
| ----: | -------: | ------: | ------------- | ----------------------------------------- |
| 63.8% | 38.3 MiB |   2,435 | `p`           | `node_modules/d3/dist/d3.min.js:2:77576`  |
|  7.4% | 4.46 MiB |     285 | `select`      | `node_modules/d3/dist/d3.min.js:2:22328`  |
|  7.2% | 4.32 MiB |     276 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:16259`  |
|  5.3% | 3.18 MiB |     203 | `Bp`          | `node_modules/d3/dist/d3.min.js:2:147443` |
|  2.0% | 1.22 MiB |      78 | `d`           | `node_modules/d3/dist/d3.min.js:2:235885` |
|  2.0% | 1.21 MiB |      77 | `push`        | `<unknown>`                               |
|  2.0% | 1.19 MiB |      76 | `Gd`          | `node_modules/d3/dist/d3.min.js:2:139995` |
|  1.3% |  788 KiB |       1 | `(v8 api)`    | `<unknown>`                               |
|  1.2% |  737 KiB |      46 | `(anonymous)` | `workload.mjs:136:28`                     |
|  1.0% |  609 KiB |      38 | `o`           | `node_modules/d3/dist/d3.min.js:2:77004`  |
|  0.7% |  416 KiB |      26 | `append`      | `node_modules/d3/dist/d3.min.js:2:26726`  |
|  0.6% |  353 KiB |      22 | `I_`          | `node_modules/d3/dist/d3.min.js:2:173066` |
|  0.5% |  321 KiB |      20 | `Ag`          | `node_modules/d3/dist/d3.min.js:2:154779` |
|  0.4% |  274 KiB |      17 | `t`           | `node_modules/d3/dist/d3.min.js:2:4909`   |
|  0.4% |  256 KiB |      16 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:78140`  |
|  0.4% |  243 KiB |      15 | `from`        | `<unknown>`                               |
|  0.3% |  208 KiB |      13 | `format`      | `node_modules/d3/dist/d3.min.js:2:167310` |
|  0.3% |  177 KiB |       9 | `g`           | `node_modules/d3/dist/d3.min.js:2:231215` |
|  0.2% |  145 KiB |       9 | `r`           | `node_modules/d3/dist/d3.min.js:2:7022`   |
|  0.2% |  144 KiB |       9 | `Fg`          | `node_modules/d3/dist/d3.min.js:2:156948` |

#### Categories

##### Third-party

|     % |     Size | Samples | Function      | Location                                  |
| ----: | -------: | ------: | ------------- | ----------------------------------------- |
| 63.8% | 38.3 MiB |   2,435 | `p`           | `node_modules/d3/dist/d3.min.js:2:77576`  |
|  7.4% | 4.46 MiB |     285 | `select`      | `node_modules/d3/dist/d3.min.js:2:22328`  |
|  7.2% | 4.32 MiB |     276 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:16259`  |
|  5.3% | 3.18 MiB |     203 | `Bp`          | `node_modules/d3/dist/d3.min.js:2:147443` |
|  2.0% | 1.22 MiB |      78 | `d`           | `node_modules/d3/dist/d3.min.js:2:235885` |
|  2.0% | 1.19 MiB |      76 | `Gd`          | `node_modules/d3/dist/d3.min.js:2:139995` |
|  1.0% |  609 KiB |      38 | `o`           | `node_modules/d3/dist/d3.min.js:2:77004`  |
|  0.7% |  416 KiB |      26 | `append`      | `node_modules/d3/dist/d3.min.js:2:26726`  |
|  0.6% |  353 KiB |      22 | `I_`          | `node_modules/d3/dist/d3.min.js:2:173066` |
|  0.5% |  321 KiB |      20 | `Ag`          | `node_modules/d3/dist/d3.min.js:2:154779` |
|  0.4% |  274 KiB |      17 | `t`           | `node_modules/d3/dist/d3.min.js:2:4909`   |
|  0.4% |  256 KiB |      16 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:78140`  |
|  0.3% |  208 KiB |      13 | `format`      | `node_modules/d3/dist/d3.min.js:2:167310` |
|  0.3% |  177 KiB |       9 | `g`           | `node_modules/d3/dist/d3.min.js:2:231215` |
|  0.2% |  145 KiB |       9 | `r`           | `node_modules/d3/dist/d3.min.js:2:7022`   |
|  0.2% |  144 KiB |       9 | `Fg`          | `node_modules/d3/dist/d3.min.js:2:156948` |
|  0.2% |  128 KiB |       8 | `a`           | `node_modules/d3/dist/d3.min.js:2:252683` |
|  0.2% |  112 KiB |       7 | `wg`          | `node_modules/d3/dist/d3.min.js:2:154259` |
|  0.2% | 96.2 KiB |       6 | `t`           | `node_modules/d3/dist/d3.min.js:2:257411` |
|  0.1% | 80.1 KiB |       5 | `Ap`          | `node_modules/d3/dist/d3.min.js:2:146394` |

##### Standard library

|    % |     Size | Samples | Function  | Location    |
| ---: | -------: | ------: | --------- | ----------- |
| 2.0% | 1.21 MiB |      77 | `push`    | `<unknown>` |
| 0.4% |  243 KiB |      15 | `from`    | `<unknown>` |
| 0.2% | 96.3 KiB |       6 | `next`    | `<unknown>` |
| 0.1% | 64.1 KiB |       4 | `map`     | `<unknown>` |
| 0.1% | 36.2 KiB |       2 | `forEach` | `<unknown>` |
| 0.1% |   35 KiB |       2 | `exec`    | `<unknown>` |

##### Ours

|    % |     Size | Samples | Function                       | Location              |
| ---: | -------: | ------: | ------------------------------ | --------------------- |
| 1.2% |  737 KiB |      46 | `(anonymous)`                  | `workload.mjs:136:28` |
| 0.1% | 80.4 KiB |       5 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`   |
| 0.1% | 48.1 KiB |       3 | `(anonymous)`                  | `workload.mjs:121:16` |
| 0.1% |   48 KiB |       1 | `(anonymous)`                  | `workload.mjs:193:9`  |
| 0.1% |   32 KiB |       2 | `chartLayouts`                 | `workload.mjs:116:24` |

##### Native

|     % |     Size | Samples | Function   | Location    |
| ----: | -------: | ------: | ---------- | ----------- |
|  1.3% |  788 KiB |       1 | `(v8 api)` | `<unknown>` |
| <0.1% | 16.5 KiB |       1 | `max`      | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `p` (`node_modules/d3/dist/d3.min.js:2:77576`)

|     % |     Size | Samples | Caller        | Location                                 |
| ----: | -------: | ------: | ------------- | ---------------------------------------- |
| 99.9% | 38.3 MiB |   2,433 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:77113` |
|  0.1% |   32 KiB |       2 | `forEach`     | `<unknown>`                              |

##### `select` (`node_modules/d3/dist/d3.min.js:2:22328`)

|     % |     Size | Samples | Caller   | Location                                 |
| ----: | -------: | ------: | -------- | ---------------------------------------- |
| 88.4% | 3.94 MiB |     252 | `append` | `node_modules/d3/dist/d3.min.js:2:26726` |
| 10.9% |  496 KiB |      31 | `h`      | `node_modules/d3/dist/d3.min.js:2:12208` |
|  0.7% |   32 KiB |       2 | `insert` | `node_modules/d3/dist/d3.min.js:2:26864` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:16259`)

|     % |     Size | Samples | Caller        | Location                                 |
| ----: | -------: | ------: | ------------- | ---------------------------------------- |
| 99.3% | 4.29 MiB |     274 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:26793` |
|  0.7% |   32 KiB |       2 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:26975` |

##### `Bp` (`node_modules/d3/dist/d3.min.js:2:147443`)

|      % |     Size | Samples | Caller | Location                                  |
| -----: | -------: | ------: | ------ | ----------------------------------------- |
| 100.0% | 3.18 MiB |     203 | `e`    | `node_modules/d3/dist/d3.min.js:2:147904` |

##### `d` (`node_modules/d3/dist/d3.min.js:2:235885`)

|      % |     Size | Samples | Caller              | Location                                  |
| -----: | -------: | ------: | ------------------- | ----------------------------------------- |
| 100.0% | 1.22 MiB |      78 | `t.forceSimulation` | `node_modules/d3/dist/d3.min.js:2:235437` |

##### `push` (`<unknown>`)

|     % |    Size | Samples | Caller        | Location                                 |
| ----: | ------: | ------: | ------------- | ---------------------------------------- |
| 49.1% | 609 KiB |      38 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:78140` |
| 27.1% | 337 KiB |      21 | `r`           | `node_modules/d3/dist/d3.min.js:2:7022`  |
| 14.7% | 182 KiB |      11 | `p`           | `node_modules/d3/dist/d3.min.js:2:77576` |
|  9.1% | 113 KiB |       7 | `t`           | `node_modules/d3/dist/d3.min.js:2:4909`  |

##### `Gd` (`node_modules/d3/dist/d3.min.js:2:139995`)

|      % |     Size | Samples | Caller         | Location              |
| -----: | -------: | ------: | -------------- | --------------------- |
| 100.0% | 1.19 MiB |      76 | `chartLayouts` | `workload.mjs:116:24` |

##### `(anonymous)` (`workload.mjs:136:28`)

|      % |    Size | Samples | Caller | Location    |
| -----: | ------: | ------: | ------ | ----------- |
| 100.0% | 737 KiB |      46 | `map`  | `<unknown>` |

##### `o` (`node_modules/d3/dist/d3.min.js:2:77004`)

|      % |    Size | Samples | Caller        | Location                                 |
| -----: | ------: | ------: | ------------- | ---------------------------------------- |
| 100.0% | 609 KiB |      38 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:76982` |

##### `append` (`node_modules/d3/dist/d3.min.js:2:26726`)

|     % |    Size | Samples | Caller        | Location                                 |
| ----: | ------: | ------: | ------------- | ---------------------------------------- |
| 50.0% | 208 KiB |      13 | `(anonymous)` | `workload.mjs:185:13`                    |
| 50.0% | 208 KiB |      13 | `join`        | `node_modules/d3/dist/d3.min.js:2:24162` |

##### `I_` (`node_modules/d3/dist/d3.min.js:2:173066`)

|      % |    Size | Samples | Caller      | Location                                  |
| -----: | ------: | ------: | ----------- | ----------------------------------------- |
| 100.0% | 353 KiB |      22 | `I_.s.copy` | `node_modules/d3/dist/d3.min.js:2:173694` |

##### `Ag` (`node_modules/d3/dist/d3.min.js:2:154779`)

|     % |     Size | Samples | Caller | Location                                  |
| ----: | -------: | ------: | ------ | ----------------------------------------- |
| 45.0% |  144 KiB |       9 | `t`    | `node_modules/d3/dist/d3.min.js:2:257518` |
| 20.0% | 64.2 KiB |       4 | `I_`   | `node_modules/d3/dist/d3.min.js:2:173066` |
| 20.0% | 64.2 KiB |       4 | `Sg`   | `node_modules/d3/dist/d3.min.js:2:155611` |
| 15.0% | 48.1 KiB |       3 | `t`    | `node_modules/d3/dist/d3.min.js:2:257411` |

##### `t` (`node_modules/d3/dist/d3.min.js:2:4909`)

|      % |    Size | Samples | Caller | Location                                |
| -----: | ------: | ------: | ------ | --------------------------------------- |
| 100.0% | 274 KiB |      17 | `F`    | `node_modules/d3/dist/d3.min.js:2:4882` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:78140`)

|      % |    Size | Samples | Caller | Location                                 |
| -----: | ------: | ------: | ------ | ---------------------------------------- |
| 100.0% | 256 KiB |      16 | `p`    | `node_modules/d3/dist/d3.min.js:2:77576` |

##### `from` (`<unknown>`)

|     % |    Size | Samples | Caller        | Location                                  |
| ----: | ------: | ------: | ------------- | ----------------------------------------- |
| 80.2% | 195 KiB |      12 | `Gd`          | `node_modules/d3/dist/d3.min.js:2:139995` |
| 13.2% |  32 KiB |       2 | `Ag.l.domain` | `node_modules/d3/dist/d3.min.js:2:155179` |
|  6.6% |  16 KiB |       1 | `Ag.l.range`  | `node_modules/d3/dist/d3.min.js:2:155259` |

##### `format` (`node_modules/d3/dist/d3.min.js:2:167310`)

|      % |    Size | Samples | Caller | Location                                  |
| -----: | ------: | ------: | ------ | ----------------------------------------- |
| 100.0% | 208 KiB |      13 | `I_`   | `node_modules/d3/dist/d3.min.js:2:173066` |

##### `g` (`node_modules/d3/dist/d3.min.js:2:231215`)

|     % |     Size | Samples | Caller     | Location                                  |
| ----: | -------: | ------: | ---------- | ----------------------------------------- |
| 79.6% |  141 KiB |       7 | `a`        | `node_modules/d3/dist/d3.min.js:2:231054` |
| 20.4% | 36.1 KiB |       2 | `Fc.visit` | `node_modules/d3/dist/d3.min.js:2:105681` |

##### `r` (`node_modules/d3/dist/d3.min.js:2:7022`)

|      % |    Size | Samples | Caller            | Location             |
| -----: | ------: | ------: | ----------------- | -------------------- |
| 100.0% | 145 KiB |       9 | `chartBreakdowns` | `workload.mjs:39:27` |

##### `Fg` (`node_modules/d3/dist/d3.min.js:2:156948`)

|      % |    Size | Samples | Caller | Location                                  |
| -----: | ------: | ------: | ------ | ----------------------------------------- |
| 100.0% | 144 KiB |       9 | `t`    | `node_modules/d3/dist/d3.min.js:2:257518` |

##### `a` (`node_modules/d3/dist/d3.min.js:2:252683`)

|      % |    Size | Samples | Caller            | Location             |
| -----: | ------: | ------: | ----------------- | -------------------- |
| 100.0% | 128 KiB |       8 | `chartBreakdowns` | `workload.mjs:39:27` |

##### `wg` (`node_modules/d3/dist/d3.min.js:2:154259`)

|     % |     Size | Samples | Caller        | Location                                  |
| ----: | -------: | ------: | ------------- | ----------------------------------------- |
| 57.1% | 64.1 KiB |       4 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:11875`  |
| 42.9% |   48 KiB |       3 | `l`           | `node_modules/d3/dist/d3.min.js:2:155023` |

##### `next` (`<unknown>`)

|      % |     Size | Samples | Caller | Location    |
| -----: | -------: | ------: | ------ | ----------- |
| 100.0% | 96.3 KiB |       6 | `from` | `<unknown>` |

##### `t` (`node_modules/d3/dist/d3.min.js:2:257411`)

|      % |     Size | Samples | Caller   | Location                                  |
| -----: | -------: | ------: | -------- | ----------------------------------------- |
| 100.0% | 96.2 KiB |       6 | `n.copy` | `node_modules/d3/dist/d3.min.js:2:257447` |

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|      % |     Size | Samples | Caller        | Location    |
| -----: | -------: | ------: | ------------- | ----------- |
| 100.0% | 80.4 KiB |       5 | `(anonymous)` | `<unknown>` |

##### `Ap` (`node_modules/d3/dist/d3.min.js:2:146394`)

|      % |     Size | Samples | Caller | Location                                  |
| -----: | -------: | ------: | ------ | ----------------------------------------- |
| 100.0% | 80.1 KiB |       5 | `Bp`   | `node_modules/d3/dist/d3.min.js:2:147443` |

##### `map` (`<unknown>`)

|      % |     Size | Samples | Caller         | Location              |
| -----: | -------: | ------: | -------------- | --------------------- |
| 100.0% | 64.1 KiB |       4 | `chartLayouts` | `workload.mjs:116:24` |

##### `(anonymous)` (`workload.mjs:121:16`)

|      % |     Size | Samples | Caller | Location    |
| -----: | -------: | ------: | ------ | ----------- |
| 100.0% | 48.1 KiB |       3 | `map`  | `<unknown>` |

##### `(anonymous)` (`workload.mjs:193:9`)

|      % |   Size | Samples | Caller        | Location                                 |
| -----: | -----: | ------: | ------------- | ---------------------------------------- |
| 100.0% | 48 KiB |       1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:18176` |

##### `forEach` (`<unknown>`)

|      % |     Size | Samples | Caller | Location                                 |
| -----: | -------: | ------: | ------ | ---------------------------------------- |
| 100.0% | 36.2 KiB |       2 | `o`    | `node_modules/d3/dist/d3.min.js:2:77004` |

##### `exec` (`<unknown>`)

|     % |     Size | Samples | Caller | Location                                  |
| ----: | -------: | ------: | ------ | ----------------------------------------- |
| 53.6% | 18.8 KiB |       1 | `Jc`   | `node_modules/d3/dist/d3.min.js:2:107030` |
| 46.4% | 16.3 KiB |       1 | `Dv`   | `node_modules/d3/dist/d3.min.js:2:169110` |

##### `chartLayouts` (`workload.mjs:116:24`)

|      % |   Size | Samples | Caller                         | Location            |
| -----: | -----: | ------: | ------------------------------ | ------------------- |
| 100.0% | 32 KiB |       2 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `max` (`<unknown>`)

|      % |     Size | Samples | Caller | Location                                  |
| -----: | -------: | ------: | ------ | ----------------------------------------- |
| 100.0% | 16.5 KiB |       1 | `Bp`   | `node_modules/d3/dist/d3.min.js:2:147443` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                       | Location                                  |
| ----: | -------: | ------: | ------------------------------ | ----------------------------------------- |
| 98.6% | 59.3 MiB |   3,763 | `(anonymous)`                  | `<unknown>`                               |
| 98.5% | 59.2 MiB |   3,760 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`                       |
| 84.0% | 50.5 MiB |   3,210 | `chartLayouts`                 | `workload.mjs:116:24`                     |
| 67.9% | 40.9 MiB |   2,595 | `map`                          | `<unknown>`                               |
| 66.6% |   40 MiB |   2,542 | `d`                            | `node_modules/d3/dist/d3.min.js:2:223550` |
| 66.5% |   40 MiB |   2,541 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:76982`  |
| 66.5% |   40 MiB |   2,541 | `i`                            | `node_modules/d3/dist/d3.min.js:2:76807`  |
| 66.5% |   40 MiB |   2,540 | `o`                            | `node_modules/d3/dist/d3.min.js:2:77004`  |
| 65.5% | 39.4 MiB |   2,500 | `p`                            | `node_modules/d3/dist/d3.min.js:2:77576`  |
| 65.5% | 39.4 MiB |   2,500 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:77113`  |
| 14.1% | 8.48 MiB |     542 | `select`                       | `node_modules/d3/dist/d3.min.js:2:22328`  |
| 13.7% | 8.21 MiB |     525 | `append`                       | `node_modules/d3/dist/d3.min.js:2:26726`  |
| 12.1% |  7.3 MiB |     467 | `join`                         | `node_modules/d3/dist/d3.min.js:2:24162`  |
|  7.2% | 4.32 MiB |     276 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:26793`  |
|  7.2% | 4.32 MiB |     276 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:16259`  |
|  6.5% | 3.89 MiB |     249 | `(anonymous)`                  | `workload.mjs:185:13`                     |
|  5.6% | 3.38 MiB |     215 | `call`                         | `node_modules/d3/dist/d3.min.js:2:25192`  |
|  5.6% | 3.36 MiB |     214 | `h`                            | `node_modules/d3/dist/d3.min.js:2:12208`  |
|  5.5% | 3.33 MiB |     213 | `eachBefore`                   | `node_modules/d3/dist/d3.min.js:2:141754` |
|  5.5% | 3.32 MiB |     212 | `Bp`                           | `node_modules/d3/dist/d3.min.js:2:147443` |

#### Categories

##### Third-party

|     % |     Size | Samples | Function      | Location                                  |
| ----: | -------: | ------: | ------------- | ----------------------------------------- |
| 66.6% |   40 MiB |   2,542 | `d`           | `node_modules/d3/dist/d3.min.js:2:223550` |
| 66.5% |   40 MiB |   2,541 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:76982`  |
| 66.5% |   40 MiB |   2,541 | `i`           | `node_modules/d3/dist/d3.min.js:2:76807`  |
| 66.5% |   40 MiB |   2,540 | `o`           | `node_modules/d3/dist/d3.min.js:2:77004`  |
| 65.5% | 39.4 MiB |   2,500 | `p`           | `node_modules/d3/dist/d3.min.js:2:77576`  |
| 65.5% | 39.4 MiB |   2,500 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:77113`  |
| 14.1% | 8.48 MiB |     542 | `select`      | `node_modules/d3/dist/d3.min.js:2:22328`  |
| 13.7% | 8.21 MiB |     525 | `append`      | `node_modules/d3/dist/d3.min.js:2:26726`  |
| 12.1% |  7.3 MiB |     467 | `join`        | `node_modules/d3/dist/d3.min.js:2:24162`  |
|  7.2% | 4.32 MiB |     276 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:26793`  |
|  7.2% | 4.32 MiB |     276 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:16259`  |
|  5.6% | 3.38 MiB |     215 | `call`        | `node_modules/d3/dist/d3.min.js:2:25192`  |
|  5.6% | 3.36 MiB |     214 | `h`           | `node_modules/d3/dist/d3.min.js:2:12208`  |
|  5.5% | 3.33 MiB |     213 | `eachBefore`  | `node_modules/d3/dist/d3.min.js:2:141754` |
|  5.5% | 3.32 MiB |     212 | `Bp`          | `node_modules/d3/dist/d3.min.js:2:147443` |
|  5.5% | 3.32 MiB |     212 | `e`           | `node_modules/d3/dist/d3.min.js:2:147904` |
|  5.5% | 3.32 MiB |     212 | `l`           | `node_modules/d3/dist/d3.min.js:2:269888` |
|  5.5% | 3.32 MiB |     212 | `s`           | `node_modules/d3/dist/d3.min.js:2:269797` |
|  2.3% | 1.38 MiB |      88 | `Gd`          | `node_modules/d3/dist/d3.min.js:2:139995` |
|  2.0% | 1.22 MiB |      78 | `d`           | `node_modules/d3/dist/d3.min.js:2:235885` |

##### Standard library

|     % |     Size | Samples | Function  | Location    |
| ----: | -------: | ------: | --------- | ----------- |
| 67.9% | 40.9 MiB |   2,595 | `map`     | `<unknown>` |
|  2.0% | 1.21 MiB |      77 | `push`    | `<unknown>` |
|  0.6% |  339 KiB |      21 | `from`    | `<unknown>` |
|  0.4% |  277 KiB |      15 | `forEach` | `<unknown>` |
|  0.2% | 96.3 KiB |       6 | `next`    | `<unknown>` |
|  0.1% |   35 KiB |       2 | `exec`    | `<unknown>` |

##### Ours

|     % |     Size | Samples | Function                       | Location              |
| ----: | -------: | ------: | ------------------------------ | --------------------- |
| 98.5% | 59.2 MiB |   3,760 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`   |
| 84.0% | 50.5 MiB |   3,210 | `chartLayouts`                 | `workload.mjs:116:24` |
|  6.5% | 3.89 MiB |     249 | `(anonymous)`                  | `workload.mjs:185:13` |
|  3.2% | 1.93 MiB |     120 | `chartBreakdowns`              | `workload.mjs:39:27`  |
|  1.2% |  737 KiB |      46 | `(anonymous)`                  | `workload.mjs:136:28` |
|  0.1% | 48.1 KiB |       3 | `(anonymous)`                  | `workload.mjs:121:16` |
|  0.1% |   48 KiB |       1 | `(anonymous)`                  | `workload.mjs:193:9`  |
| <0.1% | 16.3 KiB |       1 | `(anonymous)`                  | `workload.mjs:11:29`  |
| <0.1% |   16 KiB |       1 | `(anonymous)`                  | `workload.mjs:199:25` |
| <0.1% |   16 KiB |       1 | `(anonymous)`                  | `workload.mjs:195:13` |

##### Native

|     % |     Size | Samples | Function   | Location    |
| ----: | -------: | ------: | ---------- | ----------- |
|  1.3% |  788 KiB |       1 | `(v8 api)` | `<unknown>` |
| <0.1% | 16.5 KiB |       1 | `max`      | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`<unknown>`)

|     % |     Size | Samples | Callee                         | Location            |
| ----: | -------: | ------: | ------------------------------ | ------------------- |
| 99.9% | 59.2 MiB |   3,760 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|     % |     Size | Samples | Callee            | Location                                 |
| ----: | -------: | ------: | ----------------- | ---------------------------------------- |
| 85.3% | 50.5 MiB |   3,210 | `chartLayouts`    | `workload.mjs:116:24`                    |
|  6.7% | 3.97 MiB |     254 | `join`            | `node_modules/d3/dist/d3.min.js:2:24162` |
|  4.3% | 2.55 MiB |     162 | `call`            | `node_modules/d3/dist/d3.min.js:2:25192` |
|  3.3% | 1.93 MiB |     120 | `chartBreakdowns` | `workload.mjs:39:27`                     |
|  0.1% | 64.8 KiB |       4 | `append`          | `node_modules/d3/dist/d3.min.js:2:26726` |

##### `chartLayouts` (`workload.mjs:116:24`)

|     % |     Size | Samples | Callee              | Location                                  |
| ----: | -------: | ------: | ------------------- | ----------------------------------------- |
| 79.2% |   40 MiB |   2,542 | `d`                 | `node_modules/d3/dist/d3.min.js:2:223550` |
|  6.6% | 3.32 MiB |     212 | `s`                 | `node_modules/d3/dist/d3.min.js:2:269797` |
|  6.0% | 3.05 MiB |     195 | `join`              | `node_modules/d3/dist/d3.min.js:2:24162`  |
|  2.7% | 1.38 MiB |      88 | `Gd`                | `node_modules/d3/dist/d3.min.js:2:139995` |
|  2.4% | 1.22 MiB |      78 | `t.forceSimulation` | `node_modules/d3/dist/d3.min.js:2:235437` |

##### `map` (`<unknown>`)

|     % |     Size | Samples | Callee        | Location                                 |
| ----: | -------: | ------: | ------------- | ---------------------------------------- |
| 97.9% |   40 MiB |   2,541 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:76982` |
|  1.8% |  737 KiB |      46 | `(anonymous)` | `workload.mjs:136:28`                    |
|  0.1% | 48.1 KiB |       3 | `(anonymous)` | `workload.mjs:121:16`                    |
| <0.1% | 16.3 KiB |       1 | `(anonymous)` | `workload.mjs:11:29`                     |

##### `d` (`node_modules/d3/dist/d3.min.js:2:223550`)

|      % |   Size | Samples | Callee | Location                                  |
| -----: | -----: | ------: | ------ | ----------------------------------------- |
| 100.0% | 40 MiB |   2,541 | `i`    | `node_modules/d3/dist/d3.min.js:2:76807`  |
|  <0.1% | 16 KiB |       1 | `h`    | `node_modules/d3/dist/d3.min.js:2:223199` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:76982`)

|      % |   Size | Samples | Callee | Location                                 |
| -----: | -----: | ------: | ------ | ---------------------------------------- |
| 100.0% | 40 MiB |   2,540 | `o`    | `node_modules/d3/dist/d3.min.js:2:77004` |

##### `i` (`node_modules/d3/dist/d3.min.js:2:76807`)

|      % |   Size | Samples | Callee | Location    |
| -----: | -----: | ------: | ------ | ----------- |
| 100.0% | 40 MiB |   2,541 | `map`  | `<unknown>` |

##### `o` (`node_modules/d3/dist/d3.min.js:2:77004`)

|     % |     Size | Samples | Callee        | Location                                 |
| ----: | -------: | ------: | ------------- | ---------------------------------------- |
| 98.4% | 39.4 MiB |   2,500 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:77113` |
|  0.1% | 36.2 KiB |       2 | `forEach`     | `<unknown>`                              |

##### `p` (`node_modules/d3/dist/d3.min.js:2:77576`)

|    % |    Size | Samples | Callee        | Location                                 |
| ---: | ------: | ------: | ------------- | ---------------------------------------- |
| 2.1% | 865 KiB |      54 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:78140` |
| 0.5% | 182 KiB |      11 | `push`        | `<unknown>`                              |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:77113`)

|     % |     Size | Samples | Callee    | Location                                 |
| ----: | -------: | ------: | --------- | ---------------------------------------- |
| 99.9% | 39.3 MiB |   2,498 | `p`       | `node_modules/d3/dist/d3.min.js:2:77576` |
|  0.1% |   32 KiB |       2 | `forEach` | `<unknown>`                              |

##### `select` (`node_modules/d3/dist/d3.min.js:2:22328`)

|     % |     Size | Samples | Callee        | Location                                 |
| ----: | -------: | ------: | ------------- | ---------------------------------------- |
| 47.0% | 3.99 MiB |     255 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:26793` |
|  0.4% |   32 KiB |       2 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:26975` |

##### `append` (`node_modules/d3/dist/d3.min.js:2:26726`)

|     % |     Size | Samples | Callee        | Location                                 |
| ----: | -------: | ------: | ------------- | ---------------------------------------- |
| 91.0% | 7.48 MiB |     478 | `select`      | `node_modules/d3/dist/d3.min.js:2:22328` |
|  4.0% |  336 KiB |      21 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:26793` |

##### `join` (`node_modules/d3/dist/d3.min.js:2:24162`)

|     % |     Size | Samples | Callee        | Location                                 |
| ----: | -------: | ------: | ------------- | ---------------------------------------- |
| 53.3% | 3.89 MiB |     249 | `(anonymous)` | `workload.mjs:185:13`                    |
| 46.7% | 3.41 MiB |     218 | `append`      | `node_modules/d3/dist/d3.min.js:2:26726` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:26793`)

|     % |     Size | Samples | Callee        | Location                                 |
| ----: | -------: | ------: | ------------- | ---------------------------------------- |
| 99.3% | 4.29 MiB |     274 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:16259` |
|  0.7% | 32.1 KiB |       2 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:16431` |

##### `(anonymous)` (`workload.mjs:185:13`)

|      % |     Size | Samples | Callee   | Location                                 |
| -----: | -------: | ------: | -------- | ---------------------------------------- |
| 100.0% | 3.89 MiB |     249 | `append` | `node_modules/d3/dist/d3.min.js:2:26726` |

##### `call` (`node_modules/d3/dist/d3.min.js:2:25192`)

|     % |     Size | Samples | Callee        | Location                                 |
| ----: | -------: | ------: | ------------- | ---------------------------------------- |
| 99.5% | 3.36 MiB |     214 | `h`           | `node_modules/d3/dist/d3.min.js:2:12208` |
|  0.5% |   16 KiB |       1 | `(anonymous)` | `workload.mjs:195:13`                    |

##### `h` (`node_modules/d3/dist/d3.min.js:2:12208`)

|     % |    Size | Samples | Callee      | Location                                  |
| ----: | ------: | ------: | ----------- | ----------------------------------------- |
| 28.4% | 977 KiB |      61 | `select`    | `node_modules/d3/dist/d3.min.js:2:22328`  |
| 24.7% | 849 KiB |      53 | `append`    | `node_modules/d3/dist/d3.min.js:2:26726`  |
| 19.5% | 673 KiB |      42 | `I_.s.copy` | `node_modules/d3/dist/d3.min.js:2:173694` |
|  8.8% | 305 KiB |      19 | `n.copy`    | `node_modules/d3/dist/d3.min.js:2:257567` |
|  7.3% | 252 KiB |      15 | `attr`      | `node_modules/d3/dist/d3.min.js:2:25709`  |

##### `eachBefore` (`node_modules/d3/dist/d3.min.js:2:141754`)

|     % |     Size | Samples | Callee        | Location                                  |
| ----: | -------: | ------: | ------------- | ----------------------------------------- |
| 99.5% | 3.32 MiB |     212 | `l`           | `node_modules/d3/dist/d3.min.js:2:269888` |
|  0.5% |   16 KiB |       1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:142656` |

##### `Bp` (`node_modules/d3/dist/d3.min.js:2:147443`)

|    % |     Size | Samples | Callee | Location                                  |
| ---: | -------: | ------: | ------ | ----------------------------------------- |
| 2.4% | 80.1 KiB |       5 | `Ap`   | `node_modules/d3/dist/d3.min.js:2:146394` |
| 1.4% |   48 KiB |       3 | `Ip`   | `node_modules/d3/dist/d3.min.js:2:147236` |
| 0.5% | 16.5 KiB |       1 | `max`  | `<unknown>`                               |

##### `e` (`node_modules/d3/dist/d3.min.js:2:147904`)

|      % |     Size | Samples | Callee | Location                                  |
| -----: | -------: | ------: | ------ | ----------------------------------------- |
| 100.0% | 3.32 MiB |     212 | `Bp`   | `node_modules/d3/dist/d3.min.js:2:147443` |

##### `l` (`node_modules/d3/dist/d3.min.js:2:269888`)

|      % |     Size | Samples | Callee | Location                                  |
| -----: | -------: | ------: | ------ | ----------------------------------------- |
| 100.0% | 3.32 MiB |     212 | `e`    | `node_modules/d3/dist/d3.min.js:2:147904` |

##### `s` (`node_modules/d3/dist/d3.min.js:2:269797`)

|      % |     Size | Samples | Callee       | Location                                  |
| -----: | -------: | ------: | ------------ | ----------------------------------------- |
| 100.0% | 3.32 MiB |     212 | `eachBefore` | `node_modules/d3/dist/d3.min.js:2:141754` |

##### `chartBreakdowns` (`workload.mjs:39:27`)

|     % |     Size | Samples | Callee | Location                                  |
| ----: | -------: | ------: | ------ | ----------------------------------------- |
| 43.1% |  849 KiB |      53 | `call` | `node_modules/d3/dist/d3.min.js:2:25192`  |
| 24.4% |  482 KiB |      30 | `r`    | `node_modules/d3/dist/d3.min.js:2:7022`   |
| 14.6% |  288 KiB |      18 | `join` | `node_modules/d3/dist/d3.min.js:2:24162`  |
|  6.5% |  128 KiB |       8 | `a`    | `node_modules/d3/dist/d3.min.js:2:252683` |
|  4.9% | 96.3 KiB |       6 | `D`    | `node_modules/d3/dist/d3.min.js:2:4759`   |

##### `Gd` (`node_modules/d3/dist/d3.min.js:2:139995`)

|     % |    Size | Samples | Callee | Location    |
| ----: | ------: | ------: | ------ | ----------- |
| 13.8% | 195 KiB |      12 | `from` | `<unknown>` |

##### `from` (`<unknown>`)

|     % |     Size | Samples | Callee | Location    |
| ----: | -------: | ------: | ------ | ----------- |
| 28.4% | 96.3 KiB |       6 | `next` | `<unknown>` |

##### `forEach` (`<unknown>`)

|     % |    Size | Samples | Callee        | Location                                  |
| ----: | ------: | ------: | ------------- | ----------------------------------------- |
| 75.4% | 209 KiB |      11 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:235751` |
| 11.6% |  32 KiB |       2 | `p`           | `node_modules/d3/dist/d3.min.js:2:77576`  |

##### `(anonymous)` (`workload.mjs:11:29`)

|      % |     Size | Samples | Callee        | Location                                  |
| -----: | -------: | ------: | ------------- | ----------------------------------------- |
| 100.0% | 16.3 KiB |       1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:166117` |

##### `(anonymous)` (`workload.mjs:199:25`)

|      % |   Size | Samples | Callee | Location                                  |
| -----: | -----: | ------: | ------ | ----------------------------------------- |
| 100.0% | 16 KiB |       1 | `i`    | `node_modules/d3/dist/d3.min.js:2:152407` |

##### `(anonymous)` (`workload.mjs:195:13`)

|      % |   Size | Samples | Callee | Location                                 |
| -----: | -----: | ------: | ------ | ---------------------------------------- |
| 100.0% | 16 KiB |       1 | `attr` | `node_modules/d3/dist/d3.min.js:2:25709` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `globalThis.buildAndRetainDom` (`workload.mjs:1:32`) ← `(anonymous)`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                               |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 63.7% | 38.3 MiB |   2,433 | `p` (`node_modules/d3/dist/d3.min.js:2:77576`) ← `(anonymous)` (2:77113) ← `o` (2:77004) ← `(anonymous)` (2:76982) ← `map` ← `i` (`node_modules/d3/dist/d3.min.js:2:76807`) ← `d` (2:223550) ← `chartLayouts` (`workload.mjs:116:24`)                                    |
|  5.3% | 3.18 MiB |     203 | `Bp` (`node_modules/d3/dist/d3.min.js:2:147443`) ← `e` (2:147904) ← `l` (2:269888) ← `eachBefore` (2:141754) ← `s` (2:269797) ← `chartLayouts` (`workload.mjs:116:24`)                                                                                                   |
|  3.1% | 1.88 MiB |     120 | `select` (`node_modules/d3/dist/d3.min.js:2:22328`) ← `append` (2:26726) ← `(anonymous)` (`workload.mjs:185:13`) ← `join` (`node_modules/d3/dist/d3.min.js:2:24162`)                                                                                                     |
|  2.7% | 1.63 MiB |     104 | `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `select` (2:22328) ← `append` (2:26726) ← `(anonymous)` (`workload.mjs:185:13`) ← `join` (`node_modules/d3/dist/d3.min.js:2:24162`)                                                 |
|  2.4% | 1.44 MiB |      92 | `select` (`node_modules/d3/dist/d3.min.js:2:22328`) ← `append` (2:26726) ← `join` (2:24162) ← `chartLayouts` (`workload.mjs:116:24`)                                                                                                                                     |
|  2.2% | 1.31 MiB |      84 | `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `select` (2:22328) ← `append` (2:26726) ← `join` (2:24162) ← `chartLayouts` (`workload.mjs:116:24`)                                                                                 |
|  2.0% | 1.22 MiB |      78 | `d` (`node_modules/d3/dist/d3.min.js:2:235885`) ← `t.forceSimulation` (2:235437) ← `chartLayouts` (`workload.mjs:116:24`)                                                                                                                                                |
|  2.0% | 1.19 MiB |      76 | `Gd` (`node_modules/d3/dist/d3.min.js:2:139995`) ← `chartLayouts` (`workload.mjs:116:24`)                                                                                                                                                                                |
|  1.2% |  737 KiB |      46 | `(anonymous)` (`workload.mjs:136:28`) ← `map` ← `chartLayouts` (`workload.mjs:116:24`)                                                                                                                                                                                   |
|  1.0% |  609 KiB |      38 | `push` ← `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:78140`) ← `p` (2:77576) ← `(anonymous)` (2:77113) ← `o` (2:77004) ← `(anonymous)` (2:76982) ← `map` ← `i` (`node_modules/d3/dist/d3.min.js:2:76807`) ← `d` (2:223550) ← `chartLayouts` (`workload.mjs:116:24`) |
|  1.0% |  609 KiB |      38 | `o` (`node_modules/d3/dist/d3.min.js:2:77004`) ← `(anonymous)` (2:76982) ← `map` ← `i` (`node_modules/d3/dist/d3.min.js:2:76807`) ← `d` (2:223550) ← `chartLayouts` (`workload.mjs:116:24`)                                                                              |
|  0.8% |  496 KiB |      31 | `select` (`node_modules/d3/dist/d3.min.js:2:22328`) ← `h` (2:12208) ← `call` (2:25192)                                                                                                                                                                                   |
|  0.8% |  464 KiB |      29 | `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `select` (2:22328) ← `h` (2:12208) ← `call` (2:25192)                                                                                                                               |
|  0.8% |  464 KiB |      29 | `select` (`node_modules/d3/dist/d3.min.js:2:22328`) ← `append` (2:26726) ← `h` (2:12208) ← `call` (2:25192)                                                                                                                                                              |
|  0.6% |  384 KiB |      24 | `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `select` (2:22328) ← `append` (2:26726) ← `h` (2:12208) ← `call` (2:25192)                                                                                                          |
|  0.6% |  353 KiB |      22 | `I_` (`node_modules/d3/dist/d3.min.js:2:173066`) ← `I_.s.copy` (2:173694) ← `h` (2:12208) ← `call` (2:25192) ← `chartBreakdowns` (`workload.mjs:39:27`)                                                                                                                  |
|  0.5% |  337 KiB |      21 | `push` ← `r` (`node_modules/d3/dist/d3.min.js:2:7022`) ← `chartBreakdowns` (`workload.mjs:39:27`)                                                                                                                                                                        |
|  0.4% |  274 KiB |      17 | `t` (`node_modules/d3/dist/d3.min.js:2:4909`) ← `F` (2:4882) ← `P` (2:4565) ← `chartLayouts` (`workload.mjs:116:24`)                                                                                                                                                     |
|  0.4% |  256 KiB |      16 | `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:78140`) ← `p` (2:77576) ← `(anonymous)` (2:77113) ← `o` (2:77004) ← `(anonymous)` (2:76982) ← `map` ← `i` (`node_modules/d3/dist/d3.min.js:2:76807`) ← `d` (2:223550) ← `chartLayouts` (`workload.mjs:116:24`)          |
|  0.3% |  208 KiB |      13 | `format` (`node_modules/d3/dist/d3.min.js:2:167310`) ← `I_` (2:173066) ← `I_.s.copy` (2:173694) ← `h` (2:12208) ← `call` (2:25192) ← `chartBreakdowns` (`workload.mjs:39:27`)                                                                                            |

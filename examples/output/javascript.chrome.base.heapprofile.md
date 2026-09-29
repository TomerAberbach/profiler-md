# Heap profile

Allocated 58.2 MiB over 3,648 samples (16.3 KiB per sample).

| Category         |     % |     Size | Samples |
| ---------------- | ----: | -------: | ------: |
| Third-party      | 93.6% | 54.4 MiB |   3,459 |
| Standard library |  2.9% | 1.71 MiB |     109 |
| Ours             |  1.7% |  993 KiB |      60 |
| Native           |  1.3% |  788 KiB |       1 |
| Compiler         |  0.3% |  160 KiB |      10 |
| Unknown          |  0.2% |  145 KiB |       9 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function      | Location                                  |
| ----: | -------: | ------: | ------------- | ----------------------------------------- |
| 61.9% |   36 MiB |   2,288 | `p`           | `node_modules/d3/dist/d3.min.js:2:77577`  |
|  7.8% | 4.52 MiB |     289 | `select`      | `node_modules/d3/dist/d3.min.js:2:22328`  |
|  7.3% | 4.25 MiB |     272 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:16259`  |
|  6.2% | 3.61 MiB |     231 | `Bp`          | `node_modules/d3/dist/d3.min.js:2:147464` |
|  2.1% | 1.23 MiB |      78 | `push`        | `<unknown>`                               |
|  1.9% | 1.11 MiB |      71 | `Gd`          | `node_modules/d3/dist/d3.min.js:2:140014` |
|  1.8% | 1.05 MiB |      67 | `d`           | `node_modules/d3/dist/d3.min.js:2:235836` |
|  1.3% |  788 KiB |       1 | `(v8 api)`    | `<unknown>`                               |
|  1.2% |  737 KiB |      46 | `(anonymous)` | `workload.mjs:136:28`                     |
|  0.7% |  433 KiB |      27 | `o`           | `node_modules/d3/dist/d3.min.js:2:77004`  |
|  0.7% |  401 KiB |      25 | `Ag`          | `node_modules/d3/dist/d3.min.js:2:154800` |
|  0.7% |  400 KiB |      25 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:78141`  |
|  0.6% |  384 KiB |      24 | `append`      | `node_modules/d3/dist/d3.min.js:2:26726`  |
|  0.6% |  352 KiB |      22 | `format`      | `node_modules/d3/dist/d3.min.js:2:167331` |
|  0.5% |  322 KiB |      20 | `from`        | `<unknown>`                               |
|  0.4% |  240 KiB |      15 | `I_`          | `node_modules/d3/dist/d3.min.js:2:173087` |
|  0.3% |  176 KiB |      11 | `r`           | `node_modules/d3/dist/d3.min.js:2:7022`   |
|  0.3% |  160 KiB |      10 | `next`        | `<unknown>`                               |
|  0.3% |  160 KiB |      10 | `(compiler)`  | `<unknown>`                               |
|  0.2% |  145 KiB |       9 | `(anonymous)` | `<unknown>`                               |

#### Categories

##### Third-party

|     % |     Size | Samples | Function      | Location                                  |
| ----: | -------: | ------: | ------------- | ----------------------------------------- |
| 61.9% |   36 MiB |   2,288 | `p`           | `node_modules/d3/dist/d3.min.js:2:77577`  |
|  7.8% | 4.52 MiB |     289 | `select`      | `node_modules/d3/dist/d3.min.js:2:22328`  |
|  7.3% | 4.25 MiB |     272 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:16259`  |
|  6.2% | 3.61 MiB |     231 | `Bp`          | `node_modules/d3/dist/d3.min.js:2:147464` |
|  1.9% | 1.11 MiB |      71 | `Gd`          | `node_modules/d3/dist/d3.min.js:2:140014` |
|  1.8% | 1.05 MiB |      67 | `d`           | `node_modules/d3/dist/d3.min.js:2:235836` |
|  0.7% |  433 KiB |      27 | `o`           | `node_modules/d3/dist/d3.min.js:2:77004`  |
|  0.7% |  401 KiB |      25 | `Ag`          | `node_modules/d3/dist/d3.min.js:2:154800` |
|  0.7% |  400 KiB |      25 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:78141`  |
|  0.6% |  384 KiB |      24 | `append`      | `node_modules/d3/dist/d3.min.js:2:26726`  |
|  0.6% |  352 KiB |      22 | `format`      | `node_modules/d3/dist/d3.min.js:2:167331` |
|  0.4% |  240 KiB |      15 | `I_`          | `node_modules/d3/dist/d3.min.js:2:173087` |
|  0.3% |  176 KiB |      11 | `r`           | `node_modules/d3/dist/d3.min.js:2:7022`   |
|  0.2% |  128 KiB |       8 | `Fg`          | `node_modules/d3/dist/d3.min.js:2:156969` |
|  0.2% |  121 KiB |       6 | `g`           | `node_modules/d3/dist/d3.min.js:2:231166` |
|  0.2% |  112 KiB |       7 | `a`           | `node_modules/d3/dist/d3.min.js:2:252634` |
|  0.2% | 93.5 KiB |       5 | `h`           | `node_modules/d3/dist/d3.min.js:2:233884` |
|  0.1% | 80.8 KiB |       5 | `t`           | `node_modules/d3/dist/d3.min.js:2:4909`   |
|  0.1% | 80.2 KiB |       5 | `Gr`          | `node_modules/d3/dist/d3.min.js:2:43251`  |
|  0.1% | 80.1 KiB |       5 | `h`           | `node_modules/d3/dist/d3.min.js:2:12208`  |

##### Standard library

|     % |     Size | Samples | Function | Location    |
| ----: | -------: | ------: | -------- | ----------- |
|  2.1% | 1.23 MiB |      78 | `push`   | `<unknown>` |
|  0.5% |  322 KiB |      20 | `from`   | `<unknown>` |
|  0.3% |  160 KiB |      10 | `next`   | `<unknown>` |
| <0.1% |   16 KiB |       1 | `map`    | `<unknown>` |

##### Ours

|     % |     Size | Samples | Function                       | Location              |
| ----: | -------: | ------: | ------------------------------ | --------------------- |
|  1.2% |  737 KiB |      46 | `(anonymous)`                  | `workload.mjs:136:28` |
|  0.1% | 64.1 KiB |       4 | `(anonymous)`                  | `workload.mjs:121:16` |
|  0.1% | 48.3 KiB |       3 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`   |
|  0.1% |   48 KiB |       1 | `(anonymous)`                  | `workload.mjs:193:9`  |
|  0.1% |   32 KiB |       2 | `chartLayouts`                 | `workload.mjs:116:24` |
| <0.1% | 16.2 KiB |       1 | `chartBreakdowns`              | `workload.mjs:39:27`  |
| <0.1% |   16 KiB |       1 | `(anonymous)`                  | `workload.mjs:77:21`  |
| <0.1% |   16 KiB |       1 | `(anonymous)`                  | `workload.mjs:11:29`  |
| <0.1% |   16 KiB |       1 | `(anonymous)`                  | `workload.mjs:134:23` |

##### Native

|    % |    Size | Samples | Function   | Location    |
| ---: | ------: | ------: | ---------- | ----------- |
| 1.3% | 788 KiB |       1 | `(v8 api)` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `p` (`node_modules/d3/dist/d3.min.js:2:77577`)

|     % |     Size | Samples | Caller        | Location                                 |
| ----: | -------: | ------: | ------------- | ---------------------------------------- |
| 99.7% | 35.9 MiB |   2,282 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:77113` |
|  0.3% |   96 KiB |       6 | `forEach`     | `<unknown>`                              |

##### `select` (`node_modules/d3/dist/d3.min.js:2:22328`)

|     % |     Size | Samples | Caller   | Location                                 |
| ----: | -------: | ------: | -------- | ---------------------------------------- |
| 87.5% | 3.96 MiB |     253 | `append` | `node_modules/d3/dist/d3.min.js:2:26726` |
| 12.5% |  577 KiB |      36 | `h`      | `node_modules/d3/dist/d3.min.js:2:12208` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:16259`)

|     % |     Size | Samples | Caller        | Location                                 |
| ----: | -------: | ------: | ------------- | ---------------------------------------- |
| 99.6% | 4.24 MiB |     271 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:26793` |
|  0.4% |   16 KiB |       1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:26975` |

##### `Bp` (`node_modules/d3/dist/d3.min.js:2:147464`)

|      % |     Size | Samples | Caller | Location                                  |
| -----: | -------: | ------: | ------ | ----------------------------------------- |
| 100.0% | 3.61 MiB |     231 | `e`    | `node_modules/d3/dist/d3.min.js:2:147925` |

##### `push` (`<unknown>`)

|     % |    Size | Samples | Caller        | Location                                 |
| ----: | ------: | ------: | ------------- | ---------------------------------------- |
| 54.9% | 689 KiB |      43 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:78141` |
| 25.6% | 321 KiB |      20 | `r`           | `node_modules/d3/dist/d3.min.js:2:7022`  |
| 10.3% | 129 KiB |       8 | `t`           | `node_modules/d3/dist/d3.min.js:2:4909`  |
|  9.2% | 116 KiB |       7 | `p`           | `node_modules/d3/dist/d3.min.js:2:77577` |

##### `Gd` (`node_modules/d3/dist/d3.min.js:2:140014`)

|      % |     Size | Samples | Caller         | Location              |
| -----: | -------: | ------: | -------------- | --------------------- |
| 100.0% | 1.11 MiB |      71 | `chartLayouts` | `workload.mjs:116:24` |

##### `d` (`node_modules/d3/dist/d3.min.js:2:235836`)

|      % |     Size | Samples | Caller              | Location                                  |
| -----: | -------: | ------: | ------------------- | ----------------------------------------- |
| 100.0% | 1.05 MiB |      67 | `t.forceSimulation` | `node_modules/d3/dist/d3.min.js:2:235388` |

##### `(anonymous)` (`workload.mjs:136:28`)

|      % |    Size | Samples | Caller | Location    |
| -----: | ------: | ------: | ------ | ----------- |
| 100.0% | 737 KiB |      46 | `map`  | `<unknown>` |

##### `o` (`node_modules/d3/dist/d3.min.js:2:77004`)

|      % |    Size | Samples | Caller        | Location                                 |
| -----: | ------: | ------: | ------------- | ---------------------------------------- |
| 100.0% | 433 KiB |      27 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:76982` |

##### `Ag` (`node_modules/d3/dist/d3.min.js:2:154800`)

|     % |     Size | Samples | Caller | Location                                  |
| ----: | -------: | ------: | ------ | ----------------------------------------- |
| 44.0% |  176 KiB |      11 | `Sg`   | `node_modules/d3/dist/d3.min.js:2:155632` |
| 32.0% |  128 KiB |       8 | `t`    | `node_modules/d3/dist/d3.min.js:2:257469` |
| 20.0% | 80.2 KiB |       5 | `t`    | `node_modules/d3/dist/d3.min.js:2:257362` |
|  4.0% |   16 KiB |       1 | `I_`   | `node_modules/d3/dist/d3.min.js:2:173087` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:78141`)

|      % |    Size | Samples | Caller | Location                                 |
| -----: | ------: | ------: | ------ | ---------------------------------------- |
| 100.0% | 400 KiB |      25 | `p`    | `node_modules/d3/dist/d3.min.js:2:77577` |

##### `append` (`node_modules/d3/dist/d3.min.js:2:26726`)

|     % |     Size | Samples | Caller        | Location                                 |
| ----: | -------: | ------: | ------------- | ---------------------------------------- |
| 75.0% |  288 KiB |      18 | `join`        | `node_modules/d3/dist/d3.min.js:2:24162` |
| 25.0% | 96.1 KiB |       6 | `(anonymous)` | `workload.mjs:185:13`                    |

##### `format` (`node_modules/d3/dist/d3.min.js:2:167331`)

|      % |    Size | Samples | Caller | Location                                  |
| -----: | ------: | ------: | ------ | ----------------------------------------- |
| 100.0% | 352 KiB |      22 | `I_`   | `node_modules/d3/dist/d3.min.js:2:173087` |

##### `from` (`<unknown>`)

|     % |     Size | Samples | Caller        | Location                                  |
| ----: | -------: | ------: | ------------- | ----------------------------------------- |
| 60.2% |  194 KiB |      12 | `Gd`          | `node_modules/d3/dist/d3.min.js:2:140014` |
| 24.8% | 80.1 KiB |       5 | `Ag.l.domain` | `node_modules/d3/dist/d3.min.js:2:155200` |
| 14.9% |   48 KiB |       3 | `Ag.l.range`  | `node_modules/d3/dist/d3.min.js:2:155280` |

##### `I_` (`node_modules/d3/dist/d3.min.js:2:173087`)

|      % |    Size | Samples | Caller      | Location                                  |
| -----: | ------: | ------: | ----------- | ----------------------------------------- |
| 100.0% | 240 KiB |      15 | `I_.s.copy` | `node_modules/d3/dist/d3.min.js:2:173715` |

##### `r` (`node_modules/d3/dist/d3.min.js:2:7022`)

|      % |    Size | Samples | Caller            | Location             |
| -----: | ------: | ------: | ----------------- | -------------------- |
| 100.0% | 176 KiB |      11 | `chartBreakdowns` | `workload.mjs:39:27` |

##### `next` (`<unknown>`)

|      % |    Size | Samples | Caller | Location    |
| -----: | ------: | ------: | ------ | ----------- |
| 100.0% | 160 KiB |      10 | `from` | `<unknown>` |

##### `Fg` (`node_modules/d3/dist/d3.min.js:2:156969`)

|      % |    Size | Samples | Caller | Location                                  |
| -----: | ------: | ------: | ------ | ----------------------------------------- |
| 100.0% | 128 KiB |       8 | `t`    | `node_modules/d3/dist/d3.min.js:2:257469` |

##### `g` (`node_modules/d3/dist/d3.min.js:2:231166`)

|     % |     Size | Samples | Caller     | Location                                  |
| ----: | -------: | ------: | ---------- | ----------------------------------------- |
| 86.4% |  105 KiB |       5 | `a`        | `node_modules/d3/dist/d3.min.js:2:231005` |
| 13.6% | 16.4 KiB |       1 | `Fc.visit` | `node_modules/d3/dist/d3.min.js:2:105700` |

##### `a` (`node_modules/d3/dist/d3.min.js:2:252634`)

|      % |    Size | Samples | Caller            | Location             |
| -----: | ------: | ------: | ----------------- | -------------------- |
| 100.0% | 112 KiB |       7 | `chartBreakdowns` | `workload.mjs:39:27` |

##### `h` (`node_modules/d3/dist/d3.min.js:2:233884`)

|     % |     Size | Samples | Caller     | Location                                  |
| ----: | -------: | ------: | ---------- | ----------------------------------------- |
| 81.0% | 75.8 KiB |       4 | `f`        | `node_modules/d3/dist/d3.min.js:2:233452` |
| 19.0% | 17.8 KiB |       1 | `Fc.visit` | `node_modules/d3/dist/d3.min.js:2:105700` |

##### `t` (`node_modules/d3/dist/d3.min.js:2:4909`)

|      % |     Size | Samples | Caller | Location                                |
| -----: | -------: | ------: | ------ | --------------------------------------- |
| 100.0% | 80.8 KiB |       5 | `F`    | `node_modules/d3/dist/d3.min.js:2:4882` |

##### `Gr` (`node_modules/d3/dist/d3.min.js:2:43251`)

|      % |     Size | Samples | Caller | Location                                  |
| -----: | -------: | ------: | ------ | ----------------------------------------- |
| 100.0% | 80.2 KiB |       5 | `wg`   | `node_modules/d3/dist/d3.min.js:2:154280` |

##### `h` (`node_modules/d3/dist/d3.min.js:2:12208`)

|      % |     Size | Samples | Caller | Location                                 |
| -----: | -------: | ------: | ------ | ---------------------------------------- |
| 100.0% | 80.1 KiB |       5 | `call` | `node_modules/d3/dist/d3.min.js:2:25192` |

##### `(anonymous)` (`workload.mjs:121:16`)

|      % |     Size | Samples | Caller | Location    |
| -----: | -------: | ------: | ------ | ----------- |
| 100.0% | 64.1 KiB |       4 | `map`  | `<unknown>` |

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|      % |     Size | Samples | Caller        | Location    |
| -----: | -------: | ------: | ------------- | ----------- |
| 100.0% | 48.3 KiB |       3 | `(anonymous)` | `<unknown>` |

##### `(anonymous)` (`workload.mjs:193:9`)

|      % |   Size | Samples | Caller        | Location                                 |
| -----: | -----: | ------: | ------------- | ---------------------------------------- |
| 100.0% | 48 KiB |       1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:18176` |

##### `chartLayouts` (`workload.mjs:116:24`)

|      % |   Size | Samples | Caller                         | Location            |
| -----: | -----: | ------: | ------------------------------ | ------------------- |
| 100.0% | 32 KiB |       2 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `chartBreakdowns` (`workload.mjs:39:27`)

|      % |     Size | Samples | Caller                         | Location            |
| -----: | -------: | ------: | ------------------------------ | ------------------- |
| 100.0% | 16.2 KiB |       1 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `(anonymous)` (`workload.mjs:77:21`)

|      % |   Size | Samples | Caller        | Location                                 |
| -----: | -----: | ------: | ------------- | ---------------------------------------- |
| 100.0% | 16 KiB |       1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:18176` |

##### `map` (`<unknown>`)

|      % |   Size | Samples | Caller         | Location              |
| -----: | -----: | ------: | -------------- | --------------------- |
| 100.0% | 16 KiB |       1 | `chartLayouts` | `workload.mjs:116:24` |

##### `(anonymous)` (`workload.mjs:11:29`)

|      % |   Size | Samples | Caller | Location    |
| -----: | -----: | ------: | ------ | ----------- |
| 100.0% | 16 KiB |       1 | `map`  | `<unknown>` |

##### `(anonymous)` (`workload.mjs:134:23`)

|      % |   Size | Samples | Caller        | Location                                 |
| -----: | -----: | ------: | ------------- | ---------------------------------------- |
| 100.0% | 16 KiB |       1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:18176` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function                       | Location                                  |
| ----: | -------: | ------: | ------------------------------ | ----------------------------------------- |
| 98.4% | 57.3 MiB |   3,637 | `(anonymous)`                  | `<unknown>`                               |
| 98.2% | 57.1 MiB |   3,628 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`                       |
| 83.1% | 48.4 MiB |   3,073 | `chartLayouts`                 | `workload.mjs:116:24`                     |
| 66.1% | 38.5 MiB |   2,445 | `map`                          | `<unknown>`                               |
| 64.8% | 37.7 MiB |   2,395 | `d`                            | `node_modules/d3/dist/d3.min.js:2:223501` |
| 64.7% | 37.7 MiB |   2,392 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:76982`  |
| 64.7% | 37.7 MiB |   2,392 | `i`                            | `node_modules/d3/dist/d3.min.js:2:76807`  |
| 64.7% | 37.6 MiB |   2,390 | `o`                            | `node_modules/d3/dist/d3.min.js:2:77004`  |
| 63.9% | 37.2 MiB |   2,363 | `p`                            | `node_modules/d3/dist/d3.min.js:2:77577`  |
| 63.9% | 37.2 MiB |   2,363 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:77113`  |
| 14.6% | 8.51 MiB |     544 | `select`                       | `node_modules/d3/dist/d3.min.js:2:22328`  |
| 14.1% | 8.18 MiB |     523 | `append`                       | `node_modules/d3/dist/d3.min.js:2:26726`  |
| 12.5% | 7.27 MiB |     465 | `join`                         | `node_modules/d3/dist/d3.min.js:2:24162`  |
|  7.4% | 4.29 MiB |     274 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:26793`  |
|  7.3% | 4.25 MiB |     272 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:16259`  |
|  6.3% | 3.69 MiB |     236 | `Bp`                           | `node_modules/d3/dist/d3.min.js:2:147464` |
|  6.3% | 3.69 MiB |     236 | `e`                            | `node_modules/d3/dist/d3.min.js:2:147925` |
|  6.3% | 3.69 MiB |     236 | `l`                            | `node_modules/d3/dist/d3.min.js:2:269815` |
|  6.3% | 3.69 MiB |     236 | `eachBefore`                   | `node_modules/d3/dist/d3.min.js:2:141773` |
|  6.3% | 3.69 MiB |     236 | `s`                            | `node_modules/d3/dist/d3.min.js:2:269724` |

#### Categories

##### Third-party

|     % |     Size | Samples | Function      | Location                                  |
| ----: | -------: | ------: | ------------- | ----------------------------------------- |
| 64.8% | 37.7 MiB |   2,395 | `d`           | `node_modules/d3/dist/d3.min.js:2:223501` |
| 64.7% | 37.7 MiB |   2,392 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:76982`  |
| 64.7% | 37.7 MiB |   2,392 | `i`           | `node_modules/d3/dist/d3.min.js:2:76807`  |
| 64.7% | 37.6 MiB |   2,390 | `o`           | `node_modules/d3/dist/d3.min.js:2:77004`  |
| 63.9% | 37.2 MiB |   2,363 | `p`           | `node_modules/d3/dist/d3.min.js:2:77577`  |
| 63.9% | 37.2 MiB |   2,363 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:77113`  |
| 14.6% | 8.51 MiB |     544 | `select`      | `node_modules/d3/dist/d3.min.js:2:22328`  |
| 14.1% | 8.18 MiB |     523 | `append`      | `node_modules/d3/dist/d3.min.js:2:26726`  |
| 12.5% | 7.27 MiB |     465 | `join`        | `node_modules/d3/dist/d3.min.js:2:24162`  |
|  7.4% | 4.29 MiB |     274 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:26793`  |
|  7.3% | 4.25 MiB |     272 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:16259`  |
|  6.3% | 3.69 MiB |     236 | `Bp`          | `node_modules/d3/dist/d3.min.js:2:147464` |
|  6.3% | 3.69 MiB |     236 | `e`           | `node_modules/d3/dist/d3.min.js:2:147925` |
|  6.3% | 3.69 MiB |     236 | `l`           | `node_modules/d3/dist/d3.min.js:2:269815` |
|  6.3% | 3.69 MiB |     236 | `eachBefore`  | `node_modules/d3/dist/d3.min.js:2:141773` |
|  6.3% | 3.69 MiB |     236 | `s`           | `node_modules/d3/dist/d3.min.js:2:269724` |
|  6.0% | 3.52 MiB |     225 | `h`           | `node_modules/d3/dist/d3.min.js:2:12208`  |
|  6.0% | 3.52 MiB |     225 | `call`        | `node_modules/d3/dist/d3.min.js:2:25192`  |
|  2.2% |  1.3 MiB |      83 | `Gd`          | `node_modules/d3/dist/d3.min.js:2:140014` |
|  1.8% | 1.06 MiB |      68 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:78141`  |

##### Standard library

|     % |     Size | Samples | Function  | Location    |
| ----: | -------: | ------: | --------- | ----------- |
| 66.1% | 38.5 MiB |   2,445 | `map`     | `<unknown>` |
|  2.1% | 1.23 MiB |      78 | `push`    | `<unknown>` |
|  0.8% |  483 KiB |      30 | `from`    | `<unknown>` |
|  0.5% |  327 KiB |      18 | `forEach` | `<unknown>` |
|  0.3% |  160 KiB |      10 | `next`    | `<unknown>` |

##### Ours

|     % |     Size | Samples | Function                       | Location              |
| ----: | -------: | ------: | ------------------------------ | --------------------- |
| 98.2% | 57.1 MiB |   3,628 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`   |
| 83.1% | 48.4 MiB |   3,073 | `chartLayouts`                 | `workload.mjs:116:24` |
|  6.1% | 3.57 MiB |     228 | `(anonymous)`                  | `workload.mjs:185:13` |
|  4.0% | 2.33 MiB |     146 | `chartBreakdowns`              | `workload.mjs:39:27`  |
|  1.2% |  737 KiB |      46 | `(anonymous)`                  | `workload.mjs:136:28` |
|  0.1% | 64.1 KiB |       4 | `(anonymous)`                  | `workload.mjs:121:16` |
|  0.1% |   48 KiB |       1 | `(anonymous)`                  | `workload.mjs:193:9`  |
|  0.1% | 32.2 KiB |       2 | `(anonymous)`                  | `workload.mjs:11:29`  |
| <0.1% |   16 KiB |       1 | `(anonymous)`                  | `workload.mjs:77:21`  |
| <0.1% |   16 KiB |       1 | `(anonymous)`                  | `workload.mjs:134:23` |

##### Native

|    % |    Size | Samples | Function   | Location    |
| ---: | ------: | ------: | ---------- | ----------- |
| 1.3% | 788 KiB |       1 | `(v8 api)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `(anonymous)` (`<unknown>`)

|     % |     Size | Samples | Callee                         | Location            |
| ----: | -------: | ------: | ------------------------------ | ------------------- |
| 99.8% | 57.1 MiB |   3,628 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### `globalThis.buildAndRetainDom` (`workload.mjs:1:32`)

|     % |     Size | Samples | Callee            | Location                                 |
| ----: | -------: | ------: | ----------------- | ---------------------------------------- |
| 84.7% | 48.4 MiB |   3,073 | `chartLayouts`    | `workload.mjs:116:24`                    |
|  6.4% | 3.68 MiB |     235 | `join`            | `node_modules/d3/dist/d3.min.js:2:24162` |
|  4.5% | 2.55 MiB |     163 | `call`            | `node_modules/d3/dist/d3.min.js:2:25192` |
|  4.1% | 2.33 MiB |     146 | `chartBreakdowns` | `workload.mjs:39:27`                     |
|  0.1% | 64.6 KiB |       4 | `append`          | `node_modules/d3/dist/d3.min.js:2:26726` |

##### `chartLayouts` (`workload.mjs:116:24`)

|     % |     Size | Samples | Callee              | Location                                  |
| ----: | -------: | ------: | ------------------- | ----------------------------------------- |
| 78.0% | 37.7 MiB |   2,395 | `d`                 | `node_modules/d3/dist/d3.min.js:2:223501` |
|  7.6% | 3.69 MiB |     236 | `s`                 | `node_modules/d3/dist/d3.min.js:2:269724` |
|  6.6% | 3.18 MiB |     203 | `join`              | `node_modules/d3/dist/d3.min.js:2:24162`  |
|  2.7% |  1.3 MiB |      83 | `Gd`                | `node_modules/d3/dist/d3.min.js:2:140014` |
|  2.2% | 1.06 MiB |      68 | `t.forceSimulation` | `node_modules/d3/dist/d3.min.js:2:235388` |

##### `map` (`<unknown>`)

|     % |     Size | Samples | Callee        | Location                                 |
| ----: | -------: | ------: | ------------- | ---------------------------------------- |
| 97.8% | 37.7 MiB |   2,392 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:76982` |
|  1.9% |  737 KiB |      46 | `(anonymous)` | `workload.mjs:136:28`                    |
|  0.2% | 64.1 KiB |       4 | `(anonymous)` | `workload.mjs:121:16`                    |
|  0.1% | 32.2 KiB |       2 | `(anonymous)` | `workload.mjs:11:29`                     |

##### `d` (`node_modules/d3/dist/d3.min.js:2:223501`)

|     % |     Size | Samples | Callee | Location                                  |
| ----: | -------: | ------: | ------ | ----------------------------------------- |
| 99.9% | 37.7 MiB |   2,392 | `i`    | `node_modules/d3/dist/d3.min.js:2:76807`  |
|  0.1% | 53.2 KiB |       3 | `h`    | `node_modules/d3/dist/d3.min.js:2:223150` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:76982`)

|     % |     Size | Samples | Callee | Location                                 |
| ----: | -------: | ------: | ------ | ---------------------------------------- |
| 99.9% | 37.6 MiB |   2,390 | `o`    | `node_modules/d3/dist/d3.min.js:2:77004` |

##### `i` (`node_modules/d3/dist/d3.min.js:2:76807`)

|      % |     Size | Samples | Callee | Location    |
| -----: | -------: | ------: | ------ | ----------- |
| 100.0% | 37.7 MiB |   2,392 | `map`  | `<unknown>` |

##### `o` (`node_modules/d3/dist/d3.min.js:2:77004`)

|     % |     Size | Samples | Callee        | Location                                 |
| ----: | -------: | ------: | ------------- | ---------------------------------------- |
| 98.9% | 37.2 MiB |   2,363 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:77113` |

##### `p` (`node_modules/d3/dist/d3.min.js:2:77577`)

|    % |     Size | Samples | Callee        | Location                                 |
| ---: | -------: | ------: | ------------- | ---------------------------------------- |
| 2.9% | 1.06 MiB |      68 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:78141` |
| 0.3% |  116 KiB |       7 | `push`        | `<unknown>`                              |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:77113`)

|     % |     Size | Samples | Callee    | Location                                 |
| ----: | -------: | ------: | --------- | ---------------------------------------- |
| 99.7% | 37.1 MiB |   2,357 | `p`       | `node_modules/d3/dist/d3.min.js:2:77577` |
|  0.3% |   96 KiB |       6 | `forEach` | `<unknown>`                              |

##### `select` (`node_modules/d3/dist/d3.min.js:2:22328`)

|     % |     Size | Samples | Callee        | Location                                 |
| ----: | -------: | ------: | ------------- | ---------------------------------------- |
| 46.7% | 3.97 MiB |     254 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:26793` |
|  0.2% |   16 KiB |       1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:26975` |

##### `append` (`node_modules/d3/dist/d3.min.js:2:26726`)

|     % |     Size | Samples | Callee        | Location                                 |
| ----: | -------: | ------: | ------------- | ---------------------------------------- |
| 91.6% | 7.49 MiB |     479 | `select`      | `node_modules/d3/dist/d3.min.js:2:22328` |
|  3.8% |  320 KiB |      20 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:26793` |

##### `join` (`node_modules/d3/dist/d3.min.js:2:24162`)

|     % |     Size | Samples | Callee        | Location                                 |
| ----: | -------: | ------: | ------------- | ---------------------------------------- |
| 50.8% | 3.69 MiB |     236 | `append`      | `node_modules/d3/dist/d3.min.js:2:26726` |
| 49.0% | 3.57 MiB |     228 | `(anonymous)` | `workload.mjs:185:13`                    |
|  0.2% | 16.2 KiB |       1 | `merge`       | `node_modules/d3/dist/d3.min.js:2:24384` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:26793`)

|     % |     Size | Samples | Callee        | Location                                 |
| ----: | -------: | ------: | ------------- | ---------------------------------------- |
| 98.9% | 4.24 MiB |     271 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:16259` |
|  0.4% | 16.5 KiB |       1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:16431` |

##### `Bp` (`node_modules/d3/dist/d3.min.js:2:147464`)

|    % |   Size | Samples | Callee | Location                                  |
| ---: | -----: | ------: | ------ | ----------------------------------------- |
| 1.3% | 48 KiB |       3 | `Ip`   | `node_modules/d3/dist/d3.min.js:2:147257` |
| 0.8% | 32 KiB |       2 | `Ap`   | `node_modules/d3/dist/d3.min.js:2:146413` |

##### `e` (`node_modules/d3/dist/d3.min.js:2:147925`)

|      % |     Size | Samples | Callee | Location                                  |
| -----: | -------: | ------: | ------ | ----------------------------------------- |
| 100.0% | 3.69 MiB |     236 | `Bp`   | `node_modules/d3/dist/d3.min.js:2:147464` |

##### `l` (`node_modules/d3/dist/d3.min.js:2:269815`)

|      % |     Size | Samples | Callee | Location                                  |
| -----: | -------: | ------: | ------ | ----------------------------------------- |
| 100.0% | 3.69 MiB |     236 | `e`    | `node_modules/d3/dist/d3.min.js:2:147925` |

##### `eachBefore` (`node_modules/d3/dist/d3.min.js:2:141773`)

|      % |     Size | Samples | Callee | Location                                  |
| -----: | -------: | ------: | ------ | ----------------------------------------- |
| 100.0% | 3.69 MiB |     236 | `l`    | `node_modules/d3/dist/d3.min.js:2:269815` |

##### `s` (`node_modules/d3/dist/d3.min.js:2:269724`)

|      % |     Size | Samples | Callee       | Location                                  |
| -----: | -------: | ------: | ------------ | ----------------------------------------- |
| 100.0% | 3.69 MiB |     236 | `eachBefore` | `node_modules/d3/dist/d3.min.js:2:141773` |

##### `(anonymous)` (`workload.mjs:185:13`)

|      % |     Size | Samples | Callee   | Location                                 |
| -----: | -------: | ------: | -------- | ---------------------------------------- |
| 100.0% | 3.57 MiB |     228 | `append` | `node_modules/d3/dist/d3.min.js:2:26726` |

##### `h` (`node_modules/d3/dist/d3.min.js:2:12208`)

|     % |     Size | Samples | Callee      | Location                                  |
| ----: | -------: | ------: | ----------- | ----------------------------------------- |
| 28.9% | 1.02 MiB |      65 | `select`    | `node_modules/d3/dist/d3.min.js:2:22328`  |
| 23.1% |  833 KiB |      52 | `append`    | `node_modules/d3/dist/d3.min.js:2:26726`  |
| 20.9% |  753 KiB |      47 | `I_.s.copy` | `node_modules/d3/dist/d3.min.js:2:173715` |
|  9.8% |  353 KiB |      22 | `n.copy`    | `node_modules/d3/dist/d3.min.js:2:257518` |
|  7.1% |  256 KiB |      16 | `n.copy`    | `node_modules/d3/dist/d3.min.js:2:257398` |

##### `call` (`node_modules/d3/dist/d3.min.js:2:25192`)

|      % |     Size | Samples | Callee | Location                                 |
| -----: | -------: | ------: | ------ | ---------------------------------------- |
| 100.0% | 3.52 MiB |     225 | `h`    | `node_modules/d3/dist/d3.min.js:2:12208` |

##### `chartBreakdowns` (`workload.mjs:39:27`)

|     % |    Size | Samples | Callee | Location                                 |
| ----: | ------: | ------: | ------ | ---------------------------------------- |
| 41.6% | 994 KiB |      62 | `call` | `node_modules/d3/dist/d3.min.js:2:25192` |
| 20.8% | 497 KiB |      31 | `r`    | `node_modules/d3/dist/d3.min.js:2:7022`  |
| 18.1% | 432 KiB |      27 | `join` | `node_modules/d3/dist/d3.min.js:2:24162` |
|  6.7% | 160 KiB |      10 | `D`    | `node_modules/d3/dist/d3.min.js:2:4759`  |
|  4.7% | 113 KiB |       4 | `attr` | `node_modules/d3/dist/d3.min.js:2:25709` |

##### `Gd` (`node_modules/d3/dist/d3.min.js:2:140014`)

|     % |    Size | Samples | Callee | Location    |
| ----: | ------: | ------: | ------ | ----------- |
| 14.6% | 194 KiB |      12 | `from` | `<unknown>` |

##### `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:78141`)

|     % |    Size | Samples | Callee | Location    |
| ----: | ------: | ------: | ------ | ----------- |
| 63.3% | 689 KiB |      43 | `push` | `<unknown>` |

##### `from` (`<unknown>`)

|     % |    Size | Samples | Callee | Location    |
| ----: | ------: | ------: | ------ | ----------- |
| 33.2% | 160 KiB |      10 | `next` | `<unknown>` |

##### `forEach` (`<unknown>`)

|     % |    Size | Samples | Callee        | Location                                  |
| ----: | ------: | ------: | ------------- | ----------------------------------------- |
| 70.6% | 231 KiB |      12 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:235702` |
| 29.4% |  96 KiB |       6 | `p`           | `node_modules/d3/dist/d3.min.js:2:77577`  |

##### `(anonymous)` (`workload.mjs:11:29`)

|     % |     Size | Samples | Callee        | Location                                  |
| ----: | -------: | ------: | ------------- | ----------------------------------------- |
| 50.3% | 16.2 KiB |       1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:166138` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

Common call stack: `globalThis.buildAndRetainDom` (`workload.mjs:1:32`) ← `(anonymous)`

|     % |     Size | Samples | Call stack                                                                                                                                                                                                                                                               |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 61.7% | 35.9 MiB |   2,282 | `p` (`node_modules/d3/dist/d3.min.js:2:77577`) ← `(anonymous)` (2:77113) ← `o` (2:77004) ← `(anonymous)` (2:76982) ← `map` ← `i` (`node_modules/d3/dist/d3.min.js:2:76807`) ← `d` (2:223501) ← `chartLayouts` (`workload.mjs:116:24`)                                    |
|  6.2% | 3.61 MiB |     231 | `Bp` (`node_modules/d3/dist/d3.min.js:2:147464`) ← `e` (2:147925) ← `l` (2:269815) ← `eachBefore` (2:141773) ← `s` (2:269724) ← `chartLayouts` (`workload.mjs:116:24`)                                                                                                   |
|  3.2% | 1.88 MiB |     120 | `select` (`node_modules/d3/dist/d3.min.js:2:22328`) ← `append` (2:26726) ← `(anonymous)` (`workload.mjs:185:13`) ← `join` (`node_modules/d3/dist/d3.min.js:2:24162`)                                                                                                     |
|  2.6% |  1.5 MiB |      96 | `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `select` (2:22328) ← `append` (2:26726) ← `(anonymous)` (`workload.mjs:185:13`) ← `join` (`node_modules/d3/dist/d3.min.js:2:24162`)                                                 |
|  2.3% | 1.36 MiB |      87 | `select` (`node_modules/d3/dist/d3.min.js:2:22328`) ← `append` (2:26726) ← `join` (2:24162) ← `chartLayouts` (`workload.mjs:116:24`)                                                                                                                                     |
|  2.3% | 1.31 MiB |      84 | `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `select` (2:22328) ← `append` (2:26726) ← `join` (2:24162) ← `chartLayouts` (`workload.mjs:116:24`)                                                                                 |
|  1.9% | 1.11 MiB |      71 | `Gd` (`node_modules/d3/dist/d3.min.js:2:140014`) ← `chartLayouts` (`workload.mjs:116:24`)                                                                                                                                                                                |
|  1.8% | 1.05 MiB |      67 | `d` (`node_modules/d3/dist/d3.min.js:2:235836`) ← `t.forceSimulation` (2:235388) ← `chartLayouts` (`workload.mjs:116:24`)                                                                                                                                                |
|  1.2% |  737 KiB |      46 | `(anonymous)` (`workload.mjs:136:28`) ← `map` ← `chartLayouts` (`workload.mjs:116:24`)                                                                                                                                                                                   |
|  1.2% |  689 KiB |      43 | `push` ← `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:78141`) ← `p` (2:77577) ← `(anonymous)` (2:77113) ← `o` (2:77004) ← `(anonymous)` (2:76982) ← `map` ← `i` (`node_modules/d3/dist/d3.min.js:2:76807`) ← `d` (2:223501) ← `chartLayouts` (`workload.mjs:116:24`) |
|  0.9% |  561 KiB |      35 | `select` (`node_modules/d3/dist/d3.min.js:2:22328`) ← `h` (2:12208) ← `call` (2:25192)                                                                                                                                                                                   |
|  0.7% |  433 KiB |      27 | `o` (`node_modules/d3/dist/d3.min.js:2:77004`) ← `(anonymous)` (2:76982) ← `map` ← `i` (`node_modules/d3/dist/d3.min.js:2:76807`) ← `d` (2:223501) ← `chartLayouts` (`workload.mjs:116:24`)                                                                              |
|  0.7% |  432 KiB |      27 | `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `select` (2:22328) ← `h` (2:12208) ← `call` (2:25192)                                                                                                                               |
|  0.7% |  416 KiB |      26 | `select` (`node_modules/d3/dist/d3.min.js:2:22328`) ← `append` (2:26726) ← `h` (2:12208) ← `call` (2:25192)                                                                                                                                                              |
|  0.7% |  400 KiB |      25 | `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `select` (2:22328) ← `append` (2:26726) ← `h` (2:12208) ← `call` (2:25192)                                                                                                          |
|  0.7% |  400 KiB |      25 | `(anonymous)` (`node_modules/d3/dist/d3.min.js:2:78141`) ← `p` (2:77577) ← `(anonymous)` (2:77113) ← `o` (2:77004) ← `(anonymous)` (2:76982) ← `map` ← `i` (`node_modules/d3/dist/d3.min.js:2:76807`) ← `d` (2:223501) ← `chartLayouts` (`workload.mjs:116:24`)          |
|  0.6% |  352 KiB |      22 | `format` (`node_modules/d3/dist/d3.min.js:2:167331`) ← `I_` (2:173087) ← `I_.s.copy` (2:173715) ← `h` (2:12208) ← `call` (2:25192) ← `chartBreakdowns` (`workload.mjs:39:27`)                                                                                            |
|  0.5% |  321 KiB |      20 | `push` ← `r` (`node_modules/d3/dist/d3.min.js:2:7022`) ← `chartBreakdowns` (`workload.mjs:39:27`)                                                                                                                                                                        |
|  0.5% |  272 KiB |      17 | `append` (`node_modules/d3/dist/d3.min.js:2:26726`) ← `join` (2:24162) ← `chartLayouts` (`workload.mjs:116:24`)                                                                                                                                                          |
|  0.5% |  272 KiB |      17 | `select` (`node_modules/d3/dist/d3.min.js:2:22328`) ← `append` (2:26726) ← `join` (2:24162) ← `chartBreakdowns` (`workload.mjs:39:27`)                                                                                                                                   |

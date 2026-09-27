# Heap profile diff

Allocated 58.2 MiB → 60.1 MiB (+1.925 MiB, +3.3%) over 3,648 samples → 3,770 samples (16.3 KiB per sample).

| Category         | Change |       Delta |             % |                Size |       Samples |
| ---------------- | -----: | ----------: | ------------: | ------------------: | ------------: |
| Third-party      |  +4.0% |  +2.151 MiB | 93.6% → 94.1% | 54.4 MiB → 56.6 MiB | 3,459 → 3,596 |
| Standard library |  -2.2% | -38.839 KiB |   2.9% → 2.8% | 1.71 MiB → 1.68 MiB |     109 → 106 |
| Ours             |  -4.8% | -48.167 KiB |   1.7% → 1.5% |   993 KiB → 945 KiB |       60 → 57 |
| Native           |  +2.1% |   +16.5 KiB |          1.3% |   788 KiB → 804 KiB |         1 → 2 |
| Compiler         | -40.0% | -64.144 KiB |   0.3% → 0.2% |  160 KiB → 96.3 KiB |        10 → 6 |
| Unknown          | -66.8% | -96.941 KiB |   0.2% → 0.1% |  145 KiB → 48.2 KiB |         9 → 3 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |             % |                Size |       Samples | Function                       | Location                                             |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------ | ---------------------------------------------------- |
|   +6.4% |    +2.31 MiB | 61.9% → 63.8% |   36 MiB → 38.3 MiB | 2,288 → 2,435 | `p`                            | `node_modules/d3/dist/d3.min.js:2:77577 → 2:77576`   |
| +239.2% |  +193.32 KiB |   0.1% → 0.4% |  80.8 KiB → 274 KiB |        5 → 17 | `t`                            | `node_modules/d3/dist/d3.min.js:2:4909`              |
|  +40.7% |  +176.25 KiB |   0.7% → 1.0% |   433 KiB → 609 KiB |       27 → 38 | `o`                            | `node_modules/d3/dist/d3.min.js:2:77004`             |
|  +16.4% | +176.234 KiB |   1.8% → 2.0% | 1.05 MiB → 1.22 MiB |       67 → 78 | `d`                            | `node_modules/d3/dist/d3.min.js:2:235836 → 2:235885` |
|  +46.6% |  +112.14 KiB |   0.4% → 0.6% |   240 KiB → 353 KiB |       15 → 22 | `I_`                           | `node_modules/d3/dist/d3.min.js:2:173087 → 2:173066` |
|   +7.0% |  +80.179 KiB |   1.9% → 2.0% | 1.11 MiB → 1.19 MiB |       71 → 76 | `Gd`                           | `node_modules/d3/dist/d3.min.js:2:140014 → 2:139995` |
|   +1.5% |  +64.125 KiB |   7.3% → 7.2% | 4.25 MiB → 4.32 MiB |     272 → 276 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:16259`             |
|  +46.0% |  +55.667 KiB |   0.2% → 0.3% |   121 KiB → 177 KiB |         6 → 9 | `g`                            | `node_modules/d3/dist/d3.min.js:2:231166 → 2:231215` |
| +150.2% |  +48.093 KiB |          0.1% |   32 KiB → 80.1 KiB |         2 → 5 | `Ap`                           | `node_modules/d3/dist/d3.min.js:2:146413 → 2:146394` |
| +300.0% |  +48.062 KiB |  <0.1% → 0.1% |   16 KiB → 64.1 KiB |         1 → 4 | `map`                          | `<unknown>`                                          |
|  +75.0% |  +48.046 KiB |   0.1% → 0.2% |  64.1 KiB → 112 KiB |         4 → 7 | `wg`                           | `node_modules/d3/dist/d3.min.js:2:154280 → 2:154259` |
| +234.2% |  +41.972 KiB |  <0.1% → 0.1% | 17.9 KiB → 59.9 KiB |         1 → 3 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:18176`             |
|     new |  +36.156 KiB |   0.0% → 0.1% |      0 B → 36.2 KiB |         0 → 2 | `forEach`                      | `<unknown>`                                          |
|     new |      +35 KiB |   0.0% → 0.1% |        0 B → 35 KiB |         0 → 2 | `exec`                         | `<unknown>`                                          |
|  +66.6% |  +32.144 KiB |          0.1% | 48.3 KiB → 80.4 KiB |         3 → 5 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`                                  |
|  +50.0% |  +32.054 KiB |   0.1% → 0.2% | 64.1 KiB → 96.2 KiB |         4 → 6 | `t`                            | `node_modules/d3/dist/d3.min.js:2:257362 → 2:257411` |
|   +8.3% |  +32.031 KiB |   0.6% → 0.7% |   384 KiB → 416 KiB |       24 → 26 | `append`                       | `node_modules/d3/dist/d3.min.js:2:26726`             |
|     new |    +16.5 KiB |  0.0% → <0.1% |      0 B → 16.5 KiB |         0 → 1 | `max`                          | `<unknown>`                                          |
|     new |  +16.171 KiB |  0.0% → <0.1% |      0 B → 16.2 KiB |         0 → 1 | `i.domain`                     | `node_modules/d3/dist/d3.min.js:2:152528`            |
|     new |  +16.105 KiB |  0.0% → <0.1% |      0 B → 16.1 KiB |         0 → 1 | `u`                            | `node_modules/d3/dist/d3.min.js:2:231519`            |

##### Third-party

|  Change |        Delta |             % |                Size |       Samples | Function        | Location                                             |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------- | ---------------------------------------------------- |
|   +6.4% |    +2.31 MiB | 61.9% → 63.8% |   36 MiB → 38.3 MiB | 2,288 → 2,435 | `p`             | `node_modules/d3/dist/d3.min.js:2:77577 → 2:77576`   |
| +239.2% |  +193.32 KiB |   0.1% → 0.4% |  80.8 KiB → 274 KiB |        5 → 17 | `t`             | `node_modules/d3/dist/d3.min.js:2:4909`              |
|  +40.7% |  +176.25 KiB |   0.7% → 1.0% |   433 KiB → 609 KiB |       27 → 38 | `o`             | `node_modules/d3/dist/d3.min.js:2:77004`             |
|  +16.4% | +176.234 KiB |   1.8% → 2.0% | 1.05 MiB → 1.22 MiB |       67 → 78 | `d`             | `node_modules/d3/dist/d3.min.js:2:235836 → 2:235885` |
|  +46.6% |  +112.14 KiB |   0.4% → 0.6% |   240 KiB → 353 KiB |       15 → 22 | `I_`            | `node_modules/d3/dist/d3.min.js:2:173087 → 2:173066` |
|   +7.0% |  +80.179 KiB |   1.9% → 2.0% | 1.11 MiB → 1.19 MiB |       71 → 76 | `Gd`            | `node_modules/d3/dist/d3.min.js:2:140014 → 2:139995` |
|   +1.5% |  +64.125 KiB |   7.3% → 7.2% | 4.25 MiB → 4.32 MiB |     272 → 276 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:16259`             |
|  +46.0% |  +55.667 KiB |   0.2% → 0.3% |   121 KiB → 177 KiB |         6 → 9 | `g`             | `node_modules/d3/dist/d3.min.js:2:231166 → 2:231215` |
| +150.2% |  +48.093 KiB |          0.1% |   32 KiB → 80.1 KiB |         2 → 5 | `Ap`            | `node_modules/d3/dist/d3.min.js:2:146413 → 2:146394` |
|  +75.0% |  +48.046 KiB |   0.1% → 0.2% |  64.1 KiB → 112 KiB |         4 → 7 | `wg`            | `node_modules/d3/dist/d3.min.js:2:154280 → 2:154259` |
| +234.2% |  +41.972 KiB |  <0.1% → 0.1% | 17.9 KiB → 59.9 KiB |         1 → 3 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:18176`             |
|  +50.0% |  +32.054 KiB |   0.1% → 0.2% | 64.1 KiB → 96.2 KiB |         4 → 6 | `t`             | `node_modules/d3/dist/d3.min.js:2:257362 → 2:257411` |
|   +8.3% |  +32.031 KiB |   0.6% → 0.7% |   384 KiB → 416 KiB |       24 → 26 | `append`        | `node_modules/d3/dist/d3.min.js:2:26726`             |
|     new |  +16.171 KiB |  0.0% → <0.1% |      0 B → 16.2 KiB |         0 → 1 | `i.domain`      | `node_modules/d3/dist/d3.min.js:2:152528`            |
|     new |  +16.105 KiB |  0.0% → <0.1% |      0 B → 16.1 KiB |         0 → 1 | `u`             | `node_modules/d3/dist/d3.min.js:2:231519`            |
|     new |  +16.082 KiB |  0.0% → <0.1% |      0 B → 16.1 KiB |         0 → 1 | `node`          | `node_modules/d3/dist/d3.min.js:2:25324`             |
|  +14.3% |  +16.054 KiB |          0.2% |   112 KiB → 128 KiB |         7 → 8 | `a`             | `node_modules/d3/dist/d3.min.js:2:252634 → 2:252683` |
|     new |  +16.054 KiB |  0.0% → <0.1% |      0 B → 16.1 KiB |         0 → 1 | `f.innerRadius` | `node_modules/d3/dist/d3.min.js:2:220276`            |
|     new |  +16.046 KiB |  0.0% → <0.1% |        0 B → 16 KiB |         0 → 1 | `i`             | `node_modules/d3/dist/d3.min.js:2:152407`            |
|     new |  +16.031 KiB |  0.0% → <0.1% |        0 B → 16 KiB |         0 → 1 | `(anonymous)`   | `node_modules/d3/dist/d3.min.js:2:142656`            |

##### Standard library

|  Change |       Delta |            % |              Size | Samples | Function  | Location    |
| ------: | ----------: | -----------: | ----------------: | ------: | --------- | ----------- |
| +300.0% | +48.062 KiB | <0.1% → 0.1% | 16 KiB → 64.1 KiB |   1 → 4 | `map`     | `<unknown>` |
|     new | +36.156 KiB |  0.0% → 0.1% |    0 B → 36.2 KiB |   0 → 2 | `forEach` | `<unknown>` |
|     new |     +35 KiB |  0.0% → 0.1% |      0 B → 35 KiB |   0 → 2 | `exec`    | `<unknown>` |

##### Ours

| Change |       Delta |    % |                Size | Samples | Function                       | Location              |
| -----: | ----------: | ---: | ------------------: | ------: | ------------------------------ | --------------------- |
| +66.6% | +32.144 KiB | 0.1% | 48.3 KiB → 80.4 KiB |   3 → 5 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`   |
|    ~0% |       +48 B | 1.2% |             737 KiB |      46 | `(anonymous)`                  | `workload.mjs:136:28` |

##### Native

| Change |     Delta |            % |           Size | Samples | Function | Location    |
| -----: | --------: | -----------: | -------------: | ------: | -------- | ----------- |
|    new | +16.5 KiB | 0.0% → <0.1% | 0 B → 16.5 KiB |   0 → 1 | `max`    | `<unknown>` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |            % |                Size |   Samples | Function          | Location                                             |
| ------: | -----------: | -----------: | ------------------: | --------: | ----------------- | ---------------------------------------------------- |
|  -12.1% | -448.605 KiB |  6.2% → 5.3% | 3.61 MiB → 3.18 MiB | 231 → 203 | `Bp`              | `node_modules/d3/dist/d3.min.js:2:147464 → 2:147443` |
|  -40.9% | -144.218 KiB |  0.6% → 0.3% |   352 KiB → 208 KiB |   22 → 13 | `format`          | `node_modules/d3/dist/d3.min.js:2:167331 → 2:167310` |
|  -36.0% | -144.093 KiB |  0.7% → 0.4% |   400 KiB → 256 KiB |   25 → 16 | `(anonymous)`     | `node_modules/d3/dist/d3.min.js:2:78141 → 2:78140`   |
|  -66.8% |  -96.941 KiB |  0.2% → 0.1% |  145 KiB → 48.2 KiB |     9 → 3 | `(anonymous)`     | `<unknown>`                                          |
| removed |  -93.523 KiB |  0.2% → 0.0% |      93.5 KiB → 0 B |     5 → 0 | `h`               | `node_modules/d3/dist/d3.min.js:2:233884`            |
|  -20.0% |  -80.125 KiB |  0.7% → 0.5% |   401 KiB → 321 KiB |   25 → 20 | `Ag`              | `node_modules/d3/dist/d3.min.js:2:154800 → 2:154779` |
|  -24.7% |  -79.531 KiB |  0.5% → 0.4% |   322 KiB → 243 KiB |   20 → 15 | `from`            | `<unknown>`                                          |
|  -40.0% |  -64.187 KiB |  0.3% → 0.2% |  160 KiB → 96.3 KiB |    10 → 6 | `next`            | `<unknown>`                                          |
|  -40.0% |  -64.144 KiB |  0.3% → 0.2% |  160 KiB → 96.3 KiB |    10 → 6 | `(compiler)`      | `<unknown>`                                          |
|   -1.4% |  -63.359 KiB |  7.8% → 7.4% | 4.52 MiB → 4.46 MiB | 289 → 285 | `select`          | `node_modules/d3/dist/d3.min.js:2:22328`             |
|  -60.1% |   -48.14 KiB |         0.1% |   80.2 KiB → 32 KiB |     5 → 2 | `Gr`              | `node_modules/d3/dist/d3.min.js:2:43251`             |
| removed |  -33.515 KiB |  0.1% → 0.0% |      33.5 KiB → 0 B |     2 → 0 | `(anonymous)`     | `node_modules/d3/dist/d3.min.js:2:26793`             |
|  -67.0% |  -33.363 KiB | 0.1% → <0.1% | 49.8 KiB → 16.5 KiB |     3 → 1 | `update`          | `node_modules/d3/dist/d3.min.js:2:82533 → 2:82523`   |
|  -66.7% |  -32.062 KiB | 0.1% → <0.1% |   48.1 KiB → 16 KiB |     3 → 1 | `(anonymous)`     | `node_modules/d3/dist/d3.min.js:2:154219 → 2:154198` |
|  -66.6% |      -32 KiB | 0.1% → <0.1% |     48 KiB → 16 KiB |     3 → 1 | `t`               | `node_modules/d3/dist/d3.min.js:2:257469 → 2:257518` |
|  -17.8% |  -31.375 KiB |  0.3% → 0.2% |   176 KiB → 145 KiB |    11 → 9 | `r`               | `node_modules/d3/dist/d3.min.js:2:7022`              |
|  -56.7% |      -21 KiB | 0.1% → <0.1% |     37 KiB → 16 KiB |     2 → 1 | `(anonymous)`     | `node_modules/d3/dist/d3.min.js:2:2114`              |
| removed |  -16.875 KiB | <0.1% → 0.0% |      16.9 KiB → 0 B |     1 → 0 | `moveTo`          | `node_modules/d3/dist/d3.min.js:2:72387`             |
| removed |  -16.242 KiB | <0.1% → 0.0% |      16.2 KiB → 0 B |     1 → 0 | `chartBreakdowns` | `workload.mjs:39:27`                                 |
| removed |  -16.226 KiB | <0.1% → 0.0% |      16.2 KiB → 0 B |     1 → 0 | `merge`           | `node_modules/d3/dist/d3.min.js:2:24384`             |

##### Third-party

|  Change |        Delta |            % |                Size |   Samples | Function      | Location                                             |
| ------: | -----------: | -----------: | ------------------: | --------: | ------------- | ---------------------------------------------------- |
|  -12.1% | -448.605 KiB |  6.2% → 5.3% | 3.61 MiB → 3.18 MiB | 231 → 203 | `Bp`          | `node_modules/d3/dist/d3.min.js:2:147464 → 2:147443` |
|  -40.9% | -144.218 KiB |  0.6% → 0.3% |   352 KiB → 208 KiB |   22 → 13 | `format`      | `node_modules/d3/dist/d3.min.js:2:167331 → 2:167310` |
|  -36.0% | -144.093 KiB |  0.7% → 0.4% |   400 KiB → 256 KiB |   25 → 16 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:78141 → 2:78140`   |
| removed |  -93.523 KiB |  0.2% → 0.0% |      93.5 KiB → 0 B |     5 → 0 | `h`           | `node_modules/d3/dist/d3.min.js:2:233884`            |
|  -20.0% |  -80.125 KiB |  0.7% → 0.5% |   401 KiB → 321 KiB |   25 → 20 | `Ag`          | `node_modules/d3/dist/d3.min.js:2:154800 → 2:154779` |
|   -1.4% |  -63.359 KiB |  7.8% → 7.4% | 4.52 MiB → 4.46 MiB | 289 → 285 | `select`      | `node_modules/d3/dist/d3.min.js:2:22328`             |
|  -60.1% |   -48.14 KiB |         0.1% |   80.2 KiB → 32 KiB |     5 → 2 | `Gr`          | `node_modules/d3/dist/d3.min.js:2:43251`             |
| removed |  -33.515 KiB |  0.1% → 0.0% |      33.5 KiB → 0 B |     2 → 0 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:26793`             |
|  -67.0% |  -33.363 KiB | 0.1% → <0.1% | 49.8 KiB → 16.5 KiB |     3 → 1 | `update`      | `node_modules/d3/dist/d3.min.js:2:82533 → 2:82523`   |
|  -66.7% |  -32.062 KiB | 0.1% → <0.1% |   48.1 KiB → 16 KiB |     3 → 1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:154219 → 2:154198` |
|  -66.6% |      -32 KiB | 0.1% → <0.1% |     48 KiB → 16 KiB |     3 → 1 | `t`           | `node_modules/d3/dist/d3.min.js:2:257469 → 2:257518` |
|  -17.8% |  -31.375 KiB |  0.3% → 0.2% |   176 KiB → 145 KiB |    11 → 9 | `r`           | `node_modules/d3/dist/d3.min.js:2:7022`              |
|  -56.7% |      -21 KiB | 0.1% → <0.1% |     37 KiB → 16 KiB |     2 → 1 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:2114`              |
| removed |  -16.875 KiB | <0.1% → 0.0% |      16.9 KiB → 0 B |     1 → 0 | `moveTo`      | `node_modules/d3/dist/d3.min.js:2:72387`             |
| removed |  -16.226 KiB | <0.1% → 0.0% |      16.2 KiB → 0 B |     1 → 0 | `merge`       | `node_modules/d3/dist/d3.min.js:2:24384`             |
| removed |  -16.187 KiB | <0.1% → 0.0% |      16.2 KiB → 0 B |     1 → 0 | `h`           | `node_modules/d3/dist/d3.min.js:2:223150 → 2:223199` |
| removed |  -16.179 KiB | <0.1% → 0.0% |      16.2 KiB → 0 B |     1 → 0 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:166138 → 2:166117` |
| removed |  -16.113 KiB | <0.1% → 0.0% |      16.1 KiB → 0 B |     1 → 0 | `X`           | `node_modules/d3/dist/d3.min.js:2:5919`              |
| removed |  -16.054 KiB | <0.1% → 0.0% |      16.1 KiB → 0 B |     1 → 0 | `insert`      | `node_modules/d3/dist/d3.min.js:2:26864`             |
| removed |  -16.046 KiB | <0.1% → 0.0% |        16 KiB → 0 B |     1 → 0 | `d.size`      | `node_modules/d3/dist/d3.min.js:2:224350`            |

##### Standard library

| Change |       Delta |           % |                Size | Samples | Function | Location    |
| -----: | ----------: | ----------: | ------------------: | ------: | -------- | ----------- |
| -24.7% | -79.531 KiB | 0.5% → 0.4% |   322 KiB → 243 KiB | 20 → 15 | `from`   | `<unknown>` |
| -40.0% | -64.187 KiB | 0.3% → 0.2% |  160 KiB → 96.3 KiB |  10 → 6 | `next`   | `<unknown>` |
|  -1.1% | -14.339 KiB | 2.1% → 2.0% | 1.23 MiB → 1.21 MiB | 78 → 77 | `push`   | `<unknown>` |

##### Ours

|  Change |       Delta |            % |                Size | Samples | Function          | Location              |
| ------: | ----------: | -----------: | ------------------: | ------: | ----------------- | --------------------- |
| removed | -16.242 KiB | <0.1% → 0.0% |      16.2 KiB → 0 B |   1 → 0 | `chartBreakdowns` | `workload.mjs:39:27`  |
| removed | -16.046 KiB | <0.1% → 0.0% |        16 KiB → 0 B |   1 → 0 | `(anonymous)`     | `workload.mjs:77:21`  |
| removed | -16.015 KiB | <0.1% → 0.0% |        16 KiB → 0 B |   1 → 0 | `(anonymous)`     | `workload.mjs:11:29`  |
|  -25.0% | -16.015 KiB |         0.1% | 64.1 KiB → 48.1 KiB |   4 → 3 | `(anonymous)`     | `workload.mjs:121:16` |
| removed | -16.007 KiB | <0.1% → 0.0% |        16 KiB → 0 B |   1 → 0 | `(anonymous)`     | `workload.mjs:134:23` |
|   -0.1% |       -32 B |         0.1% |              32 KiB |       2 | `chartLayouts`    | `workload.mjs:116:24` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |       Samples | Function                       | Location                                             |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------ | ---------------------------------------------------- |
|  +6.1% |   +2.364 MiB | 66.1% → 67.9% | 38.5 MiB → 40.9 MiB | 2,445 → 2,595 | `map`                          | `<unknown>`                                          |
|  +6.3% |   +2.363 MiB | 64.7% → 66.5% |   37.6 MiB → 40 MiB | 2,390 → 2,540 | `o`                            | `node_modules/d3/dist/d3.min.js:2:77004`             |
|  +6.2% |   +2.348 MiB | 64.7% → 66.5% |   37.7 MiB → 40 MiB | 2,392 → 2,541 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:76982`             |
|  +6.2% |   +2.348 MiB | 64.7% → 66.5% |   37.7 MiB → 40 MiB | 2,392 → 2,541 | `i`                            | `node_modules/d3/dist/d3.min.js:2:76807`             |
|  +6.1% |   +2.312 MiB | 64.8% → 66.6% |   37.7 MiB → 40 MiB | 2,395 → 2,542 | `d`                            | `node_modules/d3/dist/d3.min.js:2:223501 → 2:223550` |
|  +5.8% |   +2.156 MiB | 63.9% → 65.5% | 37.2 MiB → 39.4 MiB | 2,363 → 2,500 | `p`                            | `node_modules/d3/dist/d3.min.js:2:77577 → 2:77576`   |
|  +5.8% |   +2.156 MiB | 63.9% → 65.5% | 37.2 MiB → 39.4 MiB | 2,363 → 2,500 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:77113`             |
|  +4.4% |   +2.147 MiB | 83.1% → 84.0% | 48.4 MiB → 50.5 MiB | 3,073 → 3,210 | `chartLayouts`                 | `workload.mjs:116:24`                                |
|  +3.6% |   +2.082 MiB | 98.2% → 98.5% | 57.1 MiB → 59.2 MiB | 3,628 → 3,760 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`                                  |
|  +3.5% |   +1.988 MiB | 98.4% → 98.6% | 57.3 MiB → 59.3 MiB | 3,637 → 3,763 | `(anonymous)`                  | `<unknown>`                                          |
|  +9.2% | +336.328 KiB |   6.1% → 6.5% | 3.57 MiB → 3.89 MiB |     228 → 249 | `(anonymous)`                  | `workload.mjs:185:13`                                |
| +16.4% | +176.234 KiB |   1.8% → 2.0% | 1.05 MiB → 1.22 MiB |       67 → 78 | `d`                            | `node_modules/d3/dist/d3.min.js:2:235836 → 2:235885` |
| +71.2% |     +161 KiB |   0.4% → 0.6% |   226 KiB → 387 KiB |       14 → 24 | `P`                            | `node_modules/d3/dist/d3.min.js:2:4565`              |
| +14.7% | +160.218 KiB |   1.8% → 2.0% | 1.06 MiB → 1.22 MiB |       68 → 78 | `t.forceSimulation`            | `node_modules/d3/dist/d3.min.js:2:235388 → 2:235437` |
| +33.3% | +112.859 KiB |   0.6% → 0.7% |   339 KiB → 451 KiB |       21 → 28 | `F`                            | `node_modules/d3/dist/d3.min.js:2:4882`              |
| +25.0% |  +96.812 KiB |   0.6% → 0.8% |   387 KiB → 484 KiB |       24 → 30 | `t`                            | `node_modules/d3/dist/d3.min.js:2:4909`              |
|  +6.1% |  +80.726 KiB |   2.2% → 2.3% |  1.3 MiB → 1.38 MiB |       83 → 88 | `Gd`                           | `node_modules/d3/dist/d3.min.js:2:140014 → 2:139995` |
| +59.3% |  +71.773 KiB |   0.2% → 0.3% |   121 KiB → 193 KiB |        6 → 10 | `a`                            | `node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |
|  +1.5% |  +64.125 KiB |   7.3% → 7.2% | 4.25 MiB → 4.32 MiB |     272 → 276 | `(anonymous)`                  | `node_modules/d3/dist/d3.min.js:2:16259`             |
| +46.0% |  +55.667 KiB |   0.2% → 0.3% |   121 KiB → 177 KiB |         6 → 9 | `g`                            | `node_modules/d3/dist/d3.min.js:2:231166 → 2:231215` |

##### Third-party

|  Change |        Delta |             % |                Size |       Samples | Function            | Location                                             |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------- | ---------------------------------------------------- |
|   +6.3% |   +2.363 MiB | 64.7% → 66.5% |   37.6 MiB → 40 MiB | 2,390 → 2,540 | `o`                 | `node_modules/d3/dist/d3.min.js:2:77004`             |
|   +6.2% |   +2.348 MiB | 64.7% → 66.5% |   37.7 MiB → 40 MiB | 2,392 → 2,541 | `(anonymous)`       | `node_modules/d3/dist/d3.min.js:2:76982`             |
|   +6.2% |   +2.348 MiB | 64.7% → 66.5% |   37.7 MiB → 40 MiB | 2,392 → 2,541 | `i`                 | `node_modules/d3/dist/d3.min.js:2:76807`             |
|   +6.1% |   +2.312 MiB | 64.8% → 66.6% |   37.7 MiB → 40 MiB | 2,395 → 2,542 | `d`                 | `node_modules/d3/dist/d3.min.js:2:223501 → 2:223550` |
|   +5.8% |   +2.156 MiB | 63.9% → 65.5% | 37.2 MiB → 39.4 MiB | 2,363 → 2,500 | `p`                 | `node_modules/d3/dist/d3.min.js:2:77577 → 2:77576`   |
|   +5.8% |   +2.156 MiB | 63.9% → 65.5% | 37.2 MiB → 39.4 MiB | 2,363 → 2,500 | `(anonymous)`       | `node_modules/d3/dist/d3.min.js:2:77113`             |
|  +16.4% | +176.234 KiB |   1.8% → 2.0% | 1.05 MiB → 1.22 MiB |       67 → 78 | `d`                 | `node_modules/d3/dist/d3.min.js:2:235836 → 2:235885` |
|  +71.2% |     +161 KiB |   0.4% → 0.6% |   226 KiB → 387 KiB |       14 → 24 | `P`                 | `node_modules/d3/dist/d3.min.js:2:4565`              |
|  +14.7% | +160.218 KiB |   1.8% → 2.0% | 1.06 MiB → 1.22 MiB |       68 → 78 | `t.forceSimulation` | `node_modules/d3/dist/d3.min.js:2:235388 → 2:235437` |
|  +33.3% | +112.859 KiB |   0.6% → 0.7% |   339 KiB → 451 KiB |       21 → 28 | `F`                 | `node_modules/d3/dist/d3.min.js:2:4882`              |
|  +25.0% |  +96.812 KiB |   0.6% → 0.8% |   387 KiB → 484 KiB |       24 → 30 | `t`                 | `node_modules/d3/dist/d3.min.js:2:4909`              |
|   +6.1% |  +80.726 KiB |   2.2% → 2.3% |  1.3 MiB → 1.38 MiB |       83 → 88 | `Gd`                | `node_modules/d3/dist/d3.min.js:2:140014 → 2:139995` |
|  +59.3% |  +71.773 KiB |   0.2% → 0.3% |   121 KiB → 193 KiB |        6 → 10 | `a`                 | `node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |
|   +1.5% |  +64.125 KiB |   7.3% → 7.2% | 4.25 MiB → 4.32 MiB |     272 → 276 | `(anonymous)`       | `node_modules/d3/dist/d3.min.js:2:16259`             |
|  +46.0% |  +55.667 KiB |   0.2% → 0.3% |   121 KiB → 177 KiB |         6 → 9 | `g`                 | `node_modules/d3/dist/d3.min.js:2:231166 → 2:231215` |
| +150.2% |  +48.093 KiB |          0.1% |   32 KiB → 80.1 KiB |         2 → 5 | `Ap`                | `node_modules/d3/dist/d3.min.js:2:146413 → 2:146394` |
| +199.3% |  +31.992 KiB |  <0.1% → 0.1% |   16.1 KiB → 48 KiB |         1 → 3 | `insert`            | `node_modules/d3/dist/d3.min.js:2:26864`             |
|   +0.4% |  +30.851 KiB | 14.1% → 13.7% | 8.18 MiB → 8.21 MiB |     523 → 525 | `append`            | `node_modules/d3/dist/d3.min.js:2:26726`             |
|   +0.4% |  +30.335 KiB | 12.5% → 12.1% |  7.27 MiB → 7.3 MiB |     465 → 467 | `join`              | `node_modules/d3/dist/d3.min.js:2:24162`             |
|   +0.7% |  +30.148 KiB |   7.4% → 7.2% | 4.29 MiB → 4.32 MiB |     274 → 276 | `(anonymous)`       | `node_modules/d3/dist/d3.min.js:2:26793`             |

##### Standard library

| Change |      Delta |             % |                Size |       Samples | Function | Location    |
| -----: | ---------: | ------------: | ------------------: | ------------: | -------- | ----------- |
|  +6.1% | +2.364 MiB | 66.1% → 67.9% | 38.5 MiB → 40.9 MiB | 2,445 → 2,595 | `map`    | `<unknown>` |
|    new |    +35 KiB |   0.0% → 0.1% |        0 B → 35 KiB |         0 → 2 | `exec`   | `<unknown>` |

##### Ours

| Change |        Delta |             % |                Size |       Samples | Function                       | Location              |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------ | --------------------- |
|  +4.4% |   +2.147 MiB | 83.1% → 84.0% | 48.4 MiB → 50.5 MiB | 3,073 → 3,210 | `chartLayouts`                 | `workload.mjs:116:24` |
|  +3.6% |   +2.082 MiB | 98.2% → 98.5% | 57.1 MiB → 59.2 MiB | 3,628 → 3,760 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`   |
|  +9.2% | +336.328 KiB |   6.1% → 6.5% | 3.57 MiB → 3.89 MiB |     228 → 249 | `(anonymous)`                  | `workload.mjs:185:13` |
|    new |  +16.046 KiB |  0.0% → <0.1% |        0 B → 16 KiB |         0 → 1 | `(anonymous)`                  | `workload.mjs:199:25` |
|    new |  +16.046 KiB |  0.0% → <0.1% |        0 B → 16 KiB |         0 → 1 | `(anonymous)`                  | `workload.mjs:195:13` |
|    ~0% |        +48 B |          1.2% |             737 KiB |            46 | `(anonymous)`                  | `workload.mjs:136:28` |

##### Native

| Change |     Delta |            % |           Size | Samples | Function | Location    |
| -----: | --------: | -----------: | -------------: | ------: | -------- | ----------- |
|    new | +16.5 KiB | 0.0% → <0.1% | 0 B → 16.5 KiB |   0 → 1 | `max`    | `<unknown>` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |           % |                Size |   Samples | Function          | Location                                             |
| ------: | -----------: | ----------: | ------------------: | --------: | ----------------- | ---------------------------------------------------- |
|  -17.5% | -417.234 KiB | 4.0% → 3.2% | 2.33 MiB → 1.93 MiB | 146 → 120 | `chartBreakdowns` | `workload.mjs:39:27`                                 |
|  -10.2% | -384.011 KiB | 6.3% → 5.5% | 3.69 MiB → 3.32 MiB | 236 → 212 | `Bp`              | `node_modules/d3/dist/d3.min.js:2:147464 → 2:147443` |
|  -10.2% | -384.011 KiB | 6.3% → 5.5% | 3.69 MiB → 3.32 MiB | 236 → 212 | `e`               | `node_modules/d3/dist/d3.min.js:2:147925 → 2:147904` |
|  -10.2% | -384.011 KiB | 6.3% → 5.5% | 3.69 MiB → 3.32 MiB | 236 → 212 | `l`               | `node_modules/d3/dist/d3.min.js:2:269815 → 2:269888` |
|  -10.2% | -384.011 KiB | 6.3% → 5.5% | 3.69 MiB → 3.32 MiB | 236 → 212 | `s`               | `node_modules/d3/dist/d3.min.js:2:269724 → 2:269797` |
|   -9.7% |  -367.98 KiB | 6.3% → 5.5% | 3.69 MiB → 3.33 MiB | 236 → 213 | `eachBefore`      | `node_modules/d3/dist/d3.min.js:2:141773 → 2:141754` |
|  -20.6% |  -224.25 KiB | 1.8% → 1.4% |  1.06 MiB → 865 KiB |   68 → 54 | `(anonymous)`     | `node_modules/d3/dist/d3.min.js:2:78141 → 2:78140`   |
|   -4.5% | -161.742 KiB | 6.0% → 5.6% | 3.52 MiB → 3.36 MiB | 225 → 214 | `h`               | `node_modules/d3/dist/d3.min.js:2:12208`             |
|   -4.0% | -145.695 KiB | 6.0% → 5.6% | 3.52 MiB → 3.38 MiB | 225 → 215 | `call`            | `node_modules/d3/dist/d3.min.js:2:25192`             |
|  -40.9% | -144.218 KiB | 0.6% → 0.3% |   352 KiB → 208 KiB |   22 → 13 | `format`          | `node_modules/d3/dist/d3.min.js:2:167331 → 2:167310` |
|  -29.8% | -143.718 KiB | 0.8% → 0.6% |   483 KiB → 339 KiB |   30 → 21 | `from`            | `<unknown>`                                          |
|  -63.6% | -112.218 KiB | 0.3% → 0.1% |  176 KiB → 64.2 KiB |    11 → 4 | `Sg`              | `node_modules/d3/dist/d3.min.js:2:155632 → 2:155611` |
| removed | -109.539 KiB | 0.2% → 0.0% |       110 KiB → 0 B |     6 → 0 | `f`               | `node_modules/d3/dist/d3.min.js:2:233452`            |
| removed |  -93.523 KiB | 0.2% → 0.0% |      93.5 KiB → 0 B |     5 → 0 | `h`               | `node_modules/d3/dist/d3.min.js:2:233884`            |
|  -10.6% |  -80.156 KiB | 1.3% → 1.1% |   753 KiB → 673 KiB |   47 → 42 | `I_.s.copy`       | `node_modules/d3/dist/d3.min.js:2:173715 → 2:173694` |
|  -20.0% |  -80.125 KiB | 0.7% → 0.5% |   401 KiB → 321 KiB |   25 → 20 | `Ag`              | `node_modules/d3/dist/d3.min.js:2:154800 → 2:154779` |
|  -62.5% |  -80.078 KiB | 0.2% → 0.1% |    128 KiB → 48 KiB |     8 → 3 | `Tg`              | `node_modules/d3/dist/d3.min.js:2:154671 → 2:154650` |
|  -40.0% |  -64.187 KiB | 0.3% → 0.2% |  160 KiB → 96.3 KiB |    10 → 6 | `next`            | `<unknown>`                                          |
|  -40.0% |  -64.187 KiB | 0.3% → 0.2% |  160 KiB → 96.3 KiB |    10 → 6 | `D`               | `node_modules/d3/dist/d3.min.js:2:4759`              |
|  -40.0% |  -64.144 KiB | 0.3% → 0.2% |  160 KiB → 96.3 KiB |    10 → 6 | `(compiler)`      | `<unknown>`                                          |

##### Third-party

|  Change |        Delta |           % |                Size |   Samples | Function      | Location                                             |
| ------: | -----------: | ----------: | ------------------: | --------: | ------------- | ---------------------------------------------------- |
|  -10.2% | -384.011 KiB | 6.3% → 5.5% | 3.69 MiB → 3.32 MiB | 236 → 212 | `Bp`          | `node_modules/d3/dist/d3.min.js:2:147464 → 2:147443` |
|  -10.2% | -384.011 KiB | 6.3% → 5.5% | 3.69 MiB → 3.32 MiB | 236 → 212 | `e`           | `node_modules/d3/dist/d3.min.js:2:147925 → 2:147904` |
|  -10.2% | -384.011 KiB | 6.3% → 5.5% | 3.69 MiB → 3.32 MiB | 236 → 212 | `l`           | `node_modules/d3/dist/d3.min.js:2:269815 → 2:269888` |
|  -10.2% | -384.011 KiB | 6.3% → 5.5% | 3.69 MiB → 3.32 MiB | 236 → 212 | `s`           | `node_modules/d3/dist/d3.min.js:2:269724 → 2:269797` |
|   -9.7% |  -367.98 KiB | 6.3% → 5.5% | 3.69 MiB → 3.33 MiB | 236 → 213 | `eachBefore`  | `node_modules/d3/dist/d3.min.js:2:141773 → 2:141754` |
|  -20.6% |  -224.25 KiB | 1.8% → 1.4% |  1.06 MiB → 865 KiB |   68 → 54 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:78141 → 2:78140`   |
|   -4.5% | -161.742 KiB | 6.0% → 5.6% | 3.52 MiB → 3.36 MiB | 225 → 214 | `h`           | `node_modules/d3/dist/d3.min.js:2:12208`             |
|   -4.0% | -145.695 KiB | 6.0% → 5.6% | 3.52 MiB → 3.38 MiB | 225 → 215 | `call`        | `node_modules/d3/dist/d3.min.js:2:25192`             |
|  -40.9% | -144.218 KiB | 0.6% → 0.3% |   352 KiB → 208 KiB |   22 → 13 | `format`      | `node_modules/d3/dist/d3.min.js:2:167331 → 2:167310` |
|  -63.6% | -112.218 KiB | 0.3% → 0.1% |  176 KiB → 64.2 KiB |    11 → 4 | `Sg`          | `node_modules/d3/dist/d3.min.js:2:155632 → 2:155611` |
| removed | -109.539 KiB | 0.2% → 0.0% |       110 KiB → 0 B |     6 → 0 | `f`           | `node_modules/d3/dist/d3.min.js:2:233452`            |
| removed |  -93.523 KiB | 0.2% → 0.0% |      93.5 KiB → 0 B |     5 → 0 | `h`           | `node_modules/d3/dist/d3.min.js:2:233884`            |
|  -10.6% |  -80.156 KiB | 1.3% → 1.1% |   753 KiB → 673 KiB |   47 → 42 | `I_.s.copy`   | `node_modules/d3/dist/d3.min.js:2:173715 → 2:173694` |
|  -20.0% |  -80.125 KiB | 0.7% → 0.5% |   401 KiB → 321 KiB |   25 → 20 | `Ag`          | `node_modules/d3/dist/d3.min.js:2:154800 → 2:154779` |
|  -62.5% |  -80.078 KiB | 0.2% → 0.1% |    128 KiB → 48 KiB |     8 → 3 | `Tg`          | `node_modules/d3/dist/d3.min.js:2:154671 → 2:154650` |
|  -40.0% |  -64.187 KiB | 0.3% → 0.2% |  160 KiB → 96.3 KiB |    10 → 6 | `D`           | `node_modules/d3/dist/d3.min.js:2:4759`              |
|   -9.1% |   -64.14 KiB | 1.2% → 1.0% |   705 KiB → 641 KiB |   44 → 40 | `I_`          | `node_modules/d3/dist/d3.min.js:2:173087 → 2:173066` |
|  -60.0% |   -49.46 KiB |        0.1% | 82.4 KiB → 32.9 KiB |     5 → 2 | `Lu`          | `node_modules/d3/dist/d3.min.js:2:94637 → 2:94618`   |
|  -60.0% |  -48.046 KiB |        0.1% |   80.1 KiB → 32 KiB |     5 → 2 | `Ag.l.domain` | `node_modules/d3/dist/d3.min.js:2:155200 → 2:155179` |
| removed |  -48.046 KiB | 0.1% → 0.0% |        48 KiB → 0 B |     3 → 0 | `Fg.e.domain` | `node_modules/d3/dist/d3.min.js:2:157350`            |

##### Standard library

| Change |        Delta |           % |                Size | Samples | Function  | Location    |
| -----: | -----------: | ----------: | ------------------: | ------: | --------- | ----------- |
| -29.8% | -143.718 KiB | 0.8% → 0.6% |   483 KiB → 339 KiB | 30 → 21 | `from`    | `<unknown>` |
| -40.0% |  -64.187 KiB | 0.3% → 0.2% |  160 KiB → 96.3 KiB |  10 → 6 | `next`    | `<unknown>` |
| -15.2% |  -49.609 KiB | 0.5% → 0.4% |   327 KiB → 277 KiB | 18 → 15 | `forEach` | `<unknown>` |
|  -1.1% |  -14.339 KiB | 2.1% → 2.0% | 1.23 MiB → 1.21 MiB | 78 → 77 | `push`    | `<unknown>` |

##### Ours

|  Change |        Delta |            % |                Size |   Samples | Function          | Location              |
| ------: | -----------: | -----------: | ------------------: | --------: | ----------------- | --------------------- |
|  -17.5% | -417.234 KiB |  4.0% → 3.2% | 2.33 MiB → 1.93 MiB | 146 → 120 | `chartBreakdowns` | `workload.mjs:39:27`  |
| removed |  -16.046 KiB | <0.1% → 0.0% |        16 KiB → 0 B |     1 → 0 | `(anonymous)`     | `workload.mjs:77:21`  |
|  -25.0% |  -16.015 KiB |         0.1% | 64.1 KiB → 48.1 KiB |     4 → 3 | `(anonymous)`     | `workload.mjs:121:16` |
| removed |  -16.007 KiB | <0.1% → 0.0% |        16 KiB → 0 B |     1 → 0 | `(anonymous)`     | `workload.mjs:134:23` |
|  -49.5% |  -15.945 KiB | 0.1% → <0.1% | 32.2 KiB → 16.3 KiB |     2 → 1 | `(anonymous)`     | `workload.mjs:11:29`  |

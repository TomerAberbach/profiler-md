# Heap profile diff

Allocated 58.2 MiB → 60.1 MiB (+1.925 MiB, +3.3%) over 3,648 → 3,770 samples (16.3 KiB per sample).

| Category         | Change |       Delta |             % |                Size |       Samples |
| ---------------- | -----: | ----------: | ------------: | ------------------: | ------------: |
| Third-party      |  +4.0% |  +2.151 MiB | 93.6% → 94.1% | 54.4 MiB → 56.6 MiB | 3,459 → 3,596 |
| Standard library |  -2.2% | -38.839 KiB |   2.9% → 2.8% | 1.71 MiB → 1.68 MiB |     109 → 106 |
| Ours             |  -4.8% | -48.167 KiB |   1.7% → 1.5% |   993 KiB → 945 KiB |       60 → 57 |
| Native           |  +2.1% |   +16.5 KiB |          1.3% |   788 KiB → 804 KiB |         1 → 2 |
| Compiler         | -40.0% | -64.144 KiB |   0.3% → 0.2% |  160 KiB → 96.3 KiB |        10 → 6 |
| Unknown          | -66.8% | -96.941 KiB |   0.2% → 0.1% |  145 KiB → 48.2 KiB |         9 → 3 |

Paths starting with `./` or `../` are relative to `http://127.0.0.1:52789/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 57.3 MiB → 59.3 MiB (98.4% → 98.6%) (anonymous)
│   └── 57.1 MiB → 59.2 MiB (98.2% → 98.5%) globalThis.buildAndRetainDom at ./workload.mjs:1:32
│       ├── 48.4 MiB → 50.5 MiB (83.1% → 84.0%) chartLayouts at 116:24
│       │   ├── … 37.6 MiB → 40 MiB (64.7% → 66.5%, self 0.7% → 1.0%) o at ./node_modules/d3/dist/d3.min.js:2:77004
│       │   │   └── 37.2 MiB → 39.4 MiB (63.9% → 65.5%) (anonymous) at 2:77113
│       │   │       └── 37.1 MiB → 39.3 MiB (63.8% → 65.4%, self 61.7% → 63.7%) p at 2:77577 → 2:77576
│       │   │           └── 1.06 MiB → 865 KiB (1.8% → 1.4%, self 0.7% → 0.4%) (anonymous) at 2:78141 → 2:78140
│       │   │               └── 689 KiB → 609 KiB (1.2% → 1.0%, self 2.1% → 2.0% globally) push
│       │   ├── … 3.69 MiB → 3.32 MiB (6.3% → 5.5%, self 6.2% → 5.3%) Bp at ./node_modules/d3/dist/d3.min.js:2:147464 → 2:147443
│       │   ├── 3.18 MiB → 3.05 MiB (5.5% → 5.1%) join at ./node_modules/d3/dist/d3.min.js:2:24162
│       │   │   └── 3.18 MiB → 3.05 MiB (5.5% → 5.1%) append at 2:26726
│       │   │       └── 2.69 MiB → 2.75 MiB (4.6%, self 2.3% → 2.4%) select at 2:22328
│       │   │           └── 1.33 MiB → 1.31 MiB (2.3% → 2.2%) (anonymous) at 2:26793 …
│       │   ├── 1.3 MiB → 1.38 MiB (2.2% → 2.3%, self 1.9% → 2.0%) Gd at ./node_modules/d3/dist/d3.min.js:2:140014 → 2:139995
│       │   ├── 1.06 MiB → 1.22 MiB (1.8% → 2.0%) t.forceSimulation at ./node_modules/d3/dist/d3.min.js:2:235388 → 2:235437
│       │   │   └── 1.05 MiB → 1.22 MiB (1.8% → 2.0%) d at 2:235836 → 2:235885
│       │   ├── … 226 KiB → 387 KiB (0.4% → 0.6%) t at ./node_modules/d3/dist/d3.min.js:2:4909
│       │   ├── … 231 KiB → 209 KiB (0.4% → 0.3%) (anonymous) at ./node_modules/d3/dist/d3.min.js:2:235702 → 2:235751
│       │   │   ├── 121 KiB → 193 KiB (0.2% → 0.3%) a at 2:231005 → 2:231054
│       │   │   │   └── 105 KiB → 141 KiB (0.2%) g at 2:231166 → 2:231215
│       │   │   └── 110 KiB → 0 B (0.2% → 0.0%) f at 2:233452
│       │   │       └── 75.8 KiB → 0 B (0.1% → 0.0%) h at 2:233884
│       │   └── 965 KiB → 930 KiB (1.6% → 1.5%) 6 more callees, led by (1.4%) map
│       ├── … 3.57 MiB → 3.89 MiB (6.1% → 6.5%) append at ./node_modules/d3/dist/d3.min.js:2:26726
│       │   └── 3.38 MiB → 3.5 MiB (5.8%, self 3.2% → 3.1%, self 7.8% → 7.4% globally) select at 2:22328
│       │       └── 1.5 MiB → 1.63 MiB (2.6% → 2.7%) (anonymous) at 2:26793
│       │           └── 1.5 MiB → 1.63 MiB (2.6% → 2.7%, self 7.3% → 7.2% globally) (anonymous) at 2:16259
│       ├── 2.55 MiB (4.4% → 4.2%) call at ./node_modules/d3/dist/d3.min.js:2:25192
│       │   └── 2.55 MiB (4.4% → 4.2%) 2 more callees, led by (4.4% → 4.2%) h at 2:12208
│       └── 2.33 MiB → 1.93 MiB (4.0% → 3.2%) chartBreakdowns at 39:27
│           ├── … 705 KiB → 641 KiB (1.2% → 1.0%, self 0.4% → 0.6%) I_ at ./node_modules/d3/dist/d3.min.js:2:173087 → 2:173066
│           │   ├── 352 KiB → 208 KiB (0.6% → 0.3%) format at 2:167331 → 2:167310
│           │   └── 96.2 KiB → 16 KiB (0.2% → <0.1%) Sg at 2:155632 → 2:155611
│           │       └── 96.2 KiB → 16 KiB (0.2% → <0.1%, self 0.7% → 0.5% globally) Ag at 2:154800 → 2:154779
│           ├── … 416 KiB → 256 KiB (0.7% → 0.4%) select at ./node_modules/d3/dist/d3.min.js:2:22328
│           ├── … 112 KiB → 64.2 KiB (0.2% → 0.1%, self 0.5% → 0.4% globally) from
│           │   └── 112 KiB → 64.2 KiB (0.2% → 0.1%) next
│           └── 786 KiB → 738 KiB (1.3% → 1.2%) 7 more callees, led by (0.8%) r at ./node_modules/d3/dist/d3.min.js:2:7022
├── 788 KiB (1.3%) (v8 api)
└── 160 KiB → 96.3 KiB (0.3% → 0.2%) (compiler)
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |       Samples | Function                       | Location                                               |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------------------ | ------------------------------------------------------ |
|   +6.4% |    +2.31 MiB | 61.9% → 63.8% |   36 MiB → 38.3 MiB | 2,288 → 2,435 | `p`                            | `./node_modules/d3/dist/d3.min.js:2:77577 → 2:77576`   |
| +239.2% |  +193.32 KiB |   0.1% → 0.4% |  80.8 KiB → 274 KiB |        5 → 17 | `t`                            | `./node_modules/d3/dist/d3.min.js:2:4909`              |
|  +40.7% |  +176.25 KiB |   0.7% → 1.0% |   433 KiB → 609 KiB |       27 → 38 | `o`                            | `./node_modules/d3/dist/d3.min.js:2:77004`             |
|  +16.4% | +176.234 KiB |   1.8% → 2.0% | 1.05 MiB → 1.22 MiB |       67 → 78 | `d`                            | `./node_modules/d3/dist/d3.min.js:2:235836 → 2:235885` |
|  +46.6% |  +112.14 KiB |   0.4% → 0.6% |   240 KiB → 353 KiB |       15 → 22 | `I_`                           | `./node_modules/d3/dist/d3.min.js:2:173087 → 2:173066` |
|   +7.0% |  +80.179 KiB |   1.9% → 2.0% | 1.11 MiB → 1.19 MiB |       71 → 76 | `Gd`                           | `./node_modules/d3/dist/d3.min.js:2:140014 → 2:139995` |
|   +1.5% |  +64.125 KiB |   7.3% → 7.2% | 4.25 MiB → 4.32 MiB |     272 → 276 | `(anonymous)`                  | `./node_modules/d3/dist/d3.min.js:2:16259`             |
|  +46.0% |  +55.667 KiB |   0.2% → 0.3% |   121 KiB → 177 KiB |         6 → 9 | `g`                            | `./node_modules/d3/dist/d3.min.js:2:231166 → 2:231215` |
| +150.2% |  +48.093 KiB |          0.1% |   32 KiB → 80.1 KiB |         2 → 5 | `Ap`                           | `./node_modules/d3/dist/d3.min.js:2:146413 → 2:146394` |
| +300.0% |  +48.062 KiB |  <0.1% → 0.1% |   16 KiB → 64.1 KiB |         1 → 4 | `map`                          | `<unknown>`                                            |
|  +75.0% |  +48.046 KiB |   0.1% → 0.2% |  64.1 KiB → 112 KiB |         4 → 7 | `wg`                           | `./node_modules/d3/dist/d3.min.js:2:154280 → 2:154259` |
| +234.2% |  +41.972 KiB |  <0.1% → 0.1% | 17.9 KiB → 59.9 KiB |         1 → 3 | `(anonymous)`                  | `./node_modules/d3/dist/d3.min.js:2:18176`             |
|     new |  +36.156 KiB |   0.0% → 0.1% |      0 B → 36.2 KiB |         0 → 2 | `forEach`                      | `<unknown>`                                            |
|     new |      +35 KiB |   0.0% → 0.1% |        0 B → 35 KiB |         0 → 2 | `exec`                         | `<unknown>`                                            |
|  +66.6% |  +32.144 KiB |          0.1% | 48.3 KiB → 80.4 KiB |         3 → 5 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`                                  |
|  +50.0% |  +32.054 KiB |   0.1% → 0.2% | 64.1 KiB → 96.2 KiB |         4 → 6 | `t`                            | `./node_modules/d3/dist/d3.min.js:2:257362 → 2:257411` |
|   +8.3% |  +32.031 KiB |   0.6% → 0.7% |   384 KiB → 416 KiB |       24 → 26 | `append`                       | `./node_modules/d3/dist/d3.min.js:2:26726`             |
|     new |    +16.5 KiB |  0.0% → <0.1% |      0 B → 16.5 KiB |         0 → 1 | `max`                          | `<unknown>`                                            |
|     new |  +16.171 KiB |  0.0% → <0.1% |      0 B → 16.2 KiB |         0 → 1 | `i.domain`                     | `./node_modules/d3/dist/d3.min.js:2:152528`            |
|     new |  +16.105 KiB |  0.0% → <0.1% |      0 B → 16.1 KiB |         0 → 1 | `u`                            | `./node_modules/d3/dist/d3.min.js:2:231519`            |

##### Third-party

|  Change |        Delta |             % |                Size |       Samples | Function        | Location                                               |
| ------: | -----------: | ------------: | ------------------: | ------------: | --------------- | ------------------------------------------------------ |
|   +6.4% |    +2.31 MiB | 61.9% → 63.8% |   36 MiB → 38.3 MiB | 2,288 → 2,435 | `p`             | `./node_modules/d3/dist/d3.min.js:2:77577 → 2:77576`   |
| +239.2% |  +193.32 KiB |   0.1% → 0.4% |  80.8 KiB → 274 KiB |        5 → 17 | `t`             | `./node_modules/d3/dist/d3.min.js:2:4909`              |
|  +40.7% |  +176.25 KiB |   0.7% → 1.0% |   433 KiB → 609 KiB |       27 → 38 | `o`             | `./node_modules/d3/dist/d3.min.js:2:77004`             |
|  +16.4% | +176.234 KiB |   1.8% → 2.0% | 1.05 MiB → 1.22 MiB |       67 → 78 | `d`             | `./node_modules/d3/dist/d3.min.js:2:235836 → 2:235885` |
|  +46.6% |  +112.14 KiB |   0.4% → 0.6% |   240 KiB → 353 KiB |       15 → 22 | `I_`            | `./node_modules/d3/dist/d3.min.js:2:173087 → 2:173066` |
|   +7.0% |  +80.179 KiB |   1.9% → 2.0% | 1.11 MiB → 1.19 MiB |       71 → 76 | `Gd`            | `./node_modules/d3/dist/d3.min.js:2:140014 → 2:139995` |
|   +1.5% |  +64.125 KiB |   7.3% → 7.2% | 4.25 MiB → 4.32 MiB |     272 → 276 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:16259`             |
|  +46.0% |  +55.667 KiB |   0.2% → 0.3% |   121 KiB → 177 KiB |         6 → 9 | `g`             | `./node_modules/d3/dist/d3.min.js:2:231166 → 2:231215` |
| +150.2% |  +48.093 KiB |          0.1% |   32 KiB → 80.1 KiB |         2 → 5 | `Ap`            | `./node_modules/d3/dist/d3.min.js:2:146413 → 2:146394` |
|  +75.0% |  +48.046 KiB |   0.1% → 0.2% |  64.1 KiB → 112 KiB |         4 → 7 | `wg`            | `./node_modules/d3/dist/d3.min.js:2:154280 → 2:154259` |
| +234.2% |  +41.972 KiB |  <0.1% → 0.1% | 17.9 KiB → 59.9 KiB |         1 → 3 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:18176`             |
|  +50.0% |  +32.054 KiB |   0.1% → 0.2% | 64.1 KiB → 96.2 KiB |         4 → 6 | `t`             | `./node_modules/d3/dist/d3.min.js:2:257362 → 2:257411` |
|   +8.3% |  +32.031 KiB |   0.6% → 0.7% |   384 KiB → 416 KiB |       24 → 26 | `append`        | `./node_modules/d3/dist/d3.min.js:2:26726`             |
|     new |  +16.171 KiB |  0.0% → <0.1% |      0 B → 16.2 KiB |         0 → 1 | `i.domain`      | `./node_modules/d3/dist/d3.min.js:2:152528`            |
|     new |  +16.105 KiB |  0.0% → <0.1% |      0 B → 16.1 KiB |         0 → 1 | `u`             | `./node_modules/d3/dist/d3.min.js:2:231519`            |
|     new |  +16.082 KiB |  0.0% → <0.1% |      0 B → 16.1 KiB |         0 → 1 | `node`          | `./node_modules/d3/dist/d3.min.js:2:25324`             |
|  +14.3% |  +16.054 KiB |          0.2% |   112 KiB → 128 KiB |         7 → 8 | `a`             | `./node_modules/d3/dist/d3.min.js:2:252634 → 2:252683` |
|     new |  +16.054 KiB |  0.0% → <0.1% |      0 B → 16.1 KiB |         0 → 1 | `f.innerRadius` | `./node_modules/d3/dist/d3.min.js:2:220276`            |
|     new |  +16.046 KiB |  0.0% → <0.1% |        0 B → 16 KiB |         0 → 1 | `i`             | `./node_modules/d3/dist/d3.min.js:2:152407`            |
|     new |  +16.031 KiB |  0.0% → <0.1% |        0 B → 16 KiB |         0 → 1 | `(anonymous)`   | `./node_modules/d3/dist/d3.min.js:2:142656`            |

##### Standard library

|  Change |       Delta |            % |              Size | Samples | Function  | Location    |
| ------: | ----------: | -----------: | ----------------: | ------: | --------- | ----------- |
| +300.0% | +48.062 KiB | <0.1% → 0.1% | 16 KiB → 64.1 KiB |   1 → 4 | `map`     | `<unknown>` |
|     new | +36.156 KiB |  0.0% → 0.1% |    0 B → 36.2 KiB |   0 → 2 | `forEach` | `<unknown>` |
|     new |     +35 KiB |  0.0% → 0.1% |      0 B → 35 KiB |   0 → 2 | `exec`    | `<unknown>` |

##### Ours

| Change |       Delta |    % |                Size | Samples | Function                       | Location                |
| -----: | ----------: | ---: | ------------------: | ------: | ------------------------------ | ----------------------- |
| +66.6% | +32.144 KiB | 0.1% | 48.3 KiB → 80.4 KiB |   3 → 5 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`   |
|    ~0% |       +48 B | 1.2% |             737 KiB |      46 | `(anonymous)`                  | `./workload.mjs:136:28` |

##### Native

| Change |     Delta |            % |           Size | Samples | Function | Location    |
| -----: | --------: | -----------: | -------------: | ------: | -------- | ----------- |
|    new | +16.5 KiB | 0.0% → <0.1% | 0 B → 16.5 KiB |   0 → 1 | `max`    | `<unknown>` |

#### Improvements

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |            % |                Size |   Samples | Function          | Location                                               |
| ------: | -----------: | -----------: | ------------------: | --------: | ----------------- | ------------------------------------------------------ |
|  -12.1% | -448.605 KiB |  6.2% → 5.3% | 3.61 MiB → 3.18 MiB | 231 → 203 | `Bp`              | `./node_modules/d3/dist/d3.min.js:2:147464 → 2:147443` |
|  -40.9% | -144.218 KiB |  0.6% → 0.3% |   352 KiB → 208 KiB |   22 → 13 | `format`          | `./node_modules/d3/dist/d3.min.js:2:167331 → 2:167310` |
|  -36.0% | -144.093 KiB |  0.7% → 0.4% |   400 KiB → 256 KiB |   25 → 16 | `(anonymous)`     | `./node_modules/d3/dist/d3.min.js:2:78141 → 2:78140`   |
|  -66.8% |  -96.941 KiB |  0.2% → 0.1% |  145 KiB → 48.2 KiB |     9 → 3 | `(anonymous)`     | `<unknown>`                                            |
| removed |  -93.523 KiB |  0.2% → 0.0% |      93.5 KiB → 0 B |     5 → 0 | `h`               | `./node_modules/d3/dist/d3.min.js:2:233884`            |
|  -20.0% |  -80.125 KiB |  0.7% → 0.5% |   401 KiB → 321 KiB |   25 → 20 | `Ag`              | `./node_modules/d3/dist/d3.min.js:2:154800 → 2:154779` |
|  -24.7% |  -79.531 KiB |  0.5% → 0.4% |   322 KiB → 243 KiB |   20 → 15 | `from`            | `<unknown>`                                            |
|  -40.0% |  -64.187 KiB |  0.3% → 0.2% |  160 KiB → 96.3 KiB |    10 → 6 | `next`            | `<unknown>`                                            |
|  -40.0% |  -64.144 KiB |  0.3% → 0.2% |  160 KiB → 96.3 KiB |    10 → 6 | `(compiler)`      | `<unknown>`                                            |
|   -1.4% |  -63.359 KiB |  7.8% → 7.4% | 4.52 MiB → 4.46 MiB | 289 → 285 | `select`          | `./node_modules/d3/dist/d3.min.js:2:22328`             |
|  -60.1% |   -48.14 KiB |         0.1% |   80.2 KiB → 32 KiB |     5 → 2 | `Gr`              | `./node_modules/d3/dist/d3.min.js:2:43251`             |
| removed |  -33.515 KiB |  0.1% → 0.0% |      33.5 KiB → 0 B |     2 → 0 | `(anonymous)`     | `./node_modules/d3/dist/d3.min.js:2:26793`             |
|  -67.0% |  -33.363 KiB | 0.1% → <0.1% | 49.8 KiB → 16.5 KiB |     3 → 1 | `update`          | `./node_modules/d3/dist/d3.min.js:2:82533 → 2:82523`   |
|  -66.7% |  -32.062 KiB | 0.1% → <0.1% |   48.1 KiB → 16 KiB |     3 → 1 | `(anonymous)`     | `./node_modules/d3/dist/d3.min.js:2:154219 → 2:154198` |
|  -66.6% |      -32 KiB | 0.1% → <0.1% |     48 KiB → 16 KiB |     3 → 1 | `t`               | `./node_modules/d3/dist/d3.min.js:2:257469 → 2:257518` |
|  -17.8% |  -31.375 KiB |  0.3% → 0.2% |   176 KiB → 145 KiB |    11 → 9 | `r`               | `./node_modules/d3/dist/d3.min.js:2:7022`              |
|  -56.7% |      -21 KiB | 0.1% → <0.1% |     37 KiB → 16 KiB |     2 → 1 | `(anonymous)`     | `./node_modules/d3/dist/d3.min.js:2:2114`              |
| removed |  -16.875 KiB | <0.1% → 0.0% |      16.9 KiB → 0 B |     1 → 0 | `moveTo`          | `./node_modules/d3/dist/d3.min.js:2:72387`             |
| removed |  -16.242 KiB | <0.1% → 0.0% |      16.2 KiB → 0 B |     1 → 0 | `chartBreakdowns` | `./workload.mjs:39:27`                                 |
| removed |  -16.226 KiB | <0.1% → 0.0% |      16.2 KiB → 0 B |     1 → 0 | `merge`           | `./node_modules/d3/dist/d3.min.js:2:24384`             |

##### Third-party

|  Change |        Delta |            % |                Size |   Samples | Function      | Location                                               |
| ------: | -----------: | -----------: | ------------------: | --------: | ------------- | ------------------------------------------------------ |
|  -12.1% | -448.605 KiB |  6.2% → 5.3% | 3.61 MiB → 3.18 MiB | 231 → 203 | `Bp`          | `./node_modules/d3/dist/d3.min.js:2:147464 → 2:147443` |
|  -40.9% | -144.218 KiB |  0.6% → 0.3% |   352 KiB → 208 KiB |   22 → 13 | `format`      | `./node_modules/d3/dist/d3.min.js:2:167331 → 2:167310` |
|  -36.0% | -144.093 KiB |  0.7% → 0.4% |   400 KiB → 256 KiB |   25 → 16 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:78141 → 2:78140`   |
| removed |  -93.523 KiB |  0.2% → 0.0% |      93.5 KiB → 0 B |     5 → 0 | `h`           | `./node_modules/d3/dist/d3.min.js:2:233884`            |
|  -20.0% |  -80.125 KiB |  0.7% → 0.5% |   401 KiB → 321 KiB |   25 → 20 | `Ag`          | `./node_modules/d3/dist/d3.min.js:2:154800 → 2:154779` |
|   -1.4% |  -63.359 KiB |  7.8% → 7.4% | 4.52 MiB → 4.46 MiB | 289 → 285 | `select`      | `./node_modules/d3/dist/d3.min.js:2:22328`             |
|  -60.1% |   -48.14 KiB |         0.1% |   80.2 KiB → 32 KiB |     5 → 2 | `Gr`          | `./node_modules/d3/dist/d3.min.js:2:43251`             |
| removed |  -33.515 KiB |  0.1% → 0.0% |      33.5 KiB → 0 B |     2 → 0 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:26793`             |
|  -67.0% |  -33.363 KiB | 0.1% → <0.1% | 49.8 KiB → 16.5 KiB |     3 → 1 | `update`      | `./node_modules/d3/dist/d3.min.js:2:82533 → 2:82523`   |
|  -66.7% |  -32.062 KiB | 0.1% → <0.1% |   48.1 KiB → 16 KiB |     3 → 1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:154219 → 2:154198` |
|  -66.6% |      -32 KiB | 0.1% → <0.1% |     48 KiB → 16 KiB |     3 → 1 | `t`           | `./node_modules/d3/dist/d3.min.js:2:257469 → 2:257518` |
|  -17.8% |  -31.375 KiB |  0.3% → 0.2% |   176 KiB → 145 KiB |    11 → 9 | `r`           | `./node_modules/d3/dist/d3.min.js:2:7022`              |
|  -56.7% |      -21 KiB | 0.1% → <0.1% |     37 KiB → 16 KiB |     2 → 1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:2114`              |
| removed |  -16.875 KiB | <0.1% → 0.0% |      16.9 KiB → 0 B |     1 → 0 | `moveTo`      | `./node_modules/d3/dist/d3.min.js:2:72387`             |
| removed |  -16.226 KiB | <0.1% → 0.0% |      16.2 KiB → 0 B |     1 → 0 | `merge`       | `./node_modules/d3/dist/d3.min.js:2:24384`             |
| removed |  -16.187 KiB | <0.1% → 0.0% |      16.2 KiB → 0 B |     1 → 0 | `h`           | `./node_modules/d3/dist/d3.min.js:2:223150 → 2:223199` |
| removed |  -16.179 KiB | <0.1% → 0.0% |      16.2 KiB → 0 B |     1 → 0 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:166138 → 2:166117` |
| removed |  -16.113 KiB | <0.1% → 0.0% |      16.1 KiB → 0 B |     1 → 0 | `X`           | `./node_modules/d3/dist/d3.min.js:2:5919`              |
| removed |  -16.054 KiB | <0.1% → 0.0% |      16.1 KiB → 0 B |     1 → 0 | `insert`      | `./node_modules/d3/dist/d3.min.js:2:26864`             |
| removed |  -16.046 KiB | <0.1% → 0.0% |        16 KiB → 0 B |     1 → 0 | `d.size`      | `./node_modules/d3/dist/d3.min.js:2:224350`            |

##### Standard library

| Change |       Delta |           % |                Size | Samples | Function | Location    |
| -----: | ----------: | ----------: | ------------------: | ------: | -------- | ----------- |
| -24.7% | -79.531 KiB | 0.5% → 0.4% |   322 KiB → 243 KiB | 20 → 15 | `from`   | `<unknown>` |
| -40.0% | -64.187 KiB | 0.3% → 0.2% |  160 KiB → 96.3 KiB |  10 → 6 | `next`   | `<unknown>` |
|  -1.1% | -14.339 KiB | 2.1% → 2.0% | 1.23 MiB → 1.21 MiB | 78 → 77 | `push`   | `<unknown>` |

##### Ours

|  Change |       Delta |            % |                Size | Samples | Function          | Location                |
| ------: | ----------: | -----------: | ------------------: | ------: | ----------------- | ----------------------- |
| removed | -16.242 KiB | <0.1% → 0.0% |      16.2 KiB → 0 B |   1 → 0 | `chartBreakdowns` | `./workload.mjs:39:27`  |
| removed | -16.046 KiB | <0.1% → 0.0% |        16 KiB → 0 B |   1 → 0 | `(anonymous)`     | `./workload.mjs:77:21`  |
| removed | -16.015 KiB | <0.1% → 0.0% |        16 KiB → 0 B |   1 → 0 | `(anonymous)`     | `./workload.mjs:11:29`  |
|  -25.0% | -16.015 KiB |         0.1% | 64.1 KiB → 48.1 KiB |   4 → 3 | `(anonymous)`     | `./workload.mjs:121:16` |
| removed | -16.007 KiB | <0.1% → 0.0% |        16 KiB → 0 B |   1 → 0 | `(anonymous)`     | `./workload.mjs:134:23` |
|   -0.1% |       -32 B |         0.1% |              32 KiB |       2 | `chartLayouts`    | `./workload.mjs:116:24` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `p` (`./node_modules/d3/dist/d3.min.js:2:77576`)

| Change |       Delta |             % |                Size |       Samples | Caller        | Location                                   |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------- | ------------------------------------------ |
|  +6.6% |  +2.372 MiB | 99.7% → 99.9% | 35.9 MiB → 38.3 MiB | 2,282 → 2,433 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:77113` |
| -66.7% | -64.031 KiB |   0.3% → 0.1% |     96 KiB → 32 KiB |         6 → 2 | `forEach`     | `<unknown>`                                |

##### `t` (`./node_modules/d3/dist/d3.min.js:2:4909`)

|  Change |       Delta |      % |               Size | Samples | Caller | Location                                  |
| ------: | ----------: | -----: | -----------------: | ------: | ------ | ----------------------------------------- |
| +239.2% | +193.32 KiB | 100.0% | 80.8 KiB → 274 KiB |  5 → 17 | `F`    | `./node_modules/d3/dist/d3.min.js:2:4882` |

##### `o` (`./node_modules/d3/dist/d3.min.js:2:77004`)

| Change |       Delta |      % |              Size | Samples | Caller        | Location                                   |
| -----: | ----------: | -----: | ----------------: | ------: | ------------- | ------------------------------------------ |
| +40.7% | +176.25 KiB | 100.0% | 433 KiB → 609 KiB | 27 → 38 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:76982` |

##### `d` (`./node_modules/d3/dist/d3.min.js:2:235885`)

| Change |        Delta |      % |                Size | Samples | Caller              | Location                                               |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------- | ------------------------------------------------------ |
| +16.4% | +176.234 KiB | 100.0% | 1.05 MiB → 1.22 MiB | 67 → 78 | `t.forceSimulation` | `./node_modules/d3/dist/d3.min.js:2:235388 → 2:235437` |

##### `I_` (`./node_modules/d3/dist/d3.min.js:2:173066`)

| Change |       Delta |      % |              Size | Samples | Caller      | Location                                               |
| -----: | ----------: | -----: | ----------------: | ------: | ----------- | ------------------------------------------------------ |
| +46.6% | +112.14 KiB | 100.0% | 240 KiB → 353 KiB | 15 → 22 | `I_.s.copy` | `./node_modules/d3/dist/d3.min.js:2:173715 → 2:173694` |

##### `Gd` (`./node_modules/d3/dist/d3.min.js:2:139995`)

| Change |       Delta |      % |                Size | Samples | Caller         | Location                |
| -----: | ----------: | -----: | ------------------: | ------: | -------------- | ----------------------- |
|  +7.0% | +80.179 KiB | 100.0% | 1.11 MiB → 1.19 MiB | 71 → 76 | `chartLayouts` | `./workload.mjs:116:24` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:16259`)

|  Change |       Delta |             % |                Size |   Samples | Caller        | Location                                   |
| ------: | ----------: | ------------: | ------------------: | --------: | ------------- | ------------------------------------------ |
|   +1.1% | +48.109 KiB | 99.6% → 99.3% | 4.24 MiB → 4.29 MiB | 271 → 274 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:26793` |
| +100.0% | +16.015 KiB |   0.4% → 0.7% |     16 KiB → 32 KiB |     1 → 2 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:26975` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:231215`)

|  Change |       Delta |             % |                Size | Samples | Caller     | Location                                               |
| ------: | ----------: | ------------: | ------------------: | ------: | ---------- | ------------------------------------------------------ |
|  +34.4% | +35.972 KiB | 86.4% → 79.6% |   105 KiB → 141 KiB |   5 → 7 | `a`        | `./node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |
| +120.0% | +19.695 KiB | 13.6% → 20.4% | 16.4 KiB → 36.1 KiB |   1 → 2 | `Fc.visit` | `./node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |

##### `Ap` (`./node_modules/d3/dist/d3.min.js:2:146394`)

|  Change |       Delta |      % |              Size | Samples | Caller | Location                                               |
| ------: | ----------: | -----: | ----------------: | ------: | ------ | ------------------------------------------------------ |
| +150.2% | +48.093 KiB | 100.0% | 32 KiB → 80.1 KiB |   2 → 5 | `Bp`   | `./node_modules/d3/dist/d3.min.js:2:147464 → 2:147443` |

##### `map` (`<unknown>`)

|  Change |       Delta |      % |              Size | Samples | Caller         | Location                |
| ------: | ----------: | -----: | ----------------: | ------: | -------------- | ----------------------- |
| +300.0% | +48.062 KiB | 100.0% | 16 KiB → 64.1 KiB |   1 → 4 | `chartLayouts` | `./workload.mjs:116:24` |

##### `wg` (`./node_modules/d3/dist/d3.min.js:2:154259`)

|  Change |       Delta |             % |              Size | Samples | Caller        | Location                                               |
| ------: | ----------: | ------------: | ----------------: | ------: | ------------- | ------------------------------------------------------ |
| +100.0% | +32.039 KiB | 50.0% → 57.1% | 32 KiB → 64.1 KiB |   2 → 4 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:11875`             |
|  +50.0% | +16.007 KiB | 50.0% → 42.9% |   32 KiB → 48 KiB |   2 → 3 | `l`           | `./node_modules/d3/dist/d3.min.js:2:155044 → 2:155023` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`)

|  Change |       Delta |              % |                Size | Samples | Caller | Location                                   |
| ------: | ----------: | -------------: | ------------------: | ------: | ------ | ------------------------------------------ |
| +144.8% | +25.957 KiB | 100.0% → 73.3% | 17.9 KiB → 43.9 KiB |   1 → 2 | `attr` | `./node_modules/d3/dist/d3.min.js:2:25709` |
|     new | +16.015 KiB |   0.0% → 26.7% |        0 B → 16 KiB |   0 → 1 | `each` | `./node_modules/d3/dist/d3.min.js:2:25558` |

##### `forEach` (`<unknown>`)

| Change |       Delta |             % |           Size | Samples | Caller | Location                                   |
| -----: | ----------: | ------------: | -------------: | ------: | ------ | ------------------------------------------ |
|    new | +36.156 KiB | 0.0% → 100.0% | 0 B → 36.2 KiB |   0 → 2 | `o`    | `./node_modules/d3/dist/d3.min.js:2:77004` |

##### `exec` (`<unknown>`)

| Change |      Delta |            % |           Size | Samples | Caller | Location                                    |
| -----: | ---------: | -----------: | -------------: | ------: | ------ | ------------------------------------------- |
|    new | +18.75 KiB | 0.0% → 53.6% | 0 B → 18.8 KiB |   0 → 1 | `Jc`   | `./node_modules/d3/dist/d3.min.js:2:107030` |
|    new | +16.25 KiB | 0.0% → 46.4% | 0 B → 16.3 KiB |   0 → 1 | `Dv`   | `./node_modules/d3/dist/d3.min.js:2:169110` |

##### `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)

| Change |       Delta |      % |                Size | Samples | Caller        | Location    |
| -----: | ----------: | -----: | ------------------: | ------: | ------------- | ----------- |
| +66.6% | +32.144 KiB | 100.0% | 48.3 KiB → 80.4 KiB |   3 → 5 | `(anonymous)` | `<unknown>` |

##### `t` (`./node_modules/d3/dist/d3.min.js:2:257411`)

| Change |       Delta |      % |                Size | Samples | Caller   | Location                                               |
| -----: | ----------: | -----: | ------------------: | ------: | -------- | ------------------------------------------------------ |
| +50.0% | +32.054 KiB | 100.0% | 64.1 KiB → 96.2 KiB |   4 → 6 | `n.copy` | `./node_modules/d3/dist/d3.min.js:2:257398 → 2:257447` |

##### `append` (`./node_modules/d3/dist/d3.min.js:2:26726`)

|  Change |        Delta |             % |               Size | Samples | Caller        | Location                                   |
| ------: | -----------: | ------------: | -----------------: | ------: | ------------- | ------------------------------------------ |
| +116.7% | +112.109 KiB | 25.0% → 50.0% | 96.1 KiB → 208 KiB |  6 → 13 | `(anonymous)` | `./workload.mjs:185:13`                    |
|  -27.8% |  -80.078 KiB | 75.0% → 50.0% |  288 KiB → 208 KiB | 18 → 13 | `join`        | `./node_modules/d3/dist/d3.min.js:2:24162` |

##### `max` (`<unknown>`)

| Change |     Delta |             % |           Size | Samples | Caller | Location                                    |
| -----: | --------: | ------------: | -------------: | ------: | ------ | ------------------------------------------- |
|    new | +16.5 KiB | 0.0% → 100.0% | 0 B → 16.5 KiB |   0 → 1 | `Bp`   | `./node_modules/d3/dist/d3.min.js:2:147443` |

##### `i.domain` (`./node_modules/d3/dist/d3.min.js:2:152528`)

| Change |       Delta |             % |           Size | Samples | Caller     | Location                                    |
| -----: | ----------: | ------------: | -------------: | ------: | ---------- | ------------------------------------------- |
|    new | +16.171 KiB | 0.0% → 100.0% | 0 B → 16.2 KiB |   0 → 1 | `e.domain` | `./node_modules/d3/dist/d3.min.js:2:153221` |

##### `u` (`./node_modules/d3/dist/d3.min.js:2:231519`)

| Change |       Delta |             % |           Size | Samples | Caller          | Location                                    |
| -----: | ----------: | ------------: | -------------: | ------: | --------------- | ------------------------------------------- |
|    new | +16.105 KiB | 0.0% → 100.0% | 0 B → 16.1 KiB |   0 → 1 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106049` |

##### `node` (`./node_modules/d3/dist/d3.min.js:2:25324`)

| Change |       Delta |             % |           Size | Samples | Caller                         | Location              |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------------------ | --------------------- |
|    new | +16.082 KiB | 0.0% → 100.0% | 0 B → 16.1 KiB |   0 → 1 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `a` (`./node_modules/d3/dist/d3.min.js:2:252683`)

| Change |       Delta |      % |              Size | Samples | Caller            | Location               |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------- | ---------------------- |
| +14.3% | +16.054 KiB | 100.0% | 112 KiB → 128 KiB |   7 → 8 | `chartBreakdowns` | `./workload.mjs:39:27` |

##### `f.innerRadius` (`./node_modules/d3/dist/d3.min.js:2:220276`)

| Change |       Delta |             % |           Size | Samples | Caller            | Location               |
| -----: | ----------: | ------------: | -------------: | ------: | ----------------- | ---------------------- |
|    new | +16.054 KiB | 0.0% → 100.0% | 0 B → 16.1 KiB |   0 → 1 | `chartBreakdowns` | `./workload.mjs:39:27` |

##### `i` (`./node_modules/d3/dist/d3.min.js:2:152407`)

| Change |       Delta |             % |         Size | Samples | Caller        | Location                |
| -----: | ----------: | ------------: | -----------: | ------: | ------------- | ----------------------- |
|    new | +16.046 KiB | 0.0% → 100.0% | 0 B → 16 KiB |   0 → 1 | `(anonymous)` | `./workload.mjs:199:25` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:142656`)

| Change |       Delta |             % |         Size | Samples | Caller       | Location                                    |
| -----: | ----------: | ------------: | -----------: | ------: | ------------ | ------------------------------------------- |
|    new | +16.031 KiB | 0.0% → 100.0% | 0 B → 16 KiB |   0 → 1 | `eachBefore` | `./node_modules/d3/dist/d3.min.js:2:141754` |

##### `(anonymous)` (`./workload.mjs:136:28`)

| Change | Delta |      % |    Size | Samples | Caller | Location    |
| -----: | ----: | -----: | ------: | ------: | ------ | ----------- |
|    ~0% | +48 B | 100.0% | 737 KiB |      46 | `map`  | `<unknown>` |

##### `Bp` (`./node_modules/d3/dist/d3.min.js:2:147443`)

| Change |        Delta |      % |                Size |   Samples | Caller | Location                                               |
| -----: | -----------: | -----: | ------------------: | --------: | ------ | ------------------------------------------------------ |
| -12.1% | -448.605 KiB | 100.0% | 3.61 MiB → 3.18 MiB | 231 → 203 | `e`    | `./node_modules/d3/dist/d3.min.js:2:147925 → 2:147904` |

##### `format` (`./node_modules/d3/dist/d3.min.js:2:167310`)

| Change |        Delta |      % |              Size | Samples | Caller | Location                                               |
| -----: | -----------: | -----: | ----------------: | ------: | ------ | ------------------------------------------------------ |
| -40.9% | -144.218 KiB | 100.0% | 352 KiB → 208 KiB | 22 → 13 | `I_`   | `./node_modules/d3/dist/d3.min.js:2:173087 → 2:173066` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:78140`)

| Change |        Delta |      % |              Size | Samples | Caller | Location                                             |
| -----: | -----------: | -----: | ----------------: | ------: | ------ | ---------------------------------------------------- |
| -36.0% | -144.093 KiB | 100.0% | 400 KiB → 256 KiB | 25 → 16 | `p`    | `./node_modules/d3/dist/d3.min.js:2:77577 → 2:77576` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:233884`)

|  Change |       Delta |            % |           Size | Samples | Caller     | Location                                    |
| ------: | ----------: | -----------: | -------------: | ------: | ---------- | ------------------------------------------- |
| removed | -75.757 KiB | 81.0% → 0.0% | 75.8 KiB → 0 B |   4 → 0 | `f`        | `./node_modules/d3/dist/d3.min.js:2:233452` |
| removed | -17.765 KiB | 19.0% → 0.0% | 17.8 KiB → 0 B |   1 → 0 | `Fc.visit` | `./node_modules/d3/dist/d3.min.js:2:105700` |

##### `Ag` (`./node_modules/d3/dist/d3.min.js:2:154779`)

|  Change |        Delta |             % |                Size | Samples | Caller | Location                                               |
| ------: | -----------: | ------------: | ------------------: | ------: | ------ | ------------------------------------------------------ |
|  -63.6% | -112.218 KiB | 44.0% → 20.0% |  176 KiB → 64.2 KiB |  11 → 4 | `Sg`   | `./node_modules/d3/dist/d3.min.js:2:155632 → 2:155611` |
| +300.2% |  +48.125 KiB |  4.0% → 20.0% |   16 KiB → 64.2 KiB |   1 → 4 | `I_`   | `./node_modules/d3/dist/d3.min.js:2:173087 → 2:173066` |
|  -40.0% |  -32.062 KiB | 20.0% → 15.0% | 80.2 KiB → 48.1 KiB |   5 → 3 | `t`    | `./node_modules/d3/dist/d3.min.js:2:257362 → 2:257411` |
|  +12.5% |  +16.031 KiB | 32.0% → 45.0% |   128 KiB → 144 KiB |   8 → 9 | `t`    | `./node_modules/d3/dist/d3.min.js:2:257469 → 2:257518` |

##### `from` (`<unknown>`)

| Change |       Delta |             % |              Size | Samples | Caller        | Location                                               |
| -----: | ----------: | ------------: | ----------------: | ------: | ------------- | ------------------------------------------------------ |
| -60.0% | -48.046 KiB | 24.8% → 13.2% | 80.1 KiB → 32 KiB |   5 → 2 | `Ag.l.domain` | `./node_modules/d3/dist/d3.min.js:2:155200 → 2:155179` |
| -66.7% | -32.031 KiB |  14.9% → 6.6% |   48 KiB → 16 KiB |   3 → 1 | `Ag.l.range`  | `./node_modules/d3/dist/d3.min.js:2:155280 → 2:155259` |
|  +0.3% |      +560 B | 60.2% → 80.2% | 194 KiB → 195 KiB |      12 | `Gd`          | `./node_modules/d3/dist/d3.min.js:2:140014 → 2:139995` |

##### `next` (`<unknown>`)

| Change |       Delta |      % |               Size | Samples | Caller | Location    |
| -----: | ----------: | -----: | -----------------: | ------: | ------ | ----------- |
| -40.0% | -64.187 KiB | 100.0% | 160 KiB → 96.3 KiB |  10 → 6 | `from` | `<unknown>` |

##### `select` (`./node_modules/d3/dist/d3.min.js:2:22328`)

| Change |       Delta |             % |                Size |   Samples | Caller   | Location                                   |
| -----: | ----------: | ------------: | ------------------: | --------: | -------- | ------------------------------------------ |
| -13.9% | -80.078 KiB | 12.5% → 10.9% |   577 KiB → 496 KiB |   36 → 31 | `h`      | `./node_modules/d3/dist/d3.min.js:2:12208` |
|    new | +32.031 KiB |   0.0% → 0.7% |        0 B → 32 KiB |     0 → 2 | `insert` | `./node_modules/d3/dist/d3.min.js:2:26864` |
|  -0.4% | -15.312 KiB | 87.5% → 88.4% | 3.96 MiB → 3.94 MiB | 253 → 252 | `append` | `./node_modules/d3/dist/d3.min.js:2:26726` |

##### `Gr` (`./node_modules/d3/dist/d3.min.js:2:43251`)

| Change |      Delta |      % |              Size | Samples | Caller | Location                                               |
| -----: | ---------: | -----: | ----------------: | ------: | ------ | ------------------------------------------------------ |
| -60.1% | -48.14 KiB | 100.0% | 80.2 KiB → 32 KiB |   5 → 2 | `wg`   | `./node_modules/d3/dist/d3.min.js:2:154280 → 2:154259` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:26793`)

|  Change |       Delta |             % |           Size | Samples | Caller   | Location                                   |
| ------: | ----------: | ------------: | -------------: | ------: | -------- | ------------------------------------------ |
| removed | -33.515 KiB | 100.0% → 0.0% | 33.5 KiB → 0 B |   2 → 0 | `select` | `./node_modules/d3/dist/d3.min.js:2:22328` |

##### `update` (`./node_modules/d3/dist/d3.min.js:2:82523`)

| Change |       Delta |      % |                Size | Samples | Caller | Location                                             |
| -----: | ----------: | -----: | ------------------: | ------: | ------ | ---------------------------------------------------- |
| -67.0% | -33.363 KiB | 100.0% | 49.8 KiB → 16.5 KiB |   3 → 1 | `Su`   | `./node_modules/d3/dist/d3.min.js:2:82035 → 2:82034` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:154198`)

| Change |       Delta |      % |              Size | Samples | Caller | Location                                               |
| -----: | ----------: | -----: | ----------------: | ------: | ------ | ------------------------------------------------------ |
| -66.7% | -32.062 KiB | 100.0% | 48.1 KiB → 16 KiB |   3 → 1 | `wg`   | `./node_modules/d3/dist/d3.min.js:2:154280 → 2:154259` |

##### `t` (`./node_modules/d3/dist/d3.min.js:2:257518`)

| Change |   Delta |      % |            Size | Samples | Caller   | Location                                               |
| -----: | ------: | -----: | --------------: | ------: | -------- | ------------------------------------------------------ |
| -66.6% | -32 KiB | 100.0% | 48 KiB → 16 KiB |   3 → 1 | `n.copy` | `./node_modules/d3/dist/d3.min.js:2:257518 → 2:257567` |

##### `r` (`./node_modules/d3/dist/d3.min.js:2:7022`)

| Change |       Delta |      % |              Size | Samples | Caller            | Location               |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------- | ---------------------- |
| -17.8% | -31.375 KiB | 100.0% | 176 KiB → 145 KiB |  11 → 9 | `chartBreakdowns` | `./workload.mjs:39:27` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:2114`)

|  Change |   Delta |            % |         Size | Samples | Caller | Location                                  |
| ------: | ------: | -----------: | -----------: | ------: | ------ | ----------------------------------------- |
| removed | -21 KiB | 56.7% → 0.0% | 21 KiB → 0 B |   1 → 0 | `p`    | `./node_modules/d3/dist/d3.min.js:2:1697` |

##### `moveTo` (`./node_modules/d3/dist/d3.min.js:2:72387`)

|  Change |       Delta |             % |           Size | Samples | Caller | Location                                    |
| ------: | ----------: | ------------: | -------------: | ------: | ------ | ------------------------------------------- |
| removed | -16.875 KiB | 100.0% → 0.0% | 16.9 KiB → 0 B |   1 → 0 | `f`    | `./node_modules/d3/dist/d3.min.js:2:218177` |

##### `chartBreakdowns` (`./workload.mjs:39:27`)

|  Change |       Delta |             % |           Size | Samples | Caller                         | Location              |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------ | --------------------- |
| removed | -16.242 KiB | 100.0% → 0.0% | 16.2 KiB → 0 B |   1 → 0 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `merge` (`./node_modules/d3/dist/d3.min.js:2:24384`)

|  Change |       Delta |             % |           Size | Samples | Caller | Location                                   |
| ------: | ----------: | ------------: | -------------: | ------: | ------ | ------------------------------------------ |
| removed | -16.226 KiB | 100.0% → 0.0% | 16.2 KiB → 0 B |   1 → 0 | `join` | `./node_modules/d3/dist/d3.min.js:2:24162` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:223199`)

|  Change |       Delta |             % |           Size | Samples | Caller | Location                                               |
| ------: | ----------: | ------------: | -------------: | ------: | ------ | ------------------------------------------------------ |
| removed | -16.187 KiB | 100.0% → 0.0% | 16.2 KiB → 0 B |   1 → 0 | `d`    | `./node_modules/d3/dist/d3.min.js:2:223501 → 2:223550` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:166117`)

|  Change |       Delta |             % |           Size | Samples | Caller        | Location               |
| ------: | ----------: | ------------: | -------------: | ------: | ------------- | ---------------------- |
| removed | -16.179 KiB | 100.0% → 0.0% | 16.2 KiB → 0 B |   1 → 0 | `(anonymous)` | `./workload.mjs:11:29` |

##### `X` (`./node_modules/d3/dist/d3.min.js:2:5919`)

|  Change |       Delta |             % |           Size | Samples | Caller | Location                                  |
| ------: | ----------: | ------------: | -------------: | ------: | ------ | ----------------------------------------- |
| removed | -16.113 KiB | 100.0% → 0.0% | 16.1 KiB → 0 B |   1 → 0 | `V`    | `./node_modules/d3/dist/d3.min.js:2:6595` |

##### `insert` (`./node_modules/d3/dist/d3.min.js:2:26864`)

|  Change |       Delta |             % |           Size | Samples | Caller | Location                                   |
| ------: | ----------: | ------------: | -------------: | ------: | ------ | ------------------------------------------ |
| removed | -16.054 KiB | 100.0% → 0.0% | 16.1 KiB → 0 B |   1 → 0 | `h`    | `./node_modules/d3/dist/d3.min.js:2:12208` |

##### `d.size` (`./node_modules/d3/dist/d3.min.js:2:224350`)

|  Change |       Delta |             % |         Size | Samples | Caller         | Location                |
| ------: | ----------: | ------------: | -----------: | ------: | -------------- | ----------------------- |
| removed | -16.046 KiB | 100.0% → 0.0% | 16 KiB → 0 B |   1 → 0 | `chartLayouts` | `./workload.mjs:116:24` |

##### `push` (`<unknown>`)

| Change |       Delta |             % |              Size | Samples | Caller        | Location                                             |
| -----: | ----------: | ------------: | ----------------: | ------: | ------------- | ---------------------------------------------------- |
| -11.6% | -80.156 KiB | 54.9% → 49.1% | 689 KiB → 609 KiB | 43 → 38 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:78141 → 2:78140` |
| +57.2% | +66.226 KiB |  9.2% → 14.7% | 116 KiB → 182 KiB |  7 → 11 | `p`           | `./node_modules/d3/dist/d3.min.js:2:77577 → 2:77576` |
| -12.6% | -16.296 KiB |  10.3% → 9.1% | 129 KiB → 113 KiB |   8 → 7 | `t`           | `./node_modules/d3/dist/d3.min.js:2:4909`            |
|  +4.9% | +15.886 KiB | 25.6% → 27.1% | 321 KiB → 337 KiB | 20 → 21 | `r`           | `./node_modules/d3/dist/d3.min.js:2:7022`            |

##### `(anonymous)` (`./workload.mjs:77:21`)

|  Change |       Delta |             % |         Size | Samples | Caller        | Location                                   |
| ------: | ----------: | ------------: | -----------: | ------: | ------------- | ------------------------------------------ |
| removed | -16.046 KiB | 100.0% → 0.0% | 16 KiB → 0 B |   1 → 0 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |

##### `(anonymous)` (`./workload.mjs:11:29`)

|  Change |       Delta |             % |         Size | Samples | Caller | Location    |
| ------: | ----------: | ------------: | -----------: | ------: | ------ | ----------- |
| removed | -16.015 KiB | 100.0% → 0.0% | 16 KiB → 0 B |   1 → 0 | `map`  | `<unknown>` |

##### `(anonymous)` (`./workload.mjs:121:16`)

| Change |       Delta |      % |                Size | Samples | Caller | Location    |
| -----: | ----------: | -----: | ------------------: | ------: | ------ | ----------- |
| -25.0% | -16.015 KiB | 100.0% | 64.1 KiB → 48.1 KiB |   4 → 3 | `map`  | `<unknown>` |

##### `(anonymous)` (`./workload.mjs:134:23`)

|  Change |       Delta |             % |         Size | Samples | Caller        | Location                                   |
| ------: | ----------: | ------------: | -----------: | ------: | ------------- | ------------------------------------------ |
| removed | -16.007 KiB | 100.0% → 0.0% | 16 KiB → 0 B |   1 → 0 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |

##### `chartLayouts` (`./workload.mjs:116:24`)

| Change | Delta |      % |   Size | Samples | Caller                         | Location              |
| -----: | ----: | -----: | -----: | ------: | ------------------------------ | --------------------- |
|  -0.1% | -32 B | 100.0% | 32 KiB |       2 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |        Delta |             % |                Size |       Samples | Function                       | Location                                               |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------ | ------------------------------------------------------ |
|  +6.1% |   +2.364 MiB | 66.1% → 67.9% | 38.5 MiB → 40.9 MiB | 2,445 → 2,595 | `map`                          | `<unknown>`                                            |
|  +6.3% |   +2.363 MiB | 64.7% → 66.5% |   37.6 MiB → 40 MiB | 2,390 → 2,540 | `o`                            | `./node_modules/d3/dist/d3.min.js:2:77004`             |
|  +6.2% |   +2.348 MiB | 64.7% → 66.5% |   37.7 MiB → 40 MiB | 2,392 → 2,541 | `(anonymous)`                  | `./node_modules/d3/dist/d3.min.js:2:76982`             |
|  +6.2% |   +2.348 MiB | 64.7% → 66.5% |   37.7 MiB → 40 MiB | 2,392 → 2,541 | `i`                            | `./node_modules/d3/dist/d3.min.js:2:76807`             |
|  +6.1% |   +2.312 MiB | 64.8% → 66.6% |   37.7 MiB → 40 MiB | 2,395 → 2,542 | `d`                            | `./node_modules/d3/dist/d3.min.js:2:223501 → 2:223550` |
|  +5.8% |   +2.156 MiB | 63.9% → 65.5% | 37.2 MiB → 39.4 MiB | 2,363 → 2,500 | `p`                            | `./node_modules/d3/dist/d3.min.js:2:77577 → 2:77576`   |
|  +5.8% |   +2.156 MiB | 63.9% → 65.5% | 37.2 MiB → 39.4 MiB | 2,363 → 2,500 | `(anonymous)`                  | `./node_modules/d3/dist/d3.min.js:2:77113`             |
|  +4.4% |   +2.147 MiB | 83.1% → 84.0% | 48.4 MiB → 50.5 MiB | 3,073 → 3,210 | `chartLayouts`                 | `./workload.mjs:116:24`                                |
|  +3.6% |   +2.082 MiB | 98.2% → 98.5% | 57.1 MiB → 59.2 MiB | 3,628 → 3,760 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`                                  |
|  +3.5% |   +1.988 MiB | 98.4% → 98.6% | 57.3 MiB → 59.3 MiB | 3,637 → 3,763 | `(anonymous)`                  | `<unknown>`                                            |
|  +9.2% | +336.328 KiB |   6.1% → 6.5% | 3.57 MiB → 3.89 MiB |     228 → 249 | `(anonymous)`                  | `./workload.mjs:185:13`                                |
| +16.4% | +176.234 KiB |   1.8% → 2.0% | 1.05 MiB → 1.22 MiB |       67 → 78 | `d`                            | `./node_modules/d3/dist/d3.min.js:2:235836 → 2:235885` |
| +71.2% |     +161 KiB |   0.4% → 0.6% |   226 KiB → 387 KiB |       14 → 24 | `P`                            | `./node_modules/d3/dist/d3.min.js:2:4565`              |
| +14.7% | +160.218 KiB |   1.8% → 2.0% | 1.06 MiB → 1.22 MiB |       68 → 78 | `t.forceSimulation`            | `./node_modules/d3/dist/d3.min.js:2:235388 → 2:235437` |
| +33.3% | +112.859 KiB |   0.6% → 0.7% |   339 KiB → 451 KiB |       21 → 28 | `F`                            | `./node_modules/d3/dist/d3.min.js:2:4882`              |
| +25.0% |  +96.812 KiB |   0.6% → 0.8% |   387 KiB → 484 KiB |       24 → 30 | `t`                            | `./node_modules/d3/dist/d3.min.js:2:4909`              |
|  +6.1% |  +80.726 KiB |   2.2% → 2.3% |  1.3 MiB → 1.38 MiB |       83 → 88 | `Gd`                           | `./node_modules/d3/dist/d3.min.js:2:140014 → 2:139995` |
| +59.3% |  +71.773 KiB |   0.2% → 0.3% |   121 KiB → 193 KiB |        6 → 10 | `a`                            | `./node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |
|  +1.5% |  +64.125 KiB |   7.3% → 7.2% | 4.25 MiB → 4.32 MiB |     272 → 276 | `(anonymous)`                  | `./node_modules/d3/dist/d3.min.js:2:16259`             |
| +46.0% |  +55.667 KiB |   0.2% → 0.3% |   121 KiB → 177 KiB |         6 → 9 | `g`                            | `./node_modules/d3/dist/d3.min.js:2:231166 → 2:231215` |

##### Third-party

|  Change |        Delta |             % |                Size |       Samples | Function            | Location                                               |
| ------: | -----------: | ------------: | ------------------: | ------------: | ------------------- | ------------------------------------------------------ |
|   +6.3% |   +2.363 MiB | 64.7% → 66.5% |   37.6 MiB → 40 MiB | 2,390 → 2,540 | `o`                 | `./node_modules/d3/dist/d3.min.js:2:77004`             |
|   +6.2% |   +2.348 MiB | 64.7% → 66.5% |   37.7 MiB → 40 MiB | 2,392 → 2,541 | `(anonymous)`       | `./node_modules/d3/dist/d3.min.js:2:76982`             |
|   +6.2% |   +2.348 MiB | 64.7% → 66.5% |   37.7 MiB → 40 MiB | 2,392 → 2,541 | `i`                 | `./node_modules/d3/dist/d3.min.js:2:76807`             |
|   +6.1% |   +2.312 MiB | 64.8% → 66.6% |   37.7 MiB → 40 MiB | 2,395 → 2,542 | `d`                 | `./node_modules/d3/dist/d3.min.js:2:223501 → 2:223550` |
|   +5.8% |   +2.156 MiB | 63.9% → 65.5% | 37.2 MiB → 39.4 MiB | 2,363 → 2,500 | `p`                 | `./node_modules/d3/dist/d3.min.js:2:77577 → 2:77576`   |
|   +5.8% |   +2.156 MiB | 63.9% → 65.5% | 37.2 MiB → 39.4 MiB | 2,363 → 2,500 | `(anonymous)`       | `./node_modules/d3/dist/d3.min.js:2:77113`             |
|  +16.4% | +176.234 KiB |   1.8% → 2.0% | 1.05 MiB → 1.22 MiB |       67 → 78 | `d`                 | `./node_modules/d3/dist/d3.min.js:2:235836 → 2:235885` |
|  +71.2% |     +161 KiB |   0.4% → 0.6% |   226 KiB → 387 KiB |       14 → 24 | `P`                 | `./node_modules/d3/dist/d3.min.js:2:4565`              |
|  +14.7% | +160.218 KiB |   1.8% → 2.0% | 1.06 MiB → 1.22 MiB |       68 → 78 | `t.forceSimulation` | `./node_modules/d3/dist/d3.min.js:2:235388 → 2:235437` |
|  +33.3% | +112.859 KiB |   0.6% → 0.7% |   339 KiB → 451 KiB |       21 → 28 | `F`                 | `./node_modules/d3/dist/d3.min.js:2:4882`              |
|  +25.0% |  +96.812 KiB |   0.6% → 0.8% |   387 KiB → 484 KiB |       24 → 30 | `t`                 | `./node_modules/d3/dist/d3.min.js:2:4909`              |
|   +6.1% |  +80.726 KiB |   2.2% → 2.3% |  1.3 MiB → 1.38 MiB |       83 → 88 | `Gd`                | `./node_modules/d3/dist/d3.min.js:2:140014 → 2:139995` |
|  +59.3% |  +71.773 KiB |   0.2% → 0.3% |   121 KiB → 193 KiB |        6 → 10 | `a`                 | `./node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |
|   +1.5% |  +64.125 KiB |   7.3% → 7.2% | 4.25 MiB → 4.32 MiB |     272 → 276 | `(anonymous)`       | `./node_modules/d3/dist/d3.min.js:2:16259`             |
|  +46.0% |  +55.667 KiB |   0.2% → 0.3% |   121 KiB → 177 KiB |         6 → 9 | `g`                 | `./node_modules/d3/dist/d3.min.js:2:231166 → 2:231215` |
| +150.2% |  +48.093 KiB |          0.1% |   32 KiB → 80.1 KiB |         2 → 5 | `Ap`                | `./node_modules/d3/dist/d3.min.js:2:146413 → 2:146394` |
| +199.3% |  +31.992 KiB |  <0.1% → 0.1% |   16.1 KiB → 48 KiB |         1 → 3 | `insert`            | `./node_modules/d3/dist/d3.min.js:2:26864`             |
|   +0.4% |  +30.851 KiB | 14.1% → 13.7% | 8.18 MiB → 8.21 MiB |     523 → 525 | `append`            | `./node_modules/d3/dist/d3.min.js:2:26726`             |
|   +0.4% |  +30.335 KiB | 12.5% → 12.1% |  7.27 MiB → 7.3 MiB |     465 → 467 | `join`              | `./node_modules/d3/dist/d3.min.js:2:24162`             |
|   +0.7% |  +30.148 KiB |   7.4% → 7.2% | 4.29 MiB → 4.32 MiB |     274 → 276 | `(anonymous)`       | `./node_modules/d3/dist/d3.min.js:2:26793`             |

##### Standard library

| Change |      Delta |             % |                Size |       Samples | Function | Location    |
| -----: | ---------: | ------------: | ------------------: | ------------: | -------- | ----------- |
|  +6.1% | +2.364 MiB | 66.1% → 67.9% | 38.5 MiB → 40.9 MiB | 2,445 → 2,595 | `map`    | `<unknown>` |
|    new |    +35 KiB |   0.0% → 0.1% |        0 B → 35 KiB |         0 → 2 | `exec`   | `<unknown>` |

##### Ours

| Change |        Delta |             % |                Size |       Samples | Function                       | Location                |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------------ | ----------------------- |
|  +4.4% |   +2.147 MiB | 83.1% → 84.0% | 48.4 MiB → 50.5 MiB | 3,073 → 3,210 | `chartLayouts`                 | `./workload.mjs:116:24` |
|  +3.6% |   +2.082 MiB | 98.2% → 98.5% | 57.1 MiB → 59.2 MiB | 3,628 → 3,760 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`   |
|  +9.2% | +336.328 KiB |   6.1% → 6.5% | 3.57 MiB → 3.89 MiB |     228 → 249 | `(anonymous)`                  | `./workload.mjs:185:13` |
|    new |  +16.046 KiB |  0.0% → <0.1% |        0 B → 16 KiB |         0 → 1 | `(anonymous)`                  | `./workload.mjs:199:25` |
|    new |  +16.046 KiB |  0.0% → <0.1% |        0 B → 16 KiB |         0 → 1 | `(anonymous)`                  | `./workload.mjs:195:13` |
|    ~0% |        +48 B |          1.2% |             737 KiB |            46 | `(anonymous)`                  | `./workload.mjs:136:28` |

##### Native

| Change |     Delta |            % |           Size | Samples | Function | Location    |
| -----: | --------: | -----------: | -------------: | ------: | -------- | ----------- |
|    new | +16.5 KiB | 0.0% → <0.1% | 0 B → 16.5 KiB |   0 → 1 | `max`    | `<unknown>` |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |           % |                Size |   Samples | Function          | Location                                               |
| ------: | -----------: | ----------: | ------------------: | --------: | ----------------- | ------------------------------------------------------ |
|  -17.5% | -417.234 KiB | 4.0% → 3.2% | 2.33 MiB → 1.93 MiB | 146 → 120 | `chartBreakdowns` | `./workload.mjs:39:27`                                 |
|  -10.2% | -384.011 KiB | 6.3% → 5.5% | 3.69 MiB → 3.32 MiB | 236 → 212 | `Bp`              | `./node_modules/d3/dist/d3.min.js:2:147464 → 2:147443` |
|  -10.2% | -384.011 KiB | 6.3% → 5.5% | 3.69 MiB → 3.32 MiB | 236 → 212 | `e`               | `./node_modules/d3/dist/d3.min.js:2:147925 → 2:147904` |
|  -10.2% | -384.011 KiB | 6.3% → 5.5% | 3.69 MiB → 3.32 MiB | 236 → 212 | `l`               | `./node_modules/d3/dist/d3.min.js:2:269815 → 2:269888` |
|  -10.2% | -384.011 KiB | 6.3% → 5.5% | 3.69 MiB → 3.32 MiB | 236 → 212 | `s`               | `./node_modules/d3/dist/d3.min.js:2:269724 → 2:269797` |
|   -9.7% |  -367.98 KiB | 6.3% → 5.5% | 3.69 MiB → 3.33 MiB | 236 → 213 | `eachBefore`      | `./node_modules/d3/dist/d3.min.js:2:141773 → 2:141754` |
|  -20.6% |  -224.25 KiB | 1.8% → 1.4% |  1.06 MiB → 865 KiB |   68 → 54 | `(anonymous)`     | `./node_modules/d3/dist/d3.min.js:2:78141 → 2:78140`   |
|   -4.5% | -161.742 KiB | 6.0% → 5.6% | 3.52 MiB → 3.36 MiB | 225 → 214 | `h`               | `./node_modules/d3/dist/d3.min.js:2:12208`             |
|   -4.0% | -145.695 KiB | 6.0% → 5.6% | 3.52 MiB → 3.38 MiB | 225 → 215 | `call`            | `./node_modules/d3/dist/d3.min.js:2:25192`             |
|  -40.9% | -144.218 KiB | 0.6% → 0.3% |   352 KiB → 208 KiB |   22 → 13 | `format`          | `./node_modules/d3/dist/d3.min.js:2:167331 → 2:167310` |
|  -29.8% | -143.718 KiB | 0.8% → 0.6% |   483 KiB → 339 KiB |   30 → 21 | `from`            | `<unknown>`                                            |
|  -63.6% | -112.218 KiB | 0.3% → 0.1% |  176 KiB → 64.2 KiB |    11 → 4 | `Sg`              | `./node_modules/d3/dist/d3.min.js:2:155632 → 2:155611` |
| removed | -109.539 KiB | 0.2% → 0.0% |       110 KiB → 0 B |     6 → 0 | `f`               | `./node_modules/d3/dist/d3.min.js:2:233452`            |
| removed |  -93.523 KiB | 0.2% → 0.0% |      93.5 KiB → 0 B |     5 → 0 | `h`               | `./node_modules/d3/dist/d3.min.js:2:233884`            |
|  -10.6% |  -80.156 KiB | 1.3% → 1.1% |   753 KiB → 673 KiB |   47 → 42 | `I_.s.copy`       | `./node_modules/d3/dist/d3.min.js:2:173715 → 2:173694` |
|  -20.0% |  -80.125 KiB | 0.7% → 0.5% |   401 KiB → 321 KiB |   25 → 20 | `Ag`              | `./node_modules/d3/dist/d3.min.js:2:154800 → 2:154779` |
|  -62.5% |  -80.078 KiB | 0.2% → 0.1% |    128 KiB → 48 KiB |     8 → 3 | `Tg`              | `./node_modules/d3/dist/d3.min.js:2:154671 → 2:154650` |
|  -40.0% |  -64.187 KiB | 0.3% → 0.2% |  160 KiB → 96.3 KiB |    10 → 6 | `next`            | `<unknown>`                                            |
|  -40.0% |  -64.187 KiB | 0.3% → 0.2% |  160 KiB → 96.3 KiB |    10 → 6 | `D`               | `./node_modules/d3/dist/d3.min.js:2:4759`              |
|  -40.0% |  -64.144 KiB | 0.3% → 0.2% |  160 KiB → 96.3 KiB |    10 → 6 | `(compiler)`      | `<unknown>`                                            |

##### Third-party

|  Change |        Delta |           % |                Size |   Samples | Function      | Location                                               |
| ------: | -----------: | ----------: | ------------------: | --------: | ------------- | ------------------------------------------------------ |
|  -10.2% | -384.011 KiB | 6.3% → 5.5% | 3.69 MiB → 3.32 MiB | 236 → 212 | `Bp`          | `./node_modules/d3/dist/d3.min.js:2:147464 → 2:147443` |
|  -10.2% | -384.011 KiB | 6.3% → 5.5% | 3.69 MiB → 3.32 MiB | 236 → 212 | `e`           | `./node_modules/d3/dist/d3.min.js:2:147925 → 2:147904` |
|  -10.2% | -384.011 KiB | 6.3% → 5.5% | 3.69 MiB → 3.32 MiB | 236 → 212 | `l`           | `./node_modules/d3/dist/d3.min.js:2:269815 → 2:269888` |
|  -10.2% | -384.011 KiB | 6.3% → 5.5% | 3.69 MiB → 3.32 MiB | 236 → 212 | `s`           | `./node_modules/d3/dist/d3.min.js:2:269724 → 2:269797` |
|   -9.7% |  -367.98 KiB | 6.3% → 5.5% | 3.69 MiB → 3.33 MiB | 236 → 213 | `eachBefore`  | `./node_modules/d3/dist/d3.min.js:2:141773 → 2:141754` |
|  -20.6% |  -224.25 KiB | 1.8% → 1.4% |  1.06 MiB → 865 KiB |   68 → 54 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:78141 → 2:78140`   |
|   -4.5% | -161.742 KiB | 6.0% → 5.6% | 3.52 MiB → 3.36 MiB | 225 → 214 | `h`           | `./node_modules/d3/dist/d3.min.js:2:12208`             |
|   -4.0% | -145.695 KiB | 6.0% → 5.6% | 3.52 MiB → 3.38 MiB | 225 → 215 | `call`        | `./node_modules/d3/dist/d3.min.js:2:25192`             |
|  -40.9% | -144.218 KiB | 0.6% → 0.3% |   352 KiB → 208 KiB |   22 → 13 | `format`      | `./node_modules/d3/dist/d3.min.js:2:167331 → 2:167310` |
|  -63.6% | -112.218 KiB | 0.3% → 0.1% |  176 KiB → 64.2 KiB |    11 → 4 | `Sg`          | `./node_modules/d3/dist/d3.min.js:2:155632 → 2:155611` |
| removed | -109.539 KiB | 0.2% → 0.0% |       110 KiB → 0 B |     6 → 0 | `f`           | `./node_modules/d3/dist/d3.min.js:2:233452`            |
| removed |  -93.523 KiB | 0.2% → 0.0% |      93.5 KiB → 0 B |     5 → 0 | `h`           | `./node_modules/d3/dist/d3.min.js:2:233884`            |
|  -10.6% |  -80.156 KiB | 1.3% → 1.1% |   753 KiB → 673 KiB |   47 → 42 | `I_.s.copy`   | `./node_modules/d3/dist/d3.min.js:2:173715 → 2:173694` |
|  -20.0% |  -80.125 KiB | 0.7% → 0.5% |   401 KiB → 321 KiB |   25 → 20 | `Ag`          | `./node_modules/d3/dist/d3.min.js:2:154800 → 2:154779` |
|  -62.5% |  -80.078 KiB | 0.2% → 0.1% |    128 KiB → 48 KiB |     8 → 3 | `Tg`          | `./node_modules/d3/dist/d3.min.js:2:154671 → 2:154650` |
|  -40.0% |  -64.187 KiB | 0.3% → 0.2% |  160 KiB → 96.3 KiB |    10 → 6 | `D`           | `./node_modules/d3/dist/d3.min.js:2:4759`              |
|   -9.1% |   -64.14 KiB | 1.2% → 1.0% |   705 KiB → 641 KiB |   44 → 40 | `I_`          | `./node_modules/d3/dist/d3.min.js:2:173087 → 2:173066` |
|  -60.0% |   -49.46 KiB |        0.1% | 82.4 KiB → 32.9 KiB |     5 → 2 | `Lu`          | `./node_modules/d3/dist/d3.min.js:2:94637 → 2:94618`   |
|  -60.0% |  -48.046 KiB |        0.1% |   80.1 KiB → 32 KiB |     5 → 2 | `Ag.l.domain` | `./node_modules/d3/dist/d3.min.js:2:155200 → 2:155179` |
| removed |  -48.046 KiB | 0.1% → 0.0% |        48 KiB → 0 B |     3 → 0 | `Fg.e.domain` | `./node_modules/d3/dist/d3.min.js:2:157350`            |

##### Standard library

| Change |        Delta |           % |                Size | Samples | Function  | Location    |
| -----: | -----------: | ----------: | ------------------: | ------: | --------- | ----------- |
| -29.8% | -143.718 KiB | 0.8% → 0.6% |   483 KiB → 339 KiB | 30 → 21 | `from`    | `<unknown>` |
| -40.0% |  -64.187 KiB | 0.3% → 0.2% |  160 KiB → 96.3 KiB |  10 → 6 | `next`    | `<unknown>` |
| -15.2% |  -49.609 KiB | 0.5% → 0.4% |   327 KiB → 277 KiB | 18 → 15 | `forEach` | `<unknown>` |
|  -1.1% |  -14.339 KiB | 2.1% → 2.0% | 1.23 MiB → 1.21 MiB | 78 → 77 | `push`    | `<unknown>` |

##### Ours

|  Change |        Delta |            % |                Size |   Samples | Function          | Location                |
| ------: | -----------: | -----------: | ------------------: | --------: | ----------------- | ----------------------- |
|  -17.5% | -417.234 KiB |  4.0% → 3.2% | 2.33 MiB → 1.93 MiB | 146 → 120 | `chartBreakdowns` | `./workload.mjs:39:27`  |
| removed |  -16.046 KiB | <0.1% → 0.0% |        16 KiB → 0 B |     1 → 0 | `(anonymous)`     | `./workload.mjs:77:21`  |
|  -25.0% |  -16.015 KiB |         0.1% | 64.1 KiB → 48.1 KiB |     4 → 3 | `(anonymous)`     | `./workload.mjs:121:16` |
| removed |  -16.007 KiB | <0.1% → 0.0% |        16 KiB → 0 B |     1 → 0 | `(anonymous)`     | `./workload.mjs:134:23` |
|  -49.5% |  -15.945 KiB | 0.1% → <0.1% | 32.2 KiB → 16.3 KiB |     2 → 1 | `(anonymous)`     | `./workload.mjs:11:29`  |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `map` (`<unknown>`)

| Change |       Delta |             % |                Size |       Samples | Caller                         | Location                                   |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------------------------ | ------------------------------------------ |
|  +6.2% |  +2.348 MiB | 97.8% → 97.9% |   37.7 MiB → 40 MiB | 2,392 → 2,541 | `i`                            | `./node_modules/d3/dist/d3.min.js:2:76807` |
|  +3.9% | +32.093 KiB |   2.1% → 2.0% |   817 KiB → 849 KiB |       51 → 53 | `chartLayouts`                 | `./workload.mjs:116:24`                    |
| -49.5% | -15.945 KiB |  0.1% → <0.1% | 32.2 KiB → 16.3 KiB |         2 → 1 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`                      |

##### `o` (`./node_modules/d3/dist/d3.min.js:2:77004`)

| Change |      Delta |      % |              Size |       Samples | Caller        | Location                                   |
| -----: | ---------: | -----: | ----------------: | ------------: | ------------- | ------------------------------------------ |
|  +6.3% | +2.363 MiB | 100.0% | 37.6 MiB → 40 MiB | 2,390 → 2,540 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:76982` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:76982`)

| Change |      Delta |      % |              Size |       Samples | Caller | Location    |
| -----: | ---------: | -----: | ----------------: | ------------: | ------ | ----------- |
|  +6.2% | +2.348 MiB | 100.0% | 37.7 MiB → 40 MiB | 2,392 → 2,541 | `map`  | `<unknown>` |

##### `i` (`./node_modules/d3/dist/d3.min.js:2:76807`)

| Change |      Delta |      % |              Size |       Samples | Caller | Location                                               |
| -----: | ---------: | -----: | ----------------: | ------------: | ------ | ------------------------------------------------------ |
|  +6.2% | +2.348 MiB | 100.0% | 37.7 MiB → 40 MiB | 2,392 → 2,541 | `d`    | `./node_modules/d3/dist/d3.min.js:2:223501 → 2:223550` |

##### `d` (`./node_modules/d3/dist/d3.min.js:2:223550`)

| Change |      Delta |      % |              Size |       Samples | Caller         | Location                |
| -----: | ---------: | -----: | ----------------: | ------------: | -------------- | ----------------------- |
|  +6.1% | +2.312 MiB | 100.0% | 37.7 MiB → 40 MiB | 2,395 → 2,542 | `chartLayouts` | `./workload.mjs:116:24` |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:77576`)

| Change |       Delta |             % |                Size |       Samples | Caller        | Location                                   |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------- | ------------------------------------------ |
|  +6.0% |  +2.218 MiB | 99.7% → 99.9% | 37.1 MiB → 39.3 MiB | 2,357 → 2,498 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:77113` |
| -66.7% | -64.031 KiB |   0.3% → 0.1% |     96 KiB → 32 KiB |         6 → 2 | `forEach`     | `<unknown>`                                |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:77113`)

| Change |      Delta |      % |                Size |       Samples | Caller | Location                                   |
| -----: | ---------: | -----: | ------------------: | ------------: | ------ | ------------------------------------------ |
|  +5.8% | +2.156 MiB | 100.0% | 37.2 MiB → 39.4 MiB | 2,363 → 2,500 | `o`    | `./node_modules/d3/dist/d3.min.js:2:77004` |

##### `chartLayouts` (`./workload.mjs:116:24`)

| Change |      Delta |      % |                Size |       Samples | Caller                         | Location              |
| -----: | ---------: | -----: | ------------------: | ------------: | ------------------------------ | --------------------- |
|  +4.4% | +2.147 MiB | 100.0% | 48.4 MiB → 50.5 MiB | 3,073 → 3,210 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)

| Change |      Delta |      % |                Size |       Samples | Caller        | Location    |
| -----: | ---------: | -----: | ------------------: | ------------: | ------------- | ----------- |
|  +3.6% | +2.082 MiB | 100.0% | 57.1 MiB → 59.2 MiB | 3,628 → 3,760 | `(anonymous)` | `<unknown>` |

##### `(anonymous)` (`./workload.mjs:185:13`)

| Change |        Delta |      % |                Size |   Samples | Caller | Location                                   |
| -----: | -----------: | -----: | ------------------: | --------: | ------ | ------------------------------------------ |
|  +9.2% | +336.328 KiB | 100.0% | 3.57 MiB → 3.89 MiB | 228 → 249 | `join` | `./node_modules/d3/dist/d3.min.js:2:24162` |

##### `d` (`./node_modules/d3/dist/d3.min.js:2:235885`)

| Change |        Delta |      % |                Size | Samples | Caller              | Location                                               |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------- | ------------------------------------------------------ |
| +16.4% | +176.234 KiB | 100.0% | 1.05 MiB → 1.22 MiB | 67 → 78 | `t.forceSimulation` | `./node_modules/d3/dist/d3.min.js:2:235388 → 2:235437` |

##### `P` (`./node_modules/d3/dist/d3.min.js:2:4565`)

| Change |    Delta |      % |              Size | Samples | Caller         | Location                |
| -----: | -------: | -----: | ----------------: | ------: | -------------- | ----------------------- |
| +71.2% | +161 KiB | 100.0% | 226 KiB → 387 KiB | 14 → 24 | `chartLayouts` | `./workload.mjs:116:24` |

##### `t.forceSimulation` (`./node_modules/d3/dist/d3.min.js:2:235437`)

| Change |        Delta |      % |                Size | Samples | Caller         | Location                |
| -----: | -----------: | -----: | ------------------: | ------: | -------------- | ----------------------- |
| +14.7% | +160.218 KiB | 100.0% | 1.06 MiB → 1.22 MiB | 68 → 78 | `chartLayouts` | `./workload.mjs:116:24` |

##### `F` (`./node_modules/d3/dist/d3.min.js:2:4882`)

| Change |      Delta |             % |               Size | Samples | Caller | Location                                  |
| -----: | ---------: | ------------: | -----------------: | ------: | ------ | ----------------------------------------- |
| +71.2% |   +161 KiB | 66.8% → 85.8% |  226 KiB → 387 KiB | 14 → 24 | `P`    | `./node_modules/d3/dist/d3.min.js:2:4565` |
| -42.9% | -48.14 KiB | 33.2% → 14.2% | 112 KiB → 64.2 KiB |   7 → 4 | `D`    | `./node_modules/d3/dist/d3.min.js:2:4759` |

##### `t` (`./node_modules/d3/dist/d3.min.js:2:4909`)

| Change |        Delta |             % |                Size | Samples | Caller | Location                                  |
| -----: | -----------: | ------------: | ------------------: | ------: | ------ | ----------------------------------------- |
| +33.3% | +112.859 KiB | 87.6% → 93.4% |   339 KiB → 451 KiB | 21 → 28 | `F`    | `./node_modules/d3/dist/d3.min.js:2:4882` |
| -33.3% |  -16.046 KiB |  12.4% → 6.6% | 48.1 KiB → 32.1 KiB |   3 → 2 | `D`    | `./node_modules/d3/dist/d3.min.js:2:4759` |

##### `Gd` (`./node_modules/d3/dist/d3.min.js:2:139995`)

| Change |       Delta |      % |               Size | Samples | Caller         | Location                |
| -----: | ----------: | -----: | -----------------: | ------: | -------------- | ----------------------- |
|  +6.1% | +80.726 KiB | 100.0% | 1.3 MiB → 1.38 MiB | 83 → 88 | `chartLayouts` | `./workload.mjs:116:24` |

##### `a` (`./node_modules/d3/dist/d3.min.js:2:231054`)

| Change |       Delta |      % |              Size | Samples | Caller        | Location                                               |
| -----: | ----------: | -----: | ----------------: | ------: | ------------- | ------------------------------------------------------ |
| +59.3% | +71.773 KiB | 100.0% | 121 KiB → 193 KiB |  6 → 10 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702 → 2:235751` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:16259`)

|  Change |       Delta |             % |                Size |   Samples | Caller        | Location                                   |
| ------: | ----------: | ------------: | ------------------: | --------: | ------------- | ------------------------------------------ |
|   +1.1% | +48.109 KiB | 99.6% → 99.3% | 4.24 MiB → 4.29 MiB | 271 → 274 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:26793` |
| +100.0% | +16.015 KiB |   0.4% → 0.7% |     16 KiB → 32 KiB |     1 → 2 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:26975` |

##### `g` (`./node_modules/d3/dist/d3.min.js:2:231215`)

|  Change |       Delta |             % |                Size | Samples | Caller     | Location                                               |
| ------: | ----------: | ------------: | ------------------: | ------: | ---------- | ------------------------------------------------------ |
|  +34.4% | +35.972 KiB | 86.4% → 79.6% |   105 KiB → 141 KiB |   5 → 7 | `a`        | `./node_modules/d3/dist/d3.min.js:2:231005 → 2:231054` |
| +120.0% | +19.695 KiB | 13.6% → 20.4% | 16.4 KiB → 36.1 KiB |   1 → 2 | `Fc.visit` | `./node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |

##### `Ap` (`./node_modules/d3/dist/d3.min.js:2:146394`)

|  Change |       Delta |      % |              Size | Samples | Caller | Location                                               |
| ------: | ----------: | -----: | ----------------: | ------: | ------ | ------------------------------------------------------ |
| +150.2% | +48.093 KiB | 100.0% | 32 KiB → 80.1 KiB |   2 → 5 | `Bp`   | `./node_modules/d3/dist/d3.min.js:2:147464 → 2:147443` |

##### `insert` (`./node_modules/d3/dist/d3.min.js:2:26864`)

|  Change |       Delta |      % |              Size | Samples | Caller | Location                                   |
| ------: | ----------: | -----: | ----------------: | ------: | ------ | ------------------------------------------ |
| +199.3% | +31.992 KiB | 100.0% | 16.1 KiB → 48 KiB |   1 → 3 | `h`    | `./node_modules/d3/dist/d3.min.js:2:12208` |

##### `append` (`./node_modules/d3/dist/d3.min.js:2:26726`)

| Change |        Delta |             % |                Size |   Samples | Caller                         | Location                                   |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------------ | ------------------------------------------ |
|  +9.2% | +336.328 KiB | 43.6% → 47.4% | 3.57 MiB → 3.89 MiB | 228 → 249 | `(anonymous)`                  | `./workload.mjs:185:13`                    |
|  -7.7% | -289.765 KiB | 45.1% → 41.5% | 3.69 MiB → 3.41 MiB | 236 → 218 | `join`                         | `./node_modules/d3/dist/d3.min.js:2:24162` |
| -66.7% |  -32.031 KiB |   0.6% → 0.2% |     48 KiB → 16 KiB |     3 → 1 | `chartBreakdowns`              | `./workload.mjs:39:27`                     |
|  +1.9% |  +16.078 KiB |  9.9% → 10.1% |   833 KiB → 849 KiB |   52 → 53 | `h`                            | `./node_modules/d3/dist/d3.min.js:2:12208` |
|  +0.4% |       +248 B |          0.8% | 64.6 KiB → 64.8 KiB |         4 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`                      |

##### `join` (`./node_modules/d3/dist/d3.min.js:2:24162`)

| Change |        Delta |             % |                Size |   Samples | Caller                         | Location                |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------------ | ----------------------- |
|  +8.1% | +304.085 KiB | 50.5% → 54.4% | 3.68 MiB → 3.97 MiB | 235 → 254 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`   |
| -33.3% |  -144.14 KiB |   5.8% → 3.9% |   432 KiB → 288 KiB |   27 → 18 | `chartBreakdowns`              | `./workload.mjs:39:27`  |
|  -4.0% | -129.609 KiB | 43.7% → 41.8% | 3.18 MiB → 3.05 MiB | 203 → 195 | `chartLayouts`                 | `./workload.mjs:116:24` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:26793`)

| Change |       Delta |             % |                Size |   Samples | Caller   | Location                                   |
| -----: | ----------: | ------------: | ------------------: | --------: | -------- | ------------------------------------------ |
|  +5.0% | +16.015 KiB |   7.3% → 7.6% |   320 KiB → 336 KiB |   20 → 21 | `append` | `./node_modules/d3/dist/d3.min.js:2:26726` |
|  +0.3% | +14.132 KiB | 92.7% → 92.4% | 3.97 MiB → 3.99 MiB | 254 → 255 | `select` | `./node_modules/d3/dist/d3.min.js:2:22328` |

##### `exec` (`<unknown>`)

| Change |      Delta |            % |           Size | Samples | Caller | Location                                    |
| -----: | ---------: | -----------: | -------------: | ------: | ------ | ------------------------------------------- |
|    new | +18.75 KiB | 0.0% → 53.6% | 0 B → 18.8 KiB |   0 → 1 | `Jc`   | `./node_modules/d3/dist/d3.min.js:2:107030` |
|    new | +16.25 KiB | 0.0% → 46.4% | 0 B → 16.3 KiB |   0 → 1 | `Dv`   | `./node_modules/d3/dist/d3.min.js:2:169110` |

##### `(anonymous)` (`./workload.mjs:199:25`)

| Change |       Delta |             % |         Size | Samples | Caller        | Location                                   |
| -----: | ----------: | ------------: | -----------: | ------: | ------------- | ------------------------------------------ |
|    new | +16.046 KiB | 0.0% → 100.0% | 0 B → 16 KiB |   0 → 1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |

##### `(anonymous)` (`./workload.mjs:195:13`)

| Change |       Delta |             % |         Size | Samples | Caller | Location                                   |
| -----: | ----------: | ------------: | -----------: | ------: | ------ | ------------------------------------------ |
|    new | +16.046 KiB | 0.0% → 100.0% | 0 B → 16 KiB |   0 → 1 | `call` | `./node_modules/d3/dist/d3.min.js:2:25192` |

##### `(anonymous)` (`./workload.mjs:136:28`)

| Change | Delta |      % |    Size | Samples | Caller | Location    |
| -----: | ----: | -----: | ------: | ------: | ------ | ----------- |
|    ~0% | +48 B | 100.0% | 737 KiB |      46 | `map`  | `<unknown>` |

##### `max` (`<unknown>`)

| Change |     Delta |             % |           Size | Samples | Caller | Location                                    |
| -----: | --------: | ------------: | -------------: | ------: | ------ | ------------------------------------------- |
|    new | +16.5 KiB | 0.0% → 100.0% | 0 B → 16.5 KiB |   0 → 1 | `Bp`   | `./node_modules/d3/dist/d3.min.js:2:147443` |

##### `chartBreakdowns` (`./workload.mjs:39:27`)

| Change |        Delta |      % |                Size |   Samples | Caller                         | Location              |
| -----: | -----------: | -----: | ------------------: | --------: | ------------------------------ | --------------------- |
| -17.5% | -417.234 KiB | 100.0% | 2.33 MiB → 1.93 MiB | 146 → 120 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `Bp` (`./node_modules/d3/dist/d3.min.js:2:147443`)

| Change |        Delta |      % |                Size |   Samples | Caller | Location                                               |
| -----: | -----------: | -----: | ------------------: | --------: | ------ | ------------------------------------------------------ |
| -10.2% | -384.011 KiB | 100.0% | 3.69 MiB → 3.32 MiB | 236 → 212 | `e`    | `./node_modules/d3/dist/d3.min.js:2:147925 → 2:147904` |

##### `e` (`./node_modules/d3/dist/d3.min.js:2:147904`)

| Change |        Delta |      % |                Size |   Samples | Caller | Location                                               |
| -----: | -----------: | -----: | ------------------: | --------: | ------ | ------------------------------------------------------ |
| -10.2% | -384.011 KiB | 100.0% | 3.69 MiB → 3.32 MiB | 236 → 212 | `l`    | `./node_modules/d3/dist/d3.min.js:2:269815 → 2:269888` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:269888`)

| Change |        Delta |      % |                Size |   Samples | Caller       | Location                                               |
| -----: | -----------: | -----: | ------------------: | --------: | ------------ | ------------------------------------------------------ |
| -10.2% | -384.011 KiB | 100.0% | 3.69 MiB → 3.32 MiB | 236 → 212 | `eachBefore` | `./node_modules/d3/dist/d3.min.js:2:141773 → 2:141754` |

##### `s` (`./node_modules/d3/dist/d3.min.js:2:269797`)

| Change |        Delta |      % |                Size |   Samples | Caller         | Location                |
| -----: | -----------: | -----: | ------------------: | --------: | -------------- | ----------------------- |
| -10.2% | -384.011 KiB | 100.0% | 3.69 MiB → 3.32 MiB | 236 → 212 | `chartLayouts` | `./workload.mjs:116:24` |

##### `eachBefore` (`./node_modules/d3/dist/d3.min.js:2:141754`)

| Change |        Delta |              % |                Size |   Samples | Caller   | Location                                               |
| -----: | -----------: | -------------: | ------------------: | --------: | -------- | ------------------------------------------------------ |
| -10.2% | -384.011 KiB | 100.0% → 99.5% | 3.69 MiB → 3.32 MiB | 236 → 212 | `s`      | `./node_modules/d3/dist/d3.min.js:2:269724 → 2:269797` |
|    new |  +16.031 KiB |    0.0% → 0.5% |        0 B → 16 KiB |     0 → 1 | `leaves` | `./node_modules/d3/dist/d3.min.js:2:142612`            |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:78140`)

| Change |       Delta |      % |               Size | Samples | Caller | Location                                             |
| -----: | ----------: | -----: | -----------------: | ------: | ------ | ---------------------------------------------------- |
| -20.6% | -224.25 KiB | 100.0% | 1.06 MiB → 865 KiB | 68 → 54 | `p`    | `./node_modules/d3/dist/d3.min.js:2:77577 → 2:77576` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:12208`)

| Change |        Delta |      % |                Size |   Samples | Caller | Location                                   |
| -----: | -----------: | -----: | ------------------: | --------: | ------ | ------------------------------------------ |
|  -4.5% | -161.742 KiB | 100.0% | 3.52 MiB → 3.36 MiB | 225 → 214 | `call` | `./node_modules/d3/dist/d3.min.js:2:25192` |

##### `call` (`./node_modules/d3/dist/d3.min.js:2:25192`)

| Change |        Delta |             % |              Size |   Samples | Caller                         | Location               |
| -----: | -----------: | ------------: | ----------------: | --------: | ------------------------------ | ---------------------- |
| -14.5% | -144.398 KiB | 27.6% → 24.6% | 994 KiB → 849 KiB |   62 → 53 | `chartBreakdowns`              | `./workload.mjs:39:27` |
|    ~0% |   -1.296 KiB | 72.4% → 75.4% |          2.55 MiB | 163 → 162 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32`  |

##### `format` (`./node_modules/d3/dist/d3.min.js:2:167310`)

| Change |        Delta |      % |              Size | Samples | Caller | Location                                               |
| -----: | -----------: | -----: | ----------------: | ------: | ------ | ------------------------------------------------------ |
| -40.9% | -144.218 KiB | 100.0% | 352 KiB → 208 KiB | 22 → 13 | `I_`   | `./node_modules/d3/dist/d3.min.js:2:173087 → 2:173066` |

##### `from` (`<unknown>`)

| Change |       Delta |             % |               Size | Samples | Caller        | Location                                               |
| -----: | ----------: | ------------: | -----------------: | ------: | ------------- | ------------------------------------------------------ |
| -40.0% | -64.187 KiB | 33.2% → 28.4% | 160 KiB → 96.3 KiB |  10 → 6 | `t`           | `./node_modules/d3/dist/d3.min.js:2:4909`              |
| -60.0% | -48.046 KiB |  16.6% → 9.4% |  80.1 KiB → 32 KiB |   5 → 2 | `Ag.l.domain` | `./node_modules/d3/dist/d3.min.js:2:155200 → 2:155179` |
| -66.7% | -32.031 KiB |  10.0% → 4.7% |    48 KiB → 16 KiB |   3 → 1 | `Ag.l.range`  | `./node_modules/d3/dist/d3.min.js:2:155280 → 2:155259` |
|  +0.3% |      +560 B | 40.2% → 57.4% |  194 KiB → 195 KiB |      12 | `Gd`          | `./node_modules/d3/dist/d3.min.js:2:140014 → 2:139995` |

##### `Sg` (`./node_modules/d3/dist/d3.min.js:2:155611`)

| Change |       Delta |             % |                Size | Samples | Caller | Location                                               |
| -----: | ----------: | ------------: | ------------------: | ------: | ------ | ------------------------------------------------------ |
| -83.3% | -80.187 KiB | 54.6% → 25.0% |   96.2 KiB → 16 KiB |   6 → 1 | `I_`   | `./node_modules/d3/dist/d3.min.js:2:173087 → 2:173066` |
| -40.0% | -32.031 KiB | 45.4% → 75.0% | 80.2 KiB → 48.1 KiB |   5 → 3 | `t`    | `./node_modules/d3/dist/d3.min.js:2:257362 → 2:257411` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:233452`)

|  Change |        Delta |             % |          Size | Samples | Caller        | Location                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ------------- | ------------------------------------------- |
| removed | -109.539 KiB | 100.0% → 0.0% | 110 KiB → 0 B |   6 → 0 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:233884`)

|  Change |       Delta |            % |           Size | Samples | Caller     | Location                                    |
| ------: | ----------: | -----------: | -------------: | ------: | ---------- | ------------------------------------------- |
| removed | -75.757 KiB | 81.0% → 0.0% | 75.8 KiB → 0 B |   4 → 0 | `f`        | `./node_modules/d3/dist/d3.min.js:2:233452` |
| removed | -17.765 KiB | 19.0% → 0.0% | 17.8 KiB → 0 B |   1 → 0 | `Fc.visit` | `./node_modules/d3/dist/d3.min.js:2:105700` |

##### `I_.s.copy` (`./node_modules/d3/dist/d3.min.js:2:173694`)

| Change |       Delta |      % |              Size | Samples | Caller | Location                                   |
| -----: | ----------: | -----: | ----------------: | ------: | ------ | ------------------------------------------ |
| -10.6% | -80.156 KiB | 100.0% | 753 KiB → 673 KiB | 47 → 42 | `h`    | `./node_modules/d3/dist/d3.min.js:2:12208` |

##### `Ag` (`./node_modules/d3/dist/d3.min.js:2:154779`)

|  Change |        Delta |             % |                Size | Samples | Caller | Location                                               |
| ------: | -----------: | ------------: | ------------------: | ------: | ------ | ------------------------------------------------------ |
|  -63.6% | -112.218 KiB | 44.0% → 20.0% |  176 KiB → 64.2 KiB |  11 → 4 | `Sg`   | `./node_modules/d3/dist/d3.min.js:2:155632 → 2:155611` |
| +300.2% |  +48.125 KiB |  4.0% → 20.0% |   16 KiB → 64.2 KiB |   1 → 4 | `I_`   | `./node_modules/d3/dist/d3.min.js:2:173087 → 2:173066` |
|  -40.0% |  -32.062 KiB | 20.0% → 15.0% | 80.2 KiB → 48.1 KiB |   5 → 3 | `t`    | `./node_modules/d3/dist/d3.min.js:2:257362 → 2:257411` |
|  +12.5% |  +16.031 KiB | 32.0% → 45.0% |   128 KiB → 144 KiB |   8 → 9 | `t`    | `./node_modules/d3/dist/d3.min.js:2:257469 → 2:257518` |

##### `Tg` (`./node_modules/d3/dist/d3.min.js:2:154650`)

|  Change |       Delta |             % |            Size | Samples | Caller      | Location                                               |
| ------: | ----------: | ------------: | --------------: | ------: | ----------- | ------------------------------------------------------ |
| removed | -48.046 KiB |  37.5% → 0.0% |    48 KiB → 0 B |   3 → 0 | `n.copy`    | `./node_modules/d3/dist/d3.min.js:2:257518`            |
|  -50.0% | -16.015 KiB | 25.0% → 33.3% | 32 KiB → 16 KiB |   2 → 1 | `n.copy`    | `./node_modules/d3/dist/d3.min.js:2:257398 → 2:257447` |
|  -33.3% | -16.015 KiB | 37.5% → 66.7% | 48 KiB → 32 KiB |   3 → 2 | `I_.s.copy` | `./node_modules/d3/dist/d3.min.js:2:173715 → 2:173694` |

##### `next` (`<unknown>`)

| Change |       Delta |      % |               Size | Samples | Caller | Location    |
| -----: | ----------: | -----: | -----------------: | ------: | ------ | ----------- |
| -40.0% | -64.187 KiB | 100.0% | 160 KiB → 96.3 KiB |  10 → 6 | `from` | `<unknown>` |

##### `D` (`./node_modules/d3/dist/d3.min.js:2:4759`)

| Change |       Delta |      % |               Size | Samples | Caller            | Location               |
| -----: | ----------: | -----: | -----------------: | ------: | ----------------- | ---------------------- |
| -40.0% | -64.187 KiB | 100.0% | 160 KiB → 96.3 KiB |  10 → 6 | `chartBreakdowns` | `./workload.mjs:39:27` |

##### `I_` (`./node_modules/d3/dist/d3.min.js:2:173066`)

| Change |      Delta |      % |              Size | Samples | Caller      | Location                                               |
| -----: | ---------: | -----: | ----------------: | ------: | ----------- | ------------------------------------------------------ |
|  -9.1% | -64.14 KiB | 100.0% | 705 KiB → 641 KiB | 44 → 40 | `I_.s.copy` | `./node_modules/d3/dist/d3.min.js:2:173715 → 2:173694` |

##### `Lu` (`./node_modules/d3/dist/d3.min.js:2:94618`)

| Change |      Delta |      % |                Size | Samples | Caller | Location                                             |
| -----: | ---------: | -----: | ------------------: | ------: | ------ | ---------------------------------------------------- |
| -60.0% | -49.46 KiB | 100.0% | 82.4 KiB → 32.9 KiB |   5 → 2 | `from` | `./node_modules/d3/dist/d3.min.js:2:94301 → 2:94282` |

##### `Ag.l.domain` (`./node_modules/d3/dist/d3.min.js:2:155179`)

|  Change |       Delta |             % |            Size | Samples | Caller        | Location                                               |
| ------: | ----------: | ------------: | --------------: | ------: | ------------- | ------------------------------------------------------ |
| removed | -48.046 KiB |  60.0% → 0.0% |    48 KiB → 0 B |   3 → 0 | `Fg.e.domain` | `./node_modules/d3/dist/d3.min.js:2:157350`            |
|  -50.0% | -16.015 KiB | 40.0% → 50.0% | 32 KiB → 16 KiB |   2 → 1 | `I_.s.domain` | `./node_modules/d3/dist/d3.min.js:2:173394 → 2:173373` |
|     new | +16.015 KiB |  0.0% → 50.0% |    0 B → 16 KiB |   0 → 1 | `Tg`          | `./node_modules/d3/dist/d3.min.js:2:154650`            |

##### `Fg.e.domain` (`./node_modules/d3/dist/d3.min.js:2:157350`)

|  Change |       Delta |             % |         Size | Samples | Caller | Location                                    |
| ------: | ----------: | ------------: | -----------: | ------: | ------ | ------------------------------------------- |
| removed | -48.046 KiB | 100.0% → 0.0% | 48 KiB → 0 B |   3 → 0 | `Tg`   | `./node_modules/d3/dist/d3.min.js:2:154671` |

##### `forEach` (`<unknown>`)

| Change |       Delta |             % |              Size | Samples | Caller        | Location                                               |
| -----: | ----------: | ------------: | ----------------: | ------: | ------------- | ------------------------------------------------------ |
| -66.7% | -64.031 KiB | 29.4% → 11.6% |   96 KiB → 32 KiB |   6 → 2 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:77113`             |
|    new | +36.156 KiB |  0.0% → 13.1% |    0 B → 36.2 KiB |   0 → 2 | `o`           | `./node_modules/d3/dist/d3.min.js:2:77004`             |
|  -9.4% | -21.734 KiB | 70.6% → 75.4% | 231 KiB → 209 KiB | 12 → 11 | `h`           | `./node_modules/d3/dist/d3.min.js:2:235607 → 2:235656` |

##### `push` (`<unknown>`)

| Change |       Delta |             % |              Size | Samples | Caller        | Location                                             |
| -----: | ----------: | ------------: | ----------------: | ------: | ------------- | ---------------------------------------------------- |
| -11.6% | -80.156 KiB | 54.9% → 49.1% | 689 KiB → 609 KiB | 43 → 38 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:78141 → 2:78140` |
| +57.2% | +66.226 KiB |  9.2% → 14.7% | 116 KiB → 182 KiB |  7 → 11 | `p`           | `./node_modules/d3/dist/d3.min.js:2:77577 → 2:77576` |
| -12.6% | -16.296 KiB |  10.3% → 9.1% | 129 KiB → 113 KiB |   8 → 7 | `t`           | `./node_modules/d3/dist/d3.min.js:2:4909`            |
|  +4.9% | +15.886 KiB | 25.6% → 27.1% | 321 KiB → 337 KiB | 20 → 21 | `r`           | `./node_modules/d3/dist/d3.min.js:2:7022`            |

##### `(anonymous)` (`./workload.mjs:77:21`)

|  Change |       Delta |             % |         Size | Samples | Caller        | Location                                   |
| ------: | ----------: | ------------: | -----------: | ------: | ------------- | ------------------------------------------ |
| removed | -16.046 KiB | 100.0% → 0.0% | 16 KiB → 0 B |   1 → 0 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |

##### `(anonymous)` (`./workload.mjs:121:16`)

| Change |       Delta |      % |                Size | Samples | Caller | Location    |
| -----: | ----------: | -----: | ------------------: | ------: | ------ | ----------- |
| -25.0% | -16.015 KiB | 100.0% | 64.1 KiB → 48.1 KiB |   4 → 3 | `map`  | `<unknown>` |

##### `(anonymous)` (`./workload.mjs:134:23`)

|  Change |       Delta |             % |         Size | Samples | Caller        | Location                                   |
| ------: | ----------: | ------------: | -----------: | ------: | ------------- | ------------------------------------------ |
| removed | -16.007 KiB | 100.0% → 0.0% | 16 KiB → 0 B |   1 → 0 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:18176` |

##### `(anonymous)` (`./workload.mjs:11:29`)

| Change |       Delta |      % |                Size | Samples | Caller | Location    |
| -----: | ----------: | -----: | ------------------: | ------: | ------ | ----------- |
| -49.5% | -15.945 KiB | 100.0% | 32.2 KiB → 16.3 KiB |   2 → 1 | `map`  | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `map` (`<unknown>`)

| Change |       Delta |             % |                Size |       Samples | Callee        | Location                                   |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------- | ------------------------------------------ |
|  +6.2% |  +2.348 MiB | 97.8% → 97.9% |   37.7 MiB → 40 MiB | 2,392 → 2,541 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:76982` |
| -25.0% | -16.015 KiB |   0.2% → 0.1% | 64.1 KiB → 48.1 KiB |         4 → 3 | `(anonymous)` | `./workload.mjs:121:16`                    |
| -49.5% | -15.945 KiB |  0.1% → <0.1% | 32.2 KiB → 16.3 KiB |         2 → 1 | `(anonymous)` | `./workload.mjs:11:29`                     |
|    ~0% |       +48 B |   1.9% → 1.8% |             737 KiB |            46 | `(anonymous)` | `./workload.mjs:136:28`                    |

##### `o` (`./node_modules/d3/dist/d3.min.js:2:77004`)

| Change |       Delta |             % |                Size |       Samples | Callee        | Location                                   |
| -----: | ----------: | ------------: | ------------------: | ------------: | ------------- | ------------------------------------------ |
|  +5.8% |  +2.156 MiB | 98.9% → 98.4% | 37.2 MiB → 39.4 MiB | 2,363 → 2,500 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:77113` |
|    new | +36.156 KiB |   0.0% → 0.1% |      0 B → 36.2 KiB |         0 → 2 | `forEach`     | `<unknown>`                                |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:76982`)

| Change |      Delta |              % |              Size |       Samples | Callee | Location                                   |
| -----: | ---------: | -------------: | ----------------: | ------------: | ------ | ------------------------------------------ |
|  +6.3% | +2.363 MiB | 99.9% → 100.0% | 37.6 MiB → 40 MiB | 2,390 → 2,540 | `o`    | `./node_modules/d3/dist/d3.min.js:2:77004` |

##### `i` (`./node_modules/d3/dist/d3.min.js:2:76807`)

| Change |      Delta |      % |              Size |       Samples | Callee | Location    |
| -----: | ---------: | -----: | ----------------: | ------------: | ------ | ----------- |
|  +6.2% | +2.348 MiB | 100.0% | 37.7 MiB → 40 MiB | 2,392 → 2,541 | `map`  | `<unknown>` |

##### `d` (`./node_modules/d3/dist/d3.min.js:2:223550`)

| Change |       Delta |              % |              Size |       Samples | Callee | Location                                               |
| -----: | ----------: | -------------: | ----------------: | ------------: | ------ | ------------------------------------------------------ |
|  +6.2% |  +2.348 MiB | 99.9% → 100.0% | 37.7 MiB → 40 MiB | 2,392 → 2,541 | `i`    | `./node_modules/d3/dist/d3.min.js:2:76807`             |
| -69.9% | -37.187 KiB |   0.1% → <0.1% | 53.2 KiB → 16 KiB |         3 → 1 | `h`    | `./node_modules/d3/dist/d3.min.js:2:223150 → 2:223199` |

##### `p` (`./node_modules/d3/dist/d3.min.js:2:77576`)

| Change |       Delta |           % |               Size | Samples | Callee        | Location                                             |
| -----: | ----------: | ----------: | -----------------: | ------: | ------------- | ---------------------------------------------------- |
| -20.6% | -224.25 KiB | 2.9% → 2.1% | 1.06 MiB → 865 KiB | 68 → 54 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:78141 → 2:78140` |
| +57.2% | +66.226 KiB | 0.3% → 0.5% |  116 KiB → 182 KiB |  7 → 11 | `push`        | `<unknown>`                                          |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:77113`)

| Change |       Delta |             % |                Size |       Samples | Callee    | Location                                             |
| -----: | ----------: | ------------: | ------------------: | ------------: | --------- | ---------------------------------------------------- |
|  +6.0% |  +2.218 MiB | 99.7% → 99.9% | 37.1 MiB → 39.3 MiB | 2,357 → 2,498 | `p`       | `./node_modules/d3/dist/d3.min.js:2:77577 → 2:77576` |
| -66.7% | -64.031 KiB |   0.3% → 0.1% |     96 KiB → 32 KiB |         6 → 2 | `forEach` | `<unknown>`                                          |

##### `chartLayouts` (`./workload.mjs:116:24`)

| Change |        Delta |             % |                Size |       Samples | Callee              | Location                                               |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------- | ------------------------------------------------------ |
|  +6.1% |   +2.312 MiB | 78.0% → 79.2% |   37.7 MiB → 40 MiB | 2,395 → 2,542 | `d`                 | `./node_modules/d3/dist/d3.min.js:2:223501 → 2:223550` |
| -10.2% | -384.011 KiB |   7.6% → 6.6% | 3.69 MiB → 3.32 MiB |     236 → 212 | `s`                 | `./node_modules/d3/dist/d3.min.js:2:269724 → 2:269797` |
| +71.2% |     +161 KiB |   0.5% → 0.7% |   226 KiB → 387 KiB |       14 → 24 | `P`                 | `./node_modules/d3/dist/d3.min.js:2:4565`              |
| +14.7% | +160.218 KiB |   2.2% → 2.4% | 1.06 MiB → 1.22 MiB |       68 → 78 | `t.forceSimulation` | `./node_modules/d3/dist/d3.min.js:2:235388 → 2:235437` |
|  -4.0% | -129.609 KiB |   6.6% → 6.0% | 3.18 MiB → 3.05 MiB |     203 → 195 | `join`              | `./node_modules/d3/dist/d3.min.js:2:24162`             |

##### `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)

| Change |        Delta |             % |                Size |       Samples | Callee            | Location                                   |
| -----: | -----------: | ------------: | ------------------: | ------------: | ----------------- | ------------------------------------------ |
|  +4.4% |   +2.147 MiB | 84.7% → 85.3% | 48.4 MiB → 50.5 MiB | 3,073 → 3,210 | `chartLayouts`    | `./workload.mjs:116:24`                    |
| -17.5% | -417.234 KiB |   4.1% → 3.3% | 2.33 MiB → 1.93 MiB |     146 → 120 | `chartBreakdowns` | `./workload.mjs:39:27`                     |
|  +8.1% | +304.085 KiB |   6.4% → 6.7% | 3.68 MiB → 3.97 MiB |     235 → 254 | `join`            | `./node_modules/d3/dist/d3.min.js:2:24162` |
|    new |  +16.082 KiB |  0.0% → <0.1% |      0 B → 16.1 KiB |         0 → 1 | `node`            | `./node_modules/d3/dist/d3.min.js:2:25324` |
| +33.4% |  +16.015 KiB |          0.1% |     48 KiB → 64 KiB |         1 → 2 | `attr`            | `./node_modules/d3/dist/d3.min.js:2:25709` |

##### `(anonymous)` (`<unknown>`)

| Change |      Delta |             % |                Size |       Samples | Callee                         | Location              |
| -----: | ---------: | ------------: | ------------------: | ------------: | ------------------------------ | --------------------- |
|  +3.6% | +2.082 MiB | 99.8% → 99.9% | 57.1 MiB → 59.2 MiB | 3,628 → 3,760 | `globalThis.buildAndRetainDom` | `./workload.mjs:1:32` |

##### `(anonymous)` (`./workload.mjs:185:13`)

| Change |        Delta |      % |                Size |   Samples | Callee   | Location                                   |
| -----: | -----------: | -----: | ------------------: | --------: | -------- | ------------------------------------------ |
|  +9.2% | +336.328 KiB | 100.0% | 3.57 MiB → 3.89 MiB | 228 → 249 | `append` | `./node_modules/d3/dist/d3.min.js:2:26726` |

##### `P` (`./node_modules/d3/dist/d3.min.js:2:4565`)

| Change |    Delta |      % |              Size | Samples | Callee | Location                                  |
| -----: | -------: | -----: | ----------------: | ------: | ------ | ----------------------------------------- |
| +71.2% | +161 KiB | 100.0% | 226 KiB → 387 KiB | 14 → 24 | `F`    | `./node_modules/d3/dist/d3.min.js:2:4882` |

##### `t.forceSimulation` (`./node_modules/d3/dist/d3.min.js:2:235437`)

| Change |        Delta |              % |                Size | Samples | Callee | Location                                               |
| -----: | -----------: | -------------: | ------------------: | ------: | ------ | ------------------------------------------------------ |
| +16.4% | +176.234 KiB | 98.5% → 100.0% | 1.05 MiB → 1.22 MiB | 67 → 78 | `d`    | `./node_modules/d3/dist/d3.min.js:2:235836 → 2:235885` |

##### `F` (`./node_modules/d3/dist/d3.min.js:2:4882`)

| Change |        Delta |      % |              Size | Samples | Callee | Location                                  |
| -----: | -----------: | -----: | ----------------: | ------: | ------ | ----------------------------------------- |
| +33.3% | +112.859 KiB | 100.0% | 339 KiB → 451 KiB | 21 → 28 | `t`    | `./node_modules/d3/dist/d3.min.js:2:4909` |

##### `t` (`./node_modules/d3/dist/d3.min.js:2:4909`)

|  Change |       Delta |             % |               Size | Samples | Callee | Location                                  |
| ------: | ----------: | ------------: | -----------------: | ------: | ------ | ----------------------------------------- |
|  -40.0% | -64.187 KiB | 41.5% → 19.9% | 160 KiB → 96.3 KiB |  10 → 6 | `from` | `<unknown>`                               |
|  -12.6% | -16.296 KiB | 33.5% → 23.4% |  129 KiB → 113 KiB |   8 → 7 | `push` | `<unknown>`                               |
| removed | -16.023 KiB |   4.1% → 0.0% |       16 KiB → 0 B |   1 → 0 | `get`  | `./node_modules/d3/dist/d3.min.js:2:3756` |

##### `Gd` (`./node_modules/d3/dist/d3.min.js:2:139995`)

| Change |  Delta |             % |              Size | Samples | Callee | Location    |
| -----: | -----: | ------------: | ----------------: | ------: | ------ | ----------- |
|  +0.3% | +560 B | 14.6% → 13.8% | 194 KiB → 195 KiB |      12 | `from` | `<unknown>` |

##### `a` (`./node_modules/d3/dist/d3.min.js:2:231054`)

|  Change |       Delta |             % |                Size | Samples | Callee          | Location                                               |
| ------: | ----------: | ------------: | ------------------: | ------: | --------------- | ------------------------------------------------------ |
|  +34.4% | +35.972 KiB | 86.4% → 72.9% |   105 KiB → 141 KiB |   5 → 7 | `g`             | `./node_modules/d3/dist/d3.min.js:2:231166 → 2:231215` |
| +120.0% | +19.695 KiB | 13.6% → 18.7% | 16.4 KiB → 36.1 KiB |   1 → 2 | `Fc.visit`      | `./node_modules/d3/dist/d3.min.js:2:105700 → 2:105681` |
|     new | +16.105 KiB |   0.0% → 8.4% |      0 B → 16.1 KiB |   0 → 1 | `Fc.visitAfter` | `./node_modules/d3/dist/d3.min.js:2:106049`            |

##### `insert` (`./node_modules/d3/dist/d3.min.js:2:26864`)

| Change |       Delta |             % |         Size | Samples | Callee   | Location                                   |
| -----: | ----------: | ------------: | -----------: | ------: | -------- | ------------------------------------------ |
|    new | +48.046 KiB | 0.0% → 100.0% | 0 B → 48 KiB |   0 → 3 | `select` | `./node_modules/d3/dist/d3.min.js:2:22328` |

##### `append` (`./node_modules/d3/dist/d3.min.js:2:26726`)

| Change |       Delta |             % |                Size |   Samples | Callee        | Location                                   |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------- | ------------------------------------------ |
|  -0.2% | -17.195 KiB | 91.6% → 91.0% | 7.49 MiB → 7.48 MiB | 479 → 478 | `select`      | `./node_modules/d3/dist/d3.min.js:2:22328` |
|  +5.0% | +16.015 KiB |   3.8% → 4.0% |   320 KiB → 336 KiB |   20 → 21 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:26793` |

##### `join` (`./node_modules/d3/dist/d3.min.js:2:24162`)

|  Change |        Delta |             % |                Size |   Samples | Callee        | Location                                   |
| ------: | -----------: | ------------: | ------------------: | --------: | ------------- | ------------------------------------------ |
|   +9.2% | +336.328 KiB | 49.0% → 53.3% | 3.57 MiB → 3.89 MiB | 228 → 249 | `(anonymous)` | `./workload.mjs:185:13`                    |
|   -7.7% | -289.765 KiB | 50.8% → 46.7% | 3.69 MiB → 3.41 MiB | 236 → 218 | `append`      | `./node_modules/d3/dist/d3.min.js:2:26726` |
| removed |  -16.226 KiB |   0.2% → 0.0% |      16.2 KiB → 0 B |     1 → 0 | `merge`       | `./node_modules/d3/dist/d3.min.js:2:24384` |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:26793`)

| Change |       Delta |             % |                Size |   Samples | Callee        | Location                                   |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------- | ------------------------------------------ |
|  +1.1% | +48.109 KiB | 98.9% → 99.3% | 4.24 MiB → 4.29 MiB | 271 → 274 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:16259` |
| +94.1% | +15.554 KiB |   0.4% → 0.7% | 16.5 KiB → 32.1 KiB |     1 → 2 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:16431` |

##### `(anonymous)` (`./workload.mjs:199:25`)

| Change |       Delta |             % |         Size | Samples | Callee | Location                                    |
| -----: | ----------: | ------------: | -----------: | ------: | ------ | ------------------------------------------- |
|    new | +16.046 KiB | 0.0% → 100.0% | 0 B → 16 KiB |   0 → 1 | `i`    | `./node_modules/d3/dist/d3.min.js:2:152407` |

##### `(anonymous)` (`./workload.mjs:195:13`)

| Change |       Delta |             % |         Size | Samples | Callee | Location                                   |
| -----: | ----------: | ------------: | -----------: | ------: | ------ | ------------------------------------------ |
|    new | +16.046 KiB | 0.0% → 100.0% | 0 B → 16 KiB |   0 → 1 | `attr` | `./node_modules/d3/dist/d3.min.js:2:25709` |

##### `chartBreakdowns` (`./workload.mjs:39:27`)

| Change |        Delta |             % |               Size | Samples | Callee   | Location                                   |
| -----: | -----------: | ------------: | -----------------: | ------: | -------- | ------------------------------------------ |
| -14.5% | -144.398 KiB | 41.6% → 43.1% |  994 KiB → 849 KiB | 62 → 53 | `call`   | `./node_modules/d3/dist/d3.min.js:2:25192` |
| -33.3% |  -144.14 KiB | 18.1% → 14.6% |  432 KiB → 288 KiB | 27 → 18 | `join`   | `./node_modules/d3/dist/d3.min.js:2:24162` |
| -40.0% |  -64.187 KiB |   6.7% → 4.9% | 160 KiB → 96.3 KiB |  10 → 6 | `D`      | `./node_modules/d3/dist/d3.min.js:2:4759`  |
| -29.1% |  -32.914 KiB |   4.7% → 4.1% |   113 KiB → 80 KiB |   4 → 2 | `attr`   | `./node_modules/d3/dist/d3.min.js:2:25709` |
| -66.7% |  -32.031 KiB |   2.0% → 0.8% |    48 KiB → 16 KiB |   3 → 1 | `append` | `./node_modules/d3/dist/d3.min.js:2:26726` |

##### `Bp` (`./node_modules/d3/dist/d3.min.js:2:147443`)

|  Change |       Delta |           % |              Size | Samples | Callee | Location                                               |
| ------: | ----------: | ----------: | ----------------: | ------: | ------ | ------------------------------------------------------ |
| +150.2% | +48.093 KiB | 0.8% → 2.4% | 32 KiB → 80.1 KiB |   2 → 5 | `Ap`   | `./node_modules/d3/dist/d3.min.js:2:146413 → 2:146394` |
|     new |   +16.5 KiB | 0.0% → 0.5% |    0 B → 16.5 KiB |   0 → 1 | `max`  | `<unknown>`                                            |

##### `e` (`./node_modules/d3/dist/d3.min.js:2:147904`)

| Change |        Delta |      % |                Size |   Samples | Callee | Location                                               |
| -----: | -----------: | -----: | ------------------: | --------: | ------ | ------------------------------------------------------ |
| -10.2% | -384.011 KiB | 100.0% | 3.69 MiB → 3.32 MiB | 236 → 212 | `Bp`   | `./node_modules/d3/dist/d3.min.js:2:147464 → 2:147443` |

##### `l` (`./node_modules/d3/dist/d3.min.js:2:269888`)

| Change |        Delta |      % |                Size |   Samples | Callee | Location                                               |
| -----: | -----------: | -----: | ------------------: | --------: | ------ | ------------------------------------------------------ |
| -10.2% | -384.011 KiB | 100.0% | 3.69 MiB → 3.32 MiB | 236 → 212 | `e`    | `./node_modules/d3/dist/d3.min.js:2:147925 → 2:147904` |

##### `s` (`./node_modules/d3/dist/d3.min.js:2:269797`)

| Change |        Delta |      % |                Size |   Samples | Callee       | Location                                               |
| -----: | -----------: | -----: | ------------------: | --------: | ------------ | ------------------------------------------------------ |
| -10.2% | -384.011 KiB | 100.0% | 3.69 MiB → 3.32 MiB | 236 → 212 | `eachBefore` | `./node_modules/d3/dist/d3.min.js:2:141773 → 2:141754` |

##### `eachBefore` (`./node_modules/d3/dist/d3.min.js:2:141754`)

| Change |        Delta |              % |                Size |   Samples | Callee        | Location                                               |
| -----: | -----------: | -------------: | ------------------: | --------: | ------------- | ------------------------------------------------------ |
| -10.2% | -384.011 KiB | 100.0% → 99.5% | 3.69 MiB → 3.32 MiB | 236 → 212 | `l`           | `./node_modules/d3/dist/d3.min.js:2:269815 → 2:269888` |
|    new |  +16.031 KiB |    0.0% → 0.5% |        0 B → 16 KiB |     0 → 1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:142656`            |

##### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:78140`)

| Change |       Delta |             % |              Size | Samples | Callee | Location    |
| -----: | ----------: | ------------: | ----------------: | ------: | ------ | ----------- |
| -11.6% | -80.156 KiB | 63.3% → 70.4% | 689 KiB → 609 KiB | 43 → 38 | `push` | `<unknown>` |

##### `h` (`./node_modules/d3/dist/d3.min.js:2:12208`)

|  Change |       Delta |             % |               Size | Samples | Callee      | Location                                               |
| ------: | ----------: | ------------: | -----------------: | ------: | ----------- | ------------------------------------------------------ |
|  -10.6% | -80.156 KiB | 20.9% → 19.5% |  753 KiB → 673 KiB | 47 → 42 | `I_.s.copy` | `./node_modules/d3/dist/d3.min.js:2:173715 → 2:173694` |
|   -6.2% | -64.062 KiB | 28.9% → 28.4% | 1.02 MiB → 977 KiB | 65 → 61 | `select`    | `./node_modules/d3/dist/d3.min.js:2:22328`             |
|  -13.6% | -48.011 KiB |   9.8% → 8.8% |  353 KiB → 305 KiB | 22 → 19 | `n.copy`    | `./node_modules/d3/dist/d3.min.js:2:257518 → 2:257567` |
|  -12.5% | -32.023 KiB |   7.1% → 6.5% |  256 KiB → 224 KiB | 16 → 14 | `n.copy`    | `./node_modules/d3/dist/d3.min.js:2:257398 → 2:257447` |
| +199.3% | +31.992 KiB |   0.4% → 1.4% |  16.1 KiB → 48 KiB |   1 → 3 | `insert`    | `./node_modules/d3/dist/d3.min.js:2:26864`             |

##### `call` (`./node_modules/d3/dist/d3.min.js:2:25192`)

| Change |        Delta |              % |                Size |   Samples | Callee        | Location                                   |
| -----: | -----------: | -------------: | ------------------: | --------: | ------------- | ------------------------------------------ |
|  -4.5% | -161.742 KiB | 100.0% → 99.5% | 3.52 MiB → 3.36 MiB | 225 → 214 | `h`           | `./node_modules/d3/dist/d3.min.js:2:12208` |
|    new |  +16.046 KiB |    0.0% → 0.5% |        0 B → 16 KiB |     0 → 1 | `(anonymous)` | `./workload.mjs:195:13`                    |

##### `from` (`<unknown>`)

| Change |       Delta |             % |               Size | Samples | Callee | Location    |
| -----: | ----------: | ------------: | -----------------: | ------: | ------ | ----------- |
| -40.0% | -64.187 KiB | 33.2% → 28.4% | 160 KiB → 96.3 KiB |  10 → 6 | `next` | `<unknown>` |

##### `Sg` (`./node_modules/d3/dist/d3.min.js:2:155611`)

| Change |        Delta |      % |               Size | Samples | Callee | Location                                               |
| -----: | -----------: | -----: | -----------------: | ------: | ------ | ------------------------------------------------------ |
| -63.6% | -112.218 KiB | 100.0% | 176 KiB → 64.2 KiB |  11 → 4 | `Ag`   | `./node_modules/d3/dist/d3.min.js:2:154800 → 2:154779` |

##### `f` (`./node_modules/d3/dist/d3.min.js:2:233452`)

|  Change |       Delta |            % |           Size | Samples | Callee     | Location                                    |
| ------: | ----------: | -----------: | -------------: | ------: | ---------- | ------------------------------------------- |
| removed | -75.757 KiB | 69.2% → 0.0% | 75.8 KiB → 0 B |   4 → 0 | `h`        | `./node_modules/d3/dist/d3.min.js:2:233884` |
| removed | -17.765 KiB | 16.2% → 0.0% | 17.8 KiB → 0 B |   1 → 0 | `Fc.visit` | `./node_modules/d3/dist/d3.min.js:2:105700` |
| removed | -16.015 KiB | 14.6% → 0.0% |   16 KiB → 0 B |   1 → 0 | `$c`       | `./node_modules/d3/dist/d3.min.js:2:102069` |

##### `I_.s.copy` (`./node_modules/d3/dist/d3.min.js:2:173694`)

| Change |       Delta |             % |              Size | Samples | Callee | Location                                               |
| -----: | ----------: | ------------: | ----------------: | ------: | ------ | ------------------------------------------------------ |
|  -9.1% |  -64.14 KiB | 93.6% → 95.2% | 705 KiB → 641 KiB | 44 → 40 | `I_`   | `./node_modules/d3/dist/d3.min.js:2:173087 → 2:173066` |
| -33.3% | -16.015 KiB |   6.4% → 4.8% |   48 KiB → 32 KiB |   3 → 2 | `Tg`   | `./node_modules/d3/dist/d3.min.js:2:154671 → 2:154650` |

##### `Tg` (`./node_modules/d3/dist/d3.min.js:2:154650`)

|  Change |       Delta |             % |            Size | Samples | Callee        | Location                                               |
| ------: | ----------: | ------------: | --------------: | ------: | ------------- | ------------------------------------------------------ |
| removed | -48.046 KiB |  37.5% → 0.0% |    48 KiB → 0 B |   3 → 0 | `Fg.e.domain` | `./node_modules/d3/dist/d3.min.js:2:157350`            |
|  -66.7% | -32.031 KiB | 37.5% → 33.3% | 48 KiB → 16 KiB |   3 → 1 | `Ag.l.range`  | `./node_modules/d3/dist/d3.min.js:2:155280 → 2:155259` |
|  -50.0% | -16.015 KiB | 25.0% → 33.3% | 32 KiB → 16 KiB |   2 → 1 | `I_.s.domain` | `./node_modules/d3/dist/d3.min.js:2:173394 → 2:173373` |
|     new | +16.015 KiB |  0.0% → 33.3% |    0 B → 16 KiB |   0 → 1 | `Ag.l.domain` | `./node_modules/d3/dist/d3.min.js:2:155179`            |

##### `D` (`./node_modules/d3/dist/d3.min.js:2:4759`)

| Change |       Delta |             % |                Size | Samples | Callee | Location                                  |
| -----: | ----------: | ------------: | ------------------: | ------: | ------ | ----------------------------------------- |
| -42.9% |  -48.14 KiB | 70.0% → 66.7% |  112 KiB → 64.2 KiB |   7 → 4 | `F`    | `./node_modules/d3/dist/d3.min.js:2:4882` |
| -33.3% | -16.046 KiB | 30.0% → 33.3% | 48.1 KiB → 32.1 KiB |   3 → 2 | `t`    | `./node_modules/d3/dist/d3.min.js:2:4909` |

##### `I_` (`./node_modules/d3/dist/d3.min.js:2:173066`)

|  Change |        Delta |             % |              Size | Samples | Callee   | Location                                               |
| ------: | -----------: | ------------: | ----------------: | ------: | -------- | ------------------------------------------------------ |
|  -40.9% | -144.218 KiB | 50.0% → 32.5% | 352 KiB → 208 KiB | 22 → 13 | `format` | `./node_modules/d3/dist/d3.min.js:2:167331 → 2:167310` |
|  -83.3% |  -80.187 KiB |  13.6% → 2.5% | 96.2 KiB → 16 KiB |   6 → 1 | `Sg`     | `./node_modules/d3/dist/d3.min.js:2:155632 → 2:155611` |
| +300.2% |  +48.125 KiB |  2.3% → 10.0% | 16 KiB → 64.2 KiB |   1 → 4 | `Ag`     | `./node_modules/d3/dist/d3.min.js:2:154800 → 2:154779` |

##### `Lu` (`./node_modules/d3/dist/d3.min.js:2:94618`)

|  Change |       Delta |              % |                Size | Samples | Callee  | Location                                             |
| ------: | ----------: | -------------: | ------------------: | ------: | ------- | ---------------------------------------------------- |
|  -50.4% | -33.433 KiB | 80.5% → 100.0% | 66.4 KiB → 32.9 KiB |   4 → 2 | `Su`    | `./node_modules/d3/dist/d3.min.js:2:82035 → 2:82034` |
| removed | -16.027 KiB |   19.5% → 0.0% |        16 KiB → 0 B |   1 → 0 | `_init` | `./node_modules/d3/dist/d3.min.js:2:94865`           |

##### `Ag.l.domain` (`./node_modules/d3/dist/d3.min.js:2:155179`)

| Change |       Delta |      % |              Size | Samples | Callee | Location    |
| -----: | ----------: | -----: | ----------------: | ------: | ------ | ----------- |
| -60.0% | -48.046 KiB | 100.0% | 80.1 KiB → 32 KiB |   5 → 2 | `from` | `<unknown>` |

##### `Fg.e.domain` (`./node_modules/d3/dist/d3.min.js:2:157350`)

|  Change |       Delta |             % |         Size | Samples | Callee        | Location                                    |
| ------: | ----------: | ------------: | -----------: | ------: | ------------- | ------------------------------------------- |
| removed | -48.046 KiB | 100.0% → 0.0% | 48 KiB → 0 B |   3 → 0 | `Ag.l.domain` | `./node_modules/d3/dist/d3.min.js:2:155200` |

##### `forEach` (`<unknown>`)

| Change |       Delta |             % |              Size | Samples | Callee        | Location                                               |
| -----: | ----------: | ------------: | ----------------: | ------: | ------------- | ------------------------------------------------------ |
| -66.7% | -64.031 KiB | 29.4% → 11.6% |   96 KiB → 32 KiB |   6 → 2 | `p`           | `./node_modules/d3/dist/d3.min.js:2:77577 → 2:77576`   |
|  -9.4% | -21.734 KiB | 70.6% → 75.4% | 231 KiB → 209 KiB | 12 → 11 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:235702 → 2:235751` |

##### `(anonymous)` (`./workload.mjs:11:29`)

| Change | Delta |              % |                Size | Samples | Callee        | Location                                               |
| -----: | ----: | -------------: | ------------------: | ------: | ------------- | ------------------------------------------------------ |
|  +0.4% | +72 B | 50.3% → 100.0% | 16.2 KiB → 16.3 KiB |       1 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:166138 → 2:166117` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes allocated in their leaf frame.

Common call stack: `(anonymous)`

|  Change |        Delta |             % |                Size |       Samples | Call stack                                                                                                                                                                                                                                                                                   |
| ------: | -----------: | ------------: | ------------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +6.6% |   +2.372 MiB | 61.7% → 63.7% | 35.9 MiB → 38.3 MiB | 2,282 → 2,433 | `p` (`./node_modules/d3/dist/d3.min.js:2:77576`) ← `(anonymous)` (2:77113) ← `o` (2:77004) ← `(anonymous)` (2:76982) ← `map` ← `i` (`./node_modules/d3/dist/d3.min.js:2:76807`) ← `d` (2:223550) ← `chartLayouts` (`./workload.mjs:116:24`) ← `globalThis.buildAndRetainDom` (1:32)          |
| +239.2% |  +193.32 KiB |   0.1% → 0.4% |  80.8 KiB → 274 KiB |        5 → 17 | `t` (`./node_modules/d3/dist/d3.min.js:2:4909`) ← `F` (2:4882) ← `P` (2:4565) ← `chartLayouts` (`./workload.mjs:116:24`) ← `globalThis.buildAndRetainDom` (1:32)                                                                                                                             |
|  +40.7% |  +176.25 KiB |   0.7% → 1.0% |   433 KiB → 609 KiB |       27 → 38 | `o` (`./node_modules/d3/dist/d3.min.js:2:77004`) ← `(anonymous)` (2:76982) ← `map` ← `i` (`./node_modules/d3/dist/d3.min.js:2:76807`) ← `d` (2:223550) ← `chartLayouts` (`./workload.mjs:116:24`) ← `globalThis.buildAndRetainDom` (1:32)                                                    |
|  +16.4% | +176.234 KiB |   1.8% → 2.0% | 1.05 MiB → 1.22 MiB |       67 → 78 | `d` (`./node_modules/d3/dist/d3.min.js:2:235885`) ← `t.forceSimulation` (2:235437) ← `chartLayouts` (`./workload.mjs:116:24`) ← `globalThis.buildAndRetainDom` (1:32)                                                                                                                        |
|   +8.3% | +128.125 KiB |   2.6% → 2.7% |  1.5 MiB → 1.63 MiB |      96 → 104 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `select` (2:22328) ← `append` (2:26726) ← `(anonymous)` (`./workload.mjs:185:13`) ← `join` (`./node_modules/d3/dist/d3.min.js:2:24162`) ← `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)      |
|  +46.6% |  +112.14 KiB |   0.4% → 0.6% |   240 KiB → 353 KiB |       15 → 22 | `I_` (`./node_modules/d3/dist/d3.min.js:2:173066`) ← `I_.s.copy` (2:173694) ← `h` (2:12208) ← `call` (2:25192) ← `chartBreakdowns` (`./workload.mjs:39:27`) ← `globalThis.buildAndRetainDom` (1:32)                                                                                          |
| +116.7% | +112.109 KiB |   0.2% → 0.3% |  96.1 KiB → 208 KiB |        6 → 13 | `append` (`./node_modules/d3/dist/d3.min.js:2:26726`) ← `(anonymous)` (`./workload.mjs:185:13`) ← `join` (`./node_modules/d3/dist/d3.min.js:2:24162`) ← `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)                                                                               |
| +100.0% |  +96.093 KiB |   0.2% → 0.3% |  96.1 KiB → 192 KiB |        6 → 12 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `append` (2:26726) ← `(anonymous)` (`./workload.mjs:185:13`) ← `join` (`./node_modules/d3/dist/d3.min.js:2:24162`) ← `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)                           |
|   +7.0% |  +80.179 KiB |   1.9% → 2.0% | 1.11 MiB → 1.19 MiB |       71 → 76 | `Gd` (`./node_modules/d3/dist/d3.min.js:2:139995`) ← `chartLayouts` (`./workload.mjs:116:24`) ← `globalThis.buildAndRetainDom` (1:32)                                                                                                                                                        |
|   +5.7% |  +80.078 KiB |   2.3% → 2.4% | 1.36 MiB → 1.44 MiB |       87 → 92 | `select` (`./node_modules/d3/dist/d3.min.js:2:22328`) ← `append` (2:26726) ← `join` (2:24162) ← `chartLayouts` (`./workload.mjs:116:24`) ← `globalThis.buildAndRetainDom` (1:32)                                                                                                             |
|  +57.2% |  +66.226 KiB |   0.2% → 0.3% |   116 KiB → 182 KiB |        7 → 11 | `push` ← `p` (`./node_modules/d3/dist/d3.min.js:2:77576`) ← `(anonymous)` (2:77113) ← `o` (2:77004) ← `(anonymous)` (2:76982) ← `map` ← `i` (`./node_modules/d3/dist/d3.min.js:2:76807`) ← `d` (2:223550) ← `chartLayouts` (`./workload.mjs:116:24`) ← `globalThis.buildAndRetainDom` (1:32) |
| +300.2% |  +48.125 KiB |  <0.1% → 0.1% |   16 KiB → 64.2 KiB |         1 → 4 | `Ag` (`./node_modules/d3/dist/d3.min.js:2:154779`) ← `I_` (2:173066) ← `I_.s.copy` (2:173694) ← `h` (2:12208) ← `call` (2:25192) ← `chartBreakdowns` (`./workload.mjs:39:27`) ← `globalThis.buildAndRetainDom` (1:32)                                                                        |
| +150.2% |  +48.093 KiB |          0.1% |   32 KiB → 80.1 KiB |         2 → 5 | `Ap` (`./node_modules/d3/dist/d3.min.js:2:146394`) ← `Bp` (2:147443) ← `e` (2:147904) ← `l` (2:269888) ← `eachBefore` (2:141754) ← `s` (2:269797) ← `chartLayouts` (`./workload.mjs:116:24`) ← `globalThis.buildAndRetainDom` (1:32)                                                         |
| +300.0% |  +48.062 KiB |  <0.1% → 0.1% |   16 KiB → 64.1 KiB |         1 → 4 | `map` ← `chartLayouts` (`./workload.mjs:116:24`) ← `globalThis.buildAndRetainDom` (1:32)                                                                                                                                                                                                     |
|  +11.5% |  +48.046 KiB |   0.7% → 0.8% |   416 KiB → 464 KiB |       26 → 29 | `select` (`./node_modules/d3/dist/d3.min.js:2:22328`) ← `append` (2:26726) ← `h` (2:12208) ← `call` (2:25192) ← `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)                                                                                                                       |
|     new |  +43.878 KiB |   0.0% → 0.1% |      0 B → 43.9 KiB |         0 → 2 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:18176`) ← `attr` (2:25709) ← `h` (2:12208) ← `call` (2:25192) ← `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)                                                                                                                    |
|     new |  +36.156 KiB |   0.0% → 0.1% |      0 B → 36.2 KiB |         0 → 2 | `forEach` ← `o` (`./node_modules/d3/dist/d3.min.js:2:77004`) ← `(anonymous)` (2:76982) ← `map` ← `i` (`./node_modules/d3/dist/d3.min.js:2:76807`) ← `d` (2:223550) ← `chartLayouts` (`./workload.mjs:116:24`) ← `globalThis.buildAndRetainDom` (1:32)                                        |
|  +34.4% |  +35.972 KiB |          0.2% |   105 KiB → 141 KiB |         5 → 7 | `g` (`./node_modules/d3/dist/d3.min.js:2:231215`) ← `a` (2:231054) ← `(anonymous)` (2:235751) ← `forEach` ← `h` (`./node_modules/d3/dist/d3.min.js:2:235656`) ← `chartLayouts` (`./workload.mjs:116:24`) ← `globalThis.buildAndRetainDom` (1:32)                                             |
|  +66.6% |  +32.144 KiB |          0.1% | 48.3 KiB → 80.4 KiB |         3 → 5 | `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)                                                                                                                                                                                                                                       |
| +200.3% |  +32.062 KiB |  <0.1% → 0.1% |   16 KiB → 48.1 KiB |         1 → 3 | `wg` (`./node_modules/d3/dist/d3.min.js:2:154259`) ← `(anonymous)` (2:11875) ← `(anonymous)` (2:13444) ← `(anonymous)` (2:18176) ← `attr` (2:25709) ← `h` (2:12208) ← `call` (2:25192) ← `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`)                                              |

### Improvements

Call stacks with the largest decrease in bytes allocated in their leaf frame.

Common call stack: `globalThis.buildAndRetainDom` (`./workload.mjs:1:32`) ← `(anonymous)`

|  Change |        Delta |            % |                Size |   Samples | Call stack                                                                                                                                                                                                                                                                                 |
| ------: | -----------: | -----------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  -12.1% | -448.605 KiB |  6.2% → 5.3% | 3.61 MiB → 3.18 MiB | 231 → 203 | `Bp` (`./node_modules/d3/dist/d3.min.js:2:147443`) ← `e` (2:147904) ← `l` (2:269888) ← `eachBefore` (2:141754) ← `s` (2:269797) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                 |
|  -64.7% | -176.171 KiB |  0.5% → 0.2% |  272 KiB → 96.1 KiB |    17 → 6 | `select` (`./node_modules/d3/dist/d3.min.js:2:22328`) ← `append` (2:26726) ← `join` (2:24162) ← `chartBreakdowns` (`./workload.mjs:39:27`)                                                                                                                                                 |
|  -40.9% | -144.218 KiB |  0.6% → 0.3% |   352 KiB → 208 KiB |   22 → 13 | `format` (`./node_modules/d3/dist/d3.min.js:2:167310`) ← `I_` (2:173066) ← `I_.s.copy` (2:173694) ← `h` (2:12208) ← `call` (2:25192) ← `chartBreakdowns` (`./workload.mjs:39:27`)                                                                                                          |
|  -36.0% | -144.093 KiB |  0.7% → 0.4% |   400 KiB → 256 KiB |   25 → 16 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:78140`) ← `p` (2:77576) ← `(anonymous)` (2:77113) ← `o` (2:77004) ← `(anonymous)` (2:76982) ← `map` ← `i` (`./node_modules/d3/dist/d3.min.js:2:76807`) ← `d` (2:223550) ← `chartLayouts` (`./workload.mjs:116:24`)                      |
|  -42.9% |  -96.093 KiB |  0.4% → 0.2% |   224 KiB → 128 KiB |    14 → 8 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `append` (2:26726) ← `join` (2:24162) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                    |
|  -35.3% |  -96.093 KiB |  0.5% → 0.3% |   272 KiB → 176 KiB |   17 → 11 | `append` (`./node_modules/d3/dist/d3.min.js:2:26726`) ← `join` (2:24162) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                                                                        |
|  -83.3% |  -80.187 KiB | 0.2% → <0.1% |   96.2 KiB → 16 KiB |     6 → 1 | `Ag` (`./node_modules/d3/dist/d3.min.js:2:154779`) ← `Sg` (2:155611) ← `I_` (2:173066) ← `I_.s.copy` (2:173694) ← `h` (2:12208) ← `call` (2:25192) ← `chartBreakdowns` (`./workload.mjs:39:27`)                                                                                            |
|  -11.6% |  -80.156 KiB |  1.2% → 1.0% |   689 KiB → 609 KiB |   43 → 38 | `push` ← `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:78140`) ← `p` (2:77576) ← `(anonymous)` (2:77113) ← `o` (2:77004) ← `(anonymous)` (2:76982) ← `map` ← `i` (`./node_modules/d3/dist/d3.min.js:2:76807`) ← `d` (2:223550) ← `chartLayouts` (`./workload.mjs:116:24`)             |
| removed |  -75.757 KiB |  0.1% → 0.0% |      75.8 KiB → 0 B |     4 → 0 | `h` (`./node_modules/d3/dist/d3.min.js:2:233884`) ← `f` (2:233452) ← `(anonymous)` (2:235702) ← `forEach` ← `h` (`./node_modules/d3/dist/d3.min.js:2:235607`) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                   |
|  -11.4% |  -64.062 KiB |  0.9% → 0.8% |   561 KiB → 496 KiB |   35 → 31 | `select` (`./node_modules/d3/dist/d3.min.js:2:22328`) ← `h` (2:12208) ← `call` (2:25192)                                                                                                                                                                                                   |
|  -66.7% |  -64.031 KiB |  0.2% → 0.1% |     96 KiB → 32 KiB |     6 → 2 | `p` (`./node_modules/d3/dist/d3.min.js:2:77576`) ← `forEach` ← `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:77113`) ← `o` (2:77004) ← `(anonymous)` (2:76982) ← `map` ← `i` (`./node_modules/d3/dist/d3.min.js:2:76807`) ← `d` (2:223550) ← `chartLayouts` (`./workload.mjs:116:24`) |
|  -42.9% |   -48.14 KiB |  0.2% → 0.1% |  112 KiB → 64.2 KiB |     7 → 4 | `next` ← `from` ← `t` (`./node_modules/d3/dist/d3.min.js:2:4909`) ← `F` (2:4882) ← `D` (2:4759) ← `chartBreakdowns` (`./workload.mjs:39:27`)                                                                                                                                               |
|  -75.0% |  -48.046 KiB | 0.1% → <0.1% |   64.1 KiB → 16 KiB |     4 → 1 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `select` (2:22328) ← `append` (2:26726) ← `join` (2:24162)                                                                                                                                          |
| removed |  -48.046 KiB |  0.1% → 0.0% |        48 KiB → 0 B |     3 → 0 | `from` ← `Ag.l.domain` (`./node_modules/d3/dist/d3.min.js:2:155200`) ← `Fg.e.domain` (2:157350) ← `Tg` (2:154671) ← `n.copy` (2:257518) ← `h` (2:12208) ← `call` (2:25192)                                                                                                                 |
|  -67.0% |  -33.363 KiB | 0.1% → <0.1% | 49.8 KiB → 16.5 KiB |     3 → 1 | `update` (`./node_modules/d3/dist/d3.min.js:2:82523`) ← `Su` (2:82034) ← `Lu` (2:94618) ← `from` (2:94282) ← `chartLayouts` (`./workload.mjs:116:24`)                                                                                                                                      |
|  -40.0% |  -32.062 KiB |         0.1% | 80.2 KiB → 48.1 KiB |     5 → 3 | `Ag` (`./node_modules/d3/dist/d3.min.js:2:154779`) ← `t` (2:257411) ← `n.copy` (2:257447) ← `h` (2:12208) ← `call` (2:25192)                                                                                                                                                               |
| removed |  -32.031 KiB |  0.1% → 0.0% |        32 KiB → 0 B |     2 → 0 | `from` ← `Ag.l.range` (`./node_modules/d3/dist/d3.min.js:2:155280`) ← `Tg` (2:154671) ← `n.copy` (2:257398) ← `h` (2:12208) ← `call` (2:25192)                                                                                                                                             |
| removed |  -32.031 KiB |  0.1% → 0.0% |        32 KiB → 0 B |     2 → 0 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `select` (2:22328) ← `append` (2:26726)                                                                                                                                                             |
|  -40.0% |  -32.031 KiB |         0.1% | 80.2 KiB → 48.1 KiB |     5 → 3 | `Ag` (`./node_modules/d3/dist/d3.min.js:2:154779`) ← `Sg` (2:155611) ← `t` (2:257411) ← `n.copy` (2:257447) ← `h` (2:12208) ← `call` (2:25192)                                                                                                                                             |
|  -66.7% |  -32.031 KiB | 0.1% → <0.1% |     48 KiB → 16 KiB |     3 → 1 | `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:16259`) ← `(anonymous)` (2:26793) ← `select` (2:22328) ← `append` (2:26726) ← `chartBreakdowns` (`./workload.mjs:39:27`)                                                                                                                |

# Heap snapshot diff

Allocated 3.15 MiB → 3.03 MiB (-122.748 KiB, -3.8%) across 67,919 → 67,887 nodes and 265,376 → 264,933 edges.

| Category            | Change |        Delta |             % |                Size |           Nodes |
| ------------------- | -----: | -----------: | ------------: | ------------------: | --------------: |
| Native              | -10.2% | -102.478 KiB | 31.3% → 29.2% | 1,009 KiB → 907 KiB |   6,015 → 6,014 |
| Code                |  -2.6% |  -19.566 KiB | 23.3% → 23.6% |   752 KiB → 732 KiB | 17,311 → 17,296 |
| Internal            |    ~0% |        -64 B | 12.2% → 12.7% |             393 KiB | 10,808 → 10,803 |
| Array               |  -0.1% |       -220 B | 10.1% → 10.5% |   326 KiB → 325 KiB |   6,704 → 6,702 |
| String              |  +0.1% |       +244 B |   7.6% → 8.0% |             247 KiB | 13,100 → 13,110 |
| Object shape        |  -0.1% |       -232 B |   6.9% → 7.2% |   224 KiB → 223 KiB |   3,784 → 3,780 |
| Function            |  -0.2% |       -284 B |   4.4% → 4.6% |             143 KiB |   4,945 → 4,936 |
| Object              |  -0.1% |       -152 B |   3.5% → 3.6% |             112 KiB |   2,730 → 2,726 |
| Number              |  -0.1% |        -12 B |   0.5% → 0.6% |            17.5 KiB |   2,172 → 2,170 |
| Concatenated string |   0.0% |          0 B |          0.2% |            5.49 KiB |             281 |
| Regular expression  |   0.0% |          0 B |         <0.1% |               588 B |              21 |
| Symbol              |   0.0% |          0 B |         <0.1% |                16 B |              17 |
| Synthetic           |      — |          0 B |          0.0% |                 0 B |              31 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

#### Regressions

Constructors with the largest increase in self size.

| Change |  Delta |             % |       Size | Instances | Constructor                   | Location                                  |
| -----: | -----: | ------------: | ---------: | --------: | ----------------------------- | ----------------------------------------- |
|    ~0% | +146 B | 17.2% → 17.8% |    554 KiB |        47 | `system / ExternalStringData` | `<unknown>`                               |
|    new |  +56 B |  0.0% → <0.1% | 0 B → 56 B |     0 → 1 | `ww`                          | `node_modules/d3/dist/d3.min.js:2:216042` |

##### Native

| Change |  Delta |             % |    Size | Instances | Constructor                   | Location    |
| -----: | -----: | ------------: | ------: | --------: | ----------------------------- | ----------- |
|    ~0% | +146 B | 17.2% → 17.8% | 554 KiB |        47 | `system / ExternalStringData` | `<unknown>` |

##### Object

| Change | Delta |            % |       Size | Instances | Constructor | Location                                  |
| -----: | ----: | -----------: | ---------: | --------: | ----------- | ----------------------------------------- |
|    new | +56 B | 0.0% → <0.1% | 0 B → 56 B |     0 → 1 | `ww`        | `node_modules/d3/dist/d3.min.js:2:216042` |

#### Improvements

Constructors with the largest decrease in self size.

|  Change |        Delta |            % |                Size |     Instances | Constructor                  | Location                                  |
| ------: | -----------: | -----------: | ------------------: | ------------: | ---------------------------- | ----------------------------------------- |
|  -96.7% | -102.621 KiB |  3.3% → 0.1% |  106 KiB → 3.47 KiB |        10 → 9 | `system / JSArrayBufferData` | `<unknown>`                               |
|   -0.7% |       -100 B |         0.5% | 14.8 KiB → 14.7 KiB |     429 → 426 | `system / Context`           | `<unknown>`                               |
| removed |        -60 B | <0.1% → 0.0% |          60 B → 0 B |         1 → 0 | `Float32Array`               | `<unknown>`                               |
| removed |        -56 B | <0.1% → 0.0% |          56 B → 0 B |         1 → 0 | `xw`                         | `node_modules/d3/dist/d3.min.js:2:215993` |
|   -7.3% |        -52 B |        <0.1% |       708 B → 656 B |       15 → 14 | `ArrayBuffer`                | `<unknown>`                               |
|     ~0% |        -16 B |  1.8% → 1.9% |              58 KiB | 3,706 → 3,705 | `Array`                      | `<unknown>`                               |

##### Native

| Change |        Delta |           % |               Size | Instances | Constructor                  | Location    |
| -----: | -----------: | ----------: | -----------------: | --------: | ---------------------------- | ----------- |
| -96.7% | -102.621 KiB | 3.3% → 0.1% | 106 KiB → 3.47 KiB |    10 → 9 | `system / JSArrayBufferData` | `<unknown>` |

##### Object

|  Change |  Delta |            % |                Size | Instances | Constructor        | Location                                  |
| ------: | -----: | -----------: | ------------------: | --------: | ------------------ | ----------------------------------------- |
|   -0.7% | -100 B |         0.5% | 14.8 KiB → 14.7 KiB | 429 → 426 | `system / Context` | `<unknown>`                               |
| removed |  -56 B | <0.1% → 0.0% |          56 B → 0 B |     1 → 0 | `xw`               | `node_modules/d3/dist/d3.min.js:2:215993` |
|   -7.3% |  -52 B |        <0.1% |       708 B → 656 B |   15 → 14 | `ArrayBuffer`      | `<unknown>`                               |

##### Array

|  Change | Delta |            % |       Size |     Instances | Constructor    | Location    |
| ------: | ----: | -----------: | ---------: | ------------: | -------------- | ----------- |
| removed | -60 B | <0.1% → 0.0% | 60 B → 0 B |         1 → 0 | `Float32Array` | `<unknown>` |
|     ~0% | -16 B |  1.8% → 1.9% |     58 KiB | 3,706 → 3,705 | `Array`        | `<unknown>` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Regressions

Constructors with the largest increase in retained size.

|  Change |       Delta |             % |                Size |     Instances | Constructor                       | Location                                  |
| ------: | ----------: | ------------: | ------------------: | ------------: | --------------------------------- | ----------------------------------------- |
| +136.7% | +885.71 KiB | 20.1% → 49.4% |   648 KiB → 1.5 MiB |             1 | `Window / http://127.0.0.1:52789` | `<unknown>`                               |
|   +0.2% |  +2.585 KiB | 33.7% → 35.1% | 1.06 MiB → 1.07 MiB |         1,723 | `Object`                          | `<unknown>`                               |
|   +0.5% |  +2.308 KiB | 14.7% → 15.3% |   474 KiB → 476 KiB |           160 | `SVGGElement`                     | `<unknown>`                               |
|   +2.2% |  +2.308 KiB |   3.2% → 3.4% |   103 KiB → 105 KiB |            37 | `SVGPathElement`                  | `<unknown>`                               |
|   +0.5% |  +2.308 KiB | 14.9% → 15.5% |   480 KiB → 483 KiB |             4 | `SVGSVGElement`                   | `<unknown>`                               |
|   +0.1% |      +808 B | 18.3% → 19.1% |   592 KiB → 593 KiB | 3,706 → 3,705 | `Array`                           | `<unknown>`                               |
|     new |      +232 B |  0.0% → <0.1% |         0 B → 232 B |         0 → 1 | `ww`                              | `node_modules/d3/dist/d3.min.js:2:216042` |
|     ~0% |      +146 B | 17.2% → 17.8% |             554 KiB |            47 | `system / ExternalStringData`     | `<unknown>`                               |
|   +0.1% |       +40 B |   2.3% → 2.4% |            74.2 KiB |            10 | `Window`                          | `<unknown>`                               |

##### Native

| Change |      Delta |             % |              Size | Instances | Constructor                   | Location    |
| -----: | ---------: | ------------: | ----------------: | --------: | ----------------------------- | ----------- |
|  +0.5% | +2.308 KiB | 14.7% → 15.3% | 474 KiB → 476 KiB |       160 | `SVGGElement`                 | `<unknown>` |
|  +2.2% | +2.308 KiB |   3.2% → 3.4% | 103 KiB → 105 KiB |        37 | `SVGPathElement`              | `<unknown>` |
|  +0.5% | +2.308 KiB | 14.9% → 15.5% | 480 KiB → 483 KiB |         4 | `SVGSVGElement`               | `<unknown>` |
|    ~0% |     +146 B | 17.2% → 17.8% |           554 KiB |        47 | `system / ExternalStringData` | `<unknown>` |
|  +0.1% |      +40 B |   2.3% → 2.4% |          74.2 KiB |        10 | `Window`                      | `<unknown>` |

##### Object

|  Change |       Delta |             % |                Size | Instances | Constructor                       | Location                                  |
| ------: | ----------: | ------------: | ------------------: | --------: | --------------------------------- | ----------------------------------------- |
| +136.7% | +885.71 KiB | 20.1% → 49.4% |   648 KiB → 1.5 MiB |         1 | `Window / http://127.0.0.1:52789` | `<unknown>`                               |
|   +0.2% |  +2.585 KiB | 33.7% → 35.1% | 1.06 MiB → 1.07 MiB |     1,723 | `Object`                          | `<unknown>`                               |
|     new |      +232 B |  0.0% → <0.1% |         0 B → 232 B |     0 → 1 | `ww`                              | `node_modules/d3/dist/d3.min.js:2:216042` |

##### Array

| Change |  Delta |             % |              Size |     Instances | Constructor | Location    |
| -----: | -----: | ------------: | ----------------: | ------------: | ----------- | ----------- |
|  +0.1% | +808 B | 18.3% → 19.1% | 592 KiB → 593 KiB | 3,706 → 3,705 | `Array`     | `<unknown>` |

#### Improvements

Constructors with the largest decrease in retained size.

|  Change |        Delta |             % |               Size | Instances | Constructor                  | Location                                  |
| ------: | -----------: | ------------: | -----------------: | --------: | ---------------------------- | ----------------------------------------- |
|  -22.9% |  -103.16 KiB | 13.9% → 11.2% |  450 KiB → 347 KiB | 429 → 426 | `system / Context`           | `<unknown>`                               |
| removed |  -102.73 KiB |   3.2% → 0.0% |      103 KiB → 0 B |     1 → 0 | `Float32Array`               | `<unknown>`                               |
|  -94.8% | -102.671 KiB |   3.4% → 0.2% |  108 KiB → 5.6 KiB |   15 → 14 | `ArrayBuffer`                | `<unknown>`                               |
|  -96.7% | -102.621 KiB |   3.3% → 0.1% | 106 KiB → 3.47 KiB |    10 → 9 | `system / JSArrayBufferData` | `<unknown>`                               |
| removed |       -232 B |  <0.1% → 0.0% |        232 B → 0 B |     1 → 0 | `xw`                         | `node_modules/d3/dist/d3.min.js:2:215993` |

##### Native

| Change |        Delta |           % |               Size | Instances | Constructor                  | Location    |
| -----: | -----------: | ----------: | -----------------: | --------: | ---------------------------- | ----------- |
| -96.7% | -102.621 KiB | 3.3% → 0.1% | 106 KiB → 3.47 KiB |    10 → 9 | `system / JSArrayBufferData` | `<unknown>` |

##### Object

|  Change |        Delta |             % |              Size | Instances | Constructor        | Location                                  |
| ------: | -----------: | ------------: | ----------------: | --------: | ------------------ | ----------------------------------------- |
|  -22.9% |  -103.16 KiB | 13.9% → 11.2% | 450 KiB → 347 KiB | 429 → 426 | `system / Context` | `<unknown>`                               |
|  -94.8% | -102.671 KiB |   3.4% → 0.2% | 108 KiB → 5.6 KiB |   15 → 14 | `ArrayBuffer`      | `<unknown>`                               |
| removed |       -232 B |  <0.1% → 0.0% |       232 B → 0 B |     1 → 0 | `xw`               | `node_modules/d3/dist/d3.min.js:2:215993` |

##### Array

|  Change |       Delta |           % |          Size | Instances | Constructor    | Location    |
| ------: | ----------: | ----------: | ------------: | --------: | -------------- | ----------- |
| removed | -102.73 KiB | 3.2% → 0.0% | 103 KiB → 0 B |     1 → 0 | `Float32Array` | `<unknown>` |

## Largest functions

Functions ranked by bytes that would be freed if the function were garbage collected.

### Regressions

Functions with the largest increase in retained size.

|   Change |       Delta |            % |         Retained | Instances | Paths | Name | Location                                             | Example path           |
| -------: | ----------: | -----------: | ---------------: | --------: | ----: | ---- | ---------------------------------------------------- | ---------------------- |
| +6658.2% | +23.667 KiB | <0.1% → 0.8% |   364 B → 24 KiB |         1 |     1 | `iu` | `node_modules/d3/dist/d3.min.js:2:76774`             | `(GC root)`            |
| +1285.5% |  +3.113 KiB | <0.1% → 0.1% | 248 B → 3.36 KiB |         1 |     1 | `Lm` | `node_modules/d3/dist/d3.min.js:2:195934 → 2:194432` | `(GC root)`            |
|  +772.2% |  +1.628 KiB | <0.1% → 0.1% | 216 B → 1.84 KiB |         1 |     1 | `Um` | `node_modules/d3/dist/d3.min.js:2:193534 → 2:193552` | `.Um system / Context` |
| +3612.5% |  +1.128 KiB |        <0.1% |  32 B → 1.16 KiB |         1 |     1 | `au` | `node_modules/d3/dist/d3.min.js:2:79111 → 2:79110`   | `.au system / Context` |
|      new |  +1.082 KiB | 0.0% → <0.1% |   0 B → 1.08 KiB |     0 → 1 | 0 → 1 | `Jx` | `node_modules/d3/dist/d3.min.js:2:210278`            | `.Jx system / Context` |
|      new |  +1.082 KiB | 0.0% → <0.1% |   0 B → 1.08 KiB |     0 → 1 | 0 → 1 | `Xx` | `node_modules/d3/dist/d3.min.js:2:206588`            | `.Xx system / Context` |
|      new |  +1.082 KiB | 0.0% → <0.1% |   0 B → 1.08 KiB |     0 → 1 | 0 → 1 | `Wx` | `node_modules/d3/dist/d3.min.js:2:207850`            | `.Wx system / Context` |
|      new |  +1.082 KiB | 0.0% → <0.1% |   0 B → 1.08 KiB |     0 → 1 | 0 → 1 | `Yx` | `node_modules/d3/dist/d3.min.js:2:204737`            | `.Yx system / Context` |
|      new |    +1,008 B | 0.0% → <0.1% |    0 B → 1,008 B |     0 → 1 | 0 → 1 | `ym` | `node_modules/d3/dist/d3.min.js:2:192478`            | `.ym system / Context` |
|  +855.2% |      +992 B |        <0.1% | 116 B → 1.08 KiB |         1 |     1 | `lw` | `node_modules/d3/dist/d3.min.js:2:212342 → 2:212348` | `.lw system / Context` |
|  +855.2% |      +992 B |        <0.1% | 116 B → 1.08 KiB |         1 |     1 | `fw` | `node_modules/d3/dist/d3.min.js:2:211904 → 2:211922` | `.fw system / Context` |
|  +403.6% |      +888 B |        <0.1% | 220 B → 1.08 KiB |         1 |     1 | `Gm` | `node_modules/d3/dist/d3.min.js:2:196484 → 2:196504` | `.Gm system / Context` |
|      new |      +828 B | 0.0% → <0.1% |      0 B → 828 B |     0 → 1 | 0 → 1 | `Kx` | `node_modules/d3/dist/d3.min.js:2:209010`            | `.Kx system / Context` |
|      new |      +828 B | 0.0% → <0.1% |      0 B → 828 B |     0 → 1 | 0 → 1 | `jx` | `node_modules/d3/dist/d3.min.js:2:205618`            | `.jx system / Context` |
|      new |      +724 B | 0.0% → <0.1% |      0 B → 724 B |     0 → 1 | 0 → 1 | `Ix` | `node_modules/d3/dist/d3.min.js:2:201749`            | `.Ix system / Context` |
|  +613.8% |      +712 B |        <0.1% |    116 B → 828 B |         1 |     1 | `nw` | `node_modules/d3/dist/d3.min.js:2:211365 → 2:211383` | `.nw system / Context` |
|  +527.6% |      +612 B |        <0.1% |    116 B → 728 B |         1 |     1 | `tx` | `node_modules/d3/dist/d3.min.js:2:198548 → 2:198280` | `.tx system / Context` |
|  +420.7% |      +488 B |        <0.1% |    116 B → 604 B |         1 |     1 | `km` | `node_modules/d3/dist/d3.min.js:2:192864 → 2:192703` | `.km system / Context` |
|   +53.0% |      +384 B |        <0.1% | 724 B → 1.08 KiB |         1 |     1 | `Ux` | `node_modules/d3/dist/d3.min.js:2:201700 → 2:201718` | `.Ux system / Context` |
|   +33.8% |      +280 B |        <0.1% | 828 B → 1.08 KiB |         1 |     1 | `Fx` | `node_modules/d3/dist/d3.min.js:2:201638 → 2:201656` | `.Fx system / Context` |

### Improvements

Functions with the largest decrease in retained size.

|  Change |       Delta |            % |            Retained | Instances |     Paths | Name          | Location                                             | Example path                                                                                 |
| ------: | ----------: | -----------: | ------------------: | --------: | --------: | ------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|   -8.3% | -19.062 KiB |  7.1% → 6.7% |   229 KiB → 210 KiB | 765 → 760 | 485 → 484 | `(anonymous)` | `node_modules/d3/dist/d3.min.js:2:77113 → 2:30289`   | `.on Object ← .prototype fe (node_modules/d3/dist/d3.min.js:2:29314) ← .fe system / Context` |
|  -94.1% |  -1.804 KiB | 0.1% → <0.1% |    1.92 KiB → 116 B |         1 |         1 | `Bm`          | `node_modules/d3/dist/d3.min.js:2:193620 → 2:193642` | `.Bm system / Context`                                                                       |
|  -86.2% |  -1.585 KiB | 0.1% → <0.1% |    1.84 KiB → 260 B |         1 |         1 | `qm`          | `node_modules/d3/dist/d3.min.js:2:193503 → 2:193482` | `.qm system / Context`                                                                       |
|  -42.8% |  -1.437 KiB |         0.1% | 3.36 KiB → 1.92 KiB |         1 |         1 | `Ym`          | `node_modules/d3/dist/d3.min.js:2:194383 → 2:193669` | `(GC root)`                                                                                  |
| removed |  -1.082 KiB | <0.1% → 0.0% |      1.08 KiB → 0 B |     1 → 0 |     1 → 0 | `Qx`          | `node_modules/d3/dist/d3.min.js:2:210229`            | `.Qx system / Context`                                                                       |
| removed |  -1.082 KiB | <0.1% → 0.0% |      1.08 KiB → 0 B |     1 → 0 |     1 → 0 | `Xm`          | `node_modules/d3/dist/d3.min.js:2:196455`            | `.Xm system / Context`                                                                       |
| removed |  -1.082 KiB | <0.1% → 0.0% |      1.08 KiB → 0 B |     1 → 0 |     1 → 0 | `Hx`          | `node_modules/d3/dist/d3.min.js:2:206539`            | `.Hx system / Context`                                                                       |
| removed |    -1,008 B | <0.1% → 0.0% |       1,008 B → 0 B |     1 → 0 |     1 → 0 | `gm`          | `node_modules/d3/dist/d3.min.js:2:192429`            | `.gm system / Context`                                                                       |
|  -89.5% |      -992 B |        <0.1% |    1.08 KiB → 116 B |         1 |         1 | `Bx`          | `node_modules/d3/dist/d3.min.js:2:204688 → 2:204588` | `.Bx system / Context`                                                                       |
|  -89.5% |      -992 B |        <0.1% |    1.08 KiB → 116 B |         1 |         1 | `Vx`          | `node_modules/d3/dist/d3.min.js:2:207801 → 2:207395` | `.Vx system / Context`                                                                       |
|  -89.5% |      -992 B |        <0.1% |    1.08 KiB → 116 B |         1 |         1 | `Rx`          | `node_modules/d3/dist/d3.min.js:2:201607 → 2:201499` | `.Rx system / Context`                                                                       |
|  -89.5% |      -992 B |        <0.1% |    1.08 KiB → 116 B |         1 |         1 | `sw`          | `node_modules/d3/dist/d3.min.js:2:212299 → 2:211953` | `.sw system / Context`                                                                       |
|  -83.0% |      -920 B |        <0.1% |    1.08 KiB → 188 B |     7 → 6 |     7 → 6 | `a`           | `node_modules/d3/dist/d3.min.js:2:78474 → 2:99767`   | `.csvFormatValue Object ← .d3 Window / http://127.0.0.1:52789`                               |
|  -88.2% |      -868 B |        <0.1% |       984 B → 116 B |         1 |         1 | `Qm`          | `node_modules/d3/dist/d3.min.js:2:197651 → 2:197362` | `(GC root)`                                                                                  |
| removed |      -828 B | <0.1% → 0.0% |         828 B → 0 B |     1 → 0 |     1 → 0 | `Lx`          | `node_modules/d3/dist/d3.min.js:2:205569`            | `.Lx system / Context`                                                                       |
| removed |      -828 B | <0.1% → 0.0% |         828 B → 0 B |     1 → 0 |     1 → 0 | `tw`          | `node_modules/d3/dist/d3.min.js:2:211334`            | `.tw system / Context`                                                                       |
| removed |      -828 B | <0.1% → 0.0% |         828 B → 0 B |     1 → 0 |     1 → 0 | `Zx`          | `node_modules/d3/dist/d3.min.js:2:208961`            | `.Zx system / Context`                                                                       |
|  -61.4% |      -604 B |        <0.1% |       984 B → 380 B |         1 |         1 | `uw`          | `node_modules/d3/dist/d3.min.js:2:211842 → 2:211852` | `.uw system / Context`                                                                       |
|  -80.9% |      -492 B |        <0.1% |       608 B → 116 B |         1 |         1 | `Nm`          | `node_modules/d3/dist/d3.min.js:2:192654 → 2:192650` | `.Nm system / Context`                                                                       |
|   -3.1% |      -424 B |         0.4% |   13.4 KiB → 13 KiB |   40 → 39 |        17 | `i`           | `node_modules/d3/dist/d3.min.js:2:159037 → 2:159016` | `(GC root)`                                                                                  |

## Largest strings

Strings ranked by bytes allocated for them.

### Regressions

Strings with the largest increase in size.

#### String

| Change | Delta |            % |       Size | Value                                                | Path                                                                                                                                                                                                                                                        |
| -----: | ----: | -----------: | ---------: | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +68 B | 0.0% → <0.1% | 0 B → 68 B | `http://127.0.0.1:5278961BD7B6A550479043343F4BB3B5…` | `(GC root)`                                                                                                                                                                                                                                                 |
|    new | +52 B | 0.0% → <0.1% | 0 B → 52 B | `// https://d3js.org v7.9.0 Copyright 2010-2023 Mi…` | `(GC root)`                                                                                                                                                                                                                                                 |
|    new | +32 B | 0.0% → <0.1% | 0 B → 32 B | `schemeObservable10`                                 | `(GC root)`                                                                                                                                                                                                                                                 |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Um.areaStart`                                       | `. system / ScopeInfo ← .name_or_scope_info areaStart ← .shared areaStart (node_modules/d3/dist/d3.min.js:2:196076) ← .areaStart Object ← .prototype Um (node_modules/d3/dist/d3.min.js:2:193552) ← .Um system / Context`                                   |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Um.areaEnd`                                         | `. system / ScopeInfo ← .name_or_scope_info areaEnd ← .shared areaEnd (node_modules/d3/dist/d3.min.js:2:196109) ← .areaEnd Object ← .prototype Um (node_modules/d3/dist/d3.min.js:2:193552) ← .Um system / Context`                                         |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Um.lineStart`                                       | `. system / ScopeInfo ← .name_or_scope_info lineStart ← .shared lineStart (node_modules/d3/dist/d3.min.js:2:196146) ← .lineStart Object ← .prototype Um (node_modules/d3/dist/d3.min.js:2:193552) ← .Um system / Context`                                   |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Um.lineEnd`                                         | `. system / ScopeInfo ← .name_or_scope_info lineEnd ← .shared lineEnd (node_modules/d3/dist/d3.min.js:2:196180) ← .lineEnd Object ← .prototype Um (node_modules/d3/dist/d3.min.js:2:193552) ← .Um system / Context`                                         |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Gm.areaStart`                                       | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data areaStart ← .shared areaStart (node_modules/d3/dist/d3.min.js:2:197452) ← .areaStart Object ← .prototype Gm (node_modules/d3/dist/d3.min.js:2:196504) ← .Gm system / Context` |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Gm.areaEnd`                                         | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data areaEnd ← .shared areaEnd (node_modules/d3/dist/d3.min.js:2:197496) ← .areaEnd Object ← .prototype Gm (node_modules/d3/dist/d3.min.js:2:196504) ← .Gm system / Context`       |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Gm.lineStart`                                       | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data lineStart ← .shared lineStart (node_modules/d3/dist/d3.min.js:2:197540) ← .lineStart Object ← .prototype Gm (node_modules/d3/dist/d3.min.js:2:196504) ← .Gm system / Context` |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Gm.lineEnd`                                         | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data lineEnd ← .shared lineEnd (node_modules/d3/dist/d3.min.js:2:197584) ← .lineEnd Object ← .prototype Gm (node_modules/d3/dist/d3.min.js:2:196504) ← .Gm system / Context`       |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Fx.areaStart`                                       | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data areaStart ← .shared areaStart (node_modules/d3/dist/d3.min.js:2:201822) ← .areaStart Object ← .prototype Fx (node_modules/d3/dist/d3.min.js:2:201656) ← .Fx system / Context` |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Fx.areaEnd`                                         | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data areaEnd ← .shared areaEnd (node_modules/d3/dist/d3.min.js:2:201855) ← .areaEnd Object ← .prototype Fx (node_modules/d3/dist/d3.min.js:2:201656) ← .Fx system / Context`       |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Ux.areaStart`                                       | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data areaStart ← .shared areaStart (node_modules/d3/dist/d3.min.js:2:203455) ← .areaStart Object ← .prototype Ux (node_modules/d3/dist/d3.min.js:2:201718) ← .Ux system / Context` |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Ux.areaEnd`                                         | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data areaEnd ← .shared areaEnd (node_modules/d3/dist/d3.min.js:2:203488) ← .areaEnd Object ← .prototype Ux (node_modules/d3/dist/d3.min.js:2:201718) ← .Ux system / Context`       |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Ix.lineStart`                                       | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data lineStart ← .shared lineStart (node_modules/d3/dist/d3.min.js:2:204088) ← .lineStart Object ← .prototype Ix (node_modules/d3/dist/d3.min.js:2:201749) ← .Ix system / Context` |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Ix.lineEnd`                                         | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data lineEnd ← .shared lineEnd (node_modules/d3/dist/d3.min.js:2:204154) ← .lineEnd Object ← .prototype Ix (node_modules/d3/dist/d3.min.js:2:201749) ← .Ix system / Context`       |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Yx.areaStart`                                       | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data areaStart ← .shared areaStart (node_modules/d3/dist/d3.min.js:2:204807) ← .areaStart Object ← .prototype Yx (node_modules/d3/dist/d3.min.js:2:204737) ← .Yx system / Context` |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Yx.areaEnd`                                         | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data areaEnd ← .shared areaEnd (node_modules/d3/dist/d3.min.js:2:204840) ← .areaEnd Object ← .prototype Yx (node_modules/d3/dist/d3.min.js:2:204737) ← .Yx system / Context`       |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Yx.lineStart`                                       | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data lineStart ← .shared lineStart (node_modules/d3/dist/d3.min.js:2:204877) ← .lineStart Object ← .prototype Yx (node_modules/d3/dist/d3.min.js:2:204737) ← .Yx system / Context` |

### Improvements

Strings with the largest decrease in size.

#### String

|  Change | Delta |            % |       Size | Value                                                | Path                                                                                                                                                                                                                                                                      |
| ------: | ----: | -----------: | ---------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -68 B | <0.1% → 0.0% | 68 B → 0 B | `http://127.0.0.1:5278913C0184BA58A48BE1C986137065…` | `(GC root)`                                                                                                                                                                                                                                                               |
| removed | -52 B | <0.1% → 0.0% | 52 B → 0 B | `// https://d3js.org v7.8.5 Copyright 2010-2023 Mi…` | `(GC root)`                                                                                                                                                                                                                                                               |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Bm.u.defined`                                       | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data (shared function info) ← .(Code flusher) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data Bm ← .shared Bm (node_modules/d3/dist/d3.min.js:2:193620)`           |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Bm.u.curve`                                         | `. system / ScopeInfo ← .name_or_scope_info (shared function info) ← .(Debugger) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data Bm ← .shared Bm (node_modules/d3/dist/d3.min.js:2:193620)`                                                 |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Bm.u.context`                                       | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data (shared function info) ← .(Eternal handles) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data Bm ← .shared Bm (node_modules/d3/dist/d3.min.js:2:193620)`        |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Ym.f.lineY1`                                        | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data (shared function info) ← .(Shareable object cache) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data Ym ← .shared Ym (node_modules/d3/dist/d3.min.js:2:194383)` |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Ym.f.lineX1`                                        | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data (shared function info) ← .(Smi roots) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data Ym ← .shared Ym (node_modules/d3/dist/d3.min.js:2:194383)`              |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Ym.f.defined`                                       | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data (shared function info) ← .(Startup object cache) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data Ym ← .shared Ym (node_modules/d3/dist/d3.min.js:2:194383)`   |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Ym.f.curve`                                         | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data (shared function info) ← .(Strong root list) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data Ym ← .shared Ym (node_modules/d3/dist/d3.min.js:2:194383)`       |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Ym.f.context`                                       | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data (shared function info) ← .(Thread manager) (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data Ym ← .shared Ym (node_modules/d3/dist/d3.min.js:2:194383)`         |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `qm.areaStart`                                       | `. system / ScopeInfo ← .name_or_scope_info areaStart ← .shared areaStart (node_modules/d3/dist/d3.min.js:2:196027) ← .areaStart Object ← .prototype qm (node_modules/d3/dist/d3.min.js:2:193503) ← .qm system / Context`                                                 |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `qm.lineStart`                                       | `. system / ScopeInfo ← .name_or_scope_info lineStart ← .shared lineStart (node_modules/d3/dist/d3.min.js:2:196097) ← .lineStart Object ← .prototype qm (node_modules/d3/dist/d3.min.js:2:193503) ← .qm system / Context`                                                 |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `qm.lineEnd`                                         | `. system / ScopeInfo ← .name_or_scope_info lineEnd ← .shared lineEnd (node_modules/d3/dist/d3.min.js:2:196131) ← .lineEnd Object ← .prototype qm (node_modules/d3/dist/d3.min.js:2:193503) ← .qm system / Context`                                                       |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `qm.areaEnd`                                         | `. system / ScopeInfo ← .name_or_scope_info areaEnd ← .shared areaEnd (node_modules/d3/dist/d3.min.js:2:196060) ← .areaEnd Object ← .prototype qm (node_modules/d3/dist/d3.min.js:2:193503) ← .qm system / Context`                                                       |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `ow.lineStart`                                       | `. system / ScopeInfo ← .name_or_scope_info lineStart ← .shared lineStart (node_modules/d3/dist/d3.min.js:2:213327) ← .lineStart Object`                                                                                                                                  |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `ow.lineEnd`                                         | `. system / ScopeInfo ← .name_or_scope_info lineEnd ← .shared lineEnd (node_modules/d3/dist/d3.min.js:2:213410) ← .lineEnd Object`                                                                                                                                        |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Nm.t.digits`                                        | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data (shared function info) ← . (constant pool) ← .(GC roots) system / BytecodeArray ← .trusted_function_data Nm ← .shared Nm (node_modules/d3/dist/d3.min.js:2:192654) ← .Nm system / Context`  |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Xm.areaStart`                                       | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data areaStart ← .shared areaStart (node_modules/d3/dist/d3.min.js:2:197403) ← .areaStart Object ← .prototype Xm (node_modules/d3/dist/d3.min.js:2:196455) ← .Xm system / Context`               |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Xm.areaEnd`                                         | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data areaEnd ← .shared areaEnd (node_modules/d3/dist/d3.min.js:2:197447) ← .areaEnd Object ← .prototype Xm (node_modules/d3/dist/d3.min.js:2:196455) ← .Xm system / Context`                     |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Xm.lineStart`                                       | `.<dummy> system / UncompiledDataWithoutPreparseData ← .trusted_function_data lineStart ← .shared lineStart (node_modules/d3/dist/d3.min.js:2:197491) ← .lineStart Object ← .prototype Xm (node_modules/d3/dist/d3.min.js:2:196455) ← .Xm system / Context`               |

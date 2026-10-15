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

Paths starting with `./` or `../` are relative to `http://127.0.0.1:52789/`.

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

#### Regressions

Constructors with the largest increase in self size.

| Change |  Delta |             % |       Size | Instances | Constructor                   | Location                                    |
| -----: | -----: | ------------: | ---------: | --------: | ----------------------------- | ------------------------------------------- |
|    ~0% | +146 B | 17.2% → 17.8% |    554 KiB |        47 | `system / ExternalStringData` | `<unknown>`                                 |
|    new |  +56 B |  0.0% → <0.1% | 0 B → 56 B |     0 → 1 | `ww`                          | `./node_modules/d3/dist/d3.min.js:2:216042` |

##### Native

| Change |  Delta |             % |    Size | Instances | Constructor                   | Location    |
| -----: | -----: | ------------: | ------: | --------: | ----------------------------- | ----------- |
|    ~0% | +146 B | 17.2% → 17.8% | 554 KiB |        47 | `system / ExternalStringData` | `<unknown>` |

##### Object

| Change | Delta |            % |       Size | Instances | Constructor | Location                                    |
| -----: | ----: | -----------: | ---------: | --------: | ----------- | ------------------------------------------- |
|    new | +56 B | 0.0% → <0.1% | 0 B → 56 B |     0 → 1 | `ww`        | `./node_modules/d3/dist/d3.min.js:2:216042` |

#### Improvements

Constructors with the largest decrease in self size.

|  Change |        Delta |            % |                Size |     Instances | Constructor                  | Location                                    |
| ------: | -----------: | -----------: | ------------------: | ------------: | ---------------------------- | ------------------------------------------- |
|  -96.7% | -102.621 KiB |  3.3% → 0.1% |  106 KiB → 3.47 KiB |        10 → 9 | `system / JSArrayBufferData` | `<unknown>`                                 |
|   -0.7% |       -100 B |         0.5% | 14.8 KiB → 14.7 KiB |     429 → 426 | `system / Context`           | `<unknown>`                                 |
| removed |        -60 B | <0.1% → 0.0% |          60 B → 0 B |         1 → 0 | `Float32Array`               | `<unknown>`                                 |
| removed |        -56 B | <0.1% → 0.0% |          56 B → 0 B |         1 → 0 | `xw`                         | `./node_modules/d3/dist/d3.min.js:2:215993` |
|   -7.3% |        -52 B |        <0.1% |       708 B → 656 B |       15 → 14 | `ArrayBuffer`                | `<unknown>`                                 |
|     ~0% |        -16 B |  1.8% → 1.9% |              58 KiB | 3,706 → 3,705 | `Array`                      | `<unknown>`                                 |

##### Native

| Change |        Delta |           % |               Size | Instances | Constructor                  | Location    |
| -----: | -----------: | ----------: | -----------------: | --------: | ---------------------------- | ----------- |
| -96.7% | -102.621 KiB | 3.3% → 0.1% | 106 KiB → 3.47 KiB |    10 → 9 | `system / JSArrayBufferData` | `<unknown>` |

##### Object

|  Change |  Delta |            % |                Size | Instances | Constructor        | Location                                    |
| ------: | -----: | -----------: | ------------------: | --------: | ------------------ | ------------------------------------------- |
|   -0.7% | -100 B |         0.5% | 14.8 KiB → 14.7 KiB | 429 → 426 | `system / Context` | `<unknown>`                                 |
| removed |  -56 B | <0.1% → 0.0% |          56 B → 0 B |     1 → 0 | `xw`               | `./node_modules/d3/dist/d3.min.js:2:215993` |
|   -7.3% |  -52 B |        <0.1% |       708 B → 656 B |   15 → 14 | `ArrayBuffer`      | `<unknown>`                                 |

##### Array

|  Change | Delta |            % |       Size |     Instances | Constructor    | Location    |
| ------: | ----: | -----------: | ---------: | ------------: | -------------- | ----------- |
| removed | -60 B | <0.1% → 0.0% | 60 B → 0 B |         1 → 0 | `Float32Array` | `<unknown>` |
|     ~0% | -16 B |  1.8% → 1.9% |     58 KiB | 3,706 → 3,705 | `Array`        | `<unknown>` |

#### Instances

Instances with the largest change in contribution to each constructor's self size. `B ←(several paths)– A` means `A` holds `B` only through other nodes, along several paths.

##### `system / ExternalStringData` (`<unknown>`)

|  Change |        Delta |            % |          Size | Instances | Path                                                                                                  |
| ------: | -----------: | -----------: | ------------: | --------: | ----------------------------------------------------------------------------------------------------- |
|     new | +546.312 KiB | 0.0% → 98.5% | 0 B → 546 KiB |     0 → 1 | `system / ExternalStringData ←.2 / backing_store– // https://d3js.org v7.9.0 Copyright 2010-2023 Mi…` |
| removed | -546.169 KiB | 98.5% → 0.0% | 546 KiB → 0 B |     1 → 0 | `system / ExternalStringData ←.2 / backing_store– // https://d3js.org v7.8.5 Copyright 2010-2023 Mi…` |
| removed |        -24 B | <0.1% → 0.0% |    24 B → 0 B |     1 → 0 | `system / ExternalStringData ←.1 / backing_store– // https://d3js.org v7.8.5 Copyright 2010-2023 Mi…` |
|     new |        +24 B | 0.0% → <0.1% |    0 B → 24 B |     0 → 1 | `system / ExternalStringData ←.1 / backing_store– // https://d3js.org v7.9.0 Copyright 2010-2023 Mi…` |

##### `ww` (`./node_modules/d3/dist/d3.min.js:2:216042`)

| Change | Delta |             % |       Size | Instances | Path                                                   |
| -----: | ----: | ------------: | ---------: | --------: | ------------------------------------------------------ |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |     0 → 1 | `ww ←(several paths)– Window / http://127.0.0.1:52789` |

##### `system / JSArrayBufferData` (`<unknown>`)

|  Change |        Delta |            % |          Size | Instances | Path                                                                                                                                                             |
| ------: | -----------: | -----------: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -102.621 KiB | 96.7% → 0.0% | 103 KiB → 0 B |     1 → 0 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Float32Array ←.e– system / Context`                                                           |
| removed |       -2 KiB |  1.9% → 0.0% |   2 KiB → 0 B |     1 → 0 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Uint32Array ←.Au– system / Context`                                                           |
|     new |       +2 KiB | 0.0% → 57.7% |   0 B → 2 KiB |     0 → 1 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Uint32Array ←.Au– system / Context ←(several paths)– Window / http://127.0.0.1:52789`         |
| removed |       -256 B |  0.2% → 0.0% |   256 B → 0 B |     1 → 0 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Float64Array ←._partials– T (./node_modules/d3/dist/d3.min.js:2:3159) ←.as– system / Context` |
| removed |       -256 B |  0.2% → 0.0% |   256 B → 0 B |     1 → 0 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Float64Array ←._partials– T (./node_modules/d3/dist/d3.min.js:2:3159) ←.us– system / Context` |

##### `system / Context` (`<unknown>`)

|    Change |      Delta |            % |            Size | Instances | Path                                                                              |
| --------: | ---------: | -----------: | --------------: | --------: | --------------------------------------------------------------------------------- |
|    -98.5% |  -5.05 KiB | 34.6% → 0.5% | 5.13 KiB → 80 B |    32 → 4 | `system / Context ← (GC root)`                                                    |
| +11681.8% | +5.019 KiB | 0.3% → 34.4% | 44 B → 5.06 KiB |    1 → 28 | `system / Context ←(several paths)– Window / http://127.0.0.1:52789`              |
|    -68.4% |     -416 B |  4.0% → 1.3% |   608 B → 192 B |    13 → 1 | `system / Context ←(several paths)– Object`                                       |
|       new |     +416 B |  0.0% → 2.8% |     0 B → 416 B |    0 → 12 | `system / Context ←(several paths)– Object ←.d3– Window / http://127.0.0.1:52789` |
|   removed |     -160 B |  1.1% → 0.0% |     160 B → 0 B |     8 → 0 | `system / Context ←(several paths)– system / Context ←(several paths)– Object`    |

##### `Float32Array` (`<unknown>`)

|  Change | Delta |             % |       Size | Instances | Path                                 |
| ------: | ----: | ------------: | ---------: | --------: | ------------------------------------ |
| removed | -60 B | 100.0% → 0.0% | 60 B → 0 B |     1 → 0 | `Float32Array ←.e– system / Context` |

##### `xw` (`./node_modules/d3/dist/d3.min.js:2:215993`)

|  Change | Delta |             % |       Size | Instances | Path             |
| ------: | ----: | ------------: | ---------: | --------: | ---------------- |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |     1 → 0 | `xw ← (GC root)` |

##### `ArrayBuffer` (`<unknown>`)

|  Change | Delta |           % |       Size | Instances | Path                                                                                                                 |
| ------: | ----: | ----------: | ---------: | --------: | -------------------------------------------------------------------------------------------------------------------- |
| removed | -52 B | 7.3% → 0.0% | 52 B → 0 B |     1 → 0 | `ArrayBuffer ←.buffer– Float64Array ←._partials– T (./node_modules/d3/dist/d3.min.js:2:3159) ←.Gh– system / Context` |
| removed | -52 B | 7.3% → 0.0% | 52 B → 0 B |     1 → 0 | `ArrayBuffer ←.buffer– Float64Array ←._partials– T (./node_modules/d3/dist/d3.min.js:2:3159) ←.ih– system / Context` |
| removed | -52 B | 7.3% → 0.0% | 52 B → 0 B |     1 → 0 | `ArrayBuffer ←.buffer– Float64Array ←._partials– T (./node_modules/d3/dist/d3.min.js:2:3159) ←.rh– system / Context` |
| removed | -52 B | 7.3% → 0.0% | 52 B → 0 B |     1 → 0 | `ArrayBuffer ←.buffer– Float64Array ←._partials– T (./node_modules/d3/dist/d3.min.js:2:3159) ←.us– system / Context` |
| removed | -52 B | 7.3% → 0.0% | 52 B → 0 B |     1 → 0 | `ArrayBuffer ←.buffer– Float64Array ←._partials– T (./node_modules/d3/dist/d3.min.js:2:3159) ←.as– system / Context` |

##### `Array` (`<unknown>`)

|  Change | Delta |           % |       Size | Instances | Path                                                                            |
| ------: | ----: | ----------: | ---------: | --------: | ------------------------------------------------------------------------------- |
| removed | -48 B | 0.1% → 0.0% | 48 B → 0 B |     3 → 0 | `Array ←.u– system / Context`                                                   |
|     new | +48 B | 0.0% → 0.1% | 0 B → 48 B |     0 → 3 | `Array ←.u– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
| removed | -32 B | 0.1% → 0.0% | 32 B → 0 B |     2 → 0 | `Array ←[0]– Array ←.u– system / Context`                                       |
| removed | -32 B | 0.1% → 0.0% | 32 B → 0 B |     2 → 0 | `Array ←[1]– Array ←.u– system / Context`                                       |
| removed | -32 B | 0.1% → 0.0% | 32 B → 0 B |     2 → 0 | `Array ←[2]– Array ←.u– system / Context`                                       |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Regressions

Constructors with the largest increase in retained size.

|  Change |       Delta |             % |                Size |     Instances | Constructor                       | Location                                    |
| ------: | ----------: | ------------: | ------------------: | ------------: | --------------------------------- | ------------------------------------------- |
| +136.7% | +885.71 KiB | 20.1% → 49.4% |   648 KiB → 1.5 MiB |             1 | `Window / http://127.0.0.1:52789` | `<unknown>`                                 |
|   +0.2% |  +2.585 KiB | 33.7% → 35.1% | 1.06 MiB → 1.07 MiB |         1,723 | `Object`                          | `<unknown>`                                 |
|   +0.5% |  +2.308 KiB | 14.7% → 15.3% |   474 KiB → 476 KiB |           160 | `SVGGElement`                     | `<unknown>`                                 |
|   +2.2% |  +2.308 KiB |   3.2% → 3.4% |   103 KiB → 105 KiB |            37 | `SVGPathElement`                  | `<unknown>`                                 |
|   +0.5% |  +2.308 KiB | 14.9% → 15.5% |   480 KiB → 483 KiB |             4 | `SVGSVGElement`                   | `<unknown>`                                 |
|   +0.1% |      +808 B | 18.3% → 19.1% |   592 KiB → 593 KiB | 3,706 → 3,705 | `Array`                           | `<unknown>`                                 |
|     new |      +232 B |  0.0% → <0.1% |         0 B → 232 B |         0 → 1 | `ww`                              | `./node_modules/d3/dist/d3.min.js:2:216042` |
|     ~0% |      +146 B | 17.2% → 17.8% |             554 KiB |            47 | `system / ExternalStringData`     | `<unknown>`                                 |
|   +0.1% |       +40 B |   2.3% → 2.4% |            74.2 KiB |            10 | `Window`                          | `<unknown>`                                 |

##### Native

| Change |      Delta |             % |              Size | Instances | Constructor                   | Location    |
| -----: | ---------: | ------------: | ----------------: | --------: | ----------------------------- | ----------- |
|  +0.5% | +2.308 KiB | 14.7% → 15.3% | 474 KiB → 476 KiB |       160 | `SVGGElement`                 | `<unknown>` |
|  +2.2% | +2.308 KiB |   3.2% → 3.4% | 103 KiB → 105 KiB |        37 | `SVGPathElement`              | `<unknown>` |
|  +0.5% | +2.308 KiB | 14.9% → 15.5% | 480 KiB → 483 KiB |         4 | `SVGSVGElement`               | `<unknown>` |
|    ~0% |     +146 B | 17.2% → 17.8% |           554 KiB |        47 | `system / ExternalStringData` | `<unknown>` |
|  +0.1% |      +40 B |   2.3% → 2.4% |          74.2 KiB |        10 | `Window`                      | `<unknown>` |

##### Object

|  Change |       Delta |             % |                Size | Instances | Constructor                       | Location                                    |
| ------: | ----------: | ------------: | ------------------: | --------: | --------------------------------- | ------------------------------------------- |
| +136.7% | +885.71 KiB | 20.1% → 49.4% |   648 KiB → 1.5 MiB |         1 | `Window / http://127.0.0.1:52789` | `<unknown>`                                 |
|   +0.2% |  +2.585 KiB | 33.7% → 35.1% | 1.06 MiB → 1.07 MiB |     1,723 | `Object`                          | `<unknown>`                                 |
|     new |      +232 B |  0.0% → <0.1% |         0 B → 232 B |     0 → 1 | `ww`                              | `./node_modules/d3/dist/d3.min.js:2:216042` |

##### Array

| Change |  Delta |             % |              Size |     Instances | Constructor | Location    |
| -----: | -----: | ------------: | ----------------: | ------------: | ----------- | ----------- |
|  +0.1% | +808 B | 18.3% → 19.1% | 592 KiB → 593 KiB | 3,706 → 3,705 | `Array`     | `<unknown>` |

#### Improvements

Constructors with the largest decrease in retained size.

|  Change |        Delta |             % |               Size | Instances | Constructor                  | Location                                    |
| ------: | -----------: | ------------: | -----------------: | --------: | ---------------------------- | ------------------------------------------- |
|  -22.9% |  -103.16 KiB | 13.9% → 11.2% |  450 KiB → 347 KiB | 429 → 426 | `system / Context`           | `<unknown>`                                 |
| removed |  -102.73 KiB |   3.2% → 0.0% |      103 KiB → 0 B |     1 → 0 | `Float32Array`               | `<unknown>`                                 |
|  -94.8% | -102.671 KiB |   3.4% → 0.2% |  108 KiB → 5.6 KiB |   15 → 14 | `ArrayBuffer`                | `<unknown>`                                 |
|  -96.7% | -102.621 KiB |   3.3% → 0.1% | 106 KiB → 3.47 KiB |    10 → 9 | `system / JSArrayBufferData` | `<unknown>`                                 |
| removed |       -232 B |  <0.1% → 0.0% |        232 B → 0 B |     1 → 0 | `xw`                         | `./node_modules/d3/dist/d3.min.js:2:215993` |

##### Native

| Change |        Delta |           % |               Size | Instances | Constructor                  | Location    |
| -----: | -----------: | ----------: | -----------------: | --------: | ---------------------------- | ----------- |
| -96.7% | -102.621 KiB | 3.3% → 0.1% | 106 KiB → 3.47 KiB |    10 → 9 | `system / JSArrayBufferData` | `<unknown>` |

##### Object

|  Change |        Delta |             % |              Size | Instances | Constructor        | Location                                    |
| ------: | -----------: | ------------: | ----------------: | --------: | ------------------ | ------------------------------------------- |
|  -22.9% |  -103.16 KiB | 13.9% → 11.2% | 450 KiB → 347 KiB | 429 → 426 | `system / Context` | `<unknown>`                                 |
|  -94.8% | -102.671 KiB |   3.4% → 0.2% | 108 KiB → 5.6 KiB |   15 → 14 | `ArrayBuffer`      | `<unknown>`                                 |
| removed |       -232 B |  <0.1% → 0.0% |       232 B → 0 B |     1 → 0 | `xw`               | `./node_modules/d3/dist/d3.min.js:2:215993` |

##### Array

|  Change |       Delta |           % |          Size | Instances | Constructor    | Location    |
| ------: | ----------: | ----------: | ------------: | --------: | -------------- | ----------- |
| removed | -102.73 KiB | 3.2% → 0.0% | 103 KiB → 0 B |     1 → 0 | `Float32Array` | `<unknown>` |

#### Instances

Instances with the largest change in contribution to each constructor's retained size. `B ←(several paths)– A` means `A` holds `B` only through other nodes, along several paths.

##### `Window / http://127.0.0.1:52789` (`<unknown>`)

|  Change |       Delta |      % |              Size | Instances | Path                                          |
| ------: | ----------: | -----: | ----------------: | --------: | --------------------------------------------- |
| +136.7% | +885.71 KiB | 100.0% | 648 KiB → 1.5 MiB |         1 | `Window / http://127.0.0.1:52789 ← (GC root)` |

##### `Object` (`<unknown>`)

|  Change |        Delta |            % |               Size | Instances | Path                                                                                                                                         |
| ------: | -----------: | -----------: | -----------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------- |
|  -88.0% | -328.015 KiB | 34.3% → 4.1% | 373 KiB → 44.8 KiB |   48 → 32 | `Object ← (GC root)`                                                                                                                         |
|     new | +260.562 KiB | 0.0% → 23.9% |      0 B → 261 KiB |     0 → 1 | `Object ←.d3– Window / http://127.0.0.1:52789`                                                                                               |
|     new |  +67.761 KiB |  0.0% → 6.2% |     0 B → 67.8 KiB |    0 → 15 | `Object ←(several paths)– Window / http://127.0.0.1:52789`                                                                                   |
| removed |  -30.007 KiB |  2.8% → 0.0% |       30 KiB → 0 B |     1 → 0 | `Object ←.prototype– Su (./node_modules/d3/dist/d3.min.js:2:82035) ←.Su– system / Context`                                                   |
|     new |  +29.976 KiB |  0.0% → 2.7% |       0 B → 30 KiB |     0 → 1 | `Object ←.prototype– Su (./node_modules/d3/dist/d3.min.js:2:82034) ←.Su– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |

##### `SVGGElement` (`<unknown>`)

|  Change |      Delta |             % |             Size | Instances | Path                                                                                                            |
| ------: | ---------: | ------------: | ---------------: | --------: | --------------------------------------------------------------------------------------------------------------- |
|   +2.3% | +2.308 KiB | 20.9% → 21.3% | 99 KiB → 101 KiB |         1 | `SVGGElement ←[11]– SVGSVGElement ←[0]– Array ←.detached– Object ←.__retained– Window / http://127.0.0.1:52789` |
| removed |      -16 B |  <0.1% → 0.0% |       16 B → 0 B |     1 → 0 | `SVGGElement ←[1]– InternalNode ←[1]– InternalNode ←[1]– InternalNode`                                          |
|     new |      +16 B |  0.0% → <0.1% |       0 B → 16 B |     0 → 1 | `SVGGElement ←[9]– InternalNode ←[1]– InternalNode ←[1]– InternalNode`                                          |

##### `SVGPathElement` (`<unknown>`)

|  Change |      Delta |             % |                Size | Instances | Path                                                                                                                                             |
| ------: | ---------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------ |
|   +2.7% | +2.308 KiB | 82.6% → 82.9% | 85.1 KiB → 87.5 KiB |        21 | `SVGPathElement ←(several paths)– SVGGElement ←[11]– SVGSVGElement ←[0]– Array ←.detached– Object ←.__retained– Window / http://127.0.0.1:52789` |
| removed |      -16 B |  <0.1% → 0.0% |          16 B → 0 B |     1 → 0 | `SVGPathElement ←[12]– InternalNode ←[1]– InternalNode ←[1]– InternalNode`                                                                       |
|     new |      +16 B |  0.0% → <0.1% |          0 B → 16 B |     0 → 1 | `SVGPathElement ←[10]– InternalNode ←[1]– InternalNode ←[1]– InternalNode`                                                                       |

##### `SVGSVGElement` (`<unknown>`)

|  Change |      Delta |            % |              Size | Instances | Path                                                                                         |
| ------: | ---------: | -----------: | ----------------: | --------: | -------------------------------------------------------------------------------------------- |
|   +0.5% | +2.308 KiB |        99.8% | 480 KiB → 482 KiB |         1 | `SVGSVGElement ←[0]– Array ←.detached– Object ←.__retained– Window / http://127.0.0.1:52789` |
| removed |      -16 B | <0.1% → 0.0% |        16 B → 0 B |     1 → 0 | `SVGSVGElement ←[5]– InternalNode ←[1]– InternalNode ←[1]– InternalNode`                     |
|     new |      +16 B | 0.0% → <0.1% |        0 B → 16 B |     0 → 1 | `SVGSVGElement ←[4]– InternalNode ←[1]– InternalNode ←[1]– InternalNode`                     |

##### `Array` (`<unknown>`)

|  Change |      Delta |           % |           Size | Instances | Path                                                                                                                                                                |
| ------: | ---------: | ----------: | -------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -6.023 KiB | 1.0% → 0.0% | 6.02 KiB → 0 B |     1 → 0 | `Array ←.t– system / Context ←.context– (anonymous) (./node_modules/d3/dist/d3.min.js:2:186157) ←.interpolateViridis– Object`                                       |
| removed | -6.023 KiB | 1.0% → 0.0% | 6.02 KiB → 0 B |     1 → 0 | `Array ←.t– system / Context ←.context– (anonymous) (./node_modules/d3/dist/d3.min.js:2:186157) ←.interpolatePlasma– Object`                                        |
| removed | -6.023 KiB | 1.0% → 0.0% | 6.02 KiB → 0 B |     1 → 0 | `Array ←.t– system / Context ←.context– (anonymous) (./node_modules/d3/dist/d3.min.js:2:186157) ←.interpolateMagma– Object`                                         |
| removed | -6.023 KiB | 1.0% → 0.0% | 6.02 KiB → 0 B |     1 → 0 | `Array ←.t– system / Context ←.context– (anonymous) (./node_modules/d3/dist/d3.min.js:2:186157) ←.interpolateInferno– Object`                                       |
|     new | +6.023 KiB | 0.0% → 1.0% | 0 B → 6.02 KiB |     0 → 1 | `Array ←.t– system / Context ←.context– (anonymous) (./node_modules/d3/dist/d3.min.js:2:186206) ←.interpolateViridis– Object ←.d3– Window / http://127.0.0.1:52789` |

##### `ww` (`./node_modules/d3/dist/d3.min.js:2:216042`)

| Change |  Delta |             % |        Size | Instances | Path                                                   |
| -----: | -----: | ------------: | ----------: | --------: | ------------------------------------------------------ |
|    new | +232 B | 0.0% → 100.0% | 0 B → 232 B |     0 → 1 | `ww ←(several paths)– Window / http://127.0.0.1:52789` |

##### `system / ExternalStringData` (`<unknown>`)

|  Change |        Delta |            % |          Size | Instances | Path                                                                                                  |
| ------: | -----------: | -----------: | ------------: | --------: | ----------------------------------------------------------------------------------------------------- |
|     new | +546.312 KiB | 0.0% → 98.5% | 0 B → 546 KiB |     0 → 1 | `system / ExternalStringData ←.2 / backing_store– // https://d3js.org v7.9.0 Copyright 2010-2023 Mi…` |
| removed | -546.169 KiB | 98.5% → 0.0% | 546 KiB → 0 B |     1 → 0 | `system / ExternalStringData ←.2 / backing_store– // https://d3js.org v7.8.5 Copyright 2010-2023 Mi…` |
| removed |        -24 B | <0.1% → 0.0% |    24 B → 0 B |     1 → 0 | `system / ExternalStringData ←.1 / backing_store– // https://d3js.org v7.8.5 Copyright 2010-2023 Mi…` |
|     new |        +24 B | 0.0% → <0.1% |    0 B → 24 B |     0 → 1 | `system / ExternalStringData ←.1 / backing_store– // https://d3js.org v7.9.0 Copyright 2010-2023 Mi…` |

##### `Window` (`<unknown>`)

| Change | Delta |           % |                Size | Instances | Path                 |
| -----: | ----: | ----------: | ------------------: | --------: | -------------------- |
|  +1.6% | +40 B | 3.2% → 3.3% | 2.41 KiB → 2.45 KiB |         4 | `Window ← (GC root)` |

##### `system / Context` (`<unknown>`)

|    Change |        Delta |             % |            Size | Instances | Path                                                                                                               |
| --------: | -----------: | ------------: | --------------: | --------: | ------------------------------------------------------------------------------------------------------------------ |
|   -100.0% | -385.949 KiB | 85.7% → <0.1% |  386 KiB → 80 B |    32 → 4 | `system / Context ← (GC root)`                                                                                     |
| +59829.8% | +282.789 KiB |  0.1% → 81.6% | 484 B → 283 KiB |    1 → 28 | `system / Context ←(several paths)– Window / http://127.0.0.1:52789`                                               |
|   removed |   -6.046 KiB |   1.3% → 0.0% |  6.05 KiB → 0 B |     1 → 0 | `system / Context ←.context– (anonymous) (./node_modules/d3/dist/d3.min.js:2:186157) ←.interpolateInferno– Object` |
|   removed |   -6.046 KiB |   1.3% → 0.0% |  6.05 KiB → 0 B |     1 → 0 | `system / Context ←.context– (anonymous) (./node_modules/d3/dist/d3.min.js:2:186157) ←.interpolateMagma– Object`   |
|   removed |   -6.046 KiB |   1.3% → 0.0% |  6.05 KiB → 0 B |     1 → 0 | `system / Context ←.context– (anonymous) (./node_modules/d3/dist/d3.min.js:2:186157) ←.interpolatePlasma– Object`  |

##### `Float32Array` (`<unknown>`)

|  Change |       Delta |             % |          Size | Instances | Path                                 |
| ------: | ----------: | ------------: | ------------: | --------: | ------------------------------------ |
| removed | -102.73 KiB | 100.0% → 0.0% | 103 KiB → 0 B |     1 → 0 | `Float32Array ←.e– system / Context` |

##### `ArrayBuffer` (`<unknown>`)

|  Change |        Delta |            % |           Size | Instances | Path                                                                                                                 |
| ------: | -----------: | -----------: | -------------: | --------: | -------------------------------------------------------------------------------------------------------------------- |
| removed | -102.671 KiB | 94.8% → 0.0% |  103 KiB → 0 B |     1 → 0 | `ArrayBuffer ←.buffer– Float32Array ←.e– system / Context`                                                           |
| removed |    -2.05 KiB |  1.9% → 0.0% | 2.05 KiB → 0 B |     1 → 0 | `ArrayBuffer ←.buffer– Uint32Array ←.Au– system / Context`                                                           |
|     new |    +2.05 KiB | 0.0% → 36.6% | 0 B → 2.05 KiB |     0 → 1 | `ArrayBuffer ←.buffer– Uint32Array ←.Au– system / Context ←(several paths)– Window / http://127.0.0.1:52789`         |
| removed |       -308 B |  0.3% → 0.0% |    308 B → 0 B |     1 → 0 | `ArrayBuffer ←.buffer– Float64Array ←._partials– T (./node_modules/d3/dist/d3.min.js:2:3159) ←.Gh– system / Context` |
| removed |       -308 B |  0.3% → 0.0% |    308 B → 0 B |     1 → 0 | `ArrayBuffer ←.buffer– Float64Array ←._partials– T (./node_modules/d3/dist/d3.min.js:2:3159) ←.ih– system / Context` |

##### `system / JSArrayBufferData` (`<unknown>`)

|  Change |        Delta |            % |          Size | Instances | Path                                                                                                                                                             |
| ------: | -----------: | -----------: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -102.621 KiB | 96.7% → 0.0% | 103 KiB → 0 B |     1 → 0 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Float32Array ←.e– system / Context`                                                           |
| removed |       -2 KiB |  1.9% → 0.0% |   2 KiB → 0 B |     1 → 0 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Uint32Array ←.Au– system / Context`                                                           |
|     new |       +2 KiB | 0.0% → 57.7% |   0 B → 2 KiB |     0 → 1 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Uint32Array ←.Au– system / Context ←(several paths)– Window / http://127.0.0.1:52789`         |
| removed |       -256 B |  0.2% → 0.0% |   256 B → 0 B |     1 → 0 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Float64Array ←._partials– T (./node_modules/d3/dist/d3.min.js:2:3159) ←.as– system / Context` |
| removed |       -256 B |  0.2% → 0.0% |   256 B → 0 B |     1 → 0 | `system / JSArrayBufferData ←.backing_store– ArrayBuffer ←.buffer– Float64Array ←._partials– T (./node_modules/d3/dist/d3.min.js:2:3159) ←.us– system / Context` |

##### `xw` (`./node_modules/d3/dist/d3.min.js:2:215993`)

|  Change |  Delta |             % |        Size | Instances | Path             |
| ------: | -----: | ------------: | ----------: | --------: | ---------------- |
| removed | -232 B | 100.0% → 0.0% | 232 B → 0 B |     1 → 0 | `xw ← (GC root)` |

## Largest functions

Functions ranked by bytes that would be freed if the function were garbage collected.

### Regressions

Functions with the largest increase in retained size.

|   Change |       Delta |            % |         Retained | Instances | Paths | Name | Location                                               | Example path                                                                  |
| -------: | ----------: | -----------: | ---------------: | --------: | ----: | ---- | ------------------------------------------------------ | ----------------------------------------------------------------------------- |
| +6658.2% | +23.667 KiB | <0.1% → 0.8% |   364 B → 24 KiB |         1 |     1 | `iu` | `./node_modules/d3/dist/d3.min.js:2:76774`             | `iu ←(several paths)– Window / http://127.0.0.1:52789`                        |
| +1285.5% |  +3.113 KiB | <0.1% → 0.1% | 248 B → 3.36 KiB |         1 |     1 | `Lm` | `./node_modules/d3/dist/d3.min.js:2:195934 → 2:194432` | `Lm ←(several paths)– Window / http://127.0.0.1:52789`                        |
|  +772.2% |  +1.628 KiB | <0.1% → 0.1% | 216 B → 1.84 KiB |         1 |     1 | `Um` | `./node_modules/d3/dist/d3.min.js:2:193534 → 2:193552` | `Um ←.Um– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
| +3612.5% |  +1.128 KiB |        <0.1% |  32 B → 1.16 KiB |         1 |     1 | `au` | `./node_modules/d3/dist/d3.min.js:2:79111 → 2:79110`   | `au ←.au– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|      new |  +1.082 KiB | 0.0% → <0.1% |   0 B → 1.08 KiB |     0 → 1 | 0 → 1 | `Jx` | `./node_modules/d3/dist/d3.min.js:2:210278`            | `Jx ←.Jx– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|      new |  +1.082 KiB | 0.0% → <0.1% |   0 B → 1.08 KiB |     0 → 1 | 0 → 1 | `Xx` | `./node_modules/d3/dist/d3.min.js:2:206588`            | `Xx ←.Xx– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|      new |  +1.082 KiB | 0.0% → <0.1% |   0 B → 1.08 KiB |     0 → 1 | 0 → 1 | `Wx` | `./node_modules/d3/dist/d3.min.js:2:207850`            | `Wx ←.Wx– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|      new |  +1.082 KiB | 0.0% → <0.1% |   0 B → 1.08 KiB |     0 → 1 | 0 → 1 | `Yx` | `./node_modules/d3/dist/d3.min.js:2:204737`            | `Yx ←.Yx– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|      new |    +1,008 B | 0.0% → <0.1% |    0 B → 1,008 B |     0 → 1 | 0 → 1 | `ym` | `./node_modules/d3/dist/d3.min.js:2:192478`            | `ym ←.ym– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|  +855.2% |      +992 B |        <0.1% | 116 B → 1.08 KiB |         1 |     1 | `lw` | `./node_modules/d3/dist/d3.min.js:2:212342 → 2:212348` | `lw ←.lw– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|  +855.2% |      +992 B |        <0.1% | 116 B → 1.08 KiB |         1 |     1 | `fw` | `./node_modules/d3/dist/d3.min.js:2:211904 → 2:211922` | `fw ←.fw– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|  +403.6% |      +888 B |        <0.1% | 220 B → 1.08 KiB |         1 |     1 | `Gm` | `./node_modules/d3/dist/d3.min.js:2:196484 → 2:196504` | `Gm ←.Gm– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|      new |      +828 B | 0.0% → <0.1% |      0 B → 828 B |     0 → 1 | 0 → 1 | `Kx` | `./node_modules/d3/dist/d3.min.js:2:209010`            | `Kx ←.Kx– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|      new |      +828 B | 0.0% → <0.1% |      0 B → 828 B |     0 → 1 | 0 → 1 | `jx` | `./node_modules/d3/dist/d3.min.js:2:205618`            | `jx ←.jx– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|      new |      +724 B | 0.0% → <0.1% |      0 B → 724 B |     0 → 1 | 0 → 1 | `Ix` | `./node_modules/d3/dist/d3.min.js:2:201749`            | `Ix ←.Ix– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|  +613.8% |      +712 B |        <0.1% |    116 B → 828 B |         1 |     1 | `nw` | `./node_modules/d3/dist/d3.min.js:2:211365 → 2:211383` | `nw ←.nw– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|  +527.6% |      +612 B |        <0.1% |    116 B → 728 B |         1 |     1 | `tx` | `./node_modules/d3/dist/d3.min.js:2:198548 → 2:198280` | `tx ←.tx– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|  +420.7% |      +488 B |        <0.1% |    116 B → 604 B |         1 |     1 | `km` | `./node_modules/d3/dist/d3.min.js:2:192864 → 2:192703` | `km ←.km– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|   +53.0% |      +384 B |        <0.1% | 724 B → 1.08 KiB |         1 |     1 | `Ux` | `./node_modules/d3/dist/d3.min.js:2:201700 → 2:201718` | `Ux ←.Ux– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|   +33.8% |      +280 B |        <0.1% | 828 B → 1.08 KiB |         1 |     1 | `Fx` | `./node_modules/d3/dist/d3.min.js:2:201638 → 2:201656` | `Fx ←.Fx– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |

### Improvements

Functions with the largest decrease in retained size.

|  Change |       Delta |            % |            Retained | Instances |     Paths | Name          | Location                                               | Example path                                                                                                                                                   |
| ------: | ----------: | -----------: | ------------------: | --------: | --------: | ------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -8.3% | -19.062 KiB |  7.1% → 6.7% |   229 KiB → 210 KiB | 765 → 760 | 488 → 484 | `(anonymous)` | `./node_modules/d3/dist/d3.min.js:2:77113 → 2:30289`   | `(anonymous) ←.on– Object ←.prototype– fe (./node_modules/d3/dist/d3.min.js:2:29314) ←.fe– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|  -94.1% |  -1.804 KiB | 0.1% → <0.1% |    1.92 KiB → 116 B |         1 |         1 | `Bm`          | `./node_modules/d3/dist/d3.min.js:2:193620 → 2:193642` | `Bm ←.Bm– system / Context ←(several paths)– Window / http://127.0.0.1:52789`                                                                                  |
|  -86.2% |  -1.585 KiB | 0.1% → <0.1% |    1.84 KiB → 260 B |         1 |         1 | `qm`          | `./node_modules/d3/dist/d3.min.js:2:193503 → 2:193482` | `qm ←.qm– system / Context ←(several paths)– Window / http://127.0.0.1:52789`                                                                                  |
|  -42.8% |  -1.437 KiB |         0.1% | 3.36 KiB → 1.92 KiB |         1 |         1 | `Ym`          | `./node_modules/d3/dist/d3.min.js:2:194383 → 2:193669` | `Ym ←(several paths)– Window / http://127.0.0.1:52789`                                                                                                         |
| removed |  -1.082 KiB | <0.1% → 0.0% |      1.08 KiB → 0 B |     1 → 0 |     1 → 0 | `Qx`          | `./node_modules/d3/dist/d3.min.js:2:210229`            | `Qx ←.Qx– system / Context`                                                                                                                                    |
| removed |  -1.082 KiB | <0.1% → 0.0% |      1.08 KiB → 0 B |     1 → 0 |     1 → 0 | `Xm`          | `./node_modules/d3/dist/d3.min.js:2:196455`            | `Xm ←.Xm– system / Context`                                                                                                                                    |
| removed |  -1.082 KiB | <0.1% → 0.0% |      1.08 KiB → 0 B |     1 → 0 |     1 → 0 | `Hx`          | `./node_modules/d3/dist/d3.min.js:2:206539`            | `Hx ←.Hx– system / Context`                                                                                                                                    |
| removed |    -1,008 B | <0.1% → 0.0% |       1,008 B → 0 B |     1 → 0 |     1 → 0 | `gm`          | `./node_modules/d3/dist/d3.min.js:2:192429`            | `gm ←.gm– system / Context`                                                                                                                                    |
|  -89.5% |      -992 B |        <0.1% |    1.08 KiB → 116 B |         1 |         1 | `Bx`          | `./node_modules/d3/dist/d3.min.js:2:204688 → 2:204588` | `Bx ←.Bx– system / Context ←(several paths)– Window / http://127.0.0.1:52789`                                                                                  |
|  -89.5% |      -992 B |        <0.1% |    1.08 KiB → 116 B |         1 |         1 | `Vx`          | `./node_modules/d3/dist/d3.min.js:2:207801 → 2:207395` | `Vx ←.Vx– system / Context ←(several paths)– Window / http://127.0.0.1:52789`                                                                                  |
|  -89.5% |      -992 B |        <0.1% |    1.08 KiB → 116 B |         1 |         1 | `Rx`          | `./node_modules/d3/dist/d3.min.js:2:201607 → 2:201499` | `Rx ←.Rx– system / Context ←(several paths)– Window / http://127.0.0.1:52789`                                                                                  |
|  -89.5% |      -992 B |        <0.1% |    1.08 KiB → 116 B |         1 |         1 | `sw`          | `./node_modules/d3/dist/d3.min.js:2:212299 → 2:211953` | `sw ←.sw– system / Context ←(several paths)– Window / http://127.0.0.1:52789`                                                                                  |
|  -83.0% |      -920 B |        <0.1% |    1.08 KiB → 188 B |     7 → 6 |     7 → 6 | `a`           | `./node_modules/d3/dist/d3.min.js:2:78474 → 2:99767`   | `a ←.csvFormatValue– Object ←.d3– Window / http://127.0.0.1:52789`                                                                                             |
|  -88.2% |      -868 B |        <0.1% |       984 B → 116 B |         1 |         1 | `Qm`          | `./node_modules/d3/dist/d3.min.js:2:197651 → 2:197362` | `Qm ←(several paths)– Window / http://127.0.0.1:52789`                                                                                                         |
| removed |      -828 B | <0.1% → 0.0% |         828 B → 0 B |     1 → 0 |     1 → 0 | `Lx`          | `./node_modules/d3/dist/d3.min.js:2:205569`            | `Lx ←.Lx– system / Context`                                                                                                                                    |
| removed |      -828 B | <0.1% → 0.0% |         828 B → 0 B |     1 → 0 |     1 → 0 | `tw`          | `./node_modules/d3/dist/d3.min.js:2:211334`            | `tw ←.tw– system / Context`                                                                                                                                    |
| removed |      -828 B | <0.1% → 0.0% |         828 B → 0 B |     1 → 0 |     1 → 0 | `Zx`          | `./node_modules/d3/dist/d3.min.js:2:208961`            | `Zx ←.Zx– system / Context`                                                                                                                                    |
|  -61.4% |      -604 B |        <0.1% |       984 B → 380 B |         1 |         1 | `uw`          | `./node_modules/d3/dist/d3.min.js:2:211842 → 2:211852` | `uw ←.uw– system / Context ←(several paths)– Window / http://127.0.0.1:52789`                                                                                  |
|  -80.9% |      -492 B |        <0.1% |       608 B → 116 B |         1 |         1 | `Nm`          | `./node_modules/d3/dist/d3.min.js:2:192654 → 2:192650` | `Nm ←.Nm– system / Context ←(several paths)– Window / http://127.0.0.1:52789`                                                                                  |
|   -3.1% |      -424 B |         0.4% |   13.4 KiB → 13 KiB |   40 → 39 |   18 → 17 | `i`           | `./node_modules/d3/dist/d3.min.js:2:159037 → 2:159016` | `i ←(several paths)– Window / http://127.0.0.1:52789`                                                                                                          |

### Retained

Nodes with the largest change in contribution to each function's retained size. `B ←(several paths)– A` means `A` holds `B` only through other nodes, along several paths. `[]` stands for any element of an array.

#### `iu` (`./node_modules/d3/dist/d3.min.js:2:76774`)

| Change |      Delta |            % |           Self | Name                            | Location    | Path to function                                                                                                                                                                      |
| -----: | ---------: | -----------: | -------------: | ------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new |   +7.5 KiB | 0.0% → 31.2% |  0 B → 7.5 KiB | `(BASELINE instruction stream)` | `<unknown>` | `(BASELINE instruction stream) ←.instruction_stream– (BASELINE code) ←.trusted_function_data– (shared function info) ←(several paths)– iu (./node_modules/d3/dist/d3.min.js:2:76774)` |
|    new | +2.937 KiB | 0.0% → 12.2% | 0 B → 2.94 KiB | `(instruction stream for p)`    | `<unknown>` | `(instruction stream for p) ←.instruction_stream– (code for p) ←.trusted_function_data– p ←(several paths)– iu (./node_modules/d3/dist/d3.min.js:2:76774)`                            |
|    new | +1.375 KiB |  0.0% → 5.7% | 0 B → 1.38 KiB | `system / BytecodeArray`        | `<unknown>` | `system / BytecodeArray ←.interpreter_data– (BASELINE code) ←.trusted_function_data– (shared function info) ←(several paths)– iu (./node_modules/d3/dist/d3.min.js:2:76774)`          |
|    new | +1.125 KiB |  0.0% → 4.7% | 0 B → 1.13 KiB | `(instruction stream for o)`    | `<unknown>` | `(instruction stream for o) ←.instruction_stream– (code for o) ←.trusted_function_data– o ←(several paths)– iu (./node_modules/d3/dist/d3.min.js:2:76774)`                            |
|    new |     +628 B |  0.0% → 2.6% |    0 B → 628 B | `system / BytecodeArray`        | `<unknown>` | `system / BytecodeArray ←.interpreter_data– (code for p) ←.trusted_function_data– p ←(several paths)– iu (./node_modules/d3/dist/d3.min.js:2:76774)`                                  |

#### `Lm` (`./node_modules/d3/dist/d3.min.js:2:194432`)

|  Change |  Delta |             % |         Self | Name                     | Location    | Path to function                                                                                                                                                                                                                     |
| ------: | -----: | ------------: | -----------: | ------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     new | +444 B |  0.0% → 12.9% |  0 B → 444 B | `system / BytecodeArray` | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– f ← (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Lm ←.shared– Lm (./node_modules/d3/dist/d3.min.js:2:194432)`                                      |
| +415.8% | +316 B | 30.6% → 11.4% | 76 B → 392 B | `system / BytecodeArray` | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– Lm ←.shared– Lm (./node_modules/d3/dist/d3.min.js:2:194432)`                                                                                                                        |
| +900.0% | +108 B |   4.8% → 3.5% | 12 B → 120 B | `(constant pool)`        | `<unknown>` | `(constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Lm ←.shared– Lm (./node_modules/d3/dist/d3.min.js:2:194432)`                                                                                          |
|     new |  +96 B |   0.0% → 2.8% |   0 B → 96 B | `system / BytecodeArray` | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– (shared function info) ←.(Handle scope)– (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Lm ←.shared– Lm (./node_modules/d3/dist/d3.min.js:2:194432)` |
| +220.0% |  +88 B |  16.1% → 3.7% | 40 B → 128 B | `system / ScopeInfo`     | `<unknown>` | `system / ScopeInfo ←.name_or_scope_info– Lm ←.shared– Lm (./node_modules/d3/dist/d3.min.js:2:194432)`                                                                                                                               |

#### `Um` (`./node_modules/d3/dist/d3.min.js:2:193552`)

| Change |  Delta |           % |        Self | Name                       | Location    | Path to function                                                                                                                                                                                      |
| -----: | -----: | ----------: | ----------: | -------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +144 B | 0.0% → 7.6% | 0 B → 144 B | `system / BytecodeArray`   | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:196295) ←.point– Object ←.prototype– Um (./node_modules/d3/dist/d3.min.js:2:193552)`       |
|    new | +100 B | 0.0% → 5.3% | 0 B → 100 B | `system / BytecodeArray`   | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:196180) ←.lineEnd– Object ←.prototype– Um (./node_modules/d3/dist/d3.min.js:2:193552)` |
|    new |  +80 B | 0.0% → 4.2% |  0 B → 80 B | `system / DescriptorArray` | `<unknown>` | `system / DescriptorArray ←.descriptors– system / Map ←.map– Object ←.prototype– Um (./node_modules/d3/dist/d3.min.js:2:193552)`                                                                      |
|    new |  +52 B | 0.0% → 2.8% |  0 B → 52 B | `system / BytecodeArray`   | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:196109) ←.areaEnd– Object ←.prototype– Um (./node_modules/d3/dist/d3.min.js:2:193552)` |
|    new |  +48 B | 0.0% → 2.5% |  0 B → 48 B | `point`                    | `<unknown>` | `point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:196295) ←.point– Object ←.prototype– Um (./node_modules/d3/dist/d3.min.js:2:193552)`                                                       |

#### `au` (`./node_modules/d3/dist/d3.min.js:2:79110`)

| Change |  Delta |            % |        Self | Name                           | Location    | Path to function                                                                                                                                      |
| -----: | -----: | -----------: | ----------: | ------------------------------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +352 B | 0.0% → 29.6% | 0 B → 352 B | `code`                         | `<unknown>` | `code ←.instruction_stream– (code) ←.code– au (./node_modules/d3/dist/d3.min.js:2:79110)`                                                             |
|    new | +192 B | 0.0% → 16.2% | 0 B → 192 B | `(instruction stream for au)`  | `<unknown>` | `(instruction stream for au) ←.instruction_stream– (code for au) ←.trusted_function_data– au ←.shared– au (./node_modules/d3/dist/d3.min.js:2:79110)` |
|    new |  +92 B |  0.0% → 7.7% |  0 B → 92 B | `system / ProtectedFixedArray` | `<unknown>` | `system / ProtectedFixedArray ←.deoptimization_data– (code) ←.code– au (./node_modules/d3/dist/d3.min.js:2:79110)`                                    |
|    new |  +64 B |  0.0% → 5.4% |  0 B → 64 B | `(code)`                       | `<unknown>` | `(code) ←.code– au (./node_modules/d3/dist/d3.min.js:2:79110)`                                                                                        |
|    new |  +64 B |  0.0% → 5.4% |  0 B → 64 B | `(code for au)`                | `<unknown>` | `(code for au) ←.trusted_function_data– au ←.shared– au (./node_modules/d3/dist/d3.min.js:2:79110)`                                                   |

#### `Jx` (`./node_modules/d3/dist/d3.min.js:2:210278`)

| Change |  Delta |            % |        Self | Name                  | Location    | Path to function                                                                                                                                            |
| -----: | -----: | -----------: | ----------: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +224 B | 0.0% → 20.2% | 0 B → 224 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– Jx (./node_modules/d3/dist/d3.min.js:2:210278)`                                                      |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `areaStart`           | `<unknown>` | `areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:210346) ←.areaStart– Object ←.prototype– Jx (./node_modules/d3/dist/d3.min.js:2:210278)` |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `lineEnd`             | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:210583) ←.lineEnd– Object ←.prototype– Jx (./node_modules/d3/dist/d3.min.js:2:210278)`       |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `areaEnd`             | `<unknown>` | `areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:210379) ←.areaEnd– Object ←.prototype– Jx (./node_modules/d3/dist/d3.min.js:2:210278)`       |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `point`               | `<unknown>` | `point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:210698) ←.point– Object ←.prototype– Jx (./node_modules/d3/dist/d3.min.js:2:210278)`             |

#### `Xx` (`./node_modules/d3/dist/d3.min.js:2:206588`)

| Change |  Delta |            % |        Self | Name                  | Location    | Path to function                                                                                                                                            |
| -----: | -----: | -----------: | ----------: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +224 B | 0.0% → 20.2% | 0 B → 224 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– Xx (./node_modules/d3/dist/d3.min.js:2:206588)`                                                      |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `areaStart`           | `<unknown>` | `areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:206658) ←.areaStart– Object ←.prototype– Xx (./node_modules/d3/dist/d3.min.js:2:206588)` |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `lineEnd`             | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:206820) ←.lineEnd– Object ←.prototype– Xx (./node_modules/d3/dist/d3.min.js:2:206588)`       |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `areaEnd`             | `<unknown>` | `areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:206691) ←.areaEnd– Object ←.prototype– Xx (./node_modules/d3/dist/d3.min.js:2:206588)`       |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `point`               | `<unknown>` | `point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:206935) ←.point– Object ←.prototype– Xx (./node_modules/d3/dist/d3.min.js:2:206588)`             |

#### `Wx` (`./node_modules/d3/dist/d3.min.js:2:207850`)

| Change |  Delta |            % |        Self | Name                  | Location    | Path to function                                                                                                                                            |
| -----: | -----: | -----------: | ----------: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +224 B | 0.0% → 20.2% | 0 B → 224 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– Wx (./node_modules/d3/dist/d3.min.js:2:207850)`                                                      |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `areaStart`           | `<unknown>` | `areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:207918) ←.areaStart– Object ←.prototype– Wx (./node_modules/d3/dist/d3.min.js:2:207850)` |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `lineEnd`             | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:208155) ←.lineEnd– Object ←.prototype– Wx (./node_modules/d3/dist/d3.min.js:2:207850)`       |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `areaEnd`             | `<unknown>` | `areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:207951) ←.areaEnd– Object ←.prototype– Wx (./node_modules/d3/dist/d3.min.js:2:207850)`       |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `point`               | `<unknown>` | `point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:208380) ←.point– Object ←.prototype– Wx (./node_modules/d3/dist/d3.min.js:2:207850)`             |

#### `Yx` (`./node_modules/d3/dist/d3.min.js:2:204737`)

| Change |  Delta |            % |        Self | Name                  | Location    | Path to function                                                                                                                                            |
| -----: | -----: | -----------: | ----------: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +224 B | 0.0% → 20.2% | 0 B → 224 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– Yx (./node_modules/d3/dist/d3.min.js:2:204737)`                                                      |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `areaStart`           | `<unknown>` | `areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:204807) ←.areaStart– Object ←.prototype– Yx (./node_modules/d3/dist/d3.min.js:2:204737)` |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `lineEnd`             | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:204969) ←.lineEnd– Object ←.prototype– Yx (./node_modules/d3/dist/d3.min.js:2:204737)`       |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `areaEnd`             | `<unknown>` | `areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:204840) ←.areaEnd– Object ←.prototype– Yx (./node_modules/d3/dist/d3.min.js:2:204737)`       |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `point`               | `<unknown>` | `point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:205191) ←.point– Object ←.prototype– Yx (./node_modules/d3/dist/d3.min.js:2:204737)`             |

#### `ym` (`./node_modules/d3/dist/d3.min.js:2:192478`)

| Change |  Delta |            % |        Self | Name                            | Location    | Path to function                                                                                                                                                                       |
| -----: | -----: | -----------: | ----------: | ------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +224 B | 0.0% → 22.2% | 0 B → 224 B | `(instruction stream for ym)`   | `<unknown>` | `(instruction stream for ym) ←.instruction_stream– (code for ym) ←.trusted_function_data– ym ←.shared– ym (./node_modules/d3/dist/d3.min.js:2:192478)`                                 |
|    new |  +96 B |  0.0% → 9.5% |  0 B → 96 B | `(BASELINE instruction stream)` | `<unknown>` | `(BASELINE instruction stream) ←.instruction_stream– (BASELINE code) ←.trusted_function_data– (shared function info) ←(several paths)– ym (./node_modules/d3/dist/d3.min.js:2:192478)` |
|    new |  +64 B |  0.0% → 6.3% |  0 B → 64 B | `(BASELINE code)`               | `<unknown>` | `(BASELINE code) ←.trusted_function_data– (shared function info) ←(several paths)– ym (./node_modules/d3/dist/d3.min.js:2:192478)`                                                     |
|    new |  +64 B |  0.0% → 6.3% |  0 B → 64 B | `(code for ym)`                 | `<unknown>` | `(code for ym) ←.trusted_function_data– ym ←.shared– ym (./node_modules/d3/dist/d3.min.js:2:192478)`                                                                                   |
|    new |  +56 B |  0.0% → 5.6% |  0 B → 56 B | `system / BytecodeArray`        | `<unknown>` | `system / BytecodeArray ←.interpreter_data– (code for ym) ←.trusted_function_data– ym ←.shared– ym (./node_modules/d3/dist/d3.min.js:2:192478)`                                        |

#### `lw` (`./node_modules/d3/dist/d3.min.js:2:212348`)

| Change |  Delta |            % |        Self | Name                  | Location    | Path to function                                                                                                                                            |
| -----: | -----: | -----------: | ----------: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +224 B | 0.0% → 20.2% | 0 B → 224 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– lw (./node_modules/d3/dist/d3.min.js:2:212348)`                                                      |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `areaStart`           | `<unknown>` | `areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:215014) ←.areaStart– Object ←.prototype– lw (./node_modules/d3/dist/d3.min.js:2:212348)` |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `lineEnd`             | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:215138) ←.lineEnd– Object ←.prototype– lw (./node_modules/d3/dist/d3.min.js:2:212348)`       |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `areaEnd`             | `<unknown>` | `areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:215047) ←.areaEnd– Object ←.prototype– lw (./node_modules/d3/dist/d3.min.js:2:212348)`       |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `point`               | `<unknown>` | `point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:215365) ←.point– Object ←.prototype– lw (./node_modules/d3/dist/d3.min.js:2:212348)`             |

#### `fw` (`./node_modules/d3/dist/d3.min.js:2:211922`)

| Change |  Delta |            % |        Self | Name                  | Location    | Path to function                                                                                                                                            |
| -----: | -----: | -----------: | ----------: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +224 B | 0.0% → 20.2% | 0 B → 224 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– fw (./node_modules/d3/dist/d3.min.js:2:211922)`                                                      |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `areaStart`           | `<unknown>` | `areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:214426) ←.areaStart– Object ←.prototype– fw (./node_modules/d3/dist/d3.min.js:2:211922)` |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `lineEnd`             | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:214538) ←.lineEnd– Object ←.prototype– fw (./node_modules/d3/dist/d3.min.js:2:211922)`       |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `areaEnd`             | `<unknown>` | `areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:214459) ←.areaEnd– Object ←.prototype– fw (./node_modules/d3/dist/d3.min.js:2:211922)`       |
|    new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `point`               | `<unknown>` | `point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:214940) ←.point– Object ←.prototype– fw (./node_modules/d3/dist/d3.min.js:2:211922)`             |

#### `Gm` (`./node_modules/d3/dist/d3.min.js:2:196504`)

|  Change |  Delta |            % |        Self | Name                     | Location    | Path to function                                                                                                                                            |
| ------: | -----: | -----------: | ----------: | ------------------------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new | +224 B | 0.0% → 20.2% | 0 B → 224 B | `(object properties)`    | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– Gm (./node_modules/d3/dist/d3.min.js:2:196504)`                                                      |
| removed |  -64 B | 29.1% → 0.0% |  64 B → 0 B | `system / BytecodeArray` | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– Gm ←.shared– Gm (./node_modules/d3/dist/d3.min.js:2:196484)`                                               |
|     new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `areaStart`              | `<unknown>` | `areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:197452) ←.areaStart– Object ←.prototype– Gm (./node_modules/d3/dist/d3.min.js:2:196504)` |
|     new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `lineEnd`                | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:197584) ←.lineEnd– Object ←.prototype– Gm (./node_modules/d3/dist/d3.min.js:2:196504)`       |
|     new |  +48 B |  0.0% → 4.3% |  0 B → 48 B | `areaEnd`                | `<unknown>` | `areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:197496) ←.areaEnd– Object ←.prototype– Gm (./node_modules/d3/dist/d3.min.js:2:196504)`       |

#### `Kx` (`./node_modules/d3/dist/d3.min.js:2:209010`)

| Change |  Delta |            % |        Self | Name                  | Location    | Path to function                                                                                                                                            |
| -----: | -----: | -----------: | ----------: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +224 B | 0.0% → 27.1% | 0 B → 224 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– Kx (./node_modules/d3/dist/d3.min.js:2:209010)`                                                      |
|    new |  +48 B |  0.0% → 5.8% |  0 B → 48 B | `lineEnd`             | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:209323) ←.lineEnd– Object ←.prototype– Kx (./node_modules/d3/dist/d3.min.js:2:209010)`       |
|    new |  +48 B |  0.0% → 5.8% |  0 B → 48 B | `point`               | `<unknown>` | `point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:209617) ←.point– Object ←.prototype– Kx (./node_modules/d3/dist/d3.min.js:2:209010)`             |
|    new |  +48 B |  0.0% → 5.8% |  0 B → 48 B | `lineStart`           | `<unknown>` | `lineStart ←.shared– lineStart (./node_modules/d3/dist/d3.min.js:2:209102) ←.lineStart– Object ←.prototype– Kx (./node_modules/d3/dist/d3.min.js:2:209010)` |
|    new |  +48 B |  0.0% → 5.8% |  0 B → 48 B | `Kx`                  | `<unknown>` | `Kx ←.shared– Kx (./node_modules/d3/dist/d3.min.js:2:209010)`                                                                                               |

#### `jx` (`./node_modules/d3/dist/d3.min.js:2:205618`)

| Change |  Delta |            % |        Self | Name                  | Location    | Path to function                                                                                                                                            |
| -----: | -----: | -----------: | ----------: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +224 B | 0.0% → 27.1% | 0 B → 224 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– jx (./node_modules/d3/dist/d3.min.js:2:205618)`                                                      |
|    new |  +48 B |  0.0% → 5.8% |  0 B → 48 B | `lineEnd`             | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:205858) ←.lineEnd– Object ←.prototype– jx (./node_modules/d3/dist/d3.min.js:2:205618)`       |
|    new |  +48 B |  0.0% → 5.8% |  0 B → 48 B | `point`               | `<unknown>` | `point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:206152) ←.point– Object ←.prototype– jx (./node_modules/d3/dist/d3.min.js:2:205618)`             |
|    new |  +48 B |  0.0% → 5.8% |  0 B → 48 B | `lineStart`           | `<unknown>` | `lineStart ←.shared– lineStart (./node_modules/d3/dist/d3.min.js:2:205712) ←.lineStart– Object ←.prototype– jx (./node_modules/d3/dist/d3.min.js:2:205618)` |
|    new |  +48 B |  0.0% → 5.8% |  0 B → 48 B | `jx`                  | `<unknown>` | `jx ←.shared– jx (./node_modules/d3/dist/d3.min.js:2:205618)`                                                                                               |

#### `Ix` (`./node_modules/d3/dist/d3.min.js:2:201749`)

| Change |  Delta |            % |        Self | Name                  | Location    | Path to function                                                                                                                                            |
| -----: | -----: | -----------: | ----------: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +128 B | 0.0% → 17.7% | 0 B → 128 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– Ix (./node_modules/d3/dist/d3.min.js:2:201749)`                                                      |
|    new |  +48 B |  0.0% → 6.6% |  0 B → 48 B | `lineStart`           | `<unknown>` | `lineStart ←.shared– lineStart (./node_modules/d3/dist/d3.min.js:2:204088) ←.lineStart– Object ←.prototype– Ix (./node_modules/d3/dist/d3.min.js:2:201749)` |
|    new |  +48 B |  0.0% → 6.6% |  0 B → 48 B | `lineEnd`             | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:204154) ←.lineEnd– Object ←.prototype– Ix (./node_modules/d3/dist/d3.min.js:2:201749)`       |
|    new |  +48 B |  0.0% → 6.6% |  0 B → 48 B | `point`               | `<unknown>` | `point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:204417) ←.point– Object ←.prototype– Ix (./node_modules/d3/dist/d3.min.js:2:201749)`             |
|    new |  +48 B |  0.0% → 6.6% |  0 B → 48 B | `Ix`                  | `<unknown>` | `Ix ←.shared– Ix (./node_modules/d3/dist/d3.min.js:2:201749)`                                                                                               |

#### `nw` (`./node_modules/d3/dist/d3.min.js:2:211383`)

| Change |  Delta |            % |        Self | Name                  | Location    | Path to function                                                                                                                                            |
| -----: | -----: | -----------: | ----------: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +224 B | 0.0% → 27.1% | 0 B → 224 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– nw (./node_modules/d3/dist/d3.min.js:2:211383)`                                                      |
|    new |  +48 B |  0.0% → 5.8% |  0 B → 48 B | `lineEnd`             | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:213119) ←.lineEnd– Object ←.prototype– nw (./node_modules/d3/dist/d3.min.js:2:211383)`       |
|    new |  +48 B |  0.0% → 5.8% |  0 B → 48 B | `point`               | `<unknown>` | `point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:213176) ←.point– Object ←.prototype– nw (./node_modules/d3/dist/d3.min.js:2:211383)`             |
|    new |  +48 B |  0.0% → 5.8% |  0 B → 48 B | `lineStart`           | `<unknown>` | `lineStart ←.shared– lineStart (./node_modules/d3/dist/d3.min.js:2:213085) ←.lineStart– Object ←.prototype– nw (./node_modules/d3/dist/d3.min.js:2:211383)` |
|    new |  +40 B |  0.0% → 4.8% |  0 B → 40 B | `system / Map`        | `<unknown>` | `system / Map ←.map– Object ←.prototype– nw (./node_modules/d3/dist/d3.min.js:2:211383)`                                                                    |

#### `tx` (`./node_modules/d3/dist/d3.min.js:2:198280`)

| Change | Delta |           % |       Self | Name                       | Location    | Path to function                                                                                                                                            |
| -----: | ----: | ----------: | ---------: | -------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +68 B | 0.0% → 9.3% | 0 B → 68 B | `system / DescriptorArray` | `<unknown>` | `system / DescriptorArray ←.descriptors– system / Map ←.map– Object ←.prototype– tx (./node_modules/d3/dist/d3.min.js:2:198280)`                            |
|    new | +68 B | 0.0% → 9.3% | 0 B → 68 B | `system / DescriptorArray` | `<unknown>` | `system / DescriptorArray ←.descriptors– system / Map ←.map– tx (./node_modules/d3/dist/d3.min.js:2:198280)`                                                |
|    new | +48 B | 0.0% → 6.6% | 0 B → 48 B | `point`                    | `<unknown>` | `point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:198342) ←.point– Object ←.prototype– tx (./node_modules/d3/dist/d3.min.js:2:198280)`             |
|    new | +48 B | 0.0% → 6.6% | 0 B → 48 B | `lineEnd`                  | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:198333) ←.lineEnd– Object ←.prototype– tx (./node_modules/d3/dist/d3.min.js:2:198280)`       |
|    new | +48 B | 0.0% → 6.6% | 0 B → 48 B | `lineStart`                | `<unknown>` | `lineStart ←.shared– lineStart (./node_modules/d3/dist/d3.min.js:2:198309) ←.lineStart– Object ←.prototype– tx (./node_modules/d3/dist/d3.min.js:2:198280)` |

#### `km` (`./node_modules/d3/dist/d3.min.js:2:192703`)

| Change | Delta |            % |       Self | Name                     | Location    | Path to function                                                                                                                                                                                                                     |
| -----: | ----: | -----------: | ---------: | ------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    new | +72 B | 0.0% → 11.9% | 0 B → 72 B | `system / BytecodeArray` | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– km ←.shared– km (./node_modules/d3/dist/d3.min.js:2:192703)`                                                                                                                        |
|    new | +64 B | 0.0% → 10.6% | 0 B → 64 B | `system / BytecodeArray` | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– (shared function info) ←.(Bootstrapper)– (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– km ←.shared– km (./node_modules/d3/dist/d3.min.js:2:192703)` |
|    new | +56 B |  0.0% → 9.3% | 0 B → 56 B | `system / ScopeInfo`     | `<unknown>` | `system / ScopeInfo ←.name_or_scope_info– km ←.shared– km (./node_modules/d3/dist/d3.min.js:2:192703)`                                                                                                                               |
|    new | +48 B |  0.0% → 7.9% | 0 B → 48 B | `(shared function info)` | `<unknown>` | `(shared function info) ←.(Bootstrapper)– (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– km ←.shared– km (./node_modules/d3/dist/d3.min.js:2:192703)`                                                 |
|    new | +48 B |  0.0% → 7.9% | 0 B → 48 B | `(shared function info)` | `<unknown>` | `(shared function info) ← (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– km ←.shared– km (./node_modules/d3/dist/d3.min.js:2:192703)`                                                                 |

#### `Ux` (`./node_modules/d3/dist/d3.min.js:2:201718`)

| Change | Delta |             % |          Self | Name                  | Location                                    | Path to function                                                                                                                                            |
| -----: | ----: | ------------: | ------------: | --------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +75.0% | +96 B | 17.7% → 20.2% | 128 B → 224 B | `(object properties)` | `<unknown>`                                 | `(object properties) ←.properties– Object ←.prototype– Ux (./node_modules/d3/dist/d3.min.js:2:201718)`                                                      |
|    new | +48 B |   0.0% → 4.3% |    0 B → 48 B | `areaStart`           | `<unknown>`                                 | `areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:203455) ←.areaStart– Object ←.prototype– Ux (./node_modules/d3/dist/d3.min.js:2:201718)` |
|    new | +48 B |   0.0% → 4.3% |    0 B → 48 B | `areaEnd`             | `<unknown>`                                 | `areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:203488) ←.areaEnd– Object ←.prototype– Ux (./node_modules/d3/dist/d3.min.js:2:201718)`       |
|    new | +32 B |   0.0% → 2.9% |    0 B → 32 B | `areaStart`           | `./node_modules/d3/dist/d3.min.js:2:203455` | `areaStart ←.areaStart– Object ←.prototype– Ux (./node_modules/d3/dist/d3.min.js:2:201718)`                                                                 |
|    new | +32 B |   0.0% → 2.9% |    0 B → 32 B | `areaEnd`             | `./node_modules/d3/dist/d3.min.js:2:203488` | `areaEnd ←.areaEnd– Object ←.prototype– Ux (./node_modules/d3/dist/d3.min.js:2:201718)`                                                                     |

#### `Fx` (`./node_modules/d3/dist/d3.min.js:2:201656`)

| Change | Delta |           % |       Self | Name           | Location                                    | Path to function                                                                                                                                                                                                                                        |
| -----: | ----: | ----------: | ---------: | -------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +48 B | 0.0% → 4.3% | 0 B → 48 B | `areaStart`    | `<unknown>`                                 | `areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:201822) ←.areaStart– Object ←.prototype– Fx (./node_modules/d3/dist/d3.min.js:2:201656)`                                                                                             |
|    new | +48 B | 0.0% → 4.3% | 0 B → 48 B | `areaEnd`      | `<unknown>`                                 | `areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:201855) ←.areaEnd– Object ←.prototype– Fx (./node_modules/d3/dist/d3.min.js:2:201656)`                                                                                                   |
|    new | +32 B | 0.0% → 2.9% | 0 B → 32 B | `areaStart`    | `./node_modules/d3/dist/d3.min.js:2:201822` | `areaStart ←.areaStart– Object ←.prototype– Fx (./node_modules/d3/dist/d3.min.js:2:201656)`                                                                                                                                                             |
|    new | +32 B | 0.0% → 2.9% | 0 B → 32 B | `areaEnd`      | `./node_modules/d3/dist/d3.min.js:2:201855` | `areaEnd ←.areaEnd– Object ←.prototype– Fx (./node_modules/d3/dist/d3.min.js:2:201656)`                                                                                                                                                                 |
|    new | +24 B | 0.0% → 2.2% | 0 B → 24 B | `Fx.areaStart` | `<unknown>`                                 | `Fx.areaStart ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:201822) ←.areaStart– Object ←.prototype– Fx (./node_modules/d3/dist/d3.min.js:2:201656)` |

#### `(anonymous)` (`./node_modules/d3/dist/d3.min.js:2:30289`)

|  Change |       Delta |           % |           Self | Name                           | Location    | Path to function                                                                                                                                                 |
| ------: | ----------: | ----------: | -------------: | ------------------------------ | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -11.343 KiB | 5.0% → 0.0% | 11.3 KiB → 0 B | `code`                         | `<unknown>` | `code ←.instruction_stream– (code) ←.code– (anonymous) (./node_modules/d3/dist/d3.min.js:2:77113)`                                                               |
| removed |  -4.601 KiB | 2.0% → 0.0% |  4.6 KiB → 0 B | `system / TrustedByteArray`    | `<unknown>` | `system / TrustedByteArray ←.<dummy>– system / ProtectedFixedArray ←.deoptimization_data– (code) ←.code– (anonymous) (./node_modules/d3/dist/d3.min.js:2:77113)` |
| removed |  -2.246 KiB | 1.0% → 0.0% | 2.25 KiB → 0 B | `system / ProtectedFixedArray` | `<unknown>` | `system / ProtectedFixedArray ←.deoptimization_data– (code) ←.code– (anonymous) (./node_modules/d3/dist/d3.min.js:2:77113)`                                      |
| removed |      -196 B | 0.1% → 0.0% |    196 B → 0 B | `system / TrustedByteArray`    | `<unknown>` | `system / TrustedByteArray ←.relocation_info– code ←.instruction_stream– (code) ←.code– (anonymous) (./node_modules/d3/dist/d3.min.js:2:77113)`                  |
| removed |      -192 B | 0.1% → 0.0% |    192 B → 0 B | `(object elements)`            | `<unknown>` | `(object elements) ←.elements– Array ←.t– system / Context ←.context– (anonymous) (./node_modules/d3/dist/d3.min.js:2:75971)`                                    |

#### `Bm` (`./node_modules/d3/dist/d3.min.js:2:193642`)

|  Change |  Delta |            % |        Self | Name                     | Location    | Path to function                                                                                                                                                                                                                 |
| ------: | -----: | -----------: | ----------: | ------------------------ | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -252 B | 12.8% → 0.0% | 252 B → 0 B | `system / BytecodeArray` | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– Bm ←.shared– Bm (./node_modules/d3/dist/d3.min.js:2:193620)`                                                                                                                    |
| removed | -248 B | 12.6% → 0.0% | 248 B → 0 B | `system / BytecodeArray` | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– u ← (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Bm ←.shared– Bm (./node_modules/d3/dist/d3.min.js:2:193620)`                                  |
| removed | -104 B |  5.3% → 0.0% | 104 B → 0 B | `system / ScopeInfo`     | `<unknown>` | `system / ScopeInfo ←.name_or_scope_info– Bm ←.shared– Bm (./node_modules/d3/dist/d3.min.js:2:193620)`                                                                                                                           |
| removed |  -88 B |  4.5% → 0.0% |  88 B → 0 B | `system / BytecodeArray` | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– (shared function info) ←.(Builtins)– (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Bm ←.shared– Bm (./node_modules/d3/dist/d3.min.js:2:193620)` |
| removed |  -88 B |  4.5% → 0.0% |  88 B → 0 B | `system / BytecodeArray` | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– (shared function info) ←.(GC roots)– (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Bm ←.shared– Bm (./node_modules/d3/dist/d3.min.js:2:193620)` |

#### `qm` (`./node_modules/d3/dist/d3.min.js:2:193482`)

|  Change |  Delta |           % |        Self | Name                       | Location    | Path to function                                                                                                                                                                                      |
| ------: | -----: | ----------: | ----------: | -------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -144 B | 7.6% → 0.0% | 144 B → 0 B | `system / BytecodeArray`   | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:196246) ←.point– Object ←.prototype– qm (./node_modules/d3/dist/d3.min.js:2:193503)`       |
| removed | -100 B | 5.3% → 0.0% | 100 B → 0 B | `system / BytecodeArray`   | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:196131) ←.lineEnd– Object ←.prototype– qm (./node_modules/d3/dist/d3.min.js:2:193503)` |
| removed |  -80 B | 4.2% → 0.0% |  80 B → 0 B | `system / DescriptorArray` | `<unknown>` | `system / DescriptorArray ←.descriptors– system / Map ←.map– Object ←.prototype– qm (./node_modules/d3/dist/d3.min.js:2:193503)`                                                                      |
| removed |  -52 B | 2.8% → 0.0% |  52 B → 0 B | `system / BytecodeArray`   | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:196060) ←.areaEnd– Object ←.prototype– qm (./node_modules/d3/dist/d3.min.js:2:193503)` |
| removed |  -48 B | 2.5% → 0.0% |  48 B → 0 B | `point`                    | `<unknown>` | `point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:196246) ←.point– Object ←.prototype– qm (./node_modules/d3/dist/d3.min.js:2:193503)`                                                       |

#### `Ym` (`./node_modules/d3/dist/d3.min.js:2:193669`)

|  Change |  Delta |             % |          Self | Name                     | Location    | Path to function                                                                                                                                                                                                                         |
| ------: | -----: | ------------: | ------------: | ------------------------ | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -444 B |  12.9% → 0.0% |   444 B → 0 B | `system / BytecodeArray` | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– f ← (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Ym ←.shared– Ym (./node_modules/d3/dist/d3.min.js:2:194383)`                                          |
|     new | +248 B |  0.0% → 12.6% |   0 B → 248 B | `system / BytecodeArray` | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– u ← (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Ym ←.shared– Ym (./node_modules/d3/dist/d3.min.js:2:193669)`                                          |
|  -35.7% | -140 B | 11.4% → 12.8% | 392 B → 252 B | `system / BytecodeArray` | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– Ym ←.shared– Ym (./node_modules/d3/dist/d3.min.js:2:193669)`                                                                                                                            |
| removed |  -96 B |   2.8% → 0.0% |    96 B → 0 B | `system / BytecodeArray` | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– (shared function info) ←.(Handle scope)– (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Ym ←.shared– Ym (./node_modules/d3/dist/d3.min.js:2:194383)`     |
| removed |  -88 B |   2.6% → 0.0% |    88 B → 0 B | `system / BytecodeArray` | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– (shared function info) ←.(External strings)– (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Ym ←.shared– Ym (./node_modules/d3/dist/d3.min.js:2:194383)` |

#### `Qx` (`./node_modules/d3/dist/d3.min.js:2:210229`)

|  Change |  Delta |            % |        Self | Name                  | Location    | Path to function                                                                                                                                            |
| ------: | -----: | -----------: | ----------: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -224 B | 20.2% → 0.0% | 224 B → 0 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– Qx (./node_modules/d3/dist/d3.min.js:2:210229)`                                                      |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `Qx`                  | `<unknown>` | `Qx ←.shared– Qx (./node_modules/d3/dist/d3.min.js:2:210229)`                                                                                               |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `areaStart`           | `<unknown>` | `areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:210297) ←.areaStart– Object ←.prototype– Qx (./node_modules/d3/dist/d3.min.js:2:210229)` |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `lineEnd`             | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:210534) ←.lineEnd– Object ←.prototype– Qx (./node_modules/d3/dist/d3.min.js:2:210229)`       |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `areaEnd`             | `<unknown>` | `areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:210330) ←.areaEnd– Object ←.prototype– Qx (./node_modules/d3/dist/d3.min.js:2:210229)`       |

#### `Xm` (`./node_modules/d3/dist/d3.min.js:2:196455`)

|  Change |  Delta |            % |        Self | Name                  | Location    | Path to function                                                                                                                                            |
| ------: | -----: | -----------: | ----------: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -224 B | 20.2% → 0.0% | 224 B → 0 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– Xm (./node_modules/d3/dist/d3.min.js:2:196455)`                                                      |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `Xm`                  | `<unknown>` | `Xm ←.shared– Xm (./node_modules/d3/dist/d3.min.js:2:196455)`                                                                                               |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `areaStart`           | `<unknown>` | `areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:197403) ←.areaStart– Object ←.prototype– Xm (./node_modules/d3/dist/d3.min.js:2:196455)` |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `lineEnd`             | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:197535) ←.lineEnd– Object ←.prototype– Xm (./node_modules/d3/dist/d3.min.js:2:196455)`       |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `areaEnd`             | `<unknown>` | `areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:197447) ←.areaEnd– Object ←.prototype– Xm (./node_modules/d3/dist/d3.min.js:2:196455)`       |

#### `Hx` (`./node_modules/d3/dist/d3.min.js:2:206539`)

|  Change |  Delta |            % |        Self | Name                  | Location    | Path to function                                                                                                                                            |
| ------: | -----: | -----------: | ----------: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -224 B | 20.2% → 0.0% | 224 B → 0 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– Hx (./node_modules/d3/dist/d3.min.js:2:206539)`                                                      |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `Hx`                  | `<unknown>` | `Hx ←.shared– Hx (./node_modules/d3/dist/d3.min.js:2:206539)`                                                                                               |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `areaStart`           | `<unknown>` | `areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:206609) ←.areaStart– Object ←.prototype– Hx (./node_modules/d3/dist/d3.min.js:2:206539)` |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `lineEnd`             | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:206771) ←.lineEnd– Object ←.prototype– Hx (./node_modules/d3/dist/d3.min.js:2:206539)`       |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `areaEnd`             | `<unknown>` | `areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:206642) ←.areaEnd– Object ←.prototype– Hx (./node_modules/d3/dist/d3.min.js:2:206539)`       |

#### `gm` (`./node_modules/d3/dist/d3.min.js:2:192429`)

|  Change |  Delta |            % |        Self | Name                            | Location    | Path to function                                                                                                                                                                       |
| ------: | -----: | -----------: | ----------: | ------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -224 B | 22.2% → 0.0% | 224 B → 0 B | `(instruction stream for gm)`   | `<unknown>` | `(instruction stream for gm) ←.instruction_stream– (code for gm) ←.trusted_function_data– gm ←.shared– gm (./node_modules/d3/dist/d3.min.js:2:192429)`                                 |
| removed |  -96 B |  9.5% → 0.0% |  96 B → 0 B | `(BASELINE instruction stream)` | `<unknown>` | `(BASELINE instruction stream) ←.instruction_stream– (BASELINE code) ←.trusted_function_data– (shared function info) ←(several paths)– gm (./node_modules/d3/dist/d3.min.js:2:192429)` |
| removed |  -64 B |  6.3% → 0.0% |  64 B → 0 B | `(BASELINE code)`               | `<unknown>` | `(BASELINE code) ←.trusted_function_data– (shared function info) ←(several paths)– gm (./node_modules/d3/dist/d3.min.js:2:192429)`                                                     |
| removed |  -64 B |  6.3% → 0.0% |  64 B → 0 B | `(code for gm)`                 | `<unknown>` | `(code for gm) ←.trusted_function_data– gm ←.shared– gm (./node_modules/d3/dist/d3.min.js:2:192429)`                                                                                   |
| removed |  -56 B |  5.6% → 0.0% |  56 B → 0 B | `system / BytecodeArray`        | `<unknown>` | `system / BytecodeArray ←.interpreter_data– (code for gm) ←.trusted_function_data– gm ←.shared– gm (./node_modules/d3/dist/d3.min.js:2:192429)`                                        |

#### `Bx` (`./node_modules/d3/dist/d3.min.js:2:204588`)

|  Change |  Delta |            % |        Self | Name                  | Location    | Path to function                                                                                                                                            |
| ------: | -----: | -----------: | ----------: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -224 B | 20.2% → 0.0% | 224 B → 0 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– Bx (./node_modules/d3/dist/d3.min.js:2:204688)`                                                      |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `areaStart`           | `<unknown>` | `areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:204758) ←.areaStart– Object ←.prototype– Bx (./node_modules/d3/dist/d3.min.js:2:204688)` |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `lineEnd`             | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:204920) ←.lineEnd– Object ←.prototype– Bx (./node_modules/d3/dist/d3.min.js:2:204688)`       |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `areaEnd`             | `<unknown>` | `areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:204791) ←.areaEnd– Object ←.prototype– Bx (./node_modules/d3/dist/d3.min.js:2:204688)`       |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `point`               | `<unknown>` | `point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:205142) ←.point– Object ←.prototype– Bx (./node_modules/d3/dist/d3.min.js:2:204688)`             |

#### `Vx` (`./node_modules/d3/dist/d3.min.js:2:207395`)

|  Change |  Delta |            % |        Self | Name                  | Location    | Path to function                                                                                                                                            |
| ------: | -----: | -----------: | ----------: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -224 B | 20.2% → 0.0% | 224 B → 0 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– Vx (./node_modules/d3/dist/d3.min.js:2:207801)`                                                      |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `areaStart`           | `<unknown>` | `areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:207869) ←.areaStart– Object ←.prototype– Vx (./node_modules/d3/dist/d3.min.js:2:207801)` |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `lineEnd`             | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:208106) ←.lineEnd– Object ←.prototype– Vx (./node_modules/d3/dist/d3.min.js:2:207801)`       |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `areaEnd`             | `<unknown>` | `areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:207902) ←.areaEnd– Object ←.prototype– Vx (./node_modules/d3/dist/d3.min.js:2:207801)`       |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `point`               | `<unknown>` | `point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:208331) ←.point– Object ←.prototype– Vx (./node_modules/d3/dist/d3.min.js:2:207801)`             |

#### `Rx` (`./node_modules/d3/dist/d3.min.js:2:201499`)

|  Change |  Delta |            % |        Self | Name                  | Location    | Path to function                                                                                                                                            |
| ------: | -----: | -----------: | ----------: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -224 B | 20.2% → 0.0% | 224 B → 0 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– Rx (./node_modules/d3/dist/d3.min.js:2:201607)`                                                      |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `areaStart`           | `<unknown>` | `areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:201773) ←.areaStart– Object ←.prototype– Rx (./node_modules/d3/dist/d3.min.js:2:201607)` |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `lineEnd`             | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:201917) ←.lineEnd– Object ←.prototype– Rx (./node_modules/d3/dist/d3.min.js:2:201607)`       |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `areaEnd`             | `<unknown>` | `areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:201806) ←.areaEnd– Object ←.prototype– Rx (./node_modules/d3/dist/d3.min.js:2:201607)`       |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `point`               | `<unknown>` | `point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:202133) ←.point– Object ←.prototype– Rx (./node_modules/d3/dist/d3.min.js:2:201607)`             |

#### `sw` (`./node_modules/d3/dist/d3.min.js:2:211953`)

|  Change |  Delta |            % |        Self | Name                  | Location    | Path to function                                                                                                                                            |
| ------: | -----: | -----------: | ----------: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -224 B | 20.2% → 0.0% | 224 B → 0 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– sw (./node_modules/d3/dist/d3.min.js:2:212299)`                                                      |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `areaStart`           | `<unknown>` | `areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:214965) ←.areaStart– Object ←.prototype– sw (./node_modules/d3/dist/d3.min.js:2:212299)` |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `lineEnd`             | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:215089) ←.lineEnd– Object ←.prototype– sw (./node_modules/d3/dist/d3.min.js:2:212299)`       |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `areaEnd`             | `<unknown>` | `areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:214998) ←.areaEnd– Object ←.prototype– sw (./node_modules/d3/dist/d3.min.js:2:212299)`       |
| removed |  -48 B |  4.3% → 0.0% |  48 B → 0 B | `point`               | `<unknown>` | `point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:215316) ←.point– Object ←.prototype– sw (./node_modules/d3/dist/d3.min.js:2:212299)`             |

#### `a` (`./node_modules/d3/dist/d3.min.js:2:99767`)

|  Change |  Delta |            % |        Self | Name                           | Location    | Path to function                                                                                                                                       |
| ------: | -----: | -----------: | ----------: | ------------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| removed | -544 B | 49.1% → 0.0% | 544 B → 0 B | `code`                         | `<unknown>` | `code ←.instruction_stream– (code) ←.code– a (./node_modules/d3/dist/d3.min.js:2:78474)`                                                               |
| removed | -128 B | 11.6% → 0.0% | 128 B → 0 B | `system / ProtectedFixedArray` | `<unknown>` | `system / ProtectedFixedArray ←.deoptimization_data– (code) ←.code– a (./node_modules/d3/dist/d3.min.js:2:78474)`                                      |
| removed |  -72 B |  6.5% → 0.0% |  72 B → 0 B | `system / TrustedByteArray`    | `<unknown>` | `system / TrustedByteArray ←.<dummy>– system / ProtectedFixedArray ←.deoptimization_data– (code) ←.code– a (./node_modules/d3/dist/d3.min.js:2:78474)` |
| removed |  -64 B |  5.8% → 0.0% |  64 B → 0 B | `(code)`                       | `<unknown>` | `(code) ←.code– a (./node_modules/d3/dist/d3.min.js:2:78474)`                                                                                          |
| removed |  -28 B |  2.5% → 0.0% |  28 B → 0 B | `system / TrustedByteArray`    | `<unknown>` | `system / TrustedByteArray ←.relocation_info– code ←.instruction_stream– (code) ←.code– a (./node_modules/d3/dist/d3.min.js:2:78474)`                  |

#### `Qm` (`./node_modules/d3/dist/d3.min.js:2:197362`)

|  Change | Delta |           % |       Self | Name                       | Location    | Path to function                                                                                                                                            |
| ------: | ----: | ----------: | ---------: | -------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -92 B | 9.3% → 0.0% | 92 B → 0 B | `system / DescriptorArray` | `<unknown>` | `system / DescriptorArray ←.descriptors– system / Map ←.map– Object ←.prototype– Qm (./node_modules/d3/dist/d3.min.js:2:197651)`                            |
| removed | -68 B | 6.9% → 0.0% | 68 B → 0 B | `system / DescriptorArray` | `<unknown>` | `system / DescriptorArray ←.descriptors– system / Map ←.map– Qm (./node_modules/d3/dist/d3.min.js:2:197651)`                                                |
| removed | -48 B | 4.9% → 0.0% | 48 B → 0 B | `point`                    | `<unknown>` | `point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:197871) ←.point– Object ←.prototype– Qm (./node_modules/d3/dist/d3.min.js:2:197651)`             |
| removed | -48 B | 4.9% → 0.0% | 48 B → 0 B | `lineEnd`                  | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:197766) ←.lineEnd– Object ←.prototype– Qm (./node_modules/d3/dist/d3.min.js:2:197651)`       |
| removed | -48 B | 4.9% → 0.0% | 48 B → 0 B | `lineStart`                | `<unknown>` | `lineStart ←.shared– lineStart (./node_modules/d3/dist/d3.min.js:2:197742) ←.lineStart– Object ←.prototype– Qm (./node_modules/d3/dist/d3.min.js:2:197651)` |

#### `Lx` (`./node_modules/d3/dist/d3.min.js:2:205569`)

|  Change |  Delta |            % |        Self | Name                  | Location    | Path to function                                                                                                                                            |
| ------: | -----: | -----------: | ----------: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -224 B | 27.1% → 0.0% | 224 B → 0 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– Lx (./node_modules/d3/dist/d3.min.js:2:205569)`                                                      |
| removed |  -48 B |  5.8% → 0.0% |  48 B → 0 B | `Lx`                  | `<unknown>` | `Lx ←.shared– Lx (./node_modules/d3/dist/d3.min.js:2:205569)`                                                                                               |
| removed |  -48 B |  5.8% → 0.0% |  48 B → 0 B | `lineEnd`             | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:205809) ←.lineEnd– Object ←.prototype– Lx (./node_modules/d3/dist/d3.min.js:2:205569)`       |
| removed |  -48 B |  5.8% → 0.0% |  48 B → 0 B | `point`               | `<unknown>` | `point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:206103) ←.point– Object ←.prototype– Lx (./node_modules/d3/dist/d3.min.js:2:205569)`             |
| removed |  -48 B |  5.8% → 0.0% |  48 B → 0 B | `lineStart`           | `<unknown>` | `lineStart ←.shared– lineStart (./node_modules/d3/dist/d3.min.js:2:205663) ←.lineStart– Object ←.prototype– Lx (./node_modules/d3/dist/d3.min.js:2:205569)` |

#### `tw` (`./node_modules/d3/dist/d3.min.js:2:211334`)

|  Change |  Delta |            % |        Self | Name                  | Location    | Path to function                                                                                                                                            |
| ------: | -----: | -----------: | ----------: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -224 B | 27.1% → 0.0% | 224 B → 0 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– tw (./node_modules/d3/dist/d3.min.js:2:211334)`                                                      |
| removed |  -48 B |  5.8% → 0.0% |  48 B → 0 B | `tw`                  | `<unknown>` | `tw ←.shared– tw (./node_modules/d3/dist/d3.min.js:2:211334)`                                                                                               |
| removed |  -48 B |  5.8% → 0.0% |  48 B → 0 B | `lineEnd`             | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:213070) ←.lineEnd– Object ←.prototype– tw (./node_modules/d3/dist/d3.min.js:2:211334)`       |
| removed |  -48 B |  5.8% → 0.0% |  48 B → 0 B | `point`               | `<unknown>` | `point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:213127) ←.point– Object ←.prototype– tw (./node_modules/d3/dist/d3.min.js:2:211334)`             |
| removed |  -48 B |  5.8% → 0.0% |  48 B → 0 B | `lineStart`           | `<unknown>` | `lineStart ←.shared– lineStart (./node_modules/d3/dist/d3.min.js:2:213036) ←.lineStart– Object ←.prototype– tw (./node_modules/d3/dist/d3.min.js:2:211334)` |

#### `Zx` (`./node_modules/d3/dist/d3.min.js:2:208961`)

|  Change |  Delta |            % |        Self | Name                  | Location    | Path to function                                                                                                                                            |
| ------: | -----: | -----------: | ----------: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -224 B | 27.1% → 0.0% | 224 B → 0 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– Zx (./node_modules/d3/dist/d3.min.js:2:208961)`                                                      |
| removed |  -48 B |  5.8% → 0.0% |  48 B → 0 B | `Zx`                  | `<unknown>` | `Zx ←.shared– Zx (./node_modules/d3/dist/d3.min.js:2:208961)`                                                                                               |
| removed |  -48 B |  5.8% → 0.0% |  48 B → 0 B | `lineEnd`             | `<unknown>` | `lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:209274) ←.lineEnd– Object ←.prototype– Zx (./node_modules/d3/dist/d3.min.js:2:208961)`       |
| removed |  -48 B |  5.8% → 0.0% |  48 B → 0 B | `point`               | `<unknown>` | `point ←.shared– point (./node_modules/d3/dist/d3.min.js:2:209568) ←.point– Object ←.prototype– Zx (./node_modules/d3/dist/d3.min.js:2:208961)`             |
| removed |  -48 B |  5.8% → 0.0% |  48 B → 0 B | `lineStart`           | `<unknown>` | `lineStart ←.shared– lineStart (./node_modules/d3/dist/d3.min.js:2:209053) ←.lineStart– Object ←.prototype– Zx (./node_modules/d3/dist/d3.min.js:2:208961)` |

#### `uw` (`./node_modules/d3/dist/d3.min.js:2:211852`)

|  Change |  Delta |             % |         Self | Name                  | Location    | Path to function                                                                                                                                                        |
| ------: | -----: | ------------: | -----------: | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -64.3% | -144 B | 22.8% → 21.1% | 224 B → 80 B | `(object properties)` | `<unknown>` | `(object properties) ←.properties– Object ←.prototype– uw (./node_modules/d3/dist/d3.min.js:2:211852)`                                                                  |
| removed |  -48 B |   4.9% → 0.0% |   48 B → 0 B | `moveTo`              | `<unknown>` | `moveTo ←.shared– moveTo (./node_modules/d3/dist/d3.min.js:2:214137) ←.moveTo– Object ←.prototype– uw (./node_modules/d3/dist/d3.min.js:2:211842)`                      |
| removed |  -48 B |   4.9% → 0.0% |   48 B → 0 B | `bezierCurveTo`       | `<unknown>` | `bezierCurveTo ←.shared– bezierCurveTo (./node_modules/d3/dist/d3.min.js:2:214288) ←.bezierCurveTo– Object ←.prototype– uw (./node_modules/d3/dist/d3.min.js:2:211842)` |
| removed |  -48 B |   4.9% → 0.0% |   48 B → 0 B | `closePath`           | `<unknown>` | `closePath ←.shared– closePath (./node_modules/d3/dist/d3.min.js:2:214188) ←.closePath– Object ←.prototype– uw (./node_modules/d3/dist/d3.min.js:2:211842)`             |
| removed |  -48 B |   4.9% → 0.0% |   48 B → 0 B | `lineTo`              | `<unknown>` | `lineTo ←.shared– lineTo (./node_modules/d3/dist/d3.min.js:2:214233) ←.lineTo– Object ←.prototype– uw (./node_modules/d3/dist/d3.min.js:2:211842)`                      |

#### `Nm` (`./node_modules/d3/dist/d3.min.js:2:192650`)

|  Change | Delta |            % |       Self | Name                     | Location    | Path to function                                                                                                                                                                                                                     |
| ------: | ----: | -----------: | ---------: | ------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| removed | -72 B | 11.8% → 0.0% | 72 B → 0 B | `system / BytecodeArray` | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– Nm ←.shared– Nm (./node_modules/d3/dist/d3.min.js:2:192654)`                                                                                                                        |
| removed | -64 B | 10.5% → 0.0% | 64 B → 0 B | `system / BytecodeArray` | `<unknown>` | `system / BytecodeArray ←.trusted_function_data– (shared function info) ←.(Bootstrapper)– (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Nm ←.shared– Nm (./node_modules/d3/dist/d3.min.js:2:192654)` |
| removed | -56 B |  9.2% → 0.0% | 56 B → 0 B | `system / ScopeInfo`     | `<unknown>` | `system / ScopeInfo ←.name_or_scope_info– Nm ←.shared– Nm (./node_modules/d3/dist/d3.min.js:2:192654)`                                                                                                                               |
| removed | -48 B |  7.9% → 0.0% | 48 B → 0 B | `(shared function info)` | `<unknown>` | `(shared function info) ←.(Bootstrapper)– (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Nm ←.shared– Nm (./node_modules/d3/dist/d3.min.js:2:192654)`                                                 |
| removed | -48 B |  7.9% → 0.0% | 48 B → 0 B | `(shared function info)` | `<unknown>` | `(shared function info) ← (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Nm ←.shared– Nm (./node_modules/d3/dist/d3.min.js:2:192654)`                                                                 |

#### `i` (`./node_modules/d3/dist/d3.min.js:2:159016`)

|  Change |  Delta |           % |        Self | Name                       | Location    | Path to function                                                                                                                                          |
| ------: | -----: | ----------: | ----------: | -------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -104 B | 0.8% → 0.0% | 104 B → 0 B | `system / DescriptorArray` | `<unknown>` | `system / DescriptorArray ←.descriptors– system / Map ←.map– i (./node_modules/d3/dist/d3.min.js:2:76807)`                                                |
| removed |  -40 B | 0.3% → 0.0% |  40 B → 0 B | `system / Map`             | `<unknown>` | `system / Map ←.map– i (./node_modules/d3/dist/d3.min.js:2:76807)`                                                                                        |
| removed |  -40 B | 0.3% → 0.0% |  40 B → 0 B | `system / Map`             | `<unknown>` | `system / Map ←.back_pointer– system / Map ←.map– i (./node_modules/d3/dist/d3.min.js:2:76807)`                                                           |
| removed |  -40 B | 0.3% → 0.0% |  40 B → 0 B | `system / Map`             | `<unknown>` | `system / Map ←.back_pointer– system / Map ←.back_pointer– system / Map ←.map– i (./node_modules/d3/dist/d3.min.js:2:76807)`                              |
| removed |  -40 B | 0.3% → 0.0% |  40 B → 0 B | `system / Map`             | `<unknown>` | `system / Map ←.back_pointer– system / Map ←.back_pointer– system / Map ←.back_pointer– system / Map ←.map– i (./node_modules/d3/dist/d3.min.js:2:76807)` |

## Largest strings

Strings ranked by bytes allocated for them.

### Regressions

Strings with the largest increase in size.

#### String

| Change | Delta |            % |       Size | Value                                                | Path                                                                                                                                                                                                                                                                                                                             |
| -----: | ----: | -----------: | ---------: | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +68 B | 0.0% → <0.1% | 0 B → 68 B | `http://127.0.0.1:5278961BD7B6A550479043343F4BB3B5…` | `http://127.0.0.1:5278961BD7B6A550479043343F4BB3B5… ← (GC root)`                                                                                                                                                                                                                                                                 |
|    new | +52 B | 0.0% → <0.1% | 0 B → 52 B | `// https://d3js.org v7.9.0 Copyright 2010-2023 Mi…` | `// https://d3js.org v7.9.0 Copyright 2010-2023 Mi… ← (GC root)`                                                                                                                                                                                                                                                                 |
|    new | +32 B | 0.0% → <0.1% | 0 B → 32 B | `schemeObservable10`                                 | `schemeObservable10 ← (GC root)`                                                                                                                                                                                                                                                                                                 |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Um.areaStart`                                       | `Um.areaStart ← system / ScopeInfo ←.name_or_scope_info– areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:196076) ←.areaStart– Object ←.prototype– Um (./node_modules/d3/dist/d3.min.js:2:193552) ←.Um– system / Context ←(several paths)– Window / http://127.0.0.1:52789`                                     |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Um.areaEnd`                                         | `Um.areaEnd ← system / ScopeInfo ←.name_or_scope_info– areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:196109) ←.areaEnd– Object ←.prototype– Um (./node_modules/d3/dist/d3.min.js:2:193552) ←.Um– system / Context ←(several paths)– Window / http://127.0.0.1:52789`                                             |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Um.lineStart`                                       | `Um.lineStart ← system / ScopeInfo ←.name_or_scope_info– lineStart ←.shared– lineStart (./node_modules/d3/dist/d3.min.js:2:196146) ←.lineStart– Object ←.prototype– Um (./node_modules/d3/dist/d3.min.js:2:193552) ←.Um– system / Context ←(several paths)– Window / http://127.0.0.1:52789`                                     |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Um.lineEnd`                                         | `Um.lineEnd ← system / ScopeInfo ←.name_or_scope_info– lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:196180) ←.lineEnd– Object ←.prototype– Um (./node_modules/d3/dist/d3.min.js:2:193552) ←.Um– system / Context ←(several paths)– Window / http://127.0.0.1:52789`                                             |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Gm.areaStart`                                       | `Gm.areaStart ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:197452) ←.areaStart– Object ←.prototype– Gm (./node_modules/d3/dist/d3.min.js:2:196504) ←.Gm– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Gm.areaEnd`                                         | `Gm.areaEnd ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:197496) ←.areaEnd– Object ←.prototype– Gm (./node_modules/d3/dist/d3.min.js:2:196504) ←.Gm– system / Context ←(several paths)– Window / http://127.0.0.1:52789`         |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Gm.lineStart`                                       | `Gm.lineStart ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– lineStart ←.shared– lineStart (./node_modules/d3/dist/d3.min.js:2:197540) ←.lineStart– Object ←.prototype– Gm (./node_modules/d3/dist/d3.min.js:2:196504) ←.Gm– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Gm.lineEnd`                                         | `Gm.lineEnd ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:197584) ←.lineEnd– Object ←.prototype– Gm (./node_modules/d3/dist/d3.min.js:2:196504) ←.Gm– system / Context ←(several paths)– Window / http://127.0.0.1:52789`         |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Fx.areaStart`                                       | `Fx.areaStart ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:201822) ←.areaStart– Object ←.prototype– Fx (./node_modules/d3/dist/d3.min.js:2:201656) ←.Fx– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Fx.areaEnd`                                         | `Fx.areaEnd ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:201855) ←.areaEnd– Object ←.prototype– Fx (./node_modules/d3/dist/d3.min.js:2:201656) ←.Fx– system / Context ←(several paths)– Window / http://127.0.0.1:52789`         |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Ux.areaStart`                                       | `Ux.areaStart ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:203455) ←.areaStart– Object ←.prototype– Ux (./node_modules/d3/dist/d3.min.js:2:201718) ←.Ux– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Ux.areaEnd`                                         | `Ux.areaEnd ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:203488) ←.areaEnd– Object ←.prototype– Ux (./node_modules/d3/dist/d3.min.js:2:201718) ←.Ux– system / Context ←(several paths)– Window / http://127.0.0.1:52789`         |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Ix.lineStart`                                       | `Ix.lineStart ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– lineStart ←.shared– lineStart (./node_modules/d3/dist/d3.min.js:2:204088) ←.lineStart– Object ←.prototype– Ix (./node_modules/d3/dist/d3.min.js:2:201749) ←.Ix– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Ix.lineEnd`                                         | `Ix.lineEnd ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:204154) ←.lineEnd– Object ←.prototype– Ix (./node_modules/d3/dist/d3.min.js:2:201749) ←.Ix– system / Context ←(several paths)– Window / http://127.0.0.1:52789`         |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Yx.areaStart`                                       | `Yx.areaStart ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:204807) ←.areaStart– Object ←.prototype– Yx (./node_modules/d3/dist/d3.min.js:2:204737) ←.Yx– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Yx.areaEnd`                                         | `Yx.areaEnd ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:204840) ←.areaEnd– Object ←.prototype– Yx (./node_modules/d3/dist/d3.min.js:2:204737) ←.Yx– system / Context ←(several paths)– Window / http://127.0.0.1:52789`         |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B | `Yx.lineStart`                                       | `Yx.lineStart ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– lineStart ←.shared– lineStart (./node_modules/d3/dist/d3.min.js:2:204877) ←.lineStart– Object ←.prototype– Yx (./node_modules/d3/dist/d3.min.js:2:204737) ←.Yx– system / Context ←(several paths)– Window / http://127.0.0.1:52789` |

### Improvements

Strings with the largest decrease in size.

#### String

|  Change | Delta |            % |       Size | Value                                                | Path                                                                                                                                                                                                                                                                                      |
| ------: | ----: | -----------: | ---------: | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -68 B | <0.1% → 0.0% | 68 B → 0 B | `http://127.0.0.1:5278913C0184BA58A48BE1C986137065…` | `http://127.0.0.1:5278913C0184BA58A48BE1C986137065… ← (GC root)`                                                                                                                                                                                                                          |
| removed | -52 B | <0.1% → 0.0% | 52 B → 0 B | `// https://d3js.org v7.8.5 Copyright 2010-2023 Mi…` | `// https://d3js.org v7.8.5 Copyright 2010-2023 Mi… ← (GC root)`                                                                                                                                                                                                                          |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Bm.u.defined`                                       | `Bm.u.defined ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– (shared function info) ←.(Code flusher)– (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Bm ←.shared– Bm (./node_modules/d3/dist/d3.min.js:2:193620)`          |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Bm.u.curve`                                         | `Bm.u.curve ← system / ScopeInfo ←.name_or_scope_info– (shared function info) ←.(Debugger)– (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Bm ←.shared– Bm (./node_modules/d3/dist/d3.min.js:2:193620)`                                                    |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Bm.u.context`                                       | `Bm.u.context ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– (shared function info) ←.(Eternal handles)– (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Bm ←.shared– Bm (./node_modules/d3/dist/d3.min.js:2:193620)`       |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Ym.f.lineY1`                                        | `Ym.f.lineY1 ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– (shared function info) ←.(Shareable object cache)– (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Ym ←.shared– Ym (./node_modules/d3/dist/d3.min.js:2:194383)` |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Ym.f.lineX1`                                        | `Ym.f.lineX1 ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– (shared function info) ←.(Smi roots)– (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Ym ←.shared– Ym (./node_modules/d3/dist/d3.min.js:2:194383)`              |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Ym.f.defined`                                       | `Ym.f.defined ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– (shared function info) ←.(Startup object cache)– (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Ym ←.shared– Ym (./node_modules/d3/dist/d3.min.js:2:194383)`  |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Ym.f.curve`                                         | `Ym.f.curve ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– (shared function info) ←.(Strong root list)– (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Ym ←.shared– Ym (./node_modules/d3/dist/d3.min.js:2:194383)`        |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Ym.f.context`                                       | `Ym.f.context ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– (shared function info) ←.(Thread manager)– (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Ym ←.shared– Ym (./node_modules/d3/dist/d3.min.js:2:194383)`        |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `qm.areaStart`                                       | `qm.areaStart ← system / ScopeInfo ←.name_or_scope_info– areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:196027) ←.areaStart– Object ←.prototype– qm (./node_modules/d3/dist/d3.min.js:2:193503) ←.qm– system / Context`                                                |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `qm.lineStart`                                       | `qm.lineStart ← system / ScopeInfo ←.name_or_scope_info– lineStart ←.shared– lineStart (./node_modules/d3/dist/d3.min.js:2:196097) ←.lineStart– Object ←.prototype– qm (./node_modules/d3/dist/d3.min.js:2:193503) ←.qm– system / Context`                                                |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `qm.lineEnd`                                         | `qm.lineEnd ← system / ScopeInfo ←.name_or_scope_info– lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:196131) ←.lineEnd– Object ←.prototype– qm (./node_modules/d3/dist/d3.min.js:2:193503) ←.qm– system / Context`                                                        |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `qm.areaEnd`                                         | `qm.areaEnd ← system / ScopeInfo ←.name_or_scope_info– areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:196060) ←.areaEnd– Object ←.prototype– qm (./node_modules/d3/dist/d3.min.js:2:193503) ←.qm– system / Context`                                                        |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `ow.lineStart`                                       | `ow.lineStart ← system / ScopeInfo ←.name_or_scope_info– lineStart ←.shared– lineStart (./node_modules/d3/dist/d3.min.js:2:213327) ←.lineStart– Object ←(several paths)– system / Context`                                                                                                |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `ow.lineEnd`                                         | `ow.lineEnd ← system / ScopeInfo ←.name_or_scope_info– lineEnd ←.shared– lineEnd (./node_modules/d3/dist/d3.min.js:2:213410) ←.lineEnd– Object ←(several paths)– system / Context`                                                                                                        |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Nm.t.digits`                                        | `Nm.t.digits ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– (shared function info) ← (constant pool) ←.(GC roots)– system / BytecodeArray ←.trusted_function_data– Nm ←.shared– Nm (./node_modules/d3/dist/d3.min.js:2:192654) ←.Nm– system / Context`    |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Xm.areaStart`                                       | `Xm.areaStart ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– areaStart ←.shared– areaStart (./node_modules/d3/dist/d3.min.js:2:197403) ←.areaStart– Object ←.prototype– Xm (./node_modules/d3/dist/d3.min.js:2:196455) ←.Xm– system / Context`            |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Xm.areaEnd`                                         | `Xm.areaEnd ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– areaEnd ←.shared– areaEnd (./node_modules/d3/dist/d3.min.js:2:197447) ←.areaEnd– Object ←.prototype– Xm (./node_modules/d3/dist/d3.min.js:2:196455) ←.Xm– system / Context`                    |
| removed | -24 B | <0.1% → 0.0% | 24 B → 0 B | `Xm.lineStart`                                       | `Xm.lineStart ←.<dummy>– system / UncompiledDataWithoutPreparseData ←.trusted_function_data– lineStart ←.shared– lineStart (./node_modules/d3/dist/d3.min.js:2:197491) ←.lineStart– Object ←.prototype– Xm (./node_modules/d3/dist/d3.min.js:2:196455) ←.Xm– system / Context`            |

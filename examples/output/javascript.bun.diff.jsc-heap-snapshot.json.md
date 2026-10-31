# Heap snapshot diff

Held 1.47 MiB → 1.88 MiB (+421.522 KiB, +28.1%) over 16,720 → 23,643 nodes and 45,506 → 59,611 edges.

| Category           | Change |       Delta |             % |              Size |          Nodes |
| ------------------ | -----: | ----------: | ------------: | ----------------: | -------------: |
| Code               |   0.0% |         0 B | 43.0% → 33.5% |           645 KiB |          2,779 |
| String             | +89.1% | +317.37 KiB | 23.7% → 35.0% | 356 KiB → 673 KiB | 6,254 → 10,863 |
| Object shape       |   0.0% |         0 B | 13.7% → 10.7% |           205 KiB |          1,878 |
| Object             | +76.2% | +87.746 KiB |  7.7% → 10.5% | 115 KiB → 203 KiB |  1,494 → 2,758 |
| Internal           |   0.0% |         0 B |   6.3% → 5.0% |          95.3 KiB |          1,302 |
| Function           |   0.0% |         0 B |   4.3% → 3.4% |          65.2 KiB |          1,816 |
| Array              | +91.2% | +16.406 KiB |   1.2% → 1.8% | 18 KiB → 34.4 KiB |  1,114 → 2,164 |
| Symbol             |   0.0% |         0 B |          0.1% |           1.2 KiB |             77 |
| Regular expression |   0.0% |         0 B |         <0.1% |             352 B |              4 |
| Native             |   0.0% |         0 B |         <0.1% |              59 B |              2 |

`B ←(several paths)– A` means `A` retains `B` only through other nodes, and `(several C paths)` means every path passes through an instance of `C`, though no single instance retains `B`.

## Largest constructors

### Self size

#### Regressions

Constructors with the largest increase in instance bytes, excluding referenced nodes. Categories account for at least 1.0% of self size on the base or the current side.

| Change |       Delta |           % |                Size |     Instances | Constructor |
| -----: | ----------: | ----------: | ------------------: | ------------: | ----------- |
| +90.5% | +87.746 KiB | 6.5% → 9.6% |    97 KiB → 185 KiB | 1,373 → 2,637 | `Object`    |
| +97.0% | +16.406 KiB | 1.1% → 1.7% | 16.9 KiB → 33.3 KiB | 1,079 → 2,129 | `Array`     |

##### Object

| Change |       Delta |           % |             Size |     Instances | Constructor |
| -----: | ----------: | ----------: | ---------------: | ------------: | ----------- |
| +90.5% | +87.746 KiB | 6.5% → 9.6% | 97 KiB → 185 KiB | 1,373 → 2,637 | `Object`    |

##### Array

| Change |       Delta |           % |                Size |     Instances | Constructor |
| -----: | ----------: | ----------: | ------------------: | ------------: | ----------- |
| +97.0% | +16.406 KiB | 1.1% → 1.7% | 16.9 KiB → 33.3 KiB | 1,079 → 2,129 | `Array`     |

#### Retainer paths

Retainer paths with the largest change in contribution to each constructor's self size.

##### `Object`

|   Change |  Delta |            % |                Size | Instances | Path                                                                                                                                                  |
| -------: | -----: | -----------: | ------------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| +1939.3% | +543 B | <0.1% → 0.3% |        28 B → 571 B |     1 → 4 | `Object ←(several paths)– <root>`                                                                                                                     |
|   -18.5% | -543 B |  3.0% → 1.3% | 2.86 KiB → 2.33 KiB |   26 → 23 | `Object ←(several paths)– GlobalObject ← <root>`                                                                                                      |
|      new |  +98 B |  0.0% → 0.1% |          0 B → 98 B |     0 → 1 | `Object ←.user– Object ←[0]– Array ←.statuses– Object ←[1]– Array ←.documents– Object ←.__retained– GlobalObject ← <root>`                            |
|      new |  +98 B |  0.0% → 0.1% |          0 B → 98 B |     0 → 1 | `Object ←.user– Object ←[1]– Array ←.statuses– Object ←[1]– Array ←.documents– Object ←.__retained– GlobalObject ← <root>`                            |
|      new |  +98 B |  0.0% → 0.1% |          0 B → 98 B |     0 → 1 | `Object ←.user– Object ←.retweeted_status– Object ←[1]– Array ←.statuses– Object ←[1]– Array ←.documents– Object ←.__retained– GlobalObject ← <root>` |

##### `Array`

|  Change | Delta |            % |       Size | Instances | Path                                                                                                                                                                              |
| ------: | ----: | -----------: | ---------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -66 B |  0.4% → 0.0% | 66 B → 0 B |     1 → 0 | `Array ← GlobalObject ← <root>`                                                                                                                                                   |
|     new | +66 B |  0.0% → 0.2% | 0 B → 66 B |     0 → 1 | `Array ←(several paths)– <root>`                                                                                                                                                  |
|     new | +16 B | 0.0% → <0.1% | 0 B → 16 B |     0 → 1 | `Array ←.statuses– Object ←[1]– Array ←.documents– Object ←.__retained– GlobalObject ← <root>`                                                                                    |
|     new | +16 B | 0.0% → <0.1% | 0 B → 16 B |     0 → 1 | `Array ←.urls– Object ←.description– Object ←.entities– Object ←.user– Object ←[0]– Array ←.statuses– Object ←[1]– Array ←.documents– Object ←.__retained– GlobalObject ← <root>` |
|     new | +16 B | 0.0% → <0.1% | 0 B → 16 B |     0 → 1 | `Array ←.hashtags– Object ←.entities– Object ←[0]– Array ←.statuses– Object ←[1]– Array ←.documents– Object ←.__retained– GlobalObject ← <root>`                                  |

### Retained size

#### Regressions

Constructors with the largest increase in instance bytes, including nodes only the instances keep alive. Categories account for at least 1.0% of self size on the base or the current side.

| Change |        Delta |             % |                Size |     Instances | Constructor          |
| -----: | -----------: | ------------: | ------------------: | ------------: | -------------------- |
| +65.1% | +426.894 KiB | 43.6% → 56.3% |  655 KiB → 1.06 MiB | 1,373 → 2,637 | `Object`             |
| +93.9% | +421.522 KiB | 29.9% → 45.3% |   449 KiB → 870 KiB | 1,079 → 2,129 | `Array`              |
| +25.5% | +340.317 KiB | 88.8% → 87.1% |  1.3 MiB → 1.64 MiB |             1 | `GlobalObject`       |
| +12.2% |   +2.031 KiB |   1.1% → 1.0% | 16.7 KiB → 18.7 KiB |             2 | `WriteStream`        |
|  +0.2% |   +1.562 KiB | 44.2% → 34.6% |   663 KiB → 665 KiB |         1,737 | `Function`           |
|  +0.3% |   +1.562 KiB | 37.1% → 29.0% |   557 KiB → 558 KiB |           934 | `FunctionExecutable` |
|  +0.7% |   +1.562 KiB | 15.9% → 12.5% |   238 KiB → 240 KiB |         1,878 | `Structure`          |
|  +4.1% |       +864 B |   1.4% → 1.1% | 20.7 KiB → 21.5 KiB |           105 | `StructureRareData`  |
|  +0.3% |        +48 B |   1.2% → 0.9% |            18.1 KiB |           390 | `PropertyTable`      |
|    ~0% |         +3 B |   1.3% → 1.0% |            18.9 KiB |             1 | `Process`            |

##### Code

| Change |      Delta |             % |              Size | Instances | Constructor          |
| -----: | ---------: | ------------: | ----------------: | --------: | -------------------- |
|  +0.3% | +1.562 KiB | 37.1% → 29.0% | 557 KiB → 558 KiB |       934 | `FunctionExecutable` |

##### Object shape

| Change |      Delta |             % |              Size | Instances | Constructor |
| -----: | ---------: | ------------: | ----------------: | --------: | ----------- |
|  +0.7% | +1.562 KiB | 15.9% → 12.5% | 238 KiB → 240 KiB |     1,878 | `Structure` |

##### Object

| Change |        Delta |             % |                Size |     Instances | Constructor    |
| -----: | -----------: | ------------: | ------------------: | ------------: | -------------- |
| +65.1% | +426.894 KiB | 43.6% → 56.3% |  655 KiB → 1.06 MiB | 1,373 → 2,637 | `Object`       |
| +25.5% | +340.317 KiB | 88.8% → 87.1% |  1.3 MiB → 1.64 MiB |             1 | `GlobalObject` |
| +12.2% |   +2.031 KiB |   1.1% → 1.0% | 16.7 KiB → 18.7 KiB |             2 | `WriteStream`  |
|    ~0% |         +3 B |   1.3% → 1.0% |            18.9 KiB |             1 | `Process`      |

##### Internal

| Change |  Delta |           % |                Size | Instances | Constructor         |
| -----: | -----: | ----------: | ------------------: | --------: | ------------------- |
|  +4.1% | +864 B | 1.4% → 1.1% | 20.7 KiB → 21.5 KiB |       105 | `StructureRareData` |
|  +0.3% |  +48 B | 1.2% → 0.9% |            18.1 KiB |       390 | `PropertyTable`     |

##### Function

| Change |      Delta |             % |              Size | Instances | Constructor |
| -----: | ---------: | ------------: | ----------------: | --------: | ----------- |
|  +0.2% | +1.562 KiB | 44.2% → 34.6% | 663 KiB → 665 KiB |     1,737 | `Function`  |

##### Array

| Change |        Delta |             % |              Size |     Instances | Constructor |
| -----: | -----------: | ------------: | ----------------: | ------------: | ----------- |
| +93.9% | +421.522 KiB | 29.9% → 45.3% | 449 KiB → 870 KiB | 1,079 → 2,129 | `Array`     |

#### Retainer paths

Retainer paths with the largest change in contribution to each constructor's retained size.

##### `Object`

|   Change |        Delta |             % |                Size | Instances | Path                                                                         |
| -------: | -----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------- |
|      new | +422.866 KiB |  0.0% → 39.1% |       0 B → 423 KiB |     0 → 1 | `Object ←[1]– Array ←.documents– Object ←.__retained– GlobalObject ← <root>` |
|   +92.0% | +421.519 KiB | 69.9% → 81.3% |   458 KiB → 880 KiB |         1 | `Object ←.__retained– GlobalObject ← <root>`                                 |
|    -4.2% |    -18.7 KiB | 67.4% → 39.1% |   442 KiB → 423 KiB |         1 | `Object ←[0]– Array ←.documents– Object ←.__retained– GlobalObject ← <root>` |
| +1024.3% |  +12.673 KiB |   0.2% → 1.3% | 1.24 KiB → 13.9 KiB |     1 → 4 | `Object ←(several paths)– <root>`                                            |
|   -17.1% |  -12.673 KiB |  11.3% → 5.7% | 74.3 KiB → 61.6 KiB |   26 → 23 | `Object ←(several paths)– GlobalObject ← <root>`                             |

##### `Array`

|  Change |        Delta |             % |              Size | Instances | Path                                                                                           |
| ------: | -----------: | ------------: | ----------------: | --------: | ---------------------------------------------------------------------------------------------- |
|     new | +422.389 KiB |  0.0% → 48.5% |     0 B → 422 KiB |     0 → 1 | `Array ←.statuses– Object ←[1]– Array ←.documents– Object ←.__retained– GlobalObject ← <root>` |
|  +95.4% | +421.369 KiB | 98.4% → 99.1% | 442 KiB → 863 KiB |         1 | `Array ←.documents– Object ←.__retained– GlobalObject ← <root>`                                |
|   -4.0% |  -17.399 KiB | 98.0% → 48.5% | 440 KiB → 422 KiB |         1 | `Array ←.statuses– Object ←[0]– Array ←.documents– Object ←.__retained– GlobalObject ← <root>` |
| removed |   -5.275 KiB |   1.2% → 0.0% |    5.28 KiB → 0 B |     1 → 0 | `Array ← GlobalObject ← <root>`                                                                |
|     new |   +5.275 KiB |   0.0% → 0.6% |    0 B → 5.28 KiB |     0 → 1 | `Array ←(several paths)– <root>`                                                               |

##### `GlobalObject`

| Change |        Delta |      % |               Size | Instances | Path                    |
| -----: | -----------: | -----: | -----------------: | --------: | ----------------------- |
| +25.5% | +340.317 KiB | 100.0% | 1.3 MiB → 1.64 MiB |         1 | `GlobalObject ← <root>` |

##### `WriteStream`

| Change |      Delta |             % |                Size | Instances | Path                                                            |
| -----: | ---------: | ------------: | ------------------: | --------: | --------------------------------------------------------------- |
| +36.6% | +2.031 KiB | 33.3% → 40.5% | 5.55 KiB → 7.58 KiB |           | `Structure ←(several WriteStream paths)– GlobalObject ← <root>` |

##### `Function`

|  Change |       Delta |             % |                Size | Instances | Path                                                                          |
| ------: | ----------: | ------------: | ------------------: | --------: | ----------------------------------------------------------------------------- |
|  -76.9% | -54.767 KiB |  10.7% → 2.5% | 71.2 KiB → 16.5 KiB |  264 → 56 | `Function ← GlobalObject ← <root>`                                            |
|  -13.1% | -33.587 KiB | 38.5% → 33.4% |   256 KiB → 222 KiB |           | `FunctionExecutable ←(several Function paths)– GlobalObject ← <root>`         |
| +804.7% | +33.587 KiB |   0.6% → 5.7% | 4.17 KiB → 37.8 KiB |           | `FunctionExecutable ←(several Function paths)– <root>`                        |
| +110.1% |  +8.166 KiB |   1.1% → 2.3% | 7.42 KiB → 15.6 KiB |   19 → 51 | `Function ←(several paths)– <root>`                                           |
|  -13.8% |  -4.875 KiB |   5.3% → 4.6% | 35.3 KiB → 30.5 KiB |           | `UnlinkedFunctionExecutable ←(several Function paths)– GlobalObject ← <root>` |

##### `FunctionExecutable`

| Change |       Delta |             % |                Size | Instances | Path                                                                                    |
| -----: | ----------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------------------------- |
| -79.0% | -37.273 KiB |   8.5% → 1.8% | 47.2 KiB → 9.88 KiB |  204 → 31 | `FunctionExecutable ← Function ← GlobalObject ← <root>`                                 |
| +57.0% | +33.587 KiB | 10.6% → 16.6% | 58.9 KiB → 92.5 KiB |  89 → 143 | `FunctionExecutable ←(several paths)– <root>`                                           |
| -11.5% | -33.587 KiB | 52.6% → 46.4% |   293 KiB → 259 KiB | 456 → 402 | `FunctionExecutable ←(several paths)– GlobalObject ← <root>`                            |
| -11.8% |  -4.875 KiB |   7.4% → 6.5% | 41.3 KiB → 36.4 KiB |           | `UnlinkedFunctionExecutable ←(several FunctionExecutable paths)– GlobalObject ← <root>` |
| +59.8% |  +4.875 KiB |   1.5% → 2.3% |   8.16 KiB → 13 KiB |           | `UnlinkedFunctionExecutable ←(several FunctionExecutable paths)– <root>`                |

##### `Structure`

|  Change |       Delta |           % |                Size | Instances | Path                                                                                                                                   |
| ------: | ----------: | ----------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------- |
|     new | +17.203 KiB | 0.0% → 7.2% |      0 B → 17.2 KiB |    0 → 32 | `Structure ←(several paths)– Array ←.documents– Object ←.__retained– GlobalObject ← <root>`                                            |
| removed | -14.296 KiB | 6.0% → 0.0% |      14.3 KiB → 0 B |    26 → 0 | `Structure ←(several paths)– Array ←.statuses– Object ←[0]– Array ←.documents– Object ←.__retained– GlobalObject ← <root>`             |
|     new | +12.578 KiB | 0.0% → 5.2% |      0 B → 12.6 KiB |    0 → 24 | `Structure ← Structure ←(several paths)– Array ←.documents– Object ←.__retained– GlobalObject ← <root>`                                |
| removed | -10.609 KiB | 4.5% → 0.0% |      10.6 KiB → 0 B |    18 → 0 | `Structure ← Structure ←(several paths)– Array ←.statuses– Object ←[0]– Array ←.documents– Object ←.__retained– GlobalObject ← <root>` |
| +238.0% | +10.093 KiB | 1.8% → 6.0% | 4.24 KiB → 14.3 KiB |   23 → 75 | `Structure ←(several paths)– <root>`                                                                                                   |

##### `StructureRareData`

| Change |      Delta |             % |                Size | Instances | Path                                                                                                                                                                                                    |
| -----: | ---------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -81.8% | -1.546 KiB |   9.1% → 1.6% |    1.89 KiB → 352 B |     7 → 1 | `StructureRareData ← Structure ← Function ← GlobalObject ← <root>`                                                                                                                                      |
| +41.2% | +1.421 KiB | 16.7% → 22.6% | 3.45 KiB → 4.88 KiB |     4 → 3 | `StructureRareData ← Structure ← StructureRareData ← Structure ←(several paths)– GlobalObject ← <root>`                                                                                                 |
| +48.1% | +1.406 KiB | 14.1% → 20.1% | 2.92 KiB → 4.33 KiB |     1 → 2 | `StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ←(several paths)– GlobalObject ← <root>`                                                                 |
| +45.0% | +1.203 KiB | 12.9% → 18.0% | 2.67 KiB → 3.88 KiB |     1 → 2 | `StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ←(several paths)– GlobalObject ← <root>`                                 |
| +41.3% |     +1 KiB | 11.7% → 15.9% | 2.42 KiB → 3.42 KiB |     1 → 2 | `StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ←(several paths)– GlobalObject ← <root>` |

##### `PropertyTable`

|  Change |      Delta |             % |                Size | Instances | Path                                                                                                                                       |
| ------: | ---------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------ |
|  -76.9% | -1.406 KiB |  10.1% → 2.3% |    1.83 KiB → 432 B |    39 → 9 | `PropertyTable ← Structure ← Function ← GlobalObject ← <root>`                                                                             |
|     new | +1.125 KiB |   0.0% → 6.2% |      0 B → 1.13 KiB |    0 → 24 | `PropertyTable ← Structure ←(several paths)– Array ←.documents– Object ←.__retained– GlobalObject ← <root>`                                |
| removed |     -864 B |   4.7% → 0.0% |         864 B → 0 B |    18 → 0 | `PropertyTable ← Structure ←(several paths)– Array ←.statuses– Object ←[0]– Array ←.documents– Object ←.__retained– GlobalObject ← <root>` |
|  -23.1% |     -720 B | 16.8% → 12.9% | 3.05 KiB → 2.34 KiB |   65 → 50 | `PropertyTable ← Structure ←(several paths)– GlobalObject ← <root>`                                                                        |
| +260.0% |     +624 B |   1.3% → 4.7% |       240 B → 864 B |    5 → 18 | `PropertyTable ← Structure ←(several paths)– <root>`                                                                                       |

##### `Process`

| Change | Delta |      % |     Size | Instances | Path                              |
| -----: | ----: | -----: | -------: | --------: | --------------------------------- |
|    ~0% |  +3 B | 100.0% | 18.9 KiB |         1 | `Process ← GlobalObject ← <root>` |

# Heap snapshot diff

Allocated 1.46 MiB (+1.516 KiB, +0.1%) across 16,676 → 16,691 nodes and 45,239 → 45,310 edges.

| Category           | Change |      Delta |             % |                Size |         Nodes |
| ------------------ | -----: | ---------: | ------------: | ------------------: | ------------: |
| Code               |   0.0% |        0 B |         42.8% |             640 KiB |         2,765 |
| String             |    ~0% |       +1 B |         23.8% |             356 KiB |         6,250 |
| Object shape       |  +0.7% | +1.421 KiB | 13.6% → 13.7% |   204 KiB → 205 KiB | 1,862 → 1,875 |
| Object             |   0.0% |        0 B |          7.7% |             115 KiB |         1,494 |
| Internal           |  +0.1% |      +96 B |          6.4% | 95.1 KiB → 95.2 KiB | 1,299 → 1,301 |
| Function           |   0.0% |        0 B |   4.4% → 4.3% |            65.1 KiB |         1,811 |
| Array              |   0.0% |        0 B |          1.2% |              18 KiB |         1,112 |
| Symbol             |   0.0% |        0 B |          0.1% |             1.2 KiB |            77 |
| Regular expression |   0.0% |        0 B |         <0.1% |               352 B |             4 |
| Native             |   0.0% |        0 B |         <0.1% |                59 B |             2 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

#### Regressions

Constructors with the largest increase in self size.

| Change |      Delta |             % |                Size |     Instances | Constructor     |
| -----: | ---------: | ------------: | ------------------: | ------------: | --------------- |
|  +0.7% | +1.421 KiB | 13.6% → 13.7% |   204 KiB → 205 KiB | 1,862 → 1,875 | `Structure`     |
|  +0.5% |      +96 B |          1.2% | 18.2 KiB → 18.3 KiB |     389 → 391 | `PropertyTable` |

##### Object shape

| Change |      Delta |             % |              Size |     Instances | Constructor |
| -----: | ---------: | ------------: | ----------------: | ------------: | ----------- |
|  +0.7% | +1.421 KiB | 13.6% → 13.7% | 204 KiB → 205 KiB | 1,862 → 1,875 | `Structure` |

##### Internal

| Change | Delta |    % |                Size | Instances | Constructor     |
| -----: | ----: | ---: | ------------------: | --------: | --------------- |
|  +0.5% | +96 B | 1.2% | 18.2 KiB → 18.3 KiB | 389 → 391 | `PropertyTable` |

#### Instances

Instances with the largest change in contribution to each constructor's self size.

##### `Structure`

| Change |      Delta |            % |                Size | Instances | Path                                                             |
| -----: | ---------: | -----------: | ------------------: | --------: | ---------------------------------------------------------------- |
| -72.0% | -5.906 KiB |  4.0% → 1.1% |   8.2 KiB → 2.3 KiB |   75 → 21 | `(several retainers) <root>`                                     |
| +29.0% | +5.796 KiB | 9.8% → 12.6% |   20 KiB → 25.8 KiB | 183 → 236 | `(several retainers) GlobalObject ← <root>`                      |
| +81.0% | +3.718 KiB |  2.3% → 4.1% | 4.59 KiB → 8.31 KiB |   42 → 76 | `FunctionExecutable ← (several retainers) GlobalObject ← <root>` |
| -95.5% | -2.296 KiB |  1.2% → 0.1% |    2.41 KiB → 112 B |    22 → 1 | `FunctionExecutable ← (several retainers) <root>`                |
| -83.3% |     -560 B |  0.3% → 0.1% |       672 B → 112 B |     6 → 1 | `Structure ← (several retainers) <root>`                         |

##### `PropertyTable`

|  Change |  Delta |             % |                Size | Instances | Path                                                                         |
| ------: | -----: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------- |
|  -77.8% | -672 B |   4.6% → 1.0% |       864 B → 192 B |    18 → 4 | `Structure ← (several retainers) <root>`                                     |
|  +26.9% | +672 B | 13.4% → 16.9% | 2.44 KiB → 3.09 KiB |   52 → 66 | `Structure ← (several retainers) GlobalObject ← <root>`                      |
| +100.0% | +240 B |   1.3% → 2.6% |       240 B → 480 B |    5 → 10 | `Structure ← FunctionExecutable ← (several retainers) GlobalObject ← <root>` |
|  -80.0% | -192 B |   1.3% → 0.3% |        240 B → 48 B |     5 → 1 | `Structure ← FunctionExecutable ← (several retainers) <root>`                |
|  +16.7% |  +96 B |   3.1% → 3.6% |       576 B → 672 B |   12 → 14 | `Structure ← Object ← (several retainers) GlobalObject ← <root>`             |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Regressions

Constructors with the largest increase in retained size.

| Change |       Delta |             % |                Size |     Instances | Constructor          |
| -----: | ----------: | ------------: | ------------------: | ------------: | -------------------- |
|  +6.6% | +82.138 KiB | 83.7% → 89.1% |  1.22 MiB → 1.3 MiB |             1 | `GlobalObject`       |
|  +0.6% |  +1.468 KiB | 15.8% → 15.9% |   236 KiB → 237 KiB | 1,862 → 1,875 | `Structure`          |
|  +0.3% |  +1.467 KiB |         31.8% |   475 KiB → 476 KiB |           931 | `FunctionExecutable` |
|  +1.1% |      +224 B |   1.3% → 1.4% | 20.2 KiB → 20.4 KiB |           103 | `StructureRareData`  |
|  +0.5% |       +96 B |          1.2% | 18.1 KiB → 18.2 KiB |     389 → 391 | `PropertyTable`      |
|  +0.6% |       +48 B |          0.5% | 7.63 KiB → 7.67 KiB |            70 | `AsyncFunction`      |
|    ~0% |        +3 B | 29.9% → 29.8% |             446 KiB |         1,077 | `Array`              |
|    ~0% |        +3 B |          1.3% |            18.9 KiB |             1 | `Process`            |

##### Code

| Change |      Delta |     % |              Size | Instances | Constructor          |
| -----: | ---------: | ----: | ----------------: | --------: | -------------------- |
|  +0.3% | +1.467 KiB | 31.8% | 475 KiB → 476 KiB |       931 | `FunctionExecutable` |

##### Object shape

| Change |      Delta |             % |              Size |     Instances | Constructor |
| -----: | ---------: | ------------: | ----------------: | ------------: | ----------- |
|  +0.6% | +1.468 KiB | 15.8% → 15.9% | 236 KiB → 237 KiB | 1,862 → 1,875 | `Structure` |

##### Object

| Change |       Delta |             % |               Size | Instances | Constructor    |
| -----: | ----------: | ------------: | -----------------: | --------: | -------------- |
|  +6.6% | +82.138 KiB | 83.7% → 89.1% | 1.22 MiB → 1.3 MiB |         1 | `GlobalObject` |
|    ~0% |        +3 B |          1.3% |           18.9 KiB |         1 | `Process`      |

##### Internal

| Change |  Delta |           % |                Size | Instances | Constructor         |
| -----: | -----: | ----------: | ------------------: | --------: | ------------------- |
|  +1.1% | +224 B | 1.3% → 1.4% | 20.2 KiB → 20.4 KiB |       103 | `StructureRareData` |
|  +0.5% |  +96 B |        1.2% | 18.1 KiB → 18.2 KiB | 389 → 391 | `PropertyTable`     |

##### Function

| Change | Delta |    % |                Size | Instances | Constructor     |
| -----: | ----: | ---: | ------------------: | --------: | --------------- |
|  +0.6% | +48 B | 0.5% | 7.63 KiB → 7.67 KiB |        70 | `AsyncFunction` |

##### Array

| Change | Delta |             % |    Size | Instances | Constructor |
| -----: | ----: | ------------: | ------: | --------: | ----------- |
|    ~0% |  +3 B | 29.9% → 29.8% | 446 KiB |     1,077 | `Array`     |

#### Improvements

Constructors with the largest decrease in retained size.

##### Function

| Change |  Delta |             % |              Size | Instances | Constructor |
| -----: | -----: | ------------: | ----------------: | --------: | ----------- |
|  -0.1% | -240 B | 19.0% → 18.9% | 284 KiB → 283 KiB |     1,732 | `Function`  |

#### Instances

Instances with the largest change in contribution to each constructor's retained size.

##### `GlobalObject`

| Change |       Delta |      % |               Size | Instances | Path     |
| -----: | ----------: | -----: | -----------------: | --------: | -------- |
|  +6.6% | +82.138 KiB | 100.0% | 1.22 MiB → 1.3 MiB |         1 | `<root>` |

##### `Structure`

|  Change |       Delta |             % |                Size | Instances | Path                                                             |
| ------: | ----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------- |
|  -72.3% | -10.359 KiB |   6.1% → 1.7% | 14.3 KiB → 3.97 KiB |   75 → 21 | `(several retainers) <root>`                                     |
|  +20.9% | +10.218 KiB | 20.8% → 25.0% |   49 KiB → 59.2 KiB | 183 → 236 | `(several retainers) GlobalObject ← <root>`                      |
|  +20.2% |  +5.218 KiB | 11.0% → 13.1% |   25.8 KiB → 31 KiB |   12 → 14 | `Object ← (several retainers) GlobalObject ← <root>`             |
| removed |  -5.218 KiB |   2.2% → 0.0% |      5.22 KiB → 0 B |     2 → 0 | `Object ← (several retainers) <root>`                            |
|  +20.1% |  +4.812 KiB | 10.2% → 12.1% |   24 KiB → 28.8 KiB |     7 → 8 | `Structure ← Object ← (several retainers) GlobalObject ← <root>` |

##### `FunctionExecutable`

| Change |       Delta |             % |                Size | Instances | Path                                                   |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------------------------------------------ |
| +13.6% | +35.055 KiB | 54.3% → 61.4% |   257 KiB → 293 KiB | 402 → 456 | `(several retainers) GlobalObject ← <root>`            |
| -36.3% | -33.587 KiB | 19.5% → 12.4% | 92.5 KiB → 58.9 KiB |  143 → 89 | `(several retainers) <root>`                           |
| -13.1% |  -6.218 KiB |  10.0% → 8.6% | 47.3 KiB → 41.1 KiB | 203 → 175 | `Function ← GlobalObject ← <root>`                     |
| -41.5% |      -988 B |   0.5% → 0.3% | 2.32 KiB → 1.36 KiB |     6 → 3 | `Function ← (several retainers) <root>`                |
| +11.5% |      +860 B |   1.5% → 1.7% | 7.29 KiB → 8.13 KiB |   10 → 12 | `Function ← (several retainers) GlobalObject ← <root>` |

##### `StructureRareData`

|   Change |      Delta |            % |             Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                    |
| -------: | ---------: | -----------: | ---------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +1566.7% | +1.468 KiB |  0.5% → 7.7% |  96 B → 1.56 KiB |         1 | `Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← (several retainers) GlobalObject ← <root>`                                 |
|  +413.6% | +1.421 KiB |  1.7% → 8.7% | 352 B → 1.77 KiB |         1 | `Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← (several retainers) GlobalObject ← <root>`                                                                 |
|  +231.6% | +1.375 KiB |  2.9% → 9.7% | 608 B → 1.97 KiB |         1 | `Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← (several retainers) GlobalObject ← <root>`                                                                                                 |
|  +149.1% | +1.328 KiB | 4.4% → 10.9% | 912 B → 2.22 KiB |     2 → 1 | `Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← (several retainers) GlobalObject ← <root>`                                                                                                                                 |
|      new | +1.312 KiB |  0.0% → 6.4% |   0 B → 1.31 KiB |     0 → 1 | `Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← StructureRareData ← Structure ← (several retainers) GlobalObject ← <root>` |

##### `PropertyTable`

|  Change |  Delta |             % |                Size | Instances | Path                                                                         |
| ------: | -----: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------- |
|  -77.8% | -672 B |   4.7% → 1.0% |       864 B → 192 B |    18 → 4 | `Structure ← (several retainers) <root>`                                     |
|  +26.9% | +672 B | 13.5% → 17.0% | 2.44 KiB → 3.09 KiB |   52 → 66 | `Structure ← (several retainers) GlobalObject ← <root>`                      |
| +100.0% | +240 B |   1.3% → 2.6% |       240 B → 480 B |    5 → 10 | `Structure ← FunctionExecutable ← (several retainers) GlobalObject ← <root>` |
|  -80.0% | -192 B |   1.3% → 0.3% |        240 B → 48 B |     5 → 1 | `Structure ← FunctionExecutable ← (several retainers) <root>`                |
|  +16.7% |  +96 B |   3.1% → 3.6% |       576 B → 672 B |   12 → 14 | `Structure ← Object ← (several retainers) GlobalObject ← <root>`             |

##### `AsyncFunction`

| Change | Delta |           % |          Size | Instances | Path                    |
| -----: | ----: | ----------: | ------------: | --------: | ----------------------- |
|  +8.6% | +48 B | 7.2% → 7.7% | 559 B → 607 B |         1 | `GlobalObject ← <root>` |

##### `Array`

|  Change |      Delta |            % |           Size | Instances | Path                                                                                       |
| ------: | ---------: | -----------: | -------------: | --------: | ------------------------------------------------------------------------------------------ |
| removed | -4.693 KiB |  1.1% → 0.0% | 4.69 KiB → 0 B |     1 → 0 | `(several retainers) <root>`                                                               |
|     new | +4.693 KiB |  0.0% → 1.1% | 0 B → 4.69 KiB |     0 → 1 | `GlobalObject ← <root>`                                                                    |
|     new |     +521 B |  0.0% → 0.1% |    0 B → 521 B |     0 → 2 | `Process ← .process GlobalObject ← <root>`                                                 |
| removed |     -518 B |  0.1% → 0.0% |    518 B → 0 B |     2 → 0 | `Process ← GlobalObject ← <root>`                                                          |
| removed |     -208 B | <0.1% → 0.0% |    208 B → 0 B |     1 → 0 | `.list FixedCircularBuffer ← .tail FixedQueue ← (several retainers) GlobalObject ← <root>` |

##### `Process`

|  Change |       Delta |             % |           Size | Instances | Path                             |
| ------: | ----------: | ------------: | -------------: | --------: | -------------------------------- |
|     new | +18.913 KiB | 0.0% → 100.0% | 0 B → 18.9 KiB |     0 → 1 | `.process GlobalObject ← <root>` |
| removed |  -18.91 KiB | 100.0% → 0.0% | 18.9 KiB → 0 B |     1 → 0 | `GlobalObject ← <root>`          |

##### `Function`

|  Change |      Delta |             % |                Size | Instances | Path                                        |
| ------: | ---------: | ------------: | ------------------: | --------: | ------------------------------------------- |
|  -46.4% | -6.416 KiB |   4.9% → 2.6% | 13.8 KiB → 7.42 KiB |   48 → 19 | `(several retainers) <root>`                |
|   -7.9% | -5.474 KiB | 24.5% → 22.6% |   69.4 KiB → 64 KiB | 255 → 233 | `GlobalObject ← <root>`                     |
|   +8.1% | +4.161 KiB | 18.2% → 19.7% | 51.6 KiB → 55.8 KiB | 240 → 261 | `(several retainers) GlobalObject ← <root>` |
| +507.1% | +1.386 KiB |   0.1% → 0.6% |    280 B → 1.66 KiB |    4 → 15 | `GetterSetter ← GlobalObject ← <root>`      |
| removed | -1.386 KiB |   0.5% → 0.0% |      1.39 KiB → 0 B |    11 → 0 | `GetterSetter ← (several retainers) <root>` |

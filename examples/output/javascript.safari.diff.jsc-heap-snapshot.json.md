# Heap snapshot diff

Allocated 10.4 MiB (+14.46 KiB, +0.1%) across 109,569 → 109,640 nodes and 307,833 → 307,962 edges.

| Category     | Change |       Delta |             % |                Size |           Nodes |
| ------------ | -----: | ----------: | ------------: | ------------------: | --------------: |
| string       |    ~0% |      +527 B | 32.6% → 32.5% |            3.39 MiB | 19,395 → 19,426 |
| code         |  +0.3% | +10.738 KiB | 28.8% → 28.9% |    3 MiB → 3.01 MiB | 16,245 → 16,246 |
| object shape |    ~0% |      +224 B |         12.5% |             1.3 MiB | 12,175 → 12,177 |
| internal     |  +0.3% |  +2.953 KiB |          9.8% | 1.02 MiB → 1.03 MiB | 20,137 → 20,174 |
| object       |   0.0% |         0 B |          8.6% |             920 KiB |          16,441 |
| closure      |    ~0% |       +37 B |          4.1% |             436 KiB |          13,484 |
| array        |   0.0% |         0 B |          2.5% |             270 KiB |          11,204 |
| regexp       |   0.0% |         0 B |          1.0% |             108 KiB |             453 |
| symbol       |   0.0% |         0 B |         <0.1% |               448 B |              28 |
| native       |   0.0% |         0 B |         <0.1% |               231 B |               7 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

#### Regressions

Constructors with the largest increase in self size.

| Change |       Delta |           % |                Size |       Instances | Constructor         |
| -----: | ----------: | ----------: | ------------------: | --------------: | ------------------- |
|  +2.2% | +11.824 KiB | 5.0% → 5.1% |   533 KiB → 545 KiB |       162 → 165 | `FunctionCodeBlock` |
| +16.4% |  +2.968 KiB |        0.2% | 18.1 KiB → 21.1 KiB |       232 → 270 | `FunctionRareData`  |
|    ~0% |      +224 B |       12.5% |             1.3 MiB | 12,175 → 12,177 | `Structure`         |
|    ~0% |       +37 B |        4.1% |             434 KiB |          13,414 | `Function`          |

#### Improvements

Constructors with the largest decrease in self size.

| Change |      Delta |     % |                Size |     Instances | Constructor                 |
| -----: | ---------: | ----: | ------------------: | ------------: | --------------------------- |
|  -0.1% | -1.085 KiB |  9.0% |   962 KiB → 961 KiB | 1,660 → 1,658 | `UnlinkedFunctionCodeBlock` |
|  -0.4% |      -16 B | <0.1% | 4.41 KiB → 4.39 KiB |     282 → 281 | `StructureChain`            |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Regressions

Constructors with the largest increase in retained size.

| Change |       Delta |             % |                Size | Instances | Constructor            |
| -----: | ----------: | ------------: | ------------------: | --------: | ---------------------- |
|  +2.2% | +44.456 KiB | 18.9% → 19.3% | 1.97 MiB → 2.01 MiB |     7,600 | `FunctionExecutable`   |
|  +3.2% | +25.972 KiB |   7.6% → 7.8% |   811 KiB → 837 KiB |     2,030 | `JSLexicalEnvironment` |
|  +0.7% | +20.129 KiB | 27.9% → 28.1% | 2.91 MiB → 2.93 MiB |    13,414 | `Function`             |
|  +6.7% | +13.175 KiB |   1.8% → 2.0% |   197 KiB → 210 KiB | 232 → 270 | `FunctionRareData`     |
|  +2.2% | +11.825 KiB |   5.0% → 5.1% |   535 KiB → 547 KiB | 162 → 165 | `FunctionCodeBlock`    |
|  +4.0% |      +560 B |          0.1% | 13.7 KiB → 14.2 KiB |        14 | `Node`                 |
|  +0.4% |      +256 B |          0.5% | 56.5 KiB → 56.7 KiB |        10 | `Element`              |
|  +0.3% |      +256 B |          0.8% | 83.3 KiB → 83.5 KiB |       205 | `HTMLElement`          |
|  +2.5% |      +160 B |          0.1% | 6.35 KiB → 6.51 KiB |        14 | `EventTarget`          |
|  +5.8% |      +144 B |         <0.1% | 2.44 KiB → 2.58 KiB |        23 | `HTMLHeadingElement`   |
|    ~0% |      +112 B |   4.3% → 4.2% |             454 KiB |       893 | `StructureRareData`    |
|  +0.3% |       +98 B |          0.3% | 32.2 KiB → 32.3 KiB |        20 | `Map`                  |
|  +1.2% |       +48 B |         <0.1% | 3.85 KiB → 3.89 KiB |         4 | `CharacterData`        |

#### Improvements

Constructors with the largest decrease in retained size.

| Change |       Delta |             % |                Size |       Instances | Constructor                  |
| -----: | ----------: | ------------: | ------------------: | --------------: | ---------------------------- |
|  -2.1% | -22.077 KiB |   9.7% → 9.5% | 1.01 MiB → 1015 KiB |              14 | `Window`                     |
|  -0.2% |  -3.481 KiB | 17.8% → 17.7% |            1.85 MiB | 12,175 → 12,177 | `Structure`                  |
|    ~0% |  -1.354 KiB | 55.3% → 55.2% |            5.76 MiB |          11,833 | `Object`                     |
|  -0.1% |  -1.351 KiB |         15.6% |            1.62 MiB |           6,041 | `UnlinkedFunctionExecutable` |
|  -0.1% |  -1.261 KiB |         11.2% |            1.17 MiB |   1,660 → 1,658 | `UnlinkedFunctionCodeBlock`  |
|  -0.1% |      -708 B |          6.1% |   650 KiB → 649 KiB |           7,409 | `Array`                      |
|  -4.2% |      -160 B |         <0.1% | 3.71 KiB → 3.55 KiB |               1 | `Range`                      |
|  -0.1% |       -48 B |          0.4% | 43.5 KiB → 43.4 KiB |           1,330 | `DOMRect`                    |
|  -0.4% |       -16 B |         <0.1% | 4.41 KiB → 4.39 KiB |       282 → 281 | `StructureChain`             |

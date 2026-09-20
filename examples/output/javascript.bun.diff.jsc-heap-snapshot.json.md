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

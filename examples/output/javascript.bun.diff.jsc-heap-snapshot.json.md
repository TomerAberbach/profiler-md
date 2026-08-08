# Heap snapshot diff

Allocated 1.45 MiB → 1.46 MiB (+1.469 KiB, +0.1%) across 16,635 → 16,649 nodes and 45,015 → 45,184 edges.

| Category     | Change |      Delta |             % |                Size |         Nodes |
| ------------ | -----: | ---------: | ------------: | ------------------: | ------------: |
| code         |   0.0% |        0 B | 43.0% → 42.9% |             640 KiB |         2,765 |
| string       |    ~0% |       +1 B |         23.9% |             356 KiB |         6,250 |
| object shape |  +0.7% | +1.421 KiB | 13.3% → 13.4% |   199 KiB → 200 KiB | 1,816 → 1,829 |
| object       |   0.0% |        0 B |          7.7% |             115 KiB |         1,494 |
| internal     |    ~0% |      +48 B |          6.4% | 95.3 KiB → 95.4 KiB | 1,302 → 1,303 |
| closure      |   0.0% |        0 B |          4.4% |            65.1 KiB |         1,813 |
| array        |   0.0% |        0 B |          1.2% |              18 KiB |         1,112 |
| symbol       |   0.0% |        0 B |          0.1% |             1.2 KiB |            77 |
| regexp       |   0.0% |        0 B |         <0.1% |               352 B |             4 |
| native       |   0.0% |        0 B |         <0.1% |                59 B |             2 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

#### Regressions

Constructors with the largest increase in self size.

| Change |      Delta |             % |              Size |     Instances | Constructor     |
| -----: | ---------: | ------------: | ----------------: | ------------: | --------------- |
|  +0.7% | +1.421 KiB | 13.3% → 13.4% | 199 KiB → 200 KiB | 1,816 → 1,829 | `Structure`     |
|  +0.3% |      +48 B |          1.2% |          18.3 KiB |     390 → 391 | `PropertyTable` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Regressions

Constructors with the largest increase in retained size.

|  Change |      Delta |             % |                Size |     Instances | Constructor           |
| ------: | ---------: | ------------: | ------------------: | ------------: | --------------------- |
|   +0.3% | +1.467 KiB | 31.8% → 31.9% |   474 KiB → 476 KiB |           931 | `FunctionExecutable`  |
|   +0.6% | +1.453 KiB | 15.5% → 15.6% |   231 KiB → 232 KiB | 1,816 → 1,829 | `Structure`           |
|   +0.1% |     +387 B |         29.9% |             446 KiB |         1,077 | `Array`               |
|  +51.1% |     +384 B |  <0.1% → 0.1% |    752 B → 1.11 KiB |             1 | `FixedQueue`          |
| +150.0% |     +384 B |         <0.1% |       256 B → 640 B |             1 | `FixedCircularBuffer` |
|   +0.3% |      +48 B |          1.2% | 18.1 KiB → 18.2 KiB |     390 → 391 | `PropertyTable`       |
|     ~0% |       +3 B |          1.3% |            18.8 KiB |             1 | `Process`             |

#### Improvements

Constructors with the largest decrease in retained size.

| Change |       Delta |             % |                Size | Instances | Constructor         |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------- |
|  -6.8% | -90.746 KiB | 89.1% → 82.9% |  1.3 MiB → 1.21 MiB |         1 | `GlobalObject`      |
|  -1.9% | -11.593 KiB | 41.3% → 40.5% |   615 KiB → 603 KiB |     1,373 | `Object`            |
|  -4.0% |      -880 B |          1.4% | 21.5 KiB → 20.7 KiB |       105 | `StructureRareData` |

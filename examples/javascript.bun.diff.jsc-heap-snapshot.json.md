# Heap snapshot diff

Allocated 1.53 MB (+1.5 kB, +0.1%) across 16,635 → 16,649 nodes and 45,015 → 45,184 edges.

| Category | Change |   Delta |             % |            Size |         Nodes |
| -------- | -----: | ------: | ------------: | --------------: | ------------: |
| code     |   0.0% |     0 B | 42.6% → 42.5% |          649 kB |         2,762 |
| string   |    ~0% |    +1 B |         23.9% |          364 kB |         6,250 |
| internal |  +0.5% | +1.5 kB | 20.1% → 20.2% | 307 kB → 309 kB | 3,121 → 3,135 |
| object   |   0.0% |     0 B |          6.6% |          100 kB |         1,400 |
| closure  |   0.0% |     0 B |          4.4% |         66.7 kB |         1,813 |
| array    |   0.0% |     0 B |          1.2% |         18.4 kB |         1,112 |
| unknown  |   0.0% |     0 B |          1.0% |         15.3 kB |            34 |
| built-in |   0.0% |     0 B |          0.1% |         1.48 kB |            47 |
| symbol   |   0.0% |     0 B |          0.1% |         1.25 kB |            78 |
| native   |   0.0% |     0 B |         <0.1% |           699 B |            11 |
| regexp   |   0.0% |     0 B |         <0.1% |           352 B |             4 |
| bigint   |   0.0% |     0 B |         <0.1% |            50 B |             2 |
| number   |   0.0% |     0 B |         <0.1% |            34 B |             1 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

#### Regressions

Constructors with the largest increase in self size.

| Change |    Delta |             % |              Size |     Instances | Constructor     |
| -----: | -------: | ------------: | ----------------: | ------------: | --------------- |
|  +0.7% | +1.46 kB | 13.3% → 13.4% |   203 kB → 205 kB | 1,816 → 1,829 | `Structure`     |
|  +0.3% |    +48 B |          1.2% | 18.7 kB → 18.8 kB |     390 → 391 | `PropertyTable` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Regressions

Constructors with the largest increase in retained size.

|  Change |    Delta |             % |            Size |     Instances | Constructor           |
| ------: | -------: | ------------: | --------------: | ------------: | --------------------- |
|   +0.3% |  +1.5 kB | 31.8% → 31.9% | 486 kB → 487 kB |           931 | `FunctionExecutable`  |
|   +0.6% | +1.49 kB | 15.5% → 15.6% | 237 kB → 238 kB | 1,816 → 1,829 | `Structure`           |
|   +0.1% |   +387 B |         29.9% |          457 kB |         1,077 | `Array`               |
|  +51.1% |   +384 B |  <0.1% → 0.1% | 752 B → 1.14 kB |             1 | `FixedQueue`          |
| +150.0% |   +384 B |         <0.1% |   256 B → 640 B |             1 | `FixedCircularBuffer` |
|   +0.3% |    +48 B |          1.2% |         18.6 kB |     390 → 391 | `PropertyTable`       |
|     ~0% |     +3 B |          1.3% |         19.2 kB |             1 | `Process`             |

#### Improvements

Constructors with the largest decrease in retained size.

| Change |    Delta |             % |              Size | Instances | Constructor         |
| -----: | -------: | ------------: | ----------------: | --------: | ------------------- |
|  -6.8% | -92.9 kB | 89.1% → 82.9% | 1.36 MB → 1.27 MB |         1 | `GlobalObject`      |
|  -1.9% | -11.9 kB | 41.3% → 40.5% |   630 kB → 618 kB |     1,373 | `Object`            |
|  -4.0% |   -880 B |          1.4% | 22.1 kB → 21.2 kB |       105 | `StructureRareData` |

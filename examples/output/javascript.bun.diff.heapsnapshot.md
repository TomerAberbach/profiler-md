# Heap snapshot diff

Allocated 1.49 MiB (+1.515 KiB, +0.1%) across 16,733 → 16,748 nodes and 44,795 → 44,856 edges.

| Category           | Change |      Delta |             % |                Size |         Nodes |
| ------------------ | -----: | ---------: | ------------: | ------------------: | ------------: |
| Code               |   0.0% |        0 B | 45.4% → 45.3% |             693 KiB |         3,192 |
| String             |   0.0% |        0 B | 23.4% → 23.3% |             356 KiB |         6,272 |
| Object shape       |  +0.7% | +1.421 KiB | 13.4% → 13.5% |   205 KiB → 206 KiB | 1,870 → 1,883 |
| Object             |   0.0% |        0 B |          7.4% |             114 KiB |         1,471 |
| Internal           |  +0.1% |      +96 B |          4.9% | 75.4 KiB → 75.5 KiB |     960 → 962 |
| Function           |   0.0% |        0 B |          4.3% |              65 KiB |         1,811 |
| Array              |   0.0% |        0 B |          1.1% |            16.8 KiB |         1,073 |
| Symbol             |   0.0% |        0 B |          0.1% |             1.2 KiB |            77 |
| Native             |   0.0% |        0 B |         <0.1% |               387 B |             3 |
| Regular expression |   0.0% |        0 B |         <0.1% |                64 B |             2 |
| Big number         |   0.0% |        0 B |         <0.1% |                32 B |             1 |
| Synthetic          |      — |        0 B |          0.0% |                 0 B |             1 |

## Largest constructors

### Self size

No constructor differed in bytes allocated for its instances, excluding nodes kept reachable by them.

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Regressions

Constructors with the largest increase in retained size.

##### Object

|   Change |       Delta |             % |                Size | Instances | Constructor           |
| -------: | ----------: | ------------: | ------------------: | --------: | --------------------- |
|    +6.6% | +84.572 KiB | 83.9% → 89.3% | 1.25 MiB → 1.33 MiB |         1 | `GlobalObject`        |
| +1375.0% |      +880 B |  <0.1% → 0.1% |        64 B → 944 B |         1 | `FixedCircularBuffer` |
|  +916.7% |      +880 B |  <0.1% → 0.1% |        96 B → 976 B |         1 | `FixedQueue`          |
|    +0.1% |      +608 B |         40.8% |   622 KiB → 623 KiB |     1,367 | `Object`              |
|    +0.5% |      +272 B |          3.4% | 51.9 KiB → 52.1 KiB |         1 | `url `                |

## Largest functions

No function differed in bytes that would be freed if the function were garbage collected.

## Largest strings

No string differed in bytes allocated for it.

# Heap snapshot diff

Allocated 1.55 MB (-3.01 kB, -0.2%) across 16,629 → 16,601 nodes and 44,433 → 44,305 edges.

| Category     | Change |    Delta |             % |              Size |         Nodes |
| ------------ | -----: | -------: | ------------: | ----------------: | ------------: |
| code         |   0.0% |      0 B | 43.9% → 44.0% |            681 kB |         3,188 |
| string       |   0.0% |      0 B | 23.5% → 23.6% |            365 kB |         6,272 |
| object shape |  -1.5% | -2.91 kB | 12.7% → 12.6% |   198 kB → 195 kB | 1,764 → 1,738 |
| object       |   0.0% |      0 B |   9.3% → 9.4% |            145 kB |         1,484 |
| hidden       |  -0.1% |    -96 B |          5.0% | 77.3 kB → 77.2 kB |     962 → 960 |
| closure      |   0.0% |      0 B |          4.3% |           66.4 kB |         1,805 |
| array        |   0.0% |      0 B |          1.1% |           17.2 kB |         1,072 |
| symbol       |   0.0% |      0 B |          0.1% |           1.23 kB |            77 |
| native       |   0.0% |      0 B |         <0.1% |             328 B |             1 |
| regexp       |   0.0% |      0 B |         <0.1% |              64 B |             2 |
| bigint       |   0.0% |      0 B |         <0.1% |              32 B |             1 |
| synthetic    |      — |      0 B |          0.0% |               0 B |             1 |

## Largest constructors

### Self size

No constructor differed in bytes allocated for its instances, excluding nodes kept reachable by them.

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Progressions

Constructors with the largest decrease in retained size.

| Change |    Delta |            % |            Size | Instances | Constructor           |
| -----: | -------: | -----------: | --------------: | --------: | --------------------- |
|  -0.2% | -3.01 kB |        83.7% |          1.3 MB |         1 | `GlobalObject`        |
|  -8.3% | -1.26 kB |  1.0% → 0.9% | 15.3 kB → 14 kB |         1 | `ReadStream`          |
|  -2.0% | -1.04 kB |         3.4% | 53.1 kB → 52 kB |         1 | `url `                |
| -93.2% |   -880 B | 0.1% → <0.1% |    944 B → 64 B |         1 | `FixedCircularBuffer` |
| -42.6% |   -416 B | 0.1% → <0.1% |   976 B → 560 B |         1 | `FixedQueue`          |

## Largest closures

No closure differed in bytes that would be freed if the closure were garbage collected.

## Largest strings

No string differed in bytes allocated for it.

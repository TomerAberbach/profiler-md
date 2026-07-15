# Heap snapshot diff

Allocated 1.48 MiB (-2.937 KiB, -0.2%) across 16,629 → 16,601 nodes and 44,433 → 44,305 edges.

| Category     | Change |      Delta |             % |                Size |         Nodes |
| ------------ | -----: | ---------: | ------------: | ------------------: | ------------: |
| code         |   0.0% |        0 B | 43.9% → 44.0% |             665 KiB |         3,188 |
| string       |   0.0% |        0 B | 23.5% → 23.6% |             356 KiB |         6,272 |
| object shape |  -1.5% | -2.843 KiB | 12.7% → 12.6% |   193 KiB → 190 KiB | 1,764 → 1,738 |
| object       |   0.0% |        0 B |   9.3% → 9.4% |             141 KiB |         1,484 |
| hidden       |  -0.1% |      -96 B |          5.0% | 75.5 KiB → 75.4 KiB |     962 → 960 |
| closure      |   0.0% |        0 B |          4.3% |            64.8 KiB |         1,805 |
| array        |   0.0% |        0 B |          1.1% |            16.8 KiB |         1,072 |
| symbol       |   0.0% |        0 B |          0.1% |             1.2 KiB |            77 |
| native       |   0.0% |        0 B |         <0.1% |               328 B |             1 |
| regexp       |   0.0% |        0 B |         <0.1% |                64 B |             2 |
| bigint       |   0.0% |        0 B |         <0.1% |                32 B |             1 |
| synthetic    |      — |        0 B |          0.0% |                 0 B |             1 |

## Largest constructors

### Self size

No constructor differed in bytes allocated for its instances, excluding nodes kept reachable by them.

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Improvements

Constructors with the largest decrease in retained size.

| Change |      Delta |            % |                Size | Instances | Constructor           |
| -----: | ---------: | -----------: | ------------------: | --------: | --------------------- |
|  -0.2% | -2.937 KiB |        83.7% |            1.24 MiB |         1 | `GlobalObject`        |
|  -8.3% | -1.234 KiB |  1.0% → 0.9% | 14.9 KiB → 13.7 KiB |         1 | `ReadStream`          |
|  -2.0% | -1.015 KiB |         3.4% | 51.8 KiB → 50.8 KiB |         1 | `url `                |
| -93.2% |     -880 B | 0.1% → <0.1% |        944 B → 64 B |         1 | `FixedCircularBuffer` |
| -42.6% |     -416 B | 0.1% → <0.1% |       976 B → 560 B |         1 | `FixedQueue`          |

## Largest closures

No closure differed in bytes that would be freed if the closure were garbage collected.

## Largest strings

No string differed in bytes allocated for it.

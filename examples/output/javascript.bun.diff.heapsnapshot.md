# Heap snapshot diff

Allocated 1.48 MiB (-2.937 KiB, -0.2%) across 16,629 → 16,601 nodes and 44,433 → 44,305 edges.

| Category           | Change |      Delta |             % |                Size |         Nodes |
| ------------------ | -----: | ---------: | ------------: | ------------------: | ------------: |
| Code               |   0.0% |        0 B | 45.7% → 45.8% |             693 KiB |         3,192 |
| String             |   0.0% |        0 B | 23.5% → 23.6% |             356 KiB |         6,272 |
| Object shape       |  -1.5% | -2.843 KiB | 12.7% → 12.6% |   193 KiB → 190 KiB | 1,764 → 1,738 |
| Object             |   0.0% |        0 B |          7.5% |             114 KiB |         1,471 |
| Internal           |  -0.1% |      -96 B |          5.0% | 75.5 KiB → 75.4 KiB |     962 → 960 |
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

#### Improvements

Constructors with the largest decrease in retained size.

##### Object

| Change |      Delta |            % |                Size | Instances | Constructor           |
| -----: | ---------: | -----------: | ------------------: | --------: | --------------------- |
|  -0.2% | -2.937 KiB |        83.7% |            1.24 MiB |         1 | `GlobalObject`        |
|  -8.3% | -1.234 KiB |  1.0% → 0.9% | 14.9 KiB → 13.7 KiB |         1 | `ReadStream`          |
|  -2.0% | -1.015 KiB |         3.4% | 51.8 KiB → 50.8 KiB |         1 | `url `                |
| -93.2% |     -880 B | 0.1% → <0.1% |        944 B → 64 B |         1 | `FixedCircularBuffer` |
| -42.6% |     -416 B | 0.1% → <0.1% |       976 B → 560 B |         1 | `FixedQueue`          |

## Largest functions

No function differed in bytes that would be freed if the function were garbage collected.

## Largest strings

No string differed in bytes allocated for it.

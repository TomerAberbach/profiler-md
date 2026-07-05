# Heap snapshot diff

Allocated 940 kB (+496 B, +0.1%) across 30,859 → 32,693 nodes and 137,199 → 142,162 edges.

| Category            | Change |  Delta |     % |              Size |       Nodes |
| ------------------- | -----: | -----: | ----: | ----------------: | ----------: |
| hidden              |   0.0% |    0 B | 28.2% |            265 kB |       8,002 |
| object shape        |   0.0% |    0 B | 17.2% |            162 kB |       2,500 |
| string              |   0.0% |    0 B | 12.5% |            118 kB |       6,143 |
| array               |   0.0% |    0 B | 11.7% |            110 kB |         369 |
| object              |   0.0% |    0 B | 10.5% |           99.1 kB |       2,884 |
| closure             |   0.0% |    0 B |  8.2% |           77.2 kB |       2,704 |
| native              |  +0.7% | +496 B |  7.8% | 73.3 kB → 73.8 kB | 952 → 2,786 |
| code                |   0.0% |    0 B |  2.8% |           25.9 kB |       6,123 |
| number              |   0.0% |    0 B |  0.6% |           5.78 kB |         933 |
| concatenated string |   0.0% |    0 B |  0.4% |           4.04 kB |         202 |
| synthetic           |      — |    0 B |  0.0% |               0 B |          31 |
| symbol              |      — |    0 B |  0.0% |               0 B |          16 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

#### Regressions

Constructors with the largest increase in self size.

| Change |  Delta |            % |        Size | Instances | Constructor                    | Location    |
| -----: | -----: | -----------: | ----------: | --------: | ------------------------------ | ----------- |
|    new | +200 B | 0.0% → <0.1% | 0 B → 200 B |     0 → 1 | `IntersectionObserver`         | `<unknown>` |
|    new | +136 B | 0.0% → <0.1% | 0 B → 136 B |     0 → 1 | `TaskAttributionTiming`        | `<unknown>` |
|    new | +120 B | 0.0% → <0.1% | 0 B → 120 B |     0 → 1 | `PerformanceLongTaskTiming`    | `<unknown>` |
|    new |  +40 B | 0.0% → <0.1% |  0 B → 40 B |     0 → 1 | `IntersectionObserverDelegate` | `<unknown>` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Regressions

Constructors with the largest increase in retained size.

| Change |  Delta |            % |              Size |   Instances | Constructor                    | Location    |
| -----: | -----: | -----------: | ----------------: | ----------: | ------------------------------ | ----------- |
| +27.6% | +496 B |         0.2% |   1.8 kB → 2.3 kB | 269 → 2,099 | `InternalNode`                 | `<unknown>` |
|  +0.3% | +256 B |         8.2% |   76.8 kB → 77 kB |          10 | `Window`                       | `<unknown>` |
| +19.9% | +256 B |  0.1% → 0.2% | 1.29 kB → 1.54 kB |           1 | `Performance`                  | `<unknown>` |
|    new | +256 B | 0.0% → <0.1% |       0 B → 256 B |       0 → 1 | `PerformanceLongTaskTiming`    | `<unknown>` |
|  +4.5% | +240 B |         0.6% | 5.32 kB → 5.56 kB |           3 | `HTMLDocument`                 | `<unknown>` |
|    new | +240 B | 0.0% → <0.1% |       0 B → 240 B |       0 → 1 | `IntersectionObserver`         | `<unknown>` |
|    new | +136 B | 0.0% → <0.1% |       0 B → 136 B |       0 → 1 | `TaskAttributionTiming`        | `<unknown>` |
|    new |  +40 B | 0.0% → <0.1% |        0 B → 40 B |       0 → 1 | `IntersectionObserverDelegate` | `<unknown>` |

#### Improvements

Constructors with the largest decrease in retained size.

| Change |    Delta |           % |              Size | Instances | Constructor                | Location    |
| -----: | -------: | ----------: | ----------------: | --------: | -------------------------- | ----------- |
| -50.4% |   -27 kB | 5.7% → 2.8% | 53.6 kB → 26.6 kB |       100 | `<article class="status">` | `<unknown>` |
| -26.4% | -5.28 kB | 2.1% → 1.6% |   20 kB → 14.7 kB |       100 | `<h2>`                     | `<unknown>` |
| -26.4% | -5.28 kB | 2.1% → 1.6% |   20 kB → 14.7 kB |       100 | `<p>`                      | `<unknown>` |
| -15.0% |   -240 B | 0.2% → 0.1% |  1.6 kB → 1.36 kB |         8 | `<span class="hashtag">`   | `<unknown>` |

## Largest closures

No closure differed in bytes that would be freed if the closure were garbage collected.

## Largest strings

No string differed in bytes allocated for it.

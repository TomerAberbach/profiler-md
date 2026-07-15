# Heap snapshot diff

Allocated 918 KiB (+496 B, +0.1%) across 30,859 → 32,693 nodes and 137,199 → 142,162 edges.

| Category            | Change |  Delta |     % |              Size |       Nodes |
| ------------------- | -----: | -----: | ----: | ----------------: | ----------: |
| hidden              |   0.0% |    0 B | 28.2% |           259 KiB |       8,002 |
| object shape        |   0.0% |    0 B | 17.2% |           158 KiB |       2,500 |
| string              |   0.0% |    0 B | 12.5% |           115 KiB |       6,143 |
| array               |   0.0% |    0 B | 11.7% |           107 KiB |         369 |
| object              |   0.0% |    0 B | 10.5% |          96.8 KiB |       2,884 |
| closure             |   0.0% |    0 B |  8.2% |          75.4 KiB |       2,704 |
| native              |  +0.7% | +496 B |  7.8% | 71.5 KiB → 72 KiB | 952 → 2,786 |
| code                |   0.0% |    0 B |  2.8% |          25.3 KiB |       6,123 |
| number              |   0.0% |    0 B |  0.6% |          5.65 KiB |         933 |
| concatenated string |   0.0% |    0 B |  0.4% |          3.95 KiB |         202 |
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

| Change |  Delta |            % |                Size |   Instances | Constructor                    | Location    |
| -----: | -----: | -----------: | ------------------: | ----------: | ------------------------------ | ----------- |
| +27.6% | +496 B |         0.2% | 1.76 KiB → 2.24 KiB | 269 → 2,099 | `InternalNode`                 | `<unknown>` |
|  +0.3% | +256 B |         8.2% |   75 KiB → 75.2 KiB |          10 | `Window`                       | `<unknown>` |
| +19.9% | +256 B |  0.1% → 0.2% | 1.26 KiB → 1.51 KiB |           1 | `Performance`                  | `<unknown>` |
|    new | +256 B | 0.0% → <0.1% |         0 B → 256 B |       0 → 1 | `PerformanceLongTaskTiming`    | `<unknown>` |
|  +4.5% | +240 B |         0.6% |  5.2 KiB → 5.43 KiB |           3 | `HTMLDocument`                 | `<unknown>` |
|    new | +240 B | 0.0% → <0.1% |         0 B → 240 B |       0 → 1 | `IntersectionObserver`         | `<unknown>` |
|    new | +136 B | 0.0% → <0.1% |         0 B → 136 B |       0 → 1 | `TaskAttributionTiming`        | `<unknown>` |
|    new |  +40 B | 0.0% → <0.1% |          0 B → 40 B |       0 → 1 | `IntersectionObserverDelegate` | `<unknown>` |

#### Improvements

Constructors with the largest decrease in retained size.

| Change |       Delta |           % |                Size | Instances | Constructor                | Location    |
| -----: | ----------: | ----------: | ------------------: | --------: | -------------------------- | ----------- |
| -50.4% | -26.367 KiB | 5.7% → 2.8% |   52.3 KiB → 26 KiB |       100 | `<article class="status">` | `<unknown>` |
| -26.4% |  -5.156 KiB | 2.1% → 1.6% | 19.5 KiB → 14.4 KiB |       100 | `<h2>`                     | `<unknown>` |
| -26.4% |  -5.156 KiB | 2.1% → 1.6% | 19.5 KiB → 14.4 KiB |       100 | `<p>`                      | `<unknown>` |
| -15.0% |      -240 B | 0.2% → 0.1% | 1.56 KiB → 1.33 KiB |         8 | `<span class="hashtag">`   | `<unknown>` |

## Largest closures

No closure differed in bytes that would be freed if the closure were garbage collected.

## Largest strings

No string differed in bytes allocated for it.

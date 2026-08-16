# Heap snapshot diff

Allocated 1011 KiB → 1012 KiB (+496 B, ~0%) across 33,183 → 34,798 nodes and 145,158 → 149,397 edges.

| Category            | Change |  Delta |             % |              Size |       Nodes |
| ------------------- | -----: | -----: | ------------: | ----------------: | ----------: |
| Internal            |   0.0% |    0 B | 28.3% → 28.2% |           286 KiB |       9,074 |
| Object shape        |   0.0% |    0 B |         16.1% |           163 KiB |       2,580 |
| String              |   0.0% |    0 B |         13.5% |           136 KiB |       6,591 |
| Array               |   0.0% |    0 B |         12.3% |           124 KiB |       1,453 |
| Object              |   0.0% |    0 B |          8.0% |            81 KiB |       1,857 |
| Function            |   0.0% |    0 B |          7.9% |          79.5 KiB |       2,849 |
| Native              |  +0.6% | +496 B |   7.5% → 7.6% | 76 KiB → 76.4 KiB | 995 → 2,610 |
| Code                |   0.0% |    0 B |          5.5% |          55.7 KiB |       6,594 |
| Number              |   0.0% |    0 B |          0.6% |          5.65 KiB |         934 |
| Concatenated string |   0.0% |    0 B |          0.4% |          4.06 KiB |         208 |
| Regular expression  |   0.0% |    0 B |         <0.1% |              28 B |           1 |
| Synthetic           |      — |    0 B |          0.0% |               0 B |          31 |
| Symbol              |      — |    0 B |          0.0% |               0 B |          16 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

#### Regressions

Constructors with the largest increase in self size.

##### Native

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

##### Native

| Change |  Delta |            % |                Size |   Instances | Constructor                    | Location    |
| -----: | -----: | -----------: | ------------------: | ----------: | ------------------------------ | ----------- |
| +16.0% | +496 B |         0.3% | 3.03 KiB → 3.52 KiB | 283 → 1,894 | `InternalNode`                 | `<unknown>` |
|  +0.3% | +256 B |         7.5% |   75.8 KiB → 76 KiB |          10 | `Window`                       | `<unknown>` |
| +16.0% | +256 B |         0.2% | 1.56 KiB → 1.81 KiB |           1 | `Performance`                  | `<unknown>` |
|    new | +256 B | 0.0% → <0.1% |         0 B → 256 B |       0 → 1 | `PerformanceLongTaskTiming`    | `<unknown>` |
|  +4.5% | +240 B |         0.5% | 5.23 KiB → 5.46 KiB |           3 | `HTMLDocument`                 | `<unknown>` |
|    new | +240 B | 0.0% → <0.1% |         0 B → 240 B |       0 → 1 | `IntersectionObserver`         | `<unknown>` |
|    new | +136 B | 0.0% → <0.1% |         0 B → 136 B |       0 → 1 | `TaskAttributionTiming`        | `<unknown>` |
|    new |  +40 B | 0.0% → <0.1% |          0 B → 40 B |       0 → 1 | `IntersectionObserverDelegate` | `<unknown>` |

#### Improvements

Constructors with the largest decrease in retained size.

##### Native

| Change |       Delta |           % |                Size | Instances | Constructor                | Location    |
| -----: | ----------: | ----------: | ------------------: | --------: | -------------------------- | ----------- |
| -50.4% | -26.367 KiB | 5.2% → 2.6% |   52.3 KiB → 26 KiB |       100 | `<article class="status">` | `<unknown>` |
| -26.4% |  -5.156 KiB | 1.9% → 1.4% | 19.5 KiB → 14.4 KiB |       100 | `<p>`                      | `<unknown>` |
| -26.4% |  -5.156 KiB | 1.9% → 1.4% | 19.5 KiB → 14.4 KiB |       100 | `<h2>`                     | `<unknown>` |
| -15.0% |      -240 B | 0.2% → 0.1% | 1.56 KiB → 1.33 KiB |         8 | `<span class="hashtag">`   | `<unknown>` |

## Largest functions

No function differed in bytes that would be freed if the function were garbage collected.

## Largest strings

Strings ranked by bytes allocated for them.

### Regressions

Strings with the largest increase in size.

#### String

| Change | Delta |            % |       Size | Value                                                | Path        |
| -----: | ----: | -----------: | ---------: | ---------------------------------------------------- | ----------- |
|    new | +68 B | 0.0% → <0.1% | 0 B → 68 B | `http://127.0.0.1:52789E855ACDCDA1A5B613DDD40E0D9D…` | `(GC root)` |

### Improvements

Strings with the largest decrease in size.

#### String

|  Change | Delta |            % |       Size | Value                                                | Path        |
| ------: | ----: | -----------: | ---------: | ---------------------------------------------------- | ----------- |
| removed | -68 B | <0.1% → 0.0% | 68 B → 0 B | `http://127.0.0.1:527895C4268906A52093F2E56B7F6E5A…` | `(GC root)` |

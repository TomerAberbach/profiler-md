# CPU profile diff

Took 1.88s → 1.60s (-279.28ms, -14.8%) over 1,887 samples → 1,608 samples (1.0ms per sample).

| Category |  Change |     Delta |           % |          Time |       Samples |
| -------- | ------: | --------: | ----------: | ------------: | ------------: |
| Ours     |  -14.8% | -278.28ms |       99.8% | 1.88s → 1.60s | 1,883 → 1,605 |
| Kernel   | +100.0% |   +1.00ms |        0.1% | 1.0ms → 2.0ms |         1 → 2 |
| Native   |  -66.7% |   -2.00ms | 0.2% → 0.1% | 3.0ms → 1.0ms |         3 → 1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

##### Ours

| Change |     Delta |            % |          Time | Samples | Function  | Location |
| -----: | --------: | -----------: | ------------: | ------: | --------- | -------- |
|    new | +278.28ms | 0.0% → 17.3% | 0ms → 278.3ms | 0 → 278 | `0x60980` | `zstd`   |
|    new | +277.28ms | 0.0% → 17.2% | 0ms → 277.3ms | 0 → 277 | `0x609c8` | `zstd`   |
|    new | +225.23ms | 0.0% → 14.0% | 0ms → 225.2ms | 0 → 225 | `0x60c38` | `zstd`   |
|    new | +218.22ms | 0.0% → 13.6% | 0ms → 218.2ms | 0 → 218 | `0x60c5c` | `zstd`   |
|    new |  +57.06ms |  0.0% → 3.5% |  0ms → 57.1ms |  0 → 57 | `0x609b8` | `zstd`   |
|    new |  +48.05ms |  0.0% → 3.0% |  0ms → 48.0ms |  0 → 48 | `0x5a65c` | `zstd`   |
|    new |  +43.04ms |  0.0% → 2.7% |  0ms → 43.0ms |  0 → 43 | `0x60c90` | `zstd`   |
|    new |  +30.03ms |  0.0% → 1.9% |  0ms → 30.0ms |  0 → 30 | `0x5a7c0` | `zstd`   |
|    new |  +28.03ms |  0.0% → 1.7% |  0ms → 28.0ms |  0 → 28 | `0x5a85c` | `zstd`   |
|    new |  +23.02ms |  0.0% → 1.4% |  0ms → 23.0ms |  0 → 23 | `0x5a78c` | `zstd`   |
|    new |  +19.02ms |  0.0% → 1.2% |  0ms → 19.0ms |  0 → 19 | `0x60a08` | `zstd`   |
|    new |  +19.02ms |  0.0% → 1.2% |  0ms → 19.0ms |  0 → 19 | `0x609ec` | `zstd`   |
|    new |  +16.02ms |  0.0% → 1.0% |  0ms → 16.0ms |  0 → 16 | `0x5a838` | `zstd`   |
|    new |  +14.01ms |  0.0% → 0.9% |  0ms → 14.0ms |  0 → 14 | `0x609bc` | `zstd`   |
|    new |  +12.01ms |  0.0% → 0.7% |  0ms → 12.0ms |  0 → 12 | `0x60978` | `zstd`   |
|    new |  +10.01ms |  0.0% → 0.6% |  0ms → 10.0ms |  0 → 10 | `0x5a770` | `zstd`   |
|    new |  +10.01ms |  0.0% → 0.6% |  0ms → 10.0ms |  0 → 10 | `0x5a874` | `zstd`   |
|    new |  +10.01ms |  0.0% → 0.6% |  0ms → 10.0ms |  0 → 10 | `0x609d4` | `zstd`   |
|    new |   +9.01ms |  0.0% → 0.6% |   0ms → 9.0ms |   0 → 9 | `0x5a7a8` | `zstd`   |
|    new |   +8.01ms |  0.0% → 0.5% |   0ms → 8.0ms |   0 → 8 | `0x60acc` | `zstd`   |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

##### Ours

|  Change |     Delta |            % |          Time | Samples | Function  | Location |
| ------: | --------: | -----------: | ------------: | ------: | --------- | -------- |
| removed | -296.30ms | 15.7% → 0.0% | 296.3ms → 0ms | 296 → 0 | `0x5f800` | `zstd`   |
| removed | -296.30ms | 15.7% → 0.0% | 296.3ms → 0ms | 296 → 0 | `0x5f848` | `zstd`   |
| removed | -292.29ms | 15.5% → 0.0% | 292.3ms → 0ms | 292 → 0 | `0x5fab8` | `zstd`   |
| removed | -249.25ms | 13.2% → 0.0% | 249.2ms → 0ms | 249 → 0 | `0x5fadc` | `zstd`   |
| removed |  -99.10ms |  5.2% → 0.0% |  99.1ms → 0ms |  99 → 0 | `0x5f838` | `zstd`   |
| removed |  -52.05ms |  2.8% → 0.0% |  52.1ms → 0ms |  52 → 0 | `0x5fb10` | `zstd`   |
| removed |  -43.04ms |  2.3% → 0.0% |  43.0ms → 0ms |  43 → 0 | `0x594d8` | `zstd`   |
| removed |  -42.04ms |  2.2% → 0.0% |  42.0ms → 0ms |  42 → 0 | `0x59640` | `zstd`   |
| removed |  -33.03ms |  1.7% → 0.0% |  33.0ms → 0ms |  33 → 0 | `0x596dc` | `zstd`   |
| removed |  -32.03ms |  1.7% → 0.0% |  32.0ms → 0ms |  32 → 0 | `0x5f86c` | `zstd`   |
| removed |  -25.03ms |  1.3% → 0.0% |  25.0ms → 0ms |  25 → 0 | `0x5960c` | `zstd`   |
| removed |  -20.02ms |  1.1% → 0.0% |  20.0ms → 0ms |  20 → 0 | `0x596b8` | `zstd`   |
| removed |  -18.02ms |  1.0% → 0.0% |  18.0ms → 0ms |  18 → 0 | `0x5f7e0` | `zstd`   |
| removed |  -15.02ms |  0.8% → 0.0% |  15.0ms → 0ms |  15 → 0 | `0x591d0` | `zstd`   |
| removed |  -15.02ms |  0.8% → 0.0% |  15.0ms → 0ms |  15 → 0 | `0x5f888` | `zstd`   |
| removed |  -13.01ms |  0.7% → 0.0% |  13.0ms → 0ms |  13 → 0 | `0x577d4` | `zstd`   |
| removed |  -13.01ms |  0.7% → 0.0% |  13.0ms → 0ms |  13 → 0 | `0x596f4` | `zstd`   |
| removed |  -13.01ms |  0.7% → 0.0% |  13.0ms → 0ms |  13 → 0 | `0x5f854` | `zstd`   |
| removed |  -13.01ms |  0.7% → 0.0% |  13.0ms → 0ms |  13 → 0 | `0x5fb08` | `zstd`   |
| removed |  -11.01ms |  0.6% → 0.0% |  11.0ms → 0ms |  11 → 0 | `0x5f820` | `zstd`   |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x60980` (`zstd`)

| Change |     Delta |             % |          Time | Samples | Caller    | Location |
| -----: | --------: | ------------: | ------------: | ------: | --------- | -------- |
|    new | +278.28ms | 0.0% → 100.0% | 0ms → 278.3ms | 0 → 278 | `0x5a3f2` | `zstd`   |

##### `0x609c8` (`zstd`)

| Change |     Delta |             % |          Time | Samples | Caller    | Location |
| -----: | --------: | ------------: | ------------: | ------: | --------- | -------- |
|    new | +277.28ms | 0.0% → 100.0% | 0ms → 277.3ms | 0 → 277 | `0x5a3f2` | `zstd`   |

##### `0x60c38` (`zstd`)

| Change |     Delta |             % |          Time | Samples | Caller    | Location |
| -----: | --------: | ------------: | ------------: | ------: | --------- | -------- |
|    new | +225.23ms | 0.0% → 100.0% | 0ms → 225.2ms | 0 → 225 | `0x5a3f2` | `zstd`   |

##### `0x60c5c` (`zstd`)

| Change |     Delta |             % |          Time | Samples | Caller    | Location |
| -----: | --------: | ------------: | ------------: | ------: | --------- | -------- |
|    new | +218.22ms | 0.0% → 100.0% | 0ms → 218.2ms | 0 → 218 | `0x5a3f2` | `zstd`   |

##### `0x609b8` (`zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +57.06ms | 0.0% → 100.0% | 0ms → 57.1ms |  0 → 57 | `0x5a3f2` | `zstd`   |

##### `0x5a65c` (`zstd`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location |
| -----: | -------: | -----------: | -----------: | ------: | --------- | -------- |
|    new | +46.05ms | 0.0% → 95.8% | 0ms → 46.0ms |  0 → 46 | `0x1162e` | `zstd`   |
|    new |  +2.00ms |  0.0% → 4.2% |  0ms → 2.0ms |   0 → 2 | `0x61b3e` | `zstd`   |

##### `0x60c90` (`zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +43.04ms | 0.0% → 100.0% | 0ms → 43.0ms |  0 → 43 | `0x5a3f2` | `zstd`   |

##### `0x5a7c0` (`zstd`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location |
| -----: | -------: | -----------: | -----------: | ------: | --------- | -------- |
|    new | +27.03ms | 0.0% → 90.0% | 0ms → 27.0ms |  0 → 27 | `0x1162e` | `zstd`   |
|    new |  +3.00ms | 0.0% → 10.0% |  0ms → 3.0ms |   0 → 3 | `0x61b3e` | `zstd`   |

##### `0x5a85c` (`zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +28.03ms | 0.0% → 100.0% | 0ms → 28.0ms |  0 → 28 | `0x1162e` | `zstd`   |

##### `0x5a78c` (`zstd`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location |
| -----: | -------: | -----------: | -----------: | ------: | --------- | -------- |
|    new | +22.02ms | 0.0% → 95.7% | 0ms → 22.0ms |  0 → 22 | `0x1162e` | `zstd`   |
|    new |  +1.00ms |  0.0% → 4.3% |  0ms → 1.0ms |   0 → 1 | `0x61b3e` | `zstd`   |

##### `0x60a08` (`zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +19.02ms | 0.0% → 100.0% | 0ms → 19.0ms |  0 → 19 | `0x5a3f2` | `zstd`   |

##### `0x609ec` (`zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +19.02ms | 0.0% → 100.0% | 0ms → 19.0ms |  0 → 19 | `0x5a3f2` | `zstd`   |

##### `0x5a838` (`zstd`)

| Change |    Delta |            % |         Time | Samples | Caller    | Location |
| -----: | -------: | -----------: | -----------: | ------: | --------- | -------- |
|    new | +15.02ms | 0.0% → 93.8% | 0ms → 15.0ms |  0 → 15 | `0x1162e` | `zstd`   |
|    new |  +1.00ms |  0.0% → 6.3% |  0ms → 1.0ms |   0 → 1 | `0x61b3e` | `zstd`   |

##### `0x609bc` (`zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +14.01ms | 0.0% → 100.0% | 0ms → 14.0ms |  0 → 14 | `0x5a3f2` | `zstd`   |

##### `0x60978` (`zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +12.01ms | 0.0% → 100.0% | 0ms → 12.0ms |  0 → 12 | `0x5a3f2` | `zstd`   |

##### `0x5a770` (`zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +10.01ms | 0.0% → 100.0% | 0ms → 10.0ms |  0 → 10 | `0x1162e` | `zstd`   |

##### `0x5a874` (`zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +10.01ms | 0.0% → 100.0% | 0ms → 10.0ms |  0 → 10 | `0x1162e` | `zstd`   |

##### `0x609d4` (`zstd`)

| Change |    Delta |             % |         Time | Samples | Caller    | Location |
| -----: | -------: | ------------: | -----------: | ------: | --------- | -------- |
|    new | +10.01ms | 0.0% → 100.0% | 0ms → 10.0ms |  0 → 10 | `0x5a3f2` | `zstd`   |

##### `0x5a7a8` (`zstd`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------- |
|    new | +9.01ms | 0.0% → 100.0% | 0ms → 9.0ms |   0 → 9 | `0x1162e` | `zstd`   |

##### `0x60acc` (`zstd`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------- |
|    new | +8.01ms | 0.0% → 100.0% | 0ms → 8.0ms |   0 → 8 | `0x5a3f2` | `zstd`   |

##### `0x5f800` (`zstd`)

|  Change |     Delta |            % |          Time | Samples | Caller    | Location |
| ------: | --------: | -----------: | ------------: | ------: | --------- | -------- |
| removed | -295.30ms | 99.7% → 0.0% | 295.3ms → 0ms | 295 → 0 | `0x59272` | `zstd`   |
| removed |   -1.00ms |  0.3% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x58c76` | `zstd`   |

##### `0x5f848` (`zstd`)

|  Change |     Delta |            % |          Time | Samples | Caller    | Location |
| ------: | --------: | -----------: | ------------: | ------: | --------- | -------- |
| removed | -295.30ms | 99.7% → 0.0% | 295.3ms → 0ms | 295 → 0 | `0x59272` | `zstd`   |
| removed |   -1.00ms |  0.3% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x58c76` | `zstd`   |

##### `0x5fab8` (`zstd`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -292.29ms | 100.0% → 0.0% | 292.3ms → 0ms | 292 → 0 | `0x59272` | `zstd`   |

##### `0x5fadc` (`zstd`)

|  Change |     Delta |             % |          Time | Samples | Caller    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -249.25ms | 100.0% → 0.0% | 249.2ms → 0ms | 249 → 0 | `0x59272` | `zstd`   |

##### `0x5f838` (`zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -99.10ms | 100.0% → 0.0% | 99.1ms → 0ms |  99 → 0 | `0x59272` | `zstd`   |

##### `0x5fb10` (`zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -52.05ms | 100.0% → 0.0% | 52.1ms → 0ms |  52 → 0 | `0x59272` | `zstd`   |

##### `0x594d8` (`zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -43.04ms | 100.0% → 0.0% | 43.0ms → 0ms |  43 → 0 | `0x1108e` | `zstd`   |

##### `0x59640` (`zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -42.04ms | 100.0% → 0.0% | 42.0ms → 0ms |  42 → 0 | `0x1108e` | `zstd`   |

##### `0x596dc` (`zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -33.03ms | 100.0% → 0.0% | 33.0ms → 0ms |  33 → 0 | `0x1108e` | `zstd`   |

##### `0x5f86c` (`zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -32.03ms | 100.0% → 0.0% | 32.0ms → 0ms |  32 → 0 | `0x59272` | `zstd`   |

##### `0x5960c` (`zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -25.03ms | 100.0% → 0.0% | 25.0ms → 0ms |  25 → 0 | `0x1108e` | `zstd`   |

##### `0x596b8` (`zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -20.02ms | 100.0% → 0.0% | 20.0ms → 0ms |  20 → 0 | `0x1108e` | `zstd`   |

##### `0x5f7e0` (`zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -18.02ms | 100.0% → 0.0% | 18.0ms → 0ms |  18 → 0 | `0x59272` | `zstd`   |

##### `0x591d0` (`zstd`)

|  Change |    Delta |            % |         Time | Samples | Caller    | Location |
| ------: | -------: | -----------: | -----------: | ------: | --------- | -------- |
| removed | -14.01ms | 93.3% → 0.0% | 14.0ms → 0ms |  14 → 0 | `0x1108e` | `zstd`   |
| removed |  -1.00ms |  6.7% → 0.0% |  1.0ms → 0ms |   1 → 0 | `0x609be` | `zstd`   |

##### `0x5f888` (`zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -15.02ms | 100.0% → 0.0% | 15.0ms → 0ms |  15 → 0 | `0x59272` | `zstd`   |

##### `0x577d4` (`zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -13.01ms | 100.0% → 0.0% | 13.0ms → 0ms |  13 → 0 | `0x1108e` | `zstd`   |

##### `0x596f4` (`zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -13.01ms | 100.0% → 0.0% | 13.0ms → 0ms |  13 → 0 | `0x1108e` | `zstd`   |

##### `0x5f854` (`zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -13.01ms | 100.0% → 0.0% | 13.0ms → 0ms |  13 → 0 | `0x59272` | `zstd`   |

##### `0x5fb08` (`zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -13.01ms | 100.0% → 0.0% | 13.0ms → 0ms |  13 → 0 | `0x59272` | `zstd`   |

##### `0x5f820` (`zstd`)

|  Change |    Delta |             % |         Time | Samples | Caller    | Location |
| ------: | -------: | ------------: | -----------: | ------: | --------- | -------- |
| removed | -11.01ms | 100.0% → 0.0% | 11.0ms → 0ms |  11 → 0 | `0x59272` | `zstd`   |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

##### Ours

| Change |     Delta |            % |          Time |   Samples | Function  | Location |
| -----: | --------: | -----------: | ------------: | --------: | --------- | -------- |
|    new |   +1.607s | 0.0% → 99.9% |   0ms → 1.60s | 0 → 1,606 | `0x9f1e`  | `zstd`   |
|    new |   +1.596s | 0.0% → 99.2% |   0ms → 1.59s | 0 → 1,595 | `0x1162e` | `zstd`   |
|    new |   +1.596s | 0.0% → 99.2% |   0ms → 1.59s | 0 → 1,595 | `0x1671e` | `zstd`   |
|    new |   +1.332s | 0.0% → 82.8% |   0ms → 1.33s | 0 → 1,331 | `0x62a5e` | `zstd`   |
|    new |   +1.279s | 0.0% → 79.5% |   0ms → 1.27s | 0 → 1,278 | `0x5a3f2` | `zstd`   |
|    new | +278.28ms | 0.0% → 17.3% | 0ms → 278.3ms |   0 → 278 | `0x60980` | `zstd`   |
|    new | +277.28ms | 0.0% → 17.2% | 0ms → 277.3ms |   0 → 277 | `0x609c8` | `zstd`   |
|    new | +274.27ms | 0.0% → 17.0% | 0ms → 274.3ms |   0 → 274 | `0x17e36` | `zstd`   |
|    new | +274.27ms | 0.0% → 17.0% | 0ms → 274.3ms |   0 → 274 | `0x62d32` | `zstd`   |
|    new | +225.23ms | 0.0% → 14.0% | 0ms → 225.2ms |   0 → 225 | `0x60c38` | `zstd`   |
|    new | +218.22ms | 0.0% → 13.6% | 0ms → 218.2ms |   0 → 218 | `0x60c5c` | `zstd`   |
|    new |  +57.06ms |  0.0% → 3.5% |  0ms → 57.1ms |    0 → 57 | `0x609b8` | `zstd`   |
|    new |  +48.05ms |  0.0% → 3.0% |  0ms → 48.0ms |    0 → 48 | `0x5a65c` | `zstd`   |
|    new |  +43.04ms |  0.0% → 2.7% |  0ms → 43.0ms |    0 → 43 | `0x60c90` | `zstd`   |
|    new |  +30.03ms |  0.0% → 1.9% |  0ms → 30.0ms |    0 → 30 | `0x5a7c0` | `zstd`   |
|    new |  +28.03ms |  0.0% → 1.7% |  0ms → 28.0ms |    0 → 28 | `0x5a85c` | `zstd`   |
|    new |  +23.02ms |  0.0% → 1.4% |  0ms → 23.0ms |    0 → 23 | `0x5a78c` | `zstd`   |
|    new |  +20.02ms |  0.0% → 1.2% |  0ms → 20.0ms |    0 → 20 | `0x61b3e` | `zstd`   |
|    new |  +19.02ms |  0.0% → 1.2% |  0ms → 19.0ms |    0 → 19 | `0x60a08` | `zstd`   |
|    new |  +19.02ms |  0.0% → 1.2% |  0ms → 19.0ms |    0 → 19 | `0x609ec` | `zstd`   |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |     Delta |             % |          Time |       Samples | Function  | Location                               |
| ------: | --------: | ------------: | ------------: | ------------: | --------- | -------------------------------------- |
| removed |   -1.885s |  99.8% → 0.0% |   1.88s → 0ms |     1,884 → 0 | `0x9cee`  | `zstd`                                 |
| removed |   -1.867s |  98.9% → 0.0% |   1.86s → 0ms |     1,866 → 0 | `0x1601e` | `zstd`                                 |
| removed |   -1.866s |  98.8% → 0.0% |   1.86s → 0ms |     1,865 → 0 | `0x1108e` | `zstd`                                 |
| removed |   -1.577s |  83.5% → 0.0% |   1.57s → 0ms |     1,576 → 0 | `0x61402` | `zstd`                                 |
| removed |   -1.492s |  79.0% → 0.0% |   1.49s → 0ms |     1,491 → 0 | `0x59272` | `zstd`                                 |
| removed | -306.31ms |  16.2% → 0.0% | 306.3ms → 0ms |       306 → 0 | `0x17766` | `zstd`                                 |
| removed | -306.31ms |  16.2% → 0.0% | 306.3ms → 0ms |       306 → 0 | `0x616b6` | `zstd`                                 |
| removed | -296.30ms |  15.7% → 0.0% | 296.3ms → 0ms |       296 → 0 | `0x5f800` | `zstd`                                 |
| removed | -296.30ms |  15.7% → 0.0% | 296.3ms → 0ms |       296 → 0 | `0x5f848` | `zstd`                                 |
| removed | -292.29ms |  15.5% → 0.0% | 292.3ms → 0ms |       292 → 0 | `0x5fab8` | `zstd`                                 |
|  -14.8% | -278.28ms | 99.8% → 99.9% | 1.88s → 1.60s | 1,884 → 1,606 | `0x8202e` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -14.8% | -278.28ms | 99.8% → 99.9% | 1.88s → 1.60s | 1,884 → 1,606 | `0xebf5a` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -249.25ms |  13.2% → 0.0% | 249.2ms → 0ms |       249 → 0 | `0x5fadc` | `zstd`                                 |
| removed |  -99.10ms |   5.2% → 0.0% |  99.1ms → 0ms |        99 → 0 | `0x5f838` | `zstd`                                 |
| removed |  -52.05ms |   2.8% → 0.0% |  52.1ms → 0ms |        52 → 0 | `0x5fb10` | `zstd`                                 |
| removed |  -43.04ms |   2.3% → 0.0% |  43.0ms → 0ms |        43 → 0 | `0x594d8` | `zstd`                                 |
| removed |  -42.04ms |   2.2% → 0.0% |  42.0ms → 0ms |        42 → 0 | `0x59640` | `zstd`                                 |
| removed |  -33.03ms |   1.7% → 0.0% |  33.0ms → 0ms |        33 → 0 | `0x596dc` | `zstd`                                 |
| removed |  -32.03ms |   1.7% → 0.0% |  32.0ms → 0ms |        32 → 0 | `0x5f86c` | `zstd`                                 |
| removed |  -25.03ms |   1.3% → 0.0% |  25.0ms → 0ms |        25 → 0 | `0x5960c` | `zstd`                                 |

##### Ours

|  Change |     Delta |            % |          Time |   Samples | Function  | Location |
| ------: | --------: | -----------: | ------------: | --------: | --------- | -------- |
| removed |   -1.885s | 99.8% → 0.0% |   1.88s → 0ms | 1,884 → 0 | `0x9cee`  | `zstd`   |
| removed |   -1.867s | 98.9% → 0.0% |   1.86s → 0ms | 1,866 → 0 | `0x1601e` | `zstd`   |
| removed |   -1.866s | 98.8% → 0.0% |   1.86s → 0ms | 1,865 → 0 | `0x1108e` | `zstd`   |
| removed |   -1.577s | 83.5% → 0.0% |   1.57s → 0ms | 1,576 → 0 | `0x61402` | `zstd`   |
| removed |   -1.492s | 79.0% → 0.0% |   1.49s → 0ms | 1,491 → 0 | `0x59272` | `zstd`   |
| removed | -306.31ms | 16.2% → 0.0% | 306.3ms → 0ms |   306 → 0 | `0x17766` | `zstd`   |
| removed | -306.31ms | 16.2% → 0.0% | 306.3ms → 0ms |   306 → 0 | `0x616b6` | `zstd`   |
| removed | -296.30ms | 15.7% → 0.0% | 296.3ms → 0ms |   296 → 0 | `0x5f800` | `zstd`   |
| removed | -296.30ms | 15.7% → 0.0% | 296.3ms → 0ms |   296 → 0 | `0x5f848` | `zstd`   |
| removed | -292.29ms | 15.5% → 0.0% | 292.3ms → 0ms |   292 → 0 | `0x5fab8` | `zstd`   |
| removed | -249.25ms | 13.2% → 0.0% | 249.2ms → 0ms |   249 → 0 | `0x5fadc` | `zstd`   |
| removed |  -99.10ms |  5.2% → 0.0% |  99.1ms → 0ms |    99 → 0 | `0x5f838` | `zstd`   |
| removed |  -52.05ms |  2.8% → 0.0% |  52.1ms → 0ms |    52 → 0 | `0x5fb10` | `zstd`   |
| removed |  -43.04ms |  2.3% → 0.0% |  43.0ms → 0ms |    43 → 0 | `0x594d8` | `zstd`   |
| removed |  -42.04ms |  2.2% → 0.0% |  42.0ms → 0ms |    42 → 0 | `0x59640` | `zstd`   |
| removed |  -33.03ms |  1.7% → 0.0% |  33.0ms → 0ms |    33 → 0 | `0x596dc` | `zstd`   |
| removed |  -32.03ms |  1.7% → 0.0% |  32.0ms → 0ms |    32 → 0 | `0x5f86c` | `zstd`   |
| removed |  -25.03ms |  1.3% → 0.0% |  25.0ms → 0ms |    25 → 0 | `0x5960c` | `zstd`   |
| removed |  -20.02ms |  1.1% → 0.0% |  20.0ms → 0ms |    20 → 0 | `0x596b8` | `zstd`   |
| removed |  -19.02ms |  1.0% → 0.0% |  19.0ms → 0ms |    19 → 0 | `0x609be` | `zstd`   |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x9f1e` (`zstd`)

| Change |     Delta |            % |          Time |   Samples | Callee    | Location |
| -----: | --------: | -----------: | ------------: | --------: | --------- | -------- |
|    new |   +1.332s | 0.0% → 82.9% |   0ms → 1.33s | 0 → 1,331 | `0x62a5e` | `zstd`   |
|    new | +274.27ms | 0.0% → 17.1% | 0ms → 274.3ms |   0 → 274 | `0x62d32` | `zstd`   |
|    new |   +1.00ms |  0.0% → 0.1% |   0ms → 1.0ms |     0 → 1 | `0x62afa` | `zstd`   |

##### `0x1162e` (`zstd`)

| Change |    Delta |            % |         Time |   Samples | Callee    | Location |
| -----: | -------: | -----------: | -----------: | --------: | --------- | -------- |
|    new |  +1.269s | 0.0% → 79.5% |  0ms → 1.26s | 0 → 1,268 | `0x5a3f2` | `zstd`   |
|    new | +46.05ms |  0.0% → 2.9% | 0ms → 46.0ms |    0 → 46 | `0x5a65c` | `zstd`   |
|    new | +28.03ms |  0.0% → 1.8% | 0ms → 28.0ms |    0 → 28 | `0x5a85c` | `zstd`   |
|    new | +27.03ms |  0.0% → 1.7% | 0ms → 27.0ms |    0 → 27 | `0x5a7c0` | `zstd`   |
|    new | +22.02ms |  0.0% → 1.4% | 0ms → 22.0ms |    0 → 22 | `0x5a78c` | `zstd`   |

##### `0x1671e` (`zstd`)

| Change |   Delta |             % |        Time |   Samples | Callee    | Location |
| -----: | ------: | ------------: | ----------: | --------: | --------- | -------- |
|    new | +1.596s | 0.0% → 100.0% | 0ms → 1.59s | 0 → 1,595 | `0x1162e` | `zstd`   |

##### `0x62a5e` (`zstd`)

| Change |   Delta |            % |        Time |   Samples | Callee    | Location |
| -----: | ------: | -----------: | ----------: | --------: | --------- | -------- |
|    new | +1.324s | 0.0% → 99.4% | 0ms → 1.32s | 0 → 1,323 | `0x1671e` | `zstd`   |
|    new | +5.01ms |  0.0% → 0.4% | 0ms → 5.0ms |     0 → 5 | `0x168b6` | `zstd`   |
|    new | +2.00ms |  0.0% → 0.2% | 0ms → 2.0ms |     0 → 2 | `0x16896` | `zstd`   |
|    new | +1.00ms |  0.0% → 0.1% | 0ms → 1.0ms |     0 → 1 | `0x163ae` | `zstd`   |

##### `0x5a3f2` (`zstd`)

| Change |     Delta |            % |          Time | Samples | Callee    | Location |
| -----: | --------: | -----------: | ------------: | ------: | --------- | -------- |
|    new | +278.28ms | 0.0% → 21.8% | 0ms → 278.3ms | 0 → 278 | `0x60980` | `zstd`   |
|    new | +277.28ms | 0.0% → 21.7% | 0ms → 277.3ms | 0 → 277 | `0x609c8` | `zstd`   |
|    new | +225.23ms | 0.0% → 17.6% | 0ms → 225.2ms | 0 → 225 | `0x60c38` | `zstd`   |
|    new | +218.22ms | 0.0% → 17.1% | 0ms → 218.2ms | 0 → 218 | `0x60c5c` | `zstd`   |
|    new |  +57.06ms |  0.0% → 4.5% |  0ms → 57.1ms |  0 → 57 | `0x609b8` | `zstd`   |

##### `0x17e36` (`zstd`)

| Change |     Delta |            % |          Time | Samples | Callee    | Location |
| -----: | --------: | -----------: | ------------: | ------: | --------- | -------- |
|    new | +272.27ms | 0.0% → 99.3% | 0ms → 272.3ms | 0 → 272 | `0x1671e` | `zstd`   |
|    new |   +2.00ms |  0.0% → 0.7% |   0ms → 2.0ms |   0 → 2 | `0x168b6` | `zstd`   |

##### `0x62d32` (`zstd`)

| Change |     Delta |             % |          Time | Samples | Callee    | Location |
| -----: | --------: | ------------: | ------------: | ------: | --------- | -------- |
|    new | +274.27ms | 0.0% → 100.0% | 0ms → 274.3ms | 0 → 274 | `0x17e36` | `zstd`   |

##### `0x61b3e` (`zstd`)

| Change |    Delta |            % |         Time | Samples | Callee    | Location |
| -----: | -------: | -----------: | -----------: | ------: | --------- | -------- |
|    new | +10.01ms | 0.0% → 50.0% | 0ms → 10.0ms |  0 → 10 | `0x5a3f2` | `zstd`   |
|    new |  +3.00ms | 0.0% → 15.0% |  0ms → 3.0ms |   0 → 3 | `0x5a7c0` | `zstd`   |
|    new |  +2.00ms | 0.0% → 10.0% |  0ms → 2.0ms |   0 → 2 | `0x5a65c` | `zstd`   |
|    new |  +1.00ms |  0.0% → 5.0% |  0ms → 1.0ms |   0 → 1 | `0x59d4a` | `zstd`   |
|    new |  +1.00ms |  0.0% → 5.0% |  0ms → 1.0ms |   0 → 1 | `0x58680` | `zstd`   |

##### `0x9cee` (`zstd`)

|  Change |     Delta |            % |          Time |   Samples | Callee    | Location |
| ------: | --------: | -----------: | ------------: | --------: | --------- | -------- |
| removed |   -1.577s | 83.7% → 0.0% |   1.57s → 0ms | 1,576 → 0 | `0x61402` | `zstd`   |
| removed | -306.31ms | 16.2% → 0.0% | 306.3ms → 0ms |   306 → 0 | `0x616b6` | `zstd`   |
| removed |   -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |     1 → 0 | `0x6149e` | `zstd`   |
| removed |   -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |     1 → 0 | `0x6185e` | `zstd`   |

##### `0x1601e` (`zstd`)

|  Change |   Delta |            % |        Time |   Samples | Callee    | Location |
| ------: | ------: | -----------: | ----------: | --------: | --------- | -------- |
| removed | -1.866s | 99.9% → 0.0% | 1.86s → 0ms | 1,865 → 0 | `0x1108e` | `zstd`   |
| removed | -1.00ms |  0.1% → 0.0% | 1.0ms → 0ms |     1 → 0 | `0x60920` | `zstd`   |

##### `0x1108e` (`zstd`)

|  Change |    Delta |            % |         Time |   Samples | Callee    | Location |
| ------: | -------: | -----------: | -----------: | --------: | --------- | -------- |
| removed |  -1.481s | 79.4% → 0.0% |  1.48s → 0ms | 1,480 → 0 | `0x59272` | `zstd`   |
| removed | -43.04ms |  2.3% → 0.0% | 43.0ms → 0ms |    43 → 0 | `0x594d8` | `zstd`   |
| removed | -42.04ms |  2.3% → 0.0% | 42.0ms → 0ms |    42 → 0 | `0x59640` | `zstd`   |
| removed | -33.03ms |  1.8% → 0.0% | 33.0ms → 0ms |    33 → 0 | `0x596dc` | `zstd`   |
| removed | -25.03ms |  1.3% → 0.0% | 25.0ms → 0ms |    25 → 0 | `0x5960c` | `zstd`   |

##### `0x61402` (`zstd`)

|  Change |   Delta |            % |        Time |   Samples | Callee    | Location |
| ------: | ------: | -----------: | ----------: | --------: | --------- | -------- |
| removed | -1.562s | 99.0% → 0.0% | 1.56s → 0ms | 1,561 → 0 | `0x1601e` | `zstd`   |
| removed | -7.01ms |  0.4% → 0.0% | 7.0ms → 0ms |     7 → 0 | `0x1617e` | `zstd`   |
| removed | -6.01ms |  0.4% → 0.0% | 6.0ms → 0ms |     6 → 0 | `0x161a2` | `zstd`   |
| removed | -1.00ms |  0.1% → 0.0% | 1.0ms → 0ms |     1 → 0 | `0x16362` | `zstd`   |
| removed | -1.00ms |  0.1% → 0.0% | 1.0ms → 0ms |     1 → 0 | `0x15c8a` | `zstd`   |

##### `0x59272` (`zstd`)

|  Change |     Delta |            % |          Time | Samples | Callee    | Location |
| ------: | --------: | -----------: | ------------: | ------: | --------- | -------- |
| removed | -295.30ms | 19.8% → 0.0% | 295.3ms → 0ms | 295 → 0 | `0x5f800` | `zstd`   |
| removed | -295.30ms | 19.8% → 0.0% | 295.3ms → 0ms | 295 → 0 | `0x5f848` | `zstd`   |
| removed | -292.29ms | 19.6% → 0.0% | 292.3ms → 0ms | 292 → 0 | `0x5fab8` | `zstd`   |
| removed | -249.25ms | 16.7% → 0.0% | 249.2ms → 0ms | 249 → 0 | `0x5fadc` | `zstd`   |
| removed |  -99.10ms |  6.6% → 0.0% |  99.1ms → 0ms |  99 → 0 | `0x5f838` | `zstd`   |

##### `0x17766` (`zstd`)

|  Change |     Delta |            % |          Time | Samples | Callee    | Location |
| ------: | --------: | -----------: | ------------: | ------: | --------- | -------- |
| removed | -305.31ms | 99.7% → 0.0% | 305.3ms → 0ms | 305 → 0 | `0x1601e` | `zstd`   |
| removed |   -1.00ms |  0.3% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x161a2` | `zstd`   |

##### `0x616b6` (`zstd`)

|  Change |     Delta |             % |          Time | Samples | Callee    | Location |
| ------: | --------: | ------------: | ------------: | ------: | --------- | -------- |
| removed | -306.31ms | 100.0% → 0.0% | 306.3ms → 0ms | 306 → 0 | `0x17766` | `zstd`   |

##### `0x8202e` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time |   Samples | Callee   | Location |
| ------: | ------: | ------------: | ----------: | --------: | -------- | -------- |
| removed | -1.885s | 100.0% → 0.0% | 1.88s → 0ms | 1,884 → 0 | `0x9cee` | `zstd`   |
|     new | +1.607s | 0.0% → 100.0% | 0ms → 1.60s | 0 → 1,606 | `0x9f1e` | `zstd`   |

##### `0xebf5a` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |     Delta |      % |          Time |       Samples | Callee    | Location                               |
| -----: | --------: | -----: | ------------: | ------------: | --------- | -------------------------------------- |
| -14.8% | -278.28ms | 100.0% | 1.88s → 1.60s | 1,884 → 1,606 | `0x8202e` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x609be` (`zstd`)

|  Change |    Delta |            % |         Time | Samples | Callee    | Location |
| ------: | -------: | -----------: | -----------: | ------: | --------- | -------- |
| removed | -11.01ms | 57.9% → 0.0% | 11.0ms → 0ms |  11 → 0 | `0x59272` | `zstd`   |
| removed |  -2.00ms | 10.5% → 0.0% |  2.0ms → 0ms |   2 → 0 | `0x57758` | `zstd`   |
| removed |  -1.00ms |  5.3% → 0.0% |  1.0ms → 0ms |   1 → 0 | `0x577cc` | `zstd`   |
| removed |  -1.00ms |  5.3% → 0.0% |  1.0ms → 0ms |   1 → 0 | `0x594b8` | `zstd`   |
| removed |  -1.00ms |  5.3% → 0.0% |  1.0ms → 0ms |   1 → 0 | `0x58c76` | `zstd`   |

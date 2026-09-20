# Heap profile diff

Allocated 5.15 MiB → 5.2 MiB (+50.21 KiB, +1.0%) over 219 samples → 222 samples (24.1 KiB → 24 KiB per sample).

| Category         |  Change |       Delta |             % |               Size |   Samples |
| ---------------- | ------: | ----------: | ------------: | -----------------: | --------: |
| Ours             |   +1.0% |  +33.75 KiB |         62.3% | 3.2 MiB → 3.24 MiB | 198 → 200 |
| Standard library |   +0.1% |      +872 B | 17.3% → 17.2% |  912 KiB → 913 KiB |         2 |
| Native           |    0.0% |         0 B | 15.0% → 14.8% |            788 KiB |         1 |
| Compiler         |  -26.8% | -64.484 KiB |   4.6% → 3.3% |  241 KiB → 176 KiB |   15 → 11 |
| Unknown          | +165.9% | +80.093 KiB |   0.9% → 2.4% | 48.3 KiB → 128 KiB |     3 → 8 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |       Delta |           % |               Size |   Samples | Function                       | Location            |
| ------: | ----------: | ----------: | -----------------: | --------: | ------------------------------ | ------------------- |
| +165.9% | +80.093 KiB | 0.9% → 2.4% | 48.3 KiB → 128 KiB |     3 → 8 | `(anonymous)`                  | `<unknown>`         |
|   +1.0% |  +33.75 KiB |       62.3% | 3.2 MiB → 3.24 MiB | 198 → 200 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |
|     new | +16.875 KiB | 0.0% → 0.3% |     0 B → 16.9 KiB |     0 → 1 | `split`                        | `<unknown>`         |

##### Ours

| Change |      Delta |     % |               Size |   Samples | Function                       | Location            |
| -----: | ---------: | ----: | -----------------: | --------: | ------------------------------ | ------------------- |
|  +1.0% | +33.75 KiB | 62.3% | 3.2 MiB → 3.24 MiB | 198 → 200 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

##### Standard library

| Change |       Delta |           % |           Size | Samples | Function | Location    |
| -----: | ----------: | ----------: | -------------: | ------: | -------- | ----------- |
|    new | +16.875 KiB | 0.0% → 0.3% | 0 B → 16.9 KiB |   0 → 1 | `split`  | `<unknown>` |

##### Unknown

|  Change |       Delta |           % |               Size | Samples | Function      | Location    |
| ------: | ----------: | ----------: | -----------------: | ------: | ------------- | ----------- |
| +165.9% | +80.093 KiB | 0.9% → 2.4% | 48.3 KiB → 128 KiB |   3 → 8 | `(anonymous)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |       Delta |           % |              Size | Samples | Function     | Location    |
| ------: | ----------: | ----------: | ----------------: | ------: | ------------ | ----------- |
|  -26.8% | -64.484 KiB | 4.6% → 3.3% | 241 KiB → 176 KiB | 15 → 11 | `(compiler)` | `<unknown>` |
| removed | -16.023 KiB | 0.3% → 0.0% |      16 KiB → 0 B |   1 → 0 | `values`     | `<unknown>` |

##### Standard library

|  Change |       Delta |           % |         Size | Samples | Function | Location    |
| ------: | ----------: | ----------: | -----------: | ------: | -------- | ----------- |
| removed | -16.023 KiB | 0.3% → 0.0% | 16 KiB → 0 B |   1 → 0 | `values` | `<unknown>` |

##### Compiler

| Change |       Delta |           % |              Size | Samples | Function     | Location    |
| -----: | ----------: | ----------: | ----------------: | ------: | ------------ | ----------- |
| -26.8% | -64.484 KiB | 4.6% → 3.3% | 241 KiB → 176 KiB | 15 → 11 | `(compiler)` | `<unknown>` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |                Size |   Samples | Function                       | Location             |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------------ | -------------------- |
|  +2.7% | +114.695 KiB | 80.5% → 81.9% | 4.14 MiB → 4.25 MiB | 203 → 210 | `(anonymous)`                  | `<unknown>`          |
|  +0.8% |  +34.601 KiB | 79.6% → 79.5% | 4.09 MiB → 4.13 MiB | 200 → 202 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`  |
|    new |  +16.875 KiB |   0.0% → 0.3% |      0 B → 16.9 KiB |     0 → 1 | `split`                        | `<unknown>`          |
|    new |  +16.875 KiB |   0.0% → 0.3% |      0 B → 16.9 KiB |     0 → 1 | `tokenize`                     | `workload.mjs:10:20` |
|    new |  +16.875 KiB |   0.0% → 0.3% |      0 B → 16.9 KiB |     0 → 1 | `scoreStatus`                  | `workload.mjs:11:23` |

##### Ours

| Change |       Delta |             % |                Size |   Samples | Function                       | Location             |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------------------ | -------------------- |
|  +0.8% | +34.601 KiB | 79.6% → 79.5% | 4.09 MiB → 4.13 MiB | 200 → 202 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32`  |
|    new | +16.875 KiB |   0.0% → 0.3% |      0 B → 16.9 KiB |     0 → 1 | `tokenize`                     | `workload.mjs:10:20` |
|    new | +16.875 KiB |   0.0% → 0.3% |      0 B → 16.9 KiB |     0 → 1 | `scoreStatus`                  | `workload.mjs:11:23` |

##### Standard library

| Change |       Delta |           % |           Size | Samples | Function | Location    |
| -----: | ----------: | ----------: | -------------: | ------: | -------- | ----------- |
|    new | +16.875 KiB | 0.0% → 0.3% | 0 B → 16.9 KiB |   0 → 1 | `split`  | `<unknown>` |

##### Unknown

| Change |        Delta |             % |                Size |   Samples | Function      | Location    |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------- | ----------- |
|  +2.7% | +114.695 KiB | 80.5% → 81.9% | 4.14 MiB → 4.25 MiB | 203 → 210 | `(anonymous)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |       Delta |           % |              Size | Samples | Function     | Location    |
| ------: | ----------: | ----------: | ----------------: | ------: | ------------ | ----------- |
|  -26.8% | -64.484 KiB | 4.6% → 3.3% | 241 KiB → 176 KiB | 15 → 11 | `(compiler)` | `<unknown>` |
| removed | -16.023 KiB | 0.3% → 0.0% |      16 KiB → 0 B |   1 → 0 | `values`     | `<unknown>` |

##### Standard library

|  Change |       Delta |           % |         Size | Samples | Function | Location    |
| ------: | ----------: | ----------: | -----------: | ------: | -------- | ----------- |
| removed | -16.023 KiB | 0.3% → 0.0% | 16 KiB → 0 B |   1 → 0 | `values` | `<unknown>` |

##### Compiler

| Change |       Delta |           % |              Size | Samples | Function     | Location    |
| -----: | ----------: | ----------: | ----------------: | ------: | ------------ | ----------- |
| -26.8% | -64.484 KiB | 4.6% → 3.3% | 241 KiB → 176 KiB | 15 → 11 | `(compiler)` | `<unknown>` |

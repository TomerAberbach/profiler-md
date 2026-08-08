# Heap profile diff

Allocated 5.18 MiB → 5.21 MiB (+32.042 KiB, +0.6%) over 221 samples → 223 samples (24 KiB → 23.9 KiB per sample).

| Category         | Change |       Delta |             % |                Size |   Samples |
| ---------------- | -----: | ----------: | ------------: | ------------------: | --------: |
| Ours             |  +1.0% | +32.632 KiB | 61.6% → 61.8% | 3.19 MiB → 3.22 MiB | 197 → 199 |
| Standard library |  -0.1% |      -872 B | 17.2% → 17.1% |   913 KiB → 912 KiB |         2 |
| Native           |   0.0% |         0 B | 14.9% → 14.8% |             788 KiB |         1 |
| Compiler         | -19.9% | -47.996 KiB |   4.5% → 3.6% |   241 KiB → 193 KiB |   15 → 12 |
| Unknown          | +50.2% | +48.257 KiB |   1.8% → 2.7% |  96.2 KiB → 144 KiB |     6 → 9 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

##### Ours

| Change |       Delta |             % |                Size |   Samples | Function                       | Location            |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------------------ | ------------------- |
|  +1.0% | +32.632 KiB | 61.6% → 61.8% | 3.19 MiB → 3.22 MiB | 197 → 199 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

| Change |       Delta |           % |              Size | Samples | Function     | Location    |
| -----: | ----------: | ----------: | ----------------: | ------: | ------------ | ----------- |
| -19.9% | -47.996 KiB | 4.5% → 3.6% | 241 KiB → 193 KiB | 15 → 12 | `(compiler)` | `<unknown>` |
|  -5.0% |      -872 B |        0.3% | 16.9 KiB → 16 KiB |       1 | `split`      | `<unknown>` |

##### Standard library

| Change |  Delta |    % |              Size | Samples | Function | Location    |
| -----: | -----: | ---: | ----------------: | ------: | -------- | ----------- |
|  -5.0% | -872 B | 0.3% | 16.9 KiB → 16 KiB |       1 | `split`  | `<unknown>` |

##### Compiler

| Change |       Delta |           % |              Size | Samples | Function     | Location    |
| -----: | ----------: | ----------: | ----------------: | ------: | ------------ | ----------- |
| -19.9% | -47.996 KiB | 4.5% → 3.6% | 241 KiB → 193 KiB | 15 → 12 | `(compiler)` | `<unknown>` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Ours

| Change |       Delta |             % |                Size |   Samples | Function                       | Location            |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------------------ | ------------------- |
|  +0.8% | +31.781 KiB | 78.8% → 78.9% | 4.08 MiB → 4.11 MiB | 199 → 201 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |       Delta |           % |              Size | Samples | Function      | Location             |
| -----: | ----------: | ----------: | ----------------: | ------: | ------------- | -------------------- |
| -19.9% | -47.996 KiB | 4.5% → 3.6% | 241 KiB → 193 KiB | 15 → 12 | `(compiler)`  | `<unknown>`          |
|  -5.0% |      -872 B |        0.3% | 16.9 KiB → 16 KiB |       1 | `split`       | `<unknown>`          |
|  -5.0% |      -872 B |        0.3% | 16.9 KiB → 16 KiB |       1 | `tokenize`    | `workload.mjs:10:20` |
|  -5.0% |      -872 B |        0.3% | 16.9 KiB → 16 KiB |       1 | `scoreStatus` | `workload.mjs:11:23` |

##### Ours

| Change |  Delta |    % |              Size | Samples | Function      | Location             |
| -----: | -----: | ---: | ----------------: | ------: | ------------- | -------------------- |
|  -5.0% | -872 B | 0.3% | 16.9 KiB → 16 KiB |       1 | `tokenize`    | `workload.mjs:10:20` |
|  -5.0% | -872 B | 0.3% | 16.9 KiB → 16 KiB |       1 | `scoreStatus` | `workload.mjs:11:23` |

##### Standard library

| Change |  Delta |    % |              Size | Samples | Function | Location    |
| -----: | -----: | ---: | ----------------: | ------: | -------- | ----------- |
|  -5.0% | -872 B | 0.3% | 16.9 KiB → 16 KiB |       1 | `split`  | `<unknown>` |

##### Compiler

| Change |       Delta |           % |              Size | Samples | Function     | Location    |
| -----: | ----------: | ----------: | ----------------: | ------: | ------------ | ----------- |
| -19.9% | -47.996 KiB | 4.5% → 3.6% | 241 KiB → 193 KiB | 15 → 12 | `(compiler)` | `<unknown>` |

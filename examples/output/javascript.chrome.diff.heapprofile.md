# Heap profile diff

Allocated 5.18 MiB → 5.21 MiB (+32.042 KiB, +0.6%) over 221 samples → 223 samples (24 KiB → 23.9 KiB per sample).

| Category          | Change |       Delta |             % |                Size |   Samples |
| ----------------- | -----: | ----------: | ------------: | ------------------: | --------: |
| ours              |  +1.0% | +32.632 KiB | 61.6% → 61.8% | 3.19 MiB → 3.22 MiB | 197 → 199 |
| stdlib            |  +4.7% | +47.406 KiB | 19.0% → 19.8% | 1009 KiB → 1.03 MiB |    8 → 11 |
| v8 api            |   0.0% |         0 B | 14.9% → 14.8% |             788 KiB |         1 |
| bytecode compiler | -20.0% | -31.992 KiB |   3.0% → 2.4% |   160 KiB → 128 KiB |    10 → 8 |
| parser            | -19.9% | -16.003 KiB |   1.5% → 1.2% | 80.3 KiB → 64.3 KiB |     5 → 4 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

| Change |       Delta |             % |                Size |   Samples | Function                       | Location            |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------------------ | ------------------- |
|  +1.0% | +32.632 KiB | 61.6% → 61.8% | 3.19 MiB → 3.22 MiB | 197 → 199 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

| Change |       Delta |           % |                Size | Samples | Function              | Location    |
| -----: | ----------: | ----------: | ------------------: | ------: | --------------------- | ----------- |
| -20.0% | -31.992 KiB | 3.0% → 2.4% |   160 KiB → 128 KiB |  10 → 8 | `(bytecode compiler)` | `<unknown>` |
| -19.9% | -16.003 KiB | 1.5% → 1.2% | 80.3 KiB → 64.3 KiB |   5 → 4 | `(parser)`            | `<unknown>` |
|  -5.0% |      -872 B |        0.3% |   16.9 KiB → 16 KiB |       1 | `split`               | `<unknown>` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |       Delta |             % |                Size |   Samples | Function                       | Location            |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------------------ | ------------------- |
|  +0.8% | +31.781 KiB | 78.8% → 78.9% | 4.08 MiB → 4.11 MiB | 199 → 201 | `globalThis.buildAndRetainDom` | `workload.mjs:1:32` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |       Delta |           % |                Size | Samples | Function              | Location             |
| -----: | ----------: | ----------: | ------------------: | ------: | --------------------- | -------------------- |
| -20.0% | -31.992 KiB | 3.0% → 2.4% |   160 KiB → 128 KiB |  10 → 8 | `(bytecode compiler)` | `<unknown>`          |
| -19.9% | -16.003 KiB | 1.5% → 1.2% | 80.3 KiB → 64.3 KiB |   5 → 4 | `(parser)`            | `<unknown>`          |
|  -5.0% |      -872 B |        0.3% |   16.9 KiB → 16 KiB |       1 | `split`               | `<unknown>`          |
|  -5.0% |      -872 B |        0.3% |   16.9 KiB → 16 KiB |       1 | `tokenize`            | `workload.mjs:10:20` |
|  -5.0% |      -872 B |        0.3% |   16.9 KiB → 16 KiB |       1 | `scoreStatus`         | `workload.mjs:11:23` |

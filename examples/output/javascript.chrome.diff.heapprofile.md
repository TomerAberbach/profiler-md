# Heap profile diff

Allocated 5.4 MiB → 5.16 MiB (-240.085 KiB, -4.3%) over 232 samples → 217 samples (23.8 KiB → 24.4 KiB per sample).

| Category          | Change |        Delta |             % |                Size |   Samples |
| ----------------- | -----: | -----------: | ------------: | ------------------: | --------: |
| stdlib            |  -2.6% |  -111.96 KiB | 79.3% → 80.8% | 4.28 MiB → 4.17 MiB | 209 → 202 |
| v8 api            |  +2.1% |  +16.714 KiB | 14.3% → 15.3% |   792 KiB → 809 KiB |     1 → 2 |
| parser            | -18.3% |  -32.375 KiB |   3.2% → 2.7% |   177 KiB → 145 KiB |    11 → 9 |
| bytecode compiler | -63.7% | -112.464 KiB |   3.2% → 1.2% |  177 KiB → 64.1 KiB |    11 → 4 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

| Change |       Delta |             % |              Size | Samples | Function   | Location    |
| -----: | ----------: | ------------: | ----------------: | ------: | ---------- | ----------- |
|  +2.1% | +16.714 KiB | 14.3% → 15.3% | 792 KiB → 809 KiB |   1 → 2 | `(v8 api)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

| Change |        Delta |           % |               Size | Samples | Function              | Location    |
| -----: | -----------: | ----------: | -----------------: | ------: | --------------------- | ----------- |
| -63.7% | -112.464 KiB | 3.2% → 1.2% | 177 KiB → 64.1 KiB |  11 → 4 | `(bytecode compiler)` | `<unknown>` |
| -18.3% |  -32.375 KiB | 3.2% → 2.7% |  177 KiB → 145 KiB |  11 → 9 | `(parser)`            | `<unknown>` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |       Delta |             % |              Size | Samples | Function   | Location    |
| -----: | ----------: | ------------: | ----------------: | ------: | ---------- | ----------- |
|  +2.1% | +16.714 KiB | 14.3% → 15.3% | 792 KiB → 809 KiB |   1 → 2 | `(v8 api)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |        Delta |           % |               Size | Samples | Function              | Location    |
| -----: | -----------: | ----------: | -----------------: | ------: | --------------------- | ----------- |
| -63.7% | -112.464 KiB | 3.2% → 1.2% | 177 KiB → 64.1 KiB |  11 → 4 | `(bytecode compiler)` | `<unknown>` |
| -18.3% |  -32.375 KiB | 3.2% → 2.7% |  177 KiB → 145 KiB |  11 → 9 | `(parser)`            | `<unknown>` |

# Heap profile diff

Allocated 5.66 MB → 5.41 MB (-246 kB, -4.3%) over 232 samples → 217 samples (24.4 kB → 25 kB per sample).

| Category          | Change |    Delta |             % |              Size |   Samples |
| ----------------- | -----: | -------: | ------------: | ----------------: | --------: |
| stdlib            |  -2.6% |  -115 kB | 79.3% → 80.8% | 4.49 MB → 4.37 MB | 209 → 202 |
| V8 API            |  +2.1% | +17.1 kB | 14.3% → 15.3% |   811 kB → 828 kB |     1 → 2 |
| PARSER            | -18.3% | -33.2 kB |   3.2% → 2.7% |   181 kB → 148 kB |    11 → 9 |
| BYTECODE_COMPILER | -63.7% |  -115 kB |   3.2% → 1.2% |  181 kB → 65.7 kB |    11 → 4 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

| Change |    Delta |             % |            Size | Samples | Function   | Location    |
| -----: | -------: | ------------: | --------------: | ------: | ---------- | ----------- |
|  +2.1% | +17.1 kB | 14.3% → 15.3% | 811 kB → 828 kB |   1 → 2 | `(V8 API)` | `<unknown>` |

#### Progressions

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

| Change |    Delta |           % |             Size | Samples | Function              | Location    |
| -----: | -------: | ----------: | ---------------: | ------: | --------------------- | ----------- |
| -63.7% |  -115 kB | 3.2% → 1.2% | 181 kB → 65.7 kB |  11 → 4 | `(BYTECODE_COMPILER)` | `<unknown>` |
| -18.3% | -33.2 kB | 3.2% → 2.7% |  181 kB → 148 kB |  11 → 9 | `(PARSER)`            | `<unknown>` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |    Delta |             % |            Size | Samples | Function   | Location    |
| -----: | -------: | ------------: | --------------: | ------: | ---------- | ----------- |
|  +2.1% | +17.1 kB | 14.3% → 15.3% | 811 kB → 828 kB |   1 → 2 | `(V8 API)` | `<unknown>` |

#### Progressions

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |    Delta |           % |             Size | Samples | Function              | Location    |
| -----: | -------: | ----------: | ---------------: | ------: | --------------------- | ----------- |
| -63.7% |  -115 kB | 3.2% → 1.2% | 181 kB → 65.7 kB |  11 → 4 | `(BYTECODE_COMPILER)` | `<unknown>` |
| -18.3% | -33.2 kB | 3.2% → 2.7% |  181 kB → 148 kB |  11 → 9 | `(PARSER)`            | `<unknown>` |

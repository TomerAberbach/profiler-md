# Heap profile

Allocated 5.16 MiB over 217 samples (24.4 KiB per sample).

| Category          |     % |     Size | Samples |
| ----------------- | ----: | -------: | ------: |
| stdlib            | 80.8% | 4.17 MiB |     202 |
| v8 api            | 15.3% |  809 KiB |       2 |
| parser            |  2.7% |  145 KiB |       9 |
| bytecode compiler |  1.2% | 64.1 KiB |       4 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Samples | Function              | Location    |
| ----: | -------: | ------: | --------------------- | ----------- |
| 15.3% |  809 KiB |       2 | `(v8 api)`            | `<unknown>` |
|  2.7% |  145 KiB |       9 | `(parser)`            | `<unknown>` |
|  1.2% | 64.1 KiB |       4 | `(bytecode compiler)` | `<unknown>` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Samples | Function              | Location    |
| ----: | -------: | ------: | --------------------- | ----------- |
| 15.3% |  809 KiB |       2 | `(v8 api)`            | `<unknown>` |
|  2.7% |  145 KiB |       9 | `(parser)`            | `<unknown>` |
|  1.2% | 64.1 KiB |       4 | `(bytecode compiler)` | `<unknown>` |

# Heap profile

Allocated 5.4 MiB over 232 samples (23.8 KiB per sample).

| Category          |     % |     Size | Samples |
| ----------------- | ----: | -------: | ------: |
| stdlib            | 79.3% | 4.28 MiB |     209 |
| v8 api            | 14.3% |  792 KiB |       1 |
| parser            |  3.2% |  177 KiB |      11 |
| bytecode compiler |  3.2% |  177 KiB |      11 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function              | Location    |
| ----: | ------: | ------: | --------------------- | ----------- |
| 14.3% | 792 KiB |       1 | `(v8 api)`            | `<unknown>` |
|  3.2% | 177 KiB |      11 | `(parser)`            | `<unknown>` |
|  3.2% | 177 KiB |      11 | `(bytecode compiler)` | `<unknown>` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function              | Location    |
| ----: | ------: | ------: | --------------------- | ----------- |
| 14.3% | 792 KiB |       1 | `(v8 api)`            | `<unknown>` |
|  3.2% | 177 KiB |      11 | `(parser)`            | `<unknown>` |
|  3.2% | 177 KiB |      11 | `(bytecode compiler)` | `<unknown>` |

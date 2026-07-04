# Heap profile

Allocated 5.41 MB over 217 samples (25 kB per sample).

| Category          |     % |    Size | Samples |
| ----------------- | ----: | ------: | ------: |
| stdlib            | 80.8% | 4.37 MB |     202 |
| V8 API            | 15.3% |  828 kB |       2 |
| PARSER            |  2.7% |  148 kB |       9 |
| BYTECODE_COMPILER |  1.2% | 65.7 kB |       4 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function              | Location    |
| ----: | ------: | ------: | --------------------- | ----------- |
| 15.3% |  828 kB |       2 | `(V8 API)`            | `<unknown>` |
|  2.7% |  148 kB |       9 | `(PARSER)`            | `<unknown>` |
|  1.2% | 65.7 kB |       4 | `(BYTECODE_COMPILER)` | `<unknown>` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function              | Location    |
| ----: | ------: | ------: | --------------------- | ----------- |
| 15.3% |  828 kB |       2 | `(V8 API)`            | `<unknown>` |
|  2.7% |  148 kB |       9 | `(PARSER)`            | `<unknown>` |
|  1.2% | 65.7 kB |       4 | `(BYTECODE_COMPILER)` | `<unknown>` |

# Heap profile

Allocated 5.66 MB over 232 samples (24.4 kB per sample).

| Category          |     % |    Size | Samples |
| ----------------- | ----: | ------: | ------: |
| stdlib            | 79.3% | 4.49 MB |     209 |
| V8 API            | 14.3% |  811 kB |       1 |
| PARSER            |  3.2% |  181 kB |      11 |
| BYTECODE_COMPILER |  3.2% |  181 kB |      11 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |   Size | Samples | Function              | Location    |
| ----: | -----: | ------: | --------------------- | ----------- |
| 14.3% | 811 kB |       1 | `(V8 API)`            | `<unknown>` |
|  3.2% | 181 kB |      11 | `(PARSER)`            | `<unknown>` |
|  3.2% | 181 kB |      11 | `(BYTECODE_COMPILER)` | `<unknown>` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |   Size | Samples | Function              | Location    |
| ----: | -----: | ------: | --------------------- | ----------- |
| 14.3% | 811 kB |       1 | `(V8 API)`            | `<unknown>` |
|  3.2% | 181 kB |      11 | `(PARSER)`            | `<unknown>` |
|  3.2% | 181 kB |      11 | `(BYTECODE_COMPILER)` | `<unknown>` |

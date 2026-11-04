# Allocated heap profile diff

Allocated 132 MiB (+112 B, ~0%) over 78 objects (1.69 MiB per object).

| Category | Change | Delta |     % |     Size | Objects |
| -------- | -----: | ----: | ----: | -------: | ------: |
| Ours     |    ~0% | +32 B | 51.3% | 67.8 MiB |      49 |
| Native   |    ~0% | +80 B | 48.7% | 64.3 MiB |      25 |
| Unknown  |   0.0% |   0 B | <0.1% | 1.35 KiB |       4 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 66.8 MiB (50.6%) _start
│   └── 66.8 MiB (50.6%) __libc_start_main
│       └── 66.8 MiB (50.6%) (anonymous)
│           └── 66.8 MiB (50.6%) main
│               └── 66.8 MiB (50.6%) FIO_compressFilename
│                   ├── 64 MiB (48.5%) FIO_compressFilename_srcFile at fileio.c
│                   │   └── 64 MiB (48.5%) ZSTD_compressStream2
│                   │       └── 64 MiB (48.5%) ZSTD_CCtx_init_compressStream2 at zstd_compress.c
│                   │           └── 64 MiB (48.5%) ZSTDMT_initCStream_internal
│                   └── 2.76 MiB (2.1%) FIO_createCResources at fileio.c
│                       ├── 1.5 MiB (1.1%) AIO_ReadPool_create
│                       │   └── 1.25 MiB (0.9%, self 0.9%) AIO_IOPool_init at fileio_asyncio.c
│                       └── 1.26 MiB (1.0%) AIO_WritePool_create
│                           └── 1.26 MiB (1.0%, self 1.0%, self 1.9% globally) AIO_IOPool_init at fileio_asyncio.c
└── 65.3 MiB (49.4%) (anonymous)
    └── … 65.3 MiB (49.4%) POOL_thread at pool.c
        └── 65.3 MiB (49.4%) ZSTDMT_compressionJob at zstdmt_compress.c
            ├── 49.2 MiB (37.3%) ZSTD_compressBegin_advanced_internal
            │   └── 49.2 MiB (37.3%) ZSTD_compressBegin_internal at zstd_compress.c
            │       └── 49.2 MiB (37.3%) ZSTD_resetCCtx_internal
            └── 16.1 MiB (12.2%) ZSTDMT_getBuffer
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change | Delta |     % |                Size | Objects | Function                     | Location            |
| -----: | ----: | ----: | ------------------: | ------: | ---------------------------- | ------------------- |
|  +0.6% | +32 B | <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx`            | `<unknown>`         |
|  +0.6% | +32 B | <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx_advanced`   | `<unknown>`         |
|  +1.8% | +32 B | <0.1% | 1.78 KiB → 1.81 KiB |       1 | `ZSTDMT_createJobsTable`     | `zstdmt_compress.c` |
|  +0.5% | +16 B | <0.1% | 3.05 KiB → 3.06 KiB |       1 | `ZSTDMT_createCCtx_advanced` | `<unknown>`         |

##### Ours

| Change | Delta |     % |                Size | Objects | Function                 | Location            |
| -----: | ----: | ----: | ------------------: | ------: | ------------------------ | ------------------- |
|  +1.8% | +32 B | <0.1% | 1.78 KiB → 1.81 KiB |       1 | `ZSTDMT_createJobsTable` | `zstdmt_compress.c` |

##### Native

| Change | Delta |     % |                Size | Objects | Function                     | Location    |
| -----: | ----: | ----: | ------------------: | ------: | ---------------------------- | ----------- |
|  +0.6% | +32 B | <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx`            | `<unknown>` |
|  +0.6% | +32 B | <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx_advanced`   | `<unknown>` |
|  +0.5% | +16 B | <0.1% | 3.05 KiB → 3.06 KiB |       1 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `ZSTD_createCCtx` (`<unknown>`)

| Change | Delta |      % |                Size | Objects | Caller                 | Location   |
| -----: | ----: | -----: | ------------------: | ------: | ---------------------- | ---------- |
|  +0.6% | +32 B | 100.0% | 5.13 KiB → 5.16 KiB |       1 | `FIO_createCResources` | `fileio.c` |

##### `ZSTD_createCCtx_advanced` (`<unknown>`)

| Change | Delta |      % |                Size | Objects | Caller                  | Location            |
| -----: | ----: | -----: | ------------------: | ------: | ----------------------- | ------------------- |
|  +0.6% | +32 B | 100.0% | 5.13 KiB → 5.16 KiB |       1 | `ZSTDMT_createCCtxPool` | `zstdmt_compress.c` |

##### `ZSTDMT_createJobsTable` (`zstdmt_compress.c`)

| Change | Delta |      % |                Size | Objects | Caller                       | Location    |
| -----: | ----: | -----: | ------------------: | ------: | ---------------------------- | ----------- |
|  +1.8% | +32 B | 100.0% | 1.78 KiB → 1.81 KiB |       1 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `ZSTDMT_createCCtx_advanced` (`<unknown>`)

| Change | Delta |      % |                Size | Objects | Caller                           | Location          |
| -----: | ----: | -----: | ------------------: | ------: | -------------------------------- | ----------------- |
|  +0.5% | +16 B | 100.0% | 3.05 KiB → 3.06 KiB |       1 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |  Delta |      % |                Size | Objects | Function                         | Location            |
| -----: | -----: | -----: | ------------------: | ------: | -------------------------------- | ------------------- |
|    ~0% | +112 B | 100.0% |             132 MiB |      78 | `(anonymous)`                    | `<unknown>`         |
|    ~0% | +112 B |  50.6% |            66.8 MiB |      69 | `FIO_compressFilename`           | `<unknown>`         |
|    ~0% | +112 B |  50.6% |            66.8 MiB |      75 | `main`                           | `<unknown>`         |
|    ~0% | +112 B |  50.6% |            66.8 MiB |      75 | `__libc_start_main`              | `<unknown>`         |
|    ~0% | +112 B |  50.6% |            66.8 MiB |      75 | `_start`                         | `<unknown>`         |
|  +0.7% |  +80 B |  <0.1% |   10.9 KiB → 11 KiB |      13 | `ZSTDMT_createCCtx_advanced`     | `<unknown>`         |
|    ~0% |  +80 B |  48.5% |              64 MiB |      14 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c`   |
|    ~0% |  +80 B |  48.5% |              64 MiB |      14 | `ZSTD_compressStream2`           | `<unknown>`         |
|    ~0% |  +80 B |  48.5% |              64 MiB |      17 | `FIO_compressFilename_srcFile`   | `fileio.c`          |
|    ~0% |  +32 B |   2.1% |            2.76 MiB |      52 | `FIO_createCResources`           | `fileio.c`          |
|  +0.6% |  +32 B |  <0.1% | 5.23 KiB → 5.26 KiB |       3 | `ZSTDMT_createCCtxPool`          | `zstdmt_compress.c` |
|  +0.6% |  +32 B |  <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx`                | `<unknown>`         |
|  +0.6% |  +32 B |  <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx_advanced`       | `<unknown>`         |
|  +1.8% |  +32 B |  <0.1% | 1.78 KiB → 1.81 KiB |       1 | `ZSTDMT_createJobsTable`         | `zstdmt_compress.c` |

##### Ours

| Change | Delta |     % |                Size | Objects | Function                         | Location            |
| -----: | ----: | ----: | ------------------: | ------: | -------------------------------- | ------------------- |
|    ~0% | +80 B | 48.5% |              64 MiB |      14 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c`   |
|    ~0% | +80 B | 48.5% |              64 MiB |      17 | `FIO_compressFilename_srcFile`   | `fileio.c`          |
|    ~0% | +32 B |  2.1% |            2.76 MiB |      52 | `FIO_createCResources`           | `fileio.c`          |
|  +0.6% | +32 B | <0.1% | 5.23 KiB → 5.26 KiB |       3 | `ZSTDMT_createCCtxPool`          | `zstdmt_compress.c` |
|  +1.8% | +32 B | <0.1% | 1.78 KiB → 1.81 KiB |       1 | `ZSTDMT_createJobsTable`         | `zstdmt_compress.c` |

##### Native

| Change |  Delta |     % |                Size | Objects | Function                     | Location    |
| -----: | -----: | ----: | ------------------: | ------: | ---------------------------- | ----------- |
|    ~0% | +112 B | 50.6% |            66.8 MiB |      69 | `FIO_compressFilename`       | `<unknown>` |
|    ~0% | +112 B | 50.6% |            66.8 MiB |      75 | `main`                       | `<unknown>` |
|    ~0% | +112 B | 50.6% |            66.8 MiB |      75 | `__libc_start_main`          | `<unknown>` |
|    ~0% | +112 B | 50.6% |            66.8 MiB |      75 | `_start`                     | `<unknown>` |
|  +0.7% |  +80 B | <0.1% |   10.9 KiB → 11 KiB |      13 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |
|    ~0% |  +80 B | 48.5% |              64 MiB |      14 | `ZSTD_compressStream2`       | `<unknown>` |
|  +0.6% |  +32 B | <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx`            | `<unknown>` |
|  +0.6% |  +32 B | <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx_advanced`   | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

| Change |  Delta |     % |     Size | Objects | Caller              | Location    |
| -----: | -----: | ----: | -------: | ------: | ------------------- | ----------- |
|    ~0% | +112 B | 50.6% | 66.8 MiB |      75 | `__libc_start_main` | `<unknown>` |

##### `FIO_compressFilename` (`<unknown>`)

| Change |  Delta |      % |     Size | Objects | Caller | Location    |
| -----: | -----: | -----: | -------: | ------: | ------ | ----------- |
|    ~0% | +112 B | 100.0% | 66.8 MiB |      69 | `main` | `<unknown>` |

##### `main` (`<unknown>`)

| Change |  Delta |      % |     Size | Objects | Caller        | Location    |
| -----: | -----: | -----: | -------: | ------: | ------------- | ----------- |
|    ~0% | +112 B | 100.0% | 66.8 MiB |      75 | `(anonymous)` | `<unknown>` |

##### `__libc_start_main` (`<unknown>`)

| Change |  Delta |      % |     Size | Objects | Caller   | Location    |
| -----: | -----: | -----: | -------: | ------: | -------- | ----------- |
|    ~0% | +112 B | 100.0% | 66.8 MiB |      75 | `_start` | `<unknown>` |

##### `ZSTDMT_createCCtx_advanced` (`<unknown>`)

| Change | Delta |      % |              Size | Objects | Caller                           | Location          |
| -----: | ----: | -----: | ----------------: | ------: | -------------------------------- | ----------------- |
|  +0.7% | +80 B | 100.0% | 10.9 KiB → 11 KiB |      13 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

##### `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`)

| Change | Delta |      % |   Size | Objects | Caller                 | Location    |
| -----: | ----: | -----: | -----: | ------: | ---------------------- | ----------- |
|    ~0% | +80 B | 100.0% | 64 MiB |      14 | `ZSTD_compressStream2` | `<unknown>` |

##### `ZSTD_compressStream2` (`<unknown>`)

| Change | Delta |      % |   Size | Objects | Caller                         | Location   |
| -----: | ----: | -----: | -----: | ------: | ------------------------------ | ---------- |
|    ~0% | +80 B | 100.0% | 64 MiB |      14 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

| Change | Delta |      % |   Size | Objects | Caller                 | Location    |
| -----: | ----: | -----: | -----: | ------: | ---------------------- | ----------- |
|    ~0% | +80 B | 100.0% | 64 MiB |      17 | `FIO_compressFilename` | `<unknown>` |

##### `FIO_createCResources` (`fileio.c`)

| Change | Delta |      % |     Size | Objects | Caller                 | Location    |
| -----: | ----: | -----: | -------: | ------: | ---------------------- | ----------- |
|    ~0% | +32 B | 100.0% | 2.76 MiB |      52 | `FIO_compressFilename` | `<unknown>` |

##### `ZSTDMT_createCCtxPool` (`zstdmt_compress.c`)

| Change | Delta |      % |                Size | Objects | Caller                       | Location    |
| -----: | ----: | -----: | ------------------: | ------: | ---------------------------- | ----------- |
|  +0.6% | +32 B | 100.0% | 5.23 KiB → 5.26 KiB |       3 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `ZSTD_createCCtx` (`<unknown>`)

| Change | Delta |      % |                Size | Objects | Caller                 | Location   |
| -----: | ----: | -----: | ------------------: | ------: | ---------------------- | ---------- |
|  +0.6% | +32 B | 100.0% | 5.13 KiB → 5.16 KiB |       1 | `FIO_createCResources` | `fileio.c` |

##### `ZSTD_createCCtx_advanced` (`<unknown>`)

| Change | Delta |      % |                Size | Objects | Caller                  | Location            |
| -----: | ----: | -----: | ------------------: | ------: | ----------------------- | ------------------- |
|  +0.6% | +32 B | 100.0% | 5.13 KiB → 5.16 KiB |       1 | `ZSTDMT_createCCtxPool` | `zstdmt_compress.c` |

##### `ZSTDMT_createJobsTable` (`zstdmt_compress.c`)

| Change | Delta |      % |                Size | Objects | Caller                       | Location    |
| -----: | ----: | -----: | ------------------: | ------: | ---------------------------- | ----------- |
|  +1.8% | +32 B | 100.0% | 1.78 KiB → 1.81 KiB |       1 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

| Change |  Delta |     % |     Size | Objects | Callee | Location    |
| -----: | -----: | ----: | -------: | ------: | ------ | ----------- |
|    ~0% | +112 B | 50.6% | 66.8 MiB |      75 | `main` | `<unknown>` |

##### `FIO_compressFilename` (`<unknown>`)

| Change | Delta |     % |     Size | Objects | Callee                         | Location   |
| -----: | ----: | ----: | -------: | ------: | ------------------------------ | ---------- |
|    ~0% | +80 B | 95.9% |   64 MiB |      17 | `FIO_compressFilename_srcFile` | `fileio.c` |
|    ~0% | +32 B |  4.1% | 2.76 MiB |      52 | `FIO_createCResources`         | `fileio.c` |

##### `main` (`<unknown>`)

| Change |  Delta |      % |     Size | Objects | Callee                 | Location    |
| -----: | -----: | -----: | -------: | ------: | ---------------------- | ----------- |
|    ~0% | +112 B | 100.0% | 66.8 MiB |      69 | `FIO_compressFilename` | `<unknown>` |

##### `__libc_start_main` (`<unknown>`)

| Change |  Delta |      % |     Size | Objects | Callee        | Location    |
| -----: | -----: | -----: | -------: | ------: | ------------- | ----------- |
|    ~0% | +112 B | 100.0% | 66.8 MiB |      75 | `(anonymous)` | `<unknown>` |

##### `_start` (`<unknown>`)

| Change |  Delta |      % |     Size | Objects | Callee              | Location    |
| -----: | -----: | -----: | -------: | ------: | ------------------- | ----------- |
|    ~0% | +112 B | 100.0% | 66.8 MiB |      75 | `__libc_start_main` | `<unknown>` |

##### `ZSTDMT_createCCtx_advanced` (`<unknown>`)

| Change | Delta |             % |                Size | Objects | Callee                   | Location            |
| -----: | ----: | ------------: | ------------------: | ------: | ------------------------ | ------------------- |
|  +0.6% | +32 B | 48.0% → 47.9% | 5.23 KiB → 5.26 KiB |       3 | `ZSTDMT_createCCtxPool`  | `zstdmt_compress.c` |
|  +1.8% | +32 B | 16.3% → 16.5% | 1.78 KiB → 1.81 KiB |       1 | `ZSTDMT_createJobsTable` | `zstdmt_compress.c` |

##### `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`)

| Change | Delta |     % |              Size | Objects | Callee                       | Location    |
| -----: | ----: | ----: | ----------------: | ------: | ---------------------------- | ----------- |
|  +0.7% | +80 B | <0.1% | 10.9 KiB → 11 KiB |      13 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `ZSTD_compressStream2` (`<unknown>`)

| Change | Delta |      % |   Size | Objects | Callee                           | Location          |
| -----: | ----: | -----: | -----: | ------: | -------------------------------- | ----------------- |
|    ~0% | +80 B | 100.0% | 64 MiB |      14 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

| Change | Delta |      % |   Size | Objects | Callee                 | Location    |
| -----: | ----: | -----: | -----: | ------: | ---------------------- | ----------- |
|    ~0% | +80 B | 100.0% | 64 MiB |      14 | `ZSTD_compressStream2` | `<unknown>` |

##### `FIO_createCResources` (`fileio.c`)

| Change | Delta |    % |                Size | Objects | Callee            | Location    |
| -----: | ----: | ---: | ------------------: | ------: | ----------------- | ----------- |
|  +0.6% | +32 B | 0.2% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx` | `<unknown>` |

##### `ZSTDMT_createCCtxPool` (`zstdmt_compress.c`)

| Change | Delta |     % |                Size | Objects | Callee                     | Location    |
| -----: | ----: | ----: | ------------------: | ------: | -------------------------- | ----------- |
|  +0.6% | +32 B | 98.2% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx_advanced` | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes allocated in their leaf frame.

Common call stack: `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`

| Change | Delta |     % |                Size | Objects | Call stack                                                                                                                                                                                                                              |
| -----: | ----: | ----: | ------------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +0.6% | +32 B | <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx` ← `FIO_createCResources` (`fileio.c`)                                                                                                                                                                                 |
|  +0.6% | +32 B | <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx_advanced` ← `ZSTDMT_createCCtxPool` (`zstdmt_compress.c`) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) |
|  +1.8% | +32 B | <0.1% | 1.78 KiB → 1.81 KiB |       1 | `ZSTDMT_createJobsTable` (`zstdmt_compress.c`) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`)                             |
|  +0.5% | +16 B | <0.1% | 3.05 KiB → 3.06 KiB |       1 | `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`)                                                                              |

# Retained heap profile diff

Retained 912 B over 3 objects (304 B per object).

| Category | Change | Delta |      % |  Size | Objects |
| -------- | -----: | ----: | -----: | ----: | ------: |
| Unknown  |   0.0% |   0 B | 100.0% | 912 B |       3 |

## Call tree

No call path differed in bytes retained.

## Hottest functions

### Self size

No function differed in bytes retained within the function body, excluding callees.

### Total size

No function differed in bytes retained within the function and its callees.

## Hottest call stacks

No call stack differed in bytes retained in its leaf frame.

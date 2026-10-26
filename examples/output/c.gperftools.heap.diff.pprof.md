# Allocated heap profile diff

Allocated 132 MiB → 148 MiB (+16.003 MiB, +12.1%) over 78 → 81 objects (1.69 MiB → 1.83 MiB per object).

| Category | Change |       Delta |             % |                Size | Objects |
| -------- | -----: | ----------: | ------------: | ------------------: | ------: |
| Native   | +24.9% | +16.001 MiB | 48.7% → 54.2% | 64.3 MiB → 80.3 MiB | 25 → 26 |
| Ours     |    ~0% |  +1.898 KiB | 51.3% → 45.8% |            67.8 MiB |      49 |
| Unknown  | +56.1% |      +776 B |         <0.1% | 1.35 KiB → 2.11 KiB |   4 → 6 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 66.8 MiB → 82.8 MiB (50.6% → 55.9%) _start
│   └── 66.8 MiB → 82.8 MiB (50.6% → 55.9%) __libc_start_main
│       └── 66.8 MiB → 82.8 MiB (50.6% → 55.9%) (anonymous)
│           └── 66.8 MiB → 82.8 MiB (50.6% → 55.9%) main
│               └── 66.8 MiB → 82.8 MiB (50.6% → 55.9%) FIO_compressFilename
│                   ├── 64 MiB → 80 MiB (48.5% → 54.0%) FIO_compressFilename_srcFile at fileio.c
│                   │   └── 64 MiB → 80 MiB (48.5% → 54.0%) ZSTD_compressStream2
│                   │       └── 64 MiB → 80 MiB (48.5% → 54.0%) ZSTD_CCtx_init_compressStream2 at zstd_compress.c
│                   │           └── 64 MiB → 80 MiB (48.5% → 54.0%) ZSTDMT_initCStream_internal
│                   └── 2.76 MiB (2.1% → 1.9%) FIO_createCResources at fileio.c
│                       ├── 1.5 MiB (1.1% → 1.0%) AIO_ReadPool_create
│                       │   └── 1.25 MiB (0.9% → 0.8%, self 0.9% → 0.8%) AIO_IOPool_init at fileio_asyncio.c
│                       └── 1.26 MiB (1.0% → 0.8%) AIO_WritePool_create
│                           └── 1.26 MiB (1.0% → 0.8%, self 1.0% → 0.8%, self 1.9% → 1.7% globally) AIO_IOPool_init at fileio_asyncio.c
└── 65.3 MiB (49.4% → 44.1%) (anonymous)
    └── … 65.3 MiB (49.4% → 44.1%) POOL_thread at pool.c
        └── 65.3 MiB (49.4% → 44.1%) ZSTDMT_compressionJob at zstdmt_compress.c
            ├── 49.2 MiB (37.3% → 33.3%) ZSTD_compressBegin_advanced_internal
            │   └── 49.2 MiB (37.3% → 33.3%) ZSTD_compressBegin_internal at zstd_compress.c
            │       └── 49.2 MiB (37.3% → 33.3%) ZSTD_resetCCtx_internal
            └── 16.1 MiB (12.2% → 10.8%) ZSTDMT_getBuffer
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |      Delta |             % |                Size | Objects | Function                      | Location            |
| ------: | ---------: | ------------: | ------------------: | ------: | ----------------------------- | ------------------- |
|  +25.0% |    +16 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB |       1 | `ZSTDMT_initCStream_internal` | `<unknown>`         |
| +103.5% | +1.843 KiB |         <0.1% | 1.78 KiB → 3.63 KiB |       1 | `ZSTDMT_createJobsTable`      | `zstdmt_compress.c` |
|  +12.5% |     +1 KiB |         <0.1% |       8 KiB → 9 KiB |   2 → 3 | `_IO_file_doallocate`         | `<unknown>`         |
|  +56.1% |     +776 B |         <0.1% | 1.35 KiB → 2.11 KiB |   4 → 6 | `(anonymous)`                 | `<unknown>`         |
|  +16.7% |      +48 B |         <0.1% |       288 B → 336 B |       4 | `ZSTDMT_createBufferPool`     | `zstdmt_compress.c` |
|   +0.6% |      +32 B |         <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx`             | `<unknown>`         |
|   +0.6% |      +32 B |         <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx_advanced`    | `<unknown>`         |
|   +0.5% |      +16 B |         <0.1% | 3.05 KiB → 3.06 KiB |       1 | `ZSTDMT_createCCtx_advanced`  | `<unknown>`         |
|   +0.7% |       +8 B |         <0.1% |            1.05 KiB |       9 | `POOL_create_advanced`        | `<unknown>`         |
|   +8.3% |       +8 B |         <0.1% |        96 B → 104 B |       2 | `ZSTDMT_createCCtxPool`       | `zstdmt_compress.c` |

##### Native

| Change |   Delta |             % |                Size | Objects | Function                      | Location    |
| -----: | ------: | ------------: | ------------------: | ------: | ----------------------------- | ----------- |
| +25.0% | +16 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB |       1 | `ZSTDMT_initCStream_internal` | `<unknown>` |
| +12.5% |  +1 KiB |         <0.1% |       8 KiB → 9 KiB |   2 → 3 | `_IO_file_doallocate`         | `<unknown>` |
|  +0.6% |   +32 B |         <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx`             | `<unknown>` |
|  +0.6% |   +32 B |         <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx_advanced`    | `<unknown>` |
|  +0.5% |   +16 B |         <0.1% | 3.05 KiB → 3.06 KiB |       1 | `ZSTDMT_createCCtx_advanced`  | `<unknown>` |
|  +0.7% |    +8 B |         <0.1% |            1.05 KiB |       9 | `POOL_create_advanced`        | `<unknown>` |

##### Ours

|  Change |      Delta |     % |                Size | Objects | Function                  | Location            |
| ------: | ---------: | ----: | ------------------: | ------: | ------------------------- | ------------------- |
| +103.5% | +1.843 KiB | <0.1% | 1.78 KiB → 3.63 KiB |       1 | `ZSTDMT_createJobsTable`  | `zstdmt_compress.c` |
|  +16.7% |      +48 B | <0.1% |       288 B → 336 B |       4 | `ZSTDMT_createBufferPool` | `zstdmt_compress.c` |
|   +8.3% |       +8 B | <0.1% |        96 B → 104 B |       2 | `ZSTDMT_createCCtxPool`   | `zstdmt_compress.c` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `ZSTDMT_initCStream_internal` (`<unknown>`)

| Change |   Delta |      % |            Size | Objects | Caller                           | Location          |
| -----: | ------: | -----: | --------------: | ------: | -------------------------------- | ----------------- |
| +25.0% | +16 MiB | 100.0% | 64 MiB → 80 MiB |       1 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

##### `ZSTDMT_createJobsTable` (`zstdmt_compress.c`)

|  Change |      Delta |      % |                Size | Objects | Caller                       | Location    |
| ------: | ---------: | -----: | ------------------: | ------: | ---------------------------- | ----------- |
| +103.5% | +1.843 KiB | 100.0% | 1.78 KiB → 3.63 KiB |       1 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `_IO_file_doallocate` (`<unknown>`)

| Change |  Delta |             % |          Size | Objects | Caller           | Location    |
| -----: | -----: | ------------: | ------------: | ------: | ---------------- | ----------- |
| +25.0% | +1 KiB | 50.0% → 55.6% | 4 KiB → 5 KiB |   1 → 2 | `_IO_doallocbuf` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

| Change |  Delta |             % |             Size | Objects | Caller                   | Location    |
| -----: | -----: | ------------: | ---------------: | ------: | ------------------------ | ----------- |
|    new | +472 B |  0.0% → 21.9% |      0 B → 472 B |   0 → 1 | `UTIL_countCores.part.0` | `util.c`    |
| +33.3% | +304 B | 65.9% → 56.3% | 912 B → 1.19 KiB |   3 → 4 | `_dl_allocate_tls`       | `<unknown>` |

##### `ZSTDMT_createBufferPool` (`zstdmt_compress.c`)

| Change | Delta |      % |          Size | Objects | Caller                       | Location    |
| -----: | ----: | -----: | ------------: | ------: | ---------------------------- | ----------- |
| +16.7% | +48 B | 100.0% | 288 B → 336 B |       4 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `ZSTD_createCCtx` (`<unknown>`)

| Change | Delta |      % |                Size | Objects | Caller                 | Location   |
| -----: | ----: | -----: | ------------------: | ------: | ---------------------- | ---------- |
|  +0.6% | +32 B | 100.0% | 5.13 KiB → 5.16 KiB |       1 | `FIO_createCResources` | `fileio.c` |

##### `ZSTD_createCCtx_advanced` (`<unknown>`)

| Change | Delta |      % |                Size | Objects | Caller                  | Location            |
| -----: | ----: | -----: | ------------------: | ------: | ----------------------- | ------------------- |
|  +0.6% | +32 B | 100.0% | 5.13 KiB → 5.16 KiB |       1 | `ZSTDMT_createCCtxPool` | `zstdmt_compress.c` |

##### `ZSTDMT_createCCtx_advanced` (`<unknown>`)

| Change | Delta |      % |                Size | Objects | Caller                           | Location          |
| -----: | ----: | -----: | ------------------: | ------: | -------------------------------- | ----------------- |
|  +0.5% | +16 B | 100.0% | 3.05 KiB → 3.06 KiB |       1 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

##### `POOL_create_advanced` (`<unknown>`)

| Change | Delta |             % |          Size | Objects | Caller                       | Location    |
| -----: | ----: | ------------: | ------------: | ------: | ---------------------------- | ----------- |
|  +2.9% |  +8 B | 25.4% → 25.9% | 272 B → 280 B |       3 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `ZSTDMT_createCCtxPool` (`zstdmt_compress.c`)

| Change | Delta |      % |         Size | Objects | Caller                       | Location    |
| -----: | ----: | -----: | -----------: | ------: | ---------------------------- | ----------- |
|  +8.3% |  +8 B | 100.0% | 96 B → 104 B |       2 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |       Delta |             % |                Size | Objects | Function                         | Location            |
| ------: | ----------: | ------------: | ------------------: | ------: | -------------------------------- | ------------------- |
|  +12.1% | +16.003 MiB |        100.0% |   132 MiB → 148 MiB | 78 → 81 | `(anonymous)`                    | `<unknown>`         |
|  +24.0% | +16.003 MiB | 50.6% → 55.9% | 66.8 MiB → 82.8 MiB | 75 → 78 | `main`                           | `<unknown>`         |
|  +24.0% | +16.003 MiB | 50.6% → 55.9% | 66.8 MiB → 82.8 MiB | 75 → 78 | `__libc_start_main`              | `<unknown>`         |
|  +24.0% | +16.003 MiB | 50.6% → 55.9% | 66.8 MiB → 82.8 MiB | 75 → 78 | `_start`                         | `<unknown>`         |
|  +24.0% | +16.002 MiB | 50.6% → 55.9% | 66.8 MiB → 82.8 MiB | 69 → 70 | `FIO_compressFilename`           | `<unknown>`         |
|  +25.0% | +16.002 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB | 14 → 15 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c`   |
|  +25.0% | +16.002 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB | 14 → 15 | `ZSTD_compressStream2`           | `<unknown>`         |
|  +25.0% | +16.002 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB | 17 → 18 | `FIO_compressFilename_srcFile`   | `fileio.c`          |
|  +25.0% |     +16 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB |       1 | `ZSTDMT_initCStream_internal`    | `<unknown>`         |
|  +20.6% |   +2.25 KiB |         <0.1% | 10.9 KiB → 13.1 KiB | 13 → 14 | `ZSTDMT_createCCtx_advanced`     | `<unknown>`         |
| +103.5% |  +1.843 KiB |         <0.1% | 1.78 KiB → 3.63 KiB |       1 | `ZSTDMT_createJobsTable`         | `zstdmt_compress.c` |
|     new |   +1.46 KiB |  0.0% → <0.1% |      0 B → 1.46 KiB |   0 → 2 | `UTIL_countCores.part.0`         | `util.c`            |
|  +12.5% |      +1 KiB |         <0.1% |       8 KiB → 9 KiB |   2 → 3 | `_IO_file_doallocate`            | `<unknown>`         |
|  +25.0% |      +1 KiB |         <0.1% |       4 KiB → 5 KiB |   1 → 2 | `_IO_doallocbuf`                 | `<unknown>`         |
|     new |      +1 KiB |  0.0% → <0.1% |         0 B → 1 KiB |   0 → 1 | `_IO_file_underflow`             | `<unknown>`         |
|     new |      +1 KiB |  0.0% → <0.1% |         0 B → 1 KiB |   0 → 1 | `_IO_default_uflow`              | `<unknown>`         |
|     new |      +1 KiB |  0.0% → <0.1% |         0 B → 1 KiB |   0 → 1 | `_IO_getline_info`               | `<unknown>`         |
|     new |      +1 KiB |  0.0% → <0.1% |         0 B → 1 KiB |   0 → 1 | `_IO_fgets`                      | `<unknown>`         |
|  +15.7% |      +312 B |         <0.1% | 1.94 KiB → 2.24 KiB | 12 → 13 | `POOL_create_advanced`           | `<unknown>`         |
|  +33.3% |      +304 B |         <0.1% |    912 B → 1.19 KiB |   3 → 4 | `_dl_allocate_tls`               | `<unknown>`         |

##### Native

| Change |       Delta |             % |                Size | Objects | Function                      | Location    |
| -----: | ----------: | ------------: | ------------------: | ------: | ----------------------------- | ----------- |
| +24.0% | +16.003 MiB | 50.6% → 55.9% | 66.8 MiB → 82.8 MiB | 75 → 78 | `main`                        | `<unknown>` |
| +24.0% | +16.003 MiB | 50.6% → 55.9% | 66.8 MiB → 82.8 MiB | 75 → 78 | `__libc_start_main`           | `<unknown>` |
| +24.0% | +16.003 MiB | 50.6% → 55.9% | 66.8 MiB → 82.8 MiB | 75 → 78 | `_start`                      | `<unknown>` |
| +24.0% | +16.002 MiB | 50.6% → 55.9% | 66.8 MiB → 82.8 MiB | 69 → 70 | `FIO_compressFilename`        | `<unknown>` |
| +25.0% | +16.002 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB | 14 → 15 | `ZSTD_compressStream2`        | `<unknown>` |
| +25.0% |     +16 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB |       1 | `ZSTDMT_initCStream_internal` | `<unknown>` |
| +20.6% |   +2.25 KiB |         <0.1% | 10.9 KiB → 13.1 KiB | 13 → 14 | `ZSTDMT_createCCtx_advanced`  | `<unknown>` |
| +12.5% |      +1 KiB |         <0.1% |       8 KiB → 9 KiB |   2 → 3 | `_IO_file_doallocate`         | `<unknown>` |
| +25.0% |      +1 KiB |         <0.1% |       4 KiB → 5 KiB |   1 → 2 | `_IO_doallocbuf`              | `<unknown>` |
|    new |      +1 KiB |  0.0% → <0.1% |         0 B → 1 KiB |   0 → 1 | `_IO_file_underflow`          | `<unknown>` |
|    new |      +1 KiB |  0.0% → <0.1% |         0 B → 1 KiB |   0 → 1 | `_IO_default_uflow`           | `<unknown>` |
|    new |      +1 KiB |  0.0% → <0.1% |         0 B → 1 KiB |   0 → 1 | `_IO_getline_info`            | `<unknown>` |
|    new |      +1 KiB |  0.0% → <0.1% |         0 B → 1 KiB |   0 → 1 | `_IO_fgets`                   | `<unknown>` |
| +15.7% |      +312 B |         <0.1% | 1.94 KiB → 2.24 KiB | 12 → 13 | `POOL_create_advanced`        | `<unknown>` |
| +33.3% |      +304 B |         <0.1% |    912 B → 1.19 KiB |   3 → 4 | `_dl_allocate_tls`            | `<unknown>` |
| +33.3% |      +304 B |         <0.1% |    912 B → 1.19 KiB |   3 → 4 | `pthread_create`              | `<unknown>` |
|  +0.6% |       +32 B |         <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx`             | `<unknown>` |
|  +0.6% |       +32 B |         <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx_advanced`    | `<unknown>` |

##### Ours

|  Change |       Delta |             % |                Size | Objects | Function                         | Location            |
| ------: | ----------: | ------------: | ------------------: | ------: | -------------------------------- | ------------------- |
|  +25.0% | +16.002 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB | 14 → 15 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c`   |
|  +25.0% | +16.002 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB | 17 → 18 | `FIO_compressFilename_srcFile`   | `fileio.c`          |
| +103.5% |  +1.843 KiB |         <0.1% | 1.78 KiB → 3.63 KiB |       1 | `ZSTDMT_createJobsTable`         | `zstdmt_compress.c` |
|     new |   +1.46 KiB |  0.0% → <0.1% |      0 B → 1.46 KiB |   0 → 2 | `UTIL_countCores.part.0`         | `util.c`            |
|  +16.7% |       +48 B |         <0.1% |       288 B → 336 B |       4 | `ZSTDMT_createBufferPool`        | `zstdmt_compress.c` |
|   +0.7% |       +40 B |         <0.1% | 5.23 KiB → 5.27 KiB |       3 | `ZSTDMT_createCCtxPool`          | `zstdmt_compress.c` |
|     ~0% |       +32 B |   2.1% → 1.9% |            2.76 MiB |      52 | `FIO_createCResources`           | `fileio.c`          |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

| Change |       Delta |             % |                Size | Objects | Caller                   | Location    |
| -----: | ----------: | ------------: | ------------------: | ------: | ------------------------ | ----------- |
| +24.0% | +16.003 MiB | 50.6% → 55.9% | 66.8 MiB → 82.8 MiB | 75 → 78 | `__libc_start_main`      | `<unknown>` |
|    new |      +472 B |  0.0% → <0.1% |         0 B → 472 B |   0 → 1 | `UTIL_countCores.part.0` | `util.c`    |
| +33.3% |      +304 B |         <0.1% |    912 B → 1.19 KiB |   3 → 4 | `_dl_allocate_tls`       | `<unknown>` |

##### `main` (`<unknown>`)

| Change |       Delta |      % |                Size | Objects | Caller        | Location    |
| -----: | ----------: | -----: | ------------------: | ------: | ------------- | ----------- |
| +24.0% | +16.003 MiB | 100.0% | 66.8 MiB → 82.8 MiB | 75 → 78 | `(anonymous)` | `<unknown>` |

##### `__libc_start_main` (`<unknown>`)

| Change |       Delta |      % |                Size | Objects | Caller   | Location    |
| -----: | ----------: | -----: | ------------------: | ------: | -------- | ----------- |
| +24.0% | +16.003 MiB | 100.0% | 66.8 MiB → 82.8 MiB | 75 → 78 | `_start` | `<unknown>` |

##### `FIO_compressFilename` (`<unknown>`)

| Change |       Delta |      % |                Size | Objects | Caller | Location    |
| -----: | ----------: | -----: | ------------------: | ------: | ------ | ----------- |
| +24.0% | +16.002 MiB | 100.0% | 66.8 MiB → 82.8 MiB | 69 → 70 | `main` | `<unknown>` |

##### `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`)

| Change |       Delta |      % |            Size | Objects | Caller                 | Location    |
| -----: | ----------: | -----: | --------------: | ------: | ---------------------- | ----------- |
| +25.0% | +16.002 MiB | 100.0% | 64 MiB → 80 MiB | 14 → 15 | `ZSTD_compressStream2` | `<unknown>` |

##### `ZSTD_compressStream2` (`<unknown>`)

| Change |       Delta |      % |            Size | Objects | Caller                         | Location   |
| -----: | ----------: | -----: | --------------: | ------: | ------------------------------ | ---------- |
| +25.0% | +16.002 MiB | 100.0% | 64 MiB → 80 MiB | 14 → 15 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

| Change |       Delta |      % |            Size | Objects | Caller                 | Location    |
| -----: | ----------: | -----: | --------------: | ------: | ---------------------- | ----------- |
| +25.0% | +16.002 MiB | 100.0% | 64 MiB → 80 MiB | 17 → 18 | `FIO_compressFilename` | `<unknown>` |

##### `ZSTDMT_initCStream_internal` (`<unknown>`)

| Change |   Delta |      % |            Size | Objects | Caller                           | Location          |
| -----: | ------: | -----: | --------------: | ------: | -------------------------------- | ----------------- |
| +25.0% | +16 MiB | 100.0% | 64 MiB → 80 MiB |       1 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

##### `ZSTDMT_createCCtx_advanced` (`<unknown>`)

| Change |     Delta |      % |                Size | Objects | Caller                           | Location          |
| -----: | --------: | -----: | ------------------: | ------: | -------------------------------- | ----------------- |
| +20.6% | +2.25 KiB | 100.0% | 10.9 KiB → 13.1 KiB | 13 → 14 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

##### `ZSTDMT_createJobsTable` (`zstdmt_compress.c`)

|  Change |      Delta |      % |                Size | Objects | Caller                       | Location    |
| ------: | ---------: | -----: | ------------------: | ------: | ---------------------------- | ----------- |
| +103.5% | +1.843 KiB | 100.0% | 1.78 KiB → 3.63 KiB |       1 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `UTIL_countCores.part.0` (`util.c`)

| Change |     Delta |             % |           Size | Objects | Caller | Location    |
| -----: | --------: | ------------: | -------------: | ------: | ------ | ----------- |
|    new | +1.46 KiB | 0.0% → 100.0% | 0 B → 1.46 KiB |   0 → 2 | `main` | `<unknown>` |

##### `_IO_file_doallocate` (`<unknown>`)

| Change |  Delta |             % |          Size | Objects | Caller           | Location    |
| -----: | -----: | ------------: | ------------: | ------: | ---------------- | ----------- |
| +25.0% | +1 KiB | 50.0% → 55.6% | 4 KiB → 5 KiB |   1 → 2 | `_IO_doallocbuf` | `<unknown>` |

##### `_IO_doallocbuf` (`<unknown>`)

| Change |  Delta |            % |        Size | Objects | Caller               | Location    |
| -----: | -----: | -----------: | ----------: | ------: | -------------------- | ----------- |
|    new | +1 KiB | 0.0% → 20.0% | 0 B → 1 KiB |   0 → 1 | `_IO_file_underflow` | `<unknown>` |

##### `_IO_file_underflow` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Caller              | Location    |
| -----: | -----: | ------------: | ----------: | ------: | ------------------- | ----------- |
|    new | +1 KiB | 0.0% → 100.0% | 0 B → 1 KiB |   0 → 1 | `_IO_default_uflow` | `<unknown>` |

##### `_IO_default_uflow` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Caller             | Location    |
| -----: | -----: | ------------: | ----------: | ------: | ------------------ | ----------- |
|    new | +1 KiB | 0.0% → 100.0% | 0 B → 1 KiB |   0 → 1 | `_IO_getline_info` | `<unknown>` |

##### `_IO_getline_info` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Caller      | Location    |
| -----: | -----: | ------------: | ----------: | ------: | ----------- | ----------- |
|    new | +1 KiB | 0.0% → 100.0% | 0 B → 1 KiB |   0 → 1 | `_IO_fgets` | `<unknown>` |

##### `_IO_fgets` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Caller                   | Location |
| -----: | -----: | ------------: | ----------: | ------: | ------------------------ | -------- |
|    new | +1 KiB | 0.0% → 100.0% | 0 B → 1 KiB |   0 → 1 | `UTIL_countCores.part.0` | `util.c` |

##### `POOL_create_advanced` (`<unknown>`)

| Change |  Delta |             % |          Size | Objects | Caller                       | Location    |
| -----: | -----: | ------------: | ------------: | ------: | ---------------------------- | ----------- |
| +54.2% | +312 B | 29.0% → 38.7% | 576 B → 888 B |   4 → 5 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `_dl_allocate_tls` (`<unknown>`)

| Change |  Delta |      % |             Size | Objects | Caller           | Location    |
| -----: | -----: | -----: | ---------------: | ------: | ---------------- | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `pthread_create` | `<unknown>` |

##### `pthread_create` (`<unknown>`)

| Change |  Delta |      % |             Size | Objects | Caller                 | Location    |
| -----: | -----: | -----: | ---------------: | ------: | ---------------------- | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `POOL_create_advanced` | `<unknown>` |

##### `ZSTD_createCCtx` (`<unknown>`)

| Change | Delta |      % |                Size | Objects | Caller                 | Location   |
| -----: | ----: | -----: | ------------------: | ------: | ---------------------- | ---------- |
|  +0.6% | +32 B | 100.0% | 5.13 KiB → 5.16 KiB |       1 | `FIO_createCResources` | `fileio.c` |

##### `ZSTD_createCCtx_advanced` (`<unknown>`)

| Change | Delta |      % |                Size | Objects | Caller                  | Location            |
| -----: | ----: | -----: | ------------------: | ------: | ----------------------- | ------------------- |
|  +0.6% | +32 B | 100.0% | 5.13 KiB → 5.16 KiB |       1 | `ZSTDMT_createCCtxPool` | `zstdmt_compress.c` |

##### `ZSTDMT_createBufferPool` (`zstdmt_compress.c`)

| Change | Delta |      % |          Size | Objects | Caller                       | Location    |
| -----: | ----: | -----: | ------------: | ------: | ---------------------------- | ----------- |
| +16.7% | +48 B | 100.0% | 288 B → 336 B |       4 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `ZSTDMT_createCCtxPool` (`zstdmt_compress.c`)

| Change | Delta |      % |                Size | Objects | Caller                       | Location    |
| -----: | ----: | -----: | ------------------: | ------: | ---------------------------- | ----------- |
|  +0.7% | +40 B | 100.0% | 5.23 KiB → 5.27 KiB |       3 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `FIO_createCResources` (`fileio.c`)

| Change | Delta |      % |     Size | Objects | Caller                 | Location    |
| -----: | ----: | -----: | -------: | ------: | ---------------------- | ----------- |
|    ~0% | +32 B | 100.0% | 2.76 MiB |      52 | `FIO_compressFilename` | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

| Change |       Delta |             % |                Size | Objects | Callee | Location    |
| -----: | ----------: | ------------: | ------------------: | ------: | ------ | ----------- |
| +24.0% | +16.003 MiB | 50.6% → 55.9% | 66.8 MiB → 82.8 MiB | 75 → 78 | `main` | `<unknown>` |

##### `main` (`<unknown>`)

| Change |       Delta |            % |                Size | Objects | Callee                   | Location    |
| -----: | ----------: | -----------: | ------------------: | ------: | ------------------------ | ----------- |
| +24.0% | +16.002 MiB |       100.0% | 66.8 MiB → 82.8 MiB | 69 → 70 | `FIO_compressFilename`   | `<unknown>` |
|    new |   +1.46 KiB | 0.0% → <0.1% |      0 B → 1.46 KiB |   0 → 2 | `UTIL_countCores.part.0` | `util.c`    |

##### `__libc_start_main` (`<unknown>`)

| Change |       Delta |      % |                Size | Objects | Callee        | Location    |
| -----: | ----------: | -----: | ------------------: | ------: | ------------- | ----------- |
| +24.0% | +16.003 MiB | 100.0% | 66.8 MiB → 82.8 MiB | 75 → 78 | `(anonymous)` | `<unknown>` |

##### `_start` (`<unknown>`)

| Change |       Delta |      % |                Size | Objects | Callee              | Location    |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------- | ----------- |
| +24.0% | +16.003 MiB | 100.0% | 66.8 MiB → 82.8 MiB | 75 → 78 | `__libc_start_main` | `<unknown>` |

##### `FIO_compressFilename` (`<unknown>`)

| Change |       Delta |             % |            Size | Objects | Callee                         | Location   |
| -----: | ----------: | ------------: | --------------: | ------: | ------------------------------ | ---------- |
| +25.0% | +16.002 MiB | 95.9% → 96.7% | 64 MiB → 80 MiB | 17 → 18 | `FIO_compressFilename_srcFile` | `fileio.c` |
|    ~0% |       +32 B |   4.1% → 3.3% |        2.76 MiB |      52 | `FIO_createCResources`         | `fileio.c` |

##### `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`)

| Change |     Delta |      % |                Size | Objects | Callee                        | Location    |
| -----: | --------: | -----: | ------------------: | ------: | ----------------------------- | ----------- |
| +25.0% |   +16 MiB | 100.0% |     64 MiB → 80 MiB |       1 | `ZSTDMT_initCStream_internal` | `<unknown>` |
| +20.6% | +2.25 KiB |  <0.1% | 10.9 KiB → 13.1 KiB | 13 → 14 | `ZSTDMT_createCCtx_advanced`  | `<unknown>` |

##### `ZSTD_compressStream2` (`<unknown>`)

| Change |       Delta |      % |            Size | Objects | Callee                           | Location          |
| -----: | ----------: | -----: | --------------: | ------: | -------------------------------- | ----------------- |
| +25.0% | +16.002 MiB | 100.0% | 64 MiB → 80 MiB | 14 → 15 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

| Change |       Delta |      % |            Size | Objects | Callee                 | Location    |
| -----: | ----------: | -----: | --------------: | ------: | ---------------------- | ----------- |
| +25.0% | +16.002 MiB | 100.0% | 64 MiB → 80 MiB | 14 → 15 | `ZSTD_compressStream2` | `<unknown>` |

##### `ZSTDMT_createCCtx_advanced` (`<unknown>`)

|  Change |      Delta |             % |                Size | Objects | Callee                    | Location            |
| ------: | ---------: | ------------: | ------------------: | ------: | ------------------------- | ------------------- |
| +103.5% | +1.843 KiB | 16.3% → 27.6% | 1.78 KiB → 3.63 KiB |       1 | `ZSTDMT_createJobsTable`  | `zstdmt_compress.c` |
|  +54.2% |     +312 B |   5.2% → 6.6% |       576 B → 888 B |   4 → 5 | `POOL_create_advanced`    | `<unknown>`         |
|  +16.7% |      +48 B |   2.6% → 2.5% |       288 B → 336 B |       4 | `ZSTDMT_createBufferPool` | `zstdmt_compress.c` |
|   +0.7% |      +40 B | 48.0% → 40.0% | 5.23 KiB → 5.27 KiB |       3 | `ZSTDMT_createCCtxPool`   | `zstdmt_compress.c` |

##### `UTIL_countCores.part.0` (`util.c`)

| Change |  Delta |            % |        Size | Objects | Callee        | Location    |
| -----: | -----: | -----------: | ----------: | ------: | ------------- | ----------- |
|    new | +1 KiB | 0.0% → 68.4% | 0 B → 1 KiB |   0 → 1 | `_IO_fgets`   | `<unknown>` |
|    new | +472 B | 0.0% → 31.6% | 0 B → 472 B |   0 → 1 | `(anonymous)` | `<unknown>` |

##### `_IO_doallocbuf` (`<unknown>`)

| Change |  Delta |      % |          Size | Objects | Callee                | Location    |
| -----: | -----: | -----: | ------------: | ------: | --------------------- | ----------- |
| +25.0% | +1 KiB | 100.0% | 4 KiB → 5 KiB |   1 → 2 | `_IO_file_doallocate` | `<unknown>` |

##### `_IO_file_underflow` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Callee           | Location    |
| -----: | -----: | ------------: | ----------: | ------: | ---------------- | ----------- |
|    new | +1 KiB | 0.0% → 100.0% | 0 B → 1 KiB |   0 → 1 | `_IO_doallocbuf` | `<unknown>` |

##### `_IO_default_uflow` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Callee               | Location    |
| -----: | -----: | ------------: | ----------: | ------: | -------------------- | ----------- |
|    new | +1 KiB | 0.0% → 100.0% | 0 B → 1 KiB |   0 → 1 | `_IO_file_underflow` | `<unknown>` |

##### `_IO_getline_info` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Callee              | Location    |
| -----: | -----: | ------------: | ----------: | ------: | ------------------- | ----------- |
|    new | +1 KiB | 0.0% → 100.0% | 0 B → 1 KiB |   0 → 1 | `_IO_default_uflow` | `<unknown>` |

##### `_IO_fgets` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Callee             | Location    |
| -----: | -----: | ------------: | ----------: | ------: | ------------------ | ----------- |
|    new | +1 KiB | 0.0% → 100.0% | 0 B → 1 KiB |   0 → 1 | `_IO_getline_info` | `<unknown>` |

##### `POOL_create_advanced` (`<unknown>`)

| Change |  Delta |             % |             Size | Objects | Callee           | Location    |
| -----: | -----: | ------------: | ---------------: | ------: | ---------------- | ----------- |
| +33.3% | +304 B | 46.0% → 53.0% | 912 B → 1.19 KiB |   3 → 4 | `pthread_create` | `<unknown>` |

##### `_dl_allocate_tls` (`<unknown>`)

| Change |  Delta |      % |             Size | Objects | Callee        | Location    |
| -----: | -----: | -----: | ---------------: | ------: | ------------- | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `(anonymous)` | `<unknown>` |

##### `pthread_create` (`<unknown>`)

| Change |  Delta |      % |             Size | Objects | Callee             | Location    |
| -----: | -----: | -----: | ---------------: | ------: | ------------------ | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `_dl_allocate_tls` | `<unknown>` |

##### `ZSTDMT_createCCtxPool` (`zstdmt_compress.c`)

| Change | Delta |             % |                Size | Objects | Callee                     | Location    |
| -----: | ----: | ------------: | ------------------: | ------: | -------------------------- | ----------- |
|  +0.6% | +32 B | 98.2% → 98.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx_advanced` | `<unknown>` |

##### `FIO_createCResources` (`fileio.c`)

| Change | Delta |    % |                Size | Objects | Callee            | Location    |
| -----: | ----: | ---: | ------------------: | ------: | ----------------- | ----------- |
|  +0.6% | +32 B | 0.2% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx` | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes allocated in their leaf frame.

Common call stack: `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`

|  Change |      Delta |             % |                Size | Objects | Call stack                                                                                                                                                                                                                                                           |
| ------: | ---------: | ------------: | ------------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +25.0% |    +16 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB |       1 | `ZSTDMT_initCStream_internal` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename`                                                                                 |
| +103.5% | +1.843 KiB |         <0.1% | 1.78 KiB → 3.63 KiB |       1 | `ZSTDMT_createJobsTable` (`zstdmt_compress.c`) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename`                                 |
|     new |     +1 KiB |  0.0% → <0.1% |         0 B → 1 KiB |   0 → 1 | `_IO_file_doallocate` ← `_IO_doallocbuf` ← `_IO_file_underflow` ← `_IO_default_uflow` ← `_IO_getline_info` ← `_IO_fgets` ← `UTIL_countCores.part.0` (`util.c`)                                                                                                       |
|     new |     +472 B |  0.0% → <0.1% |         0 B → 472 B |   0 → 1 | `(anonymous)` ← `UTIL_countCores.part.0` (`util.c`)                                                                                                                                                                                                                  |
| +100.0% |     +304 B |         <0.1% |       304 B → 608 B |   1 → 2 | `(anonymous)` ← `_dl_allocate_tls` ← `pthread_create` ← `POOL_create_advanced` ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` |
|  +16.7% |      +48 B |         <0.1% |       288 B → 336 B |       4 | `ZSTDMT_createBufferPool` (`zstdmt_compress.c`) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename`                                |
|   +0.6% |      +32 B |         <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename`                                                                                                                                                                                     |
|   +0.6% |      +32 B |         <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx_advanced` ← `ZSTDMT_createCCtxPool` (`zstdmt_compress.c`) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename`     |
|   +0.5% |      +16 B |         <0.1% | 3.05 KiB → 3.06 KiB |       1 | `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename`                                                                                  |
|   +8.3% |       +8 B |         <0.1% |        96 B → 104 B |       2 | `ZSTDMT_createCCtxPool` (`zstdmt_compress.c`) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename`                                  |
|   +2.9% |       +8 B |         <0.1% |       272 B → 280 B |       3 | `POOL_create_advanced` ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename`                                                         |

# Retained heap profile diff

Retained 912 B → 1.19 KiB (+304 B, +33.3%) over 3 → 4 objects (304 B per object).

| Category | Change |  Delta |      % |             Size | Objects |
| -------- | -----: | -----: | -----: | ---------------: | ------: |
| Unknown  | +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 |

## Call tree

Call paths to the hottest and most changed functions.

```
└── 912 B → 1.19 KiB (100.0%) _start
    └── 912 B → 1.19 KiB (100.0%) __libc_start_main
        └── 912 B → 1.19 KiB (100.0%) (anonymous)
```

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Unknown

| Change |  Delta |      % |             Size | Objects | Function      | Location    |
| -----: | -----: | -----: | ---------------: | ------: | ------------- | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `(anonymous)` | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `(anonymous)` (`<unknown>`)

| Change |  Delta |      % |             Size | Objects | Caller             | Location    |
| -----: | -----: | -----: | ---------------: | ------: | ------------------ | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `_dl_allocate_tls` | `<unknown>` |

### Total size

#### Regressions

Functions with the largest increase in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |  Delta |             % |             Size | Objects | Function                         | Location          |
| ------: | -----: | ------------: | ---------------: | ------: | -------------------------------- | ----------------- |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `(anonymous)`                    | `<unknown>`       |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `_dl_allocate_tls`               | `<unknown>`       |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `pthread_create`                 | `<unknown>`       |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `POOL_create_advanced`           | `<unknown>`       |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `FIO_compressFilename`           | `<unknown>`       |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `main`                           | `<unknown>`       |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `__libc_start_main`              | `<unknown>`       |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `_start`                         | `<unknown>`       |
| +100.0% | +304 B | 33.3% → 50.0% |    304 B → 608 B |   1 → 2 | `ZSTDMT_createCCtx_advanced`     | `<unknown>`       |
| +100.0% | +304 B | 33.3% → 50.0% |    304 B → 608 B |   1 → 2 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |
| +100.0% | +304 B | 33.3% → 50.0% |    304 B → 608 B |   1 → 2 | `ZSTD_compressStream2`           | `<unknown>`       |
| +100.0% | +304 B | 33.3% → 50.0% |    304 B → 608 B |   1 → 2 | `FIO_compressFilename_srcFile`   | `fileio.c`        |

##### Unknown

| Change |  Delta |      % |             Size | Objects | Function      | Location    |
| -----: | -----: | -----: | ---------------: | ------: | ------------- | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `(anonymous)` | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

| Change |  Delta |      % |             Size | Objects | Caller              | Location    |
| -----: | -----: | -----: | ---------------: | ------: | ------------------- | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `_dl_allocate_tls`  | `<unknown>` |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `__libc_start_main` | `<unknown>` |

##### `_dl_allocate_tls` (`<unknown>`)

| Change |  Delta |      % |             Size | Objects | Caller           | Location    |
| -----: | -----: | -----: | ---------------: | ------: | ---------------- | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `pthread_create` | `<unknown>` |

##### `pthread_create` (`<unknown>`)

| Change |  Delta |      % |             Size | Objects | Caller                 | Location    |
| -----: | -----: | -----: | ---------------: | ------: | ---------------------- | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `POOL_create_advanced` | `<unknown>` |

##### `POOL_create_advanced` (`<unknown>`)

|  Change |  Delta |             % |          Size | Objects | Caller                       | Location    |
| ------: | -----: | ------------: | ------------: | ------: | ---------------------------- | ----------- |
| +100.0% | +304 B | 33.3% → 50.0% | 304 B → 608 B |   1 → 2 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `FIO_compressFilename` (`<unknown>`)

| Change |  Delta |      % |             Size | Objects | Caller | Location    |
| -----: | -----: | -----: | ---------------: | ------: | ------ | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `main` | `<unknown>` |

##### `main` (`<unknown>`)

| Change |  Delta |      % |             Size | Objects | Caller        | Location    |
| -----: | -----: | -----: | ---------------: | ------: | ------------- | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `(anonymous)` | `<unknown>` |

##### `__libc_start_main` (`<unknown>`)

| Change |  Delta |      % |             Size | Objects | Caller   | Location    |
| -----: | -----: | -----: | ---------------: | ------: | -------- | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `_start` | `<unknown>` |

##### `ZSTDMT_createCCtx_advanced` (`<unknown>`)

|  Change |  Delta |      % |          Size | Objects | Caller                           | Location          |
| ------: | -----: | -----: | ------------: | ------: | -------------------------------- | ----------------- |
| +100.0% | +304 B | 100.0% | 304 B → 608 B |   1 → 2 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

##### `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`)

|  Change |  Delta |      % |          Size | Objects | Caller                 | Location    |
| ------: | -----: | -----: | ------------: | ------: | ---------------------- | ----------- |
| +100.0% | +304 B | 100.0% | 304 B → 608 B |   1 → 2 | `ZSTD_compressStream2` | `<unknown>` |

##### `ZSTD_compressStream2` (`<unknown>`)

|  Change |  Delta |      % |          Size | Objects | Caller                         | Location   |
| ------: | -----: | -----: | ------------: | ------: | ------------------------------ | ---------- |
| +100.0% | +304 B | 100.0% | 304 B → 608 B |   1 → 2 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|  Change |  Delta |      % |          Size | Objects | Caller                 | Location    |
| ------: | -----: | -----: | ------------: | ------: | ---------------------- | ----------- |
| +100.0% | +304 B | 100.0% | 304 B → 608 B |   1 → 2 | `FIO_compressFilename` | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

| Change |  Delta |      % |             Size | Objects | Callee | Location    |
| -----: | -----: | -----: | ---------------: | ------: | ------ | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `main` | `<unknown>` |

##### `_dl_allocate_tls` (`<unknown>`)

| Change |  Delta |      % |             Size | Objects | Callee        | Location    |
| -----: | -----: | -----: | ---------------: | ------: | ------------- | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `(anonymous)` | `<unknown>` |

##### `pthread_create` (`<unknown>`)

| Change |  Delta |      % |             Size | Objects | Callee             | Location    |
| -----: | -----: | -----: | ---------------: | ------: | ------------------ | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `_dl_allocate_tls` | `<unknown>` |

##### `POOL_create_advanced` (`<unknown>`)

| Change |  Delta |      % |             Size | Objects | Callee           | Location    |
| -----: | -----: | -----: | ---------------: | ------: | ---------------- | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `pthread_create` | `<unknown>` |

##### `FIO_compressFilename` (`<unknown>`)

|  Change |  Delta |             % |          Size | Objects | Callee                         | Location   |
| ------: | -----: | ------------: | ------------: | ------: | ------------------------------ | ---------- |
| +100.0% | +304 B | 33.3% → 50.0% | 304 B → 608 B |   1 → 2 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `main` (`<unknown>`)

| Change |  Delta |      % |             Size | Objects | Callee                 | Location    |
| -----: | -----: | -----: | ---------------: | ------: | ---------------------- | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `FIO_compressFilename` | `<unknown>` |

##### `__libc_start_main` (`<unknown>`)

| Change |  Delta |      % |             Size | Objects | Callee        | Location    |
| -----: | -----: | -----: | ---------------: | ------: | ------------- | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `(anonymous)` | `<unknown>` |

##### `_start` (`<unknown>`)

| Change |  Delta |      % |             Size | Objects | Callee              | Location    |
| -----: | -----: | -----: | ---------------: | ------: | ------------------- | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `__libc_start_main` | `<unknown>` |

##### `ZSTDMT_createCCtx_advanced` (`<unknown>`)

|  Change |  Delta |      % |          Size | Objects | Callee                 | Location    |
| ------: | -----: | -----: | ------------: | ------: | ---------------------- | ----------- |
| +100.0% | +304 B | 100.0% | 304 B → 608 B |   1 → 2 | `POOL_create_advanced` | `<unknown>` |

##### `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`)

|  Change |  Delta |      % |          Size | Objects | Callee                       | Location    |
| ------: | -----: | -----: | ------------: | ------: | ---------------------------- | ----------- |
| +100.0% | +304 B | 100.0% | 304 B → 608 B |   1 → 2 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `ZSTD_compressStream2` (`<unknown>`)

|  Change |  Delta |      % |          Size | Objects | Callee                           | Location          |
| ------: | -----: | -----: | ------------: | ------: | -------------------------------- | ----------------- |
| +100.0% | +304 B | 100.0% | 304 B → 608 B |   1 → 2 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|  Change |  Delta |      % |          Size | Objects | Callee                 | Location    |
| ------: | -----: | -----: | ------------: | ------: | ---------------------- | ----------- |
| +100.0% | +304 B | 100.0% | 304 B → 608 B |   1 → 2 | `ZSTD_compressStream2` | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes retained in their leaf frame.

|  Change |  Delta |             % |          Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                     |
| ------: | -----: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| +100.0% | +304 B | 33.3% → 50.0% | 304 B → 608 B |   1 → 2 | `(anonymous)` ← `_dl_allocate_tls` ← `pthread_create` ← `POOL_create_advanced` ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start` |

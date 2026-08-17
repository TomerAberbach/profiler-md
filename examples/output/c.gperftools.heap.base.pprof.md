# Allocated heap profile

Allocated 132 MiB over 78 objects (1.69 MiB per object).

| Category |     % |     Size | Objects |
| -------- | ----: | -------: | ------: |
| Ours     | 51.3% | 67.8 MiB |      49 |
| Native   | 48.7% | 64.3 MiB |      25 |
| Unknown  | <0.1% | 1.35 KiB |       4 |

## Call tree

Call paths to the hottest functions.

```
├── 66.8 MiB (50.6%) [[via 2 frames]] (anonymous)
│   └── 66.8 MiB (50.6%) main
│       └── 66.8 MiB (50.6%) FIO_compressFilename
│           ├── 64 MiB (48.5%) [[via 3 frames]] ZSTDMT_initCStream_internal
│           └── 2.76 MiB (2.1%) FIO_createCResources  fileio.c
│               ├── 1.5 MiB (1.1%) AIO_ReadPool_create
│               │   └── 1.25 MiB (0.9%) AIO_IOPool_init  (self 0.9%)  fileio_asyncio.c
│               └── 1.26 MiB (1.0%) AIO_WritePool_create
│                   └── 1.26 MiB (1.0%) AIO_IOPool_init  (self 1.0%; 1.9% in 2 call stacks)  fileio_asyncio.c
└── 65.3 MiB (49.4%) [[via 3 frames]] ZSTDMT_compressionJob  zstdmt_compress.c
    ├── 49.2 MiB (37.3%) [[via 2 frames]] ZSTD_resetCCtx_internal  zstd_compress.c
    └── 16.1 MiB (12.2%) ZSTDMT_getBuffer
```

## Hottest functions

### Self size

Functions with the most bytes allocated within the function body, excluding callees.

|     % |     Size | Objects | Function                      | Location            |
| ----: | -------: | ------: | ----------------------------- | ------------------- |
| 48.5% |   64 MiB |       1 | `ZSTDMT_initCStream_internal` | `<unknown>`         |
| 37.3% | 49.2 MiB |       1 | `ZSTD_resetCCtx_internal`     | `zstd_compress.c`   |
| 12.2% | 16.1 MiB |       1 | `ZSTDMT_getBuffer`            | `zstdmt_compress.c` |
|  1.9% | 2.51 MiB |      40 | `AIO_IOPool_init`             | `fileio_asyncio.c`  |
|  0.2% |  256 KiB |       2 | `AIO_ReadPool_create`         | `<unknown>`         |
| <0.1% |    8 KiB |       2 | `_IO_file_doallocate`         | `<unknown>`         |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx`             | `<unknown>`         |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx_advanced`    | `<unknown>`         |
| <0.1% | 3.05 KiB |       1 | `ZSTDMT_createCCtx_advanced`  | `<unknown>`         |
| <0.1% | 1.78 KiB |       1 | `ZSTDMT_createJobsTable`      | `zstdmt_compress.c` |
| <0.1% | 1.35 KiB |       4 | `(anonymous)`                 | `<unknown>`         |
| <0.1% | 1.05 KiB |       9 | `POOL_create_advanced`        | `<unknown>`         |
| <0.1% |    472 B |       1 | `_IO_fdopen`                  | `<unknown>`         |
| <0.1% |    288 B |       4 | `ZSTDMT_createBufferPool`     | `zstdmt_compress.c` |
| <0.1% |    192 B |       1 | `AIO_WritePool_create`        | `<unknown>`         |
| <0.1% |    176 B |       4 | `UTIL_allocateFileNamesTable` | `<unknown>`         |
| <0.1% |    136 B |       1 | `FIO_createPreferences`       | `<unknown>`         |
| <0.1% |     96 B |       2 | `ZSTDMT_createCCtxPool`       | `zstdmt_compress.c` |
| <0.1% |     40 B |       1 | `FIO_createContext`           | `<unknown>`         |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Ours

|     % |     Size | Objects | Function                  | Location            |
| ----: | -------: | ------: | ------------------------- | ------------------- |
| 37.3% | 49.2 MiB |       1 | `ZSTD_resetCCtx_internal` | `zstd_compress.c`   |
| 12.2% | 16.1 MiB |       1 | `ZSTDMT_getBuffer`        | `zstdmt_compress.c` |
|  1.9% | 2.51 MiB |      40 | `AIO_IOPool_init`         | `fileio_asyncio.c`  |
| <0.1% | 1.78 KiB |       1 | `ZSTDMT_createJobsTable`  | `zstdmt_compress.c` |
| <0.1% |    288 B |       4 | `ZSTDMT_createBufferPool` | `zstdmt_compress.c` |
| <0.1% |     96 B |       2 | `ZSTDMT_createCCtxPool`   | `zstdmt_compress.c` |

##### Native

|     % |     Size | Objects | Function                      | Location    |
| ----: | -------: | ------: | ----------------------------- | ----------- |
| 48.5% |   64 MiB |       1 | `ZSTDMT_initCStream_internal` | `<unknown>` |
|  0.2% |  256 KiB |       2 | `AIO_ReadPool_create`         | `<unknown>` |
| <0.1% |    8 KiB |       2 | `_IO_file_doallocate`         | `<unknown>` |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx`             | `<unknown>` |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx_advanced`    | `<unknown>` |
| <0.1% | 3.05 KiB |       1 | `ZSTDMT_createCCtx_advanced`  | `<unknown>` |
| <0.1% | 1.05 KiB |       9 | `POOL_create_advanced`        | `<unknown>` |
| <0.1% |    472 B |       1 | `_IO_fdopen`                  | `<unknown>` |
| <0.1% |    192 B |       1 | `AIO_WritePool_create`        | `<unknown>` |
| <0.1% |    176 B |       4 | `UTIL_allocateFileNamesTable` | `<unknown>` |
| <0.1% |    136 B |       1 | `FIO_createPreferences`       | `<unknown>` |
| <0.1% |     40 B |       1 | `FIO_createContext`           | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `ZSTDMT_initCStream_internal` (`<unknown>`)

|      % |   Size | Objects | Caller                           | Location          |
| -----: | -----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 64 MiB |       1 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

##### `ZSTD_resetCCtx_internal` (`zstd_compress.c`)

|      % |     Size | Objects | Caller                        | Location          |
| -----: | -------: | ------: | ----------------------------- | ----------------- |
| 100.0% | 49.2 MiB |       1 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |

##### `ZSTDMT_getBuffer` (`zstdmt_compress.c`)

|      % |     Size | Objects | Caller                  | Location            |
| -----: | -------: | ------: | ----------------------- | ------------------- |
| 100.0% | 16.1 MiB |       1 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `AIO_IOPool_init` (`fileio_asyncio.c`)

|     % |     Size | Objects | Caller                 | Location    |
| ----: | -------: | ------: | ---------------------- | ----------- |
| 50.1% | 1.26 MiB |      20 | `AIO_WritePool_create` | `<unknown>` |
| 49.9% | 1.25 MiB |      20 | `AIO_ReadPool_create`  | `<unknown>` |

##### `AIO_ReadPool_create` (`<unknown>`)

|      % |    Size | Objects | Caller                 | Location   |
| -----: | ------: | ------: | ---------------------- | ---------- |
| 100.0% | 256 KiB |       2 | `FIO_createCResources` | `fileio.c` |

##### `_IO_file_doallocate` (`<unknown>`)

|     % |  Size | Objects | Caller           | Location    |
| ----: | ----: | ------: | ---------------- | ----------- |
| 50.0% | 4 KiB |       1 | `_IO_doallocbuf` | `<unknown>` |
| 50.0% | 4 KiB |       1 | `_IO_setvbuf`    | `<unknown>` |

##### `ZSTD_createCCtx` (`<unknown>`)

|      % |     Size | Objects | Caller                 | Location   |
| -----: | -------: | ------: | ---------------------- | ---------- |
| 100.0% | 5.13 KiB |       1 | `FIO_createCResources` | `fileio.c` |

##### `ZSTD_createCCtx_advanced` (`<unknown>`)

|      % |     Size | Objects | Caller                  | Location            |
| -----: | -------: | ------: | ----------------------- | ------------------- |
| 100.0% | 5.13 KiB |       1 | `ZSTDMT_createCCtxPool` | `zstdmt_compress.c` |

##### `ZSTDMT_createCCtx_advanced` (`<unknown>`)

|      % |     Size | Objects | Caller                           | Location          |
| -----: | -------: | ------: | -------------------------------- | ----------------- |
| 100.0% | 3.05 KiB |       1 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

##### `ZSTDMT_createJobsTable` (`zstdmt_compress.c`)

|      % |     Size | Objects | Caller                       | Location    |
| -----: | -------: | ------: | ---------------------------- | ----------- |
| 100.0% | 1.78 KiB |       1 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

|     % |  Size | Objects | Caller             | Location    |
| ----: | ----: | ------: | ------------------ | ----------- |
| 65.9% | 912 B |       3 | `_dl_allocate_tls` | `<unknown>` |
| 34.1% | 472 B |       1 | `FIO_openSrcFile`  | `fileio.c`  |

##### `POOL_create_advanced` (`<unknown>`)

|     % |  Size | Objects | Caller                       | Location    |
| ----: | ----: | ------: | ---------------------------- | ----------- |
| 74.6% | 800 B |       6 | `POOL_create`                | `<unknown>` |
| 25.4% | 272 B |       3 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `_IO_fdopen` (`<unknown>`)

|      % |  Size | Objects | Caller            | Location   |
| -----: | ----: | ------: | ----------------- | ---------- |
| 100.0% | 472 B |       1 | `FIO_openDstFile` | `fileio.c` |

##### `ZSTDMT_createBufferPool` (`zstdmt_compress.c`)

|      % |  Size | Objects | Caller                       | Location    |
| -----: | ----: | ------: | ---------------------------- | ----------- |
| 100.0% | 288 B |       4 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `AIO_WritePool_create` (`<unknown>`)

|      % |  Size | Objects | Caller                 | Location   |
| -----: | ----: | ------: | ---------------------- | ---------- |
| 100.0% | 192 B |       1 | `FIO_createCResources` | `fileio.c` |

##### `UTIL_allocateFileNamesTable` (`<unknown>`)

|      % |  Size | Objects | Caller | Location    |
| -----: | ----: | ------: | ------ | ----------- |
| 100.0% | 176 B |       4 | `main` | `<unknown>` |

##### `FIO_createPreferences` (`<unknown>`)

|      % |  Size | Objects | Caller | Location    |
| -----: | ----: | ------: | ------ | ----------- |
| 100.0% | 136 B |       1 | `main` | `<unknown>` |

##### `ZSTDMT_createCCtxPool` (`zstdmt_compress.c`)

|      % | Size | Objects | Caller                       | Location    |
| -----: | ---: | ------: | ---------------------------- | ----------- |
| 100.0% | 96 B |       2 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `FIO_createContext` (`<unknown>`)

|      % | Size | Objects | Caller | Location    |
| -----: | ---: | ------: | ------ | ----------- |
| 100.0% | 40 B |       1 | `main` | `<unknown>` |

### Total size

Functions with the most bytes allocated within the function and its callees.

|      % |     Size | Objects | Function                               | Location            |
| -----: | -------: | ------: | -------------------------------------- | ------------------- |
| 100.0% |  132 MiB |      78 | `(anonymous)`                          | `<unknown>`         |
|  50.6% | 66.8 MiB |      75 | `main`                                 | `<unknown>`         |
|  50.6% | 66.8 MiB |      75 | `__libc_start_main`                    | `<unknown>`         |
|  50.6% | 66.8 MiB |      75 | `_start`                               | `<unknown>`         |
|  50.6% | 66.8 MiB |      69 | `FIO_compressFilename`                 | `<unknown>`         |
|  49.4% | 65.3 MiB |       3 | `POOL_thread`                          | `pool.c`            |
|  49.4% | 65.3 MiB |       2 | `ZSTDMT_compressionJob`                | `zstdmt_compress.c` |
|  48.5% |   64 MiB |      17 | `FIO_compressFilename_srcFile`         | `fileio.c`          |
|  48.5% |   64 MiB |      14 | `ZSTD_CCtx_init_compressStream2`       | `zstd_compress.c`   |
|  48.5% |   64 MiB |      14 | `ZSTD_compressStream2`                 | `<unknown>`         |
|  48.5% |   64 MiB |       1 | `ZSTDMT_initCStream_internal`          | `<unknown>`         |
|  37.3% | 49.2 MiB |       1 | `ZSTD_resetCCtx_internal`              | `zstd_compress.c`   |
|  37.3% | 49.2 MiB |       1 | `ZSTD_compressBegin_internal`          | `zstd_compress.c`   |
|  37.3% | 49.2 MiB |       1 | `ZSTD_compressBegin_advanced_internal` | `<unknown>`         |
|  12.2% | 16.1 MiB |       1 | `ZSTDMT_getBuffer`                     | `zstdmt_compress.c` |
|   2.1% | 2.76 MiB |      52 | `FIO_createCResources`                 | `fileio.c`          |
|   1.9% | 2.51 MiB |      48 | `AIO_IOPool_init`                      | `fileio_asyncio.c`  |
|   1.1% |  1.5 MiB |      26 | `AIO_ReadPool_create`                  | `<unknown>`         |
|   1.0% | 1.26 MiB |      25 | `AIO_WritePool_create`                 | `<unknown>`         |
|  <0.1% | 10.9 KiB |      13 | `ZSTDMT_createCCtx_advanced`           | `<unknown>`         |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Ours

|     % |     Size | Objects | Function                         | Location            |
| ----: | -------: | ------: | -------------------------------- | ------------------- |
| 49.4% | 65.3 MiB |       3 | `POOL_thread`                    | `pool.c`            |
| 49.4% | 65.3 MiB |       2 | `ZSTDMT_compressionJob`          | `zstdmt_compress.c` |
| 48.5% |   64 MiB |      17 | `FIO_compressFilename_srcFile`   | `fileio.c`          |
| 48.5% |   64 MiB |      14 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c`   |
| 37.3% | 49.2 MiB |       1 | `ZSTD_resetCCtx_internal`        | `zstd_compress.c`   |
| 37.3% | 49.2 MiB |       1 | `ZSTD_compressBegin_internal`    | `zstd_compress.c`   |
| 12.2% | 16.1 MiB |       1 | `ZSTDMT_getBuffer`               | `zstdmt_compress.c` |
|  2.1% | 2.76 MiB |      52 | `FIO_createCResources`           | `fileio.c`          |
|  1.9% | 2.51 MiB |      48 | `AIO_IOPool_init`                | `fileio_asyncio.c`  |
| <0.1% | 5.23 KiB |       3 | `ZSTDMT_createCCtxPool`          | `zstdmt_compress.c` |
| <0.1% | 4.46 KiB |       2 | `FIO_openDstFile`                | `fileio.c`          |
| <0.1% |    4 KiB |       1 | `AIO_ReadPool_executeReadJob`    | `fileio_asyncio.c`  |
| <0.1% | 1.78 KiB |       1 | `ZSTDMT_createJobsTable`         | `zstdmt_compress.c` |
| <0.1% |    472 B |       1 | `FIO_openSrcFile`                | `fileio.c`          |
| <0.1% |    288 B |       4 | `ZSTDMT_createBufferPool`        | `zstdmt_compress.c` |

##### Native

|     % |     Size | Objects | Function                               | Location    |
| ----: | -------: | ------: | -------------------------------------- | ----------- |
| 50.6% | 66.8 MiB |      75 | `main`                                 | `<unknown>` |
| 50.6% | 66.8 MiB |      75 | `__libc_start_main`                    | `<unknown>` |
| 50.6% | 66.8 MiB |      75 | `_start`                               | `<unknown>` |
| 50.6% | 66.8 MiB |      69 | `FIO_compressFilename`                 | `<unknown>` |
| 48.5% |   64 MiB |      14 | `ZSTD_compressStream2`                 | `<unknown>` |
| 48.5% |   64 MiB |       1 | `ZSTDMT_initCStream_internal`          | `<unknown>` |
| 37.3% | 49.2 MiB |       1 | `ZSTD_compressBegin_advanced_internal` | `<unknown>` |
|  1.1% |  1.5 MiB |      26 | `AIO_ReadPool_create`                  | `<unknown>` |
|  1.0% | 1.26 MiB |      25 | `AIO_WritePool_create`                 | `<unknown>` |
| <0.1% | 10.9 KiB |      13 | `ZSTDMT_createCCtx_advanced`           | `<unknown>` |
| <0.1% |    8 KiB |       2 | `_IO_file_doallocate`                  | `<unknown>` |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx`                      | `<unknown>` |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx_advanced`             | `<unknown>` |
| <0.1% |    4 KiB |       1 | `_IO_doallocbuf`                       | `<unknown>` |
| <0.1% |    4 KiB |       1 | `_IO_fread`                            | `<unknown>` |
| <0.1% |    4 KiB |       1 | `_IO_setvbuf`                          | `<unknown>` |
| <0.1% | 1.94 KiB |      12 | `POOL_create_advanced`                 | `<unknown>` |
| <0.1% | 1.38 KiB |       8 | `POOL_create`                          | `<unknown>` |
| <0.1% |    912 B |       3 | `_dl_allocate_tls`                     | `<unknown>` |
| <0.1% |    912 B |       3 | `pthread_create`                       | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|     % |     Size | Objects | Caller              | Location    |
| ----: | -------: | ------: | ------------------- | ----------- |
| 50.6% | 66.8 MiB |      75 | `__libc_start_main` | `<unknown>` |
| 49.4% | 65.3 MiB |       3 | `(anonymous)`       | `<unknown>` |
| <0.1% |    4 KiB |       1 | `_IO_fread`         | `<unknown>` |
| <0.1% |    912 B |       3 | `_dl_allocate_tls`  | `<unknown>` |
| <0.1% |    472 B |       1 | `FIO_openSrcFile`   | `fileio.c`  |

##### `main` (`<unknown>`)

|      % |     Size | Objects | Caller        | Location    |
| -----: | -------: | ------: | ------------- | ----------- |
| 100.0% | 66.8 MiB |      75 | `(anonymous)` | `<unknown>` |

##### `__libc_start_main` (`<unknown>`)

|      % |     Size | Objects | Caller   | Location    |
| -----: | -------: | ------: | -------- | ----------- |
| 100.0% | 66.8 MiB |      75 | `_start` | `<unknown>` |

##### `FIO_compressFilename` (`<unknown>`)

|      % |     Size | Objects | Caller | Location    |
| -----: | -------: | ------: | ------ | ----------- |
| 100.0% | 66.8 MiB |      69 | `main` | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|      % |     Size | Objects | Caller        | Location    |
| -----: | -------: | ------: | ------------- | ----------- |
| 100.0% | 65.3 MiB |       3 | `(anonymous)` | `<unknown>` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|      % |     Size | Objects | Caller        | Location |
| -----: | -------: | ------: | ------------- | -------- |
| 100.0% | 65.3 MiB |       2 | `POOL_thread` | `pool.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|      % |   Size | Objects | Caller                 | Location    |
| -----: | -----: | ------: | ---------------------- | ----------- |
| 100.0% | 64 MiB |      17 | `FIO_compressFilename` | `<unknown>` |

##### `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`)

|      % |   Size | Objects | Caller                 | Location    |
| -----: | -----: | ------: | ---------------------- | ----------- |
| 100.0% | 64 MiB |      14 | `ZSTD_compressStream2` | `<unknown>` |

##### `ZSTD_compressStream2` (`<unknown>`)

|      % |   Size | Objects | Caller                         | Location   |
| -----: | -----: | ------: | ------------------------------ | ---------- |
| 100.0% | 64 MiB |      14 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `ZSTDMT_initCStream_internal` (`<unknown>`)

|      % |   Size | Objects | Caller                           | Location          |
| -----: | -----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 64 MiB |       1 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

##### `ZSTD_resetCCtx_internal` (`zstd_compress.c`)

|      % |     Size | Objects | Caller                        | Location          |
| -----: | -------: | ------: | ----------------------------- | ----------------- |
| 100.0% | 49.2 MiB |       1 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |

##### `ZSTD_compressBegin_internal` (`zstd_compress.c`)

|      % |     Size | Objects | Caller                                 | Location    |
| -----: | -------: | ------: | -------------------------------------- | ----------- |
| 100.0% | 49.2 MiB |       1 | `ZSTD_compressBegin_advanced_internal` | `<unknown>` |

##### `ZSTD_compressBegin_advanced_internal` (`<unknown>`)

|      % |     Size | Objects | Caller                  | Location            |
| -----: | -------: | ------: | ----------------------- | ------------------- |
| 100.0% | 49.2 MiB |       1 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTDMT_getBuffer` (`zstdmt_compress.c`)

|      % |     Size | Objects | Caller                  | Location            |
| -----: | -------: | ------: | ----------------------- | ------------------- |
| 100.0% | 16.1 MiB |       1 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `FIO_createCResources` (`fileio.c`)

|      % |     Size | Objects | Caller                 | Location    |
| -----: | -------: | ------: | ---------------------- | ----------- |
| 100.0% | 2.76 MiB |      52 | `FIO_compressFilename` | `<unknown>` |

##### `AIO_IOPool_init` (`fileio_asyncio.c`)

|     % |     Size | Objects | Caller                 | Location    |
| ----: | -------: | ------: | ---------------------- | ----------- |
| 50.1% | 1.26 MiB |      24 | `AIO_WritePool_create` | `<unknown>` |
| 49.9% | 1.25 MiB |      24 | `AIO_ReadPool_create`  | `<unknown>` |

##### `AIO_ReadPool_create` (`<unknown>`)

|      % |    Size | Objects | Caller                 | Location   |
| -----: | ------: | ------: | ---------------------- | ---------- |
| 100.0% | 1.5 MiB |      26 | `FIO_createCResources` | `fileio.c` |

##### `AIO_WritePool_create` (`<unknown>`)

|      % |     Size | Objects | Caller                 | Location   |
| -----: | -------: | ------: | ---------------------- | ---------- |
| 100.0% | 1.26 MiB |      25 | `FIO_createCResources` | `fileio.c` |

##### `ZSTDMT_createCCtx_advanced` (`<unknown>`)

|      % |     Size | Objects | Caller                           | Location          |
| -----: | -------: | ------: | -------------------------------- | ----------------- |
| 100.0% | 10.9 KiB |      13 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

##### `_IO_file_doallocate` (`<unknown>`)

|     % |  Size | Objects | Caller           | Location    |
| ----: | ----: | ------: | ---------------- | ----------- |
| 50.0% | 4 KiB |       1 | `_IO_doallocbuf` | `<unknown>` |
| 50.0% | 4 KiB |       1 | `_IO_setvbuf`    | `<unknown>` |

##### `ZSTDMT_createCCtxPool` (`zstdmt_compress.c`)

|      % |     Size | Objects | Caller                       | Location    |
| -----: | -------: | ------: | ---------------------------- | ----------- |
| 100.0% | 5.23 KiB |       3 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `ZSTD_createCCtx` (`<unknown>`)

|      % |     Size | Objects | Caller                 | Location   |
| -----: | -------: | ------: | ---------------------- | ---------- |
| 100.0% | 5.13 KiB |       1 | `FIO_createCResources` | `fileio.c` |

##### `ZSTD_createCCtx_advanced` (`<unknown>`)

|      % |     Size | Objects | Caller                  | Location            |
| -----: | -------: | ------: | ----------------------- | ------------------- |
| 100.0% | 5.13 KiB |       1 | `ZSTDMT_createCCtxPool` | `zstdmt_compress.c` |

##### `FIO_openDstFile` (`fileio.c`)

|      % |     Size | Objects | Caller                         | Location   |
| -----: | -------: | ------: | ------------------------------ | ---------- |
| 100.0% | 4.46 KiB |       2 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`)

|      % |  Size | Objects | Caller        | Location |
| -----: | ----: | ------: | ------------- | -------- |
| 100.0% | 4 KiB |       1 | `POOL_thread` | `pool.c` |

##### `_IO_doallocbuf` (`<unknown>`)

|      % |  Size | Objects | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 4 KiB |       1 | `(anonymous)` | `<unknown>` |

##### `_IO_fread` (`<unknown>`)

|      % |  Size | Objects | Caller                        | Location           |
| -----: | ----: | ------: | ----------------------------- | ------------------ |
| 100.0% | 4 KiB |       1 | `AIO_ReadPool_executeReadJob` | `fileio_asyncio.c` |

##### `_IO_setvbuf` (`<unknown>`)

|      % |  Size | Objects | Caller            | Location   |
| -----: | ----: | ------: | ----------------- | ---------- |
| 100.0% | 4 KiB |       1 | `FIO_openDstFile` | `fileio.c` |

##### `POOL_create_advanced` (`<unknown>`)

|     % |     Size | Objects | Caller                       | Location    |
| ----: | -------: | ------: | ---------------------------- | ----------- |
| 71.0% | 1.38 KiB |       8 | `POOL_create`                | `<unknown>` |
| 29.0% |    576 B |       4 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `ZSTDMT_createJobsTable` (`zstdmt_compress.c`)

|      % |     Size | Objects | Caller                       | Location    |
| -----: | -------: | ------: | ---------------------------- | ----------- |
| 100.0% | 1.78 KiB |       1 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `POOL_create` (`<unknown>`)

|      % |     Size | Objects | Caller            | Location           |
| -----: | -------: | ------: | ----------------- | ------------------ |
| 100.0% | 1.38 KiB |       8 | `AIO_IOPool_init` | `fileio_asyncio.c` |

##### `_dl_allocate_tls` (`<unknown>`)

|      % |  Size | Objects | Caller           | Location    |
| -----: | ----: | ------: | ---------------- | ----------- |
| 100.0% | 912 B |       3 | `pthread_create` | `<unknown>` |

##### `pthread_create` (`<unknown>`)

|      % |  Size | Objects | Caller                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 912 B |       3 | `POOL_create_advanced` | `<unknown>` |

##### `FIO_openSrcFile` (`fileio.c`)

|      % |  Size | Objects | Caller                         | Location   |
| -----: | ----: | ------: | ------------------------------ | ---------- |
| 100.0% | 472 B |       1 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `ZSTDMT_createBufferPool` (`zstdmt_compress.c`)

|      % |  Size | Objects | Caller                       | Location    |
| -----: | ----: | ------: | ---------------------------- | ----------- |
| 100.0% | 288 B |       4 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|     % |     Size | Objects | Callee           | Location    |
| ----: | -------: | ------: | ---------------- | ----------- |
| 50.6% | 66.8 MiB |      75 | `main`           | `<unknown>` |
| 49.4% | 65.3 MiB |       3 | `POOL_thread`    | `pool.c`    |
| 49.4% | 65.3 MiB |       3 | `(anonymous)`    | `<unknown>` |
| <0.1% |    4 KiB |       1 | `_IO_doallocbuf` | `<unknown>` |

##### `main` (`<unknown>`)

|      % |     Size | Objects | Callee                        | Location    |
| -----: | -------: | ------: | ----------------------------- | ----------- |
| 100.0% | 66.8 MiB |      69 | `FIO_compressFilename`        | `<unknown>` |
|  <0.1% |    176 B |       4 | `UTIL_allocateFileNamesTable` | `<unknown>` |
|  <0.1% |    136 B |       1 | `FIO_createPreferences`       | `<unknown>` |
|  <0.1% |     40 B |       1 | `FIO_createContext`           | `<unknown>` |

##### `__libc_start_main` (`<unknown>`)

|      % |     Size | Objects | Callee        | Location    |
| -----: | -------: | ------: | ------------- | ----------- |
| 100.0% | 66.8 MiB |      75 | `(anonymous)` | `<unknown>` |

##### `_start` (`<unknown>`)

|      % |     Size | Objects | Callee              | Location    |
| -----: | -------: | ------: | ------------------- | ----------- |
| 100.0% | 66.8 MiB |      75 | `__libc_start_main` | `<unknown>` |

##### `FIO_compressFilename` (`<unknown>`)

|     % |     Size | Objects | Callee                         | Location   |
| ----: | -------: | ------: | ------------------------------ | ---------- |
| 95.9% |   64 MiB |      17 | `FIO_compressFilename_srcFile` | `fileio.c` |
|  4.1% | 2.76 MiB |      52 | `FIO_createCResources`         | `fileio.c` |

##### `POOL_thread` (`pool.c`)

|      % |     Size | Objects | Callee                        | Location            |
| -----: | -------: | ------: | ----------------------------- | ------------------- |
| 100.0% | 65.3 MiB |       2 | `ZSTDMT_compressionJob`       | `zstdmt_compress.c` |
|  <0.1% |    4 KiB |       1 | `AIO_ReadPool_executeReadJob` | `fileio_asyncio.c`  |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|     % |     Size | Objects | Callee                                 | Location            |
| ----: | -------: | ------: | -------------------------------------- | ------------------- |
| 75.4% | 49.2 MiB |       1 | `ZSTD_compressBegin_advanced_internal` | `<unknown>`         |
| 24.6% | 16.1 MiB |       1 | `ZSTDMT_getBuffer`                     | `zstdmt_compress.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|      % |     Size | Objects | Callee                 | Location    |
| -----: | -------: | ------: | ---------------------- | ----------- |
| 100.0% |   64 MiB |      14 | `ZSTD_compressStream2` | `<unknown>` |
|  <0.1% | 4.46 KiB |       2 | `FIO_openDstFile`      | `fileio.c`  |
|  <0.1% |    472 B |       1 | `FIO_openSrcFile`      | `fileio.c`  |

##### `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`)

|      % |     Size | Objects | Callee                        | Location    |
| -----: | -------: | ------: | ----------------------------- | ----------- |
| 100.0% |   64 MiB |       1 | `ZSTDMT_initCStream_internal` | `<unknown>` |
|  <0.1% | 10.9 KiB |      13 | `ZSTDMT_createCCtx_advanced`  | `<unknown>` |

##### `ZSTD_compressStream2` (`<unknown>`)

|      % |   Size | Objects | Callee                           | Location          |
| -----: | -----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 64 MiB |      14 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

##### `ZSTD_compressBegin_internal` (`zstd_compress.c`)

|      % |     Size | Objects | Callee                    | Location          |
| -----: | -------: | ------: | ------------------------- | ----------------- |
| 100.0% | 49.2 MiB |       1 | `ZSTD_resetCCtx_internal` | `zstd_compress.c` |

##### `ZSTD_compressBegin_advanced_internal` (`<unknown>`)

|      % |     Size | Objects | Callee                        | Location          |
| -----: | -------: | ------: | ----------------------------- | ----------------- |
| 100.0% | 49.2 MiB |       1 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |

##### `FIO_createCResources` (`fileio.c`)

|     % |     Size | Objects | Callee                 | Location    |
| ----: | -------: | ------: | ---------------------- | ----------- |
| 54.3% |  1.5 MiB |      26 | `AIO_ReadPool_create`  | `<unknown>` |
| 45.5% | 1.26 MiB |      25 | `AIO_WritePool_create` | `<unknown>` |
|  0.2% | 5.13 KiB |       1 | `ZSTD_createCCtx`      | `<unknown>` |

##### `AIO_IOPool_init` (`fileio_asyncio.c`)

|    % |     Size | Objects | Callee        | Location    |
| ---: | -------: | ------: | ------------- | ----------- |
| 0.1% | 1.38 KiB |       8 | `POOL_create` | `<unknown>` |

##### `AIO_ReadPool_create` (`<unknown>`)

|     % |     Size | Objects | Callee            | Location           |
| ----: | -------: | ------: | ----------------- | ------------------ |
| 83.3% | 1.25 MiB |      24 | `AIO_IOPool_init` | `fileio_asyncio.c` |

##### `AIO_WritePool_create` (`<unknown>`)

|      % |     Size | Objects | Callee            | Location           |
| -----: | -------: | ------: | ----------------- | ------------------ |
| 100.0% | 1.26 MiB |      24 | `AIO_IOPool_init` | `fileio_asyncio.c` |

##### `ZSTDMT_createCCtx_advanced` (`<unknown>`)

|     % |     Size | Objects | Callee                    | Location            |
| ----: | -------: | ------: | ------------------------- | ------------------- |
| 48.0% | 5.23 KiB |       3 | `ZSTDMT_createCCtxPool`   | `zstdmt_compress.c` |
| 16.3% | 1.78 KiB |       1 | `ZSTDMT_createJobsTable`  | `zstdmt_compress.c` |
|  5.2% |    576 B |       4 | `POOL_create_advanced`    | `<unknown>`         |
|  2.6% |    288 B |       4 | `ZSTDMT_createBufferPool` | `zstdmt_compress.c` |

##### `ZSTDMT_createCCtxPool` (`zstdmt_compress.c`)

|     % |     Size | Objects | Callee                     | Location    |
| ----: | -------: | ------: | -------------------------- | ----------- |
| 98.2% | 5.13 KiB |       1 | `ZSTD_createCCtx_advanced` | `<unknown>` |

##### `FIO_openDstFile` (`fileio.c`)

|     % |  Size | Objects | Callee        | Location    |
| ----: | ----: | ------: | ------------- | ----------- |
| 89.7% | 4 KiB |       1 | `_IO_setvbuf` | `<unknown>` |
| 10.3% | 472 B |       1 | `_IO_fdopen`  | `<unknown>` |

##### `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`)

|      % |  Size | Objects | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 4 KiB |       1 | `_IO_fread` | `<unknown>` |

##### `_IO_doallocbuf` (`<unknown>`)

|      % |  Size | Objects | Callee                | Location    |
| -----: | ----: | ------: | --------------------- | ----------- |
| 100.0% | 4 KiB |       1 | `_IO_file_doallocate` | `<unknown>` |

##### `_IO_fread` (`<unknown>`)

|      % |  Size | Objects | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 4 KiB |       1 | `(anonymous)` | `<unknown>` |

##### `_IO_setvbuf` (`<unknown>`)

|      % |  Size | Objects | Callee                | Location    |
| -----: | ----: | ------: | --------------------- | ----------- |
| 100.0% | 4 KiB |       1 | `_IO_file_doallocate` | `<unknown>` |

##### `POOL_create_advanced` (`<unknown>`)

|     % |  Size | Objects | Callee           | Location    |
| ----: | ----: | ------: | ---------------- | ----------- |
| 46.0% | 912 B |       3 | `pthread_create` | `<unknown>` |

##### `POOL_create` (`<unknown>`)

|      % |     Size | Objects | Callee                 | Location    |
| -----: | -------: | ------: | ---------------------- | ----------- |
| 100.0% | 1.38 KiB |       8 | `POOL_create_advanced` | `<unknown>` |

##### `_dl_allocate_tls` (`<unknown>`)

|      % |  Size | Objects | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 912 B |       3 | `(anonymous)` | `<unknown>` |

##### `pthread_create` (`<unknown>`)

|      % |  Size | Objects | Callee             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 912 B |       3 | `_dl_allocate_tls` | `<unknown>` |

##### `FIO_openSrcFile` (`fileio.c`)

|      % |  Size | Objects | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 472 B |       1 | `(anonymous)` | `<unknown>` |

## Hottest call stacks

Call stacks with the most bytes allocated in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                     |
| ----: | -------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 48.5% |   64 MiB |       1 | `ZSTDMT_initCStream_internal` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                 |
| 37.3% | 49.2 MiB |       1 | `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                              |
| 12.2% | 16.1 MiB |       1 | `ZSTDMT_getBuffer` (`zstdmt_compress.c`) ← `ZSTDMT_compressionJob` ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                                                                  |
|  1.0% | 1.26 MiB |      20 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                       |
|  0.9% | 1.25 MiB |      20 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                        |
|  0.2% |  256 KiB |       2 | `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                 |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                     |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx_advanced` ← `ZSTDMT_createCCtxPool` (`zstdmt_compress.c`) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`     |
| <0.1% |    4 KiB |       1 | `_IO_file_doallocate` ← `_IO_doallocbuf` ← `(anonymous)` ← `_IO_fread` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                         |
| <0.1% |    4 KiB |       1 | `_IO_file_doallocate` ← `_IO_setvbuf` ← `FIO_openDstFile` (`fileio.c`) ← `FIO_compressFilename_srcFile` ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                     |
| <0.1% | 3.05 KiB |       1 | `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                  |
| <0.1% | 1.78 KiB |       1 | `ZSTDMT_createJobsTable` (`zstdmt_compress.c`) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                 |
| <0.1% |    472 B |       1 | `_IO_fdopen` ← `FIO_openDstFile` (`fileio.c`) ← `FIO_compressFilename_srcFile` ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                              |
| <0.1% |    472 B |       1 | `(anonymous)` ← `FIO_openSrcFile` (`fileio.c`) ← `FIO_compressFilename_srcFile` ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                             |
| <0.1% |    400 B |       3 | `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                               |
| <0.1% |    400 B |       3 | `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                              |
| <0.1% |    304 B |       1 | `(anonymous)` ← `_dl_allocate_tls` ← `pthread_create` ← `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                      |
| <0.1% |    304 B |       1 | `(anonymous)` ← `_dl_allocate_tls` ← `pthread_create` ← `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                       |
| <0.1% |    304 B |       1 | `(anonymous)` ← `_dl_allocate_tls` ← `pthread_create` ← `POOL_create_advanced` ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start` |
| <0.1% |    288 B |       4 | `ZSTDMT_createBufferPool` (`zstdmt_compress.c`) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                |

# Retained heap profile

Retained 912 B over 3 objects (304 B per object).

| Category |      % |  Size | Objects |
| -------- | -----: | ----: | ------: |
| Unknown  | 100.0% | 912 B |       3 |

## Call tree

Call paths to the hottest functions.

```
└── 912 B (100.0%) [[via 2 frames]] (anonymous)
```

## Hottest functions

### Self size

Functions with the most bytes retained within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Unknown

|      % |  Size | Objects | Function      | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 912 B |       3 | `(anonymous)` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `(anonymous)` (`<unknown>`)

|      % |  Size | Objects | Caller             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 912 B |       3 | `_dl_allocate_tls` | `<unknown>` |

### Total size

Functions with the most bytes retained within the function and its callees.

|      % |  Size | Objects | Function                         | Location           |
| -----: | ----: | ------: | -------------------------------- | ------------------ |
| 100.0% | 912 B |       3 | `(anonymous)`                    | `<unknown>`        |
| 100.0% | 912 B |       3 | `_dl_allocate_tls`               | `<unknown>`        |
| 100.0% | 912 B |       3 | `pthread_create`                 | `<unknown>`        |
| 100.0% | 912 B |       3 | `POOL_create_advanced`           | `<unknown>`        |
| 100.0% | 912 B |       3 | `FIO_compressFilename`           | `<unknown>`        |
| 100.0% | 912 B |       3 | `main`                           | `<unknown>`        |
| 100.0% | 912 B |       3 | `__libc_start_main`              | `<unknown>`        |
| 100.0% | 912 B |       3 | `_start`                         | `<unknown>`        |
|  66.7% | 608 B |       2 | `POOL_create`                    | `<unknown>`        |
|  66.7% | 608 B |       2 | `AIO_IOPool_init`                | `fileio_asyncio.c` |
|  66.7% | 608 B |       2 | `FIO_createCResources`           | `fileio.c`         |
|  33.3% | 304 B |       1 | `AIO_WritePool_create`           | `<unknown>`        |
|  33.3% | 304 B |       1 | `AIO_ReadPool_create`            | `<unknown>`        |
|  33.3% | 304 B |       1 | `ZSTDMT_createCCtx_advanced`     | `<unknown>`        |
|  33.3% | 304 B |       1 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c`  |
|  33.3% | 304 B |       1 | `ZSTD_compressStream2`           | `<unknown>`        |
|  33.3% | 304 B |       1 | `FIO_compressFilename_srcFile`   | `fileio.c`         |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Unknown

|      % |  Size | Objects | Function      | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 912 B |       3 | `(anonymous)` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|      % |  Size | Objects | Caller              | Location    |
| -----: | ----: | ------: | ------------------- | ----------- |
| 100.0% | 912 B |       3 | `_dl_allocate_tls`  | `<unknown>` |
| 100.0% | 912 B |       3 | `__libc_start_main` | `<unknown>` |

##### `_dl_allocate_tls` (`<unknown>`)

|      % |  Size | Objects | Caller           | Location    |
| -----: | ----: | ------: | ---------------- | ----------- |
| 100.0% | 912 B |       3 | `pthread_create` | `<unknown>` |

##### `pthread_create` (`<unknown>`)

|      % |  Size | Objects | Caller                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 912 B |       3 | `POOL_create_advanced` | `<unknown>` |

##### `POOL_create_advanced` (`<unknown>`)

|     % |  Size | Objects | Caller                       | Location    |
| ----: | ----: | ------: | ---------------------------- | ----------- |
| 66.7% | 608 B |       2 | `POOL_create`                | `<unknown>` |
| 33.3% | 304 B |       1 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `FIO_compressFilename` (`<unknown>`)

|      % |  Size | Objects | Caller | Location    |
| -----: | ----: | ------: | ------ | ----------- |
| 100.0% | 912 B |       3 | `main` | `<unknown>` |

##### `main` (`<unknown>`)

|      % |  Size | Objects | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 912 B |       3 | `(anonymous)` | `<unknown>` |

##### `__libc_start_main` (`<unknown>`)

|      % |  Size | Objects | Caller   | Location    |
| -----: | ----: | ------: | -------- | ----------- |
| 100.0% | 912 B |       3 | `_start` | `<unknown>` |

##### `POOL_create` (`<unknown>`)

|      % |  Size | Objects | Caller            | Location           |
| -----: | ----: | ------: | ----------------- | ------------------ |
| 100.0% | 608 B |       2 | `AIO_IOPool_init` | `fileio_asyncio.c` |

##### `AIO_IOPool_init` (`fileio_asyncio.c`)

|     % |  Size | Objects | Caller                 | Location    |
| ----: | ----: | ------: | ---------------------- | ----------- |
| 50.0% | 304 B |       1 | `AIO_WritePool_create` | `<unknown>` |
| 50.0% | 304 B |       1 | `AIO_ReadPool_create`  | `<unknown>` |

##### `FIO_createCResources` (`fileio.c`)

|      % |  Size | Objects | Caller                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 608 B |       2 | `FIO_compressFilename` | `<unknown>` |

##### `AIO_WritePool_create` (`<unknown>`)

|      % |  Size | Objects | Caller                 | Location   |
| -----: | ----: | ------: | ---------------------- | ---------- |
| 100.0% | 304 B |       1 | `FIO_createCResources` | `fileio.c` |

##### `AIO_ReadPool_create` (`<unknown>`)

|      % |  Size | Objects | Caller                 | Location   |
| -----: | ----: | ------: | ---------------------- | ---------- |
| 100.0% | 304 B |       1 | `FIO_createCResources` | `fileio.c` |

##### `ZSTDMT_createCCtx_advanced` (`<unknown>`)

|      % |  Size | Objects | Caller                           | Location          |
| -----: | ----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 304 B |       1 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

##### `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`)

|      % |  Size | Objects | Caller                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 304 B |       1 | `ZSTD_compressStream2` | `<unknown>` |

##### `ZSTD_compressStream2` (`<unknown>`)

|      % |  Size | Objects | Caller                         | Location   |
| -----: | ----: | ------: | ------------------------------ | ---------- |
| 100.0% | 304 B |       1 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|      % |  Size | Objects | Caller                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 304 B |       1 | `FIO_compressFilename` | `<unknown>` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|      % |  Size | Objects | Callee | Location    |
| -----: | ----: | ------: | ------ | ----------- |
| 100.0% | 912 B |       3 | `main` | `<unknown>` |

##### `_dl_allocate_tls` (`<unknown>`)

|      % |  Size | Objects | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 912 B |       3 | `(anonymous)` | `<unknown>` |

##### `pthread_create` (`<unknown>`)

|      % |  Size | Objects | Callee             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 912 B |       3 | `_dl_allocate_tls` | `<unknown>` |

##### `POOL_create_advanced` (`<unknown>`)

|      % |  Size | Objects | Callee           | Location    |
| -----: | ----: | ------: | ---------------- | ----------- |
| 100.0% | 912 B |       3 | `pthread_create` | `<unknown>` |

##### `FIO_compressFilename` (`<unknown>`)

|     % |  Size | Objects | Callee                         | Location   |
| ----: | ----: | ------: | ------------------------------ | ---------- |
| 66.7% | 608 B |       2 | `FIO_createCResources`         | `fileio.c` |
| 33.3% | 304 B |       1 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `main` (`<unknown>`)

|      % |  Size | Objects | Callee                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 912 B |       3 | `FIO_compressFilename` | `<unknown>` |

##### `__libc_start_main` (`<unknown>`)

|      % |  Size | Objects | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 912 B |       3 | `(anonymous)` | `<unknown>` |

##### `_start` (`<unknown>`)

|      % |  Size | Objects | Callee              | Location    |
| -----: | ----: | ------: | ------------------- | ----------- |
| 100.0% | 912 B |       3 | `__libc_start_main` | `<unknown>` |

##### `POOL_create` (`<unknown>`)

|      % |  Size | Objects | Callee                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 608 B |       2 | `POOL_create_advanced` | `<unknown>` |

##### `AIO_IOPool_init` (`fileio_asyncio.c`)

|      % |  Size | Objects | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 608 B |       2 | `POOL_create` | `<unknown>` |

##### `FIO_createCResources` (`fileio.c`)

|     % |  Size | Objects | Callee                 | Location    |
| ----: | ----: | ------: | ---------------------- | ----------- |
| 50.0% | 304 B |       1 | `AIO_WritePool_create` | `<unknown>` |
| 50.0% | 304 B |       1 | `AIO_ReadPool_create`  | `<unknown>` |

##### `AIO_WritePool_create` (`<unknown>`)

|      % |  Size | Objects | Callee            | Location           |
| -----: | ----: | ------: | ----------------- | ------------------ |
| 100.0% | 304 B |       1 | `AIO_IOPool_init` | `fileio_asyncio.c` |

##### `AIO_ReadPool_create` (`<unknown>`)

|      % |  Size | Objects | Callee            | Location           |
| -----: | ----: | ------: | ----------------- | ------------------ |
| 100.0% | 304 B |       1 | `AIO_IOPool_init` | `fileio_asyncio.c` |

##### `ZSTDMT_createCCtx_advanced` (`<unknown>`)

|      % |  Size | Objects | Callee                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 304 B |       1 | `POOL_create_advanced` | `<unknown>` |

##### `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`)

|      % |  Size | Objects | Callee                       | Location    |
| -----: | ----: | ------: | ---------------------------- | ----------- |
| 100.0% | 304 B |       1 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `ZSTD_compressStream2` (`<unknown>`)

|      % |  Size | Objects | Callee                           | Location          |
| -----: | ----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 304 B |       1 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|      % |  Size | Objects | Callee                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 304 B |       1 | `ZSTD_compressStream2` | `<unknown>` |

## Hottest call stacks

Call stacks with the most bytes retained in their leaf frame.

Common call stack: `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`

|     % |  Size | Objects | Call stack                                                                                                                                                                                                                                  |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 33.3% | 304 B |       1 | `(anonymous)` ← `_dl_allocate_tls` ← `pthread_create` ← `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`)                                      |
| 33.3% | 304 B |       1 | `(anonymous)` ← `_dl_allocate_tls` ← `pthread_create` ← `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`)                                       |
| 33.3% | 304 B |       1 | `(anonymous)` ← `_dl_allocate_tls` ← `pthread_create` ← `POOL_create_advanced` ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) |

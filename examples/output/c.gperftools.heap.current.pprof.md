# Allocated heap profile

Allocated 148 MiB over 81 objects (1.83 MiB per object).

| Category |     % |     Size | Objects |
| -------- | ----: | -------: | ------: |
| Native   | 54.2% | 80.3 MiB |      32 |
| Ours     | 45.8% | 67.8 MiB |      49 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Objects | Function                      | Location                                           |
| ----: | -------: | ------: | ----------------------------- | -------------------------------------------------- |
| 54.0% |   80 MiB |       1 | `ZSTDMT_initCStream_internal` | `<unknown>`                                        |
| 33.3% | 49.2 MiB |       1 | `ZSTD_resetCCtx_internal`     | `zstd_compress.c`                                  |
| 10.8% | 16.1 MiB |       1 | `ZSTDMT_getBuffer`            | `zstdmt_compress.c`                                |
|  1.7% | 2.51 MiB |      40 | `AIO_IOPool_init`             | `fileio_asyncio.c`                                 |
|  0.2% |  256 KiB |       2 | `AIO_ReadPool_create`         | `<unknown>`                                        |
| <0.1% |    9 KiB |       3 | `0x6d1bb`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% | 5.16 KiB |       1 | `ZSTD_createCCtx`             | `<unknown>`                                        |
| <0.1% | 5.16 KiB |       1 | `ZSTD_createCCtx_advanced`    | `<unknown>`                                        |
| <0.1% | 3.63 KiB |       1 | `ZSTDMT_createJobsTable`      | `zstdmt_compress.c`                                |
| <0.1% | 3.06 KiB |       1 | `ZSTDMT_createCCtx_advanced`  | `<unknown>`                                        |
| <0.1% | 1.19 KiB |       4 | `0xf483`                      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% | 1.05 KiB |       9 | `POOL_create_advanced`        | `<unknown>`                                        |
| <0.1% |    944 B |       2 | `0x6dc07`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |    472 B |       1 | `0x6d533`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |    336 B |       4 | `ZSTDMT_createBufferPool`     | `zstdmt_compress.c`                                |
| <0.1% |    192 B |       1 | `AIO_WritePool_create`        | `<unknown>`                                        |
| <0.1% |    176 B |       4 | `UTIL_allocateFileNamesTable` | `<unknown>`                                        |
| <0.1% |    136 B |       1 | `FIO_createPreferences`       | `<unknown>`                                        |
| <0.1% |    104 B |       2 | `ZSTDMT_createCCtxPool`       | `zstdmt_compress.c`                                |
| <0.1% |     40 B |       1 | `FIO_createContext`           | `<unknown>`                                        |

#### Categories

##### Native

|     % |     Size | Objects | Function                      | Location                                           |
| ----: | -------: | ------: | ----------------------------- | -------------------------------------------------- |
| 54.0% |   80 MiB |       1 | `ZSTDMT_initCStream_internal` | `<unknown>`                                        |
|  0.2% |  256 KiB |       2 | `AIO_ReadPool_create`         | `<unknown>`                                        |
| <0.1% |    9 KiB |       3 | `0x6d1bb`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% | 5.16 KiB |       1 | `ZSTD_createCCtx`             | `<unknown>`                                        |
| <0.1% | 5.16 KiB |       1 | `ZSTD_createCCtx_advanced`    | `<unknown>`                                        |
| <0.1% | 3.06 KiB |       1 | `ZSTDMT_createCCtx_advanced`  | `<unknown>`                                        |
| <0.1% | 1.19 KiB |       4 | `0xf483`                      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% | 1.05 KiB |       9 | `POOL_create_advanced`        | `<unknown>`                                        |
| <0.1% |    944 B |       2 | `0x6dc07`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |    472 B |       1 | `0x6d533`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |    192 B |       1 | `AIO_WritePool_create`        | `<unknown>`                                        |
| <0.1% |    176 B |       4 | `UTIL_allocateFileNamesTable` | `<unknown>`                                        |
| <0.1% |    136 B |       1 | `FIO_createPreferences`       | `<unknown>`                                        |
| <0.1% |     40 B |       1 | `FIO_createContext`           | `<unknown>`                                        |

##### Ours

|     % |     Size | Objects | Function                  | Location            |
| ----: | -------: | ------: | ------------------------- | ------------------- |
| 33.3% | 49.2 MiB |       1 | `ZSTD_resetCCtx_internal` | `zstd_compress.c`   |
| 10.8% | 16.1 MiB |       1 | `ZSTDMT_getBuffer`        | `zstdmt_compress.c` |
|  1.7% | 2.51 MiB |      40 | `AIO_IOPool_init`         | `fileio_asyncio.c`  |
| <0.1% | 3.63 KiB |       1 | `ZSTDMT_createJobsTable`  | `zstdmt_compress.c` |
| <0.1% |    336 B |       4 | `ZSTDMT_createBufferPool` | `zstdmt_compress.c` |
| <0.1% |    104 B |       2 | `ZSTDMT_createCCtxPool`   | `zstdmt_compress.c` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `ZSTDMT_initCStream_internal` (`<unknown>`)

|      % |   Size | Objects | Caller                           | Location          |
| -----: | -----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 80 MiB |       1 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

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

##### `0x6d1bb` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Size | Objects | Caller    | Location                               |
| ----: | ----: | ------: | --------- | -------------------------------------- |
| 55.6% | 5 KiB |       2 | `0x7b9cf` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 44.4% | 4 KiB |       1 | `0x7004b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `ZSTD_createCCtx` (`<unknown>`)

|      % |     Size | Objects | Caller                 | Location   |
| -----: | -------: | ------: | ---------------------- | ---------- |
| 100.0% | 5.16 KiB |       1 | `FIO_createCResources` | `fileio.c` |

##### `ZSTD_createCCtx_advanced` (`<unknown>`)

|      % |     Size | Objects | Caller                  | Location            |
| -----: | -------: | ------: | ----------------------- | ------------------- |
| 100.0% | 5.16 KiB |       1 | `ZSTDMT_createCCtxPool` | `zstdmt_compress.c` |

##### `ZSTDMT_createJobsTable` (`zstdmt_compress.c`)

|      % |     Size | Objects | Caller                       | Location    |
| -----: | -------: | ------: | ---------------------------- | ----------- |
| 100.0% | 3.63 KiB |       1 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `ZSTDMT_createCCtx_advanced` (`<unknown>`)

|      % |     Size | Objects | Caller                           | Location          |
| -----: | -------: | ------: | -------------------------------- | ----------------- |
| 100.0% | 3.06 KiB |       1 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

##### `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % |     Size | Objects | Caller   | Location                                           |
| -----: | -------: | ------: | -------- | -------------------------------------------------- |
| 100.0% | 1.19 KiB |       4 | `0xff2f` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `POOL_create_advanced` (`<unknown>`)

|     % |  Size | Objects | Caller                       | Location    |
| ----: | ----: | ------: | ---------------------------- | ----------- |
| 74.1% | 800 B |       6 | `POOL_create`                | `<unknown>` |
| 25.9% | 280 B |       3 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `0x6dc07` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Size | Objects | Caller                   | Location   |
| ----: | ----: | ------: | ------------------------ | ---------- |
| 50.0% | 472 B |       1 | `FIO_openSrcFile`        | `fileio.c` |
| 50.0% | 472 B |       1 | `UTIL_countCores.part.0` | `util.c`   |

##### `0x6d533` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Size | Objects | Caller            | Location   |
| -----: | ----: | ------: | ----------------- | ---------- |
| 100.0% | 472 B |       1 | `FIO_openDstFile` | `fileio.c` |

##### `ZSTDMT_createBufferPool` (`zstdmt_compress.c`)

|      % |  Size | Objects | Caller                       | Location    |
| -----: | ----: | ------: | ---------------------------- | ----------- |
| 100.0% | 336 B |       4 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

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

|      % |  Size | Objects | Caller                       | Location    |
| -----: | ----: | ------: | ---------------------------- | ----------- |
| 100.0% | 104 B |       2 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `FIO_createContext` (`<unknown>`)

|      % | Size | Objects | Caller | Location    |
| -----: | ---: | ------: | ------ | ----------- |
| 100.0% | 40 B |       1 | `main` | `<unknown>` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Objects | Function                               | Location                               |
| ----: | -------: | ------: | -------------------------------------- | -------------------------------------- |
| 55.9% | 82.8 MiB |      78 | `main`                                 | `<unknown>`                            |
| 55.9% | 82.8 MiB |      78 | `0x27743`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 55.9% | 82.8 MiB |      78 | `0x27817`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 55.9% | 82.8 MiB |      78 | `_start`                               | `<unknown>`                            |
| 55.9% | 82.8 MiB |      70 | `FIO_compressFilename`                 | `<unknown>`                            |
| 54.0% |   80 MiB |      18 | `FIO_compressFilename_srcFile`         | `fileio.c`                             |
| 54.0% |   80 MiB |      15 | `ZSTD_CCtx_init_compressStream2`       | `zstd_compress.c`                      |
| 54.0% |   80 MiB |      15 | `ZSTD_compressStream2`                 | `<unknown>`                            |
| 54.0% |   80 MiB |       1 | `ZSTDMT_initCStream_internal`          | `<unknown>`                            |
| 54.0% |   80 MiB |       1 | `0x1b`                                 | `<unknown>`                            |
| 54.0% |   80 MiB |       1 | `0xb`                                  | `<unknown>`                            |
| 44.1% | 65.3 MiB |       3 | `POOL_thread`                          | `pool.c`                               |
| 44.1% | 65.3 MiB |       3 | `0x8202f`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 44.1% | 65.3 MiB |       3 | `0xebf5b`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 44.1% | 65.3 MiB |       2 | `ZSTDMT_compressionJob`                | `zstdmt_compress.c`                    |
| 33.3% | 49.2 MiB |       1 | `ZSTD_resetCCtx_internal`              | `zstd_compress.c`                      |
| 33.3% | 49.2 MiB |       1 | `ZSTD_compressBegin_internal`          | `zstd_compress.c`                      |
| 33.3% | 49.2 MiB |       1 | `ZSTD_compressBegin_advanced_internal` | `<unknown>`                            |
| 33.3% | 49.2 MiB |       1 | `0xfbad8000`                           | `<unknown>`                            |
| 33.3% | 49.2 MiB |       1 | `0xffffaba2e377`                       | `<unknown>`                            |

#### Categories

##### Native

|     % |     Size | Objects | Function                               | Location                               |
| ----: | -------: | ------: | -------------------------------------- | -------------------------------------- |
| 55.9% | 82.8 MiB |      78 | `main`                                 | `<unknown>`                            |
| 55.9% | 82.8 MiB |      78 | `0x27743`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 55.9% | 82.8 MiB |      78 | `0x27817`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 55.9% | 82.8 MiB |      78 | `_start`                               | `<unknown>`                            |
| 55.9% | 82.8 MiB |      70 | `FIO_compressFilename`                 | `<unknown>`                            |
| 54.0% |   80 MiB |      15 | `ZSTD_compressStream2`                 | `<unknown>`                            |
| 54.0% |   80 MiB |       1 | `ZSTDMT_initCStream_internal`          | `<unknown>`                            |
| 54.0% |   80 MiB |       1 | `0x1b`                                 | `<unknown>`                            |
| 54.0% |   80 MiB |       1 | `0xb`                                  | `<unknown>`                            |
| 44.1% | 65.3 MiB |       3 | `0x8202f`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 44.1% | 65.3 MiB |       3 | `0xebf5b`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 33.3% | 49.2 MiB |       1 | `ZSTD_compressBegin_advanced_internal` | `<unknown>`                            |
| 33.3% | 49.2 MiB |       1 | `0xfbad8000`                           | `<unknown>`                            |
| 33.3% | 49.2 MiB |       1 | `0xffffaba2e377`                       | `<unknown>`                            |
| 10.9% | 16.1 MiB |       6 | `0xffffffffffffffff`                   | `<unknown>`                            |
|  1.0% |  1.5 MiB |      26 | `AIO_ReadPool_create`                  | `<unknown>`                            |
|  0.8% | 1.26 MiB |      25 | `AIO_WritePool_create`                 | `<unknown>`                            |
|  0.3% |  384 KiB |       7 | `0xffffad418077`                       | `<unknown>`                            |
|  0.3% |  384 KiB |       7 | `0xfffffd78e897`                       | `<unknown>`                            |
|  0.3% |  384 KiB |       5 | `0xfffffd78e80f`                       | `<unknown>`                            |

##### Ours

|     % |     Size | Objects | Function                         | Location            |
| ----: | -------: | ------: | -------------------------------- | ------------------- |
| 54.0% |   80 MiB |      18 | `FIO_compressFilename_srcFile`   | `fileio.c`          |
| 54.0% |   80 MiB |      15 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c`   |
| 44.1% | 65.3 MiB |       3 | `POOL_thread`                    | `pool.c`            |
| 44.1% | 65.3 MiB |       2 | `ZSTDMT_compressionJob`          | `zstdmt_compress.c` |
| 33.3% | 49.2 MiB |       1 | `ZSTD_resetCCtx_internal`        | `zstd_compress.c`   |
| 33.3% | 49.2 MiB |       1 | `ZSTD_compressBegin_internal`    | `zstd_compress.c`   |
| 10.8% | 16.1 MiB |       1 | `ZSTDMT_getBuffer`               | `zstdmt_compress.c` |
|  1.9% | 2.76 MiB |      52 | `FIO_createCResources`           | `fileio.c`          |
|  1.7% | 2.51 MiB |      48 | `AIO_IOPool_init`                | `fileio_asyncio.c`  |
| <0.1% | 5.27 KiB |       3 | `ZSTDMT_createCCtxPool`          | `zstdmt_compress.c` |
| <0.1% | 4.46 KiB |       2 | `FIO_openDstFile`                | `fileio.c`          |
| <0.1% |    4 KiB |       1 | `AIO_ReadPool_executeReadJob`    | `fileio_asyncio.c`  |
| <0.1% | 3.63 KiB |       1 | `ZSTDMT_createJobsTable`         | `zstdmt_compress.c` |
| <0.1% | 1.46 KiB |       2 | `UTIL_countCores.part.0`         | `util.c`            |
| <0.1% |    472 B |       1 | `FIO_openSrcFile`                | `fileio.c`          |
| <0.1% |    336 B |       4 | `ZSTDMT_createBufferPool`        | `zstdmt_compress.c` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main` (`<unknown>`)

|      % |     Size | Objects | Callee                        | Location    |
| -----: | -------: | ------: | ----------------------------- | ----------- |
| 100.0% | 82.8 MiB |      70 | `FIO_compressFilename`        | `<unknown>` |
|   0.8% |  641 KiB |      12 | `_start`                      | `<unknown>` |
|  <0.1% | 1.46 KiB |       2 | `UTIL_countCores.part.0`      | `util.c`    |
|  <0.1% |    176 B |       4 | `UTIL_allocateFileNamesTable` | `<unknown>` |
|  <0.1% |    136 B |       1 | `FIO_createPreferences`       | `<unknown>` |

##### `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |     Size | Objects | Callee           | Location    |
| -----: | -------: | ------: | ---------------- | ----------- |
| 100.0% | 82.8 MiB |      78 | `main`           | `<unknown>` |
|   0.2% |  129 KiB |       2 | `0xffffad441027` | `<unknown>` |

##### `0x27817` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |     Size | Objects | Callee    | Location                               |
| -----: | -------: | ------: | --------- | -------------------------------------- |
| 100.0% | 82.8 MiB |      78 | `0x27743` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.5% |  389 KiB |       6 | `_start`  | `<unknown>`                            |

##### `_start` (`<unknown>`)

|      % |     Size | Objects | Callee    | Location                               |
| -----: | -------: | ------: | --------- | -------------------------------------- |
| 100.0% | 82.8 MiB |      78 | `0x27817` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `FIO_compressFilename` (`<unknown>`)

|     % |     Size | Objects | Callee                         | Location   |
| ----: | -------: | ------: | ------------------------------ | ---------- |
| 96.7% |   80 MiB |      18 | `FIO_compressFilename_srcFile` | `fileio.c` |
|  3.3% | 2.76 MiB |      52 | `FIO_createCResources`         | `fileio.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|      % |     Size | Objects | Callee                 | Location    |
| -----: | -------: | ------: | ---------------------- | ----------- |
| 100.0% |   80 MiB |      15 | `ZSTD_compressStream2` | `<unknown>` |
|  <0.1% | 4.46 KiB |       2 | `FIO_openDstFile`      | `fileio.c`  |
|  <0.1% |    472 B |       1 | `FIO_openSrcFile`      | `fileio.c`  |

##### `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`)

|      % |     Size | Objects | Callee                        | Location    |
| -----: | -------: | ------: | ----------------------------- | ----------- |
| 100.0% |   80 MiB |       1 | `ZSTDMT_initCStream_internal` | `<unknown>` |
|  <0.1% | 13.1 KiB |      14 | `ZSTDMT_createCCtx_advanced`  | `<unknown>` |

##### `ZSTD_compressStream2` (`<unknown>`)

|      % |     Size | Objects | Callee                           | Location          |
| -----: | -------: | ------: | -------------------------------- | ----------------- |
| 100.0% |   80 MiB |      15 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |
|  <0.1% | 5.16 KiB |       1 | `_start`                         | `<unknown>`       |

##### `0x1b` (`<unknown>`)

|      % |   Size | Objects | Callee   | Location    |
| -----: | -----: | ------: | -------- | ----------- |
| 100.0% | 80 MiB |       1 | `_start` | `<unknown>` |

##### `0xb` (`<unknown>`)

|      % |   Size | Objects | Callee | Location    |
| -----: | -----: | ------: | ------ | ----------- |
| 100.0% | 80 MiB |       1 | `0x1b` | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|      % |     Size | Objects | Callee                        | Location            |
| -----: | -------: | ------: | ----------------------------- | ------------------- |
| 100.0% | 65.3 MiB |       2 | `ZSTDMT_compressionJob`       | `zstdmt_compress.c` |
|  <0.1% |    4 KiB |       1 | `AIO_ReadPool_executeReadJob` | `fileio_asyncio.c`  |

##### `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |     Size | Objects | Callee        | Location |
| -----: | -------: | ------: | ------------- | -------- |
| 100.0% | 65.3 MiB |       3 | `POOL_thread` | `pool.c` |

##### `0xebf5b` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |     Size | Objects | Callee    | Location                               |
| -----: | -------: | ------: | --------- | -------------------------------------- |
| 100.0% | 65.3 MiB |       3 | `0x8202f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|     % |     Size | Objects | Callee                                 | Location            |
| ----: | -------: | ------: | -------------------------------------- | ------------------- |
| 75.4% | 49.2 MiB |       1 | `ZSTD_compressBegin_advanced_internal` | `<unknown>`         |
| 24.6% | 16.1 MiB |       1 | `ZSTDMT_getBuffer`                     | `zstdmt_compress.c` |

##### `ZSTD_compressBegin_internal` (`zstd_compress.c`)

|      % |     Size | Objects | Callee                    | Location          |
| -----: | -------: | ------: | ------------------------- | ----------------- |
| 100.0% | 49.2 MiB |       1 | `ZSTD_resetCCtx_internal` | `zstd_compress.c` |

##### `ZSTD_compressBegin_advanced_internal` (`<unknown>`)

|      % |     Size | Objects | Callee                        | Location          |
| -----: | -------: | ------: | ----------------------------- | ----------------- |
| 100.0% | 49.2 MiB |       1 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |

##### `0xfbad8000` (`<unknown>`)

|      % |     Size | Objects | Callee    | Location                               |
| -----: | -------: | ------: | --------- | -------------------------------------- |
| 100.0% | 49.2 MiB |       1 | `0xebf5b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xffffaba2e377` (`<unknown>`)

|      % |     Size | Objects | Callee       | Location    |
| -----: | -------: | ------: | ------------ | ----------- |
| 100.0% | 49.2 MiB |       1 | `0xfbad8000` | `<unknown>` |

##### `0xffffffffffffffff` (`<unknown>`)

|      % |     Size | Objects | Callee               | Location                               |
| -----: | -------: | ------: | -------------------- | -------------------------------------- |
| 100.0% | 16.1 MiB |       2 | `0xebf5b`            | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 100.0% | 16.1 MiB |       2 | `0xffffffffffffffff` | `<unknown>`                            |
|  <0.1% |  5.3 KiB |       2 | `_start`             | `<unknown>`                            |
|  <0.1% |    608 B |       2 | `0x702b001116049ff`  | `<unknown>`                            |

##### `FIO_createCResources` (`fileio.c`)

|     % |     Size | Objects | Callee                 | Location    |
| ----: | -------: | ------: | ---------------------- | ----------- |
| 54.3% |  1.5 MiB |      26 | `AIO_ReadPool_create`  | `<unknown>` |
| 45.5% | 1.26 MiB |      25 | `AIO_WritePool_create` | `<unknown>` |
| 18.2% |  514 KiB |       8 | `_start`               | `<unknown>` |
|  0.2% | 5.16 KiB |       1 | `ZSTD_createCCtx`      | `<unknown>` |

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

##### `0xffffad418077` (`<unknown>`)

|      % |    Size | Objects | Callee   | Location    |
| -----: | ------: | ------: | -------- | ----------- |
| 100.0% | 384 KiB |       7 | `_start` | `<unknown>` |

##### `0xfffffd78e897` (`<unknown>`)

|      % |    Size | Objects | Callee           | Location    |
| -----: | ------: | ------: | ---------------- | ----------- |
| 100.0% | 384 KiB |       7 | `0xffffad418077` | `<unknown>` |

##### `0xfffffd78e80f` (`<unknown>`)

|      % |    Size | Objects | Callee   | Location    |
| -----: | ------: | ------: | -------- | ----------- |
| 100.0% | 384 KiB |       5 | `_start` | `<unknown>` |

##### `ZSTDMT_createCCtxPool` (`zstdmt_compress.c`)

|     % |     Size | Objects | Callee                     | Location    |
| ----: | -------: | ------: | -------------------------- | ----------- |
| 98.1% | 5.16 KiB |       1 | `ZSTD_createCCtx_advanced` | `<unknown>` |

##### `FIO_openDstFile` (`fileio.c`)

|     % |  Size | Objects | Callee    | Location                               |
| ----: | ----: | ------: | --------- | -------------------------------------- |
| 89.7% | 4 KiB |       1 | `0x7004b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 10.3% | 472 B |       1 | `0x6d533` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`)

|      % |  Size | Objects | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 4 KiB |       1 | `0x6e1b7` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `UTIL_countCores.part.0` (`util.c`)

|     % |  Size | Objects | Callee    | Location                               |
| ----: | ----: | ------: | --------- | -------------------------------------- |
| 68.4% | 1 KiB |       1 | `0x6da83` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 31.6% | 472 B |       1 | `0x6dc07` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `FIO_openSrcFile` (`fileio.c`)

|      % |  Size | Objects | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 472 B |       1 | `0x6dc07` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 54.0% |   80 MiB |       1 | `ZSTDMT_initCStream_internal` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x1b` ← `0xb`                                                                                                                                   |
| 33.3% | 49.2 MiB |       1 | `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b` ← `0xfbad8000` ← `0xffffaba2e377`                                                                                                                         |
| 10.8% | 16.1 MiB |       1 | `ZSTDMT_getBuffer` (`zstdmt_compress.c`) ← `ZSTDMT_compressionJob` ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b` ← `0xffffffffffffffff` ← `0xffffffffffffffff`                                                                                                                                                                                                                 |
|  0.3% |  514 KiB |       8 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename`                                                                                                                                           |
|  0.3% |  512 KiB |       8 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)                                                                                                                                             |
|  0.3% |  386 KiB |       5 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x27817` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `_start`                                                                                                                                          |
|  0.3% |  384 KiB |       7 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffad418077` ← `0xfffffd78e897`                                                                                                                                                                     |
|  0.3% |  384 KiB |       5 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xfffffd78e80f` ← `0x3567f` (`/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)                                                                                                                       |
|  0.2% |  256 KiB |       1 | `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xaaaad02d5327` ← `0xfffffd78e84f`                                                                                                                                                                                                              |
|  0.1% |  129 KiB |       3 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xfffffd78e89f` ← `0x25f`                                                                                                                                                                             |
|  0.1% |  129 KiB |       2 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)                                                                                                                                            |
|  0.1% |  129 KiB |       2 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffad441027` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)                                                                                                                                  |
| <0.1% | 5.16 KiB |       1 | `ZSTD_createCCtx` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffffffffffffff` ← `0x5537` (`/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)                                                                                                                                                                 |
| <0.1% | 5.16 KiB |       1 | `ZSTD_createCCtx_advanced` ← `ZSTDMT_createCCtxPool` (`zstdmt_compress.c`) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) |
| <0.1% |    4 KiB |       1 | `0x6d1bb` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x7004b` ← `FIO_openDstFile` (`fileio.c`) ← `FIO_compressFilename_srcFile` ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffaba402ff` ← `0xfffffd78ed1f`                                                                                                                                         |
| <0.1% |    4 KiB |       1 | `0x6d1bb` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x7b9cf` ← `0x79c7b` ← `0x6e1b7` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b` ← `0xffffffffffffffff` ← `0xffffffffffffffff`                                                                                                                                        |
| <0.1% | 3.63 KiB |       1 | `ZSTDMT_createJobsTable` (`zstdmt_compress.c`) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x27817` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `_start`                                    |
| <0.1% | 3.06 KiB |       1 | `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffad44101f` ← `0xffffaba4043f`                                                                                                               |
| <0.1% |    1 KiB |       1 | `0x6d1bb` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x7b9cf` ← `0x7ab23` ← `0x7ba8f` ← `0x6ec2f` ← `0x6da83` ← `UTIL_countCores.part.0` (`util.c`) ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffad441027` ← `0xffffad441027`                                                                                                                                              |
| <0.1% |    472 B |       1 | `0x6d533` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `FIO_openDstFile` (`fileio.c`) ← `FIO_compressFilename_srcFile` ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xfffffd78e643` ← `0xffffad48ffff`                                                                                                                                                     |

# Retained heap profile

Retained 1.19 KiB over 4 objects (304 B per object).

| Category |      % |     Size | Objects |
| -------- | -----: | -------: | ------: |
| Native   | 100.0% | 1.19 KiB |       4 |

## Hottest functions

### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

#### Categories

##### Native

|      % |     Size | Objects | Function | Location                                           |
| -----: | -------: | ------: | -------- | -------------------------------------------------- |
| 100.0% | 1.19 KiB |       4 | `0xf483` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % |     Size | Objects | Caller   | Location                                           |
| -----: | -------: | ------: | -------- | -------------------------------------------------- |
| 100.0% | 1.19 KiB |       4 | `0xff2f` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|      % |     Size | Objects | Function                         | Location                                           |
| -----: | -------: | ------: | -------------------------------- | -------------------------------------------------- |
| 100.0% | 1.19 KiB |       4 | `0xf483`                         | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 100.0% | 1.19 KiB |       4 | `0xff2f`                         | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 100.0% | 1.19 KiB |       4 | `0x82a23`                        | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| 100.0% | 1.19 KiB |       4 | `POOL_create_advanced`           | `<unknown>`                                        |
| 100.0% | 1.19 KiB |       4 | `FIO_compressFilename`           | `<unknown>`                                        |
| 100.0% | 1.19 KiB |       4 | `main`                           | `<unknown>`                                        |
| 100.0% | 1.19 KiB |       4 | `0x27743`                        | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| 100.0% | 1.19 KiB |       4 | `0x27817`                        | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| 100.0% | 1.19 KiB |       4 | `_start`                         | `<unknown>`                                        |
|  75.0% |    912 B |       3 | `0x702b001116049ff`              | `<unknown>`                                        |
|  50.0% |    608 B |       2 | `POOL_create`                    | `<unknown>`                                        |
|  50.0% |    608 B |       2 | `AIO_IOPool_init`                | `fileio_asyncio.c`                                 |
|  50.0% |    608 B |       2 | `FIO_createCResources`           | `fileio.c`                                         |
|  50.0% |    608 B |       2 | `0xffffffffffffffff`             | `<unknown>`                                        |
|  50.0% |    608 B |       2 | `ZSTDMT_createCCtx_advanced`     | `<unknown>`                                        |
|  50.0% |    608 B |       2 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c`                                  |
|  50.0% |    608 B |       2 | `ZSTD_compressStream2`           | `<unknown>`                                        |
|  50.0% |    608 B |       2 | `FIO_compressFilename_srcFile`   | `fileio.c`                                         |
|  25.0% |    304 B |       1 | `AIO_ReadPool_create`            | `<unknown>`                                        |
|  25.0% |    304 B |       1 | `0xfffffd78e19f`                 | `<unknown>`                                        |

#### Categories

##### Native

|      % |     Size | Objects | Function                     | Location                                           |
| -----: | -------: | ------: | ---------------------------- | -------------------------------------------------- |
| 100.0% | 1.19 KiB |       4 | `0xf483`                     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 100.0% | 1.19 KiB |       4 | `0xff2f`                     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 100.0% | 1.19 KiB |       4 | `0x82a23`                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| 100.0% | 1.19 KiB |       4 | `POOL_create_advanced`       | `<unknown>`                                        |
| 100.0% | 1.19 KiB |       4 | `FIO_compressFilename`       | `<unknown>`                                        |
| 100.0% | 1.19 KiB |       4 | `main`                       | `<unknown>`                                        |
| 100.0% | 1.19 KiB |       4 | `0x27743`                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| 100.0% | 1.19 KiB |       4 | `0x27817`                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| 100.0% | 1.19 KiB |       4 | `_start`                     | `<unknown>`                                        |
|  75.0% |    912 B |       3 | `0x702b001116049ff`          | `<unknown>`                                        |
|  50.0% |    608 B |       2 | `POOL_create`                | `<unknown>`                                        |
|  50.0% |    608 B |       2 | `0xffffffffffffffff`         | `<unknown>`                                        |
|  50.0% |    608 B |       2 | `ZSTDMT_createCCtx_advanced` | `<unknown>`                                        |
|  50.0% |    608 B |       2 | `ZSTD_compressStream2`       | `<unknown>`                                        |
|  25.0% |    304 B |       1 | `AIO_ReadPool_create`        | `<unknown>`                                        |
|  25.0% |    304 B |       1 | `0xfffffd78e19f`             | `<unknown>`                                        |
|  25.0% |    304 B |       1 | `AIO_WritePool_create`       | `<unknown>`                                        |
|  25.0% |    304 B |       1 | `0x0`                        | `<unknown>`                                        |
|  25.0% |    304 B |       1 | `0xffffad4877bf`             | `<unknown>`                                        |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0xff2f` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % |     Size | Objects | Callee   | Location                                           |
| -----: | -------: | ------: | -------- | -------------------------------------------------- |
| 100.0% | 1.19 KiB |       4 | `0xf483` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |     Size | Objects | Callee   | Location                                           |
| -----: | -------: | ------: | -------- | -------------------------------------------------- |
| 100.0% | 1.19 KiB |       4 | `0xff2f` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `POOL_create_advanced` (`<unknown>`)

|      % |     Size | Objects | Callee    | Location                               |
| -----: | -------: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.19 KiB |       4 | `0x82a23` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `FIO_compressFilename` (`<unknown>`)

|     % |  Size | Objects | Callee                         | Location   |
| ----: | ----: | ------: | ------------------------------ | ---------- |
| 50.0% | 608 B |       2 | `FIO_createCResources`         | `fileio.c` |
| 50.0% | 608 B |       2 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `main` (`<unknown>`)

|      % |     Size | Objects | Callee                 | Location    |
| -----: | -------: | ------: | ---------------------- | ----------- |
| 100.0% | 1.19 KiB |       4 | `FIO_compressFilename` | `<unknown>` |

##### `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |     Size | Objects | Callee | Location    |
| -----: | -------: | ------: | ------ | ----------- |
| 100.0% | 1.19 KiB |       4 | `main` | `<unknown>` |

##### `0x27817` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |     Size | Objects | Callee    | Location                               |
| -----: | -------: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.19 KiB |       4 | `0x27743` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_start` (`<unknown>`)

|      % |     Size | Objects | Callee    | Location                               |
| -----: | -------: | ------: | --------- | -------------------------------------- |
| 100.0% | 1.19 KiB |       4 | `0x27817` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x702b001116049ff` (`<unknown>`)

|      % |  Size | Objects | Callee   | Location    |
| -----: | ----: | ------: | -------- | ----------- |
| 100.0% | 912 B |       3 | `_start` | `<unknown>` |

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
| 50.0% | 304 B |       1 | `AIO_ReadPool_create`  | `<unknown>` |
| 50.0% | 304 B |       1 | `AIO_WritePool_create` | `<unknown>` |

##### `0xffffffffffffffff` (`<unknown>`)

|      % |  Size | Objects | Callee              | Location    |
| -----: | ----: | ------: | ------------------- | ----------- |
| 100.0% | 608 B |       2 | `0x702b001116049ff` | `<unknown>` |

##### `ZSTDMT_createCCtx_advanced` (`<unknown>`)

|      % |  Size | Objects | Callee                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 608 B |       2 | `POOL_create_advanced` | `<unknown>` |

##### `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`)

|      % |  Size | Objects | Callee                       | Location    |
| -----: | ----: | ------: | ---------------------------- | ----------- |
| 100.0% | 608 B |       2 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `ZSTD_compressStream2` (`<unknown>`)

|      % |  Size | Objects | Callee                           | Location          |
| -----: | ----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 608 B |       2 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|      % |  Size | Objects | Callee                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 608 B |       2 | `ZSTD_compressStream2` | `<unknown>` |

##### `AIO_ReadPool_create` (`<unknown>`)

|      % |  Size | Objects | Callee            | Location           |
| -----: | ----: | ------: | ----------------- | ------------------ |
| 100.0% | 304 B |       1 | `AIO_IOPool_init` | `fileio_asyncio.c` |

##### `0xfffffd78e19f` (`<unknown>`)

|      % |  Size | Objects | Callee              | Location    |
| -----: | ----: | ------: | ------------------- | ----------- |
| 100.0% | 304 B |       1 | `0x702b001116049ff` | `<unknown>` |

##### `AIO_WritePool_create` (`<unknown>`)

|      % |  Size | Objects | Callee            | Location           |
| -----: | ----: | ------: | ----------------- | ------------------ |
| 100.0% | 304 B |       1 | `AIO_IOPool_init` | `fileio_asyncio.c` |

##### `0x0` (`<unknown>`)

|      % |  Size | Objects | Callee   | Location    |
| -----: | ----: | ------: | -------- | ----------- |
| 100.0% | 304 B |       1 | `_start` | `<unknown>` |

##### `0xffffad4877bf` (`<unknown>`)

|      % |  Size | Objects | Callee | Location    |
| -----: | ----: | ------: | ------ | ----------- |
| 100.0% | 304 B |       1 | `0x0`  | `<unknown>` |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|     % |  Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 25.0% | 304 B |       1 | `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`) ← `0xff2f` ← `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x702b001116049ff` ← `0xffffffffffffffff`                                       |
| 25.0% | 304 B |       1 | `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`) ← `0xff2f` ← `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `POOL_create_advanced` ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x702b001116049ff` ← `0xfffffd78e19f`     |
| 25.0% | 304 B |       1 | `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`) ← `0xff2f` ← `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x0` ← `0xffffad4877bf`                                                        |
| 25.0% | 304 B |       1 | `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`) ← `0xff2f` ← `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `POOL_create_advanced` ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x702b001116049ff` ← `0xffffffffffffffff` |

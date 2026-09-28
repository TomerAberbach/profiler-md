# Allocated heap profile

Allocated 132 MiB over 78 objects (1.69 MiB per object).

| Category |     % |     Size | Objects |
| -------- | ----: | -------: | ------: |
| Ours     | 51.3% | 67.8 MiB |      49 |
| Native   | 48.7% | 64.3 MiB |      29 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Objects | Function                      | Location                                           |
| ----: | -------: | ------: | ----------------------------- | -------------------------------------------------- |
| 48.5% |   64 MiB |       1 | `ZSTDMT_initCStream_internal` | `<unknown>`                                        |
| 37.3% | 49.2 MiB |       1 | `ZSTD_resetCCtx_internal`     | `zstd_compress.c`                                  |
| 12.2% | 16.1 MiB |       1 | `ZSTDMT_getBuffer`            | `zstdmt_compress.c`                                |
|  1.9% | 2.51 MiB |      40 | `AIO_IOPool_init`             | `fileio_asyncio.c`                                 |
|  0.2% |  256 KiB |       2 | `AIO_ReadPool_create`         | `<unknown>`                                        |
| <0.1% |    8 KiB |       2 | `0x6d1bb`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx`             | `<unknown>`                                        |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx_advanced`    | `<unknown>`                                        |
| <0.1% | 3.05 KiB |       1 | `ZSTDMT_createCCtx_advanced`  | `<unknown>`                                        |
| <0.1% | 1.78 KiB |       1 | `ZSTDMT_createJobsTable`      | `zstdmt_compress.c`                                |
| <0.1% | 1.05 KiB |       9 | `POOL_create_advanced`        | `<unknown>`                                        |
| <0.1% |    912 B |       3 | `0xf483`                      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |    472 B |       1 | `0x6dc07`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |    472 B |       1 | `0x6d533`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |    288 B |       4 | `ZSTDMT_createBufferPool`     | `zstdmt_compress.c`                                |
| <0.1% |    192 B |       1 | `AIO_WritePool_create`        | `<unknown>`                                        |
| <0.1% |    176 B |       4 | `UTIL_allocateFileNamesTable` | `<unknown>`                                        |
| <0.1% |    136 B |       1 | `FIO_createPreferences`       | `<unknown>`                                        |
| <0.1% |     96 B |       2 | `ZSTDMT_createCCtxPool`       | `zstdmt_compress.c`                                |
| <0.1% |     40 B |       1 | `FIO_createContext`           | `<unknown>`                                        |

#### Categories

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

|     % |     Size | Objects | Function                      | Location                                           |
| ----: | -------: | ------: | ----------------------------- | -------------------------------------------------- |
| 48.5% |   64 MiB |       1 | `ZSTDMT_initCStream_internal` | `<unknown>`                                        |
|  0.2% |  256 KiB |       2 | `AIO_ReadPool_create`         | `<unknown>`                                        |
| <0.1% |    8 KiB |       2 | `0x6d1bb`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx`             | `<unknown>`                                        |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx_advanced`    | `<unknown>`                                        |
| <0.1% | 3.05 KiB |       1 | `ZSTDMT_createCCtx_advanced`  | `<unknown>`                                        |
| <0.1% | 1.05 KiB |       9 | `POOL_create_advanced`        | `<unknown>`                                        |
| <0.1% |    912 B |       3 | `0xf483`                      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |    472 B |       1 | `0x6dc07`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |    472 B |       1 | `0x6d533`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |    192 B |       1 | `AIO_WritePool_create`        | `<unknown>`                                        |
| <0.1% |    176 B |       4 | `UTIL_allocateFileNamesTable` | `<unknown>`                                        |
| <0.1% |    136 B |       1 | `FIO_createPreferences`       | `<unknown>`                                        |
| <0.1% |     40 B |       1 | `FIO_createContext`           | `<unknown>`                                        |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

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

##### `0x6d1bb` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |  Size | Objects | Caller    | Location                               |
| ----: | ----: | ------: | --------- | -------------------------------------- |
| 50.0% | 4 KiB |       1 | `0x7004b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 50.0% | 4 KiB |       1 | `0x7b9cf` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

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

##### `POOL_create_advanced` (`<unknown>`)

|     % |  Size | Objects | Caller                       | Location    |
| ----: | ----: | ------: | ---------------------------- | ----------- |
| 74.6% | 800 B |       6 | `POOL_create`                | `<unknown>` |
| 25.4% | 272 B |       3 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % |  Size | Objects | Caller   | Location                                           |
| -----: | ----: | ------: | -------- | -------------------------------------------------- |
| 100.0% | 912 B |       3 | `0xff2f` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `0x6dc07` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Size | Objects | Caller            | Location   |
| -----: | ----: | ------: | ----------------- | ---------- |
| 100.0% | 472 B |       1 | `FIO_openSrcFile` | `fileio.c` |

##### `0x6d533` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

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

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Objects | Function                               | Location                               |
| ----: | -------: | ------: | -------------------------------------- | -------------------------------------- |
| 50.6% | 66.8 MiB |      75 | `main`                                 | `<unknown>`                            |
| 50.6% | 66.8 MiB |      75 | `0x27743`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 50.6% | 66.8 MiB |      75 | `0x27817`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 50.6% | 66.8 MiB |      75 | `_start`                               | `<unknown>`                            |
| 50.6% | 66.8 MiB |      69 | `FIO_compressFilename`                 | `<unknown>`                            |
| 49.4% | 65.3 MiB |       3 | `POOL_thread`                          | `pool.c`                               |
| 49.4% | 65.3 MiB |       3 | `0x8202f`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 49.4% | 65.3 MiB |       3 | `0xebf5b`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 49.4% | 65.3 MiB |       2 | `ZSTDMT_compressionJob`                | `zstdmt_compress.c`                    |
| 48.5% |   64 MiB |      17 | `FIO_compressFilename_srcFile`         | `fileio.c`                             |
| 48.5% |   64 MiB |      14 | `ZSTD_CCtx_init_compressStream2`       | `zstd_compress.c`                      |
| 48.5% |   64 MiB |      14 | `ZSTD_compressStream2`                 | `<unknown>`                            |
| 48.5% |   64 MiB |       1 | `ZSTDMT_initCStream_internal`          | `<unknown>`                            |
| 48.5% |   64 MiB |       1 | `0x1b`                                 | `<unknown>`                            |
| 48.5% |   64 MiB |       1 | `0xb`                                  | `<unknown>`                            |
| 37.3% | 49.2 MiB |       1 | `ZSTD_resetCCtx_internal`              | `zstd_compress.c`                      |
| 37.3% | 49.2 MiB |       1 | `ZSTD_compressBegin_internal`          | `zstd_compress.c`                      |
| 37.3% | 49.2 MiB |       1 | `ZSTD_compressBegin_advanced_internal` | `<unknown>`                            |
| 37.3% | 49.2 MiB |       1 | `0xfbad8000`                           | `<unknown>`                            |
| 37.3% | 49.2 MiB |       1 | `0xffffae9be377`                       | `<unknown>`                            |

#### Categories

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

|     % |     Size | Objects | Function                               | Location                               |
| ----: | -------: | ------: | -------------------------------------- | -------------------------------------- |
| 50.6% | 66.8 MiB |      75 | `main`                                 | `<unknown>`                            |
| 50.6% | 66.8 MiB |      75 | `0x27743`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 50.6% | 66.8 MiB |      75 | `0x27817`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 50.6% | 66.8 MiB |      75 | `_start`                               | `<unknown>`                            |
| 50.6% | 66.8 MiB |      69 | `FIO_compressFilename`                 | `<unknown>`                            |
| 49.4% | 65.3 MiB |       3 | `0x8202f`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 49.4% | 65.3 MiB |       3 | `0xebf5b`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 48.5% |   64 MiB |      14 | `ZSTD_compressStream2`                 | `<unknown>`                            |
| 48.5% |   64 MiB |       1 | `ZSTDMT_initCStream_internal`          | `<unknown>`                            |
| 48.5% |   64 MiB |       1 | `0x1b`                                 | `<unknown>`                            |
| 48.5% |   64 MiB |       1 | `0xb`                                  | `<unknown>`                            |
| 37.3% | 49.2 MiB |       1 | `ZSTD_compressBegin_advanced_internal` | `<unknown>`                            |
| 37.3% | 49.2 MiB |       1 | `0xfbad8000`                           | `<unknown>`                            |
| 37.3% | 49.2 MiB |       1 | `0xffffae9be377`                       | `<unknown>`                            |
| 12.2% | 16.1 MiB |       8 | `0xffffffffffffffff`                   | `<unknown>`                            |
|  1.1% |  1.5 MiB |      26 | `AIO_ReadPool_create`                  | `<unknown>`                            |
|  1.0% | 1.26 MiB |      25 | `AIO_WritePool_create`                 | `<unknown>`                            |
|  0.3% |  384 KiB |       7 | `0xffffb03b8077`                       | `<unknown>`                            |
|  0.3% |  384 KiB |       7 | `0xffffe10e9117`                       | `<unknown>`                            |
|  0.3% |  384 KiB |       5 | `0xffffe10e908f`                       | `<unknown>`                            |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main` (`<unknown>`)

|      % |     Size | Objects | Callee                        | Location    |
| -----: | -------: | ------: | ----------------------------- | ----------- |
| 100.0% | 66.8 MiB |      69 | `FIO_compressFilename`        | `<unknown>` |
|   1.1% |  769 KiB |      14 | `_start`                      | `<unknown>` |
|  <0.1% |    176 B |       4 | `UTIL_allocateFileNamesTable` | `<unknown>` |
|  <0.1% |    136 B |       1 | `FIO_createPreferences`       | `<unknown>` |
|  <0.1% |     40 B |       1 | `FIO_createContext`           | `<unknown>` |

##### `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |     Size | Objects | Callee | Location    |
| -----: | -------: | ------: | ------ | ----------- |
| 100.0% | 66.8 MiB |      75 | `main` | `<unknown>` |

##### `0x27817` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |     Size | Objects | Callee    | Location                               |
| -----: | -------: | ------: | --------- | -------------------------------------- |
| 100.0% | 66.8 MiB |      75 | `0x27743` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.6% |  387 KiB |       6 | `_start`  | `<unknown>`                            |

##### `_start` (`<unknown>`)

|      % |     Size | Objects | Callee    | Location                               |
| -----: | -------: | ------: | --------- | -------------------------------------- |
| 100.0% | 66.8 MiB |      75 | `0x27817` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

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

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|      % |     Size | Objects | Callee                 | Location    |
| -----: | -------: | ------: | ---------------------- | ----------- |
| 100.0% |   64 MiB |      14 | `ZSTD_compressStream2` | `<unknown>` |
|  <0.1% | 5.13 KiB |       1 | `0xffffafcd0027`       | `<unknown>` |
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

##### `0x1b` (`<unknown>`)

|      % |   Size | Objects | Callee   | Location    |
| -----: | -----: | ------: | -------- | ----------- |
| 100.0% | 64 MiB |       1 | `_start` | `<unknown>` |

##### `0xb` (`<unknown>`)

|      % |   Size | Objects | Callee | Location    |
| -----: | -----: | ------: | ------ | ----------- |
| 100.0% | 64 MiB |       1 | `0x1b` | `<unknown>` |

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

##### `0xffffae9be377` (`<unknown>`)

|      % |     Size | Objects | Callee       | Location    |
| -----: | -------: | ------: | ------------ | ----------- |
| 100.0% | 49.2 MiB |       1 | `0xfbad8000` | `<unknown>` |

##### `0xffffffffffffffff` (`<unknown>`)

|      % |     Size | Objects | Callee               | Location                               |
| -----: | -------: | ------: | -------------------- | -------------------------------------- |
| 100.0% | 16.1 MiB |       2 | `0xebf5b`            | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 100.0% | 16.1 MiB |       2 | `0xffffffffffffffff` | `<unknown>`                            |
|  <0.1% | 5.27 KiB |       2 | `_start`             | `<unknown>`                            |
|  <0.1% |    784 B |       4 | `0xccba22524c5860ff` | `<unknown>`                            |

##### `FIO_createCResources` (`fileio.c`)

|     % |     Size | Objects | Callee                 | Location    |
| ----: | -------: | ------: | ---------------------- | ----------- |
| 54.3% |  1.5 MiB |      26 | `AIO_ReadPool_create`  | `<unknown>` |
| 45.5% | 1.26 MiB |      25 | `AIO_WritePool_create` | `<unknown>` |
| 18.2% |  514 KiB |       8 | `_start`               | `<unknown>` |
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

##### `0xffffb03b8077` (`<unknown>`)

|      % |    Size | Objects | Callee   | Location    |
| -----: | ------: | ------: | -------- | ----------- |
| 100.0% | 384 KiB |       7 | `_start` | `<unknown>` |

##### `0xffffe10e9117` (`<unknown>`)

|      % |    Size | Objects | Callee           | Location    |
| -----: | ------: | ------: | ---------------- | ----------- |
| 100.0% | 384 KiB |       7 | `0xffffb03b8077` | `<unknown>` |

##### `0xffffe10e908f` (`<unknown>`)

|      % |    Size | Objects | Callee   | Location    |
| -----: | ------: | ------: | -------- | ----------- |
| 100.0% | 384 KiB |       5 | `_start` | `<unknown>` |

##### `ZSTDMT_createCCtxPool` (`zstdmt_compress.c`)

|     % |     Size | Objects | Callee                     | Location    |
| ----: | -------: | ------: | -------------------------- | ----------- |
| 98.2% | 5.13 KiB |       1 | `ZSTD_createCCtx_advanced` | `<unknown>` |

##### `FIO_openDstFile` (`fileio.c`)

|     % |  Size | Objects | Callee    | Location                               |
| ----: | ----: | ------: | --------- | -------------------------------------- |
| 89.7% | 4 KiB |       1 | `0x7004b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 10.3% | 472 B |       1 | `0x6d533` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`)

|      % |  Size | Objects | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 4 KiB |       1 | `0x6e1b7` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `FIO_openSrcFile` (`fileio.c`)

|      % |  Size | Objects | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 472 B |       1 | `0x6dc07` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 48.5% |   64 MiB |       1 | `ZSTDMT_initCStream_internal` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x1b` ← `0xb`                                                                                                                             |
| 37.3% | 49.2 MiB |       1 | `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b` ← `0xfbad8000` ← `0xffffae9be377`                                                                                                                   |
| 12.2% | 16.1 MiB |       1 | `ZSTDMT_getBuffer` (`zstdmt_compress.c`) ← `ZSTDMT_compressionJob` ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b` ← `0xffffffffffffffff` ← `0xffffffffffffffff`                                                                                                                                                                                                           |
|  0.4% |  514 KiB |       8 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename`                                                                                                                                     |
|  0.4% |  512 KiB |       8 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)                                                                                                                                       |
|  0.3% |  386 KiB |       5 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x27817` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `_start`                                                                                                                                    |
|  0.3% |  384 KiB |       7 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffb03b8077` ← `0xffffe10e9117`                                                                                                                                                               |
|  0.3% |  384 KiB |       5 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffe10e908f` ← `0x3567f` (`/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)                                                                                                                 |
|  0.2% |  257 KiB |       4 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)                                                                                                                                      |
|  0.2% |  256 KiB |       1 | `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xaaaaea478327` ← `0xffffe10e90cf`                                                                                                                                                                                                        |
|  0.1% |  129 KiB |       3 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffe10e911f` ← `0x25f`                                                                                                                                                                       |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffffffffffffff` ← `0x5537` (`/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)                                                                                                                                                           |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx_advanced` ← `ZSTDMT_createCCtxPool` (`zstdmt_compress.c`) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffafcd0027` ← `FIO_compressFilename_srcFile` (`fileio.c`) |
| <0.1% |    4 KiB |       1 | `0x6d1bb` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x7004b` ← `FIO_openDstFile` (`fileio.c`) ← `FIO_compressFilename_srcFile` ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffae9d02ff` ← `0xffffe10e959f`                                                                                                                                   |
| <0.1% |    4 KiB |       1 | `0x6d1bb` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x7b9cf` ← `0x79c7b` ← `0x6e1b7` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b` ← `0xffffffffffffffff` ← `0xffffffffffffffff`                                                                                                                                  |
| <0.1% | 3.05 KiB |       1 | `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffafcd0027` ← `0xffffafcd0027`                                                                                                         |
| <0.1% | 1.78 KiB |       1 | `ZSTDMT_createJobsTable` (`zstdmt_compress.c`) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x27817` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `_start`                              |
| <0.1% |    472 B |       1 | `0x6dc07` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `FIO_openSrcFile` (`fileio.c`) ← `FIO_compressFilename_srcFile` ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffe10e8f53` ← `0x2dfb3` (`/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)                                                                                                 |
| <0.1% |    472 B |       1 | `0x6d533` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `FIO_openDstFile` (`fileio.c`) ← `FIO_compressFilename_srcFile` ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffe10e8ec3` ← `0xffffb0424fff`                                                                                                                                               |
| <0.1% |    400 B |       3 | `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffb03d8fff` ← `0xffffafcd0027`                                                                                                                      |

# Retained heap profile

Retained 912 B over 3 objects (304 B per object).

| Category |      % |  Size | Objects |
| -------- | -----: | ----: | ------: |
| Native   | 100.0% | 912 B |       3 |

## Hottest functions

### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

#### Categories

##### Native

|      % |  Size | Objects | Function | Location                                           |
| -----: | ----: | ------: | -------- | -------------------------------------------------- |
| 100.0% | 912 B |       3 | `0xf483` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % |  Size | Objects | Caller   | Location                                           |
| -----: | ----: | ------: | -------- | -------------------------------------------------- |
| 100.0% | 912 B |       3 | `0xff2f` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|      % |  Size | Objects | Function                         | Location                                           |
| -----: | ----: | ------: | -------------------------------- | -------------------------------------------------- |
| 100.0% | 912 B |       3 | `0xf483`                         | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 100.0% | 912 B |       3 | `0xff2f`                         | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 100.0% | 912 B |       3 | `0x82a23`                        | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| 100.0% | 912 B |       3 | `POOL_create_advanced`           | `<unknown>`                                        |
| 100.0% | 912 B |       3 | `FIO_compressFilename`           | `<unknown>`                                        |
| 100.0% | 912 B |       3 | `main`                           | `<unknown>`                                        |
| 100.0% | 912 B |       3 | `0x27743`                        | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| 100.0% | 912 B |       3 | `0x27817`                        | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| 100.0% | 912 B |       3 | `_start`                         | `<unknown>`                                        |
|  66.7% | 608 B |       2 | `POOL_create`                    | `<unknown>`                                        |
|  66.7% | 608 B |       2 | `AIO_IOPool_init`                | `fileio_asyncio.c`                                 |
|  66.7% | 608 B |       2 | `FIO_createCResources`           | `fileio.c`                                         |
|  66.7% | 608 B |       2 | `0xccba22524c5860ff`             | `<unknown>`                                        |
|  66.7% | 608 B |       2 | `0xffffffffffffffff`             | `<unknown>`                                        |
|  33.3% | 304 B |       1 | `AIO_WritePool_create`           | `<unknown>`                                        |
|  33.3% | 304 B |       1 | `0x0`                            | `<unknown>`                                        |
|  33.3% | 304 B |       1 | `0xffffb041e7bf`                 | `<unknown>`                                        |
|  33.3% | 304 B |       1 | `AIO_ReadPool_create`            | `<unknown>`                                        |
|  33.3% | 304 B |       1 | `ZSTDMT_createCCtx_advanced`     | `<unknown>`                                        |
|  33.3% | 304 B |       1 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c`                                  |

#### Categories

##### Native

|      % |  Size | Objects | Function                     | Location                                           |
| -----: | ----: | ------: | ---------------------------- | -------------------------------------------------- |
| 100.0% | 912 B |       3 | `0xf483`                     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 100.0% | 912 B |       3 | `0xff2f`                     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 100.0% | 912 B |       3 | `0x82a23`                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| 100.0% | 912 B |       3 | `POOL_create_advanced`       | `<unknown>`                                        |
| 100.0% | 912 B |       3 | `FIO_compressFilename`       | `<unknown>`                                        |
| 100.0% | 912 B |       3 | `main`                       | `<unknown>`                                        |
| 100.0% | 912 B |       3 | `0x27743`                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| 100.0% | 912 B |       3 | `0x27817`                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| 100.0% | 912 B |       3 | `_start`                     | `<unknown>`                                        |
|  66.7% | 608 B |       2 | `POOL_create`                | `<unknown>`                                        |
|  66.7% | 608 B |       2 | `0xccba22524c5860ff`         | `<unknown>`                                        |
|  66.7% | 608 B |       2 | `0xffffffffffffffff`         | `<unknown>`                                        |
|  33.3% | 304 B |       1 | `AIO_WritePool_create`       | `<unknown>`                                        |
|  33.3% | 304 B |       1 | `0x0`                        | `<unknown>`                                        |
|  33.3% | 304 B |       1 | `0xffffb041e7bf`             | `<unknown>`                                        |
|  33.3% | 304 B |       1 | `AIO_ReadPool_create`        | `<unknown>`                                        |
|  33.3% | 304 B |       1 | `ZSTDMT_createCCtx_advanced` | `<unknown>`                                        |
|  33.3% | 304 B |       1 | `ZSTD_compressStream2`       | `<unknown>`                                        |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0xff2f` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % |  Size | Objects | Callee   | Location                                           |
| -----: | ----: | ------: | -------- | -------------------------------------------------- |
| 100.0% | 912 B |       3 | `0xf483` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Size | Objects | Callee   | Location                                           |
| -----: | ----: | ------: | -------- | -------------------------------------------------- |
| 100.0% | 912 B |       3 | `0xff2f` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `POOL_create_advanced` (`<unknown>`)

|      % |  Size | Objects | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 912 B |       3 | `0x82a23` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `FIO_compressFilename` (`<unknown>`)

|     % |  Size | Objects | Callee                         | Location   |
| ----: | ----: | ------: | ------------------------------ | ---------- |
| 66.7% | 608 B |       2 | `FIO_createCResources`         | `fileio.c` |
| 33.3% | 304 B |       1 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `main` (`<unknown>`)

|      % |  Size | Objects | Callee                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 912 B |       3 | `FIO_compressFilename` | `<unknown>` |

##### `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Size | Objects | Callee | Location    |
| -----: | ----: | ------: | ------ | ----------- |
| 100.0% | 912 B |       3 | `main` | `<unknown>` |

##### `0x27817` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |  Size | Objects | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 912 B |       3 | `0x27743` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_start` (`<unknown>`)

|      % |  Size | Objects | Callee    | Location                               |
| -----: | ----: | ------: | --------- | -------------------------------------- |
| 100.0% | 912 B |       3 | `0x27817` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

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

##### `0xccba22524c5860ff` (`<unknown>`)

|      % |  Size | Objects | Callee   | Location    |
| -----: | ----: | ------: | -------- | ----------- |
| 100.0% | 608 B |       2 | `_start` | `<unknown>` |

##### `0xffffffffffffffff` (`<unknown>`)

|      % |  Size | Objects | Callee               | Location    |
| -----: | ----: | ------: | -------------------- | ----------- |
| 100.0% | 608 B |       2 | `0xccba22524c5860ff` | `<unknown>` |

##### `AIO_WritePool_create` (`<unknown>`)

|      % |  Size | Objects | Callee            | Location           |
| -----: | ----: | ------: | ----------------- | ------------------ |
| 100.0% | 304 B |       1 | `AIO_IOPool_init` | `fileio_asyncio.c` |

##### `0x0` (`<unknown>`)

|      % |  Size | Objects | Callee   | Location    |
| -----: | ----: | ------: | -------- | ----------- |
| 100.0% | 304 B |       1 | `_start` | `<unknown>` |

##### `0xffffb041e7bf` (`<unknown>`)

|      % |  Size | Objects | Callee | Location    |
| -----: | ----: | ------: | ------ | ----------- |
| 100.0% | 304 B |       1 | `0x0`  | `<unknown>` |

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

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|     % |  Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 33.3% | 304 B |       1 | `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`) ← `0xff2f` ← `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x0` ← `0xffffb041e7bf`                                                         |
| 33.3% | 304 B |       1 | `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`) ← `0xff2f` ← `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xccba22524c5860ff` ← `0xffffffffffffffff`                                       |
| 33.3% | 304 B |       1 | `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`) ← `0xff2f` ← `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `POOL_create_advanced` ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xccba22524c5860ff` ← `0xffffffffffffffff` |

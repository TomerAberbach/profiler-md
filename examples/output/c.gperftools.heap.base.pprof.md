# Allocated heap profile

Allocated 132 MiB over 78 objects (1.69 MiB per object).

| Category |     % |     Size | Objects |
| -------- | ----: | -------: | ------: |
| Ours     | 51.3% | 67.8 MiB |      53 |
| Native   | 48.7% | 64.3 MiB |      25 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Objects | Function                      | Location            |
| ----: | -------: | ------: | ----------------------------- | ------------------- |
| 48.5% |   64 MiB |       1 | `ZSTDMT_initCStream_internal` | `<unknown>`         |
| 37.3% | 49.2 MiB |       1 | `ZSTD_resetCCtx_internal`     | `zstd_compress.c`   |
| 12.2% | 16.1 MiB |       1 | `ZSTDMT_getBuffer`            | `zstdmt_compress.c` |
|  1.9% | 2.51 MiB |      40 | `AIO_IOPool_init`             | `fileio_asyncio.c`  |
|  0.2% |  256 KiB |       2 | `AIO_ReadPool_create`         | `<unknown>`         |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx`             | `<unknown>`         |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx_advanced`    | `<unknown>`         |
| <0.1% | 4.46 KiB |       2 | `FIO_openDstFile`             | `fileio.c`          |
| <0.1% |    4 KiB |       1 | `AIO_ReadPool_executeReadJob` | `fileio_asyncio.c`  |
| <0.1% | 3.05 KiB |       1 | `ZSTDMT_createCCtx_advanced`  | `<unknown>`         |
| <0.1% | 1.94 KiB |      12 | `POOL_create_advanced`        | `<unknown>`         |
| <0.1% | 1.78 KiB |       1 | `ZSTDMT_createJobsTable`      | `zstdmt_compress.c` |
| <0.1% |    472 B |       1 | `FIO_openSrcFile`             | `fileio.c`          |
| <0.1% |    288 B |       4 | `ZSTDMT_createBufferPool`     | `zstdmt_compress.c` |
| <0.1% |    192 B |       1 | `AIO_WritePool_create`        | `<unknown>`         |
| <0.1% |    176 B |       4 | `UTIL_allocateFileNamesTable` | `<unknown>`         |
| <0.1% |    136 B |       1 | `FIO_createPreferences`       | `<unknown>`         |
| <0.1% |     96 B |       2 | `ZSTDMT_createCCtxPool`       | `zstdmt_compress.c` |
| <0.1% |     40 B |       1 | `FIO_createContext`           | `<unknown>`         |

#### Categories

##### Ours

|     % |     Size | Objects | Function                      | Location            |
| ----: | -------: | ------: | ----------------------------- | ------------------- |
| 37.3% | 49.2 MiB |       1 | `ZSTD_resetCCtx_internal`     | `zstd_compress.c`   |
| 12.2% | 16.1 MiB |       1 | `ZSTDMT_getBuffer`            | `zstdmt_compress.c` |
|  1.9% | 2.51 MiB |      40 | `AIO_IOPool_init`             | `fileio_asyncio.c`  |
| <0.1% | 4.46 KiB |       2 | `FIO_openDstFile`             | `fileio.c`          |
| <0.1% |    4 KiB |       1 | `AIO_ReadPool_executeReadJob` | `fileio_asyncio.c`  |
| <0.1% | 1.78 KiB |       1 | `ZSTDMT_createJobsTable`      | `zstdmt_compress.c` |
| <0.1% |    472 B |       1 | `FIO_openSrcFile`             | `fileio.c`          |
| <0.1% |    288 B |       4 | `ZSTDMT_createBufferPool`     | `zstdmt_compress.c` |
| <0.1% |     96 B |       2 | `ZSTDMT_createCCtxPool`       | `zstdmt_compress.c` |

##### Native

|     % |     Size | Objects | Function                      | Location    |
| ----: | -------: | ------: | ----------------------------- | ----------- |
| 48.5% |   64 MiB |       1 | `ZSTDMT_initCStream_internal` | `<unknown>` |
|  0.2% |  256 KiB |       2 | `AIO_ReadPool_create`         | `<unknown>` |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx`             | `<unknown>` |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx_advanced`    | `<unknown>` |
| <0.1% | 3.05 KiB |       1 | `ZSTDMT_createCCtx_advanced`  | `<unknown>` |
| <0.1% | 1.94 KiB |      12 | `POOL_create_advanced`        | `<unknown>` |
| <0.1% |    192 B |       1 | `AIO_WritePool_create`        | `<unknown>` |
| <0.1% |    176 B |       4 | `UTIL_allocateFileNamesTable` | `<unknown>` |
| <0.1% |    136 B |       1 | `FIO_createPreferences`       | `<unknown>` |
| <0.1% |     40 B |       1 | `FIO_createContext`           | `<unknown>` |

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

##### `ZSTDMT_createCCtx_advanced` (`<unknown>`)

|      % |     Size | Objects | Caller                           | Location          |
| -----: | -------: | ------: | -------------------------------- | ----------------- |
| 100.0% | 3.05 KiB |       1 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

##### `POOL_create_advanced` (`<unknown>`)

|     % |     Size | Objects | Caller                       | Location    |
| ----: | -------: | ------: | ---------------------------- | ----------- |
| 71.0% | 1.38 KiB |       8 | `POOL_create`                | `<unknown>` |
| 29.0% |    576 B |       4 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `ZSTDMT_createJobsTable` (`zstdmt_compress.c`)

|      % |     Size | Objects | Caller                       | Location    |
| -----: | -------: | ------: | ---------------------------- | ----------- |
| 100.0% | 1.78 KiB |       1 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `FIO_openSrcFile` (`fileio.c`)

|      % |  Size | Objects | Caller                         | Location   |
| -----: | ----: | ------: | ------------------------------ | ---------- |
| 100.0% | 472 B |       1 | `FIO_compressFilename_srcFile` | `fileio.c` |

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

|     % |     Size | Objects | Function                               | Location            |
| ----: | -------: | ------: | -------------------------------------- | ------------------- |
| 50.6% | 66.8 MiB |      75 | `main`                                 | `<unknown>`         |
| 50.6% | 66.8 MiB |      75 | `_start`                               | `<unknown>`         |
| 50.6% | 66.8 MiB |      69 | `FIO_compressFilename`                 | `<unknown>`         |
| 49.4% | 65.3 MiB |       3 | `POOL_thread`                          | `pool.c`            |
| 49.4% | 65.3 MiB |       2 | `ZSTDMT_compressionJob`                | `zstdmt_compress.c` |
| 48.5% |   64 MiB |      17 | `FIO_compressFilename_srcFile`         | `fileio.c`          |
| 48.5% |   64 MiB |      14 | `ZSTD_CCtx_init_compressStream2`       | `zstd_compress.c`   |
| 48.5% |   64 MiB |      14 | `ZSTD_compressStream2`                 | `<unknown>`         |
| 48.5% |   64 MiB |       1 | `ZSTDMT_initCStream_internal`          | `<unknown>`         |
| 37.3% | 49.2 MiB |       1 | `ZSTD_resetCCtx_internal`              | `zstd_compress.c`   |
| 37.3% | 49.2 MiB |       1 | `ZSTD_compressBegin_internal`          | `zstd_compress.c`   |
| 37.3% | 49.2 MiB |       1 | `ZSTD_compressBegin_advanced_internal` | `<unknown>`         |
| 12.2% | 16.1 MiB |       1 | `ZSTDMT_getBuffer`                     | `zstdmt_compress.c` |
|  2.1% | 2.76 MiB |      52 | `FIO_createCResources`                 | `fileio.c`          |
|  1.9% | 2.51 MiB |      48 | `AIO_IOPool_init`                      | `fileio_asyncio.c`  |
|  1.1% |  1.5 MiB |      26 | `AIO_ReadPool_create`                  | `<unknown>`         |
|  1.0% | 1.26 MiB |      25 | `AIO_WritePool_create`                 | `<unknown>`         |
| <0.1% | 10.9 KiB |      13 | `ZSTDMT_createCCtx_advanced`           | `<unknown>`         |
| <0.1% | 5.23 KiB |       3 | `ZSTDMT_createCCtxPool`                | `zstdmt_compress.c` |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx`                      | `<unknown>`         |

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

|     % |     Size | Objects | Function                               | Location    |
| ----: | -------: | ------: | -------------------------------------- | ----------- |
| 50.6% | 66.8 MiB |      75 | `main`                                 | `<unknown>` |
| 50.6% | 66.8 MiB |      75 | `_start`                               | `<unknown>` |
| 50.6% | 66.8 MiB |      69 | `FIO_compressFilename`                 | `<unknown>` |
| 48.5% |   64 MiB |      14 | `ZSTD_compressStream2`                 | `<unknown>` |
| 48.5% |   64 MiB |       1 | `ZSTDMT_initCStream_internal`          | `<unknown>` |
| 37.3% | 49.2 MiB |       1 | `ZSTD_compressBegin_advanced_internal` | `<unknown>` |
|  1.1% |  1.5 MiB |      26 | `AIO_ReadPool_create`                  | `<unknown>` |
|  1.0% | 1.26 MiB |      25 | `AIO_WritePool_create`                 | `<unknown>` |
| <0.1% | 10.9 KiB |      13 | `ZSTDMT_createCCtx_advanced`           | `<unknown>` |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx`                      | `<unknown>` |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx_advanced`             | `<unknown>` |
| <0.1% | 1.94 KiB |      12 | `POOL_create_advanced`                 | `<unknown>` |
| <0.1% | 1.38 KiB |       8 | `POOL_create`                          | `<unknown>` |
| <0.1% |    176 B |       4 | `UTIL_allocateFileNamesTable`          | `<unknown>` |
| <0.1% |    136 B |       1 | `FIO_createPreferences`                | `<unknown>` |
| <0.1% |     40 B |       1 | `FIO_createContext`                    | `<unknown>` |

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

##### `_start` (`<unknown>`)

|      % |     Size | Objects | Callee   | Location    |
| -----: | -------: | ------: | -------- | ----------- |
| 100.0% | 66.8 MiB |      75 | `main`   | `<unknown>` |
|   0.6% |  387 KiB |       6 | `_start` | `<unknown>` |

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
|  <0.1% | 5.13 KiB |       1 | `_start`               | `<unknown>` |
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

##### `POOL_create` (`<unknown>`)

|      % |     Size | Objects | Callee                 | Location    |
| -----: | -------: | ------: | ---------------------- | ----------- |
| 100.0% | 1.38 KiB |       8 | `POOL_create_advanced` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                         |
| ----: | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 48.5% |   64 MiB |       1 | `ZSTDMT_initCStream_internal` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `_start`                                                                                                                           |
| 37.3% | 49.2 MiB |       1 | `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`)                                                                                                                                  |
| 12.2% | 16.1 MiB |       1 | `ZSTDMT_getBuffer` (`zstdmt_compress.c`) ← `ZSTDMT_compressionJob` ← `POOL_thread` (`pool.c`)                                                                                                                                                                                                                                      |
|  0.6% |  768 KiB |      12 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `_start`                                                                                                                                                                                  |
|  0.4% |  514 KiB |       8 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `_start` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename`                                                                                                                  |
|  0.4% |  512 KiB |       8 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `_start` ← `main`                                                                                                                                                                         |
|  0.3% |  386 KiB |       5 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `_start` ← `_start`                                                                                                                                                                      |
|  0.2% |  257 KiB |       4 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `_start` ← `main`                                                                                                                                                                        |
|  0.2% |  256 KiB |       2 | `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `_start`                                                                                                                                                                                                                           |
|  0.1% |  129 KiB |       3 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `_start`                                                                                                                                                                                 |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `_start`                                                                                                                                                                                                                               |
| <0.1% | 5.13 KiB |       1 | `ZSTD_createCCtx_advanced` ← `ZSTDMT_createCCtxPool` (`zstdmt_compress.c`) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `_start` ← `FIO_compressFilename_srcFile` (`fileio.c`) |
| <0.1% | 4.46 KiB |       2 | `FIO_openDstFile` (`fileio.c`) ← `FIO_compressFilename_srcFile` ← `FIO_compressFilename` ← `main` ← `_start`                                                                                                                                                                                                                       |
| <0.1% |    4 KiB |       1 | `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`)                                                                                                                                                                                                                                                      |
| <0.1% | 3.05 KiB |       1 | `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `_start`                                                                                                                            |
| <0.1% | 1.78 KiB |       1 | `ZSTDMT_createJobsTable` (`zstdmt_compress.c`) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `_start` ← `_start`                                                                |
| <0.1% |    704 B |       4 | `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `_start`                                                                                                                                        |
| <0.1% |    704 B |       4 | `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `_start`                                                                                                                                         |
| <0.1% |    576 B |       4 | `POOL_create_advanced` ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `_start`                                                                                                   |
| <0.1% |    472 B |       1 | `FIO_openSrcFile` (`fileio.c`) ← `FIO_compressFilename_srcFile` ← `FIO_compressFilename` ← `main` ← `_start`                                                                                                                                                                                                                       |

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

|      % |  Size | Objects | Function               | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 912 B |       3 | `POOL_create_advanced` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `POOL_create_advanced` (`<unknown>`)

|     % |  Size | Objects | Caller                       | Location    |
| ----: | ----: | ------: | ---------------------------- | ----------- |
| 66.7% | 608 B |       2 | `POOL_create`                | `<unknown>` |
| 33.3% | 304 B |       1 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|      % |  Size | Objects | Function                         | Location           |
| -----: | ----: | ------: | -------------------------------- | ------------------ |
| 100.0% | 912 B |       3 | `POOL_create_advanced`           | `<unknown>`        |
| 100.0% | 912 B |       3 | `FIO_compressFilename`           | `<unknown>`        |
| 100.0% | 912 B |       3 | `main`                           | `<unknown>`        |
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

##### Native

|      % |  Size | Objects | Function                     | Location    |
| -----: | ----: | ------: | ---------------------------- | ----------- |
| 100.0% | 912 B |       3 | `POOL_create_advanced`       | `<unknown>` |
| 100.0% | 912 B |       3 | `FIO_compressFilename`       | `<unknown>` |
| 100.0% | 912 B |       3 | `main`                       | `<unknown>` |
| 100.0% | 912 B |       3 | `_start`                     | `<unknown>` |
|  66.7% | 608 B |       2 | `POOL_create`                | `<unknown>` |
|  33.3% | 304 B |       1 | `AIO_WritePool_create`       | `<unknown>` |
|  33.3% | 304 B |       1 | `AIO_ReadPool_create`        | `<unknown>` |
|  33.3% | 304 B |       1 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |
|  33.3% | 304 B |       1 | `ZSTD_compressStream2`       | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `FIO_compressFilename` (`<unknown>`)

|     % |  Size | Objects | Callee                         | Location   |
| ----: | ----: | ------: | ------------------------------ | ---------- |
| 66.7% | 608 B |       2 | `FIO_createCResources`         | `fileio.c` |
| 33.3% | 304 B |       1 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `main` (`<unknown>`)

|      % |  Size | Objects | Callee                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 912 B |       3 | `FIO_compressFilename` | `<unknown>` |

##### `_start` (`<unknown>`)

|      % |  Size | Objects | Callee | Location    |
| -----: | ----: | ------: | ------ | ----------- |
| 100.0% | 912 B |       3 | `main` | `<unknown>` |

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

Call stacks ranked by bytes retained in their leaf frame.

Common call stack: `FIO_compressFilename` ← `main` ← `_start`

|     % |  Size | Objects | Call stack                                                                                                                                                                          |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 33.3% | 304 B |       1 | `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`)                                      |
| 33.3% | 304 B |       1 | `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`)                                       |
| 33.3% | 304 B |       1 | `POOL_create_advanced` ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) |

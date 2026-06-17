# Allocated heap and retained heap profile

Allocated 139 MB and retained 912 B over 52 samples (2.66 MB and 17.5 B per sample).

| Category |     % |    Size |  Size | Samples |
| -------- | ----: | ------: | ----: | ------: |
| ours     | 51.3% | 71.1 MB |   0 B |      27 |
| stdlib   | 48.7% | 67.4 MB | 912 B |      25 |

## Allocated heap

### Hottest functions

#### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |    Size | Samples | Function                      | Location          |
| ----: | ------: | ------: | ----------------------------- | ----------------- |
| 48.5% | 67.1 MB |       1 | `ZSTDMT_initCStream_internal` | `<unknown>`       |
| 37.3% | 51.6 MB |       1 | `ZSTD_resetCCtx_internal`     | zstd_compress.c   |
| 12.2% | 16.8 MB |       1 | `ZSTDMT_getBuffer`            | zstdmt_compress.c |
|  1.9% | 2.63 MB |      14 | `AIO_IOPool_init`             | fileio_asyncio.c  |
|  0.2% |  263 kB |       2 | `AIO_ReadPool_create`         | `<unknown>`       |
|  0.0% | 5.26 kB |       1 | `ZSTD_createCCtx`             | `<unknown>`       |
|  0.0% | 5.26 kB |       1 | `ZSTD_createCCtx_advanced`    | `<unknown>`       |
|  0.0% | 4.57 kB |       2 | `FIO_openDstFile`             | fileio.c          |
|  0.0% |  4.1 kB |       1 | `AIO_ReadPool_executeReadJob` | fileio_asyncio.c  |
|  0.0% | 3.12 kB |       1 | `ZSTDMT_createCCtx_advanced`  | `<unknown>`       |
|  0.0% | 1.82 kB |       1 | `ZSTDMT_createJobsTable`      | zstdmt_compress.c |
|  0.0% |   472 B |       1 | `FIO_openSrcFile`             | fileio.c          |
|  0.0% |   288 B |       4 | `ZSTDMT_createBufferPool`     | zstdmt_compress.c |
|  0.0% |   192 B |       1 | `AIO_WritePool_create`        | `<unknown>`       |
|  0.0% |    96 B |       2 | `ZSTDMT_createCCtxPool`       | zstdmt_compress.c |

##### Lines

Lines ranked by contribution to each function's self size.

###### `ZSTDMT_initCStream_internal` (`<unknown>`)

|      % |    Size | Samples | Location |
| -----: | ------: | ------: | -------- |
| 100.0% | 67.1 MB |       1 | 0        |

###### `ZSTD_resetCCtx_internal` (zstd_compress.c)

|      % |    Size | Samples | Location          |
| -----: | ------: | ------: | ----------------- |
| 100.0% | 51.6 MB |       1 | zstd_compress.c:0 |

###### `ZSTDMT_getBuffer` (zstdmt_compress.c)

|      % |    Size | Samples | Location            |
| -----: | ------: | ------: | ------------------- |
| 100.0% | 16.8 MB |       1 | zstdmt_compress.c:0 |

###### `AIO_IOPool_init` (fileio_asyncio.c)

|      % |    Size | Samples | Location           |
| -----: | ------: | ------: | ------------------ |
| 100.0% | 2.63 MB |      14 | fileio_asyncio.c:0 |

###### `AIO_ReadPool_create` (`<unknown>`)

|      % |   Size | Samples | Location |
| -----: | -----: | ------: | -------- |
| 100.0% | 263 kB |       2 | 0        |

###### `ZSTD_createCCtx` (`<unknown>`)

|      % |    Size | Samples | Location |
| -----: | ------: | ------: | -------- |
| 100.0% | 5.26 kB |       1 | 0        |

###### `ZSTD_createCCtx_advanced` (`<unknown>`)

|      % |    Size | Samples | Location |
| -----: | ------: | ------: | -------- |
| 100.0% | 5.26 kB |       1 | 0        |

###### `FIO_openDstFile` (fileio.c)

|      % |    Size | Samples | Location   |
| -----: | ------: | ------: | ---------- |
| 100.0% | 4.57 kB |       2 | fileio.c:0 |

###### `AIO_ReadPool_executeReadJob` (fileio_asyncio.c)

|      % |   Size | Samples | Location           |
| -----: | -----: | ------: | ------------------ |
| 100.0% | 4.1 kB |       1 | fileio_asyncio.c:0 |

###### `ZSTDMT_createCCtx_advanced` (`<unknown>`)

|      % |    Size | Samples | Location |
| -----: | ------: | ------: | -------- |
| 100.0% | 3.12 kB |       1 | 0        |

###### `ZSTDMT_createJobsTable` (zstdmt_compress.c)

|      % |    Size | Samples | Location            |
| -----: | ------: | ------: | ------------------- |
| 100.0% | 1.82 kB |       1 | zstdmt_compress.c:0 |

###### `FIO_openSrcFile` (fileio.c)

|      % |  Size | Samples | Location   |
| -----: | ----: | ------: | ---------- |
| 100.0% | 472 B |       1 | fileio.c:0 |

###### `ZSTDMT_createBufferPool` (zstdmt_compress.c)

|      % |  Size | Samples | Location            |
| -----: | ----: | ------: | ------------------- |
| 100.0% | 288 B |       4 | zstdmt_compress.c:0 |

###### `AIO_WritePool_create` (`<unknown>`)

|      % |  Size | Samples | Location |
| -----: | ----: | ------: | -------- |
| 100.0% | 192 B |       1 | 0        |

###### `ZSTDMT_createCCtxPool` (zstdmt_compress.c)

|      % | Size | Samples | Location            |
| -----: | ---: | ------: | ------------------- |
| 100.0% | 96 B |       2 | zstdmt_compress.c:0 |

##### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

###### `ZSTDMT_initCStream_internal` (`<unknown>`)

|      % |    Size | Samples | Caller                           | Location        |
| -----: | ------: | ------: | -------------------------------- | --------------- |
| 100.0% | 67.1 MB |       1 | `ZSTD_CCtx_init_compressStream2` | zstd_compress.c |

###### `ZSTD_resetCCtx_internal` (zstd_compress.c)

|      % |    Size | Samples | Caller                        | Location        |
| -----: | ------: | ------: | ----------------------------- | --------------- |
| 100.0% | 51.6 MB |       1 | `ZSTD_compressBegin_internal` | zstd_compress.c |

###### `ZSTDMT_getBuffer` (zstdmt_compress.c)

|      % |    Size | Samples | Caller                  | Location          |
| -----: | ------: | ------: | ----------------------- | ----------------- |
| 100.0% | 16.8 MB |       1 | `ZSTDMT_compressionJob` | zstdmt_compress.c |

###### `AIO_IOPool_init` (fileio_asyncio.c)

|     % |    Size | Samples | Caller                 | Location    |
| ----: | ------: | ------: | ---------------------- | ----------- |
| 50.1% | 1.32 MB |       8 | `AIO_WritePool_create` | `<unknown>` |
| 49.9% | 1.31 MB |       6 | `AIO_ReadPool_create`  | `<unknown>` |

###### `AIO_ReadPool_create` (`<unknown>`)

|      % |   Size | Samples | Caller                 | Location |
| -----: | -----: | ------: | ---------------------- | -------- |
| 100.0% | 263 kB |       2 | `FIO_createCResources` | fileio.c |

###### `ZSTD_createCCtx` (`<unknown>`)

|      % |    Size | Samples | Caller                 | Location |
| -----: | ------: | ------: | ---------------------- | -------- |
| 100.0% | 5.26 kB |       1 | `FIO_createCResources` | fileio.c |

###### `ZSTD_createCCtx_advanced` (`<unknown>`)

|      % |    Size | Samples | Caller                  | Location          |
| -----: | ------: | ------: | ----------------------- | ----------------- |
| 100.0% | 5.26 kB |       1 | `ZSTDMT_createCCtxPool` | zstdmt_compress.c |

###### `FIO_openDstFile` (fileio.c)

|      % |    Size | Samples | Caller                         | Location |
| -----: | ------: | ------: | ------------------------------ | -------- |
| 100.0% | 4.57 kB |       2 | `FIO_compressFilename_srcFile` | fileio.c |

###### `AIO_ReadPool_executeReadJob` (fileio_asyncio.c)

|      % |   Size | Samples | Caller        | Location |
| -----: | -----: | ------: | ------------- | -------- |
| 100.0% | 4.1 kB |       1 | `POOL_thread` | pool.c   |

###### `ZSTDMT_createCCtx_advanced` (`<unknown>`)

|      % |    Size | Samples | Caller                           | Location        |
| -----: | ------: | ------: | -------------------------------- | --------------- |
| 100.0% | 3.12 kB |       1 | `ZSTD_CCtx_init_compressStream2` | zstd_compress.c |

###### `ZSTDMT_createJobsTable` (zstdmt_compress.c)

|      % |    Size | Samples | Caller                       | Location    |
| -----: | ------: | ------: | ---------------------------- | ----------- |
| 100.0% | 1.82 kB |       1 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

###### `FIO_openSrcFile` (fileio.c)

|      % |  Size | Samples | Caller                         | Location |
| -----: | ----: | ------: | ------------------------------ | -------- |
| 100.0% | 472 B |       1 | `FIO_compressFilename_srcFile` | fileio.c |

###### `ZSTDMT_createBufferPool` (zstdmt_compress.c)

|      % |  Size | Samples | Caller                       | Location    |
| -----: | ----: | ------: | ---------------------------- | ----------- |
| 100.0% | 288 B |       4 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

###### `AIO_WritePool_create` (`<unknown>`)

|      % |  Size | Samples | Caller                 | Location |
| -----: | ----: | ------: | ---------------------- | -------- |
| 100.0% | 192 B |       1 | `FIO_createCResources` | fileio.c |

###### `ZSTDMT_createCCtxPool` (zstdmt_compress.c)

|      % | Size | Samples | Caller                       | Location    |
| -----: | ---: | ------: | ---------------------------- | ----------- |
| 100.0% | 96 B |       2 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

#### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |    Size | Samples | Function                         | Location          |
| ----: | ------: | ------: | -------------------------------- | ----------------- |
| 49.4% | 68.5 MB |       3 | `POOL_thread`                    | pool.c            |
| 49.4% | 68.5 MB |       2 | `ZSTDMT_compressionJob`          | zstdmt_compress.c |
| 48.5% | 67.1 MB |      17 | `FIO_compressFilename_srcFile`   | fileio.c          |
| 48.5% | 67.1 MB |      14 | `ZSTD_CCtx_init_compressStream2` | zstd_compress.c   |
| 48.5% | 67.1 MB |       1 | `ZSTDMT_initCStream_internal`    | `<unknown>`       |
| 37.3% | 51.6 MB |       1 | `ZSTD_resetCCtx_internal`        | zstd_compress.c   |
| 37.3% | 51.6 MB |       1 | `ZSTD_compressBegin_internal`    | zstd_compress.c   |
| 12.2% | 16.8 MB |       1 | `ZSTDMT_getBuffer`               | zstdmt_compress.c |
|  2.1% |  2.9 MB |      26 | `FIO_createCResources`           | fileio.c          |
|  1.9% | 2.63 MB |      22 | `AIO_IOPool_init`                | fileio_asyncio.c  |
|  1.1% | 1.57 MB |      12 | `AIO_ReadPool_create`            | `<unknown>`       |
|  1.0% | 1.32 MB |      13 | `AIO_WritePool_create`           | `<unknown>`       |
|  0.0% | 11.2 kB |      13 | `ZSTDMT_createCCtx_advanced`     | `<unknown>`       |
|  0.0% | 5.35 kB |       3 | `ZSTDMT_createCCtxPool`          | zstdmt_compress.c |
|  0.0% | 5.26 kB |       1 | `ZSTD_createCCtx`                | `<unknown>`       |
|  0.0% | 5.26 kB |       1 | `ZSTD_createCCtx_advanced`       | `<unknown>`       |
|  0.0% | 4.57 kB |       2 | `FIO_openDstFile`                | fileio.c          |
|  0.0% |  4.1 kB |       1 | `AIO_ReadPool_executeReadJob`    | fileio_asyncio.c  |
|  0.0% | 1.82 kB |       1 | `ZSTDMT_createJobsTable`         | zstdmt_compress.c |
|  0.0% |   472 B |       1 | `FIO_openSrcFile`                | fileio.c          |

##### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

###### `POOL_thread` (pool.c)

|      % |    Size | Samples | Callee                        | Location          |
| -----: | ------: | ------: | ----------------------------- | ----------------- |
| 100.0% | 68.5 MB |       2 | `ZSTDMT_compressionJob`       | zstdmt_compress.c |
|   0.0% |  4.1 kB |       1 | `AIO_ReadPool_executeReadJob` | fileio_asyncio.c  |

###### `ZSTDMT_compressionJob` (zstdmt_compress.c)

|     % |    Size | Samples | Callee             | Location          |
| ----: | ------: | ------: | ------------------ | ----------------- |
| 24.6% | 16.8 MB |       1 | `ZSTDMT_getBuffer` | zstdmt_compress.c |

###### `FIO_compressFilename_srcFile` (fileio.c)

|    % |    Size | Samples | Callee            | Location |
| ---: | ------: | ------: | ----------------- | -------- |
| 0.0% | 4.57 kB |       2 | `FIO_openDstFile` | fileio.c |
| 0.0% |   472 B |       1 | `FIO_openSrcFile` | fileio.c |

###### `ZSTD_CCtx_init_compressStream2` (zstd_compress.c)

|      % |    Size | Samples | Callee                        | Location    |
| -----: | ------: | ------: | ----------------------------- | ----------- |
| 100.0% | 67.1 MB |       1 | `ZSTDMT_initCStream_internal` | `<unknown>` |
|   0.0% | 11.2 kB |      13 | `ZSTDMT_createCCtx_advanced`  | `<unknown>` |

###### `ZSTD_compressBegin_internal` (zstd_compress.c)

|      % |    Size | Samples | Callee                    | Location        |
| -----: | ------: | ------: | ------------------------- | --------------- |
| 100.0% | 51.6 MB |       1 | `ZSTD_resetCCtx_internal` | zstd_compress.c |

###### `FIO_createCResources` (fileio.c)

|     % |    Size | Samples | Callee                 | Location    |
| ----: | ------: | ------: | ---------------------- | ----------- |
| 54.3% | 1.57 MB |      12 | `AIO_ReadPool_create`  | `<unknown>` |
| 45.5% | 1.32 MB |      13 | `AIO_WritePool_create` | `<unknown>` |
|  0.2% | 5.26 kB |       1 | `ZSTD_createCCtx`      | `<unknown>` |

###### `AIO_ReadPool_create` (`<unknown>`)

|     % |    Size | Samples | Callee            | Location         |
| ----: | ------: | ------: | ----------------- | ---------------- |
| 83.3% | 1.31 MB |      10 | `AIO_IOPool_init` | fileio_asyncio.c |

###### `AIO_WritePool_create` (`<unknown>`)

|      % |    Size | Samples | Callee            | Location         |
| -----: | ------: | ------: | ----------------- | ---------------- |
| 100.0% | 1.32 MB |      12 | `AIO_IOPool_init` | fileio_asyncio.c |

###### `ZSTDMT_createCCtx_advanced` (`<unknown>`)

|     % |    Size | Samples | Callee                    | Location          |
| ----: | ------: | ------: | ------------------------- | ----------------- |
| 48.0% | 5.35 kB |       3 | `ZSTDMT_createCCtxPool`   | zstdmt_compress.c |
| 16.3% | 1.82 kB |       1 | `ZSTDMT_createJobsTable`  | zstdmt_compress.c |
|  2.6% |   288 B |       4 | `ZSTDMT_createBufferPool` | zstdmt_compress.c |

###### `ZSTDMT_createCCtxPool` (zstdmt_compress.c)

|     % |    Size | Samples | Callee                     | Location    |
| ----: | ------: | ------: | -------------------------- | ----------- |
| 98.2% | 5.26 kB |       1 | `ZSTD_createCCtx_advanced` | `<unknown>` |

### Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 48.5% | 67.1 MB |       1 | `ZSTDMT_initCStream_internal` ← `ZSTD_CCtx_init_compressStream2` (zstd_compress.c) ← `FIO_compressFilename_srcFile` (fileio.c)                                                                                                            |
| 37.3% | 51.6 MB |       1 | `ZSTD_resetCCtx_internal` (zstd_compress.c) ← `ZSTD_compressBegin_internal` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                                        |
| 12.2% | 16.8 MB |       1 | `ZSTDMT_getBuffer` (zstdmt_compress.c) ← `ZSTDMT_compressionJob` ← `POOL_thread` (pool.c)                                                                                                                                                 |
|  0.6% |  787 kB |       4 | `AIO_IOPool_init` (fileio_asyncio.c) ← `AIO_ReadPool_create` ← `FIO_createCResources` (fileio.c)                                                                                                                                          |
|  0.4% |  527 kB |       2 | `AIO_IOPool_init` (fileio_asyncio.c) ← `AIO_WritePool_create` ← `FIO_createCResources` (fileio.c) ← `FIO_createCResources`                                                                                                                |
|  0.4% |  524 kB |       2 | `AIO_IOPool_init` (fileio_asyncio.c) ← `AIO_ReadPool_create` ← `FIO_createCResources` (fileio.c)                                                                                                                                          |
|  0.3% |  395 kB |       2 | `AIO_IOPool_init` (fileio_asyncio.c) ← `AIO_WritePool_create` ← `FIO_createCResources` (fileio.c)                                                                                                                                         |
|  0.2% |  263 kB |       2 | `AIO_IOPool_init` (fileio_asyncio.c) ← `AIO_WritePool_create` ← `FIO_createCResources` (fileio.c)                                                                                                                                         |
|  0.2% |  263 kB |       2 | `AIO_ReadPool_create` ← `FIO_createCResources` (fileio.c)                                                                                                                                                                                 |
|  0.1% |  132 kB |       2 | `AIO_IOPool_init` (fileio_asyncio.c) ← `AIO_WritePool_create` ← `FIO_createCResources` (fileio.c)                                                                                                                                         |
|  0.0% | 5.26 kB |       1 | `ZSTD_createCCtx` ← `FIO_createCResources` (fileio.c)                                                                                                                                                                                     |
|  0.0% | 5.26 kB |       1 | `ZSTD_createCCtx_advanced` ← `ZSTDMT_createCCtxPool` (zstdmt_compress.c) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (zstd_compress.c) ← `FIO_compressFilename_srcFile` (fileio.c) ← `FIO_compressFilename_srcFile` |
|  0.0% | 4.57 kB |       2 | `FIO_openDstFile` (fileio.c) ← `FIO_compressFilename_srcFile`                                                                                                                                                                             |
|  0.0% |  4.1 kB |       1 | `AIO_ReadPool_executeReadJob` (fileio_asyncio.c) ← `POOL_thread` (pool.c)                                                                                                                                                                 |
|  0.0% | 3.12 kB |       1 | `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (zstd_compress.c) ← `FIO_compressFilename_srcFile` (fileio.c)                                                                                                             |
|  0.0% | 1.82 kB |       1 | `ZSTDMT_createJobsTable` (zstdmt_compress.c) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (zstd_compress.c) ← `FIO_compressFilename_srcFile` (fileio.c)                                                              |
|  0.0% |   704 B |       4 | `AIO_IOPool_init` (fileio_asyncio.c) ← `AIO_WritePool_create` ← `FIO_createCResources` (fileio.c)                                                                                                                                         |
|  0.0% |   704 B |       4 | `AIO_IOPool_init` (fileio_asyncio.c) ← `AIO_ReadPool_create` ← `FIO_createCResources` (fileio.c)                                                                                                                                          |
|  0.0% |   576 B |       4 | `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (zstd_compress.c) ← `FIO_compressFilename_srcFile` (fileio.c)                                                                                                             |
|  0.0% |   472 B |       1 | `FIO_openSrcFile` (fileio.c) ← `FIO_compressFilename_srcFile`                                                                                                                                                                             |

## Retained heap

### Hottest functions

#### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |  Size | Samples | Function                         | Location         |
| ----: | ----: | ------: | -------------------------------- | ---------------- |
| 66.7% | 608 B |      22 | `AIO_IOPool_init`                | fileio_asyncio.c |
| 66.7% | 608 B |      26 | `FIO_createCResources`           | fileio.c         |
| 33.3% | 304 B |      13 | `AIO_WritePool_create`           | `<unknown>`      |
| 33.3% | 304 B |      13 | `ZSTDMT_createCCtx_advanced`     | `<unknown>`      |
| 33.3% | 304 B |      14 | `ZSTD_CCtx_init_compressStream2` | zstd_compress.c  |
| 33.3% | 304 B |      17 | `FIO_compressFilename_srcFile`   | fileio.c         |
| 33.3% | 304 B |      12 | `AIO_ReadPool_create`            | `<unknown>`      |

##### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

###### `FIO_createCResources` (fileio.c)

|     % |  Size | Samples | Callee                 | Location    |
| ----: | ----: | ------: | ---------------------- | ----------- |
| 50.0% | 304 B |      13 | `AIO_WritePool_create` | `<unknown>` |
| 50.0% | 304 B |      12 | `AIO_ReadPool_create`  | `<unknown>` |

###### `AIO_WritePool_create` (`<unknown>`)

|      % |  Size | Samples | Callee            | Location         |
| -----: | ----: | ------: | ----------------- | ---------------- |
| 100.0% | 304 B |      12 | `AIO_IOPool_init` | fileio_asyncio.c |

###### `ZSTD_CCtx_init_compressStream2` (zstd_compress.c)

|      % |  Size | Samples | Callee                       | Location    |
| -----: | ----: | ------: | ---------------------------- | ----------- |
| 100.0% | 304 B |      13 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

###### `AIO_ReadPool_create` (`<unknown>`)

|      % |  Size | Samples | Callee            | Location         |
| -----: | ----: | ------: | ----------------- | ---------------- |
| 100.0% | 304 B |      10 | `AIO_IOPool_init` | fileio_asyncio.c |

### Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|     % |  Size | Samples | Call stack                                                                                                                                                                                                                                |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 33.3% | 304 B |       4 | `AIO_IOPool_init` (fileio_asyncio.c) ← `AIO_WritePool_create` ← `FIO_createCResources` (fileio.c)                                                                                                                                         |
| 33.3% | 304 B |       4 | `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (zstd_compress.c) ← `FIO_compressFilename_srcFile` (fileio.c)                                                                                                             |
| 33.3% | 304 B |       4 | `AIO_IOPool_init` (fileio_asyncio.c) ← `AIO_ReadPool_create` ← `FIO_createCResources` (fileio.c)                                                                                                                                          |
|  0.0% |   0 B |       2 | `ZSTDMT_createCCtxPool` (zstdmt_compress.c) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (zstd_compress.c) ← `FIO_compressFilename_srcFile` (fileio.c)                                                               |
|  0.0% |   0 B |       2 | `AIO_IOPool_init` (fileio_asyncio.c) ← `AIO_WritePool_create` ← `FIO_createCResources` (fileio.c)                                                                                                                                         |
|  0.0% |   0 B |       4 | `ZSTDMT_createBufferPool` (zstdmt_compress.c) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (zstd_compress.c) ← `FIO_compressFilename_srcFile` (fileio.c)                                                             |
|  0.0% |   0 B |       1 | `ZSTDMT_initCStream_internal` ← `ZSTD_CCtx_init_compressStream2` (zstd_compress.c) ← `FIO_compressFilename_srcFile` (fileio.c)                                                                                                            |
|  0.0% |   0 B |       2 | `AIO_IOPool_init` (fileio_asyncio.c) ← `AIO_WritePool_create` ← `FIO_createCResources` (fileio.c)                                                                                                                                         |
|  0.0% |   0 B |       1 | `ZSTD_resetCCtx_internal` (zstd_compress.c) ← `ZSTD_compressBegin_internal` ← `ZSTDMT_compressionJob` (zstdmt_compress.c) ← `POOL_thread` (pool.c)                                                                                        |
|  0.0% |   0 B |       1 | `ZSTD_createCCtx` ← `FIO_createCResources` (fileio.c)                                                                                                                                                                                     |
|  0.0% |   0 B |       1 | `AIO_WritePool_create` ← `FIO_createCResources` (fileio.c)                                                                                                                                                                                |
|  0.0% |   0 B |       2 | `AIO_IOPool_init` (fileio_asyncio.c) ← `AIO_ReadPool_create` ← `FIO_createCResources` (fileio.c)                                                                                                                                          |
|  0.0% |   0 B |       1 | `ZSTDMT_createJobsTable` (zstdmt_compress.c) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (zstd_compress.c) ← `FIO_compressFilename_srcFile` (fileio.c)                                                              |
|  0.0% |   0 B |       2 | `FIO_openDstFile` (fileio.c) ← `FIO_compressFilename_srcFile`                                                                                                                                                                             |
|  0.0% |   0 B |       4 | `AIO_IOPool_init` (fileio_asyncio.c) ← `AIO_ReadPool_create` ← `FIO_createCResources` (fileio.c)                                                                                                                                          |
|  0.0% |   0 B |       1 | `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (zstd_compress.c) ← `FIO_compressFilename_srcFile` (fileio.c)                                                                                                             |
|  0.0% |   0 B |       1 | `AIO_ReadPool_executeReadJob` (fileio_asyncio.c) ← `POOL_thread` (pool.c)                                                                                                                                                                 |
|  0.0% |   0 B |       1 | `ZSTD_createCCtx_advanced` ← `ZSTDMT_createCCtxPool` (zstdmt_compress.c) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (zstd_compress.c) ← `FIO_compressFilename_srcFile` (fileio.c) ← `FIO_compressFilename_srcFile` |
|  0.0% |   0 B |       2 | `AIO_IOPool_init` (fileio_asyncio.c) ← `AIO_WritePool_create` ← `FIO_createCResources` (fileio.c)                                                                                                                                         |
|  0.0% |   0 B |       2 | `AIO_ReadPool_create` ← `FIO_createCResources` (fileio.c)                                                                                                                                                                                 |

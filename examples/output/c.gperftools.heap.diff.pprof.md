# Allocated heap profile diff

Allocated 132 MiB → 148 MiB (+16.003 MiB, +12.1%) over 78 objects → 81 objects (1.69 MiB → 1.83 MiB per object).

| Category | Change |       Delta |             % |                Size | Objects |
| -------- | -----: | ----------: | ------------: | ------------------: | ------: |
| Native   | +24.9% | +16.001 MiB | 48.7% → 54.2% | 64.3 MiB → 80.3 MiB | 29 → 32 |
| Ours     |    ~0% |  +1.898 KiB | 51.3% → 45.8% |            67.8 MiB |      49 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |      Delta |             % |                Size | Objects | Function                      | Location                                           |
| ------: | ---------: | ------------: | ------------------: | ------: | ----------------------------- | -------------------------------------------------- |
|  +25.0% |    +16 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB |       1 | `ZSTDMT_initCStream_internal` | `<unknown>`                                        |
| +103.5% | +1.843 KiB |         <0.1% | 1.78 KiB → 3.63 KiB |       1 | `ZSTDMT_createJobsTable`      | `zstdmt_compress.c`                                |
|  +12.5% |     +1 KiB |         <0.1% |       8 KiB → 9 KiB |   2 → 3 | `0x6d1bb`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| +100.0% |     +472 B |         <0.1% |       472 B → 944 B |   1 → 2 | `0x6dc07`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  +33.3% |     +304 B |         <0.1% |    912 B → 1.19 KiB |   3 → 4 | `0xf483`                      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +16.7% |      +48 B |         <0.1% |       288 B → 336 B |       4 | `ZSTDMT_createBufferPool`     | `zstdmt_compress.c`                                |
|   +0.6% |      +32 B |         <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx_advanced`    | `<unknown>`                                        |
|   +0.6% |      +32 B |         <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx`             | `<unknown>`                                        |
|   +0.5% |      +16 B |         <0.1% | 3.05 KiB → 3.06 KiB |       1 | `ZSTDMT_createCCtx_advanced`  | `<unknown>`                                        |
|   +0.7% |       +8 B |         <0.1% |            1.05 KiB |       9 | `POOL_create_advanced`        | `<unknown>`                                        |
|   +8.3% |       +8 B |         <0.1% |        96 B → 104 B |       2 | `ZSTDMT_createCCtxPool`       | `zstdmt_compress.c`                                |

##### Native

|  Change |   Delta |             % |                Size | Objects | Function                      | Location                                           |
| ------: | ------: | ------------: | ------------------: | ------: | ----------------------------- | -------------------------------------------------- |
|  +25.0% | +16 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB |       1 | `ZSTDMT_initCStream_internal` | `<unknown>`                                        |
|  +12.5% |  +1 KiB |         <0.1% |       8 KiB → 9 KiB |   2 → 3 | `0x6d1bb`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| +100.0% |  +472 B |         <0.1% |       472 B → 944 B |   1 → 2 | `0x6dc07`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  +33.3% |  +304 B |         <0.1% |    912 B → 1.19 KiB |   3 → 4 | `0xf483`                      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   +0.6% |   +32 B |         <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx_advanced`    | `<unknown>`                                        |
|   +0.6% |   +32 B |         <0.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx`             | `<unknown>`                                        |
|   +0.5% |   +16 B |         <0.1% | 3.05 KiB → 3.06 KiB |       1 | `ZSTDMT_createCCtx_advanced`  | `<unknown>`                                        |
|   +0.7% |    +8 B |         <0.1% |            1.05 KiB |       9 | `POOL_create_advanced`        | `<unknown>`                                        |

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

##### `0x6d1bb` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |  Delta |             % |          Size | Objects | Caller    | Location                               |
| -----: | -----: | ------------: | ------------: | ------: | --------- | -------------------------------------- |
| +25.0% | +1 KiB | 50.0% → 55.6% | 4 KiB → 5 KiB |   1 → 2 | `0x7b9cf` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x6dc07` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |  Delta |            % |        Size | Objects | Caller                   | Location |
| -----: | -----: | -----------: | ----------: | ------: | ------------------------ | -------- |
|    new | +472 B | 0.0% → 50.0% | 0 B → 472 B |   0 → 1 | `UTIL_countCores.part.0` | `util.c` |

##### `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

| Change |  Delta |      % |             Size | Objects | Caller   | Location                                           |
| -----: | -----: | -----: | ---------------: | ------: | -------- | -------------------------------------------------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `0xff2f` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `ZSTDMT_createBufferPool` (`zstdmt_compress.c`)

| Change | Delta |      % |          Size | Objects | Caller                       | Location    |
| -----: | ----: | -----: | ------------: | ------: | ---------------------------- | ----------- |
| +16.7% | +48 B | 100.0% | 288 B → 336 B |       4 | `ZSTDMT_createCCtx_advanced` | `<unknown>` |

##### `ZSTD_createCCtx_advanced` (`<unknown>`)

| Change | Delta |      % |                Size | Objects | Caller                  | Location            |
| -----: | ----: | -----: | ------------------: | ------: | ----------------------- | ------------------- |
|  +0.6% | +32 B | 100.0% | 5.13 KiB → 5.16 KiB |       1 | `ZSTDMT_createCCtxPool` | `zstdmt_compress.c` |

##### `ZSTD_createCCtx` (`<unknown>`)

| Change | Delta |      % |                Size | Objects | Caller                 | Location   |
| -----: | ----: | -----: | ------------------: | ------: | ---------------------- | ---------- |
|  +0.6% | +32 B | 100.0% | 5.13 KiB → 5.16 KiB |       1 | `FIO_createCResources` | `fileio.c` |

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

| Change |        Delta |             % |                Size | Objects | Function                         | Location                               |
| -----: | -----------: | ------------: | ------------------: | ------: | -------------------------------- | -------------------------------------- |
|    new |  +49.245 MiB |  0.0% → 33.3% |      0 B → 49.2 MiB |   0 → 1 | `0xffffaba2e377`                 | `<unknown>`                            |
| +24.0% |  +16.003 MiB | 50.6% → 55.9% | 66.8 MiB → 82.8 MiB | 75 → 78 | `main`                           | `<unknown>`                            |
| +24.0% |  +16.003 MiB | 50.6% → 55.9% | 66.8 MiB → 82.8 MiB | 75 → 78 | `0x27743`                        | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +24.0% |  +16.003 MiB | 50.6% → 55.9% | 66.8 MiB → 82.8 MiB | 75 → 78 | `0x27817`                        | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +24.0% |  +16.003 MiB | 50.6% → 55.9% | 66.8 MiB → 82.8 MiB | 75 → 78 | `_start`                         | `<unknown>`                            |
| +24.0% |  +16.002 MiB | 50.6% → 55.9% | 66.8 MiB → 82.8 MiB | 69 → 70 | `FIO_compressFilename`           | `<unknown>`                            |
| +25.0% |  +16.002 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB | 14 → 15 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c`                      |
| +25.0% |  +16.002 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB | 14 → 15 | `ZSTD_compressStream2`           | `<unknown>`                            |
| +25.0% |  +16.002 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB | 17 → 18 | `FIO_compressFilename_srcFile`   | `fileio.c`                             |
| +25.0% |      +16 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB |       1 | `ZSTDMT_initCStream_internal`    | `<unknown>`                            |
| +25.0% |      +16 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB |       1 | `0x1b`                           | `<unknown>`                            |
| +25.0% |      +16 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB |       1 | `0xb`                            | `<unknown>`                            |
|    new | +384.187 KiB |   0.0% → 0.3% |       0 B → 384 KiB |   0 → 7 | `0xffffad418077`                 | `<unknown>`                            |
|    new | +384.187 KiB |   0.0% → 0.3% |       0 B → 384 KiB |   0 → 7 | `0xfffffd78e897`                 | `<unknown>`                            |
|    new | +384.093 KiB |   0.0% → 0.3% |       0 B → 384 KiB |   0 → 5 | `0xfffffd78e80f`                 | `<unknown>`                            |
|    new |     +256 KiB |   0.0% → 0.2% |       0 B → 256 KiB |   0 → 1 | `0xaaaad02d5327`                 | `<unknown>`                            |
|    new |     +256 KiB |   0.0% → 0.2% |       0 B → 256 KiB |   0 → 1 | `0xfffffd78e84f`                 | `<unknown>`                            |
|    new | +130.538 KiB |   0.0% → 0.1% |       0 B → 131 KiB |  0 → 13 | `0xffffad441027`                 | `<unknown>`                            |
|    new |   +128.6 KiB |   0.0% → 0.1% |       0 B → 129 KiB |   0 → 3 | `0xfffffd78e89f`                 | `<unknown>`                            |
|    new |       +4 KiB |  0.0% → <0.1% |         0 B → 4 KiB |   0 → 1 | `0xffffaba402ff`                 | `<unknown>`                            |

##### Native

| Change |        Delta |             % |                Size | Objects | Function                      | Location                               |
| -----: | -----------: | ------------: | ------------------: | ------: | ----------------------------- | -------------------------------------- |
|    new |  +49.245 MiB |  0.0% → 33.3% |      0 B → 49.2 MiB |   0 → 1 | `0xffffaba2e377`              | `<unknown>`                            |
| +24.0% |  +16.003 MiB | 50.6% → 55.9% | 66.8 MiB → 82.8 MiB | 75 → 78 | `main`                        | `<unknown>`                            |
| +24.0% |  +16.003 MiB | 50.6% → 55.9% | 66.8 MiB → 82.8 MiB | 75 → 78 | `0x27743`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +24.0% |  +16.003 MiB | 50.6% → 55.9% | 66.8 MiB → 82.8 MiB | 75 → 78 | `0x27817`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +24.0% |  +16.003 MiB | 50.6% → 55.9% | 66.8 MiB → 82.8 MiB | 75 → 78 | `_start`                      | `<unknown>`                            |
| +24.0% |  +16.002 MiB | 50.6% → 55.9% | 66.8 MiB → 82.8 MiB | 69 → 70 | `FIO_compressFilename`        | `<unknown>`                            |
| +25.0% |  +16.002 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB | 14 → 15 | `ZSTD_compressStream2`        | `<unknown>`                            |
| +25.0% |      +16 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB |       1 | `ZSTDMT_initCStream_internal` | `<unknown>`                            |
| +25.0% |      +16 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB |       1 | `0x1b`                        | `<unknown>`                            |
| +25.0% |      +16 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB |       1 | `0xb`                         | `<unknown>`                            |
|    new | +384.187 KiB |   0.0% → 0.3% |       0 B → 384 KiB |   0 → 7 | `0xffffad418077`              | `<unknown>`                            |
|    new | +384.187 KiB |   0.0% → 0.3% |       0 B → 384 KiB |   0 → 7 | `0xfffffd78e897`              | `<unknown>`                            |
|    new | +384.093 KiB |   0.0% → 0.3% |       0 B → 384 KiB |   0 → 5 | `0xfffffd78e80f`              | `<unknown>`                            |
|    new |     +256 KiB |   0.0% → 0.2% |       0 B → 256 KiB |   0 → 1 | `0xaaaad02d5327`              | `<unknown>`                            |
|    new |     +256 KiB |   0.0% → 0.2% |       0 B → 256 KiB |   0 → 1 | `0xfffffd78e84f`              | `<unknown>`                            |
|    new | +130.538 KiB |   0.0% → 0.1% |       0 B → 131 KiB |  0 → 13 | `0xffffad441027`              | `<unknown>`                            |
|    new |   +128.6 KiB |   0.0% → 0.1% |       0 B → 129 KiB |   0 → 3 | `0xfffffd78e89f`              | `<unknown>`                            |
|    new |       +4 KiB |  0.0% → <0.1% |         0 B → 4 KiB |   0 → 1 | `0xffffaba402ff`              | `<unknown>`                            |
|    new |       +4 KiB |  0.0% → <0.1% |         0 B → 4 KiB |   0 → 1 | `0xfffffd78ed1f`              | `<unknown>`                            |
|    new |   +3.062 KiB |  0.0% → <0.1% |      0 B → 3.06 KiB |   0 → 1 | `0xffffad44101f`              | `<unknown>`                            |

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

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Native

|  Change |        Delta |             % |           Size | Objects | Function             | Location    |
| ------: | -----------: | ------------: | -------------: | ------: | -------------------- | ----------- |
| removed |  -49.245 MiB |  37.3% → 0.0% | 49.2 MiB → 0 B |   1 → 0 | `0xffffa301e377`     | `<unknown>` |
| removed | -384.187 KiB |   0.3% → 0.0% |  384 KiB → 0 B |   7 → 0 | `0xffffa4a18077`     | `<unknown>` |
| removed | -384.187 KiB |   0.3% → 0.0% |  384 KiB → 0 B |   7 → 0 | `0xffffd5e150c7`     | `<unknown>` |
| removed | -384.093 KiB |   0.3% → 0.0% |  384 KiB → 0 B |   5 → 0 | `0xffffd5e1503f`     | `<unknown>` |
| removed |     -256 KiB |   0.2% → 0.0% |  256 KiB → 0 B |   1 → 0 | `0xaaaad2360327`     | `<unknown>` |
| removed |     -256 KiB |   0.2% → 0.0% |  256 KiB → 0 B |   1 → 0 | `0xffffd5e1507f`     | `<unknown>` |
| removed |   -128.6 KiB |   0.1% → 0.0% |  129 KiB → 0 B |   3 → 0 | `0xffffd5e150cf`     | `<unknown>` |
| removed |   -9.429 KiB |  <0.1% → 0.0% | 9.43 KiB → 0 B |  15 → 0 | `0xffffa4330027`     | `<unknown>` |
| removed |       -4 KiB |  <0.1% → 0.0% |    4 KiB → 0 B |   1 → 0 | `0xffffa303021f`     | `<unknown>` |
| removed |       -4 KiB |  <0.1% → 0.0% |    4 KiB → 0 B |   1 → 0 | `0xffffd5e1554f`     | `<unknown>` |
| removed |       -784 B |  <0.1% → 0.0% |    784 B → 0 B |   4 → 0 | `0xb8f1c940cf651dff` | `<unknown>` |
| removed |       -776 B |  <0.1% → 0.0% |    776 B → 0 B |   4 → 0 | `0xffffa4a38fff`     | `<unknown>` |
| removed |       -472 B |  <0.1% → 0.0% |    472 B → 0 B |   1 → 0 | `0xffffd5e14f03`     | `<unknown>` |
| removed |       -472 B |  <0.1% → 0.0% |    472 B → 0 B |   1 → 0 | `0xffffd5e14e73`     | `<unknown>` |
| removed |       -472 B |  <0.1% → 0.0% |    472 B → 0 B |   1 → 0 | `0xffffa4a8cfff`     | `<unknown>` |
| removed |       -304 B |  <0.1% → 0.0% |    304 B → 0 B |   1 → 0 | `0xffffa4a847bf`     | `<unknown>` |
| removed |       -192 B |  <0.1% → 0.0% |    192 B → 0 B |   1 → 0 | `0xffffd5e1517f`     | `<unknown>` |
| removed |       -192 B |  <0.1% → 0.0% |    192 B → 0 B |   1 → 0 | `0xffffd5e15177`     | `<unknown>` |
| removed |       -176 B |  <0.1% → 0.0% |    176 B → 0 B |   4 → 0 | `0xffffd5e1549f`     | `<unknown>` |
|     ~0% |       -144 B | 12.2% → 10.9% |       16.1 MiB |   8 → 6 | `0xffffffffffffffff` | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `0xffffaba2e377` (`<unknown>`)

| Change |       Delta |             % |           Size | Objects | Callee       | Location    |
| -----: | ----------: | ------------: | -------------: | ------: | ------------ | ----------- |
|    new | +49.245 MiB | 0.0% → 100.0% | 0 B → 49.2 MiB |   0 → 1 | `0xfbad8000` | `<unknown>` |

##### `main` (`<unknown>`)

| Change |        Delta |            % |                Size | Objects | Callee                   | Location    |
| -----: | -----------: | -----------: | ------------------: | ------: | ------------------------ | ----------- |
| +24.0% |  +16.002 MiB |       100.0% | 66.8 MiB → 82.8 MiB | 69 → 70 | `FIO_compressFilename`   | `<unknown>` |
| -16.7% | -128.545 KiB |  1.1% → 0.8% |   769 KiB → 641 KiB | 14 → 12 | `_start`                 | `<unknown>` |
|    new |    +1.46 KiB | 0.0% → <0.1% |      0 B → 1.46 KiB |   0 → 2 | `UTIL_countCores.part.0` | `util.c`    |

##### `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |        Delta |           % |                Size | Objects | Callee           | Location    |
| -----: | -----------: | ----------: | ------------------: | ------: | ---------------- | ----------- |
| +24.0% |  +16.003 MiB |      100.0% | 66.8 MiB → 82.8 MiB | 75 → 78 | `main`           | `<unknown>` |
|    new | +128.553 KiB | 0.0% → 0.2% |       0 B → 129 KiB |   0 → 2 | `0xffffad441027` | `<unknown>` |

##### `0x27817` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |       Delta |           % |                Size | Objects | Callee    | Location                               |
| -----: | ----------: | ----------: | ------------------: | ------: | --------- | -------------------------------------- |
| +24.0% | +16.003 MiB |      100.0% | 66.8 MiB → 82.8 MiB | 75 → 78 | `0x27743` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +0.5% |  +1.843 KiB | 0.6% → 0.5% |   387 KiB → 389 KiB |       6 | `_start`  | `<unknown>`                            |

##### `_start` (`<unknown>`)

| Change |       Delta |      % |                Size | Objects | Callee    | Location                               |
| -----: | ----------: | -----: | ------------------: | ------: | --------- | -------------------------------------- |
| +24.0% | +16.003 MiB | 100.0% | 66.8 MiB → 82.8 MiB | 75 → 78 | `0x27817` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

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

| Change |       Delta |            % |            Size | Objects | Callee                           | Location          |
| -----: | ----------: | -----------: | --------------: | ------: | -------------------------------- | ----------------- |
| +25.0% | +16.002 MiB |       100.0% | 64 MiB → 80 MiB | 14 → 15 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |
|    new |  +5.164 KiB | 0.0% → <0.1% |  0 B → 5.16 KiB |   0 → 1 | `_start`                         | `<unknown>`       |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|  Change |       Delta |            % |            Size | Objects | Callee                 | Location    |
| ------: | ----------: | -----------: | --------------: | ------: | ---------------------- | ----------- |
|  +25.0% | +16.002 MiB |       100.0% | 64 MiB → 80 MiB | 14 → 15 | `ZSTD_compressStream2` | `<unknown>` |
| removed |  -5.132 KiB | <0.1% → 0.0% |  5.13 KiB → 0 B |   1 → 0 | `0xffffa4330027`       | `<unknown>` |

##### `0x1b` (`<unknown>`)

| Change |   Delta |      % |            Size | Objects | Callee   | Location    |
| -----: | ------: | -----: | --------------: | ------: | -------- | ----------- |
| +25.0% | +16 MiB | 100.0% | 64 MiB → 80 MiB |       1 | `_start` | `<unknown>` |

##### `0xb` (`<unknown>`)

| Change |   Delta |      % |            Size | Objects | Callee | Location    |
| -----: | ------: | -----: | --------------: | ------: | ------ | ----------- |
| +25.0% | +16 MiB | 100.0% | 64 MiB → 80 MiB |       1 | `0x1b` | `<unknown>` |

##### `0xffffad418077` (`<unknown>`)

| Change |        Delta |             % |          Size | Objects | Callee   | Location    |
| -----: | -----------: | ------------: | ------------: | ------: | -------- | ----------- |
|    new | +384.187 KiB | 0.0% → 100.0% | 0 B → 384 KiB |   0 → 7 | `_start` | `<unknown>` |

##### `0xfffffd78e897` (`<unknown>`)

| Change |        Delta |             % |          Size | Objects | Callee           | Location    |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------- | ----------- |
|    new | +384.187 KiB | 0.0% → 100.0% | 0 B → 384 KiB |   0 → 7 | `0xffffad418077` | `<unknown>` |

##### `0xfffffd78e80f` (`<unknown>`)

| Change |        Delta |             % |          Size | Objects | Callee   | Location    |
| -----: | -----------: | ------------: | ------------: | ------: | -------- | ----------- |
|    new | +384.093 KiB | 0.0% → 100.0% | 0 B → 384 KiB |   0 → 5 | `_start` | `<unknown>` |

##### `0xaaaad02d5327` (`<unknown>`)

| Change |    Delta |             % |          Size | Objects | Callee   | Location    |
| -----: | -------: | ------------: | ------------: | ------: | -------- | ----------- |
|    new | +256 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `_start` | `<unknown>` |

##### `0xfffffd78e84f` (`<unknown>`)

| Change |    Delta |             % |          Size | Objects | Callee           | Location    |
| -----: | -------: | ------------: | ------------: | ------: | ---------------- | ----------- |
|    new | +256 KiB | 0.0% → 100.0% | 0 B → 256 KiB |   0 → 1 | `0xaaaad02d5327` | `<unknown>` |

##### `0xffffad441027` (`<unknown>`)

| Change |        Delta |            % |           Size | Objects | Callee           | Location                               |
| -----: | -----------: | -----------: | -------------: | ------: | ---------------- | -------------------------------------- |
|    new | +129.764 KiB | 0.0% → 99.4% |  0 B → 130 KiB |   0 → 8 | `_start`         | `<unknown>`                            |
|    new |   +1.039 KiB |  0.0% → 0.8% | 0 B → 1.04 KiB |   0 → 2 | `0xffffad441027` | `<unknown>`                            |
|    new |       +400 B |  0.0% → 0.3% |    0 B → 400 B |   0 → 3 | `0xffffad438fff` | `<unknown>`                            |
|    new |       +392 B |  0.0% → 0.3% |    0 B → 392 B |   0 → 2 | `0x3e8f`         | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xfffffd78e89f` (`<unknown>`)

| Change |      Delta |             % |          Size | Objects | Callee   | Location    |
| -----: | ---------: | ------------: | ------------: | ------: | -------- | ----------- |
|    new | +128.6 KiB | 0.0% → 100.0% | 0 B → 129 KiB |   0 → 3 | `_start` | `<unknown>` |

##### `0xffffaba402ff` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| -----: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
|    new | +4 KiB | 0.0% → 100.0% | 0 B → 4 KiB |   0 → 1 | `_start` | `<unknown>` |

##### `0xfffffd78ed1f` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Callee           | Location    |
| -----: | -----: | ------------: | ----------: | ------: | ---------------- | ----------- |
|    new | +4 KiB | 0.0% → 100.0% | 0 B → 4 KiB |   0 → 1 | `0xffffaba402ff` | `<unknown>` |

##### `0xffffad44101f` (`<unknown>`)

| Change |      Delta |             % |           Size | Objects | Callee   | Location    |
| -----: | ---------: | ------------: | -------------: | ------: | -------- | ----------- |
|    new | +3.062 KiB | 0.0% → 100.0% | 0 B → 3.06 KiB |   0 → 1 | `_start` | `<unknown>` |

##### `UTIL_countCores.part.0` (`util.c`)

| Change |  Delta |            % |        Size | Objects | Callee    | Location                               |
| -----: | -----: | -----------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1 KiB | 0.0% → 68.4% | 0 B → 1 KiB |   0 → 1 | `0x6da83` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +472 B | 0.0% → 31.6% | 0 B → 472 B |   0 → 1 | `0x6dc07` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `ZSTDMT_createCCtxPool` (`zstdmt_compress.c`)

| Change | Delta |             % |                Size | Objects | Callee                     | Location    |
| -----: | ----: | ------------: | ------------------: | ------: | -------------------------- | ----------- |
|  +0.6% | +32 B | 98.2% → 98.1% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx_advanced` | `<unknown>` |

##### `FIO_createCResources` (`fileio.c`)

| Change | Delta |    % |                Size | Objects | Callee            | Location    |
| -----: | ----: | ---: | ------------------: | ------: | ----------------- | ----------- |
|  +0.6% | +32 B | 0.2% | 5.13 KiB → 5.16 KiB |       1 | `ZSTD_createCCtx` | `<unknown>` |

##### `0xffffa301e377` (`<unknown>`)

|  Change |       Delta |             % |           Size | Objects | Callee       | Location    |
| ------: | ----------: | ------------: | -------------: | ------: | ------------ | ----------- |
| removed | -49.245 MiB | 100.0% → 0.0% | 49.2 MiB → 0 B |   1 → 0 | `0xfbad8000` | `<unknown>` |

##### `0xffffa4a18077` (`<unknown>`)

|  Change |        Delta |             % |          Size | Objects | Callee   | Location    |
| ------: | -----------: | ------------: | ------------: | ------: | -------- | ----------- |
| removed | -384.187 KiB | 100.0% → 0.0% | 384 KiB → 0 B |   7 → 0 | `_start` | `<unknown>` |

##### `0xffffd5e150c7` (`<unknown>`)

|  Change |        Delta |             % |          Size | Objects | Callee           | Location    |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------- | ----------- |
| removed | -384.187 KiB | 100.0% → 0.0% | 384 KiB → 0 B |   7 → 0 | `0xffffa4a18077` | `<unknown>` |

##### `0xffffd5e1503f` (`<unknown>`)

|  Change |        Delta |             % |          Size | Objects | Callee   | Location    |
| ------: | -----------: | ------------: | ------------: | ------: | -------- | ----------- |
| removed | -384.093 KiB | 100.0% → 0.0% | 384 KiB → 0 B |   5 → 0 | `_start` | `<unknown>` |

##### `0xaaaad2360327` (`<unknown>`)

|  Change |    Delta |             % |          Size | Objects | Callee   | Location    |
| ------: | -------: | ------------: | ------------: | ------: | -------- | ----------- |
| removed | -256 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `_start` | `<unknown>` |

##### `0xffffd5e1507f` (`<unknown>`)

|  Change |    Delta |             % |          Size | Objects | Callee           | Location    |
| ------: | -------: | ------------: | ------------: | ------: | ---------------- | ----------- |
| removed | -256 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `0xaaaad2360327` | `<unknown>` |

##### `0xffffd5e150cf` (`<unknown>`)

|  Change |      Delta |             % |          Size | Objects | Callee   | Location    |
| ------: | ---------: | ------------: | ------------: | ------: | -------- | ----------- |
| removed | -128.6 KiB | 100.0% → 0.0% | 129 KiB → 0 B |   3 → 0 | `_start` | `<unknown>` |

##### `0xffffa4330027` (`<unknown>`)

|  Change |      Delta |            % |           Size | Objects | Callee           | Location                               |
| ------: | ---------: | -----------: | -------------: | ------: | ---------------- | -------------------------------------- |
| removed | -8.656 KiB | 91.8% → 0.0% | 8.66 KiB → 0 B |  10 → 0 | `_start`         | `<unknown>`                            |
| removed | -3.351 KiB | 35.5% → 0.0% | 3.35 KiB → 0 B |   5 → 0 | `0xffffa4330027` | `<unknown>`                            |
| removed |     -400 B |  4.1% → 0.0% |    400 B → 0 B |   3 → 0 | `0xffffa4a38fff` | `<unknown>`                            |
| removed |     -392 B |  4.1% → 0.0% |    392 B → 0 B |   2 → 0 | `0x3e8f`         | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xffffa303021f` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| ------: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -4 KiB | 100.0% → 0.0% | 4 KiB → 0 B |   1 → 0 | `_start` | `<unknown>` |

##### `0xffffd5e1554f` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee           | Location    |
| ------: | -----: | ------------: | ----------: | ------: | ---------------- | ----------- |
| removed | -4 KiB | 100.0% → 0.0% | 4 KiB → 0 B |   1 → 0 | `0xffffa303021f` | `<unknown>` |

##### `0xb8f1c940cf651dff` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| ------: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -784 B | 100.0% → 0.0% | 784 B → 0 B |   4 → 0 | `_start` | `<unknown>` |

##### `0xffffa4a38fff` (`<unknown>`)

|  Change |  Delta |            % |        Size | Objects | Callee    | Location                                           |
| ------: | -----: | -----------: | ----------: | ------: | --------- | -------------------------------------------------- |
| removed | -400 B | 51.5% → 0.0% | 400 B → 0 B |   3 → 0 | `_start`  | `<unknown>`                                        |
| removed | -376 B | 48.5% → 0.0% | 376 B → 0 B |   1 → 0 | `0x3143b` | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `0xffffd5e14f03` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| ------: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -472 B | 100.0% → 0.0% | 472 B → 0 B |   1 → 0 | `_start` | `<unknown>` |

##### `0xffffd5e14e73` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| ------: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -472 B | 100.0% → 0.0% | 472 B → 0 B |   1 → 0 | `_start` | `<unknown>` |

##### `0xffffa4a8cfff` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee           | Location    |
| ------: | -----: | ------------: | ----------: | ------: | ---------------- | ----------- |
| removed | -472 B | 100.0% → 0.0% | 472 B → 0 B |   1 → 0 | `0xffffd5e14e73` | `<unknown>` |

##### `0xffffa4a847bf` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee | Location    |
| ------: | -----: | ------------: | ----------: | ------: | ------ | ----------- |
| removed | -304 B | 100.0% → 0.0% | 304 B → 0 B |   1 → 0 | `0x0`  | `<unknown>` |

##### `0xffffd5e1517f` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| ------: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -192 B | 100.0% → 0.0% | 192 B → 0 B |   1 → 0 | `_start` | `<unknown>` |

##### `0xffffd5e15177` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee           | Location    |
| ------: | -----: | ------------: | ----------: | ------: | ---------------- | ----------- |
| removed | -192 B | 100.0% → 0.0% | 192 B → 0 B |   1 → 0 | `0xffffd5e1517f` | `<unknown>` |

##### `0xffffd5e1549f` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee           | Location    |
| ------: | -----: | ------------: | ----------: | ------: | ---------------- | ----------- |
| removed | -176 B | 100.0% → 0.0% | 176 B → 0 B |   4 → 0 | `0xffffa4330027` | `<unknown>` |

##### `0xffffffffffffffff` (`<unknown>`)

|  Change |  Delta |            % |               Size | Objects | Callee               | Location    |
| ------: | -----: | -----------: | -----------------: | ------: | -------------------- | ----------- |
| removed | -784 B | <0.1% → 0.0% |        784 B → 0 B |   4 → 0 | `0xb8f1c940cf651dff` | `<unknown>` |
|     new | +608 B | 0.0% → <0.1% |        0 B → 608 B |   0 → 2 | `0x702b001116049ff`  | `<unknown>` |
|   +0.6% |  +32 B |        <0.1% | 5.27 KiB → 5.3 KiB |       2 | `_start`             | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes allocated in their leaf frame.

|  Change |        Delta |             % |                Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------: | -----------: | ------------: | ------------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new |  +49.245 MiB |  0.0% → 33.3% |      0 B → 49.2 MiB |   0 → 1 | `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b` ← `0xfbad8000` ← `0xffffaba2e377`                                                                                                                                                                       |
|  +25.0% |      +16 MiB | 48.5% → 54.0% |     64 MiB → 80 MiB |       1 | `ZSTDMT_initCStream_internal` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x1b` ← `0xb`                                                                                                                                                                                 |
|     new | +384.187 KiB |   0.0% → 0.3% |       0 B → 384 KiB |   0 → 7 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffad418077` ← `0xfffffd78e897`                                                                                                                                                                                                                   |
|     new | +384.093 KiB |   0.0% → 0.3% |       0 B → 384 KiB |   0 → 5 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xfffffd78e80f` ← `0x3567f` (`/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)                                                                                                                                                                     |
|     new |     +256 KiB |   0.0% → 0.2% |       0 B → 256 KiB |   0 → 1 | `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xaaaad02d5327` ← `0xfffffd78e84f`                                                                                                                                                                                                                                                            |
|     new |   +128.6 KiB |   0.0% → 0.1% |       0 B → 129 KiB |   0 → 3 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xfffffd78e89f` ← `0x25f`                                                                                                                                                                                                                           |
|     new | +128.553 KiB |   0.0% → 0.1% |       0 B → 129 KiB |   0 → 2 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffad441027` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)                                                                                                                                                                                |
|     new |   +5.164 KiB |  0.0% → <0.1% |      0 B → 5.16 KiB |   0 → 1 | `ZSTD_createCCtx_advanced` ← `ZSTDMT_createCCtxPool` (`zstdmt_compress.c`) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`)                                               |
|     new |       +4 KiB |  0.0% → <0.1% |         0 B → 4 KiB |   0 → 1 | `0x6d1bb` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x7004b` ← `FIO_openDstFile` (`fileio.c`) ← `FIO_compressFilename_srcFile` ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffaba402ff` ← `0xfffffd78ed1f`                                                                                                                                                                                       |
|     new |   +3.062 KiB |  0.0% → <0.1% |      0 B → 3.06 KiB |   0 → 1 | `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffad44101f` ← `0xffffaba4043f`                                                                                                                                                             |
| +103.5% |   +1.843 KiB |         <0.1% | 1.78 KiB → 3.63 KiB |       1 | `ZSTDMT_createJobsTable` (`zstdmt_compress.c`) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x27817` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `_start`                                                                                  |
|     new |       +1 KiB |  0.0% → <0.1% |         0 B → 1 KiB |   0 → 1 | `0x6d1bb` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x7b9cf` ← `0x7ab23` ← `0x7ba8f` ← `0x6ec2f` ← `0x6da83` ← `UTIL_countCores.part.0` (`util.c`) ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffad441027` ← `0xffffad441027`                                                                                                                                                                                            |
|     new |       +472 B |  0.0% → <0.1% |         0 B → 472 B |   0 → 1 | `0x6d533` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `FIO_openDstFile` (`fileio.c`) ← `FIO_compressFilename_srcFile` ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xfffffd78e643` ← `0xffffad48ffff`                                                                                                                                                                                                   |
|     new |       +472 B |  0.0% → <0.1% |         0 B → 472 B |   0 → 1 | `0x6dc07` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `FIO_openSrcFile` (`fileio.c`) ← `FIO_compressFilename_srcFile` ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xfffffd78e71f` ← `0x2dfb3` (`/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)                                                                                                                                                     |
|     new |       +472 B |  0.0% → <0.1% |         0 B → 472 B |   0 → 1 | `0x6dc07` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `UTIL_countCores.part.0` (`util.c`) ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffad4877bf` ← `0xfffffd78eba7`                                                                                                                                                                                                                                                        |
|     new |       +400 B |  0.0% → <0.1% |         0 B → 400 B |   0 → 3 | `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffad438fff` ← `0xffffad441027`                                                                                                                                                                          |
|     new |       +392 B |  0.0% → <0.1% |         0 B → 392 B |   0 → 2 | `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x3e8f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xffffad441027`                                                                                                                                        |
|     new |       +376 B |  0.0% → <0.1% |         0 B → 376 B |   0 → 1 | `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x3143b` (`/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`) ← `0xffffad438fff`                                                                                                                                                                                                              |
|     new |       +304 B |  0.0% → <0.1% |         0 B → 304 B |   0 → 1 | `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`) ← `0xff2f` ← `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x702b001116049ff` ← `0xffffffffffffffff`                                   |
|     new |       +304 B |  0.0% → <0.1% |         0 B → 304 B |   0 → 1 | `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`) ← `0xff2f` ← `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `POOL_create_advanced` ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x702b001116049ff` ← `0xfffffd78e19f` |

### Improvements

Call stacks with the largest decrease in bytes allocated in their leaf frame.

|  Change |        Delta |            % |              Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------: | -----------: | -----------: | ----------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |  -49.245 MiB | 37.3% → 0.0% |    49.2 MiB → 0 B |   1 → 0 | `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xebf5b` ← `0xfbad8000` ← `0xffffa301e377`                                                                                                                                                                            |
| removed | -384.187 KiB |  0.3% → 0.0% |     384 KiB → 0 B |   7 → 0 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffa4a18077` ← `0xffffd5e150c7`                                                                                                                                                                                                                        |
| removed | -384.093 KiB |  0.3% → 0.0% |     384 KiB → 0 B |   5 → 0 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffd5e1503f` ← `0x3567f` (`/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)                                                                                                                                                                          |
| removed |     -256 KiB |  0.2% → 0.0% |     256 KiB → 0 B |   1 → 0 | `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xaaaad2360327` ← `0xffffd5e1507f`                                                                                                                                                                                                                                                                 |
| removed |   -128.6 KiB |  0.1% → 0.0% |     129 KiB → 0 B |   3 → 0 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffd5e150cf` ← `0x25f`                                                                                                                                                                                                                                |
|  -50.0% | -128.553 KiB |  0.2% → 0.1% | 257 KiB → 129 KiB |   4 → 2 | `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)                                                                                                                                                                                               |
| removed |   -5.132 KiB | <0.1% → 0.0% |    5.13 KiB → 0 B |   1 → 0 | `ZSTD_createCCtx_advanced` ← `ZSTDMT_createCCtxPool` (`zstdmt_compress.c`) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffa4330027` ← `FIO_compressFilename_srcFile` (`fileio.c`)                                                          |
| removed |       -4 KiB | <0.1% → 0.0% |       4 KiB → 0 B |   1 → 0 | `0x6d1bb` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x7004b` ← `FIO_openDstFile` (`fileio.c`) ← `FIO_compressFilename_srcFile` ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffa303021f` ← `0xffffd5e1554f`                                                                                                                                                                                            |
| removed |   -3.046 KiB | <0.1% → 0.0% |    3.05 KiB → 0 B |   1 → 0 | `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffa4330027` ← `0xffffa4330027`                                                                                                                                                                  |
| removed |       -472 B | <0.1% → 0.0% |       472 B → 0 B |   1 → 0 | `0x6dc07` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `FIO_openSrcFile` (`fileio.c`) ← `FIO_compressFilename_srcFile` ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffd5e14f03` ← `0x2dfb3` (`/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)                                                                                                                                                          |
| removed |       -472 B | <0.1% → 0.0% |       472 B → 0 B |   1 → 0 | `0x6d533` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `FIO_openDstFile` (`fileio.c`) ← `FIO_compressFilename_srcFile` ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffd5e14e73` ← `0xffffa4a8cfff`                                                                                                                                                                                                        |
| removed |       -400 B | <0.1% → 0.0% |       400 B → 0 B |   3 → 0 | `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffa4a38fff` ← `0xffffa4330027`                                                                                                                                                                               |
| removed |       -392 B | <0.1% → 0.0% |       392 B → 0 B |   2 → 0 | `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x3e8f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0xffffa4330027`                                                                                                                                             |
| removed |       -376 B | <0.1% → 0.0% |       376 B → 0 B |   1 → 0 | `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x3143b` (`/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`) ← `0xffffa4a38fff`                                                                                                                                                                                                                   |
| removed |       -304 B | <0.1% → 0.0% |       304 B → 0 B |   1 → 0 | `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`) ← `0xff2f` ← `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x0` ← `0xffffa4a847bf`                                                         |
| removed |       -304 B | <0.1% → 0.0% |       304 B → 0 B |   1 → 0 | `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`) ← `0xff2f` ← `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xb8f1c940cf651dff` ← `0xffffffffffffffff`                                       |
| removed |       -304 B | <0.1% → 0.0% |       304 B → 0 B |   1 → 0 | `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`) ← `0xff2f` ← `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `POOL_create_advanced` ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xb8f1c940cf651dff` ← `0xffffffffffffffff` |
| removed |       -272 B | <0.1% → 0.0% |       272 B → 0 B |   3 → 0 | `POOL_create_advanced` ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffa4330027` ← `0xffffa4330027`                                                                                                                                         |
| removed |       -192 B | <0.1% → 0.0% |       192 B → 0 B |   1 → 0 | `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffd5e1517f` ← `0xffffd5e15177`                                                                                                                                                                                                                                                                |
| removed |       -176 B | <0.1% → 0.0% |       176 B → 0 B |   2 → 0 | `ZSTDMT_createBufferPool` (`zstdmt_compress.c`) ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xb8f1c940cf651dff` ← `0xffffffffffffffff`                                                                                                        |

# Retained heap profile diff

Retained 912 B → 1.19 KiB (+304 B, +33.3%) over 3 objects → 4 objects (304 B per object).

| Category | Change |  Delta |      % |             Size | Objects |
| -------- | -----: | -----: | -----: | ---------------: | ------: |
| Native   | +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Native

| Change |  Delta |      % |             Size | Objects | Function | Location                                           |
| -----: | -----: | -----: | ---------------: | ------: | -------- | -------------------------------------------------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `0xf483` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

| Change |  Delta |      % |             Size | Objects | Caller   | Location                                           |
| -----: | -----: | -----: | ---------------: | ------: | -------- | -------------------------------------------------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `0xff2f` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

### Total size

#### Regressions

Functions with the largest increase in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |  Delta |             % |             Size | Objects | Function                         | Location                                           |
| ------: | -----: | ------------: | ---------------: | ------: | -------------------------------- | -------------------------------------------------- |
|     new | +912 B |  0.0% → 75.0% |      0 B → 912 B |   0 → 3 | `0x702b001116049ff`              | `<unknown>`                                        |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `0xf483`                         | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `0xff2f`                         | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `0x82a23`                        | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `POOL_create_advanced`           | `<unknown>`                                        |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `FIO_compressFilename`           | `<unknown>`                                        |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `main`                           | `<unknown>`                                        |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `0x27743`                        | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `0x27817`                        | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `_start`                         | `<unknown>`                                        |
| +100.0% | +304 B | 33.3% → 50.0% |    304 B → 608 B |   1 → 2 | `ZSTDMT_createCCtx_advanced`     | `<unknown>`                                        |
| +100.0% | +304 B | 33.3% → 50.0% |    304 B → 608 B |   1 → 2 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c`                                  |
| +100.0% | +304 B | 33.3% → 50.0% |    304 B → 608 B |   1 → 2 | `ZSTD_compressStream2`           | `<unknown>`                                        |
| +100.0% | +304 B | 33.3% → 50.0% |    304 B → 608 B |   1 → 2 | `FIO_compressFilename_srcFile`   | `fileio.c`                                         |
|     new | +304 B |  0.0% → 25.0% |      0 B → 304 B |   0 → 1 | `0xfffffd78e19f`                 | `<unknown>`                                        |
|     new | +304 B |  0.0% → 25.0% |      0 B → 304 B |   0 → 1 | `0xffffad4877bf`                 | `<unknown>`                                        |

##### Native

|  Change |  Delta |             % |             Size | Objects | Function                     | Location                                           |
| ------: | -----: | ------------: | ---------------: | ------: | ---------------------------- | -------------------------------------------------- |
|     new | +912 B |  0.0% → 75.0% |      0 B → 912 B |   0 → 3 | `0x702b001116049ff`          | `<unknown>`                                        |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `0xf483`                     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `0xff2f`                     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `0x82a23`                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `POOL_create_advanced`       | `<unknown>`                                        |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `FIO_compressFilename`       | `<unknown>`                                        |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `main`                       | `<unknown>`                                        |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `0x27743`                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `0x27817`                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  +33.3% | +304 B |        100.0% | 912 B → 1.19 KiB |   3 → 4 | `_start`                     | `<unknown>`                                        |
| +100.0% | +304 B | 33.3% → 50.0% |    304 B → 608 B |   1 → 2 | `ZSTDMT_createCCtx_advanced` | `<unknown>`                                        |
| +100.0% | +304 B | 33.3% → 50.0% |    304 B → 608 B |   1 → 2 | `ZSTD_compressStream2`       | `<unknown>`                                        |
|     new | +304 B |  0.0% → 25.0% |      0 B → 304 B |   0 → 1 | `0xfffffd78e19f`             | `<unknown>`                                        |
|     new | +304 B |  0.0% → 25.0% |      0 B → 304 B |   0 → 1 | `0xffffad4877bf`             | `<unknown>`                                        |

#### Improvements

Functions with the largest decrease in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Native

|  Change |  Delta |            % |        Size | Objects | Function             | Location    |
| ------: | -----: | -----------: | ----------: | ------: | -------------------- | ----------- |
| removed | -608 B | 66.7% → 0.0% | 608 B → 0 B |   2 → 0 | `0xb8f1c940cf651dff` | `<unknown>` |
| removed | -304 B | 33.3% → 0.0% | 304 B → 0 B |   1 → 0 | `0xffffa4a847bf`     | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `0x702b001116049ff` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| -----: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
|    new | +912 B | 0.0% → 100.0% | 0 B → 912 B |   0 → 3 | `_start` | `<unknown>` |

##### `0xff2f` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

| Change |  Delta |      % |             Size | Objects | Callee   | Location                                           |
| -----: | -----: | -----: | ---------------: | ------: | -------- | -------------------------------------------------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `0xf483` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |  Delta |      % |             Size | Objects | Callee   | Location                                           |
| -----: | -----: | -----: | ---------------: | ------: | -------- | -------------------------------------------------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `0xff2f` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `POOL_create_advanced` (`<unknown>`)

| Change |  Delta |      % |             Size | Objects | Callee    | Location                               |
| -----: | -----: | -----: | ---------------: | ------: | --------- | -------------------------------------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `0x82a23` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `FIO_compressFilename` (`<unknown>`)

|  Change |  Delta |             % |          Size | Objects | Callee                         | Location   |
| ------: | -----: | ------------: | ------------: | ------: | ------------------------------ | ---------- |
| +100.0% | +304 B | 33.3% → 50.0% | 304 B → 608 B |   1 → 2 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `main` (`<unknown>`)

| Change |  Delta |      % |             Size | Objects | Callee                 | Location    |
| -----: | -----: | -----: | ---------------: | ------: | ---------------------- | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `FIO_compressFilename` | `<unknown>` |

##### `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |  Delta |      % |             Size | Objects | Callee | Location    |
| -----: | -----: | -----: | ---------------: | ------: | ------ | ----------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `main` | `<unknown>` |

##### `0x27817` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |  Delta |      % |             Size | Objects | Callee    | Location                               |
| -----: | -----: | -----: | ---------------: | ------: | --------- | -------------------------------------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `0x27743` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_start` (`<unknown>`)

| Change |  Delta |      % |             Size | Objects | Callee    | Location                               |
| -----: | -----: | -----: | ---------------: | ------: | --------- | -------------------------------------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `0x27817` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

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

##### `0xfffffd78e19f` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Callee              | Location    |
| -----: | -----: | ------------: | ----------: | ------: | ------------------- | ----------- |
|    new | +304 B | 0.0% → 100.0% | 0 B → 304 B |   0 → 1 | `0x702b001116049ff` | `<unknown>` |

##### `0xffffad4877bf` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Callee | Location    |
| -----: | -----: | ------------: | ----------: | ------: | ------ | ----------- |
|    new | +304 B | 0.0% → 100.0% | 0 B → 304 B |   0 → 1 | `0x0`  | `<unknown>` |

##### `0xb8f1c940cf651dff` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| ------: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -608 B | 100.0% → 0.0% | 608 B → 0 B |   2 → 0 | `_start` | `<unknown>` |

##### `0xffffa4a847bf` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee | Location    |
| ------: | -----: | ------------: | ----------: | ------: | ------ | ----------- |
| removed | -304 B | 100.0% → 0.0% | 304 B → 0 B |   1 → 0 | `0x0`  | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes retained in their leaf frame.

| Change |  Delta |            % |        Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -----: | -----: | -----------: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    new | +304 B | 0.0% → 25.0% | 0 B → 304 B |   0 → 1 | `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`) ← `0xff2f` ← `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x702b001116049ff` ← `0xffffffffffffffff`                                       |
|    new | +304 B | 0.0% → 25.0% | 0 B → 304 B |   0 → 1 | `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`) ← `0xff2f` ← `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `POOL_create_advanced` ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x702b001116049ff` ← `0xfffffd78e19f`     |
|    new | +304 B | 0.0% → 25.0% | 0 B → 304 B |   0 → 1 | `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`) ← `0xff2f` ← `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x0` ← `0xffffad4877bf`                                                        |
|    new | +304 B | 0.0% → 25.0% | 0 B → 304 B |   0 → 1 | `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`) ← `0xff2f` ← `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `POOL_create_advanced` ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x702b001116049ff` ← `0xffffffffffffffff` |

### Improvements

Call stacks with the largest decrease in bytes retained in their leaf frame.

|  Change |  Delta |            % |        Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------: | -----: | -----------: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -304 B | 33.3% → 0.0% | 304 B → 0 B |   1 → 0 | `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`) ← `0xff2f` ← `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_WritePool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x0` ← `0xffffa4a847bf`                                                         |
| removed | -304 B | 33.3% → 0.0% | 304 B → 0 B |   1 → 0 | `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`) ← `0xff2f` ← `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `POOL_create_advanced` ← `POOL_create` ← `AIO_IOPool_init` (`fileio_asyncio.c`) ← `AIO_ReadPool_create` ← `FIO_createCResources` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xb8f1c940cf651dff` ← `0xffffffffffffffff`                                       |
| removed | -304 B | 33.3% → 0.0% | 304 B → 0 B |   1 → 0 | `0xf483` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`) ← `0xff2f` ← `0x82a23` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `POOL_create_advanced` ← `ZSTDMT_createCCtx_advanced` ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xb8f1c940cf651dff` ← `0xffffffffffffffff` |

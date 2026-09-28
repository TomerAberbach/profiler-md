# Allocated heap profile diff

Allocated 132 MiB → 148 MiB (+16.003 MiB, +12.1%) over 78 objects → 81 objects (1.69 MiB → 1.83 MiB per object).

| Category | Change |       Delta |             % |                Size | Objects |
| -------- | -----: | ----------: | ------------: | ------------------: | ------: |
| Native   | +24.9% | +16.001 MiB | 48.7% → 54.2% | 64.3 MiB → 80.3 MiB | 29 → 32 |
| Ours     |    ~0% |  +1.898 KiB | 51.3% → 45.8% |            67.8 MiB |      49 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

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

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

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

Functions with the largest decrease in total bytes allocated in the function and all its callees.

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

# Retained heap profile diff

Retained 912 B → 1.19 KiB (+304 B, +33.3%) over 3 objects → 4 objects (304 B per object).

| Category | Change |  Delta |      % |             Size | Objects |
| -------- | -----: | -----: | -----: | ---------------: | ------: |
| Native   | +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

##### Native

| Change |  Delta |      % |             Size | Objects | Function | Location                                           |
| -----: | -----: | -----: | ---------------: | ------: | -------- | -------------------------------------------------- |
| +33.3% | +304 B | 100.0% | 912 B → 1.19 KiB |   3 → 4 | `0xf483` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

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

Functions with the largest decrease in total bytes retained in the function and all its callees.

##### Native

|  Change |  Delta |            % |        Size | Objects | Function             | Location    |
| ------: | -----: | -----------: | ----------: | ------: | -------------------- | ----------- |
| removed | -608 B | 66.7% → 0.0% | 608 B → 0 B |   2 → 0 | `0xb8f1c940cf651dff` | `<unknown>` |
| removed | -304 B | 33.3% → 0.0% | 304 B → 0 B |   1 → 0 | `0xffffa4a847bf`     | `<unknown>` |

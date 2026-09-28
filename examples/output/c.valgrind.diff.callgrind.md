# Instruction profile diff

Recorded 39,558,155 instructions → 40,514,776 instructions (+956,621 instructions, +2.4%).

| Category | Change |    Delta |      % |            Instructions |
| -------- | -----: | -------: | -----: | ----------------------: |
| Ours     |  +2.4% | +955,229 | 100.0% | 39,550,586 → 40,505,815 |
| Native   | +18.4% |   +1,392 |  <0.1% |           7,569 → 8,961 |

## Hottest functions

### Self instructions

#### Regressions

Functions with the largest increase in instructions recorded directly in the function body, excluding callees.

|   Change |      Delta |             % |            Instructions | Function                         | Location                                            |
| -------: | ---------: | ------------: | ----------------------: | -------------------------------- | --------------------------------------------------- |
|   +12.3% | +1,022,933 | 21.0% → 23.1% |   8,326,805 → 9,349,738 | `ZSTD_compressBlock_doubleFast`  | `lib//compress/zstd_compress_internal.h`            |
|      new |   +613,032 |   0.0% → 1.5% |             0 → 613,032 | `ZSTD_recordFingerprint_43`      | `lib//compress/zstd_preSplit.c`                     |
|   +20.6% |    +15,799 |          0.2% |         76,590 → 92,389 | `__GI_memset`                    | `./string/../sysdeps/aarch64/nptl/../memset.S`      |
|      new |     +8,213 |  0.0% → <0.1% |               0 → 8,213 | `fgets`                          | `./libio/./libio/iofgets.c`                         |
|      new |     +5,993 |  0.0% → <0.1% |               0 → 5,993 | `_IO_getline_info`               | `./libio/./libio/iogetline.c`                       |
|      new |     +4,102 |  0.0% → <0.1% |               0 → 4,102 | `__GI_memchr`                    | `./string/../sysdeps/aarch64/multiarch/../memchr.S` |
|      new |     +1,760 |  0.0% → <0.1% |               0 → 1,760 | `fgets`                          | `./libio/./libio/libioP.h`                          |
|    +0.9% |     +1,672 |          0.5% |       183,023 → 184,695 | `__GI_memcpy`                    | `./string/../sysdeps/aarch64/multiarch/../memcpy.S` |
| +3446.2% |     +1,344 |         <0.1% |              39 → 1,383 | `feof`                           | `./libio/./libio/feof.c`                            |
|    +1.1% |     +1,039 |          0.2% |         98,005 → 99,044 | `HUF_buildCTable_wksp`           | `lib//compress/huf_compress.c`                      |
|   +37.7% |       +732 |         <0.1% |           1,944 → 2,676 | `__aarch64_swp4_rel`             | `../../usr/lib/aarch64-linux-gnu/libc.so.6`         |
|   +25.3% |       +726 |         <0.1% |           2,868 → 3,594 | `__aarch64_cas4_acq`             | `../../usr/lib/aarch64-linux-gnu/libc.so.6`         |
|      new |       +536 |  0.0% → <0.1% |                 0 → 536 | `ZSTD_splitBlock`                | `lib//compress/zstd_preSplit.c`                     |
|    +1.5% |       +426 |          0.1% |         28,664 → 29,090 | `do_lookup_x`                    | `./elf/./elf/dl-lookup.c`                           |
|      ~0% |       +396 | 30.6% → 29.9% | 12,117,184 → 12,117,580 | `ZSTD_encodeSequences`           | `lib//common/bitstream.h`                           |
|    +2.4% |       +301 |         <0.1% |         12,385 → 12,686 | `_int_malloc`                    | `./malloc/./malloc/malloc.c`                        |
|   +28.9% |       +264 |         <0.1% |             912 → 1,176 | `pthread_mutex_init@@GLIBC_2.17` | `./nptl/./nptl/pthread_mutex_init.c`                |
|   +10.2% |       +245 |         <0.1% |           2,391 → 2,636 | `calloc`                         | `./malloc/./malloc/malloc.c`                        |
|      new |       +245 |  0.0% → <0.1% |                 0 → 245 | `_IO_file_underflow@@GLIBC_2.17` | `./libio/./libio/fileops.c`                         |
|      new |       +222 |  0.0% → <0.1% |                 0 → 222 | `_IO_getline`                    | `./libio/./libio/iogetline.c`                       |

##### Ours

|   Change |      Delta |             % |            Instructions | Function                         | Location                                            |
| -------: | ---------: | ------------: | ----------------------: | -------------------------------- | --------------------------------------------------- |
|   +12.3% | +1,022,933 | 21.0% → 23.1% |   8,326,805 → 9,349,738 | `ZSTD_compressBlock_doubleFast`  | `lib//compress/zstd_compress_internal.h`            |
|      new |   +613,032 |   0.0% → 1.5% |             0 → 613,032 | `ZSTD_recordFingerprint_43`      | `lib//compress/zstd_preSplit.c`                     |
|   +20.6% |    +15,799 |          0.2% |         76,590 → 92,389 | `__GI_memset`                    | `./string/../sysdeps/aarch64/nptl/../memset.S`      |
|      new |     +8,213 |  0.0% → <0.1% |               0 → 8,213 | `fgets`                          | `./libio/./libio/iofgets.c`                         |
|      new |     +5,993 |  0.0% → <0.1% |               0 → 5,993 | `_IO_getline_info`               | `./libio/./libio/iogetline.c`                       |
|      new |     +4,102 |  0.0% → <0.1% |               0 → 4,102 | `__GI_memchr`                    | `./string/../sysdeps/aarch64/multiarch/../memchr.S` |
|      new |     +1,760 |  0.0% → <0.1% |               0 → 1,760 | `fgets`                          | `./libio/./libio/libioP.h`                          |
|    +0.9% |     +1,672 |          0.5% |       183,023 → 184,695 | `__GI_memcpy`                    | `./string/../sysdeps/aarch64/multiarch/../memcpy.S` |
| +3446.2% |     +1,344 |         <0.1% |              39 → 1,383 | `feof`                           | `./libio/./libio/feof.c`                            |
|    +1.1% |     +1,039 |          0.2% |         98,005 → 99,044 | `HUF_buildCTable_wksp`           | `lib//compress/huf_compress.c`                      |
|      new |       +536 |  0.0% → <0.1% |                 0 → 536 | `ZSTD_splitBlock`                | `lib//compress/zstd_preSplit.c`                     |
|    +1.5% |       +426 |          0.1% |         28,664 → 29,090 | `do_lookup_x`                    | `./elf/./elf/dl-lookup.c`                           |
|      ~0% |       +396 | 30.6% → 29.9% | 12,117,184 → 12,117,580 | `ZSTD_encodeSequences`           | `lib//common/bitstream.h`                           |
|    +2.4% |       +301 |         <0.1% |         12,385 → 12,686 | `_int_malloc`                    | `./malloc/./malloc/malloc.c`                        |
|   +28.9% |       +264 |         <0.1% |             912 → 1,176 | `pthread_mutex_init@@GLIBC_2.17` | `./nptl/./nptl/pthread_mutex_init.c`                |
|   +10.2% |       +245 |         <0.1% |           2,391 → 2,636 | `calloc`                         | `./malloc/./malloc/malloc.c`                        |
|      new |       +245 |  0.0% → <0.1% |                 0 → 245 | `_IO_file_underflow@@GLIBC_2.17` | `./libio/./libio/fileops.c`                         |
|      new |       +222 |  0.0% → <0.1% |                 0 → 222 | `_IO_getline`                    | `./libio/./libio/iogetline.c`                       |
|   +83.3% |       +210 |         <0.1% |               252 → 462 | `ZSTDMT_releaseAllJobResources`  | `lib//compress/zstdmt_compress.c`                   |
|      new |       +205 |  0.0% → <0.1% |                 0 → 205 | `____strtoul_l_internal`         | `./stdlib/../stdlib/strtol_l.c`                     |

#### Improvements

Functions with the largest decrease in instructions recorded directly in the function body, excluding callees.

|  Change |    Delta |             % |            Instructions | Function                                          | Location                                                |
| ------: | -------: | ------------: | ----------------------: | ------------------------------------------------- | ------------------------------------------------------- |
|   -6.2% | -721,751 | 29.6% → 27.1% | 11,716,441 → 10,994,690 | `ZSTD_compressBlock_doubleFast`                   | `lib//compress/zstd_double_fast.c`                      |
|   -0.7% |   -3,124 |          1.1% |       428,664 → 425,540 | `HUF_compress1X_usingCTable_internal.constprop.0` | `lib//compress/huf_compress.c`                          |
|   -0.1% |   -1,982 |   5.0% → 4.8% |   1,959,721 → 1,957,739 | `HIST_count_parallel_wksp`                        | `lib//compress/hist.c`                                  |
|   -8.4% |     -820 |         <0.1% |           9,792 → 8,972 | `HUF_simpleQuickSort`                             | `lib//compress/huf_compress.c`                          |
|     ~0% |     -279 |   3.5% → 3.4% |   1,370,282 → 1,370,003 | `ZSTD_seqToCodes`                                 | `lib//compress/zstd_compress_internal.h`                |
|  -23.8% |     -146 |         <0.1% |               613 → 467 | `ZSTD_compress_frameChunk`                        | `lib//compress/zstd_compress.c`                         |
|   -6.7% |     -129 |         <0.1% |           1,920 → 1,791 | `__futex_abstimed_wait_cancelable64`              | `./nptl/./nptl/futex-internal.c`                        |
|   -2.0% |      -80 |         <0.1% |           3,948 → 3,868 | `pthread_cond_signal@@GLIBC_2.17`                 | `./nptl/./nptl/pthread_cond_signal.c`                   |
|  -62.2% |      -79 |         <0.1% |                127 → 48 | `ZSTD_compressBegin_advanced_internal`            | `lib//compress/zstd_compress.c`                         |
|  -13.3% |      -72 |         <0.1% |               540 → 468 | `pthread_cond_signal@@GLIBC_2.17`                 | `./nptl/./nptl/pthread_cond_common.c`                   |
|  -33.3% |      -62 |         <0.1% |               186 → 124 | `pthread_cond_broadcast@@GLIBC_2.17`              | `./nptl/./nptl/pthread_cond_common.c`                   |
|  -20.0% |      -36 |         <0.1% |               180 → 144 | `__aarch64_swp4_rel`                              | `../../usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| removed |      -35 |  <0.1% → 0.0% |                  35 → 0 | `0x0000000000008740`                              | `programs/zstd`                                         |
|   -1.8% |      -29 |         <0.1% |           1,607 → 1,578 | `pthread_cond_wait@@GLIBC_2.17`                   | `./nptl/./nptl/pthread_cond_wait.c`                     |
|   -5.6% |      -27 |         <0.1% |               486 → 459 | `__pthread_mutex_cond_lock`                       | `./nptl/../nptl/pthread_mutex_lock.c`                   |
|   -2.6% |      -24 |         <0.1% |               912 → 888 | `__pthread_enable_asynccancel`                    | `./nptl/./nptl/cancellation.c`                          |
|   -2.6% |      -22 |         <0.1% |               836 → 814 | `__pthread_disable_asynccancel`                   | `./nptl/./nptl/cancellation.c`                          |
|   -5.6% |      -14 |         <0.1% |               252 → 238 | `__condvar_confirm_wakeup`                        | `./nptl/./nptl/pthread_cond_wait.c`                     |
|  -10.1% |      -13 |         <0.1% |               129 → 116 | `UTIL_allocateFileNamesTable`                     | `programs/util.c`                                       |
|  -11.1% |      -12 |         <0.1% |                108 → 96 | `__aarch64_ldeor8_rel`                            | `../../usr/lib/aarch64-linux-gnu/libc.so.6`             |

##### Ours

|  Change |    Delta |             % |            Instructions | Function                                          | Location                                 |
| ------: | -------: | ------------: | ----------------------: | ------------------------------------------------- | ---------------------------------------- |
|   -6.2% | -721,751 | 29.6% → 27.1% | 11,716,441 → 10,994,690 | `ZSTD_compressBlock_doubleFast`                   | `lib//compress/zstd_double_fast.c`       |
|   -0.7% |   -3,124 |          1.1% |       428,664 → 425,540 | `HUF_compress1X_usingCTable_internal.constprop.0` | `lib//compress/huf_compress.c`           |
|   -0.1% |   -1,982 |   5.0% → 4.8% |   1,959,721 → 1,957,739 | `HIST_count_parallel_wksp`                        | `lib//compress/hist.c`                   |
|   -8.4% |     -820 |         <0.1% |           9,792 → 8,972 | `HUF_simpleQuickSort`                             | `lib//compress/huf_compress.c`           |
|     ~0% |     -279 |   3.5% → 3.4% |   1,370,282 → 1,370,003 | `ZSTD_seqToCodes`                                 | `lib//compress/zstd_compress_internal.h` |
|  -23.8% |     -146 |         <0.1% |               613 → 467 | `ZSTD_compress_frameChunk`                        | `lib//compress/zstd_compress.c`          |
|   -6.7% |     -129 |         <0.1% |           1,920 → 1,791 | `__futex_abstimed_wait_cancelable64`              | `./nptl/./nptl/futex-internal.c`         |
|   -2.0% |      -80 |         <0.1% |           3,948 → 3,868 | `pthread_cond_signal@@GLIBC_2.17`                 | `./nptl/./nptl/pthread_cond_signal.c`    |
|  -62.2% |      -79 |         <0.1% |                127 → 48 | `ZSTD_compressBegin_advanced_internal`            | `lib//compress/zstd_compress.c`          |
|  -13.3% |      -72 |         <0.1% |               540 → 468 | `pthread_cond_signal@@GLIBC_2.17`                 | `./nptl/./nptl/pthread_cond_common.c`    |
|  -33.3% |      -62 |         <0.1% |               186 → 124 | `pthread_cond_broadcast@@GLIBC_2.17`              | `./nptl/./nptl/pthread_cond_common.c`    |
| removed |      -35 |  <0.1% → 0.0% |                  35 → 0 | `0x0000000000008740`                              | `programs/zstd`                          |
|   -1.8% |      -29 |         <0.1% |           1,607 → 1,578 | `pthread_cond_wait@@GLIBC_2.17`                   | `./nptl/./nptl/pthread_cond_wait.c`      |
|   -5.6% |      -27 |         <0.1% |               486 → 459 | `__pthread_mutex_cond_lock`                       | `./nptl/../nptl/pthread_mutex_lock.c`    |
|   -2.6% |      -24 |         <0.1% |               912 → 888 | `__pthread_enable_asynccancel`                    | `./nptl/./nptl/cancellation.c`           |
|   -2.6% |      -22 |         <0.1% |               836 → 814 | `__pthread_disable_asynccancel`                   | `./nptl/./nptl/cancellation.c`           |
|   -5.6% |      -14 |         <0.1% |               252 → 238 | `__condvar_confirm_wakeup`                        | `./nptl/./nptl/pthread_cond_wait.c`      |
|  -10.1% |      -13 |         <0.1% |               129 → 116 | `UTIL_allocateFileNamesTable`                     | `programs/util.c`                        |
|   -3.4% |      -11 |         <0.1% |               320 → 309 | `POOL_joinJobs`                                   | `lib//common/pool.c`                     |
|   -2.0% |      -10 |         <0.1% |               498 → 488 | `AIO_ReadPool_executeReadJob`                     | `programs/fileio_asyncio.c`              |

### Total instructions

#### Regressions

Functions with the largest increase in total instructions recorded in the function and all its callees.

##### Ours

|    Change |    Delta |             % |            Instructions | Function                        | Location                                 |
| --------: | -------: | ------------: | ----------------------: | ------------------------------- | ---------------------------------------- |
|     +2.4% | +925,823 |         96.9% | 38,347,827 → 39,273,650 | `ZSTD_compress_frameChunk`      | `lib//compress/zstd_compress.c`          |
| +99963.9% | +753,728 |  <0.1% → 1.9% |           754 → 754,482 | `ZSTDMT_compressionJob`         | `lib//compress/zstdmt_compress.c`        |
|       new | +624,008 |   0.0% → 1.5% |             0 → 624,008 | `ZSTD_recordFingerprint_43`     | `lib//compress/zstd_preSplit.c`          |
|     +2.8% | +518,717 | 47.1% → 47.3% | 18,651,568 → 19,170,285 | `ZSTD_compressEnd_public`       | `lib//compress/zstd_compress_internal.h` |
|     +2.8% | +518,717 | 47.1% → 47.3% | 18,651,635 → 19,170,352 | `ZSTD_compressEnd_public`       | `lib//compress/zstd_compress.c`          |
|       new | +449,422 |   0.0% → 1.1% |             0 → 449,422 | `ZSTD_splitBlock`               | `lib//compress/zstd_preSplit.c`          |
|     +2.1% | +407,106 | 49.8% → 49.6% | 19,696,431 → 20,103,537 | `ZSTD_compressContinue_public`  | `lib//compress/zstd_compress.c`          |
|     +2.1% | +407,106 | 49.8% → 49.6% | 19,696,318 → 20,103,424 | `ZSTD_compressContinue_public`  | `lib//compress/zstd_compress_internal.h` |
|     +1.5% | +301,189 | 50.7% → 50.2% | 20,043,157 → 20,344,346 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_compress_internal.h` |
|     +1.5% | +301,181 | 50.7% → 50.2% | 20,044,985 → 20,346,166 | `ZSTD_buildSeqStore`            | `lib//compress/zstd_compress.c`          |
|     +1.5% | +301,173 | 50.7% → 50.2% | 20,043,888 → 20,345,061 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_double_fast.c`       |
|       new |  +32,347 |   0.0% → 0.1% |              0 → 32,347 | `UTIL_countLogicalCores`        | `programs/util.c`                        |
|     +8.6% |  +31,360 |   0.9% → 1.0% |       364,341 → 395,701 | `_dl_start`                     | `./elf/./elf/rtld.c`                     |
|     +8.6% |  +31,360 |   0.9% → 1.0% |       364,346 → 395,706 | `(below main)`                  | `./elf/../sysdeps/aarch64/dl-start.S`    |
|    +11.3% |  +31,305 |   0.7% → 0.8% |       277,578 → 308,883 | `_dl_init`                      | `./elf/./elf/dl-init.c`                  |
|    +11.3% |  +31,305 |   0.7% → 0.8% |       276,555 → 307,860 | `(below main)`                  | `programs/zstd`                          |
|    +11.3% |  +31,305 |   0.7% → 0.8% |       275,846 → 307,151 | `__libc_start_main@@GLIBC_2.34` | `./csu/../csu/libc-start.c`              |
|    +11.4% |  +31,305 |   0.7% → 0.8% |       274,886 → 306,191 | `main`                          | `programs/zstdcli.c`                     |
|    +11.6% |  +31,305 |          0.7% |       269,731 → 301,036 | `FIO_createContext`             | `programs/fileio.c`                      |
|    +11.5% |  +31,305 |          0.7% |       272,062 → 303,367 | `FIO_createPreferences`         | `programs/fileio.c`                      |

#### Improvements

Functions with the largest decrease in total instructions recorded in the function and all its callees.

##### Ours

|  Change |  Delta |            % |          Instructions | Function                                          | Location                                 |
| ------: | -----: | -----------: | --------------------: | ------------------------------------------------- | ---------------------------------------- |
|  -99.7% | -5,595 |        <0.1% |            5,612 → 17 | `AIO_WritePool_closeFile`                         | `programs/fileio_asyncio.c`              |
|   -0.6% | -5,023 |  2.3% → 2.2% |     897,920 → 892,897 | `ZSTD_compressLiterals`                           | `lib//compress/zstd_compress_literals.c` |
|   -0.6% | -5,023 |  2.3% → 2.2% |     894,944 → 889,921 | `HUF_compress4X_repeat`                           | `lib//compress/huf_compress.c`           |
|   -0.6% | -5,023 |  2.3% → 2.2% |     894,080 → 889,057 | `HIST_count_wksp`                                 | `lib//compress/hist.c`                   |
|   -0.6% | -5,023 |  2.3% → 2.2% |     894,608 → 889,585 | `HUF_compress_internal`                           | `lib//compress/huf_compress.c`           |
|  -91.5% | -4,561 |        <0.1% |           4,985 → 424 | `fclose@@GLIBC_2.17`                              | `./libio/./libio/iofclose.c`             |
|   -0.2% | -4,535 |  7.2% → 7.0% | 2,829,254 → 2,824,719 | `HIST_count_parallel_wksp`                        | `lib//compress/hist.c`                   |
|  -66.9% | -3,384 |        <0.1% |         5,059 → 1,675 | `pthread_cond_wait@@GLIBC_2.17`                   | `./nptl/./nptl/pthread_cond_wait.c`      |
|   -0.7% | -3,124 |         1.1% |     429,016 → 425,892 | `HUF_compressCTable_internal.isra.0`              | `lib//compress/huf_compress.c`           |
|   -0.7% | -3,124 |         1.1% |     428,768 → 425,644 | `HUF_compress1X_usingCTable_internal.constprop.0` | `lib//compress/huf_compress.c`           |
|  -61.6% | -2,195 |        <0.1% |         3,564 → 1,369 | `UTIL_utime`                                      | `programs/util.c`                        |
|   -0.8% | -1,808 |  0.6% → 0.5% |     221,954 → 220,146 | `UTIL_stat`                                       | `programs/util.c`                        |
|   -0.8% | -1,808 |  0.6% → 0.5% |     221,881 → 220,073 | `FIO_openSrcFile`                                 | `programs/fileio.c`                      |
|   -0.4% | -1,011 |         0.6% |     236,376 → 235,365 | `FIO_compressFilename_srcFile`                    | `programs/fileio.c`                      |
|   -0.4% | -1,007 |  0.7% → 0.6% |     260,150 → 259,143 | `UTIL_getFileSize`                                | `programs/util.c`                        |
|   -0.4% | -1,007 |  0.7% → 0.6% |     259,471 → 258,464 | `FIO_createCResources`                            | `programs/fileio.c`                      |
|   -0.4% | -1,007 |  0.7% → 0.6% |     260,168 → 259,161 | `FIO_compressFilename`                            | `programs/fileio.c`                      |
| removed |   -822 | <0.1% → 0.0% |               822 → 0 | `0x0000000000008740`                              | `programs/zstd`                          |
|   -8.4% |   -820 |        <0.1% |         9,792 → 8,972 | `HUF_simpleQuickSort`                             | `lib//compress/huf_compress.c`           |
|  -32.0% |   -804 |        <0.1% |         2,510 → 1,706 | `__pthread_clockjoin_ex`                          | `./nptl/./nptl/pthread_join_common.c`    |

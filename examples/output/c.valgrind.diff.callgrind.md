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
|   +37.7% |       +732 |         <0.1% |           1,944 → 2,676 | `__aarch64_swp4_rel`             | `/usr/lib/aarch64-linux-gnu/libc.so.6`              |
|   +25.3% |       +726 |         <0.1% |           2,868 → 3,594 | `__aarch64_cas4_acq`             | `/usr/lib/aarch64-linux-gnu/libc.so.6`              |
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

|  Change |    Delta |             % |            Instructions | Function                                          | Location                                           |
| ------: | -------: | ------------: | ----------------------: | ------------------------------------------------- | -------------------------------------------------- |
|   -6.2% | -721,751 | 29.6% → 27.1% | 11,716,441 → 10,994,690 | `ZSTD_compressBlock_doubleFast`                   | `lib//compress/zstd_double_fast.c`                 |
|   -0.7% |   -3,124 |          1.1% |       428,664 → 425,540 | `HUF_compress1X_usingCTable_internal.constprop.0` | `lib//compress/huf_compress.c`                     |
|   -0.1% |   -1,982 |   5.0% → 4.8% |   1,959,721 → 1,957,739 | `HIST_count_parallel_wksp`                        | `lib//compress/hist.c`                             |
|   -8.4% |     -820 |         <0.1% |           9,792 → 8,972 | `HUF_simpleQuickSort`                             | `lib//compress/huf_compress.c`                     |
|     ~0% |     -279 |   3.5% → 3.4% |   1,370,282 → 1,370,003 | `ZSTD_seqToCodes`                                 | `lib//compress/zstd_compress_internal.h`           |
|  -23.8% |     -146 |         <0.1% |               613 → 467 | `ZSTD_compress_frameChunk`                        | `lib//compress/zstd_compress.c`                    |
|   -6.7% |     -129 |         <0.1% |           1,920 → 1,791 | `__futex_abstimed_wait_cancelable64`              | `./nptl/./nptl/futex-internal.c`                   |
|   -2.0% |      -80 |         <0.1% |           3,948 → 3,868 | `pthread_cond_signal@@GLIBC_2.17`                 | `./nptl/./nptl/pthread_cond_signal.c`              |
|  -62.2% |      -79 |         <0.1% |                127 → 48 | `ZSTD_compressBegin_advanced_internal`            | `lib//compress/zstd_compress.c`                    |
|  -13.3% |      -72 |         <0.1% |               540 → 468 | `pthread_cond_signal@@GLIBC_2.17`                 | `./nptl/./nptl/pthread_cond_common.c`              |
|  -33.3% |      -62 |         <0.1% |               186 → 124 | `pthread_cond_broadcast@@GLIBC_2.17`              | `./nptl/./nptl/pthread_cond_common.c`              |
|  -20.0% |      -36 |         <0.1% |               180 → 144 | `__aarch64_swp4_rel`                              | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| removed |      -35 |  <0.1% → 0.0% |                  35 → 0 | `0x0000000000008740`                              | `programs/zstd`                                    |
|   -1.8% |      -29 |         <0.1% |           1,607 → 1,578 | `pthread_cond_wait@@GLIBC_2.17`                   | `./nptl/./nptl/pthread_cond_wait.c`                |
|   -5.6% |      -27 |         <0.1% |               486 → 459 | `__pthread_mutex_cond_lock`                       | `./nptl/../nptl/pthread_mutex_lock.c`              |
|   -2.6% |      -24 |         <0.1% |               912 → 888 | `__pthread_enable_asynccancel`                    | `./nptl/./nptl/cancellation.c`                     |
|   -2.6% |      -22 |         <0.1% |               836 → 814 | `__pthread_disable_asynccancel`                   | `./nptl/./nptl/cancellation.c`                     |
|   -5.6% |      -14 |         <0.1% |               252 → 238 | `__condvar_confirm_wakeup`                        | `./nptl/./nptl/pthread_cond_wait.c`                |
|  -10.1% |      -13 |         <0.1% |               129 → 116 | `UTIL_allocateFileNamesTable`                     | `programs/util.c`                                  |
|  -11.1% |      -12 |         <0.1% |                108 → 96 | `__aarch64_ldeor8_rel`                            | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |

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

#### Lines

Lines with the largest change in contribution to each function's self instructions.

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`)

| Change |    Delta |           % |      Instructions | Location                                           |
| -----: | -------: | ----------: | ----------------: | -------------------------------------------------- |
|    new | +619,974 | 0.0% → 6.6% |       0 → 619,974 | `lib//compress/zstd_compress_internal.h:642`       |
| -14.7% |  -69,125 | 5.7% → 4.3% | 471,471 → 402,346 | `lib//compress/zstd_compress_internal.h:756 → 861` |
| -35.3% |  -66,770 | 2.3% → 1.3% | 188,952 → 122,182 | `lib//compress/zstd_compress_internal.h:752 → 857` |
|    new |  +27,489 | 0.0% → 0.3% |        0 → 27,489 | `lib//compress/zstd_compress_internal.h:758`       |
|    new |  +27,431 | 0.0% → 0.3% |        0 → 27,431 | `lib//compress/zstd_compress_internal.h:808`       |

##### `ZSTD_recordFingerprint_43` (`lib//compress/zstd_preSplit.c`)

| Change |    Delta |            % | Instructions | Location                            |
| -----: | -------: | -----------: | -----------: | ----------------------------------- |
|    new | +152,208 | 0.0% → 24.8% |  0 → 152,208 | `lib//compress/zstd_preSplit.c:72`  |
|    new | +107,520 | 0.0% → 17.5% |  0 → 107,520 | `lib//compress/zstd_preSplit.c:102` |
|    new | +107,520 | 0.0% → 17.5% |  0 → 107,520 | `lib//compress/zstd_preSplit.c:128` |
|    new |  +80,955 | 0.0% → 13.2% |   0 → 80,955 | `lib//compress/zstd_preSplit.c:100` |
|    new |  +80,640 | 0.0% → 13.2% |   0 → 80,640 | `lib//compress/zstd_preSplit.c:127` |

##### `__GI_memset` (`./string/../sysdeps/aarch64/nptl/../memset.S`)

| Change |  Delta |             % |    Instructions | Location                                           |
| -----: | -----: | ------------: | --------------: | -------------------------------------------------- |
| +17.2% | +2,594 | 19.6% → 19.1% | 15,041 → 17,635 | `./string/../sysdeps/aarch64/nptl/../memset.S:131` |
| +17.2% | +2,594 | 19.6% → 19.1% | 15,041 → 17,635 | `./string/../sysdeps/aarch64/nptl/../memset.S:132` |
| +17.2% | +2,594 | 19.6% → 19.1% | 15,041 → 17,635 | `./string/../sysdeps/aarch64/nptl/../memset.S:133` |
| +17.2% | +2,594 | 19.6% → 19.1% | 15,041 → 17,635 | `./string/../sysdeps/aarch64/nptl/../memset.S:134` |
| +17.2% | +2,594 | 19.6% → 19.1% | 15,041 → 17,635 | `./string/../sysdeps/aarch64/nptl/../memset.S:135` |

##### `fgets` (`./libio/./libio/iofgets.c`)

| Change |  Delta |            % | Instructions | Location                       |
| -----: | -----: | -----------: | -----------: | ------------------------------ |
|    new | +2,109 | 0.0% → 25.7% |    0 → 2,109 | `./libio/./libio/iofgets.c:47` |
|    new |   +777 |  0.0% → 9.5% |      0 → 777 | `./libio/./libio/iofgets.c:53` |
|    new |   +444 |  0.0% → 5.4% |      0 → 444 | `./libio/./libio/iofgets.c:32` |
|    new |   +444 |  0.0% → 5.4% |      0 → 444 | `./libio/./libio/iofgets.c:37` |
|    new |   +436 |  0.0% → 5.3% |      0 → 436 | `./libio/./libio/iofgets.c:63` |

##### `_IO_getline_info` (`./libio/./libio/iogetline.c`)

| Change |  Delta |            % | Instructions | Location                          |
| -----: | -----: | -----------: | -----------: | --------------------------------- |
|    new | +1,332 | 0.0% → 22.2% |    0 → 1,332 | `./libio/./libio/iogetline.c:49`  |
|    new |   +654 | 0.0% → 10.9% |      0 → 654 | `./libio/./libio/iogetline.c:107` |
|    new |   +570 |  0.0% → 9.5% |      0 → 570 | `./libio/./libio/iogetline.c:85`  |
|    new |   +490 |  0.0% → 8.2% |      0 → 490 | `./libio/./libio/iogetline.c:55`  |
|    new |   +458 |  0.0% → 7.6% |      0 → 458 | `./libio/./libio/iogetline.c:58`  |

##### `__GI_memchr` (`./string/../sysdeps/aarch64/multiarch/../memchr.S`)

| Change | Delta |           % | Instructions | Location                                                |
| -----: | ----: | ----------: | -----------: | ------------------------------------------------------- |
|    new |  +129 | 0.0% → 3.1% |      0 → 129 | `./string/../sysdeps/aarch64/multiarch/../memchr.S:99`  |
|    new |  +129 | 0.0% → 3.1% |      0 → 129 | `./string/../sysdeps/aarch64/multiarch/../memchr.S:100` |
|    new |  +129 | 0.0% → 3.1% |      0 → 129 | `./string/../sysdeps/aarch64/multiarch/../memchr.S:101` |
|    new |  +129 | 0.0% → 3.1% |      0 → 129 | `./string/../sysdeps/aarch64/multiarch/../memchr.S:102` |
|    new |  +115 | 0.0% → 2.8% |      0 → 115 | `./string/../sysdeps/aarch64/multiarch/../memchr.S:59`  |

##### `fgets` (`./libio/./libio/libioP.h`)

| Change |  Delta |            % | Instructions | Location                       |
| -----: | -----: | -----------: | -----------: | ------------------------------ |
|    new | +1,100 | 0.0% → 62.5% |    0 → 1,100 | `./libio/./libio/libioP.h:884` |
|    new |   +110 |  0.0% → 6.3% |      0 → 110 | `./libio/./libio/libioP.h:883` |

##### `__GI_memcpy` (`./string/../sysdeps/aarch64/multiarch/../memcpy.S`)

|  Change | Delta |            % | Instructions | Location                                               |
| ------: | ----: | -----------: | -----------: | ------------------------------------------------------ |
| +297.4% |  +113 | <0.1% → 0.1% |     38 → 151 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:72` |
| +297.4% |  +113 | <0.1% → 0.1% |     38 → 151 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:77` |
| +297.4% |  +113 | <0.1% → 0.1% |     38 → 151 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:78` |
| +297.4% |  +113 | <0.1% → 0.1% |     38 → 151 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:79` |
| +297.4% |  +113 | <0.1% → 0.1% |     38 → 151 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:80` |

##### `feof` (`./libio/./libio/feof.c`)

|    Change | Delta |             % | Instructions | Location                    |
| --------: | ----: | ------------: | -----------: | --------------------------- |
| +11200.0% |  +448 | 10.3% → 32.7% |      4 → 452 | `./libio/./libio/feof.c:32` |
| +11200.0% |  +448 | 10.3% → 32.7% |      4 → 452 | `./libio/./libio/feof.c:41` |
| +11200.0% |  +224 |  5.1% → 16.3% |      2 → 226 | `./libio/./libio/feof.c:35` |
| +11200.0% |  +224 |  5.1% → 16.3% |      2 → 226 | `./libio/./libio/feof.c:36` |

##### `HUF_buildCTable_wksp` (`lib//compress/huf_compress.c`)

|  Change | Delta |           % | Instructions | Location                           |
| ------: | ----: | ----------: | -----------: | ---------------------------------- |
| +101.7% |  +243 | 0.2% → 0.5% |    239 → 482 | `lib//compress/huf_compress.c:691` |
|  +98.5% |  +194 | 0.2% → 0.4% |    197 → 391 | `lib//compress/huf_compress.c:696` |
|  +67.9% |   +74 | 0.1% → 0.2% |    109 → 183 | `lib//compress/huf_compress.c:655` |
|  +58.5% |   +72 | 0.1% → 0.2% |    123 → 195 | `lib//compress/huf_compress.c:656` |
|  +50.0% |   +50 | 0.1% → 0.2% |    100 → 150 | `lib//compress/huf_compress.c:660` |

##### `ZSTD_splitBlock` (`lib//compress/zstd_preSplit.c`)

| Change | Delta |            % | Instructions | Location                            |
| -----: | ----: | -----------: | -----------: | ----------------------------------- |
|    new |   +91 | 0.0% → 17.0% |       0 → 91 | `lib//compress/zstd_preSplit.c:53`  |
|    new |   +49 |  0.0% → 9.1% |       0 → 49 | `lib//compress/zstd_preSplit.c:231` |
|    new |   +42 |  0.0% → 7.8% |       0 → 42 | `lib//compress/zstd_preSplit.c:162` |
|    new |    +7 |  0.0% → 1.3% |        0 → 7 | `lib//compress/zstd_preSplit.c:175` |
|    new |    +7 |  0.0% → 1.3% |        0 → 7 | `lib//compress/zstd_preSplit.c:234` |

##### `do_lookup_x` (`./elf/./elf/dl-lookup.c`)

| Change | Delta |    % |  Instructions | Location                      |
| -----: | ----: | ---: | ------------: | ----------------------------- |
|  +1.5% |   +34 | 7.8% | 2,244 → 2,278 | `./elf/./elf/dl-lookup.c:348` |
|  +1.5% |   +24 | 5.7% | 1,624 → 1,648 | `./elf/./elf/dl-lookup.c:374` |
|  +1.4% |   +24 | 5.8% | 1,664 → 1,688 | `./elf/./elf/dl-lookup.c:388` |
|  +1.4% |   +24 | 5.8% | 1,664 → 1,688 | `./elf/./elf/dl-lookup.c:403` |
|  +1.6% |   +24 | 5.3% | 1,524 → 1,548 | `./elf/./elf/dl-lookup.c:416` |

##### `ZSTD_encodeSequences` (`lib//common/bitstream.h`)

| Change | Delta |     % |          Instructions | Location                            |
| -----: | ----: | ----: | --------------------: | ----------------------------------- |
|    ~0% |   +72 | 18.2% | 2,203,122 → 2,203,194 | `lib//common/bitstream.h:172 → 173` |
|    ~0% |   +44 | 11.1% | 1,346,327 → 1,346,371 | `lib//common/bitstream.h:185 → 186` |
|    ~0% |   +24 |  6.1% |     734,358 → 734,382 | `lib//common/bitstream.h:186 → 187` |
|    ~0% |   +12 |  3.0% |     367,243 → 367,255 | `lib//common/bitstream.h:229 → 230` |
|    ~0% |    +4 |  1.0% |     122,389 → 122,393 | `lib//common/bitstream.h:187 → 188` |

##### `_int_malloc` (`./malloc/./malloc/malloc.c`)

| Change | Delta |           % | Instructions | Location                          |
| -----: | ----: | ----------: | -----------: | --------------------------------- |
|  +2.5% |   +20 |        6.5% |    810 → 830 | `./malloc/./malloc/malloc.c:1348` |
|  +2.5% |   +20 |        6.4% |    798 → 818 | `./malloc/./malloc/malloc.c:3980` |
|  +2.2% |   +15 |        5.6% |    696 → 711 | `./malloc/./malloc/malloc.c:4265` |
|  +3.6% |   +14 |        3.2% |    392 → 406 | `./malloc/./malloc/malloc.c:4376` |
|  +8.2% |   +12 | 1.2% → 1.3% |    147 → 159 | `./malloc/./malloc/malloc.c:476`  |

##### `pthread_mutex_init@@GLIBC_2.17` (`./nptl/./nptl/pthread_mutex_init.c`)

| Change | Delta |             % | Instructions | Location                                 |
| -----: | ----: | ------------: | -----------: | ---------------------------------------- |
| +28.6% |   +48 |         18.4% |    168 → 216 | `./nptl/./nptl/pthread_mutex_init.c:152` |
| +28.6% |   +44 | 16.9% → 16.8% |    154 → 198 | `./nptl/./nptl/pthread_mutex_init.c:53`  |
| +28.6% |   +28 |         10.7% |     98 → 126 | `./nptl/./nptl/pthread_mutex_init.c:105` |
| +28.6% |   +12 |          4.6% |      42 → 54 | `./nptl/./nptl/pthread_mutex_init.c:65`  |
| +28.6% |   +12 |          4.6% |      42 → 54 | `./nptl/./nptl/pthread_mutex_init.c:89`  |

##### `calloc` (`./malloc/./malloc/malloc.c`)

| Change | Delta |           % | Instructions | Location                          |
| -----: | ----: | ----------: | -----------: | --------------------------------- |
|  +4.8% |    +7 | 6.1% → 5.8% |    147 → 154 | `./malloc/./malloc/malloc.c:3637` |
|  +4.8% |    +6 | 5.3% → 5.0% |    126 → 132 | `./malloc/./malloc/malloc.c:3629` |
|  +4.8% |    +6 | 5.3% → 5.0% |    126 → 132 | `./malloc/./malloc/malloc.c:3640` |
|  +5.9% |    +6 | 4.3% → 4.1% |    102 → 108 | `./malloc/./malloc/malloc.c:3645` |
|  +6.7% |    +6 | 3.8% → 3.6% |      90 → 96 | `./malloc/./malloc/malloc.c:3732` |

##### `_IO_file_underflow@@GLIBC_2.17` (`./libio/./libio/fileops.c`)

| Change | Delta |           % | Instructions | Location                        |
| -----: | ----: | ----------: | -----------: | ------------------------------- |
|    new |   +24 | 0.0% → 9.8% |       0 → 24 | `./libio/./libio/fileops.c:516` |
|    new |   +20 | 0.0% → 8.2% |       0 → 20 | `./libio/./libio/fileops.c:461` |
|    new |   +20 | 0.0% → 8.2% |       0 → 20 | `./libio/./libio/fileops.c:477` |
|    new |   +20 | 0.0% → 8.2% |       0 → 20 | `./libio/./libio/fileops.c:489` |
|    new |   +15 | 0.0% → 6.1% |       0 → 15 | `./libio/./libio/fileops.c:474` |

##### `_IO_getline` (`./libio/./libio/iogetline.c`)

| Change | Delta |             % | Instructions | Location                         |
| -----: | ----: | ------------: | -----------: | -------------------------------- |
|    new |  +222 | 0.0% → 100.0% |      0 → 222 | `./libio/./libio/iogetline.c:34` |

##### `ZSTDMT_releaseAllJobResources` (`lib//compress/zstdmt_compress.c`)

|  Change | Delta |             % | Instructions | Location                                      |
| ------: | ----: | ------------: | -----------: | --------------------------------------------- |
| +102.8% |  +149 | 57.5% → 63.6% |    145 → 294 | `lib//compress/zstdmt_compress.c:1004 → 1020` |
|  +89.6% |   +60 | 26.6% → 27.5% |     67 → 127 | `lib//compress/zstdmt_compress.c:883 → 899`   |
|  +16.7% |    +1 |   2.4% → 1.5% |        6 → 7 | `lib//compress/zstdmt_compress.c:882 → 898`   |

##### `____strtoul_l_internal` (`./stdlib/../stdlib/strtol_l.c`)

| Change | Delta |           % | Instructions | Location                            |
| -----: | ----: | ----------: | -----------: | ----------------------------------- |
|    new |   +16 | 0.0% → 7.8% |       0 → 16 | `./stdlib/../stdlib/strtol_l.c:435` |
|    new |   +14 | 0.0% → 6.8% |       0 → 14 | `./stdlib/../stdlib/strtol_l.c:225` |
|    new |   +14 | 0.0% → 6.8% |       0 → 14 | `./stdlib/../stdlib/strtol_l.c:433` |
|    new |   +10 | 0.0% → 4.9% |       0 → 10 | `./stdlib/../stdlib/strtol_l.c:291` |
|    new |   +10 | 0.0% → 4.9% |       0 → 10 | `./stdlib/../stdlib/strtol_l.c:459` |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`)

|  Change |    Delta |           % |      Instructions | Location                                     |
| ------: | -------: | ----------: | ----------------: | -------------------------------------------- |
|  -96.0% | -244,446 | 2.2% → 0.1% |  254,746 → 10,300 | `lib//compress/zstd_double_fast.c:199 → 209` |
|  +66.7% | +244,377 | 3.1% → 5.6% | 366,512 → 610,889 | `lib//compress/zstd_double_fast.c:185 → 190` |
|  -38.6% | -158,200 | 3.5% → 2.3% | 410,026 → 251,826 | `lib//compress/zstd_double_fast.c:259 → 271` |
|  -16.6% | -121,941 | 6.3% → 5.6% | 733,310 → 611,369 | `lib//compress/zstd_double_fast.c:298 → 310` |
| removed |  -53,570 | 0.5% → 0.0% |        53,570 → 0 | `lib//compress/zstd_double_fast.c:257`       |

##### `HUF_compress1X_usingCTable_internal.constprop.0` (`lib//compress/huf_compress.c`)

| Change | Delta |     % |      Instructions | Location                           |
| -----: | ----: | ----: | ----------------: | ---------------------------------- |
|  -0.8% |  -964 | 29.6% | 127,056 → 126,092 | `lib//compress/huf_compress.c:987` |
|  -0.7% |  -427 | 13.3% |   57,187 → 56,760 | `lib//compress/huf_compress.c:886` |
|  -0.7% |  -427 | 13.3% |   57,219 → 56,792 | `lib//compress/huf_compress.c:891` |
|  -0.7% |  -357 | 11.9% |   50,847 → 50,490 | `lib//compress/huf_compress.c:887` |
|  -0.8% |  -194 |  6.0% |   25,538 → 25,344 | `lib//compress/huf_compress.c:943` |

##### `HIST_count_parallel_wksp` (`lib//compress/hist.c`)

| Change |  Delta |     % |          Instructions | Location                       |
| -----: | -----: | ----: | --------------------: | ------------------------------ |
|  -0.1% | -1,982 | 99.8% | 1,955,857 → 1,953,875 | `lib//compress/hist.c:88 → 98` |

##### `HUF_simpleQuickSort` (`lib//compress/huf_compress.c`)

| Change | Delta |             % |  Instructions | Location                           |
| -----: | ----: | ------------: | ------------: | ---------------------------------- |
| -14.8% |  -247 | 17.0% → 15.8% | 1,665 → 1,418 | `lib//compress/huf_compress.c:691` |
| -12.6% |  -191 | 15.5% → 14.7% | 1,514 → 1,323 | `lib//compress/huf_compress.c:696` |
| -14.4% |   -74 |   5.3% → 4.9% |     515 → 441 | `lib//compress/huf_compress.c:655` |
| -14.4% |   -72 |   5.1% → 4.8% |     501 → 429 | `lib//compress/huf_compress.c:656` |
| -14.1% |   -50 |   3.6% → 3.4% |     354 → 304 | `lib//compress/huf_compress.c:660` |

##### `ZSTD_seqToCodes` (`lib//compress/zstd_compress_internal.h`)

| Change | Delta |     % |      Instructions | Location                                           |
| -----: | ----: | ----: | ----------------: | -------------------------------------------------- |
|    ~0% |    +8 | 17.9% | 244,856 → 244,864 | `lib//compress/zstd_compress_internal.h:545 → 612` |

##### `ZSTD_compress_frameChunk` (`lib//compress/zstd_compress.c`)

| Change | Delta |            % | Instructions | Location                                    |
| -----: | ----: | -----------: | -----------: | ------------------------------------------- |
| -93.5% |   -86 | 15.0% → 1.3% |       92 → 6 | `lib//compress/zstd_compress.c:4522 → 4627` |
| -89.1% |   -57 | 10.4% → 1.5% |       64 → 7 | `lib//compress/zstd_compress.c:4541 → 4646` |
|    new |   +56 | 0.0% → 12.0% |       0 → 56 | `lib//compress/zstd_compress.c:4560`        |
|    new |   +35 |  0.0% → 7.5% |       0 → 35 | `lib//compress/zstd_compress.c:4581`        |
|    new |   +32 |  0.0% → 6.9% |       0 → 32 | `lib//compress/zstd_compress.c:4573`        |

##### `__futex_abstimed_wait_cancelable64` (`./nptl/./nptl/futex-internal.c`)

| Change | Delta |             % | Instructions | Location                             |
| -----: | ----: | ------------: | -----------: | ------------------------------------ |
|  -4.8% |   -21 | 23.0% → 23.5% |    441 → 420 | `./nptl/./nptl/futex-internal.c:57`  |
|  -4.8% |    -9 |  9.8% → 10.1% |    189 → 180 | `./nptl/./nptl/futex-internal.c:103` |
|  -4.8% |    -4 |   4.4% → 4.5% |      84 → 80 | `./nptl/./nptl/futex-internal.c:138` |
|  -4.8% |    -3 |   3.3% → 3.4% |      63 → 60 | `./nptl/./nptl/futex-internal.c:84`  |
|  -4.8% |    -3 |   3.3% → 3.4% |      63 → 60 | `./nptl/./nptl/futex-internal.c:141` |

##### `pthread_cond_signal@@GLIBC_2.17` (`./nptl/./nptl/pthread_cond_signal.c`)

| Change | Delta |             % | Instructions | Location                                 |
| -----: | ----: | ------------: | -----------: | ---------------------------------------- |
| -13.3% |    -8 |   1.5% → 1.3% |      60 → 52 | `./nptl/./nptl/pthread_cond_signal.c:84` |
| -13.3% |    -8 |   1.5% → 1.3% |      60 → 52 | `./nptl/./nptl/pthread_cond_signal.c:85` |
|  +1.2% |    +6 | 12.7% → 13.1% |    500 → 506 | `./nptl/./nptl/pthread_cond_signal.c:96` |

##### `ZSTD_compressBegin_advanced_internal` (`lib//compress/zstd_compress.c`)

| Change | Delta |            % | Instructions | Location                                    |
| -----: | ----: | -----------: | -----------: | ------------------------------------------- |
|    new |    +9 | 0.0% → 18.8% |        0 → 9 | `lib//compress/zstd_compress.c:5295`        |
|  -9.1% |    -1 | 8.7% → 20.8% |      11 → 10 | `lib//compress/zstd_compress.c:5167 → 5292` |
| +12.5% |    +1 | 6.3% → 18.8% |        8 → 9 | `lib//compress/zstd_compress.c:5171 → 5296` |

##### `pthread_cond_signal@@GLIBC_2.17` (`./nptl/./nptl/pthread_cond_common.c`)

| Change | Delta |     % | Instructions | Location                                  |
| -----: | ----: | ----: | -----------: | ----------------------------------------- |
| -13.3% |   -10 | 13.9% |      75 → 65 | `./nptl/./nptl/pthread_cond_common.c:176` |
| -13.3% |    -8 | 11.1% |      60 → 52 | `./nptl/./nptl/pthread_cond_common.c:295` |
| -13.3% |    -8 | 11.1% |      60 → 52 | `./nptl/./nptl/pthread_cond_common.c:312` |
| -13.3% |    -6 |  8.3% |      45 → 39 | `./nptl/./nptl/pthread_cond_common.c:60`  |
| -13.3% |    -6 |  8.3% |      45 → 39 | `./nptl/./nptl/pthread_cond_common.c:174` |

##### `pthread_cond_broadcast@@GLIBC_2.17` (`./nptl/./nptl/pthread_cond_common.c`)

| Change | Delta |     % | Instructions | Location                                  |
| -----: | ----: | ----: | -----------: | ----------------------------------------- |
| -33.3% |    -8 | 12.9% |      24 → 16 | `./nptl/./nptl/pthread_cond_common.c:151` |
| -33.3% |    -5 |  8.1% |      15 → 10 | `./nptl/./nptl/pthread_cond_common.c:176` |
| -33.3% |    -5 |  8.1% |      15 → 10 | `./nptl/./nptl/pthread_cond_common.c:295` |
| -33.3% |    -3 |  4.8% |        9 → 6 | `./nptl/./nptl/pthread_cond_common.c:60`  |
| -33.3% |    -3 |  4.8% |        9 → 6 | `./nptl/./nptl/pthread_cond_common.c:174` |

##### `pthread_cond_wait@@GLIBC_2.17` (`./nptl/./nptl/pthread_cond_wait.c`)

| Change | Delta |             % | Instructions | Location                                |
| -----: | ----: | ------------: | -----------: | --------------------------------------- |
|  -5.6% |   -14 | 15.7% → 15.1% |    252 → 238 | `./nptl/./nptl/pthread_cond_wait.c:616` |
|    new |   +14 |   0.0% → 0.9% |       0 → 14 | `./nptl/./nptl/pthread_cond_wait.c:619` |
|  -5.6% |    -4 |   4.5% → 4.3% |      72 → 68 | `./nptl/./nptl/pthread_cond_wait.c:409` |
|  -4.2% |    -3 |   4.4% → 4.3% |      71 → 68 | `./nptl/./nptl/pthread_cond_wait.c:419` |
|    new |    +3 |   0.0% → 0.2% |        0 → 3 | `./nptl/./nptl/pthread_cond_wait.c:603` |

##### `__pthread_mutex_cond_lock` (`./nptl/../nptl/pthread_mutex_lock.c`)

| Change | Delta |     % | Instructions | Location                                  |
| -----: | ----: | ----: | -----------: | ----------------------------------------- |
|  -5.6% |    -4 | 14.8% |      72 → 68 | `./nptl/../nptl/pthread_mutex_lock.c:80`  |
|  -5.6% |    -4 | 14.8% |      72 → 68 | `./nptl/../nptl/pthread_mutex_lock.c:93`  |
|  -5.6% |    -4 | 14.8% |      72 → 68 | `./nptl/../nptl/pthread_mutex_lock.c:190` |
|  -5.6% |    -3 | 11.1% |      54 → 51 | `./nptl/../nptl/pthread_mutex_lock.c:77`  |
|  -5.6% |    -3 | 11.1% |      54 → 51 | `./nptl/../nptl/pthread_mutex_lock.c:88`  |

##### `__pthread_enable_asynccancel` (`./nptl/./nptl/cancellation.c`)

| Change | Delta |     % | Instructions | Location                          |
| -----: | ----: | ----: | -----------: | --------------------------------- |
|  -2.6% |    -6 | 25.0% |    228 → 222 | `./nptl/./nptl/cancellation.c:42` |
|  -2.6% |    -4 | 16.7% |    152 → 148 | `./nptl/./nptl/cancellation.c:31` |
|  -2.6% |    -4 | 16.7% |    152 → 148 | `./nptl/./nptl/cancellation.c:56` |
|  -2.6% |    -2 |  8.3% |      76 → 74 | `./nptl/./nptl/cancellation.c:33` |
|  -2.6% |    -2 |  8.3% |      76 → 74 | `./nptl/./nptl/cancellation.c:39` |

##### `__pthread_disable_asynccancel` (`./nptl/./nptl/cancellation.c`)

| Change | Delta |     % | Instructions | Location                          |
| -----: | ----: | ----: | -----------: | --------------------------------- |
|  -2.6% |    -6 | 27.3% |    228 → 222 | `./nptl/./nptl/cancellation.c:76` |
|  -2.6% |    -4 | 18.2% |    152 → 148 | `./nptl/./nptl/cancellation.c:63` |
|  -2.6% |    -4 | 18.2% |    152 → 148 | `./nptl/./nptl/cancellation.c:90` |
|  -2.6% |    -3 | 13.6% |    114 → 111 | `./nptl/./nptl/cancellation.c:83` |
|  -2.6% |    -2 |  9.1% |      76 → 74 | `./nptl/./nptl/cancellation.c:71` |

##### `__condvar_confirm_wakeup` (`./nptl/./nptl/pthread_cond_wait.c`)

| Change | Delta |     % | Instructions | Location                               |
| -----: | ----: | ----: | -----------: | -------------------------------------- |
|  -5.6% |    -7 | 50.0% |    126 → 119 | `./nptl/./nptl/pthread_cond_wait.c:53` |
|  -5.6% |    -4 | 28.6% |      72 → 68 | `./nptl/./nptl/pthread_cond_wait.c:48` |
|  -5.6% |    -3 | 21.4% |      54 → 51 | `./nptl/./nptl/pthread_cond_wait.c:55` |

##### `POOL_joinJobs` (`lib//common/pool.c`)

| Change | Delta |           % | Instructions | Location                 |
| -----: | ----: | ----------: | -----------: | ------------------------ |
| -36.8% |    -7 | 5.9% → 3.9% |      19 → 12 | `lib//common/pool.c:197` |
| -50.0% |    -4 | 2.5% → 1.3% |        8 → 4 | `lib//common/pool.c:196` |

##### `AIO_ReadPool_executeReadJob` (`programs/fileio_asyncio.c`)

| Change | Delta |             % | Instructions | Location                        |
| -----: | ----: | ------------: | -----------: | ------------------------------- |
|  -6.0% |   -10 | 33.5% → 32.2% |    167 → 157 | `programs/fileio_asyncio.c:496` |

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

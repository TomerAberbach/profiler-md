# Instructions profile diff

Recorded 39,556,676 instructions → 39,558,041 instructions (+1,365 instructions, ~0%) over 11,501 samples → 11,510 samples (3,439.412 instructions → 3,436.841 instructions per sample).

| Category   | Change |      Delta |      % |                    Instructions |         Samples |
| ---------- | -----: | ---------: | -----: | ------------------------------: | --------------: |
| ours       |    ~0% | +1,203.003 | 100.0% | 39,551,682.765 → 39,552,885.769 | 11,278 → 11,284 |
| stdlib     |  +3.3% |   +161.997 |  <0.1% |           4,938.235 → 5,100.232 |       193 → 196 |
| below main |    ~0% |         +0 |  <0.1% |                              55 |              30 |

## Hottest functions

### Self instructions

#### Regressions

Functions with the largest increase in instructions recorded directly in the function body, excluding callees.

| Change |    Delta |     % |            Instructions | Samples | Function                             | Location                                    |
| -----: | -------: | ----: | ----------------------: | ------: | ------------------------------------ | ------------------------------------------- |
| +16.6% |  +719.99 | <0.1% |     4,334.94 → 5,054.93 |  9 → 12 | `__futex_abstimed_wait_cancelable64` | `./nptl/./nptl/futex-internal.c`            |
| +16.6% | +228.997 | <0.1% |   1,377.981 → 1,606.978 |     108 | `pthread_cond_wait@@GLIBC_2.17`      | `./nptl/./nptl/pthread_cond_wait.c`         |
|  +1.4% | +119.998 | <0.1% |   8,389.884 → 8,509.882 |      90 | `__pthread_mutex_unlock_usercnt`     | `./nptl/./nptl/pthread_mutex_unlock.c`      |
|  +3.1% | +119.998 | <0.1% |   3,827.947 → 3,947.945 |      54 | `pthread_cond_signal@@GLIBC_2.17`    | `./nptl/./nptl/pthread_cond_signal.c`       |
| +25.0% | +107.999 | <0.1% |       431.994 → 539.993 |      42 | `pthread_cond_signal@@GLIBC_2.17`    | `./nptl/./nptl/pthread_cond_common.c`       |
| +22.2% |      +36 | <0.1% |       161.998 → 197.997 |       9 | `__aarch64_ldadd4_relax`             | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +20.0% |      +24 | <0.1% |       119.998 → 143.998 |       3 | `__lll_lock_wake`                    | `./nptl/./nptl/lowlevellock.c`              |
| +16.7% |      +21 | <0.1% |       125.998 → 146.998 |  9 → 12 | `_pthread_cleanup_push@@GLIBC_2.34`  | `./nptl/./nptl/cleanup_compat.c`            |
|  +1.1% |      +18 | <0.1% |   1,691.977 → 1,709.976 |      39 | `__aarch64_swp4_rel`                 | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +14.3% |      +18 | <0.1% |       125.998 → 143.998 | 18 → 21 | `__aarch64_ldadd4_acq`               | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +20.0% |      +18 | <0.1% |        89.999 → 107.999 |       6 | `__aarch64_ldadd8_acq`               | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +20.0% |      +18 | <0.1% |        89.999 → 107.999 |       9 | `__aarch64_ldset4_relax`             | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +20.0% |      +18 | <0.1% |        89.999 → 107.999 |       9 | `__aarch64_ldset4_rel`               | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +25.0% |      +18 | <0.1% |         71.999 → 89.999 |       3 | `__aarch64_ldeor8_rel`               | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +25.0% |      +18 | <0.1% |         71.999 → 89.999 |       3 | `__aarch64_swp4_relax`               | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +0.1% |  +15.496 | <0.1% | 18,730.921 → 18,746.416 |      76 | `HUF_writeCTable_wksp`               | `lib//compress/huf_compress.c`              |
|  +0.5% |      +13 | <0.1% |   2,525.965 → 2,538.965 |      24 | `handle_preload_list`                | `./elf/./elf/rtld.c`                        |
|  +2.9% |       +9 | <0.1% |       308.996 → 317.996 |      33 | `POOL_joinJobs`                      | `lib//common/pool.c`                        |
|  +0.2% |    +1.64 | <0.1% |       710.864 → 712.504 |      48 | `ZSTD_resetCCtx_internal`            | `lib//compress/zstd_cwksp.h`                |
|    ~0% |   +0.526 |  0.1% | 28,841.541 → 28,842.067 |     101 | `do_lookup_x`                        | `./elf/./elf/dl-lookup.c`                   |

#### Improvements

Functions with the largest decrease in instructions recorded directly in the function body, excluding callees.

| Change |    Delta |     % |                  Instructions | Samples | Function                                          | Location                                            |
| -----: | -------: | ----: | ----------------------------: | ------: | ------------------------------------------------- | --------------------------------------------------- |
|  -1.3% | -125.253 | <0.1% |         9,879.548 → 9,754.295 |      95 | `strcmp`                                          | `./string/../sysdeps/aarch64/strcmp.S`              |
|  -3.5% |  -35.999 | <0.1% |           1,017.986 → 981.986 |      48 | `POOL_add`                                        | `lib//common/pool.c`                                |
|    ~0% |  -11.409 |  1.1% |      424,798.71 → 424,787.301 |     182 | `HUF_compress1X_usingCTable_internal.constprop.0` | `lib//compress/huf_compress.c`                      |
|    ~0% |   -2.608 |  0.2% |       97,121.283 → 97,118.674 |     214 | `HUF_buildCTable_wksp`                            | `lib//compress/huf_compress.c`                      |
|    ~0% |   -1.742 |  0.2% |       75,778.115 → 75,776.373 |     124 | `__GI_memset`                                     | `./string/../sysdeps/aarch64/nptl/../memset.S`      |
|    ~0% |   -0.477 |  0.6% |      224,484.917 → 224,484.44 |     148 | `FSE_buildCTable_wksp`                            | `lib//compress/fse_compress.c`                      |
|    ~0% |   -0.464 | <0.1% |       17,289.048 → 17,288.583 |      16 | `FSE_compress_usingCTable_generic`                | `lib//compress/fse_compress.c`                      |
|    ~0% |   -0.436 |  4.9% | 1,957,387.605 → 1,957,387.169 |      41 | `HIST_count_parallel_wksp`                        | `lib//compress/hist.c`                              |
|    ~0% |   -0.261 | <0.1% |         9,703.705 → 9,703.444 |     182 | `HUF_simpleQuickSort`                             | `lib//compress/huf_compress.c`                      |
|    ~0% |   -0.183 | <0.1% |         6,804.089 → 6,803.906 |       8 | `HIST_count_simple`                               | `lib//compress/hist.c`                              |
|    ~0% |   -0.178 | <0.1% |         6,632.649 → 6,632.471 |      20 | `check_match`                                     | `./elf/./elf/dl-lookup.c`                           |
|    ~0% |   -0.134 | <0.1% |         4,986.493 → 4,986.359 |       4 | `FSE_buildCTable_wksp`                            | `lib//common/mem.h`                                 |
|    ~0% |   -0.121 | <0.1% |          4,716.67 → 4,716.549 |      35 | `_dl_new_object`                                  | `./elf/./elf/dl-object.c`                           |
|    ~0% |   -0.093 | <0.1% |         3,452.585 → 3,452.492 |       1 | `do_lookup_x`                                     | `./elf/../sysdeps/generic/ldsodefs.h`               |
|    ~0% |    -0.07 | <0.1% |         2,592.411 → 2,592.342 |       1 | `sysmalloc_mmap.constprop.0`                      | `./malloc/./malloc/malloc.c`                        |
|    ~0% |   -0.064 |  0.1% |       24,110.006 → 24,109.942 |     179 | `FSE_writeNCount_generic`                         | `lib//compress/fse_compress.c`                      |
|    ~0% |   -0.043 | <0.1% |       16,299.062 → 16,299.019 |     114 | `FSE_normalizeCount`                              | `lib//compress/fse_compress.c`                      |
|    ~0% |   -0.042 | <0.1% |         1,579.688 → 1,579.646 |       1 | `map_doit`                                        | `./elf/./elf/rtld.c`                                |
|    ~0% |   -0.042 |  0.5% |     182,185.318 → 182,185.276 |     181 | `__GI_memcpy`                                     | `./string/../sysdeps/aarch64/multiarch/../memcpy.S` |
|    ~0% |   -0.036 | <0.1% |          1,357.647 → 1,357.61 |      30 | `sysmalloc`                                       | `./malloc/./malloc/malloc.c`                        |

### Total instructions

#### Regressions

Functions with the largest increase in total instructions recorded in the function and all its callees.

| Change |    Delta |     % |            Instructions |       Samples | Function                             | Location                                    |
| -----: | -------: | ----: | ----------------------: | ------------: | ------------------------------------ | ------------------------------------------- |
|  +0.3% |   +1,065 |  0.9% |       363,167 → 364,232 | 6,519 → 6,525 | `(below main)`                       | `./elf/../sysdeps/aarch64/dl-start.S`       |
|  +0.3% |   +1,065 |  0.9% |       363,162 → 364,227 | 6,514 → 6,520 | `_dl_start`                          | `./elf/./elf/rtld.c`                        |
|  +0.4% |   +1,052 |  0.7% |       276,399 → 277,451 | 3,260 → 3,263 | `_dl_init`                           | `./elf/./elf/dl-init.c`                     |
|  +0.4% |   +1,052 |  0.7% |       275,376 → 276,428 | 3,254 → 3,257 | `(below main)`                       | `programs/zstd`                             |
| +14.4% | +770.989 | <0.1% |   5,352.926 → 6,123.915 |           138 | `pthread_cond_wait@@GLIBC_2.17`      | `./nptl/./nptl/pthread_cond_wait.c`         |
| +16.6% |  +719.99 | <0.1% |     4,334.94 → 5,054.93 |        9 → 12 | `__futex_abstimed_wait_cancelable64` | `./nptl/./nptl/futex-internal.c`            |
|  +4.2% | +414.994 | <0.1% |  9,875.863 → 10,290.857 |     105 → 114 | `__pthread_mutex_unlock_usercnt`     | `./nptl/./nptl/pthread_mutex_unlock.c`      |
|  +3.8% | +173.998 | <0.1% |   4,583.936 → 4,757.934 |            81 | `pthread_cond_signal@@GLIBC_2.17`    | `./nptl/./nptl/pthread_cond_signal.c`       |
| +25.0% | +143.998 | <0.1% |        575.992 → 719.99 |            48 | `pthread_cond_signal@@GLIBC_2.17`    | `./nptl/./nptl/pthread_cond_common.c`       |
| +22.2% |      +36 | <0.1% |       161.998 → 197.997 |             9 | `__aarch64_ldadd4_relax`             | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +20.0% |      +24 | <0.1% |       119.998 → 143.998 |             3 | `__lll_lock_wake`                    | `./nptl/./nptl/lowlevellock.c`              |
| +16.7% |      +21 | <0.1% |       125.998 → 146.998 |        9 → 12 | `_pthread_cleanup_push@@GLIBC_2.34`  | `./nptl/./nptl/cleanup_compat.c`            |
|  +1.1% |      +18 | <0.1% |   1,691.977 → 1,709.976 |            39 | `__aarch64_swp4_rel`                 | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +14.3% |      +18 | <0.1% |       125.998 → 143.998 |       18 → 21 | `__aarch64_ldadd4_acq`               | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +20.0% |      +18 | <0.1% |        89.999 → 107.999 |             6 | `__aarch64_ldadd8_acq`               | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +20.0% |      +18 | <0.1% |        89.999 → 107.999 |             9 | `__aarch64_ldset4_relax`             | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +20.0% |      +18 | <0.1% |        89.999 → 107.999 |             9 | `__aarch64_ldset4_rel`               | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +25.0% |      +18 | <0.1% |         71.999 → 89.999 |             3 | `__aarch64_ldeor8_rel`               | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
| +25.0% |      +18 | <0.1% |         71.999 → 89.999 |             3 | `__aarch64_swp4_relax`               | `../../usr/lib/aarch64-linux-gnu/libc.so.6` |
|    ~0% |  +14.423 |  0.1% | 58,675.805 → 58,690.228 |           280 | `HUF_writeCTable_wksp`               | `lib//compress/huf_compress.c`              |

#### Improvements

Functions with the largest decrease in total instructions recorded in the function and all its callees.

| Change |    Delta |     % |              Instructions | Samples | Function                                          | Location                                       |
| -----: | -------: | ----: | ------------------------: | ------: | ------------------------------------------------- | ---------------------------------------------- |
|  -1.3% | -125.253 | <0.1% |     9,879.548 → 9,754.295 |      95 | `strcmp`                                          | `./string/../sysdeps/aarch64/strcmp.S`         |
| -39.1% |  -49.999 | <0.1% |          127.998 → 77.999 |      24 | `FIO_openSrcFile`                                 | `programs/fileio.c`                            |
|  -3.5% |  -35.999 | <0.1% |       1,017.986 → 981.986 |      48 | `POOL_add`                                        | `lib//common/pool.c`                           |
|  -9.7% |      -25 | <0.1% |         257.996 → 232.997 |     105 | `AIO_ReadPool_setFile`                            | `programs/fileio_asyncio.c`                    |
|  -5.6% |      -25 | <0.1% |         445.994 → 420.994 |     150 | `FIO_compressFilename_srcFile`                    | `programs/fileio.c`                            |
|  -5.2% |      -25 | <0.1% |         479.993 → 454.994 |     162 | `main`                                            | `programs/zstdcli.c`                           |
|    ~0% |  -11.419 |  1.1% | 425,147.536 → 425,136.118 |     200 | `HUF_compressCTable_internal.isra.0`              | `lib//compress/huf_compress.c`                 |
|    ~0% |  -11.412 |  1.1% | 424,901.773 → 424,890.361 |     184 | `HUF_compress1X_usingCTable_internal.constprop.0` | `lib//compress/huf_compress.c`                 |
|    ~0% |   -2.958 |  0.3% | 110,122.979 → 110,120.021 |     398 | `HUF_buildCTable_wksp`                            | `lib//compress/huf_compress.c`                 |
|    ~0% |   -1.742 |  0.2% |   75,778.115 → 75,776.373 |     124 | `__GI_memset`                                     | `./string/../sysdeps/aarch64/nptl/../memset.S` |
|    ~0% |   -1.066 |  0.1% |   39,685.894 → 39,684.828 |     204 | `HIST_count_simple`                               | `lib//compress/hist.c`                         |
|    ~0% |   -0.662 |  0.6% | 248,692.595 → 248,691.933 |     181 | `FSE_buildCTable_wksp`                            | `lib//compress/fse_compress.c`                 |
|    ~0% |   -0.464 | <0.1% |   17,292.651 → 17,292.186 |      17 | `FSE_compress_usingCTable_generic`                | `lib//compress/fse_compress.c`                 |
|    ~0% |   -0.433 | <0.1% |   16,133.202 → 16,132.769 |      94 | `check_match`                                     | `./elf/./elf/dl-lookup.c`                      |
|    ~0% |   -0.261 | <0.1% |     9,703.705 → 9,703.444 |     182 | `HUF_simpleQuickSort`                             | `lib//compress/huf_compress.c`                 |
|    ~0% |   -0.134 | <0.1% |     4,986.493 → 4,986.359 |       4 | `FSE_buildCTable_wksp`                            | `lib//common/mem.h`                            |
|    ~0% |   -0.121 | <0.1% |     5,006.666 → 5,006.545 |      41 | `_dl_new_object`                                  | `./elf/./elf/dl-object.c`                      |
|    ~0% |   -0.108 | <0.1% |     4,007.535 → 4,007.427 |      32 | `sysmalloc`                                       | `./malloc/./malloc/malloc.c`                   |
|    ~0% |   -0.093 | <0.1% |     3,452.585 → 3,452.492 |       1 | `do_lookup_x`                                     | `./elf/../sysdeps/generic/ldsodefs.h`          |
|    ~0% |    -0.07 | <0.1% |     2,592.411 → 2,592.342 |       1 | `sysmalloc_mmap.constprop.0`                      | `./malloc/./malloc/malloc.c`                   |

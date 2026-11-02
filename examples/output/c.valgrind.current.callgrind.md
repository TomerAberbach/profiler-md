# Instruction profile

Recorded 40,483,273 instructions.

| Category |     % | Instructions |
| -------- | ----: | -----------: |
| Ours     | 98.8% |   40,007,093 |
| Native   |  1.2% |      476,180 |

Paths starting with `./` or `../` are relative to `/src/zstd/`.

## Hottest functions

### Self instructions

Functions with the most instructions recorded within the function body, excluding callees.

|     % | Instructions | Function                                          | Location                                           |
| ----: | -----------: | ------------------------------------------------- | -------------------------------------------------- |
| 29.9% |   12,117,580 | `ZSTD_encodeSequences`                            | `./lib/common/bitstream.h`                         |
| 27.2% |   10,994,690 | `ZSTD_compressBlock_doubleFast`                   | `./lib/compress/zstd_double_fast.c`                |
| 23.1% |    9,349,738 | `ZSTD_compressBlock_doubleFast`                   | `./lib/compress/zstd_compress_internal.h`          |
|  4.8% |    1,957,739 | `HIST_count_parallel_wksp`                        | `./lib/compress/hist.c`                            |
|  3.7% |    1,507,463 | `ZSTD_XXH64_update`                               | `./lib/common/xxhash.h`                            |
|  3.4% |    1,370,003 | `ZSTD_seqToCodes`                                 | `./lib/compress/zstd_compress_internal.h`          |
|  3.0% |    1,224,474 | `ZSTD_seqToCodes`                                 | `./lib/compress/zstd_compress.c`                   |
|  1.5% |      613,032 | `ZSTD_recordFingerprint_43`                       | `./lib/compress/zstd_preSplit.c`                   |
|  1.1% |      425,540 | `HUF_compress1X_usingCTable_internal.constprop.0` | `./lib/compress/huf_compress.c`                    |
|  0.6% |      225,079 | `FSE_buildCTable_wksp`                            | `./lib/compress/fse_compress.c`                    |
|  0.5% |      182,959 | `__GI_memcpy`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.2% |       99,044 | `HUF_buildCTable_wksp`                            | `./lib/compress/huf_compress.c`                    |
|  0.2% |       92,177 | `__GI_memset`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.1% |       32,148 | `do_lookup_x`                                     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.1% |       24,316 | `FSE_writeNCount_generic`                         | `./lib/compress/fse_compress.c`                    |
|  0.1% |       22,361 | `_dl_lookup_symbol_x`                             | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |       19,193 | `FSE_compress_usingCTable_generic`                | `./lib/compress/fse_compress.c`                    |
| <0.1% |       16,413 | `FSE_normalizeCount`                              | `./lib/compress/fse_compress.c`                    |
| <0.1% |       15,976 | `_dl_relocate_object`                             | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |       13,490 | `HUF_writeCTable_wksp`                            | `./lib/compress/huf_compress.c`                    |

#### Categories

Categories accounting for at least 1.0% of self instructions.

##### Ours

|     % | Instructions | Function                                          | Location                                   |
| ----: | -----------: | ------------------------------------------------- | ------------------------------------------ |
| 29.9% |   12,117,580 | `ZSTD_encodeSequences`                            | `./lib/common/bitstream.h`                 |
| 27.2% |   10,994,690 | `ZSTD_compressBlock_doubleFast`                   | `./lib/compress/zstd_double_fast.c`        |
| 23.1% |    9,349,738 | `ZSTD_compressBlock_doubleFast`                   | `./lib/compress/zstd_compress_internal.h`  |
|  4.8% |    1,957,739 | `HIST_count_parallel_wksp`                        | `./lib/compress/hist.c`                    |
|  3.7% |    1,507,463 | `ZSTD_XXH64_update`                               | `./lib/common/xxhash.h`                    |
|  3.4% |    1,370,003 | `ZSTD_seqToCodes`                                 | `./lib/compress/zstd_compress_internal.h`  |
|  3.0% |    1,224,474 | `ZSTD_seqToCodes`                                 | `./lib/compress/zstd_compress.c`           |
|  1.5% |      613,032 | `ZSTD_recordFingerprint_43`                       | `./lib/compress/zstd_preSplit.c`           |
|  1.1% |      425,540 | `HUF_compress1X_usingCTable_internal.constprop.0` | `./lib/compress/huf_compress.c`            |
|  0.6% |      225,079 | `FSE_buildCTable_wksp`                            | `./lib/compress/fse_compress.c`            |
|  0.2% |       99,044 | `HUF_buildCTable_wksp`                            | `./lib/compress/huf_compress.c`            |
|  0.1% |       24,316 | `FSE_writeNCount_generic`                         | `./lib/compress/fse_compress.c`            |
| <0.1% |       19,193 | `FSE_compress_usingCTable_generic`                | `./lib/compress/fse_compress.c`            |
| <0.1% |       16,413 | `FSE_normalizeCount`                              | `./lib/compress/fse_compress.c`            |
| <0.1% |       13,490 | `HUF_writeCTable_wksp`                            | `./lib/compress/huf_compress.c`            |
| <0.1% |        8,972 | `HUF_simpleQuickSort`                             | `./lib/compress/huf_compress.c`            |
| <0.1% |        6,866 | `HIST_count_simple`                               | `./lib/compress/hist.c`                    |
| <0.1% |        5,152 | `FSE_buildCTable_wksp`                            | `./lib/common/mem.h`                       |
| <0.1% |        1,578 | `ZSTDMT_compressStream_generic`                   | `./lib/compress/zstdmt_compress.c`         |
| <0.1% |        1,432 | `ZSTD_buildCTable`                                | `./lib/compress/zstd_compress_sequences.c` |

##### Native

|     % | Instructions | Function                          | Location                                           |
| ----: | -----------: | --------------------------------- | -------------------------------------------------- |
|  0.5% |      182,959 | `__GI_memcpy`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.2% |       92,177 | `__GI_memset`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.1% |       32,148 | `do_lookup_x`                     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.1% |       22,361 | `_dl_lookup_symbol_x`             | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |       15,976 | `_dl_relocate_object`             | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |       12,385 | `_int_malloc`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |       11,492 | `strcmp`                          | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |        8,433 | `__pthread_mutex_unlock_usercnt`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |        6,584 | `check_match`                     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |        6,442 | `pthread_mutex_lock@@GLIBC_2.17`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |        5,199 | `_int_free`                       | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |        4,744 | `__GI___tunables_init`            | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |        4,412 | `pthread_cond_signal@@GLIBC_2.17` | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |        4,027 | `_dl_fixup`                       | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |        3,399 | `malloc`                          | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |        3,278 | `free`                            | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |        2,850 | `__aarch64_cas4_acq`              | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |        2,396 | `calloc`                          | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |        1,938 | `__aarch64_swp4_rel`              | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |        1,872 | `__GI_memmove`                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |

#### Lines

Lines with the largest contribution to each function's self instructions.

##### `ZSTD_encodeSequences` (`./lib/common/bitstream.h`)

|     % | Instructions | Location                       |
| ----: | -----------: | ------------------------------ |
| 18.2% |    2,203,194 | `./lib/common/bitstream.h:173` |
| 11.1% |    1,346,371 | `./lib/common/bitstream.h:186` |
|  6.1% |      734,382 | `./lib/common/bitstream.h:187` |
|  3.0% |      367,255 | `./lib/common/bitstream.h:230` |
|  1.0% |      122,442 | `./lib/common/bitstream.h:227` |

##### `ZSTD_compressBlock_doubleFast` (`./lib/compress/zstd_double_fast.c`)

|    % | Instructions | Location                                |
| ---: | -----------: | --------------------------------------- |
| 5.6% |      611,369 | `./lib/compress/zstd_double_fast.c:310` |
| 5.6% |      610,889 | `./lib/compress/zstd_double_fast.c:190` |
| 4.4% |      488,700 | `./lib/compress/zstd_double_fast.c:178` |
| 3.1% |      339,153 | `./lib/compress/zstd_double_fast.c:290` |
| 2.3% |      251,826 | `./lib/compress/zstd_double_fast.c:271` |

##### `ZSTD_compressBlock_doubleFast` (`./lib/compress/zstd_compress_internal.h`)

|    % | Instructions | Location                                      |
| ---: | -----------: | --------------------------------------------- |
| 6.6% |      619,974 | `./lib/compress/zstd_compress_internal.h:642` |
| 4.3% |      402,346 | `./lib/compress/zstd_compress_internal.h:861` |
| 3.9% |      367,967 | `./lib/compress/zstd_compress_internal.h:909` |
| 3.9% |      367,716 | `./lib/compress/zstd_compress_internal.h:924` |
| 2.9% |      269,866 | `./lib/compress/zstd_compress_internal.h:859` |

##### `HIST_count_parallel_wksp` (`./lib/compress/hist.c`)

|     % | Instructions | Location                   |
| ----: | -----------: | -------------------------- |
| 99.8% |    1,953,875 | `./lib/compress/hist.c:98` |
| <0.1% |          160 | `./lib/compress/hist.c:81` |
| <0.1% |           96 | `./lib/compress/hist.c:84` |
| <0.1% |           64 | `./lib/compress/hist.c:93` |

##### `ZSTD_XXH64_update` (`./lib/common/xxhash.h`)

|     % | Instructions | Location                     |
| ----: | -----------: | ---------------------------- |
| 34.8% |      524,300 | `./lib/common/xxhash.h:3378` |
| 17.4% |      262,159 | `./lib/common/xxhash.h:3380` |
| 17.4% |      262,144 | `./lib/common/xxhash.h:3379` |
|  8.7% |      131,081 | `./lib/common/xxhash.h:3608` |
|  8.7% |      131,081 | `./lib/common/xxhash.h:3609` |

##### `ZSTD_seqToCodes` (`./lib/compress/zstd_compress_internal.h`)

|     % | Instructions | Location                                      |
| ----: | -----------: | --------------------------------------------- |
| 17.9% |      244,864 | `./lib/compress/zstd_compress_internal.h:612` |

##### `ZSTD_seqToCodes` (`./lib/compress/zstd_compress.c`)

|     % | Instructions | Location                              |
| ----: | -----------: | ------------------------------------- |
| 30.0% |      367,523 | `./lib/compress/zstd_compress.c:2703` |
| 20.0% |      244,818 | `./lib/compress/zstd_compress.c:2704` |
| 20.0% |      244,816 | `./lib/compress/zstd_compress.c:2707` |
| <0.1% |           32 | `./lib/compress/zstd_compress.c:2699` |
| <0.1% |            8 | `./lib/compress/zstd_compress.c:2698` |

##### `ZSTD_recordFingerprint_43` (`./lib/compress/zstd_preSplit.c`)

|     % | Instructions | Location                             |
| ----: | -----------: | ------------------------------------ |
| 24.8% |      152,208 | `./lib/compress/zstd_preSplit.c:72`  |
| 17.5% |      107,520 | `./lib/compress/zstd_preSplit.c:102` |
| 17.5% |      107,520 | `./lib/compress/zstd_preSplit.c:128` |
| 13.2% |       80,955 | `./lib/compress/zstd_preSplit.c:100` |
| 13.2% |       80,640 | `./lib/compress/zstd_preSplit.c:127` |

##### `HUF_compress1X_usingCTable_internal.constprop.0` (`./lib/compress/huf_compress.c`)

|     % | Instructions | Location                            |
| ----: | -----------: | ----------------------------------- |
| 29.6% |      126,092 | `./lib/compress/huf_compress.c:987` |
| 13.3% |       56,792 | `./lib/compress/huf_compress.c:891` |
| 13.3% |       56,760 | `./lib/compress/huf_compress.c:886` |
| 11.9% |       50,490 | `./lib/compress/huf_compress.c:887` |
|  6.0% |       25,344 | `./lib/compress/huf_compress.c:943` |

##### `FSE_buildCTable_wksp` (`./lib/compress/fse_compress.c`)

|     % | Instructions | Location                            |
| ----: | -----------: | ----------------------------------- |
| 36.4% |       81,944 | `./lib/compress/fse_compress.c:172` |
| 14.3% |       32,131 | `./lib/compress/fse_compress.c:160` |
| 13.7% |       30,816 | `./lib/compress/fse_compress.c:170` |
|  9.2% |       20,727 | `./lib/compress/fse_compress.c:163` |
|  8.9% |       19,986 | `./lib/compress/fse_compress.c:162` |

##### `HUF_buildCTable_wksp` (`./lib/compress/huf_compress.c`)

|    % | Instructions | Location                            |
| ---: | -----------: | ----------------------------------- |
| 6.2% |        6,178 | `./lib/compress/huf_compress.c:533` |
| 6.2% |        6,112 | `./lib/compress/huf_compress.c:640` |
| 5.4% |        5,363 | `./lib/compress/huf_compress.c:702` |
| 5.4% |        5,355 | `./lib/compress/huf_compress.c:701` |
| 5.2% |        5,135 | `./lib/compress/huf_compress.c:648` |

##### `FSE_writeNCount_generic` (`./lib/compress/fse_compress.c`)

|     % | Instructions | Location                            |
| ----: | -----------: | ----------------------------------- |
| 10.4% |        2,531 | `./lib/compress/fse_compress.c:302` |
|  8.6% |        2,088 | `./lib/compress/fse_compress.c:260` |
|  8.2% |        1,992 | `./lib/compress/fse_compress.c:293` |
|  8.2% |        1,992 | `./lib/compress/fse_compress.c:296` |
|  8.2% |        1,992 | `./lib/compress/fse_compress.c:299` |

##### `FSE_compress_usingCTable_generic` (`./lib/compress/fse_compress.c`)

|    % | Instructions | Location                            |
| ---: | -----------: | ----------------------------------- |
| 4.0% |          774 | `./lib/compress/fse_compress.c:588` |
| 2.6% |          500 | `./lib/compress/fse_compress.c:602` |
| 0.2% |           40 | `./lib/compress/fse_compress.c:554` |
| 0.2% |           40 | `./lib/compress/fse_compress.c:608` |
| 0.1% |           16 | `./lib/compress/fse_compress.c:563` |

##### `FSE_normalizeCount` (`./lib/compress/fse_compress.c`)

|     % | Instructions | Location                            |
| ----: | -----------: | ----------------------------------- |
| 25.4% |        4,170 | `./lib/compress/fse_compress.c:487` |
| 12.9% |        2,117 | `./lib/compress/fse_compress.c:486` |
| 12.7% |        2,085 | `./lib/compress/fse_compress.c:488` |
|  7.6% |        1,242 | `./lib/compress/fse_compress.c:489` |
|  6.7% |        1,101 | `./lib/compress/fse_compress.c:498` |

##### `HUF_writeCTable_wksp` (`./lib/compress/huf_compress.c`)

|     % | Instructions | Location                            |
| ----: | -----------: | ----------------------------------- |
| 23.0% |        3,097 | `./lib/compress/huf_compress.c:270` |
| 22.7% |        3,057 | `./lib/compress/huf_compress.c:271` |
| 21.2% |        2,864 | `./lib/compress/huf_compress.c:190` |
| 16.5% |        2,232 | `./lib/compress/huf_compress.c:798` |
| 10.9% |        1,476 | `./lib/compress/huf_compress.c:799` |

##### `HUF_simpleQuickSort` (`./lib/compress/huf_compress.c`)

|     % | Instructions | Location                            |
| ----: | -----------: | ----------------------------------- |
| 15.8% |        1,418 | `./lib/compress/huf_compress.c:691` |
| 14.7% |        1,323 | `./lib/compress/huf_compress.c:696` |
| 11.8% |        1,062 | `./lib/compress/huf_compress.c:559` |
|  6.3% |          561 | `./lib/compress/huf_compress.c:562` |
|  4.9% |          441 | `./lib/compress/huf_compress.c:655` |

##### `HIST_count_simple` (`./lib/compress/hist.c`)

|     % | Instructions | Location                   |
| ----: | -----------: | -------------------------- |
| 96.7% |        6,642 | `./lib/compress/hist.c:47` |
|  1.0% |           72 | `./lib/compress/hist.c:41` |
|  0.1% |            8 | `./lib/compress/hist.c:44` |

##### `FSE_buildCTable_wksp` (`./lib/common/mem.h`)

|    % | Instructions | Location                 |
| ---: | -----------: | ------------------------ |
| 1.6% |           80 | `./lib/common/mem.h:189` |

##### `ZSTDMT_compressStream_generic` (`./lib/compress/zstdmt_compress.c`)

|     % | Instructions | Location                                |
| ----: | -----------: | --------------------------------------- |
| 30.6% |          483 | `./lib/compress/zstdmt_compress.c:1891` |
|  6.4% |          101 | `./lib/compress/zstdmt_compress.c:1495` |
|  4.9% |           77 | `./lib/compress/zstdmt_compress.c:1857` |
|  4.9% |           77 | `./lib/compress/zstdmt_compress.c:1864` |
|  2.9% |           45 | `./lib/compress/zstdmt_compress.c:1542` |

##### `ZSTD_buildCTable` (`./lib/compress/zstd_compress_sequences.c`)

|     % | Instructions | Location                                       |
| ----: | -----------: | ---------------------------------------------- |
| 16.8% |          240 | `./lib/compress/zstd_compress_sequences.c:250` |
| 11.7% |          168 | `./lib/compress/zstd_compress_sequences.c:270` |
| 11.7% |          168 | `./lib/compress/zstd_compress_sequences.c:278` |
| 10.1% |          144 | `./lib/compress/zstd_compress_sequences.c:271` |
|  8.4% |          120 | `./lib/compress/zstd_compress_sequences.c:288` |

### Total instructions

Functions with the most instructions recorded within the function and its callees, excluding recursive calls.

#### Categories

Categories accounting for at least 1.0% of self instructions.

##### Ours

|     % | Instructions | Function                        | Location                                   |
| ----: | -----------: | ------------------------------- | ------------------------------------------ |
| 97.0% |   39,273,650 | `ZSTD_compress_frameChunk`      | `./lib/compress/zstd_compress.c`           |
| 50.3% |   20,346,166 | `ZSTD_buildSeqStore`            | `./lib/compress/zstd_compress.c`           |
| 50.3% |   20,345,061 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_double_fast.c`        |
| 50.3% |   20,344,346 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_compress_internal.h`  |
| 49.7% |   20,103,537 | `ZSTD_compressContinue_public`  | `./lib/compress/zstd_compress.c`           |
| 49.7% |   20,103,424 | `ZSTD_compressContinue_public`  | `./lib/compress/zstd_compress_internal.h`  |
| 47.4% |   19,170,352 | `ZSTD_compressEnd_public`       | `./lib/compress/zstd_compress.c`           |
| 47.4% |   19,170,285 | `ZSTD_compressEnd_public`       | `./lib/compress/zstd_compress_internal.h`  |
| 29.9% |   12,119,716 | `ZSTD_encodeSequences`          | `./lib/compress/zstd_compress_sequences.c` |
| 29.9% |   12,118,460 | `ZSTD_encodeSequences`          | `./lib/common/mem.h`                       |
| 29.9% |   12,117,580 | `ZSTD_encodeSequences`          | `./lib/common/bitstream.h`                 |
| 11.2% |    4,530,883 | `ZSTD_buildSequencesStatistics` | `./lib/compress/zstd_compress.c`           |
|  7.0% |    2,824,719 | `HIST_count_parallel_wksp`      | `./lib/compress/hist.c`                    |
|  6.4% |    2,594,477 | `ZSTD_seqToCodes`               | `./lib/compress/zstd_compress.c`           |
|  4.8% |    1,935,918 | `HIST_countFast_wksp`           | `./lib/compress/hist.c`                    |
|  3.7% |    1,507,463 | `ZSTD_XXH64_update`             | `./lib/common/xxhash.h`                    |
|  3.4% |    1,377,109 | `ZSTD_buildCTable`              | `./lib/compress/zstd_compress_sequences.c` |
|  3.4% |    1,370,003 | `ZSTD_seqToCodes`               | `./lib/compress/zstd_compress_internal.h`  |
|  2.2% |      892,897 | `ZSTD_compressLiterals`         | `./lib/compress/zstd_compress_literals.c`  |
|  2.2% |      889,921 | `HUF_compress4X_repeat`         | `./lib/compress/huf_compress.c`            |

##### Native

|     % | Instructions | Function                        | Location                                           |
| ----: | -----------: | ------------------------------- | -------------------------------------------------- |
|  0.9% |      363,755 | `(below main)`                  | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.9% |      363,750 | `_dl_start`                     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.7% |      283,295 | `_dl_runtime_resolve`           | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.7% |      276,932 | `_dl_init`                      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.7% |      275,200 | `__libc_start_main@@GLIBC_2.34` | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.7% |      275,184 | `__cxa_atexit`                  | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.7% |      275,181 | `__internal_atexit`             | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.7% |      274,303 | `(below main)`                  | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.5% |      182,959 | `__GI_memcpy`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.2% |       92,177 | `__GI_memset`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.2% |       86,058 | `_dl_sysdep_start`              | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.2% |       85,773 | `__GI___tunables_init`          | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.2% |       80,837 | `dl_main`                       | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.2% |       64,424 | `malloc`                        | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.1% |       48,428 | `do_lookup_x`                   | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.1% |       30,048 | `_dl_fixup`                     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.1% |       22,361 | `_dl_lookup_symbol_x`           | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |       17,173 | `_int_malloc`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |       15,976 | `_dl_relocate_object`           | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |       15,912 | `check_match`                   | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

#### Callers

Callers with the largest contribution to each function's total instructions. Inlining can make caller attribution imprecise, and for recursive calls, values and percentages can exceed the profile's total.

##### `ZSTD_compress_frameChunk` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                         | Location                                  |
| -----: | -----------: | ----: | ------------------------------ | ----------------------------------------- |
| 144.6% |   56,772,914 |     8 | `ZSTD_compressBlock_internal`  | `./lib/compress/zstd_compress.c`          |
|  98.1% |   38,519,691 |     2 | `ZSTD_compress_frameChunk`     | `./lib/compress/zstd_compress.c`          |
|  51.2% |   20,103,383 |     1 | `ZSTD_compressContinue_public` | `./lib/compress/zstd_compress.c`          |
|  48.8% |   19,170,267 |     1 | `ZSTD_compressEnd_public`      | `./lib/compress/zstd_compress_internal.h` |

##### `ZSTD_buildSeqStore` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                          | Location                            |
| -----: | -----------: | ----: | ------------------------------- | ----------------------------------- |
| 186.2% |   37,889,878 |     8 | `ZSTD_compressBlock_internal`   | `./lib/compress/zstd_compress.c`    |
|  <0.1% |          291 |     8 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_double_fast.c` |

##### `ZSTD_compressBlock_doubleFast` (`./lib/compress/zstd_double_fast.c`)

|         % |    Instructions |   Calls | Caller                          | Location                                  |
| --------: | --------------: | ------: | ------------------------------- | ----------------------------------------- |
| 755707.0% | 153,749,042,904 | 122,214 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_compress_internal.h` |
|    100.0% |      20,345,061 |       8 | `ZSTD_buildSeqStore`            | `./lib/compress/zstd_compress.c`          |
|     62.4% |      12,697,329 |       9 | `ZSTD_compressBlock_doubleFast` | `./lib/common/mem.h`                      |

##### `ZSTD_compressBlock_doubleFast` (`./lib/compress/zstd_compress_internal.h`)

|         % |    Instructions |   Calls | Caller                          | Location                                  |
| --------: | --------------: | ------: | ------------------------------- | ----------------------------------------- |
| 755779.5% | 153,758,392,642 | 122,215 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_double_fast.c`       |
|    100.0% |      20,344,090 |       8 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_compress_internal.h` |

##### `ZSTD_compressContinue_public` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                         | Location                                  |
| -----: | -----------: | ----: | ------------------------------ | ----------------------------------------- |
| 195.4% |   39,274,544 |     1 | `ZSTDMT_compressionJob`        | `./lib/compress/zstdmt_compress.c`        |
| 100.0% |   20,103,393 |     1 | `ZSTD_compressContinue_public` | `./lib/compress/zstd_compress_internal.h` |

##### `ZSTD_compressContinue_public` (`./lib/compress/zstd_compress_internal.h`)

|      % | Instructions | Calls | Caller                         | Location                         |
| -----: | -----------: | ----: | ------------------------------ | -------------------------------- |
| 100.0% |   20,103,424 |     1 | `ZSTD_compressContinue_public` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_compressEnd_public` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                           | Location                               |
| -----: | -----------: | ----: | -------------------------------- | -------------------------------------- |
| 100.0% |   19,170,728 |     1 | `__pthread_mutex_unlock_usercnt` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  <0.1% |           97 |     1 | `ZSTD_compress_frameChunk`       | `./lib/compress/zstd_compress.c`       |

##### `ZSTD_compressEnd_public` (`./lib/compress/zstd_compress_internal.h`)

|      % | Instructions | Calls | Caller                    | Location                         |
| -----: | -----------: | ----: | ------------------------- | -------------------------------- |
| 100.0% |   19,170,285 |     1 | `ZSTD_compressEnd_public` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_encodeSequences` (`./lib/compress/zstd_compress_sequences.c`)

|      % | Instructions | Calls | Caller                          | Location                         |
| -----: | -----------: | ----: | ------------------------------- | -------------------------------- |
| 100.0% |   12,119,804 |     8 | `ZSTD_buildSequencesStatistics` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_encodeSequences` (`./lib/common/mem.h`)

|      % | Instructions | Calls | Caller                 | Location                                   |
| -----: | -----------: | ----: | ---------------------- | ------------------------------------------ |
| 100.0% |   12,118,460 |     8 | `ZSTD_encodeSequences` | `./lib/compress/zstd_compress_sequences.c` |

##### `ZSTD_encodeSequences` (`./lib/common/bitstream.h`)

|      % | Instructions | Calls | Caller                 | Location                   |
| -----: | -----------: | ----: | ---------------------- | -------------------------- |
| 100.0% |   12,117,580 |     8 | `ZSTD_encodeSequences` | `./lib/common/mem.h`       |
| 100.0% |   12,116,788 |     8 | `ZSTD_encodeSequences` | `./lib/common/bitstream.h` |

##### `ZSTD_buildSequencesStatistics` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                        | Location                         |
| -----: | -----------: | ----: | ----------------------------- | -------------------------------- |
| 367.5% |   16,650,687 |     8 | `ZSTD_compressBlock_internal` | `./lib/compress/zstd_compress.c` |

##### `HIST_count_parallel_wksp` (`./lib/compress/hist.c`)

|      % | Instructions | Calls | Caller                | Location                |
| -----: | -----------: | ----: | --------------------- | ----------------------- |
| 137.5% |    3,882,903 |    24 | `HIST_countFast_wksp` | `./lib/compress/hist.c` |
|  31.5% |      888,873 |     8 | `HIST_count_wksp`     | `./lib/compress/hist.c` |

##### `ZSTD_seqToCodes` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                          | Location                         |
| -----: | -----------: | ----: | ------------------------------- | -------------------------------- |
| 100.0% |    2,594,477 |     8 | `ZSTD_buildSequencesStatistics` | `./lib/compress/zstd_compress.c` |

##### `HIST_countFast_wksp` (`./lib/compress/hist.c`)

|      % | Instructions | Calls | Caller                          | Location                                   |
| -----: | -----------: | ----: | ------------------------------- | ------------------------------------------ |
| 100.6% |    1,947,201 |    16 | `ZSTD_buildCTable`              | `./lib/compress/zstd_compress_sequences.c` |
| 100.0% |    1,935,918 |     8 | `ZSTD_buildSequencesStatistics` | `./lib/compress/zstd_compress.c`           |

##### `ZSTD_XXH64_update` (`./lib/common/xxhash.h`)

|     % | Instructions | Calls | Caller                     | Location                           |
| ----: | -----------: | ----: | -------------------------- | ---------------------------------- |
| 50.0% |      753,754 |     2 | `ZSTD_compress_frameChunk` | `./lib/compress/zstd_compress.c`   |
| 50.0% |      753,709 |     1 | `ZSTDMT_compressionJob`    | `./lib/compress/zstdmt_compress.c` |

##### `ZSTD_buildCTable` (`./lib/compress/zstd_compress_sequences.c`)

|      % | Instructions | Calls | Caller                     | Location                        |
| -----: | -----------: | ----: | -------------------------- | ------------------------------- |
| 160.3% |    2,207,086 |    24 | `HIST_count_parallel_wksp` | `./lib/compress/hist.c`         |
|  <0.1% |          120 |    24 | `FSE_buildCTable_wksp`     | `./lib/compress/fse_compress.c` |

##### `ZSTD_seqToCodes` (`./lib/compress/zstd_compress_internal.h`)

|      % | Instructions | Calls | Caller            | Location                         |
| -----: | -----------: | ----: | ----------------- | -------------------------------- |
| 100.0% |    1,370,003 |     8 | `ZSTD_seqToCodes` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_compressLiterals` (`./lib/compress/zstd_compress_literals.c`)

|       % | Instructions | Calls | Caller                  | Location                                  |
| ------: | -----------: | ----: | ----------------------- | ----------------------------------------- |
| 1964.8% |   17,543,712 |     8 | `ZSTD_buildSeqStore`    | `./lib/compress/zstd_compress.c`          |
|   99.7% |      890,217 |     8 | `ZSTD_compressLiterals` | `./lib/compress/zstd_compress_literals.c` |
|   <0.1% |           72 |     8 | `HUF_compress4X_repeat` | `./lib/compress/huf_compress.c`           |

##### `HUF_compress4X_repeat` (`./lib/compress/huf_compress.c`)

|      % | Instructions | Calls | Caller                  | Location                                  |
| -----: | -----------: | ----: | ----------------------- | ----------------------------------------- |
| 100.0% |      889,993 |     8 | `ZSTD_compressLiterals` | `./lib/compress/zstd_compress_literals.c` |

##### `_dl_start` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Caller         | Location                                           |
| -----: | -----------: | ----: | -------------- | -------------------------------------------------- |
| 118.8% |      432,172 |     5 | `_dl_start`    | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 100.0% |      363,750 |     1 | `(below main)` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `_dl_runtime_resolve` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|     % | Instructions | Calls | Caller                          | Location                           |
| ----: | -----------: | ----: | ------------------------------- | ---------------------------------- |
| 97.4% |      275,888 |     1 | `(below main)`                  | `./programs/zstd`                  |
|  6.0% |       17,021 |     1 | `ZSTDMT_compressStream_generic` | `./lib/compress/zstdmt_compress.c` |
|  3.9% |       11,145 |     1 | `AIO_IOPool_init`               | `./programs/fileio_asyncio.c`      |
|  2.3% |        6,548 |     2 | `POOL_joinJobs`                 | `./lib/common/pool.c`              |
|  2.0% |        5,590 |     1 | `AIO_WritePool_closeFile`       | `./programs/fileio_asyncio.c`      |

##### `_dl_init` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Caller      | Location                                           |
| -----: | -----------: | ----: | ----------- | -------------------------------------------------- |
| 100.0% |      276,932 |     1 | `_dl_start` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   0.3% |          920 |     1 | `call_init` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `__libc_start_main@@GLIBC_2.34` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % | Instructions | Calls | Caller                | Location                                           |
| -----: | -----------: | ----: | --------------------- | -------------------------------------------------- |
| 100.0% |      275,200 |     1 | `_dl_runtime_resolve` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  99.9% |      275,055 |     1 | `__internal_atexit`   | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |

##### `__cxa_atexit` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % | Instructions | Calls | Caller                          | Location                               |
| -----: | -----------: | ----: | ------------------------------- | -------------------------------------- |
| 100.0% |      275,184 |     1 | `__libc_start_main@@GLIBC_2.34` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__internal_atexit` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % | Instructions | Calls | Caller         | Location                               |
| -----: | -----------: | ----: | -------------- | -------------------------------------- |
| 100.0% |      275,181 |     1 | `__cxa_atexit` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `(below main)` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % | Instructions | Calls | Caller                          | Location                               |
| -----: | -----------: | ----: | ------------------------------- | -------------------------------------- |
| 100.0% |      274,303 |     1 | `__libc_start_main@@GLIBC_2.34` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__GI_memcpy` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % | Instructions | Calls | Caller                          | Location                                           |
| ----: | -----------: | ----: | ------------------------------- | -------------------------------------------------- |
| 88.1% |      161,268 |    10 | `ZSTDMT_compressStream_generic` | `./lib/compress/zstdmt_compress.c`                 |
|  9.0% |       16,390 |     1 | `_dl_runtime_resolve`           | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  1.1% |        2,096 |     8 | `ZSTD_compressLiterals`         | `./lib/compress/zstd_compress_literals.c`          |
|  0.7% |        1,310 |     5 | `HUF_compress_internal`         | `./lib/compress/huf_compress.c`                    |
|  0.5% |          844 |     2 | `_IO_file_xsputn@@GLIBC_2.17`   | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |

##### `__GI_memset` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % | Instructions | Calls | Caller                      | Location                         |
| ----: | -----------: | ----: | --------------------------- | -------------------------------- |
| 66.7% |       61,458 |     1 | `ZSTD_resetCCtx_internal`   | `./lib/compress/zstd_cwksp.h`    |
| 11.9% |       10,976 |   112 | `ZSTD_recordFingerprint_43` | `./lib/compress/zstd_preSplit.c` |
| 11.7% |       10,816 |    32 | `HIST_count_parallel_wksp`  | `./lib/compress/hist.c`          |
|  5.0% |        4,606 |     7 | `ZSTD_splitBlock`           | `./lib/compress/zstd_preSplit.c` |
|  3.6% |        3,328 |    16 | `HUF_buildCTable_wksp`      | `./lib/compress/huf_compress.c`  |

##### `_dl_sysdep_start` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Caller                 | Location                                           |
| -----: | -----------: | ----: | ---------------------- | -------------------------------------------------- |
| 100.0% |       86,058 |     1 | `_dl_start`            | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  94.1% |       80,938 |     1 | `__GI___tunables_init` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `__GI___tunables_init` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Caller                 | Location                                           |
| -----: | -----------: | ----: | ---------------------- | -------------------------------------------------- |
| 100.0% |       85,773 |     1 | `_dl_sysdep_start`     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  70.7% |       60,654 |    24 | `__GI___tunables_init` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `dl_main` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Caller                | Location                                           |
| -----: | -----------: | ----: | --------------------- | -------------------------------------------------- |
| 395.4% |      319,609 |     4 | `dl_main`             | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 100.0% |       80,837 |     1 | `_dl_sysdep_start`    | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  99.1% |       80,103 |     1 | `_dl_new_object`      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  95.7% |       77,362 |     1 | `_dl_init_paths`      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  92.3% |       74,623 |     1 | `handle_preload_list` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `malloc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % | Instructions | Calls | Caller                                           | Location                                           |
| ----: | -----------: | ----: | ------------------------------------------------ | -------------------------------------------------- |
| 96.5% |       62,156 |     1 | `ZSTD_estimateCCtxSize_usingCCtxParams_internal` | `./lib/compress/zstd_compress.c`                   |
| 19.0% |       12,222 |     2 | `POOL_create`                                    | `./lib/common/pool.c`                              |
| 17.7% |       11,380 |     1 | `AIO_WritePool_create`                           | `./programs/fileio_asyncio.c`                      |
| 13.8% |        8,867 |     1 | `AIO_ReadPool_create`                            | `./programs/fileio_asyncio.c`                      |
|  3.9% |        2,485 |     2 | `_dl_runtime_resolve`                            | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `do_lookup_x` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Caller                | Location                                           |
| -----: | -----------: | ----: | --------------------- | -------------------------------------------------- |
| 100.2% |       48,510 |   132 | `_dl_lookup_symbol_x` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  91.1% |       44,129 |   257 | `do_lookup_x`         | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   1.0% |          506 |     2 | `check_match`         | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `_dl_fixup` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Caller                | Location                                           |
| -----: | -----------: | ----: | --------------------- | -------------------------------------------------- |
| 100.0% |       30,048 |    49 | `_dl_runtime_resolve` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  54.4% |       16,348 |    30 | `_dl_fixup`           | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   1.5% |          457 |    49 | `_dl_lookup_symbol_x` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `_dl_lookup_symbol_x` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Caller                 | Location                                           |
| -----: | -----------: | ----: | ---------------------- | -------------------------------------------------- |
| 650.8% |      145,526 |    10 | `_dl_relocate_object`  | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 149.4% |       33,412 |    60 | `_dl_lookup_symbol_x`  | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 118.4% |       26,478 |    49 | `_dl_fixup`            | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   9.4% |        2,106 |     4 | `lookup_malloc_symbol` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   0.4% |           82 |     8 | `do_lookup_x`          | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `_int_malloc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % | Instructions | Calls | Caller               | Location                               |
| ----: | -----------: | ----: | -------------------- | -------------------------------------- |
| 75.1% |       12,892 |    56 | `malloc`             | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 67.9% |       11,665 |    81 | `_int_malloc`        | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 22.9% |        3,931 |    21 | `calloc`             | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  2.3% |          391 |     1 | `tcache_init.part.0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  1.8% |          302 |     2 | `arena_get2`         | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_dl_relocate_object` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|       % | Instructions | Calls | Caller                    | Location                                           |
| ------: | -----------: | ----: | ------------------------- | -------------------------------------------------- |
| 1544.3% |      246,710 |    19 | `_dl_relocate_object`     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  642.4% |      102,624 |    10 | `_dl_lookup_symbol_x`     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  403.2% |       64,412 |     1 | `dl_main`                 | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  129.6% |       20,699 |     1 | `_dl_add_to_slotinfo`     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   32.0% |        5,114 |     1 | `__rtld_malloc_init_real` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `check_match` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Caller              | Location                                           |
| -----: | -----------: | ----: | ------------------- | -------------------------------------------------- |
| 105.5% |       16,786 |   127 | `do_lookup_x`       | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   3.6% |          572 |     3 | `_dl_lookup_direct` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   0.1% |           10 |     2 | `check_match`       | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

#### Callees

Callees with the largest contribution to each function's total instructions. Inlining can make callee attribution imprecise, and for recursive calls, values and percentages can exceed the profile's total.

##### `ZSTD_compress_frameChunk` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Callee                        | Location                         |
| -----: | -----------: | ----: | ----------------------------- | -------------------------------- |
| 192.4% |   75,565,864 |     7 | `ZSTD_splitBlock`             | `./lib/compress/zstd_preSplit.c` |
|  98.1% |   38,519,691 |     2 | `ZSTD_compress_frameChunk`    | `./lib/compress/zstd_compress.c` |
|  50.2% |   19,726,376 |     1 | `ZSTD_compressBlock_internal` | `./lib/compress/zstd_compress.c` |
|   1.9% |      753,754 |     2 | `ZSTD_XXH64_update`           | `./lib/common/xxhash.h`          |
|  <0.1% |           97 |     1 | `ZSTD_compressEnd_public`     | `./lib/compress/zstd_compress.c` |

##### `ZSTD_buildSeqStore` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Callee                          | Location                                  |
| -----: | -----------: | ----: | ------------------------------- | ----------------------------------------- |
| 100.0% |   20,345,061 |     8 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_double_fast.c`       |
|  86.2% |   17,543,712 |     8 | `ZSTD_compressLiterals`         | `./lib/compress/zstd_compress_literals.c` |
|  <0.1% |          131 |     8 | `__GI_memcpy`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`    |

##### `ZSTD_compressBlock_doubleFast` (`./lib/compress/zstd_double_fast.c`)

|         % |    Instructions |   Calls | Callee                          | Location                                  |
| --------: | --------------: | ------: | ------------------------------- | ----------------------------------------- |
| 755752.9% | 153,758,392,642 | 122,215 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_compress_internal.h` |
|     62.4% |      12,697,671 |       9 | `ZSTD_compressBlock_doubleFast` | `./lib/common/mem.h`                      |
|     <0.1% |             291 |       8 | `ZSTD_buildSeqStore`            | `./lib/compress/zstd_compress.c`          |

##### `ZSTD_compressBlock_doubleFast` (`./lib/compress/zstd_compress_internal.h`)

|         % |    Instructions |   Calls | Callee                          | Location                                  |
| --------: | --------------: | ------: | ------------------------------- | ----------------------------------------- |
| 755733.5% | 153,749,042,904 | 122,214 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_double_fast.c`       |
|    100.0% |      20,344,090 |       8 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_compress_internal.h` |

##### `ZSTD_compressContinue_public` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Callee                            | Location                                  |
| -----: | -----------: | ----: | --------------------------------- | ----------------------------------------- |
| 100.0% |   20,103,424 |     1 | `ZSTD_compressContinue_public`    | `./lib/compress/zstd_compress_internal.h` |
| 100.0% |   20,103,383 |     1 | `ZSTD_compress_frameChunk`        | `./lib/compress/zstd_compress.c`          |
|  95.4% |   19,170,965 |     1 | `pthread_cond_signal@@GLIBC_2.17` | `/usr/lib/aarch64-linux-gnu/libc.so.6`    |
|  <0.1% |           61 |     1 | `ZSTD_writeFrameHeader`           | `./lib/compress/zstd_compress.c`          |
|  <0.1% |           42 |     1 | `pthread_mutex_lock@@GLIBC_2.17`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`    |

##### `ZSTD_compressContinue_public` (`./lib/compress/zstd_compress_internal.h`)

|      % | Instructions | Calls | Callee                         | Location                         |
| -----: | -----------: | ----: | ------------------------------ | -------------------------------- |
| 100.0% |   20,103,393 |     1 | `ZSTD_compressContinue_public` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_compressEnd_public` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Callee                             | Location                                  |
| -----: | -----------: | ----: | ---------------------------------- | ----------------------------------------- |
| 100.0% |   19,170,285 |     1 | `ZSTD_compressEnd_public`          | `./lib/compress/zstd_compress_internal.h` |
|  <0.1% |          334 |     1 | `pthread_mutex_unlock@@GLIBC_2.17` | `/usr/lib/aarch64-linux-gnu/libc.so.6`    |
|  <0.1% |           67 |     1 | `ZSTD_XXH64_digest`                | `./lib/common/xxhash.h`                   |
|  <0.1% |           42 |     1 | `pthread_mutex_lock@@GLIBC_2.17`   | `/usr/lib/aarch64-linux-gnu/libc.so.6`    |
|  <0.1% |           14 |     1 | `ZSTD_CCtx_trace`                  | `./lib/compress/zstd_compress.c`          |

##### `ZSTD_compressEnd_public` (`./lib/compress/zstd_compress_internal.h`)

|      % | Instructions | Calls | Callee                     | Location                         |
| -----: | -----------: | ----: | -------------------------- | -------------------------------- |
| 100.0% |   19,170,267 |     1 | `ZSTD_compress_frameChunk` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_encodeSequences` (`./lib/compress/zstd_compress_sequences.c`)

|      % | Instructions | Calls | Callee                        | Location                         |
| -----: | -----------: | ----: | ----------------------------- | -------------------------------- |
| 100.0% |   12,118,460 |     8 | `ZSTD_encodeSequences`        | `./lib/common/mem.h`             |
|  <0.1% |           88 |     8 | `ZSTD_compressBlock_internal` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_encodeSequences` (`./lib/common/mem.h`)

|      % | Instructions | Calls | Callee                 | Location                   |
| -----: | -----------: | ----: | ---------------------- | -------------------------- |
| 100.0% |   12,117,580 |     8 | `ZSTD_encodeSequences` | `./lib/common/bitstream.h` |

##### `ZSTD_encodeSequences` (`./lib/common/bitstream.h`)

|      % | Instructions | Calls | Callee                 | Location                   |
| -----: | -----------: | ----: | ---------------------- | -------------------------- |
| 100.0% |   12,116,788 |     8 | `ZSTD_encodeSequences` | `./lib/common/bitstream.h` |

##### `ZSTD_buildSequencesStatistics` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Callee                 | Location                                   |
| -----: | -----------: | ----: | ---------------------- | ------------------------------------------ |
| 267.5% |   12,119,804 |     8 | `ZSTD_encodeSequences` | `./lib/compress/zstd_compress_sequences.c` |
|  57.3% |    2,594,477 |     8 | `ZSTD_seqToCodes`      | `./lib/compress/zstd_compress.c`           |
|  42.7% |    1,935,918 |     8 | `HIST_countFast_wksp`  | `./lib/compress/hist.c`                    |

##### `HIST_count_parallel_wksp` (`./lib/compress/hist.c`)

|     % | Instructions | Calls | Callee                  | Location                                   |
| ----: | -----------: | ----: | ----------------------- | ------------------------------------------ |
| 78.1% |    2,207,086 |    24 | `ZSTD_buildCTable`      | `./lib/compress/zstd_compress_sequences.c` |
| 15.5% |      438,820 |     7 | `HUF_compress_internal` | `./lib/compress/huf_compress.c`            |
|  5.4% |      153,924 |     1 | `HUF_buildCTable_wksp`  | `./lib/compress/huf_compress.c`            |
|  0.4% |       10,816 |    32 | `__GI_memset`           | `/usr/lib/aarch64-linux-gnu/libc.so.6`     |
|  0.1% |        1,734 |    31 | `__GI_memmove`          | `/usr/lib/aarch64-linux-gnu/libc.so.6`     |

##### `ZSTD_seqToCodes` (`./lib/compress/zstd_compress.c`)

|     % | Instructions | Calls | Callee            | Location                                  |
| ----: | -----------: | ----: | ----------------- | ----------------------------------------- |
| 52.8% |    1,370,003 |     8 | `ZSTD_seqToCodes` | `./lib/compress/zstd_compress_internal.h` |

##### `HIST_countFast_wksp` (`./lib/compress/hist.c`)

|      % | Instructions | Calls | Callee                     | Location                |
| -----: | -----------: | ----: | -------------------------- | ----------------------- |
| 200.6% |    3,882,903 |    24 | `HIST_count_parallel_wksp` | `./lib/compress/hist.c` |

##### `ZSTD_buildCTable` (`./lib/compress/zstd_compress_sequences.c`)

|      % | Instructions | Calls | Callee                | Location                        |
| -----: | -----------: | ----: | --------------------- | ------------------------------- |
| 141.4% |    1,947,201 |    16 | `HIST_countFast_wksp` | `./lib/compress/hist.c`         |
|  18.7% |      257,949 |    24 | `FSE_normalizeCount`  | `./lib/compress/fse_compress.c` |
|  <0.1% |          624 |    24 | `FSE_optimalTableLog` | `./lib/common/bits.h`           |

##### `ZSTD_compressLiterals` (`./lib/compress/zstd_compress_literals.c`)

|       % | Instructions | Calls | Callee                        | Location                                  |
| ------: | -----------: | ----: | ----------------------------- | ----------------------------------------- |
| 1864.8% |   16,650,815 |     8 | `ZSTD_compressBlock_internal` | `./lib/compress/zstd_compress.c`          |
|   99.7% |      890,217 |     8 | `ZSTD_compressLiterals`       | `./lib/compress/zstd_compress_literals.c` |
|   99.7% |      889,993 |     8 | `HUF_compress4X_repeat`       | `./lib/compress/huf_compress.c`           |
|    0.2% |        2,096 |     8 | `__GI_memcpy`                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`    |

##### `HUF_compress4X_repeat` (`./lib/compress/huf_compress.c`)

|      % | Instructions | Calls | Callee                  | Location                                  |
| -----: | -----------: | ----: | ----------------------- | ----------------------------------------- |
| 100.0% |      889,585 |     8 | `HUF_compress_internal` | `./lib/compress/huf_compress.c`           |
|  <0.1% |           72 |     8 | `ZSTD_compressLiterals` | `./lib/compress/zstd_compress_literals.c` |

##### `(below main)` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Callee      | Location                                           |
| -----: | -----------: | ----: | ----------- | -------------------------------------------------- |
| 100.0% |      363,750 |     1 | `_dl_start` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `_dl_start` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Callee                     | Location                                           |
| -----: | -----------: | ----: | -------------------------- | -------------------------------------------------- |
| 118.8% |      432,172 |     5 | `_dl_start`                | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  76.1% |      276,932 |     1 | `_dl_init`                 | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  23.7% |       86,058 |     1 | `_dl_sysdep_start`         | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  <0.1% |           24 |     1 | `_dl_setup_hash`           | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  <0.1% |           14 |     1 | `__rtld_malloc_init_stubs` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `_dl_runtime_resolve` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|     % | Instructions | Calls | Callee                             | Location                                           |
| ----: | -----------: | ----: | ---------------------------------- | -------------------------------------------------- |
| 97.1% |      275,200 |     1 | `__libc_start_main@@GLIBC_2.34`    | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| 10.6% |       30,048 |    49 | `_dl_fixup`                        | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  5.8% |       16,390 |     1 | `__GI_memcpy`                      | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  3.7% |       10,484 |     1 | `pthread_mutex_init@@GLIBC_2.17`   | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  1.8% |        5,161 |     1 | `pthread_mutex_unlock@@GLIBC_2.17` | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |

##### `_dl_init` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|     % | Instructions | Calls | Callee         | Location                                           |
| ----: | -----------: | ----: | -------------- | -------------------------------------------------- |
| 99.6% |      275,909 |     1 | `(below main)` | `./programs/zstd`                                  |
|  0.7% |        1,909 |     2 | `call_init`    | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `__libc_start_main@@GLIBC_2.34` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % | Instructions | Calls | Callee                | Location                                           |
| -----: | -----------: | ----: | --------------------- | -------------------------------------------------- |
| 100.0% |      275,184 |     1 | `__cxa_atexit`        | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  99.7% |      274,303 |     1 | `(below main)`        | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|   0.3% |          716 |     1 | `_dl_runtime_resolve` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  <0.1% |           11 |     1 | `0x0000000000008890`  | `./programs/zstd`                                  |

##### `__cxa_atexit` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % | Instructions | Calls | Callee              | Location                               |
| -----: | -----------: | ----: | ------------------- | -------------------------------------- |
| 100.0% |      275,181 |     1 | `__internal_atexit` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__internal_atexit` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % | Instructions | Calls | Callee                          | Location                               |
| -----: | -----------: | ----: | ------------------------------- | -------------------------------------- |
| 100.0% |      275,055 |     1 | `__libc_start_main@@GLIBC_2.34` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  <0.1% |           58 |     1 | `__new_exitfn`                  | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  <0.1% |           10 |     1 | `0x000000000010c580`            | `<unknown>`                            |
|  <0.1% |            6 |     1 | `__aarch64_cas4_acq`            | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `(below main)` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % | Instructions | Calls | Callee    | Location                               |
| -----: | -----------: | ----: | --------- | -------------------------------------- |
| 100.0% |      274,240 |     1 | `main`    | `./programs/zstdcli.c`                 |
|  <0.1% |           34 |     1 | `_setjmp` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_dl_sysdep_start` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|     % | Instructions | Calls | Callee                       | Location                                           |
| ----: | -----------: | ----: | ---------------------------- | -------------------------------------------------- |
| 99.7% |       85,773 |     1 | `__GI___tunables_init`       | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 93.9% |       80,837 |     1 | `dl_main`                    | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.3% |          260 |     1 | `_dl_sysdep_parse_arguments` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |           34 |     1 | `__GI___tunable_set_val`     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |           15 |     1 | `sbrk`                       | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `__GI___tunables_init` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|     % | Instructions | Calls | Callee                 | Location                                           |
| ----: | -----------: | ----: | ---------------------- | -------------------------------------------------- |
| 94.4% |       80,938 |     1 | `_dl_sysdep_start`     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 70.7% |       60,654 |    24 | `__GI___tunables_init` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.1% |           46 |     2 | `__tunable_get_val`    | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |           36 |     1 | `_dl_sort_maps_init`   | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |            9 |     1 | `brk`                  | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `dl_main` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Callee                | Location                                           |
| -----: | -----------: | ----: | --------------------- | -------------------------------------------------- |
| 395.4% |      319,609 |     4 | `dl_main`             | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  99.6% |       80,481 |     1 | `_dl_new_object`      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  98.3% |       79,458 |     1 | `_dl_init_paths`      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  95.5% |       77,162 |     1 | `handle_preload_list` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  92.2% |       74,572 |     1 | `_dl_map_object_deps` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `malloc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % | Instructions | Calls | Callee                    | Location                               |
| ----: | -----------: | ----: | ------------------------- | -------------------------------------- |
| 95.9% |       61,790 |     1 | `ZSTD_resetCCtx_internal` | `./lib/compress/zstd_cwksp.h`          |
| 30.8% |       19,814 |     2 | `AIO_IOPool_init`         | `./programs/fileio_asyncio.c`          |
| 20.0% |       12,892 |    56 | `_int_malloc`             | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  3.2% |        2,041 |     2 | `tcache_init.part.0`      | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  2.6% |        1,680 |     1 | `ptmalloc_init.part.0`    | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `do_lookup_x` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|     % | Instructions | Calls | Callee                | Location                                           |
| ----: | -----------: | ----: | --------------------- | -------------------------------------------------- |
| 91.1% |       44,129 |   257 | `do_lookup_x`         | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 34.7% |       16,786 |   127 | `check_match`         | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.2% |           82 |     8 | `_dl_lookup_symbol_x` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `_dl_fixup` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|     % | Instructions | Calls | Callee                | Location                                           |
| ----: | -----------: | ----: | --------------------- | -------------------------------------------------- |
| 88.1% |       26,478 |    49 | `_dl_lookup_symbol_x` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 54.4% |       16,348 |    30 | `_dl_fixup`           | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `_dl_lookup_symbol_x` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Callee                | Location                                           |
| -----: | -----------: | ----: | --------------------- | -------------------------------------------------- |
| 458.9% |      102,624 |    10 | `_dl_relocate_object` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 216.9% |       48,510 |   132 | `do_lookup_x`         | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 149.4% |       33,412 |    60 | `_dl_lookup_symbol_x` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   2.0% |          457 |    49 | `_dl_fixup`           | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   0.8% |          180 |    30 | `__aarch64_swp4_rel`  | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `_int_malloc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % | Instructions | Calls | Callee               | Location                               |
| ----: | -----------: | ----: | -------------------- | -------------------------------------- |
| 67.9% |       11,665 |    81 | `_int_malloc`        | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| 23.6% |        4,058 |    25 | `sysmalloc`          | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  2.4% |          420 |    70 | `__aarch64_swp4_rel` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  1.9% |          324 |    81 | `alloc_perturb`      | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  1.7% |          297 |    21 | `calloc`             | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_dl_relocate_object` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|       % | Instructions | Calls | Callee                  | Location                                           |
| ------: | -----------: | ----: | ----------------------- | -------------------------------------------------- |
| 1544.3% |      246,710 |    19 | `_dl_relocate_object`   | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  910.9% |      145,526 |    10 | `_dl_lookup_symbol_x`   | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  129.9% |       20,748 |     1 | `_dl_add_to_slotinfo`   | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   57.9% |        9,247 |     1 | `_dl_allocate_tls_init` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|    7.6% |        1,217 |     1 | `dl_main`               | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `check_match` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|     % | Instructions | Calls | Callee        | Location                                           |
| ----: | -----------: | ----: | ------------- | -------------------------------------------------- |
| 64.5% |       10,268 |   198 | `strcmp`      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  3.2% |          506 |     2 | `do_lookup_x` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.1% |           10 |     2 | `check_match` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

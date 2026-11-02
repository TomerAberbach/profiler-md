# Instruction profile

Recorded 39,557,650 instructions.

| Category |     % | Instructions |
| -------- | ----: | -----------: |
| Ours     | 98.8% |   39,096,811 |
| Native   |  1.2% |      460,839 |

Paths starting with `./` or `../` are relative to `/src/zstd/`.

## Hottest functions

### Self instructions

Functions with the most instructions recorded within the function body, excluding callees.

|     % | Instructions | Function                                          | Location                                           |
| ----: | -----------: | ------------------------------------------------- | -------------------------------------------------- |
| 30.6% |   12,117,184 | `ZSTD_encodeSequences`                            | `./lib/common/bitstream.h`                         |
| 29.6% |   11,716,441 | `ZSTD_compressBlock_doubleFast`                   | `./lib/compress/zstd_double_fast.c`                |
| 21.0% |    8,326,805 | `ZSTD_compressBlock_doubleFast`                   | `./lib/compress/zstd_compress_internal.h`          |
|  5.0% |    1,959,721 | `HIST_count_parallel_wksp`                        | `./lib/compress/hist.c`                            |
|  3.8% |    1,507,463 | `ZSTD_XXH64_update`                               | `./lib/common/xxhash.h`                            |
|  3.5% |    1,370,282 | `ZSTD_seqToCodes`                                 | `./lib/compress/zstd_compress_internal.h`          |
|  3.1% |    1,224,426 | `ZSTD_seqToCodes`                                 | `./lib/compress/zstd_compress.c`                   |
|  1.1% |      428,664 | `HUF_compress1X_usingCTable_internal.constprop.0` | `./lib/compress/huf_compress.c`                    |
|  0.6% |      224,938 | `FSE_buildCTable_wksp`                            | `./lib/compress/fse_compress.c`                    |
|  0.5% |      183,023 | `__GI_memcpy`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.2% |       98,005 | `HUF_buildCTable_wksp`                            | `./lib/compress/huf_compress.c`                    |
|  0.2% |       76,590 | `__GI_memset`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.1% |       32,148 | `do_lookup_x`                                     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.1% |       24,175 | `FSE_writeNCount_generic`                         | `./lib/compress/fse_compress.c`                    |
|  0.1% |       22,361 | `_dl_lookup_symbol_x`                             | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |       19,193 | `FSE_compress_usingCTable_generic`                | `./lib/compress/fse_compress.c`                    |
| <0.1% |       16,343 | `FSE_normalizeCount`                              | `./lib/compress/fse_compress.c`                    |
| <0.1% |       15,934 | `_dl_relocate_object`                             | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |       13,490 | `HUF_writeCTable_wksp`                            | `./lib/compress/huf_compress.c`                    |
| <0.1% |       12,385 | `_int_malloc`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |

#### Categories

Categories accounting for at least 1.0% of self instructions.

##### Ours

|     % | Instructions | Function                                          | Location                                   |
| ----: | -----------: | ------------------------------------------------- | ------------------------------------------ |
| 30.6% |   12,117,184 | `ZSTD_encodeSequences`                            | `./lib/common/bitstream.h`                 |
| 29.6% |   11,716,441 | `ZSTD_compressBlock_doubleFast`                   | `./lib/compress/zstd_double_fast.c`        |
| 21.0% |    8,326,805 | `ZSTD_compressBlock_doubleFast`                   | `./lib/compress/zstd_compress_internal.h`  |
|  5.0% |    1,959,721 | `HIST_count_parallel_wksp`                        | `./lib/compress/hist.c`                    |
|  3.8% |    1,507,463 | `ZSTD_XXH64_update`                               | `./lib/common/xxhash.h`                    |
|  3.5% |    1,370,282 | `ZSTD_seqToCodes`                                 | `./lib/compress/zstd_compress_internal.h`  |
|  3.1% |    1,224,426 | `ZSTD_seqToCodes`                                 | `./lib/compress/zstd_compress.c`           |
|  1.1% |      428,664 | `HUF_compress1X_usingCTable_internal.constprop.0` | `./lib/compress/huf_compress.c`            |
|  0.6% |      224,938 | `FSE_buildCTable_wksp`                            | `./lib/compress/fse_compress.c`            |
|  0.2% |       98,005 | `HUF_buildCTable_wksp`                            | `./lib/compress/huf_compress.c`            |
|  0.1% |       24,175 | `FSE_writeNCount_generic`                         | `./lib/compress/fse_compress.c`            |
| <0.1% |       19,193 | `FSE_compress_usingCTable_generic`                | `./lib/compress/fse_compress.c`            |
| <0.1% |       16,343 | `FSE_normalizeCount`                              | `./lib/compress/fse_compress.c`            |
| <0.1% |       13,490 | `HUF_writeCTable_wksp`                            | `./lib/compress/huf_compress.c`            |
| <0.1% |        9,792 | `HUF_simpleQuickSort`                             | `./lib/compress/huf_compress.c`            |
| <0.1% |        6,866 | `HIST_count_simple`                               | `./lib/compress/hist.c`                    |
| <0.1% |        5,152 | `FSE_buildCTable_wksp`                            | `./lib/common/mem.h`                       |
| <0.1% |        1,557 | `ZSTDMT_compressStream_generic`                   | `./lib/compress/zstdmt_compress.c`         |
| <0.1% |        1,432 | `ZSTD_buildCTable`                                | `./lib/compress/zstd_compress_sequences.c` |
| <0.1% |        1,257 | `ZSTD_buildSeqStore`                              | `./lib/compress/zstd_compress.c`           |

##### Native

|     % | Instructions | Function                          | Location                                           |
| ----: | -----------: | --------------------------------- | -------------------------------------------------- |
|  0.5% |      183,023 | `__GI_memcpy`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.2% |       76,590 | `__GI_memset`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.1% |       32,148 | `do_lookup_x`                     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.1% |       22,361 | `_dl_lookup_symbol_x`             | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |       15,934 | `_dl_relocate_object`             | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |       12,385 | `_int_malloc`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |       11,492 | `strcmp`                          | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |        8,444 | `__pthread_mutex_unlock_usercnt`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |        6,584 | `check_match`                     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |        6,442 | `pthread_mutex_lock@@GLIBC_2.17`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |        5,199 | `_int_free`                       | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |        4,744 | `__GI___tunables_init`            | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |        4,412 | `pthread_cond_signal@@GLIBC_2.17` | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |        4,027 | `_dl_fixup`                       | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |        3,399 | `malloc`                          | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |        3,278 | `free`                            | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |        2,850 | `__aarch64_cas4_acq`              | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |        2,391 | `calloc`                          | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |        1,938 | `__aarch64_swp4_rel`              | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |        1,872 | `__GI_memmove`                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |

#### Lines

Lines with the largest contribution to each function's self instructions.

##### `ZSTD_encodeSequences` (`./lib/common/bitstream.h`)

|     % | Instructions | Location                       |
| ----: | -----------: | ------------------------------ |
| 18.2% |    2,203,122 | `./lib/common/bitstream.h:172` |
| 11.1% |    1,346,327 | `./lib/common/bitstream.h:185` |
|  6.1% |      734,358 | `./lib/common/bitstream.h:186` |
|  3.0% |      367,243 | `./lib/common/bitstream.h:229` |
|  1.0% |      122,438 | `./lib/common/bitstream.h:226` |

##### `ZSTD_compressBlock_doubleFast` (`./lib/compress/zstd_double_fast.c`)

|    % | Instructions | Location                                |
| ---: | -----------: | --------------------------------------- |
| 6.3% |      733,310 | `./lib/compress/zstd_double_fast.c:298` |
| 4.2% |      488,664 | `./lib/compress/zstd_double_fast.c:173` |
| 3.5% |      410,026 | `./lib/compress/zstd_double_fast.c:259` |
| 3.1% |      366,512 | `./lib/compress/zstd_double_fast.c:185` |
| 3.0% |      350,067 | `./lib/compress/zstd_double_fast.c:278` |

##### `ZSTD_compressBlock_doubleFast` (`./lib/compress/zstd_compress_internal.h`)

|    % | Instructions | Location                                      |
| ---: | -----------: | --------------------------------------------- |
| 5.7% |      471,471 | `./lib/compress/zstd_compress_internal.h:756` |
| 4.4% |      367,878 | `./lib/compress/zstd_compress_internal.h:804` |
| 4.4% |      367,386 | `./lib/compress/zstd_compress_internal.h:819` |
| 2.9% |      244,346 | `./lib/compress/zstd_compress_internal.h:754` |
| 2.3% |      188,952 | `./lib/compress/zstd_compress_internal.h:752` |

##### `HIST_count_parallel_wksp` (`./lib/compress/hist.c`)

|     % | Instructions | Location                   |
| ----: | -----------: | -------------------------- |
| 99.8% |    1,955,857 | `./lib/compress/hist.c:88` |
| <0.1% |          160 | `./lib/compress/hist.c:71` |
| <0.1% |           96 | `./lib/compress/hist.c:74` |
| <0.1% |           64 | `./lib/compress/hist.c:83` |

##### `ZSTD_XXH64_update` (`./lib/common/xxhash.h`)

|     % | Instructions | Location                     |
| ----: | -----------: | ---------------------------- |
| 34.8% |      524,300 | `./lib/common/xxhash.h:3329` |
| 17.4% |      262,159 | `./lib/common/xxhash.h:3331` |
| 17.4% |      262,144 | `./lib/common/xxhash.h:3330` |
|  8.7% |      131,081 | `./lib/common/xxhash.h:3559` |
|  8.7% |      131,081 | `./lib/common/xxhash.h:3560` |

##### `ZSTD_seqToCodes` (`./lib/compress/zstd_compress_internal.h`)

|     % | Instructions | Location                                      |
| ----: | -----------: | --------------------------------------------- |
| 17.9% |      244,856 | `./lib/compress/zstd_compress_internal.h:545` |

##### `ZSTD_seqToCodes` (`./lib/compress/zstd_compress.c`)

|     % | Instructions | Location                              |
| ----: | -----------: | ------------------------------------- |
| 30.0% |      367,511 | `./lib/compress/zstd_compress.c:2691` |
| 20.0% |      244,810 | `./lib/compress/zstd_compress.c:2692` |
| 20.0% |      244,808 | `./lib/compress/zstd_compress.c:2695` |
| <0.1% |           32 | `./lib/compress/zstd_compress.c:2687` |
| <0.1% |            8 | `./lib/compress/zstd_compress.c:2686` |

##### `HUF_compress1X_usingCTable_internal.constprop.0` (`./lib/compress/huf_compress.c`)

|     % | Instructions | Location                            |
| ----: | -----------: | ----------------------------------- |
| 29.6% |      127,056 | `./lib/compress/huf_compress.c:987` |
| 13.3% |       57,219 | `./lib/compress/huf_compress.c:891` |
| 13.3% |       57,187 | `./lib/compress/huf_compress.c:886` |
| 11.9% |       50,847 | `./lib/compress/huf_compress.c:887` |
|  6.0% |       25,538 | `./lib/compress/huf_compress.c:943` |

##### `FSE_buildCTable_wksp` (`./lib/compress/fse_compress.c`)

|     % | Instructions | Location                            |
| ----: | -----------: | ----------------------------------- |
| 36.4% |       81,944 | `./lib/compress/fse_compress.c:172` |
| 14.3% |       32,108 | `./lib/compress/fse_compress.c:160` |
| 13.7% |       30,816 | `./lib/compress/fse_compress.c:170` |
|  9.2% |       20,730 | `./lib/compress/fse_compress.c:163` |
|  8.9% |       19,980 | `./lib/compress/fse_compress.c:162` |

##### `HUF_buildCTable_wksp` (`./lib/compress/huf_compress.c`)

|    % | Instructions | Location                            |
| ---: | -----------: | ----------------------------------- |
| 6.3% |        6,178 | `./lib/compress/huf_compress.c:533` |
| 6.2% |        6,112 | `./lib/compress/huf_compress.c:640` |
| 5.4% |        5,336 | `./lib/compress/huf_compress.c:702` |
| 5.4% |        5,305 | `./lib/compress/huf_compress.c:701` |
| 5.2% |        5,135 | `./lib/compress/huf_compress.c:648` |

##### `FSE_writeNCount_generic` (`./lib/compress/fse_compress.c`)

|     % | Instructions | Location                            |
| ----: | -----------: | ----------------------------------- |
| 10.5% |        2,527 | `./lib/compress/fse_compress.c:302` |
|  8.6% |        2,082 | `./lib/compress/fse_compress.c:260` |
|  8.2% |        1,986 | `./lib/compress/fse_compress.c:293` |
|  8.2% |        1,986 | `./lib/compress/fse_compress.c:296` |
|  8.2% |        1,986 | `./lib/compress/fse_compress.c:299` |

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
| 25.4% |        4,146 | `./lib/compress/fse_compress.c:487` |
| 12.9% |        2,105 | `./lib/compress/fse_compress.c:486` |
| 12.7% |        2,073 | `./lib/compress/fse_compress.c:488` |
|  7.6% |        1,244 | `./lib/compress/fse_compress.c:489` |
|  6.7% |        1,095 | `./lib/compress/fse_compress.c:498` |

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
| 17.0% |        1,665 | `./lib/compress/huf_compress.c:691` |
| 15.5% |        1,514 | `./lib/compress/huf_compress.c:696` |
| 10.9% |        1,072 | `./lib/compress/huf_compress.c:559` |
|  6.0% |          591 | `./lib/compress/huf_compress.c:562` |
|  5.3% |          515 | `./lib/compress/huf_compress.c:655` |

##### `HIST_count_simple` (`./lib/compress/hist.c`)

|     % | Instructions | Location                   |
| ----: | -----------: | -------------------------- |
| 96.7% |        6,642 | `./lib/compress/hist.c:37` |
|  1.0% |           72 | `./lib/compress/hist.c:31` |
|  0.1% |            8 | `./lib/compress/hist.c:34` |

##### `FSE_buildCTable_wksp` (`./lib/common/mem.h`)

|    % | Instructions | Location                 |
| ---: | -----------: | ------------------------ |
| 1.6% |           80 | `./lib/common/mem.h:190` |

##### `ZSTDMT_compressStream_generic` (`./lib/compress/zstdmt_compress.c`)

|     % | Instructions | Location                                |
| ----: | -----------: | --------------------------------------- |
| 31.1% |          485 | `./lib/compress/zstdmt_compress.c:1850` |
|  6.5% |          101 | `./lib/compress/zstdmt_compress.c:1459` |
|  4.9% |           77 | `./lib/compress/zstdmt_compress.c:1816` |
|  4.9% |           77 | `./lib/compress/zstdmt_compress.c:1823` |
|  3.5% |           55 | `./lib/compress/zstdmt_compress.c:1830` |

##### `ZSTD_buildCTable` (`./lib/compress/zstd_compress_sequences.c`)

|     % | Instructions | Location                                       |
| ----: | -----------: | ---------------------------------------------- |
| 16.8% |          240 | `./lib/compress/zstd_compress_sequences.c:250` |
| 11.7% |          168 | `./lib/compress/zstd_compress_sequences.c:270` |
| 11.7% |          168 | `./lib/compress/zstd_compress_sequences.c:278` |
| 10.1% |          144 | `./lib/compress/zstd_compress_sequences.c:271` |
|  8.4% |          120 | `./lib/compress/zstd_compress_sequences.c:288` |

##### `ZSTD_buildSeqStore` (`./lib/compress/zstd_compress.c`)

|     % | Instructions | Location                              |
| ----: | -----------: | ------------------------------------- |
| 12.1% |          152 | `./lib/compress/zstd_compress.c:3123` |
|  9.5% |          120 | `./lib/compress/zstd_compress.c:2916` |
|  5.1% |           64 | `./lib/compress/zstd_compress.c:3114` |
|  4.5% |           56 | `./lib/compress/zstd_compress.c:3203` |
|  3.9% |           49 | `./lib/compress/zstd_compress.c:3235` |

### Total instructions

Functions with the most instructions recorded within the function and its callees, excluding recursive calls.

#### Categories

Categories accounting for at least 1.0% of self instructions.

##### Ours

|     % | Instructions | Function                        | Location                                   |
| ----: | -----------: | ------------------------------- | ------------------------------------------ |
| 96.9% |   38,347,827 | `ZSTD_compress_frameChunk`      | `./lib/compress/zstd_compress.c`           |
| 50.7% |   20,044,985 | `ZSTD_buildSeqStore`            | `./lib/compress/zstd_compress.c`           |
| 50.7% |   20,043,888 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_double_fast.c`        |
| 50.7% |   20,043,157 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_compress_internal.h`  |
| 49.8% |   19,696,431 | `ZSTD_compressContinue_public`  | `./lib/compress/zstd_compress.c`           |
| 49.8% |   19,696,318 | `ZSTD_compressContinue_public`  | `./lib/compress/zstd_compress_internal.h`  |
| 47.2% |   18,651,635 | `ZSTD_compressEnd_public`       | `./lib/compress/zstd_compress.c`           |
| 47.2% |   18,651,568 | `ZSTD_compressEnd_public`       | `./lib/compress/zstd_compress_internal.h`  |
| 30.6% |   12,119,320 | `ZSTD_encodeSequences`          | `./lib/compress/zstd_compress_sequences.c` |
| 30.6% |   12,118,064 | `ZSTD_encodeSequences`          | `./lib/common/mem.h`                       |
| 30.6% |   12,117,184 | `ZSTD_encodeSequences`          | `./lib/common/bitstream.h`                 |
| 11.5% |    4,530,626 | `ZSTD_buildSequencesStatistics` | `./lib/compress/zstd_compress.c`           |
|  7.2% |    2,829,254 | `HIST_count_parallel_wksp`      | `./lib/compress/hist.c`                    |
|  6.6% |    2,594,708 | `ZSTD_seqToCodes`               | `./lib/compress/zstd_compress.c`           |
|  4.9% |    1,935,430 | `HIST_countFast_wksp`           | `./lib/compress/hist.c`                    |
|  3.8% |    1,507,463 | `ZSTD_XXH64_update`             | `./lib/common/xxhash.h`                    |
|  3.5% |    1,376,670 | `ZSTD_buildCTable`              | `./lib/compress/zstd_compress_sequences.c` |
|  3.5% |    1,370,282 | `ZSTD_seqToCodes`               | `./lib/compress/zstd_compress_internal.h`  |
|  2.3% |      897,920 | `ZSTD_compressLiterals`         | `./lib/compress/zstd_compress_literals.c`  |
|  2.3% |      894,944 | `HUF_compress4X_repeat`         | `./lib/compress/huf_compress.c`            |

##### Native

|     % | Instructions | Function                        | Location                                           |
| ----: | -----------: | ------------------------------- | -------------------------------------------------- |
|  0.9% |      363,941 | `(below main)`                  | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.9% |      363,936 | `_dl_start`                     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.7% |      283,536 | `_dl_runtime_resolve`           | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.7% |      277,173 | `_dl_init`                      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.7% |      275,441 | `__libc_start_main@@GLIBC_2.34` | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.7% |      275,425 | `__cxa_atexit`                  | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.7% |      275,422 | `__internal_atexit`             | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.7% |      274,544 | `(below main)`                  | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.5% |      183,023 | `__GI_memcpy`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.2% |       86,003 | `_dl_sysdep_start`              | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.2% |       85,718 | `__GI___tunables_init`          | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.2% |       80,782 | `dl_main`                       | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.2% |       76,590 | `__GI_memset`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.2% |       64,415 | `malloc`                        | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  0.1% |       48,428 | `do_lookup_x`                   | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.1% |       30,048 | `_dl_fixup`                     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.1% |       22,361 | `_dl_lookup_symbol_x`           | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |       17,173 | `_int_malloc`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |       15,934 | `_dl_relocate_object`           | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |       15,912 | `check_match`                   | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

#### Callers

Callers with the largest contribution to each function's total instructions. Inlining can make caller attribution imprecise, and for recursive calls, values and percentages can exceed the profile's total.

##### `ZSTD_compress_frameChunk` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                         | Location                                  |
| -----: | -----------: | ----: | ------------------------------ | ----------------------------------------- |
| 144.1% |   55,245,537 |     8 | `ZSTD_compressBlock_internal`  | `./lib/compress/zstd_compress.c`          |
|  98.0% |   37,593,868 |     2 | `ZSTD_compress_frameChunk`     | `./lib/compress/zstd_compress.c`          |
|  51.4% |   19,696,277 |     1 | `ZSTD_compressContinue_public` | `./lib/compress/zstd_compress.c`          |
|  48.6% |   18,651,550 |     1 | `ZSTD_compressEnd_public`      | `./lib/compress/zstd_compress_internal.h` |

##### `ZSTD_buildSeqStore` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                          | Location                            |
| -----: | -----------: | ----: | ------------------------------- | ----------------------------------- |
| 187.5% |   37,593,067 |     8 | `ZSTD_compressBlock_internal`   | `./lib/compress/zstd_compress.c`    |
|  <0.1% |          291 |     8 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_double_fast.c` |

##### `ZSTD_compressBlock_doubleFast` (`./lib/compress/zstd_double_fast.c`)

|         % |    Instructions |   Calls | Caller                          | Location                                  |
| --------: | --------------: | ------: | ------------------------------- | ----------------------------------------- |
| 755503.0% | 151,432,182,725 | 122,208 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_compress_internal.h` |
|    100.0% |      20,043,888 |       8 | `ZSTD_buildSeqStore`            | `./lib/compress/zstd_compress.c`          |
|     62.5% |      12,527,271 |       9 | `ZSTD_compressBlock_doubleFast` | `./lib/common/mem.h`                      |

##### `ZSTD_compressBlock_doubleFast` (`./lib/compress/zstd_compress_internal.h`)

|         % |    Instructions |   Calls | Caller                          | Location                                  |
| --------: | --------------: | ------: | ------------------------------- | ----------------------------------------- |
| 755572.1% | 151,440,509,530 | 122,209 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_double_fast.c`       |
|    100.0% |      20,042,901 |       8 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_compress_internal.h` |

##### `ZSTD_compressContinue_public` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                         | Location                                  |
| -----: | -----------: | ----: | ------------------------------ | ----------------------------------------- |
| 194.7% |   38,348,721 |     1 | `ZSTDMT_compressionJob`        | `./lib/compress/zstdmt_compress.c`        |
| 100.0% |   19,696,287 |     1 | `ZSTD_compressContinue_public` | `./lib/compress/zstd_compress_internal.h` |

##### `ZSTD_compressContinue_public` (`./lib/compress/zstd_compress_internal.h`)

|      % | Instructions | Calls | Caller                         | Location                         |
| -----: | -----------: | ----: | ------------------------------ | -------------------------------- |
| 100.0% |   19,696,318 |     1 | `ZSTD_compressContinue_public` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_compressEnd_public` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                           | Location                               |
| -----: | -----------: | ----: | -------------------------------- | -------------------------------------- |
| 100.0% |   18,652,011 |     1 | `__pthread_mutex_unlock_usercnt` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  <0.1% |           97 |     1 | `ZSTD_compress_frameChunk`       | `./lib/compress/zstd_compress.c`       |

##### `ZSTD_compressEnd_public` (`./lib/compress/zstd_compress_internal.h`)

|      % | Instructions | Calls | Caller                    | Location                         |
| -----: | -----------: | ----: | ------------------------- | -------------------------------- |
| 100.0% |   18,651,568 |     1 | `ZSTD_compressEnd_public` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_encodeSequences` (`./lib/compress/zstd_compress_sequences.c`)

|      % | Instructions | Calls | Caller                          | Location                         |
| -----: | -----------: | ----: | ------------------------------- | -------------------------------- |
| 100.0% |   12,119,408 |     8 | `ZSTD_buildSequencesStatistics` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_encodeSequences` (`./lib/common/mem.h`)

|      % | Instructions | Calls | Caller                 | Location                                   |
| -----: | -----------: | ----: | ---------------------- | ------------------------------------------ |
| 100.0% |   12,118,064 |     8 | `ZSTD_encodeSequences` | `./lib/compress/zstd_compress_sequences.c` |

##### `ZSTD_encodeSequences` (`./lib/common/bitstream.h`)

|      % | Instructions | Calls | Caller                 | Location                   |
| -----: | -----------: | ----: | ---------------------- | -------------------------- |
| 100.0% |   12,117,184 |     8 | `ZSTD_encodeSequences` | `./lib/common/mem.h`       |
| 100.0% |   12,116,392 |     8 | `ZSTD_encodeSequences` | `./lib/common/bitstream.h` |

##### `ZSTD_buildSequencesStatistics` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                        | Location                         |
| -----: | -----------: | ----: | ----------------------------- | -------------------------------- |
| 367.5% |   16,650,034 |     8 | `ZSTD_compressBlock_internal` | `./lib/compress/zstd_compress.c` |

##### `HIST_count_parallel_wksp` (`./lib/compress/hist.c`)

|      % | Instructions | Calls | Caller                | Location                |
| -----: | -----------: | ----: | --------------------- | ----------------------- |
| 137.2% |    3,881,646 |    24 | `HIST_countFast_wksp` | `./lib/compress/hist.c` |
|  31.6% |      893,896 |     8 | `HIST_count_wksp`     | `./lib/compress/hist.c` |

##### `ZSTD_seqToCodes` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                          | Location                         |
| -----: | -----------: | ----: | ------------------------------- | -------------------------------- |
| 100.0% |    2,594,708 |     8 | `ZSTD_buildSequencesStatistics` | `./lib/compress/zstd_compress.c` |

##### `HIST_countFast_wksp` (`./lib/compress/hist.c`)

|      % | Instructions | Calls | Caller                          | Location                                   |
| -----: | -----------: | ----: | ------------------------------- | ------------------------------------------ |
| 100.6% |    1,946,432 |    16 | `ZSTD_buildCTable`              | `./lib/compress/zstd_compress_sequences.c` |
| 100.0% |    1,935,430 |     8 | `ZSTD_buildSequencesStatistics` | `./lib/compress/zstd_compress.c`           |

##### `ZSTD_XXH64_update` (`./lib/common/xxhash.h`)

|       % | Instructions | Calls | Caller                                 | Location                         |
| ------: | -----------: | ----: | -------------------------------------- | -------------------------------- |
| 2594.0% |   39,103,207 |     1 | `ZSTD_compressBegin_advanced_internal` | `./lib/compress/zstd_compress.c` |
|   50.0% |      753,754 |     2 | `ZSTD_compress_frameChunk`             | `./lib/compress/zstd_compress.c` |

##### `ZSTD_buildCTable` (`./lib/compress/zstd_compress_sequences.c`)

|      % | Instructions | Calls | Caller                     | Location                        |
| -----: | -----------: | ----: | -------------------------- | ------------------------------- |
| 160.2% |    2,205,964 |    24 | `HIST_count_parallel_wksp` | `./lib/compress/hist.c`         |
|  <0.1% |          120 |    24 | `FSE_buildCTable_wksp`     | `./lib/compress/fse_compress.c` |

##### `ZSTD_seqToCodes` (`./lib/compress/zstd_compress_internal.h`)

|      % | Instructions | Calls | Caller            | Location                         |
| -----: | -----------: | ----: | ----------------- | -------------------------------- |
| 100.0% |    1,370,282 |     8 | `ZSTD_seqToCodes` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_compressLiterals` (`./lib/compress/zstd_compress_literals.c`)

|       % | Instructions | Calls | Caller                  | Location                                  |
| ------: | -----------: | ----: | ----------------------- | ----------------------------------------- |
| 1954.3% |   17,548,082 |     8 | `ZSTD_buildSeqStore`    | `./lib/compress/zstd_compress.c`          |
|   99.7% |      895,240 |     8 | `ZSTD_compressLiterals` | `./lib/compress/zstd_compress_literals.c` |
|   <0.1% |           72 |     8 | `HUF_compress4X_repeat` | `./lib/compress/huf_compress.c`           |

##### `HUF_compress4X_repeat` (`./lib/compress/huf_compress.c`)

|      % | Instructions | Calls | Caller                  | Location                                  |
| -----: | -----------: | ----: | ----------------------- | ----------------------------------------- |
| 100.0% |      895,016 |     8 | `ZSTD_compressLiterals` | `./lib/compress/zstd_compress_literals.c` |

##### `_dl_start` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Caller         | Location                                           |
| -----: | -----------: | ----: | -------------- | -------------------------------------------------- |
| 118.7% |      431,897 |     5 | `_dl_start`    | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 100.0% |      363,936 |     1 | `(below main)` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `_dl_runtime_resolve` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|     % | Instructions | Calls | Caller                          | Location                           |
| ----: | -----------: | ----: | ------------------------------- | ---------------------------------- |
| 97.4% |      276,129 |     1 | `(below main)`                  | `./programs/zstd`                  |
|  6.0% |       17,021 |     1 | `ZSTDMT_compressStream_generic` | `./lib/compress/zstdmt_compress.c` |
|  3.9% |       11,145 |     1 | `AIO_IOPool_init`               | `./programs/fileio_asyncio.c`      |
|  2.3% |        6,548 |     2 | `POOL_joinJobs`                 | `./lib/common/pool.c`              |
|  2.0% |        5,590 |     1 | `AIO_WritePool_closeFile`       | `./programs/fileio_asyncio.c`      |

##### `_dl_init` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Caller      | Location                                           |
| -----: | -----------: | ----: | ----------- | -------------------------------------------------- |
| 100.0% |      277,173 |     1 | `_dl_start` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   0.3% |          920 |     1 | `call_init` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `__libc_start_main@@GLIBC_2.34` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % | Instructions | Calls | Caller                | Location                                           |
| -----: | -----------: | ----: | --------------------- | -------------------------------------------------- |
| 100.0% |      275,441 |     1 | `_dl_runtime_resolve` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  99.9% |      275,296 |     1 | `__internal_atexit`   | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |

##### `__cxa_atexit` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % | Instructions | Calls | Caller                          | Location                               |
| -----: | -----------: | ----: | ------------------------------- | -------------------------------------- |
| 100.0% |      275,425 |     1 | `__libc_start_main@@GLIBC_2.34` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__internal_atexit` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % | Instructions | Calls | Caller         | Location                               |
| -----: | -----------: | ----: | -------------- | -------------------------------------- |
| 100.0% |      275,422 |     1 | `__cxa_atexit` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `(below main)` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % | Instructions | Calls | Caller                          | Location                               |
| -----: | -----------: | ----: | ------------------------------- | -------------------------------------- |
| 100.0% |      274,544 |     1 | `__libc_start_main@@GLIBC_2.34` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__GI_memcpy` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % | Instructions | Calls | Caller                          | Location                                           |
| ----: | -----------: | ----: | ------------------------------- | -------------------------------------------------- |
| 88.1% |      161,300 |    10 | `ZSTDMT_compressStream_generic` | `./lib/compress/zstdmt_compress.c`                 |
|  9.0% |       16,390 |     1 | `_dl_runtime_resolve`           | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  1.1% |        2,096 |     8 | `ZSTD_compressLiterals`         | `./lib/compress/zstd_compress_literals.c`          |
|  0.7% |        1,310 |     5 | `HUF_compress_internal`         | `./lib/compress/huf_compress.c`                    |
|  0.5% |          844 |     2 | `_IO_file_xsputn@@GLIBC_2.17`   | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |

##### `_dl_sysdep_start` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Caller                 | Location                                           |
| -----: | -----------: | ----: | ---------------------- | -------------------------------------------------- |
| 100.0% |       86,003 |     1 | `_dl_start`            | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  94.0% |       80,883 |     1 | `__GI___tunables_init` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `__GI___tunables_init` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Caller                 | Location                                           |
| -----: | -----------: | ----: | ---------------------- | -------------------------------------------------- |
| 100.0% |       85,718 |     1 | `_dl_sysdep_start`     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  70.8% |       60,654 |    24 | `__GI___tunables_init` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `dl_main` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Caller                | Location                                           |
| -----: | -----------: | ----: | --------------------- | -------------------------------------------------- |
| 395.4% |      319,389 |     4 | `dl_main`             | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 100.0% |       80,782 |     1 | `_dl_sysdep_start`    | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  99.1% |       80,048 |     1 | `_dl_new_object`      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  95.7% |       77,307 |     1 | `_dl_init_paths`      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  92.3% |       74,581 |     1 | `handle_preload_list` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `__GI_memset` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % | Instructions | Calls | Caller                           | Location                                           |
| ----: | -----------: | ----: | -------------------------------- | -------------------------------------------------- |
| 80.2% |       61,458 |     1 | `ZSTD_resetCCtx_internal`        | `./lib/compress/zstd_cwksp.h`                      |
| 14.1% |       10,816 |    32 | `HIST_count_parallel_wksp`       | `./lib/compress/hist.c`                            |
|  4.3% |        3,328 |    16 | `HUF_buildCTable_wksp`           | `./lib/compress/huf_compress.c`                    |
|  0.6% |          428 |     1 | `_dl_runtime_resolve`            | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.3% |          228 |     1 | `__pthread_mutex_unlock_usercnt` | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |

##### `malloc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % | Instructions | Calls | Caller                                           | Location                                           |
| ----: | -----------: | ----: | ------------------------------------------------ | -------------------------------------------------- |
| 96.5% |       62,152 |     1 | `ZSTD_estimateCCtxSize_usingCCtxParams_internal` | `./lib/compress/zstd_compress.c`                   |
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
| 650.7% |      145,512 |    10 | `_dl_relocate_object`  | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 149.4% |       33,398 |    60 | `_dl_lookup_symbol_x`  | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
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
| 1548.0% |      246,654 |    19 | `_dl_relocate_object`     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  644.0% |      102,610 |    10 | `_dl_lookup_symbol_x`     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  404.0% |       64,370 |     1 | `dl_main`                 | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  129.6% |       20,657 |     1 | `_dl_add_to_slotinfo`     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   32.1% |        5,114 |     1 | `__rtld_malloc_init_real` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `check_match` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Caller              | Location                                           |
| -----: | -----------: | ----: | ------------------- | -------------------------------------------------- |
| 105.5% |       16,786 |   127 | `do_lookup_x`       | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   3.6% |          572 |     3 | `_dl_lookup_direct` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   0.1% |           10 |     2 | `check_match`       | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

#### Callees

Callees with the largest contribution to each function's total instructions. Inlining can make callee attribution imprecise, and for recursive calls, values and percentages can exceed the profile's total.

##### `ZSTD_compress_frameChunk` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Callee                         | Location                         |
| -----: | -----------: | ----: | ------------------------------ | -------------------------------- |
| 242.1% |   92,838,852 |     8 | `ZSTD_compressBlock_internal`  | `./lib/compress/zstd_compress.c` |
|  98.0% |   37,593,868 |     2 | `ZSTD_compress_frameChunk`     | `./lib/compress/zstd_compress.c` |
|   2.0% |      753,754 |     2 | `ZSTD_XXH64_update`            | `./lib/common/xxhash.h`          |
|  <0.1% |           97 |     1 | `ZSTD_compressEnd_public`      | `./lib/compress/zstd_compress.c` |
|  <0.1% |           48 |     8 | `ZSTD_overflowCorrectIfNeeded` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_buildSeqStore` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Callee                          | Location                                  |
| -----: | -----------: | ----: | ------------------------------- | ----------------------------------------- |
| 100.0% |   20,043,888 |     8 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_double_fast.c`       |
|  87.5% |   17,548,082 |     8 | `ZSTD_compressLiterals`         | `./lib/compress/zstd_compress_literals.c` |
|  <0.1% |          131 |     8 | `__GI_memcpy`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`    |

##### `ZSTD_compressBlock_doubleFast` (`./lib/compress/zstd_double_fast.c`)

|         % |    Instructions |   Calls | Callee                          | Location                                  |
| --------: | --------------: | ------: | ------------------------------- | ----------------------------------------- |
| 755544.6% | 151,440,509,530 | 122,209 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_compress_internal.h` |
|     62.5% |      12,527,622 |       9 | `ZSTD_compressBlock_doubleFast` | `./lib/common/mem.h`                      |
|     <0.1% |             291 |       8 | `ZSTD_buildSeqStore`            | `./lib/compress/zstd_compress.c`          |

##### `ZSTD_compressBlock_doubleFast` (`./lib/compress/zstd_compress_internal.h`)

|         % |    Instructions |   Calls | Callee                          | Location                                  |
| --------: | --------------: | ------: | ------------------------------- | ----------------------------------------- |
| 755530.6% | 151,432,182,725 | 122,208 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_double_fast.c`       |
|    100.0% |      20,042,901 |       8 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_compress_internal.h` |

##### `ZSTD_compressContinue_public` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Callee                            | Location                                  |
| -----: | -----------: | ----: | --------------------------------- | ----------------------------------------- |
| 100.0% |   19,696,318 |     1 | `ZSTD_compressContinue_public`    | `./lib/compress/zstd_compress_internal.h` |
| 100.0% |   19,696,277 |     1 | `ZSTD_compress_frameChunk`        | `./lib/compress/zstd_compress.c`          |
|  94.7% |   18,652,248 |     1 | `pthread_cond_signal@@GLIBC_2.17` | `/usr/lib/aarch64-linux-gnu/libc.so.6`    |
|  <0.1% |           61 |     1 | `ZSTD_writeFrameHeader`           | `./lib/compress/zstd_compress.c`          |
|  <0.1% |           42 |     1 | `pthread_mutex_lock@@GLIBC_2.17`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`    |

##### `ZSTD_compressContinue_public` (`./lib/compress/zstd_compress_internal.h`)

|      % | Instructions | Calls | Callee                         | Location                         |
| -----: | -----------: | ----: | ------------------------------ | -------------------------------- |
| 100.0% |   19,696,287 |     1 | `ZSTD_compressContinue_public` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_compressEnd_public` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Callee                             | Location                                  |
| -----: | -----------: | ----: | ---------------------------------- | ----------------------------------------- |
| 100.0% |   18,651,568 |     1 | `ZSTD_compressEnd_public`          | `./lib/compress/zstd_compress_internal.h` |
|  <0.1% |          334 |     1 | `pthread_mutex_unlock@@GLIBC_2.17` | `/usr/lib/aarch64-linux-gnu/libc.so.6`    |
|  <0.1% |           67 |     1 | `ZSTD_XXH64_digest`                | `./lib/common/xxhash.h`                   |
|  <0.1% |           42 |     1 | `pthread_mutex_lock@@GLIBC_2.17`   | `/usr/lib/aarch64-linux-gnu/libc.so.6`    |
|  <0.1% |           14 |     1 | `ZSTD_CCtx_trace`                  | `./lib/compress/zstd_compress.c`          |

##### `ZSTD_compressEnd_public` (`./lib/compress/zstd_compress_internal.h`)

|      % | Instructions | Calls | Callee                     | Location                         |
| -----: | -----------: | ----: | -------------------------- | -------------------------------- |
| 100.0% |   18,651,550 |     1 | `ZSTD_compress_frameChunk` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_encodeSequences` (`./lib/compress/zstd_compress_sequences.c`)

|      % | Instructions | Calls | Callee                        | Location                         |
| -----: | -----------: | ----: | ----------------------------- | -------------------------------- |
| 100.0% |   12,118,064 |     8 | `ZSTD_encodeSequences`        | `./lib/common/mem.h`             |
|  <0.1% |           88 |     8 | `ZSTD_compressBlock_internal` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_encodeSequences` (`./lib/common/mem.h`)

|      % | Instructions | Calls | Callee                 | Location                   |
| -----: | -----------: | ----: | ---------------------- | -------------------------- |
| 100.0% |   12,117,184 |     8 | `ZSTD_encodeSequences` | `./lib/common/bitstream.h` |

##### `ZSTD_encodeSequences` (`./lib/common/bitstream.h`)

|      % | Instructions | Calls | Callee                 | Location                   |
| -----: | -----------: | ----: | ---------------------- | -------------------------- |
| 100.0% |   12,116,392 |     8 | `ZSTD_encodeSequences` | `./lib/common/bitstream.h` |

##### `ZSTD_buildSequencesStatistics` (`./lib/compress/zstd_compress.c`)

|      % | Instructions | Calls | Callee                 | Location                                   |
| -----: | -----------: | ----: | ---------------------- | ------------------------------------------ |
| 267.5% |   12,119,408 |     8 | `ZSTD_encodeSequences` | `./lib/compress/zstd_compress_sequences.c` |
|  57.3% |    2,594,708 |     8 | `ZSTD_seqToCodes`      | `./lib/compress/zstd_compress.c`           |
|  42.7% |    1,935,430 |     8 | `HIST_countFast_wksp`  | `./lib/compress/hist.c`                    |

##### `HIST_count_parallel_wksp` (`./lib/compress/hist.c`)

|     % | Instructions | Calls | Callee                  | Location                                   |
| ----: | -----------: | ----: | ----------------------- | ------------------------------------------ |
| 78.0% |    2,205,964 |    24 | `ZSTD_buildCTable`      | `./lib/compress/zstd_compress_sequences.c` |
| 15.6% |      441,661 |     7 | `HUF_compress_internal` | `./lib/compress/huf_compress.c`            |
|  5.4% |      153,989 |     1 | `HUF_buildCTable_wksp`  | `./lib/compress/huf_compress.c`            |
|  0.4% |       10,816 |    32 | `__GI_memset`           | `/usr/lib/aarch64-linux-gnu/libc.so.6`     |
|  0.1% |        1,734 |    31 | `__GI_memmove`          | `/usr/lib/aarch64-linux-gnu/libc.so.6`     |

##### `ZSTD_seqToCodes` (`./lib/compress/zstd_compress.c`)

|     % | Instructions | Calls | Callee            | Location                                  |
| ----: | -----------: | ----: | ----------------- | ----------------------------------------- |
| 52.8% |    1,370,282 |     8 | `ZSTD_seqToCodes` | `./lib/compress/zstd_compress_internal.h` |

##### `HIST_countFast_wksp` (`./lib/compress/hist.c`)

|      % | Instructions | Calls | Callee                     | Location                |
| -----: | -----------: | ----: | -------------------------- | ----------------------- |
| 200.6% |    3,881,646 |    24 | `HIST_count_parallel_wksp` | `./lib/compress/hist.c` |

##### `ZSTD_XXH64_update` (`./lib/common/xxhash.h`)

|       % | Instructions | Calls | Callee                  | Location                           |
| ------: | -----------: | ----: | ----------------------- | ---------------------------------- |
| 2544.0% |   38,349,498 |     1 | `ZSTDMT_compressionJob` | `./lib/compress/zstdmt_compress.c` |

##### `ZSTD_buildCTable` (`./lib/compress/zstd_compress_sequences.c`)

|      % | Instructions | Calls | Callee                | Location                        |
| -----: | -----------: | ----: | --------------------- | ------------------------------- |
| 141.4% |    1,946,432 |    16 | `HIST_countFast_wksp` | `./lib/compress/hist.c`         |
|  18.7% |      257,596 |    24 | `FSE_normalizeCount`  | `./lib/compress/fse_compress.c` |
|  <0.1% |          624 |    24 | `FSE_optimalTableLog` | `./lib/common/bits.h`           |

##### `ZSTD_compressLiterals` (`./lib/compress/zstd_compress_literals.c`)

|       % | Instructions | Calls | Callee                        | Location                                  |
| ------: | -----------: | ----: | ----------------------------- | ----------------------------------------- |
| 1854.3% |   16,650,162 |     8 | `ZSTD_compressBlock_internal` | `./lib/compress/zstd_compress.c`          |
|   99.7% |      895,240 |     8 | `ZSTD_compressLiterals`       | `./lib/compress/zstd_compress_literals.c` |
|   99.7% |      895,016 |     8 | `HUF_compress4X_repeat`       | `./lib/compress/huf_compress.c`           |
|    0.2% |        2,096 |     8 | `__GI_memcpy`                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`    |

##### `HUF_compress4X_repeat` (`./lib/compress/huf_compress.c`)

|      % | Instructions | Calls | Callee                  | Location                                  |
| -----: | -----------: | ----: | ----------------------- | ----------------------------------------- |
| 100.0% |      894,608 |     8 | `HUF_compress_internal` | `./lib/compress/huf_compress.c`           |
|  <0.1% |           72 |     8 | `ZSTD_compressLiterals` | `./lib/compress/zstd_compress_literals.c` |

##### `(below main)` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Callee      | Location                                           |
| -----: | -----------: | ----: | ----------- | -------------------------------------------------- |
| 100.0% |      363,936 |     1 | `_dl_start` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `_dl_start` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Callee                     | Location                                           |
| -----: | -----------: | ----: | -------------------------- | -------------------------------------------------- |
| 118.7% |      431,897 |     5 | `_dl_start`                | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  76.2% |      277,173 |     1 | `_dl_init`                 | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  23.6% |       86,003 |     1 | `_dl_sysdep_start`         | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  <0.1% |           24 |     1 | `_dl_setup_hash`           | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  <0.1% |           14 |     1 | `__rtld_malloc_init_stubs` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `_dl_runtime_resolve` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|     % | Instructions | Calls | Callee                             | Location                                           |
| ----: | -----------: | ----: | ---------------------------------- | -------------------------------------------------- |
| 97.1% |      275,441 |     1 | `__libc_start_main@@GLIBC_2.34`    | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| 10.6% |       30,048 |    49 | `_dl_fixup`                        | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  5.8% |       16,390 |     1 | `__GI_memcpy`                      | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  3.7% |       10,484 |     1 | `pthread_mutex_init@@GLIBC_2.17`   | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  1.8% |        5,161 |     1 | `pthread_mutex_unlock@@GLIBC_2.17` | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |

##### `_dl_init` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|     % | Instructions | Calls | Callee         | Location                                           |
| ----: | -----------: | ----: | -------------- | -------------------------------------------------- |
| 99.6% |      276,150 |     1 | `(below main)` | `./programs/zstd`                                  |
|  0.7% |        1,909 |     2 | `call_init`    | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `__libc_start_main@@GLIBC_2.34` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % | Instructions | Calls | Callee                | Location                                           |
| -----: | -----------: | ----: | --------------------- | -------------------------------------------------- |
| 100.0% |      275,425 |     1 | `__cxa_atexit`        | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  99.7% |      274,544 |     1 | `(below main)`        | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|   0.3% |          716 |     1 | `_dl_runtime_resolve` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  <0.1% |           11 |     1 | `0x0000000000008790`  | `./programs/zstd`                                  |

##### `__cxa_atexit` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % | Instructions | Calls | Callee              | Location                               |
| -----: | -----------: | ----: | ------------------- | -------------------------------------- |
| 100.0% |      275,422 |     1 | `__internal_atexit` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__internal_atexit` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % | Instructions | Calls | Callee                          | Location                               |
| -----: | -----------: | ----: | ------------------------------- | -------------------------------------- |
| 100.0% |      275,296 |     1 | `__libc_start_main@@GLIBC_2.34` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  <0.1% |           58 |     1 | `__new_exitfn`                  | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  <0.1% |           10 |     1 | `0x000000000010c4e8`            | `<unknown>`                            |
|  <0.1% |            6 |     1 | `__aarch64_cas4_acq`            | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `(below main)` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % | Instructions | Calls | Callee    | Location                               |
| -----: | -----------: | ----: | --------- | -------------------------------------- |
| 100.0% |      274,481 |     1 | `main`    | `./programs/zstdcli.c`                 |
|  <0.1% |           34 |     1 | `_setjmp` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_dl_sysdep_start` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|     % | Instructions | Calls | Callee                       | Location                                           |
| ----: | -----------: | ----: | ---------------------------- | -------------------------------------------------- |
| 99.7% |       85,718 |     1 | `__GI___tunables_init`       | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 93.9% |       80,782 |     1 | `dl_main`                    | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.3% |          260 |     1 | `_dl_sysdep_parse_arguments` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |           34 |     1 | `__GI___tunable_set_val`     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |           15 |     1 | `sbrk`                       | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `__GI___tunables_init` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|     % | Instructions | Calls | Callee                 | Location                                           |
| ----: | -----------: | ----: | ---------------------- | -------------------------------------------------- |
| 94.4% |       80,883 |     1 | `_dl_sysdep_start`     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 70.8% |       60,654 |    24 | `__GI___tunables_init` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.1% |           46 |     2 | `__tunable_get_val`    | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |           36 |     1 | `_dl_sort_maps_init`   | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| <0.1% |            9 |     1 | `brk`                  | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `dl_main` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|      % | Instructions | Calls | Callee                | Location                                           |
| -----: | -----------: | ----: | --------------------- | -------------------------------------------------- |
| 395.4% |      319,389 |     4 | `dl_main`             | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  99.6% |       80,426 |     1 | `_dl_new_object`      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  98.3% |       79,403 |     1 | `_dl_init_paths`      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  95.5% |       77,107 |     1 | `handle_preload_list` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  92.3% |       74,530 |     1 | `_dl_map_object_deps` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `malloc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % | Instructions | Calls | Callee                    | Location                               |
| ----: | -----------: | ----: | ------------------------- | -------------------------------------- |
| 95.9% |       61,786 |     1 | `ZSTD_resetCCtx_internal` | `./lib/compress/zstd_cwksp.h`          |
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
| 458.9% |      102,610 |    10 | `_dl_relocate_object` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 216.9% |       48,510 |   132 | `do_lookup_x`         | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| 149.4% |       33,398 |    60 | `_dl_lookup_symbol_x` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
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
| 1548.0% |      246,654 |    19 | `_dl_relocate_object`   | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  913.2% |      145,512 |    10 | `_dl_lookup_symbol_x`   | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  129.9% |       20,706 |     1 | `_dl_add_to_slotinfo`   | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   58.0% |        9,247 |     1 | `_dl_allocate_tls_init` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|    7.6% |        1,217 |     1 | `dl_main`               | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `check_match` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|     % | Instructions | Calls | Callee        | Location                                           |
| ----: | -----------: | ----: | ------------- | -------------------------------------------------- |
| 64.5% |       10,268 |   198 | `strcmp`      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  3.2% |          506 |     2 | `do_lookup_x` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  0.1% |           10 |     2 | `check_match` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

# Instruction profile

Recorded 40,514,776 instructions.

| Category |      % | Instructions |
| -------- | -----: | -----------: |
| Ours     | 100.0% |   40,505,815 |
| Native   |  <0.1% |        8,961 |

## Hottest functions

### Self instructions

Functions ranked by instructions recorded directly in the function body, excluding callees.

#### Categories

##### Ours

|     % | Instructions | Function                                          | Location                                            |
| ----: | -----------: | ------------------------------------------------- | --------------------------------------------------- |
| 29.9% |   12,117,580 | `ZSTD_encodeSequences`                            | `lib//common/bitstream.h`                           |
| 27.1% |   10,994,690 | `ZSTD_compressBlock_doubleFast`                   | `lib//compress/zstd_double_fast.c`                  |
| 23.1% |    9,349,738 | `ZSTD_compressBlock_doubleFast`                   | `lib//compress/zstd_compress_internal.h`            |
|  4.8% |    1,957,739 | `HIST_count_parallel_wksp`                        | `lib//compress/hist.c`                              |
|  3.7% |    1,507,463 | `ZSTD_XXH64_update`                               | `lib//common/xxhash.h`                              |
|  3.4% |    1,370,003 | `ZSTD_seqToCodes`                                 | `lib//compress/zstd_compress_internal.h`            |
|  3.0% |    1,224,474 | `ZSTD_seqToCodes`                                 | `lib//compress/zstd_compress.c`                     |
|  1.5% |      613,032 | `ZSTD_recordFingerprint_43`                       | `lib//compress/zstd_preSplit.c`                     |
|  1.1% |      425,540 | `HUF_compress1X_usingCTable_internal.constprop.0` | `lib//compress/huf_compress.c`                      |
|  0.6% |      225,079 | `FSE_buildCTable_wksp`                            | `lib//compress/fse_compress.c`                      |
|  0.5% |      184,695 | `__GI_memcpy`                                     | `./string/../sysdeps/aarch64/multiarch/../memcpy.S` |
|  0.2% |       99,044 | `HUF_buildCTable_wksp`                            | `lib//compress/huf_compress.c`                      |
|  0.2% |       92,389 | `__GI_memset`                                     | `./string/../sysdeps/aarch64/nptl/../memset.S`      |
|  0.1% |       29,090 | `do_lookup_x`                                     | `./elf/./elf/dl-lookup.c`                           |
|  0.1% |       24,316 | `FSE_writeNCount_generic`                         | `lib//compress/fse_compress.c`                      |
|  0.1% |       22,533 | `_dl_lookup_symbol_x`                             | `./elf/./elf/dl-lookup.c`                           |
| <0.1% |       19,193 | `FSE_compress_usingCTable_generic`                | `lib//compress/fse_compress.c`                      |
| <0.1% |       16,413 | `FSE_normalizeCount`                              | `lib//compress/fse_compress.c`                      |
| <0.1% |       13,490 | `HUF_writeCTable_wksp`                            | `lib//compress/huf_compress.c`                      |
| <0.1% |       12,686 | `_int_malloc`                                     | `./malloc/./malloc/malloc.c`                        |

#### Lines

Lines ranked by contribution to each function's self instructions.

##### `ZSTD_encodeSequences` (`lib//common/bitstream.h`)

|     % | Instructions | Location                      |
| ----: | -----------: | ----------------------------- |
| 18.2% |    2,203,194 | `lib//common/bitstream.h:173` |
| 11.1% |    1,346,371 | `lib//common/bitstream.h:186` |
|  6.1% |      734,382 | `lib//common/bitstream.h:187` |
|  3.0% |      367,255 | `lib//common/bitstream.h:230` |
|  1.0% |      122,442 | `lib//common/bitstream.h:227` |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`)

|    % | Instructions | Location                               |
| ---: | -----------: | -------------------------------------- |
| 5.6% |      611,369 | `lib//compress/zstd_double_fast.c:310` |
| 5.6% |      610,889 | `lib//compress/zstd_double_fast.c:190` |
| 4.4% |      488,700 | `lib//compress/zstd_double_fast.c:178` |
| 3.1% |      339,153 | `lib//compress/zstd_double_fast.c:290` |
| 2.3% |      251,826 | `lib//compress/zstd_double_fast.c:271` |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`)

|    % | Instructions | Location                                     |
| ---: | -----------: | -------------------------------------------- |
| 6.6% |      619,974 | `lib//compress/zstd_compress_internal.h:642` |
| 4.3% |      402,346 | `lib//compress/zstd_compress_internal.h:861` |
| 3.9% |      367,967 | `lib//compress/zstd_compress_internal.h:909` |
| 3.9% |      367,716 | `lib//compress/zstd_compress_internal.h:924` |
| 2.9% |      269,866 | `lib//compress/zstd_compress_internal.h:859` |

##### `HIST_count_parallel_wksp` (`lib//compress/hist.c`)

|     % | Instructions | Location                  |
| ----: | -----------: | ------------------------- |
| 99.8% |    1,953,875 | `lib//compress/hist.c:98` |
| <0.1% |          160 | `lib//compress/hist.c:81` |
| <0.1% |           96 | `lib//compress/hist.c:84` |
| <0.1% |           64 | `lib//compress/hist.c:93` |

##### `ZSTD_XXH64_update` (`lib//common/xxhash.h`)

|     % | Instructions | Location                    |
| ----: | -----------: | --------------------------- |
| 34.8% |      524,300 | `lib//common/xxhash.h:3378` |
| 17.4% |      262,159 | `lib//common/xxhash.h:3380` |
| 17.4% |      262,144 | `lib//common/xxhash.h:3379` |
|  8.7% |      131,081 | `lib//common/xxhash.h:3608` |
|  8.7% |      131,081 | `lib//common/xxhash.h:3609` |

##### `ZSTD_seqToCodes` (`lib//compress/zstd_compress_internal.h`)

|     % | Instructions | Location                                     |
| ----: | -----------: | -------------------------------------------- |
| 17.9% |      244,864 | `lib//compress/zstd_compress_internal.h:612` |

##### `ZSTD_seqToCodes` (`lib//compress/zstd_compress.c`)

|     % | Instructions | Location                             |
| ----: | -----------: | ------------------------------------ |
| 30.0% |      367,523 | `lib//compress/zstd_compress.c:2703` |
| 20.0% |      244,818 | `lib//compress/zstd_compress.c:2704` |
| 20.0% |      244,816 | `lib//compress/zstd_compress.c:2707` |
| <0.1% |           32 | `lib//compress/zstd_compress.c:2699` |
| <0.1% |            8 | `lib//compress/zstd_compress.c:2698` |

##### `ZSTD_recordFingerprint_43` (`lib//compress/zstd_preSplit.c`)

|     % | Instructions | Location                            |
| ----: | -----------: | ----------------------------------- |
| 24.8% |      152,208 | `lib//compress/zstd_preSplit.c:72`  |
| 17.5% |      107,520 | `lib//compress/zstd_preSplit.c:102` |
| 17.5% |      107,520 | `lib//compress/zstd_preSplit.c:128` |
| 13.2% |       80,955 | `lib//compress/zstd_preSplit.c:100` |
| 13.2% |       80,640 | `lib//compress/zstd_preSplit.c:127` |

##### `HUF_compress1X_usingCTable_internal.constprop.0` (`lib//compress/huf_compress.c`)

|     % | Instructions | Location                           |
| ----: | -----------: | ---------------------------------- |
| 29.6% |      126,092 | `lib//compress/huf_compress.c:987` |
| 13.3% |       56,792 | `lib//compress/huf_compress.c:891` |
| 13.3% |       56,760 | `lib//compress/huf_compress.c:886` |
| 11.9% |       50,490 | `lib//compress/huf_compress.c:887` |
|  6.0% |       25,344 | `lib//compress/huf_compress.c:943` |

##### `FSE_buildCTable_wksp` (`lib//compress/fse_compress.c`)

|     % | Instructions | Location                           |
| ----: | -----------: | ---------------------------------- |
| 36.4% |       81,944 | `lib//compress/fse_compress.c:172` |
| 14.3% |       32,131 | `lib//compress/fse_compress.c:160` |
| 13.7% |       30,816 | `lib//compress/fse_compress.c:170` |
|  9.2% |       20,727 | `lib//compress/fse_compress.c:163` |
|  8.9% |       19,986 | `lib//compress/fse_compress.c:162` |

##### `__GI_memcpy` (`./string/../sysdeps/aarch64/multiarch/../memcpy.S`)

|     % | Instructions | Location                                                |
| ----: | -----------: | ------------------------------------------------------- |
| 12.3% |       22,771 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:166` |
| 12.3% |       22,771 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:167` |
| 12.3% |       22,771 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:168` |
| 12.3% |       22,771 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:169` |
| 12.3% |       22,771 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:170` |

##### `HUF_buildCTable_wksp` (`lib//compress/huf_compress.c`)

|    % | Instructions | Location                           |
| ---: | -----------: | ---------------------------------- |
| 6.2% |        6,178 | `lib//compress/huf_compress.c:533` |
| 6.2% |        6,112 | `lib//compress/huf_compress.c:640` |
| 5.4% |        5,363 | `lib//compress/huf_compress.c:702` |
| 5.4% |        5,355 | `lib//compress/huf_compress.c:701` |
| 5.2% |        5,135 | `lib//compress/huf_compress.c:648` |

##### `__GI_memset` (`./string/../sysdeps/aarch64/nptl/../memset.S`)

|     % | Instructions | Location                                           |
| ----: | -----------: | -------------------------------------------------- |
| 19.1% |       17,635 | `./string/../sysdeps/aarch64/nptl/../memset.S:131` |
| 19.1% |       17,635 | `./string/../sysdeps/aarch64/nptl/../memset.S:132` |
| 19.1% |       17,635 | `./string/../sysdeps/aarch64/nptl/../memset.S:133` |
| 19.1% |       17,635 | `./string/../sysdeps/aarch64/nptl/../memset.S:134` |
| 19.1% |       17,635 | `./string/../sysdeps/aarch64/nptl/../memset.S:135` |

##### `do_lookup_x` (`./elf/./elf/dl-lookup.c`)

|    % | Instructions | Location                      |
| ---: | -----------: | ----------------------------- |
| 7.8% |        2,278 | `./elf/./elf/dl-lookup.c:348` |
| 5.8% |        1,688 | `./elf/./elf/dl-lookup.c:388` |
| 5.8% |        1,688 | `./elf/./elf/dl-lookup.c:403` |
| 5.7% |        1,648 | `./elf/./elf/dl-lookup.c:374` |
| 5.3% |        1,548 | `./elf/./elf/dl-lookup.c:416` |

##### `FSE_writeNCount_generic` (`lib//compress/fse_compress.c`)

|     % | Instructions | Location                           |
| ----: | -----------: | ---------------------------------- |
| 10.4% |        2,531 | `lib//compress/fse_compress.c:302` |
|  8.6% |        2,088 | `lib//compress/fse_compress.c:260` |
|  8.2% |        1,992 | `lib//compress/fse_compress.c:293` |
|  8.2% |        1,992 | `lib//compress/fse_compress.c:296` |
|  8.2% |        1,992 | `lib//compress/fse_compress.c:299` |

##### `_dl_lookup_symbol_x` (`./elf/./elf/dl-lookup.c`)

|    % | Instructions | Location                      |
| ---: | -----------: | ----------------------------- |
| 8.9% |        2,010 | `./elf/./elf/dl-lookup.c:756` |
| 6.5% |        1,474 | `./elf/./elf/dl-lookup.c:776` |
| 4.2% |          938 | `./elf/./elf/dl-lookup.c:762` |
| 3.6% |          804 | `./elf/./elf/dl-lookup.c:768` |
| 1.2% |          268 | `./elf/./elf/dl-lookup.c:758` |

##### `FSE_compress_usingCTable_generic` (`lib//compress/fse_compress.c`)

|    % | Instructions | Location                           |
| ---: | -----------: | ---------------------------------- |
| 4.0% |          774 | `lib//compress/fse_compress.c:588` |
| 2.6% |          500 | `lib//compress/fse_compress.c:602` |
| 0.2% |           40 | `lib//compress/fse_compress.c:554` |
| 0.2% |           40 | `lib//compress/fse_compress.c:608` |
| 0.1% |           16 | `lib//compress/fse_compress.c:563` |

##### `FSE_normalizeCount` (`lib//compress/fse_compress.c`)

|     % | Instructions | Location                           |
| ----: | -----------: | ---------------------------------- |
| 25.4% |        4,170 | `lib//compress/fse_compress.c:487` |
| 12.9% |        2,117 | `lib//compress/fse_compress.c:486` |
| 12.7% |        2,085 | `lib//compress/fse_compress.c:488` |
|  7.6% |        1,242 | `lib//compress/fse_compress.c:489` |
|  6.7% |        1,101 | `lib//compress/fse_compress.c:498` |

##### `HUF_writeCTable_wksp` (`lib//compress/huf_compress.c`)

|     % | Instructions | Location                           |
| ----: | -----------: | ---------------------------------- |
| 23.0% |        3,097 | `lib//compress/huf_compress.c:270` |
| 22.7% |        3,057 | `lib//compress/huf_compress.c:271` |
| 21.2% |        2,864 | `lib//compress/huf_compress.c:190` |
| 16.5% |        2,232 | `lib//compress/huf_compress.c:798` |
| 10.9% |        1,476 | `lib//compress/huf_compress.c:799` |

##### `_int_malloc` (`./malloc/./malloc/malloc.c`)

|    % | Instructions | Location                          |
| ---: | -----------: | --------------------------------- |
| 6.5% |          830 | `./malloc/./malloc/malloc.c:1348` |
| 6.4% |          818 | `./malloc/./malloc/malloc.c:3980` |
| 5.6% |          711 | `./malloc/./malloc/malloc.c:4265` |
| 4.3% |          546 | `./malloc/./malloc/malloc.c:4405` |
| 4.3% |          545 | `./malloc/./malloc/malloc.c:4268` |

### Total instructions

Functions ranked by total instructions recorded in the function and all its callees. Calls within a recursion cycle are excluded from totals, since they re-count the same work.

#### Categories

##### Ours

|     % | Instructions | Function                        | Location                                  |
| ----: | -----------: | ------------------------------- | ----------------------------------------- |
| 96.9% |   39,273,650 | `ZSTD_compress_frameChunk`      | `lib//compress/zstd_compress.c`           |
| 50.2% |   20,346,166 | `ZSTD_buildSeqStore`            | `lib//compress/zstd_compress.c`           |
| 50.2% |   20,345,061 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_double_fast.c`        |
| 50.2% |   20,344,346 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_compress_internal.h`  |
| 49.6% |   20,103,537 | `ZSTD_compressContinue_public`  | `lib//compress/zstd_compress.c`           |
| 49.6% |   20,103,424 | `ZSTD_compressContinue_public`  | `lib//compress/zstd_compress_internal.h`  |
| 47.3% |   19,170,352 | `ZSTD_compressEnd_public`       | `lib//compress/zstd_compress.c`           |
| 47.3% |   19,170,285 | `ZSTD_compressEnd_public`       | `lib//compress/zstd_compress_internal.h`  |
| 29.9% |   12,119,716 | `ZSTD_encodeSequences`          | `lib//compress/zstd_compress_sequences.c` |
| 29.9% |   12,118,460 | `ZSTD_encodeSequences`          | `lib//common/mem.h`                       |
| 29.9% |   12,117,580 | `ZSTD_encodeSequences`          | `lib//common/bitstream.h`                 |
| 11.2% |    4,530,883 | `ZSTD_buildSequencesStatistics` | `lib//compress/zstd_compress.c`           |
|  7.0% |    2,824,719 | `HIST_count_parallel_wksp`      | `lib//compress/hist.c`                    |
|  6.4% |    2,594,477 | `ZSTD_seqToCodes`               | `lib//compress/zstd_compress.c`           |
|  4.8% |    1,935,918 | `HIST_countFast_wksp`           | `lib//compress/hist.c`                    |
|  3.7% |    1,507,463 | `ZSTD_XXH64_update`             | `lib//common/xxhash.h`                    |
|  3.4% |    1,377,109 | `ZSTD_buildCTable`              | `lib//compress/zstd_compress_sequences.c` |
|  3.4% |    1,370,003 | `ZSTD_seqToCodes`               | `lib//compress/zstd_compress_internal.h`  |
|  2.2% |      892,897 | `ZSTD_compressLiterals`         | `lib//compress/zstd_compress_literals.c`  |
|  2.2% |      889,921 | `HUF_compress4X_repeat`         | `lib//compress/huf_compress.c`            |

#### Callers

Callers ranked by the instructions recorded in each function and its callees during calls from that caller. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `ZSTD_compress_frameChunk` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                         | Location                                 |
| -----: | -----------: | ----: | ------------------------------ | ---------------------------------------- |
| 144.6% |   56,772,914 |     8 | `ZSTD_compressBlock_internal`  | `lib//compress/zstd_compress.c`          |
|  98.1% |   38,519,691 |     2 | `ZSTD_compress_frameChunk`     | `lib//compress/zstd_compress.c`          |
|  51.2% |   20,103,383 |     1 | `ZSTD_compressContinue_public` | `lib//compress/zstd_compress.c`          |
|  48.8% |   19,170,267 |     1 | `ZSTD_compressEnd_public`      | `lib//compress/zstd_compress_internal.h` |

##### `ZSTD_buildSeqStore` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                          | Location                           |
| -----: | -----------: | ----: | ------------------------------- | ---------------------------------- |
| 186.2% |   37,889,878 |     8 | `ZSTD_compressBlock_internal`   | `lib//compress/zstd_compress.c`    |
|  <0.1% |          291 |     8 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_double_fast.c` |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`)

|         % |    Instructions |   Calls | Caller                          | Location                                 |
| --------: | --------------: | ------: | ------------------------------- | ---------------------------------------- |
| 755707.0% | 153,749,042,904 | 122,214 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_compress_internal.h` |
|    100.0% |      20,345,061 |       8 | `ZSTD_buildSeqStore`            | `lib//compress/zstd_compress.c`          |
|     62.4% |      12,697,329 |       9 | `ZSTD_compressBlock_doubleFast` | `lib//common/mem.h`                      |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`)

|         % |    Instructions |   Calls | Caller                          | Location                                 |
| --------: | --------------: | ------: | ------------------------------- | ---------------------------------------- |
| 755779.5% | 153,758,392,642 | 122,215 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_double_fast.c`       |
|    100.0% |      20,344,090 |       8 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_compress_internal.h` |

##### `ZSTD_compressContinue_public` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                         | Location                                 |
| -----: | -----------: | ----: | ------------------------------ | ---------------------------------------- |
| 195.4% |   39,274,544 |     1 | `ZSTDMT_compressionJob`        | `lib//compress/zstdmt_compress.c`        |
| 100.0% |   20,103,393 |     1 | `ZSTD_compressContinue_public` | `lib//compress/zstd_compress_internal.h` |

##### `ZSTD_compressContinue_public` (`lib//compress/zstd_compress_internal.h`)

|      % | Instructions | Calls | Caller                         | Location                        |
| -----: | -----------: | ----: | ------------------------------ | ------------------------------- |
| 100.0% |   20,103,424 |     1 | `ZSTD_compressContinue_public` | `lib//compress/zstd_compress.c` |

##### `ZSTD_compressEnd_public` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                           | Location                               |
| -----: | -----------: | ----: | -------------------------------- | -------------------------------------- |
| 100.0% |   19,170,728 |     1 | `__pthread_mutex_unlock_usercnt` | `./nptl/./nptl/pthread_mutex_unlock.c` |
|  <0.1% |           97 |     1 | `ZSTD_compress_frameChunk`       | `lib//compress/zstd_compress.c`        |

##### `ZSTD_compressEnd_public` (`lib//compress/zstd_compress_internal.h`)

|      % | Instructions | Calls | Caller                    | Location                        |
| -----: | -----------: | ----: | ------------------------- | ------------------------------- |
| 100.0% |   19,170,285 |     1 | `ZSTD_compressEnd_public` | `lib//compress/zstd_compress.c` |

##### `ZSTD_encodeSequences` (`lib//compress/zstd_compress_sequences.c`)

|      % | Instructions | Calls | Caller                          | Location                        |
| -----: | -----------: | ----: | ------------------------------- | ------------------------------- |
| 100.0% |   12,119,804 |     8 | `ZSTD_buildSequencesStatistics` | `lib//compress/zstd_compress.c` |

##### `ZSTD_encodeSequences` (`lib//common/mem.h`)

|      % | Instructions | Calls | Caller                 | Location                                  |
| -----: | -----------: | ----: | ---------------------- | ----------------------------------------- |
| 100.0% |   12,118,460 |     8 | `ZSTD_encodeSequences` | `lib//compress/zstd_compress_sequences.c` |

##### `ZSTD_encodeSequences` (`lib//common/bitstream.h`)

|      % | Instructions | Calls | Caller                 | Location                  |
| -----: | -----------: | ----: | ---------------------- | ------------------------- |
| 100.0% |   12,117,580 |     8 | `ZSTD_encodeSequences` | `lib//common/mem.h`       |
| 100.0% |   12,116,788 |     8 | `ZSTD_encodeSequences` | `lib//common/bitstream.h` |

##### `ZSTD_buildSequencesStatistics` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                        | Location                        |
| -----: | -----------: | ----: | ----------------------------- | ------------------------------- |
| 367.5% |   16,650,687 |     8 | `ZSTD_compressBlock_internal` | `lib//compress/zstd_compress.c` |

##### `HIST_count_parallel_wksp` (`lib//compress/hist.c`)

|      % | Instructions | Calls | Caller                | Location               |
| -----: | -----------: | ----: | --------------------- | ---------------------- |
| 137.5% |    3,882,903 |    24 | `HIST_countFast_wksp` | `lib//compress/hist.c` |
|  31.5% |      888,873 |     8 | `HIST_count_wksp`     | `lib//compress/hist.c` |

##### `ZSTD_seqToCodes` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                          | Location                        |
| -----: | -----------: | ----: | ------------------------------- | ------------------------------- |
| 100.0% |    2,594,477 |     8 | `ZSTD_buildSequencesStatistics` | `lib//compress/zstd_compress.c` |

##### `HIST_countFast_wksp` (`lib//compress/hist.c`)

|      % | Instructions | Calls | Caller                          | Location                                  |
| -----: | -----------: | ----: | ------------------------------- | ----------------------------------------- |
| 100.6% |    1,947,201 |    16 | `ZSTD_buildCTable`              | `lib//compress/zstd_compress_sequences.c` |
| 100.0% |    1,935,918 |     8 | `ZSTD_buildSequencesStatistics` | `lib//compress/zstd_compress.c`           |

##### `ZSTD_XXH64_update` (`lib//common/xxhash.h`)

|     % | Instructions | Calls | Caller                     | Location                          |
| ----: | -----------: | ----: | -------------------------- | --------------------------------- |
| 50.0% |      753,754 |     2 | `ZSTD_compress_frameChunk` | `lib//compress/zstd_compress.c`   |
| 50.0% |      753,709 |     1 | `ZSTDMT_compressionJob`    | `lib//compress/zstdmt_compress.c` |

##### `ZSTD_buildCTable` (`lib//compress/zstd_compress_sequences.c`)

|      % | Instructions | Calls | Caller                     | Location                       |
| -----: | -----------: | ----: | -------------------------- | ------------------------------ |
| 160.3% |    2,207,086 |    24 | `HIST_count_parallel_wksp` | `lib//compress/hist.c`         |
|  <0.1% |          120 |    24 | `FSE_buildCTable_wksp`     | `lib//compress/fse_compress.c` |

##### `ZSTD_seqToCodes` (`lib//compress/zstd_compress_internal.h`)

|      % | Instructions | Calls | Caller            | Location                        |
| -----: | -----------: | ----: | ----------------- | ------------------------------- |
| 100.0% |    1,370,003 |     8 | `ZSTD_seqToCodes` | `lib//compress/zstd_compress.c` |

##### `ZSTD_compressLiterals` (`lib//compress/zstd_compress_literals.c`)

|       % | Instructions | Calls | Caller                  | Location                                 |
| ------: | -----------: | ----: | ----------------------- | ---------------------------------------- |
| 1964.8% |   17,543,712 |     8 | `ZSTD_buildSeqStore`    | `lib//compress/zstd_compress.c`          |
|   99.7% |      890,217 |     8 | `ZSTD_compressLiterals` | `lib//compress/zstd_compress_literals.c` |
|   <0.1% |           72 |     8 | `HUF_compress4X_repeat` | `lib//compress/huf_compress.c`           |

##### `HUF_compress4X_repeat` (`lib//compress/huf_compress.c`)

|      % | Instructions | Calls | Caller                  | Location                                 |
| -----: | -----------: | ----: | ----------------------- | ---------------------------------------- |
| 100.0% |      889,993 |     8 | `ZSTD_compressLiterals` | `lib//compress/zstd_compress_literals.c` |

#### Callees

Callees ranked by contribution to each function's total instructions. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `ZSTD_compress_frameChunk` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Callee                        | Location                        |
| -----: | -----------: | ----: | ----------------------------- | ------------------------------- |
| 192.4% |   75,565,864 |     7 | `ZSTD_splitBlock`             | `lib//compress/zstd_preSplit.c` |
|  98.1% |   38,519,691 |     2 | `ZSTD_compress_frameChunk`    | `lib//compress/zstd_compress.c` |
|  50.2% |   19,726,376 |     1 | `ZSTD_compressBlock_internal` | `lib//compress/zstd_compress.c` |
|   1.9% |      753,754 |     2 | `ZSTD_XXH64_update`           | `lib//common/xxhash.h`          |
|  <0.1% |           97 |     1 | `ZSTD_compressEnd_public`     | `lib//compress/zstd_compress.c` |

##### `ZSTD_buildSeqStore` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Callee                          | Location                                            |
| -----: | -----------: | ----: | ------------------------------- | --------------------------------------------------- |
| 100.0% |   20,345,061 |     8 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_double_fast.c`                  |
|  86.2% |   17,543,712 |     8 | `ZSTD_compressLiterals`         | `lib//compress/zstd_compress_literals.c`            |
|  <0.1% |          131 |     8 | `__GI_memcpy`                   | `./string/../sysdeps/aarch64/multiarch/../memcpy.S` |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`)

|         % |    Instructions |   Calls | Callee                          | Location                                 |
| --------: | --------------: | ------: | ------------------------------- | ---------------------------------------- |
| 755752.9% | 153,758,392,642 | 122,215 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_compress_internal.h` |
|     62.4% |      12,697,671 |       9 | `ZSTD_compressBlock_doubleFast` | `lib//common/mem.h`                      |
|     <0.1% |             291 |       8 | `ZSTD_buildSeqStore`            | `lib//compress/zstd_compress.c`          |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`)

|         % |    Instructions |   Calls | Callee                          | Location                                 |
| --------: | --------------: | ------: | ------------------------------- | ---------------------------------------- |
| 755733.5% | 153,749,042,904 | 122,214 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_double_fast.c`       |
|    100.0% |      20,344,090 |       8 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_compress_internal.h` |

##### `ZSTD_compressContinue_public` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Callee                            | Location                                 |
| -----: | -----------: | ----: | --------------------------------- | ---------------------------------------- |
| 100.0% |   20,103,424 |     1 | `ZSTD_compressContinue_public`    | `lib//compress/zstd_compress_internal.h` |
| 100.0% |   20,103,383 |     1 | `ZSTD_compress_frameChunk`        | `lib//compress/zstd_compress.c`          |
|  95.4% |   19,170,965 |     1 | `pthread_cond_signal@@GLIBC_2.17` | `./nptl/./nptl/pthread_cond_signal.c`    |
|  <0.1% |           61 |     1 | `ZSTD_writeFrameHeader`           | `lib//compress/zstd_compress.c`          |
|  <0.1% |           42 |     1 | `pthread_mutex_lock@@GLIBC_2.17`  | `./nptl/./nptl/pthread_mutex_lock.c`     |

##### `ZSTD_compressContinue_public` (`lib//compress/zstd_compress_internal.h`)

|      % | Instructions | Calls | Callee                         | Location                        |
| -----: | -----------: | ----: | ------------------------------ | ------------------------------- |
| 100.0% |   20,103,393 |     1 | `ZSTD_compressContinue_public` | `lib//compress/zstd_compress.c` |

##### `ZSTD_compressEnd_public` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Callee                             | Location                                 |
| -----: | -----------: | ----: | ---------------------------------- | ---------------------------------------- |
| 100.0% |   19,170,285 |     1 | `ZSTD_compressEnd_public`          | `lib//compress/zstd_compress_internal.h` |
|  <0.1% |          334 |     1 | `pthread_mutex_unlock@@GLIBC_2.17` | `./nptl/./nptl/pthread_mutex_unlock.c`   |
|  <0.1% |           67 |     1 | `ZSTD_XXH64_digest`                | `lib//common/xxhash.h`                   |
|  <0.1% |           42 |     1 | `pthread_mutex_lock@@GLIBC_2.17`   | `./nptl/./nptl/pthread_mutex_lock.c`     |
|  <0.1% |           14 |     1 | `ZSTD_CCtx_trace`                  | `lib//compress/zstd_compress.c`          |

##### `ZSTD_compressEnd_public` (`lib//compress/zstd_compress_internal.h`)

|      % | Instructions | Calls | Callee                     | Location                        |
| -----: | -----------: | ----: | -------------------------- | ------------------------------- |
| 100.0% |   19,170,267 |     1 | `ZSTD_compress_frameChunk` | `lib//compress/zstd_compress.c` |

##### `ZSTD_encodeSequences` (`lib//compress/zstd_compress_sequences.c`)

|      % | Instructions | Calls | Callee                        | Location                        |
| -----: | -----------: | ----: | ----------------------------- | ------------------------------- |
| 100.0% |   12,118,460 |     8 | `ZSTD_encodeSequences`        | `lib//common/mem.h`             |
|  <0.1% |           88 |     8 | `ZSTD_compressBlock_internal` | `lib//compress/zstd_compress.c` |

##### `ZSTD_encodeSequences` (`lib//common/mem.h`)

|      % | Instructions | Calls | Callee                 | Location                  |
| -----: | -----------: | ----: | ---------------------- | ------------------------- |
| 100.0% |   12,117,580 |     8 | `ZSTD_encodeSequences` | `lib//common/bitstream.h` |

##### `ZSTD_encodeSequences` (`lib//common/bitstream.h`)

|      % | Instructions | Calls | Callee                 | Location                  |
| -----: | -----------: | ----: | ---------------------- | ------------------------- |
| 100.0% |   12,116,788 |     8 | `ZSTD_encodeSequences` | `lib//common/bitstream.h` |

##### `ZSTD_buildSequencesStatistics` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Callee                 | Location                                  |
| -----: | -----------: | ----: | ---------------------- | ----------------------------------------- |
| 267.5% |   12,119,804 |     8 | `ZSTD_encodeSequences` | `lib//compress/zstd_compress_sequences.c` |
|  57.3% |    2,594,477 |     8 | `ZSTD_seqToCodes`      | `lib//compress/zstd_compress.c`           |
|  42.7% |    1,935,918 |     8 | `HIST_countFast_wksp`  | `lib//compress/hist.c`                    |

##### `HIST_count_parallel_wksp` (`lib//compress/hist.c`)

|     % | Instructions | Calls | Callee                  | Location                                            |
| ----: | -----------: | ----: | ----------------------- | --------------------------------------------------- |
| 78.1% |    2,207,086 |    24 | `ZSTD_buildCTable`      | `lib//compress/zstd_compress_sequences.c`           |
| 15.5% |      438,820 |     7 | `HUF_compress_internal` | `lib//compress/huf_compress.c`                      |
|  5.4% |      153,924 |     1 | `HUF_buildCTable_wksp`  | `lib//compress/huf_compress.c`                      |
|  0.4% |       10,816 |    32 | `__GI_memset`           | `./string/../sysdeps/aarch64/nptl/../memset.S`      |
|  0.1% |        1,734 |    31 | `__GI_memmove`          | `./string/../sysdeps/aarch64/multiarch/../memcpy.S` |

##### `ZSTD_seqToCodes` (`lib//compress/zstd_compress.c`)

|     % | Instructions | Calls | Callee            | Location                                 |
| ----: | -----------: | ----: | ----------------- | ---------------------------------------- |
| 52.8% |    1,370,003 |     8 | `ZSTD_seqToCodes` | `lib//compress/zstd_compress_internal.h` |

##### `HIST_countFast_wksp` (`lib//compress/hist.c`)

|      % | Instructions | Calls | Callee                     | Location               |
| -----: | -----------: | ----: | -------------------------- | ---------------------- |
| 200.6% |    3,882,903 |    24 | `HIST_count_parallel_wksp` | `lib//compress/hist.c` |

##### `ZSTD_buildCTable` (`lib//compress/zstd_compress_sequences.c`)

|      % | Instructions | Calls | Callee                | Location                       |
| -----: | -----------: | ----: | --------------------- | ------------------------------ |
| 141.4% |    1,947,201 |    16 | `HIST_countFast_wksp` | `lib//compress/hist.c`         |
|  18.7% |      257,949 |    24 | `FSE_normalizeCount`  | `lib//compress/fse_compress.c` |
|  <0.1% |          624 |    24 | `FSE_optimalTableLog` | `lib//common/bits.h`           |

##### `ZSTD_compressLiterals` (`lib//compress/zstd_compress_literals.c`)

|       % | Instructions | Calls | Callee                        | Location                                            |
| ------: | -----------: | ----: | ----------------------------- | --------------------------------------------------- |
| 1864.8% |   16,650,815 |     8 | `ZSTD_compressBlock_internal` | `lib//compress/zstd_compress.c`                     |
|   99.7% |      890,217 |     8 | `ZSTD_compressLiterals`       | `lib//compress/zstd_compress_literals.c`            |
|   99.7% |      889,993 |     8 | `HUF_compress4X_repeat`       | `lib//compress/huf_compress.c`                      |
|    0.2% |        2,096 |     8 | `__GI_memcpy`                 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S` |

##### `HUF_compress4X_repeat` (`lib//compress/huf_compress.c`)

|      % | Instructions | Calls | Callee                  | Location                                 |
| -----: | -----------: | ----: | ----------------------- | ---------------------------------------- |
| 100.0% |      889,585 |     8 | `HUF_compress_internal` | `lib//compress/huf_compress.c`           |
|  <0.1% |           72 |     8 | `ZSTD_compressLiterals` | `lib//compress/zstd_compress_literals.c` |

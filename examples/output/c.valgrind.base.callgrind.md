# Instruction profile

Recorded 39,556,676 instructions.

| Category |      % | Instructions |
| -------- | -----: | -----------: |
| Ours     | 100.0% |   39,549,377 |
| Native   |  <0.1% |        7,299 |

## Hottest functions

### Self instructions

Functions ranked by instructions recorded directly in the function body, excluding callees.

#### Categories

##### Ours

|     % | Instructions | Function                                          | Location                                            |
| ----: | -----------: | ------------------------------------------------- | --------------------------------------------------- |
| 30.6% |   12,117,184 | `ZSTD_encodeSequences`                            | `lib//common/bitstream.h`                           |
| 29.6% |   11,716,441 | `ZSTD_compressBlock_doubleFast`                   | `lib//compress/zstd_double_fast.c`                  |
| 21.1% |    8,326,805 | `ZSTD_compressBlock_doubleFast`                   | `lib//compress/zstd_compress_internal.h`            |
|  5.0% |    1,959,721 | `HIST_count_parallel_wksp`                        | `lib//compress/hist.c`                              |
|  3.8% |    1,507,463 | `ZSTD_XXH64_update`                               | `lib//common/xxhash.h`                              |
|  3.5% |    1,370,282 | `ZSTD_seqToCodes`                                 | `lib//compress/zstd_compress_internal.h`            |
|  3.1% |    1,224,426 | `ZSTD_seqToCodes`                                 | `lib//compress/zstd_compress.c`                     |
|  1.1% |      428,664 | `HUF_compress1X_usingCTable_internal.constprop.0` | `lib//compress/huf_compress.c`                      |
|  0.6% |      224,938 | `FSE_buildCTable_wksp`                            | `lib//compress/fse_compress.c`                      |
|  0.5% |      183,023 | `__GI_memcpy`                                     | `./string/../sysdeps/aarch64/multiarch/../memcpy.S` |
|  0.2% |       98,005 | `HUF_buildCTable_wksp`                            | `lib//compress/huf_compress.c`                      |
|  0.2% |       76,590 | `__GI_memset`                                     | `./string/../sysdeps/aarch64/nptl/../memset.S`      |
|  0.1% |       28,664 | `do_lookup_x`                                     | `./elf/./elf/dl-lookup.c`                           |
|  0.1% |       24,175 | `FSE_writeNCount_generic`                         | `lib//compress/fse_compress.c`                      |
|  0.1% |       22,361 | `_dl_lookup_symbol_x`                             | `./elf/./elf/dl-lookup.c`                           |
| <0.1% |       19,193 | `FSE_compress_usingCTable_generic`                | `lib//compress/fse_compress.c`                      |
| <0.1% |       16,343 | `FSE_normalizeCount`                              | `lib//compress/fse_compress.c`                      |
| <0.1% |       13,490 | `HUF_writeCTable_wksp`                            | `lib//compress/huf_compress.c`                      |
| <0.1% |       12,385 | `_int_malloc`                                     | `./malloc/./malloc/malloc.c`                        |
| <0.1% |       12,356 | `_dl_relocate_object`                             | `./elf/../sysdeps/generic/ldsodefs.h`               |

#### Lines

Lines ranked by contribution to each function's self instructions.

##### `ZSTD_encodeSequences` (`lib//common/bitstream.h`)

|     % | Instructions | Location                      |
| ----: | -----------: | ----------------------------- |
| 18.2% |    2,203,122 | `lib//common/bitstream.h:172` |
| 11.1% |    1,346,327 | `lib//common/bitstream.h:185` |
|  6.1% |      734,358 | `lib//common/bitstream.h:186` |
|  3.0% |      367,243 | `lib//common/bitstream.h:229` |
|  1.0% |      122,438 | `lib//common/bitstream.h:226` |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`)

|    % | Instructions | Location                               |
| ---: | -----------: | -------------------------------------- |
| 6.3% |      733,310 | `lib//compress/zstd_double_fast.c:298` |
| 4.2% |      488,664 | `lib//compress/zstd_double_fast.c:173` |
| 3.5% |      410,026 | `lib//compress/zstd_double_fast.c:259` |
| 3.1% |      366,512 | `lib//compress/zstd_double_fast.c:185` |
| 3.0% |      350,067 | `lib//compress/zstd_double_fast.c:278` |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`)

|    % | Instructions | Location                                     |
| ---: | -----------: | -------------------------------------------- |
| 5.7% |      471,471 | `lib//compress/zstd_compress_internal.h:756` |
| 4.4% |      367,878 | `lib//compress/zstd_compress_internal.h:804` |
| 4.4% |      367,386 | `lib//compress/zstd_compress_internal.h:819` |
| 2.9% |      244,346 | `lib//compress/zstd_compress_internal.h:754` |
| 2.3% |      188,952 | `lib//compress/zstd_compress_internal.h:752` |

##### `HIST_count_parallel_wksp` (`lib//compress/hist.c`)

|     % | Instructions | Location                  |
| ----: | -----------: | ------------------------- |
| 99.8% |    1,955,857 | `lib//compress/hist.c:88` |
| <0.1% |          160 | `lib//compress/hist.c:71` |
| <0.1% |           96 | `lib//compress/hist.c:74` |
| <0.1% |           64 | `lib//compress/hist.c:83` |

##### `ZSTD_XXH64_update` (`lib//common/xxhash.h`)

|     % | Instructions | Location                    |
| ----: | -----------: | --------------------------- |
| 34.8% |      524,300 | `lib//common/xxhash.h:3329` |
| 17.4% |      262,159 | `lib//common/xxhash.h:3331` |
| 17.4% |      262,144 | `lib//common/xxhash.h:3330` |
|  8.7% |      131,081 | `lib//common/xxhash.h:3559` |
|  8.7% |      131,081 | `lib//common/xxhash.h:3560` |

##### `ZSTD_seqToCodes` (`lib//compress/zstd_compress_internal.h`)

|     % | Instructions | Location                                     |
| ----: | -----------: | -------------------------------------------- |
| 17.9% |      244,856 | `lib//compress/zstd_compress_internal.h:545` |

##### `ZSTD_seqToCodes` (`lib//compress/zstd_compress.c`)

|     % | Instructions | Location                             |
| ----: | -----------: | ------------------------------------ |
| 30.0% |      367,511 | `lib//compress/zstd_compress.c:2691` |
| 20.0% |      244,810 | `lib//compress/zstd_compress.c:2692` |
| 20.0% |      244,808 | `lib//compress/zstd_compress.c:2695` |
| <0.1% |           32 | `lib//compress/zstd_compress.c:2687` |
| <0.1% |            8 | `lib//compress/zstd_compress.c:2686` |

##### `HUF_compress1X_usingCTable_internal.constprop.0` (`lib//compress/huf_compress.c`)

|     % | Instructions | Location                           |
| ----: | -----------: | ---------------------------------- |
| 29.6% |      127,056 | `lib//compress/huf_compress.c:987` |
| 13.3% |       57,219 | `lib//compress/huf_compress.c:891` |
| 13.3% |       57,187 | `lib//compress/huf_compress.c:886` |
| 11.9% |       50,847 | `lib//compress/huf_compress.c:887` |
|  6.0% |       25,538 | `lib//compress/huf_compress.c:943` |

##### `FSE_buildCTable_wksp` (`lib//compress/fse_compress.c`)

|     % | Instructions | Location                           |
| ----: | -----------: | ---------------------------------- |
| 36.4% |       81,944 | `lib//compress/fse_compress.c:172` |
| 14.3% |       32,108 | `lib//compress/fse_compress.c:160` |
| 13.7% |       30,816 | `lib//compress/fse_compress.c:170` |
|  9.2% |       20,730 | `lib//compress/fse_compress.c:163` |
|  8.9% |       19,980 | `lib//compress/fse_compress.c:162` |

##### `__GI_memcpy` (`./string/../sysdeps/aarch64/multiarch/../memcpy.S`)

|     % | Instructions | Location                                                |
| ----: | -----------: | ------------------------------------------------------- |
| 12.4% |       22,779 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:166` |
| 12.4% |       22,779 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:167` |
| 12.4% |       22,779 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:168` |
| 12.4% |       22,779 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:169` |
| 12.4% |       22,779 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:170` |

##### `HUF_buildCTable_wksp` (`lib//compress/huf_compress.c`)

|    % | Instructions | Location                           |
| ---: | -----------: | ---------------------------------- |
| 6.3% |        6,178 | `lib//compress/huf_compress.c:533` |
| 6.2% |        6,112 | `lib//compress/huf_compress.c:640` |
| 5.4% |        5,336 | `lib//compress/huf_compress.c:702` |
| 5.4% |        5,305 | `lib//compress/huf_compress.c:701` |
| 5.2% |        5,135 | `lib//compress/huf_compress.c:648` |

##### `__GI_memset` (`./string/../sysdeps/aarch64/nptl/../memset.S`)

|     % | Instructions | Location                                           |
| ----: | -----------: | -------------------------------------------------- |
| 19.6% |       15,041 | `./string/../sysdeps/aarch64/nptl/../memset.S:131` |
| 19.6% |       15,041 | `./string/../sysdeps/aarch64/nptl/../memset.S:132` |
| 19.6% |       15,041 | `./string/../sysdeps/aarch64/nptl/../memset.S:133` |
| 19.6% |       15,041 | `./string/../sysdeps/aarch64/nptl/../memset.S:134` |
| 19.6% |       15,041 | `./string/../sysdeps/aarch64/nptl/../memset.S:135` |

##### `do_lookup_x` (`./elf/./elf/dl-lookup.c`)

|    % | Instructions | Location                      |
| ---: | -----------: | ----------------------------- |
| 7.8% |        2,244 | `./elf/./elf/dl-lookup.c:348` |
| 5.8% |        1,664 | `./elf/./elf/dl-lookup.c:388` |
| 5.8% |        1,664 | `./elf/./elf/dl-lookup.c:403` |
| 5.7% |        1,624 | `./elf/./elf/dl-lookup.c:374` |
| 5.3% |        1,524 | `./elf/./elf/dl-lookup.c:416` |

##### `FSE_writeNCount_generic` (`lib//compress/fse_compress.c`)

|     % | Instructions | Location                           |
| ----: | -----------: | ---------------------------------- |
| 10.5% |        2,527 | `lib//compress/fse_compress.c:302` |
|  8.6% |        2,082 | `lib//compress/fse_compress.c:260` |
|  8.2% |        1,986 | `lib//compress/fse_compress.c:293` |
|  8.2% |        1,986 | `lib//compress/fse_compress.c:296` |
|  8.2% |        1,986 | `lib//compress/fse_compress.c:299` |

##### `_dl_lookup_symbol_x` (`./elf/./elf/dl-lookup.c`)

|    % | Instructions | Location                      |
| ---: | -----------: | ----------------------------- |
| 8.9% |        1,980 | `./elf/./elf/dl-lookup.c:756` |
| 6.5% |        1,452 | `./elf/./elf/dl-lookup.c:776` |
| 4.1% |          924 | `./elf/./elf/dl-lookup.c:762` |
| 3.5% |          792 | `./elf/./elf/dl-lookup.c:768` |
| 1.2% |          264 | `./elf/./elf/dl-lookup.c:758` |

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
| 25.4% |        4,146 | `lib//compress/fse_compress.c:487` |
| 12.9% |        2,105 | `lib//compress/fse_compress.c:486` |
| 12.7% |        2,073 | `lib//compress/fse_compress.c:488` |
|  7.6% |        1,244 | `lib//compress/fse_compress.c:489` |
|  6.7% |        1,095 | `lib//compress/fse_compress.c:498` |

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
| 6.5% |          810 | `./malloc/./malloc/malloc.c:1348` |
| 6.4% |          798 | `./malloc/./malloc/malloc.c:3980` |
| 5.6% |          696 | `./malloc/./malloc/malloc.c:4265` |
| 4.3% |          534 | `./malloc/./malloc/malloc.c:4268` |
| 4.3% |          534 | `./malloc/./malloc/malloc.c:4405` |

##### `_dl_relocate_object` (`./elf/../sysdeps/generic/ldsodefs.h`)

|    % | Instructions | Location                                  |
| ---: | -----------: | ----------------------------------------- |
| 0.1% |           11 | `./elf/../sysdeps/generic/ldsodefs.h:81`  |
| 0.1% |            9 | `./elf/../sysdeps/generic/ldsodefs.h:142` |

### Total instructions

Functions ranked by total instructions recorded in the function and all its callees. Calls within a recursion cycle are excluded from totals, since they re-count the same work.

#### Categories

##### Ours

|     % | Instructions | Function                        | Location                                  |
| ----: | -----------: | ------------------------------- | ----------------------------------------- |
| 96.9% |   38,347,827 | `ZSTD_compress_frameChunk`      | `lib//compress/zstd_compress.c`           |
| 50.7% |   20,044,985 | `ZSTD_buildSeqStore`            | `lib//compress/zstd_compress.c`           |
| 50.7% |   20,043,888 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_double_fast.c`        |
| 50.7% |   20,043,157 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_compress_internal.h`  |
| 49.8% |   19,696,431 | `ZSTD_compressContinue_public`  | `lib//compress/zstd_compress.c`           |
| 49.8% |   19,696,318 | `ZSTD_compressContinue_public`  | `lib//compress/zstd_compress_internal.h`  |
| 47.2% |   18,651,635 | `ZSTD_compressEnd_public`       | `lib//compress/zstd_compress.c`           |
| 47.2% |   18,651,568 | `ZSTD_compressEnd_public`       | `lib//compress/zstd_compress_internal.h`  |
| 30.6% |   12,119,320 | `ZSTD_encodeSequences`          | `lib//compress/zstd_compress_sequences.c` |
| 30.6% |   12,118,064 | `ZSTD_encodeSequences`          | `lib//common/mem.h`                       |
| 30.6% |   12,117,184 | `ZSTD_encodeSequences`          | `lib//common/bitstream.h`                 |
| 11.5% |    4,530,626 | `ZSTD_buildSequencesStatistics` | `lib//compress/zstd_compress.c`           |
|  7.2% |    2,829,254 | `HIST_count_parallel_wksp`      | `lib//compress/hist.c`                    |
|  6.6% |    2,594,708 | `ZSTD_seqToCodes`               | `lib//compress/zstd_compress.c`           |
|  4.9% |    1,935,430 | `HIST_countFast_wksp`           | `lib//compress/hist.c`                    |
|  3.8% |    1,507,463 | `ZSTD_XXH64_update`             | `lib//common/xxhash.h`                    |
|  3.5% |    1,376,670 | `ZSTD_buildCTable`              | `lib//compress/zstd_compress_sequences.c` |
|  3.5% |    1,370,282 | `ZSTD_seqToCodes`               | `lib//compress/zstd_compress_internal.h`  |
|  2.3% |      897,920 | `ZSTD_compressLiterals`         | `lib//compress/zstd_compress_literals.c`  |
|  2.3% |      894,944 | `HUF_compress4X_repeat`         | `lib//compress/huf_compress.c`            |

#### Callers

Callers ranked by the instructions recorded in each function and its callees during calls from that caller. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `ZSTD_compress_frameChunk` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                         | Location                                 |
| -----: | -----------: | ----: | ------------------------------ | ---------------------------------------- |
| 144.1% |   55,245,537 |     8 | `ZSTD_compressBlock_internal`  | `lib//compress/zstd_compress.c`          |
|  98.0% |   37,593,868 |     2 | `ZSTD_compress_frameChunk`     | `lib//compress/zstd_compress.c`          |
|  51.4% |   19,696,277 |     1 | `ZSTD_compressContinue_public` | `lib//compress/zstd_compress.c`          |
|  48.6% |   18,651,550 |     1 | `ZSTD_compressEnd_public`      | `lib//compress/zstd_compress_internal.h` |

##### `ZSTD_buildSeqStore` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                          | Location                           |
| -----: | -----------: | ----: | ------------------------------- | ---------------------------------- |
| 187.5% |   37,593,067 |     8 | `ZSTD_compressBlock_internal`   | `lib//compress/zstd_compress.c`    |
|  <0.1% |          291 |     8 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_double_fast.c` |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`)

|         % |    Instructions |   Calls | Caller                          | Location                                 |
| --------: | --------------: | ------: | ------------------------------- | ---------------------------------------- |
| 755503.0% | 151,432,182,725 | 122,208 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_compress_internal.h` |
|    100.0% |      20,043,888 |       8 | `ZSTD_buildSeqStore`            | `lib//compress/zstd_compress.c`          |
|     62.5% |      12,527,271 |       9 | `ZSTD_compressBlock_doubleFast` | `lib//common/mem.h`                      |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`)

|         % |    Instructions |   Calls | Caller                          | Location                                 |
| --------: | --------------: | ------: | ------------------------------- | ---------------------------------------- |
| 755572.1% | 151,440,509,530 | 122,209 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_double_fast.c`       |
|    100.0% |      20,042,901 |       8 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_compress_internal.h` |

##### `ZSTD_compressContinue_public` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                         | Location                                 |
| -----: | -----------: | ----: | ------------------------------ | ---------------------------------------- |
| 194.7% |   38,348,721 |     1 | `ZSTDMT_compressionJob`        | `lib//compress/zstdmt_compress.c`        |
| 100.0% |   19,696,287 |     1 | `ZSTD_compressContinue_public` | `lib//compress/zstd_compress_internal.h` |

##### `ZSTD_compressContinue_public` (`lib//compress/zstd_compress_internal.h`)

|      % | Instructions | Calls | Caller                         | Location                        |
| -----: | -----------: | ----: | ------------------------------ | ------------------------------- |
| 100.0% |   19,696,318 |     1 | `ZSTD_compressContinue_public` | `lib//compress/zstd_compress.c` |

##### `ZSTD_compressEnd_public` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                           | Location                               |
| -----: | -----------: | ----: | -------------------------------- | -------------------------------------- |
| 100.0% |   18,652,011 |     1 | `__pthread_mutex_unlock_usercnt` | `./nptl/./nptl/pthread_mutex_unlock.c` |
|  <0.1% |           97 |     1 | `ZSTD_compress_frameChunk`       | `lib//compress/zstd_compress.c`        |

##### `ZSTD_compressEnd_public` (`lib//compress/zstd_compress_internal.h`)

|      % | Instructions | Calls | Caller                    | Location                        |
| -----: | -----------: | ----: | ------------------------- | ------------------------------- |
| 100.0% |   18,651,568 |     1 | `ZSTD_compressEnd_public` | `lib//compress/zstd_compress.c` |

##### `ZSTD_encodeSequences` (`lib//compress/zstd_compress_sequences.c`)

|      % | Instructions | Calls | Caller                          | Location                        |
| -----: | -----------: | ----: | ------------------------------- | ------------------------------- |
| 100.0% |   12,119,408 |     8 | `ZSTD_buildSequencesStatistics` | `lib//compress/zstd_compress.c` |

##### `ZSTD_encodeSequences` (`lib//common/mem.h`)

|      % | Instructions | Calls | Caller                 | Location                                  |
| -----: | -----------: | ----: | ---------------------- | ----------------------------------------- |
| 100.0% |   12,118,064 |     8 | `ZSTD_encodeSequences` | `lib//compress/zstd_compress_sequences.c` |

##### `ZSTD_encodeSequences` (`lib//common/bitstream.h`)

|      % | Instructions | Calls | Caller                 | Location                  |
| -----: | -----------: | ----: | ---------------------- | ------------------------- |
| 100.0% |   12,117,184 |     8 | `ZSTD_encodeSequences` | `lib//common/mem.h`       |
| 100.0% |   12,116,392 |     8 | `ZSTD_encodeSequences` | `lib//common/bitstream.h` |

##### `ZSTD_buildSequencesStatistics` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                        | Location                        |
| -----: | -----------: | ----: | ----------------------------- | ------------------------------- |
| 367.5% |   16,650,034 |     8 | `ZSTD_compressBlock_internal` | `lib//compress/zstd_compress.c` |

##### `HIST_count_parallel_wksp` (`lib//compress/hist.c`)

|      % | Instructions | Calls | Caller                | Location               |
| -----: | -----------: | ----: | --------------------- | ---------------------- |
| 137.2% |    3,881,646 |    24 | `HIST_countFast_wksp` | `lib//compress/hist.c` |
|  31.6% |      893,896 |     8 | `HIST_count_wksp`     | `lib//compress/hist.c` |

##### `ZSTD_seqToCodes` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Caller                          | Location                        |
| -----: | -----------: | ----: | ------------------------------- | ------------------------------- |
| 100.0% |    2,594,708 |     8 | `ZSTD_buildSequencesStatistics` | `lib//compress/zstd_compress.c` |

##### `HIST_countFast_wksp` (`lib//compress/hist.c`)

|      % | Instructions | Calls | Caller                          | Location                                  |
| -----: | -----------: | ----: | ------------------------------- | ----------------------------------------- |
| 100.6% |    1,946,432 |    16 | `ZSTD_buildCTable`              | `lib//compress/zstd_compress_sequences.c` |
| 100.0% |    1,935,430 |     8 | `ZSTD_buildSequencesStatistics` | `lib//compress/zstd_compress.c`           |

##### `ZSTD_XXH64_update` (`lib//common/xxhash.h`)

|       % | Instructions | Calls | Caller                                 | Location                        |
| ------: | -----------: | ----: | -------------------------------------- | ------------------------------- |
| 2594.0% |   39,103,207 |     1 | `ZSTD_compressBegin_advanced_internal` | `lib//compress/zstd_compress.c` |
|   50.0% |      753,754 |     2 | `ZSTD_compress_frameChunk`             | `lib//compress/zstd_compress.c` |

##### `ZSTD_buildCTable` (`lib//compress/zstd_compress_sequences.c`)

|      % | Instructions | Calls | Caller                     | Location                       |
| -----: | -----------: | ----: | -------------------------- | ------------------------------ |
| 160.2% |    2,205,964 |    24 | `HIST_count_parallel_wksp` | `lib//compress/hist.c`         |
|  <0.1% |          120 |    24 | `FSE_buildCTable_wksp`     | `lib//compress/fse_compress.c` |

##### `ZSTD_seqToCodes` (`lib//compress/zstd_compress_internal.h`)

|      % | Instructions | Calls | Caller            | Location                        |
| -----: | -----------: | ----: | ----------------- | ------------------------------- |
| 100.0% |    1,370,282 |     8 | `ZSTD_seqToCodes` | `lib//compress/zstd_compress.c` |

##### `ZSTD_compressLiterals` (`lib//compress/zstd_compress_literals.c`)

|       % | Instructions | Calls | Caller                  | Location                                 |
| ------: | -----------: | ----: | ----------------------- | ---------------------------------------- |
| 1954.3% |   17,548,082 |     8 | `ZSTD_buildSeqStore`    | `lib//compress/zstd_compress.c`          |
|   99.7% |      895,240 |     8 | `ZSTD_compressLiterals` | `lib//compress/zstd_compress_literals.c` |
|   <0.1% |           72 |     8 | `HUF_compress4X_repeat` | `lib//compress/huf_compress.c`           |

##### `HUF_compress4X_repeat` (`lib//compress/huf_compress.c`)

|      % | Instructions | Calls | Caller                  | Location                                 |
| -----: | -----------: | ----: | ----------------------- | ---------------------------------------- |
| 100.0% |      895,016 |     8 | `ZSTD_compressLiterals` | `lib//compress/zstd_compress_literals.c` |

#### Callees

Callees ranked by contribution to each function's total instructions. Percentages are of the function's total and can exceed 100% for calls within a recursion cycle.

##### `ZSTD_compress_frameChunk` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Callee                         | Location                        |
| -----: | -----------: | ----: | ------------------------------ | ------------------------------- |
| 242.1% |   92,838,852 |     8 | `ZSTD_compressBlock_internal`  | `lib//compress/zstd_compress.c` |
|  98.0% |   37,593,868 |     2 | `ZSTD_compress_frameChunk`     | `lib//compress/zstd_compress.c` |
|   2.0% |      753,754 |     2 | `ZSTD_XXH64_update`            | `lib//common/xxhash.h`          |
|  <0.1% |           97 |     1 | `ZSTD_compressEnd_public`      | `lib//compress/zstd_compress.c` |
|  <0.1% |           48 |     8 | `ZSTD_overflowCorrectIfNeeded` | `lib//compress/zstd_compress.c` |

##### `ZSTD_buildSeqStore` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Callee                          | Location                                            |
| -----: | -----------: | ----: | ------------------------------- | --------------------------------------------------- |
| 100.0% |   20,043,888 |     8 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_double_fast.c`                  |
|  87.5% |   17,548,082 |     8 | `ZSTD_compressLiterals`         | `lib//compress/zstd_compress_literals.c`            |
|  <0.1% |          131 |     8 | `__GI_memcpy`                   | `./string/../sysdeps/aarch64/multiarch/../memcpy.S` |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`)

|         % |    Instructions |   Calls | Callee                          | Location                                 |
| --------: | --------------: | ------: | ------------------------------- | ---------------------------------------- |
| 755544.6% | 151,440,509,530 | 122,209 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_compress_internal.h` |
|     62.5% |      12,527,622 |       9 | `ZSTD_compressBlock_doubleFast` | `lib//common/mem.h`                      |
|     <0.1% |             291 |       8 | `ZSTD_buildSeqStore`            | `lib//compress/zstd_compress.c`          |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`)

|         % |    Instructions |   Calls | Callee                          | Location                                 |
| --------: | --------------: | ------: | ------------------------------- | ---------------------------------------- |
| 755530.6% | 151,432,182,725 | 122,208 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_double_fast.c`       |
|    100.0% |      20,042,901 |       8 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_compress_internal.h` |

##### `ZSTD_compressContinue_public` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Callee                            | Location                                 |
| -----: | -----------: | ----: | --------------------------------- | ---------------------------------------- |
| 100.0% |   19,696,318 |     1 | `ZSTD_compressContinue_public`    | `lib//compress/zstd_compress_internal.h` |
| 100.0% |   19,696,277 |     1 | `ZSTD_compress_frameChunk`        | `lib//compress/zstd_compress.c`          |
|  94.7% |   18,652,248 |     1 | `pthread_cond_signal@@GLIBC_2.17` | `./nptl/./nptl/pthread_cond_signal.c`    |
|  <0.1% |           61 |     1 | `ZSTD_writeFrameHeader`           | `lib//compress/zstd_compress.c`          |
|  <0.1% |           42 |     1 | `pthread_mutex_lock@@GLIBC_2.17`  | `./nptl/./nptl/pthread_mutex_lock.c`     |

##### `ZSTD_compressContinue_public` (`lib//compress/zstd_compress_internal.h`)

|      % | Instructions | Calls | Callee                         | Location                        |
| -----: | -----------: | ----: | ------------------------------ | ------------------------------- |
| 100.0% |   19,696,287 |     1 | `ZSTD_compressContinue_public` | `lib//compress/zstd_compress.c` |

##### `ZSTD_compressEnd_public` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Callee                             | Location                                 |
| -----: | -----------: | ----: | ---------------------------------- | ---------------------------------------- |
| 100.0% |   18,651,568 |     1 | `ZSTD_compressEnd_public`          | `lib//compress/zstd_compress_internal.h` |
|  <0.1% |          334 |     1 | `pthread_mutex_unlock@@GLIBC_2.17` | `./nptl/./nptl/pthread_mutex_unlock.c`   |
|  <0.1% |           67 |     1 | `ZSTD_XXH64_digest`                | `lib//common/xxhash.h`                   |
|  <0.1% |           42 |     1 | `pthread_mutex_lock@@GLIBC_2.17`   | `./nptl/./nptl/pthread_mutex_lock.c`     |
|  <0.1% |           14 |     1 | `ZSTD_CCtx_trace`                  | `lib//compress/zstd_compress.c`          |

##### `ZSTD_compressEnd_public` (`lib//compress/zstd_compress_internal.h`)

|      % | Instructions | Calls | Callee                     | Location                        |
| -----: | -----------: | ----: | -------------------------- | ------------------------------- |
| 100.0% |   18,651,550 |     1 | `ZSTD_compress_frameChunk` | `lib//compress/zstd_compress.c` |

##### `ZSTD_encodeSequences` (`lib//compress/zstd_compress_sequences.c`)

|      % | Instructions | Calls | Callee                        | Location                        |
| -----: | -----------: | ----: | ----------------------------- | ------------------------------- |
| 100.0% |   12,118,064 |     8 | `ZSTD_encodeSequences`        | `lib//common/mem.h`             |
|  <0.1% |           88 |     8 | `ZSTD_compressBlock_internal` | `lib//compress/zstd_compress.c` |

##### `ZSTD_encodeSequences` (`lib//common/mem.h`)

|      % | Instructions | Calls | Callee                 | Location                  |
| -----: | -----------: | ----: | ---------------------- | ------------------------- |
| 100.0% |   12,117,184 |     8 | `ZSTD_encodeSequences` | `lib//common/bitstream.h` |

##### `ZSTD_encodeSequences` (`lib//common/bitstream.h`)

|      % | Instructions | Calls | Callee                 | Location                  |
| -----: | -----------: | ----: | ---------------------- | ------------------------- |
| 100.0% |   12,116,392 |     8 | `ZSTD_encodeSequences` | `lib//common/bitstream.h` |

##### `ZSTD_buildSequencesStatistics` (`lib//compress/zstd_compress.c`)

|      % | Instructions | Calls | Callee                 | Location                                  |
| -----: | -----------: | ----: | ---------------------- | ----------------------------------------- |
| 267.5% |   12,119,408 |     8 | `ZSTD_encodeSequences` | `lib//compress/zstd_compress_sequences.c` |
|  57.3% |    2,594,708 |     8 | `ZSTD_seqToCodes`      | `lib//compress/zstd_compress.c`           |
|  42.7% |    1,935,430 |     8 | `HIST_countFast_wksp`  | `lib//compress/hist.c`                    |

##### `HIST_count_parallel_wksp` (`lib//compress/hist.c`)

|     % | Instructions | Calls | Callee                  | Location                                            |
| ----: | -----------: | ----: | ----------------------- | --------------------------------------------------- |
| 78.0% |    2,205,964 |    24 | `ZSTD_buildCTable`      | `lib//compress/zstd_compress_sequences.c`           |
| 15.6% |      441,661 |     7 | `HUF_compress_internal` | `lib//compress/huf_compress.c`                      |
|  5.4% |      153,989 |     1 | `HUF_buildCTable_wksp`  | `lib//compress/huf_compress.c`                      |
|  0.4% |       10,816 |    32 | `__GI_memset`           | `./string/../sysdeps/aarch64/nptl/../memset.S`      |
|  0.1% |        1,734 |    31 | `__GI_memmove`          | `./string/../sysdeps/aarch64/multiarch/../memcpy.S` |

##### `ZSTD_seqToCodes` (`lib//compress/zstd_compress.c`)

|     % | Instructions | Calls | Callee            | Location                                 |
| ----: | -----------: | ----: | ----------------- | ---------------------------------------- |
| 52.8% |    1,370,282 |     8 | `ZSTD_seqToCodes` | `lib//compress/zstd_compress_internal.h` |

##### `HIST_countFast_wksp` (`lib//compress/hist.c`)

|      % | Instructions | Calls | Callee                     | Location               |
| -----: | -----------: | ----: | -------------------------- | ---------------------- |
| 200.6% |    3,881,646 |    24 | `HIST_count_parallel_wksp` | `lib//compress/hist.c` |

##### `ZSTD_XXH64_update` (`lib//common/xxhash.h`)

|       % | Instructions | Calls | Callee                  | Location                          |
| ------: | -----------: | ----: | ----------------------- | --------------------------------- |
| 2544.0% |   38,349,498 |     1 | `ZSTDMT_compressionJob` | `lib//compress/zstdmt_compress.c` |

##### `ZSTD_buildCTable` (`lib//compress/zstd_compress_sequences.c`)

|      % | Instructions | Calls | Callee                | Location                       |
| -----: | -----------: | ----: | --------------------- | ------------------------------ |
| 141.4% |    1,946,432 |    16 | `HIST_countFast_wksp` | `lib//compress/hist.c`         |
|  18.7% |      257,596 |    24 | `FSE_normalizeCount`  | `lib//compress/fse_compress.c` |
|  <0.1% |          624 |    24 | `FSE_optimalTableLog` | `lib//common/bits.h`           |

##### `ZSTD_compressLiterals` (`lib//compress/zstd_compress_literals.c`)

|       % | Instructions | Calls | Callee                        | Location                                            |
| ------: | -----------: | ----: | ----------------------------- | --------------------------------------------------- |
| 1854.3% |   16,650,162 |     8 | `ZSTD_compressBlock_internal` | `lib//compress/zstd_compress.c`                     |
|   99.7% |      895,240 |     8 | `ZSTD_compressLiterals`       | `lib//compress/zstd_compress_literals.c`            |
|   99.7% |      895,016 |     8 | `HUF_compress4X_repeat`       | `lib//compress/huf_compress.c`                      |
|    0.2% |        2,096 |     8 | `__GI_memcpy`                 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S` |

##### `HUF_compress4X_repeat` (`lib//compress/huf_compress.c`)

|      % | Instructions | Calls | Callee                  | Location                                 |
| -----: | -----------: | ----: | ----------------------- | ---------------------------------------- |
| 100.0% |      894,608 |     8 | `HUF_compress_internal` | `lib//compress/huf_compress.c`           |
|  <0.1% |           72 |     8 | `ZSTD_compressLiterals` | `lib//compress/zstd_compress_literals.c` |

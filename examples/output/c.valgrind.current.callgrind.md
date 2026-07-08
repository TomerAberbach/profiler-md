# Instructions profile

Recorded 39,558,041 instructions over 11,510 samples (3,436.841 instructions per sample).

| Category   |      % |   Instructions | Samples |
| ---------- | -----: | -------------: | ------: |
| ours       | 100.0% | 39,552,885.769 |  11,284 |
| stdlib     |  <0.1% |      5,100.232 |     196 |
| below main |  <0.1% |             55 |      30 |

## Hottest functions

### Self instructions

Functions ranked by instructions recorded directly in the function body, excluding callees.

|     % |   Instructions | Samples | Function                                          | Location                                            |
| ----: | -------------: | ------: | ------------------------------------------------- | --------------------------------------------------- |
| 30.6% | 12,117,015.806 |      69 | `ZSTD_encodeSequences`                            | `lib//common/bitstream.h`                           |
| 29.6% | 11,716,278.368 |     177 | `ZSTD_compressBlock_doubleFast`                   | `lib//compress/zstd_double_fast.c`                  |
| 21.0% |  8,326,689.419 |     105 | `ZSTD_compressBlock_doubleFast`                   | `lib//compress/zstd_compress_internal.h`            |
|  4.9% |  1,957,387.169 |      41 | `HIST_count_parallel_wksp`                        | `lib//compress/hist.c`                              |
|  3.8% |  1,507,442.075 |      91 | `ZSTD_XXH64_update`                               | `lib//common/xxhash.h`                              |
|  3.5% |   1,370,262.98 |       5 | `ZSTD_seqToCodes`                                 | `lib//compress/zstd_compress_internal.h`            |
|  3.1% |  1,224,409.004 |      21 | `ZSTD_seqToCodes`                                 | `lib//compress/zstd_compress.c`                     |
|  1.1% |    424,787.301 |     182 | `HUF_compress1X_usingCTable_internal.constprop.0` | `lib//compress/huf_compress.c`                      |
|  0.6% |     224,484.44 |     148 | `FSE_buildCTable_wksp`                            | `lib//compress/fse_compress.c`                      |
|  0.5% |    182,185.276 |     181 | `__GI_memcpy`                                     | `./string/../sysdeps/aarch64/multiarch/../memcpy.S` |
|  0.2% |     97,118.674 |     214 | `HUF_buildCTable_wksp`                            | `lib//compress/huf_compress.c`                      |
|  0.2% |     75,776.373 |     124 | `__GI_memset`                                     | `./string/../sysdeps/aarch64/nptl/../memset.S`      |
|  0.1% |     28,842.067 |     101 | `do_lookup_x`                                     | `./elf/./elf/dl-lookup.c`                           |
|  0.1% |     24,109.942 |     179 | `FSE_writeNCount_generic`                         | `lib//compress/fse_compress.c`                      |
|  0.1% |      22,360.69 |      72 | `_dl_lookup_symbol_x`                             | `./elf/./elf/dl-lookup.c`                           |
| <0.1% |     18,746.416 |      76 | `HUF_writeCTable_wksp`                            | `lib//compress/huf_compress.c`                      |
| <0.1% |     17,288.583 |      16 | `FSE_compress_usingCTable_generic`                | `lib//compress/fse_compress.c`                      |
| <0.1% |     16,299.019 |     114 | `FSE_normalizeCount`                              | `lib//compress/fse_compress.c`                      |
| <0.1% |      12,424.27 |     213 | `_int_malloc`                                     | `./malloc/./malloc/malloc.c`                        |
| <0.1% |     12,355.828 |       9 | `_dl_relocate_object`                             | `./elf/../sysdeps/generic/ldsodefs.h`               |

#### Lines

Lines ranked by contribution to each function's self instructions.

##### `ZSTD_encodeSequences` (`lib//common/bitstream.h`)

|     % |  Instructions | Samples | Location                      |
| ----: | ------------: | ------: | ----------------------------- |
| 18.2% | 2,203,091.419 |       6 | `lib//common/bitstream.h:172` |
| 11.1% | 1,346,308.312 |       6 | `lib//common/bitstream.h:185` |
|  6.1% |   734,347.807 |       6 | `lib//common/bitstream.h:186` |
|  3.0% |   367,237.902 |       6 | `lib//common/bitstream.h:229` |
|  1.0% |     122,436.3 |       6 | `lib//common/bitstream.h:226` |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`)

|    % | Instructions | Samples | Location                               |
| ---: | -----------: | ------: | -------------------------------------- |
| 6.3% |  733,299.821 |       3 | `lib//compress/zstd_double_fast.c:298` |
| 4.2% |  488,657.217 |       3 | `lib//compress/zstd_double_fast.c:173` |
| 3.5% |  410,020.309 |       3 | `lib//compress/zstd_double_fast.c:259` |
| 3.1% |  366,506.913 |       3 | `lib//compress/zstd_double_fast.c:185` |
| 3.0% |  350,062.141 |       3 | `lib//compress/zstd_double_fast.c:278` |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`)

|    % | Instructions | Samples | Location                                     |
| ---: | -----------: | ------: | -------------------------------------------- |
| 5.7% |  471,464.456 |       3 | `lib//compress/zstd_compress_internal.h:756` |
| 4.4% |  367,872.894 |       6 | `lib//compress/zstd_compress_internal.h:804` |
| 4.4% |    367,380.9 |       6 | `lib//compress/zstd_compress_internal.h:819` |
| 2.9% |  244,342.608 |       3 | `lib//compress/zstd_compress_internal.h:754` |
| 2.3% |  188,949.377 |       3 | `lib//compress/zstd_compress_internal.h:752` |

##### `HIST_count_parallel_wksp` (`lib//compress/hist.c`)

|     % |  Instructions | Samples | Location                  |
| ----: | ------------: | ------: | ------------------------- |
| 99.8% | 1,952,858.959 |       8 | `lib//compress/hist.c:88` |
| <0.1% |       159.784 |       8 | `lib//compress/hist.c:71` |
| <0.1% |         95.87 |       8 | `lib//compress/hist.c:74` |
| <0.1% |        63.913 |       8 | `lib//compress/hist.c:83` |

##### `ZSTD_XXH64_update` (`lib//common/xxhash.h`)

|     % | Instructions | Samples | Location                    |
| ----: | -----------: | ------: | --------------------------- |
| 34.7% |  523,757.601 |       5 | `lib//common/xxhash.h:3329` |
| 17.4% |  261,887.788 |       5 | `lib//common/xxhash.h:3331` |
| 17.4% |  261,872.809 |       5 | `lib//common/xxhash.h:3330` |
|  8.7% |  130,945.392 |       5 | `lib//common/xxhash.h:3559` |
|  8.7% |  130,945.392 |       5 | `lib//common/xxhash.h:3560` |

##### `ZSTD_seqToCodes` (`lib//compress/zstd_compress_internal.h`)

|     % | Instructions | Samples | Location                                     |
| ----: | -----------: | ------: | -------------------------------------------- |
| 17.8% |  244,352.786 |       2 | `lib//compress/zstd_compress_internal.h:545` |

##### `ZSTD_seqToCodes` (`lib//compress/zstd_compress.c`)

|     % | Instructions | Samples | Location                             |
| ----: | -----------: | ------: | ------------------------------------ |
| 30.0% |  367,505.899 |       3 | `lib//compress/zstd_compress.c:2691` |
| 20.0% |  244,806.602 |       3 | `lib//compress/zstd_compress.c:2692` |
| 20.0% |  244,804.602 |       3 | `lib//compress/zstd_compress.c:2695` |
| <0.1% |           32 |       3 | `lib//compress/zstd_compress.c:2687` |
| <0.1% |            8 |       3 | `lib//compress/zstd_compress.c:2686` |

##### `HUF_compress1X_usingCTable_internal.constprop.0` (`lib//compress/huf_compress.c`)

|     % | Instructions | Samples | Location                           |
| ----: | -----------: | ------: | ---------------------------------- |
| 29.6% |  125,906.947 |       4 | `lib//compress/huf_compress.c:987` |
| 13.3% |    56,701.53 |       4 | `lib//compress/huf_compress.c:891` |
| 13.3% |   56,669.819 |       4 | `lib//compress/huf_compress.c:886` |
| 11.9% |   50,387.156 |       4 | `lib//compress/huf_compress.c:887` |
|  6.0% |   25,307.043 |       4 | `lib//compress/huf_compress.c:943` |

##### `FSE_buildCTable_wksp` (`lib//compress/fse_compress.c`)

|     % | Instructions | Samples | Location                           |
| ----: | -----------: | ------: | ---------------------------------- |
| 35.3% |   79,309.429 |       2 | `lib//compress/fse_compress.c:172` |
| 13.8% |     31,075.7 |       2 | `lib//compress/fse_compress.c:160` |
| 13.3% |   29,825.239 |       2 | `lib//compress/fse_compress.c:170` |
|  8.9% |   20,063.512 |       2 | `lib//compress/fse_compress.c:163` |
|  8.6% |   19,337.626 |       2 | `lib//compress/fse_compress.c:162` |

##### `__GI_memcpy` (`./string/../sysdeps/aarch64/multiarch/../memcpy.S`)

|     % | Instructions | Samples | Location                                                |
| ----: | -----------: | ------: | ------------------------------------------------------- |
| 12.0% |   21,915.253 |       3 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:166` |
| 12.0% |   21,915.253 |       3 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:167` |
| 12.0% |   21,915.253 |       3 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:168` |
| 12.0% |   21,915.253 |       3 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:169` |
| 12.0% |   21,915.253 |       3 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:170` |

##### `HUF_buildCTable_wksp` (`lib//compress/huf_compress.c`)

|    % | Instructions | Samples | Location                           |
| ---: | -----------: | ------: | ---------------------------------- |
| 6.3% |    6,122.128 |       2 | `lib//compress/huf_compress.c:533` |
| 6.2% |    6,056.725 |       2 | `lib//compress/huf_compress.c:640` |
| 5.4% |    5,287.743 |       2 | `lib//compress/huf_compress.c:702` |
| 5.4% |    5,257.023 |       2 | `lib//compress/huf_compress.c:701` |
| 5.2% |    5,088.561 |       2 | `lib//compress/huf_compress.c:648` |

##### `__GI_memset` (`./string/../sysdeps/aarch64/nptl/../memset.S`)

|     % | Instructions | Samples | Location                                           |
| ----: | -----------: | ------: | -------------------------------------------------- |
| 18.4% |   13,969.273 |       3 | `./string/../sysdeps/aarch64/nptl/../memset.S:131` |
| 18.4% |   13,969.273 |       3 | `./string/../sysdeps/aarch64/nptl/../memset.S:132` |
| 18.4% |   13,969.273 |       3 | `./string/../sysdeps/aarch64/nptl/../memset.S:133` |
| 18.4% |   13,969.273 |       3 | `./string/../sysdeps/aarch64/nptl/../memset.S:134` |
| 18.4% |   13,969.273 |       3 | `./string/../sysdeps/aarch64/nptl/../memset.S:135` |

##### `do_lookup_x` (`./elf/./elf/dl-lookup.c`)

|    % | Instructions | Samples | Location                      |
| ---: | -----------: | ------: | ----------------------------- |
| 7.8% |    2,243.969 |       3 | `./elf/./elf/dl-lookup.c:348` |
| 5.7% |    1,648.951 |       1 | `./elf/./elf/dl-lookup.c:388` |
| 5.7% |    1,648.951 |       1 | `./elf/./elf/dl-lookup.c:403` |
| 5.6% |    1,616.465 |       4 | `./elf/./elf/dl-lookup.c:374` |
| 5.2% |    1,510.217 |       1 | `./elf/./elf/dl-lookup.c:416` |

##### `FSE_writeNCount_generic` (`lib//compress/fse_compress.c`)

|    % | Instructions | Samples | Location                           |
| ---: | -----------: | ------: | ---------------------------------- |
| 9.5% |    2,295.566 |       6 | `lib//compress/fse_compress.c:302` |
| 7.9% |    1,893.949 |       6 | `lib//compress/fse_compress.c:260` |
| 7.5% |    1,798.207 |       6 | `lib//compress/fse_compress.c:293` |
| 7.5% |    1,798.207 |       6 | `lib//compress/fse_compress.c:296` |
| 7.5% |    1,798.207 |       6 | `lib//compress/fse_compress.c:299` |

##### `_dl_lookup_symbol_x` (`./elf/./elf/dl-lookup.c`)

|    % | Instructions | Samples | Location                      |
| ---: | -----------: | ------: | ----------------------------- |
| 8.9% |    1,979.973 |       6 | `./elf/./elf/dl-lookup.c:756` |
| 6.5% |     1,451.98 |       3 | `./elf/./elf/dl-lookup.c:776` |
| 4.1% |      923.987 |       6 | `./elf/./elf/dl-lookup.c:762` |
| 3.5% |      791.989 |       6 | `./elf/./elf/dl-lookup.c:768` |
| 1.2% |      263.996 |       6 | `./elf/./elf/dl-lookup.c:758` |

##### `HUF_writeCTable_wksp` (`lib//compress/huf_compress.c`)

|     % | Instructions | Samples | Location                           |
| ----: | -----------: | ------: | ---------------------------------- |
| 16.4% |    3,068.992 |       2 | `lib//compress/huf_compress.c:270` |
| 16.2% |    3,029.353 |       2 | `lib//compress/huf_compress.c:271` |
| 15.1% |    2,838.099 |       2 | `lib//compress/huf_compress.c:190` |
| 11.8% |    2,211.815 |       2 | `lib//compress/huf_compress.c:798` |
|  7.8% |    1,462.652 |       2 | `lib//compress/huf_compress.c:799` |

##### `FSE_compress_usingCTable_generic` (`lib//compress/fse_compress.c`)

|    % | Instructions | Samples | Location                           |
| ---: | -----------: | ------: | ---------------------------------- |
| 3.5% |      605.321 |       1 | `lib//compress/fse_compress.c:588` |
| 2.3% |      390.937 |       1 | `lib//compress/fse_compress.c:602` |
| 0.2% |       36.031 |       1 | `lib//compress/fse_compress.c:554` |
| 0.2% |       31.527 |       1 | `lib//compress/fse_compress.c:608` |
| 0.1% |       14.412 |       1 | `lib//compress/fse_compress.c:563` |

##### `FSE_normalizeCount` (`lib//compress/fse_compress.c`)

|     % | Instructions | Samples | Location                           |
| ----: | -----------: | ------: | ---------------------------------- |
| 22.9% |    3,734.615 |       1 | `lib//compress/fse_compress.c:487` |
| 11.7% |    1,899.221 |       6 | `lib//compress/fse_compress.c:486` |
| 11.5% |    1,867.308 |       1 | `lib//compress/fse_compress.c:488` |
|  6.9% |    1,120.565 |       1 | `lib//compress/fse_compress.c:489` |
|  6.1% |      986.349 |       1 | `lib//compress/fse_compress.c:498` |

##### `_int_malloc` (`./malloc/./malloc/malloc.c`)

|    % | Instructions | Samples | Location                          |
| ---: | -----------: | ------: | --------------------------------- |
| 6.5% |      809.989 |       3 | `./malloc/./malloc/malloc.c:1348` |
| 6.4% |      791.325 |       4 | `./malloc/./malloc/malloc.c:3980` |
| 5.6% |      689.706 |       1 | `./malloc/./malloc/malloc.c:4265` |
| 4.3% |      529.225 |       4 | `./malloc/./malloc/malloc.c:4268` |
| 4.3% |      529.171 |       1 | `./malloc/./malloc/malloc.c:4405` |

##### `_dl_relocate_object` (`./elf/../sysdeps/generic/ldsodefs.h`)

|    % | Instructions | Samples | Location                                  |
| ---: | -----------: | ------: | ----------------------------------------- |
| 0.1% |           11 |       3 | `./elf/../sysdeps/generic/ldsodefs.h:81`  |
| 0.1% |            9 |       3 | `./elf/../sysdeps/generic/ldsodefs.h:142` |

#### Callers

Callers ranked by contribution to each function's self instructions. Inlining can make caller attribution imprecise.

##### `ZSTD_encodeSequences` (`lib//common/bitstream.h`)

|      % |   Instructions | Samples | Caller                 | Location                  |
| -----: | -------------: | ------: | ---------------------- | ------------------------- |
| 100.0% | 12,116,223.817 |      42 | `ZSTD_encodeSequences` | `lib//common/bitstream.h` |
|  <0.1% |        791.989 |      27 | `ZSTD_encodeSequences` | `lib//common/mem.h`       |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`)

|      % |   Instructions | Samples | Caller                          | Location                                 |
| -----: | -------------: | ------: | ------------------------------- | ---------------------------------------- |
| 100.0% | 11,715,838.374 |     120 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_compress_internal.h` |
|  <0.1% |        439.994 |      57 | `ZSTD_buildSeqStore`            | `lib//compress/zstd_compress.c`          |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`)

|      % |  Instructions | Samples | Caller                          | Location                                 |
| -----: | ------------: | ------: | ------------------------------- | ---------------------------------------- |
| 100.0% | 8,326,433.422 |      96 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_compress_internal.h` |
|  <0.1% |       255.996 |       9 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_double_fast.c`       |

##### `HIST_count_parallel_wksp` (`lib//compress/hist.c`)

|     % |  Instructions | Samples | Caller              | Location                                  |
| ----: | ------------: | ------: | ------------------- | ----------------------------------------- |
| 55.3% | 1,082,515.463 |      16 | `ZSTD_buildCTable`  | `lib//compress/zstd_compress_sequences.c` |
|  1.3% |    25,660.493 |      10 | `HIST_count_simple` | `lib//compress/hist.c`                    |
|  0.3% |     5,934.824 |       5 | `(below main)`      | `programs/zstd`                           |
|  0.1% |     1,733.487 |       5 | `dl_main`           | `./elf/./elf/rtld.c`                      |

##### `ZSTD_XXH64_update` (`lib//common/xxhash.h`)

|     % | Instructions | Samples | Caller                     | Location                        |
| ----: | -----------: | ------: | -------------------------- | ------------------------------- |
| 50.0% |  753,743.537 |      37 | `ZSTD_compress_frameChunk` | `lib//compress/zstd_compress.c` |
|  0.3% |    5,267.321 |      18 | `(below main)`             | `programs/zstd`                 |
|  0.1% |    1,538.518 |      18 | `dl_main`                  | `./elf/./elf/rtld.c`            |

##### `ZSTD_seqToCodes` (`lib//compress/zstd_compress_internal.h`)

|      % | Instructions | Samples | Caller            | Location                        |
| -----: | -----------: | ------: | ----------------- | ------------------------------- |
| 100.0% | 1,370,262.98 |       5 | `ZSTD_seqToCodes` | `lib//compress/zstd_compress.c` |

##### `ZSTD_seqToCodes` (`lib//compress/zstd_compress.c`)

|      % |  Instructions | Samples | Caller                          | Location                        |
| -----: | ------------: | ------: | ------------------------------- | ------------------------------- |
| 100.0% | 1,224,409.004 |      21 | `ZSTD_buildSequencesStatistics` | `lib//compress/zstd_compress.c` |

##### `HUF_compress1X_usingCTable_internal.constprop.0` (`lib//compress/huf_compress.c`)

|     % | Instructions | Samples | Caller                                            | Location                       |
| ----: | -----------: | ------: | ------------------------------------------------- | ------------------------------ |
| 75.0% |  318,684.617 |     104 | `HUF_compress1X_usingCTable_internal.constprop.0` | `lib//compress/huf_compress.c` |
| 25.0% |  106,102.684 |      78 | `HUF_compressCTable_internal.isra.0`              | `lib//compress/huf_compress.c` |

##### `FSE_buildCTable_wksp` (`lib//compress/fse_compress.c`)

|     % | Instructions | Samples | Caller                 | Location                                  |
| ----: | -----------: | ------: | ---------------------- | ----------------------------------------- |
| 99.2% |  222,748.125 |      83 | `FSE_buildCTable_wksp` | `lib//compress/fse_compress.c`            |
|  0.8% |    1,696.085 |      39 | `ZSTD_buildCTable`     | `lib//compress/zstd_compress_sequences.c` |
| <0.1% |        40.23 |      26 | `HIST_count_simple`    | `lib//compress/hist.c`                    |

##### `__GI_memcpy` (`./string/../sysdeps/aarch64/multiarch/../memcpy.S`)

|     % | Instructions | Samples | Caller                          | Location                                   |
| ----: | -----------: | ------: | ------------------------------- | ------------------------------------------ |
| 88.5% |  161,297.761 |     114 | `ZSTDMT_compressStream_generic` | `lib//compress/zstdmt_compress.c`          |
|  9.0% |   16,389.772 |      57 | `_dl_runtime_resolve`           | `./elf/../sysdeps/aarch64/dl-trampoline.S` |
|  1.2% |    2,095.971 |       3 | `ZSTD_compressLiterals`         | `lib//compress/zstd_compress_literals.c`   |
|  0.7% |    1,298.153 |       2 | `HUF_compress_internal`         | `lib//compress/huf_compress.c`             |
|  0.5% |      843.988 |       3 | `_IO_file_xsputn@@GLIBC_2.17`   | `./libio/./libio/fileops.c`                |

##### `HUF_buildCTable_wksp` (`lib//compress/huf_compress.c`)

|     % | Instructions | Samples | Caller                     | Location                       |
| ----: | -----------: | ------: | -------------------------- | ------------------------------ |
| 99.5% |   96,658.871 |     190 | `HUF_buildCTable_wksp`     | `lib//compress/huf_compress.c` |
|  0.5% |      459.804 |      24 | `HIST_count_parallel_wksp` | `lib//compress/hist.c`         |

##### `__GI_memset` (`./string/../sysdeps/aarch64/nptl/../memset.S`)

|     % | Instructions | Samples | Caller                           | Location                                   |
| ----: | -----------: | ------: | -------------------------------- | ------------------------------------------ |
| 80.4% |   60,902.194 |      36 | `ZSTD_resetCCtx_internal`        | `lib//compress/zstd_cwksp.h`               |
| 14.3% |   10,801.371 |      78 | `HIST_count_parallel_wksp`       | `lib//compress/hist.c`                     |
|  4.4% |    3,297.903 |       2 | `HUF_buildCTable_wksp`           | `lib//compress/huf_compress.c`             |
|  0.6% |      427.994 |       3 | `_dl_runtime_resolve`            | `./elf/../sysdeps/aarch64/dl-trampoline.S` |
|  0.3% |      227.997 |       3 | `__pthread_mutex_unlock_usercnt` | `./nptl/./nptl/pthread_mutex_unlock.c`     |

##### `do_lookup_x` (`./elf/./elf/dl-lookup.c`)

|     % | Instructions | Samples | Caller         | Location                  |
| ----: | -----------: | ------: | -------------- | ------------------------- |
| 73.0% |   21,059.175 |      35 | `do_lookup_x`  | `./elf/./elf/dl-lookup.c` |
|  0.2% |       54.392 |      22 | `(below main)` | `programs/zstd`           |
|  0.1% |       15.887 |      22 | `dl_main`      | `./elf/./elf/rtld.c`      |

##### `FSE_writeNCount_generic` (`lib//compress/fse_compress.c`)

|     % | Instructions | Samples | Caller                    | Location                                  |
| ----: | -----------: | ------: | ------------------------- | ----------------------------------------- |
| 91.7% |   22,115.324 |      39 | `FSE_writeNCount_generic` | `lib//compress/fse_compress.c`            |
|  8.1% |    1,948.403 |      84 | `ZSTD_buildCTable`        | `lib//compress/zstd_compress_sequences.c` |
|  0.2% |       46.214 |      56 | `HIST_count_simple`       | `lib//compress/hist.c`                    |

##### `_dl_lookup_symbol_x` (`./elf/./elf/dl-lookup.c`)

|    % | Instructions | Samples | Caller         | Location             |
| ---: | -----------: | ------: | -------------- | -------------------- |
| 0.7% |      156.271 |      24 | `(below main)` | `programs/zstd`      |
| 0.2% |       45.645 |      24 | `dl_main`      | `./elf/./elf/rtld.c` |

##### `HUF_writeCTable_wksp` (`lib//compress/huf_compress.c`)

|     % | Instructions | Samples | Caller                             | Location                       |
| ----: | -----------: | ------: | ---------------------------------- | ------------------------------ |
| 99.8% |   18,714.889 |      70 | `HIST_count_parallel_wksp`         | `lib//compress/hist.c`         |
|  0.1% |       27.925 |       5 | `FSE_buildCTable_wksp`             | `lib//compress/fse_compress.c` |
| <0.1% |        3.603 |       1 | `FSE_compress_usingCTable_generic` | `lib//compress/fse_compress.c` |

##### `FSE_compress_usingCTable_generic` (`lib//compress/fse_compress.c`)

|     % | Instructions | Samples | Caller                             | Location                       |
| ----: | -----------: | ------: | ---------------------------------- | ------------------------------ |
| 87.2% |   15,072.676 |      15 | `FSE_compress_usingCTable`         | `lib//compress/fse_compress.c` |
| 12.8% |    2,215.908 |       1 | `FSE_compress_usingCTable_generic` | `lib//compress/fse_compress.c` |

##### `FSE_normalizeCount` (`lib//compress/fse_compress.c`)

|     % | Instructions | Samples | Caller               | Location                                  |
| ----: | -----------: | ------: | -------------------- | ----------------------------------------- |
| 90.2% |   14,703.325 |      19 | `FSE_normalizeCount` | `lib//compress/fse_compress.c`            |
|  9.6% |    1,558.723 |      57 | `ZSTD_buildCTable`   | `lib//compress/zstd_compress_sequences.c` |
|  0.2% |       36.972 |      38 | `HIST_count_simple`  | `lib//compress/hist.c`                    |

##### `_int_malloc` (`./malloc/./malloc/malloc.c`)

|     % | Instructions | Samples | Caller         | Location                     |
| ----: | -----------: | ------: | -------------- | ---------------------------- |
| 59.0% |    7,336.341 |      39 | `_int_malloc`  | `./malloc/./malloc/malloc.c` |
|  0.3% |       35.558 |      58 | `(below main)` | `programs/zstd`              |
|  0.1% |       10.386 |      58 | `dl_main`      | `./elf/./elf/rtld.c`         |

##### `_dl_relocate_object` (`./elf/../sysdeps/generic/ldsodefs.h`)

|    % | Instructions | Samples | Caller         | Location             |
| ---: | -----------: | ------: | -------------- | -------------------- |
| 0.7% |        86.35 |       3 | `(below main)` | `programs/zstd`      |
| 0.2% |       25.222 |       3 | `dl_main`      | `./elf/./elf/rtld.c` |

### Total instructions

Functions ranked by total instructions recorded in the function and all its callees.

|     % |   Instructions | Samples | Function                                          | Location                                  |
| ----: | -------------: | ------: | ------------------------------------------------- | ----------------------------------------- |
| 50.7% | 20,044,706.763 |     423 | `ZSTD_buildSeqStore`                              | `lib//compress/zstd_compress.c`           |
| 50.7% | 20,043,609.778 |     297 | `ZSTD_compressBlock_doubleFast`                   | `lib//compress/zstd_double_fast.c`        |
| 50.7% | 20,042,878.788 |     237 | `ZSTD_compressBlock_doubleFast`                   | `lib//compress/zstd_compress_internal.h`  |
| 30.6% | 12,119,151.776 |     102 | `ZSTD_encodeSequences`                            | `lib//compress/zstd_compress_sequences.c` |
| 30.6% | 12,117,895.794 |      75 | `ZSTD_encodeSequences`                            | `lib//common/mem.h`                       |
| 30.6% | 12,117,015.806 |      69 | `ZSTD_encodeSequences`                            | `lib//common/bitstream.h`                 |
|  7.2% |  2,828,475.738 |   1,444 | `HIST_count_parallel_wksp`                        | `lib//compress/hist.c`                    |
|  6.6% |  2,595,159.977 |      68 | `ZSTD_buildSequencesStatistics`                   | `lib//compress/zstd_compress.c`           |
|  6.6% |  2,594,671.984 |      26 | `ZSTD_seqToCodes`                                 | `lib//compress/zstd_compress.c`           |
|  3.8% |  1,507,442.075 |      91 | `ZSTD_XXH64_update`                               | `lib//common/xxhash.h`                    |
|  3.5% |  1,376,684.165 |     516 | `ZSTD_buildCTable`                                | `lib//compress/zstd_compress_sequences.c` |
|  3.5% |   1,370,262.98 |       5 | `ZSTD_seqToCodes`                                 | `lib//compress/zstd_compress_internal.h`  |
|  1.9% |    754,501.527 |     160 | `ZSTD_compress_frameChunk`                        | `lib//compress/zstd_compress.c`           |
|  1.1% |    425,136.118 |     200 | `HUF_compressCTable_internal.isra.0`              | `lib//compress/huf_compress.c`            |
|  1.1% |    424,890.361 |     184 | `HUF_compress1X_usingCTable_internal.constprop.0` | `lib//compress/huf_compress.c`            |
|  0.9% |        364,232 |   6,525 | `(below main)`                                    | `./elf/../sysdeps/aarch64/dl-start.S`     |
|  0.9% |        364,227 |   6,520 | `_dl_start`                                       | `./elf/./elf/rtld.c`                      |
|  0.7% |        277,451 |   3,263 | `_dl_init`                                        | `./elf/./elf/dl-init.c`                   |
|  0.7% |        276,428 |   3,257 | `(below main)`                                    | `programs/zstd`                           |
|  0.6% |    248,691.933 |     181 | `FSE_buildCTable_wksp`                            | `lib//compress/fse_compress.c`            |

#### Callees

Callees ranked by contribution to each function's total instructions. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `ZSTD_buildSeqStore` (`lib//compress/zstd_compress.c`)

|      % |   Instructions | Samples | Callee                          | Location                           |
| -----: | -------------: | ------: | ------------------------------- | ---------------------------------- |
| 100.0% | 20,043,609.778 |     297 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_double_fast.c` |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`)

|      % |   Instructions | Samples | Callee                          | Location                                 |
| -----: | -------------: | ------: | ------------------------------- | ---------------------------------------- |
| 100.0% | 20,042,878.788 |     237 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_compress_internal.h` |
|  <0.1% |        290.996 |       3 | `ZSTD_buildSeqStore`            | `lib//compress/zstd_compress.c`          |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`)

|     % |   Instructions | Samples | Callee                          | Location                                 |
| ----: | -------------: | ------: | ------------------------------- | ---------------------------------------- |
| 58.5% | 11,715,838.374 |     120 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_double_fast.c`       |
| 41.5% |  8,326,433.422 |      96 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_compress_internal.h` |
| <0.1% |        350.995 |      12 | `ZSTD_compressBlock_doubleFast` | `lib//common/mem.h`                      |

##### `ZSTD_encodeSequences` (`lib//compress/zstd_compress_sequences.c`)

|      % |   Instructions | Samples | Callee                 | Location            |
| -----: | -------------: | ------: | ---------------------- | ------------------- |
| 100.0% | 12,117,895.794 |      75 | `ZSTD_encodeSequences` | `lib//common/mem.h` |

##### `ZSTD_encodeSequences` (`lib//common/mem.h`)

|      % |   Instructions | Samples | Callee                 | Location                  |
| -----: | -------------: | ------: | ---------------------- | ------------------------- |
| 100.0% | 12,117,015.806 |      69 | `ZSTD_encodeSequences` | `lib//common/bitstream.h` |

##### `ZSTD_encodeSequences` (`lib//common/bitstream.h`)

|      % |   Instructions | Samples | Callee                 | Location                  |
| -----: | -------------: | ------: | ---------------------- | ------------------------- |
| 100.0% | 12,116,223.817 |      42 | `ZSTD_encodeSequences` | `lib//common/bitstream.h` |

##### `HIST_count_parallel_wksp` (`lib//compress/hist.c`)

|     % |  Instructions | Samples | Callee                               | Location                                       |
| ----: | ------------: | ------: | ------------------------------------ | ---------------------------------------------- |
| 48.7% | 1,376,650.891 |     494 | `ZSTD_buildCTable`                   | `lib//compress/zstd_compress_sequences.c`      |
| 15.0% |   425,136.118 |     200 | `HUF_compressCTable_internal.isra.0` | `lib//compress/huf_compress.c`                 |
|  3.9% |   110,120.021 |     398 | `HUF_buildCTable_wksp`               | `lib//compress/huf_compress.c`                 |
|  2.1% |    58,659.347 |     276 | `HUF_writeCTable_wksp`               | `lib//compress/huf_compress.c`                 |
|  0.4% |    10,801.371 |      78 | `__GI_memset`                        | `./string/../sysdeps/aarch64/nptl/../memset.S` |

##### `ZSTD_buildSequencesStatistics` (`lib//compress/zstd_compress.c`)

|      % |  Instructions | Samples | Callee            | Location                        |
| -----: | ------------: | ------: | ----------------- | ------------------------------- |
| 100.0% | 2,594,671.984 |      26 | `ZSTD_seqToCodes` | `lib//compress/zstd_compress.c` |

##### `ZSTD_seqToCodes` (`lib//compress/zstd_compress.c`)

|     % | Instructions | Samples | Callee            | Location                                 |
| ----: | -----------: | ------: | ----------------- | ---------------------------------------- |
| 52.8% | 1,370,262.98 |       5 | `ZSTD_seqToCodes` | `lib//compress/zstd_compress_internal.h` |

##### `ZSTD_buildCTable` (`lib//compress/zstd_compress_sequences.c`)

|     % |  Instructions | Samples | Callee                     | Location                                  |
| ----: | ------------: | ------: | -------------------------- | ----------------------------------------- |
| 79.1% | 1,088,843.877 |      60 | `HIST_count_parallel_wksp` | `lib//compress/hist.c`                    |
| 17.6% |   242,929.853 |     149 | `FSE_buildCTable_wksp`     | `lib//compress/fse_compress.c`            |
|  1.7% |    23,551.326 |     121 | `FSE_writeNCount_generic`  | `lib//compress/fse_compress.c`            |
|  1.2% |    15,921.378 |      74 | `FSE_normalizeCount`       | `lib//compress/fse_compress.c`            |
|  0.1% |      1,402.85 |      33 | `ZSTD_buildCTable`         | `lib//compress/zstd_compress_sequences.c` |

##### `ZSTD_compress_frameChunk` (`lib//compress/zstd_compress.c`)

|     % | Instructions | Samples | Callee                         | Location                        |
| ----: | -----------: | ------: | ------------------------------ | ------------------------------- |
| 99.9% |  753,743.537 |      37 | `ZSTD_XXH64_update`            | `lib//common/xxhash.h`          |
| <0.1% |       96.999 |       3 | `ZSTD_compressEnd_public`      | `lib//compress/zstd_compress.c` |
| <0.1% |       47.999 |       3 | `ZSTD_overflowCorrectIfNeeded` | `lib//compress/zstd_compress.c` |

##### `HUF_compressCTable_internal.isra.0` (`lib//compress/huf_compress.c`)

|     % | Instructions | Samples | Callee                                            | Location                       |
| ----: | -----------: | ------: | ------------------------------------------------- | ------------------------------ |
| 99.9% |  424,890.361 |     184 | `HUF_compress1X_usingCTable_internal.constprop.0` | `lib//compress/huf_compress.c` |

##### `HUF_compress1X_usingCTable_internal.constprop.0` (`lib//compress/huf_compress.c`)

|     % | Instructions | Samples | Callee                                            | Location                       |
| ----: | -----------: | ------: | ------------------------------------------------- | ------------------------------ |
| 75.0% |  318,787.676 |     106 | `HUF_compress1X_usingCTable_internal.constprop.0` | `lib//compress/huf_compress.c` |
| <0.1% |      103.059 |       2 | `HUF_compressCTable_internal.isra.0`              | `lib//compress/huf_compress.c` |

##### `(below main)` (`./elf/../sysdeps/aarch64/dl-start.S`)

|      % | Instructions | Samples | Callee      | Location             |
| -----: | -----------: | ------: | ----------- | -------------------- |
| 100.0% |      364,227 |   6,520 | `_dl_start` | `./elf/./elf/rtld.c` |

##### `_dl_start` (`./elf/./elf/rtld.c`)

|     % | Instructions | Samples | Callee                     | Location                                       |
| ----: | -----------: | ------: | -------------------------- | ---------------------------------------------- |
| 76.2% |      277,451 |   3,263 | `_dl_init`                 | `./elf/./elf/dl-init.c`                        |
| 23.8% |       86,694 |   3,252 | `_dl_start`                | `./elf/./get-dynamic-info.h`                   |
| 23.6% |       86,016 |   3,190 | `_dl_sysdep_start`         | `./elf/../sysdeps/unix/sysv/linux/dl-sysdep.c` |
| <0.1% |           24 |       1 | `_dl_setup_hash`           | `./elf/./elf/dl-setup_hash.c`                  |
| <0.1% |           14 |       1 | `__rtld_malloc_init_stubs` | `./elf/./elf/dl-minimal.c`                     |

##### `_dl_init` (`./elf/./elf/dl-init.c`)

|     % | Instructions | Samples | Callee         | Location                |
| ----: | -----------: | ------: | -------------- | ----------------------- |
| 99.6% |      276,428 |   3,257 | `(below main)` | `programs/zstd`         |
|  0.4% |        1,003 |       1 | `call_init`    | `./elf/./elf/dl-init.c` |

##### `(below main)` (`programs/zstd`)

|     % | Instructions | Samples | Callee                          | Location                                  |
| ----: | -----------: | ------: | ------------------------------- | ----------------------------------------- |
| 50.7% |  140,085.058 |     141 | `ZSTD_buildSeqStore`            | `lib//compress/zstd_compress.c`           |
| 30.6% |   84,696.279 |      34 | `ZSTD_encodeSequences`          | `lib//compress/zstd_compress_sequences.c` |
|  7.2% |   19,767.173 |     118 | `HIST_count_parallel_wksp`      | `lib//compress/hist.c`                    |
|  6.6% |   18,136.615 |      23 | `ZSTD_buildSequencesStatistics` | `lib//compress/zstd_compress.c`           |
|  1.9% |    5,272.933 |      59 | `ZSTD_compress_frameChunk`      | `lib//compress/zstd_compress.c`           |

##### `FSE_buildCTable_wksp` (`lib//compress/fse_compress.c`)

|     % | Instructions | Samples | Callee                     | Location                       |
| ----: | -----------: | ------: | -------------------------- | ------------------------------ |
| 89.6% |  222,748.125 |      83 | `FSE_buildCTable_wksp`     | `lib//compress/fse_compress.c` |
|  7.7% |   19,193.209 |      24 | `FSE_compress_usingCTable` | `lib//compress/fse_compress.c` |
|  2.0% |    4,986.359 |       4 | `FSE_buildCTable_wksp`     | `lib//common/mem.h`            |
| <0.1% |       27.925 |       5 | `HUF_writeCTable_wksp`     | `lib//compress/huf_compress.c` |

## Hottest call stacks

Call stacks ranked by instructions recorded in their leaf frame.

|     % |   Instructions | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 30.4% | 12,006,815.262 |      14 | `ZSTD_encodeSequences` (`lib//common/bitstream.h`) ← `ZSTD_encodeSequences` ← `ZSTD_encodeSequences` (`lib//common/mem.h`) ← `ZSTD_encodeSequences` (`lib//compress/zstd_compress_sequences.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 29.3% | 11,610,045.269 |      40 | `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`) ← `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`) ← `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`) ← `ZSTD_buildSeqStore` (`lib//compress/zstd_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 20.9% |  8,251,246.378 |      32 | `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`) ← `ZSTD_compressBlock_doubleFast` ← `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`) ← `ZSTD_buildSeqStore` (`lib//compress/zstd_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  3.4% |  1,357,889.612 |       2 | `ZSTD_seqToCodes` (`lib//compress/zstd_compress_internal.h`) ← `ZSTD_seqToCodes` (`lib//compress/zstd_compress.c`) ← `ZSTD_buildSequencesStatistics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.1% |  1,213,352.686 |       7 | `ZSTD_seqToCodes` (`lib//compress/zstd_compress.c`) ← `ZSTD_buildSequencesStatistics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.7% |  1,074,794.521 |      10 | `HIST_count_parallel_wksp` (`lib//compress/hist.c`) ← `ZSTD_buildCTable` (`lib//compress/zstd_compress_sequences.c`) ← `HIST_count_parallel_wksp` (`lib//compress/hist.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.9% |    746,937.292 |      18 | `ZSTD_XXH64_update` (`lib//common/xxhash.h`) ← `ZSTD_compress_frameChunk` (`lib//compress/zstd_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.8% |    318,684.617 |     104 | `HUF_compress1X_usingCTable_internal.constprop.0` (`lib//compress/huf_compress.c`) ← `HUF_compress1X_usingCTable_internal.constprop.0` ← `HUF_compressCTable_internal.isra.0` ← `HIST_count_parallel_wksp` (`lib//compress/hist.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.5% |    216,021.022 |      80 | `FSE_buildCTable_wksp` (`lib//compress/fse_compress.c`) ← `FSE_buildCTable_wksp` ← `ZSTD_buildCTable` (`lib//compress/zstd_compress_sequences.c`) ← `HIST_count_parallel_wksp` (`lib//compress/hist.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.4% |    159,841.255 |     110 | `__GI_memcpy` (`./string/../sysdeps/aarch64/multiarch/../memcpy.S`) ← `ZSTDMT_compressStream_generic` (`lib//compress/zstdmt_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.3% |    106,102.684 |      78 | `HUF_compress1X_usingCTable_internal.constprop.0` (`lib//compress/huf_compress.c`) ← `HUF_compressCTable_internal.isra.0` ← `HIST_count_parallel_wksp` (`lib//compress/hist.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.2% |     96,658.871 |     190 | `HUF_buildCTable_wksp` (`lib//compress/huf_compress.c`) ← `HUF_buildCTable_wksp` ← `HIST_count_parallel_wksp` (`lib//compress/hist.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.2% |     84,675.817 |      14 | `ZSTD_encodeSequences` (`lib//common/bitstream.h`) ← `ZSTD_encodeSequences` ← `ZSTD_encodeSequences` (`lib//common/mem.h`) ← `ZSTD_encodeSequences` (`lib//compress/zstd_compress_sequences.c`) ← `(below main)` (`programs/zstd`) ← `_dl_init` (`./elf/./elf/dl-init.c`) ← `_dl_start` (`./elf/./elf/rtld.c`) ← `(below main)` (`./elf/../sysdeps/aarch64/dl-start.S`)                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.2% |     81,877.671 |      40 | `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`) ← `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`) ← `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`) ← `ZSTD_buildSeqStore` (`lib//compress/zstd_compress.c`) ← `(below main)` (`programs/zstd`) ← `_dl_init` (`./elf/./elf/dl-init.c`) ← `_dl_start` (`./elf/./elf/rtld.c`) ← `(below main)` (`./elf/../sysdeps/aarch64/dl-start.S`)                                                                                                                                                                                                                                                                                                                             |
|  0.2% |     60,902.194 |      36 | `__GI_memset` (`./string/../sysdeps/aarch64/nptl/../memset.S`) ← `ZSTD_resetCCtx_internal` (`lib//compress/zstd_cwksp.h`) ← `ZSTD_resetCCtx_internal` ← `malloc` (`./malloc/./malloc/malloc.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |      58,190.37 |      32 | `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`) ← `ZSTD_compressBlock_doubleFast` ← `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`) ← `ZSTD_buildSeqStore` (`lib//compress/zstd_compress.c`) ← `(below main)` (`programs/zstd`) ← `_dl_init` (`./elf/./elf/dl-init.c`) ← `_dl_start` (`./elf/./elf/rtld.c`) ← `(below main)` (`./elf/../sysdeps/aarch64/dl-start.S`)                                                                                                                                                                                                                                                                                                                                                                  |
|  0.1% |     25,660.493 |      10 | `HIST_count_parallel_wksp` (`lib//compress/hist.c`) ← `HIST_count_simple` ← `HUF_writeCTable_wksp` (`lib//compress/huf_compress.c`) ← `HIST_count_parallel_wksp` (`lib//compress/hist.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.1% |     24,732.739 |      14 | `ZSTD_encodeSequences` (`lib//common/bitstream.h`) ← `ZSTD_encodeSequences` ← `ZSTD_encodeSequences` (`lib//common/mem.h`) ← `ZSTD_encodeSequences` (`lib//compress/zstd_compress_sequences.c`) ← `dl_main` (`./elf/./elf/rtld.c`) ← `_dl_sysdep_start` (`./elf/../sysdeps/unix/sysv/linux/aarch64/cpu-features.c`) ← `__GI___tunables_init` (`./elf/./elf/dl-tunables.c`) ← `_dl_sysdep_start` (`./elf/../sysdeps/unix/sysv/linux/dl-sysdep.c`) ← `_dl_start` (`./elf/./elf/rtld.c`) ← `_dl_start` (`./elf/./elf/do-rel.h`) ← `_dl_start` ← `_dl_start` (`./elf/./get-dynamic-info.h`) ← `_dl_start` ← `_dl_start` (`./elf/./elf/rtld.c`) ← `(below main)` (`./elf/../sysdeps/aarch64/dl-start.S`)                                                                                   |
|  0.1% |     23,915.435 |      40 | `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`) ← `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`) ← `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`) ← `ZSTD_buildSeqStore` (`lib//compress/zstd_compress.c`) ← `dl_main` (`./elf/./elf/rtld.c`) ← `_dl_sysdep_start` (`./elf/../sysdeps/unix/sysv/linux/aarch64/cpu-features.c`) ← `__GI___tunables_init` (`./elf/./elf/dl-tunables.c`) ← `_dl_sysdep_start` (`./elf/../sysdeps/unix/sysv/linux/dl-sysdep.c`) ← `_dl_start` (`./elf/./elf/rtld.c`) ← `_dl_start` (`./elf/./elf/do-rel.h`) ← `_dl_start` ← `_dl_start` (`./elf/./get-dynamic-info.h`) ← `_dl_start` ← `_dl_start` (`./elf/./elf/rtld.c`) ← `(below main)` (`./elf/../sysdeps/aarch64/dl-start.S`) |
|  0.1% |     21,462.054 |      36 | `FSE_writeNCount_generic` (`lib//compress/fse_compress.c`) ← `FSE_writeNCount_generic` ← `ZSTD_buildCTable` (`lib//compress/zstd_compress_sequences.c`) ← `HIST_count_parallel_wksp` (`lib//compress/hist.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

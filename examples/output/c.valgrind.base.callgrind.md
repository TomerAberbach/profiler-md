# Instructions profile

Recorded 39,556,676 instructions over 11,501 samples (3,439.412 instructions per sample).

| Category   |      % |   Instructions | Samples |
| ---------- | -----: | -------------: | ------: |
| ours       | 100.0% | 39,551,682.765 |  11,278 |
| stdlib     |  <0.1% |      4,938.235 |     193 |
| below main |  <0.1% |             55 |      30 |

## Hottest functions

### Self instructions

Functions ranked by instructions recorded directly in the function body, excluding callees.

|     % |   Instructions | Samples | Function                                          | Location                                            |
| ----: | -------------: | ------: | ------------------------------------------------- | --------------------------------------------------- |
| 30.6% |   12,117,015.8 |      69 | `ZSTD_encodeSequences`                            | `lib//common/bitstream.h`                           |
| 29.6% | 11,716,278.363 |     177 | `ZSTD_compressBlock_doubleFast`                   | `lib//compress/zstd_double_fast.c`                  |
| 21.1% |  8,326,689.415 |     105 | `ZSTD_compressBlock_doubleFast`                   | `lib//compress/zstd_compress_internal.h`            |
|  4.9% |  1,957,387.605 |      41 | `HIST_count_parallel_wksp`                        | `lib//compress/hist.c`                              |
|  3.8% |  1,507,442.075 |      91 | `ZSTD_XXH64_update`                               | `lib//common/xxhash.h`                              |
|  3.5% |  1,370,262.979 |       5 | `ZSTD_seqToCodes`                                 | `lib//compress/zstd_compress_internal.h`            |
|  3.1% |  1,224,409.004 |      21 | `ZSTD_seqToCodes`                                 | `lib//compress/zstd_compress.c`                     |
|  1.1% |     424,798.71 |     182 | `HUF_compress1X_usingCTable_internal.constprop.0` | `lib//compress/huf_compress.c`                      |
|  0.6% |    224,484.917 |     148 | `FSE_buildCTable_wksp`                            | `lib//compress/fse_compress.c`                      |
|  0.5% |    182,185.318 |     181 | `__GI_memcpy`                                     | `./string/../sysdeps/aarch64/multiarch/../memcpy.S` |
|  0.2% |     97,121.283 |     214 | `HUF_buildCTable_wksp`                            | `lib//compress/huf_compress.c`                      |
|  0.2% |     75,778.115 |     124 | `__GI_memset`                                     | `./string/../sysdeps/aarch64/nptl/../memset.S`      |
|  0.1% |     28,841.541 |     101 | `do_lookup_x`                                     | `./elf/./elf/dl-lookup.c`                           |
|  0.1% |     24,110.006 |     179 | `FSE_writeNCount_generic`                         | `lib//compress/fse_compress.c`                      |
|  0.1% |      22,360.69 |      72 | `_dl_lookup_symbol_x`                             | `./elf/./elf/dl-lookup.c`                           |
| <0.1% |     18,730.921 |      76 | `HUF_writeCTable_wksp`                            | `lib//compress/huf_compress.c`                      |
| <0.1% |     17,289.048 |      16 | `FSE_compress_usingCTable_generic`                | `lib//compress/fse_compress.c`                      |
| <0.1% |     16,299.062 |     114 | `FSE_normalizeCount`                              | `lib//compress/fse_compress.c`                      |
| <0.1% |     12,424.154 |     213 | `_int_malloc`                                     | `./malloc/./malloc/malloc.c`                        |
| <0.1% |     12,355.828 |       9 | `_dl_relocate_object`                             | `./elf/../sysdeps/generic/ldsodefs.h`               |

#### Lines

Lines ranked by contribution to each function's self instructions.

##### `ZSTD_encodeSequences` (`lib//common/bitstream.h`)

|     % |  Instructions | Samples | Location                      |
| ----: | ------------: | ------: | ----------------------------- |
| 18.2% | 2,203,091.418 |       6 | `lib//common/bitstream.h:172` |
| 11.1% | 1,346,308.311 |       6 | `lib//common/bitstream.h:185` |
|  6.1% |   734,347.806 |       6 | `lib//common/bitstream.h:186` |
|  3.0% |   367,237.902 |       6 | `lib//common/bitstream.h:229` |
|  1.0% |     122,436.3 |       6 | `lib//common/bitstream.h:226` |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`)

|    % | Instructions | Samples | Location                               |
| ---: | -----------: | ------: | -------------------------------------- |
| 6.3% |  733,299.821 |       3 | `lib//compress/zstd_double_fast.c:298` |
| 4.2% |  488,657.217 |       3 | `lib//compress/zstd_double_fast.c:173` |
| 3.5% |  410,020.308 |       3 | `lib//compress/zstd_double_fast.c:259` |
| 3.1% |  366,506.912 |       3 | `lib//compress/zstd_double_fast.c:185` |
| 3.0% |  350,062.141 |       3 | `lib//compress/zstd_double_fast.c:278` |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`)

|    % | Instructions | Samples | Location                                     |
| ---: | -----------: | ------: | -------------------------------------------- |
| 5.7% |  471,464.455 |       3 | `lib//compress/zstd_compress_internal.h:756` |
| 4.4% |  367,872.893 |       6 | `lib//compress/zstd_compress_internal.h:804` |
| 4.4% |    367,380.9 |       6 | `lib//compress/zstd_compress_internal.h:819` |
| 2.9% |  244,342.608 |       3 | `lib//compress/zstd_compress_internal.h:754` |
| 2.3% |  188,949.377 |       3 | `lib//compress/zstd_compress_internal.h:752` |

##### `HIST_count_parallel_wksp` (`lib//compress/hist.c`)

|     % |  Instructions | Samples | Location                  |
| ----: | ------------: | ------: | ------------------------- |
| 99.8% | 1,952,861.907 |       8 | `lib//compress/hist.c:88` |
| <0.1% |       159.784 |       8 | `lib//compress/hist.c:71` |
| <0.1% |         95.87 |       8 | `lib//compress/hist.c:74` |
| <0.1% |        63.914 |       8 | `lib//compress/hist.c:83` |

##### `ZSTD_XXH64_update` (`lib//common/xxhash.h`)

|     % | Instructions | Samples | Location                    |
| ----: | -----------: | ------: | --------------------------- |
| 34.7% |  523,757.669 |       5 | `lib//common/xxhash.h:3329` |
| 17.4% |  261,887.822 |       5 | `lib//common/xxhash.h:3331` |
| 17.4% |  261,872.843 |       5 | `lib//common/xxhash.h:3330` |
|  8.7% |  130,945.409 |       5 | `lib//common/xxhash.h:3559` |
|  8.7% |  130,945.409 |       5 | `lib//common/xxhash.h:3560` |

##### `ZSTD_seqToCodes` (`lib//compress/zstd_compress_internal.h`)

|     % | Instructions | Samples | Location                                     |
| ----: | -----------: | ------: | -------------------------------------------- |
| 17.8% |  244,352.849 |       2 | `lib//compress/zstd_compress_internal.h:545` |

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
| 29.6% |  125,910.328 |       4 | `lib//compress/huf_compress.c:987` |
| 13.3% |   56,703.053 |       4 | `lib//compress/huf_compress.c:891` |
| 13.3% |   56,671.341 |       4 | `lib//compress/huf_compress.c:886` |
| 11.9% |   50,388.509 |       4 | `lib//compress/huf_compress.c:887` |
|  6.0% |   25,307.722 |       4 | `lib//compress/huf_compress.c:943` |

##### `FSE_buildCTable_wksp` (`lib//compress/fse_compress.c`)

|     % | Instructions | Samples | Location                           |
| ----: | -----------: | ------: | ---------------------------------- |
| 35.3% |   79,311.559 |       2 | `lib//compress/fse_compress.c:172` |
| 13.8% |   31,076.534 |       2 | `lib//compress/fse_compress.c:160` |
| 13.3% |    29,826.04 |       2 | `lib//compress/fse_compress.c:170` |
|  8.9% |   20,064.051 |       2 | `lib//compress/fse_compress.c:163` |
|  8.6% |   19,338.145 |       2 | `lib//compress/fse_compress.c:162` |

##### `__GI_memcpy` (`./string/../sysdeps/aarch64/multiarch/../memcpy.S`)

|     % | Instructions | Samples | Location                                                |
| ----: | -----------: | ------: | ------------------------------------------------------- |
| 12.0% |   21,915.841 |       3 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:166` |
| 12.0% |   21,915.841 |       3 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:167` |
| 12.0% |   21,915.841 |       3 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:168` |
| 12.0% |   21,915.841 |       3 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:169` |
| 12.0% |   21,915.841 |       3 | `./string/../sysdeps/aarch64/multiarch/../memcpy.S:170` |

##### `HUF_buildCTable_wksp` (`lib//compress/huf_compress.c`)

|    % | Instructions | Samples | Location                           |
| ---: | -----------: | ------: | ---------------------------------- |
| 6.3% |    6,122.293 |       2 | `lib//compress/huf_compress.c:533` |
| 6.2% |    6,056.888 |       2 | `lib//compress/huf_compress.c:640` |
| 5.4% |    5,287.885 |       2 | `lib//compress/huf_compress.c:702` |
| 5.4% |    5,257.164 |       2 | `lib//compress/huf_compress.c:701` |
| 5.2% |    5,088.697 |       2 | `lib//compress/huf_compress.c:648` |

##### `__GI_memset` (`./string/../sysdeps/aarch64/nptl/../memset.S`)

|     % | Instructions | Samples | Location                                           |
| ----: | -----------: | ------: | -------------------------------------------------- |
| 18.4% |   13,969.648 |       3 | `./string/../sysdeps/aarch64/nptl/../memset.S:131` |
| 18.4% |   13,969.648 |       3 | `./string/../sysdeps/aarch64/nptl/../memset.S:132` |
| 18.4% |   13,969.648 |       3 | `./string/../sysdeps/aarch64/nptl/../memset.S:133` |
| 18.4% |   13,969.648 |       3 | `./string/../sysdeps/aarch64/nptl/../memset.S:134` |
| 18.4% |   13,969.648 |       3 | `./string/../sysdeps/aarch64/nptl/../memset.S:135` |

##### `do_lookup_x` (`./elf/./elf/dl-lookup.c`)

|    % | Instructions | Samples | Location                      |
| ---: | -----------: | ------: | ----------------------------- |
| 7.8% |    2,243.969 |       3 | `./elf/./elf/dl-lookup.c:348` |
| 5.7% |    1,648.996 |       1 | `./elf/./elf/dl-lookup.c:388` |
| 5.7% |    1,648.996 |       1 | `./elf/./elf/dl-lookup.c:403` |
| 5.6% |    1,616.487 |       4 | `./elf/./elf/dl-lookup.c:374` |
| 5.2% |    1,510.258 |       1 | `./elf/./elf/dl-lookup.c:416` |

##### `FSE_writeNCount_generic` (`lib//compress/fse_compress.c`)

|    % | Instructions | Samples | Location                           |
| ---: | -----------: | ------: | ---------------------------------- |
| 9.5% |    2,295.623 |       6 | `lib//compress/fse_compress.c:302` |
| 7.9% |    1,893.995 |       6 | `lib//compress/fse_compress.c:260` |
| 7.5% |    1,798.253 |       6 | `lib//compress/fse_compress.c:293` |
| 7.5% |    1,798.253 |       6 | `lib//compress/fse_compress.c:296` |
| 7.5% |    1,798.253 |       6 | `lib//compress/fse_compress.c:299` |

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
| 16.4% |    3,069.074 |       2 | `lib//compress/huf_compress.c:270` |
| 16.2% |    3,029.435 |       2 | `lib//compress/huf_compress.c:271` |
| 15.2% |    2,838.175 |       2 | `lib//compress/huf_compress.c:190` |
| 11.8% |    2,211.874 |       2 | `lib//compress/huf_compress.c:798` |
|  7.8% |    1,462.691 |       2 | `lib//compress/huf_compress.c:799` |

##### `FSE_compress_usingCTable_generic` (`lib//compress/fse_compress.c`)

|    % | Instructions | Samples | Location                           |
| ---: | -----------: | ------: | ---------------------------------- |
| 3.5% |      605.337 |       1 | `lib//compress/fse_compress.c:588` |
| 2.3% |      390.947 |       1 | `lib//compress/fse_compress.c:602` |
| 0.2% |       36.032 |       1 | `lib//compress/fse_compress.c:554` |
| 0.2% |       31.528 |       1 | `lib//compress/fse_compress.c:608` |
| 0.1% |       14.413 |       1 | `lib//compress/fse_compress.c:563` |

##### `FSE_normalizeCount` (`lib//compress/fse_compress.c`)

|     % | Instructions | Samples | Location                           |
| ----: | -----------: | ------: | ---------------------------------- |
| 22.9% |    3,734.715 |       1 | `lib//compress/fse_compress.c:487` |
| 11.7% |    1,899.272 |       6 | `lib//compress/fse_compress.c:486` |
| 11.5% |    1,867.358 |       1 | `lib//compress/fse_compress.c:488` |
|  6.9% |    1,120.595 |       1 | `lib//compress/fse_compress.c:489` |
|  6.1% |      986.376 |       1 | `lib//compress/fse_compress.c:498` |

##### `_int_malloc` (`./malloc/./malloc/malloc.c`)

|    % | Instructions | Samples | Location                          |
| ---: | -----------: | ------: | --------------------------------- |
| 6.5% |      809.989 |       3 | `./malloc/./malloc/malloc.c:1348` |
| 6.4% |      791.345 |       4 | `./malloc/./malloc/malloc.c:3980` |
| 5.6% |      689.724 |       1 | `./malloc/./malloc/malloc.c:4265` |
| 4.3% |      529.239 |       4 | `./malloc/./malloc/malloc.c:4268` |
| 4.3% |      529.185 |       1 | `./malloc/./malloc/malloc.c:4405` |

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
| 100.0% | 12,116,223.811 |      42 | `ZSTD_encodeSequences` | `lib//common/bitstream.h` |
|  <0.1% |        791.989 |      27 | `ZSTD_encodeSequences` | `lib//common/mem.h`       |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`)

|      % |   Instructions | Samples | Caller                          | Location                                 |
| -----: | -------------: | ------: | ------------------------------- | ---------------------------------------- |
| 100.0% | 11,715,838.369 |     120 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_compress_internal.h` |
|  <0.1% |        439.994 |      57 | `ZSTD_buildSeqStore`            | `lib//compress/zstd_compress.c`          |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`)

|      % |  Instructions | Samples | Caller                          | Location                                 |
| -----: | ------------: | ------: | ------------------------------- | ---------------------------------------- |
| 100.0% | 8,326,433.418 |      96 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_compress_internal.h` |
|  <0.1% |       255.996 |       9 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_double_fast.c`       |

##### `HIST_count_parallel_wksp` (`lib//compress/hist.c`)

|     % | Instructions | Samples | Caller              | Location                                  |
| ----: | -----------: | ------: | ------------------- | ----------------------------------------- |
| 55.3% | 1,082,515.21 |      16 | `ZSTD_buildCTable`  | `lib//compress/zstd_compress_sequences.c` |
|  1.3% |   25,661.182 |      10 | `HIST_count_simple` | `lib//compress/hist.c`                    |
|  0.3% |     5,912.44 |       5 | `(below main)`      | `programs/zstd`                           |
|  0.1% |    1,733.268 |       5 | `dl_main`           | `./elf/./elf/rtld.c`                      |

##### `ZSTD_XXH64_update` (`lib//common/xxhash.h`)

|     % | Instructions | Samples | Caller                     | Location                        |
| ----: | -----------: | ------: | -------------------------- | ------------------------------- |
| 50.0% |  753,743.537 |      37 | `ZSTD_compress_frameChunk` | `lib//compress/zstd_compress.c` |
|  0.3% |    5,247.455 |      18 | `(below main)`             | `programs/zstd`                 |
|  0.1% |    1,538.323 |      18 | `dl_main`                  | `./elf/./elf/rtld.c`            |

##### `ZSTD_seqToCodes` (`lib//compress/zstd_compress_internal.h`)

|      % |  Instructions | Samples | Caller            | Location                        |
| -----: | ------------: | ------: | ----------------- | ------------------------------- |
| 100.0% | 1,370,262.979 |       5 | `ZSTD_seqToCodes` | `lib//compress/zstd_compress.c` |

##### `ZSTD_seqToCodes` (`lib//compress/zstd_compress.c`)

|      % |  Instructions | Samples | Caller                          | Location                        |
| -----: | ------------: | ------: | ------------------------------- | ------------------------------- |
| 100.0% | 1,224,409.004 |      21 | `ZSTD_buildSequencesStatistics` | `lib//compress/zstd_compress.c` |

##### `HUF_compress1X_usingCTable_internal.constprop.0` (`lib//compress/huf_compress.c`)

|     % | Instructions | Samples | Caller                                            | Location                       |
| ----: | -----------: | ------: | ------------------------------------------------- | ------------------------------ |
| 75.0% |  318,693.176 |     104 | `HUF_compress1X_usingCTable_internal.constprop.0` | `lib//compress/huf_compress.c` |
| 25.0% |  106,105.534 |      78 | `HUF_compressCTable_internal.isra.0`              | `lib//compress/huf_compress.c` |

##### `FSE_buildCTable_wksp` (`lib//compress/fse_compress.c`)

|     % | Instructions | Samples | Caller                 | Location                                  |
| ----: | -----------: | ------: | ---------------------- | ----------------------------------------- |
| 99.2% |  222,748.598 |      83 | `FSE_buildCTable_wksp` | `lib//compress/fse_compress.c`            |
|  0.8% |    1,696.089 |      39 | `ZSTD_buildCTable`     | `lib//compress/zstd_compress_sequences.c` |
| <0.1% |       40.231 |      26 | `HIST_count_simple`    | `lib//compress/hist.c`                    |

##### `__GI_memcpy` (`./string/../sysdeps/aarch64/multiarch/../memcpy.S`)

|     % | Instructions | Samples | Caller                          | Location                                   |
| ----: | -----------: | ------: | ------------------------------- | ------------------------------------------ |
| 88.5% |  161,297.761 |     114 | `ZSTDMT_compressStream_generic` | `lib//compress/zstdmt_compress.c`          |
|  9.0% |   16,389.772 |      57 | `_dl_runtime_resolve`           | `./elf/../sysdeps/aarch64/dl-trampoline.S` |
|  1.2% |    2,095.971 |       3 | `ZSTD_compressLiterals`         | `lib//compress/zstd_compress_literals.c`   |
|  0.7% |    1,298.188 |       2 | `HUF_compress_internal`         | `lib//compress/huf_compress.c`             |
|  0.5% |      843.988 |       3 | `_IO_file_xsputn@@GLIBC_2.17`   | `./libio/./libio/fileops.c`                |

##### `HUF_buildCTable_wksp` (`lib//compress/huf_compress.c`)

|     % | Instructions | Samples | Caller                     | Location                       |
| ----: | -----------: | ------: | -------------------------- | ------------------------------ |
| 99.5% |   96,661.467 |     190 | `HUF_buildCTable_wksp`     | `lib//compress/huf_compress.c` |
|  0.5% |      459.816 |      24 | `HIST_count_parallel_wksp` | `lib//compress/hist.c`         |

##### `__GI_memset` (`./string/../sysdeps/aarch64/nptl/../memset.S`)

|     % | Instructions | Samples | Caller                           | Location                                   |
| ----: | -----------: | ------: | -------------------------------- | ------------------------------------------ |
| 80.4% |   60,903.829 |      36 | `ZSTD_resetCCtx_internal`        | `lib//compress/zstd_cwksp.h`               |
| 14.3% |   10,801.386 |      78 | `HIST_count_parallel_wksp`       | `lib//compress/hist.c`                     |
|  4.4% |    3,297.991 |       2 | `HUF_buildCTable_wksp`           | `lib//compress/huf_compress.c`             |
|  0.6% |      427.994 |       3 | `_dl_runtime_resolve`            | `./elf/../sysdeps/aarch64/dl-trampoline.S` |
|  0.3% |      227.997 |       3 | `__pthread_mutex_unlock_usercnt` | `./nptl/./nptl/pthread_mutex_unlock.c`     |

##### `do_lookup_x` (`./elf/./elf/dl-lookup.c`)

|     % | Instructions | Samples | Caller         | Location                  |
| ----: | -----------: | ------: | -------------- | ------------------------- |
| 73.0% |   21,058.649 |      35 | `do_lookup_x`  | `./elf/./elf/dl-lookup.c` |
|  0.2% |       54.187 |      22 | `(below main)` | `programs/zstd`           |
|  0.1% |       15.885 |      22 | `dl_main`      | `./elf/./elf/rtld.c`      |

##### `FSE_writeNCount_generic` (`lib//compress/fse_compress.c`)

|     % | Instructions | Samples | Caller                    | Location                                  |
| ----: | -----------: | ------: | ------------------------- | ----------------------------------------- |
| 91.7% |   22,115.383 |      39 | `FSE_writeNCount_generic` | `lib//compress/fse_compress.c`            |
|  8.1% |    1,948.407 |      84 | `ZSTD_buildCTable`        | `lib//compress/zstd_compress_sequences.c` |
|  0.2% |       46.216 |      56 | `HIST_count_simple`       | `lib//compress/hist.c`                    |

##### `_dl_lookup_symbol_x` (`./elf/./elf/dl-lookup.c`)

|    % | Instructions | Samples | Caller         | Location             |
| ---: | -----------: | ------: | -------------- | -------------------- |
| 0.7% |      155.681 |      24 | `(below main)` | `programs/zstd`      |
| 0.2% |       45.639 |      24 | `dl_main`      | `./elf/./elf/rtld.c` |

##### `HUF_writeCTable_wksp` (`lib//compress/huf_compress.c`)

|     % | Instructions | Samples | Caller                             | Location                       |
| ----: | -----------: | ------: | ---------------------------------- | ------------------------------ |
| 99.8% |   18,699.393 |      70 | `HIST_count_parallel_wksp`         | `lib//compress/hist.c`         |
|  0.1% |       27.925 |       5 | `FSE_buildCTable_wksp`             | `lib//compress/fse_compress.c` |
| <0.1% |        3.603 |       1 | `FSE_compress_usingCTable_generic` | `lib//compress/fse_compress.c` |

##### `FSE_compress_usingCTable_generic` (`lib//compress/fse_compress.c`)

|     % | Instructions | Samples | Caller                             | Location                       |
| ----: | -----------: | ------: | ---------------------------------- | ------------------------------ |
| 87.2% |   15,073.081 |      15 | `FSE_compress_usingCTable`         | `lib//compress/fse_compress.c` |
| 12.8% |    2,215.967 |       1 | `FSE_compress_usingCTable_generic` | `lib//compress/fse_compress.c` |

##### `FSE_normalizeCount` (`lib//compress/fse_compress.c`)

|     % | Instructions | Samples | Caller               | Location                                  |
| ----: | -----------: | ------: | -------------------- | ----------------------------------------- |
| 90.2% |   14,703.364 |      19 | `FSE_normalizeCount` | `lib//compress/fse_compress.c`            |
|  9.6% |    1,558.726 |      57 | `ZSTD_buildCTable`   | `lib//compress/zstd_compress_sequences.c` |
|  0.2% |       36.973 |      38 | `HIST_count_simple`  | `lib//compress/hist.c`                    |

##### `_int_malloc` (`./malloc/./malloc/malloc.c`)

|     % | Instructions | Samples | Caller         | Location                     |
| ----: | -----------: | ------: | -------------- | ---------------------------- |
| 59.0% |    7,336.225 |      39 | `_int_malloc`  | `./malloc/./malloc/malloc.c` |
|  0.3% |       35.424 |      58 | `(below main)` | `programs/zstd`              |
|  0.1% |       10.385 |      58 | `dl_main`      | `./elf/./elf/rtld.c`         |

##### `_dl_relocate_object` (`./elf/../sysdeps/generic/ldsodefs.h`)

|    % | Instructions | Samples | Caller         | Location             |
| ---: | -----------: | ------: | -------------- | -------------------- |
| 0.7% |       86.025 |       3 | `(below main)` | `programs/zstd`      |
| 0.2% |       25.219 |       3 | `dl_main`      | `./elf/./elf/rtld.c` |

### Total instructions

Functions ranked by total instructions recorded in the function and all its callees.

|     % |   Instructions | Samples | Function                                          | Location                                  |
| ----: | -------------: | ------: | ------------------------------------------------- | ----------------------------------------- |
| 50.7% | 20,044,706.753 |     423 | `ZSTD_buildSeqStore`                              | `lib//compress/zstd_compress.c`           |
| 50.7% | 20,043,609.768 |     297 | `ZSTD_compressBlock_doubleFast`                   | `lib//compress/zstd_double_fast.c`        |
| 50.7% | 20,042,878.779 |     237 | `ZSTD_compressBlock_doubleFast`                   | `lib//compress/zstd_compress_internal.h`  |
| 30.6% |  12,119,151.77 |     102 | `ZSTD_encodeSequences`                            | `lib//compress/zstd_compress_sequences.c` |
| 30.6% | 12,117,895.788 |      75 | `ZSTD_encodeSequences`                            | `lib//common/mem.h`                       |
| 30.6% |   12,117,015.8 |      69 | `ZSTD_encodeSequences`                            | `lib//common/bitstream.h`                 |
|  7.2% |  2,828,475.737 |   1,444 | `HIST_count_parallel_wksp`                        | `lib//compress/hist.c`                    |
|  6.6% |  2,595,159.976 |      68 | `ZSTD_buildSequencesStatistics`                   | `lib//compress/zstd_compress.c`           |
|  6.6% |  2,594,671.983 |      26 | `ZSTD_seqToCodes`                                 | `lib//compress/zstd_compress.c`           |
|  3.8% |  1,507,442.075 |      91 | `ZSTD_XXH64_update`                               | `lib//common/xxhash.h`                    |
|  3.5% |  1,376,684.166 |     516 | `ZSTD_buildCTable`                                | `lib//compress/zstd_compress_sequences.c` |
|  3.5% |  1,370,262.979 |       5 | `ZSTD_seqToCodes`                                 | `lib//compress/zstd_compress_internal.h`  |
|  1.9% |    754,501.527 |     160 | `ZSTD_compress_frameChunk`                        | `lib//compress/zstd_compress.c`           |
|  1.1% |    425,147.536 |     200 | `HUF_compressCTable_internal.isra.0`              | `lib//compress/huf_compress.c`            |
|  1.1% |    424,901.773 |     184 | `HUF_compress1X_usingCTable_internal.constprop.0` | `lib//compress/huf_compress.c`            |
|  0.9% |        363,167 |   6,519 | `(below main)`                                    | `./elf/../sysdeps/aarch64/dl-start.S`     |
|  0.9% |        363,162 |   6,514 | `_dl_start`                                       | `./elf/./elf/rtld.c`                      |
|  0.7% |        276,399 |   3,260 | `_dl_init`                                        | `./elf/./elf/dl-init.c`                   |
|  0.7% |        275,376 |   3,254 | `(below main)`                                    | `programs/zstd`                           |
|  0.6% |    248,692.595 |     181 | `FSE_buildCTable_wksp`                            | `lib//compress/fse_compress.c`            |

#### Callees

Callees ranked by contribution to each function's total instructions. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `ZSTD_buildSeqStore` (`lib//compress/zstd_compress.c`)

|      % |   Instructions | Samples | Callee                          | Location                           |
| -----: | -------------: | ------: | ------------------------------- | ---------------------------------- |
| 100.0% | 20,043,609.768 |     297 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_double_fast.c` |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`)

|      % |   Instructions | Samples | Callee                          | Location                                 |
| -----: | -------------: | ------: | ------------------------------- | ---------------------------------------- |
| 100.0% | 20,042,878.779 |     237 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_compress_internal.h` |
|  <0.1% |        290.996 |       3 | `ZSTD_buildSeqStore`            | `lib//compress/zstd_compress.c`          |

##### `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`)

|     % |   Instructions | Samples | Callee                          | Location                                 |
| ----: | -------------: | ------: | ------------------------------- | ---------------------------------------- |
| 58.5% | 11,715,838.369 |     120 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_double_fast.c`       |
| 41.5% |  8,326,433.418 |      96 | `ZSTD_compressBlock_doubleFast` | `lib//compress/zstd_compress_internal.h` |
| <0.1% |        350.995 |      12 | `ZSTD_compressBlock_doubleFast` | `lib//common/mem.h`                      |

##### `ZSTD_encodeSequences` (`lib//compress/zstd_compress_sequences.c`)

|      % |   Instructions | Samples | Callee                 | Location            |
| -----: | -------------: | ------: | ---------------------- | ------------------- |
| 100.0% | 12,117,895.788 |      75 | `ZSTD_encodeSequences` | `lib//common/mem.h` |

##### `ZSTD_encodeSequences` (`lib//common/mem.h`)

|      % | Instructions | Samples | Callee                 | Location                  |
| -----: | -----------: | ------: | ---------------------- | ------------------------- |
| 100.0% | 12,117,015.8 |      69 | `ZSTD_encodeSequences` | `lib//common/bitstream.h` |

##### `ZSTD_encodeSequences` (`lib//common/bitstream.h`)

|      % |   Instructions | Samples | Callee                 | Location                  |
| -----: | -------------: | ------: | ---------------------- | ------------------------- |
| 100.0% | 12,116,223.811 |      42 | `ZSTD_encodeSequences` | `lib//common/bitstream.h` |

##### `HIST_count_parallel_wksp` (`lib//compress/hist.c`)

|     % | Instructions | Samples | Callee                               | Location                                       |
| ----: | -----------: | ------: | ------------------------------------ | ---------------------------------------------- |
| 48.7% | 1,376,650.89 |     494 | `ZSTD_buildCTable`                   | `lib//compress/zstd_compress_sequences.c`      |
| 15.0% |  425,147.536 |     200 | `HUF_compressCTable_internal.isra.0` | `lib//compress/huf_compress.c`                 |
|  3.9% |  110,122.979 |     398 | `HUF_buildCTable_wksp`               | `lib//compress/huf_compress.c`                 |
|  2.1% |   58,644.924 |     276 | `HUF_writeCTable_wksp`               | `lib//compress/huf_compress.c`                 |
|  0.4% |   10,801.386 |      78 | `__GI_memset`                        | `./string/../sysdeps/aarch64/nptl/../memset.S` |

##### `ZSTD_buildSequencesStatistics` (`lib//compress/zstd_compress.c`)

|      % |  Instructions | Samples | Callee            | Location                        |
| -----: | ------------: | ------: | ----------------- | ------------------------------- |
| 100.0% | 2,594,671.983 |      26 | `ZSTD_seqToCodes` | `lib//compress/zstd_compress.c` |

##### `ZSTD_seqToCodes` (`lib//compress/zstd_compress.c`)

|     % |  Instructions | Samples | Callee            | Location                                 |
| ----: | ------------: | ------: | ----------------- | ---------------------------------------- |
| 52.8% | 1,370,262.979 |       5 | `ZSTD_seqToCodes` | `lib//compress/zstd_compress_internal.h` |

##### `ZSTD_buildCTable` (`lib//compress/zstd_compress_sequences.c`)

|     % |  Instructions | Samples | Callee                     | Location                                  |
| ----: | ------------: | ------: | -------------------------- | ----------------------------------------- |
| 79.1% | 1,088,843.638 |      60 | `HIST_count_parallel_wksp` | `lib//compress/hist.c`                    |
| 17.6% |   242,930.361 |     149 | `FSE_buildCTable_wksp`     | `lib//compress/fse_compress.c`            |
|  1.7% |    23,551.375 |     121 | `FSE_writeNCount_generic`  | `lib//compress/fse_compress.c`            |
|  1.2% |    15,921.411 |      74 | `FSE_normalizeCount`       | `lib//compress/fse_compress.c`            |
|  0.1% |     1,402.853 |      33 | `ZSTD_buildCTable`         | `lib//compress/zstd_compress_sequences.c` |

##### `ZSTD_compress_frameChunk` (`lib//compress/zstd_compress.c`)

|     % | Instructions | Samples | Callee                         | Location                        |
| ----: | -----------: | ------: | ------------------------------ | ------------------------------- |
| 99.9% |  753,743.537 |      37 | `ZSTD_XXH64_update`            | `lib//common/xxhash.h`          |
| <0.1% |       96.999 |       3 | `ZSTD_compressEnd_public`      | `lib//compress/zstd_compress.c` |
| <0.1% |       47.999 |       3 | `ZSTD_overflowCorrectIfNeeded` | `lib//compress/zstd_compress.c` |

##### `HUF_compressCTable_internal.isra.0` (`lib//compress/huf_compress.c`)

|     % | Instructions | Samples | Callee                                            | Location                       |
| ----: | -----------: | ------: | ------------------------------------------------- | ------------------------------ |
| 99.9% |  424,901.773 |     184 | `HUF_compress1X_usingCTable_internal.constprop.0` | `lib//compress/huf_compress.c` |

##### `HUF_compress1X_usingCTable_internal.constprop.0` (`lib//compress/huf_compress.c`)

|     % | Instructions | Samples | Callee                                            | Location                       |
| ----: | -----------: | ------: | ------------------------------------------------- | ------------------------------ |
| 75.0% |  318,796.238 |     106 | `HUF_compress1X_usingCTable_internal.constprop.0` | `lib//compress/huf_compress.c` |
| <0.1% |      103.062 |       2 | `HUF_compressCTable_internal.isra.0`              | `lib//compress/huf_compress.c` |

##### `(below main)` (`./elf/../sysdeps/aarch64/dl-start.S`)

|      % | Instructions | Samples | Callee      | Location             |
| -----: | -----------: | ------: | ----------- | -------------------- |
| 100.0% |      363,162 |   6,514 | `_dl_start` | `./elf/./elf/rtld.c` |

##### `_dl_start` (`./elf/./elf/rtld.c`)

|     % | Instructions | Samples | Callee                     | Location                                       |
| ----: | -----------: | ------: | -------------------------- | ---------------------------------------------- |
| 76.1% |      276,399 |   3,260 | `_dl_init`                 | `./elf/./elf/dl-init.c`                        |
| 23.9% |       86,681 |   3,249 | `_dl_start`                | `./elf/./get-dynamic-info.h`                   |
| 23.7% |       86,003 |   3,187 | `_dl_sysdep_start`         | `./elf/../sysdeps/unix/sysv/linux/dl-sysdep.c` |
| <0.1% |           24 |       1 | `_dl_setup_hash`           | `./elf/./elf/dl-setup_hash.c`                  |
| <0.1% |           14 |       1 | `__rtld_malloc_init_stubs` | `./elf/./elf/dl-minimal.c`                     |

##### `_dl_init` (`./elf/./elf/dl-init.c`)

|     % | Instructions | Samples | Callee         | Location                |
| ----: | -----------: | ------: | -------------- | ----------------------- |
| 99.6% |      275,376 |   3,254 | `(below main)` | `programs/zstd`         |
|  0.4% |        1,003 |       1 | `call_init`    | `./elf/./elf/dl-init.c` |

##### `(below main)` (`programs/zstd`)

|     % | Instructions | Samples | Callee                          | Location                                  |
| ----: | -----------: | ------: | ------------------------------- | ----------------------------------------- |
| 50.7% |  139,556.713 |     141 | `ZSTD_buildSeqStore`            | `lib//compress/zstd_compress.c`           |
| 30.6% |   84,376.839 |      34 | `ZSTD_encodeSequences`          | `lib//compress/zstd_compress_sequences.c` |
|  7.2% |   19,692.619 |     118 | `HIST_count_parallel_wksp`      | `lib//compress/hist.c`                    |
|  6.6% |   18,068.211 |      23 | `ZSTD_buildSequencesStatistics` | `lib//compress/zstd_compress.c`           |
|  1.9% |    5,253.045 |      59 | `ZSTD_compress_frameChunk`      | `lib//compress/zstd_compress.c`           |

##### `FSE_buildCTable_wksp` (`lib//compress/fse_compress.c`)

|     % | Instructions | Samples | Callee                     | Location                       |
| ----: | -----------: | ------: | -------------------------- | ------------------------------ |
| 89.6% |  222,748.598 |      83 | `FSE_buildCTable_wksp`     | `lib//compress/fse_compress.c` |
|  7.7% |    19,193.26 |      24 | `FSE_compress_usingCTable` | `lib//compress/fse_compress.c` |
|  2.0% |    4,986.493 |       4 | `FSE_buildCTable_wksp`     | `lib//common/mem.h`            |
| <0.1% |       27.925 |       5 | `HUF_writeCTable_wksp`     | `lib//compress/huf_compress.c` |

## Hottest call stacks

Call stacks ranked by instructions recorded in their leaf frame.

|     % |   Instructions | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 30.4% | 12,007,137.748 |      14 | `ZSTD_encodeSequences` (`lib//common/bitstream.h`) ← `ZSTD_encodeSequences` ← `ZSTD_encodeSequences` (`lib//common/mem.h`) ← `ZSTD_encodeSequences` (`lib//compress/zstd_compress_sequences.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 29.4% | 11,610,357.098 |      40 | `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`) ← `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`) ← `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`) ← `ZSTD_buildSeqStore` (`lib//compress/zstd_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 20.9% |  8,251,467.996 |      32 | `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`) ← `ZSTD_compressBlock_doubleFast` ← `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`) ← `ZSTD_buildSeqStore` (`lib//compress/zstd_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  3.4% |  1,357,926.083 |       2 | `ZSTD_seqToCodes` (`lib//compress/zstd_compress_internal.h`) ← `ZSTD_seqToCodes` (`lib//compress/zstd_compress.c`) ← `ZSTD_buildSequencesStatistics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.1% |  1,213,385.275 |       7 | `ZSTD_seqToCodes` (`lib//compress/zstd_compress.c`) ← `ZSTD_buildSequencesStatistics`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.7% |  1,074,823.389 |      10 | `HIST_count_parallel_wksp` (`lib//compress/hist.c`) ← `ZSTD_buildCTable` (`lib//compress/zstd_compress_sequences.c`) ← `HIST_count_parallel_wksp` (`lib//compress/hist.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.9% |    746,957.354 |      18 | `ZSTD_XXH64_update` (`lib//common/xxhash.h`) ← `ZSTD_compress_frameChunk` (`lib//compress/zstd_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.8% |    318,693.176 |     104 | `HUF_compress1X_usingCTable_internal.constprop.0` (`lib//compress/huf_compress.c`) ← `HUF_compress1X_usingCTable_internal.constprop.0` ← `HUF_compressCTable_internal.isra.0` ← `HIST_count_parallel_wksp` (`lib//compress/hist.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.5% |    216,026.824 |      80 | `FSE_buildCTable_wksp` (`lib//compress/fse_compress.c`) ← `FSE_buildCTable_wksp` ← `ZSTD_buildCTable` (`lib//compress/zstd_compress_sequences.c`) ← `HIST_count_parallel_wksp` (`lib//compress/hist.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.4% |    159,845.548 |     110 | `__GI_memcpy` (`./string/../sysdeps/aarch64/multiarch/../memcpy.S`) ← `ZSTDMT_compressStream_generic` (`lib//compress/zstdmt_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.3% |    106,105.534 |      78 | `HUF_compress1X_usingCTable_internal.constprop.0` (`lib//compress/huf_compress.c`) ← `HUF_compressCTable_internal.isra.0` ← `HIST_count_parallel_wksp` (`lib//compress/hist.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.2% |     96,661.467 |     190 | `HUF_buildCTable_wksp` (`lib//compress/huf_compress.c`) ← `HUF_buildCTable_wksp` ← `HIST_count_parallel_wksp` (`lib//compress/hist.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.2% |     84,356.453 |      14 | `ZSTD_encodeSequences` (`lib//common/bitstream.h`) ← `ZSTD_encodeSequences` ← `ZSTD_encodeSequences` (`lib//common/mem.h`) ← `ZSTD_encodeSequences` (`lib//compress/zstd_compress_sequences.c`) ← `(below main)` (`programs/zstd`) ← `_dl_init` (`./elf/./elf/dl-init.c`) ← `_dl_start` (`./elf/./elf/rtld.c`) ← `(below main)` (`./elf/../sysdeps/aarch64/dl-start.S`)                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.2% |     81,568.861 |      40 | `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`) ← `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`) ← `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`) ← `ZSTD_buildSeqStore` (`lib//compress/zstd_compress.c`) ← `(below main)` (`programs/zstd`) ← `_dl_init` (`./elf/./elf/dl-init.c`) ← `_dl_start` (`./elf/./elf/rtld.c`) ← `(below main)` (`./elf/../sysdeps/aarch64/dl-start.S`)                                                                                                                                                                                                                                                                                                                             |
|  0.2% |     60,903.829 |      36 | `__GI_memset` (`./string/../sysdeps/aarch64/nptl/../memset.S`) ← `ZSTD_resetCCtx_internal` (`lib//compress/zstd_cwksp.h`) ← `ZSTD_resetCCtx_internal` ← `malloc` (`./malloc/./malloc/malloc.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |     57,970.899 |      32 | `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`) ← `ZSTD_compressBlock_doubleFast` ← `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`) ← `ZSTD_buildSeqStore` (`lib//compress/zstd_compress.c`) ← `(below main)` (`programs/zstd`) ← `_dl_init` (`./elf/./elf/dl-init.c`) ← `_dl_start` (`./elf/./elf/rtld.c`) ← `(below main)` (`./elf/../sysdeps/aarch64/dl-start.S`)                                                                                                                                                                                                                                                                                                                                                                  |
|  0.1% |     25,661.182 |      10 | `HIST_count_parallel_wksp` (`lib//compress/hist.c`) ← `HIST_count_simple` ← `HUF_writeCTable_wksp` (`lib//compress/huf_compress.c`) ← `HIST_count_parallel_wksp` (`lib//compress/hist.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.1% |      24,729.61 |      14 | `ZSTD_encodeSequences` (`lib//common/bitstream.h`) ← `ZSTD_encodeSequences` ← `ZSTD_encodeSequences` (`lib//common/mem.h`) ← `ZSTD_encodeSequences` (`lib//compress/zstd_compress_sequences.c`) ← `dl_main` (`./elf/./elf/rtld.c`) ← `_dl_sysdep_start` (`./elf/../sysdeps/unix/sysv/linux/aarch64/cpu-features.c`) ← `__GI___tunables_init` (`./elf/./elf/dl-tunables.c`) ← `_dl_sysdep_start` (`./elf/../sysdeps/unix/sysv/linux/dl-sysdep.c`) ← `_dl_start` (`./elf/./elf/rtld.c`) ← `_dl_start` (`./elf/./elf/do-rel.h`) ← `_dl_start` ← `_dl_start` (`./elf/./get-dynamic-info.h`) ← `_dl_start` ← `_dl_start` (`./elf/./elf/rtld.c`) ← `(below main)` (`./elf/../sysdeps/aarch64/dl-start.S`)                                                                                   |
|  0.1% |      23,912.41 |      40 | `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`) ← `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_compress_internal.h`) ← `ZSTD_compressBlock_doubleFast` (`lib//compress/zstd_double_fast.c`) ← `ZSTD_buildSeqStore` (`lib//compress/zstd_compress.c`) ← `dl_main` (`./elf/./elf/rtld.c`) ← `_dl_sysdep_start` (`./elf/../sysdeps/unix/sysv/linux/aarch64/cpu-features.c`) ← `__GI___tunables_init` (`./elf/./elf/dl-tunables.c`) ← `_dl_sysdep_start` (`./elf/../sysdeps/unix/sysv/linux/dl-sysdep.c`) ← `_dl_start` (`./elf/./elf/rtld.c`) ← `_dl_start` (`./elf/./elf/do-rel.h`) ← `_dl_start` ← `_dl_start` (`./elf/./get-dynamic-info.h`) ← `_dl_start` ← `_dl_start` (`./elf/./elf/rtld.c`) ← `(below main)` (`./elf/../sysdeps/aarch64/dl-start.S`) |
|  0.1% |     21,462.631 |      36 | `FSE_writeNCount_generic` (`lib//compress/fse_compress.c`) ← `FSE_writeNCount_generic` ← `ZSTD_buildCTable` (`lib//compress/zstd_compress_sequences.c`) ← `HIST_count_parallel_wksp` (`lib//compress/hist.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

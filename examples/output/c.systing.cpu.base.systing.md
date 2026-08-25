# CPU profile

Took 11.95s over 11,955 samples (1.0ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| Ours     | 99.8% | 11.93s |  11,933 |
| Native   |  0.1% | 11.0ms |      11 |
| Kernel   |  0.1% | 11.0ms |      11 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                            | Location                    |
| ----: | ------: | ------: | ----------------------------------- | --------------------------- |
| 84.1% |  10.05s |  10,050 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c`                |
| 13.4% |   1.60s |   1,605 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c`                |
|  0.9% | 108.0ms |     108 | `ZSTD_litLengthPrice`               | `zstd_opt.c`                |
|  0.2% |  29.0ms |      29 | `ZSTD_insertBt1`                    | `zstd_opt.c`                |
|  0.2% |  26.0ms |      26 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c`                |
|  0.2% |  25.0ms |      25 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c`                |
|  0.2% |  22.0ms |      22 | `ZSTD_updateStats`                  | `zstd_opt.c`                |
|  0.1% |  14.0ms |      14 | `HIST_count_parallel_wksp`          | `hist.c`                    |
|  0.1% |  13.0ms |      13 | `ZSTD_encodeSequences`              | `zstd_compress_sequences.c` |
|  0.1% |  11.0ms |      11 | `unknown (libc.so.6)`               | `<unknown>`                 |
|  0.1% |   8.0ms |       8 | `ZSTD_XXH64_update`                 | `xxhash.h`                  |
|  0.1% |   7.0ms |       7 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c`                |
|  0.1% |   7.0ms |       7 | `ZSTD_seqToCodes`                   | `zstd_compress.c`           |
|  0.1% |   6.0ms |       6 | `__arch_copy_to_user ([kernel])`    | `<unknown>`                 |
| <0.1% |   5.0ms |       5 | `HUF_buildCTable_wksp`              | `huf_compress.c`            |
| <0.1% |   4.0ms |       4 | `ZSTD_deriveSeqStoreChunk`          | `zstd_compress.c`           |
| <0.1% |   2.0ms |       2 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c`           |
| <0.1% |   2.0ms |       2 | `FSE_buildCTable_wksp`              | `fse_compress.c`            |
| <0.1% |   1.0ms |       1 | `HUF_estimateCompressedSize`        | `huf_compress.c`            |
| <0.1% |   1.0ms |       1 | `get_mem_cgroup_from_mm ([kernel])` | `<unknown>`                 |

#### Categories

##### Ours

|     % |    Time | Samples | Function                            | Location                    |
| ----: | ------: | ------: | ----------------------------------- | --------------------------- |
| 84.1% |  10.05s |  10,050 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c`                |
| 13.4% |   1.60s |   1,605 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c`                |
|  0.9% | 108.0ms |     108 | `ZSTD_litLengthPrice`               | `zstd_opt.c`                |
|  0.2% |  29.0ms |      29 | `ZSTD_insertBt1`                    | `zstd_opt.c`                |
|  0.2% |  26.0ms |      26 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c`                |
|  0.2% |  25.0ms |      25 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c`                |
|  0.2% |  22.0ms |      22 | `ZSTD_updateStats`                  | `zstd_opt.c`                |
|  0.1% |  14.0ms |      14 | `HIST_count_parallel_wksp`          | `hist.c`                    |
|  0.1% |  13.0ms |      13 | `ZSTD_encodeSequences`              | `zstd_compress_sequences.c` |
|  0.1% |   8.0ms |       8 | `ZSTD_XXH64_update`                 | `xxhash.h`                  |
|  0.1% |   7.0ms |       7 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c`                |
|  0.1% |   7.0ms |       7 | `ZSTD_seqToCodes`                   | `zstd_compress.c`           |
| <0.1% |   5.0ms |       5 | `HUF_buildCTable_wksp`              | `huf_compress.c`            |
| <0.1% |   4.0ms |       4 | `ZSTD_deriveSeqStoreChunk`          | `zstd_compress.c`           |
| <0.1% |   2.0ms |       2 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c`           |
| <0.1% |   2.0ms |       2 | `FSE_buildCTable_wksp`              | `fse_compress.c`            |
| <0.1% |   1.0ms |       1 | `HUF_estimateCompressedSize`        | `huf_compress.c`            |
| <0.1% |   1.0ms |       1 | `ZSTD_buildSequencesStatistics`     | `zstd_compress.c`           |
| <0.1% |   1.0ms |       1 | `FSE_compress_usingCTable_generic`  | `fse_compress.c`            |
| <0.1% |   1.0ms |       1 | `ZSTD_fseBitCost`                   | `zstd_compress_sequences.c` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |   Time | Samples | Location         |
| -----: | -----: | ------: | ---------------- |
| 100.0% | 10.05s |  10,050 | `zstd_opt.c:876` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 1.60s |   1,605 | `zstd_opt.c:1455` |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 38.9% | 42.0ms |      42 | `zstd_opt.c:315` |
| 25.0% | 27.0ms |      27 | `zstd_opt.c:313` |
| 16.7% | 18.0ms |      18 | `zstd_opt.c:306` |
| 11.1% | 12.0ms |      12 | `zstd_opt.c:310` |
|  6.5% |  7.0ms |       7 | `zstd_opt.c:298` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

|     % |  Time | Samples | Location         |
| ----: | ----: | ------: | ---------------- |
| 27.6% | 8.0ms |       8 | `zstd_opt.c:538` |
| 27.6% | 8.0ms |       8 | `zstd_opt.c:518` |
| 17.2% | 5.0ms |       5 | `zstd_opt.c:489` |
| 17.2% | 5.0ms |       5 | `zstd_opt.c:545` |
|  6.9% | 2.0ms |       2 | `zstd_opt.c:532` |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 80.8% | 21.0ms |      21 | `zstd_opt.c:266` |
| 19.2% |  5.0ms |       5 | `zstd_opt.c:273` |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 44.0% | 11.0ms |      11 | `zstd_opt.c:424` |
| 36.0% |  9.0ms |       9 | `zstd_opt.c:423` |
|  8.0% |  2.0ms |       2 | `zstd_opt.c:420` |
|  8.0% |  2.0ms |       2 | `zstd_opt.c:415` |
|  4.0% |  1.0ms |       1 | `zstd_opt.c:428` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|     % |  Time | Samples | Location         |
| ----: | ----: | ------: | ---------------- |
| 27.3% | 6.0ms |       6 | `zstd_opt.c:385` |
| 22.7% | 5.0ms |       5 | `zstd_opt.c:384` |
| 13.6% | 3.0ms |       3 | `zstd_opt.c:364` |
|  9.1% | 2.0ms |       2 | `zstd_opt.c:378` |
|  9.1% | 2.0ms |       2 | `zstd_opt.c:377` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |  Time | Samples | Location     |
| ----: | ----: | ------: | ------------ |
| 14.3% | 2.0ms |       2 | `hist.c:127` |
| 14.3% | 2.0ms |       2 | `hist.c:111` |
| 14.3% | 2.0ms |       2 | `hist.c:112` |
|  7.1% | 1.0ms |       1 | `hist.c:105` |
|  7.1% | 1.0ms |       1 | `hist.c:110` |

##### `ZSTD_encodeSequences` (`zstd_compress_sequences.c`)

|      % |   Time | Samples | Location                        |
| -----: | -----: | ------: | ------------------------------- |
| 100.0% | 13.0ms |      13 | `zstd_compress_sequences.c:437` |

##### `ZSTD_XXH64_update` (`xxhash.h`)

|     % |  Time | Samples | Location        |
| ----: | ----: | ------: | --------------- |
| 87.5% | 7.0ms |       7 | `xxhash.h:3559` |
| 12.5% | 1.0ms |       1 | `xxhash.h:3558` |

##### `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`)

|     % |  Time | Samples | Location          |
| ----: | ----: | ------: | ----------------- |
| 85.7% | 6.0ms |       6 | `zstd_opt.c:1028` |
| 14.3% | 1.0ms |       1 | `zstd_opt.c:1027` |

##### `ZSTD_seqToCodes` (`zstd_compress.c`)

|     % |  Time | Samples | Location               |
| ----: | ----: | ------: | ---------------------- |
| 42.9% | 3.0ms |       3 | `zstd_compress.c:2694` |
| 28.6% | 2.0ms |       2 | `zstd_compress.c:2696` |
| 14.3% | 1.0ms |       1 | `zstd_compress.c:2695` |
| 14.3% | 1.0ms |       1 | `zstd_compress.c:2697` |

##### `HUF_buildCTable_wksp` (`huf_compress.c`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 80.0% | 4.0ms |       4 | `huf_compress.c:778` |
| 20.0% | 1.0ms |       1 | `huf_compress.c:785` |

##### `ZSTD_deriveSeqStoreChunk` (`zstd_compress.c`)

|     % |  Time | Samples | Location               |
| ----: | ----: | ------: | ---------------------- |
| 75.0% | 3.0ms |       3 | `zstd_compress.c:3961` |
| 25.0% | 1.0ms |       1 | `zstd_compress.c:3944` |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

|      % |  Time | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 2.0ms |       2 | `zstd_compress.c:3822` |

##### `FSE_buildCTable_wksp` (`fse_compress.c`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 50.0% | 1.0ms |       1 | `fse_compress.c:161` |
| 50.0% | 1.0ms |       1 | `fse_compress.c:103` |

##### `HUF_estimateCompressedSize` (`huf_compress.c`)

|      % |  Time | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 1.0ms |       1 | `huf_compress.c:799` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

|      % |  Time | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 1.0ms |       1 | `zstd_compress.c:2764` |

##### `FSE_compress_usingCTable_generic` (`fse_compress.c`)

|      % |  Time | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 1.0ms |       1 | `fse_compress.c:599` |

##### `ZSTD_fseBitCost` (`zstd_compress_sequences.c`)

|      % |  Time | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 1.0ms |       1 | `zstd_compress_sequences.c:122` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                    | Location     |
| -----: | -----: | ------: | ------------------------- | ------------ |
| 100.0% | 10.05s |  10,050 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 99.4% | 1.59s |   1,596 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  0.6% | 9.0ms |       9 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

|      % |    Time | Samples | Caller               | Location          |
| -----: | ------: | ------: | -------------------- | ----------------- |
| 100.0% | 108.0ms |     108 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                          | Location     |
| -----: | -----: | ------: | ------------------------------- | ------------ |
| 100.0% | 29.0ms |      29 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 96.2% | 25.0ms |      25 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  3.8% |  1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                    | Location     |
| -----: | -----: | ------: | ------------------------- | ------------ |
| 100.0% | 25.0ms |      25 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 22.0ms |      22 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |  Time | Samples | Caller                              | Location          |
| ----: | ----: | ------: | ----------------------------------- | ----------------- |
| 57.1% | 8.0ms |       8 | `ZSTD_buildSequencesStatistics`     | `zstd_compress.c` |
| 42.9% | 6.0ms |       6 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c` |

##### `ZSTD_encodeSequences` (`zstd_compress_sequences.c`)

|      % |   Time | Samples | Caller                                  | Location          |
| -----: | -----: | ------: | --------------------------------------- | ----------------- |
| 100.0% | 13.0ms |      13 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `unknown (libc.so.6)` (`<unknown>`)

|     % |  Time | Samples | Caller                          | Location          |
| ----: | ----: | ------: | ------------------------------- | ----------------- |
| 72.7% | 8.0ms |       8 | `ZSTD_compressStream2`          | `zstd_compress.c` |
| 18.2% | 2.0ms |       2 | `ZSTD_resetCCtx_internal`       | `zstd_compress.c` |
|  9.1% | 1.0ms |       1 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |

##### `ZSTD_XXH64_update` (`xxhash.h`)

|     % |  Time | Samples | Caller                           | Location            |
| ----: | ----: | ------: | -------------------------------- | ------------------- |
| 62.5% | 5.0ms |       5 | `ZSTD_compressContinue_internal` | `zstd_compress.c`   |
| 37.5% | 3.0ms |       3 | `ZSTDMT_compressionJob`          | `zstdmt_compress.c` |

##### `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 7.0ms |       7 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_seqToCodes` (`zstd_compress.c`)

|     % |  Time | Samples | Caller                                  | Location          |
| ----: | ----: | ------: | --------------------------------------- | ----------------- |
| 57.1% | 4.0ms |       4 | `ZSTD_buildBlockEntropyStats`           | `zstd_compress.c` |
| 42.9% | 3.0ms |       3 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `__arch_copy_to_user ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                         | Location    |
| -----: | ----: | ------: | ------------------------------ | ----------- |
| 100.0% | 6.0ms |       6 | `copy_page_to_iter ([kernel])` | `<unknown>` |

##### `HUF_buildCTable_wksp` (`huf_compress.c`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 80.0% | 4.0ms |       4 | `HUF_optimalTableLog`         | `huf_compress.c`  |
| 20.0% | 1.0ms |       1 | `ZSTD_buildBlockEntropyStats` | `zstd_compress.c` |

##### `ZSTD_deriveSeqStoreChunk` (`zstd_compress.c`)

|     % |  Time | Samples | Caller                           | Location          |
| ----: | ----: | ------: | -------------------------------- | ----------------- |
| 75.0% | 3.0ms |       3 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |
| 25.0% | 1.0ms |       1 | `ZSTD_deriveBlockSplitsHelper`   | `zstd_compress.c` |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                                               | Location          |
| -----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 2.0ms |       2 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `FSE_buildCTable_wksp` (`fse_compress.c`)

|      % |  Time | Samples | Caller             | Location                    |
| -----: | ----: | ------: | ------------------ | --------------------------- |
| 100.0% | 2.0ms |       2 | `ZSTD_buildCTable` | `zstd_compress_sequences.c` |

##### `HUF_estimateCompressedSize` (`huf_compress.c`)

|      % |  Time | Samples | Caller                                               | Location          |
| -----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `get_mem_cgroup_from_mm ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                           | Location    |
| -----: | ----: | ------: | -------------------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `__mem_cgroup_charge ([kernel])` | `<unknown>` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                        | Location          |
| -----: | ----: | ------: | ----------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildBlockEntropyStats` | `zstd_compress.c` |

##### `FSE_compress_usingCTable_generic` (`fse_compress.c`)

|      % |  Time | Samples | Caller                 | Location         |
| -----: | ----: | ------: | ---------------------- | ---------------- |
| 100.0% | 1.0ms |       1 | `HUF_writeCTable_wksp` | `huf_compress.c` |

##### `ZSTD_fseBitCost` (`zstd_compress_sequences.c`)

|      % |  Time | Samples | Caller                          | Location          |
| -----: | ----: | ------: | ------------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                                             | Location                    |
| -----: | ------: | ------: | ---------------------------------------------------- | --------------------------- |
| 100.0% |  11.95s |  11,955 | `unknown (libc.so.6)`                                | `<unknown>`                 |
|  99.9% |  11.94s |  11,944 | `POOL_thread`                                        | `pool.c`                    |
|  99.8% |  11.93s |  11,937 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c`         |
|  99.8% |  11.93s |  11,932 | `ZSTD_compressContinue_internal`                     | `zstd_compress.c`           |
|  99.3% |  11.87s |  11,872 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`           |
|  97.9% |  11.70s |  11,709 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`                |
|  84.3% |  10.07s |  10,079 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`                |
|   0.9% | 108.0ms |     108 | `ZSTD_litLengthPrice`                                | `zstd_opt.c`                |
|   0.2% |  29.0ms |      29 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`           |
|   0.2% |  29.0ms |      29 | `ZSTD_insertBt1`                                     | `zstd_opt.c`                |
|   0.2% |  28.0ms |      28 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`           |
|   0.2% |  26.0ms |      26 | `ZSTD_rawLiteralsCost`                               | `zstd_opt.c`                |
|   0.2% |  25.0ms |      25 | `ZSTD_insertAndFindFirstIndexHash3`                  | `zstd_opt.c`                |
|   0.2% |  23.0ms |      23 | `ZSTD_entropyCompressSeqStore_internal`              | `zstd_compress.c`           |
|   0.2% |  23.0ms |      23 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`           |
|   0.2% |  22.0ms |      22 | `ZSTD_updateStats`                                   | `zstd_opt.c`                |
|   0.2% |  20.0ms |      20 | `ZSTD_compressBlock_btultra2`                        | `zstd_opt.c`                |
|   0.2% |  19.0ms |      19 | `ZSTD_buildBlockEntropyStats`                        | `zstd_compress.c`           |
|   0.1% |  15.0ms |      15 | `ZSTD_encodeSequences`                               | `zstd_compress_sequences.c` |
|   0.1% |  14.0ms |      14 | `HIST_count_parallel_wksp`                           | `hist.c`                    |

#### Categories

##### Ours

|     % |    Time | Samples | Function                                             | Location                    |
| ----: | ------: | ------: | ---------------------------------------------------- | --------------------------- |
| 99.9% |  11.94s |  11,944 | `POOL_thread`                                        | `pool.c`                    |
| 99.8% |  11.93s |  11,937 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c`         |
| 99.8% |  11.93s |  11,932 | `ZSTD_compressContinue_internal`                     | `zstd_compress.c`           |
| 99.3% |  11.87s |  11,872 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`           |
| 97.9% |  11.70s |  11,709 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`                |
| 84.3% |  10.07s |  10,079 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`                |
|  0.9% | 108.0ms |     108 | `ZSTD_litLengthPrice`                                | `zstd_opt.c`                |
|  0.2% |  29.0ms |      29 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`           |
|  0.2% |  29.0ms |      29 | `ZSTD_insertBt1`                                     | `zstd_opt.c`                |
|  0.2% |  28.0ms |      28 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`           |
|  0.2% |  26.0ms |      26 | `ZSTD_rawLiteralsCost`                               | `zstd_opt.c`                |
|  0.2% |  25.0ms |      25 | `ZSTD_insertAndFindFirstIndexHash3`                  | `zstd_opt.c`                |
|  0.2% |  23.0ms |      23 | `ZSTD_entropyCompressSeqStore_internal`              | `zstd_compress.c`           |
|  0.2% |  23.0ms |      23 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`           |
|  0.2% |  22.0ms |      22 | `ZSTD_updateStats`                                   | `zstd_opt.c`                |
|  0.2% |  20.0ms |      20 | `ZSTD_compressBlock_btultra2`                        | `zstd_opt.c`                |
|  0.2% |  19.0ms |      19 | `ZSTD_buildBlockEntropyStats`                        | `zstd_compress.c`           |
|  0.1% |  15.0ms |      15 | `ZSTD_encodeSequences`                               | `zstd_compress_sequences.c` |
|  0.1% |  14.0ms |      14 | `HIST_count_parallel_wksp`                           | `hist.c`                    |
|  0.1% |  13.0ms |      13 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c`           |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `unknown (libc.so.6)` (`<unknown>`)

|     % |   Time | Samples | Callee                | Location    |
| ----: | -----: | ------: | --------------------- | ----------- |
| 99.9% | 11.94s |  11,944 | `POOL_thread`         | `pool.c`    |
| 99.9% | 11.94s |  11,944 | `unknown (libc.so.6)` | `<unknown>` |
|  0.1% | 11.0ms |      11 | `main`                | `zstdcli.c` |
|  0.1% |  7.0ms |       7 | `__read (libc.so.6)`  | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|     % |   Time | Samples | Callee                        | Location            |
| ----: | -----: | ------: | ----------------------------- | ------------------- |
| 99.9% | 11.93s |  11,937 | `ZSTDMT_compressionJob`       | `zstdmt_compress.c` |
|  0.1% |  7.0ms |       7 | `AIO_ReadPool_executeReadJob` | `fileio_asyncio.c`  |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|      % |   Time | Samples | Callee                                 | Location          |
| -----: | -----: | ------: | -------------------------------------- | ----------------- |
| 100.0% | 11.93s |  11,932 | `ZSTD_compressContinue_internal`       | `zstd_compress.c` |
|  <0.1% |  3.0ms |       3 | `ZSTD_XXH64_update`                    | `xxhash.h`        |
|  <0.1% |  2.0ms |       2 | `ZSTD_compressBegin_advanced_internal` | `zstd_compress.c` |

##### `ZSTD_compressContinue_internal` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                              | Location          |
| ----: | -----: | ------: | ----------------------------------- | ----------------- |
| 99.5% | 11.87s |  11,872 | `ZSTD_buildSeqStore`                | `zstd_compress.c` |
|  0.2% | 29.0ms |      29 | `ZSTD_deriveBlockSplitsHelper`      | `zstd_compress.c` |
|  0.2% | 23.0ms |      23 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |
| <0.1% |  5.0ms |       5 | `ZSTD_XXH64_update`                 | `xxhash.h`        |
| <0.1% |  3.0ms |       3 | `ZSTD_deriveSeqStoreChunk`          | `zstd_compress.c` |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|     % |    Time | Samples | Callee                        | Location     |
| ----: | ------: | ------: | ----------------------------- | ------------ |
| 98.5% |  11.69s |  11,690 | `ZSTD_compressBlock_opt2`     | `zstd_opt.c` |
|  0.9% | 108.0ms |     108 | `ZSTD_litLengthPrice`         | `zstd_opt.c` |
|  0.2% |  25.0ms |      25 | `ZSTD_rawLiteralsCost`        | `zstd_opt.c` |
|  0.2% |  22.0ms |      22 | `ZSTD_updateStats`            | `zstd_opt.c` |
|  0.2% |  20.0ms |      20 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |   Time | Samples | Callee                              | Location     |
| ----: | -----: | ------: | ----------------------------------- | ------------ |
| 86.1% | 10.07s |  10,079 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c` |
|  0.2% | 25.0ms |      25 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c` |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|    % |   Time | Samples | Callee           | Location     |
| ---: | -----: | ------: | ---------------- | ------------ |
| 0.3% | 29.0ms |      29 | `ZSTD_insertBt1` | `zstd_opt.c` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                                               | Location          |
| ----: | -----: | ------: | ---------------------------------------------------- | ----------------- |
| 96.6% | 28.0ms |      28 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |
|  3.4% |  1.0ms |       1 | `ZSTD_deriveSeqStoreChunk`                           | `zstd_compress.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                              | Location          |
| ----: | -----: | ------: | ----------------------------------- | ----------------- |
| 67.9% | 19.0ms |      19 | `ZSTD_buildBlockEntropyStats`       | `zstd_compress.c` |
| 28.6% |  8.0ms |       8 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c` |
|  3.6% |  1.0ms |       1 | `HUF_estimateCompressedSize`        | `huf_compress.c`  |

##### `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                          | Location                    |
| ----: | -----: | ------: | ------------------------------- | --------------------------- |
| 65.2% | 15.0ms |      15 | `ZSTD_encodeSequences`          | `zstd_compress_sequences.c` |
| 13.0% |  3.0ms |       3 | `ZSTD_compressLiterals`         | `zstd_compress_literals.c`  |
| 13.0% |  3.0ms |       3 | `ZSTD_seqToCodes`               | `zstd_compress.c`           |
|  8.7% |  2.0ms |       2 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c`           |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|      % |   Time | Samples | Callee                                  | Location          |
| -----: | -----: | ------: | --------------------------------------- | ----------------- |
| 100.0% | 23.0ms |      23 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `ZSTD_compressBlock_btultra2` (`zstd_opt.c`)

|     % |   Time | Samples | Callee                    | Location     |
| ----: | -----: | ------: | ------------------------- | ------------ |
| 95.0% | 19.0ms |      19 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |
|  5.0% |  1.0ms |       1 | `ZSTD_rawLiteralsCost`    | `zstd_opt.c` |

##### `ZSTD_buildBlockEntropyStats` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                          | Location          |
| ----: | -----: | ------: | ------------------------------- | ----------------- |
| 57.9% | 11.0ms |      11 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |
| 21.1% |  4.0ms |       4 | `ZSTD_seqToCodes`               | `zstd_compress.c` |
| 10.5% |  2.0ms |       2 | `HUF_optimalTableLog`           | `huf_compress.c`  |
|  5.3% |  1.0ms |       1 | `FSE_optimalTableLog`           | `fse_compress.c`  |
|  5.3% |  1.0ms |       1 | `HUF_buildCTable_wksp`          | `huf_compress.c`  |

##### `ZSTD_encodeSequences` (`zstd_compress_sequences.c`)

|     % |  Time | Samples | Callee                    | Location    |
| ----: | ----: | ------: | ------------------------- | ----------- |
| 13.3% | 2.0ms |       2 | `el0t_64_sync ([kernel])` | `<unknown>` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                     | Location                    |
| ----: | ----: | ------: | -------------------------- | --------------------------- |
| 61.5% | 8.0ms |       8 | `HIST_count_parallel_wksp` | `hist.c`                    |
| 15.4% | 2.0ms |       2 | `ZSTD_buildCTable`         | `zstd_compress_sequences.c` |
|  7.7% | 1.0ms |       1 | `unknown (libc.so.6)`      | `<unknown>`                 |
|  7.7% | 1.0ms |       1 | `ZSTD_fseBitCost`          | `zstd_compress_sequences.c` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 84.0% |  10.04s |  10,040 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 13.4% |   1.59s |   1,596 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.9% | 108.0ms |     108 | `ZSTD_litLengthPrice` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.2% |  29.0ms |      29 | `ZSTD_insertBt1` (`zstd_opt.c`) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.2% |  25.0ms |      25 | `ZSTD_rawLiteralsCost` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.2% |  25.0ms |      25 | `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.2% |  22.0ms |      22 | `ZSTD_updateStats` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.1% |  13.0ms |      13 | `ZSTD_encodeSequences` (`zstd_compress_sequences.c`) ← `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`) ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.1% |  10.0ms |      10 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.1% |   9.0ms |       9 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |   8.0ms |       8 | `unknown (libc.so.6)` ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.1% |   7.0ms |       7 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |   7.0ms |       7 | `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.1% |   6.0ms |       6 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |   6.0ms |       6 | `__arch_copy_to_user ([kernel])` ← `copy_page_to_iter ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `__arm64_sys_read ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `__read (libc.so.6)` ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` |
| <0.1% |   5.0ms |       5 | `ZSTD_XXH64_update` (`xxhash.h`) ← `ZSTD_compressContinue_internal` (`zstd_compress.c`) ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <0.1% |   4.0ms |       4 | `ZSTD_seqToCodes` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <0.1% |   3.0ms |       3 | `ZSTD_XXH64_update` (`xxhash.h`) ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <0.1% |   3.0ms |       3 | `ZSTD_deriveSeqStoreChunk` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| <0.1% |   3.0ms |       3 | `HUF_buildCTable_wksp` (`huf_compress.c`) ← `HUF_optimalTableLog` ← `HUF_compress_internal` ← `HUF_compress4X_repeat` ← `ZSTD_compressLiterals` (`zstd_compress_literals.c`) ← `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`) ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                              |

# Uninterruptible sleep profile

Slept 5 times.

| Category |      % | Sleeps |
| -------- | -----: | -----: |
| Kernel   | 100.0% |      5 |

## Hottest functions

### Self sleeps

Functions ranked by uninterruptible sleeps entered directly in the function body, excluding callees.

#### Categories

##### Kernel

|      % | Sleeps | Function                    | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |      5 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self sleeps. Inlining can make caller attribution imprecise.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |      5 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

### Total sleeps

Functions ranked by total uninterruptible sleeps entered in the function and all its callees.

|      % | Sleeps | Function                                | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |      5 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
| 100.0% |      5 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
| 100.0% |      5 | `__schedule ([kernel])`                 | `<unknown>` |
| 100.0% |      5 | `schedule ([kernel])`                   | `<unknown>` |
| 100.0% |      5 | `schedule_preempt_disabled ([kernel])`  | `<unknown>` |
| 100.0% |      5 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
| 100.0% |      5 | `do_el0_svc ([kernel])`                 | `<unknown>` |
| 100.0% |      5 | `el0_svc ([kernel])`                    | `<unknown>` |
| 100.0% |      5 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
| 100.0% |      5 | `el0t_64_sync ([kernel])`               | `<unknown>` |
| 100.0% |      5 | `unknown (libc.so.6)`                   | `<unknown>` |
|  60.0% |      3 | `rwsem_down_read_slowpath ([kernel])`   | `<unknown>` |
|  60.0% |      3 | `down_read_killable ([kernel])`         | `<unknown>` |
|  60.0% |      3 | `lock_mm_and_find_vma ([kernel])`       | `<unknown>` |
|  60.0% |      3 | `do_page_fault ([kernel])`              | `<unknown>` |
|  60.0% |      3 | `do_translation_fault ([kernel])`       | `<unknown>` |
|  60.0% |      3 | `do_mem_abort ([kernel])`               | `<unknown>` |
|  60.0% |      3 | `el1_abort ([kernel])`                  | `<unknown>` |
|  60.0% |      3 | `el1h_64_sync_handler ([kernel])`       | `<unknown>` |
|  60.0% |      3 | `el1h_64_sync ([kernel])`               | `<unknown>` |

#### Categories

##### Kernel

|      % | Sleeps | Function                                | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |      5 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
| 100.0% |      5 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
| 100.0% |      5 | `__schedule ([kernel])`                 | `<unknown>` |
| 100.0% |      5 | `schedule ([kernel])`                   | `<unknown>` |
| 100.0% |      5 | `schedule_preempt_disabled ([kernel])`  | `<unknown>` |
| 100.0% |      5 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
| 100.0% |      5 | `do_el0_svc ([kernel])`                 | `<unknown>` |
| 100.0% |      5 | `el0_svc ([kernel])`                    | `<unknown>` |
| 100.0% |      5 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
| 100.0% |      5 | `el0t_64_sync ([kernel])`               | `<unknown>` |
|  60.0% |      3 | `rwsem_down_read_slowpath ([kernel])`   | `<unknown>` |
|  60.0% |      3 | `down_read_killable ([kernel])`         | `<unknown>` |
|  60.0% |      3 | `lock_mm_and_find_vma ([kernel])`       | `<unknown>` |
|  60.0% |      3 | `do_page_fault ([kernel])`              | `<unknown>` |
|  60.0% |      3 | `do_translation_fault ([kernel])`       | `<unknown>` |
|  60.0% |      3 | `do_mem_abort ([kernel])`               | `<unknown>` |
|  60.0% |      3 | `el1_abort ([kernel])`                  | `<unknown>` |
|  60.0% |      3 | `el1h_64_sync_handler ([kernel])`       | `<unknown>` |
|  60.0% |      3 | `el1h_64_sync ([kernel])`               | `<unknown>` |
|  60.0% |      3 | `__arch_copy_to_user ([kernel])`        | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total sleeps. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                      | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |      5 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |      5 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |      5 | `__schedule ([kernel])` | `<unknown>` |

##### `schedule_preempt_disabled ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |      5 | `schedule ([kernel])` | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

|     % | Sleeps | Callee                            | Location    |
| ----: | -----: | --------------------------------- | ----------- |
| 60.0% |      3 | `__arm64_sys_read ([kernel])`     | `<unknown>` |
| 40.0% |      2 | `__arm64_sys_mprotect ([kernel])` | `<unknown>` |

##### `do_el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                  | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |      5 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |      5 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee               | Location    |
| -----: | -----: | -------------------- | ----------- |
| 100.0% |      5 | `el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      5 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `unknown (libc.so.6)` (`<unknown>`)

|     % | Sleeps | Callee                | Location    |
| ----: | -----: | --------------------- | ----------- |
| 60.0% |      3 | `__read (libc.so.6)`  | `<unknown>` |
| 60.0% |      3 | `POOL_thread`         | `pool.c`    |
| 60.0% |      3 | `unknown (libc.so.6)` | `<unknown>` |
| 40.0% |      2 | `main`                | `zstdcli.c` |

##### `rwsem_down_read_slowpath ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                 | Location    |
| -----: | -----: | -------------------------------------- | ----------- |
| 100.0% |      3 | `schedule_preempt_disabled ([kernel])` | `<unknown>` |

##### `down_read_killable ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |      3 | `rwsem_down_read_slowpath ([kernel])` | `<unknown>` |

##### `lock_mm_and_find_vma ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                          | Location    |
| -----: | -----: | ------------------------------- | ----------- |
| 100.0% |      3 | `down_read_killable ([kernel])` | `<unknown>` |

##### `do_page_fault ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      3 | `lock_mm_and_find_vma ([kernel])` | `<unknown>` |

##### `do_translation_fault ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |      3 | `do_page_fault ([kernel])` | `<unknown>` |

##### `do_mem_abort ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      3 | `do_translation_fault ([kernel])` | `<unknown>` |

##### `el1_abort ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |      3 | `do_mem_abort ([kernel])` | `<unknown>` |

##### `el1h_64_sync_handler ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                 | Location    |
| -----: | -----: | ---------------------- | ----------- |
| 100.0% |      3 | `el1_abort ([kernel])` | `<unknown>` |

##### `el1h_64_sync ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      3 | `el1h_64_sync_handler ([kernel])` | `<unknown>` |

##### `__arch_copy_to_user ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |      3 | `el1h_64_sync ([kernel])` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by uninterruptible sleeps entered in their leaf frame.

|     % | Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | -----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 60.0% |      3 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `schedule_preempt_disabled ([kernel])` ← `rwsem_down_read_slowpath ([kernel])` ← `down_read_killable ([kernel])` ← `lock_mm_and_find_vma ([kernel])` ← `do_page_fault ([kernel])` ← `do_translation_fault ([kernel])` ← `do_mem_abort ([kernel])` ← `el1_abort ([kernel])` ← `el1h_64_sync_handler ([kernel])` ← `el1h_64_sync ([kernel])` ← `__arch_copy_to_user ([kernel])` ← `copy_page_to_iter ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `__arm64_sys_read ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `__read (libc.so.6)` ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` |
| 40.0% |      2 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `schedule_preempt_disabled ([kernel])` ← `rwsem_down_write_slowpath ([kernel])` ← `down_write_killable ([kernel])` ← `do_mprotect_pkey ([kernel])` ← `__arm64_sys_mprotect ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `__mprotect (libc.so.6)` ← `POOL_create_advanced` (`pool.c`) ← `ZSTDMT_createCCtx_advanced` (`zstdmt_compress.c`) ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                                                                                                                                                                                                                                                                                                                                                                          |

# Interruptible sleep profile

Slept 219 times.

| Category |      % | Sleeps |
| -------- | -----: | -----: |
| Kernel   | 100.0% |    219 |

## Hottest functions

### Self sleeps

Functions ranked by interruptible sleeps entered directly in the function body, excluding callees.

#### Categories

##### Kernel

|      % | Sleeps | Function                    | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |    219 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self sleeps. Inlining can make caller attribution imprecise.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |    219 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

### Total sleeps

Functions ranked by total interruptible sleeps entered in the function and all its callees.

|      % | Sleeps | Function                                | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |    219 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
| 100.0% |    219 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
| 100.0% |    219 | `__schedule ([kernel])`                 | `<unknown>` |
| 100.0% |    219 | `schedule ([kernel])`                   | `<unknown>` |
| 100.0% |    219 | `futex_do_wait ([kernel])`              | `<unknown>` |
| 100.0% |    219 | `__futex_wait ([kernel])`               | `<unknown>` |
| 100.0% |    219 | `futex_wait ([kernel])`                 | `<unknown>` |
| 100.0% |    219 | `do_futex ([kernel])`                   | `<unknown>` |
| 100.0% |    219 | `__arm64_sys_futex ([kernel])`          | `<unknown>` |
| 100.0% |    219 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
| 100.0% |    219 | `do_el0_svc ([kernel])`                 | `<unknown>` |
| 100.0% |    219 | `el0_svc ([kernel])`                    | `<unknown>` |
| 100.0% |    219 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
| 100.0% |    219 | `el0t_64_sync ([kernel])`               | `<unknown>` |
| 100.0% |    219 | `unknown (libc.so.6)`                   | `<unknown>` |
| 100.0% |    219 | `pthread_cond_wait (libc.so.6)`         | `<unknown>` |
|  79.9% |    175 | `POOL_thread`                           | `pool.c`    |
|  20.1% |     44 | `FIO_compressFilename_srcFile`          | `fileio.c`  |
|  20.1% |     44 | `FIO_compressFilename`                  | `fileio.c`  |
|  20.1% |     44 | `main`                                  | `zstdcli.c` |

#### Categories

##### Kernel

|      % | Sleeps | Function                                | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |    219 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
| 100.0% |    219 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
| 100.0% |    219 | `__schedule ([kernel])`                 | `<unknown>` |
| 100.0% |    219 | `schedule ([kernel])`                   | `<unknown>` |
| 100.0% |    219 | `futex_do_wait ([kernel])`              | `<unknown>` |
| 100.0% |    219 | `__futex_wait ([kernel])`               | `<unknown>` |
| 100.0% |    219 | `futex_wait ([kernel])`                 | `<unknown>` |
| 100.0% |    219 | `do_futex ([kernel])`                   | `<unknown>` |
| 100.0% |    219 | `__arm64_sys_futex ([kernel])`          | `<unknown>` |
| 100.0% |    219 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
| 100.0% |    219 | `do_el0_svc ([kernel])`                 | `<unknown>` |
| 100.0% |    219 | `el0_svc ([kernel])`                    | `<unknown>` |
| 100.0% |    219 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
| 100.0% |    219 | `el0t_64_sync ([kernel])`               | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total sleeps. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                      | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |    219 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |    219 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    219 | `__schedule ([kernel])` | `<unknown>` |

##### `futex_do_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    219 | `schedule ([kernel])` | `<unknown>` |

##### `__futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |    219 | `futex_do_wait ([kernel])` | `<unknown>` |

##### `futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |    219 | `__futex_wait ([kernel])` | `<unknown>` |

##### `do_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    219 | `futex_wait ([kernel])` | `<unknown>` |

##### `__arm64_sys_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    219 | `do_futex ([kernel])` | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                         | Location    |
| -----: | -----: | ------------------------------ | ----------- |
| 100.0% |    219 | `__arm64_sys_futex ([kernel])` | `<unknown>` |

##### `do_el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                  | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |    219 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    219 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee               | Location    |
| -----: | -----: | -------------------- | ----------- |
| 100.0% |    219 | `el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |    219 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `unknown (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |    219 | `el0t_64_sync ([kernel])` | `<unknown>` |
|  79.9% |    175 | `POOL_thread`             | `pool.c`    |
|  79.9% |    175 | `unknown (libc.so.6)`     | `<unknown>` |
|  20.1% |     44 | `main`                    | `zstdcli.c` |

##### `pthread_cond_wait (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    219 | `unknown (libc.so.6)` | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|      % | Sleeps | Callee                          | Location    |
| -----: | -----: | ------------------------------- | ----------- |
| 100.0% |    175 | `pthread_cond_wait (libc.so.6)` | `<unknown>` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|     % | Sleeps | Callee                    | Location           |
| ----: | -----: | ------------------------- | ------------------ |
| 88.6% |     39 | `ZSTD_compressStream2`    | `zstd_compress.c`  |
|  6.8% |      3 | `AIO_ReadPool_fillBuffer` | `fileio_asyncio.c` |
|  4.5% |      2 | `AIO_ReadPool_setFile`    | `fileio_asyncio.c` |

##### `FIO_compressFilename` (`fileio.c`)

|      % | Sleeps | Callee                         | Location   |
| -----: | -----: | ------------------------------ | ---------- |
| 100.0% |     44 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `main` (`zstdcli.c`)

|      % | Sleeps | Callee                 | Location   |
| -----: | -----: | ---------------------- | ---------- |
| 100.0% |     44 | `FIO_compressFilename` | `fileio.c` |

## Hottest call stacks

Call stacks ranked by interruptible sleeps entered in their leaf frame.

|     % | Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | -----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 79.9% |    175 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                     |
| 17.8% |     39 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `ZSTDMT_compressStream_generic` (`zstdmt_compress.c`) ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)` |
|  1.4% |      3 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_add` (`pool.c`) ← `AIO_ReadPool_fillBuffer` (`fileio_asyncio.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                             |
|  0.9% |      2 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_add` (`pool.c`) ← `AIO_ReadPool_setFile` (`fileio_asyncio.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                                |

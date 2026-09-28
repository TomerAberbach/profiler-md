# CPU profile

Took 20.05s over 20,056 samples (1.0ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| Ours     | 99.9% | 20.02s |  20,028 |
| Native   |  0.1% | 14.0ms |      14 |
| Kernel   |  0.1% | 14.0ms |      14 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                            | Location                    |
| ----: | ------: | ------: | ----------------------------------- | --------------------------- |
| 72.5% |  14.54s |  14,548 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c`                |
| 14.8% |   2.96s |   2,962 | `ZSTD_insertBt1`                    | `zstd_opt.c`                |
| 10.9% |   2.19s |   2,191 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c`                |
|  0.7% | 140.0ms |     140 | `ZSTD_litLengthPrice`               | `zstd_opt.c`                |
|  0.2% |  50.0ms |      50 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c`                |
|  0.1% |  28.0ms |      28 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c`                |
|  0.1% |  18.0ms |      18 | `HIST_count_parallel_wksp`          | `hist.c`                    |
|  0.1% |  17.0ms |      17 | `ZSTD_recordFingerprint_1`          | `zstd_preSplit.c`           |
|  0.1% |  14.0ms |      14 | `unknown (libc.so.6)`               | `<unknown>`                 |
|  0.1% |  13.0ms |      13 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c`                |
|  0.1% |  12.0ms |      12 | `ZSTD_seqToCodes`                   | `zstd_compress.c`           |
| <0.1% |   9.0ms |       9 | `ZSTD_encodeSequences`              | `zstd_compress_sequences.c` |
| <0.1% |   8.0ms |       8 | `HUF_buildCTable_wksp`              | `huf_compress.c`            |
| <0.1% |   7.0ms |       7 | `__arch_copy_to_user ([kernel])`    | `<unknown>`                 |
| <0.1% |   6.0ms |       6 | `ZSTD_splitBlock`                   | `zstd_preSplit.c`           |
| <0.1% |   6.0ms |       6 | `ZSTD_updateStats`                  | `zstd_opt.c`                |
| <0.1% |   4.0ms |       4 | `ZSTD_XXH64_update`                 | `xxhash.h`                  |
| <0.1% |   4.0ms |       4 | `HIST_count_simple`                 | `hist.c`                    |
| <0.1% |   3.0ms |       3 | `FSE_writeNCount_generic`           | `fse_compress.c`            |
| <0.1% |   3.0ms |       3 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c`           |

#### Categories

##### Ours

|     % |    Time | Samples | Function                            | Location                    |
| ----: | ------: | ------: | ----------------------------------- | --------------------------- |
| 72.5% |  14.54s |  14,548 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c`                |
| 14.8% |   2.96s |   2,962 | `ZSTD_insertBt1`                    | `zstd_opt.c`                |
| 10.9% |   2.19s |   2,191 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c`                |
|  0.7% | 140.0ms |     140 | `ZSTD_litLengthPrice`               | `zstd_opt.c`                |
|  0.2% |  50.0ms |      50 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c`                |
|  0.1% |  28.0ms |      28 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c`                |
|  0.1% |  18.0ms |      18 | `HIST_count_parallel_wksp`          | `hist.c`                    |
|  0.1% |  17.0ms |      17 | `ZSTD_recordFingerprint_1`          | `zstd_preSplit.c`           |
|  0.1% |  13.0ms |      13 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c`                |
|  0.1% |  12.0ms |      12 | `ZSTD_seqToCodes`                   | `zstd_compress.c`           |
| <0.1% |   9.0ms |       9 | `ZSTD_encodeSequences`              | `zstd_compress_sequences.c` |
| <0.1% |   8.0ms |       8 | `HUF_buildCTable_wksp`              | `huf_compress.c`            |
| <0.1% |   6.0ms |       6 | `ZSTD_splitBlock`                   | `zstd_preSplit.c`           |
| <0.1% |   6.0ms |       6 | `ZSTD_updateStats`                  | `zstd_opt.c`                |
| <0.1% |   4.0ms |       4 | `ZSTD_XXH64_update`                 | `xxhash.h`                  |
| <0.1% |   4.0ms |       4 | `HIST_count_simple`                 | `hist.c`                    |
| <0.1% |   3.0ms |       3 | `FSE_writeNCount_generic`           | `fse_compress.c`            |
| <0.1% |   3.0ms |       3 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c`           |
| <0.1% |   2.0ms |       2 | `FSE_buildCTable_wksp`              | `fse_compress.c`            |
| <0.1% |   2.0ms |       2 | `ZSTD_updateTree`                   | `zstd_opt.c`                |

#### Lines

Lines ranked by contribution to each function's self time.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |   Time | Samples | Location         |
| -----: | -----: | ------: | ---------------- |
| 100.0% | 14.54s |  14,548 | `zstd_opt.c:876` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

|     % |    Time | Samples | Location         |
| ----: | ------: | ------: | ---------------- |
| 28.2% | 836.0ms |     836 | `zstd_opt.c:538` |
| 27.4% | 813.0ms |     813 | `zstd_opt.c:545` |
| 17.6% | 522.0ms |     522 | `zstd_opt.c:489` |
| 10.9% | 322.0ms |     322 | `zstd_opt.c:528` |
|  6.8% | 202.0ms |     202 | `zstd_opt.c:518` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 2.19s |   2,191 | `zstd_opt.c:1459` |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 34.3% | 48.0ms |      48 | `zstd_opt.c:313` |
| 30.0% | 42.0ms |      42 | `zstd_opt.c:315` |
| 17.9% | 25.0ms |      25 | `zstd_opt.c:306` |
| 10.0% | 14.0ms |      14 | `zstd_opt.c:298` |
|  7.9% | 11.0ms |      11 | `zstd_opt.c:310` |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 72.0% | 36.0ms |      36 | `zstd_opt.c:266` |
| 18.0% |  9.0ms |       9 | `zstd_opt.c:273` |
|  6.0% |  3.0ms |       3 | `zstd_opt.c:276` |
|  4.0% |  2.0ms |       2 | `zstd_opt.c:291` |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 42.9% | 12.0ms |      12 | `zstd_opt.c:420` |
| 35.7% | 10.0ms |      10 | `zstd_opt.c:424` |
| 14.3% |  4.0ms |       4 | `zstd_opt.c:430` |
|  3.6% |  1.0ms |       1 | `zstd_opt.c:423` |
|  3.6% |  1.0ms |       1 | `zstd_opt.c:415` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |  Time | Samples | Location     |
| ----: | ----: | ------: | ------------ |
| 16.7% | 3.0ms |       3 | `hist.c:120` |
| 16.7% | 3.0ms |       3 | `hist.c:122` |
| 11.1% | 2.0ms |       2 | `hist.c:110` |
| 11.1% | 2.0ms |       2 | `hist.c:115` |
|  5.6% | 1.0ms |       1 | `hist.c:112` |

##### `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`)

|      % |   Time | Samples | Location             |
| -----: | -----: | ------: | -------------------- |
| 100.0% | 17.0ms |      17 | `zstd_preSplit.c:87` |

##### `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`)

|      % |   Time | Samples | Location          |
| -----: | -----: | ------: | ----------------- |
| 100.0% | 13.0ms |      13 | `zstd_opt.c:1030` |

##### `ZSTD_seqToCodes` (`zstd_compress.c`)

|     % |  Time | Samples | Location               |
| ----: | ----: | ------: | ---------------------- |
| 41.7% | 5.0ms |       5 | `zstd_compress.c:2706` |
| 33.3% | 4.0ms |       4 | `zstd_compress.c:2708` |
| 16.7% | 2.0ms |       2 | `zstd_compress.c:2709` |
|  8.3% | 1.0ms |       1 | `zstd_compress.c:2707` |

##### `ZSTD_encodeSequences` (`zstd_compress_sequences.c`)

|      % |  Time | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 9.0ms |       9 | `zstd_compress_sequences.c:437` |

##### `HUF_buildCTable_wksp` (`huf_compress.c`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 50.0% | 4.0ms |       4 | `huf_compress.c:778` |
| 37.5% | 3.0ms |       3 | `huf_compress.c:788` |
| 12.5% | 1.0ms |       1 | `huf_compress.c:782` |

##### `ZSTD_splitBlock` (`zstd_preSplit.c`)

|      % |  Time | Samples | Location              |
| -----: | ----: | ------: | --------------------- |
| 100.0% | 6.0ms |       6 | `zstd_preSplit.c:237` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|     % |  Time | Samples | Location         |
| ----: | ----: | ------: | ---------------- |
| 50.0% | 3.0ms |       3 | `zstd_opt.c:385` |
| 33.3% | 2.0ms |       2 | `zstd_opt.c:364` |
| 16.7% | 1.0ms |       1 | `zstd_opt.c:371` |

##### `ZSTD_XXH64_update` (`xxhash.h`)

|     % |  Time | Samples | Location        |
| ----: | ----: | ------: | --------------- |
| 75.0% | 3.0ms |       3 | `xxhash.h:3608` |
| 25.0% | 1.0ms |       1 | `xxhash.h:3607` |

##### `HIST_count_simple` (`hist.c`)

|     % |  Time | Samples | Location    |
| ----: | ----: | ------: | ----------- |
| 75.0% | 3.0ms |       3 | `hist.c:52` |
| 25.0% | 1.0ms |       1 | `hist.c:60` |

##### `FSE_writeNCount_generic` (`fse_compress.c`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 33.3% | 1.0ms |       1 | `fse_compress.c:264` |
| 33.3% | 1.0ms |       1 | `fse_compress.c:304` |
| 33.3% | 1.0ms |       1 | `fse_compress.c:263` |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

|     % |  Time | Samples | Location               |
| ----: | ----: | ------: | ---------------------- |
| 66.7% | 2.0ms |       2 | `zstd_compress.c:3886` |
| 33.3% | 1.0ms |       1 | `zstd_compress.c:3888` |

##### `FSE_buildCTable_wksp` (`fse_compress.c`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 50.0% | 1.0ms |       1 | `fse_compress.c:197` |
| 50.0% | 1.0ms |       1 | `fse_compress.c:160` |

##### `ZSTD_updateTree` (`zstd_opt.c`)

|      % |  Time | Samples | Location         |
| -----: | ----: | ------: | ---------------- |
| 100.0% | 2.0ms |       2 | `zstd_opt.c:584` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                    | Location          |
| -----: | -----: | ------: | ------------------------- | ----------------- |
| 100.0% | 14.54s |  14,547 | `ZSTD_compressBlock_opt2` | `zstd_opt.c`      |
|  <0.1% |  1.0ms |       1 | `ZSTD_buildSeqStore`      | `zstd_compress.c` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                          | Location     |
| ----: | -----: | ------: | ------------------------------- | ------------ |
| 98.6% |  2.92s |   2,920 | `ZSTD_updateTree`               | `zstd_opt.c` |
|  1.4% | 42.0ms |      42 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 99.8% | 2.18s |   2,187 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  0.2% | 4.0ms |       4 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

|     % |    Time | Samples | Caller                        | Location          |
| ----: | ------: | ------: | ----------------------------- | ----------------- |
| 99.3% | 139.0ms |     139 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  0.7% |   1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 50.0ms |      50 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                    | Location     |
| -----: | -----: | ------: | ------------------------- | ------------ |
| 100.0% | 28.0ms |      28 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |   Time | Samples | Caller                              | Location          |
| ----: | -----: | ------: | ----------------------------------- | ----------------- |
| 83.3% | 15.0ms |      15 | `ZSTD_buildSequencesStatistics`     | `zstd_compress.c` |
| 16.7% |  3.0ms |       3 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c` |

##### `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`)

|      % |   Time | Samples | Caller            | Location          |
| -----: | -----: | ------: | ----------------- | ----------------- |
| 100.0% | 17.0ms |      17 | `ZSTD_splitBlock` | `zstd_preSplit.c` |

##### `unknown (libc.so.6)` (`<unknown>`)

|     % |  Time | Samples | Caller                                  | Location          |
| ----: | ----: | ------: | --------------------------------------- | ----------------- |
| 64.3% | 9.0ms |       9 | `ZSTD_compressStream2`                  | `zstd_compress.c` |
| 21.4% | 3.0ms |       3 | `ZSTD_resetCCtx_internal`               | `zstd_compress.c` |
|  7.1% | 1.0ms |       1 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |
|  7.1% | 1.0ms |       1 | `HUF_optimalTableLog`                   | `huf_compress.c`  |

##### `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 13.0ms |      13 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_seqToCodes` (`zstd_compress.c`)

|     % |  Time | Samples | Caller                                  | Location          |
| ----: | ----: | ------: | --------------------------------------- | ----------------- |
| 66.7% | 8.0ms |       8 | `ZSTD_buildBlockEntropyStats`           | `zstd_compress.c` |
| 33.3% | 4.0ms |       4 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `ZSTD_encodeSequences` (`zstd_compress_sequences.c`)

|      % |  Time | Samples | Caller                                  | Location          |
| -----: | ----: | ------: | --------------------------------------- | ----------------- |
| 100.0% | 9.0ms |       9 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `HUF_buildCTable_wksp` (`huf_compress.c`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 62.5% | 5.0ms |       5 | `HUF_optimalTableLog`         | `huf_compress.c`  |
| 25.0% | 2.0ms |       2 | `ZSTD_buildBlockEntropyStats` | `zstd_compress.c` |
| 12.5% | 1.0ms |       1 | `HUF_compress_internal`       | `huf_compress.c`  |

##### `__arch_copy_to_user ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                         | Location    |
| -----: | ----: | ------: | ------------------------------ | ----------- |
| 100.0% | 7.0ms |       7 | `copy_page_to_iter ([kernel])` | `<unknown>` |

##### `ZSTD_splitBlock` (`zstd_preSplit.c`)

|      % |  Time | Samples | Caller                           | Location          |
| -----: | ----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 6.0ms |       6 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 6.0ms |       6 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_XXH64_update` (`xxhash.h`)

|      % |  Time | Samples | Caller                  | Location            |
| -----: | ----: | ------: | ----------------------- | ------------------- |
| 100.0% | 4.0ms |       4 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `HIST_count_simple` (`hist.c`)

|     % |  Time | Samples | Caller                 | Location         |
| ----: | ----: | ------: | ---------------------- | ---------------- |
| 75.0% | 3.0ms |       3 | `HIST_count_wksp`      | `hist.c`         |
| 25.0% | 1.0ms |       1 | `HUF_writeCTable_wksp` | `huf_compress.c` |

##### `FSE_writeNCount_generic` (`fse_compress.c`)

|      % |  Time | Samples | Caller            | Location                    |
| -----: | ----: | ------: | ----------------- | --------------------------- |
| 100.0% | 3.0ms |       3 | `ZSTD_NCountCost` | `zstd_compress_sequences.c` |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                                               | Location          |
| -----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 3.0ms |       3 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `FSE_buildCTable_wksp` (`fse_compress.c`)

|      % |  Time | Samples | Caller             | Location                    |
| -----: | ----: | ------: | ------------------ | --------------------------- |
| 100.0% | 2.0ms |       2 | `ZSTD_buildCTable` | `zstd_compress_sequences.c` |

##### `ZSTD_updateTree` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                       | Location          |
| -----: | ----: | ------: | ---------------------------- | ----------------- |
| 100.0% | 2.0ms |       2 | `ZSTD_loadDictionaryContent` | `zstd_compress.c` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                                             | Location            |
| -----: | ------: | ------: | ---------------------------------------------------- | ------------------- |
| 100.0% |  20.05s |  20,056 | `unknown (libc.so.6)`                                | `<unknown>`         |
|  99.9% |  20.04s |  20,045 | `POOL_thread`                                        | `pool.c`            |
|  99.9% |  20.03s |  20,038 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c` |
|  85.3% |  17.10s |  17,104 | `ZSTD_compressContinue_internal`                     | `zstd_compress.c`   |
|  84.9% |  17.01s |  17,018 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`   |
|  83.8% |  16.80s |  16,808 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
|  72.7% |  14.59s |  14,590 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
|  14.8% |   2.96s |   2,962 | `ZSTD_insertBt1`                                     | `zstd_opt.c`        |
|  14.6% |   2.92s |   2,929 | `ZSTD_compressBegin_internal`                        | `zstd_compress.c`   |
|  14.6% |   2.92s |   2,929 | `ZSTD_compressBegin_advanced_internal`               | `zstd_compress.c`   |
|  14.6% |   2.92s |   2,922 | `ZSTD_updateTree`                                    | `zstd_opt.c`        |
|  14.6% |   2.92s |   2,922 | `ZSTD_loadDictionaryContent`                         | `zstd_compress.c`   |
|   1.3% | 265.0ms |     265 | `ZSTD_compressEnd_public`                            | `zstd_compress.c`   |
|   0.7% | 140.0ms |     140 | `ZSTD_litLengthPrice`                                | `zstd_opt.c`        |
|   0.2% |  50.0ms |      50 | `ZSTD_rawLiteralsCost`                               | `zstd_opt.c`        |
|   0.2% |  42.0ms |      42 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`   |
|   0.2% |  41.0ms |      41 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |
|   0.2% |  34.0ms |      34 | `ZSTD_buildBlockEntropyStats`                        | `zstd_compress.c`   |
|   0.1% |  28.0ms |      28 | `ZSTD_insertAndFindFirstIndexHash3`                  | `zstd_opt.c`        |
|   0.1% |  23.0ms |      23 | `ZSTD_splitBlock`                                    | `zstd_preSplit.c`   |

#### Categories

##### Ours

|     % |    Time | Samples | Function                                             | Location            |
| ----: | ------: | ------: | ---------------------------------------------------- | ------------------- |
| 99.9% |  20.04s |  20,045 | `POOL_thread`                                        | `pool.c`            |
| 99.9% |  20.03s |  20,038 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c` |
| 85.3% |  17.10s |  17,104 | `ZSTD_compressContinue_internal`                     | `zstd_compress.c`   |
| 84.9% |  17.01s |  17,018 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`   |
| 83.8% |  16.80s |  16,808 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
| 72.7% |  14.59s |  14,590 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
| 14.8% |   2.96s |   2,962 | `ZSTD_insertBt1`                                     | `zstd_opt.c`        |
| 14.6% |   2.92s |   2,929 | `ZSTD_compressBegin_internal`                        | `zstd_compress.c`   |
| 14.6% |   2.92s |   2,929 | `ZSTD_compressBegin_advanced_internal`               | `zstd_compress.c`   |
| 14.6% |   2.92s |   2,922 | `ZSTD_updateTree`                                    | `zstd_opt.c`        |
| 14.6% |   2.92s |   2,922 | `ZSTD_loadDictionaryContent`                         | `zstd_compress.c`   |
|  1.3% | 265.0ms |     265 | `ZSTD_compressEnd_public`                            | `zstd_compress.c`   |
|  0.7% | 140.0ms |     140 | `ZSTD_litLengthPrice`                                | `zstd_opt.c`        |
|  0.2% |  50.0ms |      50 | `ZSTD_rawLiteralsCost`                               | `zstd_opt.c`        |
|  0.2% |  42.0ms |      42 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`   |
|  0.2% |  41.0ms |      41 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |
|  0.2% |  34.0ms |      34 | `ZSTD_buildBlockEntropyStats`                        | `zstd_compress.c`   |
|  0.1% |  28.0ms |      28 | `ZSTD_insertAndFindFirstIndexHash3`                  | `zstd_opt.c`        |
|  0.1% |  23.0ms |      23 | `ZSTD_splitBlock`                                    | `zstd_preSplit.c`   |
|  0.1% |  22.0ms |      22 | `ZSTD_entropyCompressSeqStore_internal`              | `zstd_compress.c`   |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `unknown (libc.so.6)` (`<unknown>`)

|     % |   Time | Samples | Callee                    | Location    |
| ----: | -----: | ------: | ------------------------- | ----------- |
| 99.9% | 20.04s |  20,045 | `POOL_thread`             | `pool.c`    |
| 99.9% | 20.04s |  20,045 | `unknown (libc.so.6)`     | `<unknown>` |
|  0.1% | 11.0ms |      11 | `main`                    | `zstdcli.c` |
| <0.1% |  7.0ms |       7 | `__read (libc.so.6)`      | `<unknown>` |
| <0.1% |  4.0ms |       4 | `el0t_64_sync ([kernel])` | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|      % |   Time | Samples | Callee                        | Location            |
| -----: | -----: | ------: | ----------------------------- | ------------------- |
| 100.0% | 20.03s |  20,038 | `ZSTDMT_compressionJob`       | `zstdmt_compress.c` |
|  <0.1% |  7.0ms |       7 | `AIO_ReadPool_executeReadJob` | `fileio_asyncio.c`  |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|     % |    Time | Samples | Callee                                 | Location          |
| ----: | ------: | ------: | -------------------------------------- | ----------------- |
| 84.0% |  16.83s |  16,839 | `ZSTD_compressContinue_internal`       | `zstd_compress.c` |
| 14.6% |   2.92s |   2,929 | `ZSTD_compressBegin_advanced_internal` | `zstd_compress.c` |
|  1.3% | 265.0ms |     265 | `ZSTD_compressEnd_public`              | `zstd_compress.c` |
| <0.1% |   4.0ms |       4 | `ZSTD_XXH64_update`                    | `xxhash.h`        |
| <0.1% |   1.0ms |       1 | `ZSTD_deriveBlockSplitsHelper`         | `zstd_compress.c` |

##### `ZSTD_compressContinue_internal` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                              | Location          |
| ----: | -----: | ------: | ----------------------------------- | ----------------- |
| 99.5% | 17.01s |  17,018 | `ZSTD_buildSeqStore`                | `zstd_compress.c` |
|  0.2% | 41.0ms |      41 | `ZSTD_deriveBlockSplitsHelper`      | `zstd_compress.c` |
|  0.1% | 23.0ms |      23 | `ZSTD_splitBlock`                   | `zstd_preSplit.c` |
|  0.1% | 22.0ms |      22 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|     % |    Time | Samples | Callee                              | Location     |
| ----: | ------: | ------: | ----------------------------------- | ------------ |
| 98.7% |  16.79s |  16,791 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c` |
|  0.8% | 139.0ms |     139 | `ZSTD_litLengthPrice`               | `zstd_opt.c` |
|  0.3% |  50.0ms |      50 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c` |
|  0.1% |  18.0ms |      18 | `ZSTD_compressBlock_btultra2`       | `zstd_opt.c` |
|  0.1% |  13.0ms |      13 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |   Time | Samples | Callee                              | Location     |
| ----: | -----: | ------: | ----------------------------------- | ------------ |
| 86.8% | 14.58s |  14,589 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c` |
|  0.2% | 28.0ms |      28 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c` |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|    % |   Time | Samples | Callee           | Location     |
| ---: | -----: | ------: | ---------------- | ------------ |
| 0.3% | 42.0ms |      42 | `ZSTD_insertBt1` | `zstd_opt.c` |

##### `ZSTD_compressBegin_internal` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                       | Location          |
| ----: | ----: | ------: | ---------------------------- | ----------------- |
| 99.8% | 2.92s |   2,922 | `ZSTD_loadDictionaryContent` | `zstd_compress.c` |
|  0.2% | 7.0ms |       7 | `ZSTD_resetCCtx_internal`    | `zstd_compress.c` |

##### `ZSTD_compressBegin_advanced_internal` (`zstd_compress.c`)

|      % |  Time | Samples | Callee                        | Location          |
| -----: | ----: | ------: | ----------------------------- | ----------------- |
| 100.0% | 2.92s |   2,929 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |

##### `ZSTD_updateTree` (`zstd_opt.c`)

|     % |  Time | Samples | Callee           | Location     |
| ----: | ----: | ------: | ---------------- | ------------ |
| 99.9% | 2.92s |   2,920 | `ZSTD_insertBt1` | `zstd_opt.c` |

##### `ZSTD_loadDictionaryContent` (`zstd_compress.c`)

|      % |  Time | Samples | Callee            | Location     |
| -----: | ----: | ------: | ----------------- | ------------ |
| 100.0% | 2.92s |   2,922 | `ZSTD_updateTree` | `zstd_opt.c` |

##### `ZSTD_compressEnd_public` (`zstd_compress.c`)

|      % |    Time | Samples | Callee                           | Location          |
| -----: | ------: | ------: | -------------------------------- | ----------------- |
| 100.0% | 265.0ms |     265 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                                               | Location          |
| ----: | -----: | ------: | ---------------------------------------------------- | ----------------- |
| 97.6% | 41.0ms |      41 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |
|  4.8% |  2.0ms |       2 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                              | Location          |
| ----: | -----: | ------: | ----------------------------------- | ----------------- |
| 82.9% | 34.0ms |      34 | `ZSTD_buildBlockEntropyStats`       | `zstd_compress.c` |
| 14.6% |  6.0ms |       6 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c` |
|  2.4% |  1.0ms |       1 | `HIST_count_wksp`                   | `hist.c`          |

##### `ZSTD_buildBlockEntropyStats` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                          | Location          |
| ----: | -----: | ------: | ------------------------------- | ----------------- |
| 47.1% | 16.0ms |      16 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |
| 23.5% |  8.0ms |       8 | `ZSTD_seqToCodes`               | `zstd_compress.c` |
| 14.7% |  5.0ms |       5 | `HUF_optimalTableLog`           | `huf_compress.c`  |
|  5.9% |  2.0ms |       2 | `HUF_buildCTable_wksp`          | `huf_compress.c`  |
|  5.9% |  2.0ms |       2 | `HIST_count_wksp`               | `hist.c`          |

##### `ZSTD_splitBlock` (`zstd_preSplit.c`)

|     % |   Time | Samples | Callee                     | Location          |
| ----: | -----: | ------: | -------------------------- | ----------------- |
| 73.9% | 17.0ms |      17 | `ZSTD_recordFingerprint_1` | `zstd_preSplit.c` |

##### `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                          | Location                    |
| ----: | -----: | ------: | ------------------------------- | --------------------------- |
| 45.5% | 10.0ms |      10 | `ZSTD_encodeSequences`          | `zstd_compress_sequences.c` |
| 18.2% |  4.0ms |       4 | `ZSTD_seqToCodes`               | `zstd_compress.c`           |
| 18.2% |  4.0ms |       4 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c`           |
| 13.6% |  3.0ms |       3 | `ZSTD_compressLiterals`         | `zstd_compress_literals.c`  |
|  4.5% |  1.0ms |       1 | `unknown (libc.so.6)`           | `<unknown>`                 |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 71.4% |  14.31s |  14,315 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 14.6% |   2.92s |   2,920 | `ZSTD_insertBt1` (`zstd_opt.c`) ← `ZSTD_updateTree` ← `ZSTD_loadDictionaryContent` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 10.7% |   2.14s |   2,146 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.1% | 219.0ms |     219 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.7% | 136.0ms |     136 | `ZSTD_litLengthPrice` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.2% |  50.0ms |      50 | `ZSTD_rawLiteralsCost` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.2% |  41.0ms |      41 | `ZSTD_insertBt1` (`zstd_opt.c`) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.2% |  41.0ms |      41 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.1% |  28.0ms |      28 | `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.1% |  17.0ms |      17 | `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`) ← `ZSTD_splitBlock` ← `ZSTD_compressContinue_internal` (`zstd_compress.c`) ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.1% |  13.0ms |      13 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.1% |  13.0ms |      13 | `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.1% |  12.0ms |      12 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                           |
| <0.1% |   9.0ms |       9 | `ZSTD_encodeSequences` (`zstd_compress_sequences.c`) ← `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`) ← `ZSTD_entropyCompressSeqStore` ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                     |
| <0.1% |   9.0ms |       9 | `unknown (libc.so.6)` ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| <0.1% |   8.0ms |       8 | `ZSTD_seqToCodes` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <0.1% |   7.0ms |       7 | `__arch_copy_to_user ([kernel])` ← `copy_page_to_iter ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `__arm64_sys_read ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `__read (libc.so.6)` ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` |
| <0.1% |   6.0ms |       6 | `ZSTD_updateStats` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| <0.1% |   5.0ms |       5 | `ZSTD_splitBlock` (`zstd_preSplit.c`) ← `ZSTD_compressContinue_internal` (`zstd_compress.c`) ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| <0.1% |   4.0ms |       4 | `ZSTD_XXH64_update` (`xxhash.h`) ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

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
| 100.0% |      5 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
| 100.0% |      5 | `do_el0_svc ([kernel])`                 | `<unknown>` |
| 100.0% |      5 | `el0_svc ([kernel])`                    | `<unknown>` |
| 100.0% |      5 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
| 100.0% |      5 | `el0t_64_sync ([kernel])`               | `<unknown>` |
| 100.0% |      5 | `unknown (libc.so.6)`                   | `<unknown>` |
| 100.0% |      5 | `POOL_thread`                           | `pool.c`    |
|  80.0% |      4 | `schedule_preempt_disabled ([kernel])`  | `<unknown>` |
|  80.0% |      4 | `rwsem_down_read_slowpath ([kernel])`   | `<unknown>` |
|  80.0% |      4 | `down_read_killable ([kernel])`         | `<unknown>` |
|  80.0% |      4 | `lock_mm_and_find_vma ([kernel])`       | `<unknown>` |
|  80.0% |      4 | `do_page_fault ([kernel])`              | `<unknown>` |
|  80.0% |      4 | `do_translation_fault ([kernel])`       | `<unknown>` |
|  80.0% |      4 | `do_mem_abort ([kernel])`               | `<unknown>` |
|  80.0% |      4 | `el1_abort ([kernel])`                  | `<unknown>` |
|  80.0% |      4 | `el1h_64_sync_handler ([kernel])`       | `<unknown>` |

#### Categories

##### Kernel

|      % | Sleeps | Function                                | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |      5 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
| 100.0% |      5 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
| 100.0% |      5 | `__schedule ([kernel])`                 | `<unknown>` |
| 100.0% |      5 | `schedule ([kernel])`                   | `<unknown>` |
| 100.0% |      5 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
| 100.0% |      5 | `do_el0_svc ([kernel])`                 | `<unknown>` |
| 100.0% |      5 | `el0_svc ([kernel])`                    | `<unknown>` |
| 100.0% |      5 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
| 100.0% |      5 | `el0t_64_sync ([kernel])`               | `<unknown>` |
|  80.0% |      4 | `schedule_preempt_disabled ([kernel])`  | `<unknown>` |
|  80.0% |      4 | `rwsem_down_read_slowpath ([kernel])`   | `<unknown>` |
|  80.0% |      4 | `down_read_killable ([kernel])`         | `<unknown>` |
|  80.0% |      4 | `lock_mm_and_find_vma ([kernel])`       | `<unknown>` |
|  80.0% |      4 | `do_page_fault ([kernel])`              | `<unknown>` |
|  80.0% |      4 | `do_translation_fault ([kernel])`       | `<unknown>` |
|  80.0% |      4 | `do_mem_abort ([kernel])`               | `<unknown>` |
|  80.0% |      4 | `el1_abort ([kernel])`                  | `<unknown>` |
|  80.0% |      4 | `el1h_64_sync_handler ([kernel])`       | `<unknown>` |
|  80.0% |      4 | `el1h_64_sync ([kernel])`               | `<unknown>` |
|  80.0% |      4 | `__arch_copy_to_user ([kernel])`        | `<unknown>` |

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

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

|     % | Sleeps | Callee                        | Location    |
| ----: | -----: | ----------------------------- | ----------- |
| 80.0% |      4 | `__arm64_sys_read ([kernel])` | `<unknown>` |
| 20.0% |      1 | `__arm64_sys_mmap ([kernel])` | `<unknown>` |

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

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |      5 | `POOL_thread`         | `pool.c`    |
| 100.0% |      5 | `unknown (libc.so.6)` | `<unknown>` |
|  80.0% |      4 | `__read (libc.so.6)`  | `<unknown>` |
|  20.0% |      1 | `mmap64 (libc.so.6)`  | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|     % | Sleeps | Callee                        | Location            |
| ----: | -----: | ----------------------------- | ------------------- |
| 80.0% |      4 | `AIO_ReadPool_executeReadJob` | `fileio_asyncio.c`  |
| 20.0% |      1 | `ZSTDMT_compressionJob`       | `zstdmt_compress.c` |

##### `schedule_preempt_disabled ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |      4 | `schedule ([kernel])` | `<unknown>` |

##### `rwsem_down_read_slowpath ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                 | Location    |
| -----: | -----: | -------------------------------------- | ----------- |
| 100.0% |      4 | `schedule_preempt_disabled ([kernel])` | `<unknown>` |

##### `down_read_killable ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |      4 | `rwsem_down_read_slowpath ([kernel])` | `<unknown>` |

##### `lock_mm_and_find_vma ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                          | Location    |
| -----: | -----: | ------------------------------- | ----------- |
| 100.0% |      4 | `down_read_killable ([kernel])` | `<unknown>` |

##### `do_page_fault ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      4 | `lock_mm_and_find_vma ([kernel])` | `<unknown>` |

##### `do_translation_fault ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |      4 | `do_page_fault ([kernel])` | `<unknown>` |

##### `do_mem_abort ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      4 | `do_translation_fault ([kernel])` | `<unknown>` |

##### `el1_abort ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |      4 | `do_mem_abort ([kernel])` | `<unknown>` |

##### `el1h_64_sync_handler ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                 | Location    |
| -----: | -----: | ---------------------- | ----------- |
| 100.0% |      4 | `el1_abort ([kernel])` | `<unknown>` |

##### `el1h_64_sync ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      4 | `el1h_64_sync_handler ([kernel])` | `<unknown>` |

##### `__arch_copy_to_user ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |      4 | `el1h_64_sync ([kernel])` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by uninterruptible sleeps entered in their leaf frame.

Common call stack: `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`

|     % | Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | -----: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 80.0% |      4 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `schedule_preempt_disabled ([kernel])` ← `rwsem_down_read_slowpath ([kernel])` ← `down_read_killable ([kernel])` ← `lock_mm_and_find_vma ([kernel])` ← `do_page_fault ([kernel])` ← `do_translation_fault ([kernel])` ← `do_mem_abort ([kernel])` ← `el1_abort ([kernel])` ← `el1h_64_sync_handler ([kernel])` ← `el1h_64_sync ([kernel])` ← `__arch_copy_to_user ([kernel])` ← `copy_page_to_iter ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `__arm64_sys_read ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `__read (libc.so.6)` ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) |
| 20.0% |      1 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `__vma_start_exclude_readers ([kernel])` ← `__vma_start_write ([kernel])` ← `vma_expand ([kernel])` ← `vma_merge_new_range ([kernel])` ← `__mmap_region ([kernel])` ← `mmap_region ([kernel])` ← `do_mmap ([kernel])` ← `vm_mmap_pgoff ([kernel])` ← `ksys_mmap_pgoff ([kernel])` ← `__arm64_sys_mmap ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `mmap64 (libc.so.6)` ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` ← `malloc (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`)                                                                                                                                                                                                                                                                           |

# Interruptible sleep profile

Slept 214 times.

| Category |      % | Sleeps |
| -------- | -----: | -----: |
| Kernel   | 100.0% |    214 |

## Hottest functions

### Self sleeps

Functions ranked by interruptible sleeps entered directly in the function body, excluding callees.

#### Categories

##### Kernel

|      % | Sleeps | Function                    | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |    214 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self sleeps. Inlining can make caller attribution imprecise.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |    214 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

### Total sleeps

Functions ranked by total interruptible sleeps entered in the function and all its callees.

|      % | Sleeps | Function                                | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |    214 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
| 100.0% |    214 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
| 100.0% |    214 | `__schedule ([kernel])`                 | `<unknown>` |
| 100.0% |    214 | `schedule ([kernel])`                   | `<unknown>` |
| 100.0% |    214 | `futex_do_wait ([kernel])`              | `<unknown>` |
| 100.0% |    214 | `__futex_wait ([kernel])`               | `<unknown>` |
| 100.0% |    214 | `futex_wait ([kernel])`                 | `<unknown>` |
| 100.0% |    214 | `do_futex ([kernel])`                   | `<unknown>` |
| 100.0% |    214 | `__arm64_sys_futex ([kernel])`          | `<unknown>` |
| 100.0% |    214 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
| 100.0% |    214 | `do_el0_svc ([kernel])`                 | `<unknown>` |
| 100.0% |    214 | `el0_svc ([kernel])`                    | `<unknown>` |
| 100.0% |    214 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
| 100.0% |    214 | `el0t_64_sync ([kernel])`               | `<unknown>` |
| 100.0% |    214 | `unknown (libc.so.6)`                   | `<unknown>` |
|  99.5% |    213 | `pthread_cond_wait (libc.so.6)`         | `<unknown>` |
|  78.5% |    168 | `POOL_thread`                           | `pool.c`    |
|  21.5% |     46 | `FIO_compressFilename_srcFile`          | `fileio.c`  |
|  21.5% |     46 | `FIO_compressFilename`                  | `fileio.c`  |
|  21.5% |     46 | `main`                                  | `zstdcli.c` |

#### Categories

##### Kernel

|      % | Sleeps | Function                                | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |    214 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
| 100.0% |    214 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
| 100.0% |    214 | `__schedule ([kernel])`                 | `<unknown>` |
| 100.0% |    214 | `schedule ([kernel])`                   | `<unknown>` |
| 100.0% |    214 | `futex_do_wait ([kernel])`              | `<unknown>` |
| 100.0% |    214 | `__futex_wait ([kernel])`               | `<unknown>` |
| 100.0% |    214 | `futex_wait ([kernel])`                 | `<unknown>` |
| 100.0% |    214 | `do_futex ([kernel])`                   | `<unknown>` |
| 100.0% |    214 | `__arm64_sys_futex ([kernel])`          | `<unknown>` |
| 100.0% |    214 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
| 100.0% |    214 | `do_el0_svc ([kernel])`                 | `<unknown>` |
| 100.0% |    214 | `el0_svc ([kernel])`                    | `<unknown>` |
| 100.0% |    214 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
| 100.0% |    214 | `el0t_64_sync ([kernel])`               | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total sleeps. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                      | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |    214 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |    214 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    214 | `__schedule ([kernel])` | `<unknown>` |

##### `futex_do_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    214 | `schedule ([kernel])` | `<unknown>` |

##### `__futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |    214 | `futex_do_wait ([kernel])` | `<unknown>` |

##### `futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |    214 | `__futex_wait ([kernel])` | `<unknown>` |

##### `do_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    214 | `futex_wait ([kernel])` | `<unknown>` |

##### `__arm64_sys_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    214 | `do_futex ([kernel])` | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                         | Location    |
| -----: | -----: | ------------------------------ | ----------- |
| 100.0% |    214 | `__arm64_sys_futex ([kernel])` | `<unknown>` |

##### `do_el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                  | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |    214 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    214 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee               | Location    |
| -----: | -----: | -------------------- | ----------- |
| 100.0% |    214 | `el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |    214 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `unknown (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |    214 | `el0t_64_sync ([kernel])` | `<unknown>` |
|  78.5% |    168 | `POOL_thread`             | `pool.c`    |
|  78.5% |    168 | `unknown (libc.so.6)`     | `<unknown>` |
|  21.5% |     46 | `main`                    | `zstdcli.c` |

##### `pthread_cond_wait (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    213 | `unknown (libc.so.6)` | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|     % | Sleeps | Callee                          | Location            |
| ----: | -----: | ------------------------------- | ------------------- |
| 99.4% |    167 | `pthread_cond_wait (libc.so.6)` | `<unknown>`         |
|  0.6% |      1 | `ZSTDMT_compressionJob`         | `zstdmt_compress.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|     % | Sleeps | Callee                    | Location           |
| ----: | -----: | ------------------------- | ------------------ |
| 87.0% |     40 | `ZSTD_compressStream2`    | `zstd_compress.c`  |
|  8.7% |      4 | `AIO_ReadPool_fillBuffer` | `fileio_asyncio.c` |
|  4.3% |      2 | `AIO_ReadPool_setFile`    | `fileio_asyncio.c` |

##### `FIO_compressFilename` (`fileio.c`)

|      % | Sleeps | Callee                         | Location   |
| -----: | -----: | ------------------------------ | ---------- |
| 100.0% |     46 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `main` (`zstdcli.c`)

|      % | Sleeps | Callee                 | Location   |
| -----: | -----: | ---------------------- | ---------- |
| 100.0% |     46 | `FIO_compressFilename` | `fileio.c` |

## Hottest call stacks

Call stacks ranked by interruptible sleeps entered in their leaf frame.

|     % | Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | -----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 76.6% |    164 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                     |
| 18.7% |     40 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `ZSTDMT_compressStream_generic` (`zstdmt_compress.c`) ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)` |
|  1.9% |      4 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_add` (`pool.c`) ← `AIO_ReadPool_fillBuffer` (`fileio_asyncio.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                             |
|  1.4% |      3 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                             |
|  0.9% |      2 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_add` (`pool.c`) ← `AIO_ReadPool_setFile` (`fileio_asyncio.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                                |
|  0.5% |      1 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `__pthread_mutex_lock (libc.so.6)` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                  |

# CPU profile

Took 2.04s over 2,044 samples (1.0ms per sample).

| Category |     % |  Time | Samples |
| -------- | ----: | ----: | ------: |
| Ours     | 99.5% | 2.03s |   2,034 |
| Native   |  0.3% | 6.0ms |       6 |
| Unknown  |  0.2% | 4.0ms |       4 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── 2.04s (99.9%) (anonymous)
    └── … 2.04s (99.8%) POOL_thread at pool.c
        └── 2.04s (99.8%) ZSTDMT_compressionJob at zstdmt_compress.c
            ├── 1.75s (85.6%) ZSTD_compressContinue_public
            │   └── 1.75s (85.6%) ZSTD_compress_frameChunk at zstd_compress.c
            │       ├── 1.74s (85.1%) ZSTD_buildSeqStore
            │       │   ├── 1.69s (82.9%, self 13.5%, self 16.5% globally) ZSTD_compressBlock_opt2 at zstd_opt.c
            │       │   │   └── 1.42s (69.4%, self 69.2%, self 81.2% globally) ZSTD_btGetAllMatches_noDict_3
            │       │   │       └── 4.0ms (0.2%) ZSTD_insertBt1.constprop.3
            │       │   ├── 23.0ms (1.1%) ZSTD_compressBlock_btultra2
            │       │   │   └── 22.0ms (1.1%, self 0.7%) ZSTD_compressBlock_opt2 at zstd_opt.c
            │       │   ├── 15.0ms (0.7%) ZSTD_litLengthPrice.constprop.1.isra.0 at zstd_opt.c
            │       │   ├── 4.0ms (0.2%) ZSTD_litLengthPrice.constprop.0.isra.0 at zstd_opt.c
            │       │   └── 3.0ms (0.1%) ZSTD_updateStats at zstd_opt.c
            │       ├── 4.0ms (0.2%) ZSTD_deriveBlockSplitsHelper
            │       │   └── 4.0ms (0.2%) ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize
            │       │       └── 2.0ms (0.1%) HIST_count_parallel_wksp at hist.c
            │       └── 3.0ms (0.1%) ZSTD_splitBlock
            │           └── 3.0ms (0.1%) ZSTD_recordFingerprint_1 at zstd_preSplit.c
            └── 290.0ms (14.2%) ZSTD_compressEnd_public
                └── 290.0ms (14.2%) ZSTD_compress_frameChunk at zstd_compress.c
                    └── 289.0ms (14.1%) ZSTD_buildSeqStore
                        └── 287.0ms (14.0%, self 2.4%) ZSTD_compressBlock_opt2 at zstd_opt.c
                            └── 238.0ms (11.6%, self 11.6%) ZSTD_btGetAllMatches_noDict_3
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|     % |    Time | Samples | Function                                 | Location          |
| ----: | ------: | ------: | ---------------------------------------- | ----------------- |
| 81.2% |   1.66s |   1,660 | `ZSTD_btGetAllMatches_noDict_3`          | `zstd_opt.c`      |
| 16.5% | 338.0ms |     338 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c`      |
|  0.9% |  18.0ms |      18 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c`      |
|  0.2% |   5.0ms |       5 | `ZSTD_insertBt1.constprop.3`             | `zstd_opt.c`      |
|  0.2% |   4.0ms |       4 | `(anonymous)`                            | `<unknown>`       |
|  0.2% |   4.0ms |       4 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c`      |
|  0.1% |   3.0ms |       3 | `HIST_count_parallel_wksp`               | `hist.c`          |
|  0.1% |   3.0ms |       3 | `ZSTD_updateStats`                       | `zstd_opt.c`      |
|  0.1% |   3.0ms |       3 | `ZSTD_recordFingerprint_1`               | `zstd_preSplit.c` |
|  0.1% |   3.0ms |       3 | `ZSTD_seqToCodes`                        | `<unknown>`       |
| <0.1% |   1.0ms |       1 | `HUF_buildCTable_wksp`                   | `<unknown>`       |
| <0.1% |   1.0ms |       1 | `ZSTD_encodeSequences`                   | `<unknown>`       |
| <0.1% |   1.0ms |       1 | `FSE_buildCTable_wksp`                   | `<unknown>`       |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function                                 | Location          |
| ----: | ------: | ------: | ---------------------------------------- | ----------------- |
| 81.2% |   1.66s |   1,660 | `ZSTD_btGetAllMatches_noDict_3`          | `zstd_opt.c`      |
| 16.5% | 338.0ms |     338 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c`      |
|  0.9% |  18.0ms |      18 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c`      |
|  0.2% |   5.0ms |       5 | `ZSTD_insertBt1.constprop.3`             | `zstd_opt.c`      |
|  0.2% |   4.0ms |       4 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c`      |
|  0.1% |   3.0ms |       3 | `HIST_count_parallel_wksp`               | `hist.c`          |
|  0.1% |   3.0ms |       3 | `ZSTD_updateStats`                       | `zstd_opt.c`      |
|  0.1% |   3.0ms |       3 | `ZSTD_recordFingerprint_1`               | `zstd_preSplit.c` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                    | Location     |
| -----: | ----: | ------: | ------------------------- | ------------ |
| 100.0% | 1.66s |   1,660 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |    Time | Samples | Caller                        | Location          |
| ----: | ------: | ------: | ----------------------------- | ----------------- |
| 95.9% | 324.0ms |     324 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  4.1% |  14.0ms |      14 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 94.4% | 17.0ms |      17 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  5.6% |  1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                          | Location     |
| -----: | ----: | ------: | ------------------------------- | ------------ |
| 100.0% | 5.0ms |       5 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `(anonymous)` (`<unknown>`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 50.0% | 2.0ms |       2 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |
| 25.0% | 1.0ms |       1 | `ZSTD_compressStream2`        | `<unknown>`       |
| 25.0% | 1.0ms |       1 | `pthread_cond_wait`           | `<unknown>`       |

##### `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 4.0ms |       4 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |  Time | Samples | Caller                                               | Location          |
| ----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 66.7% | 2.0ms |       2 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |
| 33.3% | 1.0ms |       1 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 3.0ms |       3 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`)

|      % |  Time | Samples | Caller            | Location    |
| -----: | ----: | ------: | ----------------- | ----------- |
| 100.0% | 3.0ms |       3 | `ZSTD_splitBlock` | `<unknown>` |

##### `ZSTD_seqToCodes` (`<unknown>`)

|     % |  Time | Samples | Caller                              | Location          |
| ----: | ----: | ------: | ----------------------------------- | ----------------- |
| 66.7% | 2.0ms |       2 | `ZSTD_buildBlockEntropyStats`       | `<unknown>`       |
| 33.3% | 1.0ms |       1 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `HUF_buildCTable_wksp` (`<unknown>`)

|      % |  Time | Samples | Caller                | Location    |
| -----: | ----: | ------: | --------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `HUF_optimalTableLog` | `<unknown>` |

##### `ZSTD_encodeSequences` (`<unknown>`)

|      % |  Time | Samples | Caller                              | Location          |
| -----: | ----: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `FSE_buildCTable_wksp` (`<unknown>`)

|      % |  Time | Samples | Caller             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildCTable` | `<unknown>` |

### Total time

Functions with the most time spent within the function and its callees.

|      % |    Time | Samples | Function                                             | Location            |
| -----: | ------: | ------: | ---------------------------------------------------- | ------------------- |
| 100.0% |   2.04s |   2,044 | `(anonymous)`                                        | `<unknown>`         |
|  99.9% |   2.04s |   2,042 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c` |
|  99.9% |   2.04s |   2,042 | `POOL_thread`                                        | `pool.c`            |
|  99.8% |   2.04s |   2,040 | `ZSTD_compress_frameChunk`                           | `zstd_compress.c`   |
|  99.2% |   2.03s |   2,028 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`   |
|  98.0% |   2.00s |   2,003 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
|  85.6% |   1.75s |   1,750 | `ZSTD_compressContinue_public`                       | `<unknown>`         |
|  81.5% |   1.67s |   1,665 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
|  14.2% | 290.0ms |     290 | `ZSTD_compressEnd_public`                            | `<unknown>`         |
|   1.1% |  23.0ms |      23 | `ZSTD_compressBlock_btultra2`                        | `<unknown>`         |
|   0.9% |  18.0ms |      18 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | `zstd_opt.c`        |
|   0.2% |   5.0ms |       5 | `ZSTD_insertBt1.constprop.3`                         | `zstd_opt.c`        |
|   0.2% |   5.0ms |       5 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |
|   0.2% |   5.0ms |       5 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`   |
|   0.2% |   4.0ms |       4 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`   |
|   0.2% |   4.0ms |       4 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | `zstd_opt.c`        |
|   0.1% |   3.0ms |       3 | `HIST_count_parallel_wksp`                           | `hist.c`            |
|   0.1% |   3.0ms |       3 | `ZSTD_buildBlockEntropyStats`                        | `<unknown>`         |
|   0.1% |   3.0ms |       3 | `ZSTD_updateStats`                                   | `zstd_opt.c`        |
|   0.1% |   3.0ms |       3 | `ZSTD_recordFingerprint_1`                           | `zstd_preSplit.c`   |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |   Time | Samples | Function                                             | Location            |
| ----: | -----: | ------: | ---------------------------------------------------- | ------------------- |
| 99.9% |  2.04s |   2,042 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c` |
| 99.9% |  2.04s |   2,042 | `POOL_thread`                                        | `pool.c`            |
| 99.8% |  2.04s |   2,040 | `ZSTD_compress_frameChunk`                           | `zstd_compress.c`   |
| 99.2% |  2.03s |   2,028 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`   |
| 98.0% |  2.00s |   2,003 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
| 81.5% |  1.67s |   1,665 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
|  0.9% | 18.0ms |      18 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | `zstd_opt.c`        |
|  0.2% |  5.0ms |       5 | `ZSTD_insertBt1.constprop.3`                         | `zstd_opt.c`        |
|  0.2% |  5.0ms |       5 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |
|  0.2% |  5.0ms |       5 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`   |
|  0.2% |  4.0ms |       4 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`   |
|  0.2% |  4.0ms |       4 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | `zstd_opt.c`        |
|  0.1% |  3.0ms |       3 | `HIST_count_parallel_wksp`                           | `hist.c`            |
|  0.1% |  3.0ms |       3 | `ZSTD_updateStats`                                   | `zstd_opt.c`        |
|  0.1% |  3.0ms |       3 | `ZSTD_recordFingerprint_1`                           | `zstd_preSplit.c`   |
|  0.1% |  2.0ms |       2 | `FIO_compressFilename_srcFile`                       | `fileio.c`          |
|  0.1% |  2.0ms |       2 | `ZSTD_compressBegin_internal`                        | `zstd_compress.c`   |
|  0.1% |  2.0ms |       2 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c`   |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 99.9% | 2.04s |   2,042 | `(anonymous)`                 | `<unknown>`       |
|  0.1% | 2.0ms |       2 | `__libc_start_main`           | `<unknown>`       |
|  0.1% | 2.0ms |       2 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |
| <0.1% | 1.0ms |       1 | `ZSTD_compressStream2`        | `<unknown>`       |
| <0.1% | 1.0ms |       1 | `pthread_cond_wait`           | `<unknown>`       |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|      % |  Time | Samples | Caller        | Location |
| -----: | ----: | ------: | ------------- | -------- |
| 100.0% | 2.04s |   2,042 | `POOL_thread` | `pool.c` |

##### `POOL_thread` (`pool.c`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 2.04s |   2,042 | `(anonymous)` | `<unknown>` |

##### `ZSTD_compress_frameChunk` (`zstd_compress.c`)

|     % |    Time | Samples | Caller                         | Location    |
| ----: | ------: | ------: | ------------------------------ | ----------- |
| 85.8% |   1.75s |   1,750 | `ZSTD_compressContinue_public` | `<unknown>` |
| 14.2% | 290.0ms |     290 | `ZSTD_compressEnd_public`      | `<unknown>` |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                     | Location          |
| -----: | ----: | ------: | -------------------------- | ----------------- |
| 100.0% | 2.03s |   2,028 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 98.9% |  1.98s |   1,981 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  1.1% | 22.0ms |      22 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_compressContinue_public` (`<unknown>`)

|      % |  Time | Samples | Caller                  | Location            |
| -----: | ----: | ------: | ----------------------- | ------------------- |
| 100.0% | 1.75s |   1,750 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                    | Location     |
| -----: | ----: | ------: | ------------------------- | ------------ |
| 100.0% | 1.67s |   1,665 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_compressEnd_public` (`<unknown>`)

|      % |    Time | Samples | Caller                  | Location            |
| -----: | ------: | ------: | ----------------------- | ------------------- |
| 100.0% | 290.0ms |     290 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTD_compressBlock_btultra2` (`<unknown>`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 23.0ms |      23 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 94.4% | 17.0ms |      17 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  5.6% |  1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                          | Location     |
| -----: | ----: | ------: | ------------------------------- | ------------ |
| 100.0% | 5.0ms |       5 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                         | Location          |
| -----: | ----: | ------: | ------------------------------ | ----------------- |
| 100.0% | 5.0ms |       5 | `ZSTD_deriveBlockSplitsHelper` | `zstd_compress.c` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                         | Location          |
| -----: | ----: | ------: | ------------------------------ | ----------------- |
| 100.0% | 5.0ms |       5 | `ZSTD_compress_frameChunk`     | `zstd_compress.c` |
|  20.0% | 1.0ms |       1 | `ZSTD_deriveBlockSplitsHelper` | `zstd_compress.c` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                     | Location          |
| -----: | ----: | ------: | -------------------------- | ----------------- |
| 100.0% | 4.0ms |       4 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 4.0ms |       4 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |  Time | Samples | Caller                                               | Location          |
| ----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 66.7% | 2.0ms |       2 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |
| 33.3% | 1.0ms |       1 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c` |

##### `ZSTD_buildBlockEntropyStats` (`<unknown>`)

|      % |  Time | Samples | Caller                                               | Location          |
| -----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 3.0ms |       3 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 3.0ms |       3 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`)

|      % |  Time | Samples | Caller            | Location    |
| -----: | ----: | ------: | ----------------- | ----------- |
| 100.0% | 3.0ms |       3 | `ZSTD_splitBlock` | `<unknown>` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|      % |  Time | Samples | Caller                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 2.0ms |       2 | `FIO_compressFilename` | `<unknown>` |

##### `ZSTD_compressBegin_internal` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                                 | Location    |
| -----: | ----: | ------: | -------------------------------------- | ----------- |
| 100.0% | 2.0ms |       2 | `ZSTD_compressBegin_advanced_internal` | `<unknown>` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                              | Location          |
| -----: | ----: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 2.0ms |       2 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location    |
| ----: | ----: | ------: | ------------- | ----------- |
| 99.9% | 2.04s |   2,042 | `POOL_thread` | `pool.c`    |
| 99.9% | 2.04s |   2,042 | `(anonymous)` | `<unknown>` |
|  0.1% | 2.0ms |       2 | `main`        | `<unknown>` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|     % |    Time | Samples | Callee                                 | Location    |
| ----: | ------: | ------: | -------------------------------------- | ----------- |
| 85.7% |   1.75s |   1,750 | `ZSTD_compressContinue_public`         | `<unknown>` |
| 14.2% | 290.0ms |     290 | `ZSTD_compressEnd_public`              | `<unknown>` |
|  0.1% |   2.0ms |       2 | `ZSTD_compressBegin_advanced_internal` | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|      % |  Time | Samples | Callee                  | Location            |
| -----: | ----: | ------: | ----------------------- | ------------------- |
| 100.0% | 2.04s |   2,042 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTD_compress_frameChunk` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                              | Location          |
| ----: | ----: | ------: | ----------------------------------- | ----------------- |
| 99.4% | 2.03s |   2,028 | `ZSTD_buildSeqStore`                | `zstd_compress.c` |
|  0.2% | 5.0ms |       5 | `ZSTD_deriveBlockSplitsHelper`      | `zstd_compress.c` |
|  0.2% | 4.0ms |       4 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |
|  0.1% | 3.0ms |       3 | `ZSTD_splitBlock`                   | `<unknown>`       |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                                   | Location     |
| ----: | -----: | ------: | ---------------------------------------- | ------------ |
| 97.7% |  1.98s |   1,981 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c` |
|  1.1% | 23.0ms |      23 | `ZSTD_compressBlock_btultra2`            | `<unknown>`  |
|  0.8% | 17.0ms |      17 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c` |
|  0.2% |  4.0ms |       4 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c` |
|  0.1% |  3.0ms |       3 | `ZSTD_updateStats`                       | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |  Time | Samples | Callee                          | Location     |
| ----: | ----: | ------: | ------------------------------- | ------------ |
| 83.1% | 1.67s |   1,665 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_compressContinue_public` (`<unknown>`)

|      % |  Time | Samples | Callee                     | Location          |
| -----: | ----: | ------: | -------------------------- | ----------------- |
| 100.0% | 1.75s |   1,750 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|    % |  Time | Samples | Callee                       | Location     |
| ---: | ----: | ------: | ---------------------------- | ------------ |
| 0.3% | 5.0ms |       5 | `ZSTD_insertBt1.constprop.3` | `zstd_opt.c` |

##### `ZSTD_compressEnd_public` (`<unknown>`)

|      % |    Time | Samples | Callee                     | Location          |
| -----: | ------: | ------: | -------------------------- | ----------------- |
| 100.0% | 290.0ms |     290 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_compressBlock_btultra2` (`<unknown>`)

|     % |   Time | Samples | Callee                                   | Location     |
| ----: | -----: | ------: | ---------------------------------------- | ------------ |
| 95.7% | 22.0ms |      22 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c` |
|  4.3% |  1.0ms |       1 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                        | Location    |
| ----: | ----: | ------: | ----------------------------- | ----------- |
| 60.0% | 3.0ms |       3 | `ZSTD_buildBlockEntropyStats` | `<unknown>` |
| 40.0% | 2.0ms |       2 | `HIST_count_parallel_wksp`    | `hist.c`    |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|      % |  Time | Samples | Callee                                               | Location          |
| -----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 5.0ms |       5 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |
|  20.0% | 1.0ms |       1 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                          | Location          |
| ----: | ----: | ------: | ------------------------------- | ----------------- |
| 50.0% | 2.0ms |       2 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |
| 25.0% | 1.0ms |       1 | `ZSTD_encodeSequences`          | `<unknown>`       |
| 25.0% | 1.0ms |       1 | `ZSTD_seqToCodes`               | `<unknown>`       |

##### `ZSTD_buildBlockEntropyStats` (`<unknown>`)

|     % |  Time | Samples | Callee                | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 66.7% | 2.0ms |       2 | `ZSTD_seqToCodes`     | `<unknown>` |
| 33.3% | 1.0ms |       1 | `HUF_optimalTableLog` | `<unknown>` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|      % |  Time | Samples | Callee                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 2.0ms |       2 | `ZSTD_compressStream2` | `<unknown>` |

##### `ZSTD_compressBegin_internal` (`zstd_compress.c`)

|      % |  Time | Samples | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 2.0ms |       2 | `(anonymous)` | `<unknown>` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                     | Location    |
| ----: | ----: | ------: | -------------------------- | ----------- |
| 50.0% | 1.0ms |       1 | `HIST_count_parallel_wksp` | `hist.c`    |
| 50.0% | 1.0ms |       1 | `ZSTD_buildCTable`         | `<unknown>` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                              |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 69.2% |   1.42s |   1,415 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                          |
| 13.5% | 275.0ms |     275 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                            |
| 11.6% | 237.0ms |     237 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                               |
|  2.4% |  49.0ms |      49 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                 |
|  0.7% |  15.0ms |      15 | `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                             |
|  0.7% |  14.0ms |      14 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                            |
|  0.4% |   8.0ms |       8 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                          |
|  0.2% |   4.0ms |       4 | `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                           |
|  0.2% |   4.0ms |       4 | `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                             |
|  0.1% |   3.0ms |       3 | `ZSTD_updateStats` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                   |
|  0.1% |   3.0ms |       3 | `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`) ← `ZSTD_splitBlock` ← `ZSTD_compress_frameChunk` (`zstd_compress.c`) ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                         |
|  0.1% |   2.0ms |       2 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                              |
|  0.1% |   2.0ms |       2 | `(anonymous)` ← `ZSTD_compressBegin_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                   |
|  0.1% |   2.0ms |       2 | `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                  |
| <0.1% |   1.0ms |       1 | `HUF_buildCTable_wksp` ← `HUF_optimalTableLog` ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`     |
| <0.1% |   1.0ms |       1 | `ZSTD_encodeSequences` ← `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                               |
| <0.1% |   1.0ms |       1 | `(anonymous)` ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                 |
| <0.1% |   1.0ms |       1 | `(anonymous)` ← `pthread_cond_wait` ← `ZSTDMT_compressStream_generic` ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                         |
| <0.1% |   1.0ms |       1 | `ZSTD_seqToCodes` ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)` |
| <0.1% |   1.0ms |       1 | `ZSTD_seqToCodes` ← `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                    |

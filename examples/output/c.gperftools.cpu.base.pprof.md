# CPU profile

Took 1.82s over 1,822 samples (1.0ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| Ours     | 99.0% |  1.80s |   1,803 |
| Native   |  0.8% | 14.0ms |      14 |
| Unknown  |  0.3% |  5.0ms |       5 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 1.81s (99.8%) (anonymous)
│   └── … 1.81s (99.7%) POOL_thread at pool.c
│       └── 1.81s (99.7%) ZSTDMT_compressionJob at zstdmt_compress.c
│           ├── 1.46s (80.3%) ZSTD_compressContinue_public
│           │   └── 1.46s (80.3%) ZSTD_compress_frameChunk at zstd_compress.c
│           │       ├── 1.44s (79.3%) ZSTD_buildSeqStore
│           │       │   ├── 1.41s (77.6%, self 13.6%, self 15.9% globally) ZSTD_compressBlock_opt2 at zstd_opt.c
│           │       │   │   └── 1.16s (64.0%, self 63.8%, self 81.7% globally) ZSTD_btGetAllMatches_noDict_3
│           │       │   │       └── 3.0ms (0.2%) ZSTD_insertBt1.constprop.3
│           │       │   ├── 21.0ms (1.2%) ZSTD_compressBlock_btultra2
│           │       │   │   └── 21.0ms (1.2%) ZSTD_compressBlock_opt2 at zstd_opt.c
│           │       │   │       ├── 14.0ms (0.8%) ZSTD_btGetAllMatches_noDict_3
│           │       │   │       └── 1.0ms (0.1%) ZSTD_rescaleFreqs
│           │       │   │           └── 1.0ms (0.1%) HIST_count_simple
│           │       │   ├── 7.0ms (0.4%) ZSTD_litLengthPrice.constprop.1.isra.0 at zstd_opt.c
│           │       │   └── 3.0ms (0.2%) ZSTD_litLengthPrice.constprop.0.isra.0 at zstd_opt.c
│           │       ├── 10.0ms (0.5%) ZSTD_deriveBlockSplitsHelper
│           │       │   └── 10.0ms (0.5%) ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize
│           │       │       └── 8.0ms (0.4%) ZSTD_buildBlockEntropyStats
│           │       │           ├── 4.0ms (0.2%) ZSTD_buildSequencesStatistics at zstd_compress.c
│           │       │           │   ├── 3.0ms (0.2%) HIST_count_parallel_wksp at hist.c
│           │       │           │   └── 1.0ms (0.1%) ZSTD_buildCTable
│           │       │           │       └── 1.0ms (0.1%) FSE_buildCTable_wksp
│           │       │           └── 3.0ms (0.2%) HUF_optimalTableLog
│           │       │               ├── 2.0ms (0.1%) HUF_buildCTable_wksp
│           │       │               └── 1.0ms (0.1%) HUF_writeCTable_wksp
│           │       │                   └── 1.0ms (0.1%) FSE_compress_usingCTable_generic at fse_compress.c
│           │       ├── 6.0ms (0.3%) ZSTD_compressSeqStore_singleBlock
│           │       │   ├── 5.0ms (0.3%) ZSTD_encodeSequences
│           │       │   └── 1.0ms (0.1%) ZSTD_seqToCodes
│           │       └── 1.0ms (0.1%) ZSTD_XXH64_update
│           └── 353.0ms (19.4%) ZSTD_compressEnd_public
│               └── 353.0ms (19.4%) ZSTD_compress_frameChunk at zstd_compress.c
│                   ├── 350.0ms (19.2%) ZSTD_buildSeqStore
│                   │   └── 347.0ms (19.0%, self 2.0%) ZSTD_compressBlock_opt2 at zstd_opt.c
│                   │       └── 311.0ms (17.1%) ZSTD_btGetAllMatches_noDict_3
│                   └── … 1.0ms (0.1%) FSE_writeNCount_generic at fse_compress.c
└── … 1.0ms (0.1%) ZSTDMT_freeCCtxPool.part.0 at zstdmt_compress.c
    └── 1.0ms (0.1%) ZSTD_freeCCtx
        └── 1.0ms (0.1%) munmap
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|     % |    Time | Samples | Function                                 | Location          |
| ----: | ------: | ------: | ---------------------------------------- | ----------------- |
| 81.7% |   1.48s |   1,488 | `ZSTD_btGetAllMatches_noDict_3`          | `zstd_opt.c`      |
| 15.9% | 290.0ms |     290 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c`      |
|  0.5% |   9.0ms |       9 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c`      |
|  0.3% |   6.0ms |       6 | `HIST_count_parallel_wksp`               | `hist.c`          |
|  0.3% |   5.0ms |       5 | `(anonymous)`                            | `<unknown>`       |
|  0.3% |   5.0ms |       5 | `ZSTD_encodeSequences`                   | `<unknown>`       |
|  0.2% |   4.0ms |       4 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c`      |
|  0.2% |   3.0ms |       3 | `HUF_buildCTable_wksp`                   | `<unknown>`       |
|  0.2% |   3.0ms |       3 | `ZSTD_insertBt1.constprop.3`             | `zstd_opt.c`      |
|  0.1% |   2.0ms |       2 | `ZSTD_seqToCodes`                        | `<unknown>`       |
|  0.1% |   1.0ms |       1 | `ZSTD_compress_frameChunk`               | `zstd_compress.c` |
|  0.1% |   1.0ms |       1 | `FSE_buildCTable_wksp`                   | `<unknown>`       |
|  0.1% |   1.0ms |       1 | `FSE_compress_usingCTable_generic`       | `fse_compress.c`  |
|  0.1% |   1.0ms |       1 | `munmap`                                 | `<unknown>`       |
|  0.1% |   1.0ms |       1 | `FSE_writeNCount_generic`                | `fse_compress.c`  |
|  0.1% |   1.0ms |       1 | `ZSTD_XXH64_update`                      | `<unknown>`       |
|  0.1% |   1.0ms |       1 | `HIST_count_simple`                      | `<unknown>`       |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function                                 | Location          |
| ----: | ------: | ------: | ---------------------------------------- | ----------------- |
| 81.7% |   1.48s |   1,488 | `ZSTD_btGetAllMatches_noDict_3`          | `zstd_opt.c`      |
| 15.9% | 290.0ms |     290 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c`      |
|  0.5% |   9.0ms |       9 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c`      |
|  0.3% |   6.0ms |       6 | `HIST_count_parallel_wksp`               | `hist.c`          |
|  0.2% |   4.0ms |       4 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c`      |
|  0.2% |   3.0ms |       3 | `ZSTD_insertBt1.constprop.3`             | `zstd_opt.c`      |
|  0.1% |   1.0ms |       1 | `ZSTD_compress_frameChunk`               | `zstd_compress.c` |
|  0.1% |   1.0ms |       1 | `FSE_compress_usingCTable_generic`       | `fse_compress.c`  |
|  0.1% |   1.0ms |       1 | `FSE_writeNCount_generic`                | `fse_compress.c`  |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                    | Location     |
| -----: | ----: | ------: | ------------------------- | ------------ |
| 100.0% | 1.48s |   1,488 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |    Time | Samples | Caller                        | Location          |
| ----: | ------: | ------: | ----------------------------- | ----------------- |
| 97.9% | 284.0ms |     284 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  2.1% |   6.0ms |       6 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 9.0ms |       9 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |  Time | Samples | Caller                                               | Location          |
| ----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 50.0% | 3.0ms |       3 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c` |
| 50.0% | 3.0ms |       3 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `(anonymous)` (`<unknown>`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 60.0% | 3.0ms |       3 | `ZSTD_compressStream2`        | `<unknown>`       |
| 40.0% | 2.0ms |       2 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |

##### `ZSTD_encodeSequences` (`<unknown>`)

|      % |  Time | Samples | Caller                              | Location          |
| -----: | ----: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 5.0ms |       5 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 4.0ms |       4 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `HUF_buildCTable_wksp` (`<unknown>`)

|      % |  Time | Samples | Caller                | Location    |
| -----: | ----: | ------: | --------------------- | ----------- |
| 100.0% | 3.0ms |       3 | `HUF_optimalTableLog` | `<unknown>` |

##### `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                          | Location     |
| -----: | ----: | ------: | ------------------------------- | ------------ |
| 100.0% | 3.0ms |       3 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_seqToCodes` (`<unknown>`)

|     % |  Time | Samples | Caller                              | Location          |
| ----: | ----: | ------: | ----------------------------------- | ----------------- |
| 50.0% | 1.0ms |       1 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |
| 50.0% | 1.0ms |       1 | `ZSTD_buildBlockEntropyStats`       | `<unknown>`       |

##### `ZSTD_compress_frameChunk` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                         | Location    |
| -----: | ----: | ------: | ------------------------------ | ----------- |
| 100.0% | 1.0ms |       1 | `ZSTD_compressContinue_public` | `<unknown>` |

##### `FSE_buildCTable_wksp` (`<unknown>`)

|      % |  Time | Samples | Caller             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildCTable` | `<unknown>` |

##### `FSE_compress_usingCTable_generic` (`fse_compress.c`)

|      % |  Time | Samples | Caller                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `HUF_writeCTable_wksp` | `<unknown>` |

##### `munmap` (`<unknown>`)

|      % |  Time | Samples | Caller          | Location    |
| -----: | ----: | ------: | --------------- | ----------- |
| 100.0% | 1.0ms |       1 | `ZSTD_freeCCtx` | `<unknown>` |

##### `FSE_writeNCount_generic` (`fse_compress.c`)

|      % |  Time | Samples | Caller            | Location                    |
| -----: | ----: | ------: | ----------------- | --------------------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_NCountCost` | `zstd_compress_sequences.c` |

##### `ZSTD_XXH64_update` (`<unknown>`)

|      % |  Time | Samples | Caller                     | Location          |
| -----: | ----: | ------: | -------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `HIST_count_simple` (`<unknown>`)

|      % |  Time | Samples | Caller              | Location     |
| -----: | ----: | ------: | ------------------- | ------------ |
| 100.0% | 1.0ms |       1 | `ZSTD_rescaleFreqs` | `zstd_opt.c` |

### Total time

Functions with the most time spent within the function and its callees.

|      % |    Time | Samples | Function                                             | Location            |
| -----: | ------: | ------: | ---------------------------------------------------- | ------------------- |
| 100.0% |   1.82s |   1,822 | `(anonymous)`                                        | `<unknown>`         |
|  99.8% |   1.81s |   1,818 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c` |
|  99.8% |   1.81s |   1,818 | `POOL_thread`                                        | `pool.c`            |
|  99.7% |   1.81s |   1,816 | `ZSTD_compress_frameChunk`                           | `zstd_compress.c`   |
|  98.5% |   1.79s |   1,795 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`   |
|  97.8% |   1.78s |   1,782 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
|  81.8% |   1.49s |   1,491 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
|  80.3% |   1.46s |   1,463 | `ZSTD_compressContinue_public`                       | `<unknown>`         |
|  19.4% | 353.0ms |     353 | `ZSTD_compressEnd_public`                            | `<unknown>`         |
|   1.2% |  21.0ms |      21 | `ZSTD_compressBlock_btultra2`                        | `<unknown>`         |
|   0.7% |  13.0ms |      13 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |
|   0.7% |  13.0ms |      13 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`   |
|   0.5% |  10.0ms |      10 | `ZSTD_buildBlockEntropyStats`                        | `<unknown>`         |
|   0.5% |   9.0ms |       9 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | `zstd_opt.c`        |
|   0.3% |   6.0ms |       6 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`   |
|   0.3% |   6.0ms |       6 | `HIST_count_parallel_wksp`                           | `hist.c`            |
|   0.3% |   5.0ms |       5 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c`   |
|   0.3% |   5.0ms |       5 | `ZSTD_encodeSequences`                               | `<unknown>`         |
|   0.2% |   4.0ms |       4 | `HUF_optimalTableLog`                                | `<unknown>`         |
|   0.2% |   4.0ms |       4 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | `zstd_opt.c`        |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |   Time | Samples | Function                                             | Location                    |
| ----: | -----: | ------: | ---------------------------------------------------- | --------------------------- |
| 99.8% |  1.81s |   1,818 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c`         |
| 99.8% |  1.81s |   1,818 | `POOL_thread`                                        | `pool.c`                    |
| 99.7% |  1.81s |   1,816 | `ZSTD_compress_frameChunk`                           | `zstd_compress.c`           |
| 98.5% |  1.79s |   1,795 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`           |
| 97.8% |  1.78s |   1,782 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`                |
| 81.8% |  1.49s |   1,491 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`                |
|  0.7% | 13.0ms |      13 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`           |
|  0.7% | 13.0ms |      13 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`           |
|  0.5% |  9.0ms |       9 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | `zstd_opt.c`                |
|  0.3% |  6.0ms |       6 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`           |
|  0.3% |  6.0ms |       6 | `HIST_count_parallel_wksp`                           | `hist.c`                    |
|  0.3% |  5.0ms |       5 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c`           |
|  0.2% |  4.0ms |       4 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | `zstd_opt.c`                |
|  0.2% |  3.0ms |       3 | `ZSTD_insertBt1.constprop.3`                         | `zstd_opt.c`                |
|  0.2% |  3.0ms |       3 | `FIO_compressFilename_srcFile`                       | `fileio.c`                  |
|  0.1% |  2.0ms |       2 | `ZSTD_compressBegin_internal`                        | `zstd_compress.c`           |
|  0.1% |  1.0ms |       1 | `FSE_compress_usingCTable_generic`                   | `fse_compress.c`            |
|  0.1% |  1.0ms |       1 | `ZSTDMT_freeCCtxPool.part.0`                         | `zstdmt_compress.c`         |
|  0.1% |  1.0ms |       1 | `FSE_writeNCount_generic`                            | `fse_compress.c`            |
|  0.1% |  1.0ms |       1 | `ZSTD_NCountCost`                                    | `zstd_compress_sequences.c` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 99.8% | 1.81s |   1,818 | `(anonymous)`                 | `<unknown>`       |
|  0.2% | 4.0ms |       4 | `__libc_start_main`           | `<unknown>`       |
|  0.2% | 3.0ms |       3 | `ZSTD_compressStream2`        | `<unknown>`       |
|  0.1% | 2.0ms |       2 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|      % |  Time | Samples | Caller        | Location |
| -----: | ----: | ------: | ------------- | -------- |
| 100.0% | 1.81s |   1,818 | `POOL_thread` | `pool.c` |

##### `POOL_thread` (`pool.c`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 1.81s |   1,818 | `(anonymous)` | `<unknown>` |

##### `ZSTD_compress_frameChunk` (`zstd_compress.c`)

|     % |    Time | Samples | Caller                         | Location    |
| ----: | ------: | ------: | ------------------------------ | ----------- |
| 80.6% |   1.46s |   1,463 | `ZSTD_compressContinue_public` | `<unknown>` |
| 19.4% | 353.0ms |     353 | `ZSTD_compressEnd_public`      | `<unknown>` |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                     | Location          |
| -----: | ----: | ------: | -------------------------- | ----------------- |
| 100.0% | 1.79s |   1,795 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 98.8% |  1.76s |   1,761 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  1.2% | 21.0ms |      21 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                    | Location     |
| -----: | ----: | ------: | ------------------------- | ------------ |
| 100.0% | 1.49s |   1,491 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_compressContinue_public` (`<unknown>`)

|      % |  Time | Samples | Caller                  | Location            |
| -----: | ----: | ------: | ----------------------- | ------------------- |
| 100.0% | 1.46s |   1,463 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTD_compressEnd_public` (`<unknown>`)

|      % |    Time | Samples | Caller                  | Location            |
| -----: | ------: | ------: | ----------------------- | ------------------- |
| 100.0% | 353.0ms |     353 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTD_compressBlock_btultra2` (`<unknown>`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 21.0ms |      21 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                         | Location          |
| -----: | -----: | ------: | ------------------------------ | ----------------- |
| 100.0% | 13.0ms |      13 | `ZSTD_deriveBlockSplitsHelper` | `zstd_compress.c` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                     | Location          |
| -----: | -----: | ------: | -------------------------- | ----------------- |
| 100.0% | 13.0ms |      13 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_buildBlockEntropyStats` (`<unknown>`)

|      % |   Time | Samples | Caller                                               | Location          |
| -----: | -----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 10.0ms |      10 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 9.0ms |       9 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                     | Location          |
| -----: | ----: | ------: | -------------------------- | ----------------- |
| 100.0% | 6.0ms |       6 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |  Time | Samples | Caller                                               | Location          |
| ----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 50.0% | 3.0ms |       3 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c` |
| 50.0% | 3.0ms |       3 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                        | Location    |
| -----: | ----: | ------: | ----------------------------- | ----------- |
| 100.0% | 5.0ms |       5 | `ZSTD_buildBlockEntropyStats` | `<unknown>` |

##### `ZSTD_encodeSequences` (`<unknown>`)

|      % |  Time | Samples | Caller                              | Location          |
| -----: | ----: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 5.0ms |       5 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `HUF_optimalTableLog` (`<unknown>`)

|      % |  Time | Samples | Caller                        | Location    |
| -----: | ----: | ------: | ----------------------------- | ----------- |
| 100.0% | 4.0ms |       4 | `ZSTD_buildBlockEntropyStats` | `<unknown>` |

##### `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 4.0ms |       4 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                          | Location     |
| -----: | ----: | ------: | ------------------------------- | ------------ |
| 100.0% | 3.0ms |       3 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|      % |  Time | Samples | Caller                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 3.0ms |       3 | `FIO_compressFilename` | `<unknown>` |

##### `ZSTD_compressBegin_internal` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                                 | Location    |
| -----: | ----: | ------: | -------------------------------------- | ----------- |
| 100.0% | 2.0ms |       2 | `ZSTD_compressBegin_advanced_internal` | `<unknown>` |

##### `FSE_compress_usingCTable_generic` (`fse_compress.c`)

|      % |  Time | Samples | Caller                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `HUF_writeCTable_wksp` | `<unknown>` |

##### `ZSTDMT_freeCCtxPool.part.0` (`zstdmt_compress.c`)

|      % |  Time | Samples | Caller            | Location    |
| -----: | ----: | ------: | ----------------- | ----------- |
| 100.0% | 1.0ms |       1 | `ZSTDMT_freeCCtx` | `<unknown>` |

##### `FSE_writeNCount_generic` (`fse_compress.c`)

|      % |  Time | Samples | Caller            | Location                    |
| -----: | ----: | ------: | ----------------- | --------------------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_NCountCost` | `zstd_compress_sequences.c` |

##### `ZSTD_NCountCost` (`zstd_compress_sequences.c`)

|      % |  Time | Samples | Caller                    | Location    |
| -----: | ----: | ------: | ------------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `ZSTD_selectEncodingType` | `<unknown>` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location    |
| ----: | ----: | ------: | ------------- | ----------- |
| 99.8% | 1.81s |   1,818 | `POOL_thread` | `pool.c`    |
| 99.8% | 1.81s |   1,818 | `(anonymous)` | `<unknown>` |
|  0.2% | 4.0ms |       4 | `main`        | `<unknown>` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|     % |    Time | Samples | Callee                                 | Location    |
| ----: | ------: | ------: | -------------------------------------- | ----------- |
| 80.5% |   1.46s |   1,463 | `ZSTD_compressContinue_public`         | `<unknown>` |
| 19.4% | 353.0ms |     353 | `ZSTD_compressEnd_public`              | `<unknown>` |
|  0.1% |   2.0ms |       2 | `ZSTD_compressBegin_advanced_internal` | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|      % |  Time | Samples | Callee                  | Location            |
| -----: | ----: | ------: | ----------------------- | ------------------- |
| 100.0% | 1.81s |   1,818 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTD_compress_frameChunk` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                              | Location          |
| ----: | -----: | ------: | ----------------------------------- | ----------------- |
| 98.8% |  1.79s |   1,795 | `ZSTD_buildSeqStore`                | `zstd_compress.c` |
|  0.7% | 13.0ms |      13 | `ZSTD_deriveBlockSplitsHelper`      | `zstd_compress.c` |
|  0.3% |  6.0ms |       6 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |
|  0.1% |  1.0ms |       1 | `ZSTD_XXH64_update`                 | `<unknown>`       |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                                   | Location     |
| ----: | -----: | ------: | ---------------------------------------- | ------------ |
| 98.1% |  1.76s |   1,761 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c` |
|  1.2% | 21.0ms |      21 | `ZSTD_compressBlock_btultra2`            | `<unknown>`  |
|  0.5% |  9.0ms |       9 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c` |
|  0.2% |  4.0ms |       4 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |  Time | Samples | Callee                          | Location     |
| ----: | ----: | ------: | ------------------------------- | ------------ |
| 83.7% | 1.49s |   1,491 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |
|  0.1% | 1.0ms |       1 | `ZSTD_rescaleFreqs`             | `zstd_opt.c` |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|    % |  Time | Samples | Callee                       | Location     |
| ---: | ----: | ------: | ---------------------------- | ------------ |
| 0.2% | 3.0ms |       3 | `ZSTD_insertBt1.constprop.3` | `zstd_opt.c` |

##### `ZSTD_compressContinue_public` (`<unknown>`)

|      % |  Time | Samples | Callee                     | Location          |
| -----: | ----: | ------: | -------------------------- | ----------------- |
| 100.0% | 1.46s |   1,463 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_compressEnd_public` (`<unknown>`)

|      % |    Time | Samples | Callee                     | Location          |
| -----: | ------: | ------: | -------------------------- | ----------------- |
| 100.0% | 353.0ms |     353 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_compressBlock_btultra2` (`<unknown>`)

|      % |   Time | Samples | Callee                    | Location     |
| -----: | -----: | ------: | ------------------------- | ------------ |
| 100.0% | 21.0ms |      21 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                        | Location    |
| ----: | -----: | ------: | ----------------------------- | ----------- |
| 76.9% | 10.0ms |      10 | `ZSTD_buildBlockEntropyStats` | `<unknown>` |
| 23.1% |  3.0ms |       3 | `HIST_count_parallel_wksp`    | `hist.c`    |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|      % |   Time | Samples | Callee                                               | Location          |
| -----: | -----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 13.0ms |      13 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_buildBlockEntropyStats` (`<unknown>`)

|     % |  Time | Samples | Callee                          | Location          |
| ----: | ----: | ------: | ------------------------------- | ----------------- |
| 50.0% | 5.0ms |       5 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |
| 40.0% | 4.0ms |       4 | `HUF_optimalTableLog`           | `<unknown>`       |
| 10.0% | 1.0ms |       1 | `ZSTD_seqToCodes`               | `<unknown>`       |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                 | Location    |
| ----: | ----: | ------: | ---------------------- | ----------- |
| 83.3% | 5.0ms |       5 | `ZSTD_encodeSequences` | `<unknown>` |
| 16.7% | 1.0ms |       1 | `ZSTD_seqToCodes`      | `<unknown>` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                     | Location    |
| ----: | ----: | ------: | -------------------------- | ----------- |
| 60.0% | 3.0ms |       3 | `HIST_count_parallel_wksp` | `hist.c`    |
| 20.0% | 1.0ms |       1 | `ZSTD_buildCTable`         | `<unknown>` |
| 20.0% | 1.0ms |       1 | `ZSTD_selectEncodingType`  | `<unknown>` |

##### `HUF_optimalTableLog` (`<unknown>`)

|     % |  Time | Samples | Callee                 | Location    |
| ----: | ----: | ------: | ---------------------- | ----------- |
| 75.0% | 3.0ms |       3 | `HUF_buildCTable_wksp` | `<unknown>` |
| 25.0% | 1.0ms |       1 | `HUF_writeCTable_wksp` | `<unknown>` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|      % |  Time | Samples | Callee                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 3.0ms |       3 | `ZSTD_compressStream2` | `<unknown>` |

##### `ZSTD_compressBegin_internal` (`zstd_compress.c`)

|      % |  Time | Samples | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 2.0ms |       2 | `(anonymous)` | `<unknown>` |

##### `ZSTDMT_freeCCtxPool.part.0` (`zstdmt_compress.c`)

|      % |  Time | Samples | Callee          | Location    |
| -----: | ----: | ------: | --------------- | ----------- |
| 100.0% | 1.0ms |       1 | `ZSTD_freeCCtx` | `<unknown>` |

##### `ZSTD_NCountCost` (`zstd_compress_sequences.c`)

|      % |  Time | Samples | Callee                    | Location         |
| -----: | ----: | ------: | ------------------------- | ---------------- |
| 100.0% | 1.0ms |       1 | `FSE_writeNCount_generic` | `fse_compress.c` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 63.8% |   1.16s |   1,163 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                         |
| 17.1% | 311.0ms |     311 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                              |
| 13.6% | 248.0ms |     248 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                           |
|  2.0% |  36.0ms |      36 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                                |
|  0.8% |  14.0ms |      14 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                         |
|  0.4% |   7.0ms |       7 | `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                            |
|  0.3% |   6.0ms |       6 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                           |
|  0.3% |   5.0ms |       5 | `ZSTD_encodeSequences` ← `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                              |
|  0.2% |   3.0ms |       3 | `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                            |
|  0.2% |   3.0ms |       3 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`       |
|  0.2% |   3.0ms |       3 | `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                          |
|  0.2% |   3.0ms |       3 | `(anonymous)` ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                |
|  0.1% |   2.0ms |       2 | `HUF_buildCTable_wksp` ← `HUF_optimalTableLog` ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                    |
|  0.1% |   2.0ms |       2 | `(anonymous)` ← `ZSTD_compressBegin_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                                                                  |
|  0.1% |   2.0ms |       2 | `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                 |
|  0.1% |   2.0ms |       2 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                             |
|  0.1% |   1.0ms |       1 | `HUF_buildCTable_wksp` ← `HUF_optimalTableLog` ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                         |
|  0.1% |   1.0ms |       1 | `FSE_buildCTable_wksp` ← `ZSTD_buildCTable` ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)` |
|  0.1% |   1.0ms |       1 | `ZSTD_seqToCodes` ← `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                                   |
|  0.1% |   1.0ms |       1 | `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                 |

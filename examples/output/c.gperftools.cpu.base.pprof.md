# CPU profile

Took 1.60s over 1,603 samples (1.0ms per sample).

| Category |     % |  Time | Samples |
| -------- | ----: | ----: | ------: |
| Ours     | 99.2% | 1.59s |   1,590 |
| Native   |  0.6% | 9.0ms |       9 |
| Unknown  |  0.2% | 4.0ms |       4 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 1.60s (99.8%) (anonymous)
│   ├── … 1.59s (99.6%) POOL_thread at pool.c
│   │   └── 1.59s (99.6%) ZSTDMT_compressionJob at zstdmt_compress.c
│   │       ├── 1.33s (83.3%) ZSTD_compressContinue_public
│   │       │   └── 1.33s (83.3%) ZSTD_compress_frameChunk at zstd_compress.c
│   │       │       ├── 1.32s (82.8%) ZSTD_buildSeqStore
│   │       │       │   ├── 1.29s (81.0%, self 15.8%, self 19.0% globally) ZSTD_compressBlock_opt2 at zstd_opt.c
│   │       │       │   │   └── 1.04s (65.2%, self 65.1%, self 78.7% globally) ZSTD_btGetAllMatches_noDict_3
│   │       │       │   │       └── 2.0ms (0.1%) ZSTD_insertBt1.constprop.3
│   │       │       │   ├── 16.0ms (1.0%) ZSTD_compressBlock_btultra2
│   │       │       │   │   ├── 15.0ms (0.9%, self 0.6%) ZSTD_compressBlock_opt2 at zstd_opt.c
│   │       │       │   │   └── 1.0ms (0.1%) ZSTD_litLengthPrice.constprop.0.isra.0 at zstd_opt.c
│   │       │       │   ├── 9.0ms (0.6%) ZSTD_litLengthPrice.constprop.1.isra.0 at zstd_opt.c
│   │       │       │   └── 3.0ms (0.2%) ZSTD_updateStats at zstd_opt.c
│   │       │       ├── 5.0ms (0.3%) ZSTD_deriveBlockSplitsHelper
│   │       │       │   └── 5.0ms (0.3%) ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize
│   │       │       │       ├── 3.0ms (0.2%) ZSTD_buildBlockEntropyStats
│   │       │       │       │   ├── 2.0ms (0.1%) HUF_optimalTableLog
│   │       │       │       │   │   └── 2.0ms (0.1%) HUF_buildCTable_wksp
│   │       │       │       │   └── … 1.0ms (0.1%) FSE_buildCTable_wksp
│   │       │       │       └── 1.0ms (0.1%) HIST_count_parallel_wksp at hist.c
│   │       │       └── 3.0ms (0.2%) ZSTD_compressSeqStore_singleBlock
│   │       │           └── 2.0ms (0.1%) ZSTD_encodeSequences
│   │       └── 261.0ms (16.3%) ZSTD_compressEnd_public
│   │           └── 261.0ms (16.3%) ZSTD_compress_frameChunk at zstd_compress.c
│   │               ├── 259.0ms (16.2%) ZSTD_buildSeqStore
│   │               │   └── 254.0ms (15.8%, self 2.6%) ZSTD_compressBlock_opt2 at zstd_opt.c
│   │               │       └── 213.0ms (13.3%) ZSTD_btGetAllMatches_noDict_3
│   │               └── 1.0ms (0.1%) ZSTD_compressSeqStore_singleBlock
│   │                   └── 1.0ms (0.1%) ZSTD_seqToCodes
│   └── … 1.0ms (0.1%) __read
└── 3.0ms (0.2%) _start
    └── 3.0ms (0.2%) __libc_start_main
        └── 3.0ms (0.2%) (anonymous)
            └── 1.0ms (0.1%) main
                └── 1.0ms (0.1%) FIO_compressFilename
                    └── 1.0ms (0.1%) AIO_WritePool_free
                        └── 1.0ms (0.1%) AIO_IOPool_destroy at fileio_asyncio.c
                            └── 1.0ms (0.1%) munmap
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|     % |    Time | Samples | Function                                             | Location          |
| ----: | ------: | ------: | ---------------------------------------------------- | ----------------- |
| 78.7% |   1.26s |   1,262 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`      |
| 19.0% | 304.0ms |     304 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`      |
|  0.9% |  14.0ms |      14 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | `zstd_opt.c`      |
|  0.2% |   4.0ms |       4 | `(anonymous)`                                        | `<unknown>`       |
|  0.2% |   3.0ms |       3 | `ZSTD_updateStats`                                   | `zstd_opt.c`      |
|  0.1% |   2.0ms |       2 | `ZSTD_insertBt1.constprop.3`                         | `zstd_opt.c`      |
|  0.1% |   2.0ms |       2 | `ZSTD_encodeSequences`                               | `<unknown>`       |
|  0.1% |   2.0ms |       2 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | `zstd_opt.c`      |
|  0.1% |   2.0ms |       2 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |
|  0.1% |   2.0ms |       2 | `ZSTD_seqToCodes`                                    | `<unknown>`       |
|  0.1% |   2.0ms |       2 | `HUF_buildCTable_wksp`                               | `<unknown>`       |
|  0.1% |   1.0ms |       1 | `munmap`                                             | `<unknown>`       |
|  0.1% |   1.0ms |       1 | `HIST_count_parallel_wksp`                           | `hist.c`          |
|  0.1% |   1.0ms |       1 | `__read`                                             | `<unknown>`       |
|  0.1% |   1.0ms |       1 | `FSE_buildCTable_wksp`                               | `<unknown>`       |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function                                             | Location          |
| ----: | ------: | ------: | ---------------------------------------------------- | ----------------- |
| 78.7% |   1.26s |   1,262 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`      |
| 19.0% | 304.0ms |     304 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`      |
|  0.9% |  14.0ms |      14 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | `zstd_opt.c`      |
|  0.2% |   3.0ms |       3 | `ZSTD_updateStats`                                   | `zstd_opt.c`      |
|  0.1% |   2.0ms |       2 | `ZSTD_insertBt1.constprop.3`                         | `zstd_opt.c`      |
|  0.1% |   2.0ms |       2 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | `zstd_opt.c`      |
|  0.1% |   2.0ms |       2 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |
|  0.1% |   1.0ms |       1 | `HIST_count_parallel_wksp`                           | `hist.c`          |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                    | Location     |
| -----: | ----: | ------: | ------------------------- | ------------ |
| 100.0% | 1.26s |   1,262 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |    Time | Samples | Caller                        | Location          |
| ----: | ------: | ------: | ----------------------------- | ----------------- |
| 97.0% | 295.0ms |     295 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  3.0% |   9.0ms |       9 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 14.0ms |      14 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `(anonymous)` (`<unknown>`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 50.0% | 2.0ms |       2 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |
| 50.0% | 2.0ms |       2 | `ZSTD_compressStream2`        | `<unknown>`       |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 3.0ms |       3 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                          | Location     |
| -----: | ----: | ------: | ------------------------------- | ------------ |
| 100.0% | 2.0ms |       2 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_encodeSequences` (`<unknown>`)

|      % |  Time | Samples | Caller                              | Location          |
| -----: | ----: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 2.0ms |       2 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 50.0% | 1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |
| 50.0% | 1.0ms |       1 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                         | Location          |
| -----: | ----: | ------: | ------------------------------ | ----------------- |
| 100.0% | 2.0ms |       2 | `ZSTD_deriveBlockSplitsHelper` | `zstd_compress.c` |

##### `ZSTD_seqToCodes` (`<unknown>`)

|      % |  Time | Samples | Caller                              | Location          |
| -----: | ----: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 2.0ms |       2 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `HUF_buildCTable_wksp` (`<unknown>`)

|      % |  Time | Samples | Caller                | Location    |
| -----: | ----: | ------: | --------------------- | ----------- |
| 100.0% | 2.0ms |       2 | `HUF_optimalTableLog` | `<unknown>` |

##### `munmap` (`<unknown>`)

|      % |  Time | Samples | Caller               | Location           |
| -----: | ----: | ------: | -------------------- | ------------------ |
| 100.0% | 1.0ms |       1 | `AIO_IOPool_destroy` | `fileio_asyncio.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|      % |  Time | Samples | Caller                                               | Location          |
| -----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `__read` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 1.0ms |       1 | `(anonymous)` | `<unknown>` |

##### `FSE_buildCTable_wksp` (`<unknown>`)

|      % |  Time | Samples | Caller             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildCTable` | `<unknown>` |

### Total time

Functions with the most time spent within the function and its callees.

|      % |    Time | Samples | Function                                             | Location            |
| -----: | ------: | ------: | ---------------------------------------------------- | ------------------- |
| 100.0% |   1.60s |   1,603 | `(anonymous)`                                        | `<unknown>`         |
|  99.8% |   1.60s |   1,600 | `POOL_thread`                                        | `pool.c`            |
|  99.8% |   1.59s |   1,599 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c` |
|  99.6% |   1.59s |   1,597 | `ZSTD_compress_frameChunk`                           | `zstd_compress.c`   |
|  99.0% |   1.58s |   1,587 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`   |
|  97.8% |   1.56s |   1,568 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
|  83.3% |   1.33s |   1,336 | `ZSTD_compressContinue_public`                       | `<unknown>`         |
|  78.9% |   1.26s |   1,264 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
|  16.3% | 261.0ms |     261 | `ZSTD_compressEnd_public`                            | `<unknown>`         |
|   1.0% |  16.0ms |      16 | `ZSTD_compressBlock_btultra2`                        | `<unknown>`         |
|   0.9% |  14.0ms |      14 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | `zstd_opt.c`        |
|   0.4% |   6.0ms |       6 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |
|   0.4% |   6.0ms |       6 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`   |
|   0.2% |   4.0ms |       4 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`   |
|   0.2% |   3.0ms |       3 | `ZSTD_updateStats`                                   | `zstd_opt.c`        |
|   0.2% |   3.0ms |       3 | `FIO_compressFilename`                               | `<unknown>`         |
|   0.2% |   3.0ms |       3 | `main`                                               | `<unknown>`         |
|   0.2% |   3.0ms |       3 | `__libc_start_main`                                  | `<unknown>`         |
|   0.2% |   3.0ms |       3 | `_start`                                             | `<unknown>`         |
|   0.2% |   3.0ms |       3 | `ZSTD_buildBlockEntropyStats`                        | `<unknown>`         |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |   Time | Samples | Function                                             | Location            |
| ----: | -----: | ------: | ---------------------------------------------------- | ------------------- |
| 99.8% |  1.60s |   1,600 | `POOL_thread`                                        | `pool.c`            |
| 99.8% |  1.59s |   1,599 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c` |
| 99.6% |  1.59s |   1,597 | `ZSTD_compress_frameChunk`                           | `zstd_compress.c`   |
| 99.0% |  1.58s |   1,587 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`   |
| 97.8% |  1.56s |   1,568 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
| 78.9% |  1.26s |   1,264 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
|  0.9% | 14.0ms |      14 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | `zstd_opt.c`        |
|  0.4% |  6.0ms |       6 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |
|  0.4% |  6.0ms |       6 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`   |
|  0.2% |  4.0ms |       4 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`   |
|  0.2% |  3.0ms |       3 | `ZSTD_updateStats`                                   | `zstd_opt.c`        |
|  0.1% |  2.0ms |       2 | `ZSTD_compressBegin_internal`                        | `zstd_compress.c`   |
|  0.1% |  2.0ms |       2 | `ZSTD_insertBt1.constprop.3`                         | `zstd_opt.c`        |
|  0.1% |  2.0ms |       2 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | `zstd_opt.c`        |
|  0.1% |  2.0ms |       2 | `FIO_compressFilename_srcFile`                       | `fileio.c`          |
|  0.1% |  1.0ms |       1 | `AIO_IOPool_destroy`                                 | `fileio_asyncio.c`  |
|  0.1% |  1.0ms |       1 | `HIST_count_parallel_wksp`                           | `hist.c`            |
|  0.1% |  1.0ms |       1 | `AIO_ReadPool_executeReadJob`                        | `fileio_asyncio.c`  |
|  0.1% |  1.0ms |       1 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c`   |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 99.8% | 1.60s |   1,600 | `(anonymous)`                 | `<unknown>`       |
|  0.2% | 3.0ms |       3 | `__libc_start_main`           | `<unknown>`       |
|  0.1% | 2.0ms |       2 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |
|  0.1% | 2.0ms |       2 | `ZSTD_compressStream2`        | `<unknown>`       |
|  0.1% | 1.0ms |       1 | `_IO_fread`                   | `<unknown>`       |

##### `POOL_thread` (`pool.c`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 1.60s |   1,600 | `(anonymous)` | `<unknown>` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|      % |  Time | Samples | Caller        | Location |
| -----: | ----: | ------: | ------------- | -------- |
| 100.0% | 1.59s |   1,599 | `POOL_thread` | `pool.c` |

##### `ZSTD_compress_frameChunk` (`zstd_compress.c`)

|     % |    Time | Samples | Caller                         | Location    |
| ----: | ------: | ------: | ------------------------------ | ----------- |
| 83.7% |   1.33s |   1,336 | `ZSTD_compressContinue_public` | `<unknown>` |
| 16.3% | 261.0ms |     261 | `ZSTD_compressEnd_public`      | `<unknown>` |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                     | Location          |
| -----: | ----: | ------: | -------------------------- | ----------------- |
| 100.0% | 1.58s |   1,587 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 99.0% |  1.55s |   1,553 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  1.0% | 15.0ms |      15 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_compressContinue_public` (`<unknown>`)

|      % |  Time | Samples | Caller                  | Location            |
| -----: | ----: | ------: | ----------------------- | ------------------- |
| 100.0% | 1.33s |   1,336 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                    | Location     |
| -----: | ----: | ------: | ------------------------- | ------------ |
| 100.0% | 1.26s |   1,264 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_compressEnd_public` (`<unknown>`)

|      % |    Time | Samples | Caller                  | Location            |
| -----: | ------: | ------: | ----------------------- | ------------------- |
| 100.0% | 261.0ms |     261 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTD_compressBlock_btultra2` (`<unknown>`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 16.0ms |      16 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 14.0ms |      14 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                         | Location          |
| -----: | ----: | ------: | ------------------------------ | ----------------- |
| 100.0% | 6.0ms |       6 | `ZSTD_deriveBlockSplitsHelper` | `zstd_compress.c` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                         | Location          |
| -----: | ----: | ------: | ------------------------------ | ----------------- |
| 100.0% | 6.0ms |       6 | `ZSTD_compress_frameChunk`     | `zstd_compress.c` |
|  16.7% | 1.0ms |       1 | `ZSTD_deriveBlockSplitsHelper` | `zstd_compress.c` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                     | Location          |
| -----: | ----: | ------: | -------------------------- | ----------------- |
| 100.0% | 4.0ms |       4 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 3.0ms |       3 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `FIO_compressFilename` (`<unknown>`)

|      % |  Time | Samples | Caller | Location    |
| -----: | ----: | ------: | ------ | ----------- |
| 100.0% | 3.0ms |       3 | `main` | `<unknown>` |

##### `main` (`<unknown>`)

|      % |  Time | Samples | Caller        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 3.0ms |       3 | `(anonymous)` | `<unknown>` |

##### `__libc_start_main` (`<unknown>`)

|      % |  Time | Samples | Caller   | Location    |
| -----: | ----: | ------: | -------- | ----------- |
| 100.0% | 3.0ms |       3 | `_start` | `<unknown>` |

##### `ZSTD_buildBlockEntropyStats` (`<unknown>`)

|      % |  Time | Samples | Caller                                               | Location          |
| -----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 3.0ms |       3 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_compressBegin_internal` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                                 | Location    |
| -----: | ----: | ------: | -------------------------------------- | ----------- |
| 100.0% | 2.0ms |       2 | `ZSTD_compressBegin_advanced_internal` | `<unknown>` |

##### `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                          | Location     |
| -----: | ----: | ------: | ------------------------------- | ------------ |
| 100.0% | 2.0ms |       2 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 50.0% | 1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |
| 50.0% | 1.0ms |       1 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|      % |  Time | Samples | Caller                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 2.0ms |       2 | `FIO_compressFilename` | `<unknown>` |

##### `AIO_IOPool_destroy` (`fileio_asyncio.c`)

|      % |  Time | Samples | Caller               | Location    |
| -----: | ----: | ------: | -------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `AIO_WritePool_free` | `<unknown>` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|      % |  Time | Samples | Caller                                               | Location          |
| -----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`)

|      % |  Time | Samples | Caller        | Location |
| -----: | ----: | ------: | ------------- | -------- |
| 100.0% | 1.0ms |       1 | `POOL_thread` | `pool.c` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                        | Location    |
| -----: | ----: | ------: | ----------------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildBlockEntropyStats` | `<unknown>` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location    |
| ----: | ----: | ------: | ------------- | ----------- |
| 99.8% | 1.60s |   1,600 | `POOL_thread` | `pool.c`    |
| 99.8% | 1.60s |   1,600 | `(anonymous)` | `<unknown>` |
|  0.2% | 3.0ms |       3 | `main`        | `<unknown>` |
|  0.1% | 1.0ms |       1 | `__read`      | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|     % |  Time | Samples | Callee                        | Location            |
| ----: | ----: | ------: | ----------------------------- | ------------------- |
| 99.9% | 1.59s |   1,599 | `ZSTDMT_compressionJob`       | `zstdmt_compress.c` |
|  0.1% | 1.0ms |       1 | `AIO_ReadPool_executeReadJob` | `fileio_asyncio.c`  |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|     % |    Time | Samples | Callee                                 | Location    |
| ----: | ------: | ------: | -------------------------------------- | ----------- |
| 83.6% |   1.33s |   1,336 | `ZSTD_compressContinue_public`         | `<unknown>` |
| 16.3% | 261.0ms |     261 | `ZSTD_compressEnd_public`              | `<unknown>` |
|  0.1% |   2.0ms |       2 | `ZSTD_compressBegin_advanced_internal` | `<unknown>` |

##### `ZSTD_compress_frameChunk` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                              | Location          |
| ----: | ----: | ------: | ----------------------------------- | ----------------- |
| 99.4% | 1.58s |   1,587 | `ZSTD_buildSeqStore`                | `zstd_compress.c` |
|  0.4% | 6.0ms |       6 | `ZSTD_deriveBlockSplitsHelper`      | `zstd_compress.c` |
|  0.3% | 4.0ms |       4 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                                   | Location     |
| ----: | -----: | ------: | ---------------------------------------- | ------------ |
| 97.9% |  1.55s |   1,553 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c` |
|  1.0% | 16.0ms |      16 | `ZSTD_compressBlock_btultra2`            | `<unknown>`  |
|  0.9% | 14.0ms |      14 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c` |
|  0.2% |  3.0ms |       3 | `ZSTD_updateStats`                       | `zstd_opt.c` |
|  0.1% |  1.0ms |       1 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |  Time | Samples | Callee                          | Location     |
| ----: | ----: | ------: | ------------------------------- | ------------ |
| 80.6% | 1.26s |   1,264 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_compressContinue_public` (`<unknown>`)

|      % |  Time | Samples | Callee                     | Location          |
| -----: | ----: | ------: | -------------------------- | ----------------- |
| 100.0% | 1.33s |   1,336 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|    % |  Time | Samples | Callee                       | Location     |
| ---: | ----: | ------: | ---------------------------- | ------------ |
| 0.2% | 2.0ms |       2 | `ZSTD_insertBt1.constprop.3` | `zstd_opt.c` |

##### `ZSTD_compressEnd_public` (`<unknown>`)

|      % |    Time | Samples | Callee                     | Location          |
| -----: | ------: | ------: | -------------------------- | ----------------- |
| 100.0% | 261.0ms |     261 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_compressBlock_btultra2` (`<unknown>`)

|     % |   Time | Samples | Callee                                   | Location     |
| ----: | -----: | ------: | ---------------------------------------- | ------------ |
| 93.8% | 15.0ms |      15 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c` |
|  6.3% |  1.0ms |       1 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                        | Location    |
| ----: | ----: | ------: | ----------------------------- | ----------- |
| 50.0% | 3.0ms |       3 | `ZSTD_buildBlockEntropyStats` | `<unknown>` |
| 16.7% | 1.0ms |       1 | `HIST_count_parallel_wksp`    | `hist.c`    |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|      % |  Time | Samples | Callee                                               | Location          |
| -----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 6.0ms |       6 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |
|  16.7% | 1.0ms |       1 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                 | Location    |
| ----: | ----: | ------: | ---------------------- | ----------- |
| 50.0% | 2.0ms |       2 | `ZSTD_encodeSequences` | `<unknown>` |
| 50.0% | 2.0ms |       2 | `ZSTD_seqToCodes`      | `<unknown>` |

##### `FIO_compressFilename` (`<unknown>`)

|     % |  Time | Samples | Callee                         | Location    |
| ----: | ----: | ------: | ------------------------------ | ----------- |
| 66.7% | 2.0ms |       2 | `FIO_compressFilename_srcFile` | `fileio.c`  |
| 33.3% | 1.0ms |       1 | `AIO_WritePool_free`           | `<unknown>` |

##### `main` (`<unknown>`)

|      % |  Time | Samples | Callee                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 3.0ms |       3 | `FIO_compressFilename` | `<unknown>` |

##### `__libc_start_main` (`<unknown>`)

|      % |  Time | Samples | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 3.0ms |       3 | `(anonymous)` | `<unknown>` |

##### `_start` (`<unknown>`)

|      % |  Time | Samples | Callee              | Location    |
| -----: | ----: | ------: | ------------------- | ----------- |
| 100.0% | 3.0ms |       3 | `__libc_start_main` | `<unknown>` |

##### `ZSTD_buildBlockEntropyStats` (`<unknown>`)

|     % |  Time | Samples | Callee                          | Location          |
| ----: | ----: | ------: | ------------------------------- | ----------------- |
| 66.7% | 2.0ms |       2 | `HUF_optimalTableLog`           | `<unknown>`       |
| 33.3% | 1.0ms |       1 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |

##### `ZSTD_compressBegin_internal` (`zstd_compress.c`)

|      % |  Time | Samples | Callee        | Location    |
| -----: | ----: | ------: | ------------- | ----------- |
| 100.0% | 2.0ms |       2 | `(anonymous)` | `<unknown>` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|      % |  Time | Samples | Callee                 | Location    |
| -----: | ----: | ------: | ---------------------- | ----------- |
| 100.0% | 2.0ms |       2 | `ZSTD_compressStream2` | `<unknown>` |

##### `AIO_IOPool_destroy` (`fileio_asyncio.c`)

|      % |  Time | Samples | Callee   | Location    |
| -----: | ----: | ------: | -------- | ----------- |
| 100.0% | 1.0ms |       1 | `munmap` | `<unknown>` |

##### `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`)

|      % |  Time | Samples | Callee      | Location    |
| -----: | ----: | ------: | ----------- | ----------- |
| 100.0% | 1.0ms |       1 | `_IO_fread` | `<unknown>` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

|      % |  Time | Samples | Callee             | Location    |
| -----: | ----: | ------: | ------------------ | ----------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildCTable` | `<unknown>` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                          |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 65.1% |   1.04s |   1,043 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                      |
| 15.8% | 254.0ms |     254 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                        |
| 13.3% | 213.0ms |     213 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                           |
|  2.6% |  41.0ms |      41 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                             |
|  0.6% |   9.0ms |       9 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                        |
|  0.6% |   9.0ms |       9 | `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                         |
|  0.4% |   6.0ms |       6 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                      |
|  0.3% |   5.0ms |       5 | `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                              |
|  0.2% |   3.0ms |       3 | `ZSTD_updateStats` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                               |
|  0.1% |   2.0ms |       2 | `(anonymous)` ← `ZSTD_compressBegin_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                               |
|  0.1% |   2.0ms |       2 | `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                       |
|  0.1% |   2.0ms |       2 | `ZSTD_encodeSequences` ← `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                           |
|  0.1% |   2.0ms |       2 | `HUF_buildCTable_wksp` ← `HUF_optimalTableLog` ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)` |
|  0.1% |   2.0ms |       2 | `(anonymous)` ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                             |
|  0.1% |   1.0ms |       1 | `munmap` ← `AIO_IOPool_destroy` (`fileio_asyncio.c`) ← `AIO_WritePool_free` ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                      |
|  0.1% |   1.0ms |       1 | `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                         |
|  0.1% |   1.0ms |       1 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                          |
|  0.1% |   1.0ms |       1 | `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                         |
|  0.1% |   1.0ms |       1 | `__read` ← `(anonymous)` ← `_IO_fread` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                                                                              |
|  0.1% |   1.0ms |       1 | `ZSTD_seqToCodes` ← `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                     |

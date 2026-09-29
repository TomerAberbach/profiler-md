# CPU profile diff

Took 1.69s → 1.17s (-513.00ms, -30.3%) over 1,691 samples → 1,178 samples (1.0ms per sample).

| Category | Change |     Delta |             % |            Time |       Samples |
| -------- | -----: | --------: | ------------: | --------------: | ------------: |
| Ours     | -30.2% | -506.00ms | 99.0% → 99.2% |   1.67s → 1.16s | 1,674 → 1,168 |
| Native   | -41.2% |   -7.00ms |   1.0% → 0.8% | 17.0ms → 10.0ms |       17 → 10 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |   Delta |             % |              Time |   Samples | Function                                             | Location                               |
| ------: | ------: | ------------: | ----------------: | --------: | ---------------------------------------------------- | -------------------------------------- |
|   +1.4% | +4.00ms | 16.7% → 24.4% | 283.0ms → 287.0ms | 283 → 287 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`                           |
| +100.0% | +2.00ms |   0.1% → 0.3% |     2.0ms → 4.0ms |     2 → 4 | `ZSTD_updateStats`                                   | `zstd_opt.c`                           |
|     new | +1.00ms |   0.0% → 0.1% |       0ms → 1.0ms |     0 → 1 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`                      |
|  +33.3% | +1.00ms |   0.2% → 0.3% |     3.0ms → 4.0ms |     3 → 4 | `ZSTD_insertBt1.constprop.3`                         | `zstd_opt.c`                           |
|     new | +1.00ms |   0.0% → 0.1% |       0ms → 1.0ms |     0 → 1 | `0x9e640`                                            | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms |   0.0% → 0.1% |       0ms → 1.0ms |     0 → 1 | `0xe29bc`                                            | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms |   0.0% → 0.1% |       0ms → 1.0ms |     0 → 1 | `ZSTD_recordFingerprint_1`                           | `zstd_preSplit.c`                      |
|     new | +1.00ms |   0.0% → 0.1% |       0ms → 1.0ms |     0 → 1 | `ZSTD_splitBlock`                                    | `<unknown>`                            |
|     new | +1.00ms |   0.0% → 0.1% |       0ms → 1.0ms |     0 → 1 | `0xddbcc`                                            | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### Ours

|  Change |   Delta |             % |              Time |   Samples | Function                                             | Location          |
| ------: | ------: | ------------: | ----------------: | --------: | ---------------------------------------------------- | ----------------- |
|   +1.4% | +4.00ms | 16.7% → 24.4% | 283.0ms → 287.0ms | 283 → 287 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`      |
| +100.0% | +2.00ms |   0.1% → 0.3% |     2.0ms → 4.0ms |     2 → 4 | `ZSTD_updateStats`                                   | `zstd_opt.c`      |
|     new | +1.00ms |   0.0% → 0.1% |       0ms → 1.0ms |     0 → 1 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |
|  +33.3% | +1.00ms |   0.2% → 0.3% |     3.0ms → 4.0ms |     3 → 4 | `ZSTD_insertBt1.constprop.3`                         | `zstd_opt.c`      |
|     new | +1.00ms |   0.0% → 0.1% |       0ms → 1.0ms |     0 → 1 | `ZSTD_recordFingerprint_1`                           | `zstd_preSplit.c` |

##### Native

| Change |   Delta |           % |        Time | Samples | Function          | Location                               |
| -----: | ------: | ----------: | ----------: | ------: | ----------------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 0.1% | 0ms → 1.0ms |   0 → 1 | `0x9e640`         | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +1.00ms | 0.0% → 0.1% | 0ms → 1.0ms |   0 → 1 | `0xe29bc`         | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +1.00ms | 0.0% → 0.1% | 0ms → 1.0ms |   0 → 1 | `ZSTD_splitBlock` | `<unknown>`                            |
|    new | +1.00ms | 0.0% → 0.1% | 0ms → 1.0ms |   0 → 1 | `0xddbcc`         | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |     Delta |             % |            Time |     Samples | Function                                 | Location                               |
| ------: | --------: | ------------: | --------------: | ----------: | ---------------------------------------- | -------------------------------------- |
|  -37.0% | -501.00ms | 80.1% → 72.5% | 1.35s → 854.0ms | 1,355 → 854 | `ZSTD_btGetAllMatches_noDict_3`          | `zstd_opt.c`                           |
|  -58.8% |  -10.00ms |   1.0% → 0.6% |  17.0ms → 7.0ms |      17 → 7 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c`                           |
| removed |   -2.00ms |   0.1% → 0.0% |     2.0ms → 0ms |       2 → 0 | `ZSTD_XXH64_update`                      | `<unknown>`                            |
|  -40.0% |   -2.00ms |          0.3% |   5.0ms → 3.0ms |       5 → 3 | `HIST_count_parallel_wksp`               | `hist.c`                               |
|  -50.0% |   -2.00ms |          0.2% |   4.0ms → 2.0ms |       4 → 2 | `ZSTD_encodeSequences`                   | `<unknown>`                            |
| removed |   -1.00ms |   0.1% → 0.0% |     1.0ms → 0ms |       1 → 0 | `ZSTD_compressSeqStore_singleBlock`      | `zstd_compress.c`                      |
| removed |   -1.00ms |   0.1% → 0.0% |     1.0ms → 0ms |       1 → 0 | `0x9e654`                                | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -50.0% |   -1.00ms |          0.1% |   2.0ms → 1.0ms |       2 → 1 | `ZSTD_seqToCodes`                        | `<unknown>`                            |
| removed |   -1.00ms |   0.1% → 0.0% |     1.0ms → 0ms |       1 → 0 | `0xe7e0c`                                | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -50.0% |   -1.00ms |          0.1% |   2.0ms → 1.0ms |       2 → 1 | `HUF_buildCTable_wksp`                   | `<unknown>`                            |
| removed |   -1.00ms |   0.1% → 0.0% |     1.0ms → 0ms |       1 → 0 | `HUF_writeCTable_wksp`                   | `<unknown>`                            |
| removed |   -1.00ms |   0.1% → 0.0% |     1.0ms → 0ms |       1 → 0 | `HIST_count_wksp`                        | `<unknown>`                            |
| removed |   -1.00ms |   0.1% → 0.0% |     1.0ms → 0ms |       1 → 0 | `0x7e838`                                | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -1.00ms |   0.1% → 0.0% |     1.0ms → 0ms |       1 → 0 | `FSE_compress_usingCTable_generic`       | `fse_compress.c`                       |

##### Ours

|  Change |     Delta |             % |            Time |     Samples | Function                                 | Location          |
| ------: | --------: | ------------: | --------------: | ----------: | ---------------------------------------- | ----------------- |
|  -37.0% | -501.00ms | 80.1% → 72.5% | 1.35s → 854.0ms | 1,355 → 854 | `ZSTD_btGetAllMatches_noDict_3`          | `zstd_opt.c`      |
|  -58.8% |  -10.00ms |   1.0% → 0.6% |  17.0ms → 7.0ms |      17 → 7 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c`      |
|  -40.0% |   -2.00ms |          0.3% |   5.0ms → 3.0ms |       5 → 3 | `HIST_count_parallel_wksp`               | `hist.c`          |
| removed |   -1.00ms |   0.1% → 0.0% |     1.0ms → 0ms |       1 → 0 | `ZSTD_compressSeqStore_singleBlock`      | `zstd_compress.c` |
| removed |   -1.00ms |   0.1% → 0.0% |     1.0ms → 0ms |       1 → 0 | `FSE_compress_usingCTable_generic`       | `fse_compress.c`  |

##### Native

|  Change |   Delta |           % |          Time | Samples | Function               | Location                               |
| ------: | ------: | ----------: | ------------: | ------: | ---------------------- | -------------------------------------- |
| removed | -2.00ms | 0.1% → 0.0% |   2.0ms → 0ms |   2 → 0 | `ZSTD_XXH64_update`    | `<unknown>`                            |
|  -50.0% | -2.00ms |        0.2% | 4.0ms → 2.0ms |   4 → 2 | `ZSTD_encodeSequences` | `<unknown>`                            |
| removed | -1.00ms | 0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x9e654`              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -50.0% | -1.00ms |        0.1% | 2.0ms → 1.0ms |   2 → 1 | `ZSTD_seqToCodes`      | `<unknown>`                            |
| removed | -1.00ms | 0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0xe7e0c`              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -50.0% | -1.00ms |        0.1% | 2.0ms → 1.0ms |   2 → 1 | `HUF_buildCTable_wksp` | `<unknown>`                            |
| removed | -1.00ms | 0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `HUF_writeCTable_wksp` | `<unknown>`                            |
| removed | -1.00ms | 0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `HIST_count_wksp`      | `<unknown>`                            |
| removed | -1.00ms | 0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x7e838`              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |   Delta |           % |          Time | Samples | Function                      | Location                               |
| ------: | ------: | ----------: | ------------: | ------: | ----------------------------- | -------------------------------------- |
| +100.0% | +2.00ms | 0.1% → 0.3% | 2.0ms → 4.0ms |   2 → 4 | `ZSTD_updateStats`            | `zstd_opt.c`                           |
|     new | +2.00ms | 0.0% → 0.2% |   0ms → 2.0ms |   0 → 2 | `ZSTD_splitBlock`             | `<unknown>`                            |
|  +33.3% | +1.00ms | 0.2% → 0.3% | 3.0ms → 4.0ms |   3 → 4 | `ZSTD_insertBt1.constprop.3`  | `zstd_opt.c`                           |
|     new | +1.00ms | 0.0% → 0.1% |   0ms → 1.0ms |   0 → 1 | `0x9e640`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → 0.1% |   0ms → 1.0ms |   0 → 1 | `0xe29bc`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → 0.1% |   0ms → 1.0ms |   0 → 1 | `0x6d3e3`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → 0.1% |   0ms → 1.0ms |   0 → 1 | `ZSTD_recordFingerprint_1`    | `zstd_preSplit.c`                      |
|     new | +1.00ms | 0.0% → 0.1% |   0ms → 1.0ms |   0 → 1 | `0xddbcc`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → 0.1% |   0ms → 1.0ms |   0 → 1 | `0x79b13`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → 0.1% |   0ms → 1.0ms |   0 → 1 | `0x6e1b7`                     | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → 0.1% |   0ms → 1.0ms |   0 → 1 | `AIO_ReadPool_executeReadJob` | `fileio_asyncio.c`                     |

##### Ours

|  Change |   Delta |           % |          Time | Samples | Function                      | Location           |
| ------: | ------: | ----------: | ------------: | ------: | ----------------------------- | ------------------ |
| +100.0% | +2.00ms | 0.1% → 0.3% | 2.0ms → 4.0ms |   2 → 4 | `ZSTD_updateStats`            | `zstd_opt.c`       |
|  +33.3% | +1.00ms | 0.2% → 0.3% | 3.0ms → 4.0ms |   3 → 4 | `ZSTD_insertBt1.constprop.3`  | `zstd_opt.c`       |
|     new | +1.00ms | 0.0% → 0.1% |   0ms → 1.0ms |   0 → 1 | `ZSTD_recordFingerprint_1`    | `zstd_preSplit.c`  |
|     new | +1.00ms | 0.0% → 0.1% |   0ms → 1.0ms |   0 → 1 | `AIO_ReadPool_executeReadJob` | `fileio_asyncio.c` |

##### Native

| Change |   Delta |           % |        Time | Samples | Function          | Location                               |
| -----: | ------: | ----------: | ----------: | ------: | ----------------- | -------------------------------------- |
|    new | +2.00ms | 0.0% → 0.2% | 0ms → 2.0ms |   0 → 2 | `ZSTD_splitBlock` | `<unknown>`                            |
|    new | +1.00ms | 0.0% → 0.1% | 0ms → 1.0ms |   0 → 1 | `0x9e640`         | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +1.00ms | 0.0% → 0.1% | 0ms → 1.0ms |   0 → 1 | `0xe29bc`         | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +1.00ms | 0.0% → 0.1% | 0ms → 1.0ms |   0 → 1 | `0x6d3e3`         | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +1.00ms | 0.0% → 0.1% | 0ms → 1.0ms |   0 → 1 | `0xddbcc`         | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +1.00ms | 0.0% → 0.1% | 0ms → 1.0ms |   0 → 1 | `0x79b13`         | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +1.00ms | 0.0% → 0.1% | 0ms → 1.0ms |   0 → 1 | `0x6e1b7`         | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |     Delta |             % |              Time |       Samples | Function                                             | Location                               |
| ------: | --------: | ------------: | ----------------: | ------------: | ---------------------------------------------------- | -------------------------------------- |
|  -30.4% | -513.00ms | 99.8% → 99.7% |     1.68s → 1.17s | 1,688 → 1,175 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c`                    |
|  -30.4% | -512.00ms |         99.6% |     1.68s → 1.17s | 1,685 → 1,173 | `ZSTD_compress_frameChunk`                           | `zstd_compress.c`                      |
|  -30.3% | -512.00ms |         99.8% |     1.68s → 1.17s | 1,688 → 1,176 | `POOL_thread`                                        | `pool.c`                               |
|  -30.3% | -512.00ms |         99.8% |     1.68s → 1.17s | 1,688 → 1,176 | `0x8202f`                                            | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -30.3% | -512.00ms |         99.8% |     1.68s → 1.17s | 1,688 → 1,176 | `0xebf5b`                                            | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -30.3% | -504.00ms | 98.5% → 98.6% |     1.66s → 1.16s | 1,666 → 1,162 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`                      |
|  -36.8% | -500.00ms | 80.3% → 72.8% |   1.35s → 858.0ms |   1,358 → 858 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`                           |
|  -30.2% | -495.00ms | 97.0% → 97.2% |     1.64s → 1.14s | 1,640 → 1,145 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`                           |
|  -32.6% | -458.00ms | 83.1% → 80.5% |   1.40s → 948.0ms |   1,406 → 948 | `ZSTD_compressContinue_public`                       | `<unknown>`                            |
|  -19.6% |  -55.00ms | 16.6% → 19.1% | 280.0ms → 225.0ms |     280 → 225 | `ZSTD_compressEnd_public`                            | `<unknown>`                            |
|  -58.8% |  -10.00ms |   1.0% → 0.6% |    17.0ms → 7.0ms |        17 → 7 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | `zstd_opt.c`                           |
| removed |   -7.00ms |   0.4% → 0.0% |       7.0ms → 0ms |         7 → 0 | `ZSTD_buildBlockEntropyStats`                        | `<unknown>`                            |
|  -55.6% |   -5.00ms |   0.5% → 0.3% |     9.0ms → 4.0ms |         9 → 4 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`                      |
|  -55.6% |   -5.00ms |   0.5% → 0.3% |     9.0ms → 4.0ms |         9 → 4 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`                      |
|  -50.0% |   -4.00ms |   0.5% → 0.3% |     8.0ms → 4.0ms |         8 → 4 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`                      |
| removed |   -3.00ms |   0.2% → 0.0% |       3.0ms → 0ms |         3 → 0 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c`                      |
|  -75.0% |   -3.00ms |   0.2% → 0.1% |     4.0ms → 1.0ms |         4 → 1 | `HUF_optimalTableLog`                                | `<unknown>`                            |
| removed |   -2.00ms |   0.1% → 0.0% |       2.0ms → 0ms |         2 → 0 | `ZSTD_XXH64_update`                                  | `<unknown>`                            |
|  -40.0% |   -2.00ms |          0.3% |     5.0ms → 3.0ms |         5 → 3 | `HIST_count_parallel_wksp`                           | `hist.c`                               |
|  -66.7% |   -2.00ms |   0.2% → 0.1% |     3.0ms → 1.0ms |         3 → 1 | `HUF_compress_internal`                              | `huf_compress.c`                       |

##### Ours

|  Change |     Delta |             % |            Time |       Samples | Function                                             | Location            |
| ------: | --------: | ------------: | --------------: | ------------: | ---------------------------------------------------- | ------------------- |
|  -30.4% | -513.00ms | 99.8% → 99.7% |   1.68s → 1.17s | 1,688 → 1,175 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c` |
|  -30.4% | -512.00ms |         99.6% |   1.68s → 1.17s | 1,685 → 1,173 | `ZSTD_compress_frameChunk`                           | `zstd_compress.c`   |
|  -30.3% | -512.00ms |         99.8% |   1.68s → 1.17s | 1,688 → 1,176 | `POOL_thread`                                        | `pool.c`            |
|  -30.3% | -504.00ms | 98.5% → 98.6% |   1.66s → 1.16s | 1,666 → 1,162 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`   |
|  -36.8% | -500.00ms | 80.3% → 72.8% | 1.35s → 858.0ms |   1,358 → 858 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
|  -30.2% | -495.00ms | 97.0% → 97.2% |   1.64s → 1.14s | 1,640 → 1,145 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
|  -58.8% |  -10.00ms |   1.0% → 0.6% |  17.0ms → 7.0ms |        17 → 7 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | `zstd_opt.c`        |
|  -55.6% |   -5.00ms |   0.5% → 0.3% |   9.0ms → 4.0ms |         9 → 4 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |
|  -55.6% |   -5.00ms |   0.5% → 0.3% |   9.0ms → 4.0ms |         9 → 4 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`   |
|  -50.0% |   -4.00ms |   0.5% → 0.3% |   8.0ms → 4.0ms |         8 → 4 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`   |
| removed |   -3.00ms |   0.2% → 0.0% |     3.0ms → 0ms |         3 → 0 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c`   |
|  -40.0% |   -2.00ms |          0.3% |   5.0ms → 3.0ms |         5 → 3 | `HIST_count_parallel_wksp`                           | `hist.c`            |
|  -66.7% |   -2.00ms |   0.2% → 0.1% |   3.0ms → 1.0ms |         3 → 1 | `HUF_compress_internal`                              | `huf_compress.c`    |
| removed |   -1.00ms |   0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `ZSTDMT_freeCCtxPool.part.0`                         | `zstdmt_compress.c` |
| removed |   -1.00ms |   0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `FSE_compress_usingCTable_generic`                   | `fse_compress.c`    |

##### Native

|  Change |     Delta |             % |              Time |       Samples | Function                       | Location                               |
| ------: | --------: | ------------: | ----------------: | ------------: | ------------------------------ | -------------------------------------- |
|  -30.3% | -512.00ms |         99.8% |     1.68s → 1.17s | 1,688 → 1,176 | `0x8202f`                      | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -30.3% | -512.00ms |         99.8% |     1.68s → 1.17s | 1,688 → 1,176 | `0xebf5b`                      | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -32.6% | -458.00ms | 83.1% → 80.5% |   1.40s → 948.0ms |   1,406 → 948 | `ZSTD_compressContinue_public` | `<unknown>`                            |
|  -19.6% |  -55.00ms | 16.6% → 19.1% | 280.0ms → 225.0ms |     280 → 225 | `ZSTD_compressEnd_public`      | `<unknown>`                            |
| removed |   -7.00ms |   0.4% → 0.0% |       7.0ms → 0ms |         7 → 0 | `ZSTD_buildBlockEntropyStats`  | `<unknown>`                            |
|  -75.0% |   -3.00ms |   0.2% → 0.1% |     4.0ms → 1.0ms |         4 → 1 | `HUF_optimalTableLog`          | `<unknown>`                            |
| removed |   -2.00ms |   0.1% → 0.0% |       2.0ms → 0ms |         2 → 0 | `ZSTD_XXH64_update`            | `<unknown>`                            |
|  -66.7% |   -2.00ms |   0.2% → 0.1% |     3.0ms → 1.0ms |         3 → 1 | `HUF_compress4X_repeat`        | `<unknown>`                            |
|  -66.7% |   -2.00ms |   0.2% → 0.1% |     3.0ms → 1.0ms |         3 → 1 | `ZSTD_compressLiterals`        | `<unknown>`                            |
| removed |   -2.00ms |   0.1% → 0.0% |       2.0ms → 0ms |         2 → 0 | `HUF_writeCTable_wksp`         | `<unknown>`                            |
|  -50.0% |   -2.00ms |          0.2% |     4.0ms → 2.0ms |         4 → 2 | `ZSTD_encodeSequences`         | `<unknown>`                            |
| removed |   -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `0x9e654`                      | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -50.0% |   -1.00ms |          0.1% |     2.0ms → 1.0ms |         2 → 1 | `ZSTD_seqToCodes`              | `<unknown>`                            |
| removed |   -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `0xe7e0c`                      | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `ZSTD_freeCCtx`                | `<unknown>`                            |
| removed |   -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `ZSTDMT_freeCCtx`              | `<unknown>`                            |
| removed |   -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `ZSTD_freeCStream`             | `<unknown>`                            |
|  -33.3% |   -1.00ms |          0.2% |     3.0ms → 2.0ms |         3 → 2 | `FIO_compressFilename`         | `<unknown>`                            |
|  -33.3% |   -1.00ms |          0.2% |     3.0ms → 2.0ms |         3 → 2 | `main`                         | `<unknown>`                            |
|  -33.3% |   -1.00ms |          0.2% |     3.0ms → 2.0ms |         3 → 2 | `0x27743`                      | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

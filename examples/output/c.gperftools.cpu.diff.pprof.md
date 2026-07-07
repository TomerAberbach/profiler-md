# CPU profile diff

Took 1.29s → 1.24s (-44.00ms, -3.4%) over 1,290 samples → 1,246 samples (1.0ms per sample).

| Category | Change |    Delta |             % |            Time |       Samples |
| -------- | -----: | -------: | ------------: | --------------: | ------------: |
| ours     |  -3.7% | -47.00ms | 99.1% → 98.9% |   1.27s → 1.23s | 1,279 → 1,232 |
| stdlib   | +27.3% |  +3.00ms |   0.9% → 1.1% | 11.0ms → 14.0ms |       11 → 14 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |   Delta |           % |           Time | Samples | Function                                 | Location            |
| ------: | ------: | ----------: | -------------: | ------: | ---------------------------------------- | ------------------- |
| +133.3% | +4.00ms | 0.2% → 0.6% |  3.0ms → 7.0ms |   3 → 7 | `ZSTD_seqToCodes`                        | `<unknown>`         |
|  +42.9% | +3.00ms | 0.5% → 0.8% | 7.0ms → 10.0ms |  7 → 10 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c`        |
| +100.0% | +3.00ms | 0.2% → 0.5% |  3.0ms → 6.0ms |   3 → 6 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c`        |
| +150.0% | +3.00ms | 0.2% → 0.4% |  2.0ms → 5.0ms |   2 → 5 | `ZSTD_insertBt1.constprop.3`             | `zstd_opt.c`        |
|     new | +1.00ms | 0.0% → 0.1% |    0ms → 1.0ms |   0 → 1 | `ZSTDMT_compressionJob`                  | `zstdmt_compress.c` |
| +100.0% | +1.00ms | 0.1% → 0.2% |  1.0ms → 2.0ms |   1 → 2 | `ZSTD_encodeSequences`                   | `<unknown>`         |
| +100.0% | +1.00ms | 0.1% → 0.2% |  1.0ms → 2.0ms |   1 → 2 | `ZSTD_compressBegin_internal`            | `zstd_compress.c`   |
|     new | +1.00ms | 0.0% → 0.1% |    0ms → 1.0ms |   0 → 1 | `FSE_compress_usingCTable_generic`       | `fse_compress.c`    |
|     new | +1.00ms | 0.0% → 0.1% |    0ms → 1.0ms |   0 → 1 | `FSE_normalizeCount`                     | `<unknown>`         |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |             % |              Time |   Samples | Function                                             | Location            |
| ------: | -------: | ------------: | ----------------: | --------: | ---------------------------------------------------- | ------------------- |
|   -9.8% | -30.00ms | 23.7% → 22.2% | 306.0ms → 276.0ms | 306 → 276 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
|   -2.3% | -22.00ms | 73.6% → 74.4% | 949.0ms → 927.0ms | 949 → 927 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
|  -40.0% |  -2.00ms |   0.4% → 0.2% |     5.0ms → 3.0ms |     5 → 3 | `ZSTD_updateStats`                                   | `zstd_opt.c`        |
| removed |  -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `ZSTDMT_initCStream_internal`                        | `<unknown>`         |
| removed |  -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `ZSTD_deriveSeqStoreChunk`                           | `zstd_compress.c`   |
| removed |  -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |
| removed |  -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `ZSTDMT_getBuffer`                                   | `zstdmt_compress.c` |
| removed |  -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `HIST_countFast_wksp`                                | `<unknown>`         |
|  -50.0% |  -1.00ms |   0.2% → 0.1% |     2.0ms → 1.0ms |     2 → 1 | `HIST_count_parallel_wksp`                           | `hist.c`            |
| removed |  -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `ZSTD_freeCCtx`                                      | `<unknown>`         |
| removed |  -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `HUF_optimalTableLog`                                | `<unknown>`         |
| removed |  -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `ZSTD_setBasePrices`                                 | `zstd_opt.c`        |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |   Delta |           % |           Time | Samples | Function                                             | Location                    |
| ------: | ------: | ----------: | -------------: | ------: | ---------------------------------------------------- | --------------------------- |
| +200.0% | +6.00ms | 0.2% → 0.7% |  3.0ms → 9.0ms |   3 → 9 | `ZSTD_buildBlockEntropyStats`                        | `<unknown>`                 |
| +133.3% | +4.00ms | 0.2% → 0.6% |  3.0ms → 7.0ms |   3 → 7 | `ZSTD_seqToCodes`                                    | `<unknown>`                 |
|  +42.9% | +3.00ms | 0.5% → 0.8% | 7.0ms → 10.0ms |  7 → 10 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | `zstd_opt.c`                |
|  +50.0% | +3.00ms | 0.5% → 0.7% |  6.0ms → 9.0ms |   6 → 9 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`           |
|  +50.0% | +3.00ms | 0.5% → 0.7% |  6.0ms → 9.0ms |   6 → 9 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`           |
| +100.0% | +3.00ms | 0.2% → 0.5% |  3.0ms → 6.0ms |   3 → 6 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | `zstd_opt.c`                |
| +150.0% | +3.00ms | 0.2% → 0.4% |  2.0ms → 5.0ms |   2 → 5 | `ZSTD_insertBt1.constprop.3`                         | `zstd_opt.c`                |
| +100.0% | +1.00ms | 0.1% → 0.2% |  1.0ms → 2.0ms |   1 → 2 | `ZSTD_encodeSequences`                               | `<unknown>`                 |
| +100.0% | +1.00ms | 0.1% → 0.2% |  1.0ms → 2.0ms |   1 → 2 | `ZSTD_compressBegin_internal`                        | `zstd_compress.c`           |
| +100.0% | +1.00ms | 0.1% → 0.2% |  1.0ms → 2.0ms |   1 → 2 | `ZSTD_compressBegin_advanced_internal`               | `<unknown>`                 |
| +100.0% | +1.00ms | 0.1% → 0.2% |  1.0ms → 2.0ms |   1 → 2 | `HUF_optimalTableLog`                                | `<unknown>`                 |
|     new | +1.00ms | 0.0% → 0.1% |    0ms → 1.0ms |   0 → 1 | `FSE_compress_usingCTable_generic`                   | `fse_compress.c`            |
|     new | +1.00ms | 0.0% → 0.1% |    0ms → 1.0ms |   0 → 1 | `FSE_normalizeCount`                                 | `<unknown>`                 |
|     new | +1.00ms | 0.0% → 0.1% |    0ms → 1.0ms |   0 → 1 | `ZSTD_NCountCost`                                    | `zstd_compress_sequences.c` |
|     new | +1.00ms | 0.0% → 0.1% |    0ms → 1.0ms |   0 → 1 | `ZSTD_selectEncodingType`                            | `<unknown>`                 |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |             % |              Time |       Samples | Function                         | Location            |
| ------: | -------: | ------------: | ----------------: | ------------: | -------------------------------- | ------------------- |
|   -3.9% | -49.00ms | 97.4% → 97.0% |     1.25s → 1.20s | 1,257 → 1,208 | `ZSTD_compressBlock_opt2`        | `zstd_opt.c`        |
|   -3.6% | -46.00ms | 98.7% → 98.5% |     1.27s → 1.22s | 1,273 → 1,227 | `ZSTD_buildSeqStore`             | `zstd_compress.c`   |
|   -3.4% | -44.00ms |         99.5% |     1.28s → 1.24s | 1,284 → 1,240 | `ZSTD_compress_frameChunk`       | `zstd_compress.c`   |
|   -3.3% | -43.00ms | 99.7% → 99.8% |     1.28s → 1.24s | 1,286 → 1,243 | `ZSTDMT_compressionJob`          | `zstdmt_compress.c` |
|   -3.3% | -43.00ms | 99.7% → 99.8% |     1.28s → 1.24s | 1,286 → 1,243 | `POOL_thread`                    | `pool.c`            |
|   -3.1% | -34.00ms | 84.2% → 84.4% |     1.08s → 1.05s | 1,086 → 1,052 | `ZSTD_compressContinue_public`   | `<unknown>`         |
|   -2.0% | -19.00ms | 73.7% → 74.8% | 951.0ms → 932.0ms |     951 → 932 | `ZSTD_btGetAllMatches_noDict_3`  | `zstd_opt.c`        |
|   -5.1% | -10.00ms | 15.3% → 15.1% | 198.0ms → 188.0ms |     198 → 188 | `ZSTD_compressEnd_public`        | `<unknown>`         |
|  -11.1% |  -2.00ms |   1.4% → 1.3% |   18.0ms → 16.0ms |       18 → 16 | `ZSTD_compressBlock_btultra2`    | `<unknown>`         |
|  -40.0% |  -2.00ms |   0.4% → 0.2% |     5.0ms → 3.0ms |         5 → 3 | `ZSTD_updateStats`               | `zstd_opt.c`        |
| removed |  -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `ZSTDMT_initCStream_internal`    | `<unknown>`         |
| removed |  -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c`   |
| removed |  -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `ZSTD_deriveSeqStoreChunk`       | `zstd_compress.c`   |
| removed |  -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `ZSTDMT_getBuffer`               | `zstdmt_compress.c` |
| removed |  -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `HIST_countFast_wksp`            | `<unknown>`         |
|  -50.0% |  -1.00ms |   0.2% → 0.1% |     2.0ms → 1.0ms |         2 → 1 | `HIST_count_parallel_wksp`       | `hist.c`            |
| removed |  -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `ZSTD_freeCCtx`                  | `<unknown>`         |
| removed |  -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `ZSTDMT_freeCCtxPool.part.0`     | `zstdmt_compress.c` |
| removed |  -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `ZSTD_setBasePrices`             | `zstd_opt.c`        |
| removed |  -1.00ms |   0.1% → 0.0% |       1.0ms → 0ms |         1 → 0 | `ZSTD_buildCTable`               | `<unknown>`         |

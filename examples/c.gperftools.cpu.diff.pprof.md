# CPU profile diff

Took 1.29s → 1.24s (-44.0ms, -3.4%) over 185 samples → 173 samples (7.0ms → 7.2ms per sample).

| Category | Change |   Delta |             % |            Time |   Samples |
| -------- | -----: | ------: | ------------: | --------------: | --------: |
| ours     |  -3.7% | -47.0ms | 99.1% → 98.9% |   1.27s → 1.23s | 175 → 159 |
| stdlib   | +27.3% |  +3.0ms |   0.9% → 1.1% | 11.0ms → 14.0ms |   10 → 14 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |  Delta |           % |           Time | Samples | Function                                 | Location          |
| ------: | -----: | ----------: | -------------: | ------: | ---------------------------------------- | ----------------- |
| +133.3% | +4.0ms | 0.2% → 0.6% |  3.0ms → 7.0ms |   3 → 7 | `ZSTD_seqToCodes`                        | `<unknown>`       |
|  +42.9% | +3.0ms | 0.5% → 0.8% | 7.0ms → 10.0ms |       5 | `ZSTD_litLengthPrice.constprop.1.isra.0` | zstd_opt.c        |
| +100.0% | +3.0ms | 0.2% → 0.5% |  3.0ms → 6.0ms |   2 → 4 | `ZSTD_litLengthPrice.constprop.0.isra.0` | zstd_opt.c        |
| +150.0% | +3.0ms | 0.2% → 0.4% |  2.0ms → 5.0ms |   2 → 5 | `ZSTD_insertBt1.constprop.3`             | zstd_opt.c        |
|     new | +1.0ms | 0.0% → 0.1% |    0ms → 1.0ms |   0 → 1 | `ZSTDMT_compressionJob`                  | zstdmt_compress.c |
| +100.0% | +1.0ms | 0.1% → 0.2% |  1.0ms → 2.0ms |   1 → 2 | `ZSTD_encodeSequences`                   | `<unknown>`       |
| +100.0% | +1.0ms | 0.1% → 0.2% |  1.0ms → 2.0ms |   1 → 2 | `ZSTD_compressBegin_internal`            | zstd_compress.c   |
|     new | +1.0ms | 0.0% → 0.1% |    0ms → 1.0ms |   0 → 1 | `FSE_compress_usingCTable_generic`       | fse_compress.c    |
|     new | +1.0ms | 0.0% → 0.1% |    0ms → 1.0ms |   0 → 1 | `FSE_normalizeCount`                     | `<unknown>`       |

#### Progressions

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |   Delta |             % |              Time | Samples | Function                                             | Location          |
| ------: | ------: | ------------: | ----------------: | ------: | ---------------------------------------------------- | ----------------- |
|   -9.8% | -30.0ms | 23.7% → 22.2% | 306.0ms → 276.0ms | 74 → 60 | `ZSTD_compressBlock_opt2`                            | zstd_opt.c        |
|   -2.3% | -22.0ms | 73.6% → 74.4% | 949.0ms → 927.0ms | 81 → 77 | `ZSTD_btGetAllMatches_noDict_3`                      | zstd_opt.c        |
|  -40.0% |  -2.0ms |   0.4% → 0.2% |     5.0ms → 3.0ms |   4 → 3 | `ZSTD_updateStats`                                   | zstd_opt.c        |
| removed |  -1.0ms |   0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `ZSTDMT_initCStream_internal`                        | `<unknown>`       |
| removed |  -1.0ms |   0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `ZSTD_deriveSeqStoreChunk`                           | zstd_compress.c   |
| removed |  -1.0ms |   0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | zstd_compress.c   |
| removed |  -1.0ms |   0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `ZSTDMT_getBuffer`                                   | zstdmt_compress.c |
| removed |  -1.0ms |   0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `HIST_countFast_wksp`                                | `<unknown>`       |
|  -50.0% |  -1.0ms |   0.2% → 0.1% |     2.0ms → 1.0ms |   2 → 1 | `HIST_count_parallel_wksp`                           | hist.c            |
| removed |  -1.0ms |   0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `ZSTD_freeCCtx`                                      | `<unknown>`       |
| removed |  -1.0ms |   0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `HUF_optimalTableLog`                                | `<unknown>`       |
| removed |  -1.0ms |   0.1% → 0.0% |       1.0ms → 0ms |   1 → 0 | `ZSTD_setBasePrices`                                 | zstd_opt.c        |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |  Delta |           % |           Time | Samples | Function                                             | Location                  |
| ------: | -----: | ----------: | -------------: | ------: | ---------------------------------------------------- | ------------------------- |
| +133.3% | +4.0ms | 0.2% → 0.6% |  3.0ms → 7.0ms |   3 → 7 | `ZSTD_seqToCodes`                                    | `<unknown>`               |
|  +42.9% | +3.0ms | 0.5% → 0.8% | 7.0ms → 10.0ms |       5 | `ZSTD_litLengthPrice.constprop.1.isra.0`             | zstd_opt.c                |
|  +50.0% | +3.0ms | 0.5% → 0.7% |  6.0ms → 9.0ms |   6 → 9 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | zstd_compress.c           |
|  +50.0% | +3.0ms | 0.5% → 0.7% |  6.0ms → 9.0ms |   6 → 9 | `ZSTD_deriveBlockSplitsHelper`                       | zstd_compress.c           |
| +100.0% | +3.0ms | 0.2% → 0.5% |  3.0ms → 6.0ms |   2 → 4 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | zstd_opt.c                |
| +150.0% | +3.0ms | 0.2% → 0.4% |  2.0ms → 5.0ms |   2 → 5 | `ZSTD_insertBt1.constprop.3`                         | zstd_opt.c                |
| +100.0% | +1.0ms | 0.1% → 0.2% |  1.0ms → 2.0ms |   1 → 2 | `ZSTD_encodeSequences`                               | `<unknown>`               |
| +100.0% | +1.0ms | 0.1% → 0.2% |  1.0ms → 2.0ms |   1 → 2 | `ZSTD_compressBegin_internal`                        | zstd_compress.c           |
| +100.0% | +1.0ms | 0.1% → 0.2% |  1.0ms → 2.0ms |   1 → 2 | `HUF_optimalTableLog`                                | `<unknown>`               |
|     new | +1.0ms | 0.0% → 0.1% |    0ms → 1.0ms |   0 → 1 | `FSE_compress_usingCTable_generic`                   | fse_compress.c            |
|     new | +1.0ms | 0.0% → 0.1% |    0ms → 1.0ms |   0 → 1 | `FSE_normalizeCount`                                 | `<unknown>`               |
|     new | +1.0ms | 0.0% → 0.1% |    0ms → 1.0ms |   0 → 1 | `ZSTD_NCountCost`                                    | zstd_compress_sequences.c |

#### Progressions

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |   Delta |             % |              Time |   Samples | Function                         | Location          |
| ------: | ------: | ------------: | ----------------: | --------: | -------------------------------- | ----------------- |
|   -3.9% | -49.0ms | 97.4% → 97.0% |     1.25s → 1.20s | 157 → 142 | `ZSTD_compressBlock_opt2`        | zstd_opt.c        |
|   -3.6% | -46.0ms | 98.7% → 98.5% |     1.27s → 1.22s | 169 → 154 | `ZSTD_buildSeqStore`             | zstd_compress.c   |
|   -3.4% | -44.0ms |         99.5% |     1.28s → 1.24s | 180 → 167 | `ZSTD_compress_frameChunk`       | zstd_compress.c   |
|   -3.3% | -43.0ms | 99.7% → 99.8% |     1.28s → 1.24s | 182 → 170 | `ZSTDMT_compressionJob`          | zstdmt_compress.c |
|   -3.3% | -43.0ms | 99.7% → 99.8% |     1.28s → 1.24s | 182 → 170 | `POOL_thread`                    | pool.c            |
|   -2.0% | -19.0ms | 73.7% → 74.8% | 951.0ms → 932.0ms |   83 → 82 | `ZSTD_btGetAllMatches_noDict_3`  | zstd_opt.c        |
|  -40.0% |  -2.0ms |   0.4% → 0.2% |     5.0ms → 3.0ms |     4 → 3 | `ZSTD_updateStats`               | zstd_opt.c        |
| removed |  -1.0ms |   0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `ZSTDMT_initCStream_internal`    | `<unknown>`       |
| removed |  -1.0ms |   0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `ZSTD_CCtx_init_compressStream2` | zstd_compress.c   |
| removed |  -1.0ms |   0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `ZSTD_deriveSeqStoreChunk`       | zstd_compress.c   |
| removed |  -1.0ms |   0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `ZSTDMT_getBuffer`               | zstdmt_compress.c |
| removed |  -1.0ms |   0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `HIST_countFast_wksp`            | `<unknown>`       |
|  -50.0% |  -1.0ms |   0.2% → 0.1% |     2.0ms → 1.0ms |     2 → 1 | `HIST_count_parallel_wksp`       | hist.c            |
| removed |  -1.0ms |   0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `ZSTD_freeCCtx`                  | `<unknown>`       |
| removed |  -1.0ms |   0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `ZSTDMT_freeCCtxPool.part.0`     | zstdmt_compress.c |
| removed |  -1.0ms |   0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `ZSTD_setBasePrices`             | zstd_opt.c        |

# CPU profile diff

Took 1.82s → 2.95s (+1.129s, +62.0%) over 1,822 → 2,951 samples (1.0ms per sample).

| Category | Change |   Delta |             % |            Time |       Samples |
| -------- | -----: | ------: | ------------: | --------------: | ------------: |
| Ours     | +62.5% | +1.126s | 99.0% → 99.3% |   1.80s → 2.92s | 1,803 → 2,929 |
| Native   | +28.6% | +4.00ms |   0.8% → 0.6% | 14.0ms → 18.0ms |       14 → 18 |
| Unknown  | -20.0% | -1.00ms |   0.3% → 0.1% |   5.0ms → 4.0ms |         5 → 4 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |              Time |       Samples | Function                                 | Location          |
| ------: | --------: | ------------: | ----------------: | ------------: | ---------------------------------------- | ----------------- |
|  +65.7% | +977.00ms | 81.7% → 83.5% |     1.48s → 2.46s | 1,488 → 2,465 | `ZSTD_btGetAllMatches_noDict_3`          | `zstd_opt.c`      |
|  +44.8% | +130.00ms | 15.9% → 14.2% | 290.0ms → 420.0ms |     290 → 420 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c`      |
| +177.8% |  +16.00ms |   0.5% → 0.8% |    9.0ms → 25.0ms |        9 → 25 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c`      |
|     new |   +5.00ms |   0.0% → 0.2% |       0ms → 5.0ms |         0 → 5 | `ZSTD_updateStats`                       | `zstd_opt.c`      |
| +133.3% |   +4.00ms |          0.2% |     3.0ms → 7.0ms |         3 → 7 | `ZSTD_insertBt1.constprop.3`             | `zstd_opt.c`      |
| +200.0% |   +2.00ms |          0.1% |     1.0ms → 3.0ms |         1 → 3 | `munmap`                                 | `<unknown>`       |
|  +40.0% |   +2.00ms |   0.3% → 0.2% |     5.0ms → 7.0ms |         5 → 7 | `ZSTD_encodeSequences`                   | `<unknown>`       |
|     new |   +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |         0 → 2 | `ZSTD_recordFingerprint_1`               | `zstd_preSplit.c` |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `HUF_optimalTableLog`                    | `<unknown>`       |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `HUF_writeCTable_wksp`                   | `<unknown>`       |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `ZSTD_setBasePrices`                     | `zstd_opt.c`      |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `__read`                                 | `<unknown>`       |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `pthread_cond_broadcast`                 | `<unknown>`       |

##### Ours

|  Change |     Delta |             % |              Time |       Samples | Function                                 | Location          |
| ------: | --------: | ------------: | ----------------: | ------------: | ---------------------------------------- | ----------------- |
|  +65.7% | +977.00ms | 81.7% → 83.5% |     1.48s → 2.46s | 1,488 → 2,465 | `ZSTD_btGetAllMatches_noDict_3`          | `zstd_opt.c`      |
|  +44.8% | +130.00ms | 15.9% → 14.2% | 290.0ms → 420.0ms |     290 → 420 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c`      |
| +177.8% |  +16.00ms |   0.5% → 0.8% |    9.0ms → 25.0ms |        9 → 25 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c`      |
|     new |   +5.00ms |   0.0% → 0.2% |       0ms → 5.0ms |         0 → 5 | `ZSTD_updateStats`                       | `zstd_opt.c`      |
| +133.3% |   +4.00ms |          0.2% |     3.0ms → 7.0ms |         3 → 7 | `ZSTD_insertBt1.constprop.3`             | `zstd_opt.c`      |
|     new |   +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |         0 → 2 | `ZSTD_recordFingerprint_1`               | `zstd_preSplit.c` |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `ZSTD_setBasePrices`                     | `zstd_opt.c`      |

#### Improvements

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |            % |          Time | Samples | Function                                 | Location          |
| ------: | ------: | -----------: | ------------: | ------: | ---------------------------------------- | ----------------- |
| removed | -3.00ms |  0.2% → 0.0% |   3.0ms → 0ms |   3 → 0 | `HUF_buildCTable_wksp`                   | `<unknown>`       |
|  -75.0% | -3.00ms | 0.2% → <0.1% | 4.0ms → 1.0ms |   4 → 1 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c`      |
|  -50.0% | -3.00ms |  0.3% → 0.1% | 6.0ms → 3.0ms |   6 → 3 | `HIST_count_parallel_wksp`               | `hist.c`          |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `ZSTD_compress_frameChunk`               | `zstd_compress.c` |
|  -20.0% | -1.00ms |  0.3% → 0.1% | 5.0ms → 4.0ms |   5 → 4 | `(anonymous)`                            | `<unknown>`       |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `FSE_compress_usingCTable_generic`       | `fse_compress.c`  |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `FSE_writeNCount_generic`                | `fse_compress.c`  |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `ZSTD_XXH64_update`                      | `<unknown>`       |

##### Ours

|  Change |   Delta |            % |          Time | Samples | Function                                 | Location          |
| ------: | ------: | -----------: | ------------: | ------: | ---------------------------------------- | ----------------- |
|  -75.0% | -3.00ms | 0.2% → <0.1% | 4.0ms → 1.0ms |   4 → 1 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c`      |
|  -50.0% | -3.00ms |  0.3% → 0.1% | 6.0ms → 3.0ms |   6 → 3 | `HIST_count_parallel_wksp`               | `hist.c`          |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `ZSTD_compress_frameChunk`               | `zstd_compress.c` |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `FSE_compress_usingCTable_generic`       | `fse_compress.c`  |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `FSE_writeNCount_generic`                | `fse_compress.c`  |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

| Change |     Delta |      % |          Time |       Samples | Caller                    | Location     |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------- | ------------ |
| +65.7% | +977.00ms | 100.0% | 1.48s → 2.46s | 1,488 → 2,465 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

| Change |     Delta |             % |              Time |   Samples | Caller                        | Location          |
| -----: | --------: | ------------: | ----------------: | --------: | ----------------------------- | ----------------- |
| +46.1% | +131.00ms | 97.9% → 98.8% | 284.0ms → 415.0ms | 284 → 415 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
| -16.7% |   -1.00ms |   2.1% → 1.2% |     6.0ms → 5.0ms |     6 → 5 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`)

|  Change |    Delta |              % |           Time | Samples | Caller                        | Location          |
| ------: | -------: | -------------: | -------------: | ------: | ----------------------------- | ----------------- |
| +155.6% | +14.00ms | 100.0% → 92.0% | 9.0ms → 23.0ms |  9 → 23 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|     new |  +2.00ms |    0.0% → 8.0% |    0ms → 2.0ms |   0 → 2 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_updateStats` (`zstd_opt.c`)

| Change |   Delta |             % |        Time | Samples | Caller               | Location          |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- | ----------------- |
|    new | +5.00ms | 0.0% → 100.0% | 0ms → 5.0ms |   0 → 5 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`)

|  Change |   Delta |      % |          Time | Samples | Caller                          | Location     |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------- | ------------ |
| +133.3% | +4.00ms | 100.0% | 3.0ms → 7.0ms |   3 → 7 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `munmap` (`<unknown>`)

| Change |   Delta |            % |        Time | Samples | Caller            | Location    |
| -----: | ------: | -----------: | ----------: | ------: | ----------------- | ----------- |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `(anonymous)`     | `<unknown>` |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `ZSTDMT_freeCCtx` | `<unknown>` |

##### `ZSTD_encodeSequences` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                              | Location          |
| -----: | ------: | -----: | ------------: | ------: | ----------------------------------- | ----------------- |
| +40.0% | +2.00ms | 100.0% | 5.0ms → 7.0ms |   5 → 7 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`)

| Change |   Delta |             % |        Time | Samples | Caller            | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ----------------- | ----------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `ZSTD_splitBlock` | `<unknown>` |

##### `HUF_optimalTableLog` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                        | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `ZSTD_buildBlockEntropyStats` | `<unknown>` |

##### `HUF_writeCTable_wksp` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                | Location    |
| -----: | ------: | ------------: | ----------: | ------: | --------------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `HUF_optimalTableLog` | `<unknown>` |

##### `ZSTD_setBasePrices` (`zstd_opt.c`)

| Change |   Delta |             % |        Time | Samples | Caller               | Location          |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- | ----------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `__read` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)` | `<unknown>` |

##### `pthread_cond_broadcast` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller             | Location |
| -----: | ------: | ------------: | ----------: | ------: | ------------------ | -------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `POOL_free.part.0` | `pool.c` |

##### `HUF_buildCTable_wksp` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                | Location    |
| ------: | ------: | ------------: | ----------: | ------: | --------------------- | ----------- |
| removed | -3.00ms | 100.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `HUF_optimalTableLog` | `<unknown>` |

##### `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`)

| Change |   Delta |      % |          Time | Samples | Caller               | Location          |
| -----: | ------: | -----: | ------------: | ------: | -------------------- | ----------------- |
| -75.0% | -3.00ms | 100.0% | 4.0ms → 1.0ms |   4 → 1 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

| Change |   Delta |             % |          Time | Samples | Caller                                               | Location          |
| -----: | ------: | ------------: | ------------: | ------: | ---------------------------------------------------- | ----------------- |
| -66.7% | -2.00ms | 50.0% → 33.3% | 3.0ms → 1.0ms |   3 → 1 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |
| -33.3% | -1.00ms | 50.0% → 66.7% | 3.0ms → 2.0ms |   3 → 2 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c` |

##### `ZSTD_compress_frameChunk` (`zstd_compress.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                         | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------ | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_compressContinue_public` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

| Change |   Delta |             % |          Time | Samples | Caller                 | Location    |
| -----: | ------: | ------------: | ------------: | ------: | ---------------------- | ----------- |
| -33.3% | -1.00ms | 60.0% → 50.0% | 3.0ms → 2.0ms |   3 → 2 | `ZSTD_compressStream2` | `<unknown>` |

##### `FSE_compress_usingCTable_generic` (`fse_compress.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                 | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `HUF_writeCTable_wksp` | `<unknown>` |

##### `FSE_writeNCount_generic` (`fse_compress.c`)

|  Change |   Delta |             % |        Time | Samples | Caller            | Location                    |
| ------: | ------: | ------------: | ----------: | ------: | ----------------- | --------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_NCountCost` | `zstd_compress_sequences.c` |

##### `ZSTD_XXH64_update` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                     | Location          |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------- | ----------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |              Time |       Samples | Function                                 | Location            |
| ------: | --------: | ------------: | ----------------: | ------------: | ---------------------------------------- | ------------------- |
|  +62.9% |   +1.129s | 98.5% → 99.1% |     1.79s → 2.92s | 1,795 → 2,924 | `ZSTD_buildSeqStore`                     | `zstd_compress.c`   |
|  +62.0% |   +1.129s |        100.0% |     1.82s → 2.95s | 1,822 → 2,951 | `(anonymous)`                            | `<unknown>`         |
|  +62.0% |   +1.128s |         99.8% |     1.81s → 2.94s | 1,818 → 2,946 | `POOL_thread`                            | `pool.c`            |
|  +62.0% |   +1.127s |         99.8% |     1.81s → 2.94s | 1,818 → 2,945 | `ZSTDMT_compressionJob`                  | `zstdmt_compress.c` |
|  +62.0% |   +1.126s |         99.7% |     1.81s → 2.94s | 1,816 → 2,942 | `ZSTD_compress_frameChunk`               | `zstd_compress.c`   |
|  +62.3% |   +1.110s | 97.8% → 98.0% |     1.78s → 2.89s | 1,782 → 2,892 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c`        |
|  +69.0% |   +1.009s | 80.3% → 83.8% |     1.46s → 2.47s | 1,463 → 2,472 | `ZSTD_compressContinue_public`           | `<unknown>`         |
|  +65.8% | +981.00ms | 81.8% → 83.8% |     1.49s → 2.47s | 1,491 → 2,472 | `ZSTD_btGetAllMatches_noDict_3`          | `zstd_opt.c`        |
|  +33.1% | +117.00ms | 19.4% → 15.9% | 353.0ms → 470.0ms |     353 → 470 | `ZSTD_compressEnd_public`                | `<unknown>`         |
| +177.8% |  +16.00ms |   0.5% → 0.8% |    9.0ms → 25.0ms |        9 → 25 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c`        |
|  +23.8% |   +5.00ms |   1.2% → 0.9% |   21.0ms → 26.0ms |       21 → 26 | `ZSTD_compressBlock_btultra2`            | `<unknown>`         |
|     new |   +5.00ms |   0.0% → 0.2% |       0ms → 5.0ms |         0 → 5 | `ZSTD_updateStats`                       | `zstd_opt.c`        |
| +133.3% |   +4.00ms |          0.2% |     3.0ms → 7.0ms |         3 → 7 | `ZSTD_insertBt1.constprop.3`             | `zstd_opt.c`        |
|  +50.0% |   +3.00ms |          0.3% |     6.0ms → 9.0ms |         6 → 9 | `ZSTD_compressSeqStore_singleBlock`      | `zstd_compress.c`   |
| +200.0% |   +2.00ms |          0.1% |     1.0ms → 3.0ms |         1 → 3 | `munmap`                                 | `<unknown>`         |
| +200.0% |   +2.00ms |          0.1% |     1.0ms → 3.0ms |         1 → 3 | `ZSTDMT_freeCCtx`                        | `<unknown>`         |
| +200.0% |   +2.00ms |          0.1% |     1.0ms → 3.0ms |         1 → 3 | `ZSTD_freeCStream`                       | `<unknown>`         |
|  +40.0% |   +2.00ms |   0.3% → 0.2% |     5.0ms → 7.0ms |         5 → 7 | `ZSTD_encodeSequences`                   | `<unknown>`         |
|     new |   +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |         0 → 2 | `ZSTD_recordFingerprint_1`               | `zstd_preSplit.c`   |
|     new |   +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |         0 → 2 | `ZSTD_splitBlock`                        | `<unknown>`         |

##### Ours

|  Change |     Delta |             % |           Time |       Samples | Function                                 | Location            |
| ------: | --------: | ------------: | -------------: | ------------: | ---------------------------------------- | ------------------- |
|  +62.9% |   +1.129s | 98.5% → 99.1% |  1.79s → 2.92s | 1,795 → 2,924 | `ZSTD_buildSeqStore`                     | `zstd_compress.c`   |
|  +62.0% |   +1.128s |         99.8% |  1.81s → 2.94s | 1,818 → 2,946 | `POOL_thread`                            | `pool.c`            |
|  +62.0% |   +1.127s |         99.8% |  1.81s → 2.94s | 1,818 → 2,945 | `ZSTDMT_compressionJob`                  | `zstdmt_compress.c` |
|  +62.0% |   +1.126s |         99.7% |  1.81s → 2.94s | 1,816 → 2,942 | `ZSTD_compress_frameChunk`               | `zstd_compress.c`   |
|  +62.3% |   +1.110s | 97.8% → 98.0% |  1.78s → 2.89s | 1,782 → 2,892 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c`        |
|  +65.8% | +981.00ms | 81.8% → 83.8% |  1.49s → 2.47s | 1,491 → 2,472 | `ZSTD_btGetAllMatches_noDict_3`          | `zstd_opt.c`        |
| +177.8% |  +16.00ms |   0.5% → 0.8% | 9.0ms → 25.0ms |        9 → 25 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c`        |
|     new |   +5.00ms |   0.0% → 0.2% |    0ms → 5.0ms |         0 → 5 | `ZSTD_updateStats`                       | `zstd_opt.c`        |
| +133.3% |   +4.00ms |          0.2% |  3.0ms → 7.0ms |         3 → 7 | `ZSTD_insertBt1.constprop.3`             | `zstd_opt.c`        |
|  +50.0% |   +3.00ms |          0.3% |  6.0ms → 9.0ms |         6 → 9 | `ZSTD_compressSeqStore_singleBlock`      | `zstd_compress.c`   |
|     new |   +2.00ms |   0.0% → 0.1% |    0ms → 2.0ms |         0 → 2 | `ZSTD_recordFingerprint_1`               | `zstd_preSplit.c`   |
|     new |   +1.00ms |  0.0% → <0.1% |    0ms → 1.0ms |         0 → 1 | `ZSTD_setBasePrices`                     | `zstd_opt.c`        |
|     new |   +1.00ms |  0.0% → <0.1% |    0ms → 1.0ms |         0 → 1 | `ZSTDMT_getBuffer`                       | `zstdmt_compress.c` |
|     new |   +1.00ms |  0.0% → <0.1% |    0ms → 1.0ms |         0 → 1 | `AIO_ReadPool_executeReadJob`            | `fileio_asyncio.c`  |
|     new |   +1.00ms |  0.0% → <0.1% |    0ms → 1.0ms |         0 → 1 | `HUF_compress_internal`                  | `huf_compress.c`    |
|     new |   +1.00ms |  0.0% → <0.1% |    0ms → 1.0ms |         0 → 1 | `POOL_free.part.0`                       | `pool.c`            |

#### Improvements

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |            % |           Time | Samples | Function                                             | Location                    |
| ------: | ------: | -----------: | -------------: | ------: | ---------------------------------------------------- | --------------------------- |
|  -46.2% | -6.00ms |  0.7% → 0.2% | 13.0ms → 7.0ms |  13 → 7 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`           |
|  -46.2% | -6.00ms |  0.7% → 0.2% | 13.0ms → 7.0ms |  13 → 7 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`           |
|  -40.0% | -4.00ms |  0.5% → 0.2% | 10.0ms → 6.0ms |  10 → 6 | `ZSTD_buildBlockEntropyStats`                        | `<unknown>`                 |
| removed | -3.00ms |  0.2% → 0.0% |    3.0ms → 0ms |   3 → 0 | `HUF_buildCTable_wksp`                               | `<unknown>`                 |
|  -75.0% | -3.00ms | 0.2% → <0.1% |  4.0ms → 1.0ms |   4 → 1 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | `zstd_opt.c`                |
|  -50.0% | -3.00ms |  0.3% → 0.1% |  6.0ms → 3.0ms |   6 → 3 | `HIST_count_parallel_wksp`                           | `hist.c`                    |
|  -40.0% | -2.00ms |  0.3% → 0.1% |  5.0ms → 3.0ms |   5 → 3 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c`           |
|  -25.0% | -1.00ms |  0.2% → 0.1% |  4.0ms → 3.0ms |   4 → 3 | `HUF_optimalTableLog`                                | `<unknown>`                 |
| removed | -1.00ms |  0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `FSE_compress_usingCTable_generic`                   | `fse_compress.c`            |
| removed | -1.00ms |  0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `FSE_writeNCount_generic`                            | `fse_compress.c`            |
| removed | -1.00ms |  0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `ZSTD_NCountCost`                                    | `zstd_compress_sequences.c` |
| removed | -1.00ms |  0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `ZSTD_selectEncodingType`                            | `<unknown>`                 |
| removed | -1.00ms |  0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `ZSTD_XXH64_update`                                  | `<unknown>`                 |
|  -33.3% | -1.00ms |  0.2% → 0.1% |  3.0ms → 2.0ms |   3 → 2 | `ZSTD_compressStream2`                               | `<unknown>`                 |
|  -33.3% | -1.00ms |  0.2% → 0.1% |  3.0ms → 2.0ms |   3 → 2 | `FIO_compressFilename_srcFile`                       | `fileio.c`                  |
| removed | -1.00ms |  0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `ZSTD_rescaleFreqs`                                  | `zstd_opt.c`                |

##### Ours

|  Change |   Delta |            % |           Time | Samples | Function                                             | Location                    |
| ------: | ------: | -----------: | -------------: | ------: | ---------------------------------------------------- | --------------------------- |
|  -46.2% | -6.00ms |  0.7% → 0.2% | 13.0ms → 7.0ms |  13 → 7 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`           |
|  -46.2% | -6.00ms |  0.7% → 0.2% | 13.0ms → 7.0ms |  13 → 7 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`           |
|  -75.0% | -3.00ms | 0.2% → <0.1% |  4.0ms → 1.0ms |   4 → 1 | `ZSTD_litLengthPrice.constprop.0.isra.0`             | `zstd_opt.c`                |
|  -50.0% | -3.00ms |  0.3% → 0.1% |  6.0ms → 3.0ms |   6 → 3 | `HIST_count_parallel_wksp`                           | `hist.c`                    |
|  -40.0% | -2.00ms |  0.3% → 0.1% |  5.0ms → 3.0ms |   5 → 3 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c`           |
| removed | -1.00ms |  0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `FSE_compress_usingCTable_generic`                   | `fse_compress.c`            |
| removed | -1.00ms |  0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `FSE_writeNCount_generic`                            | `fse_compress.c`            |
| removed | -1.00ms |  0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `ZSTD_NCountCost`                                    | `zstd_compress_sequences.c` |
|  -33.3% | -1.00ms |  0.2% → 0.1% |  3.0ms → 2.0ms |   3 → 2 | `FIO_compressFilename_srcFile`                       | `fileio.c`                  |
| removed | -1.00ms |  0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `ZSTD_rescaleFreqs`                                  | `zstd_opt.c`                |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

| Change |   Delta |      % |          Time |       Samples | Caller                     | Location          |
| -----: | ------: | -----: | ------------: | ------------: | -------------------------- | ----------------- |
| +62.9% | +1.129s | 100.0% | 1.79s → 2.92s | 1,795 → 2,924 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `(anonymous)` (`<unknown>`)

| Change |   Delta |            % |          Time |       Samples | Caller                 | Location    |
| -----: | ------: | -----------: | ------------: | ------------: | ---------------------- | ----------- |
| +62.0% | +1.128s |        99.8% | 1.81s → 2.94s | 1,818 → 2,946 | `(anonymous)`          | `<unknown>` |
| +25.0% | +1.00ms |         0.2% | 4.0ms → 5.0ms |         4 → 5 | `__libc_start_main`    | `<unknown>` |
| -33.3% | -1.00ms |  0.2% → 0.1% | 3.0ms → 2.0ms |         3 → 2 | `ZSTD_compressStream2` | `<unknown>` |
|    new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `__libc_malloc`        | `<unknown>` |
|    new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `_IO_fread`            | `<unknown>` |

##### `POOL_thread` (`pool.c`)

| Change |   Delta |      % |          Time |       Samples | Caller        | Location    |
| -----: | ------: | -----: | ------------: | ------------: | ------------- | ----------- |
| +62.0% | +1.128s | 100.0% | 1.81s → 2.94s | 1,818 → 2,946 | `(anonymous)` | `<unknown>` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

| Change |   Delta |      % |          Time |       Samples | Caller        | Location |
| -----: | ------: | -----: | ------------: | ------------: | ------------- | -------- |
| +62.0% | +1.127s | 100.0% | 1.81s → 2.94s | 1,818 → 2,945 | `POOL_thread` | `pool.c` |

##### `ZSTD_compress_frameChunk` (`zstd_compress.c`)

| Change |     Delta |             % |              Time |       Samples | Caller                         | Location    |
| -----: | --------: | ------------: | ----------------: | ------------: | ------------------------------ | ----------- |
| +69.0% |   +1.009s | 80.6% → 84.0% |     1.46s → 2.47s | 1,463 → 2,472 | `ZSTD_compressContinue_public` | `<unknown>` |
| +33.1% | +117.00ms | 19.4% → 16.0% | 353.0ms → 470.0ms |     353 → 470 | `ZSTD_compressEnd_public`      | `<unknown>` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

| Change |   Delta |             % |            Time |       Samples | Caller                        | Location          |
| -----: | ------: | ------------: | --------------: | ------------: | ----------------------------- | ----------------- |
| +62.9% | +1.107s | 98.8% → 99.2% |   1.76s → 2.86s | 1,761 → 2,868 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
| +14.3% | +3.00ms |   1.2% → 0.8% | 21.0ms → 24.0ms |       21 → 24 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_compressContinue_public` (`<unknown>`)

| Change |   Delta |      % |          Time |       Samples | Caller                  | Location            |
| -----: | ------: | -----: | ------------: | ------------: | ----------------------- | ------------------- |
| +69.0% | +1.009s | 100.0% | 1.46s → 2.47s | 1,463 → 2,472 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

| Change |     Delta |      % |          Time |       Samples | Caller                    | Location     |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------- | ------------ |
| +65.8% | +981.00ms | 100.0% | 1.49s → 2.47s | 1,491 → 2,472 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_compressEnd_public` (`<unknown>`)

| Change |     Delta |      % |              Time |   Samples | Caller                  | Location            |
| -----: | --------: | -----: | ----------------: | --------: | ----------------------- | ------------------- |
| +33.1% | +117.00ms | 100.0% | 353.0ms → 470.0ms | 353 → 470 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`)

|  Change |    Delta |              % |           Time | Samples | Caller                        | Location          |
| ------: | -------: | -------------: | -------------: | ------: | ----------------------------- | ----------------- |
| +155.6% | +14.00ms | 100.0% → 92.0% | 9.0ms → 23.0ms |  9 → 23 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|     new |  +2.00ms |    0.0% → 8.0% |    0ms → 2.0ms |   0 → 2 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_compressBlock_btultra2` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Caller               | Location          |
| -----: | ------: | -----: | --------------: | ------: | -------------------- | ----------------- |
| +23.8% | +5.00ms | 100.0% | 21.0ms → 26.0ms | 21 → 26 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

| Change |   Delta |             % |        Time | Samples | Caller               | Location          |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- | ----------------- |
|    new | +5.00ms | 0.0% → 100.0% | 0ms → 5.0ms |   0 → 5 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`)

|  Change |   Delta |      % |          Time | Samples | Caller                          | Location     |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------- | ------------ |
| +133.3% | +4.00ms | 100.0% | 3.0ms → 7.0ms |   3 → 7 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

| Change |   Delta |      % |          Time | Samples | Caller                     | Location          |
| -----: | ------: | -----: | ------------: | ------: | -------------------------- | ----------------- |
| +50.0% | +3.00ms | 100.0% | 6.0ms → 9.0ms |   6 → 9 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `munmap` (`<unknown>`)

| Change |   Delta |            % |        Time | Samples | Caller            | Location    |
| -----: | ------: | -----------: | ----------: | ------: | ----------------- | ----------- |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `(anonymous)`     | `<unknown>` |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `ZSTDMT_freeCCtx` | `<unknown>` |

##### `ZSTDMT_freeCCtx` (`<unknown>`)

|  Change |   Delta |      % |          Time | Samples | Caller             | Location    |
| ------: | ------: | -----: | ------------: | ------: | ------------------ | ----------- |
| +200.0% | +2.00ms | 100.0% | 1.0ms → 3.0ms |   1 → 3 | `ZSTD_freeCStream` | `<unknown>` |

##### `ZSTD_freeCStream` (`<unknown>`)

|  Change |   Delta |      % |          Time | Samples | Caller                 | Location    |
| ------: | ------: | -----: | ------------: | ------: | ---------------------- | ----------- |
| +200.0% | +2.00ms | 100.0% | 1.0ms → 3.0ms |   1 → 3 | `FIO_compressFilename` | `<unknown>` |

##### `ZSTD_encodeSequences` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                              | Location          |
| -----: | ------: | -----: | ------------: | ------: | ----------------------------------- | ----------------- |
| +40.0% | +2.00ms | 100.0% | 5.0ms → 7.0ms |   5 → 7 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`)

| Change |   Delta |             % |        Time | Samples | Caller            | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ----------------- | ----------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `ZSTD_splitBlock` | `<unknown>` |

##### `ZSTD_splitBlock` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                     | Location          |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------- | ----------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_setBasePrices` (`zstd_opt.c`)

| Change |   Delta |             % |        Time | Samples | Caller               | Location          |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- | ----------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTDMT_getBuffer` (`zstdmt_compress.c`)

| Change |   Delta |             % |        Time | Samples | Caller                  | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------- | ------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`)

| Change |   Delta |             % |        Time | Samples | Caller        | Location |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | -------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `POOL_thread` | `pool.c` |

##### `HUF_compress_internal` (`huf_compress.c`)

| Change |   Delta |             % |        Time | Samples | Caller                  | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `HUF_compress4X_repeat` | `<unknown>` |

##### `POOL_free.part.0` (`pool.c`)

| Change |   Delta |             % |        Time | Samples | Caller            | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ----------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `ZSTDMT_freeCCtx` | `<unknown>` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

| Change |   Delta |      % |           Time | Samples | Caller                         | Location          |
| -----: | ------: | -----: | -------------: | ------: | ------------------------------ | ----------------- |
| -46.2% | -6.00ms | 100.0% | 13.0ms → 7.0ms |  13 → 7 | `ZSTD_deriveBlockSplitsHelper` | `zstd_compress.c` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

| Change |   Delta |      % |           Time | Samples | Caller                     | Location          |
| -----: | ------: | -----: | -------------: | ------: | -------------------------- | ----------------- |
| -46.2% | -6.00ms | 100.0% | 13.0ms → 7.0ms |  13 → 7 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_buildBlockEntropyStats` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller                                               | Location          |
| -----: | ------: | -----: | -------------: | ------: | ---------------------------------------------------- | ----------------- |
| -40.0% | -4.00ms | 100.0% | 10.0ms → 6.0ms |  10 → 6 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `HUF_buildCTable_wksp` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                | Location    |
| ------: | ------: | ------------: | ----------: | ------: | --------------------- | ----------- |
| removed | -3.00ms | 100.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `HUF_optimalTableLog` | `<unknown>` |

##### `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`)

| Change |   Delta |      % |          Time | Samples | Caller               | Location          |
| -----: | ------: | -----: | ------------: | ------: | -------------------- | ----------------- |
| -75.0% | -3.00ms | 100.0% | 4.0ms → 1.0ms |   4 → 1 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

| Change |   Delta |             % |          Time | Samples | Caller                                               | Location          |
| -----: | ------: | ------------: | ------------: | ------: | ---------------------------------------------------- | ----------------- |
| -66.7% | -2.00ms | 50.0% → 33.3% | 3.0ms → 1.0ms |   3 → 1 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |
| -33.3% | -1.00ms | 50.0% → 66.7% | 3.0ms → 2.0ms |   3 → 2 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

| Change |   Delta |              % |          Time | Samples | Caller                              | Location          |
| -----: | ------: | -------------: | ------------: | ------: | ----------------------------------- | ----------------- |
| -60.0% | -3.00ms | 100.0% → 66.7% | 5.0ms → 2.0ms |   5 → 2 | `ZSTD_buildBlockEntropyStats`       | `<unknown>`       |
|    new | +1.00ms |   0.0% → 33.3% |   0ms → 1.0ms |   0 → 1 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `HUF_optimalTableLog` (`<unknown>`)

| Change |   Delta |              % |          Time | Samples | Caller                        | Location         |
| -----: | ------: | -------------: | ------------: | ------: | ----------------------------- | ---------------- |
| -50.0% | -2.00ms | 100.0% → 66.7% | 4.0ms → 2.0ms |   4 → 2 | `ZSTD_buildBlockEntropyStats` | `<unknown>`      |
|    new | +1.00ms |   0.0% → 33.3% |   0ms → 1.0ms |   0 → 1 | `HUF_compress_internal`       | `huf_compress.c` |

##### `FSE_compress_usingCTable_generic` (`fse_compress.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                 | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `HUF_writeCTable_wksp` | `<unknown>` |

##### `FSE_writeNCount_generic` (`fse_compress.c`)

|  Change |   Delta |             % |        Time | Samples | Caller            | Location                    |
| ------: | ------: | ------------: | ----------: | ------: | ----------------- | --------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_NCountCost` | `zstd_compress_sequences.c` |

##### `ZSTD_NCountCost` (`zstd_compress_sequences.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                    | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_selectEncodingType` | `<unknown>` |

##### `ZSTD_selectEncodingType` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                          | Location          |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------- | ----------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |

##### `ZSTD_XXH64_update` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                     | Location          |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------- | ----------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_compressStream2` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                         | Location   |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------ | ---------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

| Change |   Delta |      % |          Time | Samples | Caller                 | Location    |
| -----: | ------: | -----: | ------------: | ------: | ---------------------- | ----------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `FIO_compressFilename` | `<unknown>` |

##### `ZSTD_rescaleFreqs` (`zstd_opt.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                    | Location     |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------- | ------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|  Change |    Delta |            % |            Time |       Samples | Callee                                   | Location     |
| ------: | -------: | -----------: | --------------: | ------------: | ---------------------------------------- | ------------ |
|  +62.9% |  +1.107s |        98.1% |   1.76s → 2.86s | 1,761 → 2,868 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c` |
| +155.6% | +14.00ms |  0.5% → 0.8% |  9.0ms → 23.0ms |        9 → 23 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c` |
|  +23.8% |  +5.00ms |  1.2% → 0.9% | 21.0ms → 26.0ms |       21 → 26 | `ZSTD_compressBlock_btultra2`            | `<unknown>`  |
|     new |  +5.00ms |  0.0% → 0.2% |     0ms → 5.0ms |         0 → 5 | `ZSTD_updateStats`                       | `zstd_opt.c` |
|  -75.0% |  -3.00ms | 0.2% → <0.1% |   4.0ms → 1.0ms |         4 → 1 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c` |

##### `(anonymous)` (`<unknown>`)

| Change |   Delta |            % |          Time |       Samples | Callee        | Location    |
| -----: | ------: | -----------: | ------------: | ------------: | ------------- | ----------- |
| +62.0% | +1.128s |        99.8% | 1.81s → 2.94s | 1,818 → 2,946 | `POOL_thread` | `pool.c`    |
| +62.0% | +1.128s |        99.8% | 1.81s → 2.94s | 1,818 → 2,946 | `(anonymous)` | `<unknown>` |
| +25.0% | +1.00ms |         0.2% | 4.0ms → 5.0ms |         4 → 5 | `main`        | `<unknown>` |
|    new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `munmap`      | `<unknown>` |
|    new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `__read`      | `<unknown>` |

##### `POOL_thread` (`pool.c`)

| Change |   Delta |            % |          Time |       Samples | Callee                        | Location            |
| -----: | ------: | -----------: | ------------: | ------------: | ----------------------------- | ------------------- |
| +62.0% | +1.127s |       100.0% | 1.81s → 2.94s | 1,818 → 2,945 | `ZSTDMT_compressionJob`       | `zstdmt_compress.c` |
|    new | +1.00ms | 0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `AIO_ReadPool_executeReadJob` | `fileio_asyncio.c`  |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

| Change |     Delta |             % |              Time |       Samples | Callee                         | Location            |
| -----: | --------: | ------------: | ----------------: | ------------: | ------------------------------ | ------------------- |
| +69.0% |   +1.009s | 80.5% → 83.9% |     1.46s → 2.47s | 1,463 → 2,472 | `ZSTD_compressContinue_public` | `<unknown>`         |
| +33.1% | +117.00ms | 19.4% → 16.0% | 353.0ms → 470.0ms |     353 → 470 | `ZSTD_compressEnd_public`      | `<unknown>`         |
|    new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `ZSTDMT_getBuffer`             | `zstdmt_compress.c` |

##### `ZSTD_compress_frameChunk` (`zstd_compress.c`)

|  Change |   Delta |             % |           Time |       Samples | Callee                              | Location          |
| ------: | ------: | ------------: | -------------: | ------------: | ----------------------------------- | ----------------- |
|  +62.9% | +1.129s | 98.8% → 99.4% |  1.79s → 2.92s | 1,795 → 2,924 | `ZSTD_buildSeqStore`                | `zstd_compress.c` |
|  -46.2% | -6.00ms |   0.7% → 0.2% | 13.0ms → 7.0ms |        13 → 7 | `ZSTD_deriveBlockSplitsHelper`      | `zstd_compress.c` |
|  +50.0% | +3.00ms |          0.3% |  6.0ms → 9.0ms |         6 → 9 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |
|     new | +2.00ms |   0.0% → 0.1% |    0ms → 2.0ms |         0 → 2 | `ZSTD_splitBlock`                   | `<unknown>`       |
| removed | -1.00ms |   0.1% → 0.0% |    1.0ms → 0ms |         1 → 0 | `ZSTD_XXH64_update`                 | `<unknown>`       |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|  Change |     Delta |             % |          Time |       Samples | Callee                          | Location     |
| ------: | --------: | ------------: | ------------: | ------------: | ------------------------------- | ------------ |
|  +65.8% | +981.00ms | 83.7% → 85.5% | 1.49s → 2.47s | 1,491 → 2,472 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |
| removed |   -1.00ms |   0.1% → 0.0% |   1.0ms → 0ms |         1 → 0 | `ZSTD_rescaleFreqs`             | `zstd_opt.c` |

##### `ZSTD_compressContinue_public` (`<unknown>`)

| Change |   Delta |      % |          Time |       Samples | Callee                     | Location          |
| -----: | ------: | -----: | ------------: | ------------: | -------------------------- | ----------------- |
| +69.0% | +1.009s | 100.0% | 1.46s → 2.47s | 1,463 → 2,472 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|  Change |   Delta |           % |          Time | Samples | Callee                       | Location     |
| ------: | ------: | ----------: | ------------: | ------: | ---------------------------- | ------------ |
| +133.3% | +4.00ms | 0.2% → 0.3% | 3.0ms → 7.0ms |   3 → 7 | `ZSTD_insertBt1.constprop.3` | `zstd_opt.c` |

##### `ZSTD_compressEnd_public` (`<unknown>`)

| Change |     Delta |      % |              Time |   Samples | Callee                     | Location          |
| -----: | --------: | -----: | ----------------: | --------: | -------------------------- | ----------------- |
| +33.1% | +117.00ms | 100.0% | 353.0ms → 470.0ms | 353 → 470 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_compressBlock_btultra2` (`<unknown>`)

| Change |   Delta |              % |            Time | Samples | Callee                                   | Location     |
| -----: | ------: | -------------: | --------------: | ------: | ---------------------------------------- | ------------ |
| +14.3% | +3.00ms | 100.0% → 92.3% | 21.0ms → 24.0ms | 21 → 24 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c` |
|    new | +2.00ms |    0.0% → 7.7% |     0ms → 2.0ms |   0 → 2 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|  Change |   Delta |             % |          Time | Samples | Callee                          | Location          |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------- | ----------------- |
|  +40.0% | +2.00ms | 83.3% → 77.8% | 5.0ms → 7.0ms |   5 → 7 | `ZSTD_encodeSequences`          | `<unknown>`       |
| removed | -1.00ms |  16.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `ZSTD_seqToCodes`               | `<unknown>`       |
|     new | +1.00ms |  0.0% → 11.1% |   0ms → 1.0ms |   0 → 1 | `ZSTD_compressLiterals`         | `<unknown>`       |
|     new | +1.00ms |  0.0% → 11.1% |   0ms → 1.0ms |   0 → 1 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |

##### `ZSTDMT_freeCCtx` (`<unknown>`)

| Change |   Delta |            % |        Time | Samples | Callee             | Location    |
| -----: | ------: | -----------: | ----------: | ------: | ------------------ | ----------- |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `munmap`           | `<unknown>` |
|    new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `POOL_free.part.0` | `pool.c`    |

##### `ZSTD_freeCStream` (`<unknown>`)

|  Change |   Delta |      % |          Time | Samples | Callee            | Location    |
| ------: | ------: | -----: | ------------: | ------: | ----------------- | ----------- |
| +200.0% | +2.00ms | 100.0% | 1.0ms → 3.0ms |   1 → 3 | `ZSTDMT_freeCCtx` | `<unknown>` |

##### `ZSTD_splitBlock` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Callee                     | Location          |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------- | ----------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `ZSTD_recordFingerprint_1` | `zstd_preSplit.c` |

##### `ZSTDMT_getBuffer` (`zstdmt_compress.c`)

| Change |   Delta |             % |        Time | Samples | Callee          | Location    |
| -----: | ------: | ------------: | ----------: | ------: | --------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `__libc_malloc` | `<unknown>` |

##### `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`)

| Change |   Delta |             % |        Time | Samples | Callee      | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ----------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `_IO_fread` | `<unknown>` |

##### `HUF_compress_internal` (`huf_compress.c`)

| Change |   Delta |             % |        Time | Samples | Callee                | Location    |
| -----: | ------: | ------------: | ----------: | ------: | --------------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `HUF_optimalTableLog` | `<unknown>` |

##### `POOL_free.part.0` (`pool.c`)

| Change |   Delta |             % |        Time | Samples | Callee                   | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------ | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `pthread_cond_broadcast` | `<unknown>` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

| Change |   Delta |             % |           Time | Samples | Callee                        | Location    |
| -----: | ------: | ------------: | -------------: | ------: | ----------------------------- | ----------- |
| -40.0% | -4.00ms | 76.9% → 85.7% | 10.0ms → 6.0ms |  10 → 6 | `ZSTD_buildBlockEntropyStats` | `<unknown>` |
| -66.7% | -2.00ms | 23.1% → 14.3% |  3.0ms → 1.0ms |   3 → 1 | `HIST_count_parallel_wksp`    | `hist.c`    |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

| Change |   Delta |      % |           Time | Samples | Callee                                               | Location          |
| -----: | ------: | -----: | -------------: | ------: | ---------------------------------------------------- | ----------------- |
| -46.2% | -6.00ms | 100.0% | 13.0ms → 7.0ms |  13 → 7 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_buildBlockEntropyStats` (`<unknown>`)

|  Change |   Delta |             % |          Time | Samples | Callee                          | Location          |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------- | ----------------- |
|  -60.0% | -3.00ms | 50.0% → 33.3% | 5.0ms → 2.0ms |   5 → 2 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |
|  -50.0% | -2.00ms | 40.0% → 33.3% | 4.0ms → 2.0ms |   4 → 2 | `HUF_optimalTableLog`           | `<unknown>`       |
| +100.0% | +1.00ms | 10.0% → 33.3% | 1.0ms → 2.0ms |   1 → 2 | `ZSTD_seqToCodes`               | `<unknown>`       |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

|  Change |   Delta |             % |          Time | Samples | Callee                     | Location    |
| ------: | ------: | ------------: | ------------: | ------: | -------------------------- | ----------- |
|  -33.3% | -1.00ms | 60.0% → 66.7% | 3.0ms → 2.0ms |   3 → 2 | `HIST_count_parallel_wksp` | `hist.c`    |
| removed | -1.00ms |  20.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `ZSTD_selectEncodingType`  | `<unknown>` |

##### `HUF_optimalTableLog` (`<unknown>`)

|  Change |   Delta |             % |          Time | Samples | Callee                 | Location    |
| ------: | ------: | ------------: | ------------: | ------: | ---------------------- | ----------- |
| removed | -3.00ms |  75.0% → 0.0% |   3.0ms → 0ms |   3 → 0 | `HUF_buildCTable_wksp` | `<unknown>` |
| +100.0% | +1.00ms | 25.0% → 66.7% | 1.0ms → 2.0ms |   1 → 2 | `HUF_writeCTable_wksp` | `<unknown>` |

##### `ZSTD_NCountCost` (`zstd_compress_sequences.c`)

|  Change |   Delta |             % |        Time | Samples | Callee                    | Location         |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------- | ---------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `FSE_writeNCount_generic` | `fse_compress.c` |

##### `ZSTD_selectEncodingType` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Callee            | Location                    |
| ------: | ------: | ------------: | ----------: | ------: | ----------------- | --------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_NCountCost` | `zstd_compress_sequences.c` |

##### `ZSTD_compressStream2` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Callee        | Location    |
| -----: | ------: | -----: | ------------: | ------: | ------------- | ----------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `(anonymous)` | `<unknown>` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

| Change |   Delta |      % |          Time | Samples | Callee                 | Location    |
| -----: | ------: | -----: | ------------: | ------: | ---------------------- | ----------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `ZSTD_compressStream2` | `<unknown>` |

##### `ZSTD_rescaleFreqs` (`zstd_opt.c`)

|  Change |   Delta |             % |        Time | Samples | Callee              | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `HIST_count_simple` | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

|  Change |     Delta |             % |              Time |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                               |
| ------: | --------: | ------------: | ----------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +75.7% | +880.00ms | 63.8% → 69.2% |     1.16s → 2.04s | 1,163 → 2,043 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                           |
|  +42.7% | +106.00ms | 13.6% → 12.0% | 248.0ms → 354.0ms |     248 → 354 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                             |
|  +29.6% |  +92.00ms | 17.1% → 13.7% | 311.0ms → 403.0ms |     311 → 403 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                |
|  +69.4% |  +25.00ms |   2.0% → 2.1% |   36.0ms → 61.0ms |       36 → 61 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                  |
| +185.7% |  +13.00ms |   0.4% → 0.7% |    7.0ms → 20.0ms |        7 → 20 | `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                              |
|  +35.7% |   +5.00ms |   0.8% → 0.6% |   14.0ms → 19.0ms |       14 → 19 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                           |
|     new |   +5.00ms |   0.0% → 0.2% |       0ms → 5.0ms |         0 → 5 | `ZSTD_updateStats` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                    |
| +100.0% |   +3.00ms |          0.2% |     3.0ms → 6.0ms |         3 → 6 | `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                            |
|     new |   +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |         0 → 2 | `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`) ← `ZSTD_splitBlock` ← `ZSTD_compress_frameChunk` (`zstd_compress.c`) ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                          |
|     new |   +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |         0 → 2 | `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                              |
|  +50.0% |   +1.00ms |          0.1% |     2.0ms → 3.0ms |         2 → 3 | `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                   |
| +100.0% |   +1.00ms |          0.1% |     1.0ms → 2.0ms |         1 → 2 | `ZSTD_seqToCodes` ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                   |
|  +20.0% |   +1.00ms |   0.3% → 0.2% |     5.0ms → 6.0ms |         5 → 6 | `ZSTD_encodeSequences` ← `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `ZSTD_setBasePrices` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                  |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `munmap` ← `(anonymous)` ← `(anonymous)` ← `__libc_malloc` ← `ZSTDMT_getBuffer` (`zstdmt_compress.c`) ← `ZSTDMT_compressionJob` ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                                                                               |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `__read` ← `(anonymous)` ← `_IO_fread` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                                                                                                                   |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `munmap` ← `ZSTDMT_freeCCtx` ← `ZSTD_freeCStream` ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                     |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `HIST_count_simple` ← `HUF_writeCTable_wksp` ← `HUF_optimalTableLog` ← `HUF_compress_internal` (`huf_compress.c`) ← `HUF_compress4X_repeat` ← `ZSTD_compressLiterals` ← `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)` |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `pthread_cond_broadcast` ← `POOL_free.part.0` (`pool.c`) ← `ZSTDMT_freeCCtx` ← `ZSTD_freeCStream` ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                     |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                 |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

|  Change |   Delta |            % |          Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------: | ------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| removed | -3.00ms |  0.2% → 0.0% |   3.0ms → 0ms |   3 → 0 | `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                                                                                      |
| removed | -2.00ms |  0.1% → 0.0% |   2.0ms → 0ms |   2 → 0 | `HUF_buildCTable_wksp` ← `HUF_optimalTableLog` ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                              |
|  -66.7% | -2.00ms | 0.2% → <0.1% | 3.0ms → 1.0ms |   3 → 1 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                 |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `HUF_buildCTable_wksp` ← `HUF_optimalTableLog` ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                   |
|  -16.7% | -1.00ms |  0.3% → 0.2% | 6.0ms → 5.0ms |   6 → 5 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                                                                     |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `ZSTD_seqToCodes` ← `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                                                                                                             |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `FSE_compress_usingCTable_generic` (`fse_compress.c`) ← `HUF_writeCTable_wksp` ← `HUF_optimalTableLog` ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                      |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `FSE_writeNCount_generic` (`fse_compress.c`) ← `ZSTD_NCountCost` (`zstd_compress_sequences.c`) ← `ZSTD_selectEncodingType` ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)` |
|  -50.0% | -1.00ms | 0.1% → <0.1% | 2.0ms → 1.0ms |   2 → 1 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                                       |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                                            |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `ZSTD_XXH64_update` ← `ZSTD_compress_frameChunk` (`zstd_compress.c`) ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                                                                                                                                                 |
|  -33.3% | -1.00ms |  0.2% → 0.1% | 3.0ms → 2.0ms |   3 → 2 | `(anonymous)` ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                          |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `HIST_count_simple` ← `ZSTD_rescaleFreqs` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                         |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `ZSTD_compress_frameChunk` (`zstd_compress.c`) ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                                                                                                                                                                       |

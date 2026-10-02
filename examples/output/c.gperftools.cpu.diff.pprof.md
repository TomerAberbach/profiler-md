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

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

| Change |   Delta |             % |              Time |   Samples | Caller                        | Location          |
| -----: | ------: | ------------: | ----------------: | --------: | ----------------------------- | ----------------- |
|  +1.1% | +3.00ms | 97.2% → 96.9% | 275.0ms → 278.0ms | 275 → 278 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
| +12.5% | +1.00ms |   2.8% → 3.1% |     8.0ms → 9.0ms |     8 → 9 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|  Change |   Delta |              % |          Time | Samples | Caller                        | Location          |
| ------: | ------: | -------------: | ------------: | ------: | ----------------------------- | ----------------- |
| +300.0% | +3.00ms | 50.0% → 100.0% | 1.0ms → 4.0ms |   1 → 4 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
| removed | -1.00ms |   50.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

| Change |   Delta |             % |        Time | Samples | Caller                         | Location          |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------ | ----------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `ZSTD_deriveBlockSplitsHelper` | `zstd_compress.c` |

##### `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`)

| Change |   Delta |      % |          Time | Samples | Caller                          | Location     |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------- | ------------ |
| +33.3% | +1.00ms | 100.0% | 3.0ms → 4.0ms |   3 → 4 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `0x9e640` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller                        | Location          |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------- | ----------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |

##### `0xe29bc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x6d3e3` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`)

| Change |   Delta |             % |        Time | Samples | Caller            | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ----------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `ZSTD_splitBlock` | `<unknown>` |

##### `ZSTD_splitBlock` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                     | Location          |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------- | ----------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `0xddbcc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x79b13` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|  Change |     Delta |              % |            Time |     Samples | Caller                    | Location          |
| ------: | --------: | -------------: | --------------: | ----------: | ------------------------- | ----------------- |
|  -36.9% | -500.00ms | 99.9% → 100.0% | 1.35s → 854.0ms | 1,354 → 854 | `ZSTD_compressBlock_opt2` | `zstd_opt.c`      |
| removed |   -1.00ms |    0.1% → 0.0% |     1.0ms → 0ms |       1 → 0 | `ZSTD_buildSeqStore`      | `zstd_compress.c` |

##### `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`)

| Change |    Delta |      % |           Time | Samples | Caller               | Location          |
| -----: | -------: | -----: | -------------: | ------: | -------------------- | ----------------- |
| -58.8% | -10.00ms | 100.0% | 17.0ms → 7.0ms |  17 → 7 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_XXH64_update` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                     | Location          |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------- | ----------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|  Change |   Delta |              % |          Time | Samples | Caller                                               | Location          |
| ------: | ------: | -------------: | ------------: | ------: | ---------------------------------------------------- | ----------------- |
| removed | -3.00ms |   60.0% → 0.0% |   3.0ms → 0ms |   3 → 0 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c` |
|  +50.0% | +1.00ms | 40.0% → 100.0% | 2.0ms → 3.0ms |   2 → 3 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_encodeSequences` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                              | Location          |
| -----: | ------: | -----: | ------------: | ------: | ----------------------------------- | ----------------- |
| -50.0% | -2.00ms | 100.0% | 4.0ms → 2.0ms |   4 → 2 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                     | Location          |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------- | ----------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `0x9e654` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller                        | Location          |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------- | ----------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |

##### `ZSTD_seqToCodes` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                              | Location          |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------- | ----------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `ZSTD_buildBlockEntropyStats`       | `<unknown>`       |
|     new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `0xe7e0c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller          | Location    |
| ------: | ------: | ------------: | ----------: | ------: | --------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_freeCCtx` | `<unknown>` |

##### `HUF_buildCTable_wksp` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                | Location    |
| -----: | ------: | -----: | ------------: | ------: | --------------------- | ----------- |
| -50.0% | -1.00ms | 100.0% | 2.0ms → 1.0ms |   2 → 1 | `HUF_optimalTableLog` | `<unknown>` |

##### `HUF_writeCTable_wksp` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                | Location    |
| ------: | ------: | ------------: | ----------: | ------: | --------------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `HUF_optimalTableLog` | `<unknown>` |

##### `HIST_count_wksp` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                  | Location         |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------- | ---------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `HUF_compress_internal` | `huf_compress.c` |

##### `0x7e838` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| ------: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x81387` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `FSE_compress_usingCTable_generic` (`fse_compress.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                 | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `HUF_writeCTable_wksp` | `<unknown>` |

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

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `ZSTD_splitBlock` (`<unknown>`)

| Change |   Delta |            % |        Time | Samples | Callee                     | Location          |
| -----: | ------: | -----------: | ----------: | ------: | -------------------------- | ----------------- |
|    new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `ZSTD_recordFingerprint_1` | `zstd_preSplit.c` |

##### `0x6d3e3` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Callee    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0xe29bc` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x79b13` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Callee    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0xddbcc` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x6e1b7` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Callee    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x79b13` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`)

| Change |   Delta |             % |        Time | Samples | Callee    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x6e1b7` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

| Change |     Delta |             % |              Time |     Samples | Callee                         | Location    |
| -----: | --------: | ------------: | ----------------: | ----------: | ------------------------------ | ----------- |
| -32.6% | -458.00ms | 83.3% → 80.7% |   1.40s → 948.0ms | 1,406 → 948 | `ZSTD_compressContinue_public` | `<unknown>` |
| -19.6% |  -55.00ms | 16.6% → 19.1% | 280.0ms → 225.0ms |   280 → 225 | `ZSTD_compressEnd_public`      | `<unknown>` |

##### `ZSTD_compress_frameChunk` (`zstd_compress.c`)

|  Change |     Delta |             % |          Time |       Samples | Callee                              | Location          |
| ------: | --------: | ------------: | ------------: | ------------: | ----------------------------------- | ----------------- |
|  -30.3% | -504.00ms | 98.9% → 99.1% | 1.66s → 1.16s | 1,666 → 1,162 | `ZSTD_buildSeqStore`                | `zstd_compress.c` |
|  -55.6% |   -5.00ms |   0.5% → 0.3% | 9.0ms → 4.0ms |         9 → 4 | `ZSTD_deriveBlockSplitsHelper`      | `zstd_compress.c` |
|  -50.0% |   -4.00ms |   0.5% → 0.3% | 8.0ms → 4.0ms |         8 → 4 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |
| removed |   -2.00ms |   0.1% → 0.0% |   2.0ms → 0ms |         2 → 0 | `ZSTD_XXH64_update`                 | `<unknown>`       |
|     new |   +2.00ms |   0.0% → 0.2% |   0ms → 2.0ms |         0 → 2 | `ZSTD_splitBlock`                   | `<unknown>`       |

##### `POOL_thread` (`pool.c`)

| Change |     Delta |              % |          Time |       Samples | Callee                        | Location            |
| -----: | --------: | -------------: | ------------: | ------------: | ----------------------------- | ------------------- |
| -30.4% | -513.00ms | 100.0% → 99.9% | 1.68s → 1.17s | 1,688 → 1,175 | `ZSTDMT_compressionJob`       | `zstdmt_compress.c` |
|    new |   +1.00ms |    0.0% → 0.1% |   0ms → 1.0ms |         0 → 1 | `AIO_ReadPool_executeReadJob` | `fileio_asyncio.c`  |

##### `0x8202f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |     Delta |      % |          Time |       Samples | Callee        | Location |
| -----: | --------: | -----: | ------------: | ------------: | ------------- | -------- |
| -30.3% | -512.00ms | 100.0% | 1.68s → 1.17s | 1,688 → 1,176 | `POOL_thread` | `pool.c` |

##### `0xebf5b` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |     Delta |      % |          Time |       Samples | Callee    | Location                               |
| -----: | --------: | -----: | ------------: | ------------: | --------- | -------------------------------------- |
| -30.3% | -512.00ms | 100.0% | 1.68s → 1.17s | 1,688 → 1,176 | `0x8202f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|  Change |     Delta |             % |           Time |       Samples | Callee                                   | Location     |
| ------: | --------: | ------------: | -------------: | ------------: | ---------------------------------------- | ------------ |
|  -30.5% | -496.00ms | 97.5% → 97.2% |  1.62s → 1.12s | 1,625 → 1,129 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c` |
|  -58.8% |  -10.00ms |   1.0% → 0.6% | 17.0ms → 7.0ms |        17 → 7 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c` |
| +300.0% |   +3.00ms |   0.1% → 0.3% |  1.0ms → 4.0ms |         1 → 4 | `ZSTD_updateStats`                       | `zstd_opt.c` |
| removed |   -1.00ms |   0.1% → 0.0% |    1.0ms → 0ms |         1 → 0 | `ZSTD_btGetAllMatches_noDict_3`          | `zstd_opt.c` |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

| Change |   Delta |           % |          Time | Samples | Callee                       | Location     |
| -----: | ------: | ----------: | ------------: | ------: | ---------------------------- | ------------ |
| +33.3% | +1.00ms | 0.2% → 0.5% | 3.0ms → 4.0ms |   3 → 4 | `ZSTD_insertBt1.constprop.3` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

| Change |     Delta |             % |            Time |     Samples | Callee                          | Location     |
| -----: | --------: | ------------: | --------------: | ----------: | ------------------------------- | ------------ |
| -36.8% | -499.00ms | 82.7% → 74.9% | 1.35s → 858.0ms | 1,357 → 858 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_compressContinue_public` (`<unknown>`)

|  Change |     Delta |              % |            Time |     Samples | Callee                     | Location          |
| ------: | --------: | -------------: | --------------: | ----------: | -------------------------- | ----------------- |
|  -32.5% | -457.00ms | 99.9% → 100.0% | 1.40s → 948.0ms | 1,405 → 948 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |
| removed |   -1.00ms |    0.1% → 0.0% |     1.0ms → 0ms |       1 → 0 | `ZSTD_deriveSeqStoreChunk` | `zstd_compress.c` |

##### `ZSTD_compressEnd_public` (`<unknown>`)

| Change |    Delta |      % |              Time |   Samples | Callee                     | Location          |
| -----: | -------: | -----: | ----------------: | --------: | -------------------------- | ----------------- |
| -19.6% | -55.00ms | 100.0% | 280.0ms → 225.0ms | 280 → 225 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_buildBlockEntropyStats` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Callee                          | Location          |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------- | ----------------- |
| removed | -3.00ms | 42.9% → 0.0% | 3.0ms → 0ms |   3 → 0 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |
| removed | -2.00ms | 28.6% → 0.0% | 2.0ms → 0ms |   2 → 0 | `ZSTD_seqToCodes`               | `<unknown>`       |
| removed | -2.00ms | 28.6% → 0.0% | 2.0ms → 0ms |   2 → 0 | `HUF_optimalTableLog`           | `<unknown>`       |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|  Change |   Delta |             % |          Time | Samples | Callee                        | Location    |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------- | ----------- |
| removed | -7.00ms |  77.8% → 0.0% |   7.0ms → 0ms |   7 → 0 | `ZSTD_buildBlockEntropyStats` | `<unknown>` |
|  +50.0% | +1.00ms | 22.2% → 75.0% | 2.0ms → 3.0ms |   2 → 3 | `HIST_count_parallel_wksp`    | `hist.c`    |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

| Change |   Delta |      % |          Time | Samples | Callee                                               | Location          |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------------------------- | ----------------- |
| -55.6% | -5.00ms | 100.0% | 9.0ms → 4.0ms |   9 → 4 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

| Change |   Delta |             % |          Time | Samples | Callee                  | Location    |
| -----: | ------: | ------------: | ------------: | ------: | ----------------------- | ----------- |
| -66.7% | -2.00ms | 37.5% → 25.0% | 3.0ms → 1.0ms |   3 → 1 | `ZSTD_compressLiterals` | `<unknown>` |
| -50.0% | -2.00ms |         50.0% | 4.0ms → 2.0ms |   4 → 2 | `ZSTD_encodeSequences`  | `<unknown>` |
|    new | +1.00ms |  0.0% → 25.0% |   0ms → 1.0ms |   0 → 1 | `ZSTD_seqToCodes`       | `<unknown>` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

|  Change |   Delta |             % |        Time | Samples | Callee                     | Location |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------- | -------- |
| removed | -3.00ms | 100.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `HIST_count_parallel_wksp` | `hist.c` |

##### `HUF_optimalTableLog` (`<unknown>`)

|  Change |   Delta |              % |          Time | Samples | Callee                 | Location    |
| ------: | ------: | -------------: | ------------: | ------: | ---------------------- | ----------- |
| removed | -2.00ms |   50.0% → 0.0% |   2.0ms → 0ms |   2 → 0 | `HUF_writeCTable_wksp` | `<unknown>` |
|  -50.0% | -1.00ms | 50.0% → 100.0% | 2.0ms → 1.0ms |   2 → 1 | `HUF_buildCTable_wksp` | `<unknown>` |

##### `HUF_compress_internal` (`huf_compress.c`)

|  Change |   Delta |              % |          Time | Samples | Callee                | Location    |
| ------: | ------: | -------------: | ------------: | ------: | --------------------- | ----------- |
|  -50.0% | -1.00ms | 66.7% → 100.0% | 2.0ms → 1.0ms |   2 → 1 | `HUF_optimalTableLog` | `<unknown>` |
| removed | -1.00ms |   33.3% → 0.0% |   1.0ms → 0ms |   1 → 0 | `HIST_count_wksp`     | `<unknown>` |

##### `ZSTDMT_freeCCtxPool.part.0` (`zstdmt_compress.c`)

|  Change |   Delta |             % |        Time | Samples | Callee          | Location    |
| ------: | ------: | ------------: | ----------: | ------: | --------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_freeCCtx` | `<unknown>` |

##### `HUF_compress4X_repeat` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Callee                  | Location         |
| -----: | ------: | -----: | ------------: | ------: | ----------------------- | ---------------- |
| -66.7% | -2.00ms | 100.0% | 3.0ms → 1.0ms |   3 → 1 | `HUF_compress_internal` | `huf_compress.c` |

##### `ZSTD_compressLiterals` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Callee                  | Location    |
| -----: | ------: | -----: | ------------: | ------: | ----------------------- | ----------- |
| -66.7% | -2.00ms | 100.0% | 3.0ms → 1.0ms |   3 → 1 | `HUF_compress4X_repeat` | `<unknown>` |

##### `HUF_writeCTable_wksp` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Callee                             | Location         |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------------------- | ---------------- |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `FSE_compress_usingCTable_generic` | `fse_compress.c` |

##### `ZSTD_freeCCtx` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Callee    | Location                               |
| ------: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0xe7e0c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `ZSTDMT_freeCCtx` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Callee                       | Location            |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------- | ------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTDMT_freeCCtxPool.part.0` | `zstdmt_compress.c` |

##### `ZSTD_freeCStream` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Callee            | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ----------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTDMT_freeCCtx` | `<unknown>` |

##### `FIO_compressFilename` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Callee             | Location    |
| ------: | ------: | -----------: | ----------: | ------: | ------------------ | ----------- |
| removed | -1.00ms | 33.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_freeCStream` | `<unknown>` |

##### `main` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Callee                 | Location    |
| -----: | ------: | -----: | ------------: | ------: | ---------------------- | ----------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `FIO_compressFilename` | `<unknown>` |

##### `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |          Time | Samples | Callee | Location    |
| -----: | ------: | -----: | ------------: | ------: | ------ | ----------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `main` | `<unknown>` |

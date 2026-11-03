# CPU profile diff

Took 1.60s → 2.04s (+441.00ms, +27.5%) over 1,603 → 2,044 samples (1.0ms per sample).

| Category | Change |     Delta |             % |          Time |       Samples |
| -------- | -----: | --------: | ------------: | ------------: | ------------: |
| Ours     | +27.9% | +444.00ms | 99.2% → 99.5% | 1.59s → 2.03s | 1,590 → 2,034 |
| Native   | -33.3% |   -3.00ms |   0.6% → 0.3% | 9.0ms → 6.0ms |         9 → 6 |
| Unknown  |   0.0% |       0ms |          0.2% |         4.0ms |             4 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 1.60s → 2.04s (99.8% → 99.9%) (anonymous)
│   ├── … 1.59s → 2.04s (99.6% → 99.8%) POOL_thread at pool.c
│   │   └── 1.59s → 2.04s (99.6% → 99.8%) ZSTDMT_compressionJob at zstdmt_compress.c
│   │       ├── 1.33s → 1.75s (83.3% → 85.6%) ZSTD_compressContinue_public
│   │       │   └── 1.33s → 1.75s (83.3% → 85.6%) ZSTD_compress_frameChunk at zstd_compress.c
│   │       │       ├── 1.32s → 1.73s (82.8% → 85.1%) ZSTD_buildSeqStore
│   │       │       │   ├── 1.29s → 1.69s (81.0% → 82.9%, self 15.8% → 13.5%, self 19.0% → 16.5% globally) ZSTD_compressBlock_opt2 at zstd_opt.c
│   │       │       │   │   └── 1.04s → 1.41s (65.2% → 69.4%, self 65.1% → 69.2%, self 78.7% → 81.2% globally) ZSTD_btGetAllMatches_noDict_3
│   │       │       │   │       └── 2.0ms → 4.0ms (0.1% → 0.2%) ZSTD_insertBt1.constprop.3
│   │       │       │   ├── 16.0ms → 23.0ms (1.0% → 1.1%) ZSTD_compressBlock_btultra2
│   │       │       │   │   └── 15.0ms → 22.0ms (0.9% → 1.1%, self 0.6% → 0.7%) ZSTD_compressBlock_opt2 at zstd_opt.c
│   │       │       │   ├── 9.0ms → 15.0ms (0.6% → 0.7%) ZSTD_litLengthPrice.constprop.1.isra.0 at zstd_opt.c
│   │       │       │   └── 1.0ms → 4.0ms (0.1% → 0.2%) ZSTD_litLengthPrice.constprop.0.isra.0 at zstd_opt.c
│   │       │       ├── 5.0ms → 4.0ms (0.3% → 0.2%) ZSTD_deriveBlockSplitsHelper
│   │       │       │   └── 5.0ms → 4.0ms (0.3% → 0.2%) ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize
│   │       │       │       ├── 3.0ms → 2.0ms (0.2% → 0.1%) ZSTD_buildBlockEntropyStats
│   │       │       │       │   └── 2.0ms → 1.0ms (0.1% → <0.1%) HUF_optimalTableLog
│   │       │       │       │       └── 2.0ms → 1.0ms (0.1% → <0.1%) HUF_buildCTable_wksp
│   │       │       │       └── 1.0ms → 2.0ms (0.1%) HIST_count_parallel_wksp at hist.c
│   │       │       ├── 3.0ms → 4.0ms (0.2%) ZSTD_compressSeqStore_singleBlock
│   │       │       │   └── 2.0ms → 1.0ms (0.1% → <0.1%) ZSTD_encodeSequences
│   │       │       └── 0ms → 3.0ms (0.0% → 0.1%) ZSTD_splitBlock
│   │       │           └── 0ms → 3.0ms (0.0% → 0.1%) ZSTD_recordFingerprint_1 at zstd_preSplit.c
│   │       └── 261.0ms → 290.0ms (16.3% → 14.2%) ZSTD_compressEnd_public
│   │           └── 261.0ms → 290.0ms (16.3% → 14.2%) ZSTD_compress_frameChunk at zstd_compress.c
│   │               ├── 259.0ms → 289.0ms (16.2% → 14.1%) ZSTD_buildSeqStore
│   │               │   └── 254.0ms → 287.0ms (15.8% → 14.0%, self 2.6% → 2.4%) ZSTD_compressBlock_opt2 at zstd_opt.c
│   │               │       └── 213.0ms → 238.0ms (13.3% → 11.6%, self 13.3% → 11.6%) ZSTD_btGetAllMatches_noDict_3
│   │               └── 1.0ms → 0ms (0.1% → 0.0%) ZSTD_compressSeqStore_singleBlock
│   │                   └── 1.0ms → 0ms (0.1% → 0.0%) ZSTD_seqToCodes
│   └── … 1.0ms → 0ms (0.1% → 0.0%) __read
└── 3.0ms → 2.0ms (0.2% → 0.1%) _start
    └── 3.0ms → 2.0ms (0.2% → 0.1%) __libc_start_main
        └── 3.0ms → 2.0ms (0.2% → 0.1%) (anonymous)
            └── 1.0ms → 0ms (0.1% → 0.0%) main
                └── 1.0ms → 0ms (0.1% → 0.0%) FIO_compressFilename
                    └── 1.0ms → 0ms (0.1% → 0.0%) AIO_WritePool_free
                        └── 1.0ms → 0ms (0.1% → 0.0%) AIO_IOPool_destroy at fileio_asyncio.c
                            └── 1.0ms → 0ms (0.1% → 0.0%) munmap
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |              Time |       Samples | Function                                 | Location          |
| ------: | --------: | ------------: | ----------------: | ------------: | ---------------------------------------- | ----------------- |
|  +31.5% | +398.00ms | 78.7% → 81.2% |     1.26s → 1.66s | 1,262 → 1,660 | `ZSTD_btGetAllMatches_noDict_3`          | `zstd_opt.c`      |
|  +11.2% |  +34.00ms | 19.0% → 16.5% | 304.0ms → 338.0ms |     304 → 338 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c`      |
|  +28.6% |   +4.00ms |          0.9% |   14.0ms → 18.0ms |       14 → 18 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c`      |
| +150.0% |   +3.00ms |   0.1% → 0.2% |     2.0ms → 5.0ms |         2 → 5 | `ZSTD_insertBt1.constprop.3`             | `zstd_opt.c`      |
|     new |   +3.00ms |   0.0% → 0.1% |       0ms → 3.0ms |         0 → 3 | `ZSTD_recordFingerprint_1`               | `zstd_preSplit.c` |
| +100.0% |   +2.00ms |   0.1% → 0.2% |     2.0ms → 4.0ms |         2 → 4 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c`      |
| +200.0% |   +2.00ms |          0.1% |     1.0ms → 3.0ms |         1 → 3 | `HIST_count_parallel_wksp`               | `hist.c`          |
|  +50.0% |   +1.00ms |          0.1% |     2.0ms → 3.0ms |         2 → 3 | `ZSTD_seqToCodes`                        | `<unknown>`       |

##### Ours

|  Change |     Delta |             % |              Time |       Samples | Function                                 | Location          |
| ------: | --------: | ------------: | ----------------: | ------------: | ---------------------------------------- | ----------------- |
|  +31.5% | +398.00ms | 78.7% → 81.2% |     1.26s → 1.66s | 1,262 → 1,660 | `ZSTD_btGetAllMatches_noDict_3`          | `zstd_opt.c`      |
|  +11.2% |  +34.00ms | 19.0% → 16.5% | 304.0ms → 338.0ms |     304 → 338 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c`      |
|  +28.6% |   +4.00ms |          0.9% |   14.0ms → 18.0ms |       14 → 18 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c`      |
| +150.0% |   +3.00ms |   0.1% → 0.2% |     2.0ms → 5.0ms |         2 → 5 | `ZSTD_insertBt1.constprop.3`             | `zstd_opt.c`      |
|     new |   +3.00ms |   0.0% → 0.1% |       0ms → 3.0ms |         0 → 3 | `ZSTD_recordFingerprint_1`               | `zstd_preSplit.c` |
| +100.0% |   +2.00ms |   0.1% → 0.2% |     2.0ms → 4.0ms |         2 → 4 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c`      |
| +200.0% |   +2.00ms |          0.1% |     1.0ms → 3.0ms |         1 → 3 | `HIST_count_parallel_wksp`               | `hist.c`          |

#### Improvements

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |            % |          Time | Samples | Function                                             | Location          |
| ------: | ------: | -----------: | ------------: | ------: | ---------------------------------------------------- | ----------------- |
| removed | -2.00ms |  0.1% → 0.0% |   2.0ms → 0ms |   2 → 0 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `munmap`                                             | `<unknown>`       |
|  -50.0% | -1.00ms | 0.1% → <0.1% | 2.0ms → 1.0ms |   2 → 1 | `ZSTD_encodeSequences`                               | `<unknown>`       |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `__read`                                             | `<unknown>`       |
|  -50.0% | -1.00ms | 0.1% → <0.1% | 2.0ms → 1.0ms |   2 → 1 | `HUF_buildCTable_wksp`                               | `<unknown>`       |

##### Ours

|  Change |   Delta |           % |        Time | Samples | Function                                             | Location          |
| ------: | ------: | ----------: | ----------: | ------: | ---------------------------------------------------- | ----------------- |
| removed | -2.00ms | 0.1% → 0.0% | 2.0ms → 0ms |   2 → 0 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

| Change |     Delta |      % |          Time |       Samples | Caller                    | Location     |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------- | ------------ |
| +31.5% | +398.00ms | 100.0% | 1.26s → 1.66s | 1,262 → 1,660 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

| Change |    Delta |             % |              Time |   Samples | Caller                        | Location          |
| -----: | -------: | ------------: | ----------------: | --------: | ----------------------------- | ----------------- |
|  +9.8% | +29.00ms | 97.0% → 95.9% | 295.0ms → 324.0ms | 295 → 324 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
| +55.6% |  +5.00ms |   3.0% → 4.1% |    9.0ms → 14.0ms |    9 → 14 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`)

| Change |   Delta |              % |            Time | Samples | Caller                        | Location          |
| -----: | ------: | -------------: | --------------: | ------: | ----------------------------- | ----------------- |
| +21.4% | +3.00ms | 100.0% → 94.4% | 14.0ms → 17.0ms | 14 → 17 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|    new | +1.00ms |    0.0% → 5.6% |     0ms → 1.0ms |   0 → 1 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`)

|  Change |   Delta |      % |          Time | Samples | Caller                          | Location     |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------- | ------------ |
| +150.0% | +3.00ms | 100.0% | 2.0ms → 5.0ms |   2 → 5 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`)

| Change |   Delta |             % |        Time | Samples | Caller            | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ----------------- | ----------- |
|    new | +3.00ms | 0.0% → 100.0% | 0ms → 3.0ms |   0 → 3 | `ZSTD_splitBlock` | `<unknown>` |

##### `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`)

|  Change |   Delta |              % |          Time | Samples | Caller                        | Location          |
| ------: | ------: | -------------: | ------------: | ------: | ----------------------------- | ----------------- |
| +300.0% | +3.00ms | 50.0% → 100.0% | 1.0ms → 4.0ms |   1 → 4 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
| removed | -1.00ms |   50.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `HIST_count_parallel_wksp` (`hist.c`)

|  Change |   Delta |              % |          Time | Samples | Caller                                               | Location          |
| ------: | ------: | -------------: | ------------: | ------: | ---------------------------------------------------- | ----------------- |
| +100.0% | +1.00ms | 100.0% → 66.7% | 1.0ms → 2.0ms |   1 → 2 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |
|     new | +1.00ms |   0.0% → 33.3% |   0ms → 1.0ms |   0 → 1 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c` |

##### `ZSTD_seqToCodes` (`<unknown>`)

| Change |   Delta |              % |          Time | Samples | Caller                              | Location          |
| -----: | ------: | -------------: | ------------: | ------: | ----------------------------------- | ----------------- |
|    new | +2.00ms |   0.0% → 66.7% |   0ms → 2.0ms |   0 → 2 | `ZSTD_buildBlockEntropyStats`       | `<unknown>`       |
| -50.0% | -1.00ms | 100.0% → 33.3% | 2.0ms → 1.0ms |   2 → 1 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                         | Location          |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------ | ----------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `ZSTD_deriveBlockSplitsHelper` | `zstd_compress.c` |

##### `munmap` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller               | Location           |
| ------: | ------: | ------------: | ----------: | ------: | -------------------- | ------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `AIO_IOPool_destroy` | `fileio_asyncio.c` |

##### `ZSTD_encodeSequences` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                              | Location          |
| -----: | ------: | -----: | ------------: | ------: | ----------------------------------- | ----------------- |
| -50.0% | -1.00ms | 100.0% | 2.0ms → 1.0ms |   2 → 1 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `__read` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `<unknown>` |

##### `HUF_buildCTable_wksp` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                | Location    |
| -----: | ------: | -----: | ------------: | ------: | --------------------- | ----------- |
| -50.0% | -1.00ms | 100.0% | 2.0ms → 1.0ms |   2 → 1 | `HUF_optimalTableLog` | `<unknown>` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |     Delta |             % |              Time |       Samples | Function                                 | Location            |
| ------: | --------: | ------------: | ----------------: | ------------: | ---------------------------------------- | ------------------- |
|  +27.7% | +443.00ms | 99.6% → 99.8% |     1.59s → 2.04s | 1,597 → 2,040 | `ZSTD_compress_frameChunk`               | `zstd_compress.c`   |
|  +27.7% | +443.00ms | 99.8% → 99.9% |     1.59s → 2.04s | 1,599 → 2,042 | `ZSTDMT_compressionJob`                  | `zstdmt_compress.c` |
|  +27.6% | +442.00ms | 99.8% → 99.9% |     1.60s → 2.04s | 1,600 → 2,042 | `POOL_thread`                            | `pool.c`            |
|  +27.8% | +441.00ms | 99.0% → 99.2% |     1.58s → 2.02s | 1,587 → 2,028 | `ZSTD_buildSeqStore`                     | `zstd_compress.c`   |
|  +27.5% | +441.00ms |        100.0% |     1.60s → 2.04s | 1,603 → 2,044 | `(anonymous)`                            | `<unknown>`         |
|  +27.7% | +435.00ms | 97.8% → 98.0% |        1.56s → 2s | 1,568 → 2,003 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c`        |
|  +31.0% | +414.00ms | 83.3% → 85.6% |     1.33s → 1.75s | 1,336 → 1,750 | `ZSTD_compressContinue_public`           | `<unknown>`         |
|  +31.7% | +401.00ms | 78.9% → 81.5% |     1.26s → 1.66s | 1,264 → 1,665 | `ZSTD_btGetAllMatches_noDict_3`          | `zstd_opt.c`        |
|  +11.1% |  +29.00ms | 16.3% → 14.2% | 261.0ms → 290.0ms |     261 → 290 | `ZSTD_compressEnd_public`                | `<unknown>`         |
|  +43.8% |   +7.00ms |   1.0% → 1.1% |   16.0ms → 23.0ms |       16 → 23 | `ZSTD_compressBlock_btultra2`            | `<unknown>`         |
|  +28.6% |   +4.00ms |          0.9% |   14.0ms → 18.0ms |       14 → 18 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c`        |
| +150.0% |   +3.00ms |   0.1% → 0.2% |     2.0ms → 5.0ms |         2 → 5 | `ZSTD_insertBt1.constprop.3`             | `zstd_opt.c`        |
|     new |   +3.00ms |   0.0% → 0.1% |       0ms → 3.0ms |         0 → 3 | `ZSTD_recordFingerprint_1`               | `zstd_preSplit.c`   |
|     new |   +3.00ms |   0.0% → 0.1% |       0ms → 3.0ms |         0 → 3 | `ZSTD_splitBlock`                        | `<unknown>`         |
| +100.0% |   +2.00ms |   0.1% → 0.2% |     2.0ms → 4.0ms |         2 → 4 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c`        |
| +200.0% |   +2.00ms |          0.1% |     1.0ms → 3.0ms |         1 → 3 | `HIST_count_parallel_wksp`               | `hist.c`            |
|  +50.0% |   +1.00ms |          0.1% |     2.0ms → 3.0ms |         2 → 3 | `ZSTD_seqToCodes`                        | `<unknown>`         |
| +100.0% |   +1.00ms |          0.1% |     1.0ms → 2.0ms |         1 → 2 | `ZSTD_buildSequencesStatistics`          | `zstd_compress.c`   |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `pthread_cond_wait`                      | `<unknown>`         |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `ZSTDMT_compressStream_generic`          | `<unknown>`         |

##### Ours

|  Change |     Delta |             % |            Time |       Samples | Function                                 | Location            |
| ------: | --------: | ------------: | --------------: | ------------: | ---------------------------------------- | ------------------- |
|  +27.7% | +443.00ms | 99.6% → 99.8% |   1.59s → 2.04s | 1,597 → 2,040 | `ZSTD_compress_frameChunk`               | `zstd_compress.c`   |
|  +27.7% | +443.00ms | 99.8% → 99.9% |   1.59s → 2.04s | 1,599 → 2,042 | `ZSTDMT_compressionJob`                  | `zstdmt_compress.c` |
|  +27.6% | +442.00ms | 99.8% → 99.9% |   1.60s → 2.04s | 1,600 → 2,042 | `POOL_thread`                            | `pool.c`            |
|  +27.8% | +441.00ms | 99.0% → 99.2% |   1.58s → 2.02s | 1,587 → 2,028 | `ZSTD_buildSeqStore`                     | `zstd_compress.c`   |
|  +27.7% | +435.00ms | 97.8% → 98.0% |      1.56s → 2s | 1,568 → 2,003 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c`        |
|  +31.7% | +401.00ms | 78.9% → 81.5% |   1.26s → 1.66s | 1,264 → 1,665 | `ZSTD_btGetAllMatches_noDict_3`          | `zstd_opt.c`        |
|  +28.6% |   +4.00ms |          0.9% | 14.0ms → 18.0ms |       14 → 18 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c`        |
| +150.0% |   +3.00ms |   0.1% → 0.2% |   2.0ms → 5.0ms |         2 → 5 | `ZSTD_insertBt1.constprop.3`             | `zstd_opt.c`        |
|     new |   +3.00ms |   0.0% → 0.1% |     0ms → 3.0ms |         0 → 3 | `ZSTD_recordFingerprint_1`               | `zstd_preSplit.c`   |
| +100.0% |   +2.00ms |   0.1% → 0.2% |   2.0ms → 4.0ms |         2 → 4 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c`        |
| +200.0% |   +2.00ms |          0.1% |   1.0ms → 3.0ms |         1 → 3 | `HIST_count_parallel_wksp`               | `hist.c`            |
| +100.0% |   +1.00ms |          0.1% |   1.0ms → 2.0ms |         1 → 2 | `ZSTD_buildSequencesStatistics`          | `zstd_compress.c`   |

#### Improvements

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |            % |          Time | Samples | Function                                             | Location           |
| ------: | ------: | -----------: | ------------: | ------: | ---------------------------------------------------- | ------------------ |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `munmap`                                             | `<unknown>`        |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `AIO_IOPool_destroy`                                 | `fileio_asyncio.c` |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `AIO_WritePool_free`                                 | `<unknown>`        |
|  -33.3% | -1.00ms |  0.2% → 0.1% | 3.0ms → 2.0ms |   3 → 2 | `FIO_compressFilename`                               | `<unknown>`        |
|  -33.3% | -1.00ms |  0.2% → 0.1% | 3.0ms → 2.0ms |   3 → 2 | `main`                                               | `<unknown>`        |
|  -33.3% | -1.00ms |  0.2% → 0.1% | 3.0ms → 2.0ms |   3 → 2 | `__libc_start_main`                                  | `<unknown>`        |
|  -33.3% | -1.00ms |  0.2% → 0.1% | 3.0ms → 2.0ms |   3 → 2 | `_start`                                             | `<unknown>`        |
|  -50.0% | -1.00ms | 0.1% → <0.1% | 2.0ms → 1.0ms |   2 → 1 | `ZSTD_encodeSequences`                               | `<unknown>`        |
|  -16.7% | -1.00ms |  0.4% → 0.2% | 6.0ms → 5.0ms |   6 → 5 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`  |
|  -16.7% | -1.00ms |  0.4% → 0.2% | 6.0ms → 5.0ms |   6 → 5 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`  |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `__read`                                             | `<unknown>`        |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `_IO_fread`                                          | `<unknown>`        |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `AIO_ReadPool_executeReadJob`                        | `fileio_asyncio.c` |
|  -50.0% | -1.00ms | 0.1% → <0.1% | 2.0ms → 1.0ms |   2 → 1 | `HUF_buildCTable_wksp`                               | `<unknown>`        |
|  -50.0% | -1.00ms | 0.1% → <0.1% | 2.0ms → 1.0ms |   2 → 1 | `HUF_optimalTableLog`                                | `<unknown>`        |

##### Ours

|  Change |   Delta |           % |          Time | Samples | Function                                             | Location           |
| ------: | ------: | ----------: | ------------: | ------: | ---------------------------------------------------- | ------------------ |
| removed | -1.00ms | 0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `AIO_IOPool_destroy`                                 | `fileio_asyncio.c` |
|  -16.7% | -1.00ms | 0.4% → 0.2% | 6.0ms → 5.0ms |   6 → 5 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`  |
|  -16.7% | -1.00ms | 0.4% → 0.2% | 6.0ms → 5.0ms |   6 → 5 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`  |
| removed | -1.00ms | 0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `AIO_ReadPool_executeReadJob`                        | `fileio_asyncio.c` |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `ZSTD_compress_frameChunk` (`zstd_compress.c`)

| Change |     Delta |             % |              Time |       Samples | Caller                         | Location    |
| -----: | --------: | ------------: | ----------------: | ------------: | ------------------------------ | ----------- |
| +31.0% | +414.00ms | 83.7% → 85.8% |     1.33s → 1.75s | 1,336 → 1,750 | `ZSTD_compressContinue_public` | `<unknown>` |
| +11.1% |  +29.00ms | 16.3% → 14.2% | 261.0ms → 290.0ms |     261 → 290 | `ZSTD_compressEnd_public`      | `<unknown>` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

| Change |     Delta |      % |          Time |       Samples | Caller        | Location |
| -----: | --------: | -----: | ------------: | ------------: | ------------- | -------- |
| +27.7% | +443.00ms | 100.0% | 1.59s → 2.04s | 1,599 → 2,042 | `POOL_thread` | `pool.c` |

##### `POOL_thread` (`pool.c`)

| Change |     Delta |      % |          Time |       Samples | Caller        | Location    |
| -----: | --------: | -----: | ------------: | ------------: | ------------- | ----------- |
| +27.6% | +442.00ms | 100.0% | 1.60s → 2.04s | 1,600 → 2,042 | `(anonymous)` | `<unknown>` |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

| Change |     Delta |      % |          Time |       Samples | Caller                     | Location          |
| -----: | --------: | -----: | ------------: | ------------: | -------------------------- | ----------------- |
| +27.8% | +441.00ms | 100.0% | 1.58s → 2.02s | 1,587 → 2,028 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `(anonymous)` (`<unknown>`)

|  Change |     Delta |             % |          Time |       Samples | Caller                 | Location    |
| ------: | --------: | ------------: | ------------: | ------------: | ---------------------- | ----------- |
|  +27.6% | +442.00ms | 99.8% → 99.9% | 1.60s → 2.04s | 1,600 → 2,042 | `(anonymous)`          | `<unknown>` |
|  -33.3% |   -1.00ms |   0.2% → 0.1% | 3.0ms → 2.0ms |         3 → 2 | `__libc_start_main`    | `<unknown>` |
| removed |   -1.00ms |   0.1% → 0.0% |   1.0ms → 0ms |         1 → 0 | `_IO_fread`            | `<unknown>` |
|  -50.0% |   -1.00ms |  0.1% → <0.1% | 2.0ms → 1.0ms |         2 → 1 | `ZSTD_compressStream2` | `<unknown>` |
|     new |   +1.00ms |  0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `pthread_cond_wait`    | `<unknown>` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

| Change |     Delta |             % |            Time |       Samples | Caller                        | Location          |
| -----: | --------: | ------------: | --------------: | ------------: | ----------------------------- | ----------------- |
| +27.6% | +428.00ms | 99.0% → 98.9% |   1.55s → 1.98s | 1,553 → 1,981 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
| +46.7% |   +7.00ms |   1.0% → 1.1% | 15.0ms → 22.0ms |       15 → 22 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_compressContinue_public` (`<unknown>`)

| Change |     Delta |      % |          Time |       Samples | Caller                  | Location            |
| -----: | --------: | -----: | ------------: | ------------: | ----------------------- | ------------------- |
| +31.0% | +414.00ms | 100.0% | 1.33s → 1.75s | 1,336 → 1,750 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

| Change |     Delta |      % |          Time |       Samples | Caller                    | Location     |
| -----: | --------: | -----: | ------------: | ------------: | ------------------------- | ------------ |
| +31.7% | +401.00ms | 100.0% | 1.26s → 1.66s | 1,264 → 1,665 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_compressEnd_public` (`<unknown>`)

| Change |    Delta |      % |              Time |   Samples | Caller                  | Location            |
| -----: | -------: | -----: | ----------------: | --------: | ----------------------- | ------------------- |
| +11.1% | +29.00ms | 100.0% | 261.0ms → 290.0ms | 261 → 290 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTD_compressBlock_btultra2` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Caller               | Location          |
| -----: | ------: | -----: | --------------: | ------: | -------------------- | ----------------- |
| +43.8% | +7.00ms | 100.0% | 16.0ms → 23.0ms | 16 → 23 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`)

| Change |   Delta |              % |            Time | Samples | Caller                        | Location          |
| -----: | ------: | -------------: | --------------: | ------: | ----------------------------- | ----------------- |
| +21.4% | +3.00ms | 100.0% → 94.4% | 14.0ms → 17.0ms | 14 → 17 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|    new | +1.00ms |    0.0% → 5.6% |     0ms → 1.0ms |   0 → 1 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`)

|  Change |   Delta |      % |          Time | Samples | Caller                          | Location     |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------- | ------------ |
| +150.0% | +3.00ms | 100.0% | 2.0ms → 5.0ms |   2 → 5 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`)

| Change |   Delta |             % |        Time | Samples | Caller            | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ----------------- | ----------- |
|    new | +3.00ms | 0.0% → 100.0% | 0ms → 3.0ms |   0 → 3 | `ZSTD_splitBlock` | `<unknown>` |

##### `ZSTD_splitBlock` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                     | Location          |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------- | ----------------- |
|    new | +3.00ms | 0.0% → 100.0% | 0ms → 3.0ms |   0 → 3 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`)

|  Change |   Delta |              % |          Time | Samples | Caller                        | Location          |
| ------: | ------: | -------------: | ------------: | ------: | ----------------------------- | ----------------- |
| +300.0% | +3.00ms | 50.0% → 100.0% | 1.0ms → 4.0ms |   1 → 4 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
| removed | -1.00ms |   50.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `ZSTD_compressBlock_btultra2` | `<unknown>`       |

##### `HIST_count_parallel_wksp` (`hist.c`)

|  Change |   Delta |              % |          Time | Samples | Caller                                               | Location          |
| ------: | ------: | -------------: | ------------: | ------: | ---------------------------------------------------- | ----------------- |
| +100.0% | +1.00ms | 100.0% → 66.7% | 1.0ms → 2.0ms |   1 → 2 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |
|     new | +1.00ms |   0.0% → 33.3% |   0ms → 1.0ms |   0 → 1 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c` |

##### `ZSTD_seqToCodes` (`<unknown>`)

| Change |   Delta |              % |          Time | Samples | Caller                              | Location          |
| -----: | ------: | -------------: | ------------: | ------: | ----------------------------------- | ----------------- |
|    new | +2.00ms |   0.0% → 66.7% |   0ms → 2.0ms |   0 → 2 | `ZSTD_buildBlockEntropyStats`       | `<unknown>`       |
| -50.0% | -1.00ms | 100.0% → 33.3% | 2.0ms → 1.0ms |   2 → 1 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                              | Location          |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------- | ----------------- |
|     new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_buildBlockEntropyStats`       | `<unknown>`       |

##### `pthread_cond_wait` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                          | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `ZSTDMT_compressStream_generic` | `<unknown>` |

##### `ZSTDMT_compressStream_generic` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                 | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ---------------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `ZSTD_compressStream2` | `<unknown>` |

##### `munmap` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller               | Location           |
| ------: | ------: | ------------: | ----------: | ------: | -------------------- | ------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `AIO_IOPool_destroy` | `fileio_asyncio.c` |

##### `AIO_IOPool_destroy` (`fileio_asyncio.c`)

|  Change |   Delta |             % |        Time | Samples | Caller               | Location    |
| ------: | ------: | ------------: | ----------: | ------: | -------------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `AIO_WritePool_free` | `<unknown>` |

##### `AIO_WritePool_free` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                 | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `FIO_compressFilename` | `<unknown>` |

##### `FIO_compressFilename` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller | Location    |
| -----: | ------: | -----: | ------------: | ------: | ------ | ----------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `main` | `<unknown>` |

##### `main` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller        | Location    |
| -----: | ------: | -----: | ------------: | ------: | ------------- | ----------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `(anonymous)` | `<unknown>` |

##### `__libc_start_main` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller   | Location    |
| -----: | ------: | -----: | ------------: | ------: | -------- | ----------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `_start` | `<unknown>` |

##### `ZSTD_encodeSequences` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                              | Location          |
| -----: | ------: | -----: | ------------: | ------: | ----------------------------------- | ----------------- |
| -50.0% | -1.00ms | 100.0% | 2.0ms → 1.0ms |   2 → 1 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

| Change |   Delta |      % |          Time | Samples | Caller                         | Location          |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------ | ----------------- |
| -16.7% | -1.00ms | 100.0% | 6.0ms → 5.0ms |   6 → 5 | `ZSTD_deriveBlockSplitsHelper` | `zstd_compress.c` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

| Change |   Delta |      % |          Time | Samples | Caller                     | Location          |
| -----: | ------: | -----: | ------------: | ------: | -------------------------- | ----------------- |
| -16.7% | -1.00ms | 100.0% | 6.0ms → 5.0ms |   6 → 5 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `__read` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `<unknown>` |

##### `_IO_fread` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                        | Location           |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------- | ------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `AIO_ReadPool_executeReadJob` | `fileio_asyncio.c` |

##### `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | -------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `POOL_thread` | `pool.c` |

##### `HUF_buildCTable_wksp` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                | Location    |
| -----: | ------: | -----: | ------------: | ------: | --------------------- | ----------- |
| -50.0% | -1.00ms | 100.0% | 2.0ms → 1.0ms |   2 → 1 | `HUF_optimalTableLog` | `<unknown>` |

##### `HUF_optimalTableLog` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                        | Location    |
| -----: | ------: | -----: | ------------: | ------: | ----------------------------- | ----------- |
| -50.0% | -1.00ms | 100.0% | 2.0ms → 1.0ms |   2 → 1 | `ZSTD_buildBlockEntropyStats` | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `ZSTD_compress_frameChunk` (`zstd_compress.c`)

| Change |     Delta |           % |          Time |       Samples | Callee                         | Location          |
| -----: | --------: | ----------: | ------------: | ------------: | ------------------------------ | ----------------- |
| +27.8% | +441.00ms |       99.4% | 1.58s → 2.02s | 1,587 → 2,028 | `ZSTD_buildSeqStore`           | `zstd_compress.c` |
|    new |   +3.00ms | 0.0% → 0.1% |   0ms → 3.0ms |         0 → 3 | `ZSTD_splitBlock`              | `<unknown>`       |
| -16.7% |   -1.00ms | 0.4% → 0.2% | 6.0ms → 5.0ms |         6 → 5 | `ZSTD_deriveBlockSplitsHelper` | `zstd_compress.c` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

| Change |     Delta |             % |              Time |       Samples | Callee                         | Location    |
| -----: | --------: | ------------: | ----------------: | ------------: | ------------------------------ | ----------- |
| +31.0% | +414.00ms | 83.6% → 85.7% |     1.33s → 1.75s | 1,336 → 1,750 | `ZSTD_compressContinue_public` | `<unknown>` |
| +11.1% |  +29.00ms | 16.3% → 14.2% | 261.0ms → 290.0ms |     261 → 290 | `ZSTD_compressEnd_public`      | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|  Change |     Delta |              % |          Time |       Samples | Callee                        | Location            |
| ------: | --------: | -------------: | ------------: | ------------: | ----------------------------- | ------------------- |
|  +27.7% | +443.00ms | 99.9% → 100.0% | 1.59s → 2.04s | 1,599 → 2,042 | `ZSTDMT_compressionJob`       | `zstdmt_compress.c` |
| removed |   -1.00ms |    0.1% → 0.0% |   1.0ms → 0ms |         1 → 0 | `AIO_ReadPool_executeReadJob` | `fileio_asyncio.c`  |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|  Change |     Delta |             % |            Time |       Samples | Callee                                   | Location     |
| ------: | --------: | ------------: | --------------: | ------------: | ---------------------------------------- | ------------ |
|  +27.6% | +428.00ms | 97.9% → 97.7% |   1.55s → 1.98s | 1,553 → 1,981 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c` |
|  +43.8% |   +7.00ms |   1.0% → 1.1% | 16.0ms → 23.0ms |       16 → 23 | `ZSTD_compressBlock_btultra2`            | `<unknown>`  |
|  +21.4% |   +3.00ms |   0.9% → 0.8% | 14.0ms → 17.0ms |       14 → 17 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c` |
| +300.0% |   +3.00ms |   0.1% → 0.2% |   1.0ms → 4.0ms |         1 → 4 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c` |

##### `(anonymous)` (`<unknown>`)

|  Change |     Delta |             % |          Time |       Samples | Callee        | Location    |
| ------: | --------: | ------------: | ------------: | ------------: | ------------- | ----------- |
|  +27.6% | +442.00ms | 99.8% → 99.9% | 1.60s → 2.04s | 1,600 → 2,042 | `POOL_thread` | `pool.c`    |
|  +27.6% | +442.00ms | 99.8% → 99.9% | 1.60s → 2.04s | 1,600 → 2,042 | `(anonymous)` | `<unknown>` |
|  -33.3% |   -1.00ms |   0.2% → 0.1% | 3.0ms → 2.0ms |         3 → 2 | `main`        | `<unknown>` |
| removed |   -1.00ms |   0.1% → 0.0% |   1.0ms → 0ms |         1 → 0 | `__read`      | `<unknown>` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

| Change |     Delta |             % |          Time |       Samples | Callee                          | Location     |
| -----: | --------: | ------------: | ------------: | ------------: | ------------------------------- | ------------ |
| +31.7% | +401.00ms | 80.6% → 83.1% | 1.26s → 1.66s | 1,264 → 1,665 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_compressContinue_public` (`<unknown>`)

| Change |     Delta |      % |          Time |       Samples | Callee                     | Location          |
| -----: | --------: | -----: | ------------: | ------------: | -------------------------- | ----------------- |
| +31.0% | +414.00ms | 100.0% | 1.33s → 1.75s | 1,336 → 1,750 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|  Change |   Delta |           % |          Time | Samples | Callee                       | Location     |
| ------: | ------: | ----------: | ------------: | ------: | ---------------------------- | ------------ |
| +150.0% | +3.00ms | 0.2% → 0.3% | 2.0ms → 5.0ms |   2 → 5 | `ZSTD_insertBt1.constprop.3` | `zstd_opt.c` |

##### `ZSTD_compressEnd_public` (`<unknown>`)

| Change |    Delta |      % |              Time |   Samples | Callee                     | Location          |
| -----: | -------: | -----: | ----------------: | --------: | -------------------------- | ----------------- |
| +11.1% | +29.00ms | 100.0% | 261.0ms → 290.0ms | 261 → 290 | `ZSTD_compress_frameChunk` | `zstd_compress.c` |

##### `ZSTD_compressBlock_btultra2` (`<unknown>`)

|  Change |   Delta |             % |            Time | Samples | Callee                                   | Location     |
| ------: | ------: | ------------: | --------------: | ------: | ---------------------------------------- | ------------ |
|  +46.7% | +7.00ms | 93.8% → 95.7% | 15.0ms → 22.0ms | 15 → 22 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c` |
| removed | -1.00ms |   6.3% → 0.0% |     1.0ms → 0ms |   1 → 0 | `ZSTD_litLengthPrice.constprop.0.isra.0` | `zstd_opt.c` |
|     new | +1.00ms |   0.0% → 4.3% |     0ms → 1.0ms |   0 → 1 | `ZSTD_litLengthPrice.constprop.1.isra.0` | `zstd_opt.c` |

##### `ZSTD_splitBlock` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Callee                     | Location          |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------- | ----------------- |
|    new | +3.00ms | 0.0% → 100.0% | 0ms → 3.0ms |   0 → 3 | `ZSTD_recordFingerprint_1` | `zstd_preSplit.c` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

| Change |   Delta |            % |        Time | Samples | Callee                     | Location |
| -----: | ------: | -----------: | ----------: | ------: | -------------------------- | -------- |
|    new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `HIST_count_parallel_wksp` | `hist.c` |

##### `pthread_cond_wait` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Callee        | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `(anonymous)` | `<unknown>` |

##### `ZSTDMT_compressStream_generic` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Callee              | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ------------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `pthread_cond_wait` | `<unknown>` |

##### `AIO_IOPool_destroy` (`fileio_asyncio.c`)

|  Change |   Delta |             % |        Time | Samples | Callee   | Location    |
| ------: | ------: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `munmap` | `<unknown>` |

##### `AIO_WritePool_free` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Callee               | Location           |
| ------: | ------: | ------------: | ----------: | ------: | -------------------- | ------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `AIO_IOPool_destroy` | `fileio_asyncio.c` |

##### `FIO_compressFilename` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Callee               | Location    |
| ------: | ------: | -----------: | ----------: | ------: | -------------------- | ----------- |
| removed | -1.00ms | 33.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `AIO_WritePool_free` | `<unknown>` |

##### `main` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Callee                 | Location    |
| -----: | ------: | -----: | ------------: | ------: | ---------------------- | ----------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `FIO_compressFilename` | `<unknown>` |

##### `__libc_start_main` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Callee        | Location    |
| -----: | ------: | -----: | ------------: | ------: | ------------- | ----------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `(anonymous)` | `<unknown>` |

##### `_start` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Callee              | Location    |
| -----: | ------: | -----: | ------------: | ------: | ------------------- | ----------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `__libc_start_main` | `<unknown>` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|  Change |   Delta |             % |          Time | Samples | Callee                     | Location |
| ------: | ------: | ------------: | ------------: | ------: | -------------------------- | -------- |
| +100.0% | +1.00ms | 16.7% → 40.0% | 1.0ms → 2.0ms |   1 → 2 | `HIST_count_parallel_wksp` | `hist.c` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

| Change |   Delta |      % |          Time | Samples | Callee                                               | Location          |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------------------------- | ----------------- |
| -16.7% | -1.00ms | 100.0% | 6.0ms → 5.0ms |   6 → 5 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `_IO_fread` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Callee        | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `(anonymous)` | `<unknown>` |

##### `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`)

|  Change |   Delta |             % |        Time | Samples | Callee      | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ----------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `_IO_fread` | `<unknown>` |

##### `HUF_optimalTableLog` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Callee                 | Location    |
| -----: | ------: | -----: | ------------: | ------: | ---------------------- | ----------- |
| -50.0% | -1.00ms | 100.0% | 2.0ms → 1.0ms |   2 → 1 | `HUF_buildCTable_wksp` | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

|  Change |     Delta |             % |              Time |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                              |
| ------: | --------: | ------------: | ----------------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +35.7% | +372.00ms | 65.1% → 69.2% |     1.04s → 1.41s | 1,043 → 1,415 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                          |
|  +11.3% |  +24.00ms | 13.3% → 11.6% | 213.0ms → 237.0ms |     213 → 237 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                               |
|   +8.3% |  +21.00ms | 15.8% → 13.5% | 254.0ms → 275.0ms |     254 → 275 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                            |
|  +19.5% |   +8.00ms |   2.6% → 2.4% |   41.0ms → 49.0ms |       41 → 49 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                 |
|  +66.7% |   +6.00ms |   0.6% → 0.7% |    9.0ms → 15.0ms |        9 → 15 | `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                             |
|  +55.6% |   +5.00ms |   0.6% → 0.7% |    9.0ms → 14.0ms |        9 → 14 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                            |
| +300.0% |   +3.00ms |   0.1% → 0.2% |     1.0ms → 4.0ms |         1 → 4 | `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                             |
|     new |   +3.00ms |   0.0% → 0.1% |       0ms → 3.0ms |         0 → 3 | `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`) ← `ZSTD_splitBlock` ← `ZSTD_compress_frameChunk` (`zstd_compress.c`) ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                         |
| +100.0% |   +2.00ms |   0.1% → 0.2% |     2.0ms → 4.0ms |         2 → 4 | `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                           |
|  +33.3% |   +2.00ms |          0.4% |     6.0ms → 8.0ms |         6 → 8 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                          |
| +100.0% |   +1.00ms |          0.1% |     1.0ms → 2.0ms |         1 → 2 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                              |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `(anonymous)` ← `pthread_cond_wait` ← `ZSTDMT_compressStream_generic` ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                         |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `ZSTD_seqToCodes` ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)` |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `ZSTD_seqToCodes` ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                       |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                              |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `ZSTD_insertBt1.constprop.3` (`zstd_opt.c`) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                             |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `FSE_buildCTable_wksp` ← `ZSTD_buildCTable` ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                        |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

|  Change |   Delta |            % |          Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------: | ------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -60.0% | -3.00ms |  0.3% → 0.1% | 5.0ms → 2.0ms |   5 → 2 | `ZSTD_litLengthPrice.constprop.1.isra.0` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                                                  |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `munmap` ← `AIO_IOPool_destroy` (`fileio_asyncio.c`) ← `AIO_WritePool_free` ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                          |
|  -50.0% | -1.00ms | 0.1% → <0.1% | 2.0ms → 1.0ms |   2 → 1 | `ZSTD_encodeSequences` ← `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                                                               |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `ZSTD_litLengthPrice.constprop.0.isra.0` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                             |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `__read` ← `(anonymous)` ← `_IO_fread` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                                                                                                                                                                  |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `ZSTD_seqToCodes` ← `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`) ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                                                                         |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                                           |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                                                                                                      |
| removed | -1.00ms |  0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `FSE_buildCTable_wksp` ← `ZSTD_buildCTable` ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)` |
|  -50.0% | -1.00ms | 0.1% → <0.1% | 2.0ms → 1.0ms |   2 → 1 | `HUF_buildCTable_wksp` ← `HUF_optimalTableLog` ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compress_frameChunk` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `(anonymous)` ← `(anonymous)`                                                                                     |
|  -50.0% | -1.00ms | 0.1% → <0.1% | 2.0ms → 1.0ms |   2 → 1 | `(anonymous)` ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                 |

# CPU profile

Took 12s over 12,009 samples (1.0ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| Ours     | 99.8% | 11.99s |  11,990 |
| Kernel   |  0.1% | 10.0ms |      10 |
| Native   |  0.1% |  9.0ms |       9 |

## Call tree

Call paths to the hottest functions.

```
└── 11.99s (99.9%) unknown (libc.so.6)
    └── 11.98s (99.8%) [[via 3 frames]] ZSTD_compressContinue_internal  zstd_compress.c
        ├── 11.92s (99.3%) ZSTD_buildSeqStore
        │   ├── 11.70s (97.5%) ZSTD_compressBlock_opt2  (self 14.3%)  zstd_opt.c
        │   │   ├── 9.96s (82.9%) ZSTD_btGetAllMatches_noDict_3  (self 82.7%)
        │   │   │   └── 28.0ms (0.2%) ZSTD_insertBt1
        │   │   └── 24.0ms (0.2%) ZSTD_insertAndFindFirstIndexHash3
        │   ├── 126.0ms (1.0%) ZSTD_litLengthPrice  zstd_opt.c
        │   ├── 36.0ms (0.3%) ZSTD_rawLiteralsCost  zstd_opt.c
        │   ├── 27.0ms (0.2%) ZSTD_updateStats  zstd_opt.c
        │   └── 7.0ms (0.1%) ZSTD_optLdm_processMatchCandidate  zstd_opt.c
        ├── 26.0ms (0.2%) ZSTD_compressSeqStore_singleBlock
        │   └── 26.0ms (0.2%) ZSTD_entropyCompressSeqStore_internal
        │       ├── 11.0ms (0.1%) ZSTD_buildSequencesStatistics
        │       │   └── 8.0ms (0.1%) HIST_count_parallel_wksp  hist.c
        │       └── 10.0ms (0.1%) ZSTD_encodeSequences  zstd_compress_sequences.c
        └── 16.0ms (0.1%) [[via 2 frames]] ZSTD_estimateBlockSize_symbolType  zstd_compress.c
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|     % |    Time | Samples | Function                            | Location                    |
| ----: | ------: | ------: | ----------------------------------- | --------------------------- |
| 82.8% |   9.94s |   9,943 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c`                |
| 14.4% |   1.72s |   1,728 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c`                |
|  1.1% | 127.0ms |     127 | `ZSTD_litLengthPrice`               | `zstd_opt.c`                |
|  0.3% |  36.0ms |      36 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c`                |
|  0.2% |  28.0ms |      28 | `ZSTD_updateStats`                  | `zstd_opt.c`                |
|  0.2% |  28.0ms |      28 | `ZSTD_insertBt1`                    | `zstd_opt.c`                |
|  0.2% |  24.0ms |      24 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c`                |
|  0.2% |  19.0ms |      19 | `HIST_count_parallel_wksp`          | `hist.c`                    |
|  0.1% |  10.0ms |      10 | `ZSTD_encodeSequences`              | `zstd_compress_sequences.c` |
|  0.1% |   9.0ms |       9 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c`           |
|  0.1% |   8.0ms |       8 | `unknown (libc.so.6)`               | `<unknown>`                 |
|  0.1% |   7.0ms |       7 | `ZSTD_XXH64_update`                 | `xxhash.h`                  |
|  0.1% |   7.0ms |       7 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c`                |
| <0.1% |   6.0ms |       6 | `clear_page ([kernel])`             | `<unknown>`                 |
| <0.1% |   6.0ms |       6 | `ZSTD_seqToCodes`                   | `zstd_compress.c`           |
| <0.1% |   5.0ms |       5 | `FSE_buildCTable_wksp`              | `fse_compress.c`            |
| <0.1% |   4.0ms |       4 | `HIST_count_simple`                 | `hist.c`                    |
| <0.1% |   3.0ms |       3 | `__arch_copy_to_user ([kernel])`    | `<unknown>`                 |
| <0.1% |   2.0ms |       2 | `HUF_buildCTable_wksp`              | `huf_compress.c`            |
| <0.1% |   2.0ms |       2 | `FSE_compress_usingCTable_generic`  | `fse_compress.c`            |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function                            | Location                    |
| ----: | ------: | ------: | ----------------------------------- | --------------------------- |
| 82.8% |   9.94s |   9,943 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c`                |
| 14.4% |   1.72s |   1,728 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c`                |
|  1.1% | 127.0ms |     127 | `ZSTD_litLengthPrice`               | `zstd_opt.c`                |
|  0.3% |  36.0ms |      36 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c`                |
|  0.2% |  28.0ms |      28 | `ZSTD_updateStats`                  | `zstd_opt.c`                |
|  0.2% |  28.0ms |      28 | `ZSTD_insertBt1`                    | `zstd_opt.c`                |
|  0.2% |  24.0ms |      24 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c`                |
|  0.2% |  19.0ms |      19 | `HIST_count_parallel_wksp`          | `hist.c`                    |
|  0.1% |  10.0ms |      10 | `ZSTD_encodeSequences`              | `zstd_compress_sequences.c` |
|  0.1% |   9.0ms |       9 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c`           |
|  0.1% |   7.0ms |       7 | `ZSTD_XXH64_update`                 | `xxhash.h`                  |
|  0.1% |   7.0ms |       7 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c`                |
| <0.1% |   6.0ms |       6 | `ZSTD_seqToCodes`                   | `zstd_compress.c`           |
| <0.1% |   5.0ms |       5 | `FSE_buildCTable_wksp`              | `fse_compress.c`            |
| <0.1% |   4.0ms |       4 | `HIST_count_simple`                 | `hist.c`                    |
| <0.1% |   2.0ms |       2 | `HUF_buildCTable_wksp`              | `huf_compress.c`            |
| <0.1% |   2.0ms |       2 | `FSE_compress_usingCTable_generic`  | `fse_compress.c`            |
| <0.1% |   2.0ms |       2 | `ZSTD_deriveSeqStoreChunk`          | `zstd_compress.c`           |
| <0.1% |   1.0ms |       1 | `ZSTD_selectEncodingType`           | `zstd_compress_sequences.c` |
| <0.1% |   1.0ms |       1 | `FSE_writeNCount_generic`           | `fse_compress.c`            |

#### Lines

Lines with the largest contribution to each function's self time.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |  Time | Samples | Location         |
| -----: | ----: | ------: | ---------------- |
| 100.0% | 9.94s |   9,943 | `zstd_opt.c:876` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 1.72s |   1,728 | `zstd_opt.c:1455` |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 33.9% | 43.0ms |      43 | `zstd_opt.c:313` |
| 29.1% | 37.0ms |      37 | `zstd_opt.c:315` |
| 20.5% | 26.0ms |      26 | `zstd_opt.c:298` |
|  8.7% | 11.0ms |      11 | `zstd_opt.c:310` |
|  7.9% | 10.0ms |      10 | `zstd_opt.c:306` |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 69.4% | 25.0ms |      25 | `zstd_opt.c:266` |
| 19.4% |  7.0ms |       7 | `zstd_opt.c:276` |
| 11.1% |  4.0ms |       4 | `zstd_opt.c:273` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|     % |  Time | Samples | Location         |
| ----: | ----: | ------: | ---------------- |
| 25.0% | 7.0ms |       7 | `zstd_opt.c:377` |
| 17.9% | 5.0ms |       5 | `zstd_opt.c:384` |
| 17.9% | 5.0ms |       5 | `zstd_opt.c:378` |
| 14.3% | 4.0ms |       4 | `zstd_opt.c:385` |
| 10.7% | 3.0ms |       3 | `zstd_opt.c:371` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 35.7% | 10.0ms |      10 | `zstd_opt.c:545` |
| 17.9% |  5.0ms |       5 | `zstd_opt.c:489` |
| 14.3% |  4.0ms |       4 | `zstd_opt.c:518` |
|  7.1% |  2.0ms |       2 | `zstd_opt.c:528` |
|  7.1% |  2.0ms |       2 | `zstd_opt.c:538` |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 50.0% | 12.0ms |      12 | `zstd_opt.c:424` |
| 16.7% |  4.0ms |       4 | `zstd_opt.c:423` |
| 12.5% |  3.0ms |       3 | `zstd_opt.c:420` |
| 12.5% |  3.0ms |       3 | `zstd_opt.c:415` |
|  4.2% |  1.0ms |       1 | `zstd_opt.c:418` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |  Time | Samples | Location     |
| ----: | ----: | ------: | ------------ |
| 10.5% | 2.0ms |       2 | `hist.c:100` |
| 10.5% | 2.0ms |       2 | `hist.c:112` |
| 10.5% | 2.0ms |       2 | `hist.c:107` |
| 10.5% | 2.0ms |       2 | `hist.c:92`  |
| 10.5% | 2.0ms |       2 | `hist.c:101` |

##### `ZSTD_encodeSequences` (`zstd_compress_sequences.c`)

|      % |   Time | Samples | Location                        |
| -----: | -----: | ------: | ------------------------------- |
| 100.0% | 10.0ms |      10 | `zstd_compress_sequences.c:437` |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

|      % |  Time | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 9.0ms |       9 | `zstd_compress.c:3822` |

##### `ZSTD_XXH64_update` (`xxhash.h`)

|     % |  Time | Samples | Location        |
| ----: | ----: | ------: | --------------- |
| 71.4% | 5.0ms |       5 | `xxhash.h:3559` |
| 14.3% | 1.0ms |       1 | `xxhash.h:3557` |
| 14.3% | 1.0ms |       1 | `xxhash.h:3558` |

##### `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 7.0ms |       7 | `zstd_opt.c:1028` |

##### `ZSTD_seqToCodes` (`zstd_compress.c`)

|     % |  Time | Samples | Location               |
| ----: | ----: | ------: | ---------------------- |
| 50.0% | 3.0ms |       3 | `zstd_compress.c:2696` |
| 33.3% | 2.0ms |       2 | `zstd_compress.c:2695` |
| 16.7% | 1.0ms |       1 | `zstd_compress.c:2697` |

##### `FSE_buildCTable_wksp` (`fse_compress.c`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 60.0% | 3.0ms |       3 | `fse_compress.c:172` |
| 40.0% | 2.0ms |       2 | `fse_compress.c:161` |

##### `HIST_count_simple` (`hist.c`)

|     % |  Time | Samples | Location    |
| ----: | ----: | ------: | ----------- |
| 75.0% | 3.0ms |       3 | `hist.c:42` |
| 25.0% | 1.0ms |       1 | `hist.c:45` |

##### `HUF_buildCTable_wksp` (`huf_compress.c`)

|      % |  Time | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 2.0ms |       2 | `huf_compress.c:782` |

##### `FSE_compress_usingCTable_generic` (`fse_compress.c`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 50.0% | 1.0ms |       1 | `fse_compress.c:602` |
| 50.0% | 1.0ms |       1 | `fse_compress.c:598` |

##### `ZSTD_deriveSeqStoreChunk` (`zstd_compress.c`)

|      % |  Time | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 2.0ms |       2 | `zstd_compress.c:3961` |

##### `ZSTD_selectEncodingType` (`zstd_compress_sequences.c`)

|      % |  Time | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 1.0ms |       1 | `zstd_compress_sequences.c:234` |

##### `FSE_writeNCount_generic` (`fse_compress.c`)

|      % |  Time | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 1.0ms |       1 | `fse_compress.c:260` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                    | Location     |
| -----: | ----: | ------: | ------------------------- | ------------ |
| 100.0% | 9.94s |   9,943 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 99.7% | 1.72s |   1,722 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  0.3% | 6.0ms |       6 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

|     % |    Time | Samples | Caller                        | Location          |
| ----: | ------: | ------: | ----------------------------- | ----------------- |
| 99.2% | 126.0ms |     126 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  0.8% |   1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 36.0ms |      36 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 96.4% | 27.0ms |      27 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  3.6% |  1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                          | Location     |
| -----: | -----: | ------: | ------------------------------- | ------------ |
| 100.0% | 28.0ms |      28 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                    | Location     |
| -----: | -----: | ------: | ------------------------- | ------------ |
| 100.0% | 24.0ms |      24 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |   Time | Samples | Caller                              | Location          |
| ----: | -----: | ------: | ----------------------------------- | ----------------- |
| 63.2% | 12.0ms |      12 | `ZSTD_buildSequencesStatistics`     | `zstd_compress.c` |
| 36.8% |  7.0ms |       7 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c` |

##### `ZSTD_encodeSequences` (`zstd_compress_sequences.c`)

|      % |   Time | Samples | Caller                                  | Location          |
| -----: | -----: | ------: | --------------------------------------- | ----------------- |
| 100.0% | 10.0ms |      10 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                                               | Location          |
| -----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 9.0ms |       9 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `unknown (libc.so.6)` (`<unknown>`)

|     % |  Time | Samples | Caller                    | Location          |
| ----: | ----: | ------: | ------------------------- | ----------------- |
| 75.0% | 6.0ms |       6 | `ZSTD_compressStream2`    | `zstd_compress.c` |
| 12.5% | 1.0ms |       1 | `ZSTD_resetCCtx_internal` | `zstd_compress.c` |
| 12.5% | 1.0ms |       1 | `unknown (libc.so.6)`     | `<unknown>`       |

##### `ZSTD_XXH64_update` (`xxhash.h`)

|     % |  Time | Samples | Caller                           | Location            |
| ----: | ----: | ------: | -------------------------------- | ------------------- |
| 71.4% | 5.0ms |       5 | `ZSTD_compressContinue_internal` | `zstd_compress.c`   |
| 28.6% | 2.0ms |       2 | `ZSTDMT_compressionJob`          | `zstdmt_compress.c` |

##### `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 7.0ms |       7 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `clear_page ([kernel])` (`<unknown>`)

|     % |  Time | Samples | Caller                                   | Location    |
| ----: | ----: | ------: | ---------------------------------------- | ----------- |
| 83.3% | 5.0ms |       5 | `vma_alloc_anon_folio_pmd ([kernel])`    | `<unknown>` |
| 16.7% | 1.0ms |       1 | `__alloc_frozen_pages_noprof ([kernel])` | `<unknown>` |

##### `ZSTD_seqToCodes` (`zstd_compress.c`)

|     % |  Time | Samples | Caller                                  | Location          |
| ----: | ----: | ------: | --------------------------------------- | ----------------- |
| 66.7% | 4.0ms |       4 | `ZSTD_buildBlockEntropyStats`           | `zstd_compress.c` |
| 33.3% | 2.0ms |       2 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `FSE_buildCTable_wksp` (`fse_compress.c`)

|      % |  Time | Samples | Caller             | Location                    |
| -----: | ----: | ------: | ------------------ | --------------------------- |
| 100.0% | 5.0ms |       5 | `ZSTD_buildCTable` | `zstd_compress_sequences.c` |

##### `HIST_count_simple` (`hist.c`)

|      % |  Time | Samples | Caller                 | Location         |
| -----: | ----: | ------: | ---------------------- | ---------------- |
| 100.0% | 4.0ms |       4 | `HUF_writeCTable_wksp` | `huf_compress.c` |

##### `__arch_copy_to_user ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                         | Location    |
| -----: | ----: | ------: | ------------------------------ | ----------- |
| 100.0% | 3.0ms |       3 | `copy_page_to_iter ([kernel])` | `<unknown>` |

##### `HUF_buildCTable_wksp` (`huf_compress.c`)

|      % |  Time | Samples | Caller                | Location         |
| -----: | ----: | ------: | --------------------- | ---------------- |
| 100.0% | 2.0ms |       2 | `HUF_optimalTableLog` | `huf_compress.c` |

##### `FSE_compress_usingCTable_generic` (`fse_compress.c`)

|      % |  Time | Samples | Caller                 | Location         |
| -----: | ----: | ------: | ---------------------- | ---------------- |
| 100.0% | 2.0ms |       2 | `HUF_writeCTable_wksp` | `huf_compress.c` |

##### `ZSTD_deriveSeqStoreChunk` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                           | Location          |
| -----: | ----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 2.0ms |       2 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTD_selectEncodingType` (`zstd_compress_sequences.c`)

|      % |  Time | Samples | Caller                          | Location          |
| -----: | ----: | ------: | ------------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |

##### `FSE_writeNCount_generic` (`fse_compress.c`)

|      % |  Time | Samples | Caller            | Location                    |
| -----: | ----: | ------: | ----------------- | --------------------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_NCountCost` | `zstd_compress_sequences.c` |

### Total time

Functions with the most time spent within the function and its callees.

|      % |    Time | Samples | Function                                             | Location            |
| -----: | ------: | ------: | ---------------------------------------------------- | ------------------- |
| 100.0% |     12s |  12,009 | `unknown (libc.so.6)`                                | `<unknown>`         |
|  99.9% |  11.99s |  11,999 | `POOL_thread`                                        | `pool.c`            |
|  99.9% |  11.99s |  11,993 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c` |
|  99.8% |  11.98s |  11,988 | `ZSTD_compressContinue_internal`                     | `zstd_compress.c`   |
|  99.3% |  11.92s |  11,921 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`   |
|  97.6% |  11.72s |  11,723 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
|  83.0% |   9.97s |   9,971 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
|   1.1% | 127.0ms |     127 | `ZSTD_litLengthPrice`                                | `zstd_opt.c`        |
|   0.3% |  36.0ms |      36 | `ZSTD_rawLiteralsCost`                               | `zstd_opt.c`        |
|   0.3% |  34.0ms |      34 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |
|   0.3% |  34.0ms |      34 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`   |
|   0.2% |  28.0ms |      28 | `ZSTD_updateStats`                                   | `zstd_opt.c`        |
|   0.2% |  28.0ms |      28 | `ZSTD_insertBt1`                                     | `zstd_opt.c`        |
|   0.2% |  26.0ms |      26 | `ZSTD_entropyCompressSeqStore_internal`              | `zstd_compress.c`   |
|   0.2% |  26.0ms |      26 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`   |
|   0.2% |  24.0ms |      24 | `ZSTD_insertAndFindFirstIndexHash3`                  | `zstd_opt.c`        |
|   0.2% |  19.0ms |      19 | `HIST_count_parallel_wksp`                           | `hist.c`            |
|   0.2% |  19.0ms |      19 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c`   |
|   0.1% |  18.0ms |      18 | `ZSTD_compressBlock_btultra2`                        | `zstd_opt.c`        |
|   0.1% |  17.0ms |      17 | `ZSTD_buildBlockEntropyStats`                        | `zstd_compress.c`   |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function                                             | Location            |
| ----: | ------: | ------: | ---------------------------------------------------- | ------------------- |
| 99.9% |  11.99s |  11,999 | `POOL_thread`                                        | `pool.c`            |
| 99.9% |  11.99s |  11,993 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c` |
| 99.8% |  11.98s |  11,988 | `ZSTD_compressContinue_internal`                     | `zstd_compress.c`   |
| 99.3% |  11.92s |  11,921 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`   |
| 97.6% |  11.72s |  11,723 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
| 83.0% |   9.97s |   9,971 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
|  1.1% | 127.0ms |     127 | `ZSTD_litLengthPrice`                                | `zstd_opt.c`        |
|  0.3% |  36.0ms |      36 | `ZSTD_rawLiteralsCost`                               | `zstd_opt.c`        |
|  0.3% |  34.0ms |      34 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |
|  0.3% |  34.0ms |      34 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`   |
|  0.2% |  28.0ms |      28 | `ZSTD_updateStats`                                   | `zstd_opt.c`        |
|  0.2% |  28.0ms |      28 | `ZSTD_insertBt1`                                     | `zstd_opt.c`        |
|  0.2% |  26.0ms |      26 | `ZSTD_entropyCompressSeqStore_internal`              | `zstd_compress.c`   |
|  0.2% |  26.0ms |      26 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`   |
|  0.2% |  24.0ms |      24 | `ZSTD_insertAndFindFirstIndexHash3`                  | `zstd_opt.c`        |
|  0.2% |  19.0ms |      19 | `HIST_count_parallel_wksp`                           | `hist.c`            |
|  0.2% |  19.0ms |      19 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c`   |
|  0.1% |  18.0ms |      18 | `ZSTD_compressBlock_btultra2`                        | `zstd_opt.c`        |
|  0.1% |  17.0ms |      17 | `ZSTD_buildBlockEntropyStats`                        | `zstd_compress.c`   |
|  0.1% |  16.0ms |      16 | `ZSTD_estimateBlockSize_symbolType`                  | `zstd_compress.c`   |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `unknown (libc.so.6)` (`<unknown>`)

|     % |   Time | Samples | Caller                          | Location          |
| ----: | -----: | ------: | ------------------------------- | ----------------- |
| 99.9% | 11.99s |  11,999 | `unknown (libc.so.6)`           | `<unknown>`       |
|  0.1% | 10.0ms |      10 | `ZSTD_compressStream2`          | `zstd_compress.c` |
|  0.1% | 10.0ms |      10 | `__libc_start_main (libc.so.6)` | `<unknown>`       |
| <0.1% |  4.0ms |       4 | `fread (libc.so.6)`             | `<unknown>`       |
| <0.1% |  3.0ms |       3 | `ZSTD_resetCCtx_internal`       | `zstd_compress.c` |

##### `POOL_thread` (`pool.c`)

|      % |   Time | Samples | Caller                | Location    |
| -----: | -----: | ------: | --------------------- | ----------- |
| 100.0% | 11.99s |  11,999 | `unknown (libc.so.6)` | `<unknown>` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|      % |   Time | Samples | Caller        | Location |
| -----: | -----: | ------: | ------------- | -------- |
| 100.0% | 11.99s |  11,993 | `POOL_thread` | `pool.c` |

##### `ZSTD_compressContinue_internal` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                  | Location            |
| -----: | -----: | ------: | ----------------------- | ------------------- |
| 100.0% | 11.98s |  11,988 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                           | Location          |
| -----: | -----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 11.92s |  11,921 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 99.9% | 11.70s |  11,707 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  0.1% | 16.0ms |      16 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                    | Location     |
| -----: | ----: | ------: | ------------------------- | ------------ |
| 100.0% | 9.97s |   9,971 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

|     % |    Time | Samples | Caller                        | Location          |
| ----: | ------: | ------: | ----------------------------- | ----------------- |
| 99.2% | 126.0ms |     126 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  0.8% |   1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 36.0ms |      36 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                         | Location          |
| -----: | -----: | ------: | ------------------------------ | ----------------- |
| 100.0% | 34.0ms |      34 | `ZSTD_deriveBlockSplitsHelper` | `zstd_compress.c` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                           | Location          |
| -----: | -----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 34.0ms |      34 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 96.4% | 27.0ms |      27 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  3.6% |  1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                          | Location     |
| -----: | -----: | ------: | ------------------------------- | ------------ |
| 100.0% | 28.0ms |      28 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                              | Location          |
| -----: | -----: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 26.0ms |      26 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                           | Location          |
| -----: | -----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 26.0ms |      26 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                    | Location     |
| -----: | -----: | ------: | ------------------------- | ------------ |
| 100.0% | 24.0ms |      24 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |   Time | Samples | Caller                              | Location          |
| ----: | -----: | ------: | ----------------------------------- | ----------------- |
| 63.2% | 12.0ms |      12 | `ZSTD_buildSequencesStatistics`     | `zstd_compress.c` |
| 36.8% |  7.0ms |       7 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

|     % |   Time | Samples | Caller                                  | Location          |
| ----: | -----: | ------: | --------------------------------------- | ----------------- |
| 57.9% | 11.0ms |      11 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |
| 42.1% |  8.0ms |       8 | `ZSTD_buildBlockEntropyStats`           | `zstd_compress.c` |

##### `ZSTD_compressBlock_btultra2` (`zstd_opt.c`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 18.0ms |      18 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_buildBlockEntropyStats` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                                               | Location          |
| -----: | -----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 17.0ms |      17 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                                               | Location          |
| -----: | -----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 16.0ms |      16 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `unknown (libc.so.6)` (`<unknown>`)

|     % |   Time | Samples | Callee                    | Location    |
| ----: | -----: | ------: | ------------------------- | ----------- |
| 99.9% | 11.99s |  11,999 | `POOL_thread`             | `pool.c`    |
| 99.9% | 11.99s |  11,999 | `unknown (libc.so.6)`     | `<unknown>` |
|  0.1% | 10.0ms |      10 | `main`                    | `zstdcli.c` |
| <0.1% |  6.0ms |       6 | `el0t_64_sync ([kernel])` | `<unknown>` |
| <0.1% |  4.0ms |       4 | `__read (libc.so.6)`      | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|     % |   Time | Samples | Callee                          | Location            |
| ----: | -----: | ------: | ------------------------------- | ------------------- |
| 99.9% | 11.99s |  11,993 | `ZSTDMT_compressionJob`         | `zstdmt_compress.c` |
| <0.1% |  4.0ms |       4 | `AIO_ReadPool_executeReadJob`   | `fileio_asyncio.c`  |
| <0.1% |  2.0ms |       2 | `pthread_cond_wait (libc.so.6)` | `<unknown>`         |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|      % |   Time | Samples | Callee                                 | Location          |
| -----: | -----: | ------: | -------------------------------------- | ----------------- |
| 100.0% | 11.98s |  11,988 | `ZSTD_compressContinue_internal`       | `zstd_compress.c` |
|  <0.1% |  3.0ms |       3 | `ZSTD_compressBegin_advanced_internal` | `zstd_compress.c` |
|  <0.1% |  2.0ms |       2 | `ZSTD_XXH64_update`                    | `xxhash.h`        |

##### `ZSTD_compressContinue_internal` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                              | Location          |
| ----: | -----: | ------: | ----------------------------------- | ----------------- |
| 99.4% | 11.92s |  11,921 | `ZSTD_buildSeqStore`                | `zstd_compress.c` |
|  0.3% | 34.0ms |      34 | `ZSTD_deriveBlockSplitsHelper`      | `zstd_compress.c` |
|  0.2% | 26.0ms |      26 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |
| <0.1% |  5.0ms |       5 | `ZSTD_XXH64_update`                 | `xxhash.h`        |
| <0.1% |  2.0ms |       2 | `ZSTD_deriveSeqStoreChunk`          | `zstd_compress.c` |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|     % |    Time | Samples | Callee                        | Location     |
| ----: | ------: | ------: | ----------------------------- | ------------ |
| 98.2% |  11.70s |  11,707 | `ZSTD_compressBlock_opt2`     | `zstd_opt.c` |
|  1.1% | 126.0ms |     126 | `ZSTD_litLengthPrice`         | `zstd_opt.c` |
|  0.3% |  36.0ms |      36 | `ZSTD_rawLiteralsCost`        | `zstd_opt.c` |
|  0.2% |  27.0ms |      27 | `ZSTD_updateStats`            | `zstd_opt.c` |
|  0.2% |  18.0ms |      18 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |   Time | Samples | Callee                              | Location     |
| ----: | -----: | ------: | ----------------------------------- | ------------ |
| 85.1% |  9.97s |   9,971 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c` |
|  0.2% | 24.0ms |      24 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c` |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|    % |   Time | Samples | Callee           | Location     |
| ---: | -----: | ------: | ---------------- | ------------ |
| 0.3% | 28.0ms |      28 | `ZSTD_insertBt1` | `zstd_opt.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                              | Location                    |
| ----: | -----: | ------: | ----------------------------------- | --------------------------- |
| 50.0% | 17.0ms |      17 | `ZSTD_buildBlockEntropyStats`       | `zstd_compress.c`           |
| 47.1% | 16.0ms |      16 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c`           |
|  2.9% |  1.0ms |       1 | `ZSTD_fseBitCost`                   | `zstd_compress_sequences.c` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|      % |   Time | Samples | Callee                                               | Location          |
| -----: | -----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 34.0ms |      34 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                          | Location                    |
| ----: | -----: | ------: | ------------------------------- | --------------------------- |
| 42.3% | 11.0ms |      11 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c`           |
| 38.5% | 10.0ms |      10 | `ZSTD_encodeSequences`          | `zstd_compress_sequences.c` |
| 11.5% |  3.0ms |       3 | `ZSTD_compressLiterals`         | `zstd_compress_literals.c`  |
|  7.7% |  2.0ms |       2 | `ZSTD_seqToCodes`               | `zstd_compress.c`           |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|      % |   Time | Samples | Callee                                  | Location          |
| -----: | -----: | ------: | --------------------------------------- | ----------------- |
| 100.0% | 26.0ms |      26 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                     | Location                    |
| ----: | -----: | ------: | -------------------------- | --------------------------- |
| 63.2% | 12.0ms |      12 | `HIST_count_parallel_wksp` | `hist.c`                    |
| 26.3% |  5.0ms |       5 | `ZSTD_buildCTable`         | `zstd_compress_sequences.c` |
| 10.5% |  2.0ms |       2 | `ZSTD_selectEncodingType`  | `zstd_compress_sequences.c` |

##### `ZSTD_compressBlock_btultra2` (`zstd_opt.c`)

|     % |   Time | Samples | Callee                    | Location     |
| ----: | -----: | ------: | ------------------------- | ------------ |
| 88.9% | 16.0ms |      16 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |
|  5.6% |  1.0ms |       1 | `ZSTD_litLengthPrice`     | `zstd_opt.c` |
|  5.6% |  1.0ms |       1 | `ZSTD_updateStats`        | `zstd_opt.c` |

##### `ZSTD_buildBlockEntropyStats` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                          | Location          |
| ----: | ----: | ------: | ------------------------------- | ----------------- |
| 47.1% | 8.0ms |       8 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |
| 23.5% | 4.0ms |       4 | `HUF_optimalTableLog`           | `huf_compress.c`  |
| 23.5% | 4.0ms |       4 | `ZSTD_seqToCodes`               | `zstd_compress.c` |
|  5.9% | 1.0ms |       1 | `HUF_writeCTable_wksp`          | `huf_compress.c`  |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                     | Location |
| ----: | ----: | ------: | -------------------------- | -------- |
| 43.8% | 7.0ms |       7 | `HIST_count_parallel_wksp` | `hist.c` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 82.7% |   9.93s |   9,933 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                         |
| 14.3% |   1.72s |   1,722 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                           |
|  1.0% | 126.0ms |     126 | `ZSTD_litLengthPrice` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                               |
|  0.3% |  36.0ms |      36 | `ZSTD_rawLiteralsCost` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                              |
|  0.2% |  28.0ms |      28 | `ZSTD_insertBt1` (`zstd_opt.c`) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                      |
|  0.2% |  27.0ms |      27 | `ZSTD_updateStats` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                  |
|  0.2% |  24.0ms |      24 | `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                     |
|  0.1% |  10.0ms |      10 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                         |
|  0.1% |  10.0ms |      10 | `ZSTD_encodeSequences` (`zstd_compress_sequences.c`) ← `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`) ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                      |
|  0.1% |   9.0ms |       9 | `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                               |
|  0.1% |   8.0ms |       8 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_entropyCompressSeqStore_internal` ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                   |
|  0.1% |   7.0ms |       7 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                       |
|  0.1% |   7.0ms |       7 | `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                 |
| <0.1% |   6.0ms |       6 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                           |
| <0.1% |   6.0ms |       6 | `unknown (libc.so.6)` ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                                                                                                                                                                                                                                                                                                                                                                |
| <0.1% |   5.0ms |       5 | `ZSTD_XXH64_update` (`xxhash.h`) ← `ZSTD_compressContinue_internal` (`zstd_compress.c`) ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                          |
| <0.1% |   4.0ms |       4 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                           |
| <0.1% |   4.0ms |       4 | `ZSTD_seqToCodes` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                 |
| <0.1% |   3.0ms |       3 | `FSE_buildCTable_wksp` (`fse_compress.c`) ← `ZSTD_buildCTable` (`zstd_compress_sequences.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                    |
| <0.1% |   3.0ms |       3 | `clear_page ([kernel])` ← `vma_alloc_anon_folio_pmd ([kernel])` ← `do_huge_pmd_anonymous_page ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_page_fault ([kernel])` ← `do_translation_fault ([kernel])` ← `do_mem_abort ([kernel])` ← `el0_da ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)` |

# Uninterruptible sleep profile

Slept 2 times.

| Category |      % | Sleeps |
| -------- | -----: | -----: |
| Kernel   | 100.0% |      2 |

## Call tree

Call paths to the hottest functions.

```
└── 2 times (100.0%) [[via 36 frames]] bpf_trace_run4 ([kernel])
```

## Hottest functions

### Self sleeps

Functions with the most uninterruptible sleeps entered within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self sleeps.

##### Kernel

|      % | Sleeps | Function                    | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |      2 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's self sleeps. Inlining can make caller attribution imprecise.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |      2 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

### Total sleeps

Functions with the most uninterruptible sleeps entered within the function and its callees.

#### Categories

Categories accounting for at least 1.0% of self sleeps.

##### Kernel

|      % | Sleeps | Function                               | Location    |
| -----: | -----: | -------------------------------------- | ----------- |
| 100.0% |      2 | `bpf_trace_run4 ([kernel])`            | `<unknown>` |
| 100.0% |      2 | `__bpf_trace_sched_switch ([kernel])`  | `<unknown>` |
| 100.0% |      2 | `__schedule ([kernel])`                | `<unknown>` |
| 100.0% |      2 | `schedule ([kernel])`                  | `<unknown>` |
| 100.0% |      2 | `schedule_preempt_disabled ([kernel])` | `<unknown>` |
| 100.0% |      2 | `rwsem_down_read_slowpath ([kernel])`  | `<unknown>` |
| 100.0% |      2 | `down_read_killable ([kernel])`        | `<unknown>` |
| 100.0% |      2 | `lock_mm_and_find_vma ([kernel])`      | `<unknown>` |
| 100.0% |      2 | `do_page_fault ([kernel])`             | `<unknown>` |
| 100.0% |      2 | `do_translation_fault ([kernel])`      | `<unknown>` |
| 100.0% |      2 | `do_mem_abort ([kernel])`              | `<unknown>` |
| 100.0% |      2 | `el1_abort ([kernel])`                 | `<unknown>` |
| 100.0% |      2 | `el1h_64_sync_handler ([kernel])`      | `<unknown>` |
| 100.0% |      2 | `el1h_64_sync ([kernel])`              | `<unknown>` |
| 100.0% |      2 | `__arch_copy_to_user ([kernel])`       | `<unknown>` |
| 100.0% |      2 | `copy_page_to_iter ([kernel])`         | `<unknown>` |
| 100.0% |      2 | `filemap_read ([kernel])`              | `<unknown>` |
| 100.0% |      2 | `generic_file_read_iter ([kernel])`    | `<unknown>` |
| 100.0% |      2 | `ext4_file_read_iter ([kernel])`       | `<unknown>` |
| 100.0% |      2 | `do_iter_readv_writev ([kernel])`      | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total sleeps. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |      2 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |      2 | `__schedule ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |      2 | `schedule ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                 | Location    |
| -----: | -----: | -------------------------------------- | ----------- |
| 100.0% |      2 | `schedule_preempt_disabled ([kernel])` | `<unknown>` |

##### `schedule_preempt_disabled ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |      2 | `rwsem_down_read_slowpath ([kernel])` | `<unknown>` |

##### `rwsem_down_read_slowpath ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                          | Location    |
| -----: | -----: | ------------------------------- | ----------- |
| 100.0% |      2 | `down_read_killable ([kernel])` | `<unknown>` |

##### `down_read_killable ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      2 | `lock_mm_and_find_vma ([kernel])` | `<unknown>` |

##### `lock_mm_and_find_vma ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |      2 | `do_page_fault ([kernel])` | `<unknown>` |

##### `do_page_fault ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      2 | `do_translation_fault ([kernel])` | `<unknown>` |

##### `do_translation_fault ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |      2 | `do_mem_abort ([kernel])` | `<unknown>` |

##### `do_mem_abort ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                 | Location    |
| -----: | -----: | ---------------------- | ----------- |
| 100.0% |      2 | `el1_abort ([kernel])` | `<unknown>` |

##### `el1_abort ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      2 | `el1h_64_sync_handler ([kernel])` | `<unknown>` |

##### `el1h_64_sync_handler ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |      2 | `el1h_64_sync ([kernel])` | `<unknown>` |

##### `el1h_64_sync ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                           | Location    |
| -----: | -----: | -------------------------------- | ----------- |
| 100.0% |      2 | `__arch_copy_to_user ([kernel])` | `<unknown>` |

##### `__arch_copy_to_user ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                         | Location    |
| -----: | -----: | ------------------------------ | ----------- |
| 100.0% |      2 | `copy_page_to_iter ([kernel])` | `<unknown>` |

##### `copy_page_to_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |      2 | `filemap_read ([kernel])` | `<unknown>` |

##### `filemap_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                              | Location    |
| -----: | -----: | ----------------------------------- | ----------- |
| 100.0% |      2 | `generic_file_read_iter ([kernel])` | `<unknown>` |

##### `generic_file_read_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                           | Location    |
| -----: | -----: | -------------------------------- | ----------- |
| 100.0% |      2 | `ext4_file_read_iter ([kernel])` | `<unknown>` |

##### `ext4_file_read_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      2 | `do_iter_readv_writev ([kernel])` | `<unknown>` |

##### `do_iter_readv_writev ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |      2 | `vfs_iter_read ([kernel])` | `<unknown>` |

#### Callees

Callees with the largest contribution to each function's total sleeps. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                      | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |      2 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |      2 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |      2 | `__schedule ([kernel])` | `<unknown>` |

##### `schedule_preempt_disabled ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |      2 | `schedule ([kernel])` | `<unknown>` |

##### `rwsem_down_read_slowpath ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                 | Location    |
| -----: | -----: | -------------------------------------- | ----------- |
| 100.0% |      2 | `schedule_preempt_disabled ([kernel])` | `<unknown>` |

##### `down_read_killable ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |      2 | `rwsem_down_read_slowpath ([kernel])` | `<unknown>` |

##### `lock_mm_and_find_vma ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                          | Location    |
| -----: | -----: | ------------------------------- | ----------- |
| 100.0% |      2 | `down_read_killable ([kernel])` | `<unknown>` |

##### `do_page_fault ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      2 | `lock_mm_and_find_vma ([kernel])` | `<unknown>` |

##### `do_translation_fault ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |      2 | `do_page_fault ([kernel])` | `<unknown>` |

##### `do_mem_abort ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      2 | `do_translation_fault ([kernel])` | `<unknown>` |

##### `el1_abort ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |      2 | `do_mem_abort ([kernel])` | `<unknown>` |

##### `el1h_64_sync_handler ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                 | Location    |
| -----: | -----: | ---------------------- | ----------- |
| 100.0% |      2 | `el1_abort ([kernel])` | `<unknown>` |

##### `el1h_64_sync ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      2 | `el1h_64_sync_handler ([kernel])` | `<unknown>` |

##### `__arch_copy_to_user ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |      2 | `el1h_64_sync ([kernel])` | `<unknown>` |

##### `copy_page_to_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                           | Location    |
| -----: | -----: | -------------------------------- | ----------- |
| 100.0% |      2 | `__arch_copy_to_user ([kernel])` | `<unknown>` |

##### `filemap_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                         | Location    |
| -----: | -----: | ------------------------------ | ----------- |
| 100.0% |      2 | `copy_page_to_iter ([kernel])` | `<unknown>` |

##### `generic_file_read_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |      2 | `filemap_read ([kernel])` | `<unknown>` |

##### `ext4_file_read_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                              | Location    |
| -----: | -----: | ----------------------------------- | ----------- |
| 100.0% |      2 | `generic_file_read_iter ([kernel])` | `<unknown>` |

##### `do_iter_readv_writev ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                           | Location    |
| -----: | -----: | -------------------------------- | ----------- |
| 100.0% |      2 | `ext4_file_read_iter ([kernel])` | `<unknown>` |

## Hottest call stacks

Call stacks with the most uninterruptible sleeps entered in their leaf frame.

|      % | Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -----: | -----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% |      2 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `schedule_preempt_disabled ([kernel])` ← `rwsem_down_read_slowpath ([kernel])` ← `down_read_killable ([kernel])` ← `lock_mm_and_find_vma ([kernel])` ← `do_page_fault ([kernel])` ← `do_translation_fault ([kernel])` ← `do_mem_abort ([kernel])` ← `el1_abort ([kernel])` ← `el1h_64_sync_handler ([kernel])` ← `el1h_64_sync ([kernel])` ← `__arch_copy_to_user ([kernel])` ← `copy_page_to_iter ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `__arm64_sys_read ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `__read (libc.so.6)` ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` |

# Interruptible sleep profile

Slept 215 times.

| Category |      % | Sleeps |
| -------- | -----: | -----: |
| Kernel   | 100.0% |    215 |

## Call tree

Call paths to the hottest functions.

```
├── 164 times (76.3%) [[via 17 frames]] bpf_trace_run4 ([kernel])  (100.0% self in 4 call stacks)
└── 51 times (23.7%) [[via 23 frames]] bpf_trace_run4 ([kernel])
```

## Hottest functions

### Self sleeps

Functions with the most interruptible sleeps entered within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self sleeps.

##### Kernel

|      % | Sleeps | Function                    | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |    215 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's self sleeps. Inlining can make caller attribution imprecise.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |    215 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

### Total sleeps

Functions with the most interruptible sleeps entered within the function and its callees.

|      % | Sleeps | Function                                | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |    215 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
| 100.0% |    215 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
| 100.0% |    215 | `__schedule ([kernel])`                 | `<unknown>` |
| 100.0% |    215 | `schedule ([kernel])`                   | `<unknown>` |
| 100.0% |    215 | `futex_do_wait ([kernel])`              | `<unknown>` |
| 100.0% |    215 | `__futex_wait ([kernel])`               | `<unknown>` |
| 100.0% |    215 | `futex_wait ([kernel])`                 | `<unknown>` |
| 100.0% |    215 | `do_futex ([kernel])`                   | `<unknown>` |
| 100.0% |    215 | `__arm64_sys_futex ([kernel])`          | `<unknown>` |
| 100.0% |    215 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
| 100.0% |    215 | `do_el0_svc ([kernel])`                 | `<unknown>` |
| 100.0% |    215 | `el0_svc ([kernel])`                    | `<unknown>` |
| 100.0% |    215 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
| 100.0% |    215 | `el0t_64_sync ([kernel])`               | `<unknown>` |
| 100.0% |    215 | `unknown (libc.so.6)`                   | `<unknown>` |
| 100.0% |    215 | `pthread_cond_wait (libc.so.6)`         | `<unknown>` |
|  76.3% |    164 | `POOL_thread`                           | `pool.c`    |
|  23.7% |     51 | `FIO_compressFilename_srcFile`          | `fileio.c`  |
|  23.7% |     51 | `FIO_compressFilename`                  | `fileio.c`  |
|  23.7% |     51 | `main`                                  | `zstdcli.c` |

#### Categories

Categories accounting for at least 1.0% of self sleeps.

##### Kernel

|      % | Sleeps | Function                                | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |    215 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
| 100.0% |    215 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
| 100.0% |    215 | `__schedule ([kernel])`                 | `<unknown>` |
| 100.0% |    215 | `schedule ([kernel])`                   | `<unknown>` |
| 100.0% |    215 | `futex_do_wait ([kernel])`              | `<unknown>` |
| 100.0% |    215 | `__futex_wait ([kernel])`               | `<unknown>` |
| 100.0% |    215 | `futex_wait ([kernel])`                 | `<unknown>` |
| 100.0% |    215 | `do_futex ([kernel])`                   | `<unknown>` |
| 100.0% |    215 | `__arm64_sys_futex ([kernel])`          | `<unknown>` |
| 100.0% |    215 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
| 100.0% |    215 | `do_el0_svc ([kernel])`                 | `<unknown>` |
| 100.0% |    215 | `el0_svc ([kernel])`                    | `<unknown>` |
| 100.0% |    215 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
| 100.0% |    215 | `el0t_64_sync ([kernel])`               | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total sleeps. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |    215 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    215 | `__schedule ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    215 | `schedule ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |    215 | `futex_do_wait ([kernel])` | `<unknown>` |

##### `futex_do_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |    215 | `__futex_wait ([kernel])` | `<unknown>` |

##### `__futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    215 | `futex_wait ([kernel])` | `<unknown>` |

##### `futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    215 | `do_futex ([kernel])` | `<unknown>` |

##### `do_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                         | Location    |
| -----: | -----: | ------------------------------ | ----------- |
| 100.0% |    215 | `__arm64_sys_futex ([kernel])` | `<unknown>` |

##### `__arm64_sys_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                  | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |    215 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    215 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `do_el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller               | Location    |
| -----: | -----: | -------------------- | ----------- |
| 100.0% |    215 | `el0_svc ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |    215 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |    215 | `el0t_64_sync ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    215 | `unknown (libc.so.6)` | `<unknown>` |

##### `unknown (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Caller                          | Location    |
| -----: | -----: | ------------------------------- | ----------- |
| 100.0% |    215 | `pthread_cond_wait (libc.so.6)` | `<unknown>` |
|  76.3% |    164 | `unknown (libc.so.6)`           | `<unknown>` |
|  23.7% |     51 | `__libc_start_main (libc.so.6)` | `<unknown>` |

##### `pthread_cond_wait (libc.so.6)` (`<unknown>`)

|     % | Sleeps | Caller                          | Location            |
| ----: | -----: | ------------------------------- | ------------------- |
| 76.3% |    164 | `POOL_thread`                   | `pool.c`            |
| 20.9% |     45 | `ZSTDMT_compressStream_generic` | `zstdmt_compress.c` |
|  2.8% |      6 | `POOL_add`                      | `pool.c`            |

##### `POOL_thread` (`pool.c`)

|      % | Sleeps | Caller                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    164 | `unknown (libc.so.6)` | `<unknown>` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|      % | Sleeps | Caller                 | Location   |
| -----: | -----: | ---------------------- | ---------- |
| 100.0% |     51 | `FIO_compressFilename` | `fileio.c` |

##### `FIO_compressFilename` (`fileio.c`)

|      % | Sleeps | Caller | Location    |
| -----: | -----: | ------ | ----------- |
| 100.0% |     51 | `main` | `zstdcli.c` |

##### `main` (`zstdcli.c`)

|      % | Sleeps | Caller                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |     51 | `unknown (libc.so.6)` | `<unknown>` |

#### Callees

Callees with the largest contribution to each function's total sleeps. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                      | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |    215 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |    215 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    215 | `__schedule ([kernel])` | `<unknown>` |

##### `futex_do_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    215 | `schedule ([kernel])` | `<unknown>` |

##### `__futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |    215 | `futex_do_wait ([kernel])` | `<unknown>` |

##### `futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |    215 | `__futex_wait ([kernel])` | `<unknown>` |

##### `do_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    215 | `futex_wait ([kernel])` | `<unknown>` |

##### `__arm64_sys_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    215 | `do_futex ([kernel])` | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                         | Location    |
| -----: | -----: | ------------------------------ | ----------- |
| 100.0% |    215 | `__arm64_sys_futex ([kernel])` | `<unknown>` |

##### `do_el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                  | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |    215 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    215 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee               | Location    |
| -----: | -----: | -------------------- | ----------- |
| 100.0% |    215 | `el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |    215 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `unknown (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |    215 | `el0t_64_sync ([kernel])` | `<unknown>` |
|  76.3% |    164 | `POOL_thread`             | `pool.c`    |
|  76.3% |    164 | `unknown (libc.so.6)`     | `<unknown>` |
|  23.7% |     51 | `main`                    | `zstdcli.c` |

##### `pthread_cond_wait (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    215 | `unknown (libc.so.6)` | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|      % | Sleeps | Callee                          | Location    |
| -----: | -----: | ------------------------------- | ----------- |
| 100.0% |    164 | `pthread_cond_wait (libc.so.6)` | `<unknown>` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|     % | Sleeps | Callee                    | Location           |
| ----: | -----: | ------------------------- | ------------------ |
| 88.2% |     45 | `ZSTD_compressStream2`    | `zstd_compress.c`  |
|  7.8% |      4 | `AIO_ReadPool_fillBuffer` | `fileio_asyncio.c` |
|  3.9% |      2 | `AIO_ReadPool_setFile`    | `fileio_asyncio.c` |

##### `FIO_compressFilename` (`fileio.c`)

|      % | Sleeps | Callee                         | Location   |
| -----: | -----: | ------------------------------ | ---------- |
| 100.0% |     51 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `main` (`zstdcli.c`)

|      % | Sleeps | Callee                 | Location   |
| -----: | -----: | ---------------------- | ---------- |
| 100.0% |     51 | `FIO_compressFilename` | `fileio.c` |

## Hottest call stacks

Call stacks with the most interruptible sleeps entered in their leaf frame.

|     % | Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | -----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 76.3% |    164 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                     |
| 20.9% |     45 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `ZSTDMT_compressStream_generic` (`zstdmt_compress.c`) ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)` |
|  1.9% |      4 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_add` (`pool.c`) ← `AIO_ReadPool_fillBuffer` (`fileio_asyncio.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                             |
|  0.9% |      2 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_add` (`pool.c`) ← `AIO_ReadPool_setFile` (`fileio_asyncio.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                                |

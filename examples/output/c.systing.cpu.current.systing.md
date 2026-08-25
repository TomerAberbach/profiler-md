# CPU profile

Took 12s over 12,004 samples (1.0ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| Ours     | 99.7% | 11.96s |  11,964 |
| Kernel   |  0.3% | 34.0ms |      34 |
| Native   | <0.1% |  6.0ms |       6 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |   Time | Samples | Function                            | Location                    |
| ----: | -----: | ------: | ----------------------------------- | --------------------------- |
| 84.1% | 10.09s |  10,096 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c`                |
| 13.4% |  1.60s |   1,606 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c`                |
|  0.8% | 95.0ms |      95 | `ZSTD_litLengthPrice`               | `zstd_opt.c`                |
|  0.3% | 39.0ms |      39 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c`                |
|  0.2% | 30.0ms |      30 | `ZSTD_insertBt1`                    | `zstd_opt.c`                |
|  0.1% | 18.0ms |      18 | `ZSTD_updateStats`                  | `zstd_opt.c`                |
|  0.1% | 18.0ms |      18 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c`                |
|  0.1% | 15.0ms |      15 | `HIST_count_parallel_wksp`          | `hist.c`                    |
|  0.1% |  8.0ms |       8 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c`                |
|  0.1% |  7.0ms |       7 | `handle_softirqs ([kernel])`        | `<unknown>`                 |
| <0.1% |  6.0ms |       6 | `unknown (libc.so.6)`               | `<unknown>`                 |
| <0.1% |  6.0ms |       6 | `ZSTD_encodeSequences`              | `zstd_compress_sequences.c` |
| <0.1% |  6.0ms |       6 | `FSE_buildCTable_wksp`              | `fse_compress.c`            |
| <0.1% |  5.0ms |       5 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c`           |
| <0.1% |  5.0ms |       5 | `__arch_copy_to_user ([kernel])`    | `<unknown>`                 |
| <0.1% |  4.0ms |       4 | `clear_page ([kernel])`             | `<unknown>`                 |
| <0.1% |  4.0ms |       4 | `ZSTD_seqToCodes`                   | `zstd_compress.c`           |
| <0.1% |  4.0ms |       4 | `HUF_buildCTable_wksp`              | `huf_compress.c`            |
| <0.1% |  3.0ms |       3 | `ZSTD_XXH64_update`                 | `xxhash.h`                  |
| <0.1% |  3.0ms |       3 | `__bpf_trace_softirq ([kernel])`    | `<unknown>`                 |

#### Categories

##### Ours

|     % |   Time | Samples | Function                            | Location                    |
| ----: | -----: | ------: | ----------------------------------- | --------------------------- |
| 84.1% | 10.09s |  10,096 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c`                |
| 13.4% |  1.60s |   1,606 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c`                |
|  0.8% | 95.0ms |      95 | `ZSTD_litLengthPrice`               | `zstd_opt.c`                |
|  0.3% | 39.0ms |      39 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c`                |
|  0.2% | 30.0ms |      30 | `ZSTD_insertBt1`                    | `zstd_opt.c`                |
|  0.1% | 18.0ms |      18 | `ZSTD_updateStats`                  | `zstd_opt.c`                |
|  0.1% | 18.0ms |      18 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c`                |
|  0.1% | 15.0ms |      15 | `HIST_count_parallel_wksp`          | `hist.c`                    |
|  0.1% |  8.0ms |       8 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c`                |
| <0.1% |  6.0ms |       6 | `ZSTD_encodeSequences`              | `zstd_compress_sequences.c` |
| <0.1% |  6.0ms |       6 | `FSE_buildCTable_wksp`              | `fse_compress.c`            |
| <0.1% |  5.0ms |       5 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c`           |
| <0.1% |  4.0ms |       4 | `ZSTD_seqToCodes`                   | `zstd_compress.c`           |
| <0.1% |  4.0ms |       4 | `HUF_buildCTable_wksp`              | `huf_compress.c`            |
| <0.1% |  3.0ms |       3 | `ZSTD_XXH64_update`                 | `xxhash.h`                  |
| <0.1% |  2.0ms |       2 | `HUF_writeCTable_wksp`              | `huf_compress.c`            |
| <0.1% |  2.0ms |       2 | `HIST_count_simple`                 | `hist.c`                    |
| <0.1% |  2.0ms |       2 | `ZSTD_deriveSeqStoreChunk`          | `zstd_compress.c`           |
| <0.1% |  1.0ms |       1 | `ZSTDMT_compressionJob`             | `zstdmt_compress.c`         |
| <0.1% |  1.0ms |       1 | `HUF_optimalTableLog`               | `huf_compress.c`            |

#### Lines

Lines ranked by contribution to each function's self time.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |   Time | Samples | Location         |
| -----: | -----: | ------: | ---------------- |
| 100.0% | 10.09s |  10,096 | `zstd_opt.c:876` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 1.60s |   1,606 | `zstd_opt.c:1455` |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 37.9% | 36.0ms |      36 | `zstd_opt.c:315` |
| 37.9% | 36.0ms |      36 | `zstd_opt.c:313` |
| 10.5% | 10.0ms |      10 | `zstd_opt.c:306` |
|  8.4% |  8.0ms |       8 | `zstd_opt.c:298` |
|  5.3% |  5.0ms |       5 | `zstd_opt.c:310` |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 82.1% | 32.0ms |      32 | `zstd_opt.c:266` |
| 10.3% |  4.0ms |       4 | `zstd_opt.c:273` |
|  7.7% |  3.0ms |       3 | `zstd_opt.c:276` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 33.3% | 10.0ms |      10 | `zstd_opt.c:518` |
| 26.7% |  8.0ms |       8 | `zstd_opt.c:545` |
| 23.3% |  7.0ms |       7 | `zstd_opt.c:538` |
|  6.7% |  2.0ms |       2 | `zstd_opt.c:490` |
|  6.7% |  2.0ms |       2 | `zstd_opt.c:528` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|     % |  Time | Samples | Location         |
| ----: | ----: | ------: | ---------------- |
| 33.3% | 6.0ms |       6 | `zstd_opt.c:377` |
| 22.2% | 4.0ms |       4 | `zstd_opt.c:378` |
| 16.7% | 3.0ms |       3 | `zstd_opt.c:384` |
| 11.1% | 2.0ms |       2 | `zstd_opt.c:371` |
| 11.1% | 2.0ms |       2 | `zstd_opt.c:385` |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|     % |  Time | Samples | Location         |
| ----: | ----: | ------: | ---------------- |
| 33.3% | 6.0ms |       6 | `zstd_opt.c:430` |
| 27.8% | 5.0ms |       5 | `zstd_opt.c:423` |
| 16.7% | 3.0ms |       3 | `zstd_opt.c:424` |
| 11.1% | 2.0ms |       2 | `zstd_opt.c:415` |
| 11.1% | 2.0ms |       2 | `zstd_opt.c:420` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |  Time | Samples | Location     |
| ----: | ----: | ------: | ------------ |
| 20.0% | 3.0ms |       3 | `hist.c:112` |
| 13.3% | 2.0ms |       2 | `hist.c:92`  |
| 13.3% | 2.0ms |       2 | `hist.c:109` |
|  6.7% | 1.0ms |       1 | `hist.c:111` |
|  6.7% | 1.0ms |       1 | `hist.c:118` |

##### `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`)

|     % |  Time | Samples | Location          |
| ----: | ----: | ------: | ----------------- |
| 87.5% | 7.0ms |       7 | `zstd_opt.c:1028` |
| 12.5% | 1.0ms |       1 | `zstd_opt.c:1044` |

##### `ZSTD_encodeSequences` (`zstd_compress_sequences.c`)

|      % |  Time | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 6.0ms |       6 | `zstd_compress_sequences.c:437` |

##### `FSE_buildCTable_wksp` (`fse_compress.c`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 66.7% | 4.0ms |       4 | `fse_compress.c:172` |
| 16.7% | 1.0ms |       1 | `fse_compress.c:162` |
| 16.7% | 1.0ms |       1 | `fse_compress.c:160` |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

|      % |  Time | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 5.0ms |       5 | `zstd_compress.c:3822` |

##### `ZSTD_seqToCodes` (`zstd_compress.c`)

|     % |  Time | Samples | Location               |
| ----: | ----: | ------: | ---------------------- |
| 50.0% | 2.0ms |       2 | `zstd_compress.c:2694` |
| 25.0% | 1.0ms |       1 | `zstd_compress.c:2697` |
| 25.0% | 1.0ms |       1 | `zstd_compress.c:2696` |

##### `HUF_buildCTable_wksp` (`huf_compress.c`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 50.0% | 2.0ms |       2 | `huf_compress.c:778` |
| 25.0% | 1.0ms |       1 | `huf_compress.c:785` |
| 25.0% | 1.0ms |       1 | `huf_compress.c:788` |

##### `ZSTD_XXH64_update` (`xxhash.h`)

|     % |  Time | Samples | Location        |
| ----: | ----: | ------: | --------------- |
| 33.3% | 1.0ms |       1 | `xxhash.h:3559` |
| 33.3% | 1.0ms |       1 | `xxhash.h:3557` |
| 33.3% | 1.0ms |       1 | `xxhash.h:3558` |

##### `HUF_writeCTable_wksp` (`huf_compress.c`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 50.0% | 1.0ms |       1 | `huf_compress.c:271` |
| 50.0% | 1.0ms |       1 | `huf_compress.c:276` |

##### `HIST_count_simple` (`hist.c`)

|      % |  Time | Samples | Location    |
| -----: | ----: | ------: | ----------- |
| 100.0% | 2.0ms |       2 | `hist.c:42` |

##### `ZSTD_deriveSeqStoreChunk` (`zstd_compress.c`)

|      % |  Time | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 2.0ms |       2 | `zstd_compress.c:3961` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|      % |  Time | Samples | Location                |
| -----: | ----: | ------: | ----------------------- |
| 100.0% | 1.0ms |       1 | `zstdmt_compress.c:735` |

##### `HUF_optimalTableLog` (`huf_compress.c`)

|      % |  Time | Samples | Location              |
| -----: | ----: | ------: | --------------------- |
| 100.0% | 1.0ms |       1 | `huf_compress.c:1313` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                    | Location     |
| -----: | -----: | ------: | ------------------------- | ------------ |
| 100.0% | 10.09s |  10,096 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 99.5% | 1.59s |   1,598 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  0.5% | 8.0ms |       8 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 98.9% | 94.0ms |      94 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  1.1% |  1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 97.4% | 38.0ms |      38 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  2.6% |  1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                          | Location     |
| -----: | -----: | ------: | ------------------------------- | ------------ |
| 100.0% | 30.0ms |      30 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 18.0ms |      18 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                    | Location     |
| -----: | -----: | ------: | ------------------------- | ------------ |
| 100.0% | 18.0ms |      18 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |  Time | Samples | Caller                                               | Location          |
| ----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 53.3% | 8.0ms |       8 | `ZSTD_estimateBlockSize_symbolType`                  | `zstd_compress.c` |
| 40.0% | 6.0ms |       6 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c` |
|  6.7% | 1.0ms |       1 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 8.0ms |       8 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `handle_softirqs ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                    | Location    |
| -----: | ----: | ------: | ------------------------- | ----------- |
| 100.0% | 7.0ms |       7 | `__do_softirq ([kernel])` | `<unknown>` |

##### `unknown (libc.so.6)` (`<unknown>`)

|      % |  Time | Samples | Caller                 | Location          |
| -----: | ----: | ------: | ---------------------- | ----------------- |
| 100.0% | 6.0ms |       6 | `ZSTD_compressStream2` | `zstd_compress.c` |

##### `ZSTD_encodeSequences` (`zstd_compress_sequences.c`)

|      % |  Time | Samples | Caller                                  | Location          |
| -----: | ----: | ------: | --------------------------------------- | ----------------- |
| 100.0% | 6.0ms |       6 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `FSE_buildCTable_wksp` (`fse_compress.c`)

|      % |  Time | Samples | Caller             | Location                    |
| -----: | ----: | ------: | ------------------ | --------------------------- |
| 100.0% | 6.0ms |       6 | `ZSTD_buildCTable` | `zstd_compress_sequences.c` |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                                               | Location          |
| -----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 5.0ms |       5 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `__arch_copy_to_user ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                         | Location    |
| -----: | ----: | ------: | ------------------------------ | ----------- |
| 100.0% | 5.0ms |       5 | `copy_page_to_iter ([kernel])` | `<unknown>` |

##### `clear_page ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                                | Location    |
| -----: | ----: | ------: | ------------------------------------- | ----------- |
| 100.0% | 4.0ms |       4 | `vma_alloc_anon_folio_pmd ([kernel])` | `<unknown>` |

##### `ZSTD_seqToCodes` (`zstd_compress.c`)

|     % |  Time | Samples | Caller                                  | Location          |
| ----: | ----: | ------: | --------------------------------------- | ----------------- |
| 50.0% | 2.0ms |       2 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |
| 50.0% | 2.0ms |       2 | `ZSTD_buildBlockEntropyStats`           | `zstd_compress.c` |

##### `HUF_buildCTable_wksp` (`huf_compress.c`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 75.0% | 3.0ms |       3 | `HUF_optimalTableLog`         | `huf_compress.c`  |
| 25.0% | 1.0ms |       1 | `ZSTD_buildBlockEntropyStats` | `zstd_compress.c` |

##### `ZSTD_XXH64_update` (`xxhash.h`)

|     % |  Time | Samples | Caller                           | Location            |
| ----: | ----: | ------: | -------------------------------- | ------------------- |
| 66.7% | 2.0ms |       2 | `ZSTDMT_compressionJob`          | `zstdmt_compress.c` |
| 33.3% | 1.0ms |       1 | `ZSTD_compressContinue_internal` | `zstd_compress.c`   |

##### `__bpf_trace_softirq ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                    | Location    |
| -----: | ----: | ------: | ------------------------- | ----------- |
| 100.0% | 3.0ms |       3 | `__do_softirq ([kernel])` | `<unknown>` |

##### `HUF_writeCTable_wksp` (`huf_compress.c`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 50.0% | 1.0ms |       1 | `HUF_compress_internal`       | `huf_compress.c`  |
| 50.0% | 1.0ms |       1 | `ZSTD_buildBlockEntropyStats` | `zstd_compress.c` |

##### `HIST_count_simple` (`hist.c`)

|      % |  Time | Samples | Caller            | Location |
| -----: | ----: | ------: | ----------------- | -------- |
| 100.0% | 2.0ms |       2 | `HIST_count_wksp` | `hist.c` |

##### `ZSTD_deriveSeqStoreChunk` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                           | Location          |
| -----: | ----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 2.0ms |       2 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|      % |  Time | Samples | Caller        | Location |
| -----: | ----: | ------: | ------------- | -------- |
| 100.0% | 1.0ms |       1 | `POOL_thread` | `pool.c` |

##### `HUF_optimalTableLog` (`huf_compress.c`)

|      % |  Time | Samples | Caller                        | Location          |
| -----: | ----: | ------: | ----------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildBlockEntropyStats` | `zstd_compress.c` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |   Time | Samples | Function                                             | Location            |
| -----: | -----: | ------: | ---------------------------------------------------- | ------------------- |
| 100.0% |    12s |  12,004 | `unknown (libc.so.6)`                                | `<unknown>`         |
|  99.9% | 11.99s |  11,994 | `POOL_thread`                                        | `pool.c`            |
|  99.8% | 11.98s |  11,985 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c` |
|  99.8% | 11.97s |  11,979 | `ZSTD_compressContinue_internal`                     | `zstd_compress.c`   |
|  99.4% | 11.92s |  11,929 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`   |
|  98.0% | 11.76s |  11,769 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
|  84.5% | 10.14s |  10,141 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
|   0.8% | 95.0ms |      95 | `ZSTD_litLengthPrice`                                | `zstd_opt.c`        |
|   0.3% | 39.0ms |      39 | `ZSTD_rawLiteralsCost`                               | `zstd_opt.c`        |
|   0.3% | 33.0ms |      33 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |
|   0.3% | 33.0ms |      33 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`   |
|   0.2% | 30.0ms |      30 | `ZSTD_insertBt1`                                     | `zstd_opt.c`        |
|   0.2% | 19.0ms |      19 | `ZSTD_compressBlock_btultra2`                        | `zstd_opt.c`        |
|   0.2% | 19.0ms |      19 | `ZSTD_insertAndFindFirstIndexHash3`                  | `zstd_opt.c`        |
|   0.2% | 19.0ms |      19 | `__do_softirq ([kernel])`                            | `<unknown>`         |
|   0.2% | 19.0ms |      19 | `____do_softirq ([kernel])`                          | `<unknown>`         |
|   0.2% | 19.0ms |      19 | `call_on_irq_stack ([kernel])`                       | `<unknown>`         |
|   0.2% | 19.0ms |      19 | `do_softirq_own_stack ([kernel])`                    | `<unknown>`         |
|   0.2% | 19.0ms |      19 | `__irq_exit_rcu ([kernel])`                          | `<unknown>`         |
|   0.2% | 19.0ms |      19 | `irq_exit_rcu ([kernel])`                            | `<unknown>`         |

#### Categories

##### Ours

|     % |   Time | Samples | Function                                             | Location            |
| ----: | -----: | ------: | ---------------------------------------------------- | ------------------- |
| 99.9% | 11.99s |  11,994 | `POOL_thread`                                        | `pool.c`            |
| 99.8% | 11.98s |  11,985 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c` |
| 99.8% | 11.97s |  11,979 | `ZSTD_compressContinue_internal`                     | `zstd_compress.c`   |
| 99.4% | 11.92s |  11,929 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`   |
| 98.0% | 11.76s |  11,769 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
| 84.5% | 10.14s |  10,141 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
|  0.8% | 95.0ms |      95 | `ZSTD_litLengthPrice`                                | `zstd_opt.c`        |
|  0.3% | 39.0ms |      39 | `ZSTD_rawLiteralsCost`                               | `zstd_opt.c`        |
|  0.3% | 33.0ms |      33 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |
|  0.3% | 33.0ms |      33 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`   |
|  0.2% | 30.0ms |      30 | `ZSTD_insertBt1`                                     | `zstd_opt.c`        |
|  0.2% | 19.0ms |      19 | `ZSTD_compressBlock_btultra2`                        | `zstd_opt.c`        |
|  0.2% | 19.0ms |      19 | `ZSTD_insertAndFindFirstIndexHash3`                  | `zstd_opt.c`        |
|  0.1% | 18.0ms |      18 | `ZSTD_updateStats`                                   | `zstd_opt.c`        |
|  0.1% | 17.0ms |      17 | `ZSTD_buildBlockEntropyStats`                        | `zstd_compress.c`   |
|  0.1% | 15.0ms |      15 | `HIST_count_parallel_wksp`                           | `hist.c`            |
|  0.1% | 14.0ms |      14 | `ZSTD_entropyCompressSeqStore_internal`              | `zstd_compress.c`   |
|  0.1% | 14.0ms |      14 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`   |
|  0.1% | 13.0ms |      13 | `ZSTD_estimateBlockSize_symbolType`                  | `zstd_compress.c`   |
|  0.1% | 12.0ms |      12 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c`   |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `unknown (libc.so.6)` (`<unknown>`)

|     % |   Time | Samples | Callee                    | Location    |
| ----: | -----: | ------: | ------------------------- | ----------- |
| 99.9% | 11.99s |  11,994 | `POOL_thread`             | `pool.c`    |
| 99.9% | 11.99s |  11,994 | `unknown (libc.so.6)`     | `<unknown>` |
|  0.1% | 10.0ms |      10 | `main`                    | `zstdcli.c` |
|  0.1% |  7.0ms |       7 | `el0t_64_sync ([kernel])` | `<unknown>` |
|  0.1% |  7.0ms |       7 | `__read (libc.so.6)`      | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|     % |   Time | Samples | Callee                          | Location            |
| ----: | -----: | ------: | ------------------------------- | ------------------- |
| 99.9% | 11.98s |  11,985 | `ZSTDMT_compressionJob`         | `zstdmt_compress.c` |
|  0.1% |  8.0ms |       8 | `AIO_ReadPool_executeReadJob`   | `fileio_asyncio.c`  |
| <0.1% |  1.0ms |       1 | `pthread_cond_wait (libc.so.6)` | `<unknown>`         |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|     % |   Time | Samples | Callee                                 | Location          |
| ----: | -----: | ------: | -------------------------------------- | ----------------- |
| 99.9% | 11.97s |  11,979 | `ZSTD_compressContinue_internal`       | `zstd_compress.c` |
| <0.1% |  2.0ms |       2 | `ZSTD_compressBegin_advanced_internal` | `zstd_compress.c` |
| <0.1% |  2.0ms |       2 | `ZSTD_XXH64_update`                    | `xxhash.h`        |
| <0.1% |  1.0ms |       1 | `pthread_cond_signal (libc.so.6)`      | `<unknown>`       |

##### `ZSTD_compressContinue_internal` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                              | Location          |
| ----: | -----: | ------: | ----------------------------------- | ----------------- |
| 99.6% | 11.92s |  11,929 | `ZSTD_buildSeqStore`                | `zstd_compress.c` |
|  0.3% | 33.0ms |      33 | `ZSTD_deriveBlockSplitsHelper`      | `zstd_compress.c` |
|  0.1% | 14.0ms |      14 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |
| <0.1% |  2.0ms |       2 | `ZSTD_deriveSeqStoreChunk`          | `zstd_compress.c` |
| <0.1% |  1.0ms |       1 | `ZSTD_XXH64_update`                 | `xxhash.h`        |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                        | Location     |
| ----: | -----: | ------: | ----------------------------- | ------------ |
| 98.5% | 11.75s |  11,752 | `ZSTD_compressBlock_opt2`     | `zstd_opt.c` |
|  0.8% | 94.0ms |      94 | `ZSTD_litLengthPrice`         | `zstd_opt.c` |
|  0.3% | 38.0ms |      38 | `ZSTD_rawLiteralsCost`        | `zstd_opt.c` |
|  0.2% | 19.0ms |      19 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c` |
|  0.2% | 18.0ms |      18 | `ZSTD_updateStats`            | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |   Time | Samples | Callee                              | Location     |
| ----: | -----: | ------: | ----------------------------------- | ------------ |
| 86.2% | 10.14s |  10,141 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c` |
|  0.2% | 19.0ms |      19 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c` |
| <0.1% |  3.0ms |       3 | `el0t_64_irq ([kernel])`            | `<unknown>`  |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|    % |   Time | Samples | Callee                   | Location     |
| ---: | -----: | ------: | ------------------------ | ------------ |
| 0.3% | 30.0ms |      30 | `ZSTD_insertBt1`         | `zstd_opt.c` |
| 0.1% | 15.0ms |      15 | `el0t_64_irq ([kernel])` | `<unknown>`  |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                              | Location                    |
| ----: | -----: | ------: | ----------------------------------- | --------------------------- |
| 51.5% | 17.0ms |      17 | `ZSTD_buildBlockEntropyStats`       | `zstd_compress.c`           |
| 39.4% | 13.0ms |      13 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c`           |
|  3.0% |  1.0ms |       1 | `HIST_count_parallel_wksp`          | `hist.c`                    |
|  3.0% |  1.0ms |       1 | `HIST_count_wksp`                   | `hist.c`                    |
|  3.0% |  1.0ms |       1 | `ZSTD_fseBitCost`                   | `zstd_compress_sequences.c` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|      % |   Time | Samples | Callee                                               | Location          |
| -----: | -----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 33.0ms |      33 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |
|   6.1% |  2.0ms |       2 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c` |

##### `ZSTD_compressBlock_btultra2` (`zstd_opt.c`)

|     % |   Time | Samples | Callee                    | Location     |
| ----: | -----: | ------: | ------------------------- | ------------ |
| 89.5% | 17.0ms |      17 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |
|  5.3% |  1.0ms |       1 | `ZSTD_rawLiteralsCost`    | `zstd_opt.c` |
|  5.3% |  1.0ms |       1 | `ZSTD_litLengthPrice`     | `zstd_opt.c` |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|    % |  Time | Samples | Callee                   | Location    |
| ---: | ----: | ------: | ------------------------ | ----------- |
| 5.3% | 1.0ms |       1 | `el0t_64_irq ([kernel])` | `<unknown>` |

##### `__do_softirq ([kernel])` (`<unknown>`)

|     % |   Time | Samples | Callee                           | Location    |
| ----: | -----: | ------: | -------------------------------- | ----------- |
| 84.2% | 16.0ms |      16 | `handle_softirqs ([kernel])`     | `<unknown>` |
| 15.8% |  3.0ms |       3 | `__bpf_trace_softirq ([kernel])` | `<unknown>` |

##### `____do_softirq ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Callee                    | Location    |
| -----: | -----: | ------: | ------------------------- | ----------- |
| 100.0% | 19.0ms |      19 | `__do_softirq ([kernel])` | `<unknown>` |

##### `call_on_irq_stack ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Callee                      | Location    |
| -----: | -----: | ------: | --------------------------- | ----------- |
| 100.0% | 19.0ms |      19 | `____do_softirq ([kernel])` | `<unknown>` |

##### `do_softirq_own_stack ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Callee                         | Location    |
| -----: | -----: | ------: | ------------------------------ | ----------- |
| 100.0% | 19.0ms |      19 | `call_on_irq_stack ([kernel])` | `<unknown>` |

##### `__irq_exit_rcu ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Callee                            | Location    |
| -----: | -----: | ------: | --------------------------------- | ----------- |
| 100.0% | 19.0ms |      19 | `do_softirq_own_stack ([kernel])` | `<unknown>` |

##### `irq_exit_rcu ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Callee                      | Location    |
| -----: | -----: | ------: | --------------------------- | ----------- |
| 100.0% | 19.0ms |      19 | `__irq_exit_rcu ([kernel])` | `<unknown>` |

##### `ZSTD_buildBlockEntropyStats` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                          | Location          |
| ----: | -----: | ------: | ------------------------------- | ----------------- |
| 58.8% | 10.0ms |      10 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |
| 11.8% |  2.0ms |       2 | `HUF_optimalTableLog`           | `huf_compress.c`  |
| 11.8% |  2.0ms |       2 | `HUF_writeCTable_wksp`          | `huf_compress.c`  |
| 11.8% |  2.0ms |       2 | `ZSTD_seqToCodes`               | `zstd_compress.c` |
|  5.9% |  1.0ms |       1 | `HUF_buildCTable_wksp`          | `huf_compress.c`  |

##### `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                          | Location                    |
| ----: | ----: | ------: | ------------------------------- | --------------------------- |
| 42.9% | 6.0ms |       6 | `ZSTD_encodeSequences`          | `zstd_compress_sequences.c` |
| 28.6% | 4.0ms |       4 | `ZSTD_compressLiterals`         | `zstd_compress_literals.c`  |
| 14.3% | 2.0ms |       2 | `ZSTD_seqToCodes`               | `zstd_compress.c`           |
| 14.3% | 2.0ms |       2 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c`           |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|      % |   Time | Samples | Callee                                  | Location          |
| -----: | -----: | ------: | --------------------------------------- | ----------------- |
| 100.0% | 14.0ms |      14 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                     | Location |
| ----: | ----: | ------: | -------------------------- | -------- |
| 61.5% | 8.0ms |       8 | `HIST_count_parallel_wksp` | `hist.c` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                     | Location                    |
| ----: | ----: | ------: | -------------------------- | --------------------------- |
| 50.0% | 6.0ms |       6 | `HIST_count_parallel_wksp` | `hist.c`                    |
| 50.0% | 6.0ms |       6 | `ZSTD_buildCTable`         | `zstd_compress_sequences.c` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|     % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 84.0% | 10.08s |  10,087 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 13.3% |  1.59s |   1,598 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.8% | 94.0ms |      94 | `ZSTD_litLengthPrice` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.3% | 38.0ms |      38 | `ZSTD_rawLiteralsCost` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.2% | 30.0ms |      30 | `ZSTD_insertBt1` (`zstd_opt.c`) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.1% | 18.0ms |      18 | `ZSTD_updateStats` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.1% | 18.0ms |      18 | `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.1% |  9.0ms |       9 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.1% |  8.0ms |       8 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |  8.0ms |       8 | `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.1% |  7.0ms |       7 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                       |
| <0.1% |  6.0ms |       6 | `ZSTD_encodeSequences` (`zstd_compress_sequences.c`) ← `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`) ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| <0.1% |  6.0ms |       6 | `unknown (libc.so.6)` ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| <0.1% |  5.0ms |       5 | `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| <0.1% |  5.0ms |       5 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                           |
| <0.1% |  5.0ms |       5 | `FSE_buildCTable_wksp` (`fse_compress.c`) ← `ZSTD_buildCTable` (`zstd_compress_sequences.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                    |
| <0.1% |  5.0ms |       5 | `handle_softirqs ([kernel])` ← `__do_softirq ([kernel])` ← `____do_softirq ([kernel])` ← `call_on_irq_stack ([kernel])` ← `do_softirq_own_stack ([kernel])` ← `__irq_exit_rcu ([kernel])` ← `irq_exit_rcu ([kernel])` ← `el0_interrupt ([kernel])` ← `__el0_irq_handler_common ([kernel])` ← `el0t_64_irq_handler ([kernel])` ← `el0t_64_irq ([kernel])` ← `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                              |
| <0.1% |  5.0ms |       5 | `__arch_copy_to_user ([kernel])` ← `copy_page_to_iter ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `__arm64_sys_read ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `__read (libc.so.6)` ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` |
| <0.1% |  3.0ms |       3 | `__bpf_trace_softirq ([kernel])` ← `__do_softirq ([kernel])` ← `____do_softirq ([kernel])` ← `call_on_irq_stack ([kernel])` ← `do_softirq_own_stack ([kernel])` ← `__irq_exit_rcu ([kernel])` ← `irq_exit_rcu ([kernel])` ← `el0_interrupt ([kernel])` ← `__el0_irq_handler_common ([kernel])` ← `el0t_64_irq_handler ([kernel])` ← `el0t_64_irq ([kernel])` ← `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                          |
| <0.1% |  2.0ms |       2 | `clear_page ([kernel])` ← `vma_alloc_anon_folio_pmd ([kernel])` ← `do_huge_pmd_anonymous_page ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_page_fault ([kernel])` ← `do_translation_fault ([kernel])` ← `do_mem_abort ([kernel])` ← `el0_da ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                    |

# Uninterruptible sleep profile

Slept 3 times.

| Category |      % | Sleeps |
| -------- | -----: | -----: |
| Kernel   | 100.0% |      3 |

## Hottest functions

### Self sleeps

Functions ranked by uninterruptible sleeps entered directly in the function body, excluding callees.

#### Categories

##### Kernel

|      % | Sleeps | Function                    | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |      3 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self sleeps. Inlining can make caller attribution imprecise.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |      3 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

### Total sleeps

Functions ranked by total uninterruptible sleeps entered in the function and all its callees.

#### Categories

##### Kernel

|      % | Sleeps | Function                               | Location    |
| -----: | -----: | -------------------------------------- | ----------- |
| 100.0% |      3 | `bpf_trace_run4 ([kernel])`            | `<unknown>` |
| 100.0% |      3 | `__bpf_trace_sched_switch ([kernel])`  | `<unknown>` |
| 100.0% |      3 | `__schedule ([kernel])`                | `<unknown>` |
| 100.0% |      3 | `schedule ([kernel])`                  | `<unknown>` |
| 100.0% |      3 | `schedule_preempt_disabled ([kernel])` | `<unknown>` |
| 100.0% |      3 | `rwsem_down_read_slowpath ([kernel])`  | `<unknown>` |
| 100.0% |      3 | `down_read_killable ([kernel])`        | `<unknown>` |
| 100.0% |      3 | `lock_mm_and_find_vma ([kernel])`      | `<unknown>` |
| 100.0% |      3 | `do_page_fault ([kernel])`             | `<unknown>` |
| 100.0% |      3 | `do_translation_fault ([kernel])`      | `<unknown>` |
| 100.0% |      3 | `do_mem_abort ([kernel])`              | `<unknown>` |
| 100.0% |      3 | `el1_abort ([kernel])`                 | `<unknown>` |
| 100.0% |      3 | `el1h_64_sync_handler ([kernel])`      | `<unknown>` |
| 100.0% |      3 | `el1h_64_sync ([kernel])`              | `<unknown>` |
| 100.0% |      3 | `__arch_copy_to_user ([kernel])`       | `<unknown>` |
| 100.0% |      3 | `copy_page_to_iter ([kernel])`         | `<unknown>` |
| 100.0% |      3 | `filemap_read ([kernel])`              | `<unknown>` |
| 100.0% |      3 | `generic_file_read_iter ([kernel])`    | `<unknown>` |
| 100.0% |      3 | `ext4_file_read_iter ([kernel])`       | `<unknown>` |
| 100.0% |      3 | `do_iter_readv_writev ([kernel])`      | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total sleeps. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                      | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |      3 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |      3 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |      3 | `__schedule ([kernel])` | `<unknown>` |

##### `schedule_preempt_disabled ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |      3 | `schedule ([kernel])` | `<unknown>` |

##### `rwsem_down_read_slowpath ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                 | Location    |
| -----: | -----: | -------------------------------------- | ----------- |
| 100.0% |      3 | `schedule_preempt_disabled ([kernel])` | `<unknown>` |

##### `down_read_killable ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |      3 | `rwsem_down_read_slowpath ([kernel])` | `<unknown>` |

##### `lock_mm_and_find_vma ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                          | Location    |
| -----: | -----: | ------------------------------- | ----------- |
| 100.0% |      3 | `down_read_killable ([kernel])` | `<unknown>` |

##### `do_page_fault ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      3 | `lock_mm_and_find_vma ([kernel])` | `<unknown>` |

##### `do_translation_fault ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |      3 | `do_page_fault ([kernel])` | `<unknown>` |

##### `do_mem_abort ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      3 | `do_translation_fault ([kernel])` | `<unknown>` |

##### `el1_abort ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |      3 | `do_mem_abort ([kernel])` | `<unknown>` |

##### `el1h_64_sync_handler ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                 | Location    |
| -----: | -----: | ---------------------- | ----------- |
| 100.0% |      3 | `el1_abort ([kernel])` | `<unknown>` |

##### `el1h_64_sync ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      3 | `el1h_64_sync_handler ([kernel])` | `<unknown>` |

##### `__arch_copy_to_user ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |      3 | `el1h_64_sync ([kernel])` | `<unknown>` |

##### `copy_page_to_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                           | Location    |
| -----: | -----: | -------------------------------- | ----------- |
| 100.0% |      3 | `__arch_copy_to_user ([kernel])` | `<unknown>` |

##### `filemap_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                         | Location    |
| -----: | -----: | ------------------------------ | ----------- |
| 100.0% |      3 | `copy_page_to_iter ([kernel])` | `<unknown>` |

##### `generic_file_read_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |      3 | `filemap_read ([kernel])` | `<unknown>` |

##### `ext4_file_read_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                              | Location    |
| -----: | -----: | ----------------------------------- | ----------- |
| 100.0% |      3 | `generic_file_read_iter ([kernel])` | `<unknown>` |

##### `do_iter_readv_writev ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                           | Location    |
| -----: | -----: | -------------------------------- | ----------- |
| 100.0% |      3 | `ext4_file_read_iter ([kernel])` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by uninterruptible sleeps entered in their leaf frame.

|      % | Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -----: | -----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% |      3 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `schedule_preempt_disabled ([kernel])` ← `rwsem_down_read_slowpath ([kernel])` ← `down_read_killable ([kernel])` ← `lock_mm_and_find_vma ([kernel])` ← `do_page_fault ([kernel])` ← `do_translation_fault ([kernel])` ← `do_mem_abort ([kernel])` ← `el1_abort ([kernel])` ← `el1h_64_sync_handler ([kernel])` ← `el1h_64_sync ([kernel])` ← `__arch_copy_to_user ([kernel])` ← `copy_page_to_iter ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `__arm64_sys_read ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `__read (libc.so.6)` ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` |

# Interruptible sleep profile

Slept 215 times.

| Category |      % | Sleeps |
| -------- | -----: | -----: |
| Kernel   | 100.0% |    215 |

## Hottest functions

### Self sleeps

Functions ranked by interruptible sleeps entered directly in the function body, excluding callees.

#### Categories

##### Kernel

|      % | Sleeps | Function                    | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |    215 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self sleeps. Inlining can make caller attribution imprecise.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |    215 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

### Total sleeps

Functions ranked by total interruptible sleeps entered in the function and all its callees.

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
|  78.6% |    169 | `POOL_thread`                           | `pool.c`    |
|  21.4% |     46 | `FIO_compressFilename_srcFile`          | `fileio.c`  |
|  21.4% |     46 | `FIO_compressFilename`                  | `fileio.c`  |
|  21.4% |     46 | `main`                                  | `zstdcli.c` |

#### Categories

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

#### Callees

Callees ranked by contribution to each function's total sleeps. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

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
|  78.6% |    169 | `POOL_thread`             | `pool.c`    |
|  78.6% |    169 | `unknown (libc.so.6)`     | `<unknown>` |
|  21.4% |     46 | `main`                    | `zstdcli.c` |

##### `pthread_cond_wait (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    215 | `unknown (libc.so.6)` | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|      % | Sleeps | Callee                          | Location    |
| -----: | -----: | ------------------------------- | ----------- |
| 100.0% |    169 | `pthread_cond_wait (libc.so.6)` | `<unknown>` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|     % | Sleeps | Callee                    | Location           |
| ----: | -----: | ------------------------- | ------------------ |
| 89.1% |     41 | `ZSTD_compressStream2`    | `zstd_compress.c`  |
|  6.5% |      3 | `AIO_ReadPool_fillBuffer` | `fileio_asyncio.c` |
|  4.3% |      2 | `AIO_ReadPool_setFile`    | `fileio_asyncio.c` |

##### `FIO_compressFilename` (`fileio.c`)

|      % | Sleeps | Callee                         | Location   |
| -----: | -----: | ------------------------------ | ---------- |
| 100.0% |     46 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `main` (`zstdcli.c`)

|      % | Sleeps | Callee                 | Location   |
| -----: | -----: | ---------------------- | ---------- |
| 100.0% |     46 | `FIO_compressFilename` | `fileio.c` |

## Hottest call stacks

Call stacks ranked by interruptible sleeps entered in their leaf frame.

|     % | Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | -----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 78.6% |    169 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                     |
| 19.1% |     41 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `ZSTDMT_compressStream_generic` (`zstdmt_compress.c`) ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)` |
|  1.4% |      3 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_add` (`pool.c`) ← `AIO_ReadPool_fillBuffer` (`fileio_asyncio.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                             |
|  0.9% |      2 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_add` (`pool.c`) ← `AIO_ReadPool_setFile` (`fileio_asyncio.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                                |

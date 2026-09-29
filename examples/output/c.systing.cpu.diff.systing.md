# CPU profile diff

Took 12s → 20.05s (+8.047s, +67.0%) over 12,009 samples → 20,056 samples (1.0ms per sample).

| Category | Change |   Delta |             % |            Time |         Samples |
| -------- | -----: | ------: | ------------: | --------------: | --------------: |
| Ours     | +67.0% | +8.038s | 99.8% → 99.9% | 11.99s → 20.02s | 11,990 → 20,028 |
| Kernel   | +40.0% | +4.00ms |          0.1% | 10.0ms → 14.0ms |         10 → 14 |
| Native   | +55.6% | +5.00ms |          0.1% |  9.0ms → 14.0ms |          9 → 14 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|    Change |     Delta |             % |              Time |        Samples | Function                            | Location          |
| --------: | --------: | ------------: | ----------------: | -------------: | ----------------------------------- | ----------------- |
|    +46.3% |   +4.605s | 82.8% → 72.5% |    9.94s → 14.54s | 9,943 → 14,548 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c`      |
| +10478.6% |   +2.934s |  0.2% → 14.8% |    28.0ms → 2.96s |     28 → 2,962 | `ZSTD_insertBt1`                    | `zstd_opt.c`      |
|    +26.8% | +463.00ms | 14.4% → 10.9% |     1.72s → 2.19s |  1,728 → 2,191 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c`      |
|       new |  +17.00ms |   0.0% → 0.1% |      0ms → 17.0ms |         0 → 17 | `ZSTD_recordFingerprint_1`          | `zstd_preSplit.c` |
|    +38.9% |  +14.00ms |   0.3% → 0.2% |   36.0ms → 50.0ms |        36 → 50 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c`      |
|    +10.2% |  +13.00ms |   1.1% → 0.7% | 127.0ms → 140.0ms |      127 → 140 | `ZSTD_litLengthPrice`               | `zstd_opt.c`      |
|    +75.0% |   +6.00ms |          0.1% |    8.0ms → 14.0ms |         8 → 14 | `unknown (libc.so.6)`               | `<unknown>`       |
|    +85.7% |   +6.00ms |          0.1% |    7.0ms → 13.0ms |         7 → 13 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c`      |
|   +300.0% |   +6.00ms |         <0.1% |     2.0ms → 8.0ms |          2 → 8 | `HUF_buildCTable_wksp`              | `huf_compress.c`  |
|   +100.0% |   +6.00ms |  <0.1% → 0.1% |    6.0ms → 12.0ms |         6 → 12 | `ZSTD_seqToCodes`                   | `zstd_compress.c` |
|       new |   +6.00ms |  0.0% → <0.1% |       0ms → 6.0ms |          0 → 6 | `ZSTD_splitBlock`                   | `zstd_preSplit.c` |
|    +16.7% |   +4.00ms |   0.2% → 0.1% |   24.0ms → 28.0ms |        24 → 28 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c`      |
|   +133.3% |   +4.00ms |         <0.1% |     3.0ms → 7.0ms |          3 → 7 | `__arch_copy_to_user ([kernel])`    | `<unknown>`       |
|   +200.0% |   +2.00ms |         <0.1% |     1.0ms → 3.0ms |          1 → 3 | `FSE_writeNCount_generic`           | `fse_compress.c`  |
|       new |   +2.00ms |  0.0% → <0.1% |       0ms → 2.0ms |          0 → 2 | `ZSTD_updateTree`                   | `zstd_opt.c`      |
|       new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |          0 → 1 | `do_page_fault ([kernel])`          | `<unknown>`       |
|       new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |          0 → 1 | `ZSTD_deriveBlockSplitsHelper`      | `zstd_compress.c` |
|       new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |          0 → 1 | `HUF_writeCTable_wksp`              | `huf_compress.c`  |
|       new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |          0 → 1 | `__folio_mod_stat ([kernel])`       | `<unknown>`       |
|       new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |          0 → 1 | `_raw_spin_lock_irqsave ([kernel])` | `<unknown>`       |

##### Ours

|    Change |     Delta |             % |              Time |        Samples | Function                            | Location          |
| --------: | --------: | ------------: | ----------------: | -------------: | ----------------------------------- | ----------------- |
|    +46.3% |   +4.605s | 82.8% → 72.5% |    9.94s → 14.54s | 9,943 → 14,548 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c`      |
| +10478.6% |   +2.934s |  0.2% → 14.8% |    28.0ms → 2.96s |     28 → 2,962 | `ZSTD_insertBt1`                    | `zstd_opt.c`      |
|    +26.8% | +463.00ms | 14.4% → 10.9% |     1.72s → 2.19s |  1,728 → 2,191 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c`      |
|       new |  +17.00ms |   0.0% → 0.1% |      0ms → 17.0ms |         0 → 17 | `ZSTD_recordFingerprint_1`          | `zstd_preSplit.c` |
|    +38.9% |  +14.00ms |   0.3% → 0.2% |   36.0ms → 50.0ms |        36 → 50 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c`      |
|    +10.2% |  +13.00ms |   1.1% → 0.7% | 127.0ms → 140.0ms |      127 → 140 | `ZSTD_litLengthPrice`               | `zstd_opt.c`      |
|    +85.7% |   +6.00ms |          0.1% |    7.0ms → 13.0ms |         7 → 13 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c`      |
|   +300.0% |   +6.00ms |         <0.1% |     2.0ms → 8.0ms |          2 → 8 | `HUF_buildCTable_wksp`              | `huf_compress.c`  |
|   +100.0% |   +6.00ms |  <0.1% → 0.1% |    6.0ms → 12.0ms |         6 → 12 | `ZSTD_seqToCodes`                   | `zstd_compress.c` |
|       new |   +6.00ms |  0.0% → <0.1% |       0ms → 6.0ms |          0 → 6 | `ZSTD_splitBlock`                   | `zstd_preSplit.c` |
|    +16.7% |   +4.00ms |   0.2% → 0.1% |   24.0ms → 28.0ms |        24 → 28 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c`      |
|   +200.0% |   +2.00ms |         <0.1% |     1.0ms → 3.0ms |          1 → 3 | `FSE_writeNCount_generic`           | `fse_compress.c`  |
|       new |   +2.00ms |  0.0% → <0.1% |       0ms → 2.0ms |          0 → 2 | `ZSTD_updateTree`                   | `zstd_opt.c`      |
|       new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |          0 → 1 | `ZSTD_deriveBlockSplitsHelper`      | `zstd_compress.c` |
|       new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |          0 → 1 | `HUF_writeCTable_wksp`              | `huf_compress.c`  |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |            Time | Samples | Function                            | Location                    |
| ------: | -------: | -----------: | --------------: | ------: | ----------------------------------- | --------------------------- |
|  -78.6% | -22.00ms | 0.2% → <0.1% |  28.0ms → 6.0ms |  28 → 6 | `ZSTD_updateStats`                  | `zstd_opt.c`                |
|  -66.7% |  -6.00ms | 0.1% → <0.1% |   9.0ms → 3.0ms |   9 → 3 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c`           |
|  -66.7% |  -4.00ms |        <0.1% |   6.0ms → 2.0ms |   6 → 2 | `clear_page ([kernel])`             | `<unknown>`                 |
|  -42.9% |  -3.00ms | 0.1% → <0.1% |   7.0ms → 4.0ms |   7 → 4 | `ZSTD_XXH64_update`                 | `xxhash.h`                  |
|  -60.0% |  -3.00ms |        <0.1% |   5.0ms → 2.0ms |   5 → 2 | `FSE_buildCTable_wksp`              | `fse_compress.c`            |
| removed |  -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `FSE_compress_usingCTable_generic`  | `fse_compress.c`            |
| removed |  -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `ZSTD_deriveSeqStoreChunk`          | `zstd_compress.c`           |
|   -5.3% |  -1.00ms |  0.2% → 0.1% | 19.0ms → 18.0ms | 19 → 18 | `HIST_count_parallel_wksp`          | `hist.c`                    |
|  -10.0% |  -1.00ms | 0.1% → <0.1% |  10.0ms → 9.0ms |  10 → 9 | `ZSTD_encodeSequences`              | `zstd_compress_sequences.c` |
| removed |  -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `ZSTD_selectEncodingType`           | `zstd_compress_sequences.c` |
| removed |  -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `ZSTD_fseBitCost`                   | `zstd_compress_sequences.c` |
| removed |  -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `pthread_cond_wait (libc.so.6)`     | `<unknown>`                 |
| removed |  -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `filemap_get_read_batch ([kernel])` | `<unknown>`                 |

##### Ours

|  Change |    Delta |            % |            Time | Samples | Function                            | Location                    |
| ------: | -------: | -----------: | --------------: | ------: | ----------------------------------- | --------------------------- |
|  -78.6% | -22.00ms | 0.2% → <0.1% |  28.0ms → 6.0ms |  28 → 6 | `ZSTD_updateStats`                  | `zstd_opt.c`                |
|  -66.7% |  -6.00ms | 0.1% → <0.1% |   9.0ms → 3.0ms |   9 → 3 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c`           |
|  -42.9% |  -3.00ms | 0.1% → <0.1% |   7.0ms → 4.0ms |   7 → 4 | `ZSTD_XXH64_update`                 | `xxhash.h`                  |
|  -60.0% |  -3.00ms |        <0.1% |   5.0ms → 2.0ms |   5 → 2 | `FSE_buildCTable_wksp`              | `fse_compress.c`            |
| removed |  -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `FSE_compress_usingCTable_generic`  | `fse_compress.c`            |
| removed |  -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `ZSTD_deriveSeqStoreChunk`          | `zstd_compress.c`           |
|   -5.3% |  -1.00ms |  0.2% → 0.1% | 19.0ms → 18.0ms | 19 → 18 | `HIST_count_parallel_wksp`          | `hist.c`                    |
|  -10.0% |  -1.00ms | 0.1% → <0.1% |  10.0ms → 9.0ms |  10 → 9 | `ZSTD_encodeSequences`              | `zstd_compress_sequences.c` |
| removed |  -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `ZSTD_selectEncodingType`           | `zstd_compress_sequences.c` |
| removed |  -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `ZSTD_fseBitCost`                   | `zstd_compress_sequences.c` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|    Change |     Delta |             % |              Time |         Samples | Function                               | Location            |
| --------: | --------: | ------------: | ----------------: | --------------: | -------------------------------------- | ------------------- |
|    +67.0% |   +8.047s |        100.0% |      12s → 20.05s | 12,009 → 20,056 | `unknown (libc.so.6)`                  | `<unknown>`         |
|    +67.1% |   +8.046s |         99.9% |   11.99s → 20.04s | 11,999 → 20,045 | `POOL_thread`                          | `pool.c`            |
|    +67.1% |   +8.045s |         99.9% |   11.99s → 20.03s | 11,993 → 20,038 | `ZSTDMT_compressionJob`                | `zstdmt_compress.c` |
|    +42.7% |   +5.116s | 99.8% → 85.3% |   11.98s → 17.10s | 11,988 → 17,104 | `ZSTD_compressContinue_internal`       | `zstd_compress.c`   |
|    +42.8% |   +5.097s | 99.3% → 84.9% |   11.92s → 17.01s | 11,921 → 17,018 | `ZSTD_buildSeqStore`                   | `zstd_compress.c`   |
|    +43.4% |   +5.085s | 97.6% → 83.8% |   11.72s → 16.80s | 11,723 → 16,808 | `ZSTD_compressBlock_opt2`              | `zstd_opt.c`        |
|    +46.3% |   +4.619s | 83.0% → 72.7% |    9.97s → 14.59s |  9,971 → 14,590 | `ZSTD_btGetAllMatches_noDict_3`        | `zstd_opt.c`        |
| +10478.6% |   +2.934s |  0.2% → 14.8% |    28.0ms → 2.96s |      28 → 2,962 | `ZSTD_insertBt1`                       | `zstd_opt.c`        |
| +97533.3% |   +2.926s | <0.1% → 14.6% |     3.0ms → 2.92s |       3 → 2,929 | `ZSTD_compressBegin_internal`          | `zstd_compress.c`   |
| +97533.3% |   +2.926s | <0.1% → 14.6% |     3.0ms → 2.92s |       3 → 2,929 | `ZSTD_compressBegin_advanced_internal` | `zstd_compress.c`   |
|       new |   +2.922s |  0.0% → 14.6% |       0ms → 2.92s |       0 → 2,922 | `ZSTD_updateTree`                      | `zstd_opt.c`        |
|       new |   +2.922s |  0.0% → 14.6% |       0ms → 2.92s |       0 → 2,922 | `ZSTD_loadDictionaryContent`           | `zstd_compress.c`   |
|       new | +265.00ms |   0.0% → 1.3% |     0ms → 265.0ms |         0 → 265 | `ZSTD_compressEnd_public`              | `zstd_compress.c`   |
|       new |  +23.00ms |   0.0% → 0.1% |      0ms → 23.0ms |          0 → 23 | `ZSTD_splitBlock`                      | `zstd_preSplit.c`   |
|       new |  +22.00ms |   0.0% → 0.1% |      0ms → 22.0ms |          0 → 22 | `ZSTD_entropyCompressSeqStore`         | `zstd_compress.c`   |
|   +100.0% |  +17.00ms |   0.1% → 0.2% |   17.0ms → 34.0ms |         17 → 34 | `ZSTD_buildBlockEntropyStats`          | `zstd_compress.c`   |
|       new |  +17.00ms |   0.0% → 0.1% |      0ms → 17.0ms |          0 → 17 | `ZSTD_recordFingerprint_1`             | `zstd_preSplit.c`   |
|    +38.9% |  +14.00ms |   0.3% → 0.2% |   36.0ms → 50.0ms |         36 → 50 | `ZSTD_rawLiteralsCost`                 | `zstd_opt.c`        |
|    +10.2% |  +13.00ms |   1.1% → 0.7% | 127.0ms → 140.0ms |       127 → 140 | `ZSTD_litLengthPrice`                  | `zstd_opt.c`        |
|    +23.5% |   +8.00ms |   0.3% → 0.2% |   34.0ms → 42.0ms |         34 → 42 | `ZSTD_deriveBlockSplitsHelper`         | `zstd_compress.c`   |

##### Ours

|    Change |     Delta |             % |              Time |         Samples | Function                                             | Location            |
| --------: | --------: | ------------: | ----------------: | --------------: | ---------------------------------------------------- | ------------------- |
|    +67.1% |   +8.046s |         99.9% |   11.99s → 20.04s | 11,999 → 20,045 | `POOL_thread`                                        | `pool.c`            |
|    +67.1% |   +8.045s |         99.9% |   11.99s → 20.03s | 11,993 → 20,038 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c` |
|    +42.7% |   +5.116s | 99.8% → 85.3% |   11.98s → 17.10s | 11,988 → 17,104 | `ZSTD_compressContinue_internal`                     | `zstd_compress.c`   |
|    +42.8% |   +5.097s | 99.3% → 84.9% |   11.92s → 17.01s | 11,921 → 17,018 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`   |
|    +43.4% |   +5.085s | 97.6% → 83.8% |   11.72s → 16.80s | 11,723 → 16,808 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
|    +46.3% |   +4.619s | 83.0% → 72.7% |    9.97s → 14.59s |  9,971 → 14,590 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
| +10478.6% |   +2.934s |  0.2% → 14.8% |    28.0ms → 2.96s |      28 → 2,962 | `ZSTD_insertBt1`                                     | `zstd_opt.c`        |
| +97533.3% |   +2.926s | <0.1% → 14.6% |     3.0ms → 2.92s |       3 → 2,929 | `ZSTD_compressBegin_internal`                        | `zstd_compress.c`   |
| +97533.3% |   +2.926s | <0.1% → 14.6% |     3.0ms → 2.92s |       3 → 2,929 | `ZSTD_compressBegin_advanced_internal`               | `zstd_compress.c`   |
|       new |   +2.922s |  0.0% → 14.6% |       0ms → 2.92s |       0 → 2,922 | `ZSTD_updateTree`                                    | `zstd_opt.c`        |
|       new |   +2.922s |  0.0% → 14.6% |       0ms → 2.92s |       0 → 2,922 | `ZSTD_loadDictionaryContent`                         | `zstd_compress.c`   |
|       new | +265.00ms |   0.0% → 1.3% |     0ms → 265.0ms |         0 → 265 | `ZSTD_compressEnd_public`                            | `zstd_compress.c`   |
|       new |  +23.00ms |   0.0% → 0.1% |      0ms → 23.0ms |          0 → 23 | `ZSTD_splitBlock`                                    | `zstd_preSplit.c`   |
|       new |  +22.00ms |   0.0% → 0.1% |      0ms → 22.0ms |          0 → 22 | `ZSTD_entropyCompressSeqStore`                       | `zstd_compress.c`   |
|   +100.0% |  +17.00ms |   0.1% → 0.2% |   17.0ms → 34.0ms |         17 → 34 | `ZSTD_buildBlockEntropyStats`                        | `zstd_compress.c`   |
|       new |  +17.00ms |   0.0% → 0.1% |      0ms → 17.0ms |          0 → 17 | `ZSTD_recordFingerprint_1`                           | `zstd_preSplit.c`   |
|    +38.9% |  +14.00ms |   0.3% → 0.2% |   36.0ms → 50.0ms |         36 → 50 | `ZSTD_rawLiteralsCost`                               | `zstd_opt.c`        |
|    +10.2% |  +13.00ms |   1.1% → 0.7% | 127.0ms → 140.0ms |       127 → 140 | `ZSTD_litLengthPrice`                                | `zstd_opt.c`        |
|    +23.5% |   +8.00ms |   0.3% → 0.2% |   34.0ms → 42.0ms |         34 → 42 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`   |
|    +20.6% |   +7.00ms |   0.3% → 0.2% |   34.0ms → 41.0ms |         34 → 41 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |            % |            Time | Samples | Function                                | Location                    |
| ------: | -------: | -----------: | --------------: | ------: | --------------------------------------- | --------------------------- |
|  -78.6% | -22.00ms | 0.2% → <0.1% |  28.0ms → 6.0ms |  28 → 6 | `ZSTD_updateStats`                      | `zstd_opt.c`                |
|  -62.5% | -10.00ms | 0.1% → <0.1% |  16.0ms → 6.0ms |  16 → 6 | `ZSTD_estimateBlockSize_symbolType`     | `zstd_compress.c`           |
|  -66.7% |  -4.00ms |        <0.1% |   6.0ms → 2.0ms |   6 → 2 | `clear_page ([kernel])`                 | `<unknown>`                 |
|  -15.4% |  -4.00ms |  0.2% → 0.1% | 26.0ms → 22.0ms | 26 → 22 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c`           |
|  -15.4% |  -4.00ms |  0.2% → 0.1% | 26.0ms → 22.0ms | 26 → 22 | `ZSTD_compressSeqStore_singleBlock`     | `zstd_compress.c`           |
|  -66.7% |  -4.00ms |        <0.1% |   6.0ms → 2.0ms |   6 → 2 | `HUF_writeCTable_wksp`                  | `huf_compress.c`            |
|  -60.0% |  -3.00ms |        <0.1% |   5.0ms → 2.0ms |   5 → 2 | `vma_alloc_anon_folio_pmd ([kernel])`   | `<unknown>`                 |
|  -42.9% |  -3.00ms | 0.1% → <0.1% |   7.0ms → 4.0ms |   7 → 4 | `ZSTD_XXH64_update`                     | `xxhash.h`                  |
|  -60.0% |  -3.00ms |        <0.1% |   5.0ms → 2.0ms |   5 → 2 | `FSE_buildCTable_wksp`                  | `fse_compress.c`            |
|  -60.0% |  -3.00ms |        <0.1% |   5.0ms → 2.0ms |   5 → 2 | `ZSTD_buildCTable`                      | `zstd_compress_sequences.c` |
|  -33.3% |  -2.00ms |        <0.1% |   6.0ms → 4.0ms |   6 → 4 | `do_huge_pmd_anonymous_page ([kernel])` | `<unknown>`                 |
|  -33.3% |  -2.00ms |        <0.1% |   6.0ms → 4.0ms |   6 → 4 | `__handle_mm_fault ([kernel])`          | `<unknown>`                 |
|  -33.3% |  -2.00ms |        <0.1% |   6.0ms → 4.0ms |   6 → 4 | `handle_mm_fault ([kernel])`            | `<unknown>`                 |
| removed |  -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `FSE_compress_usingCTable_generic`      | `fse_compress.c`            |
| removed |  -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `ZSTD_deriveSeqStoreChunk`              | `zstd_compress.c`           |
| removed |  -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `pthread_cond_wait (libc.so.6)`         | `<unknown>`                 |
|  -16.7% |  -1.00ms |        <0.1% |   6.0ms → 5.0ms |   6 → 5 | `do_page_fault ([kernel])`              | `<unknown>`                 |
|  -16.7% |  -1.00ms |        <0.1% |   6.0ms → 5.0ms |   6 → 5 | `do_translation_fault ([kernel])`       | `<unknown>`                 |
|  -16.7% |  -1.00ms |        <0.1% |   6.0ms → 5.0ms |   6 → 5 | `do_mem_abort ([kernel])`               | `<unknown>`                 |
|  -16.7% |  -1.00ms |        <0.1% |   6.0ms → 5.0ms |   6 → 5 | `el0_da ([kernel])`                     | `<unknown>`                 |

##### Ours

|  Change |    Delta |            % |            Time | Samples | Function                                | Location                    |
| ------: | -------: | -----------: | --------------: | ------: | --------------------------------------- | --------------------------- |
|  -78.6% | -22.00ms | 0.2% → <0.1% |  28.0ms → 6.0ms |  28 → 6 | `ZSTD_updateStats`                      | `zstd_opt.c`                |
|  -62.5% | -10.00ms | 0.1% → <0.1% |  16.0ms → 6.0ms |  16 → 6 | `ZSTD_estimateBlockSize_symbolType`     | `zstd_compress.c`           |
|  -15.4% |  -4.00ms |  0.2% → 0.1% | 26.0ms → 22.0ms | 26 → 22 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c`           |
|  -15.4% |  -4.00ms |  0.2% → 0.1% | 26.0ms → 22.0ms | 26 → 22 | `ZSTD_compressSeqStore_singleBlock`     | `zstd_compress.c`           |
|  -66.7% |  -4.00ms |        <0.1% |   6.0ms → 2.0ms |   6 → 2 | `HUF_writeCTable_wksp`                  | `huf_compress.c`            |
|  -42.9% |  -3.00ms | 0.1% → <0.1% |   7.0ms → 4.0ms |   7 → 4 | `ZSTD_XXH64_update`                     | `xxhash.h`                  |
|  -60.0% |  -3.00ms |        <0.1% |   5.0ms → 2.0ms |   5 → 2 | `FSE_buildCTable_wksp`                  | `fse_compress.c`            |
|  -60.0% |  -3.00ms |        <0.1% |   5.0ms → 2.0ms |   5 → 2 | `ZSTD_buildCTable`                      | `zstd_compress_sequences.c` |
| removed |  -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `FSE_compress_usingCTable_generic`      | `fse_compress.c`            |
| removed |  -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `ZSTD_deriveSeqStoreChunk`              | `zstd_compress.c`           |
|   -5.3% |  -1.00ms |  0.2% → 0.1% | 19.0ms → 18.0ms | 19 → 18 | `HIST_count_parallel_wksp`              | `hist.c`                    |
| removed |  -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `ZSTD_fseBitCost`                       | `zstd_compress_sequences.c` |
|  -10.0% |  -1.00ms | 0.1% → <0.1% |  10.0ms → 9.0ms |  10 → 9 | `ZSTD_compressStream2`                  | `zstd_compress.c`           |

# Uninterruptible sleep profile diff

Slept 2 times → 5 times (+3 times, +150.0%).

| Category |  Change | Delta |      % | Sleeps |
| -------- | ------: | ----: | -----: | -----: |
| Kernel   | +150.0% |    +3 | 100.0% |  2 → 5 |

## Hottest functions

### Self sleeps

#### Regressions

Functions with the largest increase in uninterruptible sleeps entered directly in the function body, excluding callees.

##### Kernel

|  Change | Delta |      % | Sleeps | Function                    | Location    |
| ------: | ----: | -----: | -----: | --------------------------- | ----------- |
| +150.0% |    +3 | 100.0% |  2 → 5 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

### Total sleeps

#### Regressions

Functions with the largest increase in total uninterruptible sleeps entered in the function and all its callees.

|  Change | Delta |              % | Sleeps | Function                                | Location    |
| ------: | ----: | -------------: | -----: | --------------------------------------- | ----------- |
| +150.0% |    +3 |         100.0% |  2 → 5 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
| +150.0% |    +3 |         100.0% |  2 → 5 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
| +150.0% |    +3 |         100.0% |  2 → 5 | `__schedule ([kernel])`                 | `<unknown>` |
| +150.0% |    +3 |         100.0% |  2 → 5 | `schedule ([kernel])`                   | `<unknown>` |
| +150.0% |    +3 |         100.0% |  2 → 5 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
| +150.0% |    +3 |         100.0% |  2 → 5 | `do_el0_svc ([kernel])`                 | `<unknown>` |
| +150.0% |    +3 |         100.0% |  2 → 5 | `el0_svc ([kernel])`                    | `<unknown>` |
| +150.0% |    +3 |         100.0% |  2 → 5 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
| +150.0% |    +3 |         100.0% |  2 → 5 | `el0t_64_sync ([kernel])`               | `<unknown>` |
| +150.0% |    +3 |         100.0% |  2 → 5 | `unknown (libc.so.6)`                   | `<unknown>` |
| +150.0% |    +3 |         100.0% |  2 → 5 | `POOL_thread`                           | `pool.c`    |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `schedule_preempt_disabled ([kernel])`  | `<unknown>` |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `rwsem_down_read_slowpath ([kernel])`   | `<unknown>` |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `down_read_killable ([kernel])`         | `<unknown>` |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `lock_mm_and_find_vma ([kernel])`       | `<unknown>` |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `do_page_fault ([kernel])`              | `<unknown>` |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `do_translation_fault ([kernel])`       | `<unknown>` |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `do_mem_abort ([kernel])`               | `<unknown>` |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `el1_abort ([kernel])`                  | `<unknown>` |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `el1h_64_sync_handler ([kernel])`       | `<unknown>` |

##### Kernel

|  Change | Delta |              % | Sleeps | Function                                | Location    |
| ------: | ----: | -------------: | -----: | --------------------------------------- | ----------- |
| +150.0% |    +3 |         100.0% |  2 → 5 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
| +150.0% |    +3 |         100.0% |  2 → 5 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
| +150.0% |    +3 |         100.0% |  2 → 5 | `__schedule ([kernel])`                 | `<unknown>` |
| +150.0% |    +3 |         100.0% |  2 → 5 | `schedule ([kernel])`                   | `<unknown>` |
| +150.0% |    +3 |         100.0% |  2 → 5 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
| +150.0% |    +3 |         100.0% |  2 → 5 | `do_el0_svc ([kernel])`                 | `<unknown>` |
| +150.0% |    +3 |         100.0% |  2 → 5 | `el0_svc ([kernel])`                    | `<unknown>` |
| +150.0% |    +3 |         100.0% |  2 → 5 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
| +150.0% |    +3 |         100.0% |  2 → 5 | `el0t_64_sync ([kernel])`               | `<unknown>` |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `schedule_preempt_disabled ([kernel])`  | `<unknown>` |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `rwsem_down_read_slowpath ([kernel])`   | `<unknown>` |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `down_read_killable ([kernel])`         | `<unknown>` |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `lock_mm_and_find_vma ([kernel])`       | `<unknown>` |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `do_page_fault ([kernel])`              | `<unknown>` |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `do_translation_fault ([kernel])`       | `<unknown>` |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `do_mem_abort ([kernel])`               | `<unknown>` |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `el1_abort ([kernel])`                  | `<unknown>` |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `el1h_64_sync_handler ([kernel])`       | `<unknown>` |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `el1h_64_sync ([kernel])`               | `<unknown>` |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `__arch_copy_to_user ([kernel])`        | `<unknown>` |

# Interruptible sleep profile diff

Slept 215 times → 214 times (-1 time, -0.5%).

| Category | Change | Delta |      % |    Sleeps |
| -------- | -----: | ----: | -----: | --------: |
| Kernel   |  -0.5% |    -1 | 100.0% | 215 → 214 |

## Hottest functions

### Self sleeps

#### Improvements

Functions with the largest decrease in interruptible sleeps entered directly in the function body, excluding callees.

##### Kernel

| Change | Delta |      % |    Sleeps | Function                    | Location    |
| -----: | ----: | -----: | --------: | --------------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

### Total sleeps

#### Regressions

Functions with the largest increase in total interruptible sleeps entered in the function and all its callees.

| Change | Delta |             % |    Sleeps | Function                           | Location            |
| -----: | ----: | ------------: | --------: | ---------------------------------- | ------------------- |
|  +2.4% |    +4 | 76.3% → 78.5% | 164 → 168 | `POOL_thread`                      | `pool.c`            |
|    new |    +1 |   0.0% → 0.5% |     0 → 1 | `__pthread_mutex_lock (libc.so.6)` | `<unknown>`         |
|    new |    +1 |   0.0% → 0.5% |     0 → 1 | `ZSTDMT_compressionJob`            | `zstdmt_compress.c` |

#### Improvements

Functions with the largest decrease in total interruptible sleeps entered in the function and all its callees.

| Change | Delta |              % |    Sleeps | Function                                | Location            |
| -----: | ----: | -------------: | --------: | --------------------------------------- | ------------------- |
|  -9.8% |    -5 |  23.7% → 21.5% |   51 → 46 | `FIO_compressFilename_srcFile`          | `fileio.c`          |
|  -9.8% |    -5 |  23.7% → 21.5% |   51 → 46 | `FIO_compressFilename`                  | `fileio.c`          |
|  -9.8% |    -5 |  23.7% → 21.5% |   51 → 46 | `main`                                  | `zstdcli.c`         |
|  -9.8% |    -5 |  23.7% → 21.5% |   51 → 46 | `__libc_start_main (libc.so.6)`         | `<unknown>`         |
|  -9.8% |    -5 |  23.7% → 21.5% |   51 → 46 | `_start (zstd)`                         | `<unknown>`         |
| -11.1% |    -5 |  20.9% → 18.7% |   45 → 40 | `ZSTDMT_compressStream_generic`         | `zstdmt_compress.c` |
| -11.1% |    -5 |  20.9% → 18.7% |   45 → 40 | `ZSTD_compressStream2`                  | `zstd_compress.c`   |
|  -0.9% |    -2 | 100.0% → 99.5% | 215 → 213 | `pthread_cond_wait (libc.so.6)`         | `<unknown>`         |
|  -0.5% |    -1 |         100.0% | 215 → 214 | `bpf_trace_run4 ([kernel])`             | `<unknown>`         |
|  -0.5% |    -1 |         100.0% | 215 → 214 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>`         |
|  -0.5% |    -1 |         100.0% | 215 → 214 | `__schedule ([kernel])`                 | `<unknown>`         |
|  -0.5% |    -1 |         100.0% | 215 → 214 | `schedule ([kernel])`                   | `<unknown>`         |
|  -0.5% |    -1 |         100.0% | 215 → 214 | `futex_do_wait ([kernel])`              | `<unknown>`         |
|  -0.5% |    -1 |         100.0% | 215 → 214 | `__futex_wait ([kernel])`               | `<unknown>`         |
|  -0.5% |    -1 |         100.0% | 215 → 214 | `futex_wait ([kernel])`                 | `<unknown>`         |
|  -0.5% |    -1 |         100.0% | 215 → 214 | `do_futex ([kernel])`                   | `<unknown>`         |
|  -0.5% |    -1 |         100.0% | 215 → 214 | `__arm64_sys_futex ([kernel])`          | `<unknown>`         |
|  -0.5% |    -1 |         100.0% | 215 → 214 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>`         |
|  -0.5% |    -1 |         100.0% | 215 → 214 | `do_el0_svc ([kernel])`                 | `<unknown>`         |
|  -0.5% |    -1 |         100.0% | 215 → 214 | `el0_svc ([kernel])`                    | `<unknown>`         |

##### Kernel

| Change | Delta |      % |    Sleeps | Function                                | Location    |
| -----: | ----: | -----: | --------: | --------------------------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `__schedule ([kernel])`                 | `<unknown>` |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `schedule ([kernel])`                   | `<unknown>` |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `futex_do_wait ([kernel])`              | `<unknown>` |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `__futex_wait ([kernel])`               | `<unknown>` |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `futex_wait ([kernel])`                 | `<unknown>` |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `do_futex ([kernel])`                   | `<unknown>` |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `__arm64_sys_futex ([kernel])`          | `<unknown>` |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `do_el0_svc ([kernel])`                 | `<unknown>` |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `el0_svc ([kernel])`                    | `<unknown>` |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `el0t_64_sync ([kernel])`               | `<unknown>` |

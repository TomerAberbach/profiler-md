# CPU profile

Took 12s over 12,005 samples (1.0ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| Ours     | 99.8% | 11.97s |  11,975 |
| Kernel   |  0.2% | 23.0ms |      23 |
| Native   |  0.1% |  7.0ms |       7 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── 11.99s (99.9%) unknown (libc.so.6)
    ├── … 11.97s (99.8%) POOL_thread at pool.c
    │   └── 11.97s (99.8%) ZSTDMT_compressionJob at zstdmt_compress.c
    │       └── 11.97s (99.7%) ZSTD_compressContinue_internal at zstd_compress.c
    │           ├── 11.93s (99.4%) ZSTD_buildSeqStore
    │           │   ├── 11.74s (97.9%, self 13.5%) ZSTD_compressBlock_opt2 at zstd_opt.c
    │           │   │   ├── 10.09s (84.1%, self 83.9%) ZSTD_btGetAllMatches_noDict_3
    │           │   │   │   └── 27.0ms (0.2%) ZSTD_insertBt1
    │           │   │   └── 24.0ms (0.2%) ZSTD_insertAndFindFirstIndexHash3
    │           │   ├── 114.0ms (0.9%) ZSTD_litLengthPrice at zstd_opt.c
    │           │   ├── 28.0ms (0.2%) ZSTD_rawLiteralsCost at zstd_opt.c
    │           │   └── 18.0ms (0.1%) ZSTD_updateStats at zstd_opt.c
    │           ├── 28.0ms (0.2%) ZSTD_deriveBlockSplitsHelper
    │           └── 13.0ms (0.1%) ZSTD_compressSeqStore_singleBlock
    │               └── 13.0ms (0.1%) ZSTD_entropyCompressSeqStore_internal
    │                   └── 8.0ms (0.1%) ZSTD_encodeSequences at zstd_compress_sequences.c
    └── … 11.0ms (0.1%) __read (libc.so.6)
        └── 11.0ms (0.1%) el0t_64_sync ([kernel])
            └── 11.0ms (0.1%) el0t_64_sync_handler ([kernel])
                └── 11.0ms (0.1%) el0_svc ([kernel])
                    └── 11.0ms (0.1%) do_el0_svc ([kernel])
                        └── 11.0ms (0.1%) invoke_syscall.constprop.0 ([kernel])
                            └── 11.0ms (0.1%) __arm64_sys_read ([kernel])
                                └── 11.0ms (0.1%) ksys_read ([kernel])
                                    └── 11.0ms (0.1%) vfs_read ([kernel])
                                        └── 11.0ms (0.1%) ovl_read_iter ([kernel])
                                            └── 11.0ms (0.1%) backing_file_read_iter ([kernel])
                                                └── 11.0ms (0.1%) vfs_iter_read ([kernel])
                                                    └── 11.0ms (0.1%) do_iter_readv_writev ([kernel])
                                                        └── 11.0ms (0.1%) ext4_file_read_iter ([kernel])
                                                            └── 11.0ms (0.1%) generic_file_read_iter ([kernel])
                                                                └── 11.0ms (0.1%) filemap_read ([kernel])
                                                                    └── 10.0ms (0.1%) copy_page_to_iter ([kernel])
                                                                        └── 10.0ms (0.1%) __arch_copy_to_user ([kernel])
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|     % |    Time | Samples | Function                            | Location                    |
| ----: | ------: | ------: | ----------------------------------- | --------------------------- |
| 84.0% |  10.08s |  10,082 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c`                |
| 13.6% |   1.63s |   1,632 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c`                |
|  1.0% | 115.0ms |     115 | `ZSTD_litLengthPrice`               | `zstd_opt.c`                |
|  0.2% |  28.0ms |      28 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c`                |
|  0.2% |  27.0ms |      27 | `ZSTD_insertBt1`                    | `zstd_opt.c`                |
|  0.2% |  24.0ms |      24 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c`                |
|  0.1% |  18.0ms |      18 | `ZSTD_updateStats`                  | `zstd_opt.c`                |
|  0.1% |   9.0ms |       9 | `__arch_copy_to_user ([kernel])`    | `<unknown>`                 |
|  0.1% |   8.0ms |       8 | `ZSTD_encodeSequences`              | `zstd_compress_sequences.c` |
|  0.1% |   7.0ms |       7 | `ZSTD_seqToCodes`                   | `zstd_compress.c`           |
| <0.1% |   6.0ms |       6 | `unknown (libc.so.6)`               | `<unknown>`                 |
| <0.1% |   5.0ms |       5 | `FSE_buildCTable_wksp`              | `fse_compress.c`            |
| <0.1% |   5.0ms |       5 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c`                |
| <0.1% |   4.0ms |       4 | `clear_page ([kernel])`             | `<unknown>`                 |
| <0.1% |   4.0ms |       4 | `HIST_count_simple`                 | `hist.c`                    |
| <0.1% |   4.0ms |       4 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c`           |
| <0.1% |   4.0ms |       4 | `HIST_count_parallel_wksp`          | `hist.c`                    |
| <0.1% |   3.0ms |       3 | `ZSTD_XXH64_update`                 | `xxhash.h`                  |
| <0.1% |   3.0ms |       3 | `ZSTD_selectEncodingType`           | `zstd_compress_sequences.c` |
| <0.1% |   3.0ms |       3 | `HUF_buildCTable_wksp`              | `huf_compress.c`            |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function                            | Location                    |
| ----: | ------: | ------: | ----------------------------------- | --------------------------- |
| 84.0% |  10.08s |  10,082 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c`                |
| 13.6% |   1.63s |   1,632 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c`                |
|  1.0% | 115.0ms |     115 | `ZSTD_litLengthPrice`               | `zstd_opt.c`                |
|  0.2% |  28.0ms |      28 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c`                |
|  0.2% |  27.0ms |      27 | `ZSTD_insertBt1`                    | `zstd_opt.c`                |
|  0.2% |  24.0ms |      24 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c`                |
|  0.1% |  18.0ms |      18 | `ZSTD_updateStats`                  | `zstd_opt.c`                |
|  0.1% |   8.0ms |       8 | `ZSTD_encodeSequences`              | `zstd_compress_sequences.c` |
|  0.1% |   7.0ms |       7 | `ZSTD_seqToCodes`                   | `zstd_compress.c`           |
| <0.1% |   5.0ms |       5 | `FSE_buildCTable_wksp`              | `fse_compress.c`            |
| <0.1% |   5.0ms |       5 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c`                |
| <0.1% |   4.0ms |       4 | `HIST_count_simple`                 | `hist.c`                    |
| <0.1% |   4.0ms |       4 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c`           |
| <0.1% |   4.0ms |       4 | `HIST_count_parallel_wksp`          | `hist.c`                    |
| <0.1% |   3.0ms |       3 | `ZSTD_XXH64_update`                 | `xxhash.h`                  |
| <0.1% |   3.0ms |       3 | `ZSTD_selectEncodingType`           | `zstd_compress_sequences.c` |
| <0.1% |   3.0ms |       3 | `HUF_buildCTable_wksp`              | `huf_compress.c`            |
| <0.1% |   2.0ms |       2 | `FSE_writeNCount_generic`           | `fse_compress.c`            |
| <0.1% |   1.0ms |       1 | `ZSTD_deriveBlockSplitsHelper`      | `zstd_compress.c`           |

#### Lines

Lines with the largest contribution to each function's self time.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |   Time | Samples | Location         |
| -----: | -----: | ------: | ---------------- |
| 100.0% | 10.08s |  10,082 | `zstd_opt.c:876` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 1.63s |   1,632 | `zstd_opt.c:1455` |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 41.7% | 48.0ms |      48 | `zstd_opt.c:313` |
| 31.3% | 36.0ms |      36 | `zstd_opt.c:315` |
| 12.2% | 14.0ms |      14 | `zstd_opt.c:298` |
| 10.4% | 12.0ms |      12 | `zstd_opt.c:310` |
|  4.3% |  5.0ms |       5 | `zstd_opt.c:306` |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 85.7% | 24.0ms |      24 | `zstd_opt.c:266` |
| 10.7% |  3.0ms |       3 | `zstd_opt.c:273` |
|  3.6% |  1.0ms |       1 | `zstd_opt.c:276` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 40.7% | 11.0ms |      11 | `zstd_opt.c:538` |
| 22.2% |  6.0ms |       6 | `zstd_opt.c:545` |
|  7.4% |  2.0ms |       2 | `zstd_opt.c:518` |
|  3.7% |  1.0ms |       1 | `zstd_opt.c:536` |
|  3.7% |  1.0ms |       1 | `zstd_opt.c:489` |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|     % |  Time | Samples | Location         |
| ----: | ----: | ------: | ---------------- |
| 33.3% | 8.0ms |       8 | `zstd_opt.c:424` |
| 20.8% | 5.0ms |       5 | `zstd_opt.c:430` |
| 20.8% | 5.0ms |       5 | `zstd_opt.c:423` |
| 12.5% | 3.0ms |       3 | `zstd_opt.c:420` |
| 12.5% | 3.0ms |       3 | `zstd_opt.c:415` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|     % |  Time | Samples | Location         |
| ----: | ----: | ------: | ---------------- |
| 22.2% | 4.0ms |       4 | `zstd_opt.c:377` |
| 16.7% | 3.0ms |       3 | `zstd_opt.c:364` |
| 16.7% | 3.0ms |       3 | `zstd_opt.c:371` |
| 11.1% | 2.0ms |       2 | `zstd_opt.c:369` |
|  5.6% | 1.0ms |       1 | `zstd_opt.c:384` |

##### `ZSTD_encodeSequences` (`zstd_compress_sequences.c`)

|      % |  Time | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 8.0ms |       8 | `zstd_compress_sequences.c:437` |

##### `ZSTD_seqToCodes` (`zstd_compress.c`)

|     % |  Time | Samples | Location               |
| ----: | ----: | ------: | ---------------------- |
| 57.1% | 4.0ms |       4 | `zstd_compress.c:2697` |
| 28.6% | 2.0ms |       2 | `zstd_compress.c:2696` |
| 14.3% | 1.0ms |       1 | `zstd_compress.c:2694` |

##### `FSE_buildCTable_wksp` (`fse_compress.c`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 40.0% | 2.0ms |       2 | `fse_compress.c:172` |
| 20.0% | 1.0ms |       1 | `fse_compress.c:130` |
| 20.0% | 1.0ms |       1 | `fse_compress.c:170` |
| 20.0% | 1.0ms |       1 | `fse_compress.c:104` |

##### `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`)

|     % |  Time | Samples | Location          |
| ----: | ----: | ------: | ----------------- |
| 80.0% | 4.0ms |       4 | `zstd_opt.c:1028` |
| 20.0% | 1.0ms |       1 | `zstd_opt.c:1044` |

##### `HIST_count_simple` (`hist.c`)

|     % |  Time | Samples | Location    |
| ----: | ----: | ------: | ----------- |
| 75.0% | 3.0ms |       3 | `hist.c:42` |
| 25.0% | 1.0ms |       1 | `hist.c:49` |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

|      % |  Time | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 4.0ms |       4 | `zstd_compress.c:3822` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |  Time | Samples | Location     |
| ----: | ----: | ------: | ------------ |
| 25.0% | 1.0ms |       1 | `hist.c:112` |
| 25.0% | 1.0ms |       1 | `hist.c:100` |
| 25.0% | 1.0ms |       1 | `hist.c:109` |
| 25.0% | 1.0ms |       1 | `hist.c:95`  |

##### `ZSTD_XXH64_update` (`xxhash.h`)

|      % |  Time | Samples | Location        |
| -----: | ----: | ------: | --------------- |
| 100.0% | 3.0ms |       3 | `xxhash.h:3559` |

##### `ZSTD_selectEncodingType` (`zstd_compress_sequences.c`)

|      % |  Time | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 3.0ms |       3 | `zstd_compress_sequences.c:209` |

##### `HUF_buildCTable_wksp` (`huf_compress.c`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 66.7% | 2.0ms |       2 | `huf_compress.c:778` |
| 33.3% | 1.0ms |       1 | `huf_compress.c:788` |

##### `FSE_writeNCount_generic` (`fse_compress.c`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 50.0% | 1.0ms |       1 | `fse_compress.c:302` |
| 50.0% | 1.0ms |       1 | `fse_compress.c:305` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|      % |  Time | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 1.0ms |       1 | `zstd_compress.c:4154` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                    | Location     |
| -----: | -----: | ------: | ------------------------- | ------------ |
| 100.0% | 10.08s |  10,082 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 99.6% | 1.62s |   1,626 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  0.4% | 6.0ms |       6 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

|     % |    Time | Samples | Caller                        | Location          |
| ----: | ------: | ------: | ----------------------------- | ----------------- |
| 99.1% | 114.0ms |     114 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  0.9% |   1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 28.0ms |      28 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                          | Location     |
| -----: | -----: | ------: | ------------------------------- | ------------ |
| 100.0% | 27.0ms |      27 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                    | Location     |
| -----: | -----: | ------: | ------------------------- | ------------ |
| 100.0% | 24.0ms |      24 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 18.0ms |      18 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `__arch_copy_to_user ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                         | Location    |
| -----: | ----: | ------: | ------------------------------ | ----------- |
| 100.0% | 9.0ms |       9 | `copy_page_to_iter ([kernel])` | `<unknown>` |

##### `ZSTD_encodeSequences` (`zstd_compress_sequences.c`)

|      % |  Time | Samples | Caller                                  | Location          |
| -----: | ----: | ------: | --------------------------------------- | ----------------- |
| 100.0% | 8.0ms |       8 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `ZSTD_seqToCodes` (`zstd_compress.c`)

|     % |  Time | Samples | Caller                                  | Location          |
| ----: | ----: | ------: | --------------------------------------- | ----------------- |
| 71.4% | 5.0ms |       5 | `ZSTD_buildBlockEntropyStats`           | `zstd_compress.c` |
| 28.6% | 2.0ms |       2 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `unknown (libc.so.6)` (`<unknown>`)

|     % |  Time | Samples | Caller                              | Location          |
| ----: | ----: | ------: | ----------------------------------- | ----------------- |
| 50.0% | 3.0ms |       3 | `ZSTD_compressStream2`              | `zstd_compress.c` |
| 33.3% | 2.0ms |       2 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c` |
| 16.7% | 1.0ms |       1 | `ZSTD_resetCCtx_internal`           | `zstd_compress.c` |

##### `FSE_buildCTable_wksp` (`fse_compress.c`)

|     % |  Time | Samples | Caller                 | Location                    |
| ----: | ----: | ------: | ---------------------- | --------------------------- |
| 60.0% | 3.0ms |       3 | `ZSTD_buildCTable`     | `zstd_compress_sequences.c` |
| 40.0% | 2.0ms |       2 | `HUF_writeCTable_wksp` | `huf_compress.c`            |

##### `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 5.0ms |       5 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `clear_page ([kernel])` (`<unknown>`)

|     % |  Time | Samples | Caller                                   | Location    |
| ----: | ----: | ------: | ---------------------------------------- | ----------- |
| 75.0% | 3.0ms |       3 | `vma_alloc_anon_folio_pmd ([kernel])`    | `<unknown>` |
| 25.0% | 1.0ms |       1 | `__alloc_frozen_pages_noprof ([kernel])` | `<unknown>` |

##### `HIST_count_simple` (`hist.c`)

|     % |  Time | Samples | Caller                 | Location         |
| ----: | ----: | ------: | ---------------------- | ---------------- |
| 50.0% | 2.0ms |       2 | `HUF_writeCTable_wksp` | `huf_compress.c` |
| 50.0% | 2.0ms |       2 | `HIST_count_wksp`      | `hist.c`         |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                                               | Location          |
| -----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 4.0ms |       4 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|      % |  Time | Samples | Caller                          | Location          |
| -----: | ----: | ------: | ------------------------------- | ----------------- |
| 100.0% | 4.0ms |       4 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |

##### `ZSTD_XXH64_update` (`xxhash.h`)

|      % |  Time | Samples | Caller                  | Location            |
| -----: | ----: | ------: | ----------------------- | ------------------- |
| 100.0% | 3.0ms |       3 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTD_selectEncodingType` (`zstd_compress_sequences.c`)

|      % |  Time | Samples | Caller                          | Location          |
| -----: | ----: | ------: | ------------------------------- | ----------------- |
| 100.0% | 3.0ms |       3 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |

##### `HUF_buildCTable_wksp` (`huf_compress.c`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 66.7% | 2.0ms |       2 | `HUF_optimalTableLog`         | `huf_compress.c`  |
| 33.3% | 1.0ms |       1 | `ZSTD_buildBlockEntropyStats` | `zstd_compress.c` |

##### `FSE_writeNCount_generic` (`fse_compress.c`)

|     % |  Time | Samples | Caller                 | Location                    |
| ----: | ----: | ------: | ---------------------- | --------------------------- |
| 50.0% | 1.0ms |       1 | `HUF_writeCTable_wksp` | `huf_compress.c`            |
| 50.0% | 1.0ms |       1 | `ZSTD_NCountCost`      | `zstd_compress_sequences.c` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                           | Location          |
| -----: | ----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

### Total time

Functions with the most time spent within the function and its callees.

|      % |    Time | Samples | Function                                             | Location            |
| -----: | ------: | ------: | ---------------------------------------------------- | ------------------- |
| 100.0% |     12s |  12,003 | `unknown (libc.so.6)`                                | `<unknown>`         |
|  99.9% |  11.99s |  11,996 | `POOL_thread`                                        | `pool.c`            |
|  99.8% |  11.98s |  11,982 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c` |
|  99.8% |  11.97s |  11,976 | `ZSTD_compressContinue_internal`                     | `zstd_compress.c`   |
|  99.4% |  11.93s |  11,933 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`   |
|  98.0% |  11.76s |  11,767 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
|  84.2% |  10.11s |  10,111 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
|   1.0% | 115.0ms |     115 | `ZSTD_litLengthPrice`                                | `zstd_opt.c`        |
|   0.2% |  30.0ms |      30 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`   |
|   0.2% |  29.0ms |      29 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |
|   0.2% |  28.0ms |      28 | `ZSTD_rawLiteralsCost`                               | `zstd_opt.c`        |
|   0.2% |  27.0ms |      27 | `ZSTD_insertBt1`                                     | `zstd_opt.c`        |
|   0.2% |  24.0ms |      24 | `ZSTD_insertAndFindFirstIndexHash3`                  | `zstd_opt.c`        |
|   0.2% |  22.0ms |      22 | `ZSTD_buildBlockEntropyStats`                        | `zstd_compress.c`   |
|   0.2% |  21.0ms |      21 | `el0t_64_sync_handler ([kernel])`                    | `<unknown>`         |
|   0.2% |  21.0ms |      21 | `el0t_64_sync ([kernel])`                            | `<unknown>`         |
|   0.2% |  19.0ms |      19 | `ZSTD_compressBlock_btultra2`                        | `zstd_opt.c`        |
|   0.1% |  18.0ms |      18 | `ZSTD_updateStats`                                   | `zstd_opt.c`        |
|   0.1% |  15.0ms |      15 | `el0_svc ([kernel])`                                 | `<unknown>`         |
|   0.1% |  14.0ms |      14 | `invoke_syscall.constprop.0 ([kernel])`              | `<unknown>`         |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function                                             | Location                    |
| ----: | ------: | ------: | ---------------------------------------------------- | --------------------------- |
| 99.9% |  11.99s |  11,996 | `POOL_thread`                                        | `pool.c`                    |
| 99.8% |  11.98s |  11,982 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c`         |
| 99.8% |  11.97s |  11,976 | `ZSTD_compressContinue_internal`                     | `zstd_compress.c`           |
| 99.4% |  11.93s |  11,933 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`           |
| 98.0% |  11.76s |  11,767 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`                |
| 84.2% |  10.11s |  10,111 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`                |
|  1.0% | 115.0ms |     115 | `ZSTD_litLengthPrice`                                | `zstd_opt.c`                |
|  0.2% |  30.0ms |      30 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`           |
|  0.2% |  29.0ms |      29 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`           |
|  0.2% |  28.0ms |      28 | `ZSTD_rawLiteralsCost`                               | `zstd_opt.c`                |
|  0.2% |  27.0ms |      27 | `ZSTD_insertBt1`                                     | `zstd_opt.c`                |
|  0.2% |  24.0ms |      24 | `ZSTD_insertAndFindFirstIndexHash3`                  | `zstd_opt.c`                |
|  0.2% |  22.0ms |      22 | `ZSTD_buildBlockEntropyStats`                        | `zstd_compress.c`           |
|  0.2% |  19.0ms |      19 | `ZSTD_compressBlock_btultra2`                        | `zstd_opt.c`                |
|  0.1% |  18.0ms |      18 | `ZSTD_updateStats`                                   | `zstd_opt.c`                |
|  0.1% |  13.0ms |      13 | `ZSTD_entropyCompressSeqStore_internal`              | `zstd_compress.c`           |
|  0.1% |  13.0ms |      13 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`           |
|  0.1% |  11.0ms |      11 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c`           |
|  0.1% |  11.0ms |      11 | `AIO_ReadPool_executeReadJob`                        | `fileio_asyncio.c`          |
|  0.1% |   8.0ms |       8 | `ZSTD_encodeSequences`                               | `zstd_compress_sequences.c` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `unknown (libc.so.6)` (`<unknown>`)

|     % |   Time | Samples | Caller                          | Location          |
| ----: | -----: | ------: | ------------------------------- | ----------------- |
| 99.9% | 11.99s |  11,996 | `unknown (libc.so.6)`           | `<unknown>`       |
|  0.1% | 11.0ms |      11 | `fread (libc.so.6)`             | `<unknown>`       |
|  0.1% |  7.0ms |       7 | `__libc_start_main (libc.so.6)` | `<unknown>`       |
| <0.1% |  6.0ms |       6 | `ZSTD_compressStream2`          | `zstd_compress.c` |
| <0.1% |  3.0ms |       3 | `ZSTD_resetCCtx_internal`       | `zstd_compress.c` |

##### `POOL_thread` (`pool.c`)

|      % |   Time | Samples | Caller                | Location    |
| -----: | -----: | ------: | --------------------- | ----------- |
| 100.0% | 11.99s |  11,996 | `unknown (libc.so.6)` | `<unknown>` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|      % |   Time | Samples | Caller        | Location |
| -----: | -----: | ------: | ------------- | -------- |
| 100.0% | 11.98s |  11,982 | `POOL_thread` | `pool.c` |

##### `ZSTD_compressContinue_internal` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                  | Location            |
| -----: | -----: | ------: | ----------------------- | ------------------- |
| 100.0% | 11.97s |  11,976 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                           | Location          |
| -----: | -----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 11.93s |  11,933 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 99.8% | 11.74s |  11,749 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  0.2% | 18.0ms |      18 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                    | Location     |
| -----: | -----: | ------: | ------------------------- | ------------ |
| 100.0% | 10.11s |  10,111 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

|     % |    Time | Samples | Caller                        | Location          |
| ----: | ------: | ------: | ----------------------------- | ----------------- |
| 99.1% | 114.0ms |     114 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  0.9% |   1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                           | Location          |
| -----: | -----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 30.0ms |      30 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |
|   6.7% |  2.0ms |       2 | `ZSTD_deriveBlockSplitsHelper`   | `zstd_compress.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                         | Location          |
| -----: | -----: | ------: | ------------------------------ | ----------------- |
| 100.0% | 29.0ms |      29 | `ZSTD_deriveBlockSplitsHelper` | `zstd_compress.c` |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 28.0ms |      28 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                          | Location     |
| -----: | -----: | ------: | ------------------------------- | ------------ |
| 100.0% | 27.0ms |      27 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                    | Location     |
| -----: | -----: | ------: | ------------------------- | ------------ |
| 100.0% | 24.0ms |      24 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_buildBlockEntropyStats` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                                               | Location          |
| -----: | -----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 22.0ms |      22 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                    | Location    |
| -----: | -----: | ------: | ------------------------- | ----------- |
| 100.0% | 21.0ms |      21 | `el0t_64_sync ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

|     % |   Time | Samples | Caller                            | Location    |
| ----: | -----: | ------: | --------------------------------- | ----------- |
| 52.4% | 11.0ms |      11 | `__read (libc.so.6)`              | `<unknown>` |
| 28.6% |  6.0ms |       6 | `unknown (libc.so.6)`             | `<unknown>` |
|  4.8% |  1.0ms |       1 | `unknown ([unmapped])`            | `<unknown>` |
|  4.8% |  1.0ms |       1 | `unknown (ld-linux-aarch64.so.1)` | `<unknown>` |
|  4.8% |  1.0ms |       1 | `write (libc.so.6)`               | `<unknown>` |

##### `ZSTD_compressBlock_btultra2` (`zstd_opt.c`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 19.0ms |      19 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 18.0ms |      18 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `el0_svc ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                            | Location    |
| -----: | -----: | ------: | --------------------------------- | ----------- |
| 100.0% | 15.0ms |      15 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                  | Location    |
| -----: | -----: | ------: | ----------------------- | ----------- |
| 100.0% | 14.0ms |      14 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                              | Location          |
| -----: | -----: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 13.0ms |      13 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                           | Location          |
| -----: | -----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 13.0ms |      13 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

|     % |  Time | Samples | Caller                                  | Location          |
| ----: | ----: | ------: | --------------------------------------- | ----------------- |
| 72.7% | 8.0ms |       8 | `ZSTD_buildBlockEntropyStats`           | `zstd_compress.c` |
| 27.3% | 3.0ms |       3 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`)

|      % |   Time | Samples | Caller        | Location |
| -----: | -----: | ------: | ------------- | -------- |
| 100.0% | 11.0ms |      11 | `POOL_thread` | `pool.c` |

##### `ZSTD_encodeSequences` (`zstd_compress_sequences.c`)

|      % |  Time | Samples | Caller                                  | Location          |
| -----: | ----: | ------: | --------------------------------------- | ----------------- |
| 100.0% | 8.0ms |       8 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `unknown (libc.so.6)` (`<unknown>`)

|     % |   Time | Samples | Callee                    | Location    |
| ----: | -----: | ------: | ------------------------- | ----------- |
| 99.9% | 11.99s |  11,996 | `POOL_thread`             | `pool.c`    |
| 99.9% | 11.99s |  11,996 | `unknown (libc.so.6)`     | `<unknown>` |
|  0.1% | 11.0ms |      11 | `__read (libc.so.6)`      | `<unknown>` |
|  0.1% |  7.0ms |       7 | `main`                    | `zstdcli.c` |
| <0.1% |  6.0ms |       6 | `el0t_64_sync ([kernel])` | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|     % |   Time | Samples | Callee                            | Location            |
| ----: | -----: | ------: | --------------------------------- | ------------------- |
| 99.9% | 11.98s |  11,982 | `ZSTDMT_compressionJob`           | `zstdmt_compress.c` |
|  0.1% | 11.0ms |      11 | `AIO_ReadPool_executeReadJob`     | `fileio_asyncio.c`  |
| <0.1% |  1.0ms |       1 | `AIO_WritePool_executeWriteJob`   | `fileio_asyncio.c`  |
| <0.1% |  1.0ms |       1 | `pthread_cond_signal (libc.so.6)` | `<unknown>`         |
| <0.1% |  1.0ms |       1 | `pthread_cond_wait (libc.so.6)`   | `<unknown>`         |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|     % |   Time | Samples | Callee                                 | Location          |
| ----: | -----: | ------: | -------------------------------------- | ----------------- |
| 99.9% | 11.97s |  11,976 | `ZSTD_compressContinue_internal`       | `zstd_compress.c` |
| <0.1% |  3.0ms |       3 | `ZSTD_compressBegin_advanced_internal` | `zstd_compress.c` |
| <0.1% |  3.0ms |       3 | `ZSTD_XXH64_update`                    | `xxhash.h`        |

##### `ZSTD_compressContinue_internal` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                              | Location          |
| ----: | -----: | ------: | ----------------------------------- | ----------------- |
| 99.6% | 11.93s |  11,933 | `ZSTD_buildSeqStore`                | `zstd_compress.c` |
|  0.3% | 30.0ms |      30 | `ZSTD_deriveBlockSplitsHelper`      | `zstd_compress.c` |
|  0.1% | 13.0ms |      13 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|     % |    Time | Samples | Callee                        | Location     |
| ----: | ------: | ------: | ----------------------------- | ------------ |
| 98.5% |  11.74s |  11,749 | `ZSTD_compressBlock_opt2`     | `zstd_opt.c` |
|  1.0% | 114.0ms |     114 | `ZSTD_litLengthPrice`         | `zstd_opt.c` |
|  0.2% |  28.0ms |      28 | `ZSTD_rawLiteralsCost`        | `zstd_opt.c` |
|  0.2% |  19.0ms |      19 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c` |
|  0.2% |  18.0ms |      18 | `ZSTD_updateStats`            | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |   Time | Samples | Callee                              | Location     |
| ----: | -----: | ------: | ----------------------------------- | ------------ |
| 85.9% | 10.11s |  10,111 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c` |
|  0.2% | 24.0ms |      24 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c` |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|     % |   Time | Samples | Callee                   | Location     |
| ----: | -----: | ------: | ------------------------ | ------------ |
|  0.3% | 27.0ms |      27 | `ZSTD_insertBt1`         | `zstd_opt.c` |
| <0.1% |  2.0ms |       2 | `el0t_64_irq ([kernel])` | `<unknown>`  |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                                               | Location          |
| ----: | -----: | ------: | ---------------------------------------------------- | ----------------- |
| 96.7% | 29.0ms |      29 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |
|  6.7% |  2.0ms |       2 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                              | Location          |
| ----: | -----: | ------: | ----------------------------------- | ----------------- |
| 75.9% | 22.0ms |      22 | `ZSTD_buildBlockEntropyStats`       | `zstd_compress.c` |
| 20.7% |  6.0ms |       6 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c` |
|  3.4% |  1.0ms |       1 | `HIST_count_wksp`                   | `hist.c`          |

##### `ZSTD_buildBlockEntropyStats` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                          | Location          |
| ----: | ----: | ------: | ------------------------------- | ----------------- |
| 36.4% | 8.0ms |       8 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |
| 27.3% | 6.0ms |       6 | `HUF_optimalTableLog`           | `huf_compress.c`  |
| 22.7% | 5.0ms |       5 | `ZSTD_seqToCodes`               | `zstd_compress.c` |
|  4.5% | 1.0ms |       1 | `HUF_writeCTable_wksp`          | `huf_compress.c`  |
|  4.5% | 1.0ms |       1 | `HIST_count_wksp`               | `hist.c`          |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

|     % |   Time | Samples | Callee               | Location    |
| ----: | -----: | ------: | -------------------- | ----------- |
| 71.4% | 15.0ms |      15 | `el0_svc ([kernel])` | `<unknown>` |
| 28.6% |  6.0ms |       6 | `el0_da ([kernel])`  | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Callee                            | Location    |
| -----: | -----: | ------: | --------------------------------- | ----------- |
| 100.0% | 21.0ms |      21 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `ZSTD_compressBlock_btultra2` (`zstd_opt.c`)

|     % |   Time | Samples | Callee                    | Location     |
| ----: | -----: | ------: | ------------------------- | ------------ |
| 94.7% | 18.0ms |      18 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |
|  5.3% |  1.0ms |       1 | `ZSTD_litLengthPrice`     | `zstd_opt.c` |

##### `el0_svc ([kernel])` (`<unknown>`)

|     % |   Time | Samples | Callee                  | Location    |
| ----: | -----: | ------: | ----------------------- | ----------- |
| 93.3% | 14.0ms |      14 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

|     % |   Time | Samples | Callee                          | Location    |
| ----: | -----: | ------: | ------------------------------- | ----------- |
| 78.6% | 11.0ms |      11 | `__arm64_sys_read ([kernel])`   | `<unknown>` |
| 14.3% |  2.0ms |       2 | `__arm64_sys_futex ([kernel])`  | `<unknown>` |
|  7.1% |  1.0ms |       1 | `__arm64_sys_execve ([kernel])` | `<unknown>` |

##### `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                          | Location                    |
| ----: | ----: | ------: | ------------------------------- | --------------------------- |
| 61.5% | 8.0ms |       8 | `ZSTD_encodeSequences`          | `zstd_compress_sequences.c` |
| 23.1% | 3.0ms |       3 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c`           |
| 15.4% | 2.0ms |       2 | `ZSTD_seqToCodes`               | `zstd_compress.c`           |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|      % |   Time | Samples | Callee                                  | Location          |
| -----: | -----: | ------: | --------------------------------------- | ----------------- |
| 100.0% | 13.0ms |      13 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                     | Location                    |
| ----: | ----: | ------: | -------------------------- | --------------------------- |
| 36.4% | 4.0ms |       4 | `ZSTD_selectEncodingType`  | `zstd_compress_sequences.c` |
| 36.4% | 4.0ms |       4 | `HIST_count_parallel_wksp` | `hist.c`                    |
| 27.3% | 3.0ms |       3 | `ZSTD_buildCTable`         | `zstd_compress_sequences.c` |

##### `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`)

|      % |   Time | Samples | Callee              | Location    |
| -----: | -----: | ------: | ------------------- | ----------- |
| 100.0% | 11.0ms |      11 | `fread (libc.so.6)` | `<unknown>` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 83.9% |  10.07s |  10,070 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 13.5% |   1.62s |   1,626 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.9% | 114.0ms |     114 | `ZSTD_litLengthPrice` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.2% |  28.0ms |      28 | `ZSTD_rawLiteralsCost` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.2% |  27.0ms |      27 | `ZSTD_insertBt1` (`zstd_opt.c`) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.2% |  24.0ms |      24 | `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.1% |  18.0ms |      18 | `ZSTD_updateStats` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.1% |  12.0ms |      12 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.1% |   9.0ms |       9 | `__arch_copy_to_user ([kernel])` ← `copy_page_to_iter ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `__arm64_sys_read ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `__read (libc.so.6)` ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` |
|  0.1% |   8.0ms |       8 | `ZSTD_encodeSequences` (`zstd_compress_sequences.c`) ← `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`) ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| <0.1% |   6.0ms |       6 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| <0.1% |   5.0ms |       5 | `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <0.1% |   5.0ms |       5 | `ZSTD_seqToCodes` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <0.1% |   4.0ms |       4 | `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| <0.1% |   3.0ms |       3 | `ZSTD_XXH64_update` (`xxhash.h`) ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <0.1% |   3.0ms |       3 | `ZSTD_selectEncodingType` (`zstd_compress_sequences.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                         |
| <0.1% |   3.0ms |       3 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                           |
| <0.1% |   3.0ms |       3 | `unknown (libc.so.6)` ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| <0.1% |   2.0ms |       2 | `ZSTD_seqToCodes` (`zstd_compress.c`) ← `ZSTD_entropyCompressSeqStore_internal` ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <0.1% |   2.0ms |       2 | `HIST_count_simple` (`hist.c`) ← `HUF_writeCTable_wksp` (`huf_compress.c`) ← `HUF_optimalTableLog` ← `ZSTD_buildBlockEntropyStats` (`zstd_compress.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                |

# Uninterruptible sleep profile

Slept 7 times.

| Category |      % | Sleeps |
| -------- | -----: | -----: |
| Kernel   | 100.0% |      7 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 5 times (71.4%) unknown (libc.so.6)
│   └── … 5 times (71.4%) __read (libc.so.6)
│       └── 5 times (71.4%) el0t_64_sync ([kernel])
│           └── 5 times (71.4%) el0t_64_sync_handler ([kernel])
│               └── 5 times (71.4%) el0_svc ([kernel])
│                   └── 5 times (71.4%) do_el0_svc ([kernel])
│                       └── 5 times (71.4%) invoke_syscall.constprop.0 ([kernel])
│                           └── 5 times (71.4%) __arm64_sys_read ([kernel])
│                               └── 5 times (71.4%) ksys_read ([kernel])
│                                   └── 5 times (71.4%) vfs_read ([kernel])
│                                       └── 5 times (71.4%) ovl_read_iter ([kernel])
│                                           └── 5 times (71.4%) backing_file_read_iter ([kernel])
│                                               └── 5 times (71.4%) vfs_iter_read ([kernel])
│                                                   └── 5 times (71.4%) do_iter_readv_writev ([kernel])
│                                                       └── 5 times (71.4%) ext4_file_read_iter ([kernel])
│                                                           └── 5 times (71.4%) generic_file_read_iter ([kernel])
│                                                               └── 5 times (71.4%) filemap_read ([kernel])
│                                                                   └── 5 times (71.4%) filemap_get_pages ([kernel])
│                                                                       └── 5 times (71.4%) folio_wait_bit_common ([kernel])
│                                                                           └── 5 times (71.4%) io_schedule ([kernel])
│                                                                               └── 5 times (71.4%) schedule ([kernel])
│                                                                                   └── 5 times (71.4%) __schedule ([kernel])
│                                                                                       └── 5 times (71.4%) __bpf_trace_sched_switch ([kernel])
│                                                                                           └── 5 times (71.4%, self 100.0% globally) bpf_trace_run4 ([kernel])
└── 2 times (28.6%) unknown ([unmapped])
    └── … 2 times (28.6%) el0t_64_sync ([kernel])
        └── 2 times (28.6%) el0t_64_sync_handler ([kernel])
            └── 2 times (28.6%) el0_svc ([kernel])
                └── 2 times (28.6%) do_el0_svc ([kernel])
                    └── 2 times (28.6%) invoke_syscall.constprop.0 ([kernel])
                        └── 2 times (28.6%) __arm64_sys_execve ([kernel])
                            └── 2 times (28.6%) do_execveat_common ([kernel])
                                └── 2 times (28.6%) bprm_execve ([kernel])
                                    ├── … 1 time (14.3%) folio_wait_bit_common ([kernel])
                                    │   └── 1 time (14.3%) io_schedule ([kernel])
                                    │       └── 1 time (14.3%) schedule ([kernel])
                                    │           └── 1 time (14.3%) __schedule ([kernel])
                                    │               └── 1 time (14.3%) __bpf_trace_sched_switch ([kernel])
                                    │                   └── 1 time (14.3%) bpf_trace_run4 ([kernel])
                                    └── … 1 time (14.3%) bpf_trace_run4 ([kernel])
```

## Hottest functions

### Self sleeps

Functions with the most uninterruptible sleeps entered within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self sleeps.

##### Kernel

|      % | Sleeps | Function                    | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |      7 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's self sleeps. Inlining can make caller attribution imprecise.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |      7 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

### Total sleeps

Functions with the most uninterruptible sleeps entered within the function and its callees.

#### Categories

Categories accounting for at least 1.0% of self sleeps.

##### Kernel

|      % | Sleeps | Function                                | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |      7 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
| 100.0% |      7 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
| 100.0% |      7 | `__schedule ([kernel])`                 | `<unknown>` |
| 100.0% |      7 | `schedule ([kernel])`                   | `<unknown>` |
| 100.0% |      7 | `io_schedule ([kernel])`                | `<unknown>` |
| 100.0% |      7 | `folio_wait_bit_common ([kernel])`      | `<unknown>` |
| 100.0% |      7 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
| 100.0% |      7 | `do_el0_svc ([kernel])`                 | `<unknown>` |
| 100.0% |      7 | `el0_svc ([kernel])`                    | `<unknown>` |
| 100.0% |      7 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
| 100.0% |      7 | `el0t_64_sync ([kernel])`               | `<unknown>` |
|  85.7% |      6 | `filemap_get_pages ([kernel])`          | `<unknown>` |
|  85.7% |      6 | `filemap_read ([kernel])`               | `<unknown>` |
|  85.7% |      6 | `generic_file_read_iter ([kernel])`     | `<unknown>` |
|  85.7% |      6 | `ext4_file_read_iter ([kernel])`        | `<unknown>` |
|  85.7% |      6 | `do_iter_readv_writev ([kernel])`       | `<unknown>` |
|  85.7% |      6 | `vfs_iter_read ([kernel])`              | `<unknown>` |
|  85.7% |      6 | `backing_file_read_iter ([kernel])`     | `<unknown>` |
|  85.7% |      6 | `ovl_read_iter ([kernel])`              | `<unknown>` |
|  71.4% |      5 | `vfs_read ([kernel])`                   | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total sleeps. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |      7 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |      7 | `__schedule ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |      7 | `schedule ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                   | Location    |
| -----: | -----: | ------------------------ | ----------- |
| 100.0% |      7 | `io_schedule ([kernel])` | `<unknown>` |

##### `io_schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                             | Location    |
| -----: | -----: | ---------------------------------- | ----------- |
| 100.0% |      7 | `folio_wait_bit_common ([kernel])` | `<unknown>` |

##### `folio_wait_bit_common ([kernel])` (`<unknown>`)

|     % | Sleeps | Caller                         | Location    |
| ----: | -----: | ------------------------------ | ----------- |
| 85.7% |      6 | `filemap_get_pages ([kernel])` | `<unknown>` |
| 14.3% |      1 | `filemap_fault ([kernel])`     | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |      7 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `do_el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller               | Location    |
| -----: | -----: | -------------------- | ----------- |
| 100.0% |      7 | `el0_svc ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      7 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |      7 | `el0t_64_sync ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

|     % | Sleeps | Caller                 | Location    |
| ----: | -----: | ---------------------- | ----------- |
| 71.4% |      5 | `__read (libc.so.6)`   | `<unknown>` |
| 28.6% |      2 | `unknown ([unmapped])` | `<unknown>` |

##### `filemap_get_pages ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |      6 | `filemap_read ([kernel])` | `<unknown>` |

##### `filemap_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                              | Location    |
| -----: | -----: | ----------------------------------- | ----------- |
| 100.0% |      6 | `generic_file_read_iter ([kernel])` | `<unknown>` |

##### `generic_file_read_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                           | Location    |
| -----: | -----: | -------------------------------- | ----------- |
| 100.0% |      6 | `ext4_file_read_iter ([kernel])` | `<unknown>` |

##### `ext4_file_read_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      6 | `do_iter_readv_writev ([kernel])` | `<unknown>` |

##### `do_iter_readv_writev ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |      6 | `vfs_iter_read ([kernel])` | `<unknown>` |

##### `vfs_iter_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                              | Location    |
| -----: | -----: | ----------------------------------- | ----------- |
| 100.0% |      6 | `backing_file_read_iter ([kernel])` | `<unknown>` |

##### `backing_file_read_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |      6 | `ovl_read_iter ([kernel])` | `<unknown>` |

##### `ovl_read_iter ([kernel])` (`<unknown>`)

|     % | Sleeps | Caller                     | Location    |
| ----: | -----: | -------------------------- | ----------- |
| 83.3% |      5 | `vfs_read ([kernel])`      | `<unknown>` |
| 16.7% |      1 | `__kernel_read ([kernel])` | `<unknown>` |

##### `vfs_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                 | Location    |
| -----: | -----: | ---------------------- | ----------- |
| 100.0% |      5 | `ksys_read ([kernel])` | `<unknown>` |

#### Callees

Callees with the largest contribution to each function's total sleeps. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                      | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |      7 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |      7 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |      7 | `__schedule ([kernel])` | `<unknown>` |

##### `io_schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |      7 | `schedule ([kernel])` | `<unknown>` |

##### `folio_wait_bit_common ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                   | Location    |
| -----: | -----: | ------------------------ | ----------- |
| 100.0% |      7 | `io_schedule ([kernel])` | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

|     % | Sleeps | Callee                          | Location    |
| ----: | -----: | ------------------------------- | ----------- |
| 71.4% |      5 | `__arm64_sys_read ([kernel])`   | `<unknown>` |
| 28.6% |      2 | `__arm64_sys_execve ([kernel])` | `<unknown>` |

##### `do_el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                  | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |      7 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |      7 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee               | Location    |
| -----: | -----: | -------------------- | ----------- |
| 100.0% |      7 | `el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      7 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `filemap_get_pages ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                             | Location    |
| -----: | -----: | ---------------------------------- | ----------- |
| 100.0% |      6 | `folio_wait_bit_common ([kernel])` | `<unknown>` |

##### `filemap_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                         | Location    |
| -----: | -----: | ------------------------------ | ----------- |
| 100.0% |      6 | `filemap_get_pages ([kernel])` | `<unknown>` |

##### `generic_file_read_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |      6 | `filemap_read ([kernel])` | `<unknown>` |

##### `ext4_file_read_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                              | Location    |
| -----: | -----: | ----------------------------------- | ----------- |
| 100.0% |      6 | `generic_file_read_iter ([kernel])` | `<unknown>` |

##### `do_iter_readv_writev ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                           | Location    |
| -----: | -----: | -------------------------------- | ----------- |
| 100.0% |      6 | `ext4_file_read_iter ([kernel])` | `<unknown>` |

##### `vfs_iter_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      6 | `do_iter_readv_writev ([kernel])` | `<unknown>` |

##### `backing_file_read_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |      6 | `vfs_iter_read ([kernel])` | `<unknown>` |

##### `ovl_read_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                              | Location    |
| -----: | -----: | ----------------------------------- | ----------- |
| 100.0% |      6 | `backing_file_read_iter ([kernel])` | `<unknown>` |

##### `vfs_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |      5 | `ovl_read_iter ([kernel])` | `<unknown>` |

## Hottest call stacks

Call stacks with the most uninterruptible sleeps entered in their leaf frame.

|     % | Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----: | -----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 71.4% |      5 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `io_schedule ([kernel])` ← `folio_wait_bit_common ([kernel])` ← `filemap_get_pages ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `__arm64_sys_read ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `__read (libc.so.6)` ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                   |
| 14.3% |      1 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `io_schedule ([kernel])` ← `folio_wait_bit_common ([kernel])` ← `filemap_get_pages ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `__kernel_read ([kernel])` ← `kernel_read ([kernel])` ← `bprm_execve ([kernel])` ← `do_execveat_common ([kernel])` ← `__arm64_sys_execve ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` |
| 14.3% |      1 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `io_schedule ([kernel])` ← `folio_wait_bit_common ([kernel])` ← `filemap_fault ([kernel])` ← `__do_fault ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_page_fault ([kernel])` ← `do_translation_fault ([kernel])` ← `do_mem_abort ([kernel])` ← `el1_abort ([kernel])` ← `el1h_64_sync_handler ([kernel])` ← `el1h_64_sync ([kernel])` ← `__arch_clear_user ([kernel])` ← `load_elf_binary ([kernel])` ← `bprm_execve ([kernel])` ← `do_execveat_common ([kernel])` ← `__arm64_sys_execve ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown ([unmapped])`                                                                                                                                                              |

# Interruptible sleep profile

Slept 154 times.

| Category |      % | Sleeps |
| -------- | -----: | -----: |
| Kernel   | 100.0% |    154 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 102 times (66.2%) _start (zstd)
│   └── 102 times (66.2%) __libc_start_main (libc.so.6)
│       └── 102 times (66.2%) unknown (libc.so.6)
│           └── … 102 times (66.2%) el0t_64_sync ([kernel])
│               └── 102 times (66.2%) el0t_64_sync_handler ([kernel])
│                   └── 102 times (66.2%) el0_svc ([kernel])
│                       └── 102 times (66.2%) do_el0_svc ([kernel])
│                           └── 102 times (66.2%) invoke_syscall.constprop.0 ([kernel])
│                               └── 102 times (66.2%) __arm64_sys_futex ([kernel])
│                                   └── 102 times (66.2%) do_futex ([kernel])
│                                       └── 102 times (66.2%) futex_wait ([kernel])
│                                           └── 102 times (66.2%) __futex_wait ([kernel])
│                                               └── 102 times (66.2%) futex_do_wait ([kernel])
│                                                   └── 102 times (66.2%) schedule ([kernel])
│                                                       └── 102 times (66.2%) __schedule ([kernel])
│                                                           └── 102 times (66.2%) __bpf_trace_sched_switch ([kernel])
│                                                               └── 102 times (66.2%, self 100.0% globally) bpf_trace_run4 ([kernel])
└── 52 times (33.8%) unknown (libc.so.6)
    └── … 52 times (33.8%) el0t_64_sync ([kernel])
        └── 52 times (33.8%) el0t_64_sync_handler ([kernel])
            └── 52 times (33.8%) el0_svc ([kernel])
                └── 52 times (33.8%) do_el0_svc ([kernel])
                    └── 52 times (33.8%) invoke_syscall.constprop.0 ([kernel])
                        └── 52 times (33.8%) __arm64_sys_futex ([kernel])
                            └── 52 times (33.8%) do_futex ([kernel])
                                └── 52 times (33.8%) futex_wait ([kernel])
                                    └── 52 times (33.8%) __futex_wait ([kernel])
                                        └── 52 times (33.8%) futex_do_wait ([kernel])
                                            └── 52 times (33.8%) schedule ([kernel])
                                                └── 52 times (33.8%) __schedule ([kernel])
                                                    └── 52 times (33.8%) __bpf_trace_sched_switch ([kernel])
                                                        └── 52 times (33.8%) bpf_trace_run4 ([kernel])
```

## Hottest functions

### Self sleeps

Functions with the most interruptible sleeps entered within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self sleeps.

##### Kernel

|      % | Sleeps | Function                    | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |    154 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's self sleeps. Inlining can make caller attribution imprecise.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |    154 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

### Total sleeps

Functions with the most interruptible sleeps entered within the function and its callees.

|      % | Sleeps | Function                                | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |    154 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
| 100.0% |    154 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
| 100.0% |    154 | `__schedule ([kernel])`                 | `<unknown>` |
| 100.0% |    154 | `schedule ([kernel])`                   | `<unknown>` |
| 100.0% |    154 | `futex_do_wait ([kernel])`              | `<unknown>` |
| 100.0% |    154 | `__futex_wait ([kernel])`               | `<unknown>` |
| 100.0% |    154 | `futex_wait ([kernel])`                 | `<unknown>` |
| 100.0% |    154 | `do_futex ([kernel])`                   | `<unknown>` |
| 100.0% |    154 | `__arm64_sys_futex ([kernel])`          | `<unknown>` |
| 100.0% |    154 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
| 100.0% |    154 | `do_el0_svc ([kernel])`                 | `<unknown>` |
| 100.0% |    154 | `el0_svc ([kernel])`                    | `<unknown>` |
| 100.0% |    154 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
| 100.0% |    154 | `el0t_64_sync ([kernel])`               | `<unknown>` |
| 100.0% |    154 | `unknown (libc.so.6)`                   | `<unknown>` |
|  99.4% |    153 | `pthread_cond_wait (libc.so.6)`         | `<unknown>` |
|  66.2% |    102 | `FIO_compressFilename_srcFile`          | `fileio.c`  |
|  66.2% |    102 | `FIO_compressFilename`                  | `fileio.c`  |
|  66.2% |    102 | `main`                                  | `zstdcli.c` |
|  66.2% |    102 | `__libc_start_main (libc.so.6)`         | `<unknown>` |

#### Categories

Categories accounting for at least 1.0% of self sleeps.

##### Kernel

|      % | Sleeps | Function                                | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |    154 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
| 100.0% |    154 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
| 100.0% |    154 | `__schedule ([kernel])`                 | `<unknown>` |
| 100.0% |    154 | `schedule ([kernel])`                   | `<unknown>` |
| 100.0% |    154 | `futex_do_wait ([kernel])`              | `<unknown>` |
| 100.0% |    154 | `__futex_wait ([kernel])`               | `<unknown>` |
| 100.0% |    154 | `futex_wait ([kernel])`                 | `<unknown>` |
| 100.0% |    154 | `do_futex ([kernel])`                   | `<unknown>` |
| 100.0% |    154 | `__arm64_sys_futex ([kernel])`          | `<unknown>` |
| 100.0% |    154 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
| 100.0% |    154 | `do_el0_svc ([kernel])`                 | `<unknown>` |
| 100.0% |    154 | `el0_svc ([kernel])`                    | `<unknown>` |
| 100.0% |    154 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
| 100.0% |    154 | `el0t_64_sync ([kernel])`               | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total sleeps. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |    154 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    154 | `__schedule ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    154 | `schedule ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |    154 | `futex_do_wait ([kernel])` | `<unknown>` |

##### `futex_do_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |    154 | `__futex_wait ([kernel])` | `<unknown>` |

##### `__futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    154 | `futex_wait ([kernel])` | `<unknown>` |

##### `futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    154 | `do_futex ([kernel])` | `<unknown>` |

##### `do_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                         | Location    |
| -----: | -----: | ------------------------------ | ----------- |
| 100.0% |    154 | `__arm64_sys_futex ([kernel])` | `<unknown>` |

##### `__arm64_sys_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                  | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |    154 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    154 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `do_el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller               | Location    |
| -----: | -----: | -------------------- | ----------- |
| 100.0% |    154 | `el0_svc ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |    154 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |    154 | `el0t_64_sync ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    154 | `unknown (libc.so.6)` | `<unknown>` |

##### `unknown (libc.so.6)` (`<unknown>`)

|     % | Sleeps | Caller                             | Location    |
| ----: | -----: | ---------------------------------- | ----------- |
| 99.4% |    153 | `pthread_cond_wait (libc.so.6)`    | `<unknown>` |
| 66.2% |    102 | `__libc_start_main (libc.so.6)`    | `<unknown>` |
| 36.4% |     56 | `unknown (libc.so.6)`              | `<unknown>` |
|  0.6% |      1 | `__pthread_mutex_lock (libc.so.6)` | `<unknown>` |

##### `pthread_cond_wait (libc.so.6)` (`<unknown>`)

|     % | Sleeps | Caller                          | Location            |
| ----: | -----: | ------------------------------- | ------------------- |
| 41.2% |     63 | `POOL_add`                      | `pool.c`            |
| 33.3% |     51 | `POOL_thread`                   | `pool.c`            |
| 25.5% |     39 | `ZSTDMT_compressStream_generic` | `zstdmt_compress.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|      % | Sleeps | Caller                 | Location   |
| -----: | -----: | ---------------------- | ---------- |
| 100.0% |    102 | `FIO_compressFilename` | `fileio.c` |

##### `FIO_compressFilename` (`fileio.c`)

|      % | Sleeps | Caller | Location    |
| -----: | -----: | ------ | ----------- |
| 100.0% |    102 | `main` | `zstdcli.c` |

##### `main` (`zstdcli.c`)

|      % | Sleeps | Caller                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    102 | `unknown (libc.so.6)` | `<unknown>` |

##### `__libc_start_main (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Caller          | Location    |
| -----: | -----: | --------------- | ----------- |
| 100.0% |    102 | `_start (zstd)` | `<unknown>` |

#### Callees

Callees with the largest contribution to each function's total sleeps. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                      | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |    154 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |    154 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    154 | `__schedule ([kernel])` | `<unknown>` |

##### `futex_do_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    154 | `schedule ([kernel])` | `<unknown>` |

##### `__futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |    154 | `futex_do_wait ([kernel])` | `<unknown>` |

##### `futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |    154 | `__futex_wait ([kernel])` | `<unknown>` |

##### `do_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    154 | `futex_wait ([kernel])` | `<unknown>` |

##### `__arm64_sys_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    154 | `do_futex ([kernel])` | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                         | Location    |
| -----: | -----: | ------------------------------ | ----------- |
| 100.0% |    154 | `__arm64_sys_futex ([kernel])` | `<unknown>` |

##### `do_el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                  | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |    154 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    154 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee               | Location    |
| -----: | -----: | -------------------- | ----------- |
| 100.0% |    154 | `el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |    154 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `unknown (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |    154 | `el0t_64_sync ([kernel])` | `<unknown>` |
|  66.2% |    102 | `main`                    | `zstdcli.c` |
|  36.4% |     56 | `unknown (libc.so.6)`     | `<unknown>` |
|  33.8% |     52 | `POOL_thread`             | `pool.c`    |

##### `pthread_cond_wait (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    153 | `unknown (libc.so.6)` | `<unknown>` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|     % | Sleeps | Callee                    | Location           |
| ----: | -----: | ------------------------- | ------------------ |
| 59.8% |     61 | `AIO_ReadPool_fillBuffer` | `fileio_asyncio.c` |
| 38.2% |     39 | `ZSTD_compressStream2`    | `zstd_compress.c`  |
|  2.0% |      2 | `AIO_ReadPool_setFile`    | `fileio_asyncio.c` |

##### `FIO_compressFilename` (`fileio.c`)

|      % | Sleeps | Callee                         | Location   |
| -----: | -----: | ------------------------------ | ---------- |
| 100.0% |    102 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `main` (`zstdcli.c`)

|      % | Sleeps | Callee                 | Location   |
| -----: | -----: | ---------------------- | ---------- |
| 100.0% |    102 | `FIO_compressFilename` | `fileio.c` |

##### `__libc_start_main (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    102 | `unknown (libc.so.6)` | `<unknown>` |

## Hottest call stacks

Call stacks with the most interruptible sleeps entered in their leaf frame.

|     % | Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | -----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 37.0% |     57 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_add` (`pool.c`) ← `AIO_ReadPool_fillBuffer` (`fileio_asyncio.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                             |
| 33.1% |     51 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                     |
| 25.3% |     39 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `ZSTDMT_compressStream_generic` (`zstdmt_compress.c`) ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)` |
|  2.6% |      4 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_add` (`pool.c`) ← `AIO_ReadPool_fillBuffer` (`fileio_asyncio.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`     |
|  1.3% |      2 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_add` (`pool.c`) ← `AIO_ReadPool_setFile` (`fileio_asyncio.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                                |
|  0.6% |      1 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `__pthread_mutex_lock (libc.so.6)` ← `AIO_ReadPool_addJobToCompleted` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                          |

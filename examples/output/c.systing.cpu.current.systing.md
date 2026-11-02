# CPU profile

Took 12.01s over 12,010 samples (1.0ms per sample).

| Category |     % |   Time | Samples |
| -------- | ----: | -----: | ------: |
| Ours     | 99.8% | 11.98s |  11,987 |
| Kernel   |  0.1% | 14.0ms |      14 |
| Native   |  0.1% |  9.0ms |       9 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── 11.99s (99.9%) unknown (libc.so.6)
    ├── … 11.98s (99.8%) POOL_thread at pool.c
    │   └── 11.98s (99.8%) ZSTDMT_compressionJob at zstdmt_compress.c
    │       └── 11.98s (99.8%) ZSTD_compressContinue_internal at zstd_compress.c
    │           ├── 11.93s (99.4%) ZSTD_buildSeqStore
    │           │   ├── 11.75s (97.8%, self 13.3%) ZSTD_compressBlock_opt2 at zstd_opt.c
    │           │   │   ├── 10.12s (84.3%, self 84.0%) ZSTD_btGetAllMatches_noDict_3
    │           │   │   │   └── 31.0ms (0.3%) ZSTD_insertBt1
    │           │   │   └── 25.0ms (0.2%) ZSTD_insertAndFindFirstIndexHash3
    │           │   ├── 116.0ms (1.0%) ZSTD_litLengthPrice at zstd_opt.c
    │           │   ├── 31.0ms (0.3%) ZSTD_rawLiteralsCost at zstd_opt.c
    │           │   ├── 12.0ms (0.1%) ZSTD_updateStats at zstd_opt.c
    │           │   └── 7.0ms (0.1%) ZSTD_optLdm_processMatchCandidate at zstd_opt.c
    │           ├── 16.0ms (0.1%) ZSTD_compressSeqStore_singleBlock
    │           │   └── 15.0ms (0.1%) ZSTD_entropyCompressSeqStore
    │           │       └── 15.0ms (0.1%) ZSTD_entropyCompressSeqStore_internal
    │           │           └── 7.0ms (0.1%) ZSTD_encodeSequences at zstd_compress_sequences.c
    │           └── 11.0ms (0.1%) ZSTD_splitBlock at zstd_preSplit.c
    │               └── 8.0ms (0.1%) ZSTD_recordFingerprint_1
    └── … 7.0ms (0.1%) __read (libc.so.6)
        └── 7.0ms (0.1%) el0t_64_sync ([kernel])
            └── 7.0ms (0.1%) el0t_64_sync_handler ([kernel])
                └── 7.0ms (0.1%) el0_svc ([kernel])
                    └── 7.0ms (0.1%) do_el0_svc ([kernel])
                        └── 7.0ms (0.1%) invoke_syscall.constprop.0 ([kernel])
                            └── 7.0ms (0.1%) __arm64_sys_read ([kernel])
                                └── 7.0ms (0.1%) ksys_read ([kernel])
                                    └── 7.0ms (0.1%) vfs_read ([kernel])
                                        └── 7.0ms (0.1%) ovl_read_iter ([kernel])
                                            └── 7.0ms (0.1%) backing_file_read_iter ([kernel])
                                                └── 7.0ms (0.1%) vfs_iter_read ([kernel])
                                                    └── 7.0ms (0.1%) do_iter_readv_writev ([kernel])
                                                        └── 7.0ms (0.1%) ext4_file_read_iter ([kernel])
                                                            └── 7.0ms (0.1%) generic_file_read_iter ([kernel])
                                                                └── 7.0ms (0.1%) filemap_read ([kernel])
                                                                    └── 7.0ms (0.1%) copy_page_to_iter ([kernel])
                                                                        └── 7.0ms (0.1%) __arch_copy_to_user ([kernel])
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|     % |    Time | Samples | Function                            | Location                    |
| ----: | ------: | ------: | ----------------------------------- | --------------------------- |
| 84.1% |  10.10s |  10,100 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c`                |
| 13.4% |   1.61s |   1,610 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c`                |
|  1.0% | 117.0ms |     117 | `ZSTD_litLengthPrice`               | `zstd_opt.c`                |
|  0.3% |  31.0ms |      31 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c`                |
|  0.3% |  31.0ms |      31 | `ZSTD_insertBt1`                    | `zstd_opt.c`                |
|  0.2% |  25.0ms |      25 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c`                |
|  0.1% |  12.0ms |      12 | `ZSTD_updateStats`                  | `zstd_opt.c`                |
|  0.1% |  12.0ms |      12 | `HIST_count_parallel_wksp`          | `hist.c`                    |
|  0.1% |   9.0ms |       9 | `unknown (libc.so.6)`               | `<unknown>`                 |
|  0.1% |   8.0ms |       8 | `ZSTD_recordFingerprint_1`          | `zstd_preSplit.c`           |
|  0.1% |   7.0ms |       7 | `ZSTD_XXH64_update`                 | `xxhash.h`                  |
|  0.1% |   7.0ms |       7 | `ZSTD_encodeSequences`              | `zstd_compress_sequences.c` |
|  0.1% |   7.0ms |       7 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c`                |
| <0.1% |   6.0ms |       6 | `__arch_copy_to_user ([kernel])`    | `<unknown>`                 |
| <0.1% |   5.0ms |       5 | `ZSTD_seqToCodes`                   | `zstd_compress.c`           |
| <0.1% |   4.0ms |       4 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c`           |
| <0.1% |   3.0ms |       3 | `clear_page ([kernel])`             | `<unknown>`                 |
| <0.1% |   3.0ms |       3 | `ZSTD_splitBlock`                   | `zstd_preSplit.c`           |
| <0.1% |   3.0ms |       3 | `HUF_buildCTable_wksp`              | `huf_compress.c`            |
| <0.1% |   1.0ms |       1 | `folio_add_lru_vma ([kernel])`      | `<unknown>`                 |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function                            | Location                    |
| ----: | ------: | ------: | ----------------------------------- | --------------------------- |
| 84.1% |  10.10s |  10,100 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c`                |
| 13.4% |   1.61s |   1,610 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c`                |
|  1.0% | 117.0ms |     117 | `ZSTD_litLengthPrice`               | `zstd_opt.c`                |
|  0.3% |  31.0ms |      31 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c`                |
|  0.3% |  31.0ms |      31 | `ZSTD_insertBt1`                    | `zstd_opt.c`                |
|  0.2% |  25.0ms |      25 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c`                |
|  0.1% |  12.0ms |      12 | `ZSTD_updateStats`                  | `zstd_opt.c`                |
|  0.1% |  12.0ms |      12 | `HIST_count_parallel_wksp`          | `hist.c`                    |
|  0.1% |   8.0ms |       8 | `ZSTD_recordFingerprint_1`          | `zstd_preSplit.c`           |
|  0.1% |   7.0ms |       7 | `ZSTD_XXH64_update`                 | `xxhash.h`                  |
|  0.1% |   7.0ms |       7 | `ZSTD_encodeSequences`              | `zstd_compress_sequences.c` |
|  0.1% |   7.0ms |       7 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c`                |
| <0.1% |   5.0ms |       5 | `ZSTD_seqToCodes`                   | `zstd_compress.c`           |
| <0.1% |   4.0ms |       4 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c`           |
| <0.1% |   3.0ms |       3 | `ZSTD_splitBlock`                   | `zstd_preSplit.c`           |
| <0.1% |   3.0ms |       3 | `HUF_buildCTable_wksp`              | `huf_compress.c`            |
| <0.1% |   1.0ms |       1 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c`           |
| <0.1% |   1.0ms |       1 | `FSE_compress_usingCTable_generic`  | `fse_compress.c`            |
| <0.1% |   1.0ms |       1 | `HUF_writeCTable_wksp`              | `huf_compress.c`            |
| <0.1% |   1.0ms |       1 | `HUF_optimalTableLog`               | `huf_compress.c`            |

#### Lines

Lines with the largest contribution to each function's self time.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |   Time | Samples | Location         |
| -----: | -----: | ------: | ---------------- |
| 100.0% | 10.10s |  10,100 | `zstd_opt.c:876` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 1.61s |   1,610 | `zstd_opt.c:1459` |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 34.2% | 40.0ms |      40 | `zstd_opt.c:315` |
| 32.5% | 38.0ms |      38 | `zstd_opt.c:313` |
| 12.8% | 15.0ms |      15 | `zstd_opt.c:298` |
| 11.1% | 13.0ms |      13 | `zstd_opt.c:310` |
|  9.4% | 11.0ms |      11 | `zstd_opt.c:306` |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 80.6% | 25.0ms |      25 | `zstd_opt.c:266` |
| 12.9% |  4.0ms |       4 | `zstd_opt.c:273` |
|  3.2% |  1.0ms |       1 | `zstd_opt.c:276` |
|  3.2% |  1.0ms |       1 | `zstd_opt.c:291` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

|     % |  Time | Samples | Location         |
| ----: | ----: | ------: | ---------------- |
| 22.6% | 7.0ms |       7 | `zstd_opt.c:518` |
| 19.4% | 6.0ms |       6 | `zstd_opt.c:538` |
| 19.4% | 6.0ms |       6 | `zstd_opt.c:545` |
| 19.4% | 6.0ms |       6 | `zstd_opt.c:528` |
|  9.7% | 3.0ms |       3 | `zstd_opt.c:489` |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 40.0% | 10.0ms |      10 | `zstd_opt.c:424` |
| 32.0% |  8.0ms |       8 | `zstd_opt.c:420` |
| 12.0% |  3.0ms |       3 | `zstd_opt.c:415` |
|  8.0% |  2.0ms |       2 | `zstd_opt.c:423` |
|  8.0% |  2.0ms |       2 | `zstd_opt.c:430` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|     % |  Time | Samples | Location         |
| ----: | ----: | ------: | ---------------- |
| 41.7% | 5.0ms |       5 | `zstd_opt.c:378` |
| 25.0% | 3.0ms |       3 | `zstd_opt.c:384` |
| 25.0% | 3.0ms |       3 | `zstd_opt.c:377` |
|  8.3% | 1.0ms |       1 | `zstd_opt.c:364` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |  Time | Samples | Location     |
| ----: | ----: | ------: | ------------ |
| 16.7% | 2.0ms |       2 | `hist.c:120` |
| 16.7% | 2.0ms |       2 | `hist.c:115` |
| 16.7% | 2.0ms |       2 | `hist.c:137` |
| 16.7% | 2.0ms |       2 | `hist.c:116` |
|  8.3% | 1.0ms |       1 | `hist.c:118` |

##### `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`)

|      % |  Time | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 8.0ms |       8 | `zstd_preSplit.c:87` |

##### `ZSTD_XXH64_update` (`xxhash.h`)

|     % |  Time | Samples | Location        |
| ----: | ----: | ------: | --------------- |
| 85.7% | 6.0ms |       6 | `xxhash.h:3608` |
| 14.3% | 1.0ms |       1 | `xxhash.h:3607` |

##### `ZSTD_encodeSequences` (`zstd_compress_sequences.c`)

|      % |  Time | Samples | Location                        |
| -----: | ----: | ------: | ------------------------------- |
| 100.0% | 7.0ms |       7 | `zstd_compress_sequences.c:437` |

##### `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 7.0ms |       7 | `zstd_opt.c:1030` |

##### `ZSTD_seqToCodes` (`zstd_compress.c`)

|     % |  Time | Samples | Location               |
| ----: | ----: | ------: | ---------------------- |
| 60.0% | 3.0ms |       3 | `zstd_compress.c:2706` |
| 20.0% | 1.0ms |       1 | `zstd_compress.c:2707` |
| 20.0% | 1.0ms |       1 | `zstd_compress.c:2708` |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

|     % |  Time | Samples | Location               |
| ----: | ----: | ------: | ---------------------- |
| 75.0% | 3.0ms |       3 | `zstd_compress.c:3886` |
| 25.0% | 1.0ms |       1 | `zstd_compress.c:3888` |

##### `ZSTD_splitBlock` (`zstd_preSplit.c`)

|      % |  Time | Samples | Location              |
| -----: | ----: | ------: | --------------------- |
| 100.0% | 3.0ms |       3 | `zstd_preSplit.c:237` |

##### `HUF_buildCTable_wksp` (`huf_compress.c`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 33.3% | 1.0ms |       1 | `huf_compress.c:778` |
| 33.3% | 1.0ms |       1 | `huf_compress.c:788` |
| 33.3% | 1.0ms |       1 | `huf_compress.c:782` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|      % |  Time | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 1.0ms |       1 | `zstd_compress.c:4122` |

##### `FSE_compress_usingCTable_generic` (`fse_compress.c`)

|      % |  Time | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 1.0ms |       1 | `fse_compress.c:599` |

##### `HUF_writeCTable_wksp` (`huf_compress.c`)

|      % |  Time | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 1.0ms |       1 | `huf_compress.c:274` |

##### `HUF_optimalTableLog` (`huf_compress.c`)

|      % |  Time | Samples | Location              |
| -----: | ----: | ------: | --------------------- |
| 100.0% | 1.0ms |       1 | `huf_compress.c:1292` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                    | Location     |
| -----: | -----: | ------: | ------------------------- | ------------ |
| 100.0% | 10.10s |  10,100 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 99.6% | 1.60s |   1,603 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  0.4% | 7.0ms |       7 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

|     % |    Time | Samples | Caller                        | Location          |
| ----: | ------: | ------: | ----------------------------- | ----------------- |
| 99.1% | 116.0ms |     116 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  0.9% |   1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 31.0ms |      31 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                          | Location     |
| -----: | -----: | ------: | ------------------------------- | ------------ |
| 100.0% | 31.0ms |      31 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                    | Location     |
| -----: | -----: | ------: | ------------------------- | ------------ |
| 100.0% | 25.0ms |      25 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 12.0ms |      12 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |   Time | Samples | Caller                              | Location          |
| ----: | -----: | ------: | ----------------------------------- | ----------------- |
| 83.3% | 10.0ms |      10 | `ZSTD_buildSequencesStatistics`     | `zstd_compress.c` |
| 16.7% |  2.0ms |       2 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c` |

##### `unknown (libc.so.6)` (`<unknown>`)

|     % |  Time | Samples | Caller                    | Location          |
| ----: | ----: | ------: | ------------------------- | ----------------- |
| 88.9% | 8.0ms |       8 | `ZSTD_compressStream2`    | `zstd_compress.c` |
| 11.1% | 1.0ms |       1 | `ZSTD_resetCCtx_internal` | `zstd_compress.c` |

##### `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`)

|      % |  Time | Samples | Caller            | Location          |
| -----: | ----: | ------: | ----------------- | ----------------- |
| 100.0% | 8.0ms |       8 | `ZSTD_splitBlock` | `zstd_preSplit.c` |

##### `ZSTD_XXH64_update` (`xxhash.h`)

|     % |  Time | Samples | Caller                           | Location            |
| ----: | ----: | ------: | -------------------------------- | ------------------- |
| 71.4% | 5.0ms |       5 | `ZSTD_compressContinue_internal` | `zstd_compress.c`   |
| 28.6% | 2.0ms |       2 | `ZSTDMT_compressionJob`          | `zstdmt_compress.c` |

##### `ZSTD_encodeSequences` (`zstd_compress_sequences.c`)

|      % |  Time | Samples | Caller                                  | Location          |
| -----: | ----: | ------: | --------------------------------------- | ----------------- |
| 100.0% | 7.0ms |       7 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`)

|      % |  Time | Samples | Caller               | Location          |
| -----: | ----: | ------: | -------------------- | ----------------- |
| 100.0% | 7.0ms |       7 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `__arch_copy_to_user ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                         | Location    |
| -----: | ----: | ------: | ------------------------------ | ----------- |
| 100.0% | 6.0ms |       6 | `copy_page_to_iter ([kernel])` | `<unknown>` |

##### `ZSTD_seqToCodes` (`zstd_compress.c`)

|     % |  Time | Samples | Caller                                  | Location          |
| ----: | ----: | ------: | --------------------------------------- | ----------------- |
| 60.0% | 3.0ms |       3 | `ZSTD_buildBlockEntropyStats`           | `zstd_compress.c` |
| 40.0% | 2.0ms |       2 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                                               | Location          |
| -----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 4.0ms |       4 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `clear_page ([kernel])` (`<unknown>`)

|     % |  Time | Samples | Caller                                   | Location    |
| ----: | ----: | ------: | ---------------------------------------- | ----------- |
| 66.7% | 2.0ms |       2 | `vma_alloc_anon_folio_pmd ([kernel])`    | `<unknown>` |
| 33.3% | 1.0ms |       1 | `__alloc_frozen_pages_noprof ([kernel])` | `<unknown>` |

##### `ZSTD_splitBlock` (`zstd_preSplit.c`)

|      % |  Time | Samples | Caller                           | Location          |
| -----: | ----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 3.0ms |       3 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `HUF_buildCTable_wksp` (`huf_compress.c`)

|      % |  Time | Samples | Caller                | Location         |
| -----: | ----: | ------: | --------------------- | ---------------- |
| 100.0% | 3.0ms |       3 | `HUF_optimalTableLog` | `huf_compress.c` |

##### `folio_add_lru_vma ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                         | Location    |
| -----: | ----: | ------: | ------------------------------ | ----------- |
| 100.0% | 1.0ms |       1 | `__handle_mm_fault ([kernel])` | `<unknown>` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                           | Location          |
| -----: | ----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `FSE_compress_usingCTable_generic` (`fse_compress.c`)

|      % |  Time | Samples | Caller                 | Location         |
| -----: | ----: | ------: | ---------------------- | ---------------- |
| 100.0% | 1.0ms |       1 | `HUF_writeCTable_wksp` | `huf_compress.c` |

##### `HUF_writeCTable_wksp` (`huf_compress.c`)

|      % |  Time | Samples | Caller                | Location         |
| -----: | ----: | ------: | --------------------- | ---------------- |
| 100.0% | 1.0ms |       1 | `HUF_optimalTableLog` | `huf_compress.c` |

##### `HUF_optimalTableLog` (`huf_compress.c`)

|      % |  Time | Samples | Caller                        | Location          |
| -----: | ----: | ------: | ----------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildBlockEntropyStats` | `zstd_compress.c` |

### Total time

Functions with the most time spent within the function and its callees.

|      % |    Time | Samples | Function                                             | Location            |
| -----: | ------: | ------: | ---------------------------------------------------- | ------------------- |
| 100.0% |     12s |  12,009 | `unknown (libc.so.6)`                                | `<unknown>`         |
|  99.9% |  11.99s |  11,999 | `POOL_thread`                                        | `pool.c`            |
|  99.8% |  11.99s |  11,991 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c` |
|  99.8% |  11.98s |  11,985 | `ZSTD_compressContinue_internal`                     | `zstd_compress.c`   |
|  99.4% |  11.93s |  11,933 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`   |
|  98.0% |  11.76s |  11,766 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
|  84.4% |  10.13s |  10,131 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
|   1.0% | 117.0ms |     117 | `ZSTD_litLengthPrice`                                | `zstd_opt.c`        |
|   0.3% |  31.0ms |      31 | `ZSTD_rawLiteralsCost`                               | `zstd_opt.c`        |
|   0.3% |  31.0ms |      31 | `ZSTD_insertBt1`                                     | `zstd_opt.c`        |
|   0.2% |  25.0ms |      25 | `ZSTD_insertAndFindFirstIndexHash3`                  | `zstd_opt.c`        |
|   0.2% |  20.0ms |      20 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |
|   0.2% |  20.0ms |      20 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`   |
|   0.1% |  17.0ms |      17 | `ZSTD_compressBlock_btultra2`                        | `zstd_opt.c`        |
|   0.1% |  16.0ms |      16 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`   |
|   0.1% |  15.0ms |      15 | `ZSTD_entropyCompressSeqStore_internal`              | `zstd_compress.c`   |
|   0.1% |  15.0ms |      15 | `ZSTD_entropyCompressSeqStore`                       | `zstd_compress.c`   |
|   0.1% |  14.0ms |      14 | `el0t_64_sync_handler ([kernel])`                    | `<unknown>`         |
|   0.1% |  14.0ms |      14 | `el0t_64_sync ([kernel])`                            | `<unknown>`         |
|   0.1% |  14.0ms |      14 | `ZSTD_buildBlockEntropyStats`                        | `zstd_compress.c`   |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function                                             | Location            |
| ----: | ------: | ------: | ---------------------------------------------------- | ------------------- |
| 99.9% |  11.99s |  11,999 | `POOL_thread`                                        | `pool.c`            |
| 99.8% |  11.99s |  11,991 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c` |
| 99.8% |  11.98s |  11,985 | `ZSTD_compressContinue_internal`                     | `zstd_compress.c`   |
| 99.4% |  11.93s |  11,933 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`   |
| 98.0% |  11.76s |  11,766 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
| 84.4% |  10.13s |  10,131 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
|  1.0% | 117.0ms |     117 | `ZSTD_litLengthPrice`                                | `zstd_opt.c`        |
|  0.3% |  31.0ms |      31 | `ZSTD_rawLiteralsCost`                               | `zstd_opt.c`        |
|  0.3% |  31.0ms |      31 | `ZSTD_insertBt1`                                     | `zstd_opt.c`        |
|  0.2% |  25.0ms |      25 | `ZSTD_insertAndFindFirstIndexHash3`                  | `zstd_opt.c`        |
|  0.2% |  20.0ms |      20 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |
|  0.2% |  20.0ms |      20 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`   |
|  0.1% |  17.0ms |      17 | `ZSTD_compressBlock_btultra2`                        | `zstd_opt.c`        |
|  0.1% |  16.0ms |      16 | `ZSTD_compressSeqStore_singleBlock`                  | `zstd_compress.c`   |
|  0.1% |  15.0ms |      15 | `ZSTD_entropyCompressSeqStore_internal`              | `zstd_compress.c`   |
|  0.1% |  15.0ms |      15 | `ZSTD_entropyCompressSeqStore`                       | `zstd_compress.c`   |
|  0.1% |  14.0ms |      14 | `ZSTD_buildBlockEntropyStats`                        | `zstd_compress.c`   |
|  0.1% |  12.0ms |      12 | `ZSTD_updateStats`                                   | `zstd_opt.c`        |
|  0.1% |  12.0ms |      12 | `HIST_count_parallel_wksp`                           | `hist.c`            |
|  0.1% |  11.0ms |      11 | `ZSTD_splitBlock`                                    | `zstd_preSplit.c`   |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `unknown (libc.so.6)` (`<unknown>`)

|     % |   Time | Samples | Caller                          | Location          |
| ----: | -----: | ------: | ------------------------------- | ----------------- |
| 99.9% | 11.99s |  11,999 | `unknown (libc.so.6)`           | `<unknown>`       |
|  0.1% | 10.0ms |      10 | `__libc_start_main (libc.so.6)` | `<unknown>`       |
|  0.1% |  9.0ms |       9 | `ZSTD_compressStream2`          | `zstd_compress.c` |
|  0.1% |  7.0ms |       7 | `fread (libc.so.6)`             | `<unknown>`       |
| <0.1% |  3.0ms |       3 | `ZSTD_resetCCtx_internal`       | `zstd_compress.c` |

##### `POOL_thread` (`pool.c`)

|      % |   Time | Samples | Caller                | Location    |
| -----: | -----: | ------: | --------------------- | ----------- |
| 100.0% | 11.99s |  11,999 | `unknown (libc.so.6)` | `<unknown>` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|      % |   Time | Samples | Caller        | Location |
| -----: | -----: | ------: | ------------- | -------- |
| 100.0% | 11.99s |  11,991 | `POOL_thread` | `pool.c` |

##### `ZSTD_compressContinue_internal` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                  | Location            |
| -----: | -----: | ------: | ----------------------- | ------------------- |
| 100.0% | 11.98s |  11,985 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                           | Location          |
| -----: | -----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 11.93s |  11,933 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 99.9% | 11.75s |  11,750 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  0.1% | 16.0ms |      16 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                    | Location     |
| -----: | -----: | ------: | ------------------------- | ------------ |
| 100.0% | 10.13s |  10,131 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

|     % |    Time | Samples | Caller                        | Location          |
| ----: | ------: | ------: | ----------------------------- | ----------------- |
| 99.1% | 116.0ms |     116 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  0.9% |   1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 31.0ms |      31 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                          | Location     |
| -----: | -----: | ------: | ------------------------------- | ------------ |
| 100.0% | 31.0ms |      31 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                    | Location     |
| -----: | -----: | ------: | ------------------------- | ------------ |
| 100.0% | 25.0ms |      25 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                         | Location          |
| -----: | -----: | ------: | ------------------------------ | ----------------- |
| 100.0% | 20.0ms |      20 | `ZSTD_deriveBlockSplitsHelper` | `zstd_compress.c` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                           | Location          |
| -----: | -----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 20.0ms |      20 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTD_compressBlock_btultra2` (`zstd_opt.c`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 17.0ms |      17 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                           | Location          |
| -----: | -----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 16.0ms |      16 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                         | Location          |
| -----: | -----: | ------: | ------------------------------ | ----------------- |
| 100.0% | 15.0ms |      15 | `ZSTD_entropyCompressSeqStore` | `zstd_compress.c` |

##### `ZSTD_entropyCompressSeqStore` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                              | Location          |
| -----: | -----: | ------: | ----------------------------------- | ----------------- |
| 100.0% | 15.0ms |      15 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                    | Location    |
| -----: | -----: | ------: | ------------------------- | ----------- |
| 100.0% | 14.0ms |      14 | `el0t_64_sync ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

|     % |  Time | Samples | Caller                  | Location    |
| ----: | ----: | ------: | ----------------------- | ----------- |
| 50.0% | 7.0ms |       7 | `__read (libc.so.6)`    | `<unknown>` |
| 28.6% | 4.0ms |       4 | `unknown (libc.so.6)`   | `<unknown>` |
|  7.1% | 1.0ms |       1 | `unknown ([anon])`      | `<unknown>` |
|  7.1% | 1.0ms |       1 | `FIO_createPreferences` | `fileio.c`  |
|  7.1% | 1.0ms |       1 | `write (libc.so.6)`     | `<unknown>` |

##### `ZSTD_buildBlockEntropyStats` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                                               | Location          |
| -----: | -----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 14.0ms |      14 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|      % |   Time | Samples | Caller               | Location          |
| -----: | -----: | ------: | -------------------- | ----------------- |
| 100.0% | 12.0ms |      12 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |   Time | Samples | Caller                              | Location          |
| ----: | -----: | ------: | ----------------------------------- | ----------------- |
| 83.3% | 10.0ms |      10 | `ZSTD_buildSequencesStatistics`     | `zstd_compress.c` |
| 16.7% |  2.0ms |       2 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c` |

##### `ZSTD_splitBlock` (`zstd_preSplit.c`)

|      % |   Time | Samples | Caller                           | Location          |
| -----: | -----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 11.0ms |      11 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `unknown (libc.so.6)` (`<unknown>`)

|     % |   Time | Samples | Callee                    | Location    |
| ----: | -----: | ------: | ------------------------- | ----------- |
| 99.9% | 11.99s |  11,999 | `POOL_thread`             | `pool.c`    |
| 99.9% | 11.99s |  11,999 | `unknown (libc.so.6)`     | `<unknown>` |
|  0.1% |  9.0ms |       9 | `main`                    | `zstdcli.c` |
|  0.1% |  7.0ms |       7 | `__read (libc.so.6)`      | `<unknown>` |
| <0.1% |  4.0ms |       4 | `el0t_64_sync ([kernel])` | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|     % |   Time | Samples | Callee                          | Location            |
| ----: | -----: | ------: | ------------------------------- | ------------------- |
| 99.9% | 11.99s |  11,991 | `ZSTDMT_compressionJob`         | `zstdmt_compress.c` |
|  0.1% |  7.0ms |       7 | `AIO_ReadPool_executeReadJob`   | `fileio_asyncio.c`  |
| <0.1% |  1.0ms |       1 | `AIO_WritePool_executeWriteJob` | `fileio_asyncio.c`  |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|     % |   Time | Samples | Callee                                 | Location            |
| ----: | -----: | ------: | -------------------------------------- | ------------------- |
| 99.9% | 11.98s |  11,985 | `ZSTD_compressContinue_internal`       | `zstd_compress.c`   |
| <0.1% |  3.0ms |       3 | `ZSTD_compressBegin_advanced_internal` | `zstd_compress.c`   |
| <0.1% |  2.0ms |       2 | `ZSTD_XXH64_update`                    | `xxhash.h`          |
| <0.1% |  1.0ms |       1 | `ZSTDMT_getBuffer`                     | `zstdmt_compress.c` |

##### `ZSTD_compressContinue_internal` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                              | Location          |
| ----: | -----: | ------: | ----------------------------------- | ----------------- |
| 99.6% | 11.93s |  11,933 | `ZSTD_buildSeqStore`                | `zstd_compress.c` |
|  0.2% | 20.0ms |      20 | `ZSTD_deriveBlockSplitsHelper`      | `zstd_compress.c` |
|  0.1% | 16.0ms |      16 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |
|  0.1% | 11.0ms |      11 | `ZSTD_splitBlock`                   | `zstd_preSplit.c` |
| <0.1% |  5.0ms |       5 | `ZSTD_XXH64_update`                 | `xxhash.h`        |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|     % |    Time | Samples | Callee                        | Location     |
| ----: | ------: | ------: | ----------------------------- | ------------ |
| 98.5% |  11.75s |  11,750 | `ZSTD_compressBlock_opt2`     | `zstd_opt.c` |
|  1.0% | 116.0ms |     116 | `ZSTD_litLengthPrice`         | `zstd_opt.c` |
|  0.3% |  31.0ms |      31 | `ZSTD_rawLiteralsCost`        | `zstd_opt.c` |
|  0.1% |  17.0ms |      17 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c` |
|  0.1% |  12.0ms |      12 | `ZSTD_updateStats`            | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |   Time | Samples | Callee                              | Location     |
| ----: | -----: | ------: | ----------------------------------- | ------------ |
| 86.1% | 10.13s |  10,131 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c` |
|  0.2% | 25.0ms |      25 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c` |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|    % |   Time | Samples | Callee           | Location     |
| ---: | -----: | ------: | ---------------- | ------------ |
| 0.3% | 31.0ms |      31 | `ZSTD_insertBt1` | `zstd_opt.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                              | Location          |
| ----: | -----: | ------: | ----------------------------------- | ----------------- |
| 70.0% | 14.0ms |      14 | `ZSTD_buildBlockEntropyStats`       | `zstd_compress.c` |
| 30.0% |  6.0ms |       6 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|      % |   Time | Samples | Callee                                               | Location          |
| -----: | -----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 20.0ms |      20 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_compressBlock_btultra2` (`zstd_opt.c`)

|     % |   Time | Samples | Callee                    | Location     |
| ----: | -----: | ------: | ------------------------- | ------------ |
| 94.1% | 16.0ms |      16 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |
|  5.9% |  1.0ms |       1 | `ZSTD_litLengthPrice`     | `zstd_opt.c` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                         | Location          |
| ----: | -----: | ------: | ------------------------------ | ----------------- |
| 93.8% | 15.0ms |      15 | `ZSTD_entropyCompressSeqStore` | `zstd_compress.c` |

##### `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                          | Location                    |
| ----: | ----: | ------: | ------------------------------- | --------------------------- |
| 46.7% | 7.0ms |       7 | `ZSTD_encodeSequences`          | `zstd_compress_sequences.c` |
| 26.7% | 4.0ms |       4 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c`           |
| 13.3% | 2.0ms |       2 | `ZSTD_compressLiterals`         | `zstd_compress_literals.c`  |
| 13.3% | 2.0ms |       2 | `ZSTD_seqToCodes`               | `zstd_compress.c`           |

##### `ZSTD_entropyCompressSeqStore` (`zstd_compress.c`)

|      % |   Time | Samples | Callee                                  | Location          |
| -----: | -----: | ------: | --------------------------------------- | ----------------- |
| 100.0% | 15.0ms |      15 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

|     % |  Time | Samples | Callee               | Location    |
| ----: | ----: | ------: | -------------------- | ----------- |
| 64.3% | 9.0ms |       9 | `el0_svc ([kernel])` | `<unknown>` |
| 28.6% | 4.0ms |       4 | `el0_da ([kernel])`  | `<unknown>` |
|  7.1% | 1.0ms |       1 | `el0_ia ([kernel])`  | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Callee                            | Location    |
| -----: | -----: | ------: | --------------------------------- | ----------- |
| 100.0% | 14.0ms |      14 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `ZSTD_buildBlockEntropyStats` (`zstd_compress.c`)

|     % |  Time | Samples | Callee                          | Location          |
| ----: | ----: | ------: | ------------------------------- | ----------------- |
| 42.9% | 6.0ms |       6 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |
| 35.7% | 5.0ms |       5 | `HUF_optimalTableLog`           | `huf_compress.c`  |
| 21.4% | 3.0ms |       3 | `ZSTD_seqToCodes`               | `zstd_compress.c` |

##### `ZSTD_splitBlock` (`zstd_preSplit.c`)

|     % |  Time | Samples | Callee                     | Location          |
| ----: | ----: | ------: | -------------------------- | ----------------- |
| 72.7% | 8.0ms |       8 | `ZSTD_recordFingerprint_1` | `zstd_preSplit.c` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 84.0% |  10.09s |  10,091 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 13.3% |   1.60s |   1,603 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.0% | 116.0ms |     116 | `ZSTD_litLengthPrice` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.3% |  31.0ms |      31 | `ZSTD_rawLiteralsCost` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.3% |  31.0ms |      31 | `ZSTD_insertBt1` (`zstd_opt.c`) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.2% |  25.0ms |      25 | `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.1% |  12.0ms |      12 | `ZSTD_updateStats` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.1% |   9.0ms |       9 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.1% |   8.0ms |       8 | `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`) ← `ZSTD_splitBlock` ← `ZSTD_compressContinue_internal` (`zstd_compress.c`) ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.1% |   8.0ms |       8 | `unknown (libc.so.6)` ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.1% |   7.0ms |       7 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |   7.0ms |       7 | `ZSTD_encodeSequences` (`zstd_compress_sequences.c`) ← `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`) ← `ZSTD_entropyCompressSeqStore` ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.1% |   7.0ms |       7 | `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <0.1% |   6.0ms |       6 | `__arch_copy_to_user ([kernel])` ← `copy_page_to_iter ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `__arm64_sys_read ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `__read (libc.so.6)` ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` |
| <0.1% |   6.0ms |       6 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                           |
| <0.1% |   5.0ms |       5 | `ZSTD_XXH64_update` (`xxhash.h`) ← `ZSTD_compressContinue_internal` (`zstd_compress.c`) ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <0.1% |   4.0ms |       4 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_entropyCompressSeqStore_internal` ← `ZSTD_entropyCompressSeqStore` ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                  |
| <0.1% |   4.0ms |       4 | `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| <0.1% |   3.0ms |       3 | `ZSTD_seqToCodes` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <0.1% |   3.0ms |       3 | `ZSTD_splitBlock` (`zstd_preSplit.c`) ← `ZSTD_compressContinue_internal` (`zstd_compress.c`) ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

# Uninterruptible sleep profile

Slept 8 times.

| Category |      % | Sleeps |
| -------- | -----: | -----: |
| Kernel   | 100.0% |      8 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 6 times (75.0%) unknown (libc.so.6)
│   └── … 6 times (75.0%) __read (libc.so.6)
│       └── 6 times (75.0%) el0t_64_sync ([kernel])
│           └── 6 times (75.0%) el0t_64_sync_handler ([kernel])
│               └── 6 times (75.0%) el0_svc ([kernel])
│                   └── 6 times (75.0%) do_el0_svc ([kernel])
│                       └── 6 times (75.0%) invoke_syscall.constprop.0 ([kernel])
│                           └── 6 times (75.0%) __arm64_sys_read ([kernel])
│                               └── 6 times (75.0%) ksys_read ([kernel])
│                                   └── 6 times (75.0%) vfs_read ([kernel])
│                                       └── 6 times (75.0%) ovl_read_iter ([kernel])
│                                           └── 6 times (75.0%) backing_file_read_iter ([kernel])
│                                               └── 6 times (75.0%) vfs_iter_read ([kernel])
│                                                   └── 6 times (75.0%) do_iter_readv_writev ([kernel])
│                                                       └── 6 times (75.0%) ext4_file_read_iter ([kernel])
│                                                           └── 6 times (75.0%) generic_file_read_iter ([kernel])
│                                                               └── 6 times (75.0%) filemap_read ([kernel])
│                                                                   ├── 3 times (37.5%) filemap_get_pages ([kernel])
│                                                                   │   └── 3 times (37.5%) folio_wait_bit_common ([kernel])
│                                                                   │       └── 3 times (37.5%) io_schedule ([kernel])
│                                                                   │           └── 3 times (37.5%) schedule ([kernel])
│                                                                   │               └── 3 times (37.5%) __schedule ([kernel])
│                                                                   │                   └── 3 times (37.5%) __bpf_trace_sched_switch ([kernel])
│                                                                   │                       └── 3 times (37.5%) bpf_trace_run4 ([kernel])
│                                                                   └── … 3 times (37.5%) el1h_64_sync ([kernel])
│                                                                       └── 3 times (37.5%) el1h_64_sync_handler ([kernel])
│                                                                           └── 3 times (37.5%) el1_abort ([kernel])
│                                                                               └── 3 times (37.5%) do_mem_abort ([kernel])
│                                                                                   └── 3 times (37.5%) do_translation_fault ([kernel])
│                                                                                       └── 3 times (37.5%) do_page_fault ([kernel])
│                                                                                           └── 3 times (37.5%) lock_mm_and_find_vma ([kernel])
│                                                                                               └── 3 times (37.5%) down_read_killable ([kernel])
│                                                                                                   └── 3 times (37.5%) rwsem_down_read_slowpath ([kernel])
│                                                                                                       └── 3 times (37.5%) schedule_preempt_disabled ([kernel])
│                                                                                                           └── 3 times (37.5%) schedule ([kernel])
│                                                                                                               └── 3 times (37.5%) __schedule ([kernel])
│                                                                                                                   └── 3 times (37.5%) __bpf_trace_sched_switch ([kernel])
│                                                                                                                       └── 3 times (37.5%, self 100.0% globally) bpf_trace_run4 ([kernel])
├── … 1 time (12.5%) bpf_trace_run4 ([kernel])
└── … 1 time (12.5%) bpf_trace_run4 ([kernel])
```

## Hottest functions

### Self sleeps

Functions with the most uninterruptible sleeps entered within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self sleeps.

##### Kernel

|      % | Sleeps | Function                    | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |      8 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's self sleeps. Inlining can make caller attribution imprecise.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |      8 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

### Total sleeps

Functions with the most uninterruptible sleeps entered within the function and its callees.

|      % | Sleeps | Function                                | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |      8 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
| 100.0% |      8 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
| 100.0% |      8 | `__schedule ([kernel])`                 | `<unknown>` |
| 100.0% |      8 | `schedule ([kernel])`                   | `<unknown>` |
| 100.0% |      8 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
| 100.0% |      8 | `do_el0_svc ([kernel])`                 | `<unknown>` |
| 100.0% |      8 | `el0_svc ([kernel])`                    | `<unknown>` |
| 100.0% |      8 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
| 100.0% |      8 | `el0t_64_sync ([kernel])`               | `<unknown>` |
|  87.5% |      7 | `filemap_read ([kernel])`               | `<unknown>` |
|  87.5% |      7 | `generic_file_read_iter ([kernel])`     | `<unknown>` |
|  87.5% |      7 | `ext4_file_read_iter ([kernel])`        | `<unknown>` |
|  87.5% |      7 | `do_iter_readv_writev ([kernel])`       | `<unknown>` |
|  87.5% |      7 | `vfs_iter_read ([kernel])`              | `<unknown>` |
|  87.5% |      7 | `backing_file_read_iter ([kernel])`     | `<unknown>` |
|  87.5% |      7 | `ovl_read_iter ([kernel])`              | `<unknown>` |
|  75.0% |      6 | `vfs_read ([kernel])`                   | `<unknown>` |
|  75.0% |      6 | `ksys_read ([kernel])`                  | `<unknown>` |
|  75.0% |      6 | `__arm64_sys_read ([kernel])`           | `<unknown>` |
|  75.0% |      6 | `__read (libc.so.6)`                    | `<unknown>` |

#### Categories

Categories accounting for at least 1.0% of self sleeps.

##### Kernel

|      % | Sleeps | Function                                | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |      8 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
| 100.0% |      8 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
| 100.0% |      8 | `__schedule ([kernel])`                 | `<unknown>` |
| 100.0% |      8 | `schedule ([kernel])`                   | `<unknown>` |
| 100.0% |      8 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
| 100.0% |      8 | `do_el0_svc ([kernel])`                 | `<unknown>` |
| 100.0% |      8 | `el0_svc ([kernel])`                    | `<unknown>` |
| 100.0% |      8 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
| 100.0% |      8 | `el0t_64_sync ([kernel])`               | `<unknown>` |
|  87.5% |      7 | `filemap_read ([kernel])`               | `<unknown>` |
|  87.5% |      7 | `generic_file_read_iter ([kernel])`     | `<unknown>` |
|  87.5% |      7 | `ext4_file_read_iter ([kernel])`        | `<unknown>` |
|  87.5% |      7 | `do_iter_readv_writev ([kernel])`       | `<unknown>` |
|  87.5% |      7 | `vfs_iter_read ([kernel])`              | `<unknown>` |
|  87.5% |      7 | `backing_file_read_iter ([kernel])`     | `<unknown>` |
|  87.5% |      7 | `ovl_read_iter ([kernel])`              | `<unknown>` |
|  75.0% |      6 | `vfs_read ([kernel])`                   | `<unknown>` |
|  75.0% |      6 | `ksys_read ([kernel])`                  | `<unknown>` |
|  75.0% |      6 | `__arm64_sys_read ([kernel])`           | `<unknown>` |
|  62.5% |      5 | `io_schedule ([kernel])`                | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total sleeps. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |      8 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |      8 | `__schedule ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |      8 | `schedule ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|     % | Sleeps | Caller                                 | Location    |
| ----: | -----: | -------------------------------------- | ----------- |
| 62.5% |      5 | `io_schedule ([kernel])`               | `<unknown>` |
| 37.5% |      3 | `schedule_preempt_disabled ([kernel])` | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |      8 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `do_el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller               | Location    |
| -----: | -----: | -------------------- | ----------- |
| 100.0% |      8 | `el0_svc ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      8 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |      8 | `el0t_64_sync ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

|     % | Sleeps | Caller               | Location    |
| ----: | -----: | -------------------- | ----------- |
| 75.0% |      6 | `__read (libc.so.6)` | `<unknown>` |
| 25.0% |      2 | `unknown ([anon])`   | `<unknown>` |

##### `filemap_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                              | Location    |
| -----: | -----: | ----------------------------------- | ----------- |
| 100.0% |      7 | `generic_file_read_iter ([kernel])` | `<unknown>` |

##### `generic_file_read_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                           | Location    |
| -----: | -----: | -------------------------------- | ----------- |
| 100.0% |      7 | `ext4_file_read_iter ([kernel])` | `<unknown>` |

##### `ext4_file_read_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      7 | `do_iter_readv_writev ([kernel])` | `<unknown>` |

##### `do_iter_readv_writev ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |      7 | `vfs_iter_read ([kernel])` | `<unknown>` |

##### `vfs_iter_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                              | Location    |
| -----: | -----: | ----------------------------------- | ----------- |
| 100.0% |      7 | `backing_file_read_iter ([kernel])` | `<unknown>` |

##### `backing_file_read_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |      7 | `ovl_read_iter ([kernel])` | `<unknown>` |

##### `ovl_read_iter ([kernel])` (`<unknown>`)

|     % | Sleeps | Caller                     | Location    |
| ----: | -----: | -------------------------- | ----------- |
| 85.7% |      6 | `vfs_read ([kernel])`      | `<unknown>` |
| 14.3% |      1 | `__kernel_read ([kernel])` | `<unknown>` |

##### `vfs_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                 | Location    |
| -----: | -----: | ---------------------- | ----------- |
| 100.0% |      6 | `ksys_read ([kernel])` | `<unknown>` |

##### `ksys_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                        | Location    |
| -----: | -----: | ----------------------------- | ----------- |
| 100.0% |      6 | `__arm64_sys_read ([kernel])` | `<unknown>` |

##### `__arm64_sys_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                  | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |      6 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |

##### `__read (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Caller                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |      6 | `unknown (libc.so.6)` | `<unknown>` |

##### `io_schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                             | Location    |
| -----: | -----: | ---------------------------------- | ----------- |
| 100.0% |      5 | `folio_wait_bit_common ([kernel])` | `<unknown>` |

#### Callees

Callees with the largest contribution to each function's total sleeps. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                      | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |      8 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |      8 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |      8 | `__schedule ([kernel])` | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

|     % | Sleeps | Callee                          | Location    |
| ----: | -----: | ------------------------------- | ----------- |
| 75.0% |      6 | `__arm64_sys_read ([kernel])`   | `<unknown>` |
| 25.0% |      2 | `__arm64_sys_execve ([kernel])` | `<unknown>` |

##### `do_el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                  | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |      8 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |      8 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee               | Location    |
| -----: | -----: | -------------------- | ----------- |
| 100.0% |      8 | `el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      8 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `filemap_read ([kernel])` (`<unknown>`)

|     % | Sleeps | Callee                         | Location    |
| ----: | -----: | ------------------------------ | ----------- |
| 57.1% |      4 | `filemap_get_pages ([kernel])` | `<unknown>` |
| 42.9% |      3 | `copy_page_to_iter ([kernel])` | `<unknown>` |

##### `generic_file_read_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |      7 | `filemap_read ([kernel])` | `<unknown>` |

##### `ext4_file_read_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                              | Location    |
| -----: | -----: | ----------------------------------- | ----------- |
| 100.0% |      7 | `generic_file_read_iter ([kernel])` | `<unknown>` |

##### `do_iter_readv_writev ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                           | Location    |
| -----: | -----: | -------------------------------- | ----------- |
| 100.0% |      7 | `ext4_file_read_iter ([kernel])` | `<unknown>` |

##### `vfs_iter_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |      7 | `do_iter_readv_writev ([kernel])` | `<unknown>` |

##### `backing_file_read_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |      7 | `vfs_iter_read ([kernel])` | `<unknown>` |

##### `ovl_read_iter ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                              | Location    |
| -----: | -----: | ----------------------------------- | ----------- |
| 100.0% |      7 | `backing_file_read_iter ([kernel])` | `<unknown>` |

##### `vfs_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |      6 | `ovl_read_iter ([kernel])` | `<unknown>` |

##### `ksys_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |      6 | `vfs_read ([kernel])` | `<unknown>` |

##### `__arm64_sys_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                 | Location    |
| -----: | -----: | ---------------------- | ----------- |
| 100.0% |      6 | `ksys_read ([kernel])` | `<unknown>` |

##### `__read (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |      6 | `el0t_64_sync ([kernel])` | `<unknown>` |

##### `io_schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |      5 | `schedule ([kernel])` | `<unknown>` |

## Hottest call stacks

Call stacks with the most uninterruptible sleeps entered in their leaf frame.

|     % | Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | -----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 37.5% |      3 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `io_schedule ([kernel])` ← `folio_wait_bit_common ([kernel])` ← `filemap_get_pages ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `__arm64_sys_read ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `__read (libc.so.6)` ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                 |
| 37.5% |      3 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `schedule_preempt_disabled ([kernel])` ← `rwsem_down_read_slowpath ([kernel])` ← `down_read_killable ([kernel])` ← `lock_mm_and_find_vma ([kernel])` ← `do_page_fault ([kernel])` ← `do_translation_fault ([kernel])` ← `do_mem_abort ([kernel])` ← `el1_abort ([kernel])` ← `el1h_64_sync_handler ([kernel])` ← `el1h_64_sync ([kernel])` ← `__arch_copy_to_user ([kernel])` ← `copy_page_to_iter ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `__arm64_sys_read ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `__read (libc.so.6)` ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` |
| 12.5% |      1 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `io_schedule ([kernel])` ← `folio_wait_bit_common ([kernel])` ← `filemap_get_pages ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `__kernel_read ([kernel])` ← `kernel_read ([kernel])` ← `bprm_execve ([kernel])` ← `do_execveat_common ([kernel])` ← `__arm64_sys_execve ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown ([anon])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([anon])` ← `unknown ([anon])` ← `unknown ([unmapped])`                                                                                                                                                                                                                           |
| 12.5% |      1 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `io_schedule ([kernel])` ← `folio_wait_bit_common ([kernel])` ← `filemap_fault ([kernel])` ← `__do_fault ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_page_fault ([kernel])` ← `do_translation_fault ([kernel])` ← `do_mem_abort ([kernel])` ← `el1_abort ([kernel])` ← `el1h_64_sync_handler ([kernel])` ← `el1h_64_sync ([kernel])` ← `__arch_clear_user ([kernel])` ← `load_elf_binary ([kernel])` ← `bprm_execve ([kernel])` ← `do_execveat_common ([kernel])` ← `__arm64_sys_execve ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown ([anon])`                                                                                                                                                                                                                                                                                                                                                                                |

# Interruptible sleep profile

Slept 235 times.

| Category |      % | Sleeps |
| -------- | -----: | -----: |
| Kernel   | 100.0% |    235 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 177 times (75.3%) unknown (libc.so.6)
│   └── … 177 times (75.3%) el0t_64_sync ([kernel])
│       └── 177 times (75.3%) el0t_64_sync_handler ([kernel])
│           └── 177 times (75.3%) el0_svc ([kernel])
│               └── 177 times (75.3%) do_el0_svc ([kernel])
│                   └── 177 times (75.3%) invoke_syscall.constprop.0 ([kernel])
│                       └── 177 times (75.3%) __arm64_sys_futex ([kernel])
│                           └── 177 times (75.3%) do_futex ([kernel])
│                               └── 177 times (75.3%) futex_wait ([kernel])
│                                   └── 177 times (75.3%) __futex_wait ([kernel])
│                                       └── 177 times (75.3%) futex_do_wait ([kernel])
│                                           └── 177 times (75.3%) schedule ([kernel])
│                                               └── 177 times (75.3%) __schedule ([kernel])
│                                                   └── 177 times (75.3%) __bpf_trace_sched_switch ([kernel])
│                                                       └── 177 times (75.3%, self 100.0% globally) bpf_trace_run4 ([kernel])
└── 58 times (24.7%) _start (zstd)
    └── 58 times (24.7%) __libc_start_main (libc.so.6)
        └── 58 times (24.7%) unknown (libc.so.6)
            └── … 58 times (24.7%) el0t_64_sync ([kernel])
                └── 58 times (24.7%) el0t_64_sync_handler ([kernel])
                    └── 58 times (24.7%) el0_svc ([kernel])
                        └── 58 times (24.7%) do_el0_svc ([kernel])
                            └── 58 times (24.7%) invoke_syscall.constprop.0 ([kernel])
                                └── 58 times (24.7%) __arm64_sys_futex ([kernel])
                                    └── 58 times (24.7%) do_futex ([kernel])
                                        └── 58 times (24.7%) futex_wait ([kernel])
                                            └── 58 times (24.7%) __futex_wait ([kernel])
                                                └── 58 times (24.7%) futex_do_wait ([kernel])
                                                    └── 58 times (24.7%) schedule ([kernel])
                                                        └── 58 times (24.7%) __schedule ([kernel])
                                                            └── 58 times (24.7%) __bpf_trace_sched_switch ([kernel])
                                                                └── 58 times (24.7%) bpf_trace_run4 ([kernel])
```

## Hottest functions

### Self sleeps

Functions with the most interruptible sleeps entered within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self sleeps.

##### Kernel

|      % | Sleeps | Function                    | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |    235 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's self sleeps. Inlining can make caller attribution imprecise.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |    235 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

### Total sleeps

Functions with the most interruptible sleeps entered within the function and its callees.

|      % | Sleeps | Function                                | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |    235 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
| 100.0% |    235 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
| 100.0% |    235 | `__schedule ([kernel])`                 | `<unknown>` |
| 100.0% |    235 | `schedule ([kernel])`                   | `<unknown>` |
| 100.0% |    235 | `futex_do_wait ([kernel])`              | `<unknown>` |
| 100.0% |    235 | `__futex_wait ([kernel])`               | `<unknown>` |
| 100.0% |    235 | `futex_wait ([kernel])`                 | `<unknown>` |
| 100.0% |    235 | `do_futex ([kernel])`                   | `<unknown>` |
| 100.0% |    235 | `__arm64_sys_futex ([kernel])`          | `<unknown>` |
| 100.0% |    235 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
| 100.0% |    235 | `do_el0_svc ([kernel])`                 | `<unknown>` |
| 100.0% |    235 | `el0_svc ([kernel])`                    | `<unknown>` |
| 100.0% |    235 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
| 100.0% |    235 | `el0t_64_sync ([kernel])`               | `<unknown>` |
| 100.0% |    235 | `unknown (libc.so.6)`                   | `<unknown>` |
| 100.0% |    235 | `pthread_cond_wait (libc.so.6)`         | `<unknown>` |
|  75.3% |    177 | `POOL_thread`                           | `pool.c`    |
|  24.7% |     58 | `FIO_compressFilename_srcFile`          | `fileio.c`  |
|  24.7% |     58 | `FIO_compressFilename`                  | `fileio.c`  |
|  24.7% |     58 | `main`                                  | `zstdcli.c` |

#### Categories

Categories accounting for at least 1.0% of self sleeps.

##### Kernel

|      % | Sleeps | Function                                | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |    235 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
| 100.0% |    235 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
| 100.0% |    235 | `__schedule ([kernel])`                 | `<unknown>` |
| 100.0% |    235 | `schedule ([kernel])`                   | `<unknown>` |
| 100.0% |    235 | `futex_do_wait ([kernel])`              | `<unknown>` |
| 100.0% |    235 | `__futex_wait ([kernel])`               | `<unknown>` |
| 100.0% |    235 | `futex_wait ([kernel])`                 | `<unknown>` |
| 100.0% |    235 | `do_futex ([kernel])`                   | `<unknown>` |
| 100.0% |    235 | `__arm64_sys_futex ([kernel])`          | `<unknown>` |
| 100.0% |    235 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
| 100.0% |    235 | `do_el0_svc ([kernel])`                 | `<unknown>` |
| 100.0% |    235 | `el0_svc ([kernel])`                    | `<unknown>` |
| 100.0% |    235 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
| 100.0% |    235 | `el0t_64_sync ([kernel])`               | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total sleeps. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |    235 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    235 | `__schedule ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    235 | `schedule ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |    235 | `futex_do_wait ([kernel])` | `<unknown>` |

##### `futex_do_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |    235 | `__futex_wait ([kernel])` | `<unknown>` |

##### `__futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    235 | `futex_wait ([kernel])` | `<unknown>` |

##### `futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    235 | `do_futex ([kernel])` | `<unknown>` |

##### `do_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                         | Location    |
| -----: | -----: | ------------------------------ | ----------- |
| 100.0% |    235 | `__arm64_sys_futex ([kernel])` | `<unknown>` |

##### `__arm64_sys_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                                  | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |    235 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    235 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `do_el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller               | Location    |
| -----: | -----: | -------------------- | ----------- |
| 100.0% |    235 | `el0_svc ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |    235 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |    235 | `el0t_64_sync ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    235 | `unknown (libc.so.6)` | `<unknown>` |

##### `unknown (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Caller                          | Location    |
| -----: | -----: | ------------------------------- | ----------- |
| 100.0% |    235 | `pthread_cond_wait (libc.so.6)` | `<unknown>` |
|  75.7% |    178 | `unknown (libc.so.6)`           | `<unknown>` |
|  24.7% |     58 | `__libc_start_main (libc.so.6)` | `<unknown>` |

##### `pthread_cond_wait (libc.so.6)` (`<unknown>`)

|     % | Sleeps | Caller                          | Location            |
| ----: | -----: | ------------------------------- | ------------------- |
| 75.3% |    177 | `POOL_thread`                   | `pool.c`            |
| 16.6% |     39 | `ZSTDMT_compressStream_generic` | `zstdmt_compress.c` |
|  8.1% |     19 | `POOL_add`                      | `pool.c`            |

##### `POOL_thread` (`pool.c`)

|      % | Sleeps | Caller                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    177 | `unknown (libc.so.6)` | `<unknown>` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|      % | Sleeps | Caller                 | Location   |
| -----: | -----: | ---------------------- | ---------- |
| 100.0% |     58 | `FIO_compressFilename` | `fileio.c` |

##### `FIO_compressFilename` (`fileio.c`)

|      % | Sleeps | Caller | Location    |
| -----: | -----: | ------ | ----------- |
| 100.0% |     58 | `main` | `zstdcli.c` |

##### `main` (`zstdcli.c`)

|      % | Sleeps | Caller                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |     58 | `unknown (libc.so.6)` | `<unknown>` |

#### Callees

Callees with the largest contribution to each function's total sleeps. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                      | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |    235 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                | Location    |
| -----: | -----: | ------------------------------------- | ----------- |
| 100.0% |    235 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    235 | `__schedule ([kernel])` | `<unknown>` |

##### `futex_do_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    235 | `schedule ([kernel])` | `<unknown>` |

##### `__futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |    235 | `futex_do_wait ([kernel])` | `<unknown>` |

##### `futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |    235 | `__futex_wait ([kernel])` | `<unknown>` |

##### `do_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    235 | `futex_wait ([kernel])` | `<unknown>` |

##### `__arm64_sys_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    235 | `do_futex ([kernel])` | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                         | Location    |
| -----: | -----: | ------------------------------ | ----------- |
| 100.0% |    235 | `__arm64_sys_futex ([kernel])` | `<unknown>` |

##### `do_el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                                  | Location    |
| -----: | -----: | --------------------------------------- | ----------- |
| 100.0% |    235 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |    235 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee               | Location    |
| -----: | -----: | -------------------- | ----------- |
| 100.0% |    235 | `el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                            | Location    |
| -----: | -----: | --------------------------------- | ----------- |
| 100.0% |    235 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `unknown (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |    235 | `el0t_64_sync ([kernel])` | `<unknown>` |
|  75.7% |    178 | `unknown (libc.so.6)`     | `<unknown>` |
|  75.3% |    177 | `POOL_thread`             | `pool.c`    |
|  24.7% |     58 | `main`                    | `zstdcli.c` |

##### `pthread_cond_wait (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |    235 | `unknown (libc.so.6)` | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|      % | Sleeps | Callee                          | Location    |
| -----: | -----: | ------------------------------- | ----------- |
| 100.0% |    177 | `pthread_cond_wait (libc.so.6)` | `<unknown>` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|     % | Sleeps | Callee                    | Location           |
| ----: | -----: | ------------------------- | ------------------ |
| 67.2% |     39 | `ZSTD_compressStream2`    | `zstd_compress.c`  |
| 29.3% |     17 | `AIO_ReadPool_fillBuffer` | `fileio_asyncio.c` |
|  3.4% |      2 | `AIO_ReadPool_setFile`    | `fileio_asyncio.c` |

##### `FIO_compressFilename` (`fileio.c`)

|      % | Sleeps | Callee                         | Location   |
| -----: | -----: | ------------------------------ | ---------- |
| 100.0% |     58 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `main` (`zstdcli.c`)

|      % | Sleeps | Callee                 | Location   |
| -----: | -----: | ---------------------- | ---------- |
| 100.0% |     58 | `FIO_compressFilename` | `fileio.c` |

## Hottest call stacks

Call stacks with the most interruptible sleeps entered in their leaf frame.

|     % | Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | -----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 75.3% |    177 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                     |
| 16.6% |     39 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `ZSTDMT_compressStream_generic` (`zstdmt_compress.c`) ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)` |
|  6.8% |     16 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_add` (`pool.c`) ← `AIO_ReadPool_fillBuffer` (`fileio_asyncio.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                             |
|  0.9% |      2 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_add` (`pool.c`) ← `AIO_ReadPool_setFile` (`fileio_asyncio.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                                |
|  0.4% |      1 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_add` (`pool.c`) ← `AIO_ReadPool_fillBuffer` (`fileio_asyncio.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`     |

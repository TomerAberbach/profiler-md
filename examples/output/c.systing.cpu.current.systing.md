# CPU profile

Took 12.08s over 12,080 samples (1.0ms per sample).

| Category |     % |    Time | Samples |
| -------- | ----: | ------: | ------: |
| Ours     | 90.0% |  10.87s |  10,877 |
| Kernel   |  7.6% | 923.0ms |     923 |
| Native   |  2.3% | 280.0ms |     280 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                             | Location                    |
| ----: | ------: | ------: | ------------------------------------ | --------------------------- |
| 65.5% |   7.91s |   7,914 | `ZSTD_btGetAllMatches_noDict_3`      | `zstd_opt.c`                |
| 17.0% |   2.05s |   2,056 | `ZSTD_compressBlock_opt2`            | `zstd_opt.c`                |
|  2.6% | 314.0ms |     314 | `ZSTD_insertAndFindFirstIndexHash3`  | `zstd_opt.c`                |
|  2.3% | 275.0ms |     275 | `unknown (libc.so.6)`                | `<unknown>`                 |
|  2.3% | 273.0ms |     273 | `ZSTD_litLengthPrice`                | `zstd_opt.c`                |
|  1.9% | 234.0ms |     234 | `alloc_pages_mpol_noprof ([kernel])` | `<unknown>`                 |
|  1.1% | 130.0ms |     130 | `do_anonymous_page ([kernel])`       | `<unknown>`                 |
|  1.0% | 117.0ms |     117 | `ZSTD_rawLiteralsCost`               | `zstd_opt.c`                |
|  0.8% |  96.0ms |      96 | `do_user_addr_fault ([kernel])`      | `<unknown>`                 |
|  0.8% |  94.0ms |      94 | `ZSTD_optLdm_processMatchCandidate`  | `zstd_opt.c`                |
|  0.6% |  72.0ms |      72 | `exc_page_fault ([kernel])`          | `<unknown>`                 |
|  0.6% |  71.0ms |      71 | `__handle_mm_fault ([kernel])`       | `<unknown>`                 |
|  0.5% |  62.0ms |      62 | `handle_mm_fault ([kernel])`         | `<unknown>`                 |
|  0.3% |  38.0ms |      38 | `asm_exc_page_fault ([kernel])`      | `<unknown>`                 |
|  0.2% |  26.0ms |      26 | `__alloc_pages_noprof ([kernel])`    | `<unknown>`                 |
|  0.2% |  25.0ms |      25 | `vfs_read ([kernel])`                | `<unknown>`                 |
|  0.2% |  25.0ms |      25 | `folio_add_new_anon_rmap ([kernel])` | `<unknown>`                 |
|  0.2% |  19.0ms |      19 | `folio_alloc_mpol_noprof ([kernel])` | `<unknown>`                 |
|  0.2% |  19.0ms |      19 | `ZSTD_encodeSequences_bmi2`          | `zstd_compress_sequences.c` |
|  0.1% |  17.0ms |      17 | `ZSTD_insertBt1`                     | `zstd_opt.c`                |

#### Categories

##### Ours

|     % |    Time | Samples | Function                            | Location                    |
| ----: | ------: | ------: | ----------------------------------- | --------------------------- |
| 65.5% |   7.91s |   7,914 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c`                |
| 17.0% |   2.05s |   2,056 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c`                |
|  2.6% | 314.0ms |     314 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c`                |
|  2.3% | 273.0ms |     273 | `ZSTD_litLengthPrice`               | `zstd_opt.c`                |
|  1.0% | 117.0ms |     117 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c`                |
|  0.8% |  94.0ms |      94 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c`                |
|  0.2% |  19.0ms |      19 | `ZSTD_encodeSequences_bmi2`         | `zstd_compress_sequences.c` |
|  0.1% |  17.0ms |      17 | `ZSTD_insertBt1`                    | `zstd_opt.c`                |
|  0.1% |  16.0ms |      16 | `HIST_count_parallel_wksp`          | `hist.c`                    |
|  0.1% |  11.0ms |      11 | `ZSTD_updateStats`                  | `zstd_opt.c`                |
|  0.1% |  10.0ms |      10 | `HUF_buildCTable_wksp`              | `huf_compress.c`            |
|  0.1% |   9.0ms |       9 | `ZSTD_seqToCodes`                   | `zstd_compress.c`           |
| <0.1% |   6.0ms |       6 | `FSE_buildCTable_wksp`              | `fse_compress.c`            |
| <0.1% |   5.0ms |       5 | `ZSTD_XXH64_update`                 | `xxhash.h`                  |
| <0.1% |   5.0ms |       5 | `FSE_normalizeCount`                | `fse_compress.c`            |
| <0.1% |   3.0ms |       3 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c`           |
| <0.1% |   2.0ms |       2 | `FSE_compress_usingCTable_generic`  | `fse_compress.c`            |
| <0.1% |   1.0ms |       1 | `HIST_count_simple`                 | `hist.c`                    |
| <0.1% |   1.0ms |       1 | `ZSTD_compressContinue_internal`    | `zstd_compress.c`           |
| <0.1% |   1.0ms |       1 | `HUF_writeCTable_wksp`              | `huf_compress.c`            |

##### Kernel

|     % |    Time | Samples | Function                                       | Location    |
| ----: | ------: | ------: | ---------------------------------------------- | ----------- |
|  1.9% | 234.0ms |     234 | `alloc_pages_mpol_noprof ([kernel])`           | `<unknown>` |
|  1.1% | 130.0ms |     130 | `do_anonymous_page ([kernel])`                 | `<unknown>` |
|  0.8% |  96.0ms |      96 | `do_user_addr_fault ([kernel])`                | `<unknown>` |
|  0.6% |  72.0ms |      72 | `exc_page_fault ([kernel])`                    | `<unknown>` |
|  0.6% |  71.0ms |      71 | `__handle_mm_fault ([kernel])`                 | `<unknown>` |
|  0.5% |  62.0ms |      62 | `handle_mm_fault ([kernel])`                   | `<unknown>` |
|  0.3% |  38.0ms |      38 | `asm_exc_page_fault ([kernel])`                | `<unknown>` |
|  0.2% |  26.0ms |      26 | `__alloc_pages_noprof ([kernel])`              | `<unknown>` |
|  0.2% |  25.0ms |      25 | `vfs_read ([kernel])`                          | `<unknown>` |
|  0.2% |  25.0ms |      25 | `folio_add_new_anon_rmap ([kernel])`           | `<unknown>` |
|  0.2% |  19.0ms |      19 | `folio_alloc_mpol_noprof ([kernel])`           | `<unknown>` |
|  0.1% |  16.0ms |      16 | `__mem_cgroup_charge ([kernel])`               | `<unknown>` |
|  0.1% |  16.0ms |      16 | `lock_vma_under_rcu ([kernel])`                | `<unknown>` |
|  0.1% |  13.0ms |      13 | `count_memcg_events_mm.constprop.0 ([kernel])` | `<unknown>` |
|  0.1% |  13.0ms |      13 | `vma_alloc_folio_noprof ([kernel])`            | `<unknown>` |
| <0.1% |   5.0ms |       5 | `mas_walk ([kernel])`                          | `<unknown>` |
| <0.1% |   4.0ms |       4 | `handle_softirqs ([kernel])`                   | `<unknown>` |
| <0.1% |   4.0ms |       4 | `futex_wake ([kernel])`                        | `<unknown>` |
| <0.1% |   4.0ms |       4 | `shmem_file_read_iter ([kernel])`              | `<unknown>` |
| <0.1% |   3.0ms |       3 | `__folio_mod_stat ([kernel])`                  | `<unknown>` |

##### Native

|     % |    Time | Samples | Function                          | Location    |
| ----: | ------: | ------: | --------------------------------- | ----------- |
|  2.3% | 275.0ms |     275 | `unknown (libc.so.6)`             | `<unknown>` |
| <0.1% |   3.0ms |       3 | `unknown (ld-linux-x86-64.so.2)`  | `<unknown>` |
| <0.1% |   1.0ms |       1 | `fstatat (libc.so.6)`             | `<unknown>` |
| <0.1% |   1.0ms |       1 | `pthread_cond_signal (libc.so.6)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |  Time | Samples | Location         |
| -----: | ----: | ------: | ---------------- |
| 100.0% | 7.91s |   7,914 | `zstd_opt.c:876` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 2.05s |   2,056 | `zstd_opt.c:1455` |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|     % |    Time | Samples | Location         |
| ----: | ------: | ------: | ---------------- |
| 88.2% | 277.0ms |     277 | `zstd_opt.c:414` |
|  5.7% |  18.0ms |      18 | `zstd_opt.c:423` |
|  5.1% |  16.0ms |      16 | `zstd_opt.c:428` |
|  1.0% |   3.0ms |       3 | `zstd_opt.c:424` |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

|     % |    Time | Samples | Location         |
| ----: | ------: | ------: | ---------------- |
| 91.6% | 250.0ms |     250 | `zstd_opt.c:295` |
|  5.9% |  16.0ms |      16 | `zstd_opt.c:313` |
|  1.5% |   4.0ms |       4 | `zstd_opt.c:310` |
|  1.1% |   3.0ms |       3 | `zstd_opt.c:306` |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 83.8% | 98.0ms |      98 | `zstd_opt.c:273` |
| 12.0% | 14.0ms |      14 | `zstd_opt.c:266` |
|  4.3% |  5.0ms |       5 | `zstd_opt.c:276` |

##### `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`)

|     % |   Time | Samples | Location          |
| ----: | -----: | ------: | ----------------- |
| 96.8% | 91.0ms |      91 | `zstd_opt.c:1028` |
|  3.2% |  3.0ms |       3 | `zstd_opt.c:1044` |

##### `ZSTD_encodeSequences_bmi2` (`zstd_compress_sequences.c`)

|      % |   Time | Samples | Location                        |
| -----: | -----: | ------: | ------------------------------- |
| 100.0% | 19.0ms |      19 | `zstd_compress_sequences.c:410` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 58.8% | 10.0ms |      10 | `zstd_opt.c:518` |
| 41.2% |  7.0ms |       7 | `zstd_opt.c:489` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |   Time | Samples | Location     |
| ----: | -----: | ------: | ------------ |
| 87.5% | 14.0ms |      14 | `hist.c:94`  |
| 12.5% |  2.0ms |       2 | `hist.c:122` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|     % |  Time | Samples | Location         |
| ----: | ----: | ------: | ---------------- |
| 81.8% | 9.0ms |       9 | `zstd_opt.c:361` |
|  9.1% | 1.0ms |       1 | `zstd_opt.c:364` |
|  9.1% | 1.0ms |       1 | `zstd_opt.c:370` |

##### `HUF_buildCTable_wksp` (`huf_compress.c`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 50.0% | 5.0ms |       5 | `huf_compress.c:788` |
| 30.0% | 3.0ms |       3 | `huf_compress.c:778` |
| 10.0% | 1.0ms |       1 | `huf_compress.c:785` |
| 10.0% | 1.0ms |       1 | `huf_compress.c:782` |

##### `ZSTD_seqToCodes` (`zstd_compress.c`)

|     % |  Time | Samples | Location               |
| ----: | ----: | ------: | ---------------------- |
| 55.6% | 5.0ms |       5 | `zstd_compress.c:2695` |
| 22.2% | 2.0ms |       2 | `zstd_compress.c:2697` |
| 22.2% | 2.0ms |       2 | `zstd_compress.c:2693` |

##### `FSE_buildCTable_wksp` (`fse_compress.c`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 33.3% | 2.0ms |       2 | `fse_compress.c:190` |
| 16.7% | 1.0ms |       1 | `fse_compress.c:179` |
| 16.7% | 1.0ms |       1 | `fse_compress.c:161` |
| 16.7% | 1.0ms |       1 | `fse_compress.c:103` |
| 16.7% | 1.0ms |       1 | `fse_compress.c:172` |

##### `ZSTD_XXH64_update` (`xxhash.h`)

|      % |  Time | Samples | Location        |
| -----: | ----: | ------: | --------------- |
| 100.0% | 5.0ms |       5 | `xxhash.h:3556` |

##### `FSE_normalizeCount` (`fse_compress.c`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 40.0% | 2.0ms |       2 | `fse_compress.c:468` |
| 20.0% | 1.0ms |       1 | `fse_compress.c:487` |
| 20.0% | 1.0ms |       1 | `fse_compress.c:498` |
| 20.0% | 1.0ms |       1 | `fse_compress.c:486` |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

|      % |  Time | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 3.0ms |       3 | `zstd_compress.c:3822` |

##### `FSE_compress_usingCTable_generic` (`fse_compress.c`)

|     % |  Time | Samples | Location             |
| ----: | ----: | ------: | -------------------- |
| 50.0% | 1.0ms |       1 | `fse_compress.c:588` |
| 50.0% | 1.0ms |       1 | `fse_compress.c:607` |

##### `HIST_count_simple` (`hist.c`)

|      % |  Time | Samples | Location    |
| -----: | ----: | ------: | ----------- |
| 100.0% | 1.0ms |       1 | `hist.c:42` |

##### `ZSTD_compressContinue_internal` (`zstd_compress.c`)

|      % |  Time | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 1.0ms |       1 | `zstd_compress.c:4712` |

##### `HUF_writeCTable_wksp` (`huf_compress.c`)

|      % |  Time | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 1.0ms |       1 | `huf_compress.c:269` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 99.1% |  7.84s |   7,842 | `ZSTD_compressBlock_opt2`     | `zstd_opt.c`      |
|  0.8% | 67.0ms |      67 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  0.1% |  5.0ms |       5 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 97.2% |  1.99s |   1,998 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  2.8% | 58.0ms |      58 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|      % |    Time | Samples | Caller                    | Location     |
| -----: | ------: | ------: | ------------------------- | ------------ |
| 100.0% | 314.0ms |     314 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `unknown (libc.so.6)` (`<unknown>`)

|     % |    Time | Samples | Caller                        | Location          |
| ----: | ------: | ------: | ----------------------------- | ----------------- |
| 84.7% | 233.0ms |     233 | `ZSTD_resetCCtx_internal`     | `zstd_compress.c` |
| 14.5% |  40.0ms |      40 | `ZSTD_compressStream2`        | `zstd_compress.c` |
|  0.4% |   1.0ms |       1 | `unknown (libc.so.6)`         | `<unknown>`       |
|  0.4% |   1.0ms |       1 | `ZSTD_buildBlockEntropyStats` | `zstd_compress.c` |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

|     % |    Time | Samples | Caller                        | Location          |
| ----: | ------: | ------: | ----------------------------- | ----------------- |
| 94.9% | 259.0ms |     259 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  5.1% |  14.0ms |      14 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `alloc_pages_mpol_noprof ([kernel])` (`<unknown>`)

|     % |    Time | Samples | Caller                               | Location    |
| ----: | ------: | ------: | ------------------------------------ | ----------- |
| 99.6% | 233.0ms |     233 | `folio_alloc_mpol_noprof ([kernel])` | `<unknown>` |
|  0.4% |   1.0ms |       1 | `pte_alloc_one ([kernel])`           | `<unknown>` |

##### `do_anonymous_page ([kernel])` (`<unknown>`)

|      % |    Time | Samples | Caller                         | Location    |
| -----: | ------: | ------: | ------------------------------ | ----------- |
| 100.0% | 130.0ms |     130 | `__handle_mm_fault ([kernel])` | `<unknown>` |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

|     % |    Time | Samples | Caller                        | Location          |
| ----: | ------: | ------: | ----------------------------- | ----------------- |
| 96.6% | 113.0ms |     113 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  3.4% |   4.0ms |       4 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `do_user_addr_fault ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                      | Location    |
| -----: | -----: | ------: | --------------------------- | ----------- |
| 100.0% | 96.0ms |      96 | `exc_page_fault ([kernel])` | `<unknown>` |

##### `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 98.9% | 93.0ms |      93 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  1.1% |  1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `exc_page_fault ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                          | Location    |
| -----: | -----: | ------: | ------------------------------- | ----------- |
| 100.0% | 72.0ms |      72 | `asm_exc_page_fault ([kernel])` | `<unknown>` |

##### `__handle_mm_fault ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                       | Location    |
| -----: | -----: | ------: | ---------------------------- | ----------- |
| 100.0% | 71.0ms |      71 | `handle_mm_fault ([kernel])` | `<unknown>` |

##### `handle_mm_fault ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                          | Location    |
| -----: | -----: | ------: | ------------------------------- | ----------- |
| 100.0% | 62.0ms |      62 | `do_user_addr_fault ([kernel])` | `<unknown>` |

##### `asm_exc_page_fault ([kernel])` (`<unknown>`)

|     % |   Time | Samples | Caller                      | Location                    |
| ----: | -----: | ------: | --------------------------- | --------------------------- |
| 97.4% | 37.0ms |      37 | `unknown (libc.so.6)`       | `<unknown>`                 |
|  2.6% |  1.0ms |       1 | `ZSTD_encodeSequences_bmi2` | `zstd_compress_sequences.c` |

##### `__alloc_pages_noprof ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                               | Location    |
| -----: | -----: | ------: | ------------------------------------ | ----------- |
| 100.0% | 26.0ms |      26 | `alloc_pages_mpol_noprof ([kernel])` | `<unknown>` |

##### `vfs_read ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                 | Location    |
| -----: | -----: | ------: | ---------------------- | ----------- |
| 100.0% | 25.0ms |      25 | `ksys_read ([kernel])` | `<unknown>` |

##### `folio_add_new_anon_rmap ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                         | Location    |
| -----: | -----: | ------: | ------------------------------ | ----------- |
| 100.0% | 25.0ms |      25 | `do_anonymous_page ([kernel])` | `<unknown>` |

##### `folio_alloc_mpol_noprof ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                              | Location    |
| -----: | -----: | ------: | ----------------------------------- | ----------- |
| 100.0% | 19.0ms |      19 | `vma_alloc_folio_noprof ([kernel])` | `<unknown>` |

##### `ZSTD_encodeSequences_bmi2` (`zstd_compress_sequences.c`)

|      % |   Time | Samples | Caller                                  | Location          |
| -----: | -----: | ------: | --------------------------------------- | ----------------- |
| 100.0% | 19.0ms |      19 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                          | Location     |
| -----: | -----: | ------: | ------------------------------- | ------------ |
| 100.0% | 17.0ms |      17 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |   Time | Samples | Caller                              | Location          |
| ----: | -----: | ------: | ----------------------------------- | ----------------- |
| 62.5% | 10.0ms |      10 | `ZSTD_buildSequencesStatistics`     | `zstd_compress.c` |
| 37.5% |  6.0ms |       6 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c` |

##### `__mem_cgroup_charge ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                         | Location    |
| -----: | -----: | ------: | ------------------------------ | ----------- |
| 100.0% | 16.0ms |      16 | `do_anonymous_page ([kernel])` | `<unknown>` |

##### `lock_vma_under_rcu ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                          | Location    |
| -----: | -----: | ------: | ------------------------------- | ----------- |
| 100.0% | 16.0ms |      16 | `do_user_addr_fault ([kernel])` | `<unknown>` |

##### `count_memcg_events_mm.constprop.0 ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                       | Location    |
| -----: | -----: | ------: | ---------------------------- | ----------- |
| 100.0% | 13.0ms |      13 | `handle_mm_fault ([kernel])` | `<unknown>` |

##### `vma_alloc_folio_noprof ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                         | Location    |
| -----: | -----: | ------: | ------------------------------ | ----------- |
| 100.0% | 13.0ms |      13 | `do_anonymous_page ([kernel])` | `<unknown>` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 90.9% | 10.0ms |      10 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  9.1% |  1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `HUF_buildCTable_wksp` (`huf_compress.c`)

|     % |  Time | Samples | Caller                        | Location          |
| ----: | ----: | ------: | ----------------------------- | ----------------- |
| 60.0% | 6.0ms |       6 | `HUF_optimalTableLog`         | `huf_compress.c`  |
| 30.0% | 3.0ms |       3 | `ZSTD_buildBlockEntropyStats` | `zstd_compress.c` |
| 10.0% | 1.0ms |       1 | `HUF_compress_internal`       | `huf_compress.c`  |

##### `ZSTD_seqToCodes` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                          | Location          |
| -----: | ----: | ------: | ------------------------------- | ----------------- |
| 100.0% | 9.0ms |       9 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |

##### `FSE_buildCTable_wksp` (`fse_compress.c`)

|     % |  Time | Samples | Caller                 | Location                    |
| ----: | ----: | ------: | ---------------------- | --------------------------- |
| 50.0% | 3.0ms |       3 | `HUF_writeCTable_wksp` | `huf_compress.c`            |
| 50.0% | 3.0ms |       3 | `ZSTD_buildCTable`     | `zstd_compress_sequences.c` |

##### `ZSTD_XXH64_update` (`xxhash.h`)

|     % |  Time | Samples | Caller                           | Location            |
| ----: | ----: | ------: | -------------------------------- | ------------------- |
| 80.0% | 4.0ms |       4 | `ZSTDMT_compressionJob`          | `zstdmt_compress.c` |
| 20.0% | 1.0ms |       1 | `ZSTD_compressContinue_internal` | `zstd_compress.c`   |

##### `FSE_normalizeCount` (`fse_compress.c`)

|     % |  Time | Samples | Caller                | Location                    |
| ----: | ----: | ------: | --------------------- | --------------------------- |
| 40.0% | 2.0ms |       2 | `HUF_optimalTableLog` | `huf_compress.c`            |
| 40.0% | 2.0ms |       2 | `ZSTD_NCountCost`     | `zstd_compress_sequences.c` |
| 20.0% | 1.0ms |       1 | `ZSTD_buildCTable`    | `zstd_compress_sequences.c` |

##### `mas_walk ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                          | Location    |
| -----: | ----: | ------: | ------------------------------- | ----------- |
| 100.0% | 5.0ms |       5 | `lock_vma_under_rcu ([kernel])` | `<unknown>` |

##### `handle_softirqs ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                    | Location    |
| -----: | ----: | ------: | ------------------------- | ----------- |
| 100.0% | 4.0ms |       4 | `irq_exit_rcu ([kernel])` | `<unknown>` |

##### `futex_wake ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                | Location    |
| -----: | ----: | ------: | --------------------- | ----------- |
| 100.0% | 4.0ms |       4 | `do_futex ([kernel])` | `<unknown>` |

##### `shmem_file_read_iter ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                | Location    |
| -----: | ----: | ------: | --------------------- | ----------- |
| 100.0% | 4.0ms |       4 | `vfs_read ([kernel])` | `<unknown>` |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                                               | Location          |
| -----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 3.0ms |       3 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `__folio_mod_stat ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                               | Location    |
| -----: | ----: | ------: | ------------------------------------ | ----------- |
| 100.0% | 3.0ms |       3 | `folio_add_new_anon_rmap ([kernel])` | `<unknown>` |

##### `unknown (ld-linux-x86-64.so.2)` (`<unknown>`)

|      % |  Time | Samples | Caller                           | Location    |
| -----: | ----: | ------: | -------------------------------- | ----------- |
| 100.0% | 3.0ms |       3 | `unknown (ld-linux-x86-64.so.2)` | `<unknown>` |

##### `FSE_compress_usingCTable_generic` (`fse_compress.c`)

|      % |  Time | Samples | Caller                 | Location         |
| -----: | ----: | ------: | ---------------------- | ---------------- |
| 100.0% | 2.0ms |       2 | `HUF_writeCTable_wksp` | `huf_compress.c` |

##### `HIST_count_simple` (`hist.c`)

|      % |  Time | Samples | Caller              | Location     |
| -----: | ----: | ------: | ------------------- | ------------ |
| 100.0% | 1.0ms |       1 | `ZSTD_rescaleFreqs` | `zstd_opt.c` |

##### `ZSTD_compressContinue_internal` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                         | Location          |
| -----: | ----: | ------: | ------------------------------ | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_compressContinue_public` | `zstd_compress.c` |

##### `HUF_writeCTable_wksp` (`huf_compress.c`)

|      % |  Time | Samples | Caller                  | Location         |
| -----: | ----: | ------: | ----------------------- | ---------------- |
| 100.0% | 1.0ms |       1 | `HUF_compress_internal` | `huf_compress.c` |

##### `fstatat (libc.so.6)` (`<unknown>`)

|      % |  Time | Samples | Caller            | Location |
| -----: | ----: | ------: | ----------------- | -------- |
| 100.0% | 1.0ms |       1 | `UTIL_isSameFile` | `util.c` |

##### `pthread_cond_signal (libc.so.6)` (`<unknown>`)

|      % |  Time | Samples | Caller                  | Location            |
| -----: | ----: | ------: | ----------------------- | ------------------- |
| 100.0% | 1.0ms |       1 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                               | Location            |
| ----: | ------: | ------: | -------------------------------------- | ------------------- |
| 99.8% |  12.05s |  12,050 | `unknown (libc.so.6)`                  | `<unknown>`         |
| 98.6% |  11.90s |  11,906 | `POOL_thread`                          | `pool.c`            |
| 98.1% |  11.85s |  11,850 | `ZSTDMT_compressionJob`                | `zstdmt_compress.c` |
| 90.1% |  10.88s |  10,886 | `ZSTD_compressContinue_internal`       | `zstd_compress.c`   |
| 90.1% |  10.88s |  10,886 | `ZSTD_compressContinue_public`         | `zstd_compress.c`   |
| 89.4% |  10.79s |  10,799 | `ZSTD_buildSeqStore`                   | `zstd_compress.c`   |
| 84.7% |  10.23s |  10,232 | `ZSTD_compressBlock_opt2`              | `zstd_opt.c`        |
| 65.7% |   7.93s |   7,932 | `ZSTD_btGetAllMatches_noDict_3`        | `zstd_opt.c`        |
|  7.9% | 956.0ms |     956 | `ZSTD_resetCCtx_internal`              | `zstd_compress.c`   |
|  7.9% | 956.0ms |     956 | `ZSTD_compressBegin_internal`          | `zstd_compress.c`   |
|  7.9% | 956.0ms |     956 | `ZSTD_compressBegin_advanced_internal` | `zstd_compress.c`   |
|  7.1% | 853.0ms |     853 | `asm_exc_page_fault ([kernel])`        | `<unknown>`         |
|  6.7% | 815.0ms |     815 | `exc_page_fault ([kernel])`            | `<unknown>`         |
|  6.2% | 743.0ms |     743 | `do_user_addr_fault ([kernel])`        | `<unknown>`         |
|  5.1% | 622.0ms |     622 | `handle_mm_fault ([kernel])`           | `<unknown>`         |
|  4.5% | 547.0ms |     547 | `__handle_mm_fault ([kernel])`         | `<unknown>`         |
|  3.9% | 468.0ms |     468 | `do_anonymous_page ([kernel])`         | `<unknown>`         |
|  2.6% | 314.0ms |     314 | `ZSTD_insertAndFindFirstIndexHash3`    | `zstd_opt.c`        |
|  2.4% | 291.0ms |     291 | `vma_alloc_folio_noprof ([kernel])`    | `<unknown>`         |
|  2.3% | 278.0ms |     278 | `folio_alloc_mpol_noprof ([kernel])`   | `<unknown>`         |

#### Categories

##### Ours

|     % |    Time | Samples | Function                               | Location            |
| ----: | ------: | ------: | -------------------------------------- | ------------------- |
| 98.6% |  11.90s |  11,906 | `POOL_thread`                          | `pool.c`            |
| 98.1% |  11.85s |  11,850 | `ZSTDMT_compressionJob`                | `zstdmt_compress.c` |
| 90.1% |  10.88s |  10,886 | `ZSTD_compressContinue_internal`       | `zstd_compress.c`   |
| 90.1% |  10.88s |  10,886 | `ZSTD_compressContinue_public`         | `zstd_compress.c`   |
| 89.4% |  10.79s |  10,799 | `ZSTD_buildSeqStore`                   | `zstd_compress.c`   |
| 84.7% |  10.23s |  10,232 | `ZSTD_compressBlock_opt2`              | `zstd_opt.c`        |
| 65.7% |   7.93s |   7,932 | `ZSTD_btGetAllMatches_noDict_3`        | `zstd_opt.c`        |
|  7.9% | 956.0ms |     956 | `ZSTD_resetCCtx_internal`              | `zstd_compress.c`   |
|  7.9% | 956.0ms |     956 | `ZSTD_compressBegin_internal`          | `zstd_compress.c`   |
|  7.9% | 956.0ms |     956 | `ZSTD_compressBegin_advanced_internal` | `zstd_compress.c`   |
|  2.6% | 314.0ms |     314 | `ZSTD_insertAndFindFirstIndexHash3`    | `zstd_opt.c`        |
|  2.3% | 273.0ms |     273 | `ZSTD_litLengthPrice`                  | `zstd_opt.c`        |
|  1.9% | 225.0ms |     225 | `ZSTD_compressBlock_btultra2`          | `zstd_opt.c`        |
|  1.2% | 141.0ms |     141 | `FIO_compressFilename`                 | `fileio.c`          |
|  1.2% | 141.0ms |     141 | `main`                                 | `zstdcli.c`         |
|  1.1% | 135.0ms |     135 | `FIO_compressFilename_srcFile`         | `fileio.c`          |
|  1.1% | 130.0ms |     130 | `ZSTD_compressStream2`                 | `zstd_compress.c`   |
|  1.0% | 117.0ms |     117 | `ZSTD_rawLiteralsCost`                 | `zstd_opt.c`        |
|  0.8% |  94.0ms |      94 | `ZSTD_optLdm_processMatchCandidate`    | `zstd_opt.c`        |
|  0.5% |  55.0ms |      55 | `AIO_ReadPool_executeReadJob`          | `fileio_asyncio.c`  |

##### Kernel

|    % |    Time | Samples | Function                                    | Location    |
| ---: | ------: | ------: | ------------------------------------------- | ----------- |
| 7.1% | 853.0ms |     853 | `asm_exc_page_fault ([kernel])`             | `<unknown>` |
| 6.7% | 815.0ms |     815 | `exc_page_fault ([kernel])`                 | `<unknown>` |
| 6.2% | 743.0ms |     743 | `do_user_addr_fault ([kernel])`             | `<unknown>` |
| 5.1% | 622.0ms |     622 | `handle_mm_fault ([kernel])`                | `<unknown>` |
| 4.5% | 547.0ms |     547 | `__handle_mm_fault ([kernel])`              | `<unknown>` |
| 3.9% | 468.0ms |     468 | `do_anonymous_page ([kernel])`              | `<unknown>` |
| 2.4% | 291.0ms |     291 | `vma_alloc_folio_noprof ([kernel])`         | `<unknown>` |
| 2.3% | 278.0ms |     278 | `folio_alloc_mpol_noprof ([kernel])`        | `<unknown>` |
| 2.2% | 261.0ms |     261 | `alloc_pages_mpol_noprof ([kernel])`        | `<unknown>` |
| 0.7% |  82.0ms |      82 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>` |
| 0.7% |  81.0ms |      81 | `do_syscall_64 ([kernel])`                  | `<unknown>` |
| 0.5% |  55.0ms |      55 | `vfs_read ([kernel])`                       | `<unknown>` |
| 0.5% |  55.0ms |      55 | `ksys_read ([kernel])`                      | `<unknown>` |
| 0.2% |  28.0ms |      28 | `folio_add_new_anon_rmap ([kernel])`        | `<unknown>` |
| 0.2% |  28.0ms |      28 | `shmem_file_read_iter ([kernel])`           | `<unknown>` |
| 0.2% |  27.0ms |      27 | `__alloc_pages_noprof ([kernel])`           | `<unknown>` |
| 0.2% |  22.0ms |      22 | `lock_vma_under_rcu ([kernel])`             | `<unknown>` |
| 0.2% |  20.0ms |      20 | `copy_page_to_iter ([kernel])`              | `<unknown>` |
| 0.1% |  17.0ms |      17 | `_copy_to_iter ([kernel])`                  | `<unknown>` |
| 0.1% |  16.0ms |      16 | `__mem_cgroup_charge ([kernel])`            | `<unknown>` |

##### Native

|     % |    Time | Samples | Function                                     | Location    |
| ----: | ------: | ------: | -------------------------------------------- | ----------- |
| 99.8% |  12.05s |  12,050 | `unknown (libc.so.6)`                        | `<unknown>` |
|  1.2% | 143.0ms |     143 | `_start (zstd)`                              | `<unknown>` |
|  1.2% | 142.0ms |     142 | `__libc_start_main (libc.so.6)`              | `<unknown>` |
|  0.5% |  55.0ms |      55 | `fread (libc.so.6)`                          | `<unknown>` |
|  0.4% |  54.0ms |      54 | `read (libc.so.6)`                           | `<unknown>` |
|  0.2% |  21.0ms |      21 | `unknown (ld-linux-x86-64.so.2)`             | `<unknown>` |
|  0.1% |  14.0ms |      14 | `_dl_catch_exception (ld-linux-x86-64.so.2)` | `<unknown>` |
| <0.1% |   6.0ms |       6 | `0x7fe83ce32f3b`                             | `<unknown>` |
| <0.1% |   6.0ms |       6 | `malloc (libc.so.6)`                         | `<unknown>` |
| <0.1% |   6.0ms |       6 | `pthread_cond_signal (libc.so.6)`            | `<unknown>` |
| <0.1% |   5.0ms |       5 | `__mmap (libc.so.6)`                         | `<unknown>` |
| <0.1% |   4.0ms |       4 | `pthread_create (libc.so.6)`                 | `<unknown>` |
| <0.1% |   2.0ms |       2 | `0x7fe83ce5fa91`                             | `<unknown>` |
| <0.1% |   1.0ms |       1 | `GLIBC_PRIVATE (libc.so.6)`                  | `<unknown>` |
| <0.1% |   1.0ms |       1 | `__libc_early_init (libc.so.6)`              | `<unknown>` |
| <0.1% |   1.0ms |       1 | `fstatat (libc.so.6)`                        | `<unknown>` |
| <0.1% |   1.0ms |       1 | `__libc_calloc (libc.so.6)`                  | `<unknown>` |
| <0.1% |   1.0ms |       1 | `__mprotect (libc.so.6)`                     | `<unknown>` |
| <0.1% |   1.0ms |       1 | `0x20000`                                    | `<unknown>` |
| <0.1% |   1.0ms |       1 | `_IO_file_doallocate (libc.so.6)`            | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `unknown (libc.so.6)` (`<unknown>`)

|     % |    Time | Samples | Callee                          | Location    |
| ----: | ------: | ------: | ------------------------------- | ----------- |
| 98.9% |  11.91s |  11,912 | `unknown (libc.so.6)`           | `<unknown>` |
| 98.8% |  11.90s |  11,906 | `POOL_thread`                   | `pool.c`    |
|  6.8% | 814.0ms |     814 | `asm_exc_page_fault ([kernel])` | `<unknown>` |
|  1.2% | 141.0ms |     141 | `main`                          | `zstdcli.c` |
|  0.4% |  54.0ms |      54 | `read (libc.so.6)`              | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|     % |   Time | Samples | Callee                          | Location            |
| ----: | -----: | ------: | ------------------------------- | ------------------- |
| 99.5% | 11.85s |  11,850 | `ZSTDMT_compressionJob`         | `zstdmt_compress.c` |
|  0.5% | 55.0ms |      55 | `AIO_ReadPool_executeReadJob`   | `fileio_asyncio.c`  |
| <0.1% |  1.0ms |       1 | `pthread_cond_wait (libc.so.6)` | `<unknown>`         |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|     % |    Time | Samples | Callee                                 | Location            |
| ----: | ------: | ------: | -------------------------------------- | ------------------- |
| 91.9% |  10.88s |  10,886 | `ZSTD_compressContinue_public`         | `zstd_compress.c`   |
|  8.1% | 956.0ms |     956 | `ZSTD_compressBegin_advanced_internal` | `zstd_compress.c`   |
| <0.1% |   4.0ms |       4 | `ZSTD_XXH64_update`                    | `xxhash.h`          |
| <0.1% |   2.0ms |       2 | `ZSTDMT_getBuffer`                     | `zstdmt_compress.c` |
| <0.1% |   2.0ms |       2 | `pthread_cond_signal (libc.so.6)`      | `<unknown>`         |

##### `ZSTD_compressContinue_internal` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                              | Location          |
| ----: | -----: | ------: | ----------------------------------- | ----------------- |
| 99.2% | 10.79s |  10,799 | `ZSTD_buildSeqStore`                | `zstd_compress.c` |
|  0.4% | 44.0ms |      44 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |
|  0.4% | 41.0ms |      41 | `ZSTD_deriveBlockSplitsHelper`      | `zstd_compress.c` |
| <0.1% |  1.0ms |       1 | `ZSTD_XXH64_update`                 | `xxhash.h`        |

##### `ZSTD_compressContinue_public` (`zstd_compress.c`)

|      % |   Time | Samples | Callee                           | Location          |
| -----: | -----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 10.88s |  10,886 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|     % |    Time | Samples | Callee                              | Location     |
| ----: | ------: | ------: | ----------------------------------- | ------------ |
| 92.9% |  10.03s |  10,032 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c` |
|  2.4% | 259.0ms |     259 | `ZSTD_litLengthPrice`               | `zstd_opt.c` |
|  2.1% | 225.0ms |     225 | `ZSTD_compressBlock_btultra2`       | `zstd_opt.c` |
|  1.0% | 113.0ms |     113 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c` |
|  0.9% |  93.0ms |      93 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |    Time | Samples | Callee                              | Location     |
| ----: | ------: | ------: | ----------------------------------- | ------------ |
| 76.8% |   7.86s |   7,860 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c` |
|  3.1% | 314.0ms |     314 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c` |
| <0.1% |   1.0ms |       1 | `ZSTD_rescaleFreqs`                 | `zstd_opt.c` |
| <0.1% |   1.0ms |       1 | `asm_exc_page_fault ([kernel])`     | `<unknown>`  |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|     % |   Time | Samples | Callee                                       | Location     |
| ----: | -----: | ------: | -------------------------------------------- | ------------ |
|  0.2% | 17.0ms |      17 | `ZSTD_insertBt1`                             | `zstd_opt.c` |
| <0.1% |  1.0ms |       1 | `asm_sysvec_apic_timer_interrupt ([kernel])` | `<unknown>`  |

##### `ZSTD_resetCCtx_internal` (`zstd_compress.c`)

|      % |    Time | Samples | Callee                | Location    |
| -----: | ------: | ------: | --------------------- | ----------- |
| 100.0% | 956.0ms |     956 | `unknown (libc.so.6)` | `<unknown>` |

##### `ZSTD_compressBegin_internal` (`zstd_compress.c`)

|      % |    Time | Samples | Callee                    | Location          |
| -----: | ------: | ------: | ------------------------- | ----------------- |
| 100.0% | 956.0ms |     956 | `ZSTD_resetCCtx_internal` | `zstd_compress.c` |

##### `ZSTD_compressBegin_advanced_internal` (`zstd_compress.c`)

|      % |    Time | Samples | Callee                        | Location          |
| -----: | ------: | ------: | ----------------------------- | ----------------- |
| 100.0% | 956.0ms |     956 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |

##### `asm_exc_page_fault ([kernel])` (`<unknown>`)

|     % |    Time | Samples | Callee                      | Location    |
| ----: | ------: | ------: | --------------------------- | ----------- |
| 95.5% | 815.0ms |     815 | `exc_page_fault ([kernel])` | `<unknown>` |

##### `exc_page_fault ([kernel])` (`<unknown>`)

|     % |    Time | Samples | Callee                          | Location    |
| ----: | ------: | ------: | ------------------------------- | ----------- |
| 91.2% | 743.0ms |     743 | `do_user_addr_fault ([kernel])` | `<unknown>` |

##### `do_user_addr_fault ([kernel])` (`<unknown>`)

|     % |    Time | Samples | Callee                            | Location    |
| ----: | ------: | ------: | --------------------------------- | ----------- |
| 83.7% | 622.0ms |     622 | `handle_mm_fault ([kernel])`      | `<unknown>` |
|  3.0% |  22.0ms |      22 | `lock_vma_under_rcu ([kernel])`   | `<unknown>` |
|  0.3% |   2.0ms |       2 | `lock_mm_and_find_vma ([kernel])` | `<unknown>` |
|  0.1% |   1.0ms |       1 | `__up_read ([kernel])`            | `<unknown>` |

##### `handle_mm_fault ([kernel])` (`<unknown>`)

|     % |    Time | Samples | Callee                                         | Location    |
| ----: | ------: | ------: | ---------------------------------------------- | ----------- |
| 87.9% | 547.0ms |     547 | `__handle_mm_fault ([kernel])`                 | `<unknown>` |
|  2.1% |  13.0ms |      13 | `count_memcg_events_mm.constprop.0 ([kernel])` | `<unknown>` |

##### `__handle_mm_fault ([kernel])` (`<unknown>`)

|     % |    Time | Samples | Callee                             | Location    |
| ----: | ------: | ------: | ---------------------------------- | ----------- |
| 85.6% | 468.0ms |     468 | `do_anonymous_page ([kernel])`     | `<unknown>` |
|  1.3% |   7.0ms |       7 | `do_fault ([kernel])`              | `<unknown>` |
|  0.2% |   1.0ms |       1 | `pte_offset_map_nolock ([kernel])` | `<unknown>` |

##### `do_anonymous_page ([kernel])` (`<unknown>`)

|     % |    Time | Samples | Callee                               | Location    |
| ----: | ------: | ------: | ------------------------------------ | ----------- |
| 62.2% | 291.0ms |     291 | `vma_alloc_folio_noprof ([kernel])`  | `<unknown>` |
|  6.0% |  28.0ms |      28 | `folio_add_new_anon_rmap ([kernel])` | `<unknown>` |
|  3.4% |  16.0ms |      16 | `__mem_cgroup_charge ([kernel])`     | `<unknown>` |
|  0.4% |   2.0ms |       2 | `__pte_alloc ([kernel])`             | `<unknown>` |
|  0.2% |   1.0ms |       1 | `__pte_offset_map_lock ([kernel])`   | `<unknown>` |

##### `vma_alloc_folio_noprof ([kernel])` (`<unknown>`)

|     % |    Time | Samples | Callee                               | Location    |
| ----: | ------: | ------: | ------------------------------------ | ----------- |
| 95.5% | 278.0ms |     278 | `folio_alloc_mpol_noprof ([kernel])` | `<unknown>` |

##### `folio_alloc_mpol_noprof ([kernel])` (`<unknown>`)

|     % |    Time | Samples | Callee                               | Location    |
| ----: | ------: | ------: | ------------------------------------ | ----------- |
| 93.2% | 259.0ms |     259 | `alloc_pages_mpol_noprof ([kernel])` | `<unknown>` |

##### `alloc_pages_mpol_noprof ([kernel])` (`<unknown>`)

|     % |   Time | Samples | Callee                            | Location    |
| ----: | -----: | ------: | --------------------------------- | ----------- |
| 10.3% | 27.0ms |      27 | `__alloc_pages_noprof ([kernel])` | `<unknown>` |

##### `ZSTD_compressBlock_btultra2` (`zstd_opt.c`)

|     % |    Time | Samples | Callee                          | Location     |
| ----: | ------: | ------: | ------------------------------- | ------------ |
| 88.9% | 200.0ms |     200 | `ZSTD_compressBlock_opt2`       | `zstd_opt.c` |
|  6.2% |  14.0ms |      14 | `ZSTD_litLengthPrice`           | `zstd_opt.c` |
|  2.2% |   5.0ms |       5 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |
|  1.8% |   4.0ms |       4 | `ZSTD_rawLiteralsCost`          | `zstd_opt.c` |
|  0.4% |   1.0ms |       1 | `ZSTD_updateStats`              | `zstd_opt.c` |

##### `_start (zstd)` (`<unknown>`)

|     % |    Time | Samples | Callee                          | Location    |
| ----: | ------: | ------: | ------------------------------- | ----------- |
| 99.3% | 142.0ms |     142 | `__libc_start_main (libc.so.6)` | `<unknown>` |
|  0.7% |   1.0ms |       1 | `asm_exc_page_fault ([kernel])` | `<unknown>` |

##### `__libc_start_main (libc.so.6)` (`<unknown>`)

|      % |    Time | Samples | Callee                | Location    |
| -----: | ------: | ------: | --------------------- | ----------- |
| 100.0% | 142.0ms |     142 | `unknown (libc.so.6)` | `<unknown>` |

##### `FIO_compressFilename` (`fileio.c`)

|     % |    Time | Samples | Callee                         | Location   |
| ----: | ------: | ------: | ------------------------------ | ---------- |
| 95.7% | 135.0ms |     135 | `FIO_compressFilename_srcFile` | `fileio.c` |
|  4.3% |   6.0ms |       6 | `FIO_createCResources`         | `fileio.c` |

##### `main` (`zstdcli.c`)

|      % |    Time | Samples | Callee                 | Location   |
| -----: | ------: | ------: | ---------------------- | ---------- |
| 100.0% | 141.0ms |     141 | `FIO_compressFilename` | `fileio.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|     % |    Time | Samples | Callee                    | Location           |
| ----: | ------: | ------: | ------------------------- | ------------------ |
| 96.3% | 130.0ms |     130 | `ZSTD_compressStream2`    | `zstd_compress.c`  |
|  3.0% |   4.0ms |       4 | `AIO_ReadPool_fillBuffer` | `fileio_asyncio.c` |
|  0.7% |   1.0ms |       1 | `FIO_openDstFile`         | `fileio.c`         |

##### `ZSTD_compressStream2` (`zstd_compress.c`)

|     % |    Time | Samples | Callee                           | Location          |
| ----: | ------: | ------: | -------------------------------- | ----------------- |
| 98.5% | 128.0ms |     128 | `unknown (libc.so.6)`            | `<unknown>`       |
|  1.5% |   2.0ms |       2 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c` |

##### `entry_SYSCALL_64_after_hwframe ([kernel])` (`<unknown>`)

|     % |   Time | Samples | Callee                     | Location    |
| ----: | -----: | ------: | -------------------------- | ----------- |
| 98.8% | 81.0ms |      81 | `do_syscall_64 ([kernel])` | `<unknown>` |

##### `do_syscall_64 ([kernel])` (`<unknown>`)

|     % |   Time | Samples | Callee                        | Location    |
| ----: | -----: | ------: | ----------------------------- | ----------- |
| 67.9% | 55.0ms |      55 | `ksys_read ([kernel])`        | `<unknown>` |
|  7.4% |  6.0ms |       6 | `__x64_sys_execve ([kernel])` | `<unknown>` |
|  7.4% |  6.0ms |       6 | `__x64_sys_futex ([kernel])`  | `<unknown>` |
|  4.9% |  4.0ms |       4 | `__x64_sys_openat ([kernel])` | `<unknown>` |
|  4.9% |  4.0ms |       4 | `vm_mmap_pgoff ([kernel])`    | `<unknown>` |

##### `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`)

|      % |   Time | Samples | Callee              | Location    |
| -----: | -----: | ------: | ------------------- | ----------- |
| 100.0% | 55.0ms |      55 | `fread (libc.so.6)` | `<unknown>` |

##### `vfs_read ([kernel])` (`<unknown>`)

|     % |   Time | Samples | Callee                            | Location    |
| ----: | -----: | ------: | --------------------------------- | ----------- |
| 50.9% | 28.0ms |      28 | `shmem_file_read_iter ([kernel])` | `<unknown>` |
|  3.6% |  2.0ms |       2 | `pipe_read ([kernel])`            | `<unknown>` |

##### `ksys_read ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Callee                | Location    |
| -----: | -----: | ------: | --------------------- | ----------- |
| 100.0% | 55.0ms |      55 | `vfs_read ([kernel])` | `<unknown>` |

##### `fread (libc.so.6)` (`<unknown>`)

|      % |   Time | Samples | Callee                | Location    |
| -----: | -----: | ------: | --------------------- | ----------- |
| 100.0% | 55.0ms |      55 | `unknown (libc.so.6)` | `<unknown>` |

##### `read (libc.so.6)` (`<unknown>`)

|     % |   Time | Samples | Callee                                       | Location    |
| ----: | -----: | ------: | -------------------------------------------- | ----------- |
| 98.1% | 53.0ms |      53 | `entry_SYSCALL_64_after_hwframe ([kernel])`  | `<unknown>` |
|  1.9% |  1.0ms |       1 | `asm_sysvec_apic_timer_interrupt ([kernel])` | `<unknown>` |

##### `folio_add_new_anon_rmap ([kernel])` (`<unknown>`)

|     % |  Time | Samples | Callee                        | Location    |
| ----: | ----: | ------: | ----------------------------- | ----------- |
| 10.7% | 3.0ms |       3 | `__folio_mod_stat ([kernel])` | `<unknown>` |

##### `shmem_file_read_iter ([kernel])` (`<unknown>`)

|     % |   Time | Samples | Callee                           | Location    |
| ----: | -----: | ------: | -------------------------------- | ----------- |
| 71.4% | 20.0ms |      20 | `copy_page_to_iter ([kernel])`   | `<unknown>` |
| 14.3% |  4.0ms |       4 | `shmem_get_folio_gfp ([kernel])` | `<unknown>` |

##### `__alloc_pages_noprof ([kernel])` (`<unknown>`)

|    % |  Time | Samples | Callee                              | Location    |
| ---: | ----: | ------: | ----------------------------------- | ----------- |
| 3.7% | 1.0ms |       1 | `get_page_from_freelist ([kernel])` | `<unknown>` |

##### `lock_vma_under_rcu ([kernel])` (`<unknown>`)

|     % |  Time | Samples | Callee                                       | Location    |
| ----: | ----: | ------: | -------------------------------------------- | ----------- |
| 22.7% | 5.0ms |       5 | `mas_walk ([kernel])`                        | `<unknown>` |
|  4.5% | 1.0ms |       1 | `asm_sysvec_apic_timer_interrupt ([kernel])` | `<unknown>` |

##### `unknown (ld-linux-x86-64.so.2)` (`<unknown>`)

|      % |   Time | Samples | Callee                                       | Location    |
| -----: | -----: | ------: | -------------------------------------------- | ----------- |
| 100.0% | 21.0ms |      21 | `unknown (ld-linux-x86-64.so.2)`             | `<unknown>` |
|  66.7% | 14.0ms |      14 | `_dl_catch_exception (ld-linux-x86-64.so.2)` | `<unknown>` |
|  42.9% |  9.0ms |       9 | `asm_exc_page_fault ([kernel])`              | `<unknown>` |
|  33.3% |  7.0ms |       7 | `entry_SYSCALL_64_after_hwframe ([kernel])`  | `<unknown>` |
|   4.8% |  1.0ms |       1 | `asm_sysvec_apic_timer_interrupt ([kernel])` | `<unknown>` |

##### `copy_page_to_iter ([kernel])` (`<unknown>`)

|     % |   Time | Samples | Callee                     | Location    |
| ----: | -----: | ------: | -------------------------- | ----------- |
| 85.0% | 17.0ms |      17 | `_copy_to_iter ([kernel])` | `<unknown>` |

##### `_copy_to_iter ([kernel])` (`<unknown>`)

|     % |   Time | Samples | Callee                          | Location    |
| ----: | -----: | ------: | ------------------------------- | ----------- |
| 82.4% | 14.0ms |      14 | `asm_exc_page_fault ([kernel])` | `<unknown>` |

##### `_dl_catch_exception (ld-linux-x86-64.so.2)` (`<unknown>`)

|      % |   Time | Samples | Callee                           | Location    |
| -----: | -----: | ------: | -------------------------------- | ----------- |
| 100.0% | 14.0ms |      14 | `unknown (ld-linux-x86-64.so.2)` | `<unknown>` |

##### `0x7fe83ce32f3b` (`<unknown>`)

|      % |  Time | Samples | Callee                                      | Location    |
| -----: | ----: | ------: | ------------------------------------------- | ----------- |
| 100.0% | 6.0ms |       6 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>` |

##### `malloc (libc.so.6)` (`<unknown>`)

|      % |  Time | Samples | Callee                | Location    |
| -----: | ----: | ------: | --------------------- | ----------- |
| 100.0% | 6.0ms |       6 | `unknown (libc.so.6)` | `<unknown>` |

##### `pthread_cond_signal (libc.so.6)` (`<unknown>`)

|     % |  Time | Samples | Callee                                      | Location    |
| ----: | ----: | ------: | ------------------------------------------- | ----------- |
| 83.3% | 5.0ms |       5 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>` |

##### `__mmap (libc.so.6)` (`<unknown>`)

|      % |  Time | Samples | Callee                                      | Location    |
| -----: | ----: | ------: | ------------------------------------------- | ----------- |
| 100.0% | 5.0ms |       5 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>` |

##### `pthread_create (libc.so.6)` (`<unknown>`)

|     % |  Time | Samples | Callee                                      | Location    |
| ----: | ----: | ------: | ------------------------------------------- | ----------- |
| 50.0% | 2.0ms |       2 | `unknown (libc.so.6)`                       | `<unknown>` |
| 25.0% | 1.0ms |       1 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>` |
| 25.0% | 1.0ms |       1 | `__mmap (libc.so.6)`                        | `<unknown>` |

##### `0x7fe83ce5fa91` (`<unknown>`)

|      % |  Time | Samples | Callee                                      | Location    |
| -----: | ----: | ------: | ------------------------------------------- | ----------- |
| 100.0% | 2.0ms |       2 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>` |

##### `GLIBC_PRIVATE (libc.so.6)` (`<unknown>`)

|      % |  Time | Samples | Callee                          | Location    |
| -----: | ----: | ------: | ------------------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `asm_exc_page_fault ([kernel])` | `<unknown>` |

##### `__libc_early_init (libc.so.6)` (`<unknown>`)

|      % |  Time | Samples | Callee                      | Location    |
| -----: | ----: | ------: | --------------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `GLIBC_PRIVATE (libc.so.6)` | `<unknown>` |

##### `__libc_calloc (libc.so.6)` (`<unknown>`)

|      % |  Time | Samples | Callee                | Location    |
| -----: | ----: | ------: | --------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `unknown (libc.so.6)` | `<unknown>` |

##### `__mprotect (libc.so.6)` (`<unknown>`)

|      % |  Time | Samples | Callee                                      | Location    |
| -----: | ----: | ------: | ------------------------------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>` |

##### `0x20000` (`<unknown>`)

|      % |  Time | Samples | Callee                       | Location    |
| -----: | ----: | ------: | ---------------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `pthread_create (libc.so.6)` | `<unknown>` |

##### `_IO_file_doallocate (libc.so.6)` (`<unknown>`)

|      % |  Time | Samples | Callee               | Location    |
| -----: | ----: | ------: | -------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `malloc (libc.so.6)` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 63.9% |   7.71s |   7,716 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                             |
| 16.5% |   1.99s |   1,998 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                               |
|  2.5% | 299.0ms |     299 | `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                         |
|  2.1% | 259.0ms |     259 | `ZSTD_litLengthPrice` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                   |
|  1.9% | 233.0ms |     233 | `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                        |
|  1.6% | 198.0ms |     198 | `alloc_pages_mpol_noprof ([kernel])` ← `folio_alloc_mpol_noprof ([kernel])` ← `vma_alloc_folio_noprof ([kernel])` ← `do_anonymous_page ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` |
|  1.0% | 126.0ms |     126 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                             |
|  1.0% | 117.0ms |     117 | `do_anonymous_page ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                     |
|  0.9% | 113.0ms |     113 | `ZSTD_rawLiteralsCost` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                  |
|  0.8% |  93.0ms |      93 | `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                     |
|  0.7% |  82.0ms |      82 | `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                      |
|  0.6% |  67.0ms |      67 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                         |
|  0.5% |  64.0ms |      64 | `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                        |
|  0.5% |  64.0ms |      64 | `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                      |
|  0.5% |  58.0ms |      58 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                               |
|  0.4% |  48.0ms |      48 | `handle_mm_fault ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                       |
|  0.3% |  40.0ms |      40 | `unknown (libc.so.6)` ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                                                                                                                                                                                                                                                                                                                                                     |
|  0.2% |  30.0ms |      30 | `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                      |
|  0.2% |  25.0ms |      25 | `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `read (libc.so.6)` ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                     |
|  0.2% |  24.0ms |      24 | `alloc_pages_mpol_noprof ([kernel])` ← `folio_alloc_mpol_noprof ([kernel])` ← `vma_alloc_folio_noprof ([kernel])` ← `do_anonymous_page ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                              |

# Uninterruptible sleep profile

Slept 71 times.

| Category |      % | Sleeps |
| -------- | -----: | -----: |
| Kernel   | 100.0% |     71 |

## Hottest functions

### Self sleeps

Functions ranked by uninterruptible sleeps entered directly in the function body, excluding callees.

#### Categories

##### Kernel

|      % | Sleeps | Function                    | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |     71 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self sleeps. Inlining can make caller attribution imprecise.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |     71 | `__schedule ([kernel])` | `<unknown>` |

### Total sleeps

Functions ranked by total uninterruptible sleeps entered in the function and all its callees.

|      % | Sleeps | Function                                       | Location    |
| -----: | -----: | ---------------------------------------------- | ----------- |
| 100.0% |     71 | `bpf_trace_run4 ([kernel])`                    | `<unknown>` |
| 100.0% |     71 | `__schedule ([kernel])`                        | `<unknown>` |
| 100.0% |     71 | `schedule ([kernel])`                          | `<unknown>` |
|  87.3% |     62 | `do_syscall_64 ([kernel])`                     | `<unknown>` |
|  87.3% |     62 | `entry_SYSCALL_64_after_hwframe ([kernel])`    | `<unknown>` |
|  78.9% |     56 | `p9_client_rpc ([kernel])`                     | `<unknown>` |
|  71.8% |     51 | `unknown (ld-linux-x86-64.so.2)`               | `<unknown>` |
|  67.6% |     48 | `_dl_catch_exception (ld-linux-x86-64.so.2)`   | `<unknown>` |
|  59.2% |     42 | `path_openat ([kernel])`                       | `<unknown>` |
|  59.2% |     42 | `do_filp_open ([kernel])`                      | `<unknown>` |
|  42.3% |     30 | `do_sys_openat2 ([kernel])`                    | `<unknown>` |
|  42.3% |     30 | `__x64_sys_openat ([kernel])`                  | `<unknown>` |
|  25.4% |     18 | `v9fs_vfs_lookup ([kernel])`                   | `<unknown>` |
|  25.4% |     18 | `link_path_walk.part.0.constprop.0 ([kernel])` | `<unknown>` |
|  22.5% |     16 | `p9_client_read_once ([kernel])`               | `<unknown>` |
|  22.5% |     16 | `p9_client_read ([kernel])`                    | `<unknown>` |
|  22.5% |     16 | `v9fs_issue_read ([kernel])`                   | `<unknown>` |
|  21.1% |     15 | `walk_component ([kernel])`                    | `<unknown>` |
|  19.7% |     14 | `p9_client_walk ([kernel])`                    | `<unknown>` |
|  19.7% |     14 | `load_elf_binary ([kernel])`                   | `<unknown>` |

#### Categories

##### Kernel

|      % | Sleeps | Function                                       | Location    |
| -----: | -----: | ---------------------------------------------- | ----------- |
| 100.0% |     71 | `bpf_trace_run4 ([kernel])`                    | `<unknown>` |
| 100.0% |     71 | `__schedule ([kernel])`                        | `<unknown>` |
| 100.0% |     71 | `schedule ([kernel])`                          | `<unknown>` |
|  87.3% |     62 | `do_syscall_64 ([kernel])`                     | `<unknown>` |
|  87.3% |     62 | `entry_SYSCALL_64_after_hwframe ([kernel])`    | `<unknown>` |
|  78.9% |     56 | `p9_client_rpc ([kernel])`                     | `<unknown>` |
|  59.2% |     42 | `path_openat ([kernel])`                       | `<unknown>` |
|  59.2% |     42 | `do_filp_open ([kernel])`                      | `<unknown>` |
|  42.3% |     30 | `do_sys_openat2 ([kernel])`                    | `<unknown>` |
|  42.3% |     30 | `__x64_sys_openat ([kernel])`                  | `<unknown>` |
|  25.4% |     18 | `v9fs_vfs_lookup ([kernel])`                   | `<unknown>` |
|  25.4% |     18 | `link_path_walk.part.0.constprop.0 ([kernel])` | `<unknown>` |
|  22.5% |     16 | `p9_client_read_once ([kernel])`               | `<unknown>` |
|  22.5% |     16 | `p9_client_read ([kernel])`                    | `<unknown>` |
|  22.5% |     16 | `v9fs_issue_read ([kernel])`                   | `<unknown>` |
|  21.1% |     15 | `walk_component ([kernel])`                    | `<unknown>` |
|  19.7% |     14 | `p9_client_walk ([kernel])`                    | `<unknown>` |
|  19.7% |     14 | `load_elf_binary ([kernel])`                   | `<unknown>` |
|  19.7% |     14 | `bprm_execve ([kernel])`                       | `<unknown>` |
|  19.7% |     14 | `do_execveat_common ([kernel])`                | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total sleeps. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                      | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |     71 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |     71 | `__schedule ([kernel])` | `<unknown>` |

##### `do_syscall_64 ([kernel])` (`<unknown>`)

|     % | Sleeps | Callee                         | Location    |
| ----: | -----: | ------------------------------ | ----------- |
| 48.4% |     30 | `__x64_sys_openat ([kernel])`  | `<unknown>` |
| 22.6% |     14 | `__x64_sys_execve ([kernel])`  | `<unknown>` |
|  9.7% |      6 | `ksys_read ([kernel])`         | `<unknown>` |
|  6.5% |      4 | `__do_sys_newfstat ([kernel])` | `<unknown>` |
|  3.2% |      2 | `__x64_sys_pread64 ([kernel])` | `<unknown>` |

##### `entry_SYSCALL_64_after_hwframe ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |     62 | `do_syscall_64 ([kernel])` | `<unknown>` |

##### `p9_client_rpc ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |     56 | `schedule ([kernel])` | `<unknown>` |

##### `unknown (ld-linux-x86-64.so.2)` (`<unknown>`)

|      % | Sleeps | Callee                                       | Location    |
| -----: | -----: | -------------------------------------------- | ----------- |
| 100.0% |     51 | `unknown (ld-linux-x86-64.so.2)`             | `<unknown>` |
|  94.1% |     48 | `_dl_catch_exception (ld-linux-x86-64.so.2)` | `<unknown>` |
|  82.4% |     42 | `entry_SYSCALL_64_after_hwframe ([kernel])`  | `<unknown>` |
|  17.6% |      9 | `asm_exc_page_fault ([kernel])`              | `<unknown>` |

##### `_dl_catch_exception (ld-linux-x86-64.so.2)` (`<unknown>`)

|      % | Sleeps | Callee                           | Location    |
| -----: | -----: | -------------------------------- | ----------- |
| 100.0% |     48 | `unknown (ld-linux-x86-64.so.2)` | `<unknown>` |

##### `path_openat ([kernel])` (`<unknown>`)

|     % | Sleeps | Callee                                         | Location    |
| ----: | -----: | ---------------------------------------------- | ----------- |
| 42.9% |     18 | `link_path_walk.part.0.constprop.0 ([kernel])` | `<unknown>` |
| 23.8% |     10 | `vfs_open ([kernel])`                          | `<unknown>` |
| 16.7% |      7 | `lookup_open.isra.0 ([kernel])`                | `<unknown>` |
|  9.5% |      4 | `dput.part.0 ([kernel])`                       | `<unknown>` |
|  7.1% |      3 | `step_into ([kernel])`                         | `<unknown>` |

##### `do_filp_open ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                   | Location    |
| -----: | -----: | ------------------------ | ----------- |
| 100.0% |     42 | `path_openat ([kernel])` | `<unknown>` |

##### `do_sys_openat2 ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |     30 | `do_filp_open ([kernel])` | `<unknown>` |

##### `__x64_sys_openat ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                      | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |     30 | `do_sys_openat2 ([kernel])` | `<unknown>` |

##### `v9fs_vfs_lookup ([kernel])` (`<unknown>`)

|     % | Sleeps | Callee                                | Location    |
| ----: | -----: | ------------------------------------- | ----------- |
| 50.0% |      9 | `p9_client_walk ([kernel])`           | `<unknown>` |
| 50.0% |      9 | `v9fs_inode_from_fid_dotl ([kernel])` | `<unknown>` |

##### `link_path_walk.part.0.constprop.0 ([kernel])` (`<unknown>`)

|     % | Sleeps | Callee                      | Location    |
| ----: | -----: | --------------------------- | ----------- |
| 77.8% |     14 | `walk_component ([kernel])` | `<unknown>` |
| 22.2% |      4 | `step_into ([kernel])`      | `<unknown>` |

##### `p9_client_read_once ([kernel])` (`<unknown>`)

|     % | Sleeps | Callee                                    | Location    |
| ----: | -----: | ----------------------------------------- | ----------- |
| 56.3% |      9 | `p9_client_zc_rpc.constprop.0 ([kernel])` | `<unknown>` |
| 43.8% |      7 | `p9_client_rpc ([kernel])`                | `<unknown>` |

##### `p9_client_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                           | Location    |
| -----: | -----: | -------------------------------- | ----------- |
| 100.0% |     16 | `p9_client_read_once ([kernel])` | `<unknown>` |

##### `v9fs_issue_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                      | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |     16 | `p9_client_read ([kernel])` | `<unknown>` |

##### `walk_component ([kernel])` (`<unknown>`)

|     % | Sleeps | Callee                     | Location    |
| ----: | -----: | -------------------------- | ----------- |
| 73.3% |     11 | `__lookup_slow ([kernel])` | `<unknown>` |
| 26.7% |      4 | `dput.part.0 ([kernel])`   | `<unknown>` |

##### `p9_client_walk ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |     14 | `p9_client_rpc ([kernel])` | `<unknown>` |

##### `load_elf_binary ([kernel])` (`<unknown>`)

|     % | Sleeps | Callee                      | Location    |
| ----: | -----: | --------------------------- | ----------- |
| 85.7% |     12 | `open_exec ([kernel])`      | `<unknown>` |
|  7.1% |      1 | `__kernel_read ([kernel])`  | `<unknown>` |
|  7.1% |      1 | `load_elf_phdrs ([kernel])` | `<unknown>` |

##### `bprm_execve ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                       | Location    |
| -----: | -----: | ---------------------------- | ----------- |
| 100.0% |     14 | `load_elf_binary ([kernel])` | `<unknown>` |

##### `do_execveat_common ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                   | Location    |
| -----: | -----: | ------------------------ | ----------- |
| 100.0% |     14 | `bprm_execve ([kernel])` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by uninterruptible sleeps entered in their leaf frame.

|     % | Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | -----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 12.7% |      9 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_virtio_zc_request ([kernel])` ← `p9_client_zc_rpc.constprop.0 ([kernel])` ← `p9_client_read_once ([kernel])` ← `p9_client_read ([kernel])` ← `v9fs_issue_read ([kernel])` ← `netfs_read_to_pagecache ([kernel])` ← `netfs_read_folio ([kernel])` ← `filemap_read_folio ([kernel])` ← `filemap_fault ([kernel])` ← `__do_fault ([kernel])` ← `do_fault ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` |
|  4.2% |      3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_walk ([kernel])` ← `v9fs_vfs_lookup ([kernel])` ← `__lookup_slow ([kernel])` ← `walk_component ([kernel])` ← `link_path_walk.part.0.constprop.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                                  |
|  4.2% |      3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_getattr_dotl ([kernel])` ← `v9fs_inode_from_fid_dotl ([kernel])` ← `v9fs_vfs_lookup ([kernel])` ← `__lookup_slow ([kernel])` ← `walk_component ([kernel])` ← `link_path_walk.part.0.constprop.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                  |
|  4.2% |      3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_readlink ([kernel])` ← `v9fs_vfs_get_link_dotl ([kernel])` ← `step_into ([kernel])` ← `link_path_walk.part.0.constprop.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                                                         |
|  4.2% |      3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_clunk ([kernel])` ← `v9fs_dentry_release ([kernel])` ← `__dentry_kill ([kernel])` ← `dput.part.0 ([kernel])` ← `walk_component ([kernel])` ← `link_path_walk.part.0.constprop.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                  |
|  4.2% |      3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_walk ([kernel])` ← `v9fs_file_open ([kernel])` ← `do_dentry_open ([kernel])` ← `vfs_open ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                                                                                         |
|  4.2% |      3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_open ([kernel])` ← `v9fs_file_open ([kernel])` ← `do_dentry_open ([kernel])` ← `vfs_open ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                                                                                         |
|  4.2% |      3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_read_once ([kernel])` ← `p9_client_read ([kernel])` ← `v9fs_issue_read ([kernel])` ← `netfs_unbuffered_read_iter_locked ([kernel])` ← `netfs_unbuffered_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                                                                                                                       |
|  4.2% |      3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_getattr_dotl ([kernel])` ← `v9fs_vfs_getattr_dotl ([kernel])` ← `vfs_fstat ([kernel])` ← `__do_sys_newfstat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                                                                                                                                                                                                                              |
|  4.2% |      3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `schedule_preempt_disabled ([kernel])` ← `rwsem_down_read_slowpath ([kernel])` ← `down_read_killable ([kernel])` ← `lock_mm_and_find_vma ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `_copy_to_iter ([kernel])` ← `copy_page_to_iter ([kernel])` ← `shmem_file_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `read (libc.so.6)` ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                        |
|  2.8% |      2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_walk ([kernel])` ← `v9fs_vfs_lookup ([kernel])` ← `v9fs_vfs_atomic_open_dotl ([kernel])` ← `lookup_open.isra.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                                                                   |
|  2.8% |      2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_getattr_dotl ([kernel])` ← `v9fs_inode_from_fid_dotl ([kernel])` ← `v9fs_vfs_lookup ([kernel])` ← `v9fs_vfs_atomic_open_dotl ([kernel])` ← `lookup_open.isra.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                   |
|  2.8% |      2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_readlink ([kernel])` ← `v9fs_vfs_get_link_dotl ([kernel])` ← `step_into ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                                                                                                          |
|  2.8% |      2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_clunk ([kernel])` ← `v9fs_dentry_release ([kernel])` ← `__dentry_kill ([kernel])` ← `dput.part.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                                                                                 |
|  2.8% |      2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_walk ([kernel])` ← `v9fs_vfs_lookup ([kernel])` ← `__lookup_slow ([kernel])` ← `walk_component ([kernel])` ← `link_path_walk.part.0.constprop.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_open_execat ([kernel])` ← `open_exec ([kernel])` ← `load_elf_binary ([kernel])` ← `bprm_execve ([kernel])` ← `do_execveat_common ([kernel])` ← `__x64_sys_execve ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `0x7fe83ce32f3b`                                                                                                                                                                                                                                                                                                                                    |
|  2.8% |      2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_getattr_dotl ([kernel])` ← `v9fs_inode_from_fid_dotl ([kernel])` ← `v9fs_vfs_lookup ([kernel])` ← `__lookup_slow ([kernel])` ← `walk_component ([kernel])` ← `link_path_walk.part.0.constprop.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_open_execat ([kernel])` ← `open_exec ([kernel])` ← `load_elf_binary ([kernel])` ← `bprm_execve ([kernel])` ← `do_execveat_common ([kernel])` ← `__x64_sys_execve ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `0x7fe83ce32f3b`                                                                                                                                                                                                                                                                                    |
|  2.8% |      2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_clunk ([kernel])` ← `v9fs_dentry_release ([kernel])` ← `__dentry_kill ([kernel])` ← `dput.part.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_open_execat ([kernel])` ← `open_exec ([kernel])` ← `load_elf_binary ([kernel])` ← `bprm_execve ([kernel])` ← `do_execveat_common ([kernel])` ← `__x64_sys_execve ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `0x7fe83ce32f3b`                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.8% |      2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_read_once ([kernel])` ← `p9_client_read ([kernel])` ← `v9fs_issue_read ([kernel])` ← `netfs_unbuffered_read_iter_locked ([kernel])` ← `netfs_unbuffered_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `__x64_sys_pread64 ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                                                                                                               |
|  2.8% |      2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `schedule_preempt_disabled ([kernel])` ← `rwsem_down_write_slowpath ([kernel])` ← `down_write_killable ([kernel])` ← `do_mprotect_pkey ([kernel])` ← `__x64_sys_mprotect ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `__mprotect (libc.so.6)` ← `POOL_create_advanced` (`pool.c`) ← `ZSTDMT_createCCtx_advanced` (`zstdmt_compress.c`) ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                                                                                                                                                                                                                                  |
|  1.4% |      1 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_getattr_dotl ([kernel])` ← `v9fs_vfs_getattr_dotl ([kernel])` ← `vfs_fstat ([kernel])` ← `__do_sys_newfstat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                                                                                                                                                                                           |

# Interruptible sleep profile

Slept 87 times.

| Category |      % | Sleeps |
| -------- | -----: | -----: |
| Kernel   | 100.0% |     87 |

## Hottest functions

### Self sleeps

Functions ranked by interruptible sleeps entered directly in the function body, excluding callees.

#### Categories

##### Kernel

|      % | Sleeps | Function                    | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |     87 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self sleeps. Inlining can make caller attribution imprecise.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |     87 | `__schedule ([kernel])` | `<unknown>` |

### Total sleeps

Functions ranked by total interruptible sleeps entered in the function and all its callees.

|      % | Sleeps | Function                                    | Location            |
| -----: | -----: | ------------------------------------------- | ------------------- |
| 100.0% |     87 | `bpf_trace_run4 ([kernel])`                 | `<unknown>`         |
| 100.0% |     87 | `__schedule ([kernel])`                     | `<unknown>`         |
| 100.0% |     87 | `schedule ([kernel])`                       | `<unknown>`         |
| 100.0% |     87 | `futex_wait_queue ([kernel])`               | `<unknown>`         |
| 100.0% |     87 | `__futex_wait ([kernel])`                   | `<unknown>`         |
| 100.0% |     87 | `futex_wait ([kernel])`                     | `<unknown>`         |
| 100.0% |     87 | `do_futex ([kernel])`                       | `<unknown>`         |
| 100.0% |     87 | `__x64_sys_futex ([kernel])`                | `<unknown>`         |
| 100.0% |     87 | `do_syscall_64 ([kernel])`                  | `<unknown>`         |
| 100.0% |     87 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>`         |
| 100.0% |     87 | `unknown (libc.so.6)`                       | `<unknown>`         |
| 100.0% |     87 | `pthread_cond_wait (libc.so.6)`             | `<unknown>`         |
|  89.7% |     78 | `POOL_thread`                               | `pool.c`            |
|  10.3% |      9 | `FIO_compressFilename_srcFile`              | `fileio.c`          |
|  10.3% |      9 | `FIO_compressFilename`                      | `fileio.c`          |
|  10.3% |      9 | `main`                                      | `zstdcli.c`         |
|  10.3% |      9 | `__libc_start_main (libc.so.6)`             | `<unknown>`         |
|  10.3% |      9 | `_start (zstd)`                             | `<unknown>`         |
|   8.0% |      7 | `ZSTDMT_compressStream_generic`             | `zstdmt_compress.c` |
|   8.0% |      7 | `ZSTD_compressStream2`                      | `zstd_compress.c`   |

#### Categories

##### Kernel

|      % | Sleeps | Function                                    | Location    |
| -----: | -----: | ------------------------------------------- | ----------- |
| 100.0% |     87 | `bpf_trace_run4 ([kernel])`                 | `<unknown>` |
| 100.0% |     87 | `__schedule ([kernel])`                     | `<unknown>` |
| 100.0% |     87 | `schedule ([kernel])`                       | `<unknown>` |
| 100.0% |     87 | `futex_wait_queue ([kernel])`               | `<unknown>` |
| 100.0% |     87 | `__futex_wait ([kernel])`                   | `<unknown>` |
| 100.0% |     87 | `futex_wait ([kernel])`                     | `<unknown>` |
| 100.0% |     87 | `do_futex ([kernel])`                       | `<unknown>` |
| 100.0% |     87 | `__x64_sys_futex ([kernel])`                | `<unknown>` |
| 100.0% |     87 | `do_syscall_64 ([kernel])`                  | `<unknown>` |
| 100.0% |     87 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total sleeps. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                      | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |     87 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |     87 | `__schedule ([kernel])` | `<unknown>` |

##### `futex_wait_queue ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |     87 | `schedule ([kernel])` | `<unknown>` |

##### `__futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                        | Location    |
| -----: | -----: | ----------------------------- | ----------- |
| 100.0% |     87 | `futex_wait_queue ([kernel])` | `<unknown>` |

##### `futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |     87 | `__futex_wait ([kernel])` | `<unknown>` |

##### `do_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |     87 | `futex_wait ([kernel])` | `<unknown>` |

##### `__x64_sys_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |     87 | `do_futex ([kernel])` | `<unknown>` |

##### `do_syscall_64 ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                       | Location    |
| -----: | -----: | ---------------------------- | ----------- |
| 100.0% |     87 | `__x64_sys_futex ([kernel])` | `<unknown>` |

##### `entry_SYSCALL_64_after_hwframe ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |     87 | `do_syscall_64 ([kernel])` | `<unknown>` |

##### `unknown (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Callee                                      | Location    |
| -----: | -----: | ------------------------------------------- | ----------- |
| 100.0% |     87 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>` |
|  89.7% |     78 | `POOL_thread`                               | `pool.c`    |
|  89.7% |     78 | `unknown (libc.so.6)`                       | `<unknown>` |
|  10.3% |      9 | `main`                                      | `zstdcli.c` |

##### `pthread_cond_wait (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |     87 | `unknown (libc.so.6)` | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|      % | Sleeps | Callee                          | Location    |
| -----: | -----: | ------------------------------- | ----------- |
| 100.0% |     78 | `pthread_cond_wait (libc.so.6)` | `<unknown>` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|     % | Sleeps | Callee                 | Location           |
| ----: | -----: | ---------------------- | ------------------ |
| 77.8% |      7 | `ZSTD_compressStream2` | `zstd_compress.c`  |
| 22.2% |      2 | `AIO_ReadPool_setFile` | `fileio_asyncio.c` |

##### `FIO_compressFilename` (`fileio.c`)

|      % | Sleeps | Callee                         | Location   |
| -----: | -----: | ------------------------------ | ---------- |
| 100.0% |      9 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `main` (`zstdcli.c`)

|      % | Sleeps | Callee                 | Location   |
| -----: | -----: | ---------------------- | ---------- |
| 100.0% |      9 | `FIO_compressFilename` | `fileio.c` |

##### `__libc_start_main (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |      9 | `unknown (libc.so.6)` | `<unknown>` |

##### `_start (zstd)` (`<unknown>`)

|      % | Sleeps | Callee                          | Location    |
| -----: | -----: | ------------------------------- | ----------- |
| 100.0% |      9 | `__libc_start_main (libc.so.6)` | `<unknown>` |

##### `ZSTDMT_compressStream_generic` (`zstdmt_compress.c`)

|      % | Sleeps | Callee                          | Location    |
| -----: | -----: | ------------------------------- | ----------- |
| 100.0% |      7 | `pthread_cond_wait (libc.so.6)` | `<unknown>` |

##### `ZSTD_compressStream2` (`zstd_compress.c`)

|      % | Sleeps | Callee                          | Location            |
| -----: | -----: | ------------------------------- | ------------------- |
| 100.0% |      7 | `ZSTDMT_compressStream_generic` | `zstdmt_compress.c` |

## Hottest call stacks

Call stacks ranked by interruptible sleeps entered in their leaf frame.

|     % | Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | -----: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 89.7% |     78 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_wait_queue ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__x64_sys_futex ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                     |
|  8.0% |      7 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_wait_queue ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__x64_sys_futex ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `ZSTDMT_compressStream_generic` (`zstdmt_compress.c`) ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)` |
|  2.3% |      2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_wait_queue ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__x64_sys_futex ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_add` (`pool.c`) ← `AIO_ReadPool_setFile` (`fileio_asyncio.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                                |

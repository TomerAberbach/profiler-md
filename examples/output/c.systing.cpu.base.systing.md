# CPU profile

Took 12.09s over 12,092 samples (1.0ms per sample).

| Category |     % |    Time | Samples |
| -------- | ----: | ------: | ------: |
| Ours     | 90.2% |  10.91s |  10,910 |
| Kernel   |  7.8% | 940.0ms |     940 |
| Native   |  2.0% | 242.0ms |     242 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                             | Location                    |
| ----: | ------: | ------: | ------------------------------------ | --------------------------- |
| 69.2% |   8.36s |   8,369 | `ZSTD_btGetAllMatches_noDict_3`      | `zstd_opt.c`                |
| 14.6% |   1.76s |   1,761 | `ZSTD_compressBlock_opt2`            | `zstd_opt.c`                |
|  2.0% | 246.0ms |     246 | `alloc_pages_mpol_noprof ([kernel])` | `<unknown>`                 |
|  2.0% | 241.0ms |     241 | `unknown (libc.so.6)`                | `<unknown>`                 |
|  2.0% | 240.0ms |     240 | `ZSTD_litLengthPrice`                | `zstd_opt.c`                |
|  1.7% | 208.0ms |     208 | `ZSTD_insertAndFindFirstIndexHash3`  | `zstd_opt.c`                |
|  1.1% | 128.0ms |     128 | `do_anonymous_page ([kernel])`       | `<unknown>`                 |
|  0.9% | 112.0ms |     112 | `ZSTD_optLdm_processMatchCandidate`  | `zstd_opt.c`                |
|  0.9% | 110.0ms |     110 | `ZSTD_rawLiteralsCost`               | `zstd_opt.c`                |
|  0.8% | 102.0ms |     102 | `do_user_addr_fault ([kernel])`      | `<unknown>`                 |
|  0.6% |  74.0ms |      74 | `__handle_mm_fault ([kernel])`       | `<unknown>`                 |
|  0.6% |  68.0ms |      68 | `exc_page_fault ([kernel])`          | `<unknown>`                 |
|  0.4% |  49.0ms |      49 | `handle_mm_fault ([kernel])`         | `<unknown>`                 |
|  0.3% |  36.0ms |      36 | `asm_exc_page_fault ([kernel])`      | `<unknown>`                 |
|  0.2% |  29.0ms |      29 | `__alloc_pages_noprof ([kernel])`    | `<unknown>`                 |
|  0.2% |  27.0ms |      27 | `folio_add_new_anon_rmap ([kernel])` | `<unknown>`                 |
|  0.2% |  23.0ms |      23 | `ZSTD_encodeSequences_bmi2`          | `zstd_compress_sequences.c` |
|  0.2% |  21.0ms |      21 | `vfs_read ([kernel])`                | `<unknown>`                 |
|  0.2% |  19.0ms |      19 | `__mem_cgroup_charge ([kernel])`     | `<unknown>`                 |
|  0.2% |  19.0ms |      19 | `ZSTD_seqToCodes`                    | `zstd_compress.c`           |

#### Categories

##### Ours

|     % |    Time | Samples | Function                            | Location                    |
| ----: | ------: | ------: | ----------------------------------- | --------------------------- |
| 69.2% |   8.36s |   8,369 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c`                |
| 14.6% |   1.76s |   1,761 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c`                |
|  2.0% | 240.0ms |     240 | `ZSTD_litLengthPrice`               | `zstd_opt.c`                |
|  1.7% | 208.0ms |     208 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c`                |
|  0.9% | 112.0ms |     112 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c`                |
|  0.9% | 110.0ms |     110 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c`                |
|  0.2% |  23.0ms |      23 | `ZSTD_encodeSequences_bmi2`         | `zstd_compress_sequences.c` |
|  0.2% |  19.0ms |      19 | `ZSTD_seqToCodes`                   | `zstd_compress.c`           |
|  0.1% |  15.0ms |      15 | `ZSTD_insertBt1`                    | `zstd_opt.c`                |
|  0.1% |  12.0ms |      12 | `ZSTD_updateStats`                  | `zstd_opt.c`                |
|  0.1% |  11.0ms |      11 | `HIST_count_parallel_wksp`          | `hist.c`                    |
|  0.1% |   8.0ms |       8 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c`           |
| <0.1% |   5.0ms |       5 | `ZSTD_XXH64_update`                 | `xxhash.h`                  |
| <0.1% |   3.0ms |       3 | `HIST_count_simple`                 | `hist.c`                    |
| <0.1% |   3.0ms |       3 | `HUF_buildCTable_wksp`              | `huf_compress.c`            |
| <0.1% |   2.0ms |       2 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c`           |
| <0.1% |   1.0ms |       1 | `FIO_compressFilename_srcFile`      | `fileio.c`                  |
| <0.1% |   1.0ms |       1 | `ZSTD_compressStream2`              | `zstd_compress.c`           |
| <0.1% |   1.0ms |       1 | `ZSTD_selectBtGetAllMatches`        | `zstd_opt.c`                |
| <0.1% |   1.0ms |       1 | `ZSTD_rescaleFreqs`                 | `zstd_opt.c`                |

##### Kernel

|     % |    Time | Samples | Function                                       | Location    |
| ----: | ------: | ------: | ---------------------------------------------- | ----------- |
|  2.0% | 246.0ms |     246 | `alloc_pages_mpol_noprof ([kernel])`           | `<unknown>` |
|  1.1% | 128.0ms |     128 | `do_anonymous_page ([kernel])`                 | `<unknown>` |
|  0.8% | 102.0ms |     102 | `do_user_addr_fault ([kernel])`                | `<unknown>` |
|  0.6% |  74.0ms |      74 | `__handle_mm_fault ([kernel])`                 | `<unknown>` |
|  0.6% |  68.0ms |      68 | `exc_page_fault ([kernel])`                    | `<unknown>` |
|  0.4% |  49.0ms |      49 | `handle_mm_fault ([kernel])`                   | `<unknown>` |
|  0.3% |  36.0ms |      36 | `asm_exc_page_fault ([kernel])`                | `<unknown>` |
|  0.2% |  29.0ms |      29 | `__alloc_pages_noprof ([kernel])`              | `<unknown>` |
|  0.2% |  27.0ms |      27 | `folio_add_new_anon_rmap ([kernel])`           | `<unknown>` |
|  0.2% |  21.0ms |      21 | `vfs_read ([kernel])`                          | `<unknown>` |
|  0.2% |  19.0ms |      19 | `__mem_cgroup_charge ([kernel])`               | `<unknown>` |
|  0.1% |  18.0ms |      18 | `lock_vma_under_rcu ([kernel])`                | `<unknown>` |
|  0.1% |  16.0ms |      16 | `folio_alloc_mpol_noprof ([kernel])`           | `<unknown>` |
|  0.1% |  11.0ms |      11 | `vma_alloc_folio_noprof ([kernel])`            | `<unknown>` |
|  0.1% |   9.0ms |       9 | `shmem_get_folio_gfp ([kernel])`               | `<unknown>` |
|  0.1% |   7.0ms |       7 | `count_memcg_events_mm.constprop.0 ([kernel])` | `<unknown>` |
|  0.1% |   7.0ms |       7 | `shmem_file_read_iter ([kernel])`              | `<unknown>` |
| <0.1% |   4.0ms |       4 | `irqentry_exit_to_user_mode ([kernel])`        | `<unknown>` |
| <0.1% |   4.0ms |       4 | `filemap_get_entry ([kernel])`                 | `<unknown>` |
| <0.1% |   3.0ms |       3 | `ksys_read ([kernel])`                         | `<unknown>` |

##### Native

|     % |    Time | Samples | Function              | Location    |
| ----: | ------: | ------: | --------------------- | ----------- |
|  2.0% | 241.0ms |     241 | `unknown (libc.so.6)` | `<unknown>` |
| <0.1% |   1.0ms |       1 | `_init (zstd)`        | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|      % |  Time | Samples | Location         |
| -----: | ----: | ------: | ---------------- |
| 100.0% | 8.36s |   8,369 | `zstd_opt.c:876` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|      % |  Time | Samples | Location          |
| -----: | ----: | ------: | ----------------- |
| 100.0% | 1.76s |   1,761 | `zstd_opt.c:1455` |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

|     % |    Time | Samples | Location         |
| ----: | ------: | ------: | ---------------- |
| 86.3% | 207.0ms |     207 | `zstd_opt.c:295` |
|  9.6% |  23.0ms |      23 | `zstd_opt.c:313` |
|  2.1% |   5.0ms |       5 | `zstd_opt.c:306` |
|  2.1% |   5.0ms |       5 | `zstd_opt.c:310` |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|     % |    Time | Samples | Location         |
| ----: | ------: | ------: | ---------------- |
| 58.7% | 122.0ms |     122 | `zstd_opt.c:414` |
| 36.5% |  76.0ms |      76 | `zstd_opt.c:428` |
|  3.8% |   8.0ms |       8 | `zstd_opt.c:423` |
|  1.0% |   2.0ms |       2 | `zstd_opt.c:424` |

##### `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`)

|     % |    Time | Samples | Location          |
| ----: | ------: | ------: | ----------------- |
| 97.3% | 109.0ms |     109 | `zstd_opt.c:1028` |
|  2.7% |   3.0ms |       3 | `zstd_opt.c:1044` |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 85.5% | 94.0ms |      94 | `zstd_opt.c:273` |
|  9.1% | 10.0ms |      10 | `zstd_opt.c:266` |
|  5.5% |  6.0ms |       6 | `zstd_opt.c:276` |

##### `ZSTD_encodeSequences_bmi2` (`zstd_compress_sequences.c`)

|      % |   Time | Samples | Location                        |
| -----: | -----: | ------: | ------------------------------- |
| 100.0% | 23.0ms |      23 | `zstd_compress_sequences.c:410` |

##### `ZSTD_seqToCodes` (`zstd_compress.c`)

|     % |   Time | Samples | Location               |
| ----: | -----: | ------: | ---------------------- |
| 52.6% | 10.0ms |      10 | `zstd_compress.c:2695` |
| 31.6% |  6.0ms |       6 | `zstd_compress.c:2697` |
| 15.8% |  3.0ms |       3 | `zstd_compress.c:2693` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

|     % |  Time | Samples | Location         |
| ----: | ----: | ------: | ---------------- |
| 53.3% | 8.0ms |       8 | `zstd_opt.c:518` |
| 33.3% | 5.0ms |       5 | `zstd_opt.c:489` |
|  6.7% | 1.0ms |       1 | `zstd_opt.c:538` |
|  6.7% | 1.0ms |       1 | `zstd_opt.c:558` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|     % |  Time | Samples | Location         |
| ----: | ----: | ------: | ---------------- |
| 50.0% | 6.0ms |       6 | `zstd_opt.c:361` |
| 16.7% | 2.0ms |       2 | `zstd_opt.c:369` |
| 16.7% | 2.0ms |       2 | `zstd_opt.c:383` |
|  8.3% | 1.0ms |       1 | `zstd_opt.c:363` |
|  8.3% | 1.0ms |       1 | `zstd_opt.c:370` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |   Time | Samples | Location     |
| ----: | -----: | ------: | ------------ |
| 90.9% | 10.0ms |      10 | `hist.c:94`  |
|  9.1% |  1.0ms |       1 | `hist.c:122` |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

|      % |  Time | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 8.0ms |       8 | `zstd_compress.c:3822` |

##### `ZSTD_XXH64_update` (`xxhash.h`)

|      % |  Time | Samples | Location        |
| -----: | ----: | ------: | --------------- |
| 100.0% | 5.0ms |       5 | `xxhash.h:3556` |

##### `HIST_count_simple` (`hist.c`)

|      % |  Time | Samples | Location    |
| -----: | ----: | ------: | ----------- |
| 100.0% | 3.0ms |       3 | `hist.c:42` |

##### `HUF_buildCTable_wksp` (`huf_compress.c`)

|      % |  Time | Samples | Location             |
| -----: | ----: | ------: | -------------------- |
| 100.0% | 3.0ms |       3 | `huf_compress.c:782` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|     % |  Time | Samples | Location               |
| ----: | ----: | ------: | ---------------------- |
| 50.0% | 1.0ms |       1 | `zstd_compress.c:4058` |
| 50.0% | 1.0ms |       1 | `zstd_compress.c:4098` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|      % |  Time | Samples | Location        |
| -----: | ----: | ------: | --------------- |
| 100.0% | 1.0ms |       1 | `fileio.c:2077` |

##### `ZSTD_compressStream2` (`zstd_compress.c`)

|      % |  Time | Samples | Location               |
| -----: | ----: | ------: | ---------------------- |
| 100.0% | 1.0ms |       1 | `zstd_compress.c:6372` |

##### `ZSTD_selectBtGetAllMatches` (`zstd_opt.c`)

|      % |  Time | Samples | Location         |
| -----: | ----: | ------: | ---------------- |
| 100.0% | 1.0ms |       1 | `zstd_opt.c:889` |

##### `ZSTD_rescaleFreqs` (`zstd_opt.c`)

|      % |  Time | Samples | Location         |
| -----: | ----: | ------: | ---------------- |
| 100.0% | 1.0ms |       1 | `zstd_opt.c:254` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 99.3% |  8.31s |   8,312 | `ZSTD_compressBlock_opt2`     | `zstd_opt.c`      |
|  0.6% | 53.0ms |      53 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
| <0.1% |  4.0ms |       4 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 95.9% |  1.68s |   1,689 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  4.1% | 72.0ms |      72 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `alloc_pages_mpol_noprof ([kernel])` (`<unknown>`)

|      % |    Time | Samples | Caller                               | Location    |
| -----: | ------: | ------: | ------------------------------------ | ----------- |
| 100.0% | 246.0ms |     246 | `folio_alloc_mpol_noprof ([kernel])` | `<unknown>` |

##### `unknown (libc.so.6)` (`<unknown>`)

|     % |    Time | Samples | Caller                    | Location          |
| ----: | ------: | ------: | ------------------------- | ----------------- |
| 80.5% | 194.0ms |     194 | `ZSTD_resetCCtx_internal` | `zstd_compress.c` |
| 19.1% |  46.0ms |      46 | `ZSTD_compressStream2`    | `zstd_compress.c` |
|  0.4% |   1.0ms |       1 | `unknown (libc.so.6)`     | `<unknown>`       |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

|     % |    Time | Samples | Caller                        | Location          |
| ----: | ------: | ------: | ----------------------------- | ----------------- |
| 95.4% | 229.0ms |     229 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  4.6% |  11.0ms |      11 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|      % |    Time | Samples | Caller                    | Location     |
| -----: | ------: | ------: | ------------------------- | ------------ |
| 100.0% | 208.0ms |     208 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `do_anonymous_page ([kernel])` (`<unknown>`)

|      % |    Time | Samples | Caller                         | Location    |
| -----: | ------: | ------: | ------------------------------ | ----------- |
| 100.0% | 128.0ms |     128 | `__handle_mm_fault ([kernel])` | `<unknown>` |

##### `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`)

|     % |    Time | Samples | Caller                        | Location          |
| ----: | ------: | ------: | ----------------------------- | ----------------- |
| 97.3% | 109.0ms |     109 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  2.7% |   3.0ms |       3 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

|      % |    Time | Samples | Caller               | Location          |
| -----: | ------: | ------: | -------------------- | ----------------- |
| 100.0% | 110.0ms |     110 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `do_user_addr_fault ([kernel])` (`<unknown>`)

|      % |    Time | Samples | Caller                      | Location    |
| -----: | ------: | ------: | --------------------------- | ----------- |
| 100.0% | 102.0ms |     102 | `exc_page_fault ([kernel])` | `<unknown>` |

##### `__handle_mm_fault ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                       | Location    |
| -----: | -----: | ------: | ---------------------------- | ----------- |
| 100.0% | 74.0ms |      74 | `handle_mm_fault ([kernel])` | `<unknown>` |

##### `exc_page_fault ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                          | Location    |
| -----: | -----: | ------: | ------------------------------- | ----------- |
| 100.0% | 68.0ms |      68 | `asm_exc_page_fault ([kernel])` | `<unknown>` |

##### `handle_mm_fault ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                          | Location    |
| -----: | -----: | ------: | ------------------------------- | ----------- |
| 100.0% | 49.0ms |      49 | `do_user_addr_fault ([kernel])` | `<unknown>` |

##### `asm_exc_page_fault ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                | Location    |
| -----: | -----: | ------: | --------------------- | ----------- |
| 100.0% | 36.0ms |      36 | `unknown (libc.so.6)` | `<unknown>` |

##### `__alloc_pages_noprof ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                               | Location    |
| -----: | -----: | ------: | ------------------------------------ | ----------- |
| 100.0% | 29.0ms |      29 | `alloc_pages_mpol_noprof ([kernel])` | `<unknown>` |

##### `folio_add_new_anon_rmap ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                         | Location    |
| -----: | -----: | ------: | ------------------------------ | ----------- |
| 100.0% | 27.0ms |      27 | `do_anonymous_page ([kernel])` | `<unknown>` |

##### `ZSTD_encodeSequences_bmi2` (`zstd_compress_sequences.c`)

|      % |   Time | Samples | Caller                                  | Location          |
| -----: | -----: | ------: | --------------------------------------- | ----------------- |
| 100.0% | 23.0ms |      23 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `vfs_read ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                 | Location    |
| -----: | -----: | ------: | ---------------------- | ----------- |
| 100.0% | 21.0ms |      21 | `ksys_read ([kernel])` | `<unknown>` |

##### `__mem_cgroup_charge ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                         | Location    |
| -----: | -----: | ------: | ------------------------------ | ----------- |
| 100.0% | 19.0ms |      19 | `do_anonymous_page ([kernel])` | `<unknown>` |

##### `ZSTD_seqToCodes` (`zstd_compress.c`)

|      % |   Time | Samples | Caller                          | Location          |
| -----: | -----: | ------: | ------------------------------- | ----------------- |
| 100.0% | 19.0ms |      19 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |

##### `lock_vma_under_rcu ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                          | Location    |
| -----: | -----: | ------: | ------------------------------- | ----------- |
| 100.0% | 18.0ms |      18 | `do_user_addr_fault ([kernel])` | `<unknown>` |

##### `folio_alloc_mpol_noprof ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                              | Location    |
| -----: | -----: | ------: | ----------------------------------- | ----------- |
| 100.0% | 16.0ms |      16 | `vma_alloc_folio_noprof ([kernel])` | `<unknown>` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

|      % |   Time | Samples | Caller                          | Location     |
| -----: | -----: | ------: | ------------------------------- | ------------ |
| 100.0% | 15.0ms |      15 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|     % |   Time | Samples | Caller                        | Location          |
| ----: | -----: | ------: | ----------------------------- | ----------------- |
| 83.3% | 10.0ms |      10 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
| 16.7% |  2.0ms |       2 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `HIST_count_parallel_wksp` (`hist.c`)

|     % |  Time | Samples | Caller                              | Location          |
| ----: | ----: | ------: | ----------------------------------- | ----------------- |
| 63.6% | 7.0ms |       7 | `ZSTD_buildSequencesStatistics`     | `zstd_compress.c` |
| 27.3% | 3.0ms |       3 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c` |
|  9.1% | 1.0ms |       1 | `ZSTD_buildBlockEntropyStats`       | `zstd_compress.c` |

##### `vma_alloc_folio_noprof ([kernel])` (`<unknown>`)

|      % |   Time | Samples | Caller                         | Location    |
| -----: | -----: | ------: | ------------------------------ | ----------- |
| 100.0% | 11.0ms |      11 | `do_anonymous_page ([kernel])` | `<unknown>` |

##### `shmem_get_folio_gfp ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                            | Location    |
| -----: | ----: | ------: | --------------------------------- | ----------- |
| 100.0% | 9.0ms |       9 | `shmem_file_read_iter ([kernel])` | `<unknown>` |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                                               | Location          |
| -----: | ----: | ------: | ---------------------------------------------------- | ----------------- |
| 100.0% | 8.0ms |       8 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `count_memcg_events_mm.constprop.0 ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                       | Location    |
| -----: | ----: | ------: | ---------------------------- | ----------- |
| 100.0% | 7.0ms |       7 | `handle_mm_fault ([kernel])` | `<unknown>` |

##### `shmem_file_read_iter ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                | Location    |
| -----: | ----: | ------: | --------------------- | ----------- |
| 100.0% | 7.0ms |       7 | `vfs_read ([kernel])` | `<unknown>` |

##### `ZSTD_XXH64_update` (`xxhash.h`)

|      % |  Time | Samples | Caller                  | Location            |
| -----: | ----: | ------: | ----------------------- | ------------------- |
| 100.0% | 5.0ms |       5 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `irqentry_exit_to_user_mode ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                                       | Location    |
| -----: | ----: | ------: | -------------------------------------------- | ----------- |
| 100.0% | 4.0ms |       4 | `asm_sysvec_apic_timer_interrupt ([kernel])` | `<unknown>` |

##### `filemap_get_entry ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                           | Location    |
| -----: | ----: | ------: | -------------------------------- | ----------- |
| 100.0% | 4.0ms |       4 | `shmem_get_folio_gfp ([kernel])` | `<unknown>` |

##### `HIST_count_simple` (`hist.c`)

|     % |  Time | Samples | Caller              | Location     |
| ----: | ----: | ------: | ------------------- | ------------ |
| 66.7% | 2.0ms |       2 | `HIST_count_wksp`   | `hist.c`     |
| 33.3% | 1.0ms |       1 | `ZSTD_rescaleFreqs` | `zstd_opt.c` |

##### `HUF_buildCTable_wksp` (`huf_compress.c`)

|      % |  Time | Samples | Caller                | Location         |
| -----: | ----: | ------: | --------------------- | ---------------- |
| 100.0% | 3.0ms |       3 | `HUF_optimalTableLog` | `huf_compress.c` |

##### `ksys_read ([kernel])` (`<unknown>`)

|      % |  Time | Samples | Caller                     | Location    |
| -----: | ----: | ------: | -------------------------- | ----------- |
| 100.0% | 3.0ms |       3 | `do_syscall_64 ([kernel])` | `<unknown>` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                           | Location          |
| -----: | ----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 2.0ms |       2 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|      % |  Time | Samples | Caller                 | Location   |
| -----: | ----: | ------: | ---------------------- | ---------- |
| 100.0% | 1.0ms |       1 | `FIO_compressFilename` | `fileio.c` |

##### `ZSTD_compressStream2` (`zstd_compress.c`)

|      % |  Time | Samples | Caller                         | Location   |
| -----: | ----: | ------: | ------------------------------ | ---------- |
| 100.0% | 1.0ms |       1 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `ZSTD_selectBtGetAllMatches` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                        | Location     |
| -----: | ----: | ------: | ----------------------------- | ------------ |
| 100.0% | 1.0ms |       1 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c` |

##### `ZSTD_rescaleFreqs` (`zstd_opt.c`)

|      % |  Time | Samples | Caller                    | Location     |
| -----: | ----: | ------: | ------------------------- | ------------ |
| 100.0% | 1.0ms |       1 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `_init (zstd)` (`<unknown>`)

|      % |  Time | Samples | Caller                        | Location          |
| -----: | ----: | ------: | ----------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `ZSTD_buildBlockEntropyStats` | `zstd_compress.c` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                               | Location            |
| ----: | ------: | ------: | -------------------------------------- | ------------------- |
| 99.7% |  12.05s |  12,058 | `unknown (libc.so.6)`                  | `<unknown>`         |
| 98.4% |  11.90s |  11,902 | `POOL_thread`                          | `pool.c`            |
| 97.9% |  11.83s |  11,836 | `ZSTDMT_compressionJob`                | `zstdmt_compress.c` |
| 90.4% |  10.92s |  10,929 | `ZSTD_compressContinue_internal`       | `zstd_compress.c`   |
| 90.4% |  10.92s |  10,929 | `ZSTD_compressContinue_public`         | `zstd_compress.c`   |
| 89.7% |  10.84s |  10,844 | `ZSTD_buildSeqStore`                   | `zstd_compress.c`   |
| 85.3% |  10.31s |  10,311 | `ZSTD_compressBlock_opt2`              | `zstd_opt.c`        |
| 69.4% |   8.38s |   8,389 | `ZSTD_btGetAllMatches_noDict_3`        | `zstd_opt.c`        |
|  7.5% | 901.0ms |     901 | `ZSTD_resetCCtx_internal`              | `zstd_compress.c`   |
|  7.5% | 901.0ms |     901 | `ZSTD_compressBegin_internal`          | `zstd_compress.c`   |
|  7.5% | 901.0ms |     901 | `ZSTD_compressBegin_advanced_internal` | `zstd_compress.c`   |
|  7.0% | 848.0ms |     848 | `asm_exc_page_fault ([kernel])`        | `<unknown>`         |
|  6.7% | 812.0ms |     812 | `exc_page_fault ([kernel])`            | `<unknown>`         |
|  6.2% | 744.0ms |     744 | `do_user_addr_fault ([kernel])`        | `<unknown>`         |
|  5.1% | 621.0ms |     621 | `handle_mm_fault ([kernel])`           | `<unknown>`         |
|  4.7% | 564.0ms |     564 | `__handle_mm_fault ([kernel])`         | `<unknown>`         |
|  4.0% | 481.0ms |     481 | `do_anonymous_page ([kernel])`         | `<unknown>`         |
|  2.5% | 305.0ms |     305 | `vma_alloc_folio_noprof ([kernel])`    | `<unknown>`         |
|  2.4% | 294.0ms |     294 | `folio_alloc_mpol_noprof ([kernel])`   | `<unknown>`         |
|  2.3% | 278.0ms |     278 | `alloc_pages_mpol_noprof ([kernel])`   | `<unknown>`         |

#### Categories

##### Ours

|     % |    Time | Samples | Function                               | Location            |
| ----: | ------: | ------: | -------------------------------------- | ------------------- |
| 98.4% |  11.90s |  11,902 | `POOL_thread`                          | `pool.c`            |
| 97.9% |  11.83s |  11,836 | `ZSTDMT_compressionJob`                | `zstdmt_compress.c` |
| 90.4% |  10.92s |  10,929 | `ZSTD_compressContinue_internal`       | `zstd_compress.c`   |
| 90.4% |  10.92s |  10,929 | `ZSTD_compressContinue_public`         | `zstd_compress.c`   |
| 89.7% |  10.84s |  10,844 | `ZSTD_buildSeqStore`                   | `zstd_compress.c`   |
| 85.3% |  10.31s |  10,311 | `ZSTD_compressBlock_opt2`              | `zstd_opt.c`        |
| 69.4% |   8.38s |   8,389 | `ZSTD_btGetAllMatches_noDict_3`        | `zstd_opt.c`        |
|  7.5% | 901.0ms |     901 | `ZSTD_resetCCtx_internal`              | `zstd_compress.c`   |
|  7.5% | 901.0ms |     901 | `ZSTD_compressBegin_internal`          | `zstd_compress.c`   |
|  7.5% | 901.0ms |     901 | `ZSTD_compressBegin_advanced_internal` | `zstd_compress.c`   |
|  2.2% | 261.0ms |     261 | `ZSTD_compressBlock_btultra2`          | `zstd_opt.c`        |
|  2.0% | 240.0ms |     240 | `ZSTD_litLengthPrice`                  | `zstd_opt.c`        |
|  1.7% | 208.0ms |     208 | `ZSTD_insertAndFindFirstIndexHash3`    | `zstd_opt.c`        |
|  1.3% | 154.0ms |     154 | `main`                                 | `zstdcli.c`         |
|  1.3% | 153.0ms |     153 | `FIO_compressFilename`                 | `fileio.c`          |
|  1.2% | 146.0ms |     146 | `FIO_compressFilename_srcFile`         | `fileio.c`          |
|  1.2% | 140.0ms |     140 | `ZSTD_compressStream2`                 | `zstd_compress.c`   |
|  0.9% | 112.0ms |     112 | `ZSTD_optLdm_processMatchCandidate`    | `zstd_opt.c`        |
|  0.9% | 110.0ms |     110 | `ZSTD_rawLiteralsCost`                 | `zstd_opt.c`        |
|  0.5% |  63.0ms |      63 | `AIO_ReadPool_executeReadJob`          | `fileio_asyncio.c`  |

##### Kernel

|    % |    Time | Samples | Function                                    | Location    |
| ---: | ------: | ------: | ------------------------------------------- | ----------- |
| 7.0% | 848.0ms |     848 | `asm_exc_page_fault ([kernel])`             | `<unknown>` |
| 6.7% | 812.0ms |     812 | `exc_page_fault ([kernel])`                 | `<unknown>` |
| 6.2% | 744.0ms |     744 | `do_user_addr_fault ([kernel])`             | `<unknown>` |
| 5.1% | 621.0ms |     621 | `handle_mm_fault ([kernel])`                | `<unknown>` |
| 4.7% | 564.0ms |     564 | `__handle_mm_fault ([kernel])`              | `<unknown>` |
| 4.0% | 481.0ms |     481 | `do_anonymous_page ([kernel])`              | `<unknown>` |
| 2.5% | 305.0ms |     305 | `vma_alloc_folio_noprof ([kernel])`         | `<unknown>` |
| 2.4% | 294.0ms |     294 | `folio_alloc_mpol_noprof ([kernel])`        | `<unknown>` |
| 2.3% | 278.0ms |     278 | `alloc_pages_mpol_noprof ([kernel])`        | `<unknown>` |
| 0.8% |  98.0ms |      98 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>` |
| 0.8% |  96.0ms |      96 | `do_syscall_64 ([kernel])`                  | `<unknown>` |
| 0.5% |  63.0ms |      63 | `ksys_read ([kernel])`                      | `<unknown>` |
| 0.5% |  60.0ms |      60 | `vfs_read ([kernel])`                       | `<unknown>` |
| 0.3% |  38.0ms |      38 | `shmem_file_read_iter ([kernel])`           | `<unknown>` |
| 0.3% |  32.0ms |      32 | `__alloc_pages_noprof ([kernel])`           | `<unknown>` |
| 0.2% |  29.0ms |      29 | `folio_add_new_anon_rmap ([kernel])`        | `<unknown>` |
| 0.2% |  21.0ms |      21 | `lock_vma_under_rcu ([kernel])`             | `<unknown>` |
| 0.2% |  19.0ms |      19 | `__mem_cgroup_charge ([kernel])`            | `<unknown>` |
| 0.1% |  17.0ms |      17 | `copy_page_to_iter ([kernel])`              | `<unknown>` |
| 0.1% |  15.0ms |      15 | `_copy_to_iter ([kernel])`                  | `<unknown>` |

##### Native

|     % |    Time | Samples | Function                                     | Location    |
| ----: | ------: | ------: | -------------------------------------------- | ----------- |
| 99.7% |  12.05s |  12,058 | `unknown (libc.so.6)`                        | `<unknown>` |
|  1.3% | 156.0ms |     156 | `_start (zstd)`                              | `<unknown>` |
|  1.3% | 155.0ms |     155 | `__libc_start_main (libc.so.6)`              | `<unknown>` |
|  0.5% |  63.0ms |      63 | `fread (libc.so.6)`                          | `<unknown>` |
|  0.5% |  62.0ms |      62 | `read (libc.so.6)`                           | `<unknown>` |
|  0.2% |  25.0ms |      25 | `unknown (ld-linux-x86-64.so.2)`             | `<unknown>` |
|  0.1% |  16.0ms |      16 | `_dl_catch_exception (ld-linux-x86-64.so.2)` | `<unknown>` |
|  0.1% |   9.0ms |       9 | `malloc (libc.so.6)`                         | `<unknown>` |
| <0.1% |   6.0ms |       6 | `0x7f8fbd88ef3b`                             | `<unknown>` |
| <0.1% |   4.0ms |       4 | `pthread_cond_wait (libc.so.6)`              | `<unknown>` |
| <0.1% |   3.0ms |       3 | `pthread_create (libc.so.6)`                 | `<unknown>` |
| <0.1% |   3.0ms |       3 | `pthread_cond_signal (libc.so.6)`            | `<unknown>` |
| <0.1% |   2.0ms |       2 | `0x7f8fbd8bba91`                             | `<unknown>` |
| <0.1% |   2.0ms |       2 | `_init (zstd)`                               | `<unknown>` |
| <0.1% |   2.0ms |       2 | `__mmap (libc.so.6)`                         | `<unknown>` |
| <0.1% |   2.0ms |       2 | `_IO_file_doallocate (libc.so.6)`            | `<unknown>` |
| <0.1% |   1.0ms |       1 | `0x7f8fbd8b6724`                             | `<unknown>` |
| <0.1% |   1.0ms |       1 | `__libc_early_init (libc.so.6)`              | `<unknown>` |
| <0.1% |   1.0ms |       1 | `__libc_sigaction (libc.so.6)`               | `<unknown>` |
| <0.1% |   1.0ms |       1 | `__sysv_signal (libc.so.6)`                  | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `unknown (libc.so.6)` (`<unknown>`)

|     % |    Time | Samples | Callee                          | Location    |
| ----: | ------: | ------: | ------------------------------- | ----------- |
| 98.8% |  11.90s |  11,909 | `unknown (libc.so.6)`           | `<unknown>` |
| 98.7% |  11.90s |  11,902 | `POOL_thread`                   | `pool.c`    |
|  6.7% | 802.0ms |     802 | `asm_exc_page_fault ([kernel])` | `<unknown>` |
|  1.3% | 154.0ms |     154 | `main`                          | `zstdcli.c` |
|  0.5% |  62.0ms |      62 | `read (libc.so.6)`              | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|     % |   Time | Samples | Callee                          | Location            |
| ----: | -----: | ------: | ------------------------------- | ------------------- |
| 99.4% | 11.83s |  11,836 | `ZSTDMT_compressionJob`         | `zstdmt_compress.c` |
|  0.5% | 63.0ms |      63 | `AIO_ReadPool_executeReadJob`   | `fileio_asyncio.c`  |
| <0.1% |  3.0ms |       3 | `pthread_cond_wait (libc.so.6)` | `<unknown>`         |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|     % |    Time | Samples | Callee                                 | Location            |
| ----: | ------: | ------: | -------------------------------------- | ------------------- |
| 92.3% |  10.92s |  10,929 | `ZSTD_compressContinue_public`         | `zstd_compress.c`   |
|  7.6% | 901.0ms |     901 | `ZSTD_compressBegin_advanced_internal` | `zstd_compress.c`   |
| <0.1% |   5.0ms |       5 | `ZSTD_XXH64_update`                    | `xxhash.h`          |
| <0.1% |   1.0ms |       1 | `ZSTDMT_getBuffer`                     | `zstdmt_compress.c` |

##### `ZSTD_compressContinue_internal` (`zstd_compress.c`)

|     % |   Time | Samples | Callee                              | Location          |
| ----: | -----: | ------: | ----------------------------------- | ----------------- |
| 99.2% | 10.84s |  10,844 | `ZSTD_buildSeqStore`                | `zstd_compress.c` |
|  0.4% | 46.0ms |      46 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |
|  0.4% | 39.0ms |      39 | `ZSTD_deriveBlockSplitsHelper`      | `zstd_compress.c` |

##### `ZSTD_compressContinue_public` (`zstd_compress.c`)

|      % |   Time | Samples | Callee                           | Location          |
| -----: | -----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 10.92s |  10,929 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

|     % |    Time | Samples | Callee                              | Location     |
| ----: | ------: | ------: | ----------------------------------- | ------------ |
| 92.9% |  10.07s |  10,071 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c` |
|  2.4% | 261.0ms |     261 | `ZSTD_compressBlock_btultra2`       | `zstd_opt.c` |
|  2.1% | 229.0ms |     229 | `ZSTD_litLengthPrice`               | `zstd_opt.c` |
|  1.0% | 110.0ms |     110 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c` |
|  1.0% | 109.0ms |     109 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|     % |    Time | Samples | Callee                                       | Location     |
| ----: | ------: | ------: | -------------------------------------------- | ------------ |
| 80.8% |   8.33s |   8,332 | `ZSTD_btGetAllMatches_noDict_3`              | `zstd_opt.c` |
|  2.0% | 208.0ms |     208 | `ZSTD_insertAndFindFirstIndexHash3`          | `zstd_opt.c` |
|  0.1% |   7.0ms |       7 | `asm_exc_page_fault ([kernel])`              | `<unknown>`  |
| <0.1% |   2.0ms |       2 | `ZSTD_rescaleFreqs`                          | `zstd_opt.c` |
| <0.1% |   1.0ms |       1 | `asm_sysvec_apic_timer_interrupt ([kernel])` | `<unknown>`  |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|    % |   Time | Samples | Callee                                       | Location     |
| ---: | -----: | ------: | -------------------------------------------- | ------------ |
| 0.2% | 15.0ms |      15 | `ZSTD_insertBt1`                             | `zstd_opt.c` |
| 0.1% |  5.0ms |       5 | `asm_sysvec_apic_timer_interrupt ([kernel])` | `<unknown>`  |

##### `ZSTD_resetCCtx_internal` (`zstd_compress.c`)

|     % |    Time | Samples | Callee                | Location    |
| ----: | ------: | ------: | --------------------- | ----------- |
| 99.9% | 900.0ms |     900 | `unknown (libc.so.6)` | `<unknown>` |
|  0.1% |   1.0ms |       1 | `malloc (libc.so.6)`  | `<unknown>` |

##### `ZSTD_compressBegin_internal` (`zstd_compress.c`)

|      % |    Time | Samples | Callee                    | Location          |
| -----: | ------: | ------: | ------------------------- | ----------------- |
| 100.0% | 901.0ms |     901 | `ZSTD_resetCCtx_internal` | `zstd_compress.c` |

##### `ZSTD_compressBegin_advanced_internal` (`zstd_compress.c`)

|      % |    Time | Samples | Callee                        | Location          |
| -----: | ------: | ------: | ----------------------------- | ----------------- |
| 100.0% | 901.0ms |     901 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |

##### `asm_exc_page_fault ([kernel])` (`<unknown>`)

|     % |    Time | Samples | Callee                      | Location    |
| ----: | ------: | ------: | --------------------------- | ----------- |
| 95.8% | 812.0ms |     812 | `exc_page_fault ([kernel])` | `<unknown>` |

##### `exc_page_fault ([kernel])` (`<unknown>`)

|     % |    Time | Samples | Callee                          | Location    |
| ----: | ------: | ------: | ------------------------------- | ----------- |
| 91.6% | 744.0ms |     744 | `do_user_addr_fault ([kernel])` | `<unknown>` |

##### `do_user_addr_fault ([kernel])` (`<unknown>`)

|     % |    Time | Samples | Callee                          | Location    |
| ----: | ------: | ------: | ------------------------------- | ----------- |
| 83.5% | 621.0ms |     621 | `handle_mm_fault ([kernel])`    | `<unknown>` |
|  2.8% |  21.0ms |      21 | `lock_vma_under_rcu ([kernel])` | `<unknown>` |

##### `handle_mm_fault ([kernel])` (`<unknown>`)

|     % |    Time | Samples | Callee                                         | Location    |
| ----: | ------: | ------: | ---------------------------------------------- | ----------- |
| 90.8% | 564.0ms |     564 | `__handle_mm_fault ([kernel])`                 | `<unknown>` |
|  1.3% |   8.0ms |       8 | `count_memcg_events_mm.constprop.0 ([kernel])` | `<unknown>` |

##### `__handle_mm_fault ([kernel])` (`<unknown>`)

|     % |    Time | Samples | Callee                         | Location    |
| ----: | ------: | ------: | ------------------------------ | ----------- |
| 85.3% | 481.0ms |     481 | `do_anonymous_page ([kernel])` | `<unknown>` |
|  1.4% |   8.0ms |       8 | `do_fault ([kernel])`          | `<unknown>` |
|  0.2% |   1.0ms |       1 | `do_wp_page ([kernel])`        | `<unknown>` |

##### `do_anonymous_page ([kernel])` (`<unknown>`)

|     % |    Time | Samples | Callee                               | Location    |
| ----: | ------: | ------: | ------------------------------------ | ----------- |
| 63.4% | 305.0ms |     305 | `vma_alloc_folio_noprof ([kernel])`  | `<unknown>` |
|  6.0% |  29.0ms |      29 | `folio_add_new_anon_rmap ([kernel])` | `<unknown>` |
|  4.0% |  19.0ms |      19 | `__mem_cgroup_charge ([kernel])`     | `<unknown>` |

##### `vma_alloc_folio_noprof ([kernel])` (`<unknown>`)

|     % |    Time | Samples | Callee                               | Location    |
| ----: | ------: | ------: | ------------------------------------ | ----------- |
| 96.4% | 294.0ms |     294 | `folio_alloc_mpol_noprof ([kernel])` | `<unknown>` |

##### `folio_alloc_mpol_noprof ([kernel])` (`<unknown>`)

|     % |    Time | Samples | Callee                               | Location    |
| ----: | ------: | ------: | ------------------------------------ | ----------- |
| 94.6% | 278.0ms |     278 | `alloc_pages_mpol_noprof ([kernel])` | `<unknown>` |

##### `alloc_pages_mpol_noprof ([kernel])` (`<unknown>`)

|     % |   Time | Samples | Callee                            | Location    |
| ----: | -----: | ------: | --------------------------------- | ----------- |
| 11.5% | 32.0ms |      32 | `__alloc_pages_noprof ([kernel])` | `<unknown>` |

##### `ZSTD_compressBlock_btultra2` (`zstd_opt.c`)

|     % |    Time | Samples | Callee                              | Location     |
| ----: | ------: | ------: | ----------------------------------- | ------------ |
| 92.0% | 240.0ms |     240 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c` |
|  4.2% |  11.0ms |      11 | `ZSTD_litLengthPrice`               | `zstd_opt.c` |
|  1.5% |   4.0ms |       4 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c` |
|  1.1% |   3.0ms |       3 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c` |
|  0.8% |   2.0ms |       2 | `ZSTD_updateStats`                  | `zstd_opt.c` |

##### `_start (zstd)` (`<unknown>`)

|     % |    Time | Samples | Callee                          | Location    |
| ----: | ------: | ------: | ------------------------------- | ----------- |
| 99.4% | 155.0ms |     155 | `__libc_start_main (libc.so.6)` | `<unknown>` |
|  0.6% |   1.0ms |       1 | `_init (zstd)`                  | `<unknown>` |

##### `__libc_start_main (libc.so.6)` (`<unknown>`)

|      % |    Time | Samples | Callee                | Location    |
| -----: | ------: | ------: | --------------------- | ----------- |
| 100.0% | 155.0ms |     155 | `unknown (libc.so.6)` | `<unknown>` |

##### `main` (`zstdcli.c`)

|     % |    Time | Samples | Callee                 | Location   |
| ----: | ------: | ------: | ---------------------- | ---------- |
| 99.4% | 153.0ms |     153 | `FIO_compressFilename` | `fileio.c` |
|  0.6% |   1.0ms |       1 | `FIO_addAbortHandler`  | `fileio.c` |

##### `FIO_compressFilename` (`fileio.c`)

|     % |    Time | Samples | Callee                         | Location   |
| ----: | ------: | ------: | ------------------------------ | ---------- |
| 95.4% | 146.0ms |     146 | `FIO_compressFilename_srcFile` | `fileio.c` |
|  4.6% |   7.0ms |       7 | `FIO_createCResources`         | `fileio.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|     % |    Time | Samples | Callee                    | Location           |
| ----: | ------: | ------: | ------------------------- | ------------------ |
| 95.9% | 140.0ms |     140 | `ZSTD_compressStream2`    | `zstd_compress.c`  |
|  2.1% |   3.0ms |       3 | `AIO_ReadPool_fillBuffer` | `fileio_asyncio.c` |
|  0.7% |   1.0ms |       1 | `fopen64 (libc.so.6)`     | `<unknown>`        |
|  0.7% |   1.0ms |       1 | `FIO_openDstFile`         | `fileio.c`         |

##### `ZSTD_compressStream2` (`zstd_compress.c`)

|     % |    Time | Samples | Callee                           | Location            |
| ----: | ------: | ------: | -------------------------------- | ------------------- |
| 97.1% | 136.0ms |     136 | `unknown (libc.so.6)`            | `<unknown>`         |
|  1.4% |   2.0ms |       2 | `ZSTD_CCtx_init_compressStream2` | `zstd_compress.c`   |
|  0.7% |   1.0ms |       1 | `ZSTDMT_compressStream_generic`  | `zstdmt_compress.c` |

##### `entry_SYSCALL_64_after_hwframe ([kernel])` (`<unknown>`)

|     % |   Time | Samples | Callee                     | Location    |
| ----: | -----: | ------: | -------------------------- | ----------- |
| 98.0% | 96.0ms |      96 | `do_syscall_64 ([kernel])` | `<unknown>` |

##### `do_syscall_64 ([kernel])` (`<unknown>`)

|     % |   Time | Samples | Callee                        | Location    |
| ----: | -----: | ------: | ----------------------------- | ----------- |
| 65.6% | 63.0ms |      63 | `ksys_read ([kernel])`        | `<unknown>` |
|  6.3% |  6.0ms |       6 | `__x64_sys_execve ([kernel])` | `<unknown>` |
|  5.2% |  5.0ms |       5 | `__x64_sys_futex ([kernel])`  | `<unknown>` |
|  4.2% |  4.0ms |       4 | `__x64_sys_openat ([kernel])` | `<unknown>` |
|  4.2% |  4.0ms |       4 | `ksys_mmap_pgoff ([kernel])`  | `<unknown>` |

##### `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`)

|      % |   Time | Samples | Callee              | Location    |
| -----: | -----: | ------: | ------------------- | ----------- |
| 100.0% | 63.0ms |      63 | `fread (libc.so.6)` | `<unknown>` |

##### `ksys_read ([kernel])` (`<unknown>`)

|     % |   Time | Samples | Callee                | Location    |
| ----: | -----: | ------: | --------------------- | ----------- |
| 95.2% | 60.0ms |      60 | `vfs_read ([kernel])` | `<unknown>` |

##### `fread (libc.so.6)` (`<unknown>`)

|      % |   Time | Samples | Callee                | Location    |
| -----: | -----: | ------: | --------------------- | ----------- |
| 100.0% | 63.0ms |      63 | `unknown (libc.so.6)` | `<unknown>` |

##### `read (libc.so.6)` (`<unknown>`)

|      % |   Time | Samples | Callee                                      | Location    |
| -----: | -----: | ------: | ------------------------------------------- | ----------- |
| 100.0% | 62.0ms |      62 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>` |

##### `vfs_read ([kernel])` (`<unknown>`)

|     % |   Time | Samples | Callee                            | Location    |
| ----: | -----: | ------: | --------------------------------- | ----------- |
| 63.3% | 38.0ms |      38 | `shmem_file_read_iter ([kernel])` | `<unknown>` |
|  1.7% |  1.0ms |       1 | `pipe_read ([kernel])`            | `<unknown>` |

##### `shmem_file_read_iter ([kernel])` (`<unknown>`)

|     % |   Time | Samples | Callee                           | Location    |
| ----: | -----: | ------: | -------------------------------- | ----------- |
| 44.7% | 17.0ms |      17 | `copy_page_to_iter ([kernel])`   | `<unknown>` |
| 34.2% | 13.0ms |      13 | `shmem_get_folio_gfp ([kernel])` | `<unknown>` |
|  2.6% |  1.0ms |       1 | `touch_atime ([kernel])`         | `<unknown>` |

##### `__alloc_pages_noprof ([kernel])` (`<unknown>`)

|    % |  Time | Samples | Callee                              | Location    |
| ---: | ----: | ------: | ----------------------------------- | ----------- |
| 9.4% | 3.0ms |       3 | `get_page_from_freelist ([kernel])` | `<unknown>` |

##### `folio_add_new_anon_rmap ([kernel])` (`<unknown>`)

|    % |  Time | Samples | Callee                        | Location    |
| ---: | ----: | ------: | ----------------------------- | ----------- |
| 6.9% | 2.0ms |       2 | `__folio_mod_stat ([kernel])` | `<unknown>` |

##### `unknown (ld-linux-x86-64.so.2)` (`<unknown>`)

|     % |   Time | Samples | Callee                                       | Location    |
| ----: | -----: | ------: | -------------------------------------------- | ----------- |
| 96.0% | 24.0ms |      24 | `unknown (ld-linux-x86-64.so.2)`             | `<unknown>` |
| 64.0% | 16.0ms |      16 | `_dl_catch_exception (ld-linux-x86-64.so.2)` | `<unknown>` |
| 60.0% | 15.0ms |      15 | `entry_SYSCALL_64_after_hwframe ([kernel])`  | `<unknown>` |
| 32.0% |  8.0ms |       8 | `asm_exc_page_fault ([kernel])`              | `<unknown>` |
|  4.0% |  1.0ms |       1 | `unknown (libc.so.6)`                        | `<unknown>` |

##### `lock_vma_under_rcu ([kernel])` (`<unknown>`)

|     % |  Time | Samples | Callee                | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 14.3% | 3.0ms |       3 | `mas_walk ([kernel])` | `<unknown>` |

##### `copy_page_to_iter ([kernel])` (`<unknown>`)

|     % |   Time | Samples | Callee                     | Location    |
| ----: | -----: | ------: | -------------------------- | ----------- |
| 88.2% | 15.0ms |      15 | `_copy_to_iter ([kernel])` | `<unknown>` |

##### `_dl_catch_exception (ld-linux-x86-64.so.2)` (`<unknown>`)

|      % |   Time | Samples | Callee                           | Location    |
| -----: | -----: | ------: | -------------------------------- | ----------- |
| 100.0% | 16.0ms |      16 | `unknown (ld-linux-x86-64.so.2)` | `<unknown>` |

##### `_copy_to_iter ([kernel])` (`<unknown>`)

|     % |   Time | Samples | Callee                          | Location    |
| ----: | -----: | ------: | ------------------------------- | ----------- |
| 86.7% | 13.0ms |      13 | `asm_exc_page_fault ([kernel])` | `<unknown>` |

##### `malloc (libc.so.6)` (`<unknown>`)

|      % |  Time | Samples | Callee                | Location    |
| -----: | ----: | ------: | --------------------- | ----------- |
| 100.0% | 9.0ms |       9 | `unknown (libc.so.6)` | `<unknown>` |

##### `0x7f8fbd88ef3b` (`<unknown>`)

|      % |  Time | Samples | Callee                                      | Location    |
| -----: | ----: | ------: | ------------------------------------------- | ----------- |
| 100.0% | 6.0ms |       6 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>` |

##### `pthread_cond_wait (libc.so.6)` (`<unknown>`)

|      % |  Time | Samples | Callee                | Location    |
| -----: | ----: | ------: | --------------------- | ----------- |
| 100.0% | 4.0ms |       4 | `unknown (libc.so.6)` | `<unknown>` |

##### `pthread_create (libc.so.6)` (`<unknown>`)

|     % |  Time | Samples | Callee                          | Location    |
| ----: | ----: | ------: | ------------------------------- | ----------- |
| 66.7% | 2.0ms |       2 | `unknown (libc.so.6)`           | `<unknown>` |
| 33.3% | 1.0ms |       1 | `asm_exc_page_fault ([kernel])` | `<unknown>` |

##### `pthread_cond_signal (libc.so.6)` (`<unknown>`)

|      % |  Time | Samples | Callee                                      | Location    |
| -----: | ----: | ------: | ------------------------------------------- | ----------- |
| 100.0% | 3.0ms |       3 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>` |

##### `0x7f8fbd8bba91` (`<unknown>`)

|      % |  Time | Samples | Callee                                      | Location    |
| -----: | ----: | ------: | ------------------------------------------- | ----------- |
| 100.0% | 2.0ms |       2 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>` |

##### `_init (zstd)` (`<unknown>`)

|     % |  Time | Samples | Callee                          | Location    |
| ----: | ----: | ------: | ------------------------------- | ----------- |
| 50.0% | 1.0ms |       1 | `asm_exc_page_fault ([kernel])` | `<unknown>` |

##### `__mmap (libc.so.6)` (`<unknown>`)

|      % |  Time | Samples | Callee                                      | Location    |
| -----: | ----: | ------: | ------------------------------------------- | ----------- |
| 100.0% | 2.0ms |       2 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>` |

##### `_IO_file_doallocate (libc.so.6)` (`<unknown>`)

|      % |  Time | Samples | Callee               | Location    |
| -----: | ----: | ------: | -------------------- | ----------- |
| 100.0% | 2.0ms |       2 | `malloc (libc.so.6)` | `<unknown>` |

##### `0x7f8fbd8b6724` (`<unknown>`)

|      % |  Time | Samples | Callee                                      | Location    |
| -----: | ----: | ------: | ------------------------------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>` |

##### `__libc_early_init (libc.so.6)` (`<unknown>`)

|      % |  Time | Samples | Callee                          | Location    |
| -----: | ----: | ------: | ------------------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `asm_exc_page_fault ([kernel])` | `<unknown>` |

##### `__libc_sigaction (libc.so.6)` (`<unknown>`)

|      % |  Time | Samples | Callee                                      | Location    |
| -----: | ----: | ------: | ------------------------------------------- | ----------- |
| 100.0% | 1.0ms |       1 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>` |

##### `__sysv_signal (libc.so.6)` (`<unknown>`)

|      % |  Time | Samples | Callee                         | Location    |
| -----: | ----: | ------: | ------------------------------ | ----------- |
| 100.0% | 1.0ms |       1 | `__libc_sigaction (libc.so.6)` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 67.5% |   8.15s |   8,158 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                 |
| 14.0% |   1.68s |   1,689 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                   |
|  1.9% | 229.0ms |     229 | `ZSTD_litLengthPrice` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                       |
|  1.8% | 212.0ms |     212 | `alloc_pages_mpol_noprof ([kernel])` ← `folio_alloc_mpol_noprof ([kernel])` ← `vma_alloc_folio_noprof ([kernel])` ← `do_anonymous_page ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                     |
|  1.7% | 201.0ms |     201 | `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                             |
|  1.6% | 194.0ms |     194 | `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                            |
|  1.3% | 154.0ms |     154 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                 |
|  0.9% | 110.0ms |     110 | `ZSTD_rawLiteralsCost` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                      |
|  0.9% | 109.0ms |     109 | `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                         |
|  0.9% | 108.0ms |     108 | `do_anonymous_page ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                         |
|  0.7% |  90.0ms |      90 | `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                          |
|  0.6% |  72.0ms |      72 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                   |
|  0.5% |  56.0ms |      56 | `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                            |
|  0.5% |  55.0ms |      55 | `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                          |
|  0.4% |  53.0ms |      53 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                             |
|  0.4% |  46.0ms |      46 | `unknown (libc.so.6)` ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.3% |  36.0ms |      36 | `handle_mm_fault ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                           |
|  0.3% |  31.0ms |      31 | `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                          |
|  0.2% |  27.0ms |      27 | `__alloc_pages_noprof ([kernel])` ← `alloc_pages_mpol_noprof ([kernel])` ← `folio_alloc_mpol_noprof ([kernel])` ← `vma_alloc_folio_noprof ([kernel])` ← `do_anonymous_page ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` |
|  0.2% |  25.0ms |      25 | `alloc_pages_mpol_noprof ([kernel])` ← `folio_alloc_mpol_noprof ([kernel])` ← `vma_alloc_folio_noprof ([kernel])` ← `do_anonymous_page ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                                                                  |

# Uninterruptible sleep profile

Slept 69 times.

| Category |      % | Sleeps |
| -------- | -----: | -----: |
| Kernel   | 100.0% |     69 |

## Hottest functions

### Self sleeps

Functions ranked by uninterruptible sleeps entered directly in the function body, excluding callees.

#### Categories

##### Kernel

|      % | Sleeps | Function                    | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |     69 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self sleeps. Inlining can make caller attribution imprecise.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |     69 | `__schedule ([kernel])` | `<unknown>` |

### Total sleeps

Functions ranked by total uninterruptible sleeps entered in the function and all its callees.

|      % | Sleeps | Function                                       | Location    |
| -----: | -----: | ---------------------------------------------- | ----------- |
| 100.0% |     69 | `bpf_trace_run4 ([kernel])`                    | `<unknown>` |
| 100.0% |     69 | `__schedule ([kernel])`                        | `<unknown>` |
| 100.0% |     69 | `schedule ([kernel])`                          | `<unknown>` |
|  88.4% |     61 | `do_syscall_64 ([kernel])`                     | `<unknown>` |
|  88.4% |     61 | `entry_SYSCALL_64_after_hwframe ([kernel])`    | `<unknown>` |
|  82.6% |     57 | `p9_client_rpc ([kernel])`                     | `<unknown>` |
|  72.5% |     50 | `unknown (ld-linux-x86-64.so.2)`               | `<unknown>` |
|  68.1% |     47 | `_dl_catch_exception (ld-linux-x86-64.so.2)`   | `<unknown>` |
|  62.3% |     43 | `path_openat ([kernel])`                       | `<unknown>` |
|  62.3% |     43 | `do_filp_open ([kernel])`                      | `<unknown>` |
|  43.5% |     30 | `do_sys_openat2 ([kernel])`                    | `<unknown>` |
|  43.5% |     30 | `__x64_sys_openat ([kernel])`                  | `<unknown>` |
|  27.5% |     19 | `v9fs_vfs_lookup ([kernel])`                   | `<unknown>` |
|  26.1% |     18 | `link_path_walk.part.0.constprop.0 ([kernel])` | `<unknown>` |
|  21.7% |     15 | `p9_client_walk ([kernel])`                    | `<unknown>` |
|  21.7% |     15 | `walk_component ([kernel])`                    | `<unknown>` |
|  21.7% |     15 | `load_elf_binary ([kernel])`                   | `<unknown>` |
|  21.7% |     15 | `bprm_execve ([kernel])`                       | `<unknown>` |
|  21.7% |     15 | `do_execveat_common ([kernel])`                | `<unknown>` |
|  21.7% |     15 | `__x64_sys_execve ([kernel])`                  | `<unknown>` |

#### Categories

##### Kernel

|      % | Sleeps | Function                                       | Location    |
| -----: | -----: | ---------------------------------------------- | ----------- |
| 100.0% |     69 | `bpf_trace_run4 ([kernel])`                    | `<unknown>` |
| 100.0% |     69 | `__schedule ([kernel])`                        | `<unknown>` |
| 100.0% |     69 | `schedule ([kernel])`                          | `<unknown>` |
|  88.4% |     61 | `do_syscall_64 ([kernel])`                     | `<unknown>` |
|  88.4% |     61 | `entry_SYSCALL_64_after_hwframe ([kernel])`    | `<unknown>` |
|  82.6% |     57 | `p9_client_rpc ([kernel])`                     | `<unknown>` |
|  62.3% |     43 | `path_openat ([kernel])`                       | `<unknown>` |
|  62.3% |     43 | `do_filp_open ([kernel])`                      | `<unknown>` |
|  43.5% |     30 | `do_sys_openat2 ([kernel])`                    | `<unknown>` |
|  43.5% |     30 | `__x64_sys_openat ([kernel])`                  | `<unknown>` |
|  27.5% |     19 | `v9fs_vfs_lookup ([kernel])`                   | `<unknown>` |
|  26.1% |     18 | `link_path_walk.part.0.constprop.0 ([kernel])` | `<unknown>` |
|  21.7% |     15 | `p9_client_walk ([kernel])`                    | `<unknown>` |
|  21.7% |     15 | `walk_component ([kernel])`                    | `<unknown>` |
|  21.7% |     15 | `load_elf_binary ([kernel])`                   | `<unknown>` |
|  21.7% |     15 | `bprm_execve ([kernel])`                       | `<unknown>` |
|  21.7% |     15 | `do_execveat_common ([kernel])`                | `<unknown>` |
|  21.7% |     15 | `__x64_sys_execve ([kernel])`                  | `<unknown>` |
|  21.7% |     15 | `p9_client_read_once ([kernel])`               | `<unknown>` |
|  21.7% |     15 | `p9_client_read ([kernel])`                    | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total sleeps. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                      | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |     69 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |     69 | `__schedule ([kernel])` | `<unknown>` |

##### `do_syscall_64 ([kernel])` (`<unknown>`)

|     % | Sleeps | Callee                         | Location    |
| ----: | -----: | ------------------------------ | ----------- |
| 49.2% |     30 | `__x64_sys_openat ([kernel])`  | `<unknown>` |
| 24.6% |     15 | `__x64_sys_execve ([kernel])`  | `<unknown>` |
|  9.8% |      6 | `ksys_read ([kernel])`         | `<unknown>` |
|  6.6% |      4 | `__do_sys_newfstat ([kernel])` | `<unknown>` |
|  3.3% |      2 | `__x64_sys_pread64 ([kernel])` | `<unknown>` |

##### `entry_SYSCALL_64_after_hwframe ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |     61 | `do_syscall_64 ([kernel])` | `<unknown>` |

##### `p9_client_rpc ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |     57 | `schedule ([kernel])` | `<unknown>` |

##### `unknown (ld-linux-x86-64.so.2)` (`<unknown>`)

|      % | Sleeps | Callee                                       | Location    |
| -----: | -----: | -------------------------------------------- | ----------- |
| 100.0% |     50 | `unknown (ld-linux-x86-64.so.2)`             | `<unknown>` |
|  94.0% |     47 | `_dl_catch_exception (ld-linux-x86-64.so.2)` | `<unknown>` |
|  84.0% |     42 | `entry_SYSCALL_64_after_hwframe ([kernel])`  | `<unknown>` |
|  16.0% |      8 | `asm_exc_page_fault ([kernel])`              | `<unknown>` |

##### `_dl_catch_exception (ld-linux-x86-64.so.2)` (`<unknown>`)

|      % | Sleeps | Callee                           | Location    |
| -----: | -----: | -------------------------------- | ----------- |
| 100.0% |     47 | `unknown (ld-linux-x86-64.so.2)` | `<unknown>` |

##### `path_openat ([kernel])` (`<unknown>`)

|     % | Sleeps | Callee                                         | Location    |
| ----: | -----: | ---------------------------------------------- | ----------- |
| 41.9% |     18 | `link_path_walk.part.0.constprop.0 ([kernel])` | `<unknown>` |
| 23.3% |     10 | `vfs_open ([kernel])`                          | `<unknown>` |
| 18.6% |      8 | `lookup_open.isra.0 ([kernel])`                | `<unknown>` |
|  9.3% |      4 | `dput.part.0 ([kernel])`                       | `<unknown>` |
|  7.0% |      3 | `step_into ([kernel])`                         | `<unknown>` |

##### `do_filp_open ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                   | Location    |
| -----: | -----: | ------------------------ | ----------- |
| 100.0% |     43 | `path_openat ([kernel])` | `<unknown>` |

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
| 52.6% |     10 | `p9_client_walk ([kernel])`           | `<unknown>` |
| 47.4% |      9 | `v9fs_inode_from_fid_dotl ([kernel])` | `<unknown>` |

##### `link_path_walk.part.0.constprop.0 ([kernel])` (`<unknown>`)

|     % | Sleeps | Callee                      | Location    |
| ----: | -----: | --------------------------- | ----------- |
| 77.8% |     14 | `walk_component ([kernel])` | `<unknown>` |
| 22.2% |      4 | `step_into ([kernel])`      | `<unknown>` |

##### `p9_client_walk ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |     15 | `p9_client_rpc ([kernel])` | `<unknown>` |

##### `walk_component ([kernel])` (`<unknown>`)

|     % | Sleeps | Callee                     | Location    |
| ----: | -----: | -------------------------- | ----------- |
| 73.3% |     11 | `__lookup_slow ([kernel])` | `<unknown>` |
| 26.7% |      4 | `dput.part.0 ([kernel])`   | `<unknown>` |

##### `load_elf_binary ([kernel])` (`<unknown>`)

|     % | Sleeps | Callee                      | Location    |
| ----: | -----: | --------------------------- | ----------- |
| 86.7% |     13 | `open_exec ([kernel])`      | `<unknown>` |
|  6.7% |      1 | `__kernel_read ([kernel])`  | `<unknown>` |
|  6.7% |      1 | `load_elf_phdrs ([kernel])` | `<unknown>` |

##### `bprm_execve ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                       | Location    |
| -----: | -----: | ---------------------------- | ----------- |
| 100.0% |     15 | `load_elf_binary ([kernel])` | `<unknown>` |

##### `do_execveat_common ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                   | Location    |
| -----: | -----: | ------------------------ | ----------- |
| 100.0% |     15 | `bprm_execve ([kernel])` | `<unknown>` |

##### `__x64_sys_execve ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                          | Location    |
| -----: | -----: | ------------------------------- | ----------- |
| 100.0% |     15 | `do_execveat_common ([kernel])` | `<unknown>` |

##### `p9_client_read_once ([kernel])` (`<unknown>`)

|     % | Sleeps | Callee                                    | Location    |
| ----: | -----: | ----------------------------------------- | ----------- |
| 53.3% |      8 | `p9_client_zc_rpc.constprop.0 ([kernel])` | `<unknown>` |
| 46.7% |      7 | `p9_client_rpc ([kernel])`                | `<unknown>` |

##### `p9_client_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                           | Location    |
| -----: | -----: | -------------------------------- | ----------- |
| 100.0% |     15 | `p9_client_read_once ([kernel])` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by uninterruptible sleeps entered in their leaf frame.

|     % | Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | -----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11.6% |      8 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_virtio_zc_request ([kernel])` ← `p9_client_zc_rpc.constprop.0 ([kernel])` ← `p9_client_read_once ([kernel])` ← `p9_client_read ([kernel])` ← `v9fs_issue_read ([kernel])` ← `netfs_read_to_pagecache ([kernel])` ← `netfs_read_folio ([kernel])` ← `filemap_read_folio ([kernel])` ← `filemap_fault ([kernel])` ← `__do_fault ([kernel])` ← `do_fault ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` |
|  4.3% |      3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_walk ([kernel])` ← `v9fs_vfs_lookup ([kernel])` ← `__lookup_slow ([kernel])` ← `walk_component ([kernel])` ← `link_path_walk.part.0.constprop.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                                  |
|  4.3% |      3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_getattr_dotl ([kernel])` ← `v9fs_inode_from_fid_dotl ([kernel])` ← `v9fs_vfs_lookup ([kernel])` ← `__lookup_slow ([kernel])` ← `walk_component ([kernel])` ← `link_path_walk.part.0.constprop.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                  |
|  4.3% |      3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_readlink ([kernel])` ← `v9fs_vfs_get_link_dotl ([kernel])` ← `step_into ([kernel])` ← `link_path_walk.part.0.constprop.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                                                         |
|  4.3% |      3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_clunk ([kernel])` ← `v9fs_dentry_release ([kernel])` ← `__dentry_kill ([kernel])` ← `dput.part.0 ([kernel])` ← `walk_component ([kernel])` ← `link_path_walk.part.0.constprop.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                  |
|  4.3% |      3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_walk ([kernel])` ← `v9fs_file_open ([kernel])` ← `do_dentry_open ([kernel])` ← `vfs_open ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                                                                                         |
|  4.3% |      3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_open ([kernel])` ← `v9fs_file_open ([kernel])` ← `do_dentry_open ([kernel])` ← `vfs_open ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                                                                                         |
|  4.3% |      3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_read_once ([kernel])` ← `p9_client_read ([kernel])` ← `v9fs_issue_read ([kernel])` ← `netfs_unbuffered_read_iter_locked ([kernel])` ← `netfs_unbuffered_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                                                                                                                       |
|  4.3% |      3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_getattr_dotl ([kernel])` ← `v9fs_vfs_getattr_dotl ([kernel])` ← `vfs_fstat ([kernel])` ← `__do_sys_newfstat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                                                                                                                                                                                                                              |
|  4.3% |      3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `schedule_preempt_disabled ([kernel])` ← `rwsem_down_read_slowpath ([kernel])` ← `down_read_killable ([kernel])` ← `lock_mm_and_find_vma ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `_copy_to_iter ([kernel])` ← `copy_page_to_iter ([kernel])` ← `shmem_file_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `read (libc.so.6)` ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                        |
|  2.9% |      2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_walk ([kernel])` ← `v9fs_vfs_lookup ([kernel])` ← `__lookup_slow ([kernel])` ← `walk_component ([kernel])` ← `link_path_walk.part.0.constprop.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_open_execat ([kernel])` ← `open_exec ([kernel])` ← `load_elf_binary ([kernel])` ← `bprm_execve ([kernel])` ← `do_execveat_common ([kernel])` ← `__x64_sys_execve ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `0x7f8fbd88ef3b`                                                                                                                                                                                                                                                                                                                                    |
|  2.9% |      2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_getattr_dotl ([kernel])` ← `v9fs_inode_from_fid_dotl ([kernel])` ← `v9fs_vfs_lookup ([kernel])` ← `__lookup_slow ([kernel])` ← `walk_component ([kernel])` ← `link_path_walk.part.0.constprop.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_open_execat ([kernel])` ← `open_exec ([kernel])` ← `load_elf_binary ([kernel])` ← `bprm_execve ([kernel])` ← `do_execveat_common ([kernel])` ← `__x64_sys_execve ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `0x7f8fbd88ef3b`                                                                                                                                                                                                                                                                                    |
|  2.9% |      2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_clunk ([kernel])` ← `v9fs_dentry_release ([kernel])` ← `__dentry_kill ([kernel])` ← `dput.part.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_open_execat ([kernel])` ← `open_exec ([kernel])` ← `load_elf_binary ([kernel])` ← `bprm_execve ([kernel])` ← `do_execveat_common ([kernel])` ← `__x64_sys_execve ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `0x7f8fbd88ef3b`                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.9% |      2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_walk ([kernel])` ← `v9fs_vfs_lookup ([kernel])` ← `v9fs_vfs_atomic_open_dotl ([kernel])` ← `lookup_open.isra.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                                                                   |
|  2.9% |      2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_getattr_dotl ([kernel])` ← `v9fs_inode_from_fid_dotl ([kernel])` ← `v9fs_vfs_lookup ([kernel])` ← `v9fs_vfs_atomic_open_dotl ([kernel])` ← `lookup_open.isra.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                   |
|  2.9% |      2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_readlink ([kernel])` ← `v9fs_vfs_get_link_dotl ([kernel])` ← `step_into ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                                                                                                          |
|  2.9% |      2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_clunk ([kernel])` ← `v9fs_dentry_release ([kernel])` ← `__dentry_kill ([kernel])` ← `dput.part.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                                                                                 |
|  2.9% |      2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_read_once ([kernel])` ← `p9_client_read ([kernel])` ← `v9fs_issue_read ([kernel])` ← `netfs_unbuffered_read_iter_locked ([kernel])` ← `netfs_unbuffered_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `__x64_sys_pread64 ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `_dl_catch_exception (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)` ← `unknown (ld-linux-x86-64.so.2)`                                                                                                                                                                               |
|  1.4% |      1 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_readlink ([kernel])` ← `v9fs_vfs_get_link_dotl ([kernel])` ← `step_into ([kernel])` ← `link_path_walk.part.0.constprop.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_open_execat ([kernel])` ← `open_exec ([kernel])` ← `load_elf_binary ([kernel])` ← `bprm_execve ([kernel])` ← `do_execveat_common ([kernel])` ← `__x64_sys_execve ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `0x7f8fbd88ef3b`                                                                                                                                                                                                                                                                                                                                                           |
|  1.4% |      1 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_clunk ([kernel])` ← `v9fs_dentry_release ([kernel])` ← `__dentry_kill ([kernel])` ← `dput.part.0 ([kernel])` ← `walk_component ([kernel])` ← `link_path_walk.part.0.constprop.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_open_execat ([kernel])` ← `open_exec ([kernel])` ← `load_elf_binary ([kernel])` ← `bprm_execve ([kernel])` ← `do_execveat_common ([kernel])` ← `__x64_sys_execve ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `0x7f8fbd88ef3b`                                                                                                                                                                                                                                                                                                    |

# Interruptible sleep profile

Slept 84 times.

| Category |      % | Sleeps |
| -------- | -----: | -----: |
| Kernel   | 100.0% |     84 |

## Hottest functions

### Self sleeps

Functions ranked by interruptible sleeps entered directly in the function body, excluding callees.

#### Categories

##### Kernel

|      % | Sleeps | Function                    | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |     84 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self sleeps. Inlining can make caller attribution imprecise.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Caller                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |     84 | `__schedule ([kernel])` | `<unknown>` |

### Total sleeps

Functions ranked by total interruptible sleeps entered in the function and all its callees.

|      % | Sleeps | Function                                    | Location            |
| -----: | -----: | ------------------------------------------- | ------------------- |
| 100.0% |     84 | `bpf_trace_run4 ([kernel])`                 | `<unknown>`         |
| 100.0% |     84 | `__schedule ([kernel])`                     | `<unknown>`         |
| 100.0% |     84 | `schedule ([kernel])`                       | `<unknown>`         |
| 100.0% |     84 | `futex_wait_queue ([kernel])`               | `<unknown>`         |
| 100.0% |     84 | `__futex_wait ([kernel])`                   | `<unknown>`         |
| 100.0% |     84 | `futex_wait ([kernel])`                     | `<unknown>`         |
| 100.0% |     84 | `do_futex ([kernel])`                       | `<unknown>`         |
| 100.0% |     84 | `__x64_sys_futex ([kernel])`                | `<unknown>`         |
| 100.0% |     84 | `do_syscall_64 ([kernel])`                  | `<unknown>`         |
| 100.0% |     84 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>`         |
| 100.0% |     84 | `unknown (libc.so.6)`                       | `<unknown>`         |
| 100.0% |     84 | `pthread_cond_wait (libc.so.6)`             | `<unknown>`         |
|  90.5% |     76 | `POOL_thread`                               | `pool.c`            |
|   9.5% |      8 | `FIO_compressFilename_srcFile`              | `fileio.c`          |
|   9.5% |      8 | `FIO_compressFilename`                      | `fileio.c`          |
|   9.5% |      8 | `main`                                      | `zstdcli.c`         |
|   9.5% |      8 | `__libc_start_main (libc.so.6)`             | `<unknown>`         |
|   9.5% |      8 | `_start (zstd)`                             | `<unknown>`         |
|   7.1% |      6 | `ZSTDMT_compressStream_generic`             | `zstdmt_compress.c` |
|   7.1% |      6 | `ZSTD_compressStream2`                      | `zstd_compress.c`   |

#### Categories

##### Kernel

|      % | Sleeps | Function                                    | Location    |
| -----: | -----: | ------------------------------------------- | ----------- |
| 100.0% |     84 | `bpf_trace_run4 ([kernel])`                 | `<unknown>` |
| 100.0% |     84 | `__schedule ([kernel])`                     | `<unknown>` |
| 100.0% |     84 | `schedule ([kernel])`                       | `<unknown>` |
| 100.0% |     84 | `futex_wait_queue ([kernel])`               | `<unknown>` |
| 100.0% |     84 | `__futex_wait ([kernel])`                   | `<unknown>` |
| 100.0% |     84 | `futex_wait ([kernel])`                     | `<unknown>` |
| 100.0% |     84 | `do_futex ([kernel])`                       | `<unknown>` |
| 100.0% |     84 | `__x64_sys_futex ([kernel])`                | `<unknown>` |
| 100.0% |     84 | `do_syscall_64 ([kernel])`                  | `<unknown>` |
| 100.0% |     84 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total sleeps. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                      | Location    |
| -----: | -----: | --------------------------- | ----------- |
| 100.0% |     84 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |     84 | `__schedule ([kernel])` | `<unknown>` |

##### `futex_wait_queue ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |     84 | `schedule ([kernel])` | `<unknown>` |

##### `__futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                        | Location    |
| -----: | -----: | ----------------------------- | ----------- |
| 100.0% |     84 | `futex_wait_queue ([kernel])` | `<unknown>` |

##### `futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                    | Location    |
| -----: | -----: | ------------------------- | ----------- |
| 100.0% |     84 | `__futex_wait ([kernel])` | `<unknown>` |

##### `do_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                  | Location    |
| -----: | -----: | ----------------------- | ----------- |
| 100.0% |     84 | `futex_wait ([kernel])` | `<unknown>` |

##### `__x64_sys_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |     84 | `do_futex ([kernel])` | `<unknown>` |

##### `do_syscall_64 ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                       | Location    |
| -----: | -----: | ---------------------------- | ----------- |
| 100.0% |     84 | `__x64_sys_futex ([kernel])` | `<unknown>` |

##### `entry_SYSCALL_64_after_hwframe ([kernel])` (`<unknown>`)

|      % | Sleeps | Callee                     | Location    |
| -----: | -----: | -------------------------- | ----------- |
| 100.0% |     84 | `do_syscall_64 ([kernel])` | `<unknown>` |

##### `unknown (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Callee                                      | Location    |
| -----: | -----: | ------------------------------------------- | ----------- |
| 100.0% |     84 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>` |
|  90.5% |     76 | `POOL_thread`                               | `pool.c`    |
|  90.5% |     76 | `unknown (libc.so.6)`                       | `<unknown>` |
|   9.5% |      8 | `main`                                      | `zstdcli.c` |

##### `pthread_cond_wait (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |     84 | `unknown (libc.so.6)` | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|      % | Sleeps | Callee                          | Location    |
| -----: | -----: | ------------------------------- | ----------- |
| 100.0% |     76 | `pthread_cond_wait (libc.so.6)` | `<unknown>` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|     % | Sleeps | Callee                 | Location           |
| ----: | -----: | ---------------------- | ------------------ |
| 75.0% |      6 | `ZSTD_compressStream2` | `zstd_compress.c`  |
| 25.0% |      2 | `AIO_ReadPool_setFile` | `fileio_asyncio.c` |

##### `FIO_compressFilename` (`fileio.c`)

|      % | Sleeps | Callee                         | Location   |
| -----: | -----: | ------------------------------ | ---------- |
| 100.0% |      8 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `main` (`zstdcli.c`)

|      % | Sleeps | Callee                 | Location   |
| -----: | -----: | ---------------------- | ---------- |
| 100.0% |      8 | `FIO_compressFilename` | `fileio.c` |

##### `__libc_start_main (libc.so.6)` (`<unknown>`)

|      % | Sleeps | Callee                | Location    |
| -----: | -----: | --------------------- | ----------- |
| 100.0% |      8 | `unknown (libc.so.6)` | `<unknown>` |

##### `_start (zstd)` (`<unknown>`)

|      % | Sleeps | Callee                          | Location    |
| -----: | -----: | ------------------------------- | ----------- |
| 100.0% |      8 | `__libc_start_main (libc.so.6)` | `<unknown>` |

##### `ZSTDMT_compressStream_generic` (`zstdmt_compress.c`)

|      % | Sleeps | Callee                          | Location    |
| -----: | -----: | ------------------------------- | ----------- |
| 100.0% |      6 | `pthread_cond_wait (libc.so.6)` | `<unknown>` |

##### `ZSTD_compressStream2` (`zstd_compress.c`)

|      % | Sleeps | Callee                          | Location            |
| -----: | -----: | ------------------------------- | ------------------- |
| 100.0% |      6 | `ZSTDMT_compressStream_generic` | `zstdmt_compress.c` |

## Hottest call stacks

Call stacks ranked by interruptible sleeps entered in their leaf frame.

|     % | Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | -----: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 90.5% |     76 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_wait_queue ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__x64_sys_futex ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                     |
|  7.1% |      6 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_wait_queue ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__x64_sys_futex ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `ZSTDMT_compressStream_generic` (`zstdmt_compress.c`) ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)` |
|  2.4% |      2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_wait_queue ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__x64_sys_futex ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_add` (`pool.c`) ← `AIO_ReadPool_setFile` (`fileio_asyncio.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                                |

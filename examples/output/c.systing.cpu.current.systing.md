# CPU profile

Took 12.08s over 12,080 samples (1.0ms per sample).

| Category |     % |    Time | Samples |
| -------- | ----: | ------: | ------: |
| ours     | 90.0% |  10.87s |  10,877 |
| kernel   |  7.6% | 923.0ms |     923 |
| native   |  2.3% | 280.0ms |     280 |

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

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `unknown (libc.so.6)` (`<unknown>`)

|     % |    Time | Samples | Callee                                      | Location    |
| ----: | ------: | ------: | ------------------------------------------- | ----------- |
| 98.9% |  11.91s |  11,912 | `unknown (libc.so.6)`                       | `<unknown>` |
| 98.8% |  11.90s |  11,906 | `POOL_thread`                               | `pool.c`    |
|  6.8% | 814.0ms |     814 | `asm_exc_page_fault ([kernel])`             | `<unknown>` |
|  1.2% | 141.0ms |     141 | `main`                                      | `zstdcli.c` |
| <0.1% |   2.0ms |       2 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>` |

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

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame. `…` stands for frames the entry filter hides.

Common call stack: `unknown (libc.so.6)`

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 63.9% |   7.71s |   7,716 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                             |
| 16.5% |   1.99s |   1,998 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                               |
|  2.5% | 299.0ms |     299 | `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                         |
|  2.1% | 259.0ms |     259 | `ZSTD_litLengthPrice` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                   |
|  1.9% | 233.0ms |     233 | `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                        |
|  1.6% | 198.0ms |     198 | `alloc_pages_mpol_noprof ([kernel])` ← `folio_alloc_mpol_noprof ([kernel])` ← `vma_alloc_folio_noprof ([kernel])` ← `do_anonymous_page ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` |
|  1.0% | 126.0ms |     126 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)`                                                                                                                                                                                                                                             |
|  1.0% | 117.0ms |     117 | `do_anonymous_page ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)`                                                                                                                     |
|  0.9% | 113.0ms |     113 | `ZSTD_rawLiteralsCost` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                  |
|  0.8% |  93.0ms |      93 | `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                     |
|  0.7% |  82.0ms |      82 | `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)`                                                                                                                                                                                                                      |
|  0.6% |  67.0ms |      67 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                         |
|  0.5% |  64.0ms |      64 | `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                        |
|  0.5% |  64.0ms |      64 | `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)`                                                                                                                                                      |
|  0.5% |  58.0ms |      58 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressContinue_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                               |
|  0.4% |  48.0ms |      48 | `handle_mm_fault ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)`                                                                                                                                                                                       |
|  0.3% |  40.0ms |      40 | `unknown (libc.so.6)` ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`)                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.2% |  30.0ms |      30 | `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                      |
|  0.2% |  25.0ms |      25 | `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← … ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                      |
|  0.2% |  24.0ms |      24 | `alloc_pages_mpol_noprof ([kernel])` ← `folio_alloc_mpol_noprof ([kernel])` ← `vma_alloc_folio_noprof ([kernel])` ← `do_anonymous_page ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`)                                                                                  |

# Uninterruptible sleep profile

Slept 71 times over 71 samples (1 time per sample).

| Category |      % | Sleeps | Samples |
| -------- | -----: | -----: | ------: |
| kernel   | 100.0% |     71 |      71 |

## Hottest functions

### Self sleeps

Functions ranked by uninterruptible sleeps entered directly in the function body, excluding callees.

|      % | Sleeps | Samples | Function                    | Location    |
| -----: | -----: | ------: | --------------------------- | ----------- |
| 100.0% |     71 |      71 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self sleeps. Inlining can make caller attribution imprecise.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Caller                  | Location    |
| -----: | -----: | ------: | ----------------------- | ----------- |
| 100.0% |     71 |      71 | `__schedule ([kernel])` | `<unknown>` |

### Total sleeps

Functions ranked by total uninterruptible sleeps entered in the function and all its callees.

|      % | Sleeps | Samples | Function                                       | Location    |
| -----: | -----: | ------: | ---------------------------------------------- | ----------- |
| 100.0% |     71 |      71 | `bpf_trace_run4 ([kernel])`                    | `<unknown>` |
| 100.0% |     71 |      71 | `__schedule ([kernel])`                        | `<unknown>` |
| 100.0% |     71 |      71 | `schedule ([kernel])`                          | `<unknown>` |
|  87.3% |     62 |      62 | `do_syscall_64 ([kernel])`                     | `<unknown>` |
|  87.3% |     62 |      62 | `entry_SYSCALL_64_after_hwframe ([kernel])`    | `<unknown>` |
|  78.9% |     56 |      56 | `p9_client_rpc ([kernel])`                     | `<unknown>` |
|  59.2% |     42 |      42 | `path_openat ([kernel])`                       | `<unknown>` |
|  59.2% |     42 |      42 | `do_filp_open ([kernel])`                      | `<unknown>` |
|  42.3% |     30 |      30 | `do_sys_openat2 ([kernel])`                    | `<unknown>` |
|  42.3% |     30 |      30 | `__x64_sys_openat ([kernel])`                  | `<unknown>` |
|  25.4% |     18 |      18 | `v9fs_vfs_lookup ([kernel])`                   | `<unknown>` |
|  25.4% |     18 |      18 | `link_path_walk.part.0.constprop.0 ([kernel])` | `<unknown>` |
|  22.5% |     16 |      16 | `p9_client_read_once ([kernel])`               | `<unknown>` |
|  22.5% |     16 |      16 | `p9_client_read ([kernel])`                    | `<unknown>` |
|  22.5% |     16 |      16 | `v9fs_issue_read ([kernel])`                   | `<unknown>` |
|  21.1% |     15 |      15 | `walk_component ([kernel])`                    | `<unknown>` |
|  19.7% |     14 |      14 | `p9_client_walk ([kernel])`                    | `<unknown>` |
|  19.7% |     14 |      14 | `load_elf_binary ([kernel])`                   | `<unknown>` |
|  19.7% |     14 |      14 | `bprm_execve ([kernel])`                       | `<unknown>` |
|  19.7% |     14 |      14 | `do_execveat_common ([kernel])`                | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total sleeps. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Callee                      | Location    |
| -----: | -----: | ------: | --------------------------- | ----------- |
| 100.0% |     71 |      71 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Callee                  | Location    |
| -----: | -----: | ------: | ----------------------- | ----------- |
| 100.0% |     71 |      71 | `__schedule ([kernel])` | `<unknown>` |

##### `do_syscall_64 ([kernel])` (`<unknown>`)

|     % | Sleeps | Samples | Callee                         | Location    |
| ----: | -----: | ------: | ------------------------------ | ----------- |
| 48.4% |     30 |      30 | `__x64_sys_openat ([kernel])`  | `<unknown>` |
| 22.6% |     14 |      14 | `__x64_sys_execve ([kernel])`  | `<unknown>` |
|  9.7% |      6 |       6 | `ksys_read ([kernel])`         | `<unknown>` |
|  6.5% |      4 |       4 | `__do_sys_newfstat ([kernel])` | `<unknown>` |
|  3.2% |      2 |       2 | `__x64_sys_pread64 ([kernel])` | `<unknown>` |

##### `entry_SYSCALL_64_after_hwframe ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Callee                     | Location    |
| -----: | -----: | ------: | -------------------------- | ----------- |
| 100.0% |     62 |      62 | `do_syscall_64 ([kernel])` | `<unknown>` |

##### `p9_client_rpc ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Callee                | Location    |
| -----: | -----: | ------: | --------------------- | ----------- |
| 100.0% |     56 |      56 | `schedule ([kernel])` | `<unknown>` |

##### `path_openat ([kernel])` (`<unknown>`)

|     % | Sleeps | Samples | Callee                                         | Location    |
| ----: | -----: | ------: | ---------------------------------------------- | ----------- |
| 42.9% |     18 |      18 | `link_path_walk.part.0.constprop.0 ([kernel])` | `<unknown>` |
| 23.8% |     10 |      10 | `vfs_open ([kernel])`                          | `<unknown>` |
| 16.7% |      7 |       7 | `lookup_open.isra.0 ([kernel])`                | `<unknown>` |
|  9.5% |      4 |       4 | `dput.part.0 ([kernel])`                       | `<unknown>` |
|  7.1% |      3 |       3 | `step_into ([kernel])`                         | `<unknown>` |

##### `do_filp_open ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Callee                   | Location    |
| -----: | -----: | ------: | ------------------------ | ----------- |
| 100.0% |     42 |      42 | `path_openat ([kernel])` | `<unknown>` |

##### `do_sys_openat2 ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Callee                    | Location    |
| -----: | -----: | ------: | ------------------------- | ----------- |
| 100.0% |     30 |      30 | `do_filp_open ([kernel])` | `<unknown>` |

##### `__x64_sys_openat ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Callee                      | Location    |
| -----: | -----: | ------: | --------------------------- | ----------- |
| 100.0% |     30 |      30 | `do_sys_openat2 ([kernel])` | `<unknown>` |

##### `v9fs_vfs_lookup ([kernel])` (`<unknown>`)

|     % | Sleeps | Samples | Callee                                | Location    |
| ----: | -----: | ------: | ------------------------------------- | ----------- |
| 50.0% |      9 |       9 | `p9_client_walk ([kernel])`           | `<unknown>` |
| 50.0% |      9 |       9 | `v9fs_inode_from_fid_dotl ([kernel])` | `<unknown>` |

##### `link_path_walk.part.0.constprop.0 ([kernel])` (`<unknown>`)

|     % | Sleeps | Samples | Callee                      | Location    |
| ----: | -----: | ------: | --------------------------- | ----------- |
| 77.8% |     14 |      14 | `walk_component ([kernel])` | `<unknown>` |
| 22.2% |      4 |       4 | `step_into ([kernel])`      | `<unknown>` |

##### `p9_client_read_once ([kernel])` (`<unknown>`)

|     % | Sleeps | Samples | Callee                                    | Location    |
| ----: | -----: | ------: | ----------------------------------------- | ----------- |
| 56.3% |      9 |       9 | `p9_client_zc_rpc.constprop.0 ([kernel])` | `<unknown>` |
| 43.8% |      7 |       7 | `p9_client_rpc ([kernel])`                | `<unknown>` |

##### `p9_client_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Callee                           | Location    |
| -----: | -----: | ------: | -------------------------------- | ----------- |
| 100.0% |     16 |      16 | `p9_client_read_once ([kernel])` | `<unknown>` |

##### `v9fs_issue_read ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Callee                      | Location    |
| -----: | -----: | ------: | --------------------------- | ----------- |
| 100.0% |     16 |      16 | `p9_client_read ([kernel])` | `<unknown>` |

##### `walk_component ([kernel])` (`<unknown>`)

|     % | Sleeps | Samples | Callee                     | Location    |
| ----: | -----: | ------: | -------------------------- | ----------- |
| 73.3% |     11 |      11 | `__lookup_slow ([kernel])` | `<unknown>` |
| 26.7% |      4 |       4 | `dput.part.0 ([kernel])`   | `<unknown>` |

##### `p9_client_walk ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Callee                     | Location    |
| -----: | -----: | ------: | -------------------------- | ----------- |
| 100.0% |     14 |      14 | `p9_client_rpc ([kernel])` | `<unknown>` |

##### `load_elf_binary ([kernel])` (`<unknown>`)

|     % | Sleeps | Samples | Callee                      | Location    |
| ----: | -----: | ------: | --------------------------- | ----------- |
| 85.7% |     12 |      12 | `open_exec ([kernel])`      | `<unknown>` |
|  7.1% |      1 |       1 | `__kernel_read ([kernel])`  | `<unknown>` |
|  7.1% |      1 |       1 | `load_elf_phdrs ([kernel])` | `<unknown>` |

##### `bprm_execve ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Callee                       | Location    |
| -----: | -----: | ------: | ---------------------------- | ----------- |
| 100.0% |     14 |      14 | `load_elf_binary ([kernel])` | `<unknown>` |

##### `do_execveat_common ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Callee                   | Location    |
| -----: | -----: | ------: | ------------------------ | ----------- |
| 100.0% |     14 |      14 | `bprm_execve ([kernel])` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by uninterruptible sleeps entered in their leaf frame. `…` stands for frames the entry filter hides.

|     % | Sleeps | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 12.7% |      9 |       9 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_virtio_zc_request ([kernel])` ← `p9_client_zc_rpc.constprop.0 ([kernel])` ← `p9_client_read_once ([kernel])` ← `p9_client_read ([kernel])` ← `v9fs_issue_read ([kernel])` ← `netfs_read_to_pagecache ([kernel])` ← `netfs_read_folio ([kernel])` ← `filemap_read_folio ([kernel])` ← `filemap_fault ([kernel])` ← `__do_fault ([kernel])` ← `do_fault ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])`                                                        |
|  5.6% |      4 |       4 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_getattr_dotl ([kernel])` ← `v9fs_vfs_getattr_dotl ([kernel])` ← `vfs_fstat ([kernel])` ← `__do_sys_newfstat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])`                                                                                                                                                                                                                                                                                                                                                     |
|  5.6% |      4 |       4 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_walk ([kernel])` ← `v9fs_file_open ([kernel])` ← `do_dentry_open ([kernel])` ← `vfs_open ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])`                                                                                                                                                                                                                                                   |
|  5.6% |      4 |       4 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_open ([kernel])` ← `v9fs_file_open ([kernel])` ← `do_dentry_open ([kernel])` ← `vfs_open ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])`                                                                                                                                                                                                                                                   |
|  4.2% |      3 |       3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_walk ([kernel])` ← `v9fs_vfs_lookup ([kernel])` ← `__lookup_slow ([kernel])` ← `walk_component ([kernel])` ← `link_path_walk.part.0.constprop.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])`                                                                                                                                                                                            |
|  4.2% |      3 |       3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_getattr_dotl ([kernel])` ← `v9fs_inode_from_fid_dotl ([kernel])` ← `v9fs_vfs_lookup ([kernel])` ← `__lookup_slow ([kernel])` ← `walk_component ([kernel])` ← `link_path_walk.part.0.constprop.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])`                                                                                                                                            |
|  4.2% |      3 |       3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_readlink ([kernel])` ← `v9fs_vfs_get_link_dotl ([kernel])` ← `step_into ([kernel])` ← `link_path_walk.part.0.constprop.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])`                                                                                                                                                                                                                   |
|  4.2% |      3 |       3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_clunk ([kernel])` ← `v9fs_dentry_release ([kernel])` ← `__dentry_kill ([kernel])` ← `dput.part.0 ([kernel])` ← `walk_component ([kernel])` ← `link_path_walk.part.0.constprop.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])`                                                                                                                                                            |
|  4.2% |      3 |       3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_walk ([kernel])` ← `v9fs_vfs_lookup ([kernel])` ← `v9fs_vfs_atomic_open_dotl ([kernel])` ← `lookup_open.isra.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])`                                                                                                                                                                                                                             |
|  4.2% |      3 |       3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_getattr_dotl ([kernel])` ← `v9fs_inode_from_fid_dotl ([kernel])` ← `v9fs_vfs_lookup ([kernel])` ← `v9fs_vfs_atomic_open_dotl ([kernel])` ← `lookup_open.isra.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])`                                                                                                                                                                             |
|  4.2% |      3 |       3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_read_once ([kernel])` ← `p9_client_read ([kernel])` ← `v9fs_issue_read ([kernel])` ← `netfs_unbuffered_read_iter_locked ([kernel])` ← `netfs_unbuffered_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])`                                                                                                                                                                                                                                              |
|  4.2% |      3 |       3 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `schedule_preempt_disabled ([kernel])` ← `rwsem_down_read_slowpath ([kernel])` ← `down_read_killable ([kernel])` ← `lock_mm_and_find_vma ([kernel])` ← `do_user_addr_fault ([kernel])` ← `exc_page_fault ([kernel])` ← `asm_exc_page_fault ([kernel])` ← `_copy_to_iter ([kernel])` ← `copy_page_to_iter ([kernel])` ← `shmem_file_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← … ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) |
|  2.8% |      2 |       2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_readlink ([kernel])` ← `v9fs_vfs_get_link_dotl ([kernel])` ← `step_into ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])`                                                                                                                                                                                                                                                                    |
|  2.8% |      2 |       2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_clunk ([kernel])` ← `v9fs_dentry_release ([kernel])` ← `__dentry_kill ([kernel])` ← `dput.part.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_sys_openat2 ([kernel])` ← `__x64_sys_openat ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])`                                                                                                                                                                                                                                           |
|  2.8% |      2 |       2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_walk ([kernel])` ← `v9fs_vfs_lookup ([kernel])` ← `__lookup_slow ([kernel])` ← `walk_component ([kernel])` ← `link_path_walk.part.0.constprop.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_open_execat ([kernel])` ← `open_exec ([kernel])` ← `load_elf_binary ([kernel])` ← `bprm_execve ([kernel])` ← `do_execveat_common ([kernel])` ← `__x64_sys_execve ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])`                                                                       |
|  2.8% |      2 |       2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_getattr_dotl ([kernel])` ← `v9fs_inode_from_fid_dotl ([kernel])` ← `v9fs_vfs_lookup ([kernel])` ← `__lookup_slow ([kernel])` ← `walk_component ([kernel])` ← `link_path_walk.part.0.constprop.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_open_execat ([kernel])` ← `open_exec ([kernel])` ← `load_elf_binary ([kernel])` ← `bprm_execve ([kernel])` ← `do_execveat_common ([kernel])` ← `__x64_sys_execve ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])`                       |
|  2.8% |      2 |       2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_clunk ([kernel])` ← `v9fs_dentry_release ([kernel])` ← `__dentry_kill ([kernel])` ← `dput.part.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_open_execat ([kernel])` ← `open_exec ([kernel])` ← `load_elf_binary ([kernel])` ← `bprm_execve ([kernel])` ← `do_execveat_common ([kernel])` ← `__x64_sys_execve ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])`                                                                                                                      |
|  2.8% |      2 |       2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_read_once ([kernel])` ← `p9_client_read ([kernel])` ← `v9fs_issue_read ([kernel])` ← `netfs_unbuffered_read_iter_locked ([kernel])` ← `netfs_unbuffered_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `__x64_sys_pread64 ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])`                                                                                                                                                                                                                                      |
|  2.8% |      2 |       2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `schedule_preempt_disabled ([kernel])` ← `rwsem_down_write_slowpath ([kernel])` ← `down_write_killable ([kernel])` ← `do_mprotect_pkey ([kernel])` ← `__x64_sys_mprotect ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← `__mprotect (libc.so.6)` ← `POOL_create_advanced` (`pool.c`) ← `ZSTDMT_createCCtx_advanced` (`zstdmt_compress.c`) ← `ZSTD_CCtx_init_compressStream2` (`zstd_compress.c`) ← `ZSTD_compressStream2` ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`)                              |
|  1.4% |      1 |       1 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `p9_client_rpc ([kernel])` ← `p9_client_readlink ([kernel])` ← `v9fs_vfs_get_link_dotl ([kernel])` ← `step_into ([kernel])` ← `link_path_walk.part.0.constprop.0 ([kernel])` ← `path_openat ([kernel])` ← `do_filp_open ([kernel])` ← `do_open_execat ([kernel])` ← `open_exec ([kernel])` ← `load_elf_binary ([kernel])` ← `bprm_execve ([kernel])` ← `do_execveat_common ([kernel])` ← `__x64_sys_execve ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])`                                                                                              |

# Interruptible sleep profile

Slept 87 times over 87 samples (1 time per sample).

| Category |      % | Sleeps | Samples |
| -------- | -----: | -----: | ------: |
| kernel   | 100.0% |     87 |      87 |

## Hottest functions

### Self sleeps

Functions ranked by interruptible sleeps entered directly in the function body, excluding callees.

|      % | Sleeps | Samples | Function                    | Location    |
| -----: | -----: | ------: | --------------------------- | ----------- |
| 100.0% |     87 |      87 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self sleeps. Inlining can make caller attribution imprecise.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Caller                  | Location    |
| -----: | -----: | ------: | ----------------------- | ----------- |
| 100.0% |     87 |      87 | `__schedule ([kernel])` | `<unknown>` |

### Total sleeps

Functions ranked by total interruptible sleeps entered in the function and all its callees.

|      % | Sleeps | Samples | Function                                    | Location            |
| -----: | -----: | ------: | ------------------------------------------- | ------------------- |
| 100.0% |     87 |      87 | `bpf_trace_run4 ([kernel])`                 | `<unknown>`         |
| 100.0% |     87 |      87 | `__schedule ([kernel])`                     | `<unknown>`         |
| 100.0% |     87 |      87 | `schedule ([kernel])`                       | `<unknown>`         |
| 100.0% |     87 |      87 | `futex_wait_queue ([kernel])`               | `<unknown>`         |
| 100.0% |     87 |      87 | `__futex_wait ([kernel])`                   | `<unknown>`         |
| 100.0% |     87 |      87 | `futex_wait ([kernel])`                     | `<unknown>`         |
| 100.0% |     87 |      87 | `do_futex ([kernel])`                       | `<unknown>`         |
| 100.0% |     87 |      87 | `__x64_sys_futex ([kernel])`                | `<unknown>`         |
| 100.0% |     87 |      87 | `do_syscall_64 ([kernel])`                  | `<unknown>`         |
| 100.0% |     87 |      87 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>`         |
| 100.0% |     87 |      87 | `pthread_cond_wait (libc.so.6)`             | `<unknown>`         |
|  89.7% |     78 |      78 | `POOL_thread`                               | `pool.c`            |
|  10.3% |      9 |       9 | `FIO_compressFilename_srcFile`              | `fileio.c`          |
|  10.3% |      9 |       9 | `FIO_compressFilename`                      | `fileio.c`          |
|  10.3% |      9 |       9 | `main`                                      | `zstdcli.c`         |
|   8.0% |      7 |       7 | `ZSTDMT_compressStream_generic`             | `zstdmt_compress.c` |
|   8.0% |      7 |       7 | `ZSTD_compressStream2`                      | `zstd_compress.c`   |
|   2.3% |      2 |       2 | `POOL_add`                                  | `pool.c`            |
|   2.3% |      2 |       2 | `AIO_ReadPool_setFile`                      | `fileio_asyncio.c`  |

#### Callees

Callees ranked by contribution to each function's total sleeps. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `__schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Callee                      | Location    |
| -----: | -----: | ------: | --------------------------- | ----------- |
| 100.0% |     87 |      87 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Callee                  | Location    |
| -----: | -----: | ------: | ----------------------- | ----------- |
| 100.0% |     87 |      87 | `__schedule ([kernel])` | `<unknown>` |

##### `futex_wait_queue ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Callee                | Location    |
| -----: | -----: | ------: | --------------------- | ----------- |
| 100.0% |     87 |      87 | `schedule ([kernel])` | `<unknown>` |

##### `__futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Callee                        | Location    |
| -----: | -----: | ------: | ----------------------------- | ----------- |
| 100.0% |     87 |      87 | `futex_wait_queue ([kernel])` | `<unknown>` |

##### `futex_wait ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Callee                    | Location    |
| -----: | -----: | ------: | ------------------------- | ----------- |
| 100.0% |     87 |      87 | `__futex_wait ([kernel])` | `<unknown>` |

##### `do_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Callee                  | Location    |
| -----: | -----: | ------: | ----------------------- | ----------- |
| 100.0% |     87 |      87 | `futex_wait ([kernel])` | `<unknown>` |

##### `__x64_sys_futex ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Callee                | Location    |
| -----: | -----: | ------: | --------------------- | ----------- |
| 100.0% |     87 |      87 | `do_futex ([kernel])` | `<unknown>` |

##### `do_syscall_64 ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Callee                       | Location    |
| -----: | -----: | ------: | ---------------------------- | ----------- |
| 100.0% |     87 |      87 | `__x64_sys_futex ([kernel])` | `<unknown>` |

##### `entry_SYSCALL_64_after_hwframe ([kernel])` (`<unknown>`)

|      % | Sleeps | Samples | Callee                     | Location    |
| -----: | -----: | ------: | -------------------------- | ----------- |
| 100.0% |     87 |      87 | `do_syscall_64 ([kernel])` | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|      % | Sleeps | Samples | Callee                          | Location    |
| -----: | -----: | ------: | ------------------------------- | ----------- |
| 100.0% |     78 |      78 | `pthread_cond_wait (libc.so.6)` | `<unknown>` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|     % | Sleeps | Samples | Callee                 | Location           |
| ----: | -----: | ------: | ---------------------- | ------------------ |
| 77.8% |      7 |       7 | `ZSTD_compressStream2` | `zstd_compress.c`  |
| 22.2% |      2 |       2 | `AIO_ReadPool_setFile` | `fileio_asyncio.c` |

##### `FIO_compressFilename` (`fileio.c`)

|      % | Sleeps | Samples | Callee                         | Location   |
| -----: | -----: | ------: | ------------------------------ | ---------- |
| 100.0% |      9 |       9 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `main` (`zstdcli.c`)

|      % | Sleeps | Samples | Callee                 | Location   |
| -----: | -----: | ------: | ---------------------- | ---------- |
| 100.0% |      9 |       9 | `FIO_compressFilename` | `fileio.c` |

##### `ZSTDMT_compressStream_generic` (`zstdmt_compress.c`)

|      % | Sleeps | Samples | Callee                          | Location    |
| -----: | -----: | ------: | ------------------------------- | ----------- |
| 100.0% |      7 |       7 | `pthread_cond_wait (libc.so.6)` | `<unknown>` |

##### `ZSTD_compressStream2` (`zstd_compress.c`)

|      % | Sleeps | Samples | Callee                          | Location            |
| -----: | -----: | ------: | ------------------------------- | ------------------- |
| 100.0% |      7 |       7 | `ZSTDMT_compressStream_generic` | `zstdmt_compress.c` |

##### `POOL_add` (`pool.c`)

|      % | Sleeps | Samples | Callee                          | Location    |
| -----: | -----: | ------: | ------------------------------- | ----------- |
| 100.0% |      2 |       2 | `pthread_cond_wait (libc.so.6)` | `<unknown>` |

##### `AIO_ReadPool_setFile` (`fileio_asyncio.c`)

|      % | Sleeps | Samples | Callee     | Location |
| -----: | -----: | ------: | ---------- | -------- |
| 100.0% |      2 |       2 | `POOL_add` | `pool.c` |

## Hottest call stacks

Call stacks ranked by interruptible sleeps entered in their leaf frame. `…` stands for frames the entry filter hides.

|     % | Sleeps | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 89.7% |     78 |      78 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_wait_queue ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__x64_sys_futex ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← … ← `pthread_cond_wait (libc.so.6)` ← `POOL_thread` (`pool.c`)                                                                                                                                                                         |
|  8.0% |      7 |       7 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_wait_queue ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__x64_sys_futex ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← … ← `pthread_cond_wait (libc.so.6)` ← `ZSTDMT_compressStream_generic` (`zstdmt_compress.c`) ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) |
|  2.3% |      2 |       2 | `bpf_trace_run4 ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_wait_queue ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__x64_sys_futex ([kernel])` ← `do_syscall_64 ([kernel])` ← `entry_SYSCALL_64_after_hwframe ([kernel])` ← … ← `pthread_cond_wait (libc.so.6)` ← `POOL_add` (`pool.c`) ← `AIO_ReadPool_setFile` (`fileio_asyncio.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`)                                |

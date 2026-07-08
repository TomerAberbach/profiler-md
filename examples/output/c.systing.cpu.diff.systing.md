# CPU profile diff

Took 12.09s → 12.08s (-12.00ms, -0.1%) over 12,092 samples → 12,080 samples (1.0ms per sample).

| Category | Change |    Delta |             % |              Time |         Samples |
| -------- | -----: | -------: | ------------: | ----------------: | --------------: |
| ours     |  -0.3% | -33.00ms | 90.2% → 90.0% |   10.91s → 10.87s | 10,910 → 10,877 |
| kernel   |  -1.8% | -17.00ms |   7.8% → 7.6% | 940.0ms → 923.0ms |       940 → 923 |
| native   | +15.7% | +38.00ms |   2.0% → 2.3% | 242.0ms → 280.0ms |       242 → 280 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |     Delta |             % |              Time |       Samples | Function                                       | Location         |
| ------: | --------: | ------------: | ----------------: | ------------: | ---------------------------------------------- | ---------------- |
|  +16.8% | +295.00ms | 14.6% → 17.0% |     1.76s → 2.05s | 1,761 → 2,056 | `ZSTD_compressBlock_opt2`                      | `zstd_opt.c`     |
|  +51.0% | +106.00ms |   1.7% → 2.6% | 208.0ms → 314.0ms |     208 → 314 | `ZSTD_insertAndFindFirstIndexHash3`            | `zstd_opt.c`     |
|  +14.1% |  +34.00ms |   2.0% → 2.3% | 241.0ms → 275.0ms |     241 → 275 | `unknown (libc.so.6)`                          | `<unknown>`      |
|  +13.8% |  +33.00ms |   2.0% → 2.3% | 240.0ms → 273.0ms |     240 → 273 | `ZSTD_litLengthPrice`                          | `zstd_opt.c`     |
|  +26.5% |  +13.00ms |   0.4% → 0.5% |   49.0ms → 62.0ms |       49 → 62 | `handle_mm_fault ([kernel])`                   | `<unknown>`      |
|   +6.4% |   +7.00ms |   0.9% → 1.0% | 110.0ms → 117.0ms |     110 → 117 | `ZSTD_rawLiteralsCost`                         | `zstd_opt.c`     |
| +233.3% |   +7.00ms |  <0.1% → 0.1% |    3.0ms → 10.0ms |        3 → 10 | `HUF_buildCTable_wksp`                         | `huf_compress.c` |
|  +85.7% |   +6.00ms |          0.1% |    7.0ms → 13.0ms |        7 → 13 | `count_memcg_events_mm.constprop.0 ([kernel])` | `<unknown>`      |
|  +45.5% |   +5.00ms |          0.1% |   11.0ms → 16.0ms |       11 → 16 | `HIST_count_parallel_wksp`                     | `hist.c`         |
| +500.0% |   +5.00ms |         <0.1% |     1.0ms → 6.0ms |         1 → 6 | `FSE_buildCTable_wksp`                         | `fse_compress.c` |
|     new |   +5.00ms |  0.0% → <0.1% |       0ms → 5.0ms |         0 → 5 | `FSE_normalizeCount`                           | `fse_compress.c` |
|  +19.0% |   +4.00ms |          0.2% |   21.0ms → 25.0ms |       21 → 25 | `vfs_read ([kernel])`                          | `<unknown>`      |
|   +5.9% |   +4.00ms |          0.6% |   68.0ms → 72.0ms |       68 → 72 | `exc_page_fault ([kernel])`                    | `<unknown>`      |
|     new |   +4.00ms |  0.0% → <0.1% |       0ms → 4.0ms |         0 → 4 | `handle_softirqs ([kernel])`                   | `<unknown>`      |
|  +18.8% |   +3.00ms |   0.1% → 0.2% |   16.0ms → 19.0ms |       16 → 19 | `folio_alloc_mpol_noprof ([kernel])`           | `<unknown>`      |
|   +5.6% |   +2.00ms |          0.3% |   36.0ms → 38.0ms |       36 → 38 | `asm_exc_page_fault ([kernel])`                | `<unknown>`      |
|     new |   +2.00ms |  0.0% → <0.1% |       0ms → 2.0ms |         0 → 2 | `do_fault ([kernel])`                          | `<unknown>`      |
|  +18.2% |   +2.00ms |          0.1% |   11.0ms → 13.0ms |       11 → 13 | `vma_alloc_folio_noprof ([kernel])`            | `<unknown>`      |
|   +1.6% |   +2.00ms |          1.1% | 128.0ms → 130.0ms |     128 → 130 | `do_anonymous_page ([kernel])`                 | `<unknown>`      |
| +100.0% |   +2.00ms |         <0.1% |     2.0ms → 4.0ms |         2 → 4 | `futex_wake ([kernel])`                        | `<unknown>`      |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |     Delta |             % |              Time |       Samples | Function                                | Location                    |
| ------: | --------: | ------------: | ----------------: | ------------: | --------------------------------------- | --------------------------- |
|   -5.4% | -455.00ms | 69.2% → 65.5% |     8.36s → 7.91s | 8,369 → 7,914 | `ZSTD_btGetAllMatches_noDict_3`         | `zstd_opt.c`                |
|  -16.1% |  -18.00ms |   0.9% → 0.8% |  112.0ms → 94.0ms |      112 → 94 | `ZSTD_optLdm_processMatchCandidate`     | `zstd_opt.c`                |
|   -4.9% |  -12.00ms |   2.0% → 1.9% | 246.0ms → 234.0ms |     246 → 234 | `alloc_pages_mpol_noprof ([kernel])`    | `<unknown>`                 |
|  -52.6% |  -10.00ms |   0.2% → 0.1% |    19.0ms → 9.0ms |        19 → 9 | `ZSTD_seqToCodes`                       | `zstd_compress.c`           |
|   -5.9% |   -6.00ms |          0.8% |  102.0ms → 96.0ms |      102 → 96 | `do_user_addr_fault ([kernel])`         | `<unknown>`                 |
|  -66.7% |   -6.00ms |  0.1% → <0.1% |     9.0ms → 3.0ms |         9 → 3 | `shmem_get_folio_gfp ([kernel])`        | `<unknown>`                 |
|  -62.5% |   -5.00ms |  0.1% → <0.1% |     8.0ms → 3.0ms |         8 → 3 | `ZSTD_estimateBlockSize_symbolType`     | `zstd_compress.c`           |
|  -17.4% |   -4.00ms |          0.2% |   23.0ms → 19.0ms |       23 → 19 | `ZSTD_encodeSequences_bmi2`             | `zstd_compress_sequences.c` |
| removed |   -3.00ms |  <0.1% → 0.0% |       3.0ms → 0ms |         3 → 0 | `ksys_read ([kernel])`                  | `<unknown>`                 |
|   -4.1% |   -3.00ms |          0.6% |   74.0ms → 71.0ms |       74 → 71 | `__handle_mm_fault ([kernel])`          | `<unknown>`                 |
|  -10.3% |   -3.00ms |          0.2% |   29.0ms → 26.0ms |       29 → 26 | `__alloc_pages_noprof ([kernel])`       | `<unknown>`                 |
|  -15.8% |   -3.00ms |   0.2% → 0.1% |   19.0ms → 16.0ms |       19 → 16 | `__mem_cgroup_charge ([kernel])`        | `<unknown>`                 |
| removed |   -3.00ms |  <0.1% → 0.0% |       3.0ms → 0ms |         3 → 0 | `irq_exit_rcu ([kernel])`               | `<unknown>`                 |
|  -75.0% |   -3.00ms |         <0.1% |     4.0ms → 1.0ms |         4 → 1 | `irqentry_exit_to_user_mode ([kernel])` | `<unknown>`                 |
|  -42.9% |   -3.00ms |  0.1% → <0.1% |     7.0ms → 4.0ms |         7 → 4 | `shmem_file_read_iter ([kernel])`       | `<unknown>`                 |
|  -75.0% |   -3.00ms |         <0.1% |     4.0ms → 1.0ms |         4 → 1 | `filemap_get_entry ([kernel])`          | `<unknown>`                 |
| removed |   -2.00ms |  <0.1% → 0.0% |       2.0ms → 0ms |         2 → 0 | `do_syscall_64 ([kernel])`              | `<unknown>`                 |
| removed |   -2.00ms |  <0.1% → 0.0% |       2.0ms → 0ms |         2 → 0 | `__fput ([kernel])`                     | `<unknown>`                 |
| removed |   -2.00ms |  <0.1% → 0.0% |       2.0ms → 0ms |         2 → 0 | `path_lookupat ([kernel])`              | `<unknown>`                 |
| removed |   -2.00ms |  <0.1% → 0.0% |       2.0ms → 0ms |         2 → 0 | `v9fs_vfs_lookup ([kernel])`            | `<unknown>`                 |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |     Delta |             % |              Time |         Samples | Function                                       | Location                    |
| ------: | --------: | ------------: | ----------------: | --------------: | ---------------------------------------------- | --------------------------- |
|  +51.0% | +106.00ms |   1.7% → 2.6% | 208.0ms → 314.0ms |       208 → 314 | `ZSTD_insertAndFindFirstIndexHash3`            | `zstd_opt.c`                |
|   +6.1% |  +55.00ms |   7.5% → 7.9% | 901.0ms → 956.0ms |       901 → 956 | `ZSTD_resetCCtx_internal`                      | `zstd_compress.c`           |
|   +6.1% |  +55.00ms |   7.5% → 7.9% | 901.0ms → 956.0ms |       901 → 956 | `ZSTD_compressBegin_internal`                  | `zstd_compress.c`           |
|   +6.1% |  +55.00ms |   7.5% → 7.9% | 901.0ms → 956.0ms |       901 → 956 | `ZSTD_compressBegin_advanced_internal`         | `zstd_compress.c`           |
|  +13.8% |  +33.00ms |   2.0% → 2.3% | 240.0ms → 273.0ms |       240 → 273 | `ZSTD_litLengthPrice`                          | `zstd_opt.c`                |
|   +0.1% |  +14.00ms | 97.9% → 98.1% |   11.83s → 11.85s | 11,836 → 11,850 | `ZSTDMT_compressionJob`                        | `zstdmt_compress.c`         |
| +333.3% |  +10.00ms |  <0.1% → 0.1% |    3.0ms → 13.0ms |          3 → 13 | `HUF_optimalTableLog`                          | `huf_compress.c`            |
|   +6.4% |   +7.00ms |   0.9% → 1.0% | 110.0ms → 117.0ms |       110 → 117 | `ZSTD_rawLiteralsCost`                         | `zstd_opt.c`                |
| +233.3% |   +7.00ms |  <0.1% → 0.1% |    3.0ms → 10.0ms |          3 → 10 | `HUF_buildCTable_wksp`                         | `huf_compress.c`            |
|   +0.6% |   +5.00ms |   7.0% → 7.1% | 848.0ms → 853.0ms |       848 → 853 | `asm_exc_page_fault ([kernel])`                | `<unknown>`                 |
|  +62.5% |   +5.00ms |          0.1% |    8.0ms → 13.0ms |          8 → 13 | `count_memcg_events_mm.constprop.0 ([kernel])` | `<unknown>`                 |
|  +19.2% |   +5.00ms |   0.2% → 0.3% |   26.0ms → 31.0ms |         26 → 31 | `ZSTD_buildBlockEntropyStats`                  | `zstd_compress.c`           |
|  +45.5% |   +5.00ms |          0.1% |   11.0ms → 16.0ms |         11 → 16 | `HIST_count_parallel_wksp`                     | `hist.c`                    |
| +500.0% |   +5.00ms |         <0.1% |     1.0ms → 6.0ms |           1 → 6 | `FSE_buildCTable_wksp`                         | `fse_compress.c`            |
| +500.0% |   +5.00ms |         <0.1% |     1.0ms → 6.0ms |           1 → 6 | `HUF_writeCTable_wksp`                         | `huf_compress.c`            |
|     new |   +5.00ms |  0.0% → <0.1% |       0ms → 5.0ms |           0 → 5 | `handle_softirqs ([kernel])`                   | `<unknown>`                 |
|     new |   +5.00ms |  0.0% → <0.1% |       0ms → 5.0ms |           0 → 5 | `FSE_normalizeCount`                           | `fse_compress.c`            |
|     ~0% |   +4.00ms | 98.4% → 98.6% |            11.90s | 11,902 → 11,906 | `POOL_thread`                                  | `pool.c`                    |
| +400.0% |   +4.00ms |         <0.1% |     1.0ms → 5.0ms |           1 → 5 | `ZSTD_buildCTable`                             | `zstd_compress_sequences.c` |
|   +0.4% |   +3.00ms |          6.7% | 812.0ms → 815.0ms |       812 → 815 | `exc_page_fault ([kernel])`                    | `<unknown>`                 |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

| Change |     Delta |             % |              Time |         Samples | Function                                    | Location          |
| -----: | --------: | ------------: | ----------------: | --------------: | ------------------------------------------- | ----------------- |
|  -5.4% | -457.00ms | 69.4% → 65.7% |     8.38s → 7.93s |   8,389 → 7,932 | `ZSTD_btGetAllMatches_noDict_3`             | `zstd_opt.c`      |
|  -0.8% |  -79.00ms | 85.3% → 84.7% |   10.31s → 10.23s | 10,311 → 10,232 | `ZSTD_compressBlock_opt2`                   | `zstd_opt.c`      |
|  -0.4% |  -45.00ms | 89.7% → 89.4% |   10.84s → 10.79s | 10,844 → 10,799 | `ZSTD_buildSeqStore`                        | `zstd_compress.c` |
|  -0.4% |  -43.00ms | 90.4% → 90.1% |   10.92s → 10.88s | 10,929 → 10,886 | `ZSTD_compressContinue_internal`            | `zstd_compress.c` |
|  -0.4% |  -43.00ms | 90.4% → 90.1% |   10.92s → 10.88s | 10,929 → 10,886 | `ZSTD_compressContinue_public`              | `zstd_compress.c` |
| -13.8% |  -36.00ms |   2.2% → 1.9% | 261.0ms → 225.0ms |       261 → 225 | `ZSTD_compressBlock_btultra2`               | `zstd_opt.c`      |
| -16.1% |  -18.00ms |   0.9% → 0.8% |  112.0ms → 94.0ms |        112 → 94 | `ZSTD_optLdm_processMatchCandidate`         | `zstd_opt.c`      |
|  -3.0% |  -17.00ms |   4.7% → 4.5% | 564.0ms → 547.0ms |       564 → 547 | `__handle_mm_fault ([kernel])`              | `<unknown>`       |
|  -6.1% |  -17.00ms |   2.3% → 2.2% | 278.0ms → 261.0ms |       278 → 261 | `alloc_pages_mpol_noprof ([kernel])`        | `<unknown>`       |
| -16.3% |  -16.00ms |   0.8% → 0.7% |   98.0ms → 82.0ms |         98 → 82 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>`       |
|  -5.4% |  -16.00ms |   2.4% → 2.3% | 294.0ms → 278.0ms |       294 → 278 | `folio_alloc_mpol_noprof ([kernel])`        | `<unknown>`       |
| -15.6% |  -15.00ms |   0.8% → 0.7% |   96.0ms → 81.0ms |         96 → 81 | `do_syscall_64 ([kernel])`                  | `<unknown>`       |
|  -4.6% |  -14.00ms |   2.5% → 2.4% | 305.0ms → 291.0ms |       305 → 291 | `vma_alloc_folio_noprof ([kernel])`         | `<unknown>`       |
|  -8.4% |  -13.00ms |   1.3% → 1.2% | 154.0ms → 141.0ms |       154 → 141 | `main`                                      | `zstdcli.c`       |
|  -2.7% |  -13.00ms |   4.0% → 3.9% | 481.0ms → 468.0ms |       481 → 468 | `do_anonymous_page ([kernel])`              | `<unknown>`       |
|  -7.8% |  -12.00ms |   1.3% → 1.2% | 153.0ms → 141.0ms |       153 → 141 | `FIO_compressFilename`                      | `fileio.c`        |
|  -7.5% |  -11.00ms |   1.2% → 1.1% | 146.0ms → 135.0ms |       146 → 135 | `FIO_compressFilename_srcFile`              | `fileio.c`        |
|  -7.1% |  -10.00ms |   1.2% → 1.1% | 140.0ms → 130.0ms |       140 → 130 | `ZSTD_compressStream2`                      | `zstd_compress.c` |
| -50.0% |  -10.00ms |   0.2% → 0.1% |   20.0ms → 10.0ms |         20 → 10 | `ZSTD_seqToCodes`                           | `zstd_compress.c` |
| -26.3% |  -10.00ms |   0.3% → 0.2% |   38.0ms → 28.0ms |         38 → 28 | `shmem_file_read_iter ([kernel])`           | `<unknown>`       |

# Uninterruptible sleep profile diff

Slept 69 times → 71 times (+2 times, +2.9%) over 69 samples → 71 samples (1 time per sample).

| Category | Change | Delta |      % |  Sleeps | Samples |
| -------- | -----: | ----: | -----: | ------: | ------: |
| kernel   |  +2.9% |    +2 | 100.0% | 69 → 71 | 69 → 71 |

## Hottest functions

### Self sleeps

#### Regressions

Functions with the largest increase in uninterruptible sleeps entered directly in the function body, excluding callees.

| Change | Delta |      % |  Sleeps | Samples | Function                    | Location    |
| -----: | ----: | -----: | ------: | ------: | --------------------------- | ----------- |
|  +2.9% |    +2 | 100.0% | 69 → 71 | 69 → 71 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

### Total sleeps

#### Regressions

Functions with the largest increase in total uninterruptible sleeps entered in the function and all its callees.

|  Change | Delta |             % |  Sleeps | Samples | Function                                    | Location            |
| ------: | ----: | ------------: | ------: | ------: | ------------------------------------------- | ------------------- |
|   +2.9% |    +2 |        100.0% | 69 → 71 | 69 → 71 | `bpf_trace_run4 ([kernel])`                 | `<unknown>`         |
|   +2.9% |    +2 |        100.0% | 69 → 71 | 69 → 71 | `__schedule ([kernel])`                     | `<unknown>`         |
|   +2.9% |    +2 |        100.0% | 69 → 71 | 69 → 71 | `schedule ([kernel])`                       | `<unknown>`         |
|  +50.0% |    +2 |   5.8% → 8.5% |   4 → 6 |   4 → 6 | `schedule_preempt_disabled ([kernel])`      | `<unknown>`         |
| +200.0% |    +2 |   1.4% → 4.2% |   1 → 3 |   1 → 3 | `rwsem_down_write_slowpath ([kernel])`      | `<unknown>`         |
| +200.0% |    +2 |   1.4% → 4.2% |   1 → 3 |   1 → 3 | `down_write_killable ([kernel])`            | `<unknown>`         |
| +200.0% |    +2 |   1.4% → 4.2% |   1 → 3 |   1 → 3 | `POOL_create_advanced`                      | `pool.c`            |
| +200.0% |    +2 |   1.4% → 4.2% |   1 → 3 |   1 → 3 | `ZSTDMT_createCCtx_advanced`                | `zstdmt_compress.c` |
| +200.0% |    +2 |   1.4% → 4.2% |   1 → 3 |   1 → 3 | `ZSTD_CCtx_init_compressStream2`            | `zstd_compress.c`   |
| +200.0% |    +2 |   1.4% → 4.2% |   1 → 3 |   1 → 3 | `ZSTD_compressStream2`                      | `zstd_compress.c`   |
| +200.0% |    +2 |   1.4% → 4.2% |   1 → 3 |   1 → 3 | `FIO_compressFilename_srcFile`              | `fileio.c`          |
| +200.0% |    +2 |   1.4% → 4.2% |   1 → 3 |   1 → 3 | `FIO_compressFilename`                      | `fileio.c`          |
| +200.0% |    +2 |   1.4% → 4.2% |   1 → 3 |   1 → 3 | `main`                                      | `zstdcli.c`         |
|   +1.6% |    +1 | 88.4% → 87.3% | 61 → 62 | 61 → 62 | `do_syscall_64 ([kernel])`                  | `<unknown>`         |
|   +1.6% |    +1 | 88.4% → 87.3% | 61 → 62 | 61 → 62 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>`         |
|   +6.7% |    +1 | 21.7% → 22.5% | 15 → 16 | 15 → 16 | `p9_client_read_once ([kernel])`            | `<unknown>`         |
|   +6.7% |    +1 | 21.7% → 22.5% | 15 → 16 | 15 → 16 | `p9_client_read ([kernel])`                 | `<unknown>`         |
|   +6.7% |    +1 | 21.7% → 22.5% | 15 → 16 | 15 → 16 | `v9fs_issue_read ([kernel])`                | `<unknown>`         |
|  +12.5% |    +1 | 11.6% → 12.7% |   8 → 9 |   8 → 9 | `p9_virtio_zc_request ([kernel])`           | `<unknown>`         |
|  +12.5% |    +1 | 11.6% → 12.7% |   8 → 9 |   8 → 9 | `p9_client_zc_rpc.constprop.0 ([kernel])`   | `<unknown>`         |

#### Improvements

Functions with the largest decrease in total uninterruptible sleeps entered in the function and all its callees.

| Change | Delta |             % |  Sleeps | Samples | Function                               | Location    |
| -----: | ----: | ------------: | ------: | ------: | -------------------------------------- | ----------- |
|  -1.8% |    -1 | 82.6% → 78.9% | 57 → 56 | 57 → 56 | `p9_client_rpc ([kernel])`             | `<unknown>` |
|  -6.7% |    -1 | 21.7% → 19.7% | 15 → 14 | 15 → 14 | `p9_client_walk ([kernel])`            | `<unknown>` |
|  -5.3% |    -1 | 27.5% → 25.4% | 19 → 18 | 19 → 18 | `v9fs_vfs_lookup ([kernel])`           | `<unknown>` |
|  -2.3% |    -1 | 62.3% → 59.2% | 43 → 42 | 43 → 42 | `path_openat ([kernel])`               | `<unknown>` |
|  -2.3% |    -1 | 62.3% → 59.2% | 43 → 42 | 43 → 42 | `do_filp_open ([kernel])`              | `<unknown>` |
|  -7.7% |    -1 | 18.8% → 16.9% | 13 → 12 | 13 → 12 | `do_open_execat ([kernel])`            | `<unknown>` |
|  -7.7% |    -1 | 18.8% → 16.9% | 13 → 12 | 13 → 12 | `open_exec ([kernel])`                 | `<unknown>` |
|  -6.7% |    -1 | 21.7% → 19.7% | 15 → 14 | 15 → 14 | `load_elf_binary ([kernel])`           | `<unknown>` |
|  -6.7% |    -1 | 21.7% → 19.7% | 15 → 14 | 15 → 14 | `bprm_execve ([kernel])`               | `<unknown>` |
|  -6.7% |    -1 | 21.7% → 19.7% | 15 → 14 | 15 → 14 | `do_execveat_common ([kernel])`        | `<unknown>` |
|  -6.7% |    -1 | 21.7% → 19.7% | 15 → 14 | 15 → 14 | `__x64_sys_execve ([kernel])`          | `<unknown>` |
| -12.5% |    -1 |  11.6% → 9.9% |   8 → 7 |   8 → 7 | `v9fs_vfs_atomic_open_dotl ([kernel])` | `<unknown>` |
| -12.5% |    -1 |  11.6% → 9.9% |   8 → 7 |   8 → 7 | `lookup_open.isra.0 ([kernel])`        | `<unknown>` |

# Interruptible sleep profile diff

Slept 84 times → 87 times (+3 times, +3.6%) over 84 samples → 87 samples (1 time per sample).

| Category | Change | Delta |      % |  Sleeps | Samples |
| -------- | -----: | ----: | -----: | ------: | ------: |
| kernel   |  +3.6% |    +3 | 100.0% | 84 → 87 | 84 → 87 |

## Hottest functions

### Self sleeps

#### Regressions

Functions with the largest increase in interruptible sleeps entered directly in the function body, excluding callees.

| Change | Delta |      % |  Sleeps | Samples | Function                    | Location    |
| -----: | ----: | -----: | ------: | ------: | --------------------------- | ----------- |
|  +3.6% |    +3 | 100.0% | 84 → 87 | 84 → 87 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

### Total sleeps

#### Regressions

Functions with the largest increase in total interruptible sleeps entered in the function and all its callees.

| Change | Delta |             % |  Sleeps | Samples | Function                                    | Location            |
| -----: | ----: | ------------: | ------: | ------: | ------------------------------------------- | ------------------- |
|  +3.6% |    +3 |        100.0% | 84 → 87 | 84 → 87 | `bpf_trace_run4 ([kernel])`                 | `<unknown>`         |
|  +3.6% |    +3 |        100.0% | 84 → 87 | 84 → 87 | `__schedule ([kernel])`                     | `<unknown>`         |
|  +3.6% |    +3 |        100.0% | 84 → 87 | 84 → 87 | `schedule ([kernel])`                       | `<unknown>`         |
|  +3.6% |    +3 |        100.0% | 84 → 87 | 84 → 87 | `futex_wait_queue ([kernel])`               | `<unknown>`         |
|  +3.6% |    +3 |        100.0% | 84 → 87 | 84 → 87 | `__futex_wait ([kernel])`                   | `<unknown>`         |
|  +3.6% |    +3 |        100.0% | 84 → 87 | 84 → 87 | `futex_wait ([kernel])`                     | `<unknown>`         |
|  +3.6% |    +3 |        100.0% | 84 → 87 | 84 → 87 | `do_futex ([kernel])`                       | `<unknown>`         |
|  +3.6% |    +3 |        100.0% | 84 → 87 | 84 → 87 | `__x64_sys_futex ([kernel])`                | `<unknown>`         |
|  +3.6% |    +3 |        100.0% | 84 → 87 | 84 → 87 | `do_syscall_64 ([kernel])`                  | `<unknown>`         |
|  +3.6% |    +3 |        100.0% | 84 → 87 | 84 → 87 | `entry_SYSCALL_64_after_hwframe ([kernel])` | `<unknown>`         |
|  +3.6% |    +3 |        100.0% | 84 → 87 | 84 → 87 | `pthread_cond_wait (libc.so.6)`             | `<unknown>`         |
|  +2.6% |    +2 | 90.5% → 89.7% | 76 → 78 | 76 → 78 | `POOL_thread`                               | `pool.c`            |
| +12.5% |    +1 |  9.5% → 10.3% |   8 → 9 |   8 → 9 | `FIO_compressFilename_srcFile`              | `fileio.c`          |
| +12.5% |    +1 |  9.5% → 10.3% |   8 → 9 |   8 → 9 | `FIO_compressFilename`                      | `fileio.c`          |
| +12.5% |    +1 |  9.5% → 10.3% |   8 → 9 |   8 → 9 | `main`                                      | `zstdcli.c`         |
| +16.7% |    +1 |   7.1% → 8.0% |   6 → 7 |   6 → 7 | `ZSTDMT_compressStream_generic`             | `zstdmt_compress.c` |
| +16.7% |    +1 |   7.1% → 8.0% |   6 → 7 |   6 → 7 | `ZSTD_compressStream2`                      | `zstd_compress.c`   |

# CPU profile diff

Took 11.95s → 12s (+49.00ms, +0.4%) over 11,955 samples → 12,004 samples (1.0ms per sample).

| Category |  Change |    Delta |             % |            Time |         Samples |
| -------- | ------: | -------: | ------------: | --------------: | --------------: |
| Ours     |   +0.3% | +31.00ms | 99.8% → 99.7% | 11.93s → 11.96s | 11,933 → 11,964 |
| Kernel   | +209.1% | +23.00ms |   0.1% → 0.3% | 11.0ms → 34.0ms |         11 → 34 |
| Native   |  -45.5% |  -5.00ms |  0.1% → <0.1% |  11.0ms → 6.0ms |          11 → 6 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |            Time |         Samples | Function                                | Location            |
| ------: | -------: | -----------: | --------------: | --------------: | --------------------------------------- | ------------------- |
|   +0.5% | +46.00ms |        84.1% | 10.05s → 10.09s | 10,050 → 10,096 | `ZSTD_btGetAllMatches_noDict_3`         | `zstd_opt.c`        |
|  +50.0% | +13.00ms |  0.2% → 0.3% | 26.0ms → 39.0ms |         26 → 39 | `ZSTD_rawLiteralsCost`                  | `zstd_opt.c`        |
|     new |  +7.00ms |  0.0% → 0.1% |     0ms → 7.0ms |           0 → 7 | `handle_softirqs ([kernel])`            | `<unknown>`         |
| +200.0% |  +4.00ms |        <0.1% |   2.0ms → 6.0ms |           2 → 6 | `FSE_buildCTable_wksp`                  | `fse_compress.c`    |
|     new |  +4.00ms | 0.0% → <0.1% |     0ms → 4.0ms |           0 → 4 | `clear_page ([kernel])`                 | `<unknown>`         |
| +150.0% |  +3.00ms |        <0.1% |   2.0ms → 5.0ms |           2 → 5 | `ZSTD_estimateBlockSize_symbolType`     | `zstd_compress.c`   |
|     new |  +3.00ms | 0.0% → <0.1% |     0ms → 3.0ms |           0 → 3 | `__bpf_trace_softirq ([kernel])`        | `<unknown>`         |
|     new |  +2.00ms | 0.0% → <0.1% |     0ms → 2.0ms |           0 → 2 | `HUF_writeCTable_wksp`                  | `huf_compress.c`    |
|     new |  +2.00ms | 0.0% → <0.1% |     0ms → 2.0ms |           0 → 2 | `HIST_count_simple`                     | `hist.c`            |
|     new |  +2.00ms | 0.0% → <0.1% |     0ms → 2.0ms |           0 → 2 | `__run_timer_base ([kernel])`           | `<unknown>`         |
|     new |  +2.00ms | 0.0% → <0.1% |     0ms → 2.0ms |           0 → 2 | `bpf_trace_run1 ([kernel])`             | `<unknown>`         |
|     new |  +2.00ms | 0.0% → <0.1% |     0ms → 2.0ms |           0 → 2 | `sched_balance_domains ([kernel])`      | `<unknown>`         |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |           0 → 1 | `ZSTDMT_compressionJob`                 | `zstdmt_compress.c` |
|   +0.1% |  +1.00ms |        13.4% |           1.60s |   1,605 → 1,606 | `ZSTD_compressBlock_opt2`               | `zstd_opt.c`        |
|   +7.1% |  +1.00ms |         0.1% | 14.0ms → 15.0ms |         14 → 15 | `HIST_count_parallel_wksp`              | `hist.c`            |
|   +3.4% |  +1.00ms |         0.2% | 29.0ms → 30.0ms |         29 → 30 | `ZSTD_insertBt1`                        | `zstd_opt.c`        |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |           0 → 1 | `HUF_optimalTableLog`                   | `huf_compress.c`    |
|  +14.3% |  +1.00ms |         0.1% |   7.0ms → 8.0ms |           7 → 8 | `ZSTD_optLdm_processMatchCandidate`     | `zstd_opt.c`        |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |           0 → 1 | `futex_wake ([kernel])`                 | `<unknown>`         |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |           0 → 1 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>`         |

##### Ours

|  Change |    Delta |            % |            Time |         Samples | Function                            | Location            |
| ------: | -------: | -----------: | --------------: | --------------: | ----------------------------------- | ------------------- |
|   +0.5% | +46.00ms |        84.1% | 10.05s → 10.09s | 10,050 → 10,096 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c`        |
|  +50.0% | +13.00ms |  0.2% → 0.3% | 26.0ms → 39.0ms |         26 → 39 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c`        |
| +200.0% |  +4.00ms |        <0.1% |   2.0ms → 6.0ms |           2 → 6 | `FSE_buildCTable_wksp`              | `fse_compress.c`    |
| +150.0% |  +3.00ms |        <0.1% |   2.0ms → 5.0ms |           2 → 5 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c`   |
|     new |  +2.00ms | 0.0% → <0.1% |     0ms → 2.0ms |           0 → 2 | `HUF_writeCTable_wksp`              | `huf_compress.c`    |
|     new |  +2.00ms | 0.0% → <0.1% |     0ms → 2.0ms |           0 → 2 | `HIST_count_simple`                 | `hist.c`            |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |           0 → 1 | `ZSTDMT_compressionJob`             | `zstdmt_compress.c` |
|   +0.1% |  +1.00ms |        13.4% |           1.60s |   1,605 → 1,606 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c`        |
|   +7.1% |  +1.00ms |         0.1% | 14.0ms → 15.0ms |         14 → 15 | `HIST_count_parallel_wksp`          | `hist.c`            |
|   +3.4% |  +1.00ms |         0.2% | 29.0ms → 30.0ms |         29 → 30 | `ZSTD_insertBt1`                    | `zstd_opt.c`        |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |           0 → 1 | `HUF_optimalTableLog`               | `huf_compress.c`    |
|  +14.3% |  +1.00ms |         0.1% |   7.0ms → 8.0ms |           7 → 8 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c`        |
|     new |  +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |           0 → 1 | `AIO_IOPool_acquireJob`             | `fileio_asyncio.c`  |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |             Time |  Samples | Function                               | Location                    |
| ------: | -------: | -----------: | ---------------: | -------: | -------------------------------------- | --------------------------- |
|  -12.0% | -13.00ms |  0.9% → 0.8% | 108.0ms → 95.0ms | 108 → 95 | `ZSTD_litLengthPrice`                  | `zstd_opt.c`                |
|  -53.8% |  -7.00ms | 0.1% → <0.1% |   13.0ms → 6.0ms |   13 → 6 | `ZSTD_encodeSequences`                 | `zstd_compress_sequences.c` |
|  -28.0% |  -7.00ms |  0.2% → 0.1% |  25.0ms → 18.0ms |  25 → 18 | `ZSTD_insertAndFindFirstIndexHash3`    | `zstd_opt.c`                |
|  -45.5% |  -5.00ms | 0.1% → <0.1% |   11.0ms → 6.0ms |   11 → 6 | `unknown (libc.so.6)`                  | `<unknown>`                 |
|  -62.5% |  -5.00ms | 0.1% → <0.1% |    8.0ms → 3.0ms |    8 → 3 | `ZSTD_XXH64_update`                    | `xxhash.h`                  |
|  -18.2% |  -4.00ms |  0.2% → 0.1% |  22.0ms → 18.0ms |  22 → 18 | `ZSTD_updateStats`                     | `zstd_opt.c`                |
|  -42.9% |  -3.00ms | 0.1% → <0.1% |    7.0ms → 4.0ms |    7 → 4 | `ZSTD_seqToCodes`                      | `zstd_compress.c`           |
|  -50.0% |  -2.00ms |        <0.1% |    4.0ms → 2.0ms |    4 → 2 | `ZSTD_deriveSeqStoreChunk`             | `zstd_compress.c`           |
| removed |  -1.00ms | <0.1% → 0.0% |      1.0ms → 0ms |    1 → 0 | `HUF_estimateCompressedSize`           | `huf_compress.c`            |
| removed |  -1.00ms | <0.1% → 0.0% |      1.0ms → 0ms |    1 → 0 | `get_mem_cgroup_from_mm ([kernel])`    | `<unknown>`                 |
| removed |  -1.00ms | <0.1% → 0.0% |      1.0ms → 0ms |    1 → 0 | `ZSTD_buildSequencesStatistics`        | `zstd_compress.c`           |
|  -20.0% |  -1.00ms |        <0.1% |    5.0ms → 4.0ms |    5 → 4 | `HUF_buildCTable_wksp`                 | `huf_compress.c`            |
| removed |  -1.00ms | <0.1% → 0.0% |      1.0ms → 0ms |    1 → 0 | `FSE_optimalTableLog`                  | `fse_compress.c`            |
| removed |  -1.00ms | <0.1% → 0.0% |      1.0ms → 0ms |    1 → 0 | `try_to_wake_up ([kernel])`            | `<unknown>`                 |
| removed |  -1.00ms | <0.1% → 0.0% |      1.0ms → 0ms |    1 → 0 | `ZSTDMT_compressStream_generic`        | `zstdmt_compress.c`         |
| removed |  -1.00ms | <0.1% → 0.0% |      1.0ms → 0ms |    1 → 0 | `rwsem_down_write_slowpath ([kernel])` | `<unknown>`                 |
| removed |  -1.00ms | <0.1% → 0.0% |      1.0ms → 0ms |    1 → 0 | `_raw_spin_lock ([kernel])`            | `<unknown>`                 |
|  -16.7% |  -1.00ms | 0.1% → <0.1% |    6.0ms → 5.0ms |    6 → 5 | `__arch_copy_to_user ([kernel])`       | `<unknown>`                 |

##### Ours

|  Change |    Delta |            % |             Time |  Samples | Function                            | Location                    |
| ------: | -------: | -----------: | ---------------: | -------: | ----------------------------------- | --------------------------- |
|  -12.0% | -13.00ms |  0.9% → 0.8% | 108.0ms → 95.0ms | 108 → 95 | `ZSTD_litLengthPrice`               | `zstd_opt.c`                |
|  -53.8% |  -7.00ms | 0.1% → <0.1% |   13.0ms → 6.0ms |   13 → 6 | `ZSTD_encodeSequences`              | `zstd_compress_sequences.c` |
|  -28.0% |  -7.00ms |  0.2% → 0.1% |  25.0ms → 18.0ms |  25 → 18 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c`                |
|  -62.5% |  -5.00ms | 0.1% → <0.1% |    8.0ms → 3.0ms |    8 → 3 | `ZSTD_XXH64_update`                 | `xxhash.h`                  |
|  -18.2% |  -4.00ms |  0.2% → 0.1% |  22.0ms → 18.0ms |  22 → 18 | `ZSTD_updateStats`                  | `zstd_opt.c`                |
|  -42.9% |  -3.00ms | 0.1% → <0.1% |    7.0ms → 4.0ms |    7 → 4 | `ZSTD_seqToCodes`                   | `zstd_compress.c`           |
|  -50.0% |  -2.00ms |        <0.1% |    4.0ms → 2.0ms |    4 → 2 | `ZSTD_deriveSeqStoreChunk`          | `zstd_compress.c`           |
| removed |  -1.00ms | <0.1% → 0.0% |      1.0ms → 0ms |    1 → 0 | `HUF_estimateCompressedSize`        | `huf_compress.c`            |
| removed |  -1.00ms | <0.1% → 0.0% |      1.0ms → 0ms |    1 → 0 | `ZSTD_buildSequencesStatistics`     | `zstd_compress.c`           |
|  -20.0% |  -1.00ms |        <0.1% |    5.0ms → 4.0ms |    5 → 4 | `HUF_buildCTable_wksp`              | `huf_compress.c`            |
| removed |  -1.00ms | <0.1% → 0.0% |      1.0ms → 0ms |    1 → 0 | `FSE_optimalTableLog`               | `fse_compress.c`            |
| removed |  -1.00ms | <0.1% → 0.0% |      1.0ms → 0ms |    1 → 0 | `ZSTDMT_compressStream_generic`     | `zstdmt_compress.c`         |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |    Delta |             % |            Time |         Samples | Function                                             | Location            |
| -----: | -------: | ------------: | --------------: | --------------: | ---------------------------------------------------- | ------------------- |
|  +0.6% | +62.00ms | 84.3% → 84.5% | 10.07s → 10.14s | 10,079 → 10,141 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`        |
|  +0.5% | +60.00ms | 97.9% → 98.0% | 11.70s → 11.76s | 11,709 → 11,769 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`        |
|  +0.5% | +57.00ms | 99.3% → 99.4% | 11.87s → 11.92s | 11,872 → 11,929 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`   |
|  +0.4% | +50.00ms |         99.9% | 11.94s → 11.99s | 11,944 → 11,994 | `POOL_thread`                                        | `pool.c`            |
|  +0.4% | +49.00ms |        100.0% |    11.95s → 12s | 11,955 → 12,004 | `unknown (libc.so.6)`                                | `<unknown>`         |
|  +0.4% | +48.00ms |         99.8% | 11.93s → 11.98s | 11,937 → 11,985 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c` |
|  +0.4% | +47.00ms |         99.8% | 11.93s → 11.97s | 11,932 → 11,979 | `ZSTD_compressContinue_internal`                     | `zstd_compress.c`   |
|    new | +19.00ms |   0.0% → 0.2% |    0ms → 19.0ms |          0 → 19 | `__do_softirq ([kernel])`                            | `<unknown>`         |
|    new | +19.00ms |   0.0% → 0.2% |    0ms → 19.0ms |          0 → 19 | `____do_softirq ([kernel])`                          | `<unknown>`         |
|    new | +19.00ms |   0.0% → 0.2% |    0ms → 19.0ms |          0 → 19 | `call_on_irq_stack ([kernel])`                       | `<unknown>`         |
|    new | +19.00ms |   0.0% → 0.2% |    0ms → 19.0ms |          0 → 19 | `do_softirq_own_stack ([kernel])`                    | `<unknown>`         |
|    new | +19.00ms |   0.0% → 0.2% |    0ms → 19.0ms |          0 → 19 | `__irq_exit_rcu ([kernel])`                          | `<unknown>`         |
|    new | +19.00ms |   0.0% → 0.2% |    0ms → 19.0ms |          0 → 19 | `irq_exit_rcu ([kernel])`                            | `<unknown>`         |
|    new | +19.00ms |   0.0% → 0.2% |    0ms → 19.0ms |          0 → 19 | `el0_interrupt ([kernel])`                           | `<unknown>`         |
|    new | +19.00ms |   0.0% → 0.2% |    0ms → 19.0ms |          0 → 19 | `__el0_irq_handler_common ([kernel])`                | `<unknown>`         |
|    new | +19.00ms |   0.0% → 0.2% |    0ms → 19.0ms |          0 → 19 | `el0t_64_irq_handler ([kernel])`                     | `<unknown>`         |
|    new | +19.00ms |   0.0% → 0.2% |    0ms → 19.0ms |          0 → 19 | `el0t_64_irq ([kernel])`                             | `<unknown>`         |
|    new | +16.00ms |   0.0% → 0.1% |    0ms → 16.0ms |          0 → 16 | `handle_softirqs ([kernel])`                         | `<unknown>`         |
| +50.0% | +13.00ms |   0.2% → 0.3% | 26.0ms → 39.0ms |         26 → 39 | `ZSTD_rawLiteralsCost`                               | `zstd_opt.c`        |
| +17.9% |  +5.00ms |   0.2% → 0.3% | 28.0ms → 33.0ms |         28 → 33 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`   |

##### Ours

|  Change |    Delta |             % |            Time |         Samples | Function                                             | Location                    |
| ------: | -------: | ------------: | --------------: | --------------: | ---------------------------------------------------- | --------------------------- |
|   +0.6% | +62.00ms | 84.3% → 84.5% | 10.07s → 10.14s | 10,079 → 10,141 | `ZSTD_btGetAllMatches_noDict_3`                      | `zstd_opt.c`                |
|   +0.5% | +60.00ms | 97.9% → 98.0% | 11.70s → 11.76s | 11,709 → 11,769 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`                |
|   +0.5% | +57.00ms | 99.3% → 99.4% | 11.87s → 11.92s | 11,872 → 11,929 | `ZSTD_buildSeqStore`                                 | `zstd_compress.c`           |
|   +0.4% | +50.00ms |         99.9% | 11.94s → 11.99s | 11,944 → 11,994 | `POOL_thread`                                        | `pool.c`                    |
|   +0.4% | +48.00ms |         99.8% | 11.93s → 11.98s | 11,937 → 11,985 | `ZSTDMT_compressionJob`                              | `zstdmt_compress.c`         |
|   +0.4% | +47.00ms |         99.8% | 11.93s → 11.97s | 11,932 → 11,979 | `ZSTD_compressContinue_internal`                     | `zstd_compress.c`           |
|  +50.0% | +13.00ms |   0.2% → 0.3% | 26.0ms → 39.0ms |         26 → 39 | `ZSTD_rawLiteralsCost`                               | `zstd_opt.c`                |
|  +17.9% |  +5.00ms |   0.2% → 0.3% | 28.0ms → 33.0ms |         28 → 33 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`           |
|  +62.5% |  +5.00ms |          0.1% |  8.0ms → 13.0ms |          8 → 13 | `ZSTD_estimateBlockSize_symbolType`                  | `zstd_compress.c`           |
|  +13.8% |  +4.00ms |   0.2% → 0.3% | 29.0ms → 33.0ms |         29 → 33 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`           |
| +200.0% |  +4.00ms |         <0.1% |   2.0ms → 6.0ms |           2 → 6 | `FSE_buildCTable_wksp`                               | `fse_compress.c`            |
| +200.0% |  +4.00ms |         <0.1% |   2.0ms → 6.0ms |           2 → 6 | `ZSTD_buildCTable`                                   | `zstd_compress_sequences.c` |
| +200.0% |  +2.00ms |         <0.1% |   1.0ms → 3.0ms |           1 → 3 | `HUF_writeCTable_wksp`                               | `huf_compress.c`            |
|     new |  +2.00ms |  0.0% → <0.1% |     0ms → 2.0ms |           0 → 2 | `HIST_count_simple`                                  | `hist.c`                    |
|     new |  +2.00ms |  0.0% → <0.1% |     0ms → 2.0ms |           0 → 2 | `HIST_count_wksp`                                    | `hist.c`                    |
|   +7.1% |  +1.00ms |          0.1% | 14.0ms → 15.0ms |         14 → 15 | `HIST_count_parallel_wksp`                           | `hist.c`                    |
|   +3.4% |  +1.00ms |          0.2% | 29.0ms → 30.0ms |         29 → 30 | `ZSTD_insertBt1`                                     | `zstd_opt.c`                |
|  +14.3% |  +1.00ms |          0.1% |   7.0ms → 8.0ms |           7 → 8 | `ZSTD_optLdm_processMatchCandidate`                  | `zstd_opt.c`                |
|  +33.3% |  +1.00ms |         <0.1% |   3.0ms → 4.0ms |           3 → 4 | `HUF_compress_internal`                              | `huf_compress.c`            |
|  +33.3% |  +1.00ms |         <0.1% |   3.0ms → 4.0ms |           3 → 4 | `HUF_compress4X_repeat`                              | `huf_compress.c`            |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |            % |             Time |  Samples | Function                                | Location                    |
| ------: | -------: | -----------: | ---------------: | -------: | --------------------------------------- | --------------------------- |
|  -12.0% | -13.00ms |  0.9% → 0.8% | 108.0ms → 95.0ms | 108 → 95 | `ZSTD_litLengthPrice`                   | `zstd_opt.c`                |
|  -60.0% |  -9.00ms | 0.1% → <0.1% |   15.0ms → 6.0ms |   15 → 6 | `ZSTD_encodeSequences`                  | `zstd_compress_sequences.c` |
|  -39.1% |  -9.00ms |  0.2% → 0.1% |  23.0ms → 14.0ms |  23 → 14 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c`           |
|  -39.1% |  -9.00ms |  0.2% → 0.1% |  23.0ms → 14.0ms |  23 → 14 | `ZSTD_compressSeqStore_singleBlock`     | `zstd_compress.c`           |
|  -24.0% |  -6.00ms |         0.2% |  25.0ms → 19.0ms |  25 → 19 | `ZSTD_insertAndFindFirstIndexHash3`     | `zstd_opt.c`                |
|  -62.5% |  -5.00ms | 0.1% → <0.1% |    8.0ms → 3.0ms |    8 → 3 | `ZSTD_XXH64_update`                     | `xxhash.h`                  |
|  -18.2% |  -4.00ms |  0.2% → 0.1% |  22.0ms → 18.0ms |  22 → 18 | `ZSTD_updateStats`                      | `zstd_opt.c`                |
|  -42.9% |  -3.00ms | 0.1% → <0.1% |    7.0ms → 4.0ms |    7 → 4 | `ZSTD_seqToCodes`                       | `zstd_compress.c`           |
|  -50.0% |  -2.00ms |        <0.1% |    4.0ms → 2.0ms |    4 → 2 | `ZSTD_deriveSeqStoreChunk`              | `zstd_compress.c`           |
|  -10.5% |  -2.00ms |  0.2% → 0.1% |  19.0ms → 17.0ms |  19 → 17 | `ZSTD_buildBlockEntropyStats`           | `zstd_compress.c`           |
|  -28.6% |  -2.00ms | 0.1% → <0.1% |    7.0ms → 5.0ms |    7 → 5 | `__arch_copy_to_user ([kernel])`        | `<unknown>`                 |
|  -28.6% |  -2.00ms | 0.1% → <0.1% |    7.0ms → 5.0ms |    7 → 5 | `copy_page_to_iter ([kernel])`          | `<unknown>`                 |
|   -5.0% |  -1.00ms |         0.2% |  20.0ms → 19.0ms |  20 → 19 | `ZSTD_compressBlock_btultra2`           | `zstd_opt.c`                |
| removed |  -1.00ms | <0.1% → 0.0% |      1.0ms → 0ms |    1 → 0 | `HUF_estimateCompressedSize`            | `huf_compress.c`            |
| removed |  -1.00ms | <0.1% → 0.0% |      1.0ms → 0ms |    1 → 0 | `get_mem_cgroup_from_mm ([kernel])`     | `<unknown>`                 |
| removed |  -1.00ms | <0.1% → 0.0% |      1.0ms → 0ms |    1 → 0 | `__mem_cgroup_charge ([kernel])`        | `<unknown>`                 |
|   -7.7% |  -1.00ms |         0.1% |  13.0ms → 12.0ms |  13 → 12 | `ZSTD_buildSequencesStatistics`         | `zstd_compress.c`           |
|  -20.0% |  -1.00ms |        <0.1% |    5.0ms → 4.0ms |    5 → 4 | `HUF_optimalTableLog`                   | `huf_compress.c`            |
|  -20.0% |  -1.00ms |        <0.1% |    5.0ms → 4.0ms |    5 → 4 | `HUF_buildCTable_wksp`                  | `huf_compress.c`            |
| removed |  -1.00ms | <0.1% → 0.0% |      1.0ms → 0ms |    1 → 0 | `FSE_optimalTableLog`                   | `fse_compress.c`            |

##### Ours

|  Change |    Delta |            % |             Time |  Samples | Function                                | Location                    |
| ------: | -------: | -----------: | ---------------: | -------: | --------------------------------------- | --------------------------- |
|  -12.0% | -13.00ms |  0.9% → 0.8% | 108.0ms → 95.0ms | 108 → 95 | `ZSTD_litLengthPrice`                   | `zstd_opt.c`                |
|  -60.0% |  -9.00ms | 0.1% → <0.1% |   15.0ms → 6.0ms |   15 → 6 | `ZSTD_encodeSequences`                  | `zstd_compress_sequences.c` |
|  -39.1% |  -9.00ms |  0.2% → 0.1% |  23.0ms → 14.0ms |  23 → 14 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c`           |
|  -39.1% |  -9.00ms |  0.2% → 0.1% |  23.0ms → 14.0ms |  23 → 14 | `ZSTD_compressSeqStore_singleBlock`     | `zstd_compress.c`           |
|  -24.0% |  -6.00ms |         0.2% |  25.0ms → 19.0ms |  25 → 19 | `ZSTD_insertAndFindFirstIndexHash3`     | `zstd_opt.c`                |
|  -62.5% |  -5.00ms | 0.1% → <0.1% |    8.0ms → 3.0ms |    8 → 3 | `ZSTD_XXH64_update`                     | `xxhash.h`                  |
|  -18.2% |  -4.00ms |  0.2% → 0.1% |  22.0ms → 18.0ms |  22 → 18 | `ZSTD_updateStats`                      | `zstd_opt.c`                |
|  -42.9% |  -3.00ms | 0.1% → <0.1% |    7.0ms → 4.0ms |    7 → 4 | `ZSTD_seqToCodes`                       | `zstd_compress.c`           |
|  -50.0% |  -2.00ms |        <0.1% |    4.0ms → 2.0ms |    4 → 2 | `ZSTD_deriveSeqStoreChunk`              | `zstd_compress.c`           |
|  -10.5% |  -2.00ms |  0.2% → 0.1% |  19.0ms → 17.0ms |  19 → 17 | `ZSTD_buildBlockEntropyStats`           | `zstd_compress.c`           |
|   -5.0% |  -1.00ms |         0.2% |  20.0ms → 19.0ms |  20 → 19 | `ZSTD_compressBlock_btultra2`           | `zstd_opt.c`                |
| removed |  -1.00ms | <0.1% → 0.0% |      1.0ms → 0ms |    1 → 0 | `HUF_estimateCompressedSize`            | `huf_compress.c`            |
|   -7.7% |  -1.00ms |         0.1% |  13.0ms → 12.0ms |  13 → 12 | `ZSTD_buildSequencesStatistics`         | `zstd_compress.c`           |
|  -20.0% |  -1.00ms |        <0.1% |    5.0ms → 4.0ms |    5 → 4 | `HUF_optimalTableLog`                   | `huf_compress.c`            |
|  -20.0% |  -1.00ms |        <0.1% |    5.0ms → 4.0ms |    5 → 4 | `HUF_buildCTable_wksp`                  | `huf_compress.c`            |
| removed |  -1.00ms | <0.1% → 0.0% |      1.0ms → 0ms |    1 → 0 | `FSE_optimalTableLog`                   | `fse_compress.c`            |
|  -10.0% |  -1.00ms |         0.1% |   10.0ms → 9.0ms |   10 → 9 | `ZSTD_compressStream2`                  | `zstd_compress.c`           |
|   -9.1% |  -1.00ms |         0.1% |  11.0ms → 10.0ms |  11 → 10 | `FIO_compressFilename_srcFile`          | `fileio.c`                  |
|   -9.1% |  -1.00ms |         0.1% |  11.0ms → 10.0ms |  11 → 10 | `FIO_compressFilename`                  | `fileio.c`                  |
|   -9.1% |  -1.00ms |         0.1% |  11.0ms → 10.0ms |  11 → 10 | `main`                                  | `zstdcli.c`                 |

# Uninterruptible sleep profile diff

Slept 5 times → 3 times (-2 times, -40.0%).

| Category | Change | Delta |      % | Sleeps |
| -------- | -----: | ----: | -----: | -----: |
| Kernel   | -40.0% |    -2 | 100.0% |  5 → 3 |

## Hottest functions

### Self sleeps

#### Improvements

Functions with the largest decrease in uninterruptible sleeps entered directly in the function body, excluding callees.

##### Kernel

| Change | Delta |      % | Sleeps | Function                    | Location    |
| -----: | ----: | -----: | -----: | --------------------------- | ----------- |
| -40.0% |    -2 | 100.0% |  5 → 3 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

### Total sleeps

#### Improvements

Functions with the largest decrease in total uninterruptible sleeps entered in the function and all its callees.

|  Change | Delta |            % | Sleeps | Function                                | Location            |
| ------: | ----: | -----------: | -----: | --------------------------------------- | ------------------- |
|  -40.0% |    -2 |       100.0% |  5 → 3 | `bpf_trace_run4 ([kernel])`             | `<unknown>`         |
|  -40.0% |    -2 |       100.0% |  5 → 3 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>`         |
|  -40.0% |    -2 |       100.0% |  5 → 3 | `__schedule ([kernel])`                 | `<unknown>`         |
|  -40.0% |    -2 |       100.0% |  5 → 3 | `schedule ([kernel])`                   | `<unknown>`         |
|  -40.0% |    -2 |       100.0% |  5 → 3 | `schedule_preempt_disabled ([kernel])`  | `<unknown>`         |
| removed |    -2 | 40.0% → 0.0% |  2 → 0 | `rwsem_down_write_slowpath ([kernel])`  | `<unknown>`         |
| removed |    -2 | 40.0% → 0.0% |  2 → 0 | `down_write_killable ([kernel])`        | `<unknown>`         |
| removed |    -2 | 40.0% → 0.0% |  2 → 0 | `do_mprotect_pkey ([kernel])`           | `<unknown>`         |
| removed |    -2 | 40.0% → 0.0% |  2 → 0 | `__arm64_sys_mprotect ([kernel])`       | `<unknown>`         |
|  -40.0% |    -2 |       100.0% |  5 → 3 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>`         |
|  -40.0% |    -2 |       100.0% |  5 → 3 | `do_el0_svc ([kernel])`                 | `<unknown>`         |
|  -40.0% |    -2 |       100.0% |  5 → 3 | `el0_svc ([kernel])`                    | `<unknown>`         |
|  -40.0% |    -2 |       100.0% |  5 → 3 | `el0t_64_sync_handler ([kernel])`       | `<unknown>`         |
|  -40.0% |    -2 |       100.0% |  5 → 3 | `el0t_64_sync ([kernel])`               | `<unknown>`         |
| removed |    -2 | 40.0% → 0.0% |  2 → 0 | `__mprotect (libc.so.6)`                | `<unknown>`         |
| removed |    -2 | 40.0% → 0.0% |  2 → 0 | `POOL_create_advanced`                  | `pool.c`            |
| removed |    -2 | 40.0% → 0.0% |  2 → 0 | `ZSTDMT_createCCtx_advanced`            | `zstdmt_compress.c` |
| removed |    -2 | 40.0% → 0.0% |  2 → 0 | `ZSTD_CCtx_init_compressStream2`        | `zstd_compress.c`   |
| removed |    -2 | 40.0% → 0.0% |  2 → 0 | `ZSTD_compressStream2`                  | `zstd_compress.c`   |
| removed |    -2 | 40.0% → 0.0% |  2 → 0 | `FIO_compressFilename_srcFile`          | `fileio.c`          |

##### Kernel

|  Change | Delta |            % | Sleeps | Function                                | Location    |
| ------: | ----: | -----------: | -----: | --------------------------------------- | ----------- |
|  -40.0% |    -2 |       100.0% |  5 → 3 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
|  -40.0% |    -2 |       100.0% |  5 → 3 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
|  -40.0% |    -2 |       100.0% |  5 → 3 | `__schedule ([kernel])`                 | `<unknown>` |
|  -40.0% |    -2 |       100.0% |  5 → 3 | `schedule ([kernel])`                   | `<unknown>` |
|  -40.0% |    -2 |       100.0% |  5 → 3 | `schedule_preempt_disabled ([kernel])`  | `<unknown>` |
| removed |    -2 | 40.0% → 0.0% |  2 → 0 | `rwsem_down_write_slowpath ([kernel])`  | `<unknown>` |
| removed |    -2 | 40.0% → 0.0% |  2 → 0 | `down_write_killable ([kernel])`        | `<unknown>` |
| removed |    -2 | 40.0% → 0.0% |  2 → 0 | `do_mprotect_pkey ([kernel])`           | `<unknown>` |
| removed |    -2 | 40.0% → 0.0% |  2 → 0 | `__arm64_sys_mprotect ([kernel])`       | `<unknown>` |
|  -40.0% |    -2 |       100.0% |  5 → 3 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
|  -40.0% |    -2 |       100.0% |  5 → 3 | `do_el0_svc ([kernel])`                 | `<unknown>` |
|  -40.0% |    -2 |       100.0% |  5 → 3 | `el0_svc ([kernel])`                    | `<unknown>` |
|  -40.0% |    -2 |       100.0% |  5 → 3 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
|  -40.0% |    -2 |       100.0% |  5 → 3 | `el0t_64_sync ([kernel])`               | `<unknown>` |

# Interruptible sleep profile diff

Slept 219 times → 215 times (-4 times, -1.8%).

| Category | Change | Delta |      % |    Sleeps |
| -------- | -----: | ----: | -----: | --------: |
| Kernel   |  -1.8% |    -4 | 100.0% | 219 → 215 |

## Hottest functions

### Self sleeps

#### Improvements

Functions with the largest decrease in interruptible sleeps entered directly in the function body, excluding callees.

##### Kernel

| Change | Delta |      % |    Sleeps | Function                    | Location    |
| -----: | ----: | -----: | --------: | --------------------------- | ----------- |
|  -1.8% |    -4 | 100.0% | 219 → 215 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

### Total sleeps

#### Regressions

Functions with the largest increase in total interruptible sleeps entered in the function and all its callees.

| Change | Delta |             % |  Sleeps | Function                        | Location            |
| -----: | ----: | ------------: | ------: | ------------------------------- | ------------------- |
|  +4.5% |    +2 | 20.1% → 21.4% | 44 → 46 | `FIO_compressFilename_srcFile`  | `fileio.c`          |
|  +4.5% |    +2 | 20.1% → 21.4% | 44 → 46 | `FIO_compressFilename`          | `fileio.c`          |
|  +4.5% |    +2 | 20.1% → 21.4% | 44 → 46 | `main`                          | `zstdcli.c`         |
|  +4.5% |    +2 | 20.1% → 21.4% | 44 → 46 | `__libc_start_main (libc.so.6)` | `<unknown>`         |
|  +4.5% |    +2 | 20.1% → 21.4% | 44 → 46 | `_start (zstd)`                 | `<unknown>`         |
|  +5.1% |    +2 | 17.8% → 19.1% | 39 → 41 | `ZSTDMT_compressStream_generic` | `zstdmt_compress.c` |
|  +5.1% |    +2 | 17.8% → 19.1% | 39 → 41 | `ZSTD_compressStream2`          | `zstd_compress.c`   |

#### Improvements

Functions with the largest decrease in total interruptible sleeps entered in the function and all its callees.

| Change | Delta |             % |    Sleeps | Function                                | Location    |
| -----: | ----: | ------------: | --------: | --------------------------------------- | ----------- |
|  -3.4% |    -6 | 79.9% → 78.6% | 175 → 169 | `POOL_thread`                           | `pool.c`    |
|  -1.8% |    -4 |        100.0% | 219 → 215 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
|  -1.8% |    -4 |        100.0% | 219 → 215 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
|  -1.8% |    -4 |        100.0% | 219 → 215 | `__schedule ([kernel])`                 | `<unknown>` |
|  -1.8% |    -4 |        100.0% | 219 → 215 | `schedule ([kernel])`                   | `<unknown>` |
|  -1.8% |    -4 |        100.0% | 219 → 215 | `futex_do_wait ([kernel])`              | `<unknown>` |
|  -1.8% |    -4 |        100.0% | 219 → 215 | `__futex_wait ([kernel])`               | `<unknown>` |
|  -1.8% |    -4 |        100.0% | 219 → 215 | `futex_wait ([kernel])`                 | `<unknown>` |
|  -1.8% |    -4 |        100.0% | 219 → 215 | `do_futex ([kernel])`                   | `<unknown>` |
|  -1.8% |    -4 |        100.0% | 219 → 215 | `__arm64_sys_futex ([kernel])`          | `<unknown>` |
|  -1.8% |    -4 |        100.0% | 219 → 215 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
|  -1.8% |    -4 |        100.0% | 219 → 215 | `do_el0_svc ([kernel])`                 | `<unknown>` |
|  -1.8% |    -4 |        100.0% | 219 → 215 | `el0_svc ([kernel])`                    | `<unknown>` |
|  -1.8% |    -4 |        100.0% | 219 → 215 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
|  -1.8% |    -4 |        100.0% | 219 → 215 | `el0t_64_sync ([kernel])`               | `<unknown>` |
|  -1.8% |    -4 |        100.0% | 219 → 215 | `unknown (libc.so.6)`                   | `<unknown>` |
|  -1.8% |    -4 |        100.0% | 219 → 215 | `pthread_cond_wait (libc.so.6)`         | `<unknown>` |

##### Kernel

| Change | Delta |      % |    Sleeps | Function                                | Location    |
| -----: | ----: | -----: | --------: | --------------------------------------- | ----------- |
|  -1.8% |    -4 | 100.0% | 219 → 215 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
|  -1.8% |    -4 | 100.0% | 219 → 215 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
|  -1.8% |    -4 | 100.0% | 219 → 215 | `__schedule ([kernel])`                 | `<unknown>` |
|  -1.8% |    -4 | 100.0% | 219 → 215 | `schedule ([kernel])`                   | `<unknown>` |
|  -1.8% |    -4 | 100.0% | 219 → 215 | `futex_do_wait ([kernel])`              | `<unknown>` |
|  -1.8% |    -4 | 100.0% | 219 → 215 | `__futex_wait ([kernel])`               | `<unknown>` |
|  -1.8% |    -4 | 100.0% | 219 → 215 | `futex_wait ([kernel])`                 | `<unknown>` |
|  -1.8% |    -4 | 100.0% | 219 → 215 | `do_futex ([kernel])`                   | `<unknown>` |
|  -1.8% |    -4 | 100.0% | 219 → 215 | `__arm64_sys_futex ([kernel])`          | `<unknown>` |
|  -1.8% |    -4 | 100.0% | 219 → 215 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
|  -1.8% |    -4 | 100.0% | 219 → 215 | `do_el0_svc ([kernel])`                 | `<unknown>` |
|  -1.8% |    -4 | 100.0% | 219 → 215 | `el0_svc ([kernel])`                    | `<unknown>` |
|  -1.8% |    -4 | 100.0% | 219 → 215 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
|  -1.8% |    -4 | 100.0% | 219 → 215 | `el0t_64_sync ([kernel])`               | `<unknown>` |

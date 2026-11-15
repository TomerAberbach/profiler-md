# CPU profile diff

Took 12.01s (+5.00ms, ~0%) over 12,005 → 12,010 samples (1.0ms per sample).

| Category | Change |    Delta |           % |            Time |         Samples |
| -------- | -----: | -------: | ----------: | --------------: | --------------: |
| Ours     |  +0.1% | +12.00ms |       99.8% | 11.98s → 11.99s | 11,975 → 11,987 |
| Kernel   | -39.1% |  -9.00ms | 0.2% → 0.1% | 23.0ms → 14.0ms |         23 → 14 |
| Native   | +28.6% |  +2.00ms |        0.1% |   7.0ms → 9.0ms |           7 → 9 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 12.00s (99.9%) unknown (libc.so.6)
│   ├── … 11.98s → 11.99s (99.8%) POOL_thread at pool.c
│   │   └── 11.98s → 11.99s (99.8%) ZSTDMT_compressionJob at zstdmt_compress.c
│   │       └── 11.97s → 11.99s (99.7% → 99.8%) ZSTD_compressContinue_internal at zstd_compress.c
│   │           ├── 11.93s (99.4%) ZSTD_buildSeqStore
│   │           │   ├── 11.75s (97.9% → 97.8%, self 13.5% → 13.3%) ZSTD_compressBlock_opt2 at zstd_opt.c
│   │           │   │   ├── 10.10s → 10.12s (84.1% → 84.3%, self 83.9% → 84.0%) ZSTD_btGetAllMatches_noDict_3
│   │           │   │   │   └── 27.0ms → 31.0ms (0.2% → 0.3%) ZSTD_insertBt1
│   │           │   │   └── 24.0ms → 25.0ms (0.2%) ZSTD_insertAndFindFirstIndexHash3
│   │           │   ├── 114.0ms → 116.0ms (0.9% → 1.0%) ZSTD_litLengthPrice at zstd_opt.c
│   │           │   ├── 28.0ms → 31.0ms (0.2% → 0.3%) ZSTD_rawLiteralsCost at zstd_opt.c
│   │           │   ├── 19.0ms → 17.0ms (0.2% → 0.1%) ZSTD_compressBlock_btultra2 at zstd_opt.c
│   │           │   │   └── 18.0ms → 16.0ms (0.1%) ZSTD_compressBlock_opt2
│   │           │   ├── 18.0ms → 12.0ms (0.1%) ZSTD_updateStats at zstd_opt.c
│   │           │   └── 5.0ms → 7.0ms (<0.1% → 0.1%) ZSTD_optLdm_processMatchCandidate at zstd_opt.c
│   │           ├── 28.0ms → 20.0ms (0.2%) ZSTD_deriveBlockSplitsHelper
│   │           ├── 13.0ms → 16.0ms (0.1%) ZSTD_compressSeqStore_singleBlock
│   │           │   └── 13.0ms → 0ms (0.1% → 0.0%) ZSTD_entropyCompressSeqStore_internal
│   │           │       └── 8.0ms → 0ms (0.1% → 0.0%) ZSTD_encodeSequences at zstd_compress_sequences.c
│   │           └── 0ms → 11.0ms (0.0% → 0.1%) ZSTD_splitBlock at zstd_preSplit.c
│   │               └── 0ms → 8.0ms (0.0% → 0.1%) ZSTD_recordFingerprint_1
│   └── … 11.0ms → 7.0ms (0.1%) __read (libc.so.6)
│       └── 11.0ms → 7.0ms (0.1%) el0t_64_sync ([kernel])
│           └── 11.0ms → 7.0ms (0.1%) el0t_64_sync_handler ([kernel])
│               └── 11.0ms → 7.0ms (0.1%) el0_svc ([kernel])
│                   └── 11.0ms → 7.0ms (0.1%) do_el0_svc ([kernel])
│                       └── 11.0ms → 7.0ms (0.1%) invoke_syscall.constprop.0 ([kernel])
│                           └── 11.0ms → 7.0ms (0.1%) __arm64_sys_read ([kernel])
│                               └── 11.0ms → 7.0ms (0.1%) ksys_read ([kernel])
│                                   └── 11.0ms → 7.0ms (0.1%) vfs_read ([kernel])
│                                       └── 11.0ms → 7.0ms (0.1%) ovl_read_iter ([kernel])
│                                           └── 11.0ms → 7.0ms (0.1%) backing_file_read_iter ([kernel])
│                                               └── 11.0ms → 7.0ms (0.1%) vfs_iter_read ([kernel])
│                                                   └── 11.0ms → 7.0ms (0.1%) do_iter_readv_writev ([kernel])
│                                                       └── 11.0ms → 7.0ms (0.1%) ext4_file_read_iter ([kernel])
│                                                           └── 11.0ms → 7.0ms (0.1%) generic_file_read_iter ([kernel])
│                                                               └── 11.0ms → 7.0ms (0.1%) filemap_read ([kernel])
│                                                                   └── 10.0ms → 7.0ms (0.1%) copy_page_to_iter ([kernel])
│                                                                       └── 10.0ms → 7.0ms (0.1%) __arch_copy_to_user ([kernel])
└── … 7.0ms → 10.0ms (0.1%) unknown (libc.so.6)
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |              Time |         Samples | Function                            | Location          |
| ------: | -------: | ------------: | ----------------: | --------------: | ----------------------------------- | ----------------- |
|   +0.2% | +18.00ms | 84.0% → 84.1% |   10.08s → 10.10s | 10,082 → 10,100 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c`      |
| +200.0% |  +8.00ms |  <0.1% → 0.1% |    4.0ms → 12.0ms |          4 → 12 | `HIST_count_parallel_wksp`          | `hist.c`          |
|     new |  +8.00ms |   0.0% → 0.1% |       0ms → 8.0ms |           0 → 8 | `ZSTD_recordFingerprint_1`          | `zstd_preSplit.c` |
| +133.3% |  +4.00ms |  <0.1% → 0.1% |     3.0ms → 7.0ms |           3 → 7 | `ZSTD_XXH64_update`                 | `xxhash.h`        |
|  +14.8% |  +4.00ms |   0.2% → 0.3% |   27.0ms → 31.0ms |         27 → 31 | `ZSTD_insertBt1`                    | `zstd_opt.c`      |
|  +50.0% |  +3.00ms |  <0.1% → 0.1% |     6.0ms → 9.0ms |           6 → 9 | `unknown (libc.so.6)`               | `<unknown>`       |
|  +10.7% |  +3.00ms |   0.2% → 0.3% |   28.0ms → 31.0ms |         28 → 31 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c`      |
|     new |  +3.00ms |  0.0% → <0.1% |       0ms → 3.0ms |           0 → 3 | `ZSTD_splitBlock`                   | `zstd_preSplit.c` |
|   +1.7% |  +2.00ms |          1.0% | 115.0ms → 117.0ms |       115 → 117 | `ZSTD_litLengthPrice`               | `zstd_opt.c`      |
|  +40.0% |  +2.00ms |  <0.1% → 0.1% |     5.0ms → 7.0ms |           5 → 7 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c`      |
|   +4.2% |  +1.00ms |          0.2% |   24.0ms → 25.0ms |         24 → 25 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c`      |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |           0 → 1 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |           0 → 1 | `HUF_writeCTable_wksp`              | `huf_compress.c`  |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |           0 → 1 | `HUF_optimalTableLog`               | `huf_compress.c`  |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |           0 → 1 | `folio_add_lru_vma ([kernel])`      | `<unknown>`       |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |           0 → 1 | `get_page_from_freelist ([kernel])` | `<unknown>`       |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |           0 → 1 | `FSE_compress_usingCTable_generic`  | `fse_compress.c`  |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |           0 → 1 | `folios_put_refs ([kernel])`        | `<unknown>`       |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |           0 → 1 | `caches_clean_inval_pou ([kernel])` | `<unknown>`       |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |           0 → 1 | `__arm64_sys_write ([kernel])`      | `<unknown>`       |

##### Ours

|  Change |    Delta |             % |              Time |         Samples | Function                            | Location          |
| ------: | -------: | ------------: | ----------------: | --------------: | ----------------------------------- | ----------------- |
|   +0.2% | +18.00ms | 84.0% → 84.1% |   10.08s → 10.10s | 10,082 → 10,100 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c`      |
| +200.0% |  +8.00ms |  <0.1% → 0.1% |    4.0ms → 12.0ms |          4 → 12 | `HIST_count_parallel_wksp`          | `hist.c`          |
|     new |  +8.00ms |   0.0% → 0.1% |       0ms → 8.0ms |           0 → 8 | `ZSTD_recordFingerprint_1`          | `zstd_preSplit.c` |
| +133.3% |  +4.00ms |  <0.1% → 0.1% |     3.0ms → 7.0ms |           3 → 7 | `ZSTD_XXH64_update`                 | `xxhash.h`        |
|  +14.8% |  +4.00ms |   0.2% → 0.3% |   27.0ms → 31.0ms |         27 → 31 | `ZSTD_insertBt1`                    | `zstd_opt.c`      |
|  +10.7% |  +3.00ms |   0.2% → 0.3% |   28.0ms → 31.0ms |         28 → 31 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c`      |
|     new |  +3.00ms |  0.0% → <0.1% |       0ms → 3.0ms |           0 → 3 | `ZSTD_splitBlock`                   | `zstd_preSplit.c` |
|   +1.7% |  +2.00ms |          1.0% | 115.0ms → 117.0ms |       115 → 117 | `ZSTD_litLengthPrice`               | `zstd_opt.c`      |
|  +40.0% |  +2.00ms |  <0.1% → 0.1% |     5.0ms → 7.0ms |           5 → 7 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c`      |
|   +4.2% |  +1.00ms |          0.2% |   24.0ms → 25.0ms |         24 → 25 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c`      |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |           0 → 1 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |           0 → 1 | `HUF_writeCTable_wksp`              | `huf_compress.c`  |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |           0 → 1 | `HUF_optimalTableLog`               | `huf_compress.c`  |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |           0 → 1 | `FSE_compress_usingCTable_generic`  | `fse_compress.c`  |

#### Improvements

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |            Time |       Samples | Function                                 | Location                    |
| ------: | -------: | ------------: | --------------: | ------------: | ---------------------------------------- | --------------------------- |
|   -1.3% | -22.00ms | 13.6% → 13.4% |   1.63s → 1.61s | 1,632 → 1,610 | `ZSTD_compressBlock_opt2`                | `zstd_opt.c`                |
|  -33.3% |  -6.00ms |          0.1% | 18.0ms → 12.0ms |       18 → 12 | `ZSTD_updateStats`                       | `zstd_opt.c`                |
| removed |  -5.00ms |  <0.1% → 0.0% |     5.0ms → 0ms |         5 → 0 | `FSE_buildCTable_wksp`                   | `fse_compress.c`            |
|  -75.0% |  -3.00ms |         <0.1% |   4.0ms → 1.0ms |         4 → 1 | `HIST_count_simple`                      | `hist.c`                    |
| removed |  -3.00ms |  <0.1% → 0.0% |     3.0ms → 0ms |         3 → 0 | `ZSTD_selectEncodingType`                | `zstd_compress_sequences.c` |
|  -33.3% |  -3.00ms |  0.1% → <0.1% |   9.0ms → 6.0ms |         9 → 6 | `__arch_copy_to_user ([kernel])`         | `<unknown>`                 |
| removed |  -2.00ms |  <0.1% → 0.0% |     2.0ms → 0ms |         2 → 0 | `FSE_writeNCount_generic`                | `fse_compress.c`            |
|  -28.6% |  -2.00ms |  0.1% → <0.1% |   7.0ms → 5.0ms |         7 → 5 | `ZSTD_seqToCodes`                        | `zstd_compress.c`           |
| removed |  -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `count_memcg_events ([kernel])`          | `<unknown>`                 |
|  -25.0% |  -1.00ms |         <0.1% |   4.0ms → 3.0ms |         4 → 3 | `clear_page ([kernel])`                  | `<unknown>`                 |
| removed |  -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `ZSTD_deriveBlockSplitsHelper`           | `zstd_compress.c`           |
|  -12.5% |  -1.00ms |          0.1% |   8.0ms → 7.0ms |         8 → 7 | `ZSTD_encodeSequences`                   | `zstd_compress_sequences.c` |
| removed |  -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `htab_map_hash ([kernel])`               | `<unknown>`                 |
| removed |  -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `handle_softirqs ([kernel])`             | `<unknown>`                 |
| removed |  -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `__pthread_mutex_lock (libc.so.6)`       | `<unknown>`                 |
| removed |  -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `kthread_blkcg ([kernel])`               | `<unknown>`                 |
| removed |  -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `bio_add_page ([kernel])`                | `<unknown>`                 |
| removed |  -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `el0_svc ([kernel])`                     | `<unknown>`                 |
| removed |  -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `folio_add_file_rmap_ptes ([kernel])`    | `<unknown>`                 |
| removed |  -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `_raw_spin_unlock_irqrestore ([kernel])` | `<unknown>`                 |

##### Ours

|  Change |    Delta |             % |            Time |       Samples | Function                       | Location                    |
| ------: | -------: | ------------: | --------------: | ------------: | ------------------------------ | --------------------------- |
|   -1.3% | -22.00ms | 13.6% → 13.4% |   1.63s → 1.61s | 1,632 → 1,610 | `ZSTD_compressBlock_opt2`      | `zstd_opt.c`                |
|  -33.3% |  -6.00ms |          0.1% | 18.0ms → 12.0ms |       18 → 12 | `ZSTD_updateStats`             | `zstd_opt.c`                |
| removed |  -5.00ms |  <0.1% → 0.0% |     5.0ms → 0ms |         5 → 0 | `FSE_buildCTable_wksp`         | `fse_compress.c`            |
|  -75.0% |  -3.00ms |         <0.1% |   4.0ms → 1.0ms |         4 → 1 | `HIST_count_simple`            | `hist.c`                    |
| removed |  -3.00ms |  <0.1% → 0.0% |     3.0ms → 0ms |         3 → 0 | `ZSTD_selectEncodingType`      | `zstd_compress_sequences.c` |
| removed |  -2.00ms |  <0.1% → 0.0% |     2.0ms → 0ms |         2 → 0 | `FSE_writeNCount_generic`      | `fse_compress.c`            |
|  -28.6% |  -2.00ms |  0.1% → <0.1% |   7.0ms → 5.0ms |         7 → 5 | `ZSTD_seqToCodes`              | `zstd_compress.c`           |
| removed |  -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `ZSTD_deriveBlockSplitsHelper` | `zstd_compress.c`           |
|  -12.5% |  -1.00ms |          0.1% |   8.0ms → 7.0ms |         8 → 7 | `ZSTD_encodeSequences`         | `zstd_compress_sequences.c` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

| Change |    Delta |      % |            Time |         Samples | Location         |
| -----: | -------: | -----: | --------------: | --------------: | ---------------- |
|  +0.2% | +18.00ms | 100.0% | 10.08s → 10.10s | 10,082 → 10,100 | `zstd_opt.c:876` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|  Change |   Delta |            % |        Time | Samples | Location     |
| ------: | ------: | -----------: | ----------: | ------: | ------------ |
|     new | +2.00ms | 0.0% → 16.7% | 0ms → 2.0ms |   0 → 2 | `hist.c:115` |
|     new | +2.00ms | 0.0% → 16.7% | 0ms → 2.0ms |   0 → 2 | `hist.c:116` |
|     new | +2.00ms | 0.0% → 16.7% | 0ms → 2.0ms |   0 → 2 | `hist.c:120` |
|     new | +2.00ms | 0.0% → 16.7% | 0ms → 2.0ms |   0 → 2 | `hist.c:137` |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `hist.c:95`  |

##### `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`)

| Change |   Delta |             % |        Time | Samples | Location             |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- |
|    new | +8.00ms | 0.0% → 100.0% | 0ms → 8.0ms |   0 → 8 | `zstd_preSplit.c:87` |

##### `ZSTD_XXH64_update` (`xxhash.h`)

|  Change |   Delta |             % |        Time | Samples | Location        |
| ------: | ------: | ------------: | ----------: | ------: | --------------- |
|     new | +6.00ms |  0.0% → 85.7% | 0ms → 6.0ms |   0 → 6 | `xxhash.h:3608` |
| removed | -3.00ms | 100.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `xxhash.h:3559` |
|     new | +1.00ms |  0.0% → 14.3% | 0ms → 1.0ms |   0 → 1 | `xxhash.h:3607` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

|  Change |   Delta |             % |           Time | Samples | Location         |
| ------: | ------: | ------------: | -------------: | ------: | ---------------- |
| +250.0% | +5.00ms |  7.4% → 22.6% |  2.0ms → 7.0ms |   2 → 7 | `zstd_opt.c:518` |
| +500.0% | +5.00ms |  3.7% → 19.4% |  1.0ms → 6.0ms |   1 → 6 | `zstd_opt.c:528` |
|  -45.5% | -5.00ms | 40.7% → 19.4% | 11.0ms → 6.0ms |  11 → 6 | `zstd_opt.c:538` |
| +200.0% | +2.00ms |   3.7% → 9.7% |  1.0ms → 3.0ms |   1 → 3 | `zstd_opt.c:489` |
| removed | -1.00ms |   3.7% → 0.0% |    1.0ms → 0ms |   1 → 0 | `zstd_opt.c:447` |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

| Change |   Delta |             % |            Time | Samples | Location         |
| -----: | ------: | ------------: | --------------: | ------: | ---------------- |
|  +4.2% | +1.00ms | 85.7% → 80.6% | 24.0ms → 25.0ms | 24 → 25 | `zstd_opt.c:266` |
| +33.3% | +1.00ms | 10.7% → 12.9% |   3.0ms → 4.0ms |   3 → 4 | `zstd_opt.c:273` |
|    new | +1.00ms |   0.0% → 3.2% |     0ms → 1.0ms |   0 → 1 | `zstd_opt.c:291` |

##### `ZSTD_splitBlock` (`zstd_preSplit.c`)

| Change |   Delta |             % |        Time | Samples | Location              |
| -----: | ------: | ------------: | ----------: | ------: | --------------------- |
|    new | +3.00ms | 0.0% → 100.0% | 0ms → 3.0ms |   0 → 3 | `zstd_preSplit.c:237` |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

|  Change |    Delta |             % |            Time | Samples | Location         |
| ------: | -------: | ------------: | --------------: | ------: | ---------------- |
|  -20.8% | -10.00ms | 41.7% → 32.5% | 48.0ms → 38.0ms | 48 → 38 | `zstd_opt.c:313` |
| +120.0% |  +6.00ms |   4.3% → 9.4% |  5.0ms → 11.0ms |  5 → 11 | `zstd_opt.c:306` |
|  +11.1% |  +4.00ms | 31.3% → 34.2% | 36.0ms → 40.0ms | 36 → 40 | `zstd_opt.c:315` |
|   +7.1% |  +1.00ms | 12.2% → 12.8% | 14.0ms → 15.0ms | 14 → 15 | `zstd_opt.c:298` |
|   +8.3% |  +1.00ms | 10.4% → 11.1% | 12.0ms → 13.0ms | 12 → 13 | `zstd_opt.c:310` |

##### `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`)

|  Change |   Delta |             % |        Time | Samples | Location          |
| ------: | ------: | ------------: | ----------: | ------: | ----------------- |
|     new | +7.00ms | 0.0% → 100.0% | 0ms → 7.0ms |   0 → 7 | `zstd_opt.c:1030` |
| removed | -4.00ms |  80.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `zstd_opt.c:1028` |
| removed | -1.00ms |  20.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `zstd_opt.c:1044` |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|  Change |   Delta |             % |           Time | Samples | Location         |
| ------: | ------: | ------------: | -------------: | ------: | ---------------- |
| +166.7% | +5.00ms | 12.5% → 32.0% |  3.0ms → 8.0ms |   3 → 8 | `zstd_opt.c:420` |
|  -60.0% | -3.00ms |  20.8% → 8.0% |  5.0ms → 2.0ms |   5 → 2 | `zstd_opt.c:423` |
|  -60.0% | -3.00ms |  20.8% → 8.0% |  5.0ms → 2.0ms |   5 → 2 | `zstd_opt.c:430` |
|  +25.0% | +2.00ms | 33.3% → 40.0% | 8.0ms → 10.0ms |  8 → 10 | `zstd_opt.c:424` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

| Change |   Delta |             % |        Time | Samples | Location               |
| -----: | ------: | ------------: | ----------: | ------: | ---------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `zstd_compress.c:4122` |

##### `HUF_writeCTable_wksp` (`huf_compress.c`)

| Change |   Delta |             % |        Time | Samples | Location             |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `huf_compress.c:274` |

##### `HUF_optimalTableLog` (`huf_compress.c`)

| Change |   Delta |             % |        Time | Samples | Location              |
| -----: | ------: | ------------: | ----------: | ------: | --------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `huf_compress.c:1292` |

##### `FSE_compress_usingCTable_generic` (`fse_compress.c`)

| Change |   Delta |             % |        Time | Samples | Location             |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `fse_compress.c:599` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|  Change |   Delta |             % |        Time |   Samples | Location          |
| ------: | ------: | ------------: | ----------: | --------: | ----------------- |
| removed | -1.632s | 100.0% → 0.0% | 1.63s → 0ms | 1,632 → 0 | `zstd_opt.c:1455` |
|     new | +1.610s | 0.0% → 100.0% | 0ms → 1.61s | 0 → 1,610 | `zstd_opt.c:1459` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|  Change |   Delta |            % |          Time | Samples | Location         |
| ------: | ------: | -----------: | ------------: | ------: | ---------------- |
| +400.0% | +4.00ms | 5.6% → 41.7% | 1.0ms → 5.0ms |   1 → 5 | `zstd_opt.c:378` |
| removed | -3.00ms | 16.7% → 0.0% |   3.0ms → 0ms |   3 → 0 | `zstd_opt.c:371` |
|  -66.7% | -2.00ms | 16.7% → 8.3% | 3.0ms → 1.0ms |   3 → 1 | `zstd_opt.c:364` |
| removed | -2.00ms | 11.1% → 0.0% |   2.0ms → 0ms |   2 → 0 | `zstd_opt.c:369` |
| +200.0% | +2.00ms | 5.6% → 25.0% | 1.0ms → 3.0ms |   1 → 3 | `zstd_opt.c:384` |

##### `FSE_buildCTable_wksp` (`fse_compress.c`)

|  Change |   Delta |            % |        Time | Samples | Location             |
| ------: | ------: | -----------: | ----------: | ------: | -------------------- |
| removed | -2.00ms | 40.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `fse_compress.c:172` |
| removed | -1.00ms | 20.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `fse_compress.c:104` |
| removed | -1.00ms | 20.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `fse_compress.c:130` |
| removed | -1.00ms | 20.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `fse_compress.c:170` |

##### `HIST_count_simple` (`hist.c`)

|  Change |   Delta |            % |        Time | Samples | Location    |
| ------: | ------: | -----------: | ----------: | ------: | ----------- |
| removed | -3.00ms | 75.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `hist.c:42` |

##### `ZSTD_selectEncodingType` (`zstd_compress_sequences.c`)

|  Change |   Delta |             % |        Time | Samples | Location                        |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------- |
| removed | -3.00ms | 100.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `zstd_compress_sequences.c:209` |

##### `FSE_writeNCount_generic` (`fse_compress.c`)

|  Change |   Delta |            % |        Time | Samples | Location             |
| ------: | ------: | -----------: | ----------: | ------: | -------------------- |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `fse_compress.c:302` |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `fse_compress.c:305` |

##### `ZSTD_seqToCodes` (`zstd_compress.c`)

|  Change |   Delta |            % |        Time | Samples | Location               |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------- |
| removed | -4.00ms | 57.1% → 0.0% | 4.0ms → 0ms |   4 → 0 | `zstd_compress.c:2697` |
|     new | +3.00ms | 0.0% → 60.0% | 0ms → 3.0ms |   0 → 3 | `zstd_compress.c:2706` |
| removed | -2.00ms | 28.6% → 0.0% | 2.0ms → 0ms |   2 → 0 | `zstd_compress.c:2696` |
| removed | -1.00ms | 14.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `zstd_compress.c:2694` |
|     new | +1.00ms | 0.0% → 20.0% | 0ms → 1.0ms |   0 → 1 | `zstd_compress.c:2707` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|  Change |   Delta |             % |        Time | Samples | Location               |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `zstd_compress.c:4154` |

##### `ZSTD_encodeSequences` (`zstd_compress_sequences.c`)

| Change |   Delta |      % |          Time | Samples | Location                        |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------- |
| -12.5% | -1.00ms | 100.0% | 8.0ms → 7.0ms |   8 → 7 | `zstd_compress_sequences.c:437` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

| Change |    Delta |      % |            Time |         Samples | Caller                    | Location     |
| -----: | -------: | -----: | --------------: | --------------: | ------------------------- | ------------ |
|  +0.2% | +18.00ms | 100.0% | 10.08s → 10.10s | 10,082 → 10,100 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|  Change |   Delta |              % |           Time | Samples | Caller                              | Location          |
| ------: | ------: | -------------: | -------------: | ------: | ----------------------------------- | ----------------- |
| +150.0% | +6.00ms | 100.0% → 83.3% | 4.0ms → 10.0ms |  4 → 10 | `ZSTD_buildSequencesStatistics`     | `zstd_compress.c` |
|     new | +2.00ms |   0.0% → 16.7% |    0ms → 2.0ms |   0 → 2 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c` |

##### `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`)

| Change |   Delta |             % |        Time | Samples | Caller            | Location          |
| -----: | ------: | ------------: | ----------: | ------: | ----------------- | ----------------- |
|    new | +8.00ms | 0.0% → 100.0% | 0ms → 8.0ms |   0 → 8 | `ZSTD_splitBlock` | `zstd_preSplit.c` |

##### `ZSTD_XXH64_update` (`xxhash.h`)

| Change |   Delta |              % |          Time | Samples | Caller                           | Location            |
| -----: | ------: | -------------: | ------------: | ------: | -------------------------------- | ------------------- |
|    new | +5.00ms |   0.0% → 71.4% |   0ms → 5.0ms |   0 → 5 | `ZSTD_compressContinue_internal` | `zstd_compress.c`   |
| -33.3% | -1.00ms | 100.0% → 28.6% | 3.0ms → 2.0ms |   3 → 2 | `ZSTDMT_compressionJob`          | `zstdmt_compress.c` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

| Change |   Delta |      % |            Time | Samples | Caller                          | Location     |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------- | ------------ |
| +14.8% | +4.00ms | 100.0% | 27.0ms → 31.0ms | 27 → 31 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `unknown (libc.so.6)` (`<unknown>`)

|  Change |   Delta |             % |          Time | Samples | Caller                              | Location          |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------- | ----------------- |
| +166.7% | +5.00ms | 50.0% → 88.9% | 3.0ms → 8.0ms |   3 → 8 | `ZSTD_compressStream2`              | `zstd_compress.c` |
| removed | -2.00ms |  33.3% → 0.0% |   2.0ms → 0ms |   2 → 0 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c` |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

| Change |   Delta |      % |            Time | Samples | Caller               | Location          |
| -----: | ------: | -----: | --------------: | ------: | -------------------- | ----------------- |
| +10.7% | +3.00ms | 100.0% | 28.0ms → 31.0ms | 28 → 31 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_splitBlock` (`zstd_preSplit.c`)

| Change |   Delta |             % |        Time | Samples | Caller                           | Location          |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------- | ----------------- |
|    new | +3.00ms | 0.0% → 100.0% | 0ms → 3.0ms |   0 → 3 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

| Change |   Delta |     % |              Time |   Samples | Caller               | Location          |
| -----: | ------: | ----: | ----------------: | --------: | -------------------- | ----------------- |
|  +1.8% | +2.00ms | 99.1% | 114.0ms → 116.0ms | 114 → 116 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`)

| Change |   Delta |      % |          Time | Samples | Caller               | Location          |
| -----: | ------: | -----: | ------------: | ------: | -------------------- | ----------------- |
| +40.0% | +2.00ms | 100.0% | 5.0ms → 7.0ms |   5 → 7 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

| Change |   Delta |      % |            Time | Samples | Caller                    | Location     |
| -----: | ------: | -----: | --------------: | ------: | ------------------------- | ------------ |
|  +4.2% | +1.00ms | 100.0% | 24.0ms → 25.0ms | 24 → 25 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

| Change |   Delta |             % |        Time | Samples | Caller                           | Location          |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------- | ----------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `HUF_writeCTable_wksp` (`huf_compress.c`)

| Change |   Delta |             % |        Time | Samples | Caller                | Location         |
| -----: | ------: | ------------: | ----------: | ------: | --------------------- | ---------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `HUF_optimalTableLog` | `huf_compress.c` |

##### `HUF_optimalTableLog` (`huf_compress.c`)

| Change |   Delta |             % |        Time | Samples | Caller                        | Location          |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------- | ----------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `ZSTD_buildBlockEntropyStats` | `zstd_compress.c` |

##### `folio_add_lru_vma ([kernel])` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                         | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------ | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `__handle_mm_fault ([kernel])` | `<unknown>` |

##### `get_page_from_freelist ([kernel])` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                                   | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ---------------------------------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `__alloc_frozen_pages_noprof ([kernel])` | `<unknown>` |

##### `FSE_compress_usingCTable_generic` (`fse_compress.c`)

| Change |   Delta |             % |        Time | Samples | Caller                 | Location         |
| -----: | ------: | ------------: | ----------: | ------: | ---------------------- | ---------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `HUF_writeCTable_wksp` | `huf_compress.c` |

##### `folios_put_refs ([kernel])` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                                  | Location    |
| -----: | ------: | ------------: | ----------: | ------: | --------------------------------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `__folio_batch_add_and_move ([kernel])` | `<unknown>` |

##### `caches_clean_inval_pou ([kernel])` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                            | Location    |
| -----: | ------: | ------------: | ----------: | ------: | --------------------------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `__sync_icache_dcache ([kernel])` | `<unknown>` |

##### `__arm64_sys_write ([kernel])` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                  | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

| Change |    Delta |     % |          Time |       Samples | Caller                        | Location          |
| -----: | -------: | ----: | ------------: | ------------: | ----------------------------- | ----------------- |
|  -1.4% | -23.00ms | 99.6% | 1.63s → 1.60s | 1,626 → 1,603 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
| +16.7% |  +1.00ms |  0.4% | 6.0ms → 7.0ms |         6 → 7 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_updateStats` (`zstd_opt.c`)

| Change |   Delta |      % |            Time | Samples | Caller               | Location          |
| -----: | ------: | -----: | --------------: | ------: | -------------------- | ----------------- |
| -33.3% | -6.00ms | 100.0% | 18.0ms → 12.0ms | 18 → 12 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `FSE_buildCTable_wksp` (`fse_compress.c`)

|  Change |   Delta |            % |        Time | Samples | Caller                 | Location                    |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------- | --------------------------- |
| removed | -3.00ms | 60.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `ZSTD_buildCTable`     | `zstd_compress_sequences.c` |
| removed | -2.00ms | 40.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `HUF_writeCTable_wksp` | `huf_compress.c`            |

##### `HIST_count_simple` (`hist.c`)

|  Change |   Delta |              % |          Time | Samples | Caller                 | Location         |
| ------: | ------: | -------------: | ------------: | ------: | ---------------------- | ---------------- |
| removed | -2.00ms |   50.0% → 0.0% |   2.0ms → 0ms |   2 → 0 | `HIST_count_wksp`      | `hist.c`         |
|  -50.0% | -1.00ms | 50.0% → 100.0% | 2.0ms → 1.0ms |   2 → 1 | `HUF_writeCTable_wksp` | `huf_compress.c` |

##### `ZSTD_selectEncodingType` (`zstd_compress_sequences.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                          | Location          |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------- | ----------------- |
| removed | -3.00ms | 100.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |

##### `__arch_copy_to_user ([kernel])` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                         | Location    |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------ | ----------- |
| -33.3% | -3.00ms | 100.0% | 9.0ms → 6.0ms |   9 → 6 | `copy_page_to_iter ([kernel])` | `<unknown>` |

##### `FSE_writeNCount_generic` (`fse_compress.c`)

|  Change |   Delta |            % |        Time | Samples | Caller                 | Location                    |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------- | --------------------------- |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `HUF_writeCTable_wksp` | `huf_compress.c`            |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_NCountCost`      | `zstd_compress_sequences.c` |

##### `ZSTD_seqToCodes` (`zstd_compress.c`)

| Change |   Delta |             % |          Time | Samples | Caller                        | Location          |
| -----: | ------: | ------------: | ------------: | ------: | ----------------------------- | ----------------- |
| -40.0% | -2.00ms | 71.4% → 60.0% | 5.0ms → 3.0ms |   5 → 3 | `ZSTD_buildBlockEntropyStats` | `zstd_compress.c` |

##### `count_memcg_events ([kernel])` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                       | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `handle_mm_fault ([kernel])` | `<unknown>` |

##### `clear_page ([kernel])` (`<unknown>`)

| Change |   Delta |             % |          Time | Samples | Caller                                | Location    |
| -----: | ------: | ------------: | ------------: | ------: | ------------------------------------- | ----------- |
| -33.3% | -1.00ms | 75.0% → 66.7% | 3.0ms → 2.0ms |   3 → 2 | `vma_alloc_anon_folio_pmd ([kernel])` | `<unknown>` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                           | Location          |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------- | ----------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTD_encodeSequences` (`zstd_compress_sequences.c`)

| Change |   Delta |      % |          Time | Samples | Caller                                  | Location          |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------------- | ----------------- |
| -12.5% | -1.00ms | 100.0% | 8.0ms → 7.0ms |   8 → 7 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `htab_map_hash ([kernel])` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                                            | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `bpf_prog_197ceaf961e0cb1e_trace_task ([kernel])` | `<unknown>` |

##### `handle_softirqs ([kernel])` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                    | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `__do_softirq ([kernel])` | `<unknown>` |

##### `__pthread_mutex_lock (libc.so.6)` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                  | Location           |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------- | ------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `AIO_IOPool_acquireJob` | `fileio_asyncio.c` |

##### `kthread_blkcg ([kernel])` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                                 | Location    |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `__folio_throttle_swaprate ([kernel])` | `<unknown>` |

##### `bio_add_page ([kernel])` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                     | Location    |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `bio_add_folio ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                            | Location    |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `folio_add_file_rmap_ptes ([kernel])` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                         | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------ | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `filemap_map_pages ([kernel])` | `<unknown>` |

##### `_raw_spin_unlock_irqrestore ([kernel])` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                 | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `wake_up_q ([kernel])` | `<unknown>` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |              Time |         Samples | Function                                | Location            |
| ------: | -------: | ------------: | ----------------: | --------------: | --------------------------------------- | ------------------- |
|   +0.2% | +20.00ms | 84.2% → 84.4% |   10.11s → 10.13s | 10,111 → 10,131 | `ZSTD_btGetAllMatches_noDict_3`         | `zstd_opt.c`        |
|     new | +15.00ms |   0.0% → 0.1% |      0ms → 15.0ms |          0 → 15 | `ZSTD_entropyCompressSeqStore`          | `zstd_compress.c`   |
|     new | +11.00ms |   0.0% → 0.1% |      0ms → 11.0ms |          0 → 11 | `ZSTD_splitBlock`                       | `zstd_preSplit.c`   |
|   +0.1% |  +9.00ms |         99.8% |   11.98s → 11.99s | 11,982 → 11,991 | `ZSTDMT_compressionJob`                 | `zstdmt_compress.c` |
|   +0.1% |  +9.00ms |         99.8% |   11.98s → 11.99s | 11,976 → 11,985 | `ZSTD_compressContinue_internal`        | `zstd_compress.c`   |
| +200.0% |  +8.00ms |  <0.1% → 0.1% |    4.0ms → 12.0ms |          4 → 12 | `HIST_count_parallel_wksp`              | `hist.c`            |
|     new |  +8.00ms |   0.0% → 0.1% |       0ms → 8.0ms |           0 → 8 | `ZSTD_recordFingerprint_1`              | `zstd_preSplit.c`   |
|     ~0% |  +6.00ms |        100.0% |   12.00s → 12.01s | 12,003 → 12,009 | `unknown (libc.so.6)`                   | `<unknown>`         |
| +133.3% |  +4.00ms |  <0.1% → 0.1% |     3.0ms → 7.0ms |           3 → 7 | `ZSTD_XXH64_update`                     | `xxhash.h`          |
|  +14.8% |  +4.00ms |   0.2% → 0.3% |   27.0ms → 31.0ms |         27 → 31 | `ZSTD_insertBt1`                        | `zstd_opt.c`        |
|     ~0% |  +3.00ms |         99.9% |            12.00s | 11,996 → 11,999 | `POOL_thread`                           | `pool.c`            |
|  +10.7% |  +3.00ms |   0.2% → 0.3% |   28.0ms → 31.0ms |         28 → 31 | `ZSTD_rawLiteralsCost`                  | `zstd_opt.c`        |
|  +23.1% |  +3.00ms |          0.1% |   13.0ms → 16.0ms |         13 → 16 | `ZSTD_compressSeqStore_singleBlock`     | `zstd_compress.c`   |
|  +50.0% |  +3.00ms |  <0.1% → 0.1% |     6.0ms → 9.0ms |           6 → 9 | `ZSTD_compressStream2`                  | `zstd_compress.c`   |
|  +42.9% |  +3.00ms |          0.1% |    7.0ms → 10.0ms |          7 → 10 | `__libc_start_main (libc.so.6)`         | `<unknown>`         |
|  +42.9% |  +3.00ms |          0.1% |    7.0ms → 10.0ms |          7 → 10 | `_start (zstd)`                         | `<unknown>`         |
|   +1.7% |  +2.00ms |          1.0% | 115.0ms → 117.0ms |       115 → 117 | `ZSTD_litLengthPrice`                   | `zstd_opt.c`        |
|  +15.4% |  +2.00ms |          0.1% |   13.0ms → 15.0ms |         13 → 15 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c`   |
|  +40.0% |  +2.00ms |  <0.1% → 0.1% |     5.0ms → 7.0ms |           5 → 7 | `ZSTD_optLdm_processMatchCandidate`     | `zstd_opt.c`        |
|  +28.6% |  +2.00ms |          0.1% |     7.0ms → 9.0ms |           7 → 9 | `FIO_compressFilename_srcFile`          | `fileio.c`          |

##### Ours

|  Change |    Delta |             % |              Time |         Samples | Function                                | Location            |
| ------: | -------: | ------------: | ----------------: | --------------: | --------------------------------------- | ------------------- |
|   +0.2% | +20.00ms | 84.2% → 84.4% |   10.11s → 10.13s | 10,111 → 10,131 | `ZSTD_btGetAllMatches_noDict_3`         | `zstd_opt.c`        |
|     new | +15.00ms |   0.0% → 0.1% |      0ms → 15.0ms |          0 → 15 | `ZSTD_entropyCompressSeqStore`          | `zstd_compress.c`   |
|     new | +11.00ms |   0.0% → 0.1% |      0ms → 11.0ms |          0 → 11 | `ZSTD_splitBlock`                       | `zstd_preSplit.c`   |
|   +0.1% |  +9.00ms |         99.8% |   11.98s → 11.99s | 11,982 → 11,991 | `ZSTDMT_compressionJob`                 | `zstdmt_compress.c` |
|   +0.1% |  +9.00ms |         99.8% |   11.98s → 11.99s | 11,976 → 11,985 | `ZSTD_compressContinue_internal`        | `zstd_compress.c`   |
| +200.0% |  +8.00ms |  <0.1% → 0.1% |    4.0ms → 12.0ms |          4 → 12 | `HIST_count_parallel_wksp`              | `hist.c`            |
|     new |  +8.00ms |   0.0% → 0.1% |       0ms → 8.0ms |           0 → 8 | `ZSTD_recordFingerprint_1`              | `zstd_preSplit.c`   |
| +133.3% |  +4.00ms |  <0.1% → 0.1% |     3.0ms → 7.0ms |           3 → 7 | `ZSTD_XXH64_update`                     | `xxhash.h`          |
|  +14.8% |  +4.00ms |   0.2% → 0.3% |   27.0ms → 31.0ms |         27 → 31 | `ZSTD_insertBt1`                        | `zstd_opt.c`        |
|     ~0% |  +3.00ms |         99.9% |            12.00s | 11,996 → 11,999 | `POOL_thread`                           | `pool.c`            |
|  +10.7% |  +3.00ms |   0.2% → 0.3% |   28.0ms → 31.0ms |         28 → 31 | `ZSTD_rawLiteralsCost`                  | `zstd_opt.c`        |
|  +23.1% |  +3.00ms |          0.1% |   13.0ms → 16.0ms |         13 → 16 | `ZSTD_compressSeqStore_singleBlock`     | `zstd_compress.c`   |
|  +50.0% |  +3.00ms |  <0.1% → 0.1% |     6.0ms → 9.0ms |           6 → 9 | `ZSTD_compressStream2`                  | `zstd_compress.c`   |
|   +1.7% |  +2.00ms |          1.0% | 115.0ms → 117.0ms |       115 → 117 | `ZSTD_litLengthPrice`                   | `zstd_opt.c`        |
|  +15.4% |  +2.00ms |          0.1% |   13.0ms → 15.0ms |         13 → 15 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c`   |
|  +40.0% |  +2.00ms |  <0.1% → 0.1% |     5.0ms → 7.0ms |           5 → 7 | `ZSTD_optLdm_processMatchCandidate`     | `zstd_opt.c`        |
|  +28.6% |  +2.00ms |          0.1% |     7.0ms → 9.0ms |           7 → 9 | `FIO_compressFilename_srcFile`          | `fileio.c`          |
|  +28.6% |  +2.00ms |          0.1% |     7.0ms → 9.0ms |           7 → 9 | `FIO_compressFilename`                  | `fileio.c`          |
|  +28.6% |  +2.00ms |          0.1% |     7.0ms → 9.0ms |           7 → 9 | `main`                                  | `zstdcli.c`         |
|     new |  +2.00ms |  0.0% → <0.1% |       0ms → 2.0ms |           0 → 2 | `HUF_compress_internal`                 | `huf_compress.c`    |

#### Improvements

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |            % |            Time | Samples | Function                                             | Location                    |
| ------: | -------: | -----------: | --------------: | ------: | ---------------------------------------------------- | --------------------------- |
|  -33.3% | -10.00ms |         0.2% | 30.0ms → 20.0ms | 30 → 20 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`           |
|  -31.0% |  -9.00ms |         0.2% | 29.0ms → 20.0ms | 29 → 20 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`           |
|  -36.4% |  -8.00ms |  0.2% → 0.1% | 22.0ms → 14.0ms | 22 → 14 | `ZSTD_buildBlockEntropyStats`                        | `zstd_compress.c`           |
|  -33.3% |  -7.00ms |  0.2% → 0.1% | 21.0ms → 14.0ms | 21 → 14 | `el0t_64_sync_handler ([kernel])`                    | `<unknown>`                 |
|  -33.3% |  -7.00ms |  0.2% → 0.1% | 21.0ms → 14.0ms | 21 → 14 | `el0t_64_sync ([kernel])`                            | `<unknown>`                 |
|  -33.3% |  -6.00ms |         0.1% | 18.0ms → 12.0ms | 18 → 12 | `ZSTD_updateStats`                                   | `zstd_opt.c`                |
|  -42.9% |  -6.00ms |         0.1% |  14.0ms → 8.0ms |  14 → 8 | `invoke_syscall.constprop.0 ([kernel])`              | `<unknown>`                 |
|  -40.0% |  -6.00ms |         0.1% |  15.0ms → 9.0ms |  15 → 9 | `el0_svc ([kernel])`                                 | `<unknown>`                 |
| removed |  -5.00ms | <0.1% → 0.0% |     5.0ms → 0ms |   5 → 0 | `FSE_buildCTable_wksp`                               | `fse_compress.c`            |
|  -35.7% |  -5.00ms |         0.1% |  14.0ms → 9.0ms |  14 → 9 | `do_el0_svc ([kernel])`                              | `<unknown>`                 |
| removed |  -4.00ms | <0.1% → 0.0% |     4.0ms → 0ms |   4 → 0 | `ZSTD_selectEncodingType`                            | `zstd_compress_sequences.c` |
|  -36.4% |  -4.00ms |         0.1% |  11.0ms → 7.0ms |  11 → 7 | `filemap_read ([kernel])`                            | `<unknown>`                 |
|  -36.4% |  -4.00ms |         0.1% |  11.0ms → 7.0ms |  11 → 7 | `generic_file_read_iter ([kernel])`                  | `<unknown>`                 |
|  -36.4% |  -4.00ms |         0.1% |  11.0ms → 7.0ms |  11 → 7 | `ext4_file_read_iter ([kernel])`                     | `<unknown>`                 |
|  -36.4% |  -4.00ms |         0.1% |  11.0ms → 7.0ms |  11 → 7 | `do_iter_readv_writev ([kernel])`                    | `<unknown>`                 |
|  -36.4% |  -4.00ms |         0.1% |  11.0ms → 7.0ms |  11 → 7 | `vfs_iter_read ([kernel])`                           | `<unknown>`                 |
|  -36.4% |  -4.00ms |         0.1% |  11.0ms → 7.0ms |  11 → 7 | `backing_file_read_iter ([kernel])`                  | `<unknown>`                 |
|  -36.4% |  -4.00ms |         0.1% |  11.0ms → 7.0ms |  11 → 7 | `ovl_read_iter ([kernel])`                           | `<unknown>`                 |
|  -36.4% |  -4.00ms |         0.1% |  11.0ms → 7.0ms |  11 → 7 | `vfs_read ([kernel])`                                | `<unknown>`                 |
|  -36.4% |  -4.00ms |         0.1% |  11.0ms → 7.0ms |  11 → 7 | `ksys_read ([kernel])`                               | `<unknown>`                 |

##### Ours

|  Change |    Delta |            % |            Time |         Samples | Function                                             | Location                    |
| ------: | -------: | -----------: | --------------: | --------------: | ---------------------------------------------------- | --------------------------- |
|  -33.3% | -10.00ms |         0.2% | 30.0ms → 20.0ms |         30 → 20 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c`           |
|  -31.0% |  -9.00ms |         0.2% | 29.0ms → 20.0ms |         29 → 20 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c`           |
|  -36.4% |  -8.00ms |  0.2% → 0.1% | 22.0ms → 14.0ms |         22 → 14 | `ZSTD_buildBlockEntropyStats`                        | `zstd_compress.c`           |
|  -33.3% |  -6.00ms |         0.1% | 18.0ms → 12.0ms |         18 → 12 | `ZSTD_updateStats`                                   | `zstd_opt.c`                |
| removed |  -5.00ms | <0.1% → 0.0% |     5.0ms → 0ms |           5 → 0 | `FSE_buildCTable_wksp`                               | `fse_compress.c`            |
| removed |  -4.00ms | <0.1% → 0.0% |     4.0ms → 0ms |           4 → 0 | `ZSTD_selectEncodingType`                            | `zstd_compress_sequences.c` |
|  -36.4% |  -4.00ms |         0.1% |  11.0ms → 7.0ms |          11 → 7 | `AIO_ReadPool_executeReadJob`                        | `fileio_asyncio.c`          |
| removed |  -3.00ms | <0.1% → 0.0% |     3.0ms → 0ms |           3 → 0 | `ZSTD_buildCTable`                                   | `zstd_compress_sequences.c` |
|  -75.0% |  -3.00ms |        <0.1% |   4.0ms → 1.0ms |           4 → 1 | `HIST_count_simple`                                  | `hist.c`                    |
|  -10.5% |  -2.00ms |  0.2% → 0.1% | 19.0ms → 17.0ms |         19 → 17 | `ZSTD_compressBlock_btultra2`                        | `zstd_opt.c`                |
| removed |  -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |           2 → 0 | `FSE_writeNCount_generic`                            | `fse_compress.c`            |
|  -40.0% |  -2.00ms |        <0.1% |   5.0ms → 3.0ms |           5 → 3 | `HUF_writeCTable_wksp`                               | `huf_compress.c`            |
|  -28.6% |  -2.00ms | 0.1% → <0.1% |   7.0ms → 5.0ms |           7 → 5 | `ZSTD_seqToCodes`                                    | `zstd_compress.c`           |
| removed |  -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |           2 → 0 | `HIST_count_wksp`                                    | `hist.c`                    |
|     ~0% |  -1.00ms |        98.0% |          11.77s | 11,767 → 11,766 | `ZSTD_compressBlock_opt2`                            | `zstd_opt.c`                |
|   -9.1% |  -1.00ms |         0.1% | 11.0ms → 10.0ms |         11 → 10 | `ZSTD_buildSequencesStatistics`                      | `zstd_compress.c`           |
|  -12.5% |  -1.00ms |         0.1% |   8.0ms → 7.0ms |           8 → 7 | `ZSTD_encodeSequences`                               | `zstd_compress_sequences.c` |
| removed |  -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |           1 → 0 | `ZSTD_NCountCost`                                    | `zstd_compress_sequences.c` |
| removed |  -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |           1 → 0 | `AIO_IOPool_acquireJob`                              | `fileio_asyncio.c`          |
| removed |  -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |           1 → 0 | `AIO_ReadPool_fillBuffer`                            | `fileio_asyncio.c`          |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

| Change |    Delta |      % |            Time |         Samples | Caller                    | Location     |
| -----: | -------: | -----: | --------------: | --------------: | ------------------------- | ------------ |
|  +0.2% | +20.00ms | 100.0% | 10.11s → 10.13s | 10,111 → 10,131 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `ZSTD_entropyCompressSeqStore` (`zstd_compress.c`)

| Change |    Delta |             % |         Time | Samples | Caller                              | Location          |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------------------- | ----------------- |
|    new | +15.00ms | 0.0% → 100.0% | 0ms → 15.0ms |  0 → 15 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `ZSTD_splitBlock` (`zstd_preSplit.c`)

| Change |    Delta |             % |         Time | Samples | Caller                           | Location          |
| -----: | -------: | ------------: | -----------: | ------: | -------------------------------- | ----------------- |
|    new | +11.00ms | 0.0% → 100.0% | 0ms → 11.0ms |  0 → 11 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

| Change |   Delta |      % |            Time |         Samples | Caller        | Location |
| -----: | ------: | -----: | --------------: | --------------: | ------------- | -------- |
|  +0.1% | +9.00ms | 100.0% | 11.98s → 11.99s | 11,982 → 11,991 | `POOL_thread` | `pool.c` |

##### `ZSTD_compressContinue_internal` (`zstd_compress.c`)

| Change |   Delta |      % |            Time |         Samples | Caller                  | Location            |
| -----: | ------: | -----: | --------------: | --------------: | ----------------------- | ------------------- |
|  +0.1% | +9.00ms | 100.0% | 11.98s → 11.99s | 11,976 → 11,985 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|  Change |   Delta |              % |           Time | Samples | Caller                              | Location          |
| ------: | ------: | -------------: | -------------: | ------: | ----------------------------------- | ----------------- |
| +150.0% | +6.00ms | 100.0% → 83.3% | 4.0ms → 10.0ms |  4 → 10 | `ZSTD_buildSequencesStatistics`     | `zstd_compress.c` |
|     new | +2.00ms |   0.0% → 16.7% |    0ms → 2.0ms |   0 → 2 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c` |

##### `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`)

| Change |   Delta |             % |        Time | Samples | Caller            | Location          |
| -----: | ------: | ------------: | ----------: | ------: | ----------------- | ----------------- |
|    new | +8.00ms | 0.0% → 100.0% | 0ms → 8.0ms |   0 → 8 | `ZSTD_splitBlock` | `zstd_preSplit.c` |

##### `unknown (libc.so.6)` (`<unknown>`)

|  Change |   Delta |            % |           Time |         Samples | Caller                              | Location          |
| ------: | ------: | -----------: | -------------: | --------------: | ----------------------------------- | ----------------- |
|  -36.4% | -4.00ms |         0.1% | 11.0ms → 7.0ms |          11 → 7 | `fread (libc.so.6)`                 | `<unknown>`       |
|     ~0% | +3.00ms |        99.9% |         12.00s | 11,996 → 11,999 | `unknown (libc.so.6)`               | `<unknown>`       |
|  +50.0% | +3.00ms | <0.1% → 0.1% |  6.0ms → 9.0ms |           6 → 9 | `ZSTD_compressStream2`              | `zstd_compress.c` |
|  +42.9% | +3.00ms |         0.1% | 7.0ms → 10.0ms |          7 → 10 | `__libc_start_main (libc.so.6)`     | `<unknown>`       |
| removed | -2.00ms | <0.1% → 0.0% |    2.0ms → 0ms |           2 → 0 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c` |

##### `ZSTD_XXH64_update` (`xxhash.h`)

| Change |   Delta |              % |          Time | Samples | Caller                           | Location            |
| -----: | ------: | -------------: | ------------: | ------: | -------------------------------- | ------------------- |
|    new | +5.00ms |   0.0% → 71.4% |   0ms → 5.0ms |   0 → 5 | `ZSTD_compressContinue_internal` | `zstd_compress.c`   |
| -33.3% | -1.00ms | 100.0% → 28.6% | 3.0ms → 2.0ms |   3 → 2 | `ZSTDMT_compressionJob`          | `zstdmt_compress.c` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

| Change |   Delta |      % |            Time | Samples | Caller                          | Location     |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------- | ------------ |
| +14.8% | +4.00ms | 100.0% | 27.0ms → 31.0ms | 27 → 31 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `POOL_thread` (`pool.c`)

| Change |   Delta |      % |   Time |         Samples | Caller                | Location    |
| -----: | ------: | -----: | -----: | --------------: | --------------------- | ----------- |
|    ~0% | +3.00ms | 100.0% | 12.00s | 11,996 → 11,999 | `unknown (libc.so.6)` | `<unknown>` |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

| Change |   Delta |      % |            Time | Samples | Caller               | Location          |
| -----: | ------: | -----: | --------------: | ------: | -------------------- | ----------------- |
| +10.7% | +3.00ms | 100.0% | 28.0ms → 31.0ms | 28 → 31 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

| Change |   Delta |      % |            Time | Samples | Caller                           | Location          |
| -----: | ------: | -----: | --------------: | ------: | -------------------------------- | ----------------- |
| +23.1% | +3.00ms | 100.0% | 13.0ms → 16.0ms | 13 → 16 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTD_compressStream2` (`zstd_compress.c`)

| Change |   Delta |      % |          Time | Samples | Caller                         | Location   |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------ | ---------- |
| +50.0% | +3.00ms | 100.0% | 6.0ms → 9.0ms |   6 → 9 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `__libc_start_main (libc.so.6)` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller          | Location    |
| -----: | ------: | -----: | -------------: | ------: | --------------- | ----------- |
| +42.9% | +3.00ms | 100.0% | 7.0ms → 10.0ms |  7 → 10 | `_start (zstd)` | `<unknown>` |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

| Change |   Delta |     % |              Time |   Samples | Caller               | Location          |
| -----: | ------: | ----: | ----------------: | --------: | -------------------- | ----------------- |
|  +1.8% | +2.00ms | 99.1% | 114.0ms → 116.0ms | 114 → 116 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`)

|  Change |    Delta |             % |         Time | Samples | Caller                              | Location          |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------- | ----------------- |
|     new | +15.00ms | 0.0% → 100.0% | 0ms → 15.0ms |  0 → 15 | `ZSTD_entropyCompressSeqStore`      | `zstd_compress.c` |
| removed | -13.00ms | 100.0% → 0.0% | 13.0ms → 0ms |  13 → 0 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`)

| Change |   Delta |      % |          Time | Samples | Caller               | Location          |
| -----: | ------: | -----: | ------------: | ------: | -------------------- | ----------------- |
| +40.0% | +2.00ms | 100.0% | 5.0ms → 7.0ms |   5 → 7 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

| Change |   Delta |      % |          Time | Samples | Caller                 | Location   |
| -----: | ------: | -----: | ------------: | ------: | ---------------------- | ---------- |
| +28.6% | +2.00ms | 100.0% | 7.0ms → 9.0ms |   7 → 9 | `FIO_compressFilename` | `fileio.c` |

##### `FIO_compressFilename` (`fileio.c`)

| Change |   Delta |      % |          Time | Samples | Caller | Location    |
| -----: | ------: | -----: | ------------: | ------: | ------ | ----------- |
| +28.6% | +2.00ms | 100.0% | 7.0ms → 9.0ms |   7 → 9 | `main` | `zstdcli.c` |

##### `main` (`zstdcli.c`)

| Change |   Delta |      % |          Time | Samples | Caller                | Location    |
| -----: | ------: | -----: | ------------: | ------: | --------------------- | ----------- |
| +28.6% | +2.00ms | 100.0% | 7.0ms → 9.0ms |   7 → 9 | `unknown (libc.so.6)` | `<unknown>` |

##### `HUF_compress_internal` (`huf_compress.c`)

| Change |   Delta |             % |        Time | Samples | Caller                  | Location         |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------- | ---------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `HUF_compress4X_repeat` | `huf_compress.c` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|  Change |    Delta |           % |            Time | Samples | Caller                           | Location          |
| ------: | -------: | ----------: | --------------: | ------: | -------------------------------- | ----------------- |
|  -33.3% | -10.00ms |      100.0% | 30.0ms → 20.0ms | 30 → 20 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |
| removed |  -2.00ms | 6.7% → 0.0% |     2.0ms → 0ms |   2 → 0 | `ZSTD_deriveBlockSplitsHelper`   | `zstd_compress.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

| Change |   Delta |      % |            Time | Samples | Caller                         | Location          |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------ | ----------------- |
| -31.0% | -9.00ms | 100.0% | 29.0ms → 20.0ms | 29 → 20 | `ZSTD_deriveBlockSplitsHelper` | `zstd_compress.c` |

##### `ZSTD_buildBlockEntropyStats` (`zstd_compress.c`)

| Change |   Delta |      % |            Time | Samples | Caller                                               | Location          |
| -----: | ------: | -----: | --------------: | ------: | ---------------------------------------------------- | ----------------- |
| -36.4% | -8.00ms | 100.0% | 22.0ms → 14.0ms | 22 → 14 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Caller                    | Location    |
| -----: | ------: | -----: | --------------: | ------: | ------------------------- | ----------- |
| -33.3% | -7.00ms | 100.0% | 21.0ms → 14.0ms | 21 → 14 | `el0t_64_sync ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

|  Change |   Delta |             % |           Time | Samples | Caller                            | Location    |
| ------: | ------: | ------------: | -------------: | ------: | --------------------------------- | ----------- |
|  -36.4% | -4.00ms | 52.4% → 50.0% | 11.0ms → 7.0ms |  11 → 7 | `__read (libc.so.6)`              | `<unknown>` |
|  -33.3% | -2.00ms |         28.6% |  6.0ms → 4.0ms |   6 → 4 | `unknown (libc.so.6)`             | `<unknown>` |
| removed | -1.00ms |   4.8% → 0.0% |    1.0ms → 0ms |   1 → 0 | `unknown ([unmapped])`            | `<unknown>` |
| removed | -1.00ms |   4.8% → 0.0% |    1.0ms → 0ms |   1 → 0 | `unknown (ld-linux-aarch64.so.1)` | `<unknown>` |
| removed | -1.00ms |   4.8% → 0.0% |    1.0ms → 0ms |   1 → 0 | `pthread_cond_signal (libc.so.6)` | `<unknown>` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

| Change |   Delta |      % |            Time | Samples | Caller               | Location          |
| -----: | ------: | -----: | --------------: | ------: | -------------------- | ----------------- |
| -33.3% | -6.00ms | 100.0% | 18.0ms → 12.0ms | 18 → 12 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller                  | Location    |
| -----: | ------: | -----: | -------------: | ------: | ----------------------- | ----------- |
| -42.9% | -6.00ms | 100.0% | 14.0ms → 8.0ms |  14 → 8 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller                            | Location    |
| -----: | ------: | -----: | -------------: | ------: | --------------------------------- | ----------- |
| -40.0% | -6.00ms | 100.0% | 15.0ms → 9.0ms |  15 → 9 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `FSE_buildCTable_wksp` (`fse_compress.c`)

|  Change |   Delta |            % |        Time | Samples | Caller                 | Location                    |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------- | --------------------------- |
| removed | -3.00ms | 60.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `ZSTD_buildCTable`     | `zstd_compress_sequences.c` |
| removed | -2.00ms | 40.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `HUF_writeCTable_wksp` | `huf_compress.c`            |

##### `do_el0_svc ([kernel])` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller               | Location    |
| -----: | ------: | -----: | -------------: | ------: | -------------------- | ----------- |
| -35.7% | -5.00ms | 100.0% | 14.0ms → 9.0ms |  14 → 9 | `el0_svc ([kernel])` | `<unknown>` |

##### `ZSTD_selectEncodingType` (`zstd_compress_sequences.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                          | Location          |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------- | ----------------- |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |

##### `filemap_read ([kernel])` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller                              | Location    |
| -----: | ------: | -----: | -------------: | ------: | ----------------------------------- | ----------- |
| -36.4% | -4.00ms | 100.0% | 11.0ms → 7.0ms |  11 → 7 | `generic_file_read_iter ([kernel])` | `<unknown>` |

##### `generic_file_read_iter ([kernel])` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller                           | Location    |
| -----: | ------: | -----: | -------------: | ------: | -------------------------------- | ----------- |
| -36.4% | -4.00ms | 100.0% | 11.0ms → 7.0ms |  11 → 7 | `ext4_file_read_iter ([kernel])` | `<unknown>` |

##### `ext4_file_read_iter ([kernel])` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller                            | Location    |
| -----: | ------: | -----: | -------------: | ------: | --------------------------------- | ----------- |
| -36.4% | -4.00ms | 100.0% | 11.0ms → 7.0ms |  11 → 7 | `do_iter_readv_writev ([kernel])` | `<unknown>` |

##### `do_iter_readv_writev ([kernel])` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller                     | Location    |
| -----: | ------: | -----: | -------------: | ------: | -------------------------- | ----------- |
| -36.4% | -4.00ms | 100.0% | 11.0ms → 7.0ms |  11 → 7 | `vfs_iter_read ([kernel])` | `<unknown>` |

##### `vfs_iter_read ([kernel])` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller                              | Location    |
| -----: | ------: | -----: | -------------: | ------: | ----------------------------------- | ----------- |
| -36.4% | -4.00ms | 100.0% | 11.0ms → 7.0ms |  11 → 7 | `backing_file_read_iter ([kernel])` | `<unknown>` |

##### `backing_file_read_iter ([kernel])` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller                     | Location    |
| -----: | ------: | -----: | -------------: | ------: | -------------------------- | ----------- |
| -36.4% | -4.00ms | 100.0% | 11.0ms → 7.0ms |  11 → 7 | `ovl_read_iter ([kernel])` | `<unknown>` |

##### `ovl_read_iter ([kernel])` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller                | Location    |
| -----: | ------: | -----: | -------------: | ------: | --------------------- | ----------- |
| -36.4% | -4.00ms | 100.0% | 11.0ms → 7.0ms |  11 → 7 | `vfs_read ([kernel])` | `<unknown>` |

##### `vfs_read ([kernel])` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller                 | Location    |
| -----: | ------: | -----: | -------------: | ------: | ---------------------- | ----------- |
| -36.4% | -4.00ms | 100.0% | 11.0ms → 7.0ms |  11 → 7 | `ksys_read ([kernel])` | `<unknown>` |

##### `ksys_read ([kernel])` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller                        | Location    |
| -----: | ------: | -----: | -------------: | ------: | ----------------------------- | ----------- |
| -36.4% | -4.00ms | 100.0% | 11.0ms → 7.0ms |  11 → 7 | `__arm64_sys_read ([kernel])` | `<unknown>` |

##### `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`)

| Change |   Delta |      % |           Time | Samples | Caller        | Location |
| -----: | ------: | -----: | -------------: | ------: | ------------- | -------- |
| -36.4% | -4.00ms | 100.0% | 11.0ms → 7.0ms |  11 → 7 | `POOL_thread` | `pool.c` |

##### `ZSTD_buildCTable` (`zstd_compress_sequences.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                          | Location          |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------- | ----------------- |
| removed | -3.00ms | 100.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |

##### `HIST_count_simple` (`hist.c`)

|  Change |   Delta |              % |          Time | Samples | Caller                 | Location         |
| ------: | ------: | -------------: | ------------: | ------: | ---------------------- | ---------------- |
| removed | -2.00ms |   50.0% → 0.0% |   2.0ms → 0ms |   2 → 0 | `HIST_count_wksp`      | `hist.c`         |
|  -50.0% | -1.00ms | 50.0% → 100.0% | 2.0ms → 1.0ms |   2 → 1 | `HUF_writeCTable_wksp` | `huf_compress.c` |

##### `ZSTD_compressBlock_btultra2` (`zstd_opt.c`)

| Change |   Delta |      % |            Time | Samples | Caller               | Location          |
| -----: | ------: | -----: | --------------: | ------: | -------------------- | ----------------- |
| -10.5% | -2.00ms | 100.0% | 19.0ms → 17.0ms | 19 → 17 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `FSE_writeNCount_generic` (`fse_compress.c`)

|  Change |   Delta |            % |        Time | Samples | Caller                 | Location                    |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------- | --------------------------- |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `HUF_writeCTable_wksp` | `huf_compress.c`            |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_NCountCost`      | `zstd_compress_sequences.c` |

##### `HUF_writeCTable_wksp` (`huf_compress.c`)

|  Change |   Delta |              % |          Time | Samples | Caller                        | Location          |
| ------: | ------: | -------------: | ------------: | ------: | ----------------------------- | ----------------- |
| removed | -1.00ms |   20.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `ZSTD_buildBlockEntropyStats` | `zstd_compress.c` |
|  -25.0% | -1.00ms | 80.0% → 100.0% | 4.0ms → 3.0ms |   4 → 3 | `HUF_optimalTableLog`         | `huf_compress.c`  |

##### `ZSTD_seqToCodes` (`zstd_compress.c`)

| Change |   Delta |             % |          Time | Samples | Caller                        | Location          |
| -----: | ------: | ------------: | ------------: | ------: | ----------------------------- | ----------------- |
| -40.0% | -2.00ms | 71.4% → 60.0% | 5.0ms → 3.0ms |   5 → 3 | `ZSTD_buildBlockEntropyStats` | `zstd_compress.c` |

##### `HIST_count_wksp` (`hist.c`)

|  Change |   Delta |            % |        Time | Samples | Caller                                               | Location          |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------------------------------------- | ----------------- |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_buildBlockEntropyStats`                        | `zstd_compress.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

| Change |   Delta |             % |            Time |         Samples | Caller                        | Location          |
| -----: | ------: | ------------: | --------------: | --------------: | ----------------------------- | ----------------- |
| -11.1% | -2.00ms |   0.2% → 0.1% | 18.0ms → 16.0ms |         18 → 16 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |
|    ~0% | +1.00ms | 99.8% → 99.9% |          11.75s | 11,749 → 11,750 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

| Change |   Delta |             % |          Time | Samples | Caller                                  | Location          |
| -----: | ------: | ------------: | ------------: | ------: | --------------------------------------- | ----------------- |
| -25.0% | -2.00ms | 72.7% → 60.0% | 8.0ms → 6.0ms |   8 → 6 | `ZSTD_buildBlockEntropyStats`           | `zstd_compress.c` |
| +33.3% | +1.00ms | 27.3% → 40.0% | 3.0ms → 4.0ms |   3 → 4 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `ZSTD_encodeSequences` (`zstd_compress_sequences.c`)

| Change |   Delta |      % |          Time | Samples | Caller                                  | Location          |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------------- | ----------------- |
| -12.5% | -1.00ms | 100.0% | 8.0ms → 7.0ms |   8 → 7 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `ZSTD_NCountCost` (`zstd_compress_sequences.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                    | Location                    |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------- | --------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_selectEncodingType` | `zstd_compress_sequences.c` |

##### `AIO_IOPool_acquireJob` (`fileio_asyncio.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                    | Location           |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------- | ------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `AIO_ReadPool_fillBuffer` | `fileio_asyncio.c` |

##### `AIO_ReadPool_fillBuffer` (`fileio_asyncio.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                         | Location   |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------ | ---------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `FIO_compressFilename_srcFile` | `fileio.c` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

|  Change |   Delta |            % |            Time | Samples | Callee                   | Location     |
| ------: | ------: | -----------: | --------------: | ------: | ------------------------ | ------------ |
|  +14.8% | +4.00ms |         0.3% | 27.0ms → 31.0ms | 27 → 31 | `ZSTD_insertBt1`         | `zstd_opt.c` |
| removed | -2.00ms | <0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `el0t_64_irq ([kernel])` | `<unknown>`  |

##### `ZSTD_entropyCompressSeqStore` (`zstd_compress.c`)

| Change |    Delta |             % |         Time | Samples | Callee                                  | Location          |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------- | ----------------- |
|    new | +15.00ms | 0.0% → 100.0% | 0ms → 15.0ms |  0 → 15 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `ZSTD_splitBlock` (`zstd_preSplit.c`)

| Change |   Delta |            % |        Time | Samples | Callee                     | Location          |
| -----: | ------: | -----------: | ----------: | ------: | -------------------------- | ----------------- |
|    new | +8.00ms | 0.0% → 72.7% | 0ms → 8.0ms |   0 → 8 | `ZSTD_recordFingerprint_1` | `zstd_preSplit.c` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

| Change |   Delta |            % |            Time |         Samples | Callee                           | Location            |
| -----: | ------: | -----------: | --------------: | --------------: | -------------------------------- | ------------------- |
|  +0.1% | +9.00ms |        99.9% | 11.98s → 11.99s | 11,976 → 11,985 | `ZSTD_compressContinue_internal` | `zstd_compress.c`   |
| -33.3% | -1.00ms |        <0.1% |   3.0ms → 2.0ms |           3 → 2 | `ZSTD_XXH64_update`              | `xxhash.h`          |
|    new | +1.00ms | 0.0% → <0.1% |     0ms → 1.0ms |           0 → 1 | `ZSTDMT_getBuffer`               | `zstdmt_compress.c` |

##### `ZSTD_compressContinue_internal` (`zstd_compress.c`)

| Change |    Delta |            % |            Time | Samples | Callee                              | Location          |
| -----: | -------: | -----------: | --------------: | ------: | ----------------------------------- | ----------------- |
|    new | +11.00ms |  0.0% → 0.1% |    0ms → 11.0ms |  0 → 11 | `ZSTD_splitBlock`                   | `zstd_preSplit.c` |
| -33.3% | -10.00ms |  0.3% → 0.2% | 30.0ms → 20.0ms | 30 → 20 | `ZSTD_deriveBlockSplitsHelper`      | `zstd_compress.c` |
|    new |  +5.00ms | 0.0% → <0.1% |     0ms → 5.0ms |   0 → 5 | `ZSTD_XXH64_update`                 | `xxhash.h`        |
| +23.1% |  +3.00ms |         0.1% | 13.0ms → 16.0ms | 13 → 16 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `unknown (libc.so.6)` (`<unknown>`)

| Change |   Delta |     % |           Time |         Samples | Callee                    | Location    |
| -----: | ------: | ----: | -------------: | --------------: | ------------------------- | ----------- |
| -36.4% | -4.00ms |  0.1% | 11.0ms → 7.0ms |          11 → 7 | `__read (libc.so.6)`      | `<unknown>` |
|    ~0% | +3.00ms | 99.9% |         12.00s | 11,996 → 11,999 | `POOL_thread`             | `pool.c`    |
|    ~0% | +3.00ms | 99.9% |         12.00s | 11,996 → 11,999 | `unknown (libc.so.6)`     | `<unknown>` |
| -33.3% | -2.00ms | <0.1% |  6.0ms → 4.0ms |           6 → 4 | `el0t_64_sync ([kernel])` | `<unknown>` |
| +28.6% | +2.00ms |  0.1% |  7.0ms → 9.0ms |           7 → 9 | `main`                    | `zstdcli.c` |

##### `POOL_thread` (`pool.c`)

|  Change |   Delta |            % |            Time |         Samples | Callee                            | Location            |
| ------: | ------: | -----------: | --------------: | --------------: | --------------------------------- | ------------------- |
|   +0.1% | +9.00ms |        99.9% | 11.98s → 11.99s | 11,982 → 11,991 | `ZSTDMT_compressionJob`           | `zstdmt_compress.c` |
|  -36.4% | -4.00ms |         0.1% |  11.0ms → 7.0ms |          11 → 7 | `AIO_ReadPool_executeReadJob`     | `fileio_asyncio.c`  |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |           1 → 0 | `pthread_cond_signal (libc.so.6)` | `<unknown>`         |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |           1 → 0 | `pthread_cond_wait (libc.so.6)`   | `<unknown>`         |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|  Change |    Delta |             % |         Time | Samples | Callee                                  | Location          |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------------- | ----------------- |
|     new | +15.00ms |  0.0% → 93.8% | 0ms → 15.0ms |  0 → 15 | `ZSTD_entropyCompressSeqStore`          | `zstd_compress.c` |
| removed | -13.00ms | 100.0% → 0.0% | 13.0ms → 0ms |  13 → 0 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `ZSTD_compressStream2` (`zstd_compress.c`)

| Change |   Delta |      % |          Time | Samples | Callee                | Location    |
| -----: | ------: | -----: | ------------: | ------: | --------------------- | ----------- |
| +50.0% | +3.00ms | 100.0% | 6.0ms → 9.0ms |   6 → 9 | `unknown (libc.so.6)` | `<unknown>` |

##### `__libc_start_main (libc.so.6)` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Callee                | Location    |
| -----: | ------: | -----: | -------------: | ------: | --------------------- | ----------- |
| +42.9% | +3.00ms | 100.0% | 7.0ms → 10.0ms |  7 → 10 | `unknown (libc.so.6)` | `<unknown>` |

##### `_start (zstd)` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Callee                          | Location    |
| -----: | ------: | -----: | -------------: | ------: | ------------------------------- | ----------- |
| +42.9% | +3.00ms | 100.0% | 7.0ms → 10.0ms |  7 → 10 | `__libc_start_main (libc.so.6)` | `<unknown>` |

##### `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`)

| Change |   Delta |             % |          Time | Samples | Callee                          | Location                    |
| -----: | ------: | ------------: | ------------: | ------: | ------------------------------- | --------------------------- |
|    new | +2.00ms |  0.0% → 13.3% |   0ms → 2.0ms |   0 → 2 | `ZSTD_compressLiterals`         | `zstd_compress_literals.c`  |
| -12.5% | -1.00ms | 61.5% → 46.7% | 8.0ms → 7.0ms |   8 → 7 | `ZSTD_encodeSequences`          | `zstd_compress_sequences.c` |
| +33.3% | +1.00ms | 23.1% → 26.7% | 3.0ms → 4.0ms |   3 → 4 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c`           |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

|  Change |   Delta |              % |          Time | Samples | Callee                    | Location           |
| ------: | ------: | -------------: | ------------: | ------: | ------------------------- | ------------------ |
|  +50.0% | +3.00ms | 85.7% → 100.0% | 6.0ms → 9.0ms |   6 → 9 | `ZSTD_compressStream2`    | `zstd_compress.c`  |
| removed | -1.00ms |   14.3% → 0.0% |   1.0ms → 0ms |   1 → 0 | `AIO_ReadPool_fillBuffer` | `fileio_asyncio.c` |

##### `FIO_compressFilename` (`fileio.c`)

| Change |   Delta |      % |          Time | Samples | Callee                         | Location   |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------ | ---------- |
| +28.6% | +2.00ms | 100.0% | 7.0ms → 9.0ms |   7 → 9 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `main` (`zstdcli.c`)

| Change |   Delta |      % |          Time | Samples | Callee                 | Location   |
| -----: | ------: | -----: | ------------: | ------: | ---------------------- | ---------- |
| +28.6% | +2.00ms | 100.0% | 7.0ms → 9.0ms |   7 → 9 | `FIO_compressFilename` | `fileio.c` |

##### `HUF_compress_internal` (`huf_compress.c`)

| Change |   Delta |             % |        Time | Samples | Callee                | Location         |
| -----: | ------: | ------------: | ----------: | ------: | --------------------- | ---------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `HUF_optimalTableLog` | `huf_compress.c` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

|  Change |   Delta |              % |            Time | Samples | Callee                                               | Location          |
| ------: | ------: | -------------: | --------------: | ------: | ---------------------------------------------------- | ----------------- |
|  -31.0% | -9.00ms | 96.7% → 100.0% | 29.0ms → 20.0ms | 29 → 20 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |
| removed | -2.00ms |    6.7% → 0.0% |     2.0ms → 0ms |   2 → 0 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|  Change |   Delta |             % |            Time | Samples | Callee                        | Location          |
| ------: | ------: | ------------: | --------------: | ------: | ----------------------------- | ----------------- |
|  -36.4% | -8.00ms | 75.9% → 70.0% | 22.0ms → 14.0ms | 22 → 14 | `ZSTD_buildBlockEntropyStats` | `zstd_compress.c` |
| removed | -1.00ms |   3.4% → 0.0% |     1.0ms → 0ms |   1 → 0 | `HIST_count_wksp`             | `hist.c`          |

##### `ZSTD_buildBlockEntropyStats` (`zstd_compress.c`)

|  Change |   Delta |             % |          Time | Samples | Callee                          | Location          |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------- | ----------------- |
|  -25.0% | -2.00ms | 36.4% → 42.9% | 8.0ms → 6.0ms |   8 → 6 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |
|  -40.0% | -2.00ms | 22.7% → 21.4% | 5.0ms → 3.0ms |   5 → 3 | `ZSTD_seqToCodes`               | `zstd_compress.c` |
| removed | -1.00ms |   4.5% → 0.0% |   1.0ms → 0ms |   1 → 0 | `HUF_writeCTable_wksp`          | `huf_compress.c`  |
|  -16.7% | -1.00ms | 27.3% → 35.7% | 6.0ms → 5.0ms |   6 → 5 | `HUF_optimalTableLog`           | `huf_compress.c`  |
| removed | -1.00ms |   4.5% → 0.0% |   1.0ms → 0ms |   1 → 0 | `HIST_count_wksp`               | `hist.c`          |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

| Change |   Delta |             % |           Time | Samples | Callee               | Location    |
| -----: | ------: | ------------: | -------------: | ------: | -------------------- | ----------- |
| -40.0% | -6.00ms | 71.4% → 64.3% | 15.0ms → 9.0ms |  15 → 9 | `el0_svc ([kernel])` | `<unknown>` |
| -33.3% | -2.00ms |         28.6% |  6.0ms → 4.0ms |   6 → 4 | `el0_da ([kernel])`  | `<unknown>` |
|    new | +1.00ms |   0.0% → 7.1% |    0ms → 1.0ms |   0 → 1 | `el0_ia ([kernel])`  | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Callee                            | Location    |
| -----: | ------: | -----: | --------------: | ------: | --------------------------------- | ----------- |
| -33.3% | -7.00ms | 100.0% | 21.0ms → 14.0ms | 21 → 14 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

|  Change |   Delta |             % |           Time | Samples | Callee                         | Location    |
| ------: | ------: | ------------: | -------------: | ------: | ------------------------------ | ----------- |
|  -36.4% | -4.00ms | 78.6% → 87.5% | 11.0ms → 7.0ms |  11 → 7 | `__arm64_sys_read ([kernel])`  | `<unknown>` |
| removed | -2.00ms |  14.3% → 0.0% |    2.0ms → 0ms |   2 → 0 | `__arm64_sys_futex ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

| Change |   Delta |              % |           Time | Samples | Callee                  | Location    |
| -----: | ------: | -------------: | -------------: | ------: | ----------------------- | ----------- |
| -35.7% | -5.00ms | 93.3% → 100.0% | 14.0ms → 9.0ms |  14 → 9 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `do_el0_svc ([kernel])` (`<unknown>`)

| Change |   Delta |              % |           Time | Samples | Callee                                  | Location    |
| -----: | ------: | -------------: | -------------: | ------: | --------------------------------------- | ----------- |
| -42.9% | -6.00ms | 100.0% → 88.9% | 14.0ms → 8.0ms |  14 → 8 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
|    new | +1.00ms |   0.0% → 11.1% |    0ms → 1.0ms |   0 → 1 | `__arm64_sys_write ([kernel])`          | `<unknown>` |

##### `ZSTD_selectEncodingType` (`zstd_compress_sequences.c`)

|  Change |   Delta |            % |        Time | Samples | Callee            | Location                    |
| ------: | ------: | -----------: | ----------: | ------: | ----------------- | --------------------------- |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_NCountCost` | `zstd_compress_sequences.c` |

##### `filemap_read ([kernel])` (`<unknown>`)

|  Change |   Delta |              % |           Time | Samples | Callee                         | Location    |
| ------: | ------: | -------------: | -------------: | ------: | ------------------------------ | ----------- |
|  -30.0% | -3.00ms | 90.9% → 100.0% | 10.0ms → 7.0ms |  10 → 7 | `copy_page_to_iter ([kernel])` | `<unknown>` |
| removed | -1.00ms |    9.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `filemap_get_pages ([kernel])` | `<unknown>` |

##### `generic_file_read_iter ([kernel])` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Callee                    | Location    |
| -----: | ------: | -----: | -------------: | ------: | ------------------------- | ----------- |
| -36.4% | -4.00ms | 100.0% | 11.0ms → 7.0ms |  11 → 7 | `filemap_read ([kernel])` | `<unknown>` |

##### `ext4_file_read_iter ([kernel])` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Callee                              | Location    |
| -----: | ------: | -----: | -------------: | ------: | ----------------------------------- | ----------- |
| -36.4% | -4.00ms | 100.0% | 11.0ms → 7.0ms |  11 → 7 | `generic_file_read_iter ([kernel])` | `<unknown>` |

##### `do_iter_readv_writev ([kernel])` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Callee                           | Location    |
| -----: | ------: | -----: | -------------: | ------: | -------------------------------- | ----------- |
| -36.4% | -4.00ms | 100.0% | 11.0ms → 7.0ms |  11 → 7 | `ext4_file_read_iter ([kernel])` | `<unknown>` |

##### `vfs_iter_read ([kernel])` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Callee                            | Location    |
| -----: | ------: | -----: | -------------: | ------: | --------------------------------- | ----------- |
| -36.4% | -4.00ms | 100.0% | 11.0ms → 7.0ms |  11 → 7 | `do_iter_readv_writev ([kernel])` | `<unknown>` |

##### `backing_file_read_iter ([kernel])` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Callee                     | Location    |
| -----: | ------: | -----: | -------------: | ------: | -------------------------- | ----------- |
| -36.4% | -4.00ms | 100.0% | 11.0ms → 7.0ms |  11 → 7 | `vfs_iter_read ([kernel])` | `<unknown>` |

##### `ovl_read_iter ([kernel])` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Callee                              | Location    |
| -----: | ------: | -----: | -------------: | ------: | ----------------------------------- | ----------- |
| -36.4% | -4.00ms | 100.0% | 11.0ms → 7.0ms |  11 → 7 | `backing_file_read_iter ([kernel])` | `<unknown>` |

##### `vfs_read ([kernel])` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Callee                     | Location    |
| -----: | ------: | -----: | -------------: | ------: | -------------------------- | ----------- |
| -36.4% | -4.00ms | 100.0% | 11.0ms → 7.0ms |  11 → 7 | `ovl_read_iter ([kernel])` | `<unknown>` |

##### `ksys_read ([kernel])` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Callee                | Location    |
| -----: | ------: | -----: | -------------: | ------: | --------------------- | ----------- |
| -36.4% | -4.00ms | 100.0% | 11.0ms → 7.0ms |  11 → 7 | `vfs_read ([kernel])` | `<unknown>` |

##### `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`)

| Change |   Delta |      % |           Time | Samples | Callee              | Location    |
| -----: | ------: | -----: | -------------: | ------: | ------------------- | ----------- |
| -36.4% | -4.00ms | 100.0% | 11.0ms → 7.0ms |  11 → 7 | `fread (libc.so.6)` | `<unknown>` |

##### `ZSTD_buildCTable` (`zstd_compress_sequences.c`)

|  Change |   Delta |             % |        Time | Samples | Callee                 | Location         |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------- | ---------------- |
| removed | -3.00ms | 100.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `FSE_buildCTable_wksp` | `fse_compress.c` |

##### `ZSTD_compressBlock_btultra2` (`zstd_opt.c`)

| Change |   Delta |             % |            Time | Samples | Callee                    | Location     |
| -----: | ------: | ------------: | --------------: | ------: | ------------------------- | ------------ |
| -11.1% | -2.00ms | 94.7% → 94.1% | 18.0ms → 16.0ms | 18 → 16 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `HUF_writeCTable_wksp` (`huf_compress.c`)

|  Change |   Delta |             % |          Time | Samples | Callee                             | Location         |
| ------: | ------: | ------------: | ------------: | ------: | ---------------------------------- | ---------------- |
| removed | -2.00ms |  40.0% → 0.0% |   2.0ms → 0ms |   2 → 0 | `FSE_buildCTable_wksp`             | `fse_compress.c` |
| removed | -1.00ms |  20.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `FSE_writeNCount_generic`          | `fse_compress.c` |
|  -50.0% | -1.00ms | 40.0% → 33.3% | 2.0ms → 1.0ms |   2 → 1 | `HIST_count_simple`                | `hist.c`         |
|     new | +1.00ms |  0.0% → 33.3% |   0ms → 1.0ms |   0 → 1 | `FSE_compress_usingCTable_generic` | `fse_compress.c` |

##### `HIST_count_wksp` (`hist.c`)

|  Change |   Delta |             % |        Time | Samples | Callee              | Location |
| ------: | ------: | ------------: | ----------: | ------: | ------------------- | -------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `HIST_count_simple` | `hist.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

| Change |    Delta |             % |            Time |         Samples | Callee                              | Location     |
| -----: | -------: | ------------: | --------------: | --------------: | ----------------------------------- | ------------ |
|  +0.2% | +20.00ms | 85.9% → 86.1% | 10.11s → 10.13s | 10,111 → 10,131 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c` |
|  +4.2% |  +1.00ms |          0.2% | 24.0ms → 25.0ms |         24 → 25 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c` |

##### `ZSTD_buildSequencesStatistics` (`zstd_compress.c`)

|  Change |   Delta |              % |           Time | Samples | Callee                     | Location                    |
| ------: | ------: | -------------: | -------------: | ------: | -------------------------- | --------------------------- |
| +150.0% | +6.00ms | 36.4% → 100.0% | 4.0ms → 10.0ms |  4 → 10 | `HIST_count_parallel_wksp` | `hist.c`                    |
| removed | -4.00ms |   36.4% → 0.0% |    4.0ms → 0ms |   4 → 0 | `ZSTD_selectEncodingType`  | `zstd_compress_sequences.c` |
| removed | -3.00ms |   27.3% → 0.0% |    3.0ms → 0ms |   3 → 0 | `ZSTD_buildCTable`         | `zstd_compress_sequences.c` |

##### `ZSTD_NCountCost` (`zstd_compress_sequences.c`)

|  Change |   Delta |             % |        Time | Samples | Callee                    | Location         |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------- | ---------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `FSE_writeNCount_generic` | `fse_compress.c` |

##### `AIO_IOPool_acquireJob` (`fileio_asyncio.c`)

|  Change |   Delta |             % |        Time | Samples | Callee                             | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------------- | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `__pthread_mutex_lock (libc.so.6)` | `<unknown>` |

##### `AIO_ReadPool_fillBuffer` (`fileio_asyncio.c`)

|  Change |   Delta |             % |        Time | Samples | Callee                  | Location           |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------- | ------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `AIO_IOPool_acquireJob` | `fileio_asyncio.c` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

|  Change |    Delta |             % |              Time |         Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------: | -------: | ------------: | ----------------: | --------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +0.2% | +21.00ms | 83.9% → 84.0% |   10.07s → 10.09s | 10,070 → 10,091 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|     new |  +8.00ms |   0.0% → 0.1% |       0ms → 8.0ms |           0 → 8 | `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`) ← `ZSTD_splitBlock` ← `ZSTD_compressContinue_internal` (`zstd_compress.c`) ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new |  +7.00ms |   0.0% → 0.1% |       0ms → 7.0ms |           0 → 7 | `ZSTD_encodeSequences` (`zstd_compress_sequences.c`) ← `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`) ← `ZSTD_entropyCompressSeqStore` ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| +166.7% |  +5.00ms |  <0.1% → 0.1% |     3.0ms → 8.0ms |           3 → 8 | `unknown (libc.so.6)` ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|     new |  +5.00ms |  0.0% → <0.1% |       0ms → 5.0ms |           0 → 5 | `ZSTD_XXH64_update` (`xxhash.h`) ← `ZSTD_compressContinue_internal` (`zstd_compress.c`) ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  +14.8% |  +4.00ms |   0.2% → 0.3% |   27.0ms → 31.0ms |         27 → 31 | `ZSTD_insertBt1` (`zstd_opt.c`) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|     new |  +4.00ms |  0.0% → <0.1% |       0ms → 4.0ms |           0 → 4 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_entropyCompressSeqStore_internal` ← `ZSTD_entropyCompressSeqStore` ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +10.7% |  +3.00ms |   0.2% → 0.3% |   28.0ms → 31.0ms |         28 → 31 | `ZSTD_rawLiteralsCost` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +100.0% |  +3.00ms |         <0.1% |     3.0ms → 6.0ms |           3 → 6 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|     new |  +3.00ms |  0.0% → <0.1% |       0ms → 3.0ms |           0 → 3 | `ZSTD_splitBlock` (`zstd_preSplit.c`) ← `ZSTD_compressContinue_internal` (`zstd_compress.c`) ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|   +1.8% |  +2.00ms |   0.9% → 1.0% | 114.0ms → 116.0ms |       114 → 116 | `ZSTD_litLengthPrice` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +40.0% |  +2.00ms |  <0.1% → 0.1% |     5.0ms → 7.0ms |           5 → 7 | `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|     new |  +2.00ms |  0.0% → <0.1% |       0ms → 2.0ms |           0 → 2 | `ZSTD_seqToCodes` (`zstd_compress.c`) ← `ZSTD_entropyCompressSeqStore_internal` ← `ZSTD_entropyCompressSeqStore` ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new |  +2.00ms |  0.0% → <0.1% |       0ms → 2.0ms |           0 → 2 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  +16.7% |  +1.00ms |  <0.1% → 0.1% |     6.0ms → 7.0ms |           6 → 7 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|   +4.2% |  +1.00ms |          0.2% |   24.0ms → 25.0ms |         24 → 25 | `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |           0 → 1 | `folio_add_lru_vma ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_page_fault ([kernel])` ← `do_translation_fault ([kernel])` ← `do_mem_abort ([kernel])` ← `el1_abort ([kernel])` ← `el1h_64_sync_handler ([kernel])` ← `el1h_64_sync ([kernel])` ← `__arch_copy_to_user ([kernel])` ← `copy_page_to_iter ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `__arm64_sys_read ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `__read (libc.so.6)` ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |           0 → 1 | `get_page_from_freelist ([kernel])` ← `__alloc_frozen_pages_noprof ([kernel])` ← `__folio_alloc_noprof ([kernel])` ← `vma_alloc_zeroed_movable_folio ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_page_fault ([kernel])` ← `do_translation_fault ([kernel])` ← `do_mem_abort ([kernel])` ← `el0_da ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` ← `malloc (libc.so.6)` ← `ZSTDMT_getBuffer` (`zstdmt_compress.c`) ← `ZSTDMT_compressionJob` ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                 |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |           0 → 1 | `clear_page ([kernel])` ← `__alloc_frozen_pages_noprof ([kernel])` ← `__folio_alloc_noprof ([kernel])` ← `vma_alloc_zeroed_movable_folio ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_page_fault ([kernel])` ← `do_translation_fault ([kernel])` ← `do_mem_abort ([kernel])` ← `el0_da ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |           0 → 1 | `FSE_compress_usingCTable_generic` (`fse_compress.c`) ← `HUF_writeCTable_wksp` (`huf_compress.c`) ← `HUF_optimalTableLog` ← `ZSTD_buildBlockEntropyStats` (`zstd_compress.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

Common call stack: `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`

|  Change |    Delta |             % |            Time |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------: | -------: | ------------: | --------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|   -1.4% | -23.00ms | 13.5% → 13.3% |   1.63s → 1.60s | 1,626 → 1,603 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| removed |  -8.00ms |   0.1% → 0.0% |     8.0ms → 0ms |         8 → 0 | `ZSTD_encodeSequences` (`zstd_compress_sequences.c`) ← `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`) ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  -33.3% |  -6.00ms |          0.1% | 18.0ms → 12.0ms |       18 → 12 | `ZSTD_updateStats` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -25.0% |  -3.00ms |          0.1% |  12.0ms → 9.0ms |        12 → 9 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |  -3.00ms |  <0.1% → 0.0% |     3.0ms → 0ms |         3 → 0 | `ZSTD_selectEncodingType` (`zstd_compress_sequences.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -33.3% |  -3.00ms |  0.1% → <0.1% |   9.0ms → 6.0ms |         9 → 6 | `__arch_copy_to_user ([kernel])` ← `copy_page_to_iter ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `__arm64_sys_read ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `__read (libc.so.6)` ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`)                                                                                                                                                                 |
| removed |  -2.00ms |  <0.1% → 0.0% |     2.0ms → 0ms |         2 → 0 | `ZSTD_seqToCodes` (`zstd_compress.c`) ← `ZSTD_entropyCompressSeqStore_internal` ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |  -2.00ms |  <0.1% → 0.0% |     2.0ms → 0ms |         2 → 0 | `unknown (libc.so.6)` ← `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -40.0% |  -2.00ms |         <0.1% |   5.0ms → 3.0ms |         5 → 3 | `ZSTD_seqToCodes` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |  -2.00ms |  <0.1% → 0.0% |     2.0ms → 0ms |         2 → 0 | `FSE_buildCTable_wksp` (`fse_compress.c`) ← `HUF_writeCTable_wksp` (`huf_compress.c`) ← `HUF_optimalTableLog` ← `ZSTD_buildBlockEntropyStats` (`zstd_compress.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |  -2.00ms |  <0.1% → 0.0% |     2.0ms → 0ms |         2 → 0 | `FSE_buildCTable_wksp` (`fse_compress.c`) ← `ZSTD_buildCTable` (`zstd_compress_sequences.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_entropyCompressSeqStore_internal` ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed |  -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `count_memcg_events ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_page_fault ([kernel])` ← `do_translation_fault ([kernel])` ← `do_mem_abort ([kernel])` ← `el0_da ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                               |
|  -33.3% |  -1.00ms |         <0.1% |   3.0ms → 2.0ms |         3 → 2 | `ZSTD_XXH64_update` (`xxhash.h`) ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |  -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `FSE_buildCTable_wksp` (`fse_compress.c`) ← `ZSTD_buildCTable` (`zstd_compress_sequences.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |  -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `FSE_writeNCount_generic` (`fse_compress.c`) ← `HUF_writeCTable_wksp` (`huf_compress.c`) ← `ZSTD_buildBlockEntropyStats` (`zstd_compress.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  -50.0% |  -1.00ms |         <0.1% |   2.0ms → 1.0ms |         2 → 1 | `HIST_count_simple` (`hist.c`) ← `HUF_writeCTable_wksp` (`huf_compress.c`) ← `HUF_optimalTableLog` ← `ZSTD_buildBlockEntropyStats` (`zstd_compress.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed |  -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `HIST_count_simple` (`hist.c`) ← `HIST_count_wksp` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`) ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed |  -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed |  -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_entropyCompressSeqStore_internal` ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| removed |  -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `htab_map_hash ([kernel])` ← `bpf_prog_197ceaf961e0cb1e_trace_task ([kernel])` ← `bpf_prog_cf48b33a8d719a91_trace_softirq_event ([kernel])` ← `bpf_prog_348091dbf34d40b2_systing_softirq_exit ([kernel])` ← `bpf_trace_run1 ([kernel])` ← `__bpf_trace_softirq ([kernel])` ← `handle_softirqs ([kernel])` ← `__do_softirq ([kernel])` ← `____do_softirq ([kernel])` ← `call_on_irq_stack ([kernel])` ← `do_softirq_own_stack ([kernel])` ← `__irq_exit_rcu ([kernel])` ← `irq_exit_rcu ([kernel])` ← `el0_interrupt ([kernel])` ← `__el0_irq_handler_common ([kernel])` ← `el0t_64_irq_handler ([kernel])` ← `el0t_64_irq ([kernel])` ← `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) |

# Uninterruptible sleep profile diff

Slept 7 → 8 times (+1 time, +14.3%).

| Category | Change | Delta |      % | Sleeps |
| -------- | -----: | ----: | -----: | -----: |
| Kernel   | +14.3% |    +1 | 100.0% |  7 → 8 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 5 → 6 times (71.4% → 75.0%) unknown (libc.so.6)
│   └── … 5 → 6 times (71.4% → 75.0%) __read (libc.so.6)
│       └── 5 → 6 times (71.4% → 75.0%) el0t_64_sync ([kernel])
│           └── 5 → 6 times (71.4% → 75.0%) el0t_64_sync_handler ([kernel])
│               └── 5 → 6 times (71.4% → 75.0%) el0_svc ([kernel])
│                   └── 5 → 6 times (71.4% → 75.0%) do_el0_svc ([kernel])
│                       └── 5 → 6 times (71.4% → 75.0%) invoke_syscall.constprop.0 ([kernel])
│                           └── 5 → 6 times (71.4% → 75.0%) __arm64_sys_read ([kernel])
│                               └── 5 → 6 times (71.4% → 75.0%) ksys_read ([kernel])
│                                   └── 5 → 6 times (71.4% → 75.0%) vfs_read ([kernel])
│                                       └── 5 → 6 times (71.4% → 75.0%) ovl_read_iter ([kernel])
│                                           └── 5 → 6 times (71.4% → 75.0%) backing_file_read_iter ([kernel])
│                                               └── 5 → 6 times (71.4% → 75.0%) vfs_iter_read ([kernel])
│                                                   └── 5 → 6 times (71.4% → 75.0%) do_iter_readv_writev ([kernel])
│                                                       └── 5 → 6 times (71.4% → 75.0%) ext4_file_read_iter ([kernel])
│                                                           └── 5 → 6 times (71.4% → 75.0%) generic_file_read_iter ([kernel])
│                                                               └── 5 → 6 times (71.4% → 75.0%) filemap_read ([kernel])
│                                                                   ├── 5 → 3 times (71.4% → 37.5%) filemap_get_pages ([kernel])
│                                                                   │   └── 5 → 3 times (71.4% → 37.5%) folio_wait_bit_common ([kernel])
│                                                                   │       └── 5 → 3 times (71.4% → 37.5%) io_schedule ([kernel])
│                                                                   │           └── 5 → 3 times (71.4% → 37.5%) schedule ([kernel])
│                                                                   │               └── 5 → 3 times (71.4% → 37.5%) __schedule ([kernel])
│                                                                   │                   └── 5 → 3 times (71.4% → 37.5%) __bpf_trace_sched_switch ([kernel])
│                                                                   │                       └── 5 → 3 times (71.4% → 37.5%, self 100.0% globally) bpf_trace_run4 ([kernel])
│                                                                   └── … 0 → 3 times (0.0% → 37.5%) __schedule ([kernel])
│                                                                       └── 0 → 3 times (0.0% → 37.5%) __bpf_trace_sched_switch ([kernel])
│                                                                           └── 0 → 3 times (0.0% → 37.5%) bpf_trace_run4 ([kernel])
├── 2 → 1 time (28.6% → 12.5%) unknown ([unmapped])
│   ├── … 2 → 0 times (28.6% → 0.0%) el0t_64_sync ([kernel])
│   │   └── 2 → 0 times (28.6% → 0.0%) el0t_64_sync_handler ([kernel])
│   │       └── 2 → 0 times (28.6% → 0.0%) el0_svc ([kernel])
│   │           └── 2 → 0 times (28.6% → 0.0%) do_el0_svc ([kernel])
│   │               └── 2 → 0 times (28.6% → 0.0%) invoke_syscall.constprop.0 ([kernel])
│   │                   └── 2 → 0 times (28.6% → 0.0%) __arm64_sys_execve ([kernel])
│   │                       └── 2 → 0 times (28.6% → 0.0%) do_execveat_common ([kernel])
│   │                           └── 2 → 0 times (28.6% → 0.0%) bprm_execve ([kernel])
│   │                               ├── … 1 → 0 times (14.3% → 0.0%) bpf_trace_run4 ([kernel])
│   │                               └── … 1 → 0 times (14.3% → 0.0%) bpf_trace_run4 ([kernel])
│   └── … 0 → 1 time (0.0% → 12.5%) bpf_trace_run4 ([kernel])
└── … 0 → 1 time (0.0% → 12.5%) bpf_trace_run4 ([kernel])
```

## Hottest functions

### Self sleeps

#### Regressions

Functions with the largest increase in uninterruptible sleeps entered within the function body, excluding callees. Categories account for at least 1.0% of self sleeps on the base or the current side.

##### Kernel

| Change | Delta |      % | Sleeps | Function                    | Location    |
| -----: | ----: | -----: | -----: | --------------------------- | ----------- |
| +14.3% |    +1 | 100.0% |  7 → 8 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's self sleeps. Inlining can make caller attribution imprecise.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

| Change | Delta |      % | Sleeps | Caller                                | Location    |
| -----: | ----: | -----: | -----: | ------------------------------------- | ----------- |
| +14.3% |    +1 | 100.0% |  7 → 8 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

### Total sleeps

#### Regressions

Functions with the largest increase in uninterruptible sleeps entered within the function and its callees. Categories account for at least 1.0% of self sleeps on the base or the current side.

|  Change | Delta |             % | Sleeps | Function                               | Location    |
| ------: | ----: | ------------: | -----: | -------------------------------------- | ----------- |
| +300.0% |    +3 | 14.3% → 50.0% |  1 → 4 | `do_page_fault ([kernel])`             | `<unknown>` |
| +300.0% |    +3 | 14.3% → 50.0% |  1 → 4 | `do_translation_fault ([kernel])`      | `<unknown>` |
| +300.0% |    +3 | 14.3% → 50.0% |  1 → 4 | `do_mem_abort ([kernel])`              | `<unknown>` |
| +300.0% |    +3 | 14.3% → 50.0% |  1 → 4 | `el1_abort ([kernel])`                 | `<unknown>` |
| +300.0% |    +3 | 14.3% → 50.0% |  1 → 4 | `el1h_64_sync_handler ([kernel])`      | `<unknown>` |
| +300.0% |    +3 | 14.3% → 50.0% |  1 → 4 | `el1h_64_sync ([kernel])`              | `<unknown>` |
|     new |    +3 |  0.0% → 37.5% |  0 → 3 | `schedule_preempt_disabled ([kernel])` | `<unknown>` |
|     new |    +3 |  0.0% → 37.5% |  0 → 3 | `rwsem_down_read_slowpath ([kernel])`  | `<unknown>` |
|     new |    +3 |  0.0% → 37.5% |  0 → 3 | `down_read_killable ([kernel])`        | `<unknown>` |
|     new |    +3 |  0.0% → 37.5% |  0 → 3 | `lock_mm_and_find_vma ([kernel])`      | `<unknown>` |
|     new |    +3 |  0.0% → 37.5% |  0 → 3 | `__arch_copy_to_user ([kernel])`       | `<unknown>` |
|     new |    +3 |  0.0% → 37.5% |  0 → 3 | `copy_page_to_iter ([kernel])`         | `<unknown>` |
|     new |    +2 |  0.0% → 25.0% |  0 → 2 | `unknown ([anon])`                     | `<unknown>` |
|  +14.3% |    +1 |        100.0% |  7 → 8 | `bpf_trace_run4 ([kernel])`            | `<unknown>` |
|  +14.3% |    +1 |        100.0% |  7 → 8 | `__bpf_trace_sched_switch ([kernel])`  | `<unknown>` |
|  +14.3% |    +1 |        100.0% |  7 → 8 | `__schedule ([kernel])`                | `<unknown>` |
|  +14.3% |    +1 |        100.0% |  7 → 8 | `schedule ([kernel])`                  | `<unknown>` |
|  +16.7% |    +1 | 85.7% → 87.5% |  6 → 7 | `filemap_read ([kernel])`              | `<unknown>` |
|  +16.7% |    +1 | 85.7% → 87.5% |  6 → 7 | `generic_file_read_iter ([kernel])`    | `<unknown>` |
|  +16.7% |    +1 | 85.7% → 87.5% |  6 → 7 | `ext4_file_read_iter ([kernel])`       | `<unknown>` |

##### Kernel

|  Change | Delta |             % | Sleeps | Function                               | Location    |
| ------: | ----: | ------------: | -----: | -------------------------------------- | ----------- |
| +300.0% |    +3 | 14.3% → 50.0% |  1 → 4 | `do_page_fault ([kernel])`             | `<unknown>` |
| +300.0% |    +3 | 14.3% → 50.0% |  1 → 4 | `do_translation_fault ([kernel])`      | `<unknown>` |
| +300.0% |    +3 | 14.3% → 50.0% |  1 → 4 | `do_mem_abort ([kernel])`              | `<unknown>` |
| +300.0% |    +3 | 14.3% → 50.0% |  1 → 4 | `el1_abort ([kernel])`                 | `<unknown>` |
| +300.0% |    +3 | 14.3% → 50.0% |  1 → 4 | `el1h_64_sync_handler ([kernel])`      | `<unknown>` |
| +300.0% |    +3 | 14.3% → 50.0% |  1 → 4 | `el1h_64_sync ([kernel])`              | `<unknown>` |
|     new |    +3 |  0.0% → 37.5% |  0 → 3 | `schedule_preempt_disabled ([kernel])` | `<unknown>` |
|     new |    +3 |  0.0% → 37.5% |  0 → 3 | `rwsem_down_read_slowpath ([kernel])`  | `<unknown>` |
|     new |    +3 |  0.0% → 37.5% |  0 → 3 | `down_read_killable ([kernel])`        | `<unknown>` |
|     new |    +3 |  0.0% → 37.5% |  0 → 3 | `lock_mm_and_find_vma ([kernel])`      | `<unknown>` |
|     new |    +3 |  0.0% → 37.5% |  0 → 3 | `__arch_copy_to_user ([kernel])`       | `<unknown>` |
|     new |    +3 |  0.0% → 37.5% |  0 → 3 | `copy_page_to_iter ([kernel])`         | `<unknown>` |
|  +14.3% |    +1 |        100.0% |  7 → 8 | `bpf_trace_run4 ([kernel])`            | `<unknown>` |
|  +14.3% |    +1 |        100.0% |  7 → 8 | `__bpf_trace_sched_switch ([kernel])`  | `<unknown>` |
|  +14.3% |    +1 |        100.0% |  7 → 8 | `__schedule ([kernel])`                | `<unknown>` |
|  +14.3% |    +1 |        100.0% |  7 → 8 | `schedule ([kernel])`                  | `<unknown>` |
|  +16.7% |    +1 | 85.7% → 87.5% |  6 → 7 | `filemap_read ([kernel])`              | `<unknown>` |
|  +16.7% |    +1 | 85.7% → 87.5% |  6 → 7 | `generic_file_read_iter ([kernel])`    | `<unknown>` |
|  +16.7% |    +1 | 85.7% → 87.5% |  6 → 7 | `ext4_file_read_iter ([kernel])`       | `<unknown>` |
|  +16.7% |    +1 | 85.7% → 87.5% |  6 → 7 | `do_iter_readv_writev ([kernel])`      | `<unknown>` |

#### Improvements

Functions with the largest decrease in uninterruptible sleeps entered within the function and its callees. Categories account for at least 1.0% of self sleeps on the base or the current side.

| Change | Delta |              % | Sleeps | Function                           | Location    |
| -----: | ----: | -------------: | -----: | ---------------------------------- | ----------- |
| -28.6% |    -2 | 100.0% → 62.5% |  7 → 5 | `io_schedule ([kernel])`           | `<unknown>` |
| -28.6% |    -2 | 100.0% → 62.5% |  7 → 5 | `folio_wait_bit_common ([kernel])` | `<unknown>` |
| -33.3% |    -2 |  85.7% → 50.0% |  6 → 4 | `filemap_get_pages ([kernel])`     | `<unknown>` |
| -50.0% |    -1 |  28.6% → 12.5% |  2 → 1 | `unknown ([unmapped])`             | `<unknown>` |

##### Kernel

| Change | Delta |              % | Sleeps | Function                           | Location    |
| -----: | ----: | -------------: | -----: | ---------------------------------- | ----------- |
| -28.6% |    -2 | 100.0% → 62.5% |  7 → 5 | `io_schedule ([kernel])`           | `<unknown>` |
| -28.6% |    -2 | 100.0% → 62.5% |  7 → 5 | `folio_wait_bit_common ([kernel])` | `<unknown>` |
| -33.3% |    -2 |  85.7% → 50.0% |  6 → 4 | `filemap_get_pages ([kernel])`     | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's total sleeps. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `do_page_fault ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                            | Location    |
| ------: | ----: | -----: | -----: | --------------------------------- | ----------- |
| +300.0% |    +3 | 100.0% |  1 → 4 | `do_translation_fault ([kernel])` | `<unknown>` |

##### `do_translation_fault ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                    | Location    |
| ------: | ----: | -----: | -----: | ------------------------- | ----------- |
| +300.0% |    +3 | 100.0% |  1 → 4 | `do_mem_abort ([kernel])` | `<unknown>` |

##### `do_mem_abort ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                 | Location    |
| ------: | ----: | -----: | -----: | ---------------------- | ----------- |
| +300.0% |    +3 | 100.0% |  1 → 4 | `el1_abort ([kernel])` | `<unknown>` |

##### `el1_abort ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                            | Location    |
| ------: | ----: | -----: | -----: | --------------------------------- | ----------- |
| +300.0% |    +3 | 100.0% |  1 → 4 | `el1h_64_sync_handler ([kernel])` | `<unknown>` |

##### `el1h_64_sync_handler ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                    | Location    |
| ------: | ----: | -----: | -----: | ------------------------- | ----------- |
| +300.0% |    +3 | 100.0% |  1 → 4 | `el1h_64_sync ([kernel])` | `<unknown>` |

##### `el1h_64_sync ([kernel])` (`<unknown>`)

| Change | Delta |            % | Sleeps | Caller                           | Location    |
| -----: | ----: | -----------: | -----: | -------------------------------- | ----------- |
|    new |    +3 | 0.0% → 75.0% |  0 → 3 | `__arch_copy_to_user ([kernel])` | `<unknown>` |

##### `schedule_preempt_disabled ([kernel])` (`<unknown>`)

| Change | Delta |             % | Sleeps | Caller                                | Location    |
| -----: | ----: | ------------: | -----: | ------------------------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |  0 → 3 | `rwsem_down_read_slowpath ([kernel])` | `<unknown>` |

##### `rwsem_down_read_slowpath ([kernel])` (`<unknown>`)

| Change | Delta |             % | Sleeps | Caller                          | Location    |
| -----: | ----: | ------------: | -----: | ------------------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |  0 → 3 | `down_read_killable ([kernel])` | `<unknown>` |

##### `down_read_killable ([kernel])` (`<unknown>`)

| Change | Delta |             % | Sleeps | Caller                            | Location    |
| -----: | ----: | ------------: | -----: | --------------------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |  0 → 3 | `lock_mm_and_find_vma ([kernel])` | `<unknown>` |

##### `lock_mm_and_find_vma ([kernel])` (`<unknown>`)

| Change | Delta |             % | Sleeps | Caller                     | Location    |
| -----: | ----: | ------------: | -----: | -------------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |  0 → 3 | `do_page_fault ([kernel])` | `<unknown>` |

##### `__arch_copy_to_user ([kernel])` (`<unknown>`)

| Change | Delta |             % | Sleeps | Caller                         | Location    |
| -----: | ----: | ------------: | -----: | ------------------------------ | ----------- |
|    new |    +3 | 0.0% → 100.0% |  0 → 3 | `copy_page_to_iter ([kernel])` | `<unknown>` |

##### `copy_page_to_iter ([kernel])` (`<unknown>`)

| Change | Delta |             % | Sleeps | Caller                    | Location    |
| -----: | ----: | ------------: | -----: | ------------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |  0 → 3 | `filemap_read ([kernel])` | `<unknown>` |

##### `unknown ([anon])` (`<unknown>`)

| Change | Delta |            % | Sleeps | Caller                 | Location    |
| -----: | ----: | -----------: | -----: | ---------------------- | ----------- |
|    new |    +1 | 0.0% → 50.0% |  0 → 1 | `unknown ([unmapped])` | `<unknown>` |
|    new |    +1 | 0.0% → 50.0% |  0 → 1 | `unknown ([anon])`     | `<unknown>` |

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

| Change | Delta |      % | Sleeps | Caller                                | Location    |
| -----: | ----: | -----: | -----: | ------------------------------------- | ----------- |
| +14.3% |    +1 | 100.0% |  7 → 8 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

| Change | Delta |      % | Sleeps | Caller                  | Location    |
| -----: | ----: | -----: | -----: | ----------------------- | ----------- |
| +14.3% |    +1 | 100.0% |  7 → 8 | `__schedule ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

| Change | Delta |      % | Sleeps | Caller                | Location    |
| -----: | ----: | -----: | -----: | --------------------- | ----------- |
| +14.3% |    +1 | 100.0% |  7 → 8 | `schedule ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

| Change | Delta |              % | Sleeps | Caller                                 | Location    |
| -----: | ----: | -------------: | -----: | -------------------------------------- | ----------- |
|    new |    +3 |   0.0% → 37.5% |  0 → 3 | `schedule_preempt_disabled ([kernel])` | `<unknown>` |
| -28.6% |    -2 | 100.0% → 62.5% |  7 → 5 | `io_schedule ([kernel])`               | `<unknown>` |

##### `filemap_read ([kernel])` (`<unknown>`)

| Change | Delta |      % | Sleeps | Caller                              | Location    |
| -----: | ----: | -----: | -----: | ----------------------------------- | ----------- |
| +16.7% |    +1 | 100.0% |  6 → 7 | `generic_file_read_iter ([kernel])` | `<unknown>` |

##### `generic_file_read_iter ([kernel])` (`<unknown>`)

| Change | Delta |      % | Sleeps | Caller                           | Location    |
| -----: | ----: | -----: | -----: | -------------------------------- | ----------- |
| +16.7% |    +1 | 100.0% |  6 → 7 | `ext4_file_read_iter ([kernel])` | `<unknown>` |

##### `ext4_file_read_iter ([kernel])` (`<unknown>`)

| Change | Delta |      % | Sleeps | Caller                            | Location    |
| -----: | ----: | -----: | -----: | --------------------------------- | ----------- |
| +16.7% |    +1 | 100.0% |  6 → 7 | `do_iter_readv_writev ([kernel])` | `<unknown>` |

##### `do_iter_readv_writev ([kernel])` (`<unknown>`)

| Change | Delta |      % | Sleeps | Caller                     | Location    |
| -----: | ----: | -----: | -----: | -------------------------- | ----------- |
| +16.7% |    +1 | 100.0% |  6 → 7 | `vfs_iter_read ([kernel])` | `<unknown>` |

##### `io_schedule ([kernel])` (`<unknown>`)

| Change | Delta |      % | Sleeps | Caller                             | Location    |
| -----: | ----: | -----: | -----: | ---------------------------------- | ----------- |
| -28.6% |    -2 | 100.0% |  7 → 5 | `folio_wait_bit_common ([kernel])` | `<unknown>` |

##### `folio_wait_bit_common ([kernel])` (`<unknown>`)

| Change | Delta |             % | Sleeps | Caller                         | Location    |
| -----: | ----: | ------------: | -----: | ------------------------------ | ----------- |
| -33.3% |    -2 | 85.7% → 80.0% |  6 → 4 | `filemap_get_pages ([kernel])` | `<unknown>` |

##### `filemap_get_pages ([kernel])` (`<unknown>`)

| Change | Delta |      % | Sleeps | Caller                    | Location    |
| -----: | ----: | -----: | -----: | ------------------------- | ----------- |
| -33.3% |    -2 | 100.0% |  6 → 4 | `filemap_read ([kernel])` | `<unknown>` |

##### `unknown ([unmapped])` (`<unknown>`)

| Change | Delta |             % | Sleeps | Caller             | Location    |
| -----: | ----: | ------------: | -----: | ------------------ | ----------- |
|    new |    +1 | 0.0% → 100.0% |  0 → 1 | `unknown ([anon])` | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total sleeps. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `do_page_fault ([kernel])` (`<unknown>`)

| Change | Delta |            % | Sleeps | Callee                            | Location    |
| -----: | ----: | -----------: | -----: | --------------------------------- | ----------- |
|    new |    +3 | 0.0% → 75.0% |  0 → 3 | `lock_mm_and_find_vma ([kernel])` | `<unknown>` |

##### `do_translation_fault ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                     | Location    |
| ------: | ----: | -----: | -----: | -------------------------- | ----------- |
| +300.0% |    +3 | 100.0% |  1 → 4 | `do_page_fault ([kernel])` | `<unknown>` |

##### `do_mem_abort ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                            | Location    |
| ------: | ----: | -----: | -----: | --------------------------------- | ----------- |
| +300.0% |    +3 | 100.0% |  1 → 4 | `do_translation_fault ([kernel])` | `<unknown>` |

##### `el1_abort ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                    | Location    |
| ------: | ----: | -----: | -----: | ------------------------- | ----------- |
| +300.0% |    +3 | 100.0% |  1 → 4 | `do_mem_abort ([kernel])` | `<unknown>` |

##### `el1h_64_sync_handler ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                 | Location    |
| ------: | ----: | -----: | -----: | ---------------------- | ----------- |
| +300.0% |    +3 | 100.0% |  1 → 4 | `el1_abort ([kernel])` | `<unknown>` |

##### `el1h_64_sync ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                            | Location    |
| ------: | ----: | -----: | -----: | --------------------------------- | ----------- |
| +300.0% |    +3 | 100.0% |  1 → 4 | `el1h_64_sync_handler ([kernel])` | `<unknown>` |

##### `schedule_preempt_disabled ([kernel])` (`<unknown>`)

| Change | Delta |             % | Sleeps | Callee                | Location    |
| -----: | ----: | ------------: | -----: | --------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |  0 → 3 | `schedule ([kernel])` | `<unknown>` |

##### `rwsem_down_read_slowpath ([kernel])` (`<unknown>`)

| Change | Delta |             % | Sleeps | Callee                                 | Location    |
| -----: | ----: | ------------: | -----: | -------------------------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |  0 → 3 | `schedule_preempt_disabled ([kernel])` | `<unknown>` |

##### `down_read_killable ([kernel])` (`<unknown>`)

| Change | Delta |             % | Sleeps | Callee                                | Location    |
| -----: | ----: | ------------: | -----: | ------------------------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |  0 → 3 | `rwsem_down_read_slowpath ([kernel])` | `<unknown>` |

##### `lock_mm_and_find_vma ([kernel])` (`<unknown>`)

| Change | Delta |             % | Sleeps | Callee                          | Location    |
| -----: | ----: | ------------: | -----: | ------------------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |  0 → 3 | `down_read_killable ([kernel])` | `<unknown>` |

##### `__arch_copy_to_user ([kernel])` (`<unknown>`)

| Change | Delta |             % | Sleeps | Callee                    | Location    |
| -----: | ----: | ------------: | -----: | ------------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |  0 → 3 | `el1h_64_sync ([kernel])` | `<unknown>` |

##### `copy_page_to_iter ([kernel])` (`<unknown>`)

| Change | Delta |             % | Sleeps | Callee                           | Location    |
| -----: | ----: | ------------: | -----: | -------------------------------- | ----------- |
|    new |    +3 | 0.0% → 100.0% |  0 → 3 | `__arch_copy_to_user ([kernel])` | `<unknown>` |

##### `unknown ([anon])` (`<unknown>`)

| Change | Delta |             % | Sleeps | Callee                    | Location    |
| -----: | ----: | ------------: | -----: | ------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |  0 → 2 | `el0t_64_sync ([kernel])` | `<unknown>` |
|    new |    +1 |  0.0% → 50.0% |  0 → 1 | `unknown ([unmapped])`    | `<unknown>` |
|    new |    +1 |  0.0% → 50.0% |  0 → 1 | `unknown ([anon])`        | `<unknown>` |

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

| Change | Delta |      % | Sleeps | Callee                      | Location    |
| -----: | ----: | -----: | -----: | --------------------------- | ----------- |
| +14.3% |    +1 | 100.0% |  7 → 8 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

| Change | Delta |      % | Sleeps | Callee                                | Location    |
| -----: | ----: | -----: | -----: | ------------------------------------- | ----------- |
| +14.3% |    +1 | 100.0% |  7 → 8 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

| Change | Delta |      % | Sleeps | Callee                  | Location    |
| -----: | ----: | -----: | -----: | ----------------------- | ----------- |
| +14.3% |    +1 | 100.0% |  7 → 8 | `__schedule ([kernel])` | `<unknown>` |

##### `filemap_read ([kernel])` (`<unknown>`)

| Change | Delta |              % | Sleeps | Callee                         | Location    |
| -----: | ----: | -------------: | -----: | ------------------------------ | ----------- |
|    new |    +3 |   0.0% → 42.9% |  0 → 3 | `copy_page_to_iter ([kernel])` | `<unknown>` |
| -33.3% |    -2 | 100.0% → 57.1% |  6 → 4 | `filemap_get_pages ([kernel])` | `<unknown>` |

##### `generic_file_read_iter ([kernel])` (`<unknown>`)

| Change | Delta |      % | Sleeps | Callee                    | Location    |
| -----: | ----: | -----: | -----: | ------------------------- | ----------- |
| +16.7% |    +1 | 100.0% |  6 → 7 | `filemap_read ([kernel])` | `<unknown>` |

##### `ext4_file_read_iter ([kernel])` (`<unknown>`)

| Change | Delta |      % | Sleeps | Callee                              | Location    |
| -----: | ----: | -----: | -----: | ----------------------------------- | ----------- |
| +16.7% |    +1 | 100.0% |  6 → 7 | `generic_file_read_iter ([kernel])` | `<unknown>` |

##### `do_iter_readv_writev ([kernel])` (`<unknown>`)

| Change | Delta |      % | Sleeps | Callee                           | Location    |
| -----: | ----: | -----: | -----: | -------------------------------- | ----------- |
| +16.7% |    +1 | 100.0% |  6 → 7 | `ext4_file_read_iter ([kernel])` | `<unknown>` |

##### `io_schedule ([kernel])` (`<unknown>`)

| Change | Delta |      % | Sleeps | Callee                | Location    |
| -----: | ----: | -----: | -----: | --------------------- | ----------- |
| -28.6% |    -2 | 100.0% |  7 → 5 | `schedule ([kernel])` | `<unknown>` |

##### `folio_wait_bit_common ([kernel])` (`<unknown>`)

| Change | Delta |      % | Sleeps | Callee                   | Location    |
| -----: | ----: | -----: | -----: | ------------------------ | ----------- |
| -28.6% |    -2 | 100.0% |  7 → 5 | `io_schedule ([kernel])` | `<unknown>` |

##### `filemap_get_pages ([kernel])` (`<unknown>`)

| Change | Delta |      % | Sleeps | Callee                             | Location    |
| -----: | ----: | -----: | -----: | ---------------------------------- | ----------- |
| -33.3% |    -2 | 100.0% |  6 → 4 | `folio_wait_bit_common ([kernel])` | `<unknown>` |

##### `unknown ([unmapped])` (`<unknown>`)

|  Change | Delta |             % | Sleeps | Callee                    | Location    |
| ------: | ----: | ------------: | -----: | ------------------------- | ----------- |
| removed |    -2 | 100.0% → 0.0% |  2 → 0 | `el0t_64_sync ([kernel])` | `<unknown>` |
|     new |    +1 | 0.0% → 100.0% |  0 → 1 | `unknown ([anon])`        | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in uninterruptible sleeps entered in their leaf frame.

| Change | Delta |            % | Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -----: | ----: | -----------: | -----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +3 | 0.0% → 37.5% |  0 → 3 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `schedule_preempt_disabled ([kernel])` ← `rwsem_down_read_slowpath ([kernel])` ← `down_read_killable ([kernel])` ← `lock_mm_and_find_vma ([kernel])` ← `do_page_fault ([kernel])` ← `do_translation_fault ([kernel])` ← `do_mem_abort ([kernel])` ← `el1_abort ([kernel])` ← `el1h_64_sync_handler ([kernel])` ← `el1h_64_sync ([kernel])` ← `__arch_copy_to_user ([kernel])` ← `copy_page_to_iter ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `__arm64_sys_read ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `__read (libc.so.6)` ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` |
|    new |    +1 | 0.0% → 12.5% |  0 → 1 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `io_schedule ([kernel])` ← `folio_wait_bit_common ([kernel])` ← `filemap_get_pages ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `__kernel_read ([kernel])` ← `kernel_read ([kernel])` ← `bprm_execve ([kernel])` ← `do_execveat_common ([kernel])` ← `__arm64_sys_execve ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown ([anon])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([anon])` ← `unknown ([anon])` ← `unknown ([unmapped])`                                                                                                                                                                                                                           |
|    new |    +1 | 0.0% → 12.5% |  0 → 1 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `io_schedule ([kernel])` ← `folio_wait_bit_common ([kernel])` ← `filemap_fault ([kernel])` ← `__do_fault ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_page_fault ([kernel])` ← `do_translation_fault ([kernel])` ← `do_mem_abort ([kernel])` ← `el1_abort ([kernel])` ← `el1h_64_sync_handler ([kernel])` ← `el1h_64_sync ([kernel])` ← `__arch_clear_user ([kernel])` ← `load_elf_binary ([kernel])` ← `bprm_execve ([kernel])` ← `do_execveat_common ([kernel])` ← `__arm64_sys_execve ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown ([anon])`                                                                                                                                                                                                                                                                                                                                                                                |

### Improvements

Call stacks with the largest decrease in uninterruptible sleeps entered in their leaf frame.

|  Change | Delta |             % | Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------: | ----: | ------------: | -----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  -40.0% |    -2 | 71.4% → 37.5% |  5 → 3 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `io_schedule ([kernel])` ← `folio_wait_bit_common ([kernel])` ← `filemap_get_pages ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `__arm64_sys_read ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `__read (libc.so.6)` ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                   |
| removed |    -1 |  14.3% → 0.0% |  1 → 0 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `io_schedule ([kernel])` ← `folio_wait_bit_common ([kernel])` ← `filemap_get_pages ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `__kernel_read ([kernel])` ← `kernel_read ([kernel])` ← `bprm_execve ([kernel])` ← `do_execveat_common ([kernel])` ← `__arm64_sys_execve ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` ← `unknown ([unmapped])` |
| removed |    -1 |  14.3% → 0.0% |  1 → 0 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `io_schedule ([kernel])` ← `folio_wait_bit_common ([kernel])` ← `filemap_fault ([kernel])` ← `__do_fault ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_page_fault ([kernel])` ← `do_translation_fault ([kernel])` ← `do_mem_abort ([kernel])` ← `el1_abort ([kernel])` ← `el1h_64_sync_handler ([kernel])` ← `el1h_64_sync ([kernel])` ← `__arch_clear_user ([kernel])` ← `load_elf_binary ([kernel])` ← `bprm_execve ([kernel])` ← `do_execveat_common ([kernel])` ← `__arm64_sys_execve ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown ([unmapped])`                                                                                                                                                              |

# Interruptible sleep profile diff

Slept 154 → 235 times (+81 times, +52.6%).

| Category | Change | Delta |      % |    Sleeps |
| -------- | -----: | ----: | -----: | --------: |
| Kernel   | +52.6% |   +81 | 100.0% | 154 → 235 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 52 → 177 times (33.8% → 75.3%) unknown (libc.so.6)
│   └── … 52 → 177 times (33.8% → 75.3%) el0t_64_sync ([kernel])
│       └── 52 → 177 times (33.8% → 75.3%) el0t_64_sync_handler ([kernel])
│           └── 52 → 177 times (33.8% → 75.3%) el0_svc ([kernel])
│               └── 52 → 177 times (33.8% → 75.3%) do_el0_svc ([kernel])
│                   └── 52 → 177 times (33.8% → 75.3%) invoke_syscall.constprop.0 ([kernel])
│                       └── 52 → 177 times (33.8% → 75.3%) __arm64_sys_futex ([kernel])
│                           └── 52 → 177 times (33.8% → 75.3%) do_futex ([kernel])
│                               └── 52 → 177 times (33.8% → 75.3%) futex_wait ([kernel])
│                                   └── 52 → 177 times (33.8% → 75.3%) __futex_wait ([kernel])
│                                       └── 52 → 177 times (33.8% → 75.3%) futex_do_wait ([kernel])
│                                           └── 52 → 177 times (33.8% → 75.3%) schedule ([kernel])
│                                               └── 52 → 177 times (33.8% → 75.3%) __schedule ([kernel])
│                                                   └── 52 → 177 times (33.8% → 75.3%) __bpf_trace_sched_switch ([kernel])
│                                                       └── 52 → 177 times (33.8% → 75.3%, self 100.0% globally) bpf_trace_run4 ([kernel])
└── 102 → 58 times (66.2% → 24.7%) _start (zstd)
    └── 102 → 58 times (66.2% → 24.7%) __libc_start_main (libc.so.6)
        └── 102 → 58 times (66.2% → 24.7%) unknown (libc.so.6)
            └── … 102 → 58 times (66.2% → 24.7%) el0t_64_sync ([kernel])
                └── 102 → 58 times (66.2% → 24.7%) el0t_64_sync_handler ([kernel])
                    └── 102 → 58 times (66.2% → 24.7%) el0_svc ([kernel])
                        └── 102 → 58 times (66.2% → 24.7%) do_el0_svc ([kernel])
                            └── 102 → 58 times (66.2% → 24.7%) invoke_syscall.constprop.0 ([kernel])
                                └── 102 → 58 times (66.2% → 24.7%) __arm64_sys_futex ([kernel])
                                    └── 102 → 58 times (66.2% → 24.7%) do_futex ([kernel])
                                        └── 102 → 58 times (66.2% → 24.7%) futex_wait ([kernel])
                                            └── 102 → 58 times (66.2% → 24.7%) __futex_wait ([kernel])
                                                └── 102 → 58 times (66.2% → 24.7%) futex_do_wait ([kernel])
                                                    └── 102 → 58 times (66.2% → 24.7%) schedule ([kernel])
                                                        └── 102 → 58 times (66.2% → 24.7%) __schedule ([kernel])
                                                            └── 102 → 58 times (66.2% → 24.7%) __bpf_trace_sched_switch ([kernel])
                                                                └── 102 → 58 times (66.2% → 24.7%) bpf_trace_run4 ([kernel])
```

## Hottest functions

### Self sleeps

#### Regressions

Functions with the largest increase in interruptible sleeps entered within the function body, excluding callees. Categories account for at least 1.0% of self sleeps on the base or the current side.

##### Kernel

| Change | Delta |      % |    Sleeps | Function                    | Location    |
| -----: | ----: | -----: | --------: | --------------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's self sleeps. Inlining can make caller attribution imprecise.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                                | Location    |
| -----: | ----: | -----: | --------: | ------------------------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

### Total sleeps

#### Regressions

Functions with the largest increase in interruptible sleeps entered within the function and its callees. Categories account for at least 1.0% of self sleeps on the base or the current side.

|  Change | Delta |              % |    Sleeps | Function                                | Location    |
| ------: | ----: | -------------: | --------: | --------------------------------------- | ----------- |
| +240.4% |  +125 |  33.8% → 75.3% |  52 → 177 | `POOL_thread`                           | `pool.c`    |
|  +53.6% |   +82 | 99.4% → 100.0% | 153 → 235 | `pthread_cond_wait (libc.so.6)`         | `<unknown>` |
|  +52.6% |   +81 |         100.0% | 154 → 235 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
|  +52.6% |   +81 |         100.0% | 154 → 235 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
|  +52.6% |   +81 |         100.0% | 154 → 235 | `__schedule ([kernel])`                 | `<unknown>` |
|  +52.6% |   +81 |         100.0% | 154 → 235 | `schedule ([kernel])`                   | `<unknown>` |
|  +52.6% |   +81 |         100.0% | 154 → 235 | `futex_do_wait ([kernel])`              | `<unknown>` |
|  +52.6% |   +81 |         100.0% | 154 → 235 | `__futex_wait ([kernel])`               | `<unknown>` |
|  +52.6% |   +81 |         100.0% | 154 → 235 | `futex_wait ([kernel])`                 | `<unknown>` |
|  +52.6% |   +81 |         100.0% | 154 → 235 | `do_futex ([kernel])`                   | `<unknown>` |
|  +52.6% |   +81 |         100.0% | 154 → 235 | `__arm64_sys_futex ([kernel])`          | `<unknown>` |
|  +52.6% |   +81 |         100.0% | 154 → 235 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
|  +52.6% |   +81 |         100.0% | 154 → 235 | `do_el0_svc ([kernel])`                 | `<unknown>` |
|  +52.6% |   +81 |         100.0% | 154 → 235 | `el0_svc ([kernel])`                    | `<unknown>` |
|  +52.6% |   +81 |         100.0% | 154 → 235 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
|  +52.6% |   +81 |         100.0% | 154 → 235 | `el0t_64_sync ([kernel])`               | `<unknown>` |
|  +52.6% |   +81 |         100.0% | 154 → 235 | `unknown (libc.so.6)`                   | `<unknown>` |

##### Kernel

| Change | Delta |      % |    Sleeps | Function                                | Location    |
| -----: | ----: | -----: | --------: | --------------------------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `bpf_trace_run4 ([kernel])`             | `<unknown>` |
| +52.6% |   +81 | 100.0% | 154 → 235 | `__bpf_trace_sched_switch ([kernel])`   | `<unknown>` |
| +52.6% |   +81 | 100.0% | 154 → 235 | `__schedule ([kernel])`                 | `<unknown>` |
| +52.6% |   +81 | 100.0% | 154 → 235 | `schedule ([kernel])`                   | `<unknown>` |
| +52.6% |   +81 | 100.0% | 154 → 235 | `futex_do_wait ([kernel])`              | `<unknown>` |
| +52.6% |   +81 | 100.0% | 154 → 235 | `__futex_wait ([kernel])`               | `<unknown>` |
| +52.6% |   +81 | 100.0% | 154 → 235 | `futex_wait ([kernel])`                 | `<unknown>` |
| +52.6% |   +81 | 100.0% | 154 → 235 | `do_futex ([kernel])`                   | `<unknown>` |
| +52.6% |   +81 | 100.0% | 154 → 235 | `__arm64_sys_futex ([kernel])`          | `<unknown>` |
| +52.6% |   +81 | 100.0% | 154 → 235 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |
| +52.6% |   +81 | 100.0% | 154 → 235 | `do_el0_svc ([kernel])`                 | `<unknown>` |
| +52.6% |   +81 | 100.0% | 154 → 235 | `el0_svc ([kernel])`                    | `<unknown>` |
| +52.6% |   +81 | 100.0% | 154 → 235 | `el0t_64_sync_handler ([kernel])`       | `<unknown>` |
| +52.6% |   +81 | 100.0% | 154 → 235 | `el0t_64_sync ([kernel])`               | `<unknown>` |

#### Improvements

Functions with the largest decrease in interruptible sleeps entered within the function and its callees.

|  Change | Delta |             % |   Sleeps | Function                           | Location           |
| ------: | ----: | ------------: | -------: | ---------------------------------- | ------------------ |
|  -69.8% |   -44 |  40.9% → 8.1% |  63 → 19 | `POOL_add`                         | `pool.c`           |
|  -72.1% |   -44 |  39.6% → 7.2% |  61 → 17 | `AIO_ReadPool_fillBuffer`          | `fileio_asyncio.c` |
|  -43.1% |   -44 | 66.2% → 24.7% | 102 → 58 | `FIO_compressFilename_srcFile`     | `fileio.c`         |
|  -43.1% |   -44 | 66.2% → 24.7% | 102 → 58 | `FIO_compressFilename`             | `fileio.c`         |
|  -43.1% |   -44 | 66.2% → 24.7% | 102 → 58 | `main`                             | `zstdcli.c`        |
|  -43.1% |   -44 | 66.2% → 24.7% | 102 → 58 | `__libc_start_main (libc.so.6)`    | `<unknown>`        |
|  -43.1% |   -44 | 66.2% → 24.7% | 102 → 58 | `_start (zstd)`                    | `<unknown>`        |
| removed |    -1 |   0.6% → 0.0% |    1 → 0 | `__pthread_mutex_lock (libc.so.6)` | `<unknown>`        |
| removed |    -1 |   0.6% → 0.0% |    1 → 0 | `AIO_ReadPool_addJobToCompleted`   | `fileio_asyncio.c` |

#### Callers

Callers with the largest change in contribution to each function's total sleeps. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `POOL_thread` (`pool.c`)

|  Change | Delta |      % |   Sleeps | Caller                | Location    |
| ------: | ----: | -----: | -------: | --------------------- | ----------- |
| +240.4% |  +125 | 100.0% | 52 → 177 | `unknown (libc.so.6)` | `<unknown>` |

##### `pthread_cond_wait (libc.so.6)` (`<unknown>`)

|  Change | Delta |             % |   Sleeps | Caller        | Location |
| ------: | ----: | ------------: | -------: | ------------- | -------- |
| +247.1% |  +126 | 33.3% → 75.3% | 51 → 177 | `POOL_thread` | `pool.c` |
|  -69.8% |   -44 |  41.2% → 8.1% |  63 → 19 | `POOL_add`    | `pool.c` |

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                                | Location    |
| -----: | ----: | -----: | --------: | ------------------------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                  | Location    |
| -----: | ----: | -----: | --------: | ----------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `__schedule ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                | Location    |
| -----: | ----: | -----: | --------: | --------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `schedule ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                     | Location    |
| -----: | ----: | -----: | --------: | -------------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `futex_do_wait ([kernel])` | `<unknown>` |

##### `futex_do_wait ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                    | Location    |
| -----: | ----: | -----: | --------: | ------------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `__futex_wait ([kernel])` | `<unknown>` |

##### `__futex_wait ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                  | Location    |
| -----: | ----: | -----: | --------: | ----------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `futex_wait ([kernel])` | `<unknown>` |

##### `futex_wait ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                | Location    |
| -----: | ----: | -----: | --------: | --------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `do_futex ([kernel])` | `<unknown>` |

##### `do_futex ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                         | Location    |
| -----: | ----: | -----: | --------: | ------------------------------ | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `__arm64_sys_futex ([kernel])` | `<unknown>` |

##### `__arm64_sys_futex ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                                  | Location    |
| -----: | ----: | -----: | --------: | --------------------------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                  | Location    |
| -----: | ----: | -----: | --------: | ----------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `do_el0_svc ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller               | Location    |
| -----: | ----: | -----: | --------: | -------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `el0_svc ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                            | Location    |
| -----: | ----: | -----: | --------: | --------------------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                    | Location    |
| -----: | ----: | -----: | --------: | ------------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `el0t_64_sync ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                | Location    |
| -----: | ----: | -----: | --------: | --------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `unknown (libc.so.6)` | `<unknown>` |

##### `unknown (libc.so.6)` (`<unknown>`)

|  Change | Delta |              % |    Sleeps | Caller                             | Location    |
| ------: | ----: | -------------: | --------: | ---------------------------------- | ----------- |
| +217.9% |  +122 |  36.4% → 75.7% |  56 → 178 | `unknown (libc.so.6)`              | `<unknown>` |
|  +53.6% |   +82 | 99.4% → 100.0% | 153 → 235 | `pthread_cond_wait (libc.so.6)`    | `<unknown>` |
|  -43.1% |   -44 |  66.2% → 24.7% |  102 → 58 | `__libc_start_main (libc.so.6)`    | `<unknown>` |
| removed |    -1 |    0.6% → 0.0% |     1 → 0 | `__pthread_mutex_lock (libc.so.6)` | `<unknown>` |

##### `POOL_add` (`pool.c`)

| Change | Delta |             % |  Sleeps | Caller                    | Location           |
| -----: | ----: | ------------: | ------: | ------------------------- | ------------------ |
| -72.1% |   -44 | 96.8% → 89.5% | 61 → 17 | `AIO_ReadPool_fillBuffer` | `fileio_asyncio.c` |

##### `AIO_ReadPool_fillBuffer` (`fileio_asyncio.c`)

| Change | Delta |      % |  Sleeps | Caller                         | Location   |
| -----: | ----: | -----: | ------: | ------------------------------ | ---------- |
| -72.1% |   -44 | 100.0% | 61 → 17 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

| Change | Delta |      % |   Sleeps | Caller                 | Location   |
| -----: | ----: | -----: | -------: | ---------------------- | ---------- |
| -43.1% |   -44 | 100.0% | 102 → 58 | `FIO_compressFilename` | `fileio.c` |

##### `FIO_compressFilename` (`fileio.c`)

| Change | Delta |      % |   Sleeps | Caller | Location    |
| -----: | ----: | -----: | -------: | ------ | ----------- |
| -43.1% |   -44 | 100.0% | 102 → 58 | `main` | `zstdcli.c` |

##### `main` (`zstdcli.c`)

| Change | Delta |      % |   Sleeps | Caller                | Location    |
| -----: | ----: | -----: | -------: | --------------------- | ----------- |
| -43.1% |   -44 | 100.0% | 102 → 58 | `unknown (libc.so.6)` | `<unknown>` |

##### `__libc_start_main (libc.so.6)` (`<unknown>`)

| Change | Delta |      % |   Sleeps | Caller          | Location    |
| -----: | ----: | -----: | -------: | --------------- | ----------- |
| -43.1% |   -44 | 100.0% | 102 → 58 | `_start (zstd)` | `<unknown>` |

##### `__pthread_mutex_lock (libc.so.6)` (`<unknown>`)

|  Change | Delta |             % | Sleeps | Caller                           | Location           |
| ------: | ----: | ------------: | -----: | -------------------------------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |  1 → 0 | `AIO_ReadPool_addJobToCompleted` | `fileio_asyncio.c` |

##### `AIO_ReadPool_addJobToCompleted` (`fileio_asyncio.c`)

|  Change | Delta |             % | Sleeps | Caller        | Location |
| ------: | ----: | ------------: | -----: | ------------- | -------- |
| removed |    -1 | 100.0% → 0.0% |  1 → 0 | `POOL_thread` | `pool.c` |

#### Callees

Callees with the largest change in contribution to each function's total sleeps. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `POOL_thread` (`pool.c`)

|  Change | Delta |              % |   Sleeps | Callee                           | Location           |
| ------: | ----: | -------------: | -------: | -------------------------------- | ------------------ |
| +247.1% |  +126 | 98.1% → 100.0% | 51 → 177 | `pthread_cond_wait (libc.so.6)`  | `<unknown>`        |
| removed |    -1 |    1.9% → 0.0% |    1 → 0 | `AIO_ReadPool_addJobToCompleted` | `fileio_asyncio.c` |

##### `pthread_cond_wait (libc.so.6)` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                | Location    |
| -----: | ----: | -----: | --------: | --------------------- | ----------- |
| +53.6% |   +82 | 100.0% | 153 → 235 | `unknown (libc.so.6)` | `<unknown>` |

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                      | Location    |
| -----: | ----: | -----: | --------: | --------------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                                | Location    |
| -----: | ----: | -----: | --------: | ------------------------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                  | Location    |
| -----: | ----: | -----: | --------: | ----------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `__schedule ([kernel])` | `<unknown>` |

##### `futex_do_wait ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                | Location    |
| -----: | ----: | -----: | --------: | --------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `schedule ([kernel])` | `<unknown>` |

##### `__futex_wait ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                     | Location    |
| -----: | ----: | -----: | --------: | -------------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `futex_do_wait ([kernel])` | `<unknown>` |

##### `futex_wait ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                    | Location    |
| -----: | ----: | -----: | --------: | ------------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `__futex_wait ([kernel])` | `<unknown>` |

##### `do_futex ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                  | Location    |
| -----: | ----: | -----: | --------: | ----------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `futex_wait ([kernel])` | `<unknown>` |

##### `__arm64_sys_futex ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                | Location    |
| -----: | ----: | -----: | --------: | --------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `do_futex ([kernel])` | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                         | Location    |
| -----: | ----: | -----: | --------: | ------------------------------ | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `__arm64_sys_futex ([kernel])` | `<unknown>` |

##### `do_el0_svc ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                                  | Location    |
| -----: | ----: | -----: | --------: | --------------------------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                  | Location    |
| -----: | ----: | -----: | --------: | ----------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee               | Location    |
| -----: | ----: | -----: | --------: | -------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                            | Location    |
| -----: | ----: | -----: | --------: | --------------------------------- | ----------- |
| +52.6% |   +81 | 100.0% | 154 → 235 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `unknown (libc.so.6)` (`<unknown>`)

|  Change | Delta |             % |    Sleeps | Callee                    | Location    |
| ------: | ----: | ------------: | --------: | ------------------------- | ----------- |
| +240.4% |  +125 | 33.8% → 75.3% |  52 → 177 | `POOL_thread`             | `pool.c`    |
| +217.9% |  +122 | 36.4% → 75.7% |  56 → 178 | `unknown (libc.so.6)`     | `<unknown>` |
|  +52.6% |   +81 |        100.0% | 154 → 235 | `el0t_64_sync ([kernel])` | `<unknown>` |
|  -43.1% |   -44 | 66.2% → 24.7% |  102 → 58 | `main`                    | `zstdcli.c` |

##### `POOL_add` (`pool.c`)

| Change | Delta |      % |  Sleeps | Callee                          | Location    |
| -----: | ----: | -----: | ------: | ------------------------------- | ----------- |
| -69.8% |   -44 | 100.0% | 63 → 19 | `pthread_cond_wait (libc.so.6)` | `<unknown>` |

##### `AIO_ReadPool_fillBuffer` (`fileio_asyncio.c`)

| Change | Delta |      % |  Sleeps | Callee     | Location |
| -----: | ----: | -----: | ------: | ---------- | -------- |
| -72.1% |   -44 | 100.0% | 61 → 17 | `POOL_add` | `pool.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

| Change | Delta |             % |  Sleeps | Callee                    | Location           |
| -----: | ----: | ------------: | ------: | ------------------------- | ------------------ |
| -72.1% |   -44 | 59.8% → 29.3% | 61 → 17 | `AIO_ReadPool_fillBuffer` | `fileio_asyncio.c` |

##### `FIO_compressFilename` (`fileio.c`)

| Change | Delta |      % |   Sleeps | Callee                         | Location   |
| -----: | ----: | -----: | -------: | ------------------------------ | ---------- |
| -43.1% |   -44 | 100.0% | 102 → 58 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `main` (`zstdcli.c`)

| Change | Delta |      % |   Sleeps | Callee                 | Location   |
| -----: | ----: | -----: | -------: | ---------------------- | ---------- |
| -43.1% |   -44 | 100.0% | 102 → 58 | `FIO_compressFilename` | `fileio.c` |

##### `__libc_start_main (libc.so.6)` (`<unknown>`)

| Change | Delta |      % |   Sleeps | Callee                | Location    |
| -----: | ----: | -----: | -------: | --------------------- | ----------- |
| -43.1% |   -44 | 100.0% | 102 → 58 | `unknown (libc.so.6)` | `<unknown>` |

##### `_start (zstd)` (`<unknown>`)

| Change | Delta |      % |   Sleeps | Callee                          | Location    |
| -----: | ----: | -----: | -------: | ------------------------------- | ----------- |
| -43.1% |   -44 | 100.0% | 102 → 58 | `__libc_start_main (libc.so.6)` | `<unknown>` |

##### `__pthread_mutex_lock (libc.so.6)` (`<unknown>`)

|  Change | Delta |             % | Sleeps | Callee                | Location    |
| ------: | ----: | ------------: | -----: | --------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |  1 → 0 | `unknown (libc.so.6)` | `<unknown>` |

##### `AIO_ReadPool_addJobToCompleted` (`fileio_asyncio.c`)

|  Change | Delta |             % | Sleeps | Callee                             | Location    |
| ------: | ----: | ------------: | -----: | ---------------------------------- | ----------- |
| removed |    -1 | 100.0% → 0.0% |  1 → 0 | `__pthread_mutex_lock (libc.so.6)` | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in interruptible sleeps entered in their leaf frame.

|  Change | Delta |             % |   Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------: | ----: | ------------: | -------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +247.1% |  +126 | 33.1% → 75.3% | 51 → 177 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` |

### Improvements

Call stacks with the largest decrease in interruptible sleeps entered in their leaf frame.

|  Change | Delta |            % |  Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -71.9% |   -41 | 37.0% → 6.8% | 57 → 16 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_add` (`pool.c`) ← `AIO_ReadPool_fillBuffer` (`fileio_asyncio.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                         |
|  -75.0% |    -3 |  2.6% → 0.4% |   4 → 1 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `POOL_add` (`pool.c`) ← `AIO_ReadPool_fillBuffer` (`fileio_asyncio.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)` |
| removed |    -1 |  0.6% → 0.0% |   1 → 0 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `__pthread_mutex_lock (libc.so.6)` ← `AIO_ReadPool_addJobToCompleted` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                      |

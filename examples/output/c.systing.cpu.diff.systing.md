# CPU profile diff

Took 12s → 20.05s (+8.047s, +67.0%) over 12,009 → 20,056 samples (1.0ms per sample).

| Category | Change |   Delta |             % |            Time |         Samples |
| -------- | -----: | ------: | ------------: | --------------: | --------------: |
| Ours     | +67.0% | +8.038s | 99.8% → 99.9% | 11.99s → 20.02s | 11,990 → 20,028 |
| Kernel   | +40.0% | +4.00ms |          0.1% | 10.0ms → 14.0ms |         10 → 14 |
| Native   | +55.6% | +5.00ms |          0.1% |  9.0ms → 14.0ms |          9 → 14 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
└── 11.99s → 20.04s (99.9%) unknown (libc.so.6)
    └── … 11.99s → 20.02s (99.9%) POOL_thread at pool.c
        └── 11.99s → 20.02s (99.8% → 99.9%) ZSTDMT_compressionJob at zstdmt_compress.c
            ├── 11.98s → 16.83s (99.8% → 83.9%) ZSTD_compressContinue_internal at zstd_compress.c
            │   ├── 11.92s → 16.75s (99.3% → 83.5%) ZSTD_buildSeqStore
            │   │   ├── 11.70s → 16.53s (97.5% → 82.4%, self 14.3% → 10.7%) ZSTD_compressBlock_opt2 at zstd_opt.c
            │   │   │   ├── 9.96s → 14.35s (82.9% → 71.6%, self 82.7% → 71.4%, self 82.8% → 72.5% globally) ZSTD_btGetAllMatches_noDict_3
            │   │   │   └── 24.0ms → 28.0ms (0.2% → 0.1%) ZSTD_insertAndFindFirstIndexHash3
            │   │   ├── 126.0ms → 136.0ms (1.0% → 0.7%) ZSTD_litLengthPrice at zstd_opt.c
            │   │   ├── 36.0ms → 50.0ms (0.3% → 0.2%) ZSTD_rawLiteralsCost at zstd_opt.c
            │   │   ├── 27.0ms → 6.0ms (0.2% → <0.1%) ZSTD_updateStats at zstd_opt.c
            │   │   └── 7.0ms → 13.0ms (0.1%) ZSTD_optLdm_processMatchCandidate at zstd_opt.c
            │   ├── 34.0ms → 40.0ms (0.3% → 0.2%) ZSTD_deriveBlockSplitsHelper
            │   │   └── 34.0ms → 40.0ms (0.3% → 0.2%) ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize
            │   │       ├── 17.0ms → 33.0ms (0.1% → 0.2%) ZSTD_buildBlockEntropyStats
            │   │       │   └── 8.0ms → 16.0ms (0.1%) ZSTD_buildSequencesStatistics
            │   │       │       └── 4.0ms → 12.0ms (<0.1% → 0.1%) HIST_count_parallel_wksp at hist.c
            │   │       └── 16.0ms → 6.0ms (0.1% → <0.1%) ZSTD_estimateBlockSize_symbolType
            │   ├── 26.0ms → 21.0ms (0.2% → 0.1%) ZSTD_compressSeqStore_singleBlock
            │   │   └── 26.0ms → 0ms (0.2% → 0.0%) ZSTD_entropyCompressSeqStore_internal
            │   │       └── 10.0ms → 0ms (0.1% → 0.0%) ZSTD_encodeSequences at zstd_compress_sequences.c
            │   └── 0ms → 22.0ms (0.0% → 0.1%) ZSTD_splitBlock at zstd_preSplit.c
            │       └── 0ms → 17.0ms (0.0% → 0.1%) ZSTD_recordFingerprint_1
            ├── 0ms → 2.92s (0.0% → 14.6%) ZSTD_compressBegin_advanced_internal at zstd_compress.c
            │   └── 0ms → 2.92s (0.0% → 14.6%) ZSTD_compressBegin_internal
            │       └── 0ms → 2.92s (0.0% → 14.6%) ZSTD_loadDictionaryContent
            │           └── 0ms → 2.92s (0.0% → 14.6%) ZSTD_updateTree at zstd_opt.c
            │               └── 0ms → 2.92s (0.0% → 14.6%) ZSTD_insertBt1 at zstd_opt.c
            └── 0ms → 265.0ms (0.0% → 1.3%) ZSTD_compressEnd_public at zstd_compress.c
                └── 0ms → 265.0ms (0.0% → 1.3%) ZSTD_compressContinue_internal at zstd_compress.c
                    └── 0ms → 264.0ms (0.0% → 1.3%) ZSTD_buildSeqStore
                        └── 0ms → 261.0ms (0.0% → 1.3%) ZSTD_compressBlock_opt2 at zstd_opt.c
                            └── 0ms → 220.0ms (0.0% → 1.1%, self 0.0% → 1.1%) ZSTD_btGetAllMatches_noDict_3
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

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

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

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

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

| Change |   Delta |      % |           Time |        Samples | Location         |
| -----: | ------: | -----: | -------------: | -------------: | ---------------- |
| +46.3% | +4.605s | 100.0% | 9.94s → 14.54s | 9,943 → 14,548 | `zstd_opt.c:876` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

|    Change |     Delta |             % |             Time |  Samples | Location         |
| --------: | --------: | ------------: | ---------------: | -------: | ---------------- |
| +41700.0% | +834.00ms |  7.1% → 28.2% |  2.0ms → 836.0ms |  2 → 836 | `zstd_opt.c:538` |
|  +8030.0% | +803.00ms | 35.7% → 27.4% | 10.0ms → 813.0ms | 10 → 813 | `zstd_opt.c:545` |
| +10340.0% | +517.00ms | 17.9% → 17.6% |  5.0ms → 522.0ms |  5 → 522 | `zstd_opt.c:489` |
| +16000.0% | +320.00ms |  7.1% → 10.9% |  2.0ms → 322.0ms |  2 → 322 | `zstd_opt.c:528` |
|  +4950.0% | +198.00ms |  14.3% → 6.8% |  4.0ms → 202.0ms |  4 → 202 | `zstd_opt.c:518` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

|  Change |   Delta |             % |        Time |   Samples | Location          |
| ------: | ------: | ------------: | ----------: | --------: | ----------------- |
|     new | +2.191s | 0.0% → 100.0% | 0ms → 2.19s | 0 → 2,191 | `zstd_opt.c:1459` |
| removed | -1.728s | 100.0% → 0.0% | 1.72s → 0ms | 1,728 → 0 | `zstd_opt.c:1455` |

##### `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`)

| Change |    Delta |             % |         Time | Samples | Location             |
| -----: | -------: | ------------: | -----------: | ------: | -------------------- |
|    new | +17.00ms | 0.0% → 100.0% | 0ms → 17.0ms |  0 → 17 | `zstd_preSplit.c:87` |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

|  Change |    Delta |             % |            Time | Samples | Location         |
| ------: | -------: | ------------: | --------------: | ------: | ---------------- |
|  +44.0% | +11.00ms | 69.4% → 72.0% | 25.0ms → 36.0ms | 25 → 36 | `zstd_opt.c:266` |
| +125.0% |  +5.00ms | 11.1% → 18.0% |   4.0ms → 9.0ms |   4 → 9 | `zstd_opt.c:273` |
|  -57.1% |  -4.00ms |  19.4% → 6.0% |   7.0ms → 3.0ms |   7 → 3 | `zstd_opt.c:276` |
|     new |  +2.00ms |   0.0% → 4.0% |     0ms → 2.0ms |   0 → 2 | `zstd_opt.c:291` |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

|  Change |    Delta |             % |            Time | Samples | Location         |
| ------: | -------: | ------------: | --------------: | ------: | ---------------- |
| +150.0% | +15.00ms |  7.9% → 17.9% | 10.0ms → 25.0ms | 10 → 25 | `zstd_opt.c:306` |
|  -46.2% | -12.00ms | 20.5% → 10.0% | 26.0ms → 14.0ms | 26 → 14 | `zstd_opt.c:298` |
|  +11.6% |  +5.00ms | 33.9% → 34.3% | 43.0ms → 48.0ms | 43 → 48 | `zstd_opt.c:313` |
|  +13.5% |  +5.00ms | 29.1% → 30.0% | 37.0ms → 42.0ms | 37 → 42 | `zstd_opt.c:315` |

##### `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`)

|  Change |    Delta |             % |         Time | Samples | Location          |
| ------: | -------: | ------------: | -----------: | ------: | ----------------- |
|     new | +13.00ms | 0.0% → 100.0% | 0ms → 13.0ms |  0 → 13 | `zstd_opt.c:1030` |
| removed |  -7.00ms | 100.0% → 0.0% |  7.0ms → 0ms |   7 → 0 | `zstd_opt.c:1028` |

##### `HUF_buildCTable_wksp` (`huf_compress.c`)

| Change |   Delta |              % |          Time | Samples | Location             |
| -----: | ------: | -------------: | ------------: | ------: | -------------------- |
|    new | +4.00ms |   0.0% → 50.0% |   0ms → 4.0ms |   0 → 4 | `huf_compress.c:778` |
|    new | +3.00ms |   0.0% → 37.5% |   0ms → 3.0ms |   0 → 3 | `huf_compress.c:788` |
| -50.0% | -1.00ms | 100.0% → 12.5% | 2.0ms → 1.0ms |   2 → 1 | `huf_compress.c:782` |

##### `ZSTD_seqToCodes` (`zstd_compress.c`)

|  Change |   Delta |             % |          Time | Samples | Location                      |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------- |
| +150.0% | +3.00ms | 33.3% → 41.7% | 2.0ms → 5.0ms |   2 → 5 | `zstd_compress.c:2695 → 2706` |
| +300.0% | +3.00ms | 16.7% → 33.3% | 1.0ms → 4.0ms |   1 → 4 | `zstd_compress.c:2697 → 2708` |
|  -66.7% | -2.00ms |  50.0% → 8.3% | 3.0ms → 1.0ms |   3 → 1 | `zstd_compress.c:2696 → 2707` |
|     new | +2.00ms |  0.0% → 16.7% |   0ms → 2.0ms |   0 → 2 | `zstd_compress.c:2709`        |

##### `ZSTD_splitBlock` (`zstd_preSplit.c`)

| Change |   Delta |             % |        Time | Samples | Location              |
| -----: | ------: | ------------: | ----------: | ------: | --------------------- |
|    new | +6.00ms | 0.0% → 100.0% | 0ms → 6.0ms |   0 → 6 | `zstd_preSplit.c:237` |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

|  Change |   Delta |             % |            Time | Samples | Location         |
| ------: | ------: | ------------: | --------------: | ------: | ---------------- |
| +300.0% | +9.00ms | 12.5% → 42.9% |  3.0ms → 12.0ms |  3 → 12 | `zstd_opt.c:420` |
|  -75.0% | -3.00ms |  16.7% → 3.6% |   4.0ms → 1.0ms |   4 → 1 | `zstd_opt.c:423` |
| +300.0% | +3.00ms |  4.2% → 14.3% |   1.0ms → 4.0ms |   1 → 4 | `zstd_opt.c:430` |
|  -66.7% | -2.00ms |  12.5% → 3.6% |   3.0ms → 1.0ms |   3 → 1 | `zstd_opt.c:415` |
|  -16.7% | -2.00ms | 50.0% → 35.7% | 12.0ms → 10.0ms | 12 → 10 | `zstd_opt.c:424` |

##### `FSE_writeNCount_generic` (`fse_compress.c`)

|  Change |   Delta |             % |        Time | Samples | Location             |
| ------: | ------: | ------------: | ----------: | ------: | -------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `fse_compress.c:260` |
|     new | +1.00ms |  0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `fse_compress.c:263` |
|     new | +1.00ms |  0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `fse_compress.c:264` |
|     new | +1.00ms |  0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `fse_compress.c:304` |

##### `ZSTD_updateTree` (`zstd_opt.c`)

| Change |   Delta |             % |        Time | Samples | Location         |
| -----: | ------: | ------------: | ----------: | ------: | ---------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `zstd_opt.c:584` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

| Change |   Delta |             % |        Time | Samples | Location               |
| -----: | ------: | ------------: | ----------: | ------: | ---------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `zstd_compress.c:4199` |

##### `HUF_writeCTable_wksp` (`huf_compress.c`)

| Change |   Delta |             % |        Time | Samples | Location             |
| -----: | ------: | ------------: | ----------: | ------: | -------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `huf_compress.c:275` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|  Change |   Delta |             % |          Time | Samples | Location         |
| ------: | ------: | ------------: | ------------: | ------: | ---------------- |
| removed | -7.00ms |  25.0% → 0.0% |   7.0ms → 0ms |   7 → 0 | `zstd_opt.c:377` |
| removed | -5.00ms |  17.9% → 0.0% |   5.0ms → 0ms |   5 → 0 | `zstd_opt.c:378` |
| removed | -5.00ms |  17.9% → 0.0% |   5.0ms → 0ms |   5 → 0 | `zstd_opt.c:384` |
| removed | -3.00ms |  10.7% → 0.0% |   3.0ms → 0ms |   3 → 0 | `zstd_opt.c:363` |
|  -66.7% | -2.00ms | 10.7% → 16.7% | 3.0ms → 1.0ms |   3 → 1 | `zstd_opt.c:371` |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

|  Change |   Delta |             % |        Time | Samples | Location               |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------- |
| removed | -9.00ms | 100.0% → 0.0% | 9.0ms → 0ms |   9 → 0 | `zstd_compress.c:3822` |
|     new | +2.00ms |  0.0% → 66.7% | 0ms → 2.0ms |   0 → 2 | `zstd_compress.c:3886` |
|     new | +1.00ms |  0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `zstd_compress.c:3888` |

##### `ZSTD_XXH64_update` (`xxhash.h`)

|  Change |   Delta |            % |        Time | Samples | Location        |
| ------: | ------: | -----------: | ----------: | ------: | --------------- |
| removed | -5.00ms | 71.4% → 0.0% | 5.0ms → 0ms |   5 → 0 | `xxhash.h:3559` |
|     new | +3.00ms | 0.0% → 75.0% | 0ms → 3.0ms |   0 → 3 | `xxhash.h:3608` |
| removed | -1.00ms | 14.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `xxhash.h:3557` |
| removed | -1.00ms | 14.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `xxhash.h:3558` |
|     new | +1.00ms | 0.0% → 25.0% | 0ms → 1.0ms |   0 → 1 | `xxhash.h:3607` |

##### `FSE_buildCTable_wksp` (`fse_compress.c`)

|  Change |   Delta |            % |        Time | Samples | Location             |
| ------: | ------: | -----------: | ----------: | ------: | -------------------- |
| removed | -3.00ms | 60.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `fse_compress.c:172` |
| removed | -2.00ms | 40.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `fse_compress.c:161` |
|     new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `fse_compress.c:160` |
|     new | +1.00ms | 0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `fse_compress.c:197` |

##### `FSE_compress_usingCTable_generic` (`fse_compress.c`)

|  Change |   Delta |            % |        Time | Samples | Location             |
| ------: | ------: | -----------: | ----------: | ------: | -------------------- |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `fse_compress.c:598` |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `fse_compress.c:602` |

##### `ZSTD_deriveSeqStoreChunk` (`zstd_compress.c`)

|  Change |   Delta |             % |        Time | Samples | Location               |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `zstd_compress.c:3961` |

##### `HIST_count_parallel_wksp` (`hist.c`)

|  Change |   Delta |            % |          Time | Samples | Location           |
| ------: | ------: | -----------: | ------------: | ------: | ------------------ |
| removed | -2.00ms | 10.5% → 0.0% |   2.0ms → 0ms |   2 → 0 | `hist.c:107`       |
| +200.0% | +2.00ms | 5.3% → 16.7% | 1.0ms → 3.0ms |   1 → 3 | `hist.c:110 → 120` |
|     new | +2.00ms | 0.0% → 11.1% |   0ms → 2.0ms |   0 → 2 | `hist.c:115`       |
|  -50.0% | -1.00ms | 10.5% → 5.6% | 2.0ms → 1.0ms |   2 → 1 | `hist.c:92 → 102`  |
| removed | -1.00ms |  5.3% → 0.0% |   1.0ms → 0ms |   1 → 0 | `hist.c:95`        |

##### `ZSTD_encodeSequences` (`zstd_compress_sequences.c`)

| Change |   Delta |      % |           Time | Samples | Location                        |
| -----: | ------: | -----: | -------------: | ------: | ------------------------------- |
| -10.0% | -1.00ms | 100.0% | 10.0ms → 9.0ms |  10 → 9 | `zstd_compress_sequences.c:437` |

##### `ZSTD_selectEncodingType` (`zstd_compress_sequences.c`)

|  Change |   Delta |             % |        Time | Samples | Location                        |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `zstd_compress_sequences.c:234` |

##### `ZSTD_fseBitCost` (`zstd_compress_sequences.c`)

|  Change |   Delta |             % |        Time | Samples | Location                        |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `zstd_compress_sequences.c:122` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

| Change |   Delta |            % |           Time |        Samples | Caller                    | Location          |
| -----: | ------: | -----------: | -------------: | -------------: | ------------------------- | ----------------- |
| +46.3% | +4.604s |       100.0% | 9.94s → 14.54s | 9,943 → 14,547 | `ZSTD_compressBlock_opt2` | `zstd_opt.c`      |
|    new | +1.00ms | 0.0% → <0.1% |    0ms → 1.0ms |          0 → 1 | `ZSTD_buildSeqStore`      | `zstd_compress.c` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

| Change |    Delta |             % |            Time |   Samples | Caller                          | Location     |
| -----: | -------: | ------------: | --------------: | --------: | ------------------------------- | ------------ |
|    new |  +2.920s |  0.0% → 98.6% |     0ms → 2.92s | 0 → 2,920 | `ZSTD_updateTree`               | `zstd_opt.c` |
| +50.0% | +14.00ms | 100.0% → 1.4% | 28.0ms → 42.0ms |   28 → 42 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

| Change |     Delta |             % |          Time |       Samples | Caller                        | Location          |
| -----: | --------: | ------------: | ------------: | ------------: | ----------------------------- | ----------------- |
| +27.0% | +465.00ms | 99.7% → 99.8% | 1.72s → 2.18s | 1,722 → 2,187 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
| -33.3% |   -2.00ms |   0.3% → 0.2% | 6.0ms → 4.0ms |         6 → 4 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`)

| Change |    Delta |             % |         Time | Samples | Caller            | Location          |
| -----: | -------: | ------------: | -----------: | ------: | ----------------- | ----------------- |
|    new | +17.00ms | 0.0% → 100.0% | 0ms → 17.0ms |  0 → 17 | `ZSTD_splitBlock` | `zstd_preSplit.c` |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

| Change |    Delta |      % |            Time | Samples | Caller               | Location          |
| -----: | -------: | -----: | --------------: | ------: | -------------------- | ----------------- |
| +38.9% | +14.00ms | 100.0% | 36.0ms → 50.0ms | 36 → 50 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

| Change |    Delta |             % |              Time |   Samples | Caller               | Location          |
| -----: | -------: | ------------: | ----------------: | --------: | -------------------- | ----------------- |
| +10.3% | +13.00ms | 99.2% → 99.3% | 126.0ms → 139.0ms | 126 → 139 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `unknown (libc.so.6)` (`<unknown>`)

|  Change |   Delta |             % |          Time | Samples | Caller                                  | Location          |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------- | ----------------- |
|  +50.0% | +3.00ms | 75.0% → 64.3% | 6.0ms → 9.0ms |   6 → 9 | `ZSTD_compressStream2`                  | `zstd_compress.c` |
| +200.0% | +2.00ms | 12.5% → 21.4% | 1.0ms → 3.0ms |   1 → 3 | `ZSTD_resetCCtx_internal`               | `zstd_compress.c` |
| removed | -1.00ms |  12.5% → 0.0% |   1.0ms → 0ms |   1 → 0 | `unknown (libc.so.6)`                   | `<unknown>`       |
|     new | +1.00ms |   0.0% → 7.1% |   0ms → 1.0ms |   0 → 1 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |
|     new | +1.00ms |   0.0% → 7.1% |   0ms → 1.0ms |   0 → 1 | `HUF_optimalTableLog`                   | `huf_compress.c`  |

##### `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`)

| Change |   Delta |      % |           Time | Samples | Caller               | Location          |
| -----: | ------: | -----: | -------------: | ------: | -------------------- | ----------------- |
| +85.7% | +6.00ms | 100.0% | 7.0ms → 13.0ms |  7 → 13 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `HUF_buildCTable_wksp` (`huf_compress.c`)

|  Change |   Delta |              % |          Time | Samples | Caller                        | Location          |
| ------: | ------: | -------------: | ------------: | ------: | ----------------------------- | ----------------- |
| +150.0% | +3.00ms | 100.0% → 62.5% | 2.0ms → 5.0ms |   2 → 5 | `HUF_optimalTableLog`         | `huf_compress.c`  |
|     new | +2.00ms |   0.0% → 25.0% |   0ms → 2.0ms |   0 → 2 | `ZSTD_buildBlockEntropyStats` | `zstd_compress.c` |
|     new | +1.00ms |   0.0% → 12.5% |   0ms → 1.0ms |   0 → 1 | `HUF_compress_internal`       | `huf_compress.c`  |

##### `ZSTD_seqToCodes` (`zstd_compress.c`)

|  Change |   Delta |     % |          Time | Samples | Caller                                  | Location          |
| ------: | ------: | ----: | ------------: | ------: | --------------------------------------- | ----------------- |
| +100.0% | +4.00ms | 66.7% | 4.0ms → 8.0ms |   4 → 8 | `ZSTD_buildBlockEntropyStats`           | `zstd_compress.c` |
| +100.0% | +2.00ms | 33.3% | 2.0ms → 4.0ms |   2 → 4 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `ZSTD_splitBlock` (`zstd_preSplit.c`)

| Change |   Delta |             % |        Time | Samples | Caller                           | Location          |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------- | ----------------- |
|    new | +6.00ms | 0.0% → 100.0% | 0ms → 6.0ms |   0 → 6 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`)

| Change |   Delta |      % |            Time | Samples | Caller                    | Location     |
| -----: | ------: | -----: | --------------: | ------: | ------------------------- | ------------ |
| +16.7% | +4.00ms | 100.0% | 24.0ms → 28.0ms | 24 → 28 | `ZSTD_compressBlock_opt2` | `zstd_opt.c` |

##### `__arch_copy_to_user ([kernel])` (`<unknown>`)

|  Change |   Delta |      % |          Time | Samples | Caller                         | Location    |
| ------: | ------: | -----: | ------------: | ------: | ------------------------------ | ----------- |
| +133.3% | +4.00ms | 100.0% | 3.0ms → 7.0ms |   3 → 7 | `copy_page_to_iter ([kernel])` | `<unknown>` |

##### `FSE_writeNCount_generic` (`fse_compress.c`)

|  Change |   Delta |      % |          Time | Samples | Caller            | Location                    |
| ------: | ------: | -----: | ------------: | ------: | ----------------- | --------------------------- |
| +200.0% | +2.00ms | 100.0% | 1.0ms → 3.0ms |   1 → 3 | `ZSTD_NCountCost` | `zstd_compress_sequences.c` |

##### `ZSTD_updateTree` (`zstd_opt.c`)

| Change |   Delta |             % |        Time | Samples | Caller                       | Location          |
| -----: | ------: | ------------: | ----------: | ------: | ---------------------------- | ----------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `ZSTD_loadDictionaryContent` | `zstd_compress.c` |

##### `do_page_fault ([kernel])` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                            | Location    |
| -----: | ------: | ------------: | ----------: | ------: | --------------------------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `do_translation_fault ([kernel])` | `<unknown>` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

| Change |   Delta |             % |        Time | Samples | Caller                  | Location            |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------- | ------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `HUF_writeCTable_wksp` (`huf_compress.c`)

| Change |   Delta |             % |        Time | Samples | Caller                        | Location          |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------- | ----------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `ZSTD_buildBlockEntropyStats` | `zstd_compress.c` |

##### `__folio_mod_stat ([kernel])` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                               | Location    |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------ | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `map_anon_folio_pmd_nopf ([kernel])` | `<unknown>` |

##### `_raw_spin_lock_irqsave ([kernel])` (`<unknown>`)

| Change |   Delta |             % |        Time | Samples | Caller                            | Location    |
| -----: | ------: | ------------: | ----------: | ------: | --------------------------------- | ----------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `deferred_split_folio ([kernel])` | `<unknown>` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|  Change |    Delta |              % |           Time | Samples | Caller                        | Location          |
| ------: | -------: | -------------: | -------------: | ------: | ----------------------------- | ----------------- |
|  -77.8% | -21.00ms | 96.4% → 100.0% | 27.0ms → 6.0ms |  27 → 6 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
| removed |  -1.00ms |    3.6% → 0.0% |    1.0ms → 0ms |   1 → 0 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

| Change |   Delta |      % |          Time | Samples | Caller                                               | Location          |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------------------------------- | ----------------- |
| -66.7% | -6.00ms | 100.0% | 9.0ms → 3.0ms |   9 → 3 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `clear_page ([kernel])` (`<unknown>`)

|  Change |   Delta |              % |          Time | Samples | Caller                                   | Location    |
| ------: | ------: | -------------: | ------------: | ------: | ---------------------------------------- | ----------- |
|  -60.0% | -3.00ms | 83.3% → 100.0% | 5.0ms → 2.0ms |   5 → 2 | `vma_alloc_anon_folio_pmd ([kernel])`    | `<unknown>` |
| removed | -1.00ms |   16.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `__alloc_frozen_pages_noprof ([kernel])` | `<unknown>` |

##### `ZSTD_XXH64_update` (`xxhash.h`)

|  Change |   Delta |              % |          Time | Samples | Caller                           | Location            |
| ------: | ------: | -------------: | ------------: | ------: | -------------------------------- | ------------------- |
| removed | -5.00ms |   71.4% → 0.0% |   5.0ms → 0ms |   5 → 0 | `ZSTD_compressContinue_internal` | `zstd_compress.c`   |
| +100.0% | +2.00ms | 28.6% → 100.0% | 2.0ms → 4.0ms |   2 → 4 | `ZSTDMT_compressionJob`          | `zstdmt_compress.c` |

##### `FSE_buildCTable_wksp` (`fse_compress.c`)

| Change |   Delta |      % |          Time | Samples | Caller             | Location                    |
| -----: | ------: | -----: | ------------: | ------: | ------------------ | --------------------------- |
| -60.0% | -3.00ms | 100.0% | 5.0ms → 2.0ms |   5 → 2 | `ZSTD_buildCTable` | `zstd_compress_sequences.c` |

##### `FSE_compress_usingCTable_generic` (`fse_compress.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                 | Location         |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------- | ---------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `HUF_writeCTable_wksp` | `huf_compress.c` |

##### `ZSTD_deriveSeqStoreChunk` (`zstd_compress.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                           | Location          |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------- | ----------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `HIST_count_parallel_wksp` (`hist.c`)

| Change |   Delta |             % |            Time | Samples | Caller                              | Location          |
| -----: | ------: | ------------: | --------------: | ------: | ----------------------------------- | ----------------- |
| -57.1% | -4.00ms | 36.8% → 16.7% |   7.0ms → 3.0ms |   7 → 3 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c` |
| +25.0% | +3.00ms | 63.2% → 83.3% | 12.0ms → 15.0ms | 12 → 15 | `ZSTD_buildSequencesStatistics`     | `zstd_compress.c` |

##### `ZSTD_encodeSequences` (`zstd_compress_sequences.c`)

| Change |   Delta |      % |           Time | Samples | Caller                                  | Location          |
| -----: | ------: | -----: | -------------: | ------: | --------------------------------------- | ----------------- |
| -10.0% | -1.00ms | 100.0% | 10.0ms → 9.0ms |  10 → 9 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `ZSTD_selectEncodingType` (`zstd_compress_sequences.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                          | Location          |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------- | ----------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |

##### `ZSTD_fseBitCost` (`zstd_compress_sequences.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                                               | Location          |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------------------------------- | ----------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `pthread_cond_wait (libc.so.6)` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | -------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `POOL_thread` | `pool.c` |

##### `filemap_get_read_batch ([kernel])` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                         | Location    |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------ | ----------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `filemap_get_pages ([kernel])` | `<unknown>` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

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

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

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

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `unknown (libc.so.6)` (`<unknown>`)

|  Change |   Delta |            % |            Time |         Samples | Caller                          | Location          |
| ------: | ------: | -----------: | --------------: | --------------: | ------------------------------- | ----------------- |
|  +67.1% | +8.046s |        99.9% | 11.99s → 20.04s | 11,999 → 20,045 | `unknown (libc.so.6)`           | `<unknown>`       |
| +133.3% | +4.00ms |        <0.1% |   3.0ms → 7.0ms |           3 → 7 | `ZSTD_resetCCtx_internal`       | `zstd_compress.c` |
|  +75.0% | +3.00ms |        <0.1% |   4.0ms → 7.0ms |           4 → 7 | `fread (libc.so.6)`             | `<unknown>`       |
|  -10.0% | -1.00ms | 0.1% → <0.1% |  10.0ms → 9.0ms |          10 → 9 | `ZSTD_compressStream2`          | `zstd_compress.c` |
|  +10.0% | +1.00ms |         0.1% | 10.0ms → 11.0ms |         10 → 11 | `__libc_start_main (libc.so.6)` | `<unknown>`       |

##### `POOL_thread` (`pool.c`)

| Change |   Delta |      % |            Time |         Samples | Caller                | Location    |
| -----: | ------: | -----: | --------------: | --------------: | --------------------- | ----------- |
| +67.1% | +8.046s | 100.0% | 11.99s → 20.04s | 11,999 → 20,045 | `unknown (libc.so.6)` | `<unknown>` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

| Change |   Delta |      % |            Time |         Samples | Caller        | Location |
| -----: | ------: | -----: | --------------: | --------------: | ------------- | -------- |
| +67.1% | +8.045s | 100.0% | 11.99s → 20.03s | 11,993 → 20,038 | `POOL_thread` | `pool.c` |

##### `ZSTD_compressContinue_internal` (`zstd_compress.c`)

| Change |     Delta |              % |            Time |         Samples | Caller                    | Location            |
| -----: | --------: | -------------: | --------------: | --------------: | ------------------------- | ------------------- |
| +40.5% |   +4.851s | 100.0% → 98.5% | 11.98s → 16.83s | 11,988 → 16,839 | `ZSTDMT_compressionJob`   | `zstdmt_compress.c` |
|    new | +265.00ms |    0.0% → 1.5% |   0ms → 265.0ms |         0 → 265 | `ZSTD_compressEnd_public` | `zstd_compress.c`   |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

| Change |   Delta |      % |            Time |         Samples | Caller                           | Location          |
| -----: | ------: | -----: | --------------: | --------------: | -------------------------------- | ----------------- |
| +42.8% | +5.097s | 100.0% | 11.92s → 17.01s | 11,921 → 17,018 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

| Change |   Delta |     % |            Time |         Samples | Caller                        | Location          |
| -----: | ------: | ----: | --------------: | --------------: | ----------------------------- | ----------------- |
| +43.4% | +5.084s | 99.9% | 11.70s → 16.79s | 11,707 → 16,791 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
|  +6.3% | +1.00ms |  0.1% | 16.0ms → 17.0ms |         16 → 17 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

| Change |   Delta |            % |           Time |        Samples | Caller                    | Location          |
| -----: | ------: | -----------: | -------------: | -------------: | ------------------------- | ----------------- |
| +46.3% | +4.618s |       100.0% | 9.97s → 14.58s | 9,971 → 14,589 | `ZSTD_compressBlock_opt2` | `zstd_opt.c`      |
|    new | +1.00ms | 0.0% → <0.1% |    0ms → 1.0ms |          0 → 1 | `ZSTD_buildSeqStore`      | `zstd_compress.c` |

##### `ZSTD_insertBt1` (`zstd_opt.c`)

| Change |    Delta |             % |            Time |   Samples | Caller                          | Location     |
| -----: | -------: | ------------: | --------------: | --------: | ------------------------------- | ------------ |
|    new |  +2.920s |  0.0% → 98.6% |     0ms → 2.92s | 0 → 2,920 | `ZSTD_updateTree`               | `zstd_opt.c` |
| +50.0% | +14.00ms | 100.0% → 1.4% | 28.0ms → 42.0ms |   28 → 42 | `ZSTD_btGetAllMatches_noDict_3` | `zstd_opt.c` |

##### `ZSTD_compressBegin_internal` (`zstd_compress.c`)

|    Change |   Delta |      % |          Time |   Samples | Caller                                 | Location          |
| --------: | ------: | -----: | ------------: | --------: | -------------------------------------- | ----------------- |
| +97533.3% | +2.926s | 100.0% | 3.0ms → 2.92s | 3 → 2,929 | `ZSTD_compressBegin_advanced_internal` | `zstd_compress.c` |

##### `ZSTD_compressBegin_advanced_internal` (`zstd_compress.c`)

|    Change |   Delta |      % |          Time |   Samples | Caller                  | Location            |
| --------: | ------: | -----: | ------------: | --------: | ----------------------- | ------------------- |
| +97533.3% | +2.926s | 100.0% | 3.0ms → 2.92s | 3 → 2,929 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTD_updateTree` (`zstd_opt.c`)

| Change |   Delta |             % |        Time |   Samples | Caller                       | Location          |
| -----: | ------: | ------------: | ----------: | --------: | ---------------------------- | ----------------- |
|    new | +2.922s | 0.0% → 100.0% | 0ms → 2.92s | 0 → 2,922 | `ZSTD_loadDictionaryContent` | `zstd_compress.c` |

##### `ZSTD_loadDictionaryContent` (`zstd_compress.c`)

| Change |   Delta |             % |        Time |   Samples | Caller                        | Location          |
| -----: | ------: | ------------: | ----------: | --------: | ----------------------------- | ----------------- |
|    new | +2.922s | 0.0% → 100.0% | 0ms → 2.92s | 0 → 2,922 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |

##### `ZSTD_compressEnd_public` (`zstd_compress.c`)

| Change |     Delta |             % |          Time | Samples | Caller                  | Location            |
| -----: | --------: | ------------: | ------------: | ------: | ----------------------- | ------------------- |
|    new | +265.00ms | 0.0% → 100.0% | 0ms → 265.0ms | 0 → 265 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTD_splitBlock` (`zstd_preSplit.c`)

| Change |    Delta |             % |         Time | Samples | Caller                           | Location          |
| -----: | -------: | ------------: | -----------: | ------: | -------------------------------- | ----------------- |
|    new | +23.00ms | 0.0% → 100.0% | 0ms → 23.0ms |  0 → 23 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTD_entropyCompressSeqStore` (`zstd_compress.c`)

| Change |    Delta |             % |         Time | Samples | Caller                              | Location          |
| -----: | -------: | ------------: | -----------: | ------: | ----------------------------------- | ----------------- |
|    new | +22.00ms | 0.0% → 100.0% | 0ms → 22.0ms |  0 → 22 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `ZSTD_buildBlockEntropyStats` (`zstd_compress.c`)

|  Change |    Delta |      % |            Time | Samples | Caller                                               | Location          |
| ------: | -------: | -----: | --------------: | ------: | ---------------------------------------------------- | ----------------- |
| +100.0% | +17.00ms | 100.0% | 17.0ms → 34.0ms | 17 → 34 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`)

| Change |    Delta |             % |         Time | Samples | Caller            | Location          |
| -----: | -------: | ------------: | -----------: | ------: | ----------------- | ----------------- |
|    new | +17.00ms | 0.0% → 100.0% | 0ms → 17.0ms |  0 → 17 | `ZSTD_splitBlock` | `zstd_preSplit.c` |

##### `ZSTD_rawLiteralsCost` (`zstd_opt.c`)

| Change |    Delta |      % |            Time | Samples | Caller               | Location          |
| -----: | -------: | -----: | --------------: | ------: | -------------------- | ----------------- |
| +38.9% | +14.00ms | 100.0% | 36.0ms → 50.0ms | 36 → 50 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_litLengthPrice` (`zstd_opt.c`)

| Change |    Delta |             % |              Time |   Samples | Caller               | Location          |
| -----: | -------: | ------------: | ----------------: | --------: | -------------------- | ----------------- |
| +10.3% | +13.00ms | 99.2% → 99.3% | 126.0ms → 139.0ms | 126 → 139 | `ZSTD_buildSeqStore` | `zstd_compress.c` |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

| Change |   Delta |              % |            Time | Samples | Caller                           | Location            |
| -----: | ------: | -------------: | --------------: | ------: | -------------------------------- | ------------------- |
| +20.6% | +7.00ms | 100.0% → 97.6% | 34.0ms → 41.0ms | 34 → 41 | `ZSTD_compressContinue_internal` | `zstd_compress.c`   |
|    new | +2.00ms |    0.0% → 4.8% |     0ms → 2.0ms |   0 → 2 | `ZSTD_deriveBlockSplitsHelper`   | `zstd_compress.c`   |
|    new | +1.00ms |    0.0% → 2.4% |     0ms → 1.0ms |   0 → 1 | `ZSTDMT_compressionJob`          | `zstdmt_compress.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

| Change |   Delta |      % |            Time | Samples | Caller                         | Location          |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------ | ----------------- |
| +20.6% | +7.00ms | 100.0% | 34.0ms → 41.0ms | 34 → 41 | `ZSTD_deriveBlockSplitsHelper` | `zstd_compress.c` |

##### `ZSTD_updateStats` (`zstd_opt.c`)

|  Change |    Delta |              % |           Time | Samples | Caller                        | Location          |
| ------: | -------: | -------------: | -------------: | ------: | ----------------------------- | ----------------- |
|  -77.8% | -21.00ms | 96.4% → 100.0% | 27.0ms → 6.0ms |  27 → 6 | `ZSTD_buildSeqStore`          | `zstd_compress.c` |
| removed |  -1.00ms |    3.6% → 0.0% |    1.0ms → 0ms |   1 → 0 | `ZSTD_compressBlock_btultra2` | `zstd_opt.c`      |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

| Change |    Delta |      % |           Time | Samples | Caller                                               | Location          |
| -----: | -------: | -----: | -------------: | ------: | ---------------------------------------------------- | ----------------- |
| -62.5% | -10.00ms | 100.0% | 16.0ms → 6.0ms |  16 → 6 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `clear_page ([kernel])` (`<unknown>`)

|  Change |   Delta |              % |          Time | Samples | Caller                                   | Location    |
| ------: | ------: | -------------: | ------------: | ------: | ---------------------------------------- | ----------- |
|  -60.0% | -3.00ms | 83.3% → 100.0% | 5.0ms → 2.0ms |   5 → 2 | `vma_alloc_anon_folio_pmd ([kernel])`    | `<unknown>` |
| removed | -1.00ms |   16.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `__alloc_frozen_pages_noprof ([kernel])` | `<unknown>` |

##### `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`)

|  Change |    Delta |             % |         Time | Samples | Caller                              | Location          |
| ------: | -------: | ------------: | -----------: | ------: | ----------------------------------- | ----------------- |
| removed | -26.00ms | 100.0% → 0.0% | 26.0ms → 0ms |  26 → 0 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |
|     new | +22.00ms | 0.0% → 100.0% | 0ms → 22.0ms |  0 → 22 | `ZSTD_entropyCompressSeqStore`      | `zstd_compress.c` |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

| Change |   Delta |      % |            Time | Samples | Caller                           | Location          |
| -----: | ------: | -----: | --------------: | ------: | -------------------------------- | ----------------- |
| -15.4% | -4.00ms | 100.0% | 26.0ms → 22.0ms | 26 → 22 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `HUF_writeCTable_wksp` (`huf_compress.c`)

|  Change |   Delta |             % |          Time | Samples | Caller                  | Location         |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------- | ---------------- |
|  -75.0% | -3.00ms | 66.7% → 50.0% | 4.0ms → 1.0ms |   4 → 1 | `HUF_optimalTableLog`   | `huf_compress.c` |
| removed | -1.00ms |  16.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `HUF_compress_internal` | `huf_compress.c` |

##### `vma_alloc_anon_folio_pmd ([kernel])` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                                  | Location    |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------------- | ----------- |
| -60.0% | -3.00ms | 100.0% | 5.0ms → 2.0ms |   5 → 2 | `do_huge_pmd_anonymous_page ([kernel])` | `<unknown>` |

##### `ZSTD_XXH64_update` (`xxhash.h`)

|  Change |   Delta |              % |          Time | Samples | Caller                           | Location            |
| ------: | ------: | -------------: | ------------: | ------: | -------------------------------- | ------------------- |
| removed | -5.00ms |   71.4% → 0.0% |   5.0ms → 0ms |   5 → 0 | `ZSTD_compressContinue_internal` | `zstd_compress.c`   |
| +100.0% | +2.00ms | 28.6% → 100.0% | 2.0ms → 4.0ms |   2 → 4 | `ZSTDMT_compressionJob`          | `zstdmt_compress.c` |

##### `FSE_buildCTable_wksp` (`fse_compress.c`)

| Change |   Delta |      % |          Time | Samples | Caller             | Location                    |
| -----: | ------: | -----: | ------------: | ------: | ------------------ | --------------------------- |
| -60.0% | -3.00ms | 100.0% | 5.0ms → 2.0ms |   5 → 2 | `ZSTD_buildCTable` | `zstd_compress_sequences.c` |

##### `ZSTD_buildCTable` (`zstd_compress_sequences.c`)

| Change |   Delta |      % |          Time | Samples | Caller                          | Location          |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------- | ----------------- |
| -60.0% | -3.00ms | 100.0% | 5.0ms → 2.0ms |   5 → 2 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |

##### `do_huge_pmd_anonymous_page ([kernel])` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                         | Location    |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------ | ----------- |
| -33.3% | -2.00ms | 100.0% | 6.0ms → 4.0ms |   6 → 4 | `__handle_mm_fault ([kernel])` | `<unknown>` |

##### `__handle_mm_fault ([kernel])` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                       | Location    |
| -----: | ------: | -----: | ------------: | ------: | ---------------------------- | ----------- |
| -33.3% | -2.00ms | 100.0% | 6.0ms → 4.0ms |   6 → 4 | `handle_mm_fault ([kernel])` | `<unknown>` |

##### `handle_mm_fault ([kernel])` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                     | Location    |
| -----: | ------: | -----: | ------------: | ------: | -------------------------- | ----------- |
| -33.3% | -2.00ms | 100.0% | 6.0ms → 4.0ms |   6 → 4 | `do_page_fault ([kernel])` | `<unknown>` |

##### `FSE_compress_usingCTable_generic` (`fse_compress.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                 | Location         |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------- | ---------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `HUF_writeCTable_wksp` | `huf_compress.c` |

##### `ZSTD_deriveSeqStoreChunk` (`zstd_compress.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                           | Location          |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------- | ----------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `pthread_cond_wait (libc.so.6)` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller        | Location |
| ------: | ------: | ------------: | ----------: | ------: | ------------- | -------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `POOL_thread` | `pool.c` |

##### `do_page_fault ([kernel])` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                            | Location    |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------- | ----------- |
| -16.7% | -1.00ms | 100.0% | 6.0ms → 5.0ms |   6 → 5 | `do_translation_fault ([kernel])` | `<unknown>` |

##### `do_translation_fault ([kernel])` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                    | Location    |
| -----: | ------: | -----: | ------------: | ------: | ------------------------- | ----------- |
| -16.7% | -1.00ms | 100.0% | 6.0ms → 5.0ms |   6 → 5 | `do_mem_abort ([kernel])` | `<unknown>` |

##### `do_mem_abort ([kernel])` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller              | Location    |
| -----: | ------: | -----: | ------------: | ------: | ------------------- | ----------- |
| -16.7% | -1.00ms | 100.0% | 6.0ms → 5.0ms |   6 → 5 | `el0_da ([kernel])` | `<unknown>` |

##### `el0_da ([kernel])` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                            | Location    |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------- | ----------- |
| -16.7% | -1.00ms | 100.0% | 6.0ms → 5.0ms |   6 → 5 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `HIST_count_parallel_wksp` (`hist.c`)

| Change |   Delta |             % |            Time | Samples | Caller                              | Location          |
| -----: | ------: | ------------: | --------------: | ------: | ----------------------------------- | ----------------- |
| -57.1% | -4.00ms | 36.8% → 16.7% |   7.0ms → 3.0ms |   7 → 3 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c` |
| +25.0% | +3.00ms | 63.2% → 83.3% | 12.0ms → 15.0ms | 12 → 15 | `ZSTD_buildSequencesStatistics`     | `zstd_compress.c` |

##### `ZSTD_fseBitCost` (`zstd_compress_sequences.c`)

|  Change |   Delta |             % |        Time | Samples | Caller                                               | Location          |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------------------------------- | ----------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |

##### `ZSTD_compressStream2` (`zstd_compress.c`)

| Change |   Delta |      % |           Time | Samples | Caller                         | Location   |
| -----: | ------: | -----: | -------------: | ------: | ------------------------------ | ---------- |
| -10.0% | -1.00ms | 100.0% | 10.0ms → 9.0ms |  10 → 9 | `FIO_compressFilename_srcFile` | `fileio.c` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `unknown (libc.so.6)` (`<unknown>`)

| Change |   Delta |     % |            Time |         Samples | Callee                    | Location    |
| -----: | ------: | ----: | --------------: | --------------: | ------------------------- | ----------- |
| +67.1% | +8.046s | 99.9% | 11.99s → 20.04s | 11,999 → 20,045 | `POOL_thread`             | `pool.c`    |
| +67.1% | +8.046s | 99.9% | 11.99s → 20.04s | 11,999 → 20,045 | `unknown (libc.so.6)`     | `<unknown>` |
| +75.0% | +3.00ms | <0.1% |   4.0ms → 7.0ms |           4 → 7 | `__read (libc.so.6)`      | `<unknown>` |
| -33.3% | -2.00ms | <0.1% |   6.0ms → 4.0ms |           6 → 4 | `el0t_64_sync ([kernel])` | `<unknown>` |
| +10.0% | +1.00ms |  0.1% | 10.0ms → 11.0ms |         10 → 11 | `main`                    | `zstdcli.c` |

##### `POOL_thread` (`pool.c`)

|  Change |   Delta |              % |            Time |         Samples | Callee                          | Location            |
| ------: | ------: | -------------: | --------------: | --------------: | ------------------------------- | ------------------- |
|  +67.1% | +8.045s | 99.9% → 100.0% | 11.99s → 20.03s | 11,993 → 20,038 | `ZSTDMT_compressionJob`         | `zstdmt_compress.c` |
|  +75.0% | +3.00ms |          <0.1% |   4.0ms → 7.0ms |           4 → 7 | `AIO_ReadPool_executeReadJob`   | `fileio_asyncio.c`  |
| removed | -2.00ms |   <0.1% → 0.0% |     2.0ms → 0ms |           2 → 0 | `pthread_cond_wait (libc.so.6)` | `<unknown>`         |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

|    Change |     Delta |              % |            Time |         Samples | Callee                                 | Location          |
| --------: | --------: | -------------: | --------------: | --------------: | -------------------------------------- | ----------------- |
|    +40.5% |   +4.851s | 100.0% → 84.0% | 11.98s → 16.83s | 11,988 → 16,839 | `ZSTD_compressContinue_internal`       | `zstd_compress.c` |
| +97533.3% |   +2.926s |  <0.1% → 14.6% |   3.0ms → 2.92s |       3 → 2,929 | `ZSTD_compressBegin_advanced_internal` | `zstd_compress.c` |
|       new | +265.00ms |    0.0% → 1.3% |   0ms → 265.0ms |         0 → 265 | `ZSTD_compressEnd_public`              | `zstd_compress.c` |
|   +100.0% |   +2.00ms |          <0.1% |   2.0ms → 4.0ms |           2 → 4 | `ZSTD_XXH64_update`                    | `xxhash.h`        |
|       new |   +1.00ms |   0.0% → <0.1% |     0ms → 1.0ms |           0 → 1 | `ZSTD_deriveBlockSplitsHelper`         | `zstd_compress.c` |

##### `ZSTD_compressContinue_internal` (`zstd_compress.c`)

|  Change |    Delta |             % |            Time |         Samples | Callee                              | Location          |
| ------: | -------: | ------------: | --------------: | --------------: | ----------------------------------- | ----------------- |
|  +42.8% |  +5.097s | 99.4% → 99.5% | 11.92s → 17.01s | 11,921 → 17,018 | `ZSTD_buildSeqStore`                | `zstd_compress.c` |
|     new | +23.00ms |   0.0% → 0.1% |    0ms → 23.0ms |          0 → 23 | `ZSTD_splitBlock`                   | `zstd_preSplit.c` |
|  +20.6% |  +7.00ms |   0.3% → 0.2% | 34.0ms → 41.0ms |         34 → 41 | `ZSTD_deriveBlockSplitsHelper`      | `zstd_compress.c` |
| removed |  -5.00ms |  <0.1% → 0.0% |     5.0ms → 0ms |           5 → 0 | `ZSTD_XXH64_update`                 | `xxhash.h`        |
|  -15.4% |  -4.00ms |   0.2% → 0.1% | 26.0ms → 22.0ms |         26 → 22 | `ZSTD_compressSeqStore_singleBlock` | `zstd_compress.c` |

##### `ZSTD_buildSeqStore` (`zstd_compress.c`)

| Change |    Delta |             % |              Time |         Samples | Callee                              | Location     |
| -----: | -------: | ------------: | ----------------: | --------------: | ----------------------------------- | ------------ |
| +43.4% |  +5.084s | 98.2% → 98.7% |   11.70s → 16.79s | 11,707 → 16,791 | `ZSTD_compressBlock_opt2`           | `zstd_opt.c` |
| -77.8% | -21.00ms |  0.2% → <0.1% |    27.0ms → 6.0ms |          27 → 6 | `ZSTD_updateStats`                  | `zstd_opt.c` |
| +38.9% | +14.00ms |          0.3% |   36.0ms → 50.0ms |         36 → 50 | `ZSTD_rawLiteralsCost`              | `zstd_opt.c` |
| +10.3% | +13.00ms |   1.1% → 0.8% | 126.0ms → 139.0ms |       126 → 139 | `ZSTD_litLengthPrice`               | `zstd_opt.c` |
| +85.7% |  +6.00ms |          0.1% |    7.0ms → 13.0ms |          7 → 13 | `ZSTD_optLdm_processMatchCandidate` | `zstd_opt.c` |

##### `ZSTD_compressBlock_opt2` (`zstd_opt.c`)

| Change |   Delta |             % |            Time |        Samples | Callee                              | Location     |
| -----: | ------: | ------------: | --------------: | -------------: | ----------------------------------- | ------------ |
| +46.3% | +4.618s | 85.1% → 86.8% |  9.97s → 14.58s | 9,971 → 14,589 | `ZSTD_btGetAllMatches_noDict_3`     | `zstd_opt.c` |
| +16.7% | +4.00ms |          0.2% | 24.0ms → 28.0ms |        24 → 28 | `ZSTD_insertAndFindFirstIndexHash3` | `zstd_opt.c` |

##### `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`)

| Change |    Delta |    % |            Time | Samples | Callee           | Location     |
| -----: | -------: | ---: | --------------: | ------: | ---------------- | ------------ |
| +50.0% | +14.00ms | 0.3% | 28.0ms → 42.0ms | 28 → 42 | `ZSTD_insertBt1` | `zstd_opt.c` |

##### `ZSTD_compressBegin_internal` (`zstd_compress.c`)

|  Change |   Delta |             % |          Time |   Samples | Callee                       | Location          |
| ------: | ------: | ------------: | ------------: | --------: | ---------------------------- | ----------------- |
|     new | +2.922s |  0.0% → 99.8% |   0ms → 2.92s | 0 → 2,922 | `ZSTD_loadDictionaryContent` | `zstd_compress.c` |
| +133.3% | +4.00ms | 100.0% → 0.2% | 3.0ms → 7.0ms |     3 → 7 | `ZSTD_resetCCtx_internal`    | `zstd_compress.c` |

##### `ZSTD_compressBegin_advanced_internal` (`zstd_compress.c`)

|    Change |   Delta |      % |          Time |   Samples | Callee                        | Location          |
| --------: | ------: | -----: | ------------: | --------: | ----------------------------- | ----------------- |
| +97533.3% | +2.926s | 100.0% | 3.0ms → 2.92s | 3 → 2,929 | `ZSTD_compressBegin_internal` | `zstd_compress.c` |

##### `ZSTD_updateTree` (`zstd_opt.c`)

| Change |   Delta |            % |        Time |   Samples | Callee           | Location     |
| -----: | ------: | -----------: | ----------: | --------: | ---------------- | ------------ |
|    new | +2.920s | 0.0% → 99.9% | 0ms → 2.92s | 0 → 2,920 | `ZSTD_insertBt1` | `zstd_opt.c` |

##### `ZSTD_loadDictionaryContent` (`zstd_compress.c`)

| Change |   Delta |             % |        Time |   Samples | Callee            | Location     |
| -----: | ------: | ------------: | ----------: | --------: | ----------------- | ------------ |
|    new | +2.922s | 0.0% → 100.0% | 0ms → 2.92s | 0 → 2,922 | `ZSTD_updateTree` | `zstd_opt.c` |

##### `ZSTD_compressEnd_public` (`zstd_compress.c`)

| Change |     Delta |             % |          Time | Samples | Callee                           | Location          |
| -----: | --------: | ------------: | ------------: | ------: | -------------------------------- | ----------------- |
|    new | +265.00ms | 0.0% → 100.0% | 0ms → 265.0ms | 0 → 265 | `ZSTD_compressContinue_internal` | `zstd_compress.c` |

##### `ZSTD_splitBlock` (`zstd_preSplit.c`)

| Change |    Delta |            % |         Time | Samples | Callee                     | Location          |
| -----: | -------: | -----------: | -----------: | ------: | -------------------------- | ----------------- |
|    new | +17.00ms | 0.0% → 73.9% | 0ms → 17.0ms |  0 → 17 | `ZSTD_recordFingerprint_1` | `zstd_preSplit.c` |

##### `ZSTD_entropyCompressSeqStore` (`zstd_compress.c`)

| Change |    Delta |             % |         Time | Samples | Callee                                  | Location          |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------- | ----------------- |
|    new | +22.00ms | 0.0% → 100.0% | 0ms → 22.0ms |  0 → 22 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |

##### `ZSTD_buildBlockEntropyStats` (`zstd_compress.c`)

|  Change |   Delta |             % |           Time | Samples | Callee                          | Location          |
| ------: | ------: | ------------: | -------------: | ------: | ------------------------------- | ----------------- |
| +100.0% | +8.00ms |         47.1% | 8.0ms → 16.0ms |  8 → 16 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |
| +100.0% | +4.00ms |         23.5% |  4.0ms → 8.0ms |   4 → 8 | `ZSTD_seqToCodes`               | `zstd_compress.c` |
|     new | +2.00ms |   0.0% → 5.9% |    0ms → 2.0ms |   0 → 2 | `HUF_buildCTable_wksp`          | `huf_compress.c`  |
|     new | +2.00ms |   0.0% → 5.9% |    0ms → 2.0ms |   0 → 2 | `HIST_count_wksp`               | `hist.c`          |
|  +25.0% | +1.00ms | 23.5% → 14.7% |  4.0ms → 5.0ms |   4 → 5 | `HUF_optimalTableLog`           | `huf_compress.c`  |

##### `ZSTD_deriveBlockSplitsHelper` (`zstd_compress.c`)

| Change |   Delta |              % |            Time | Samples | Callee                                               | Location          |
| -----: | ------: | -------------: | --------------: | ------: | ---------------------------------------------------- | ----------------- |
| +20.6% | +7.00ms | 100.0% → 97.6% | 34.0ms → 41.0ms | 34 → 41 | `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` | `zstd_compress.c` |
|    new | +2.00ms |    0.0% → 4.8% |     0ms → 2.0ms |   0 → 2 | `ZSTD_deriveBlockSplitsHelper`                       | `zstd_compress.c` |

##### `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` (`zstd_compress.c`)

|  Change |    Delta |             % |            Time | Samples | Callee                              | Location                    |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------------- | --------------------------- |
| +100.0% | +17.00ms | 50.0% → 82.9% | 17.0ms → 34.0ms | 17 → 34 | `ZSTD_buildBlockEntropyStats`       | `zstd_compress.c`           |
|  -62.5% | -10.00ms | 47.1% → 14.6% |  16.0ms → 6.0ms |  16 → 6 | `ZSTD_estimateBlockSize_symbolType` | `zstd_compress.c`           |
| removed |  -1.00ms |   2.9% → 0.0% |     1.0ms → 0ms |   1 → 0 | `ZSTD_fseBitCost`                   | `zstd_compress_sequences.c` |
|     new |  +1.00ms |   0.0% → 2.4% |     0ms → 1.0ms |   0 → 1 | `HIST_count_wksp`                   | `hist.c`                    |

##### `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`)

| Change |   Delta |             % |          Time | Samples | Callee                     | Location |
| -----: | ------: | ------------: | ------------: | ------: | -------------------------- | -------- |
| -57.1% | -4.00ms | 43.8% → 50.0% | 7.0ms → 3.0ms |   7 → 3 | `HIST_count_parallel_wksp` | `hist.c` |

##### `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`)

|  Change |   Delta |             % |           Time | Samples | Callee                          | Location          |
| ------: | ------: | ------------: | -------------: | ------: | ------------------------------- | ----------------- |
|  -63.6% | -7.00ms | 42.3% → 18.2% | 11.0ms → 4.0ms |  11 → 4 | `ZSTD_buildSequencesStatistics` | `zstd_compress.c` |
| +100.0% | +2.00ms |  7.7% → 18.2% |  2.0ms → 4.0ms |   2 → 4 | `ZSTD_seqToCodes`               | `zstd_compress.c` |
|     new | +1.00ms |   0.0% → 4.5% |    0ms → 1.0ms |   0 → 1 | `unknown (libc.so.6)`           | `<unknown>`       |

##### `ZSTD_compressSeqStore_singleBlock` (`zstd_compress.c`)

|  Change |    Delta |             % |         Time | Samples | Callee                                  | Location          |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------------- | ----------------- |
| removed | -26.00ms | 100.0% → 0.0% | 26.0ms → 0ms |  26 → 0 | `ZSTD_entropyCompressSeqStore_internal` | `zstd_compress.c` |
|     new | +22.00ms | 0.0% → 100.0% | 0ms → 22.0ms |  0 → 22 | `ZSTD_entropyCompressSeqStore`          | `zstd_compress.c` |

##### `HUF_writeCTable_wksp` (`huf_compress.c`)

|  Change |   Delta |             % |          Time | Samples | Callee                             | Location         |
| ------: | ------: | ------------: | ------------: | ------: | ---------------------------------- | ---------------- |
|  -75.0% | -3.00ms | 66.7% → 50.0% | 4.0ms → 1.0ms |   4 → 1 | `HIST_count_simple`                | `hist.c`         |
| removed | -2.00ms |  33.3% → 0.0% |   2.0ms → 0ms |   2 → 0 | `FSE_compress_usingCTable_generic` | `fse_compress.c` |

##### `vma_alloc_anon_folio_pmd ([kernel])` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Callee                  | Location    |
| -----: | ------: | -----: | ------------: | ------: | ----------------------- | ----------- |
| -60.0% | -3.00ms | 100.0% | 5.0ms → 2.0ms |   5 → 2 | `clear_page ([kernel])` | `<unknown>` |

##### `ZSTD_buildCTable` (`zstd_compress_sequences.c`)

| Change |   Delta |      % |          Time | Samples | Callee                 | Location         |
| -----: | ------: | -----: | ------------: | ------: | ---------------------- | ---------------- |
| -60.0% | -3.00ms | 100.0% | 5.0ms → 2.0ms |   5 → 2 | `FSE_buildCTable_wksp` | `fse_compress.c` |

##### `do_huge_pmd_anonymous_page ([kernel])` (`<unknown>`)

|  Change |   Delta |             % |          Time | Samples | Callee                                | Location    |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------- | ----------- |
|  -60.0% | -3.00ms | 83.3% → 50.0% | 5.0ms → 2.0ms |   5 → 2 | `vma_alloc_anon_folio_pmd ([kernel])` | `<unknown>` |
|     new | +2.00ms |  0.0% → 50.0% |   0ms → 2.0ms |   0 → 2 | `map_anon_folio_pmd_pf ([kernel])`    | `<unknown>` |
| removed | -1.00ms |  16.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `__alloc_pages_noprof ([kernel])`     | `<unknown>` |

##### `__handle_mm_fault ([kernel])` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Callee                                  | Location    |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------------- | ----------- |
| -33.3% | -2.00ms | 100.0% | 6.0ms → 4.0ms |   6 → 4 | `do_huge_pmd_anonymous_page ([kernel])` | `<unknown>` |

##### `handle_mm_fault ([kernel])` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Callee                         | Location    |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------ | ----------- |
| -33.3% | -2.00ms | 100.0% | 6.0ms → 4.0ms |   6 → 4 | `__handle_mm_fault ([kernel])` | `<unknown>` |

##### `pthread_cond_wait (libc.so.6)` (`<unknown>`)

|  Change |   Delta |            % |        Time | Samples | Callee                | Location    |
| ------: | ------: | -----------: | ----------: | ------: | --------------------- | ----------- |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `unknown (libc.so.6)` | `<unknown>` |

##### `do_page_fault ([kernel])` (`<unknown>`)

| Change |   Delta |              % |          Time | Samples | Callee                       | Location    |
| -----: | ------: | -------------: | ------------: | ------: | ---------------------------- | ----------- |
| -33.3% | -2.00ms | 100.0% → 80.0% | 6.0ms → 4.0ms |   6 → 4 | `handle_mm_fault ([kernel])` | `<unknown>` |

##### `do_translation_fault ([kernel])` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Callee                     | Location    |
| -----: | ------: | -----: | ------------: | ------: | -------------------------- | ----------- |
| -16.7% | -1.00ms | 100.0% | 6.0ms → 5.0ms |   6 → 5 | `do_page_fault ([kernel])` | `<unknown>` |

##### `do_mem_abort ([kernel])` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Callee                            | Location    |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------- | ----------- |
| -16.7% | -1.00ms | 100.0% | 6.0ms → 5.0ms |   6 → 5 | `do_translation_fault ([kernel])` | `<unknown>` |

##### `el0_da ([kernel])` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Callee                    | Location    |
| -----: | ------: | -----: | ------------: | ------: | ------------------------- | ----------- |
| -16.7% | -1.00ms | 100.0% | 6.0ms → 5.0ms |   6 → 5 | `do_mem_abort ([kernel])` | `<unknown>` |

##### `ZSTD_compressStream2` (`zstd_compress.c`)

| Change |   Delta |      % |           Time | Samples | Callee                | Location    |
| -----: | ------: | -----: | -------------: | ------: | --------------------- | ----------- |
| -10.0% | -1.00ms | 100.0% | 10.0ms → 9.0ms |  10 → 9 | `unknown (libc.so.6)` | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

|  Change |     Delta |             % |              Time |        Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------: | --------: | ------------: | ----------------: | -------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +44.1% |   +4.382s | 82.7% → 71.4% |    9.93s → 14.31s | 9,933 → 14,315 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     new |   +2.920s |  0.0% → 14.6% |       0ms → 2.92s |      0 → 2,920 | `ZSTD_insertBt1` (`zstd_opt.c`) ← `ZSTD_updateTree` ← `ZSTD_loadDictionaryContent` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  +24.6% | +424.00ms | 14.3% → 10.7% |     1.72s → 2.14s |  1,722 → 2,146 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|     new | +219.00ms |   0.0% → 1.1% |     0ms → 219.0ms |        0 → 219 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|     new |  +41.00ms |   0.0% → 0.2% |      0ms → 41.0ms |         0 → 41 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTD_compressEnd_public` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new |  +17.00ms |   0.0% → 0.1% |      0ms → 17.0ms |         0 → 17 | `ZSTD_recordFingerprint_1` (`zstd_preSplit.c`) ← `ZSTD_splitBlock` ← `ZSTD_compressContinue_internal` (`zstd_compress.c`) ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  +38.9% |  +14.00ms |   0.3% → 0.2% |   36.0ms → 50.0ms |        36 → 50 | `ZSTD_rawLiteralsCost` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  +46.4% |  +13.00ms |          0.2% |   28.0ms → 41.0ms |        28 → 41 | `ZSTD_insertBt1` (`zstd_opt.c`) ← `ZSTD_btGetAllMatches_noDict_3` ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|   +7.9% |  +10.00ms |   1.0% → 0.7% | 126.0ms → 136.0ms |      126 → 136 | `ZSTD_litLengthPrice` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|     new |   +9.00ms |  0.0% → <0.1% |       0ms → 9.0ms |          0 → 9 | `ZSTD_encodeSequences` (`zstd_compress_sequences.c`) ← `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`) ← `ZSTD_entropyCompressSeqStore` ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                     |
| +200.0% |   +8.00ms |  <0.1% → 0.1% |    4.0ms → 12.0ms |         4 → 12 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                           |
|  +85.7% |   +6.00ms |          0.1% |    7.0ms → 13.0ms |         7 → 13 | `ZSTD_optLdm_processMatchCandidate` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|     new |   +5.00ms |  0.0% → <0.1% |       0ms → 5.0ms |          0 → 5 | `ZSTD_splitBlock` (`zstd_preSplit.c`) ← `ZSTD_compressContinue_internal` (`zstd_compress.c`) ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  +16.7% |   +4.00ms |   0.2% → 0.1% |   24.0ms → 28.0ms |        24 → 28 | `ZSTD_insertAndFindFirstIndexHash3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +100.0% |   +4.00ms |         <0.1% |     4.0ms → 8.0ms |          4 → 8 | `ZSTD_seqToCodes` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| +133.3% |   +4.00ms |         <0.1% |     3.0ms → 7.0ms |          3 → 7 | `__arch_copy_to_user ([kernel])` ← `copy_page_to_iter ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `__arm64_sys_read ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `__read (libc.so.6)` ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` |
|     new |   +4.00ms |  0.0% → <0.1% |       0ms → 4.0ms |          0 → 4 | `ZSTD_seqToCodes` (`zstd_compress.c`) ← `ZSTD_entropyCompressSeqStore_internal` ← `ZSTD_entropyCompressSeqStore` ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  +30.0% |   +3.00ms |          0.1% |   10.0ms → 13.0ms |        10 → 13 | `ZSTD_btGetAllMatches_noDict_3` (`zstd_opt.c`) ← `ZSTD_compressBlock_opt2` ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +50.0% |   +3.00ms |         <0.1% |     6.0ms → 9.0ms |          6 → 9 | `unknown (libc.so.6)` ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|     new |   +3.00ms |  0.0% → <0.1% |       0ms → 3.0ms |          0 → 3 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_entropyCompressSeqStore_internal` ← `ZSTD_entropyCompressSeqStore` ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                  |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

|  Change |    Delta |            % |           Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------: | -------: | -----------: | -------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -77.8% | -21.00ms | 0.2% → <0.1% | 27.0ms → 6.0ms |  27 → 6 | `ZSTD_updateStats` (`zstd_opt.c`) ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                  |
| removed | -10.00ms |  0.1% → 0.0% |   10.0ms → 0ms |  10 → 0 | `ZSTD_encodeSequences` (`zstd_compress_sequences.c`) ← `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`) ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                      |
| removed |  -8.00ms |  0.1% → 0.0% |    8.0ms → 0ms |   8 → 0 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_entropyCompressSeqStore_internal` ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                   |
|  -66.7% |  -6.00ms | 0.1% → <0.1% |  9.0ms → 3.0ms |   9 → 3 | `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                               |
| removed |  -5.00ms | <0.1% → 0.0% |    5.0ms → 0ms |   5 → 0 | `ZSTD_XXH64_update` (`xxhash.h`) ← `ZSTD_compressContinue_internal` (`zstd_compress.c`) ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                          |
|  -57.1% |  -4.00ms | 0.1% → <0.1% |  7.0ms → 3.0ms |   7 → 3 | `HIST_count_parallel_wksp` (`hist.c`) ← `ZSTD_estimateBlockSize_symbolType` (`zstd_compress.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                       |
| removed |  -3.00ms | <0.1% → 0.0% |    3.0ms → 0ms |   3 → 0 | `clear_page ([kernel])` ← `vma_alloc_anon_folio_pmd ([kernel])` ← `do_huge_pmd_anonymous_page ([kernel])` ← `__handle_mm_fault ([kernel])` ← `handle_mm_fault ([kernel])` ← `do_page_fault ([kernel])` ← `do_translation_fault ([kernel])` ← `do_mem_abort ([kernel])` ← `el0_da ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)` |
|  -33.3% |  -2.00ms |        <0.1% |  6.0ms → 4.0ms |   6 → 4 | `ZSTD_compressBlock_opt2` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                           |
| removed |  -2.00ms | <0.1% → 0.0% |    2.0ms → 0ms |   2 → 0 | `FSE_buildCTable_wksp` (`fse_compress.c`) ← `ZSTD_buildCTable` (`zstd_compress_sequences.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_entropyCompressSeqStore_internal` ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                            |
| removed |  -2.00ms | <0.1% → 0.0% |    2.0ms → 0ms |   2 → 0 | `ZSTD_seqToCodes` (`zstd_compress.c`) ← `ZSTD_entropyCompressSeqStore_internal` ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                         |
| removed |  -2.00ms | <0.1% → 0.0% |    2.0ms → 0ms |   2 → 0 | `ZSTD_deriveSeqStoreChunk` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                                                                                |
| removed |  -1.00ms | <0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `ZSTD_updateStats` (`zstd_opt.c`) ← `ZSTD_compressBlock_btultra2` ← `ZSTD_buildSeqStore` (`zstd_compress.c`) ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                                                                                                                                  |
| removed |  -1.00ms | <0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `HIST_count_simple` (`hist.c`) ← `HUF_writeCTable_wksp` (`huf_compress.c`) ← `HUF_optimalTableLog` ← `HUF_compress_internal` ← `HUF_compress4X_repeat` ← `ZSTD_compressLiterals` (`zstd_compress_literals.c`) ← `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`) ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                             |
|  -33.3% |  -1.00ms |        <0.1% |  3.0ms → 2.0ms |   3 → 2 | `FSE_buildCTable_wksp` (`fse_compress.c`) ← `ZSTD_buildCTable` (`zstd_compress_sequences.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                    |
| removed |  -1.00ms | <0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `HUF_buildCTable_wksp` (`huf_compress.c`) ← `HUF_optimalTableLog` ← `HUF_compress_internal` ← `HUF_compress4X_repeat` ← `ZSTD_compressLiterals` (`zstd_compress_literals.c`) ← `ZSTD_entropyCompressSeqStore_internal` (`zstd_compress.c`) ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                              |
| removed |  -1.00ms | <0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `FSE_compress_usingCTable_generic` (`fse_compress.c`) ← `HUF_writeCTable_wksp` (`huf_compress.c`) ← `HUF_optimalTableLog` ← `ZSTD_buildBlockEntropyStats` (`zstd_compress.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                         |
| removed |  -1.00ms | <0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `ZSTD_selectEncodingType` (`zstd_compress_sequences.c`) ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_buildBlockEntropyStats` ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                         |
|  -50.0% |  -1.00ms |        <0.1% |  2.0ms → 1.0ms |   2 → 1 | `HIST_count_simple` (`hist.c`) ← `HUF_writeCTable_wksp` (`huf_compress.c`) ← `HUF_optimalTableLog` ← `ZSTD_buildBlockEntropyStats` (`zstd_compress.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                |
| removed |  -1.00ms | <0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `HIST_count_simple` (`hist.c`) ← `HUF_writeCTable_wksp` (`huf_compress.c`) ← `ZSTD_buildBlockEntropyStats` (`zstd_compress.c`) ← `ZSTD_buildEntropyStatisticsAndEstimateSubBlockSize` ← `ZSTD_deriveBlockSplitsHelper` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                                                                        |
| removed |  -1.00ms | <0.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `FSE_writeNCount_generic` (`fse_compress.c`) ← `ZSTD_NCountCost` (`zstd_compress_sequences.c`) ← `ZSTD_selectEncodingType` ← `ZSTD_buildSequencesStatistics` (`zstd_compress.c`) ← `ZSTD_entropyCompressSeqStore_internal` ← `ZSTD_compressSeqStore_singleBlock` ← `ZSTD_compressContinue_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) ← `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`                                                                                                                                                                              |

# Uninterruptible sleep profile diff

Slept 2 → 5 times (+3 times, +150.0%).

| Category |  Change | Delta |      % | Sleeps |
| -------- | ------: | ----: | -----: | -----: |
| Kernel   | +150.0% |    +3 | 100.0% |  2 → 5 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
└── 2 → 5 times (100.0%) unknown (libc.so.6)
    ├── … 2 → 4 times (100.0% → 80.0%) __read (libc.so.6)
    │   └── 2 → 4 times (100.0% → 80.0%) el0t_64_sync ([kernel])
    │       └── 2 → 4 times (100.0% → 80.0%) el0t_64_sync_handler ([kernel])
    │           └── 2 → 4 times (100.0% → 80.0%) el0_svc ([kernel])
    │               └── 2 → 4 times (100.0% → 80.0%) do_el0_svc ([kernel])
    │                   └── 2 → 4 times (100.0% → 80.0%) invoke_syscall.constprop.0 ([kernel])
    │                       └── 2 → 4 times (100.0% → 80.0%) __arm64_sys_read ([kernel])
    │                           └── 2 → 4 times (100.0% → 80.0%) ksys_read ([kernel])
    │                               └── 2 → 4 times (100.0% → 80.0%) vfs_read ([kernel])
    │                                   └── 2 → 4 times (100.0% → 80.0%) ovl_read_iter ([kernel])
    │                                       └── 2 → 4 times (100.0% → 80.0%) backing_file_read_iter ([kernel])
    │                                           └── 2 → 4 times (100.0% → 80.0%) vfs_iter_read ([kernel])
    │                                               └── 2 → 4 times (100.0% → 80.0%) do_iter_readv_writev ([kernel])
    │                                                   └── 2 → 4 times (100.0% → 80.0%) ext4_file_read_iter ([kernel])
    │                                                       └── 2 → 4 times (100.0% → 80.0%) generic_file_read_iter ([kernel])
    │                                                           └── 2 → 4 times (100.0% → 80.0%) filemap_read ([kernel])
    │                                                               └── 2 → 4 times (100.0% → 80.0%) copy_page_to_iter ([kernel])
    │                                                                   └── 2 → 4 times (100.0% → 80.0%) __arch_copy_to_user ([kernel])
    │                                                                       └── 2 → 4 times (100.0% → 80.0%) el1h_64_sync ([kernel])
    │                                                                           └── 2 → 4 times (100.0% → 80.0%) el1h_64_sync_handler ([kernel])
    │                                                                               └── 2 → 4 times (100.0% → 80.0%) el1_abort ([kernel])
    │                                                                                   └── 2 → 4 times (100.0% → 80.0%) do_mem_abort ([kernel])
    │                                                                                       └── 2 → 4 times (100.0% → 80.0%) do_translation_fault ([kernel])
    │                                                                                           └── 2 → 4 times (100.0% → 80.0%) do_page_fault ([kernel])
    │                                                                                               └── 2 → 4 times (100.0% → 80.0%) lock_mm_and_find_vma ([kernel])
    │                                                                                                   └── 2 → 4 times (100.0% → 80.0%) down_read_killable ([kernel])
    │                                                                                                       └── 2 → 4 times (100.0% → 80.0%) rwsem_down_read_slowpath ([kernel])
    │                                                                                                           └── 2 → 4 times (100.0% → 80.0%) schedule_preempt_disabled ([kernel])
    │                                                                                                               └── 2 → 4 times (100.0% → 80.0%) schedule ([kernel])
    │                                                                                                                   └── 2 → 4 times (100.0% → 80.0%) __schedule ([kernel])
    │                                                                                                                       └── 2 → 4 times (100.0% → 80.0%) __bpf_trace_sched_switch ([kernel])
    │                                                                                                                           └── 2 → 4 times (100.0% → 80.0%, self 100.0% globally) bpf_trace_run4 ([kernel])
    └── … 0 → 1 time (0.0% → 20.0%) vma_expand ([kernel])
        └── 0 → 1 time (0.0% → 20.0%) __vma_start_write ([kernel])
            └── 0 → 1 time (0.0% → 20.0%) __vma_start_exclude_readers ([kernel])
                └── 0 → 1 time (0.0% → 20.0%) schedule ([kernel])
                    └── 0 → 1 time (0.0% → 20.0%) __schedule ([kernel])
                        └── 0 → 1 time (0.0% → 20.0%) __bpf_trace_sched_switch ([kernel])
                            └── 0 → 1 time (0.0% → 20.0%) bpf_trace_run4 ([kernel])
```

## Hottest functions

### Self sleeps

#### Regressions

Functions with the largest increase in uninterruptible sleeps entered within the function body, excluding callees. Categories account for at least 1.0% of self sleeps on the base or the current side.

##### Kernel

|  Change | Delta |      % | Sleeps | Function                    | Location    |
| ------: | ----: | -----: | -----: | --------------------------- | ----------- |
| +150.0% |    +3 | 100.0% |  2 → 5 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's self sleeps. Inlining can make caller attribution imprecise.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                                | Location    |
| ------: | ----: | -----: | -----: | ------------------------------------- | ----------- |
| +150.0% |    +3 | 100.0% |  2 → 5 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

### Total sleeps

#### Regressions

Functions with the largest increase in uninterruptible sleeps entered within the function and its callees. Categories account for at least 1.0% of self sleeps on the base or the current side.

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

#### Callers

Callers with the largest change in contribution to each function's total sleeps. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                                | Location    |
| ------: | ----: | -----: | -----: | ------------------------------------- | ----------- |
| +150.0% |    +3 | 100.0% |  2 → 5 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                  | Location    |
| ------: | ----: | -----: | -----: | ----------------------- | ----------- |
| +150.0% |    +3 | 100.0% |  2 → 5 | `__schedule ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                | Location    |
| ------: | ----: | -----: | -----: | --------------------- | ----------- |
| +150.0% |    +3 | 100.0% |  2 → 5 | `schedule ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|  Change | Delta |              % | Sleeps | Caller                                   | Location    |
| ------: | ----: | -------------: | -----: | ---------------------------------------- | ----------- |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `schedule_preempt_disabled ([kernel])`   | `<unknown>` |
|     new |    +1 |   0.0% → 20.0% |  0 → 1 | `__vma_start_exclude_readers ([kernel])` | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                  | Location    |
| ------: | ----: | -----: | -----: | ----------------------- | ----------- |
| +150.0% |    +3 | 100.0% |  2 → 5 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `do_el0_svc ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller               | Location    |
| ------: | ----: | -----: | -----: | -------------------- | ----------- |
| +150.0% |    +3 | 100.0% |  2 → 5 | `el0_svc ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                            | Location    |
| ------: | ----: | -----: | -----: | --------------------------------- | ----------- |
| +150.0% |    +3 | 100.0% |  2 → 5 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                    | Location    |
| ------: | ----: | -----: | -----: | ------------------------- | ----------- |
| +150.0% |    +3 | 100.0% |  2 → 5 | `el0t_64_sync ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

|  Change | Delta |              % | Sleeps | Caller               | Location    |
| ------: | ----: | -------------: | -----: | -------------------- | ----------- |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `__read (libc.so.6)` | `<unknown>` |
|     new |    +1 |   0.0% → 20.0% |  0 → 1 | `mmap64 (libc.so.6)` | `<unknown>` |

##### `unknown (libc.so.6)` (`<unknown>`)

|  Change | Delta |              % | Sleeps | Caller                | Location    |
| ------: | ----: | -------------: | -----: | --------------------- | ----------- |
| +150.0% |    +3 |         100.0% |  2 → 5 | `unknown (libc.so.6)` | `<unknown>` |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `fread (libc.so.6)`   | `<unknown>` |
|     new |    +1 |   0.0% → 20.0% |  0 → 1 | `malloc (libc.so.6)`  | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|  Change | Delta |      % | Sleeps | Caller                | Location    |
| ------: | ----: | -----: | -----: | --------------------- | ----------- |
| +150.0% |    +3 | 100.0% |  2 → 5 | `unknown (libc.so.6)` | `<unknown>` |

##### `schedule_preempt_disabled ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                                | Location    |
| ------: | ----: | -----: | -----: | ------------------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `rwsem_down_read_slowpath ([kernel])` | `<unknown>` |

##### `rwsem_down_read_slowpath ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                          | Location    |
| ------: | ----: | -----: | -----: | ------------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `down_read_killable ([kernel])` | `<unknown>` |

##### `down_read_killable ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                            | Location    |
| ------: | ----: | -----: | -----: | --------------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `lock_mm_and_find_vma ([kernel])` | `<unknown>` |

##### `lock_mm_and_find_vma ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                     | Location    |
| ------: | ----: | -----: | -----: | -------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `do_page_fault ([kernel])` | `<unknown>` |

##### `do_page_fault ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                            | Location    |
| ------: | ----: | -----: | -----: | --------------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `do_translation_fault ([kernel])` | `<unknown>` |

##### `do_translation_fault ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                    | Location    |
| ------: | ----: | -----: | -----: | ------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `do_mem_abort ([kernel])` | `<unknown>` |

##### `do_mem_abort ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                 | Location    |
| ------: | ----: | -----: | -----: | ---------------------- | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `el1_abort ([kernel])` | `<unknown>` |

##### `el1_abort ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                            | Location    |
| ------: | ----: | -----: | -----: | --------------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `el1h_64_sync_handler ([kernel])` | `<unknown>` |

##### `el1h_64_sync_handler ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                    | Location    |
| ------: | ----: | -----: | -----: | ------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `el1h_64_sync ([kernel])` | `<unknown>` |

##### `el1h_64_sync ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                           | Location    |
| ------: | ----: | -----: | -----: | -------------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `__arch_copy_to_user ([kernel])` | `<unknown>` |

##### `__arch_copy_to_user ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Caller                         | Location    |
| ------: | ----: | -----: | -----: | ------------------------------ | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `copy_page_to_iter ([kernel])` | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total sleeps. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                      | Location    |
| ------: | ----: | -----: | -----: | --------------------------- | ----------- |
| +150.0% |    +3 | 100.0% |  2 → 5 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                                | Location    |
| ------: | ----: | -----: | -----: | ------------------------------------- | ----------- |
| +150.0% |    +3 | 100.0% |  2 → 5 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                  | Location    |
| ------: | ----: | -----: | -----: | ----------------------- | ----------- |
| +150.0% |    +3 | 100.0% |  2 → 5 | `__schedule ([kernel])` | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

|  Change | Delta |              % | Sleeps | Callee                        | Location    |
| ------: | ----: | -------------: | -----: | ----------------------------- | ----------- |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `__arm64_sys_read ([kernel])` | `<unknown>` |
|     new |    +1 |   0.0% → 20.0% |  0 → 1 | `__arm64_sys_mmap ([kernel])` | `<unknown>` |

##### `do_el0_svc ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                                  | Location    |
| ------: | ----: | -----: | -----: | --------------------------------------- | ----------- |
| +150.0% |    +3 | 100.0% |  2 → 5 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                  | Location    |
| ------: | ----: | -----: | -----: | ----------------------- | ----------- |
| +150.0% |    +3 | 100.0% |  2 → 5 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee               | Location    |
| ------: | ----: | -----: | -----: | -------------------- | ----------- |
| +150.0% |    +3 | 100.0% |  2 → 5 | `el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                            | Location    |
| ------: | ----: | -----: | -----: | --------------------------------- | ----------- |
| +150.0% |    +3 | 100.0% |  2 → 5 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `unknown (libc.so.6)` (`<unknown>`)

|  Change | Delta |              % | Sleeps | Callee                | Location    |
| ------: | ----: | -------------: | -----: | --------------------- | ----------- |
| +150.0% |    +3 |         100.0% |  2 → 5 | `POOL_thread`         | `pool.c`    |
| +150.0% |    +3 |         100.0% |  2 → 5 | `unknown (libc.so.6)` | `<unknown>` |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `__read (libc.so.6)`  | `<unknown>` |
|     new |    +1 |   0.0% → 20.0% |  0 → 1 | `mmap64 (libc.so.6)`  | `<unknown>` |

##### `POOL_thread` (`pool.c`)

|  Change | Delta |              % | Sleeps | Callee                        | Location            |
| ------: | ----: | -------------: | -----: | ----------------------------- | ------------------- |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `AIO_ReadPool_executeReadJob` | `fileio_asyncio.c`  |
|     new |    +1 |   0.0% → 20.0% |  0 → 1 | `ZSTDMT_compressionJob`       | `zstdmt_compress.c` |

##### `schedule_preempt_disabled ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                | Location    |
| ------: | ----: | -----: | -----: | --------------------- | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `schedule ([kernel])` | `<unknown>` |

##### `rwsem_down_read_slowpath ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                                 | Location    |
| ------: | ----: | -----: | -----: | -------------------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `schedule_preempt_disabled ([kernel])` | `<unknown>` |

##### `down_read_killable ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                                | Location    |
| ------: | ----: | -----: | -----: | ------------------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `rwsem_down_read_slowpath ([kernel])` | `<unknown>` |

##### `lock_mm_and_find_vma ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                          | Location    |
| ------: | ----: | -----: | -----: | ------------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `down_read_killable ([kernel])` | `<unknown>` |

##### `do_page_fault ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                            | Location    |
| ------: | ----: | -----: | -----: | --------------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `lock_mm_and_find_vma ([kernel])` | `<unknown>` |

##### `do_translation_fault ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                     | Location    |
| ------: | ----: | -----: | -----: | -------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `do_page_fault ([kernel])` | `<unknown>` |

##### `do_mem_abort ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                            | Location    |
| ------: | ----: | -----: | -----: | --------------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `do_translation_fault ([kernel])` | `<unknown>` |

##### `el1_abort ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                    | Location    |
| ------: | ----: | -----: | -----: | ------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `do_mem_abort ([kernel])` | `<unknown>` |

##### `el1h_64_sync_handler ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                 | Location    |
| ------: | ----: | -----: | -----: | ---------------------- | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `el1_abort ([kernel])` | `<unknown>` |

##### `el1h_64_sync ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                            | Location    |
| ------: | ----: | -----: | -----: | --------------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `el1h_64_sync_handler ([kernel])` | `<unknown>` |

##### `__arch_copy_to_user ([kernel])` (`<unknown>`)

|  Change | Delta |      % | Sleeps | Callee                    | Location    |
| ------: | ----: | -----: | -----: | ------------------------- | ----------- |
| +100.0% |    +2 | 100.0% |  2 → 4 | `el1h_64_sync ([kernel])` | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in uninterruptible sleeps entered in their leaf frame.

Common call stack: `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`

|  Change | Delta |              % | Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------: | ----: | -------------: | -----: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +100.0% |    +2 | 100.0% → 80.0% |  2 → 4 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `schedule_preempt_disabled ([kernel])` ← `rwsem_down_read_slowpath ([kernel])` ← `down_read_killable ([kernel])` ← `lock_mm_and_find_vma ([kernel])` ← `do_page_fault ([kernel])` ← `do_translation_fault ([kernel])` ← `do_mem_abort ([kernel])` ← `el1_abort ([kernel])` ← `el1h_64_sync_handler ([kernel])` ← `el1h_64_sync ([kernel])` ← `__arch_copy_to_user ([kernel])` ← `copy_page_to_iter ([kernel])` ← `filemap_read ([kernel])` ← `generic_file_read_iter ([kernel])` ← `ext4_file_read_iter ([kernel])` ← `do_iter_readv_writev ([kernel])` ← `vfs_iter_read ([kernel])` ← `backing_file_read_iter ([kernel])` ← `ovl_read_iter ([kernel])` ← `vfs_read ([kernel])` ← `ksys_read ([kernel])` ← `__arm64_sys_read ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `__read (libc.so.6)` ← `unknown (libc.so.6)` ← `fread (libc.so.6)` ← `AIO_ReadPool_executeReadJob` (`fileio_asyncio.c`) |
|     new |    +1 |   0.0% → 20.0% |  0 → 1 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `__vma_start_exclude_readers ([kernel])` ← `__vma_start_write ([kernel])` ← `vma_expand ([kernel])` ← `vma_merge_new_range ([kernel])` ← `__mmap_region ([kernel])` ← `mmap_region ([kernel])` ← `do_mmap ([kernel])` ← `vm_mmap_pgoff ([kernel])` ← `ksys_mmap_pgoff ([kernel])` ← `__arm64_sys_mmap ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `mmap64 (libc.so.6)` ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` ← `malloc (libc.so.6)` ← `ZSTD_resetCCtx_internal` (`zstd_compress.c`) ← `ZSTD_compressBegin_internal` ← `ZSTD_compressBegin_advanced_internal` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`)                                                                                                                                                                                                                                                                           |

# Interruptible sleep profile diff

Slept 215 → 214 times (-1 time, -0.5%).

| Category | Change | Delta |      % |    Sleeps |
| -------- | -----: | ----: | -----: | --------: |
| Kernel   |  -0.5% |    -1 | 100.0% | 215 → 214 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── 164 → 168 times (76.3% → 78.5%) unknown (libc.so.6)
│   └── … 164 → 168 times (76.3% → 78.5%) el0t_64_sync ([kernel])
│       └── 164 → 168 times (76.3% → 78.5%) el0t_64_sync_handler ([kernel])
│           └── 164 → 168 times (76.3% → 78.5%) el0_svc ([kernel])
│               └── 164 → 168 times (76.3% → 78.5%) do_el0_svc ([kernel])
│                   └── 164 → 168 times (76.3% → 78.5%) invoke_syscall.constprop.0 ([kernel])
│                       └── 164 → 168 times (76.3% → 78.5%) __arm64_sys_futex ([kernel])
│                           └── 164 → 168 times (76.3% → 78.5%) do_futex ([kernel])
│                               └── 164 → 168 times (76.3% → 78.5%) futex_wait ([kernel])
│                                   └── 164 → 168 times (76.3% → 78.5%) __futex_wait ([kernel])
│                                       └── 164 → 168 times (76.3% → 78.5%) futex_do_wait ([kernel])
│                                           └── 164 → 168 times (76.3% → 78.5%) schedule ([kernel])
│                                               └── 164 → 168 times (76.3% → 78.5%) __schedule ([kernel])
│                                                   └── 164 → 168 times (76.3% → 78.5%) __bpf_trace_sched_switch ([kernel])
│                                                       └── 164 → 168 times (76.3% → 78.5%, self 100.0% globally) bpf_trace_run4 ([kernel])
└── 51 → 46 times (23.7% → 21.5%) _start (zstd)
    └── 51 → 46 times (23.7% → 21.5%) __libc_start_main (libc.so.6)
        └── 51 → 46 times (23.7% → 21.5%) unknown (libc.so.6)
            └── … 51 → 46 times (23.7% → 21.5%) el0t_64_sync ([kernel])
                └── 51 → 46 times (23.7% → 21.5%) el0t_64_sync_handler ([kernel])
                    └── 51 → 46 times (23.7% → 21.5%) el0_svc ([kernel])
                        └── 51 → 46 times (23.7% → 21.5%) do_el0_svc ([kernel])
                            └── 51 → 46 times (23.7% → 21.5%) invoke_syscall.constprop.0 ([kernel])
                                └── 51 → 46 times (23.7% → 21.5%) __arm64_sys_futex ([kernel])
                                    └── 51 → 46 times (23.7% → 21.5%) do_futex ([kernel])
                                        └── 51 → 46 times (23.7% → 21.5%) futex_wait ([kernel])
                                            └── 51 → 46 times (23.7% → 21.5%) __futex_wait ([kernel])
                                                └── 51 → 46 times (23.7% → 21.5%) futex_do_wait ([kernel])
                                                    └── 51 → 46 times (23.7% → 21.5%) schedule ([kernel])
                                                        └── 51 → 46 times (23.7% → 21.5%) __schedule ([kernel])
                                                            └── 51 → 46 times (23.7% → 21.5%) __bpf_trace_sched_switch ([kernel])
                                                                └── 51 → 46 times (23.7% → 21.5%) bpf_trace_run4 ([kernel])
```

## Hottest functions

### Self sleeps

#### Improvements

Functions with the largest decrease in interruptible sleeps entered within the function body, excluding callees. Categories account for at least 1.0% of self sleeps on the base or the current side.

##### Kernel

| Change | Delta |      % |    Sleeps | Function                    | Location    |
| -----: | ----: | -----: | --------: | --------------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's self sleeps. Inlining can make caller attribution imprecise.

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                                | Location    |
| -----: | ----: | -----: | --------: | ------------------------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

### Total sleeps

#### Regressions

Functions with the largest increase in interruptible sleeps entered within the function and its callees.

| Change | Delta |             % |    Sleeps | Function                           | Location            |
| -----: | ----: | ------------: | --------: | ---------------------------------- | ------------------- |
|  +2.4% |    +4 | 76.3% → 78.5% | 164 → 168 | `POOL_thread`                      | `pool.c`            |
|    new |    +1 |   0.0% → 0.5% |     0 → 1 | `__pthread_mutex_lock (libc.so.6)` | `<unknown>`         |
|    new |    +1 |   0.0% → 0.5% |     0 → 1 | `ZSTDMT_compressionJob`            | `zstdmt_compress.c` |

#### Improvements

Functions with the largest decrease in interruptible sleeps entered within the function and its callees. Categories account for at least 1.0% of self sleeps on the base or the current side.

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

#### Callers

Callers with the largest change in contribution to each function's total sleeps. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `POOL_thread` (`pool.c`)

| Change | Delta |      % |    Sleeps | Caller                | Location    |
| -----: | ----: | -----: | --------: | --------------------- | ----------- |
|  +2.4% |    +4 | 100.0% | 164 → 168 | `unknown (libc.so.6)` | `<unknown>` |

##### `__pthread_mutex_lock (libc.so.6)` (`<unknown>`)

| Change | Delta |             % | Sleeps | Caller                  | Location            |
| -----: | ----: | ------------: | -----: | ----------------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |  0 → 1 | `ZSTDMT_compressionJob` | `zstdmt_compress.c` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

| Change | Delta |             % | Sleeps | Caller        | Location |
| -----: | ----: | ------------: | -----: | ------------- | -------- |
|    new |    +1 | 0.0% → 100.0% |  0 → 1 | `POOL_thread` | `pool.c` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

| Change | Delta |      % |  Sleeps | Caller                 | Location   |
| -----: | ----: | -----: | ------: | ---------------------- | ---------- |
|  -9.8% |    -5 | 100.0% | 51 → 46 | `FIO_compressFilename` | `fileio.c` |

##### `FIO_compressFilename` (`fileio.c`)

| Change | Delta |      % |  Sleeps | Caller | Location    |
| -----: | ----: | -----: | ------: | ------ | ----------- |
|  -9.8% |    -5 | 100.0% | 51 → 46 | `main` | `zstdcli.c` |

##### `main` (`zstdcli.c`)

| Change | Delta |      % |  Sleeps | Caller                | Location    |
| -----: | ----: | -----: | ------: | --------------------- | ----------- |
|  -9.8% |    -5 | 100.0% | 51 → 46 | `unknown (libc.so.6)` | `<unknown>` |

##### `__libc_start_main (libc.so.6)` (`<unknown>`)

| Change | Delta |      % |  Sleeps | Caller          | Location    |
| -----: | ----: | -----: | ------: | --------------- | ----------- |
|  -9.8% |    -5 | 100.0% | 51 → 46 | `_start (zstd)` | `<unknown>` |

##### `ZSTDMT_compressStream_generic` (`zstdmt_compress.c`)

| Change | Delta |      % |  Sleeps | Caller                 | Location          |
| -----: | ----: | -----: | ------: | ---------------------- | ----------------- |
| -11.1% |    -5 | 100.0% | 45 → 40 | `ZSTD_compressStream2` | `zstd_compress.c` |

##### `ZSTD_compressStream2` (`zstd_compress.c`)

| Change | Delta |      % |  Sleeps | Caller                         | Location   |
| -----: | ----: | -----: | ------: | ------------------------------ | ---------- |
| -11.1% |    -5 | 100.0% | 45 → 40 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `pthread_cond_wait (libc.so.6)` (`<unknown>`)

| Change | Delta |             % |    Sleeps | Caller                          | Location            |
| -----: | ----: | ------------: | --------: | ------------------------------- | ------------------- |
| -11.1% |    -5 | 20.9% → 18.8% |   45 → 40 | `ZSTDMT_compressStream_generic` | `zstdmt_compress.c` |
|  +1.8% |    +3 | 76.3% → 78.4% | 164 → 167 | `POOL_thread`                   | `pool.c`            |

##### `bpf_trace_run4 ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                                | Location    |
| -----: | ----: | -----: | --------: | ------------------------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                  | Location    |
| -----: | ----: | -----: | --------: | ----------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `__schedule ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                | Location    |
| -----: | ----: | -----: | --------: | --------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `schedule ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                     | Location    |
| -----: | ----: | -----: | --------: | -------------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `futex_do_wait ([kernel])` | `<unknown>` |

##### `futex_do_wait ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                    | Location    |
| -----: | ----: | -----: | --------: | ------------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `__futex_wait ([kernel])` | `<unknown>` |

##### `__futex_wait ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                  | Location    |
| -----: | ----: | -----: | --------: | ----------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `futex_wait ([kernel])` | `<unknown>` |

##### `futex_wait ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                | Location    |
| -----: | ----: | -----: | --------: | --------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `do_futex ([kernel])` | `<unknown>` |

##### `do_futex ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                         | Location    |
| -----: | ----: | -----: | --------: | ------------------------------ | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `__arm64_sys_futex ([kernel])` | `<unknown>` |

##### `__arm64_sys_futex ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                                  | Location    |
| -----: | ----: | -----: | --------: | --------------------------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                  | Location    |
| -----: | ----: | -----: | --------: | ----------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `do_el0_svc ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller               | Location    |
| -----: | ----: | -----: | --------: | -------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `el0_svc ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                            | Location    |
| -----: | ----: | -----: | --------: | --------------------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                    | Location    |
| -----: | ----: | -----: | --------: | ------------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `el0t_64_sync ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Caller                | Location    |
| -----: | ----: | -----: | --------: | --------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `unknown (libc.so.6)` | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total sleeps. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `POOL_thread` (`pool.c`)

| Change | Delta |              % |    Sleeps | Callee                          | Location            |
| -----: | ----: | -------------: | --------: | ------------------------------- | ------------------- |
|  +1.8% |    +3 | 100.0% → 99.4% | 164 → 167 | `pthread_cond_wait (libc.so.6)` | `<unknown>`         |
|    new |    +1 |    0.0% → 0.6% |     0 → 1 | `ZSTDMT_compressionJob`         | `zstdmt_compress.c` |

##### `__pthread_mutex_lock (libc.so.6)` (`<unknown>`)

| Change | Delta |             % | Sleeps | Callee                | Location    |
| -----: | ----: | ------------: | -----: | --------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |  0 → 1 | `unknown (libc.so.6)` | `<unknown>` |

##### `ZSTDMT_compressionJob` (`zstdmt_compress.c`)

| Change | Delta |             % | Sleeps | Callee                             | Location    |
| -----: | ----: | ------------: | -----: | ---------------------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |  0 → 1 | `__pthread_mutex_lock (libc.so.6)` | `<unknown>` |

##### `FIO_compressFilename_srcFile` (`fileio.c`)

| Change | Delta |             % |  Sleeps | Callee                 | Location          |
| -----: | ----: | ------------: | ------: | ---------------------- | ----------------- |
| -11.1% |    -5 | 88.2% → 87.0% | 45 → 40 | `ZSTD_compressStream2` | `zstd_compress.c` |

##### `FIO_compressFilename` (`fileio.c`)

| Change | Delta |      % |  Sleeps | Callee                         | Location   |
| -----: | ----: | -----: | ------: | ------------------------------ | ---------- |
|  -9.8% |    -5 | 100.0% | 51 → 46 | `FIO_compressFilename_srcFile` | `fileio.c` |

##### `main` (`zstdcli.c`)

| Change | Delta |      % |  Sleeps | Callee                 | Location   |
| -----: | ----: | -----: | ------: | ---------------------- | ---------- |
|  -9.8% |    -5 | 100.0% | 51 → 46 | `FIO_compressFilename` | `fileio.c` |

##### `__libc_start_main (libc.so.6)` (`<unknown>`)

| Change | Delta |      % |  Sleeps | Callee                | Location    |
| -----: | ----: | -----: | ------: | --------------------- | ----------- |
|  -9.8% |    -5 | 100.0% | 51 → 46 | `unknown (libc.so.6)` | `<unknown>` |

##### `_start (zstd)` (`<unknown>`)

| Change | Delta |      % |  Sleeps | Callee                          | Location    |
| -----: | ----: | -----: | ------: | ------------------------------- | ----------- |
|  -9.8% |    -5 | 100.0% | 51 → 46 | `__libc_start_main (libc.so.6)` | `<unknown>` |

##### `ZSTDMT_compressStream_generic` (`zstdmt_compress.c`)

| Change | Delta |      % |  Sleeps | Callee                          | Location    |
| -----: | ----: | -----: | ------: | ------------------------------- | ----------- |
| -11.1% |    -5 | 100.0% | 45 → 40 | `pthread_cond_wait (libc.so.6)` | `<unknown>` |

##### `ZSTD_compressStream2` (`zstd_compress.c`)

| Change | Delta |      % |  Sleeps | Callee                          | Location            |
| -----: | ----: | -----: | ------: | ------------------------------- | ------------------- |
| -11.1% |    -5 | 100.0% | 45 → 40 | `ZSTDMT_compressStream_generic` | `zstdmt_compress.c` |

##### `pthread_cond_wait (libc.so.6)` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                | Location    |
| -----: | ----: | -----: | --------: | --------------------- | ----------- |
|  -0.9% |    -2 | 100.0% | 215 → 213 | `unknown (libc.so.6)` | `<unknown>` |

##### `__bpf_trace_sched_switch ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                      | Location    |
| -----: | ----: | -----: | --------: | --------------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `bpf_trace_run4 ([kernel])` | `<unknown>` |

##### `__schedule ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                                | Location    |
| -----: | ----: | -----: | --------: | ------------------------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `__bpf_trace_sched_switch ([kernel])` | `<unknown>` |

##### `schedule ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                  | Location    |
| -----: | ----: | -----: | --------: | ----------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `__schedule ([kernel])` | `<unknown>` |

##### `futex_do_wait ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                | Location    |
| -----: | ----: | -----: | --------: | --------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `schedule ([kernel])` | `<unknown>` |

##### `__futex_wait ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                     | Location    |
| -----: | ----: | -----: | --------: | -------------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `futex_do_wait ([kernel])` | `<unknown>` |

##### `futex_wait ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                    | Location    |
| -----: | ----: | -----: | --------: | ------------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `__futex_wait ([kernel])` | `<unknown>` |

##### `do_futex ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                  | Location    |
| -----: | ----: | -----: | --------: | ----------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `futex_wait ([kernel])` | `<unknown>` |

##### `__arm64_sys_futex ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                | Location    |
| -----: | ----: | -----: | --------: | --------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `do_futex ([kernel])` | `<unknown>` |

##### `invoke_syscall.constprop.0 ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                         | Location    |
| -----: | ----: | -----: | --------: | ------------------------------ | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `__arm64_sys_futex ([kernel])` | `<unknown>` |

##### `do_el0_svc ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                                  | Location    |
| -----: | ----: | -----: | --------: | --------------------------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `invoke_syscall.constprop.0 ([kernel])` | `<unknown>` |

##### `el0_svc ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                  | Location    |
| -----: | ----: | -----: | --------: | ----------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `do_el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync_handler ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee               | Location    |
| -----: | ----: | -----: | --------: | -------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `el0_svc ([kernel])` | `<unknown>` |

##### `el0t_64_sync ([kernel])` (`<unknown>`)

| Change | Delta |      % |    Sleeps | Callee                            | Location    |
| -----: | ----: | -----: | --------: | --------------------------------- | ----------- |
|  -0.5% |    -1 | 100.0% | 215 → 214 | `el0t_64_sync_handler ([kernel])` | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in interruptible sleeps entered in their leaf frame.

Common call stack: `POOL_thread` (`pool.c`) ← `unknown (libc.so.6)` ← `unknown (libc.so.6)`

| Change | Delta |           % | Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -----: | ----: | ----------: | -----: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new |    +3 | 0.0% → 1.4% |  0 → 3 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)`                            |
|    new |    +1 | 0.0% → 0.5% |  0 → 1 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `__pthread_mutex_lock (libc.so.6)` ← `ZSTDMT_compressionJob` (`zstdmt_compress.c`) |

### Improvements

Call stacks with the largest decrease in interruptible sleeps entered in their leaf frame.

| Change | Delta |             % |  Sleeps | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -11.1% |    -5 | 20.9% → 18.7% | 45 → 40 | `bpf_trace_run4 ([kernel])` ← `__bpf_trace_sched_switch ([kernel])` ← `__schedule ([kernel])` ← `schedule ([kernel])` ← `futex_do_wait ([kernel])` ← `__futex_wait ([kernel])` ← `futex_wait ([kernel])` ← `do_futex ([kernel])` ← `__arm64_sys_futex ([kernel])` ← `invoke_syscall.constprop.0 ([kernel])` ← `do_el0_svc ([kernel])` ← `el0_svc ([kernel])` ← `el0t_64_sync_handler ([kernel])` ← `el0t_64_sync ([kernel])` ← `unknown (libc.so.6)` ← `pthread_cond_wait (libc.so.6)` ← `ZSTDMT_compressStream_generic` (`zstdmt_compress.c`) ← `ZSTD_compressStream2` (`zstd_compress.c`) ← `FIO_compressFilename_srcFile` (`fileio.c`) ← `FIO_compressFilename` ← `main` (`zstdcli.c`) ← `unknown (libc.so.6)` ← `__libc_start_main (libc.so.6)` ← `_start (zstd)` |

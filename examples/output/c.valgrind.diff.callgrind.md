# Instruction profile diff

Recorded 39,557,650 → 40,483,273 instructions (+925,623 instructions, +2.3%).

| Category | Change |    Delta |     % |            Instructions |
| -------- | -----: | -------: | ----: | ----------------------: |
| Ours     |  +2.3% | +910,282 | 98.8% | 39,096,811 → 40,007,093 |
| Native   |  +3.3% |  +15,341 |  1.2% |       460,839 → 476,180 |

Paths starting with `./` or `../` are relative to `/src/zstd/`.

## Hottest functions

### Self instructions

#### Regressions

Functions with the largest increase in instructions recorded within the function body, excluding callees. Categories account for at least 1.0% of self instructions on the base or the current side.

| Change |      Delta |             % |            Instructions | Function                        | Location                                           |
| -----: | ---------: | ------------: | ----------------------: | ------------------------------- | -------------------------------------------------- |
| +12.3% | +1,022,933 | 21.0% → 23.1% |   8,326,805 → 9,349,738 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_compress_internal.h`          |
|    new |   +613,032 |   0.0% → 1.5% |             0 → 613,032 | `ZSTD_recordFingerprint_43`     | `./lib/compress/zstd_preSplit.c`                   |
| +20.4% |    +15,587 |          0.2% |         76,590 → 92,177 | `__GI_memset`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  +1.1% |     +1,039 |          0.2% |         98,005 → 99,044 | `HUF_buildCTable_wksp`          | `./lib/compress/huf_compress.c`                    |
|    new |       +536 |  0.0% → <0.1% |                 0 → 536 | `ZSTD_splitBlock`               | `./lib/compress/zstd_preSplit.c`                   |
|    ~0% |       +396 | 30.6% → 29.9% | 12,117,184 → 12,117,580 | `ZSTD_encodeSequences`          | `./lib/common/bitstream.h`                         |
|  +0.1% |       +141 |          0.6% |       224,938 → 225,079 | `FSE_buildCTable_wksp`          | `./lib/compress/fse_compress.c`                    |
|  +0.6% |       +141 |          0.1% |         24,175 → 24,316 | `FSE_writeNCount_generic`       | `./lib/compress/fse_compress.c`                    |
|    new |        +76 |  0.0% → <0.1% |                  0 → 76 | `ZSTD_checkCParams`             | `./lib/compress/zstd_compress.c`                   |
|  +0.4% |        +70 |         <0.1% |         16,343 → 16,413 | `FSE_normalizeCount`            | `./lib/compress/fse_compress.c`                    |
|    ~0% |        +48 |   3.1% → 3.0% |   1,224,426 → 1,224,474 | `ZSTD_seqToCodes`               | `./lib/compress/zstd_compress.c`                   |
|  +0.3% |        +42 |         <0.1% |         15,934 → 15,976 | `_dl_relocate_object`           | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|    new |        +35 |  0.0% → <0.1% |                  0 → 35 | `0x0000000000008840`            | `./programs/zstd`                                  |
|  +6.0% |        +22 |         <0.1% |               366 → 388 | `ZSTD_cParam_getBounds`         | `./lib/compress/zstd_compress.c`                   |
|  +1.3% |        +21 |         <0.1% |           1,557 → 1,578 | `ZSTDMT_compressStream_generic` | `./lib/compress/zstdmt_compress.c`                 |
| +13.3% |        +17 |         <0.1% |               128 → 145 | `ZSTDMT_compressionJob`         | `./lib/compress/zstdmt_compress.c`                 |
|  +6.1% |        +13 |         <0.1% |               214 → 227 | `strcspn`                       | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|    new |        +10 |  0.0% → <0.1% |                  0 → 10 | `0x0000000000008800`            | `./programs/zstd`                                  |
|  +0.6% |         +8 |         <0.1% |           1,257 → 1,265 | `ZSTD_buildSeqStore`            | `./lib/compress/zstd_compress.c`                   |
|  +1.7% |         +8 |         <0.1% |               464 → 472 | `ZSTD_compressBlock_internal`   | `./lib/compress/zstd_compress.c`                   |

##### Ours

| Change |      Delta |             % |            Instructions | Function                        | Location                                  |
| -----: | ---------: | ------------: | ----------------------: | ------------------------------- | ----------------------------------------- |
| +12.3% | +1,022,933 | 21.0% → 23.1% |   8,326,805 → 9,349,738 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_compress_internal.h` |
|    new |   +613,032 |   0.0% → 1.5% |             0 → 613,032 | `ZSTD_recordFingerprint_43`     | `./lib/compress/zstd_preSplit.c`          |
|  +1.1% |     +1,039 |          0.2% |         98,005 → 99,044 | `HUF_buildCTable_wksp`          | `./lib/compress/huf_compress.c`           |
|    new |       +536 |  0.0% → <0.1% |                 0 → 536 | `ZSTD_splitBlock`               | `./lib/compress/zstd_preSplit.c`          |
|    ~0% |       +396 | 30.6% → 29.9% | 12,117,184 → 12,117,580 | `ZSTD_encodeSequences`          | `./lib/common/bitstream.h`                |
|  +0.1% |       +141 |          0.6% |       224,938 → 225,079 | `FSE_buildCTable_wksp`          | `./lib/compress/fse_compress.c`           |
|  +0.6% |       +141 |          0.1% |         24,175 → 24,316 | `FSE_writeNCount_generic`       | `./lib/compress/fse_compress.c`           |
|    new |        +76 |  0.0% → <0.1% |                  0 → 76 | `ZSTD_checkCParams`             | `./lib/compress/zstd_compress.c`          |
|  +0.4% |        +70 |         <0.1% |         16,343 → 16,413 | `FSE_normalizeCount`            | `./lib/compress/fse_compress.c`           |
|    ~0% |        +48 |   3.1% → 3.0% |   1,224,426 → 1,224,474 | `ZSTD_seqToCodes`               | `./lib/compress/zstd_compress.c`          |
|    new |        +35 |  0.0% → <0.1% |                  0 → 35 | `0x0000000000008840`            | `./programs/zstd`                         |
|  +6.0% |        +22 |         <0.1% |               366 → 388 | `ZSTD_cParam_getBounds`         | `./lib/compress/zstd_compress.c`          |
|  +1.3% |        +21 |         <0.1% |           1,557 → 1,578 | `ZSTDMT_compressStream_generic` | `./lib/compress/zstdmt_compress.c`        |
| +13.3% |        +17 |         <0.1% |               128 → 145 | `ZSTDMT_compressionJob`         | `./lib/compress/zstdmt_compress.c`        |
|    new |        +10 |  0.0% → <0.1% |                  0 → 10 | `0x0000000000008800`            | `./programs/zstd`                         |
|  +0.6% |         +8 |         <0.1% |           1,257 → 1,265 | `ZSTD_buildSeqStore`            | `./lib/compress/zstd_compress.c`          |
|  +1.7% |         +8 |         <0.1% |               464 → 472 | `ZSTD_compressBlock_internal`   | `./lib/compress/zstd_compress.c`          |
|    new |         +7 |  0.0% → <0.1% |                   0 → 7 | `0x00000000000087d0`            | `./programs/zstd`                         |
|  +1.3% |         +5 |         <0.1% |               389 → 394 | `main`                          | `./programs/zstdcli.c`                    |
|    new |         +5 |  0.0% → <0.1% |                   0 → 5 | `0x0000000000008874`            | `./programs/zstd`                         |

##### Native

| Change |   Delta |            % |    Instructions | Function              | Location                                           |
| -----: | ------: | -----------: | --------------: | --------------------- | -------------------------------------------------- |
| +20.4% | +15,587 |         0.2% | 76,590 → 92,177 | `__GI_memset`         | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  +0.3% |     +42 |        <0.1% | 15,934 → 15,976 | `_dl_relocate_object` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +6.1% |     +13 |        <0.1% |       214 → 227 | `strcspn`             | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|    new |      +6 | 0.0% → <0.1% |           0 → 6 | `0x000000000010c580`  | `<unknown>`                                        |
|  +0.2% |      +5 |        <0.1% |   2,391 → 2,396 | `calloc`              | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |

#### Improvements

Functions with the largest decrease in instructions recorded within the function body, excluding callees. Categories account for at least 1.0% of self instructions on the base or the current side.

|  Change |    Delta |             % |            Instructions | Function                                          | Location                                  |
| ------: | -------: | ------------: | ----------------------: | ------------------------------------------------- | ----------------------------------------- |
|   -6.2% | -721,751 | 29.6% → 27.2% | 11,716,441 → 10,994,690 | `ZSTD_compressBlock_doubleFast`                   | `./lib/compress/zstd_double_fast.c`       |
|   -0.7% |   -3,124 |          1.1% |       428,664 → 425,540 | `HUF_compress1X_usingCTable_internal.constprop.0` | `./lib/compress/huf_compress.c`           |
|   -0.1% |   -1,982 |   5.0% → 4.8% |   1,959,721 → 1,957,739 | `HIST_count_parallel_wksp`                        | `./lib/compress/hist.c`                   |
|   -8.4% |     -820 |         <0.1% |           9,792 → 8,972 | `HUF_simpleQuickSort`                             | `./lib/compress/huf_compress.c`           |
|     ~0% |     -279 |   3.5% → 3.4% |   1,370,282 → 1,370,003 | `ZSTD_seqToCodes`                                 | `./lib/compress/zstd_compress_internal.h` |
|  -23.8% |     -146 |         <0.1% |               613 → 467 | `ZSTD_compress_frameChunk`                        | `./lib/compress/zstd_compress.c`          |
|  -33.0% |     -125 |         <0.1% |               379 → 254 | `strcmp`                                          | `/usr/lib/aarch64-linux-gnu/libc.so.6`    |
|  -50.0% |      -86 |         <0.1% |                172 → 86 | `getenv`                                          | `/usr/lib/aarch64-linux-gnu/libc.so.6`    |
|  -62.2% |      -79 |         <0.1% |                127 → 48 | `ZSTD_compressBegin_advanced_internal`            | `./lib/compress/zstd_compress.c`          |
|     ~0% |      -64 |          0.5% |       183,023 → 182,959 | `__GI_memcpy`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`    |
| removed |      -35 |  <0.1% → 0.0% |                  35 → 0 | `0x0000000000008740`                              | `./programs/zstd`                         |
|  -50.0% |      -20 |         <0.1% |                 40 → 20 | `__GI_strlen`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`    |
|  -10.1% |      -13 |         <0.1% |               129 → 116 | `UTIL_allocateFileNamesTable`                     | `./programs/util.c`                       |
|   -0.1% |      -11 |         <0.1% |           8,444 → 8,433 | `__pthread_mutex_unlock_usercnt`                  | `/usr/lib/aarch64-linux-gnu/libc.so.6`    |
| removed |      -10 |  <0.1% → 0.0% |                  10 → 0 | `0x0000000000008700`                              | `./programs/zstd`                         |
|   -2.6% |       -9 |         <0.1% |               351 → 342 | `ZSTD_compressBlock_doubleFast`                   | `./lib/common/mem.h`                      |
|   -1.8% |       -9 |         <0.1% |               500 → 491 | `exeNameMatch`                                    | `./programs/zstdcli.c`                    |
| removed |       -7 |  <0.1% → 0.0% |                   7 → 0 | `0x00000000000086d0`                              | `./programs/zstd`                         |
| removed |       -6 |  <0.1% → 0.0% |                   6 → 0 | `0x000000000010c4e8`                              | `<unknown>`                               |
| removed |       -5 |  <0.1% → 0.0% |                   5 → 0 | `0x0000000000008774`                              | `./programs/zstd`                         |

##### Ours

|  Change |    Delta |             % |            Instructions | Function                                          | Location                                  |
| ------: | -------: | ------------: | ----------------------: | ------------------------------------------------- | ----------------------------------------- |
|   -6.2% | -721,751 | 29.6% → 27.2% | 11,716,441 → 10,994,690 | `ZSTD_compressBlock_doubleFast`                   | `./lib/compress/zstd_double_fast.c`       |
|   -0.7% |   -3,124 |          1.1% |       428,664 → 425,540 | `HUF_compress1X_usingCTable_internal.constprop.0` | `./lib/compress/huf_compress.c`           |
|   -0.1% |   -1,982 |   5.0% → 4.8% |   1,959,721 → 1,957,739 | `HIST_count_parallel_wksp`                        | `./lib/compress/hist.c`                   |
|   -8.4% |     -820 |         <0.1% |           9,792 → 8,972 | `HUF_simpleQuickSort`                             | `./lib/compress/huf_compress.c`           |
|     ~0% |     -279 |   3.5% → 3.4% |   1,370,282 → 1,370,003 | `ZSTD_seqToCodes`                                 | `./lib/compress/zstd_compress_internal.h` |
|  -23.8% |     -146 |         <0.1% |               613 → 467 | `ZSTD_compress_frameChunk`                        | `./lib/compress/zstd_compress.c`          |
|  -62.2% |      -79 |         <0.1% |                127 → 48 | `ZSTD_compressBegin_advanced_internal`            | `./lib/compress/zstd_compress.c`          |
| removed |      -35 |  <0.1% → 0.0% |                  35 → 0 | `0x0000000000008740`                              | `./programs/zstd`                         |
|  -10.1% |      -13 |         <0.1% |               129 → 116 | `UTIL_allocateFileNamesTable`                     | `./programs/util.c`                       |
| removed |      -10 |  <0.1% → 0.0% |                  10 → 0 | `0x0000000000008700`                              | `./programs/zstd`                         |
|   -2.6% |       -9 |         <0.1% |               351 → 342 | `ZSTD_compressBlock_doubleFast`                   | `./lib/common/mem.h`                      |
|   -1.8% |       -9 |         <0.1% |               500 → 491 | `exeNameMatch`                                    | `./programs/zstdcli.c`                    |
| removed |       -7 |  <0.1% → 0.0% |                   7 → 0 | `0x00000000000086d0`                              | `./programs/zstd`                         |
| removed |       -5 |  <0.1% → 0.0% |                   5 → 0 | `0x0000000000008774`                              | `./programs/zstd`                         |
|   -2.4% |       -2 |         <0.1% |                 83 → 81 | `ZSTDMT_createCCtx_advanced`                      | `./lib/compress/zstdmt_compress.c`        |
|   -4.4% |       -2 |         <0.1% |                 45 → 43 | `ZSTD_compressBegin_internal`                     | `./lib/compress/zstd_compress.c`          |
|   -0.6% |       -1 |         <0.1% |               167 → 166 | `FIO_determineHasStdinInput`                      | `./programs/fileio.c`                     |
|   -1.4% |       -1 |         <0.1% |                 73 → 72 | `ZSTD_createCCtx`                                 | `./lib/compress/zstd_compress.c`          |
|   -1.8% |       -1 |         <0.1% |                 56 → 55 | `ZSTDMT_createJobsTable`                          | `./lib/compress/zstdmt_compress.c`        |
|   -0.6% |       -1 |         <0.1% |               176 → 175 | `ZSTD_CCtx_init_compressStream2`                  | `./lib/compress/zstd_compress.c`          |

##### Native

|  Change | Delta |            % |      Instructions | Function                         | Location                               |
| ------: | ----: | -----------: | ----------------: | -------------------------------- | -------------------------------------- |
|  -33.0% |  -125 |        <0.1% |         379 → 254 | `strcmp`                         | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -50.0% |   -86 |        <0.1% |          172 → 86 | `getenv`                         | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     ~0% |   -64 |         0.5% | 183,023 → 182,959 | `__GI_memcpy`                    | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -50.0% |   -20 |        <0.1% |           40 → 20 | `__GI_strlen`                    | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|   -0.1% |   -11 |        <0.1% |     8,444 → 8,433 | `__pthread_mutex_unlock_usercnt` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |    -6 | <0.1% → 0.0% |             6 → 0 | `0x000000000010c4e8`             | `<unknown>`                            |

#### Lines

Lines with the largest change in contribution to each function's self instructions.

##### `ZSTD_compressBlock_doubleFast` (`./lib/compress/zstd_compress_internal.h`)

| Change |    Delta |           % |      Instructions | Location                                            |
| -----: | -------: | ----------: | ----------------: | --------------------------------------------------- |
|    new | +619,974 | 0.0% → 6.6% |       0 → 619,974 | `./lib/compress/zstd_compress_internal.h:642`       |
| -14.7% |  -69,125 | 5.7% → 4.3% | 471,471 → 402,346 | `./lib/compress/zstd_compress_internal.h:756 → 861` |
| -35.3% |  -66,770 | 2.3% → 1.3% | 188,952 → 122,182 | `./lib/compress/zstd_compress_internal.h:752 → 857` |
|    new |  +27,489 | 0.0% → 0.3% |        0 → 27,489 | `./lib/compress/zstd_compress_internal.h:758`       |
|    new |  +27,431 | 0.0% → 0.3% |        0 → 27,431 | `./lib/compress/zstd_compress_internal.h:808`       |

##### `ZSTD_recordFingerprint_43` (`./lib/compress/zstd_preSplit.c`)

| Change |    Delta |            % | Instructions | Location                             |
| -----: | -------: | -----------: | -----------: | ------------------------------------ |
|    new | +152,208 | 0.0% → 24.8% |  0 → 152,208 | `./lib/compress/zstd_preSplit.c:72`  |
|    new | +107,520 | 0.0% → 17.5% |  0 → 107,520 | `./lib/compress/zstd_preSplit.c:102` |
|    new | +107,520 | 0.0% → 17.5% |  0 → 107,520 | `./lib/compress/zstd_preSplit.c:128` |
|    new |  +80,955 | 0.0% → 13.2% |   0 → 80,955 | `./lib/compress/zstd_preSplit.c:100` |
|    new |  +80,640 | 0.0% → 13.2% |   0 → 80,640 | `./lib/compress/zstd_preSplit.c:127` |

##### `HUF_buildCTable_wksp` (`./lib/compress/huf_compress.c`)

|  Change | Delta |           % | Instructions | Location                            |
| ------: | ----: | ----------: | -----------: | ----------------------------------- |
| +101.7% |  +243 | 0.2% → 0.5% |    239 → 482 | `./lib/compress/huf_compress.c:691` |
|  +98.5% |  +194 | 0.2% → 0.4% |    197 → 391 | `./lib/compress/huf_compress.c:696` |
|  +67.9% |   +74 | 0.1% → 0.2% |    109 → 183 | `./lib/compress/huf_compress.c:655` |
|  +58.5% |   +72 | 0.1% → 0.2% |    123 → 195 | `./lib/compress/huf_compress.c:656` |
|  +50.0% |   +50 | 0.1% → 0.2% |    100 → 150 | `./lib/compress/huf_compress.c:660` |

##### `ZSTD_splitBlock` (`./lib/compress/zstd_preSplit.c`)

| Change | Delta |            % | Instructions | Location                             |
| -----: | ----: | -----------: | -----------: | ------------------------------------ |
|    new |   +91 | 0.0% → 17.0% |       0 → 91 | `./lib/compress/zstd_preSplit.c:53`  |
|    new |   +49 |  0.0% → 9.1% |       0 → 49 | `./lib/compress/zstd_preSplit.c:231` |
|    new |   +42 |  0.0% → 7.8% |       0 → 42 | `./lib/compress/zstd_preSplit.c:162` |
|    new |    +7 |  0.0% → 1.3% |        0 → 7 | `./lib/compress/zstd_preSplit.c:175` |
|    new |    +7 |  0.0% → 1.3% |        0 → 7 | `./lib/compress/zstd_preSplit.c:234` |

##### `ZSTD_encodeSequences` (`./lib/common/bitstream.h`)

| Change | Delta |     % |          Instructions | Location                             |
| -----: | ----: | ----: | --------------------: | ------------------------------------ |
|    ~0% |   +72 | 18.2% | 2,203,122 → 2,203,194 | `./lib/common/bitstream.h:172 → 173` |
|    ~0% |   +44 | 11.1% | 1,346,327 → 1,346,371 | `./lib/common/bitstream.h:185 → 186` |
|    ~0% |   +24 |  6.1% |     734,358 → 734,382 | `./lib/common/bitstream.h:186 → 187` |
|    ~0% |   +12 |  3.0% |     367,243 → 367,255 | `./lib/common/bitstream.h:229 → 230` |
|    ~0% |    +4 |  1.0% |     122,389 → 122,393 | `./lib/common/bitstream.h:187 → 188` |

##### `FSE_buildCTable_wksp` (`./lib/compress/fse_compress.c`)

| Change | Delta |     % |    Instructions | Location                            |
| -----: | ----: | ----: | --------------: | ----------------------------------- |
|  +0.1% |   +23 | 14.3% | 32,108 → 32,131 | `./lib/compress/fse_compress.c:160` |
|  +0.7% |   +20 |  1.4% |   3,047 → 3,067 | `./lib/compress/fse_compress.c:157` |
|  +0.5% |   +16 |  1.4% |   3,052 → 3,068 | `./lib/compress/fse_compress.c:103` |
|  +0.6% |   +16 |  1.2% |   2,732 → 2,748 | `./lib/compress/fse_compress.c:104` |
|  +0.3% |   +14 |  1.8% |   4,008 → 4,022 | `./lib/compress/fse_compress.c:179` |

##### `FSE_writeNCount_generic` (`./lib/compress/fse_compress.c`)

| Change | Delta |           % |  Instructions | Location                            |
| -----: | ----: | ----------: | ------------: | ----------------------------------- |
|  +7.2% |   +24 | 1.4% → 1.5% |     334 → 358 | `./lib/compress/fse_compress.c:263` |
|  +6.5% |   +15 |        1.0% |     230 → 245 | `./lib/compress/fse_compress.c:275` |
|  +0.7% |   +10 | 5.5% → 5.6% | 1,340 → 1,350 | `./lib/compress/fse_compress.c:261` |
|  +7.5% |    +9 |        0.5% |     120 → 129 | `./lib/compress/fse_compress.c:265` |
|  +7.5% |    +9 |        0.5% |     120 → 129 | `./lib/compress/fse_compress.c:280` |

##### `ZSTD_checkCParams` (`./lib/compress/zstd_compress.c`)

| Change | Delta |           % | Instructions | Location                              |
| -----: | ----: | ----------: | -----------: | ------------------------------------- |
|    new |    +3 | 0.0% → 3.9% |        0 → 3 | `./lib/compress/zstd_compress.c:1389` |
|    new |    +2 | 0.0% → 2.6% |        0 → 2 | `./lib/compress/zstd_compress.c:1398` |
|    new |    +1 | 0.0% → 1.3% |        0 → 1 | `./lib/compress/zstd_compress.c:1390` |
|    new |    +1 | 0.0% → 1.3% |        0 → 1 | `./lib/compress/zstd_compress.c:1391` |
|    new |    +1 | 0.0% → 1.3% |        0 → 1 | `./lib/compress/zstd_compress.c:1392` |

##### `FSE_normalizeCount` (`./lib/compress/fse_compress.c`)

| Change | Delta |           % |  Instructions | Location                            |
| -----: | ----: | ----------: | ------------: | ----------------------------------- |
|  +0.6% |   +24 |       25.4% | 4,146 → 4,170 | `./lib/compress/fse_compress.c:487` |
|  +0.6% |   +12 |       12.9% | 2,105 → 2,117 | `./lib/compress/fse_compress.c:486` |
|  +0.6% |   +12 |       12.7% | 2,073 → 2,085 | `./lib/compress/fse_compress.c:488` |
|  +0.9% |   +10 | 6.5% → 6.6% | 1,069 → 1,079 | `./lib/compress/fse_compress.c:496` |
|  -1.2% |    -6 |        3.1% |     514 → 508 | `./lib/compress/fse_compress.c:491` |

##### `ZSTD_seqToCodes` (`./lib/compress/zstd_compress.c`)

| Change | Delta |     % |      Instructions | Location                                     |
| -----: | ----: | ----: | ----------------: | -------------------------------------------- |
|    ~0% |   +12 | 30.0% | 367,511 → 367,523 | `./lib/compress/zstd_compress.c:2691 → 2703` |
|    ~0% |    +8 | 20.0% | 244,810 → 244,818 | `./lib/compress/zstd_compress.c:2692 → 2704` |
|    ~0% |    +8 | 20.0% | 244,808 → 244,816 | `./lib/compress/zstd_compress.c:2695 → 2707` |

##### `ZSTD_cParam_getBounds` (`./lib/compress/zstd_compress.c`)

| Change | Delta |             % | Instructions | Location                                   |
| -----: | ----: | ------------: | -----------: | ------------------------------------------ |
|  +8.8% |   +22 | 68.0% → 69.8% |    249 → 271 | `./lib/compress/zstd_compress.c:430 → 423` |

##### `ZSTDMT_compressStream_generic` (`./lib/compress/zstdmt_compress.c`)

|  Change | Delta |           % | Instructions | Location                                       |
| ------: | ----: | ----------: | -----------: | ---------------------------------------------- |
|     new |   +17 | 0.0% → 1.1% |       0 → 17 | `./lib/compress/zstdmt_compress.c:1587`        |
|  +33.3% |   +11 | 2.1% → 2.8% |      33 → 44 | `./lib/compress/zstdmt_compress.c:1829 → 1870` |
|  -20.0% |   -11 | 3.5% → 2.8% |      55 → 44 | `./lib/compress/zstdmt_compress.c:1830 → 1871` |
|  -16.7% |    -8 | 3.1% → 2.5% |      48 → 40 | `./lib/compress/zstdmt_compress.c:1716 → 1757` |
| removed |    -2 | 0.1% → 0.0% |        2 → 0 | `./lib/compress/zstdmt_compress.c:1549`        |

##### `ZSTDMT_compressionJob` (`./lib/compress/zstdmt_compress.c`)

|  Change | Delta |            % | Instructions | Location                                     |
| ------: | ----: | -----------: | -----------: | -------------------------------------------- |
| removed |   -17 | 13.3% → 0.0% |       17 → 0 | `./lib/compress/zstdmt_compress.c:617`       |
|  -94.4% |   -17 | 14.1% → 0.7% |       18 → 1 | `./lib/compress/zstdmt_compress.c:686 → 697` |
|     new |   +17 | 0.0% → 11.7% |       0 → 17 | `./lib/compress/zstdmt_compress.c:619`       |
|     new |   +16 | 0.0% → 11.0% |       0 → 16 | `./lib/compress/zstdmt_compress.c:696`       |
| removed |    -8 |  6.3% → 0.0% |        8 → 0 | `./lib/compress/zstdmt_compress.c:684`       |

##### `ZSTD_buildSeqStore` (`./lib/compress/zstd_compress.c`)

|  Change | Delta |           % | Instructions | Location                                     |
| ------: | ----: | ----------: | -----------: | -------------------------------------------- |
| removed |   -48 | 3.8% → 0.0% |       48 → 0 | `./lib/compress/zstd_compress.c:2913`        |
| +200.0% |   +32 | 1.3% → 3.8% |      16 → 48 | `./lib/compress/zstd_compress.c:2911 → 2924` |
|     new |   +24 | 0.0% → 1.9% |       0 → 24 | `./lib/compress/zstd_compress.c:2915`        |
|     new |   +24 | 0.0% → 1.9% |       0 → 24 | `./lib/compress/zstd_compress.c:3057`        |
|  -33.3% |    -8 | 1.9% → 1.3% |      24 → 16 | `./lib/compress/zstd_compress.c:2891 → 2904` |

##### `ZSTD_compressBlock_internal` (`./lib/compress/zstd_compress.c`)

|  Change | Delta |             % | Instructions | Location                                     |
| ------: | ----: | ------------: | -----------: | -------------------------------------------- |
|  -14.3% |    -8 | 12.1% → 10.2% |      56 → 48 | `./lib/compress/zstd_compress.c:4551 → 4656` |
| +100.0% |    +8 |   1.7% → 3.4% |       8 → 16 | `./lib/compress/zstd_compress.c:4554 → 4659` |
|     new |    +8 |   0.0% → 1.7% |        0 → 8 | `./lib/compress/zstd_compress.c:4677`        |

##### `main` (`./programs/zstdcli.c`)

| Change | Delta |           % | Instructions | Location                           |
| -----: | ----: | ----------: | -----------: | ---------------------------------- |
| -33.3% |    -3 | 2.3% → 1.5% |        9 → 6 | `./programs/zstdcli.c:1301 → 1321` |
|    new |    +3 | 0.0% → 0.8% |        0 → 3 | `./programs/zstdcli.c:1335`        |
|    new |    +3 | 0.0% → 0.8% |        0 → 3 | `./programs/zstdcli.c:1343`        |
|    new |    +2 | 0.0% → 0.5% |        0 → 2 | `./programs/zstdcli.c:1342`        |
|  -5.0% |    -1 | 5.1% → 4.8% |      20 → 19 | `./programs/zstdcli.c:934 → 943`   |

##### `ZSTD_compressBlock_doubleFast` (`./lib/compress/zstd_double_fast.c`)

|  Change |    Delta |           % |      Instructions | Location                                      |
| ------: | -------: | ----------: | ----------------: | --------------------------------------------- |
|  -96.0% | -244,446 | 2.2% → 0.1% |  254,746 → 10,300 | `./lib/compress/zstd_double_fast.c:199 → 209` |
|  +66.7% | +244,377 | 3.1% → 5.6% | 366,512 → 610,889 | `./lib/compress/zstd_double_fast.c:185 → 190` |
|  -38.6% | -158,200 | 3.5% → 2.3% | 410,026 → 251,826 | `./lib/compress/zstd_double_fast.c:259 → 271` |
|  -16.6% | -121,941 | 6.3% → 5.6% | 733,310 → 611,369 | `./lib/compress/zstd_double_fast.c:298 → 310` |
| removed |  -53,570 | 0.5% → 0.0% |        53,570 → 0 | `./lib/compress/zstd_double_fast.c:257`       |

##### `HUF_compress1X_usingCTable_internal.constprop.0` (`./lib/compress/huf_compress.c`)

| Change | Delta |     % |      Instructions | Location                            |
| -----: | ----: | ----: | ----------------: | ----------------------------------- |
|  -0.8% |  -964 | 29.6% | 127,056 → 126,092 | `./lib/compress/huf_compress.c:987` |
|  -0.7% |  -427 | 13.3% |   57,187 → 56,760 | `./lib/compress/huf_compress.c:886` |
|  -0.7% |  -427 | 13.3% |   57,219 → 56,792 | `./lib/compress/huf_compress.c:891` |
|  -0.7% |  -357 | 11.9% |   50,847 → 50,490 | `./lib/compress/huf_compress.c:887` |
|  -0.8% |  -194 |  6.0% |   25,538 → 25,344 | `./lib/compress/huf_compress.c:943` |

##### `HIST_count_parallel_wksp` (`./lib/compress/hist.c`)

| Change |  Delta |     % |          Instructions | Location                        |
| -----: | -----: | ----: | --------------------: | ------------------------------- |
|  -0.1% | -1,982 | 99.8% | 1,955,857 → 1,953,875 | `./lib/compress/hist.c:88 → 98` |

##### `HUF_simpleQuickSort` (`./lib/compress/huf_compress.c`)

| Change | Delta |             % |  Instructions | Location                            |
| -----: | ----: | ------------: | ------------: | ----------------------------------- |
| -14.8% |  -247 | 17.0% → 15.8% | 1,665 → 1,418 | `./lib/compress/huf_compress.c:691` |
| -12.6% |  -191 | 15.5% → 14.7% | 1,514 → 1,323 | `./lib/compress/huf_compress.c:696` |
| -14.4% |   -74 |   5.3% → 4.9% |     515 → 441 | `./lib/compress/huf_compress.c:655` |
| -14.4% |   -72 |   5.1% → 4.8% |     501 → 429 | `./lib/compress/huf_compress.c:656` |
| -14.1% |   -50 |   3.6% → 3.4% |     354 → 304 | `./lib/compress/huf_compress.c:660` |

##### `ZSTD_seqToCodes` (`./lib/compress/zstd_compress_internal.h`)

| Change | Delta |     % |      Instructions | Location                                            |
| -----: | ----: | ----: | ----------------: | --------------------------------------------------- |
|    ~0% |    +8 | 17.9% | 244,856 → 244,864 | `./lib/compress/zstd_compress_internal.h:545 → 612` |

##### `ZSTD_compress_frameChunk` (`./lib/compress/zstd_compress.c`)

| Change | Delta |            % | Instructions | Location                                     |
| -----: | ----: | -----------: | -----------: | -------------------------------------------- |
| -93.5% |   -86 | 15.0% → 1.3% |       92 → 6 | `./lib/compress/zstd_compress.c:4522 → 4627` |
| -89.1% |   -57 | 10.4% → 1.5% |       64 → 7 | `./lib/compress/zstd_compress.c:4541 → 4646` |
|    new |   +56 | 0.0% → 12.0% |       0 → 56 | `./lib/compress/zstd_compress.c:4560`        |
|    new |   +35 |  0.0% → 7.5% |       0 → 35 | `./lib/compress/zstd_compress.c:4581`        |
|    new |   +32 |  0.0% → 6.9% |       0 → 32 | `./lib/compress/zstd_compress.c:4573`        |

##### `ZSTD_compressBegin_advanced_internal` (`./lib/compress/zstd_compress.c`)

| Change | Delta |            % | Instructions | Location                                     |
| -----: | ----: | -----------: | -----------: | -------------------------------------------- |
|    new |    +9 | 0.0% → 18.8% |        0 → 9 | `./lib/compress/zstd_compress.c:5295`        |
|  -9.1% |    -1 | 8.7% → 20.8% |      11 → 10 | `./lib/compress/zstd_compress.c:5167 → 5292` |
| +12.5% |    +1 | 6.3% → 18.8% |        8 → 9 | `./lib/compress/zstd_compress.c:5171 → 5296` |

##### `ZSTD_compressBlock_doubleFast` (`./lib/common/mem.h`)

|  Change | Delta |           % | Instructions | Location                 |
| ------: | ----: | ----------: | -----------: | ------------------------ |
| removed |    -9 | 2.6% → 0.0% |        9 → 0 | `./lib/common/mem.h:185` |
|     new |    +9 | 0.0% → 2.6% |        0 → 9 | `./lib/common/mem.h:184` |

##### `exeNameMatch` (`./programs/zstdcli.c`)

|  Change | Delta |            % | Instructions | Location                   |
| ------: | ----: | -----------: | -----------: | -------------------------- |
|     new |  +244 | 0.0% → 49.7% |      0 → 244 | `./programs/zstdcli.c:131` |
|  -84.0% |  -205 | 48.8% → 7.9% |     244 → 39 | `./programs/zstdcli.c:133` |
| removed |   -65 | 13.0% → 0.0% |       65 → 0 | `./programs/zstdcli.c:132` |
|     new |   +65 | 0.0% → 13.2% |       0 → 65 | `./programs/zstdcli.c:130` |
| removed |   -39 |  7.8% → 0.0% |       39 → 0 | `./programs/zstdcli.c:135` |

##### `ZSTD_compressBegin_internal` (`./lib/compress/zstd_compress.c`)

| Change | Delta |            % | Instructions | Location                                     |
| -----: | ----: | -----------: | -----------: | -------------------------------------------- |
| -40.0% |    -2 | 11.1% → 7.0% |        5 → 3 | `./lib/compress/zstd_compress.c:5176 → 5301` |

##### `ZSTD_createCCtx` (`./lib/compress/zstd_compress.c`)

| Change | Delta |             % | Instructions | Location                                   |
| -----: | ----: | ------------: | -----------: | ------------------------------------------ |
| -10.0% |    -1 | 13.7% → 12.5% |       10 → 9 | `./lib/compress/zstd_compress.c:367 → 360` |

##### `ZSTD_CCtx_init_compressStream2` (`./lib/compress/zstd_compress.c`)

|  Change | Delta |            % | Instructions | Location                                     |
| ------: | ----: | -----------: | -----------: | -------------------------------------------- |
|     new |    +5 |  0.0% → 2.9% |        0 → 5 | `./lib/compress/zstd_compress.c:243`         |
|  -80.0% |    -4 |  2.8% → 0.6% |        5 → 1 | `./lib/compress/zstd_compress.c:247 → 240`   |
|  -11.1% |    -2 | 10.2% → 9.1% |      18 → 16 | `./lib/compress/zstd_compress.c:6220 → 6353` |
| removed |    -1 |  0.6% → 0.0% |        1 → 0 | `./lib/compress/zstd_compress.c:243`         |
|  +50.0% |    +1 |  1.1% → 1.7% |        2 → 3 | `./lib/compress/zstd_compress.c:6347 → 6480` |

### Total instructions

#### Regressions

Functions with the largest increase in instructions recorded within the function and its callees, excluding recursive calls. Categories account for at least 1.0% of self instructions on the base or the current side.

|    Change |    Delta |             % |            Instructions | Function                        | Location                                   |
| --------: | -------: | ------------: | ----------------------: | ------------------------------- | ------------------------------------------ |
|     +2.4% | +925,823 | 96.9% → 97.0% | 38,347,827 → 39,273,650 | `ZSTD_compress_frameChunk`      | `./lib/compress/zstd_compress.c`           |
| +99963.9% | +753,728 |  <0.1% → 1.9% |           754 → 754,482 | `ZSTDMT_compressionJob`         | `./lib/compress/zstdmt_compress.c`         |
|       new | +624,008 |   0.0% → 1.5% |             0 → 624,008 | `ZSTD_recordFingerprint_43`     | `./lib/compress/zstd_preSplit.c`           |
|     +2.8% | +518,717 | 47.2% → 47.4% | 18,651,568 → 19,170,285 | `ZSTD_compressEnd_public`       | `./lib/compress/zstd_compress_internal.h`  |
|     +2.8% | +518,717 | 47.2% → 47.4% | 18,651,635 → 19,170,352 | `ZSTD_compressEnd_public`       | `./lib/compress/zstd_compress.c`           |
|       new | +449,422 |   0.0% → 1.1% |             0 → 449,422 | `ZSTD_splitBlock`               | `./lib/compress/zstd_preSplit.c`           |
|     +2.1% | +407,106 | 49.8% → 49.7% | 19,696,431 → 20,103,537 | `ZSTD_compressContinue_public`  | `./lib/compress/zstd_compress.c`           |
|     +2.1% | +407,106 | 49.8% → 49.7% | 19,696,318 → 20,103,424 | `ZSTD_compressContinue_public`  | `./lib/compress/zstd_compress_internal.h`  |
|     +1.5% | +301,189 | 50.7% → 50.3% | 20,043,157 → 20,344,346 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_compress_internal.h`  |
|     +1.5% | +301,181 | 50.7% → 50.3% | 20,044,985 → 20,346,166 | `ZSTD_buildSeqStore`            | `./lib/compress/zstd_compress.c`           |
|     +1.5% | +301,173 | 50.7% → 50.3% | 20,043,888 → 20,345,061 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_double_fast.c`        |
|    +20.4% |  +15,587 |          0.2% |         76,590 → 92,177 | `__GI_memset`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`     |
|       new |     +822 |  0.0% → <0.1% |                 0 → 822 | `0x0000000000008840`            | `./programs/zstd`                          |
|       ~0% |     +488 |   4.9% → 4.8% |   1,935,430 → 1,935,918 | `HIST_countFast_wksp`           | `./lib/compress/hist.c`                    |
|       ~0% |     +439 |   3.5% → 3.4% |   1,376,670 → 1,377,109 | `ZSTD_buildCTable`              | `./lib/compress/zstd_compress_sequences.c` |
|       ~0% |     +396 | 30.6% → 29.9% | 12,118,064 → 12,118,460 | `ZSTD_encodeSequences`          | `./lib/common/mem.h`                       |
|       ~0% |     +396 | 30.6% → 29.9% | 12,117,184 → 12,117,580 | `ZSTD_encodeSequences`          | `./lib/common/bitstream.h`                 |
|       ~0% |     +396 | 30.6% → 29.9% | 12,119,320 → 12,119,716 | `ZSTD_encodeSequences`          | `./lib/compress/zstd_compress_sequences.c` |
|       ~0% |     +257 | 11.5% → 11.2% |   4,530,626 → 4,530,883 | `ZSTD_buildSequencesStatistics` | `./lib/compress/zstd_compress.c`           |
|       new |     +251 |  0.0% → <0.1% |                 0 → 251 | `ZSTD_checkCParams`             | `./lib/compress/zstd_compress.c`           |

##### Ours

|    Change |    Delta |             % |            Instructions | Function                        | Location                                   |
| --------: | -------: | ------------: | ----------------------: | ------------------------------- | ------------------------------------------ |
|     +2.4% | +925,823 | 96.9% → 97.0% | 38,347,827 → 39,273,650 | `ZSTD_compress_frameChunk`      | `./lib/compress/zstd_compress.c`           |
| +99963.9% | +753,728 |  <0.1% → 1.9% |           754 → 754,482 | `ZSTDMT_compressionJob`         | `./lib/compress/zstdmt_compress.c`         |
|       new | +624,008 |   0.0% → 1.5% |             0 → 624,008 | `ZSTD_recordFingerprint_43`     | `./lib/compress/zstd_preSplit.c`           |
|     +2.8% | +518,717 | 47.2% → 47.4% | 18,651,568 → 19,170,285 | `ZSTD_compressEnd_public`       | `./lib/compress/zstd_compress_internal.h`  |
|     +2.8% | +518,717 | 47.2% → 47.4% | 18,651,635 → 19,170,352 | `ZSTD_compressEnd_public`       | `./lib/compress/zstd_compress.c`           |
|       new | +449,422 |   0.0% → 1.1% |             0 → 449,422 | `ZSTD_splitBlock`               | `./lib/compress/zstd_preSplit.c`           |
|     +2.1% | +407,106 | 49.8% → 49.7% | 19,696,431 → 20,103,537 | `ZSTD_compressContinue_public`  | `./lib/compress/zstd_compress.c`           |
|     +2.1% | +407,106 | 49.8% → 49.7% | 19,696,318 → 20,103,424 | `ZSTD_compressContinue_public`  | `./lib/compress/zstd_compress_internal.h`  |
|     +1.5% | +301,189 | 50.7% → 50.3% | 20,043,157 → 20,344,346 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_compress_internal.h`  |
|     +1.5% | +301,181 | 50.7% → 50.3% | 20,044,985 → 20,346,166 | `ZSTD_buildSeqStore`            | `./lib/compress/zstd_compress.c`           |
|     +1.5% | +301,173 | 50.7% → 50.3% | 20,043,888 → 20,345,061 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_double_fast.c`        |
|       new |     +822 |  0.0% → <0.1% |                 0 → 822 | `0x0000000000008840`            | `./programs/zstd`                          |
|       ~0% |     +488 |   4.9% → 4.8% |   1,935,430 → 1,935,918 | `HIST_countFast_wksp`           | `./lib/compress/hist.c`                    |
|       ~0% |     +439 |   3.5% → 3.4% |   1,376,670 → 1,377,109 | `ZSTD_buildCTable`              | `./lib/compress/zstd_compress_sequences.c` |
|       ~0% |     +396 | 30.6% → 29.9% | 12,118,064 → 12,118,460 | `ZSTD_encodeSequences`          | `./lib/common/mem.h`                       |
|       ~0% |     +396 | 30.6% → 29.9% | 12,117,184 → 12,117,580 | `ZSTD_encodeSequences`          | `./lib/common/bitstream.h`                 |
|       ~0% |     +396 | 30.6% → 29.9% | 12,119,320 → 12,119,716 | `ZSTD_encodeSequences`          | `./lib/compress/zstd_compress_sequences.c` |
|       ~0% |     +257 | 11.5% → 11.2% |   4,530,626 → 4,530,883 | `ZSTD_buildSequencesStatistics` | `./lib/compress/zstd_compress.c`           |
|       new |     +251 |  0.0% → <0.1% |                 0 → 251 | `ZSTD_checkCParams`             | `./lib/compress/zstd_compress.c`           |
|     +0.2% |     +219 |          0.3% |       111,125 → 111,344 | `HUF_buildCTable_wksp`          | `./lib/compress/huf_compress.c`            |

##### Native

| Change |   Delta |            % |    Instructions | Function               | Location                                           |
| -----: | ------: | -----------: | --------------: | ---------------------- | -------------------------------------------------- |
| +20.4% | +15,587 |         0.2% | 76,590 → 92,177 | `__GI_memset`          | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  +0.1% |     +55 |         0.2% | 86,003 → 86,058 | `_dl_sysdep_start`     | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +0.1% |     +55 |         0.2% | 80,782 → 80,837 | `dl_main`              | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +0.1% |     +55 |         0.2% | 85,718 → 85,773 | `__GI___tunables_init` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +0.3% |     +42 |        <0.1% | 15,934 → 15,976 | `_dl_relocate_object`  | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +0.5% |     +13 |        <0.1% |   2,526 → 2,539 | `handle_preload_list`  | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +6.1% |     +13 |        <0.1% |       214 → 227 | `strcspn`              | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|    new |     +10 | 0.0% → <0.1% |          0 → 10 | `0x000000000010c580`   | `<unknown>`                                        |
|    ~0% |      +9 |         0.2% | 64,415 → 64,424 | `malloc`               | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  +0.2% |      +5 |        <0.1% |   2,391 → 2,396 | `calloc`               | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |

#### Improvements

Functions with the largest decrease in instructions recorded within the function and its callees, excluding recursive calls. Categories account for at least 1.0% of self instructions on the base or the current side.

|  Change |  Delta |            % |          Instructions | Function                                          | Location                                           |
| ------: | -----: | -----------: | --------------------: | ------------------------------------------------- | -------------------------------------------------- |
|   -0.6% | -5,023 |  2.3% → 2.2% |     894,608 → 889,585 | `HUF_compress_internal`                           | `./lib/compress/huf_compress.c`                    |
|   -0.6% | -5,023 |  2.3% → 2.2% |     894,944 → 889,921 | `HUF_compress4X_repeat`                           | `./lib/compress/huf_compress.c`                    |
|   -0.6% | -5,023 |  2.3% → 2.2% |     897,920 → 892,897 | `ZSTD_compressLiterals`                           | `./lib/compress/zstd_compress_literals.c`          |
|   -0.6% | -5,023 |  2.3% → 2.2% |     894,080 → 889,057 | `HIST_count_wksp`                                 | `./lib/compress/hist.c`                            |
|   -0.2% | -4,535 |  7.2% → 7.0% | 2,829,254 → 2,824,719 | `HIST_count_parallel_wksp`                        | `./lib/compress/hist.c`                            |
|   -0.7% | -3,124 |         1.1% |     429,016 → 425,892 | `HUF_compressCTable_internal.isra.0`              | `./lib/compress/huf_compress.c`                    |
|   -0.7% | -3,124 |         1.1% |     428,768 → 425,644 | `HUF_compress1X_usingCTable_internal.constprop.0` | `./lib/compress/huf_compress.c`                    |
| removed |   -822 | <0.1% → 0.0% |               822 → 0 | `0x0000000000008740`                              | `./programs/zstd`                                  |
|   -8.4% |   -820 |        <0.1% |         9,792 → 8,972 | `HUF_simpleQuickSort`                             | `./lib/compress/huf_compress.c`                    |
|     ~0% |   -279 |  3.5% → 3.4% | 1,370,282 → 1,370,003 | `ZSTD_seqToCodes`                                 | `./lib/compress/zstd_compress_internal.h`          |
|   -0.1% |   -241 |         0.7% |     277,173 → 276,932 | `_dl_init`                                        | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   -0.1% |   -241 |         0.7% |     276,150 → 275,909 | `(below main)`                                    | `./programs/zstd`                                  |
|   -0.1% |   -241 |         0.7% |     283,536 → 283,295 | `_dl_runtime_resolve`                             | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   -0.1% |   -241 |         0.7% |     275,441 → 275,200 | `__libc_start_main@@GLIBC_2.34`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|   -0.1% |   -241 |         0.7% |     274,481 → 274,240 | `main`                                            | `./programs/zstdcli.c`                             |
|   -0.1% |   -241 |         0.7% |     271,657 → 271,416 | `FIO_createPreferences`                           | `./programs/fileio.c`                              |
|   -0.1% |   -241 |         0.7% |     269,326 → 269,085 | `FIO_createContext`                               | `./programs/fileio.c`                              |
|   -0.1% |   -241 |         0.7% |     275,425 → 275,184 | `__cxa_atexit`                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|   -0.1% |   -241 |         0.7% |     275,422 → 275,181 | `__internal_atexit`                               | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|   -0.1% |   -241 |         0.7% |     274,544 → 274,303 | `(below main)`                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |

##### Ours

|  Change |  Delta |            % |          Instructions | Function                                          | Location                                  |
| ------: | -----: | -----------: | --------------------: | ------------------------------------------------- | ----------------------------------------- |
|   -0.6% | -5,023 |  2.3% → 2.2% |     894,608 → 889,585 | `HUF_compress_internal`                           | `./lib/compress/huf_compress.c`           |
|   -0.6% | -5,023 |  2.3% → 2.2% |     894,944 → 889,921 | `HUF_compress4X_repeat`                           | `./lib/compress/huf_compress.c`           |
|   -0.6% | -5,023 |  2.3% → 2.2% |     897,920 → 892,897 | `ZSTD_compressLiterals`                           | `./lib/compress/zstd_compress_literals.c` |
|   -0.6% | -5,023 |  2.3% → 2.2% |     894,080 → 889,057 | `HIST_count_wksp`                                 | `./lib/compress/hist.c`                   |
|   -0.2% | -4,535 |  7.2% → 7.0% | 2,829,254 → 2,824,719 | `HIST_count_parallel_wksp`                        | `./lib/compress/hist.c`                   |
|   -0.7% | -3,124 |         1.1% |     429,016 → 425,892 | `HUF_compressCTable_internal.isra.0`              | `./lib/compress/huf_compress.c`           |
|   -0.7% | -3,124 |         1.1% |     428,768 → 425,644 | `HUF_compress1X_usingCTable_internal.constprop.0` | `./lib/compress/huf_compress.c`           |
| removed |   -822 | <0.1% → 0.0% |               822 → 0 | `0x0000000000008740`                              | `./programs/zstd`                         |
|   -8.4% |   -820 |        <0.1% |         9,792 → 8,972 | `HUF_simpleQuickSort`                             | `./lib/compress/huf_compress.c`           |
|     ~0% |   -279 |  3.5% → 3.4% | 1,370,282 → 1,370,003 | `ZSTD_seqToCodes`                                 | `./lib/compress/zstd_compress_internal.h` |
|   -0.1% |   -241 |         0.7% |     276,150 → 275,909 | `(below main)`                                    | `./programs/zstd`                         |
|   -0.1% |   -241 |         0.7% |     274,481 → 274,240 | `main`                                            | `./programs/zstdcli.c`                    |
|   -0.1% |   -241 |         0.7% |     271,657 → 271,416 | `FIO_createPreferences`                           | `./programs/fileio.c`                     |
|   -0.1% |   -241 |         0.7% |     269,326 → 269,085 | `FIO_createContext`                               | `./programs/fileio.c`                     |
|     ~0% |   -231 |  6.6% → 6.4% | 2,594,708 → 2,594,477 | `ZSTD_seqToCodes`                                 | `./lib/compress/zstd_compress.c`          |
|   -6.3% |   -120 |        <0.1% |         1,891 → 1,771 | `UTIL_allocateFileNamesTable`                     | `./programs/util.c`                       |
|     ~0% |    -98 |         0.6% |     235,987 → 235,889 | `FIO_compressFilename_srcFile`                    | `./programs/fileio.c`                     |
|     ~0% |    -94 |  0.7% → 0.6% |     259,761 → 259,667 | `UTIL_getFileSize`                                | `./programs/util.c`                       |
|     ~0% |    -94 |  0.7% → 0.6% |     259,082 → 258,988 | `FIO_createCResources`                            | `./programs/fileio.c`                     |
|     ~0% |    -94 |  0.7% → 0.6% |     259,779 → 259,685 | `FIO_compressFilename`                            | `./programs/fileio.c`                     |

##### Native

|  Change | Delta |            % |      Instructions | Function                         | Location                                           |
| ------: | ----: | -----------: | ----------------: | -------------------------------- | -------------------------------------------------- |
|   -0.1% |  -241 |         0.7% | 277,173 → 276,932 | `_dl_init`                       | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   -0.1% |  -241 |         0.7% | 283,536 → 283,295 | `_dl_runtime_resolve`            | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   -0.1% |  -241 |         0.7% | 275,441 → 275,200 | `__libc_start_main@@GLIBC_2.34`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|   -0.1% |  -241 |         0.7% | 275,425 → 275,184 | `__cxa_atexit`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|   -0.1% |  -241 |         0.7% | 275,422 → 275,181 | `__internal_atexit`              | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|   -0.1% |  -241 |         0.7% | 274,544 → 274,303 | `(below main)`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|   -0.1% |  -186 |         0.9% | 363,936 → 363,750 | `_dl_start`                      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|   -0.1% |  -186 |         0.9% | 363,941 → 363,755 | `(below main)`                   | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  -33.0% |  -125 |        <0.1% |         379 → 254 | `strcmp`                         | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  -50.0% |  -106 |        <0.1% |         212 → 106 | `getenv`                         | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|     ~0% |   -64 |         0.5% | 183,023 → 182,959 | `__GI_memcpy`                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|   -1.7% |   -32 |        <0.1% |     1,866 → 1,834 | `new_do_write`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|   -3.9% |   -32 |        <0.1% |         819 → 787 | `_IO_default_xsputn`             | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|   -2.0% |   -32 |        <0.1% |     1,622 → 1,590 | `_IO_do_write@@GLIBC_2.17`       | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|  -50.0% |   -20 |        <0.1% |           40 → 20 | `__GI_strlen`                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
|   -0.1% |   -11 |        <0.1% |     8,444 → 8,433 | `__pthread_mutex_unlock_usercnt` | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |
| removed |   -10 | <0.1% → 0.0% |            10 → 0 | `0x000000000010c4e8`             | `<unknown>`                                        |

#### Callers

Callers with the largest change in contribution to each function's total instructions. Inlining can make caller attribution imprecise, and for recursive calls, values and percentages can exceed the profile's total.

##### `ZSTD_compress_frameChunk` (`./lib/compress/zstd_compress.c`)

| Change |      Delta |               % |            Instructions | Calls | Caller                         | Location                                  |
| -----: | ---------: | --------------: | ----------------------: | ----: | ------------------------------ | ----------------------------------------- |
|  +2.8% | +1,527,377 | 144.1% → 144.6% | 55,245,537 → 56,772,914 |     8 | `ZSTD_compressBlock_internal`  | `./lib/compress/zstd_compress.c`          |
|  +2.5% |   +925,823 |   98.0% → 98.1% | 37,593,868 → 38,519,691 |     2 | `ZSTD_compress_frameChunk`     | `./lib/compress/zstd_compress.c`          |
|  +2.8% |   +518,717 |   48.6% → 48.8% | 18,651,550 → 19,170,267 |     1 | `ZSTD_compressEnd_public`      | `./lib/compress/zstd_compress_internal.h` |
|  +2.1% |   +407,106 |   51.4% → 51.2% | 19,696,277 → 20,103,383 |     1 | `ZSTD_compressContinue_public` | `./lib/compress/zstd_compress.c`          |

##### `ZSTDMT_compressionJob` (`./lib/compress/zstdmt_compress.c`)

|  Change |       Delta |                      % |              Instructions | Calls | Caller                                 | Location                               |
| ------: | ----------: | ---------------------: | ------------------------: | ----: | -------------------------------------- | -------------------------------------- |
|     new | +39,274,550 |         0.0% → 5205.5% |            0 → 39,274,550 | 0 → 1 | `ZSTD_compressBegin_advanced_internal` | `./lib/compress/zstd_compress.c`       |
| removed | -38,349,498 |      5086140.3% → 0.0% |            38,349,498 → 0 | 1 → 0 | `ZSTD_XXH64_update`                    | `./lib/common/xxhash.h`                |
|   +2.4% |  +2,840,330 | 15475420.8% → 15842.0% | 116,684,673 → 119,525,003 |     3 | `__pthread_mutex_unlock_usercnt`       | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|   +2.4% |    +925,844 |   5194439.8% → 5313.8% |   39,166,076 → 40,091,920 |     1 | `ZSTDMT_getBuffer`                     | `./lib/compress/zstdmt_compress.c`     |

##### `ZSTD_recordFingerprint_43` (`./lib/compress/zstd_preSplit.c`)

| Change |    Delta |             % | Instructions | Calls | Caller                      | Location                         |
| -----: | -------: | ------------: | -----------: | ----: | --------------------------- | -------------------------------- |
|    new | +624,008 | 0.0% → 100.0% |  0 → 624,008 | 0 → 7 | `ZSTD_splitBlock`           | `./lib/compress/zstd_preSplit.c` |
|    new | +613,655 |  0.0% → 98.3% |  0 → 613,655 | 0 → 7 | `ZSTD_recordFingerprint_43` | `./lib/compress/zstd_preSplit.c` |

##### `ZSTD_compressEnd_public` (`./lib/compress/zstd_compress_internal.h`)

| Change |    Delta |      % |            Instructions | Calls | Caller                    | Location                         |
| -----: | -------: | -----: | ----------------------: | ----: | ------------------------- | -------------------------------- |
|  +2.8% | +518,717 | 100.0% | 18,651,568 → 19,170,285 |     1 | `ZSTD_compressEnd_public` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_compressEnd_public` (`./lib/compress/zstd_compress.c`)

| Change |    Delta |      % |            Instructions | Calls | Caller                           | Location                               |
| -----: | -------: | -----: | ----------------------: | ----: | -------------------------------- | -------------------------------------- |
|  +2.8% | +518,717 | 100.0% | 18,652,011 → 19,170,728 |     1 | `__pthread_mutex_unlock_usercnt` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `ZSTD_splitBlock` (`./lib/compress/zstd_preSplit.c`)

| Change |       Delta |               % |   Instructions | Calls | Caller                     | Location                         |
| -----: | ----------: | --------------: | -------------: | ----: | -------------------------- | -------------------------------- |
|    new | +75,565,864 | 0.0% → 16814.0% | 0 → 75,565,864 | 0 → 7 | `ZSTD_compress_frameChunk` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_compressContinue_public` (`./lib/compress/zstd_compress.c`)

| Change |    Delta |               % |            Instructions | Calls | Caller                         | Location                                  |
| -----: | -------: | --------------: | ----------------------: | ----: | ------------------------------ | ----------------------------------------- |
|  +2.4% | +925,823 | 194.7% → 195.4% | 38,348,721 → 39,274,544 |     1 | `ZSTDMT_compressionJob`        | `./lib/compress/zstdmt_compress.c`        |
|  +2.1% | +407,106 |          100.0% | 19,696,287 → 20,103,393 |     1 | `ZSTD_compressContinue_public` | `./lib/compress/zstd_compress_internal.h` |

##### `ZSTD_compressContinue_public` (`./lib/compress/zstd_compress_internal.h`)

| Change |    Delta |      % |            Instructions | Calls | Caller                         | Location                         |
| -----: | -------: | -----: | ----------------------: | ----: | ------------------------------ | -------------------------------- |
|  +2.1% | +407,106 | 100.0% | 19,696,318 → 20,103,424 |     1 | `ZSTD_compressContinue_public` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_compressBlock_doubleFast` (`./lib/compress/zstd_compress_internal.h`)

| Change |          Delta |                     % |                      Instructions |             Calls | Caller                          | Location                                  |
| -----: | -------------: | --------------------: | --------------------------------: | ----------------: | ------------------------------- | ----------------------------------------- |
|  +1.5% | +2,317,883,112 | 755572.1% → 755779.5% | 151,440,509,530 → 153,758,392,642 | 122,209 → 122,215 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_double_fast.c`       |
|  +1.5% |       +301,189 |                100.0% |           20,042,901 → 20,344,090 |                 8 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_compress_internal.h` |

##### `ZSTD_buildSeqStore` (`./lib/compress/zstd_compress.c`)

| Change |    Delta |               % |            Instructions | Calls | Caller                        | Location                         |
| -----: | -------: | --------------: | ----------------------: | ----: | ----------------------------- | -------------------------------- |
|  +0.8% | +296,811 | 187.5% → 186.2% | 37,593,067 → 37,889,878 |     8 | `ZSTD_compressBlock_internal` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_compressBlock_doubleFast` (`./lib/compress/zstd_double_fast.c`)

| Change |          Delta |                     % |                      Instructions |             Calls | Caller                          | Location                                  |
| -----: | -------------: | --------------------: | --------------------------------: | ----------------: | ------------------------------- | ----------------------------------------- |
|  +1.5% | +2,316,860,179 | 755503.0% → 755707.0% | 151,432,182,725 → 153,749,042,904 | 122,208 → 122,214 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_compress_internal.h` |
|  +1.5% |       +301,173 |                100.0% |           20,043,888 → 20,345,061 |                 8 | `ZSTD_buildSeqStore`            | `./lib/compress/zstd_compress.c`          |
|  +1.4% |       +170,058 |         62.5% → 62.4% |           12,527,271 → 12,697,329 |                 9 | `ZSTD_compressBlock_doubleFast` | `./lib/common/mem.h`                      |

##### `__GI_memset` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |            % | Instructions |   Calls | Caller                      | Location                                           |
| -----: | ------: | -----------: | -----------: | ------: | --------------------------- | -------------------------------------------------- |
|    new | +10,976 | 0.0% → 11.9% |   0 → 10,976 | 0 → 112 | `ZSTD_recordFingerprint_43` | `./lib/compress/zstd_preSplit.c`                   |
|    new |  +4,606 |  0.0% → 5.0% |    0 → 4,606 |   0 → 7 | `ZSTD_splitBlock`           | `./lib/compress/zstd_preSplit.c`                   |
|  +1.2% |      +5 |  0.6% → 0.5% |    428 → 433 |       1 | `_dl_runtime_resolve`       | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `0x0000000000008840` (`./programs/zstd`)

| Change | Delta |             % | Instructions | Calls | Caller          | Location                                           |
| -----: | ----: | ------------: | -----------: | ----: | --------------- | -------------------------------------------------- |
|    new |  +822 | 0.0% → 100.0% |      0 → 822 | 0 → 1 | `_dl_call_fini` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `HIST_countFast_wksp` (`./lib/compress/hist.c`)

| Change | Delta |      % |          Instructions | Calls | Caller                          | Location                                   |
| -----: | ----: | -----: | --------------------: | ----: | ------------------------------- | ------------------------------------------ |
|    ~0% |  +769 | 100.6% | 1,946,432 → 1,947,201 |    16 | `ZSTD_buildCTable`              | `./lib/compress/zstd_compress_sequences.c` |
|    ~0% |  +488 | 100.0% | 1,935,430 → 1,935,918 |     8 | `ZSTD_buildSequencesStatistics` | `./lib/compress/zstd_compress.c`           |

##### `ZSTD_buildCTable` (`./lib/compress/zstd_compress_sequences.c`)

| Change |  Delta |               % |          Instructions | Calls | Caller                     | Location                |
| -----: | -----: | --------------: | --------------------: | ----: | -------------------------- | ----------------------- |
|  +0.1% | +1,122 | 160.2% → 160.3% | 2,205,964 → 2,207,086 |    24 | `HIST_count_parallel_wksp` | `./lib/compress/hist.c` |

##### `ZSTD_encodeSequences` (`./lib/common/mem.h`)

| Change | Delta |      % |            Instructions | Calls | Caller                 | Location                                   |
| -----: | ----: | -----: | ----------------------: | ----: | ---------------------- | ------------------------------------------ |
|    ~0% |  +396 | 100.0% | 12,118,064 → 12,118,460 |     8 | `ZSTD_encodeSequences` | `./lib/compress/zstd_compress_sequences.c` |

##### `ZSTD_encodeSequences` (`./lib/common/bitstream.h`)

| Change | Delta |      % |            Instructions | Calls | Caller                 | Location                   |
| -----: | ----: | -----: | ----------------------: | ----: | ---------------------- | -------------------------- |
|    ~0% |  +396 | 100.0% | 12,117,184 → 12,117,580 |     8 | `ZSTD_encodeSequences` | `./lib/common/mem.h`       |
|    ~0% |  +396 | 100.0% | 12,116,392 → 12,116,788 |     8 | `ZSTD_encodeSequences` | `./lib/common/bitstream.h` |

##### `ZSTD_encodeSequences` (`./lib/compress/zstd_compress_sequences.c`)

| Change | Delta |      % |            Instructions | Calls | Caller                          | Location                         |
| -----: | ----: | -----: | ----------------------: | ----: | ------------------------------- | -------------------------------- |
|    ~0% |  +396 | 100.0% | 12,119,408 → 12,119,804 |     8 | `ZSTD_buildSequencesStatistics` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_buildSequencesStatistics` (`./lib/compress/zstd_compress.c`)

| Change | Delta |      % |            Instructions | Calls | Caller                        | Location                         |
| -----: | ----: | -----: | ----------------------: | ----: | ----------------------------- | -------------------------------- |
|    ~0% |  +653 | 367.5% | 16,650,034 → 16,650,687 |     8 | `ZSTD_compressBlock_internal` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_checkCParams` (`./lib/compress/zstd_compress.c`)

| Change | Delta |             % | Instructions | Calls | Caller                                 | Location                         |
| -----: | ----: | ------------: | -----------: | ----: | -------------------------------------- | -------------------------------- |
|    new |  +251 | 0.0% → 100.0% |      0 → 251 | 0 → 1 | `ZSTD_compressBegin_advanced_internal` | `./lib/compress/zstd_compress.c` |

##### `HUF_buildCTable_wksp` (`./lib/compress/huf_compress.c`)

| Change |  Delta |               % |      Instructions | Calls | Caller                     | Location                        |
| -----: | -----: | --------------: | ----------------: | ----: | -------------------------- | ------------------------------- |
| -12.4% | -6,044 |   43.8% → 38.2% |   48,626 → 42,582 | 7 → 6 | `HUF_simpleQuickSort`      | `./lib/compress/huf_compress.c` |
|  -0.6% | -2,841 | 397.2% → 393.8% | 441,339 → 438,498 |     7 | `HUF_compress_internal`    | `./lib/compress/huf_compress.c` |
|  +0.2% |   +219 |           96.6% | 107,333 → 107,552 |     8 | `HUF_buildCTable_wksp`     | `./lib/compress/huf_compress.c` |
|    ~0% |    -65 | 138.6% → 138.2% | 153,989 → 153,924 |     1 | `HIST_count_parallel_wksp` | `./lib/compress/hist.c`         |

##### `_dl_sysdep_start` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

| Change | Delta |             % |    Instructions | Calls | Caller                 | Location                                           |
| -----: | ----: | ------------: | --------------: | ----: | ---------------------- | -------------------------------------------------- |
|  +0.1% |   +55 |        100.0% | 86,003 → 86,058 |     1 | `_dl_start`            | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +0.1% |   +55 | 94.0% → 94.1% | 80,883 → 80,938 |     1 | `__GI___tunables_init` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `dl_main` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

| Change | Delta |      % |      Instructions | Calls | Caller                | Location                                           |
| -----: | ----: | -----: | ----------------: | ----: | --------------------- | -------------------------------------------------- |
|  +0.1% |  +220 | 395.4% | 319,389 → 319,609 |     4 | `dl_main`             | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +0.1% |   +55 |  99.1% |   80,048 → 80,103 |     1 | `_dl_new_object`      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +0.1% |   +55 |  95.7% |   77,307 → 77,362 |     1 | `_dl_init_paths`      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +0.1% |   +55 | 100.0% |   80,782 → 80,837 |     1 | `_dl_sysdep_start`    | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +0.1% |   +42 |  84.1% |   67,924 → 67,966 |     1 | `_dl_map_object_deps` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `__GI___tunables_init` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

| Change | Delta |      % |    Instructions | Calls | Caller             | Location                                           |
| -----: | ----: | -----: | --------------: | ----: | ------------------ | -------------------------------------------------- |
|  +0.1% |   +55 | 100.0% | 85,718 → 85,773 |     1 | `_dl_sysdep_start` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `_dl_relocate_object` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

| Change | Delta |                 % |      Instructions | Calls | Caller                | Location                                           |
| -----: | ----: | ----------------: | ----------------: | ----: | --------------------- | -------------------------------------------------- |
|    ~0% |   +56 | 1548.0% → 1544.3% | 246,654 → 246,710 |    19 | `_dl_relocate_object` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +0.2% |   +42 |            129.6% |   20,657 → 20,699 |     1 | `_dl_add_to_slotinfo` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +0.1% |   +42 |   404.0% → 403.2% |   64,370 → 64,412 |     1 | `dl_main`             | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|    ~0% |   +14 |   644.0% → 642.4% | 102,610 → 102,624 |    10 | `_dl_lookup_symbol_x` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `handle_preload_list` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

| Change | Delta |                 % |    Instructions | Calls | Caller                | Location                                           |
| -----: | ----: | ----------------: | --------------: | ----: | --------------------- | -------------------------------------------------- |
|  +0.1% |   +55 | 3052.5% → 3039.1% | 77,107 → 77,162 |     1 | `dl_main`             | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +0.5% |   +13 |             99.1% |   2,503 → 2,516 |     1 | `handle_preload_list` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `strcspn` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

| Change | Delta |      % | Instructions | Calls | Caller                | Location                                           |
| -----: | ----: | -----: | -----------: | ----: | --------------------- | -------------------------------------------------- |
|  +6.1% |   +13 | 100.0% |    214 → 227 |     1 | `handle_preload_list` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `0x000000000010c580` (`<unknown>`)

| Change | Delta |             % | Instructions | Calls | Caller              | Location                               |
| -----: | ----: | ------------: | -----------: | ----: | ------------------- | -------------------------------------- |
|    new |   +10 | 0.0% → 100.0% |       0 → 10 | 0 → 1 | `__internal_atexit` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `malloc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |     % |    Instructions | Calls | Caller                                           | Location                               |
| -----: | ----: | ----: | --------------: | ----: | ------------------------------------------------ | -------------------------------------- |
|  +0.4% |    +8 |  2.9% |   1,860 → 1,868 |     2 | `__pthread_mutex_unlock_usercnt`                 | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    ~0% |    +4 | 96.5% | 62,152 → 62,156 |     1 | `ZSTD_estimateCCtxSize_usingCCtxParams_internal` | `./lib/compress/zstd_compress.c`       |
|  +0.3% |    +4 |  2.0% |   1,311 → 1,315 |     1 | `ZSTD_createCCtx_advanced`                       | `./lib/compress/zstd_compress.c`       |

##### `calloc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |               % |  Instructions | Calls | Caller                           | Location                                           |
| -----: | ----: | --------------: | ------------: | ----: | -------------------------------- | -------------------------------------------------- |
|  +0.8% |    +5 |   26.2% → 26.4% |     627 → 632 |     1 | `_dl_runtime_resolve`            | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +0.1% |    +4 | 329.7% → 329.1% | 7,882 → 7,886 |     6 | `pthread_mutex_init@@GLIBC_2.17` | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |

##### `HUF_compress_internal` (`./lib/compress/huf_compress.c`)

| Change |  Delta |             % |      Instructions | Calls | Caller                     | Location                        |
| -----: | -----: | ------------: | ----------------: | ----: | -------------------------- | ------------------------------- |
|  -0.6% | -5,023 |        100.0% | 894,608 → 889,585 |     8 | `HUF_compress4X_repeat`    | `./lib/compress/huf_compress.c` |
|  -0.6% | -2,841 | 49.4% → 49.3% | 441,661 → 438,820 |     7 | `HIST_count_parallel_wksp` | `./lib/compress/hist.c`         |
|  -0.6% | -2,062 |         40.1% | 359,101 → 357,039 |     6 | `HUF_writeCTable_wksp`     | `./lib/compress/huf_compress.c` |

##### `HUF_compress4X_repeat` (`./lib/compress/huf_compress.c`)

| Change |  Delta |      % |      Instructions | Calls | Caller                  | Location                                  |
| -----: | -----: | -----: | ----------------: | ----: | ----------------------- | ----------------------------------------- |
|  -0.6% | -5,023 | 100.0% | 895,016 → 889,993 |     8 | `ZSTD_compressLiterals` | `./lib/compress/zstd_compress_literals.c` |

##### `ZSTD_compressLiterals` (`./lib/compress/zstd_compress_literals.c`)

| Change |  Delta |                 % |            Instructions | Calls | Caller                  | Location                                  |
| -----: | -----: | ----------------: | ----------------------: | ----: | ----------------------- | ----------------------------------------- |
|  -0.6% | -5,023 |             99.7% |       895,240 → 890,217 |     8 | `ZSTD_compressLiterals` | `./lib/compress/zstd_compress_literals.c` |
|    ~0% | -4,370 | 1954.3% → 1964.8% | 17,548,082 → 17,543,712 |     8 | `ZSTD_buildSeqStore`    | `./lib/compress/zstd_compress.c`          |

##### `HIST_count_wksp` (`./lib/compress/hist.c`)

| Change |  Delta |      % |      Instructions | Calls | Caller                  | Location                        |
| -----: | -----: | -----: | ----------------: | ----: | ----------------------- | ------------------------------- |
|  -0.6% | -5,023 | 100.0% | 894,080 → 889,057 |     8 | `HUF_compress_internal` | `./lib/compress/huf_compress.c` |

##### `HIST_count_parallel_wksp` (`./lib/compress/hist.c`)

| Change |  Delta |               % |          Instructions | Calls | Caller                | Location                |
| -----: | -----: | --------------: | --------------------: | ----: | --------------------- | ----------------------- |
|  -0.6% | -5,023 |   31.6% → 31.5% |     893,896 → 888,873 |     8 | `HIST_count_wksp`     | `./lib/compress/hist.c` |
|    ~0% | +1,257 | 137.2% → 137.5% | 3,881,646 → 3,882,903 |    24 | `HIST_countFast_wksp` | `./lib/compress/hist.c` |

##### `HUF_compressCTable_internal.isra.0` (`./lib/compress/huf_compress.c`)

| Change |  Delta |             % |      Instructions | Calls | Caller                  | Location                        |
| -----: | -----: | ------------: | ----------------: | ----: | ----------------------- | ------------------------------- |
|  -0.6% | -2,062 | 83.4% → 83.5% | 357,705 → 355,643 |     6 | `HUF_compress_internal` | `./lib/compress/huf_compress.c` |
|  -1.5% | -1,062 | 16.6% → 16.5% |   71,335 → 70,273 |     2 | `HUF_writeCTable_wksp`  | `./lib/compress/huf_compress.c` |

##### `HUF_compress1X_usingCTable_internal.constprop.0` (`./lib/compress/huf_compress.c`)

| Change |  Delta |      % |      Instructions | Calls | Caller                                            | Location                        |
| -----: | -----: | -----: | ----------------: | ----: | ------------------------------------------------- | ------------------------------- |
|  -0.7% | -3,124 | 100.0% | 428,768 → 425,644 |     8 | `HUF_compressCTable_internal.isra.0`              | `./lib/compress/huf_compress.c` |
|  -0.7% | -2,353 |  75.0% | 321,697 → 319,344 |    16 | `HUF_compress1X_usingCTable_internal.constprop.0` | `./lib/compress/huf_compress.c` |

##### `0x0000000000008740` (`./programs/zstd`)

|  Change | Delta |             % | Instructions | Calls | Caller          | Location                                           |
| ------: | ----: | ------------: | -----------: | ----: | --------------- | -------------------------------------------------- |
| removed |  -822 | 100.0% → 0.0% |      822 → 0 | 1 → 0 | `_dl_call_fini` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `HUF_simpleQuickSort` (`./lib/compress/huf_compress.c`)

| Change |  Delta |               % |    Instructions |   Calls | Caller                 | Location                        |
| -----: | -----: | --------------: | --------------: | ------: | ---------------------- | ------------------------------- |
| -11.7% | -6,864 | 596.6% → 574.6% | 58,418 → 51,554 |  9 → 10 | `HUF_buildCTable_wksp` | `./lib/compress/huf_compress.c` |
|  +0.1% |    +31 | 441.3% → 482.0% | 43,216 → 43,247 | 17 → 15 | `HUF_simpleQuickSort`  | `./lib/compress/huf_compress.c` |

##### `ZSTD_seqToCodes` (`./lib/compress/zstd_compress_internal.h`)

| Change | Delta |      % |          Instructions | Calls | Caller            | Location                         |
| -----: | ----: | -----: | --------------------: | ----: | ----------------- | -------------------------------- |
|    ~0% |  -279 | 100.0% | 1,370,282 → 1,370,003 |     8 | `ZSTD_seqToCodes` | `./lib/compress/zstd_compress.c` |

##### `_dl_init` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

| Change | Delta |      % |      Instructions | Calls | Caller      | Location                                           |
| -----: | ----: | -----: | ----------------: | ----: | ----------- | -------------------------------------------------- |
|  -0.1% |  -241 | 100.0% | 277,173 → 276,932 |     1 | `_dl_start` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `(below main)` (`./programs/zstd`)

| Change | Delta |      % |      Instructions | Calls | Caller     | Location                                           |
| -----: | ----: | -----: | ----------------: | ----: | ---------- | -------------------------------------------------- |
|  -0.1% |  -241 | 100.0% | 276,150 → 275,909 |     1 | `_dl_init` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `_dl_runtime_resolve` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

|  Change | Delta |           % |      Instructions | Calls | Caller               | Location                               |
| ------: | ----: | ----------: | ----------------: | ----: | -------------------- | -------------------------------------- |
| removed |  -775 | 0.3% → 0.0% |           775 → 0 | 1 → 0 | `0x0000000000008740` | `./programs/zstd`                      |
|     new |  +775 | 0.0% → 0.3% |           0 → 775 | 0 → 1 | `0x0000000000008840` | `./programs/zstd`                      |
|   -0.1% |  -241 |       97.4% | 276,129 → 275,888 |     1 | `(below main)`       | `./programs/zstd`                      |
|   +0.5% |    +5 |        0.4% |     1,054 → 1,059 |     1 | `malloc`             | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|   +0.4% |    +5 |        0.4% |     1,212 → 1,217 |     1 | `ZSTD_createCCtx`    | `./lib/compress/zstd_compress.c`       |

##### `__libc_start_main@@GLIBC_2.34` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |      % |      Instructions | Calls | Caller                | Location                                           |
| -----: | ----: | -----: | ----------------: | ----: | --------------------- | -------------------------------------------------- |
|  -0.1% |  -241 | 100.0% | 275,441 → 275,200 |     1 | `_dl_runtime_resolve` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  -0.1% |  -241 |  99.9% | 275,296 → 275,055 |     1 | `__internal_atexit`   | `/usr/lib/aarch64-linux-gnu/libc.so.6`             |

##### `main` (`./programs/zstdcli.c`)

| Change | Delta |             % |      Instructions | Calls | Caller              | Location                               |
| -----: | ----: | ------------: | ----------------: | ----: | ------------------- | -------------------------------------- |
|  -0.1% |  -241 |         97.8% | 268,420 → 268,179 |     1 | `FIO_createContext` | `./programs/fileio.c`                  |
|  -0.1% |  -241 |        100.0% | 274,481 → 274,240 |     1 | `(below main)`      | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    ~0% |  -113 |         95.7% | 262,682 → 262,569 |     1 | `exeNameMatch`      | `./programs/zstdcli.c`                 |
|    ~0% |   -93 | 95.0% → 95.1% | 260,880 → 260,787 |     1 | `UTIL_isConsole`    | `./programs/util.c`                    |

##### `FIO_createPreferences` (`./programs/fileio.c`)

| Change | Delta |      % |      Instructions | Calls | Caller | Location               |
| -----: | ----: | -----: | ----------------: | ----: | ------ | ---------------------- |
|  -0.1% |  -241 | 100.0% | 271,657 → 271,416 |     1 | `main` | `./programs/zstdcli.c` |

##### `FIO_createContext` (`./programs/fileio.c`)

| Change | Delta |      % |      Instructions | Calls | Caller                  | Location              |
| -----: | ----: | -----: | ----------------: | ----: | ----------------------- | --------------------- |
|  -0.1% |  -241 | 100.0% | 269,326 → 269,085 |     1 | `FIO_createPreferences` | `./programs/fileio.c` |

##### `__cxa_atexit` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |      % |      Instructions | Calls | Caller                          | Location                               |
| -----: | ----: | -----: | ----------------: | ----: | ------------------------------- | -------------------------------------- |
|  -0.1% |  -241 | 100.0% | 275,425 → 275,184 |     1 | `__libc_start_main@@GLIBC_2.34` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__internal_atexit` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |      % |      Instructions | Calls | Caller         | Location                               |
| -----: | ----: | -----: | ----------------: | ----: | -------------- | -------------------------------------- |
|  -0.1% |  -241 | 100.0% | 275,422 → 275,181 |     1 | `__cxa_atexit` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `(below main)` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |      % |      Instructions | Calls | Caller                          | Location                               |
| -----: | ----: | -----: | ----------------: | ----: | ------------------------------- | -------------------------------------- |
|  -0.1% |  -241 | 100.0% | 274,544 → 274,303 |     1 | `__libc_start_main@@GLIBC_2.34` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `ZSTD_seqToCodes` (`./lib/compress/zstd_compress.c`)

| Change | Delta |      % |          Instructions | Calls | Caller                          | Location                         |
| -----: | ----: | -----: | --------------------: | ----: | ------------------------------- | -------------------------------- |
|    ~0% |  -231 | 100.0% | 2,594,708 → 2,594,477 |     8 | `ZSTD_buildSequencesStatistics` | `./lib/compress/zstd_compress.c` |

##### `UTIL_allocateFileNamesTable` (`./programs/util.c`)

| Change | Delta |                   % |      Instructions | Calls | Caller                        | Location               |
| -----: | ----: | ------------------: | ----------------: | ----: | ----------------------------- | ---------------------- |
|  -0.1% |  -242 | 14171.2% → 15117.8% | 267,978 → 267,736 |     1 | `UTIL_allocateFileNamesTable` | `./programs/util.c`    |
|  -0.1% |  -241 | 14194.1% → 15142.2% | 268,410 → 268,169 |     1 | `main`                        | `./programs/zstdcli.c` |

##### `FIO_compressFilename_srcFile` (`./programs/fileio.c`)

| Change | Delta |               % |      Instructions | Calls | Caller                                      | Location                         |
| -----: | ----: | --------------: | ----------------: | ----: | ------------------------------------------- | -------------------------------- |
|    ~0% |  -147 | 381.0% → 381.1% | 899,108 → 898,961 |     7 | `ZSTD_compressStream2`                      | `./lib/compress/zstd_compress.c` |
|    ~0% |   -98 |          100.0% | 235,987 → 235,889 |     1 | `FIO_createCResources`                      | `./programs/fileio.c`            |
|  -0.1% |   -60 |           29.2% |   68,991 → 68,931 |     3 | `AIO_WritePool_enqueueAndReacquireWriteJob` | `./programs/fileio_asyncio.c`    |
|    ~0% |   -25 |   92.9% → 93.0% | 219,348 → 219,323 |     1 | `UTIL_getFileSizeStat`                      | `./programs/util.c`              |

##### `UTIL_getFileSize` (`./programs/util.c`)

| Change | Delta |      % |      Instructions | Calls | Caller                 | Location              |
| -----: | ----: | -----: | ----------------: | ----: | ---------------------- | --------------------- |
|    ~0% |   -94 | 100.0% | 259,761 → 259,667 |     1 | `FIO_compressFilename` | `./programs/fileio.c` |

##### `FIO_createCResources` (`./programs/fileio.c`)

| Change | Delta |      % |      Instructions | Calls | Caller             | Location            |
| -----: | ----: | -----: | ----------------: | ----: | ------------------ | ------------------- |
|    ~0% |   -94 | 100.0% | 259,082 → 258,988 |     1 | `UTIL_getFileSize` | `./programs/util.c` |

##### `FIO_compressFilename` (`./programs/fileio.c`)

| Change | Delta |      % |      Instructions | Calls | Caller                         | Location              |
| -----: | ----: | -----: | ----------------: | ----: | ------------------------------ | --------------------- |
|    ~0% |   -94 | 100.3% | 260,550 → 260,456 |     1 | `FIO_determineHasStdinInput`   | `./programs/fileio.c` |
|    ~0% |    +2 |   5.3% |   13,756 → 13,758 |     1 | `FIO_compressFilename_srcFile` | `./programs/fileio.c` |

##### `_dl_start` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

| Change | Delta |               % |      Instructions | Calls | Caller         | Location                                           |
| -----: | ----: | --------------: | ----------------: | ----: | -------------- | -------------------------------------------------- |
|  +0.1% |  +275 | 118.7% → 118.8% | 431,897 → 432,172 |     5 | `_dl_start`    | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  -0.1% |  -186 |          100.0% | 363,936 → 363,750 |     1 | `(below main)` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `strcmp` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |             % | Instructions | Calls | Caller                         | Location                      |
| -----: | ----: | ------------: | -----------: | ----: | ------------------------------ | ----------------------------- |
| -54.3% |   -50 | 24.3% → 16.5% |      92 → 42 |     2 | `FIO_openSrcFile`              | `./programs/fileio.c`         |
| -28.4% |   -25 | 23.2% → 24.8% |      88 → 63 |     3 | `main`                         | `./programs/zstdcli.c`        |
| -54.3% |   -25 |  12.1% → 8.3% |      46 → 21 |     1 | `FIO_compressFilename_srcFile` | `./programs/fileio.c`         |
| -37.3% |   -25 | 17.7% → 16.5% |      67 → 42 |     2 | `AIO_ReadPool_setFile`         | `./programs/fileio_asyncio.c` |

##### `getenv` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change | Delta |            % | Instructions | Calls | Caller                        | Location            |
| ------: | ----: | -----------: | -----------: | ----: | ----------------------------- | ------------------- |
| removed |  -106 | 50.0% → 0.0% |      106 → 0 | 1 → 0 | `UTIL_allocateFileNamesTable` | `./programs/util.c` |

##### `__GI_memcpy` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |     % |      Instructions | Calls | Caller                          | Location                               |
| -----: | ----: | ----: | ----------------: | ----: | ------------------------------- | -------------------------------------- |
|    ~0% |   -32 | 88.1% | 161,300 → 161,268 |    10 | `ZSTDMT_compressStream_generic` | `./lib/compress/zstdmt_compress.c`     |
|  -4.6% |   -32 |  0.4% |         690 → 658 |     3 | `_IO_default_xsputn`            | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `new_do_write` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |             % |  Instructions | Calls | Caller                     | Location                               |
| -----: | ----: | ------------: | ------------: | ----: | -------------------------- | -------------------------------------- |
|  -2.0% |   -32 | 84.4% → 84.1% | 1,574 → 1,542 |     5 | `_IO_do_write@@GLIBC_2.17` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_IO_default_xsputn` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |               % | Instructions | Calls | Caller                        | Location                               |
| -----: | ----: | --------------: | -----------: | ----: | ----------------------------- | -------------------------------------- |
|  -3.8% |   -32 | 101.8% → 101.9% |    834 → 802 |     3 | `_IO_file_xsputn@@GLIBC_2.17` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_IO_do_write@@GLIBC_2.17` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |             % |  Instructions | Calls | Caller                          | Location                               |
| -----: | ----: | ------------: | ------------: | ----: | ------------------------------- | -------------------------------------- |
|  -2.2% |   -32 | 89.0% → 88.8% | 1,444 → 1,412 |     2 | `_IO_file_overflow@@GLIBC_2.17` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__GI_strlen` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |      % | Instructions | Calls | Caller   | Location                               |
| -----: | ----: | -----: | -----------: | ----: | -------- | -------------------------------------- |
| -50.0% |   -20 | 100.0% |      40 → 20 | 2 → 1 | `getenv` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__pthread_mutex_unlock_usercnt` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |      Delta |                       % |              Instructions | Calls | Caller                             | Location                               |
| -----: | ---------: | ----------------------: | ------------------------: | ----: | ---------------------------------- | -------------------------------------- |
|  +2.5% | +3,358,788 | 1609058.4% → 1650986.4% | 135,868,891 → 139,227,679 |   173 | `pthread_mutex_unlock@@GLIBC_2.17` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x000000000010c4e8` (`<unknown>`)

|  Change | Delta |             % | Instructions | Calls | Caller              | Location                               |
| ------: | ----: | ------------: | -----------: | ----: | ------------------- | -------------------------------------- |
| removed |   -10 | 100.0% → 0.0% |       10 → 0 | 1 → 0 | `__internal_atexit` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

#### Callees

Callees with the largest change in contribution to each function's total instructions. Inlining can make callee attribution imprecise, and for recursive calls, values and percentages can exceed the profile's total.

##### `ZSTD_compress_frameChunk` (`./lib/compress/zstd_compress.c`)

| Change |       Delta |              % |            Instructions | Calls | Callee                         | Location                         |
| -----: | ----------: | -------------: | ----------------------: | ----: | ------------------------------ | -------------------------------- |
|    new | +75,565,864 |  0.0% → 192.4% |          0 → 75,565,864 | 0 → 7 | `ZSTD_splitBlock`              | `./lib/compress/zstd_preSplit.c` |
| -78.8% | -73,112,476 | 242.1% → 50.2% | 92,838,852 → 19,726,376 | 8 → 1 | `ZSTD_compressBlock_internal`  | `./lib/compress/zstd_compress.c` |
|  +2.5% |    +925,823 |  98.0% → 98.1% | 37,593,868 → 38,519,691 |     2 | `ZSTD_compress_frameChunk`     | `./lib/compress/zstd_compress.c` |
| -87.5% |         -42 |          <0.1% |                  48 → 6 | 8 → 1 | `ZSTD_overflowCorrectIfNeeded` | `./lib/compress/zstd_compress.c` |

##### `ZSTDMT_compressionJob` (`./lib/compress/zstdmt_compress.c`)

| Change |      Delta |                      % |            Instructions | Calls | Callee                             | Location                               |
| -----: | ---------: | ---------------------: | ----------------------: | ----: | ---------------------------------- | -------------------------------------- |
|  +2.5% | +1,914,478 | 10280764.7% → 10527.9% | 77,516,966 → 79,431,444 |     3 | `pthread_mutex_unlock@@GLIBC_2.17` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +2.4% |   +925,844 |   5194640.2% → 5314.0% | 39,167,587 → 40,093,431 |     1 | `ZSTDMT_getBuffer`                 | `./lib/compress/zstdmt_compress.c`     |
|  +2.4% |   +925,823 |   5086037.3% → 5205.5% | 38,348,721 → 39,274,544 |     1 | `ZSTD_compressContinue_public`     | `./lib/compress/zstd_compress.c`       |
|    new |   +753,709 |           0.0% → 99.9% |             0 → 753,709 | 0 → 1 | `ZSTD_XXH64_update`                | `./lib/common/xxhash.h`                |
|  +0.4% |   +171,313 |   5194437.0% → 5213.8% | 39,166,055 → 39,337,368 |     1 | `ZSTD_CCtxParams_setParameter`     | `./lib/compress/zstd_compress.c`       |

##### `ZSTD_recordFingerprint_43` (`./lib/compress/zstd_preSplit.c`)

| Change |    Delta |            % | Instructions |   Calls | Callee                      | Location                               |
| -----: | -------: | -----------: | -----------: | ------: | --------------------------- | -------------------------------------- |
|    new | +613,655 | 0.0% → 98.3% |  0 → 613,655 |   0 → 7 | `ZSTD_recordFingerprint_43` | `./lib/compress/zstd_preSplit.c`       |
|    new |  +10,976 |  0.0% → 1.8% |   0 → 10,976 | 0 → 112 | `__GI_memset`               | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `ZSTD_compressEnd_public` (`./lib/compress/zstd_compress_internal.h`)

| Change |    Delta |      % |            Instructions | Calls | Callee                     | Location                         |
| -----: | -------: | -----: | ----------------------: | ----: | -------------------------- | -------------------------------- |
|  +2.8% | +518,717 | 100.0% | 18,651,550 → 19,170,267 |     1 | `ZSTD_compress_frameChunk` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_compressEnd_public` (`./lib/compress/zstd_compress.c`)

| Change |    Delta |      % |            Instructions | Calls | Callee                    | Location                                  |
| -----: | -------: | -----: | ----------------------: | ----: | ------------------------- | ----------------------------------------- |
|  +2.8% | +518,717 | 100.0% | 18,651,568 → 19,170,285 |     1 | `ZSTD_compressEnd_public` | `./lib/compress/zstd_compress_internal.h` |

##### `ZSTD_splitBlock` (`./lib/compress/zstd_preSplit.c`)

| Change |       Delta |               % |   Instructions | Calls | Callee                         | Location                               |
| -----: | ----------: | --------------: | -------------: | ----: | ------------------------------ | -------------------------------------- |
|    new | +74,936,672 | 0.0% → 16674.0% | 0 → 74,936,672 | 0 → 7 | `ZSTD_compressBlock_internal`  | `./lib/compress/zstd_compress.c`       |
|    new |    +624,008 |   0.0% → 138.8% |    0 → 624,008 | 0 → 7 | `ZSTD_recordFingerprint_43`    | `./lib/compress/zstd_preSplit.c`       |
|    new |      +4,606 |     0.0% → 1.0% |      0 → 4,606 | 0 → 7 | `__GI_memset`                  | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |         +42 |    0.0% → <0.1% |         0 → 42 | 0 → 7 | `ZSTD_overflowCorrectIfNeeded` | `./lib/compress/zstd_compress.c`       |

##### `ZSTD_compressContinue_public` (`./lib/compress/zstd_compress.c`)

| Change |    Delta |             % |            Instructions | Calls | Callee                            | Location                                  |
| -----: | -------: | ------------: | ----------------------: | ----: | --------------------------------- | ----------------------------------------- |
|  +2.8% | +518,717 | 94.7% → 95.4% | 18,652,248 → 19,170,965 |     1 | `pthread_cond_signal@@GLIBC_2.17` | `/usr/lib/aarch64-linux-gnu/libc.so.6`    |
|  +2.1% | +407,106 |        100.0% | 19,696,318 → 20,103,424 |     1 | `ZSTD_compressContinue_public`    | `./lib/compress/zstd_compress_internal.h` |
|  +2.1% | +407,106 |        100.0% | 19,696,277 → 20,103,383 |     1 | `ZSTD_compress_frameChunk`        | `./lib/compress/zstd_compress.c`          |

##### `ZSTD_compressContinue_public` (`./lib/compress/zstd_compress_internal.h`)

| Change |    Delta |      % |            Instructions | Calls | Callee                         | Location                         |
| -----: | -------: | -----: | ----------------------: | ----: | ------------------------------ | -------------------------------- |
|  +2.1% | +407,106 | 100.0% | 19,696,287 → 20,103,393 |     1 | `ZSTD_compressContinue_public` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_compressBlock_doubleFast` (`./lib/compress/zstd_compress_internal.h`)

| Change |          Delta |                     % |                      Instructions |             Calls | Callee                          | Location                                  |
| -----: | -------------: | --------------------: | --------------------------------: | ----------------: | ------------------------------- | ----------------------------------------- |
|  +1.5% | +2,316,860,179 | 755530.6% → 755733.5% | 151,432,182,725 → 153,749,042,904 | 122,208 → 122,214 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_double_fast.c`       |
|  +1.5% |       +301,189 |                100.0% |           20,042,901 → 20,344,090 |                 8 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_compress_internal.h` |

##### `ZSTD_buildSeqStore` (`./lib/compress/zstd_compress.c`)

| Change |    Delta |             % |            Instructions | Calls | Callee                          | Location                                  |
| -----: | -------: | ------------: | ----------------------: | ----: | ------------------------------- | ----------------------------------------- |
|  +1.5% | +301,173 |        100.0% | 20,043,888 → 20,345,061 |     8 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_double_fast.c`       |
|    ~0% |   -4,370 | 87.5% → 86.2% | 17,548,082 → 17,543,712 |     8 | `ZSTD_compressLiterals`         | `./lib/compress/zstd_compress_literals.c` |

##### `ZSTD_compressBlock_doubleFast` (`./lib/compress/zstd_double_fast.c`)

| Change |          Delta |                     % |                      Instructions |             Calls | Callee                          | Location                                  |
| -----: | -------------: | --------------------: | --------------------------------: | ----------------: | ------------------------------- | ----------------------------------------- |
|  +1.5% | +2,317,883,112 | 755544.6% → 755752.9% | 151,440,509,530 → 153,758,392,642 | 122,209 → 122,215 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_compress_internal.h` |
|  +1.4% |       +170,049 |         62.5% → 62.4% |           12,527,622 → 12,697,671 |                 9 | `ZSTD_compressBlock_doubleFast` | `./lib/common/mem.h`                      |

##### `0x0000000000008840` (`./programs/zstd`)

| Change | Delta |            % | Instructions | Calls | Callee                | Location                                           |
| -----: | ----: | -----------: | -----------: | ----: | --------------------- | -------------------------------------------------- |
|    new |  +775 | 0.0% → 94.3% |      0 → 775 | 0 → 1 | `_dl_runtime_resolve` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|    new |   +12 |  0.0% → 1.5% |       0 → 12 | 0 → 1 | `0x00000000000087d0`  | `./programs/zstd`                                  |

##### `HIST_countFast_wksp` (`./lib/compress/hist.c`)

| Change |  Delta |      % |          Instructions | Calls | Callee                     | Location                |
| -----: | -----: | -----: | --------------------: | ----: | -------------------------- | ----------------------- |
|    ~0% | +1,257 | 200.6% | 3,881,646 → 3,882,903 |    24 | `HIST_count_parallel_wksp` | `./lib/compress/hist.c` |

##### `ZSTD_buildCTable` (`./lib/compress/zstd_compress_sequences.c`)

| Change | Delta |      % |          Instructions | Calls | Callee                | Location                        |
| -----: | ----: | -----: | --------------------: | ----: | --------------------- | ------------------------------- |
|    ~0% |  +769 | 141.4% | 1,946,432 → 1,947,201 |    16 | `HIST_countFast_wksp` | `./lib/compress/hist.c`         |
|  +0.1% |  +353 |  18.7% |     257,596 → 257,949 |    24 | `FSE_normalizeCount`  | `./lib/compress/fse_compress.c` |

##### `ZSTD_encodeSequences` (`./lib/common/mem.h`)

| Change | Delta |      % |            Instructions | Calls | Callee                 | Location                   |
| -----: | ----: | -----: | ----------------------: | ----: | ---------------------- | -------------------------- |
|    ~0% |  +396 | 100.0% | 12,117,184 → 12,117,580 |     8 | `ZSTD_encodeSequences` | `./lib/common/bitstream.h` |

##### `ZSTD_encodeSequences` (`./lib/common/bitstream.h`)

| Change | Delta |      % |            Instructions | Calls | Callee                 | Location                   |
| -----: | ----: | -----: | ----------------------: | ----: | ---------------------- | -------------------------- |
|    ~0% |  +396 | 100.0% | 12,116,392 → 12,116,788 |     8 | `ZSTD_encodeSequences` | `./lib/common/bitstream.h` |

##### `ZSTD_encodeSequences` (`./lib/compress/zstd_compress_sequences.c`)

| Change | Delta |      % |            Instructions | Calls | Callee                 | Location             |
| -----: | ----: | -----: | ----------------------: | ----: | ---------------------- | -------------------- |
|    ~0% |  +396 | 100.0% | 12,118,064 → 12,118,460 |     8 | `ZSTD_encodeSequences` | `./lib/common/mem.h` |

##### `ZSTD_buildSequencesStatistics` (`./lib/compress/zstd_compress.c`)

| Change | Delta |      % |            Instructions | Calls | Callee                 | Location                                   |
| -----: | ----: | -----: | ----------------------: | ----: | ---------------------- | ------------------------------------------ |
|    ~0% |  +488 |  42.7% |   1,935,430 → 1,935,918 |     8 | `HIST_countFast_wksp`  | `./lib/compress/hist.c`                    |
|    ~0% |  +396 | 267.5% | 12,119,408 → 12,119,804 |     8 | `ZSTD_encodeSequences` | `./lib/compress/zstd_compress_sequences.c` |
|    ~0% |  -231 |  57.3% |   2,594,708 → 2,594,477 |     8 | `ZSTD_seqToCodes`      | `./lib/compress/zstd_compress.c`           |

##### `ZSTD_checkCParams` (`./lib/compress/zstd_compress.c`)

| Change | Delta |            % | Instructions | Calls | Callee                  | Location                         |
| -----: | ----: | -----------: | -----------: | ----: | ----------------------- | -------------------------------- |
|    new |  +175 | 0.0% → 69.7% |      0 → 175 | 0 → 7 | `ZSTD_cParam_getBounds` | `./lib/compress/zstd_compress.c` |

##### `HUF_buildCTable_wksp` (`./lib/compress/huf_compress.c`)

| Change |  Delta |               % |      Instructions |  Calls | Callee                 | Location                        |
| -----: | -----: | --------------: | ----------------: | -----: | ---------------------- | ------------------------------- |
| -11.7% | -6,864 |   52.6% → 46.3% |   58,418 → 51,554 | 9 → 10 | `HUF_simpleQuickSort`  | `./lib/compress/huf_compress.c` |
|  -0.6% | -3,125 | 435.7% → 432.1% | 484,203 → 481,078 |      8 | `HUF_writeCTable_wksp` | `./lib/compress/huf_compress.c` |
|  +0.2% |   +219 |           96.6% | 107,333 → 107,552 |      8 | `HUF_buildCTable_wksp` | `./lib/compress/huf_compress.c` |

##### `_dl_sysdep_start` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

| Change | Delta |     % |    Instructions | Calls | Callee                 | Location                                           |
| -----: | ----: | ----: | --------------: | ----: | ---------------------- | -------------------------------------------------- |
|  +0.1% |   +55 | 99.7% | 85,718 → 85,773 |     1 | `__GI___tunables_init` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +0.1% |   +55 | 93.9% | 80,782 → 80,837 |     1 | `dl_main`              | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `dl_main` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

| Change | Delta |             % |      Instructions | Calls | Callee                | Location                                           |
| -----: | ----: | ------------: | ----------------: | ----: | --------------------- | -------------------------------------------------- |
|  +0.1% |  +220 |        395.4% | 319,389 → 319,609 |     4 | `dl_main`             | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +0.1% |   +55 |         99.6% |   80,426 → 80,481 |     1 | `_dl_new_object`      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +0.1% |   +55 |         98.3% |   79,403 → 79,458 |     1 | `_dl_init_paths`      | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +0.1% |   +55 |         95.5% |   77,107 → 77,162 |     1 | `handle_preload_list` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +0.1% |   +42 | 92.3% → 92.2% |   74,530 → 74,572 |     1 | `_dl_map_object_deps` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `__GI___tunables_init` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

| Change | Delta |     % |    Instructions | Calls | Callee             | Location                                           |
| -----: | ----: | ----: | --------------: | ----: | ------------------ | -------------------------------------------------- |
|  +0.1% |   +55 | 94.4% | 80,883 → 80,938 |     1 | `_dl_sysdep_start` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `_dl_relocate_object` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

| Change | Delta |                 % |      Instructions | Calls | Callee                | Location                                           |
| -----: | ----: | ----------------: | ----------------: | ----: | --------------------- | -------------------------------------------------- |
|    ~0% |   +56 | 1548.0% → 1544.3% | 246,654 → 246,710 |    19 | `_dl_relocate_object` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +0.2% |   +42 |            129.9% |   20,706 → 20,748 |     1 | `_dl_add_to_slotinfo` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|    ~0% |   +14 |   913.2% → 910.9% | 145,512 → 145,526 |    10 | `_dl_lookup_symbol_x` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `handle_preload_list` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

| Change | Delta |                 % |    Instructions | Calls | Callee                | Location                                           |
| -----: | ----: | ----------------: | --------------: | ----: | --------------------- | -------------------------------------------------- |
|  +0.1% |   +42 | 2952.5% → 2939.1% | 74,581 → 74,623 |     1 | `dl_main`             | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +0.5% |   +13 |             99.1% |   2,503 → 2,516 |     1 | `handle_preload_list` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +6.1% |   +13 |       8.5% → 8.9% |       214 → 227 |     1 | `strcspn`             | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `0x000000000010c580` (`<unknown>`)

| Change | Delta |            % | Instructions | Calls | Callee         | Location          |
| -----: | ----: | -----------: | -----------: | ----: | -------------- | ----------------- |
|    new |    +4 | 0.0% → 40.0% |        0 → 4 | 0 → 1 | `call_weak_fn` | `./programs/zstd` |

##### `malloc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |     % |    Instructions | Calls | Callee                        | Location                                           |
| -----: | ----: | ----: | --------------: | ----: | ----------------------------- | -------------------------------------------------- |
|  +8.1% |    +8 |  0.2% |        99 → 107 |     1 | `ZSTDMT_initCStream_internal` | `./lib/compress/zstdmt_compress.c`                 |
|  +0.5% |    +5 |  1.6% |   1,054 → 1,059 |     1 | `_dl_runtime_resolve`         | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|    ~0% |    +4 | 95.9% | 61,786 → 61,790 |     1 | `ZSTD_resetCCtx_internal`     | `./lib/compress/zstd_cwksp.h`                      |
|  -3.3% |    -1 | <0.1% |         30 → 29 |     1 | `ZSTD_freeCDict`              | `./lib/compress/zstd_compress.c`                   |

##### `calloc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |             % |  Instructions | Calls | Callee                     | Location                         |
| -----: | ----: | ------------: | ------------: | ----: | -------------------------- | -------------------------------- |
|  +0.3% |    +4 | 56.1% → 56.2% | 1,342 → 1,346 |     1 | `ZSTD_createCCtx_advanced` | `./lib/compress/zstd_compress.c` |

##### `HUF_compress_internal` (`./lib/compress/huf_compress.c`)

| Change |  Delta |     % |      Instructions | Calls | Callee                               | Location                        |
| -----: | -----: | ----: | ----------------: | ----: | ------------------------------------ | ------------------------------- |
|  -0.6% | -5,023 | 99.9% | 894,080 → 889,057 |     8 | `HIST_count_wksp`                    | `./lib/compress/hist.c`         |
|  -0.6% | -2,841 | 49.3% | 441,339 → 438,498 |     7 | `HUF_buildCTable_wksp`               | `./lib/compress/huf_compress.c` |
|  -0.6% | -2,062 | 40.0% | 357,705 → 355,643 |     6 | `HUF_compressCTable_internal.isra.0` | `./lib/compress/huf_compress.c` |

##### `HUF_compress4X_repeat` (`./lib/compress/huf_compress.c`)

| Change |  Delta |      % |      Instructions | Calls | Callee                  | Location                        |
| -----: | -----: | -----: | ----------------: | ----: | ----------------------- | ------------------------------- |
|  -0.6% | -5,023 | 100.0% | 894,608 → 889,585 |     8 | `HUF_compress_internal` | `./lib/compress/huf_compress.c` |

##### `ZSTD_compressLiterals` (`./lib/compress/zstd_compress_literals.c`)

| Change |  Delta |                 % |            Instructions | Calls | Callee                        | Location                                  |
| -----: | -----: | ----------------: | ----------------------: | ----: | ----------------------------- | ----------------------------------------- |
|  -0.6% | -5,023 |             99.7% |       895,016 → 889,993 |     8 | `HUF_compress4X_repeat`       | `./lib/compress/huf_compress.c`           |
|  -0.6% | -5,023 |             99.7% |       895,240 → 890,217 |     8 | `ZSTD_compressLiterals`       | `./lib/compress/zstd_compress_literals.c` |
|    ~0% |   +653 | 1854.3% → 1864.8% | 16,650,162 → 16,650,815 |     8 | `ZSTD_compressBlock_internal` | `./lib/compress/zstd_compress.c`          |

##### `HIST_count_wksp` (`./lib/compress/hist.c`)

| Change |  Delta |      % |      Instructions | Calls | Callee                     | Location                |
| -----: | -----: | -----: | ----------------: | ----: | -------------------------- | ----------------------- |
|  -0.6% | -5,023 | 100.0% | 893,896 → 888,873 |     8 | `HIST_count_parallel_wksp` | `./lib/compress/hist.c` |

##### `HIST_count_parallel_wksp` (`./lib/compress/hist.c`)

| Change |  Delta |             % |          Instructions | Calls | Callee                  | Location                                   |
| -----: | -----: | ------------: | --------------------: | ----: | ----------------------- | ------------------------------------------ |
|  -0.6% | -2,841 | 15.6% → 15.5% |     441,661 → 438,820 |     7 | `HUF_compress_internal` | `./lib/compress/huf_compress.c`            |
|  +0.1% | +1,122 | 78.0% → 78.1% | 2,205,964 → 2,207,086 |    24 | `ZSTD_buildCTable`      | `./lib/compress/zstd_compress_sequences.c` |
|    ~0% |    -65 |          5.4% |     153,989 → 153,924 |     1 | `HUF_buildCTable_wksp`  | `./lib/compress/huf_compress.c`            |

##### `HUF_compressCTable_internal.isra.0` (`./lib/compress/huf_compress.c`)

| Change |  Delta |     % |      Instructions | Calls | Callee                                            | Location                        |
| -----: | -----: | ----: | ----------------: | ----: | ------------------------------------------------- | ------------------------------- |
|  -0.7% | -3,124 | 99.9% | 428,768 → 425,644 |     8 | `HUF_compress1X_usingCTable_internal.constprop.0` | `./lib/compress/huf_compress.c` |

##### `HUF_compress1X_usingCTable_internal.constprop.0` (`./lib/compress/huf_compress.c`)

| Change |  Delta |     % |      Instructions | Calls | Callee                                            | Location                        |
| -----: | -----: | ----: | ----------------: | ----: | ------------------------------------------------- | ------------------------------- |
|  -0.7% | -2,353 | 75.0% | 321,697 → 319,344 |    16 | `HUF_compress1X_usingCTable_internal.constprop.0` | `./lib/compress/huf_compress.c` |

##### `0x0000000000008740` (`./programs/zstd`)

|  Change | Delta |            % | Instructions | Calls | Callee                | Location                                           |
| ------: | ----: | -----------: | -----------: | ----: | --------------------- | -------------------------------------------------- |
| removed |  -775 | 94.3% → 0.0% |      775 → 0 | 1 → 0 | `_dl_runtime_resolve` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
| removed |   -12 |  1.5% → 0.0% |       12 → 0 | 1 → 0 | `0x00000000000086d0`  | `./programs/zstd`                                  |

##### `HUF_simpleQuickSort` (`./lib/compress/huf_compress.c`)

| Change |  Delta |               % |    Instructions |   Calls | Callee                 | Location                        |
| -----: | -----: | --------------: | --------------: | ------: | ---------------------- | ------------------------------- |
| -12.4% | -6,044 | 496.6% → 474.6% | 48,626 → 42,582 |   7 → 6 | `HUF_buildCTable_wksp` | `./lib/compress/huf_compress.c` |
|  +0.1% |    +31 | 441.3% → 482.0% | 43,216 → 43,247 | 17 → 15 | `HUF_simpleQuickSort`  | `./lib/compress/huf_compress.c` |

##### `_dl_init` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

| Change | Delta |     % |      Instructions | Calls | Callee         | Location          |
| -----: | ----: | ----: | ----------------: | ----: | -------------- | ----------------- |
|  -0.1% |  -241 | 99.6% | 276,150 → 275,909 |     1 | `(below main)` | `./programs/zstd` |

##### `(below main)` (`./programs/zstd`)

| Change | Delta |      % |      Instructions | Calls | Callee                | Location                                           |
| -----: | ----: | -----: | ----------------: | ----: | --------------------- | -------------------------------------------------- |
|  -0.1% |  -241 | 100.0% | 276,129 → 275,888 |     1 | `_dl_runtime_resolve` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `_dl_runtime_resolve` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

| Change | Delta |     % |      Instructions | Calls | Callee                          | Location                               |
| -----: | ----: | ----: | ----------------: | ----: | ------------------------------- | -------------------------------------- |
|  -0.1% |  -241 | 97.1% | 275,441 → 275,200 |     1 | `__libc_start_main@@GLIBC_2.34` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +1.2% |    +5 |  0.2% |         428 → 433 |     1 | `__GI_memset`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +0.8% |    +5 |  0.2% |         627 → 632 |     1 | `calloc`                        | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__libc_start_main@@GLIBC_2.34` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change | Delta |            % |      Instructions | Calls | Callee               | Location                               |
| ------: | ----: | -----------: | ----------------: | ----: | -------------------- | -------------------------------------- |
|   -0.1% |  -241 |       100.0% | 275,425 → 275,184 |     1 | `__cxa_atexit`       | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|   -0.1% |  -241 |        99.7% | 274,544 → 274,303 |     1 | `(below main)`       | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -11 | <0.1% → 0.0% |            11 → 0 | 1 → 0 | `0x0000000000008790` | `./programs/zstd`                      |
|     new |   +11 | 0.0% → <0.1% |            0 → 11 | 0 → 1 | `0x0000000000008890` | `./programs/zstd`                      |

##### `main` (`./programs/zstdcli.c`)

| Change | Delta |             % |      Instructions | Calls | Callee                        | Location                               |
| -----: | ----: | ------------: | ----------------: | ----: | ----------------------------- | -------------------------------------- |
|  -0.1% |  -241 |         97.8% | 268,410 → 268,169 |     1 | `UTIL_allocateFileNamesTable` | `./programs/util.c`                    |
|  -0.1% |  -241 |         99.0% | 271,657 → 271,416 |     1 | `FIO_createPreferences`       | `./programs/fileio.c`                  |
|    ~0% |   -93 | 95.0% → 95.1% | 260,857 → 260,764 |     1 | `FIO_determineHasStdinInput`  | `./programs/fileio.c`                  |
|    ~0% |   -93 | 95.5% → 95.6% | 262,193 → 262,100 |     1 | `UTIL_isConsole`              | `./programs/util.c`                    |
| -28.4% |   -25 |         <0.1% |           88 → 63 |     3 | `strcmp`                      | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `FIO_createPreferences` (`./programs/fileio.c`)

| Change | Delta |     % |      Instructions | Calls | Callee              | Location              |
| -----: | ----: | ----: | ----------------: | ----: | ------------------- | --------------------- |
|  -0.1% |  -241 | 99.1% | 269,326 → 269,085 |     1 | `FIO_createContext` | `./programs/fileio.c` |

##### `FIO_createContext` (`./programs/fileio.c`)

| Change | Delta |     % |      Instructions | Calls | Callee | Location               |
| -----: | ----: | ----: | ----------------: | ----: | ------ | ---------------------- |
|  -0.1% |  -241 | 99.7% | 268,420 → 268,179 |     1 | `main` | `./programs/zstdcli.c` |

##### `__cxa_atexit` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |      % |      Instructions | Calls | Callee              | Location                               |
| -----: | ----: | -----: | ----------------: | ----: | ------------------- | -------------------------------------- |
|  -0.1% |  -241 | 100.0% | 275,422 → 275,181 |     1 | `__internal_atexit` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__internal_atexit` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change | Delta |            % |      Instructions | Calls | Callee                          | Location                               |
| ------: | ----: | -----------: | ----------------: | ----: | ------------------------------- | -------------------------------------- |
|   -0.1% |  -241 |       100.0% | 275,296 → 275,055 |     1 | `__libc_start_main@@GLIBC_2.34` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |   -10 | <0.1% → 0.0% |            10 → 0 | 1 → 0 | `0x000000000010c4e8`            | `<unknown>`                            |
|     new |   +10 | 0.0% → <0.1% |            0 → 10 | 0 → 1 | `0x000000000010c580`            | `<unknown>`                            |

##### `(below main)` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |      % |      Instructions | Calls | Callee | Location               |
| -----: | ----: | -----: | ----------------: | ----: | ------ | ---------------------- |
|  -0.1% |  -241 | 100.0% | 274,481 → 274,240 |     1 | `main` | `./programs/zstdcli.c` |

##### `ZSTD_seqToCodes` (`./lib/compress/zstd_compress.c`)

| Change | Delta |     % |          Instructions | Calls | Callee            | Location                                  |
| -----: | ----: | ----: | --------------------: | ----: | ----------------- | ----------------------------------------- |
|    ~0% |  -279 | 52.8% | 1,370,282 → 1,370,003 |     8 | `ZSTD_seqToCodes` | `./lib/compress/zstd_compress_internal.h` |

##### `UTIL_allocateFileNamesTable` (`./programs/util.c`)

|  Change | Delta |                   % |      Instructions | Calls | Callee                        | Location                               |
| ------: | ----: | ------------------: | ----------------: | ----: | ----------------------------- | -------------------------------------- |
|   -0.1% |  -242 | 14171.2% → 15117.8% | 267,978 → 267,736 |     1 | `UTIL_allocateFileNamesTable` | `./programs/util.c`                    |
|     ~0% |  -122 | 14071.2% → 15017.8% | 266,087 → 265,965 |     1 | `exeNameMatch`                | `./programs/zstdcli.c`                 |
| removed |  -106 |         5.6% → 0.0% |           106 → 0 | 1 → 0 | `getenv`                      | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `FIO_compressFilename_srcFile` (`./programs/fileio.c`)

| Change | Delta |               % |          Instructions | Calls | Callee                    | Location                               |
| -----: | ----: | --------------: | --------------------: | ----: | ------------------------- | -------------------------------------- |
|    ~0% |  -148 | 468.8% → 468.9% | 1,106,278 → 1,106,130 |     8 | `AIO_ReadPool_fillBuffer` | `./programs/fileio_asyncio.c`          |
|    ~0% |   -75 |           93.9% |     221,565 → 221,490 |     1 | `UTIL_stat`               | `./programs/util.c`                    |
|  -0.1% |   -60 |   26.1% → 26.0% |       61,479 → 61,419 |     2 | `ZSTD_toFlushNow`         | `./lib/compress/zstd_compress.c`       |
|    ~0% |   -25 |   92.9% → 93.0% |     219,308 → 219,283 |     1 | `AIO_ReadPool_setFile`    | `./programs/fileio_asyncio.c`          |
| -54.3% |   -25 |           <0.1% |               46 → 21 |     1 | `strcmp`                  | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `UTIL_getFileSize` (`./programs/util.c`)

| Change | Delta |     % |      Instructions | Calls | Callee                 | Location              |
| -----: | ----: | ----: | ----------------: | ----: | ---------------------- | --------------------- |
|    ~0% |   -94 | 99.7% | 259,082 → 258,988 |     1 | `FIO_createCResources` | `./programs/fileio.c` |

##### `FIO_createCResources` (`./programs/fileio.c`)

| Change | Delta |     % |      Instructions | Calls | Callee                         | Location                         |
| -----: | ----: | ----: | ----------------: | ----: | ------------------------------ | -------------------------------- |
|    ~0% |   -98 | 91.1% | 235,987 → 235,889 |     1 | `FIO_compressFilename_srcFile` | `./programs/fileio.c`            |
|    ~0% |    +4 |  8.9% |   23,042 → 23,046 |     1 | `ZSTD_createCCtx`              | `./lib/compress/zstd_compress.c` |

##### `FIO_compressFilename` (`./programs/fileio.c`)

| Change | Delta |      % |      Instructions | Calls | Callee               | Location                      |
| -----: | ----: | -----: | ----------------: | ----: | -------------------- | ----------------------------- |
|    ~0% |   -94 | 100.0% | 259,761 → 259,667 |     1 | `UTIL_getFileSize`   | `./programs/util.c`           |
|    ~0% |    +2 |   5.3% |   13,754 → 13,756 |     1 | `AIO_WritePool_free` | `./programs/fileio_asyncio.c` |

##### `_dl_start` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

| Change | Delta |               % |      Instructions | Calls | Callee             | Location                                           |
| -----: | ----: | --------------: | ----------------: | ----: | ------------------ | -------------------------------------------------- |
|  +0.1% |  +275 | 118.7% → 118.8% | 431,897 → 432,172 |     5 | `_dl_start`        | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  -0.1% |  -241 |   76.2% → 76.1% | 277,173 → 276,932 |     1 | `_dl_init`         | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |
|  +0.1% |   +55 |   23.6% → 23.7% |   86,003 → 86,058 |     1 | `_dl_sysdep_start` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `(below main)` (`/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1`)

| Change | Delta |      % |      Instructions | Calls | Callee      | Location                                           |
| -----: | ----: | -----: | ----------------: | ----: | ----------- | -------------------------------------------------- |
|  -0.1% |  -186 | 100.0% | 363,936 → 363,750 |     1 | `_dl_start` | `/usr/lib/aarch64-linux-gnu/ld-linux-aarch64.so.1` |

##### `getenv` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |     % | Instructions | Calls | Callee        | Location                               |
| -----: | ----: | ----: | -----------: | ----: | ------------- | -------------------------------------- |
| -50.0% |   -20 | 18.9% |      40 → 20 | 2 → 1 | `__GI_strlen` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `new_do_write` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |             % | Instructions | Calls | Callee                        | Location                               |
| -----: | ----: | ------------: | -----------: | ----: | ----------------------------- | -------------------------------------- |
|  -3.8% |   -32 | 45.5% → 44.5% |    849 → 817 |     3 | `_IO_file_xsputn@@GLIBC_2.17` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_IO_default_xsputn` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |             % | Instructions | Calls | Callee        | Location                               |
| -----: | ----: | ------------: | -----------: | ----: | ------------- | -------------------------------------- |
|  -4.6% |   -32 | 84.2% → 83.6% |    690 → 658 |     3 | `__GI_memcpy` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_IO_do_write@@GLIBC_2.17` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change | Delta |     % |  Instructions | Calls | Callee         | Location                               |
| -----: | ----: | ----: | ------------: | ----: | -------------- | -------------------------------------- |
|  -2.0% |   -32 | 97.0% | 1,574 → 1,542 |     5 | `new_do_write` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__pthread_mutex_unlock_usercnt` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |      Delta |                       % |              Instructions | Calls | Callee                             | Location                               |
| -----: | ---------: | ----------------------: | ------------------------: | ----: | ---------------------------------- | -------------------------------------- |
|  +2.4% | +2,840,330 | 1381864.9% → 1417348.5% | 116,684,673 → 119,525,003 |     3 | `ZSTDMT_compressionJob`            | `./lib/compress/zstdmt_compress.c`     |
|  +2.8% |   +518,717 |   220890.7% → 227329.9% |   18,652,011 → 19,170,728 |     1 | `ZSTD_compressEnd_public`          | `./lib/compress/zstd_compress.c`       |
|  -0.8% |        -96 |         139.6% → 138.6% |           11,787 → 11,691 |     3 | `AIO_WritePool_executeWriteJob`    | `./programs/fileio_asyncio.c`          |
|  -0.1% |        -64 |         754.9% → 755.1% |           63,743 → 63,679 |    31 | `pthread_mutex_unlock@@GLIBC_2.17` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -0.1% |        -64 |       1372.4% → 1373.4% |         115,886 → 115,822 |    21 | `POOL_thread`                      | `./lib/common/pool.c`                  |

##### `0x000000000010c4e8` (`<unknown>`)

|  Change | Delta |            % | Instructions | Calls | Callee         | Location          |
| ------: | ----: | -----------: | -----------: | ----: | -------------- | ----------------- |
| removed |    -4 | 40.0% → 0.0% |        4 → 0 | 1 → 0 | `call_weak_fn` | `./programs/zstd` |

# Instruction profile diff

Recorded 39,557,650 → 40,483,273 instructions (+925,623 instructions, +2.3%).

| Category | Change |    Delta |      % |            Instructions |
| -------- | -----: | -------: | -----: | ----------------------: |
| Ours     |  +2.3% | +925,623 | 100.0% | 39,550,183 → 40,475,806 |
| Native   |   0.0% |        0 |  <0.1% |                   7,467 |

Paths starting with `./` or `../` are relative to `/src/zstd/`.

## Hottest functions

### Self instructions

#### Regressions

Functions with the largest increase in instructions recorded within the function body, excluding callees. Categories account for at least 1.0% of self instructions on the base or the current side.

##### Ours

| Change |      Delta |             % |            Instructions | Function                        | Location                                  |
| -----: | ---------: | ------------: | ----------------------: | ------------------------------- | ----------------------------------------- |
| +12.3% | +1,022,933 | 21.0% → 23.1% |   8,326,805 → 9,349,738 | `ZSTD_compressBlock_doubleFast` | `./lib/compress/zstd_compress_internal.h` |
|    new |   +613,032 |   0.0% → 1.5% |             0 → 613,032 | `ZSTD_recordFingerprint_43`     | `./lib/compress/zstd_preSplit.c`          |
| +20.4% |    +15,587 |          0.2% |         76,590 → 92,177 | `__GI_memset`                   | `sysdeps/aarch64/memset.S`                |
|  +1.1% |     +1,039 |          0.2% |         98,005 → 99,044 | `HUF_buildCTable_wksp`          | `./lib/compress/huf_compress.c`           |
|    new |       +536 |  0.0% → <0.1% |                 0 → 536 | `ZSTD_splitBlock`               | `./lib/compress/zstd_preSplit.c`          |
|    ~0% |       +396 | 30.6% → 29.9% | 12,117,184 → 12,117,580 | `ZSTD_encodeSequences`          | `./lib/common/bitstream.h`                |
|  +0.1% |       +141 |          0.6% |       224,938 → 225,079 | `FSE_buildCTable_wksp`          | `./lib/compress/fse_compress.c`           |
|  +0.6% |       +141 |          0.1% |         24,175 → 24,316 | `FSE_writeNCount_generic`       | `./lib/compress/fse_compress.c`           |
|    new |        +76 |  0.0% → <0.1% |                  0 → 76 | `ZSTD_checkCParams`             | `./lib/compress/zstd_compress.c`          |
|  +0.4% |        +70 |         <0.1% |         16,343 → 16,413 | `FSE_normalizeCount`            | `./lib/compress/fse_compress.c`           |
|    ~0% |        +48 |   3.1% → 3.0% |   1,224,426 → 1,224,474 | `ZSTD_seqToCodes`               | `./lib/compress/zstd_compress.c`          |
|    new |        +35 |  0.0% → <0.1% |                  0 → 35 | `0x0000000000008840`            | `./programs/zstd`                         |
|  +0.2% |        +28 |         <0.1% |         12,356 → 12,384 | `_dl_relocate_object`           | `sysdeps/generic/ldsodefs.h`              |
|  +6.0% |        +22 |         <0.1% |               366 → 388 | `ZSTD_cParam_getBounds`         | `./lib/compress/zstd_compress.c`          |
|  +1.3% |        +21 |         <0.1% |           1,557 → 1,578 | `ZSTDMT_compressStream_generic` | `./lib/compress/zstdmt_compress.c`        |
| +13.3% |        +17 |         <0.1% |               128 → 145 | `ZSTDMT_compressionJob`         | `./lib/compress/zstdmt_compress.c`        |
|  +0.6% |        +14 |         <0.1% |           2,523 → 2,537 | `_dl_relocate_object`           | `elf/elf/do-rel.h`                        |
|  +6.1% |        +13 |         <0.1% |               214 → 227 | `strcspn`                       | `string/string/strcspn.c`                 |
|    new |        +10 |  0.0% → <0.1% |                  0 → 10 | `0x0000000000008800`            | `./programs/zstd`                         |
|  +0.6% |         +8 |         <0.1% |           1,257 → 1,265 | `ZSTD_buildSeqStore`            | `./lib/compress/zstd_compress.c`          |

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
|   -1.1% |     -125 |         <0.1% |         11,871 → 11,746 | `strcmp`                                          | `sysdeps/aarch64/strcmp.S`                |
|  -50.0% |      -86 |         <0.1% |                172 → 86 | `getenv`                                          | `stdlib/stdlib/getenv.c`                  |
|  -62.2% |      -79 |         <0.1% |                127 → 48 | `ZSTD_compressBegin_advanced_internal`            | `./lib/compress/zstd_compress.c`          |
|     ~0% |      -64 |          0.5% |       183,023 → 182,959 | `__GI_memcpy`                                     | `sysdeps/aarch64/memcpy.S`                |
| removed |      -35 |  <0.1% → 0.0% |                  35 → 0 | `0x0000000000008740`                              | `./programs/zstd`                         |
|  -50.0% |      -20 |         <0.1% |                 40 → 20 | `__GI_strlen`                                     | `sysdeps/aarch64/strlen.S`                |
|  -10.1% |      -13 |         <0.1% |               129 → 116 | `UTIL_allocateFileNamesTable`                     | `./programs/util.c`                       |
|   -0.1% |      -11 |         <0.1% |           8,444 → 8,433 | `__pthread_mutex_unlock_usercnt`                  | `nptl/nptl/pthread_mutex_unlock.c`        |
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
|   -1.1% |     -125 |         <0.1% |         11,871 → 11,746 | `strcmp`                                          | `sysdeps/aarch64/strcmp.S`                |
|  -50.0% |      -86 |         <0.1% |                172 → 86 | `getenv`                                          | `stdlib/stdlib/getenv.c`                  |
|  -62.2% |      -79 |         <0.1% |                127 → 48 | `ZSTD_compressBegin_advanced_internal`            | `./lib/compress/zstd_compress.c`          |
|     ~0% |      -64 |          0.5% |       183,023 → 182,959 | `__GI_memcpy`                                     | `sysdeps/aarch64/memcpy.S`                |
| removed |      -35 |  <0.1% → 0.0% |                  35 → 0 | `0x0000000000008740`                              | `./programs/zstd`                         |
|  -50.0% |      -20 |         <0.1% |                 40 → 20 | `__GI_strlen`                                     | `sysdeps/aarch64/strlen.S`                |
|  -10.1% |      -13 |         <0.1% |               129 → 116 | `UTIL_allocateFileNamesTable`                     | `./programs/util.c`                       |
|   -0.1% |      -11 |         <0.1% |           8,444 → 8,433 | `__pthread_mutex_unlock_usercnt`                  | `nptl/nptl/pthread_mutex_unlock.c`        |
| removed |      -10 |  <0.1% → 0.0% |                  10 → 0 | `0x0000000000008700`                              | `./programs/zstd`                         |
|   -2.6% |       -9 |         <0.1% |               351 → 342 | `ZSTD_compressBlock_doubleFast`                   | `./lib/common/mem.h`                      |
|   -1.8% |       -9 |         <0.1% |               500 → 491 | `exeNameMatch`                                    | `./programs/zstdcli.c`                    |
| removed |       -7 |  <0.1% → 0.0% |                   7 → 0 | `0x00000000000086d0`                              | `./programs/zstd`                         |
| removed |       -5 |  <0.1% → 0.0% |                   5 → 0 | `0x0000000000008774`                              | `./programs/zstd`                         |
|   -2.4% |       -2 |         <0.1% |                 83 → 81 | `ZSTDMT_createCCtx_advanced`                      | `./lib/compress/zstdmt_compress.c`        |

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

##### `__GI_memset` (`sysdeps/aarch64/memset.S`)

| Change |  Delta |             % |    Instructions | Location                       |
| -----: | -----: | ------------: | --------------: | ------------------------------ |
| +17.1% | +2,570 | 19.6% → 19.1% | 15,041 → 17,611 | `sysdeps/aarch64/memset.S:131` |
| +17.1% | +2,570 | 19.6% → 19.1% | 15,041 → 17,611 | `sysdeps/aarch64/memset.S:132` |
| +17.1% | +2,570 | 19.6% → 19.1% | 15,041 → 17,611 | `sysdeps/aarch64/memset.S:133` |
| +17.1% | +2,570 | 19.6% → 19.1% | 15,041 → 17,611 | `sysdeps/aarch64/memset.S:134` |
| +17.1% | +2,570 | 19.6% → 19.1% | 15,041 → 17,611 | `sysdeps/aarch64/memset.S:135` |

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

##### `_dl_relocate_object` (`elf/elf/do-rel.h`)

| Change | Delta |     % | Instructions | Location              |
| -----: | ----: | ----: | -----------: | --------------------- |
|  +0.9% |    +3 | 13.0% |    327 → 330 | `elf/elf/do-rel.h:83` |

##### `strcspn` (`string/string/strcspn.c`)

| Change | Delta |             % | Instructions | Location                     |
| -----: | ----: | ------------: | -----------: | ---------------------------- |
|  +8.3% |    +7 | 39.3% → 40.1% |      84 → 91 | `string/string/strcspn.c:67` |
|  +8.3% |    +2 | 11.2% → 11.5% |      24 → 26 | `string/string/strcspn.c:62` |
|  +8.3% |    +2 | 11.2% → 11.5% |      24 → 26 | `string/string/strcspn.c:64` |
|  +8.3% |    +1 |   5.6% → 5.7% |      12 → 13 | `string/string/strcspn.c:63` |
|  +8.3% |    +1 |   5.6% → 5.7% |      12 → 13 | `string/string/strcspn.c:65` |

##### `ZSTD_buildSeqStore` (`./lib/compress/zstd_compress.c`)

|  Change | Delta |           % | Instructions | Location                                     |
| ------: | ----: | ----------: | -----------: | -------------------------------------------- |
| removed |   -48 | 3.8% → 0.0% |       48 → 0 | `./lib/compress/zstd_compress.c:2913`        |
| +200.0% |   +32 | 1.3% → 3.8% |      16 → 48 | `./lib/compress/zstd_compress.c:2911 → 2924` |
|     new |   +24 | 0.0% → 1.9% |       0 → 24 | `./lib/compress/zstd_compress.c:2915`        |
|     new |   +24 | 0.0% → 1.9% |       0 → 24 | `./lib/compress/zstd_compress.c:3057`        |
|  -33.3% |    -8 | 1.9% → 1.3% |      24 → 16 | `./lib/compress/zstd_compress.c:2891 → 2904` |

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

##### `strcmp` (`sysdeps/aarch64/strcmp.S`)

| Change | Delta |           % | Instructions | Location                       |
| -----: | ----: | ----------: | -----------: | ------------------------------ |
|  -5.9% |   -10 |        1.4% |    170 → 160 | `sysdeps/aarch64/strcmp.S:158` |
|  -2.3% |    -5 | 1.9% → 1.8% |    220 → 215 | `sysdeps/aarch64/strcmp.S:98`  |
|  -2.3% |    -5 | 1.9% → 1.8% |    220 → 215 | `sysdeps/aarch64/strcmp.S:99`  |
|  -2.3% |    -5 | 1.9% → 1.8% |    220 → 215 | `sysdeps/aarch64/strcmp.S:100` |
|  -2.3% |    -5 | 1.9% → 1.8% |    220 → 215 | `sysdeps/aarch64/strcmp.S:102` |

##### `getenv` (`stdlib/stdlib/getenv.c`)

| Change | Delta |     % | Instructions | Location                    |
| -----: | ----: | ----: | -----------: | --------------------------- |
| -50.0% |   -36 | 41.9% |      72 → 36 | `stdlib/stdlib/getenv.c:84` |
| -50.0% |   -25 | 29.1% |      50 → 25 | `stdlib/stdlib/getenv.c:75` |
| -50.0% |    -6 |  7.0% |       12 → 6 | `stdlib/stdlib/getenv.c:38` |
| -50.0% |    -5 |  5.8% |       10 → 5 | `stdlib/stdlib/getenv.c:91` |
| -50.0% |    -3 |  3.5% |        6 → 3 | `stdlib/stdlib/getenv.c:34` |

##### `ZSTD_compressBegin_advanced_internal` (`./lib/compress/zstd_compress.c`)

| Change | Delta |            % | Instructions | Location                                     |
| -----: | ----: | -----------: | -----------: | -------------------------------------------- |
|    new |    +9 | 0.0% → 18.8% |        0 → 9 | `./lib/compress/zstd_compress.c:5295`        |
|  -9.1% |    -1 | 8.7% → 20.8% |      11 → 10 | `./lib/compress/zstd_compress.c:5167 → 5292` |
| +12.5% |    +1 | 6.3% → 18.8% |        8 → 9 | `./lib/compress/zstd_compress.c:5171 → 5296` |

##### `__GI_memcpy` (`sysdeps/aarch64/memcpy.S`)

| Change | Delta |     % |    Instructions | Location                       |
| -----: | ----: | ----: | --------------: | ------------------------------ |
|    ~0% |    -8 | 12.4% | 22,779 → 22,771 | `sysdeps/aarch64/memcpy.S:166` |
|    ~0% |    -8 | 12.4% | 22,779 → 22,771 | `sysdeps/aarch64/memcpy.S:167` |
|    ~0% |    -8 | 12.4% | 22,779 → 22,771 | `sysdeps/aarch64/memcpy.S:168` |
|    ~0% |    -8 | 12.4% | 22,779 → 22,771 | `sysdeps/aarch64/memcpy.S:169` |
|    ~0% |    -8 | 12.4% | 22,779 → 22,771 | `sysdeps/aarch64/memcpy.S:170` |

##### `__GI_strlen` (`sysdeps/aarch64/strlen.S`)

| Change | Delta |    % | Instructions | Location                      |
| -----: | ----: | ---: | -----------: | ----------------------------- |
| -50.0% |    -1 | 5.0% |        2 → 1 | `sysdeps/aarch64/strlen.S:51` |
| -50.0% |    -1 | 5.0% |        2 → 1 | `sysdeps/aarch64/strlen.S:53` |
| -50.0% |    -1 | 5.0% |        2 → 1 | `sysdeps/aarch64/strlen.S:54` |
| -50.0% |    -1 | 5.0% |        2 → 1 | `sysdeps/aarch64/strlen.S:55` |
| -50.0% |    -1 | 5.0% |        2 → 1 | `sysdeps/aarch64/strlen.S:56` |

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

### Total instructions

#### Regressions

Functions with the largest increase in instructions recorded within the function and its callees, excluding recursive calls. Categories account for at least 1.0% of self instructions on the base or the current side.

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
|    +20.4% |  +15,587 |          0.2% |         76,590 → 92,177 | `__GI_memset`                   | `sysdeps/aarch64/memset.S`                 |
|       new |     +822 |  0.0% → <0.1% |                 0 → 822 | `0x0000000000008840`            | `./programs/zstd`                          |
|       ~0% |     +488 |   4.9% → 4.8% |   1,935,430 → 1,935,918 | `HIST_countFast_wksp`           | `./lib/compress/hist.c`                    |
|       ~0% |     +439 |   3.5% → 3.4% |   1,376,670 → 1,377,109 | `ZSTD_buildCTable`              | `./lib/compress/zstd_compress_sequences.c` |
|       ~0% |     +396 | 30.6% → 29.9% | 12,118,064 → 12,118,460 | `ZSTD_encodeSequences`          | `./lib/common/mem.h`                       |
|       ~0% |     +396 | 30.6% → 29.9% | 12,117,184 → 12,117,580 | `ZSTD_encodeSequences`          | `./lib/common/bitstream.h`                 |
|       ~0% |     +396 | 30.6% → 29.9% | 12,119,320 → 12,119,716 | `ZSTD_encodeSequences`          | `./lib/compress/zstd_compress_sequences.c` |
|       ~0% |     +257 | 11.5% → 11.2% |   4,530,626 → 4,530,883 | `ZSTD_buildSequencesStatistics` | `./lib/compress/zstd_compress.c`           |
|       new |     +251 |  0.0% → <0.1% |                 0 → 251 | `ZSTD_checkCParams`             | `./lib/compress/zstd_compress.c`           |

#### Improvements

Functions with the largest decrease in instructions recorded within the function and its callees, excluding recursive calls. Categories account for at least 1.0% of self instructions on the base or the current side.

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
|   -0.1% |   -241 |         0.7% |     277,173 → 276,932 | `_dl_init`                                        | `elf/elf/dl-init.c`                       |
|   -0.1% |   -241 |         0.7% |     276,150 → 275,909 | `(below main)`                                    | `./programs/zstd`                         |
|   -0.1% |   -241 |         0.7% |     283,536 → 283,295 | `_dl_runtime_resolve`                             | `sysdeps/aarch64/dl-trampoline.S`         |
|   -0.1% |   -241 |         0.7% |     275,441 → 275,200 | `__libc_start_main@@GLIBC_2.34`                   | `csu/libc-start.c`                        |
|   -0.1% |   -241 |         0.7% |     274,481 → 274,240 | `main`                                            | `./programs/zstdcli.c`                    |
|   -0.1% |   -241 |         0.7% |     271,657 → 271,416 | `FIO_createPreferences`                           | `./programs/fileio.c`                     |
|   -0.1% |   -241 |         0.7% |     269,326 → 269,085 | `FIO_createContext`                               | `./programs/fileio.c`                     |
|   -0.1% |   -241 |         0.7% |     275,425 → 275,184 | `__cxa_atexit`                                    | `stdlib/stdlib/cxa_atexit.c`              |
|   -0.1% |   -241 |         0.7% |     275,422 → 275,181 | `__internal_atexit`                               | `stdlib/stdlib/cxa_atexit.c`              |
|   -0.1% |   -241 |         0.7% |     274,544 → 274,303 | `(below main)`                                    | `sysdeps/nptl/libc_start_call_main.h`     |

#### Callers

Callers with the largest change in contribution to each function's total instructions. Inlining can make caller attribution imprecise, and percentages can exceed 100% for recursive calls.

##### `ZSTD_compress_frameChunk` (`./lib/compress/zstd_compress.c`)

| Change |      Delta |               % |            Instructions | Calls | Caller                         | Location                                  |
| -----: | ---------: | --------------: | ----------------------: | ----: | ------------------------------ | ----------------------------------------- |
|  +2.8% | +1,527,377 | 144.1% → 144.6% | 55,245,537 → 56,772,914 |     8 | `ZSTD_compressBlock_internal`  | `./lib/compress/zstd_compress.c`          |
|  +2.5% |   +925,823 |   98.0% → 98.1% | 37,593,868 → 38,519,691 |     2 | `ZSTD_compress_frameChunk`     | `./lib/compress/zstd_compress.c`          |
|  +2.8% |   +518,717 |   48.6% → 48.8% | 18,651,550 → 19,170,267 |     1 | `ZSTD_compressEnd_public`      | `./lib/compress/zstd_compress_internal.h` |
|  +2.1% |   +407,106 |   51.4% → 51.2% | 19,696,277 → 20,103,383 |     1 | `ZSTD_compressContinue_public` | `./lib/compress/zstd_compress.c`          |

##### `ZSTDMT_compressionJob` (`./lib/compress/zstdmt_compress.c`)

|  Change |       Delta |                      % |              Instructions | Calls | Caller                                 | Location                           |
| ------: | ----------: | ---------------------: | ------------------------: | ----: | -------------------------------------- | ---------------------------------- |
|     new | +39,274,550 |         0.0% → 5205.5% |            0 → 39,274,550 | 0 → 1 | `ZSTD_compressBegin_advanced_internal` | `./lib/compress/zstd_compress.c`   |
| removed | -38,349,498 |      5086140.3% → 0.0% |            38,349,498 → 0 | 1 → 0 | `ZSTD_XXH64_update`                    | `./lib/common/xxhash.h`            |
|   +2.4% |  +2,840,330 | 15475420.8% → 15842.0% | 116,684,673 → 119,525,003 |     3 | `__pthread_mutex_unlock_usercnt`       | `nptl/nptl/pthread_mutex_unlock.c` |
|   +2.4% |    +925,844 |   5194439.8% → 5313.8% |   39,166,076 → 40,091,920 |     1 | `ZSTDMT_getBuffer`                     | `./lib/compress/zstdmt_compress.c` |

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

| Change |    Delta |      % |            Instructions | Calls | Caller                           | Location                           |
| -----: | -------: | -----: | ----------------------: | ----: | -------------------------------- | ---------------------------------- |
|  +2.8% | +518,717 | 100.0% | 18,652,011 → 19,170,728 |     1 | `__pthread_mutex_unlock_usercnt` | `nptl/nptl/pthread_mutex_unlock.c` |

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

##### `__GI_memset` (`sysdeps/aarch64/memset.S`)

| Change |   Delta |            % | Instructions |   Calls | Caller                      | Location                          |
| -----: | ------: | -----------: | -----------: | ------: | --------------------------- | --------------------------------- |
|    new | +10,976 | 0.0% → 11.9% |   0 → 10,976 | 0 → 112 | `ZSTD_recordFingerprint_43` | `./lib/compress/zstd_preSplit.c`  |
|    new |  +4,606 |  0.0% → 5.0% |    0 → 4,606 |   0 → 7 | `ZSTD_splitBlock`           | `./lib/compress/zstd_preSplit.c`  |
|  +1.2% |      +5 |  0.6% → 0.5% |    428 → 433 |       1 | `_dl_runtime_resolve`       | `sysdeps/aarch64/dl-trampoline.S` |

##### `0x0000000000008840` (`./programs/zstd`)

| Change | Delta |             % | Instructions | Calls | Caller          | Location                 |
| -----: | ----: | ------------: | -----------: | ----: | --------------- | ------------------------ |
|    new |  +822 | 0.0% → 100.0% |      0 → 822 | 0 → 1 | `_dl_call_fini` | `elf/elf/dl-call_fini.c` |

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

|  Change | Delta |             % | Instructions | Calls | Caller          | Location                 |
| ------: | ----: | ------------: | -----------: | ----: | --------------- | ------------------------ |
| removed |  -822 | 100.0% → 0.0% |      822 → 0 | 1 → 0 | `_dl_call_fini` | `elf/elf/dl-call_fini.c` |

##### `HUF_simpleQuickSort` (`./lib/compress/huf_compress.c`)

| Change |  Delta |               % |    Instructions |   Calls | Caller                 | Location                        |
| -----: | -----: | --------------: | --------------: | ------: | ---------------------- | ------------------------------- |
| -11.7% | -6,864 | 596.6% → 574.6% | 58,418 → 51,554 |  9 → 10 | `HUF_buildCTable_wksp` | `./lib/compress/huf_compress.c` |
|  +0.1% |    +31 | 441.3% → 482.0% | 43,216 → 43,247 | 17 → 15 | `HUF_simpleQuickSort`  | `./lib/compress/huf_compress.c` |

##### `ZSTD_seqToCodes` (`./lib/compress/zstd_compress_internal.h`)

| Change | Delta |      % |          Instructions | Calls | Caller            | Location                         |
| -----: | ----: | -----: | --------------------: | ----: | ----------------- | -------------------------------- |
|    ~0% |  -279 | 100.0% | 1,370,282 → 1,370,003 |     8 | `ZSTD_seqToCodes` | `./lib/compress/zstd_compress.c` |

##### `_dl_init` (`elf/elf/dl-init.c`)

| Change | Delta |      % |      Instructions | Calls | Caller      | Location         |
| -----: | ----: | -----: | ----------------: | ----: | ----------- | ---------------- |
|  -0.1% |  -241 | 100.0% | 277,173 → 276,932 |     1 | `_dl_start` | `elf/elf/rtld.c` |

##### `(below main)` (`./programs/zstd`)

| Change | Delta |      % |      Instructions | Calls | Caller     | Location            |
| -----: | ----: | -----: | ----------------: | ----: | ---------- | ------------------- |
|  -0.1% |  -241 | 100.0% | 276,150 → 275,909 |     1 | `_dl_init` | `elf/elf/dl-init.c` |

##### `_dl_runtime_resolve` (`sysdeps/aarch64/dl-trampoline.S`)

|  Change | Delta |           % |      Instructions | Calls | Caller               | Location                         |
| ------: | ----: | ----------: | ----------------: | ----: | -------------------- | -------------------------------- |
| removed |  -775 | 0.3% → 0.0% |           775 → 0 | 1 → 0 | `0x0000000000008740` | `./programs/zstd`                |
|     new |  +775 | 0.0% → 0.3% |           0 → 775 | 0 → 1 | `0x0000000000008840` | `./programs/zstd`                |
|   -0.1% |  -241 |       97.4% | 276,129 → 275,888 |     1 | `(below main)`       | `./programs/zstd`                |
|   +0.5% |    +5 |        0.4% |     1,054 → 1,059 |     1 | `malloc`             | `malloc/malloc/malloc.c`         |
|   +0.4% |    +5 |        0.4% |     1,212 → 1,217 |     1 | `ZSTD_createCCtx`    | `./lib/compress/zstd_compress.c` |

##### `__libc_start_main@@GLIBC_2.34` (`csu/libc-start.c`)

| Change | Delta |      % |      Instructions | Calls | Caller                | Location                          |
| -----: | ----: | -----: | ----------------: | ----: | --------------------- | --------------------------------- |
|  -0.1% |  -241 | 100.0% | 275,441 → 275,200 |     1 | `_dl_runtime_resolve` | `sysdeps/aarch64/dl-trampoline.S` |
|  -0.1% |  -241 |  99.9% | 275,296 → 275,055 |     1 | `__internal_atexit`   | `stdlib/stdlib/cxa_atexit.c`      |

##### `main` (`./programs/zstdcli.c`)

| Change | Delta |             % |      Instructions | Calls | Caller              | Location                              |
| -----: | ----: | ------------: | ----------------: | ----: | ------------------- | ------------------------------------- |
|  -0.1% |  -241 |         97.8% | 268,420 → 268,179 |     1 | `FIO_createContext` | `./programs/fileio.c`                 |
|  -0.1% |  -241 |        100.0% | 274,481 → 274,240 |     1 | `(below main)`      | `sysdeps/nptl/libc_start_call_main.h` |
|    ~0% |  -113 |         95.7% | 262,682 → 262,569 |     1 | `exeNameMatch`      | `./programs/zstdcli.c`                |
|    ~0% |   -93 | 95.0% → 95.1% | 260,880 → 260,787 |     1 | `UTIL_isConsole`    | `./programs/util.c`                   |

##### `FIO_createPreferences` (`./programs/fileio.c`)

| Change | Delta |      % |      Instructions | Calls | Caller | Location               |
| -----: | ----: | -----: | ----------------: | ----: | ------ | ---------------------- |
|  -0.1% |  -241 | 100.0% | 271,657 → 271,416 |     1 | `main` | `./programs/zstdcli.c` |

##### `FIO_createContext` (`./programs/fileio.c`)

| Change | Delta |      % |      Instructions | Calls | Caller                  | Location              |
| -----: | ----: | -----: | ----------------: | ----: | ----------------------- | --------------------- |
|  -0.1% |  -241 | 100.0% | 269,326 → 269,085 |     1 | `FIO_createPreferences` | `./programs/fileio.c` |

##### `__cxa_atexit` (`stdlib/stdlib/cxa_atexit.c`)

| Change | Delta |      % |      Instructions | Calls | Caller                          | Location           |
| -----: | ----: | -----: | ----------------: | ----: | ------------------------------- | ------------------ |
|  -0.1% |  -241 | 100.0% | 275,425 → 275,184 |     1 | `__libc_start_main@@GLIBC_2.34` | `csu/libc-start.c` |

##### `__internal_atexit` (`stdlib/stdlib/cxa_atexit.c`)

| Change | Delta |      % |      Instructions | Calls | Caller         | Location                     |
| -----: | ----: | -----: | ----------------: | ----: | -------------- | ---------------------------- |
|  -0.1% |  -241 | 100.0% | 275,422 → 275,181 |     1 | `__cxa_atexit` | `stdlib/stdlib/cxa_atexit.c` |

##### `(below main)` (`sysdeps/nptl/libc_start_call_main.h`)

| Change | Delta |      % |      Instructions | Calls | Caller                          | Location           |
| -----: | ----: | -----: | ----------------: | ----: | ------------------------------- | ------------------ |
|  -0.1% |  -241 | 100.0% | 274,544 → 274,303 |     1 | `__libc_start_main@@GLIBC_2.34` | `csu/libc-start.c` |

#### Callees

Callees with the largest change in contribution to each function's total instructions. Inlining can make callee attribution imprecise, and percentages can exceed 100% for recursive calls.

##### `ZSTD_compress_frameChunk` (`./lib/compress/zstd_compress.c`)

| Change |       Delta |              % |            Instructions | Calls | Callee                         | Location                         |
| -----: | ----------: | -------------: | ----------------------: | ----: | ------------------------------ | -------------------------------- |
|    new | +75,565,864 |  0.0% → 192.4% |          0 → 75,565,864 | 0 → 7 | `ZSTD_splitBlock`              | `./lib/compress/zstd_preSplit.c` |
| -78.8% | -73,112,476 | 242.1% → 50.2% | 92,838,852 → 19,726,376 | 8 → 1 | `ZSTD_compressBlock_internal`  | `./lib/compress/zstd_compress.c` |
|  +2.5% |    +925,823 |  98.0% → 98.1% | 37,593,868 → 38,519,691 |     2 | `ZSTD_compress_frameChunk`     | `./lib/compress/zstd_compress.c` |
| -87.5% |         -42 |          <0.1% |                  48 → 6 | 8 → 1 | `ZSTD_overflowCorrectIfNeeded` | `./lib/compress/zstd_compress.c` |

##### `ZSTDMT_compressionJob` (`./lib/compress/zstdmt_compress.c`)

| Change |      Delta |                      % |            Instructions | Calls | Callee                             | Location                           |
| -----: | ---------: | ---------------------: | ----------------------: | ----: | ---------------------------------- | ---------------------------------- |
|  +2.5% | +1,914,478 | 10280764.7% → 10527.9% | 77,516,966 → 79,431,444 |     3 | `pthread_mutex_unlock@@GLIBC_2.17` | `nptl/nptl/pthread_mutex_unlock.c` |
|  +2.4% |   +925,844 |   5194640.2% → 5314.0% | 39,167,587 → 40,093,431 |     1 | `ZSTDMT_getBuffer`                 | `./lib/compress/zstdmt_compress.c` |
|  +2.4% |   +925,823 |   5086037.3% → 5205.5% | 38,348,721 → 39,274,544 |     1 | `ZSTD_compressContinue_public`     | `./lib/compress/zstd_compress.c`   |
|    new |   +753,709 |           0.0% → 99.9% |             0 → 753,709 | 0 → 1 | `ZSTD_XXH64_update`                | `./lib/common/xxhash.h`            |
|  +0.4% |   +171,313 |   5194437.0% → 5213.8% | 39,166,055 → 39,337,368 |     1 | `ZSTD_CCtxParams_setParameter`     | `./lib/compress/zstd_compress.c`   |

##### `ZSTD_recordFingerprint_43` (`./lib/compress/zstd_preSplit.c`)

| Change |    Delta |            % | Instructions |   Calls | Callee                      | Location                         |
| -----: | -------: | -----------: | -----------: | ------: | --------------------------- | -------------------------------- |
|    new | +613,655 | 0.0% → 98.3% |  0 → 613,655 |   0 → 7 | `ZSTD_recordFingerprint_43` | `./lib/compress/zstd_preSplit.c` |
|    new |  +10,976 |  0.0% → 1.8% |   0 → 10,976 | 0 → 112 | `__GI_memset`               | `sysdeps/aarch64/memset.S`       |

##### `ZSTD_compressEnd_public` (`./lib/compress/zstd_compress_internal.h`)

| Change |    Delta |      % |            Instructions | Calls | Callee                     | Location                         |
| -----: | -------: | -----: | ----------------------: | ----: | -------------------------- | -------------------------------- |
|  +2.8% | +518,717 | 100.0% | 18,651,550 → 19,170,267 |     1 | `ZSTD_compress_frameChunk` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_compressEnd_public` (`./lib/compress/zstd_compress.c`)

| Change |    Delta |      % |            Instructions | Calls | Callee                    | Location                                  |
| -----: | -------: | -----: | ----------------------: | ----: | ------------------------- | ----------------------------------------- |
|  +2.8% | +518,717 | 100.0% | 18,651,568 → 19,170,285 |     1 | `ZSTD_compressEnd_public` | `./lib/compress/zstd_compress_internal.h` |

##### `ZSTD_splitBlock` (`./lib/compress/zstd_preSplit.c`)

| Change |       Delta |               % |   Instructions | Calls | Callee                         | Location                         |
| -----: | ----------: | --------------: | -------------: | ----: | ------------------------------ | -------------------------------- |
|    new | +74,936,672 | 0.0% → 16674.0% | 0 → 74,936,672 | 0 → 7 | `ZSTD_compressBlock_internal`  | `./lib/compress/zstd_compress.c` |
|    new |    +624,008 |   0.0% → 138.8% |    0 → 624,008 | 0 → 7 | `ZSTD_recordFingerprint_43`    | `./lib/compress/zstd_preSplit.c` |
|    new |      +4,606 |     0.0% → 1.0% |      0 → 4,606 | 0 → 7 | `__GI_memset`                  | `sysdeps/aarch64/memset.S`       |
|    new |         +42 |    0.0% → <0.1% |         0 → 42 | 0 → 7 | `ZSTD_overflowCorrectIfNeeded` | `./lib/compress/zstd_compress.c` |

##### `ZSTD_compressContinue_public` (`./lib/compress/zstd_compress.c`)

| Change |    Delta |             % |            Instructions | Calls | Callee                            | Location                                  |
| -----: | -------: | ------------: | ----------------------: | ----: | --------------------------------- | ----------------------------------------- |
|  +2.8% | +518,717 | 94.7% → 95.4% | 18,652,248 → 19,170,965 |     1 | `pthread_cond_signal@@GLIBC_2.17` | `nptl/nptl/pthread_cond_signal.c`         |
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

| Change | Delta |            % | Instructions | Calls | Callee                | Location                          |
| -----: | ----: | -----------: | -----------: | ----: | --------------------- | --------------------------------- |
|    new |  +775 | 0.0% → 94.3% |      0 → 775 | 0 → 1 | `_dl_runtime_resolve` | `sysdeps/aarch64/dl-trampoline.S` |
|    new |   +12 |  0.0% → 1.5% |       0 → 12 | 0 → 1 | `0x00000000000087d0`  | `./programs/zstd`                 |

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

|  Change | Delta |            % | Instructions | Calls | Callee                | Location                          |
| ------: | ----: | -----------: | -----------: | ----: | --------------------- | --------------------------------- |
| removed |  -775 | 94.3% → 0.0% |      775 → 0 | 1 → 0 | `_dl_runtime_resolve` | `sysdeps/aarch64/dl-trampoline.S` |
| removed |   -12 |  1.5% → 0.0% |       12 → 0 | 1 → 0 | `0x00000000000086d0`  | `./programs/zstd`                 |

##### `HUF_simpleQuickSort` (`./lib/compress/huf_compress.c`)

| Change |  Delta |               % |    Instructions |   Calls | Callee                 | Location                        |
| -----: | -----: | --------------: | --------------: | ------: | ---------------------- | ------------------------------- |
| -12.4% | -6,044 | 496.6% → 474.6% | 48,626 → 42,582 |   7 → 6 | `HUF_buildCTable_wksp` | `./lib/compress/huf_compress.c` |
|  +0.1% |    +31 | 441.3% → 482.0% | 43,216 → 43,247 | 17 → 15 | `HUF_simpleQuickSort`  | `./lib/compress/huf_compress.c` |

##### `_dl_init` (`elf/elf/dl-init.c`)

| Change | Delta |     % |      Instructions | Calls | Callee         | Location          |
| -----: | ----: | ----: | ----------------: | ----: | -------------- | ----------------- |
|  -0.1% |  -241 | 99.6% | 276,150 → 275,909 |     1 | `(below main)` | `./programs/zstd` |

##### `(below main)` (`./programs/zstd`)

| Change | Delta |      % |      Instructions | Calls | Callee                | Location                          |
| -----: | ----: | -----: | ----------------: | ----: | --------------------- | --------------------------------- |
|  -0.1% |  -241 | 100.0% | 276,129 → 275,888 |     1 | `_dl_runtime_resolve` | `sysdeps/aarch64/dl-trampoline.S` |

##### `_dl_runtime_resolve` (`sysdeps/aarch64/dl-trampoline.S`)

| Change | Delta |     % |      Instructions | Calls | Callee                          | Location                   |
| -----: | ----: | ----: | ----------------: | ----: | ------------------------------- | -------------------------- |
|  -0.1% |  -241 | 97.1% | 275,441 → 275,200 |     1 | `__libc_start_main@@GLIBC_2.34` | `csu/libc-start.c`         |
|  +1.2% |    +5 |  0.2% |         428 → 433 |     1 | `__GI_memset`                   | `sysdeps/aarch64/memset.S` |
|  +0.8% |    +5 |  0.2% |         627 → 632 |     1 | `calloc`                        | `malloc/malloc/malloc.c`   |

##### `__libc_start_main@@GLIBC_2.34` (`csu/libc-start.c`)

|  Change | Delta |            % |      Instructions | Calls | Callee               | Location                              |
| ------: | ----: | -----------: | ----------------: | ----: | -------------------- | ------------------------------------- |
|   -0.1% |  -241 |       100.0% | 275,425 → 275,184 |     1 | `__cxa_atexit`       | `stdlib/stdlib/cxa_atexit.c`          |
|   -0.1% |  -241 |        99.7% | 274,544 → 274,303 |     1 | `(below main)`       | `sysdeps/nptl/libc_start_call_main.h` |
| removed |   -11 | <0.1% → 0.0% |            11 → 0 | 1 → 0 | `0x0000000000008790` | `./programs/zstd`                     |
|     new |   +11 | 0.0% → <0.1% |            0 → 11 | 0 → 1 | `0x0000000000008890` | `./programs/zstd`                     |

##### `main` (`./programs/zstdcli.c`)

| Change | Delta |             % |      Instructions | Calls | Callee                        | Location                   |
| -----: | ----: | ------------: | ----------------: | ----: | ----------------------------- | -------------------------- |
|  -0.1% |  -241 |         97.8% | 268,410 → 268,169 |     1 | `UTIL_allocateFileNamesTable` | `./programs/util.c`        |
|  -0.1% |  -241 |         99.0% | 271,657 → 271,416 |     1 | `FIO_createPreferences`       | `./programs/fileio.c`      |
|    ~0% |   -93 | 95.0% → 95.1% | 260,857 → 260,764 |     1 | `FIO_determineHasStdinInput`  | `./programs/fileio.c`      |
|    ~0% |   -93 | 95.5% → 95.6% | 262,193 → 262,100 |     1 | `UTIL_isConsole`              | `./programs/util.c`        |
| -28.4% |   -25 |         <0.1% |           88 → 63 |     3 | `strcmp`                      | `sysdeps/aarch64/strcmp.S` |

##### `FIO_createPreferences` (`./programs/fileio.c`)

| Change | Delta |     % |      Instructions | Calls | Callee              | Location              |
| -----: | ----: | ----: | ----------------: | ----: | ------------------- | --------------------- |
|  -0.1% |  -241 | 99.1% | 269,326 → 269,085 |     1 | `FIO_createContext` | `./programs/fileio.c` |

##### `FIO_createContext` (`./programs/fileio.c`)

| Change | Delta |     % |      Instructions | Calls | Callee | Location               |
| -----: | ----: | ----: | ----------------: | ----: | ------ | ---------------------- |
|  -0.1% |  -241 | 99.7% | 268,420 → 268,179 |     1 | `main` | `./programs/zstdcli.c` |

##### `__cxa_atexit` (`stdlib/stdlib/cxa_atexit.c`)

| Change | Delta |      % |      Instructions | Calls | Callee              | Location                     |
| -----: | ----: | -----: | ----------------: | ----: | ------------------- | ---------------------------- |
|  -0.1% |  -241 | 100.0% | 275,422 → 275,181 |     1 | `__internal_atexit` | `stdlib/stdlib/cxa_atexit.c` |

##### `__internal_atexit` (`stdlib/stdlib/cxa_atexit.c`)

|  Change | Delta |            % |      Instructions | Calls | Callee                          | Location           |
| ------: | ----: | -----------: | ----------------: | ----: | ------------------------------- | ------------------ |
|   -0.1% |  -241 |       100.0% | 275,296 → 275,055 |     1 | `__libc_start_main@@GLIBC_2.34` | `csu/libc-start.c` |
| removed |   -10 | <0.1% → 0.0% |            10 → 0 | 1 → 0 | `0x000000000010c4e8`            | `<unknown>`        |
|     new |   +10 | 0.0% → <0.1% |            0 → 10 | 0 → 1 | `0x000000000010c580`            | `<unknown>`        |

##### `(below main)` (`sysdeps/nptl/libc_start_call_main.h`)

| Change | Delta |      % |      Instructions | Calls | Callee | Location               |
| -----: | ----: | -----: | ----------------: | ----: | ------ | ---------------------- |
|  -0.1% |  -241 | 100.0% | 274,481 → 274,240 |     1 | `main` | `./programs/zstdcli.c` |

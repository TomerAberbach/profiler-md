# CPU profile

Took 618.1ms over 580 samples (1.1ms per sample).

| Category |     % |    Time | Samples |
| -------- | ----: | ------: | ------: |
| stdlib   | 70.4% | 435.0ms |     395 |
| ours     | 29.5% | 182.1ms |     184 |
| program  |  0.2% |   1.0ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                | Location                                                          |
| ----: | ------: | ------: | ----------------------- | ----------------------------------------------------------------- |
| 19.2% | 118.4ms |      78 | `scrollTo`              | `<native>`                                                        |
|  5.3% |  33.0ms |      33 | `insertBefore`          | `<native>`                                                        |
|  5.3% |  33.0ms |      33 | `(anonymous)`           | https://tomeraberba.ch/assets/deserialize-CTeepBb-.js:1:244       |
|  4.4% |  27.0ms |      27 | `getPropertyValue`      | `<native>`                                                        |
|  2.6% |  16.0ms |      16 | `getBoundingClientRect` | `<native>`                                                        |
|  2.1% |  13.0ms |      13 | `(anonymous)`           | https://tomeraberba.ch/assets/home-BLAXmiwx.js:1:118859           |
|  1.6% |  10.0ms |      10 | `(anonymous)`           | https://tomeraberba.ch/assets/chunk-LFPYN7LY-CZBE6JVM.js:1:122137 |
|  1.3% |   8.0ms |       8 | `toLocaleDateString`    | `<native>`                                                        |
|  1.1% |   7.1ms |       8 | `(anonymous)`           | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:142078   |
|  1.0% |   6.0ms |       6 | `removeChild`           | `<native>`                                                        |
|  0.8% |   5.0ms |       6 | `tf`                    | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:23307    |
|  0.8% |   5.0ms |       5 | `setAttribute`          | `<native>`                                                        |
|  0.6% |   4.0ms |       4 | `Vi`                    | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:29922    |
|  0.6% |   4.0ms |       4 | `xn`                    | https://tomeraberba.ch/assets/chunk-LFPYN7LY-CZBE6JVM.js:1:83381  |
|  0.6% |   4.0ms |       4 | `(anonymous)`           | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:101989   |
|  0.6% |   4.0ms |       4 | `appendChild`           | `<native>`                                                        |
|  0.5% |   3.0ms |       3 | `Bi`                    | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:24177    |
|  0.5% |   3.0ms |       3 | `at`                    | https://tomeraberba.ch/assets/post-DMDTSjRj.js:1:22685            |
|  0.5% |   3.0ms |       3 | `(anonymous)`           | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:50192    |
|  0.5% |   3.0ms |       3 | `Ee`                    | https://tomeraberba.ch/assets/deserialize-CTeepBb-.js:1:14584     |

#### Lines

Lines ranked by contribution to each function's self time.

##### `(anonymous)` (https://tomeraberba.ch/assets/deserialize-CTeepBb-.js:1:244)

|      % |   Time | Samples | Location                                                |
| -----: | -----: | ------: | ------------------------------------------------------- |
| 100.0% | 33.0ms |      33 | https://tomeraberba.ch/assets/deserialize-CTeepBb-.js:1 |

##### `(anonymous)` (https://tomeraberba.ch/assets/home-BLAXmiwx.js:1:118859)

|      % |   Time | Samples | Location                                         |
| -----: | -----: | ------: | ------------------------------------------------ |
| 100.0% | 13.0ms |      13 | https://tomeraberba.ch/assets/home-BLAXmiwx.js:1 |

##### `(anonymous)` (https://tomeraberba.ch/assets/chunk-LFPYN7LY-CZBE6JVM.js:1:122137)

|      % |   Time | Samples | Location                                                   |
| -----: | -----: | ------: | ---------------------------------------------------------- |
| 100.0% | 10.0ms |      10 | https://tomeraberba.ch/assets/chunk-LFPYN7LY-CZBE6JVM.js:1 |

##### `(anonymous)` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:142078)

|      % |  Time | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 7.1ms |       8 | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1 |

##### `tf` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:23307)

|      % |  Time | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 5.0ms |       6 | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1 |

##### `Vi` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:29922)

|      % |  Time | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 4.0ms |       4 | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1 |

##### `xn` (https://tomeraberba.ch/assets/chunk-LFPYN7LY-CZBE6JVM.js:1:83381)

|     % |  Time | Samples | Location                                                   |
| ----: | ----: | ------: | ---------------------------------------------------------- |
| 75.0% | 3.0ms |       3 | https://tomeraberba.ch/assets/chunk-LFPYN7LY-CZBE6JVM.js:1 |

##### `(anonymous)` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:101989)

|      % |  Time | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 4.0ms |       4 | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1 |

##### `Bi` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:24177)

|      % |  Time | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 3.0ms |       3 | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1 |

##### `at` (https://tomeraberba.ch/assets/post-DMDTSjRj.js:1:22685)

|      % |  Time | Samples | Location                                         |
| -----: | ----: | ------: | ------------------------------------------------ |
| 100.0% | 3.0ms |       3 | https://tomeraberba.ch/assets/post-DMDTSjRj.js:1 |

##### `(anonymous)` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:50192)

|      % |  Time | Samples | Location                                                 |
| -----: | ----: | ------: | -------------------------------------------------------- |
| 100.0% | 3.0ms |       3 | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1 |

##### `Ee` (https://tomeraberba.ch/assets/deserialize-CTeepBb-.js:1:14584)

|      % |  Time | Samples | Location                                                |
| -----: | ----: | ------: | ------------------------------------------------------- |
| 100.0% | 3.0ms |       3 | https://tomeraberba.ch/assets/deserialize-CTeepBb-.js:1 |

#### Callers

Callers ranked by contribution to each function's self time. Caller attribution may be imprecise due to inlining.

##### `scrollTo` (`<native>`)

|      % |    Time | Samples | Caller        | Location                                                          |
| -----: | ------: | ------: | ------------- | ----------------------------------------------------------------- |
| 100.0% | 118.4ms |      78 | `(anonymous)` | https://tomeraberba.ch/assets/chunk-LFPYN7LY-CZBE6JVM.js:1:122230 |

##### `insertBefore` (`<native>`)

|     % |   Time | Samples | Caller | Location                                                        |
| ----: | -----: | ------: | ------ | --------------------------------------------------------------- |
| 97.0% | 32.0ms |      32 | `mn`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:105658 |

##### `(anonymous)` (https://tomeraberba.ch/assets/deserialize-CTeepBb-.js:1:244)

|      % |   Time | Samples | Caller | Location                                                |
| -----: | -----: | ------: | ------ | ------------------------------------------------------- |
| 100.0% | 33.0ms |      33 | `wr`   | https://tomeraberba.ch/assets/home-BLAXmiwx.js:1:125279 |

##### `getPropertyValue` (`<native>`)

|     % |   Time | Samples | Caller        | Location                                                     |
| ----: | -----: | ------: | ------------- | ------------------------------------------------------------ |
| 44.4% | 12.0ms |      12 | `(anonymous)` | https://tomeraberba.ch/assets/shrink-wrap-D0I1-yBi.js:1:2567 |

##### `getBoundingClientRect` (`<native>`)

|     % |   Time | Samples | Caller        | Location                                                     |
| ----: | -----: | ------: | ------------- | ------------------------------------------------------------ |
| 68.7% | 11.0ms |      11 | `Ne`          | https://tomeraberba.ch/assets/home-BLAXmiwx.js:1:16147       |
| 31.2% |  5.0ms |       5 | `(anonymous)` | https://tomeraberba.ch/assets/shrink-wrap-D0I1-yBi.js:1:3291 |

##### `(anonymous)` (https://tomeraberba.ch/assets/home-BLAXmiwx.js:1:118859)

|      % |   Time | Samples | Caller        | Location                                                |
| -----: | -----: | ------: | ------------- | ------------------------------------------------------- |
| 100.0% | 13.0ms |      13 | `(anonymous)` | https://tomeraberba.ch/assets/home-BLAXmiwx.js:1:119181 |

##### `(anonymous)` (https://tomeraberba.ch/assets/chunk-LFPYN7LY-CZBE6JVM.js:1:122137)

|      % |   Time | Samples | Caller        | Location                                                         |
| -----: | -----: | ------: | ------------- | ---------------------------------------------------------------- |
| 100.0% | 10.0ms |      10 | `(anonymous)` | https://tomeraberba.ch/assets/chunk-LFPYN7LY-CZBE6JVM.js:1:26765 |

##### `toLocaleDateString` (`<native>`)

|     % |  Time | Samples | Caller        | Location                                                     |
| ----: | ----: | ------: | ------------- | ------------------------------------------------------------ |
| 50.0% | 4.0ms |       4 | `Je`          | https://tomeraberba.ch/assets/post-DMDTSjRj.js:1:46948       |
| 50.0% | 4.0ms |       4 | `(anonymous)` | https://tomeraberba.ch/assets/deserialize-CTeepBb-.js:1:5074 |

##### `(anonymous)` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:142078)

|      % |  Time | Samples | Caller | Location                                                       |
| -----: | ----: | ------: | ------ | -------------------------------------------------------------- |
| 100.0% | 7.1ms |       8 | `Bi`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:24177 |

##### `removeChild` (`<native>`)

|     % |  Time | Samples | Caller | Location                                                        |
| ----: | ----: | ------: | ------ | --------------------------------------------------------------- |
| 83.3% | 5.0ms |       5 | `rv`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:107820 |

##### `tf` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:23307)

|     % |  Time | Samples | Caller        | Location                                                        |
| ----: | ----: | ------: | ------------- | --------------------------------------------------------------- |
| 60.3% | 3.0ms |       4 | `(anonymous)` | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:142078 |
| 39.7% | 2.0ms |       2 | `li`          | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:170282 |

##### `setAttribute` (`<native>`)

|      % |  Time | Samples | Caller | Location                                                        |
| -----: | ----: | ------: | ------ | --------------------------------------------------------------- |
| 100.0% | 5.0ms |       5 | `J`    | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:147819 |

##### `Vi` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:29922)

|      % |  Time | Samples | Caller        | Location                                                        |
| -----: | ----: | ------: | ------------- | --------------------------------------------------------------- |
| 100.0% | 4.0ms |       4 | `(anonymous)` | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:142078 |

##### `xn` (https://tomeraberba.ch/assets/chunk-LFPYN7LY-CZBE6JVM.js:1:83381)

|      % |  Time | Samples | Caller        | Location                                                         |
| -----: | ----: | ------: | ------------- | ---------------------------------------------------------------- |
| 100.0% | 4.0ms |       4 | `(anonymous)` | https://tomeraberba.ch/assets/chunk-LFPYN7LY-CZBE6JVM.js:1:85850 |

##### `(anonymous)` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:101989)

|      % |  Time | Samples | Caller | Location                                                        |
| -----: | ----: | ------: | ------ | --------------------------------------------------------------- |
| 100.0% | 4.0ms |       4 | `gc`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:101950 |

##### `appendChild` (`<native>`)

|     % |  Time | Samples | Caller | Location                                                        |
| ----: | ----: | ------: | ------ | --------------------------------------------------------------- |
| 50.0% | 2.0ms |       2 | `p1`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:93533  |
| 25.0% | 1.0ms |       1 | `mn`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:105658 |

##### `Bi` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:24177)

|      % |  Time | Samples | Caller | Location                                                        |
| -----: | ----: | ------: | ------ | --------------------------------------------------------------- |
| 100.0% | 3.0ms |       3 | `Zc`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:141675 |

##### `at` (https://tomeraberba.ch/assets/post-DMDTSjRj.js:1:22685)

|      % |  Time | Samples | Caller        | Location                                               |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------ |
| 100.0% | 3.0ms |       3 | `(anonymous)` | https://tomeraberba.ch/assets/post-DMDTSjRj.js:1:45390 |

##### `(anonymous)` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:50192)

|      % |  Time | Samples | Caller        | Location                                                       |
| -----: | ----: | ------: | ------------- | -------------------------------------------------------------- |
| 100.0% | 3.0ms |       3 | `(anonymous)` | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:51921 |

##### `Ee` (https://tomeraberba.ch/assets/deserialize-CTeepBb-.js:1:14584)

|      % |  Time | Samples | Caller | Location                                                      |
| -----: | ----: | ------: | ------ | ------------------------------------------------------------- |
| 100.0% | 3.0ms |       3 | `J`    | https://tomeraberba.ch/assets/deserialize-CTeepBb-.js:1:14651 |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function       | Location                                                          |
| ----: | ------: | ------: | -------------- | ----------------------------------------------------------------- |
| 73.5% | 454.3ms |     413 | `am`           | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:121663   |
| 73.3% | 453.3ms |     412 | `Ra`           | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:1733     |
| 73.2% | 452.3ms |     411 | `Em`           | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:138143   |
| 53.6% | 331.3ms |     290 | `ym`           | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:129992   |
| 53.6% | 331.3ms |     290 | `um`           | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:123565   |
| 28.0% | 173.0ms |     173 | `Jv`           | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:110080   |
| 28.0% | 173.0ms |     173 | `ql`           | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:109597   |
| 28.0% | 173.0ms |     173 | `dm`           | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:132714   |
| 25.6% | 158.0ms |     158 | `mn`           | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:105658   |
| 25.6% | 158.0ms |     158 | `Bl`           | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:114498   |
| 25.4% | 157.0ms |     157 | `insertBefore` | `<native>`                                                        |
| 24.3% | 150.4ms |     110 | `$u`           | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:100526   |
| 20.2% | 125.0ms |     125 | `im`           | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:127356   |
| 19.6% | 121.4ms |      81 | `xv`           | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:106137   |
| 19.6% | 121.4ms |      81 | `hm`           | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:133961   |
| 19.5% | 120.4ms |      80 | `Bt`           | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:115066   |
| 19.2% | 118.4ms |      78 | `scrollTo`     | `<native>`                                                        |
| 19.2% | 118.4ms |      78 | `(anonymous)`  | https://tomeraberba.ch/assets/chunk-LFPYN7LY-CZBE6JVM.js:1:122230 |
| 18.6% | 115.0ms |     115 | `(anonymous)`  | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:121766   |
| 18.3% | 113.0ms |     113 | `w1`           | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:127314   |

#### Callees

Callees ranked by contribution to each function's total time. Callee attribution may be imprecise due to inlining.

##### `am` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:121663)

|     % |    Time | Samples | Callee        | Location                                                        |
| ----: | ------: | ------: | ------------- | --------------------------------------------------------------- |
| 72.9% | 331.3ms |     290 | `um`          | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:123565 |
| 25.3% | 115.0ms |     115 | `(anonymous)` | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:121766 |
|  2.6% |  12.0ms |      12 | `qc`          | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:126826 |

##### `Ra` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:1733)

|    % |  Time | Samples | Callee        | Location                                                        |
| ---: | ----: | ------: | ------------- | --------------------------------------------------------------- |
| 0.2% | 1.0ms |       1 | `(anonymous)` | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:130840 |

##### `Em` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:138143)

|      % |    Time | Samples | Callee | Location                                                        |
| -----: | ------: | ------: | ------ | --------------------------------------------------------------- |
| 100.0% | 452.3ms |     411 | `am`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:121663 |

##### `ym` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:129992)

|     % |    Time | Samples | Callee        | Location                                                        |
| ----: | ------: | ------: | ------------- | --------------------------------------------------------------- |
| 52.2% | 173.0ms |     173 | `dm`          | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:132714 |
| 36.6% | 121.4ms |      81 | `hm`          | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:133961 |
| 11.4% |  37.9ms |      37 | `sm`          | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:134150 |
|  0.3% |   1.0ms |       1 | `(anonymous)` | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:130172 |

##### `um` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:123565)

|      % |    Time | Samples | Callee | Location                                                        |
| -----: | ------: | ------: | ------ | --------------------------------------------------------------- |
| 100.0% | 331.3ms |     290 | `ym`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:129992 |

##### `Jv` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:110080)

|      % |    Time | Samples | Callee | Location                                                        |
| -----: | ------: | ------: | ------ | --------------------------------------------------------------- |
| 100.0% | 173.0ms |     173 | `ql`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:109597 |
|  91.3% | 158.0ms |     158 | `Bl`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:114498 |
|   4.6% |   8.0ms |       8 | `gc`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:101950 |
|   0.6% |   1.0ms |       1 | `$u`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:100526 |

##### `ql` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:109597)

|      % |    Time | Samples | Callee | Location                                                        |
| -----: | ------: | ------: | ------ | --------------------------------------------------------------- |
| 100.0% | 173.0ms |     173 | `Jv`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:110080 |
|   3.5% |   6.0ms |       6 | `rv`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:107820 |

##### `dm` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:132714)

|      % |    Time | Samples | Callee | Location                                                        |
| -----: | ------: | ------: | ------ | --------------------------------------------------------------- |
| 100.0% | 173.0ms |     173 | `Jv`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:110080 |

##### `mn` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:105658)

|     % |    Time | Samples | Callee         | Location                                                        |
| ----: | ------: | ------: | -------------- | --------------------------------------------------------------- |
| 99.4% | 157.0ms |     157 | `insertBefore` | `<native>`                                                      |
|  0.6% |   1.0ms |       1 | `appendChild`  | `<native>`                                                      |
|  0.6% |   1.0ms |       1 | `mn`           | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:105658 |

##### `Bl` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:114498)

|      % |    Time | Samples | Callee | Location                                                        |
| -----: | ------: | ------: | ------ | --------------------------------------------------------------- |
| 100.0% | 158.0ms |     158 | `mn`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:105658 |

##### `insertBefore` (`<native>`)

|    % |  Time | Samples | Callee      | Location   |
| ---: | ----: | ------: | ----------- | ---------- |
| 0.6% | 1.0ms |       1 | `(program)` | `<native>` |

##### `$u` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:100526)

|     % |    Time | Samples | Callee        | Location                                                          |
| ----: | ------: | ------: | ------------- | ----------------------------------------------------------------- |
| 78.7% | 118.4ms |      78 | `(anonymous)` | https://tomeraberba.ch/assets/chunk-LFPYN7LY-CZBE6JVM.js:1:122230 |
| 10.0% |  15.0ms |      15 | `(anonymous)` | https://tomeraberba.ch/assets/shrink-wrap-D0I1-yBi.js:1:3711      |
| 10.0% |  15.0ms |      15 | `(anonymous)` | https://tomeraberba.ch/assets/home-BLAXmiwx.js:1:119181           |
|  0.7% |   1.0ms |       1 | `(anonymous)` | https://tomeraberba.ch/assets/home-BLAXmiwx.js:1:57589            |

##### `im` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:127356)

|     % |   Time | Samples | Callee | Location                                                        |
| ----: | -----: | ------: | ------ | --------------------------------------------------------------- |
| 76.8% | 96.0ms |      96 | `ic`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:76767  |
|  9.6% | 12.0ms |      12 | `bn`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:129544 |
|  6.4% |  8.0ms |       8 | `Tv`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:74438  |
|  4.8% |  6.0ms |       6 | `Yv`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:85644  |
|  1.6% |  2.0ms |       2 | `_t`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:85165  |

##### `xv` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:106137)

|     % |    Time | Samples | Callee | Location                                                        |
| ----: | ------: | ------: | ------ | --------------------------------------------------------------- |
| 99.2% | 120.4ms |      80 | `Bt`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:115066 |
| 98.4% | 119.4ms |      79 | `$u`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:100526 |

##### `hm` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:133961)

|      % |    Time | Samples | Callee | Location                                                        |
| -----: | ------: | ------: | ------ | --------------------------------------------------------------- |
| 100.0% | 121.4ms |      81 | `xv`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:106137 |

##### `Bt` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:115066)

|      % |    Time | Samples | Callee | Location                                                        |
| -----: | ------: | ------: | ------ | --------------------------------------------------------------- |
| 100.0% | 120.4ms |      80 | `xv`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:106137 |

##### `(anonymous)` (https://tomeraberba.ch/assets/chunk-LFPYN7LY-CZBE6JVM.js:1:122230)

|      % |    Time | Samples | Callee     | Location   |
| -----: | ------: | ------: | ---------- | ---------- |
| 100.0% | 118.4ms |      78 | `scrollTo` | `<native>` |

##### `(anonymous)` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:121766)

|     % |    Time | Samples | Callee | Location                                                        |
| ----: | ------: | ------: | ------ | --------------------------------------------------------------- |
| 98.3% | 113.0ms |     113 | `w1`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:127314 |
|  0.9% |   1.0ms |       1 | `du`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:125908 |

##### `w1` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:127314)

|      % |    Time | Samples | Callee | Location                                                        |
| -----: | ------: | ------: | ------ | --------------------------------------------------------------- |
| 100.0% | 113.0ms |     113 | `im`   | https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:127356 |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 19.2% | 118.4ms |      78 | `scrollTo` ← `(anonymous)` (https://tomeraberba.ch/assets/chunk-LFPYN7LY-CZBE6JVM.js:1:122230) ← `$u` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:100526) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `Bt` (1:115066) ← `xv` (1:106137) ← `hm` (1:133961) ← `ym` (1:129992) ← `um` (1:123565) ← `am` (1:121663) ← `Em` (1:138143) ← `Ra` (1:1733)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  5.3% |  33.0ms |      33 | `(anonymous)` (https://tomeraberba.ch/assets/deserialize-CTeepBb-.js:1:244) ← `wr` (https://tomeraberba.ch/assets/home-BLAXmiwx.js:1:125279) ← `(anonymous)` (1:124929) ← `(anonymous)` (https://tomeraberba.ch/assets/deserialize-CTeepBb-.js:1:560) ← `W` (1:1414) ← `xe` (1:419) ← `ud` (https://tomeraberba.ch/assets/home-BLAXmiwx.js:1:123670) ← `Vf` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:56250) ← `ic` (1:76767) ← `im` (1:127356) ← `w1` (1:127314) ← `(anonymous)` (1:121766) ← `am` (1:121663) ← `Em` (1:138143) ← `Ra` (1:1733)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  5.0% |  31.0ms |      31 | `insertBefore` ← `mn` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:105658) ← `Bl` (1:114498) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `dm` (1:132714) ← `ym` (1:129992) ← `um` (1:123565) ← `am` (1:121663) ← `Em` (1:138143) ← `Ra` (1:1733)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.9% |  18.0ms |      18 | `insertBefore` ← `mn` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:105658) ← `Bl` (1:114498) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `dm` (1:132714) ← `ym` (1:129992) ← `um` (1:123565) ← `am` (1:121663) ← `Em` (1:138143) ← `Ra` (1:1733)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.1% |  13.0ms |      13 | `(anonymous)` (https://tomeraberba.ch/assets/home-BLAXmiwx.js:1:118859) ← `(anonymous)` (1:119181) ← `$u` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:100526) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `Sm` (1:134865) ← `Am` (1:138472) ← `ue` (1:136637) ← `sm` (1:134150) ← `ym` (1:129992) ← `um` (1:123565) ← `am` (1:121663) ← `Em` (1:138143) ← `Ra` (1:1733)                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.9% |  12.0ms |      12 | `getPropertyValue` ← `insertBefore` ← `mn` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:105658) ← `Bl` (1:114498) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `dm` (1:132714) ← `ym` (1:129992) ← `um` (1:123565) ← `am` (1:121663) ← `Em` (1:138143) ← `Ra` (1:1733)                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.9% |  12.0ms |      12 | `insertBefore` ← `mn` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:105658) ← `Bl` (1:114498) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `dm` (1:132714) ← `ym` (1:129992) ← `um` (1:123565) ← `am` (1:121663) ← `Em` (1:138143) ← `Ra` (1:1733)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.9% |  12.0ms |      12 | `getPropertyValue` ← `(anonymous)` (https://tomeraberba.ch/assets/shrink-wrap-D0I1-yBi.js:1:2567) ← `_processComputedStyle` (1:2479) ← `_handleUpdate` (1:2887) ← `observe` (1:1561) ← `(anonymous)` (1:3711) ← `$u` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:100526) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `it` (1:116768) ← `Wv` (1:116861) ← `Sm` (1:134865) ← `Am` (1:138472) ← `ue` (1:136637) ← `sm` (1:134150) ← `ym` (1:129992) ← `um` (1:123565) ← `am` (1:121663) ← `Em` (1:138143) ← `Ra` (1:1733) |
|  1.8% |  11.0ms |      11 | `getBoundingClientRect` ← `Ne` (https://tomeraberba.ch/assets/home-BLAXmiwx.js:1:16147) ← `Dr` (1:15240)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.6% |  10.0ms |      10 | `(anonymous)` (https://tomeraberba.ch/assets/chunk-LFPYN7LY-CZBE6JVM.js:1:122137) ← `(anonymous)` (1:26765) ← `(anonymous)` (1:26687) ← `Ue` (1:26680) ← `(anonymous)` (1:39725) ← `Ar` (1:39720) ← `(anonymous)` (1:66459) ← `(anonymous)` (1:66449) ← `(anonymous)` (1:116360) ← `(anonymous)` (1:117018) ← `Om` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:140394) ← `(anonymous)` (1:142078) ← `Bi` (1:24177) ← `Zc` (1:141675) ← `Pc` (1:169323) ← `Bd` (1:169137)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.8% |   5.1ms |       6 | `(anonymous)` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:142078) ← `Bi` (1:24177) ← `Zc` (1:141675) ← `Pc` (1:169323) ← `Yd` (1:169230)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.8% |   5.0ms |       5 | `insertBefore` ← `mn` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:105658) ← `Bl` (1:114498) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `dm` (1:132714) ← `ym` (1:129992) ← `um` (1:123565) ← `am` (1:121663) ← `Em` (1:138143) ← `Ra` (1:1733)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.6% |   4.0ms |       4 | `xn` (https://tomeraberba.ch/assets/chunk-LFPYN7LY-CZBE6JVM.js:1:83381) ← `(anonymous)` (1:85850)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.6% |   4.0ms |       4 | `toLocaleDateString` ← `Je` (https://tomeraberba.ch/assets/post-DMDTSjRj.js:1:46948) ← `Vf` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:56250) ← `ic` (1:76767) ← `im` (1:127356) ← `w1` (1:127314) ← `(anonymous)` (1:121766) ← `am` (1:121663) ← `Em` (1:138143) ← `Ra` (1:1733)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.6% |   4.0ms |       4 | `setAttribute` ← `J` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:147819) ← `Tl` (1:153179) ← `p1` (1:93533) ← `bn` (1:129544) ← `im` (1:127356) ← `w1` (1:127314) ← `(anonymous)` (1:121766) ← `am` (1:121663) ← `Em` (1:138143) ← `Ra` (1:1733)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.5% |   3.0ms |       3 | `Bi` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:24177) ← `Zc` (1:141675) ← `Pc` (1:169323) ← `Yd` (1:169230)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.5% |   3.0ms |       3 | `at` (https://tomeraberba.ch/assets/post-DMDTSjRj.js:1:22685) ← `(anonymous)` (1:45390) ← `pr` (1:45171) ← `Vf` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:56250) ← `ic` (1:76767) ← `im` (1:127356) ← `w1` (1:127314) ← `(anonymous)` (1:121766) ← `am` (1:121663) ← `Em` (1:138143) ← `Ra` (1:1733)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.5% |   3.0ms |       3 | `insertBefore` ← `mn` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:105658) ← `Bl` (1:114498) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `dm` (1:132714) ← `ym` (1:129992) ← `um` (1:123565) ← `am` (1:121663) ← `Em` (1:138143) ← `Ra` (1:1733)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.5% |   3.0ms |       3 | `insertBefore` ← `mn` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:105658) ← `Bl` (1:114498) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `dm` (1:132714) ← `ym` (1:129992) ← `um` (1:123565) ← `am` (1:121663) ← `Em` (1:138143) ← `Ra` (1:1733)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.5% |   3.0ms |       3 | `insertBefore` ← `mn` (https://tomeraberba.ch/assets/entry.client-Ne_rep3S.js:1:105658) ← `Bl` (1:114498) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `ql` (1:109597) ← `Jv` (1:110080) ← `dm` (1:132714) ← `ym` (1:129992) ← `um` (1:123565) ← `am` (1:121663) ← `Em` (1:138143) ← `Ra` (1:1733)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

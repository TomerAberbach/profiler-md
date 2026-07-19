# Sampling profile

Collected 19,789 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| stdlib   | 99.8% |  19,758 |
| ours     |  0.2% |      31 |

Hidden functions account for 93.0% of samples taken, so the hottest are also shown.

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                | Location  |
| ----: | ------: | ----------------------- | --------- |
| 15.7% |   3,100 | `escape_binary/5`       | `json`    |
| 11.9% |   2,360 | `string/7`              | `json`    |
| 10.3% |   2,033 | `escape_binary_ascii/5` | `json`    |
|  7.2% |   1,420 | `escape_binary_utf8/6`  | `json`    |
|  4.3% |     855 | `do_encode/2`           | `json`    |
|  2.5% |     485 | `do_encode_map/2`       | `json`    |
|  0.1% |      15 | `encode/1`              | `profile` |
|  0.1% |      10 | `-run/1-fun-0-/2`       | `profile` |
| <0.1% |       5 | `encode/1`              | `json`    |
| <0.1% |       5 | `encode/2`              | `json`    |
| <0.1% |       5 | `iolist_to_binary/1`    | `erlang`  |
| <0.1% |       5 | `decode/1`              | `profile` |
| <0.1% |       2 | `seq/2`                 | `lists`   |
| <0.1% |       2 | `seq_loop/3`            | `lists`   |
| <0.1% |       1 | `run/1`                 | `profile` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `escape_binary/5` (`json`)

|      % | Samples | Caller                          | Location |
| -----: | ------: | ------------------------------- | -------- |
| 100.0% |   3,100 | `-do_encode_map/2-lc$^0/1-0-/2` | `json`   |

##### `string/7` (`json`)

|      % | Samples | Caller     | Location |
| -----: | ------: | ---------- | -------- |
| 100.0% |   2,360 | `decode/1` | `json`   |

##### `escape_binary_ascii/5` (`json`)

|      % | Samples | Caller                          | Location |
| -----: | ------: | ------------------------------- | -------- |
| 100.0% |   2,033 | `-do_encode_map/2-lc$^0/1-0-/2` | `json`   |

##### `escape_binary_utf8/6` (`json`)

|      % | Samples | Caller                          | Location |
| -----: | ------: | ------------------------------- | -------- |
| 100.0% |   1,420 | `-do_encode_map/2-lc$^0/1-0-/2` | `json`   |

##### `do_encode/2` (`json`)

|     % | Samples | Caller                          | Location  |
| ----: | ------: | ------------------------------- | --------- |
| 96.3% |     823 | `-do_encode_map/2-lc$^0/1-0-/2` | `json`    |
|  0.6% |       5 | `encode/1`                      | `profile` |

##### `do_encode_map/2` (`json`)

|     % | Samples | Caller                          | Location  |
| ----: | ------: | ------------------------------- | --------- |
| 64.9% |     315 | `-do_encode_map/2-lc$^0/1-0-/2` | `json`    |
| 26.8% |     130 | `encode/1`                      | `profile` |

##### `encode/1` (`profile`)

|      % | Samples | Caller            | Location  |
| -----: | ------: | ----------------- | --------- |
| 100.0% |      15 | `-run/1-fun-0-/2` | `profile` |

##### `-run/1-fun-0-/2` (`profile`)

|     % | Samples | Caller      | Location |
| ----: | ------: | ----------- | -------- |
| 80.0% |       8 | `foldl_1/3` | `lists`  |

##### `encode/1` (`json`)

|      % | Samples | Caller     | Location  |
| -----: | ------: | ---------- | --------- |
| 100.0% |       5 | `encode/1` | `profile` |

##### `encode/2` (`json`)

|      % | Samples | Caller     | Location  |
| -----: | ------: | ---------- | --------- |
| 100.0% |       5 | `encode/1` | `profile` |

##### `iolist_to_binary/1` (`erlang`)

|      % | Samples | Caller     | Location  |
| -----: | ------: | ---------- | --------- |
| 100.0% |       5 | `encode/1` | `profile` |

##### `decode/1` (`profile`)

|     % | Samples | Caller      | Location |
| ----: | ------: | ----------- | -------- |
| 80.0% |       4 | `foldl_1/3` | `lists`  |

##### `seq/2` (`lists`)

|      % | Samples | Caller  | Location  |
| -----: | ------: | ------- | --------- |
| 100.0% |       2 | `run/1` | `profile` |

##### `seq_loop/3` (`lists`)

|      % | Samples | Caller  | Location  |
| -----: | ------: | ------- | --------- |
| 100.0% |       2 | `run/1` | `profile` |

##### `run/1` (`profile`)

|      % | Samples | Caller    | Location  |
| -----: | ------: | --------- | --------- |
| 100.0% |       1 | `apply/2` | `eflambe` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                | Location  |
| ----: | ------: | ----------------------- | --------- |
| 49.5% |   9,794 | `-run/1-fun-0-/2`       | `profile` |
| 49.4% |   9,784 | `encode/1`              | `profile` |
| 49.3% |   9,749 | `do_encode_map/2`       | `json`    |
| 15.7% |   3,112 | `escape_binary/5`       | `json`    |
| 11.9% |   2,362 | `string/7`              | `json`    |
| 10.3% |   2,033 | `escape_binary_ascii/5` | `json`    |
|  7.2% |   1,420 | `escape_binary_utf8/6`  | `json`    |
|  4.6% |     920 | `do_encode/2`           | `json`    |
| <0.1% |       5 | `run/1`                 | `profile` |
| <0.1% |       5 | `encode/1`              | `json`    |
| <0.1% |       5 | `encode/2`              | `json`    |
| <0.1% |       5 | `iolist_to_binary/1`    | `erlang`  |
| <0.1% |       5 | `decode/1`              | `profile` |
| <0.1% |       2 | `seq/2`                 | `lists`   |
| <0.1% |       2 | `seq_loop/3`            | `lists`   |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `-run/1-fun-0-/2` (`profile`)

|     % | Samples | Callee     | Location  |
| ----: | ------: | ---------- | --------- |
| 99.9% |   9,784 | `encode/1` | `profile` |

##### `encode/1` (`profile`)

|     % | Samples | Callee               | Location |
| ----: | ------: | -------------------- | -------- |
| 99.6% |   9,749 | `do_encode_map/2`    | `json`   |
|  0.1% |       5 | `encode/1`           | `json`   |
|  0.1% |       5 | `encode/2`           | `json`   |
|  0.1% |       5 | `do_encode/2`        | `json`   |
|  0.1% |       5 | `iolist_to_binary/1` | `erlang` |

##### `do_encode_map/2` (`json`)

|     % | Samples | Callee                          | Location |
| ----: | ------: | ------------------------------- | -------- |
| 98.5% |   9,604 | `-do_encode_map/2-lc$^0/1-0-/2` | `json`   |

##### `escape_binary/5` (`json`)

|    % | Samples | Callee  | Location    |
| ---: | ------: | ------- | ----------- |
| 0.4% |      12 | `sleep` | `<unknown>` |

##### `string/7` (`json`)

|    % | Samples | Callee  | Location    |
| ---: | ------: | ------- | ----------- |
| 0.1% |       2 | `sleep` | `<unknown>` |

##### `do_encode/2` (`json`)

|    % | Samples | Callee                | Location |
| ---: | ------: | --------------------- | -------- |
| 7.1% |      65 | `integer_to_binary/1` | `erlang` |

##### `run/1` (`profile`)

|     % | Samples | Callee       | Location |
| ----: | ------: | ------------ | -------- |
| 40.0% |       2 | `seq/2`      | `lists`  |
| 40.0% |       2 | `seq_loop/3` | `lists`  |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `-run/1-fun-0-/2` (`profile`)

|     % | Samples | Call stack                                                                                                                          |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------- |
|  7.7% |   1,524 | `escape_binary/5` (`json`) ← `do_encode_map/2` ← `do_encode_map/2` ← `encode/1` (`profile`)                                         |
|  6.9% |   1,357 | `escape_binary/5` (`json`) ← `do_encode_map/2` ← `encode/1` (`profile`)                                                             |
|  6.7% |   1,332 | `do_encode_map/2` (`json`) ← `do_encode_map/2` ← `encode/1` (`profile`)                                                             |
|  5.6% |   1,110 | `escape_binary_utf8/6` (`json`) ← `do_encode_map/2` ← `encode/1` (`profile`)                                                        |
|  5.0% |     989 | `escape_binary_ascii/5` (`json`) ← `do_encode_map/2` ← `do_encode_map/2` ← `encode/1` (`profile`)                                   |
|  4.8% |     949 | `escape_binary_ascii/5` (`json`) ← `do_encode_map/2` ← `encode/1` (`profile`)                                                       |
|  3.1% |     611 | `do_encode_map/2` (`json`) ← `encode/1` (`profile`)                                                                                 |
|  2.7% |     530 | `do_encode/2` (`json`) ← `do_encode_map/2` ← `do_encode_map/2` ← `encode/1` (`profile`)                                             |
|  1.4% |     273 | `do_encode/2` (`json`) ← `do_encode_map/2` ← `encode/1` (`profile`)                                                                 |
|  1.3% |     261 | `do_encode_map/2` (`json`) ← `do_encode_map/2` ← `do_encode_map/2` ← `encode/1` (`profile`)                                         |
|  1.3% |     260 | `escape_binary_utf8/6` (`json`) ← `do_encode_map/2` ← `do_encode_map/2` ← `encode/1` (`profile`)                                    |
|  1.0% |     206 | `escape_binary/5` (`json`) ← `do_encode_map/2` ← `do_encode_map/2` ← `do_encode_map/2` ← `encode/1` (`profile`)                     |
|  0.5% |     102 | `do_encode/2` (`json`) ← `do_encode_map/2` ← `do_encode_map/2` ← `do_encode_map/2` ← `encode/1` (`profile`)                         |
|  0.5% |      90 | `escape_binary_ascii/5` (`json`) ← `do_encode_map/2` ← `do_encode_map/2` ← `do_encode_map/2` ← `encode/1` (`profile`)               |
|  0.3% |      65 | `do_encode_map/2` (`json`) ← `do_encode_map/2` ← `do_encode_map/2` ← `do_encode_map/2` ← `encode/1` (`profile`)                     |
|  0.3% |      50 | `escape_binary_utf8/6` (`json`) ← `do_encode_map/2` ← `do_encode_map/2` ← `do_encode_map/2` ← `encode/1` (`profile`)                |
|  0.1% |      25 | `escape_binary/5` (`json`) ← `do_encode_map/2` ← `do_encode_map/2` ← `do_encode_map/2` ← `do_encode_map/2` ← `encode/1` (`profile`) |
|  0.1% |      15 | `encode/1` (`profile`)                                                                                                              |
|  0.1% |      10 | `do_encode/2` (`json`) ← `do_encode_map/2` ← `do_encode_map/2` ← `do_encode_map/2` ← `do_encode_map/2` ← `encode/1` (`profile`)     |
| <0.1% |       5 | `encode/1` (`json`) ← `encode/1` (`profile`)                                                                                        |

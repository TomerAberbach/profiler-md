# Sampling profile

Collected 19,789 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| stdlib   | 99.8% |  19,758 |
| ours     |  0.2% |      31 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function             | Location  |
| ----: | ------: | -------------------- | --------- |
|  4.3% |     855 | `do_encode/2`        | `json`    |
|  2.5% |     485 | `do_encode_map/2`    | `json`    |
|  0.1% |      15 | `encode/1`           | `profile` |
|  0.1% |      10 | `-run/1-fun-0-/2`    | `profile` |
| <0.1% |       5 | `encode/1`           | `json`    |
| <0.1% |       5 | `encode/2`           | `json`    |
| <0.1% |       5 | `iolist_to_binary/1` | `erlang`  |
| <0.1% |       5 | `decode/1`           | `profile` |
| <0.1% |       2 | `seq/2`              | `lists`   |
| <0.1% |       2 | `seq_loop/3`         | `lists`   |
| <0.1% |       1 | `run/1`              | `profile` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `do_encode/2` (`json`)

|    % | Samples | Caller     | Location  |
| ---: | ------: | ---------- | --------- |
| 0.6% |       5 | `encode/1` | `profile` |

##### `do_encode_map/2` (`json`)

|     % | Samples | Caller     | Location  |
| ----: | ------: | ---------- | --------- |
| 26.8% |     130 | `encode/1` | `profile` |

##### `encode/1` (`profile`)

|      % | Samples | Caller            | Location  |
| -----: | ------: | ----------------- | --------- |
| 100.0% |      15 | `-run/1-fun-0-/2` | `profile` |

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

##### `seq/2` (`lists`)

|      % | Samples | Caller  | Location  |
| -----: | ------: | ------- | --------- |
| 100.0% |       2 | `run/1` | `profile` |

##### `seq_loop/3` (`lists`)

|      % | Samples | Caller  | Location  |
| -----: | ------: | ------- | --------- |
| 100.0% |       2 | `run/1` | `profile` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function             | Location  |
| ----: | ------: | -------------------- | --------- |
| 49.5% |   9,794 | `-run/1-fun-0-/2`    | `profile` |
| 49.4% |   9,784 | `encode/1`           | `profile` |
| 49.3% |   9,749 | `do_encode_map/2`    | `json`    |
|  4.6% |     920 | `do_encode/2`        | `json`    |
| <0.1% |       5 | `run/1`              | `profile` |
| <0.1% |       5 | `encode/1`           | `json`    |
| <0.1% |       5 | `encode/2`           | `json`    |
| <0.1% |       5 | `iolist_to_binary/1` | `erlang`  |
| <0.1% |       5 | `decode/1`           | `profile` |
| <0.1% |       2 | `seq/2`              | `lists`   |
| <0.1% |       2 | `seq_loop/3`         | `lists`   |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

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

##### `run/1` (`profile`)

|     % | Samples | Callee       | Location |
| ----: | ------: | ------------ | -------- |
| 40.0% |       2 | `seq/2`      | `lists`  |
| 40.0% |       2 | `seq_loop/3` | `lists`  |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|     % | Samples | Call stack                                                                                                                                          |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20.7% |   4,105 | `do_encode_map/2` (`json`) ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                                         |
| 20.3% |   4,027 | `do_encode_map/2` (`json`) ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                                                             |
|  3.1% |     607 | `do_encode_map/2` (`json`) ← `do_encode_map/2` ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                     |
|  2.7% |     530 | `do_encode/2` (`json`) ← `do_encode_map/2` ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                         |
|  1.4% |     273 | `do_encode/2` (`json`) ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                                             |
|  0.5% |     102 | `do_encode/2` (`json`) ← `do_encode_map/2` ← `do_encode_map/2` ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                     |
|  0.5% |      95 | `do_encode_map/2` (`json`) ← `do_encode_map/2` ← `do_encode_map/2` ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                 |
|  0.1% |      15 | `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                                                                                          |
|  0.1% |      10 | `do_encode/2` (`json`) ← `do_encode_map/2` ← `do_encode_map/2` ← `do_encode_map/2` ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2` |
| <0.1% |       5 | `encode/1` (`json`) ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                                                                    |
| <0.1% |       5 | `encode/2` (`json`) ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                                                                    |
| <0.1% |       5 | `do_encode/2` (`json`) ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                                                                 |
| <0.1% |       5 | `iolist_to_binary/1` (`erlang`) ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                                                        |
| <0.1% |       2 | `seq/2` (`lists`) ← `run/1` (`profile`)                                                                                                             |
| <0.1% |       2 | `seq_loop/3` (`lists`) ← `run/1` (`profile`)                                                                                                        |

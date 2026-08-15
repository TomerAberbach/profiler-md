# Wall time profile

Took 19.8ms.

| Category         |     % |   Time |
| ---------------- | ----: | -----: |
| Standard library | 99.7% | 19.7ms |
| Ours             |  0.2% | 31.0µs |
| Idle             |  0.1% | 20.0µs |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |   Time | Function             | Location    |
| ----: | -----: | -------------------- | ----------- |
|  4.3% |  0.9ms | `do_encode/2`        | `json`      |
|  2.5% |  0.5ms | `do_encode_map/2`    | `json`      |
|  0.1% | 20.0µs | `sleep`              | `<unknown>` |
|  0.1% | 15.0µs | `encode/1`           | `profile`   |
|  0.1% | 10.0µs | `-run/1-fun-0-/2`    | `profile`   |
| <0.1% |  5.0µs | `encode/1`           | `json`      |
| <0.1% |  5.0µs | `encode/2`           | `json`      |
| <0.1% |  5.0µs | `iolist_to_binary/1` | `erlang`    |
| <0.1% |  5.0µs | `decode/1`           | `profile`   |
| <0.1% |  2.0µs | `seq/2`              | `lists`     |
| <0.1% |  2.0µs | `seq_loop/3`         | `lists`     |
| <0.1% |  1.0µs | `run/1`              | `profile`   |

#### Categories

##### Standard library

|     % |  Time | Function             | Location |
| ----: | ----: | -------------------- | -------- |
|  4.3% | 0.9ms | `do_encode/2`        | `json`   |
|  2.5% | 0.5ms | `do_encode_map/2`    | `json`   |
| <0.1% | 5.0µs | `encode/1`           | `json`   |
| <0.1% | 5.0µs | `encode/2`           | `json`   |
| <0.1% | 5.0µs | `iolist_to_binary/1` | `erlang` |
| <0.1% | 2.0µs | `seq/2`              | `lists`  |
| <0.1% | 2.0µs | `seq_loop/3`         | `lists`  |

##### Ours

|     % |   Time | Function          | Location  |
| ----: | -----: | ----------------- | --------- |
|  0.1% | 15.0µs | `encode/1`        | `profile` |
|  0.1% | 10.0µs | `-run/1-fun-0-/2` | `profile` |
| <0.1% |  5.0µs | `decode/1`        | `profile` |
| <0.1% |  1.0µs | `run/1`           | `profile` |

##### Idle

|    % |   Time | Function | Location    |
| ---: | -----: | -------- | ----------- |
| 0.1% | 20.0µs | `sleep`  | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `do_encode/2` (`json`)

|    % |  Time | Caller     | Location  |
| ---: | ----: | ---------- | --------- |
| 0.6% | 5.0µs | `encode/1` | `profile` |

##### `do_encode_map/2` (`json`)

|     % |  Time | Caller     | Location  |
| ----: | ----: | ---------- | --------- |
| 26.8% | 0.1ms | `encode/1` | `profile` |

##### `encode/1` (`profile`)

|      % |   Time | Caller            | Location  |
| -----: | -----: | ----------------- | --------- |
| 100.0% | 15.0µs | `-run/1-fun-0-/2` | `profile` |

##### `encode/1` (`json`)

|      % |  Time | Caller     | Location  |
| -----: | ----: | ---------- | --------- |
| 100.0% | 5.0µs | `encode/1` | `profile` |

##### `encode/2` (`json`)

|      % |  Time | Caller     | Location  |
| -----: | ----: | ---------- | --------- |
| 100.0% | 5.0µs | `encode/1` | `profile` |

##### `iolist_to_binary/1` (`erlang`)

|      % |  Time | Caller     | Location  |
| -----: | ----: | ---------- | --------- |
| 100.0% | 5.0µs | `encode/1` | `profile` |

##### `seq/2` (`lists`)

|      % |  Time | Caller  | Location  |
| -----: | ----: | ------- | --------- |
| 100.0% | 2.0µs | `run/1` | `profile` |

##### `seq_loop/3` (`lists`)

|      % |  Time | Caller  | Location  |
| -----: | ----: | ------- | --------- |
| 100.0% | 2.0µs | `run/1` | `profile` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |   Time | Function             | Location    |
| ----: | -----: | -------------------- | ----------- |
| 49.5% |  9.8ms | `-run/1-fun-0-/2`    | `profile`   |
| 49.4% |  9.8ms | `encode/1`           | `profile`   |
| 49.3% |  9.7ms | `do_encode_map/2`    | `json`      |
|  4.6% |  0.9ms | `do_encode/2`        | `json`      |
|  0.1% | 20.0µs | `sleep`              | `<unknown>` |
| <0.1% |  5.0µs | `run/1`              | `profile`   |
| <0.1% |  5.0µs | `encode/1`           | `json`      |
| <0.1% |  5.0µs | `encode/2`           | `json`      |
| <0.1% |  5.0µs | `iolist_to_binary/1` | `erlang`    |
| <0.1% |  5.0µs | `decode/1`           | `profile`   |
| <0.1% |  2.0µs | `seq/2`              | `lists`     |
| <0.1% |  2.0µs | `seq_loop/3`         | `lists`     |

#### Categories

##### Standard library

|     % |  Time | Function             | Location |
| ----: | ----: | -------------------- | -------- |
| 49.3% | 9.7ms | `do_encode_map/2`    | `json`   |
|  4.6% | 0.9ms | `do_encode/2`        | `json`   |
| <0.1% | 5.0µs | `encode/1`           | `json`   |
| <0.1% | 5.0µs | `encode/2`           | `json`   |
| <0.1% | 5.0µs | `iolist_to_binary/1` | `erlang` |
| <0.1% | 2.0µs | `seq/2`              | `lists`  |
| <0.1% | 2.0µs | `seq_loop/3`         | `lists`  |

##### Ours

|     % |  Time | Function          | Location  |
| ----: | ----: | ----------------- | --------- |
| 49.5% | 9.8ms | `-run/1-fun-0-/2` | `profile` |
| 49.4% | 9.8ms | `encode/1`        | `profile` |
| <0.1% | 5.0µs | `run/1`           | `profile` |
| <0.1% | 5.0µs | `decode/1`        | `profile` |

##### Idle

|    % |   Time | Function | Location    |
| ---: | -----: | -------- | ----------- |
| 0.1% | 20.0µs | `sleep`  | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `-run/1-fun-0-/2` (`profile`)

|     % |  Time | Callee     | Location  |
| ----: | ----: | ---------- | --------- |
| 99.9% | 9.8ms | `encode/1` | `profile` |

##### `encode/1` (`profile`)

|     % |  Time | Callee               | Location |
| ----: | ----: | -------------------- | -------- |
| 99.6% | 9.7ms | `do_encode_map/2`    | `json`   |
|  0.1% | 5.0µs | `encode/1`           | `json`   |
|  0.1% | 5.0µs | `encode/2`           | `json`   |
|  0.1% | 5.0µs | `do_encode/2`        | `json`   |
|  0.1% | 5.0µs | `iolist_to_binary/1` | `erlang` |

##### `run/1` (`profile`)

|     % |  Time | Callee       | Location |
| ----: | ----: | ------------ | -------- |
| 40.0% | 2.0µs | `seq/2`      | `lists`  |
| 40.0% | 2.0µs | `seq_loop/3` | `lists`  |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame. `…` stands for frames the entry filter hides.

|     % |   Time | Call stack                                                                                                                                                          |
| ----: | -----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 20.7% |  4.1ms | `do_encode_map/2` (`json`) ← … ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                                                     |
| 20.3% |  4.0ms | `do_encode_map/2` (`json`) ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                                                                             |
|  3.0% |  0.6ms | `do_encode_map/2` (`json`) ← … ← `do_encode_map/2` ← … ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                             |
|  2.7% |  0.5ms | `do_encode/2` (`json`) ← … ← `do_encode_map/2` ← … ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                                 |
|  1.4% |  0.3ms | `do_encode/2` (`json`) ← … ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                                                         |
|  0.5% |  0.1ms | `do_encode/2` (`json`) ← … ← `do_encode_map/2` ← … ← `do_encode_map/2` ← … ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                         |
|  0.5% |  0.1ms | `do_encode_map/2` (`json`) ← … ← `do_encode_map/2` ← … ← `do_encode_map/2` ← … ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                     |
|  0.1% | 15.0µs | `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                                                                                                          |
|  0.1% | 10.0µs | `do_encode/2` (`json`) ← … ← `do_encode_map/2` ← … ← `do_encode_map/2` ← … ← `do_encode_map/2` ← … ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2` |
| <0.1% |  8.0µs | `sleep` ← … ← `do_encode_map/2` (`json`) ← … ← `do_encode_map/2` ← … ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                               |
| <0.1% |  5.0µs | `encode/1` (`json`) ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                                                                                    |
| <0.1% |  5.0µs | `encode/2` (`json`) ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                                                                                    |
| <0.1% |  5.0µs | `do_encode/2` (`json`) ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                                                                                 |
| <0.1% |  5.0µs | `iolist_to_binary/1` (`erlang`) ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                                                                        |
| <0.1% |  4.0µs | `sleep` ← … ← `do_encode_map/2` (`json`) ← … ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                                       |
| <0.1% |  2.0µs | `seq/2` (`lists`) ← `run/1` (`profile`)                                                                                                                             |
| <0.1% |  2.0µs | `seq_loop/3` (`lists`) ← `run/1` (`profile`)                                                                                                                        |
| <0.1% |  2.0µs | `sleep` ← … ← `do_encode_map/2` (`json`) ← `encode/1` (`profile`) ← `-run/1-fun-0-/2`                                                                               |

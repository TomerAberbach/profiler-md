# Wall time profile

Took 19.8ms.

| Category         |     % |   Time |
| ---------------- | ----: | -----: |
| Standard library | 99.7% | 19.7ms |
| Ours             |  0.2% | 31.0µs |
| Idle             |  0.1% | 20.0µs |

## Call tree

The call paths to the hottest functions by self time, merged into a tree of callers. Each frame shows the wall time spent in it and its callees, as a share of the profile and as a value. `[[n frames hidden]]` stands for the callers between two of them, whose share the line above it states. `n more branches` counts the callees on no such path, each standing for everything below it, and states their total and the largest of them. `(n% self across m call paths)` states the self time of a function across every call path to it, where the path drawn to it holds only part.

```
└── 19.8ms (100.0%) <0.10.0>
    └── 19.8ms (100.0%) apply/2  eflambe
        ├── 15.8ms (79.9%) foldl_1/3  lists
        │   ├── 8.0ms (40.2%) decode/1  json
        │   │   ├── 1.9ms (9.5%) string/7  (11.9% self across 2 call paths)
        │   │   ├── 1.1ms (5.6%) string_ascii/7  (7.0% self across 2 call paths)
        │   │   ├── 0.9ms (4.5%) string_utf8/10  (5.6% self across 2 call paths)
        │   │   ├── 0.6ms (3.2%) continue/7  (4.0% self across 2 call paths)
        │   │   ├── 0.6ms (3.0%) string/9  (3.7% self across 2 call paths)
        │   │   ├── 0.5ms (2.6%) string_ascii/9  (3.3% self across 2 call paths)
        │   │   ├── 0.5ms (2.5%) number/7
        │   │   │   └── 0.2ms (1.1%) binary_to_integer/1  erlang
        │   │   │       ├── 0.1ms (0.5%) big_binary_to_int/2
        │   │   │       └── 36.0µs (0.2%) binary_to_integer/2  erts_internal
        │   │   ├── 0.4ms (1.8%) object_push/8
        │   │   ├── 0.3ms (1.6%) value/6
        │   │   ├── 0.3ms (1.5%) object_value/7
        │   │   ├── 0.3ms (1.5%) object_key/6
        │   │   ├── 0.2ms (1.3%) string_utf8/8
        │   │   ├── 0.1ms (0.4%) number_zero/7
        │   │   ├── 0.1ms (0.3%) false/6
        │   │   ├── 0.1ms (0.3%) unescape/9
        │   │   └── 36.0µs (0.2%) null/6
        │   └── 7.8ms (39.6%) [[2 frames hidden in 1 source]]
        │       └── 7.8ms (39.4%) do_encode_map/2  json  (2.5% self across 10 call paths)
        │           └── 7.7ms (38.8%) -do_encode_map/2-lc$^0/1-0-/2  (6.1% self across 10 call paths)
        │               ├── 4.4ms (22.0%) do_encode_map/2
        │               │   ├── 4.1ms (20.7%) -do_encode_map/2-lc$^0/1-0-/2
        │               │   │   ├── 1.2ms (6.2%) escape_binary/5  (15.7% self across 10 call paths)
        │               │   │   ├── 0.8ms (4.0%) escape_binary_ascii/5  (10.3% self across 10 call paths)
        │               │   │   ├── 0.5ms (2.6%) do_encode_list/2
        │               │   │   │   └── 0.5ms (2.5%) 3 more branches, hottest do_encode_map/2
        │               │   │   ├── 0.4ms (2.1%) do_encode/2  (4.3% self across 18 call paths)
        │               │   │   │   └── 24.0µs (0.1%) integer_to_binary/1  erlang
        │               │   │   ├── 0.2ms (0.9%) key/2  (1.9% self across 10 call paths)
        │               │   │   └── 0.4ms (2.0%) 3 more branches, hottest escape_binary_utf8/6
        │               │   └── 38.0µs (0.2%) mc_iterator/1  erts_internal
        │               ├── 0.9ms (4.5%) escape_binary_utf8/6  (7.2% self across 6 call paths)
        │               └── 2.2ms (10.9%) 4 more branches, hottest escape_binary/5
        └── 4.0ms (20.1%) 3 more branches, hottest foldl/3  lists
```

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

#### Categories

##### Standard library

|     % |  Time | Function                        | Location |
| ----: | ----: | ------------------------------- | -------- |
| 15.7% | 3.1ms | `escape_binary/5`               | `json`   |
| 11.9% | 2.4ms | `string/7`                      | `json`   |
| 10.3% | 2.0ms | `escape_binary_ascii/5`         | `json`   |
|  7.2% | 1.4ms | `escape_binary_utf8/6`          | `json`   |
|  7.0% | 1.4ms | `string_ascii/7`                | `json`   |
|  6.1% | 1.2ms | `-do_encode_map/2-lc$^0/1-0-/2` | `json`   |
|  5.6% | 1.1ms | `string_utf8/10`                | `json`   |
|  4.3% | 0.9ms | `do_encode/2`                   | `json`   |
|  4.0% | 0.8ms | `continue/7`                    | `json`   |
|  3.7% | 0.7ms | `string/9`                      | `json`   |
|  3.3% | 0.6ms | `string_ascii/9`                | `json`   |
|  2.5% | 0.5ms | `do_encode_map/2`               | `json`   |
|  2.1% | 0.4ms | `object_push/8`                 | `json`   |
|  2.0% | 0.4ms | `value/6`                       | `json`   |
|  1.9% | 0.4ms | `key/2`                         | `json`   |
|  1.9% | 0.4ms | `object_value/7`                | `json`   |
|  1.8% | 0.4ms | `object_key/6`                  | `json`   |
|  1.7% | 0.3ms | `number/7`                      | `json`   |
|  1.6% | 0.3ms | `string_utf8/8`                 | `json`   |
|  0.8% | 0.2ms | `binary_to_integer/1`           | `erlang` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `escape_binary/5` (`json`)

|      % |  Time | Caller                          | Location |
| -----: | ----: | ------------------------------- | -------- |
| 100.0% | 3.1ms | `-do_encode_map/2-lc$^0/1-0-/2` | `json`   |

##### `string/7` (`json`)

|      % |  Time | Caller     | Location |
| -----: | ----: | ---------- | -------- |
| 100.0% | 2.4ms | `decode/1` | `json`   |

##### `escape_binary_ascii/5` (`json`)

|      % |  Time | Caller                          | Location |
| -----: | ----: | ------------------------------- | -------- |
| 100.0% | 2.0ms | `-do_encode_map/2-lc$^0/1-0-/2` | `json`   |

##### `escape_binary_utf8/6` (`json`)

|      % |  Time | Caller                          | Location |
| -----: | ----: | ------------------------------- | -------- |
| 100.0% | 1.4ms | `-do_encode_map/2-lc$^0/1-0-/2` | `json`   |

##### `string_ascii/7` (`json`)

|      % |  Time | Caller     | Location |
| -----: | ----: | ---------- | -------- |
| 100.0% | 1.4ms | `decode/1` | `json`   |

##### `-do_encode_map/2-lc$^0/1-0-/2` (`json`)

|      % |  Time | Caller            | Location |
| -----: | ----: | ----------------- | -------- |
| 100.0% | 1.2ms | `do_encode_map/2` | `json`   |

##### `string_utf8/10` (`json`)

|      % |  Time | Caller     | Location |
| -----: | ----: | ---------- | -------- |
| 100.0% | 1.1ms | `decode/1` | `json`   |

##### `do_encode/2` (`json`)

|     % |   Time | Caller                          | Location  |
| ----: | -----: | ------------------------------- | --------- |
| 96.3% |  0.8ms | `-do_encode_map/2-lc$^0/1-0-/2` | `json`    |
|  2.0% | 17.0µs | `do_encode_list/2`              | `json`    |
|  1.2% | 10.0µs | `list_loop/2`                   | `json`    |
|  0.6% |  5.0µs | `encode/1`                      | `profile` |

##### `continue/7` (`json`)

|      % |  Time | Caller     | Location |
| -----: | ----: | ---------- | -------- |
| 100.0% | 0.8ms | `decode/1` | `json`   |

##### `string/9` (`json`)

|      % |  Time | Caller     | Location |
| -----: | ----: | ---------- | -------- |
| 100.0% | 0.7ms | `decode/1` | `json`   |

##### `string_ascii/9` (`json`)

|      % |  Time | Caller     | Location |
| -----: | ----: | ---------- | -------- |
| 100.0% | 0.6ms | `decode/1` | `json`   |

##### `do_encode_map/2` (`json`)

|     % |   Time | Caller                          | Location  |
| ----: | -----: | ------------------------------- | --------- |
| 64.9% |  0.3ms | `-do_encode_map/2-lc$^0/1-0-/2` | `json`    |
| 26.8% |  0.1ms | `encode/1`                      | `profile` |
|  8.2% | 40.0µs | `do_encode_list/2`              | `json`    |

##### `object_push/8` (`json`)

|      % |  Time | Caller     | Location |
| -----: | ----: | ---------- | -------- |
| 100.0% | 0.4ms | `decode/1` | `json`   |

##### `value/6` (`json`)

|      % |  Time | Caller     | Location |
| -----: | ----: | ---------- | -------- |
| 100.0% | 0.4ms | `decode/1` | `json`   |

##### `key/2` (`json`)

|      % |  Time | Caller                          | Location |
| -----: | ----: | ------------------------------- | -------- |
| 100.0% | 0.4ms | `-do_encode_map/2-lc$^0/1-0-/2` | `json`   |

##### `object_value/7` (`json`)

|      % |  Time | Caller     | Location |
| -----: | ----: | ---------- | -------- |
| 100.0% | 0.4ms | `decode/1` | `json`   |

##### `object_key/6` (`json`)

|      % |  Time | Caller     | Location |
| -----: | ----: | ---------- | -------- |
| 100.0% | 0.4ms | `decode/1` | `json`   |

##### `number/7` (`json`)

|      % |  Time | Caller     | Location |
| -----: | ----: | ---------- | -------- |
| 100.0% | 0.3ms | `decode/1` | `json`   |

##### `string_utf8/8` (`json`)

|      % |  Time | Caller     | Location |
| -----: | ----: | ---------- | -------- |
| 100.0% | 0.3ms | `decode/1` | `json`   |

##### `binary_to_integer/1` (`erlang`)

|     % |   Time | Caller          | Location |
| ----: | -----: | --------------- | -------- |
| 73.9% |  0.1ms | `number/7`      | `json`   |
| 26.1% | 40.0µs | `number_zero/7` | `json`   |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|      % |   Time | Function                        | Location    |
| -----: | -----: | ------------------------------- | ----------- |
| 100.0% | 19.8ms | `apply/2`                       | `eflambe`   |
| 100.0% | 19.8ms | `<0.10.0>`                      | `<unknown>` |
|  79.9% | 15.8ms | `foldl_1/3`                     | `lists`     |
|  50.4% | 10.0ms | `decode/1`                      | `json`      |
|  49.5% |  9.8ms | `-run/1-fun-0-/2`               | `profile`   |
|  49.4% |  9.8ms | `encode/1`                      | `profile`   |
|  49.3% |  9.7ms | `do_encode_map/2`               | `json`      |
|  48.5% |  9.6ms | `-do_encode_map/2-lc$^0/1-0-/2` | `json`      |
|  20.0% |  4.0ms | `foldl/3`                       | `lists`     |
|  15.7% |  3.1ms | `escape_binary/5`               | `json`      |
|  11.9% |  2.4ms | `string/7`                      | `json`      |
|  10.3% |  2.0ms | `escape_binary_ascii/5`         | `json`      |
|   7.2% |  1.4ms | `escape_binary_utf8/6`          | `json`      |
|   7.0% |  1.4ms | `string_ascii/7`                | `json`      |
|   5.6% |  1.1ms | `string_utf8/10`                | `json`      |
|   4.6% |  0.9ms | `do_encode/2`                   | `json`      |
|   4.0% |  0.8ms | `continue/7`                    | `json`      |
|   3.7% |  0.7ms | `string/9`                      | `json`      |
|   3.3% |  0.7ms | `do_encode_list/2`              | `json`      |
|   3.3% |  0.6ms | `string_ascii/9`                | `json`      |

#### Categories

##### Standard library

|      % |   Time | Function                        | Location  |
| -----: | -----: | ------------------------------- | --------- |
| 100.0% | 19.8ms | `apply/2`                       | `eflambe` |
|  79.9% | 15.8ms | `foldl_1/3`                     | `lists`   |
|  50.4% | 10.0ms | `decode/1`                      | `json`    |
|  49.3% |  9.7ms | `do_encode_map/2`               | `json`    |
|  48.5% |  9.6ms | `-do_encode_map/2-lc$^0/1-0-/2` | `json`    |
|  20.0% |  4.0ms | `foldl/3`                       | `lists`   |
|  15.7% |  3.1ms | `escape_binary/5`               | `json`    |
|  11.9% |  2.4ms | `string/7`                      | `json`    |
|  10.3% |  2.0ms | `escape_binary_ascii/5`         | `json`    |
|   7.2% |  1.4ms | `escape_binary_utf8/6`          | `json`    |
|   7.0% |  1.4ms | `string_ascii/7`                | `json`    |
|   5.6% |  1.1ms | `string_utf8/10`                | `json`    |
|   4.6% |  0.9ms | `do_encode/2`                   | `json`    |
|   4.0% |  0.8ms | `continue/7`                    | `json`    |
|   3.7% |  0.7ms | `string/9`                      | `json`    |
|   3.3% |  0.7ms | `do_encode_list/2`              | `json`    |
|   3.3% |  0.6ms | `string_ascii/9`                | `json`    |
|   3.2% |  0.6ms | `number/7`                      | `json`    |
|   2.3% |  0.5ms | `object_push/8`                 | `json`    |
|   2.0% |  0.4ms | `value/6`                       | `json`    |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `apply/2` (`eflambe`)

|     % |   Time | Callee         | Location         |
| ----: | -----: | -------------- | ---------------- |
| 79.9% | 15.8ms | `foldl_1/3`    | `lists`          |
| 20.0% |  4.0ms | `foldl/3`      | `lists`          |
| <0.1% |  8.0µs | `stop_trace/1` | `eflambe_server` |
| <0.1% |  5.0µs | `run/1`        | `profile`        |

##### `<0.10.0>` (`<unknown>`)

|      % |   Time | Callee    | Location  |
| -----: | -----: | --------- | --------- |
| 100.0% | 19.8ms | `apply/2` | `eflambe` |

##### `foldl_1/3` (`lists`)

|     % |  Time | Callee            | Location  |
| ----: | ----: | ----------------- | --------- |
| 50.4% | 8.0ms | `decode/1`        | `json`    |
| 49.6% | 7.8ms | `-run/1-fun-0-/2` | `profile` |
| <0.1% | 4.0µs | `decode/1`        | `profile` |

##### `decode/1` (`json`)

|     % |  Time | Callee           | Location |
| ----: | ----: | ---------------- | -------- |
| 23.7% | 2.4ms | `string/7`       | `json`   |
| 13.8% | 1.4ms | `string_ascii/7` | `json`   |
| 11.1% | 1.1ms | `string_utf8/10` | `json`   |
|  7.8% | 0.8ms | `continue/7`     | `json`   |
|  7.4% | 0.7ms | `string/9`       | `json`   |

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

##### `do_encode_map/2` (`json`)

|     % |  Time | Callee                          | Location        |
| ----: | ----: | ------------------------------- | --------------- |
| 98.5% | 9.6ms | `-do_encode_map/2-lc$^0/1-0-/2` | `json`          |
|  1.1% | 0.1ms | `mc_iterator/1`                 | `erts_internal` |

##### `-do_encode_map/2-lc$^0/1-0-/2` (`json`)

|     % |  Time | Callee                  | Location |
| ----: | ----: | ----------------------- | -------- |
| 56.7% | 5.4ms | `do_encode_map/2`       | `json`   |
| 32.4% | 3.1ms | `escape_binary/5`       | `json`   |
| 21.2% | 2.0ms | `escape_binary_ascii/5` | `json`   |
| 14.8% | 1.4ms | `escape_binary_utf8/6`  | `json`   |
|  9.1% | 0.9ms | `do_encode/2`           | `json`   |

##### `foldl/3` (`lists`)

|     % |  Time | Callee            | Location  |
| ----: | ----: | ----------------- | --------- |
| 50.5% | 2.0ms | `decode/1`        | `json`    |
| 49.4% | 2.0ms | `-run/1-fun-0-/2` | `profile` |
| <0.1% | 1.0µs | `decode/1`        | `profile` |

##### `escape_binary/5` (`json`)

|    % |   Time | Callee  | Location    |
| ---: | -----: | ------- | ----------- |
| 0.4% | 12.0µs | `sleep` | `<unknown>` |

##### `string/7` (`json`)

|    % |  Time | Callee  | Location    |
| ---: | ----: | ------- | ----------- |
| 0.1% | 2.0µs | `sleep` | `<unknown>` |

##### `do_encode/2` (`json`)

|    % |  Time | Callee                | Location |
| ---: | ----: | --------------------- | -------- |
| 7.1% | 0.1ms | `integer_to_binary/1` | `erlang` |

##### `do_encode_list/2` (`json`)

|     % |   Time | Callee            | Location |
| ----: | -----: | ----------------- | -------- |
| 93.1% |  0.6ms | `do_encode_map/2` | `json`   |
|  5.4% | 35.0µs | `list_loop/2`     | `json`   |
|  3.4% | 22.0µs | `do_encode/2`     | `json`   |

##### `number/7` (`json`)

|     % |  Time | Callee                | Location |
| ----: | ----: | --------------------- | -------- |
| 45.2% | 0.3ms | `binary_to_integer/1` | `erlang` |

##### `object_push/8` (`json`)

|    % |   Time | Callee        | Location |
| ---: | -----: | ------------- | -------- |
| 7.7% | 35.0µs | `from_list/1` | `maps`   |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

Common call stack: `apply/2` (`eflambe`) ← `<0.10.0>`

|    % |  Time | Call stack                                                                                                                                                                                                        |
| ---: | ----: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.5% | 1.9ms | `string/7` (`json`) ← `decode/1` ← `foldl_1/3` (`lists`)                                                                                                                                                          |
| 6.1% | 1.2ms | `escape_binary/5` (`json`) ← `-do_encode_map/2-lc$^0/1-0-/2` ← `do_encode_map/2` ← `-do_encode_map/2-lc$^0/1-0-/2` ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2` ← `foldl_1/3` (`lists`)       |
| 5.6% | 1.1ms | `string_ascii/7` (`json`) ← `decode/1` ← `foldl_1/3` (`lists`)                                                                                                                                                    |
| 5.5% | 1.1ms | `escape_binary/5` (`json`) ← `-do_encode_map/2-lc$^0/1-0-/2` ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2` ← `foldl_1/3` (`lists`)                                                             |
| 4.5% | 0.9ms | `escape_binary_utf8/6` (`json`) ← `-do_encode_map/2-lc$^0/1-0-/2` ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2` ← `foldl_1/3` (`lists`)                                                        |
| 4.5% | 0.9ms | `string_utf8/10` (`json`) ← `decode/1` ← `foldl_1/3` (`lists`)                                                                                                                                                    |
| 4.0% | 0.8ms | `escape_binary_ascii/5` (`json`) ← `-do_encode_map/2-lc$^0/1-0-/2` ← `do_encode_map/2` ← `-do_encode_map/2-lc$^0/1-0-/2` ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2` ← `foldl_1/3` (`lists`) |
| 3.8% | 0.8ms | `escape_binary_ascii/5` (`json`) ← `-do_encode_map/2-lc$^0/1-0-/2` ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2` ← `foldl_1/3` (`lists`)                                                       |
| 3.2% | 0.6ms | `continue/7` (`json`) ← `decode/1` ← `foldl_1/3` (`lists`)                                                                                                                                                        |
| 3.0% | 0.6ms | `string/9` (`json`) ← `decode/1` ← `foldl_1/3` (`lists`)                                                                                                                                                          |
| 2.9% | 0.6ms | `-do_encode_map/2-lc$^0/1-0-/2` (`json`) ← `do_encode_map/2` ← `-do_encode_map/2-lc$^0/1-0-/2` ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2` ← `foldl_1/3` (`lists`)                           |
| 2.6% | 0.5ms | `string_ascii/9` (`json`) ← `decode/1` ← `foldl_1/3` (`lists`)                                                                                                                                                    |
| 2.4% | 0.5ms | `string/7` (`json`) ← `decode/1` ← `foldl/3` (`lists`)                                                                                                                                                            |
| 2.0% | 0.4ms | `do_encode/2` (`json`) ← `-do_encode_map/2-lc$^0/1-0-/2` ← `do_encode_map/2` ← `-do_encode_map/2-lc$^0/1-0-/2` ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2` ← `foldl_1/3` (`lists`)           |
| 1.7% | 0.3ms | `object_push/8` (`json`) ← `decode/1` ← `foldl_1/3` (`lists`)                                                                                                                                                     |
| 1.6% | 0.3ms | `value/6` (`json`) ← `decode/1` ← `foldl_1/3` (`lists`)                                                                                                                                                           |
| 1.5% | 0.3ms | `escape_binary/5` (`json`) ← `-do_encode_map/2-lc$^0/1-0-/2` ← `do_encode_map/2` ← `-do_encode_map/2-lc$^0/1-0-/2` ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2` ← `foldl/3` (`lists`)         |
| 1.5% | 0.3ms | `object_value/7` (`json`) ← `decode/1` ← `foldl_1/3` (`lists`)                                                                                                                                                    |
| 1.5% | 0.3ms | `object_key/6` (`json`) ← `decode/1` ← `foldl_1/3` (`lists`)                                                                                                                                                      |
| 1.4% | 0.3ms | `-do_encode_map/2-lc$^0/1-0-/2` (`json`) ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2` ← `foldl_1/3` (`lists`)                                                                                 |

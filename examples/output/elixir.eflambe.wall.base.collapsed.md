# Wall time profile

Took 25.8ms.

| Category         |     % |   Time |
| ---------------- | ----: | -----: |
| Ours             | 91.9% | 23.7ms |
| Standard library |  5.9% |  1.5ms |
| Idle             |  2.2% |  0.6ms |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |  Time | Function                             | Location          |
| ----: | ----: | ------------------------------------ | ----------------- |
| 32.8% | 8.4ms | `escape_json_chunk/5`                | `Jason.Encode`    |
| 27.5% | 7.1ms | `string/6`                           | `Jason.Decoder`   |
|  4.2% | 1.1ms | `map_naive_loop/3`                   | `Jason.Encode`    |
|  3.2% | 0.8ms | `string/7`                           | `Jason.Decoder`   |
|  2.6% | 0.7ms | `object/6`                           | `Jason.Decoder`   |
|  2.3% | 0.6ms | `escape_json/4`                      | `Jason.Encode`    |
|  2.2% | 0.6ms | `sleep`                              | `<unknown>`       |
|  2.0% | 0.5ms | `escape_json/3`                      | `Jason.Encode`    |
|  1.9% | 0.5ms | `value/3`                            | `Jason.Encode`    |
|  1.8% | 0.5ms | `map_naive/3`                        | `Jason.Encode`    |
|  1.7% | 0.4ms | `-string_decode_function/1-fun-0-/1` | `Jason.Decoder`   |
|  1.5% | 0.4ms | `key/2`                              | `Jason.Encode`    |
|  1.4% | 0.4ms | `value/5`                            | `Jason.Decoder`   |
|  1.3% | 0.3ms | `key/5`                              | `Jason.Decoder`   |
|  1.3% | 0.3ms | `key/6`                              | `Jason.Decoder`   |
|  1.3% | 0.3ms | `-key_decode_function/1-fun-0-/1`    | `Jason.Decoder`   |
|  1.2% | 0.3ms | `number/6`                           | `Jason.Decoder`   |
|  1.1% | 0.3ms | `encode_string/2`                    | `Jason.Encode`    |
|  0.5% | 0.1ms | `archive_split/3`                    | `erl_prim_loader` |
|  0.5% | 0.1ms | `encode_atom/2`                      | `Jason.Encode`    |

#### Categories

##### Ours

|     % |  Time | Function                             | Location          |
| ----: | ----: | ------------------------------------ | ----------------- |
| 32.8% | 8.4ms | `escape_json_chunk/5`                | `Jason.Encode`    |
| 27.5% | 7.1ms | `string/6`                           | `Jason.Decoder`   |
|  4.2% | 1.1ms | `map_naive_loop/3`                   | `Jason.Encode`    |
|  3.2% | 0.8ms | `string/7`                           | `Jason.Decoder`   |
|  2.6% | 0.7ms | `object/6`                           | `Jason.Decoder`   |
|  2.3% | 0.6ms | `escape_json/4`                      | `Jason.Encode`    |
|  2.0% | 0.5ms | `escape_json/3`                      | `Jason.Encode`    |
|  1.9% | 0.5ms | `value/3`                            | `Jason.Encode`    |
|  1.8% | 0.5ms | `map_naive/3`                        | `Jason.Encode`    |
|  1.7% | 0.4ms | `-string_decode_function/1-fun-0-/1` | `Jason.Decoder`   |
|  1.5% | 0.4ms | `key/2`                              | `Jason.Encode`    |
|  1.4% | 0.4ms | `value/5`                            | `Jason.Decoder`   |
|  1.3% | 0.3ms | `key/5`                              | `Jason.Decoder`   |
|  1.3% | 0.3ms | `key/6`                              | `Jason.Decoder`   |
|  1.3% | 0.3ms | `-key_decode_function/1-fun-0-/1`    | `Jason.Decoder`   |
|  1.2% | 0.3ms | `number/6`                           | `Jason.Decoder`   |
|  1.1% | 0.3ms | `encode_string/2`                    | `Jason.Encode`    |
|  0.5% | 0.1ms | `archive_split/3`                    | `erl_prim_loader` |
|  0.5% | 0.1ms | `encode_atom/2`                      | `Jason.Encode`    |
|  0.3% | 0.1ms | `escape/1`                           | `Jason.Encode`    |

##### Idle

|    % |  Time | Function | Location    |
| ---: | ----: | -------- | ----------- |
| 2.2% | 0.6ms | `sleep`  | `<unknown>` |

##### Standard library

|     % |   Time | Function              | Location |
| ----: | -----: | --------------------- | -------- |
|  0.3% |  0.1ms | `binary_to_integer/1` | `erlang` |
|  0.3% |  0.1ms | `to_list/1`           | `maps`   |
|  0.3% |  0.1ms | `integer_to_binary/1` | `erlang` |
|  0.2% | 45.0µs | `to_list_internal/1`  | `maps`   |
|  0.2% | 40.0µs | `from_list/1`         | `maps`   |
|  0.1% | 30.0µs | `into_map/2`          | `Enum`   |
|  0.1% | 18.0µs | `iolist_to_binary/1`  | `erlang` |
| <0.1% | 11.0µs | `reverse/2`           | `lists`  |
| <0.1% | 10.0µs | `into/2`              | `Enum`   |
| <0.1% |  5.0µs | `ensure_loaded/1`     | `code`   |
| <0.1% |  3.0µs | `demonitor/2`         | `erlang` |
| <0.1% |  2.0µs | `call/1`              | `code`   |
| <0.1% |  2.0µs | `monitor/2`           | `erlang` |
| <0.1% |  2.0µs | `function_exported/3` | `erlang` |
| <0.1% |  1.0µs | `whereis/1`           | `erlang` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `escape_json_chunk/5` (`Jason.Encode`)

|     % |  Time | Caller             | Location       |
| ----: | ----: | ------------------ | -------------- |
| 52.1% | 4.4ms | `map_naive_loop/3` | `Jason.Encode` |
| 43.6% | 3.7ms | `encode_string/2`  | `Jason.Encode` |
|  4.3% | 0.4ms | `map_naive/3`      | `Jason.Encode` |

##### `string/6` (`Jason.Decoder`)

|      % |  Time | Caller    | Location        |
| -----: | ----: | --------- | --------------- |
| 100.0% | 7.1ms | `parse/2` | `Jason.Decoder` |

##### `map_naive_loop/3` (`Jason.Encode`)

|      % |  Time | Caller        | Location       |
| -----: | ----: | ------------- | -------------- |
| 100.0% | 1.1ms | `map_naive/3` | `Jason.Encode` |

##### `string/7` (`Jason.Decoder`)

|      % |  Time | Caller    | Location        |
| -----: | ----: | --------- | --------------- |
| 100.0% | 0.8ms | `parse/2` | `Jason.Decoder` |

##### `object/6` (`Jason.Decoder`)

|      % |  Time | Caller    | Location        |
| -----: | ----: | --------- | --------------- |
| 100.0% | 0.7ms | `parse/2` | `Jason.Decoder` |

##### `escape_json/4` (`Jason.Encode`)

|     % |   Time | Caller             | Location       |
| ----: | -----: | ------------------ | -------------- |
| 58.0% |  0.3ms | `map_naive_loop/3` | `Jason.Encode` |
| 36.1% |  0.2ms | `encode_string/2`  | `Jason.Encode` |
|  5.9% | 35.0µs | `map_naive/3`      | `Jason.Encode` |

##### `sleep` (`<unknown>`)

|     % |   Time | Caller                | Location        |
| ----: | -----: | --------------------- | --------------- |
| 92.1% |  0.5ms | `call/1`              | `code_server`   |
|  3.5% | 20.0µs | `map_naive_loop/3`    | `Jason.Encode`  |
|  1.6% |  9.0µs | `sleep`               | `<unknown>`     |
|  0.7% |  4.0µs | `string/6`            | `Jason.Decoder` |
|  0.7% |  4.0µs | `escape_json_chunk/5` | `Jason.Encode`  |

##### `escape_json/3` (`Jason.Encode`)

|     % |   Time | Caller             | Location       |
| ----: | -----: | ------------------ | -------------- |
| 65.7% |  0.3ms | `map_naive_loop/3` | `Jason.Encode` |
| 27.6% |  0.1ms | `encode_string/2`  | `Jason.Encode` |
|  6.7% | 35.0µs | `map_naive/3`      | `Jason.Encode` |

##### `value/3` (`Jason.Encode`)

|     % |   Time | Caller             | Location       |
| ----: | -----: | ------------------ | -------------- |
| 83.0% |  0.4ms | `map_naive_loop/3` | `Jason.Encode` |
|  9.0% | 45.0µs | `map_naive/3`      | `Jason.Encode` |
|  4.0% | 20.0µs | `list/3`           | `Jason.Encode` |
|  2.0% | 10.0µs | `encode/2`         | `Jason.Encode` |
|  2.0% | 10.0µs | `list_loop/3`      | `Jason.Encode` |

##### `map_naive/3` (`Jason.Encode`)

|     % |   Time | Caller             | Location       |
| ----: | -----: | ------------------ | -------------- |
| 63.1% |  0.3ms | `map_naive_loop/3` | `Jason.Encode` |
| 28.2% |  0.1ms | `encode/2`         | `Jason.Encode` |
|  8.7% | 40.0µs | `list/3`           | `Jason.Encode` |

##### `-string_decode_function/1-fun-0-/1` (`Jason.Decoder`)

|      % |  Time | Caller     | Location        |
| -----: | ----: | ---------- | --------------- |
| 100.0% | 0.4ms | `string/6` | `Jason.Decoder` |

##### `key/2` (`Jason.Encode`)

|     % |   Time | Caller             | Location       |
| ----: | -----: | ------------------ | -------------- |
| 90.8% |  0.3ms | `map_naive_loop/3` | `Jason.Encode` |
|  9.2% | 35.0µs | `map_naive/3`      | `Jason.Encode` |

##### `value/5` (`Jason.Decoder`)

|      % |  Time | Caller    | Location        |
| -----: | ----: | --------- | --------------- |
| 100.0% | 0.4ms | `parse/2` | `Jason.Decoder` |

##### `key/5` (`Jason.Decoder`)

|      % |  Time | Caller    | Location        |
| -----: | ----: | --------- | --------------- |
| 100.0% | 0.3ms | `parse/2` | `Jason.Decoder` |

##### `key/6` (`Jason.Decoder`)

|      % |  Time | Caller    | Location        |
| -----: | ----: | --------- | --------------- |
| 100.0% | 0.3ms | `parse/2` | `Jason.Decoder` |

##### `-key_decode_function/1-fun-0-/1` (`Jason.Decoder`)

|      % |  Time | Caller     | Location        |
| -----: | ----: | ---------- | --------------- |
| 100.0% | 0.3ms | `object/6` | `Jason.Decoder` |

##### `number/6` (`Jason.Decoder`)

|      % |  Time | Caller    | Location        |
| -----: | ----: | --------- | --------------- |
| 100.0% | 0.3ms | `parse/2` | `Jason.Decoder` |

##### `encode_string/2` (`Jason.Encode`)

|     % |   Time | Caller             | Location       |
| ----: | -----: | ------------------ | -------------- |
| 96.6% |  0.3ms | `map_naive_loop/3` | `Jason.Encode` |
|  3.4% | 10.0µs | `map_naive/3`      | `Jason.Encode` |

##### `archive_split/3` (`erl_prim_loader`)

|      % |  Time | Caller         | Location          |
| -----: | ----: | -------------- | ----------------- |
| 100.0% | 0.1ms | `name_split/2` | `erl_prim_loader` |

##### `encode_atom/2` (`Jason.Encode`)

|     % |   Time | Caller             | Location       |
| ----: | -----: | ------------------ | -------------- |
| 92.0% |  0.1ms | `map_naive_loop/3` | `Jason.Encode` |
|  8.0% | 10.0µs | `map_naive/3`      | `Jason.Encode` |

##### `binary_to_integer/1` (`erlang`)

|      % |  Time | Caller     | Location        |
| -----: | ----: | ---------- | --------------- |
| 100.0% | 0.1ms | `number/6` | `Jason.Decoder` |

##### `to_list/1` (`maps`)

|      % |  Time | Caller    | Location       |
| -----: | ----: | --------- | -------------- |
| 100.0% | 0.1ms | `value/3` | `Jason.Encode` |

##### `escape/1` (`Jason.Encode`)

|     % |  Time | Caller                | Location       |
| ----: | ----: | --------------------- | -------------- |
| 92.3% | 0.1ms | `escape_json_chunk/5` | `Jason.Encode` |
|  7.7% | 5.0µs | `escape_json/4`       | `Jason.Encode` |

##### `integer_to_binary/1` (`erlang`)

|      % |  Time | Caller    | Location       |
| -----: | ----: | --------- | -------------- |
| 100.0% | 0.1ms | `value/3` | `Jason.Encode` |

##### `to_list_internal/1` (`maps`)

|      % |   Time | Caller    | Location       |
| -----: | -----: | --------- | -------------- |
| 100.0% | 45.0µs | `value/3` | `Jason.Encode` |

##### `from_list/1` (`maps`)

|     % |   Time | Caller       | Location        |
| ----: | -----: | ------------ | --------------- |
| 75.0% | 30.0µs | `object/6`   | `Jason.Decoder` |
| 25.0% | 10.0µs | `into_map/2` | `Enum`          |

##### `into_map/2` (`Enum`)

|     % |   Time | Caller      | Location |
| ----: | -----: | ----------- | -------- |
| 50.0% | 15.0µs | `encode!/2` | `Jason`  |
| 50.0% | 15.0µs | `decode/2`  | `Jason`  |

##### `iolist_to_binary/1` (`erlang`)

|     % |  Time | Caller      | Location        |
| ----: | ----: | ----------- | --------------- |
| 44.4% | 8.0µs | `string/7`  | `Jason.Decoder` |
| 27.8% | 5.0µs | `encode!/2` | `Jason`         |
| 27.8% | 5.0µs | `decode/2`  | `Jason`         |

##### `reverse/2` (`lists`)

|     % |   Time | Caller      | Location          |
| ----: | -----: | ----------- | ----------------- |
| 90.9% | 10.0µs | `array/6`   | `Jason.Decoder`   |
|  9.1% |  1.0µs | `reverse/1` | `erl_prim_loader` |

##### `into/2` (`Enum`)

|     % |  Time | Caller      | Location |
| ----: | ----: | ----------- | -------- |
| 50.0% | 5.0µs | `encode!/2` | `Jason`  |
| 50.0% | 5.0µs | `decode/2`  | `Jason`  |

##### `ensure_loaded/1` (`code`)

|      % |  Time | Caller                 | Location        |
| -----: | ----: | ---------------------- | --------------- |
| 100.0% | 5.0µs | `undefined_function/3` | `error_handler` |

##### `demonitor/2` (`erlang`)

|      % |  Time | Caller   | Location      |
| -----: | ----: | -------- | ------------- |
| 100.0% | 3.0µs | `call/1` | `code_server` |

##### `call/1` (`code`)

|     % |  Time | Caller                 | Location        |
| ----: | ----: | ---------------------- | --------------- |
| 50.0% | 1.0µs | `ensure_loaded/1`      | `code`          |
| 50.0% | 1.0µs | `undefined_function/3` | `error_handler` |

##### `monitor/2` (`erlang`)

|      % |  Time | Caller   | Location      |
| -----: | ----: | -------- | ------------- |
| 100.0% | 2.0µs | `call/1` | `code_server` |

##### `function_exported/3` (`erlang`)

|      % |  Time | Caller                 | Location        |
| -----: | ----: | ---------------------- | --------------- |
| 100.0% | 2.0µs | `undefined_function/3` | `error_handler` |

##### `whereis/1` (`erlang`)

|      % |  Time | Caller            | Location        |
| -----: | ----: | ----------------- | --------------- |
| 100.0% | 1.0µs | `ensure_loaded/1` | `error_handler` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |   Time | Function               | Location        |
| ----: | -----: | ---------------------- | --------------- |
| 56.4% | 14.5ms | `-run/1-fun-0-/2`      | `Profile`       |
| 56.4% | 14.5ms | `encode!/2`            | `Jason`         |
| 49.8% | 12.8ms | `encode/2`             | `Jason.Encode`  |
| 49.5% | 12.8ms | `map_naive/3`          | `Jason.Encode`  |
| 48.7% | 12.5ms | `map_naive_loop/3`     | `Jason.Encode`  |
| 43.5% | 11.2ms | `decode!/2`            | `Jason`         |
| 43.2% | 11.1ms | `parse/2`              | `Jason.Decoder` |
| 33.0% |  8.5ms | `escape_json_chunk/5`  | `Jason.Encode`  |
| 29.2% |  7.5ms | `string/6`             | `Jason.Decoder` |
| 17.1% |  4.4ms | `encode_string/2`      | `Jason.Encode`  |
|  6.4% |  1.6ms | `undefined_function/3` | `error_handler` |
|  4.5% |  1.2ms | `ensure_loaded/1`      | `code`          |
|  4.0% |  1.0ms | `object/6`             | `Jason.Decoder` |
|  3.3% |  0.8ms | `string/7`             | `Jason.Decoder` |
|  2.8% |  0.7ms | `value/3`              | `Jason.Encode`  |
|  2.6% |  0.7ms | `list/3`               | `Jason.Encode`  |
|  2.3% |  0.6ms | `escape_json/4`        | `Jason.Encode`  |
|  2.2% |  0.6ms | `sleep`                | `<unknown>`     |
|  2.1% |  0.6ms | `number/6`             | `Jason.Decoder` |
|  2.1% |  0.5ms | `call/1`               | `code_server`   |

#### Categories

##### Ours

|     % |   Time | Function                             | Location        |
| ----: | -----: | ------------------------------------ | --------------- |
| 56.4% | 14.5ms | `-run/1-fun-0-/2`                    | `Profile`       |
| 56.4% | 14.5ms | `encode!/2`                          | `Jason`         |
| 49.8% | 12.8ms | `encode/2`                           | `Jason.Encode`  |
| 49.5% | 12.8ms | `map_naive/3`                        | `Jason.Encode`  |
| 48.7% | 12.5ms | `map_naive_loop/3`                   | `Jason.Encode`  |
| 43.5% | 11.2ms | `decode!/2`                          | `Jason`         |
| 43.2% | 11.1ms | `parse/2`                            | `Jason.Decoder` |
| 33.0% |  8.5ms | `escape_json_chunk/5`                | `Jason.Encode`  |
| 29.2% |  7.5ms | `string/6`                           | `Jason.Decoder` |
| 17.1% |  4.4ms | `encode_string/2`                    | `Jason.Encode`  |
|  6.4% |  1.6ms | `undefined_function/3`               | `error_handler` |
|  4.0% |  1.0ms | `object/6`                           | `Jason.Decoder` |
|  3.3% |  0.8ms | `string/7`                           | `Jason.Decoder` |
|  2.8% |  0.7ms | `value/3`                            | `Jason.Encode`  |
|  2.6% |  0.7ms | `list/3`                             | `Jason.Encode`  |
|  2.3% |  0.6ms | `escape_json/4`                      | `Jason.Encode`  |
|  2.1% |  0.6ms | `number/6`                           | `Jason.Decoder` |
|  2.1% |  0.5ms | `call/1`                             | `code_server`   |
|  2.0% |  0.5ms | `escape_json/3`                      | `Jason.Encode`  |
|  1.7% |  0.4ms | `-string_decode_function/1-fun-0-/1` | `Jason.Decoder` |

##### Idle

|    % |  Time | Function | Location    |
| ---: | ----: | -------- | ----------- |
| 2.2% | 0.6ms | `sleep`  | `<unknown>` |

##### Standard library

|     % |   Time | Function              | Location |
| ----: | -----: | --------------------- | -------- |
|  4.5% |  1.2ms | `ensure_loaded/1`     | `code`   |
|  1.0% |  0.2ms | `binary_to_integer/1` | `erlang` |
|  0.4% |  0.1ms | `to_list/1`           | `maps`   |
|  0.3% |  0.1ms | `integer_to_binary/1` | `erlang` |
|  0.2% |  0.1ms | `into_map/2`          | `Enum`   |
|  0.2% |  0.1ms | `to_list_internal/1`  | `maps`   |
|  0.2% | 40.0µs | `from_list/1`         | `maps`   |
|  0.1% | 18.0µs | `iolist_to_binary/1`  | `erlang` |
| <0.1% | 11.0µs | `reverse/2`           | `lists`  |
| <0.1% | 10.0µs | `into/2`              | `Enum`   |
| <0.1% |  3.0µs | `demonitor/2`         | `erlang` |
| <0.1% |  2.0µs | `call/1`              | `code`   |
| <0.1% |  2.0µs | `monitor/2`           | `erlang` |
| <0.1% |  2.0µs | `function_exported/3` | `erlang` |
| <0.1% |  1.0µs | `whereis/1`           | `erlang` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `-run/1-fun-0-/2` (`Profile`)

|     % |   Time | Callee      | Location |
| ----: | -----: | ----------- | -------- |
| 99.9% | 14.5ms | `encode!/2` | `Jason`  |
| <0.1% |  5.0µs | `encode!/1` | `Jason`  |

##### `encode!/2` (`Jason`)

|     % |   Time | Callee                 | Location        |
| ----: | -----: | ---------------------- | --------------- |
| 88.2% | 12.8ms | `encode/2`             | `Jason.Encode`  |
| 11.3% |  1.6ms | `undefined_function/3` | `error_handler` |
|  0.2% | 25.0µs | `into_map/2`           | `Enum`          |
| <0.1% |  5.0µs | `format_encode_opts/1` | `Jason`         |
| <0.1% |  5.0µs | `into/2`               | `Enum`          |

##### `encode/2` (`Jason.Encode`)

|     % |   Time | Callee                  | Location       |
| ----: | -----: | ----------------------- | -------------- |
| 99.5% | 12.8ms | `map_naive/3`           | `Jason.Encode` |
|  0.2% | 30.0µs | `value/3`               | `Jason.Encode` |
| <0.1% |  5.0µs | `escape_function/1`     | `Jason.Encode` |
| <0.1% |  5.0µs | `encode_map_function/1` | `Jason.Encode` |

##### `map_naive/3` (`Jason.Encode`)

|     % |   Time | Callee                | Location       |
| ----: | -----: | --------------------- | -------------- |
| 98.3% | 12.5ms | `map_naive_loop/3`    | `Jason.Encode` |
|  2.9% |  0.4ms | `escape_json_chunk/5` | `Jason.Encode` |
|  0.5% |  0.1ms | `value/3`             | `Jason.Encode` |
|  0.3% | 35.0µs | `key/2`               | `Jason.Encode` |
|  0.3% | 35.0µs | `escape_json/3`       | `Jason.Encode` |

##### `map_naive_loop/3` (`Jason.Encode`)

|     % |  Time | Callee                | Location       |
| ----: | ----: | --------------------- | -------------- |
| 69.4% | 8.7ms | `map_naive/3`         | `Jason.Encode` |
| 35.1% | 4.4ms | `escape_json_chunk/5` | `Jason.Encode` |
| 34.8% | 4.4ms | `encode_string/2`     | `Jason.Encode` |
|  5.3% | 0.7ms | `list/3`              | `Jason.Encode` |
|  4.5% | 0.6ms | `value/3`             | `Jason.Encode` |

##### `decode!/2` (`Jason`)

|     % |   Time | Callee     | Location        |
| ----: | -----: | ---------- | --------------- |
| 99.4% | 11.1ms | `parse/2`  | `Jason.Decoder` |
|  0.5% |  0.1ms | `decode/2` | `Jason`         |

##### `parse/2` (`Jason.Decoder`)

|     % |  Time | Callee     | Location        |
| ----: | ----: | ---------- | --------------- |
| 67.6% | 7.5ms | `string/6` | `Jason.Decoder` |
|  9.3% | 1.0ms | `object/6` | `Jason.Decoder` |
|  7.5% | 0.8ms | `string/7` | `Jason.Decoder` |
|  5.0% | 0.6ms | `number/6` | `Jason.Decoder` |
|  3.3% | 0.4ms | `value/5`  | `Jason.Decoder` |

##### `escape_json_chunk/5` (`Jason.Encode`)

|     % |  Time | Callee     | Location       |
| ----: | ----: | ---------- | -------------- |
|  0.7% | 0.1ms | `escape/1` | `Jason.Encode` |
| <0.1% | 4.0µs | `sleep`    | `<unknown>`    |

##### `string/6` (`Jason.Decoder`)

|    % |  Time | Callee                               | Location        |
| ---: | ----: | ------------------------------------ | --------------- |
| 5.8% | 0.4ms | `-string_decode_function/1-fun-0-/1` | `Jason.Decoder` |
| 0.1% | 4.0µs | `sleep`                              | `<unknown>`     |

##### `encode_string/2` (`Jason.Encode`)

|     % |  Time | Callee                | Location       |
| ----: | ----: | --------------------- | -------------- |
| 85.1% | 3.7ms | `escape_json_chunk/5` | `Jason.Encode` |
|  5.0% | 0.2ms | `escape_json/4`       | `Jason.Encode` |
|  3.3% | 0.1ms | `escape_json/3`       | `Jason.Encode` |

##### `undefined_function/3` (`error_handler`)

|     % |  Time | Callee                | Location        |
| ----: | ----: | --------------------- | --------------- |
| 70.7% | 1.2ms | `ensure_loaded/1`     | `code`          |
| 28.8% | 0.5ms | `call/1`              | `code_server`   |
|  0.2% | 3.0µs | `ensure_loaded/1`     | `error_handler` |
|  0.1% | 2.0µs | `function_exported/3` | `erlang`        |
|  0.1% | 1.0µs | `call/1`              | `code`          |

##### `ensure_loaded/1` (`code`)

|    % |  Time | Callee       | Location      |
| ---: | ----: | ------------ | ------------- |
| 5.4% | 0.1ms | `call/1`     | `code_server` |
| 0.3% | 3.0µs | `get_mode/0` | `code_server` |
| 0.1% | 1.0µs | `call/1`     | `code`        |

##### `object/6` (`Jason.Decoder`)

|     % |   Time | Callee                            | Location        |
| ----: | -----: | --------------------------------- | --------------- |
| 31.4% |  0.3ms | `-key_decode_function/1-fun-0-/1` | `Jason.Decoder` |
|  2.9% | 30.0µs | `from_list/1`                     | `maps`          |

##### `string/7` (`Jason.Decoder`)

|    % |  Time | Callee               | Location    |
| ---: | ----: | -------------------- | ----------- |
| 1.0% | 8.0µs | `iolist_to_binary/1` | `erlang`    |
| 0.7% | 6.0µs | `sleep`              | `<unknown>` |

##### `value/3` (`Jason.Encode`)

|     % |  Time | Callee                | Location    |
| ----: | ----: | --------------------- | ----------- |
| 14.5% | 0.1ms | `to_list/1`           | `maps`      |
|  9.0% | 0.1ms | `integer_to_binary/1` | `erlang`    |
|  6.9% | 0.1ms | `to_list_internal/1`  | `maps`      |
|  0.3% | 2.0µs | `sleep`               | `<unknown>` |

##### `list/3` (`Jason.Encode`)

|     % |   Time | Callee        | Location       |
| ----: | -----: | ------------- | -------------- |
| 89.6% |  0.6ms | `map_naive/3` | `Jason.Encode` |
|  6.7% | 45.0µs | `value/3`     | `Jason.Encode` |
|  5.2% | 35.0µs | `list_loop/3` | `Jason.Encode` |

##### `escape_json/4` (`Jason.Encode`)

|    % |  Time | Callee     | Location       |
| ---: | ----: | ---------- | -------------- |
| 0.8% | 5.0µs | `escape/1` | `Jason.Encode` |
| 0.3% | 2.0µs | `sleep`    | `<unknown>`    |

##### `sleep` (`<unknown>`)

|    % |  Time | Callee  | Location    |
| ---: | ----: | ------- | ----------- |
| 1.6% | 9.0µs | `sleep` | `<unknown>` |

##### `number/6` (`Jason.Decoder`)

|     % |  Time | Callee                | Location |
| ----: | ----: | --------------------- | -------- |
| 44.6% | 0.2ms | `binary_to_integer/1` | `erlang` |

##### `call/1` (`code_server`)

|     % |  Time | Callee        | Location    |
| ----: | ----: | ------------- | ----------- |
| 97.9% | 0.5ms | `sleep`       | `<unknown>` |
|  0.6% | 3.0µs | `demonitor/2` | `erlang`    |
|  0.4% | 2.0µs | `monitor/2`   | `erlang`    |

##### `into_map/2` (`Enum`)

|     % |   Time | Callee        | Location |
| ----: | -----: | ------------- | -------- |
| 20.0% | 10.0µs | `from_list/1` | `maps`   |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

|     % |  Time | Call stack                                                                                                                                                                                                |
| ----: | ----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27.5% | 7.1ms | `string/6` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                                                          |
| 12.0% | 3.1ms | `escape_json_chunk/5` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                     |
|  8.2% | 2.1ms | `escape_json_chunk/5` (`Jason.Encode`) ← `encode_string/2` ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) |
|  5.6% | 1.4ms | `escape_json_chunk/5` (`Jason.Encode`) ← `encode_string/2` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                      |
|  4.6% | 1.2ms | `escape_json_chunk/5` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                                          |
|  3.6% | 0.9ms | `ensure_loaded/1` (`code`) ← `undefined_function/3` (`error_handler`) ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                                                             |
|  3.2% | 0.8ms | `string/7` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                                                          |
|  2.6% | 0.7ms | `object/6` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                                                          |
|  2.6% | 0.7ms | `map_naive_loop/3` (`Jason.Encode`) ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                             |
|  1.8% | 0.5ms | `sleep` ← `call/1` (`code_server`) ← `undefined_function/3` (`error_handler`) ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                                                     |
|  1.7% | 0.4ms | `-string_decode_function/1-fun-0-/1` (`Jason.Decoder`) ← `string/6` ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                   |
|  1.4% | 0.4ms | `value/5` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                                                           |
|  1.3% | 0.3ms | `map_naive_loop/3` (`Jason.Encode`) ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                                                                  |
|  1.3% | 0.3ms | `key/5` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                                                             |
|  1.3% | 0.3ms | `key/6` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                                                             |
|  1.3% | 0.3ms | `-key_decode_function/1-fun-0-/1` (`Jason.Decoder`) ← `object/6` ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                      |
|  1.2% | 0.3ms | `number/6` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                                                          |
|  1.0% | 0.3ms | `map_naive/3` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                                                  |
|  1.0% | 0.3ms | `value/3` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                 |
|  1.0% | 0.2ms | `binary_to_integer/1` (`erlang`) ← `number/6` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                       |

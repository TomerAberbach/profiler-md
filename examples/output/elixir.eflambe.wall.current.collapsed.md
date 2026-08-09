# Wall time profile

Took 27.9ms.

| Category         |     % |   Time |
| ---------------- | ----: | -----: |
| Ours             | 92.3% | 25.8ms |
| Standard library |  5.6% |  1.6ms |
| Idle             |  2.1% |  0.6ms |

## Hottest functions

### Self time

Functions ranked by wall time spent directly in the function body, excluding callees.

|     % |  Time | Function                             | Location          |
| ----: | ----: | ------------------------------------ | ----------------- |
| 30.3% | 8.5ms | `string/6`                           | `Jason.Decoder`   |
| 30.2% | 8.4ms | `escape_json_chunk/5`                | `Jason.Encode`    |
|  3.8% | 1.1ms | `map_naive_loop/3`                   | `Jason.Encode`    |
|  3.7% | 1.0ms | `string/7`                           | `Jason.Decoder`   |
|  2.9% | 0.8ms | `object/6`                           | `Jason.Decoder`   |
|  2.1% | 0.6ms | `escape_json/4`                      | `Jason.Encode`    |
|  2.1% | 0.6ms | `sleep`                              | `<unknown>`       |
|  1.9% | 0.5ms | `escape_json/3`                      | `Jason.Encode`    |
|  1.8% | 0.5ms | `-string_decode_function/1-fun-0-/1` | `Jason.Decoder`   |
|  1.8% | 0.5ms | `value/3`                            | `Jason.Encode`    |
|  1.7% | 0.5ms | `map_naive/3`                        | `Jason.Encode`    |
|  1.5% | 0.4ms | `value/5`                            | `Jason.Decoder`   |
|  1.4% | 0.4ms | `-key_decode_function/1-fun-0-/1`    | `Jason.Decoder`   |
|  1.4% | 0.4ms | `key/2`                              | `Jason.Encode`    |
|  1.4% | 0.4ms | `key/5`                              | `Jason.Decoder`   |
|  1.4% | 0.4ms | `key/6`                              | `Jason.Decoder`   |
|  1.2% | 0.3ms | `number/6`                           | `Jason.Decoder`   |
|  1.0% | 0.3ms | `encode_string/2`                    | `Jason.Encode`    |
|  0.5% | 0.1ms | `archive_split/3`                    | `erl_prim_loader` |
|  0.4% | 0.1ms | `encode_atom/2`                      | `Jason.Encode`    |

#### Categories

##### Ours

|     % |  Time | Function                             | Location          |
| ----: | ----: | ------------------------------------ | ----------------- |
| 30.3% | 8.5ms | `string/6`                           | `Jason.Decoder`   |
| 30.2% | 8.4ms | `escape_json_chunk/5`                | `Jason.Encode`    |
|  3.8% | 1.1ms | `map_naive_loop/3`                   | `Jason.Encode`    |
|  3.7% | 1.0ms | `string/7`                           | `Jason.Decoder`   |
|  2.9% | 0.8ms | `object/6`                           | `Jason.Decoder`   |
|  2.1% | 0.6ms | `escape_json/4`                      | `Jason.Encode`    |
|  1.9% | 0.5ms | `escape_json/3`                      | `Jason.Encode`    |
|  1.8% | 0.5ms | `-string_decode_function/1-fun-0-/1` | `Jason.Decoder`   |
|  1.8% | 0.5ms | `value/3`                            | `Jason.Encode`    |
|  1.7% | 0.5ms | `map_naive/3`                        | `Jason.Encode`    |
|  1.5% | 0.4ms | `value/5`                            | `Jason.Decoder`   |
|  1.4% | 0.4ms | `-key_decode_function/1-fun-0-/1`    | `Jason.Decoder`   |
|  1.4% | 0.4ms | `key/2`                              | `Jason.Encode`    |
|  1.4% | 0.4ms | `key/5`                              | `Jason.Decoder`   |
|  1.4% | 0.4ms | `key/6`                              | `Jason.Decoder`   |
|  1.2% | 0.3ms | `number/6`                           | `Jason.Decoder`   |
|  1.0% | 0.3ms | `encode_string/2`                    | `Jason.Encode`    |
|  0.5% | 0.1ms | `archive_split/3`                    | `erl_prim_loader` |
|  0.4% | 0.1ms | `encode_atom/2`                      | `Jason.Encode`    |
|  0.2% | 0.1ms | `escape/1`                           | `Jason.Encode`    |

##### Idle

|    % |  Time | Function | Location    |
| ---: | ----: | -------- | ----------- |
| 2.1% | 0.6ms | `sleep`  | `<unknown>` |

##### Standard library

|     % |   Time | Function              | Location |
| ----: | -----: | --------------------- | -------- |
|  0.3% |  0.1ms | `binary_to_integer/1` | `erlang` |
|  0.3% |  0.1ms | `to_list/1`           | `maps`   |
|  0.2% |  0.1ms | `integer_to_binary/1` | `erlang` |
|  0.2% | 45.0µs | `from_list/1`         | `maps`   |
|  0.2% | 45.0µs | `to_list_internal/1`  | `maps`   |
|  0.1% | 34.0µs | `into_map/2`          | `Enum`   |
|  0.1% | 20.0µs | `iolist_to_binary/1`  | `erlang` |
| <0.1% | 11.0µs | `reverse/2`           | `lists`  |
| <0.1% | 10.0µs | `into/2`              | `Enum`   |
| <0.1% |  5.0µs | `ensure_loaded/1`     | `code`   |
| <0.1% |  2.0µs | `call/1`              | `code`   |
| <0.1% |  2.0µs | `monitor/2`           | `erlang` |
| <0.1% |  2.0µs | `demonitor/2`         | `erlang` |
| <0.1% |  1.0µs | `whereis/1`           | `erlang` |
| <0.1% |  1.0µs | `function_exported/3` | `erlang` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `string/6` (`Jason.Decoder`)

|      % |  Time | Caller    | Location        |
| -----: | ----: | --------- | --------------- |
| 100.0% | 8.5ms | `parse/2` | `Jason.Decoder` |

##### `escape_json_chunk/5` (`Jason.Encode`)

|     % |  Time | Caller             | Location       |
| ----: | ----: | ------------------ | -------------- |
| 52.1% | 4.4ms | `map_naive_loop/3` | `Jason.Encode` |
| 43.6% | 3.7ms | `encode_string/2`  | `Jason.Encode` |
|  4.3% | 0.4ms | `map_naive/3`      | `Jason.Encode` |

##### `map_naive_loop/3` (`Jason.Encode`)

|      % |  Time | Caller        | Location       |
| -----: | ----: | ------------- | -------------- |
| 100.0% | 1.1ms | `map_naive/3` | `Jason.Encode` |

##### `string/7` (`Jason.Decoder`)

|      % |  Time | Caller    | Location        |
| -----: | ----: | --------- | --------------- |
| 100.0% | 1.0ms | `parse/2` | `Jason.Decoder` |

##### `object/6` (`Jason.Decoder`)

|      % |  Time | Caller    | Location        |
| -----: | ----: | --------- | --------------- |
| 100.0% | 0.8ms | `parse/2` | `Jason.Decoder` |

##### `escape_json/4` (`Jason.Encode`)

|     % |   Time | Caller             | Location       |
| ----: | -----: | ------------------ | -------------- |
| 58.0% |  0.3ms | `map_naive_loop/3` | `Jason.Encode` |
| 36.1% |  0.2ms | `encode_string/2`  | `Jason.Encode` |
|  5.9% | 35.0µs | `map_naive/3`      | `Jason.Encode` |

##### `sleep` (`<unknown>`)

|     % |   Time | Caller                | Location        |
| ----: | -----: | --------------------- | --------------- |
| 93.6% |  0.5ms | `call/1`              | `code_server`   |
|  3.0% | 17.0µs | `sleep`               | `<unknown>`     |
|  1.0% |  6.0µs | `escape_json_chunk/5` | `Jason.Encode`  |
|  0.7% |  4.0µs | `string/6`            | `Jason.Decoder` |
|  0.3% |  2.0µs | `read_file_nif/1`     | `prim_file`     |

##### `escape_json/3` (`Jason.Encode`)

|     % |   Time | Caller             | Location       |
| ----: | -----: | ------------------ | -------------- |
| 65.7% |  0.3ms | `map_naive_loop/3` | `Jason.Encode` |
| 27.6% |  0.1ms | `encode_string/2`  | `Jason.Encode` |
|  6.7% | 35.0µs | `map_naive/3`      | `Jason.Encode` |

##### `-string_decode_function/1-fun-0-/1` (`Jason.Decoder`)

|      % |  Time | Caller     | Location        |
| -----: | ----: | ---------- | --------------- |
| 100.0% | 0.5ms | `string/6` | `Jason.Decoder` |

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
| 64.6% |  0.3ms | `map_naive_loop/3` | `Jason.Encode` |
| 27.1% |  0.1ms | `encode/2`         | `Jason.Encode` |
|  8.3% | 40.0µs | `list/3`           | `Jason.Encode` |

##### `value/5` (`Jason.Decoder`)

|      % |  Time | Caller    | Location        |
| -----: | ----: | --------- | --------------- |
| 100.0% | 0.4ms | `parse/2` | `Jason.Decoder` |

##### `-key_decode_function/1-fun-0-/1` (`Jason.Decoder`)

|      % |  Time | Caller     | Location        |
| -----: | ----: | ---------- | --------------- |
| 100.0% | 0.4ms | `object/6` | `Jason.Decoder` |

##### `key/2` (`Jason.Encode`)

|     % |   Time | Caller             | Location       |
| ----: | -----: | ------------------ | -------------- |
| 90.8% |  0.3ms | `map_naive_loop/3` | `Jason.Encode` |
|  9.2% | 35.0µs | `map_naive/3`      | `Jason.Encode` |

##### `key/5` (`Jason.Decoder`)

|      % |  Time | Caller    | Location        |
| -----: | ----: | --------- | --------------- |
| 100.0% | 0.4ms | `parse/2` | `Jason.Decoder` |

##### `key/6` (`Jason.Decoder`)

|      % |  Time | Caller    | Location        |
| -----: | ----: | --------- | --------------- |
| 100.0% | 0.4ms | `parse/2` | `Jason.Decoder` |

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

##### `from_list/1` (`maps`)

|     % |   Time | Caller       | Location        |
| ----: | -----: | ------------ | --------------- |
| 77.8% | 35.0µs | `object/6`   | `Jason.Decoder` |
| 22.2% | 10.0µs | `into_map/2` | `Enum`          |

##### `to_list_internal/1` (`maps`)

|      % |   Time | Caller    | Location       |
| -----: | -----: | --------- | -------------- |
| 100.0% | 45.0µs | `value/3` | `Jason.Encode` |

##### `into_map/2` (`Enum`)

|     % |   Time | Caller      | Location |
| ----: | -----: | ----------- | -------- |
| 55.9% | 19.0µs | `encode!/2` | `Jason`  |
| 44.1% | 15.0µs | `decode/2`  | `Jason`  |

##### `iolist_to_binary/1` (`erlang`)

|     % |   Time | Caller      | Location        |
| ----: | -----: | ----------- | --------------- |
| 50.0% | 10.0µs | `string/7`  | `Jason.Decoder` |
| 25.0% |  5.0µs | `encode!/2` | `Jason`         |
| 25.0% |  5.0µs | `decode/2`  | `Jason`         |

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

##### `call/1` (`code`)

|     % |  Time | Caller                 | Location        |
| ----: | ----: | ---------------------- | --------------- |
| 50.0% | 1.0µs | `ensure_loaded/1`      | `code`          |
| 50.0% | 1.0µs | `undefined_function/3` | `error_handler` |

##### `monitor/2` (`erlang`)

|      % |  Time | Caller   | Location      |
| -----: | ----: | -------- | ------------- |
| 100.0% | 2.0µs | `call/1` | `code_server` |

##### `demonitor/2` (`erlang`)

|      % |  Time | Caller   | Location      |
| -----: | ----: | -------- | ------------- |
| 100.0% | 2.0µs | `call/1` | `code_server` |

##### `whereis/1` (`erlang`)

|      % |  Time | Caller            | Location        |
| -----: | ----: | ----------------- | --------------- |
| 100.0% | 1.0µs | `ensure_loaded/1` | `error_handler` |

##### `function_exported/3` (`erlang`)

|      % |  Time | Caller                 | Location        |
| -----: | ----: | ---------------------- | --------------- |
| 100.0% | 1.0µs | `undefined_function/3` | `error_handler` |

### Total time

Functions ranked by total wall time spent in the function and all its callees.

|     % |   Time | Function               | Location        |
| ----: | -----: | ---------------------- | --------------- |
| 52.2% | 14.6ms | `-run/1-fun-0-/2`      | `Profile`       |
| 52.1% | 14.6ms | `encode!/2`            | `Jason`         |
| 47.7% | 13.3ms | `decode!/2`            | `Jason`         |
| 47.4% | 13.2ms | `parse/2`              | `Jason.Decoder` |
| 45.9% | 12.8ms | `encode/2`             | `Jason.Encode`  |
| 45.7% | 12.8ms | `map_naive/3`          | `Jason.Encode`  |
| 44.9% | 12.5ms | `map_naive_loop/3`     | `Jason.Encode`  |
| 32.2% |  9.0ms | `string/6`             | `Jason.Decoder` |
| 30.5% |  8.5ms | `escape_json_chunk/5`  | `Jason.Encode`  |
| 15.7% |  4.4ms | `encode_string/2`      | `Jason.Encode`  |
|  6.0% |  1.7ms | `undefined_function/3` | `error_handler` |
|  4.4% |  1.2ms | `object/6`             | `Jason.Decoder` |
|  4.2% |  1.2ms | `ensure_loaded/1`      | `code`          |
|  3.7% |  1.0ms | `string/7`             | `Jason.Decoder` |
|  2.6% |  0.7ms | `value/3`              | `Jason.Encode`  |
|  2.4% |  0.7ms | `list/3`               | `Jason.Encode`  |
|  2.2% |  0.6ms | `number/6`             | `Jason.Decoder` |
|  2.1% |  0.6ms | `escape_json/4`        | `Jason.Encode`  |
|  2.1% |  0.6ms | `sleep`                | `<unknown>`     |
|  2.0% |  0.5ms | `call/1`               | `code_server`   |

#### Categories

##### Ours

|     % |   Time | Function                             | Location        |
| ----: | -----: | ------------------------------------ | --------------- |
| 52.2% | 14.6ms | `-run/1-fun-0-/2`                    | `Profile`       |
| 52.1% | 14.6ms | `encode!/2`                          | `Jason`         |
| 47.7% | 13.3ms | `decode!/2`                          | `Jason`         |
| 47.4% | 13.2ms | `parse/2`                            | `Jason.Decoder` |
| 45.9% | 12.8ms | `encode/2`                           | `Jason.Encode`  |
| 45.7% | 12.8ms | `map_naive/3`                        | `Jason.Encode`  |
| 44.9% | 12.5ms | `map_naive_loop/3`                   | `Jason.Encode`  |
| 32.2% |  9.0ms | `string/6`                           | `Jason.Decoder` |
| 30.5% |  8.5ms | `escape_json_chunk/5`                | `Jason.Encode`  |
| 15.7% |  4.4ms | `encode_string/2`                    | `Jason.Encode`  |
|  6.0% |  1.7ms | `undefined_function/3`               | `error_handler` |
|  4.4% |  1.2ms | `object/6`                           | `Jason.Decoder` |
|  3.7% |  1.0ms | `string/7`                           | `Jason.Decoder` |
|  2.6% |  0.7ms | `value/3`                            | `Jason.Encode`  |
|  2.4% |  0.7ms | `list/3`                             | `Jason.Encode`  |
|  2.2% |  0.6ms | `number/6`                           | `Jason.Decoder` |
|  2.1% |  0.6ms | `escape_json/4`                      | `Jason.Encode`  |
|  2.0% |  0.5ms | `call/1`                             | `code_server`   |
|  1.9% |  0.5ms | `escape_json/3`                      | `Jason.Encode`  |
|  1.8% |  0.5ms | `-string_decode_function/1-fun-0-/1` | `Jason.Decoder` |

##### Idle

|    % |  Time | Function | Location    |
| ---: | ----: | -------- | ----------- |
| 2.1% | 0.6ms | `sleep`  | `<unknown>` |

##### Standard library

|     % |   Time | Function              | Location |
| ----: | -----: | --------------------- | -------- |
|  4.2% |  1.2ms | `ensure_loaded/1`     | `code`   |
|  0.9% |  0.3ms | `binary_to_integer/1` | `erlang` |
|  0.4% |  0.1ms | `to_list/1`           | `maps`   |
|  0.2% |  0.1ms | `integer_to_binary/1` | `erlang` |
|  0.2% |  0.1ms | `into_map/2`          | `Enum`   |
|  0.2% |  0.1ms | `to_list_internal/1`  | `maps`   |
|  0.2% | 45.0µs | `from_list/1`         | `maps`   |
|  0.1% | 22.0µs | `iolist_to_binary/1`  | `erlang` |
| <0.1% | 11.0µs | `reverse/2`           | `lists`  |
| <0.1% | 10.0µs | `into/2`              | `Enum`   |
| <0.1% |  2.0µs | `call/1`              | `code`   |
| <0.1% |  2.0µs | `monitor/2`           | `erlang` |
| <0.1% |  2.0µs | `demonitor/2`         | `erlang` |
| <0.1% |  1.0µs | `whereis/1`           | `erlang` |
| <0.1% |  1.0µs | `function_exported/3` | `erlang` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `-run/1-fun-0-/2` (`Profile`)

|     % |   Time | Callee      | Location |
| ----: | -----: | ----------- | -------- |
| 99.8% | 14.6ms | `encode!/2` | `Jason`  |
|  0.2% | 22.0µs | `encode!/1` | `Jason`  |

##### `encode!/2` (`Jason`)

|     % |   Time | Callee                 | Location        |
| ----: | -----: | ---------------------- | --------------- |
| 88.0% | 12.8ms | `encode/2`             | `Jason.Encode`  |
| 11.5% |  1.7ms | `undefined_function/3` | `error_handler` |
|  0.2% | 29.0µs | `into_map/2`           | `Enum`          |
| <0.1% |  5.0µs | `format_encode_opts/1` | `Jason`         |
| <0.1% |  5.0µs | `into/2`               | `Enum`          |

##### `decode!/2` (`Jason`)

|     % |   Time | Callee     | Location        |
| ----: | -----: | ---------- | --------------- |
| 99.5% | 13.2ms | `parse/2`  | `Jason.Decoder` |
|  0.4% |  0.1ms | `decode/2` | `Jason`         |

##### `parse/2` (`Jason.Decoder`)

|     % |  Time | Callee     | Location        |
| ----: | ----: | ---------- | --------------- |
| 67.9% | 9.0ms | `string/6` | `Jason.Decoder` |
|  9.2% | 1.2ms | `object/6` | `Jason.Decoder` |
|  7.9% | 1.0ms | `string/7` | `Jason.Decoder` |
|  4.6% | 0.6ms | `number/6` | `Jason.Decoder` |
|  3.2% | 0.4ms | `value/5`  | `Jason.Decoder` |

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
| 35.2% | 4.4ms | `escape_json_chunk/5` | `Jason.Encode` |
| 34.8% | 4.4ms | `encode_string/2`     | `Jason.Encode` |
|  5.3% | 0.7ms | `list/3`              | `Jason.Encode` |
|  4.5% | 0.6ms | `value/3`             | `Jason.Encode` |

##### `string/6` (`Jason.Decoder`)

|     % |  Time | Callee                               | Location        |
| ----: | ----: | ------------------------------------ | --------------- |
|  5.7% | 0.5ms | `-string_decode_function/1-fun-0-/1` | `Jason.Decoder` |
| <0.1% | 4.0µs | `sleep`                              | `<unknown>`     |

##### `escape_json_chunk/5` (`Jason.Encode`)

|    % |  Time | Callee     | Location       |
| ---: | ----: | ---------- | -------------- |
| 0.7% | 0.1ms | `escape/1` | `Jason.Encode` |
| 0.1% | 6.0µs | `sleep`    | `<unknown>`    |

##### `encode_string/2` (`Jason.Encode`)

|     % |  Time | Callee                | Location       |
| ----: | ----: | --------------------- | -------------- |
| 85.1% | 3.7ms | `escape_json_chunk/5` | `Jason.Encode` |
|  5.0% | 0.2ms | `escape_json/4`       | `Jason.Encode` |
|  3.3% | 0.1ms | `escape_json/3`       | `Jason.Encode` |

##### `undefined_function/3` (`error_handler`)

|     % |  Time | Callee                | Location        |
| ----: | ----: | --------------------- | --------------- |
| 70.8% | 1.2ms | `ensure_loaded/1`     | `code`          |
| 28.7% | 0.5ms | `call/1`              | `code_server`   |
|  0.2% | 3.0µs | `ensure_loaded/1`     | `error_handler` |
|  0.1% | 1.0µs | `call/1`              | `code`          |
|  0.1% | 1.0µs | `function_exported/3` | `erlang`        |

##### `object/6` (`Jason.Decoder`)

|     % |   Time | Callee                            | Location        |
| ----: | -----: | --------------------------------- | --------------- |
| 31.2% |  0.4ms | `-key_decode_function/1-fun-0-/1` | `Jason.Decoder` |
|  2.9% | 35.0µs | `from_list/1`                     | `maps`          |
|  0.2% |  2.0µs | `sleep`                           | `<unknown>`     |

##### `ensure_loaded/1` (`code`)

|    % |  Time | Callee       | Location      |
| ---: | ----: | ------------ | ------------- |
| 5.9% | 0.1ms | `call/1`     | `code_server` |
| 0.3% | 3.0µs | `get_mode/0` | `code_server` |
| 0.1% | 1.0µs | `call/1`     | `code`        |

##### `string/7` (`Jason.Decoder`)

|    % |   Time | Callee               | Location    |
| ---: | -----: | -------------------- | ----------- |
| 1.1% | 12.0µs | `iolist_to_binary/1` | `erlang`    |
| 0.6% |  6.0µs | `sleep`              | `<unknown>` |

##### `value/3` (`Jason.Encode`)

|     % |  Time | Callee                | Location |
| ----: | ----: | --------------------- | -------- |
| 14.6% | 0.1ms | `to_list/1`           | `maps`   |
|  9.0% | 0.1ms | `integer_to_binary/1` | `erlang` |
|  6.9% | 0.1ms | `to_list_internal/1`  | `maps`   |

##### `list/3` (`Jason.Encode`)

|     % |   Time | Callee        | Location       |
| ----: | -----: | ------------- | -------------- |
| 89.6% |  0.6ms | `map_naive/3` | `Jason.Encode` |
|  6.7% | 45.0µs | `value/3`     | `Jason.Encode` |
|  5.2% | 35.0µs | `list_loop/3` | `Jason.Encode` |

##### `number/6` (`Jason.Decoder`)

|     % |  Time | Callee                | Location |
| ----: | ----: | --------------------- | -------- |
| 43.4% | 0.3ms | `binary_to_integer/1` | `erlang` |

##### `escape_json/4` (`Jason.Encode`)

|    % |  Time | Callee     | Location       |
| ---: | ----: | ---------- | -------------- |
| 0.8% | 5.0µs | `escape/1` | `Jason.Encode` |

##### `sleep` (`<unknown>`)

|    % |   Time | Callee  | Location    |
| ---: | -----: | ------- | ----------- |
| 3.0% | 17.0µs | `sleep` | `<unknown>` |

##### `call/1` (`code_server`)

|     % |  Time | Callee        | Location    |
| ----: | ----: | ------------- | ----------- |
| 98.2% | 0.5ms | `sleep`       | `<unknown>` |
|  0.4% | 2.0µs | `monitor/2`   | `erlang`    |
|  0.4% | 2.0µs | `demonitor/2` | `erlang`    |

##### `into_map/2` (`Enum`)

|     % |   Time | Callee        | Location |
| ----: | -----: | ------------- | -------- |
| 18.5% | 10.0µs | `from_list/1` | `maps`   |

##### `iolist_to_binary/1` (`erlang`)

|    % |  Time | Callee  | Location    |
| ---: | ----: | ------- | ----------- |
| 9.1% | 2.0µs | `sleep` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by wall time spent in their leaf frame.

|     % |  Time | Call stack                                                                                                                                                                                                |
| ----: | ----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 30.3% | 8.5ms | `string/6` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                                                          |
| 11.0% | 3.1ms | `escape_json_chunk/5` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                     |
|  7.6% | 2.1ms | `escape_json_chunk/5` (`Jason.Encode`) ← `encode_string/2` ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) |
|  5.2% | 1.4ms | `escape_json_chunk/5` (`Jason.Encode`) ← `encode_string/2` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                      |
|  4.2% | 1.2ms | `escape_json_chunk/5` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                                          |
|  3.7% | 1.0ms | `string/7` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                                                          |
|  3.3% | 0.9ms | `ensure_loaded/1` (`code`) ← `undefined_function/3` (`error_handler`) ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                                                             |
|  2.9% | 0.8ms | `object/6` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                                                          |
|  2.4% | 0.7ms | `map_naive_loop/3` (`Jason.Encode`) ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                             |
|  1.8% | 0.5ms | `-string_decode_function/1-fun-0-/1` (`Jason.Decoder`) ← `string/6` ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                   |
|  1.7% | 0.5ms | `sleep` ← `call/1` (`code_server`) ← `undefined_function/3` (`error_handler`) ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                                                     |
|  1.5% | 0.4ms | `value/5` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                                                           |
|  1.4% | 0.4ms | `-key_decode_function/1-fun-0-/1` (`Jason.Decoder`) ← `object/6` ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                      |
|  1.4% | 0.4ms | `key/5` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                                                             |
|  1.4% | 0.4ms | `key/6` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                                                             |
|  1.2% | 0.3ms | `number/6` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                                                          |
|  1.2% | 0.3ms | `map_naive_loop/3` (`Jason.Encode`) ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                                                                  |
|  1.0% | 0.3ms | `map_naive/3` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                                                  |
|  0.9% | 0.3ms | `binary_to_integer/1` (`erlang`) ← `number/6` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                       |
|  0.9% | 0.3ms | `value/3` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                 |

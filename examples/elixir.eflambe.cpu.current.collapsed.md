# Sampling profile

Collected 27,936 samples.

| Category |     % | Samples |
| -------- | ----: | ------: |
| ours     | 92.3% |  25,794 |
| stdlib   |  7.7% |   2,142 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                             | Location        |
| ----: | ------: | ------------------------------------ | --------------- |
| 30.3% |   8,475 | `string/6`                           | Jason.Decoder   |
| 30.2% |   8,450 | `escape_json_chunk/5`                | Jason.Encode    |
|  3.8% |   1,075 | `map_naive_loop/3`                   | Jason.Encode    |
|  3.7% |   1,029 | `string/7`                           | Jason.Decoder   |
|  2.9% |     804 | `object/6`                           | Jason.Decoder   |
|  2.1% |     595 | `escape_json/4`                      | Jason.Encode    |
|  2.1% |     575 | `sleep`                              | `<unknown>`     |
|  1.9% |     525 | `escape_json/3`                      | Jason.Encode    |
|  1.8% |     515 | `-string_decode_function/1-fun-0-/1` | Jason.Decoder   |
|  1.8% |     500 | `value/3`                            | Jason.Encode    |
|  1.7% |     480 | `map_naive/3`                        | Jason.Encode    |
|  1.5% |     420 | `value/5`                            | Jason.Decoder   |
|  1.4% |     382 | `-key_decode_function/1-fun-0-/1`    | Jason.Decoder   |
|  1.4% |     380 | `key/2`                              | Jason.Encode    |
|  1.4% |     380 | `key/5`                              | Jason.Decoder   |
|  1.4% |     380 | `key/6`                              | Jason.Decoder   |
|  1.2% |     345 | `number/6`                           | Jason.Decoder   |
|  1.0% |     290 | `encode_string/2`                    | Jason.Encode    |
|  0.5% |     137 | `archive_split/3`                    | erl_prim_loader |
|  0.4% |     125 | `encode_atom/2`                      | Jason.Encode    |

#### Callers

Callers ranked by contribution to each function's self samples. Caller attribution may be imprecise due to inlining.

##### `string/6` (Jason.Decoder)

|      % | Samples | Caller    | Location      |
| -----: | ------: | --------- | ------------- |
| 100.0% |   8,475 | `parse/2` | Jason.Decoder |

##### `escape_json_chunk/5` (Jason.Encode)

|     % | Samples | Caller             | Location     |
| ----: | ------: | ------------------ | ------------ |
| 52.1% |   4,405 | `map_naive_loop/3` | Jason.Encode |
| 43.6% |   3,680 | `encode_string/2`  | Jason.Encode |
|  4.3% |     365 | `map_naive/3`      | Jason.Encode |

##### `map_naive_loop/3` (Jason.Encode)

|      % | Samples | Caller        | Location     |
| -----: | ------: | ------------- | ------------ |
| 100.0% |   1,075 | `map_naive/3` | Jason.Encode |

##### `string/7` (Jason.Decoder)

|      % | Samples | Caller    | Location      |
| -----: | ------: | --------- | ------------- |
| 100.0% |   1,029 | `parse/2` | Jason.Decoder |

##### `object/6` (Jason.Decoder)

|      % | Samples | Caller    | Location      |
| -----: | ------: | --------- | ------------- |
| 100.0% |     804 | `parse/2` | Jason.Decoder |

##### `escape_json/4` (Jason.Encode)

|     % | Samples | Caller             | Location     |
| ----: | ------: | ------------------ | ------------ |
| 58.0% |     345 | `map_naive_loop/3` | Jason.Encode |
| 36.1% |     215 | `encode_string/2`  | Jason.Encode |
|  5.9% |      35 | `map_naive/3`      | Jason.Encode |

##### `sleep` (`<unknown>`)

|     % | Samples | Caller                | Location      |
| ----: | ------: | --------------------- | ------------- |
| 93.6% |     538 | `call/1`              | code_server   |
|  3.0% |      17 | `sleep`               | `<unknown>`   |
|  1.0% |       6 | `escape_json_chunk/5` | Jason.Encode  |
|  0.7% |       4 | `string/6`            | Jason.Decoder |
|  0.3% |       2 | `read_file_nif/1`     | prim_file     |

##### `escape_json/3` (Jason.Encode)

|     % | Samples | Caller             | Location     |
| ----: | ------: | ------------------ | ------------ |
| 65.7% |     345 | `map_naive_loop/3` | Jason.Encode |
| 27.6% |     145 | `encode_string/2`  | Jason.Encode |
|  6.7% |      35 | `map_naive/3`      | Jason.Encode |

##### `-string_decode_function/1-fun-0-/1` (Jason.Decoder)

|      % | Samples | Caller     | Location      |
| -----: | ------: | ---------- | ------------- |
| 100.0% |     515 | `string/6` | Jason.Decoder |

##### `value/3` (Jason.Encode)

|     % | Samples | Caller             | Location     |
| ----: | ------: | ------------------ | ------------ |
| 83.0% |     415 | `map_naive_loop/3` | Jason.Encode |
|  9.0% |      45 | `map_naive/3`      | Jason.Encode |
|  4.0% |      20 | `list/3`           | Jason.Encode |
|  2.0% |      10 | `encode/2`         | Jason.Encode |
|  2.0% |      10 | `list_loop/3`      | Jason.Encode |

##### `map_naive/3` (Jason.Encode)

|     % | Samples | Caller             | Location     |
| ----: | ------: | ------------------ | ------------ |
| 64.6% |     310 | `map_naive_loop/3` | Jason.Encode |
| 27.1% |     130 | `encode/2`         | Jason.Encode |
|  8.3% |      40 | `list/3`           | Jason.Encode |

##### `value/5` (Jason.Decoder)

|      % | Samples | Caller    | Location      |
| -----: | ------: | --------- | ------------- |
| 100.0% |     420 | `parse/2` | Jason.Decoder |

##### `-key_decode_function/1-fun-0-/1` (Jason.Decoder)

|      % | Samples | Caller     | Location      |
| -----: | ------: | ---------- | ------------- |
| 100.0% |     382 | `object/6` | Jason.Decoder |

##### `key/2` (Jason.Encode)

|     % | Samples | Caller             | Location     |
| ----: | ------: | ------------------ | ------------ |
| 90.8% |     345 | `map_naive_loop/3` | Jason.Encode |
|  9.2% |      35 | `map_naive/3`      | Jason.Encode |

##### `key/5` (Jason.Decoder)

|      % | Samples | Caller    | Location      |
| -----: | ------: | --------- | ------------- |
| 100.0% |     380 | `parse/2` | Jason.Decoder |

##### `key/6` (Jason.Decoder)

|      % | Samples | Caller    | Location      |
| -----: | ------: | --------- | ------------- |
| 100.0% |     380 | `parse/2` | Jason.Decoder |

##### `number/6` (Jason.Decoder)

|      % | Samples | Caller    | Location      |
| -----: | ------: | --------- | ------------- |
| 100.0% |     345 | `parse/2` | Jason.Decoder |

##### `encode_string/2` (Jason.Encode)

|     % | Samples | Caller             | Location     |
| ----: | ------: | ------------------ | ------------ |
| 96.6% |     280 | `map_naive_loop/3` | Jason.Encode |
|  3.4% |      10 | `map_naive/3`      | Jason.Encode |

##### `archive_split/3` (erl_prim_loader)

|      % | Samples | Caller         | Location        |
| -----: | ------: | -------------- | --------------- |
| 100.0% |     137 | `name_split/2` | erl_prim_loader |

##### `encode_atom/2` (Jason.Encode)

|     % | Samples | Caller             | Location     |
| ----: | ------: | ------------------ | ------------ |
| 92.0% |     115 | `map_naive_loop/3` | Jason.Encode |
|  8.0% |      10 | `map_naive/3`      | Jason.Encode |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function               | Location      |
| ----: | ------: | ---------------------- | ------------- |
| 52.2% |  14,591 | `-run/1-fun-0-/2`      | Profile       |
| 52.1% |  14,557 | `encode!/2`            | Jason         |
| 47.7% |  13,314 | `decode!/2`            | Jason         |
| 47.4% |  13,249 | `parse/2`              | Jason.Decoder |
| 45.9% |  12,816 | `encode/2`             | Jason.Encode  |
| 45.7% |  12,756 | `map_naive/3`          | Jason.Encode  |
| 44.9% |  12,541 | `map_naive_loop/3`     | Jason.Encode  |
| 32.2% |   8,994 | `string/6`             | Jason.Decoder |
| 30.5% |   8,516 | `escape_json_chunk/5`  | Jason.Encode  |
| 15.7% |   4,397 | `encode_string/2`      | Jason.Encode  |
|  6.0% |   1,667 | `undefined_function/3` | error_handler |
|  4.4% |   1,223 | `object/6`             | Jason.Decoder |
|  4.2% |   1,181 | `ensure_loaded/1`      | code          |
|  3.7% |   1,047 | `string/7`             | Jason.Decoder |
|  2.6% |     720 | `value/3`              | Jason.Encode  |
|  2.4% |     672 | `list/3`               | Jason.Encode  |
|  2.2% |     610 | `number/6`             | Jason.Decoder |
|  2.1% |     600 | `escape_json/4`        | Jason.Encode  |
|  2.1% |     575 | `sleep`                | `<unknown>`   |
|  2.0% |     548 | `call/1`               | code_server   |

#### Callees

Callees ranked by contribution to each function's total samples. Callee attribution may be imprecise due to inlining.

##### `-run/1-fun-0-/2` (Profile)

|     % | Samples | Callee      | Location |
| ----: | ------: | ----------- | -------- |
| 99.8% |  14,557 | `encode!/2` | Jason    |
|  0.2% |      22 | `encode!/1` | Jason    |

##### `encode!/2` (Jason)

|     % | Samples | Callee                 | Location      |
| ----: | ------: | ---------------------- | ------------- |
| 88.0% |  12,816 | `encode/2`             | Jason.Encode  |
| 11.5% |   1,667 | `undefined_function/3` | error_handler |
|  0.2% |      29 | `into_map/2`           | Enum          |
| <0.1% |       5 | `format_encode_opts/1` | Jason         |
| <0.1% |       5 | `into/2`               | Enum          |

##### `decode!/2` (Jason)

|     % | Samples | Callee     | Location      |
| ----: | ------: | ---------- | ------------- |
| 99.5% |  13,249 | `parse/2`  | Jason.Decoder |
|  0.4% |      55 | `decode/2` | Jason         |

##### `parse/2` (Jason.Decoder)

|     % | Samples | Callee     | Location      |
| ----: | ------: | ---------- | ------------- |
| 67.9% |   8,994 | `string/6` | Jason.Decoder |
|  9.2% |   1,223 | `object/6` | Jason.Decoder |
|  7.9% |   1,047 | `string/7` | Jason.Decoder |
|  4.6% |     610 | `number/6` | Jason.Decoder |
|  3.2% |     420 | `value/5`  | Jason.Decoder |

##### `encode/2` (Jason.Encode)

|     % | Samples | Callee                  | Location     |
| ----: | ------: | ----------------------- | ------------ |
| 99.5% |  12,756 | `map_naive/3`           | Jason.Encode |
|  0.2% |      30 | `value/3`               | Jason.Encode |
| <0.1% |       5 | `escape_function/1`     | Jason.Encode |
| <0.1% |       5 | `encode_map_function/1` | Jason.Encode |

##### `map_naive/3` (Jason.Encode)

|     % | Samples | Callee                | Location     |
| ----: | ------: | --------------------- | ------------ |
| 98.3% |  12,541 | `map_naive_loop/3`    | Jason.Encode |
|  2.9% |     365 | `escape_json_chunk/5` | Jason.Encode |
|  0.5% |      70 | `value/3`             | Jason.Encode |
|  0.3% |      35 | `key/2`               | Jason.Encode |
|  0.3% |      35 | `escape_json/3`       | Jason.Encode |

##### `map_naive_loop/3` (Jason.Encode)

|     % | Samples | Callee                | Location     |
| ----: | ------: | --------------------- | ------------ |
| 69.4% |   8,701 | `map_naive/3`         | Jason.Encode |
| 35.2% |   4,409 | `escape_json_chunk/5` | Jason.Encode |
| 34.8% |   4,367 | `encode_string/2`     | Jason.Encode |
|  5.3% |     662 | `list/3`              | Jason.Encode |
|  4.5% |     560 | `value/3`             | Jason.Encode |

##### `string/6` (Jason.Decoder)

|     % | Samples | Callee                               | Location      |
| ----: | ------: | ------------------------------------ | ------------- |
|  5.7% |     515 | `-string_decode_function/1-fun-0-/1` | Jason.Decoder |
| <0.1% |       4 | `sleep`                              | `<unknown>`   |

##### `escape_json_chunk/5` (Jason.Encode)

|    % | Samples | Callee     | Location     |
| ---: | ------: | ---------- | ------------ |
| 0.7% |      60 | `escape/1` | Jason.Encode |
| 0.1% |       6 | `sleep`    | `<unknown>`  |

##### `encode_string/2` (Jason.Encode)

|     % | Samples | Callee                | Location     |
| ----: | ------: | --------------------- | ------------ |
| 85.1% |   3,742 | `escape_json_chunk/5` | Jason.Encode |
|  5.0% |     220 | `escape_json/4`       | Jason.Encode |
|  3.3% |     145 | `escape_json/3`       | Jason.Encode |

##### `undefined_function/3` (error_handler)

|     % | Samples | Callee                | Location      |
| ----: | ------: | --------------------- | ------------- |
| 70.8% |   1,181 | `ensure_loaded/1`     | code          |
| 28.7% |     478 | `call/1`              | code_server   |
|  0.2% |       3 | `ensure_loaded/1`     | error_handler |
|  0.1% |       1 | `call/1`              | code          |
|  0.1% |       1 | `function_exported/3` | erlang        |

##### `object/6` (Jason.Decoder)

|     % | Samples | Callee                            | Location      |
| ----: | ------: | --------------------------------- | ------------- |
| 31.2% |     382 | `-key_decode_function/1-fun-0-/1` | Jason.Decoder |
|  2.9% |      35 | `from_list/1`                     | maps          |
|  0.2% |       2 | `sleep`                           | `<unknown>`   |

##### `ensure_loaded/1` (code)

|    % | Samples | Callee       | Location    |
| ---: | ------: | ------------ | ----------- |
| 5.9% |      70 | `call/1`     | code_server |
| 0.3% |       3 | `get_mode/0` | code_server |
| 0.1% |       1 | `call/1`     | code        |

##### `string/7` (Jason.Decoder)

|    % | Samples | Callee               | Location    |
| ---: | ------: | -------------------- | ----------- |
| 1.1% |      12 | `iolist_to_binary/1` | erlang      |
| 0.6% |       6 | `sleep`              | `<unknown>` |

##### `value/3` (Jason.Encode)

|     % | Samples | Callee                | Location |
| ----: | ------: | --------------------- | -------- |
| 14.6% |     105 | `to_list/1`           | maps     |
|  9.0% |      65 | `integer_to_binary/1` | erlang   |
|  6.9% |      50 | `to_list_internal/1`  | maps     |

##### `list/3` (Jason.Encode)

|     % | Samples | Callee        | Location     |
| ----: | ------: | ------------- | ------------ |
| 89.6% |     602 | `map_naive/3` | Jason.Encode |
|  6.7% |      45 | `value/3`     | Jason.Encode |
|  5.2% |      35 | `list_loop/3` | Jason.Encode |

##### `number/6` (Jason.Decoder)

|     % | Samples | Callee                | Location |
| ----: | ------: | --------------------- | -------- |
| 43.4% |     265 | `binary_to_integer/1` | erlang   |

##### `escape_json/4` (Jason.Encode)

|    % | Samples | Callee     | Location     |
| ---: | ------: | ---------- | ------------ |
| 0.8% |       5 | `escape/1` | Jason.Encode |

##### `sleep` (`<unknown>`)

|    % | Samples | Callee  | Location    |
| ---: | ------: | ------- | ----------- |
| 3.0% |      17 | `sleep` | `<unknown>` |

##### `call/1` (code_server)

|     % | Samples | Callee        | Location    |
| ----: | ------: | ------------- | ----------- |
| 98.2% |     538 | `sleep`       | `<unknown>` |
|  0.4% |       2 | `monitor/2`   | erlang      |
|  0.4% |       2 | `demonitor/2` | erlang      |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                          |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 30.3% |   8,475 | `string/6` (Jason.Decoder) ← `parse/2` ← `decode!/2` (Jason)                                                                                                                                        |
| 11.0% |   3,085 | `escape_json_chunk/5` (Jason.Encode) ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (Jason) ← `-run/1-fun-0-/2` (Profile)                     |
|  7.6% |   2,120 | `escape_json_chunk/5` (Jason.Encode) ← `encode_string/2` ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (Jason) ← `-run/1-fun-0-/2` (Profile) |
|  5.2% |   1,440 | `escape_json_chunk/5` (Jason.Encode) ← `encode_string/2` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (Jason) ← `-run/1-fun-0-/2` (Profile)                                      |
|  4.2% |   1,180 | `escape_json_chunk/5` (Jason.Encode) ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (Jason) ← `-run/1-fun-0-/2` (Profile)                                                          |
|  3.7% |   1,029 | `string/7` (Jason.Decoder) ← `parse/2` ← `decode!/2` (Jason)                                                                                                                                        |
|  3.3% |     919 | `ensure_loaded/1` (code) ← `undefined_function/3` (error_handler) ← `encode!/2` (Jason) ← `-run/1-fun-0-/2` (Profile)                                                                               |
|  2.9% |     804 | `object/6` (Jason.Decoder) ← `parse/2` ← `decode!/2` (Jason)                                                                                                                                        |
|  2.4% |     660 | `map_naive_loop/3` (Jason.Encode) ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (Jason) ← `-run/1-fun-0-/2` (Profile)                                             |
|  1.8% |     515 | `-string_decode_function/1-fun-0-/1` (Jason.Decoder) ← `string/6` ← `parse/2` ← `decode!/2` (Jason)                                                                                                 |
|  1.7% |     473 | `sleep` ← `call/1` (code_server) ← `undefined_function/3` (error_handler) ← `encode!/2` (Jason) ← `-run/1-fun-0-/2` (Profile)                                                                       |
|  1.5% |     420 | `value/5` (Jason.Decoder) ← `parse/2` ← `decode!/2` (Jason)                                                                                                                                         |
|  1.4% |     382 | `-key_decode_function/1-fun-0-/1` (Jason.Decoder) ← `object/6` ← `parse/2` ← `decode!/2` (Jason)                                                                                                    |
|  1.4% |     380 | `key/5` (Jason.Decoder) ← `parse/2` ← `decode!/2` (Jason)                                                                                                                                           |
|  1.4% |     380 | `key/6` (Jason.Decoder) ← `parse/2` ← `decode!/2` (Jason)                                                                                                                                           |
|  1.2% |     345 | `number/6` (Jason.Decoder) ← `parse/2` ← `decode!/2` (Jason)                                                                                                                                        |
|  1.2% |     335 | `map_naive_loop/3` (Jason.Encode) ← `map_naive/3` ← `encode/2` ← `encode!/2` (Jason) ← `-run/1-fun-0-/2` (Profile)                                                                                  |
|  1.0% |     275 | `map_naive/3` (Jason.Encode) ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (Jason) ← `-run/1-fun-0-/2` (Profile)                                                                  |
|  0.9% |     265 | `binary_to_integer/1` (erlang) ← `number/6` (Jason.Decoder) ← `parse/2` ← `decode!/2` (Jason)                                                                                                       |
|  0.9% |     250 | `value/3` (Jason.Encode) ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (Jason) ← `-run/1-fun-0-/2` (Profile)                                 |

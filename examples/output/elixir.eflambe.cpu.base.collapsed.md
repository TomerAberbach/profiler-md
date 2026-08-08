# Profile

Collected 25,768 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Ours             | 91.9% |  23,677 |
| Standard library |  5.9% |   1,521 |
| Idle             |  2.2% |     570 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                             | Location          |
| ----: | ------: | ------------------------------------ | ----------------- |
| 32.8% |   8,450 | `escape_json_chunk/5`                | `Jason.Encode`    |
| 27.5% |   7,091 | `string/6`                           | `Jason.Decoder`   |
|  4.2% |   1,076 | `map_naive_loop/3`                   | `Jason.Encode`    |
|  3.2% |     824 | `string/7`                           | `Jason.Decoder`   |
|  2.6% |     677 | `object/6`                           | `Jason.Decoder`   |
|  2.3% |     595 | `escape_json/4`                      | `Jason.Encode`    |
|  2.2% |     570 | `sleep`                              | `<unknown>`       |
|  2.0% |     525 | `escape_json/3`                      | `Jason.Encode`    |
|  1.9% |     500 | `value/3`                            | `Jason.Encode`    |
|  1.8% |     461 | `map_naive/3`                        | `Jason.Encode`    |
|  1.7% |     438 | `-string_decode_function/1-fun-0-/1` | `Jason.Decoder`   |
|  1.5% |     380 | `key/2`                              | `Jason.Encode`    |
|  1.4% |     363 | `value/5`                            | `Jason.Decoder`   |
|  1.3% |     324 | `key/5`                              | `Jason.Decoder`   |
|  1.3% |     324 | `key/6`                              | `Jason.Decoder`   |
|  1.3% |     324 | `-key_decode_function/1-fun-0-/1`    | `Jason.Decoder`   |
|  1.2% |     307 | `number/6`                           | `Jason.Decoder`   |
|  1.1% |     290 | `encode_string/2`                    | `Jason.Encode`    |
|  0.5% |     137 | `archive_split/3`                    | `erl_prim_loader` |
|  0.5% |     125 | `encode_atom/2`                      | `Jason.Encode`    |

#### Categories

##### Ours

|     % | Samples | Function                             | Location          |
| ----: | ------: | ------------------------------------ | ----------------- |
| 32.8% |   8,450 | `escape_json_chunk/5`                | `Jason.Encode`    |
| 27.5% |   7,091 | `string/6`                           | `Jason.Decoder`   |
|  4.2% |   1,076 | `map_naive_loop/3`                   | `Jason.Encode`    |
|  3.2% |     824 | `string/7`                           | `Jason.Decoder`   |
|  2.6% |     677 | `object/6`                           | `Jason.Decoder`   |
|  2.3% |     595 | `escape_json/4`                      | `Jason.Encode`    |
|  2.0% |     525 | `escape_json/3`                      | `Jason.Encode`    |
|  1.9% |     500 | `value/3`                            | `Jason.Encode`    |
|  1.8% |     461 | `map_naive/3`                        | `Jason.Encode`    |
|  1.7% |     438 | `-string_decode_function/1-fun-0-/1` | `Jason.Decoder`   |
|  1.5% |     380 | `key/2`                              | `Jason.Encode`    |
|  1.4% |     363 | `value/5`                            | `Jason.Decoder`   |
|  1.3% |     324 | `key/5`                              | `Jason.Decoder`   |
|  1.3% |     324 | `key/6`                              | `Jason.Decoder`   |
|  1.3% |     324 | `-key_decode_function/1-fun-0-/1`    | `Jason.Decoder`   |
|  1.2% |     307 | `number/6`                           | `Jason.Decoder`   |
|  1.1% |     290 | `encode_string/2`                    | `Jason.Encode`    |
|  0.5% |     137 | `archive_split/3`                    | `erl_prim_loader` |
|  0.5% |     125 | `encode_atom/2`                      | `Jason.Encode`    |
|  0.3% |      65 | `escape/1`                           | `Jason.Encode`    |

##### Idle

|    % | Samples | Function | Location    |
| ---: | ------: | -------- | ----------- |
| 2.2% |     570 | `sleep`  | `<unknown>` |

##### Standard library

|     % | Samples | Function              | Location |
| ----: | ------: | --------------------- | -------- |
|  0.3% |      83 | `binary_to_integer/1` | `erlang` |
|  0.3% |      70 | `to_list/1`           | `maps`   |
|  0.3% |      65 | `integer_to_binary/1` | `erlang` |
|  0.2% |      45 | `to_list_internal/1`  | `maps`   |
|  0.2% |      40 | `from_list/1`         | `maps`   |
|  0.1% |      30 | `into_map/2`          | `Enum`   |
|  0.1% |      18 | `iolist_to_binary/1`  | `erlang` |
| <0.1% |      11 | `reverse/2`           | `lists`  |
| <0.1% |      10 | `into/2`              | `Enum`   |
| <0.1% |       5 | `ensure_loaded/1`     | `code`   |
| <0.1% |       3 | `demonitor/2`         | `erlang` |
| <0.1% |       2 | `call/1`              | `code`   |
| <0.1% |       2 | `monitor/2`           | `erlang` |
| <0.1% |       2 | `function_exported/3` | `erlang` |
| <0.1% |       1 | `whereis/1`           | `erlang` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `escape_json_chunk/5` (`Jason.Encode`)

|     % | Samples | Caller             | Location       |
| ----: | ------: | ------------------ | -------------- |
| 52.1% |   4,405 | `map_naive_loop/3` | `Jason.Encode` |
| 43.6% |   3,680 | `encode_string/2`  | `Jason.Encode` |
|  4.3% |     365 | `map_naive/3`      | `Jason.Encode` |

##### `string/6` (`Jason.Decoder`)

|      % | Samples | Caller    | Location        |
| -----: | ------: | --------- | --------------- |
| 100.0% |   7,091 | `parse/2` | `Jason.Decoder` |

##### `map_naive_loop/3` (`Jason.Encode`)

|      % | Samples | Caller        | Location       |
| -----: | ------: | ------------- | -------------- |
| 100.0% |   1,076 | `map_naive/3` | `Jason.Encode` |

##### `string/7` (`Jason.Decoder`)

|      % | Samples | Caller    | Location        |
| -----: | ------: | --------- | --------------- |
| 100.0% |     824 | `parse/2` | `Jason.Decoder` |

##### `object/6` (`Jason.Decoder`)

|      % | Samples | Caller    | Location        |
| -----: | ------: | --------- | --------------- |
| 100.0% |     677 | `parse/2` | `Jason.Decoder` |

##### `escape_json/4` (`Jason.Encode`)

|     % | Samples | Caller             | Location       |
| ----: | ------: | ------------------ | -------------- |
| 58.0% |     345 | `map_naive_loop/3` | `Jason.Encode` |
| 36.1% |     215 | `encode_string/2`  | `Jason.Encode` |
|  5.9% |      35 | `map_naive/3`      | `Jason.Encode` |

##### `sleep` (`<unknown>`)

|     % | Samples | Caller                | Location        |
| ----: | ------: | --------------------- | --------------- |
| 92.1% |     525 | `call/1`              | `code_server`   |
|  3.5% |      20 | `map_naive_loop/3`    | `Jason.Encode`  |
|  1.6% |       9 | `sleep`               | `<unknown>`     |
|  0.7% |       4 | `string/6`            | `Jason.Decoder` |
|  0.7% |       4 | `escape_json_chunk/5` | `Jason.Encode`  |

##### `escape_json/3` (`Jason.Encode`)

|     % | Samples | Caller             | Location       |
| ----: | ------: | ------------------ | -------------- |
| 65.7% |     345 | `map_naive_loop/3` | `Jason.Encode` |
| 27.6% |     145 | `encode_string/2`  | `Jason.Encode` |
|  6.7% |      35 | `map_naive/3`      | `Jason.Encode` |

##### `value/3` (`Jason.Encode`)

|     % | Samples | Caller             | Location       |
| ----: | ------: | ------------------ | -------------- |
| 83.0% |     415 | `map_naive_loop/3` | `Jason.Encode` |
|  9.0% |      45 | `map_naive/3`      | `Jason.Encode` |
|  4.0% |      20 | `list/3`           | `Jason.Encode` |
|  2.0% |      10 | `encode/2`         | `Jason.Encode` |
|  2.0% |      10 | `list_loop/3`      | `Jason.Encode` |

##### `map_naive/3` (`Jason.Encode`)

|     % | Samples | Caller             | Location       |
| ----: | ------: | ------------------ | -------------- |
| 63.1% |     291 | `map_naive_loop/3` | `Jason.Encode` |
| 28.2% |     130 | `encode/2`         | `Jason.Encode` |
|  8.7% |      40 | `list/3`           | `Jason.Encode` |

##### `-string_decode_function/1-fun-0-/1` (`Jason.Decoder`)

|      % | Samples | Caller     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |     438 | `string/6` | `Jason.Decoder` |

##### `key/2` (`Jason.Encode`)

|     % | Samples | Caller             | Location       |
| ----: | ------: | ------------------ | -------------- |
| 90.8% |     345 | `map_naive_loop/3` | `Jason.Encode` |
|  9.2% |      35 | `map_naive/3`      | `Jason.Encode` |

##### `value/5` (`Jason.Decoder`)

|      % | Samples | Caller    | Location        |
| -----: | ------: | --------- | --------------- |
| 100.0% |     363 | `parse/2` | `Jason.Decoder` |

##### `key/5` (`Jason.Decoder`)

|      % | Samples | Caller    | Location        |
| -----: | ------: | --------- | --------------- |
| 100.0% |     324 | `parse/2` | `Jason.Decoder` |

##### `key/6` (`Jason.Decoder`)

|      % | Samples | Caller    | Location        |
| -----: | ------: | --------- | --------------- |
| 100.0% |     324 | `parse/2` | `Jason.Decoder` |

##### `-key_decode_function/1-fun-0-/1` (`Jason.Decoder`)

|      % | Samples | Caller     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |     324 | `object/6` | `Jason.Decoder` |

##### `number/6` (`Jason.Decoder`)

|      % | Samples | Caller    | Location        |
| -----: | ------: | --------- | --------------- |
| 100.0% |     307 | `parse/2` | `Jason.Decoder` |

##### `encode_string/2` (`Jason.Encode`)

|     % | Samples | Caller             | Location       |
| ----: | ------: | ------------------ | -------------- |
| 96.6% |     280 | `map_naive_loop/3` | `Jason.Encode` |
|  3.4% |      10 | `map_naive/3`      | `Jason.Encode` |

##### `archive_split/3` (`erl_prim_loader`)

|      % | Samples | Caller         | Location          |
| -----: | ------: | -------------- | ----------------- |
| 100.0% |     137 | `name_split/2` | `erl_prim_loader` |

##### `encode_atom/2` (`Jason.Encode`)

|     % | Samples | Caller             | Location       |
| ----: | ------: | ------------------ | -------------- |
| 92.0% |     115 | `map_naive_loop/3` | `Jason.Encode` |
|  8.0% |      10 | `map_naive/3`      | `Jason.Encode` |

##### `binary_to_integer/1` (`erlang`)

|      % | Samples | Caller     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |      83 | `number/6` | `Jason.Decoder` |

##### `to_list/1` (`maps`)

|      % | Samples | Caller    | Location       |
| -----: | ------: | --------- | -------------- |
| 100.0% |      70 | `value/3` | `Jason.Encode` |

##### `escape/1` (`Jason.Encode`)

|     % | Samples | Caller                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 92.3% |      60 | `escape_json_chunk/5` | `Jason.Encode` |
|  7.7% |       5 | `escape_json/4`       | `Jason.Encode` |

##### `integer_to_binary/1` (`erlang`)

|      % | Samples | Caller    | Location       |
| -----: | ------: | --------- | -------------- |
| 100.0% |      65 | `value/3` | `Jason.Encode` |

##### `to_list_internal/1` (`maps`)

|      % | Samples | Caller    | Location       |
| -----: | ------: | --------- | -------------- |
| 100.0% |      45 | `value/3` | `Jason.Encode` |

##### `from_list/1` (`maps`)

|     % | Samples | Caller       | Location        |
| ----: | ------: | ------------ | --------------- |
| 75.0% |      30 | `object/6`   | `Jason.Decoder` |
| 25.0% |      10 | `into_map/2` | `Enum`          |

##### `into_map/2` (`Enum`)

|     % | Samples | Caller      | Location |
| ----: | ------: | ----------- | -------- |
| 50.0% |      15 | `encode!/2` | `Jason`  |
| 50.0% |      15 | `decode/2`  | `Jason`  |

##### `iolist_to_binary/1` (`erlang`)

|     % | Samples | Caller      | Location        |
| ----: | ------: | ----------- | --------------- |
| 44.4% |       8 | `string/7`  | `Jason.Decoder` |
| 27.8% |       5 | `encode!/2` | `Jason`         |
| 27.8% |       5 | `decode/2`  | `Jason`         |

##### `reverse/2` (`lists`)

|     % | Samples | Caller      | Location          |
| ----: | ------: | ----------- | ----------------- |
| 90.9% |      10 | `array/6`   | `Jason.Decoder`   |
|  9.1% |       1 | `reverse/1` | `erl_prim_loader` |

##### `into/2` (`Enum`)

|     % | Samples | Caller      | Location |
| ----: | ------: | ----------- | -------- |
| 50.0% |       5 | `encode!/2` | `Jason`  |
| 50.0% |       5 | `decode/2`  | `Jason`  |

##### `ensure_loaded/1` (`code`)

|      % | Samples | Caller                 | Location        |
| -----: | ------: | ---------------------- | --------------- |
| 100.0% |       5 | `undefined_function/3` | `error_handler` |

##### `demonitor/2` (`erlang`)

|      % | Samples | Caller   | Location      |
| -----: | ------: | -------- | ------------- |
| 100.0% |       3 | `call/1` | `code_server` |

##### `call/1` (`code`)

|     % | Samples | Caller                 | Location        |
| ----: | ------: | ---------------------- | --------------- |
| 50.0% |       1 | `ensure_loaded/1`      | `code`          |
| 50.0% |       1 | `undefined_function/3` | `error_handler` |

##### `monitor/2` (`erlang`)

|      % | Samples | Caller   | Location      |
| -----: | ------: | -------- | ------------- |
| 100.0% |       2 | `call/1` | `code_server` |

##### `function_exported/3` (`erlang`)

|      % | Samples | Caller                 | Location        |
| -----: | ------: | ---------------------- | --------------- |
| 100.0% |       2 | `undefined_function/3` | `error_handler` |

##### `whereis/1` (`erlang`)

|      % | Samples | Caller            | Location        |
| -----: | ------: | ----------------- | --------------- |
| 100.0% |       1 | `ensure_loaded/1` | `error_handler` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function               | Location        |
| ----: | ------: | ---------------------- | --------------- |
| 56.4% |  14,546 | `-run/1-fun-0-/2`      | `Profile`       |
| 56.4% |  14,530 | `encode!/2`            | `Jason`         |
| 49.8% |  12,820 | `encode/2`             | `Jason.Encode`  |
| 49.5% |  12,760 | `map_naive/3`          | `Jason.Encode`  |
| 48.7% |  12,545 | `map_naive_loop/3`     | `Jason.Encode`  |
| 43.5% |  11,208 | `decode!/2`            | `Jason`         |
| 43.2% |  11,144 | `parse/2`              | `Jason.Decoder` |
| 33.0% |   8,514 | `escape_json_chunk/5`  | `Jason.Encode`  |
| 29.2% |   7,533 | `string/6`             | `Jason.Decoder` |
| 17.1% |   4,397 | `encode_string/2`      | `Jason.Encode`  |
|  6.4% |   1,645 | `undefined_function/3` | `error_handler` |
|  4.5% |   1,163 | `ensure_loaded/1`      | `code`          |
|  4.0% |   1,031 | `object/6`             | `Jason.Decoder` |
|  3.3% |     838 | `string/7`             | `Jason.Decoder` |
|  2.8% |     722 | `value/3`              | `Jason.Encode`  |
|  2.6% |     670 | `list/3`               | `Jason.Encode`  |
|  2.3% |     602 | `escape_json/4`        | `Jason.Encode`  |
|  2.2% |     570 | `sleep`                | `<unknown>`     |
|  2.1% |     554 | `number/6`             | `Jason.Decoder` |
|  2.1% |     536 | `call/1`               | `code_server`   |

#### Categories

##### Ours

|     % | Samples | Function                             | Location        |
| ----: | ------: | ------------------------------------ | --------------- |
| 56.4% |  14,546 | `-run/1-fun-0-/2`                    | `Profile`       |
| 56.4% |  14,530 | `encode!/2`                          | `Jason`         |
| 49.8% |  12,820 | `encode/2`                           | `Jason.Encode`  |
| 49.5% |  12,760 | `map_naive/3`                        | `Jason.Encode`  |
| 48.7% |  12,545 | `map_naive_loop/3`                   | `Jason.Encode`  |
| 43.5% |  11,208 | `decode!/2`                          | `Jason`         |
| 43.2% |  11,144 | `parse/2`                            | `Jason.Decoder` |
| 33.0% |   8,514 | `escape_json_chunk/5`                | `Jason.Encode`  |
| 29.2% |   7,533 | `string/6`                           | `Jason.Decoder` |
| 17.1% |   4,397 | `encode_string/2`                    | `Jason.Encode`  |
|  6.4% |   1,645 | `undefined_function/3`               | `error_handler` |
|  4.0% |   1,031 | `object/6`                           | `Jason.Decoder` |
|  3.3% |     838 | `string/7`                           | `Jason.Decoder` |
|  2.8% |     722 | `value/3`                            | `Jason.Encode`  |
|  2.6% |     670 | `list/3`                             | `Jason.Encode`  |
|  2.3% |     602 | `escape_json/4`                      | `Jason.Encode`  |
|  2.1% |     554 | `number/6`                           | `Jason.Decoder` |
|  2.1% |     536 | `call/1`                             | `code_server`   |
|  2.0% |     525 | `escape_json/3`                      | `Jason.Encode`  |
|  1.7% |     438 | `-string_decode_function/1-fun-0-/1` | `Jason.Decoder` |

##### Idle

|    % | Samples | Function | Location    |
| ---: | ------: | -------- | ----------- |
| 2.2% |     570 | `sleep`  | `<unknown>` |

##### Standard library

|     % | Samples | Function              | Location |
| ----: | ------: | --------------------- | -------- |
|  4.5% |   1,163 | `ensure_loaded/1`     | `code`   |
|  1.0% |     247 | `binary_to_integer/1` | `erlang` |
|  0.4% |     105 | `to_list/1`           | `maps`   |
|  0.3% |      65 | `integer_to_binary/1` | `erlang` |
|  0.2% |      50 | `into_map/2`          | `Enum`   |
|  0.2% |      50 | `to_list_internal/1`  | `maps`   |
|  0.2% |      40 | `from_list/1`         | `maps`   |
|  0.1% |      18 | `iolist_to_binary/1`  | `erlang` |
| <0.1% |      11 | `reverse/2`           | `lists`  |
| <0.1% |      10 | `into/2`              | `Enum`   |
| <0.1% |       3 | `demonitor/2`         | `erlang` |
| <0.1% |       2 | `call/1`              | `code`   |
| <0.1% |       2 | `monitor/2`           | `erlang` |
| <0.1% |       2 | `function_exported/3` | `erlang` |
| <0.1% |       1 | `whereis/1`           | `erlang` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `-run/1-fun-0-/2` (`Profile`)

|     % | Samples | Callee      | Location |
| ----: | ------: | ----------- | -------- |
| 99.9% |  14,530 | `encode!/2` | `Jason`  |
| <0.1% |       5 | `encode!/1` | `Jason`  |

##### `encode!/2` (`Jason`)

|     % | Samples | Callee                 | Location        |
| ----: | ------: | ---------------------- | --------------- |
| 88.2% |  12,820 | `encode/2`             | `Jason.Encode`  |
| 11.3% |   1,645 | `undefined_function/3` | `error_handler` |
|  0.2% |      25 | `into_map/2`           | `Enum`          |
| <0.1% |       5 | `format_encode_opts/1` | `Jason`         |
| <0.1% |       5 | `into/2`               | `Enum`          |

##### `encode/2` (`Jason.Encode`)

|     % | Samples | Callee                  | Location       |
| ----: | ------: | ----------------------- | -------------- |
| 99.5% |  12,760 | `map_naive/3`           | `Jason.Encode` |
|  0.2% |      30 | `value/3`               | `Jason.Encode` |
| <0.1% |       5 | `escape_function/1`     | `Jason.Encode` |
| <0.1% |       5 | `encode_map_function/1` | `Jason.Encode` |

##### `map_naive/3` (`Jason.Encode`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 98.3% |  12,545 | `map_naive_loop/3`    | `Jason.Encode` |
|  2.9% |     365 | `escape_json_chunk/5` | `Jason.Encode` |
|  0.5% |      70 | `value/3`             | `Jason.Encode` |
|  0.3% |      35 | `key/2`               | `Jason.Encode` |
|  0.3% |      35 | `escape_json/3`       | `Jason.Encode` |

##### `map_naive_loop/3` (`Jason.Encode`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 69.4% |   8,703 | `map_naive/3`         | `Jason.Encode` |
| 35.1% |   4,407 | `escape_json_chunk/5` | `Jason.Encode` |
| 34.8% |   4,367 | `encode_string/2`     | `Jason.Encode` |
|  5.3% |     660 | `list/3`              | `Jason.Encode` |
|  4.5% |     562 | `value/3`             | `Jason.Encode` |

##### `decode!/2` (`Jason`)

|     % | Samples | Callee     | Location        |
| ----: | ------: | ---------- | --------------- |
| 99.4% |  11,144 | `parse/2`  | `Jason.Decoder` |
|  0.5% |      55 | `decode/2` | `Jason`         |

##### `parse/2` (`Jason.Decoder`)

|     % | Samples | Callee     | Location        |
| ----: | ------: | ---------- | --------------- |
| 67.6% |   7,533 | `string/6` | `Jason.Decoder` |
|  9.3% |   1,031 | `object/6` | `Jason.Decoder` |
|  7.5% |     838 | `string/7` | `Jason.Decoder` |
|  5.0% |     554 | `number/6` | `Jason.Decoder` |
|  3.3% |     363 | `value/5`  | `Jason.Decoder` |

##### `escape_json_chunk/5` (`Jason.Encode`)

|     % | Samples | Callee     | Location       |
| ----: | ------: | ---------- | -------------- |
|  0.7% |      60 | `escape/1` | `Jason.Encode` |
| <0.1% |       4 | `sleep`    | `<unknown>`    |

##### `string/6` (`Jason.Decoder`)

|    % | Samples | Callee                               | Location        |
| ---: | ------: | ------------------------------------ | --------------- |
| 5.8% |     438 | `-string_decode_function/1-fun-0-/1` | `Jason.Decoder` |
| 0.1% |       4 | `sleep`                              | `<unknown>`     |

##### `encode_string/2` (`Jason.Encode`)

|     % | Samples | Callee                | Location       |
| ----: | ------: | --------------------- | -------------- |
| 85.1% |   3,742 | `escape_json_chunk/5` | `Jason.Encode` |
|  5.0% |     220 | `escape_json/4`       | `Jason.Encode` |
|  3.3% |     145 | `escape_json/3`       | `Jason.Encode` |

##### `undefined_function/3` (`error_handler`)

|     % | Samples | Callee                | Location        |
| ----: | ------: | --------------------- | --------------- |
| 70.7% |   1,163 | `ensure_loaded/1`     | `code`          |
| 28.8% |     473 | `call/1`              | `code_server`   |
|  0.2% |       3 | `ensure_loaded/1`     | `error_handler` |
|  0.1% |       2 | `function_exported/3` | `erlang`        |
|  0.1% |       1 | `call/1`              | `code`          |

##### `ensure_loaded/1` (`code`)

|    % | Samples | Callee       | Location      |
| ---: | ------: | ------------ | ------------- |
| 5.4% |      63 | `call/1`     | `code_server` |
| 0.3% |       3 | `get_mode/0` | `code_server` |
| 0.1% |       1 | `call/1`     | `code`        |

##### `object/6` (`Jason.Decoder`)

|     % | Samples | Callee                            | Location        |
| ----: | ------: | --------------------------------- | --------------- |
| 31.4% |     324 | `-key_decode_function/1-fun-0-/1` | `Jason.Decoder` |
|  2.9% |      30 | `from_list/1`                     | `maps`          |

##### `string/7` (`Jason.Decoder`)

|    % | Samples | Callee               | Location    |
| ---: | ------: | -------------------- | ----------- |
| 1.0% |       8 | `iolist_to_binary/1` | `erlang`    |
| 0.7% |       6 | `sleep`              | `<unknown>` |

##### `value/3` (`Jason.Encode`)

|     % | Samples | Callee                | Location    |
| ----: | ------: | --------------------- | ----------- |
| 14.5% |     105 | `to_list/1`           | `maps`      |
|  9.0% |      65 | `integer_to_binary/1` | `erlang`    |
|  6.9% |      50 | `to_list_internal/1`  | `maps`      |
|  0.3% |       2 | `sleep`               | `<unknown>` |

##### `list/3` (`Jason.Encode`)

|     % | Samples | Callee        | Location       |
| ----: | ------: | ------------- | -------------- |
| 89.6% |     600 | `map_naive/3` | `Jason.Encode` |
|  6.7% |      45 | `value/3`     | `Jason.Encode` |
|  5.2% |      35 | `list_loop/3` | `Jason.Encode` |

##### `escape_json/4` (`Jason.Encode`)

|    % | Samples | Callee     | Location       |
| ---: | ------: | ---------- | -------------- |
| 0.8% |       5 | `escape/1` | `Jason.Encode` |
| 0.3% |       2 | `sleep`    | `<unknown>`    |

##### `sleep` (`<unknown>`)

|    % | Samples | Callee  | Location    |
| ---: | ------: | ------- | ----------- |
| 1.6% |       9 | `sleep` | `<unknown>` |

##### `number/6` (`Jason.Decoder`)

|     % | Samples | Callee                | Location |
| ----: | ------: | --------------------- | -------- |
| 44.6% |     247 | `binary_to_integer/1` | `erlang` |

##### `call/1` (`code_server`)

|     % | Samples | Callee        | Location    |
| ----: | ------: | ------------- | ----------- |
| 97.9% |     525 | `sleep`       | `<unknown>` |
|  0.6% |       3 | `demonitor/2` | `erlang`    |
|  0.4% |       2 | `monitor/2`   | `erlang`    |

##### `into_map/2` (`Enum`)

|     % | Samples | Callee        | Location |
| ----: | ------: | ------------- | -------- |
| 20.0% |      10 | `from_list/1` | `maps`   |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

|     % | Samples | Call stack                                                                                                                                                                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27.5% |   7,091 | `string/6` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                                                          |
| 12.0% |   3,085 | `escape_json_chunk/5` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                     |
|  8.2% |   2,120 | `escape_json_chunk/5` (`Jason.Encode`) ← `encode_string/2` ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) |
|  5.6% |   1,440 | `escape_json_chunk/5` (`Jason.Encode`) ← `encode_string/2` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                      |
|  4.6% |   1,180 | `escape_json_chunk/5` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                                          |
|  3.6% |     916 | `ensure_loaded/1` (`code`) ← `undefined_function/3` (`error_handler`) ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                                                             |
|  3.2% |     824 | `string/7` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                                                          |
|  2.6% |     677 | `object/6` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                                                          |
|  2.6% |     661 | `map_naive_loop/3` (`Jason.Encode`) ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                             |
|  1.8% |     468 | `sleep` ← `call/1` (`code_server`) ← `undefined_function/3` (`error_handler`) ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                                                     |
|  1.7% |     438 | `-string_decode_function/1-fun-0-/1` (`Jason.Decoder`) ← `string/6` ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                   |
|  1.4% |     363 | `value/5` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                                                           |
|  1.3% |     335 | `map_naive_loop/3` (`Jason.Encode`) ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                                                                  |
|  1.3% |     324 | `key/5` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                                                             |
|  1.3% |     324 | `key/6` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                                                             |
|  1.3% |     324 | `-key_decode_function/1-fun-0-/1` (`Jason.Decoder`) ← `object/6` ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                      |
|  1.2% |     307 | `number/6` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                                                          |
|  1.0% |     256 | `map_naive/3` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                                                  |
|  1.0% |     250 | `value/3` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`)                                 |
|  1.0% |     247 | `binary_to_integer/1` (`erlang`) ← `number/6` (`Jason.Decoder`) ← `parse/2` ← `decode!/2` (`Jason`)                                                                                                       |

# Sampling profile diff

25,768 samples → 27,936 samples (+2,168 samples, +8.4%).

| Category | Change |  Delta |             % |         Samples |
| -------- | -----: | -----: | ------------: | --------------: |
| ours     |  +8.9% | +2,117 | 91.9% → 92.3% | 23,677 → 25,794 |
| stdlib   |  +2.4% |    +51 |   8.1% → 7.7% |   2,091 → 2,142 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change |  Delta |             % |       Samples | Function                             | Location             |
| ------: | -----: | ------------: | ------------: | ------------------------------------ | -------------------- |
|  +19.5% | +1,384 | 27.5% → 30.3% | 7,091 → 8,475 | `string/6`                           | Elixir.Jason.Decoder |
|  +24.9% |   +205 |   3.2% → 3.7% |   824 → 1,029 | `string/7`                           | Elixir.Jason.Decoder |
|  +18.8% |   +127 |   2.6% → 2.9% |     677 → 804 | `object/6`                           | Elixir.Jason.Decoder |
|  +17.6% |    +77 |   1.7% → 1.8% |     438 → 515 | `-string_decode_function/1-fun-0-/1` | Elixir.Jason.Decoder |
|  +17.9% |    +58 |   1.3% → 1.4% |     324 → 382 | `-key_decode_function/1-fun-0-/1`    | Elixir.Jason.Decoder |
|  +15.7% |    +57 |   1.4% → 1.5% |     363 → 420 | `value/5`                            | Elixir.Jason.Decoder |
|  +17.3% |    +56 |   1.3% → 1.4% |     324 → 380 | `key/5`                              | Elixir.Jason.Decoder |
|  +17.3% |    +56 |   1.3% → 1.4% |     324 → 380 | `key/6`                              | Elixir.Jason.Decoder |
|  +12.4% |    +38 |          1.2% |     307 → 345 | `number/6`                           | Elixir.Jason.Decoder |
|   +4.1% |    +19 |   1.8% → 1.7% |     461 → 480 | `map_naive/3`                        | Elixir.Jason.Encode  |
| +340.0% |    +17 |  <0.1% → 0.1% |        5 → 22 | `encode!/1`                          | Elixir.Jason         |
|  +25.0% |    +13 |          0.2% |       52 → 65 | `escape/6`                           | Elixir.Jason.Decoder |
|  +14.5% |    +12 |          0.3% |       83 → 95 | `binary_to_integer/1`                | erlang               |
|  +12.5% |     +5 |          0.2% |       40 → 45 | `from_list/1`                        | maps                 |
|   +0.9% |     +5 |   2.2% → 2.1% |     570 → 575 | `sleep`                              | `<unknown>`          |
|  +13.3% |     +4 |          0.1% |       30 → 34 | `into_map/2`                         | Elixir.Enum          |
|  +15.0% |     +3 |          0.1% |       20 → 23 | `encode!/2`                          | Elixir.Jason         |
|  +11.1% |     +2 |          0.1% |       18 → 20 | `iolist_to_binary/1`                 | erlang               |
|  +11.1% |     +2 |          0.1% |       18 → 20 | `number_zero/6`                      | Elixir.Jason.Decoder |
|   +9.1% |     +1 |         <0.1% |       11 → 12 | `-run/1-fun-0-/2`                    | Elixir.Profile       |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

| Change | Delta |           % |       Samples | Function              | Location            |
| -----: | ----: | ----------: | ------------: | --------------------- | ------------------- |
| -33.3% |    -1 |       <0.1% |         3 → 2 | `demonitor/2`         | erlang              |
| -50.0% |    -1 |       <0.1% |         2 → 1 | `function_exported/3` | erlang              |
|  -0.1% |    -1 | 4.2% → 3.8% | 1,076 → 1,075 | `map_naive_loop/3`    | Elixir.Jason.Encode |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change |  Delta |             % |         Samples | Function                             | Location             |
| ------: | -----: | ------------: | --------------: | ------------------------------------ | -------------------- |
|  +18.8% | +2,106 | 43.5% → 47.7% | 11,208 → 13,314 | `decode!/2`                          | Elixir.Jason         |
|  +18.9% | +2,105 | 43.2% → 47.4% | 11,144 → 13,249 | `parse/2`                            | Elixir.Jason.Decoder |
|  +19.4% | +1,461 | 29.2% → 32.2% |   7,533 → 8,994 | `string/6`                           | Elixir.Jason.Decoder |
|  +24.9% |   +209 |   3.3% → 3.7% |     838 → 1,047 | `string/7`                           | Elixir.Jason.Decoder |
|  +18.6% |   +192 |   4.0% → 4.4% |   1,031 → 1,223 | `object/6`                           | Elixir.Jason.Decoder |
|  +17.6% |    +77 |   1.7% → 1.8% |       438 → 515 | `-string_decode_function/1-fun-0-/1` | Elixir.Jason.Decoder |
|  +17.9% |    +58 |   1.3% → 1.4% |       324 → 382 | `-key_decode_function/1-fun-0-/1`    | Elixir.Jason.Decoder |
|  +15.7% |    +57 |   1.4% → 1.5% |       363 → 420 | `value/5`                            | Elixir.Jason.Decoder |
|  +17.3% |    +56 |   1.3% → 1.4% |       324 → 380 | `key/5`                              | Elixir.Jason.Decoder |
|  +17.3% |    +56 |   1.3% → 1.4% |       324 → 380 | `key/6`                              | Elixir.Jason.Decoder |
|  +10.1% |    +56 |   2.1% → 2.2% |       554 → 610 | `number/6`                           | Elixir.Jason.Decoder |
|   +0.3% |    +45 | 56.4% → 52.2% | 14,546 → 14,591 | `-run/1-fun-0-/2`                    | Elixir.Profile       |
|   +0.2% |    +27 | 56.4% → 52.1% | 14,530 → 14,557 | `encode!/2`                          | Elixir.Jason         |
|   +1.3% |    +22 |   6.4% → 6.0% |   1,645 → 1,667 | `undefined_function/3`               | error_handler        |
|   +1.5% |    +18 |   4.5% → 4.2% |   1,163 → 1,181 | `ensure_loaded/1`                    | code                 |
|   +7.3% |    +18 |   1.0% → 0.9% |       247 → 265 | `binary_to_integer/1`                | erlang               |
| +340.0% |    +17 |  <0.1% → 0.1% |          5 → 22 | `encode!/1`                          | Elixir.Jason         |
|  +25.0% |    +13 |          0.2% |         52 → 65 | `escape/6`                           | Elixir.Jason.Decoder |
|   +2.2% |    +12 |   2.1% → 2.0% |       536 → 548 | `call/1`                             | code_server          |
|   +4.5% |     +8 |          0.7% |       177 → 185 | `read_file/1`                        | erl_prim_loader      |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |         Samples | Function              | Location            |
| -----: | ----: | ------------: | --------------: | --------------------- | ------------------- |
|    ~0% |    -4 | 49.8% → 45.9% | 12,820 → 12,816 | `encode/2`            | Elixir.Jason.Encode |
|    ~0% |    -4 | 49.5% → 45.7% | 12,760 → 12,756 | `map_naive/3`         | Elixir.Jason.Encode |
|    ~0% |    -4 | 48.7% → 44.9% | 12,545 → 12,541 | `map_naive_loop/3`    | Elixir.Jason.Encode |
|  -0.3% |    -2 |   2.8% → 2.6% |       722 → 720 | `value/3`             | Elixir.Jason.Encode |
|  -0.3% |    -2 |   2.3% → 2.1% |       602 → 600 | `escape_json/4`       | Elixir.Jason.Encode |
| -33.3% |    -1 |         <0.1% |           3 → 2 | `demonitor/2`         | erlang              |
| -50.0% |    -1 |         <0.1% |           2 → 1 | `function_exported/3` | erlang              |

# Wall time profile diff

Took 28.0ms → 27.9ms (-0.06ms, -0.2%).

| Category         | Change |   Delta |             % |            Time |
| ---------------- | -----: | ------: | ------------: | --------------: |
| Ours             |  +0.1% | +0.03ms | 92.1% → 92.4% | 25.7ms → 25.8ms |
| Standard library |  -2.2% | -0.04ms |   5.6% → 5.5% |   1.6ms → 1.5ms |
| Idle             |  -8.9% | -0.06ms |   2.3% → 2.1% |   0.7ms → 0.6ms |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
└── 28.0ms → 27.9ms (100.0%) <0.94.0>
    └── 28.0ms → 27.9ms (100.0%) apply/2 at eflambe
        ├── 21.0ms (75.1% → 75.2%) reduce_range/5 at Enum
        │   ├── 10.7ms (38.1% → 38.2%) decode!/2 at Jason
        │   │   └── 10.6ms (37.9% → 38.0%) parse/2 at Jason.Decoder
        │   │       ├── 7.2ms (25.7% → 25.8%, self 24.3%, self 30.3% → 30.4% globally) string/6
        │   │       │   └── 0.4ms (1.5%, self 1.5%) -string_decode_function/1-fun-0-/1
        │   │       ├── 1.0ms (3.5%, self 2.3%, self 2.8% → 2.9% globally) object/6
        │   │       │   └── 0.3ms (1.1%) -key_decode_function/1-fun-0-/1
        │   │       ├── 0.3ms (1.1%) key/6
        │   │       └── 2.1ms (7.5% → 7.6%) 13 more callees, led by (3.0%) string/7
        │   └── … 10.2ms (36.5% → 36.6%, self 1.3% → 1.4%) map_naive/3 at Jason.Encode
        │       ├── … 9.4ms (33.6% → 33.5%, self 3.1%, self 3.8% → 3.9% globally) map_naive_loop/3 at Jason.Encode
        │       │   ├── 3.5ms (12.6%, self 12.6%, self 30.2% → 30.3% globally) escape_json_chunk/5
        │       │   ├── 3.5ms (12.5%, self 0.8%) encode_string/2
        │       │   │   ├── 3.0ms (10.7%, self 10.5%) escape_json_chunk/5
        │       │   │   └── 0.2ms (0.6%, self 0.6%, self 2.1% globally) escape_json/4
        │       │   ├── 0ms → 0.3ms (0.0% → 1.0%, self 0.0% → 1.9% globally) escape_json/1
        │       │   ├── 0.3ms → 0ms (1.0% → 0.0%, self 1.9% → 0.0% globally) escape_json/3
        │       │   └── 1.2ms (4.4% → 4.3%) 6 more callees, led by (1.6%) value/3
        │       └── 0.5ms (1.7%) 9 more callees, led by (1.0%) escape_json_chunk/5 at Jason.Encode
        └── 7.0ms → 6.9ms (24.9% → 24.7%) reduce/3 at Enum
            ├── 4.3ms → 4.2ms (15.4% → 15.2%) -run/1-fun-0-/2 at Profile
            │   └── 4.3ms → 4.2ms (15.4% → 15.2%) encode!/2 at Jason
            │       ├── 2.6ms (9.2%) encode/2 at Jason.Encode
            │       │   └── 2.5ms (9.1%) map_naive/3
            │       │       └── … 2.3ms (8.4%, self 0.8%) map_naive_loop/3 at Jason.Encode
            │       │           └── 2.1ms (7.6%) 9 more callees, led by (3.2%) escape_json_chunk/5
            │       └── 1.7ms (6.1% → 5.9%) undefined_function/3 at error_handler
            │           ├── 1.2ms (4.4% → 4.2%) ensure_loaded/1 at code
            │           │   ├── 0.9ms (3.2% → 3.1%, self 3.2% → 3.1%) prepare_loading_1/2 at erlang
            │           │   └── 0.2ms (0.8% → 0.7%) ensure_prepare_loading/3
            │           │       └── 0.2ms (0.8% → 0.7%) read_file/1 at erl_prim_loader
            │           │           ├── 0.2ms (0.6%) client_or_request/2 …
            │           │           └── … 39.0µs → 4.0µs (0.1% → <0.1%, self 2.3% → 2.1% globally) sleep
            │           └── 0.5ms (1.7% → 1.8%) 4 more callees, led by (1.7%) call/1 at code_server
            └── 2.7ms (9.5%) decode!/2 at Jason
                └── 2.6ms (9.5%) parse/2 at Jason.Decoder
                    ├── 1.8ms (6.4% → 6.5%, self 6.1%) string/6
                    └── 0.8ms (3.0%) 15 more callees, led by (0.9%) object/6
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in wall time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

| Change |   Delta |           % |        Time | Function        | Location        |
| -----: | ------: | ----------: | ----------: | --------------- | --------------- |
|    new | +0.53ms | 0.0% → 1.9% | 0ms → 0.5ms | `escape_json/1` | `Jason.Encode`  |
|  +6.7% | +0.03ms | 1.6% → 1.7% |       0.5ms | `map_naive/3`   | `Jason.Encode`  |
|  +0.3% | +1.00µs |        1.4% |       0.4ms | `key/6`         | `Jason.Decoder` |

#### Improvements

Functions with the largest decrease in wall time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |             % |          Time | Function              | Location        |
| ------: | ------: | ------------: | ------------: | --------------------- | --------------- |
| removed | -0.53ms |   1.9% → 0.0% |   0.5ms → 0ms | `escape_json/3`       | `Jason.Encode`  |
|   -8.9% | -0.06ms |   2.3% → 2.1% | 0.7ms → 0.6ms | `sleep`               | `<unknown>`     |
|   -3.7% | -0.03ms |   3.2% → 3.1% |         0.9ms | `prepare_loading_1/2` | `erlang`        |
|  -40.0% | -2.00µs |         <0.1% | 5.0µs → 3.0µs | `demonitor/2`         | `erlang`        |
|   -0.1% | -1.00µs |   3.8% → 3.9% |         1.1ms | `map_naive_loop/3`    | `Jason.Encode`  |
|     ~0% | -1.00µs | 30.3% → 30.4% |         8.5ms | `string/6`            | `Jason.Decoder` |

##### Ours

|  Change |   Delta |             % |        Time | Function           | Location        |
| ------: | ------: | ------------: | ----------: | ------------------ | --------------- |
| removed | -0.53ms |   1.9% → 0.0% | 0.5ms → 0ms | `escape_json/3`    | `Jason.Encode`  |
|   -0.1% | -1.00µs |   3.8% → 3.9% |       1.1ms | `map_naive_loop/3` | `Jason.Encode`  |
|     ~0% | -1.00µs | 30.3% → 30.4% |       8.5ms | `string/6`         | `Jason.Decoder` |

##### Standard library

| Change |   Delta |           % |          Time | Function              | Location |
| -----: | ------: | ----------: | ------------: | --------------------- | -------- |
|  -3.7% | -0.03ms | 3.2% → 3.1% |         0.9ms | `prepare_loading_1/2` | `erlang` |
| -40.0% | -2.00µs |       <0.1% | 5.0µs → 3.0µs | `demonitor/2`         | `erlang` |

##### Idle

| Change |   Delta |           % |          Time | Function | Location    |
| -----: | ------: | ----------: | ------------: | -------- | ----------- |
|  -8.9% | -0.06ms | 2.3% → 2.1% | 0.7ms → 0.6ms | `sleep`  | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `escape_json/1` (`Jason.Encode`)

| Change |   Delta |            % |         Time | Caller             | Location       |
| -----: | ------: | -----------: | -----------: | ------------------ | -------------- |
|    new | +0.34ms | 0.0% → 65.7% |  0ms → 0.3ms | `map_naive_loop/3` | `Jason.Encode` |
|    new | +0.14ms | 0.0% → 27.6% |  0ms → 0.1ms | `encode_string/2`  | `Jason.Encode` |
|    new | +0.04ms |  0.0% → 6.7% | 0ms → 35.0µs | `map_naive/3`      | `Jason.Encode` |

##### `map_naive/3` (`Jason.Encode`)

| Change |   Delta |             % |  Time | Caller             | Location       |
| -----: | ------: | ------------: | ----: | ------------------ | -------------- |
| +10.7% | +0.03ms | 62.2% → 64.6% | 0.3ms | `map_naive_loop/3` | `Jason.Encode` |

##### `key/6` (`Jason.Decoder`)

| Change |   Delta |      % |  Time | Caller    | Location        |
| -----: | ------: | -----: | ----: | --------- | --------------- |
|  +0.3% | +1.00µs | 100.0% | 0.4ms | `parse/2` | `Jason.Decoder` |

##### `escape_json/3` (`Jason.Encode`)

|  Change |   Delta |            % |         Time | Caller             | Location       |
| ------: | ------: | -----------: | -----------: | ------------------ | -------------- |
| removed | -0.34ms | 65.7% → 0.0% |  0.3ms → 0ms | `map_naive_loop/3` | `Jason.Encode` |
| removed | -0.14ms | 27.6% → 0.0% |  0.1ms → 0ms | `encode_string/2`  | `Jason.Encode` |
| removed | -0.04ms |  6.7% → 0.0% | 35.0µs → 0ms | `map_naive/3`      | `Jason.Encode` |

##### `sleep` (`<unknown>`)

|  Change |   Delta |             % |           Time | Caller                | Location        |
| ------: | ------: | ------------: | -------------: | --------------------- | --------------- |
|  -85.4% | -0.04ms |   6.3% → 1.0% | 41.0µs → 6.0µs | `sleep`               | `<unknown>`     |
| removed | -0.03ms |   4.7% → 0.0% |   31.0µs → 0ms | `map_naive_loop/3`    | `Jason.Encode`  |
|   +1.1% | +0.01ms | 86.2% → 95.6% |          0.6ms | `call/1`              | `code_server`   |
|  +50.0% | +2.00µs |   0.6% → 1.0% |  4.0µs → 6.0µs | `escape_json_chunk/5` | `Jason.Encode`  |
| removed | -2.00µs |   0.3% → 0.0% |    2.0µs → 0ms | `value/5`             | `Jason.Decoder` |

##### `prepare_loading_1/2` (`erlang`)

| Change |   Delta |      % |  Time | Caller            | Location |
| -----: | ------: | -----: | ----: | ----------------- | -------- |
|  -3.7% | -0.03ms | 100.0% | 0.9ms | `ensure_loaded/1` | `code`   |

##### `demonitor/2` (`erlang`)

| Change |   Delta |      % |          Time | Caller   | Location      |
| -----: | ------: | -----: | ------------: | -------- | ------------- |
| -40.0% | -2.00µs | 100.0% | 5.0µs → 3.0µs | `call/1` | `code_server` |

##### `map_naive_loop/3` (`Jason.Encode`)

| Change |   Delta |      % |  Time | Caller        | Location       |
| -----: | ------: | -----: | ----: | ------------- | -------------- |
|  -0.1% | -1.00µs | 100.0% | 1.1ms | `map_naive/3` | `Jason.Encode` |

##### `string/6` (`Jason.Decoder`)

| Change |   Delta |      % |  Time | Caller    | Location        |
| -----: | ------: | -----: | ----: | --------- | --------------- |
|    ~0% | -1.00µs | 100.0% | 8.5ms | `parse/2` | `Jason.Decoder` |

### Total time

#### Regressions

Functions with the largest increase in wall time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

| Change |   Delta |             % |        Time | Function                             | Location        |
| -----: | ------: | ------------: | ----------: | ------------------------------------ | --------------- |
|    new | +0.53ms |   0.0% → 1.9% | 0ms → 0.5ms | `escape_json/1`                      | `Jason.Encode`  |
|  +0.7% | +4.00µs |          2.1% |       0.6ms | `call/1`                             | `code_server`   |
|    ~0% | +2.00µs | 45.9% → 46.0% |      12.8ms | `encode/2`                           | `Jason.Encode`  |
|  +0.3% | +2.00µs |          2.6% |       0.7ms | `value/3`                            | `Jason.Encode`  |
|    ~0% | +2.00µs | 45.6% → 45.8% |      12.8ms | `map_naive/3`                        | `Jason.Encode`  |
|    ~0% | +2.00µs |         30.5% |       8.5ms | `escape_json_chunk/5`                | `Jason.Encode`  |
|    ~0% | +2.00µs | 44.9% → 45.0% |      12.5ms | `map_naive_loop/3`                   | `Jason.Encode`  |
|  +0.4% | +2.00µs |   1.8% → 1.9% |       0.5ms | `-string_decode_function/1-fun-0-/1` | `Jason.Decoder` |
|    ~0% | +1.00µs | 32.2% → 32.3% |       9.0ms | `string/6`                           | `Jason.Decoder` |
|  +0.3% | +1.00µs |          1.4% |       0.4ms | `key/6`                              | `Jason.Decoder` |

#### Improvements

Functions with the largest decrease in wall time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |             % |            Time | Function                   | Location          |
| ------: | ------: | ------------: | --------------: | -------------------------- | ----------------- |
| removed | -0.53ms |   1.9% → 0.0% |     0.5ms → 0ms | `escape_json/3`            | `Jason.Encode`    |
|   -6.1% | -0.07ms |   4.4% → 4.2% |           1.2ms | `ensure_loaded/1`          | `code`            |
|   -0.9% | -0.06ms | 24.9% → 24.7% |   7.0ms → 6.9ms | `reduce/3`                 | `Enum`            |
|   -0.2% | -0.06ms |        100.0% | 28.0ms → 27.9ms | `apply/2`                  | `eflambe`         |
|   -0.2% | -0.06ms |        100.0% | 28.0ms → 27.9ms | `<0.94.0>`                 | `<unknown>`       |
|   -3.7% | -0.06ms |   6.1% → 5.9% |           1.7ms | `undefined_function/3`     | `error_handler`   |
|   -0.4% | -0.06ms | 52.3% → 52.2% |          14.6ms | `-run/1-fun-0-/2`          | `Profile`         |
|   -0.4% | -0.06ms | 52.2% → 52.1% | 14.6ms → 14.5ms | `encode!/2`                | `Jason`           |
|   -8.9% | -0.06ms |   2.3% → 2.1% |   0.7ms → 0.6ms | `sleep`                    | `<unknown>`       |
|  -15.8% | -0.04ms |   0.8% → 0.7% |           0.2ms | `ensure_prepare_loading/3` | `code`            |
|  -16.1% | -0.04ms |   0.8% → 0.7% |           0.2ms | `read_file/1`              | `erl_prim_loader` |
|  -77.8% | -0.04ms |  0.2% → <0.1% | 45.0µs → 10.0µs | `read_file/1`              | `prim_file`       |
|  -87.5% | -0.04ms |  0.1% → <0.1% |  40.0µs → 5.0µs | `read_file_nif/1`          | `prim_file`       |
|   -3.7% | -0.03ms |   3.2% → 3.1% |           0.9ms | `prepare_loading_1/2`      | `erlang`          |
|  -40.0% | -2.00µs |         <0.1% |   5.0µs → 3.0µs | `demonitor/2`              | `erlang`          |
|     ~0% | -2.00µs | 47.6% → 47.7% |          13.3ms | `decode!/2`                | `Jason`           |
|     ~0% | -2.00µs | 47.4% → 47.5% |          13.2ms | `parse/2`                  | `Jason.Decoder`   |
|   -0.5% | -2.00µs |          1.5% |           0.4ms | `value/5`                  | `Jason.Decoder`   |
|   -0.2% | -2.00µs |          4.3% |           1.2ms | `object/6`                 | `Jason.Decoder`   |

##### Ours

|  Change |   Delta |             % |            Time | Function               | Location          |
| ------: | ------: | ------------: | --------------: | ---------------------- | ----------------- |
| removed | -0.53ms |   1.9% → 0.0% |     0.5ms → 0ms | `escape_json/3`        | `Jason.Encode`    |
|   -3.7% | -0.06ms |   6.1% → 5.9% |           1.7ms | `undefined_function/3` | `error_handler`   |
|   -0.4% | -0.06ms | 52.3% → 52.2% |          14.6ms | `-run/1-fun-0-/2`      | `Profile`         |
|   -0.4% | -0.06ms | 52.2% → 52.1% | 14.6ms → 14.5ms | `encode!/2`            | `Jason`           |
|  -16.1% | -0.04ms |   0.8% → 0.7% |           0.2ms | `read_file/1`          | `erl_prim_loader` |
|  -77.8% | -0.04ms |  0.2% → <0.1% | 45.0µs → 10.0µs | `read_file/1`          | `prim_file`       |
|  -87.5% | -0.04ms |  0.1% → <0.1% |  40.0µs → 5.0µs | `read_file_nif/1`      | `prim_file`       |
|     ~0% | -2.00µs | 47.6% → 47.7% |          13.3ms | `decode!/2`            | `Jason`           |
|     ~0% | -2.00µs | 47.4% → 47.5% |          13.2ms | `parse/2`              | `Jason.Decoder`   |
|   -0.5% | -2.00µs |          1.5% |           0.4ms | `value/5`              | `Jason.Decoder`   |
|   -0.2% | -2.00µs |          4.3% |           1.2ms | `object/6`             | `Jason.Decoder`   |

##### Standard library

| Change |   Delta |             % |            Time | Function                   | Location  |
| -----: | ------: | ------------: | --------------: | -------------------------- | --------- |
|  -6.1% | -0.07ms |   4.4% → 4.2% |           1.2ms | `ensure_loaded/1`          | `code`    |
|  -0.9% | -0.06ms | 24.9% → 24.7% |   7.0ms → 6.9ms | `reduce/3`                 | `Enum`    |
|  -0.2% | -0.06ms |        100.0% | 28.0ms → 27.9ms | `apply/2`                  | `eflambe` |
| -15.8% | -0.04ms |   0.8% → 0.7% |           0.2ms | `ensure_prepare_loading/3` | `code`    |
|  -3.7% | -0.03ms |   3.2% → 3.1% |           0.9ms | `prepare_loading_1/2`      | `erlang`  |
| -40.0% | -2.00µs |         <0.1% |   5.0µs → 3.0µs | `demonitor/2`              | `erlang`  |

##### Idle

| Change |   Delta |           % |          Time | Function | Location    |
| -----: | ------: | ----------: | ------------: | -------- | ----------- |
|  -8.9% | -0.06ms | 2.3% → 2.1% | 0.7ms → 0.6ms | `sleep`  | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `escape_json/1` (`Jason.Encode`)

| Change |   Delta |            % |         Time | Caller             | Location       |
| -----: | ------: | -----------: | -----------: | ------------------ | -------------- |
|    new | +0.34ms | 0.0% → 65.7% |  0ms → 0.3ms | `map_naive_loop/3` | `Jason.Encode` |
|    new | +0.14ms | 0.0% → 27.6% |  0ms → 0.1ms | `encode_string/2`  | `Jason.Encode` |
|    new | +0.04ms |  0.0% → 6.7% | 0ms → 35.0µs | `map_naive/3`      | `Jason.Encode` |

##### `call/1` (`code_server`)

| Change |   Delta |             % |  Time | Caller                 | Location        |
| -----: | ------: | ------------: | ----: | ---------------------- | --------------- |
|  +2.3% | +0.01ms | 82.1% → 83.4% | 0.5ms | `undefined_function/3` | `error_handler` |
|  -6.8% | -0.01ms | 17.9% → 16.6% | 0.1ms | `ensure_loaded/1`      | `code`          |

##### `encode/2` (`Jason.Encode`)

| Change |   Delta |      % |   Time | Caller      | Location |
| -----: | ------: | -----: | -----: | ----------- | -------- |
|    ~0% | +2.00µs | 100.0% | 12.8ms | `encode!/2` | `Jason`  |

##### `value/3` (`Jason.Encode`)

| Change |   Delta |     % |  Time | Caller             | Location       |
| -----: | ------: | ----: | ----: | ------------------ | -------------- |
|  +0.4% | +2.00µs | 77.8% | 0.6ms | `map_naive_loop/3` | `Jason.Encode` |

##### `map_naive/3` (`Jason.Encode`)

| Change |   Delta |      % |   Time | Caller     | Location       |
| -----: | ------: | -----: | -----: | ---------- | -------------- |
|    ~0% | +2.00µs | 100.0% | 12.8ms | `encode/2` | `Jason.Encode` |

##### `escape_json_chunk/5` (`Jason.Encode`)

| Change |   Delta |     % |  Time | Caller             | Location       |
| -----: | ------: | ----: | ----: | ------------------ | -------------- |
|    ~0% | +2.00µs | 51.8% | 4.4ms | `map_naive_loop/3` | `Jason.Encode` |

##### `map_naive_loop/3` (`Jason.Encode`)

| Change |   Delta |      % |   Time | Caller        | Location       |
| -----: | ------: | -----: | -----: | ------------- | -------------- |
|    ~0% | +2.00µs | 100.0% | 12.5ms | `map_naive/3` | `Jason.Encode` |

##### `-string_decode_function/1-fun-0-/1` (`Jason.Decoder`)

| Change |   Delta |      % |  Time | Caller     | Location        |
| -----: | ------: | -----: | ----: | ---------- | --------------- |
|  +0.4% | +2.00µs | 100.0% | 0.5ms | `string/6` | `Jason.Decoder` |

##### `string/6` (`Jason.Decoder`)

| Change |   Delta |      % |  Time | Caller    | Location        |
| -----: | ------: | -----: | ----: | --------- | --------------- |
|    ~0% | +1.00µs | 100.0% | 9.0ms | `parse/2` | `Jason.Decoder` |

##### `key/6` (`Jason.Decoder`)

| Change |   Delta |      % |  Time | Caller    | Location        |
| -----: | ------: | -----: | ----: | --------- | --------------- |
|  +0.3% | +1.00µs | 100.0% | 0.4ms | `parse/2` | `Jason.Decoder` |

##### `escape_json/3` (`Jason.Encode`)

|  Change |   Delta |            % |         Time | Caller             | Location       |
| ------: | ------: | -----------: | -----------: | ------------------ | -------------- |
| removed | -0.34ms | 65.7% → 0.0% |  0.3ms → 0ms | `map_naive_loop/3` | `Jason.Encode` |
| removed | -0.14ms | 27.6% → 0.0% |  0.1ms → 0ms | `encode_string/2`  | `Jason.Encode` |
| removed | -0.04ms |  6.7% → 0.0% | 35.0µs → 0ms | `map_naive/3`      | `Jason.Encode` |

##### `ensure_loaded/1` (`code`)

| Change |   Delta |      % |  Time | Caller                 | Location        |
| -----: | ------: | -----: | ----: | ---------------------- | --------------- |
|  -6.1% | -0.07ms | 100.0% | 1.2ms | `undefined_function/3` | `error_handler` |

##### `reduce/3` (`Enum`)

| Change |   Delta |      % |          Time | Caller    | Location  |
| -----: | ------: | -----: | ------------: | --------- | --------- |
|  -0.9% | -0.06ms | 100.0% | 7.0ms → 6.9ms | `apply/2` | `eflambe` |

##### `apply/2` (`eflambe`)

| Change |   Delta |      % |            Time | Caller     | Location    |
| -----: | ------: | -----: | --------------: | ---------- | ----------- |
|  -0.2% | -0.06ms | 100.0% | 28.0ms → 27.9ms | `<0.94.0>` | `<unknown>` |

##### `undefined_function/3` (`error_handler`)

| Change |   Delta |      % |  Time | Caller      | Location |
| -----: | ------: | -----: | ----: | ----------- | -------- |
|  -3.7% | -0.06ms | 100.0% | 1.7ms | `encode!/2` | `Jason`  |

##### `-run/1-fun-0-/2` (`Profile`)

| Change |   Delta |             % |          Time | Caller           | Location |
| -----: | ------: | ------------: | ------------: | ---------------- | -------- |
|  -1.5% | -0.06ms | 29.4% → 29.1% | 4.3ms → 4.2ms | `reduce/3`       | `Enum`   |
|    ~0% | +2.00µs | 70.6% → 70.9% |        10.3ms | `reduce_range/5` | `Enum`   |

##### `encode!/2` (`Jason`)

| Change |   Delta |      % |            Time | Caller            | Location  |
| -----: | ------: | -----: | --------------: | ----------------- | --------- |
|  -0.4% | -0.06ms | 100.0% | 14.6ms → 14.5ms | `-run/1-fun-0-/2` | `Profile` |

##### `sleep` (`<unknown>`)

|  Change |   Delta |             % |           Time | Caller                | Location       |
| ------: | ------: | ------------: | -------------: | --------------------- | -------------- |
|  -89.7% | -0.04ms |   6.0% → 0.7% | 39.0µs → 4.0µs | `read_file_nif/1`     | `prim_file`    |
|  -85.4% | -0.04ms |   6.3% → 1.0% | 41.0µs → 6.0µs | `sleep`               | `<unknown>`    |
| removed | -0.03ms |   4.7% → 0.0% |   31.0µs → 0ms | `map_naive_loop/3`    | `Jason.Encode` |
|   +1.1% | +0.01ms | 86.2% → 95.6% |          0.6ms | `call/1`              | `code_server`  |
|  +50.0% | +2.00µs |   0.6% → 1.0% |  4.0µs → 6.0µs | `escape_json_chunk/5` | `Jason.Encode` |

##### `ensure_prepare_loading/3` (`code`)

| Change |   Delta |      % |  Time | Caller            | Location |
| -----: | ------: | -----: | ----: | ----------------- | -------- |
| -15.8% | -0.04ms | 100.0% | 0.2ms | `ensure_loaded/1` | `code`   |

##### `read_file/1` (`erl_prim_loader`)

| Change |   Delta |      % |  Time | Caller                     | Location |
| -----: | ------: | -----: | ----: | -------------------------- | -------- |
| -16.1% | -0.04ms | 100.0% | 0.2ms | `ensure_prepare_loading/3` | `code`   |

##### `read_file/1` (`prim_file`)

| Change |   Delta |      % |            Time | Caller        | Location          |
| -----: | ------: | -----: | --------------: | ------------- | ----------------- |
| -77.8% | -0.04ms | 100.0% | 45.0µs → 10.0µs | `read_file/1` | `erl_prim_loader` |

##### `read_file_nif/1` (`prim_file`)

| Change |   Delta |      % |           Time | Caller        | Location    |
| -----: | ------: | -----: | -------------: | ------------- | ----------- |
| -87.5% | -0.04ms | 100.0% | 40.0µs → 5.0µs | `read_file/1` | `prim_file` |

##### `prepare_loading_1/2` (`erlang`)

| Change |   Delta |      % |  Time | Caller            | Location |
| -----: | ------: | -----: | ----: | ----------------- | -------- |
|  -3.7% | -0.03ms | 100.0% | 0.9ms | `ensure_loaded/1` | `code`   |

##### `demonitor/2` (`erlang`)

| Change |   Delta |      % |          Time | Caller   | Location      |
| -----: | ------: | -----: | ------------: | -------- | ------------- |
| -40.0% | -2.00µs | 100.0% | 5.0µs → 3.0µs | `call/1` | `code_server` |

##### `decode!/2` (`Jason`)

| Change |   Delta |     % |   Time | Caller           | Location |
| -----: | ------: | ----: | -----: | ---------------- | -------- |
|    ~0% | -2.00µs | 80.0% | 10.7ms | `reduce_range/5` | `Enum`   |

##### `parse/2` (`Jason.Decoder`)

| Change |   Delta |      % |   Time | Caller      | Location |
| -----: | ------: | -----: | -----: | ----------- | -------- |
|    ~0% | -2.00µs | 100.0% | 13.2ms | `decode!/2` | `Jason`  |

##### `value/5` (`Jason.Decoder`)

| Change |   Delta |      % |  Time | Caller    | Location        |
| -----: | ------: | -----: | ----: | --------- | --------------- |
|  -0.5% | -2.00µs | 100.0% | 0.4ms | `parse/2` | `Jason.Decoder` |

##### `object/6` (`Jason.Decoder`)

| Change |   Delta |      % |  Time | Caller    | Location        |
| -----: | ------: | -----: | ----: | --------- | --------------- |
|  -0.2% | -2.00µs | 100.0% | 1.2ms | `parse/2` | `Jason.Decoder` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `call/1` (`code_server`)

| Change |   Delta |             % |          Time | Callee        | Location    |
| -----: | ------: | ------------: | ------------: | ------------- | ----------- |
|  +1.1% | +0.01ms | 97.7% → 98.1% |         0.6ms | `sleep`       | `<unknown>` |
| -40.0% | -2.00µs |   0.9% → 0.5% | 5.0µs → 3.0µs | `demonitor/2` | `erlang`    |

##### `encode/2` (`Jason.Encode`)

| Change |   Delta |     % |   Time | Callee        | Location       |
| -----: | ------: | ----: | -----: | ------------- | -------------- |
|    ~0% | +2.00µs | 99.5% | 12.8ms | `map_naive/3` | `Jason.Encode` |

##### `value/3` (`Jason.Encode`)

| Change |   Delta |           % |        Time | Callee  | Location    |
| -----: | ------: | ----------: | ----------: | ------- | ----------- |
|    new | +2.00µs | 0.0% → 0.3% | 0ms → 2.0µs | `sleep` | `<unknown>` |

##### `map_naive/3` (`Jason.Encode`)

|  Change |   Delta |           % |         Time | Callee             | Location       |
| ------: | ------: | ----------: | -----------: | ------------------ | -------------- |
| removed | -0.04ms | 0.3% → 0.0% | 35.0µs → 0ms | `escape_json/3`    | `Jason.Encode` |
|     new | +0.04ms | 0.0% → 0.3% | 0ms → 35.0µs | `escape_json/1`    | `Jason.Encode` |
|     ~0% | +2.00µs |       98.3% |       12.5ms | `map_naive_loop/3` | `Jason.Encode` |

##### `escape_json_chunk/5` (`Jason.Encode`)

| Change |   Delta |            % |          Time | Callee  | Location    |
| -----: | ------: | -----------: | ------------: | ------- | ----------- |
| +50.0% | +2.00µs | <0.1% → 0.1% | 4.0µs → 6.0µs | `sleep` | `<unknown>` |

##### `map_naive_loop/3` (`Jason.Encode`)

|  Change |   Delta |           % |         Time | Callee                | Location       |
| ------: | ------: | ----------: | -----------: | --------------------- | -------------- |
| removed | -0.34ms | 2.8% → 0.0% |  0.3ms → 0ms | `escape_json/3`       | `Jason.Encode` |
|     new | +0.34ms | 0.0% → 2.8% |  0ms → 0.3ms | `escape_json/1`       | `Jason.Encode` |
| removed | -0.03ms | 0.2% → 0.0% | 31.0µs → 0ms | `sleep`               | `<unknown>`    |
|     ~0% | +2.00µs |       35.1% |        4.4ms | `escape_json_chunk/5` | `Jason.Encode` |
|   +0.4% | +2.00µs |        4.5% |        0.6ms | `value/3`             | `Jason.Encode` |

##### `-string_decode_function/1-fun-0-/1` (`Jason.Decoder`)

| Change |   Delta |           % |        Time | Callee  | Location    |
| -----: | ------: | ----------: | ----------: | ------- | ----------- |
|    new | +2.00µs | 0.0% → 0.4% | 0ms → 2.0µs | `sleep` | `<unknown>` |

##### `string/6` (`Jason.Decoder`)

| Change |   Delta |    % |  Time | Callee                               | Location        |
| -----: | ------: | ---: | ----: | ------------------------------------ | --------------- |
|  +0.4% | +2.00µs | 5.7% | 0.5ms | `-string_decode_function/1-fun-0-/1` | `Jason.Decoder` |

##### `ensure_loaded/1` (`code`)

| Change |   Delta |             % |  Time | Callee                     | Location      |
| -----: | ------: | ------------: | ----: | -------------------------- | ------------- |
| -15.8% | -0.04ms | 18.0% → 16.1% | 0.2ms | `ensure_prepare_loading/3` | `code`        |
|  -3.7% | -0.03ms | 72.7% → 74.6% | 0.9ms | `prepare_loading_1/2`      | `erlang`      |
|  -6.8% | -0.01ms |          8.3% | 0.1ms | `call/1`                   | `code_server` |

##### `reduce/3` (`Enum`)

| Change |   Delta |             % |          Time | Callee            | Location  |
| -----: | ------: | ------------: | ------------: | ----------------- | --------- |
|  -1.5% | -0.06ms | 61.7% → 61.4% | 4.3ms → 4.2ms | `-run/1-fun-0-/2` | `Profile` |

##### `apply/2` (`eflambe`)

| Change |   Delta |             % |          Time | Callee     | Location |
| -----: | ------: | ------------: | ------------: | ---------- | -------- |
|  -0.9% | -0.06ms | 24.9% → 24.7% | 7.0ms → 6.9ms | `reduce/3` | `Enum`   |

##### `<0.94.0>` (`<unknown>`)

| Change |   Delta |      % |            Time | Callee    | Location  |
| -----: | ------: | -----: | --------------: | --------- | --------- |
|  -0.2% | -0.06ms | 100.0% | 28.0ms → 27.9ms | `apply/2` | `eflambe` |

##### `undefined_function/3` (`error_handler`)

| Change |   Delta |             % |  Time | Callee            | Location      |
| -----: | ------: | ------------: | ----: | ----------------- | ------------- |
|  -6.1% | -0.07ms | 72.0% → 70.2% | 1.2ms | `ensure_loaded/1` | `code`        |
|  +2.3% | +0.01ms | 27.6% → 29.3% | 0.5ms | `call/1`          | `code_server` |

##### `-run/1-fun-0-/2` (`Profile`)

| Change |   Delta |     % |            Time | Callee      | Location |
| -----: | ------: | ----: | --------------: | ----------- | -------- |
|  -0.4% | -0.06ms | 99.9% | 14.6ms → 14.5ms | `encode!/2` | `Jason`  |

##### `encode!/2` (`Jason`)

| Change |   Delta |             % |   Time | Callee                 | Location        |
| -----: | ------: | ------------: | -----: | ---------------------- | --------------- |
|  -3.7% | -0.06ms | 11.8% → 11.4% |  1.7ms | `undefined_function/3` | `error_handler` |
|    ~0% | +2.00µs | 87.8% → 88.2% | 12.8ms | `encode/2`             | `Jason.Encode`  |

##### `sleep` (`<unknown>`)

| Change |   Delta |           % |           Time | Callee  | Location    |
| -----: | ------: | ----------: | -------------: | ------- | ----------- |
| -85.4% | -0.04ms | 6.3% → 1.0% | 41.0µs → 6.0µs | `sleep` | `<unknown>` |

##### `ensure_prepare_loading/3` (`code`)

| Change |   Delta |             % |  Time | Callee        | Location          |
| -----: | ------: | ------------: | ----: | ------------- | ----------------- |
| -16.1% | -0.04ms | 97.7% → 97.3% | 0.2ms | `read_file/1` | `erl_prim_loader` |

##### `read_file/1` (`erl_prim_loader`)

| Change |   Delta |            % |            Time | Callee        | Location    |
| -----: | ------: | -----------: | --------------: | ------------- | ----------- |
| -77.8% | -0.04ms | 20.7% → 5.5% | 45.0µs → 10.0µs | `read_file/1` | `prim_file` |

##### `read_file/1` (`prim_file`)

| Change |   Delta |             % |           Time | Callee            | Location    |
| -----: | ------: | ------------: | -------------: | ----------------- | ----------- |
| -87.5% | -0.04ms | 88.9% → 50.0% | 40.0µs → 5.0µs | `read_file_nif/1` | `prim_file` |

##### `read_file_nif/1` (`prim_file`)

| Change |   Delta |             % |           Time | Callee  | Location    |
| -----: | ------: | ------------: | -------------: | ------- | ----------- |
| -89.7% | -0.04ms | 97.5% → 80.0% | 39.0µs → 4.0µs | `sleep` | `<unknown>` |

##### `decode!/2` (`Jason`)

| Change |   Delta |     % |   Time | Callee    | Location        |
| -----: | ------: | ----: | -----: | --------- | --------------- |
|    ~0% | -2.00µs | 99.5% | 13.2ms | `parse/2` | `Jason.Decoder` |

##### `parse/2` (`Jason.Decoder`)

| Change |   Delta |     % |  Time | Callee     | Location        |
| -----: | ------: | ----: | ----: | ---------- | --------------- |
|  -0.5% | -2.00µs |  3.2% | 0.4ms | `value/5`  | `Jason.Decoder` |
|  -0.2% | -2.00µs |  9.1% | 1.2ms | `object/6` | `Jason.Decoder` |
|    ~0% | +1.00µs | 67.9% | 9.0ms | `string/6` | `Jason.Decoder` |
|  +0.3% | +1.00µs |  2.9% | 0.4ms | `key/6`    | `Jason.Decoder` |

##### `value/5` (`Jason.Decoder`)

|  Change |   Delta |           % |        Time | Callee  | Location    |
| ------: | ------: | ----------: | ----------: | ------- | ----------- |
| removed | -2.00µs | 0.5% → 0.0% | 2.0µs → 0ms | `sleep` | `<unknown>` |

##### `object/6` (`Jason.Decoder`)

|  Change |   Delta |           % |        Time | Callee  | Location    |
| ------: | ------: | ----------: | ----------: | ------- | ----------- |
| removed | -2.00µs | 0.2% → 0.0% | 2.0µs → 0ms | `sleep` | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in wall time spent in their leaf frame.

Common call stack: `apply/2` (`eflambe`) ← `<0.94.0>`

| Change |   Delta |            % |         Time | Call stack                                                                                                                                                                                                                                                                      |
| -----: | ------: | -----------: | -----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +0.17ms |  0.0% → 0.6% |  0ms → 0.2ms | `escape_json/1` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                                                                     |
|    new | +0.09ms |  0.0% → 0.3% |  0ms → 0.1ms | `escape_json/1` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                                                                                                          |
|    new | +0.07ms |  0.0% → 0.3% |  0ms → 0.1ms | `escape_json/1` (`Jason.Encode`) ← `encode_string/2` ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                                                 |
|    new | +0.04ms |  0.0% → 0.2% | 0ms → 43.0µs | `escape_json/1` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce/3` (`Enum`)                                                                           |
| +15.8% | +0.03ms |  0.7% → 0.8% |        0.2ms | `map_naive/3` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                                                                                                            |
|    new | +0.03ms |  0.0% → 0.1% | 0ms → 28.0µs | `escape_json/1` (`Jason.Encode`) ← `encode_string/2` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                                                                                      |
|    new | +0.02ms |  0.0% → 0.1% | 0ms → 22.0µs | `escape_json/1` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce/3` (`Enum`)                                                                                                                |
|    new | +0.02ms |  0.0% → 0.1% | 0ms → 18.0µs | `escape_json/1` (`Jason.Encode`) ← `encode_string/2` ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce/3` (`Enum`)                                                       |
|    new | +0.02ms |  0.0% → 0.1% | 0ms → 16.0µs | `escape_json/1` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `list/3` ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                     |
|    new | +0.01ms | 0.0% → <0.1% | 0ms → 12.0µs | `escape_json/1` (`Jason.Encode`) ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                                                                                          |
|    new | +0.01ms | 0.0% → <0.1% | 0ms → 12.0µs | `escape_json/1` (`Jason.Encode`) ← `encode_string/2` ← `map_naive_loop/3` ← `map_naive/3` ← `list/3` ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`) |
|  +2.4% | +0.01ms |         1.7% |        0.5ms | `sleep` ← `call/1` (`code_server`) ← `undefined_function/3` (`error_handler`) ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce/3` (`Enum`)                                                                                                                     |
|    new | +0.01ms | 0.0% → <0.1% |  0ms → 8.0µs | `escape_json/1` (`Jason.Encode`) ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                                                     |
|    new | +0.01ms | 0.0% → <0.1% |  0ms → 7.0µs | `escape_json/1` (`Jason.Encode`) ← `encode_string/2` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce/3` (`Enum`)                                                                                            |
|    new | +4.00µs | 0.0% → <0.1% |  0ms → 4.0µs | `escape_json/1` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `list/3` ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce/3` (`Enum`)                           |
|    new | +4.00µs | 0.0% → <0.1% |  0ms → 4.0µs | `escape_json/1` (`Jason.Encode`) ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                                                                                                                               |
|    new | +4.00µs | 0.0% → <0.1% |  0ms → 4.0µs | `escape_json/1` (`Jason.Encode`) ← `map_naive/3` ← `list/3` ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                                          |
|    new | +4.00µs | 0.0% → <0.1% |  0ms → 4.0µs | `escape_json/1` (`Jason.Encode`) ← `encode_string/2` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                                                                      |
|    new | +3.00µs | 0.0% → <0.1% |  0ms → 3.0µs | `escape_json/1` (`Jason.Encode`) ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce/3` (`Enum`)                                                                                                |
|    new | +3.00µs | 0.0% → <0.1% |  0ms → 3.0µs | `escape_json/1` (`Jason.Encode`) ← `encode_string/2` ← `map_naive_loop/3` ← `map_naive/3` ← `list/3` ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce/3` (`Enum`)       |

### Improvements

Call stacks with the largest decrease in wall time spent in their leaf frame.

Common call stack: `apply/2` (`eflambe`) ← `<0.94.0>`

|  Change |   Delta |            % |           Time | Call stack                                                                                                                                                                                                                                                                                 |
| ------: | ------: | -----------: | -------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| removed | -0.17ms |  0.6% → 0.0% |    0.2ms → 0ms | `escape_json/3` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                                                                                |
| removed | -0.09ms |  0.3% → 0.0% |    0.1ms → 0ms | `escape_json/3` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                                                                                                                     |
| removed | -0.07ms |  0.3% → 0.0% |    0.1ms → 0ms | `escape_json/3` (`Jason.Encode`) ← `encode_string/2` ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                                                            |
| removed | -0.04ms |  0.2% → 0.0% |   43.0µs → 0ms | `escape_json/3` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce/3` (`Enum`)                                                                                      |
|  -94.6% | -0.04ms | 0.1% → <0.1% | 37.0µs → 2.0µs | `sleep` ← `sleep` ← `read_file_nif/1` (`prim_file`) ← `read_file/1` ← `read_file/1` (`erl_prim_loader`) ← `ensure_prepare_loading/3` (`code`) ← `ensure_loaded/1` ← `undefined_function/3` (`error_handler`) ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce/3` (`Enum`) |
|   -3.7% | -0.03ms |  3.2% → 3.1% |          0.9ms | `prepare_loading_1/2` (`erlang`) ← `ensure_loaded/1` (`code`) ← `undefined_function/3` (`error_handler`) ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce/3` (`Enum`)                                                                                                     |
| removed | -0.03ms |  0.1% → 0.0% |   31.0µs → 0ms | `sleep` ← `map_naive_loop/3` (`Jason.Encode`) ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                                                                                        |
| removed | -0.03ms |  0.1% → 0.0% |   28.0µs → 0ms | `escape_json/3` (`Jason.Encode`) ← `encode_string/2` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                                                                                                 |
| removed | -0.02ms |  0.1% → 0.0% |   22.0µs → 0ms | `escape_json/3` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce/3` (`Enum`)                                                                                                                           |
| removed | -0.02ms |  0.1% → 0.0% |   18.0µs → 0ms | `escape_json/3` (`Jason.Encode`) ← `encode_string/2` ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce/3` (`Enum`)                                                                  |
| removed | -0.02ms |  0.1% → 0.0% |   16.0µs → 0ms | `escape_json/3` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `list/3` ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                                |
| removed | -0.01ms | <0.1% → 0.0% |   12.0µs → 0ms | `escape_json/3` (`Jason.Encode`) ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                                                                                                     |
| removed | -0.01ms | <0.1% → 0.0% |   12.0µs → 0ms | `escape_json/3` (`Jason.Encode`) ← `encode_string/2` ← `map_naive_loop/3` ← `map_naive/3` ← `list/3` ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)            |
| removed | -0.01ms | <0.1% → 0.0% |    8.0µs → 0ms | `escape_json/3` (`Jason.Encode`) ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                                                                |
| removed | -0.01ms | <0.1% → 0.0% |    7.0µs → 0ms | `escape_json/3` (`Jason.Encode`) ← `encode_string/2` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce/3` (`Enum`)                                                                                                       |
|   -5.2% | -0.01ms |         0.3% |          0.1ms | `sleep` ← `call/1` (`code_server`) ← `ensure_loaded/1` (`code`) ← `undefined_function/3` (`error_handler`) ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce/3` (`Enum`)                                                                                                   |
| removed | -4.00µs | <0.1% → 0.0% |    4.0µs → 0ms | `escape_json/3` (`Jason.Encode`) ← `map_naive_loop/3` ← `map_naive/3` ← `list/3` ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce/3` (`Enum`)                                      |
| removed | -4.00µs | <0.1% → 0.0% |    4.0µs → 0ms | `escape_json/3` (`Jason.Encode`) ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                                                                                                                                          |
| removed | -4.00µs | <0.1% → 0.0% |    4.0µs → 0ms | `escape_json/3` (`Jason.Encode`) ← `map_naive/3` ← `list/3` ← `map_naive_loop/3` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                                                     |
| removed | -4.00µs | <0.1% → 0.0% |    4.0µs → 0ms | `escape_json/3` (`Jason.Encode`) ← `encode_string/2` ← `map_naive/3` ← `map_naive_loop/3` ← `map_naive/3` ← `encode/2` ← `encode!/2` (`Jason`) ← `-run/1-fun-0-/2` (`Profile`) ← `reduce_range/5` (`Enum`)                                                                                 |

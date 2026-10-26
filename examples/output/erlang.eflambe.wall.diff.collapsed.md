# Wall time profile diff

Took 19.8ms.

| Category         | Change | Delta |     % |   Time |
| ---------------- | -----: | ----: | ----: | -----: |
| Standard library |   0.0% |   0ms | 99.7% | 19.7ms |
| Ours             |   0.0% |   0ms |  0.2% | 31.0µs |
| Idle             |   0.0% |   0ms |  0.1% | 20.0µs |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
└── 19.8ms (100.0%) <0.10.0>
    └── 19.8ms (100.0%) apply/2 at eflambe
        ├── 15.8ms (79.9%) foldl_1/3 at lists
        │   ├── 8.0ms (40.2%) decode/1 at json
        │   │   ├── 1.9ms (9.5%, self 11.9% globally) string/7
        │   │   ├── 1.1ms (5.6%, self 7.0% globally) string_ascii/7
        │   │   ├── 0.9ms (4.5%, self 5.6% globally) string_utf8/10
        │   │   ├── 0.6ms (3.2%, self 4.0% globally) continue/7
        │   │   ├── 0.6ms (3.0%, self 3.7% globally) string/9
        │   │   ├── 0.5ms (2.6%, self 3.3% globally) string_ascii/9
        │   │   ├── 0.5ms (2.5%, self 1.4%) number/7
        │   │   │   └── 0.2ms (1.1%) binary_to_integer/1 at erlang
        │   │   │       └── 0.1ms (0.5%) big_binary_to_int/2
        │   │   ├── 0.4ms (1.8%, self 1.7%) object_push/8
        │   │   ├── 0.3ms (1.6%) value/6
        │   │   ├── 0.3ms (1.5%) object_value/7
        │   │   ├── 0.3ms (1.5%, self 1.5%) object_key/6
        │   │   ├── 0.2ms (1.3%) string_utf8/8
        │   │   └── 0.3ms (1.6%) 9 more callees, led by (0.4%) number_zero/7
        │   └── … 7.8ms (39.4%, self 2.0%) do_encode_map/2 at json
        │       └── … 7.3ms (37.0%, self 4.9%, self 6.1% globally) -do_encode_map/2-lc$^0/1-0-/2 at json
        │           ├── 2.5ms (12.6%, self 12.5%, self 15.7% globally) escape_binary/5
        │           ├── 1.6ms (8.2%, self 8.2%, self 10.3% globally) escape_binary_ascii/5
        │           ├── 1.1ms (5.7%, self 7.2% globally) escape_binary_utf8/6
        │           ├── 0.7ms (3.6%, self 3.3%, self 4.3% globally) do_encode/2
        │           ├── 0.3ms (1.5%) key/2
        │           └── 0.1ms (0.5%) do_encode_list/2
        └── 4.0ms (20.0%) foldl/3 at lists
            ├── 2.0ms (10.1%) decode/1 at json
            │   ├── 0.5ms (2.4%, self 2.4%) string/7
            │   ├── 0.3ms (1.4%) string_ascii/7
            │   ├── 0.2ms (1.1%) string_utf8/10
            │   └── 1.0ms (5.2%) 18 more callees, led by (0.8%) continue/7
            └── … 1.9ms (9.8%) do_encode_map/2 at json
                └── … 1.8ms (9.3%, self 1.2%) -do_encode_map/2-lc$^0/1-0-/2 at json
                    ├── 0.6ms (3.1%) escape_binary/5
                    ├── 0.4ms (2.1%) escape_binary_ascii/5
                    ├── 0.3ms (1.4%) escape_binary_utf8/6
                    ├── 0.2ms (0.9%, self 0.8%) do_encode/2
                    └── 0.1ms (0.4%) key/2
```

## Hottest functions

### Self time

No function differed in wall time spent within the function body, excluding callees.

### Total time

#### Improvements

Functions with the largest decrease in wall time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

| Change |   Delta |     % |  Time | Function                | Location |
| -----: | ------: | ----: | ----: | ----------------------- | -------- |
|  -0.1% | -2.00µs | 10.3% | 2.0ms | `escape_binary_ascii/5` | `json`   |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `escape_binary_ascii/5` (`json`)

| Change |   Delta |      % |  Time | Caller                          | Location |
| -----: | ------: | -----: | ----: | ------------------------------- | -------- |
|  -0.1% | -2.00µs | 100.0% | 2.0ms | `-do_encode_map/2-lc$^0/1-0-/2` | `json`   |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `escape_binary_ascii/5` (`json`)

|  Change |   Delta |           % |        Time | Callee  | Location    |
| ------: | ------: | ----------: | ----------: | ------- | ----------- |
| removed | -2.00µs | 0.1% → 0.0% | 2.0µs → 0ms | `sleep` | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in wall time spent in their leaf frame.

| Change |   Delta |            % |        Time | Call stack                                                                                                                                                                                                                                                                                   |
| -----: | ------: | -----------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +2.00µs | 0.0% → <0.1% | 0ms → 2.0µs | `sleep` ← `-do_encode_map/2-lc$^0/1-0-/2` (`json`) ← `do_encode_map/2` ← `-do_encode_map/2-lc$^0/1-0-/2` ← `do_encode_map/2` ← `-do_encode_map/2-lc$^0/1-0-/2` ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2` ← `foldl_1/3` (`lists`) ← `apply/2` (`eflambe`) ← `<0.10.0>` |

### Improvements

Call stacks with the largest decrease in wall time spent in their leaf frame.

|  Change |   Delta |            % |        Time | Call stack                                                                                                                                                                                                                                                                                                             |
| ------: | ------: | -----------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -2.00µs | <0.1% → 0.0% | 2.0µs → 0ms | `sleep` ← `escape_binary_ascii/5` (`json`) ← `-do_encode_map/2-lc$^0/1-0-/2` ← `do_encode_map/2` ← `-do_encode_map/2-lc$^0/1-0-/2` ← `do_encode_map/2` ← `-do_encode_map/2-lc$^0/1-0-/2` ← `do_encode_map/2` ← `encode/1` (`profile`) ← `-run/1-fun-0-/2` ← `foldl_1/3` (`lists`) ← `apply/2` (`eflambe`) ← `<0.10.0>` |

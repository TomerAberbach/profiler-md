# Sampling profile

Took 5.78s.

| Category    |     % |    Time |
| ----------- | ----: | ------: |
| Ours        | 97.5% |   5.63s |
| Native      |  2.4% | 141.0ms |
| Third-party | <0.1% |   1.0ms |

Paths starting with `./` or `../` are relative to `/src/black/src/`.

## Call tree

Call paths to the hottest functions.

```
└── 5.78s (100.0%) <module>  /venv/bin/black:1
    ├── 5.63s (97.5%) [[via 2 frames]] main  /venv/lib/python3.11/site-packages/click/core.py:1484
    │   └── 5.63s (97.4%) [[via 3 frames]] main  ./black/__init__.py:240
    │       └── 5.63s (97.4%) reformat_one  :865
    │           └── 5.63s (97.4%) format_file_in_place  :922
    │               └── 5.63s (97.4%) format_file_contents  :1059
    │                   ├── 3.09s (53.5%) format_str  :1168
    │                   │   └── 3.08s (53.4%) _format_str_once  (self 26.8%; 43.5% in 2 call stacks)  :1215
    │                   │       ├── 1.26s (21.8%) [[via 2 frames]] parse_tokens  (self 19.9%; 31.7% in 2 call stacks)  ./blib2to3/pgen2/driver.py:114
    │                   │       │   └── 112.3ms (1.9%) addtoken  ./blib2to3/pgen2/parse.py:230
    │                   │       │       └── 112.3ms (1.9%) _addtoken  :278
    │                   │       │           └── 109.7ms (1.9%) shift  :361
    │                   │       │               └── 109.7ms (1.9%) convert  ./blib2to3/pytree.py:475
    │                   │       │                   └── 108.7ms (1.9%) __init__  :389
    │                   │       ├── 205.0ms (3.5%) detect_target_versions  :1443
    │                   │       │   └── 205.0ms (3.5%) get_features_used  (5.6% self in 2 call stacks)  :1286
    │                   │       └── 65.0ms (1.1%) transform_line  ./black/linegen.py:601
    │                   │           └── 65.0ms (1.1%) [[via 2 frames]] _hugging_power_ops_line_to_string  ./black/linegen.py:590
    │                   │               └── 64.8ms (1.1%) [[via 3 frames]] __contains__  ./black/mode.py:249
    │                   └── 2.54s (44.0%) check_stability_and_equivalence  :1042
    │                       ├── 1.97s (34.1%) assert_stable  :1543
    │                       │   └── 1.96s (34.0%) _format_str_once  (self 16.6%)  :1215
    │                       │       ├── 682.9ms (11.8%) [[via 2 frames]] parse_tokens  ./blib2to3/pgen2/driver.py:114
    │                       │       ├── 202.0ms (3.5%) visit  (self 1.2%)  ./black/nodes.py:152
    │                       │       │   ├── 117.9ms (2.0%) [[via 4 frames]] visit_STRING  ./black/linegen.py:413
    │                       │       │   │   └── 117.9ms (2.0%) visit_default  :134
    │                       │       │   │       └── 117.9ms (2.0%) append  ./black/lines.py:52
    │                       │       │   │           └── 116.9ms (2.0%) is_complex_subscript  :430
    │                       │       │   └── 12.0ms (0.2%) [[via 3 frames]] visit_stmt  ./black/linegen.py:199
    │                       │       └── 119.0ms (2.1%) detect_target_versions  :1443
    │                       │           └── 119.0ms (2.1%) get_features_used  :1286
    │                       └── 565.3ms (9.8%) assert_equivalent  (self 4.7%)  :1510
    │                           ├── 153.0ms (2.6%) _stringify_ast  ./black/parsing.py:182
    │                           └── 141.0ms (2.4%) [[via 3 frames]] compile  <built-in>
    └── 141.0ms (2.4%) <module>  (self 1.3%)  ./black/__init__.py:1
        └── 66.9ms (1.2%) <module>  ./black/comments.py:1
            └── 64.0ms (1.1%) <module>  ./black/nodes.py:1
```

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|     % |    Time | Function                          | Location                         |
| ----: | ------: | --------------------------------- | -------------------------------- |
| 43.5% |   2.51s | `_format_str_once`                | `./black/__init__.py:1215`       |
| 31.7% |   1.83s | `parse_tokens`                    | `./blib2to3/pgen2/driver.py:114` |
|  5.6% | 324.0ms | `get_features_used`               | `./black/__init__.py:1286`       |
|  4.7% | 271.4ms | `assert_equivalent`               | `./black/__init__.py:1510`       |
|  2.6% | 153.0ms | `_stringify_ast`                  | `./black/parsing.py:182`         |
|  2.4% | 141.0ms | `compile`                         | `<built-in>`                     |
|  2.0% | 116.9ms | `is_complex_subscript`            | `./black/lines.py:430`           |
|  1.9% | 108.7ms | `__init__`                        | `./blib2to3/pytree.py:389`       |
|  1.3% |  74.1ms | `<module>`                        | `./black/__init__.py:1`          |
|  1.2% |  67.6ms | `visit`                           | `./black/nodes.py:152`           |
|  1.1% |  64.8ms | `__contains__`                    | `./black/mode.py:249`            |
|  1.1% |  64.0ms | `<module>`                        | `./black/nodes.py:1`             |
|  0.2% |  12.0ms | `visit_stmt`                      | `./black/linegen.py:199`         |
|  0.1% |   6.1ms | `format_str`                      | `./black/__init__.py:1168`       |
|  0.1% |   6.0ms | `<module>`                        | `/venv/bin/black:1`              |
|  0.1% |   5.7ms | `assert_stable`                   | `./black/__init__.py:1543`       |
|  0.1% |   4.6ms | `visit_default`                   | `./black/linegen.py:134`         |
|  0.1% |   3.9ms | `check_stability_and_equivalence` | `./black/__init__.py:1042`       |
| <0.1% |   2.9ms | `<module>`                        | `./black/comments.py:1`          |
| <0.1% |   2.5ms | `_addtoken`                       | `./blib2to3/pgen2/parse.py:278`  |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Function                          | Location                         |
| ----: | ------: | --------------------------------- | -------------------------------- |
| 43.5% |   2.51s | `_format_str_once`                | `./black/__init__.py:1215`       |
| 31.7% |   1.83s | `parse_tokens`                    | `./blib2to3/pgen2/driver.py:114` |
|  5.6% | 324.0ms | `get_features_used`               | `./black/__init__.py:1286`       |
|  4.7% | 271.4ms | `assert_equivalent`               | `./black/__init__.py:1510`       |
|  2.6% | 153.0ms | `_stringify_ast`                  | `./black/parsing.py:182`         |
|  2.0% | 116.9ms | `is_complex_subscript`            | `./black/lines.py:430`           |
|  1.9% | 108.7ms | `__init__`                        | `./blib2to3/pytree.py:389`       |
|  1.3% |  74.1ms | `<module>`                        | `./black/__init__.py:1`          |
|  1.2% |  67.6ms | `visit`                           | `./black/nodes.py:152`           |
|  1.1% |  64.8ms | `__contains__`                    | `./black/mode.py:249`            |
|  1.1% |  64.0ms | `<module>`                        | `./black/nodes.py:1`             |
|  0.2% |  12.0ms | `visit_stmt`                      | `./black/linegen.py:199`         |
|  0.1% |   6.1ms | `format_str`                      | `./black/__init__.py:1168`       |
|  0.1% |   6.0ms | `<module>`                        | `/venv/bin/black:1`              |
|  0.1% |   5.7ms | `assert_stable`                   | `./black/__init__.py:1543`       |
|  0.1% |   4.6ms | `visit_default`                   | `./black/linegen.py:134`         |
|  0.1% |   3.9ms | `check_stability_and_equivalence` | `./black/__init__.py:1042`       |
| <0.1% |   2.9ms | `<module>`                        | `./black/comments.py:1`          |
| <0.1% |   2.5ms | `_addtoken`                       | `./blib2to3/pgen2/parse.py:278`  |
| <0.1% |   1.0ms | `append`                          | `./black/lines.py:52`            |

##### Native

|    % |    Time | Function  | Location     |
| ---: | ------: | --------- | ------------ |
| 2.4% | 141.0ms | `compile` | `<built-in>` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `_format_str_once` (`./black/__init__.py:1215`)

|     % |    Time | Caller          | Location                   |
| ----: | ------: | --------------- | -------------------------- |
| 61.7% |   1.55s | `format_str`    | `./black/__init__.py:1168` |
| 38.3% | 962.0ms | `assert_stable` | `./black/__init__.py:1543` |

##### `parse_tokens` (`./blib2to3/pgen2/driver.py:114`)

|      % |  Time | Caller         | Location                         |
| -----: | ----: | -------------- | -------------------------------- |
| 100.0% | 1.83s | `parse_string` | `./blib2to3/pgen2/driver.py:198` |

##### `get_features_used` (`./black/__init__.py:1286`)

|      % |    Time | Caller                   | Location                   |
| -----: | ------: | ------------------------ | -------------------------- |
| 100.0% | 324.0ms | `detect_target_versions` | `./black/__init__.py:1443` |

##### `assert_equivalent` (`./black/__init__.py:1510`)

|      % |    Time | Caller                            | Location                   |
| -----: | ------: | --------------------------------- | -------------------------- |
| 100.0% | 271.4ms | `check_stability_and_equivalence` | `./black/__init__.py:1042` |

##### `_stringify_ast` (`./black/parsing.py:182`)

|      % |    Time | Caller              | Location                   |
| -----: | ------: | ------------------- | -------------------------- |
| 100.0% | 153.0ms | `assert_equivalent` | `./black/__init__.py:1510` |

##### `compile` (`<built-in>`)

|      % |    Time | Caller  | Location                        |
| -----: | ------: | ------- | ------------------------------- |
| 100.0% | 141.0ms | `parse` | `/usr/lib/python3.11/ast.py:33` |

##### `is_complex_subscript` (`./black/lines.py:430`)

|      % |    Time | Caller   | Location              |
| -----: | ------: | -------- | --------------------- |
| 100.0% | 116.9ms | `append` | `./black/lines.py:52` |

##### `__init__` (`./blib2to3/pytree.py:389`)

|      % |    Time | Caller    | Location                   |
| -----: | ------: | --------- | -------------------------- |
| 100.0% | 108.7ms | `convert` | `./blib2to3/pytree.py:475` |

##### `<module>` (`./black/__init__.py:1`)

|      % |   Time | Caller     | Location            |
| -----: | -----: | ---------- | ------------------- |
| 100.0% | 74.1ms | `<module>` | `/venv/bin/black:1` |

##### `visit` (`./black/nodes.py:152`)

|     % |   Time | Caller          | Location                 |
| ----: | -----: | --------------- | ------------------------ |
| 98.5% | 66.6ms | `visit_default` | `./black/nodes.py:176`   |
|  1.5% |  1.0ms | `visit_funcdef` | `./black/linegen.py:254` |

##### `__contains__` (`./black/mode.py:249`)

|      % |   Time | Caller             | Location              |
| -----: | -----: | ------------------ | --------------------- |
| 100.0% | 64.8ms | `is_simple_lookup` | `./black/trans.py:93` |

##### `<module>` (`./black/nodes.py:1`)

|      % |   Time | Caller     | Location                |
| -----: | -----: | ---------- | ----------------------- |
| 100.0% | 64.0ms | `<module>` | `./black/comments.py:1` |

##### `visit_stmt` (`./black/linegen.py:199`)

|      % |   Time | Caller  | Location               |
| -----: | -----: | ------- | ---------------------- |
| 100.0% | 12.0ms | `visit` | `./black/nodes.py:152` |

##### `format_str` (`./black/__init__.py:1168`)

|      % |  Time | Caller                 | Location                   |
| -----: | ----: | ---------------------- | -------------------------- |
| 100.0% | 6.1ms | `format_file_contents` | `./black/__init__.py:1059` |

##### `assert_stable` (`./black/__init__.py:1543`)

|      % |  Time | Caller                            | Location                   |
| -----: | ----: | --------------------------------- | -------------------------- |
| 100.0% | 5.7ms | `check_stability_and_equivalence` | `./black/__init__.py:1042` |

##### `visit_default` (`./black/linegen.py:134`)

|      % |  Time | Caller        | Location                 |
| -----: | ----: | ------------- | ------------------------ |
| 100.0% | 4.6ms | `visit_suite` | `./black/linegen.py:288` |

##### `check_stability_and_equivalence` (`./black/__init__.py:1042`)

|      % |  Time | Caller                 | Location                   |
| -----: | ----: | ---------------------- | -------------------------- |
| 100.0% | 3.9ms | `format_file_contents` | `./black/__init__.py:1059` |

##### `<module>` (`./black/comments.py:1`)

|      % |  Time | Caller     | Location                |
| -----: | ----: | ---------- | ----------------------- |
| 100.0% | 2.9ms | `<module>` | `./black/__init__.py:1` |

##### `_addtoken` (`./blib2to3/pgen2/parse.py:278`)

|      % |  Time | Caller     | Location                        |
| -----: | ----: | ---------- | ------------------------------- |
| 100.0% | 2.5ms | `addtoken` | `./blib2to3/pgen2/parse.py:230` |

##### `append` (`./black/lines.py:52`)

|      % |  Time | Caller          | Location                 |
| -----: | ----: | --------------- | ------------------------ |
| 100.0% | 1.0ms | `visit_default` | `./black/linegen.py:134` |

### Total time

Functions with the most time spent within the function and its callees.

|      % |    Time | Function                          | Location                                                    |
| -----: | ------: | --------------------------------- | ----------------------------------------------------------- |
| 100.0% |   5.78s | `<module>`                        | `/venv/bin/black:1`                                         |
|  97.5% |   5.63s | `main`                            | `/venv/lib/python3.11/site-packages/click/core.py:1484`     |
|  97.5% |   5.63s | `__call__`                        | `/venv/lib/python3.11/site-packages/click/core.py:1629`     |
|  97.5% |   5.63s | `patched_main`                    | `./black/__init__.py:1580`                                  |
|  97.4% |   5.63s | `main`                            | `./black/__init__.py:240`                                   |
|  97.4% |   5.63s | `new_func`                        | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |
|  97.4% |   5.63s | `invoke`                          | `/venv/lib/python3.11/site-packages/click/core.py:857`      |
|  97.4% |   5.63s | `invoke`                          | `/venv/lib/python3.11/site-packages/click/core.py:1401`     |
|  97.4% |   5.63s | `format_file_in_place`            | `./black/__init__.py:922`                                   |
|  97.4% |   5.63s | `reformat_one`                    | `./black/__init__.py:865`                                   |
|  97.4% |   5.63s | `format_file_contents`            | `./black/__init__.py:1059`                                  |
|  87.4% |   5.05s | `_format_str_once`                | `./black/__init__.py:1215`                                  |
|  53.5% |   3.09s | `format_str`                      | `./black/__init__.py:1168`                                  |
|  44.0% |   2.54s | `check_stability_and_equivalence` | `./black/__init__.py:1042`                                  |
|  34.1% |   1.97s | `assert_stable`                   | `./black/__init__.py:1543`                                  |
|  33.7% |   1.94s | `parse_tokens`                    | `./blib2to3/pgen2/driver.py:114`                            |
|  33.7% |   1.94s | `parse_string`                    | `./blib2to3/pgen2/driver.py:198`                            |
|  33.7% |   1.94s | `lib2to3_parse`                   | `./black/parsing.py:55`                                     |
|   9.8% | 565.3ms | `assert_equivalent`               | `./black/__init__.py:1510`                                  |
|   5.6% | 324.0ms | `get_features_used`               | `./black/__init__.py:1286`                                  |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|      % |    Time | Function                          | Location                         |
| -----: | ------: | --------------------------------- | -------------------------------- |
| 100.0% |   5.78s | `<module>`                        | `/venv/bin/black:1`              |
|  97.5% |   5.63s | `patched_main`                    | `./black/__init__.py:1580`       |
|  97.4% |   5.63s | `main`                            | `./black/__init__.py:240`        |
|  97.4% |   5.63s | `format_file_in_place`            | `./black/__init__.py:922`        |
|  97.4% |   5.63s | `reformat_one`                    | `./black/__init__.py:865`        |
|  97.4% |   5.63s | `format_file_contents`            | `./black/__init__.py:1059`       |
|  87.4% |   5.05s | `_format_str_once`                | `./black/__init__.py:1215`       |
|  53.5% |   3.09s | `format_str`                      | `./black/__init__.py:1168`       |
|  44.0% |   2.54s | `check_stability_and_equivalence` | `./black/__init__.py:1042`       |
|  34.1% |   1.97s | `assert_stable`                   | `./black/__init__.py:1543`       |
|  33.7% |   1.94s | `parse_tokens`                    | `./blib2to3/pgen2/driver.py:114` |
|  33.7% |   1.94s | `parse_string`                    | `./blib2to3/pgen2/driver.py:198` |
|  33.7% |   1.94s | `lib2to3_parse`                   | `./black/parsing.py:55`          |
|   9.8% | 565.3ms | `assert_equivalent`               | `./black/__init__.py:1510`       |
|   5.6% | 324.0ms | `get_features_used`               | `./black/__init__.py:1286`       |
|   5.6% | 324.0ms | `detect_target_versions`          | `./black/__init__.py:1443`       |
|   3.5% | 202.0ms | `visit`                           | `./black/nodes.py:152`           |
|   3.5% | 202.0ms | `visit_default`                   | `./black/nodes.py:176`           |
|   3.5% | 202.0ms | `visit_default`                   | `./black/linegen.py:134`         |
|   3.3% | 190.1ms | `visit_funcdef`                   | `./black/linegen.py:254`         |

##### Native

|    % |    Time | Function  | Location     |
| ---: | ------: | --------- | ------------ |
| 2.4% | 141.0ms | `compile` | `<built-in>` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py:1484`)

|      % |  Time | Caller     | Location                                                |
| -----: | ----: | ---------- | ------------------------------------------------------- |
| 100.0% | 5.63s | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1629` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1629`)

|      % |  Time | Caller         | Location                   |
| -----: | ----: | -------------- | -------------------------- |
| 100.0% | 5.63s | `patched_main` | `./black/__init__.py:1580` |

##### `patched_main` (`./black/__init__.py:1580`)

|      % |  Time | Caller     | Location            |
| -----: | ----: | ---------- | ------------------- |
| 100.0% | 5.63s | `<module>` | `/venv/bin/black:1` |

##### `main` (`./black/__init__.py:240`)

|      % |  Time | Caller     | Location                                                    |
| -----: | ----: | ---------- | ----------------------------------------------------------- |
| 100.0% | 5.63s | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |  Time | Caller   | Location                                               |
| -----: | ----: | -------- | ------------------------------------------------------ |
| 100.0% | 5.63s | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:857` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`)

|      % |  Time | Caller   | Location                                                |
| -----: | ----: | -------- | ------------------------------------------------------- |
| 100.0% | 5.63s | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:1401` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:1401`)

|      % |  Time | Caller | Location                                                |
| -----: | ----: | ------ | ------------------------------------------------------- |
| 100.0% | 5.63s | `main` | `/venv/lib/python3.11/site-packages/click/core.py:1484` |

##### `format_file_in_place` (`./black/__init__.py:922`)

|      % |  Time | Caller         | Location                  |
| -----: | ----: | -------------- | ------------------------- |
| 100.0% | 5.63s | `reformat_one` | `./black/__init__.py:865` |

##### `reformat_one` (`./black/__init__.py:865`)

|      % |  Time | Caller | Location                  |
| -----: | ----: | ------ | ------------------------- |
| 100.0% | 5.63s | `main` | `./black/__init__.py:240` |

##### `format_file_contents` (`./black/__init__.py:1059`)

|      % |  Time | Caller                 | Location                  |
| -----: | ----: | ---------------------- | ------------------------- |
| 100.0% | 5.63s | `format_file_in_place` | `./black/__init__.py:922` |

##### `_format_str_once` (`./black/__init__.py:1215`)

|     % |  Time | Caller          | Location                   |
| ----: | ----: | --------------- | -------------------------- |
| 61.1% | 3.08s | `format_str`    | `./black/__init__.py:1168` |
| 38.9% | 1.96s | `assert_stable` | `./black/__init__.py:1543` |

##### `format_str` (`./black/__init__.py:1168`)

|      % |  Time | Caller                 | Location                   |
| -----: | ----: | ---------------------- | -------------------------- |
| 100.0% | 3.09s | `format_file_contents` | `./black/__init__.py:1059` |

##### `check_stability_and_equivalence` (`./black/__init__.py:1042`)

|      % |  Time | Caller                 | Location                   |
| -----: | ----: | ---------------------- | -------------------------- |
| 100.0% | 2.54s | `format_file_contents` | `./black/__init__.py:1059` |

##### `assert_stable` (`./black/__init__.py:1543`)

|      % |  Time | Caller                            | Location                   |
| -----: | ----: | --------------------------------- | -------------------------- |
| 100.0% | 1.97s | `check_stability_and_equivalence` | `./black/__init__.py:1042` |

##### `parse_tokens` (`./blib2to3/pgen2/driver.py:114`)

|      % |  Time | Caller         | Location                         |
| -----: | ----: | -------------- | -------------------------------- |
| 100.0% | 1.94s | `parse_string` | `./blib2to3/pgen2/driver.py:198` |

##### `parse_string` (`./blib2to3/pgen2/driver.py:198`)

|      % |  Time | Caller          | Location                |
| -----: | ----: | --------------- | ----------------------- |
| 100.0% | 1.94s | `lib2to3_parse` | `./black/parsing.py:55` |

##### `lib2to3_parse` (`./black/parsing.py:55`)

|      % |  Time | Caller             | Location                   |
| -----: | ----: | ------------------ | -------------------------- |
| 100.0% | 1.94s | `_format_str_once` | `./black/__init__.py:1215` |

##### `assert_equivalent` (`./black/__init__.py:1510`)

|      % |    Time | Caller                            | Location                   |
| -----: | ------: | --------------------------------- | -------------------------- |
| 100.0% | 565.3ms | `check_stability_and_equivalence` | `./black/__init__.py:1042` |

##### `get_features_used` (`./black/__init__.py:1286`)

|      % |    Time | Caller                   | Location                   |
| -----: | ------: | ------------------------ | -------------------------- |
| 100.0% | 324.0ms | `detect_target_versions` | `./black/__init__.py:1443` |

##### `detect_target_versions` (`./black/__init__.py:1443`)

|      % |    Time | Caller             | Location                   |
| -----: | ------: | ------------------ | -------------------------- |
| 100.0% | 324.0ms | `_format_str_once` | `./black/__init__.py:1215` |

##### `visit` (`./black/nodes.py:152`)

|      % |    Time | Caller             | Location                   |
| -----: | ------: | ------------------ | -------------------------- |
| 100.0% | 202.0ms | `visit_default`    | `./black/nodes.py:176`     |
| 100.0% | 202.0ms | `_format_str_once` | `./black/__init__.py:1215` |
|  94.1% | 190.1ms | `visit_funcdef`    | `./black/linegen.py:254`   |
|  35.2% |  71.0ms | `visit_stmt`       | `./black/linegen.py:199`   |

##### `visit_default` (`./black/nodes.py:176`)

|      % |    Time | Caller          | Location                 |
| -----: | ------: | --------------- | ------------------------ |
| 100.0% | 202.0ms | `visit_default` | `./black/linegen.py:134` |

##### `visit_default` (`./black/linegen.py:134`)

|      % |    Time | Caller               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% | 202.0ms | `visit`              | `./black/nodes.py:152`   |
|  58.4% | 118.0ms | `visit_dictsetmaker` | `./black/linegen.py:234` |
|  58.3% | 117.9ms | `visit_STRING`       | `./black/linegen.py:413` |
|  35.2% |  71.0ms | `visit_suite`        | `./black/linegen.py:288` |

##### `visit_funcdef` (`./black/linegen.py:254`)

|      % |    Time | Caller  | Location               |
| -----: | ------: | ------- | ---------------------- |
| 100.0% | 190.1ms | `visit` | `./black/nodes.py:152` |

##### `compile` (`<built-in>`)

|      % |    Time | Caller  | Location                        |
| -----: | ------: | ------- | ------------------------------- |
| 100.0% | 141.0ms | `parse` | `/usr/lib/python3.11/ast.py:33` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `<module>` (`/venv/bin/black:1`)

|     % |    Time | Callee         | Location                   |
| ----: | ------: | -------------- | -------------------------- |
| 97.5% |   5.63s | `patched_main` | `./black/__init__.py:1580` |
|  2.4% | 141.0ms | `<module>`     | `./black/__init__.py:1`    |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py:1484`)

|      % |  Time | Callee   | Location                                                |
| -----: | ----: | -------- | ------------------------------------------------------- |
| 100.0% | 5.63s | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:1401` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py:1629`)

|      % |  Time | Callee | Location                                                |
| -----: | ----: | ------ | ------------------------------------------------------- |
| 100.0% | 5.63s | `main` | `/venv/lib/python3.11/site-packages/click/core.py:1484` |

##### `patched_main` (`./black/__init__.py:1580`)

|      % |  Time | Callee     | Location                                                |
| -----: | ----: | ---------- | ------------------------------------------------------- |
| 100.0% | 5.63s | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py:1629` |

##### `main` (`./black/__init__.py:240`)

|      % |  Time | Callee         | Location                  |
| -----: | ----: | -------------- | ------------------------- |
| 100.0% | 5.63s | `reformat_one` | `./black/__init__.py:865` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |  Time | Callee | Location                  |
| -----: | ----: | ------ | ------------------------- |
| 100.0% | 5.63s | `main` | `./black/__init__.py:240` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`)

|      % |  Time | Callee     | Location                                                    |
| -----: | ----: | ---------- | ----------------------------------------------------------- |
| 100.0% | 5.63s | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py:33` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:1401`)

|      % |  Time | Callee   | Location                                               |
| -----: | ----: | -------- | ------------------------------------------------------ |
| 100.0% | 5.63s | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py:857` |

##### `format_file_in_place` (`./black/__init__.py:922`)

|      % |  Time | Callee                 | Location                   |
| -----: | ----: | ---------------------- | -------------------------- |
| 100.0% | 5.63s | `format_file_contents` | `./black/__init__.py:1059` |

##### `reformat_one` (`./black/__init__.py:865`)

|      % |  Time | Callee                 | Location                  |
| -----: | ----: | ---------------------- | ------------------------- |
| 100.0% | 5.63s | `format_file_in_place` | `./black/__init__.py:922` |

##### `format_file_contents` (`./black/__init__.py:1059`)

|     % |  Time | Callee                            | Location                   |
| ----: | ----: | --------------------------------- | -------------------------- |
| 54.9% | 3.09s | `format_str`                      | `./black/__init__.py:1168` |
| 45.1% | 2.54s | `check_stability_and_equivalence` | `./black/__init__.py:1042` |

##### `_format_str_once` (`./black/__init__.py:1215`)

|     % |    Time | Callee                   | Location                   |
| ----: | ------: | ------------------------ | -------------------------- |
| 38.5% |   1.94s | `lib2to3_parse`          | `./black/parsing.py:55`    |
|  6.4% | 324.0ms | `detect_target_versions` | `./black/__init__.py:1443` |
|  4.0% | 202.0ms | `visit`                  | `./black/nodes.py:152`     |
|  1.3% |  65.0ms | `transform_line`         | `./black/linegen.py:601`   |

##### `format_str` (`./black/__init__.py:1168`)

|     % |  Time | Callee             | Location                   |
| ----: | ----: | ------------------ | -------------------------- |
| 99.8% | 3.08s | `_format_str_once` | `./black/__init__.py:1215` |

##### `check_stability_and_equivalence` (`./black/__init__.py:1042`)

|     % |    Time | Callee              | Location                   |
| ----: | ------: | ------------------- | -------------------------- |
| 77.6% |   1.97s | `assert_stable`     | `./black/__init__.py:1543` |
| 22.2% | 565.3ms | `assert_equivalent` | `./black/__init__.py:1510` |

##### `assert_stable` (`./black/__init__.py:1543`)

|     % |  Time | Callee             | Location                   |
| ----: | ----: | ------------------ | -------------------------- |
| 99.7% | 1.96s | `_format_str_once` | `./black/__init__.py:1215` |

##### `parse_tokens` (`./blib2to3/pgen2/driver.py:114`)

|    % |    Time | Callee     | Location                        |
| ---: | ------: | ---------- | ------------------------------- |
| 5.8% | 112.3ms | `addtoken` | `./blib2to3/pgen2/parse.py:230` |

##### `parse_string` (`./blib2to3/pgen2/driver.py:198`)

|      % |  Time | Callee         | Location                         |
| -----: | ----: | -------------- | -------------------------------- |
| 100.0% | 1.94s | `parse_tokens` | `./blib2to3/pgen2/driver.py:114` |

##### `lib2to3_parse` (`./black/parsing.py:55`)

|      % |  Time | Callee         | Location                         |
| -----: | ----: | -------------- | -------------------------------- |
| 100.0% | 1.94s | `parse_string` | `./blib2to3/pgen2/driver.py:198` |

##### `assert_equivalent` (`./black/__init__.py:1510`)

|     % |    Time | Callee           | Location                 |
| ----: | ------: | ---------------- | ------------------------ |
| 27.1% | 153.0ms | `_stringify_ast` | `./black/parsing.py:182` |
| 24.9% | 141.0ms | `parse_ast`      | `./black/parsing.py:137` |

##### `detect_target_versions` (`./black/__init__.py:1443`)

|      % |    Time | Callee              | Location                   |
| -----: | ------: | ------------------- | -------------------------- |
| 100.0% | 324.0ms | `get_features_used` | `./black/__init__.py:1286` |

##### `visit` (`./black/nodes.py:152`)

|      % |    Time | Callee               | Location                 |
| -----: | ------: | -------------------- | ------------------------ |
| 100.0% | 202.0ms | `visit_default`      | `./black/linegen.py:134` |
|  94.1% | 190.1ms | `visit_funcdef`      | `./black/linegen.py:254` |
|  58.4% | 118.0ms | `visit_dictsetmaker` | `./black/linegen.py:234` |
|  58.3% | 117.9ms | `visit_STRING`       | `./black/linegen.py:413` |
|  41.1% |  83.0ms | `visit_stmt`         | `./black/linegen.py:199` |

##### `visit_default` (`./black/nodes.py:176`)

|      % |    Time | Callee  | Location               |
| -----: | ------: | ------- | ---------------------- |
| 100.0% | 202.0ms | `visit` | `./black/nodes.py:152` |

##### `visit_default` (`./black/linegen.py:134`)

|      % |    Time | Callee          | Location               |
| -----: | ------: | --------------- | ---------------------- |
| 100.0% | 202.0ms | `visit_default` | `./black/nodes.py:176` |
|  58.3% | 117.9ms | `append`        | `./black/lines.py:52`  |

##### `visit_funcdef` (`./black/linegen.py:254`)

|      % |    Time | Callee  | Location               |
| -----: | ------: | ------- | ---------------------- |
| 100.0% | 190.1ms | `visit` | `./black/nodes.py:152` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `<module>` (`/venv/bin/black:1`)

|     % |    Time | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 26.8% |   1.55s | `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 19.9% |   1.15s | `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 16.6% | 962.0ms | `_format_str_once` (`./black/__init__.py:1215`) ← `assert_stable` (1543) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 11.8% | 682.9ms | `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `assert_stable` (1543) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  4.7% | 271.4ms | `assert_equivalent` (`./black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  3.5% | 205.0ms | `get_features_used` (`./black/__init__.py:1286`) ← `detect_target_versions` (1443) ← `_format_str_once` (1215) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.6% | 153.0ms | `_stringify_ast` (`./black/parsing.py:182`) ← `assert_equivalent` (`./black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  2.4% | 141.0ms | `compile` (`<built-in>`) ← `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`./black/parsing.py:125`) ← `parse_ast` (137) ← `assert_equivalent` (`./black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  2.1% | 119.0ms | `get_features_used` (`./black/__init__.py:1286`) ← `detect_target_versions` (1443) ← `_format_str_once` (1215) ← `assert_stable` (1543) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.0% | 116.9ms | `is_complex_subscript` (`./black/lines.py:430`) ← `append` (52) ← `visit_default` (`./black/linegen.py:134`) ← `visit_STRING` (413) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_dictsetmaker` (234) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `assert_stable` (1543) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`) |
|  1.9% | 108.7ms | `__init__` (`./blib2to3/pytree.py:389`) ← `convert` (475) ← `shift` (`./blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`./blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`./black/parsing.py:55`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.3% |  74.1ms | `<module>` (`./black/__init__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.1% |  66.4ms | `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `assert_stable` (1543) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`)                                                                                                                                                                                                                                                           |
|  1.1% |  64.8ms | `__contains__` (`./black/mode.py:249`) ← `is_simple_lookup` (`./black/trans.py:93`) ← `is_simple_operand` (110) ← `hug_power_op` (81) ← `_hugging_power_ops_line_to_string` (`./black/linegen.py:590`) ← `transform_line` (601) ← `run_transformer` (1771) ← `transform_line` (601) ← `_format_str_once` (`./black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.1% |  64.0ms | `<module>` (`./black/nodes.py:1`) ← `<module>` (`./black/comments.py:1`) ← `<module>` (`./black/__init__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.2% |  12.0ms | `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `assert_stable` (1543) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.1% |   6.1ms | `format_str` (`./black/__init__.py:1168`) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.1% |   5.7ms | `assert_stable` (`./black/__init__.py:1543`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |   4.6ms | `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_funcdef` (`./black/linegen.py:254`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`./black/nodes.py:152`) ← `visit_stmt` (`./black/linegen.py:199`) ← `visit` (`./black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`./black/linegen.py:134`) ← `visit` (`./black/nodes.py:152`) ← `_format_str_once` (`./black/__init__.py:1215`) ← `assert_stable` (1543) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                      |
|  0.1% |   3.9ms | `check_stability_and_equivalence` (`./black/__init__.py:1042`) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`./black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

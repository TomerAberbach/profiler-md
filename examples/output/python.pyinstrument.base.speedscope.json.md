# Sampling profile

Took 4.76s.

| Category    |     % |    Time |
| ----------- | ----: | ------: |
| Ours        | 95.7% |   4.55s |
| Native      |  4.3% | 203.6ms |
| Third-party | <0.1% |   2.0ms |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Function                          | Location                                               |
| ----: | ------: | --------------------------------- | ------------------------------------------------------ |
| 43.0% |   2.04s | `_format_str_once`                | `src/black/src/black/__init__.py:1236`                 |
| 33.0% |   1.56s | `parse_tokens`                    | `src/black/src/blib2to3/pgen2/driver.py:114`           |
|  6.0% | 288.0ms | `get_features_used`               | `src/black/src/black/__init__.py:1307`                 |
|  5.9% | 281.2ms | `assert_equivalent`               | `src/black/src/black/__init__.py:1524`                 |
|  2.6% | 125.0ms | `_stringify_ast`                  | `src/black/src/black/parsing.py:174`                   |
|  2.4% | 115.2ms | `compile`                         | `<built-in>`                                           |
|  1.9% |  88.4ms | `object.__new__`                  | `<built-in>`                                           |
|  1.2% |  58.5ms | `<module>`                        | `src/black/src/black/__init__.py:1`                    |
|  1.2% |  57.4ms | `generate_comments`               | `src/black/src/black/comments.py:52`                   |
|  1.1% |  53.0ms | `<module>`                        | `src/black/src/black/nodes.py:1`                       |
|  1.0% |  47.9ms | `original_is_simple_lookup_func`  | `src/black/src/black/trans.py:158`                     |
|  0.1% |   7.0ms | `addtoken`                        | `src/black/src/blib2to3/pgen2/parse.py:242`            |
|  0.1% |   5.1ms | `format_str`                      | `src/black/src/black/__init__.py:1189`                 |
|  0.1% |   4.5ms | `<module>`                        | `venv/bin/black:1`                                     |
|  0.1% |   4.0ms | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1037`                 |
|  0.1% |   3.0ms | `<module>`                        | `src/black/src/black/comments.py:1`                    |
|  0.1% |   2.9ms | `assert_stable`                   | `src/black/src/black/__init__.py:1557`                 |
| <0.1% |   2.0ms | `main`                            | `venv/lib/python3.11/site-packages/click/core.py:1484` |
| <0.1% |   1.1ms | `parse_string`                    | `src/black/src/blib2to3/pgen2/driver.py:198`           |
| <0.1% |   1.0ms | `transform_line`                  | `src/black/src/black/linegen.py:601`                   |

#### Categories

##### Ours

|     % |    Time | Function                          | Location                                     |
| ----: | ------: | --------------------------------- | -------------------------------------------- |
| 43.0% |   2.04s | `_format_str_once`                | `src/black/src/black/__init__.py:1236`       |
| 33.0% |   1.56s | `parse_tokens`                    | `src/black/src/blib2to3/pgen2/driver.py:114` |
|  6.0% | 288.0ms | `get_features_used`               | `src/black/src/black/__init__.py:1307`       |
|  5.9% | 281.2ms | `assert_equivalent`               | `src/black/src/black/__init__.py:1524`       |
|  2.6% | 125.0ms | `_stringify_ast`                  | `src/black/src/black/parsing.py:174`         |
|  1.2% |  58.5ms | `<module>`                        | `src/black/src/black/__init__.py:1`          |
|  1.2% |  57.4ms | `generate_comments`               | `src/black/src/black/comments.py:52`         |
|  1.1% |  53.0ms | `<module>`                        | `src/black/src/black/nodes.py:1`             |
|  1.0% |  47.9ms | `original_is_simple_lookup_func`  | `src/black/src/black/trans.py:158`           |
|  0.1% |   7.0ms | `addtoken`                        | `src/black/src/blib2to3/pgen2/parse.py:242`  |
|  0.1% |   5.1ms | `format_str`                      | `src/black/src/black/__init__.py:1189`       |
|  0.1% |   4.5ms | `<module>`                        | `venv/bin/black:1`                           |
|  0.1% |   4.0ms | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1037`       |
|  0.1% |   3.0ms | `<module>`                        | `src/black/src/black/comments.py:1`          |
|  0.1% |   2.9ms | `assert_stable`                   | `src/black/src/black/__init__.py:1557`       |
| <0.1% |   1.1ms | `parse_string`                    | `src/black/src/blib2to3/pgen2/driver.py:198` |
| <0.1% |   1.0ms | `transform_line`                  | `src/black/src/black/linegen.py:601`         |
| <0.1% |   0.7ms | `pop`                             | `src/black/src/blib2to3/pgen2/parse.py:398`  |
| <0.1% |   0.6ms | `visit`                           | `src/black/src/black/nodes.py:163`           |
| <0.1% |   0.2ms | `format_file_in_place`            | `src/black/src/black/__init__.py:917`        |

##### Native

|    % |    Time | Function         | Location     |
| ---: | ------: | ---------------- | ------------ |
| 2.4% | 115.2ms | `compile`        | `<built-in>` |
| 1.9% |  88.4ms | `object.__new__` | `<built-in>` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `_format_str_once` (`src/black/src/black/__init__.py:1236`)

|     % |    Time | Caller          | Location                               |
| ----: | ------: | --------------- | -------------------------------------- |
| 67.0% |   1.37s | `format_str`    | `src/black/src/black/__init__.py:1189` |
| 33.0% | 675.0ms | `assert_stable` | `src/black/src/black/__init__.py:1557` |

##### `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`)

|      % |  Time | Caller         | Location                                     |
| -----: | ----: | -------------- | -------------------------------------------- |
| 100.0% | 1.56s | `parse_string` | `src/black/src/blib2to3/pgen2/driver.py:198` |

##### `get_features_used` (`src/black/src/black/__init__.py:1307`)

|      % |    Time | Caller                   | Location                               |
| -----: | ------: | ------------------------ | -------------------------------------- |
| 100.0% | 288.0ms | `detect_target_versions` | `src/black/src/black/__init__.py:1464` |

##### `assert_equivalent` (`src/black/src/black/__init__.py:1524`)

|      % |    Time | Caller                            | Location                               |
| -----: | ------: | --------------------------------- | -------------------------------------- |
| 100.0% | 281.2ms | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1037` |

##### `_stringify_ast` (`src/black/src/black/parsing.py:174`)

|      % |    Time | Caller              | Location                               |
| -----: | ------: | ------------------- | -------------------------------------- |
| 100.0% | 125.0ms | `assert_equivalent` | `src/black/src/black/__init__.py:1524` |

##### `compile` (`<built-in>`)

|      % |    Time | Caller  | Location                       |
| -----: | ------: | ------- | ------------------------------ |
| 100.0% | 115.2ms | `parse` | `usr/lib/python3.11/ast.py:33` |

##### `object.__new__` (`<built-in>`)

|      % |   Time | Caller    | Location                              |
| -----: | -----: | --------- | ------------------------------------- |
| 100.0% | 88.4ms | `__new__` | `src/black/src/blib2to3/pytree.py:81` |

##### `<module>` (`src/black/src/black/__init__.py:1`)

|      % |   Time | Caller     | Location           |
| -----: | -----: | ---------- | ------------------ |
| 100.0% | 58.5ms | `<module>` | `venv/bin/black:1` |

##### `generate_comments` (`src/black/src/black/comments.py:52`)

|      % |   Time | Caller          | Location                             |
| -----: | -----: | --------------- | ------------------------------------ |
| 100.0% | 57.4ms | `visit_default` | `src/black/src/black/linegen.py:134` |

##### `<module>` (`src/black/src/black/nodes.py:1`)

|      % |   Time | Caller     | Location                            |
| -----: | -----: | ---------- | ----------------------------------- |
| 100.0% | 53.0ms | `<module>` | `src/black/src/black/comments.py:1` |

##### `original_is_simple_lookup_func` (`src/black/src/black/trans.py:158`)

|      % |   Time | Caller             | Location                          |
| -----: | -----: | ------------------ | --------------------------------- |
| 100.0% | 47.9ms | `is_simple_lookup` | `src/black/src/black/trans.py:97` |

##### `addtoken` (`src/black/src/blib2to3/pgen2/parse.py:242`)

|      % |  Time | Caller         | Location                                     |
| -----: | ----: | -------------- | -------------------------------------------- |
| 100.0% | 7.0ms | `parse_tokens` | `src/black/src/blib2to3/pgen2/driver.py:114` |

##### `format_str` (`src/black/src/black/__init__.py:1189`)

|      % |  Time | Caller                 | Location                               |
| -----: | ----: | ---------------------- | -------------------------------------- |
| 100.0% | 5.1ms | `format_file_contents` | `src/black/src/black/__init__.py:1054` |

##### `check_stability_and_equivalence` (`src/black/src/black/__init__.py:1037`)

|      % |  Time | Caller                 | Location                               |
| -----: | ----: | ---------------------- | -------------------------------------- |
| 100.0% | 4.0ms | `format_file_contents` | `src/black/src/black/__init__.py:1054` |

##### `<module>` (`src/black/src/black/comments.py:1`)

|      % |  Time | Caller     | Location                            |
| -----: | ----: | ---------- | ----------------------------------- |
| 100.0% | 3.0ms | `<module>` | `src/black/src/black/__init__.py:1` |

##### `assert_stable` (`src/black/src/black/__init__.py:1557`)

|      % |  Time | Caller                            | Location                               |
| -----: | ----: | --------------------------------- | -------------------------------------- |
| 100.0% | 2.9ms | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1037` |

##### `main` (`venv/lib/python3.11/site-packages/click/core.py:1484`)

|      % |  Time | Caller     | Location                                               |
| -----: | ----: | ---------- | ------------------------------------------------------ |
| 100.0% | 2.0ms | `__call__` | `venv/lib/python3.11/site-packages/click/core.py:1629` |

##### `parse_string` (`src/black/src/blib2to3/pgen2/driver.py:198`)

|      % |  Time | Caller          | Location                            |
| -----: | ----: | --------------- | ----------------------------------- |
| 100.0% | 1.1ms | `lib2to3_parse` | `src/black/src/black/parsing.py:55` |

##### `transform_line` (`src/black/src/black/linegen.py:601`)

|      % |  Time | Caller             | Location                               |
| -----: | ----: | ------------------ | -------------------------------------- |
| 100.0% | 1.0ms | `_format_str_once` | `src/black/src/black/__init__.py:1236` |

##### `pop` (`src/black/src/blib2to3/pgen2/parse.py:398`)

|      % |  Time | Caller      | Location                                    |
| -----: | ----: | ----------- | ------------------------------------------- |
| 100.0% | 0.7ms | `_addtoken` | `src/black/src/blib2to3/pgen2/parse.py:290` |

##### `visit` (`src/black/src/black/nodes.py:163`)

|      % |  Time | Caller          | Location                           |
| -----: | ----: | --------------- | ---------------------------------- |
| 100.0% | 0.6ms | `visit_default` | `src/black/src/black/nodes.py:187` |

##### `format_file_in_place` (`src/black/src/black/__init__.py:917`)

|      % |  Time | Caller         | Location                              |
| -----: | ----: | -------------- | ------------------------------------- |
| 100.0% | 0.2ms | `reformat_one` | `src/black/src/black/__init__.py:860` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Function                          | Location                                                   |
| -----: | ------: | --------------------------------- | ---------------------------------------------------------- |
| 100.0% |   4.76s | `<module>`                        | `venv/bin/black:1`                                         |
|  97.5% |   4.64s | `main`                            | `venv/lib/python3.11/site-packages/click/core.py:1484`     |
|  97.5% |   4.64s | `__call__`                        | `venv/lib/python3.11/site-packages/click/core.py:1629`     |
|  97.5% |   4.64s | `patched_main`                    | `src/black/src/black/__init__.py:1594`                     |
|  97.5% |   4.64s | `format_file_in_place`            | `src/black/src/black/__init__.py:917`                      |
|  97.5% |   4.64s | `reformat_one`                    | `src/black/src/black/__init__.py:860`                      |
|  97.5% |   4.64s | `main`                            | `src/black/src/black/__init__.py:244`                      |
|  97.5% |   4.64s | `new_func`                        | `venv/lib/python3.11/site-packages/click/decorators.py:33` |
|  97.5% |   4.64s | `invoke`                          | `venv/lib/python3.11/site-packages/click/core.py:857`      |
|  97.5% |   4.64s | `invoke`                          | `venv/lib/python3.11/site-packages/click/core.py:1401`     |
|  97.5% |   4.64s | `format_file_contents`            | `src/black/src/black/__init__.py:1054`                     |
|  86.3% |   4.10s | `_format_str_once`                | `src/black/src/black/__init__.py:1236`                     |
|  57.8% |   2.75s | `format_str`                      | `src/black/src/black/__init__.py:1189`                     |
|  39.7% |   1.88s | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1037`                     |
|  35.0% |   1.66s | `parse_string`                    | `src/black/src/blib2to3/pgen2/driver.py:198`               |
|  35.0% |   1.66s | `lib2to3_parse`                   | `src/black/src/black/parsing.py:55`                        |
|  35.0% |   1.66s | `parse_tokens`                    | `src/black/src/blib2to3/pgen2/driver.py:114`               |
|  28.6% |   1.36s | `assert_stable`                   | `src/black/src/black/__init__.py:1557`                     |
|  10.9% | 521.4ms | `assert_equivalent`               | `src/black/src/black/__init__.py:1524`                     |
|   6.0% | 288.0ms | `get_features_used`               | `src/black/src/black/__init__.py:1307`                     |

#### Categories

##### Ours

|      % |    Time | Function                          | Location                                     |
| -----: | ------: | --------------------------------- | -------------------------------------------- |
| 100.0% |   4.76s | `<module>`                        | `venv/bin/black:1`                           |
|  97.5% |   4.64s | `patched_main`                    | `src/black/src/black/__init__.py:1594`       |
|  97.5% |   4.64s | `format_file_in_place`            | `src/black/src/black/__init__.py:917`        |
|  97.5% |   4.64s | `reformat_one`                    | `src/black/src/black/__init__.py:860`        |
|  97.5% |   4.64s | `main`                            | `src/black/src/black/__init__.py:244`        |
|  97.5% |   4.64s | `format_file_contents`            | `src/black/src/black/__init__.py:1054`       |
|  86.3% |   4.10s | `_format_str_once`                | `src/black/src/black/__init__.py:1236`       |
|  57.8% |   2.75s | `format_str`                      | `src/black/src/black/__init__.py:1189`       |
|  39.7% |   1.88s | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1037`       |
|  35.0% |   1.66s | `parse_string`                    | `src/black/src/blib2to3/pgen2/driver.py:198` |
|  35.0% |   1.66s | `lib2to3_parse`                   | `src/black/src/black/parsing.py:55`          |
|  35.0% |   1.66s | `parse_tokens`                    | `src/black/src/blib2to3/pgen2/driver.py:114` |
|  28.6% |   1.36s | `assert_stable`                   | `src/black/src/black/__init__.py:1557`       |
|  10.9% | 521.4ms | `assert_equivalent`               | `src/black/src/black/__init__.py:1524`       |
|   6.0% | 288.0ms | `get_features_used`               | `src/black/src/black/__init__.py:1307`       |
|   6.0% | 288.0ms | `detect_target_versions`          | `src/black/src/black/__init__.py:1464`       |
|   2.6% | 125.0ms | `_stringify_ast`                  | `src/black/src/black/parsing.py:174`         |
|   2.4% | 115.2ms | `_parse_single_version`           | `src/black/src/black/parsing.py:117`         |
|   2.4% | 115.2ms | `parse_ast`                       | `src/black/src/black/parsing.py:129`         |
|   2.4% | 114.5ms | `<module>`                        | `src/black/src/black/__init__.py:1`          |

##### Native

|    % |    Time | Function         | Location     |
| ---: | ------: | ---------------- | ------------ |
| 2.4% | 115.2ms | `compile`        | `<built-in>` |
| 1.9% |  88.4ms | `object.__new__` | `<built-in>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `<module>` (`venv/bin/black:1`)

|     % |    Time | Callee         | Location                               |
| ----: | ------: | -------------- | -------------------------------------- |
| 97.5% |   4.64s | `patched_main` | `src/black/src/black/__init__.py:1594` |
|  2.4% | 114.5ms | `<module>`     | `src/black/src/black/__init__.py:1`    |

##### `main` (`venv/lib/python3.11/site-packages/click/core.py:1484`)

|      % |  Time | Callee   | Location                                               |
| -----: | ----: | -------- | ------------------------------------------------------ |
| 100.0% | 4.64s | `invoke` | `venv/lib/python3.11/site-packages/click/core.py:1401` |

##### `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1629`)

|      % |  Time | Callee | Location                                               |
| -----: | ----: | ------ | ------------------------------------------------------ |
| 100.0% | 4.64s | `main` | `venv/lib/python3.11/site-packages/click/core.py:1484` |

##### `patched_main` (`src/black/src/black/__init__.py:1594`)

|      % |  Time | Callee     | Location                                               |
| -----: | ----: | ---------- | ------------------------------------------------------ |
| 100.0% | 4.64s | `__call__` | `venv/lib/python3.11/site-packages/click/core.py:1629` |

##### `format_file_in_place` (`src/black/src/black/__init__.py:917`)

|      % |  Time | Callee                 | Location                               |
| -----: | ----: | ---------------------- | -------------------------------------- |
| 100.0% | 4.64s | `format_file_contents` | `src/black/src/black/__init__.py:1054` |

##### `reformat_one` (`src/black/src/black/__init__.py:860`)

|      % |  Time | Callee                 | Location                              |
| -----: | ----: | ---------------------- | ------------------------------------- |
| 100.0% | 4.64s | `format_file_in_place` | `src/black/src/black/__init__.py:917` |

##### `main` (`src/black/src/black/__init__.py:244`)

|      % |  Time | Callee         | Location                              |
| -----: | ----: | -------------- | ------------------------------------- |
| 100.0% | 4.64s | `reformat_one` | `src/black/src/black/__init__.py:860` |

##### `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |  Time | Callee | Location                              |
| -----: | ----: | ------ | ------------------------------------- |
| 100.0% | 4.64s | `main` | `src/black/src/black/__init__.py:244` |

##### `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`)

|      % |  Time | Callee     | Location                                                   |
| -----: | ----: | ---------- | ---------------------------------------------------------- |
| 100.0% | 4.64s | `new_func` | `venv/lib/python3.11/site-packages/click/decorators.py:33` |

##### `invoke` (`venv/lib/python3.11/site-packages/click/core.py:1401`)

|      % |  Time | Callee   | Location                                              |
| -----: | ----: | -------- | ----------------------------------------------------- |
| 100.0% | 4.64s | `invoke` | `venv/lib/python3.11/site-packages/click/core.py:857` |

##### `format_file_contents` (`src/black/src/black/__init__.py:1054`)

|     % |  Time | Callee                            | Location                               |
| ----: | ----: | --------------------------------- | -------------------------------------- |
| 59.3% | 2.75s | `format_str`                      | `src/black/src/black/__init__.py:1189` |
| 40.7% | 1.88s | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1037` |

##### `_format_str_once` (`src/black/src/black/__init__.py:1236`)

|     % |    Time | Callee                   | Location                               |
| ----: | ------: | ------------------------ | -------------------------------------- |
| 40.6% |   1.66s | `lib2to3_parse`          | `src/black/src/black/parsing.py:55`    |
|  7.0% | 288.0ms | `detect_target_versions` | `src/black/src/black/__init__.py:1464` |
|  1.4% |  58.0ms | `visit`                  | `src/black/src/black/nodes.py:163`     |
|  1.2% |  49.0ms | `transform_line`         | `src/black/src/black/linegen.py:601`   |

##### `format_str` (`src/black/src/black/__init__.py:1189`)

|     % |  Time | Callee             | Location                               |
| ----: | ----: | ------------------ | -------------------------------------- |
| 99.8% | 2.74s | `_format_str_once` | `src/black/src/black/__init__.py:1236` |

##### `check_stability_and_equivalence` (`src/black/src/black/__init__.py:1037`)

|     % |    Time | Callee              | Location                               |
| ----: | ------: | ------------------- | -------------------------------------- |
| 72.2% |   1.36s | `assert_stable`     | `src/black/src/black/__init__.py:1557` |
| 27.6% | 521.4ms | `assert_equivalent` | `src/black/src/black/__init__.py:1524` |

##### `parse_string` (`src/black/src/blib2to3/pgen2/driver.py:198`)

|     % |  Time | Callee         | Location                                     |
| ----: | ----: | -------------- | -------------------------------------------- |
| 99.9% | 1.66s | `parse_tokens` | `src/black/src/blib2to3/pgen2/driver.py:114` |

##### `lib2to3_parse` (`src/black/src/black/parsing.py:55`)

|      % |  Time | Callee         | Location                                     |
| -----: | ----: | -------------- | -------------------------------------------- |
| 100.0% | 1.66s | `parse_string` | `src/black/src/blib2to3/pgen2/driver.py:198` |

##### `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`)

|    % |   Time | Callee     | Location                                    |
| ---: | -----: | ---------- | ------------------------------------------- |
| 5.8% | 96.0ms | `addtoken` | `src/black/src/blib2to3/pgen2/parse.py:242` |

##### `assert_stable` (`src/black/src/black/__init__.py:1557`)

|     % |  Time | Callee             | Location                               |
| ----: | ----: | ------------------ | -------------------------------------- |
| 99.8% | 1.36s | `_format_str_once` | `src/black/src/black/__init__.py:1236` |

##### `assert_equivalent` (`src/black/src/black/__init__.py:1524`)

|     % |    Time | Callee           | Location                             |
| ----: | ------: | ---------------- | ------------------------------------ |
| 24.0% | 125.0ms | `_stringify_ast` | `src/black/src/black/parsing.py:174` |
| 22.1% | 115.2ms | `parse_ast`      | `src/black/src/black/parsing.py:129` |

##### `detect_target_versions` (`src/black/src/black/__init__.py:1464`)

|      % |    Time | Callee              | Location                               |
| -----: | ------: | ------------------- | -------------------------------------- |
| 100.0% | 288.0ms | `get_features_used` | `src/black/src/black/__init__.py:1307` |

##### `_parse_single_version` (`src/black/src/black/parsing.py:117`)

|      % |    Time | Callee  | Location                       |
| -----: | ------: | ------- | ------------------------------ |
| 100.0% | 115.2ms | `parse` | `usr/lib/python3.11/ast.py:33` |

##### `parse_ast` (`src/black/src/black/parsing.py:129`)

|      % |    Time | Callee                  | Location                             |
| -----: | ------: | ----------------------- | ------------------------------------ |
| 100.0% | 115.2ms | `_parse_single_version` | `src/black/src/black/parsing.py:117` |

##### `<module>` (`src/black/src/black/__init__.py:1`)

|     % |   Time | Callee     | Location                            |
| ----: | -----: | ---------- | ----------------------------------- |
| 48.9% | 56.0ms | `<module>` | `src/black/src/black/comments.py:1` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `<module>` (`venv/bin/black:1`)

|     % |    Time | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28.8% |   1.37s | `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 21.8% |   1.03s | `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`src/black/src/black/parsing.py:55`) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 14.2% | 675.0ms | `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `assert_stable` (1557) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 11.2% | 531.9ms | `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`src/black/src/black/parsing.py:55`) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `assert_stable` (1557) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  5.9% | 281.2ms | `assert_equivalent` (`src/black/src/black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  4.0% | 192.0ms | `get_features_used` (`src/black/src/black/__init__.py:1307`) ← `detect_target_versions` (1464) ← `_format_str_once` (1236) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.6% | 125.0ms | `_stringify_ast` (`src/black/src/black/parsing.py:174`) ← `assert_equivalent` (`src/black/src/black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  2.4% | 115.2ms | `compile` (`<built-in>`) ← `parse` (`usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`src/black/src/black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`src/black/src/black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.0% |  96.0ms | `get_features_used` (`src/black/src/black/__init__.py:1307`) ← `detect_target_versions` (1464) ← `_format_str_once` (1236) ← `assert_stable` (1557) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.9% |  88.4ms | `object.__new__` (`<built-in>`) ← `__new__` (`src/black/src/blib2to3/pytree.py:81`) ← `convert` (486) ← `pop` (`src/black/src/blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`src/black/src/black/parsing.py:55`) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.2% |  58.5ms | `<module>` (`src/black/src/black/__init__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.2% |  57.4ms | `generate_comments` (`src/black/src/black/comments.py:52`) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_stmt` (`src/black/src/black/linegen.py:199`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_funcdef` (`src/black/src/black/linegen.py:254`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `assert_stable` (1557) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1594`) |
|  1.1% |  53.0ms | `<module>` (`src/black/src/black/nodes.py:1`) ← `<module>` (`src/black/src/black/comments.py:1`) ← `<module>` (`src/black/src/black/__init__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.0% |  47.9ms | `original_is_simple_lookup_func` (`src/black/src/black/trans.py:158`) ← `is_simple_lookup` (97) ← `is_simple_operand` (114) ← `hug_power_op` (85) ← `_hugging_power_ops_line_to_string` (`src/black/src/black/linegen.py:590`) ← `transform_line` (601) ← `run_transformer` (1755) ← `transform_line` (601) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.1% |   7.0ms | `addtoken` (`src/black/src/blib2to3/pgen2/parse.py:242`) ← `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`src/black/src/black/parsing.py:55`) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.1% |   5.1ms | `format_str` (`src/black/src/black/__init__.py:1189`) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |   4.0ms | `check_stability_and_equivalence` (`src/black/src/black/__init__.py:1037`) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.1% |   3.0ms | `<module>` (`src/black/src/black/comments.py:1`) ← `<module>` (`src/black/src/black/__init__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.1% |   2.9ms | `assert_stable` (`src/black/src/black/__init__.py:1557`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| <0.1% |   2.0ms | `main` (`venv/lib/python3.11/site-packages/click/core.py:1484`) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

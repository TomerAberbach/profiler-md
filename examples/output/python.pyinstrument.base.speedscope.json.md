# Sampling profile

Took 5.19s over 35 samples (148.4ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| Ours        | 95.2% |   4.94s |      32 |
| Native      |  4.8% | 249.2ms |       2 |
| Third-party | <0.1% |   1.0ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                           | Location                                     |
| ----: | ------: | ------: | -------------------------------------------------- | -------------------------------------------- |
| 42.7% |   2.21s |       3 | `_format_str_once`                                 | `src/black/src/black/__init__.py:1236`       |
| 32.3% |   1.67s |       3 | `parse_tokens`                                     | `src/black/src/blib2to3/pgen2/driver.py:114` |
|  5.8% | 301.9ms |       3 | `get_features_used`                                | `src/black/src/black/__init__.py:1307`       |
|  5.3% | 275.9ms |       1 | `assert_equivalent`                                | `src/black/src/black/__init__.py:1524`       |
|  2.1% | 110.2ms |       1 | `object.__new__`                                   | `<built-in>`                                 |
|  1.5% |  79.9ms |       2 | `_stringify_ast`                                   | `src/black/src/black/parsing.py:174`         |
|  1.3% |  68.4ms |       1 | `visit_default`                                    | `src/black/src/black/linegen.py:134`         |
|  1.3% |  67.4ms |       1 | `<module>`                                         | `src/black/src/black/__init__.py:1`          |
|  1.1% |  58.6ms |       1 | `<module>`                                         | `src/black/src/black/nodes.py:1`             |
|  1.1% |  55.9ms |       1 | `contains_implicit_multiline_string_with_comments` | `src/black/src/black/lines.py:261`           |
|  1.1% |  55.0ms |       1 | `_stringify_ast_with_new_parent`                   | `src/black/src/black/parsing.py:166`         |
|  1.0% |  52.0ms |       1 | `convert_one_fmt_off_pair`                         | `src/black/src/black/comments.py:177`        |
|  0.1% |   6.1ms |       1 | `format_str`                                       | `src/black/src/black/__init__.py:1189`       |
|  0.1% |   5.1ms |       1 | `<module>`                                         | `venv/bin/black:1`                           |
|  0.1% |   4.1ms |       1 | `check_stability_and_equivalence`                  | `src/black/src/black/__init__.py:1037`       |
|  0.1% |   3.4ms |       1 | `assert_stable`                                    | `src/black/src/black/__init__.py:1557`       |
|  0.1% |   3.0ms |       1 | `shift`                                            | `src/black/src/blib2to3/pgen2/parse.py:373`  |
|  0.1% |   2.9ms |       1 | `<module>`                                         | `src/black/src/black/comments.py:1`          |
| <0.1% |   2.0ms |       1 | `format_file_in_place`                             | `src/black/src/black/__init__.py:917`        |
| <0.1% |   1.0ms |       1 | `lib2to3_parse`                                    | `src/black/src/black/parsing.py:55`          |

#### Categories

##### Ours

|     % |    Time | Samples | Function                                           | Location                                     |
| ----: | ------: | ------: | -------------------------------------------------- | -------------------------------------------- |
| 42.7% |   2.21s |       3 | `_format_str_once`                                 | `src/black/src/black/__init__.py:1236`       |
| 32.3% |   1.67s |       3 | `parse_tokens`                                     | `src/black/src/blib2to3/pgen2/driver.py:114` |
|  5.8% | 301.9ms |       3 | `get_features_used`                                | `src/black/src/black/__init__.py:1307`       |
|  5.3% | 275.9ms |       1 | `assert_equivalent`                                | `src/black/src/black/__init__.py:1524`       |
|  1.5% |  79.9ms |       2 | `_stringify_ast`                                   | `src/black/src/black/parsing.py:174`         |
|  1.3% |  68.4ms |       1 | `visit_default`                                    | `src/black/src/black/linegen.py:134`         |
|  1.3% |  67.4ms |       1 | `<module>`                                         | `src/black/src/black/__init__.py:1`          |
|  1.1% |  58.6ms |       1 | `<module>`                                         | `src/black/src/black/nodes.py:1`             |
|  1.1% |  55.9ms |       1 | `contains_implicit_multiline_string_with_comments` | `src/black/src/black/lines.py:261`           |
|  1.1% |  55.0ms |       1 | `_stringify_ast_with_new_parent`                   | `src/black/src/black/parsing.py:166`         |
|  1.0% |  52.0ms |       1 | `convert_one_fmt_off_pair`                         | `src/black/src/black/comments.py:177`        |
|  0.1% |   6.1ms |       1 | `format_str`                                       | `src/black/src/black/__init__.py:1189`       |
|  0.1% |   5.1ms |       1 | `<module>`                                         | `venv/bin/black:1`                           |
|  0.1% |   4.1ms |       1 | `check_stability_and_equivalence`                  | `src/black/src/black/__init__.py:1037`       |
|  0.1% |   3.4ms |       1 | `assert_stable`                                    | `src/black/src/black/__init__.py:1557`       |
|  0.1% |   3.0ms |       1 | `shift`                                            | `src/black/src/blib2to3/pgen2/parse.py:373`  |
|  0.1% |   2.9ms |       1 | `<module>`                                         | `src/black/src/black/comments.py:1`          |
| <0.1% |   2.0ms |       1 | `format_file_in_place`                             | `src/black/src/black/__init__.py:917`        |
| <0.1% |   1.0ms |       1 | `lib2to3_parse`                                    | `src/black/src/black/parsing.py:55`          |
| <0.1% |   1.0ms |       1 | `main`                                             | `src/black/src/black/__init__.py:244`        |

##### Native

|    % |    Time | Samples | Function         | Location     |
| ---: | ------: | ------: | ---------------- | ------------ |
| 2.1% | 110.2ms |       1 | `object.__new__` | `<built-in>` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `_format_str_once` (`src/black/src/black/__init__.py:1236`)

|     % |    Time | Samples | Caller          | Location                               |
| ----: | ------: | ------: | --------------- | -------------------------------------- |
| 66.6% |   1.47s |       2 | `format_str`    | `src/black/src/black/__init__.py:1189` |
| 33.4% | 742.0ms |       1 | `assert_stable` | `src/black/src/black/__init__.py:1557` |

##### `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`)

|      % |  Time | Samples | Caller         | Location                                     |
| -----: | ----: | ------: | -------------- | -------------------------------------------- |
| 100.0% | 1.67s |       3 | `parse_string` | `src/black/src/blib2to3/pgen2/driver.py:198` |

##### `get_features_used` (`src/black/src/black/__init__.py:1307`)

|      % |    Time | Samples | Caller                   | Location                               |
| -----: | ------: | ------: | ------------------------ | -------------------------------------- |
| 100.0% | 301.9ms |       3 | `detect_target_versions` | `src/black/src/black/__init__.py:1464` |

##### `assert_equivalent` (`src/black/src/black/__init__.py:1524`)

|      % |    Time | Samples | Caller                            | Location                               |
| -----: | ------: | ------: | --------------------------------- | -------------------------------------- |
| 100.0% | 275.9ms |       1 | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1037` |

##### `object.__new__` (`<built-in>`)

|      % |    Time | Samples | Caller    | Location                              |
| -----: | ------: | ------: | --------- | ------------------------------------- |
| 100.0% | 110.2ms |       1 | `__new__` | `src/black/src/blib2to3/pytree.py:81` |

##### `_stringify_ast` (`src/black/src/black/parsing.py:174`)

|      % |   Time | Samples | Caller              | Location                               |
| -----: | -----: | ------: | ------------------- | -------------------------------------- |
| 100.0% | 79.9ms |       2 | `assert_equivalent` | `src/black/src/black/__init__.py:1524` |

##### `visit_default` (`src/black/src/black/linegen.py:134`)

|      % |   Time | Samples | Caller  | Location                           |
| -----: | -----: | ------: | ------- | ---------------------------------- |
| 100.0% | 68.4ms |       1 | `visit` | `src/black/src/black/nodes.py:163` |

##### `<module>` (`src/black/src/black/__init__.py:1`)

|      % |   Time | Samples | Caller     | Location           |
| -----: | -----: | ------: | ---------- | ------------------ |
| 100.0% | 67.4ms |       1 | `<module>` | `venv/bin/black:1` |

##### `<module>` (`src/black/src/black/nodes.py:1`)

|      % |   Time | Samples | Caller     | Location                            |
| -----: | -----: | ------: | ---------- | ----------------------------------- |
| 100.0% | 58.6ms |       1 | `<module>` | `src/black/src/black/comments.py:1` |

##### `contains_implicit_multiline_string_with_comments` (`src/black/src/black/lines.py:261`)

|      % |   Time | Samples | Caller           | Location                             |
| -----: | -----: | ------: | ---------------- | ------------------------------------ |
| 100.0% | 55.9ms |       1 | `transform_line` | `src/black/src/black/linegen.py:601` |

##### `_stringify_ast_with_new_parent` (`src/black/src/black/parsing.py:166`)

|      % |   Time | Samples | Caller           | Location                             |
| -----: | -----: | ------: | ---------------- | ------------------------------------ |
| 100.0% | 55.0ms |       1 | `_stringify_ast` | `src/black/src/black/parsing.py:174` |

##### `convert_one_fmt_off_pair` (`src/black/src/black/comments.py:177`)

|      % |   Time | Samples | Caller              | Location                              |
| -----: | -----: | ------: | ------------------- | ------------------------------------- |
| 100.0% | 52.0ms |       1 | `normalize_fmt_off` | `src/black/src/black/comments.py:168` |

##### `format_str` (`src/black/src/black/__init__.py:1189`)

|      % |  Time | Samples | Caller                 | Location                               |
| -----: | ----: | ------: | ---------------------- | -------------------------------------- |
| 100.0% | 6.1ms |       1 | `format_file_contents` | `src/black/src/black/__init__.py:1054` |

##### `check_stability_and_equivalence` (`src/black/src/black/__init__.py:1037`)

|      % |  Time | Samples | Caller                 | Location                               |
| -----: | ----: | ------: | ---------------------- | -------------------------------------- |
| 100.0% | 4.1ms |       1 | `format_file_contents` | `src/black/src/black/__init__.py:1054` |

##### `assert_stable` (`src/black/src/black/__init__.py:1557`)

|      % |  Time | Samples | Caller                            | Location                               |
| -----: | ----: | ------: | --------------------------------- | -------------------------------------- |
| 100.0% | 3.4ms |       1 | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1037` |

##### `shift` (`src/black/src/blib2to3/pgen2/parse.py:373`)

|      % |  Time | Samples | Caller      | Location                                    |
| -----: | ----: | ------: | ----------- | ------------------------------------------- |
| 100.0% | 3.0ms |       1 | `_addtoken` | `src/black/src/blib2to3/pgen2/parse.py:290` |

##### `<module>` (`src/black/src/black/comments.py:1`)

|      % |  Time | Samples | Caller     | Location                            |
| -----: | ----: | ------: | ---------- | ----------------------------------- |
| 100.0% | 2.9ms |       1 | `<module>` | `src/black/src/black/__init__.py:1` |

##### `format_file_in_place` (`src/black/src/black/__init__.py:917`)

|      % |  Time | Samples | Caller         | Location                              |
| -----: | ----: | ------: | -------------- | ------------------------------------- |
| 100.0% | 2.0ms |       1 | `reformat_one` | `src/black/src/black/__init__.py:860` |

##### `lib2to3_parse` (`src/black/src/black/parsing.py:55`)

|      % |  Time | Samples | Caller             | Location                               |
| -----: | ----: | ------: | ------------------ | -------------------------------------- |
| 100.0% | 1.0ms |       1 | `_format_str_once` | `src/black/src/black/__init__.py:1236` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                          | Location                                               |
| -----: | ------: | ------: | --------------------------------- | ------------------------------------------------------ |
| 100.0% |   5.19s |      35 | `<module>`                        | `venv/bin/black:1`                                     |
|  97.4% |   5.06s |      31 | `__call__`                        | `venv/lib/python3.11/site-packages/click/core.py:1567` |
|  97.4% |   5.06s |      31 | `patched_main`                    | `src/black/src/black/__init__.py:1594`                 |
|  97.4% |   5.05s |      30 | `main`                            | `src/black/src/black/__init__.py:244`                  |
|  97.4% |   5.05s |      29 | `format_file_in_place`            | `src/black/src/black/__init__.py:917`                  |
|  97.4% |   5.05s |      29 | `reformat_one`                    | `src/black/src/black/__init__.py:860`                  |
|  97.3% |   5.05s |      28 | `format_file_contents`            | `src/black/src/black/__init__.py:1054`                 |
|  86.5% |   4.49s |      20 | `_format_str_once`                | `src/black/src/black/__init__.py:1236`                 |
|  58.3% |   3.02s |      16 | `format_str`                      | `src/black/src/black/__init__.py:1189`                 |
|  39.0% |   2.02s |      12 | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1037`                 |
|  34.5% |   1.79s |       9 | `lib2to3_parse`                   | `src/black/src/black/parsing.py:55`                    |
|  34.5% |   1.79s |       8 | `parse_string`                    | `src/black/src/blib2to3/pgen2/driver.py:198`           |
|  34.5% |   1.79s |       7 | `parse_tokens`                    | `src/black/src/blib2to3/pgen2/driver.py:114`           |
|  28.4% |   1.47s |       6 | `assert_stable`                   | `src/black/src/black/__init__.py:1557`                 |
|  10.6% | 549.8ms |       5 | `assert_equivalent`               | `src/black/src/black/__init__.py:1524`                 |
|   5.8% | 301.9ms |       3 | `get_features_used`               | `src/black/src/black/__init__.py:1307`                 |
|   5.8% | 301.9ms |       3 | `detect_target_versions`          | `src/black/src/black/__init__.py:1464`                 |
|   2.7% | 139.0ms |       1 | `parse`                           | `usr/lib/python3.11/ast.py:33`                         |
|   2.7% | 139.0ms |       1 | `_parse_single_version`           | `src/black/src/black/parsing.py:117`                   |
|   2.7% | 139.0ms |       1 | `parse_ast`                       | `src/black/src/black/parsing.py:129`                   |

#### Categories

##### Ours

|      % |    Time | Samples | Function                          | Location                                     |
| -----: | ------: | ------: | --------------------------------- | -------------------------------------------- |
| 100.0% |   5.19s |      35 | `<module>`                        | `venv/bin/black:1`                           |
|  97.4% |   5.06s |      31 | `patched_main`                    | `src/black/src/black/__init__.py:1594`       |
|  97.4% |   5.05s |      30 | `main`                            | `src/black/src/black/__init__.py:244`        |
|  97.4% |   5.05s |      29 | `format_file_in_place`            | `src/black/src/black/__init__.py:917`        |
|  97.4% |   5.05s |      29 | `reformat_one`                    | `src/black/src/black/__init__.py:860`        |
|  97.3% |   5.05s |      28 | `format_file_contents`            | `src/black/src/black/__init__.py:1054`       |
|  86.5% |   4.49s |      20 | `_format_str_once`                | `src/black/src/black/__init__.py:1236`       |
|  58.3% |   3.02s |      16 | `format_str`                      | `src/black/src/black/__init__.py:1189`       |
|  39.0% |   2.02s |      12 | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1037`       |
|  34.5% |   1.79s |       9 | `lib2to3_parse`                   | `src/black/src/black/parsing.py:55`          |
|  34.5% |   1.79s |       8 | `parse_string`                    | `src/black/src/blib2to3/pgen2/driver.py:198` |
|  34.5% |   1.79s |       7 | `parse_tokens`                    | `src/black/src/blib2to3/pgen2/driver.py:114` |
|  28.4% |   1.47s |       6 | `assert_stable`                   | `src/black/src/black/__init__.py:1557`       |
|  10.6% | 549.8ms |       5 | `assert_equivalent`               | `src/black/src/black/__init__.py:1524`       |
|   5.8% | 301.9ms |       3 | `get_features_used`               | `src/black/src/black/__init__.py:1307`       |
|   5.8% | 301.9ms |       3 | `detect_target_versions`          | `src/black/src/black/__init__.py:1464`       |
|   2.7% | 139.0ms |       1 | `_parse_single_version`           | `src/black/src/black/parsing.py:117`         |
|   2.7% | 139.0ms |       1 | `parse_ast`                       | `src/black/src/black/parsing.py:129`         |
|   2.6% | 134.9ms |       3 | `_stringify_ast`                  | `src/black/src/black/parsing.py:174`         |
|   2.5% | 128.9ms |       3 | `<module>`                        | `src/black/src/black/__init__.py:1`          |

##### Native

|    % |    Time | Samples | Function         | Location     |
| ---: | ------: | ------: | ---------------- | ------------ |
| 2.1% | 110.2ms |       1 | `object.__new__` | `<built-in>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `<module>` (`venv/bin/black:1`)

|     % |    Time | Samples | Callee         | Location                               |
| ----: | ------: | ------: | -------------- | -------------------------------------- |
| 97.4% |   5.06s |      31 | `patched_main` | `src/black/src/black/__init__.py:1594` |
|  2.5% | 128.9ms |       3 | `<module>`     | `src/black/src/black/__init__.py:1`    |

##### `patched_main` (`src/black/src/black/__init__.py:1594`)

|      % |  Time | Samples | Callee     | Location                                               |
| -----: | ----: | ------: | ---------- | ------------------------------------------------------ |
| 100.0% | 5.06s |      31 | `__call__` | `venv/lib/python3.11/site-packages/click/core.py:1567` |

##### `main` (`src/black/src/black/__init__.py:244`)

|      % |  Time | Samples | Callee         | Location                              |
| -----: | ----: | ------: | -------------- | ------------------------------------- |
| 100.0% | 5.05s |      29 | `reformat_one` | `src/black/src/black/__init__.py:860` |

##### `format_file_in_place` (`src/black/src/black/__init__.py:917`)

|      % |  Time | Samples | Callee                 | Location                               |
| -----: | ----: | ------: | ---------------------- | -------------------------------------- |
| 100.0% | 5.05s |      28 | `format_file_contents` | `src/black/src/black/__init__.py:1054` |

##### `reformat_one` (`src/black/src/black/__init__.py:860`)

|      % |  Time | Samples | Callee                 | Location                              |
| -----: | ----: | ------: | ---------------------- | ------------------------------------- |
| 100.0% | 5.05s |      29 | `format_file_in_place` | `src/black/src/black/__init__.py:917` |

##### `format_file_contents` (`src/black/src/black/__init__.py:1054`)

|     % |  Time | Samples | Callee                            | Location                               |
| ----: | ----: | ------: | --------------------------------- | -------------------------------------- |
| 59.9% | 3.02s |      16 | `format_str`                      | `src/black/src/black/__init__.py:1189` |
| 40.1% | 2.02s |      12 | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1037` |

##### `_format_str_once` (`src/black/src/black/__init__.py:1236`)

|     % |    Time | Samples | Callee                   | Location                               |
| ----: | ------: | ------: | ------------------------ | -------------------------------------- |
| 39.9% |   1.79s |       9 | `lib2to3_parse`          | `src/black/src/black/parsing.py:55`    |
|  6.7% | 301.9ms |       3 | `detect_target_versions` | `src/black/src/black/__init__.py:1464` |
|  1.5% |  69.0ms |       2 | `visit`                  | `src/black/src/black/nodes.py:163`     |
|  1.2% |  56.0ms |       2 | `transform_line`         | `src/black/src/black/linegen.py:601`   |
|  1.2% |  52.0ms |       1 | `normalize_fmt_off`      | `src/black/src/black/comments.py:168`  |

##### `format_str` (`src/black/src/black/__init__.py:1189`)

|     % |  Time | Samples | Callee             | Location                               |
| ----: | ----: | ------: | ------------------ | -------------------------------------- |
| 99.8% | 3.02s |      15 | `_format_str_once` | `src/black/src/black/__init__.py:1236` |

##### `check_stability_and_equivalence` (`src/black/src/black/__init__.py:1037`)

|     % |    Time | Samples | Callee              | Location                               |
| ----: | ------: | ------: | ------------------- | -------------------------------------- |
| 72.7% |   1.47s |       6 | `assert_stable`     | `src/black/src/black/__init__.py:1557` |
| 27.1% | 549.8ms |       5 | `assert_equivalent` | `src/black/src/black/__init__.py:1524` |

##### `lib2to3_parse` (`src/black/src/black/parsing.py:55`)

|     % |  Time | Samples | Callee         | Location                                     |
| ----: | ----: | ------: | -------------- | -------------------------------------------- |
| 99.9% | 1.79s |       8 | `parse_string` | `src/black/src/blib2to3/pgen2/driver.py:198` |

##### `parse_string` (`src/black/src/blib2to3/pgen2/driver.py:198`)

|      % |  Time | Samples | Callee         | Location                                     |
| -----: | ----: | ------: | -------------- | -------------------------------------------- |
| 100.0% | 1.79s |       7 | `parse_tokens` | `src/black/src/blib2to3/pgen2/driver.py:114` |

##### `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`)

|    % |    Time | Samples | Callee     | Location                                    |
| ---: | ------: | ------: | ---------- | ------------------------------------------- |
| 6.4% | 115.0ms |       4 | `addtoken` | `src/black/src/blib2to3/pgen2/parse.py:242` |

##### `assert_stable` (`src/black/src/black/__init__.py:1557`)

|     % |  Time | Samples | Callee             | Location                               |
| ----: | ----: | ------: | ------------------ | -------------------------------------- |
| 99.8% | 1.47s |       5 | `_format_str_once` | `src/black/src/black/__init__.py:1236` |

##### `assert_equivalent` (`src/black/src/black/__init__.py:1524`)

|     % |    Time | Samples | Callee           | Location                             |
| ----: | ------: | ------: | ---------------- | ------------------------------------ |
| 25.3% | 139.0ms |       1 | `parse_ast`      | `src/black/src/black/parsing.py:129` |
| 24.5% | 134.9ms |       3 | `_stringify_ast` | `src/black/src/black/parsing.py:174` |

##### `detect_target_versions` (`src/black/src/black/__init__.py:1464`)

|      % |    Time | Samples | Callee              | Location                               |
| -----: | ------: | ------: | ------------------- | -------------------------------------- |
| 100.0% | 301.9ms |       3 | `get_features_used` | `src/black/src/black/__init__.py:1307` |

##### `_parse_single_version` (`src/black/src/black/parsing.py:117`)

|      % |    Time | Samples | Callee  | Location                       |
| -----: | ------: | ------: | ------- | ------------------------------ |
| 100.0% | 139.0ms |       1 | `parse` | `usr/lib/python3.11/ast.py:33` |

##### `parse_ast` (`src/black/src/black/parsing.py:129`)

|      % |    Time | Samples | Callee                  | Location                             |
| -----: | ------: | ------: | ----------------------- | ------------------------------------ |
| 100.0% | 139.0ms |       1 | `_parse_single_version` | `src/black/src/black/parsing.py:117` |

##### `_stringify_ast` (`src/black/src/black/parsing.py:174`)

|     % |   Time | Samples | Callee                           | Location                             |
| ----: | -----: | ------: | -------------------------------- | ------------------------------------ |
| 40.8% | 55.0ms |       1 | `_stringify_ast_with_new_parent` | `src/black/src/black/parsing.py:166` |

##### `<module>` (`src/black/src/black/__init__.py:1`)

|     % |   Time | Samples | Callee     | Location                            |
| ----: | -----: | ------: | ---------- | ----------------------------------- |
| 47.7% | 61.5ms |       2 | `<module>` | `src/black/src/black/comments.py:1` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame. `…` stands for frames the entry filter hides.

Common call stack: `<module>` (`venv/bin/black:1`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28.5% |   1.47s |       2 | `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 21.5% |   1.11s |       2 | `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`src/black/src/black/parsing.py:55`) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 14.3% | 742.0ms |       1 | `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `assert_stable` (1557) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 10.8% | 558.8ms |       1 | `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`src/black/src/black/parsing.py:55`) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `assert_stable` (1557) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  5.3% | 275.9ms |       1 | `assert_equivalent` (`src/black/src/black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  3.9% | 200.9ms |       2 | `get_features_used` (`src/black/src/black/__init__.py:1307`) ← `detect_target_versions` (1464) ← `_format_str_once` (1236) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.7% | 139.0ms |       1 | `parse` (`usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`src/black/src/black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`src/black/src/black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.1% | 110.2ms |       1 | `object.__new__` (`<built-in>`) ← `__new__` (`src/black/src/blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`src/black/src/blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`src/black/src/black/parsing.py:55`) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.9% | 101.0ms |       1 | `get_features_used` (`src/black/src/black/__init__.py:1307`) ← `detect_target_versions` (1464) ← `_format_str_once` (1236) ← `assert_stable` (1557) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.5% |  79.9ms |       2 | `_stringify_ast` (`src/black/src/black/parsing.py:174`) ← `assert_equivalent` (`src/black/src/black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.3% |  68.4ms |       1 | `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_stmt` (`src/black/src/black/linegen.py:199`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_funcdef` (`src/black/src/black/linegen.py:254`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `assert_stable` (1557) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`) |
|  1.3% |  67.4ms |       1 | `<module>` (`src/black/src/black/__init__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.1% |  58.6ms |       1 | `<module>` (`src/black/src/black/nodes.py:1`) ← `<module>` (`src/black/src/black/comments.py:1`) ← `<module>` (`src/black/src/black/__init__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.1% |  55.9ms |       1 | `contains_implicit_multiline_string_with_comments` (`src/black/src/black/lines.py:261`) ← `transform_line` (`src/black/src/black/linegen.py:601`) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.1% |  55.0ms |       1 | `_stringify_ast_with_new_parent` (`src/black/src/black/parsing.py:166`) ← `_stringify_ast` (174) ← `assert_equivalent` (`src/black/src/black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.0% |  52.0ms |       1 | `convert_one_fmt_off_pair` (`src/black/src/black/comments.py:177`) ← `normalize_fmt_off` (168) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.1% |   6.1ms |       1 | `format_str` (`src/black/src/black/__init__.py:1189`) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.1% |   4.1ms |       1 | `check_stability_and_equivalence` (`src/black/src/black/__init__.py:1037`) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.1% |   3.4ms |       1 | `assert_stable` (`src/black/src/black/__init__.py:1557`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.1% |   3.0ms |       1 | `shift` (`src/black/src/blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`src/black/src/black/parsing.py:55`) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

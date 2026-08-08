# Sampling profile

Took 7.74s over 35 samples (221.3ms per sample).

| Category    |     % |    Time | Samples |
| ----------- | ----: | ------: | ------: |
| Ours        | 95.6% |   7.40s |      33 |
| Native      |  4.4% | 337.3ms |       1 |
| Third-party | <0.1% |   1.0ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

#### Categories

##### Ours

|     % |    Time | Samples | Function                          | Location                                     |
| ----: | ------: | ------: | --------------------------------- | -------------------------------------------- |
| 37.9% |   2.93s |       3 | `_format_str_once`                | `src/black/src/black/__init__.py:1236`       |
| 31.2% |   2.41s |       3 | `parse_tokens`                    | `src/black/src/blib2to3/pgen2/driver.py:114` |
|  8.8% | 684.8ms |       1 | `assert_equivalent`               | `src/black/src/black/__init__.py:1524`       |
|  5.2% | 400.0ms |       3 | `get_features_used`               | `src/black/src/black/__init__.py:1307`       |
|  4.5% | 350.4ms |       3 | `changed`                         | `src/black/src/blib2to3/pytree.py:171`       |
|  4.0% | 312.0ms |       1 | `push`                            | `src/black/src/blib2to3/pgen2/parse.py:386`  |
|  2.2% | 171.4ms |       1 | `<module>`                        | `src/black/src/black/__init__.py:1`          |
|  1.0% |  79.5ms |       1 | `prefix`                          | `src/black/src/blib2to3/pytree.py:480`       |
|  0.2% |  14.6ms |       1 | `<module>`                        | `venv/bin/black:1`                           |
|  0.2% |  13.5ms |       1 | `format_str`                      | `src/black/src/black/__init__.py:1189`       |
|  0.1% |   5.3ms |       5 | `visit`                           | `src/black/src/black/nodes.py:163`           |
|  0.1% |   5.1ms |       1 | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1037`       |
|  0.1% |   4.6ms |       2 | `visit_stmt`                      | `src/black/src/black/linegen.py:199`         |
| <0.1% |   3.4ms |       1 | `reformat_one`                    | `src/black/src/black/__init__.py:860`        |
| <0.1% |   3.0ms |       1 | `assert_stable`                   | `src/black/src/black/__init__.py:1557`       |
| <0.1% |   3.0ms |       1 | `addtoken`                        | `src/black/src/blib2to3/pgen2/parse.py:242`  |
| <0.1% |   1.9ms |       1 | `_addtoken`                       | `src/black/src/blib2to3/pgen2/parse.py:290`  |
| <0.1% |   1.0ms |       1 | `lib2to3_parse`                   | `src/black/src/black/parsing.py:55`          |
| <0.1% |   1.0ms |       1 | `main`                            | `src/black/src/black/__init__.py:244`        |
| <0.1% |   0.8ms |       1 | `parse_string`                    | `src/black/src/blib2to3/pgen2/driver.py:198` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `_format_str_once` (`src/black/src/black/__init__.py:1236`)

|     % |    Time | Samples | Caller          | Location                               |
| ----: | ------: | ------: | --------------- | -------------------------------------- |
| 72.1% |   2.11s |       2 | `format_str`    | `src/black/src/black/__init__.py:1189` |
| 27.9% | 818.0ms |       1 | `assert_stable` | `src/black/src/black/__init__.py:1557` |

##### `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`)

|      % |  Time | Samples | Caller         | Location                                     |
| -----: | ----: | ------: | -------------- | -------------------------------------------- |
| 100.0% | 2.41s |       3 | `parse_string` | `src/black/src/blib2to3/pgen2/driver.py:198` |

##### `assert_equivalent` (`src/black/src/black/__init__.py:1524`)

|      % |    Time | Samples | Caller                            | Location                               |
| -----: | ------: | ------: | --------------------------------- | -------------------------------------- |
| 100.0% | 684.8ms |       1 | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1037` |

##### `get_features_used` (`src/black/src/black/__init__.py:1307`)

|      % |    Time | Samples | Caller                   | Location                               |
| -----: | ------: | ------: | ------------------------ | -------------------------------------- |
| 100.0% | 400.0ms |       3 | `detect_target_versions` | `src/black/src/black/__init__.py:1464` |

##### `changed` (`src/black/src/blib2to3/pytree.py:171`)

|      % |    Time | Samples | Caller   | Location                               |
| -----: | ------: | ------: | -------- | -------------------------------------- |
| 100.0% | 350.4ms |       3 | `prefix` | `src/black/src/blib2to3/pytree.py:480` |

##### `push` (`src/black/src/blib2to3/pgen2/parse.py:386`)

|      % |    Time | Samples | Caller      | Location                                    |
| -----: | ------: | ------: | ----------- | ------------------------------------------- |
| 100.0% | 312.0ms |       1 | `_addtoken` | `src/black/src/blib2to3/pgen2/parse.py:290` |

##### `<module>` (`src/black/src/black/__init__.py:1`)

|      % |    Time | Samples | Caller     | Location           |
| -----: | ------: | ------: | ---------- | ------------------ |
| 100.0% | 171.4ms |       1 | `<module>` | `venv/bin/black:1` |

##### `prefix` (`src/black/src/blib2to3/pytree.py:480`)

|      % |   Time | Samples | Caller   | Location                               |
| -----: | -----: | ------: | -------- | -------------------------------------- |
| 100.0% | 79.5ms |       1 | `prefix` | `src/black/src/blib2to3/pytree.py:329` |

##### `format_str` (`src/black/src/black/__init__.py:1189`)

|      % |   Time | Samples | Caller                 | Location                               |
| -----: | -----: | ------: | ---------------------- | -------------------------------------- |
| 100.0% | 13.5ms |       1 | `format_file_contents` | `src/black/src/black/__init__.py:1054` |

##### `visit` (`src/black/src/black/nodes.py:163`)

|     % |  Time | Samples | Caller          | Location                             |
| ----: | ----: | ------: | --------------- | ------------------------------------ |
| 75.1% | 4.0ms |       3 | `visit_default` | `src/black/src/black/nodes.py:187`   |
| 24.9% | 1.3ms |       2 | `visit_stmt`    | `src/black/src/black/linegen.py:199` |

##### `check_stability_and_equivalence` (`src/black/src/black/__init__.py:1037`)

|      % |  Time | Samples | Caller                 | Location                               |
| -----: | ----: | ------: | ---------------------- | -------------------------------------- |
| 100.0% | 5.1ms |       1 | `format_file_contents` | `src/black/src/black/__init__.py:1054` |

##### `visit_stmt` (`src/black/src/black/linegen.py:199`)

|      % |  Time | Samples | Caller  | Location                           |
| -----: | ----: | ------: | ------- | ---------------------------------- |
| 100.0% | 4.6ms |       2 | `visit` | `src/black/src/black/nodes.py:163` |

##### `reformat_one` (`src/black/src/black/__init__.py:860`)

|      % |  Time | Samples | Caller | Location                              |
| -----: | ----: | ------: | ------ | ------------------------------------- |
| 100.0% | 3.4ms |       1 | `main` | `src/black/src/black/__init__.py:244` |

##### `assert_stable` (`src/black/src/black/__init__.py:1557`)

|      % |  Time | Samples | Caller                            | Location                               |
| -----: | ----: | ------: | --------------------------------- | -------------------------------------- |
| 100.0% | 3.0ms |       1 | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1037` |

##### `addtoken` (`src/black/src/blib2to3/pgen2/parse.py:242`)

|      % |  Time | Samples | Caller         | Location                                     |
| -----: | ----: | ------: | -------------- | -------------------------------------------- |
| 100.0% | 3.0ms |       1 | `parse_tokens` | `src/black/src/blib2to3/pgen2/driver.py:114` |

##### `_addtoken` (`src/black/src/blib2to3/pgen2/parse.py:290`)

|      % |  Time | Samples | Caller     | Location                                    |
| -----: | ----: | ------: | ---------- | ------------------------------------------- |
| 100.0% | 1.9ms |       1 | `addtoken` | `src/black/src/blib2to3/pgen2/parse.py:242` |

##### `lib2to3_parse` (`src/black/src/black/parsing.py:55`)

|      % |  Time | Samples | Caller             | Location                               |
| -----: | ----: | ------: | ------------------ | -------------------------------------- |
| 100.0% | 1.0ms |       1 | `_format_str_once` | `src/black/src/black/__init__.py:1236` |

##### `parse_string` (`src/black/src/blib2to3/pgen2/driver.py:198`)

|      % |  Time | Samples | Caller          | Location                            |
| -----: | ----: | ------: | --------------- | ----------------------------------- |
| 100.0% | 0.8ms |       1 | `lib2to3_parse` | `src/black/src/black/parsing.py:55` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Samples | Function                          | Location                                               |
| -----: | ------: | ------: | --------------------------------- | ------------------------------------------------------ |
| 100.0% |   7.74s |      35 | `<module>`                        | `venv/bin/black:1`                                     |
|  97.6% |   7.55s |      33 | `__call__`                        | `venv/lib/python3.11/site-packages/click/core.py:1567` |
|  97.6% |   7.55s |      33 | `patched_main`                    | `src/black/src/black/__init__.py:1594`                 |
|  97.6% |   7.55s |      32 | `main`                            | `src/black/src/black/__init__.py:244`                  |
|  97.6% |   7.55s |      31 | `reformat_one`                    | `src/black/src/black/__init__.py:860`                  |
|  97.5% |   7.55s |      30 | `format_file_contents`            | `src/black/src/black/__init__.py:1054`                 |
|  97.5% |   7.55s |      30 | `format_file_in_place`            | `src/black/src/black/__init__.py:917`                  |
|  84.1% |   6.50s |      25 | `_format_str_once`                | `src/black/src/black/__init__.py:1236`                 |
|  58.4% |   4.52s |      17 | `format_str`                      | `src/black/src/black/__init__.py:1189`                 |
|  39.1% |   3.03s |      13 | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1037`                 |
|  35.4% |   2.73s |       8 | `lib2to3_parse`                   | `src/black/src/black/parsing.py:55`                    |
|  35.3% |   2.73s |       7 | `parse_string`                    | `src/black/src/blib2to3/pgen2/driver.py:198`           |
|  35.3% |   2.73s |       6 | `parse_tokens`                    | `src/black/src/blib2to3/pgen2/driver.py:114`           |
|  25.9% |      2s |      10 | `assert_stable`                   | `src/black/src/black/__init__.py:1557`                 |
|  13.2% |   1.02s |       2 | `assert_equivalent`               | `src/black/src/black/__init__.py:1524`                 |
|   5.7% | 439.8ms |      11 | `visit_default`                   | `src/black/src/black/linegen.py:134`                   |
|   5.7% | 439.8ms |      11 | `visit`                           | `src/black/src/black/nodes.py:163`                     |
|   5.7% | 439.8ms |      11 | `visit_default`                   | `src/black/src/black/nodes.py:187`                     |
|   5.7% | 439.8ms |      11 | `visit_suite`                     | `src/black/src/black/linegen.py:288`                   |
|   5.7% | 439.8ms |      11 | `visit_funcdef`                   | `src/black/src/black/linegen.py:254`                   |

#### Categories

##### Ours

|      % |    Time | Samples | Function                          | Location                                     |
| -----: | ------: | ------: | --------------------------------- | -------------------------------------------- |
| 100.0% |   7.74s |      35 | `<module>`                        | `venv/bin/black:1`                           |
|  97.6% |   7.55s |      33 | `patched_main`                    | `src/black/src/black/__init__.py:1594`       |
|  97.6% |   7.55s |      32 | `main`                            | `src/black/src/black/__init__.py:244`        |
|  97.6% |   7.55s |      31 | `reformat_one`                    | `src/black/src/black/__init__.py:860`        |
|  97.5% |   7.55s |      30 | `format_file_contents`            | `src/black/src/black/__init__.py:1054`       |
|  97.5% |   7.55s |      30 | `format_file_in_place`            | `src/black/src/black/__init__.py:917`        |
|  84.1% |   6.50s |      25 | `_format_str_once`                | `src/black/src/black/__init__.py:1236`       |
|  58.4% |   4.52s |      17 | `format_str`                      | `src/black/src/black/__init__.py:1189`       |
|  39.1% |   3.03s |      13 | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1037`       |
|  35.4% |   2.73s |       8 | `lib2to3_parse`                   | `src/black/src/black/parsing.py:55`          |
|  35.3% |   2.73s |       7 | `parse_string`                    | `src/black/src/blib2to3/pgen2/driver.py:198` |
|  35.3% |   2.73s |       6 | `parse_tokens`                    | `src/black/src/blib2to3/pgen2/driver.py:114` |
|  25.9% |      2s |      10 | `assert_stable`                   | `src/black/src/black/__init__.py:1557`       |
|  13.2% |   1.02s |       2 | `assert_equivalent`               | `src/black/src/black/__init__.py:1524`       |
|   5.7% | 439.8ms |      11 | `visit_default`                   | `src/black/src/black/linegen.py:134`         |
|   5.7% | 439.8ms |      11 | `visit`                           | `src/black/src/black/nodes.py:163`           |
|   5.7% | 439.8ms |      11 | `visit_default`                   | `src/black/src/black/nodes.py:187`           |
|   5.7% | 439.8ms |      11 | `visit_suite`                     | `src/black/src/black/linegen.py:288`         |
|   5.7% | 439.8ms |      11 | `visit_funcdef`                   | `src/black/src/black/linegen.py:254`         |
|   5.7% | 438.8ms |      10 | `visit_stmt`                      | `src/black/src/black/linegen.py:199`         |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `<module>` (`venv/bin/black:1`)

|     % |    Time | Samples | Callee         | Location                               |
| ----: | ------: | ------: | -------------- | -------------------------------------- |
| 97.6% |   7.55s |      33 | `patched_main` | `src/black/src/black/__init__.py:1594` |
|  2.2% | 171.4ms |       1 | `<module>`     | `src/black/src/black/__init__.py:1`    |

##### `patched_main` (`src/black/src/black/__init__.py:1594`)

|      % |  Time | Samples | Callee     | Location                                               |
| -----: | ----: | ------: | ---------- | ------------------------------------------------------ |
| 100.0% | 7.55s |      33 | `__call__` | `venv/lib/python3.11/site-packages/click/core.py:1567` |

##### `main` (`src/black/src/black/__init__.py:244`)

|      % |  Time | Samples | Callee         | Location                              |
| -----: | ----: | ------: | -------------- | ------------------------------------- |
| 100.0% | 7.55s |      31 | `reformat_one` | `src/black/src/black/__init__.py:860` |

##### `reformat_one` (`src/black/src/black/__init__.py:860`)

|      % |  Time | Samples | Callee                 | Location                              |
| -----: | ----: | ------: | ---------------------- | ------------------------------------- |
| 100.0% | 7.55s |      30 | `format_file_in_place` | `src/black/src/black/__init__.py:917` |

##### `format_file_contents` (`src/black/src/black/__init__.py:1054`)

|     % |  Time | Samples | Callee                            | Location                               |
| ----: | ----: | ------: | --------------------------------- | -------------------------------------- |
| 59.9% | 4.52s |      17 | `format_str`                      | `src/black/src/black/__init__.py:1189` |
| 40.1% | 3.03s |      13 | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1037` |

##### `format_file_in_place` (`src/black/src/black/__init__.py:917`)

|      % |  Time | Samples | Callee                 | Location                               |
| -----: | ----: | ------: | ---------------------- | -------------------------------------- |
| 100.0% | 7.55s |      30 | `format_file_contents` | `src/black/src/black/__init__.py:1054` |

##### `_format_str_once` (`src/black/src/black/__init__.py:1236`)

|     % |    Time | Samples | Callee                   | Location                               |
| ----: | ------: | ------: | ------------------------ | -------------------------------------- |
| 42.1% |   2.73s |       8 | `lib2to3_parse`          | `src/black/src/black/parsing.py:55`    |
|  6.8% | 439.8ms |      11 | `visit`                  | `src/black/src/black/nodes.py:163`     |
|  6.1% | 400.0ms |       3 | `detect_target_versions` | `src/black/src/black/__init__.py:1464` |

##### `format_str` (`src/black/src/black/__init__.py:1189`)

|     % |  Time | Samples | Callee             | Location                               |
| ----: | ----: | ------: | ------------------ | -------------------------------------- |
| 99.7% | 4.50s |      16 | `_format_str_once` | `src/black/src/black/__init__.py:1236` |

##### `check_stability_and_equivalence` (`src/black/src/black/__init__.py:1037`)

|     % |  Time | Samples | Callee              | Location                               |
| ----: | ----: | ------: | ------------------- | -------------------------------------- |
| 66.1% |    2s |      10 | `assert_stable`     | `src/black/src/black/__init__.py:1557` |
| 33.7% | 1.02s |       2 | `assert_equivalent` | `src/black/src/black/__init__.py:1524` |

##### `lib2to3_parse` (`src/black/src/black/parsing.py:55`)

|      % |  Time | Samples | Callee         | Location                                     |
| -----: | ----: | ------: | -------------- | -------------------------------------------- |
| 100.0% | 2.73s |       7 | `parse_string` | `src/black/src/blib2to3/pgen2/driver.py:198` |

##### `parse_string` (`src/black/src/blib2to3/pgen2/driver.py:198`)

|      % |  Time | Samples | Callee         | Location                                     |
| -----: | ----: | ------: | -------------- | -------------------------------------------- |
| 100.0% | 2.73s |       6 | `parse_tokens` | `src/black/src/blib2to3/pgen2/driver.py:114` |

##### `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`)

|     % |    Time | Samples | Callee     | Location                                    |
| ----: | ------: | ------: | ---------- | ------------------------------------------- |
| 11.6% | 317.0ms |       3 | `addtoken` | `src/black/src/blib2to3/pgen2/parse.py:242` |

##### `assert_stable` (`src/black/src/black/__init__.py:1557`)

|     % |  Time | Samples | Callee             | Location                               |
| ----: | ----: | ------: | ------------------ | -------------------------------------- |
| 99.8% | 1.99s |       9 | `_format_str_once` | `src/black/src/black/__init__.py:1236` |

##### `assert_equivalent` (`src/black/src/black/__init__.py:1524`)

|     % |    Time | Samples | Callee      | Location                             |
| ----: | ------: | ------: | ----------- | ------------------------------------ |
| 33.0% | 337.3ms |       1 | `parse_ast` | `src/black/src/black/parsing.py:129` |

##### `visit_default` (`src/black/src/black/linegen.py:134`)

|      % |    Time | Samples | Callee              | Location                             |
| -----: | ------: | ------: | ------------------- | ------------------------------------ |
| 100.0% | 439.8ms |      11 | `visit_default`     | `src/black/src/black/nodes.py:187`   |
|  79.7% | 350.4ms |       3 | `generate_comments` | `src/black/src/black/comments.py:52` |

##### `visit` (`src/black/src/black/nodes.py:163`)

|      % |    Time | Samples | Callee              | Location                             |
| -----: | ------: | ------: | ------------------- | ------------------------------------ |
| 100.0% | 439.8ms |      11 | `visit_default`     | `src/black/src/black/linegen.py:134` |
| 100.0% | 439.8ms |      11 | `visit_suite`       | `src/black/src/black/linegen.py:288` |
| 100.0% | 439.8ms |      11 | `visit_funcdef`     | `src/black/src/black/linegen.py:254` |
|  99.8% | 438.8ms |      10 | `visit_stmt`        | `src/black/src/black/linegen.py:199` |
|  75.5% | 332.2ms |       4 | `visit_simple_stmt` | `src/black/src/black/linegen.py:295` |

##### `visit_default` (`src/black/src/black/nodes.py:187`)

|      % |    Time | Samples | Callee  | Location                           |
| -----: | ------: | ------: | ------- | ---------------------------------- |
| 100.0% | 439.8ms |      11 | `visit` | `src/black/src/black/nodes.py:163` |

##### `visit_suite` (`src/black/src/black/linegen.py:288`)

|      % |    Time | Samples | Callee          | Location                             |
| -----: | ------: | ------: | --------------- | ------------------------------------ |
| 100.0% | 439.8ms |      11 | `visit_default` | `src/black/src/black/linegen.py:134` |

##### `visit_funcdef` (`src/black/src/black/linegen.py:254`)

|      % |    Time | Samples | Callee  | Location                           |
| -----: | ------: | ------: | ------- | ---------------------------------- |
| 100.0% | 439.8ms |      11 | `visit` | `src/black/src/black/nodes.py:163` |

##### `visit_stmt` (`src/black/src/black/linegen.py:199`)

|      % |    Time | Samples | Callee                       | Location                              |
| -----: | ------: | ------: | ---------------------------- | ------------------------------------- |
| 100.0% | 438.8ms |      10 | `visit`                      | `src/black/src/black/nodes.py:163`    |
|  18.1% |  79.5ms |       1 | `normalize_invisible_parens` | `src/black/src/black/linegen.py:1328` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame. `…` stands for frames the entry filter hides.

Common call stack: `<module>` (`venv/bin/black:1`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 27.3% |   2.11s |       2 | `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 20.1% |   1.55s |       2 | `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`src/black/src/black/parsing.py:55`) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 11.1% | 862.8ms |       1 | `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`src/black/src/black/parsing.py:55`) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `assert_stable` (1557) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 10.6% | 818.0ms |       1 | `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `assert_stable` (1557) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  8.8% | 684.8ms |       1 | `assert_equivalent` (`src/black/src/black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.4% | 337.3ms |       1 | `parse` (`usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`src/black/src/black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`src/black/src/black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.0% | 312.0ms |       1 | `push` (`src/black/src/blib2to3/pgen2/parse.py:386`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`src/black/src/black/parsing.py:55`) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  3.4% | 265.0ms |       2 | `get_features_used` (`src/black/src/black/__init__.py:1307`) ← `detect_target_versions` (1464) ← `_format_str_once` (1236) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.2% | 171.4ms |       1 | `<module>` (`src/black/src/black/__init__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.8% | 140.5ms |       1 | `changed` (`src/black/src/blib2to3/pytree.py:171`) ← `prefix` (480) ← `normalize_trailing_prefix` (`src/black/src/black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_stmt` (`src/black/src/black/linegen.py:199`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_stmt` (`src/black/src/black/linegen.py:199`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_stmt` (`src/black/src/black/linegen.py:199`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_funcdef` (`src/black/src/black/linegen.py:254`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`) |
|  1.7% | 135.0ms |       1 | `get_features_used` (`src/black/src/black/__init__.py:1307`) ← `detect_target_versions` (1464) ← `_format_str_once` (1236) ← `assert_stable` (1557) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.4% | 111.2ms |       1 | `changed` (`src/black/src/blib2to3/pytree.py:171`) ← `prefix` (480) ← `normalize_trailing_prefix` (`src/black/src/black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_stmt` (`src/black/src/black/linegen.py:199`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_stmt` (`src/black/src/black/linegen.py:199`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_funcdef` (`src/black/src/black/linegen.py:254`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_stmt` (`src/black/src/black/linegen.py:199`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`) |
|  1.3% |  98.7ms |       1 | `changed` (`src/black/src/blib2to3/pytree.py:171`) ← `prefix` (480) ← `normalize_trailing_prefix` (`src/black/src/black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_stmt` (`src/black/src/black/linegen.py:199`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_stmt` (`src/black/src/black/linegen.py:199`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_funcdef` (`src/black/src/black/linegen.py:254`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `assert_stable` (1557) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.0% |  79.5ms |       1 | `prefix` (`src/black/src/blib2to3/pytree.py:480`) ← `prefix` (329) ← `wrap_in_parentheses` (`src/black/src/black/nodes.py:935`) ← `normalize_invisible_parens` (`src/black/src/black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_stmt` (`src/black/src/black/linegen.py:199`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_stmt` (`src/black/src/black/linegen.py:199`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_funcdef` (`src/black/src/black/linegen.py:254`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_stmt` (`src/black/src/black/linegen.py:199`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `assert_stable` (1557) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                     |
|  0.2% |  13.5ms |       1 | `format_str` (`src/black/src/black/__init__.py:1189`) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |   5.1ms |       1 | `check_stability_and_equivalence` (`src/black/src/black/__init__.py:1037`) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| <0.1% |   3.4ms |       1 | `reformat_one` (`src/black/src/black/__init__.py:860`) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| <0.1% |   3.0ms |       1 | `assert_stable` (`src/black/src/black/__init__.py:1557`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <0.1% |   3.0ms |       1 | `addtoken` (`src/black/src/blib2to3/pgen2/parse.py:242`) ← `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`src/black/src/black/parsing.py:55`) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <0.1% |   2.5ms |       1 | `visit_stmt` (`src/black/src/black/linegen.py:199`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_stmt` (`src/black/src/black/linegen.py:199`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_funcdef` (`src/black/src/black/linegen.py:254`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_stmt` (`src/black/src/black/linegen.py:199`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:163`) ← `_format_str_once` (`src/black/src/black/__init__.py:1236`) ← `assert_stable` (1557) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← … ← `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1567`) ← `patched_main` (`src/black/src/black/__init__.py:1594`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

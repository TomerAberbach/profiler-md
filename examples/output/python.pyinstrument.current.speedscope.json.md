# Sampling profile

Took 5.78s.

| Category    |     % |    Time |
| ----------- | ----: | ------: |
| Ours        | 97.5% |   5.63s |
| Native      |  2.4% | 141.0ms |
| Third-party | <0.1% |   1.0ms |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Function                          | Location                                     |
| ----: | ------: | --------------------------------- | -------------------------------------------- |
| 43.5% |   2.51s | `_format_str_once`                | `src/black/src/black/__init__.py:1215`       |
| 31.7% |   1.83s | `parse_tokens`                    | `src/black/src/blib2to3/pgen2/driver.py:114` |
|  5.6% | 324.0ms | `get_features_used`               | `src/black/src/black/__init__.py:1286`       |
|  4.7% | 271.4ms | `assert_equivalent`               | `src/black/src/black/__init__.py:1510`       |
|  2.6% | 153.0ms | `_stringify_ast`                  | `src/black/src/black/parsing.py:182`         |
|  2.4% | 141.0ms | `compile`                         | `<built-in>`                                 |
|  2.0% | 116.9ms | `is_complex_subscript`            | `src/black/src/black/lines.py:430`           |
|  1.9% | 108.7ms | `__init__`                        | `src/black/src/blib2to3/pytree.py:389`       |
|  1.3% |  74.1ms | `<module>`                        | `src/black/src/black/__init__.py:1`          |
|  1.2% |  67.6ms | `visit`                           | `src/black/src/black/nodes.py:152`           |
|  1.1% |  64.8ms | `__contains__`                    | `src/black/src/black/mode.py:249`            |
|  1.1% |  64.0ms | `<module>`                        | `src/black/src/black/nodes.py:1`             |
|  0.2% |  12.0ms | `visit_stmt`                      | `src/black/src/black/linegen.py:199`         |
|  0.1% |   6.1ms | `format_str`                      | `src/black/src/black/__init__.py:1168`       |
|  0.1% |   6.0ms | `<module>`                        | `venv/bin/black:1`                           |
|  0.1% |   5.7ms | `assert_stable`                   | `src/black/src/black/__init__.py:1543`       |
|  0.1% |   4.6ms | `visit_default`                   | `src/black/src/black/linegen.py:134`         |
|  0.1% |   3.9ms | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1042`       |
| <0.1% |   2.9ms | `<module>`                        | `src/black/src/black/comments.py:1`          |
| <0.1% |   2.5ms | `_addtoken`                       | `src/black/src/blib2to3/pgen2/parse.py:278`  |

#### Categories

##### Ours

|     % |    Time | Function                          | Location                                     |
| ----: | ------: | --------------------------------- | -------------------------------------------- |
| 43.5% |   2.51s | `_format_str_once`                | `src/black/src/black/__init__.py:1215`       |
| 31.7% |   1.83s | `parse_tokens`                    | `src/black/src/blib2to3/pgen2/driver.py:114` |
|  5.6% | 324.0ms | `get_features_used`               | `src/black/src/black/__init__.py:1286`       |
|  4.7% | 271.4ms | `assert_equivalent`               | `src/black/src/black/__init__.py:1510`       |
|  2.6% | 153.0ms | `_stringify_ast`                  | `src/black/src/black/parsing.py:182`         |
|  2.0% | 116.9ms | `is_complex_subscript`            | `src/black/src/black/lines.py:430`           |
|  1.9% | 108.7ms | `__init__`                        | `src/black/src/blib2to3/pytree.py:389`       |
|  1.3% |  74.1ms | `<module>`                        | `src/black/src/black/__init__.py:1`          |
|  1.2% |  67.6ms | `visit`                           | `src/black/src/black/nodes.py:152`           |
|  1.1% |  64.8ms | `__contains__`                    | `src/black/src/black/mode.py:249`            |
|  1.1% |  64.0ms | `<module>`                        | `src/black/src/black/nodes.py:1`             |
|  0.2% |  12.0ms | `visit_stmt`                      | `src/black/src/black/linegen.py:199`         |
|  0.1% |   6.1ms | `format_str`                      | `src/black/src/black/__init__.py:1168`       |
|  0.1% |   6.0ms | `<module>`                        | `venv/bin/black:1`                           |
|  0.1% |   5.7ms | `assert_stable`                   | `src/black/src/black/__init__.py:1543`       |
|  0.1% |   4.6ms | `visit_default`                   | `src/black/src/black/linegen.py:134`         |
|  0.1% |   3.9ms | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1042`       |
| <0.1% |   2.9ms | `<module>`                        | `src/black/src/black/comments.py:1`          |
| <0.1% |   2.5ms | `_addtoken`                       | `src/black/src/blib2to3/pgen2/parse.py:278`  |
| <0.1% |   1.0ms | `append`                          | `src/black/src/black/lines.py:52`            |

##### Native

|    % |    Time | Function  | Location     |
| ---: | ------: | --------- | ------------ |
| 2.4% | 141.0ms | `compile` | `<built-in>` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `_format_str_once` (`src/black/src/black/__init__.py:1215`)

|     % |    Time | Caller          | Location                               |
| ----: | ------: | --------------- | -------------------------------------- |
| 61.7% |   1.55s | `format_str`    | `src/black/src/black/__init__.py:1168` |
| 38.3% | 962.0ms | `assert_stable` | `src/black/src/black/__init__.py:1543` |

##### `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`)

|      % |  Time | Caller         | Location                                     |
| -----: | ----: | -------------- | -------------------------------------------- |
| 100.0% | 1.83s | `parse_string` | `src/black/src/blib2to3/pgen2/driver.py:198` |

##### `get_features_used` (`src/black/src/black/__init__.py:1286`)

|      % |    Time | Caller                   | Location                               |
| -----: | ------: | ------------------------ | -------------------------------------- |
| 100.0% | 324.0ms | `detect_target_versions` | `src/black/src/black/__init__.py:1443` |

##### `assert_equivalent` (`src/black/src/black/__init__.py:1510`)

|      % |    Time | Caller                            | Location                               |
| -----: | ------: | --------------------------------- | -------------------------------------- |
| 100.0% | 271.4ms | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1042` |

##### `_stringify_ast` (`src/black/src/black/parsing.py:182`)

|      % |    Time | Caller              | Location                               |
| -----: | ------: | ------------------- | -------------------------------------- |
| 100.0% | 153.0ms | `assert_equivalent` | `src/black/src/black/__init__.py:1510` |

##### `compile` (`<built-in>`)

|      % |    Time | Caller  | Location                       |
| -----: | ------: | ------- | ------------------------------ |
| 100.0% | 141.0ms | `parse` | `usr/lib/python3.11/ast.py:33` |

##### `is_complex_subscript` (`src/black/src/black/lines.py:430`)

|      % |    Time | Caller   | Location                          |
| -----: | ------: | -------- | --------------------------------- |
| 100.0% | 116.9ms | `append` | `src/black/src/black/lines.py:52` |

##### `__init__` (`src/black/src/blib2to3/pytree.py:389`)

|      % |    Time | Caller    | Location                               |
| -----: | ------: | --------- | -------------------------------------- |
| 100.0% | 108.7ms | `convert` | `src/black/src/blib2to3/pytree.py:475` |

##### `<module>` (`src/black/src/black/__init__.py:1`)

|      % |   Time | Caller     | Location           |
| -----: | -----: | ---------- | ------------------ |
| 100.0% | 74.1ms | `<module>` | `venv/bin/black:1` |

##### `visit` (`src/black/src/black/nodes.py:152`)

|     % |   Time | Caller          | Location                             |
| ----: | -----: | --------------- | ------------------------------------ |
| 98.5% | 66.6ms | `visit_default` | `src/black/src/black/nodes.py:176`   |
|  1.5% |  1.0ms | `visit_funcdef` | `src/black/src/black/linegen.py:254` |

##### `__contains__` (`src/black/src/black/mode.py:249`)

|      % |   Time | Caller             | Location                          |
| -----: | -----: | ------------------ | --------------------------------- |
| 100.0% | 64.8ms | `is_simple_lookup` | `src/black/src/black/trans.py:93` |

##### `<module>` (`src/black/src/black/nodes.py:1`)

|      % |   Time | Caller     | Location                            |
| -----: | -----: | ---------- | ----------------------------------- |
| 100.0% | 64.0ms | `<module>` | `src/black/src/black/comments.py:1` |

##### `visit_stmt` (`src/black/src/black/linegen.py:199`)

|      % |   Time | Caller  | Location                           |
| -----: | -----: | ------- | ---------------------------------- |
| 100.0% | 12.0ms | `visit` | `src/black/src/black/nodes.py:152` |

##### `format_str` (`src/black/src/black/__init__.py:1168`)

|      % |  Time | Caller                 | Location                               |
| -----: | ----: | ---------------------- | -------------------------------------- |
| 100.0% | 6.1ms | `format_file_contents` | `src/black/src/black/__init__.py:1059` |

##### `assert_stable` (`src/black/src/black/__init__.py:1543`)

|      % |  Time | Caller                            | Location                               |
| -----: | ----: | --------------------------------- | -------------------------------------- |
| 100.0% | 5.7ms | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1042` |

##### `visit_default` (`src/black/src/black/linegen.py:134`)

|      % |  Time | Caller        | Location                             |
| -----: | ----: | ------------- | ------------------------------------ |
| 100.0% | 4.6ms | `visit_suite` | `src/black/src/black/linegen.py:288` |

##### `check_stability_and_equivalence` (`src/black/src/black/__init__.py:1042`)

|      % |  Time | Caller                 | Location                               |
| -----: | ----: | ---------------------- | -------------------------------------- |
| 100.0% | 3.9ms | `format_file_contents` | `src/black/src/black/__init__.py:1059` |

##### `<module>` (`src/black/src/black/comments.py:1`)

|      % |  Time | Caller     | Location                            |
| -----: | ----: | ---------- | ----------------------------------- |
| 100.0% | 2.9ms | `<module>` | `src/black/src/black/__init__.py:1` |

##### `_addtoken` (`src/black/src/blib2to3/pgen2/parse.py:278`)

|      % |  Time | Caller     | Location                                    |
| -----: | ----: | ---------- | ------------------------------------------- |
| 100.0% | 2.5ms | `addtoken` | `src/black/src/blib2to3/pgen2/parse.py:230` |

##### `append` (`src/black/src/black/lines.py:52`)

|      % |  Time | Caller          | Location                             |
| -----: | ----: | --------------- | ------------------------------------ |
| 100.0% | 1.0ms | `visit_default` | `src/black/src/black/linegen.py:134` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |    Time | Function                          | Location                                                   |
| -----: | ------: | --------------------------------- | ---------------------------------------------------------- |
| 100.0% |   5.78s | `<module>`                        | `venv/bin/black:1`                                         |
|  97.5% |   5.63s | `main`                            | `venv/lib/python3.11/site-packages/click/core.py:1484`     |
|  97.5% |   5.63s | `__call__`                        | `venv/lib/python3.11/site-packages/click/core.py:1629`     |
|  97.5% |   5.63s | `patched_main`                    | `src/black/src/black/__init__.py:1580`                     |
|  97.4% |   5.63s | `main`                            | `src/black/src/black/__init__.py:240`                      |
|  97.4% |   5.63s | `new_func`                        | `venv/lib/python3.11/site-packages/click/decorators.py:33` |
|  97.4% |   5.63s | `invoke`                          | `venv/lib/python3.11/site-packages/click/core.py:857`      |
|  97.4% |   5.63s | `invoke`                          | `venv/lib/python3.11/site-packages/click/core.py:1401`     |
|  97.4% |   5.63s | `format_file_in_place`            | `src/black/src/black/__init__.py:922`                      |
|  97.4% |   5.63s | `reformat_one`                    | `src/black/src/black/__init__.py:865`                      |
|  97.4% |   5.63s | `format_file_contents`            | `src/black/src/black/__init__.py:1059`                     |
|  87.4% |   5.05s | `_format_str_once`                | `src/black/src/black/__init__.py:1215`                     |
|  53.5% |   3.09s | `format_str`                      | `src/black/src/black/__init__.py:1168`                     |
|  44.0% |   2.54s | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1042`                     |
|  34.1% |   1.97s | `assert_stable`                   | `src/black/src/black/__init__.py:1543`                     |
|  33.7% |   1.94s | `parse_tokens`                    | `src/black/src/blib2to3/pgen2/driver.py:114`               |
|  33.7% |   1.94s | `parse_string`                    | `src/black/src/blib2to3/pgen2/driver.py:198`               |
|  33.7% |   1.94s | `lib2to3_parse`                   | `src/black/src/black/parsing.py:55`                        |
|   9.8% | 565.3ms | `assert_equivalent`               | `src/black/src/black/__init__.py:1510`                     |
|   5.6% | 324.0ms | `get_features_used`               | `src/black/src/black/__init__.py:1286`                     |

#### Categories

##### Ours

|      % |    Time | Function                          | Location                                     |
| -----: | ------: | --------------------------------- | -------------------------------------------- |
| 100.0% |   5.78s | `<module>`                        | `venv/bin/black:1`                           |
|  97.5% |   5.63s | `patched_main`                    | `src/black/src/black/__init__.py:1580`       |
|  97.4% |   5.63s | `main`                            | `src/black/src/black/__init__.py:240`        |
|  97.4% |   5.63s | `format_file_in_place`            | `src/black/src/black/__init__.py:922`        |
|  97.4% |   5.63s | `reformat_one`                    | `src/black/src/black/__init__.py:865`        |
|  97.4% |   5.63s | `format_file_contents`            | `src/black/src/black/__init__.py:1059`       |
|  87.4% |   5.05s | `_format_str_once`                | `src/black/src/black/__init__.py:1215`       |
|  53.5% |   3.09s | `format_str`                      | `src/black/src/black/__init__.py:1168`       |
|  44.0% |   2.54s | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1042`       |
|  34.1% |   1.97s | `assert_stable`                   | `src/black/src/black/__init__.py:1543`       |
|  33.7% |   1.94s | `parse_tokens`                    | `src/black/src/blib2to3/pgen2/driver.py:114` |
|  33.7% |   1.94s | `parse_string`                    | `src/black/src/blib2to3/pgen2/driver.py:198` |
|  33.7% |   1.94s | `lib2to3_parse`                   | `src/black/src/black/parsing.py:55`          |
|   9.8% | 565.3ms | `assert_equivalent`               | `src/black/src/black/__init__.py:1510`       |
|   5.6% | 324.0ms | `get_features_used`               | `src/black/src/black/__init__.py:1286`       |
|   5.6% | 324.0ms | `detect_target_versions`          | `src/black/src/black/__init__.py:1443`       |
|   3.5% | 202.0ms | `visit`                           | `src/black/src/black/nodes.py:152`           |
|   3.5% | 202.0ms | `visit_default`                   | `src/black/src/black/nodes.py:176`           |
|   3.5% | 202.0ms | `visit_default`                   | `src/black/src/black/linegen.py:134`         |
|   3.3% | 190.1ms | `visit_funcdef`                   | `src/black/src/black/linegen.py:254`         |

##### Native

|    % |    Time | Function  | Location     |
| ---: | ------: | --------- | ------------ |
| 2.4% | 141.0ms | `compile` | `<built-in>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `<module>` (`venv/bin/black:1`)

|     % |    Time | Callee         | Location                               |
| ----: | ------: | -------------- | -------------------------------------- |
| 97.5% |   5.63s | `patched_main` | `src/black/src/black/__init__.py:1580` |
|  2.4% | 141.0ms | `<module>`     | `src/black/src/black/__init__.py:1`    |

##### `main` (`venv/lib/python3.11/site-packages/click/core.py:1484`)

|      % |  Time | Callee   | Location                                               |
| -----: | ----: | -------- | ------------------------------------------------------ |
| 100.0% | 5.63s | `invoke` | `venv/lib/python3.11/site-packages/click/core.py:1401` |

##### `__call__` (`venv/lib/python3.11/site-packages/click/core.py:1629`)

|      % |  Time | Callee | Location                                               |
| -----: | ----: | ------ | ------------------------------------------------------ |
| 100.0% | 5.63s | `main` | `venv/lib/python3.11/site-packages/click/core.py:1484` |

##### `patched_main` (`src/black/src/black/__init__.py:1580`)

|      % |  Time | Callee     | Location                                               |
| -----: | ----: | ---------- | ------------------------------------------------------ |
| 100.0% | 5.63s | `__call__` | `venv/lib/python3.11/site-packages/click/core.py:1629` |

##### `main` (`src/black/src/black/__init__.py:240`)

|      % |  Time | Callee         | Location                              |
| -----: | ----: | -------------- | ------------------------------------- |
| 100.0% | 5.63s | `reformat_one` | `src/black/src/black/__init__.py:865` |

##### `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |  Time | Callee | Location                              |
| -----: | ----: | ------ | ------------------------------------- |
| 100.0% | 5.63s | `main` | `src/black/src/black/__init__.py:240` |

##### `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`)

|      % |  Time | Callee     | Location                                                   |
| -----: | ----: | ---------- | ---------------------------------------------------------- |
| 100.0% | 5.63s | `new_func` | `venv/lib/python3.11/site-packages/click/decorators.py:33` |

##### `invoke` (`venv/lib/python3.11/site-packages/click/core.py:1401`)

|      % |  Time | Callee   | Location                                              |
| -----: | ----: | -------- | ----------------------------------------------------- |
| 100.0% | 5.63s | `invoke` | `venv/lib/python3.11/site-packages/click/core.py:857` |

##### `format_file_in_place` (`src/black/src/black/__init__.py:922`)

|      % |  Time | Callee                 | Location                               |
| -----: | ----: | ---------------------- | -------------------------------------- |
| 100.0% | 5.63s | `format_file_contents` | `src/black/src/black/__init__.py:1059` |

##### `reformat_one` (`src/black/src/black/__init__.py:865`)

|      % |  Time | Callee                 | Location                              |
| -----: | ----: | ---------------------- | ------------------------------------- |
| 100.0% | 5.63s | `format_file_in_place` | `src/black/src/black/__init__.py:922` |

##### `format_file_contents` (`src/black/src/black/__init__.py:1059`)

|     % |  Time | Callee                            | Location                               |
| ----: | ----: | --------------------------------- | -------------------------------------- |
| 54.9% | 3.09s | `format_str`                      | `src/black/src/black/__init__.py:1168` |
| 45.1% | 2.54s | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1042` |

##### `_format_str_once` (`src/black/src/black/__init__.py:1215`)

|     % |    Time | Callee                   | Location                               |
| ----: | ------: | ------------------------ | -------------------------------------- |
| 38.5% |   1.94s | `lib2to3_parse`          | `src/black/src/black/parsing.py:55`    |
|  6.4% | 324.0ms | `detect_target_versions` | `src/black/src/black/__init__.py:1443` |
|  4.0% | 202.0ms | `visit`                  | `src/black/src/black/nodes.py:152`     |
|  1.3% |  65.0ms | `transform_line`         | `src/black/src/black/linegen.py:601`   |

##### `format_str` (`src/black/src/black/__init__.py:1168`)

|     % |  Time | Callee             | Location                               |
| ----: | ----: | ------------------ | -------------------------------------- |
| 99.8% | 3.08s | `_format_str_once` | `src/black/src/black/__init__.py:1215` |

##### `check_stability_and_equivalence` (`src/black/src/black/__init__.py:1042`)

|     % |    Time | Callee              | Location                               |
| ----: | ------: | ------------------- | -------------------------------------- |
| 77.6% |   1.97s | `assert_stable`     | `src/black/src/black/__init__.py:1543` |
| 22.2% | 565.3ms | `assert_equivalent` | `src/black/src/black/__init__.py:1510` |

##### `assert_stable` (`src/black/src/black/__init__.py:1543`)

|     % |  Time | Callee             | Location                               |
| ----: | ----: | ------------------ | -------------------------------------- |
| 99.7% | 1.96s | `_format_str_once` | `src/black/src/black/__init__.py:1215` |

##### `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`)

|    % |    Time | Callee     | Location                                    |
| ---: | ------: | ---------- | ------------------------------------------- |
| 5.8% | 112.3ms | `addtoken` | `src/black/src/blib2to3/pgen2/parse.py:230` |

##### `parse_string` (`src/black/src/blib2to3/pgen2/driver.py:198`)

|      % |  Time | Callee         | Location                                     |
| -----: | ----: | -------------- | -------------------------------------------- |
| 100.0% | 1.94s | `parse_tokens` | `src/black/src/blib2to3/pgen2/driver.py:114` |

##### `lib2to3_parse` (`src/black/src/black/parsing.py:55`)

|      % |  Time | Callee         | Location                                     |
| -----: | ----: | -------------- | -------------------------------------------- |
| 100.0% | 1.94s | `parse_string` | `src/black/src/blib2to3/pgen2/driver.py:198` |

##### `assert_equivalent` (`src/black/src/black/__init__.py:1510`)

|     % |    Time | Callee           | Location                             |
| ----: | ------: | ---------------- | ------------------------------------ |
| 27.1% | 153.0ms | `_stringify_ast` | `src/black/src/black/parsing.py:182` |
| 24.9% | 141.0ms | `parse_ast`      | `src/black/src/black/parsing.py:137` |

##### `detect_target_versions` (`src/black/src/black/__init__.py:1443`)

|      % |    Time | Callee              | Location                               |
| -----: | ------: | ------------------- | -------------------------------------- |
| 100.0% | 324.0ms | `get_features_used` | `src/black/src/black/__init__.py:1286` |

##### `visit` (`src/black/src/black/nodes.py:152`)

|      % |    Time | Callee               | Location                             |
| -----: | ------: | -------------------- | ------------------------------------ |
| 100.0% | 202.0ms | `visit_default`      | `src/black/src/black/linegen.py:134` |
|  94.1% | 190.1ms | `visit_funcdef`      | `src/black/src/black/linegen.py:254` |
|  58.4% | 118.0ms | `visit_dictsetmaker` | `src/black/src/black/linegen.py:234` |
|  58.3% | 117.9ms | `visit_STRING`       | `src/black/src/black/linegen.py:413` |
|  41.1% |  83.0ms | `visit_stmt`         | `src/black/src/black/linegen.py:199` |

##### `visit_default` (`src/black/src/black/nodes.py:176`)

|      % |    Time | Callee  | Location                           |
| -----: | ------: | ------- | ---------------------------------- |
| 100.0% | 202.0ms | `visit` | `src/black/src/black/nodes.py:152` |

##### `visit_default` (`src/black/src/black/linegen.py:134`)

|      % |    Time | Callee          | Location                           |
| -----: | ------: | --------------- | ---------------------------------- |
| 100.0% | 202.0ms | `visit_default` | `src/black/src/black/nodes.py:176` |
|  58.3% | 117.9ms | `append`        | `src/black/src/black/lines.py:52`  |

##### `visit_funcdef` (`src/black/src/black/linegen.py:254`)

|      % |    Time | Callee  | Location                           |
| -----: | ------: | ------- | ---------------------------------- |
| 100.0% | 190.1ms | `visit` | `src/black/src/black/nodes.py:152` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `<module>` (`venv/bin/black:1`)

|     % |    Time | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 26.8% |   1.55s | `_format_str_once` (`src/black/src/black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 19.9% |   1.15s | `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`src/black/src/black/parsing.py:55`) ← `_format_str_once` (`src/black/src/black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 16.6% | 962.0ms | `_format_str_once` (`src/black/src/black/__init__.py:1215`) ← `assert_stable` (1543) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 11.8% | 682.9ms | `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`src/black/src/black/parsing.py:55`) ← `_format_str_once` (`src/black/src/black/__init__.py:1215`) ← `assert_stable` (1543) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  4.7% | 271.4ms | `assert_equivalent` (`src/black/src/black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  3.5% | 205.0ms | `get_features_used` (`src/black/src/black/__init__.py:1286`) ← `detect_target_versions` (1443) ← `_format_str_once` (1215) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  2.6% | 153.0ms | `_stringify_ast` (`src/black/src/black/parsing.py:182`) ← `assert_equivalent` (`src/black/src/black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.4% | 141.0ms | `compile` (`<built-in>`) ← `parse` (`usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`src/black/src/black/parsing.py:125`) ← `parse_ast` (137) ← `assert_equivalent` (`src/black/src/black/__init__.py:1510`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  2.1% | 119.0ms | `get_features_used` (`src/black/src/black/__init__.py:1286`) ← `detect_target_versions` (1443) ← `_format_str_once` (1215) ← `assert_stable` (1543) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.0% | 116.9ms | `is_complex_subscript` (`src/black/src/black/lines.py:430`) ← `append` (52) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_STRING` (413) ← `visit` (`src/black/src/black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_dictsetmaker` (234) ← `visit` (`src/black/src/black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:152`) ← `visit_funcdef` (`src/black/src/black/linegen.py:254`) ← `visit` (`src/black/src/black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:152`) ← `_format_str_once` (`src/black/src/black/__init__.py:1215`) ← `assert_stable` (1543) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1580`) |
|  1.9% | 108.7ms | `__init__` (`src/black/src/blib2to3/pytree.py:389`) ← `convert` (475) ← `shift` (`src/black/src/blib2to3/pgen2/parse.py:361`) ← `_addtoken` (278) ← `addtoken` (230) ← `parse_tokens` (`src/black/src/blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`src/black/src/black/parsing.py:55`) ← `_format_str_once` (`src/black/src/black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.3% |  74.1ms | `<module>` (`src/black/src/black/__init__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.1% |  66.4ms | `visit` (`src/black/src/black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`src/black/src/black/nodes.py:152`) ← `visit_funcdef` (`src/black/src/black/linegen.py:254`) ← `visit` (`src/black/src/black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`src/black/src/black/nodes.py:152`) ← `visit_stmt` (`src/black/src/black/linegen.py:199`) ← `visit` (`src/black/src/black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:152`) ← `_format_str_once` (`src/black/src/black/__init__.py:1215`) ← `assert_stable` (1543) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                           |
|  1.1% |  64.8ms | `__contains__` (`src/black/src/black/mode.py:249`) ← `is_simple_lookup` (`src/black/src/black/trans.py:93`) ← `is_simple_operand` (110) ← `hug_power_op` (81) ← `_hugging_power_ops_line_to_string` (`src/black/src/black/linegen.py:590`) ← `transform_line` (601) ← `run_transformer` (1771) ← `transform_line` (601) ← `_format_str_once` (`src/black/src/black/__init__.py:1215`) ← `format_str` (1168) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.1% |  64.0ms | `<module>` (`src/black/src/black/nodes.py:1`) ← `<module>` (`src/black/src/black/comments.py:1`) ← `<module>` (`src/black/src/black/__init__.py:1`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.2% |  12.0ms | `visit_stmt` (`src/black/src/black/linegen.py:199`) ← `visit` (`src/black/src/black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:152`) ← `_format_str_once` (`src/black/src/black/__init__.py:1215`) ← `assert_stable` (1543) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.1% |   6.1ms | `format_str` (`src/black/src/black/__init__.py:1168`) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.1% |   5.7ms | `assert_stable` (`src/black/src/black/__init__.py:1543`) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.1% |   4.6ms | `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`src/black/src/black/nodes.py:152`) ← `visit_funcdef` (`src/black/src/black/linegen.py:254`) ← `visit` (`src/black/src/black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`src/black/src/black/nodes.py:152`) ← `visit_stmt` (`src/black/src/black/linegen.py:199`) ← `visit` (`src/black/src/black/nodes.py:152`) ← `visit_default` (176) ← `visit_default` (`src/black/src/black/linegen.py:134`) ← `visit` (`src/black/src/black/nodes.py:152`) ← `_format_str_once` (`src/black/src/black/__init__.py:1215`) ← `assert_stable` (1543) ← `check_stability_and_equivalence` (1042) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.1% |   3.9ms | `check_stability_and_equivalence` (`src/black/src/black/__init__.py:1042`) ← `format_file_contents` (1059) ← `format_file_in_place` (922) ← `reformat_one` (865) ← `main` (240) ← `new_func` (`venv/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`venv/lib/python3.11/site-packages/click/core.py:857`) ← `invoke` (1401) ← `main` (1484) ← `__call__` (1629) ← `patched_main` (`src/black/src/black/__init__.py:1580`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

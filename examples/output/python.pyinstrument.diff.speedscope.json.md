# Sampling profile diff

Took 4.76s → 5.78s (+1.019s, +21.4%).

| Category    | Change |    Delta |             % |              Time |
| ----------- | -----: | -------: | ------------: | ----------------: |
| Ours        | +23.8% |  +1.082s | 95.7% → 97.5% |     4.55s → 5.63s |
| Native      | -30.8% | -62.62ms |   4.3% → 2.4% | 203.6ms → 141.0ms |
| Third-party | -50.7% |  -1.01ms |         <0.1% |     2.0ms → 1.0ms |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|    Change |     Delta |             % |              Time | Function               | Location                                     |
| --------: | --------: | ------------: | ----------------: | ---------------------- | -------------------------------------------- |
|    +22.9% | +467.95ms | 43.0% → 43.5% |     2.04s → 2.51s | `_format_str_once`     | `src/black/src/black/__init__.py:1215`       |
|    +16.8% | +264.00ms | 33.0% → 31.7% |     1.56s → 1.83s | `parse_tokens`         | `src/black/src/blib2to3/pgen2/driver.py:114` |
|       new | +116.86ms |   0.0% → 2.0% |     0ms → 116.9ms | `is_complex_subscript` | `src/black/src/black/lines.py:430`           |
|       new | +108.75ms |   0.0% → 1.9% |     0ms → 108.7ms | `__init__`             | `src/black/src/blib2to3/pytree.py:389`       |
| +10787.3% |  +66.95ms |  <0.1% → 1.2% |    0.6ms → 67.6ms | `visit`                | `src/black/src/black/nodes.py:152`           |
|       new |  +64.84ms |   0.0% → 1.1% |      0ms → 64.8ms | `__contains__`         | `src/black/src/black/mode.py:249`            |
|    +12.5% |  +36.02ms |   6.0% → 5.6% | 288.0ms → 324.0ms | `get_features_used`    | `src/black/src/black/__init__.py:1286`       |
|    +22.4% |  +28.04ms |          2.6% | 125.0ms → 153.0ms | `_stringify_ast`       | `src/black/src/black/parsing.py:182`         |
|    +22.3% |  +25.73ms |          2.4% | 115.2ms → 141.0ms | `compile`              | `<built-in>`                                 |
|    +26.6% |  +15.60ms |   1.2% → 1.3% |   58.5ms → 74.1ms | `<module>`             | `src/black/src/black/__init__.py:1`          |
|       new |  +11.97ms |   0.0% → 0.2% |      0ms → 12.0ms | `visit_stmt`           | `src/black/src/black/linegen.py:199`         |
|    +20.7% |  +10.99ms |          1.1% |   53.0ms → 64.0ms | `<module>`             | `src/black/src/black/nodes.py:1`             |
|       new |   +4.62ms |   0.0% → 0.1% |       0ms → 4.6ms | `visit_default`        | `src/black/src/black/linegen.py:134`         |
|    +95.7% |   +2.81ms |          0.1% |     2.9ms → 5.7ms | `assert_stable`        | `src/black/src/black/__init__.py:1543`       |
|       new |   +2.53ms |  0.0% → <0.1% |       0ms → 2.5ms | `_addtoken`            | `src/black/src/blib2to3/pgen2/parse.py:278`  |
|    +34.1% |   +1.53ms |          0.1% |     4.5ms → 6.0ms | `<module>`             | `venv/bin/black:1`                           |
|       new |   +1.01ms |  0.0% → <0.1% |       0ms → 1.0ms | `append`               | `src/black/src/black/lines.py:52`            |
|       new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms | `main`                 | `src/black/src/black/__init__.py:240`        |
|       new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms | `convert`              | `src/black/src/blib2to3/pytree.py:475`       |
|    +19.6% |   +0.99ms |          0.1% |     5.1ms → 6.1ms | `format_str`           | `src/black/src/black/__init__.py:1168`       |

##### Ours

|    Change |     Delta |             % |              Time | Function                            | Location                                     |
| --------: | --------: | ------------: | ----------------: | ----------------------------------- | -------------------------------------------- |
|    +22.9% | +467.95ms | 43.0% → 43.5% |     2.04s → 2.51s | `_format_str_once`                  | `src/black/src/black/__init__.py:1215`       |
|    +16.8% | +264.00ms | 33.0% → 31.7% |     1.56s → 1.83s | `parse_tokens`                      | `src/black/src/blib2to3/pgen2/driver.py:114` |
|       new | +116.86ms |   0.0% → 2.0% |     0ms → 116.9ms | `is_complex_subscript`              | `src/black/src/black/lines.py:430`           |
|       new | +108.75ms |   0.0% → 1.9% |     0ms → 108.7ms | `__init__`                          | `src/black/src/blib2to3/pytree.py:389`       |
| +10787.3% |  +66.95ms |  <0.1% → 1.2% |    0.6ms → 67.6ms | `visit`                             | `src/black/src/black/nodes.py:152`           |
|       new |  +64.84ms |   0.0% → 1.1% |      0ms → 64.8ms | `__contains__`                      | `src/black/src/black/mode.py:249`            |
|    +12.5% |  +36.02ms |   6.0% → 5.6% | 288.0ms → 324.0ms | `get_features_used`                 | `src/black/src/black/__init__.py:1286`       |
|    +22.4% |  +28.04ms |          2.6% | 125.0ms → 153.0ms | `_stringify_ast`                    | `src/black/src/black/parsing.py:182`         |
|    +26.6% |  +15.60ms |   1.2% → 1.3% |   58.5ms → 74.1ms | `<module>`                          | `src/black/src/black/__init__.py:1`          |
|       new |  +11.97ms |   0.0% → 0.2% |      0ms → 12.0ms | `visit_stmt`                        | `src/black/src/black/linegen.py:199`         |
|    +20.7% |  +10.99ms |          1.1% |   53.0ms → 64.0ms | `<module>`                          | `src/black/src/black/nodes.py:1`             |
|       new |   +4.62ms |   0.0% → 0.1% |       0ms → 4.6ms | `visit_default`                     | `src/black/src/black/linegen.py:134`         |
|    +95.7% |   +2.81ms |          0.1% |     2.9ms → 5.7ms | `assert_stable`                     | `src/black/src/black/__init__.py:1543`       |
|       new |   +2.53ms |  0.0% → <0.1% |       0ms → 2.5ms | `_addtoken`                         | `src/black/src/blib2to3/pgen2/parse.py:278`  |
|    +34.1% |   +1.53ms |          0.1% |     4.5ms → 6.0ms | `<module>`                          | `venv/bin/black:1`                           |
|       new |   +1.01ms |  0.0% → <0.1% |       0ms → 1.0ms | `append`                            | `src/black/src/black/lines.py:52`            |
|       new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms | `main`                              | `src/black/src/black/__init__.py:240`        |
|       new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms | `convert`                           | `src/black/src/blib2to3/pytree.py:475`       |
|    +19.6% |   +0.99ms |          0.1% |     5.1ms → 6.1ms | `format_str`                        | `src/black/src/black/__init__.py:1168`       |
|       new |   +0.19ms |  0.0% → <0.1% |       0ms → 0.2ms | `_hugging_power_ops_line_to_string` | `src/black/src/black/linegen.py:590`         |

##### Native

| Change |    Delta |    % |              Time | Function  | Location     |
| -----: | -------: | ---: | ----------------: | --------- | ------------ |
| +22.3% | +25.73ms | 2.4% | 115.2ms → 141.0ms | `compile` | `<built-in>` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |              Time | Function                          | Location                                               |
| ------: | -------: | -----------: | ----------------: | --------------------------------- | ------------------------------------------------------ |
| removed | -88.35ms |  1.9% → 0.0% |      88.4ms → 0ms | `object.__new__`                  | `<built-in>`                                           |
| removed | -57.39ms |  1.2% → 0.0% |      57.4ms → 0ms | `generate_comments`               | `src/black/src/black/comments.py:52`                   |
| removed | -47.88ms |  1.0% → 0.0% |      47.9ms → 0ms | `original_is_simple_lookup_func`  | `src/black/src/black/trans.py:158`                     |
|   -3.5% |  -9.81ms |  5.9% → 4.7% | 281.2ms → 271.4ms | `assert_equivalent`               | `src/black/src/black/__init__.py:1510`                 |
| removed |  -6.99ms |  0.1% → 0.0% |       7.0ms → 0ms | `addtoken`                        | `src/black/src/blib2to3/pgen2/parse.py:230`            |
| removed |  -1.11ms | <0.1% → 0.0% |       1.1ms → 0ms | `parse_string`                    | `src/black/src/blib2to3/pgen2/driver.py:198`           |
|  -50.7% |  -1.01ms |        <0.1% |     2.0ms → 1.0ms | `main`                            | `venv/lib/python3.11/site-packages/click/core.py:1484` |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms | `transform_line`                  | `src/black/src/black/linegen.py:601`                   |
| removed |  -0.66ms | <0.1% → 0.0% |       0.7ms → 0ms | `pop`                             | `src/black/src/blib2to3/pgen2/parse.py:398`            |
| removed |  -0.13ms | <0.1% → 0.0% |       0.1ms → 0ms | `hug_power_op`                    | `src/black/src/black/trans.py:81`                      |
|   -3.8% |  -0.11ms | 0.1% → <0.1% |     3.0ms → 2.9ms | `<module>`                        | `src/black/src/black/comments.py:1`                    |
|   -2.4% |  -0.09ms |         0.1% |     4.0ms → 3.9ms | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1042`                 |

##### Ours

|  Change |    Delta |            % |              Time | Function                          | Location                                     |
| ------: | -------: | -----------: | ----------------: | --------------------------------- | -------------------------------------------- |
| removed | -57.39ms |  1.2% → 0.0% |      57.4ms → 0ms | `generate_comments`               | `src/black/src/black/comments.py:52`         |
| removed | -47.88ms |  1.0% → 0.0% |      47.9ms → 0ms | `original_is_simple_lookup_func`  | `src/black/src/black/trans.py:158`           |
|   -3.5% |  -9.81ms |  5.9% → 4.7% | 281.2ms → 271.4ms | `assert_equivalent`               | `src/black/src/black/__init__.py:1510`       |
| removed |  -6.99ms |  0.1% → 0.0% |       7.0ms → 0ms | `addtoken`                        | `src/black/src/blib2to3/pgen2/parse.py:230`  |
| removed |  -1.11ms | <0.1% → 0.0% |       1.1ms → 0ms | `parse_string`                    | `src/black/src/blib2to3/pgen2/driver.py:198` |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms | `transform_line`                  | `src/black/src/black/linegen.py:601`         |
| removed |  -0.66ms | <0.1% → 0.0% |       0.7ms → 0ms | `pop`                             | `src/black/src/blib2to3/pgen2/parse.py:398`  |
| removed |  -0.13ms | <0.1% → 0.0% |       0.1ms → 0ms | `hug_power_op`                    | `src/black/src/black/trans.py:81`            |
|   -3.8% |  -0.11ms | 0.1% → <0.1% |     3.0ms → 2.9ms | `<module>`                        | `src/black/src/black/comments.py:1`          |
|   -2.4% |  -0.09ms |         0.1% |     4.0ms → 3.9ms | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1042`       |

##### Native

|  Change |    Delta |           % |         Time | Function         | Location     |
| ------: | -------: | ----------: | -----------: | ---------------- | ------------ |
| removed | -88.35ms | 1.9% → 0.0% | 88.4ms → 0ms | `object.__new__` | `<built-in>` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |     Delta |             % |             Time | Function                          | Location                                                   |
| ------: | --------: | ------------: | ---------------: | --------------------------------- | ---------------------------------------------------------- |
|  +21.4% |   +1.019s |        100.0% |    4.76s → 5.78s | `<module>`                        | `venv/bin/black:1`                                         |
|  +21.4% | +992.00ms | 97.5% → 97.4% |    4.64s → 5.63s | `main`                            | `src/black/src/black/__init__.py:240`                      |
|  +21.4% | +992.00ms | 97.5% → 97.4% |    4.64s → 5.63s | `new_func`                        | `venv/lib/python3.11/site-packages/click/decorators.py:33` |
|  +21.4% | +992.00ms | 97.5% → 97.4% |    4.64s → 5.63s | `invoke`                          | `venv/lib/python3.11/site-packages/click/core.py:857`      |
|  +21.4% | +992.00ms | 97.5% → 97.4% |    4.64s → 5.63s | `invoke`                          | `venv/lib/python3.11/site-packages/click/core.py:1401`     |
|  +21.4% | +991.00ms | 97.5% → 97.4% |    4.64s → 5.63s | `format_file_in_place`            | `src/black/src/black/__init__.py:922`                      |
|  +21.4% | +991.00ms | 97.5% → 97.4% |    4.64s → 5.63s | `reformat_one`                    | `src/black/src/black/__init__.py:865`                      |
|  +21.3% | +990.99ms |         97.5% |    4.64s → 5.63s | `main`                            | `venv/lib/python3.11/site-packages/click/core.py:1484`     |
|  +21.3% | +990.99ms |         97.5% |    4.64s → 5.63s | `__call__`                        | `venv/lib/python3.11/site-packages/click/core.py:1629`     |
|  +21.3% | +990.99ms |         97.5% |    4.64s → 5.63s | `patched_main`                    | `src/black/src/black/__init__.py:1580`                     |
|  +21.3% | +990.83ms | 97.5% → 97.4% |    4.64s → 5.63s | `format_file_contents`            | `src/black/src/black/__init__.py:1059`                     |
|  +23.0% | +943.16ms | 86.3% → 87.4% |    4.10s → 5.05s | `_format_str_once`                | `src/black/src/black/__init__.py:1215`                     |
|  +34.5% | +651.74ms | 39.7% → 44.0% |    1.88s → 2.54s | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1042`                     |
|  +44.6% | +607.87ms | 28.6% → 34.1% |    1.36s → 1.97s | `assert_stable`                   | `src/black/src/black/__init__.py:1543`                     |
|  +12.3% | +339.09ms | 57.8% → 53.5% |    2.75s → 3.09s | `format_str`                      | `src/black/src/black/__init__.py:1168`                     |
|  +16.8% | +280.27ms | 35.0% → 33.7% |    1.66s → 1.94s | `parse_tokens`                    | `src/black/src/blib2to3/pgen2/driver.py:114`               |
|  +16.8% | +279.16ms | 35.0% → 33.7% |    1.66s → 1.94s | `parse_string`                    | `src/black/src/blib2to3/pgen2/driver.py:198`               |
|  +16.8% | +279.16ms | 35.0% → 33.7% |    1.66s → 1.94s | `lib2to3_parse`                   | `src/black/src/black/parsing.py:55`                        |
| +248.2% | +144.01ms |   1.2% → 3.5% | 58.0ms → 202.0ms | `visit_default`                   | `src/black/src/black/linegen.py:134`                       |
| +248.2% | +144.01ms |   1.2% → 3.5% | 58.0ms → 202.0ms | `visit`                           | `src/black/src/black/nodes.py:152`                         |

##### Ours

|  Change |     Delta |             % |             Time | Function                          | Location                                     |
| ------: | --------: | ------------: | ---------------: | --------------------------------- | -------------------------------------------- |
|  +21.4% |   +1.019s |        100.0% |    4.76s → 5.78s | `<module>`                        | `venv/bin/black:1`                           |
|  +21.4% | +992.00ms | 97.5% → 97.4% |    4.64s → 5.63s | `main`                            | `src/black/src/black/__init__.py:240`        |
|  +21.4% | +991.00ms | 97.5% → 97.4% |    4.64s → 5.63s | `format_file_in_place`            | `src/black/src/black/__init__.py:922`        |
|  +21.4% | +991.00ms | 97.5% → 97.4% |    4.64s → 5.63s | `reformat_one`                    | `src/black/src/black/__init__.py:865`        |
|  +21.3% | +990.99ms |         97.5% |    4.64s → 5.63s | `patched_main`                    | `src/black/src/black/__init__.py:1580`       |
|  +21.3% | +990.83ms | 97.5% → 97.4% |    4.64s → 5.63s | `format_file_contents`            | `src/black/src/black/__init__.py:1059`       |
|  +23.0% | +943.16ms | 86.3% → 87.4% |    4.10s → 5.05s | `_format_str_once`                | `src/black/src/black/__init__.py:1215`       |
|  +34.5% | +651.74ms | 39.7% → 44.0% |    1.88s → 2.54s | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1042`       |
|  +44.6% | +607.87ms | 28.6% → 34.1% |    1.36s → 1.97s | `assert_stable`                   | `src/black/src/black/__init__.py:1543`       |
|  +12.3% | +339.09ms | 57.8% → 53.5% |    2.75s → 3.09s | `format_str`                      | `src/black/src/black/__init__.py:1168`       |
|  +16.8% | +280.27ms | 35.0% → 33.7% |    1.66s → 1.94s | `parse_tokens`                    | `src/black/src/blib2to3/pgen2/driver.py:114` |
|  +16.8% | +279.16ms | 35.0% → 33.7% |    1.66s → 1.94s | `parse_string`                    | `src/black/src/blib2to3/pgen2/driver.py:198` |
|  +16.8% | +279.16ms | 35.0% → 33.7% |    1.66s → 1.94s | `lib2to3_parse`                   | `src/black/src/black/parsing.py:55`          |
| +248.2% | +144.01ms |   1.2% → 3.5% | 58.0ms → 202.0ms | `visit_default`                   | `src/black/src/black/linegen.py:134`         |
| +248.2% | +144.01ms |   1.2% → 3.5% | 58.0ms → 202.0ms | `visit`                           | `src/black/src/black/nodes.py:152`           |
| +248.2% | +144.01ms |   1.2% → 3.5% | 58.0ms → 202.0ms | `visit_default`                   | `src/black/src/black/nodes.py:176`           |
| +227.6% | +132.04ms |   1.2% → 3.3% | 58.0ms → 190.1ms | `visit_funcdef`                   | `src/black/src/black/linegen.py:254`         |
|     new | +118.03ms |   0.0% → 2.0% |    0ms → 118.0ms | `visit_dictsetmaker`              | `src/black/src/black/linegen.py:234`         |
|     new | +117.87ms |   0.0% → 2.0% |    0ms → 117.9ms | `append`                          | `src/black/src/black/lines.py:52`            |
|     new | +117.87ms |   0.0% → 2.0% |    0ms → 117.9ms | `visit_STRING`                    | `src/black/src/black/linegen.py:413`         |

##### Native

| Change |    Delta |    % |              Time | Function  | Location     |
| -----: | -------: | ---: | ----------------: | --------- | ------------ |
| +22.3% | +25.73ms | 2.4% | 115.2ms → 141.0ms | `compile` | `<built-in>` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |           % |         Time | Function                         | Location                                    |
| ------: | -------: | ----------: | -----------: | -------------------------------- | ------------------------------------------- |
| removed | -89.01ms | 1.9% → 0.0% | 89.0ms → 0ms | `pop`                            | `src/black/src/blib2to3/pgen2/parse.py:398` |
| removed | -88.35ms | 1.9% → 0.0% | 88.4ms → 0ms | `object.__new__`                 | `<built-in>`                                |
| removed | -88.35ms | 1.9% → 0.0% | 88.4ms → 0ms | `__new__`                        | `src/black/src/blib2to3/pytree.py:81`       |
| removed | -58.01ms | 1.2% → 0.0% | 58.0ms → 0ms | `visit_power`                    | `src/black/src/black/linegen.py:341`        |
| removed | -58.01ms | 1.2% → 0.0% | 58.0ms → 0ms | `visit_simple_stmt`              | `src/black/src/black/linegen.py:295`        |
| removed | -57.39ms | 1.2% → 0.0% | 57.4ms → 0ms | `generate_comments`              | `src/black/src/black/comments.py:52`        |
| removed | -47.88ms | 1.0% → 0.0% | 47.9ms → 0ms | `original_is_simple_lookup_func` | `src/black/src/black/trans.py:158`          |

##### Ours

|  Change |    Delta |           % |         Time | Function                         | Location                                    |
| ------: | -------: | ----------: | -----------: | -------------------------------- | ------------------------------------------- |
| removed | -89.01ms | 1.9% → 0.0% | 89.0ms → 0ms | `pop`                            | `src/black/src/blib2to3/pgen2/parse.py:398` |
| removed | -88.35ms | 1.9% → 0.0% | 88.4ms → 0ms | `__new__`                        | `src/black/src/blib2to3/pytree.py:81`       |
| removed | -58.01ms | 1.2% → 0.0% | 58.0ms → 0ms | `visit_power`                    | `src/black/src/black/linegen.py:341`        |
| removed | -58.01ms | 1.2% → 0.0% | 58.0ms → 0ms | `visit_simple_stmt`              | `src/black/src/black/linegen.py:295`        |
| removed | -57.39ms | 1.2% → 0.0% | 57.4ms → 0ms | `generate_comments`              | `src/black/src/black/comments.py:52`        |
| removed | -47.88ms | 1.0% → 0.0% | 47.9ms → 0ms | `original_is_simple_lookup_func` | `src/black/src/black/trans.py:158`          |

##### Native

|  Change |    Delta |           % |         Time | Function         | Location     |
| ------: | -------: | ----------: | -----------: | ---------------- | ------------ |
| removed | -88.35ms | 1.9% → 0.0% | 88.4ms → 0ms | `object.__new__` | `<built-in>` |

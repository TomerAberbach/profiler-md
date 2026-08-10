# Sampling profile diff

Took 5.19s → 7.74s (+2.550s, +49.1%) over 35 samples (148.4ms → 221.3ms per sample).

| Category    | Change |    Delta |             % |              Time | Samples |
| ----------- | -----: | -------: | ------------: | ----------------: | ------: |
| Ours        | +49.8% |  +2.461s | 95.2% → 95.6% |     4.94s → 7.40s | 32 → 33 |
| Native      | +35.4% | +88.11ms |   4.8% → 4.4% | 249.2ms → 337.3ms |   2 → 1 |
| Third-party |  +6.5% |  +0.06ms |         <0.1% |             1.0ms |       1 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

##### Ours

|  Change |     Delta |             % |              Time | Samples | Function                          | Location                                     |
| ------: | --------: | ------------: | ----------------: | ------: | --------------------------------- | -------------------------------------------- |
|  +44.2% | +741.74ms | 32.3% → 31.2% |     1.67s → 2.41s |       3 | `parse_tokens`                    | `src/black/src/blib2to3/pgen2/driver.py:114` |
|  +32.0% | +711.45ms | 42.7% → 37.9% |     2.21s → 2.93s |       3 | `_format_str_once`                | `src/black/src/black/__init__.py:1236`       |
| +148.2% | +408.86ms |   5.3% → 8.8% | 275.9ms → 684.8ms |       1 | `assert_equivalent`               | `src/black/src/black/__init__.py:1524`       |
|     new | +350.42ms |   0.0% → 4.5% |     0ms → 350.4ms |   0 → 3 | `changed`                         | `src/black/src/blib2to3/pytree.py:171`       |
|     new | +312.04ms |   0.0% → 4.0% |     0ms → 312.0ms |   0 → 1 | `push`                            | `src/black/src/blib2to3/pgen2/parse.py:386`  |
| +154.5% | +104.06ms |   1.3% → 2.2% |  67.4ms → 171.4ms |       1 | `<module>`                        | `src/black/src/black/__init__.py:1`          |
|  +32.5% |  +98.07ms |   5.8% → 5.2% | 301.9ms → 400.0ms |       3 | `get_features_used`               | `src/black/src/black/__init__.py:1307`       |
|     new |  +79.46ms |   0.0% → 1.0% |      0ms → 79.5ms |   0 → 1 | `prefix`                          | `src/black/src/blib2to3/pytree.py:480`       |
| +184.0% |   +9.44ms |   0.1% → 0.2% |    5.1ms → 14.6ms |       1 | `<module>`                        | `venv/bin/black:1`                           |
| +120.1% |   +7.35ms |   0.1% → 0.2% |    6.1ms → 13.5ms |       1 | `format_str`                      | `src/black/src/black/__init__.py:1189`       |
| +733.4% |   +4.68ms |  <0.1% → 0.1% |     0.6ms → 5.3ms |   1 → 5 | `visit`                           | `src/black/src/black/nodes.py:163`           |
|     new |   +4.56ms |   0.0% → 0.1% |       0ms → 4.6ms |   0 → 2 | `visit_stmt`                      | `src/black/src/black/linegen.py:199`         |
|     new |   +3.39ms |  0.0% → <0.1% |       0ms → 3.4ms |   0 → 1 | `reformat_one`                    | `src/black/src/black/__init__.py:860`        |
|     new |   +3.02ms |  0.0% → <0.1% |       0ms → 3.0ms |   0 → 1 | `addtoken`                        | `src/black/src/blib2to3/pgen2/parse.py:242`  |
|     new |   +1.93ms |  0.0% → <0.1% |       0ms → 1.9ms |   0 → 1 | `_addtoken`                       | `src/black/src/blib2to3/pgen2/parse.py:290`  |
|  +26.1% |   +1.06ms |          0.1% |     4.1ms → 5.1ms |       1 | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1037`       |
|  +48.6% |   +0.27ms |         <0.1% |     0.6ms → 0.8ms |       1 | `parse_string`                    | `src/black/src/blib2to3/pgen2/driver.py:198` |
|   +0.8% |   +0.01ms |         <0.1% |             1.0ms |       1 | `lib2to3_parse`                   | `src/black/src/black/parsing.py:55`          |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |     Delta |            % |          Time | Samples | Function                                           | Location                                    |
| ------: | --------: | -----------: | ------------: | ------: | -------------------------------------------------- | ------------------------------------------- |
| removed | -110.24ms |  2.1% → 0.0% | 110.2ms → 0ms |   1 → 0 | `object.__new__`                                   | `<built-in>`                                |
| removed |  -79.88ms |  1.5% → 0.0% |  79.9ms → 0ms |   2 → 0 | `_stringify_ast`                                   | `src/black/src/black/parsing.py:174`        |
| removed |  -68.41ms |  1.3% → 0.0% |  68.4ms → 0ms |   1 → 0 | `visit_default`                                    | `src/black/src/black/linegen.py:134`        |
| removed |  -58.62ms |  1.1% → 0.0% |  58.6ms → 0ms |   1 → 0 | `<module>`                                         | `src/black/src/black/nodes.py:1`            |
| removed |  -55.93ms |  1.1% → 0.0% |  55.9ms → 0ms |   1 → 0 | `contains_implicit_multiline_string_with_comments` | `src/black/src/black/lines.py:261`          |
| removed |  -54.99ms |  1.1% → 0.0% |  55.0ms → 0ms |   1 → 0 | `_stringify_ast_with_new_parent`                   | `src/black/src/black/parsing.py:166`        |
| removed |  -52.00ms |  1.0% → 0.0% |  52.0ms → 0ms |   1 → 0 | `convert_one_fmt_off_pair`                         | `src/black/src/black/comments.py:177`       |
| removed |   -3.02ms |  0.1% → 0.0% |   3.0ms → 0ms |   1 → 0 | `shift`                                            | `src/black/src/blib2to3/pgen2/parse.py:373` |
| removed |   -2.91ms |  0.1% → 0.0% |   2.9ms → 0ms |   1 → 0 | `<module>`                                         | `src/black/src/black/comments.py:1`         |
| removed |   -1.96ms | <0.1% → 0.0% |   2.0ms → 0ms |   1 → 0 | `format_file_in_place`                             | `src/black/src/black/__init__.py:917`       |
| removed |   -0.98ms | <0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `convert`                                          | `src/black/src/blib2to3/pytree.py:486`      |
| removed |   -0.77ms | <0.1% → 0.0% |   0.8ms → 0ms |   1 → 0 | `__new__`                                          | `src/black/src/blib2to3/pytree.py:81`       |
|  -11.6% |   -0.40ms | 0.1% → <0.1% | 3.4ms → 3.0ms |       1 | `assert_stable`                                    | `src/black/src/black/__init__.py:1557`      |
| removed |   -0.09ms | <0.1% → 0.0% |   0.1ms → 0ms |   1 → 0 | `transform_line`                                   | `src/black/src/black/linegen.py:601`        |
|   -0.2% |   -1.83µs |        <0.1% |         1.0ms |       1 | `main`                                             | `src/black/src/black/__init__.py:244`       |

##### Ours

|  Change |    Delta |            % |          Time | Samples | Function                                           | Location                                    |
| ------: | -------: | -----------: | ------------: | ------: | -------------------------------------------------- | ------------------------------------------- |
| removed | -79.88ms |  1.5% → 0.0% |  79.9ms → 0ms |   2 → 0 | `_stringify_ast`                                   | `src/black/src/black/parsing.py:174`        |
| removed | -68.41ms |  1.3% → 0.0% |  68.4ms → 0ms |   1 → 0 | `visit_default`                                    | `src/black/src/black/linegen.py:134`        |
| removed | -58.62ms |  1.1% → 0.0% |  58.6ms → 0ms |   1 → 0 | `<module>`                                         | `src/black/src/black/nodes.py:1`            |
| removed | -55.93ms |  1.1% → 0.0% |  55.9ms → 0ms |   1 → 0 | `contains_implicit_multiline_string_with_comments` | `src/black/src/black/lines.py:261`          |
| removed | -54.99ms |  1.1% → 0.0% |  55.0ms → 0ms |   1 → 0 | `_stringify_ast_with_new_parent`                   | `src/black/src/black/parsing.py:166`        |
| removed | -52.00ms |  1.0% → 0.0% |  52.0ms → 0ms |   1 → 0 | `convert_one_fmt_off_pair`                         | `src/black/src/black/comments.py:177`       |
| removed |  -3.02ms |  0.1% → 0.0% |   3.0ms → 0ms |   1 → 0 | `shift`                                            | `src/black/src/blib2to3/pgen2/parse.py:373` |
| removed |  -2.91ms |  0.1% → 0.0% |   2.9ms → 0ms |   1 → 0 | `<module>`                                         | `src/black/src/black/comments.py:1`         |
| removed |  -1.96ms | <0.1% → 0.0% |   2.0ms → 0ms |   1 → 0 | `format_file_in_place`                             | `src/black/src/black/__init__.py:917`       |
| removed |  -0.98ms | <0.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `convert`                                          | `src/black/src/blib2to3/pytree.py:486`      |
| removed |  -0.77ms | <0.1% → 0.0% |   0.8ms → 0ms |   1 → 0 | `__new__`                                          | `src/black/src/blib2to3/pytree.py:81`       |
|  -11.6% |  -0.40ms | 0.1% → <0.1% | 3.4ms → 3.0ms |       1 | `assert_stable`                                    | `src/black/src/black/__init__.py:1557`      |
| removed |  -0.09ms | <0.1% → 0.0% |   0.1ms → 0ms |   1 → 0 | `transform_line`                                   | `src/black/src/black/linegen.py:601`        |
|   -0.2% |  -1.83µs |        <0.1% |         1.0ms |       1 | `main`                                             | `src/black/src/black/__init__.py:244`       |

##### Native

|  Change |     Delta |           % |          Time | Samples | Function         | Location     |
| ------: | --------: | ----------: | ------------: | ------: | ---------------- | ------------ |
| removed | -110.24ms | 2.1% → 0.0% | 110.2ms → 0ms |   1 → 0 | `object.__new__` | `<built-in>` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |     Delta |             % |             Time | Samples | Function                          | Location                                               |
| ------: | --------: | ------------: | ---------------: | ------: | --------------------------------- | ------------------------------------------------------ |
|  +49.1% |   +2.550s |        100.0% |    5.19s → 7.74s |      35 | `<module>`                        | `venv/bin/black:1`                                     |
|  +49.4% |   +2.498s | 97.4% → 97.6% |    5.06s → 7.55s | 31 → 33 | `__call__`                        | `venv/lib/python3.11/site-packages/click/core.py:1567` |
|  +49.4% |   +2.498s | 97.4% → 97.6% |    5.06s → 7.55s | 31 → 33 | `patched_main`                    | `src/black/src/black/__init__.py:1594`                 |
|  +49.4% |   +2.497s | 97.4% → 97.6% |    5.05s → 7.55s | 29 → 31 | `reformat_one`                    | `src/black/src/black/__init__.py:860`                  |
|  +49.4% |   +2.497s | 97.4% → 97.6% |    5.05s → 7.55s | 30 → 32 | `main`                            | `src/black/src/black/__init__.py:244`                  |
|  +49.4% |   +2.496s | 97.3% → 97.5% |    5.05s → 7.55s | 28 → 30 | `format_file_contents`            | `src/black/src/black/__init__.py:1054`                 |
|  +49.3% |   +2.494s | 97.4% → 97.5% |    5.05s → 7.55s | 29 → 30 | `format_file_in_place`            | `src/black/src/black/__init__.py:917`                  |
|  +44.9% |   +2.016s | 86.5% → 84.1% |    4.49s → 6.50s | 20 → 25 | `_format_str_once`                | `src/black/src/black/__init__.py:1236`                 |
|  +49.4% |   +1.494s | 58.3% → 58.4% |    3.02s → 4.52s | 16 → 17 | `format_str`                      | `src/black/src/black/__init__.py:1189`                 |
|  +49.4% |   +1.001s | 39.0% → 39.1% |    2.02s → 3.03s | 12 → 13 | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1037`                 |
|  +52.6% | +944.01ms | 34.5% → 35.4% |    1.79s → 2.73s |   9 → 8 | `lib2to3_parse`                   | `src/black/src/black/parsing.py:55`                    |
|  +52.6% | +944.00ms | 34.5% → 35.3% |    1.79s → 2.73s |   8 → 7 | `parse_string`                    | `src/black/src/blib2to3/pgen2/driver.py:198`           |
|  +52.6% | +943.73ms | 34.5% → 35.3% |    1.79s → 2.73s |   7 → 6 | `parse_tokens`                    | `src/black/src/blib2to3/pgen2/driver.py:114`           |
|  +35.9% | +528.59ms | 28.4% → 25.9% |       1.47s → 2s |  6 → 10 | `assert_stable`                   | `src/black/src/black/__init__.py:1557`                 |
|  +85.9% | +472.34ms | 10.6% → 13.2% |  549.8ms → 1.02s |   5 → 2 | `assert_equivalent`               | `src/black/src/black/__init__.py:1524`                 |
|     new | +429.88ms |   0.0% → 5.6% |    0ms → 429.9ms |   0 → 4 | `prefix`                          | `src/black/src/blib2to3/pytree.py:480`                 |
| +536.9% | +370.71ms |   1.3% → 5.7% | 69.0ms → 439.8ms |  2 → 11 | `visit_default`                   | `src/black/src/black/linegen.py:134`                   |
| +536.9% | +370.71ms |   1.3% → 5.7% | 69.0ms → 439.8ms |  2 → 11 | `visit`                           | `src/black/src/black/nodes.py:163`                     |
| +536.9% | +370.71ms |   1.3% → 5.7% | 69.0ms → 439.8ms |  2 → 11 | `visit_default`                   | `src/black/src/black/nodes.py:187`                     |
| +536.9% | +370.71ms |   1.3% → 5.7% | 69.0ms → 439.8ms |  2 → 11 | `visit_suite`                     | `src/black/src/black/linegen.py:288`                   |

##### Ours

|  Change |     Delta |             % |             Time | Samples | Function                          | Location                                     |
| ------: | --------: | ------------: | ---------------: | ------: | --------------------------------- | -------------------------------------------- |
|  +49.1% |   +2.550s |        100.0% |    5.19s → 7.74s |      35 | `<module>`                        | `venv/bin/black:1`                           |
|  +49.4% |   +2.498s | 97.4% → 97.6% |    5.06s → 7.55s | 31 → 33 | `patched_main`                    | `src/black/src/black/__init__.py:1594`       |
|  +49.4% |   +2.497s | 97.4% → 97.6% |    5.05s → 7.55s | 29 → 31 | `reformat_one`                    | `src/black/src/black/__init__.py:860`        |
|  +49.4% |   +2.497s | 97.4% → 97.6% |    5.05s → 7.55s | 30 → 32 | `main`                            | `src/black/src/black/__init__.py:244`        |
|  +49.4% |   +2.496s | 97.3% → 97.5% |    5.05s → 7.55s | 28 → 30 | `format_file_contents`            | `src/black/src/black/__init__.py:1054`       |
|  +49.3% |   +2.494s | 97.4% → 97.5% |    5.05s → 7.55s | 29 → 30 | `format_file_in_place`            | `src/black/src/black/__init__.py:917`        |
|  +44.9% |   +2.016s | 86.5% → 84.1% |    4.49s → 6.50s | 20 → 25 | `_format_str_once`                | `src/black/src/black/__init__.py:1236`       |
|  +49.4% |   +1.494s | 58.3% → 58.4% |    3.02s → 4.52s | 16 → 17 | `format_str`                      | `src/black/src/black/__init__.py:1189`       |
|  +49.4% |   +1.001s | 39.0% → 39.1% |    2.02s → 3.03s | 12 → 13 | `check_stability_and_equivalence` | `src/black/src/black/__init__.py:1037`       |
|  +52.6% | +944.01ms | 34.5% → 35.4% |    1.79s → 2.73s |   9 → 8 | `lib2to3_parse`                   | `src/black/src/black/parsing.py:55`          |
|  +52.6% | +944.00ms | 34.5% → 35.3% |    1.79s → 2.73s |   8 → 7 | `parse_string`                    | `src/black/src/blib2to3/pgen2/driver.py:198` |
|  +52.6% | +943.73ms | 34.5% → 35.3% |    1.79s → 2.73s |   7 → 6 | `parse_tokens`                    | `src/black/src/blib2to3/pgen2/driver.py:114` |
|  +35.9% | +528.59ms | 28.4% → 25.9% |       1.47s → 2s |  6 → 10 | `assert_stable`                   | `src/black/src/black/__init__.py:1557`       |
|  +85.9% | +472.34ms | 10.6% → 13.2% |  549.8ms → 1.02s |   5 → 2 | `assert_equivalent`               | `src/black/src/black/__init__.py:1524`       |
|     new | +429.88ms |   0.0% → 5.6% |    0ms → 429.9ms |   0 → 4 | `prefix`                          | `src/black/src/blib2to3/pytree.py:480`       |
| +536.9% | +370.71ms |   1.3% → 5.7% | 69.0ms → 439.8ms |  2 → 11 | `visit_default`                   | `src/black/src/black/linegen.py:134`         |
| +536.9% | +370.71ms |   1.3% → 5.7% | 69.0ms → 439.8ms |  2 → 11 | `visit`                           | `src/black/src/black/nodes.py:163`           |
| +536.9% | +370.71ms |   1.3% → 5.7% | 69.0ms → 439.8ms |  2 → 11 | `visit_default`                   | `src/black/src/black/nodes.py:187`           |
| +536.9% | +370.71ms |   1.3% → 5.7% | 69.0ms → 439.8ms |  2 → 11 | `visit_suite`                     | `src/black/src/black/linegen.py:288`         |
| +536.9% | +370.71ms |   1.3% → 5.7% | 69.0ms → 439.8ms |  2 → 11 | `visit_funcdef`                   | `src/black/src/black/linegen.py:254`         |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |     Delta |           % |          Time | Samples | Function                                           | Location                                    |
| ------: | --------: | ----------: | ------------: | ------: | -------------------------------------------------- | ------------------------------------------- |
| removed | -134.87ms | 2.6% → 0.0% | 134.9ms → 0ms |   3 → 0 | `_stringify_ast`                                   | `src/black/src/black/parsing.py:174`        |
| removed | -115.01ms | 2.2% → 0.0% | 115.0ms → 0ms |   4 → 0 | `shift`                                            | `src/black/src/blib2to3/pgen2/parse.py:373` |
| removed | -111.99ms | 2.2% → 0.0% | 112.0ms → 0ms |   3 → 0 | `convert`                                          | `src/black/src/blib2to3/pytree.py:486`      |
| removed | -111.01ms | 2.1% → 0.0% | 111.0ms → 0ms |   2 → 0 | `__new__`                                          | `src/black/src/blib2to3/pytree.py:81`       |
| removed | -110.24ms | 2.1% → 0.0% | 110.2ms → 0ms |   1 → 0 | `object.__new__`                                   | `<built-in>`                                |
| removed |  -61.53ms | 1.2% → 0.0% |  61.5ms → 0ms |   2 → 0 | `<module>`                                         | `src/black/src/black/comments.py:1`         |
| removed |  -58.62ms | 1.1% → 0.0% |  58.6ms → 0ms |   1 → 0 | `<module>`                                         | `src/black/src/black/nodes.py:1`            |
| removed |  -56.02ms | 1.1% → 0.0% |  56.0ms → 0ms |   2 → 0 | `transform_line`                                   | `src/black/src/black/linegen.py:601`        |
| removed |  -55.93ms | 1.1% → 0.0% |  55.9ms → 0ms |   1 → 0 | `contains_implicit_multiline_string_with_comments` | `src/black/src/black/lines.py:261`          |
| removed |  -54.99ms | 1.1% → 0.0% |  55.0ms → 0ms |   1 → 0 | `_stringify_ast_with_new_parent`                   | `src/black/src/black/parsing.py:166`        |
| removed |  -52.00ms | 1.0% → 0.0% |  52.0ms → 0ms |   1 → 0 | `convert_one_fmt_off_pair`                         | `src/black/src/black/comments.py:177`       |
| removed |  -52.00ms | 1.0% → 0.0% |  52.0ms → 0ms |   1 → 0 | `normalize_fmt_off`                                | `src/black/src/black/comments.py:168`       |

##### Ours

|  Change |     Delta |           % |          Time | Samples | Function                                           | Location                                    |
| ------: | --------: | ----------: | ------------: | ------: | -------------------------------------------------- | ------------------------------------------- |
| removed | -134.87ms | 2.6% → 0.0% | 134.9ms → 0ms |   3 → 0 | `_stringify_ast`                                   | `src/black/src/black/parsing.py:174`        |
| removed | -115.01ms | 2.2% → 0.0% | 115.0ms → 0ms |   4 → 0 | `shift`                                            | `src/black/src/blib2to3/pgen2/parse.py:373` |
| removed | -111.99ms | 2.2% → 0.0% | 112.0ms → 0ms |   3 → 0 | `convert`                                          | `src/black/src/blib2to3/pytree.py:486`      |
| removed | -111.01ms | 2.1% → 0.0% | 111.0ms → 0ms |   2 → 0 | `__new__`                                          | `src/black/src/blib2to3/pytree.py:81`       |
| removed |  -61.53ms | 1.2% → 0.0% |  61.5ms → 0ms |   2 → 0 | `<module>`                                         | `src/black/src/black/comments.py:1`         |
| removed |  -58.62ms | 1.1% → 0.0% |  58.6ms → 0ms |   1 → 0 | `<module>`                                         | `src/black/src/black/nodes.py:1`            |
| removed |  -56.02ms | 1.1% → 0.0% |  56.0ms → 0ms |   2 → 0 | `transform_line`                                   | `src/black/src/black/linegen.py:601`        |
| removed |  -55.93ms | 1.1% → 0.0% |  55.9ms → 0ms |   1 → 0 | `contains_implicit_multiline_string_with_comments` | `src/black/src/black/lines.py:261`          |
| removed |  -54.99ms | 1.1% → 0.0% |  55.0ms → 0ms |   1 → 0 | `_stringify_ast_with_new_parent`                   | `src/black/src/black/parsing.py:166`        |
| removed |  -52.00ms | 1.0% → 0.0% |  52.0ms → 0ms |   1 → 0 | `convert_one_fmt_off_pair`                         | `src/black/src/black/comments.py:177`       |
| removed |  -52.00ms | 1.0% → 0.0% |  52.0ms → 0ms |   1 → 0 | `normalize_fmt_off`                                | `src/black/src/black/comments.py:168`       |

##### Native

|  Change |     Delta |           % |          Time | Samples | Function         | Location     |
| ------: | --------: | ----------: | ------------: | ------: | ---------------- | ------------ |
| removed | -110.24ms | 2.1% → 0.0% | 110.2ms → 0ms |   1 → 0 | `object.__new__` | `<built-in>` |

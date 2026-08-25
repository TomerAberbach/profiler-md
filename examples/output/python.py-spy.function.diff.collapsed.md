# Sampling profile diff

Collected 186 samples → 163 samples (-23 samples, -12.4%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Ours             | -13.0% |   -23 | 95.2% → 94.5% | 177 → 154 |
| Unknown          | -22.2% |    -2 |   4.8% → 4.3% |     9 → 7 |
| Standard library |    new |    +2 |   0.0% → 1.2% |     0 → 2 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                           | Location                               |
| ------: | ----: | ----------: | ------: | -------------------------------------------------- | -------------------------------------- |
| +140.0% |    +7 | 2.7% → 7.4% |  5 → 12 | `generate_tokens`                                  | `blib2to3/pgen2/tokenize.py`           |
| +400.0% |    +4 | 0.5% → 3.1% |   1 → 5 | `transform_line`                                   | `black/linegen.py`                     |
| +400.0% |    +4 | 0.5% → 3.1% |   1 → 5 | `pop`                                              | `blib2to3/pgen2/parse.py`              |
|  +42.9% |    +3 | 3.8% → 6.1% |  7 → 10 | `generate_comments`                                | `black/comments.py`                    |
|     new |    +3 | 0.0% → 1.8% |   0 → 3 | `all_lines`                                        | `black/lines.py`                       |
|     new |    +3 | 0.0% → 1.8% |   0 → 3 | `<module>`                                         | `pathspec/patterns/gitignore/basic.py` |
| +200.0% |    +2 | 0.5% → 1.8% |   1 → 3 | `_format_str_once`                                 | `black/__init__.py`                    |
|     new |    +2 | 0.0% → 1.2% |   0 → 2 | `assert_equivalent`                                | `black/__init__.py`                    |
|  +40.0% |    +2 | 2.7% → 4.3% |   5 → 7 | `__init__`                                         | `<string>`                             |
|     new |    +2 | 0.0% → 1.2% |   0 → 2 | `<genexpr>`                                        | `black/__init__.py`                    |
|     new |    +2 | 0.0% → 1.2% |   0 → 2 | `is_split_before_delimiter`                        | `black/brackets.py`                    |
|     new |    +2 | 0.0% → 1.2% |   0 → 2 | `__post_init__`                                    | `black/linegen.py`                     |
|     new |    +1 | 0.0% → 0.6% |   0 → 1 | `visit_power`                                      | `black/linegen.py`                     |
|     new |    +1 | 0.0% → 0.6% |   0 → 1 | `normalize_string_quotes`                          | `black/strings.py`                     |
| +100.0% |    +1 | 0.5% → 1.2% |   1 → 2 | `prefix`                                           | `blib2to3/pytree.py`                   |
| +100.0% |    +1 | 0.5% → 1.2% |   1 → 2 | `remove`                                           | `blib2to3/pytree.py`                   |
|  +50.0% |    +1 | 1.1% → 1.8% |   2 → 3 | `mark`                                             | `black/brackets.py`                    |
|     new |    +1 | 0.0% → 0.6% |   0 → 1 | `_missing_`                                        | `enum.py`                              |
|     new |    +1 | 0.0% → 0.6% |   0 → 1 | `_call_with_frames_removed`                        | `<frozen importlib._bootstrap>`        |
|     new |    +1 | 0.0% → 0.6% |   0 → 1 | `contains_implicit_multiline_string_with_comments` | `black/lines.py`                       |

##### Ours

|  Change | Delta |           % | Samples | Function                                           | Location                               |
| ------: | ----: | ----------: | ------: | -------------------------------------------------- | -------------------------------------- |
| +140.0% |    +7 | 2.7% → 7.4% |  5 → 12 | `generate_tokens`                                  | `blib2to3/pgen2/tokenize.py`           |
| +400.0% |    +4 | 0.5% → 3.1% |   1 → 5 | `transform_line`                                   | `black/linegen.py`                     |
| +400.0% |    +4 | 0.5% → 3.1% |   1 → 5 | `pop`                                              | `blib2to3/pgen2/parse.py`              |
|  +42.9% |    +3 | 3.8% → 6.1% |  7 → 10 | `generate_comments`                                | `black/comments.py`                    |
|     new |    +3 | 0.0% → 1.8% |   0 → 3 | `all_lines`                                        | `black/lines.py`                       |
|     new |    +3 | 0.0% → 1.8% |   0 → 3 | `<module>`                                         | `pathspec/patterns/gitignore/basic.py` |
| +200.0% |    +2 | 0.5% → 1.8% |   1 → 3 | `_format_str_once`                                 | `black/__init__.py`                    |
|     new |    +2 | 0.0% → 1.2% |   0 → 2 | `assert_equivalent`                                | `black/__init__.py`                    |
|  +40.0% |    +2 | 2.7% → 4.3% |   5 → 7 | `__init__`                                         | `<string>`                             |
|     new |    +2 | 0.0% → 1.2% |   0 → 2 | `<genexpr>`                                        | `black/__init__.py`                    |
|     new |    +2 | 0.0% → 1.2% |   0 → 2 | `is_split_before_delimiter`                        | `black/brackets.py`                    |
|     new |    +2 | 0.0% → 1.2% |   0 → 2 | `__post_init__`                                    | `black/linegen.py`                     |
|     new |    +1 | 0.0% → 0.6% |   0 → 1 | `visit_power`                                      | `black/linegen.py`                     |
|     new |    +1 | 0.0% → 0.6% |   0 → 1 | `normalize_string_quotes`                          | `black/strings.py`                     |
| +100.0% |    +1 | 0.5% → 1.2% |   1 → 2 | `prefix`                                           | `blib2to3/pytree.py`                   |
| +100.0% |    +1 | 0.5% → 1.2% |   1 → 2 | `remove`                                           | `blib2to3/pytree.py`                   |
|  +50.0% |    +1 | 1.1% → 1.8% |   2 → 3 | `mark`                                             | `black/brackets.py`                    |
|     new |    +1 | 0.0% → 0.6% |   0 → 1 | `_missing_`                                        | `enum.py`                              |
|     new |    +1 | 0.0% → 0.6% |   0 → 1 | `contains_implicit_multiline_string_with_comments` | `black/lines.py`                       |
|     new |    +1 | 0.0% → 0.6% |   0 → 1 | `is_complex_subscript`                             | `black/lines.py`                       |

##### Standard library

| Change | Delta |           % | Samples | Function                    | Location                                 |
| -----: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 0.6% |   0 → 1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|    new |    +1 | 0.0% → 0.6% |   0 → 1 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % | Samples | Function                                | Location                   |
| ------: | ----: | -----------: | ------: | --------------------------------------- | -------------------------- |
|  -34.8% |    -8 | 12.4% → 9.2% | 23 → 15 | `_addtoken`                             | `blib2to3/pgen2/parse.py`  |
|  -71.4% |    -5 |  3.8% → 1.2% |   7 → 2 | `normalize_trailing_prefix`             | `black/comments.py`        |
|  -80.0% |    -4 |  2.7% → 0.6% |   5 → 1 | `whitespace`                            | `black/nodes.py`           |
| removed |    -3 |  1.6% → 0.0% |   3 → 0 | `maybe_empty_lines`                     | `black/lines.py`           |
|  -60.0% |    -3 |  2.7% → 1.2% |   5 → 2 | `visit_default`                         | `black/linegen.py`         |
|  -25.0% |    -3 |  6.5% → 5.5% |  12 → 9 | `__new__`                               | `blib2to3/pytree.py`       |
|  -66.7% |    -2 |  1.6% → 0.6% |   3 → 1 | `visit`                                 | `black/nodes.py`           |
| removed |    -2 |  1.1% → 0.0% |   2 → 0 | `addtoken`                              | `blib2to3/pgen2/parse.py`  |
|  -40.0% |    -2 |  2.7% → 1.8% |   5 → 3 | `parse_tokens`                          | `blib2to3/pgen2/driver.py` |
| removed |    -2 |  1.1% → 0.0% |   2 → 0 | `_maybe_split_omitting_optional_parens` | `black/linegen.py`         |
| removed |    -2 |  1.1% → 0.0% |   2 → 0 | `_subx`                                 | `re/__init__.py`           |
|  -66.7% |    -2 |  1.6% → 0.6% |   3 → 1 | `hug_power_op`                          | `black/trans.py`           |
| removed |    -2 |  1.1% → 0.0% |   2 → 0 | `changed`                               | `blib2to3/pytree.py`       |
| removed |    -2 |  1.1% → 0.0% |   2 → 0 | `visit_DEDENT`                          | `black/linegen.py`         |
| removed |    -2 |  1.1% → 0.0% |   2 → 0 | `normalize_invisible_parens`            | `black/linegen.py`         |
|  -22.2% |    -2 |  4.8% → 4.3% |   9 → 7 | `(anonymous)`                           | `<unknown>`                |
| removed |    -2 |  1.1% → 0.0% |   2 → 0 | `classify`                              | `blib2to3/pgen2/parse.py`  |
| removed |    -1 |  0.5% → 0.0% |   1 → 0 | `_hugging_power_ops_line_to_string`     | `black/linegen.py`         |
|  -50.0% |    -1 |  1.1% → 0.6% |   2 → 1 | `_maybe_empty_lines`                    | `black/lines.py`           |
| removed |    -1 |  0.5% → 0.0% |   1 → 0 | `format_str`                            | `black/__init__.py`        |

##### Ours

|  Change | Delta |            % | Samples | Function                                | Location                   |
| ------: | ----: | -----------: | ------: | --------------------------------------- | -------------------------- |
|  -34.8% |    -8 | 12.4% → 9.2% | 23 → 15 | `_addtoken`                             | `blib2to3/pgen2/parse.py`  |
|  -71.4% |    -5 |  3.8% → 1.2% |   7 → 2 | `normalize_trailing_prefix`             | `black/comments.py`        |
|  -80.0% |    -4 |  2.7% → 0.6% |   5 → 1 | `whitespace`                            | `black/nodes.py`           |
| removed |    -3 |  1.6% → 0.0% |   3 → 0 | `maybe_empty_lines`                     | `black/lines.py`           |
|  -60.0% |    -3 |  2.7% → 1.2% |   5 → 2 | `visit_default`                         | `black/linegen.py`         |
|  -25.0% |    -3 |  6.5% → 5.5% |  12 → 9 | `__new__`                               | `blib2to3/pytree.py`       |
|  -66.7% |    -2 |  1.6% → 0.6% |   3 → 1 | `visit`                                 | `black/nodes.py`           |
| removed |    -2 |  1.1% → 0.0% |   2 → 0 | `addtoken`                              | `blib2to3/pgen2/parse.py`  |
|  -40.0% |    -2 |  2.7% → 1.8% |   5 → 3 | `parse_tokens`                          | `blib2to3/pgen2/driver.py` |
| removed |    -2 |  1.1% → 0.0% |   2 → 0 | `_maybe_split_omitting_optional_parens` | `black/linegen.py`         |
| removed |    -2 |  1.1% → 0.0% |   2 → 0 | `_subx`                                 | `re/__init__.py`           |
|  -66.7% |    -2 |  1.6% → 0.6% |   3 → 1 | `hug_power_op`                          | `black/trans.py`           |
| removed |    -2 |  1.1% → 0.0% |   2 → 0 | `changed`                               | `blib2to3/pytree.py`       |
| removed |    -2 |  1.1% → 0.0% |   2 → 0 | `visit_DEDENT`                          | `black/linegen.py`         |
| removed |    -2 |  1.1% → 0.0% |   2 → 0 | `normalize_invisible_parens`            | `black/linegen.py`         |
| removed |    -2 |  1.1% → 0.0% |   2 → 0 | `classify`                              | `blib2to3/pgen2/parse.py`  |
| removed |    -1 |  0.5% → 0.0% |   1 → 0 | `_hugging_power_ops_line_to_string`     | `black/linegen.py`         |
|  -50.0% |    -1 |  1.1% → 0.6% |   2 → 1 | `_maybe_empty_lines`                    | `black/lines.py`           |
| removed |    -1 |  0.5% → 0.0% |   1 → 0 | `format_str`                            | `black/__init__.py`        |
|  -16.7% |    -1 |  3.2% → 3.1% |   6 → 5 | `_stringify_ast`                        | `black/parsing.py`         |

##### Unknown

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -22.2% |    -2 | 4.8% → 4.3% |   9 → 7 | `(anonymous)` | `<unknown>` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % | Samples | Function                    | Location                                    |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------------------------------- |
|  +70.0% |    +7 |  5.4% → 10.4% | 10 → 17 | `pop`                       | `blib2to3/pgen2/parse.py`                   |
| +100.0% |    +7 |   3.8% → 8.6% |  7 → 14 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py`                |
|  +87.5% |    +7 |   4.3% → 9.2% |  8 → 15 | `__next__`                  | `blib2to3/pgen2/driver.py`                  |
|     new |    +6 |   0.0% → 3.7% |   0 → 6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`             |
|     new |    +6 |   0.0% → 3.7% |   0 → 6 | `exec_module`               | `<frozen importlib._bootstrap_external>`    |
|     new |    +6 |   0.0% → 3.7% |   0 → 6 | `_load_unlocked`            | `<frozen importlib._bootstrap>`             |
|     new |    +6 |   0.0% → 3.7% |   0 → 6 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`             |
|     new |    +6 |   0.0% → 3.7% |   0 → 6 | `_find_and_load`            | `<frozen importlib._bootstrap>`             |
|     new |    +6 |   0.0% → 3.7% |   0 → 6 | `<module>`                  | `black/__init__.py`                         |
|     new |    +6 |   0.0% → 3.7% |   0 → 6 | `_get_module_details`       | `<frozen runpy>`                            |
|     new |    +4 |   0.0% → 2.5% |   0 → 4 | `_handle_fromlist`          | `<frozen importlib._bootstrap>`             |
|     new |    +4 |   0.0% → 2.5% |   0 → 4 | `all_lines`                 | `black/lines.py`                            |
| +150.0% |    +3 |   1.1% → 3.1% |   2 → 5 | `mark`                      | `black/brackets.py`                         |
|     new |    +3 |   0.0% → 1.8% |   0 → 3 | `<module>`                  | `pathspec/patterns/gitignore/basic.py`      |
|     new |    +3 |   0.0% → 1.8% |   0 → 3 | `<module>`                  | `pathspec/patterns/__init__.py`             |
|     new |    +3 |   0.0% → 1.8% |   0 → 3 | `<module>`                  | `pathspec/_backends/hyperscan/gitignore.py` |
|     new |    +3 |   0.0% → 1.8% |   0 → 3 | `<module>`                  | `pathspec/_backends/agg.py`                 |
|     new |    +3 |   0.0% → 1.8% |   0 → 3 | `<module>`                  | `pathspec/gitignore.py`                     |
|     new |    +3 |   0.0% → 1.8% |   0 → 3 | `<module>`                  | `pathspec/__init__.py`                      |
|  +10.5% |    +2 | 10.2% → 12.9% | 19 → 21 | `visit_power`               | `black/linegen.py`                          |

##### Ours

|  Change | Delta |             % | Samples | Function                    | Location                                    |
| ------: | ----: | ------------: | ------: | --------------------------- | ------------------------------------------- |
|  +70.0% |    +7 |  5.4% → 10.4% | 10 → 17 | `pop`                       | `blib2to3/pgen2/parse.py`                   |
| +100.0% |    +7 |   3.8% → 8.6% |  7 → 14 | `generate_tokens`           | `blib2to3/pgen2/tokenize.py`                |
|  +87.5% |    +7 |   4.3% → 9.2% |  8 → 15 | `__next__`                  | `blib2to3/pgen2/driver.py`                  |
|     new |    +6 |   0.0% → 3.7% |   0 → 6 | `<module>`                  | `black/__init__.py`                         |
|     new |    +4 |   0.0% → 2.5% |   0 → 4 | `all_lines`                 | `black/lines.py`                            |
| +150.0% |    +3 |   1.1% → 3.1% |   2 → 5 | `mark`                      | `black/brackets.py`                         |
|     new |    +3 |   0.0% → 1.8% |   0 → 3 | `<module>`                  | `pathspec/patterns/gitignore/basic.py`      |
|     new |    +3 |   0.0% → 1.8% |   0 → 3 | `<module>`                  | `pathspec/patterns/__init__.py`             |
|     new |    +3 |   0.0% → 1.8% |   0 → 3 | `<module>`                  | `pathspec/_backends/hyperscan/gitignore.py` |
|     new |    +3 |   0.0% → 1.8% |   0 → 3 | `<module>`                  | `pathspec/_backends/agg.py`                 |
|     new |    +3 |   0.0% → 1.8% |   0 → 3 | `<module>`                  | `pathspec/gitignore.py`                     |
|     new |    +3 |   0.0% → 1.8% |   0 → 3 | `<module>`                  | `pathspec/__init__.py`                      |
|  +10.5% |    +2 | 10.2% → 12.9% | 19 → 21 | `visit_power`               | `black/linegen.py`                          |
|  +40.0% |    +2 |   2.7% → 4.3% |   5 → 7 | `__init__`                  | `<string>`                                  |
|     new |    +2 |   0.0% → 1.2% |   0 → 2 | `<genexpr>`                 | `black/__init__.py`                         |
|     new |    +2 |   0.0% → 1.2% |   0 → 2 | `is_split_before_delimiter` | `black/brackets.py`                         |
|     new |    +2 |   0.0% → 1.2% |   0 → 2 | `__post_init__`             | `black/linegen.py`                          |
|     new |    +2 |   0.0% → 1.2% |   0 → 2 | `__init__`                  | `black/linegen.py`                          |
| +100.0% |    +1 |   0.5% → 1.2% |   1 → 2 | `remove`                    | `blib2to3/pytree.py`                        |
| +100.0% |    +1 |   0.5% → 1.2% |   1 → 2 | `wrap_in_parentheses`       | `black/nodes.py`                            |

##### Standard library

| Change | Delta |           % | Samples | Function                    | Location                                 |
| -----: | ----: | ----------: | ------: | --------------------------- | ---------------------------------------- |
|    new |    +6 | 0.0% → 3.7% |   0 → 6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|    new |    +6 | 0.0% → 3.7% |   0 → 6 | `exec_module`               | `<frozen importlib._bootstrap_external>` |
|    new |    +6 | 0.0% → 3.7% |   0 → 6 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|    new |    +6 | 0.0% → 3.7% |   0 → 6 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
|    new |    +6 | 0.0% → 3.7% |   0 → 6 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
|    new |    +6 | 0.0% → 3.7% |   0 → 6 | `_get_module_details`       | `<frozen runpy>`                         |
|    new |    +4 | 0.0% → 2.5% |   0 → 4 | `_handle_fromlist`          | `<frozen importlib._bootstrap>`          |
|    new |    +1 | 0.0% → 0.6% |   0 → 1 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>` |
|    new |    +1 | 0.0% → 0.6% |   0 → 1 | `get_code`                  | `<frozen importlib._bootstrap_external>` |
|    new |    +1 | 0.0% → 0.6% |   0 → 1 | `create_module`             | `<frozen importlib._bootstrap_external>` |
|    new |    +1 | 0.0% → 0.6% |   0 → 1 | `module_from_spec`          | `<frozen importlib._bootstrap>`          |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % |   Samples | Function                          | Location                  |
| -----: | ----: | ------------: | --------: | --------------------------------- | ------------------------- |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `format_file_contents`            | `black/__init__.py`       |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `format_file_in_place`            | `black/__init__.py`       |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `reformat_one`                    | `black/__init__.py`       |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `main`                            | `black/__init__.py`       |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `new_func`                        | `click/decorators.py`     |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `invoke`                          | `click/core.py`           |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `main`                            | `click/core.py`           |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `__call__`                        | `click/core.py`           |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `patched_main`                    | `black/__init__.py`       |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `<module>`                        | `black/__main__.py`       |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `_run_code`                       | `<frozen runpy>`          |
| -16.5% |   -26 | 84.9% → 81.0% | 158 → 132 | `_format_str_once`                | `black/__init__.py`       |
| -11.9% |   -21 | 95.2% → 95.7% | 177 → 156 | `_run_module_as_main`             | `<frozen runpy>`          |
| -33.3% |   -18 | 29.0% → 22.1% |   54 → 36 | `assert_stable`                   | `black/__init__.py`       |
| -25.0% |   -18 | 38.7% → 33.1% |   72 → 54 | `check_stability_and_equivalence` | `black/__init__.py`       |
| -26.3% |   -15 | 30.6% → 25.8% |   57 → 42 | `addtoken`                        | `blib2to3/pgen2/parse.py` |
| -27.5% |   -14 | 27.4% → 22.7% |   51 → 37 | `visit_default`                   | `black/linegen.py`        |
| -27.5% |   -14 | 27.4% → 22.7% |   51 → 37 | `visit`                           | `black/nodes.py`          |
| -27.5% |   -14 | 27.4% → 22.7% |   51 → 37 | `visit_default`                   | `black/nodes.py`          |
| -25.0% |   -12 | 25.8% → 22.1% |   48 → 36 | `visit_funcdef`                   | `black/linegen.py`        |

##### Ours

| Change | Delta |             % |   Samples | Function                          | Location                  |
| -----: | ----: | ------------: | --------: | --------------------------------- | ------------------------- |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `format_file_contents`            | `black/__init__.py`       |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `format_file_in_place`            | `black/__init__.py`       |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `reformat_one`                    | `black/__init__.py`       |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `main`                            | `black/__init__.py`       |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `new_func`                        | `click/decorators.py`     |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `invoke`                          | `click/core.py`           |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `main`                            | `click/core.py`           |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `__call__`                        | `click/core.py`           |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `patched_main`                    | `black/__init__.py`       |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `<module>`                        | `black/__main__.py`       |
| -16.5% |   -26 | 84.9% → 81.0% | 158 → 132 | `_format_str_once`                | `black/__init__.py`       |
| -33.3% |   -18 | 29.0% → 22.1% |   54 → 36 | `assert_stable`                   | `black/__init__.py`       |
| -25.0% |   -18 | 38.7% → 33.1% |   72 → 54 | `check_stability_and_equivalence` | `black/__init__.py`       |
| -26.3% |   -15 | 30.6% → 25.8% |   57 → 42 | `addtoken`                        | `blib2to3/pgen2/parse.py` |
| -27.5% |   -14 | 27.4% → 22.7% |   51 → 37 | `visit_default`                   | `black/linegen.py`        |
| -27.5% |   -14 | 27.4% → 22.7% |   51 → 37 | `visit`                           | `black/nodes.py`          |
| -27.5% |   -14 | 27.4% → 22.7% |   51 → 37 | `visit_default`                   | `black/nodes.py`          |
| -25.0% |   -12 | 25.8% → 22.1% |   48 → 36 | `visit_funcdef`                   | `black/linegen.py`        |
| -24.5% |   -12 | 26.3% → 22.7% |   49 → 37 | `visit_stmt`                      | `black/linegen.py`        |
| -22.9% |   -11 | 25.8% → 22.7% |   48 → 37 | `visit_suite`                     | `black/linegen.py`        |

##### Unknown

| Change | Delta |           % | Samples | Function      | Location    |
| -----: | ----: | ----------: | ------: | ------------- | ----------- |
| -22.2% |    -2 | 4.8% → 4.3% |   9 → 7 | `(anonymous)` | `<unknown>` |

##### Standard library

| Change | Delta |             % |   Samples | Function              | Location         |
| -----: | ----: | ------------: | --------: | --------------------- | ---------------- |
| -15.3% |   -27 | 95.2% → 92.0% | 177 → 150 | `_run_code`           | `<frozen runpy>` |
| -11.9% |   -21 | 95.2% → 95.7% | 177 → 156 | `_run_module_as_main` | `<frozen runpy>` |

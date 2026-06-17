# CPU profile diff

Took 1.75s → 1.83s (+80.0ms, +4.6%) over 175 samples → 183 samples (10.0ms per sample).

| Category | Change |   Delta |      % |          Time |   Samples |
| -------- | -----: | ------: | -----: | ------------: | --------: |
| ours     |  +4.6% | +80.0ms | 100.0% | 1.75s → 1.83s | 175 → 183 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |   Delta |           % |            Time | Samples | Function                            | Location                                                                           |
| ------: | ------: | ----------: | --------------: | ------: | ----------------------------------- | ---------------------------------------------------------------------------------- |
| +400.0% | +40.0ms | 0.6% → 2.7% | 10.0ms → 50.0ms |   1 → 5 | `__init__`                          | <string>:7                                                                         |
|     new | +30.0ms | 0.0% → 1.6% |    0ms → 30.0ms |   0 → 3 | `prefix`                            | ../../../../../../venv/lib/python3.11/site-packages/blib2to3/pytree.py:473         |
|     new | +20.0ms | 0.0% → 1.1% |    0ms → 20.0ms |   0 → 2 | `hug_power_op`                      | ../../../../../../venv/lib/python3.11/site-packages/black/trans.py:95              |
|     new | +20.0ms | 0.0% → 1.1% |    0ms → 20.0ms |   0 → 2 | `append_comment`                    | ../../../../../../venv/lib/python3.11/site-packages/black/lines.py:401             |
|     new | +20.0ms | 0.0% → 1.1% |    0ms → 20.0ms |   0 → 2 | `sub_twice`                         | ../../../../../../venv/lib/python3.11/site-packages/black/strings.py:34            |
| +200.0% | +20.0ms | 0.6% → 1.6% | 10.0ms → 30.0ms |   1 → 3 | `normalize_trailing_prefix`         | ../../../../../../venv/lib/python3.11/site-packages/black/comments.py:134          |
|     new | +10.0ms | 0.0% → 0.5% |    0ms → 10.0ms |   0 → 1 | `__next__`                          | ../../../../../../venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py:84    |
| +100.0% | +10.0ms | 0.6% → 1.1% | 10.0ms → 20.0ms |   1 → 2 | `convert`                           | ../../../../../../venv/lib/python3.11/site-packages/blib2to3/pytree.py:499         |
|     new | +10.0ms | 0.0% → 0.5% |    0ms → 10.0ms |   0 → 1 | `is_fstring_start`                  | ../../../../../../venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:471 |
| +100.0% | +10.0ms | 0.6% → 1.1% | 10.0ms → 20.0ms |   1 → 2 | `__new__`                           | ../../../../../../venv/lib/python3.11/site-packages/blib2to3/pytree.py:81          |
|     new | +10.0ms | 0.0% → 0.5% |    0ms → 10.0ms |   0 → 1 | `transform_line`                    | ../../../../../../venv/lib/python3.11/site-packages/black/linegen.py:715           |
|     new | +10.0ms | 0.0% → 0.5% |    0ms → 10.0ms |   0 → 1 | `preceding_leaf`                    | ../../../../../../venv/lib/python3.11/site-packages/black/nodes.py:444             |
|     new | +10.0ms | 0.0% → 0.5% |    0ms → 10.0ms |   0 → 1 | `normalize_invisible_parens`        | ../../../../../../venv/lib/python3.11/site-packages/black/linegen.py:1339          |
|     new | +10.0ms | 0.0% → 0.5% |    0ms → 10.0ms |   0 → 1 | `bracket_split_build_line`          | ../../../../../../venv/lib/python3.11/site-packages/black/linegen.py:1141          |
|     new | +10.0ms | 0.0% → 0.5% |    0ms → 10.0ms |   0 → 1 | `_compile_bytecode`                 | <frozen importlib._bootstrap_external>:729                                         |
|     new | +10.0ms | 0.0% → 0.5% |    0ms → 10.0ms |   0 → 1 | `addarc`                            | ../../../../../../venv/lib/python3.11/site-packages/blib2to3/pgen2/pgen.py:380     |
|     new | +10.0ms | 0.0% → 0.5% |    0ms → 10.0ms |   0 → 1 | `make_label`                        | ../../../../../../venv/lib/python3.11/site-packages/blib2to3/pgen2/pgen.py:111     |
|     new | +10.0ms | 0.0% → 0.5% |    0ms → 10.0ms |   0 → 1 | `get_string_prefix`                 | ../../../../../../venv/lib/python3.11/site-packages/black/strings.py:101           |
|     new | +10.0ms | 0.0% → 0.5% |    0ms → 10.0ms |   0 → 1 | `maybe_increment_for_loop_variable` | ../../../../../../venv/lib/python3.11/site-packages/black/brackets.py:166          |
|     new | +10.0ms | 0.0% → 0.5% |    0ms → 10.0ms |   0 → 1 | `<lambda>`                          | ../../../../../../venv/lib/python3.11/site-packages/black/lines.py:264             |

#### Progressions

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |   Delta |           % |            Time | Samples | Function                     | Location                                                                           |
| ------: | ------: | ----------: | --------------: | ------: | ---------------------------- | ---------------------------------------------------------------------------------- |
|  -50.0% | -40.0ms | 4.6% → 2.2% | 80.0ms → 40.0ms |   8 → 4 | `<genexpr>`                  | ../../../../../../venv/lib/python3.11/site-packages/black/lines.py:456             |
| removed | -20.0ms | 1.1% → 0.0% |    20.0ms → 0ms |   2 → 0 | `<genexpr>`                  | ../../../../../../venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:471 |
| removed | -20.0ms | 1.1% → 0.0% |    20.0ms → 0ms |   2 → 0 | `is_split_before_delimiter`  | ../../../../../../venv/lib/python3.11/site-packages/black/brackets.py:240          |
| removed | -20.0ms | 1.1% → 0.0% |    20.0ms → 0ms |   2 → 0 | `visit_power`                | ../../../../../../venv/lib/python3.11/site-packages/black/linegen.py:363           |
| removed | -20.0ms | 1.1% → 0.0% |    20.0ms → 0ms |   2 → 0 | `update_sibling_maps`        | ../../../../../../venv/lib/python3.11/site-packages/blib2to3/pytree.py:376         |
| removed | -20.0ms | 1.1% → 0.0% |    20.0ms → 0ms |   2 → 0 | `whitespace`                 | ../../../../../../venv/lib/python3.11/site-packages/black/nodes.py:225             |
|  -66.7% | -20.0ms | 1.7% → 0.5% | 30.0ms → 10.0ms |   3 → 1 | `__str__`                    | ../../../../../../venv/lib/python3.11/site-packages/black/lines.py:498             |
|  -22.2% | -20.0ms | 5.1% → 3.8% | 90.0ms → 70.0ms |   9 → 7 | `parse`                      | ../../../../../../usr/lib/python3.11/ast.py:50                                     |
|  -50.0% | -10.0ms | 1.1% → 0.5% | 20.0ms → 10.0ms |   2 → 1 | `push`                       | ../../../../../../venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:394    |
|  -50.0% | -10.0ms | 1.1% → 0.5% | 20.0ms → 10.0ms |   2 → 1 | `_addtoken`                  | ../../../../../../venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:326    |
| removed | -10.0ms | 0.6% → 0.0% |    10.0ms → 0ms |   1 → 0 | `shift`                      | ../../../../../../venv/lib/python3.11/site-packages/blib2to3/pgen2/parse.py:381    |
|  -50.0% | -10.0ms | 1.1% → 0.5% | 20.0ms → 10.0ms |   2 → 1 | `__init__`                   | ../../../../../../venv/lib/python3.11/site-packages/blib2to3/pytree.py:417         |
| removed | -10.0ms | 0.6% → 0.0% |    10.0ms → 0ms |   1 → 0 | `_contains_fmt_skip_comment` | ../../../../../../venv/lib/python3.11/site-packages/black/comments.py:415          |
| removed | -10.0ms | 0.6% → 0.0% |    10.0ms → 0ms |   1 → 0 | `append`                     | ../../../../../../venv/lib/python3.11/site-packages/black/lines.py:91              |
| removed | -10.0ms | 0.6% → 0.0% |    10.0ms → 0ms |   1 → 0 | `maybe_empty_lines`          | ../../../../../../venv/lib/python3.11/site-packages/black/lines.py:571             |
| removed | -10.0ms | 0.6% → 0.0% |    10.0ms → 0ms |   1 → 0 | `__contains__`               | ../../../../../../venv/lib/python3.11/site-packages/black/mode.py:254              |
| removed | -10.0ms | 0.6% → 0.0% |    10.0ms → 0ms |   1 → 0 | `is_docstring`               | ../../../../../../venv/lib/python3.11/site-packages/black/nodes.py:563             |
| removed | -10.0ms | 0.6% → 0.0% |    10.0ms → 0ms |   1 → 0 | `normalize_numeric_literal`  | ../../../../../../venv/lib/python3.11/site-packages/black/numerics.py:49           |
| removed | -10.0ms | 0.6% → 0.0% |    10.0ms → 0ms |   1 → 0 | `any_open_brackets`          | ../../../../../../venv/lib/python3.11/site-packages/black/brackets.py:137          |
| removed | -10.0ms | 0.6% → 0.0% |    10.0ms → 0ms |   1 → 0 | `leaves`                     | ../../../../../../venv/lib/python3.11/site-packages/blib2to3/pytree.py:223         |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|   Change |    Delta |              % |              Time |   Samples | Function                  | Location                                                                   |
| -------: | -------: | -------------: | ----------------: | --------: | ------------------------- | -------------------------------------------------------------------------- |
| +1300.0% | +260.0ms |   1.1% → 15.3% |  20.0ms → 280.0ms |    2 → 28 | `visit_power`             | ../../../../../../venv/lib/python3.11/site-packages/black/linegen.py:363   |
|   +26.5% | +130.0ms |  28.0% → 33.9% | 490.0ms → 620.0ms |   49 → 62 | `format_str`              | ../../../../../../venv/lib/python3.11/site-packages/black/__init__.py:1232 |
|  +450.0% |  +90.0ms |    1.1% → 6.0% |  20.0ms → 110.0ms |    2 → 11 | `visit_stmt`              | ../../../../../../venv/lib/python3.11/site-packages/black/linegen.py:213   |
|    +6.9% |  +50.0ms |  41.1% → 42.1% | 720.0ms → 770.0ms |   72 → 77 | `visit_default`           | ../../../../../../venv/lib/python3.11/site-packages/black/nodes.py:191     |
|  +500.0% |  +50.0ms |    0.6% → 3.3% |   10.0ms → 60.0ms |     1 → 6 | `append`                  | ../../../../../../venv/lib/python3.11/site-packages/black/lines.py:91      |
|    +2.3% |  +40.0ms | 100.0% → 97.8% |     1.75s → 1.79s | 175 → 179 | `format_file_in_place`    | ../../../../../../venv/lib/python3.11/site-packages/black/__init__.py:944  |
|    +2.3% |  +40.0ms | 100.0% → 97.8% |     1.75s → 1.79s | 175 → 179 | `reformat_one`            | ../../../../../../venv/lib/python3.11/site-packages/black/__init__.py:902  |
|    +2.3% |  +40.0ms | 100.0% → 97.8% |     1.75s → 1.79s | 175 → 179 | `main`                    | ../../../../../../venv/lib/python3.11/site-packages/black/__init__.py:692  |
|    +2.3% |  +40.0ms | 100.0% → 97.8% |     1.75s → 1.79s | 175 → 179 | `new_func`                | ../../../../../../venv/lib/python3.11/site-packages/click/decorators.py:34 |
|    +2.3% |  +40.0ms | 100.0% → 97.8% |     1.75s → 1.79s | 175 → 179 | `invoke`                  | ../../../../../../venv/lib/python3.11/site-packages/click/core.py:1308     |
|    +2.3% |  +40.0ms | 100.0% → 97.8% |     1.75s → 1.79s | 175 → 179 | `main`                    | ../../../../../../venv/lib/python3.11/site-packages/click/core.py:1445     |
|    +2.3% |  +40.0ms | 100.0% → 97.8% |     1.75s → 1.79s | 175 → 179 | `__call__`                | ../../../../../../venv/lib/python3.11/site-packages/click/core.py:1524     |
|    +2.3% |  +40.0ms | 100.0% → 97.8% |     1.75s → 1.79s | 175 → 179 | `patched_main`            | ../../../../../../venv/lib/python3.11/site-packages/black/__init__.py:1602 |
|    +2.3% |  +40.0ms | 100.0% → 97.8% |     1.75s → 1.79s | 175 → 179 | `<module>`                | ../../../../../../venv/lib/python3.11/site-packages/black/__main__.py:3    |
|    +2.3% |  +40.0ms | 100.0% → 97.8% |     1.75s → 1.79s | 175 → 179 | `_run_code`               | <frozen runpy>:88                                                          |
|    +2.3% |  +40.0ms | 100.0% → 97.8% |     1.75s → 1.79s | 175 → 179 | `_run_module_as_main`     | <frozen runpy>:198                                                         |
|  +400.0% |  +40.0ms |    0.6% → 2.7% |   10.0ms → 50.0ms |     1 → 5 | `__init__`                | <string>:7                                                                 |
|      new |  +40.0ms |    0.0% → 2.2% |      0ms → 40.0ms |     0 → 4 | `exec_module`             | <frozen importlib._bootstrap_external>:940                                 |
|      new |  +40.0ms |    0.0% → 2.2% |      0ms → 40.0ms |     0 → 4 | `_load_unlocked`          | <frozen importlib._bootstrap>:690                                          |
|      new |  +40.0ms |    0.0% → 2.2% |      0ms → 40.0ms |     0 → 4 | `_find_and_load_unlocked` | <frozen importlib._bootstrap>:1149                                         |

#### Progressions

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |             % |              Time | Samples | Function                          | Location                                                                           |
| ------: | -------: | ------------: | ----------------: | ------: | --------------------------------- | ---------------------------------------------------------------------------------- |
|  -97.3% | -360.0ms |  21.1% → 0.5% |  370.0ms → 10.0ms |  37 → 1 | `visit_simple_stmt`               | ../../../../../../venv/lib/python3.11/site-packages/black/linegen.py:316           |
|  -93.3% | -140.0ms |   8.6% → 0.5% |  150.0ms → 10.0ms |  15 → 1 | `__next__`                        | ../../../../../../venv/lib/python3.11/site-packages/blib2to3/pgen2/driver.py:84    |
|  -50.0% |  -40.0ms |   4.6% → 2.2% |   80.0ms → 40.0ms |   8 → 4 | `is_complex_subscript`            | ../../../../../../venv/lib/python3.11/site-packages/black/lines.py:456             |
|  -50.0% |  -40.0ms |   4.6% → 2.2% |   80.0ms → 40.0ms |   8 → 4 | `<genexpr>`                       | ../../../../../../venv/lib/python3.11/site-packages/black/lines.py:456             |
|   -6.5% |  -30.0ms | 26.3% → 23.5% | 460.0ms → 430.0ms | 46 → 43 | `check_stability_and_equivalence` | ../../../../../../venv/lib/python3.11/site-packages/black/__init__.py:1051         |
|   -6.5% |  -30.0ms | 26.3% → 23.5% | 460.0ms → 430.0ms | 46 → 43 | `assert_stable`                   | ../../../../../../venv/lib/python3.11/site-packages/black/__init__.py:1571         |
|  -75.0% |  -30.0ms |   2.3% → 0.5% |   40.0ms → 10.0ms |   4 → 1 | `_stringify_ast`                  | ../../../../../../venv/lib/python3.11/site-packages/black/parsing.py:187           |
|   -2.8% |  -20.0ms | 41.1% → 38.3% | 720.0ms → 700.0ms | 72 → 70 | `visit_suite`                     | ../../../../../../venv/lib/python3.11/site-packages/black/linegen.py:293           |
|  -28.6% |  -20.0ms |   4.0% → 2.7% |   70.0ms → 50.0ms |   7 → 5 | `detect_target_versions`          | ../../../../../../venv/lib/python3.11/site-packages/black/__init__.py:1468         |
| removed |  -20.0ms |   1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `<genexpr>`                       | ../../../../../../venv/lib/python3.11/site-packages/blib2to3/pgen2/tokenize.py:471 |
| removed |  -20.0ms |   1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `convert_one_fmt_off_pair`        | ../../../../../../venv/lib/python3.11/site-packages/black/comments.py:188          |
| removed |  -20.0ms |   1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `normalize_fmt_off`               | ../../../../../../venv/lib/python3.11/site-packages/black/comments.py:174          |
| removed |  -20.0ms |   1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `is_split_before_delimiter`       | ../../../../../../venv/lib/python3.11/site-packages/black/brackets.py:240          |
| removed |  -20.0ms |   1.1% → 0.0% |      20.0ms → 0ms |   2 → 0 | `update_sibling_maps`             | ../../../../../../venv/lib/python3.11/site-packages/blib2to3/pytree.py:376         |
|  -66.7% |  -20.0ms |   1.7% → 0.5% |   30.0ms → 10.0ms |   3 → 1 | `_format_str_once`                | ../../../../../../venv/lib/python3.11/site-packages/black/__init__.py:1274         |
|  -66.7% |  -20.0ms |   1.7% → 0.5% |   30.0ms → 10.0ms |   3 → 1 | `__str__`                         | ../../../../../../venv/lib/python3.11/site-packages/black/lines.py:498             |
|  -22.2% |  -20.0ms |   5.1% → 3.8% |   90.0ms → 70.0ms |   9 → 7 | `parse`                           | ../../../../../../usr/lib/python3.11/ast.py:50                                     |
|  -22.2% |  -20.0ms |   5.1% → 3.8% |   90.0ms → 70.0ms |   9 → 7 | `_parse_single_version`           | ../../../../../../venv/lib/python3.11/site-packages/black/parsing.py:124           |
|  -22.2% |  -20.0ms |   5.1% → 3.8% |   90.0ms → 70.0ms |   9 → 7 | `parse_ast`                       | ../../../../../../venv/lib/python3.11/site-packages/black/parsing.py:136           |
|  -25.0% |  -10.0ms |   2.3% → 1.6% |   40.0ms → 30.0ms |   4 → 3 | `prefix`                          | ../../../../../../venv/lib/python3.11/site-packages/blib2to3/pytree.py:473         |

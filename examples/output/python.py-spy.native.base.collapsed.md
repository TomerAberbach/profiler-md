# Sampling profile

Collected 301 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 90.7% |     273 |
| Ours             |  7.3% |      22 |
| Standard library |  2.0% |       6 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                        | Location                                                      |
| ---: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 6.6% |      20 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 6.0% |      18 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.7% |      14 | `CPyDef_driver___Driver___parse_tokens`                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.3% |      13 | `CPyDef_parse___Parser____addtoken`                                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.3% |      10 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.3% |      10 | `CPyDef_black___get_features_used`                                              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.0% |       9 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.0% |       9 | `parse`                                                                         | `ast.py`                                                      |
| 2.3% |       7 | `CPyDef_parse___Parser___push`                                                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.3% |       7 | `CPy_AddTraceback`                                                              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.0% |       6 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.0% |       6 | `CPyDef_parse___Parser___pop`                                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.7% |       5 | `__init__`                                                                      | `<string>`                                                    |
| 1.7% |       5 | `CPyDef_nodes___whitespace`                                                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.7% |       5 | `CPyDef_lines___Line_____str__`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       4 | `CPyDef_pytree___convert`                                                       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       4 | `CPyDef_parse___Parser___shift`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       4 | `0x7f3b2fa8f4a0`                                                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.0% |       3 | `0x7f3b2fa8f9c0`                                                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.0% |       3 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__`              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

#### Categories

##### Native

|    % | Samples | Function                                                                        | Location                                                      |
| ---: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 6.6% |      20 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 6.0% |      18 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.7% |      14 | `CPyDef_driver___Driver___parse_tokens`                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.3% |      13 | `CPyDef_parse___Parser____addtoken`                                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.3% |      10 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.3% |      10 | `CPyDef_black___get_features_used`                                              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.0% |       9 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.3% |       7 | `CPyDef_parse___Parser___push`                                                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.3% |       7 | `CPy_AddTraceback`                                                              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.0% |       6 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.0% |       6 | `CPyDef_parse___Parser___pop`                                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.7% |       5 | `CPyDef_nodes___whitespace`                                                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.7% |       5 | `CPyDef_lines___Line_____str__`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       4 | `CPyDef_pytree___convert`                                                       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       4 | `CPyDef_parse___Parser___shift`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       4 | `0x7f3b2fa8f4a0`                                                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.0% |       3 | `0x7f3b2fa8f9c0`                                                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.0% |       3 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__`              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.0% |       3 | `CPyDef_lines___Line___append`                                                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.0% |       3 | `0x7f3b307e3480`                                                                | `libc.so.6`                                                   |

##### Ours

|    % | Samples | Function       | Location              |
| ---: | ------: | -------------- | --------------------- |
| 3.0% |       9 | `parse`        | `ast.py`              |
| 1.7% |       5 | `__init__`     | `<string>`            |
| 0.3% |       1 | `new_func`     | `click/decorators.py` |
| 0.3% |       1 | `replace`      | `dataclasses.py`      |
| 0.3% |       1 | `_subx`        | `re/__init__.py`      |
| 0.3% |       1 | `debug`        | `logging/__init__.py` |
| 0.3% |       1 | `<module>`     | `tokenize.py`         |
| 0.3% |       1 | `isEnabledFor` | `logging/__init__.py` |
| 0.3% |       1 | `__getitem__`  | `typing.py`           |
| 0.3% |       1 | `__init__`     | `re/_parser.py`       |

##### Standard library

|    % | Samples | Function             | Location                                 |
| ---: | ------: | -------------------- | ---------------------------------------- |
| 0.7% |       2 | `__new__`            | `<frozen abc>`                           |
| 0.7% |       2 | `_init_module_attrs` | `<frozen importlib._bootstrap>`          |
| 0.3% |       1 | `find_spec`          | `<frozen importlib._bootstrap_external>` |
| 0.3% |       1 | `<listcomp>`         | `<frozen importlib._bootstrap_external>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |       9 | `ast.py:50` |

##### `__init__` (`<string>`)

|     % | Samples | Location     |
| ----: | ------: | ------------ |
| 40.0% |       2 | `<string>:2` |
| 20.0% |       1 | `<string>:7` |
| 20.0% |       1 | `<string>:9` |
| 20.0% |       1 | `<string>:6` |

##### `__new__` (`<frozen abc>`)

|      % | Samples | Location           |
| -----: | ------: | ------------------ |
| 100.0% |       2 | `<frozen abc>:106` |

##### `_init_module_attrs` (`<frozen importlib._bootstrap>`)

|     % | Samples | Location                            |
| ----: | ------: | ----------------------------------- |
| 50.0% |       1 | `<frozen importlib._bootstrap>:551` |
| 50.0% |       1 | `<frozen importlib._bootstrap>:542` |

##### `new_func` (`click/decorators.py`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       1 | `click/decorators.py:34` |

##### `replace` (`dataclasses.py`)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       1 | `dataclasses.py:1480` |

##### `_subx` (`re/__init__.py`)

|      % | Samples | Location             |
| -----: | ------: | -------------------- |
| 100.0% |       1 | `re/__init__.py:317` |

##### `debug` (`logging/__init__.py`)

|      % | Samples | Location                   |
| -----: | ------: | -------------------------- |
| 100.0% |       1 | `logging/__init__.py:1476` |

##### `<module>` (`tokenize.py`)

|      % | Samples | Location         |
| -----: | ------: | ---------------- |
| 100.0% |       1 | `tokenize.py:35` |

##### `isEnabledFor` (`logging/__init__.py`)

|      % | Samples | Location                   |
| -----: | ------: | -------------------------- |
| 100.0% |       1 | `logging/__init__.py:1734` |

##### `__getitem__` (`typing.py`)

|      % | Samples | Location        |
| -----: | ------: | --------------- |
| 100.0% |       1 | `typing.py:463` |

##### `__init__` (`re/_parser.py`)

|      % | Samples | Location            |
| -----: | ------: | ------------------- |
| 100.0% |       1 | `re/_parser.py:111` |

##### `find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                      |
| -----: | ------: | --------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:1612` |

##### `<listcomp>` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Location                                     |
| -----: | ------: | -------------------------------------------- |
| 100.0% |       1 | `<frozen importlib._bootstrap_external>:129` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Caller                                                                       | Location                                                      |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 70.0% |      14 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 30.0% |       6 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                                  | Location                                                      |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 100.0% |      18 | `CPyDef_driver___TokenProxy_____next__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_tokens` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                                  | Location                                                      |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 100.0% |      14 | `CPyDef_driver___Driver___parse_string` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser____addtoken` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                             | Location                                                      |
| -----: | ------: | ---------------------------------- | ------------------------------------------------------------- |
| 100.0% |      13 | `CPyDef_parse___Parser___addtoken` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                                                                          | Location                                                      |
| -----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |      10 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___get_features_used` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                                  | Location                                                      |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 100.0% |      10 | `CPyDef_black___detect_target_versions` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Caller                                                                             | Location                                                      |
| ----: | ------: | ---------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 88.9% |       8 | `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 11.1% |       1 | `CPyDef_black___assert_equivalent`                                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                                   | Location                                                      |
| -----: | ------: | ---------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       9 | `CPyDef_parsing____parse_single_version` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___push` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                              | Location                                                      |
| -----: | ------: | ----------------------------------- | ------------------------------------------------------------- |
| 100.0% |       7 | `CPyDef_parse___Parser____addtoken` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPy_AddTraceback` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Caller                                                             | Location                                                      |
| ----: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------- |
| 42.9% |       3 | `CPyDef_trans___hug_power_op_gen_____mypyc_generator_helper__`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 28.6% |       2 | `CPyDef_linegen___run_transformer`                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 14.3% |       1 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 14.3% |       1 | `CPyDef_linegen____hugging_power_ops_line_to_string`               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Caller                                                                         | Location                                                      |
| ----: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| 83.3% |       5 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 16.7% |       1 | `CPyDef_linegen___visit_DEDENT_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___pop` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                              | Location                                                      |
| -----: | ------: | ----------------------------------- | ------------------------------------------------------------- |
| 100.0% |       6 | `CPyDef_parse___Parser____addtoken` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `__init__` (`<string>`)

|     % | Samples | Caller                                                                 | Location                                                      |
| ----: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------- |
| 40.0% |       2 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.0% |       1 | `CPyDef_lines___EmptyLineTracker___maybe_empty_lines`                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.0% |       1 | `__init__`                                                             | `<string>`                                                    |
| 20.0% |       1 | `CPyDef_linegen___bracket_split_build_line`                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___whitespace` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                         | Location                                                      |
| -----: | ------: | ------------------------------ | ------------------------------------------------------------- |
| 100.0% |       5 | `CPyDef_lines___Line___append` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_lines___Line_____str__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Caller                             | Location                                                      |
| ----: | ------: | ---------------------------------- | ------------------------------------------------------------- |
| 80.0% |       4 | `CPyDef_lines___line_to_string`    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.0% |       1 | `CPyDef_linegen___run_transformer` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___convert` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                          | Location                                                      |
| -----: | ------: | ------------------------------- | ------------------------------------------------------------- |
| 100.0% |       4 | `CPyDef_parse___Parser___shift` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___shift` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                              | Location                                                      |
| -----: | ------: | ----------------------------------- | ------------------------------------------------------------- |
| 100.0% |       4 | `CPyDef_parse___Parser____addtoken` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7f3b2fa8f4a0` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Caller                                  | Location                                                      |
| ----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 25.0% |       1 | `CPyDef_parse___Parser___push`          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.0% |       1 | `CPyDef_driver___Driver___parse_tokens` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.0% |       1 | `CPyDef_lines___Line___append`          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.0% |       1 | `CPyDef_parse___Parser____addtoken`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7f3b2fa8f9c0` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Caller                              | Location                                                      |
| ----: | ------: | ----------------------------------- | ------------------------------------------------------------- |
| 66.7% |       2 | `CPyDef_parse___Parser___push`      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.3% |       1 | `CPyDef_parse___Parser____addtoken` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                            | Location                                                      |
| -----: | ------: | --------------------------------- | ------------------------------------------------------------- |
| 100.0% |       3 | `CPyDef_black____format_str_once` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_lines___Line___append` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                                                                          | Location                                                      |
| -----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       3 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7f3b307e3480` (`libc.so.6`)

|     % | Samples | Caller                          | Location                                                      |
| ----: | ------: | ------------------------------- | ------------------------------------------------------------- |
| 33.3% |       1 | `CPyDef_parse___Parser___pop`   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.3% |       1 | `CPyDef_parse___Parser___shift` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.3% |       1 | `CPyDef_pytree___convert`       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `__new__` (`<frozen abc>`)

|      % | Samples | Caller     | Location         |
| -----: | ------: | ---------- | ---------------- |
| 100.0% |       2 | `<module>` | `click/types.py` |

##### `_init_module_attrs` (`<frozen importlib._bootstrap>`)

|      % | Samples | Caller             | Location                        |
| -----: | ------: | ------------------ | ------------------------------- |
| 100.0% |       2 | `module_from_spec` | `<frozen importlib._bootstrap>` |

##### `new_func` (`click/decorators.py`)

|      % | Samples | Caller                              | Location                                                      |
| -----: | ------: | ----------------------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `CPyDef_mode___Mode_____contains__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `replace` (`dataclasses.py`)

|      % | Samples | Caller                                                                                    | Location                                                      |
| -----: | ------: | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `CPyDef_linegen____maybe_split_omitting_optional_parens_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_subx` (`re/__init__.py`)

|      % | Samples | Caller                       | Location                                                      |
| -----: | ------: | ---------------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `CPyDef_strings___sub_twice` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `debug` (`logging/__init__.py`)

|      % | Samples | Caller                                  | Location                                                      |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `CPyDef_driver___Driver___parse_tokens` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `<module>` (`tokenize.py`)

|      % | Samples | Caller                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `isEnabledFor` (`logging/__init__.py`)

|      % | Samples | Caller  | Location              |
| -----: | ------: | ------- | --------------------- |
| 100.0% |       1 | `debug` | `logging/__init__.py` |

##### `__getitem__` (`typing.py`)

|      % | Samples | Caller  | Location    |
| -----: | ------: | ------- | ----------- |
| 100.0% |       1 | `inner` | `typing.py` |

##### `__init__` (`re/_parser.py`)

|      % | Samples | Caller   | Location        |
| -----: | ------: | -------- | --------------- |
| 100.0% |       1 | `_parse` | `re/_parser.py` |

##### `find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller      | Location                                 |
| -----: | ------: | ----------- | ---------------------------------------- |
| 100.0% |       1 | `_get_spec` | `<frozen importlib._bootstrap_external>` |

##### `<listcomp>` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Caller       | Location                                 |
| -----: | ------: | ------------ | ---------------------------------------- |
| 100.0% |       1 | `_path_join` | `<frozen importlib._bootstrap_external>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                                | Location                                                      |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 100.0% |     301 | `0x7f3b306b724a`                        | `libc.so.6`                                                   |
|  99.7% |     300 | `_run_module_as_main`                   | `<frozen runpy>`                                              |
|  96.7% |     291 | `CPyDef_black___reformat_one`           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  96.7% |     291 | `CPyPy_black___reformat_one`            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  96.7% |     291 | `CPyDef_black___main`                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  96.7% |     291 | `CPyPy_black___main`                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  96.7% |     291 | `new_func`                              | `click/decorators.py`                                         |
|  96.7% |     291 | `invoke`                                | `click/core.py`                                               |
|  96.7% |     291 | `main`                                  | `click/core.py`                                               |
|  96.7% |     291 | `__call__`                              | `click/core.py`                                               |
|  96.7% |     291 | `CPyDef_black___patched_main`           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  96.7% |     291 | `CPyPy_black___patched_main`            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  96.7% |     291 | `<module>`                              | `black/__main__.py`                                           |
|  96.7% |     291 | `_run_code`                             | `<frozen runpy>`                                              |
|  96.3% |     290 | `CPyDef_black___format_file_contents`   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  96.3% |     290 | `CPyDef_black___format_file_in_place`   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  86.4% |     260 | `CPyDef_black____format_str_once`       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  62.8% |     189 | `CPyDef_black___format_str`             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  33.6% |     101 | `CPyDef_driver___Driver___parse_tokens` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  33.6% |     101 | `CPyDef_driver___Driver___parse_string` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

#### Categories

##### Native

|      % | Samples | Function                                                                        | Location                                                      |
| -----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |     301 | `0x7f3b306b724a`                                                                | `libc.so.6`                                                   |
|  96.7% |     291 | `CPyDef_black___reformat_one`                                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  96.7% |     291 | `CPyPy_black___reformat_one`                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  96.7% |     291 | `CPyDef_black___main`                                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  96.7% |     291 | `CPyPy_black___main`                                                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  96.7% |     291 | `CPyDef_black___patched_main`                                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  96.7% |     291 | `CPyPy_black___patched_main`                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  96.3% |     290 | `CPyDef_black___format_file_contents`                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  96.3% |     290 | `CPyDef_black___format_file_in_place`                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  86.4% |     260 | `CPyDef_black____format_str_once`                                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  62.8% |     189 | `CPyDef_black___format_str`                                                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  33.6% |     101 | `CPyDef_driver___Driver___parse_tokens`                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  33.6% |     101 | `CPyDef_driver___Driver___parse_string`                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  33.6% |     101 | `CPyDef_parsing___lib2to3_parse`                                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  33.6% |     101 | `CPyDef_black___check_stability_and_equivalence`                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  31.6% |      95 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  31.2% |      94 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  31.2% |      94 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  30.6% |      92 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__`    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  28.9% |      87 | `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__`   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Ours

|     % | Samples | Function       | Location              |
| ----: | ------: | -------------- | --------------------- |
| 96.7% |     291 | `new_func`     | `click/decorators.py` |
| 96.7% |     291 | `invoke`       | `click/core.py`       |
| 96.7% |     291 | `main`         | `click/core.py`       |
| 96.7% |     291 | `__call__`     | `click/core.py`       |
| 96.7% |     291 | `<module>`     | `black/__main__.py`   |
|  3.3% |      10 | `parse`        | `ast.py`              |
|  1.7% |       5 | `__init__`     | `<string>`            |
|  1.0% |       3 | `<module>`     | `tokenize.py`         |
|  0.7% |       2 | `<module>`     | `click/types.py`      |
|  0.7% |       2 | `<module>`     | `click/core.py`       |
|  0.7% |       2 | `<module>`     | `click/__init__.py`   |
|  0.7% |       2 | `debug`        | `logging/__init__.py` |
|  0.7% |       2 | `<module>`     | `black/files.py`      |
|  0.3% |       1 | `replace`      | `dataclasses.py`      |
|  0.3% |       1 | `_subx`        | `re/__init__.py`      |
|  0.3% |       1 | `isEnabledFor` | `logging/__init__.py` |
|  0.3% |       1 | `__getitem__`  | `typing.py`           |
|  0.3% |       1 | `inner`        | `typing.py`           |
|  0.3% |       1 | `__init__`     | `re/_parser.py`       |
|  0.3% |       1 | `_parse`       | `re/_parser.py`       |

##### Standard library

|     % | Samples | Function                    | Location                                 |
| ----: | ------: | --------------------------- | ---------------------------------------- |
| 99.7% |     300 | `_run_module_as_main`       | `<frozen runpy>`                         |
| 96.7% |     291 | `_run_code`                 | `<frozen runpy>`                         |
|  3.0% |       9 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`          |
|  3.0% |       9 | `_load_unlocked`            | `<frozen importlib._bootstrap>`          |
|  3.0% |       9 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`          |
|  3.0% |       9 | `_find_and_load`            | `<frozen importlib._bootstrap>`          |
|  3.0% |       9 | `create_module`             | `<frozen importlib._bootstrap_external>` |
|  3.0% |       9 | `module_from_spec`          | `<frozen importlib._bootstrap>`          |
|  3.0% |       9 | `_get_module_details`       | `<frozen runpy>`                         |
|  2.3% |       7 | `exec_module`               | `<frozen importlib._bootstrap_external>` |
|  1.0% |       3 | `_handle_fromlist`          | `<frozen importlib._bootstrap>`          |
|  0.7% |       2 | `__new__`                   | `<frozen abc>`                           |
|  0.7% |       2 | `_init_module_attrs`        | `<frozen importlib._bootstrap>`          |
|  0.7% |       2 | `find_spec`                 | `<frozen importlib._bootstrap_external>` |
|  0.7% |       2 | `_get_spec`                 | `<frozen importlib._bootstrap_external>` |
|  0.7% |       2 | `_find_spec`                | `<frozen importlib._bootstrap>`          |
|  0.3% |       1 | `<listcomp>`                | `<frozen importlib._bootstrap_external>` |
|  0.3% |       1 | `_path_join`                | `<frozen importlib._bootstrap_external>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x7f3b306b724a` (`libc.so.6`)

|     % | Samples | Callee                | Location                                                      |
| ----: | ------: | --------------------- | ------------------------------------------------------------- |
| 99.7% |     300 | `_run_module_as_main` | `<frozen runpy>`                                              |
|  0.3% |       1 | `pytree___Node_clear` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_run_module_as_main` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 97.0% |     291 | `_run_code`           | `<frozen runpy>` |
|  3.0% |       9 | `_get_module_details` | `<frozen runpy>` |

##### `CPyDef_black___reformat_one` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Callee                                | Location                                                      |
| ----: | ------: | ------------------------------------- | ------------------------------------------------------------- |
| 99.7% |     290 | `CPyDef_black___format_file_in_place` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  0.3% |       1 | `CPyDef_cache___Cache___read`         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyPy_black___reformat_one` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                        | Location                                                      |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------- |
| 100.0% |     291 | `CPyDef_black___reformat_one` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                       | Location                                                      |
| -----: | ------: | ---------------------------- | ------------------------------------------------------------- |
| 100.0% |     291 | `CPyPy_black___reformat_one` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyPy_black___main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                | Location                                                      |
| -----: | ------: | --------------------- | ------------------------------------------------------------- |
| 100.0% |     291 | `CPyDef_black___main` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `new_func` (`click/decorators.py`)

|     % | Samples | Callee               | Location                                                      |
| ----: | ------: | -------------------- | ------------------------------------------------------------- |
| 99.7% |     290 | `CPyPy_black___main` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `invoke` (`click/core.py`)

|      % | Samples | Callee               | Location                                                      |
| -----: | ------: | -------------------- | ------------------------------------------------------------- |
| 100.0% |     291 | `invoke`             | `click/core.py`                                               |
|  99.7% |     290 | `new_func`           | `click/decorators.py`                                         |
|   0.3% |       1 | `CPyPy_black___main` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `main` (`click/core.py`)

|      % | Samples | Callee   | Location        |
| -----: | ------: | -------- | --------------- |
| 100.0% |     291 | `invoke` | `click/core.py` |

##### `__call__` (`click/core.py`)

|      % | Samples | Callee | Location        |
| -----: | ------: | ------ | --------------- |
| 100.0% |     291 | `main` | `click/core.py` |

##### `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Callee     | Location            |
| ----: | ------: | ---------- | ------------------- |
| 99.7% |     290 | `__call__` | `click/core.py`     |
|  0.3% |       1 | `<module>` | `black/__main__.py` |

##### `CPyPy_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                        | Location                                                      |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------- |
| 100.0% |     291 | `CPyDef_black___patched_main` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `<module>` (`black/__main__.py`)

|     % | Samples | Callee                       | Location                                                      |
| ----: | ------: | ---------------------------- | ------------------------------------------------------------- |
| 99.7% |     290 | `CPyPy_black___patched_main` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  0.3% |       1 | `__call__`                   | `click/core.py`                                               |

##### `_run_code` (`<frozen runpy>`)

|     % | Samples | Callee                       | Location                                                      |
| ----: | ------: | ---------------------------- | ------------------------------------------------------------- |
| 99.7% |     290 | `<module>`                   | `black/__main__.py`                                           |
|  0.3% |       1 | `CPyPy_black___patched_main` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_file_contents` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Callee                                           | Location                                                      |
| ----: | ------: | ------------------------------------------------ | ------------------------------------------------------------- |
| 65.2% |     189 | `CPyDef_black___format_str`                      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 34.8% |     101 | `CPyDef_black___check_stability_and_equivalence` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_file_in_place` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                                | Location                                                      |
| -----: | ------: | ------------------------------------- | ------------------------------------------------------------- |
| 100.0% |     290 | `CPyDef_black___format_file_contents` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black____format_str_once` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Callee                                                             | Location                                                      |
| ----: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------- |
| 38.8% |     101 | `CPyDef_parsing___lib2to3_parse`                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 36.5% |      95 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 11.9% |      31 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  5.8% |      15 | `CPyDef_black___detect_target_versions`                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  1.9% |       5 | `CPyDef_comments___convert_one_fmt_off_pair`                       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_str` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                            | Location                                                      |
| -----: | ------: | --------------------------------- | ------------------------------------------------------------- |
| 100.0% |     189 | `CPyDef_black____format_str_once` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_tokens` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Callee                                  | Location                                                      |
| ----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 49.5% |      50 | `CPyDef_parse___Parser___addtoken`      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 27.7% |      28 | `CPyDef_driver___TokenProxy_____next__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  2.0% |       2 | `debug`                                 | `logging/__init__.py`                                         |
|  2.0% |       2 | `pytree___Leaf_traverse`                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  1.0% |       1 | `0x7f3b2fa8e7d0`                        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_string` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                                  | Location                                                      |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 100.0% |     101 | `CPyDef_driver___Driver___parse_tokens` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parsing___lib2to3_parse` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                                  | Location                                                      |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 100.0% |     101 | `CPyDef_driver___Driver___parse_string` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___check_stability_and_equivalence` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Callee                             | Location                                                      |
| ----: | ------: | ---------------------------------- | ------------------------------------------------------------- |
| 70.3% |      71 | `CPyDef_black___assert_stable`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 29.7% |      30 | `CPyDef_black___assert_equivalent` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Callee                                                                              | Location                                                      |
| ----: | ------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 98.9% |      94 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 96.8% |      92 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__`        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 91.6% |      87 | `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__`       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 90.5% |      86 | `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 60.0% |      57 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                                                          | Location                                                      |
| -----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |      94 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  11.7% |      11 | `nodes___visit_Visitor_gen_dealloc`                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   1.1% |       1 | `0x7f3b2fa90b10`                                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                                                                  | Location                                                      |
| -----: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |      94 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  21.3% |      20 | `CPyDef_lines___Line___append`                                          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  13.8% |      13 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   2.1% |       2 | `CPyDef_nodes___Visitor___visit_default`                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   1.1% |       1 | `CPyDef_comments___generate_comments`                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Callee                                                          | Location                                                      |
| ----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------- |
| 98.9% |      91 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  2.2% |       2 | `CPyDef_linegen___normalize_invisible_parens`                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                                                                          | Location                                                      |
| -----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |      87 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `parse` (`ast.py`)

|     % | Samples | Callee                | Location                                                      |
| ----: | ------: | --------------------- | ------------------------------------------------------------- |
| 10.0% |       1 | `pytree___Node_clear` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|     % | Samples | Callee           | Location                                                      |
| ----: | ------: | ---------------- | ------------------------------------------------------------- |
| 88.9% |       8 | `CPyInit_black`  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.3% |       3 | `_find_and_load` | `<frozen importlib._bootstrap>`                               |
| 33.3% |       3 | `<module>`       | `tokenize.py`                                                 |
| 22.2% |       2 | `<module>`       | `click/types.py`                                              |
| 22.2% |       2 | `<module>`       | `click/core.py`                                               |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee             | Location                                 |
| -----: | ------: | ------------------ | ---------------------------------------- |
| 100.0% |       9 | `module_from_spec` | `<frozen importlib._bootstrap>`          |
|  77.8% |       7 | `exec_module`      | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       9 | `_load_unlocked` | `<frozen importlib._bootstrap>` |
|  22.2% |       2 | `_find_spec`     | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                    | Location                        |
| -----: | ------: | ------------------------- | ------------------------------- |
| 100.0% |       9 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `create_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       9 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `module_from_spec` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee               | Location                                 |
| -----: | ------: | -------------------- | ---------------------------------------- |
| 100.0% |       9 | `create_module`      | `<frozen importlib._bootstrap_external>` |
|  22.2% |       2 | `_init_module_attrs` | `<frozen importlib._bootstrap>`          |

##### `_get_module_details` (`<frozen runpy>`)

|      % | Samples | Callee                | Location                        |
| -----: | ------: | --------------------- | ------------------------------- |
| 100.0% |       9 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% |       9 | `_get_module_details` | `<frozen runpy>`                |

##### `exec_module` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       7 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `__init__` (`<string>`)

|     % | Samples | Callee     | Location   |
| ----: | ------: | ---------- | ---------- |
| 20.0% |       1 | `__init__` | `<string>` |

##### `<module>` (`tokenize.py`)

|     % | Samples | Callee           | Location                        |
| ----: | ------: | ---------------- | ------------------------------- |
| 66.7% |       2 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       3 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `<module>` (`click/types.py`)

|      % | Samples | Callee    | Location       |
| -----: | ------: | --------- | -------------- |
| 100.0% |       2 | `__new__` | `<frozen abc>` |

##### `<module>` (`click/core.py`)

|      % | Samples | Callee             | Location                        |
| -----: | ------: | ------------------ | ------------------------------- |
| 100.0% |       2 | `_handle_fromlist` | `<frozen importlib._bootstrap>` |

##### `<module>` (`click/__init__.py`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       2 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `debug` (`logging/__init__.py`)

|     % | Samples | Callee         | Location              |
| ----: | ------: | -------------- | --------------------- |
| 50.0% |       1 | `isEnabledFor` | `logging/__init__.py` |

##### `<module>` (`black/files.py`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       2 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `find_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee       | Location                                 |
| -----: | ------: | ------------ | ---------------------------------------- |
| 100.0% |       2 | `_get_spec`  | `<frozen importlib._bootstrap_external>` |
|  50.0% |       1 | `_path_join` | `<frozen importlib._bootstrap_external>` |

##### `_get_spec` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee      | Location                                 |
| -----: | ------: | ----------- | ---------------------------------------- |
| 100.0% |       2 | `find_spec` | `<frozen importlib._bootstrap_external>` |

##### `_find_spec` (`<frozen importlib._bootstrap>`)

|      % | Samples | Callee      | Location                                 |
| -----: | ------: | ----------- | ---------------------------------------- |
| 100.0% |       2 | `find_spec` | `<frozen importlib._bootstrap_external>` |

##### `inner` (`typing.py`)

|      % | Samples | Callee        | Location    |
| -----: | ------: | ------------- | ----------- |
| 100.0% |       1 | `__getitem__` | `typing.py` |

##### `_parse` (`re/_parser.py`)

|      % | Samples | Callee       | Location        |
| -----: | ------: | ------------ | --------------- |
| 100.0% |       1 | `__init__`   | `re/_parser.py` |
| 100.0% |       1 | `_parse_sub` | `re/_parser.py` |

##### `_path_join` (`<frozen importlib._bootstrap_external>`)

|      % | Samples | Callee       | Location                                 |
| -----: | ------: | ------------ | ---------------------------------------- |
| 100.0% |       1 | `<listcomp>` | `<frozen importlib._bootstrap_external>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `_run_module_as_main` (`<frozen runpy>`) ← `0x7f3b306b724a` (`libc.so.6`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.0% |      15 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 4.0% |      12 | `CPyDef_driver___Driver___parse_tokens` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 3.0% |       9 | `parse` (`ast.py`) ← `CPyDef_parsing____parse_single_version` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing___parse_ast` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.7% |       8 | `CPyDef_black___get_features_used` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black___detect_target_versions` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 2.3% |       7 | `CPyDef_parse___Parser____addtoken` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2.0% |       6 | `CPyDef_parse___Parser____addtoken` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.7% |       5 | `CPyDef_parse___Parser___push` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.3% |       4 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.0% |       3 | `CPyDef_parse___Parser___pop` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.0% |       3 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.0% |       3 | `CPy_AddTraceback` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_trans___hug_power_op_gen_____mypyc_generator_helper__` ← `CPyDef_linegen____hugging_power_ops_line_to_string` ← `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.0% |       3 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`) |
| 1.0% |       3 | `CPyDef_parse___Parser___pop` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.0% |       3 | `CPyDef_parse___Parser___shift` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.7% |       2 | `CPyDef_parse___Parser___push` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.7% |       2 | `__new__` (`<frozen abc>`) ← `<module>` (`click/types.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `_call_with_frames_removed` ← `_handle_fromlist` ← `<module>` (`click/core.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `<module>` (`click/__init__.py`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `exec_module` (`<frozen importlib._bootstrap_external>`) ← `_load_unlocked` (`<frozen importlib._bootstrap>`) ← `_find_and_load_unlocked` ← `_find_and_load` ← `CPyImport_ImportMany` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black_____top_level__` ← `CPyInit_black` ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>`) ← `create_module` (`<frozen importlib._bootstrap_external>`) ← `module_from_spec` (`<frozen importlib._bootstrap>`) ← `_load_unlocked` ← `_find_and_load_unlocked` ← `_find_and_load` ← `_get_module_details` (`<frozen runpy>`) ← `_get_module_details`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 0.7% |       2 | `CPyDef_pytree___convert` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___shift` ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.7% |       2 | `CPyDef_pytree___convert` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___shift` ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 0.7% |       2 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.7% |       2 | `CPyDef_tokenize___generate_tokens_gen_____next__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` ← `CPyDef_black___format_file_contents` ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

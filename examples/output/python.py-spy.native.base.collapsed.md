# Sampling profile

Collected 307 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Native           | 93.2% |     286 |
| Ours             |  5.9% |      18 |
| Standard library |  1.0% |       3 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|    % | Samples | Function                                                                     | Location                                                      |
| ---: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 5.9% |      18 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 5.5% |      17 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 5.2% |      16 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.2% |      13 | `CPyDef_parse___Parser____addtoken`                                          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.6% |      11 | `CPyDef_parse___Parser___push`                                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.6% |       8 | `parse`                                                                      | `ast.py`                                                      |
| 2.3% |       7 | `CPyDef_driver___Driver___parse_tokens`                                      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.3% |       7 | `CPyDef_parse___Parser___pop`                                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.3% |       7 | `CPy_AddTraceback`                                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.0% |       6 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.6% |       5 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__`           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.6% |       5 | `pytree___Leaf_traverse`                                                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.6% |       5 | `CPyDef_lines___Line_____str__`                                              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       4 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       4 | `CPyDef_pytree___Node___update_sibling_maps`                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       4 | `CPyDef_parse___Parser___shift`                                              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       4 | `CPyTagged_StealAsObject`                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.0% |       3 | `0x7f943b4ef24a`                                                             | `libc.so.6`                                                   |
| 1.0% |       3 | `CPyDef_nodes___whitespace`                                                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.0% |       3 | `0x7f943b61ad8c`                                                             | `libc.so.6`                                                   |

#### Categories

##### Native

|    % | Samples | Function                                                                     | Location                                                      |
| ---: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 5.9% |      18 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 5.5% |      17 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 5.2% |      16 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.2% |      13 | `CPyDef_parse___Parser____addtoken`                                          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 3.6% |      11 | `CPyDef_parse___Parser___push`                                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.3% |       7 | `CPyDef_driver___Driver___parse_tokens`                                      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.3% |       7 | `CPyDef_parse___Parser___pop`                                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.3% |       7 | `CPy_AddTraceback`                                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.0% |       6 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.6% |       5 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__`           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.6% |       5 | `pytree___Leaf_traverse`                                                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.6% |       5 | `CPyDef_lines___Line_____str__`                                              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       4 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       4 | `CPyDef_pytree___Node___update_sibling_maps`                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       4 | `CPyDef_parse___Parser___shift`                                              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.3% |       4 | `CPyTagged_StealAsObject`                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.0% |       3 | `0x7f943b4ef24a`                                                             | `libc.so.6`                                                   |
| 1.0% |       3 | `CPyDef_nodes___whitespace`                                                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.0% |       3 | `0x7f943b61ad8c`                                                             | `libc.so.6`                                                   |
| 1.0% |       3 | `CPyDef_comments___normalize_trailing_prefix`                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Ours

|    % | Samples | Function       | Location                  |
| ---: | ------: | -------------- | ------------------------- |
| 2.6% |       8 | `parse`        | `ast.py`                  |
| 1.0% |       3 | `__init__`     | `<string>`                |
| 0.7% |       2 | `__hash__`     | `enum.py`                 |
| 0.3% |       1 | `isEnabledFor` | `logging/__init__.py`     |
| 0.3% |       1 | `<module>`     | `logging/__init__.py`     |
| 0.3% |       1 | `replace`      | `dataclasses.py`          |
| 0.3% |       1 | `namedtuple`   | `collections/__init__.py` |
| 0.3% |       1 | `_compile`     | `re/_compiler.py`         |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `parse` (`ast.py`)

|      % | Samples | Location    |
| -----: | ------: | ----------- |
| 100.0% |       8 | `ast.py:50` |

##### `__init__` (`<string>`)

|     % | Samples | Location     |
| ----: | ------: | ------------ |
| 33.3% |       1 | `<string>:5` |
| 33.3% |       1 | `<string>:3` |
| 33.3% |       1 | `<string>:9` |

##### `__hash__` (`enum.py`)

|     % | Samples | Location       |
| ----: | ------: | -------------- |
| 50.0% |       1 | `enum.py:1230` |
| 50.0% |       1 | `enum.py:1229` |

##### `isEnabledFor` (`logging/__init__.py`)

|      % | Samples | Location                   |
| -----: | ------: | -------------------------- |
| 100.0% |       1 | `logging/__init__.py:1738` |

##### `<module>` (`logging/__init__.py`)

|      % | Samples | Location                 |
| -----: | ------: | ------------------------ |
| 100.0% |       1 | `logging/__init__.py:26` |

##### `replace` (`dataclasses.py`)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       1 | `dataclasses.py:1484` |

##### `namedtuple` (`collections/__init__.py`)

|      % | Samples | Location                      |
| -----: | ------: | ----------------------------- |
| 100.0% |       1 | `collections/__init__.py:440` |

##### `_compile` (`re/_compiler.py`)

|      % | Samples | Location              |
| -----: | ------: | --------------------- |
| 100.0% |       1 | `re/_compiler.py:212` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Caller                                     | Location                                                      |
| ----: | ------: | ------------------------------------------ | ------------------------------------------------------------- |
| 88.9% |      16 | `CPyDef_driver___TokenProxy_____next__`    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 11.1% |       2 | `CPyDef_pgen___ParserGenerator___gettoken` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                                                                             | Location                                                      |
| -----: | ------: | ---------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |      17 | `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Caller                                                                          | Location                                                      |
| ----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 87.5% |      14 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  6.3% |       1 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__`    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  6.3% |       1 | `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser____addtoken` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                             | Location                                                      |
| -----: | ------: | ---------------------------------- | ------------------------------------------------------------- |
| 100.0% |      13 | `CPyDef_parse___Parser___addtoken` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___push` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                              | Location                                                      |
| -----: | ------: | ----------------------------------- | ------------------------------------------------------------- |
| 100.0% |      11 | `CPyDef_parse___Parser____addtoken` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `parse` (`ast.py`)

|      % | Samples | Caller                                   | Location                                                      |
| -----: | ------: | ---------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       8 | `CPyDef_parsing____parse_single_version` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_tokens` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                                  | Location                                                      |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       7 | `CPyDef_driver___Driver___parse_string` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___pop` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                              | Location                                                      |
| -----: | ------: | ----------------------------------- | ------------------------------------------------------------- |
| 100.0% |       7 | `CPyDef_parse___Parser____addtoken` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPy_AddTraceback` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Caller                                                             | Location                                                      |
| ----: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------- |
| 57.1% |       4 | `CPyDef_trans___hug_power_op_gen_____mypyc_generator_helper__`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 14.3% |       1 | `CPyDef_linegen___run_transformer`                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 14.3% |       1 | `CPyDef_lines___Line___is_def`                                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 14.3% |       1 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                                                                          | Location                                                      |
| -----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       6 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Caller                             | Location                                                      |
| ----: | ------: | ---------------------------------- | ------------------------------------------------------------- |
| 80.0% |       4 | `CPyDef_black____format_str_once`  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.0% |       1 | `CPyDef_linegen___run_transformer` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___Leaf_traverse` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Caller                            | Location                                                      |
| ----: | ------: | --------------------------------- | ------------------------------------------------------------- |
| 40.0% |       2 | `CPyDef_pytree___Leaf_____init__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.0% |       1 | `0x7f943b4ef24a`                  | `libc.so.6`                                                   |
| 20.0% |       1 | `CPyDef_parse___Parser___push`    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.0% |       1 | `parse`                           | `ast.py`                                                      |

##### `CPyDef_lines___Line_____str__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Caller                            | Location                                                      |
| ----: | ------: | --------------------------------- | ------------------------------------------------------------- |
| 80.0% |       4 | `CPyDef_lines___line_to_string`   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.0% |       1 | `CPyDef_black____format_str_once` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                                                          | Location                                                      |
| -----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       4 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___Node___update_sibling_maps` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                                | Location                                                      |
| -----: | ------: | ------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       4 | `CPyDef_pytree___Base___prev_sibling` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___shift` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                              | Location                                                      |
| -----: | ------: | ----------------------------------- | ------------------------------------------------------------- |
| 100.0% |       4 | `CPyDef_parse___Parser____addtoken` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyTagged_StealAsObject` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Caller                                                               | Location                                                      |
| ----: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------- |
| 75.0% |       3 | `CPyDef_nodes___whitespace`                                          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.0% |       1 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___whitespace` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                         | Location                                                      |
| -----: | ------: | ------------------------------ | ------------------------------------------------------------- |
| 100.0% |       3 | `CPyDef_lines___Line___append` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7f943b61ad8c` (`libc.so.6`)

|      % | Samples | Caller           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       3 | `0x7f943b560462` | `libc.so.6` |

##### `CPyDef_comments___normalize_trailing_prefix` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Caller                                                                 | Location                                                      |
| -----: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       3 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `__init__` (`<string>`)

|     % | Samples | Caller                                                                             | Location                                                      |
| ----: | ------: | ---------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 33.3% |       1 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__`             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.3% |       1 | `CPyDef_linegen___append_to_line_delimiter_split_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.3% |       1 | `__init__`                                                                         | `<string>`                                                    |

##### `__hash__` (`enum.py`)

|      % | Samples | Caller                              | Location                                                      |
| -----: | ------: | ----------------------------------- | ------------------------------------------------------------- |
| 100.0% |       2 | `CPyDef_mode___Mode_____contains__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `isEnabledFor` (`logging/__init__.py`)

|      % | Samples | Caller  | Location              |
| -----: | ------: | ------- | --------------------- |
| 100.0% |       1 | `debug` | `logging/__init__.py` |

##### `<module>` (`logging/__init__.py`)

|      % | Samples | Caller                      | Location                        |
| -----: | ------: | --------------------------- | ------------------------------- |
| 100.0% |       1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `replace` (`dataclasses.py`)

|      % | Samples | Caller                                                                                    | Location                                                      |
| -----: | ------: | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |       1 | `CPyDef_linegen____maybe_split_omitting_optional_parens_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `namedtuple` (`collections/__init__.py`)

|      % | Samples | Caller     | Location     |
| -----: | ------: | ---------- | ------------ |
| 100.0% |       1 | `<module>` | `inspect.py` |

##### `_compile` (`re/_compiler.py`)

|      % | Samples | Caller     | Location          |
| -----: | ------: | ---------- | ----------------- |
| 100.0% |       1 | `_compile` | `re/_compiler.py` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|      % | Samples | Function                                                        | Location                                                      |
| -----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |     307 | `0x7f943b4ef24a`                                                | `libc.so.6`                                                   |
|  98.0% |     301 | `_run_module_as_main`                                           | `<frozen runpy>`                                              |
|  93.2% |     286 | `CPyDef_black___format_file_contents`                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |     286 | `CPyDef_black___format_file_in_place`                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |     286 | `CPyDef_black___reformat_one`                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |     286 | `CPyPy_black___reformat_one`                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |     286 | `CPyDef_black___main`                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |     286 | `CPyPy_black___main`                                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |     286 | `new_func`                                                      | `click/decorators.py`                                         |
|  93.2% |     286 | `invoke`                                                        | `click/core.py`                                               |
|  93.2% |     286 | `main`                                                          | `click/core.py`                                               |
|  93.2% |     286 | `__call__`                                                      | `click/core.py`                                               |
|  93.2% |     286 | `CPyDef_black___patched_main`                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |     286 | `CPyPy_black___patched_main`                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |     286 | `<module>`                                                      | `black/__main__.py`                                           |
|  93.2% |     286 | `_run_code`                                                     | `<frozen runpy>`                                              |
|  79.8% |     245 | `CPyDef_black____format_str_once`                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  52.4% |     161 | `CPyDef_black___format_str`                                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  40.7% |     125 | `CPyDef_black___check_stability_and_equivalence`                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  30.6% |      94 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

#### Categories

##### Native

|      % | Samples | Function                                                                        | Location                                                      |
| -----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |     307 | `0x7f943b4ef24a`                                                                | `libc.so.6`                                                   |
|  93.2% |     286 | `CPyDef_black___format_file_contents`                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |     286 | `CPyDef_black___format_file_in_place`                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |     286 | `CPyDef_black___reformat_one`                                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |     286 | `CPyPy_black___reformat_one`                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |     286 | `CPyDef_black___main`                                                           | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |     286 | `CPyPy_black___main`                                                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |     286 | `CPyDef_black___patched_main`                                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  93.2% |     286 | `CPyPy_black___patched_main`                                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  79.8% |     245 | `CPyDef_black____format_str_once`                                               | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  52.4% |     161 | `CPyDef_black___format_str`                                                     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  40.7% |     125 | `CPyDef_black___check_stability_and_equivalence`                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  30.6% |      94 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  30.3% |      93 | `CPyDef_driver___Driver___parse_tokens`                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  30.3% |      93 | `CPyDef_driver___Driver___parse_string`                                         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  30.3% |      93 | `CPyDef_parsing___lib2to3_parse`                                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  30.3% |      93 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__`    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  30.3% |      93 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`         | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  30.3% |      93 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  29.0% |      89 | `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__`   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Ours

|     % | Samples | Function       | Location                |
| ----: | ------: | -------------- | ----------------------- |
| 93.2% |     286 | `new_func`     | `click/decorators.py`   |
| 93.2% |     286 | `invoke`       | `click/core.py`         |
| 93.2% |     286 | `main`         | `click/core.py`         |
| 93.2% |     286 | `__call__`     | `click/core.py`         |
| 93.2% |     286 | `<module>`     | `black/__main__.py`     |
|  3.9% |      12 | `parse`        | `ast.py`                |
|  1.3% |       4 | `__init__`     | `<string>`              |
|  0.7% |       2 | `<module>`     | `logging/__init__.py`   |
|  0.7% |       2 | `<module>`     | `dataclasses.py`        |
|  0.7% |       2 | `<module>`     | `pathspec/gitignore.py` |
|  0.7% |       2 | `<module>`     | `pathspec/__init__.py`  |
|  0.7% |       2 | `__hash__`     | `enum.py`               |
|  0.3% |       1 | `isEnabledFor` | `logging/__init__.py`   |
|  0.3% |       1 | `debug`        | `logging/__init__.py`   |
|  0.3% |       1 | `decorator`    | `click/decorators.py`   |
|  0.3% |       1 | `<module>`     | `click/globals.py`      |
|  0.3% |       1 | `<module>`     | `click/exceptions.py`   |
|  0.3% |       1 | `<module>`     | `click/types.py`        |
|  0.3% |       1 | `<module>`     | `click/core.py`         |
|  0.3% |       1 | `<module>`     | `click/__init__.py`     |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x7f943b4ef24a` (`libc.so.6`)

|     % | Samples | Callee                   | Location                                                      |
| ----: | ------: | ------------------------ | ------------------------------------------------------------- |
| 98.0% |     301 | `_run_module_as_main`    | `<frozen runpy>`                                              |
|  0.7% |       2 | `pytree___Node_clear`    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  0.3% |       1 | `pytree___Leaf_traverse` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_run_module_as_main` (`<frozen runpy>`)

|     % | Samples | Callee                | Location         |
| ----: | ------: | --------------------- | ---------------- |
| 95.0% |     286 | `_run_code`           | `<frozen runpy>` |
|  5.0% |      15 | `_get_module_details` | `<frozen runpy>` |

##### `CPyDef_black___format_file_contents` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Callee                                           | Location                                                      |
| ----: | ------: | ------------------------------------------------ | ------------------------------------------------------------- |
| 56.3% |     161 | `CPyDef_black___format_str`                      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 43.7% |     125 | `CPyDef_black___check_stability_and_equivalence` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_file_in_place` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                                | Location                                                      |
| -----: | ------: | ------------------------------------- | ------------------------------------------------------------- |
| 100.0% |     286 | `CPyDef_black___format_file_contents` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___reformat_one` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                                | Location                                                      |
| -----: | ------: | ------------------------------------- | ------------------------------------------------------------- |
| 100.0% |     286 | `CPyDef_black___format_file_in_place` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyPy_black___reformat_one` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                        | Location                                                      |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------- |
| 100.0% |     286 | `CPyDef_black___reformat_one` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                       | Location                                                      |
| -----: | ------: | ---------------------------- | ------------------------------------------------------------- |
| 100.0% |     286 | `CPyPy_black___reformat_one` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyPy_black___main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                | Location                                                      |
| -----: | ------: | --------------------- | ------------------------------------------------------------- |
| 100.0% |     286 | `CPyDef_black___main` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `new_func` (`click/decorators.py`)

|      % | Samples | Callee               | Location                                                      |
| -----: | ------: | -------------------- | ------------------------------------------------------------- |
| 100.0% |     286 | `CPyPy_black___main` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `invoke` (`click/core.py`)

|      % | Samples | Callee     | Location              |
| -----: | ------: | ---------- | --------------------- |
| 100.0% |     286 | `new_func` | `click/decorators.py` |
| 100.0% |     286 | `invoke`   | `click/core.py`       |

##### `main` (`click/core.py`)

|      % | Samples | Callee   | Location        |
| -----: | ------: | -------- | --------------- |
| 100.0% |     286 | `invoke` | `click/core.py` |

##### `__call__` (`click/core.py`)

|      % | Samples | Callee | Location        |
| -----: | ------: | ------ | --------------- |
| 100.0% |     286 | `main` | `click/core.py` |

##### `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee     | Location        |
| -----: | ------: | ---------- | --------------- |
| 100.0% |     286 | `__call__` | `click/core.py` |

##### `CPyPy_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                        | Location                                                      |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------- |
| 100.0% |     286 | `CPyDef_black___patched_main` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `<module>` (`black/__main__.py`)

|      % | Samples | Callee                       | Location                                                      |
| -----: | ------: | ---------------------------- | ------------------------------------------------------------- |
| 100.0% |     286 | `CPyPy_black___patched_main` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_run_code` (`<frozen runpy>`)

|      % | Samples | Callee     | Location            |
| -----: | ------: | ---------- | ------------------- |
| 100.0% |     286 | `<module>` | `black/__main__.py` |

##### `CPyDef_black____format_str_once` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Callee                                                             | Location                                                      |
| ----: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------- |
| 38.4% |      94 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 38.0% |      93 | `CPyDef_parsing___lib2to3_parse`                                   | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 13.9% |      34 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  4.1% |      10 | `CPyDef_black___detect_target_versions`                            | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  2.4% |       6 | `CPyDef_lines___EmptyLineTracker___maybe_empty_lines`              | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_str` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                            | Location                                                      |
| -----: | ------: | --------------------------------- | ------------------------------------------------------------- |
| 100.0% |     161 | `CPyDef_black____format_str_once` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___check_stability_and_equivalence` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Callee                             | Location                                                      |
| ----: | ------: | ---------------------------------- | ------------------------------------------------------------- |
| 67.2% |      84 | `CPyDef_black___assert_stable`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 32.8% |      41 | `CPyDef_black___assert_equivalent` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Callee                                                                              | Location                                                      |
| ----: | ------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 98.9% |      93 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__`        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 98.9% |      93 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 94.7% |      89 | `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__`       | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 92.6% |      87 | `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__`     | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 51.1% |      48 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_tokens` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Callee                                  | Location                                                      |
| ----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 55.9% |      52 | `CPyDef_parse___Parser___addtoken`      | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 29.0% |      27 | `CPyDef_driver___TokenProxy_____next__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  2.2% |       2 | `0x7f943a890b10`                        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  1.1% |       1 | `debug`                                 | `logging/__init__.py`                                         |
|  1.1% |       1 | `0x7f943b61ab00`                        | `libc.so.6`                                                   |

##### `CPyDef_driver___Driver___parse_string` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                                  | Location                                                      |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 100.0% |      93 | `CPyDef_driver___Driver___parse_tokens` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parsing___lib2to3_parse` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                                  | Location                                                      |
| -----: | ------: | --------------------------------------- | ------------------------------------------------------------- |
| 100.0% |      93 | `CPyDef_driver___Driver___parse_string` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Callee                                                                 | Location                                                      |
| ----: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------- |
| 97.8% |      91 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  3.2% |       3 | `nodes___visit_Visitor_gen_dealloc`                                    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  2.2% |       2 | `CPyDef_linegen___normalize_invisible_parens`                          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  1.1% |       1 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                                                          | Location                                                      |
| -----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |      93 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  10.8% |      10 | `nodes___visit_Visitor_gen_dealloc`                             | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   1.1% |       1 | `CPyDef_nodes___Visitor___visit`                                | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Samples | Callee                                                                  | Location                                                      |
| -----: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% |      93 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  23.7% |      22 | `CPyDef_lines___Line___append`                                          | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  10.8% |      10 | `CPyDef_comments___generate_comments_gen_____mypyc_generator_helper__`  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   2.2% |       2 | `CPyDef_linegen___LineGenerator___line`                                 | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|   1.1% |       1 | `0x7f943a890810`                                                        | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % | Samples | Callee                                                                          | Location                                                      |
| ----: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 98.9% |      88 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  2.2% |       2 | `CPyDef_nodes___is_stub_suite`                                                  | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `parse` (`ast.py`)

|     % | Samples | Callee                   | Location                                                      |
| ----: | ------: | ------------------------ | ------------------------------------------------------------- |
| 16.7% |       2 | `realloc`                | `libc.so.6`                                                   |
|  8.3% |       1 | `pytree___Node_clear`    | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  8.3% |       1 | `pytree___Leaf_traverse` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `__init__` (`<string>`)

|     % | Samples | Callee                          | Location                                                      |
| ----: | ------: | ------------------------------- | ------------------------------------------------------------- |
| 25.0% |       1 | `brackets___BracketTracker_new` | `30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.0% |       1 | `__init__`                      | `<string>`                                                    |

##### `<module>` (`logging/__init__.py`)

|     % | Samples | Callee           | Location                        |
| ----: | ------: | ---------------- | ------------------------------- |
| 50.0% |       1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`dataclasses.py`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       2 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`pathspec/gitignore.py`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       2 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`pathspec/__init__.py`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       2 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `debug` (`logging/__init__.py`)

|      % | Samples | Callee         | Location              |
| -----: | ------: | -------------- | --------------------- |
| 100.0% |       1 | `isEnabledFor` | `logging/__init__.py` |

##### `decorator` (`click/decorators.py`)

|      % | Samples | Callee           | Location    |
| -----: | ------: | ---------------- | ----------- |
| 100.0% |       1 | `0x7f943b61a615` | `libc.so.6` |

##### `<module>` (`click/globals.py`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`click/exceptions.py`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`click/types.py`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

##### `<module>` (`click/core.py`)

|      % | Samples | Callee             | Location                        |
| -----: | ------: | ------------------ | ------------------------------- |
| 100.0% |       1 | `_handle_fromlist` | `<frozen importlib._bootstrap>` |

##### `<module>` (`click/__init__.py`)

|      % | Samples | Callee           | Location                        |
| -----: | ------: | ---------------- | ------------------------------- |
| 100.0% |       1 | `_find_and_load` | `<frozen importlib._bootstrap>` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `CPyDef_black___format_file_contents` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`click/decorators.py`) ← `invoke` (`click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main` ← `0x7f943b4ef24a` (`libc.so.6`)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.6% |      11 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.9% |       9 | `CPyDef_parse___Parser____addtoken` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.6% |       8 | `parse` (`ast.py`) ← `CPyDef_parsing____parse_single_version` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing___parse_ast` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2.6% |       8 | `CPyDef_parse___Parser___push` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.0% |       6 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.0% |       6 | `CPyDef_parse___Parser___pop` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.6% |       5 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.3% |       4 | `CPyDef_parse___Parser____addtoken` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.3% |       4 | `CPyDef_driver___Driver___parse_tokens` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.3% |       4 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.0% |       3 | `CPyDef_driver___Driver___parse_tokens` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.0% |       3 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.0% |       3 | `CPyDef_parse___Parser___push` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 1.0% |       3 | `CPy_AddTraceback` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_trans___hug_power_op_gen_____mypyc_generator_helper__` ← `CPyDef_linegen____hugging_power_ops_line_to_string` ← `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.0% |       3 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` |
| 1.0% |       3 | `CPyDef_parse___Parser___classify` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.7% |       2 | `0x7f943b61ad8c` (`libc.so.6`) ← `0x7f943b560462` ← `realloc` ← `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 0.7% |       2 | `pytree___Leaf_traverse` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_pytree___Leaf_____init__` ← `CPyDef_pytree___convert` ← `CPyDef_parse___Parser___shift` ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.7% |       2 | `CPyDef_lines___Line_____str__` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_lines___line_to_string` ← `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.7% |       2 | `CPyDef_lines___Line___comments_after` (`30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_trans___hug_power_op_gen_____mypyc_generator_helper__` ← `CPyDef_linegen____hugging_power_ops_line_to_string` ← `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___run_transformer` ← `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

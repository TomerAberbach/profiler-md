# Sampling profile

Took 24.50s over 245 samples (100.0ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Third-party      | 93.1% |  22.80s |     228 |
| Standard library |  2.9% | 700.0ms |       7 |
| Native           |  2.9% | 700.0ms |       7 |
| Ours             |  1.2% | 300.0ms |       3 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                                                                        | Location                                                                                         |
| ---: | ------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 7.3% |   1.80s |      18 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 7.3% |   1.80s |      18 | `CPyDef_parse___Parser____addtoken`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 6.9% |   1.70s |      17 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 5.3% |   1.30s |      13 | `CPyDef_driver___Driver___parse_tokens`                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.1% |      1s |      10 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.1% |      1s |      10 | `CPyDef_parse___Parser___pop`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.9% | 700.0ms |       7 | `CPyDef_parse___Parser___push`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.0% | 500.0ms |       5 | `CPyDef_black___get_features_used`                                              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.6% | 400.0ms |       4 | `CPyDef_nodes___whitespace`                                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.6% | 400.0ms |       4 | `pytree___Leaf_traverse`                                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 300.0ms |       3 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__`               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 300.0ms |       3 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 300.0ms |       3 | `CPyDict_Build`                                                                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 300.0ms |       3 | `0x7ff2a708f4a0`                                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 300.0ms |       3 | `CPyDef_lines___Line___is_def`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 300.0ms |       3 | `CPyDef_nodes___Visitor___visit_default`                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 300.0ms |       3 | `CPy_AddTraceback`                                                              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 300.0ms |       3 | `pytree___Node_clear`                                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 300.0ms |       3 | `parse`                                                                         | `/usr/lib/python3.11/ast.py`                                                                     |
| 1.2% | 300.0ms |       3 | `__init__`                                                                      | `<string>`                                                                                       |

#### Categories

##### Third-party

|    % |    Time | Samples | Function                                                                        | Location                                                                                         |
| ---: | ------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 7.3% |   1.80s |      18 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 7.3% |   1.80s |      18 | `CPyDef_parse___Parser____addtoken`                                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 6.9% |   1.70s |      17 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 5.3% |   1.30s |      13 | `CPyDef_driver___Driver___parse_tokens`                                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.1% |      1s |      10 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__`              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 4.1% |      1s |      10 | `CPyDef_parse___Parser___pop`                                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.9% | 700.0ms |       7 | `CPyDef_parse___Parser___push`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 2.0% | 500.0ms |       5 | `CPyDef_black___get_features_used`                                              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.6% | 400.0ms |       4 | `CPyDef_nodes___whitespace`                                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.6% | 400.0ms |       4 | `pytree___Leaf_traverse`                                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 300.0ms |       3 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__`               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 300.0ms |       3 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 300.0ms |       3 | `CPyDict_Build`                                                                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 300.0ms |       3 | `0x7ff2a708f4a0`                                                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 300.0ms |       3 | `CPyDef_lines___Line___is_def`                                                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 300.0ms |       3 | `CPyDef_nodes___Visitor___visit_default`                                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 300.0ms |       3 | `CPy_AddTraceback`                                                              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 1.2% | 300.0ms |       3 | `pytree___Node_clear`                                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 0.8% | 200.0ms |       2 | `CPyTagged_StealAsObject`                                                       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 0.8% | 200.0ms |       2 | `CPyDef_linegen___visit_power_LineGenerator_gen_____mypyc_generator_helper__`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Standard library

|    % |    Time | Samples | Function            | Location                                  |
| ---: | ------: | ------: | ------------------- | ----------------------------------------- |
| 1.2% | 300.0ms |       3 | `parse`             | `/usr/lib/python3.11/ast.py`              |
| 0.4% | 100.0ms |       1 | `getwidth`          | `/usr/lib/python3.11/re/_parser.py`       |
| 0.4% | 100.0ms |       1 | `_optimize_charset` | `/usr/lib/python3.11/re/_compiler.py`     |
| 0.4% | 100.0ms |       1 | `isEnabledFor`      | `/usr/lib/python3.11/logging/__init__.py` |
| 0.4% | 100.0ms |       1 | `__init__`          | `/usr/lib/python3.11/re/_parser.py`       |

##### Native

|    % |    Time | Samples | Function         | Location                              |
| ---: | ------: | ------: | ---------------- | ------------------------------------- |
| 0.4% | 100.0ms |       1 | `0x7ff2a7b2e24a` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.4% | 100.0ms |       1 | `0x7ff2a7b9f109` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.4% | 100.0ms |       1 | `0x7ff2a7c59aba` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.4% | 100.0ms |       1 | `0x7ff2a7c59d8c` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.4% | 100.0ms |       1 | `0x7ff2a7c5962e` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.4% | 100.0ms |       1 | `__libc_malloc`  | `/usr/lib/x86_64-linux-gnu/libc.so.6` |
| 0.4% | 100.0ms |       1 | `0x7ff2a7c5a480` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### Ours

|    % |    Time | Samples | Function   | Location   |
| ---: | ------: | ------: | ---------- | ---------- |
| 1.2% | 300.0ms |       3 | `__init__` | `<string>` |

#### Lines

Lines ranked by contribution to each function's self time.

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |    Time | Samples | Location                        |
| -----: | ------: | ------: | ------------------------------- |
| 100.0% | 300.0ms |       3 | `/usr/lib/python3.11/ast.py:50` |

##### `__init__` (`<string>`)

|     % |    Time | Samples | Location     |
| ----: | ------: | ------: | ------------ |
| 33.3% | 100.0ms |       1 | `<string>:5` |
| 33.3% | 100.0ms |       1 | `<string>:7` |
| 33.3% | 100.0ms |       1 | `<string>:6` |

##### `getwidth` (`/usr/lib/python3.11/re/_parser.py`)

|      % |    Time | Samples | Location                                |
| -----: | ------: | ------: | --------------------------------------- |
| 100.0% | 100.0ms |       1 | `/usr/lib/python3.11/re/_parser.py:192` |

##### `_optimize_charset` (`/usr/lib/python3.11/re/_compiler.py`)

|      % |    Time | Samples | Location                                  |
| -----: | ------: | ------: | ----------------------------------------- |
| 100.0% | 100.0ms |       1 | `/usr/lib/python3.11/re/_compiler.py:310` |

##### `isEnabledFor` (`/usr/lib/python3.11/logging/__init__.py`)

|      % |    Time | Samples | Location                                       |
| -----: | ------: | ------: | ---------------------------------------------- |
| 100.0% | 100.0ms |       1 | `/usr/lib/python3.11/logging/__init__.py:1738` |

##### `__init__` (`/usr/lib/python3.11/re/_parser.py`)

|      % |    Time | Samples | Location                                |
| -----: | ------: | ------: | --------------------------------------- |
| 100.0% | 100.0ms |       1 | `/usr/lib/python3.11/re/_parser.py:111` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                                                       | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 83.3% |   1.50s |      15 | `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__`      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 11.1% | 200.0ms |       2 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  5.6% | 100.0ms |       1 | `CPyDef_black____format_str_once`                                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser____addtoken` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |  Time | Samples | Caller                             | Location                                                                                         |
| -----: | ----: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.80s |      18 | `CPyDef_parse___Parser___addtoken` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |  Time | Samples | Caller                                  | Location                                                                                         |
| -----: | ----: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.70s |      17 | `CPyDef_driver___TokenProxy_____next__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_tokens` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |  Time | Samples | Caller                                  | Location                                                                                         |
| -----: | ----: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 1.30s |      13 | `CPyDef_driver___Driver___parse_string` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Time | Samples | Caller                                                                             | Location                                                                                         |
| -----: | ---: | ------: | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |   1s |      10 | `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___pop` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % | Time | Samples | Caller                              | Location                                                                                         |
| -----: | ---: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |   1s |      10 | `CPyDef_parse___Parser____addtoken` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parse___Parser___push` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                              | Location                                                                                         |
| -----: | ------: | ------: | ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 700.0ms |       7 | `CPyDef_parse___Parser____addtoken` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___get_features_used` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                                  | Location                                                                                         |
| -----: | ------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 500.0ms |       5 | `CPyDef_black___detect_target_versions` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___whitespace` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                         | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 400.0ms |       4 | `CPyDef_lines___Line___append` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___Leaf_traverse` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                           | Location                                                                                         |
| ----: | ------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| 75.0% | 300.0ms |       3 | `CPyDef_nodes___Visitor___visit` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 25.0% | 100.0ms |       1 | `CPyDef_parse___Parser___push`   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                                                            | Location                                                                                         |
| -----: | ------: | ------: | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 300.0ms |       3 | `CPyDef_pytree___pre_order_Node_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                                                        | Location                                                                                         |
| ----: | ------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 66.7% | 200.0ms |       2 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.3% | 100.0ms |       1 | `CPyDef_linegen___visit_power_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDict_Build` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                                                 | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 66.7% | 200.0ms |       2 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.3% | 100.0ms |       1 | `CPyDef_lines___EmptyLineTracker___maybe_empty_lines`                  | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7ff2a708f4a0` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                | Location                                                                                         |
| ----: | ------: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 66.7% | 200.0ms |       2 | `CPyDef_parse___Parser___push`        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.3% | 100.0ms |       1 | `CPyDef_pytree___Base___prev_sibling` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_lines___Line___is_def` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                                             | Location                                                                                         |
| ----: | ------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 66.7% | 200.0ms |       2 | `CPyDef_lines___EmptyLineTracker____maybe_empty_lines`             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.3% | 100.0ms |       1 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___Visitor___visit_default` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                                                                          | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 300.0ms |       3 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPy_AddTraceback` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                                             | Location                                                                                         |
| ----: | ------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 33.3% | 100.0ms |       1 | `CPyDef_trans___hug_power_op_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.3% | 100.0ms |       1 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.3% | 100.0ms |       1 | `CPyDef_linegen____hugging_power_ops_line_to_string`               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `pytree___Node_clear` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                  | Location                                                                                         |
| ----: | ------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 33.3% | 100.0ms |       1 | `CPyDef_driver___Driver___parse_tokens` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.3% | 100.0ms |       1 | `0x7ff2a7b2e24a`                        | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
| 33.3% | 100.0ms |       1 | `pytree___Node_dealloc`                 | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|      % |    Time | Samples | Caller                                   | Location                                                                                         |
| -----: | ------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 300.0ms |       3 | `CPyDef_parsing____parse_single_version` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `__init__` (`<string>`)

|     % |    Time | Samples | Caller                                                                 | Location                                                                                         |
| ----: | ------: | ------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 33.3% | 100.0ms |       1 | `CPyDef_linegen___line_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.3% | 100.0ms |       1 | `CPyDef_lines___LinesBlock___all_lines`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.3% | 100.0ms |       1 | `__init__`                                                             | `<string>`                                                                                       |

##### `CPyTagged_StealAsObject` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Caller                                                               | Location                                                                                         |
| ----: | ------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 50.0% | 100.0ms |       1 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 50.0% | 100.0ms |       1 | `CPyDef_nodes___whitespace`                                          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_linegen___visit_power_LineGenerator_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |    Time | Samples | Caller                                                          | Location                                                                                         |
| -----: | ------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 200.0ms |       2 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `getwidth` (`/usr/lib/python3.11/re/_parser.py`)

|      % |    Time | Samples | Caller     | Location                            |
| -----: | ------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 100.0ms |       1 | `getwidth` | `/usr/lib/python3.11/re/_parser.py` |

##### `_optimize_charset` (`/usr/lib/python3.11/re/_compiler.py`)

|      % |    Time | Samples | Caller     | Location                              |
| -----: | ------: | ------: | ---------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `_compile` | `/usr/lib/python3.11/re/_compiler.py` |

##### `isEnabledFor` (`/usr/lib/python3.11/logging/__init__.py`)

|      % |    Time | Samples | Caller  | Location                                  |
| -----: | ------: | ------: | ------- | ----------------------------------------- |
| 100.0% | 100.0ms |       1 | `debug` | `/usr/lib/python3.11/logging/__init__.py` |

##### `__init__` (`/usr/lib/python3.11/re/_parser.py`)

|      % |    Time | Samples | Caller   | Location                            |
| -----: | ------: | ------: | -------- | ----------------------------------- |
| 100.0% | 100.0ms |       1 | `_parse` | `/usr/lib/python3.11/re/_parser.py` |

##### `0x7ff2a7b9f109` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller   | Location                              |
| -----: | ------: | ------: | -------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `calloc` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7ff2a7c59aba` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller         | Location                                                                                         |
| -----: | ------: | ------: | -------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPyStr_Build` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7ff2a7c59d8c` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `0x7ff2a7b9f462` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7ff2a7c5962e` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller                                                          | Location                                                                                         |
| -----: | ------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `__libc_malloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller                                                             | Location                                                                                         |
| -----: | ------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `0x7ff2a7c5a480` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Caller                                                         | Location                                                                                         |
| -----: | ------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `CPyDef_trans___hug_power_op_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|      % |   Time | Samples | Function                                         | Location                                                                                         |
| -----: | -----: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 100.0% | 24.50s |     245 | `0x7ff2a7b2e24a`                                 | `/usr/lib/x86_64-linux-gnu/libc.so.6`                                                            |
|  98.4% | 24.10s |     241 | `_run_module_as_main`                            | `<frozen runpy>`                                                                                 |
|  95.1% | 23.30s |     233 | `CPyDef_black___format_file_contents`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  95.1% | 23.30s |     233 | `CPyDef_black___format_file_in_place`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  95.1% | 23.30s |     233 | `CPyDef_black___reformat_one`                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  95.1% | 23.30s |     233 | `CPyPy_black___reformat_one`                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  95.1% | 23.30s |     233 | `CPyDef_black___main`                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  95.1% | 23.30s |     233 | `CPyPy_black___main`                             | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  95.1% | 23.30s |     233 | `new_func`                                       | `/venv/lib/python3.11/site-packages/click/decorators.py`                                         |
|  95.1% | 23.30s |     233 | `invoke`                                         | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
|  95.1% | 23.30s |     233 | `main`                                           | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
|  95.1% | 23.30s |     233 | `__call__`                                       | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
|  95.1% | 23.30s |     233 | `CPyDef_black___patched_main`                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  95.1% | 23.30s |     233 | `CPyPy_black___patched_main`                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  95.1% | 23.30s |     233 | `<module>`                                       | `/venv/lib/python3.11/site-packages/black/__main__.py`                                           |
|  95.1% | 23.30s |     233 | `_run_code`                                      | `<frozen runpy>`                                                                                 |
|  86.9% | 21.30s |     213 | `CPyDef_black____format_str_once`                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  55.9% | 13.70s |     137 | `CPyDef_black___format_str`                      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  39.2% |  9.60s |      96 | `CPyDef_black___check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  34.7% |  8.50s |      85 | `CPyDef_driver___Driver___parse_tokens`          | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

#### Categories

##### Third-party

|     % |   Time | Samples | Function                                                        | Location                                                                                         |
| ----: | -----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 95.1% | 23.30s |     233 | `CPyDef_black___format_file_contents`                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 95.1% | 23.30s |     233 | `CPyDef_black___format_file_in_place`                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 95.1% | 23.30s |     233 | `CPyDef_black___reformat_one`                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 95.1% | 23.30s |     233 | `CPyPy_black___reformat_one`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 95.1% | 23.30s |     233 | `CPyDef_black___main`                                           | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 95.1% | 23.30s |     233 | `CPyPy_black___main`                                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 95.1% | 23.30s |     233 | `new_func`                                                      | `/venv/lib/python3.11/site-packages/click/decorators.py`                                         |
| 95.1% | 23.30s |     233 | `invoke`                                                        | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| 95.1% | 23.30s |     233 | `main`                                                          | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| 95.1% | 23.30s |     233 | `__call__`                                                      | `/venv/lib/python3.11/site-packages/click/core.py`                                               |
| 95.1% | 23.30s |     233 | `CPyDef_black___patched_main`                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 95.1% | 23.30s |     233 | `CPyPy_black___patched_main`                                    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 95.1% | 23.30s |     233 | `<module>`                                                      | `/venv/lib/python3.11/site-packages/black/__main__.py`                                           |
| 86.9% | 21.30s |     213 | `CPyDef_black____format_str_once`                               | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 55.9% | 13.70s |     137 | `CPyDef_black___format_str`                                     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 39.2% |  9.60s |      96 | `CPyDef_black___check_stability_and_equivalence`                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 34.7% |  8.50s |      85 | `CPyDef_driver___Driver___parse_tokens`                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 34.7% |  8.50s |      85 | `CPyDef_driver___Driver___parse_string`                         | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 34.7% |  8.50s |      85 | `CPyDef_parsing___lib2to3_parse`                                | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 33.1% |  8.10s |      81 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### Standard library

|     % |    Time | Samples | Function                    | Location                                  |
| ----: | ------: | ------: | --------------------------- | ----------------------------------------- |
| 98.4% |  24.10s |     241 | `_run_module_as_main`       | `<frozen runpy>`                          |
| 95.1% |  23.30s |     233 | `_run_code`                 | `<frozen runpy>`                          |
|  3.3% | 800.0ms |       8 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>`           |
|  3.3% | 800.0ms |       8 | `_load_unlocked`            | `<frozen importlib._bootstrap>`           |
|  3.3% | 800.0ms |       8 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>`           |
|  3.3% | 800.0ms |       8 | `_find_and_load`            | `<frozen importlib._bootstrap>`           |
|  3.3% | 800.0ms |       8 | `create_module`             | `<frozen importlib._bootstrap_external>`  |
|  3.3% | 800.0ms |       8 | `module_from_spec`          | `<frozen importlib._bootstrap>`           |
|  3.3% | 800.0ms |       8 | `_get_module_details`       | `<frozen runpy>`                          |
|  2.0% | 500.0ms |       5 | `parse`                     | `/usr/lib/python3.11/ast.py`              |
|  1.6% | 400.0ms |       4 | `exec_module`               | `<frozen importlib._bootstrap_external>`  |
|  1.2% | 300.0ms |       3 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py`     |
|  1.2% | 300.0ms |       3 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py`      |
|  0.8% | 200.0ms |       2 | `_code`                     | `/usr/lib/python3.11/re/_compiler.py`     |
|  0.8% | 200.0ms |       2 | `compile`                   | `/usr/lib/python3.11/re/__init__.py`      |
|  0.4% | 100.0ms |       1 | `getwidth`                  | `/usr/lib/python3.11/re/_parser.py`       |
|  0.4% | 100.0ms |       1 | `_compile_info`             | `/usr/lib/python3.11/re/_compiler.py`     |
|  0.4% | 100.0ms |       1 | `_optimize_charset`         | `/usr/lib/python3.11/re/_compiler.py`     |
|  0.4% | 100.0ms |       1 | `_compile`                  | `/usr/lib/python3.11/re/_compiler.py`     |
|  0.4% | 100.0ms |       1 | `isEnabledFor`              | `/usr/lib/python3.11/logging/__init__.py` |

##### Native

|      % |    Time | Samples | Function              | Location                                         |
| -----: | ------: | ------: | --------------------- | ------------------------------------------------ |
| 100.0% |  24.50s |     245 | `0x7ff2a7b2e24a`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   0.4% | 100.0ms |       1 | `0x7ff2a7b9f109`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   0.4% | 100.0ms |       1 | `calloc`              | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   0.4% | 100.0ms |       1 | `0x7ff2a7e22cba`      | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|   0.4% | 100.0ms |       1 | `0x7ff2a7e1e67f`      | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|   0.4% | 100.0ms |       1 | `0x7ff2a7e200c5`      | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|   0.4% | 100.0ms |       1 | `0x7ff2a7e23a55`      | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|   0.4% | 100.0ms |       1 | `_dl_catch_exception` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   0.4% | 100.0ms |       1 | `0x7ff2a7e23216`      | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|   0.4% | 100.0ms |       1 | `0x7ff2a7e23608`      | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
|   0.4% | 100.0ms |       1 | `0x7ff2a7b8c4b8`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   0.4% | 100.0ms |       1 | `_dl_catch_error`     | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   0.4% | 100.0ms |       1 | `0x7ff2a7b8bfa7`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   0.4% | 100.0ms |       1 | `dlopen`              | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   0.4% | 100.0ms |       1 | `0x7ff2a7c59aba`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   0.4% | 100.0ms |       1 | `0x7ff2a7c59d8c`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   0.4% | 100.0ms |       1 | `0x7ff2a7b9f462`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   0.4% | 100.0ms |       1 | `realloc`             | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   0.4% | 100.0ms |       1 | `0x7ff2a7c5962e`      | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |
|   0.4% | 100.0ms |       1 | `__libc_malloc`       | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |

##### Ours

|    % |    Time | Samples | Function   | Location   |
| ---: | ------: | ------: | ---------- | ---------- |
| 1.2% | 300.0ms |       3 | `__init__` | `<string>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `0x7ff2a7b2e24a` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|     % |    Time | Samples | Callee                | Location                                                                                         |
| ----: | ------: | ------: | --------------------- | ------------------------------------------------------------------------------------------------ |
| 98.4% |  24.10s |     241 | `_run_module_as_main` | `<frozen runpy>`                                                                                 |
|  1.2% | 300.0ms |       3 | `pytree___Node_clear` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_run_module_as_main` (`<frozen runpy>`)

|     % |    Time | Samples | Callee                | Location         |
| ----: | ------: | ------: | --------------------- | ---------------- |
| 96.7% |  23.30s |     233 | `_run_code`           | `<frozen runpy>` |
|  3.3% | 800.0ms |       8 | `_get_module_details` | `<frozen runpy>` |

##### `CPyDef_black___format_file_contents` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |   Time | Samples | Callee                                           | Location                                                                                         |
| ----: | -----: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 58.8% | 13.70s |     137 | `CPyDef_black___format_str`                      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 41.2% |  9.60s |      96 | `CPyDef_black___check_stability_and_equivalence` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_file_in_place` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                                | Location                                                                                         |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 23.30s |     233 | `CPyDef_black___format_file_contents` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___reformat_one` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                                | Location                                                                                         |
| -----: | -----: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 23.30s |     233 | `CPyDef_black___format_file_in_place` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyPy_black___reformat_one` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                        | Location                                                                                         |
| -----: | -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 23.30s |     233 | `CPyDef_black___reformat_one` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                       | Location                                                                                         |
| -----: | -----: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 23.30s |     233 | `CPyPy_black___reformat_one` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyPy_black___main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                | Location                                                                                         |
| -----: | -----: | ------: | --------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 23.30s |     233 | `CPyDef_black___main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`)

|      % |   Time | Samples | Callee               | Location                                                                                         |
| -----: | -----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 23.30s |     233 | `CPyPy_black___main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |   Time | Samples | Callee     | Location                                                 |
| -----: | -----: | ------: | ---------- | -------------------------------------------------------- |
| 100.0% | 23.30s |     233 | `new_func` | `/venv/lib/python3.11/site-packages/click/decorators.py` |
| 100.0% | 23.30s |     233 | `invoke`   | `/venv/lib/python3.11/site-packages/click/core.py`       |

##### `main` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |   Time | Samples | Callee   | Location                                           |
| -----: | -----: | ------: | -------- | -------------------------------------------------- |
| 100.0% | 23.30s |     233 | `invoke` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `__call__` (`/venv/lib/python3.11/site-packages/click/core.py`)

|      % |   Time | Samples | Callee | Location                                           |
| -----: | -----: | ------: | ------ | -------------------------------------------------- |
| 100.0% | 23.30s |     233 | `main` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee     | Location                                           |
| -----: | -----: | ------: | ---------- | -------------------------------------------------- |
| 100.0% | 23.30s |     233 | `__call__` | `/venv/lib/python3.11/site-packages/click/core.py` |

##### `CPyPy_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                        | Location                                                                                         |
| -----: | -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 23.30s |     233 | `CPyDef_black___patched_main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`)

|      % |   Time | Samples | Callee                       | Location                                                                                         |
| -----: | -----: | ------: | ---------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 23.30s |     233 | `CPyPy_black___patched_main` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_run_code` (`<frozen runpy>`)

|      % |   Time | Samples | Callee     | Location                                               |
| -----: | -----: | ------: | ---------- | ------------------------------------------------------ |
| 100.0% | 23.30s |     233 | `<module>` | `/venv/lib/python3.11/site-packages/black/__main__.py` |

##### `CPyDef_black____format_str_once` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Callee                                                             | Location                                                                                         |
| ----: | ------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 39.9% |   8.50s |      85 | `CPyDef_parsing___lib2to3_parse`                                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 38.0% |   8.10s |      81 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  8.9% |   1.90s |      19 | `CPyDef_linegen___transform_line_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  5.2% |   1.10s |      11 | `CPyDef_black___detect_target_versions`                            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  2.8% | 600.0ms |       6 | `CPyDef_lines___EmptyLineTracker___maybe_empty_lines`              | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___format_str` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |   Time | Samples | Callee                            | Location                                                                                         |
| -----: | -----: | ------: | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 13.70s |     137 | `CPyDef_black____format_str_once` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_black___check_stability_and_equivalence` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |  Time | Samples | Callee                             | Location                                                                                         |
| ----: | ----: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| 79.2% | 7.60s |      76 | `CPyDef_black___assert_stable`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.8% |    2s |      20 | `CPyDef_black___assert_equivalent` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_tokens` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |    Time | Samples | Callee                                  | Location                                                                                         |
| ----: | ------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 50.6% |   4.30s |      43 | `CPyDef_parse___Parser___addtoken`      | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 28.2% |   2.40s |      24 | `CPyDef_driver___TokenProxy_____next__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  2.4% | 200.0ms |       2 | `pytree___Node_clear`                   | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  1.2% | 100.0ms |       1 | `debug`                                 | `/usr/lib/python3.11/logging/__init__.py`                                                        |
|  1.2% | 100.0ms |       1 | `0x7ff2a708e6b0`                        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_driver___Driver___parse_string` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |  Time | Samples | Callee                                  | Location                                                                                         |
| -----: | ----: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 8.50s |      85 | `CPyDef_driver___Driver___parse_tokens` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_parsing___lib2to3_parse` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|      % |  Time | Samples | Callee                                  | Location                                                                                         |
| -----: | ----: | ------: | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 8.50s |      85 | `CPyDef_driver___Driver___parse_string` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`)

|     % |  Time | Samples | Callee                                                                              | Location                                                                                         |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 98.8% |    8s |      80 | `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 98.8% |    8s |      80 | `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__`        | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 97.5% | 7.90s |      79 | `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__`       | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 93.8% | 7.60s |      76 | `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__`     | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 61.7% |    5s |      50 | `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Callee                     | Location                                                                                         |
| -----: | ------: | ------: | -------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% | 800.0ms |       8 | `CPyInit_black`            | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  25.0% | 200.0ms |       2 | `CPyInit_black___nodes`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  25.0% | 200.0ms |       2 | `CPyInit_black___comments` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
|  25.0% | 200.0ms |       2 | `<module>`                 | `/venv/lib/python3.11/site-packages/packaging/version.py`                                        |
|  25.0% | 200.0ms |       2 | `<module>`                 | `/venv/lib/python3.11/site-packages/packaging/_ranges.py`                                        |

##### `_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Callee             | Location                                 |
| -----: | ------: | ------: | ------------------ | ---------------------------------------- |
| 100.0% | 800.0ms |       8 | `module_from_spec` | `<frozen importlib._bootstrap>`          |
|  50.0% | 400.0ms |       4 | `exec_module`      | `<frozen importlib._bootstrap_external>` |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Callee           | Location                        |
| -----: | ------: | ------: | ---------------- | ------------------------------- |
| 100.0% | 800.0ms |       8 | `_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `_find_and_load` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Callee                    | Location                        |
| -----: | ------: | ------: | ------------------------- | ------------------------------- |
| 100.0% | 800.0ms |       8 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>` |

##### `create_module` (`<frozen importlib._bootstrap_external>`)

|      % |    Time | Samples | Callee                      | Location                        |
| -----: | ------: | ------: | --------------------------- | ------------------------------- |
| 100.0% | 800.0ms |       8 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `module_from_spec` (`<frozen importlib._bootstrap>`)

|      % |    Time | Samples | Callee          | Location                                 |
| -----: | ------: | ------: | --------------- | ---------------------------------------- |
| 100.0% | 800.0ms |       8 | `create_module` | `<frozen importlib._bootstrap_external>` |

##### `_get_module_details` (`<frozen runpy>`)

|      % |    Time | Samples | Callee                | Location                        |
| -----: | ------: | ------: | --------------------- | ------------------------------- |
| 100.0% | 800.0ms |       8 | `_find_and_load`      | `<frozen importlib._bootstrap>` |
| 100.0% | 800.0ms |       8 | `_get_module_details` | `<frozen runpy>`                |

##### `parse` (`/usr/lib/python3.11/ast.py`)

|     % |    Time | Samples | Callee                   | Location                                                                                         |
| ----: | ------: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------ |
| 20.0% | 100.0ms |       1 | `pytree___Node_traverse` | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |
| 20.0% | 100.0ms |       1 | `pytree___Node_clear`    | `/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so` |

##### `exec_module` (`<frozen importlib._bootstrap_external>`)

|      % |    Time | Samples | Callee                      | Location                        |
| -----: | ------: | ------: | --------------------------- | ------------------------------- |
| 100.0% | 400.0ms |       4 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>` |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py`)

|     % |    Time | Samples | Callee  | Location                              |
| ----: | ------: | ------: | ------- | ------------------------------------- |
| 66.7% | 200.0ms |       2 | `_code` | `/usr/lib/python3.11/re/_compiler.py` |
| 33.3% | 100.0ms |       1 | `parse` | `/usr/lib/python3.11/re/_parser.py`   |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py`)

|      % |    Time | Samples | Callee    | Location                              |
| -----: | ------: | ------: | --------- | ------------------------------------- |
| 100.0% | 300.0ms |       3 | `compile` | `/usr/lib/python3.11/re/_compiler.py` |

##### `__init__` (`<string>`)

|     % |    Time | Samples | Callee     | Location   |
| ----: | ------: | ------: | ---------- | ---------- |
| 33.3% | 100.0ms |       1 | `__init__` | `<string>` |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py`)

|     % |    Time | Samples | Callee          | Location                              |
| ----: | ------: | ------: | --------------- | ------------------------------------- |
| 50.0% | 100.0ms |       1 | `_compile_info` | `/usr/lib/python3.11/re/_compiler.py` |
| 50.0% | 100.0ms |       1 | `_compile`      | `/usr/lib/python3.11/re/_compiler.py` |

##### `compile` (`/usr/lib/python3.11/re/__init__.py`)

|      % |    Time | Samples | Callee     | Location                             |
| -----: | ------: | ------: | ---------- | ------------------------------------ |
| 100.0% | 200.0ms |       2 | `_compile` | `/usr/lib/python3.11/re/__init__.py` |

##### `getwidth` (`/usr/lib/python3.11/re/_parser.py`)

|      % |    Time | Samples | Callee     | Location                            |
| -----: | ------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 100.0ms |       1 | `getwidth` | `/usr/lib/python3.11/re/_parser.py` |

##### `_compile_info` (`/usr/lib/python3.11/re/_compiler.py`)

|      % |    Time | Samples | Callee     | Location                            |
| -----: | ------: | ------: | ---------- | ----------------------------------- |
| 100.0% | 100.0ms |       1 | `getwidth` | `/usr/lib/python3.11/re/_parser.py` |

##### `_compile` (`/usr/lib/python3.11/re/_compiler.py`)

|      % |    Time | Samples | Callee              | Location                              |
| -----: | ------: | ------: | ------------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `_optimize_charset` | `/usr/lib/python3.11/re/_compiler.py` |
| 100.0% | 100.0ms |       1 | `_compile`          | `/usr/lib/python3.11/re/_compiler.py` |

##### `calloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `0x7ff2a7b9f109` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7ff2a7e22cba` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|      % |    Time | Samples | Callee   | Location                              |
| -----: | ------: | ------: | -------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `calloc` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7ff2a7e1e67f` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|      % |    Time | Samples | Callee           | Location                                         |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `0x7ff2a7e22cba` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `0x7ff2a7e200c5` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|      % |    Time | Samples | Callee           | Location                                         |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `0x7ff2a7e1e67f` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `0x7ff2a7e23a55` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|      % |    Time | Samples | Callee           | Location                                         |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `0x7ff2a7e200c5` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `_dl_catch_exception` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee           | Location                                         |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `0x7ff2a7e23a55` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| 100.0% | 100.0ms |       1 | `0x7ff2a7e23216` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |
| 100.0% | 100.0ms |       1 | `0x7ff2a7b8c4b8` | `/usr/lib/x86_64-linux-gnu/libc.so.6`            |

##### `0x7ff2a7e23216` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|      % |    Time | Samples | Callee                | Location                              |
| -----: | ------: | ------: | --------------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `_dl_catch_exception` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7ff2a7e23608` (`/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2`)

|      % |    Time | Samples | Callee                | Location                              |
| -----: | ------: | ------: | --------------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `_dl_catch_exception` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7ff2a7b8c4b8` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee           | Location                                         |
| -----: | ------: | ------: | ---------------- | ------------------------------------------------ |
| 100.0% | 100.0ms |       1 | `0x7ff2a7e23608` | `/usr/lib/x86_64-linux-gnu/ld-linux-x86-64.so.2` |

##### `_dl_catch_error` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee                | Location                              |
| -----: | ------: | ------: | --------------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `_dl_catch_exception` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7ff2a7b8bfa7` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee            | Location                              |
| -----: | ------: | ------: | ----------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `_dl_catch_error` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `dlopen` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `0x7ff2a7b8bfa7` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `0x7ff2a7b9f462` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `0x7ff2a7c59d8c` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

##### `realloc` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|      % |    Time | Samples | Callee           | Location                              |
| -----: | ------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 100.0ms |       1 | `0x7ff2a7b9f462` | `/usr/lib/x86_64-linux-gnu/libc.so.6` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `CPyDef_black___format_file_contents` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black___format_file_in_place` ← `CPyDef_black___reformat_one` ← `CPyPy_black___reformat_one` ← `CPyDef_black___main` ← `CPyPy_black___main` ← `new_func` (`/venv/lib/python3.11/site-packages/click/decorators.py`) ← `invoke` (`/venv/lib/python3.11/site-packages/click/core.py`) ← `invoke` ← `main` ← `__call__` ← `CPyDef_black___patched_main` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyPy_black___patched_main` ← `<module>` (`/venv/lib/python3.11/site-packages/black/__main__.py`) ← `_run_code` (`<frozen runpy>`) ← `_run_module_as_main` ← `0x7ff2a7b2e24a` (`/usr/lib/x86_64-linux-gnu/libc.so.6`)

|    % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---: | ------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5.3% |   1.30s |      13 | `CPyDef_parse___Parser____addtoken` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 4.1% | 999.9ms |      10 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3.7% | 900.0ms |       9 | `CPyDef_driver___Driver___parse_tokens` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 2.9% | 700.0ms |       7 | `CPyDef_tokenize___generate_tokens_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___TokenProxy_____next__` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.4% | 600.0ms |       6 | `CPyDef_parse___Parser___pop` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 2.0% | 500.0ms |       5 | `CPyDef_parse___Parser____addtoken` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.6% | 400.0ms |       4 | `CPyDef_parse___Parser___push` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.6% | 400.0ms |       4 | `CPyDef_black___get_features_used` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_black___detect_target_versions` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.6% | 400.0ms |       4 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 1.6% | 400.0ms |       4 | `CPyDef_parse___Parser___pop` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.6% | 400.0ms |       4 | `CPyDef_driver___Driver___parse_tokens` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.2% | 300.0ms |       3 | `parse` (`/usr/lib/python3.11/ast.py`) ← `CPyDef_parsing____parse_single_version` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing___parse_ast` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.2% | 300.0ms |       3 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.2% | 300.0ms |       3 | `CPyDef_parse___Parser___push` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parse___Parser____addtoken` ← `CPyDef_parse___Parser___addtoken` ← `CPyDef_driver___Driver___parse_tokens` ← `CPyDef_driver___Driver___parse_string` ← `CPyDef_parsing___lib2to3_parse` ← `CPyDef_black____format_str_once` ← `CPyDef_black___assert_stable` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 0.8% | 200.0ms |       2 | `CPyDef_mode___Mode_____contains__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_lines___Line___is_docstring` ← `CPyDef_lines___EmptyLineTracker____maybe_empty_lines` ← `CPyDef_lines___EmptyLineTracker___maybe_empty_lines` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.8% | 200.0ms |       2 | `CPyDef_linegen___LineGenerator___line` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.8% | 200.0ms |       2 | `CPyDef_lines___Line___is_def` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_lines___EmptyLineTracker____maybe_empty_lines` ← `CPyDef_lines___EmptyLineTracker___maybe_empty_lines` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 0.8% | 200.0ms |       2 | `pytree___Leaf_traverse` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_nodes___Visitor___visit` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_power_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str`                                                                                                                                                                                                                                      |
| 0.8% | 200.0ms |       2 | `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_power_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_simple_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_funcdef_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_suite_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_stmt_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_default_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_linegen___visit_default_LineGenerator_gen_____mypyc_generator_helper__` ← `CPyDef_nodes___visit_Visitor_gen_____mypyc_generator_helper__` ← `CPyDef_black____format_str_once` ← `CPyDef_black___format_str` |
| 0.8% | 200.0ms |       2 | `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` (`/venv/lib/python3.11/site-packages/30fcd23745efe32ce681__mypyc.cpython-311-x86_64-linux-gnu.so`) ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_with_new_parent_gen_____mypyc_generator_helper__` ← `CPyDef_parsing____stringify_ast_gen_____mypyc_generator_helper__` ← `CPyDef_black___assert_equivalent` ← `CPyDef_black___check_stability_and_equivalence`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
